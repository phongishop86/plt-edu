/* PLT-Edu – Service Worker: cho phép học khi không có mạng (PWA)
   - VER được tools/bump-version.sh tự đổi mỗi lần cập nhật → kho cũ bị xoá, học sinh nhận bản mới.
   - Trang chính (index.html): lấy mạng trước, mất mạng mới dùng bản đã lưu.
   - CSS/JS/ảnh/môn học: dùng bản đã lưu trước (nhanh), chưa có thì tải và lưu lại.
   - Font Google: dùng bản đã lưu, đồng thời cập nhật ngầm. */
const VER = '202611251415';
const CACHE = 'plt-edu-' + VER;
const FONT_CACHE = 'plt-edu-fonts';

const v = (f) => f + '?v=' + VER;
const SHELL = [
  './', 'manifest.webmanifest',
  v('assets/css/style.css'),
  ...['eco', 'core', 'widgets', 'engine', 'mathlib', 'tvlib', 'kblib', 'avail', 'app'].map((n) => v('assets/js/' + n + '.js')),
  'assets/img/logo-96.png', 'assets/img/logo-192.png', 'assets/img/favicon-32.png',
  'assets/img/eco-edu.png', 'assets/img/eco-ai.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('plt-edu-') && k !== CACHE && k !== FONT_CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

async function putSafe(cacheName, req, res) {
  try { const c = await caches.open(cacheName); await c.put(req, res); } catch (err) { /* hết dung lượng: bỏ qua */ }
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return; // AI chấm bài (POST) đi thẳng ra mạng
  const url = new URL(req.url);

  // Font Google
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.match(req).then((hit) => {
      const net = fetch(req).then((res) => { if (res.ok || res.type === 'opaque') putSafe(FONT_CACHE, req, res.clone()); return res; }).catch(() => hit);
      return hit || net;
    }));
    return;
  }
  if (url.origin !== self.location.origin) return;

  // Trang chính: mạng trước
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then((res) => { if (res.ok) putSafe(CACHE, './', res.clone()); return res; })
        .catch(() => caches.match('./', { ignoreSearch: true }).then((r) => r || caches.match(req, { ignoreSearch: true })))
    );
    return;
  }

  // Tài nguyên tĩnh + môn học: bản lưu trước
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((res) => {
    if (res.ok) putSafe(CACHE, req, res.clone());
    return res;
  })));
});

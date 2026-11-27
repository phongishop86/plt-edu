/* PLT-Edu · Tài khoản dùng chung (PLT-Edu + AI Edu) và đồng bộ tiến độ qua Firebase.
   - Nút 👤 Tài khoản gắn vào header của trang (PLT-Edu: trước nút ⚙️; AI Edu: cạnh nút "Học ngay"
     hoặc một thanh mảnh trên cùng ở các trang lớp học).
   - Chưa có cấu hình Firebase (assets/js/firebase-config.js) thì web vẫn chạy, tiến độ lưu trên máy.
   - Có cấu hình: đăng nhập Google / email, tiến độ (pltedu_v1 + plt-aiedu-*) lưu ở Firestore users/{uid}.
   Dùng: window.PLT_ECO = { current: 'edu' | 'ai', root: 'đường dẫn tới thư mục gốc PLT-Edu', loginBefore: 'selector' } */
(function () {
  'use strict';
  var cfg = window.PLT_ECO || {}; var cur = cfg.current || 'edu'; var root = cfg.root || cfg.base || '';
  var SDK = 'https://www.gstatic.com/firebasejs/10.12.2/';
  var SYNC = function (k) { return k === 'pltedu_v1' || k.indexOf('plt-aiedu-') === 0 || k === 'aiedu-notes'; };
  var META = 'plt-sync';
  var fb = null, auth = null, db = null, user = null, ready = false, timer = 0, busy = false, lastAt = 0, err = '';

  var css = '.acc-b{display:inline-flex;align-items:center;gap:7px;font:700 14px/1 "Be Vietnam Pro",system-ui,sans-serif;color:#1B2A4A;background:#F4A261;border:0;border-radius:99px;padding:6px 14px 6px 6px;cursor:pointer;white-space:nowrap;flex:none}' +
    '.acc-b:hover{filter:brightness(1.06)}.acc-b i{display:grid;place-items:center;width:28px;height:28px;border-radius:50%;background:#1B2A4A;color:#F4A261;font-style:normal;font-size:14px;overflow:hidden}.acc-b i img{width:100%;height:100%;object-fit:cover}' +
    '.acc-b.on{background:#E1EFEB}.acc-b .dot{width:8px;height:8px;border-radius:50%;background:#1f9d63;margin-left:-2px}.acc-b .dot.wait{background:#F2C94C}.acc-b .dot.bad{background:#d93f45}' +
    '@media (max-width:1060px){.acc-b span{display:none}.acc-b{padding:6px}}' +
    '.acc-m{position:fixed;inset:0;background:rgba(12,19,34,.55);display:grid;place-items:center;z-index:1000;padding:16px}' +
    '.acc-m .b{position:relative;background:#FFFDF8;color:#1B2A4A;border-radius:18px;max-width:420px;width:100%;max-height:92vh;overflow:auto;padding:22px;font:15px/1.55 "Be Vietnam Pro",system-ui,sans-serif;box-shadow:0 24px 48px rgba(0,0,0,.35)}' +
    '.acc-m h3{margin:0 0 6px;font-size:20px}.acc-m p{margin:6px 0}.acc-m .x{position:absolute;right:12px;top:10px;border:0;background:none;font-size:22px;cursor:pointer;color:#55607A}' +
    '.acc-m input{width:100%;font:inherit;padding:10px 12px;border:2px solid #E3DED1;border-radius:10px;margin:5px 0;background:#fff;color:#1B2A4A}.acc-m input:focus{outline:none;border-color:#F4A261}' +
    '.acc-m .bt{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;font:inherit;font-weight:700;border:0;border-radius:10px;padding:10px 14px;margin:6px 0;background:#1B2A4A;color:#FAF7F0;cursor:pointer}' +
    '.acc-m .bt.g{background:#fff;color:#1B2A4A;border:2px solid #E3DED1}.acc-m .bt.o{background:#D9661F}.acc-m .bt.l{background:#fff;color:#c62e3b;border:2px solid #f3c6ca}.acc-m .bt:disabled{opacity:.6;cursor:wait}' +
    '.acc-m .row2{display:grid;grid-template-columns:1fr 1fr;gap:8px}.acc-m .or{text-align:center;color:#8a93a6;font-size:13px;margin:8px 0}.acc-m a{color:#3B6FE0;cursor:pointer}' +
    '.acc-m .er{color:#c62e3b;font-size:14px;min-height:1em}.acc-m .ok{color:#1f9d63;font-size:14px}.acc-m small{color:#55607A}' +
    '.acc-m .me{display:flex;gap:12px;align-items:center;margin:6px 0 12px}.acc-m .me i{display:grid;place-items:center;width:52px;height:52px;border-radius:50%;background:#1B2A4A;color:#F4A261;font-style:normal;font-size:22px;font-weight:800;overflow:hidden;flex:none}.acc-m .me i img{width:100%;height:100%}' +
    '.acc-m label.ck{display:flex;gap:8px;align-items:center;font-size:14px;margin:8px 0}.acc-m label.ck input{width:auto;margin:0}' +
    '.acc-bar{background:#1B2A4A;color:#FAF7F0;font:600 14px/1.2 "Be Vietnam Pro",system-ui,sans-serif;position:relative;z-index:30;border-bottom:3px solid #F4A261}' +
    '.acc-bar .in{max-width:1180px;margin:auto;display:flex;align-items:center;gap:10px;padding:6px 16px}.acc-bar a{color:#FAF7F0;text-decoration:none;display:flex;align-items:center;gap:8px;white-space:nowrap}' +
    '.acc-bar a img{width:30px;height:30px;border-radius:50%}.acc-bar a.ai{color:#C2CCDD;padding:5px 10px;border-radius:99px}.acc-bar a.ai:hover{background:rgba(255,255,255,.1)}.acc-bar .acc-b{margin-left:auto}';

  function el(h) { var d = document.createElement('div'); d.innerHTML = h; return d.firstChild; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function load(src) { return new Promise(function (ok, no) { var s = document.createElement('script'); s.src = src; s.onload = ok; s.onerror = no; document.head.appendChild(s); }); }
  function meta() { try { return JSON.parse(localStorage.getItem(META)) || {}; } catch (e) { return {}; } }
  function setMeta(m) { try { _set.call(localStorage, META, JSON.stringify(m)); } catch (e) { /* bỏ qua */ } }
  function snap() { var o = {}; try { for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); if (SYNC(k)) o[k] = localStorage.getItem(k); } } catch (e) { /* bỏ qua */ } return o; }
  function size(o) { var n = 0; for (var k in o) n += (o[k] || '').length; return n; }
  function when(t) { if (!t) return 'chưa'; var d = new Date(t); return d.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }) + ' ' + d.toLocaleDateString('vi-VN'); }

  /* Ghi vào localStorage các khoá tiến độ → tự đẩy lên tài khoản sau 4 giây */
  var _set = Storage.prototype.setItem;
  Storage.prototype.setItem = function (k, v) { _set.call(this, k, v); if (this === window.localStorage && SYNC(k) && user) schedule(); };
  function schedule() { clearTimeout(timer); timer = setTimeout(push, 4000); paint(); }
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden' && timer && user) { clearTimeout(timer); push(); } });

  function push() {
    timer = 0; if (!user || !db) return Promise.resolve();
    var store = snap(); if (size(store) > 900000) { err = 'Dữ liệu quá lớn để đồng bộ'; paint(); return Promise.resolve(); }
    var at = Date.now(); busy = true; paint();
    return db.collection('users').doc(user.uid).set({ store: store, at: at, name: user.displayName || '', email: user.email || '', site: cur }, { merge: false })
      .then(function () { lastAt = at; err = ''; setMeta({ uid: user.uid, at: at }); boardSync(); })
      .catch(function (e) { err = 'Chưa đồng bộ được (' + (e.code || 'lỗi mạng') + ')'; })
      .then(function () { busy = false; paint(); });
  }
  /* Bảng xếp hạng XP tháng: chỉ ghi khi người học tự bật (plan.board), học sinh lớp 1–7 không hiện */
  var lastBoard = '';
  function monthKey() { var d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0'); }
  function boardSync() {
    if (!user || !db) return Promise.resolve(); var d; try { d = JSON.parse(localStorage.getItem('pltedu_v1')) || {}; } catch (e) { return Promise.resolve(); }
    var p = d.plan || {}, g = d.gam || {}, m = monthKey(), xp = 0, days = g.days || {};
    for (var k in days) if (k.slice(0, 7) === m) xp += Math.round(+days[k] || 0);
    var child = p.role === 'hs' && p.lop && p.lop <= 7, on = !!p.board && !child;
    var nm = String((d.settings && d.settings.name) || (user.displayName || '').split(' ').slice(-1)[0] || 'Bạn học').trim().slice(0, 30) || 'Bạn học';
    var sig = on + '|' + m + '|' + xp + '|' + nm; if (sig === lastBoard) return Promise.resolve(); lastBoard = sig;
    var ref = db.collection('boards').doc(m).collection('users').doc(user.uid);
    return (on ? ref.set({ name: nm, xp: Math.min(200000, xp), at: Date.now() }) : ref.delete()).catch(function () { lastBoard = ''; });
  }
  function apply(store, at) {
    var keep = snap(); for (var k in keep) if (!(k in store)) localStorage.removeItem(k);
    for (var j in store) _set.call(localStorage, j, store[j]);
    setMeta({ uid: user.uid, at: at }); lastAt = at; location.reload();
  }
  function ready2() { setTimeout(boardSync, 500); try { window.dispatchEvent(new CustomEvent('plt-login', { detail: { uid: user && user.uid } })); } catch (e) { /* bỏ qua */ } }
  function pull(first) {
    if (!user || !db) return; busy = true; paint();
    db.collection('users').doc(user.uid).get().then(function (doc) {
      busy = false; var d = doc.exists ? doc.data() : null, m = meta(), local = snap();
      var hasLocal = size(local) > 40, hasRemote = d && d.store && size(d.store) > 40;
      if (!hasRemote) { ready2(); return push(); }
      if (!hasLocal) return apply(d.store, d.at);
      if (m.uid === user.uid) { if ((d.at || 0) > (m.at || 0)) return apply(d.store, d.at); lastAt = m.at; ready2(); if (JSON.stringify(d.store) !== JSON.stringify(local)) return push(); paint(); return; }
      if (JSON.stringify(d.store) === JSON.stringify(local)) { setMeta({ uid: user.uid, at: d.at }); lastAt = d.at; ready2(); paint(); return; }
      if (first) choose(d);
    }).catch(function (e) { busy = false; err = 'Không tải được tiến độ (' + (e.code || 'lỗi mạng') + ')'; paint(); });
  }
  function choose(d) {
    modal('<h3>☁️ Chọn tiến độ để dùng</h3><p>Tài khoản của em đã có tiến độ (lưu lúc <b>' + when(d.at) + '</b>), và máy này cũng có tiến độ khác.</p>' +
      '<button class="bt o" data-k="r">☁️ Dùng tiến độ trên tài khoản</button><button class="bt g" data-k="l">💻 Dùng tiến độ của máy này (ghi đè tài khoản)</button><small>Mẹo: chọn bên nào em học nhiều hơn.</small>', function (b, k) {
      if (k === 'r') apply(d.store, d.at); else if (k === 'l') { close(); ready2(); push(); }
    }, true);
  }

  /* ---------- Giao diện ---------- */
  var btns = [];
  function ini(u) { var n = (u && (u.displayName || u.email)) || '?'; return esc(n.trim().charAt(0).toUpperCase()); }
  function face(u) { return u && u.photoURL ? '<img src="' + esc(u.photoURL) + '" alt="" referrerpolicy="no-referrer">' : ini(u); }
  function paint() {
    btns.forEach(function (b) {
      if (user) { var nm = (user.displayName || user.email || '').split(/[ @]/)[0]; b.className = 'acc-b on'; b.title = 'Tài khoản: ' + (user.email || ''); b.innerHTML = '<i>' + face(user) + '</i><span>' + esc(nm) + '</span><em class="dot' + (err ? ' bad' : busy || timer ? ' wait' : '') + '"></em>'; }
      else { b.className = 'acc-b'; b.title = 'Đăng nhập để lưu tiến độ trên mọi thiết bị'; b.innerHTML = '<i>👤</i><span>Đăng nhập</span>'; }
    });
    var st = document.getElementById('acc-st'); if (st) st.innerHTML = status();
  }
  function status() { return err ? '<span class="er">⚠️ ' + esc(err) + '</span>' : busy || timer ? '⏳ Đang đồng bộ…' : '<span class="ok">✓ Đã đồng bộ lúc ' + when(lastAt) + '</span>'; }
  var M = null;
  function close() { if (M) { M.remove(); M = null; } }
  function modal(h, on, sticky) {
    close(); M = el('<div class="acc-m"><div class="b" role="dialog" aria-modal="true">' + (sticky ? '' : '<button class="x" aria-label="Đóng">×</button>') + h + '</div></div>');
    M.addEventListener('click', function (e) { if (!sticky && (e.target === M || e.target.classList.contains('x'))) return close(); var b = e.target.closest('[data-k]'); if (b && on) on(b, b.dataset.k); });
    document.body.appendChild(M); var f = M.querySelector('input'); if (f) f.focus();
  }
  var ERR = { 'auth/invalid-email': 'Email không hợp lệ.', 'auth/missing-password': 'Em chưa nhập mật khẩu.', 'auth/weak-password': 'Mật khẩu cần ít nhất 6 ký tự.', 'auth/email-already-in-use': 'Email này đã có tài khoản – hãy bấm Đăng nhập.', 'auth/invalid-credential': 'Sai email hoặc mật khẩu.', 'auth/wrong-password': 'Sai mật khẩu.', 'auth/user-not-found': 'Chưa có tài khoản với email này.', 'auth/too-many-requests': 'Thử quá nhiều lần, đợi vài phút rồi thử lại.', 'auth/network-request-failed': 'Mất kết nối mạng.', 'auth/popup-closed-by-user': 'Em đã đóng cửa sổ đăng nhập.', 'auth/unauthorized-domain': 'Tên miền này chưa được cho phép trong Firebase.', 'auth/operation-not-allowed': 'Cách đăng nhập này chưa được bật trong Firebase.' };
  function say(e) { var x = M && M.querySelector('.er'); if (x) x.textContent = ERR[e && e.code] || ('Có lỗi: ' + ((e && (e.code || e.message)) || '')); M && M.querySelectorAll('.bt').forEach(function (b) { b.disabled = false; }); }
  function open() {
    if (!fb) {
      return modal('<h3>👤 Tài khoản PLT-Edu</h3><p>Một tài khoản dùng chung cho <b>PLT-Edu</b> và <b>AI Edu</b>:</p><ul><li>Lưu tiến độ, điểm kiểm tra, XP trên mọi thiết bị</li><li>Học ở trường, về nhà học tiếp</li></ul><p style="color:#55607A">' + (ready ? 'Tính năng đăng nhập đang được thiết lập.' : 'Đang tải…') + ' Hiện tại tiến độ vẫn được lưu ngay trên trình duyệt của máy này.</p><button class="bt" data-k="c">Đã hiểu</button>', function (b, k) { if (k === 'c') close(); });
    }
    if (user) {
      return modal('<h3>👤 Tài khoản</h3><div class="me"><i>' + face(user) + '</i><div><b>' + esc(user.displayName || 'Học sinh PLT-Edu') + '</b><br><small>' + esc(user.email || '') + '</small></div></div>' +
        '<p id="acc-st">' + status() + '</p><p><small>Tiến độ PLT-Edu, Ngoại ngữ và AI Edu tự lưu lên tài khoản vài giây sau mỗi lần học.</small></p>' +
        (isAdmin() ? '<a class="bt o" href="' + root + '#/quan-tri" data-k="plan" style="text-decoration:none">📊 Trang quản trị</a>' : '') + '<a class="bt g" href="' + root + '#/lo-trinh" data-k="plan" style="text-decoration:none">🧭 Lộ trình học tập của em</a><button class="bt" data-k="sync">🔄 Đồng bộ ngay</button><label class="ck"><input type="checkbox" id="acc-wipe"> Xoá tiến độ trên máy này khi đăng xuất (máy dùng chung)</label><button class="bt l" data-k="out">Đăng xuất</button>', function (b, k) {
        if (k === 'plan') close();
        if (k === 'sync') { clearTimeout(timer); push(); }
        if (k === 'out') { var wipe = M.querySelector('#acc-wipe').checked; b.disabled = true; (timer ? push() : Promise.resolve()).then(function () { return auth.signOut(); }).then(function () { if (wipe) { Object.keys(snap()).forEach(function (x) { localStorage.removeItem(x); }); } localStorage.removeItem(META); close(); if (wipe) location.reload(); }); }
      });
    }
    modal('<h3>👤 Đăng nhập PLT-Edu</h3><p><small>Một tài khoản cho cả PLT-Edu và AI Edu – lưu tiến độ trên mọi thiết bị.</small></p>' +
      '<button class="bt g" data-k="gg"><svg width="18" height="18" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>Đăng nhập bằng Google</button>' +
      '<div class="or">hoặc dùng email</div><input id="acc-e" type="email" placeholder="Email" autocomplete="email"><input id="acc-p" type="password" placeholder="Mật khẩu (ít nhất 6 ký tự)" autocomplete="current-password">' +
      '<div class="row2"><button class="bt" data-k="in">Đăng nhập</button><button class="bt o" data-k="up">Tạo tài khoản</button></div><p class="er"></p><p><a data-k="fg">Quên mật khẩu?</a></p>' +
      '<p><small>Học sinh dưới 13 tuổi nên nhờ phụ huynh tạo tài khoản. Chỉ lưu tên, email và tiến độ học.</small></p>', function (b, k) {
      var e = (M.querySelector('#acc-e').value || '').trim(), p = M.querySelector('#acc-p').value || '';
      if (k === 'gg') { b.disabled = true; var pr = new fb.auth.GoogleAuthProvider(); auth.signInWithPopup(pr).then(close).catch(function (x) { if (x.code === 'auth/popup-blocked' || x.code === 'auth/operation-not-supported-in-this-environment') auth.signInWithRedirect(pr); else say(x); }); }
      if (k === 'in') { b.disabled = true; auth.signInWithEmailAndPassword(e, p).then(close).catch(say); }
      if (k === 'up') { b.disabled = true; auth.createUserWithEmailAndPassword(e, p).then(close).catch(say); }
      if (k === 'fg') { if (!e) return say({ code: 'auth/invalid-email' }); auth.sendPasswordResetEmail(e).then(function () { M.querySelector('.er').innerHTML = '<span class="ok">Đã gửi thư đặt lại mật khẩu tới ' + esc(e) + '. Kiểm tra cả mục Spam.</span>'; }).catch(say); }
    });
  }

  function button() { var b = document.createElement('button'); b.type = 'button'; b.className = 'acc-b'; b.addEventListener('click', open); btns.push(b); return b; }
  function mount() {
    if (document.querySelector('.acc-b')) return;
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    var head = document.querySelector('header.top'), ref = head && cfg.loginBefore && head.querySelector(cfg.loginBefore);
    if (ref) ref.parentNode.insertBefore(button(), ref);
    else if (head && (ref = head.querySelector('.wrap > .btn'))) ref.parentNode.insertBefore(button(), ref);
    else {
      var bar = el('<div class="acc-bar"><div class="in"><a href="' + root + '#/" title="Trang chủ PLT-Edu"><img src="' + root + 'assets/img/logo-96.png" alt="">PLT-Edu</a><a class="ai" href="' + root + 'ai/">🤖 AI Edu</a></div></div>');
      bar.querySelector('.in').appendChild(button()); document.body.insertBefore(bar, document.body.firstChild);
    }
    paint(); start();
  }

  /* ---------- Thống kê cho trang quản trị ----------
     stats/d-YYYY-MM-DD {v: lượt truy cập (mỗi phiên/trang web), u: khách trong ngày (mỗi trình duyệt 1 lần), edu, ai}
     presence/{uid | g-xxxx}  nhịp "đang dùng" mỗi 2 phút: {at, site, in, name, page}
     members/{uid}            thành viên đã đăng nhập: {name, email, first, last, site, n} */
  var ADMIN = 'phongishop86@gmail.com', tracked = false, beatT = 0;
  function isAdmin() { return !!(user && user.emailVerified && String(user.email || '').toLowerCase() === ADMIN); }
  /* Máy đã từng đăng nhập tài khoản quản trị: không đếm lượt truy cập / đang dùng (kể cả khi đã đăng xuất) */
  function skip() { try { if (isAdmin()) _set.call(localStorage, 'plt-adm', '1'); return localStorage.getItem('plt-adm') === '1'; } catch (e) { return isAdmin(); } }
  function p2(n) { return (n < 10 ? '0' : '') + n; }
  function dayKey(t) { var d = t ? new Date(t) : new Date(); return d.getFullYear() + '-' + p2(d.getMonth() + 1) + '-' + p2(d.getDate()); }
  function gid() { var g = ''; try { g = localStorage.getItem('plt-gid') || ''; } catch (e) { /* bỏ qua */ } if (!/^g-[a-z0-9]{12}$/.test(g)) { g = 'g-'; for (var i = 0; i < 12; i++) g += 'abcdefghijklmnopqrstuvwxyz0123456789'.charAt(Math.floor(Math.random() * 36)); try { _set.call(localStorage, 'plt-gid', g); } catch (e) { /* bỏ qua */ } } return g; }
  function track() {
    if (tracked || !db) return; tracked = true; if (skip()) return;
    var day = dayKey(), inc = fb.firestore.FieldValue.increment(1), o = {}, k = 'plt-v-' + cur;
    try { if (!sessionStorage.getItem(k)) { o.v = inc; o[cur] = inc; sessionStorage.setItem(k, '1'); } if (localStorage.getItem('plt-seen') !== day) { o.u = inc; _set.call(localStorage, 'plt-seen', day); } } catch (e) { /* bỏ qua */ }
    if (Object.keys(o).length) db.collection('stats').doc('d-' + day).set(o, { merge: true }).catch(function () { /* chưa có quy tắc */ });
  }
  function beat() {
    if (!db || document.visibilityState === 'hidden') return;
    if (skip()) { clearTimeout(beatT); if (user) db.collection('presence').doc(user.uid).delete().catch(function () { /* bỏ qua */ }); return; }
    clearTimeout(beatT); beatT = setTimeout(beat, 120000);
    var nm = user ? (user.displayName || String(user.email || '').split('@')[0] || '').slice(0, 40) : '';
    var pg = (cur === 'ai' ? location.pathname.replace(/^.*?\/ai\//, 'ai/') : location.hash || '#/').slice(0, 60);
    db.collection('presence').doc(user ? user.uid : gid()).set({ at: fb.firestore.FieldValue.serverTimestamp(), site: cur, in: !!user, name: nm, page: pg }).catch(function () { /* chưa có quy tắc */ });
  }
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'visible') beat(); });
  function member() {
    var u = user, ref = db.collection('members').doc(u.uid), ts = fb.firestore.FieldValue.serverTimestamp();
    var o = { name: (u.displayName || '').slice(0, 60), email: (u.email || '').slice(0, 100), last: ts, site: cur, n: fb.firestore.FieldValue.increment(1) };
    ref.get().then(function (d) { if (!d.exists) o.first = ts; return ref.set(o, { merge: true }); }).catch(function () { /* chưa có quy tắc */ });
  }
  function start() {
    load(root + 'assets/js/firebase-config.js?v=' + (window.PLT_VER || '1')).catch(function () { /* chưa có cấu hình */ }).then(function () {
      var c = window.PLT_FB; ready = true;
      if (!c || !c.apiKey) return;
      return load(SDK + 'firebase-app-compat.js').then(function () { return Promise.all([load(SDK + 'firebase-auth-compat.js'), load(SDK + 'firebase-firestore-compat.js')]); }).then(function () {
        fb = window.firebase; if (!fb.apps.length) fb.initializeApp(c); auth = fb.auth(); db = fb.firestore(); auth.languageCode = 'vi';
        auth.onAuthStateChanged(function (u) { var was = user; user = u; err = ''; paint(); if (u && (!was || was.uid !== u.uid)) { pull(true); member(); } track(); beat(); try { window.dispatchEvent(new CustomEvent('plt-auth', { detail: { uid: u && u.uid, admin: isAdmin() } })); } catch (e) { /* bỏ qua */ } });
      });
    }).catch(function () { err = 'Không tải được dịch vụ đăng nhập'; paint(); });
  }
  window.PLT_ACC = { isAdmin: isAdmin, dayKey: dayKey, fb: function () { return fb; }, open: open, sync: function () { return push(); }, user: function () { return user; }, db: function () { return db; }, boardSync: function () { lastBoard = ''; return boardSync(); }, month: monthKey };
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
})();

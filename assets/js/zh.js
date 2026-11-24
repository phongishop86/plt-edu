/* PLT-Edu · Module "Tiếng Trung từ số 0" (30 ngày cho người Việt)
   Nội dung bài học nằm ở subjects/tieng-trung.js (window.PLT_ZH). File này lo phần hiển thị:
   lộ trình, buổi học 5 phần A–E, luyện thanh điệu, bảng Pinyin, thẻ từ vựng, tiến độ, báo cáo.
   Giọng đọc: Web Speech API của trình duyệt (miễn phí, không cần máy chủ). */
(function () {
  'use strict';
  const { shuffle, esc } = PLT.U;
  const $ = (s, el) => (el || document).querySelector(s);
  const D = () => window.PLT_ZH || { plan: [], days: [] };
  const BASE = '#/tieng-trung';
  let cur = null; // phòng thi / vòng lặp đang chạy

  /* ---------- Lưu trữ ---------- */
  const st = () => { const d = PLT.data; d.zh = Object.assign({ days: {}, known: {}, rate: 0.8, py: true, vi: true }, d.zh || {}); d.zh.days = d.zh.days || {}; d.zh.known = d.zh.known || {}; return d.zh; };
  const dayState = (n) => { const s = st(); s.days[n] = s.days[n] || { parts: {} }; return s.days[n]; };
  const markPart = (n, p) => { const d = dayState(n); if (!d.parts[p]) { d.parts[p] = 1; d.last = new Date().toISOString(); PLT.save(); } };
  const testsOf = (n) => PLT.data.tests.filter((x) => x.id === 'zh:d' + n);
  const bestOf = (n) => { const r = testsOf(n); return r.length ? Math.max(...r.map((x) => x.diem)) : null; };
  const PASS = 7;
  const isDone = (n) => (bestOf(n) || 0) >= PASS;
  const fmtD = (x) => String(x).replace('.', ',');

  /* ---------- Giọng đọc tiếng Trung ---------- */
  const TTS = 'speechSynthesis' in window;
  let voice = null, voiceChecked = false;
  function pickVoice() {
    if (!TTS) return null;
    const vs = speechSynthesis.getVoices(); if (vs.length) voiceChecked = true;
    // Chỉ nhận giọng phổ thông Đại lục (zh-CN); tránh zh-HK vì đó là tiếng Quảng Đông
    const cn = vs.filter((v) => /^(zh[-_]CN|zh[-_]Hans|cmn)/i.test(v.lang));
    voice = cn.find((v) => /Xiaoxiao|Xiaoyi|Yunxi/i.test(v.name)) || cn.find((v) => /natural|online/i.test(v.name)) || cn.find((v) => /Google/i.test(v.name)) || cn[0] || vs.find((v) => /^zh[-_]TW/i.test(v.lang)) || null;
    return voice;
  }
  if (TTS) { pickVoice(); speechSynthesis.addEventListener && speechSynthesis.addEventListener('voiceschanged', pickVoice); }
  function say(t, opt) {
    if (!TTS) return;
    if (!(opt && opt.queue)) speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(t); u.lang = 'zh-CN'; if (voice) u.voice = voice;
    u.rate = (opt && opt.rate) || st().rate || 0.8; speechSynthesis.speak(u);
  }
  const sayAll = (list) => { if (!TTS) return; speechSynthesis.cancel(); list.forEach((t) => say(t, { queue: true })); };
  document.addEventListener('click', (e) => {
    const b = e.target.closest && e.target.closest('[data-say]'); if (!b) return;
    e.preventDefault(); e.stopPropagation();
    const t = b.dataset.say; if (t.includes('|')) sayAll(t.split('|')); else say(t);
    b.classList.add('zh-on'); setTimeout(() => b.classList.remove('zh-on'), 600);
  }, true);
  const sp = (t, lbl) => `<button type="button" class="zh-say" data-say="${esc(t)}" title="Nghe đọc" aria-label="Nghe đọc">🔊${lbl ? ' ' + lbl : ''}</button>`;
  function voiceNote() {
    const id = 'vn' + Math.random().toString(36).slice(2, 7);
    setTimeout(() => {
      const el = document.getElementById(id); if (!el) return;
      if (!TTS) el.innerHTML = '<div class="fb warn">⚠️ Trình duyệt này không hỗ trợ đọc thành tiếng. Nên dùng Chrome hoặc Edge bản mới.</div>';
      else if (!pickVoice() && voiceChecked) el.innerHTML = '<div class="fb warn">⚠️ Máy chưa có giọng đọc tiếng Trung nên nút 🔊 có thể không kêu hoặc đọc sai.<br><span class="muted small" style="font-weight:500">Cách khắc phục: dùng trình duyệt <b>Microsoft Edge</b> (có sẵn giọng Xiaoxiao rất chuẩn) hoặc <b>Chrome</b>; trên Windows vào <i>Cài đặt → Thời gian và ngôn ngữ → Giọng nói</i> và thêm giọng "Chinese (Simplified, China)".</span></div>';
    }, 1500);
    return `<div id="${id}"></div>`;
  }

  /* ---------- Pinyin: dấu thanh ---------- */
  const TM = { a: 'āáǎà', e: 'ēéěè', i: 'īíǐì', o: 'ōóǒò', u: 'ūúǔù', 'ü': 'ǖǘǚǜ' };
  const MARKED = {}; Object.keys(TM).forEach((v) => [...TM[v]].forEach((c, i) => (MARKED[c] = [v, i + 1])));
  const toneOf = (syl) => { for (const c of syl) if (MARKED[c]) return MARKED[c][1]; return 5; };
  // Đổi thanh của một âm tiết trong cụm Pinyin (giữ nguyên vị trí dấu) → tạo phương án nhiễu
  function variant(p) {
    const idx = [...p].map((c, i) => (MARKED[c] ? i : -1)).filter((i) => i >= 0); if (!idx.length) return p;
    const chars = [...p], k = idx[Math.floor(Math.random() * idx.length)], [v, t] = MARKED[chars[k]];
    const opts = [1, 2, 3, 4].filter((x) => x !== t); chars[k] = TM[v][opts[Math.floor(Math.random() * opts.length)] - 1];
    return chars.join('');
  }
  const TONE_LBL = ['', 'Thanh 1 (ˉ ngang cao)', 'Thanh 2 (ˊ đi lên)', 'Thanh 3 (ˇ xuống rồi lên)', 'Thanh 4 (ˋ đi xuống)', 'Thanh nhẹ (không dấu)'];
  const TONE_COL = ['', '#3B6FE0', '#1f9d63', '#D9661F', '#d93f45'];

  // Bộ 4 thanh dùng chung: chữ Hán thông dụng đọc đúng thanh khi đứng một mình
  const SETS = [
    { s: 'ma', c: ['妈', '麻', '马', '骂'], p: ['mā', 'má', 'mǎ', 'mà'], v: ['mẹ', 'cây gai', 'con ngựa', 'mắng'] },
    { s: 'ba', c: ['八', '拔', '把', '爸'], p: ['bā', 'bá', 'bǎ', 'bà'], v: ['số tám', 'nhổ', 'cầm, nắm', 'bố'] },
    { s: 'yi', c: ['衣', '姨', '椅', '意'], p: ['yī', 'yí', 'yǐ', 'yì'], v: ['áo', 'dì', 'ghế', 'ý'] },
    { s: 'wu', c: ['屋', '无', '五', '雾'], p: ['wū', 'wú', 'wǔ', 'wù'], v: ['nhà', 'không có', 'số năm', 'sương mù'] },
    { s: 'tang', c: ['汤', '糖', '躺', '烫'], p: ['tāng', 'táng', 'tǎng', 'tàng'], v: ['canh', 'đường (ăn)', 'nằm', 'nóng, bỏng'] },
    { s: 'shi', c: ['诗', '十', '使', '是'], p: ['shī', 'shí', 'shǐ', 'shì'], v: ['thơ', 'số mười', 'khiến, dùng', 'là'] },
    { s: 'qi', c: ['七', '骑', '起', '气'], p: ['qī', 'qí', 'qǐ', 'qì'], v: ['số bảy', 'cưỡi', 'dậy', 'khí, tức giận'] },
    { s: 'tong', c: ['通', '同', '桶', '痛'], p: ['tōng', 'tóng', 'tǒng', 'tòng'], v: ['thông', 'cùng', 'cái thùng', 'đau'] }
  ];

  /* ---------- Biểu đồ cao độ 4 thanh (thang 1–5) ---------- */
  function toneSVG(only) {
    const tones = only ? [only] : [1, 2, 3, 4], W = 120, G = 14, H = 150, y = (l) => 18 + (5 - l) * 28;
    const path = { 1: `M16 ${y(5)} L104 ${y(5)}`, 2: `M16 ${y(3)} L104 ${y(5)}`, 3: `M16 ${y(2)} Q52 ${y(1) + 26} 104 ${y(4)}`, 4: `M16 ${y(5)} L104 ${y(1)}` };
    const lv = { 1: '5 → 5', 2: '3 → 5', 3: '2 → 1 → 4', 4: '5 → 1' };
    const w = tones.length * (W + G) - G + 22;
    return `<svg class="zh-tsvg" viewBox="0 0 ${w} ${H + 34}" role="img" aria-label="Biểu đồ cao độ thanh điệu"><defs>${tones.map((t) => `<marker id="ar${t}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10z" fill="${TONE_COL[t]}"/></marker>`).join('')}</defs>
      ${[1, 2, 3, 4, 5].map((l) => `<text x="2" y="${y(l) + 4}" font-size="10" fill="#8a93a8">${l}</text>`).join('')}
      ${tones.map((t, i) => { const x = 18 + i * (W + G); return `<g transform="translate(${x} 0)"><rect x="0" y="8" width="${W}" height="${H - 18}" rx="10" fill="#fff" stroke="#E3DED1"/>${[1, 2, 3, 4, 5].map((l) => `<line x1="8" x2="${W - 8}" y1="${y(l)}" y2="${y(l)}" stroke="#eee8dc" stroke-dasharray="3 3"/>`).join('')}<path d="${path[t]}" fill="none" stroke="${TONE_COL[t]}" stroke-width="5" stroke-linecap="round" marker-end="url(#ar${t})"/><text x="${W / 2}" y="${H + 6}" text-anchor="middle" font-weight="800" font-size="13" fill="${TONE_COL[t]}">Thanh ${t}</text><text x="${W / 2}" y="${H + 24}" text-anchor="middle" font-size="11" fill="#55607A">${lv[t]}</text></g>`; }).join('')}</svg>`;
  }

  /* ---------- Bộ sinh câu hỏi ---------- */
  const wl = (w) => `<span class="zh-qh">${w.h}</span> <span class="zh-qp">${w.p}</span>`;
  const others = (pool, w, key) => shuffle(pool.filter((x) => x.h !== w.h && x[key] !== w[key]).map((x) => x[key]));
  const uniq = (a) => [...new Set(a)];
  const G = {
    meaning: (w, pool) => PLT.U.mc(`Từ ${wl(w)} ${sp(w.h)} nghĩa là gì?`, w.v, others(pool, w, 'v'), `${w.h} (${w.p}): ${w.v}.`),
    hanzi: (w, pool) => PLT.U.mc(`“${w.v}” trong tiếng Trung là?`, `${w.h} · ${w.p}`, pool.filter((x) => x.h !== w.h && x.v !== w.v).map((x) => `${x.h} · ${x.p}`).sort(() => Math.random() - 0.5), `${w.v} = ${w.h} (${w.p}).`),
    pinyin: (w, pool) => { const dis = uniq([variant(w.p), variant(w.p), variant(w.p)].concat(others(pool, w, 'p'))).filter((x) => x !== w.p); return PLT.U.mc(`Chữ <span class="zh-qh">${w.h}</span> đọc là?`, w.p, dis, `${w.h} đọc là ${w.p} (${w.v}). Chú ý dấu thanh!`); },
    listen: (w, pool) => Object.assign(PLT.U.mc(`${sp(w.h, 'Nghe')} Bấm loa, nghe rồi chọn nghĩa đúng.`, w.v, others(pool, w, 'v'), `Câu vừa nghe: ${w.h} (${w.p}) – ${w.v}.`), { lbl: '🎧 Nghe và chọn' }),
    listenPy: (w, pool) => { const dis = uniq([variant(w.p), variant(w.p)].concat(others(pool, w, 'p'))).filter((x) => x !== w.p); return Object.assign(PLT.U.mc(`${sp(w.h, 'Nghe')} Nghe rồi chọn Pinyin đúng.`, w.p, dis, `Vừa nghe: ${w.h} – ${w.p} (${w.v}).`), { lbl: '🎧 Nghe và chọn' }); },
    match: (ws) => PLT.U.match('Nối từ tiếng Trung với nghĩa tiếng Việt', ws.slice(0, 4).map((w) => ({ l: `${w.h} (${w.p})`, r: w.v })), ws.slice(0, 4).map((w) => `${w.h} = ${w.v}`).join('; ')),
    toneSee: () => { const s = SETS[Math.floor(Math.random() * SETS.length)], t = Math.floor(Math.random() * 4) + 1; return PLT.U.mc(`Âm tiết <span class="zh-qp zh-lg">${s.p[t - 1]}</span> mang thanh mấy?`, TONE_LBL[t], TONE_LBL.slice(1, 5).filter((x, i) => i + 1 !== t), `${s.p[t - 1]} (${s.c[t - 1]} – ${s.v[t - 1]}) mang ${TONE_LBL[t]}.`); },
    toneHear: () => { const s = SETS[Math.floor(Math.random() * SETS.length)], t = Math.floor(Math.random() * 4) + 1; return Object.assign(PLT.U.mc(`${sp(s.c[t - 1], 'Nghe')} Nghe và chọn Pinyin đúng.`, s.p[t - 1], s.p.filter((x, i) => i + 1 !== t), `Vừa nghe: ${s.c[t - 1]} ${s.p[t - 1]} (${s.v[t - 1]}) – ${TONE_LBL[t]}.`), { lbl: '🎧 Nghe và chọn thanh' }); }
  };
  // Câu hỏi viết tay trong file dữ liệu: ['mc', đề, đáp án, [nhiễu], giải thích] · ['fill', đề, 'đáp án|cách khác', giải thích] · ['hear', chữ cần đọc, đáp án, [nhiễu], giải thích] · ['order', đề, [các mảnh đúng thứ tự], giải thích]
  function fromSpec(s) {
    if (typeof s === 'function') return s(PLT.U, { sp, G });
    const [k] = s;
    if (k === 'mc') return PLT.U.mc(s[1], s[2], s[3], s[4]);
    if (k === 'fill') return Object.assign(PLT.U.fill(s[1] + (/[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/.test(s[2]) ? ' <span class="muted small">(gõ dấu khó thì gõ số thanh sau âm, ví dụ ma3)</span>' : ''), [{ pre: 'Trả lời:', ans: s[2], post: '' }], s[3]), { lbl: 'Điền vào chỗ trống' });
    if (k === 'hear') return Object.assign(PLT.U.mc(`${sp(s[1], 'Nghe')} ${s[5] || 'Nghe rồi chọn đáp án đúng.'}`, s[2], s[3], s[4]), { lbl: '🎧 Nghe và chọn' });
    if (k === 'order') return Object.assign(PLT.U.order(s[1], s[2], s[3]), { lbl: 'Sắp xếp thành câu đúng' });
    return null;
  }
  const keyQ = (q) => q.q + '|' + (q.choices ? q.choices[q.ai] : '');
  /* Tạo bộ câu: ~40% câu viết tay, phần còn lại sinh từ từ vựng theo các dạng (xoay vòng) */
  function makeQs(o) {
    const n = o.n, pool = o.pool, focus = o.focus.length ? o.focus : pool, kinds = o.kinds;
    const out = [], seen = new Set(); const add = (q) => { if (q && !seen.has(keyQ(q))) { seen.add(keyQ(q)); out.push(q); } };
    shuffle(o.specs || []).slice(0, Math.round(n * (o.ratio || 0.4))).forEach((s) => add(fromSpec(s)));
    let fw = shuffle(focus), i = 0, guard = 0;
    while (out.length < n && guard++ < n * 10) {
      const k = kinds[i % kinds.length]; i++;
      if (k === 'match') { if (focus.length >= 4) add(G.match(shuffle(focus))); continue; }
      if (k === 'toneSee' || k === 'toneHear') { add(G[k]()); continue; }
      if (pool.length < 4) continue;
      const w = fw[i % fw.length]; if (w) add(G[k](w, pool));
    }
    return shuffle(out).slice(0, n);
  }
  const vocabUpTo = (n) => D().days.filter((d) => d.n <= n).flatMap((d) => d.vocab.map((w) => Object.assign({ d: d.n }, w)));
  const dayOf = (n) => D().days.find((d) => d.n === n);

  /* ---------- Thành phần giao diện ---------- */
  const crumb = (x) => `<div class="crumb"><a href="#/">Trang chủ</a> › <a href="${BASE}">Tiếng Trung</a>${x ? ' › ' + x : ''}</div>`;
  function vocabTable(ws) {
    return `<div class="zh-vt">${ws.map((w, i) => `<div class="zh-w"><div class="zh-wh"><span class="zh-n">${i + 1}</span><b class="zh-hz">${w.h}</b>${sp(w.h)}</div><div class="zh-wp">${w.p}</div><div class="zh-wv">${w.v}</div>${w.use ? `<div class="zh-wu">💬 ${w.use}</div>` : ''}${w.ex ? `<div class="zh-ex"><div>${w.ex[0]} ${sp(w.ex[0])}</div><div class="zh-wp">${w.ex[1]}</div><div class="muted">${w.ex[2]}</div></div>` : ''}</div>`).join('')}</div>`;
  }
  function settingsBar() {
    const s = st();
    return `<div class="zh-bar"><label>🐢 Tốc độ đọc <input type="range" min="0.5" max="1.1" step="0.1" value="${s.rate}" id="zrate"> <b id="zrv">${s.rate}</b></label>${sp('你好！谢谢！', 'Thử giọng')}</div>`;
  }
  function bindBar() {
    const r = $('#zrate'); if (!r) return;
    r.oninput = () => { st().rate = +r.value; $('#zrv').textContent = r.value; PLT.save(); };
  }

  /* ---------- Trang chủ module ---------- */
  function nextDay() { const ds = D().days; const d = ds.find((x) => !isDone(x.n)); return d ? d.n : (ds.length ? ds[ds.length - 1].n : 1); }
  function home(app) {
    const nd = nextDay(), done = D().days.filter((d) => isDone(d.n)).length, words = vocabUpTo(nd).length;
    const stages = D().stages || [];
    app.innerHTML = `<section class="hero2 zh-hero"><div class="hw"><div><div class="eyebrow">Miễn phí · Cho người Việt mới bắt đầu · Chữ giản thể · Giọng phổ thông</div>
        <h1>🀄 Tiếng Trung từ số 0 <em>trong 30 ngày</em></h1>
        <p class="lead">Mỗi ngày 30–45 phút: ôn bài cũ, học Pinyin và từ mới, luyện tập, <b>hội thoại với người bản xứ</b> và làm bài kiểm tra ngắn. Mục tiêu là <b>nghe hiểu, phát âm đúng, phản xạ và tự tin giao tiếp</b>, không phải học thuộc thật nhiều từ.</p>
        <div class="row"><a class="btn" href="${BASE}/ngay/${nd}">▶ Học hôm nay: Ngày ${nd}</a><a class="btn ghost" href="${BASE}/on-tap">🔁 Ôn tập</a></div>
        <div class="facts"><span><b>${done}</b>/30 ngày hoàn thành</span><span><b>${words}</b> từ đã mở</span><span>🔊 Có giọng đọc mẫu</span><span>Tiến độ lưu trên máy</span></div></div>
        <div class="hcard"><b>Nghe thử 4 thanh: mā · má · mǎ · mà</b>${toneSVG()}<div class="row center">${SETS[0].c.map((c, i) => sp(c, SETS[0].p[i])).join('')}</div></div></div></section>
      ${voiceNote()}
      <h2>Công cụ luyện tập</h2><div class="feats zh-tools">
        <a class="feat" href="${BASE}/thanh-dieu"><span>🎵</span><b>Luyện 4 thanh</b><p>Nghe mẫu từng thanh, chơi trò nghe – chọn thanh.</p></a>
        <a class="feat" href="${BASE}/pinyin"><span>🔤</span><b>Bảng Pinyin</b><p>Thanh mẫu, vận mẫu, cách đặt lưỡi, bấm để nghe.</p></a>
        <a class="feat" href="${BASE}/tu-vung"><span>🃏</span><b>Thẻ từ vựng</b><p>Lật thẻ, nghe đọc, đánh dấu từ đã nhớ.</p></a>
        <a class="feat" href="${BASE}/tien-do"><span>📈</span><b>Tiến độ & báo cáo</b><p>Điểm từng ngày, từ chưa nhớ, tóm tắt để chép sang gia sư AI.</p></a></div>
      ${stages.map((g) => `<h2>${g.ten} <small class="muted">· Ngày ${g.tu}–${g.den}</small></h2><div class="tgrid">${D().plan.filter((p) => p.n >= g.tu && p.n <= g.den).map((p) => dayCard(p)).join('')}</div>`).join('')}
      <p class="muted small">⚠️ Lộ trình 30 ngày giúp xây nền tảng, không cam kết nói thành thạo sau 30 ngày. Chưa hiểu bài thì cứ học lại, không cần chạy theo lịch. Hệ thống chưa chấm được phát âm thật của em; hãy nghe mẫu, đọc theo và tự ghi âm để so sánh.</p>`;
  }
  function dayCard(p) {
    const has = !!dayOf(p.n), b = bestOf(p.n), ds = st().days[p.n], np = ds ? Object.keys(ds.parts).length : 0;
    const stt = !has ? '<span class="muted">Sắp có</span>' : b != null ? `${b >= PASS ? '✅' : '🟡'} Điểm cao nhất ${fmtD(b)}/10` : np ? `▶ Đang học (${np}/5 phần)` : 'Chưa học';
    return has ? `<a class="tcard${b != null && b >= PASS ? ' zh-done' : ''}" href="${BASE}/ngay/${p.n}"><b>Ngày ${p.n}</b><span class="muted small">${p.ten}</span><span class="meta">${stt}</span></a>`
      : `<div class="tcard zh-soon"><b>Ngày ${p.n}</b><span class="muted small">${p.ten}</span><span class="meta">${stt}</span></div>`;
  }

  /* ---------- Buổi học: 5 phần A–E ---------- */
  const PARTS = [['a', 'A', 'Ôn tập', '5 phút'], ['b', 'B', 'Kiến thức mới', '10 phút'], ['c', 'C', 'Luyện tập', '10 phút'], ['d', 'D', 'Hội thoại', '5–10 phút'], ['e', 'E', 'Kiểm tra', '5–10 phút']];
  function lesson(app, n, part) {
    const d = dayOf(n);
    if (!d) { app.innerHTML = crumb(`Ngày ${n}`) + `<div class="card">📦 Bài Ngày ${n} đang được biên soạn. Trong lúc chờ, em hãy <a href="${BASE}/on-tap">ôn tập</a> hoặc <a href="${BASE}/thanh-dieu">luyện thanh điệu</a>.</div>`; return; }
    part = part || (dayState(n).parts.a ? (PARTS.find(([k]) => !dayState(n).parts[k]) || ['b'])[0] : 'a');
    const ds = dayState(n), prevWarn = n > 1 && dayOf(n - 1) && !isDone(n - 1) ? `<div class="fb warn">💡 Em chưa đạt ${PASS} điểm bài kiểm tra Ngày ${n - 1}. Nên <a href="${BASE}/ngay/${n - 1}/e">làm lại Ngày ${n - 1}</a> trước khi học bài mới.</div>` : '';
    app.innerHTML = crumb(`Ngày ${n}`) + `<h1>Ngày ${n}: ${d.ten}</h1><p class="muted">${d.muc}</p>${prevWarn}
      <nav class="zh-tabs">${PARTS.map(([k, L, t, m]) => `<a href="${BASE}/ngay/${n}/${k}" class="${k === part ? 'on' : ''}${ds.parts[k] ? ' ok' : ''}"><b>${ds.parts[k] ? '✔' : L}</b><span>${t}<small>${m}</small></span></a>`).join('')}<a href="${BASE}/ngay/${n}/bao-cao" class="${part === 'bao-cao' ? 'on' : ''}"><b>📋</b><span>Báo cáo<small>cuối buổi</small></span></a></nav>
      <div id="zbox"></div>`;
    const box = $('#zbox'); const nextBtn = (k) => { const i = PARTS.findIndex((x) => x[0] === k); const nx = PARTS[i + 1]; return `<div class="row center"><a class="btn" href="${BASE}/ngay/${n}/${nx ? nx[0] : 'bao-cao'}">${nx ? `Sang phần ${nx[1]}: ${nx[2]} ▶` : 'Xem báo cáo buổi học ▶'}</a></div>`; };
    const pool = vocabUpTo(n);
    if (part === 'a') {
      const prev = D().days.filter((x) => x.n < n);
      if (!prev.length) {
        box.innerHTML = `<div class="card"><h3>🔁 Phần A – Ôn tập</h3><p>Hôm nay là ngày đầu tiên nên chưa có bài cũ để ôn. Trước khi học, em chuẩn bị:</p><ul><li>🎧 Tai nghe hoặc loa để nghe giọng đọc mẫu.</li><li>📱 Điện thoại để <b>tự ghi âm</b> giọng mình rồi so với mẫu.</li><li>📒 Một cuốn sổ nhỏ để ghi từ mới.</li></ul>${voiceNote()}${settingsBar()}</div>${nextBtn('a')}`;
        bindBar(); markPart(n, 'a'); return;
      }
      const pd = prev[prev.length - 1];
      box.innerHTML = `<div class="card"><h3>🔁 Phần A – Ôn tập bài cũ</h3><p class="muted">5 câu nhanh về kiến thức các ngày trước. ${pd.loi ? `<br><b>Lỗi hay gặp ở Ngày ${pd.n}:</b> ${pd.loi.join(' · ')}` : ''}</p><div id="pbox"></div></div><div id="znx"></div>`;
      const go = () => PLT.Q.practice($('#pbox'), makeQs({ n: 5, pool: vocabUpTo(n - 1), focus: vocabUpTo(n - 1), kinds: ['meaning', 'listen', 'pinyin', 'hanzi'], specs: prev.flatMap((x) => x.qs || []), ratio: 0.4 }), { again: go, onDone: () => { markPart(n, 'a'); $('#znx').innerHTML = nextBtn('a'); } });
      go(); return;
    }
    if (part === 'b') {
      box.innerHTML = `<div class="card zh-learn"><h3>📘 Phần B – Kiến thức mới</h3>${voiceNote()}${settingsBar()}${d.hoc}</div>
        ${d.vocab.length ? `<div class="card"><h3>📒 Từ vựng hôm nay (${d.vocab.length} từ)</h3><p class="muted small">Bấm 🔊 để nghe, đọc theo 3–5 lần. Học theo cả câu ví dụ, không học từ đơn lẻ.</p>${vocabTable(d.vocab)}</div>` : ''}
        <div class="row center"><button class="btn" id="zbok">✔ Em đã đọc và nghe hết phần này</button></div>`;
      bindBar();
      $('#zbok').onclick = () => { markPart(n, 'b'); location.hash = `${BASE}/ngay/${n}/c`; };
      return;
    }
    if (part === 'c') {
      box.innerHTML = `<div class="card"><h3>✍️ Phần C – Luyện tập (12 câu)</h3><p class="muted small">Nhận diện thanh điệu, nghe – chọn, đọc Pinyin, ghép câu. Sai thì đọc lời giải rồi làm lượt mới.</p><div id="pbox"></div></div><div id="znx"></div>`;
      const go = () => PLT.Q.practice($('#pbox'), makeQs({ n: 12, pool, focus: d.vocab.length ? d.vocab : pool, kinds: d.kinds || ['meaning', 'listen', 'pinyin', 'hanzi', 'match'], specs: d.qs })
        , { again: go, onDone: (ok, t) => { if (ok / t >= 0.5) markPart(n, 'c'); $('#znx').innerHTML = ok / t >= 0.5 ? nextBtn('c') : '<div class="fb warn">Em cần đúng ít nhất một nửa số câu. Đọc lại Phần B rồi làm lượt mới nhé!</div>'; } });
      go(); return;
    }
    if (part === 'd') {
      box.innerHTML = '<div id="dbox"></div><div id="znx"></div>';
      dialog($('#dbox'), d.hoithoai, () => { markPart(n, 'd'); $('#znx').innerHTML = nextBtn('d'); });
      return;
    }
    if (part === 'e') {
      const big = d.kt || { n: 10, min: 10 };
      const b = bestOf(n);
      box.innerHTML = `<div class="card"><h3>📝 Phần E – Kiểm tra cuối buổi</h3><p>${big.n} câu · ${big.min} phút · đạt từ <b>${PASS} điểm</b> là hoàn thành ngày học. ${b != null ? `<span class="pill">Cao nhất ${fmtD(b)}đ</span>` : ''}</p><p class="muted small">Không có đáp án trước khi nộp bài. Phần phát âm thật chưa được chấm vì hệ thống chưa nghe được giọng em.</p><div class="row"><button class="btn" id="zgo">▶ Bắt đầu làm bài</button></div></div><div id="ebox"></div>`;
      $('#zgo').onclick = () => startTest(n, big);
      return;
    }
    if (part === 'bao-cao') { report(box, n); }
  }
  function startTest(n, big) {
    const d = dayOf(n); const pool = vocabUpTo(n);
    const focus = n % 7 === 0 ? pool : d.vocab.concat(shuffle(vocabUpTo(n - 1)).slice(0, 3));
    const specs = n % 7 === 0 ? D().days.filter((x) => x.n <= n).flatMap((x) => x.qs || []) : (d.qs || []).concat(d.qsKt || []);
    const box = $('#ebox'); $('#zgo').closest('.card').hidden = true; document.body.classList.add('in-exam');
    cur = PLT.Q.exam(box, { id: 'zh:d' + n, subject: 'tieng-trung', title: `Kiểm tra Ngày ${n} – Tiếng Trung: ${d.ten}`, questions: makeQs({ n: big.n, pool, focus, kinds: d.kinds || ['meaning', 'listen', 'pinyin', 'hanzi'], specs, ratio: 0.5 }), minutes: big.min, again: () => startTest(n, big), back: () => { markPart(n, 'e'); location.hash = `${BASE}/ngay/${n}/bao-cao`; } });
    // Đổi chữ nút "Về danh sách đề" thành "Xem báo cáo" khi chấm xong
    const mo = new MutationObserver(() => { const r = $('#rbk', box); if (r) { r.textContent = '📋 Xem báo cáo buổi học'; markPart(n, 'e'); mo.disconnect(); } });
    mo.observe(box, { childList: true, subtree: true });
  }

  /* ---------- Hội thoại từng lượt với người bản xứ ---------- */
  function dialog(box, dg, onDone) {
    const s = st();
    box.innerHTML = `<div class="card"><h3>💬 Phần D – Hội thoại thực tế</h3><p><b>🎬 Bối cảnh:</b> ${dg.ctx}</p><p><b>🎭 Vai:</b> ${dg.vai}</p>
      <div class="row small"><label><input type="checkbox" id="zpy" ${s.py ? 'checked' : ''}> Hiện Pinyin</label><label><input type="checkbox" id="zvi" ${s.vi ? 'checked' : ''}> Hiện nghĩa tiếng Việt</label>${settingsBar()}</div>
      <div class="zh-chat${s.py ? '' : ' nopy'}${s.vi ? '' : ' novi'}" id="zc"></div><div id="zop"></div></div>`;
    bindBar();
    const chat = $('#zc', box), op = $('#zop', box);
    $('#zpy', box).onchange = (e) => { s.py = e.target.checked; chat.classList.toggle('nopy', !s.py); PLT.save(); };
    $('#zvi', box).onchange = (e) => { s.vi = e.target.checked; chat.classList.toggle('novi', !s.vi); PLT.save(); };
    const bubble = (who, l) => { chat.insertAdjacentHTML('beforeend', `<div class="zh-b ${who}"><div class="zh-who">${who === 'a' ? dg.ai : '🙋 Em'}</div><div class="zh-l">${l.h} ${sp(l.h)}</div><div class="zh-py">${l.p}</div><div class="zh-vi">${l.v || ''}</div></div>`); chat.lastElementChild.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); };
    let i = 0;
    const turn = () => {
      if (i >= dg.luot.length) { op.innerHTML = `<div class="fb good">🎉 Hoàn thành hội thoại! ${dg.ket || ''}</div><div class="row"><button class="btn ghost small" id="zre">↺ Hội thoại lại từ đầu</button></div>`; $('#zre', op).onclick = () => dialog(box, dg, onDone); onDone && onDone(); return; }
      const t = dg.luot[i]; bubble('a', t.a); setTimeout(() => say(t.a.h), 250);
      const os = shuffle(t.o.map((o, k) => Object.assign({ k }, o)));
      op.innerHTML = `<p class="muted small" style="margin:12px 0 6px">👉 Em sẽ đáp lại thế nào? Hãy <b>đọc to</b> câu em chọn trước khi bấm.</p><div class="opts wide">${os.map((o) => `<button class="opt" data-k="${o.k}"><span class="c"><b class="zh-oh">${o.h}</b> <span class="zh-op">${o.p}</span></span></button>`).join('')}</div><div id="zfb"></div>`;
      op.querySelectorAll('[data-k]').forEach((b) => (b.onclick = () => {
        const o = t.o[+b.dataset.k], fb = $('#zfb', op);
        if (o.ok) {
          op.querySelectorAll('[data-k]').forEach((x) => (x.disabled = true)); b.classList.add('right');
          bubble('u', o); fb.innerHTML = `<div class="fb good">✔ ${o.f || 'Chính xác!'}</div><div class="row"><button class="btn small" id="znt">Tiếp tục ▶</button></div>`;
          $('#znt', op).onclick = () => { i++; turn(); };
        } else { b.classList.add('wrong'); b.disabled = true; fb.innerHTML = `<div class="fb badf">✘ ${o.f || 'Chưa phù hợp, thử lại nhé.'}</div>`; }
      }));
    };
    turn();
  }

  /* ---------- Báo cáo cuối buổi ---------- */
  function reportText(n) {
    const d = dayOf(n), ds = dayState(n), b = bestOf(n), weak = d.vocab.filter((w) => st().known[w.h] === 0).map((w) => w.h);
    const done = D().days.filter((x) => isDone(x.n)).length;
    return [
      'CHINESE LEARNING REPORT',
      `Ngày học: Ngày ${n}/30${ds.last ? ' (' + new Date(ds.last).toLocaleDateString('vi-VN') + ')' : ''}`,
      `Chủ đề: ${d.ten}`,
      `Kiến thức mới: ${(d.tom || []).join('; ')}`,
      `Từ vựng: ${d.vocab.length ? d.vocab.map((w) => `${w.h} (${w.p}) ${w.v}`).join(', ') : 'ôn tập, không có từ mới'}`,
      `Ngữ pháp: ${d.nguphap || 'chưa học'}`,
      `Phát âm: ${d.phatam || '—'} (chưa chấm phát âm thật vì chưa có âm thanh đầu vào)`,
      `Điểm kiểm tra: ${b != null ? fmtD(b) + '/10 (' + testsOf(n).length + ' lượt)' : 'chưa làm'}`,
      `Phần đã xong: ${PARTS.filter(([k]) => ds.parts[k]).map((x) => x[1]).join(', ') || 'chưa có'}`,
      `Lỗi cần khắc phục: ${(d.loi || []).join('; ')}${weak.length ? '; từ chưa nhớ: ' + weak.join(', ') : ''}`,
      `Bài tập tiếp theo: ${(d.btvn || []).join('; ')}`,
      `Trạng thái tiến độ: ${done}/30 ngày hoàn thành${isDone(n) ? ' · Ngày ' + n + ' ĐẠT' : ' · Ngày ' + n + ' chưa đạt ' + PASS + ' điểm'}`
    ].join('\n');
  }
  function report(box, n) {
    const d = dayOf(n), txt = reportText(n), ok = isDone(n), nx = dayOf(n + 1);
    box.innerHTML = `<div class="card"><h3>📋 Báo cáo buổi học</h3><pre class="zh-rep">${esc(txt)}</pre><div class="row"><button class="btn ghost small" id="zcp">📋 Sao chép báo cáo</button></div></div>
      <div class="card"><h3>🏠 Bài tập về nhà</h3><ul>${(d.btvn || []).map((x) => `<li>${x}</li>`).join('')}</ul></div>
      <div class="row center">${ok ? (nx ? `<a class="btn" href="${BASE}/ngay/${n + 1}">Sang Ngày ${n + 1} ▶</a>` : `<a class="btn" href="${BASE}">Về lộ trình ▶</a>`) : `<a class="btn" href="${BASE}/ngay/${n}/e">${bestOf(n) == null ? 'Làm bài kiểm tra' : 'Làm lại bài kiểm tra'} (cần ≥ ${PASS} điểm)</a>`}<a class="btn ghost" href="${BASE}/tien-do">📈 Tiến độ chung</a></div>`;
    $('#zcp', box).onclick = (e) => copy(txt, e.target);
  }
  function copy(t, btn) {
    const ok = () => { const o = btn.textContent; btn.textContent = '✔ Đã sao chép'; setTimeout(() => (btn.textContent = o), 1500); };
    if (navigator.clipboard) navigator.clipboard.writeText(t).then(ok, () => fallback()); else fallback();
    function fallback() { const a = document.createElement('textarea'); a.value = t; document.body.appendChild(a); a.select(); try { document.execCommand('copy'); ok(); } catch (e) { /* bỏ qua */ } a.remove(); }
  }

  /* ---------- Luyện 4 thanh ---------- */
  function tones(app) {
    app.innerHTML = crumb('Luyện 4 thanh') + `<h1>🎵 Luyện 4 thanh điệu</h1>${voiceNote()}${settingsBar()}
      <div class="card"><h3>Cao độ của 4 thanh (thang 1 thấp nhất → 5 cao nhất)</h3>${toneSVG()}
        <ul class="small"><li><b style="color:${TONE_COL[1]}">Thanh 1</b>: cao và ngang, giữ giọng ở mức cao, kéo đều.</li><li><b style="color:${TONE_COL[2]}">Thanh 2</b>: từ giữa đi lên cao, giống giọng hỏi lại "Hả?".</li><li><b style="color:${TONE_COL[3]}">Thanh 3</b>: hạ xuống thật thấp rồi mới lên. Khi nói nhanh hoặc đứng trước thanh khác, thường chỉ đọc phần thấp.</li><li><b style="color:${TONE_COL[4]}">Thanh 4</b>: rơi mạnh từ cao xuống thấp, ngắn và dứt khoát.</li><li><b>Thanh nhẹ</b>: không dấu, đọc ngắn và nhẹ, dựa vào âm tiết đứng trước (ví dụ 妈妈 māma, 吗 ma).</li></ul></div>
      <div class="card"><h3>Nghe mẫu từng bộ âm</h3><p class="muted small">Bấm từng ô để nghe, hoặc bấm "Nghe cả 4" rồi đọc theo. Mỗi bộ đọc 3–5 lần.</p>
        <div class="zh-sets">${SETS.map((s) => `<div class="zh-set"><b class="zh-ss">${s.s}</b>${s.c.map((c, i) => `<button class="zh-tc t${i + 1}" data-say="${c}"><span>${c}</span><b>${s.p[i]}</b><small>${s.v[i]}</small></button>`).join('')}<button class="btn ghost small" data-say="${s.c.join('|')}">▶ Nghe cả 4</button></div>`).join('')}</div></div>
      <div class="card"><h3>🎧 Trò chơi: nghe và chọn thanh (10 câu)</h3><div id="pbox"></div></div>`;
    bindBar();
    const go = () => PLT.Q.practice($('#pbox'), Array.from({ length: 10 }, (_, i) => (i % 3 === 2 ? G.toneSee() : G.toneHear())), { again: go });
    go();
  }

  /* ---------- Bảng Pinyin ---------- */
  function pinyinTable(app) {
    const P = D().pinyin || { initials: [], finals: [] };
    const cell = (x) => `<button class="zh-pc" data-say="${x.c}"><b>${x.k}</b><span>${x.c} ${x.p}</span>${x.g ? `<small>${x.g}</small>` : ''}</button>`;
    app.innerHTML = crumb('Bảng Pinyin') + `<h1>🔤 Bảng Pinyin</h1>${voiceNote()}${settingsBar()}
      <div class="card"><p>Một âm tiết Pinyin = <b>thanh mẫu</b> (phụ âm đầu) + <b>vận mẫu</b> (phần vần) + <b>thanh điệu</b>. Ví dụ: m + a + ˇ = <b>mǎ</b> 马 (ngựa).</p><p class="muted small">Dòng chữ nhỏ dưới mỗi âm là <b>âm gần giống trong tiếng Việt</b>, chỉ để tham khảo. Hãy nghe mẫu và bắt chước theo giọng đọc là chính, đừng đọc theo kiểu tiếng Việt.</p></div>
      <h2>Thanh mẫu (phụ âm đầu) – 21 âm + y, w</h2>${P.initials.map((g) => `<div class="card"><h3>${g.ten}</h3>${g.mo ? `<p class="small">${g.mo}</p>` : ''}<div class="zh-pt">${g.am.map(cell).join('')}</div></div>`).join('')}
      <h2>Vận mẫu (phần vần)</h2>${P.finals.map((g) => `<div class="card"><h3>${g.ten}</h3>${g.mo ? `<p class="small">${g.mo}</p>` : ''}<div class="zh-pt">${g.am.map(cell).join('')}</div></div>`).join('')}`;
    bindBar();
  }

  /* ---------- Thẻ từ vựng ---------- */
  function cards(app, f) {
    const opened = D().days.filter((d) => d.vocab.length);
    const sel = f || 'all';
    let ws = sel === 'weak' ? vocabUpTo(99).filter((w) => st().known[w.h] === 0) : sel === 'all' ? vocabUpTo(99) : vocabUpTo(99).filter((w) => w.d === +sel);
    ws = shuffle(ws); let i = 0, flip = false;
    app.innerHTML = crumb('Thẻ từ vựng') + `<h1>🃏 Thẻ từ vựng</h1>${voiceNote()}
      <div class="row"><select class="sel" id="zf"><option value="all">Tất cả từ (${vocabUpTo(99).length})</option><option value="weak">Từ chưa nhớ (${vocabUpTo(99).filter((w) => st().known[w.h] === 0).length})</option>${opened.map((d) => `<option value="${d.n}">Ngày ${d.n}: ${d.ten}</option>`).join('')}</select>${settingsBar()}</div>
      <div id="zcard"></div>`;
    $('#zf').value = sel; $('#zf').onchange = (e) => (location.hash = `${BASE}/tu-vung/${e.target.value}`);
    bindBar();
    const box = $('#zcard');
    const draw = () => {
      if (!ws.length) { box.innerHTML = '<div class="card">Chưa có từ nào trong nhóm này. 🎉</div>'; return; }
      const w = ws[i], k = st().known[w.h], nk = vocabUpTo(99).filter((x) => st().known[x.h] === 1).length;
      box.innerHTML = `<div class="zh-fc${flip ? ' flip' : ''}" id="zfc" tabindex="0"><div class="zh-front"><b class="zh-big">${w.h}</b><span class="muted small">Bấm vào thẻ để lật</span></div>
        <div class="zh-back"><b class="zh-hz">${w.h}</b> ${sp(w.h)}<div class="zh-wp zh-lg">${w.p}</div><div class="zh-wv">${w.v}</div>${w.use ? `<div class="zh-wu">💬 ${w.use}</div>` : ''}${w.ex ? `<div class="zh-ex"><div>${w.ex[0]} ${sp(w.ex[0])}</div><div class="zh-wp">${w.ex[1]}</div><div class="muted">${w.ex[2]}</div></div>` : ''}</div></div>
        <div class="row center"><button class="btn ghost small" id="zpv">◀</button><b>${i + 1}/${ws.length}</b><button class="btn ghost small" id="znx2">▶</button></div>
        <div class="row center"><button class="btn small${k === 0 ? '' : ' ghost'}" id="zno">✗ Chưa nhớ</button><button class="btn small${k === 1 ? '' : ' ghost'}" id="zyes">✔ Đã nhớ</button></div>
        <p class="muted small zh-c">Đã nhớ ${nk}/${vocabUpTo(99).length} từ · Ngày ${w.d}</p>`;
      $('#zfc').onclick = (e) => { if (e.target.closest('[data-say]')) return; flip = !flip; $('#zfc').classList.toggle('flip', flip); if (flip) say(w.h); };
      $('#zpv').onclick = () => { i = (i - 1 + ws.length) % ws.length; flip = false; draw(); };
      $('#znx2').onclick = () => { i = (i + 1) % ws.length; flip = false; draw(); };
      const mark = (v) => { st().known[w.h] = v; PLT.save(); i = (i + 1) % ws.length; flip = false; draw(); };
      $('#zno').onclick = () => mark(0); $('#zyes').onclick = () => mark(1);
    };
    draw();
  }

  /* ---------- Ôn tập tổng hợp ---------- */
  function review(app) {
    const last = Math.max(1, ...D().days.filter((d) => Object.keys(dayState(d.n).parts).length).map((d) => d.n));
    const pool = vocabUpTo(last), weak = pool.filter((w) => st().known[w.h] === 0);
    app.innerHTML = crumb('Ôn tập') + `<h1>🔁 Ôn tập</h1><p class="muted">Câu hỏi lấy từ Ngày 1 đến Ngày ${last}${weak.length ? `, ưu tiên ${weak.length} từ em đánh dấu "chưa nhớ"` : ''}. Mỗi lượt 10 câu, làm bao nhiêu lượt cũng được.</p>${voiceNote()}<div class="card"><div id="pbox"></div></div>`;
    const specs = D().days.filter((d) => d.n <= last).flatMap((d) => d.qs || []);
    const go = () => PLT.Q.practice($('#pbox'), makeQs({ n: 10, pool, focus: weak.length >= 2 ? weak.concat(shuffle(pool).slice(0, 4)) : pool, kinds: ['meaning', 'listen', 'pinyin', 'hanzi', 'listenPy', 'toneHear'], specs, ratio: 0.3 }), { again: go });
    go();
  }

  /* ---------- Tiến độ ---------- */
  function summary() {
    const s = st(), opened = D().days.filter((d) => Object.keys(dayState(d.n).parts).length);
    const words = vocabUpTo(opened.length ? opened[opened.length - 1].n : 0);
    const weak = words.filter((w) => s.known[w.h] === 0).map((w) => w.h);
    const scores = D().days.map((d) => (bestOf(d.n) != null ? `N${d.n}: ${fmtD(bestOf(d.n))}` : null)).filter(Boolean);
    return ['TÓM TẮT TIẾN ĐỘ – TIẾNG TRUNG TỪ SỐ 0 (PLT-Edu)',
      `Hồ sơ: người Việt mới bắt đầu, chữ giản thể, giọng phổ thông, học 30–45 phút/ngày, mục tiêu giao tiếp.`,
      `Ngày học hiện tại: Ngày ${nextDay()}/30 · Đã hoàn thành: ${D().days.filter((d) => isDone(d.n)).map((d) => d.n).join(', ') || 'chưa có'}`,
      `Bài đã học: ${opened.map((d) => `N${d.n} ${d.ten}`).join('; ') || 'chưa có'}`,
      `Từ vựng đã học (${words.length}): ${words.map((w) => `${w.h}(${w.p})`).join(', ')}`,
      `Ngữ pháp đã học: ${opened.map((d) => d.nguphap).filter(Boolean).join('; ') || 'chưa có'}`,
      `Âm Pinyin đã luyện: ${opened.map((d) => d.phatam).filter(Boolean).join('; ') || 'chưa có'}`,
      `Điểm kiểm tra: ${scores.join(', ') || 'chưa có'}`,
      `Từ chưa nhớ: ${weak.join(', ') || 'không có'}`,
      `Lỗi thường gặp cần ôn: ${opened.flatMap((d) => (d.loi || []).slice(0, 1)).join('; ') || 'chưa có'}`].join('\n');
  }
  function progress(app) {
    const t = PLT.data.tests.filter((x) => /^zh:/.test(x.id));
    const all = vocabUpTo(99), nk = all.filter((w) => st().known[w.h] === 1).length;
    app.innerHTML = crumb('Tiến độ') + `<h1>📈 Tiến độ học tiếng Trung</h1>
      <div class="facts zh-facts"><span><b>${D().days.filter((d) => isDone(d.n)).length}</b>/30 ngày hoàn thành</span><span><b>${nk}</b>/${all.length} từ đã nhớ</span><span><b>${t.length}</b> lượt kiểm tra</span></div>
      <div class="card"><h3>Lộ trình</h3><table class="dtable full"><tr><th>Ngày</th><th>Nội dung</th><th>Phần đã xong</th><th>Điểm cao nhất</th></tr>${D().plan.map((p) => { const ds = st().days[p.n], b = bestOf(p.n), has = !!dayOf(p.n); return `<tr><td>${p.n}</td><td>${has ? `<a href="${BASE}/ngay/${p.n}">${p.ten}</a>` : `<span class="muted">${p.ten} (sắp có)</span>`}</td><td>${ds ? PARTS.filter(([k]) => ds.parts[k]).map((x) => x[1]).join(' ') : ''}</td><td>${b != null ? `${b >= PASS ? '✅' : '🟡'} ${fmtD(b)}` : ''}</td></tr>`; }).join('')}</table></div>
      <div class="card"><h3>🧾 Tóm tắt tiến độ (chép sang cuộc trò chuyện với gia sư AI)</h3><p class="muted small">Dán đoạn này vào Claude/Gemini để gia sư AI biết em đang học tới đâu, rồi luyện nói thêm.</p><pre class="zh-rep">${esc(summary())}</pre><div class="row"><button class="btn ghost small" id="zcp">📋 Sao chép</button><button class="btn ghost small" id="zrs">🗑️ Xóa tiến độ tiếng Trung</button></div></div>
      <p class="muted small">Dữ liệu lưu trên trình duyệt của máy này.</p>`;
    $('#zcp').onclick = (e) => copy(summary(), e.target);
    $('#zrs').onclick = () => { if (confirm('Xóa toàn bộ tiến độ và điểm kiểm tra tiếng Trung trên máy này?')) { delete PLT.data.zh; PLT.data.tests = PLT.data.tests.filter((x) => !/^zh:/.test(x.id)); PLT.save(); progress(app); } };
  }

  /* ---------- Điều hướng trong module ---------- */
  function route(app, p) {
    stop();
    const k = p[1] || '';
    if (k === 'ngay') return lesson(app, +p[2] || 1, p[3]);
    if (k === 'thanh-dieu') return tones(app);
    if (k === 'pinyin') return pinyinTable(app);
    if (k === 'tu-vung') return cards(app, p[2]);
    if (k === 'on-tap') return review(app);
    if (k === 'tien-do') return progress(app);
    return home(app);
  }
  function stop() { if (cur) { cur.stop(); cur = null; } if (TTS) speechSynthesis.cancel(); document.body.classList.remove('in-exam'); }
  PLT.ZH = { route, stop, say, toneSVG, SETS, sp };
})();

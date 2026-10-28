/* PLT-Edu core: tiện ích chung, lưu trữ, đăng ký môn học, hình vẽ SVG dùng lại */
(function () {
  'use strict';
  const PLT = (window.PLT = window.PLT || {});
  PLT.subjects = PLT.subjects || {};

  /* ---------- Lưu trữ (an toàn khi trình duyệt chặn localStorage) ---------- */
  const KEY = 'pltedu_v1';
  let data = {};
  try { data = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { data = {}; }
  data.prog = data.prog || {};      // tiến độ theo chủ đề
  data.tests = data.tests || [];    // lịch sử bài kiểm tra
  data.settings = Object.assign({ model: 'gemini-2.5-flash', apiKey: '', name: '' }, data.settings || {});
  PLT.data = data;
  PLT.save = function () { try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) { /* bỏ qua */ } };

  /* ---------- Đăng ký môn học ---------- */
  PLT.registerSubject = function (s) { PLT.subjects[s.id] = s; };

  /* ---------- Tiện ích ---------- */
  const r = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const fmt = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  const parseNum = (s) => { const t = String(s == null ? '' : s).replace(/[\s  .,]/g, ''); return /^-?\d+$/.test(t) ? Number(t) : NaN; };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  /* Đọc số tiếng Việt (đến 999 999) */
  const W = ['không', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];
  function doc3(n, full) {
    const h = Math.floor(n / 100), t = Math.floor(n / 10) % 10, u = n % 10, out = [];
    if (full || h > 0) out.push(W[h] + ' trăm');
    if (t === 0) { if (u > 0 && (full || h > 0)) out.push('linh'); }
    else if (t === 1) out.push('mười');
    else out.push(W[t] + ' mươi');
    if (u > 0) {
      if (u === 1 && t > 1) out.push('mốt');
      else if (u === 5 && t > 0) out.push('lăm');
      else out.push(W[u]);
    }
    return out.join(' ');
  }
  function docSo(n) {
    if (n === 0) return 'không';
    const th = Math.floor(n / 1000), rest = n % 1000, parts = [];
    if (th > 0) parts.push(doc3(th, false) + ' nghìn');
    if (rest > 0) parts.push(doc3(rest, th > 0));
    return parts.join(' ');
  }
  function roman(n) {
    const map = [[10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']]; let s = '';
    for (const [v, k] of map) while (n >= v) { s += k; n -= v; }
    return s;
  }
  const frac = (a, b) => `<span class="frac"><span>${a}</span><span>${b}</span></span>`;

  /* ---------- Bộ tạo câu hỏi ---------- */
  // Trắc nghiệm. ans: số hoặc chuỗi; dis: phương án nhiễu
  function mc(q, ans, dis, exp, unit) {
    let set = [ans];
    for (const d of dis || []) if (!set.includes(d) && (typeof d !== 'number' || d >= 0)) set.push(d);
    if (typeof ans === 'number') { let k = 1; while (set.length < 4 && k < 50) { for (const c of [ans + k, ans - k]) if (c >= 0 && !set.includes(c) && set.length < 4) set.push(c); k++; } }
    set = shuffle(set.slice(0, 4));
    const u = unit ? ' ' + unit : '';
    return { type: 'mc', q, choices: set.map((x) => (typeof x === 'number' ? fmt(x) + u : x)), ai: set.indexOf(ans), exp: exp || '' };
  }
  // Điền vào chỗ trống. blanks: [{pre, ans, post}]
  function fill(q, blanks, exp) { return { type: 'fill', q, blanks, exp: exp || '' }; }
  const fill1 = (q, ans, exp, post) => fill(q, [{ pre: 'Trả lời:', ans, post: post || '' }], exp);
  // Nối: items [{l, r}]
  const match = (q, items, exp) => ({ type: 'match', q, items, rightOrder: shuffle(items.map((x) => x.r)), exp: exp || '' });
  // Sắp xếp: items theo đúng thứ tự
  const order = (q, items, exp) => ({ type: 'order', q, items, shown: shuffleNot(items), exp: exp || '' });
  function shuffleNot(a) { let s; let k = 0; do { s = shuffle(a); k++; } while (k < 10 && s.join('|') === a.join('|')); return s; }
  // Xếp nhóm: items [{t, cat}], cats
  const sort = (q, items, cats, exp) => ({ type: 'sort', q, items: shuffle(items), cats, exp: exp || '' });
  // Tự luận
  const essay = (q, max, dapan, keys) => ({ type: 'essay', q, max, dapan, keys });

  /* ---------- Hình vẽ SVG ---------- */
  function clockSVG(h, m, size) {
    size = size || 140; const c = 50;
    const ha = ((h % 12) + m / 60) * 30, ma = m * 6;
    const hand = (a, len, w, col) => { const rad = (a - 90) * Math.PI / 180; return `<line x1="50" y1="50" x2="${(c + len * Math.cos(rad)).toFixed(1)}" y2="${(c + len * Math.sin(rad)).toFixed(1)}" stroke="${col}" stroke-width="${w}" stroke-linecap="round"/>`; };
    let nums = '';
    for (let i = 1; i <= 12; i++) { const rad = (i * 30 - 90) * Math.PI / 180; nums += `<text x="${(c + 36 * Math.cos(rad)).toFixed(1)}" y="${(c + 36 * Math.sin(rad) + 3.5).toFixed(1)}" font-size="10" text-anchor="middle" fill="#23314d" font-weight="700">${i}</text>`; }
    let ticks = '';
    for (let i = 0; i < 60; i++) { const rad = (i * 6 - 90) * Math.PI / 180, r1 = i % 5 ? 44 : 41; ticks += `<line x1="${(c + r1 * Math.cos(rad)).toFixed(1)}" y1="${(c + r1 * Math.sin(rad)).toFixed(1)}" x2="${(c + 46 * Math.cos(rad)).toFixed(1)}" y2="${(c + 46 * Math.sin(rad)).toFixed(1)}" stroke="#8a93a8" stroke-width="${i % 5 ? 0.6 : 1.4}"/>`; }
    return `<svg class="pic" viewBox="0 0 100 100" width="${size}" height="${size}" role="img" aria-label="Đồng hồ"><circle cx="50" cy="50" r="48" fill="#fff" stroke="#e5484d" stroke-width="3"/>${ticks}${nums}${hand(ha, 22, 3.2, '#23314d')}${hand(ma, 34, 2, '#4a7dff')}<circle cx="50" cy="50" r="2.5" fill="#e5484d"/></svg>`;
  }
  function pieSVG(n, colored, size) {
    size = size || 110; colored = colored || 1; let s = '';
    for (let i = 0; i < n; i++) {
      const a1 = (i / n) * 2 * Math.PI - Math.PI / 2, a2 = ((i + 1) / n) * 2 * Math.PI - Math.PI / 2;
      const x1 = 50 + 45 * Math.cos(a1), y1 = 50 + 45 * Math.sin(a1), x2 = 50 + 45 * Math.cos(a2), y2 = 50 + 45 * Math.sin(a2);
      s += `<path d="M50 50 L${x1.toFixed(2)} ${y1.toFixed(2)} A45 45 0 0 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z" fill="${i < colored ? '#ffc93c' : '#fff'}" stroke="#23314d" stroke-width="1.5"/>`;
    }
    return `<svg class="pic" viewBox="0 0 100 100" width="${size}" height="${size}">${s}</svg>`;
  }
  // a nhóm, mỗi nhóm b đồ vật
  function groupsHTML(a, b, emo) {
    let s = '<div class="groups">';
    for (let i = 0; i < a; i++) s += `<span class="grp">${Array(b).fill(emo).join('<wbr>')}</span>`;
    return s + '</div>';
  }
  function gridSVG(w, h, cell) {
    cell = cell || 22; let s = '';
    for (let i = 0; i < w; i++) for (let j = 0; j < h; j++) s += `<rect x="${i * cell + 2}" y="${j * cell + 2}" width="${cell}" height="${cell}" fill="#bfe9e3" stroke="#2bb3a3"/>`;
    return `<svg class="pic" viewBox="0 0 ${w * cell + 4} ${h * cell + 4}" width="${w * cell + 4}" height="${h * cell + 4}">${s}</svg>`;
  }
  function numlineHTML(seq, hide) {
    return '<div class="numline">' + seq.map((v, i) => hide.includes(i) ? '<span class="nl q">?</span>' : `<span class="nl">${fmt(v)}</span>`).join('') + '<span class="nl arrow">➜</span></div>';
  }
  function angleSVG(deg, rot) {
    const L = 70, cx = 30, cy = 80, a1 = -rot * Math.PI / 180, a2 = -(rot + deg) * Math.PI / 180;
    const p = (a) => `${(cx + L * Math.cos(a)).toFixed(1)} ${(cy + L * Math.sin(a)).toFixed(1)}`;
    let mark = '';
    if (deg === 90) { const s = 12, u = [Math.cos(a1), Math.sin(a1)], v = [Math.cos(a2), Math.sin(a2)]; mark = `<path d="M${cx + s * u[0]} ${cy + s * u[1]} L${cx + s * (u[0] + v[0])} ${cy + s * (u[1] + v[1])} L${cx + s * v[0]} ${cy + s * v[1]}" fill="none" stroke="#e5484d" stroke-width="1.5"/>`; }
    return `<svg class="pic" viewBox="-20 0 140 100" width="160" height="115"><path d="M${p(a1)} L${cx} ${cy} L${p(a2)}" fill="none" stroke="#23314d" stroke-width="3" stroke-linecap="round"/><circle cx="${cx}" cy="${cy}" r="3" fill="#23314d"/></svg>`.replace('</svg>', mark + '</svg>');
  }
  function shapeSVG(kind) {
    const st = 'fill="#dbe6ff" stroke="#4a7dff" stroke-width="3"';
    const m = {
      'hình tam giác': `<polygon points="60,10 110,90 10,90" ${st}/>`,
      'hình vuông': `<rect x="25" y="15" width="70" height="70" ${st}/>`,
      'hình chữ nhật': `<rect x="5" y="25" width="110" height="55" ${st}/>`,
      'hình tứ giác': `<polygon points="20,20 100,10 110,85 15,70" ${st}/>`,
      'hình tròn': `<circle cx="60" cy="50" r="42" ${st}/>`
    };
    return `<svg class="pic" viewBox="0 0 120 100" width="140" height="115">${m[kind]}</svg>`;
  }
  function tableHTML(head, rows) {
    return '<table class="dtable"><thead><tr>' + head.map((h) => `<th>${h}</th>`).join('') + '</tr></thead><tbody>' + rows.map((r) => '<tr>' + r.map((c) => `<td>${c}</td>`).join('') + '</tr>').join('') + '</tbody></table>';
  }
  function thermoSVG(t) {
    const top = 10, bot = 150, y = bot - (t / 50) * (bot - top);
    let ticks = '';
    for (let v = 0; v <= 50; v += 5) { const yy = bot - (v / 50) * (bot - top); ticks += `<line x1="38" x2="${v % 10 ? 44 : 48}" y1="${yy}" y2="${yy}" stroke="#23314d"/>` + (v % 10 ? '' : `<text x="52" y="${yy + 4}" font-size="10" fill="#23314d">${v}</text>`); }
    return `<svg class="pic" viewBox="0 0 80 175" width="80" height="175"><rect x="24" y="5" width="14" height="150" rx="7" fill="#fff" stroke="#23314d"/><rect x="27" y="${y}" width="8" height="${bot - y + 8}" fill="#e5484d"/><circle cx="31" cy="160" r="11" fill="#e5484d" stroke="#23314d"/>${ticks}<text x="52" y="170" font-size="9" fill="#6b7690">°C</text></svg>`;
  }
  function rulerSVG(mm) {
    let s = ''; const k = 3; // 3px mỗi mm
    for (let i = 0; i <= 100; i++) s += `<line x1="${10 + i * k}" x2="${10 + i * k}" y1="40" y2="${i % 10 ? (i % 5 ? 46 : 49) : 54}" stroke="#23314d" stroke-width="${i % 10 ? 0.6 : 1.2}"/>` + (i % 10 ? '' : `<text x="${10 + i * k}" y="64" font-size="9" text-anchor="middle">${i / 10}</text>`);
    return `<svg class="pic" viewBox="0 0 320 72" width="100%" style="max-width:420px"><rect x="10" y="14" width="${mm * k}" height="14" rx="3" fill="#ffc93c" stroke="#b7791f"/><polygon points="${10 + mm * k},14 ${10 + mm * k + 12},21 ${10 + mm * k},28" fill="#f6ad55" stroke="#b7791f"/><rect x="2" y="36" width="316" height="34" fill="#f3f6fb" stroke="#8a93a8"/>${s}<text x="306" y="64" font-size="8">cm</text></svg>`;
  }

  PLT.U = { r, pick, shuffle, fmt, parseNum, esc, cap, docSo, roman, frac, mc, fill, fill1, match, order, sort, essay, clockSVG, pieSVG, groupsHTML, gridSVG, numlineHTML, angleSVG, shapeSVG, tableHTML, thermoSVG, rulerSVG };
})();

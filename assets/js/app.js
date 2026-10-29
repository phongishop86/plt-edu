/* PLT-Edu portal: điều hướng, các trang Trang chủ / Lớp / Học bài / Ôn tập / Kiểm tra / Tiến độ / Cài đặt */
(function () {
  'use strict';
  const { shuffle, esc } = PLT.U;
  const $ = (s, el) => (el || document).querySelector(s);
  const app = $('#app');
  let active = null; // phòng thi đang chạy

  /* ---------- Danh mục: môn đã có dữ liệu (nạp khi cần) ---------- */
  const CATALOG = {};
  for (let l = 1; l <= 12; l++) CATALOG['toan-' + l] = { lop: l, mon: 'Toán', file: `subjects/toan-${l}.js` };
  // Tiếng Việt: thêm lớp vào danh sách khi đã có file dữ liệu
  [1, 2, 3, 4, 5].forEach((l) => { CATALOG['tieng-viet-' + l] = { lop: l, mon: 'Tiếng Việt', file: `subjects/tieng-viet-${l}.js` }; });
  // Các môn dạng ngân hàng kiến thức: tiền tố file → tên môn; AVAIL liệt kê file đã có
  const SLUG = { 'tieng-anh': 'Tiếng Anh', 'dao-duc': 'Đạo đức', 'tnxh': 'Tự nhiên và Xã hội', 'khoa-hoc': 'Khoa học', 'lsdl': 'Lịch sử và Địa lí', 'tin-hoc': 'Tin học', 'cong-nghe': 'Công nghệ', 'am-nhac': 'Âm nhạc', 'mi-thuat': 'Mĩ thuật', 'gdtc': 'Giáo dục thể chất', 'hdtn': 'Hoạt động trải nghiệm', 'ngu-van': 'Ngữ văn', 'khtn': 'Khoa học tự nhiên', 'gdcd': 'Giáo dục công dân', 'vat-li': 'Vật lí', 'hoa-hoc': 'Hoá học', 'sinh-hoc': 'Sinh học', 'lich-su': 'Lịch sử', 'dia-li': 'Địa lí', 'gdktpl': 'Giáo dục kinh tế và pháp luật', 'gdqp': 'Giáo dục quốc phòng và an ninh' };
  const AVAIL = (window.PLT_AVAIL || []);
  AVAIL.forEach((id) => { const m = id.match(/^(.+)-(\d+)$/); if (!m || !SLUG[m[1]]) return; const l = +m[2]; let mon = SLUG[m[1]]; if (m[1] === 'hdtn' && l >= 6) mon = 'Hoạt động trải nghiệm, hướng nghiệp'; CATALOG[id] = { lop: l, mon, file: `subjects/${id}.js` }; });
  const cidOf = (l, m) => Object.keys(CATALOG).find((k) => CATALOG[k].lop === l && CATALOG[k].mon === m);
  // Môn theo bộ SGK Kết nối tri thức (năm học 2026–2027) – môn chưa có dữ liệu hiện "Sắp có"
  const PRIMARY12 = ['Toán', 'Tiếng Việt', 'Tiếng Anh', 'Đạo đức', 'Tự nhiên và Xã hội', 'Âm nhạc', 'Mĩ thuật', 'Giáo dục thể chất', 'Hoạt động trải nghiệm'];
  const PRIMARY3 = ['Toán', 'Tiếng Việt', 'Tiếng Anh', 'Đạo đức', 'Tự nhiên và Xã hội', 'Tin học', 'Công nghệ', 'Âm nhạc', 'Mĩ thuật', 'Giáo dục thể chất', 'Hoạt động trải nghiệm'];
  const PRIMARY45 = ['Toán', 'Tiếng Việt', 'Tiếng Anh', 'Đạo đức', 'Khoa học', 'Lịch sử và Địa lí', 'Tin học', 'Công nghệ', 'Âm nhạc', 'Mĩ thuật', 'Giáo dục thể chất', 'Hoạt động trải nghiệm'];
  const THCS = ['Toán', 'Ngữ văn', 'Tiếng Anh', 'Khoa học tự nhiên', 'Lịch sử và Địa lí', 'Giáo dục công dân', 'Tin học', 'Công nghệ', 'Âm nhạc', 'Mĩ thuật', 'Giáo dục thể chất', 'Hoạt động trải nghiệm, hướng nghiệp'];
  const THPT = ['Toán', 'Ngữ văn', 'Tiếng Anh', 'Vật lí', 'Hoá học', 'Sinh học', 'Lịch sử', 'Địa lí', 'Giáo dục kinh tế và pháp luật', 'Tin học', 'Công nghệ', 'Giáo dục quốc phòng và an ninh', 'Âm nhạc', 'Mĩ thuật', 'Giáo dục thể chất', 'Hoạt động trải nghiệm, hướng nghiệp'];
  const BOOKS = { 1: PRIMARY12, 2: PRIMARY12, 3: PRIMARY3, 4: PRIMARY45, 5: PRIMARY45, 6: THCS, 7: THCS, 8: THCS, 9: THCS, 10: THPT, 11: THPT, 12: THPT };
  const ICON = { 'Toán': '🔢', 'Tiếng Việt': '📖', 'Ngữ văn': '📖', 'Tiếng Anh': '🔤', 'Đạo đức': '🤝', 'Tự nhiên và Xã hội': '🌳', 'Tin học': '💻', 'Công nghệ': '🛠️', 'Âm nhạc': '🎵', 'Mĩ thuật': '🎨', 'Giáo dục thể chất': '⚽', 'Hoạt động trải nghiệm': '🧭', 'Hoạt động trải nghiệm, hướng nghiệp': '🧭', 'Khoa học': '🔬', 'Khoa học tự nhiên': '🔬', 'Lịch sử và Địa lí': '🗺️', 'Lịch sử': '🏛️', 'Địa lí': '🌏', 'Giáo dục công dân': '⚖️', 'Giáo dục kinh tế và pháp luật': '⚖️', 'Vật lí': '⚛️', 'Hoá học': '🧪', 'Sinh học': '🧬', 'Giáo dục quốc phòng và an ninh': '🎖️' };
  const CAP = (l) => (l <= 5 ? 'Tiểu học' : l <= 9 ? 'THCS' : 'THPT');

  const curLop = () => { const l = +PLT.data.settings.lop; return l >= 1 && l <= 12 ? l : 3; };
  const setLop = (l) => { PLT.data.settings.lop = +l; PLT.save(); };
  const sidOf = (l) => 'toan-' + l;

  // Nạp file môn học khi cần (chạy được cả khi mở trực tiếp index.html)
  const loading = {};
  function ensure(sid) {
    if (PLT.subjects[sid]) return Promise.resolve(PLT.subjects[sid]);
    const c = CATALOG[sid]; if (!c) return Promise.resolve(null);
    if (!loading[sid]) loading[sid] = new Promise((ok) => { const s = document.createElement('script'); s.src = c.file + (window.PLT_VER ? '?v=' + window.PLT_VER : ''); s.onload = () => ok(PLT.subjects[sid] || null); s.onerror = () => ok(null); document.body.appendChild(s); });
    return loading[sid];
  }

  // Lấy n câu hỏi xoay vòng qua các dạng
  const keyOf = (q) => q.q + '|' + (q.choices ? q.choices[q.ai] : JSON.stringify(q.blanks || (q.items || []).map((x) => (typeof x === 'string' ? x : x.l || x.t)).sort()));
  function build(S, gens, n) {
    const out = [], seen = new Set(); let pool = []; let g = 0;
    while (out.length < n && g++ < n * 20) {
      if (!pool.length) pool = shuffle(gens);
      const q = S.gens[pool.pop()](); const key = keyOf(q);
      if (!seen.has(key)) { seen.add(key); out.push(q); }
    }
    if (out.length < n && !build.inner) { // ngân hàng của các bài này còn ít: bổ sung từ các bài khác cùng môn
      build.inner = true; const more = Object.keys(S.gens).filter((k) => !gens.includes(k));
      if (more.length) build(S, more, n * 3).forEach((q) => { const key = keyOf(q); if (out.length < n && !seen.has(key)) { seen.add(key); out.push(q); } });
      build.inner = false;
    }
    return out;
  }
  const stars = (p) => (p == null ? '<span class="muted">chưa làm</span>' : p >= 80 ? '⭐⭐⭐' : p >= 50 ? '⭐⭐' : '⭐');
  const progKey = (S, t) => S.id + ':' + t;
  function saveProg(S, t, ok, n) { const k = progKey(S, t), p = Math.round((ok / n) * 100), o = PLT.data.prog[k] || { best: 0, n: 0 }; PLT.data.prog[k] = { best: Math.max(o.best, p), n: o.n + 1, last: p }; PLT.save(); }
  const tname = (S, t) => (t.nhan || (S.lop >= 6 ? 'Chương' : 'Chủ đề') + ' ' + t.id);
  const crumb = (S, extra) => `<div class="crumb"><a href="#/">Trang chủ</a> › <a href="#/lop/${S.lop}">Lớp ${S.lop}</a> › ${extra || S.mon + ' ' + S.lop}</div>`;

  /* ---------------- Trang chủ ---------------- */
  function home() {
    const name = PLT.data.settings.name, l = curLop(), s = sidOf(l);
    const grades = [['Tiểu học', [1, 2, 3, 4, 5]], ['Trung học cơ sở', [6, 7, 8, 9]], ['Trung học phổ thông', [10, 11, 12]]];
    app.innerHTML = `<section class="hero2"><div class="hw"><div>
        <div class="eyebrow">Miễn phí · Bám sát SGK Kết nối tri thức · Lớp 1–12</div>
        <h1>${name ? 'Chào ' + esc(name) + '! ' : ''}Học chắc, ôn nhanh, <em>kiểm tra tự tin</em>.</h1>
        <p class="lead">Lý thuyết ngắn gọn, mô phỏng tương tác, câu hỏi ngẫu nhiên không giới hạn và đề kiểm tra theo tuần, tháng, học kỳ — có AI chấm tự luận.</p>
        <p class="pick-q">Em đang học…</p>
        <div class="pick">
          <a href="#/lop/${l <= 5 ? l : 1}"><b>Tiểu học</b><span>Lớp 1 – 5 · Toán, Tiếng Việt</span><i>→</i></a>
          <a href="#/lop/${l >= 6 && l <= 9 ? l : 6}"><b>Trung học cơ sở</b><span>Lớp 6 – 9 · Toán</span><i>→</i></a>
          <a href="#/lop/${l >= 10 ? l : 10}"><b>Trung học phổ thông</b><span>Lớp 10 – 12 · Toán</span><i>→</i></a>
          <a href="https://phongishop86.github.io/plt-aiedu/"><b>🤖 AI Edu</b><span>Học AI an toàn, miễn phí</span><i>→</i></a>
        </div>
        <div class="facts"><span><b>12</b> lớp</span><span><b>575</b> bài Toán</span><span><b>Đề</b> tuần · tháng · kỳ</span><span><b>AI</b> chấm tự luận</span><span>Tiến độ lưu ngay trên máy</span></div>
      </div>
      <div class="hcard"><div class="hl"><img src="assets/img/logo-192.png" alt=""><div><b>Đang học: Lớp ${l}</b><span>Chọn lớp khác bên dưới hoặc trên thanh menu</span></div></div>
        <div class="lops">${Array.from({ length: 12 }, (_, i) => i + 1).map((x) => `<a href="#/lop/${x}" class="${x === l ? 'on' : ''}">${x}</a>`).join('')}</div>
        <div class="qa"><a href="#/hoc/${s}"><span>📚</span>Học bài</a><a href="#/on-tap/${s}"><span>🎯</span>Ôn tập</a><a href="#/kiem-tra/${s}"><span>📝</span>Kiểm tra</a></div></div>
    </div></section>
      ${grades.map(([g, ls]) => `<h2>${g}</h2><div class="grades">${ls.map((x) => `<a class="grade${x === l ? ' cur' : ''}" href="#/lop/${x}"><span>Lớp</span><b>${x}</b><em>${BOOKS[x].length} môn</em></a>`).join('')}</div>`).join('')}
      <h2>Một buổi học có gì</h2><div class="feats">
        <a class="feat" href="#/hoc/${s}"><span>📚</span><b>Học bài</b><p>Lý thuyết ngắn gọn, mô phỏng tương tác, bài tập có lời giải.</p></a>
        <a class="feat" href="#/on-tap/${s}"><span>🎯</span><b>Ôn tập nhanh</b><p>Câu hỏi ngẫu nhiên không giới hạn, chấm ngay từng câu.</p></a>
        <a class="feat" href="#/kiem-tra/${s}"><span>📝</span><b>Kiểm tra</b><p>Đề theo tuần, tháng, giữa kỳ, cuối kỳ. Có giờ làm bài, AI chấm tự luận.</p></a>
        <a class="feat" href="#/tien-do"><span>📈</span><b>Tiến độ</b><p>Xem sao đạt được ở từng chủ đề và lịch sử điểm kiểm tra.</p></a></div>`;
  }

  /* ---------------- Trang lớp: menu các môn ---------------- */
  async function grade(l) {
    l = +l; if (!(l >= 1 && l <= 12)) return home(); setLop(l); syncLop();
    const S = await ensure(sidOf(l));
    const menu = S ? `<div class="card"><div class="row" style="justify-content:space-between"><h2 style="margin:0">🔢 Toán ${l} <small class="muted">· ${S.bo}</small></h2><div class="row"><a class="btn" href="#/on-tap/${S.id}">🎯 Ôn tập</a><a class="btn ghost" href="#/kiem-tra/${S.id}">📝 Kiểm tra</a></div></div>
      <div class="tmenu">${[1, 2].map((hk) => `<div><div class="hk">Học kì ${hk}</div>${S.topics.filter((t) => t.hk === hk).map((t) => `<a class="tlink" href="#/hoc/${S.id}/${t.id}"><span>${t.id}</span><b>${t.ten}</b><em>${stars((PLT.data.prog[progKey(S, t.id)] || {}).best)} · ${t.bai.length} bài</em></a>`).join('')}</div>`).join('')}</div></div>` : '';
    app.innerHTML = `<div class="crumb"><a href="#/">Trang chủ</a> › Lớp ${l}</div><h1>Lớp ${l} <small class="muted">· ${CAP(l)}</small></h1>
      <div class="lopnav">${Array.from({ length: 12 }, (_, i) => i + 1).map((x) => `<a href="#/lop/${x}" class="${x === l ? 'on' : ''}">${x}</a>`).join('')}</div>
      ${menu}<h2>Các môn học lớp ${l}</h2><div class="subjects">${BOOKS[l].map((m) => { const cid = cidOf(l, m), has = !!cid; return `<${has ? `a href="#/hoc/${cid}"` : 'div'} class="subj${has ? '' : ' soon'}"><div class="si">${ICON[m] || '📘'}</div><b>${m} ${l}</b><span class="muted small">${has ? 'Đã có: học bài, ôn tập, kiểm tra' : 'Đang biên soạn – sắp có'}</span></${has ? 'a' : 'div'}>`; }).join('')}</div>`;
  }

  /* ---------------- Học bài ---------------- */
  function learn(S, tid) {
    const sid = S.id, t = S.topics.find((x) => x.id === +tid) || S.topics[0];
    const side = [1, 2].map((hk) => `<div class="hk">Học kì ${hk}</div>` + S.topics.filter((x) => x.hk === hk).map((x) => `<a class="tlink${x.id === t.id ? ' on' : ''}" href="#/hoc/${sid}/${x.id}"><span>${x.id}</span><b>${x.ten}</b><em>${stars((PLT.data.prog[progKey(S, x.id)] || {}).best)}</em></a>`).join('')).join('');
    app.innerHTML = crumb(S) + `
      <div class="learn"><nav class="side"><select class="sel mobile-only" id="tsel">${S.topics.map((x) => `<option value="${x.id}" ${x.id === t.id ? 'selected' : ''}>${tname(S, x)}. ${x.ten}</option>`).join('')}</select><div class="desk-only">${side}</div></nav>
      <div class="lmain"><div class="thead"><span class="tag">${tname(S, t)} · Học kì ${t.hk}</span><h1>${t.ten}</h1></div>
      <div class="tabs"><button data-t="lt" class="on">📖 Lý thuyết</button>${(t.widgets || []).length ? '<button data-t="tt">🧩 Tương tác</button>' : ''}<button data-t="bt">✏️ Bài tập</button></div><div id="tab"></div></div></div>`;
    $('#tsel').onchange = (e) => (location.hash = `#/hoc/${sid}/${e.target.value}`);
    const items = S.bai.filter((b) => b.topic === t.id);
    const tabs = {
      lt() {
        $('#tab').innerHTML = `<div class="card theory">${t.lt}</div><h3>Các bài trong ${tname(S, t).toLowerCase()}</h3><div class="bai">${items.map((b) => `<button class="bitem" data-k="${b.k}"><span>${b.so ? 'Bài ' + b.so : '✦'}</span>${b.ten}<em>Luyện 5 câu ▶</em></button>`).join('')}</div>`;
        $('#tab').onclick = (e) => { const b = e.target.closest('[data-k]'); if (!b) return; const B = S.bai[+b.dataset.k]; runPractice($('#tab'), S, B.gens, 5, (B.so ? `Bài ${B.so}. ` : '') + B.ten, t.id); };
      },
      tt() { $('#tab').innerHTML = t.widgets.map((w, i) => `<div class="card"><h3>${PLT.widgets[w.split(':')[0]].title}</h3><div id="w${i}"></div></div>`).join(''); t.widgets.forEach((w, i) => { const [n, a] = w.split(':'); PLT.widgets[n].render($('#w' + i), a); }); $('#tab').onclick = null; },
      bt() { $('#tab').onclick = null; runPractice($('#tab'), S, t.gens, 8, 'Bài tập ' + tname(S, t).toLowerCase(), t.id); }
    };
    $('.tabs').onclick = (e) => { const b = e.target.closest('button'); if (!b) return; document.querySelectorAll('.tabs button').forEach((x) => x.classList.toggle('on', x === b)); tabs[b.dataset.t](); };
    tabs.lt();
  }
  function runPractice(box, S, gens, n, title, tid) {
    box.onclick = null;
    box.innerHTML = `<div class="card"><h3>${title}</h3><div id="pbox"></div></div>`;
    PLT.Q.practice($('#pbox', box), build(S, gens, n), { onDone: (ok, tot) => tid && saveProg(S, tid, ok, tot), again: () => runPractice(box, S, gens, n, title, tid) });
  }

  /* ---------------- Ôn tập nhanh ---------------- */
  function quiz(S) {
    const all = [...new Set(S.topics.flatMap((t) => t.gens))];
    app.innerHTML = crumb(S, `Ôn tập nhanh · ${S.mon} ${S.lop}`) + `<h1>🎯 Ôn tập nhanh · ${S.mon} ${S.lop}</h1><p class="muted">Câu hỏi được tạo ngẫu nhiên – mỗi lượt một bộ đề khác, chấm ngay từng câu.</p>
      <div class="card row wrap"><label>Phạm vi <select class="sel" id="qs"><option value="all">Cả năm</option><option value="hk1">Học kì 1</option><option value="hk2">Học kì 2</option>${S.topics.map((t) => `<option value="${t.id}">${tname(S, t)}. ${t.ten}</option>`).join('')}</select></label>
      <label>Số câu <select class="sel" id="qn"><option>10</option><option>20</option><option>30</option></select></label><button class="btn" id="qgo">Bắt đầu ▶</button></div><div id="qbox"></div>`;
    $('#qgo').onclick = () => {
      const v = $('#qs').value, n = +$('#qn').value;
      const gens = v === 'all' ? all : v === 'hk1' || v === 'hk2' ? [...new Set(S.topics.filter((t) => t.hk === +v[2]).flatMap((t) => t.gens))] : S.topics.find((t) => t.id === +v).gens;
      runPractice($('#qbox'), S, gens, n, $('#qs').selectedOptions[0].text, /^\d+$/.test(v) ? +v : null);
      $('#qbox').scrollIntoView({ behavior: 'smooth' });
    };
  }

  /* ---------------- Kiểm tra ---------------- */
  const range = (list) => { const a = list[0], z = list[list.length - 1]; const f = (b) => (b.so ? 'Bài ' + b.so : b.ten); return a === z ? f(a) : `${f(a)} → ${f(z)}`; };
  function testList(S, tab) {
    const sid = S.id; tab = tab || 'tuan';
    const best = (id) => { const r = PLT.data.tests.filter((x) => x.id === id); return r.length ? `<span class="pill">Cao nhất ${String(Math.max(...r.map((x) => x.diem))).replace('.', ',')}đ</span>` : ''; };
    let list = '';
    if (tab === 'tuan') list = S.weeks.map((w) => `<a class="tcard" href="#/thi/${sid}/w${w.tuan}"><b>Tuần ${w.tuan}</b><span class="muted small">${range(w.bai)}</span><span class="small">${w.bai.map((b) => b.ten).join(' · ')}</span><span class="meta">10 câu · 15 phút ${best(sid + ':w' + w.tuan)}</span></a>`).join('');
    if (tab === 'thang') list = S.months.map((m) => `<a class="tcard" href="#/thi/${sid}/m${m.thang}"><b>Tháng ${m.thang}</b><span class="muted small">Tuần ${m.tuan[0]}–${m.tuan[1]} · ${range(m.bai)}</span><span class="meta">16 câu + 1 tự luận · 30 phút ${best(sid + ':m' + m.thang)}</span></a>`).join('');
    if (tab === 'ky') list = S.terms.map((t) => `<a class="tcard" href="#/thi/${sid}/${t.id}"><b>${t.ten}</b><span class="muted small">${range(t.bai)}</span><span class="meta">${S.lop >= 6 ? '12 câu + 2 tự luận · 45 phút' : '12 câu + 2 tự luận · 40 phút'} ${best(sid + ':' + t.id)}</span></a>`).join('');
    app.innerHTML = crumb(S, `Kiểm tra · ${S.mon} ${S.lop}`) + `<h1>📝 Kiểm tra · ${S.mon} ${S.lop}</h1><p class="muted">Mỗi lần làm là một đề mới. Phân phối bài theo tuần/tháng là tham khảo, thầy cô/phụ huynh có thể điều chỉnh.</p>
      <div class="tabs"><a href="#/kiem-tra/${sid}/tuan" class="${tab === 'tuan' ? 'on' : ''}">Theo tuần</a><a href="#/kiem-tra/${sid}/thang" class="${tab === 'thang' ? 'on' : ''}">Theo tháng</a><a href="#/kiem-tra/${sid}/ky" class="${tab === 'ky' ? 'on' : ''}">Giữa kỳ – Cuối kỳ</a></div><div class="tgrid">${list}</div>`;
  }
  function takeTest(S, code) {
    const sid = S.id; let cfg; const big = S.lop >= 6;
    if (code[0] === 'w') { const w = S.weeks.find((x) => x.tuan === +code.slice(1)); if (!w) return testList(S); cfg = { title: `Kiểm tra tuần ${w.tuan}`, gens: [...new Set(w.bai.flatMap((b) => b.gens))], n: 10, min: 15, essays: 0, hk: w.bai[0].hk };
    } else if (code[0] === 'm') { const m = S.months.find((x) => x.thang === +code.slice(1)); if (!m) return testList(S); cfg = { title: `Kiểm tra tháng ${m.thang}`, gens: [...new Set(m.bai.flatMap((b) => b.gens))], n: 16, min: 30, essays: 1, hk: m.bai[m.bai.length - 1].hk };
    } else { const t = S.terms.find((x) => x.id === code); if (!t) return testList(S); cfg = { title: t.ten, gens: [...new Set(t.bai.flatMap((b) => b.gens))], n: 12, min: big ? 45 : 40, essays: 2, hk: t.essay }; }
    const pool = (S.essays && (S.essays[cfg.hk] || S.essays[1])) || [];
    const es = shuffle(pool).slice(0, cfg.essays).map((f) => f());
    const qs = build(S, cfg.gens, cfg.n).concat(es);
    app.innerHTML = crumb(S, `<a href="#/kiem-tra/${sid}">Kiểm tra</a> › ${cfg.title}`) + `<h1>${cfg.title} <small class="muted">· ${S.mon} ${S.lop}</small></h1><div id="ebox"></div>`;
    active = PLT.Q.exam($('#ebox'), { id: sid + ':' + code, subject: S.id, title: `${cfg.title} – ${S.mon} ${S.lop}`, questions: qs, minutes: cfg.min, again: () => takeTest(S, code), back: () => (location.hash = `#/kiem-tra/${sid}`) });
  }

  /* ---------------- Tiến độ ---------------- */
  async function progress() {
    app.innerHTML = '<p class="muted">Đang tải…</p>';
    const used = new Set(Object.keys(PLT.data.prog).map((k) => k.split(':')[0]).concat(PLT.data.tests.map((x) => x.subject || '')));
    used.add(sidOf(curLop()));
    const subs = (await Promise.all([...used].filter((s) => CATALOG[s]).map(ensure))).filter(Boolean).sort((a, b) => a.lop - b.lop);
    const rows = subs.map((S) => `<div class="card"><h3>${S.icon} ${S.mon} ${S.lop}</h3><table class="dtable full"><tr><th>Chủ đề / Chương</th><th>Kết quả tốt nhất</th><th>Số lượt</th></tr>${S.topics.map((t) => { const p = PLT.data.prog[progKey(S, t.id)]; return `<tr><td><a href="#/hoc/${S.id}/${t.id}">${t.id}. ${t.ten}</a></td><td>${stars(p && p.best)} ${p ? p.best + '%' : ''}</td><td>${p ? p.n : 0}</td></tr>`; }).join('')}</table></div>`).join('');
    const tests = PLT.data.tests.length ? `<table class="dtable full"><tr><th>Ngày</th><th>Bài kiểm tra</th><th>Điểm</th></tr>${PLT.data.tests.map((x) => `<tr><td>${new Date(x.ngay).toLocaleString('vi-VN')}</td><td>${esc(x.ten)}</td><td><b>${String(x.diem).replace('.', ',')}</b></td></tr>`).join('')}</table>` : '<p class="muted">Chưa làm bài kiểm tra nào.</p>';
    app.innerHTML = `<div class="crumb"><a href="#/">Trang chủ</a> › Tiến độ</div><h1>📈 Tiến độ học tập</h1><div class="card"><h3>Lịch sử kiểm tra</h3>${tests}</div>${rows}<p class="muted small">Dữ liệu lưu trên trình duyệt của máy này.</p>`;
  }

  /* ---------------- Cài đặt ---------------- */
  function settings() {
    const S = PLT.data.settings; const d = document.createElement('div'); d.className = 'modal';
    d.innerHTML = `<div class="mbox"><h2>⚙️ Cài đặt</h2><label>Tên học sinh<input class="inp" id="sname" value="${esc(S.name)}"></label>
      <label>Lớp đang học<select class="inp" id="slop">${Array.from({ length: 12 }, (_, i) => `<option value="${i + 1}" ${i + 1 === curLop() ? 'selected' : ''}>Lớp ${i + 1}</option>`).join('')}</select></label>
      <label>Khóa Gemini API (để AI chấm tự luận)<input class="inp" id="skey" type="password" value="${esc(S.apiKey)}" placeholder="AIza…"></label>
      <p class="muted small">Lấy khóa miễn phí tại aistudio.google.com → Get API key. Khóa chỉ lưu trên trình duyệt máy này. Không có khóa thì tự luận được chấm sơ bộ theo đáp số.</p>
      <label>Mô hình AI<input class="inp" id="smodel" value="${esc(S.model)}"></label>
      <div class="row"><button class="btn" id="ssave">Lưu</button><button class="btn ghost" id="stest">Thử kết nối AI</button><button class="btn ghost" id="sclose">Đóng</button></div><div id="smsg" class="small"></div>
      <hr><button class="btn ghost small" id="sreset">Xóa toàn bộ tiến độ trên máy này</button></div>`;
    document.body.appendChild(d);
    const read = () => { S.name = $('#sname', d).value.trim(); S.apiKey = $('#skey', d).value.trim(); S.model = $('#smodel', d).value.trim() || 'gemini-2.5-flash'; setLop($('#slop', d).value); PLT.save(); };
    $('#ssave', d).onclick = () => { read(); d.remove(); syncLop(); route(); };
    $('#sclose', d).onclick = () => d.remove();
    d.onclick = (e) => { if (e.target === d) d.remove(); };
    $('#stest', d).onclick = async () => {
      read(); $('#smsg', d).textContent = 'Đang thử…';
      const q = PLT.U.essay('Tính 25 + 17', 1, '25 + 17 = 42', [42]);
      const g = await PLT.Q.aiGrade([{ q, resp: '25 + 17 = 42' }]);
      $('#smsg', d).innerHTML = g[0].src === 'ai' ? `<span class="ok">✔ Kết nối AI thành công (${g[0].diem}/1 điểm: ${esc(g[0].nhan_xet)})</span>` : `<span class="bad">✘ Chưa kết nối được AI. ${esc(g[0].nhan_xet)}</span>`;
    };
    $('#sreset', d).onclick = () => { if (confirm('Xóa toàn bộ tiến độ và lịch sử kiểm tra?')) { PLT.data.prog = {}; PLT.data.tests = []; PLT.save(); d.remove(); route(); } };
  }

  /* ---------------- Điều hướng ---------------- */
  let seq = 0;
  async function route() {
    if (active) { active.stop(); active = null; }
    const my = ++seq;
    const p = (location.hash.replace(/^#\/?/, '') || '').split('/').map(decodeURIComponent);
    const lb = $('.lopbox'); if (lb) lb.classList.toggle('on', p[0] === 'lop');
    document.querySelectorAll('.nav a').forEach((a) => a.classList.toggle('on', (a.dataset.r || '') === (p[0] === 'thi' ? 'kiem-tra' : p[0] || '')));
    const needS = ['hoc', 'on-tap', 'kiem-tra', 'thi'].includes(p[0]);
    let S = null;
    if (needS) {
      const sid = p[1] || sidOf(curLop());
      app.innerHTML = '<p class="muted">Đang tải bài học…</p>';
      S = await ensure(sid); if (my !== seq) return;
      if (!S) { app.innerHTML = '<div class="card">Không tải được môn học này. Kiểm tra lại kết nối hoặc tải lại trang.</div>'; return; }
      if (S.lop !== curLop()) { setLop(S.lop); syncLop(); }
    }
    switch (p[0]) {
      case 'lop': await grade(p[1]); break;
      case 'hoc': learn(S, p[2]); break;
      case 'on-tap': quiz(S); break;
      case 'kiem-tra': testList(S, p[2]); break;
      case 'thi': takeTest(S, p[2]); break;
      case 'tien-do': await progress(); break;
      default: home();
    }
    window.scrollTo(0, 0);
  }
  function syncLop() {
    const l = curLop(), s = sidOf(l);
    $('#nav').innerHTML = `<a href="#/" data-r="">🏠 <span>Trang chủ</span></a><a href="#/hoc/${s}" data-r="hoc">📚 <span>Học bài</span></a><a href="#/on-tap/${s}" data-r="on-tap">🎯 <span>Ôn tập</span></a><a href="#/kiem-tra/${s}" data-r="kiem-tra">📝 <span>Kiểm tra</span></a><a href="#/tien-do" data-r="tien-do">📈 <span>Tiến độ</span></a>`;
    const sel = $('#lopSel'); if (sel) sel.value = l;
    const ic = $('#lopIc'); if (ic) ic.href = `#/lop/${l}`;
  }
  function nav() {
    const top = $('.top .in');
    // Một ô chọn lớp duy nhất: bấm biểu tượng 🏫 để mở trang lớp, chọn lớp khác thì chuyển ngay
    const box = document.createElement('div'); box.className = 'lopbox';
    box.innerHTML = `<a id="lopIc" class="lopic" href="#/lop/${curLop()}" title="Mở trang lớp">🏫</a><select id="lopSel" class="lopsel" title="Chọn lớp" aria-label="Chọn lớp">${Array.from({ length: 12 }, (_, i) => `<option value="${i + 1}">Lớp ${i + 1}</option>`).join('')}</select>`;
    top.insertBefore(box, $('#nav')); const sel = $('#lopSel');
    sel.onchange = () => { setLop(sel.value); syncLop(); location.hash = `#/lop/${sel.value}`; };
    $('#gear').onclick = settings; syncLop();
  }
  window.addEventListener('hashchange', route);
  nav(); route();
})();

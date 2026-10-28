/* PLT-Edu portal: điều hướng, các trang Trang chủ / Học bài / Ôn tập / Kiểm tra / Tiến độ / Cài đặt */
(function () {
  'use strict';
  const { shuffle, esc } = PLT.U;
  const $ = (s, el) => (el || document).querySelector(s);
  const app = $('#app');
  let active = null; // phòng thi đang chạy

  // Danh sách môn dự kiến theo lớp (môn chưa có dữ liệu hiện "Sắp có")
  const PLAN = { 1: ['Toán', 'Tiếng Việt'], 2: ['Toán', 'Tiếng Việt', 'Tiếng Anh'], 3: ['Toán', 'Tiếng Việt', 'Tiếng Anh', 'Tin học'], 4: ['Toán', 'Tiếng Việt', 'Tiếng Anh', 'Khoa học'], 5: ['Toán', 'Tiếng Việt', 'Tiếng Anh', 'Khoa học'], 6: ['Toán', 'Ngữ văn', 'Tiếng Anh', 'KHTN'], 7: ['Toán', 'Ngữ văn', 'Tiếng Anh', 'KHTN'], 8: ['Toán', 'Ngữ văn', 'Tiếng Anh', 'KHTN'], 9: ['Toán', 'Ngữ văn', 'Tiếng Anh', 'KHTN'], 10: ['Toán', 'Ngữ văn', 'Tiếng Anh', 'Vật lí'], 11: ['Toán', 'Ngữ văn', 'Tiếng Anh', 'Vật lí'], 12: ['Toán', 'Ngữ văn', 'Tiếng Anh', 'Vật lí'] };
  const ICON = { 'Toán': '🔢', 'Tiếng Việt': '📖', 'Ngữ văn': '📖', 'Tiếng Anh': '🔤', 'Tin học': '💻', 'Khoa học': '🔬', 'KHTN': '🔬', 'Vật lí': '⚛️' };
  const subjOf = (lop, mon) => Object.values(PLT.subjects).find((s) => s.lop === lop && s.mon === mon);
  const firstSubj = () => Object.values(PLT.subjects)[0];

  // Lấy n câu hỏi xoay vòng qua các dạng
  function build(S, gens, n) {
    const out = [], seen = new Set(); let pool = []; let g = 0;
    while (out.length < n && g++ < n * 20) {
      if (!pool.length) pool = shuffle(gens);
      const q = S.gens[pool.pop()](); const key = q.q + JSON.stringify(q.choices || q.blanks || q.items);
      if (!seen.has(key)) { seen.add(key); out.push(q); }
    }
    return out;
  }
  const stars = (p) => (p == null ? '<span class="muted">chưa làm</span>' : p >= 80 ? '⭐⭐⭐' : p >= 50 ? '⭐⭐' : '⭐');
  const progKey = (S, t) => S.id + ':' + t;
  function saveProg(S, t, ok, n) { const k = progKey(S, t), p = Math.round((ok / n) * 100), o = PLT.data.prog[k] || { best: 0, n: 0 }; PLT.data.prog[k] = { best: Math.max(o.best, p), n: o.n + 1, last: p }; PLT.save(); }

  /* ---------------- Trang chủ ---------------- */
  function home() {
    const name = PLT.data.settings.name;
    app.innerHTML = `<section class="hero"><div><h1>Chào ${name ? esc(name) : 'em'}! 👋</h1><p>Học bài – ôn tập – kiểm tra theo đúng chương trình SGK. Chọn lớp để bắt đầu nhé.</p></div><div class="mascot">🦉</div></section>
      <h2>Chọn lớp</h2><div class="grades">${Array.from({ length: 12 }, (_, i) => i + 1).map((l) => { const has = Object.values(PLT.subjects).some((s) => s.lop === l); return `<a class="grade${has ? '' : ' soon'}" href="#/lop/${l}"><span>Lớp</span><b>${l}</b>${has ? '' : '<em>Sắp có</em>'}</a>`; }).join('')}</div>
      <h2>Tính năng</h2><div class="feats">
        <a class="feat" href="#/hoc/${firstSubj().id}"><span>📚</span><b>Học bài</b><p>Lý thuyết ngắn gọn, mô phỏng tương tác, bài tập có lời giải.</p></a>
        <a class="feat" href="#/on-tap/${firstSubj().id}"><span>🎯</span><b>Ôn tập nhanh</b><p>Câu hỏi ngẫu nhiên không giới hạn, chấm ngay từng câu.</p></a>
        <a class="feat" href="#/kiem-tra/${firstSubj().id}"><span>📝</span><b>Kiểm tra</b><p>Đề theo tuần, tháng, giữa kỳ, cuối kỳ. Có giờ làm bài, AI chấm tự luận.</p></a>
        <a class="feat" href="#/tien-do"><span>📈</span><b>Tiến độ</b><p>Xem sao đạt được ở từng chủ đề và lịch sử điểm kiểm tra.</p></a></div>`;
  }
  function grade(l) {
    l = +l; const list = PLAN[l] || [];
    app.innerHTML = `<div class="crumb"><a href="#/">Trang chủ</a> › Lớp ${l}</div><h1>Lớp ${l}</h1><div class="subjects">${list.map((m) => { const S = subjOf(l, m); return S ? `<div class="subj"><div class="si">${ICON[m] || '📘'}</div><b>${m} ${l}</b><span class="muted small">${S.bo}</span><div class="row"><a class="btn" href="#/hoc/${S.id}">Học bài</a><a class="btn ghost" href="#/on-tap/${S.id}">Ôn tập</a><a class="btn ghost" href="#/kiem-tra/${S.id}">Kiểm tra</a></div></div>` : `<div class="subj soon"><div class="si">${ICON[m] || '📘'}</div><b>${m} ${l}</b><span class="muted small">Đang biên soạn – sắp có</span></div>`; }).join('')}</div>`;
  }

  /* ---------------- Học bài ---------------- */
  function learn(sid, tid) {
    const S = PLT.subjects[sid]; if (!S) return home(); const t = S.topics.find((x) => x.id === +tid) || S.topics[0];
    const side = [1, 2].map((hk) => `<div class="hk">Học kì ${hk}</div>` + S.topics.filter((x) => x.hk === hk).map((x) => `<a class="tlink${x.id === t.id ? ' on' : ''}" href="#/hoc/${sid}/${x.id}"><span>${x.id}</span><b>${x.ten}</b><em>${stars((PLT.data.prog[progKey(S, x.id)] || {}).best)}</em></a>`).join('')).join('');
    app.innerHTML = `<div class="crumb"><a href="#/">Trang chủ</a> › <a href="#/lop/${S.lop}">Lớp ${S.lop}</a> › ${S.mon} ${S.lop}</div>
      <div class="learn"><nav class="side"><select class="sel mobile-only" id="tsel">${S.topics.map((x) => `<option value="${x.id}" ${x.id === t.id ? 'selected' : ''}>Chủ đề ${x.id}. ${x.ten}</option>`).join('')}</select><div class="desk-only">${side}</div></nav>
      <div class="lmain"><div class="thead"><span class="tag">Chủ đề ${t.id} · Học kì ${t.hk}</span><h1>${t.ten}</h1></div>
      <div class="tabs"><button data-t="lt" class="on">📖 Lý thuyết</button>${t.widgets.length ? '<button data-t="tt">🧩 Tương tác</button>' : ''}<button data-t="bt">✏️ Bài tập</button></div><div id="tab"></div></div></div>`;
    $('#tsel').onchange = (e) => (location.hash = `#/hoc/${sid}/${e.target.value}`);
    const tabs = {
      lt() {
        $('#tab').innerHTML = `<div class="card theory">${t.lt}</div><h3>Các bài trong chủ đề</h3><div class="bai">${t.bai.map((b) => `<button class="bitem" data-b="${b[0]}"><span>Bài ${b[0]}</span>${b[1]}<em>Luyện 5 câu ▶</em></button>`).join('')}</div>`;
        $('#tab').onclick = (e) => { const b = e.target.closest('[data-b]'); if (!b) return; const B = S.bai.find((x) => x.so === +b.dataset.b); runPractice($('#tab'), S, B.gens, 5, `Bài ${B.so}. ${B.ten}`, t.id); };
      },
      tt() { $('#tab').innerHTML = t.widgets.map((w, i) => `<div class="card"><h3>${PLT.widgets[w.split(':')[0]].title}</h3><div id="w${i}"></div></div>`).join(''); t.widgets.forEach((w, i) => { const [n, a] = w.split(':'); PLT.widgets[n].render($('#w' + i), a); }); $('#tab').onclick = null; },
      bt() { $('#tab').onclick = null; runPractice($('#tab'), S, t.gens, 8, 'Bài tập chủ đề ' + t.id, t.id); }
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
  function quiz(sid) {
    const S = PLT.subjects[sid]; if (!S) return home();
    const all = [...new Set(S.topics.flatMap((t) => t.gens))];
    app.innerHTML = `<div class="crumb"><a href="#/">Trang chủ</a> › Ôn tập nhanh · ${S.mon} ${S.lop}</div><h1>🎯 Ôn tập nhanh</h1><p class="muted">Câu hỏi được tạo ngẫu nhiên – mỗi lượt một bộ đề khác, chấm ngay từng câu.</p>
      <div class="card row wrap"><label>Phạm vi <select class="sel" id="qs"><option value="all">Cả năm</option><option value="hk1">Học kì 1</option><option value="hk2">Học kì 2</option>${S.topics.map((t) => `<option value="${t.id}">Chủ đề ${t.id}. ${t.ten}</option>`).join('')}</select></label>
      <label>Số câu <select class="sel" id="qn"><option>10</option><option>20</option><option>30</option></select></label><button class="btn" id="qgo">Bắt đầu ▶</button></div><div id="qbox"></div>`;
    $('#qgo').onclick = () => {
      const v = $('#qs').value, n = +$('#qn').value;
      const gens = v === 'all' ? all : v === 'hk1' || v === 'hk2' ? [...new Set(S.topics.filter((t) => t.hk === +v[2]).flatMap((t) => t.gens))] : S.topics.find((t) => t.id === +v).gens;
      runPractice($('#qbox'), S, gens, n, $('#qs').selectedOptions[0].text, /^\d+$/.test(v) ? +v : null);
      $('#qbox').scrollIntoView({ behavior: 'smooth' });
    };
  }

  /* ---------------- Kiểm tra ---------------- */
  function testList(sid, tab) {
    const S = PLT.subjects[sid]; if (!S) return home(); tab = tab || 'tuan';
    const best = (id) => { const r = PLT.data.tests.filter((x) => x.id === id); return r.length ? `<span class="pill">Cao nhất ${String(Math.max(...r.map((x) => x.diem))).replace('.', ',')}đ</span>` : ''; };
    let list = '';
    if (tab === 'tuan') list = S.weeks.map((w) => `<a class="tcard" href="#/thi/${sid}/w${w.tuan}"><b>Tuần ${w.tuan}</b><span class="muted small">${w.bai.map((b) => 'Bài ' + b.so).join(', ')}</span><span class="small">${w.bai.map((b) => b.ten).join(' · ')}</span><span class="meta">10 câu · 15 phút ${best(sid + ':w' + w.tuan)}</span></a>`).join('');
    if (tab === 'thang') list = S.months.map((m) => `<a class="tcard" href="#/thi/${sid}/m${m.thang}"><b>Tháng ${m.thang}</b><span class="muted small">Tuần ${m.tuan[0]}–${m.tuan[1]} · Bài ${m.bai[0].so}–${m.bai[m.bai.length - 1].so}</span><span class="meta">16 câu + 1 tự luận · 30 phút ${best(sid + ':m' + m.thang)}</span></a>`).join('');
    if (tab === 'ky') list = S.terms.map((t) => `<a class="tcard" href="#/thi/${sid}/${t.id}"><b>${t.ten}</b><span class="muted small">Bài ${t.bai[0].so}–${t.bai[t.bai.length - 1].so}</span><span class="meta">12 câu + 2 tự luận · 40 phút ${best(sid + ':' + t.id)}</span></a>`).join('');
    app.innerHTML = `<div class="crumb"><a href="#/">Trang chủ</a> › Kiểm tra · ${S.mon} ${S.lop}</div><h1>📝 Kiểm tra</h1><p class="muted">Mỗi lần làm là một đề mới. Phân phối bài theo tuần/tháng là tham khảo, thầy cô/phụ huynh có thể điều chỉnh.</p>
      <div class="tabs"><a href="#/kiem-tra/${sid}/tuan" class="${tab === 'tuan' ? 'on' : ''}">Theo tuần</a><a href="#/kiem-tra/${sid}/thang" class="${tab === 'thang' ? 'on' : ''}">Theo tháng</a><a href="#/kiem-tra/${sid}/ky" class="${tab === 'ky' ? 'on' : ''}">Giữa kỳ – Cuối kỳ</a></div><div class="tgrid">${list}</div>`;
  }
  function takeTest(sid, code) {
    const S = PLT.subjects[sid]; if (!S) return home();
    let cfg;
    if (code[0] === 'w') { const w = S.weeks.find((x) => x.tuan === +code.slice(1)); cfg = { title: `Kiểm tra tuần ${w.tuan}`, gens: [...new Set(w.bai.flatMap((b) => b.gens))], n: 10, min: 15, essays: 0, hk: w.bai[0].hk };
    } else if (code[0] === 'm') { const m = S.months.find((x) => x.thang === +code.slice(1)); cfg = { title: `Kiểm tra tháng ${m.thang}`, gens: [...new Set(m.bai.flatMap((b) => b.gens))], n: 16, min: 30, essays: 1, hk: m.bai[m.bai.length - 1].hk };
    } else { const t = S.terms.find((x) => x.id === code); cfg = { title: t.ten, gens: [...new Set(t.bai.flatMap((b) => b.gens))], n: 12, min: 40, essays: 2, hk: t.essay }; }
    const es = shuffle(S.essays[cfg.hk] || []).slice(0, cfg.essays).map((f) => f());
    const qs = build(S, cfg.gens, cfg.n).concat(es);
    app.innerHTML = `<div class="crumb"><a href="#/">Trang chủ</a> › <a href="#/kiem-tra/${sid}">Kiểm tra</a> › ${cfg.title}</div><h1>${cfg.title} <small class="muted">· ${S.mon} ${S.lop}</small></h1><div id="ebox"></div>`;
    active = PLT.Q.exam($('#ebox'), { id: sid + ':' + code, subject: S.id, title: cfg.title, questions: qs, minutes: cfg.min, again: () => takeTest(sid, code), back: () => (location.hash = `#/kiem-tra/${sid}`) });
  }

  /* ---------------- Tiến độ ---------------- */
  function progress() {
    const rows = Object.values(PLT.subjects).map((S) => `<div class="card"><h3>${S.icon} ${S.mon} ${S.lop}</h3><table class="dtable full"><tr><th>Chủ đề</th><th>Kết quả tốt nhất</th><th>Số lượt</th></tr>${S.topics.map((t) => { const p = PLT.data.prog[progKey(S, t.id)]; return `<tr><td><a href="#/hoc/${S.id}/${t.id}">${t.id}. ${t.ten}</a></td><td>${stars(p && p.best)} ${p ? p.best + '%' : ''}</td><td>${p ? p.n : 0}</td></tr>`; }).join('')}</table></div>`).join('');
    const tests = PLT.data.tests.length ? `<table class="dtable full"><tr><th>Ngày</th><th>Bài kiểm tra</th><th>Điểm</th></tr>${PLT.data.tests.map((x) => `<tr><td>${new Date(x.ngay).toLocaleString('vi-VN')}</td><td>${esc(x.ten)}</td><td><b>${String(x.diem).replace('.', ',')}</b></td></tr>`).join('')}</table>` : '<p class="muted">Chưa làm bài kiểm tra nào.</p>';
    app.innerHTML = `<div class="crumb"><a href="#/">Trang chủ</a> › Tiến độ</div><h1>📈 Tiến độ học tập</h1>${rows}<div class="card"><h3>Lịch sử kiểm tra</h3>${tests}</div><p class="muted small">Dữ liệu lưu trên trình duyệt của máy này.</p>`;
  }

  /* ---------------- Cài đặt ---------------- */
  function settings() {
    const S = PLT.data.settings; const d = document.createElement('div'); d.className = 'modal';
    d.innerHTML = `<div class="mbox"><h2>⚙️ Cài đặt</h2><label>Tên học sinh<input class="inp" id="sname" value="${esc(S.name)}"></label>
      <label>Khóa Gemini API (để AI chấm tự luận)<input class="inp" id="skey" type="password" value="${esc(S.apiKey)}" placeholder="AIza…"></label>
      <p class="muted small">Lấy khóa miễn phí tại aistudio.google.com → Get API key. Khóa chỉ lưu trên trình duyệt máy này. Không có khóa thì tự luận được chấm sơ bộ theo đáp số.</p>
      <label>Mô hình AI<input class="inp" id="smodel" value="${esc(S.model)}"></label>
      <div class="row"><button class="btn" id="ssave">Lưu</button><button class="btn ghost" id="stest">Thử kết nối AI</button><button class="btn ghost" id="sclose">Đóng</button></div><div id="smsg" class="small"></div>
      <hr><button class="btn ghost small" id="sreset">Xóa toàn bộ tiến độ trên máy này</button></div>`;
    document.body.appendChild(d);
    const read = () => { S.name = $('#sname', d).value.trim(); S.apiKey = $('#skey', d).value.trim(); S.model = $('#smodel', d).value.trim() || 'gemini-2.5-flash'; PLT.save(); };
    $('#ssave', d).onclick = () => { read(); d.remove(); route(); };
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
  function route() {
    if (active) { active.stop(); active = null; }
    const p = (location.hash.replace(/^#\/?/, '') || '').split('/');
    document.querySelectorAll('.nav a').forEach((a) => a.classList.toggle('on', (a.dataset.r || '') === (p[0] || '')));
    const sid = p[1] || firstSubj().id;
    switch (p[0]) {
      case 'lop': grade(p[1]); break;
      case 'hoc': learn(sid, p[2]); break;
      case 'on-tap': quiz(sid); break;
      case 'kiem-tra': testList(sid, p[2]); break;
      case 'thi': takeTest(sid, p[2]); break;
      case 'tien-do': progress(); break;
      default: home();
    }
    window.scrollTo(0, 0);
  }
  function nav() {
    const s = firstSubj().id;
    $('#nav').innerHTML = `<a href="#/" data-r="">🏠 <span>Trang chủ</span></a><a href="#/hoc/${s}" data-r="hoc">📚 <span>Học bài</span></a><a href="#/on-tap/${s}" data-r="on-tap">🎯 <span>Ôn tập</span></a><a href="#/kiem-tra/${s}" data-r="kiem-tra">📝 <span>Kiểm tra</span></a><a href="#/tien-do" data-r="tien-do">📈 <span>Tiến độ</span></a>`;
    $('#gear').onclick = settings;
  }
  window.addEventListener('hashchange', route);
  nav(); route();
})();

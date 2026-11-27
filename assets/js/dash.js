/* PLT-Edu · Thanh menu dọc (máy tính), trang chủ dạng bảng điều khiển và trang Lộ trình học tập (#/lo-trinh-hoc).
   Dữ liệu: PLT.data.plan (từ bước xác định trình độ), PLT.data.gam (XP, chuỗi ngày), tiến độ từng khoá ngoại ngữ. */
(function () {
  'use strict';
  const $ = (s, r) => (r || document).querySelector(s);
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const ymd = (d) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  const today = () => ymd(new Date());
  const dayDiff = (a, b) => Math.round((new Date(b + 'T00:00:00') - new Date(a + 'T00:00:00')) / 864e5);

  const L = {
    zh: { key: 'tieng-trung', id: 'zh', ten: 'Tiếng Trung', icon: '🇨🇳', bg: '#FDE2E2', lv: ['HSK 1–2', 'HSK 3', 'HSK 4', 'HSK 5–6', 'HSK 7–9'], name: ['Nhập môn', 'Sơ cấp', 'Trung cấp', 'Trung cao', 'Cao cấp'] },
    en: { key: 'tieng-anh', id: 'en', ten: 'Tiếng Anh', icon: '🇬🇧', bg: '#DDE8FB', lv: ['A1', 'A2', 'B1', 'B2', 'C1'], name: ['Khởi đầu', 'Sơ cấp', 'Trung cấp', 'Trung cao', 'Cao cấp'] },
    ko: { key: 'tieng-han', id: 'ko', ten: 'Tiếng Hàn', icon: '🇰🇷', bg: '#E4E1FA', lv: ['TOPIK 1', 'TOPIK 2', 'TOPIK 3', 'TOPIK 4', 'TOPIK 5–6'], name: ['Nhập môn', 'Sơ cấp', 'Trung cấp 1', 'Trung cấp 2', 'Cao cấp'] }
  };
  const ORDER = ['en', 'zh', 'ko'];
  const plan = () => PLT.data.plan || null;
  const gam = () => PLT.data.gam || { xp: 0, days: {}, goal: 20 };
  const streak = () => { const g = gam(); return g.last && dayDiff(g.last, today()) <= 1 ? g.streak || 0 : 0; };
  const xpMonth = () => { const g = gam(), m = today().slice(0, 7); return Object.keys(g.days || {}).filter((d) => d.slice(0, 7) === m).reduce((a, d) => a + g.days[d], 0); };
  const cKey = (k, n) => (n > 1 ? L[k].key + '-c' + n : L[k].key);
  const cId = (k, n) => L[k].id + (n > 1 ? n : '');
  const cHref = (k, n) => '#/' + L[k].key + (n > 1 ? '/c' + n : '');
  const myLv = (k) => { const p = plan(); return (p && p.lv && p.lv[k]) || 1; };
  const langsOf = () => { const p = plan(); return p && p.lv ? ORDER.filter((k) => p.lv[k]).sort((a, b) => (p.goals || []).indexOf(a) - (p.goals || []).indexOf(b)) : []; };
  function dayDone(k, n, d) {
    const id = cId(k, n), s = PLT.data[id], st = s && s.days && s.days[d];
    if ((PLT.data.tests || []).some((x) => x.id === id + ':d' + d && x.diem >= 7)) return true;
    return !!(st && st.parts && Object.keys(st.parts).length >= 5);
  }
  function prog(k, n) {
    let done = 0, next = 0, todayHit = false; const s = PLT.data[cId(k, n)];
    for (let d = 1; d <= 30; d++) { if (dayDone(k, n, d)) done++; else if (!next) next = d; }
    if (s && s.days) todayHit = Object.values(s.days).some((x) => x && x.last && x.last.slice(0, 10) === today());
    return { done, next: next || 30, pct: Math.round((done / 30) * 100), todayHit };
  }
  /* Nạp dữ liệu khoá (tên từng ngày, giai đoạn) */
  async function course(k, n) {
    if (!(await PLT.APP.langLoad()) || !PLT.LANG.ensure) return null;
    const c = PLT.LANG.COURSES[cKey(k, n)]; if (!c) return null;
    try { await PLT.LANG.ensure(c); } catch (e) { return null; }
    return c.data && c.data();
  }
  const stagesOf = (D) => (D && D.stages && D.stages.length ? D.stages : [{ ten: 'Tuần 1', tu: 1, den: 7 }, { ten: 'Tuần 2', tu: 8, den: 14 }, { ten: 'Tuần 3', tu: 15, den: 21 }, { ten: 'Tuần 4', tu: 22, den: 30 }]);
  const dayTitle = (D, d) => (D && D.plan && D.plan[d - 1] ? D.plan[d - 1].ten : 'Ngày ' + d);
  const perLevelDays = (m) => Math.round((30 * 30) / Math.max(10, m || 20));
  function estimate(k) {
    const p = plan() || {}, n = myLv(k), tg = Math.max(n, (p.target && p.target[k]) || n), pr = prog(k, n);
    const days = perLevelDays(p.mins) * ((tg - n + 1) - pr.done / 30);
    return { tg, weeks: Math.max(1, Math.round((perLevelDays(p.mins) * (1 - pr.done / 30)) / 7)), months: Math.max(1, Math.round(days / 30)) };
  }

  /* ---------- Thanh menu dọc ---------- */
  /* Nhóm menu thu gọn / bung ra: trạng thái lưu trên máy (plt-sb) */
  let SB = {}; try { SB = JSON.parse(localStorage.getItem('plt-sb')) || {}; } catch (e) { SB = {}; }
  const sbSave = () => { try { localStorage.setItem('plt-sb', JSON.stringify(SB)); } catch (e) { /* bỏ qua */ } };
  function side() {
    if (!window.matchMedia) return;
    let a = $('#sbar');
    if (!a) {
      a = document.createElement('aside'); a.id = 'sbar'; a.className = 'sbar'; document.body.insertBefore(a, document.body.firstChild); document.body.classList.add('has-sbar');
      if (SB.mini) document.body.classList.add('sb-mini');
      a.addEventListener('click', (e) => {
        if (e.target.closest('[data-gear]')) return PLT.APP.settings();
        if (e.target.closest('[data-mini]')) { SB.mini = !SB.mini; document.body.classList.toggle('sb-mini', SB.mini); sbSave(); return; }
        const g = e.target.closest('[data-g]'); if (!g) return;
        if (document.body.classList.contains('sb-mini')) { SB.mini = false; document.body.classList.remove('sb-mini'); }
        const k = g.dataset.g; SB[k] = !(SB[k] != null ? SB[k] : g.parentNode.classList.contains('open')); g.parentNode.classList.toggle('open', SB[k]); g.setAttribute('aria-expanded', SB[k]); sbSave();
      });
    }
    const h = (location.hash.replace(/^#\/?/, '') || '').split('/');
    const r = h[0] === 'thi' ? 'kiem-tra' : h[0] === 'ngoai-ngu' && h[1] === 'thanh-tich' ? 'thanh-tich' : h[0] || 'home';
    const l = PLT.APP.curLop(), has = PLT.APP.hasLop(), p = plan(), lopNow = h[0] === 'lop' ? +h[1] : 0;
    const it = (href, icon, bg, t, on) => `<a class="si${on ? ' on' : ''}" href="${href}" title="${t}"><i style="background:${bg}">${icon}</i><span>${t}</span></a>`;
    const sub = (href, t, on) => `<a class="sc${on ? ' on' : ''}" href="${href}">${t}</a>`;
    const grp = (k, icon, bg, t, act, body, def) => { const op = SB[k] != null ? SB[k] : act || def; return `<div class="sg${op ? ' open' : ''}${act ? ' act' : ''}"><button type="button" class="si sg-h" data-g="${k}" aria-expanded="${!!op}" title="${t}"><i style="background:${bg}">${icon}</i><span>${t}</span><b>▾</b></button><div class="sg-b">${body}</div></div>`; };
    const u = window.PLT_ACC && PLT_ACC.user && PLT_ACC.user(), nm = PLT.data.settings.name || (u && u.displayName) || 'Khách';
    const sb = p ? [p.role === 'hs' && p.lop ? 'Lớp ' + p.lop : ''].concat(langsOf().map((k) => L[k].lv[myLv(k) - 1])).filter(Boolean).join(' · ') : has ? 'Lớp ' + l : 'Chưa xác định trình độ';
    const practice = ['on-tap', 'kiem-tra', 'nang-cao', 'chuyen-cap'];
    const AI = [['tieu-hoc', 'Tiểu học'], ['thcs', 'THCS'], ['thpt', 'THPT'], ['di-lam', 'Người đi làm'], ['claude', '✨ Học Claude']];
    a.innerHTML = `<div class="sb-top"><a class="sb-logo" href="#/" title="PLT-Edu"><img src="assets/img/logo-96.png" alt=""><span>PLT-Edu<small>Học tập · Luyện thi</small></span></a><button type="button" class="sb-mb" data-mini title="Thu gọn / mở rộng menu">«</button></div>
      <nav class="sb-nav">${it('#/', '🏠', '#FBE3CF', 'Trang chủ', r === 'home')}${it(p ? '#/lo-trinh-hoc' : '#/lo-trinh', '🧭', '#D9F0EA', 'Lộ trình học tập', r === 'lo-trinh-hoc' || r === 'lo-trinh')}
        ${grp('sgk', '📚', '#E3ECFF', 'Giáo trình SGK', ['lop', 'hoc'].includes(r), `<div class="sc-lop">${Array.from({ length: 12 }, (_, i) => `<a class="${(lopNow || (r === 'hoc' && l)) === i + 1 ? 'on' : ''}${has && l === i + 1 ? ' my' : ''}" href="#/lop/${i + 1}" title="Lớp ${i + 1}">${i + 1}</a>`).join('')}</div>`, false)}
        ${grp('lt', '🎯', '#FFE4E4', 'Luyện tập', practice.includes(r), sub(PLT.APP.modePath('on-tap', l), '🎯 Ôn tập', r === 'on-tap') + sub(PLT.APP.modePath('kiem-tra', l), '📝 Kiểm tra', r === 'kiem-tra') + sub(PLT.APP.modePath('nang-cao', l), '⭐ Nâng cao*', r === 'nang-cao') + sub('#/chuyen-cap', '🎓 Chuyển cấp', r === 'chuyen-cap'), false)}
        ${grp('nn', '🌏', '#DDE8FB', 'Ngoại ngữ', ['ngoai-ngu', 'tieng-anh', 'tieng-trung', 'tieng-han'].includes(r) && r !== 'thanh-tich', ORDER.map((k) => sub(cHref(k, p && p.lv && p.lv[k] ? p.lv[k] : 1), `${L[k].icon} ${L[k].ten}${p && p.lv && p.lv[k] ? ` <em>${L[k].lv[p.lv[k] - 1]}</em>` : ''}`, r === L[k].key)).join('') + sub('#/ngoai-ngu', '🗂️ Tất cả cấp độ', r === 'ngoai-ngu'), false)}
        ${grp('ai', '🤖', '#E7F6E9', 'AI Edu', false, AI.map(([f, t]) => sub(`ai/${f}/`, t, false)).join('') + sub('ai/', '🏠 Trang AI Edu', false), false)}
        ${grp('me', '🏆', '#FFF3C4', 'Của em', ['tien-do', 'thanh-tich', 'xep-hang'].includes(r), sub('#/tien-do', '📈 Tiến độ', r === 'tien-do') + sub('#/ngoai-ngu/thanh-tich', '🏆 Thành tích', r === 'thanh-tich') + sub('#/xep-hang', '🏅 Xếp hạng tháng', r === 'xep-hang'), false)}</nav>
      <div class="sb-me"><div class="sb-u"><i>${u && u.photoURL ? `<img src="${esc(u.photoURL)}" alt="" referrerpolicy="no-referrer">` : esc(nm.trim().charAt(0).toUpperCase() || '?')}</i><div><b>${esc(nm)}</b><small>${esc(sb)}</small></div><button type="button" data-gear title="Cài đặt">⚙️</button></div>
        <div class="sb-st"><span title="Số ngày học liên tiếp">🔥 <b>${streak()}</b></span><span title="XP tháng này">⚡ <b>${xpMonth()}</b> XP</span></div></div>`;
  }

  /* ---------- Trang chủ dạng bảng điều khiển ---------- */
  const DOW = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
  function week() {
    const g = gam(), now = new Date(), w = (now.getDay() + 6) % 7, mon = new Date(now); mon.setDate(now.getDate() - w);
    let n = 0; const cells = DOW.map((t, i) => { const d = new Date(mon); d.setDate(mon.getDate() + i); const k = ymd(d), on = (g.days || {})[k] > 0; if (on) n++; return `<span class="wk${on ? ' on' : ''}${i === w ? ' now' : ''}"><small>${t}</small><i>${on ? '✓' : ''}</i></span>`; }).join('');
    return { cells, n };
  }
  const act = (k) => { const a = PLT.data.act; return !!(a && a.d === today() && a[k]); };
  const aiKey = (href) => { const m = /^ai\/([a-z-]+)\//.exec(href || ''); return m ? 'plt-aiedu-' + m[1] + '-v1' : ''; };
  const aiState = (href) => { try { return JSON.parse(localStorage.getItem(aiKey(href))) || {}; } catch (e) { return {}; } };
  function tasks() {
    const p = plan(), m = p.mins || 20, T = [];
    langsOf().forEach((k) => { const n = myLv(k), pr = prog(k, n); T.push({ cat: `${L[k].ten} · ${L[k].lv[n - 1]}`, icon: L[k].icon, t: `Ngày ${pr.next}`, k, n, d: pr.next, href: `${cHref(k, n)}/ngay/${pr.next}`, done: pr.todayHit }); });
    if (p.role === 'hs' && p.lop) {
      if ((p.goals || []).includes('lop')) { T.push({ cat: `Lớp ${p.lop}`, icon: '📚', t: 'Học 1 bài mới theo SGK', href: PLT.APP.modePath('hoc', p.lop), done: act('hoc') }); T.push({ cat: `Lớp ${p.lop}`, icon: '🎯', t: 'Ôn tập 10 câu ngẫu nhiên', href: PLT.APP.modePath('on-tap', p.lop), done: act('on') }); }
      if ((p.goals || []).includes('thi')) T.push({ cat: 'Chuyển cấp', icon: '🎓', t: new Date().getDay() === 0 ? 'Làm 1 đề thi có giờ' : 'Ôn 1 dạng bài thi', href: '#/chuyen-cap', done: act('cc') });
      if ((p.goals || []).includes('nc')) T.push({ cat: 'Nâng cao*', icon: '⭐', t: '1 bài nâng cao', href: PLT.APP.modePath('nang-cao', p.lop), done: act('nc') });
    }
    if ((p.goals || []).includes('ai')) { const ai = (p.items || []).find((x) => /^ai\//.test(x.href)) || { href: 'ai/', t: 'AI Edu' }; const as = aiState(ai.href), dn = (as.done || []).length; T.push({ cat: `AI Edu · đã xong ${dn} buổi`, icon: '🤖', t: `Buổi ${Math.min(dn + 1, 16)} · ${ai.t}`, href: ai.href, done: as.at === today() }); }
    const per = Math.max(5, Math.round(m / Math.max(1, Math.min(T.length, 3)) / 5) * 5);
    T.forEach((x) => (x.mins = per));
    return T;
  }
  function tile(href, icon, badge, t, d, bg) { return `<a class="dt" href="${href}" style="--bg:${bg}"><em>${badge}</em><b>${t}</b><span>${d}</span><i>${icon}</i></a>`; }
  function home(app) {
    const p = plan(), g = gam(), nm = PLT.data.settings.name, l = PLT.APP.curLop(), has = PLT.APP.hasLop(), wk = week(), t = today();
    const dt = new Date(), T = tasks(), doneN = T.filter((x) => x.done).length, xpT = (g.days || {})[t] || 0, goal = g.goal || 20, ck = g.ck === t;
    const main = langsOf()[0];
    const tiles = [tile(has ? '#/lop/' + l : '#/hoc', '📚', '149 MÔN', has ? 'Lớp ' + l : 'Học theo lớp', 'Bài học SGK lớp 1–12', '#E3ECFF'), tile(PLT.APP.modePath('on-tap', l), '🎯', 'KHÔNG GIỚI HẠN', 'Ôn tập', 'Câu hỏi ngẫu nhiên', '#FFE4E4'), tile(PLT.APP.modePath('kiem-tra', l), '📝', 'ĐỀ CÓ GIỜ', 'Kiểm tra', 'Tuần, tháng, học kỳ', '#FFF0C9')]
      .concat(ORDER.map((k) => tile(cHref(k, myLv(k)), L[k].icon, `CẤP ${myLv(k)} · ${L[k].lv[myLv(k) - 1]}`, L[k].ten, '30 ngày mỗi cấp, có hội thoại', L[k].bg)))
      .concat([tile('ai/', '🤖', '76 BUỔI', 'AI Edu', 'Dùng AI an toàn, học Claude', '#E7F6E9'), tile('#/lo-trinh-hoc', '🧭', 'THEO TRÌNH ĐỘ', 'Lộ trình', 'Kế hoạch riêng của em', '#D9F0EA')]).join('');
    app.innerHTML = `<div class="dsh">
      <section class="dh"><div class="dh-t"><h1>Chào ${esc(nm || 'em')}, học tiếp nhé.</h1>
        <div class="dh-row"><span class="dh-date"><small>Tháng ${dt.getMonth() + 1}</small><b>${dt.getDate()}</b> ${['Chủ nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'][dt.getDay()]}</span>
        <span class="dh-st">🔥 <b>${streak()}</b> ngày liền</span><div class="dh-wk">${wk.cells}</div><span class="dh-n">Tuần này<b>${wk.n}/7 ngày</b></span>
        <button type="button" class="btn${ck ? ' ghost' : ''}" id="dCk" ${ck ? 'disabled' : ''}>${ck ? '✓ Đã điểm danh' : '🔥 Điểm danh +5 XP'}</button></div></div></section>
      <div class="d-h2"><h2>Hôm nay học gì?</h2><span>— Mỗi ngày một chút, đều đặn là được.</span></div>
      <div class="dtiles">${tiles}</div>
      <div class="dgrid">
        <section class="dcard dplan"><div class="dc-h"><h2>📋 Kế hoạch hôm nay</h2><span class="ring"><b>${doneN}/${T.length}</b><small>việc</small></span></div>
          ${T.map((x, i) => `<a class="dtask${x.done ? ' ok' : ''}${!x.done && T.findIndex((y) => !y.done) === i ? ' nx' : ''}" href="${x.href}"><i>${x.done ? '✓' : x.icon}</i><span><small>${esc(x.cat)}</small><b data-dt="${x.k ? x.k + '|' + x.n + '|' + x.d : ''}">${esc(x.t)}</b></span>${!x.done && T.findIndex((y) => !y.done) === i ? '<em class="nxb">Tiếp theo</em>' : `<em>~${x.mins} phút</em>`}</a>`).join('') || '<p class="muted">Chưa có việc nào. <a href="#/lo-trinh">Xác định trình độ</a> để có kế hoạch.</p>'}
          <div class="dbar"><span>Hôm nay <b>${xpT}/${goal} XP</b></span><div class="zh-qbar"><i style="width:${Math.min(100, Math.round((xpT / goal) * 100))}%"></i></div><a href="#/lo-trinh" title="Đổi thời gian mỗi ngày">✎ ${p.mins || 20} phút/ngày</a></div></section>
        <section class="dcard dpath">${main ? pathMini(main) : `<div class="dc-h"><h2>🧭 Lộ trình</h2></div><p class="muted">Lộ trình hiện chỉ gồm chương trình lớp và AI Edu.</p>${(p.items || []).map((x) => `<a class="dtask" href="${x.href}"><i>${x.icon}</i><span><b>${esc(x.t)}</b><small>${esc(x.d)}</small></span></a>`).join('')}`}</section>
      </div>
      <p class="center small"><a href="#/khoa-hoc">🗂️ Xem tất cả khoá học</a> · <a href="#/lo-trinh">↻ Làm lại bài xác định trình độ</a></p></div>`;
    const ckb = $('#dCk'); if (ckb) ckb.onclick = async () => { ckb.disabled = true; if (await PLT.APP.langLoad()) { PLT.LANG.addXP(5, 'Điểm danh hôm nay', true); const g2 = PLT.data.gam; g2.ck = today(); PLT.save(); } home(app); side(); };
    fillTitles(app);
  }
  function pathMini(k) {
    const n = myLv(k), pr = prog(k, n), e = estimate(k), S = stagesOf(null);
    return `<div class="dc-h"><h2>🧭 Lộ trình ${L[k].ten}</h2><a href="#/lo-trinh-hoc/${k}">Mở →</a></div>
      <div class="dp-big"><b>${pr.pct}%</b><span>chặng đường hoàn thành ${L[k].lv[n - 1]}</span></div><div class="zh-qbar"><i style="width:${pr.pct}%"></i></div>
      <div class="dp-st"><span><small>Bài đã học</small><b>${pr.done}/30</b></span><span><small>Đích đến</small><b>${L[k].lv[e.tg - 1]} · ~${e.months} tháng</b></span></div>
      <div class="dp-stg" data-stg="${k}|${n}">${S.map((s, i) => { const c = Array.from({ length: s.den - s.tu + 1 }, (_, j) => s.tu + j).filter((d) => dayDone(k, n, d)).length, on = pr.next >= s.tu && pr.next <= s.den; return `<a class="stg${on ? ' on' : ''}" href="#/lo-trinh-hoc/${k}/${n}/${i + 1}"><small>Giai đoạn ${i + 1}</small><b>${esc(s.ten)}</b><em>${c}/${s.den - s.tu + 1}</em></a>`; }).join('')}</div>
      <a class="btn ghost dp-up" href="${cHref(k, n)}/ngay/30">🎓 Kiểm tra lên cấp</a>`;
  }
  async function fillTitles(root) {
    const need = {}; root.querySelectorAll('[data-dt]').forEach((b) => { if (b.dataset.dt) { const [k, n] = b.dataset.dt.split('|'); need[k + '|' + n] = 1; } });
    const st = root.querySelector('[data-stg]'); if (st) need[st.dataset.stg] = 1;
    for (const kn of Object.keys(need)) {
      const [k, n] = kn.split('|'), D = await course(k, +n); if (!D || !document.body.contains(root)) continue;
      root.querySelectorAll(`[data-dt^="${k}|${n}|"]`).forEach((b) => { const d = +b.dataset.dt.split('|')[2]; b.textContent = `Ngày ${d} · ${dayTitle(D, d)}`; });
      if (st && st.dataset.stg === kn) st.querySelectorAll('.stg b').forEach((b, i) => { const s = stagesOf(D)[i]; if (s) b.textContent = s.ten.replace(/^[^\wÀ-ỹ]+\s*/u, ''); });
    }
  }

  /* ---------- Trang Lộ trình học tập ---------- */
  async function path(app, P) {
    const p = plan(); if (!p || !p.items) { location.hash = '#/lo-trinh'; return; }
    const ks = langsOf();
    if (!ks.length) { app.innerHTML = `<div class="dsh"><section class="dh"><h1>🧭 Lộ trình học tập</h1></section><section class="dcard">${(p.items || []).map((x) => `<a class="dtask" href="${x.href}"><i>${x.icon}</i><span><b>${esc(x.t)}</b><small>${esc(x.d)}</small></span><em>→</em></a>`).join('')}<p class="small"><a href="#/lo-trinh">↻ Làm lại bài xác định trình độ</a></p></section></div>`; return; }
    const k = L[P[1]] && ks.includes(P[1]) ? P[1] : ks[0], cur = myLv(k), n = Math.min(5, Math.max(1, +P[2] || cur));
    app.innerHTML = '<p class="muted">Đang tải lộ trình…</p>';
    const D = await course(k, n), pr = prog(k, n), S = stagesOf(D), e = estimate(k), tg = e.tg;
    const si = Math.min(S.length, Math.max(1, +P[3] || (S.findIndex((s) => pr.next >= s.tu && pr.next <= s.den) + 1) || 1)), s = S[si - 1];
    const days = Array.from({ length: s.den - s.tu + 1 }, (_, j) => s.tu + j);
    app.innerHTML = `<div class="dsh">
      <section class="dh dh-path"><div><h1>🧭 Lộ trình học tập</h1><div class="dh-tags"><span>🎯 Theo đúng trình độ</span><span>📅 Bài học mỗi ngày</span><span>🎓 Kiểm tra lên cấp</span></div></div>
        <a class="btn" href="${cHref(k, n)}/ngay/${pr.next}">Học tiếp: Ngày ${pr.next} →</a></section>
      ${ks.length > 1 ? `<div class="lp-tabs">${ks.map((x) => `<a class="${x === k ? 'on' : ''}" href="#/lo-trinh-hoc/${x}">${L[x].icon} ${L[x].ten}</a>`).join('')}</div>` : ''}
      <div class="lp-grid">
        <div>
          <section class="dcard lp-top"><div class="lp-lv">${L[k].lv.map((t, i) => `<a class="${i + 1 === n ? 'on' : ''}${i + 1 < cur ? ' ok' : ''}${i + 1 === tg ? ' tg' : ''}" href="#/lo-trinh-hoc/${k}/${i + 1}" title="${L[k].name[i]}">${t}${i + 1 < cur ? ' ✓' : ''}</a>`).join('')}</div>
            <div class="lp-row"><div><div class="dp-big"><b>${pr.pct}%</b><span>chặng đường hoàn thành ${L[k].lv[n - 1]}</span></div><div class="zh-qbar"><i style="width:${pr.pct}%"></i></div></div>
              <div class="lp-st"><span><small>Bài đã học</small><b>${pr.done}/30</b></span><span><small>Đích đến</small><b>${L[k].lv[tg - 1]}</b></span>
                <div class="lp-mins">⏱️ <b>${p.mins || 20} phút mỗi ngày</b><small>Khoảng ${e.weeks} tuần để xong ${L[k].lv[cur - 1]}. Đích ${L[k].lv[tg - 1]}: khoảng ${e.months} tháng.</small><a href="#/lo-trinh">Sửa</a></div>
                <a class="lp-test" href="${cHref(k, n)}/ngay/30">🎓 Bài kiểm tra lên cấp<em>Làm bài →</em></a></div></div></section>
          <section class="dcard"><div class="dc-h"><div><small class="muted">Giai đoạn ${si}/${S.length}</small><h2>${esc(s.ten)}</h2></div><span class="ring"><b>${days.filter((d) => dayDone(k, n, d)).length}/${days.length}</b><small>bài</small></span></div>
            <div class="lp-days">${days.map((d) => { const ok = dayDone(k, n, d), nx = d === pr.next; return `<a class="dtask${ok ? ' ok' : ''}${nx ? ' nx' : ''}" href="${cHref(k, n)}/ngay/${d}"><i>${ok ? '✓' : d}</i><span><small>Ngày ${d}</small><b>${esc(dayTitle(D, d))}</b></span>${nx ? '<em class="nxb">Tiếp theo</em>' : ''}</a>`; }).join('')}</div></section>
        </div>
        <section class="dcard lp-toc"><div class="dc-h"><h2>📑 Mục lục ${L[k].lv[n - 1]}</h2><small class="muted">${pr.done}/30 bài</small></div>
          ${S.map((x, i) => { const c = Array.from({ length: x.den - x.tu + 1 }, (_, j) => x.tu + j).filter((d) => dayDone(k, n, d)).length; return `<a class="stg${i + 1 === si ? ' on' : ''}" href="#/lo-trinh-hoc/${k}/${n}/${i + 1}"><small>Giai đoạn ${i + 1} · Ngày ${x.tu}–${x.den}</small><b>${esc(x.ten)}</b><em>${c}/${x.den - x.tu + 1}</em></a>`; }).join('')}
          ${n > 1 && n === cur ? `<a class="lp-skip" href="${cHref(k, n - 1)}/ngay/30">📝 Kiểm tra lại cấp ${L[k].lv[n - 2]}<small>Ôn để chắc nền trước khi học tiếp</small></a>` : ''}</section>
      </div></div>`;
  }

  /* ---------- Bảng xếp hạng XP tháng ---------- */
  async function board(app) {
    const A = window.PLT_ACC, u = A && A.user && A.user(), p = plan() || {}, child = p.role === 'hs' && p.lop && p.lop <= 7;
    const now = new Date(), end = new Date(now.getFullYear(), now.getMonth() + 1, 1), left = Math.ceil((end - now) / 864e5);
    const head = `<section class="dh"><div class="dc-h"><div><h1>🏅 Xếp hạng XP tháng ${now.getMonth() + 1}</h1><span class="muted">Kết thúc sau ${left} ngày · tính XP học trong tháng</span></div></div></section>`;
    if (!u) { app.innerHTML = `<div class="dsh">${head}<section class="dcard" style="margin-top:14px"><p>Đăng nhập để xem bảng xếp hạng và thi đua cùng các bạn.</p><button type="button" class="btn" id="bLogin">👤 Đăng nhập</button></section></div>`; $('#bLogin').onclick = () => A && A.open(); return; }
    const me = `<section class="dcard bd-me"><div><b>Hiện tên em trên bảng xếp hạng</b><small>${child ? 'Học sinh lớp 1–7 không hiện tên công khai để giữ an toàn.' : 'Chỉ hiện tên gọi và XP tháng, không hiện email, ảnh. Tắt bất cứ lúc nào.'}</small></div>
      <button type="button" class="ob-sw${p.board && !child ? ' on' : ''}" id="bSw" ${child || !p.items ? 'disabled' : ''} aria-label="Bật tắt hiện tên"><i></i></button>${!p.items ? '<a class="small" href="#/lo-trinh">Xác định trình độ trước</a>' : ''}</section>`;
    app.innerHTML = `<div class="dsh">${head}${me}<section class="dcard" id="bList"><p class="muted">Đang tải bảng xếp hạng…</p></section></div>`;
    const sw = $('#bSw'); if (sw) sw.onclick = async () => { p.board = !p.board; PLT.data.plan = p; PLT.save(); sw.classList.toggle('on', !!p.board); await A.boardSync(); board(app); };
    let db = A.db(); for (let i = 0; !db && i < 20; i++) { await new Promise((r) => setTimeout(r, 300)); db = A.db(); }
    const box = $('#bList'); if (!db || !box) { if (box) box.innerHTML = '<p class="muted">Chưa kết nối được dịch vụ. Thử tải lại trang.</p>'; return; }
    try {
      await A.boardSync();
      const q = await db.collection('boards').doc(A.month()).collection('users').orderBy('xp', 'desc').limit(50).get();
      const R = q.docs.map((d) => Object.assign({ id: d.id }, d.data())).filter((x) => x.xp > 0);
      if (!document.body.contains(box)) return;
      if (!R.length) { box.innerHTML = '<p class="muted">Tháng này chưa có ai trên bảng. Bật hiện tên và học vài bài để đứng đầu nhé!</p>'; return; }
      const ini = (n) => esc(String(n || '?').trim().charAt(0).toUpperCase());
      const pod = [R[1], R[0], R[2]].map((x, i) => x ? `<div class="pd p${[2, 1, 3][i]}${x.id === u.uid ? ' me' : ''}"><i>${ini(x.name)}</i><b>${esc(x.name)}</b><span>${x.xp} XP</span><div class="pdb">${[2, 1, 3][i]}</div></div>` : '<div class="pd"></div>').join('');
      box.innerHTML = `<div class="pod">${pod}</div>${R.slice(3).map((x, i) => `<div class="bd-row${x.id === u.uid ? ' me' : ''}"><em>${i + 4}</em><i>${ini(x.name)}</i><b>${esc(x.name)}</b><span>${x.xp} XP</span></div>`).join('')}
        ${R.some((x) => x.id === u.uid) ? '' : `<p class="small muted">${p.board && !child ? 'Em chưa có XP tháng này hoặc chưa vào top 50.' : 'Em đang ẩn tên. Bật công tắc phía trên để tham gia.'}</p>`}`;
    } catch (e) {
      if (box) box.innerHTML = `<p class="muted">Chưa đọc được bảng xếp hạng${e && e.code === 'permission-denied' ? ': quản trị cần cập nhật quy tắc Firestore cho mục boards.' : '.'}</p>`;
    }
  }

  PLT.DASH = { side, home, path, board };
  window.addEventListener('plt-login', () => setTimeout(side, 50));

  const css = document.createElement('style');
  css.textContent = `
.sbar{display:none}
@media (min-width:1100px){
  body.has-sbar{padding-left:206px;transition:padding .2s}body.has-sbar.sb-mini{padding-left:76px}
  .sbar{display:flex;flex-direction:column;position:fixed;left:8px;top:8px;bottom:8px;width:188px;background:#F6EFE3;border-radius:18px;padding:10px 8px;z-index:40;box-shadow:0 8px 20px rgba(27,42,74,.1);overflow:hidden;transition:width .2s}
  body.sb-mini .sbar{width:58px}
  body.has-sbar header.top .logo,body.has-sbar header.top .nav{display:none}
  body.has-sbar header.top{background:transparent;box-shadow:none;border:0;position:static}
  body.has-sbar header.top .in{justify-content:flex-end;padding:10px 16px 12px;gap:8px;min-height:0}
  body.has-sbar header.top .lopsel,body.has-sbar .acc-b{font-size:.85rem}
  body.has-sbar main{padding-top:6px}
  body.has-sbar .dsh{margin-top:4px}
  body.has-sbar .lopbox{display:none}
}
.sb-top{display:flex;align-items:center;gap:4px;padding:0 2px 8px}
.sb-logo{display:flex;align-items:center;gap:8px;text-decoration:none;color:#1B2A4A;font-weight:800;font-size:1rem;flex:1;min-width:0}
.sb-logo img{width:32px;height:32px;border-radius:50%;flex:none}.sb-logo small{display:block;font-size:.62rem;color:#55607A;font-weight:600;white-space:nowrap}
.sb-mb{border:0;background:#fff;border-radius:8px;width:24px;height:24px;cursor:pointer;color:#55607A;font-weight:800;flex:none}
.sb-nav{display:flex;flex-direction:column;gap:1px;flex:1;min-height:0;overflow:auto;scrollbar-width:thin}
.si{display:flex;align-items:center;gap:8px;width:100%;padding:3px 6px;border-radius:10px;color:#1B2A4A;text-decoration:none;font:inherit;font-weight:600;font-size:.86rem;border:2px solid transparent;background:none;cursor:pointer;text-align:left}
.si i{width:24px;height:24px;border-radius:7px;display:grid;place-items:center;font-style:normal;font-size:.85rem;flex:none}
.si span{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.si:hover{background:rgba(255,255,255,.7)}.si.on{background:#fff;border-color:#D9661F;font-weight:800}
.sg-h b{font-size:.7rem;color:#8a93a6;transition:transform .2s}.sg.open .sg-h b{transform:rotate(180deg)}.sg.act>.sg-h{font-weight:800}
.sg-b{display:none;padding:2px 0 4px 18px;margin-left:12px;border-left:2px solid #E8DCC6}.sg.open .sg-b{display:block}
.sc{display:block;padding:3px 8px;border-radius:8px;color:#1B2A4A;text-decoration:none;font-size:.82rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.sc:hover{background:rgba(255,255,255,.7)}.sc.on{background:#fff;font-weight:800;color:#D9661F}.sc em{font-style:normal;font-size:.68rem;font-weight:800;background:#fff;border-radius:6px;padding:0 5px;margin-left:2px;color:#55607A}
.sc-lop{display:grid;grid-template-columns:repeat(4,1fr);gap:4px;padding:2px 4px 2px 0}.sc-lop a{text-align:center;padding:3px 0;border-radius:7px;background:#fff;color:#1B2A4A;text-decoration:none;font-weight:700;font-size:.8rem;border:2px solid transparent}
.sc-lop a:hover{border-color:#E8DCC6}.sc-lop a.my{border-color:#F4A261}.sc-lop a.on{background:#D9661F;color:#fff;border-color:#D9661F}
.sb-me{background:#fff;border-radius:12px;padding:7px;margin-top:6px;flex:none}
.sb-u{display:flex;align-items:center;gap:6px}.sb-u>i{width:28px;height:28px;border-radius:50%;background:#1B2A4A;color:#F4A261;display:grid;place-items:center;font-style:normal;font-weight:800;font-size:.85rem;overflow:hidden;flex:none}.sb-u>i img{width:100%;height:100%}
.sb-u div{flex:1;min-width:0}.sb-u b{display:block;font-size:.8rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.sb-u small{display:block;font-size:.68rem;color:#55607A;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.sb-u button{border:0;background:#F3EFE6;border-radius:7px;width:24px;height:24px;cursor:pointer;font-size:.75rem;flex:none}
.sb-st{display:flex;gap:6px;margin-top:6px;font-size:.75rem}.sb-st span{flex:1;background:#FAF7F0;border-radius:8px;padding:3px 6px;text-align:center;white-space:nowrap}.sb-st b{color:#D9661F}
body.sb-mini .sbar .sg .sg-b{display:none!important}
body.sb-mini .sbar .sb-logo span,body.sb-mini .si span,body.sb-mini .sg-h b,body.sb-mini .sb-u div,body.sb-mini .sb-u button,body.sb-mini .sb-st{display:none}
body.sb-mini .sb-top{flex-direction:column}body.sb-mini .sb-mb{transform:rotate(180deg)}body.sb-mini .si{justify-content:center;padding:4px 0}body.sb-mini .sb-me{padding:6px 0;background:none}body.sb-mini .sb-u{justify-content:center}
.dsh{max-width:1320px;margin:0 auto}
.dh{background:linear-gradient(135deg,#FFF8EE,#F6EBDD);border-radius:18px;padding:12px 16px;box-shadow:0 8px 22px rgba(27,42,74,.08);border:1px solid #EFE3CF}
.dh h1{margin:0 0 8px;font-size:1.3rem}
.dh-row{display:flex;flex-wrap:wrap;align-items:center;gap:8px 14px;background:#fff;border-radius:14px;padding:6px 10px}
.dh-date{display:flex;flex-direction:column;align-items:center;line-height:1.1;font-size:.8rem;color:#55607A}.dh-date small{background:#FBD5C0;color:#B4461A;border-radius:6px;padding:0 6px;font-weight:700}.dh-date b{font-size:1.1rem;color:#1B2A4A}
.dh-st{font-size:.9rem}.dh-wk{display:flex;gap:12px}.wk{display:flex;flex-direction:column;align-items:center;gap:2px;font-size:.72rem;color:#55607A;font-weight:700}
.wk i{width:20px;height:20px;border-radius:50%;border:2px solid #C9CEDB;display:grid;place-items:center;font-style:normal;font-size:.7rem;color:#fff}
.wk.on i{background:#1f9d63;border-color:#1f9d63}.wk.now i{border-color:#D9661F;box-shadow:0 0 0 3px #FBE3CF}
.dh-n{font-size:.78rem;color:#55607A;display:flex;flex-direction:column}.dh-n b{color:#1B2A4A}
.dh-row .btn{margin-left:auto;padding:6px 12px;font-size:.85rem}
.d-h2{display:flex;flex-wrap:wrap;align-items:baseline;gap:10px;margin:14px 0 8px}.d-h2 h2{margin:0;font-size:1.1rem}.d-h2 span{font-size:.85rem}.d-h2 span{color:#55607A;font-style:italic}
.dtiles{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px}
.dt{position:relative;display:flex;flex-direction:column;gap:4px;min-height:112px;padding:10px 12px;border-radius:14px;background:var(--bg);color:#1B2A4A;text-decoration:none;overflow:hidden;box-shadow:0 6px 16px rgba(27,42,74,.08);border:2px solid rgba(255,255,255,.7);background-image:radial-gradient(rgba(27,42,74,.06) 1px,transparent 1.2px);background-size:12px 12px;background-color:var(--bg)}
.dt:hover{transform:translateY(-2px);box-shadow:0 10px 22px rgba(27,42,74,.14)}
.dt em{align-self:flex-start;font-style:normal;font-size:.6rem;font-weight:800;letter-spacing:.06em;background:#fff;border-radius:8px;padding:3px 8px}
.dt b{font-size:.98rem;margin-top:2px}.dt span{font-size:.74rem;color:#55607A;max-width:62%;position:relative;z-index:1}
.dt i{position:absolute;right:-4px;bottom:-10px;font-size:2.8rem;font-style:normal;opacity:.95;filter:drop-shadow(0 6px 8px rgba(0,0,0,.15))}
.dgrid{display:grid;grid-template-columns:minmax(0,1.6fr) minmax(0,1fr);gap:12px;margin-top:12px;align-items:start}
@media (max-width:900px){.dgrid,.lp-grid{grid-template-columns:1fr!important}}
.dcard{background:#FFFDF8;border-radius:18px;padding:12px 14px;box-shadow:0 8px 22px rgba(27,42,74,.08);border:1px solid #EFE7D8}
.dplan{background:#F7EEDD}
.dc-h{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:10px}.dc-h h2{margin:0;font-size:1rem}
.ring{width:44px;height:44px;border-radius:50%;border:3px solid #8a6a2c;display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1;background:#fff}.ring b{font-size:.95rem}.ring small{font-size:.6rem;color:#55607A}
.dtask{display:flex;align-items:center;gap:10px;background:#fff;border:2px solid #EFE7D8;border-radius:12px;padding:5px 10px;margin:5px 0;color:#1B2A4A;text-decoration:none}
.dtask:hover{border-color:#D9661F}.dtask>i{width:28px;height:28px;border-radius:10px;background:#FAF2E6;display:grid;place-items:center;font-style:normal;flex:none;font-weight:800}
.dtask span{flex:1;min-width:0}.dtask small{display:block;font-size:.68rem;color:#8a93a6}.dtask b{display:block;font-size:.85rem}
.dtask em{font-style:normal;font-size:.78rem;color:#55607A;white-space:nowrap}
.dtask.nx{border-color:#8a6a2c}.nxb{background:#5b4318;color:#fff!important;border-radius:99px;padding:3px 10px;font-weight:800}
.dtask.ok{opacity:.65}.dtask.ok>i{background:#1f9d63;color:#fff}
.dbar{display:flex;align-items:center;gap:12px;margin-top:10px;font-size:.88rem}.dbar .zh-qbar{flex:1;margin:0}.dbar a{white-space:nowrap}
.dp-big{display:flex;align-items:baseline;gap:8px}.dp-big b{font-size:1.9rem;line-height:1}.dp-big span{color:#55607A;font-size:.9rem}
.dp-st,.lp-st{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:10px 0}.dp-st span,.lp-st>span{background:#fff;border:1px solid #EFE7D8;border-radius:12px;padding:8px 10px}.dp-st small,.lp-st small{display:block;font-size:.72rem;color:#8a93a6}
.dp-stg{display:flex;flex-direction:column;gap:6px}
.stg{display:grid;grid-template-columns:1fr auto;align-items:center;background:#fff;border:1px solid #EFE7D8;border-radius:10px;padding:5px 10px;color:#1B2A4A;text-decoration:none}
.stg small{grid-column:1;font-size:.66rem;color:#8a93a6}.stg b{grid-column:1;font-size:.82rem}.stg em{grid-row:1/span 2;grid-column:2;font-style:normal;font-size:.78rem;font-weight:700}
.stg.on{background:#7a5a22;border-color:#7a5a22;color:#fff}.stg.on small{color:#f3e2c2}
.dp-up{display:block;text-align:center;margin-top:10px}
.dh-path{display:flex;align-items:center;justify-content:space-between;gap:12px;background:linear-gradient(135deg,#E6EEFA,#DCE8F7)}
.dh-tags{display:flex;flex-wrap:wrap;gap:6px}.dh-tags span{background:#fff;border-radius:99px;padding:4px 12px;font-size:.8rem;font-weight:700}
.lp-tabs{display:flex;gap:8px;margin:12px 0 0}.lp-tabs a{background:#fff;border:2px solid #E3DED1;border-radius:99px;padding:5px 14px;font-weight:700;color:#1B2A4A;text-decoration:none}.lp-tabs a.on{border-color:#1B2A4A}
.lp-grid{display:grid;grid-template-columns:minmax(0,1.7fr) minmax(0,1fr);gap:14px;margin-top:14px}
.lp-top{background:#DDF1E7}
.lp-lv{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px}.lp-lv a{border:2px solid #b9d8c8;border-radius:99px;padding:3px 12px;font-weight:800;font-size:.82rem;color:#1B2A4A;background:#fff;text-decoration:none}
.lp-lv a.on{border-color:#1B2A4A}.lp-lv a.ok{background:#E1EFEB}.lp-lv a.tg{box-shadow:0 0 0 2px #F4A261}
.lp-row{display:grid;grid-template-columns:1fr 1.2fr;gap:14px;align-items:start}@media (max-width:700px){.lp-row{grid-template-columns:1fr}}
.lp-mins{grid-column:1/-1;display:grid;grid-template-columns:1fr auto;gap:2px 8px;background:#fff;border:1px solid #EFE7D8;border-radius:12px;padding:8px 10px;font-size:.88rem}.lp-mins small{grid-column:1;color:#55607A}.lp-mins a{grid-row:1/span 2;grid-column:2;align-self:center}
.lp-test{grid-column:1/-1;display:flex;justify-content:space-between;align-items:center;background:#fff;border:1px solid #EFE7D8;border-radius:12px;padding:8px 12px;color:#1B2A4A;font-weight:700;text-decoration:none}.lp-test em{font-style:normal;border:2px solid #1B2A4A;border-radius:99px;padding:2px 12px;font-size:.82rem}
.lp-days{display:grid;grid-template-columns:1fr 1fr;gap:0 10px}@media (max-width:700px){.lp-days{grid-template-columns:1fr}}
.lp-toc{background:#F3E8D4}.lp-toc .stg{margin:6px 0}
.bd-me{display:flex;align-items:center;gap:14px;margin-top:14px}.bd-me div{flex:1}.bd-me small{display:block;color:#55607A}
#bList{margin-top:14px;background:#FCE7E2}
.pod{display:grid;grid-template-columns:1fr 1.2fr 1fr;align-items:end;gap:12px;margin-bottom:12px}
.pd{display:flex;flex-direction:column;align-items:center;gap:2px;text-align:center}.pd i{width:64px;height:64px;border-radius:50%;background:#fff;border:3px solid #F4A261;display:grid;place-items:center;font-style:normal;font-size:1.6rem;font-weight:900}
.pd.p1 i{width:80px;height:80px;border-color:#F2C94C}.pd span{font-weight:900;font-size:1.1rem}
.pdb{width:100%;background:#F4A69A;border-radius:16px 16px 6px 6px;font-size:1.8rem;font-weight:900;color:#7a2d22;margin-top:6px;padding:8px 0}.pd.p1 .pdb{padding:22px 0}.pd.p3 .pdb{padding:4px 0}
.pd.me i,.bd-row.me{box-shadow:0 0 0 3px #1B2A4A}
.bd-row{display:flex;align-items:center;gap:12px;background:#fff;border-radius:12px;padding:8px 14px;margin:6px 0}.bd-row em{font-style:normal;font-weight:800;width:24px}.bd-row i{width:32px;height:32px;border-radius:50%;background:#FAF2E6;display:grid;place-items:center;font-style:normal;font-weight:800}.bd-row b{flex:1}.bd-row span{font-weight:800}
.lp-skip{display:block;margin-top:12px;background:#fff;border-radius:12px;padding:8px 12px;color:#1B2A4A;font-weight:700;text-decoration:none}.lp-skip small{display:block;font-weight:500;color:#55607A}
`;
  document.head.appendChild(css);
})();

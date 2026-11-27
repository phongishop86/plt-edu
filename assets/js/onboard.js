/* PLT-Edu · Xác định trình độ & lộ trình học (route #/lo-trinh).
   Tự mở khi người dùng đăng nhập lần đầu mà chưa có lộ trình; làm lại được bất cứ lúc nào.
   Kết quả lưu PLT.data.plan (đồng bộ theo tài khoản cùng tiến độ). */
(function () {
  'use strict';
  const $ = (s, r) => (r || document).querySelector(s);
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const LANG = {
    en: { ten: 'Tiếng Anh', icon: '🇬🇧', route: 'tieng-anh', cert: ['IELTS', 'TOEIC', 'Cambridge', 'Chưa rõ / chỉ muốn học'],
      lv: [['Người mới, gần như chưa biết gì', 'A1'], ['Biết một số từ và câu đơn giản', 'A2'], ['Giao tiếp, trò chuyện cơ bản', 'B1'], ['Khá tự tin, hiểu nội dung phức tạp', 'B2'], ['Thành thạo, trôi chảy, linh hoạt', 'C1']],
      q: [['I ___ a student.', ['am', 'is', 'are'], 0], ['Yesterday we ___ to the beach.', ['went', 'go', 'goes'], 0], ['If it rains tomorrow, we ___ at home.', ['will stay', 'stayed', 'would stayed'], 0], ['She suggested ___ the meeting until Friday.', ['postponing', 'to postpone', 'postpone'], 0], ['Hardly ___ the room when the phone rang.', ['had I entered', 'I had entered', 'did I entered'], 0]] },
    zh: { ten: 'Tiếng Trung', icon: '🇨🇳', route: 'tieng-trung', cert: ['HSK', 'HSKK', 'Chưa rõ / chỉ muốn học'],
      lv: [['Người mới, chưa biết chữ nào', 'HSK 1–2'], ['Giao tiếp đơn giản hằng ngày', 'HSK 3'], ['Đọc hiểu đoạn văn, nói chủ đề quen', 'HSK 4'], ['Đọc báo, làm việc bằng tiếng Trung', 'HSK 5–6'], ['Rất thành thạo, học thuật', 'HSK 7–9']],
      q: [['谢谢 nghĩa là gì?', ['Cảm ơn', 'Xin lỗi', 'Tạm biệt'], 0], ['请___门关上。(Hãy đóng cửa lại)', ['把', '被', '给'], 0], ['他不但会说汉语，___会说日语。', ['而且', '但是', '所以'], 0], ['这件事___他来说并不难。', ['对', '给', '向'], 0], ['他做事一向___，从不拖泥带水。', ['雷厉风行', '半途而废', '画蛇添足'], 0]] },
    ko: { ten: 'Tiếng Hàn', icon: '🇰🇷', route: 'tieng-han', cert: ['TOPIK', 'EPS-TOPIK (XKLĐ)', 'Chưa rõ / chỉ muốn học'],
      lv: [['Người mới, chưa biết bảng chữ', 'TOPIK 1'], ['Giao tiếp sinh hoạt đơn giản', 'TOPIK 2'], ['Giao tiếp tốt, đọc văn bản ngắn', 'TOPIK 3'], ['Làm việc trong môi trường Hàn', 'TOPIK 4'], ['Học thuật, biên – phiên dịch', 'TOPIK 5–6']],
      q: [['감사합니다 nghĩa là gì?', ['Cảm ơn', 'Xin chào', 'Xin lỗi'], 0], ['어제 친구를 ___. (Hôm qua đã gặp bạn)', ['만났어요', '만나요', '만날 거예요'], 0], ['비가 오___ 우산을 가져가세요.', ['니까', '지만', '는데도'], 0], ['늦잠을 자는 ___ 지각했어요.', ['바람에', '덕분에', '대신에'], 0], ['굶을___ 남의 것은 훔치지 않겠다.', ['지언정', '거니와', '나머지'], 0]] }
  };
  const AI_LV = [['Chưa dùng AI bao giờ', 0], ['Thỉnh thoảng hỏi đáp với chatbot', 1], ['Dùng AI hằng ngày cho học tập, công việc', 5], ['Đã tự động hoá, kết nối dịch vụ hoặc lập trình với AI', 9]];
  const GOALS = [['lop', '📚', 'Học theo chương trình lớp'], ['thi', '🎓', 'Luyện thi chuyển cấp, tốt nghiệp'], ['nc', '⭐', 'Bồi dưỡng nâng cao'], ['en', '🇬🇧', 'Tiếng Anh'], ['zh', '🇨🇳', 'Tiếng Trung'], ['ko', '🇰🇷', 'Tiếng Hàn'], ['ai', '🤖', 'Dùng AI, học Claude']];
  const MINS = [[10, 'Nhẹ nhàng', 10], [20, 'Đều đặn', 20], [30, 'Nghiêm túc', 30], [45, 'Tăng tốc', 50]];
  const STEPS = ['Bạn là ai', 'Mục tiêu', 'Trình độ', 'Mỗi ngày', 'Quyền riêng tư', 'Sẵn sàng'];

  let st = null;
  const fresh = () => {
    const p = PLT.data.plan || {}, u = window.PLT_ACC && PLT_ACC.user && PLT_ACC.user();
    return { step: 0, name: PLT.data.settings.name || (u && u.displayName) || '', role: p.role || '', lop: p.lop || +PLT.data.settings.lop || 0, goals: (p.goals || []).slice(), cert: Object.assign({}, p.cert), self: Object.assign({}, p.self), quiz: {}, ai: p.ai == null ? -1 : p.ai, mins: p.mins || 20, consent: !!p.consent, parent: !!p.parent };
  };
  const langs = () => st.goals.filter((g) => LANG[g]);
  const child = () => st.role === 'hs' && st.lop && st.lop <= 7;

  /* ---------- Kết quả: cấp đề xuất cho từng ngôn ngữ ---------- */
  function rec(k) {
    const s = st.self[k] || 1, q = st.quiz[k];
    if (!q || q.ans.length < LANG[k].q.length) return { lv: s, why: 'Theo em tự đánh giá' };
    let ok = 0; while (ok < q.ans.length && q.ans[ok] === LANG[k].q[ok][2]) ok++;
    const t = Math.max(1, Math.min(5, ok + 1 > 5 ? 5 : ok + 1));
    const lv = ok >= 5 ? Math.max(s, 5) : t;
    return { lv, why: `Bài kiểm tra nhanh: đúng liên tiếp ${ok}/5 câu${lv !== s ? ` (em tự đánh giá cấp ${s})` : ''}` };
  }
  function aiPath() {
    const a = st.ai < 0 ? 0 : st.ai;
    if (st.role === 'hs' && st.lop) {
      const lv = st.lop <= 5 ? ['tieu-hoc', 'AI Edu Tiểu học'] : st.lop <= 9 ? ['thcs', 'AI Edu THCS'] : ['thpt', 'AI Edu THPT'];
      return [{ icon: '🤖', t: lv[1], d: 'Hiểu AI và dùng AI an toàn đúng lứa tuổi · 12–16 buổi', href: `ai/${lv[0]}/` }];
    }
    const out = [];
    if (a === 0) out.push({ icon: '🤖', t: 'AI Edu · Người đi làm', d: 'Làm quen AI cho email, Excel, báo cáo · 16 buổi', href: 'ai/di-lam/' });
    out.push({ icon: '✨', t: 'Học Claude từ cơ bản đến nâng cao', d: a >= 9 ? 'Em đã quen tự động hoá: bắt đầu từ Buổi 9 (Skills, kết nối, Claude Code)' : a >= 5 ? 'Bắt đầu từ Buổi 5 (Artifact, tài liệu, ảnh và video bằng code)' : 'Bắt đầu từ Buổi 1, mỗi buổi 1 video ngắn + thực hành', href: 'ai/claude/' });
    return out;
  }
  function roadmap() {
    const R = [];
    if (st.role === 'hs' && st.lop) {
      if (st.goals.includes('lop')) R.push({ icon: '📚', t: `Lớp ${st.lop}: học bài và ôn tập`, d: 'Mỗi ngày học 1 bài theo SGK, cuối tuần làm đề kiểm tra tuần', href: `#/lop/${st.lop}` });
      if (st.goals.includes('thi')) R.push({ icon: '🎓', t: [5, 9, 12].includes(st.lop) ? `Luyện thi chuyển cấp lớp ${st.lop}` : 'Thi chuyển cấp', d: [5, 9, 12].includes(st.lop) ? 'Năm nay em thi chuyển cấp: mỗi tuần 2 đề có giờ làm bài' : 'Làm quen dạng đề từ sớm, mỗi tháng 1 đề', href: '#/chuyen-cap' });
      if (st.goals.includes('nc')) R.push({ icon: '⭐', t: 'Nâng cao*', d: 'Mỗi tuần 2 buổi bài nâng cao theo SGK lớp mình', href: '#/nang-cao' });
    } else if (st.goals.some((g) => ['lop', 'thi', 'nc'].includes(g))) {
      R.push({ icon: '📚', t: 'Chương trình lớp 1–12', d: 'Chọn lớp của con/học sinh ở đầu trang để xem bài học, đề kiểm tra', href: '#/hoc' });
    }
    langs().forEach((k) => {
      const L = LANG[k], r = rec(k), cert = st.cert[k];
      R.push({ icon: L.icon, t: `${L.ten} · Cấp ${r.lv} (${L.lv[r.lv - 1][1]})`, d: `${r.why}. Lộ trình 30 ngày${cert && !/Chưa rõ/.test(cert) ? ', hướng tới ' + cert : ''}.`, href: `#/${L.route}${r.lv > 1 ? '/c' + r.lv : ''}` });
    });
    if (st.goals.includes('ai')) R.push(...aiPath());
    return R;
  }
  function weekText(R) {
    const n = Math.max(1, R.length), m = st.mins;
    if (n === 1) return `Mỗi ngày ${m} phút cho mục trên. Chủ nhật ôn lại và làm bài kiểm tra.`;
    const per = Math.max(10, Math.round(m / Math.min(n, 2) / 5) * 5);
    return `Mỗi ngày ${m} phút: học xen kẽ ${Math.min(n, 2)} mục (khoảng ${per} phút/mục), đổi mục theo ngày. Chủ nhật ôn lại và làm bài kiểm tra.`;
  }

  /* ---------- Giao diện từng bước ---------- */
  const chip = (on, attr, txt) => `<button type="button" class="ob-chip${on ? ' on' : ''}" ${attr}>${txt}</button>`;
  const radio = (on, attr, txt, tag) => `<button type="button" class="ob-rad${on ? ' on' : ''}" ${attr}><i></i><span>${txt}</span>${tag ? `<em>${tag}</em>` : ''}</button>`;
  function body() {
    const s = st.step;
    if (s === 0) return `<h2>👋 Chào em! Em là ai?</h2>
      <label class="ob-lb">Tên gọi<input class="inp" id="obName" value="${esc(st.name)}" placeholder="Ví dụ: Minh Anh" maxlength="40"></label>
      <div class="ob-lb">Em đang là</div><div class="ob-grid2">${[['hs', '🎒 Học sinh'], ['dl', '💼 Người đi làm'], ['ph', '👨‍👩‍👧 Phụ huynh / Giáo viên']].map(([k, t]) => radio(st.role === k, `data-role="${k}"`, t)).join('')}</div>
      ${st.role === 'hs' ? `<div class="ob-lb">Em học lớp mấy?</div><div class="ob-lops">${Array.from({ length: 12 }, (_, i) => chip(st.lop === i + 1, `data-lop="${i + 1}"`, 'Lớp ' + (i + 1))).join('')}</div>` : ''}`;
    if (s === 1) return `<h2>🎯 Em muốn học gì?</h2><p class="muted">Chọn một hoặc nhiều mục.</p>
      <div class="ob-grid2">${GOALS.filter(([k]) => st.role === 'hs' || st.role === 'ph' || !['lop', 'thi', 'nc'].includes(k)).map(([k, i, t]) => radio(st.goals.includes(k), `data-goal="${k}"`, `${i} ${t}`)).join('')}</div>`;
    if (s === 2) {
      const L = langs(), parts = [];
      L.forEach((k) => {
        const D = LANG[k], q = st.quiz[k];
        parts.push(`<div class="ob-sec"><h3>${D.icon} ${D.ten}</h3>
          <div class="ob-row"><span class="ob-lb">Em quan tâm chứng chỉ nào?</span>${D.cert.map((c) => chip(st.cert[k] === c, `data-cert="${k}|${esc(c)}"`, c)).join('')}</div>
          <div class="ob-lb">Trình độ hiện tại của em?</div><div class="ob-grid2">${D.lv.map(([t, tag], i) => radio(st.self[k] === i + 1, `data-self="${k}|${i + 1}"`, t, tag)).join('')}</div>
          ${q && q.open ? quizHtml(k) : `<button type="button" class="btn ghost ob-qbtn" data-quiz="${k}">📝 Kiểm tra nhanh 5 câu để chắc hơn${q && q.ans.length === 5 ? ' (đã làm · làm lại)' : ''}</button>`}</div>`);
      });
      if (st.goals.includes('ai')) parts.push(`<div class="ob-sec"><h3>🤖 Kinh nghiệm dùng AI</h3><div class="ob-grid2">${AI_LV.map(([t, v]) => radio(st.ai === v, `data-ai="${v}"`, t)).join('')}</div></div>`);
      if (!parts.length) parts.push('<p class="muted">Các mục em chọn chưa cần xác định trình độ. Bấm Tiếp tục nhé.</p>');
      return `<h2>📊 Trình độ của em</h2>${parts.join('')}`;
    }
    if (s === 3) return `<h2>⏰ Mỗi ngày em học bao lâu?</h2><p class="muted">Học đều mỗi ngày quan trọng hơn học dồn. Có thể đổi sau.</p>
      <div class="ob-mins">${MINS.map(([m, t]) => `<button type="button" class="ob-min${st.mins === m ? ' on' : ''}" data-mins="${m}"><b>${m}</b><small>phút/ngày</small><span>${t}</span></button>`).join('')}</div>`;
    if (s === 4) return `<h2>🔒 Quyền riêng tư</h2>
      <ul class="ob-ul"><li>PLT-Edu chỉ lưu <b>tên gọi, lớp, lộ trình và tiến độ học</b> của em.</li><li>Khi đăng nhập, dữ liệu này được lưu vào tài khoản để học trên nhiều thiết bị; chưa đăng nhập thì chỉ lưu trên máy này.</li><li>Không bán, không chia sẻ dữ liệu cho bên khác. Em có thể xoá tiến độ khi đăng xuất.</li></ul>
      <label class="ob-ck"><input type="checkbox" id="obConsent" ${st.consent ? 'checked' : ''}> Em đồng ý để PLT-Edu lưu tiến độ học như trên.</label>
      ${child() ? `<label class="ob-ck"><input type="checkbox" id="obParent" ${st.parent ? 'checked' : ''}> Bố mẹ / người lớn đã biết và đồng ý cho em dùng tài khoản này.</label>` : ''}`;
    const R = roadmap();
    return `<h2>🚀 Lộ trình của ${esc(st.name || 'em')} đã sẵn sàng!</h2><p class="muted">${weekText(R)}</p>
      <div class="ob-plan">${R.map((r, i) => `<a class="ob-step" href="${r.href}"><span class="n">${i + 1}</span><span class="i">${r.icon}</span><span><b>${esc(r.t)}</b><small>${esc(r.d)}</small></span><em>→</em></a>`).join('') || '<p>Em chưa chọn mục tiêu nào, quay lại bước 2 nhé.</p>'}</div>
      <p class="small muted">Lộ trình được lưu lại; em xem lại ở trang chủ hoặc làm lại bài xác định trình độ bất cứ lúc nào.</p>`;
  }
  function quizHtml(k) {
    const D = LANG[k], q = st.quiz[k], i = q.ans.length;
    if (i >= D.q.length) { const r = rec(k); q.open = false; return `<div class="ob-quiz done">✅ Xong! Gợi ý: <b>Cấp ${r.lv} – ${D.lv[r.lv - 1][1]}</b>. ${r.why}.</div>`; }
    const [qt, op] = D.q[i], ord = op.map((o, j) => j).sort((a, b) => ((a + i) % 3) - ((b + i) % 3));
    return `<div class="ob-quiz"><div class="small muted">Câu ${i + 1}/5 · khó dần · không biết thì chọn “Chưa học”</div><b class="ob-qt">${esc(qt)}</b>
      <div class="ob-qo">${ord.map((j) => `<button type="button" class="btn ghost" data-qa="${k}|${j}">${esc(op[j])}</button>`).join('')}<button type="button" class="btn ghost" data-qa="${k}|-1">🤷 Chưa học</button></div></div>`;
  }
  function canNext() {
    const s = st.step;
    if (s === 0) return st.role && (st.role !== 'hs' || st.lop) ? '' : st.role ? 'Chọn lớp em đang học nhé.' : 'Chọn em là ai nhé.';
    if (s === 1) return st.goals.length ? '' : 'Chọn ít nhất 1 mục tiêu.';
    if (s === 2) { const m = langs().find((k) => !st.self[k]); if (m) return `Chọn trình độ ${LANG[m].ten} của em.`; if (st.goals.includes('ai') && st.ai < 0) return 'Chọn kinh nghiệm dùng AI.'; return ''; }
    if (s === 4) return !st.consent ? 'Tích vào ô đồng ý để tiếp tục.' : child() && !st.parent ? 'Nhờ bố mẹ xác nhận ô thứ hai nhé.' : '';
    return '';
  }
  function save() {
    const R = roadmap(), lv = {};
    langs().forEach((k) => (lv[k] = rec(k).lv));
    PLT.data.plan = { role: st.role, lop: st.lop || 0, goals: st.goals, cert: st.cert, self: st.self, lv, ai: st.ai, mins: st.mins, consent: st.consent, parent: st.parent, items: R, at: new Date().toISOString() };
    if (st.name) PLT.data.settings.name = st.name.slice(0, 40);
    if (st.role === 'hs' && st.lop) PLT.data.settings.lop = st.lop;
    const goal = (MINS.find((m) => m[0] === st.mins) || [0, 0, 20])[2];
    PLT.data.gam = Object.assign(PLT.data.gam || {}, { goal });
    PLT.save();
  }
  function draw() {
    const app = $('#app'); if (!app) return;
    app.innerHTML = `<div class="ob">
      <div class="ob-top"><div class="ob-hd"><img src="assets/img/logo-96.png" alt=""><b>Chào mừng em đến với PLT-Edu</b></div>
        <ol class="ob-steps">${STEPS.map((t, i) => `<li class="${i === st.step ? 'on' : i < st.step ? 'ok' : ''}"><b>${i < st.step ? '✓' : i + 1}</b><span>${t}</span></li>`).join('')}</ol></div>
      <div class="ob-card">${body()}</div>
      <div class="ob-foot">${st.step ? '<button type="button" class="btn ghost" id="obBack">← Quay lại</button>' : '<button type="button" class="btn ghost" id="obSkip">Để sau</button>'}<span class="ob-err" id="obErr"></span>
        ${st.step < 5 ? '<button type="button" class="btn" id="obNext">Tiếp tục →</button>' : '<a class="btn" id="obGo" href="#/">🏠 Về trang chủ</a>'}</div></div>`;
    window.scrollTo(0, 0);
  }
  function onClick(e) {
    const ob = e.target.closest('.ob'); if (!ob) return;
    const b = e.target.closest('button, a'); if (!b) return; const d = b.dataset;
    const nm = $('#obName'); if (nm) st.name = nm.value.trim();
    const cs = $('#obConsent'); if (cs) st.consent = cs.checked; const pr = $('#obParent'); if (pr) st.parent = pr.checked;
    if (d.role) { st.role = d.role; if (d.role !== 'hs') st.lop = 0; }
    else if (d.lop) st.lop = +d.lop;
    else if (d.goal) { const i = st.goals.indexOf(d.goal); if (i > -1) st.goals.splice(i, 1); else st.goals.push(d.goal); }
    else if (d.cert) { const [k, c] = d.cert.split('|'); st.cert[k] = c; }
    else if (d.self) { const [k, v] = d.self.split('|'); st.self[k] = +v; }
    else if (d.quiz) st.quiz[d.quiz] = { open: true, ans: [] };
    else if (d.qa) { const [k, v] = d.qa.split('|'); st.quiz[k].ans.push(+v); }
    else if (d.ai) st.ai = +d.ai;
    else if (d.mins) st.mins = +d.mins;
    else if (b.id === 'obBack') st.step--;
    else if (b.id === 'obSkip') { try { sessionStorage.setItem('plt-onb-skip', '1'); } catch (x) { /* bỏ qua */ } location.hash = '#/'; return; }
    else if (b.id === 'obNext') { const m = canNext(); if (m) { $('#obErr').textContent = m; return; } st.step++; if (st.step === 5) save(); }
    else return;
    draw();
  }
  document.addEventListener('click', onClick);
  document.addEventListener('change', (e) => { if (e.target.id === 'obConsent') st.consent = e.target.checked; if (e.target.id === 'obParent') st.parent = e.target.checked; });

  /* Thẻ lộ trình ở trang chủ */
  function card() {
    const p = PLT.data.plan;
    if (!p || !p.items) return `<div class="ob-mini"><b>🧭 Chưa có lộ trình riêng?</b><span>Trả lời vài câu, làm bài kiểm tra nhanh 5 câu: PLT-Edu đề xuất lộ trình hợp trình độ của em.</span><a class="btn" href="#/lo-trinh">Xác định trình độ (2 phút)</a></div>`;
    return `<div class="ob-mini on"><b>🧭 Lộ trình của em</b><span>${p.mins} phút/ngày · cập nhật ${new Date(p.at).toLocaleDateString('vi-VN')}</span>
      <div class="ob-plan sm">${p.items.slice(0, 4).map((r) => `<a class="ob-step" href="${r.href}"><span class="i">${r.icon}</span><span><b>${esc(r.t)}</b></span><em>→</em></a>`).join('')}</div><a class="small" href="#/lo-trinh">↻ Làm lại bài xác định trình độ</a></div>`;
  }
  PLT.ONB = { render() { st = fresh(); draw(); }, card, needed: () => !PLT.data.plan };

  /* Lần đầu đăng nhập mà chưa có lộ trình → mở trang xác định trình độ */
  window.addEventListener('plt-login', () => {
    let skip = false; try { skip = sessionStorage.getItem('plt-onb-skip'); } catch (x) { /* bỏ qua */ }
    if (!PLT.data.plan && !skip && !/^#\/lo-trinh/.test(location.hash)) location.hash = '#/lo-trinh';
  });

  const css = document.createElement('style');
  css.textContent = `
.ob{max-width:980px;margin:0 auto}
.ob-top{background:linear-gradient(135deg,#E6EEFA,#F6E7DA);border:2px solid #fff;border-radius:22px;padding:14px 18px;box-shadow:0 8px 22px rgba(27,42,74,.08)}
.ob-hd{display:flex;align-items:center;gap:10px;font-size:1.3rem;color:#1B2A4A}.ob-hd img{width:40px;height:40px;border-radius:50%}
.ob-steps{list-style:none;display:flex;flex-wrap:wrap;gap:8px;margin:12px 0 0;padding:0}
.ob-steps li{display:flex;align-items:center;gap:8px;background:#fff;border-radius:99px;padding:5px 12px 5px 5px;font-weight:700;color:#55607A;font-size:.92rem;border:2px solid transparent}
.ob-steps li b{width:26px;height:26px;border-radius:50%;background:#EEF1F6;display:grid;place-items:center;font-size:.85rem}
.ob-steps li.on{border-color:#1B2A4A;color:#1B2A4A}.ob-steps li.on b{background:#1B2A4A;color:#fff}.ob-steps li.ok b{background:#1f9d63;color:#fff}
.ob-card{background:#FFFDF8;border-radius:22px;padding:20px 22px;margin:14px 0;box-shadow:0 8px 22px rgba(27,42,74,.08);border:1px solid #EFE7D8}
.ob-card h2{margin:0 0 10px}.ob-card h3{margin:0 0 8px}
.ob-lb{display:block;font-weight:700;margin:14px 0 8px}.ob-lb .inp{display:block;margin-top:6px;max-width:360px}
.ob-grid2{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:10px}
.ob-rad{display:flex;align-items:center;gap:12px;text-align:left;font:inherit;font-weight:600;background:#fff;border:2px solid #E3DED1;border-radius:14px;padding:11px 14px;cursor:pointer;color:#1B2A4A}
.ob-rad i{width:20px;height:20px;border-radius:50%;border:2px solid #9aa3b5;flex:none}
.ob-rad em{margin-left:auto;font-style:normal;font-size:.8rem;font-weight:800;border:1px solid #E3DED1;border-radius:8px;padding:2px 8px;white-space:nowrap}
.ob-rad.on{background:#8a6a2c;border-color:#8a6a2c;color:#fff}.ob-rad.on i{border-color:#fff;box-shadow:inset 0 0 0 4px #8a6a2c;background:#fff}.ob-rad.on em{border-color:rgba(255,255,255,.5)}
.ob-chip{font:inherit;font-weight:700;background:#fff;border:2px solid #E3DED1;border-radius:12px;padding:7px 14px;cursor:pointer;color:#1B2A4A;margin:3px}
.ob-chip.on{background:#8a6a2c;border-color:#8a6a2c;color:#fff}
.ob-lops{display:flex;flex-wrap:wrap}
.ob-row{display:flex;flex-wrap:wrap;align-items:center;gap:4px}.ob-row .ob-lb{margin:0 8px 0 0}
.ob-sec{border-top:1px dashed #E3DED1;padding-top:14px;margin-top:14px}.ob-sec:first-of-type{border-top:0;margin-top:4px;padding-top:4px}
.ob-qbtn{margin-top:12px}
.ob-quiz{margin-top:12px;background:#F3EFE6;border-radius:14px;padding:12px 14px}.ob-quiz.done{background:#E1EFEB}
.ob-qt{display:block;font-size:1.2rem;margin:6px 0 10px}.ob-qo{display:flex;flex-wrap:wrap;gap:8px}
.ob-mins{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
.ob-min{font:inherit;background:#fff;border:2px solid #E3DED1;border-radius:16px;padding:14px 8px;cursor:pointer;color:#1B2A4A;display:flex;flex-direction:column;align-items:center;gap:2px}
.ob-min b{font-size:1.8rem}.ob-min span{font-weight:700}.ob-min.on{border-color:#D9661F;background:#FFF4E6}
.ob-ul{padding-left:20px;line-height:1.7}.ob-ck{display:flex;gap:10px;align-items:flex-start;margin:10px 0;font-weight:600}.ob-ck input{margin-top:5px;width:18px;height:18px}
.ob-foot{display:flex;align-items:center;gap:12px;background:#fff;border-radius:18px;padding:10px 14px;box-shadow:0 8px 22px rgba(27,42,74,.08)}
.ob-err{flex:1;color:#c62e3b;font-weight:600;font-size:.92rem}
.ob-plan{display:flex;flex-direction:column;gap:8px;margin:12px 0}
.ob-step{display:flex;align-items:center;gap:12px;background:#fff;border:2px solid #E3DED1;border-radius:14px;padding:10px 14px;color:#1B2A4A;text-decoration:none}
.ob-step:hover{border-color:#D9661F}.ob-step .n{width:28px;height:28px;border-radius:50%;background:#1B2A4A;color:#fff;display:grid;place-items:center;font-weight:800;flex:none}
.ob-step .i{font-size:1.5rem}.ob-step b{display:block}.ob-step small{color:#55607A}.ob-step em{margin-left:auto;font-style:normal;font-weight:800;color:#D9661F}
.ob-mini{display:flex;flex-direction:column;gap:6px;background:#FFF4E6;border-radius:16px;padding:12px 14px;margin-top:10px;color:#1B2A4A}
.ob-mini>span{font-size:.88rem;color:#55607A}.ob-mini .btn{align-self:flex-start}
.ob-plan.sm{margin:4px 0}.ob-plan.sm .ob-step{padding:7px 10px}.ob-plan.sm b{font-size:.9rem}
@media (max-width:600px){.ob-mins{grid-template-columns:repeat(2,1fr)}.ob-steps li span{display:none}.ob-steps li.on span{display:inline}}
`;
  document.head.appendChild(css);
})();

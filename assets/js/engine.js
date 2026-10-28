/* Engine câu hỏi: hiển thị các dạng câu, chấm điểm, chế độ luyện tập, phòng thi có đồng hồ và AI chấm tự luận */
(function () {
  'use strict';
  const { fmt, parseNum, esc, same } = PLT.U;
  const LETTERS = ['A', 'B', 'C', 'D', 'E'];
  const LABEL = { mc: 'Chọn đáp án đúng', fill: 'Điền số thích hợp vào chỗ trống', match: 'Nối mỗi ô bên trái với ô phù hợp bên phải', order: 'Sắp xếp theo thứ tự', sort: 'Xếp mỗi ô vào nhóm đúng', essay: 'Tự luận – trình bày bài giải' };

  /* ---------- Hiển thị một câu hỏi ---------- */
  function render(q, el, st, opt) {
    opt = opt || {}; const lock = !!opt.review; const ch = () => opt.onChange && opt.onChange();
    let body = '';
    if (q.type === 'mc') {
      body = `<div class="opts${q.choices.some((c) => c.replace(/<[^>]+>/g, '').length > 38 || /<svg|groups/.test(c)) ? ' wide' : ''}">` + q.choices.map((c, i) => {
        let cls = st.resp === i ? ' sel' : ''; if (lock) { if (i === q.ai) cls += ' right'; else if (st.resp === i) cls += ' wrong'; }
        return `<button class="opt${cls}" data-i="${i}" ${lock ? 'disabled' : ''}><span class="L">${LETTERS[i]}</span><span class="c">${c}</span></button>`;
      }).join('') + '</div>';
    } else if (q.type === 'fill') {
      st.resp = st.resp || q.blanks.map(() => '');
      body = q.blanks.map((b, i) => {
        let cls = ''; if (lock) cls = same(parseNum(st.resp[i]), b.ans) ? ' right' : ' wrong';
        return `<label class="blank">${b.pre || ''} <input class="numin${cls}" inputmode="${Number.isInteger(b.ans) && b.ans >= 0 ? 'numeric' : 'text'}" data-i="${i}" value="${esc(st.resp[i])}" ${lock ? 'disabled' : ''}> ${b.post || ''}${lock && cls === ' wrong' ? ` <span class="corr">→ ${b.show || fmt(b.ans)}</span>` : ''}</label>`;
      }).join('');
      if (!lock && q.blanks.some((b) => !Number.isInteger(b.ans) || b.ans < 0)) body += '<div class="muted small">Số thập phân dùng dấu phẩy (2,5); phân số viết a/b (3/4); số âm thêm dấu − (−3).</div>';
    } else if (q.type === 'match') {
      st.resp = st.resp || q.items.map(() => '');
      body = '<div class="match">' + q.items.map((it, i) => {
        let cls = ''; if (lock) cls = st.resp[i] === it.r ? ' right' : ' wrong';
        return `<div class="mrow"><div class="ml">${it.l}</div><span class="mlink">⟶</span><select class="sel${cls}" data-i="${i}" ${lock ? 'disabled' : ''}><option value="">— chọn —</option>${q.rightOrder.map((x) => `<option ${st.resp[i] === x ? 'selected' : ''}>${esc(x)}</option>`).join('')}</select>${lock && cls === ' wrong' ? `<span class="corr">→ ${it.r}</span>` : ''}</div>`;
      }).join('') + '</div>';
    } else if (q.type === 'order') {
      st.resp = st.resp || [];
      const pool = q.shown.filter((x) => !st.resp.includes(x));
      body = `<div class="muted small">Bấm lần lượt các ô theo thứ tự đúng. Bấm vào ô đã xếp để bỏ ra.</div><div class="ordans">${st.resp.map((x, i) => `<button class="chip on" data-rm="${i}" ${lock ? 'disabled' : ''}>${i + 1}. ${x}</button>`).join('') || '<span class="muted">Chưa xếp ô nào</span>'}</div><div class="ordpool">${pool.map((x) => `<button class="chip" data-add="${esc(x)}" ${lock ? 'disabled' : ''}>${x}</button>`).join('')}</div>` + (lock && st.resp.join('|') !== q.items.join('|') ? `<div class="corr">Thứ tự đúng: ${q.items.join(' → ')}</div>` : '');
    } else if (q.type === 'sort') {
      st.resp = st.resp || {};
      body = '<div class="sortq">' + q.items.map((it, i) => {
        let cls = ''; if (lock) cls = st.resp[i] === it.cat ? ' right' : ' wrong';
        return `<div class="srow${cls}"><span class="stxt">${it.t}</span>${q.cats.map((c) => `<button class="chip${st.resp[i] === c ? ' on' : ''}" data-s="${i}" data-c="${esc(c)}" ${lock ? 'disabled' : ''}>${c}</button>`).join('')}${lock && cls === ' wrong' ? `<span class="corr">→ ${it.cat}</span>` : ''}</div>`;
      }).join('') + '</div>';
    } else if (q.type === 'essay') {
      body = `<textarea class="essay" rows="5" placeholder="Viết bài giải: lời giải, phép tính, đáp số…" ${lock ? 'disabled' : ''}>${esc(st.resp || '')}</textarea>`;
      if (lock) body += `<div class="essayfb">${st.ai ? `<b>${st.ai.diem}/${q.max} điểm</b> ${st.ai.src === 'ai' ? '(AI chấm)' : '(chấm sơ bộ theo đáp số)'} — ${esc(st.ai.nhan_xet || '')}` : ''}<div class="muted small">Lời giải mẫu: ${q.dapan}</div></div>`;
    }
    el.innerHTML = `<div class="qtext">${q.q}</div><div class="qbody">${body}</div>` + (lock && q.exp ? `<div class="exp">💡 ${q.exp}</div>` : '');
    if (lock) return;
    el.onclick = (e) => {
      const b = e.target.closest('button'); if (!b) return;
      if (b.dataset.i !== undefined && q.type === 'mc') { st.resp = +b.dataset.i; render(q, el, st, opt); ch(); }
      else if (b.dataset.add !== undefined) { st.resp.push(q.shown.find((x) => esc(x) === b.dataset.add || x === b.dataset.add)); render(q, el, st, opt); ch(); }
      else if (b.dataset.rm !== undefined) { st.resp.splice(+b.dataset.rm, 1); render(q, el, st, opt); ch(); }
      else if (b.dataset.s !== undefined) { st.resp[b.dataset.s] = q.cats.find((c) => esc(c) === b.dataset.c); render(q, el, st, opt); ch(); }
    };
    el.oninput = (e) => {
      const t = e.target;
      if (q.type === 'fill' && t.dataset.i !== undefined) { st.resp[+t.dataset.i] = t.value; ch(); }
      if (q.type === 'essay' && t.tagName === 'TEXTAREA') { st.resp = t.value; ch(); }
    };
    el.onchange = (e) => { const t = e.target; if (q.type === 'match' && t.tagName === 'SELECT') { st.resp[+t.dataset.i] = t.value; ch(); } };
  }

  function answered(q, st) {
    const v = st.resp; if (v == null) return false;
    if (q.type === 'mc') return typeof v === 'number';
    if (q.type === 'fill' || q.type === 'match') return v.every((x) => String(x).trim() !== '');
    if (q.type === 'order') return v.length === q.items.length;
    if (q.type === 'sort') return q.items.every((_, i) => v[i]);
    if (q.type === 'essay') return String(v).trim().length > 0;
    return false;
  }
  function check(q, st) {
    const v = st.resp; if (v == null) return false;
    if (q.type === 'mc') return v === q.ai;
    if (q.type === 'fill') return q.blanks.every((b, i) => same(parseNum(v[i]), b.ans));
    if (q.type === 'match') return q.items.every((it, i) => v[i] === it.r);
    if (q.type === 'order') return v.join('|') === q.items.join('|');
    if (q.type === 'sort') return q.items.every((it, i) => v[i] === it.cat);
    return null;
  }

  /* ---------- AI chấm tự luận (Gemini) + chấm sơ bộ ---------- */
  function heuristic(q, text) {
    const nums = (String(text || '').replace(/(\d)[\s. ](?=\d{3}\b)/g, '$1').match(/\d+/g) || []).map(Number);
    const hit = q.keys.filter((k) => nums.includes(k)).length;
    const diem = Math.round((hit / q.keys.length) * q.max * 4) / 4;
    return { diem, src: 'auto', nhan_xet: hit === q.keys.length ? 'Các kết quả chính đều đúng. Nhớ ghi đủ lời giải và đáp số nhé!' : hit ? `Đúng ${hit}/${q.keys.length} kết quả chính. Kiểm tra lại phép tính còn sai.` : 'Chưa tìm thấy kết quả đúng. Em xem lời giải mẫu và làm lại nhé.' };
  }
  async function aiGrade(list) { // list: [{q, resp}]
    const S = PLT.data.settings; if (!S.apiKey) return list.map((x) => heuristic(x.q, x.resp));
    const strip = (h) => String(h).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const prompt = `Bạn là giáo viên Toán lớp 3 ở Việt Nam, chấm bài tự luận của học sinh. Chấm công bằng, khích lệ.
Với mỗi câu: so sánh bài làm với lời giải mẫu; cho điểm theo bội số 0,25, không vượt điểm tối đa (đúng kết quả nhưng thiếu lời giải/đáp số thì trừ nhẹ). Viết nhận xét 1–2 câu ngắn, dễ hiểu với học sinh lớp 3, chỉ rõ chỗ sai nếu có.
Chỉ trả về JSON dạng: {"ket_qua":[{"cau":1,"diem":1.5,"nhan_xet":"..."}]}

${list.map((x, i) => `CÂU ${i + 1} (tối đa ${x.q.max} điểm)\nĐề: ${strip(x.q.q)}\nLời giải mẫu: ${strip(x.q.dapan)}\nBài làm của học sinh: ${x.resp ? String(x.resp) : '(bỏ trống)'}`).join('\n\n')}`;
    try {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(S.model || 'gemini-2.5-flash')}:generateContent?key=${encodeURIComponent(S.apiKey)}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }], generationConfig: { responseMimeType: 'application/json', temperature: 0.2 } })
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const j = await res.json(); const txt = j.candidates[0].content.parts.map((p) => p.text || '').join('');
      const out = JSON.parse(txt.replace(/^```json|```$/g, '')).ket_qua;
      return list.map((x, i) => { const o = out[i] || {}; let d = Number(String(o.diem).replace(',', '.')); if (isNaN(d)) return heuristic(x.q, x.resp); d = Math.max(0, Math.min(x.q.max, Math.round(d * 4) / 4)); return { diem: d, nhan_xet: o.nhan_xet || '', src: 'ai' }; });
    } catch (e) {
      console.warn('AI chấm lỗi, dùng chấm sơ bộ:', e);
      return list.map((x) => Object.assign(heuristic(x.q, x.resp), { nhan_xet: heuristic(x.q, x.resp).nhan_xet + ' (Chưa kết nối được AI: ' + e.message + ')' }));
    }
  }

  /* ---------- Chế độ luyện tập: từng câu, phản hồi ngay ---------- */
  function practice(box, qs, opt) {
    opt = opt || {}; let i = 0, ok = 0; const sts = qs.map(() => ({}));
    const step = () => {
      if (i >= qs.length) {
        const pct = Math.round((ok / qs.length) * 100);
        box.innerHTML = `<div class="done"><div class="big">${pct >= 80 ? '🏆' : pct >= 50 ? '👍' : '💪'}</div><h3>Đúng ${ok}/${qs.length} câu (${pct}%)</h3><p>${pct >= 80 ? 'Xuất sắc! Em nắm bài rất chắc.' : pct >= 50 ? 'Khá lắm! Ôn lại các câu sai nhé.' : 'Cố lên! Đọc lại lý thuyết rồi làm lại nhé.'}</p><div class="row center"><button class="btn" data-a="again">Làm lượt mới</button></div></div>`;
        box.querySelector('[data-a=again]').onclick = () => opt.again && opt.again();
        opt.onDone && opt.onDone(ok, qs.length); return;
      }
      const q = qs[i], st = sts[i];
      box.innerHTML = `<div class="pbar"><span style="width:${(i / qs.length) * 100}%"></span></div><div class="qhead"><b>Câu ${i + 1}/${qs.length}</b> · ${LABEL[q.type]} <span class="score">✔ ${ok}</span></div><div class="qcard" id="pq"></div><div id="pfb"></div><div class="row"><button class="btn" id="pchk">Kiểm tra</button></div>`;
      const qel = box.querySelector('#pq'); render(q, qel, st, { onChange() { } });
      box.querySelector('#pchk').onclick = () => {
        if (!answered(q, st)) { box.querySelector('#pfb').innerHTML = '<div class="fb warn">Em hãy trả lời trước đã nhé!</div>'; return; }
        const right = check(q, st); if (right) ok++;
        render(q, qel, st, { review: true });
        box.querySelector('#pfb').innerHTML = `<div class="fb ${right ? 'good' : 'badf'}">${right ? '🎉 Chính xác!' : '😅 Chưa đúng rồi.'}</div>`;
        const b = box.querySelector('#pchk'); b.textContent = i === qs.length - 1 ? 'Xem kết quả' : 'Câu tiếp ▶'; b.onclick = () => { i++; step(); };
      };
    };
    step();
  }

  /* ---------- Phòng thi: tất cả câu trên một trang, có đồng hồ & lưới câu ---------- */
  function exam(box, cfg) {
    const qs = cfg.questions, sts = qs.map(() => ({})); let left = cfg.minutes * 60, timer = null, done = false;
    const essayPts = qs.filter((q) => q.type === 'essay').reduce((a, q) => a + q.max, 0), nTN = qs.filter((q) => q.type !== 'essay').length;
    const per = nTN ? (10 - essayPts) / nTN : 0;
    box.innerHTML = `<div class="exam"><div class="eqs">${qs.map((q, i) => `<section class="eq" id="eq${i}"><div class="qhead"><b>Câu hỏi ${i + 1}</b> <span class="muted">· ${LABEL[q.type]} · ${q.type === 'essay' ? q.max : +per.toFixed(2)} điểm</span></div><div class="qcard" data-q="${i}"></div></section>`).join('')}</div>
      <aside class="epanel"><div class="ehead">⏰ Còn lại</div><div class="clock" id="eclk"></div><div class="enav" id="enav">${qs.map((_, i) => `<button data-go="${i}">${i + 1}</button>`).join('')}</div><button class="btn red" id="esub">🎓 Nộp bài</button><div class="muted small" id="ecnt"></div></aside></div>`;
    const nav = () => { let n = 0; qs.forEach((q, i) => { const a = answered(q, sts[i]); if (a) n++; box.querySelector(`[data-go="${i}"]`).classList.toggle('ans', a); }); box.querySelector('#ecnt').textContent = `Đã làm ${n}/${qs.length} câu`; };
    qs.forEach((q, i) => render(q, box.querySelector(`[data-q="${i}"]`), sts[i], { onChange: nav }));
    box.querySelector('#enav').onclick = (e) => { const g = e.target.dataset.go; if (g !== undefined) box.querySelector('#eq' + g).scrollIntoView({ behavior: 'smooth', block: 'start' }); };
    const tick = () => { const m = Math.floor(left / 60), s = left % 60; const c = box.querySelector('#eclk'); if (c) { c.textContent = `${String(m).padStart(2, '0')} : ${String(s).padStart(2, '0')}`; c.classList.toggle('late', left < 120); } if (left <= 0) { finish(true); return; } left--; };
    timer = setInterval(tick, 1000); tick(); nav();
    box.querySelector('#esub').onclick = () => {
      const miss = qs.filter((q, i) => !answered(q, sts[i])).length;
      if (miss && !box.querySelector('#esub').dataset.confirm) { box.querySelector('#esub').dataset.confirm = 1; box.querySelector('#esub').textContent = `Còn ${miss} câu chưa làm – bấm lần nữa để nộp`; return; }
      finish(false);
    };
    async function finish(timeout) {
      if (done) return; done = true; clearInterval(timer);
      const used = cfg.minutes * 60 - Math.max(0, left);
      box.innerHTML = `<div class="done"><div class="big spin">⏳</div><h3>${timeout ? 'Hết giờ! ' : ''}Đang chấm bài…</h3><p class="muted">${essayPts ? (PLT.data.settings.apiKey ? 'AI đang chấm phần tự luận.' : 'Chưa có khóa AI – phần tự luận được chấm sơ bộ theo đáp số.') : ''}</p></div>`;
      let tn = 0; qs.forEach((q, i) => { if (q.type !== 'essay') { sts[i].ok = check(q, sts[i]); if (sts[i].ok) tn += per; } });
      const es = qs.map((q, i) => ({ q, i, resp: sts[i].resp })).filter((x) => x.q.type === 'essay');
      let ed = 0; if (es.length) { const g = await aiGrade(es); es.forEach((x, k) => { sts[x.i].ai = g[k]; ed += g[k].diem; }); }
      const total = Math.round((tn + ed) * 4) / 4;
      const rank = total >= 9 ? ['🏆', 'Hoàn thành tốt'] : total >= 5 ? ['👍', 'Hoàn thành'] : ['💪', 'Cần cố gắng thêm'];
      const nOk = qs.filter((q, i) => q.type !== 'essay' && sts[i].ok).length;
      PLT.data.tests.unshift({ id: cfg.id, ten: cfg.title, subject: cfg.subject, diem: total, ngay: new Date().toISOString(), giay: used }); PLT.data.tests = PLT.data.tests.slice(0, 100); PLT.save();
      box.innerHTML = `<div class="result"><div class="rhead"><div class="big">${rank[0]}</div><div><div class="rscore">${String(total).replace('.', ',')}<small>/10</small></div><div>${rank[1]} · Trắc nghiệm đúng ${nOk}/${nTN}${es.length ? ` · Tự luận ${String(ed).replace('.', ',')}/${essayPts} điểm` : ''} · Thời gian ${Math.floor(used / 60)} phút ${used % 60} giây</div></div></div>
        <div class="row center"><button class="btn" id="rag">Làm đề mới cùng dạng</button><button class="btn ghost" id="rbk">Về danh sách đề</button></div><h3>Xem lại bài làm</h3>${qs.map((q, i) => `<section class="eq ${q.type === 'essay' ? '' : sts[i].ok ? 'okq' : 'noq'}"><div class="qhead"><b>Câu ${i + 1}</b> ${q.type === 'essay' ? '' : sts[i].ok ? '<span class="ok">✔ Đúng</span>' : '<span class="bad">✘ Sai</span>'}</div><div class="qcard" data-r="${i}"></div></section>`).join('')}</div>`;
      qs.forEach((q, i) => render(q, box.querySelector(`[data-r="${i}"]`), sts[i], { review: true }));
      box.querySelector('#rag').onclick = () => cfg.again && cfg.again();
      box.querySelector('#rbk').onclick = () => cfg.back && cfg.back();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return { stop() { clearInterval(timer); done = true; } };
  }

  PLT.Q = { render, answered, check, practice, exam, aiGrade, heuristic, LABEL };
})();

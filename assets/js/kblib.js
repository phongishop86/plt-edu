/* Thư viện dựng môn học dạng "ngân hàng kiến thức" (Tiếng Anh, Đạo đức, TN&XH, Khoa học, Lịch sử, Địa lí, KHTN, Ngữ văn…)
   Mỗi chủ đề khai báo một ngân hàng dòng ngắn; thư viện tự sinh câu trắc nghiệm, đúng/sai, nối, điền từ, sắp thứ tự, phân loại.
   Cú pháp mỗi dòng trong q:
     ? Câu hỏi | đáp án đúng | sai | sai | sai        → trắc nghiệm
     + Phát biểu đúng        - Phát biểu sai           → đúng/sai, "phát biểu nào đúng/sai"
     = Vế trái = Vế phải                               → nối cột, hỏi ngược xuôi
     _ Câu có [đáp án|cách viết khác] cần điền         → điền từ
     > Bước 1 > Bước 2 > Bước 3                        → sắp xếp thứ tự
     # Tên nhóm: mục, mục, mục                         → xếp vào nhóm (cần ≥ 2 dòng #)
   Nội dung câu hỏi do PLT-Edu tự soạn theo chương trình, không chép nguyên văn SGK. */
(function () {
  'use strict';
  const { r, pick, shuffle, mc, fill, match, order, sort, essay } = PLT.U;
  const KB = (PLT.KB = {});
  const uniq = (a) => [...new Set(a)];

  KB.parse = function (txt) {
    const B = { mc: [], tf: [], pair: [], fill: [], ord: [], grp: [] };
    String(txt || '').split('\n').forEach((line) => {
      const s = line.trim(); if (s.length < 3) return; const c = s[0], x = s.slice(1).trim();
      if (c === '?') { const p = x.split('|').map((t) => t.trim()).filter(Boolean); if (p.length >= 3) B.mc.push(p); }
      else if (c === '+' || c === '-') B.tf.push([x, c === '+']);
      else if (c === '=') { const i = x.indexOf(' = '); if (i > 0) B.pair.push([x.slice(0, i).trim(), x.slice(i + 3).trim()]); }
      else if (c === '_') { if (/\[[^\]]+\]/.test(x)) B.fill.push(x); }
      else if (c === '>') { const p = x.split('>').map((t) => t.trim()).filter(Boolean); if (p.length >= 3) B.ord.push(p); }
      else if (c === '#') { const i = x.indexOf(':'); if (i > 0) { const nm = x.slice(0, i).trim(), it = x.slice(i + 1).split(',').map((t) => t.trim()).filter(Boolean); const g = B.grp.find((y) => y[0] === nm); if (g) g[1] = [...new Set(g[1].concat(it))]; else B.grp.push([nm, it]); } }
    });
    return B;
  };

  // Sinh một câu từ ngân hàng theo dạng
  const MAKERS = {
    mc: (B) => { const [q, a, ...w] = pick(B.mc); return mc(q, a, shuffle(w).slice(0, 3)); },
    tf1: (B) => { // một phát biểu: Đúng hay Sai
      const [t, ok] = pick(B.tf); return mc(`Phát biểu sau <b>đúng hay sai</b>?<br><i>"${t}"</i>`, ok ? 'Đúng' : 'Sai', [ok ? 'Sai' : 'Đúng'], ok ? '' : 'Phát biểu này chưa chính xác.');
    },
    tfpick: (B) => { // chọn phát biểu đúng (hoặc sai) trong 4
      const T = B.tf.filter((x) => x[1]), F = B.tf.filter((x) => !x[1]);
      const wantTrue = F.length >= 3 && (T.length < 3 || Math.random() < 0.6);
      if (wantTrue && T.length) { const a = pick(T)[0]; return mc('Phát biểu nào sau đây <b>đúng</b>?', a, shuffle(F).slice(0, 3).map((x) => x[0])); }
      const a = pick(F)[0]; return mc('Phát biểu nào sau đây <b>sai</b>?', a, shuffle(T).slice(0, 3).map((x) => x[0]));
    },
    tfsort: (B) => {
      const T = shuffle(B.tf.filter((x) => x[1])), F = shuffle(B.tf.filter((x) => !x[1]));
      const nt = Math.min(T.length, F.length ? r(1, 3) : 4), nf = Math.min(F.length, 4 - nt);
      const items = T.slice(0, nt).concat(F.slice(0, nf)).map(([t, ok]) => ({ t, cat: ok ? 'Đúng' : 'Sai' }));
      return sort('Mỗi phát biểu sau <b>đúng</b> hay <b>sai</b>?', items, ['Đúng', 'Sai']);
    },
    pmatch: (B) => { const p = []; shuffle(B.pair).forEach((x) => { if (p.length < 4 && !p.some((y) => y[0] === x[0] || y[1] === x[1])) p.push(x); }); return match('Nối mỗi ý bên trái với ý phù hợp bên phải:', p.map(([l, rr]) => ({ l, r: rr }))); },
    pmc: (B) => {
      const [l, rr] = pick(B.pair); const others = uniq(B.pair.filter((x) => x[1] !== rr).map((x) => x[1]));
      const rev = Math.random() < 0.35; if (rev) { const ol = uniq(B.pair.filter((x) => x[0] !== l && x[1] !== rr).map((x) => x[0])); if (ol.length >= 2) return mc(`<b>"${rr}"</b> ứng với ý nào?`, l, shuffle(ol).slice(0, 3)); }
      return mc(`<b>${l}</b> — chọn ý phù hợp:`, rr, shuffle(others).slice(0, 3));
    },
    fill: (B) => {
      const s = pick(B.fill); const parts = s.split(/(\[[^\]]+\])/); const blanks = []; let pre = '';
      parts.forEach((p) => { if (/^\[.+\]$/.test(p)) { blanks.push({ pre, ans: p.slice(1, -1), post: '' }); pre = ''; } else pre += p; });
      if (blanks.length) blanks[blanks.length - 1].post = pre;
      return Object.assign(fill('Điền từ/cụm từ thích hợp vào chỗ trống:', blanks), { lbl: 'Điền từ thích hợp vào chỗ trống' });
    },
    ord: (B) => { const p = pick(B.ord); return order('Sắp xếp các ý sau theo <b>đúng thứ tự</b>:', p); },
    grp: (B) => {
      const G = shuffle(B.grp).slice(0, B.grp.length >= 3 && Math.random() < 0.4 ? 3 : 2);
      let items = []; G.forEach(([c, xs]) => shuffle(xs.filter((t) => !G.some(([c2, ys]) => c2 !== c && ys.includes(t)))).slice(0, G.length === 3 ? 2 : r(2, 3)).forEach((t) => items.push({ t, cat: c })));
      if (items.length < 3 || new Set(items.map((x) => x.cat)).size < 2) return MAKERS.mc.length && B.mc.length ? MAKERS.mc(B) : MAKERS.grp(Object.assign({}, B, { grp: shuffle(B.grp) }));
      items = items.filter((x, k, a) => a.findIndex((y) => y.t === x.t) === k);
      return sort('Xếp mỗi ý vào nhóm đúng:', items, G.map((g) => g[0]));
    }
  };
  const avail = (B) => {
    const a = [];
    if (B.mc.length) a.push('mc', 'mc', 'mc');
    if (B.tf.length) a.push('tf1');
    if (B.tf.filter((x) => x[1]).length >= 1 && B.tf.filter((x) => !x[1]).length >= 3) a.push('tfpick');
    if (B.tf.length >= 4) a.push('tfsort');
    if (B.pair.length >= 4) a.push('pmatch', 'pmc');
    if (B.fill.length) a.push('fill');
    if (B.ord.length) a.push('ord');
    if (B.grp.length >= 2) a.push('grp');
    return a;
  };
  KB.gen = (B) => { const a = avail(B); return () => MAKERS[pick(a)](B); };

  // Tự luận ngắn: [đề, [ý chính/từ khoá], lời giải mẫu, số câu tối thiểu]
  KB.essays = (list, max) => (list || []).map(([q, kw, dapan, minCau]) => () => Object.assign(essay(q, max || 2, dapan || 'Trình bày đủ các ý: ' + (kw || []).join('; ') + '.', []), { kw: kw || [], minCau: minCau || 3, ph: 'Viết câu trả lời của em (vài câu, đủ ý)…' }));

  /* ---------- Ngân hàng dùng chung cho các môn nghệ thuật, thể chất (bổ sung vào mọi chủ đề) ---------- */
  KB.SHARE = {
    gdtc: `? Trước khi tập luyện, việc cần làm đầu tiên là: | Khởi động kĩ các khớp | Chạy hết sức ngay | Ăn thật no | Uống nhiều nước ngọt
? Sau khi tập luyện, em nên: | Thả lỏng, hồi tĩnh rồi nghỉ ngơi | Tắm nước lạnh ngay | Nằm bất động trên sàn lạnh | Ăn thật nhiều ngay lập tức
? Trang phục phù hợp khi học Giáo dục thể chất là: | Quần áo thể thao, giày thể thao | Váy dài, dép lê | Áo khoác dày | Đồng phục và giày da
? Khi tập luyện ngoài trời nắng, em cần: | Đội mũ, uống đủ nước, nghỉ ở chỗ râm | Tập liên tục không nghỉ | Không uống nước | Cởi áo phơi nắng
? Khi bị trẹo chân lúc tập, em nên: | Dừng tập, báo thầy cô, chườm lạnh | Tiếp tục chạy | Xoa bóp thật mạnh | Giấu không nói
? Nên ăn no xong bao lâu mới tập luyện mạnh? | Khoảng 1 giờ trở lên | Ngay lập tức | 1 phút | Không cần chờ
? Tập thể dục thể thao thường xuyên giúp: | Cơ thể khoẻ mạnh, phát triển cân đối | Hay ốm hơn | Mệt mỏi kéo dài | Học kém đi
? Khi chơi trò chơi vận động, em cần: | Tuân thủ luật chơi, đoàn kết, an toàn | Xô đẩy bạn | Gian lận | Cãi nhau
+ Uống nước từng ngụm nhỏ trong lúc nghỉ giữa giờ tập.
+ Khởi động giúp phòng tránh chấn thương.
+ Ngủ đủ giấc giúp cơ thể hồi phục sau tập luyện.
+ Cần giữ khoảng cách an toàn với bạn khi tập với dụng cụ.
- Tập càng nhiều càng tốt, không cần nghỉ ngơi.
- Mặc quần áo chật, đi dép lê khi tập là phù hợp.
- Bỏ qua phần khởi động để có thêm thời gian chơi.
- Khi bị đau trong lúc tập nên cố gắng tập tiếp.
> Khởi động > Tập phần cơ bản > Thả lỏng, hồi tĩnh
# Nên làm: Khởi động kĩ, Mặc đồ thể thao, Uống nước khi nghỉ, Nghe hướng dẫn của thầy cô
# Không nên: Tập khi vừa ăn no, Xô đẩy bạn, Bỏ khởi động, Đi dép lê khi chạy`,
    amnhac: `? Nhạc cụ nào là nhạc cụ gõ? | Trống | Sáo | Kèn | Đàn vi-ô-lông
? Nhạc cụ nào là nhạc cụ thổi? | Sáo trúc | Thanh phách | Song loan | Trống con
? Đàn bầu là nhạc cụ dân tộc có mấy dây? | 1 | 2 | 6 | 16
? Quốc ca Việt Nam là bài "Tiến quân ca" của nhạc sĩ: | Văn Cao | Phạm Tuyên | Hoàng Long | Trịnh Công Sơn
? Khi hát, tư thế đúng là: | Ngồi hoặc đứng thẳng lưng, thả lỏng vai | Nằm gục xuống bàn | Cúi gập người | Ngửa cổ ra sau
? Dân ca là: | Bài hát do nhân dân sáng tác, truyền miệng qua nhiều đời | Bài hát mới của ca sĩ | Nhạc nước ngoài | Nhạc quảng cáo
? Hát quan họ là dân ca của vùng: | Bắc Ninh | Nam Bộ | Tây Nguyên | Huế
? Không gian văn hoá Cồng chiêng thuộc vùng: | Tây Nguyên | Đồng bằng sông Hồng | Tây Bắc | Nam Bộ
+ Bảy nốt nhạc là Đô, Rê, Mi, Pha, Son, La, Si.
+ Gõ đệm theo nhịp giúp bài hát sinh động hơn.
+ Hát đúng giai điệu và lời ca là yêu cầu cơ bản khi học hát.
+ Âm nhạc giúp con người vui tươi, gắn kết.
- Hát càng to càng hay, không cần giữ giai điệu.
- Thanh phách là nhạc cụ thổi.
- Dân ca là bài hát do một ca sĩ nổi tiếng sáng tác năm nay.
- Khi chào cờ có thể vừa hát Quốc ca vừa nói chuyện.
> Đô > Rê > Mi > Pha > Son > La > Si
# Nhạc cụ gõ: Trống con, Thanh phách, Song loan, Tem-bơ-rin
# Nhạc cụ thổi: Sáo trúc, Kèn phím, Sáo recorder
# Nhạc cụ dây: Đàn bầu, Đàn tranh, Đàn ghi-ta`,
    mithuat: `? Ba màu cơ bản là: | Đỏ, vàng, lam | Cam, lục, tím | Đen, trắng, xám | Hồng, nâu, xanh lá
? Pha màu đỏ và màu vàng được màu: | Cam | Tím | Lục | Nâu
? Pha màu vàng và màu lam được màu: | Lục | Cam | Tím | Hồng
? Pha màu đỏ và màu lam được màu: | Tím | Cam | Lục | Vàng
? Quả bóng có dạng khối: | Khối cầu | Khối hộp | Khối trụ | Khối nón
? Hộp phấn có dạng khối: | Khối hộp | Khối cầu | Khối nón | Khối trụ
? Lon nước ngọt có dạng khối: | Khối trụ | Khối cầu | Khối hộp | Khối nón
? Khi dùng kéo, em cần: | Cầm cẩn thận, không chĩa mũi kéo vào người khác | Vừa cắt vừa chạy | Ném kéo cho bạn | Cắt lên bàn ghế
+ Màu nóng (đỏ, cam, vàng) gợi cảm giác ấm áp.
+ Màu lạnh (lam, lục, tím) gợi cảm giác mát mẻ.
+ Có thể dùng vật liệu tái chế để tạo sản phẩm mĩ thuật.
+ Cần tôn trọng sản phẩm mĩ thuật của bạn.
- Màu cam là màu cơ bản.
- Quả cam có dạng khối hộp.
- Vẽ bậy lên tường lớp là một hoạt động mĩ thuật.
- Chỉ có thể vẽ tranh bằng bút chì đen.
= Đỏ + vàng = Cam
= Vàng + lam = Lục
= Đỏ + lam = Tím
= Nón lá = Khối nón
# Màu nóng: Đỏ, Cam, Vàng
# Màu lạnh: Lam, Lục, Tím`
  };

  /* ---------- Tiếng Anh: dựng chủ đề (Unit) từ từ vựng + mẫu câu ----------
     units: [{ ten, hk, ph (âm/chữ cái trọng tâm), v: 'word=nghĩa; word=nghĩa', s: ['câu có [từ] cần điền', …], lt: [...] }] */
  KB.eng = function (def) {
    const all = []; def.units.forEach((u) => { u.V = u.v.split(';').map((x) => x.split('=').map((y) => y.trim())).filter((x) => x.length === 2 && x[0]); u.V.forEach((x) => all.push(x)); });
    const words = [...new Set(all.map((x) => x[0]))];
    const clean = (t) => t.replace(/\[([^\]|]+)(\|[^\]]*)?\]/g, '$1');
    let lt = 0;
    const topics = def.units.map((u, i) => {
      const lines = u.V.map(([w, m]) => `= ${w} = ${m}`);
      (u.s || []).forEach((t) => { if (/\[/.test(t)) { const m = t.match(/\[([^\]|]+)/); const hit = all.find(([w]) => m && (w.toLowerCase() === m[1].toLowerCase() || m[1].toLowerCase().replace(/(ing|s)$/, '') === w.toLowerCase().replace(/e$/, ''))); lines.push('_ ' + (hit ? t.replace(/\]/, '] (' + hit[1] + ')') : t)); } const ws = clean(t).split(/\s+/); if (ws.length >= 3 && ws.length <= 9 && new Set(ws).size === ws.length) lines.push('> ' + ws.join(' > ')); });
      (u.q || []).forEach((x) => lines.push(x));
      const fns = {};
      const ph = u.ph;
      if (ph) fns.ph = () => { const ok = u.V.filter(([w]) => w.toLowerCase().includes(ph.toLowerCase())); const a = pick(ok.length ? ok : u.V)[0]; const bad = shuffle(words.filter((w) => !w.toLowerCase().includes(ph.toLowerCase()))).slice(0, 3); return mc(`Từ nào có âm/chữ <b>"${ph}"</b>?`, a, bad, `"${a}" có chứa "${ph}".`); };
      fns.miss = () => { const cand = u.V.filter(([w]) => /^[a-z]{3,}$/i.test(w)); if (!cand.length) return mc(`<b>${u.V[0][1]}</b> trong tiếng Anh là:`, u.V[0][0], shuffle(words.filter((w) => w !== u.V[0][0])).slice(0, 3)); const [w, m] = pick(cand); const k = r(0, w.length - 1); const ch = w[k]; const letters = shuffle('abcdefghijklmnopqrstuvwxyz'.split('').filter((c) => c !== ch.toLowerCase())).slice(0, 3); return mc(`Điền chữ cái còn thiếu: <b style="letter-spacing:3px">${w.slice(0, k)}_${w.slice(k + 1)}</b> (${m})`, ch, letters, `Từ đúng: ${w} — ${m}.`); };
      return { hk: u.hk || (i < def.units.length / 2 ? 1 : 2), ten: u.ten, nhan0: 'Unit ' + (i + 1), lt: u.lt || [`<b>Từ vựng:</b> ${u.V.map(([w, m]) => `<b>${w}</b> (${m})`).join(', ')}.`].concat(ph ? [`<b>Âm/chữ cái:</b> ${ph}`] : []).concat((u.s || []).length ? [`<b>Mẫu câu:</b> ${(u.s || []).map((t) => '<i>' + clean(t) + '</i>').join(' · ')}`] : []), bai: (u.bai || ['Lesson 1 – Từ vựng', 'Lesson 2 – Mẫu câu', 'Lesson 3 – Âm và chữ cái']).map((b) => '*' + b), on: u.on, q: lines.join('\n'), fns };
    });
    return KB.build({ id: def.id, lop: def.lop, mon: 'Tiếng Anh', icon: '🔤', bo: 'Global Success', so: false, topics, essays: def.essays, essayMax: def.essayMax });
  };

  /* def: { id, lop, mon, icon, nhan ('Chủ đề'|'Unit'|'Chương'|'Bài'), topics: [{ hk, ten, lt (mảng ý hoặc HTML), bai: [tên bài | [so, tên]], q: chuỗi ngân hàng, on: 'Ôn tập…' }], essays: {1:[…], 2:[…]}, so: false (không đánh số bài); tên bài bắt đầu bằng * thì không đánh số } */
  KB.build = function (def) {
    const gens = {}; let n = 0;
    const topics = def.topics.map((t, i) => {
      const id = i + 1, own = KB.parse(t.q), B = KB.parse((t.q || '') + '\n' + (def.share || '')); const keys = [];
      if (avail(B).length) { const gAll = KB.gen(B), gOwn = avail(own).length ? KB.gen(own) : null; gens['k' + id] = def.share && gOwn ? () => (Math.random() < 0.7 ? gOwn() : gAll()) : gAll; keys.push('k' + id); }
      if (B.tf.length + B.pair.length + B.fill.length + B.ord.length + B.grp.length >= 4 && B.mc.length >= 4) { // dạng thứ hai để đề đa dạng hơn
        const B2 = Object.assign({}, B, { mc: [] }); gens['k' + id + 'b'] = KB.gen(B2); keys.push('k' + id + 'b');
      }
      if (t.fns) Object.keys(t.fns).forEach((nm, j) => { gens['k' + id + 'x' + j] = t.fns[nm]; keys.push('k' + id + 'x' + j); });
      const bai = t.bai.map((b) => (Array.isArray(b) ? b : b[0] === '*' ? [0, b.slice(1)] : [def.so === false ? 0 : ++n, b])).map((b) => [b[0], b[1], keys.length ? keys : null]);
      if (t.on) bai.push([0, t.on, null]);
      const lt = Array.isArray(t.lt) ? `<ul>${t.lt.map((x) => `<li>${x}</li>`).join('')}</ul>` : t.lt || '';
      return { id, hk: t.hk, ten: t.ten, nhan: t.nhan0 ? t.nhan0 : t.nhan || (def.nhan || 'Chủ đề') + ' ' + (t.so || id), widgets: [], lt, review: !keys.length, bai };
    });
    const essays = { 1: KB.essays((def.essays || {})[1], def.essayMax), 2: KB.essays((def.essays || {})[2], def.essayMax) };
    const d = { id: def.id, lop: def.lop, mon: def.mon, icon: def.icon || '📘', topics, gens, essays }; if (def.bo) d.bo = def.bo;
    return PLT.buildCourse(d);
  };
})();

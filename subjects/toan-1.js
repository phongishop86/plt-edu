/* Toán lớp 1 – Kết nối tri thức với cuộc sống. Lý thuyết tóm tắt bằng lời mới; câu hỏi sinh tự động. */
(function () {
  'use strict';
  const { r, pick, shuffle, fmt, docSo, cap, mc, fill, fill1, match, order, sort, essay, clockSVG, shapeSVG, rulerSVG } = PLT.U;
  const { big, distinct } = PLT.M;
  const G = {};
  const EMO = ['🍎', '🐟', '⭐', '🌸', '🐥', '🍓', '🎈', '🚗', '🐞', '🍊'];
  const row = (n, e) => `<div class="emo">${Array(n).fill(e).join(' ')}</div>`;

  // ---- Các số 0 – 10 ----
  G.dem = () => { const n = r(1, 10), e = pick(EMO); return Math.random() < 0.5 ? fill1(`Đếm xem có bao nhiêu? ${row(n, e)}`, n, `Chỉ tay đếm lần lượt từng hình: có ${n} hình.`) : mc(`Có mấy hình? ${row(n, e)}`, n, [n + 1, n - 1, n + 2], `Đếm lần lượt: 1, 2, 3… đến ${n}.`); };
  G.sosanh10 = () => {
    const a = r(0, 10), b = Math.random() < 0.2 ? a : r(0, 10);
    if (Math.random() < 0.5) return mc(`Chọn dấu thích hợp: ${big(`${a} … ${b}`)}`, a > b ? '>' : a < b ? '<' : '=', ['>', '<', '='], 'Số nào đứng sau khi đếm thì lớn hơn.');
    const e1 = pick(EMO), e2 = pick(EMO.filter((x) => x !== e1)); const x = r(1, 9), y = r(1, 9); if (x === y) return G.sosanh10();
    return mc(`Hàng nào nhiều hơn?${row(x, e1)}${row(y, e2)}`, x > y ? `Hàng ${e1}` : `Hàng ${e2}`, [x > y ? `Hàng ${e2}` : `Hàng ${e1}`], `Hàng ${e1} có ${x}, hàng ${e2} có ${y}. ${Math.max(x, y)} lớn hơn ${Math.min(x, y)}.`);
  };
  G.thutu10 = () => { const nums = distinct(4, () => r(0, 10)); const asc = Math.random() < 0.5; return order(`Xếp các số theo thứ tự từ <b>${asc ? 'bé đến lớn' : 'lớn đến bé'}</b>:`, nums.slice().sort((a, b) => (asc ? a - b : b - a)).map(String), 'Đếm từ 0 đến 10 để biết số nào bé hơn.'); };
  G.mayvamay = () => { const n = r(2, 10), a = r(1, n - 1); return fill1(`Số <b>${n}</b> gồm <b>${a}</b> và mấy?`, n - a, `${a} và ${n - a} được ${n}.`); };

  // ---- Hình phẳng, hình khối, vị trí ----
  const KINDS = ['hình vuông', 'hình tròn', 'hình tam giác', 'hình chữ nhật'];
  G.hinh1 = () => {
    if (Math.random() < 0.6) { const k = pick(KINDS); return mc(`Đây là hình gì?${shapeSVG(k)}`, cap(k), KINDS.filter((x) => x !== k).map(cap), 'Hình vuông: 4 cạnh bằng nhau. Hình chữ nhật: 2 cạnh dài, 2 cạnh ngắn. Hình tam giác: 3 cạnh. Hình tròn: không có cạnh.'); }
    const ico = { 'hình tam giác': '🔺', 'hình tròn': '🔵', 'hình vuông': '🟦' }; const ks = Object.keys(ico); const list = Array.from({ length: r(6, 9) }, () => pick(ks)); const k = pick(ks); const n = list.filter((x) => x === k).length;
    return fill1(`Có bao nhiêu <b>${k}</b>? <div class="emo">${list.map((x) => ico[x]).join(' ')}</div>`, n, `Đếm các ${k}: có ${n} hình.`);
  };
  G.khoi1 = () => { const it = pick([['Con xúc xắc', 'Khối lập phương'], ['Khối ru-bích', 'Khối lập phương'], ['Hộp sữa', 'Khối hộp chữ nhật'], ['Viên gạch', 'Khối hộp chữ nhật'], ['Hộp bút', 'Khối hộp chữ nhật'], ['Cái tủ lạnh', 'Khối hộp chữ nhật']]); return mc(`${it[0]} có dạng khối gì?`, it[1], [it[1] === 'Khối lập phương' ? 'Khối hộp chữ nhật' : 'Khối lập phương', 'Hình tròn'], 'Khối lập phương: các mặt đều là hình vuông bằng nhau. Khối hộp chữ nhật: các mặt là hình chữ nhật.'); };
  G.vitri = () => { const an = shuffle([['🐱', 'con mèo'], ['🐶', 'con chó'], ['🐰', 'con thỏ'], ['🐻', 'con gấu']]).slice(0, 3); const t = r(0, 2); const q = ['ở bên trái', 'ở giữa', 'ở bên phải'][t]; return mc(`<div class="emo big2">${an.map((a) => a[0]).join(' ')}</div>Con vật nào ${q}?`, cap(an[t][1]), an.filter((_, i) => i !== t).map((a) => cap(a[1])), 'Bên trái là phía tay trái của em, bên phải là phía tay phải.'); };

  // ---- Cộng, trừ trong phạm vi 10 ----
  G.cong10 = () => { const a = r(0, 9), b = r(0, 10 - a), t = r(0, 2); if (t === 0) { const e = pick(EMO); return fill1(`Có tất cả bao nhiêu? ${row(a || 1, e)} <div class="emo">và</div> ${row(b || 1, e)}`, (a || 1) + (b || 1), `${a || 1} + ${b || 1} = ${(a || 1) + (b || 1)}.`); } if (t === 1) return mc(big(`${a} + ${b} = ?`), a + b, [a + b + 1, a + b - 1, a + b + 2], `${a} + ${b} = ${a + b}.`); return fill1(`Điền số: <b>${a} + ? = ${a + b}</b>`, b, `${a + b} − ${a} = ${b}.`); };
  G.tru10 = () => { const a = r(1, 10), b = r(0, a), t = r(0, 2); if (t === 0) { const e = pick(EMO); return fill1(`Có ${a} ${e}, bay đi / lấy đi ${b}. Còn lại bao nhiêu? ${row(a, e)}`, a - b, `${a} − ${b} = ${a - b}.`); } if (t === 1) return mc(big(`${a} − ${b} = ?`), a - b, [a - b + 1, a - b - 1, a + b], `${a} − ${b} = ${a - b}.`); return fill1(`Điền số: <b>${a} − ? = ${a - b}</b>`, b, `${a} − ${a - b} = ${b}.`); };
  G.bang10 = () => { const items = Array.from({ length: 5 }, () => { const a = r(0, 9), b = r(0, 10 - a), ok = Math.random() < 0.55; return { t: `${a} + ${b} = ${ok ? a + b : a + b + pick([1, -1, 2])}`, cat: ok ? 'Đúng' : 'Sai' }; }).filter((x, i, arr) => arr.findIndex((y) => y.t === x.t) === i); return sort('Phép tính nào đúng, phép tính nào sai?', items, ['Đúng', 'Sai'], 'Nhẩm lại bảng cộng trong phạm vi 10.'); };

  // ---- Các số đến 100 ----
  const docN = (n) => cap(docSo(n));
  G.so100 = () => {
    const n = r(11, 99), c = Math.floor(n / 10), d = n % 10, t = r(0, 4);
    if (t === 0) return fill1(`Số gồm <b>${c} chục</b> và <b>${d} đơn vị</b> viết là:`, n, `${c} chục là ${c * 10}; thêm ${d} đơn vị được ${n}.`);
    if (t === 1) return mc(`Số <b>${n}</b> đọc là:`, docN(n), distinct(5, () => r(11, 99)).filter((x) => x !== n).slice(0, 3).map(docN), 'Đọc số chục trước, rồi số đơn vị. Chú ý: 1 ở hàng đơn vị đọc "mốt" (21: hai mươi mốt), 5 đọc "lăm" (25: hai mươi lăm), 4 có thể đọc "tư".');
    if (t === 2) { const m = Math.random() < 0.2 ? n : r(10, 99); return mc(`Chọn dấu thích hợp: ${big(`${n} … ${m}`)}`, n > m ? '>' : n < m ? '<' : '=', ['>', '<', '='], 'So sánh số chục trước; số chục bằng nhau thì so sánh số đơn vị.'); }
    if (t === 3) { const s = Math.random() < 0.5; return mc(`Số liền ${s ? 'sau' : 'trước'} của <b>${n}</b> là:`, s ? n + 1 : n - 1, [s ? n - 1 : n + 1, n + 10, n - 10], `Số liền ${s ? 'sau hơn' : 'trước kém'} ${n} một đơn vị.`); }
    const nums = distinct(4, () => r(10, 99)); return order('Xếp các số theo thứ tự từ bé đến lớn:', nums.slice().sort((a, b) => a - b).map(String), 'So sánh số chục trước, rồi đến số đơn vị.');
  };
  // ---- Độ dài ----
  G.daingan = () => {
    if (Math.random() < 0.5) { const a = r(3, 12), b = r(3, 12); if (a === b) return G.daingan(); const bar = (len, col, y) => `<rect x="10" y="${y}" width="${len * 20}" height="16" rx="8" fill="${col}"/>`; return mc(`Bút chì nào dài hơn?<svg class="pic" viewBox="0 0 300 70" width="300">${bar(a, '#4a7dff', 10)}${bar(b, '#e5484d', 40)}<text x="${a * 20 + 16}" y="23" font-size="12">xanh</text><text x="${b * 20 + 16}" y="53" font-size="12">đỏ</text></svg>`, a > b ? 'Bút xanh' : 'Bút đỏ', [a > b ? 'Bút đỏ' : 'Bút xanh'], 'Đặt hai vật thẳng hàng ở một đầu, đầu kia vật nào chìa ra xa hơn thì dài hơn.'); }
    const cm = r(2, 10); return fill1(`Bút chì dài bao nhiêu xăng-ti-mét?${rulerSVG(cm * 10)}`, cm, `Đặt đầu bút ở vạch 0, đầu kia chỉ vạch ${cm} → ${cm} cm.`, 'cm');
  };
  G.cm = () => { const a = r(10, 50), b = r(1, 40), t = Math.random() < 0.5; return t ? fill1(`${a} cm + ${b} cm = ?`, a + b, `${a} + ${b} = ${a + b}, nhớ viết đơn vị cm.`, 'cm') : fill1(`${a + b} cm − ${b} cm = ?`, a, `${a + b} − ${b} = ${a}.`, 'cm'); };

  // ---- Cộng, trừ không nhớ trong phạm vi 100 ----
  function noCarry(op, oneDigit) {
    let a, b; do {
      if (op === '+') { a = r(10, 89); b = oneDigit ? r(1, 9) : r(10, 89); } else { a = r(11, 99); b = oneDigit ? r(1, 9) : r(10, a); }
    } while (op === '+' ? (a % 10 + b % 10 > 9 || a + b > 99) : (a % 10 < b % 10));
    return [a, b, op === '+' ? a + b : a - b];
  }
  const ct = (op) => () => { const [a, b, ans] = noCarry(op, Math.random() < 0.4); const s = op === '+' ? '+' : '−'; const exp = `Đặt tính thẳng cột, tính từ phải sang trái: đơn vị ${op === '+' ? 'cộng' : 'trừ'} đơn vị, chục ${op === '+' ? 'cộng' : 'trừ'} chục → ${a} ${s} ${b} = ${ans}.`; return Math.random() < 0.5 ? fill1(`Đặt tính rồi tính: <span class="dt">${a} ${s} ${b}</span>`, ans, exp) : mc(big(`${a} ${s} ${b} = ?`), ans, [ans + 10, ans - 10, ans + 1], exp); };
  G.cong100kn = ct('+'); G.tru100kn = ct('-');
  G.toan100 = () => { const a = r(10, 50), b = r(10, 40), t = Math.random() < 0.5; return t ? fill1(`Lớp 1A có ${a} bạn, lớp 1B có ${b < 40 ? b : 30} bạn${(a % 10) + ((b < 40 ? b : 30) % 10) > 9 ? '' : ''}. Hai lớp có tất cả bao nhiêu bạn?`, a + (b < 40 ? b : 30), `${a} + ${b < 40 ? b : 30} = ${a + (b < 40 ? b : 30)} (bạn).`, 'bạn') : fill1(`Mẹ có ${a + b} quả trứng, đã dùng ${b} quả. Hỏi còn lại bao nhiêu quả?`, a, `${a + b} − ${b} = ${a} (quả).`, 'quả'); };

  // ---- Thời gian ----
  const THU = ['Chủ nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
  G.gio1 = () => { const h = r(1, 12); return mc(`Đồng hồ chỉ mấy giờ?${clockSVG(h, 0)}`, `${h} giờ`, [`${h % 12 + 1} giờ`, `${h === 1 ? 12 : h - 1} giờ`, `12 giờ`].filter((x) => x !== `${h} giờ`), 'Kim dài chỉ số 12, kim ngắn chỉ số nào thì là mấy giờ.'); };
  G.ngaytuan = () => { if (Math.random() < 0.3) return mc('Một tuần lễ có mấy ngày?', 7, [5, 6, 10], 'Một tuần có 7 ngày: Thứ Hai, Thứ Ba, Thứ Tư, Thứ Năm, Thứ Sáu, Thứ Bảy, Chủ nhật.'); const w = r(0, 6), m = Math.random() < 0.5; return mc(`Hôm nay là <b>${THU[w]}</b>. ${m ? 'Ngày mai' : 'Hôm qua'} là:`, THU[(w + (m ? 1 : 6)) % 7], shuffle(THU.filter((_, i) => i !== (w + (m ? 1 : 6)) % 7)).slice(0, 3), 'Thứ tự các ngày: Thứ Hai → Thứ Ba → … → Thứ Bảy → Chủ nhật → Thứ Hai.'); };

  const ESSAY = {
    1: [() => { const a = r(2, 6), b = r(1, 10 - a); return essay(`Trong vườn có ${a} con gà, thêm ${b} con gà nữa chạy vào. Viết phép tính thích hợp và cho biết có tất cả mấy con gà?`, 2, `${a} + ${b} = ${a + b}. Có tất cả ${a + b} con gà.`, [a + b]); },
      () => { const a = r(5, 10), b = r(1, a - 1); return essay(`Trên cành có ${a} con chim, ${b} con bay đi. Viết phép tính thích hợp và cho biết trên cành còn mấy con chim?`, 2, `${a} − ${b} = ${a - b}. Còn ${a - b} con chim.`, [a - b]); }],
    2: [() => { const [a, b, s] = noCarry('+'); return essay(`Bạn Mai có ${a} que tính, bạn Nam có ${b} que tính. Hỏi cả hai bạn có bao nhiêu que tính? Viết phép tính và câu trả lời.`, 2, `${a} + ${b} = ${s}. Cả hai bạn có ${s} que tính.`, [s]); },
      () => { const [a, b, s] = noCarry('-'); return essay(`Đặt tính rồi tính: ${a} − ${b}. Sau đó viết kết quả.`, 2, `${a} − ${b} = ${s}.`, [s]); }]
  };

  const T = [
    { id: 1, hk: 1, ten: 'Các số từ 0 đến 10', widgets: ['congtru:10'],
      lt: '<ul><li>Đếm, đọc, viết các số 0, 1, 2, …, 10. Số 0 nghĩa là "không có gì".</li><li><b>Nhiều hơn – ít hơn – bằng nhau</b>: nối từng đồ vật của hai nhóm; nhóm còn thừa là nhóm nhiều hơn.</li><li><b>So sánh số</b>: dùng dấu &gt; (lớn hơn), &lt; (bé hơn), = (bằng nhau). Mẹo: miệng dấu luôn mở về phía số lớn hơn.</li><li><b>Mấy và mấy</b>: 5 gồm 2 và 3; 5 gồm 4 và 1…</li></ul>',
      bai: [[0, 'Tiết học đầu tiên', ['dem']], [1, 'Các số 0, 1, 2, 3, 4, 5', ['dem']], [2, 'Các số 6, 7, 8, 9, 10', ['dem', 'thutu10']], [3, 'Nhiều hơn, ít hơn, bằng nhau', ['sosanh10']], [4, 'So sánh số', ['sosanh10', 'thutu10']], [5, 'Mấy và mấy', ['mayvamay']], [6, 'Luyện tập chung', null]] },
    { id: 2, hk: 1, ten: 'Làm quen với một số hình phẳng', widgets: [],
      lt: '<ul><li><b>Hình vuông</b>: 4 cạnh dài bằng nhau.</li><li><b>Hình chữ nhật</b>: 2 cạnh dài bằng nhau, 2 cạnh ngắn bằng nhau.</li><li><b>Hình tam giác</b>: 3 cạnh.</li><li><b>Hình tròn</b>: tròn đều, không có cạnh.</li><li>Ghép, xếp các hình đã học để tạo thành hình mới (ngôi nhà, con cá…).</li></ul>',
      bai: [[7, 'Hình vuông, hình tròn, hình tam giác, hình chữ nhật', ['hinh1']], [8, 'Thực hành lắp ghép, xếp hình', ['hinh1']], [9, 'Luyện tập chung', null]] },
    { id: 3, hk: 1, ten: 'Phép cộng, phép trừ trong phạm vi 10', widgets: ['congtru:10'],
      lt: '<ul><li><b>Phép cộng</b> (+): gộp lại, thêm vào. 3 + 2 = 5.</li><li><b>Phép trừ</b> (−): bớt đi, lấy đi. 5 − 2 = 3.</li><li>Đổi chỗ hai số trong phép cộng, kết quả không đổi: 2 + 3 = 3 + 2.</li><li>Cộng/trừ với 0: 4 + 0 = 4; 4 − 0 = 4; 4 − 4 = 0.</li><li>Học thuộc bảng cộng, bảng trừ trong phạm vi 10.</li></ul>',
      bai: [[10, 'Phép cộng trong phạm vi 10', ['cong10']], [11, 'Phép trừ trong phạm vi 10', ['tru10']], [12, 'Bảng cộng, bảng trừ trong phạm vi 10', ['bang10', 'cong10', 'tru10']], [13, 'Luyện tập chung', null]] },
    { id: 4, hk: 1, ten: 'Làm quen với một số hình khối', widgets: [],
      lt: '<ul><li><b>Khối lập phương</b>: như con xúc xắc, các mặt là hình vuông bằng nhau.</li><li><b>Khối hộp chữ nhật</b>: như hộp sữa, viên gạch.</li><li><b>Vị trí</b>: trên – dưới, trước – sau, trái – phải, ở giữa.</li></ul>',
      bai: [[14, 'Khối lập phương, khối hộp chữ nhật', ['khoi1']], [15, 'Vị trí, định hướng trong không gian', ['vitri']], [16, 'Luyện tập chung', null]] },
    { id: 5, hk: 1, ten: 'Ôn tập học kì 1', review: true, widgets: [],
      lt: '<ul><li>Đếm, đọc, viết, so sánh các số đến 10.</li><li>Cộng, trừ trong phạm vi 10.</li><li>Nhận biết hình vuông, hình tròn, hình tam giác, hình chữ nhật, khối lập phương, khối hộp chữ nhật.</li></ul>',
      bai: [[17, 'Ôn tập các số trong phạm vi 10', ['dem', 'sosanh10', 'mayvamay']], [18, 'Ôn tập phép cộng, phép trừ trong phạm vi 10', ['cong10', 'tru10']], [19, 'Ôn tập hình học', ['hinh1', 'khoi1', 'vitri']], [20, 'Ôn tập chung', 'HK1']] },
    { id: 6, hk: 2, ten: 'Các số đến 100', widgets: ['placevalue:99'],
      lt: '<ul><li><b>Số có hai chữ số</b> gồm số chục và số đơn vị: 47 gồm 4 chục và 7 đơn vị.</li><li>Các số tròn chục: 10, 20, …, 90. Số 100 đọc là "một trăm".</li><li><b>So sánh</b>: so số chục trước; số chục bằng nhau thì so số đơn vị.</li><li>Bảng các số từ 1 đến 100: mỗi hàng 10 số, đi sang phải thêm 1, đi xuống thêm 10.</li></ul>',
      bai: [[21, 'Số có hai chữ số', ['so100']], [22, 'So sánh số có hai chữ số', ['so100']], [23, 'Bảng các số từ 1 đến 100', ['so100']], [24, 'Luyện tập chung', null]] },
    { id: 7, hk: 2, ten: 'Độ dài và đo độ dài', widgets: ['thuoc'],
      lt: '<ul><li><b>Dài hơn – ngắn hơn</b>: đặt hai vật thẳng hàng ở một đầu để so sánh.</li><li>Đơn vị đo độ dài: <b>xăng-ti-mét</b>, viết tắt <b>cm</b>.</li><li>Đo bằng thước: đặt vạch 0 trùng một đầu vật, đọc số ở đầu kia.</li><li>Có thể ước lượng bằng gang tay, sải tay, bước chân.</li></ul>',
      bai: [[25, 'Dài hơn, ngắn hơn', ['daingan']], [26, 'Đơn vị đo độ dài', ['daingan', 'cm']], [27, 'Thực hành ước lượng và đo độ dài', ['daingan', 'cm']], [28, 'Luyện tập chung', null]] },
    { id: 8, hk: 2, ten: 'Phép cộng, phép trừ (không nhớ) trong phạm vi 100', widgets: ['dattinh'],
      lt: '<ul><li>Đặt tính thẳng cột: đơn vị thẳng đơn vị, chục thẳng chục.</li><li>Tính từ phải sang trái: đơn vị trước, chục sau.</li><li>Ví dụ: 34 + 25: 4 + 5 = 9, viết 9; 3 + 2 = 5, viết 5 → 59.</li><li>Ví dụ: 68 − 23: 8 − 3 = 5; 6 − 2 = 4 → 45.</li></ul>',
      bai: [[29, 'Phép cộng số có hai chữ số với số có một chữ số', ['cong100kn']], [30, 'Phép cộng số có hai chữ số với số có hai chữ số', ['cong100kn']], [31, 'Phép trừ số có hai chữ số cho số có một chữ số', ['tru100kn']], [32, 'Phép trừ số có hai chữ số cho số có hai chữ số', ['tru100kn', 'toan100']], [33, 'Luyện tập chung', null]] },
    { id: 9, hk: 2, ten: 'Thời gian. Giờ và lịch', widgets: ['dongho'],
      lt: '<ul><li>Đồng hồ có kim ngắn (chỉ giờ) và kim dài (chỉ phút).</li><li><b>Giờ đúng</b>: kim dài chỉ số 12, kim ngắn chỉ số nào là mấy giờ.</li><li>Một tuần có 7 ngày: Thứ Hai, Thứ Ba, Thứ Tư, Thứ Năm, Thứ Sáu, Thứ Bảy, Chủ nhật.</li><li>Xem lịch để biết hôm nay là thứ mấy, ngày bao nhiêu.</li></ul>',
      bai: [[34, 'Xem giờ đúng trên đồng hồ', ['gio1']], [35, 'Các ngày trong tuần', ['ngaytuan']], [36, 'Thực hành xem lịch và giờ', ['gio1', 'ngaytuan']], [37, 'Luyện tập chung', null]] },
    { id: 10, hk: 2, ten: 'Ôn tập cuối năm', review: true, widgets: [],
      lt: '<ul><li>Các số đến 100: đọc, viết, so sánh.</li><li>Cộng, trừ trong phạm vi 10 và phạm vi 100 (không nhớ).</li><li>Đo độ dài bằng cm, xem giờ đúng, xem lịch.</li></ul>',
      bai: [[38, 'Ôn tập các số và phép tính trong phạm vi 10', ['dem', 'cong10', 'tru10']], [39, 'Ôn tập các số và phép tính trong phạm vi 100', ['so100', 'cong100kn', 'tru100kn']], [40, 'Ôn tập hình học và đo lường', ['hinh1', 'daingan', 'gio1']], [41, 'Ôn tập chung', 'HK2']] }
  ];
  PLT.buildCourse({ id: 'toan-1', lop: 1, topics: T, gens: G, essays: ESSAY });
})();

/* Toán lớp 2 – Kết nối tri thức với cuộc sống. Lý thuyết tóm tắt bằng lời mới; câu hỏi sinh tự động. */
(function () {
  'use strict';
  const { r, pick, shuffle, fmt, docSo, cap, mc, fill, fill1, match, order, sort, essay, clockSVG, shapeSVG, groupsHTML, numlineHTML, tableHTML } = PLT.U;
  const { big, distinct, soGen, calcGen, EMO } = PLT.M;
  const G = {};
  const row = (n, e) => `<div class="emo">${Array(n).fill(e).join(' ')}</div>`;
  const dt = (a, s, b) => `<span class="dt">${a} ${s} ${b}</span>`;

  // ---- Ôn tập số đến 100 ----
  G.so100 = () => {
    const t = r(0, 3);
    if (t === 0) { const step = pick([1, 10]); let s = r(0, 90); if (step === 10) s = s - (s % 10); s = Math.min(s, 100 - 9 * step); const seq = Array.from({ length: 10 }, (_, i) => s + i * step); const h = shuffle([1, 2, 3, 4, 5, 6, 7, 8]).slice(0, 2).sort((a, b) => a - b); return fill('Điền số còn thiếu trên tia số:' + numlineHTML(seq, h), [{ pre: 'Số thứ nhất:', ans: seq[h[0]] }, { pre: 'Số thứ hai:', ans: seq[h[1]] }], `Các số liền nhau trên tia số hơn kém nhau ${step}.`); }
    const n = r(11, 98);
    if (t === 1) { const s = Math.random() < 0.5; return mc(`Số liền ${s ? 'sau' : 'trước'} của <b>${n}</b> là:`, s ? n + 1 : n - 1, [s ? n - 1 : n + 1, n + 10, n - 10], `Số liền ${s ? 'sau hơn' : 'trước kém'} ${n} một đơn vị.`); }
    if (t === 2) return mc(`Số <b>${n}</b> viết thành tổng các chục và đơn vị là:`, `${n - (n % 10)} + ${n % 10}`, [`${n % 10} + ${n - (n % 10)}0`, `${Math.floor(n / 10)} + ${n % 10}`, `${n - (n % 10) + 10} + ${n % 10}`], `${n} gồm ${Math.floor(n / 10)} chục và ${n % 10} đơn vị.`);
    const nums = distinct(4, () => r(10, 99)); return order('Xếp các số theo thứ tự từ bé đến lớn:', nums.slice().sort((a, b) => a - b).map(String), 'So sánh số chục trước, rồi số đơn vị.');
  };
  G.thanhphan = () => {
    if (Math.random() < 0.5) { const a = r(10, 60), b = r(10, 39), s = a + b; const k = pick([['tổng', s], ['số hạng', pick([a, b])]]); return mc(`Trong phép cộng <b>${a} + ${b} = ${s}</b>, số <b>${k[1]}</b> được gọi là:`, cap(k[0]), ['Tổng', 'Số hạng', 'Hiệu', 'Số trừ'].filter((x) => x !== cap(k[0])).slice(0, 3), 'Số hạng + Số hạng = Tổng.'); }
    const a = r(40, 99), b = r(10, 39), d = a - b; const k = pick([['số bị trừ', a], ['số trừ', b], ['hiệu', d]]); return mc(`Trong phép trừ <b>${a} − ${b} = ${d}</b>, số <b>${k[1]}</b> được gọi là:`, cap(k[0]), ['Số bị trừ', 'Số trừ', 'Hiệu', 'Tổng'].filter((x) => x !== cap(k[0])).slice(0, 3), 'Số bị trừ − Số trừ = Hiệu.');
  };
  G.honkem = () => { const a = r(30, 99), b = r(10, a - 5); return Math.random() < 0.5 ? fill1(`Số <b>${a}</b> hơn số <b>${b}</b> bao nhiêu đơn vị?`, a - b, `Lấy số lớn trừ số bé: ${a} − ${b} = ${a - b}.`) : fill1(`Lan cao ${a + 60} cm, Bình cao ${b + 60} cm. Lan cao hơn Bình bao nhiêu xăng-ti-mét?`, a - b, `${a + 60} − ${b + 60} = ${a - b} (cm).`, 'cm'); };
  function noCarry(op) { let a, b; do { a = r(10, 99); b = r(10, 89); } while (op === '+' ? (a % 10 + b % 10 > 9 || a + b > 99) : (b > a || a % 10 < b % 10)); return [a, b, op === '+' ? a + b : a - b]; }
  function carry(op, one) { let a, b; do { if (op === '+') { a = r(11, 89); b = one ? r(2, 9) : r(11, 89); } else { a = r(20, 99); b = one ? r(2, 9) : r(11, a - 1); } } while (op === '+' ? (a % 10 + b % 10 < 10 || a + b > 100) : (a % 10 >= b % 10 || b >= a)); return [a, b, op === '+' ? a + b : a - b]; }
  const ctGen = (fn, op) => () => { const [a, b, ans] = fn(op, Math.random() < 0.4); const s = op === '+' ? '+' : '−'; const exp = `${a} ${s} ${b} = ${ans}. Đặt tính thẳng cột, tính từ hàng đơn vị${fn === carry ? (op === '+' ? '; đơn vị cộng được từ 10 trở lên thì nhớ 1 sang hàng chục' : '; đơn vị trên bé hơn đơn vị dưới thì mượn 1 chục, rồi nhớ 1 vào hàng chục của số trừ') : ''}.`; const t = r(0, 2); if (t === 0) return fill1(`Đặt tính rồi tính: ${dt(a, s, b)}`, ans, exp); if (t === 1) return mc(big(`${a} ${s} ${b} = ?`), ans, [ans + 10, ans - 10, ans + 1], exp); return op === '+' ? fill1(`Tìm số hạng: <b>${a} + ? = ${ans}</b>`, b, `Lấy tổng trừ số hạng đã biết: ${ans} − ${a} = ${b}.`) : fill1(`Tìm số bị trừ: <b>? − ${b} = ${ans}</b>`, a, `Lấy hiệu cộng số trừ: ${ans} + ${b} = ${a}.`); };
  G.ct100kn = () => ctGen(noCarry, pick(['+', '-']))();
  // ---- Cộng, trừ qua 10 trong phạm vi 20 ----
  G.cong20 = () => { let a, b; do { a = r(2, 9); b = r(2, 9); } while (a + b < 11); const t = r(0, 2); if (t === 0) return mc(big(`${a} + ${b} = ?`), a + b, [a + b + 1, a + b - 1, a + b - 10], `Tách ${b} = ${10 - a} + ${b - (10 - a)}: ${a} + ${10 - a} = 10, 10 + ${b - (10 - a)} = ${a + b}.`); if (t === 1) return fill1(`Điền số: <b>${a} + ? = ${a + b}</b>`, b, `${a + b} − ${a} = ${b}.`); return sort('Phép tính nào có kết quả bằng 12?', shuffle([[3, 9], [4, 8], [5, 7], [6, 6], [5, 8], [4, 9], [3, 8], [7, 6]]).slice(0, 5).map(([x, y]) => ({ t: `${x} + ${y}`, cat: x + y === 12 ? 'Bằng 12' : 'Khác 12' })), ['Bằng 12', 'Khác 12'], 'Nhẩm từng phép cộng qua 10.'); };
  G.tru20 = () => { let a, b; do { a = r(11, 18); b = r(2, 9); } while (a - b >= 10); return Math.random() < 0.6 ? mc(big(`${a} − ${b} = ?`), a - b, [a - b + 1, a - b - 1, a - b + 10], `Tách: ${a} − ${a - 10} = 10; 10 − ${b - (a - 10)} = ${a - b}.`) : fill1(`Điền số: <b>${a} − ? = ${a - b}</b>`, b, `${a} − ${a - b} = ${b}.`); };
  G.thembot = () => { const a = r(5, 15), b = r(2, 9); return Math.random() < 0.5 ? fill1(`Trong bến có ${a} ô tô, có thêm ${b} ô tô đến. Hỏi trong bến có tất cả bao nhiêu ô tô?`, a + b, `Thêm vào → phép cộng: ${a} + ${b} = ${a + b} (ô tô).`, 'ô tô') : fill1(`Trên cây có ${a + b} quả cam, mẹ hái đi ${b} quả. Hỏi trên cây còn lại bao nhiêu quả?`, a, `Bớt đi → phép trừ: ${a + b} − ${b} = ${a} (quả).`, 'quả'); };
  G.nhieuit = () => { const a = r(8, 30), b = r(2, 9); return Math.random() < 0.5 ? fill1(`Hà có ${a} nhãn vở, Mai có nhiều hơn Hà ${b} nhãn vở. Hỏi Mai có bao nhiêu nhãn vở?`, a + b, `"Nhiều hơn" → cộng: ${a} + ${b} = ${a + b}.`, 'nhãn vở') : fill1(`Hàng trên có ${a + b} bông hoa, hàng dưới ít hơn hàng trên ${b} bông hoa. Hỏi hàng dưới có bao nhiêu bông hoa?`, a, `"Ít hơn" → trừ: ${a + b} − ${b} = ${a}.`, 'bông'); };
  // ---- kg, lít ----
  G.kgl = () => { const t = r(0, 2), a = r(2, 20), b = r(1, a - 1 || 1); if (t === 0) return fill1(`Bao gạo nặng ${a} kg, bao đỗ nhẹ hơn bao gạo ${b} kg. Bao đỗ nặng bao nhiêu ki-lô-gam?`, a - b, `${a} − ${b} = ${a - b} (kg).`, 'kg'); if (t === 1) return fill1(`Can thứ nhất có ${a} l nước, can thứ hai có ${b} l nước. Cả hai can có bao nhiêu lít nước?`, a + b, `${a} + ${b} = ${a + b} (l).`, 'l'); return mc('Đơn vị nào dùng để đo lượng nước trong can?', 'Lít (l)', ['Ki-lô-gam (kg)', 'Xăng-ti-mét (cm)', 'Giờ'], 'Đo khối lượng (nặng, nhẹ) dùng kg; đo lượng chất lỏng dùng lít.'); };
  // ---- Có nhớ trong phạm vi 100 ----
  G.cong100cn = ctGen(carry, '+'); G.tru100cn = ctGen(carry, '-');
  // ---- Hình phẳng ----
  G.hinh2 = () => {
    const t = r(0, 2);
    if (t === 0) { const s = [r(2, 6), r(2, 6), r(2, 6)]; return fill1(`<svg class="pic" viewBox="0 0 260 90" width="260"><polyline points="10,80 80,20 160,70 250,15" fill="none" stroke="#4a7dff" stroke-width="3"/><text x="30" y="45" font-size="12">${s[0]} cm</text><text x="110" y="62" font-size="12">${s[1]} cm</text><text x="200" y="60" font-size="12">${s[2]} cm</text></svg>Độ dài đường gấp khúc là bao nhiêu xăng-ti-mét?`, s[0] + s[1] + s[2], `Cộng độ dài các đoạn thẳng: ${s.join(' + ')} = ${s[0] + s[1] + s[2]} (cm).`, 'cm'); }
    if (t === 1) { const k = pick(['hình tứ giác', 'hình tam giác', 'hình tròn']); return mc(`Hình dưới đây là hình gì?${shapeSVG(k)}`, cap(k), ['Hình tứ giác', 'Hình tam giác', 'Hình tròn'].filter((x) => x !== cap(k)), 'Hình tứ giác có 4 cạnh, 4 đỉnh; hình tam giác có 3 cạnh.'); }
    return mc('Đường nào sau đây là đường cong?', 'Đường viền quả bóng', ['Mép thước kẻ', 'Cạnh bàn', 'Đoạn thẳng AB'], 'Đường thẳng không bị uốn; đường cong bị uốn lượn.');
  };
  // ---- Ngày, giờ ----
  const THU = ['Chủ nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
  G.gio2 = () => {
    const t = r(0, 2);
    if (t === 0) { const h = r(1, 12), m = pick([0, 15, 30]); const rd = (hh, mm) => (mm === 0 ? `${hh} giờ` : `${hh} giờ ${mm} phút`); return mc(`Đồng hồ chỉ mấy giờ?${clockSVG(h, m)}`, rd(h, m), [rd(h, (m + 15) % 45), rd(h % 12 + 1, m), rd(m / 5 || 12, h * 5 % 60)].filter((x) => x !== rd(h, m)), 'Kim ngắn chỉ giờ; kim dài chỉ số 3 là 15 phút, chỉ số 6 là 30 phút (giờ rưỡi).'); }
    if (t === 1) { const h = r(13, 23); return mc(`<b>${h} giờ</b> còn gọi là:`, `${h - 12} giờ ${h < 18 ? 'chiều' : 'tối'}`, [`${h - 10} giờ ${h < 18 ? 'chiều' : 'tối'}`, `${h - 12} giờ sáng`, `${h} giờ sáng`], `Từ 13 giờ trở đi, trừ đi 12 để đọc theo buổi: ${h} − 12 = ${h - 12}.`); }
    return mc('Một ngày có bao nhiêu giờ?', 24, [12, 60, 7], '1 ngày = 24 giờ; 1 giờ = 60 phút.');
  };
  G.ngaythang = () => { const d = r(1, 20), w = r(0, 6), k = pick([7, 14]); return Math.random() < 0.7 ? mc(`<div class="calendar"><b>${THU[w]}</b><span>${d}</span>Tháng 5</div>Ngày ${d} tháng 5 là ${THU[w]}. Ngày ${d + k} tháng 5 là thứ mấy?`, THU[w], shuffle(THU.filter((x) => x !== THU[w])).slice(0, 3), `Cứ 7 ngày lại đến cùng thứ: ${d} + ${k} = ${d + k} → vẫn là ${THU[w]}.`) : mc('Tháng 4 có bao nhiêu ngày?', 30, [31, 28, 29], 'Tháng 4, 6, 9, 11 có 30 ngày.'); };
  // ---- Phép nhân, phép chia ----
  G.nhan25 = () => {
    const a = pick([2, 5]), b = r(1, 10), t = r(0, 3);
    if (t === 0) { const e = pick(EMO), g = Math.min(b, 6), ch = [[g, a], [a, g], [g + 1, a], [g, a + 1]].filter((v, i, arr) => arr.findIndex((w) => w[0] === v[0] && w[1] === v[1]) === i).map(([x, y]) => groupsHTML(x, y, e)); return mc(`Hình nào phù hợp với phép nhân <b>${a} × ${g}</b>?`, ch[0], ch.slice(1), `${a} × ${g}: ${a} được lấy ${g} lần → ${g} nhóm, mỗi nhóm ${a}.`); }
    if (t === 1) return mc(big(`${a} × ${b} = ?`), a * b, [a * b + a, a * b - a, a + b], `${a} × ${b} = ${a * b}.`);
    if (t === 2) return fill1(`Mỗi đĩa có ${a} cái bánh. Hỏi ${b} đĩa có bao nhiêu cái bánh?`, a * b, `${a} được lấy ${b} lần: ${a} × ${b} = ${a * b} (cái).`, 'cái');
    return mc(`Tổng <b>${Array(b > 5 ? 4 : b).fill(a).join(' + ')}</b> viết thành phép nhân là:`, `${a} × ${b > 5 ? 4 : b}`, [`${b > 5 ? 4 : b} × ${b > 5 ? 4 : b}`, `${a} + ${b > 5 ? 4 : b}`, `${a} × ${(b > 5 ? 4 : b) + 1}`], `${a} được lấy ${b > 5 ? 4 : b} lần.`);
  };
  G.chia25 = () => { const a = pick([2, 5]), b = r(1, 10); return Math.random() < 0.5 ? mc(big(`${a * b} : ${a} = ?`), b, [b + 1, b - 1 || 11, a], `Vì ${a} × ${b} = ${a * b} nên ${a * b} : ${a} = ${b}.`) : fill1(`Có ${a * b} cái kẹo chia đều cho ${a} bạn. Mỗi bạn được mấy cái kẹo?`, b, `${a * b} : ${a} = ${b} (cái).`, 'cái'); };
  G.thuaso = () => { const a = r(2, 5), b = r(2, 10); if (Math.random() < 0.5) { const k = pick([['thừa số', pick([a, b])], ['tích', a * b]]); if (a === b) return G.thuaso(); return mc(`Trong phép nhân <b>${a} × ${b} = ${a * b}</b>, số <b>${k[1]}</b> gọi là:`, cap(k[0]), ['Thừa số', 'Tích', 'Thương', 'Số chia'].filter((x) => x !== cap(k[0])).slice(0, 3), 'Thừa số × Thừa số = Tích.'); } const k = pick([['số bị chia', a * b], ['số chia', a], ['thương', b]]); if (a === b) return G.thuaso(); return mc(`Trong phép chia <b>${a * b} : ${a} = ${b}</b>, số <b>${k[1]}</b> gọi là:`, cap(k[0]), ['Số bị chia', 'Số chia', 'Thương', 'Tích'].filter((x) => x !== cap(k[0])).slice(0, 3), 'Số bị chia : Số chia = Thương.'); };
  G.khoi2 = () => { const it = pick([['Lon nước ngọt', 'Khối trụ'], ['Quả bóng', 'Khối cầu'], ['Hộp sữa giấy', 'Khối hộp chữ nhật'], ['Con xúc xắc', 'Khối lập phương'], ['Viên bi', 'Khối cầu'], ['Ống nước', 'Khối trụ']]); return mc(`${it[0]} có dạng khối gì?`, it[1], ['Khối trụ', 'Khối cầu', 'Khối hộp chữ nhật', 'Khối lập phương'].filter((x) => x !== it[1]).slice(0, 3), 'Khối cầu tròn đều mọi phía (quả bóng); khối trụ có hai mặt đáy là hình tròn (lon nước).'); };
  // ---- Số trong phạm vi 1000 ----
  G.so1000 = soGen(3);
  G.trontram = () => { const t = r(0, 2); if (t === 0) { const n = r(1, 8) * 100; return mc(`Số tròn trăm liền sau của <b>${n}</b> là:`, n + 100, [n + 10, n + 1, n - 100], 'Các số tròn trăm: 100, 200, …, 900, 1 000 — hơn kém nhau 100.'); } if (t === 1) { const n = r(10, 99) * 10; return mc(`Số <b>${n}</b> là:`, 'Số tròn chục', ['Số tròn trăm', 'Số có hai chữ số', 'Số tròn nghìn'].filter((x) => !(n % 100 === 0 && x === 'Số tròn trăm')), 'Số tròn chục có chữ số tận cùng là 0.'); } const n = r(101, 999); const h = Math.floor(n / 100) * 100, c = Math.floor(n % 100 / 10) * 10, d = n % 10; return mc(`Số <b>${n}</b> viết thành tổng các trăm, chục, đơn vị là:`, [h, c, d].filter(Boolean).join(' + '), [`${Math.floor(n / 100)} + ${Math.floor(n % 100 / 10)} + ${d}`, [h, d * 10, c / 10].filter(Boolean).join(' + '), [h + 100, c, d].filter(Boolean).join(' + ')], `${n} gồm ${Math.floor(n / 100)} trăm, ${Math.floor(n % 100 / 10)} chục, ${d} đơn vị.`); };
  G.sosanh1000 = () => { const a = r(100, 999), b = Math.random() < 0.2 ? a : r(100, 999); return mc(`Chọn dấu thích hợp: ${big(`${a} … ${b}`)}`, a > b ? '>' : a < b ? '<' : '=', ['>', '<', '='], 'So sánh hàng trăm, rồi hàng chục, rồi hàng đơn vị.'); };
  // ---- Độ dài, tiền ----
  G.dodai2b = () => { const q = pick([['1 dm = ? cm', 10], ['1 m = ? dm', 10], ['1 m = ? cm', 100], ['1 km = ? m', 1000]]); if (Math.random() < 0.5) return mc(`<b>${q[0]}</b>`, q[1], [10, 100, 1000, 1].filter((x) => x !== q[1]), '1 dm = 10 cm; 1 m = 10 dm = 100 cm; 1 km = 1 000 m.'); const x = r(2, 9); return fill1(`${x} dm = ? cm`, x * 10, `1 dm = 10 cm nên ${x} dm = ${x * 10} cm.`, 'cm'); };
  G.tien2 = () => { const notes = [1000, 2000, 5000, 10000]; const [v1, v2] = shuffle(notes).slice(0, 2), c1 = r(1, 3), c2 = r(1, 2); return fill1(`Em có ${c1} tờ ${fmt(v1)} đồng và ${c2} tờ ${fmt(v2)} đồng. Em có tất cả bao nhiêu tiền?`, c1 * v1 + c2 * v2, `${fmt(c1 * v1)} + ${fmt(c2 * v2)} = ${fmt(c1 * v1 + c2 * v2)} (đồng).`, 'đồng'); };
  // ---- Cộng, trừ trong phạm vi 1000 ----
  G.cong1000 = calcGen('+', 100, 800, 10, 199, 999);
  G.tru1000 = calcGen('-', 200, 999, 10, 199);
  // ---- Thống kê, xác suất ----
  G.kiemdem = () => { const kinds = shuffle([['🍎', 'quả táo'], ['🍊', 'quả cam'], ['🍌', 'quả chuối']]); const list = Array.from({ length: r(8, 12) }, () => pick(kinds)); const k = pick(kinds); const n = list.filter((x) => x === k).length; return fill1(`Kiểm đếm: có bao nhiêu <b>${k[1]}</b>?<div class="emo">${list.map((x) => x[0]).join(' ')}</div>`, n, `Đánh dấu và đếm từng ${k[1]}: có ${n}.`); };
  G.bieudo2 = () => { const ppl = ['Lớp 2A', 'Lớp 2B', 'Lớp 2C'], c = distinct(3, () => r(2, 8)), ic = '🌳', i = r(0, 2); return mc(`<div class="cap">Số cây mỗi lớp trồng được</div>${tableHTML(['Lớp', 'Số cây'], ppl.map((p, j) => [p, `<span class="icons">${ic.repeat(c[j])}</span>`]))}<p>Mỗi ${ic} là 1 cây.</p>${ppl[i]} trồng được mấy cây?`, c[i], [c[i] + 1, c[i] - 1, c[(i + 1) % 3]], `Đếm số ${ic} ở hàng ${ppl[i]}: ${c[i]}.`, 'cây'); };
  G.chacchan = () => { const cols = ['đỏ', 'xanh', 'vàng'], have = shuffle(cols).slice(0, r(1, 2)); const t = r(0, 2); let tg, ans; if (t === 0) { tg = cols.find((c) => !have.includes(c)); ans = 'Không thể'; } else if (have.length === 1) { tg = have[0]; ans = 'Chắc chắn'; } else { tg = pick(have); ans = 'Có thể'; } return mc(`Trong túi có ${have.map((c) => r(2, 5) + ' quả bóng ' + c).join(' và ')}. Lấy ra 1 quả bóng, ${ans === 'Chắc chắn' ? '' : ''}khả năng lấy được bóng <b>${tg}</b> là:`, ans, ['Chắc chắn', 'Có thể', 'Không thể'], 'Chắc chắn: túi chỉ có loại đó. Có thể: túi có loại đó và loại khác. Không thể: túi không có loại đó.'); };

  const ESSAY = {
    1: [() => { const [a, b, s] = carry('+'); return essay(`Đội Một trồng được ${a} cây, Đội Hai trồng được ${b} cây. Hỏi cả hai đội trồng được bao nhiêu cây? (Trình bày: bài giải, phép tính, đáp số)`, 2, `Cả hai đội trồng được: ${a} + ${b} = ${s} (cây). Đáp số: ${s} cây.`, [s]); },
      () => { const a = r(30, 60), b = r(5, 15); return essay(`Thùng thứ nhất có ${a} l dầu, thùng thứ hai ít hơn thùng thứ nhất ${b} l dầu. Hỏi thùng thứ hai có bao nhiêu lít dầu?`, 2, `Thùng thứ hai có: ${a} − ${b} = ${a - b} (l). Đáp số: ${a - b} l dầu.`, [a - b]); }],
    2: [() => { const a = pick([2, 5]), b = r(3, 10); return essay(`Mỗi hộp có ${a} cái bánh. Hỏi ${b} hộp như thế có bao nhiêu cái bánh?`, 2, `${b} hộp có: ${a} × ${b} = ${a * b} (cái). Đáp số: ${a * b} cái bánh.`, [a * b]); },
      () => { const a = r(300, 600), b = r(100, 300); return essay(`Một trường có ${a} học sinh nam và ${b} học sinh nữ. Hỏi trường đó có tất cả bao nhiêu học sinh?`, 2, `Số học sinh: ${a} + ${b} = ${a + b} (học sinh). Đáp số: ${a + b} học sinh.`, [a + b]); }]
  };

  const T = [
    { id: 1, hk: 1, ten: 'Ôn tập và bổ sung', widgets: ['placevalue:99'],
      lt: '<ul><li>Số có hai chữ số gồm chục và đơn vị: 56 = 50 + 6.</li><li><b>Tia số</b>: các số tăng dần từ trái sang phải; số liền trước kém 1, số liền sau hơn 1.</li><li><b>Thành phần phép cộng</b>: Số hạng + Số hạng = Tổng. <b>Phép trừ</b>: Số bị trừ − Số trừ = Hiệu.</li><li><b>Hơn, kém nhau bao nhiêu</b>: lấy số lớn trừ số bé.</li></ul>',
      bai: [[1, 'Ôn tập các số đến 100', ['so100']], [2, 'Tia số. Số liền trước, số liền sau', ['so100']], [3, 'Các thành phần của phép cộng, phép trừ', ['thanhphan']], [4, 'Hơn, kém nhau bao nhiêu', ['honkem']], [5, 'Ôn tập phép cộng, phép trừ (không nhớ) trong phạm vi 100', ['ct100kn']], [6, 'Luyện tập chung', null]] },
    { id: 2, hk: 1, ten: 'Phép cộng, phép trừ trong phạm vi 20', widgets: ['congtru:20'],
      lt: '<ul><li><b>Cộng qua 10</b>: tách số để làm tròn 10. Ví dụ 8 + 5: tách 5 = 2 + 3; 8 + 2 = 10; 10 + 3 = 13.</li><li><b>Trừ qua 10</b>: 13 − 5: tách 5 = 3 + 2; 13 − 3 = 10; 10 − 2 = 8.</li><li><b>Bài toán thêm, nhiều hơn</b> → phép cộng. <b>Bài toán bớt, ít hơn</b> → phép trừ.</li></ul>',
      bai: [[7, 'Phép cộng (qua 10) trong phạm vi 20', ['cong20']], [8, 'Bảng cộng (qua 10)', ['cong20']], [9, 'Bài toán về thêm, bớt một số đơn vị', ['thembot']], [10, 'Luyện tập chung', null], [11, 'Phép trừ (qua 10) trong phạm vi 20', ['tru20']], [12, 'Bảng trừ (qua 10)', ['tru20']], [13, 'Bài toán về nhiều hơn, ít hơn một số đơn vị', ['nhieuit']], [14, 'Luyện tập chung', null]] },
    { id: 3, hk: 1, ten: 'Làm quen với khối lượng, dung tích', widgets: [],
      lt: '<ul><li><b>Ki-lô-gam (kg)</b>: đơn vị đo khối lượng (nặng – nhẹ). Dùng cân để cân.</li><li><b>Lít (l)</b>: đơn vị đo lượng chất lỏng (nước, sữa, dầu…).</li><li>Cộng, trừ số đo như cộng, trừ số, nhớ ghi đơn vị.</li></ul>',
      bai: [[15, 'Ki-lô-gam', ['kgl']], [16, 'Lít', ['kgl']], [17, 'Thực hành và trải nghiệm với các đơn vị ki-lô-gam, lít', ['kgl']], [18, 'Luyện tập chung', null]] },
    { id: 4, hk: 1, ten: 'Phép cộng, phép trừ (có nhớ) trong phạm vi 100', widgets: ['dattinh'],
      lt: '<ul><li><b>Cộng có nhớ</b>: 38 + 25: 8 + 5 = 13, viết 3 nhớ 1; 3 + 2 = 5, thêm 1 bằng 6 → 63.</li><li><b>Trừ có nhớ</b>: 52 − 17: 2 không trừ được 7, lấy 12 − 7 = 5, viết 5 nhớ 1; 1 thêm 1 bằng 2, 5 − 2 = 3 → 35.</li><li>Luôn đặt tính thẳng cột và tính từ phải sang trái.</li></ul>',
      bai: [[19, 'Phép cộng (có nhớ) số có hai chữ số với số có một chữ số', ['cong100cn']], [20, 'Phép cộng (có nhớ) số có hai chữ số với số có hai chữ số', ['cong100cn']], [21, 'Luyện tập chung', null], [22, 'Phép trừ (có nhớ) số có hai chữ số cho số có một chữ số', ['tru100cn']], [23, 'Phép trừ (có nhớ) số có hai chữ số cho số có hai chữ số', ['tru100cn']], [24, 'Luyện tập chung', null]] },
    { id: 5, hk: 1, ten: 'Làm quen với hình phẳng', widgets: [],
      lt: '<ul><li><b>Điểm, đoạn thẳng, đường thẳng, đường cong</b>. Ba điểm cùng nằm trên một đường thẳng gọi là ba điểm thẳng hàng.</li><li><b>Đường gấp khúc</b> gồm nhiều đoạn thẳng nối tiếp; độ dài = tổng độ dài các đoạn.</li><li><b>Hình tứ giác</b> có 4 cạnh, 4 đỉnh.</li></ul>',
      bai: [[25, 'Điểm, đoạn thẳng, đường thẳng, đường cong, ba điểm thẳng hàng', ['hinh2']], [26, 'Đường gấp khúc. Hình tứ giác', ['hinh2']], [27, 'Thực hành gấp, cắt, ghép, xếp hình. Vẽ đoạn thẳng', ['hinh2']], [28, 'Luyện tập chung', null]] },
    { id: 6, hk: 1, ten: 'Ngày – giờ, giờ – phút, ngày – tháng', widgets: ['dongho'],
      lt: '<ul><li>1 ngày = 24 giờ; 1 giờ = 60 phút.</li><li>Buổi chiều, tối có thể đọc 2 cách: 15 giờ = 3 giờ chiều; 20 giờ = 8 giờ tối.</li><li>Kim dài chỉ số 3: 15 phút; chỉ số 6: 30 phút (giờ rưỡi).</li><li>Xem lịch: tháng 4, 6, 9, 11 có 30 ngày; tháng 1, 3, 5, 7, 8, 10, 12 có 31 ngày; tháng 2 có 28 hoặc 29 ngày.</li></ul>',
      bai: [[29, 'Ngày – giờ, giờ – phút', ['gio2']], [30, 'Ngày – tháng', ['ngaythang']], [31, 'Thực hành và trải nghiệm xem đồng hồ, xem lịch', ['gio2', 'ngaythang']], [32, 'Luyện tập chung', null]] },
    { id: 7, hk: 1, ten: 'Ôn tập học kì 1', review: true, widgets: [],
      lt: '<ul><li>Cộng, trừ trong phạm vi 20 và 100 (có nhớ, không nhớ).</li><li>Bài toán thêm/bớt, nhiều hơn/ít hơn.</li><li>kg, lít; đường gấp khúc, hình tứ giác; xem giờ, xem lịch.</li></ul>',
      bai: [[33, 'Ôn tập phép cộng, phép trừ trong phạm vi 20, 100', ['cong20', 'tru20', 'cong100cn', 'tru100cn']], [34, 'Ôn tập hình phẳng', ['hinh2']], [35, 'Ôn tập đo lường', ['kgl', 'gio2', 'ngaythang']], [36, 'Ôn tập chung', 'HK1']] },
    { id: 8, hk: 2, ten: 'Phép nhân, phép chia', widgets: ['bangnhan'],
      lt: '<ul><li><b>Phép nhân</b> là cách viết gọn tổng các số hạng bằng nhau: 2 + 2 + 2 = 2 × 3 (2 được lấy 3 lần).</li><li>Thừa số × Thừa số = Tích.</li><li><b>Phép chia</b> là chia đều: 10 : 2 = 5. Số bị chia : Số chia = Thương.</li><li>Từ phép nhân suy ra phép chia: 5 × 2 = 10 → 10 : 2 = 5 và 10 : 5 = 2.</li><li>Học thuộc bảng nhân 2, 5 và bảng chia 2, 5.</li></ul>',
      bai: [[37, 'Phép nhân', ['nhan25']], [38, 'Thừa số, tích', ['thuaso']], [39, 'Bảng nhân 2', ['nhan25']], [40, 'Bảng nhân 5', ['nhan25']], [41, 'Phép chia', ['chia25']], [42, 'Số bị chia, số chia, thương', ['thuaso']], [43, 'Bảng chia 2', ['chia25']], [44, 'Bảng chia 5', ['chia25']], [45, 'Luyện tập chung', null]] },
    { id: 9, hk: 2, ten: 'Làm quen với hình khối', widgets: [],
      lt: '<ul><li><b>Khối trụ</b>: hai mặt đáy là hình tròn (lon nước, ống nước).</li><li><b>Khối cầu</b>: tròn đều mọi phía (quả bóng, viên bi).</li><li>Nhắc lại: khối lập phương, khối hộp chữ nhật.</li></ul>',
      bai: [[46, 'Khối trụ, khối cầu', ['khoi2']], [47, 'Luyện tập chung', null]] },
    { id: 10, hk: 2, ten: 'Các số trong phạm vi 1 000', widgets: ['placevalue:999'],
      lt: '<ul><li>10 đơn vị = 1 chục; 10 chục = 1 trăm; 10 trăm = 1 nghìn.</li><li><b>Số có ba chữ số</b>: trăm – chục – đơn vị. 365 = 300 + 60 + 5, đọc "ba trăm sáu mươi lăm".</li><li>Số tròn chục: tận cùng 0 (240). Số tròn trăm: tận cùng 00 (300).</li><li><b>So sánh</b>: so hàng trăm → hàng chục → hàng đơn vị.</li></ul>',
      bai: [[48, 'Đơn vị, chục, trăm, nghìn', ['trontram']], [49, 'Các số tròn trăm, tròn chục', ['trontram']], [50, 'So sánh các số tròn trăm, tròn chục', ['sosanh1000']], [51, 'Số có ba chữ số', ['so1000']], [52, 'Viết số thành tổng các trăm, chục, đơn vị', ['trontram']], [53, 'So sánh các số có ba chữ số', ['sosanh1000']], [54, 'Luyện tập chung', null]] },
    { id: 11, hk: 2, ten: 'Độ dài và đơn vị đo độ dài. Tiền Việt Nam', widgets: ['thuoc'],
      lt: '<ul><li>1 dm = 10 cm; 1 m = 10 dm = 100 cm; 1 km = 1 000 m.</li><li>Đo vật ngắn dùng cm, dm; đo chiều dài lớp học dùng m; đo quãng đường dùng km.</li><li><b>Tiền Việt Nam</b>: các tờ 1 000, 2 000, 5 000, 10 000 đồng… Cộng các tờ tiền để biết tổng số tiền.</li></ul>',
      bai: [[55, 'Đề-xi-mét. Mét. Ki-lô-mét', ['dodai2b']], [56, 'Giới thiệu tiền Việt Nam', ['tien2']], [57, 'Thực hành và trải nghiệm đo độ dài', ['dodai2b']], [58, 'Luyện tập chung', null]] },
    { id: 12, hk: 2, ten: 'Phép cộng, phép trừ trong phạm vi 1 000', widgets: ['dattinh'],
      lt: '<ul><li>Đặt tính thẳng cột: trăm thẳng trăm, chục thẳng chục, đơn vị thẳng đơn vị.</li><li>Tính từ phải sang trái; có nhớ thì nhớ 1 sang hàng bên trái.</li><li>Kiểm tra: lấy hiệu cộng số trừ phải bằng số bị trừ.</li></ul>',
      bai: [[59, 'Phép cộng (không nhớ) trong phạm vi 1 000', ['cong1000']], [60, 'Phép cộng (có nhớ) trong phạm vi 1 000', ['cong1000']], [61, 'Phép trừ (không nhớ) trong phạm vi 1 000', ['tru1000']], [62, 'Phép trừ (có nhớ) trong phạm vi 1 000', ['tru1000']], [63, 'Luyện tập chung', null]] },
    { id: 13, hk: 2, ten: 'Làm quen với yếu tố thống kê, xác suất', widgets: ['bocbi'],
      lt: '<ul><li><b>Thu thập, phân loại, kiểm đếm</b>: chia đồ vật theo nhóm rồi đếm từng nhóm.</li><li><b>Biểu đồ tranh</b>: mỗi hình biểu diễn một (hoặc nhiều) đối tượng.</li><li><b>Chắc chắn – có thể – không thể</b>: dự đoán khả năng xảy ra của sự việc.</li></ul>',
      bai: [[64, 'Thu thập, phân loại, kiểm đếm số liệu', ['kiemdem']], [65, 'Biểu đồ tranh', ['bieudo2']], [66, 'Chắc chắn, có thể, không thể', ['chacchan']], [67, 'Thực hành và trải nghiệm thu thập, phân loại, kiểm đếm số liệu', ['kiemdem', 'bieudo2']]] },
    { id: 14, hk: 2, ten: 'Ôn tập cuối năm', review: true, widgets: [],
      lt: '<ul><li>Các số trong phạm vi 1 000; cộng, trừ trong phạm vi 100 và 1 000.</li><li>Bảng nhân, chia 2 và 5.</li><li>Hình học, đo lường (cm, dm, m, km, kg, l, giờ, tiền).</li><li>Kiểm đếm số liệu, biểu đồ tranh; chắc chắn – có thể – không thể.</li></ul>',
      bai: [[68, 'Ôn tập các số trong phạm vi 1 000', ['so1000', 'sosanh1000']], [69, 'Ôn tập phép cộng, phép trừ trong phạm vi 100', ['cong100cn', 'tru100cn']], [70, 'Ôn tập phép cộng, phép trừ trong phạm vi 1 000', ['cong1000', 'tru1000']], [71, 'Ôn tập phép nhân, phép chia', ['nhan25', 'chia25']], [72, 'Ôn tập hình học', ['hinh2', 'khoi2']], [73, 'Ôn tập đo lường', ['dodai2b', 'kgl', 'gio2', 'tien2']], [74, 'Ôn tập kiểm đếm số liệu và lựa chọn khả năng', ['kiemdem', 'chacchan']], [75, 'Ôn tập chung', 'HK2']] }
  ];
  PLT.buildCourse({ id: 'toan-2', lop: 2, topics: T, gens: G, essays: ESSAY });
})();

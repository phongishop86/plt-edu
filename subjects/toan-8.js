/* Toán lớp 8 – Kết nối tri thức với cuộc sống. Lý thuyết tóm tắt bằng lời mới; câu hỏi sinh tự động. */
(function () {
  'use strict';
  const { r, pick, shuffle, fmt, frac, fr, gcd, sup, par, poly, sqrtH, mc, fill, fill1, order, sort, essay, tableHTML } = PLT.U;
  const { big, distinct, barSVG, fillV, fillFrac } = PLT.M;
  const G = {};
  const nz = (lo, hi) => { let v; do { v = r(lo, hi); } while (v === 0); return v; };
  const L = () => [0, 'Luyện tập chung', null], BT = (n) => [0, 'Bài tập cuối chương ' + n, null];
  const lin = (a, b, x) => poly([a, b], x || 'x'); // ax + b
  const sg = (v) => (v < 0 ? '− ' + Math.abs(v) : '+ ' + v);

  // ---- I. Đa thức ----
  G.donthuc = () => {
    const t = r(0, 2);
    if (t === 0) { const a = nz(-9, 9), m = r(1, 5), n = r(1, 5); return fill1(`Bậc của đơn thức <b>${fmt(a)}x<sup>${m}</sup>y<sup>${n}</sup></b> là:`, m + n, `Bậc của đơn thức là tổng số mũ của các biến: ${m} + ${n} = ${m + n}.`); }
    if (t === 1) { const a = nz(-6, 6), b = nz(-6, 6); return fill(`Thu gọn: <b>${fmt(a)}x<sup>2</sup>y + ${par(b)}x<sup>2</sup>y</b> = k·x<sup>2</sup>y.`, [{ pre: 'k =', ans: a + b }], `Cộng các đơn thức đồng dạng: cộng hệ số, giữ phần biến: ${fmt(a + b)}x<sup>2</sup>y.`); }
    const a = nz(-5, 5), b = nz(-5, 5), x = nz(-3, 3), y = nz(-3, 3); return fill1(`Tính giá trị của đa thức <b>${fmt(a)}xy ${sg(b)}x<sup>2</sup></b> tại x = ${fmt(x)}, y = ${fmt(y)}.`, a * x * y + b * x * x, `Thay số: ${fmt(a)}·${par(x)}·${par(y)} ${sg(b)}·${par(x)}<sup>2</sup> = ${fmt(a * x * y + b * x * x)}.`);
  };
  G.phepDT8 = () => {
    const t = r(0, 2);
    if (t === 0) { const a = nz(-5, 5), b = nz(-5, 5), c = nz(-5, 5); return fill(`Nhân: <b>${fmt(a)}x(${poly([b, c])})</b> = px<sup>2</sup> + qx.`, [{ pre: 'p =', ans: a * b }, { pre: 'q =', ans: a * c }], `Nhân đơn thức với từng hạng tử: ${poly([a * b, a * c, 0])}.`); }
    if (t === 1) { const a = nz(-5, 5), b = nz(-5, 5), c = nz(-5, 5), d = nz(-5, 5); return fill(`Nhân: <b>(${lin(a, b)})(${lin(c, d)})</b> = px<sup>2</sup> + qx + r.`, [{ pre: 'p =', ans: a * c }, { pre: 'q =', ans: a * d + b * c }, { pre: 'r =', ans: b * d }], `Nhân từng hạng tử của đa thức này với đa thức kia: ${poly([a * c, a * d + b * c, b * d])}.`); }
    const k = nz(-4, 4), a = nz(-6, 6), b = nz(-6, 6); return fill(`Chia: <b>(${poly([a * k, b * k, 0])}) : ${fmt(k)}x</b> = mx + n.`, [{ pre: 'm =', ans: a }, { pre: 'n =', ans: b }], `Chia từng hạng tử cho ${fmt(k)}x: ${poly([a, b])}.`);
  };

  // ---- II. Hằng đẳng thức ----
  G.hdt = () => {
    const t = r(0, 4), a = nz(1, 9);
    if (t === 0) return fill(`Khai triển: <b>(x + ${a})<sup>2</sup></b> = x<sup>2</sup> + px + q.`, [{ pre: 'p =', ans: 2 * a }, { pre: 'q =', ans: a * a }], `(A + B)<sup>2</sup> = A<sup>2</sup> + 2AB + B<sup>2</sup> → x<sup>2</sup> + ${2 * a}x + ${a * a}.`);
    if (t === 1) return fill(`Khai triển: <b>(x − ${a})<sup>2</sup></b> = x<sup>2</sup> + px + q.`, [{ pre: 'p =', ans: -2 * a }, { pre: 'q =', ans: a * a }], `(A − B)<sup>2</sup> = A<sup>2</sup> − 2AB + B<sup>2</sup> → x<sup>2</sup> − ${2 * a}x + ${a * a}.`);
    if (t === 2) { const n = pick([99, 101, 98, 102, 49, 51, 199]); return fill1(`Tính nhanh: <b>${n}<sup>2</sup></b>`, n * n, `Viết ${n} = ${Math.round(n / 50) * 50} ${n > Math.round(n / 50) * 50 ? '+' : '−'} ${Math.abs(n - Math.round(n / 50) * 50)} rồi dùng hằng đẳng thức bình phương: ${fmt(n * n)}.`); }
    if (t === 3) { const m = pick([[51, 49], [102, 98], [37, 43], [64, 56], [205, 195]]); return fill1(`Tính nhanh: <b>${m[0]} · ${m[1]}</b>`, m[0] * m[1], `(A + B)(A − B) = A<sup>2</sup> − B<sup>2</sup> với A = ${(m[0] + m[1]) / 2}, B = ${(m[0] - m[1]) / 2}: ${fmt(m[0] * m[1])}.`); }
    return fill(`Khai triển: <b>(x + ${a})<sup>3</sup></b> = x<sup>3</sup> + px<sup>2</sup> + qx + r.`, [{ pre: 'p =', ans: 3 * a }, { pre: 'q =', ans: 3 * a * a }, { pre: 'r =', ans: a * a * a }], '(A + B)<sup>3</sup> = A<sup>3</sup> + 3A<sup>2</sup>B + 3AB<sup>2</sup> + B<sup>3</sup>.');
  };
  G.phantich = () => {
    const t = r(0, 2), a = nz(1, 9);
    if (t === 0) return mc(`Phân tích thành nhân tử: <b>x<sup>2</sup> − ${a * a}</b>`, `(x − ${a})(x + ${a})`, [`(x − ${a})<sup>2</sup>`, `(x + ${a})<sup>2</sup>`, `x(x − ${a * a})`], 'Hiệu hai bình phương: A<sup>2</sup> − B<sup>2</sup> = (A − B)(A + B).');
    if (t === 1) { const k = nz(2, 9); return mc(`Phân tích thành nhân tử: <b>${k}x<sup>2</sup> + ${k * a}x</b>`, `${k}x(x + ${a})`, [`${k}(x<sup>2</sup> + ${a}x)`, `x(${k}x + ${a})`, `${k}x(x + ${k * a})`], 'Đặt nhân tử chung (lấy cả hệ số chung và biến chung ra ngoài).');
    }
    return mc(`Phân tích thành nhân tử: <b>x<sup>2</sup> + ${2 * a}x + ${a * a}</b>`, `(x + ${a})<sup>2</sup>`, [`(x − ${a})<sup>2</sup>`, `(x + ${a})(x − ${a})`, `(x + ${2 * a})<sup>2</sup>`], 'Nhận ra dạng A<sup>2</sup> + 2AB + B<sup>2</sup> = (A + B)<sup>2</sup>.');
  };

  // ---- III. Tứ giác ----
  G.tugiac = () => {
    const t = r(0, 3);
    if (t === 0) { const a = r(60, 120), b = r(60, 120), c = r(60, 110); if (360 - a - b - c <= 20) return G.tugiac(); return fill1(`Tứ giác ABCD có Â = ${a}°, B̂ = ${b}°, Ĉ = ${c}°. Tính D̂.`, 360 - a - b - c, `Tổng bốn góc của tứ giác bằng 360°: D̂ = 360° − ${a}° − ${b}° − ${c}° = ${360 - a - b - c}°.`, '°'); }
    if (t === 1) { const a = r(40, 85); return fill1(`Hình thang cân ABCD (AB ∥ CD) có Ĉ = ${a}°. Tính B̂.`, 180 - a, `Trong hình thang, hai góc kề một cạnh bên bù nhau: B̂ = 180° − ${a}° = ${180 - a}°.`, '°'); }
    if (t === 2) { const a = r(40, 140); return fill1(`Hình bình hành ABCD có Â = ${a}°. Tính Ĉ.`, a, 'Trong hình bình hành, các góc đối bằng nhau.', '°'); }
    const k = pick([['Hình bình hành có một góc vuông', 'Hình chữ nhật'], ['Hình bình hành có hai cạnh kề bằng nhau', 'Hình thoi'], ['Hình chữ nhật có hai cạnh kề bằng nhau', 'Hình vuông'], ['Hình thoi có một góc vuông', 'Hình vuông'], ['Tứ giác có hai đường chéo cắt nhau tại trung điểm mỗi đường', 'Hình bình hành']]);
    return mc(`${k[0]} là:`, k[1], ['Hình bình hành', 'Hình chữ nhật', 'Hình thoi', 'Hình vuông', 'Hình thang cân'].filter((x) => x !== k[1]).slice(0, 3), 'Nhớ các dấu hiệu nhận biết hình bình hành, hình chữ nhật, hình thoi, hình vuông.');
  };

  // ---- IV. Định lí Thalès ----
  G.thales = () => {
    const t = r(0, 2);
    if (t === 0) { const am = r(2, 8), mb = r(2, 8), an = r(2, 10) * am; const nc = an / am * mb; return fillV(`Tam giác ABC có MN ∥ BC (M ∈ AB, N ∈ AC). Biết AM = ${am} cm, MB = ${mb} cm, AN = ${an} cm. Tính NC.`, nc, fmt(nc), `Định lí Thalès: ${frac('AM', 'MB')} = ${frac('AN', 'NC')} ⇒ NC = ${an} · ${mb} : ${am} = ${fmt(nc)} (cm).`, 'cm'); }
    if (t === 1) { const bc = r(4, 20) * 2; return fill1(`M, N lần lượt là trung điểm của AB, AC. Biết BC = ${bc} cm. Tính MN.`, bc / 2, `MN là đường trung bình của tam giác: MN ∥ BC và MN = BC : 2 = ${bc / 2} (cm).`, 'cm'); }
    const ab = r(3, 9), ac = r(3, 9), bc = (ab + ac) * r(1, 3); if (ab === ac) return G.thales(); const bd = bc * ab / (ab + ac); return fillV(`AD là tia phân giác của góc A trong tam giác ABC (D ∈ BC). Biết AB = ${ab} cm, AC = ${ac} cm, BC = ${bc} cm. Tính BD.`, bd, fmt(bd), `${frac('BD', 'DC')} = ${frac('AB', 'AC')} = ${frac(ab, ac)} ⇒ BD = ${bc} · ${ab} : ${ab + ac} = ${fmt(bd)} (cm).`, 'cm');
  };

  // ---- V. Dữ liệu và biểu đồ ----
  G.dulieu8 = () => { const Lb = ['2021', '2022', '2023', '2024', '2025'], v = Array.from({ length: 5 }, () => r(10, 40) * 10); const t = r(0, 2); const ch = `<div class="cap">Số máy tính bán được qua các năm</div>${barSVG(Lb, v, 'máy')}`; if (t === 0) { const i = r(0, 3); return fill1(`${ch}Năm ${Lb[i + 1]} bán nhiều hơn (dương) hay ít hơn (âm) năm ${Lb[i]} bao nhiêu máy?`, v[i + 1] - v[i], `${v[i + 1]} − ${v[i]} = ${fmt(v[i + 1] - v[i])}.`, 'máy'); } if (t === 1) { const i = v.indexOf(Math.max(...v)); return mc(`${ch}Năm nào bán được nhiều nhất?`, Lb[i], Lb.filter((_, j) => j !== i).slice(0, 3), 'Tìm cột cao nhất.'); } return mc('Để biểu diễn sự thay đổi của nhiệt độ trong ngày theo từng giờ, nên dùng loại biểu đồ nào?', 'Biểu đồ đoạn thẳng', ['Biểu đồ hình quạt tròn', 'Biểu đồ tranh', 'Bảng thống kê'], 'Biểu đồ đoạn thẳng thể hiện xu hướng thay đổi theo thời gian; biểu đồ quạt thể hiện tỉ lệ các phần trong tổng thể.'); };

  // ---- VI. Phân thức đại số ----
  G.phanthuc = () => {
    const t = r(0, 2);
    if (t === 0) { const a = nz(-9, 9); return fill1(`Điều kiện xác định của phân thức ${frac('3x', 'x ' + sg(-a))} là x ≠ ?`, a, `Mẫu thức khác 0: x ${sg(-a)} ≠ 0 ⇔ x ≠ ${fmt(a)}.`); }
    if (t === 1) { const a = nz(1, 9); return mc(`Rút gọn phân thức ${frac(`x<sup>2</sup> − ${a * a}`, `x − ${a}`)} được:`, `x + ${a}`, [`x − ${a}`, `x<sup>2</sup> + ${a}`, `${a}`], `x<sup>2</sup> − ${a * a} = (x − ${a})(x + ${a}); chia cả tử và mẫu cho x − ${a}.`); }
    const a = nz(1, 6), b = nz(1, 6), x = r(1, 9); return fillFrac(`Tính giá trị của ${frac('x + ' + a, 'x + ' + b)} tại x = ${x}.`, x + a, x + b, `Thay x = ${x}: ${frac(x + a, x + b)}.`);
  };
  G.phepPT = () => { const a = nz(1, 9), b = nz(1, 9); if (Math.random() < 0.5) return mc(`Tính: ${frac('x', 'x + ' + a)} + ${frac(a, 'x + ' + a)}`, '1', [frac('x + ' + a, 'x'), frac('x', a), '0'], `Cùng mẫu: ${frac('x + ' + a, 'x + ' + a)} = 1.`); return mc(`Tính: ${frac(a + 'x', 'x − ' + b)} · ${frac('x − ' + b, 'x')}`, String(a), [frac(a, 'x'), 'x', frac(a + 'x', 'x')], 'Nhân tử với tử, mẫu với mẫu rồi rút gọn các nhân tử chung.'); };

  // ---- VII. Phương trình bậc nhất và hàm số bậc nhất ----
  G.ptbn = () => { const a = nz(-9, 9), x = nz(-12, 12), b = r(-20, 20); return fill1(`Giải phương trình: <b>${poly([a, b])} = ${fmt(a * x + b)}</b>`, x, `${fmt(a)}x = ${fmt(a * x + b)} ${sg(-b)} = ${fmt(a * x)} ⇒ x = ${fmt(x)}.`); };
  G.lapPT = () => { const x = r(5, 40), d = r(2, 15); return fill1(`Tổng số tuổi của hai anh em là ${2 * x + d}, anh hơn em ${d} tuổi. Tuổi của em là:`, x, `Gọi tuổi em là x: x + (x + ${d}) = ${2 * x + d} ⇒ 2x = ${2 * x} ⇒ x = ${x}.`, 'tuổi'); };
  G.hamso8 = () => {
    const a = nz(-5, 5), b = r(-8, 8), t = r(0, 3);
    if (t === 0) { const x = r(-4, 4); return fill1(`Cho hàm số y = ${poly([a, b])}. Tính y khi x = ${fmt(x)}.`, a * x + b, `y = ${fmt(a)}·${par(x)} ${sg(b)} = ${fmt(a * x + b)}.`); }
    if (t === 1) return fill1(`Hệ số góc của đường thẳng y = ${poly([a, b])} là:`, a, 'Đường thẳng y = ax + b có hệ số góc là a.');
    if (t === 2) { const b2 = b + nz(-4, 4); return mc(`Hai đường thẳng y = ${poly([a, b])} và y = ${poly([a, b2])}:`, 'Song song', ['Cắt nhau', 'Trùng nhau', 'Vuông góc'], 'Cùng hệ số góc a, khác tung độ gốc b ⇒ song song.'); }
    return fill1(`Đồ thị y = ${poly([a, b])} cắt trục tung tại điểm có tung độ:`, b, 'Cho x = 0 thì y = b.');
  };

  // ---- VIII. Xác suất ----
  G.xs8 = () => { const t = r(0, 2); if (t === 0) { const red = r(2, 8), blue = r(2, 8); return fillFrac(`Hộp có ${red} viên bi đỏ và ${blue} viên bi xanh. Lấy ngẫu nhiên 1 viên. Xác suất lấy được bi đỏ là:`, red, red + blue, `Số kết quả thuận lợi : số kết quả có thể = ${red} : ${red + blue}.`); } if (t === 1) { const ev = pick([['số chấm chẵn', 3], ['số chấm chia hết cho 3', 2], ['số chấm lớn hơn 4', 2], ['số chấm là số nguyên tố', 3]]); return fillFrac(`Gieo một xúc xắc cân đối. Xác suất xuất hiện mặt có ${ev[0]} là:`, ev[1], 6, `Có ${ev[1]} kết quả thuận lợi trong 6 kết quả: ${fr(ev[1], 6)}.`); } const n = pick([20, 50, 100]), k = r(3, n - 3); return fillFrac(`Tung một đồng xu ${n} lần thấy ${k} lần mặt sấp. Xác suất thực nghiệm của biến cố "mặt sấp" là:`, k, n, `${k} : ${n}.`); };

  // ---- IX. Tam giác đồng dạng ----
  G.dongdang = () => {
    const t = r(0, 2);
    if (t === 0) { const k = pick([2, 3, 1.5, 0.5]), a = r(2, 10) * 2; return fillV(`ΔA'B'C' ∽ ΔABC theo tỉ số k = ${fmt(k)}. Biết AB = ${a} cm. Tính A'B'.`, a * k, fmt(a * k), `A'B' = k · AB = ${fmt(k)} · ${a} = ${fmt(a * k)} (cm).`, 'cm'); }
    if (t === 1) { const p = pick([[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15], [7, 24, 25]]); return Math.random() < 0.5 ? fill1(`Tam giác ABC vuông tại A có AB = ${p[0]} cm, AC = ${p[1]} cm. Tính BC.`, p[2], `Định lí Pythagore: BC<sup>2</sup> = ${p[0]}<sup>2</sup> + ${p[1]}<sup>2</sup> = ${p[2] * p[2]} ⇒ BC = ${p[2]} (cm).`, 'cm') : fill1(`Tam giác vuông có cạnh huyền ${p[2]} cm, một cạnh góc vuông ${p[0]} cm. Cạnh góc vuông còn lại là:`, p[1], `${p[2]}<sup>2</sup> − ${p[0]}<sup>2</sup> = ${p[1] * p[1]} ⇒ ${p[1]} cm.`, 'cm'); }
    const k = pick([['AB/A\'B\' = BC/B\'C\' = CA/C\'A\'', 'c.c.c'], ['Â = Â\' và B̂ = B̂\'', 'g.g'], ['AB/A\'B\' = AC/A\'C\' và Â = Â\'', 'c.g.c']]); return mc(`ΔABC và ΔA'B'C' có ${k[0]}. Hai tam giác đồng dạng theo trường hợp:`, k[1], ['c.c.c', 'c.g.c', 'g.g', 'c.c.g'].filter((x) => x !== k[1]), 'Ba trường hợp đồng dạng: c.c.c (ba cạnh tỉ lệ), c.g.c (hai cạnh tỉ lệ, góc xen giữa bằng nhau), g.g (hai góc bằng nhau).');
  };

  // ---- X. Hình chóp ----
  G.chop = () => { const t = r(0, 1); if (t === 0) { const a = r(2, 10), h = r(3, 12); return fill1(`Hình chóp tứ giác đều có cạnh đáy ${a} cm, chiều cao ${h * 3} cm. Thể tích là:`, a * a * h, `V = ${frac(1, 3)} · S<sub>đáy</sub> · h = ${frac(1, 3)} · ${a * a} · ${h * 3} = ${a * a * h} (cm³).`, 'cm³'); } const a = r(2, 10), d = r(3, 12); return fill1(`Hình chóp tứ giác đều có cạnh đáy ${a} cm, trung đoạn ${d} cm. Diện tích xung quanh là:`, 2 * a * d, `Sxq = nửa chu vi đáy · trung đoạn = ${2 * a} · ${d} = ${2 * a * d} (cm²).`, 'cm²'); };

  const ESSAY = {
    1: [() => { const a = nz(1, 6), b = nz(1, 6); return essay(`Phân tích đa thức thành nhân tử: a) x<sup>2</sup> − ${a * a}; b) x<sup>2</sup> + ${2 * b}x + ${b * b}.`, 2, `a) (x − ${a})(x + ${a}); b) (x + ${b})<sup>2</sup>.`, [a, b]); },
      () => { const bc = r(5, 15) * 2; return essay(`Cho tam giác ABC, M và N là trung điểm của AB và AC, BC = ${bc} cm. Chứng minh MN ∥ BC và tính MN.`, 2, `MN là đường trung bình của ΔABC nên MN ∥ BC và MN = BC/2 = ${bc / 2} cm.`, [bc / 2]); }],
    2: [() => { const [v, v2, S] = pick([[40, 50, 200], [30, 40, 120], [40, 60, 240], [50, 60, 300], [36, 45, 180]]); const d = S / v - S / v2; return essay(`Một ô tô đi từ A đến B với vận tốc ${v} km/h, lúc về đi với vận tốc ${v2} km/h nên thời gian về ít hơn thời gian đi ${fmt(d)} giờ. Lập phương trình và tính quãng đường AB.`, 2, `Gọi AB = x (km), x > 0: ${frac('x', v)} − ${frac('x', v2)} = ${fmt(d)} ⇒ x = ${S}. Quãng đường AB dài ${S} km.`, [S]); },
      () => { const p = pick([[3, 4, 5], [6, 8, 10], [5, 12, 13]]); return essay(`Một chiếc thang dài ${p[2]} m dựa vào tường, chân thang cách tường ${p[0]} m. Hỏi đầu thang chạm tường ở độ cao bao nhiêu mét?`, 2, `Theo định lí Pythagore: h<sup>2</sup> = ${p[2]}<sup>2</sup> − ${p[0]}<sup>2</sup> = ${p[1] * p[1]} ⇒ h = ${p[1]} m.`, [p[1]]); }]
  };

  const T = [
    { id: 1, hk: 1, ten: 'Đa thức', widgets: [],
      lt: '<ul><li><b>Đơn thức</b>: tích của số và các biến. Bậc = tổng số mũ các biến. Đơn thức đồng dạng có cùng phần biến.</li><li><b>Đa thức</b>: tổng các đơn thức. Bậc của đa thức là bậc cao nhất của hạng tử (sau khi thu gọn).</li><li>Cộng, trừ đa thức: cộng các hạng tử đồng dạng. Nhân: nhân từng hạng tử với từng hạng tử. Chia đa thức cho đơn thức: chia từng hạng tử.</li></ul>',
      bai: [[1, 'Đơn thức', ['donthuc']], [2, 'Đa thức', ['donthuc']], [3, 'Phép cộng và phép trừ đa thức', ['donthuc']], L(), [4, 'Phép nhân đa thức', ['phepDT8']], [5, 'Phép chia đa thức cho đơn thức', ['phepDT8']], L(), BT('I')] },
    { id: 2, hk: 1, ten: 'Hằng đẳng thức đáng nhớ và ứng dụng', widgets: [],
      lt: '<ul><li>(A + B)<sup>2</sup> = A<sup>2</sup> + 2AB + B<sup>2</sup>; (A − B)<sup>2</sup> = A<sup>2</sup> − 2AB + B<sup>2</sup>; A<sup>2</sup> − B<sup>2</sup> = (A − B)(A + B).</li><li>(A + B)<sup>3</sup> = A<sup>3</sup> + 3A<sup>2</sup>B + 3AB<sup>2</sup> + B<sup>3</sup>; (A − B)<sup>3</sup> = A<sup>3</sup> − 3A<sup>2</sup>B + 3AB<sup>2</sup> − B<sup>3</sup>.</li><li>A<sup>3</sup> + B<sup>3</sup> = (A + B)(A<sup>2</sup> − AB + B<sup>2</sup>); A<sup>3</sup> − B<sup>3</sup> = (A − B)(A<sup>2</sup> + AB + B<sup>2</sup>).</li><li><b>Phân tích thành nhân tử</b>: đặt nhân tử chung, dùng hằng đẳng thức, nhóm hạng tử.</li></ul>',
      bai: [[6, 'Hiệu hai bình phương. Bình phương của một tổng hay một hiệu', ['hdt']], [7, 'Lập phương của một tổng. Lập phương của một hiệu', ['hdt']], [8, 'Tổng và hiệu hai lập phương', ['hdt']], L(), [9, 'Phân tích đa thức thành nhân tử', ['phantich']], L(), BT('II')] },
    { id: 3, hk: 1, ten: 'Tứ giác', widgets: [],
      lt: '<ul><li>Tổng bốn góc của một tứ giác bằng 360°.</li><li><b>Hình thang cân</b>: hai góc kề một đáy bằng nhau, hai đường chéo bằng nhau.</li><li><b>Hình bình hành</b>: các cạnh đối song song và bằng nhau, các góc đối bằng nhau, hai đường chéo cắt nhau tại trung điểm mỗi đường.</li><li><b>Hình chữ nhật</b>: hình bình hành có một góc vuông (đường chéo bằng nhau). <b>Hình thoi</b>: hình bình hành có hai cạnh kề bằng nhau (đường chéo vuông góc). <b>Hình vuông</b>: vừa là hình chữ nhật vừa là hình thoi.</li></ul>',
      bai: [[10, 'Tứ giác', ['tugiac']], [11, 'Hình thang cân', ['tugiac']], L(), [12, 'Hình bình hành', ['tugiac']], L(), [13, 'Hình chữ nhật', ['tugiac']], [14, 'Hình thoi và hình vuông', ['tugiac']], L(), BT('III')] },
    { id: 4, hk: 1, ten: 'Định lí Thalès', widgets: [],
      lt: `<ul><li><b>Định lí Thalès</b>: đường thẳng song song với một cạnh của tam giác, cắt hai cạnh còn lại thì định ra trên hai cạnh đó những đoạn thẳng tương ứng tỉ lệ. Có định lí đảo.</li><li><b>Đường trung bình</b> của tam giác song song với cạnh thứ ba và bằng nửa cạnh ấy.</li><li><b>Tính chất đường phân giác</b>: AD là phân giác góc A thì ${frac('DB', 'DC')} = ${frac('AB', 'AC')}.</li></ul>`,
      bai: [[15, 'Định lí Thalès trong tam giác', ['thales']], [16, 'Đường trung bình của tam giác', ['thales']], [17, 'Tính chất đường phân giác của tam giác', ['thales']], L(), BT('IV')] },
    { id: 5, hk: 1, ten: 'Dữ liệu và biểu đồ', widgets: [],
      lt: '<ul><li>Thu thập, phân loại dữ liệu; chọn cách biểu diễn phù hợp.</li><li>Bảng thống kê, biểu đồ tranh, biểu đồ cột, cột kép, đoạn thẳng, hình quạt tròn.</li><li>Phân tích số liệu dựa vào biểu đồ: so sánh, tìm xu hướng tăng/giảm, phát hiện số liệu bất thường.</li></ul>',
      bai: [[18, 'Thu thập và phân loại dữ liệu', ['dulieu8']], [19, 'Biểu diễn dữ liệu bằng bảng, biểu đồ', ['dulieu8']], [20, 'Phân tích số liệu thống kê dựa vào biểu đồ', ['dulieu8']], L(), BT('V')] },
    { id: 6, hk: 2, ten: 'Phân thức đại số', widgets: [],
      lt: `<ul><li><b>Phân thức đại số</b> ${frac('A', 'B')} với A, B là đa thức, B ≠ 0. Điều kiện xác định: mẫu khác 0.</li><li><b>Tính chất cơ bản</b>: nhân/chia cả tử và mẫu với cùng một đa thức khác 0. Rút gọn: phân tích tử, mẫu thành nhân tử rồi chia nhân tử chung.</li><li>Cộng, trừ: quy đồng mẫu thức. Nhân: tử nhân tử, mẫu nhân mẫu. Chia: nhân với phân thức nghịch đảo.</li></ul>`,
      bai: [[21, 'Phân thức đại số', ['phanthuc']], [22, 'Tính chất cơ bản của phân thức đại số', ['phanthuc']], L(), [23, 'Phép cộng và phép trừ phân thức đại số', ['phepPT']], [24, 'Phép nhân và phép chia phân thức đại số', ['phepPT']], L(), BT('VI')] },
    { id: 7, hk: 2, ten: 'Phương trình bậc nhất và hàm số bậc nhất', widgets: ['dothi'],
      lt: '<ul><li><b>Phương trình bậc nhất một ẩn</b> ax + b = 0 (a ≠ 0) có nghiệm duy nhất x = −b/a.</li><li><b>Giải bài toán bằng cách lập phương trình</b>: chọn ẩn và điều kiện → lập phương trình → giải → đối chiếu điều kiện, trả lời.</li><li><b>Hàm số bậc nhất</b> y = ax + b (a ≠ 0) có đồ thị là đường thẳng; a là <b>hệ số góc</b>. Hai đường thẳng song song khi cùng a, khác b; cắt nhau khi khác a.</li></ul>',
      bai: [[25, 'Phương trình bậc nhất một ẩn', ['ptbn']], [26, 'Giải bài toán bằng cách lập phương trình', ['lapPT']], L(), [27, 'Khái niệm hàm số và đồ thị của hàm số', ['hamso8']], [28, 'Hàm số bậc nhất và đồ thị của hàm số bậc nhất', ['hamso8']], [29, 'Hệ số góc của đường thẳng', ['hamso8']], L(), BT('VII')] },
    { id: 8, hk: 2, ten: 'Mở đầu về tính xác suất của biến cố', widgets: ['bocbi'],
      lt: '<ul><li>Kết quả có thể, kết quả thuận lợi cho một biến cố.</li><li>Khi các kết quả đồng khả năng: P(A) = số kết quả thuận lợi : số kết quả có thể.</li><li>Xác suất thực nghiệm (số lần xảy ra : số lần thử) xấp xỉ xác suất khi số lần thử đủ lớn.</li></ul>',
      bai: [[30, 'Kết quả có thể và kết quả thuận lợi', ['xs8']], [31, 'Cách tính xác suất của biến cố bằng tỉ số', ['xs8']], [32, 'Mối liên hệ giữa xác suất thực nghiệm với xác suất và ứng dụng', ['xs8']], L(), BT('VIII')] },
    { id: 9, hk: 2, ten: 'Tam giác đồng dạng', widgets: [],
      lt: '<ul><li>ΔA\'B\'C\' ∽ ΔABC theo tỉ số k: các góc tương ứng bằng nhau, các cạnh tương ứng tỉ lệ (A\'B\' = k·AB…).</li><li>Ba trường hợp đồng dạng: <b>c.c.c</b>, <b>c.g.c</b>, <b>g.g</b>.</li><li><b>Định lí Pythagore</b>: tam giác vuông tại A ⇔ BC<sup>2</sup> = AB<sup>2</sup> + AC<sup>2</sup>.</li><li>Hai tam giác vuông đồng dạng khi có một góc nhọn bằng nhau, hoặc hai cạnh góc vuông tỉ lệ.</li></ul>',
      bai: [[33, 'Hai tam giác đồng dạng', ['dongdang']], [34, 'Ba trường hợp đồng dạng của hai tam giác', ['dongdang']], L(), [35, 'Định lí Pythagore và ứng dụng', ['dongdang']], [36, 'Các trường hợp đồng dạng của hai tam giác vuông', ['dongdang']], [37, 'Hình đồng dạng', ['dongdang']], L(), BT('IX')] },
    { id: 10, hk: 2, ten: 'Một số hình khối trong thực tiễn', widgets: [],
      lt: `<ul><li><b>Hình chóp tam giác đều</b>, <b>hình chóp tứ giác đều</b>: đáy là đa giác đều, các mặt bên là tam giác cân bằng nhau.</li><li>Sxq = nửa chu vi đáy · trung đoạn (p · d).</li><li>V = ${frac(1, 3)} · S<sub>đáy</sub> · chiều cao.</li></ul>`,
      bai: [[38, 'Hình chóp tam giác đều', ['chop']], [39, 'Hình chóp tứ giác đều', ['chop']], L(), BT('X')] }
  ];
  PLT.buildCourse({ id: 'toan-8', lop: 8, topics: T, gens: G, essays: ESSAY });
})();

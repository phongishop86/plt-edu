/* Toán lớp 7 – Kết nối tri thức với cuộc sống. Lý thuyết tóm tắt bằng lời mới; câu hỏi sinh tự động. */
(function () {
  'use strict';
  const { r, pick, shuffle, fmt, frac, fr, gcd, sup, par, poly, sqrtH, mc, fill, fill1, order, sort, essay, tableHTML } = PLT.U;
  const { big, distinct, barSVG, fillV, fillFrac } = PLT.M;
  const G = {};
  const nz = (lo, hi) => { let v; do { v = r(lo, hi); } while (v === 0); return v; };
  const F = (a, b) => fr(a, b); // hiển thị phân số rút gọn (có dấu)
  const L = () => [0, 'Luyện tập chung', null], BT = (n) => [0, 'Bài tập cuối chương ' + n, null];

  // ---- I. Số hữu tỉ ----
  G.shh = () => {
    const a = nz(-9, 9), b = r(2, 9), c = nz(-9, 9), d = r(2, 9), op = pick(['+', '−', '×', ':']);
    let n, m; if (op === '+') { n = a * d + c * b; m = b * d; } else if (op === '−') { n = a * d - c * b; m = b * d; } else if (op === '×') { n = a * c; m = b * d; } else { n = a * d; m = b * c; }
    const how = { '+': 'Quy đồng mẫu số rồi cộng tử số.', '−': 'Quy đồng mẫu số rồi trừ tử số.', '×': 'Nhân tử với tử, mẫu với mẫu (chú ý dấu).', ':': 'Nhân với số nghịch đảo của số chia.' }[op];
    return fillFrac(`Tính: ${F(a, b)} ${op} ${c < 0 ? '(' + F(c, d) + ')' : F(c, d)}`, n, m, `${how} Kết quả: ${F(n, m)}.`);
  };
  G.luythuaQ = () => {
    const t = r(0, 2);
    if (t === 0) { const a = nz(-3, 3), b = r(2, 4), n = r(2, 3); return fillFrac(`Tính: (${F(a, b)})<sup>${n}</sup>`, Math.pow(a, n), Math.pow(b, n), `(${frac('a', 'b')})<sup>n</sup> = ${frac('a<sup>n</sup>', 'b<sup>n</sup>')} → ${F(Math.pow(a, n), Math.pow(b, n))}.`); }
    if (t === 1) { const m = r(2, 9), n = r(2, 9); return fill(`Viết dưới dạng lũy thừa của x: <b>x<sup>${m}</sup> · x<sup>${n}</sup></b>`, [{ pre: 'x<sup>?</sup>, số mũ =', ans: m + n }], 'x<sup>m</sup> · x<sup>n</sup> = x<sup>m+n</sup>.'); }
    const m = r(2, 5), n = r(2, 4); return fill(`Viết dưới dạng lũy thừa của x: <b>(x<sup>${m}</sup>)<sup>${n}</sup></b>`, [{ pre: 'x<sup>?</sup>, số mũ =', ans: m * n }], '(x<sup>m</sup>)<sup>n</sup> = x<sup>m·n</sup>.');
  };
  G.chuyenve = () => { const a = nz(-9, 9), b = r(2, 6), x = nz(-9, 9), d = r(2, 6); const cn = x * b * d + a * d, cd = b * d; const g = gcd(cn, cd); return fillFrac(`Tìm x biết: <b>x + ${a < 0 ? '(' + F(a, b) + ')' : F(a, b)} = ${F(cn / g, cd / g)}</b>`, x * d, d, `Chuyển vế, đổi dấu: x = ${F(cn / g, cd / g)} − ${a < 0 ? '(' + F(a, b) + ')' : F(a, b)} = ${F(x * d, d)}.`); };

  // ---- II. Số thực ----
  G.sqrt7 = () => { const t = r(0, 2); if (t === 0) { const a = r(2, 25); return fill1(`Tính: ${sqrtH(a * a)}`, a, `${a}<sup>2</sup> = ${a * a} và ${a} ≥ 0 nên ${sqrtH(a * a)} = ${a}.`); } if (t === 1) { const a = r(2, 15), b = r(2, 15); return fill1(`Tính: ${sqrtH(a * a)} + ${sqrtH(b * b)}`, a + b, `${a} + ${b} = ${a + b}.`); } const n = pick([2, 3, 5, 7, 10, 11]); return mc(`Số ${sqrtH(n)} là:`, 'Số vô tỉ', ['Số nguyên', 'Số hữu tỉ', 'Số tự nhiên'], `${n} không phải số chính phương nên ${sqrtH(n)} là số thập phân vô hạn không tuần hoàn → số vô tỉ.`); };
  G.vohan = () => { const p = pick([[1, 3], [2, 9], [5, 6], [1, 7], [4, 11], [7, 12], [1, 4], [3, 8], [7, 20], [9, 25], [3, 40], [11, 16]]); const finite = ((d) => { while (d % 2 === 0) d /= 2; while (d % 5 === 0) d /= 5; return d === 1; })(p[1]); return mc(`Phân số ${frac(p[0], p[1])} viết được dưới dạng số thập phân:`, finite ? 'Hữu hạn' : 'Vô hạn tuần hoàn', [finite ? 'Vô hạn tuần hoàn' : 'Hữu hạn', 'Vô hạn không tuần hoàn'], 'Phân số tối giản có mẫu dương chỉ có ước nguyên tố 2 và 5 → thập phân hữu hạn; có ước nguyên tố khác 2, 5 → vô hạn tuần hoàn.'); };
  G.sothuc = () => { const t = r(0, 2); if (t === 0) { const a = nz(-30, 30); return fill1(`Tính giá trị tuyệt đối: <b>|${fmt(a)}|</b>`, Math.abs(a), '|x| = x nếu x ≥ 0; |x| = −x nếu x &lt; 0.'); } if (t === 1) { const a = r(2, 9); return mc(`So sánh: ${sqrtH(a * a + 1)} … ${a}`, '>', ['<', '='], `${a} = ${sqrtH(a * a)} và ${a * a + 1} > ${a * a} nên ${sqrtH(a * a + 1)} > ${a}.`); } const a = nz(-9, 9); return fill1(`Số đối của ${fmt(a)} là:`, -a, 'Hai số đối nhau có tổng bằng 0.'); };

  // ---- III. Góc và đường thẳng song song ----
  G.goc7 = () => {
    const x = r(20, 160), t = r(0, 3);
    if (t === 0) return fill1(`Hai góc kề bù, một góc bằng <b>${x}°</b>. Góc còn lại bằng:`, 180 - x, `Hai góc kề bù có tổng 180°: 180° − ${x}° = ${180 - x}°.`, '°');
    if (t === 1) return fill1(`Hai đường thẳng cắt nhau tạo thành một góc ${x}°. Góc đối đỉnh với nó bằng:`, x, 'Hai góc đối đỉnh thì bằng nhau.', '°');
    if (t === 2) { const y = r(10, 80) * 2; return fill1(`Tia Oz là tia phân giác của góc xOy = ${y}°. Góc xOz bằng:`, y / 2, `Tia phân giác chia góc thành hai góc bằng nhau: ${y}° : 2 = ${y / 2}°.`, '°'); }
    return fill1(`Đường thẳng c cắt hai đường thẳng song song a và b. Một góc so le trong bằng ${x}°. Góc so le trong còn lại bằng:`, x, 'Nếu hai đường thẳng song song thì hai góc so le trong bằng nhau, hai góc đồng vị bằng nhau, hai góc trong cùng phía bù nhau.', '°');
  };
  G.songsong7 = () => { const x = r(30, 150); return Math.random() < 0.5 ? fill1(`a ∥ b, đường thẳng c cắt a, b. Hai góc trong cùng phía, một góc bằng ${x}°. Góc kia bằng:`, 180 - x, 'Hai góc trong cùng phía bù nhau (tổng 180°).', '°') : mc('Qua một điểm nằm ngoài một đường thẳng, có bao nhiêu đường thẳng song song với đường thẳng đó?', 'Chỉ có một', ['Không có', 'Có hai', 'Có vô số'], 'Đây là nội dung tiên đề Euclid.'); };
  G.dinhli = () => mc('Trong định lí "Nếu hai góc đối đỉnh thì hai góc đó bằng nhau", phần <b>giả thiết</b> là:', 'Hai góc đối đỉnh', ['Hai góc bằng nhau', 'Hai đường thẳng cắt nhau', 'Không có giả thiết'], 'Định lí dạng "Nếu A thì B": A là giả thiết, B là kết luận.');

  // ---- IV. Tam giác bằng nhau ----
  G.tamgiac7 = () => {
    const t = r(0, 3);
    if (t === 0) { const a = r(20, 100), b = r(20, 160 - a); return fill1(`Tam giác ABC có Â = ${a}°, B̂ = ${b}°. Tính Ĉ.`, 180 - a - b, `Tổng ba góc của tam giác bằng 180°: Ĉ = 180° − ${a}° − ${b}° = ${180 - a - b}°.`, '°'); }
    if (t === 1) { const a = r(10, 70) * 2; return fill1(`Tam giác ABC cân tại A có Â = ${a}°. Tính góc B.`, (180 - a) / 2, `Hai góc ở đáy bằng nhau: B̂ = (180° − ${a}°) : 2 = ${(180 - a) / 2}°.`, '°'); }
    if (t === 2) { const k = pick([['AB = DE, BC = EF, CA = FD', 'Cạnh – cạnh – cạnh (c.c.c)'], ['AB = DE, B̂ = Ê, BC = EF', 'Cạnh – góc – cạnh (c.g.c)'], ['B̂ = Ê, BC = EF, Ĉ = F̂', 'Góc – cạnh – góc (g.c.g)']]); return mc(`ΔABC và ΔDEF có ${k[0]}. Hai tam giác bằng nhau theo trường hợp:`, k[1], ['Cạnh – cạnh – cạnh (c.c.c)', 'Cạnh – góc – cạnh (c.g.c)', 'Góc – cạnh – góc (g.c.g)', 'Góc – góc – góc'].filter((x) => x !== k[1]).slice(0, 3), 'Chú ý: góc trong c.g.c phải là góc xen giữa hai cạnh; cạnh trong g.c.g phải là cạnh xen giữa hai góc.'); }
    const x = r(30, 80); return fill1(`Tam giác đều có mỗi góc bằng bao nhiêu độ?`, 60, 'Tam giác đều có ba góc bằng nhau: 180° : 3 = 60°.', '°');
  };

  // ---- V. Thu thập và biểu diễn dữ liệu ----
  G.dulieu7 = () => { const N = pick([40, 50, 80, 120, 200]); const p = pick([[40, 35, 25], [50, 30, 20], [45, 30, 25], [60, 25, 15]]); if (p.some((v) => (N * v) % 100)) return G.dulieu7(); const Lb = ['Đi bộ', 'Xe đạp', 'Được đưa đón'], i = r(0, 2); if (Math.random() < 0.6) return fill1(`Biểu đồ hình quạt tròn biểu diễn cách đến trường của ${N} học sinh: ${Lb.map((l, j) => `${l} ${p[j]}%`).join('; ')}. Số học sinh <b>${Lb[i].toLowerCase()}</b> là:`, N * p[i] / 100, `${N} · ${p[i]}% = ${N * p[i] / 100} (học sinh).`, 'học sinh'); const v = Array.from({ length: 5 }, () => r(18, 35)); const j = r(0, 3); return fill1(`Nhiệt độ (°C) lúc 12 giờ các ngày T2 → T6 trên biểu đồ đoạn thẳng lần lượt là ${v.join('; ')}. Từ T${j + 2} đến T${j + 3}, nhiệt độ thay đổi (tăng dương, giảm âm) bao nhiêu độ?`, v[j + 1] - v[j], `${v[j + 1]} − ${v[j]} = ${fmt(v[j + 1] - v[j])}.`, '°C'); };

  // ---- VI. Tỉ lệ thức và đại lượng tỉ lệ ----
  G.tilethuc = () => { const a = r(2, 12), b = r(2, 12), k = r(2, 6); return fill1(`Tìm x trong tỉ lệ thức: ${frac('x', a * k)} = ${frac(b, a)}`, b * k, `x = ${a * k} · ${b} : ${a} = ${b * k} (tích trung tỉ bằng tích ngoại tỉ).`); };
  G.daytiso = () => { const a = r(2, 7), b = r(2, 9), k = nz(-6, 9); if (a === b) return G.daytiso(); const plus = Math.random() < 0.6; const S = plus ? (a + b) * k : (a - b) * k; if (!plus && a === b) return G.daytiso(); return fill(`Tìm x, y biết ${frac('x', a)} = ${frac('y', b)} và x ${plus ? '+' : '−'} y = ${fmt(S)}.`, [{ pre: 'x =', ans: a * k }, { pre: 'y =', ans: b * k }], `Theo tính chất dãy tỉ số bằng nhau: ${frac('x', a)} = ${frac('y', b)} = ${frac(`x ${plus ? '+' : '−'} y`, `${a} ${plus ? '+' : '−'} ${b}`)} = ${frac(fmt(S), plus ? a + b : a - b)} = ${k}. Vậy x = ${a * k}, y = ${b * k}.`); };
  G.tile7 = () => { const t = r(0, 2); if (t === 0) { const k = r(2, 9), x1 = r(2, 9), x2 = r(2, 12); return fill1(`y tỉ lệ thuận với x; khi x = ${x1} thì y = ${k * x1}. Tính y khi x = ${x2}.`, k * x2, `Hệ số tỉ lệ k = ${k * x1} : ${x1} = ${k}; y = ${k} · ${x2} = ${k * x2}.`); } if (t === 1) { const a = pick([12, 24, 36, 48, 60, 72]), x1 = pick([2, 3, 4, 6]), x2 = pick([2, 3, 4, 6, 12].filter((v) => a % v === 0 && v !== x1)); return fill1(`y tỉ lệ nghịch với x; khi x = ${x1} thì y = ${a / x1}. Tính y khi x = ${x2}.`, a / x2, `Hệ số a = x · y = ${x1} · ${a / x1} = ${a}; y = ${a} : ${x2} = ${a / x2}.`); } const n1 = pick([4, 6, 8, 12]), d1 = pick([6, 8, 10, 12]), n2 = pick([2, 3, 4, 6, 8, 12, 16, 24].filter((v) => (n1 * d1) % v === 0 && v !== n1)); return fill1(`${n1} công nhân làm xong một công việc trong ${d1} ngày. Hỏi ${n2} công nhân (năng suất như nhau) làm xong trong bao nhiêu ngày?`, n1 * d1 / n2, `Số công nhân và số ngày tỉ lệ nghịch: ${n1} · ${d1} : ${n2} = ${n1 * d1 / n2} (ngày).`, 'ngày'); };

  // ---- VII. Biểu thức đại số và đa thức một biến ----
  const randPoly = (deg) => { const c = [nz(-5, 5)]; for (let i = 0; i < deg; i++) c.push(r(-6, 6)); return c; };
  const evalP = (c, x) => c.reduce((s, v) => s * x + v, 0);
  G.dathuc7 = () => {
    const t = r(0, 3);
    if (t === 0) { const c = randPoly(r(2, 3)), x = r(-3, 3); return fill1(`Tính giá trị của P(x) = ${poly(c)} tại x = ${fmt(x)}.`, evalP(c, x), `Thay x = ${fmt(x)}: P(${fmt(x)}) = ${fmt(evalP(c, x))}.`); }
    if (t === 1) { const c = randPoly(r(2, 4)); return fill(`Cho đa thức P(x) = ${poly(c)}.`, [{ pre: 'Bậc:', ans: c.length - 1 }, { pre: 'Hệ số cao nhất:', ans: c[0] }, { pre: 'Hệ số tự do:', ans: c[c.length - 1] }], 'Bậc là số mũ lớn nhất của biến; hệ số cao nhất là hệ số của hạng tử bậc cao nhất; hệ số tự do là hạng tử không chứa biến.'); }
    if (t === 2) { const a = nz(-9, 9), x = nz(-9, 9); return fill1(`Tìm nghiệm của đa thức ${poly([a, -a * x])}.`, x, `${poly([a, -a * x])} = 0 ⇔ x = ${fmt(a * x)} : ${par(a)} = ${fmt(x)}.`); }
    const c = randPoly(2), d = randPoly(2), s = c.map((v, i) => v + d[i]); return fill(`Cho A(x) = ${poly(c)} và B(x) = ${poly(d)}. Tính A(x) + B(x) = ax<sup>2</sup> + bx + c.`, [{ pre: 'a =', ans: s[0] }, { pre: 'b =', ans: s[1] }, { pre: 'c =', ans: s[2] }], `Cộng các hạng tử đồng dạng: ${poly(s)}.`);
  };
  G.nhanchiaDT = () => {
    if (Math.random() < 0.5) { const a = nz(-7, 7), b = nz(-7, 7); return fill(`Nhân đa thức: (x ${a < 0 ? '−' : '+'} ${Math.abs(a)})(x ${b < 0 ? '−' : '+'} ${Math.abs(b)}) = x<sup>2</sup> + px + q.`, [{ pre: 'p =', ans: a + b }, { pre: 'q =', ans: a * b }], `(x + a)(x + b) = x<sup>2</sup> + (a + b)x + ab = ${poly([1, a + b, a * b])}.`); }
    const a = nz(-6, 6), q = nz(-6, 6); const c = [1, a + q, a * q]; return fill(`Chia đa thức ${poly(c)} cho x ${a < 0 ? '−' : '+'} ${Math.abs(a)}. Thương là x + m.`, [{ pre: 'm =', ans: q }], `${poly(c)} = (x ${a < 0 ? '−' : '+'} ${Math.abs(a)})(x ${q < 0 ? '−' : '+'} ${Math.abs(q)}) nên thương là ${poly([1, q])}.`);
  };

  // ---- VIII. Biến cố và xác suất ----
  G.xs7 = () => { const t = r(0, 2); if (t === 0) { const k = pick([['Gieo một con xúc xắc, số chấm xuất hiện nhỏ hơn 7', 'Biến cố chắc chắn'], ['Gieo một con xúc xắc, xuất hiện mặt 7 chấm', 'Biến cố không thể'], ['Gieo một con xúc xắc, xuất hiện mặt 6 chấm', 'Biến cố ngẫu nhiên'], ['Tung đồng xu, xuất hiện mặt sấp', 'Biến cố ngẫu nhiên']]); return mc(`"${k[0]}" là:`, k[1], ['Biến cố chắc chắn', 'Biến cố không thể', 'Biến cố ngẫu nhiên'].filter((x) => x !== k[1]), 'Chắc chắn: luôn xảy ra. Không thể: không bao giờ xảy ra. Ngẫu nhiên: có thể xảy ra hoặc không.'); } if (t === 1) { const n = pick([4, 5, 6, 8, 10]); return fillFrac(`Một hộp có ${n} tấm thẻ đánh số 1 đến ${n}. Rút ngẫu nhiên 1 thẻ. Xác suất rút được thẻ số 1 là:`, 1, n, `Có ${n} kết quả đồng khả năng, nên xác suất mỗi kết quả là ${frac(1, n)}.`); } return mc('Xác suất của biến cố chắc chắn bằng:', 1, [0, 0.5, 2].map((v) => (v === 0.5 ? '0,5' : v)), 'Biến cố chắc chắn có xác suất 1; biến cố không thể có xác suất 0.'); };

  // ---- IX. Quan hệ giữa các yếu tố trong tam giác ----
  G.qhtg = () => {
    const t = r(0, 2);
    if (t === 0) { const s = shuffle([r(3, 6), r(7, 10), r(11, 14)]); const nm = ['AB', 'BC', 'CA'], opp = ['Ĉ', 'Â', 'B̂']; const i = s.indexOf(Math.max(...s)); return mc(`Tam giác ABC có AB = ${s[0]} cm, BC = ${s[1]} cm, CA = ${s[2]} cm. Góc lớn nhất là:`, opp[i], opp.filter((_, j) => j !== i), `Trong tam giác, góc đối diện với cạnh lớn hơn là góc lớn hơn. Cạnh lớn nhất ${nm[i]} đối diện góc ${opp[i]}.`); }
    if (t === 1) { const a = r(2, 10), b = r(2, 10), c = r(1, 22); const ok = a + b > c && a + c > b && b + c > a; return mc(`Bộ ba độ dài ${a} cm, ${b} cm, ${c} cm có là độ dài ba cạnh của một tam giác không?`, ok ? 'Có' : 'Không', [ok ? 'Không' : 'Có'], `Bất đẳng thức tam giác: tổng hai cạnh bất kì phải lớn hơn cạnh còn lại. ${ok ? 'Thỏa mãn.' : 'Không thỏa mãn.'}`); }
    const m = r(2, 10) * 3; return fill1(`G là trọng tâm của tam giác ABC, AM là đường trung tuyến dài ${m} cm. Độ dài AG là:`, m * 2 / 3, `Trọng tâm cách đỉnh ${frac(2, 3)} độ dài trung tuyến: ${m} · ${frac(2, 3)} = ${m * 2 / 3} (cm).`, 'cm');
  };

  // ---- X. Hình khối trong thực tiễn ----
  G.hinhkhoi7 = () => {
    const t = r(0, 2);
    if (t === 0) { const a = r(2, 12), b = r(2, 10), c = r(2, 10); return fill1(`Hình hộp chữ nhật có ba kích thước ${a} cm, ${b} cm, ${c} cm. Thể tích là:`, a * b * c, `V = ${a} · ${b} · ${c} = ${a * b * c} (cm³).`, 'cm³'); }
    if (t === 1) { const a = r(3, 10), h = r(2, 10) * 2, H = r(3, 15); return fill1(`Hình lăng trụ đứng tam giác có đáy là tam giác với một cạnh ${a} cm và chiều cao tương ứng ${h} cm; chiều cao lăng trụ ${H} cm. Thể tích là:`, a * h / 2 * H, `V = S<sub>đáy</sub> · h = (${a} · ${h} : 2) · ${H} = ${a * h / 2 * H} (cm³).`, 'cm³'); }
    const a = r(3, 8), b = r(3, 8), c = r(3, 8), H = r(4, 12); return fill1(`Lăng trụ đứng tam giác có các cạnh đáy ${a} cm, ${b} cm, ${c} cm và chiều cao ${H} cm. Diện tích xung quanh là:`, (a + b + c) * H, `Sxq = chu vi đáy · chiều cao = ${a + b + c} · ${H} = ${(a + b + c) * H} (cm²).`, 'cm²');
  };

  const ESSAY = {
    1: [() => { const a = r(2, 6), b = r(2, 8), k = r(3, 12); if (a === b) return ESSAY[1][0](); return essay(`Hai lớp 7A và 7B trồng được tổng cộng ${(a + b) * k} cây. Số cây của hai lớp tỉ lệ với ${a} và ${b}. Tính số cây mỗi lớp trồng được.`, 2, `Gọi số cây là x, y: ${frac('x', a)} = ${frac('y', b)} = ${frac('x + y', a + b)} = ${frac((a + b) * k, a + b)} = ${k}. x = ${a * k}, y = ${b * k}.`, [a * k, b * k]); },
      () => { const a = r(20, 80); return essay(`Cho tam giác ABC cân tại A có Â = ${a * 2 > 160 ? 40 : a * 2}°. Tính số đo các góc B và C. Giải thích.`, 2, `Tam giác cân tại A nên B̂ = Ĉ = (180° − ${a * 2 > 160 ? 40 : a * 2}°) : 2 = ${(180 - (a * 2 > 160 ? 40 : a * 2)) / 2}°.`, [(180 - (a * 2 > 160 ? 40 : a * 2)) / 2]); }],
    2: [() => { const p = nz(-5, 5), q = nz(-5, 5); return essay(`Cho A(x) = x<sup>2</sup> ${p < 0 ? '−' : '+'} ${Math.abs(p)}x và B(x) = ${q}x − x<sup>2</sup> + 3. Tính A(x) + B(x) và tìm nghiệm của đa thức thu được.`, 2, `A + B = ${poly([p + q, 3])}. ${p + q !== 0 ? `Nghiệm x = ${fr(-3, p + q)}.` : 'Đa thức bằng 3, không có nghiệm.'}`, [p + q]); },
      () => { const a = r(3, 10), b = r(3, 10), h = r(5, 15); return essay(`Một bể cá dạng hình hộp chữ nhật dài ${a * 10} cm, rộng ${b * 10} cm, cao ${h * 10} cm. Tính thể tích bể (ra lít, 1 dm³ = 1 l).`, 2, `V = ${a * 10} · ${b * 10} · ${h * 10} = ${a * b * h * 1000} cm³ = ${a * b * h} dm³ = ${a * b * h} l.`, [a * b * h * 1000, a * b * h]); }]
  };

  const T = [
    { id: 1, hk: 1, ten: 'Số hữu tỉ', widgets: [],
      lt: `<ul><li><b>Số hữu tỉ</b> viết được dưới dạng ${frac('a', 'b')} (a, b ∈ ℤ, b ≠ 0). Tập hợp kí hiệu ℚ.</li><li>Cộng, trừ, nhân, chia số hữu tỉ như với phân số; chú ý quy tắc dấu.</li><li><b>Lũy thừa</b>: x<sup>m</sup> · x<sup>n</sup> = x<sup>m+n</sup>; x<sup>m</sup> : x<sup>n</sup> = x<sup>m−n</sup>; (x<sup>m</sup>)<sup>n</sup> = x<sup>m·n</sup>.</li><li><b>Thứ tự thực hiện</b>: ngoặc → lũy thừa → nhân, chia → cộng, trừ. <b>Quy tắc chuyển vế</b>: chuyển một số hạng sang vế kia thì đổi dấu.</li></ul>`,
      bai: [[1, 'Tập hợp các số hữu tỉ', ['shh']], [2, 'Cộng, trừ, nhân, chia số hữu tỉ', ['shh']], L(), [3, 'Lũy thừa với số mũ tự nhiên của một số hữu tỉ', ['luythuaQ']], [4, 'Thứ tự thực hiện các phép tính. Quy tắc chuyển vế', ['chuyenve']], L(), BT('I')] },
    { id: 2, hk: 1, ten: 'Số thực', widgets: [],
      lt: `<ul><li>Phân số tối giản (mẫu dương) có mẫu chỉ chứa ước nguyên tố 2, 5 → <b>thập phân hữu hạn</b>; ngược lại → <b>vô hạn tuần hoàn</b>.</li><li><b>Số vô tỉ</b>: số thập phân vô hạn không tuần hoàn (${sqrtH(2)}, π…). <b>Căn bậc hai số học</b> của a ≥ 0 là số x ≥ 0 sao cho x<sup>2</sup> = a.</li><li>Số hữu tỉ và số vô tỉ gọi chung là <b>số thực</b> (ℝ). |x| là khoảng cách từ x đến 0 trên trục số.</li></ul>`,
      bai: [[5, 'Làm quen với số thập phân vô hạn tuần hoàn', ['vohan']], [6, 'Số vô tỉ. Căn bậc hai số học', ['sqrt7']], [7, 'Tập hợp các số thực', ['sothuc']], L(), BT('II')] },
    { id: 3, hk: 1, ten: 'Góc và đường thẳng song song', widgets: ['goc'],
      lt: '<ul><li><b>Hai góc kề bù</b> có tổng 180°. <b>Hai góc đối đỉnh</b> thì bằng nhau. <b>Tia phân giác</b> chia góc thành hai góc bằng nhau.</li><li>Đường thẳng cắt hai đường thẳng song song: các cặp góc <b>so le trong</b> bằng nhau, <b>đồng vị</b> bằng nhau, <b>trong cùng phía</b> bù nhau. Ngược lại, có một cặp so le trong (hoặc đồng vị) bằng nhau thì hai đường thẳng song song.</li><li><b>Tiên đề Euclid</b>: qua một điểm ngoài một đường thẳng chỉ có một đường thẳng song song với đường thẳng đó.</li><li>Định lí "Nếu A thì B": A là giả thiết, B là kết luận.</li></ul>',
      bai: [[8, 'Góc ở vị trí đặc biệt. Tia phân giác của một góc', ['goc7']], [9, 'Hai đường thẳng song song và dấu hiệu nhận biết', ['goc7', 'songsong7']], [10, 'Tiên đề Euclid. Tính chất của hai đường thẳng song song', ['songsong7']], [11, 'Định lí và chứng minh định lí', ['dinhli']], L(), BT('III')] },
    { id: 4, hk: 1, ten: 'Tam giác bằng nhau', widgets: [],
      lt: '<ul><li>Tổng ba góc của một tam giác bằng 180°.</li><li>Ba trường hợp bằng nhau: <b>c.c.c</b>, <b>c.g.c</b> (góc xen giữa), <b>g.c.g</b> (cạnh xen giữa). Tam giác vuông có thêm trường hợp cạnh huyền – cạnh góc vuông, cạnh huyền – góc nhọn.</li><li><b>Tam giác cân</b> có hai cạnh bên bằng nhau, hai góc ở đáy bằng nhau. Tam giác đều có ba góc bằng 60°.</li><li><b>Đường trung trực</b> của đoạn thẳng: vuông góc tại trung điểm; mọi điểm trên đó cách đều hai đầu mút.</li></ul>',
      bai: [[12, 'Tổng các góc trong một tam giác', ['tamgiac7']], [13, 'Hai tam giác bằng nhau. Trường hợp bằng nhau thứ nhất của tam giác', ['tamgiac7']], L(), [14, 'Trường hợp bằng nhau thứ hai và thứ ba của tam giác', ['tamgiac7']], [15, 'Các trường hợp bằng nhau của tam giác vuông', ['tamgiac7']], [16, 'Tam giác cân. Đường trung trực của đoạn thẳng', ['tamgiac7']], L(), BT('IV')] },
    { id: 5, hk: 1, ten: 'Thu thập và biểu diễn dữ liệu', widgets: [],
      lt: '<ul><li>Thu thập, phân loại dữ liệu; kiểm tra tính hợp lí của dữ liệu.</li><li><b>Biểu đồ hình quạt tròn</b>: cả hình tròn là 100%; số đối tượng = tổng × tỉ lệ %.</li><li><b>Biểu đồ đoạn thẳng</b>: biểu diễn sự thay đổi của số liệu theo thời gian (tăng, giảm).</li></ul>',
      bai: [[17, 'Thu thập và phân loại dữ liệu', ['dulieu7']], [18, 'Biểu đồ hình quạt tròn', ['dulieu7']], [19, 'Biểu đồ đoạn thẳng', ['dulieu7']], L(), BT('V')] },
    { id: 6, hk: 2, ten: 'Tỉ lệ thức và đại lượng tỉ lệ', widgets: ['dothi'],
      lt: `<ul><li><b>Tỉ lệ thức</b> ${frac('a', 'b')} = ${frac('c', 'd')} ⇔ a · d = b · c.</li><li><b>Dãy tỉ số bằng nhau</b>: ${frac('a', 'b')} = ${frac('c', 'd')} = ${frac('a + c', 'b + d')} = ${frac('a − c', 'b − d')}.</li><li><b>Tỉ lệ thuận</b>: y = kx (k ≠ 0), tỉ số y : x không đổi. <b>Tỉ lệ nghịch</b>: x · y = a, tích không đổi.</li></ul>`,
      bai: [[20, 'Tỉ lệ thức', ['tilethuc']], [21, 'Tính chất của dãy tỉ số bằng nhau', ['daytiso']], L(), [22, 'Đại lượng tỉ lệ thuận', ['tile7']], [23, 'Đại lượng tỉ lệ nghịch', ['tile7']], L(), BT('VI')] },
    { id: 7, hk: 2, ten: 'Biểu thức đại số và đa thức một biến', widgets: [],
      lt: '<ul><li><b>Biểu thức đại số</b> gồm số, chữ (biến) và phép toán. Thay biến bằng số để tính giá trị.</li><li><b>Đa thức một biến</b>: tổng các đơn thức của cùng một biến. Bậc là số mũ lớn nhất; hệ số cao nhất, hệ số tự do.</li><li><b>Nghiệm</b> của P(x) là giá trị x làm P(x) = 0.</li><li>Cộng, trừ: cộng các hạng tử đồng dạng. Nhân: nhân từng hạng tử. Chia: đặt phép chia như chia số.</li></ul>',
      bai: [[24, 'Biểu thức đại số', ['dathuc7']], [25, 'Đa thức một biến', ['dathuc7']], [26, 'Phép cộng và phép trừ đa thức một biến', ['dathuc7']], L(), [27, 'Phép nhân đa thức một biến', ['nhanchiaDT']], [28, 'Phép chia đa thức một biến', ['nhanchiaDT']], L(), BT('VII')] },
    { id: 8, hk: 2, ten: 'Làm quen với biến cố và xác suất của biến cố', widgets: ['bocbi'],
      lt: '<ul><li><b>Biến cố chắc chắn</b>: luôn xảy ra (xác suất 1). <b>Biến cố không thể</b>: không bao giờ xảy ra (xác suất 0). <b>Biến cố ngẫu nhiên</b>: có thể xảy ra hoặc không.</li><li>Nếu có n kết quả đồng khả năng thì xác suất của mỗi kết quả là 1/n.</li></ul>',
      bai: [[29, 'Làm quen với biến cố', ['xs7']], [30, 'Làm quen với xác suất của biến cố', ['xs7']], L(), BT('VIII')] },
    { id: 9, hk: 2, ten: 'Quan hệ giữa các yếu tố trong một tam giác', widgets: [],
      lt: `<ul><li>Trong tam giác, góc đối diện cạnh lớn hơn là góc lớn hơn (và ngược lại).</li><li>Đường vuông góc ngắn hơn mọi đường xiên.</li><li><b>Bất đẳng thức tam giác</b>: tổng hai cạnh bất kì lớn hơn cạnh còn lại.</li><li>Ba đường trung tuyến đồng quy tại <b>trọng tâm</b> G, AG = ${frac(2, 3)} AM. Ba đường phân giác, ba đường trung trực, ba đường cao cũng đồng quy.</li></ul>`,
      bai: [[31, 'Quan hệ giữa góc và cạnh đối diện trong một tam giác', ['qhtg']], [32, 'Quan hệ giữa đường vuông góc và đường xiên', ['qhtg']], [33, 'Quan hệ giữa ba cạnh của một tam giác', ['qhtg']], L(), [34, 'Sự đồng quy của ba đường trung tuyến, ba đường phân giác trong một tam giác', ['qhtg']], [35, 'Sự đồng quy của ba đường trung trực, ba đường cao trong một tam giác', ['qhtg']], L(), BT('IX')] },
    { id: 10, hk: 2, ten: 'Một số hình khối trong thực tiễn', widgets: [],
      lt: '<ul><li><b>Hình hộp chữ nhật</b>: V = a · b · c; Sxq = 2(a + b) · c.</li><li><b>Hình lập phương</b> cạnh a: V = a³; Sxq = 4a².</li><li><b>Lăng trụ đứng</b> tam giác, tứ giác: V = S<sub>đáy</sub> · h; Sxq = chu vi đáy · h.</li></ul>',
      bai: [[36, 'Hình hộp chữ nhật và hình lập phương', ['hinhkhoi7']], [37, 'Hình lăng trụ đứng tam giác và hình lăng trụ đứng tứ giác', ['hinhkhoi7']], L(), BT('X')] }
  ];
  PLT.buildCourse({ id: 'toan-7', lop: 7, topics: T, gens: G, essays: ESSAY });
})();

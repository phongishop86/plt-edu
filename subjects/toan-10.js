/* Toán lớp 10 – Kết nối tri thức với cuộc sống. Lý thuyết tóm tắt bằng lời mới; câu hỏi sinh tự động. */
(function () {
  'use strict';
  const { r, pick, shuffle, fmt, frac, fr, gcd, sup, par, poly, sqrtH, mc, fill, fill1, order, sort, essay, tableHTML } = PLT.U;
  const { big, distinct, fillV, fillFrac } = PLT.M;
  const G = {};
  const nz = (lo, hi) => { let v; do { v = r(lo, hi); } while (v === 0); return v; };
  const L = () => [0, 'Luyện tập chung', null], BT = (n) => [0, 'Bài tập cuối chương ' + n, null];
  const fact = (n) => (n <= 1 ? 1 : n * fact(n - 1));
  const C = (n, k) => fact(n) / (fact(k) * fact(n - k));
  const A = (n, k) => fact(n) / fact(n - k);
  const set = (a) => '{' + a.join('; ') + '}';

  // ---- I. Mệnh đề và tập hợp ----
  G.menhde = () => {
    const k = pick([['"5 là số nguyên tố"', 'Đúng'], ['"√2 là số hữu tỉ"', 'Sai'], ['"Mọi số tự nhiên đều chia hết cho 2"', 'Sai'], ['"Tồn tại số thực x để x² = −1"', 'Sai'], ['"Hình vuông là hình chữ nhật"', 'Đúng'], ['"∀x ∈ ℝ, x² ≥ 0"', 'Đúng'], ['"∃n ∈ ℕ, n² = 9"', 'Đúng']]);
    if (Math.random() < 0.7) return mc(`Mệnh đề ${k[0]} là mệnh đề:`, k[1], [k[1] === 'Đúng' ? 'Sai' : 'Đúng', 'Không phải mệnh đề'], 'Mệnh đề là câu khẳng định có tính đúng hoặc sai xác định. ∀: với mọi; ∃: tồn tại.');
    return mc('Mệnh đề phủ định của "∀x ∈ ℝ, x² ≥ 0" là:', '"∃x ∈ ℝ, x² &lt; 0"', ['"∀x ∈ ℝ, x² &lt; 0"', '"∃x ∈ ℝ, x² ≥ 0"', '"∀x ∈ ℝ, x² ≤ 0"'], 'Phủ định của "∀x, P(x)" là "∃x, không P(x)".');
  };
  G.taphop10 = () => {
    const U = distinct(6, () => r(1, 12)).sort((a, b) => a - b), V = distinct(6, () => r(1, 12)).sort((a, b) => a - b); const t = r(0, 2);
    const inter = U.filter((x) => V.includes(x)), uni = [...new Set(U.concat(V))], diff = U.filter((x) => !V.includes(x));
    const q = [['A ∩ B', inter.length, 'phần tử chung của A và B'], ['A ∪ B', uni.length, 'phần tử thuộc A hoặc B'], ['A \\ B', diff.length, 'phần tử thuộc A mà không thuộc B']][t];
    return fill1(`Cho A = ${set(U)}, B = ${set(V)}. Tập ${q[0]} có bao nhiêu phần tử?`, q[1], `${q[0]} gồm các ${q[2]}: ${set([inter, uni.sort((a, b) => a - b), diff][t])}.`, 'phần tử');
  };

  // ---- II. Bất phương trình bậc nhất hai ẩn ----
  G.bpt2an = () => { const a = nz(-5, 5), b = nz(-5, 5), c = r(-10, 10), x = r(-4, 4), y = r(-4, 4); const ok = a * x + b * y < c; const co = (v) => (Math.abs(v) === 1 ? '' : Math.abs(v)); const lhs = `${a < 0 ? '−' : ''}${co(a)}x ${b < 0 ? '−' : '+'} ${co(b)}y`; return mc(`Điểm M(${fmt(x)}; ${fmt(y)}) có thuộc miền nghiệm của bất phương trình <b>${lhs} &lt; ${fmt(c)}</b> không?`, ok ? 'Có' : 'Không', [ok ? 'Không' : 'Có'], `Thay tọa độ vào vế trái: ${fmt(a)}·${par(x)} ${b < 0 ? '−' : '+'} ${Math.abs(b)}·${par(y)} = ${fmt(a * x + b * y)} ${ok ? '&lt;' : '≥'} ${fmt(c)}.`); };

  // ---- III. Hệ thức lượng trong tam giác ----
  G.gtlg10 = () => { const k = pick([['sin 120°', '√3/2'], ['cos 120°', '−1/2'], ['cos 135°', '−√2/2'], ['sin 150°', '1/2'], ['cos 150°', '−√3/2'], ['tan 135°', '−1'], ['cos 180°', '−1'], ['sin 90°', '1']]); return mc(`Giá trị của <b>${k[0]}</b> là:`, k[1], ['√3/2', '−1/2', '1/2', '−√2/2', '−√3/2', '−1', '1'].filter((x) => x !== k[1]).slice(0, 3), 'Với góc tù: sin(180° − α) = sin α; cos(180° − α) = −cos α; tan(180° − α) = −tan α.'); };
  G.dlcos = () => { const t = r(0, 2), b = r(2, 9), c = r(2, 9); if (t === 0) { const ang = pick([60, 120]); const a2 = b * b + c * c - (ang === 60 ? b * c : -b * c); return fill1(`Tam giác ABC có b = ${b}, c = ${c}, Â = ${ang}°. Tính a<sup>2</sup>.`, a2, `Định lí côsin: a² = b² + c² − 2bc·cos A = ${b * b} + ${c * c} − 2·${b}·${c}·(${ang === 60 ? '1/2' : '−1/2'}) = ${a2}.`); } if (t === 1) { const bc = b * c * 2; return fill1(`Tam giác ABC có AB = ${b * 2} cm, AC = ${c} cm, Â = 30°. Diện tích tam giác là:`, b * c / 2, `S = ${frac(1, 2)}·AB·AC·sin A = ${frac(1, 2)}·${b * 2}·${c}·${frac(1, 2)} = ${fmt(b * c / 2)} (cm²).`, 'cm²'); } const R = r(2, 10); return fill1(`Tam giác ABC có BC = ${R * 2} và Â = 30°. Bán kính đường tròn ngoại tiếp R bằng:`, R * 2, `Định lí sin: ${frac('a', 'sin A')} = 2R ⇒ R = ${R * 2} : (2·${frac(1, 2)}) = ${R * 2}.`); };

  // ---- IV. Vectơ ----
  G.vecto = () => {
    const a = r(-6, 6), b = r(-6, 6), c = r(-6, 6), d = r(-6, 6), t = r(0, 3);
    if (t === 0) return fill(`Cho u = (${fmt(a)}; ${fmt(b)}), v = (${fmt(c)}; ${fmt(d)}). Tọa độ của u + v là (x; y):`, [{ pre: 'x =', ans: a + c }, { pre: 'y =', ans: b + d }], 'Cộng từng tọa độ tương ứng.');
    if (t === 1) return fill1(`Cho u = (${fmt(a)}; ${fmt(b)}), v = (${fmt(c)}; ${fmt(d)}). Tính tích vô hướng u · v.`, a * c + b * d, `u · v = x₁x₂ + y₁y₂ = ${fmt(a)}·${par(c)} + ${fmt(b)}·${par(d)} = ${fmt(a * c + b * d)}.`);
    if (t === 2) { const p = pick([[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 6, 10]]); const sx = pick([1, -1]), sy = pick([1, -1]); return fill1(`Độ dài của vectơ u = (${fmt(sx * p[0])}; ${fmt(sy * p[1])}) là:`, p[2], `|u| = ${sqrtH(`${p[0]}² + ${p[1]}²`)} = ${p[2]}.`); }
    const k = nz(-4, 4); return fill(`Cho u = (${fmt(a)}; ${fmt(b)}). Tọa độ của ${fmt(k)}u là (x; y):`, [{ pre: 'x =', ans: k * a }, { pre: 'y =', ans: k * b }], 'Nhân từng tọa độ với số k.');
  };

  // ---- V. Số đặc trưng của mẫu số liệu ----
  G.thongke10 = () => {
    const n = pick([5, 6, 7]), data = Array.from({ length: n }, () => r(2, 12)); const s = data.slice().sort((a, b) => a - b); const t = r(0, 3);
    const mean = data.reduce((a, b) => a + b, 0) / n;
    if (t === 0) { if (mean * 10 % 1) return G.thongke10(); return fillV(`Mẫu số liệu: <b>${data.join('; ')}</b>. Số trung bình là:`, mean, fmt(mean), `x̄ = (${data.join(' + ')}) : ${n} = ${fmt(mean)}.`); }
    if (t === 1) { const med = n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2; return fillV(`Mẫu số liệu: <b>${data.join('; ')}</b>. Trung vị là:`, med, fmt(med), `Sắp xếp: ${s.join('; ')}. ${n % 2 ? 'Số ở giữa' : 'Trung bình hai số ở giữa'}: ${fmt(med)}.`); }
    if (t === 2) return fill1(`Mẫu số liệu: <b>${data.join('; ')}</b>. Khoảng biến thiên là:`, s[n - 1] - s[0], `R = giá trị lớn nhất − giá trị nhỏ nhất = ${s[n - 1]} − ${s[0]} = ${s[n - 1] - s[0]}.`);
    const d = pick([[2, 4, 6], [1, 3, 5], [4, 6, 8], [3, 5, 7]]); return fillFrac(`Mẫu số liệu: <b>${d.join('; ')}</b>. Phương sai là (viết dạng phân số):`, 8, 3, `x̄ = ${d[1]}; s² = [(${d[0]} − ${d[1]})² + 0 + (${d[2]} − ${d[1]})²] : 3 = 8 : 3.`);
  };
  G.gandung = () => { const x = Number((r(10000, 99999) / 1000).toFixed(3)); return fillV(`Quy tròn số ${fmt(x)} đến hàng phần trăm:`, Number(x.toFixed(2)), fmt(Number(x.toFixed(2))), 'Xét chữ số hàng phần nghìn: dưới 5 thì bỏ, từ 5 trở lên thì cộng 1 vào hàng phần trăm.'); };

  // ---- VI. Hàm số, đồ thị và ứng dụng ----
  G.hs10 = () => {
    const t = r(0, 3);
    if (t === 0) { const a = r(-9, 9); return mc(`Tập xác định của hàm số y = ${sqrtH('x ' + (a < 0 ? '+ ' + (-a) : '− ' + a))} là:`, `[${fmt(a)}; +∞)`, [`(${fmt(a)}; +∞)`, `(−∞; ${fmt(a)}]`, 'ℝ'], `Biểu thức dưới căn không âm: x − (${fmt(a)}) ≥ 0 ⇔ x ≥ ${fmt(a)}.`); }
    if (t === 1) { const a = nz(-3, 3), x0 = r(-4, 4), y0 = r(-6, 6); const b = -2 * a * x0, c = a * x0 * x0 + y0; return fill(`Tìm tọa độ đỉnh của parabol y = ${poly([a, b, c])}.`, [{ pre: 'x<sub>I</sub> =', ans: x0 }, { pre: 'y<sub>I</sub> =', ans: y0 }], `x<sub>I</sub> = ${frac('−b', '2a')} = ${fmt(x0)}; y<sub>I</sub> = y(${fmt(x0)}) = ${fmt(y0)}.`); }
    if (t === 2) { const p = nz(-6, 6), q = nz(-6, 6); if (p === q) return G.hs10(); const lo = Math.min(p, q), hi = Math.max(p, q); return mc(`Tập nghiệm của bất phương trình ${poly([1, -(p + q), p * q])} &lt; 0 là:`, `(${lo}; ${hi})`, [`(−∞; ${lo}) ∪ (${hi}; +∞)`, `[${lo}; ${hi}]`, `(${-hi}; ${-lo})`], `Tam thức có hai nghiệm ${lo}, ${hi}; a = 1 > 0 nên âm "trong khoảng hai nghiệm".`); }
    const c = r(1, 6), a = nz(-4, 4), x = r(1, 10); const b = c * c - a * x; return fill1(`Giải phương trình ${sqrtH(poly([a, b]))} = ${c}.`, x, `Bình phương hai vế: ${poly([a, b])} = ${c * c} ⇒ x = ${x} (thử lại thỏa mãn).`);
  };

  // ---- VII. Phương pháp tọa độ trong mặt phẳng ----
  G.toado10 = () => {
    const t = r(0, 3);
    if (t === 0) { const a = r(-6, 6), b = r(-6, 6), R = r(1, 9); return fill(`Đường tròn (x ${a < 0 ? '+' : '−'} ${Math.abs(a)})<sup>2</sup> + (y ${b < 0 ? '+' : '−'} ${Math.abs(b)})<sup>2</sup> = ${R * R} có tâm I(a; b) và bán kính R:`, [{ pre: 'a =', ans: a }, { pre: 'b =', ans: b }, { pre: 'R =', ans: R }], 'Phương trình (x − a)² + (y − b)² = R² có tâm I(a; b), bán kính R.'); }
    if (t === 1) { const n = pick([[3, 4, 5], [4, 3, 5], [6, 8, 10], [5, 12, 13]]); const c = r(-10, 10), x = r(-5, 5), y = r(-5, 5); const v = Math.abs(n[0] * x + n[1] * y + c); return fillFrac(`Khoảng cách từ M(${fmt(x)}; ${fmt(y)}) đến đường thẳng Δ: ${n[0]}x + ${n[1]}y ${c < 0 ? '−' : '+'} ${Math.abs(c)} = 0 là:`, v, n[2], `d = ${frac('|ax₀ + by₀ + c|', sqrtH('a² + b²'))} = ${frac(v, n[2])}.`); }
    if (t === 2) { const x1 = r(-5, 5), y1 = r(-5, 5), x2 = r(-5, 5), y2 = r(-5, 5); if (x1 === x2 && y1 === y2) return G.toado10(); return fill(`Đường thẳng đi qua A(${fmt(x1)}; ${fmt(y1)}) và B(${fmt(x2)}; ${fmt(y2)}) có một vectơ chỉ phương AB = (x; y):`, [{ pre: 'x =', ans: x2 - x1 }, { pre: 'y =', ans: y2 - y1 }], 'AB = (x<sub>B</sub> − x<sub>A</sub>; y<sub>B</sub> − y<sub>A</sub>).'); }
    const a = pick([3, 4, 5, 5, 13]), b = { 3: 0, 4: 0, 5: pick([3, 4]), 13: pick([5, 12]) }[a]; if (!b) return G.toado10(); const c = Math.sqrt(a * a - b * b); return fill(`Elip ${frac('x²', a * a)} + ${frac('y²', b * b)} = 1 có độ dài trục lớn 2a và tiêu cự 2c:`, [{ pre: '2a =', ans: 2 * a }, { pre: '2c =', ans: 2 * c }], `a = ${a}, b = ${b}, c = ${sqrtH('a² − b²')} = ${c}.`);
  };

  // ---- VIII. Đại số tổ hợp ----
  G.tohop = () => {
    const t = r(0, 4), n = r(4, 9), k = r(2, Math.min(4, n - 1));
    if (t === 0) { const a = r(2, 6), b = r(2, 6); return fill1(`Có ${a} cách đi từ A đến B và ${b} cách đi từ B đến C. Có bao nhiêu cách đi từ A đến C qua B?`, a * b, `Quy tắc nhân: ${a} · ${b} = ${a * b}.`, 'cách'); }
    if (t === 1) { const m = r(3, 7); return fill1(`Có bao nhiêu cách xếp ${m} bạn thành một hàng dọc?`, fact(m), `Số hoán vị P<sub>${m}</sub> = ${m}! = ${fmt(fact(m))}.`, 'cách'); }
    if (t === 2) return fill1(`Có bao nhiêu cách chọn ${k} bạn từ ${n} bạn để làm ${k} nhiệm vụ khác nhau?`, A(n, k), `Chỉnh hợp A<sup>${k}</sup><sub>${n}</sub> = ${frac(n + '!', (n - k) + '!')} = ${fmt(A(n, k))}.`, 'cách');
    if (t === 3) return fill1(`Có bao nhiêu cách chọn ${k} bạn từ ${n} bạn đi trực nhật (không phân biệt thứ tự)?`, C(n, k), `Tổ hợp C<sup>${k}</sup><sub>${n}</sub> = ${frac(n + '!', `${k}!·${n - k}!`)} = ${fmt(C(n, k))}.`, 'cách');
    const m = pick([4, 5]), j = r(1, m - 1), a = pick([1, 2]); return fill1(`Hệ số của x<sup>${j}</sup> trong khai triển (x + ${a})<sup>${m}</sup> là:`, C(m, j) * Math.pow(a, m - j), `Số hạng tổng quát C<sup>k</sup><sub>${m}</sub>x<sup>k</sup>·${a}<sup>${m}−k</sup>; với k = ${j}: ${C(m, j)}·${a}<sup>${m - j}</sup> = ${C(m, j) * Math.pow(a, m - j)}.`);
  };

  // ---- IX. Xác suất cổ điển ----
  G.xs10 = () => { const t = r(0, 2); if (t === 0) { const red = r(2, 6), blue = r(2, 6), N = red + blue; return fillFrac(`Hộp có ${red} bi đỏ và ${blue} bi xanh. Lấy ngẫu nhiên đồng thời 2 viên. Xác suất lấy được 2 bi đỏ là:`, C(red, 2), C(N, 2), `n(Ω) = C²<sub>${N}</sub> = ${C(N, 2)}; n(A) = C²<sub>${red}</sub> = ${C(red, 2)} ⇒ P = ${fr(C(red, 2), C(N, 2))}.`); } if (t === 1) return fillFrac('Gieo một đồng xu 3 lần. Xác suất có đúng 2 lần mặt ngửa là:', 3, 8, 'n(Ω) = 2³ = 8; các kết quả thuận lợi: NNS, NSN, SNN ⇒ 3/8.'); const n = r(5, 10); return fillFrac(`Chọn ngẫu nhiên một số nguyên dương không lớn hơn ${n * 2}. Xác suất chọn được số chẵn là:`, n, 2 * n, `Có ${n} số chẵn trong ${2 * n} số ⇒ ${fr(n, 2 * n)}.`); };

  const ESSAY = {
    1: [() => { const b = r(3, 8), c = r(3, 8); return essay(`Cho tam giác ABC có AB = ${c}, AC = ${b}, Â = 60°. Tính BC và diện tích tam giác ABC.`, 2, `BC² = ${b * b} + ${c * c} − ${b * c} = ${b * b + c * c - b * c} ⇒ BC = √${b * b + c * c - b * c}. S = ½·${b}·${c}·sin 60° = ${fr(b * c, 4)}√3.`, [b * b + c * c - b * c]); },
      () => { const a = r(-4, 4), b = r(-4, 4), c = r(-4, 4), d = r(-4, 4); return essay(`Trong mặt phẳng Oxy cho A(${a}; ${b}), B(${c}; ${d}), C(0; 0). Tìm tọa độ vectơ AB, tính AB · AC.`, 2, `AB = (${c - a}; ${d - b}); AC = (${-a}; ${-b}); AB · AC = ${(c - a) * -a + (d - b) * -b}.`, [c - a, d - b, (c - a) * -a + (d - b) * -b]); }],
    2: [() => { const p = nz(-5, 5), q = nz(-5, 5); return essay(`Xét dấu tam thức f(x) = ${poly([1, -(p + q), p * q])} và giải bất phương trình f(x) ≥ 0.`, 2, `Nghiệm ${Math.min(p, q)}, ${Math.max(p, q)}; f(x) ≥ 0 ⇔ x ≤ ${Math.min(p, q)} hoặc x ≥ ${Math.max(p, q)}.`, [Math.min(p, q), Math.max(p, q)]); },
      () => { const n = r(6, 10), k = 3; return essay(`Một lớp có ${n} bạn nam và ${n - 2} bạn nữ. Chọn ngẫu nhiên ${k} bạn. Tính xác suất chọn được đúng 2 nam.`, 2, `n(Ω) = C³<sub>${2 * n - 2}</sub> = ${C(2 * n - 2, 3)}; n(A) = C²<sub>${n}</sub>·C¹<sub>${n - 2}</sub> = ${C(n, 2) * (n - 2)}; P = ${fr(C(n, 2) * (n - 2), C(2 * n - 2, 3))}.`, [C(2 * n - 2, 3), C(n, 2) * (n - 2)]); }]
  };

  const T = [
    { id: 1, hk: 1, ten: 'Mệnh đề và tập hợp', widgets: [],
      lt: '<ul><li><b>Mệnh đề</b>: câu khẳng định đúng hoặc sai. Phủ định, kéo theo (P ⇒ Q), tương đương (P ⇔ Q). Phủ định của "∀x, P(x)" là "∃x, P(x) sai".</li><li>Tập hợp: A ⊂ B (con), A ∩ B (giao), A ∪ B (hợp), A \\ B (hiệu), phần bù.</li><li>Các tập con của ℝ: khoảng (a; b), đoạn [a; b], nửa khoảng.</li></ul>',
      bai: [[1, 'Mệnh đề', ['menhde']], [2, 'Tập hợp và các phép toán trên tập hợp', ['taphop10']], BT('I')] },
    { id: 2, hk: 1, ten: 'Bất phương trình và hệ bất phương trình bậc nhất hai ẩn', widgets: ['dothi'],
      lt: '<ul><li>ax + by &lt; c (a, b không đồng thời bằng 0). Miền nghiệm là một nửa mặt phẳng bờ là đường thẳng ax + by = c.</li><li>Cách xác định: vẽ đường thẳng, thử một điểm (thường O) để biết nửa mặt phẳng nào thỏa mãn.</li><li>Hệ bất phương trình: miền nghiệm là giao các miền nghiệm; ứng dụng tìm giá trị lớn nhất, nhỏ nhất của F = ax + by tại các đỉnh.</li></ul>',
      bai: [[3, 'Bất phương trình bậc nhất hai ẩn', ['bpt2an']], [4, 'Hệ bất phương trình bậc nhất hai ẩn', ['bpt2an']], BT('II')] },
    { id: 3, hk: 1, ten: 'Hệ thức lượng trong tam giác', widgets: ['vonglg'],
      lt: `<ul><li>Giá trị lượng giác của góc 0° → 180° trên nửa đường tròn đơn vị; sin(180° − α) = sin α, cos(180° − α) = −cos α.</li><li><b>Định lí côsin</b>: a² = b² + c² − 2bc·cos A.</li><li><b>Định lí sin</b>: ${frac('a', 'sin A')} = ${frac('b', 'sin B')} = ${frac('c', 'sin C')} = 2R.</li><li>Diện tích: S = ${frac(1, 2)}bc·sin A = ${frac('abc', '4R')} = pr; công thức Heron.</li></ul>`,
      bai: [[5, 'Giá trị lượng giác của một góc từ 0° đến 180°', ['gtlg10']], [6, 'Hệ thức lượng trong tam giác', ['dlcos']], BT('III')] },
    { id: 4, hk: 1, ten: 'Vectơ', widgets: [],
      lt: '<ul><li>Vectơ có hướng và độ dài; hai vectơ bằng nhau khi cùng hướng, cùng độ dài.</li><li>Quy tắc ba điểm, quy tắc hình bình hành; tích của vectơ với một số.</li><li>Tọa độ: u + v = (x₁ + x₂; y₁ + y₂); ku = (kx; ky); |u| = √(x² + y²).</li><li><b>Tích vô hướng</b> u · v = |u||v|cos(u, v) = x₁x₂ + y₁y₂; u ⊥ v ⇔ u · v = 0.</li></ul>',
      bai: [[7, 'Các khái niệm mở đầu', ['vecto']], [8, 'Tổng và hiệu của hai vectơ', ['vecto']], [9, 'Tích của một vectơ với một số', ['vecto']], [10, 'Vectơ trong mặt phẳng tọa độ', ['vecto']], [11, 'Tích vô hướng của hai vectơ', ['vecto']], BT('IV')] },
    { id: 5, hk: 1, ten: 'Các số đặc trưng của mẫu số liệu không ghép nhóm', widgets: [],
      lt: '<ul><li>Số gần đúng, sai số; quy tròn số.</li><li><b>Xu thế trung tâm</b>: số trung bình, trung vị, tứ phân vị, mốt.</li><li><b>Độ phân tán</b>: khoảng biến thiên, khoảng tứ phân vị, phương sai s², độ lệch chuẩn s = √s².</li></ul>',
      bai: [[12, 'Số gần đúng và sai số', ['gandung']], [13, 'Các số đặc trưng đo xu thế trung tâm', ['thongke10']], [14, 'Các số đặc trưng đo độ phân tán', ['thongke10']], BT('V')] },
    { id: 6, hk: 2, ten: 'Hàm số, đồ thị và ứng dụng', widgets: ['parabol'],
      lt: `<ul><li>Tập xác định, tập giá trị, sự đồng biến – nghịch biến của hàm số.</li><li><b>Hàm số bậc hai</b> y = ax² + bx + c: đồ thị là parabol, đỉnh I(${frac('−b', '2a')}; ${frac('−Δ', '4a')}), trục đối xứng x = ${frac('−b', '2a')}.</li><li><b>Dấu tam thức bậc hai</b>: Δ &lt; 0 cùng dấu a; Δ > 0 "trong trái, ngoài cùng".</li><li>Phương trình chứa căn: bình phương hai vế, nhớ thử lại nghiệm.</li></ul>`,
      bai: [[15, 'Hàm số', ['hs10']], [16, 'Hàm số bậc hai', ['hs10']], [17, 'Dấu của tam thức bậc hai', ['hs10']], [18, 'Phương trình quy về phương trình bậc hai', ['hs10']], BT('VI')] },
    { id: 7, hk: 2, ten: 'Phương pháp tọa độ trong mặt phẳng', widgets: [],
      lt: `<ul><li>Đường thẳng: vectơ chỉ phương u, pháp tuyến n; phương trình tổng quát ax + by + c = 0.</li><li>Khoảng cách từ M(x₀; y₀) đến Δ: d = ${frac('|ax₀ + by₀ + c|', sqrtH('a² + b²'))}.</li><li>Đường tròn tâm I(a; b), bán kính R: (x − a)² + (y − b)² = R².</li><li>Elip ${frac('x²', 'a²')} + ${frac('y²', 'b²')} = 1 (a > b > 0), c² = a² − b²; hypebol, parabol.</li></ul>`,
      bai: [[19, 'Phương trình đường thẳng', ['toado10']], [20, 'Vị trí tương đối giữa hai đường thẳng. Góc và khoảng cách', ['toado10']], [21, 'Đường tròn trong mặt phẳng tọa độ', ['toado10']], [22, 'Ba đường conic', ['toado10']], BT('VII')] },
    { id: 8, hk: 2, ten: 'Đại số tổ hợp', widgets: [],
      lt: '<ul><li><b>Quy tắc cộng</b> (các phương án loại trừ nhau), <b>quy tắc nhân</b> (các công đoạn liên tiếp).</li><li>Hoán vị P<sub>n</sub> = n!; chỉnh hợp A<sup>k</sup><sub>n</sub> = n!/(n − k)! (có thứ tự); tổ hợp C<sup>k</sup><sub>n</sub> = n!/(k!(n − k)!) (không thứ tự).</li><li><b>Nhị thức Newton</b> (n = 4, 5): (a + b)<sup>n</sup> = Σ C<sup>k</sup><sub>n</sub>a<sup>n−k</sup>b<sup>k</sup>.</li></ul>',
      bai: [[23, 'Quy tắc đếm', ['tohop']], [24, 'Hoán vị, chỉnh hợp và tổ hợp', ['tohop']], [25, 'Nhị thức Newton', ['tohop']], BT('VIII')] },
    { id: 9, hk: 2, ten: 'Tính xác suất theo định nghĩa cổ điển', widgets: ['bocbi'],
      lt: '<ul><li>Phép thử, không gian mẫu Ω, biến cố A ⊂ Ω; biến cố đối Ā.</li><li><b>Định nghĩa cổ điển</b>: P(A) = n(A) : n(Ω) khi các kết quả đồng khả năng; P(Ā) = 1 − P(A).</li><li>Dùng quy tắc đếm, tổ hợp để tính n(Ω), n(A).</li></ul>',
      bai: [[26, 'Biến cố và định nghĩa cổ điển của xác suất', ['xs10']], [27, 'Thực hành tính xác suất theo định nghĩa cổ điển', ['xs10']], BT('IX')] }
  ];
  PLT.buildCourse({ id: 'toan-10', lop: 10, topics: T, gens: G, essays: ESSAY });
})();

/* Toán lớp 12 – Kết nối tri thức với cuộc sống. Lý thuyết tóm tắt bằng lời mới; câu hỏi sinh tự động. */
(function () {
  'use strict';
  const { r, pick, shuffle, fmt, frac, fr, gcd, sup, par, poly, sqrtH, mc, fill, fill1, essay, tableHTML } = PLT.U;
  const { fillV, fillFrac } = PLT.M;
  const G = {};
  const nz = (lo, hi) => { let v; do { v = r(lo, hi); } while (v === 0); return v; };
  const BT = (n) => [0, 'Bài tập cuối chương ' + n, null];
  const ev = (c, x) => c.reduce((s, v) => s * x + v, 0);
  const dpoly = (c) => c.slice(0, -1).map((v, i) => v * (c.length - 1 - i));
  const NORM = [[1, 2, 2, 3], [2, 1, 2, 3], [2, 2, 1, 3], [2, 3, 6, 7], [1, 4, 8, 9], [2, 6, 9, 11], [4, 4, 7, 9]];
  const sgnTerm = (v, s) => (v === 0 ? '' : (v < 0 ? ' − ' : ' + ') + (Math.abs(v) === 1 ? '' : Math.abs(v)) + s);
  const plane = (a, b, c, d) => `${a === 1 ? '' : a === -1 ? '−' : a}x${sgnTerm(b, 'y')}${sgnTerm(c, 'z')}${d ? (d < 0 ? ' − ' : ' + ') + Math.abs(d) : ''} = 0`;

  // ---- I. Ứng dụng đạo hàm ----
  G.cuctri = () => {
    let p, q; do { p = r(-4, 4); q = r(-4, 4); } while (p === q || (p + q) % 2);
    const c = [1, -3 * (p + q) / 2, 3 * p * q, r(-5, 5)]; const lo = Math.min(p, q), hi = Math.max(p, q); const t = r(0, 2);
    if (t === 0) return fill1(`Hàm số y = ${poly(c)} đạt cực đại tại x = ?`, lo, `y' = ${poly(dpoly(c))} = 3(x − ${par(p)})(x − ${par(q)}); y' đổi dấu từ + sang − tại x = ${lo} ⇒ cực đại tại x = ${lo}.`);
    if (t === 1) return fill1(`Hàm số y = ${poly(c)} đạt cực tiểu tại x = ?`, hi, `y' = 3(x − ${par(p)})(x − ${par(q)}); y' đổi dấu từ − sang + tại x = ${hi}.`);
    return mc(`Hàm số y = ${poly(c)} nghịch biến trên khoảng:`, `(${lo}; ${hi})`, [`(−∞; ${lo})`, `(${hi}; +∞)`, 'ℝ'], `y' &lt; 0 khi ${lo} &lt; x &lt; ${hi}.`);
  };
  G.gtln = () => { const p = r(-3, 3), a = p - r(1, 3), b = p + r(1, 3), k = r(-6, 6); const c = [1, -2 * p, p * p + k]; const vals = [a, b, p].map((x) => ev(c, x)); const mx = Math.random() < 0.5; const ans = mx ? Math.max(...vals) : Math.min(...vals); return fill1(`Tìm giá trị ${mx ? 'lớn nhất' : 'nhỏ nhất'} của hàm số y = ${poly(c)} trên đoạn [${a}; ${b}].`, ans, `y' = 0 ⇔ x = ${p} ∈ [${a}; ${b}]. y(${a}) = ${vals[0]}, y(${b}) = ${vals[1]}, y(${p}) = ${vals[2]} ⇒ ${mx ? 'max' : 'min'} = ${ans}.`); };
  G.tiemcan = () => { const c = nz(1, 3), d = c * nz(-4, 4), a = c * nz(-4, 4), b = r(-6, 6); if (a * d === b * c) return G.tiemcan(); return fill(`Đồ thị hàm số y = ${frac(poly([a, b]), poly([c, d]))} có tiệm cận đứng x = m và tiệm cận ngang y = n.`, [{ pre: 'm =', ans: -d / c }, { pre: 'n =', ans: a / c }], `TCĐ: x = ${frac('−d', 'c')} = ${fmt(-d / c)}; TCN: y = ${frac('a', 'c')} = ${fmt(a / c)}.`); };
  G.ungdungDH = () => { const L = r(4, 20) * 2; return fill1(`Một tấm bìa hình chữ nhật có chu vi ${L * 2} cm. Diện tích lớn nhất của tấm bìa là:`, (L / 2) * (L / 2), `Gọi một cạnh x, cạnh kia ${L} − x: S(x) = x(${L} − x) lớn nhất khi x = ${L / 2} ⇒ S = ${(L / 2) * (L / 2)} cm².`, 'cm²'); };

  // ---- II. Vectơ và hệ trục tọa độ trong không gian ----
  G.vectokg = () => {
    const t = r(0, 2);
    if (t === 0) { const u = [r(-5, 5), r(-5, 5), r(-5, 5)], v = [r(-5, 5), r(-5, 5), r(-5, 5)]; return fill1(`Cho u = (${u.join('; ')}), v = (${v.join('; ')}). Tính u · v.`, u[0] * v[0] + u[1] * v[1] + u[2] * v[2], `u · v = x₁x₂ + y₁y₂ + z₁z₂ = ${u[0] * v[0] + u[1] * v[1] + u[2] * v[2]}.`); }
    if (t === 1) { const n = pick(NORM); const s = n.slice(0, 3).map((x) => x * pick([1, -1])); return fill1(`Độ dài của vectơ u = (${s.join('; ')}) là:`, n[3], `|u| = ${sqrtH(`${n[0]}² + ${n[1]}² + ${n[2]}²`)} = ${n[3]}.`); }
    const A = [r(-5, 5), r(-5, 5), r(-5, 5)], B = [r(-5, 5), r(-5, 5), r(-5, 5)]; return fill(`Cho A(${A.join('; ')}), B(${B.join('; ')}). Tọa độ trung điểm I của AB nhân 2, tức (2x; 2y; 2z):`, [{ pre: '2x =', ans: A[0] + B[0] }, { pre: '2y =', ans: A[1] + B[1] }, { pre: '2z =', ans: A[2] + B[2] }], 'Trung điểm I = ((x<sub>A</sub> + x<sub>B</sub>)/2; (y<sub>A</sub> + y<sub>B</sub>)/2; (z<sub>A</sub> + z<sub>B</sub>)/2).');
  };

  // ---- III. Độ phân tán của mẫu ghép nhóm ----
  G.phantan12 = () => { const w = pick([2, 5, 10]), s0 = r(1, 6) * w, f = Array.from({ length: 5 }, () => r(0, 9)); f[0] = f[0] || 1; f[4] = f[4] || 1; const groups = f.map((_, i) => `[${s0 + i * w}; ${s0 + (i + 1) * w})`); return fill1(`${tableHTML(['Nhóm', ...groups], [['Tần số', ...f]])}Khoảng biến thiên của mẫu số liệu ghép nhóm là:`, 5 * w, `R = đầu mút phải nhóm cuối − đầu mút trái nhóm đầu = ${s0 + 5 * w} − ${s0} = ${5 * w}.`); };
  G.phuongsai12 = () => { const d = pick([[2, 4, 6, 8], [1, 3, 5, 7], [3, 5, 7, 9]]); return Math.random() < 0.5 ? fill1(`Mẫu số liệu ${d.join('; ')} có phương sai bằng:`, 5, `x̄ = ${(d[0] + d[3]) / 2}; s² = (9 + 1 + 1 + 9) : 4 = 5.`) : mc('Độ lệch chuẩn bằng:', 'Căn bậc hai số học của phương sai', ['Bình phương của phương sai', 'Một nửa phương sai', 'Khoảng biến thiên chia 2'], 's = √s².'); };

  // ---- IV. Nguyên hàm và tích phân ----
  G.nguyenham = () => { const k = pick([['x<sup>n</sup> (n ≠ −1)', 'x<sup>n+1</sup>/(n+1) + C'], ['cos x', 'sin x + C'], ['sin x', '−cos x + C'], ['e<sup>x</sup>', 'e<sup>x</sup> + C'], ['1/x (x > 0)', 'ln x + C'], ['1/cos²x', 'tan x + C']]); return mc(`Họ nguyên hàm của f(x) = ${k[0]} là:`, k[1], ['x<sup>n+1</sup>/(n+1) + C', 'sin x + C', '−cos x + C', 'e<sup>x</sup> + C', 'ln x + C', 'tan x + C', 'n·x<sup>n−1</sup> + C'].filter((x) => x !== k[1]).slice(0, 3), 'Ghi nhớ bảng nguyên hàm cơ bản; F\'(x) = f(x).'); };
  G.tichphan = () => { const F = [nz(-2, 2), r(-3, 3), r(-4, 4), 0], f = dpoly(F); const a = r(-2, 1), b = a + r(1, 3); return fill1(`Tính ∫<sub>${a}</sub><sup>${b}</sup> (${poly(f)}) dx.`, ev(F, b) - ev(F, a), `Một nguyên hàm F(x) = ${poly(F)}; tích phân = F(${b}) − F(${a}) = ${ev(F, b)} − ${par(ev(F, a))} = ${ev(F, b) - ev(F, a)}.`); };
  G.dientichTP = () => { const b = pick([3, 6]), k = pick([1, 2, 3]); return fill1(`Tính diện tích hình phẳng giới hạn bởi y = ${k === 1 ? '' : k}x<sup>2</sup>, trục hoành, x = 0 và x = ${b}.`, k * b * b * b / 3, `S = ∫<sub>0</sub><sup>${b}</sup> ${k === 1 ? '' : k}x² dx = ${k === 1 ? '' : k}·${frac('x³', 3)}|<sub>0</sub><sup>${b}</sup> = ${k * b * b * b / 3}.`); };

  // ---- V. Tọa độ trong không gian ----
  G.matphang = () => {
    const t = r(0, 3);
    if (t === 0) { const n = pick(NORM).slice(0, 3).map((x) => x * pick([1, -1])), M = [r(-3, 3), r(-3, 3), r(-3, 3)]; const d = -(n[0] * M[0] + n[1] * M[1] + n[2] * M[2]); return fill1(`Mặt phẳng (P) đi qua M(${M.join('; ')}) và có vectơ pháp tuyến n = (${n.join('; ')}) có phương trình ${n[0]}x ${n[1] < 0 ? '−' : '+'} ${Math.abs(n[1])}y ${n[2] < 0 ? '−' : '+'} ${Math.abs(n[2])}z + d = 0. Tìm d.`, d, `d = −(${n[0]}·${par(M[0])} + ${n[1]}·${par(M[1])} + ${n[2]}·${par(M[2])}) = ${d}.`); }
    if (t === 1) { const N = pick(NORM), d = r(-9, 9), M = [r(-3, 3), r(-3, 3), r(-3, 3)]; const num = Math.abs(N[0] * M[0] + N[1] * M[1] + N[2] * M[2] + d); return fillFrac(`Khoảng cách từ M(${M.join('; ')}) đến mặt phẳng (P): ${plane(N[0], N[1], N[2], d)} là:`, num, N[3], `d = ${frac('|ax₀ + by₀ + cz₀ + d|', sqrtH('a² + b² + c²'))} = ${frac(num, N[3])}.`); }
    if (t === 2) { const I = [r(-4, 4), r(-4, 4), r(-4, 4)], R = r(1, 6); return fill(`Mặt cầu (x ${I[0] < 0 ? '+' : '−'} ${Math.abs(I[0])})² + (y ${I[1] < 0 ? '+' : '−'} ${Math.abs(I[1])})² + (z ${I[2] < 0 ? '+' : '−'} ${Math.abs(I[2])})² = ${R * R} có tâm I(a; b; c) và bán kính R:`, [{ pre: 'a =', ans: I[0] }, { pre: 'b =', ans: I[1] }, { pre: 'c =', ans: I[2] }, { pre: 'R =', ans: R }], 'Mặt cầu (x − a)² + (y − b)² + (z − c)² = R² có tâm I(a; b; c), bán kính R.'); }
    const M = [r(-3, 3), r(-3, 3), r(-3, 3)], u = [nz(-4, 4), r(-4, 4), r(-4, 4)], tt = nz(-3, 3); return fill(`Đường thẳng Δ: x = ${M[0]} + ${par(u[0])}t; y = ${M[1]} + ${par(u[1])}t; z = ${M[2]} + ${par(u[2])}t. Điểm ứng với t = ${tt} có tọa độ (x; y; z):`, [{ pre: 'x =', ans: M[0] + u[0] * tt }, { pre: 'y =', ans: M[1] + u[1] * tt }, { pre: 'z =', ans: M[2] + u[2] * tt }], 'Thay giá trị t vào phương trình tham số.');
  };

  // ---- VI. Xác suất có điều kiện ----
  G.xsdk = () => {
    const t = r(0, 2);
    if (t === 0) { const nB = r(10, 30), nAB = r(2, nB - 2); return fillFrac(`Trong một lớp, có ${nB} bạn thích Toán, trong đó ${nAB} bạn thích cả Văn. Chọn ngẫu nhiên một bạn thích Toán. Xác suất bạn đó thích Văn là:`, nAB, nB, `P(A|B) = ${frac('P(AB)', 'P(B)')} = ${frac(nAB, nB)}.`); }
    const pB = r(2, 8) / 10, pA_B = r(5, 9) / 10, pA_nB = r(1, 4) / 10; const pA = Number((pB * pA_B + (1 - pB) * pA_nB).toFixed(4));
    if (t === 1) return fillV(`P(B) = ${fmt(pB)}, P(A|B) = ${fmt(pA_B)}, P(A|B̄) = ${fmt(pA_nB)}. Tính P(A) (công thức xác suất toàn phần).`, pA, fmt(pA), `P(A) = P(B)·P(A|B) + P(B̄)·P(A|B̄) = ${fmt(pB)}·${fmt(pA_B)} + ${fmt(Number((1 - pB).toFixed(2)))}·${fmt(pA_nB)} = ${fmt(pA)}.`);
    const v = Number((pB * pA_B / pA).toFixed(4)); return fillV(`P(B) = ${fmt(pB)}, P(A|B) = ${fmt(pA_B)}, P(A|B̄) = ${fmt(pA_nB)}. Tính P(B|A) theo công thức Bayes (làm tròn 4 chữ số thập phân).`, v, fmt(v), `P(A) = ${fmt(pA)}; P(B|A) = ${frac('P(B)·P(A|B)', 'P(A)')} = ${fmt(Number((pB * pA_B).toFixed(4)))} : ${fmt(pA)} ≈ ${fmt(v)}.`);
  };

  const ESSAY = {
    1: [() => { let p, q; do { p = r(-3, 3); q = r(-3, 3); } while (p === q || (p + q) % 2); const c = [1, -3 * (p + q) / 2, 3 * p * q, 1]; return essay(`Khảo sát sự biến thiên của hàm số y = ${poly(c)}: tìm các khoảng đơn điệu và cực trị.`, 2, `y' = 3(x − ${par(p)})(x − ${par(q)}). Đồng biến trên (−∞; ${Math.min(p, q)}) và (${Math.max(p, q)}; +∞), nghịch biến trên (${Math.min(p, q)}; ${Math.max(p, q)}). CĐ tại x = ${Math.min(p, q)}, y = ${ev(c, Math.min(p, q))}; CT tại x = ${Math.max(p, q)}, y = ${ev(c, Math.max(p, q))}.`, [Math.min(p, q), Math.max(p, q)]); },
      () => { const L = r(5, 15) * 4; return essay(`Người ta muốn rào một mảnh vườn hình chữ nhật sát bờ sông (không rào cạnh giáp sông) bằng ${L} m lưới. Tìm kích thước để diện tích vườn lớn nhất.`, 2, `Cạnh vuông góc bờ sông x, cạnh song song ${L} − 2x; S = x(${L} − 2x) lớn nhất khi x = ${L / 4} m, cạnh kia ${L / 2} m, S max = ${L * L / 8} m².`, [L / 4, L / 2]); }],
    2: [() => { const b = pick([1, 2, 3]); return essay(`Tính diện tích hình phẳng giới hạn bởi đồ thị y = x² − ${b}x và trục hoành.`, 2, `Giao điểm x = 0, x = ${b}. S = ∫<sub>0</sub><sup>${b}</sup> |x² − ${b}x| dx = ${fr(b * b * b, 6)}.`, [b]); },
      () => { const N = pick(NORM), M = [1, 2, 3]; return essay(`Viết phương trình mặt phẳng (P) đi qua M(1; 2; 3) có vectơ pháp tuyến n = (${N[0]}; ${N[1]}; ${N[2]}) và tính khoảng cách từ gốc O đến (P).`, 2, `(P): ${plane(N[0], N[1], N[2], -(N[0] + 2 * N[1] + 3 * N[2]))}; d(O, P) = ${fr(N[0] + 2 * N[1] + 3 * N[2], N[3])}.`, [N[0] + 2 * N[1] + 3 * N[2]]); }]
  };

  const T = [
    { id: 1, hk: 1, ten: 'Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số', widgets: ['parabol'],
      lt: `<ul><li>f'(x) > 0 trên K ⇒ f đồng biến; f'(x) &lt; 0 ⇒ nghịch biến.</li><li><b>Cực trị</b>: f' đổi dấu từ + sang − tại x₀ ⇒ cực đại; từ − sang + ⇒ cực tiểu.</li><li><b>GTLN, GTNN trên đoạn [a; b]</b>: so sánh f tại các điểm tới hạn trong đoạn và tại a, b.</li><li><b>Tiệm cận</b> của y = ${frac('ax + b', 'cx + d')}: đứng x = ${frac('−d', 'c')}, ngang y = ${frac('a', 'c')}.</li><li>Khảo sát: tập xác định → chiều biến thiên → cực trị, tiệm cận → bảng biến thiên → đồ thị.</li></ul>`,
      bai: [[1, 'Tính đơn điệu và cực trị của hàm số', ['cuctri']], [2, 'Giá trị lớn nhất và giá trị nhỏ nhất của hàm số', ['gtln']], [3, 'Đường tiệm cận của đồ thị hàm số', ['tiemcan']], [4, 'Khảo sát sự biến thiên và vẽ đồ thị của hàm số', ['cuctri', 'tiemcan']], [5, 'Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn', ['ungdungDH']], BT('I')] },
    { id: 2, hk: 1, ten: 'Vectơ và hệ trục tọa độ trong không gian', widgets: [],
      lt: '<ul><li>Vectơ trong không gian: tổng, hiệu, tích với một số, tích vô hướng như trong mặt phẳng.</li><li>Hệ trục Oxyz; u = (x; y; z). u ± v, ku tính theo từng tọa độ; u · v = x₁x₂ + y₁y₂ + z₁z₂; |u| = √(x² + y² + z²).</li><li>Trung điểm, trọng tâm tính bằng trung bình cộng tọa độ.</li></ul>',
      bai: [[6, 'Vectơ trong không gian', ['vectokg']], [7, 'Hệ trục tọa độ trong không gian', ['vectokg']], [8, 'Biểu thức tọa độ của các phép toán vectơ', ['vectokg']], BT('II')] },
    { id: 3, hk: 1, ten: 'Các số đặc trưng đo mức độ phân tán của mẫu số liệu ghép nhóm', widgets: [],
      lt: '<ul><li><b>Khoảng biến thiên</b> R = đầu mút phải nhóm cuối − đầu mút trái nhóm đầu.</li><li><b>Khoảng tứ phân vị</b> ΔQ = Q₃ − Q₁ (không bị ảnh hưởng bởi giá trị bất thường).</li><li><b>Phương sai</b> s² = Σ nᵢ(xᵢ − x̄)² : n (xᵢ là giá trị đại diện); <b>độ lệch chuẩn</b> s = √s².</li></ul>',
      bai: [[9, 'Khoảng biến thiên và khoảng tứ phân vị', ['phantan12']], [10, 'Phương sai và độ lệch chuẩn', ['phuongsai12']], BT('III')] },
    { id: 4, hk: 2, ten: 'Nguyên hàm và tích phân', widgets: [],
      lt: `<ul><li>F là nguyên hàm của f nếu F'(x) = f(x); ∫f(x)dx = F(x) + C.</li><li>∫xⁿdx = ${frac('xⁿ⁺¹', 'n + 1')} + C; ∫cos x dx = sin x + C; ∫eˣdx = eˣ + C; ∫${frac(1, 'x')}dx = ln|x| + C.</li><li><b>Tích phân</b> ∫<sub>a</sub><sup>b</sup> f(x)dx = F(b) − F(a).</li><li>Diện tích hình phẳng S = ∫<sub>a</sub><sup>b</sup> |f(x)|dx; thể tích khối tròn xoay V = π∫<sub>a</sub><sup>b</sup> f²(x)dx.</li></ul>`,
      bai: [[11, 'Nguyên hàm', ['nguyenham']], [12, 'Tích phân', ['tichphan']], [13, 'Ứng dụng hình học của tích phân', ['dientichTP']], BT('IV')] },
    { id: 5, hk: 2, ten: 'Phương pháp tọa độ trong không gian', widgets: [],
      lt: `<ul><li>Mặt phẳng qua M(x₀; y₀; z₀), pháp tuyến n = (a; b; c): a(x − x₀) + b(y − y₀) + c(z − z₀) = 0.</li><li>Khoảng cách từ M đến (P): ${frac('|ax₀ + by₀ + cz₀ + d|', sqrtH('a² + b² + c²'))}.</li><li>Đường thẳng qua M, chỉ phương u: x = x₀ + at, y = y₀ + bt, z = z₀ + ct.</li><li>Góc giữa hai đường thẳng, giữa đường thẳng và mặt phẳng, giữa hai mặt phẳng tính qua cos/sin của góc giữa các vectơ.</li><li>Mặt cầu tâm I(a; b; c), bán kính R: (x − a)² + (y − b)² + (z − c)² = R².</li></ul>`,
      bai: [[14, 'Phương trình mặt phẳng', ['matphang']], [15, 'Phương trình đường thẳng trong không gian', ['matphang']], [16, 'Công thức tính góc trong không gian', ['matphang']], [17, 'Phương trình mặt cầu', ['matphang']], BT('V')] },
    { id: 6, hk: 2, ten: 'Xác suất có điều kiện', widgets: ['bocbi'],
      lt: `<ul><li>P(A|B) = ${frac('P(AB)', 'P(B)')} (P(B) > 0).</li><li><b>Công thức nhân</b>: P(AB) = P(B)·P(A|B).</li><li><b>Xác suất toàn phần</b>: P(A) = P(B)·P(A|B) + P(B̄)·P(A|B̄).</li><li><b>Công thức Bayes</b>: P(B|A) = ${frac('P(B)·P(A|B)', 'P(A)')}.</li></ul>`,
      bai: [[18, 'Xác suất có điều kiện', ['xsdk']], [19, 'Công thức xác suất toàn phần và công thức Bayes', ['xsdk']], BT('VI')] }
  ];
  PLT.buildCourse({ id: 'toan-12', lop: 12, topics: T, gens: G, essays: ESSAY });
})();

/* Toán lớp 11 – Kết nối tri thức với cuộc sống. Lý thuyết tóm tắt bằng lời mới; câu hỏi sinh tự động. */
(function () {
  'use strict';
  const { r, pick, shuffle, fmt, frac, fr, gcd, sup, par, poly, sqrtH, mc, fill, fill1, essay, tableHTML } = PLT.U;
  const { fillV, fillFrac } = PLT.M;
  const G = {};
  const nz = (lo, hi) => { let v; do { v = r(lo, hi); } while (v === 0); return v; };
  const BT = (n) => [0, 'Bài tập cuối chương ' + n, null];
  const dpoly = (c) => c.slice(0, -1).map((v, i) => v * (c.length - 1 - i));
  const ev = (c, x) => c.reduce((s, v) => s * x + v, 0);

  // ---- I. Hàm số lượng giác và phương trình lượng giác ----
  G.lg11 = () => {
    const t = r(0, 3);
    if (t === 0) { const k = pick([[1, 6, 30], [1, 4, 45], [1, 3, 60], [1, 2, 90], [2, 3, 120], [3, 4, 135], [5, 6, 150], [1, 1, 180], [3, 2, 270]]); return fill1(`Đổi sang độ: <b>${k[0] === 1 && k[1] === 1 ? 'π' : frac((k[0] === 1 ? '' : k[0]) + 'π', k[1])}</b> rad = ? độ`, k[2], `π rad = 180° nên ${frac((k[0] === 1 ? '' : k[0]) + 'π', k[1])} = ${k[0]}·180° : ${k[1]} = ${k[2]}°.`, '°'); }
    if (t === 1) { const p = pick([[3, 4, 5], [5, 12, 13], [8, 15, 17]]); return fillFrac(`Cho sin α = ${frac(p[0], p[2])} với 0 &lt; α &lt; ${frac('π', 2)}. Tính cos α.`, p[1], p[2], `sin²α + cos²α = 1 ⇒ cos²α = 1 − ${frac(p[0] * p[0], p[2] * p[2])} = ${frac(p[1] * p[1], p[2] * p[2])}; α nhọn nên cos α = ${frac(p[1], p[2])}.`); }
    if (t === 2) { const k = pick([['sin x = ½', 'x = π/6 + k2π hoặc x = 5π/6 + k2π'], ['cos x = ½', 'x = ±π/3 + k2π'], ['tan x = 1', 'x = π/4 + kπ'], ['sin x = 0', 'x = kπ'], ['cos x = 0', 'x = π/2 + kπ']]); return mc(`Nghiệm của phương trình <b>${k[0]}</b> là (k ∈ ℤ):`, k[1], ['x = π/6 + k2π hoặc x = 5π/6 + k2π', 'x = ±π/3 + k2π', 'x = π/4 + kπ', 'x = kπ', 'x = π/2 + kπ'].filter((x) => x !== k[1]).slice(0, 3), 'sin x = sin α ⇔ x = α + k2π hoặc x = π − α + k2π; cos x = cos α ⇔ x = ±α + k2π; tan x = tan α ⇔ x = α + kπ.'); }
    const k = pick([['y = sin x', '2π'], ['y = cos x', '2π'], ['y = tan x', 'π'], ['y = cot x', 'π']]); return mc(`Hàm số <b>${k[0]}</b> tuần hoàn với chu kì:`, k[1], ['π', '2π', 'π/2', '4π'].filter((x) => x !== k[1]), 'sin, cos có chu kì 2π; tan, cot có chu kì π.');
  };

  // ---- II. Dãy số, cấp số cộng, cấp số nhân ----
  G.dayso11 = () => {
    const t = r(0, 3);
    if (t === 0) { const u1 = r(-10, 10), d = nz(-5, 6), n = r(5, 20); return fill1(`Cấp số cộng có u₁ = ${fmt(u1)}, công sai d = ${fmt(d)}. Tính u<sub>${n}</sub>.`, u1 + (n - 1) * d, `u<sub>n</sub> = u₁ + (n − 1)d = ${fmt(u1)} + ${n - 1}·${par(d)} = ${fmt(u1 + (n - 1) * d)}.`); }
    if (t === 1) { const u1 = r(-5, 10), d = nz(-3, 5), n = r(5, 15); const S = n * (2 * u1 + (n - 1) * d) / 2; return fill1(`Cấp số cộng có u₁ = ${fmt(u1)}, d = ${fmt(d)}. Tính tổng ${n} số hạng đầu S<sub>${n}</sub>.`, S, `S<sub>n</sub> = ${frac('n[2u₁ + (n − 1)d]', 2)} = ${frac(`${n}·[${2 * u1} + ${(n - 1) * d}]`, 2)} = ${fmt(S)}.`); }
    if (t === 2) { const u1 = nz(-3, 5), q = pick([2, 3, -2, -1, 2]), n = r(3, 7); return fill1(`Cấp số nhân có u₁ = ${fmt(u1)}, công bội q = ${fmt(q)}. Tính u<sub>${n}</sub>.`, u1 * Math.pow(q, n - 1), `u<sub>n</sub> = u₁·q<sup>n−1</sup> = ${fmt(u1)}·${par(q)}<sup>${n - 1}</sup> = ${fmt(u1 * Math.pow(q, n - 1))}.`); }
    const u1 = r(1, 5), q = pick([2, 3]), n = r(3, 6); return fill1(`Cấp số nhân có u₁ = ${u1}, q = ${q}. Tính S<sub>${n}</sub>.`, u1 * (Math.pow(q, n) - 1) / (q - 1), `S<sub>n</sub> = u₁·${frac('qⁿ − 1', 'q − 1')} = ${u1}·${frac(Math.pow(q, n) - 1, q - 1)} = ${fmt(u1 * (Math.pow(q, n) - 1) / (q - 1))}.`);
  };

  // ---- III. Mẫu số liệu ghép nhóm ----
  G.ghepnhom = () => {
    const w = pick([2, 5, 10]), s0 = r(1, 6) * w, f = Array.from({ length: 4 }, () => r(2, 10)); const groups = f.map((_, i) => `[${s0 + i * w}; ${s0 + (i + 1) * w})`); const mids = f.map((_, i) => s0 + i * w + w / 2); const n = f.reduce((a, b) => a + b, 0);
    const tbl = tableHTML(['Nhóm', ...groups], [['Tần số', ...f]]);
    if (Math.random() < 0.5) { const mean = mids.reduce((s, m, i) => s + m * f[i], 0) / n; return fillV(`${tbl}Tính số trung bình của mẫu số liệu ghép nhóm (làm tròn đến hàng phần trăm).`, Number(mean.toFixed(2)), fmt(Number(mean.toFixed(2))), `Dùng giá trị đại diện (trung điểm mỗi nhóm): x̄ = (${mids.map((m, i) => `${fmt(m)}·${f[i]}`).join(' + ')}) : ${n} ≈ ${fmt(Number(mean.toFixed(2)))}.`); }
    const i = f.indexOf(Math.max(...f)); if (f.filter((x) => x === f[i]).length > 1) return G.ghepnhom(); return mc(`${tbl}Nhóm chứa mốt là:`, groups[i], groups.filter((_, j) => j !== i), 'Nhóm chứa mốt là nhóm có tần số lớn nhất.');
  };

  // ---- IV. Quan hệ song song trong không gian ----
  G.songsong11 = () => { const k = pick([['Hai đường thẳng phân biệt cùng song song với đường thẳng thứ ba thì', 'Song song với nhau'], ['Đường thẳng a không nằm trong (P) và song song với một đường thẳng nằm trong (P) thì', 'a song song với (P)'], ['Hai mặt phẳng phân biệt cùng song song với mặt phẳng thứ ba thì', 'Song song với nhau'], ['Qua ba điểm không thẳng hàng xác định được', 'Đúng một mặt phẳng'], ['Hai đường thẳng không cùng nằm trong một mặt phẳng gọi là', 'Hai đường thẳng chéo nhau']]); return mc(`${k[0]}:`, k[1], ['Song song với nhau', 'a song song với (P)', 'Đúng một mặt phẳng', 'Hai đường thẳng chéo nhau', 'Cắt nhau'].filter((x) => x !== k[1]).slice(0, 3), 'Ôn các tính chất về đường thẳng, mặt phẳng song song và phép chiếu song song.'); };

  // ---- V. Giới hạn, hàm số liên tục ----
  G.gioihan = () => {
    const t = r(0, 3);
    if (t === 0) { const a = nz(-6, 6), b = r(-9, 9), c = nz(1, 6), d = r(-9, 9); return fillFrac(`Tính lim ${frac(poly([a, b], 'n'), poly([c, d], 'n'))}`, a, c, `Chia cả tử và mẫu cho n: giới hạn bằng ${frac(a, c)} ⇒ ${fr(a, c)}.`); }
    if (t === 1) { const a = nz(-5, 5); return fill1(`Tính lim<sub>x→${fmt(a)}</sub> ${frac(`x² − ${a * a}`, `x ${a < 0 ? '+' : '−'} ${Math.abs(a)}`)}`, 2 * a, `x² − ${a * a} = (x − ${par(a)})(x + ${par(a)}) ⇒ giới hạn = lim (x ${a < 0 ? '−' : '+'} ${Math.abs(a)}) = ${fmt(2 * a)}.`); }
    if (t === 2) { const c = [nz(-3, 3), r(-5, 5), r(-5, 5)], x = r(-3, 3); return fill1(`Tính lim<sub>x→${fmt(x)}</sub> (${poly(c)})`, ev(c, x), `Hàm đa thức liên tục nên giới hạn bằng giá trị tại x = ${fmt(x)}: ${fmt(ev(c, x))}.`); }
    const q = pick([['1/2', 0], ['(−1/3)', 0]]); return mc(`lim ${q[0]}<sup>n</sup> bằng:`, '0', ['1', '+∞', 'Không tồn tại'], 'Nếu |q| &lt; 1 thì lim qⁿ = 0.');
  };

  // ---- VI. Hàm số mũ và hàm số lôgarit ----
  G.mulog = () => {
    const t = r(0, 4), a = pick([2, 3, 5, 10]);
    if (t === 0) { const k = r(1, a === 2 ? 6 : 3); return fill1(`Tính log<sub>${a}</sub> ${fmt(Math.pow(a, k))}`, k, `${a}<sup>${k}</sup> = ${fmt(Math.pow(a, k))} nên log<sub>${a}</sub> ${fmt(Math.pow(a, k))} = ${k}.`); }
    if (t === 1) { const k = r(2, a === 2 ? 6 : 4); return fill1(`Giải phương trình ${a}<sup>x</sup> = ${fmt(Math.pow(a, k))}.`, k, `${a}<sup>x</sup> = ${a}<sup>${k}</sup> ⇔ x = ${k}.`); }
    if (t === 2) { const k = r(1, 4); return fill1(`Giải phương trình log<sub>${a}</sub> x = ${k}.`, Math.pow(a, k), `x = ${a}<sup>${k}</sup> = ${fmt(Math.pow(a, k))} (thỏa điều kiện x > 0).`); }
    if (t === 3) { const m = r(2, 6), n = r(2, 6); return fill1(`Tính log<sub>2</sub> ${Math.pow(2, m)} + log<sub>2</sub> ${Math.pow(2, n)}`, m + n, `log<sub>a</sub> b + log<sub>a</sub> c = log<sub>a</sub>(bc): ${m} + ${n} = ${m + n}.`); }
    return mc('Hàm số y = log<sub>a</sub> x (a > 1) có tập xác định là:', '(0; +∞)', ['ℝ', '[0; +∞)', '(1; +∞)'], 'Lôgarit chỉ xác định khi biểu thức dưới log dương.');
  };

  // ---- VII. Quan hệ vuông góc ----
  G.vuonggoc = () => {
    const t = r(0, 3), a = r(1, 9);
    if (t === 0) return fill(`Hình lập phương cạnh a = ${a} cm. Đường chéo của hình lập phương bằng k${sqrtH(3)} cm. Tìm k.`, [{ pre: 'k =', ans: a }], `Đường chéo = a${sqrtH(3)} = ${a}${sqrtH(3)}.`);
    if (t === 1) { const h = r(1, 6) * 3; return fill1(`Hình chóp có đáy là hình vuông cạnh ${a} cm, chiều cao ${h} cm. Thể tích là:`, a * a * h / 3, `V = ${frac(1, 3)}·S<sub>đáy</sub>·h = ${frac(1, 3)}·${a * a}·${h} = ${a * a * h / 3} (cm³).`, 'cm³'); }
    if (t === 2) return fill1(`Hình lập phương ABCD.A'B'C'D' cạnh ${a}. Khoảng cách từ A đến mặt phẳng (BCC'B') là:`, a, 'AB ⊥ (BCC\'B\') nên khoảng cách bằng AB = a.');
    const k = pick([['Góc giữa đường thẳng AA\' và mặt phẳng (ABCD) của hình lập phương', '90°'], ['Góc giữa hai đường thẳng AB và CD\' (hình lập phương)', '45°'], ['Góc giữa hai mặt phẳng (ABCD) và (ABB\'A\') của hình lập phương', '90°']]); return mc(`${k[0]} bằng:`, k[1], ['30°', '45°', '60°', '90°'].filter((x) => x !== k[1]), 'Dùng tính chất vuông góc và hình chiếu trong hình lập phương.');
  };

  // ---- VIII. Các quy tắc tính xác suất ----
  G.xs11 = () => { const pa = r(2, 8) / 10, pb = r(2, 8) / 10; const t = r(0, 2); if (t === 0) return fillV(`A, B là hai biến cố độc lập với P(A) = ${fmt(pa)}, P(B) = ${fmt(pb)}. Tính P(AB).`, Number((pa * pb).toFixed(4)), fmt(Number((pa * pb).toFixed(4))), `P(AB) = P(A)·P(B) = ${fmt(Number((pa * pb).toFixed(4)))}.`); if (t === 1) return fillV(`A, B độc lập, P(A) = ${fmt(pa)}, P(B) = ${fmt(pb)}. Tính P(A ∪ B).`, Number((pa + pb - pa * pb).toFixed(4)), fmt(Number((pa + pb - pa * pb).toFixed(4))), `P(A ∪ B) = P(A) + P(B) − P(AB) = ${fmt(pa)} + ${fmt(pb)} − ${fmt(Number((pa * pb).toFixed(4)))} = ${fmt(Number((pa + pb - pa * pb).toFixed(4)))}.`); return fillV(`Hai xạ thủ độc lập bắn trúng với xác suất ${fmt(pa)} và ${fmt(pb)}. Xác suất cả hai cùng bắn trượt là:`, Number(((1 - pa) * (1 - pb)).toFixed(4)), fmt(Number(((1 - pa) * (1 - pb)).toFixed(4))), `(1 − ${fmt(pa)})(1 − ${fmt(pb)}) = ${fmt(Number(((1 - pa) * (1 - pb)).toFixed(4)))}.`); };

  // ---- IX. Đạo hàm ----
  G.daoham = () => {
    const t = r(0, 3);
    if (t === 0) { const c = [nz(-3, 3), r(-5, 5), r(-6, 6), r(-5, 5)], x = r(-2, 2); return fill1(`Cho f(x) = ${poly(c)}. Tính f'(${fmt(x)}).`, ev(dpoly(c), x), `f'(x) = ${poly(dpoly(c))} ⇒ f'(${fmt(x)}) = ${fmt(ev(dpoly(c), x))}.`); }
    if (t === 1) { const k = pick([['sin x', 'cos x'], ['cos x', '−sin x'], ['e<sup>x</sup>', 'e<sup>x</sup>'], ['ln x', '1/x'], ['√x', '1/(2√x)'], ['tan x', '1/cos²x']]); return mc(`Đạo hàm của y = ${k[0]} là:`, k[1], ['cos x', '−sin x', 'e<sup>x</sup>', '1/x', '1/(2√x)', '1/cos²x', 'x·e<sup>x−1</sup>'].filter((x) => x !== k[1]).slice(0, 3), 'Ghi nhớ bảng đạo hàm các hàm số sơ cấp cơ bản.'); }
    if (t === 2) { const c = [nz(-2, 2), r(-4, 4), r(-5, 5)], x = r(-3, 3); return fill1(`Hệ số góc của tiếp tuyến với đồ thị y = ${poly(c)} tại điểm có hoành độ x₀ = ${fmt(x)} là:`, ev(dpoly(c), x), `k = y'(x₀) = ${fmt(ev(dpoly(c), x))}.`); }
    const c = [nz(-2, 2), r(-4, 4), r(-4, 4), r(-4, 4)], x = r(-2, 2); return fill1(`Cho f(x) = ${poly(c)}. Tính f''(${fmt(x)}).`, ev(dpoly(dpoly(c)), x), `f''(x) = ${poly(dpoly(dpoly(c)))} ⇒ f''(${fmt(x)}) = ${fmt(ev(dpoly(dpoly(c)), x))}.`);
  };

  const ESSAY = {
    1: [() => { const u1 = r(1, 5), d = r(2, 5), n = r(8, 15); return essay(`Một cấp số cộng có u₁ = ${u1}, u₄ = ${u1 + 3 * d}. Tìm công sai d và tổng ${n} số hạng đầu.`, 2, `d = (${u1 + 3 * d} − ${u1}) : 3 = ${d}; S<sub>${n}</sub> = ${n}(2·${u1} + ${n - 1}·${d})/2 = ${n * (2 * u1 + (n - 1) * d) / 2}.`, [d, n * (2 * u1 + (n - 1) * d) / 2]); },
      () => { const a = nz(-4, 4); return essay(`Tính giới hạn lim<sub>x→${a}</sub> (x² − ${a * a})/(x − ${par(a)}) và xét tính liên tục của hàm số f(x) = (x² − ${a * a})/(x − ${par(a)}) khi x ≠ ${a}, f(${a}) = ${2 * a}.`, 2, `Giới hạn bằng ${2 * a} = f(${a}) nên f liên tục tại x = ${a}.`, [2 * a]); }],
    2: [() => { const k = r(2, 5); return essay(`Giải phương trình 2<sup>x+1</sup> = ${Math.pow(2, k + 1)} và log<sub>3</sub>(x − 1) = 2.`, 2, `2<sup>x+1</sup> = 2<sup>${k + 1}</sup> ⇒ x = ${k}; x − 1 = 9 ⇒ x = 10.`, [k, 10]); },
      () => { const c = [1, -3, 0, 2], x = pick([-1, 2, 3]); return essay(`Cho hàm số y = x³ − 3x² + 2. Viết phương trình tiếp tuyến của đồ thị tại điểm có hoành độ x₀ = ${x}.`, 2, `y' = 3x² − 6x; y'(${x}) = ${3 * x * x - 6 * x}; y(${x}) = ${ev(c, x)}; tiếp tuyến y = ${3 * x * x - 6 * x}(x − ${par(x)}) + ${par(ev(c, x))}.`, [3 * x * x - 6 * x, ev(c, x)]); }]
  };

  const T = [
    { id: 1, hk: 1, ten: 'Hàm số lượng giác và phương trình lượng giác', widgets: ['vonglg'],
      lt: `<ul><li>Góc lượng giác, đơn vị radian: π rad = 180°.</li><li>sin²α + cos²α = 1; công thức cộng, nhân đôi, biến đổi tổng – tích.</li><li>Hàm số y = sin x, cos x tuần hoàn chu kì 2π; y = tan x, cot x chu kì π.</li><li>Phương trình cơ bản: sin x = sin α ⇔ x = α + k2π hoặc x = π − α + k2π; cos x = cos α ⇔ x = ±α + k2π; tan x = tan α ⇔ x = α + kπ.</li></ul>`,
      bai: [[1, 'Giá trị lượng giác của góc lượng giác', ['lg11']], [2, 'Công thức lượng giác', ['lg11']], [3, 'Hàm số lượng giác', ['lg11']], [4, 'Phương trình lượng giác cơ bản', ['lg11']], BT('I')] },
    { id: 2, hk: 1, ten: 'Dãy số. Cấp số cộng và cấp số nhân', widgets: [],
      lt: `<ul><li>Dãy số tăng, giảm, bị chặn.</li><li><b>Cấp số cộng</b>: u<sub>n</sub> = u₁ + (n − 1)d; S<sub>n</sub> = ${frac('n(u₁ + uₙ)', 2)}.</li><li><b>Cấp số nhân</b>: u<sub>n</sub> = u₁·q<sup>n−1</sup>; S<sub>n</sub> = u₁·${frac('1 − qⁿ', '1 − q')} (q ≠ 1).</li></ul>`,
      bai: [[5, 'Dãy số', ['dayso11']], [6, 'Cấp số cộng', ['dayso11']], [7, 'Cấp số nhân', ['dayso11']], BT('II')] },
    { id: 3, hk: 1, ten: 'Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm', widgets: [],
      lt: '<ul><li>Mẫu số liệu ghép nhóm: chia dữ liệu thành các nhóm [a; b) với tần số tương ứng.</li><li>Giá trị đại diện của nhóm là trung điểm (a + b) : 2. Số trung bình x̄ = Σ(giá trị đại diện × tần số) : n.</li><li>Trung vị, tứ phân vị, mốt tính theo công thức nội suy trong nhóm chứa nó; nhóm chứa mốt là nhóm có tần số lớn nhất.</li></ul>',
      bai: [[8, 'Mẫu số liệu ghép nhóm', ['ghepnhom']], [9, 'Các số đặc trưng đo xu thế trung tâm', ['ghepnhom']], BT('III')] },
    { id: 4, hk: 1, ten: 'Quan hệ song song trong không gian', widgets: [],
      lt: '<ul><li>Mặt phẳng được xác định bởi ba điểm không thẳng hàng, hoặc một đường thẳng và một điểm ngoài nó, hoặc hai đường thẳng cắt nhau.</li><li>Hai đường thẳng: cắt nhau, song song, trùng nhau, chéo nhau.</li><li>Đường thẳng song song với mặt phẳng; hai mặt phẳng song song; định lí Thalès trong không gian.</li><li>Phép chiếu song song: giữ tính thẳng hàng, song song và tỉ số đoạn thẳng cùng phương.</li></ul>',
      bai: [[10, 'Đường thẳng và mặt phẳng trong không gian', ['songsong11']], [11, 'Hai đường thẳng song song', ['songsong11']], [12, 'Đường thẳng và mặt phẳng song song', ['songsong11']], [13, 'Hai mặt phẳng song song', ['songsong11']], [14, 'Phép chiếu song song', ['songsong11']], BT('IV')] },
    { id: 5, hk: 1, ten: 'Giới hạn. Hàm số liên tục', widgets: [],
      lt: `<ul><li>lim ${frac(1, 'n')} = 0; lim qⁿ = 0 nếu |q| &lt; 1. Với phân thức bậc tử = bậc mẫu: giới hạn bằng tỉ số hệ số bậc cao nhất.</li><li>Cấp số nhân lùi vô hạn: S = ${frac('u₁', '1 − q')}.</li><li>Giới hạn hàm số dạng ${frac(0, 0)}: phân tích thành nhân tử rồi rút gọn.</li><li>Hàm số liên tục tại x₀ ⇔ lim<sub>x→x₀</sub> f(x) = f(x₀). Đa thức, phân thức liên tục trên tập xác định.</li></ul>`,
      bai: [[15, 'Giới hạn của dãy số', ['gioihan']], [16, 'Giới hạn của hàm số', ['gioihan']], [17, 'Hàm số liên tục', ['gioihan']], BT('V')] },
    { id: 6, hk: 2, ten: 'Hàm số mũ và hàm số lôgarit', widgets: [],
      lt: '<ul><li>Lũy thừa số mũ thực: a<sup>m</sup>·a<sup>n</sup> = a<sup>m+n</sup>; (a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup>.</li><li>log<sub>a</sub> b = c ⇔ a<sup>c</sup> = b (a > 0, a ≠ 1, b > 0). log<sub>a</sub>(bc) = log<sub>a</sub> b + log<sub>a</sub> c; log<sub>a</sub> b<sup>n</sup> = n·log<sub>a</sub> b.</li><li>y = a<sup>x</sup> có tập xác định ℝ; y = log<sub>a</sub> x có tập xác định (0; +∞); đồng biến nếu a > 1, nghịch biến nếu 0 &lt; a &lt; 1.</li><li>Phương trình a<sup>x</sup> = b ⇔ x = log<sub>a</sub> b (b > 0); log<sub>a</sub> x = b ⇔ x = a<sup>b</sup>.</li></ul>',
      bai: [[18, 'Lũy thừa với số mũ thực', ['mulog']], [19, 'Lôgarit', ['mulog']], [20, 'Hàm số mũ và hàm số lôgarit', ['mulog']], [21, 'Phương trình, bất phương trình mũ và lôgarit', ['mulog']], BT('VI')] },
    { id: 7, hk: 2, ten: 'Quan hệ vuông góc trong không gian', widgets: [],
      lt: `<ul><li>Hai đường thẳng vuông góc khi góc giữa chúng bằng 90°.</li><li>Đường thẳng vuông góc với mặt phẳng ⇔ vuông góc với hai đường thẳng cắt nhau trong mặt phẳng đó.</li><li>Góc giữa đường thẳng và mặt phẳng là góc giữa đường thẳng và hình chiếu của nó. Hai mặt phẳng vuông góc khi góc nhị diện bằng 90°.</li><li>Khoảng cách; thể tích khối chóp V = ${frac(1, 3)}Bh, khối lăng trụ V = Bh.</li></ul>`,
      bai: [[22, 'Hai đường thẳng vuông góc', ['vuonggoc']], [23, 'Đường thẳng vuông góc với mặt phẳng', ['vuonggoc']], [24, 'Phép chiếu vuông góc. Góc giữa đường thẳng và mặt phẳng', ['vuonggoc']], [25, 'Hai mặt phẳng vuông góc', ['vuonggoc']], [26, 'Khoảng cách', ['vuonggoc']], [27, 'Thể tích', ['vuonggoc']], BT('VII')] },
    { id: 8, hk: 2, ten: 'Các quy tắc tính xác suất', widgets: ['bocbi'],
      lt: '<ul><li>Biến cố hợp A ∪ B, giao AB; A, B xung khắc nếu không cùng xảy ra.</li><li><b>Công thức cộng</b>: P(A ∪ B) = P(A) + P(B) − P(AB) (xung khắc: P(AB) = 0).</li><li>A, B <b>độc lập</b>: P(AB) = P(A)·P(B).</li></ul>',
      bai: [[28, 'Biến cố hợp, biến cố giao, biến cố độc lập', ['xs11']], [29, 'Công thức cộng xác suất', ['xs11']], [30, 'Công thức nhân xác suất cho hai biến cố độc lập', ['xs11']], BT('VIII')] },
    { id: 9, hk: 2, ten: 'Đạo hàm', widgets: ['parabol'],
      lt: `<ul><li>f'(x₀) = lim ${frac('f(x) − f(x₀)', 'x − x₀')}; ý nghĩa: hệ số góc tiếp tuyến, vận tốc tức thời.</li><li>(xⁿ)' = n·xⁿ⁻¹; (sin x)' = cos x; (cos x)' = −sin x; (eˣ)' = eˣ; (ln x)' = ${frac(1, 'x')}.</li><li>(u ± v)' = u' ± v'; (uv)' = u'v + uv'; (${frac('u', 'v')})' = ${frac("u'v − uv'", 'v²')}; đạo hàm hàm hợp.</li><li>Tiếp tuyến tại M(x₀; y₀): y = f'(x₀)(x − x₀) + y₀. Đạo hàm cấp hai f''(x) = (f'(x))'.</li></ul>`,
      bai: [[31, 'Định nghĩa và ý nghĩa của đạo hàm', ['daoham']], [32, 'Các quy tắc tính đạo hàm', ['daoham']], [33, 'Đạo hàm cấp hai', ['daoham']], BT('IX')] }
  ];
  PLT.buildCourse({ id: 'toan-11', lop: 11, topics: T, gens: G, essays: ESSAY });
})();

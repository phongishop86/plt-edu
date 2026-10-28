/* Toán lớp 9 – Kết nối tri thức với cuộc sống. Lý thuyết tóm tắt bằng lời mới; câu hỏi sinh tự động. */
(function () {
  'use strict';
  const { r, pick, shuffle, fmt, frac, fr, gcd, sup, par, poly, sqrtH, mc, fill, fill1, order, sort, essay, tableHTML } = PLT.U;
  const { big, distinct, barSVG, fillV, fillFrac } = PLT.M;
  const G = {};
  const nz = (lo, hi) => { let v; do { v = r(lo, hi); } while (v === 0); return v; };
  const L = () => [0, 'Luyện tập chung', null], BT = (n) => [0, 'Bài tập cuối chương ' + n, null];
  const term = (a, v, first) => (a === 0 ? '' : (first ? (a < 0 ? '−' : '') : (a < 0 ? ' − ' : ' + ')) + (Math.abs(a) === 1 ? '' : Math.abs(a)) + v);
  const eq2 = (a, b, c) => `${term(a, 'x', true)}${term(b, 'y')} = ${fmt(c)}`;

  // ---- I. Hệ hai phương trình bậc nhất hai ẩn ----
  G.hept = () => { let a, b, c, d; const x = nz(-6, 6), y = nz(-6, 6); do { a = nz(-4, 4); b = nz(-4, 4); c = nz(-4, 4); d = nz(-4, 4); } while (a * d - b * c === 0); return fill(`Giải hệ phương trình: <div class="sys">{ ${eq2(a, b, a * x + b * y)}<br>{ ${eq2(c, d, c * x + d * y)}</div>`, [{ pre: 'x =', ans: x }, { pre: 'y =', ans: y }], `Dùng phương pháp thế hoặc cộng đại số. Nghiệm (x; y) = (${fmt(x)}; ${fmt(y)}). Thử lại: ${fmt(a)}·${par(x)} ${b < 0 ? '−' : '+'} ${Math.abs(b)}·${par(y)} = ${fmt(a * x + b * y)}.`); };
  G.lapHePT = () => { const x = r(3, 15), y = r(3, 15), p = r(2, 5), q = r(3, 8); if (p === q) return G.lapHePT(); return fill(`Mua ${x + y} quyển gồm vở loại A giá ${p} nghìn đồng/quyển và vở loại B giá ${q} nghìn đồng/quyển, hết ${p * x + q * y} nghìn đồng. Tìm số vở mỗi loại.`, [{ pre: 'Loại A:', ans: x }, { pre: 'Loại B:', ans: y }], `Gọi số vở A, B là x, y: x + y = ${x + y}; ${p}x + ${q}y = ${p * x + q * y} ⇒ x = ${x}, y = ${y}.`); };

  // ---- II. Phương trình và bất phương trình bậc nhất một ẩn ----
  G.pttich = () => { const p = nz(-9, 9), q = nz(-9, 9); if (p === q) return G.pttich(); const lo = Math.min(p, q), hi = Math.max(p, q); return fill(`Giải phương trình: <b>(x ${p < 0 ? '+' : '−'} ${Math.abs(p)})(x ${q < 0 ? '+' : '−'} ${Math.abs(q)}) = 0</b>. Ghi hai nghiệm từ bé đến lớn.`, [{ pre: 'x₁ =', ans: lo }, { pre: 'x₂ =', ans: hi }], `Tích bằng 0 khi một thừa số bằng 0: x = ${fmt(p)} hoặc x = ${fmt(q)}.`); };
  G.bpt = () => { const a = nz(-6, 6), x0 = r(-8, 8), b = -a * x0; const s = a > 0 ? '>' : '<'; if (Math.random() < 0.3) return mc('Nếu a > b và c < 0 thì:', 'ac < bc', ['ac > bc', 'ac = bc', 'a + c < b + c'], 'Nhân hai vế của bất đẳng thức với số âm thì đổi chiều.'); return mc(`Nghiệm của bất phương trình <b>${poly([a, b])} > 0</b> là:`, `x ${s} ${fmt(x0)}`, [`x ${a > 0 ? '<' : '>'} ${fmt(x0)}`, `x ${s} ${fmt(-x0 || 1)}`, `x ${s} ${fmt(x0 + 1)}`], `${fmt(a)}x > ${fmt(-b)} ⇒ x ${s} ${fmt(x0)}${a < 0 ? ' (chia cho số âm nên đổi chiều)' : ''}.`); };

  // ---- III. Căn bậc hai, căn bậc ba ----
  G.can9 = () => {
    const t = r(0, 3);
    if (t === 0) { const k = r(2, 9), m = pick([2, 3, 5, 6, 7]); return fill(`Đưa thừa số ra ngoài dấu căn: ${sqrtH(k * k * m)} = a${sqrtH(m)}.`, [{ pre: 'a =', ans: k }], `${sqrtH(k * k * m)} = ${sqrtH(`${k * k}·${m}`)} = ${k}${sqrtH(m)}.`); }
    if (t === 1) { const a = pick([2, 3, 5, 8, 12, 18]), b = pick([2, 8, 18, 32, 50, 3, 12, 27]); const p = a * b; const k = Math.sqrt(p); if (k !== Math.round(k)) return G.can9(); return fill1(`Tính: ${sqrtH(a)} · ${sqrtH(b)}`, k, `${sqrtH(a)}·${sqrtH(b)} = ${sqrtH(p)} = ${k}.`); }
    if (t === 2) { const a = r(2, 9); return fill1(`Tính: ∛${a * a * a}`, a, `${a}<sup>3</sup> = ${a * a * a} nên ∛${a * a * a} = ${a}.`); }
    const a = nz(-9, 9); return fill1(`Tính: ${sqrtH(`(${fmt(a)})<sup>2</sup>`)}`, Math.abs(a), `${sqrtH('A<sup>2</sup>')} = |A| = ${Math.abs(a)}.`);
  };
  G.rutgonCan = () => { const m = pick([2, 3, 5]), a = r(1, 5), b = r(1, 5); return fill(`Rút gọn: ${sqrtH(a * a * m)} + ${sqrtH(b * b * m)} = k${sqrtH(m)}.`, [{ pre: 'k =', ans: a + b }], `${a}${sqrtH(m)} + ${b}${sqrtH(m)} = ${a + b}${sqrtH(m)}.`); };

  // ---- IV. Hệ thức lượng trong tam giác vuông ----
  G.ltg = () => {
    const t = r(0, 2), p = pick([[3, 4, 5], [5, 12, 13], [8, 15, 17], [6, 8, 10]]);
    if (t === 0) { const fn = pick(['sin', 'cos', 'tan']); const v = { sin: [p[1], p[2]], cos: [p[0], p[2]], tan: [p[1], p[0]] }[fn]; return fillFrac(`Tam giác ABC vuông tại A có AB = ${p[0]}, AC = ${p[1]}, BC = ${p[2]}. Tính <b>${fn} B</b>.`, v[0], v[1], `${fn} B = ${{ sin: 'cạnh đối : cạnh huyền = AC : BC', cos: 'cạnh kề : cạnh huyền = AB : BC', tan: 'cạnh đối : cạnh kề = AC : AB' }[fn]} = ${fr(v[0], v[1])}.`); }
    if (t === 1) { const k = pick([['sin 30°', '1/2'], ['cos 60°', '1/2'], ['tan 45°', '1'], ['sin 90°', '1'], ['cos 30°', '√3/2'], ['sin 45°', '√2/2'], ['tan 60°', '√3']]); return mc(`Giá trị của <b>${k[0]}</b> là:`, k[1], ['1/2', '1', '√3/2', '√2/2', '√3', '√3/3'].filter((x) => x !== k[1]).slice(0, 3), 'Ghi nhớ bảng giá trị lượng giác của các góc đặc biệt 30°, 45°, 60°.'); }
    const h = r(2, 20) * 2; return fill1(`Tam giác ABC vuông tại A, cạnh huyền BC = ${h} cm, góc B = 30°. Tính AC.`, h / 2, `AC = BC · sin B = ${h} · sin 30° = ${h} · ${frac(1, 2)} = ${h / 2} (cm).`, 'cm');
  };

  // ---- V. Đường tròn ----
  G.duongtron9 = () => {
    const t = r(0, 3);
    if (t === 0) { const R = r(2, 15), d = r(1, 25); const k = d < R ? 'Cắt nhau (2 điểm chung)' : d === R ? 'Tiếp xúc (1 điểm chung)' : 'Không giao nhau'; return mc(`Đường tròn (O; ${R} cm) và đường thẳng a cách O một khoảng ${d} cm. Vị trí tương đối là:`, k, ['Cắt nhau (2 điểm chung)', 'Tiếp xúc (1 điểm chung)', 'Không giao nhau'].filter((x) => x !== k), 'So sánh d và R: d < R cắt nhau; d = R tiếp xúc; d > R không giao nhau.'); }
    if (t === 1) { const R = pick([3, 6, 9, 12, 18]), n = pick([30, 60, 90, 120]); return fill(`Độ dài cung n° = ${n}° của đường tròn bán kính R = ${R} cm là l = kπ (cm). Tìm k.`, [{ pre: 'k =', ans: R * n / 180 }], `l = ${frac('πRn', 180)} = ${frac(`π·${R}·${n}`, 180)} = ${fmt(R * n / 180)}π (cm).`); }
    if (t === 2) { const R = pick([2, 3, 4, 6, 12]), n = pick([30, 60, 90, 120, 180]); return fill(`Diện tích hình quạt tròn bán kính ${R} cm, cung ${n}° là S = kπ (cm²). Tìm k.`, [{ pre: 'k =', ans: R * R * n / 360 }], `S = ${frac('πR²n', 360)} = ${fmt(R * R * n / 360)}π (cm²).`); }
    const R = r(5, 13), d = pick([[3, 4, 5], [6, 8, 10], [5, 12, 13]]).filter(() => true); const p = pick([[3, 4, 5], [6, 8, 10], [5, 12, 13]]); return fill1(`Đường tròn (O; ${p[2]} cm) có dây AB cách tâm O một khoảng ${p[0]} cm. Độ dài dây AB là:`, 2 * p[1], `Gọi H là trung điểm AB: AH = ${sqrtH(`${p[2]}² − ${p[0]}²`)} = ${p[1]} ⇒ AB = ${2 * p[1]} cm.`, 'cm');
  };

  // ---- VI. Hàm số y = ax², phương trình bậc hai ----
  G.ax2 = () => { const a = pick([1, 2, 3, -1, -2, 0.5]), x = nz(-4, 4); return Math.random() < 0.5 ? fillV(`Cho hàm số y = ${fmt(a)}x<sup>2</sup>. Tính y khi x = ${fmt(x)}.`, a * x * x, fmt(a * x * x), `y = ${fmt(a)} · ${par(x)}<sup>2</sup> = ${fmt(a * x * x)}.`) : mc(`Đồ thị hàm số y = ${fmt(a)}x<sup>2</sup>:`, a > 0 ? 'Nằm phía trên trục hoành, nhận O là điểm thấp nhất' : 'Nằm phía dưới trục hoành, nhận O là điểm cao nhất', [a > 0 ? 'Nằm phía dưới trục hoành, nhận O là điểm cao nhất' : 'Nằm phía trên trục hoành, nhận O là điểm thấp nhất', 'Là một đường thẳng đi qua gốc tọa độ'], 'Đồ thị y = ax² là parabol đỉnh O, đối xứng qua trục Oy; a > 0 quay bề lõm lên trên, a < 0 quay xuống dưới.'); };
  G.pt2 = () => {
    const t = r(0, 2), p = nz(-9, 9), q = nz(-9, 9), b = -(p + q), c = p * q;
    if (t === 0) { const lo = Math.min(p, q), hi = Math.max(p, q); if (p === q) return G.pt2(); return fill(`Giải phương trình: <b>${poly([1, b, c])} = 0</b>. Ghi hai nghiệm từ bé đến lớn.`, [{ pre: 'x₁ =', ans: lo }, { pre: 'x₂ =', ans: hi }], `Δ = ${b * b - 4 * c} > 0; x = ${frac(`${fmt(-b)} ± ${sqrtH(b * b - 4 * c)}`, 2)} ⇒ x₁ = ${lo}, x₂ = ${hi}.`); }
    if (t === 1) { const A = nz(-3, 3), B = r(-8, 8), C = r(-8, 8); const D = B * B - 4 * A * C; const k = D > 0 ? 'Hai nghiệm phân biệt' : D === 0 ? 'Nghiệm kép' : 'Vô nghiệm'; return mc(`Phương trình <b>${poly([A, B, C])} = 0</b> có:`, k, ['Hai nghiệm phân biệt', 'Nghiệm kép', 'Vô nghiệm'].filter((x) => x !== k), `Δ = b<sup>2</sup> − 4ac = ${D}. Δ > 0: hai nghiệm phân biệt; Δ = 0: nghiệm kép; Δ < 0: vô nghiệm.`); }
    return fill(`Không giải phương trình <b>${poly([1, b, c])} = 0</b>, hãy tính tổng và tích hai nghiệm.`, [{ pre: 'x₁ + x₂ =', ans: -b }, { pre: 'x₁ · x₂ =', ans: c }], `Định lí Viète: x₁ + x₂ = ${frac('−b', 'a')} = ${fmt(-b)}; x₁x₂ = ${frac('c', 'a')} = ${fmt(c)}.`);
  };

  // ---- VII. Tần số ----
  G.tanso = () => { const vals = [5, 6, 7, 8, 9, 10]; const data = Array.from({ length: r(12, 20) }, () => pick(vals)); const v = pick(data); const f = data.filter((x) => x === v).length; return Math.random() < 0.5 ? fill1(`Điểm kiểm tra của một nhóm: <b>${data.join(', ')}</b>. Tần số của giá trị ${v} là:`, f, `Đếm số lần giá trị ${v} xuất hiện: ${f}.`) : fillV(`Điểm kiểm tra của một nhóm: <b>${data.join(', ')}</b>. Tần số tương đối (%) của giá trị ${v} là (làm tròn đến hàng phần mười):`, Number((f / data.length * 100).toFixed(1)), fmt(Number((f / data.length * 100).toFixed(1))), `f = ${f} : ${data.length} · 100% ≈ ${fmt(Number((f / data.length * 100).toFixed(1)))}%.`, '%'); };

  // ---- VIII. Xác suất ----
  G.xs9 = () => { const t = r(0, 2); if (t === 0) return fillFrac('Tung hai đồng xu cân đối. Xác suất cả hai đồng xu đều xuất hiện mặt ngửa là:', 1, 4, 'Không gian mẫu {SS, SN, NS, NN} có 4 kết quả đồng khả năng; chỉ 1 kết quả thuận lợi.'); if (t === 1) { const s = r(2, 12); const k = [...Array(36)].filter((_, i) => Math.floor(i / 6) + 1 + (i % 6) + 1 === s).length; return fillFrac(`Gieo hai xúc xắc cân đối. Xác suất tổng số chấm bằng ${s} là:`, k, 36, `Có 36 kết quả đồng khả năng; số kết quả có tổng ${s} là ${k} ⇒ ${fr(k, 36)}.`); } return fill1('Gieo một đồng xu rồi gieo một xúc xắc. Không gian mẫu có bao nhiêu phần tử?', 12, '2 · 6 = 12 kết quả.'); };

  // ---- IX. Đường tròn ngoại tiếp, nội tiếp ----
  G.noitiep = () => {
    const t = r(0, 2);
    if (t === 0) { const n = r(20, 170) * 2; return fill1(`Góc nội tiếp chắn cung có số đo ${n > 340 ? 140 : n}° có số đo là:`, (n > 340 ? 140 : n) / 2, 'Góc nội tiếp bằng nửa số đo cung bị chắn.', '°'); }
    if (t === 1) { const a = r(40, 140); return fill1(`Tứ giác ABCD nội tiếp đường tròn, Â = ${a}°. Tính Ĉ.`, 180 - a, 'Trong tứ giác nội tiếp, tổng hai góc đối bằng 180°.', '°'); }
    const n = pick([5, 6, 8, 9, 10, 12]); return fill1(`Mỗi góc trong của đa giác đều ${n} cạnh có số đo là:`, (n - 2) * 180 / n, `(n − 2) · 180° : n = ${n - 2} · 180° : ${n} = ${(n - 2) * 180 / n}°.`, '°');
  };

  // ---- X. Hình trụ, hình nón, hình cầu ----
  G.khoi9 = () => {
    const t = r(0, 3), R = r(1, 6), h = r(2, 10);
    if (t === 0) return fill(`Hình trụ có bán kính đáy ${R} cm, chiều cao ${h} cm. Thể tích V = kπ (cm³). Tìm k.`, [{ pre: 'k =', ans: R * R * h }], `V = πr<sup>2</sup>h = π · ${R * R} · ${h} = ${R * R * h}π.`);
    if (t === 1) return fill(`Hình trụ có bán kính đáy ${R} cm, chiều cao ${h} cm. Diện tích xung quanh S = kπ (cm²). Tìm k.`, [{ pre: 'k =', ans: 2 * R * h }], `Sxq = 2πrh = ${2 * R * h}π.`);
    if (t === 2) { const H = r(1, 5) * 3; return fill(`Hình nón có bán kính đáy ${R} cm, chiều cao ${H} cm. Thể tích V = kπ (cm³). Tìm k.`, [{ pre: 'k =', ans: R * R * H / 3 }], `V = ${frac(1, 3)}πr<sup>2</sup>h = ${frac(1, 3)} · ${R * R} · ${H} · π = ${R * R * H / 3}π.`); }
    const Rc = pick([3, 6, 9]); return Math.random() < 0.5 ? fill(`Hình cầu bán kính ${Rc} cm có thể tích V = kπ (cm³). Tìm k.`, [{ pre: 'k =', ans: 4 * Rc * Rc * Rc / 3 }], `V = ${frac(4, 3)}πR<sup>3</sup> = ${4 * Rc * Rc * Rc / 3}π.`) : fill(`Mặt cầu bán kính ${Rc} cm có diện tích S = kπ (cm²). Tìm k.`, [{ pre: 'k =', ans: 4 * Rc * Rc }], `S = 4πR<sup>2</sup> = ${4 * Rc * Rc}π.`);
  };

  const ESSAY = {
    1: [null,
      () => { const p = pick([[3, 4, 5], [6, 8, 10], [5, 12, 13]]); return essay(`Một cột đèn cao ${p[1]} m có bóng trên mặt đất dài ${p[0]} m. Tính khoảng cách từ đỉnh cột đến đầu bóng và tính tan của góc tạo bởi tia sáng với mặt đất.`, 2, `Khoảng cách = ${sqrtH(`${p[0]}² + ${p[1]}²`)} = ${p[2]} m; tan α = ${p[1]}/${p[0]} = ${fr(p[1], p[0])}.`, [p[2]]); }],
    2: [() => { const p = nz(-6, 6), q = nz(-6, 6); return essay(`Giải phương trình: ${poly([1, -(p + q), p * q])} = 0 và kiểm tra lại bằng định lí Viète.`, 2, `Nghiệm x₁ = ${p}, x₂ = ${q}. Viète: tổng ${p + q}, tích ${p * q}.`, [p, q]); },
      () => { const R = r(2, 6), h = r(3, 10); return essay(`Một thùng hình trụ bán kính đáy ${R} dm, chiều cao ${h} dm. Tính thể tích thùng (lấy π ≈ 3,14) ra lít.`, 2, `V = π·${R}²·${h} = ${R * R * h}π ≈ ${fmt(Number((R * R * h * 3.14).toFixed(2)))} dm³ = ${fmt(Number((R * R * h * 3.14).toFixed(2)))} l.`, [R * R * h]); }]
  };
  ESSAY[1][0] = () => { const y = r(10, 40); return essay(`Hai lớp 9A và 9B có tổng cộng ${2 * y + 4} học sinh. Nếu chuyển 2 học sinh từ lớp 9A sang 9B thì số học sinh hai lớp bằng nhau. Tính số học sinh mỗi lớp.`, 2, `Gọi số học sinh 9A, 9B là x, y: x + y = ${2 * y + 4}; x − 2 = y + 2 ⇒ x = ${y + 4}, y = ${y}.`, [y + 4, y]); };

  const T = [
    { id: 1, hk: 1, ten: 'Phương trình và hệ hai phương trình bậc nhất hai ẩn', widgets: ['dothi'],
      lt: '<ul><li>Phương trình bậc nhất hai ẩn ax + by = c có vô số nghiệm, biểu diễn bởi một đường thẳng.</li><li>Hệ hai phương trình bậc nhất hai ẩn: giải bằng <b>phương pháp thế</b> hoặc <b>cộng đại số</b>.</li><li><b>Giải bài toán bằng cách lập hệ phương trình</b>: chọn hai ẩn, đặt điều kiện → lập hệ → giải → kiểm tra, trả lời.</li></ul>',
      bai: [[1, 'Khái niệm phương trình và hệ hai phương trình bậc nhất hai ẩn', ['hept']], [2, 'Giải hệ hai phương trình bậc nhất hai ẩn', ['hept']], L(), [3, 'Giải bài toán bằng cách lập hệ phương trình', ['lapHePT']], BT('I')] },
    { id: 2, hk: 1, ten: 'Phương trình và bất phương trình bậc nhất một ẩn', widgets: [],
      lt: '<ul><li><b>Phương trình tích</b> A·B = 0 ⇔ A = 0 hoặc B = 0. Phương trình chứa ẩn ở mẫu: tìm điều kiện xác định, quy đồng, khử mẫu, đối chiếu điều kiện.</li><li><b>Bất đẳng thức</b>: cộng cùng một số vào hai vế giữ nguyên chiều; nhân với số dương giữ chiều, nhân với số âm đổi chiều.</li><li><b>Bất phương trình bậc nhất một ẩn</b> ax + b > 0 (a ≠ 0): chuyển vế, chia cho a (đổi chiều nếu a &lt; 0).</li></ul>',
      bai: [[4, 'Phương trình quy về phương trình bậc nhất một ẩn', ['pttich']], [5, 'Bất đẳng thức và tính chất', ['bpt']], L(), [6, 'Bất phương trình bậc nhất một ẩn', ['bpt']], BT('II')] },
    { id: 3, hk: 1, ten: 'Căn bậc hai và căn bậc ba', widgets: [],
      lt: `<ul><li>Căn bậc hai số học của a ≥ 0 là ${sqrtH('a')} ≥ 0 với (${sqrtH('a')})<sup>2</sup> = a. ${sqrtH('A<sup>2</sup>')} = |A|.</li><li>${sqrtH('A·B')} = ${sqrtH('A')}·${sqrtH('B')} (A, B ≥ 0); ${sqrtH('A/B')} = ${sqrtH('A')}/${sqrtH('B')} (B > 0).</li><li>Đưa thừa số ra ngoài: ${sqrtH('A<sup>2</sup>B')} = |A|${sqrtH('B')}. Trục căn thức ở mẫu.</li><li>Căn bậc ba: ∛a là số x sao cho x<sup>3</sup> = a (mọi số đều có đúng một căn bậc ba).</li></ul>`,
      bai: [[7, 'Căn bậc hai và căn thức bậc hai', ['can9']], [8, 'Khai căn bậc hai với phép nhân và phép chia', ['can9']], L(), [9, 'Biến đổi đơn giản và rút gọn biểu thức chứa căn thức bậc hai', ['rutgonCan']], [10, 'Căn bậc ba và căn thức bậc ba', ['can9']], L(), BT('III')] },
    { id: 4, hk: 1, ten: 'Hệ thức lượng trong tam giác vuông', widgets: [],
      lt: `<ul><li>Với góc nhọn α trong tam giác vuông: sin α = đối/huyền; cos α = kề/huyền; tan α = đối/kề; cot α = kề/đối.</li><li>Hai góc phụ nhau: sin góc này bằng cos góc kia, tan góc này bằng cot góc kia.</li><li>Giá trị đặc biệt: sin 30° = cos 60° = ${frac(1, 2)}; sin 45° = cos 45° = ${frac(sqrtH(2), 2)}; tan 45° = 1; tan 60° = ${sqrtH(3)}.</li><li>Cạnh góc vuông = cạnh huyền · sin góc đối = cạnh huyền · cos góc kề = cạnh góc vuông kia · tan góc đối.</li></ul>`,
      bai: [[11, 'Tỉ số lượng giác của góc nhọn', ['ltg']], [12, 'Một số hệ thức giữa cạnh, góc trong tam giác vuông và ứng dụng', ['ltg']], L(), BT('IV')] },
    { id: 5, hk: 1, ten: 'Đường tròn', widgets: ['hinhtron'],
      lt: `<ul><li>Đường kính là dây lớn nhất; đường kính vuông góc với dây thì đi qua trung điểm của dây.</li><li>Độ dài cung n°: l = ${frac('πRn', 180)}. Diện tích hình quạt: S = ${frac('πR²n', 360)}. Hình vành khuyên: S = π(R² − r²).</li><li>Đường thẳng và đường tròn (khoảng cách d từ tâm): d &lt; R cắt nhau; d = R tiếp xúc; d > R không giao nhau. Tiếp tuyến vuông góc với bán kính tại tiếp điểm.</li><li>Hai đường tròn: cắt nhau, tiếp xúc, không giao nhau (so sánh OO' với R + r, R − r).</li></ul>`,
      bai: [[13, 'Mở đầu về đường tròn', ['duongtron9']], [14, 'Cung và dây của một đường tròn', ['duongtron9']], [15, 'Độ dài của cung tròn. Diện tích hình quạt tròn và hình vành khuyên', ['duongtron9']], L(), [16, 'Vị trí tương đối của đường thẳng và đường tròn', ['duongtron9']], [17, 'Vị trí tương đối của hai đường tròn', ['duongtron9']], L(), BT('V')] },
    { id: 6, hk: 2, ten: 'Hàm số y = ax² (a ≠ 0). Phương trình bậc hai một ẩn', widgets: ['parabol'],
      lt: `<ul><li>Đồ thị y = ax² là <b>parabol</b> đỉnh O, đối xứng qua Oy; a > 0 bề lõm hướng lên, a &lt; 0 hướng xuống.</li><li>ax² + bx + c = 0 (a ≠ 0): Δ = b² − 4ac. Δ > 0: hai nghiệm x = ${frac('−b ± √Δ', '2a')}; Δ = 0: nghiệm kép x = ${frac('−b', '2a')}; Δ &lt; 0: vô nghiệm.</li><li><b>Định lí Viète</b>: x₁ + x₂ = ${frac('−b', 'a')}; x₁x₂ = ${frac('c', 'a')}. Nhẩm nghiệm: a + b + c = 0 ⇒ x₁ = 1, x₂ = ${frac('c', 'a')}.</li></ul>`,
      bai: [[18, 'Hàm số y = ax² (a ≠ 0)', ['ax2']], [19, 'Phương trình bậc hai một ẩn', ['pt2']], L(), [20, 'Định lí Viète và ứng dụng', ['pt2']], [21, 'Giải bài toán bằng cách lập phương trình', ['pt2']], L(), BT('VI')] },
    { id: 7, hk: 2, ten: 'Tần số và tần số tương đối', widgets: [],
      lt: '<ul><li><b>Tần số</b> của một giá trị: số lần giá trị đó xuất hiện trong mẫu dữ liệu.</li><li><b>Tần số tương đối</b> = tần số : cỡ mẫu (thường ghi bằng %).</li><li>Biểu diễn bằng bảng tần số, biểu đồ cột, biểu đồ quạt; với dữ liệu ghép nhóm dùng bảng và biểu đồ tần số ghép nhóm (tần suất).</li></ul>',
      bai: [[22, 'Bảng tần số và biểu đồ tần số', ['tanso']], [23, 'Bảng tần số tương đối và biểu đồ tần số tương đối', ['tanso']], L(), [24, 'Bảng tần số, tần số tương đối ghép nhóm và biểu đồ', ['tanso']], BT('VII')] },
    { id: 8, hk: 2, ten: 'Xác suất của biến cố trong một số mô hình xác suất đơn giản', widgets: ['bocbi'],
      lt: '<ul><li><b>Phép thử ngẫu nhiên</b>, <b>không gian mẫu</b> Ω (tập hợp mọi kết quả có thể).</li><li>Nếu các kết quả đồng khả năng: P(A) = n(A) : n(Ω).</li><li>Liệt kê không gian mẫu bằng bảng hoặc sơ đồ cây (tung hai đồng xu, gieo hai xúc xắc, rút thẻ…).</li></ul>',
      bai: [[25, 'Phép thử ngẫu nhiên và không gian mẫu', ['xs9']], [26, 'Xác suất của biến cố liên quan tới phép thử', ['xs9']], L(), BT('VIII')] },
    { id: 9, hk: 2, ten: 'Đường tròn ngoại tiếp và đường tròn nội tiếp', widgets: [],
      lt: '<ul><li><b>Góc nội tiếp</b> bằng nửa số đo cung bị chắn; các góc nội tiếp cùng chắn một cung thì bằng nhau; góc nội tiếp chắn nửa đường tròn là góc vuông.</li><li>Đường tròn ngoại tiếp tam giác có tâm là giao ba đường trung trực; nội tiếp có tâm là giao ba đường phân giác.</li><li><b>Tứ giác nội tiếp</b> ⇔ tổng hai góc đối bằng 180°.</li><li><b>Đa giác đều</b> n cạnh: mỗi góc trong bằng (n − 2)·180° : n.</li></ul>',
      bai: [[27, 'Góc nội tiếp', ['noitiep']], [28, 'Đường tròn ngoại tiếp và đường tròn nội tiếp của một tam giác', ['noitiep']], L(), [29, 'Tứ giác nội tiếp', ['noitiep']], [30, 'Đa giác đều', ['noitiep']], L(), BT('IX')] },
    { id: 10, hk: 2, ten: 'Một số hình khối trong thực tiễn', widgets: [],
      lt: `<ul><li><b>Hình trụ</b>: Sxq = 2πrh; V = πr²h.</li><li><b>Hình nón</b>: Sxq = πrl (l là đường sinh); V = ${frac(1, 3)}πr²h.</li><li><b>Hình cầu</b>: S = 4πR²; V = ${frac(4, 3)}πR³.</li></ul>`,
      bai: [[31, 'Hình trụ và hình nón', ['khoi9']], [32, 'Hình cầu', ['khoi9']], L(), BT('X')] }
  ];
  PLT.buildCourse({ id: 'toan-9', lop: 9, topics: T, gens: G, essays: ESSAY });
})();

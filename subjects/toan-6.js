/* Toán lớp 6 – Kết nối tri thức với cuộc sống. Lý thuyết tóm tắt bằng lời mới; câu hỏi sinh tự động. */
(function () {
  'use strict';
  const { r, pick, shuffle, fmt, frac, fr, gcd, sup, par, roman, mc, fill, fill1, order, sort, match, essay, tableHTML } = PLT.U;
  const { big, distinct, barSVG, fillV, fillFrac } = PLT.M;
  const G = {};
  const lcm = (a, b) => a / gcd(a, b) * b;
  const isP = (n) => { if (n < 2) return false; for (let i = 2; i * i <= n; i++) if (n % i === 0) return false; return true; };
  const factor = (n) => { const f = {}; let m = n; for (let p = 2; p * p <= m; p++) while (m % p === 0) { f[p] = (f[p] || 0) + 1; m /= p; } if (m > 1) f[m] = (f[m] || 0) + 1; return f; };
  const fstr = (f) => Object.keys(f).map((p) => (f[p] > 1 ? sup(p, f[p]) : p)).join(' · ');
  const nz = (lo, hi) => { let v; do { v = r(lo, hi); } while (v === 0); return v; };

  // ---- Chương I: Tập hợp các số tự nhiên ----
  G.taphop = () => {
    const t = r(0, 2);
    if (t === 0) { const a = r(2, 9), b = r(a + 3, a + 9); return fill1(`Cho tập hợp A = {x ∈ ℕ | ${a} &lt; x ≤ ${b}}. Tập A có bao nhiêu phần tử?`, b - a, `A = {${Array.from({ length: b - a }, (_, i) => a + 1 + i).join('; ')}} có ${b - a} phần tử.`, 'phần tử'); }
    if (t === 1) { const A = distinct(4, () => r(1, 20)).sort((x, y) => x - y), x = Math.random() < 0.5 ? pick(A) : r(1, 20); return mc(`Cho A = {${A.join('; ')}}. Khẳng định nào đúng?`, A.includes(x) ? `${x} ∈ A` : `${x} ∉ A`, [A.includes(x) ? `${x} ∉ A` : `${x} ∈ A`, `{${x}} ∈ A`], 'Kí hiệu ∈ đọc là "thuộc", ∉ đọc là "không thuộc".'); }
    const n = r(3, 8); return mc(`Tập hợp các chữ cái trong từ "${pick(['TOÁN HỌC', 'HÌNH HỌC', 'SỐ HỌC', 'ĐẠI SỐ'])}" — mỗi phần tử được liệt kê:`, 'Một lần, không cần theo thứ tự', ['Bao nhiêu lần cũng được', 'Theo đúng thứ tự xuất hiện', 'Chỉ các nguyên âm'], 'Khi liệt kê, mỗi phần tử của tập hợp chỉ viết một lần, thứ tự tùy ý.');
  };
  G.ghiso = () => { const t = r(0, 1); if (t === 0) { const n = r(1, 30); return Math.random() < 0.5 ? mc(`Số La Mã <b>${roman(n)}</b> có giá trị là:`, n, [n + 1, n - 1 || 2, n + 10 > 30 ? n - 5 : n + 10], 'I = 1, V = 5, X = 10; chữ số nhỏ đứng trước chữ số lớn thì trừ (IV, IX), đứng sau thì cộng.') : mc(`Số ${n} viết bằng chữ số La Mã là:`, roman(n), distinct(6, () => roman(Math.max(1, Math.min(30, n + pick([-1, 1, -4, 4, 5, -5, 10]))))).filter((x) => x !== roman(n)), 'Ghép các kí hiệu I, V, X theo quy tắc cộng/trừ.'); } const n = r(100000, 9999999), s = String(n), i = r(0, s.length - 1); return fill1(`Trong số <b>${fmt(n)}</b>, chữ số ${s[i]} ở vị trí thứ ${i + 1} (từ trái sang) có giá trị bằng bao nhiêu?`, Number(s[i]) * Math.pow(10, s.length - 1 - i), `Giá trị = chữ số × giá trị hàng: ${s[i]} × ${fmt(Math.pow(10, s.length - 1 - i))} = ${fmt(Number(s[i]) * Math.pow(10, s.length - 1 - i))}.`); };
  G.phepN = () => {
    const t = r(0, 3);
    if (t === 0) { const a = r(20, 300), x = r(10, 500); return fill1(`Tìm số tự nhiên x biết: <b>x + ${a} = ${a + x}</b>`, x, `x = ${a + x} − ${a} = ${x}.`); }
    if (t === 1) { const a = r(2, 25), x = r(2, 40); return fill1(`Tìm số tự nhiên x biết: <b>${a} · x = ${a * x}</b>`, x, `x = ${a * x} : ${a} = ${x}.`); }
    if (t === 2) { const b = r(3, 12), q = r(5, 40), m = r(1, b - 1); return fill(`Thực hiện phép chia có dư: <b>${b * q + m} : ${b}</b>`, [{ pre: 'Thương:', ans: q }, { pre: 'Số dư:', ans: m }], `${b * q + m} = ${b} · ${q} + ${m} (0 ≤ ${m} &lt; ${b}).`); }
    const a = r(11, 99), b = r(11, 99); return fill1(`Tính nhanh: <b>${a} · ${b} + ${a} · ${100 - b}</b>`, a * 100, `Tính chất phân phối: ${a} · (${b} + ${100 - b}) = ${a} · 100 = ${a * 100}.`);
  };
  G.luythua = () => {
    const t = r(0, 3);
    if (t === 0) { const a = r(2, 9), n = r(2, a < 4 ? 6 : 3); return fill1(`Tính: <b>${sup(a, n)}</b>`, Math.pow(a, n), `${sup(a, n)} = ${Array(n).fill(a).join(' · ')} = ${fmt(Math.pow(a, n))}.`); }
    if (t === 1) { const a = r(2, 9), m = r(2, 9), n = r(2, 9); return fill(`Viết kết quả dưới dạng một lũy thừa: <b>${sup(a, m)} · ${sup(a, n)}</b>`, [{ pre: `${a}<sup>?</sup>, số mũ =`, ans: m + n }], `Nhân hai lũy thừa cùng cơ số: giữ nguyên cơ số, cộng số mũ: ${sup(a, m + n)}.`); }
    if (t === 2) { const a = r(2, 9), n = r(2, 9), m = n + r(1, 6); return fill(`Viết kết quả dưới dạng một lũy thừa: <b>${sup(a, m)} : ${sup(a, n)}</b>`, [{ pre: `${a}<sup>?</sup>, số mũ =`, ans: m - n }], `Chia hai lũy thừa cùng cơ số: giữ nguyên cơ số, trừ số mũ: ${sup(a, m - n)}.`); }
    const n = pick([[1, 'Mọi số'], [0, 'Mọi số khác 0']]); return mc(`Với a ≠ 0, a<sup>0</sup> bằng:`, 1, [0, 'a', 10].map(String).map((x) => (x === '0' ? 0 : x === '10' ? 10 : x)), 'Quy ước: a⁰ = 1 với mọi a ≠ 0.');
  };
  G.thutupt = () => { const t = r(0, 2); if (t === 0) { const a = r(2, 5), b = r(2, 3), c = r(10, 50), d = r(2, 9); return fill1(`Tính: <b>${c} + ${sup(a, b)} · ${d}</b>`, c + Math.pow(a, b) * d, `Lũy thừa → nhân → cộng: ${sup(a, b)} = ${Math.pow(a, b)}; ${Math.pow(a, b)} · ${d} = ${Math.pow(a, b) * d}; ${c} + ${Math.pow(a, b) * d} = ${c + Math.pow(a, b) * d}.`); } if (t === 1) { const a = r(2, 9), b = r(2, 9), c = r(2, 5); return fill1(`Tính: <b>${c} · (${a} + ${b})<sup>2</sup></b>`, c * (a + b) * (a + b), `Trong ngoặc trước: ${a + b}; bình phương: ${(a + b) * (a + b)}; nhân ${c}: ${c * (a + b) * (a + b)}.`); } const a = r(2, 6), x = r(3, 20), c = r(10, 60); return fill1(`Tìm x biết: <b>${a} · x − ${c} = ${a * x - c}</b>`, x, `${a} · x = ${a * x - c} + ${c} = ${a * x}; x = ${a * x} : ${a} = ${x}.`); };

  // ---- Chương II: Tính chia hết ----
  G.chiahet = () => {
    const t = r(0, 2), d = pick([2, 3, 5, 9]);
    if (t === 0) { const nums = distinct(5, () => r(100, 9999)); return sort(`Số nào chia hết cho ${d}?`, nums.map((n) => ({ t: fmt(n), cat: n % d === 0 ? `Chia hết cho ${d}` : `Không chia hết cho ${d}` })), [`Chia hết cho ${d}`, `Không chia hết cho ${d}`], { 2: 'Chia hết cho 2: chữ số tận cùng chẵn.', 5: 'Chia hết cho 5: tận cùng là 0 hoặc 5.', 3: 'Chia hết cho 3: tổng các chữ số chia hết cho 3.', 9: 'Chia hết cho 9: tổng các chữ số chia hết cho 9.' }[d]); }
    if (t === 1) { const a = r(1, 9), b = r(0, 9); const ok = [...Array(10).keys()].filter((x) => (a * 100 + x * 10 + b) % 9 === 0); if (!ok.length) return G.chiahet(); return fill1(`Tìm chữ số * để số <b>${a}*${b}</b> chia hết cho 9.`, ok[0], `Tổng các chữ số ${a} + * + ${b} phải chia hết cho 9 → * = ${ok[0]}.`); }
    const a = r(2, 9) * 6, b = r(2, 9) * 6; return mc(`Không tính, tổng <b>${a} + ${b} + ${r(1, 5) * 6 + 1}</b> có chia hết cho 6 không?`, 'Không', ['Có'], 'Nếu chỉ một số hạng không chia hết cho 6 (các số còn lại đều chia hết) thì tổng không chia hết cho 6.');
  };
  G.nguyento = () => {
    const t = r(0, 2);
    if (t === 0) { const nums = distinct(5, () => r(2, 99)); return sort('Phân loại các số sau:', nums.map((n) => ({ t: String(n), cat: isP(n) ? 'Số nguyên tố' : 'Hợp số' })), ['Số nguyên tố', 'Hợp số'], 'Số nguyên tố chỉ có hai ước là 1 và chính nó; hợp số có nhiều hơn hai ước. 0 và 1 không là số nguyên tố, cũng không là hợp số.'); }
    if (t === 1) { let n; do { n = r(12, 400); } while (isP(n)); const f = factor(n); const wrong = [fstr(factor(n + 2)), fstr(factor(n - 2)), Object.keys(f).join(' · ')].filter((x) => x !== fstr(f)); return mc(`Phân tích số <b>${n}</b> ra thừa số nguyên tố:`, fstr(f), wrong, `Chia lần lượt cho các số nguyên tố từ nhỏ đến lớn: ${n} = ${fstr(f)}.`); }
    return mc('Số nguyên tố chẵn duy nhất là:', 2, [0, 4, 1], '2 là số nguyên tố chẵn duy nhất; mọi số chẵn lớn hơn 2 đều chia hết cho 2 nên là hợp số.');
  };
  G.ucln = () => { const g = r(2, 15), a = g * r(2, 9), b = g * r(2, 9); const G0 = gcd(a, b); if (a === b) return G.ucln(); return Math.random() < 0.6 ? fill1(`Tìm ƯCLN(${a}, ${b}).`, G0, `${a} = ${fstr(factor(a))}; ${b} = ${fstr(factor(b))}. Lấy thừa số chung với số mũ nhỏ nhất → ƯCLN = ${G0}.`) : fill1(`Có ${a} quyển vở và ${b} chiếc bút chia đều vào các phần quà (mỗi phần có cả vở và bút). Có thể chia được nhiều nhất bao nhiêu phần quà?`, G0, `Số phần quà lớn nhất = ƯCLN(${a}, ${b}) = ${G0}.`, 'phần'); };
  G.bcnn = () => { const a = r(2, 18), b = r(2, 18); if (a === b) return G.bcnn(); const L = lcm(a, b); return Math.random() < 0.6 ? fill1(`Tìm BCNN(${a}, ${b}).`, L, `${a} = ${fstr(factor(a))}; ${b} = ${fstr(factor(b))}. Lấy các thừa số chung và riêng với số mũ lớn nhất → BCNN = ${L}.`) : fill1(`Hai xe buýt cùng xuất phát lúc 6 giờ. Xe thứ nhất cứ ${a} phút quay lại bến, xe thứ hai cứ ${b} phút. Sau ít nhất bao nhiêu phút hai xe lại cùng xuất phát?`, L, `Số phút cần tìm là BCNN(${a}, ${b}) = ${L}.`, 'phút'); };
  G.psToiGian = () => { const g = r(2, 12), a = r(1, 12), b = r(2, 13); if (gcd(a, b) !== 1 || a === b) return G.psToiGian(); return fill(`Rút gọn phân số ${frac(a * g, b * g)} về tối giản (dùng ƯCLN):`, [{ pre: 'Tử số:', ans: a }, { pre: 'Mẫu số:', ans: b }], `ƯCLN(${a * g}, ${b * g}) = ${g}; chia cả tử và mẫu cho ${g}: ${frac(a, b)}.`); };

  // ---- Chương III: Số nguyên ----
  G.songuyen = () => {
    const t = r(0, 3);
    if (t === 0) { const a = nz(-50, 50), b = nz(-50, 50); if (a === b) return G.songuyen(); return mc(`So sánh: ${big(`${fmt(a)} … ${fmt(b)}`)}`, a > b ? '>' : '<', ['>', '<', '='], 'Trên trục số nằm ngang, điểm bên phải biểu diễn số lớn hơn. Mọi số âm đều bé hơn 0 và bé hơn mọi số dương.'); }
    if (t === 1) { const a = nz(-99, 99); return fill1(`Số đối của <b>${fmt(a)}</b> là:`, -a, `Hai số đối nhau có tổng bằng 0: số đối của ${fmt(a)} là ${fmt(-a)}.`); }
    if (t === 2) { const nums = distinct(5, () => nz(-30, 30)); return order('Sắp xếp theo thứ tự tăng dần:', nums.slice().sort((x, y) => x - y).map(fmt), 'Số âm có số đối lớn hơn thì nhỏ hơn: −20 &lt; −3.'); }
    const t0 = r(-15, 5), d = r(3, 12); return fill1(`Nhiệt độ buổi sáng là ${fmt(t0)} °C, đến trưa tăng thêm ${d} °C. Nhiệt độ buổi trưa là:`, t0 + d, `${fmt(t0)} + ${d} = ${fmt(t0 + d)} (°C).`, '°C');
  };
  G.congZ = () => {
    const t = r(0, 2);
    if (t === 0) { const a = nz(-60, 60), b = nz(-60, 60), op = pick(['+', '−']); const ans = op === '+' ? a + b : a - b; return fill1(`Tính: <b>${fmt(a)} ${op} ${par(b)}</b>`, ans, op === '+' ? (a * b > 0 ? 'Cộng hai số cùng dấu: cộng hai phần số tự nhiên rồi giữ dấu chung.' : 'Cộng hai số khác dấu: lấy phần số tự nhiên lớn trừ phần nhỏ, đặt dấu của số có phần số tự nhiên lớn hơn.') + ` Kết quả ${fmt(ans)}.` : `Trừ đi một số là cộng với số đối: ${fmt(a)} + ${par(-b)} = ${fmt(ans)}.`); }
    if (t === 1) { const a = r(100, 999), b = r(10, 99), c = r(10, 99); return fill1(`Tính hợp lý: <b>(${a} − ${b}) − (${a} − ${c})</b>`, c - b, `Bỏ ngoặc (đổi dấu các số trong ngoặc sau dấu −): ${a} − ${b} − ${a} + ${c} = ${c} − ${b} = ${fmt(c - b)}.`); }
    const a = r(10, 99), b = r(10, 99); return mc(`Bỏ dấu ngoặc: <b>−(${a} − ${b} + x)</b> bằng:`, `−${a} + ${b} − x`, [`−${a} − ${b} + x`, `${a} − ${b} + x`, `−${a} + ${b} + x`], 'Bỏ ngoặc có dấu "−" đằng trước thì đổi dấu tất cả các số hạng trong ngoặc.');
  };
  G.nhanZ = () => {
    const t = r(0, 2);
    if (t === 0) { const a = nz(-15, 15), b = nz(-15, 15); return fill1(`Tính: <b>${fmt(a)} · ${par(b)}</b>`, a * b, `${a * b > 0 ? 'Hai số cùng dấu: tích dương' : 'Hai số khác dấu: tích âm'}; ${Math.abs(a)} · ${Math.abs(b)} = ${Math.abs(a * b)} → ${fmt(a * b)}.`); }
    if (t === 1) { const b = nz(-12, 12), q = nz(-12, 12); return fill1(`Tính: <b>${fmt(b * q)} : ${par(b)}</b>`, q, `Chia hai số cùng dấu được số dương, khác dấu được số âm: ${fmt(q)}.`); }
    const n = pick([6, 8, 10, 12, 15, 18, 20]); let c = 0; for (let i = 1; i <= n; i++) if (n % i === 0) c++; return fill1(`Số nguyên ${n} có bao nhiêu ước (kể cả ước âm)?`, 2 * c, `Ước dương của ${n}: ${[...Array(n).keys()].map((i) => i + 1).filter((i) => n % i === 0).join(', ')} (${c} ước). Thêm các số đối → ${2 * c} ước.`, 'ước');
  };

  // ---- Chương IV, V: Hình phẳng, đối xứng ----
  G.hinhdeu = () => { const qs = [['Mỗi góc của tam giác đều bằng bao nhiêu độ?', 60, [90, 45, 120], 'Tam giác đều có ba cạnh bằng nhau, ba góc bằng nhau và bằng 60°.', '°'], ['Mỗi góc của lục giác đều bằng bao nhiêu độ?', 120, [60, 90, 135], 'Lục giác đều có 6 cạnh bằng nhau, 6 góc bằng nhau và bằng 120°.', '°'], ['Lục giác đều được ghép từ bao nhiêu tam giác đều?', 6, [4, 3, 8], 'Nối tâm với 6 đỉnh được 6 tam giác đều.', ''], ['Hình thoi có hai đường chéo:', 'Vuông góc với nhau', ['Bằng nhau', 'Song song với nhau', 'Không cắt nhau'], 'Hai đường chéo hình thoi vuông góc và cắt nhau tại trung điểm mỗi đường.', ''], ['Hình thang cân có hai đường chéo:', 'Bằng nhau', ['Vuông góc', 'Song song', 'Bằng hai đáy'], 'Hình thang cân: hai cạnh bên bằng nhau, hai đường chéo bằng nhau.', '']]; const [q, a, d, e, u] = pick(qs); return mc(q, a, d, e, u); };
  G.tugiac6 = () => {
    const t = r(0, 3);
    if (t === 0) { const d1 = r(2, 15) * 2, d2 = r(2, 15); return fill1(`Hình thoi có hai đường chéo dài ${d1} cm và ${d2} cm. Diện tích là:`, d1 * d2 / 2, `S = ${frac('1', '2')} · d₁ · d₂ = ${d1} · ${d2} : 2 = ${d1 * d2 / 2} (cm²).`, 'cm²'); }
    if (t === 1) { const a = r(4, 20), h = r(2, 15); return fill1(`Hình bình hành có cạnh đáy ${a} cm, chiều cao tương ứng ${h} cm. Diện tích là:`, a * h, `S = a · h = ${a} · ${h} = ${a * h} (cm²).`, 'cm²'); }
    if (t === 2) { const a = r(6, 20), b = r(2, a - 1), h = r(2, 10) * 2; return fill1(`Hình thang cân có hai đáy ${a} cm, ${b} cm và chiều cao ${h} cm. Diện tích là:`, (a + b) * h / 2, `S = (a + b) · h : 2 = (${a} + ${b}) · ${h} : 2 = ${(a + b) * h / 2} (cm²).`, 'cm²'); }
    const a = r(3, 25); return fill1(`Hình thoi có cạnh ${a} cm. Chu vi là:`, 4 * a, `C = 4a = ${4 * a} (cm).`, 'cm');
  };
  G.doixung = () => {
    if (Math.random() < 0.55) { const s = pick([['Hình vuông', 4], ['Hình chữ nhật', 2], ['Tam giác đều', 3], ['Lục giác đều', 6], ['Hình thoi', 2], ['Hình thang cân', 1]]); return mc(`${s[0]} có bao nhiêu trục đối xứng?`, s[1], [1, 2, 3, 4, 6].filter((x) => x !== s[1]).slice(0, 3), 'Trục đối xứng chia hình thành hai phần chồng khít lên nhau khi gấp theo trục.', 'trục'); }
    const L = shuffle([['H', 'Có'], ['N', 'Có'], ['S', 'Có'], ['Z', 'Có'], ['O', 'Có'], ['X', 'Có'], ['A', 'Không'], ['T', 'Không'], ['M', 'Không'], ['V', 'Không'], ['E', 'Không']]).slice(0, 5);
    return sort('Chữ cái nào có tâm đối xứng?', L.map(([c, k]) => ({ t: `<b style="font-size:1.3em">${c}</b>`, cat: k === 'Có' ? 'Có tâm đối xứng' : 'Không có tâm đối xứng' })), ['Có tâm đối xứng', 'Không có tâm đối xứng'], 'Hình có tâm đối xứng: quay hình nửa vòng (180°) quanh tâm thì hình trùng với chính nó.');
  };

  // ---- Chương VI: Phân số ----
  G.ps6 = () => {
    const t = r(0, 3);
    if (t === 0) { const a = nz(-9, 9), b = r(2, 9), k = r(2, 6); return fill1(`Tìm x biết ${frac(fmt(a), b)} = ${frac('x', b * k)}`, a * k, `Hai phân số bằng nhau: x = ${fmt(a)} · ${b * k} : ${b} = ${fmt(a * k)}.`); }
    if (t === 1) { const a = r(1, 9), b = r(2, 9), c = r(1, 9), d = r(2, 9); const L = a * d, R = c * b; if (L === R) return G.ps6(); return mc(`So sánh: ${frac(-a, b)} … ${frac(-c, d)}`, -L > -R ? '>' : '<', ['>', '<', '='], `Quy đồng: ${frac(-L, b * d)} và ${frac(-R, b * d)}; so sánh tử số.`); }
    if (t === 2) { const w = r(1, 5), b = r(2, 9), a = r(1, b - 1); return fillFrac(`Viết hỗn số <b>${w}</b>${frac(a, b)} dưới dạng phân số:`, w * b + a, b, `${w}${frac(a, b)} = ${frac(w * b + a, b)}.`); }
    const a = r(1, 9), b = r(2, 9); return mc(`Phân số ${frac(a, '−' + b)} bằng phân số nào?`, '−' + frac(a, b), [frac(a, b), frac(b, a), '−' + frac(b, a)], 'Nhân cả tử và mẫu với −1 để mẫu số dương.');
  };
  G.cong6ps = () => { const b = r(2, 9), d = r(2, 9), a = nz(-9, 9), c = nz(-9, 9), plus = Math.random() < 0.5; const num = plus ? a * d + c * b : a * d - c * b; if (num === 0) return G.cong6ps(); return fillFrac(`Tính: ${frac(fmt(a), b)} ${plus ? '+' : '−'} ${frac(fmt(c), d)}`, num, b * d, `Quy đồng mẫu ${b * d}: ${frac(fmt(a * d), b * d)} ${plus ? '+' : '−'} ${frac(fmt(c * b), b * d)} = ${fr(num, b * d)}.`); };
  G.nhan6ps = () => { const a = nz(-8, 8), b = r(2, 9), c = nz(-8, 8), d = r(2, 9); return Math.random() < 0.5 ? fillFrac(`Tính: ${frac(fmt(a), b)} · ${frac(fmt(c), d)}`, a * c, b * d, `Tử nhân tử, mẫu nhân mẫu: ${fr(a * c, b * d)}.`) : fillFrac(`Tính: ${frac(fmt(a), b)} : ${frac(fmt(c), d)}`, a * d, b * c, `Nhân với số nghịch đảo của ${frac(fmt(c), d)}: ${fr(a * d, b * c)}.`); };
  G.haibaitoan = () => { const b = r(2, 9), a = r(1, b - 1), k = r(3, 20); return Math.random() < 0.5 ? fill1(`Lớp có ${b * k} học sinh, trong đó ${frac(a, b)} số học sinh thích bóng đá. Có bao nhiêu học sinh thích bóng đá?`, a * k, `Giá trị phân số của một số: ${b * k} · ${frac(a, b)} = ${a * k}.`, 'học sinh') : fill1(`${frac(a, b)} quãng đường dài ${a * k} km. Cả quãng đường dài bao nhiêu ki-lô-mét?`, b * k, `Tìm một số biết giá trị phân số của nó: ${a * k} : ${frac(a, b)} = ${b * k} (km).`, 'km'); };

  // ---- Chương VII: Số thập phân ----
  G.stp6 = () => {
    const t = r(0, 3); const d = (lo, hi) => r(lo, hi) / 10;
    if (t === 0) { const a = d(-200, 200), b = d(-200, 200); const ans = Number((a + b).toFixed(2)); return fillV(`Tính: <b>${fmt(a)} + ${par(b)}</b>`, ans, fmt(ans), `Cộng số thập phân như cộng số nguyên rồi đặt dấu phẩy: ${fmt(ans)}.`); }
    if (t === 1) { const a = d(-90, 90), b = r(-9, 9) || 2; const ans = Number((a * b).toFixed(2)); return fillV(`Tính: <b>${fmt(a)} · ${par(b)}</b>`, ans, fmt(ans), `Nhân như số nguyên (quy tắc dấu) rồi đặt dấu phẩy: ${fmt(ans)}.`); }
    if (t === 2) { const x = r(10000, 999999) / 1000; const k = pick([[0, 'hàng đơn vị'], [1, 'hàng phần mười'], [2, 'hàng phần trăm']]); const ans = Math.round(x * Math.pow(10, k[0])) / Math.pow(10, k[0]); return fillV(`Làm tròn số <b>${fmt(x)}</b> đến ${k[1]}:`, ans, fmt(ans), `Xét chữ số ngay sau ${k[1]}: &lt; 5 bỏ đi; ≥ 5 thì cộng 1 vào hàng làm tròn → ${fmt(ans)}.`); }
    const a = pick([20, 25, 40, 50]), p = pick([10, 20, 25, 50, 75]); const N = a * 4; return fill1(`Một chiếc áo giá ${fmt(N * 1000)} đồng, được giảm ${p}%. Giá sau khi giảm là:`, N * 1000 * (100 - p) / 100, `Giảm: ${fmt(N * 1000)} · ${p}% = ${fmt(N * 10 * p)} đồng. Còn: ${fmt(N * 1000 * (100 - p) / 100)} đồng.`, 'đồng');
  };
  // ---- Chương VIII: Hình học cơ bản ----
  G.hinhcb = () => {
    const t = r(0, 3);
    if (t === 0) { const n = r(3, 8); return fill1(`Cho ${n} điểm, trong đó không có ba điểm nào thẳng hàng. Vẽ được bao nhiêu đoạn thẳng nối hai trong các điểm đó?`, n * (n - 1) / 2, `Mỗi điểm nối với ${n - 1} điểm còn lại; mỗi đoạn được tính 2 lần: ${n} · ${n - 1} : 2 = ${n * (n - 1) / 2}.`, 'đoạn'); }
    if (t === 1) { const a = r(2, 9), b = r(2, 9); return fill1(`Điểm M nằm giữa A và B, AM = ${a} cm, MB = ${b} cm. Độ dài AB là:`, a + b, `M nằm giữa A và B nên AB = AM + MB = ${a + b} (cm).`, 'cm'); }
    if (t === 2) { const k = r(2, 12); return fill1(`I là trung điểm của đoạn thẳng AB, AB = ${2 * k} cm. Độ dài AI là:`, k, `AI = AB : 2 = ${k} (cm).`, 'cm'); }
    const n = r(3, 7); return fill1(`Vẽ ${n} tia chung gốc O (không có hai tia nào trùng nhau). Có bao nhiêu góc đỉnh O được tạo thành?`, n * (n - 1) / 2, `Mỗi cặp tia tạo một góc: ${n} · ${n - 1} : 2 = ${n * (n - 1) / 2}.`, 'góc');
  };
  G.gocdo = () => { const d = pick([25, 40, 60, 90, 110, 135, 150, 180]); const k = d < 90 ? 'Góc nhọn' : d === 90 ? 'Góc vuông' : d < 180 ? 'Góc tù' : 'Góc bẹt'; return mc(`Góc xOy có số đo ${d}° là:`, k, ['Góc nhọn', 'Góc vuông', 'Góc tù', 'Góc bẹt'].filter((x) => x !== k), '0° &lt; góc nhọn &lt; 90° = góc vuông &lt; góc tù &lt; 180° = góc bẹt.'); };
  // ---- Chương IX: Dữ liệu, xác suất thực nghiệm ----
  G.dulieu6 = () => { const L = ['T2', 'T3', 'T4', 'T5', 'T6'], v = Array.from({ length: 5 }, () => r(2, 12) * 5); const t = r(0, 2); const ch = `<div class="cap">Số sách bán được trong tuần</div>${barSVG(L, v, 'quyển')}`; if (t === 0) { const i = r(0, 4); return fill1(`${ch}Ngày ${L[i]} bán được bao nhiêu quyển?`, v[i], 'Đọc chiều cao cột tương ứng.', 'quyển'); } if (t === 1) return fill1(`${ch}Cả tuần bán được bao nhiêu quyển?`, v.reduce((a, b) => a + b, 0), `${v.join(' + ')} = ${v.reduce((a, b) => a + b, 0)}.`, 'quyển'); return mc('Dữ liệu nào sau đây là <b>số liệu</b>?', 'Chiều cao của các bạn trong lớp', ['Màu sắc yêu thích', 'Tên các loài hoa', 'Môn học yêu thích'], 'Số liệu là dữ liệu dạng số; dữ liệu không phải số gọi là dữ liệu định tính.'); };
  G.xstn = () => { const n = pick([20, 25, 40, 50, 100]), k = r(1, n - 1); return Math.random() < 0.6 ? fillFrac(`Tung một đồng xu ${n} lần, có ${k} lần xuất hiện mặt N. Xác suất thực nghiệm xuất hiện mặt N là (viết phân số):`, k, n, `Xác suất thực nghiệm = số lần sự kiện xảy ra : tổng số lần thực hiện = ${frac(k, n)}${gcd(k, n) > 1 ? ' = ' + fr(k, n) : ''}.`) : mc('Gieo một con xúc xắc. Tập hợp các kết quả có thể xảy ra có bao nhiêu phần tử?', 6, [5, 12, 1], 'Kết quả có thể: mặt 1, 2, 3, 4, 5, 6 chấm.'); };

  const ESSAY = {
    1: [() => { const g = pick([6, 8, 9, 12]), a = g * r(3, 9), b = g * r(3, 9); if (a === b) return ESSAY[1][0](); const G0 = gcd(a, b); return essay(`Cô giáo có ${a} quyển vở và ${b} bút bi muốn chia đều thành các phần thưởng như nhau. Hỏi chia được nhiều nhất bao nhiêu phần thưởng? Khi đó mỗi phần có bao nhiêu vở, bao nhiêu bút?`, 2, `Số phần = ƯCLN(${a}, ${b}) = ${G0}. Mỗi phần: ${a / G0} vở, ${b / G0} bút.`, [G0, a / G0, b / G0]); },
      () => { const a = r(2, 5), b = r(2, 3), c = r(10, 60), d = r(2, 9), x = r(20, 99), y = r(10, 99); return essay(`Thực hiện phép tính (hợp lý nếu có thể): a) ${c} + ${sup(a, b)} · ${d}; b) (${x + 100} − ${y}) − (${x + 100} − ${y + 50})`, 2, `a) ${c} + ${Math.pow(a, b)} · ${d} = ${c + Math.pow(a, b) * d}; b) = −${y} + ${y + 50} = 50`, [c + Math.pow(a, b) * d, 50]); }],
    2: [() => { const b = r(3, 6), a = r(1, b - 1), k = r(6, 12) * 2; return essay(`Lớp 6A có ${b * k} học sinh. Số học sinh giỏi bằng ${frac(a, b)} số học sinh cả lớp. Số học sinh khá bằng ${frac(1, 2)} số học sinh còn lại. Tính số học sinh giỏi và số học sinh khá.`, 2, `Giỏi: ${b * k} · ${frac(a, b)} = ${a * k}. Còn lại: ${(b - a) * k}. Khá: ${(b - a) * k} · ${frac(1, 2)} = ${(b - a) * k / 2}.`, [a * k, (b - a) * k / 2]); },
      () => { const a = r(2, 9), b = r(2, 9); return essay(`Trên tia Ox lấy hai điểm A, B sao cho OA = ${a} cm, OB = ${a + 2 * b} cm. Gọi M là trung điểm của AB. Tính AB và OM.`, 2, `AB = OB − OA = ${2 * b} cm; AM = ${b} cm; OM = OA + AM = ${a + b} cm.`, [2 * b, a + b]); }]
  };

  const L = (n) => [0, 'Luyện tập chung', null], BT = (n) => [0, 'Bài tập cuối chương ' + n, null];
  const T = [
    { id: 1, hk: 1, ten: 'Tập hợp các số tự nhiên', widgets: [],
      lt: '<ul><li><b>Tập hợp</b>: kí hiệu bằng chữ in hoa; viết bằng cách liệt kê {…} hoặc chỉ ra tính chất đặc trưng. a ∈ A (thuộc), a ∉ A (không thuộc).</li><li>ℕ = {0; 1; 2; …}; ℕ* là tập số tự nhiên khác 0.</li><li><b>Lũy thừa</b>: aⁿ = a · a · … · a (n thừa số). aᵐ · aⁿ = aᵐ⁺ⁿ; aᵐ : aⁿ = aᵐ⁻ⁿ (a ≠ 0, m ≥ n); a⁰ = 1.</li><li><b>Thứ tự thực hiện</b>: ngoặc ( ) → [ ] → { }; trong ngoặc: lũy thừa → nhân, chia → cộng, trừ.</li><li>Phép chia có dư: a = b · q + r (0 ≤ r &lt; b).</li></ul>',
      bai: [[1, 'Tập hợp', ['taphop']], [2, 'Cách ghi số tự nhiên', ['ghiso']], [3, 'Thứ tự trong tập hợp các số tự nhiên', ['taphop']], [4, 'Phép cộng và phép trừ số tự nhiên', ['phepN']], [5, 'Phép nhân và phép chia số tự nhiên', ['phepN']], L(), [6, 'Lũy thừa với số mũ tự nhiên', ['luythua']], [7, 'Thứ tự thực hiện các phép tính', ['thutupt']], L(), BT('I')] },
    { id: 2, hk: 1, ten: 'Tính chia hết trong tập hợp các số tự nhiên', widgets: [],
      lt: '<ul><li>a chia hết cho b (a ⋮ b) nếu có số tự nhiên q với a = b · q. Nếu các số hạng đều chia hết cho m thì tổng chia hết cho m.</li><li><b>Dấu hiệu chia hết</b>: cho 2 (tận cùng chẵn), cho 5 (tận cùng 0, 5), cho 3 / 9 (tổng các chữ số chia hết cho 3 / 9).</li><li><b>Số nguyên tố</b>: lớn hơn 1, chỉ có ước 1 và chính nó. <b>Hợp số</b>: có nhiều hơn 2 ước.</li><li><b>ƯCLN</b>: phân tích ra thừa số nguyên tố, lấy thừa số <i>chung</i> với số mũ <i>nhỏ nhất</i>. <b>BCNN</b>: lấy thừa số <i>chung và riêng</i> với số mũ <i>lớn nhất</i>.</li></ul>',
      bai: [[8, 'Quan hệ chia hết và tính chất', ['chiahet']], [9, 'Dấu hiệu chia hết', ['chiahet']], [10, 'Số nguyên tố', ['nguyento']], L(), [11, 'Ước chung. Ước chung lớn nhất', ['ucln', 'psToiGian']], [12, 'Bội chung. Bội chung nhỏ nhất', ['bcnn']], L(), BT('II')] },
    { id: 3, hk: 1, ten: 'Số nguyên', widgets: [],
      lt: '<ul><li>ℤ = {…; −2; −1; 0; 1; 2; …}. Trên trục số, số bên phải lớn hơn. Số đối của a là −a.</li><li><b>Cộng hai số cùng dấu</b>: cộng phần số tự nhiên, giữ dấu. <b>Khác dấu</b>: lấy phần lớn trừ phần nhỏ, dấu theo số có phần số tự nhiên lớn hơn.</li><li>a − b = a + (−b). <b>Bỏ ngoặc</b> có dấu "−" đằng trước thì đổi dấu mọi số hạng trong ngoặc.</li><li><b>Nhân, chia</b>: cùng dấu → dương; khác dấu → âm.</li><li>Nếu a = b · q thì b là ước của a, a là bội của b (với số nguyên).</li></ul>',
      bai: [[13, 'Tập hợp các số nguyên', ['songuyen']], [14, 'Phép cộng và phép trừ số nguyên', ['congZ']], [15, 'Quy tắc dấu ngoặc', ['congZ']], L(), [16, 'Phép nhân số nguyên', ['nhanZ']], [17, 'Phép chia hết. Ước và bội của một số nguyên', ['nhanZ']], L(), BT('III')] },
    { id: 4, hk: 1, ten: 'Một số hình phẳng trong thực tiễn', widgets: [],
      lt: '<ul><li><b>Tam giác đều</b>: 3 cạnh bằng nhau, 3 góc bằng 60°. <b>Lục giác đều</b>: 6 cạnh bằng nhau, 6 góc bằng 120°.</li><li><b>Hình chữ nhật</b>: S = a · b. <b>Hình vuông</b>: S = a². <b>Hình thoi</b>: S = d₁ · d₂ : 2. <b>Hình bình hành</b>: S = a · h. <b>Hình thang cân</b>: S = (a + b) · h : 2.</li><li>Chu vi = tổng độ dài các cạnh.</li></ul>',
      bai: [[18, 'Hình tam giác đều. Hình vuông. Hình lục giác đều', ['hinhdeu']], [19, 'Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân', ['hinhdeu']], [20, 'Chu vi và diện tích của một số tứ giác đã học', ['tugiac6']], L(), BT('IV')] },
    { id: 5, hk: 1, ten: 'Tính đối xứng của hình phẳng trong tự nhiên', widgets: [],
      lt: '<ul><li><b>Trục đối xứng</b>: gấp hình theo đường thẳng đó thì hai nửa chồng khít. Hình vuông có 4 trục, hình chữ nhật 2, tam giác đều 3, lục giác đều 6, hình tròn có vô số trục.</li><li><b>Tâm đối xứng</b>: quay hình 180° quanh điểm đó thì hình trùng với chính nó (hình bình hành, hình thoi, hình chữ nhật, chữ cái H, N, S, Z…).</li></ul>',
      bai: [[21, 'Hình có trục đối xứng', ['doixung']], [22, 'Hình có tâm đối xứng', ['doixung']], L(), BT('V')] },
    { id: 6, hk: 2, ten: 'Phân số', widgets: [],
      lt: `<ul><li>Phân số ${frac('a', 'b')} với a, b ∈ ℤ, b ≠ 0. ${frac('a', 'b')} = ${frac('c', 'd')} nếu a · d = b · c.</li><li>Tính chất cơ bản: nhân/chia cả tử và mẫu với cùng số khác 0.</li><li>So sánh: đưa về cùng mẫu dương rồi so tử. Hỗn số dương: 2${frac(1, 3)} = ${frac(7, 3)}.</li><li>Cộng, trừ, nhân, chia phân số như ở tiểu học, chú ý quy tắc dấu.</li><li><b>Giá trị phân số của một số</b>: b · ${frac('m', 'n')}. <b>Tìm một số biết giá trị phân số của nó</b>: a : ${frac('m', 'n')}.</li></ul>`,
      bai: [[23, 'Mở rộng khái niệm phân số. Phân số bằng nhau', ['ps6']], [24, 'So sánh phân số. Hỗn số dương', ['ps6']], L(), [25, 'Phép cộng và phép trừ phân số', ['cong6ps']], [26, 'Phép nhân và phép chia phân số', ['nhan6ps']], [27, 'Hai bài toán về phân số', ['haibaitoan']], L(), BT('VI')] },
    { id: 7, hk: 2, ten: 'Số thập phân', widgets: [],
      lt: '<ul><li>Số thập phân âm: −2,5; số đối của 3,7 là −3,7.</li><li>Cộng, trừ, nhân, chia số thập phân theo quy tắc dấu như số nguyên.</li><li><b>Làm tròn</b>: xét chữ số ngay sau hàng làm tròn. <b>Ước lượng</b> kết quả để kiểm tra nhanh.</li><li>Tỉ số của a và b: a : b. Tỉ số phần trăm: a : b · 100%. Giá trị m% của b: b · m : 100.</li></ul>',
      bai: [[28, 'Số thập phân', ['stp6']], [29, 'Tính toán với số thập phân', ['stp6']], [30, 'Làm tròn và ước lượng', ['stp6']], [31, 'Một số bài toán về tỉ số và tỉ số phần trăm', ['stp6']], L(), BT('VII')] },
    { id: 8, hk: 2, ten: 'Những hình hình học cơ bản', widgets: ['goc'],
      lt: '<ul><li>Qua hai điểm phân biệt có một và chỉ một đường thẳng. Ba điểm thẳng hàng: cùng nằm trên một đường thẳng.</li><li>Nếu M nằm giữa A và B thì AM + MB = AB. <b>Trung điểm</b> I của AB: IA = IB = AB : 2.</li><li><b>Tia</b> gốc O. <b>Góc</b> là hình gồm hai tia chung gốc. Đo góc bằng thước đo góc (đơn vị độ).</li><li>Góc nhọn (&lt; 90°), vuông (= 90°), tù (90°–180°), bẹt (= 180°).</li></ul>',
      bai: [[32, 'Điểm và đường thẳng', ['hinhcb']], [33, 'Điểm nằm giữa hai điểm. Tia', ['hinhcb']], [34, 'Đoạn thẳng. Độ dài đoạn thẳng', ['hinhcb']], [35, 'Trung điểm của đoạn thẳng', ['hinhcb']], L(), [36, 'Góc', ['gocdo', 'hinhcb']], [37, 'Số đo góc', ['gocdo']], L(), BT('VIII')] },
    { id: 9, hk: 2, ten: 'Dữ liệu và xác suất thực nghiệm', widgets: ['bocbi'],
      lt: '<ul><li>Dữ liệu gồm số liệu (dạng số) và dữ liệu không phải số. Có thể thu thập bằng quan sát, phỏng vấn, phiếu hỏi…</li><li>Biểu diễn bằng bảng thống kê, biểu đồ tranh, biểu đồ cột, biểu đồ cột kép.</li><li><b>Xác suất thực nghiệm</b> của sự kiện A = số lần A xảy ra : tổng số lần thực hiện.</li></ul>',
      bai: [[38, 'Dữ liệu và thu thập dữ liệu', ['dulieu6']], [39, 'Bảng thống kê và biểu đồ tranh', ['dulieu6']], [40, 'Biểu đồ cột', ['dulieu6']], [41, 'Biểu đồ cột kép', ['dulieu6']], L(), [42, 'Kết quả có thể và sự kiện trong trò chơi, thí nghiệm', ['xstn']], [43, 'Xác suất thực nghiệm', ['xstn']], L(), BT('IX')] }
  ];
  PLT.buildCourse({ id: 'toan-6', lop: 6, topics: T, gens: G, essays: ESSAY });
})();

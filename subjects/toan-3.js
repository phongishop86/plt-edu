/* Môn Toán lớp 3 – bộ Kết nối tri thức với cuộc sống (SGK 2026–2027)
   Nội dung lý thuyết được tóm tắt lại bằng lời mới; câu hỏi do máy tự sinh ngẫu nhiên. */
(function () {
  'use strict';
  const { r, pick, shuffle, fmt, docSo, roman, frac, mc, fill, fill1, match, order, sort, essay, cap,
    clockSVG, pieSVG, groupsHTML, gridSVG, numlineHTML, angleSVG, shapeSVG, tableHTML, thermoSVG, rulerSVG } = PLT.U;

  /* ================= BỘ SINH CÂU HỎI ================= */
  const big = (s) => `<div class="board">${s}</div>`;
  const G = {};
  const cautao = (n, d) => { const names = ['đơn vị', 'chục', 'trăm', 'nghìn', 'chục nghìn']; const s = String(n).split('').map(Number); return s.map((v, i) => `${v} ${names[d - 1 - i]}`).join(', '); };
  const randDigits = (d) => { let n = r(1, 9); for (let i = 1; i < d; i++) n = n * 10 + (Math.random() < 0.25 ? 0 : r(0, 9)); return n; };
  const distinct = (k, f) => { const s = new Set(); let g = 0; while (s.size < k && g++ < 200) s.add(f()); return [...s]; };
  const opName = { '+': '+', '-': '−', 'x': '×', ':': ':' };

  // ----- Số: đọc, viết, cấu tạo, so sánh, làm tròn -----
  function soGen(d) {
    return () => {
      const t = r(0, 5);
      if (t === 0) { // nối cấu tạo (hoán vị chữ số)
        let digs; do { digs = distinct(d, () => r(1, 9)); } while (digs.length < d);
        const perms = distinct(4, () => Number(shuffle(digs).join('')));
        if (perms.length < 4) return G['so' + d]();
        return match('Nối số ở cột trái với cấu tạo số tương ứng ở cột phải:', perms.map((n) => ({ l: fmt(n), r: cap(cautao(n, d)) })), 'Đọc từng chữ số từ trái sang phải theo hàng: ' + (d === 3 ? 'trăm, chục, đơn vị.' : d === 4 ? 'nghìn, trăm, chục, đơn vị.' : 'chục nghìn, nghìn, trăm, chục, đơn vị.'));
      }
      if (t === 1) { // tia số
        const step = pick(d === 3 ? [1, 10] : d === 4 ? [1, 10, 100] : [1, 10, 100, 1000]); let st = randDigits(d); st -= st % step;
        const s0 = Math.max(Math.pow(10, d - 1), Math.min(st, Math.pow(10, d) - 11 * step)); const seq = Array.from({ length: 10 }, (_, i) => s0 + i * step);
        const h = shuffle([1, 2, 3, 4, 5, 6, 7, 8]).slice(0, 2).sort((a, b) => a - b);
        return fill('Điền số thích hợp vào dấu ? trên tia số (theo thứ tự từ trái sang phải):' + numlineHTML(seq, h), [{ pre: 'Số thứ nhất:', ans: seq[h[0]] }, { pre: 'Số thứ hai:', ans: seq[h[1]] }], `Hai số liền nhau trên tia số hơn kém nhau ${fmt(step)} đơn vị.`);
      }
      if (t === 2) { // đọc số
        const n = randDigits(d); const vs = distinct(6, () => { const a = String(n).split(''); const i = r(0, d - 1), j = r(0, d - 1);[a[i], a[j]] = [a[j], a[i]]; if (Math.random() < 0.5) a[r(1, d - 1)] = String(r(0, 9)); return Number(a.join('')); }).filter((x) => x !== n && x >= Math.pow(10, d - 1));
        return mc(`Số <b>${fmt(n)}</b> đọc là:`, cap(docSo(n)), vs.slice(0, 3).map((x) => cap(docSo(x))), 'Đọc lần lượt từ hàng cao nhất đến hàng đơn vị. Chữ số 0 ở hàng trăm đọc là "không trăm", ở hàng chục đọc là "linh".');
      }
      if (t === 3) { // viết số từ cấu tạo
        const n = randDigits(d); const s = String(n);
        return fill1(`Số gồm <b>${cautao(n, d)}</b> viết là:`, n, `Viết lần lượt các chữ số theo hàng: ${s.split('').join(' – ')} → ${fmt(n)}.`);
      }
      if (t === 4) { // số liền trước / liền sau
        const n = randDigits(d), sau = Math.random() < 0.5; const ans = sau ? n + 1 : n - 1;
        return mc(`Số liền ${sau ? 'sau' : 'trước'} của <b>${fmt(n)}</b> là:`, ans, [sau ? n - 1 : n + 1, sau ? n + 10 : n - 10, n], `Số liền ${sau ? 'sau hơn' : 'trước kém'} số đã cho 1 đơn vị.`);
      }
      // giá trị chữ số theo hàng
      const n = randDigits(d), s = String(n), i = r(0, d - 1), names = ['Hàng đơn vị', 'Hàng chục', 'Hàng trăm', 'Hàng nghìn', 'Hàng chục nghìn'];
      const ans = names[d - 1 - i]; const others = shuffle(names.slice(0, d).filter((x) => x !== ans)).slice(0, 3);
      return mc(`Trong số <b>${fmt(n)}</b>, chữ số <b>${s[i]}</b> (vị trí thứ ${i + 1} từ trái sang) thuộc hàng nào?`, ans, others, 'Đếm từ phải sang trái: đơn vị, chục, trăm, nghìn, chục nghìn.');
    };
  }
  function sosanhGen(d) {
    return () => {
      const t = r(0, 3);
      if (t === 0) {
        const nums = distinct(4, () => randDigits(d)); const asc = Math.random() < 0.5;
        const sorted = nums.slice().sort((a, b) => asc ? a - b : b - a).map(fmt);
        return order(`Sắp xếp các số sau theo thứ tự <b>từ ${asc ? 'bé đến lớn' : 'lớn đến bé'}</b>:`, sorted, 'So sánh từ hàng cao nhất; nếu bằng nhau thì so sánh hàng tiếp theo.');
      }
      if (t === 1) {
        const nums = distinct(4, () => randDigits(d)); const mx = Math.random() < 0.5; const ans = mx ? Math.max(...nums) : Math.min(...nums);
        return mc(`Số <b>${mx ? 'lớn nhất' : 'bé nhất'}</b> trong các số ${nums.map(fmt).join('; ')} là:`, ans, nums, 'Số nào có nhiều chữ số hơn thì lớn hơn. Cùng số chữ số thì so sánh từ trái sang phải.');
      }
      if (t === 2) {
        const a = randDigits(d); const b = Math.random() < 0.25 ? a : (Math.random() < 0.5 ? a + pick([1, 10, 100]) : Number(String(a).split('').reverse().join('')) || a + 1);
        const ans = a > b ? '>' : a < b ? '<' : '=';
        return mc(`Chọn dấu thích hợp: ${big(`${fmt(a)} … ${fmt(b)}`)}`, ans, ['>', '<', '='], 'So sánh lần lượt từng hàng từ trái sang phải.');
      }
      const n = randDigits(d);
      return sort('Xếp mỗi số vào nhóm đúng:', distinct(5, () => randDigits(d)).map((x) => ({ t: fmt(x), cat: x > n ? `Lớn hơn ${fmt(n)}` : `Không lớn hơn ${fmt(n)}` })), [`Lớn hơn ${fmt(n)}`, `Không lớn hơn ${fmt(n)}`], 'So sánh từng số với số mốc.');
    };
  }
  function lamtronGen(units) {
    return () => {
      const [name, base] = pick(units); const d = base >= 1000 ? 5 : 4; const n = randDigits(d);
      const ans = Math.round(n / base) * base; const down = Math.floor(n / base) * base, up = down + base;
      const next = Math.floor(n / (base / 10)) % 10;
      return mc(`Làm tròn số <b>${fmt(n)}</b> đến <b>hàng ${name}</b> ta được:`, ans, [down === ans ? up : down, Math.round(n / (base * 10)) * base * 10, ans + base], `Xét chữ số ngay sau hàng ${name} là ${next}: ${next < 5 ? 'bé hơn 5 nên làm tròn xuống' : 'từ 5 trở lên nên làm tròn lên'} → ${fmt(ans)}.`);
    };
  }

  // ----- Phép tính -----
  function datTinh(a, op, b) { return `<span class="dt">${fmt(a)} ${opName[op]} ${fmt(b)}</span>`; }
  function calcGen(op, aLo, aHi, bLo, bHi, cap2) {
    return () => {
      let a, b, ans;
      for (let g = 0; g < 100; g++) {
        if (op === '+') { a = r(aLo, aHi); b = r(bLo, bHi); ans = a + b; if (ans <= cap2) break; }
        else if (op === '-') { a = r(aLo, aHi); b = r(bLo, Math.min(bHi, a - 1)); ans = a - b; if (b >= bLo) break; }
        else if (op === 'x') { b = r(bLo, bHi); a = r(aLo, Math.min(aHi, Math.floor(cap2 / b))); ans = a * b; if (a >= aLo) break; }
        else { b = r(bLo, bHi); const q = r(Math.ceil(aLo / b), Math.floor(aHi / b)); a = q * b; ans = q; if (a >= aLo) break; }
      }
      const rule = { '+': 'Đặt tính thẳng hàng, cộng từ phải sang trái (đơn vị → chục → trăm…), nhớ 1 sang hàng bên trái khi tổng từ 10 trở lên.', '-': 'Đặt tính thẳng hàng, trừ từ phải sang trái; chữ số trên bé hơn thì mượn 1 chục và nhớ 1 vào hàng bên trái của số trừ.', 'x': 'Nhân lần lượt từ hàng đơn vị sang trái, nhớ sang hàng tiếp theo.', ':': 'Chia lần lượt từ hàng cao nhất (bên trái) sang phải: chia – nhân – trừ – hạ.' }[op];
      const exp = `${fmt(a)} ${opName[op]} ${fmt(b)} = ${fmt(ans)}. ${rule}`;
      const t = r(0, 2);
      if (t === 0) return fill1(`Đặt tính rồi tính: ${datTinh(a, op, b)}`, ans, exp);
      if (t === 1) return mc(`Kết quả của phép tính sau là: ${big(`${fmt(a)} ${opName[op]} ${fmt(b)}`)}`, ans, [ans + 10, ans - 10, op === '+' || op === '-' ? ans + (op === '+' ? -100 : 100) : ans + 1, ans + 100], exp);
      // tìm thành phần chưa biết
      if (op === '+') return fill1(`Tìm số thích hợp: <b>? + ${fmt(b)} = ${fmt(ans)}</b>`, a, `Muốn tìm số hạng chưa biết, lấy tổng trừ đi số hạng đã biết: ${fmt(ans)} − ${fmt(b)} = ${fmt(a)}.`);
      if (op === '-') return fill1(`Tìm số thích hợp: <b>${fmt(a)} − ? = ${fmt(ans)}</b>`, b, `Muốn tìm số trừ, lấy số bị trừ trừ đi hiệu: ${fmt(a)} − ${fmt(ans)} = ${fmt(b)}.`);
      if (op === 'x') return fill1(`Tìm số thích hợp: <b>? × ${b} = ${fmt(ans)}</b>`, a, `Muốn tìm thừa số chưa biết, lấy tích chia cho thừa số đã biết: ${fmt(ans)} : ${b} = ${fmt(a)}.`);
      return fill1(`Tìm số thích hợp: <b>? : ${b} = ${fmt(ans)}</b>`, a, `Muốn tìm số bị chia, lấy thương nhân với số chia: ${fmt(ans)} × ${b} = ${fmt(a)}.`);
    };
  }
  G.cong1000 = () => (Math.random() < 0.5 ? calcGen('+', 100, 700, 50, 400, 999) : calcGen('-', 200, 999, 50, 600))();
  G.timtp = () => {
    const t = r(0, 2);
    if (t === 0) { const a = r(10, 500), x = r(10, 450); return fill1(`Tìm số hạng chưa biết: <b>? + ${a} = ${a + x}</b>`, x, `Lấy tổng trừ đi số hạng đã biết: ${a + x} − ${a} = ${x}.`); }
    if (t === 1) { const b = r(200, 999), x = r(10, b - 50); return fill1(`Tìm số trừ: <b>${b} − ? = ${b - x}</b>`, x, `Muốn tìm số trừ, lấy số bị trừ trừ đi hiệu: ${b} − ${b - x} = ${x}.`); }
    const a = r(10, 400), c = r(10, 500); return fill1(`Tìm số bị trừ: <b>? − ${a} = ${c}</b>`, a + c, `Muốn tìm số bị trừ, lấy hiệu cộng với số trừ: ${c} + ${a} = ${a + c}.`);
  };
  const EMO = ['🐞', '🍎', '⭐', '🐟', '🍓', '🌸', '🐝', '🍊'];
  function bangGen(lo, hi) {
    return () => {
      const a = r(lo, hi), b = r(2, 10), t = r(0, 4);
      if (t === 0) return mc(`${big(`${a} × ${b} = ?`)}`, a * b, [a * b + a, a * b - a, a + b], `${a} × ${b} = ${a * b} (${a} được lấy ${b} lần).`);
      if (t === 1) return mc(`${big(`${a * b} : ${a} = ?`)}`, b, [b + 1, b - 1, a], `Vì ${a} × ${b} = ${a * b} nên ${a * b} : ${a} = ${b}.`);
      if (t === 2) { // hình phù hợp
        const e = pick(EMO); const ok = groupsHTML(b > 6 ? 3 : b, a, e); const aa = b > 6 ? 3 : b;
        const opts = [[aa, a], [a, aa], [aa + 1, a], [aa, a + 1]].filter((v, i, arr) => arr.findIndex((w) => w[0] === v[0] && w[1] === v[1]) === i);
        const ch = opts.map(([g, k]) => groupsHTML(g, k, e));
        return mc(`Hình nào phù hợp với phép nhân <b>${a} × ${aa}</b>?`, ok, ch.slice(1), `${a} × ${aa} nghĩa là ${a} được lấy ${aa} lần: ${aa} nhóm, mỗi nhóm ${a} đồ vật.`);
      }
      if (t === 3) { // đúng / sai
        const items = distinct(5, () => r(lo, hi) * 10 + r(2, 10)).map((code) => { const x = Math.floor(code / 10), y = code % 10 || 10; const right = Math.random() < 0.55; const v = right ? x * y : x * y + pick([-2, -1, 1, 2, x]); return { t: `${x} × ${y} = ${v}`, cat: v === x * y ? 'Phép tính đúng' : 'Phép tính sai' }; });
        return sort('Xếp mỗi phép tính vào nhóm đúng:', items, ['Phép tính đúng', 'Phép tính sai'], 'Nhẩm lại bảng nhân để kiểm tra từng phép tính.');
      }
      return fill1(`Điền số: <b>${a} × ? = ${a * b}</b>`, b, `Lấy tích chia cho thừa số đã biết: ${a * b} : ${a} = ${b}.`);
    };
  }
  G.so3 = soGen(3); G.so4 = soGen(4); G.so5 = soGen(5);
  G.so1000 = G.so3; G.so10000 = G.so4; G.so100000 = G.so5;
  G.sosanh10000 = sosanhGen(4); G.sosanh100000 = sosanhGen(5);
  G.lamtron10000 = lamtronGen([['chục', 10], ['trăm', 100]]);
  G.lamtron100000 = lamtronGen([['nghìn', 1000], ['chục nghìn', 10000]]);
  G.bang2_5 = bangGen(2, 5); G.bang6_9 = bangGen(6, 9);
  G.timtpNC = () => {
    const a = r(2, 9), x = r(2, 10), t = r(0, 2);
    if (t === 0) return fill1(`Tìm thừa số: <b>? × ${a} = ${a * x}</b>`, x, `Muốn tìm thừa số chưa biết, lấy tích chia cho thừa số đã biết: ${a * x} : ${a} = ${x}.`);
    if (t === 1) return fill1(`Tìm số chia: <b>${a * x} : ? = ${x}</b>`, a, `Muốn tìm số chia, lấy số bị chia chia cho thương: ${a * x} : ${x} = ${a}.`);
    return fill1(`Tìm số bị chia: <b>? : ${a} = ${x}</b>`, a * x, `Muốn tìm số bị chia, lấy thương nhân với số chia: ${x} × ${a} = ${a * x}.`);
  };
  G.motphan = () => {
    const n = r(2, 9), k = r(2, 9), t = r(0, 2);
    if (t === 0) return mc(`Đã tô màu một phần mấy hình tròn?${pieSVG(n)}`, frac(1, n), [frac(1, n + 1), frac(1, n === 2 ? 3 : n - 1), frac(2, n + 1)], `Hình tròn được chia thành ${n} phần bằng nhau, tô màu 1 phần → ${frac(1, n)} hình.`);
    const u = pick(['kg gạo', 'l nước', 'quả cam', 'cái kẹo', 'm vải']);
    if (t === 1) return fill1(`${frac(1, n)} của <b>${n * k} ${u}</b> là bao nhiêu?`, k, `Muốn tìm ${frac(1, n)} của một số, lấy số đó chia cho ${n}: ${n * k} : ${n} = ${k}.`, u);
    return mc(`Mẹ chia đều ${n * k} ${u} cho ${n} người. Phép tính nào phù hợp?`, `${n * k} : ${n} = ${k}`, [`${n * k} − ${n} = ${n * k - n}`, `${n * k} + ${n} = ${n * k + n}`, `${n * k} : ${n} = ${k + 1}`], 'Chia đều thành các phần bằng nhau → dùng phép chia.');
  };

  // ----- Hình học -----
  G.trungdiem = () => {
    const k = r(2, 9);
    if (Math.random() < 0.5) return fill1(`<svg class="pic" viewBox="0 0 220 40" width="240"><line x1="10" y1="20" x2="210" y2="20" stroke="#23314d" stroke-width="3"/><circle cx="10" cy="20" r="4"/><circle cx="110" cy="20" r="4" fill="#e5484d"/><circle cx="210" cy="20" r="4"/><text x="6" y="12" font-size="12">A</text><text x="104" y="12" font-size="12" fill="#e5484d">M</text><text x="204" y="12" font-size="12">B</text></svg>M là trung điểm của đoạn thẳng AB. Đoạn AB dài <b>${2 * k} cm</b>. Đoạn AM dài bao nhiêu xăng-ti-mét?`, k, `Trung điểm chia đoạn thẳng thành 2 phần bằng nhau: ${2 * k} : 2 = ${k} (cm).`, 'cm');
    return mc('Ba điểm A, O, B thẳng hàng, O nằm giữa A và B, AO = OB. Điểm O được gọi là:', 'Trung điểm của đoạn AB', ['Điểm ở ngoài đoạn AB', 'Tâm hình tròn', 'Đỉnh của góc vuông'], 'Điểm ở giữa hai điểm và cách đều hai điểm đó gọi là trung điểm.');
  };
  G.hinhtron = () => {
    const k = r(2, 9);
    const pic = `<svg class="pic" viewBox="0 0 120 120" width="130"><circle cx="60" cy="60" r="50" fill="#fff6dc" stroke="#23314d" stroke-width="2"/><line x1="60" y1="60" x2="110" y2="60" stroke="#e5484d" stroke-width="2.5"/><circle cx="60" cy="60" r="3"/><text x="50" y="56" font-size="12">O</text><text x="112" y="56" font-size="12">A</text></svg>`;
    const t = r(0, 2);
    if (t === 0) return fill1(`${pic}Hình tròn tâm O có bán kính OA = <b>${k} cm</b>. Đường kính của hình tròn dài:`, 2 * k, `Đường kính dài gấp 2 lần bán kính: ${k} × 2 = ${2 * k} (cm).`, 'cm');
    if (t === 1) return fill1(`Hình tròn có đường kính <b>${2 * k} cm</b>. Bán kính dài:`, k, `Bán kính bằng một nửa đường kính: ${2 * k} : 2 = ${k} (cm).`, 'cm');
    return mc('Dụng cụ dùng để vẽ hình tròn là:', 'Com-pa', ['Ê-ke', 'Thước kẻ', 'Thước dây'], 'Com-pa dùng để vẽ hình tròn; ê-ke dùng để kiểm tra, vẽ góc vuông.');
  };
  G.goc = () => {
    const vuong = Math.random() < 0.5, deg = vuong ? 90 : pick([45, 60, 120, 135]), rot = pick([0, 20, 35, 50]);
    if (Math.random() < 0.7) return mc(`Góc trong hình dưới đây là:${angleSVG(deg, rot)}`, vuong ? 'Góc vuông' : 'Góc không vuông', [vuong ? 'Góc không vuông' : 'Góc vuông'], 'Dùng ê-ke áp vào góc: nếu hai cạnh khít với hai cạnh ê-ke thì là góc vuông.');
    return mc(pick(['Hình chữ nhật có mấy góc vuông?', 'Hình vuông có mấy góc vuông?']), 4, [2, 3, 1], 'Hình chữ nhật và hình vuông đều có 4 góc vuông.');
  };
  G.hinhphang = () => {
    const kinds = ['hình tam giác', 'hình vuông', 'hình chữ nhật', 'hình tứ giác', 'hình tròn'];
    if (Math.random() < 0.55) { const k = pick(kinds); return mc(`Hình bên là hình gì?${shapeSVG(k)}`, cap(k), shuffle(kinds.filter((x) => x !== k)).slice(0, 3).map(cap), 'Đếm số cạnh, số góc và xem các góc có vuông không.'); }
    const qs = [['Hình tam giác có mấy cạnh?', 3, [4, 2, 5]], ['Hình tứ giác có mấy đỉnh?', 4, [3, 5, 6]], ['Hình vuông có mấy cạnh bằng nhau?', 4, [2, 3, 0]]];
    const [q, a, d] = pick(qs); return mc(q, a, d, 'Hình tam giác: 3 cạnh, 3 đỉnh. Hình tứ giác (gồm cả hình chữ nhật, hình vuông): 4 cạnh, 4 đỉnh.');
  };
  G.khoi = () => {
    const qs = [
      ['Con xúc xắc có dạng khối gì?', 'Khối lập phương', ['Khối hộp chữ nhật', 'Khối cầu', 'Khối trụ']],
      ['Bao diêm có dạng khối gì?', 'Khối hộp chữ nhật', ['Khối lập phương', 'Khối cầu', 'Khối trụ']],
      ['Khối lập phương có mấy mặt?', 6, [4, 8, 12]],
      ['Khối hộp chữ nhật có mấy đỉnh?', 8, [6, 4, 12]],
      ['Khối lập phương có mấy cạnh?', 12, [6, 8, 10]]];
    const [q, a, d] = pick(qs); return mc(q, a, d, 'Khối lập phương và khối hộp chữ nhật đều có 6 mặt, 8 đỉnh, 12 cạnh. Các mặt của khối lập phương đều là hình vuông.');
  };

  // ----- Nhân chia phạm vi 100, 1000 -----
  G.nhan2x1 = calcGen('x', 11, 49, 2, 6, 99);
  G.chia2x1 = calcGen(':', 20, 99, 2, 6);
  G.nhan3x1 = calcGen('x', 101, 400, 2, 4, 999);
  G.chia3x1 = calcGen(':', 120, 999, 2, 9);
  G.gap = () => { const a = r(3, 25), n = r(2, 6); return Math.random() < 0.5 ? fill1(`Gấp <b>${a}</b> lên <b>${n}</b> lần được:`, a * n, `Muốn gấp một số lên nhiều lần, lấy số đó nhân với số lần: ${a} × ${n} = ${a * n}.`) : mc(`Năm nay em ${a > 12 ? 8 : a} tuổi, tuổi bố gấp ${n > 5 ? 4 : n} lần tuổi em. Bố bao nhiêu tuổi?`, (a > 12 ? 8 : a) * (n > 5 ? 4 : n), [(a > 12 ? 8 : a) + (n > 5 ? 4 : n)], `Gấp lên ${n > 5 ? 4 : n} lần → nhân ${n > 5 ? 4 : n}.`, 'tuổi'); };
  G.giam = () => { const n = r(2, 9), k = r(3, 12), a = n * k; return Math.random() < 0.5 ? fill1(`Giảm <b>${a}</b> đi <b>${n}</b> lần được:`, k, `Muốn giảm một số đi nhiều lần, lấy số đó chia cho số lần: ${a} : ${n} = ${k}.`) : mc(`Giảm ${a} kg đi ${n} lần thì được:`, k, [a - n, a * n > 200 ? k + 2 : a * n], `${a} : ${n} = ${k}. Chú ý: "giảm đi ${n} lần" khác "bớt đi ${n}".`, 'kg'); };
  G.chiadu = () => {
    const b = r(3, 9), q = r(3, 12), rm = r(1, b - 1), a = b * q + rm;
    if (Math.random() < 0.6) return fill(`Thực hiện phép chia: <b>${a} : ${b}</b>`, [{ pre: 'Thương:', ans: q }, { pre: 'Số dư:', ans: rm }], `${a} : ${b} = ${q} (dư ${rm}) vì ${b} × ${q} = ${b * q} và ${a} − ${b * q} = ${rm}. Số dư luôn bé hơn số chia.`);
    return mc(`Trong phép chia có số chia là <b>${b}</b>, số dư lớn nhất có thể là:`, b - 1, [b, b + 1, 1], `Số dư phải bé hơn số chia, nên lớn nhất là ${b} − 1 = ${b - 1}.`);
  };
  G.haibuoc = () => {
    const t = r(0, 3);
    if (t === 0) { const a = r(15, 40), d = r(5, 20); return fill1(`Thùng thứ nhất có ${a} l dầu, thùng thứ hai nhiều hơn thùng thứ nhất ${d} l. Hỏi cả hai thùng có bao nhiêu lít dầu?`, 2 * a + d, `Thùng thứ hai: ${a} + ${d} = ${a + d} (l). Cả hai thùng: ${a} + ${a + d} = ${2 * a + d} (l).`, 'l'); }
    if (t === 1) { const a = r(3, 9), n = r(2, 5); return fill1(`Mai có ${a} nhãn vở, Hà có số nhãn vở gấp ${n} lần của Mai. Hỏi cả hai bạn có bao nhiêu nhãn vở?`, a + a * n, `Hà có: ${a} × ${n} = ${a * n} (nhãn vở). Cả hai: ${a} + ${a * n} = ${a + a * n} (nhãn vở).`, 'nhãn vở'); }
    if (t === 2) { const n = r(3, 6), k = r(5, 9), s = r(3, n * k - 3); return mc(`Có ${n} hộp bút, mỗi hộp ${k} chiếc. Lớp đã dùng ${s} chiếc. Hỏi còn lại bao nhiêu chiếc bút?`, n * k - s, [n * k, n * k + s, n + k - s > 0 ? n + k : n * k - s + 1], `Số bút có: ${n} × ${k} = ${n * k} (chiếc). Còn lại: ${n * k} − ${s} = ${n * k - s} (chiếc).`, 'chiếc'); }
    const n = r(3, 8), k = r(3, 9); return mc(`Bạn có ${n} đĩa bánh, mỗi đĩa có ${k} chiếc bánh. Tổng số bánh được tính bằng phép tính nào?`, `${n} × ${k} = ${n * k}`, [`${n} + ${k} = ${n + k}`, `${k} + ${k} = ${2 * k}`, `${n} × ${k} = ${n * k + 1}`], `${k} chiếc được lấy ${n} lần → phép nhân.`);
  };

  // ----- Đơn vị đo -----
  G.mm = () => { const t = r(0, 2); if (t === 0) { const mm = r(15, 95); return fill1(`Chiếc bút chì dài bao nhiêu mi-li-mét?${rulerSVG(mm)}`, mm, `Mỗi vạch nhỏ là 1 mm, mỗi số trên thước là 1 cm = 10 mm. Bút dài ${Math.floor(mm / 10)} cm ${mm % 10} mm = ${mm} mm.`, 'mm'); } if (t === 1) { const x = r(2, 20); return fill1(`${x} cm = ? mm`, x * 10, `1 cm = 10 mm nên ${x} cm = ${x * 10} mm.`, 'mm'); } return mc('1 m bằng bao nhiêu mi-li-mét?', 1000, [100, 10, 10000], '1 m = 100 cm = 1 000 mm.', 'mm'); };
  G.gam = () => { const t = r(0, 2); if (t === 0) return mc('1 kg bằng bao nhiêu gam?', 1000, [100, 10, 500], '1 kg = 1 000 g.', 'g'); const a = r(1, 9) * 100, b = r(1, 9) * 50; if (t === 1) return fill1(`Quả bưởi nặng ${a} g, quả cam nặng ${b} g. Cả hai quả nặng bao nhiêu gam?`, a + b, `${a} + ${b} = ${a + b} (g).`, 'g'); const kg = r(2, 9), kg2 = r(1, kg - 1); return fill1(`Quả mít nặng ${kg} kg, quả bưởi nặng ${kg2} kg. Quả mít nặng hơn quả bưởi bao nhiêu ki-lô-gam?`, kg - kg2, `${kg} − ${kg2} = ${kg - kg2} (kg).`, 'kg'); };
  G.ml = () => { const t = r(0, 2); if (t === 0) { const l = r(2, 5); return mc(`Mẹ có bình ${l} l nước cam, dùng hết để pha chế. Mẹ đã dùng bao nhiêu mi-li-lít nước cam?`, l * 1000, [l * 100, l * 10000, 1000], `1 l = 1 000 ml nên ${l} l = ${fmt(l * 1000)} ml.`, 'ml'); } const a = r(2, 9) * 100, b = r(1, a / 100 - 1) * 100; if (t === 1) return fill1(`Chai có ${a} ml sữa, rót ra ${b} ml. Chai còn lại bao nhiêu mi-li-lít sữa?`, a - b, `${a} − ${b} = ${a - b} (ml).`, 'ml'); return mc('1 l bằng bao nhiêu mi-li-lít?', 1000, [100, 10, 500], '1 l = 1 000 ml.', 'ml'); };
  G.nhietdo = () => { if (Math.random() < 0.6) { const t = r(1, 9) * 5; return mc(`Nhiệt kế chỉ bao nhiêu độ C?${thermoSVG(t)}`, `${t} °C`, [`${t + 5} °C`, `${t - 5 < 0 ? t + 10 : t - 5} °C`, `${t + 10} °C`], 'Mỗi vạch nhỏ ứng với 5 °C; đọc vạch ở đỉnh cột màu đỏ.'); } const k = pick([['Nhiệt độ của nước đang sôi khoảng:', '100 °C'], ['Nhiệt độ cơ thể người khỏe mạnh khoảng:', '37 °C'], ['Nhiệt độ của nước đá đang tan khoảng:', '0 °C']]); return mc(k[0], k[1], ['100 °C', '37 °C', '0 °C', '50 °C'], 'Nước sôi ở khoảng 100 °C; người khỏe mạnh khoảng 37 °C; nước đá đang tan ở 0 °C.'); };

  // ----- Biểu thức, gấp mấy lần -----
  G.bieuthuc = () => {
    const t = r(0, 3);
    if (t === 0) { const a = r(10, 90), b = r(2, 9), c = r(2, 9); return fill1(`Tính giá trị biểu thức: <b>${a} + ${b} × ${c}</b>`, a + b * c, `Nhân trước, cộng sau: ${b} × ${c} = ${b * c}; ${a} + ${b * c} = ${a + b * c}.`); }
    if (t === 1) { const a = r(5, 40), b = r(5, 40), c = r(2, 5); return mc(`Giá trị của biểu thức <b>(${a} + ${b}) × ${c}</b> là:`, (a + b) * c, [a + b * c, (a + b) * c + c], `Tính trong ngoặc trước: ${a} + ${b} = ${a + b}; rồi ${a + b} × ${c} = ${(a + b) * c}.`); }
    if (t === 2) { const c = r(2, 9), k = r(2, 9), b = c * k, a = r(k + 10, 99); return fill1(`Tính giá trị biểu thức: <b>${a} − ${b} : ${c}</b>`, a - k, `Chia trước, trừ sau: ${b} : ${c} = ${k}; ${a} − ${k} = ${a - k}.`); }
    const a1 = r(20, 60), b1 = r(2, 6), c1 = r(2, 5), L = a1 - b1 * c1; const k2 = r(2, 9), d2 = r(2, 5), e2 = r(1, 20), R = k2 + e2; const A = d2 * k2;
    const ans = L > R ? '>' : L < R ? '<' : '=';
    return mc(`Chọn dấu thích hợp: ${big(`${a1} − ${b1} × ${c1} … ${A} : ${d2} + ${e2}`)}`, ans, ['>', '<', '='], `Vế trái: ${a1} − ${b1 * c1} = ${L}. Vế phải: ${k2} + ${e2} = ${R}.`);
  };
  G.gapmaylan = () => { const b = r(2, 9), k = r(2, 9); return Math.random() < 0.5 ? fill1(`Số lớn là <b>${b * k}</b>, số bé là <b>${b}</b>. Số lớn gấp mấy lần số bé?`, k, `Lấy số lớn chia cho số bé: ${b * k} : ${b} = ${k} (lần).`, 'lần') : mc(`Con ngỗng nặng ${b} kg, con lợn nặng ${b * k} kg. Con lợn nặng gấp mấy lần con ngỗng?`, k, [b * k - b, k + 1, k - 1], `Lấy số lớn chia số bé: ${b * k} : ${b} = ${k} (lần).`, 'lần'); };

  // ----- La Mã, chu vi, diện tích -----
  G.lama = () => {
    const t = r(0, 2);
    if (t === 0) { const n = r(1, 20); return mc(`Số La Mã <b>${roman(n)}</b> đọc là số:`, n, [n + 1, n - 1, n > 10 ? n - 10 : n + 5].filter((x) => x > 0 && x <= 20), 'I = 1, V = 5, X = 10. Chữ số nhỏ đứng trước chữ số lớn thì trừ (IV = 4, IX = 9), đứng sau thì cộng (VI = 6, XI = 11).'); }
    if (t === 1) { const n = r(1, 20); return mc(`Số <b>${n}</b> viết bằng chữ số La Mã là:`, roman(n), distinct(6, () => roman(Math.max(1, Math.min(20, n + pick([-1, 1, -4, 4, 5, -5]))))).filter((x) => x !== roman(n)), 'I = 1, V = 5, X = 10.'); }
    const ns = distinct(4, () => r(1, 20)); return match('Nối số La Mã với số tương ứng:', ns.map((n) => ({ l: roman(n), r: String(n) })), 'I = 1, V = 5, X = 10.');
  };
  G.chuvi = () => {
    const t = r(0, 2);
    if (t === 0) { const d = r(5, 20), w = r(2, d - 1); return fill1(`Hình chữ nhật có chiều dài <b>${d} cm</b>, chiều rộng <b>${w} cm</b>. Chu vi hình chữ nhật là:`, (d + w) * 2, `Chu vi = (dài + rộng) × 2 = (${d} + ${w}) × 2 = ${(d + w) * 2} (cm).`, 'cm'); }
    if (t === 1) { const a = r(3, 25); return mc(`Hình vuông có cạnh <b>${a} cm</b>. Chu vi hình vuông là:`, a * 4, [a * a, a * 2, a + 4].filter((x) => x !== a * 4), `Chu vi hình vuông = cạnh × 4 = ${a} × 4 = ${a * 4} (cm).`, 'cm'); }
    const a = r(3, 12), b = r(3, 12), c = r(3, 12); return fill1(`Hình tam giác có ba cạnh dài ${a} cm, ${b} cm, ${c} cm. Chu vi hình tam giác là:`, a + b + c, `Chu vi = tổng độ dài các cạnh: ${a} + ${b} + ${c} = ${a + b + c} (cm).`, 'cm');
  };
  G.dientichO = () => { const w = r(2, 6), h = r(2, 4); return fill1(`Mỗi ô vuông có diện tích 1 cm². Hình dưới đây có diện tích bao nhiêu xăng-ti-mét vuông?${gridSVG(w, h)}`, w * h, `Đếm số ô vuông: ${h} hàng, mỗi hàng ${w} ô → ${w} × ${h} = ${w * h} ô → ${w * h} cm².`, 'cm²'); };
  G.dientich = () => { if (Math.random() < 0.5) { const d = r(4, 15), w = r(2, d - 1); return mc(`Hình chữ nhật có chiều dài ${d} cm, chiều rộng ${w} cm. Diện tích hình chữ nhật là:`, d * w, [(d + w) * 2, d + w].filter((x) => x !== d * w), `Diện tích = dài × rộng = ${d} × ${w} = ${d * w} (cm²).`, 'cm²'); } const a = r(2, 9); return fill1(`Hình vuông có cạnh ${a} cm. Diện tích hình vuông là:`, a * a, `Diện tích = cạnh × cạnh = ${a} × ${a} = ${a * a} (cm²).`, 'cm²'); };

  // ----- Phạm vi 10 000 / 100 000 -----
  G.cong10000 = calcGen('+', 1000, 7000, 100, 4000, 9999);
  G.tru10000 = calcGen('-', 2000, 9999, 100, 6000);
  G.nhan4x1 = calcGen('x', 1001, 4000, 2, 9, 9999);
  G.chia4x1 = calcGen(':', 1000, 9999, 2, 9);
  G.cong100000 = calcGen('+', 10000, 70000, 1000, 40000, 99999);
  G.tru100000 = calcGen('-', 20000, 99999, 1000, 60000);
  G.nhan5x1 = calcGen('x', 10001, 40000, 2, 9, 99999);
  G.chia5x1 = calcGen(':', 10000, 99999, 2, 9);

  // ----- Đồng hồ, lịch, tiền -----
  const docGio = (h, m) => (m === 0 ? `${h} giờ` : `${h} giờ ${m} phút`);
  G.dongho = () => {
    const t = r(0, 2);
    if (t === 0) { const h = r(1, 12), m = r(0, 11) * 5; const wrong = [docGio((m / 5) || 12, (h * 5) % 60), docGio(h % 12 + 1, m), docGio(h, (m + 15) % 60), docGio(h === 1 ? 12 : h - 1, m)]; return mc(`Đồng hồ chỉ mấy giờ?${clockSVG(h, m)}`, docGio(h, m), wrong, 'Kim ngắn chỉ giờ, kim dài chỉ phút. Kim dài chỉ vào số 1 là 5 phút, số 2 là 10 phút…'); }
    if (t === 1) { const h = r(1, 11), m = r(7, 11) * 5; return mc(`<b>${h} giờ ${m} phút</b> còn gọi là:`, `${h + 1} giờ kém ${60 - m} phút`, [`${h} giờ kém ${60 - m} phút`, `${h + 1} giờ ${60 - m} phút`, `${h} giờ kém ${m} phút`], `Còn ${60 - m} phút nữa là đến ${h + 1} giờ.`); }
    return mc('1 giờ bằng bao nhiêu phút?', 60, [100, 30, 24], '1 giờ = 60 phút.', 'phút');
  };
  const THU = ['Chủ nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
  G.lich = () => {
    const t = r(0, 2);
    if (t === 0) { const m = pick([1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]); const d = [1, 3, 5, 7, 8, 10, 12].includes(m) ? 31 : 30; return mc(`Tháng ${m} có bao nhiêu ngày?`, d, [d === 31 ? 30 : 31, 28, 29], 'Tháng 1, 3, 5, 7, 8, 10, 12 có 31 ngày; tháng 4, 6, 9, 11 có 30 ngày; tháng 2 có 28 hoặc 29 ngày.', 'ngày'); }
    if (t === 1) { const d = r(1, 15), w = r(0, 6), k = pick([7, 14]); return mc(`<div class="calendar"><b>${THU[w]}</b><span>${d}</span>Tháng 7</div>Nếu ngày ${d} tháng 7 là ${THU[w]} thì ngày ${d + k} tháng 7 cùng năm đó là thứ mấy?`, THU[w], shuffle(THU.filter((x) => x !== THU[w])).slice(0, 3), `Cứ sau 7 ngày lại đến cùng một thứ. ${d + k} − ${d} = ${k} ngày = ${k / 7} tuần → vẫn là ${THU[w]}.`); }
    return mc('Một năm có bao nhiêu tháng?', 12, [10, 7, 52], '1 năm có 12 tháng.', 'tháng');
  };
  G.tien = () => {
    const notes = [1000, 2000, 5000, 10000, 20000, 50000];
    if (Math.random() < 0.5) { const [v1, v2] = shuffle(notes).slice(0, 2); const c1 = r(1, 3), c2 = r(1, 3); return fill1(`Mẹ có ${c1} tờ ${fmt(v1)} đồng và ${c2} tờ ${fmt(v2)} đồng. Mẹ có tất cả bao nhiêu tiền?`, c1 * v1 + c2 * v2, `${fmt(v1)} × ${c1} + ${fmt(v2)} × ${c2} = ${fmt(c1 * v1 + c2 * v2)} (đồng).`, 'đồng'); }
    const p = r(2, 9) * 1000 + pick([0, 500]), n = r(2, 4), tot = p * n, paid = [10000, 20000, 50000, 100000].find((x) => x >= tot);
    return fill1(`Mua ${n} quyển vở, mỗi quyển giá ${fmt(p)} đồng. Đưa cô bán hàng ${fmt(paid)} đồng. Cô phải trả lại bao nhiêu tiền?`, paid - tot, `Tiền mua vở: ${fmt(p)} × ${n} = ${fmt(tot)} (đồng). Trả lại: ${fmt(paid)} − ${fmt(tot)} = ${fmt(paid - tot)} (đồng).`, 'đồng');
  };

  // ----- Thống kê, xác suất -----
  G.bangsolieu = () => {
    const names = ['3A', '3B', '3C', '3D'], vals = distinct(4, () => r(15, 40)); const tbl = tableHTML(['Lớp', ...names.map((n) => 'Lớp ' + n)], [['Số cây trồng được', ...vals]]);
    const t = r(0, 2);
    if (t === 0) { const mx = vals.indexOf(Math.max(...vals)); return mc(`Bảng số liệu số cây các lớp trồng được:${tbl}Lớp nào trồng được nhiều cây nhất?`, 'Lớp ' + names[mx], names.filter((_, i) => i !== mx).map((n) => 'Lớp ' + n), 'So sánh các số trong bảng để tìm số lớn nhất.'); }
    if (t === 1) return fill1(`Bảng số liệu số cây các lớp trồng được:${tbl}Cả bốn lớp trồng được bao nhiêu cây?`, vals.reduce((a, b) => a + b, 0), `${vals.join(' + ')} = ${vals.reduce((a, b) => a + b, 0)} (cây).`, 'cây');
    return order(`Bảng số liệu số cây các lớp trồng được:${tbl}Sắp xếp các lớp theo số cây <b>từ nhiều nhất đến ít nhất</b>:`, names.map((n, i) => [n, vals[i]]).sort((a, b) => b[1] - a[1]).map((x) => 'Lớp ' + x[0]), 'Đọc số liệu từng lớp rồi so sánh.');
  };
  G.bieudotranh = () => {
    const per = pick([2, 5]), ppl = ['Mai', 'Liên', 'Cúc'], cnt = distinct(3, () => r(3, 9)); const icon = '✏️';
    const rows = ppl.map((p, i) => [p, `<span class="icons">${Array(cnt[i]).fill(icon).join('')}</span>`]);
    const i = r(0, 2);
    return mc(`<div class="cap">Số bút chì của mỗi bạn</div>${tableHTML(['Bạn', 'Số bút chì'], rows)}<p>${icon} = ${per} chiếc bút chì</p>Bạn <b>${ppl[i]}</b> có bao nhiêu chiếc bút chì?`, cnt[i] * per, [cnt[i], cnt[i] * per + per, cnt[i] + per], `${ppl[i]} có ${cnt[i]} biểu tượng, mỗi biểu tượng là ${per} chiếc: ${cnt[i]} × ${per} = ${cnt[i] * per} (chiếc).`, 'chiếc');
  };
  G.khanang = () => {
    const cols = ['đỏ', 'xanh', 'vàng', 'tím'], have = shuffle(cols).slice(0, r(1, 2)); const nums = have.map(() => r(2, 6));
    const desc = have.map((c, i) => `${nums[i]} viên bi ${c}`).join(' và ');
    const t = r(0, 2); let target, ans;
    if (t === 0) { target = cols.find((c) => !have.includes(c)); ans = 'Không thể'; }
    else if (have.length === 1) { target = have[0]; ans = 'Chắc chắn'; }
    else { target = pick(have); ans = 'Có thể'; }
    return mc(`Trong hộp có ${desc}. Không nhìn vào hộp, lấy ra 1 viên bi. Khả năng lấy được viên bi <b>${target}</b> là:`, ans, ['Chắc chắn', 'Có thể', 'Không thể'], '"Chắc chắn": hộp chỉ có loại đó. "Có thể": hộp có loại đó và loại khác. "Không thể": hộp không có loại đó.');
  };

  /* ================= CÂU TỰ LUẬN (AI chấm) ================= */
  const ESSAY = {
    1: [
      () => { const a = r(101, 300), b = r(2, 3), c = r(2, 9), q = r(25, 110), d = c * q; return essay(`Đặt tính rồi tính: a) ${fmt(a)} × ${b}; b) ${fmt(d)} : ${c}`, 2, `a) ${fmt(a)} × ${b} = ${fmt(a * b)}; b) ${fmt(d)} : ${c} = ${q}`, [a * b, q]); },
      () => { const a = r(20, 80), b = r(20, 80), c = r(2, 5), x = r(2, 9), y = r(3, 9), z = r(5, x * y - 1 > 5 ? Math.min(30, x * y - 1) : 5); return essay(`Tính giá trị của biểu thức: a) (${a} + ${b}) × ${c}; b) ${x} × ${y} − ${z}`, 2, `a) (${a} + ${b}) × ${c} = ${a + b} × ${c} = ${(a + b) * c}; b) ${x} × ${y} − ${z} = ${x * y} − ${z} = ${x * y - z}`, [(a + b) * c, x * y - z]); },
      () => { const n = pick([3, 4, 5, 6]), k = r(12, 25), tot = n * k; return essay(`Một cửa hàng có ${tot} kg gạo, đã bán ${frac(1, n)} số gạo đó. Hỏi cửa hàng còn lại bao nhiêu ki-lô-gam gạo?`, 2, `Số gạo đã bán: ${tot} : ${n} = ${k} (kg). Số gạo còn lại: ${tot} − ${k} = ${tot - k} (kg). Đáp số: ${tot - k} kg gạo.`, [k, tot - k]); },
      () => { const a = r(12, 30), n = r(2, 4); return essay(`Thùng thứ nhất có ${a} l nước mắm. Thùng thứ hai có số lít gấp ${n} lần thùng thứ nhất. Hỏi cả hai thùng có bao nhiêu lít nước mắm?`, 2, `Thùng thứ hai: ${a} × ${n} = ${a * n} (l). Cả hai thùng: ${a} + ${a * n} = ${a + a * n} (l). Đáp số: ${a + a * n} l.`, [a * n, a + a * n]); }
    ],
    2: [
      () => { const a = r(10000, 50000), b = r(10000, 99999 - a), c = r(20000, 99999), d = r(1000, c - 1000); return essay(`Đặt tính rồi tính: a) ${fmt(a)} + ${fmt(b)}; b) ${fmt(c)} − ${fmt(d)}`, 2, `a) ${fmt(a + b)}; b) ${fmt(c - d)}`, [a + b, c - d]); },
      () => { const b = r(3, 9), x = r(1000, Math.floor(99999 / b)); return essay(`Tìm số thích hợp thay cho dấu ?: ? × ${b} = ${fmt(x * b)}. Trình bày cách tìm.`, 2, `? = ${fmt(x * b)} : ${b} = ${fmt(x)} (lấy tích chia cho thừa số đã biết).`, [x]); },
      () => { const p = r(5, 9) * 1000 + 500, n = r(2, 4), tot = p * n, paid = [20000, 50000].find((v) => v >= tot); return essay(`Mai mua ${n} quyển vở, mỗi quyển giá ${fmt(p)} đồng. Mai đưa cô bán hàng ${fmt(paid)} đồng. Hỏi cô phải trả lại Mai bao nhiêu tiền?`, 2, `Tiền mua vở: ${fmt(p)} × ${n} = ${fmt(tot)} (đồng). Tiền trả lại: ${fmt(paid)} − ${fmt(tot)} = ${fmt(paid - tot)} (đồng). Đáp số: ${fmt(paid - tot)} đồng.`, [tot, paid - tot]); },
      () => { const w = r(4, 9), d = w * r(2, 3); return essay(`Một mảnh bìa hình chữ nhật có chiều rộng ${w} cm, chiều dài gấp ${d / w} lần chiều rộng. Tính diện tích mảnh bìa.`, 2, `Chiều dài: ${w} × ${d / w} = ${d} (cm). Diện tích: ${d} × ${w} = ${d * w} (cm²). Đáp số: ${d * w} cm².`, [d, d * w]); }
    ]
  };

  /* ================= NỘI DUNG CHỦ ĐỀ ================= */
  const T = [
    { id: 1, hk: 1, ten: 'Ôn tập và bổ sung', widgets: ['placevalue:999', 'dattinh'],
      lt: `<ul><li><b>Số có ba chữ số</b> gồm hàng trăm, hàng chục, hàng đơn vị. Ví dụ: 572 = 500 + 70 + 2.</li><li><b>So sánh</b>: so hàng trăm trước; bằng nhau thì so hàng chục, rồi hàng đơn vị.</li><li><b>Cộng, trừ trong phạm vi 1 000</b>: đặt tính thẳng cột, tính từ phải sang trái, nhớ khi cần.</li><li><b>Tìm thành phần</b>: Số hạng = Tổng − Số hạng kia · Số bị trừ = Hiệu + Số trừ · Số trừ = Số bị trừ − Hiệu.</li><li><b>Bảng nhân, chia 2, 3, 4, 5</b>: phép chia là phép ngược của phép nhân: 3 × 4 = 12 → 12 : 3 = 4 và 12 : 4 = 3.</li></ul>`,
      bai: [[1, 'Ôn tập các số đến 1 000', ['so1000']], [2, 'Ôn tập phép cộng, phép trừ trong phạm vi 1 000', ['cong1000']], [3, 'Tìm thành phần trong phép cộng, phép trừ', ['timtp']], [4, 'Ôn tập bảng nhân 2; 5, bảng chia 2; 5', ['bang2_5']], [5, 'Bảng nhân 3, bảng chia 3', ['bang2_5']], [6, 'Bảng nhân 4, bảng chia 4', ['bang2_5']], [7, 'Ôn tập hình học và đo lường', ['hinhphang', 'cong1000']], [8, 'Luyện tập chung', null]] },
    { id: 2, hk: 1, ten: 'Bảng nhân, bảng chia', widgets: ['bangnhan', 'phanso'],
      lt: `<ul><li><b>Bảng nhân 6, 7, 8, 9</b>: mỗi lần thêm một lần nhân thì tích tăng thêm đúng số đó (6 × 4 = 24 → 6 × 5 = 30).</li><li>Mẹo bảng 9: <b>9 × n = 10 × n − n</b>. Ví dụ 9 × 7 = 70 − 7 = 63.</li><li>Đổi chỗ các thừa số thì tích không đổi: 7 × 8 = 8 × 7 = 56.</li><li><b>Tìm thành phần</b>: Thừa số = Tích : Thừa số kia · Số bị chia = Thương × Số chia · Số chia = Số bị chia : Thương.</li><li><b>Một phần mấy</b>: chia một hình (hay một số) thành n phần bằng nhau, lấy 1 phần là ${frac(1, 'n')}. Muốn tìm ${frac(1, 'n')} của một số, lấy số đó chia cho n.</li></ul>`,
      bai: [[9, 'Bảng nhân 6, bảng chia 6', ['bang6_9']], [10, 'Bảng nhân 7, bảng chia 7', ['bang6_9']], [11, 'Bảng nhân 8, bảng chia 8', ['bang6_9']], [12, 'Bảng nhân 9, bảng chia 9', ['bang6_9']], [13, 'Tìm thành phần trong phép nhân, phép chia', ['timtpNC']], [14, 'Một phần mấy', ['motphan']], [15, 'Luyện tập chung', null]] },
    { id: 3, hk: 1, ten: 'Làm quen với hình phẳng, hình khối', widgets: ['hinhtron'],
      lt: `<ul><li><b>Trung điểm</b> của đoạn thẳng là điểm ở giữa, chia đoạn thẳng thành 2 phần dài bằng nhau.</li><li><b>Hình tròn</b> có tâm O; <b>bán kính</b> nối tâm với một điểm trên đường tròn; <b>đường kính</b> đi qua tâm và dài gấp 2 lần bán kính. Vẽ hình tròn bằng com-pa.</li><li><b>Góc vuông</b> kiểm tra bằng ê-ke; góc không khít ê-ke là góc không vuông.</li><li><b>Hình tam giác</b>: 3 cạnh, 3 đỉnh. <b>Hình tứ giác</b>: 4 cạnh, 4 đỉnh. <b>Hình chữ nhật</b>: 4 góc vuông, 2 chiều dài bằng nhau, 2 chiều rộng bằng nhau. <b>Hình vuông</b>: 4 góc vuông, 4 cạnh bằng nhau.</li><li><b>Khối lập phương, khối hộp chữ nhật</b>: đều có 6 mặt, 8 đỉnh, 12 cạnh.</li></ul>`,
      bai: [[16, 'Điểm ở giữa, trung điểm của đoạn thẳng', ['trungdiem']], [17, 'Hình tròn. Tâm, bán kính, đường kính của hình tròn', ['hinhtron']], [18, 'Góc, góc vuông, góc không vuông', ['goc']], [19, 'Hình tam giác, hình tứ giác. Hình chữ nhật, hình vuông', ['hinhphang']], [20, 'Thực hành vẽ góc vuông, đường tròn, hình vuông, hình chữ nhật và vẽ trang trí', ['goc', 'hinhtron', 'hinhphang']], [21, 'Khối lập phương, khối hộp chữ nhật', ['khoi']], [22, 'Luyện tập chung', null]] },
    { id: 4, hk: 1, ten: 'Phép nhân, phép chia trong phạm vi 100', widgets: ['chiakeo', 'dattinh'],
      lt: `<ul><li><b>Nhân số có hai chữ số với số có một chữ số</b>: nhân từ hàng đơn vị, nhớ sang hàng chục. Ví dụ 26 × 3: 3 × 6 = 18, viết 8 nhớ 1; 3 × 2 = 6, thêm 1 là 7 → 78.</li><li><b>Gấp một số lên n lần</b>: lấy số đó nhân n. <b>Giảm một số đi n lần</b>: lấy số đó chia n.</li><li><b>Phép chia hết</b> có số dư là 0; <b>phép chia có dư</b>: số dư luôn bé hơn số chia.</li><li><b>Chia số có hai chữ số cho số có một chữ số</b>: chia từ hàng chục rồi đến hàng đơn vị.</li><li><b>Bài toán hai bước</b>: tìm số trung gian ở bước 1, dùng nó để tìm đáp số ở bước 2.</li></ul>`,
      bai: [[23, 'Nhân số có hai chữ số với số có một chữ số', ['nhan2x1']], [24, 'Gấp một số lên một số lần', ['gap']], [25, 'Phép chia hết, phép chia có dư', ['chiadu']], [26, 'Chia số có hai chữ số cho số có một chữ số', ['chia2x1']], [27, 'Giảm một số đi một số lần', ['giam']], [28, 'Bài toán giải bằng hai bước tính', ['haibuoc']], [29, 'Luyện tập chung', null]] },
    { id: 5, hk: 1, ten: 'Đơn vị đo độ dài, khối lượng, dung tích, nhiệt độ', widgets: ['thuoc'],
      lt: `<ul><li><b>Mi-li-mét (mm)</b>: 1 cm = 10 mm; 1 m = 1 000 mm.</li><li><b>Gam (g)</b>: 1 kg = 1 000 g. Dùng cân để đo khối lượng.</li><li><b>Mi-li-lít (ml)</b>: 1 l = 1 000 ml. Dùng ca, bình chia vạch để đong.</li><li><b>Nhiệt độ</b> đo bằng nhiệt kế, đơn vị là độ C (°C). Nước đá tan: 0 °C; cơ thể người: khoảng 37 °C; nước sôi: 100 °C.</li></ul>`,
      bai: [[30, 'Mi-li-mét', ['mm']], [31, 'Gam', ['gam']], [32, 'Mi-li-lít', ['ml']], [33, 'Nhiệt độ. Đơn vị đo nhiệt độ', ['nhietdo']], [34, 'Thực hành và trải nghiệm với các đơn vị mi-li-mét, gam, mi-li-lít, độ C', ['mm', 'gam', 'ml', 'nhietdo']], [35, 'Luyện tập chung', null]] },
    { id: 6, hk: 1, ten: 'Phép nhân, phép chia trong phạm vi 1 000', widgets: ['bieuthuc', 'dattinh'],
      lt: `<ul><li><b>Nhân số có ba chữ số với số có một chữ số</b>: nhân lần lượt đơn vị → chục → trăm, có nhớ.</li><li><b>Chia số có ba chữ số cho số có một chữ số</b>: chia từ trái sang phải, mỗi lượt làm 4 việc: chia – nhân – trừ – hạ.</li><li><b>Thứ tự tính biểu thức</b>: chỉ có + − (hoặc chỉ có × :) → tính từ trái sang phải; có cả + − và × : → nhân, chia trước; có ngoặc → tính trong ngoặc trước.</li><li><b>Số lớn gấp mấy lần số bé</b>: lấy số lớn chia cho số bé.</li></ul>`,
      bai: [[36, 'Nhân số có ba chữ số với số có một chữ số', ['nhan3x1']], [37, 'Chia số có ba chữ số cho số có một chữ số', ['chia3x1']], [38, 'Biểu thức số. Tính giá trị của biểu thức số', ['bieuthuc']], [39, 'So sánh số lớn gấp mấy lần số bé', ['gapmaylan']], [40, 'Luyện tập chung', null]] },
    { id: 7, hk: 1, ten: 'Ôn tập học kì 1', widgets: [], review: true,
      lt: `<p>Ôn lại toàn bộ kiến thức học kì 1. Hãy tự kiểm tra xem em đã nắm chắc chưa:</p><ul><li>Bảng nhân, bảng chia từ 2 đến 9.</li><li>Nhân, chia số có hai, ba chữ số với số có một chữ số; chia có dư.</li><li>Gấp lên / giảm đi một số lần; số lớn gấp mấy lần số bé; ${frac(1, 'n')} của một số.</li><li>Tính giá trị biểu thức đúng thứ tự.</li><li>Trung điểm, hình tròn, góc vuông, hình chữ nhật, hình vuông, khối lập phương, khối hộp chữ nhật.</li><li>Đổi đơn vị mm, g, ml; đọc nhiệt độ.</li></ul>`,
      bai: [[41, 'Ôn tập phép nhân, phép chia trong phạm vi 100, 1 000', ['nhan2x1', 'chia2x1', 'nhan3x1', 'chia3x1']], [42, 'Ôn tập biểu thức số', ['bieuthuc']], [43, 'Ôn tập hình học và đo lường', ['hinhtron', 'goc', 'hinhphang', 'khoi', 'mm', 'gam', 'ml']], [44, 'Ôn tập chung', 'HK1']] },
    { id: 8, hk: 2, ten: 'Các số đến 10 000', widgets: ['placevalue:9999', 'lama'],
      lt: `<ul><li><b>Số có bốn chữ số</b> gồm hàng nghìn, trăm, chục, đơn vị. Ví dụ 3 421: 3 nghìn, 4 trăm, 2 chục, 1 đơn vị — đọc là "ba nghìn bốn trăm hai mươi mốt". Số tròn mười nghìn: 10 000.</li><li><b>So sánh</b>: số nào nhiều chữ số hơn thì lớn hơn; cùng số chữ số thì so từng hàng từ trái sang phải.</li><li><b>Chữ số La Mã</b>: I = 1, V = 5, X = 10. Chữ số nhỏ đứng <i>trước</i> chữ số lớn thì trừ (IV = 4, IX = 9); đứng <i>sau</i> thì cộng (VI = 6, XII = 12).</li><li><b>Làm tròn</b> đến hàng chục (hàng trăm): xét chữ số ngay bên phải; bé hơn 5 thì làm tròn xuống, từ 5 trở lên thì làm tròn lên.</li></ul>`,
      bai: [[45, 'Các số có bốn chữ số. Số 10 000', ['so10000']], [46, 'So sánh các số trong phạm vi 10 000', ['sosanh10000']], [47, 'Làm quen với chữ số La Mã', ['lama']], [48, 'Làm tròn số đến hàng chục, hàng trăm', ['lamtron10000']], [49, 'Luyện tập chung', null]] },
    { id: 9, hk: 2, ten: 'Chu vi, diện tích một số hình phẳng', widgets: ['luoi'],
      lt: `<ul><li><b>Chu vi</b> một hình là tổng độ dài các cạnh.</li><li>Chu vi hình chữ nhật = <b>(dài + rộng) × 2</b>. Chu vi hình vuông = <b>cạnh × 4</b>.</li><li><b>Diện tích</b> là phần bề mặt của hình. Đơn vị: <b>xăng-ti-mét vuông (cm²)</b> — là diện tích hình vuông cạnh 1 cm.</li><li>Diện tích hình chữ nhật = <b>dài × rộng</b>. Diện tích hình vuông = <b>cạnh × cạnh</b>.</li><li>Chú ý: các số đo phải cùng đơn vị.</li></ul>`,
      bai: [[50, 'Chu vi hình tam giác, hình tứ giác, hình chữ nhật, hình vuông', ['chuvi']], [51, 'Diện tích của một hình. Xăng-ti-mét vuông', ['dientichO']], [52, 'Diện tích hình chữ nhật, diện tích hình vuông', ['dientich']], [53, 'Luyện tập chung', null]] },
    { id: 10, hk: 2, ten: 'Cộng, trừ, nhân, chia trong phạm vi 10 000', widgets: ['dattinh'],
      lt: `<ul><li>Cộng, trừ số có bốn chữ số: đặt tính thẳng cột (đơn vị thẳng đơn vị…), tính từ phải sang trái, có nhớ.</li><li>Nhân số có bốn chữ số với số có một chữ số: nhân từ hàng đơn vị, nhớ sang hàng kế tiếp.</li><li>Chia số có bốn chữ số cho số có một chữ số: chia từ hàng nghìn; nếu chữ số đầu bé hơn số chia thì lấy hai chữ số đầu.</li><li>Thử lại: lấy thương × số chia (+ số dư) phải bằng số bị chia.</li></ul>`,
      bai: [[54, 'Phép cộng trong phạm vi 10 000', ['cong10000']], [55, 'Phép trừ trong phạm vi 10 000', ['tru10000']], [56, 'Nhân số có bốn chữ số với số có một chữ số', ['nhan4x1']], [57, 'Chia số có bốn chữ số cho số có một chữ số', ['chia4x1']], [58, 'Luyện tập chung', null]] },
    { id: 11, hk: 2, ten: 'Các số đến 100 000', widgets: ['placevalue:99999'],
      lt: `<ul><li><b>Số có năm chữ số</b> có thêm <b>hàng chục nghìn</b>. Ví dụ 53 460: 5 chục nghìn, 3 nghìn, 4 trăm, 6 chục, 0 đơn vị — đọc là "năm mươi ba nghìn bốn trăm sáu mươi". Số 100 000 đọc là "một trăm nghìn".</li><li>So sánh như với số có bốn chữ số.</li><li><b>Làm tròn đến hàng nghìn, hàng chục nghìn</b>: xét chữ số ngay bên phải hàng cần làm tròn.</li></ul>`,
      bai: [[59, 'Các số có năm chữ số. Số 100 000', ['so100000']], [60, 'So sánh các số trong phạm vi 100 000', ['sosanh100000']], [61, 'Làm tròn số đến hàng nghìn, hàng chục nghìn', ['lamtron100000']], [62, 'Luyện tập chung', null]] },
    { id: 12, hk: 2, ten: 'Cộng, trừ trong phạm vi 100 000', widgets: ['dattinh'],
      lt: `<ul><li>Đặt tính thẳng cột, cộng/trừ lần lượt từ hàng đơn vị đến hàng chục nghìn.</li><li>Cộng: tổng một hàng từ 10 trở lên thì viết chữ số hàng đơn vị, nhớ 1 sang hàng bên trái.</li><li>Trừ: chữ số trên bé hơn chữ số dưới thì mượn 10, rồi nhớ 1 cộng vào chữ số hàng bên trái của số trừ.</li><li>Tính nhẩm số tròn nghìn: 30 000 + 20 000 = 3 chục nghìn + 2 chục nghìn = 5 chục nghìn = 50 000.</li></ul>`,
      bai: [[63, 'Phép cộng trong phạm vi 100 000', ['cong100000']], [64, 'Phép trừ trong phạm vi 100 000', ['tru100000']], [65, 'Luyện tập chung', null]] },
    { id: 13, hk: 2, ten: 'Xem đồng hồ. Tháng – năm. Tiền Việt Nam', widgets: ['dongho'],
      lt: `<ul><li>Kim ngắn chỉ <b>giờ</b>, kim dài chỉ <b>phút</b>. 1 giờ = 60 phút. Quá 30 phút có thể đọc kiểu "kém": 8 giờ 45 phút = 9 giờ kém 15 phút.</li><li>1 năm có <b>12 tháng</b>. Tháng 1, 3, 5, 7, 8, 10, 12 có 31 ngày; tháng 4, 6, 9, 11 có 30 ngày; tháng 2 có 28 hoặc 29 ngày. Một tuần có 7 ngày.</li><li><b>Tiền Việt Nam</b>: các tờ 1 000, 2 000, 5 000, 10 000, 20 000, 50 000, 100 000 đồng… Cộng, trừ tiền như cộng, trừ số.</li></ul>`,
      bai: [[66, 'Xem đồng hồ. Tháng – năm', ['dongho', 'lich']], [67, 'Thực hành xem đồng hồ, xem lịch', ['dongho', 'lich']], [68, 'Tiền Việt Nam', ['tien']], [69, 'Luyện tập chung', null]] },
    { id: 14, hk: 2, ten: 'Nhân, chia trong phạm vi 100 000', widgets: ['dattinh', 'bieuthuc'],
      lt: `<ul><li>Nhân số có năm chữ số với số có một chữ số: nhân từ phải sang trái, nhớ sang hàng tiếp theo.</li><li>Chia số có năm chữ số cho số có một chữ số: chia từ trái sang phải; mỗi lượt chia – nhân – trừ – hạ.</li><li>Tính nhẩm số tròn nghìn: 12 000 × 3 = 12 nghìn × 3 = 36 nghìn = 36 000.</li></ul>`,
      bai: [[70, 'Nhân số có năm chữ số với số có một chữ số', ['nhan5x1']], [71, 'Chia số có năm chữ số cho số có một chữ số', ['chia5x1']], [72, 'Luyện tập chung', null]] },
    { id: 15, hk: 2, ten: 'Làm quen với yếu tố thống kê, xác suất', widgets: ['bocbi'],
      lt: `<ul><li><b>Thu thập, phân loại, ghi chép số liệu</b> rồi trình bày vào <b>bảng số liệu</b> để dễ so sánh.</li><li>Đọc bảng: tìm nhiều nhất, ít nhất, tổng, hơn kém nhau bao nhiêu.</li><li><b>Khả năng xảy ra</b> của một sự kiện: <b>chắc chắn</b> (luôn xảy ra), <b>có thể</b> (có khi xảy ra, có khi không), <b>không thể</b> (không bao giờ xảy ra).</li></ul>`,
      bai: [[73, 'Thu thập, phân loại, ghi chép số liệu. Bảng số liệu', ['bangsolieu']], [74, 'Khả năng xảy ra của một sự kiện', ['khanang']], [75, 'Thực hành thu thập, phân loại, ghi chép số liệu, đọc bảng số liệu', ['bangsolieu', 'bieudotranh']]] },
    { id: 16, hk: 2, ten: 'Ôn tập cuối năm', widgets: [], review: true,
      lt: `<p>Tổng ôn cả năm. Danh sách tự kiểm tra:</p><ul><li>Đọc, viết, so sánh, làm tròn số đến 100 000; chữ số La Mã.</li><li>Cộng, trừ, nhân, chia trong phạm vi 100 000; tính giá trị biểu thức.</li><li>Chu vi, diện tích hình chữ nhật, hình vuông.</li><li>Xem đồng hồ, xem lịch, tính tiền.</li><li>Đọc bảng số liệu; chắc chắn – có thể – không thể.</li></ul>`,
      bai: [[76, 'Ôn tập các số trong phạm vi 10 000, 100 000', ['so10000', 'so100000', 'sosanh100000', 'lamtron100000']], [77, 'Ôn tập phép cộng, phép trừ trong phạm vi 100 000', ['cong100000', 'tru100000']], [78, 'Ôn tập phép nhân, phép chia trong phạm vi 100 000', ['nhan5x1', 'chia5x1', 'bieuthuc']], [79, 'Ôn tập hình học và đo lường', ['chuvi', 'dientich', 'dongho', 'tien']], [80, 'Ôn tập bảng số liệu, khả năng xảy ra của một sự kiện', ['bangsolieu', 'khanang']], [81, 'Ôn tập chung', 'HK2']] }
  ];

  // Chuẩn hoá: bài "Luyện tập chung" dùng toàn bộ dạng của chủ đề; "HK1/HK2" dùng toàn học kì
  T.forEach((t) => { t.gens = [...new Set(t.bai.flatMap((b) => Array.isArray(b[2]) ? b[2] : []))]; });
  const hkGens = (hk) => [...new Set(T.filter((t) => t.hk === hk).flatMap((t) => t.gens))];
  const BAI = [];
  T.forEach((t) => t.bai.forEach((b) => {
    let g = b[2]; if (g === null) g = t.gens; else if (g === 'HK1') g = hkGens(1); else if (g === 'HK2') g = hkGens(2);
    BAI.push({ so: b[0], ten: b[1], gens: g, topic: t.id, hk: t.hk });
  }));
  T.forEach((t) => { if (t.review) t.gens = hkGens(t.hk); });

  /* ================= PHÂN PHỐI THEO TUẦN / THÁNG / KỲ (tham khảo) ================= */
  function chunk(list, weeks, w0) { const out = []; for (let i = 0; i < weeks; i++) { const a = Math.round(i * list.length / weeks), b = Math.round((i + 1) * list.length / weeks); out.push({ tuan: w0 + i, bai: list.slice(a, b) }); } return out; }
  const WEEKS = chunk(BAI.filter((b) => b.hk === 1), 18, 1).concat(chunk(BAI.filter((b) => b.hk === 2), 17, 19));
  const MONTHS = [[9, 1, 4], [10, 5, 8], [11, 9, 12], [12, 13, 16], [1, 17, 20], [2, 21, 24], [3, 25, 28], [4, 29, 32], [5, 33, 35]].map(([m, a, b]) => ({ thang: m, tuan: [a, b], bai: WEEKS.filter((w) => w.tuan >= a && w.tuan <= b).flatMap((w) => w.bai) }));
  const between = (a, b) => BAI.filter((x) => x.so >= a && x.so <= b);
  const TERMS = [
    { id: 'gk1', ten: 'Kiểm tra giữa học kì 1', bai: between(1, 22), essay: 1, hk: 1 },
    { id: 'ck1', ten: 'Kiểm tra cuối học kì 1', bai: between(1, 44), essay: 1, hk: 1 },
    { id: 'gk2', ten: 'Kiểm tra giữa học kì 2', bai: between(45, 65), essay: 2, hk: 2 },
    { id: 'ck2', ten: 'Kiểm tra cuối học kì 2', bai: between(1, 81), essay: 2, hk: 2 }
  ];

  PLT.registerSubject({
    id: 'toan-3', lop: 3, mon: 'Toán', icon: '🔢', bo: 'Kết nối tri thức với cuộc sống',
    topics: T, bai: BAI, gens: G, essays: ESSAY, weeks: WEEKS, months: MONTHS, terms: TERMS
  });
})();

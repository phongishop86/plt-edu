/* Thư viện bộ sinh câu hỏi Toán dùng chung (tiểu học) */
(function () {
  'use strict';
  const { r, pick, shuffle, fmt, docSo, cap, mc, fill, fill1, match, order, sort, groupsHTML, numlineHTML } = PLT.U;
  const big = (s) => `<div class="board">${s}</div>`;
  const cautao = (n, d) => { const names = ['đơn vị', 'chục', 'trăm', 'nghìn', 'chục nghìn']; const s = String(n).split('').map(Number); return s.map((v, i) => `${v} ${names[d - 1 - i]}`).join(', '); };
  const randDigits = (d) => { let n = r(1, 9); for (let i = 1; i < d; i++) n = n * 10 + (Math.random() < 0.25 ? 0 : r(0, 9)); return n; };
  const distinct = (k, f) => { const s = new Set(); let g = 0; while (s.size < k && g++ < 200) s.add(f()); return [...s]; };
  const opName = { '+': '+', '-': '−', 'x': '×', ':': ':' };

  // ----- Số: đọc, viết, cấu tạo, so sánh, làm tròn -----
  function soGen(d) {
    const gen = () => {
      const t = r(0, 5);
      if (t === 0) { // nối cấu tạo (hoán vị chữ số)
        let digs; do { digs = distinct(d, () => r(1, 9)); } while (digs.length < d);
        const perms = distinct(4, () => Number(shuffle(digs).join('')));
        if (perms.length < 4) return gen();
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
    return gen;
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

  // Biểu đồ cột đơn giản
  // Biểu đồ cột: vạch chia tròn (1, 2, 5 × 10ⁿ) và ghi số liệu trên đầu mỗi cột để đọc chính xác
  function barSVG(labels, vals, unit) {
    const W = 64 * labels.length + 50, H = 190, base = 155, plot = 125, mx = Math.max(...vals, 1);
    const raw = mx / 5, p10 = Math.pow(10, Math.floor(Math.log10(raw))), step = [1, 2, 2.5, 5, 10].map((k) => k * p10).find((k) => k >= raw);
    const top = Math.ceil(mx / step) * step, n = Math.round(top / step);
    let s = `<line x1="40" y1="${base - plot - 8}" x2="40" y2="${base}" stroke="#23314d"/><line x1="40" y1="${base}" x2="${W}" y2="${base}" stroke="#23314d"/>`;
    for (let i = 0; i <= n; i++) { const v = step * i, y = base - plot * i / n; s += `<line x1="37" x2="${W}" y1="${y}" y2="${y}" stroke="#e3e7ef"/><text x="34" y="${y + 3.5}" font-size="9" text-anchor="end" fill="#5a6478">${PLT.U.fmt(v)}</text>`; }
    labels.forEach((l, i) => { const h = plot * vals[i] / top, x = 52 + i * 64; s += `<rect x="${x}" y="${base - h}" width="38" height="${h}" rx="2" fill="${['#4a7dff', '#ff7a3d', '#2bb3a3', '#a259ff', '#e5484d', '#ffc93c'][i % 6]}"/><text x="${x + 19}" y="${base - h - 4}" font-size="11" font-weight="700" text-anchor="middle" fill="#1d2a44">${PLT.U.fmt(vals[i])}</text><text x="${x + 19}" y="${base + 15}" font-size="10" text-anchor="middle">${l}</text>`; });
    return `<svg class="pic" viewBox="0 0 ${W + 10} ${H}" width="${Math.min(W + 10, 440)}">${s}${unit ? `<text x="44" y="12" font-size="9" fill="#5a6478">(${unit})</text>` : ''}</svg>`;
  }
  // Điền phân số / số có đáp án hiển thị đẹp
  const fillV = (q, val, show, exp, post, pre) => fill(q, [{ pre: pre || 'Trả lời:', ans: val, show, post: post || '' }], exp);
  const fillFrac = (q, a, b, exp, post) => fillV(q, a / b, PLT.U.fr(a, b), exp, post);
  PLT.M = { barSVG, fillV, fillFrac, big, cautao, randDigits, distinct, opName, soGen, sosanhGen, lamtronGen, datTinh, calcGen, bangGen, EMO };
})();

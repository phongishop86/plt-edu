/* Các mô phỏng tương tác dùng trong phần "Tương tác" của bài học.
   Mỗi widget: PLT.widgets[name] = { title, render(el, arg) } */
(function () {
  'use strict';
  const { fmt, docSo, roman, cap, frac, clockSVG, pieSVG, parseNum, r } = PLT.U;
  const W = (PLT.widgets = PLT.widgets || {});
  const h = (html) => { const d = document.createElement('div'); d.innerHTML = html; return d.firstElementChild; };
  const slider = (id, label, min, max, val, step) => `<label class="sl">${label} <b id="${id}v">${val}</b><input type="range" id="${id}" min="${min}" max="${max}" step="${step || 1}" value="${val}"></label>`;

  W.placevalue = {
    title: 'Cấu tạo số – các hàng',
    render(el, arg) {
      const max = Number(arg) || 9999, d = String(max).length;
      const names = ['Đơn vị', 'Chục', 'Trăm', 'Nghìn', 'Chục nghìn'].slice(0, d).reverse();
      const cols = ['#ff7a3d', '#4a7dff', '#2bb3a3', '#a259ff', '#e5484d'].slice(0, d).reverse();
      let n = Math.min(max, d === 3 ? 572 : d === 4 ? 3421 : 53460);
      el.innerHTML = `<div class="wbox"><div class="row"><input id="pvn" class="numin big" inputmode="numeric" value="${n}"> <span class="muted">Gõ một số (tối đa ${fmt(max)}) hoặc bấm nút</span></div>
        <div class="row btns" id="pvb"></div><div class="pv" id="pvg"></div><div class="say" id="pvs"></div></div>`;
      const steps = [1, 10, 100, 1000, 10000].slice(0, d);
      el.querySelector('#pvb').innerHTML = steps.map((s) => `<button class="chip" data-s="${s}">+${fmt(s)}</button><button class="chip" data-s="-${s}">−${fmt(s)}</button>`).join('');
      const draw = () => {
        const s = String(n).padStart(d, '0');
        el.querySelector('#pvg').innerHTML = names.map((nm, i) => `<div class="pvc"><div class="pvh" style="background:${cols[i]}">${nm}</div><div class="pvd">${s[i]}</div><div class="pvdots">${('<i style="background:' + cols[i] + '"></i>').repeat(Number(s[i]))}</div></div>`).join('');
        const parts = s.split('').map((c, i) => Number(c) * Math.pow(10, d - 1 - i)).filter((x) => x > 0);
        el.querySelector('#pvs').innerHTML = `<b>${fmt(n)}</b> = ${parts.map(fmt).join(' + ') || 0}<br>Đọc là: <i>${cap(docSo(n))}</i>`;
      };
      el.querySelector('#pvn').addEventListener('input', (e) => { const v = parseNum(e.target.value); if (!isNaN(v) && v >= 0 && v <= max) { n = v; draw(); } });
      el.querySelector('#pvb').addEventListener('click', (e) => { const s = e.target.dataset.s; if (!s) return; n = Math.max(0, Math.min(max, n + Number(s))); el.querySelector('#pvn').value = n; draw(); });
      draw();
    }
  };

  W.bangnhan = {
    title: 'Bảng nhân tương tác',
    render(el) {
      let html = '<div class="wbox"><p class="muted">Bấm vào một ô để xem phép nhân và phép chia tương ứng.</p><div class="tbl-wrap"><table class="bn"><tr><th>×</th>';
      for (let j = 1; j <= 10; j++) html += `<th>${j}</th>`;
      html += '</tr>';
      for (let i = 2; i <= 9; i++) { html += `<tr><th>${i}</th>`; for (let j = 1; j <= 10; j++) html += `<td data-i="${i}" data-j="${j}">${i * j}</td>`; html += '</tr>'; }
      html += '</table></div><div class="say" id="bns">Ví dụ: chọn ô hàng 7, cột 8.</div><div id="bnd"></div></div>';
      el.innerHTML = html;
      el.querySelector('table').addEventListener('click', (e) => {
        const td = e.target.closest('td'); if (!td) return; const i = +td.dataset.i, j = +td.dataset.j;
        el.querySelectorAll('td').forEach((c) => c.classList.toggle('hl', +c.dataset.i <= i && +c.dataset.j <= j));
        td.classList.add('pick');
        el.querySelector('#bns').innerHTML = `<b>${i} × ${j} = ${i * j}</b> &nbsp;→&nbsp; ${i * j} : ${i} = ${j} &nbsp;và&nbsp; ${i * j} : ${j} = ${i}`;
        el.querySelector('#bnd').innerHTML = `<div class="dots" style="grid-template-columns:repeat(${i},18px)">${'<i></i>'.repeat(i * j)}</div><p class="muted">${j} hàng, mỗi hàng ${i} chấm: ${i} được lấy ${j} lần.</p>`;
      });
    }
  };

  W.phanso = {
    title: 'Một phần mấy',
    render(el) {
      el.innerHTML = `<div class="wbox">${slider('psn', 'Chia hình tròn thành', 2, 9, 4)} phần bằng nhau
        ${slider('psm', 'Số cần chia', 2, 9, 3)} (số = n × giá trị này)<div class="row center" id="psp"></div><div class="say" id="pss"></div></div>`;
      const draw = () => {
        const n = +el.querySelector('#psn').value, k = +el.querySelector('#psm').value; el.querySelector('#psnv').textContent = n; el.querySelector('#psmv').textContent = k;
        el.querySelector('#psp').innerHTML = pieSVG(n, 1, 150);
        el.querySelector('#pss').innerHTML = `Phần tô màu là ${frac(1, n)} hình tròn.<br>${frac(1, n)} của <b>${n * k}</b> là <b>${n * k} : ${n} = ${k}</b>`;
      };
      el.querySelectorAll('input').forEach((i) => i.addEventListener('input', draw)); draw();
    }
  };

  W.hinhtron = {
    title: 'Hình tròn: tâm, bán kính, đường kính',
    render(el) {
      el.innerHTML = `<div class="wbox">${slider('htr', 'Bán kính (cm)', 1, 8, 4)}<div class="row center" id="htp"></div><div class="say" id="hts"></div></div>`;
      const draw = () => {
        const rr = +el.querySelector('#htr').value, R = rr * 11; el.querySelector('#htrv').textContent = rr;
        el.querySelector('#htp').innerHTML = `<svg viewBox="0 0 200 200" width="220" height="220"><circle cx="100" cy="100" r="${R}" fill="#fff6dc" stroke="#23314d" stroke-width="2"/><line x1="${100 - R}" y1="100" x2="${100 + R}" y2="100" stroke="#4a7dff" stroke-width="2" stroke-dasharray="5 4"/><line x1="100" y1="100" x2="${100 + R * 0.6}" y2="${100 - R * 0.8}" stroke="#e5484d" stroke-width="3"/><circle cx="100" cy="100" r="3.5"/><text x="88" y="116" font-size="13">O</text><text x="${104 + R * 0.6}" y="${96 - R * 0.8}" font-size="12" fill="#e5484d">A</text></svg>`;
        el.querySelector('#hts').innerHTML = `<span style="color:#e5484d">Bán kính OA = ${rr} cm</span> · <span style="color:#4a7dff">Đường kính = ${rr} × 2 = ${rr * 2} cm</span>`;
      };
      el.querySelector('input').addEventListener('input', draw); draw();
    }
  };

  W.chiakeo = {
    title: 'Chia kẹo – chia hết và chia có dư',
    render(el) {
      el.innerHTML = `<div class="wbox">${slider('cka', 'Số kẹo', 1, 60, 23)}${slider('ckb', 'Số bạn', 2, 9, 5)}<div id="ckp" class="ck"></div><div class="say" id="cks"></div></div>`;
      const draw = () => {
        const a = +el.querySelector('#cka').value, b = +el.querySelector('#ckb').value, q = Math.floor(a / b), m = a % b;
        el.querySelector('#ckav').textContent = a; el.querySelector('#ckbv').textContent = b;
        let s = ''; for (let i = 0; i < b; i++) s += `<div class="ckbox"><span>🧒</span><div>${'🍬'.repeat(q)}</div></div>`;
        if (m) s += `<div class="ckbox left"><span>Còn thừa</span><div>${'🍬'.repeat(m)}</div></div>`;
        el.querySelector('#ckp').innerHTML = s;
        el.querySelector('#cks').innerHTML = m ? `<b>${a} : ${b} = ${q} (dư ${m})</b> — số dư ${m} bé hơn số chia ${b}.` : `<b>${a} : ${b} = ${q}</b> — phép chia hết (dư 0).`;
      };
      el.querySelectorAll('input').forEach((i) => i.addEventListener('input', draw)); draw();
    }
  };

  W.thuoc = {
    title: 'Thước đo mi-li-mét',
    render(el) {
      el.innerHTML = `<div class="wbox">${slider('thm', 'Độ dài (mm)', 1, 100, 47)}<div id="thp"></div><div class="say" id="ths"></div></div>`;
      const draw = () => { const mm = +el.querySelector('#thm').value; el.querySelector('#thmv').textContent = mm; el.querySelector('#thp').innerHTML = PLT.U.rulerSVG(mm); el.querySelector('#ths').innerHTML = `${mm} mm = <b>${Math.floor(mm / 10)} cm ${mm % 10} mm</b> (1 cm = 10 mm)`; };
      el.querySelector('input').addEventListener('input', draw); draw();
    }
  };

  /* Biểu thức: tính từng bước theo đúng thứ tự */
  function evalSteps(src) {
    let s = src.replace(/[xX*]/g, '×').replace(/\//g, ':').replace(/[−–]/g, '-');
    let tk = s.match(/\d+|[+\-×:()]/g); if (!tk || tk.join('') !== s.replace(/\s+/g, '')) throw new Error('Biểu thức chỉ gồm số, + − × : và ngoặc ( ).');
    tk = tk.map((t) => (/\d/.test(t) ? Number(t) : t));
    const show = (a) => a.map((t) => (typeof t === 'number' ? fmt(t) : t === '-' ? '−' : t)).join(' ').replace(/\( /g, '(').replace(/ \)/g, ')');
    const steps = [show(tk)];
    const once = (a) => { // một phép tính trong dãy không ngoặc
      let i = a.findIndex((t) => t === '×' || t === ':'); if (i < 0) i = a.findIndex((t) => t === '+' || t === '-');
      if (i < 1) throw new Error('Biểu thức chưa đúng.');
      const x = a[i - 1], y = a[i + 1], op = a[i]; if (typeof x !== 'number' || typeof y !== 'number') throw new Error('Biểu thức chưa đúng.');
      let v; if (op === '+') v = x + y; else if (op === '-') { v = x - y; if (v < 0) throw new Error('Lớp 3 chưa học số âm – kiểm tra lại phép trừ.'); } else if (op === '×') v = x * y; else { if (y === 0 || x % y) throw new Error(`${x} : ${y} không chia hết.`); v = x / y; }
      a.splice(i - 1, 3, v);
    };
    for (let g = 0; g < 40 && tk.length > 1; g++) {
      const L = tk.lastIndexOf('(');
      if (L >= 0) { const R = tk.indexOf(')', L); if (R < 0) throw new Error('Thiếu dấu ngoặc đóng.'); const inner = tk.slice(L + 1, R); if (inner.length === 1) { tk.splice(L, R - L + 1, inner[0]); continue; } once(inner); tk.splice(L + 1, R - L - 1, ...inner); if (inner.length === 1) tk.splice(L, 3, inner[0]); }
      else { if (tk.includes(')')) throw new Error('Thừa dấu ngoặc.'); once(tk); }
      steps.push(show(tk));
    }
    return steps;
  }
  W.bieuthuc = {
    title: 'Máy tính biểu thức từng bước',
    render(el) {
      el.innerHTML = `<div class="wbox"><div class="row"><input id="btx" class="numin wide" value="(45 + 15) : 6 × 3"><button class="btn" id="btg">Tính từng bước</button></div><p class="muted">Dùng × (hoặc x) và : . Thử: 120 − 8 × 5, 72 : (2 + 7)</p><div class="say" id="bts"></div></div>`;
      const go = () => { try { const st = evalSteps(el.querySelector('#btx').value); el.querySelector('#bts').innerHTML = st.map((x, i) => `<div class="step"><span>${i === 0 ? '' : '='}</span> ${x}</div>`).join(''); } catch (e) { el.querySelector('#bts').innerHTML = `<span class="bad">${e.message}</span>`; } };
      el.querySelector('#btg').addEventListener('click', go); el.querySelector('#btx').addEventListener('keydown', (e) => { if (e.key === 'Enter') go(); }); go();
    }
  };
  W._evalSteps = evalSteps;

  W.lama = {
    title: 'Chữ số La Mã',
    render(el) {
      el.innerHTML = `<div class="wbox">${slider('lmn', 'Số', 1, 20, 9)}<div class="roman" id="lmr"></div><div class="say" id="lms"></div></div>`;
      const draw = () => {
        const n = +el.querySelector('#lmn').value, s = roman(n); el.querySelector('#lmnv').textContent = n; el.querySelector('#lmr').textContent = s;
        const val = { I: 1, V: 5, X: 10 }; const parts = s.split('').map((c, i) => (val[c] < (val[s[i + 1]] || 0) ? `−${val[c]}` : `+${val[c]}`));
        el.querySelector('#lms').innerHTML = `${s} = ${parts.join(' ').replace(/^\+/, '')} = <b>${n}</b>`;
      };
      el.querySelector('input').addEventListener('input', draw); draw();
    }
  };

  W.luoi = {
    title: 'Chu vi và diện tích',
    render(el) {
      el.innerHTML = `<div class="wbox">${slider('lgd', 'Chiều dài (cm)', 1, 12, 6)}${slider('lgr', 'Chiều rộng (cm)', 1, 8, 4)}<div class="row center" id="lgp"></div><div class="say" id="lgs"></div></div>`;
      const draw = () => {
        const d = +el.querySelector('#lgd').value, w = +el.querySelector('#lgr').value; el.querySelector('#lgdv').textContent = d; el.querySelector('#lgrv').textContent = w;
        el.querySelector('#lgp').innerHTML = PLT.U.gridSVG(d, w, 26);
        el.querySelector('#lgs').innerHTML = (d === w ? '<b>Hình vuông</b> cạnh ' + d + ' cm<br>' : '') + `Chu vi = (${d} + ${w}) × 2 = <b>${(d + w) * 2} cm</b><br>Diện tích = ${d} × ${w} = <b>${d * w} cm²</b> (đếm được ${d * w} ô vuông 1 cm²)`;
      };
      el.querySelectorAll('input').forEach((i) => i.addEventListener('input', draw)); draw();
    }
  };

  W.dongho = {
    title: 'Xem đồng hồ',
    render(el) {
      el.innerHTML = `<div class="wbox">${slider('dhh', 'Giờ', 1, 12, 8)}${slider('dhm', 'Phút', 0, 55, 45, 5)}<div class="row center" id="dhp"></div><div class="say" id="dhs"></div></div>`;
      const draw = () => {
        const hh = +el.querySelector('#dhh').value, mm = +el.querySelector('#dhm').value; el.querySelector('#dhhv').textContent = hh; el.querySelector('#dhmv').textContent = mm;
        el.querySelector('#dhp').innerHTML = clockSVG(hh, mm, 200);
        let s = `<b>${hh} giờ${mm ? ' ' + mm + ' phút' : ''}</b>`; if (mm === 30) s += ` (hay ${hh} giờ rưỡi)`; if (mm > 30) s += ` hay <b>${hh % 12 + 1} giờ kém ${60 - mm} phút</b>`;
        el.querySelector('#dhs').innerHTML = s + `<br><span class="muted">Kim dài chỉ số ${mm / 5 || 12} → ${mm} phút.</span>`;
      };
      el.querySelectorAll('input').forEach((i) => i.addEventListener('input', draw)); draw();
    }
  };

  /* Đặt tính cộng, trừ, nhân (với số có một chữ số) – hiện từng bước */
  function datTinhSteps(a, op, b) {
    const da = String(a).split('').reverse().map(Number), db = String(b).split('').reverse().map(Number), res = [], st = [];
    if (op === '+') { let c = 0; for (let i = 0; i < Math.max(da.length, db.length); i++) { const x = da[i] || 0, y = db[i] || 0, s = x + y + c; res.push(s % 10); st.push(`${x} cộng ${y}${c ? ' thêm 1' : ''} bằng ${s}, viết ${s % 10}${s >= 10 ? ', nhớ 1' : ''}.`); c = s >= 10 ? 1 : 0; } if (c) { res.push(1); st.push('Hạ 1 (số nhớ) xuống.'); } }
    else if (op === '-') { let c = 0; for (let i = 0; i < da.length; i++) { const x = da[i], y0 = db[i] || 0, y = y0 + c; let txt = c && i < db.length ? `${y0} thêm 1 bằng ${y}; ` : (c ? `nhớ 1; ` : ''); if (x >= y) { res.push(x - y); st.push(txt + `${x} trừ ${y} bằng ${x - y}, viết ${x - y}.`); c = 0; } else { res.push(x + 10 - y); st.push(txt + `${x} không trừ được ${y}, lấy 1${x} trừ ${y} bằng ${x + 10 - y}, viết ${x + 10 - y}, nhớ 1.`); c = 1; } } }
    else { let c = 0; for (let i = 0; i < da.length; i++) { const p = da[i] * b + c, last = i === da.length - 1, head = `${b} nhân ${da[i]} bằng ${da[i] * b}${c ? `, thêm ${c} bằng ${p}` : ''}`; if (last) { String(p).split('').reverse().forEach((x) => res.push(+x)); st.push(head + `, viết ${p}.`); } else { res.push(p % 10); st.push(head + `, viết ${p % 10}${p >= 10 ? `, nhớ ${Math.floor(p / 10)}` : ''}.`); } c = Math.floor(p / 10); } }
    while (res.length > 1 && res[res.length - 1] === 0) res.pop();
    return { res: res.reverse(), st };
  }
  W.dattinh = {
    title: 'Đặt tính rồi tính (từng bước)',
    render(el) {
      el.innerHTML = `<div class="wbox"><div class="row"><input id="dta" class="numin" inputmode="numeric" value="4685"><select id="dto" class="sel"><option value="+">+</option><option value="-">−</option><option value="x">×</option></select><input id="dtb" class="numin" inputmode="numeric" value="2347"><button class="btn" id="dtg">Bắt đầu</button><button class="btn ghost" id="dtn">Bước tiếp ▶</button></div><p class="muted">Phép nhân: số thứ hai có một chữ số. Phép trừ: số thứ nhất lớn hơn.</p><div id="dtp" class="dtgrid"></div><ol class="say" id="dts"></ol></div>`;
      let S = null, k = 0;
      const draw = () => {
        if (!S) return; const w = Math.max(String(S.a).length, String(S.b).length, S.res.length) + 1;
        const row = (txt, cls) => `<div class="dtrow ${cls || ''}">${txt.padStart(w, ' ').split('').map((c) => `<span>${c === ' ' ? '' : c}</span>`).join('')}</div>`;
        const shown = S.res.map((d, i) => (i >= S.res.length - k ? d : ' ')).join('');
        el.querySelector('#dtp').innerHTML = row(String(S.a)) + row((S.op === 'x' ? '×' : S.op === '-' ? '−' : '+') + String(S.b).padStart(w - 1, ' ')) + '<div class="dtline"></div>' + row(shown, 'res');
        el.querySelector('#dts').innerHTML = (k === 0 ? '<li class="muted">Bấm “Bước tiếp ▶” để tính lần lượt từng hàng, bắt đầu từ hàng đơn vị.</li>' : '') + S.st.slice(0, k).map((x) => `<li>${x}</li>`).join('') + (k >= S.st.length ? `<li><b>Vậy ${fmt(S.a)} ${S.op === 'x' ? '×' : S.op === '-' ? '−' : '+'} ${fmt(S.b)} = ${fmt(Number(S.res.join('')))}</b></li>` : '');
      };
      const start = () => {
        const a = parseNum(el.querySelector('#dta').value), b = parseNum(el.querySelector('#dtb').value), op = el.querySelector('#dto').value;
        if (isNaN(a) || isNaN(b) || a > 99999 || b > 99999) { el.querySelector('#dts').innerHTML = '<li class="bad">Nhập hai số đến 99 999.</li>'; return; }
        if (op === '-' && b > a) { el.querySelector('#dts').innerHTML = '<li class="bad">Số bị trừ phải lớn hơn số trừ.</li>'; return; }
        if (op === 'x' && b > 9) { el.querySelector('#dts').innerHTML = '<li class="bad">Lớp 3: nhân với số có một chữ số (2 – 9).</li>'; return; }
        const t = datTinhSteps(a, op, b); S = { a, b, op, res: t.res, st: t.st }; k = 0; draw();
      };
      el.querySelector('#dtg').addEventListener('click', start);
      el.querySelector('#dtn').addEventListener('click', () => { if (!S) start(); else if (k < S.st.length) { k++; draw(); } });
      el.querySelector('#dto').addEventListener('change', (e) => { if (e.target.value === 'x') el.querySelector('#dtb').value = '3'; });
      start();
    }
  };
  W._datTinhSteps = datTinhSteps;

  W.bocbi = {
    title: 'Bốc bi – khả năng xảy ra',
    render(el) {
      const cols = [['đỏ', '#e5484d'], ['xanh', '#4a7dff'], ['vàng', '#ffc93c']];
      el.innerHTML = `<div class="wbox">${cols.map(([c], i) => slider('bb' + i, 'Bi ' + c, 0, 6, [3, 2, 0][i])).join('')}<div class="row center" id="bbp"></div><div class="row center"><button class="btn" id="bbg">Bốc 1 viên</button><button class="btn ghost" id="bbr">Làm lại</button></div><div class="say" id="bbs"></div></div>`;
      let tally = [0, 0, 0], last = -1;
      const draw = () => {
        const n = cols.map((_, i) => +el.querySelector('#bb' + i).value); cols.forEach((_, i) => (el.querySelector('#bb' + i + 'v').textContent = n[i]));
        const tot = n.reduce((a, b) => a + b, 0);
        el.querySelector('#bbp').innerHTML = `<div class="bag">${cols.map(([, col], i) => `<i style="background:${col}"></i>`.repeat(n[i])).join('') || '<span class="muted">Hộp trống</span>'}</div>`;
        const kn = (i) => (tot === 0 ? '—' : n[i] === tot ? '<b class="ok">chắc chắn</b>' : n[i] === 0 ? '<b class="bad">không thể</b>' : '<b>có thể</b>');
        el.querySelector('#bbs').innerHTML = (last >= 0 ? `Vừa bốc được: <b>bi ${cols[last][0]}</b><br>` : '') + cols.map(([c], i) => `Bốc được bi ${c}: ${kn(i)} · đã bốc ${tally[i]} lần`).join('<br>');
        return n;
      };
      el.querySelectorAll('input').forEach((i) => i.addEventListener('input', () => { tally = [0, 0, 0]; last = -1; draw(); }));
      el.querySelector('#bbg').addEventListener('click', () => { const n = draw(), tot = n.reduce((a, b) => a + b, 0); if (!tot) return; let x = r(1, tot), i = 0; while (x > n[i]) { x -= n[i]; i++; } tally[i]++; last = i; draw(); });
      el.querySelector('#bbr').addEventListener('click', () => { tally = [0, 0, 0]; last = -1; draw(); });
      draw();
    }
  };
})();

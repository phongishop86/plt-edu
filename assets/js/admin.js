/* PLT-Edu · Trang quản trị (#/quan-tri) — chỉ tài khoản quản trị xem được.
   Quyền thật nằm ở Firestore Rules (README): người khác mở trang này cũng không đọc được dữ liệu. */
(function () {
  'use strict';
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const ms = (t) => (t && t.toMillis ? t.toMillis() : +t || 0);
  const ago = (t) => { const s = Math.max(0, (Date.now() - ms(t)) / 1000); return s < 60 ? 'vừa xong' : s < 3600 ? Math.round(s / 60) + ' phút trước' : s < 86400 ? Math.round(s / 3600) + ' giờ trước' : Math.round(s / 86400) + ' ngày trước'; };
  const dt = (t) => (ms(t) ? new Date(ms(t)).toLocaleDateString('vi-VN') : '—');
  const num = (n) => (n || 0).toLocaleString('vi-VN');
  let tick = 0, mem = [];
  const VN = { '44': 'An Giang', '43': 'Bà Rịa - Vũng Tàu', '54': 'Bắc Giang', '53': 'Bắc Kạn', '55': 'Bạc Liêu', '56': 'Bắc Ninh', '50': 'Bến Tre', '31': 'Bình Định', '57': 'Bình Dương', '58': 'Bình Phước', '40': 'Bình Thuận', '59': 'Cà Mau', 'CT': 'Cần Thơ', '04': 'Cao Bằng', 'DN': 'Đà Nẵng', '33': 'Đắk Lắk', '72': 'Đắk Nông', '71': 'Điện Biên', '39': 'Đồng Nai', '45': 'Đồng Tháp', '30': 'Gia Lai', '03': 'Hà Giang', '63': 'Hà Nam', 'HN': 'Hà Nội', '23': 'Hà Tĩnh', '61': 'Hải Dương', 'HP': 'Hải Phòng', '73': 'Hậu Giang', '14': 'Hòa Bình', 'SG': 'TP. Hồ Chí Minh', '66': 'Hưng Yên', '34': 'Khánh Hòa', '47': 'Kiên Giang', '28': 'Kon Tum', '01': 'Lai Châu', '35': 'Lâm Đồng', '09': 'Lạng Sơn', '02': 'Lào Cai', '41': 'Long An', '67': 'Nam Định', '22': 'Nghệ An', '18': 'Ninh Bình', '36': 'Ninh Thuận', '68': 'Phú Thọ', '32': 'Phú Yên', '24': 'Quảng Bình', '27': 'Quảng Nam', '29': 'Quảng Ngãi', '13': 'Quảng Ninh', '25': 'Quảng Trị', '52': 'Sóc Trăng', '05': 'Sơn La', '37': 'Tây Ninh', '20': 'Thái Bình', '69': 'Thái Nguyên', '21': 'Thanh Hóa', '26': 'Thừa Thiên Huế', '46': 'Tiền Giang', '51': 'Trà Vinh', '07': 'Tuyên Quang', '49': 'Vĩnh Long', '70': 'Vĩnh Phúc', '06': 'Yên Bái' };
  const geoName = (c) => (c === 'XX' ? 'Không rõ' : c === 'VN' ? 'Việt Nam (không rõ tỉnh)' : c.indexOf('VN_') === 0 ? VN[c.slice(3)] || c : '🌐 Nước ngoài: ' + c);

  const css = `.adm{max-width:1200px;margin:0 auto}.adm h1{font-size:1.35rem;margin:0 0 2px}.adm .sub{color:#55607A;font-size:.85rem;margin:0 0 12px}
  .adm-k{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;margin-bottom:12px}
  .adm-k div{background:#fff;border:1px solid #EFE7D8;border-radius:14px;padding:10px 12px}.adm-k small{display:block;color:#55607A;font-size:.72rem;font-weight:700;text-transform:uppercase}
  .adm-k b{font-size:1.5rem;color:#1B2A4A}.adm-k em{font-style:normal;font-size:.72rem;color:#8a93a6;display:block}.adm-k .live b{color:#1f9d63}
  .adm-g{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);gap:12px;margin-bottom:12px}@media(max-width:900px){.adm-g{grid-template-columns:1fr}}
  .adm-c{background:#FFFDF8;border:1px solid #EFE7D8;border-radius:16px;padding:12px 14px}.adm-c h2{font-size:1rem;margin:0 0 8px;display:flex;gap:8px;align-items:center}.adm-c h2 span{margin-left:auto;font-size:.75rem;color:#8a93a6;font-weight:600}
  .adm-ch{display:flex;align-items:flex-end;gap:3px;height:150px;padding-top:14px}.adm-ch div{flex:1;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;height:100%;position:relative}
  .adm-ch i{display:block;width:100%;background:#F4A261;border-radius:4px 4px 0 0;min-height:2px}.adm-ch i.u{background:#1B2A4A;position:absolute;bottom:0;width:45%;opacity:.85}
  .adm-ch small{font-size:.55rem;color:#8a93a6;margin-top:3px;height:10px}.adm-ch div:hover::after{content:attr(data-t);position:absolute;top:-6px;background:#1B2A4A;color:#fff;font-size:.7rem;padding:2px 6px;border-radius:6px;white-space:nowrap;z-index:2}
  .adm-lg{display:flex;gap:12px;font-size:.75rem;color:#55607A;margin-top:6px}.adm-lg i{display:inline-block;width:10px;height:10px;border-radius:3px;margin-right:4px;vertical-align:-1px}
  .adm-on{max-height:260px;overflow:auto}.adm-on div{display:flex;gap:8px;align-items:center;padding:5px 0;border-bottom:1px dashed #EFE7D8;font-size:.82rem}.adm-on div b{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .adm-on small{color:#8a93a6;font-size:.7rem}.adm-tag{font-size:.65rem;font-weight:800;border-radius:6px;padding:1px 6px;background:#E3ECFF;color:#3B6FE0}.adm-tag.ai{background:#E7F6E9;color:#1f9d63}.adm-tag.g{background:#F3EFE6;color:#8a93a6}
  .adm-t{width:100%;border-collapse:collapse;font-size:.82rem}.adm-t th{text-align:left;font-size:.7rem;color:#55607A;text-transform:uppercase;padding:6px;border-bottom:2px solid #EFE7D8}.adm-t td{padding:6px;border-bottom:1px solid #F3EFE6}
  .adm-t tr:hover td{background:#FFF8EE}.adm-tw{max-height:420px;overflow:auto}.adm-s{display:flex;gap:8px;margin-bottom:8px}.adm-s input{flex:1;font:inherit;padding:6px 10px;border:2px solid #E3DED1;border-radius:10px}
  .adm .btn.sm{padding:5px 12px;font-size:.82rem}.adm-gl div{display:grid;grid-template-columns:170px 1fr 90px;gap:8px;align-items:center;font-size:.82rem;padding:3px 0}.adm-gl b{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.adm-gl i{height:10px;background:#F3EFE6;border-radius:99px;overflow:hidden}.adm-gl em{display:block;height:100%;background:#D9661F;border-radius:99px}.adm-gl span{text-align:right;color:#55607A;font-size:.75rem}
  .adm-c select{font:inherit;font-size:.78rem;border:1px solid #E3DED1;border-radius:8px;padding:2px 6px}
  .adm-er{background:#FFF1F1;border:1px solid #f3c6ca;color:#9b2330;border-radius:12px;padding:10px 12px;font-size:.85rem;margin-bottom:12px}`;

  function waitUser(ms0) {
    return new Promise((ok) => {
      const t0 = Date.now();
      (function chk() { const A = window.PLT_ACC; if (A && A.db && A.db() && A.user && (A.user() || Date.now() - t0 > ms0)) return ok(A.user()); if (Date.now() - t0 > ms0) return ok(null); setTimeout(chk, 300); })();
    });
  }

  async function render(app) {
    clearInterval(tick);
    if (!document.getElementById('adm-css')) { const st = document.createElement('style'); st.id = 'adm-css'; st.textContent = css; document.head.appendChild(st); }
    app.innerHTML = '<div class="adm"><p class="sub">⏳ Đang kiểm tra tài khoản…</p></div>';
    const u = await waitUser(8000), A = window.PLT_ACC;
    if (!u || !A.isAdmin()) {
      app.innerHTML = `<div class="adm"><h1>🔒 Trang quản trị</h1><p class="sub">Trang này chỉ dành cho quản trị viên PLT-Edu.</p>${u ? '' : '<button class="btn" id="adm-in">👤 Đăng nhập</button>'}</div>`;
      const b = document.getElementById('adm-in'); if (b) b.onclick = () => A && A.open();
      return;
    }
    const db = A.db(), F = A.fb().firestore, seq = Date.now(); render.seq = seq;
    app.innerHTML = `<div class="adm"><div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap"><div><h1>📊 Quản trị PLT-Edu</h1><p class="sub">Số liệu tính từ ngày bật thống kê · giờ Việt Nam</p></div><button class="btn sm" id="adm-rf" style="margin-left:auto">🔄 Làm mới</button></div><div id="adm-b"><p class="sub">⏳ Đang tải số liệu…</p></div></div>`;
    document.getElementById('adm-rf').onclick = () => load(db, F, seq);
    await load(db, F, seq);
    tick = setInterval(() => { if (render.seq !== seq || !document.getElementById('adm-b')) return clearInterval(tick); online(db, F); }, 60000);
  }

  async function load(db, F, seq) {
    const box = document.getElementById('adm-b'); if (!box) return;
    const days = []; for (let i = 29; i >= 0; i--) days.push(window.PLT_ACC.dayKey(Date.now() - i * 86400000));
    const errs = [];
    const [st, pr, mb, gs] = await Promise.all([
      db.collection('stats').where(F.FieldPath.documentId(), '>=', 'd-' + days[0]).get().catch((e) => { errs.push('stats: ' + e.code); return null; }),
      db.collection('presence').where('at', '>', F.Timestamp.fromMillis(Date.now() - 86400000)).get().catch((e) => { errs.push('presence: ' + e.code); return null; }),
      db.collection('members').get().catch((e) => { errs.push('members: ' + e.code); return null; }),
      db.collection('geo').where(F.FieldPath.documentId(), '>=', 'd-' + days[0]).get().catch((e) => { errs.push('geo: ' + e.code); return null; })
    ]);
    if (render.seq !== seq) return;
    const S = {}; if (st) st.forEach((d) => { S[d.id.slice(2)] = d.data(); });
    const P = []; if (pr) pr.forEach((d) => P.push(Object.assign({ id: d.id }, d.data())));
    mem = []; if (mb) mb.forEach((d) => mem.push(Object.assign({ id: d.id }, d.data())));
    mem.sort((a, b) => ms(b.last) - ms(a.last));
    const G = {}; if (gs) gs.forEach((d) => { G[d.id.slice(2)] = d.data(); });
    geoState = { G, days };
    const today = S[days[29]] || {}, sum = (k, n) => days.slice(30 - n).reduce((a, d) => a + ((S[d] || {})[k] || 0), 0);
    const now = Date.now(), on5 = P.filter((p) => now - ms(p.at) < 5 * 60000), d1 = 86400000;
    const newW = mem.filter((m) => now - ms(m.first) < 7 * d1).length, actW = mem.filter((m) => now - ms(m.last) < 7 * d1).length, actD = P.length;
    const max = Math.max(1, ...days.map((d) => (S[d] || {}).v || 0));
    box.innerHTML = `${errs.length ? `<div class="adm-er">⚠️ Chưa đọc được một phần dữ liệu (${esc(errs.join(', '))}). Đại ca kiểm tra đã dán <b>Firestore Rules</b> mới trong README chưa nhé.</div>` : ''}
      <div class="adm-k">
        <div class="live"><small>🟢 Đang dùng</small><b id="adm-live">${on5.length}</b><em>trong 5 phút qua</em></div>
        <div><small>Lượt truy cập hôm nay</small><b>${num(today.v)}</b><em>PLT-Edu ${num(today.edu)} · AI Edu ${num(today.ai)}</em></div>
        <div><small>Khách hôm nay</small><b>${num(today.u)}</b><em>${num(actD)} người hoạt động 24 giờ</em></div>
        <div><small>Lượt truy cập 7 ngày</small><b>${num(sum('v', 7))}</b><em>30 ngày: ${num(sum('v', 30))}</em></div>
        <div><small>Tổng thành viên</small><b>${num(mem.length)}</b><em>+${newW} mới trong 7 ngày</em></div>
        <div><small>Thành viên hoạt động</small><b>${num(actW)}</b><em>trong 7 ngày qua</em></div>
      </div>
      <div class="adm-g">
        <div class="adm-c"><h2>📈 Truy cập 30 ngày <span>Rê chuột vào cột để xem số</span></h2>
          <div class="adm-ch">${days.map((d) => { const x = S[d] || {}; return `<div data-t="${d.slice(8)}/${d.slice(5, 7)}: ${x.v || 0} lượt · ${x.u || 0} khách"><i style="height:${((x.v || 0) / max) * 100}%"></i><i class="u" style="height:${((x.u || 0) / max) * 100}%"></i><small>${+d.slice(8) % 5 === 0 || d === days[29] ? d.slice(8) : ''}</small></div>`; }).join('')}</div>
          <div class="adm-lg"><span><i style="background:#F4A261"></i>Lượt truy cập</span><span><i style="background:#1B2A4A"></i>Khách (trình duyệt khác nhau)</span></div></div>
        <div class="adm-c"><h2>🟢 Đang dùng <span id="adm-oc">${on5.length} người</span></h2><div class="adm-on" id="adm-on">${onList(on5)}</div></div>
      </div>
      <div class="adm-c" style="margin-bottom:12px"><h2>📍 Khách theo tỉnh/thành <span><select id="adm-gp"><option value="1">Hôm nay</option><option value="7" selected>7 ngày</option><option value="30">30 ngày</option></select></span></h2><div id="adm-geo"></div><p class="sub" style="margin:6px 0 0;font-size:.72rem">Đếm mỗi trình duyệt 1 lần/ngày · vị trí ước tính theo mạng (4G có thể ra tỉnh khác) · không lưu IP · tên tỉnh theo danh mục 63 tỉnh cũ</p></div>
      <div class="adm-c"><h2>👥 Thành viên đã đăng nhập <span>${num(mem.length)} tài khoản</span></h2>
        <div class="adm-s"><input id="adm-q" placeholder="Tìm theo tên hoặc email…"></div>
        <div class="adm-tw"><table class="adm-t"><thead><tr><th>#</th><th>Tên</th><th>Email</th><th>Tham gia</th><th>Lần cuối</th><th>Số phiên</th><th>Nơi dùng</th></tr></thead><tbody id="adm-tb">${rows(mem)}</tbody></table></div></div>`;
    const gp = document.getElementById('adm-gp'); gp.onchange = () => geoDraw(+gp.value); geoDraw(7);
    const q = document.getElementById('adm-q');
    q.oninput = () => { const k = q.value.trim().toLowerCase(); document.getElementById('adm-tb').innerHTML = rows(k ? mem.filter((m) => (String(m.name) + ' ' + String(m.email)).toLowerCase().includes(k)) : mem); };
  }

  let geoState = { G: {}, days: [] };
  function geoDraw(n) {
    const el = document.getElementById('adm-geo'); if (!el) return;
    const T = {}; geoState.days.slice(-n).forEach((d) => { const x = geoState.G[d] || {}; Object.keys(x).forEach((k) => { T[k] = (T[k] || 0) + (x[k] || 0); }); });
    const L = Object.keys(T).map((k) => [geoName(k), T[k]]).sort((a, b) => b[1] - a[1]), tot = L.reduce((a, x) => a + x[1], 0), mx = L.length ? L[0][1] : 1;
    el.innerHTML = L.length ? '<div class="adm-gl">' + L.slice(0, 20).map(([t, v]) => `<div><b>${esc(t)}</b><i><em style="width:${(v / mx) * 100}%"></em></i><span>${num(v)} · ${Math.round((v / tot) * 100)}%</span></div>`).join('') + '</div>' + (L.length > 20 ? `<p class="sub" style="font-size:.75rem">… và ${L.length - 20} nơi khác</p>` : '') : '<p class="sub">Chưa có số liệu.</p>';
  }
  function onList(list) {
    if (!list.length) return '<p class="sub">Chưa có ai đang dùng.</p>';
    return list.sort((a, b) => ms(b.at) - ms(a.at)).map((p) => `<div><span class="adm-tag ${p.site === 'ai' ? 'ai' : ''}">${p.site === 'ai' ? 'AI Edu' : 'PLT-Edu'}</span><b title="${esc(p.mail || '')}">${p.in ? esc(p.name || 'Thành viên') + (p.mail ? ` <small>${esc(p.mail)}</small>` : '') : '<span class="adm-tag g">Khách</span>'}</b>${p.geo ? `<small>📍${esc(p.geo)}</small>` : ''}<small title="${esc(p.page)}">${esc(String(p.page || '').slice(0, 22))}</small><small>${ago(p.at)}</small></div>`).join('');
  }
  async function online(db, F) {
    const s = await db.collection('presence').where('at', '>', F.Timestamp.fromMillis(Date.now() - 5 * 60000)).get().catch(() => null);
    if (!s) return; const L = []; s.forEach((d) => L.push(d.data()));
    const a = document.getElementById('adm-on'), b = document.getElementById('adm-live'), c = document.getElementById('adm-oc');
    if (a) a.innerHTML = onList(L); if (b) b.textContent = L.length; if (c) c.textContent = L.length + ' người';
  }
  function rows(list) {
    if (!list.length) return '<tr><td colspan="7" class="sub">Chưa có thành viên nào (danh sách tự điền khi thành viên đăng nhập).</td></tr>';
    return list.map((m, i) => `<tr><td>${i + 1}</td><td><b>${esc(m.name || '—')}</b></td><td>${esc(m.email || '')}</td><td>${dt(m.first)}</td><td title="${ms(m.last) ? new Date(ms(m.last)).toLocaleString('vi-VN') : ''}">${ms(m.last) ? ago(m.last) : '—'}</td><td>${num(m.n)}</td><td><span class="adm-tag ${m.site === 'ai' ? 'ai' : ''}">${m.site === 'ai' ? 'AI Edu' : 'PLT-Edu'}</span></td></tr>`).join('');
  }

  window.PLT = window.PLT || {}; PLT.ADMIN = { render };
})();

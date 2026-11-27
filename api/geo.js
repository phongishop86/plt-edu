// PLT-Edu · Trả về tỉnh/thành của người truy cập (Vercel tự gắn qua header), KHÔNG lưu IP.
const VN = { '44': 'An Giang', '43': 'Bà Rịa - Vũng Tàu', '54': 'Bắc Giang', '53': 'Bắc Kạn', '55': 'Bạc Liêu', '56': 'Bắc Ninh', '50': 'Bến Tre', '31': 'Bình Định', '57': 'Bình Dương', '58': 'Bình Phước', '40': 'Bình Thuận', '59': 'Cà Mau', 'CT': 'Cần Thơ', '04': 'Cao Bằng', 'DN': 'Đà Nẵng', '33': 'Đắk Lắk', '72': 'Đắk Nông', '71': 'Điện Biên', '39': 'Đồng Nai', '45': 'Đồng Tháp', '30': 'Gia Lai', '03': 'Hà Giang', '63': 'Hà Nam', 'HN': 'Hà Nội', '23': 'Hà Tĩnh', '61': 'Hải Dương', 'HP': 'Hải Phòng', '73': 'Hậu Giang', '14': 'Hòa Bình', 'SG': 'TP. Hồ Chí Minh', '66': 'Hưng Yên', '34': 'Khánh Hòa', '47': 'Kiên Giang', '28': 'Kon Tum', '01': 'Lai Châu', '35': 'Lâm Đồng', '09': 'Lạng Sơn', '02': 'Lào Cai', '41': 'Long An', '67': 'Nam Định', '22': 'Nghệ An', '18': 'Ninh Bình', '36': 'Ninh Thuận', '68': 'Phú Thọ', '32': 'Phú Yên', '24': 'Quảng Bình', '27': 'Quảng Nam', '29': 'Quảng Ngãi', '13': 'Quảng Ninh', '25': 'Quảng Trị', '52': 'Sóc Trăng', '05': 'Sơn La', '37': 'Tây Ninh', '20': 'Thái Bình', '69': 'Thái Nguyên', '21': 'Thanh Hóa', '26': 'Thừa Thiên Huế', '46': 'Tiền Giang', '51': 'Trà Vinh', '07': 'Tuyên Quang', '49': 'Vĩnh Long', '70': 'Vĩnh Phúc', '06': 'Yên Bái' };
module.exports = (req, res) => {
  const h = (k) => { try { return decodeURIComponent(req.headers[k] || ''); } catch (e) { return ''; } };
  const country = (h('x-vercel-ip-country') || '').toUpperCase().replace(/[^A-Z]/g, '').slice(0, 2);
  const region = (h('x-vercel-ip-country-region') || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 3);
  const city = h('x-vercel-ip-city').slice(0, 40);
  let code = 'XX', name = 'Không rõ';
  if (country === 'VN') { code = region ? 'VN_' + region : 'VN'; name = VN[region] || city || 'Việt Nam (không rõ tỉnh)'; }
  else if (country) { code = country; name = 'Nước ngoài: ' + country + (city ? ' · ' + city : ''); }
  res.setHeader('Cache-Control', 'private, no-store');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify({ code, name }));
};

/* Thư viện bộ sinh câu hỏi Tiếng Việt dùng chung (lớp 1–5).
   Ngữ liệu (từ, câu, đoạn văn) do PLT-Edu tự soạn, không chép từ SGK. */
(function () {
  'use strict';
  const { r, pick, shuffle, cap, mc, fill, sort, order, match, essay } = PLT.U;
  const T = (PLT.TV = {});

  /* ---------- Chính tả: [đúng, sai] ---------- */
  const CT = {
    'c/k': [['cái kéo', 'cái céo'], ['con kiến', 'con ciến'], ['cây cau', 'cây kau'], ['kì cọ', 'cì cọ'], ['cá kho', 'ká kho'], ['quả cam', 'quả kam'], ['thước kẻ', 'thước cẻ'], ['củ kiệu', 'kủ kiệu']],
    'g/gh': [['gà gô', 'ghà gô'], ['ghế gỗ', 'gế gỗ'], ['ghi nhớ', 'gi nhớ'], ['gồ ghề', 'gồ gề'], ['con ghẹ', 'con gẹ'], ['gói quà', 'ghói quà'], ['ghé thăm', 'gé thăm']],
    'ng/ngh': [['nghỉ ngơi', 'ngỉ ngơi'], ['ngã ba', 'nghã ba'], ['nghe nhạc', 'nge nhạc'], ['con nghé', 'con ngé'], ['ngõ nhỏ', 'nghõ nhỏ'], ['nghề nghiệp', 'ngề nghiệp'], ['ngủ ngon', 'nghủ ngon']],
    'ch/tr': [['trường học', 'chường học'], ['chăm chỉ', 'trăm chỉ'], ['quả chuối', 'quả truối'], ['trung thực', 'chung thực'], ['cây tre', 'cây che'], ['chân trời', 'trân chời'], ['trò chơi', 'chò trơi']],
    's/x': [['sân trường', 'xân trường'], ['xinh xắn', 'sinh sắn'], ['sáng sủa', 'xáng xủa'], ['xe đạp', 'se đạp'], ['quả su su', 'quả xu xu'], ['xôi gấc', 'sôi gấc'], ['sạch sẽ', 'xạch xẽ']],
    'r/d/gi': [['rực rỡ', 'dực dỡ'], ['giản dị', 'dản dị'], ['dịu dàng', 'giịu giàng'], ['con rùa', 'con dùa'], ['giữ gìn', 'dữ dìn'], ['dòng sông', 'giòng sông'], ['rộn ràng', 'dộn dàng']],
    'l/n': [['lo lắng', 'no nắng'], ['nắng nóng', 'lắng lóng'], ['làng quê', 'nàng quê'], ['nói năng', 'lói lăng'], ['long lanh', 'nong nanh'], ['nước non', 'lước lon'], ['lấp lánh', 'nấp nánh']],
    'hỏi/ngã': [['nghĩ ngợi', 'nghỉ ngợi'], ['sửa chữa', 'sữa chửa'], ['bão tố', 'bảo tố'], ['dũng cảm', 'dủng cảm'], ['vẽ tranh', 'vẻ tranh'], ['mãi mãi', 'mải mải'], ['nhảy dây', 'nhãy dây'], ['kĩ lưỡng', 'kỉ lưỡng']],
    'an/ang': [['lan man', 'lang mang'], ['làng xóm', 'làn xóm'], ['bàn tay', 'bàng tay'], ['sáng sớm', 'sán sớm'], ['cái thang', 'cái than']],
    'iu/ưu': [['cứu giúp', 'cíu giúp'], ['bưu điện', 'biu điện'], ['dịu dàng', 'dựu dàng'], ['quả lựu', 'quả lịu'], ['chịu khó', 'chựu khó']]
  };
  T.chinhta = (keys) => () => {
    const k = pick(keys), b = CT[k]; const t = r(0, 1);
    if (t === 0) { const [ok, bad] = pick(b); const others = shuffle(b.filter((x) => x[0] !== ok)).slice(0, 2).map((x) => x[1]); return mc(`Từ nào viết <b>đúng chính tả</b>?`, cap(ok), [bad, ...others].map(cap), `Viết đúng: "${ok}". Chú ý phân biệt ${k}.`); }
    const items = shuffle(b).slice(0, 5).map(([ok, bad], i) => ((i < 2 || (i === 4 && Math.random() < 0.5)) ? { t: ok, cat: 'Viết đúng' } : { t: bad, cat: 'Viết sai' }));
    return sort(`Xếp các từ vào nhóm đúng (phân biệt <b>${k}</b>):`, items, ['Viết đúng', 'Viết sai'], k === 'c/k' ? 'Viết k trước e, ê, i; viết c trước các âm còn lại.' : k === 'g/gh' ? 'Viết gh trước e, ê, i; viết g trước các âm còn lại.' : k === 'ng/ngh' ? 'Viết ngh trước e, ê, i; viết ng trước các âm còn lại.' : `Ghi nhớ cách viết các từ thường gặp có ${k}.`);
  };

  /* ---------- Từ loại ---------- */
  const SV = ['cái bàn', 'học sinh', 'con mèo', 'quyển vở', 'dòng sông', 'bác sĩ', 'cây bàng', 'ngôi nhà', 'cô giáo', 'chiếc xe', 'bông hoa', 'mặt trời'];
  const HD = ['chạy', 'đọc sách', 'quét nhà', 'hát', 'viết', 'nhảy dây', 'tưới cây', 'bơi', 'vẽ', 'nấu cơm', 'học bài', 'đá bóng'];
  const DD = ['xanh biếc', 'cao lớn', 'chăm chỉ', 'đỏ thắm', 'hiền lành', 'nhanh nhẹn', 'thơm ngát', 'tròn xoe', 'ngoan', 'rộng rãi', 'trong veo', 'dũng cảm'];
  T.tuloai = (lv) => () => {
    const names = lv >= 4 ? ['Danh từ', 'Động từ', 'Tính từ'] : ['Từ chỉ sự vật', 'Từ chỉ hoạt động', 'Từ chỉ đặc điểm'];
    const banks = [SV, HD, DD]; const t = r(0, 1);
    const exp = lv >= 4 ? 'Danh từ chỉ người, vật, hiện tượng…; động từ chỉ hoạt động, trạng thái; tính từ chỉ đặc điểm, tính chất.' : 'Từ chỉ sự vật: người, con vật, đồ vật, cây cối… Từ chỉ hoạt động: việc làm. Từ chỉ đặc điểm: màu sắc, hình dáng, tính nết…';
    if (t === 0) { const i = r(0, 2), w = pick(banks[i]); return mc(`Từ <b>"${w}"</b> là:`, names[i], names.filter((_, j) => j !== i), exp); }
    const items = shuffle([0, 0, 1, 1, 2, 2].map((i) => ({ t: pick(banks[i]), cat: names[i] }))).filter((x, k, a) => a.findIndex((y) => y.t === x.t) === k);
    return sort('Xếp mỗi từ vào nhóm đúng:', items, names, exp);
  };

  /* ---------- Kiểu câu, dấu câu ---------- */
  const CAU = {
    'Câu giới thiệu': ['Bạn Lan là lớp trưởng lớp em.', 'Đây là ngôi trường của em.', 'Bố em là kĩ sư.', 'Con mèo này là mèo mướp.'],
    'Câu nêu hoạt động': ['Các bạn đang tưới cây trong vườn trường.', 'Mẹ em nấu cơm.', 'Chú chim sâu bắt sâu cho lá.', 'Em quét sân mỗi sáng.'],
    'Câu nêu đặc điểm': ['Bầu trời hôm nay trong xanh.', 'Mái tóc bà bạc trắng.', 'Chú chó nhà em rất khôn.', 'Hoa phượng đỏ rực cả góc sân.']
  };
  const CAU4 = {
    'Câu kể': ['Sáng nay, cả lớp em đi tham quan bảo tàng.', 'Chú mèo nằm sưởi nắng bên hiên.', 'Ông em trồng một cây bưởi trước sân.'],
    'Câu hỏi': ['Bạn đã làm xong bài tập chưa?', 'Vì sao lá cây có màu xanh?', 'Ngày mai lớp mình đi đâu?'],
    'Câu cảm': ['Ôi, bông hoa đẹp quá!', 'Chà, hôm nay trời mát thật!', 'Ồ, bạn vẽ giỏi ghê!'],
    'Câu khiến': ['Em hãy đóng cửa lại giúp chị.', 'Các con nhớ mang áo mưa nhé!', 'Đừng chạy nhảy ở hành lang!']
  };
  T.kieucau = (lv) => () => { const B = lv >= 3 && Math.random() < (lv >= 4 ? 1 : 0.5) ? CAU4 : CAU; const ks = Object.keys(B), k = pick(ks), c = pick(B[k]); return mc(`Câu <b>"${c}"</b> thuộc kiểu câu nào?`, k, ks.filter((x) => x !== k), B === CAU ? 'Câu giới thiệu thường có "là"; câu nêu hoạt động nói về việc làm; câu nêu đặc điểm nói về hình dáng, màu sắc, tính chất.' : 'Câu kể để kể, tả, nêu ý kiến (dấu chấm); câu hỏi để hỏi (dấu chấm hỏi); câu cảm bộc lộ cảm xúc (dấu chấm than); câu khiến để yêu cầu, đề nghị.'); };
  T.daucau = () => { const all = [...CAU4['Câu kể'].map((c) => [c, '.']), ...CAU4['Câu hỏi'].map((c) => [c, '?']), ...CAU4['Câu cảm'].map((c) => [c, '!']), ...CAU['Câu nêu đặc điểm'].map((c) => [c, '.'])]; const [c, d] = pick(all); return mc(`Chọn dấu câu thích hợp đặt cuối câu: <b>"${c.slice(0, -1)} …"</b>`, d === '.' ? 'Dấu chấm (.)' : d === '?' ? 'Dấu chấm hỏi (?)' : 'Dấu chấm than (!)', ['Dấu chấm (.)', 'Dấu chấm hỏi (?)', 'Dấu chấm than (!)', 'Dấu phẩy (,)'].filter((x) => !x.includes(`(${d})`)), 'Câu kể dùng dấu chấm; câu hỏi dùng dấu chấm hỏi; câu cảm, câu khiến thường dùng dấu chấm than.'); };

  /* ---------- Đồng nghĩa, trái nghĩa ---------- */
  const DN = [['siêng năng', 'chăm chỉ'], ['to lớn', 'khổng lồ'], ['xinh đẹp', 'xinh xắn'], ['vui vẻ', 'vui tươi'], ['nhanh nhẹn', 'nhanh nhảu'], ['hiền lành', 'hiền hậu'], ['đất nước', 'tổ quốc'], ['bé nhỏ', 'nhỏ bé'], ['thông minh', 'sáng dạ'], ['dũng cảm', 'gan dạ']];
  const TN = [['cao', 'thấp'], ['nóng', 'lạnh'], ['chăm chỉ', 'lười biếng'], ['vui', 'buồn'], ['sáng', 'tối'], ['nhanh', 'chậm'], ['khỏe', 'yếu'], ['rộng', 'hẹp'], ['thật thà', 'dối trá'], ['đầu tiên', 'cuối cùng']];
  T.tunghia = () => { const dn = Math.random() < 0.5; const B = dn ? DN : TN; const [a, b] = pick(B); const others = shuffle(B.filter((x) => x[0] !== a)).slice(0, 3).map((x) => x[1]); return mc(`Từ ${dn ? '<b>cùng nghĩa (gần nghĩa)</b>' : '<b>trái nghĩa</b>'} với "${a}" là:`, b, others, dn ? 'Từ đồng nghĩa có nghĩa giống nhau hoặc gần giống nhau.' : 'Từ trái nghĩa có nghĩa trái ngược nhau.'); };

  /* ---------- Biện pháp tu từ ---------- */
  const BP = { 'So sánh': ['Mặt trăng tròn như cái đĩa bạc.', 'Tiếng suối trong như tiếng hát xa.', 'Trẻ em như búp trên cành.', 'Đôi mắt bé sáng như sao.'], 'Nhân hóa': ['Ông mặt trời thức dậy, vươn vai chào ngày mới.', 'Chị gió nhẹ nhàng ru hàng cây ngủ.', 'Những chú gà con líu ríu gọi mẹ.', 'Cây bàng già đứng trầm ngâm giữa sân trường.'], 'Điệp từ, điệp ngữ': ['Nhớ sao lớp học ngày xưa, nhớ sao thầy cô, nhớ sao bè bạn.', 'Học, học nữa, học mãi.'] };
  T.bienphap = (lv) => () => { const ks = lv >= 5 ? Object.keys(BP) : ['So sánh', 'Nhân hóa']; const k = pick(ks), c = pick(BP[k]); return mc(`Câu <b>"${c}"</b> sử dụng biện pháp tu từ nào?`, k, ['So sánh', 'Nhân hóa', 'Điệp từ, điệp ngữ', 'Không dùng biện pháp nào'].filter((x) => x !== k).slice(0, 3), 'So sánh: đối chiếu hai sự vật có nét giống nhau (thường có từ "như", "là"). Nhân hóa: gọi, tả sự vật như con người. Điệp từ: lặp lại từ ngữ để nhấn mạnh.'); };

  /* ---------- Viết hoa tên riêng ---------- */
  const TR = [['Hà Nội', 'hà Nội'], ['Nguyễn Văn An', 'Nguyễn văn An'], ['sông Hồng', 'Sông hồng'], ['Thành phố Hồ Chí Minh', 'thành phố hồ Chí Minh'], ['Võ Thị Sáu', 'Võ thị Sáu'], ['Vịnh Hạ Long', 'vịnh hạ Long'], ['Trường Sa', 'Trường sa'], ['Lý Thái Tổ', 'Lý thái tổ']];
  T.vietHoa = () => { const [ok, bad] = pick(TR); const o = shuffle(TR.filter((x) => x[0] !== ok)).slice(0, 2).map((x) => x[1]); return mc('Tên riêng nào được viết hoa <b>đúng</b>?', ok, [bad, ...o], 'Tên người, tên địa lí Việt Nam: viết hoa chữ cái đầu của mỗi tiếng tạo thành tên riêng (danh từ chung như "sông", "thành phố" đứng trước có thể không viết hoa).'); };

  /* ---------- Lớp 1: âm, vần, tiếng ---------- */
  const VAN = { an: ['bàn', 'lan', 'cán'], at: ['hạt', 'mát', 'bát'], ong: ['bóng', 'võng', 'trong'], anh: ['cành', 'xanh', 'tranh'], ươn: ['vườn', 'lườn', 'mượn'], uôi: ['chuối', 'muối', 'tuổi'], ăm: ['tắm', 'nằm', 'năm'], ây: ['cây', 'mây', 'dây'], iêu: ['diều', 'chiều', 'kiều'], oa: ['hoa', 'loa', 'xoá'] };
  T.van1 = () => { const ks = Object.keys(VAN), k = pick(ks), w = pick(VAN[k]); const others = shuffle(ks.filter((x) => x !== k)).slice(0, 3).map((x) => pick(VAN[x])); return mc(`Tiếng nào có vần <b>${k}</b>?`, w, others, `Tách tiếng: ${w} có vần "${k}".`); };
  T.dem1 = () => { const c = pick(['Bé đi học.', 'Mẹ mua quả na.', 'Bà kể chuyện cổ tích.', 'Đàn gà con chạy theo mẹ.', 'Em yêu cô giáo của em.', 'Cả nhà đi chơi công viên.']); const n = c.replace('.', '').split(/\s+/).length; return mc(`Câu "<b>${c}</b>" có mấy tiếng?`, n, [n + 1, n - 1, n + 2], 'Mỗi tiếng được viết cách nhau một khoảng trắng.'); };
  T.am1 = () => { const k = pick([['gh', 'ghế', ['ga', 'gỗ', 'gối']], ['ngh', 'nghé', ['ngủ', 'ngõ', 'ngà']], ['k', 'kẹo', ['cá', 'cỏ', 'cua']], ['qu', 'quả', ['cá', 'hoa', 'gà']], ['ch', 'chó', ['tre', 'xe', 'sò']], ['nh', 'nhà', ['na', 'lá', 'mạ']]]); return mc(`Tiếng nào bắt đầu bằng <b>${k[0]}</b>?`, k[1], k[2], 'Đánh vần để tìm âm đầu của tiếng.'); };

  /* ---------- Câu: thành phần, liên kết (lớp 4–5) ---------- */
  T.thanhphan = () => { const s = pick([['Những chú chim', 'đang hót líu lo trên cành.'], ['Cô giáo em', 'giảng bài rất dễ hiểu.'], ['Dòng sông quê em', 'uốn khúc giữa cánh đồng.'], ['Bạn Minh', 'là học sinh giỏi của lớp.']]); return mc(`Chủ ngữ của câu <b>"${s[0]} ${s[1]}"</b> là:`, s[0], [s[1], s[0].split(' ').slice(-1)[0], 'Không có chủ ngữ'], 'Chủ ngữ trả lời câu hỏi Ai? Cái gì? Con gì?; vị ngữ trả lời Làm gì? Thế nào? Là gì?'); };
  T.trangngu = () => { const s = pick([['Sáng nay,', 'thời gian'], ['Trong vườn,', 'nơi chốn'], ['Vì trời mưa,', 'nguyên nhân'], ['Để đạt điểm cao,', 'mục đích'], ['Bằng đôi bàn tay khéo léo,', 'phương tiện']]); return mc(`Trạng ngữ <b>"${s[0]}"</b> trong câu bổ sung thông tin về:`, cap(s[1]), ['Thời gian', 'Nơi chốn', 'Nguyên nhân', 'Mục đích', 'Phương tiện'].filter((x) => x !== cap(s[1])).slice(0, 3), 'Trạng ngữ bổ sung thông tin về thời gian, nơi chốn, nguyên nhân, mục đích, phương tiện… cho câu.'); };
  T.ketTu = () => { const s = pick([['Trời mưa to … đường rất trơn.', 'nên'], ['Em học bài … em giúp mẹ nấu cơm.', 'rồi'], ['Bạn ấy học giỏi … bạn ấy còn hát hay.', 'mà'], ['… trời mưa, chúng em vẫn đến trường.', 'Tuy'], ['Em thích đọc truyện … anh em thích xem phim.', 'còn']]); return mc(`Chọn kết từ thích hợp điền vào chỗ trống: <b>"${s[0]}"</b>`, s[1], ['nên', 'rồi', 'mà', 'Tuy', 'còn', 'nhưng'].filter((x) => x !== s[1]).slice(0, 3), 'Kết từ nối các từ ngữ, các vế câu: và, với, nhưng, còn, rồi, nên, vì… nên, tuy… nhưng…'); };
  T.daitu = () => { const s = pick([['Mai rủ Lan đi học. Hai bạn cùng đi, <b>họ</b> vừa đi vừa trò chuyện.', 'Mai và Lan'], ['Con mèo nằm ngủ trên ghế. <b>Nó</b> cuộn tròn như cục bông.', 'Con mèo'], ['Bố đưa em đến trường. Em chào <b>bố</b> rồi vào lớp. Bố mỉm cười với <b>em</b>.', 'Em (người kể)']]); return mc(`Từ in đậm trong đoạn sau dùng để thay thế cho ai/cái gì? ${s[0]}`, s[1], ['Mai và Lan', 'Con mèo', 'Em (người kể)', 'Cô giáo'].filter((x) => x !== s[1]).slice(0, 3), 'Đại từ dùng để xưng hô hoặc thay thế cho danh từ, cụm danh từ đã nói đến để tránh lặp từ.'); };

  /* ---------- Đọc hiểu: đoạn văn tự soạn ---------- */
  const DOC = [
    { lv: 1, text: 'Nhà bé Na có một chú chó tên là Vàng. Mỗi chiều, Vàng ra cổng đợi Na đi học về. Thấy Na, Vàng vẫy đuôi rối rít.', qs: [['Chú chó nhà bé Na tên là gì?', 'Vàng', ['Mực', 'Bông', 'Na']], ['Vàng đợi Na ở đâu?', 'Ở cổng', ['Ở trường', 'Trong bếp', 'Ngoài đồng']], ['Thấy Na về, Vàng làm gì?', 'Vẫy đuôi rối rít', ['Nằm ngủ', 'Chạy đi chơi', 'Sủa thật to']]] },
    { lv: 2, text: 'Sáng chủ nhật, Minh cùng ông ra vườn tưới cây. Ông chỉ cho Minh cách tưới gốc chứ không tưới lên lá. Ông bảo: "Cây cũng như người, cần được uống nước đúng cách mới khỏe." Minh chăm chú làm theo.', qs: [['Minh cùng ông làm gì vào sáng chủ nhật?', 'Tưới cây ngoài vườn', ['Đi câu cá', 'Đọc sách', 'Quét nhà']], ['Ông dặn Minh tưới nước vào đâu?', 'Vào gốc cây', ['Lên lá cây', 'Lên ngọn cây', 'Khắp vườn']], ['Câu nói của ông dùng biện pháp gì?', 'So sánh', ['Nhân hóa', 'Điệp từ', 'Không có']]] },
    { lv: 3, text: 'Cuối thu, lá bàng chuyển sang màu đỏ. Gió thổi, những chiếc lá xoay tròn rồi đáp nhẹ xuống sân trường như những cánh bướm. Chúng em nhặt lá về ép vào vở, để dành làm thiệp tặng cô nhân ngày Nhà giáo Việt Nam.', qs: [['Lá bàng chuyển màu đỏ vào thời gian nào?', 'Cuối thu', ['Đầu xuân', 'Giữa hè', 'Cuối đông']], ['Lá bàng rơi được so sánh với gì?', 'Những cánh bướm', ['Những chiếc thuyền', 'Những ngôi sao', 'Những bông hoa']], ['Các bạn nhỏ nhặt lá để làm gì?', 'Làm thiệp tặng cô', ['Nhóm lửa', 'Làm đồ chơi', 'Gói bánh']]] },
    { lv: 4, text: 'Ngày nhỏ, Lương Thế Vinh nổi tiếng thông minh. Có lần, quả bưởi của các bạn rơi xuống hố sâu, không ai lấy được. Cậu bảo các bạn đổ nước vào hố. Nước dâng lên, quả bưởi nổi theo và các bạn dễ dàng lấy được bưởi. Lớn lên, ông trở thành một nhà toán học nổi tiếng.', qs: [['Quả bưởi rơi xuống đâu?', 'Một hố sâu', ['Dòng sông', 'Giếng nước', 'Bụi rậm']], ['Lương Thế Vinh nghĩ ra cách gì?', 'Đổ nước vào hố cho bưởi nổi lên', ['Trèo xuống hố', 'Dùng gậy khều', 'Nhờ người lớn']], ['Câu chuyện ca ngợi đức tính gì của Lương Thế Vinh?', 'Thông minh, sáng tạo', ['Chăm chỉ lao động', 'Dũng cảm chiến đấu', 'Hiếu thảo với cha mẹ']]] },
    { lv: 5, text: 'Rừng ngập mặn ven biển như tấm lá chắn xanh. Rễ cây đước, cây mắm bám chặt vào bùn, giữ đất và chắn sóng dữ. Đây cũng là nơi sinh sống của nhiều loài cá, tôm, cua và chim. Bảo vệ rừng ngập mặn chính là bảo vệ cuộc sống của người dân vùng ven biển.', qs: [['Rừng ngập mặn được so sánh với gì?', 'Tấm lá chắn xanh', ['Bức tường thành', 'Tấm thảm xanh', 'Con đê lớn']], ['Rễ cây đước, cây mắm có tác dụng gì?', 'Giữ đất và chắn sóng', ['Làm thức ăn cho cá', 'Làm thuốc chữa bệnh', 'Lọc nước biển']], ['Ý chính của đoạn văn là gì?', 'Vai trò quan trọng của rừng ngập mặn', ['Cách trồng cây đước', 'Các loài chim ven biển', 'Nghề đánh bắt cá']]] }
  ];
  T.dochieu = (lv) => () => { const ps = DOC.filter((d) => d.lv <= lv && d.lv >= lv - 1); const d = pick(ps); const [q, a, o] = pick(d.qs); return mc(`<div class="passage">${d.text}</div>Đọc đoạn văn rồi trả lời: <b>${q}</b>`, a, o, 'Đọc kĩ đoạn văn, tìm câu chứa thông tin cần trả lời.'); };

  /* ---------- Bài viết (AI chấm) ---------- */
  T.vietdoan = (lv, des) => () => { const [de, kw] = pick(des); const n = lv <= 2 ? 3 : lv === 3 ? 5 : 6; return Object.assign(essay(`Viết đoạn văn (khoảng ${n}–${n + 3} câu): ${de}`, 2, `Yêu cầu: đúng chủ đề; có câu mở đầu, các câu phát triển ý và câu kết; dùng từ ngữ phù hợp, viết hoa đầu câu, dấu câu đúng; khuyến khích dùng từ ngữ gợi tả, biện pháp so sánh/nhân hóa${lv >= 4 ? ', thể hiện cảm xúc riêng' : ''}.`, []), { kw, minCau: n }); };
})();

/* Dựng khoá Tiếng Việt: mỗi chủ điểm có danh sách bài đọc; mỗi bài luyện 2 kĩ năng xoay vòng trong chủ điểm */
(function () {
  'use strict';
  PLT.TV.build = function (def) {
    let id = 0;
    const topics = def.topics.map((t) => {
      id++; const sk = t.skills; let i = 0;
      const bai = t.bai.map((b) => { if (Array.isArray(b)) return b; const g = [sk[i % sk.length], sk[(i + 1) % sk.length]]; i++; return [0, b, [...new Set(g)]]; });
      if (t.on) bai.push([0, t.on, null]);
      return { id, hk: t.hk, ten: t.ten, nhan: 'Chủ điểm ' + id, widgets: t.widgets || [], lt: t.lt, review: t.review, bai };
    });
    return PLT.buildCourse({ id: def.id, lop: def.lop, mon: 'Tiếng Việt', icon: '📖', topics, gens: def.gens, essays: def.essays });
  };
})();

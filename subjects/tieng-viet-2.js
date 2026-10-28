/* Tiếng Việt lớp 2 – Kết nối tri thức với cuộc sống. Tên bài theo mục lục SGK; câu hỏi, ngữ liệu luyện tập do PLT-Edu soạn. */
(function () {
  'use strict';
  const TV = PLT.TV;
  const G = {
    ct1: TV.chinhta(['c/k', 'g/gh', 'ng/ngh']), ct2: TV.chinhta(['ch/tr', 's/x', 'r/d/gi', 'hỏi/ngã', 'l/n']),
    tuloai: TV.tuloai(2), kieucau: TV.kieucau(2), daucau: TV.daucau, tunghia: TV.tunghia, dochieu: TV.dochieu(2), viethoa: TV.vietHoa
  };
  const DE1 = [['Giới thiệu về bản thân em (tên, tuổi, lớp, sở thích).', ['em', 'tên', 'lớp']], ['Kể về một việc em đã làm ở nhà để giúp đỡ bố mẹ.', ['em', 'giúp']], ['Tả một đồ dùng học tập em yêu thích.', ['em', 'thích']], ['Kể về một người thân trong gia đình em.', ['em', 'yêu']]];
  const DE2 = [['Tả một đồ vật hoặc đồ chơi em yêu thích.', ['em', 'thích']], ['Kể về việc em đã làm để chăm sóc cây cối hoặc bảo vệ môi trường.', ['cây', 'em']], ['Viết lời cảm ơn hoặc lời xin lỗi gửi một người bạn.', ['bạn', 'cảm ơn']], ['Tả cảnh đẹp ở quê hương em hoặc nơi em sống.', ['quê', 'đẹp']]];
  const ESSAY = { 1: [TV.vietdoan(2, DE1.slice(0, 2)), TV.vietdoan(2, DE1.slice(2))], 2: [TV.vietdoan(2, DE2.slice(0, 2)), TV.vietdoan(2, DE2.slice(2))] };
  const LT = (s) => `<ul>${s.map((x) => `<li>${x}</li>`).join('')}</ul>`;
  TV.build({
    id: 'tieng-viet-2', lop: 2, gens: G, essays: ESSAY,
    topics: [
      { hk: 1, ten: 'Em lớn lên từng ngày', skills: ['ct1', 'tuloai', 'kieucau', 'dochieu'],
        lt: LT(['<b>Bảng chữ cái</b>: thuộc thứ tự 29 chữ cái tiếng Việt.', '<b>Từ chỉ sự vật</b> (người, đồ vật, con vật, cây cối) và <b>từ chỉ hoạt động</b>.', '<b>Câu giới thiệu</b> (Ai là gì?), <b>câu nêu hoạt động</b> (Ai làm gì?).', 'Chính tả: c/k, g/gh, ng/ngh — viết k, gh, ngh trước e, ê, i.', 'Viết đoạn văn giới thiệu bản thân, kể việc làm ở nhà.']),
        bai: ['Tôi là học sinh lớp 2', 'Ngày hôm qua đâu rồi?', 'Niềm vui của Bi và Bống', 'Làm việc thật là vui', 'Em có xinh không?', 'Một giờ học', 'Cây xấu hổ', 'Cầu thủ dự bị'] },
      { hk: 1, ten: 'Đi học vui sao', skills: ['ct2', 'tuloai', 'kieucau', 'dochieu', 'viethoa'],
        lt: LT(['<b>Từ chỉ đặc điểm</b> (màu sắc, hình dáng, tính nết) và <b>câu nêu đặc điểm</b> (Ai/Cái gì thế nào?).', 'Viết hoa tên riêng của người.', 'Đọc thời khoá biểu, danh sách học sinh; viết thời gian biểu.', 'Chính tả: ch/tr, s/x, dấu hỏi/dấu ngã.']),
        bai: ['Cô giáo lớp em', 'Thời khoá biểu', 'Cái trống trường em', 'Danh sách học sinh', 'Yêu lắm trường ơi!', 'Em học vẽ', 'Cuốn sách của em', 'Khi trang sách mở ra'], on: 'Ôn tập giữa học kì 1' },
      { hk: 1, ten: 'Niềm vui tuổi thơ', skills: ['ct2', 'tunghia', 'daucau', 'dochieu'],
        lt: LT(['Từ ngữ về tình bạn, đồ chơi, trò chơi.', '<b>Dấu chấm, dấu chấm hỏi, dấu chấm than</b> đặt cuối câu phù hợp.', '<b>Từ cùng nghĩa, trái nghĩa</b> đơn giản.', 'Viết đoạn văn kể về một hoạt động vui chơi, tả đồ chơi.']),
        bai: ['Gọi bạn', 'Tớ nhớ cậu', 'Chữ A và những người bạn', 'Nhím nâu kết bạn', 'Thả diều', 'Tớ là lê-gô', 'Rồng rắn lên mây', 'Nặn đồ chơi'] },
      { hk: 1, ten: 'Mái ấm gia đình', skills: ['ct1', 'tuloai', 'kieucau', 'dochieu'],
        lt: LT(['Từ ngữ chỉ người thân, tình cảm gia đình.', 'Câu nêu hoạt động, câu nêu đặc điểm; dấu phẩy ngăn cách các từ cùng loại.', 'Viết đoạn văn kể về người thân, tình cảm với ông bà, bố mẹ.']),
        bai: ['Sự tích hoa tỉ muội', 'Em mang về yêu thương', 'Mẹ', 'Trò chơi của bố', 'Cánh cửa nhớ bà', 'Thương ông', 'Ánh sáng của yêu thương', 'Chơi chong chóng'], on: 'Ôn tập và đánh giá cuối học kì 1' },
      { hk: 2, ten: 'Vẻ đẹp quanh em', skills: ['ct2', 'tunghia', 'daucau', 'dochieu'],
        lt: LT(['Từ ngữ về các mùa, ngày Tết, cây cối.', 'Dấu chấm, dấu chấm hỏi; câu nêu đặc điểm của cảnh vật.', 'Viết đoạn văn tả đồ vật, viết thiệp chúc Tết, kể việc chăm sóc cây.']),
        bai: ['Chuyện bốn mùa', 'Mùa nước nổi', 'Hoạ mi hót', 'Tết đến rồi', 'Giọt nước và biển lớn', 'Mùa vàng', 'Hạt thóc', 'Luỹ tre'] },
      { hk: 2, ten: 'Hành tinh xanh của em', skills: ['ct1', 'tuloai', 'kieucau', 'dochieu'],
        lt: LT(['Từ ngữ về loài vật, bảo vệ môi trường.', 'Dấu phẩy; câu nêu đặc điểm của con vật.', 'Viết lời xin lỗi; viết đoạn văn kể việc làm bảo vệ môi trường.']),
        bai: ['Vè chim', 'Khủng long', 'Sự tích cây thì là', 'Bờ tre đón khách', 'Tiếng chổi tre', 'Cỏ non cười rồi', 'Những con sao biển', 'Tạm biệt cánh cam'], on: 'Ôn tập giữa học kì 2' },
      { hk: 2, ten: 'Giao tiếp và kết nối', skills: ['ct2', 'daucau', 'kieucau', 'dochieu'],
        lt: LT(['Lời chào, lời cảm ơn, lời xin lỗi phù hợp với người nghe.', 'Từ ngữ về phương tiện giao tiếp (thư, điện thoại, in-tơ-nét).', 'Viết bưu thiếp, tin nhắn ngắn.']),
        bai: ['Những cách chào độc đáo', 'Thư viện biết đi', 'Cảm ơn anh hà mã', 'Từ chú bồ câu đến in-tơ-nét'] },
      { hk: 2, ten: 'Con người Việt Nam', skills: ['viethoa', 'tunghia', 'tuloai', 'dochieu'],
        lt: LT(['Từ ngữ chỉ phẩm chất của người Việt Nam: chăm chỉ, dũng cảm, yêu nước…', 'Viết hoa tên người, tên địa danh.', 'Viết đoạn văn kể về một nhân vật em yêu thích.']),
        bai: ['Mai An Tiêm', 'Thư gửi bố ngoài đảo', 'Bóp nát quả cam', 'Chiếc rễ đa tròn'] },
      { hk: 2, ten: 'Việt Nam quê hương em', skills: ['viethoa', 'ct2', 'kieucau', 'dochieu'],
        lt: LT(['Từ ngữ về quê hương, đất nước; viết hoa tên địa lí Việt Nam.', 'Câu nêu đặc điểm của cảnh vật quê hương.', 'Viết đoạn văn tả cảnh đẹp quê hương.']),
        bai: ['Đất nước chúng mình', 'Trên các miền đất nước', 'Chuyện quả bầu', 'Khám phá đáy biển ở Trường Sa', 'Hồ Gươm', 'Cánh đồng quê em'], on: 'Ôn tập và đánh giá cuối năm học' }
    ]
  });
})();

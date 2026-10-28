/* Tiếng Việt lớp 5 – Kết nối tri thức với cuộc sống. Tên bài theo mục lục SGK; câu hỏi, ngữ liệu luyện tập do PLT-Edu soạn. */
(function () {
  'use strict';
  const TV = PLT.TV;
  const G = { tunghia: TV.tunghia, bienphap: TV.bienphap(5), ketTu: TV.ketTu, daitu: TV.daitu, thanhphan: TV.thanhphan, trangngu: TV.trangngu, tuloai: TV.tuloai(5), viethoa: TV.vietHoa, ct: TV.chinhta(['hỏi/ngã', 'r/d/gi', 'l/n', 's/x']), dochieu: TV.dochieu(5) };
  const LT = (s) => `<ul>${s.map((x) => `<li>${x}</li>`).join('')}</ul>`;
  const ESSAY = { 1: [TV.vietdoan(5, [["Viết đoạn văn tả cảnh đẹp thiên nhiên mà em từng được ngắm.", ["cảnh", "đẹp"]], ["Viết đoạn văn nêu ý kiến tán thành một việc làm tốt ở trường em.", ["tán thành", "vì"]]]), TV.vietdoan(5, [["Viết đoạn văn kể lại một câu chuyện có sáng tạo (thay đổi kết thúc hoặc lời kể).", ["câu chuyện"]], ["Viết đoạn văn giới thiệu một cuốn sách em yêu thích.", ["sách"]]])], 2: [TV.vietdoan(5, [["Viết đoạn văn tả một người thân hoặc một người em kính trọng.", ["người"]], ["Viết đoạn văn nêu ý kiến về việc học sinh sử dụng điện thoại di động.", ["điện thoại", "ý kiến"]]]), TV.vietdoan(5, [["Viết đoạn văn nêu tình cảm, cảm xúc về một nét đẹp văn hoá của quê hương.", ["quê hương"]], ["Viết đoạn văn giới thiệu một tấm gương tiêu biểu của dân tộc.", ["tấm gương"]]])] };
  TV.build({ id: 'tieng-viet-5', lop: 5, gens: G, essays: ESSAY, topics: [
    { hk: 1, ten: "Thế giới tuổi thơ", skills: ["tunghia", "tuloai", "ct", "dochieu"],
      lt: LT(["<b>Từ đồng nghĩa</b>: đồng nghĩa hoàn toàn và không hoàn toàn; lựa chọn từ phù hợp ngữ cảnh.", "Ôn danh từ, động từ, tính từ.", "Viết đoạn văn, bài văn tả phong cảnh."]),
      bai: ["Thanh âm của gió", "Cánh đồng hoa", "Tuổi Ngựa", "Bến sông tuổi thơ", "Tiếng hạt nảy mầm", "Ngôi sao sân cỏ", "Bộ sưu tập độc đáo", "Trước cổng trời"] },
    { hk: 1, ten: "Thiên nhiên kì thú", skills: ["tunghia", "bienphap", "viethoa", "dochieu"],
      lt: LT(["<b>Từ đa nghĩa</b>: nghĩa gốc và nghĩa chuyển; phân biệt với từ đồng âm.", "Biện pháp so sánh, nhân hoá trong tả cảnh.", "Viết bài văn tả phong cảnh."]),
      bai: ["Kì diệu rừng xanh", "Hang Sơn Đoòng – những điều kì thú", "Những hòn đảo trên vịnh Hạ Long", "Mầm non", "Những ngọn núi nóng rẫy", "Bài ca về mặt trời", "Xin chào, Xa-ha-ra"], on: "Ôn tập và đánh giá giữa học kì 1" },
    { hk: 1, ten: "Trên con đường học tập", skills: ["daitu", "ketTu", "tunghia", "dochieu"],
      lt: LT(["<b>Đại từ</b>: dùng để xưng hô, thay thế, hỏi; đại từ xưng hô phù hợp.", "<b>Kết từ</b>: và, với, nhưng, của, vì… nên, tuy… nhưng…", "Viết đoạn văn nêu ý kiến; giới thiệu sách."]),
      bai: ["Thư gửi các học sinh", "Tấm gương tự học", "Trải nghiệm để sáng tạo", "Khổ luyện thành tài", "Thế giới trong trang sách", "Từ những câu chuyện ấu thơ", "Giới thiệu sách Dế Mèn phiêu lưu kí", "Tinh thần học tập của nhà Phi-líp"] },
    { hk: 1, ten: "Nghệ thuật muôn màu", skills: ["bienphap", "ketTu", "ct", "dochieu"],
      lt: LT(["Biện pháp điệp từ, điệp ngữ.", "Từ ngữ về nghệ thuật: âm nhạc, hội họa, múa, điện ảnh.", "Viết bài văn kể chuyện sáng tạo; viết chương trình hoạt động."]),
      bai: ["Tiếng đàn ba-la-lai-ca trên sông Đà", "Trí tưởng tượng phong phú", "Tranh làng Hồ", "Tập hát quan họ", "Phim hoạt hình Chú ốc sên bay", "Nghệ thuật múa ba lê", "Một ngôi chùa độc đáo", "Sự tích chú Tễu"], on: "Ôn tập và đánh giá cuối học kì 1" },
    { hk: 2, ten: "Vẻ đẹp cuộc sống", skills: ["thanhphan", "ketTu", "tunghia", "dochieu"],
      lt: LT(["<b>Câu đơn, câu ghép</b>; nối các vế câu ghép bằng kết từ hoặc dấu câu.", "Viết bài văn tả người."]),
      bai: ["Tiếng hát của người đá", "Khúc hát ru những em bé lớn trên lưng mẹ", "Hạt gạo làng ta", "Hộp quà màu thiên thanh", "Giỏ hoa tháng Năm", "Thư của bố", "Đoàn thuyền đánh cá", "Khu rừng của Mát"] },
    { hk: 2, ten: "Hương sắc trăm miền", skills: ["trangngu", "viethoa", "bienphap", "dochieu"],
      lt: LT(["Liên kết câu bằng từ ngữ nối, lặp từ, thay thế từ.", "Từ ngữ về văn hoá, phong tục các vùng miền; viết hoa tên riêng.", "Viết đoạn văn nêu tình cảm, cảm xúc về một sự việc, nét văn hoá."]),
      bai: ["Hội thổi cơm thi ở Đồng Vân", "Những búp chè trên cây cổ thụ", "Hương cốm mùa thu", "Vũ điệu trên nền thổ cẩm", "Đàn t'rưng – tiếng ca đại ngàn", "Đường quê Đồng Tháp Mười", "Xuồng ba lá quê tôi", "Về thăm Đất Mũi"], on: "Ôn tập và đánh giá giữa học kì 2" },
    { hk: 2, ten: "Tiếp bước cha ông", skills: ["daitu", "thanhphan", "viethoa", "dochieu"],
      lt: LT(["Dấu gạch ngang, dấu ngoặc kép; liên kết câu.", "Từ ngữ về truyền thống, tấm gương tiêu biểu.", "Viết bài văn tả người; viết báo cáo công việc."]),
      bai: ["Nghìn năm văn hiến", "Người thầy của muôn đời", "Danh y Tuệ Tĩnh", "Cụ Đồ Chiểu", "Anh hùng Lao động Trần Đại Nghĩa", "Bộ đội về làng", "Về ngôi nhà đang xây", "Việt Nam quê hương ta"] },
    { hk: 2, ten: "Thế giới của chúng ta", skills: ["ketTu", "tunghia", "trangngu", "dochieu"],
      lt: LT(["Từ ngữ về hoà bình, môi trường, khoa học công nghệ.", "Viết đoạn văn nêu ý kiến về một hiện tượng xã hội.", "Ôn tập tổng hợp từ loại, câu, biện pháp tu từ."]),
      bai: ["Bài ca Trái Đất", "Những con hạc giấy", "Một người hùng thầm lặng", "Giờ Trái Đất", "Điện thoại di động", "Thành phố thông minh Mát-xđa"], on: "Ôn tập và đánh giá cuối năm học" }
  ] });
})();

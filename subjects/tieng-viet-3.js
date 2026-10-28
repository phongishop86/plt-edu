/* Tiếng Việt lớp 3 – Kết nối tri thức với cuộc sống. Tên bài theo mục lục SGK; câu hỏi, ngữ liệu luyện tập do PLT-Edu soạn. */
(function () {
  'use strict';
  const TV = PLT.TV;
  const G = { ct1: TV.chinhta(['c/k', 'g/gh', 'ng/ngh', 'ch/tr', 'iu/ưu']), ct2: TV.chinhta(['s/x', 'r/d/gi', 'l/n', 'hỏi/ngã', 'an/ang']), tuloai: TV.tuloai(3), kieucau: TV.kieucau(3), daucau: TV.daucau, tunghia: TV.tunghia, bienphap: TV.bienphap(3), viethoa: TV.vietHoa, dochieu: TV.dochieu(3) };
  const LT = (s) => `<ul>${s.map((x) => `<li>${x}</li>`).join('')}</ul>`;
  const ESSAY = { 1: [TV.vietdoan(3, [["Kể lại một trải nghiệm đáng nhớ trong kì nghỉ hè của em.", ["em", "hè"]], ["Kể về một người thân trong gia đình mà em yêu quý.", ["yêu"]]]), TV.vietdoan(3, [["Nêu các bước làm một món ăn hoặc một đồ chơi em yêu thích.", ["trước", "sau"]], ["Viết thư ngắn hỏi thăm một người bạn hoặc người thân ở xa.", ["thăm"]]])], 2: [TV.vietdoan(3, [["Nêu tình cảm, cảm xúc của em về một cảnh vật thiên nhiên em yêu thích.", ["em", "thích"]], ["Viết đoạn văn giới thiệu về quê hương hoặc nơi em ở.", ["quê"]]]), TV.vietdoan(3, [["Nêu lí do em thích (hoặc không thích) một nhân vật trong câu chuyện đã đọc.", ["nhân vật", "vì"]], ["Kể về việc em đã làm để bảo vệ môi trường, Trái Đất.", ["môi trường"]]])] };
  TV.build({ id: 'tieng-viet-3', lop: 3, gens: G, essays: ESSAY, topics: [
    { hk: 1, ten: "Những trải nghiệm thú vị", skills: ["ct1", "tuloai", "kieucau", "dochieu"],
      lt: LT(["Từ chỉ sự vật, hoạt động, đặc điểm; câu giới thiệu, câu nêu hoạt động, câu nêu đặc điểm.", "Viết tin nhắn; viết đoạn văn kể lại hoạt động đã làm cùng người thân.", "Chính tả: c/k, g/gh, ng/ngh, ch/tr, v/d."]),
      bai: ["Ngày gặp lại", "Về thăm quê", "Cánh rừng trong nắng", "Lần đầu ra biển", "Nhật kí tập bơi", "Tập nấu ăn", "Mùa hè lấp lánh", "Tạm biệt mùa hè"] },
    { hk: 1, ten: "Cổng trường rộng mở", skills: ["ct2", "tunghia", "daucau", "dochieu"],
      lt: LT(["Từ ngữ về trường học; từ có nghĩa giống nhau.", "Dấu chấm, dấu chấm hỏi, dấu chấm than; dấu hai chấm.", "Viết đoạn văn kể về một buổi học, giới thiệu về trường lớp."]),
      bai: ["Đi học vui sao", "Con đường đến trường", "Lời giải toán đặc biệt", "Bài tập làm văn", "Bàn tay cô giáo", "Cuộc họp của chữ viết", "Thư viện", "Ngày em vào Đội"], on: "Ôn tập giữa học kì 1" },
    { hk: 1, ten: "Mái nhà yêu thương", skills: ["ct1", "tuloai", "bienphap", "dochieu"],
      lt: LT(["Từ ngữ chỉ người trong gia đình, tình cảm gia đình.", "<b>Biện pháp so sánh</b>: so sánh sự vật với sự vật (dùng từ như, là, tựa…).", "Viết đoạn văn nêu tình cảm với người thân."]),
      bai: ["Ngưỡng cửa", "Món quà đặc biệt", "Khi cả nhà bé tí", "Trò chuyện cùng mẹ", "Tia nắng bé nhỏ", "Để cháu nắm tay ông", "Tôi yêu em tôi", "Bạn nhỏ trong nhà"] },
    { hk: 1, ten: "Cộng đồng gắn bó", skills: ["ct2", "kieucau", "tunghia", "dochieu"],
      lt: LT(["Từ ngữ về cộng đồng, nghề nghiệp.", "Câu hỏi, câu kể; từ trái nghĩa.", "Viết thư; viết đoạn văn giới thiệu một người lao động."]),
      bai: ["Những bậc đá chạm mây", "Đi tìm mặt trời", "Những chiếc áo ấm", "Con đường của bé", "Ngôi nhà trong cỏ", "Những ngọn hải đăng", "Người làm đồ chơi", "Cây bút thần"], on: "Ôn tập và đánh giá cuối học kì 1" },
    { hk: 2, ten: "Những sắc màu thiên nhiên", skills: ["ct1", "kieucau", "bienphap", "dochieu"],
      lt: LT(["Từ ngữ về hiện tượng tự nhiên; <b>câu cảm, câu khiến</b>.", "Biện pháp so sánh trong miêu tả thiên nhiên.", "Viết đoạn văn nêu tình cảm, cảm xúc về cảnh vật.", "Viết hoa tên riêng địa lí."]),
      bai: ["Bầu trời", "Mưa", "Cóc kiện Trời", "Những cái tên đáng yêu", "Ngày hội rừng xanh", "Cây gạo", "Mặt trời xanh của tôi", "Bầy voi rừng Trường Sơn"] },
    { hk: 2, ten: "Bài học từ cuộc sống", skills: ["ct2", "tunghia", "daucau", "dochieu"],
      lt: LT(["Từ có nghĩa giống nhau; dấu gạch ngang, dấu ngoặc kép.", "Đặt và trả lời câu hỏi Bằng gì? Để làm gì?", "Viết đoạn văn nêu lí do thích hoặc không thích một nhân vật."]),
      bai: ["Lời kêu gọi toàn dân tập thể dục", "Quả hồng của thỏ con", "Chuyện bên cửa sổ", "Tay trái và tay phải", "Mèo đi câu cá", "Học nghề", "Ngày như thế nào là đẹp?", "A lô, tớ đây"], on: "Ôn tập giữa học kì 2" },
    { hk: 2, ten: "Đất nước ngàn năm", skills: ["viethoa", "tuloai", "bienphap", "dochieu"],
      lt: LT(["Từ ngữ về quê hương, đất nước; viết hoa tên riêng.", "Biện pháp so sánh, nhân hoá đơn giản.", "Viết đoạn văn giới thiệu cảnh đẹp, nhân vật lịch sử."]),
      bai: ["Đất nước là gì?", "Núi quê tôi", "Sông Hương", "Tiếng nước mình", "Nhà rông", "Sự tích ông Đùng, bà Đùng", "Hai Bà Trưng", "Cùng Bác qua suối"] },
    { hk: 2, ten: "Trái Đất của chúng mình", skills: ["ct1", "kieucau", "daucau", "dochieu"],
      lt: LT(["Từ ngữ về Trái Đất, bảo vệ môi trường, khoa học.", "Câu khiến (lời kêu gọi), câu cảm.", "Viết đoạn văn nêu việc làm bảo vệ môi trường."]),
      bai: ["Ngọn lửa Ô-lim-pích", "Rô-bốt ở quanh ta", "Thư của ông Trái Đất gửi các bạn nhỏ", "Những điều nhỏ tớ làm cho Trái Đất", "Bác sĩ Y-éc-xanh", "Một mái nhà chung"], on: "Ôn tập và đánh giá cuối năm học" }
  ] });
})();

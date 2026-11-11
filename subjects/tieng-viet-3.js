/* Tiếng Việt lớp 3 – Kết nối tri thức với cuộc sống. Tên bài theo mục lục SGK; câu hỏi, ngữ liệu luyện tập do PLT-Edu soạn. */
(function () {
  'use strict';
  const TV = PLT.TV;
  const G = { ct1: TV.chinhta(['c/k', 'g/gh', 'ng/ngh', 'ch/tr', 'iu/ưu']), ct2: TV.chinhta(['s/x', 'r/d/gi', 'l/n', 'hỏi/ngã', 'an/ang']), tuloai: TV.tuloai(3), kieucau: TV.kieucau(3), daucau: TV.daucau, tunghia: TV.tunghia, bienphap: TV.bienphap(3), viethoa: TV.vietHoa, dochieu: TV.dochieu(3) };
  const LT = (s) => `<ul>${s.map((x) => `<li>${x}</li>`).join('')}</ul>`;
  const ESSAY = { 1: [TV.vietdoan(3, [["Kể lại một trải nghiệm đáng nhớ trong kì nghỉ hè của em.", ["em", "hè"]], ["Kể về một người thân trong gia đình mà em yêu quý.", ["yêu"]]]), TV.vietdoan(3, [["Nêu các bước làm một món ăn hoặc một đồ chơi em yêu thích.", ["trước", "sau"]], ["Viết thư ngắn hỏi thăm một người bạn hoặc người thân ở xa.", ["thăm"]]])], 2: [TV.vietdoan(3, [["Nêu tình cảm, cảm xúc của em về một cảnh vật thiên nhiên em yêu thích.", ["em", "thích"]], ["Viết đoạn văn giới thiệu về quê hương hoặc nơi em ở.", ["quê"]]]), TV.vietdoan(3, [["Nêu lí do em thích (hoặc không thích) một nhân vật trong câu chuyện đã đọc.", ["nhân vật", "vì"]], ["Kể về việc em đã làm để bảo vệ môi trường, Trái Đất.", ["môi trường"]]])] };
  TV.build({ nc: { 1: `? Câu "Trăng tròn như quả bóng." so sánh trăng với: | quả bóng | tròn | như | trăng rằm
? Trong câu "Những ngôi sao thức ngoài kia / Chẳng bằng mẹ đã thức vì chúng con", tác giả dùng biện pháp: | So sánh (kém) và nhân hoá | Chỉ liệt kê | Điệp từ | Không có biện pháp
? Từ ngữ chỉ sự so sánh "hơn kém" là: | chẳng bằng | như | giống như | tựa
? Câu nào là câu cảm? | Ôi, bông hoa đẹp quá! | Hãy giữ trật tự! | Bạn đi đâu đấy? | Em đi học.
? Câu nào là câu khiến? | Các em hãy trật tự! | Trời đẹp quá! | Hôm nay là thứ Hai. | Ai đang hát thế?
? Dấu hai chấm trong câu "Mẹ mua cho em: bút, vở, thước kẻ." dùng để: | Báo hiệu phần liệt kê | Báo hiệu lời nói trực tiếp | Kết thúc câu | Ngăn cách chủ ngữ
? Từ nào có nghĩa giống "tổ quốc"? | đất nước | quê nhà | xóm làng | thành phố
? Từ nào trái nghĩa với "dũng cảm"? | hèn nhát | gan dạ | anh dũng | can đảm
+ "Bà như quả ngọt chín rồi" là câu có hình ảnh so sánh.
+ Câu khiến thường có các từ: hãy, đừng, chớ, nào, đi.
- "Ông mặt trời mặc áo giáp đỏ" là câu so sánh.
_ Công cha như núi [Thái Sơn], nghĩa mẹ như nước trong nguồn chảy ra.
= So sánh = Trăng tròn như cái đĩa
= Nhân hoá = Chị gió hát ru cây
= Câu cảm = Ôi, đẹp quá!
= Câu khiến = Hãy giữ gìn vệ sinh!
# Từ chỉ sự vật: dòng sông, ngọn núi, cánh đồng
# Từ chỉ đặc điểm: trong xanh, sừng sững, mênh mông`, 2: `? Câu "Chú gà trống đứng gáy oai vệ như một vị tướng." có mấy biện pháp tu từ? | 2 (nhân hoá và so sánh) | 1 | 0 | 3
? "Thương người như thể thương thân" khuyên ta: | Yêu thương người khác như yêu bản thân | Chỉ thương bản thân | Không cần quan tâm ai | Chăm lo sức khoẻ
? "Tốt gỗ hơn tốt nước sơn" ý nói: | Phẩm chất bên trong quan trọng hơn vẻ ngoài | Gỗ tốt hơn sơn | Nên sơn đồ gỗ | Mua đồ gỗ tốt
? Bộ phận trả lời câu hỏi "Để làm gì?" trong câu "Em chăm chỉ học tập để trở thành người có ích." là: | để trở thành người có ích | Em | chăm chỉ học tập | người có ích
? Bộ phận trả lời câu hỏi "Bằng gì?" trong câu "Ngôi nhà được dựng bằng gỗ lim." là: | bằng gỗ lim | Ngôi nhà | được dựng | gỗ
? Dấu gạch ngang trong đoạn hội thoại dùng để: | Đánh dấu lời nói của nhân vật | Liệt kê | Kết thúc câu | Ngăn cách các vế
? Từ nào viết đúng chính tả? | dịu dàng | rịu ràng | dịu ràng | giịu dàng
+ "Một cây làm chẳng nên non / Ba cây chụm lại nên hòn núi cao" khuyên ta đoàn kết.
+ Câu hỏi "Khi nào?" dùng để hỏi về thời gian.
- "Ăn vóc học hay" chỉ khuyên chúng ta ăn thật nhiều.
_ Không thầy đố mày làm [nên].
_ Học thầy không tày học [bạn].
= Ở đâu? = Chỉ địa điểm
= Khi nào? = Chỉ thời gian
= Vì sao? = Chỉ nguyên nhân
= Để làm gì? = Chỉ mục đích` },  id: 'tieng-viet-3', lop: 3, gens: G, essays: ESSAY, topics: [
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

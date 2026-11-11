/* Tiếng Việt lớp 4 – Kết nối tri thức với cuộc sống. Tên bài theo mục lục SGK; câu hỏi, ngữ liệu luyện tập do PLT-Edu soạn. */
(function () {
  'use strict';
  const TV = PLT.TV;
  const G = { ct: TV.chinhta(['hỏi/ngã', 'l/n', 'r/d/gi', 's/x', 'ch/tr']), tuloai: TV.tuloai(4), kieucau: TV.kieucau(4), thanhphan: TV.thanhphan, trangngu: TV.trangngu, bienphap: TV.bienphap(4), tunghia: TV.tunghia, viethoa: TV.vietHoa, dochieu: TV.dochieu(4) };
  const LT = (s) => `<ul>${s.map((x) => `<li>${x}</li>`).join('')}</ul>`;
  const ESSAY = { 1: [TV.vietdoan(4, [["Viết đoạn văn tả một con vật em yêu thích.", ["con", "lông"]], ["Viết đoạn văn nêu ý kiến về một hoạt động em thích (đọc sách, vẽ, thể thao…).", ["em", "vì"]]]), TV.vietdoan(4, [["Kể lại một câu chuyện em đã đọc hoặc đã nghe.", ["câu chuyện"]], ["Viết đoạn văn tưởng tượng về ước mơ của em khi lớn lên.", ["ước mơ"]]])], 2: [TV.vietdoan(4, [["Viết đoạn văn tả một cây bóng mát hoặc cây hoa em yêu thích.", ["cây", "lá"]], ["Viết đoạn văn giới thiệu một lễ hội hoặc phong tục ở quê em.", ["lễ hội"]]]), TV.vietdoan(4, [["Viết đoạn văn nêu tình cảm, cảm xúc về một người em yêu quý, kính trọng.", ["yêu", "kính"]], ["Viết đoạn văn tả một cảnh đẹp của quê hương, đất nước.", ["đẹp"]]])] };
  TV.build({ nc: { 1: `? Trong câu "Sáng nay, những chú chim sâu nhảy nhót trên cành.", chủ ngữ là: | những chú chim sâu | Sáng nay | nhảy nhót | trên cành
? Trong câu "Mùa xuân, cây gạo gọi đến bao nhiêu là chim.", trạng ngữ chỉ: | Thời gian | Nơi chốn | Nguyên nhân | Mục đích
? Từ nào là danh từ chỉ khái niệm? | lòng tốt | cái bàn | chạy | xanh
? Từ nào là động từ? | suy nghĩ | niềm vui | xinh đẹp | cái bút
? Từ nào là tính từ? | thông minh | học sinh | học tập | trường học
? "Thẳng như ruột ngựa" chỉ người: | Tính tình bộc trực, thẳng thắn | Có bụng to | Đi đường thẳng | Thích nuôi ngựa
? "Gần mực thì đen, gần đèn thì rạng" khuyên ta: | Chọn bạn tốt để chơi | Không chơi với mực | Thắp đèn khi học | Viết bằng mực đen
+ Danh từ riêng phải viết hoa.
+ Trạng ngữ thường đứng đầu câu và ngăn cách với nòng cốt câu bằng dấu phẩy.
- "Hạnh phúc" là tính từ chỉ màu sắc.
_ Dấu ngoặc kép dùng để đánh dấu lời nói trực tiếp hoặc từ ngữ được dùng với ý [đặc biệt].
= Danh từ = Học sinh, sông Hồng, niềm vui
= Động từ = Đọc, chạy, suy nghĩ
= Tính từ = Đỏ thắm, cao vút, hiền lành
# Danh từ: lòng tốt, cánh đồng, sự thật
# Động từ: chạy nhảy, mơ ước, lắng nghe
# Tính từ: rực rỡ, chăm chỉ, mênh mông`, 2: `? Trong câu "Vì trời mưa to, đường phố ngập nước.", bộ phận "Vì trời mưa to" là trạng ngữ chỉ: | Nguyên nhân | Thời gian | Nơi chốn | Mục đích
? Trong câu "Để có sức khoẻ tốt, em tập thể dục mỗi sáng.", trạng ngữ chỉ: | Mục đích | Nguyên nhân | Phương tiện | Thời gian
? Câu "Những chị mây trắng rủ nhau đi chơi." dùng biện pháp: | Nhân hoá | So sánh | Điệp ngữ | Liệt kê
? "Có chí thì nên" có nghĩa gần với câu: | Có công mài sắt, có ngày nên kim | Ăn cháo đá bát | Nước chảy đá mòn là lười | Đứng núi này trông núi nọ
? Vị ngữ trong câu "Bầu trời mùa thu trong xanh và cao vời vợi." là: | trong xanh và cao vời vợi | Bầu trời mùa thu | mùa thu | cao vời vợi
? Từ nào không phải từ ghép? | lấp lánh | bàn ghế | quần áo | sách vở
? Từ "xinh xắn" là: | Từ láy | Từ ghép | Danh từ | Động từ
+ "Nước chảy đá mòn" khuyên ta kiên trì.
+ Từ láy "rì rào" mô phỏng âm thanh.
- Câu "Em học bài." có trạng ngữ.
_ Thất bại là mẹ [thành công].
= Trạng ngữ thời gian = Sáng nay, mùa hè năm ấy
= Trạng ngữ nơi chốn = Trên sân trường, ở quê ngoại
= Trạng ngữ nguyên nhân = Nhờ chăm chỉ, vì ốm
= Trạng ngữ mục đích = Để học giỏi, nhằm bảo vệ môi trường
# Từ láy: rực rỡ, long lanh, thướt tha
# Từ ghép: hoa hồng, nhà cửa, xe đạp` },  id: 'tieng-viet-4', lop: 4, gens: G, essays: ESSAY, topics: [
    { hk: 1, ten: "Mỗi người một vẻ", skills: ["tuloai", "ct", "tunghia", "dochieu"],
      lt: LT(["<b>Danh từ</b>: từ chỉ người, vật, hiện tượng, khái niệm…; danh từ chung, danh từ riêng (viết hoa).", "Đoạn văn: mỗi đoạn có câu chủ đề và các câu nêu ý phát triển.", "Viết đoạn văn tả, kể về một người."]),
      bai: ["Điều kì diệu", "Thi nhạc", "Anh em sinh đôi", "Công chúa và người dẫn chuyện", "Thằn lằn xanh và tắc kè", "Nghệ sĩ trống", "Những bức chân dung", "Đò ngang"] },
    { hk: 1, ten: "Trải nghiệm và khám phá", skills: ["tuloai", "ct", "viethoa", "dochieu"],
      lt: LT(["<b>Động từ</b>: từ chỉ hoạt động, trạng thái.", "Quy tắc viết hoa tên người, tên địa lí Việt Nam và nước ngoài.", "Viết bài văn kể lại câu chuyện."]),
      bai: ["Bầu trời trong quả trứng", "Tiếng nói của cỏ cây", "Tập làm văn", "Nhà phát minh 6 tuổi", "Con vẹt xanh", "Chân trời cuối phố", "Gặt chữ trên non", "Trước ngày xa quê"], on: "Ôn tập và đánh giá giữa học kì 1" },
    { hk: 1, ten: "Niềm vui sáng tạo", skills: ["tuloai", "bienphap", "tunghia", "dochieu"],
      lt: LT(["<b>Tính từ</b>: từ chỉ đặc điểm của sự vật, hoạt động, trạng thái.", "<b>Biện pháp nhân hoá</b>: gọi, tả sự vật bằng từ ngữ chỉ người.", "Viết bài văn thuật lại một sự việc."]),
      bai: ["Vẽ màu", "Đồng cỏ nở hoa", "Thanh âm của núi", "Bầu trời mùa thu", "Làm thỏ con bằng giấy", "Bức tường có nhiều phép lạ", "Bét-tô-ven và bản xô-nát Ánh trăng", "Người tìm đường lên các vì sao"] },
    { hk: 1, ten: "Chắp cánh ước mơ", skills: ["kieucau", "bienphap", "ct", "dochieu"],
      lt: LT(["Câu kể, câu hỏi, câu cảm, câu khiến; dấu ngoặc kép, dấu gạch ngang.", "Viết đoạn văn tưởng tượng; viết thư."]),
      bai: ["Bay cùng ước mơ", "Con trai người làm vườn", "Nếu em có một khu vườn", "Bốn mùa mơ ước", "Ở Vương quốc Tương Lai", "Cánh chim nhỏ", "Nếu chúng mình có phép lạ", "Anh Ba"], on: "Ôn tập và đánh giá cuối học kì 1" },
    { hk: 2, ten: "Sống để yêu thương", skills: ["thanhphan", "tunghia", "ct", "dochieu"],
      lt: LT(["<b>Câu</b> có hai thành phần chính: <b>chủ ngữ</b> (Ai? Cái gì? Con gì?) và <b>vị ngữ</b> (Làm gì? Thế nào? Là gì?).", "Từ ngữ về lòng nhân ái, sẻ chia.", "Viết đoạn văn nêu tình cảm, cảm xúc về một người."]),
      bai: ["Hải Thượng Lãn Ông", "Vệt phấn trên mặt bàn", "Ông Bụt đã đến", "Quả ngọt cuối mùa", "Tờ báo tường của tôi", "Tiếng ru", "Con muốn làm một cái cây", "Trên khóm tre đầu ngõ"] },
    { hk: 2, ten: "Uống nước nhớ nguồn", skills: ["trangngu", "thanhphan", "viethoa", "dochieu"],
      lt: LT(["<b>Trạng ngữ</b> bổ sung thông tin về thời gian, nơi chốn, nguyên nhân, mục đích, phương tiện.", "Từ ngữ về truyền thống, biết ơn.", "Viết đoạn văn giới thiệu nhân vật lịch sử, nêu ý kiến."]),
      bai: ["Sự tích con Rồng cháu Tiên", "Cảm xúc Trường Sa", "Sáng tháng Năm", "Chàng trai làng Phù Ủng", "Vườn của ông tôi", "Trong lời mẹ hát", "Người thầy đầu tiên của bố tôi", "Ngựa biên phòng"], on: "Ôn tập và đánh giá giữa học kì 2" },
    { hk: 2, ten: "Quê hương trong tôi", skills: ["bienphap", "trangngu", "tunghia", "dochieu"],
      lt: LT(["Biện pháp so sánh, nhân hoá trong văn miêu tả cảnh vật.", "Từ ngữ về quê hương, cảnh đẹp đất nước.", "Viết bài văn miêu tả cây cối, cảnh vật."]),
      bai: ["Cây đa quê hương", "Bước mùa xuân", "Đi hội chùa Hương", "Chiều ngoại ô", "Những cánh buồm", "Cái cầu", "Đường đi Sa Pa", "Quê ngoại"] },
    { hk: 2, ten: "Vì một thế giới bình yên", skills: ["kieucau", "thanhphan", "viethoa", "dochieu"],
      lt: LT(["Từ ngữ về hòa bình, hữu nghị, bảo vệ môi trường.", "Viết hoa tên nước ngoài; câu khiến, lời kêu gọi.", "Viết bài giới thiệu một địa điểm du lịch, lễ hội."]),
      bai: ["Khu bảo tồn động vật hoang dã Ngô-rông-gô-rô", "Ngôi nhà của yêu thương", "Băng tan", "Chuyến du lịch thú vị", "Lễ hội ở Nhật Bản", "Ngày hội"], on: "Ôn tập và đánh giá cuối năm học" }
  ] });
})();

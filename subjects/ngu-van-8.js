/* Ngữ văn 8 – KNTT. Tên bài học, văn bản theo mục lục SGK; câu hỏi, ngữ liệu luyện tập do PLT-Edu soạn. */
(function () {
  const TV = PLT.TV;
  PLT.KB.build({
    id: 'ngu-van-8', lop: 8, mon: 'Ngữ văn', icon: '📖', nhan: 'Bài', so: false, essayMax: 2,
    topics: [
      { hk: 1, ten: 'Câu chuyện của lịch sử', bai: ['Lá cờ thêu sáu chữ vàng (Nguyễn Huy Tưởng)', 'Quang Trung đại phá quân Thanh (trích Hoàng Lê nhất thống chí – Ngô gia văn phái)', 'Ta đi tới (Tố Hữu)', 'Thực hành tiếng Việt: Từ tượng hình, từ tượng thanh', 'Viết: Kể lại một chuyến đi tham quan di tích lịch sử, văn hoá', 'Nói và nghe: Giới thiệu một cuốn truyện lịch sử'],
        lt: ['<b>Truyện lịch sử</b>: tái hiện sự kiện, nhân vật lịch sử bằng hư cấu nghệ thuật; có bối cảnh, cốt truyện, nhân vật, ngôn ngữ phù hợp thời đại.', '"Lá cờ thêu sáu chữ vàng" (Nguyễn Huy Tưởng): người anh hùng nhỏ tuổi <b>Trần Quốc Toản</b> bóp nát quả cam, thêu cờ "Phá cường địch, báo hoàng ân".', '"Hoàng Lê nhất thống chí" (Ngô gia văn phái, tiểu thuyết chương hồi chữ Hán): hình tượng <b>Quang Trung – Nguyễn Huệ</b> đại phá 29 vạn quân Thanh mùa xuân 1789.', '<b>Từ tượng hình</b>: gợi hình ảnh, dáng vẻ (lom khom, lênh khênh); <b>từ tượng thanh</b>: mô phỏng âm thanh (róc rách, ào ào).'],
        q: `? Nhân vật chính trong "Lá cờ thêu sáu chữ vàng" là: | Trần Quốc Toản | Trần Hưng Đạo | Quang Trung | Lê Lợi
? Sáu chữ vàng trên lá cờ của Trần Quốc Toản là: | Phá cường địch, báo hoàng ân | Sát Thát | Nam quốc sơn hà | Vì dân vì nước
? "Hoàng Lê nhất thống chí" là tác phẩm của: | Ngô gia văn phái | Nguyễn Huy Tưởng | Nguyễn Du | Tố Hữu
? Quang Trung đại phá quân Thanh vào mùa xuân năm: | 1789 | 1288 | 1427 | 1954
? Từ nào là từ tượng thanh? | Róc rách | Lom khom | Lênh khênh | Lấp ló
? Từ nào là từ tượng hình? | Lom khom | Ào ào | Rì rầm | Lộp độp
+ Từ tượng hình gợi tả hình ảnh, dáng vẻ, trạng thái của sự vật.
+ Truyện lịch sử có thể có yếu tố hư cấu.
- "Hoàng Lê nhất thống chí" được viết bằng chữ Quốc ngữ từ đầu.
- Từ "ào ào" là từ tượng hình.
# Từ tượng hình: Lom khom, Lênh khênh, Lấp ló, Thướt tha
# Từ tượng thanh: Róc rách, Ào ào, Lộp độp, Rì rầm
= Nguyễn Huy Tưởng = Lá cờ thêu sáu chữ vàng
= Ngô gia văn phái = Hoàng Lê nhất thống chí
= Tố Hữu = Ta đi tới
= Thái Bá Lợi = Minh sư` },
      { hk: 1, ten: 'Vẻ đẹp cổ điển', bai: ['Thu điếu (Nguyễn Khuyến)', 'Thiên Trường vãn vọng (Trần Nhân Tông)', 'Ca Huế trên sông Hương (Hà Ánh Minh)', 'Thực hành tiếng Việt: Đảo ngữ; câu hỏi tu từ', 'Viết: Phân tích bài thơ thất ngôn bát cú hoặc tứ tuyệt Đường luật', 'Nói và nghe: Ý kiến về sản phẩm văn hoá truyền thống trong cuộc sống hiện tại'],
        lt: ['<b>Thơ Đường luật</b>: <b>thất ngôn bát cú</b> (8 câu, mỗi câu 7 chữ; bố cục đề – thực – luận – kết; hai cặp câu thực, luận đối nhau) và <b>tứ tuyệt</b> (4 câu).', '"Thu điếu" (Nguyễn Khuyến): mùa thu làng quê Bắc Bộ trong trẻo, tĩnh lặng; nỗi niềm thời thế.', '"Thiên Trường vãn vọng" (Trần Nhân Tông): cảnh chiều quê thanh bình ở phủ Thiên Trường.', '"Ca Huế trên sông Hương": vẻ đẹp nghệ thuật ca Huế.', '<b>Đảo ngữ</b>: thay đổi trật tự cú pháp thông thường để nhấn mạnh; <b>câu hỏi tu từ</b>: hỏi nhưng không cần trả lời, để bộc lộ cảm xúc.'],
        q: `? Bài thơ thất ngôn bát cú có: | 8 câu, mỗi câu 7 chữ | 4 câu, mỗi câu 7 chữ | 8 câu, mỗi câu 5 chữ | 6 câu, mỗi câu 8 chữ
? Bố cục thơ thất ngôn bát cú Đường luật gồm: | Đề – thực – luận – kết | Mở – thân – kết | Khai – thừa – chuyển – hợp | Khởi – kết
? "Thu điếu" là bài thơ của: | Nguyễn Khuyến | Trần Tế Xương | Bà Huyện Thanh Quan | Trần Nhân Tông
? "Thiên Trường vãn vọng" là bài thơ của: | Trần Nhân Tông | Nguyễn Trãi | Lý Thường Kiệt | Hồ Xuân Hương
? Câu "Lom khom dưới núi tiều vài chú" sử dụng biện pháp: | Đảo ngữ | Hoán dụ | So sánh | Nói giảm
+ Thơ tứ tuyệt có 4 câu.
+ Câu hỏi tu từ không nhằm mục đích lấy thông tin.
- Thơ thất ngôn bát cú có 6 câu.
- "Qua Đèo Ngang" là bài thơ của Nguyễn Khuyến.
= Nguyễn Khuyến = Thu điếu
= Trần Nhân Tông = Thiên Trường vãn vọng
= Bà Huyện Thanh Quan = Qua Đèo Ngang
= Hà Ánh Minh = Ca Huế trên sông Hương
> Đề > Thực > Luận > Kết`, fns: { bp: TV.bienphap(5) } },
      { hk: 1, ten: 'Lời sông núi', bai: ['Hịch tướng sĩ (Trần Quốc Tuấn)', 'Tinh thần yêu nước của nhân dân ta (Hồ Chí Minh)', 'Nam quốc sơn hà', 'Thực hành tiếng Việt: Từ Hán Việt; câu phân loại theo mục đích nói', 'Viết: Nghị luận về con người trong mối quan hệ với cộng đồng, đất nước', 'Nói và nghe: Ý thức trách nhiệm với cộng đồng của học sinh'],
        lt: ['<b>Văn nghị luận</b> (văn nghị luận trung đại và hiện đại): luận đề, luận điểm, lí lẽ, bằng chứng.', '"Hịch tướng sĩ" (Trần Quốc Tuấn, 1285): khích lệ tướng sĩ học tập binh thư, chống quân Mông – Nguyên.', '"Tinh thần yêu nước của nhân dân ta" (Hồ Chí Minh, 1951): "Dân ta có một lòng nồng nàn yêu nước. Đó là một truyền thống quý báu của ta".', '"Nam quốc sơn hà": được coi là bản <b>Tuyên ngôn độc lập</b> đầu tiên của dân tộc.', 'Câu phân loại theo mục đích: <b>câu kể, câu hỏi, câu khiến, câu cảm</b>.'],
        q: `? "Hịch tướng sĩ" là tác phẩm của: | Trần Quốc Tuấn | Lý Thường Kiệt | Nguyễn Trãi | Lý Công Uẩn
? Bài thơ được coi là bản Tuyên ngôn độc lập đầu tiên của dân tộc là: | Nam quốc sơn hà | Bình Ngô đại cáo | Hịch tướng sĩ | Chiếu dời đô
? "Chiếu dời đô" là tác phẩm của: | Lý Công Uẩn | Trần Quốc Tuấn | Hồ Chí Minh | Nguyễn Trãi
? Hịch là thể văn: | Nghị luận thời xưa, dùng để kêu gọi, cổ vũ | Tự sự | Trữ tình | Thông báo hành chính hiện đại
? Câu "Hãy giữ gìn sách vở cẩn thận!" là câu: | Câu khiến | Câu kể | Câu hỏi | Câu cảm
? Từ nào là từ Hán Việt? | Giang sơn | Sông núi | Nhà cửa | Đất nước
+ "Tinh thần yêu nước của nhân dân ta" khẳng định yêu nước là truyền thống quý báu.
+ Văn nghị luận cần có lí lẽ và bằng chứng thuyết phục.
- "Hịch tướng sĩ" ra đời trong kháng chiến chống quân Minh.
- Câu cảm chủ yếu dùng để hỏi thông tin.
= Trần Quốc Tuấn = Hịch tướng sĩ
= Hồ Chí Minh = Tinh thần yêu nước của nhân dân ta
= Lý Công Uẩn = Chiếu dời đô
= Giang sơn = Sông núi
= Phụ mẫu = Cha mẹ
= Thiên địa = Trời đất` },
      { hk: 1, ten: 'Tiếng cười trào phúng trong thơ', bai: ['Lễ xướng danh khoa Đinh Dậu (Trần Tế Xương)', 'Lai Tân (Hồ Chí Minh)', 'Một số giọng điệu của tiếng cười trong thơ trào phúng (Trần Thị Hoa Lê)', 'Thực hành tiếng Việt: Nghĩa tường minh và hàm ý', 'Viết: Phân tích một bài thơ trào phúng', 'Nói và nghe: Ý nghĩa của tiếng cười trong đời sống'],
        lt: ['<b>Thơ trào phúng</b>: dùng tiếng cười để châm biếm, đả kích thói hư tật xấu, hiện tượng xã hội đáng phê phán.', '"Lễ xướng danh khoa Đinh Dậu" (Tú Xương): cảnh thi cử nhốn nháo, nhục nhã dưới thời thực dân.', '"Lai Tân" (Hồ Chí Minh, trong <i>Nhật kí trong tù</i>): châm biếm bộ máy quan lại thối nát ở Lai Tân.', '<b>Nghĩa tường minh</b>: được diễn đạt trực tiếp bằng từ ngữ; <b>hàm ý</b>: không nói trực tiếp, người nghe phải suy ra.'],
        q: `? "Lễ xướng danh khoa Đinh Dậu" là bài thơ của: | Trần Tế Xương | Nguyễn Khuyến | Hồ Chí Minh | Nguyễn Công Trứ
? "Lai Tân" nằm trong tập thơ: | Nhật kí trong tù | Từ ấy | Việt Bắc | Quốc âm thi tập
? Mục đích chủ yếu của thơ trào phúng là: | Châm biếm, phê phán thói hư tật xấu | Ca ngợi thiên nhiên | Kể chuyện cổ tích | Thuyết minh sự vật
? Nội dung không nói trực tiếp mà người nghe tự suy ra gọi là: | Hàm ý | Nghĩa tường minh | Nghĩa gốc | Từ đồng âm
+ "Vịnh cây vông" là bài thơ của Nguyễn Công Trứ.
- Thơ trào phúng chỉ dùng để ca ngợi.
= Trần Tế Xương = Lễ xướng danh khoa Đinh Dậu
= Hồ Chí Minh = Lai Tân
= Nguyễn Công Trứ = Vịnh cây vông` },
      { hk: 1, ten: 'Những câu chuyện hài', bai: ['Trưởng giả học làm sang (Mô-li-e)', 'Chùm truyện cười dân gian Việt Nam', 'Chùm ca dao trào phúng', 'Thực hành tiếng Việt: Trợ từ, thán từ', 'Viết: Nghị luận về một thói xấu của con người trong xã hội hiện đại', 'Nói và nghe: Trình bày ý kiến về một thói xấu'], on: 'Ôn tập học kì I',
        lt: ['<b>Hài kịch</b>: thể loại kịch dùng tiếng cười phê phán cái xấu; "Trưởng giả học làm sang" (Mô-li-e, Pháp): ông Giuốc-đanh dốt nát muốn học đòi làm quý tộc.', '<b>Truyện cười</b>: gây cười để giải trí hoặc phê phán thói xấu (keo kiệt, khoác lác, lười biếng…).', '<b>Trợ từ</b>: nhấn mạnh hoặc biểu thị thái độ (những, có, chính, đích, ngay); <b>thán từ</b>: bộc lộ cảm xúc hoặc gọi đáp (ôi, chao ôi, này, vâng, dạ).'],
        q: `? "Trưởng giả học làm sang" là vở hài kịch của: | Mô-li-e | Sếch-xpia | Pau-xtốp-xki | A-dít Ne-xin
? Nhân vật ông Giuốc-đanh bị phê phán vì: | Dốt nát mà học đòi làm sang | Tốt bụng | Dũng cảm | Chăm học
? Từ nào là thán từ? | Ôi | Những | Chính | Ngay
? Trong câu "Chính bạn ấy đã giúp tôi", từ "chính" là: | Trợ từ | Thán từ | Danh từ | Quan hệ từ
+ Truyện cười dân gian thường phê phán thói xấu trong xã hội.
- Thán từ dùng để nối các vế câu.
# Trợ từ: Những, Chính, Đích, Ngay
# Thán từ: Ôi, Chao ôi, Này, Vâng` },
      { hk: 2, ten: 'Chân dung cuộc sống', bai: ['Mắt sói (Đa-ni-en Pen-nắc)', 'Lặng lẽ Sa Pa (Nguyễn Thành Long)', 'Bếp lửa (Bằng Việt)', 'Thực hành tiếng Việt: Đoạn văn diễn dịch, quy nạp, song song, phối hợp', 'Viết: Phân tích một tác phẩm truyện', 'Nói và nghe: Giới thiệu về một cuốn sách (truyện)'],
        lt: ['"Lặng lẽ Sa Pa" (Nguyễn Thành Long): <b>anh thanh niên</b> làm công tác khí tượng một mình trên đỉnh Yên Sơn — vẻ đẹp người lao động thầm lặng.', '"Bếp lửa" (Bằng Việt): hình ảnh bếp lửa gắn với người bà, tình bà cháu.', '"Chiếc lá cuối cùng" (O. Hen-ry): cụ Bơ-men vẽ chiếc lá cứu sống Giôn-xi.', 'Đoạn văn <b>diễn dịch</b> (câu chủ đề ở đầu), <b>quy nạp</b> (câu chủ đề ở cuối), <b>song song</b> (các câu ngang hàng), <b>phối hợp</b> (chủ đề ở đầu và cuối).'],
        q: `? Nhân vật chính trong "Lặng lẽ Sa Pa" là: | Anh thanh niên làm công tác khí tượng | Ông hoạ sĩ già | Cô kĩ sư | Bác lái xe
? "Bếp lửa" là bài thơ của: | Bằng Việt | Chính Hữu | Phạm Tiến Duật | Nguyễn Đình Thi
? Trong "Chiếc lá cuối cùng", người vẽ chiếc lá là: | Cụ Bơ-men | Xiu | Giôn-xi | Bác sĩ
? Đoạn văn có câu chủ đề đứng đầu đoạn là đoạn: | Diễn dịch | Quy nạp | Song song | Phối hợp
? Đoạn văn có câu chủ đề đứng cuối đoạn là đoạn: | Quy nạp | Diễn dịch | Song song | Liệt kê
+ "Lặng lẽ Sa Pa" ca ngợi vẻ đẹp của những người lao động thầm lặng.
- "Chiếc lá cuối cùng" là tác phẩm của Mô-li-e.
= Nguyễn Thành Long = Lặng lẽ Sa Pa
= Bằng Việt = Bếp lửa
= O. Hen-ry = Chiếc lá cuối cùng
= Đa-ni-en Pen-nắc = Mắt sói` },
      { hk: 2, ten: 'Tin yêu và ước vọng', bai: ['Đồng chí (Chính Hữu)', 'Lá đỏ (Nguyễn Đình Thi)', 'Những ngôi sao xa xôi (Lê Minh Khuê)', 'Thực hành tiếng Việt: Câu khẳng định và câu phủ định', 'Viết: Tập làm thơ tự do; đoạn văn cảm nghĩ về bài thơ tự do', 'Nói và nghe: Thảo luận vấn đề đời sống phù hợp lứa tuổi'],
        lt: ['<b>Thơ tự do</b>: không giới hạn số tiếng mỗi dòng, số dòng mỗi khổ; vần, nhịp linh hoạt.', '"Đồng chí" (Chính Hữu, 1948): tình đồng chí của người lính thời kháng chiến chống Pháp; hình ảnh "Đầu súng trăng treo".', '"Bài thơ về tiểu đội xe không kính" (Phạm Tiến Duật): người lính lái xe Trường Sơn trẻ trung, lạc quan.', '"Những ngôi sao xa xôi" (Lê Minh Khuê): ba cô gái thanh niên xung phong (Phương Định, Thao, Nho) trên cao điểm.'],
        q: `? "Đồng chí" là bài thơ của: | Chính Hữu | Phạm Tiến Duật | Bằng Việt | Nguyễn Đình Thi
? Hình ảnh kết thúc bài thơ "Đồng chí" là: | Đầu súng trăng treo | Bếp lửa | Chiếc lá cuối cùng | Xe không kính
? "Những ngôi sao xa xôi" viết về: | Ba cô gái thanh niên xung phong | Người lính lái xe | Anh thanh niên ở Sa Pa | Người bà và cháu
? Tác giả "Bài thơ về tiểu đội xe không kính" là: | Phạm Tiến Duật | Chính Hữu | Tố Hữu | Huy Cận
? Thơ tự do có đặc điểm: | Không giới hạn số tiếng mỗi dòng | Mỗi dòng đúng 7 tiếng | Luôn có 4 dòng | Bắt buộc gieo vần lưng
+ Câu phủ định thường chứa các từ: không, chẳng, chưa…
- "Đồng chí" viết về người lính thời chống Mỹ.
= Chính Hữu = Đồng chí
= Phạm Tiến Duật = Bài thơ về tiểu đội xe không kính
= Lê Minh Khuê = Những ngôi sao xa xôi
= Nguyễn Đình Thi = Lá đỏ` },
      { hk: 2, ten: 'Nhà văn và trang viết', bai: ['Nhà thơ của quê hương làng cảnh Việt Nam (Xuân Diệu)', 'Đọc văn – cuộc chơi tìm ý nghĩa (Trần Đình Sử)', 'Xe đêm (Côn-xtan-tin Pau-xtốp-xki)', 'Thực hành tiếng Việt: Thành phần biệt lập', 'Viết: Phân tích một tác phẩm truyện', 'Nói và nghe: Văn học trong đời sống hiện nay'],
        lt: ['<b>Văn bản nghị luận văn học</b>: phân tích, đánh giá tác phẩm, tác giả; luận điểm, lí lẽ, bằng chứng lấy từ tác phẩm.', '"Nhà thơ của quê hương làng cảnh Việt Nam" (Xuân Diệu): bàn về thơ Nguyễn Khuyến.', '<b>Thành phần biệt lập</b>: tình thái (chắc chắn, hình như), cảm thán (ôi, trời ơi), gọi – đáp (này, thưa ông), phụ chú (đặt giữa dấu gạch ngang, dấu ngoặc).'],
        q: `? Văn bản "Nhà thơ của quê hương làng cảnh Việt Nam" bàn về thơ của: | Nguyễn Khuyến | Tú Xương | Tố Hữu | Xuân Diệu
? Trong câu "Hình như trời sắp mưa", "hình như" là thành phần: | Tình thái | Cảm thán | Gọi – đáp | Phụ chú
? Trong câu "Này, bạn đi đâu đấy?", "này" là thành phần: | Gọi – đáp | Tình thái | Phụ chú | Chủ ngữ
? Bằng chứng trong văn nghị luận văn học chủ yếu lấy từ: | Tác phẩm được bàn luận | Báo chí kinh tế | Số liệu thống kê | Truyện cười
+ Thành phần phụ chú thường đặt giữa dấu gạch ngang hoặc dấu ngoặc đơn.
- Thành phần biệt lập là chủ ngữ của câu.
# Tình thái: Chắc chắn, Hình như, Có lẽ
# Cảm thán: Ôi, Trời ơi, Chao ôi
# Gọi – đáp: Này, Thưa ông, Vâng` },
      { hk: 2, ten: 'Hôm nay và ngày mai', bai: ['Miền châu thổ sông Cửu Long cần chuyển đổi từ sống chung sang chào đón lũ (Lê Anh Tuấn)', 'Choáng ngợp và đau đớn những cảnh báo từ loạt phim "Hành tinh của chúng ta" (Lâm Lê)', 'Diễn từ ứng khẩu của thủ lĩnh da đỏ Xi-át-tơn', 'Thực hành tiếng Việt: Câu ghép; dấu câu', 'Viết: Thuyết minh giải thích một hiện tượng tự nhiên; văn bản kiến nghị', 'Nói và nghe: Tổ chức hợp lí nề nếp sinh hoạt của bản thân'],
        lt: ['Văn bản nghị luận xã hội và thông tin về môi trường, biến đổi khí hậu, quan hệ con người – tự nhiên.', '<b>Văn bản thuyết minh giải thích hiện tượng tự nhiên</b>: nêu hiện tượng, giải thích nguyên nhân, quá trình, ảnh hưởng.', '<b>Văn bản kiến nghị</b>: quốc hiệu, tiêu ngữ; tên văn bản; nơi nhận; người kiến nghị; nội dung, lí do kiến nghị; chữ kí.'],
        q: `? Văn bản về miền châu thổ sông Cửu Long đề xuất chuyển từ "sống chung với lũ" sang: | Chào đón lũ | Ngăn chặn lũ hoàn toàn | Bỏ mặc lũ | Di dời hết dân
? Văn bản kiến nghị dùng để: | Đề xuất ý kiến với cơ quan, người có thẩm quyền | Kể chuyện | Bày tỏ cảm xúc | Quảng cáo
? Thuyết minh giải thích hiện tượng tự nhiên cần nêu: | Hiện tượng, nguyên nhân, quá trình, ảnh hưởng | Cảm xúc cá nhân | Tiểu sử tác giả | Lời thoại
+ Diễn từ của thủ lĩnh Xi-át-tơn thể hiện tình yêu thiên nhiên, quê hương.
- Văn bản kiến nghị không cần ghi nơi nhận.
> Quốc hiệu, tiêu ngữ > Tên văn bản > Nơi nhận > Người kiến nghị > Nội dung và lí do > Chữ kí, họ tên` },
      { hk: 2, ten: 'Sách – người bạn đồng hành', bai: ['Đọc: Đọc như một hành trình', 'Viết: Kết nối cộng đồng người đọc', 'Nói và nghe: Ngày hội với sách'], on: 'Ôn tập học kì II',
        lt: ['Tự đọc sách theo thể loại; ghi chép, chia sẻ cảm nhận; lập câu lạc bộ đọc sách.'],
        q: `? Cách đọc sách hiệu quả là: | Đặt mục tiêu, ghi chép, suy ngẫm và chia sẻ | Chỉ đọc bìa sách | Đọc lướt không suy nghĩ | Đọc khi buồn ngủ
+ Chia sẻ cảm nhận về sách giúp lan toả văn hoá đọc.
- Chỉ sách giáo khoa mới có giá trị.
# Thơ: Đồng chí, Bếp lửa, Thu điếu
# Truyện: Lặng lẽ Sa Pa, Những ngôi sao xa xôi, Chiếc lá cuối cùng
# Nghị luận: Hịch tướng sĩ, Chiếu dời đô, Tinh thần yêu nước của nhân dân ta`, fns: { dh: TV.dochieu(5) } }
    ],
    essays: {
      1: [['Phân tích bài thơ "Thu điếu" của Nguyễn Khuyến.', ['thu', 'ao', 'tĩnh lặng', 'tâm trạng'], 'Giới thiệu tác giả, tác phẩm; phân tích cảnh thu (ao thu, chiếc thuyền, sóng biếc, lá vàng, trời xanh) trong trẻo, tĩnh lặng; tâm trạng nhà thơ (cô đơn, nỗi niềm thời thế); nghệ thuật (gieo vần "eo", lấy động tả tĩnh); đánh giá.', 8],
        ['Viết bài văn nghị luận về trách nhiệm của học sinh với cộng đồng.', ['trách nhiệm', 'cộng đồng', 'lí lẽ', 'bằng chứng'], 'Nêu vấn đề; giải thích; biểu hiện của trách nhiệm (giữ gìn môi trường, thiện nguyện, tuân thủ pháp luật); ý nghĩa; phê phán biểu hiện thờ ơ; bài học hành động.', 8]],
      2: [['Phân tích nhân vật anh thanh niên trong "Lặng lẽ Sa Pa".', ['anh thanh niên', 'công việc', 'phẩm chất'], 'Hoàn cảnh sống và làm việc một mình trên đỉnh Yên Sơn; phẩm chất: yêu nghề, có trách nhiệm, sống ngăn nắp, cởi mở, hiếu khách, khiêm tốn; nghệ thuật xây dựng nhân vật; ý nghĩa: vẻ đẹp người lao động thầm lặng.', 8],
        ['Viết văn bản kiến nghị gửi Ban giám hiệu về việc tăng cường cây xanh trong trường.', ['kiến nghị', 'cây xanh', 'lí do'], 'Đúng thể thức: quốc hiệu, tiêu ngữ, tên văn bản, nơi nhận, người kiến nghị; nêu thực trạng, lí do, đề xuất cụ thể (trồng thêm cây, phân công chăm sóc), cam kết; chữ kí.', 6]]
    }
  });
})();

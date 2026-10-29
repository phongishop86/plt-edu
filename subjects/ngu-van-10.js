/* Ngữ văn 10 – KNTT. Tên bài học, văn bản theo mục lục SGK; câu hỏi do PLT-Edu soạn. */
(function () {
  const TV = PLT.TV;
  PLT.KB.build({
    id: 'ngu-van-10', lop: 10, mon: 'Ngữ văn', icon: '📖', nhan: 'Bài', so: false, essayMax: 2,
    topics: [
      { hk: 1, ten: 'Sức hấp dẫn của truyện kể', bai: ['Truyện về các vị thần sáng tạo thế giới (Thần thoại Việt Nam)', 'Tản Viên từ Phán sự lục (Nguyễn Dữ)', 'Chữ người tử tù (Nguyễn Tuân)', 'Thực hành tiếng Việt: Sử dụng từ Hán Việt', 'Viết: Nghị luận phân tích, đánh giá một tác phẩm truyện', 'Nói và nghe: Giới thiệu, đánh giá nội dung và nghệ thuật của một tác phẩm truyện'],
        lt: ['<b>Thần thoại</b>: truyện kể dân gian về các vị thần, giải thích nguồn gốc thế giới, tự nhiên; nhân vật thần có sức mạnh phi thường.', '"Tản Viên từ Phán sự lục" (Nguyễn Dữ, <i>Truyền kì mạn lục</i>): Ngô Tử Văn đốt đền tà, đấu tranh với hồn tướng giặc — đề cao chính nghĩa, tinh thần khảng khái.', '"Chữ người tử tù" (Nguyễn Tuân, tập <i>Vang bóng một thời</i>): cảnh cho chữ "xưa nay chưa từng có" — tôn vinh cái đẹp, thiên lương của Huấn Cao và viên quản ngục.'],
        q: `? "Chữ người tử tù" in trong tập truyện: | Vang bóng một thời | Truyền kì mạn lục | Dế Mèn phiêu lưu kí | Số đỏ
? Nhân vật chính trong "Tản Viên từ Phán sự lục" là: | Ngô Tử Văn | Huấn Cao | Trương Sinh | Từ Thức
? Cảnh cho chữ trong "Chữ người tử tù" được miêu tả là: | Cảnh tượng xưa nay chưa từng có | Cảnh bình thường | Cảnh lễ hội | Cảnh chợ quê
? Thần thoại thường giải thích: | Nguồn gốc thế giới và các hiện tượng tự nhiên | Chuyện tình yêu đôi lứa | Chuyện cười | Chuyện lịch sử có thật
+ Huấn Cao là người có tài, có khí phách và thiên lương trong sáng.
- Nguyễn Dữ là tác giả "Vang bóng một thời".
= Nguyễn Tuân = Chữ người tử tù
= Nguyễn Dữ = Tản Viên từ Phán sự lục
= Thần thoại = Truyện về các vị thần
? Không gian trong thần thoại thường là: | Không gian vũ trụ rộng lớn, chưa phân định | Phố phường hiện đại | Lớp học | Nhà máy
? Truyện truyền kì là thể loại văn xuôi tự sự thời: | Trung đại | Hiện đại | Cổ đại Hy Lạp | Đương đại
? Chi tiết "viên quản ngục khúm núm vái lạy" thể hiện: | Sự cảm phục trước cái đẹp, thiên lương | Sự sợ hãi quan trên | Sự khinh bỉ | Sự giận dữ
+ Ngôi kể thứ ba giúp người kể bao quát toàn bộ câu chuyện.
- Truyện thần thoại có tác giả xác định.` },
      { hk: 1, ten: 'Vẻ đẹp của thơ ca', bai: ['Chùm thơ hai-cư Nhật Bản', 'Thu hứng (Đỗ Phủ)', 'Mùa xuân chín (Hàn Mặc Tử)', 'Bản hoà âm ngôn từ trong "Tiếng thu" của Lưu Trọng Lư (Chu Văn Sơn)', 'Thực hành tiếng Việt: Lỗi dùng từ, lỗi về trật tự từ và cách sửa', 'Viết: Nghị luận phân tích, đánh giá một tác phẩm thơ'],
        lt: ['<b>Thơ hai-cư</b> (haiku): thể thơ Nhật Bản ngắn nhất, 17 âm tiết (5–7–5), thường có từ chỉ mùa (quý ngữ).', '"Thu hứng" (Đỗ Phủ): thơ Đường luật thất ngôn bát cú; cảnh thu hiu hắt và nỗi nhớ quê, lo nước.', '"Mùa xuân chín" (Hàn Mặc Tử): bức tranh xuân tươi sáng, rạo rực, thoáng buồn.'],
        q: `? Thơ hai-cư có xuất xứ từ: | Nhật Bản | Trung Quốc | Ấn Độ | Pháp
? Một bài thơ hai-cư thường gồm bao nhiêu âm tiết? | 17 | 14 | 20 | 28
? "Thu hứng" là sáng tác của nhà thơ: | Đỗ Phủ | Lý Bạch | Bạch Cư Dị | Vương Duy
? "Mùa xuân chín" là bài thơ của: | Hàn Mặc Tử | Xuân Diệu | Lưu Trọng Lư | Huy Cận
+ Thơ hai-cư thường có quý ngữ (từ chỉ mùa).
- "Thu hứng" được viết theo thể lục bát.
? Đặc trưng của thơ Đường luật thất ngôn bát cú là: | 8 câu, mỗi câu 7 chữ, niêm luật chặt chẽ | 4 câu 5 chữ | Không có vần | Số câu tự do
? Từ chỉ mùa trong thơ hai-cư gọi là: | Quý ngữ | Điển cố | Thi liệu | Điệp ngữ
? "Tiếng thu" là bài thơ của: | Lưu Trọng Lư | Hàn Mặc Tử | Xuân Diệu | Huy Cận
+ Hàn Mặc Tử là nhà thơ tiêu biểu của phong trào Thơ mới.
- Thơ hai-cư thường rất dài, nhiều khổ.`, fns: { bp: TV.bienphap(5) } },
      { hk: 1, ten: 'Nghệ thuật thuyết phục trong văn nghị luận', bai: ['Hiền tài là nguyên khí của quốc gia (Thân Nhân Trung)', 'Yêu và đồng cảm (Phong Tử Khải)', 'Chữ bầu lên nhà thơ (Lê Đạt)', 'Thực hành tiếng Việt: Lỗi về mạch lạc và liên kết', 'Viết: Nghị luận về một vấn đề xã hội', 'Nói và nghe: Thảo luận về một vấn đề xã hội'],
        lt: ['Văn nghị luận thuyết phục bằng: luận điểm rõ, lí lẽ chặt chẽ, bằng chứng tin cậy, cảm xúc và thái độ người viết.', '"Hiền tài là nguyên khí của quốc gia" (Thân Nhân Trung, trích bài kí đề danh tiến sĩ năm 1442): khẳng định vai trò của hiền tài với vận mệnh đất nước.', '"Chữ bầu lên nhà thơ" (Lê Đạt): nhà thơ phải lao động chữ, không phải "thiên phú".'],
        q: `? "Hiền tài là nguyên khí của quốc gia" là câu nói của: | Thân Nhân Trung | Nguyễn Trãi | Lê Lợi | Lý Công Uẩn
? "Nguyên khí" trong câu "Hiền tài là nguyên khí của quốc gia" có nghĩa là: | Khí chất ban đầu làm nên sự sống còn, phát triển | Không khí | Sức khoẻ | Tiền bạc
? Yếu tố cốt lõi làm nên sức thuyết phục của bài nghị luận là: | Lí lẽ chặt chẽ và bằng chứng xác đáng | Câu văn thật dài | Nhiều từ ngữ khó | Kể chuyện cười
+ Bằng chứng trong văn nghị luận cần xác thực, tiêu biểu.
- Văn nghị luận không cần luận điểm.
_ Hiền tài là [nguyên khí] của quốc gia.
? Luận đề là: | Vấn đề chính được bàn luận trong văn bản nghị luận | Một bằng chứng | Một câu cảm thán | Tên tác giả
? Lỗi lặp từ làm câu văn: | Nặng nề, thiếu mạch lạc | Hay hơn | Rõ nghĩa hơn | Có vần
? "Yêu và đồng cảm" là bài viết của tác giả nước: | Trung Quốc | Nhật Bản | Pháp | Nga
+ Mạch lạc là sự sắp xếp hợp lí các ý trong văn bản.
- Liên kết không cần thiết trong đoạn văn.` },
      { hk: 1, ten: 'Sức sống của sử thi', bai: ['Đọc hiểu sử thi Hy Lạp, Ấn Độ và sử thi Tây Nguyên', 'Thực hành tiếng Việt: Sử dụng trích dẫn, cước chú', 'Viết: Báo cáo nghiên cứu về một vấn đề', 'Nói và nghe: Trình bày báo cáo kết quả nghiên cứu'],
        lt: ['<b>Sử thi</b>: tác phẩm tự sự dân gian quy mô lớn, kể về người anh hùng đại diện cho sức mạnh và lí tưởng cộng đồng.', 'Đặc điểm: nhân vật anh hùng phi thường, không gian rộng lớn, ngôn ngữ trang trọng, nhiều so sánh, phóng đại, lặp.', 'Tiêu biểu: <i>I-li-át</i>, <i>Ô-đi-xê</i> (Hy Lạp), <i>Ra-ma-ya-na</i> (Ấn Độ), <i>Đăm Săn</i> (Ê-đê).'],
        q: `? Sử thi "Đăm Săn" là của dân tộc: | Ê-đê | Mường | Thái | Ba Na
? "Ra-ma-ya-na" là sử thi của: | Ấn Độ | Hy Lạp | Việt Nam | Trung Quốc
? Nhân vật trung tâm của sử thi thường là: | Người anh hùng đại diện cho cộng đồng | Người nông dân bình thường | Con vật | Vị vua độc ác
+ Sử thi thường sử dụng biện pháp so sánh, phóng đại.
- Sử thi là thể loại thơ trữ tình ngắn.
= I-li-át = Hy Lạp
= Ra-ma-ya-na = Ấn Độ
= Đăm Săn = Ê-đê
? Nhân vật Héc-to trong sử thi "I-li-át" là người anh hùng của thành: | Tơ-roa | Xpác-ta | A-ten | Rô-ma
? Sử thi "Ô-đi-xê" kể về hành trình trở về quê hương của: | Uy-lít-xơ | A-sin | Héc-to | Ra-ma
? Tác giả của "I-li-át" và "Ô-đi-xê" theo truyền thống là: | Hô-me-rơ | Xô-phốc-lơ | Pla-tôn | Ê-dốp
+ Đăm Săn là người anh hùng trong sử thi Tây Nguyên.
- Sử thi chỉ kể về đời sống riêng tư của nhân vật.` },
      { hk: 1, ten: 'Tích trò sân khấu dân gian', bai: ['Đọc hiểu chèo và tuồng (các trích đoạn tiêu biểu)', 'Thực hành tiếng Việt: Sử dụng biện pháp tu từ', 'Viết: Nội quy, bản hướng dẫn nơi công cộng', 'Nói và nghe: Thảo luận về nội quy, hướng dẫn'], on: 'Ôn tập học kì I',
        lt: ['<b>Chèo</b>: sân khấu dân gian vùng đồng bằng Bắc Bộ; kết hợp hát, múa, nói lối; nhân vật ước lệ (đào, kép, hề…).', '<b>Tuồng</b> (hát bội): sân khấu cổ truyền, đề tài lịch sử, trung nghĩa; có tuồng đồ (hài).', 'Tích trò: cốt truyện của một vở diễn; ngôn ngữ giàu chất trữ tình, hài hước.'],
        q: `? Chèo là loại hình sân khấu dân gian phát triển mạnh ở: | Đồng bằng Bắc Bộ | Tây Nguyên | Nam Bộ | Tây Bắc
? Tên gọi khác của tuồng là: | Hát bội | Cải lương | Quan họ | Hát xoan
? Vai hề trong chèo thường mang tính: | Hài hước, châm biếm | Bi thương | Uy nghiêm | Bí ẩn
+ Chèo kết hợp hát, múa, nói lối.
- Tuồng là loại hình sân khấu hiện đại phương Tây.
? Vở chèo "Quan Âm Thị Kính" nói về nỗi oan của: | Thị Kính | Xuý Vân | Thị Hến | Thị Mầu
? Nhân vật Thị Hến xuất hiện trong vở: | Nghêu, Sò, Ốc, Hến (tuồng đồ) | Quan Âm Thị Kính | Kim Nham | Lưu Bình – Dương Lễ
? Nói lối là hình thức: | Lời nói có vần, có nhịp trong chèo | Hát ru | Hò khoan | Ca trù
+ Chèo thường diễn ở sân đình.
- Tuồng không có yếu tố hài hước.` },
      { hk: 2, ten: 'Nguyễn Trãi – "Dành còn để trợ dân này"', bai: ['Tác gia Nguyễn Trãi', 'Bình Ngô đại cáo (Nguyễn Trãi)', 'Bảo kính cảnh giới, bài 43 (Nguyễn Trãi)', 'Dục Thuý sơn (Nguyễn Trãi)', 'Thực hành tiếng Việt: Sử dụng từ Hán Việt (tiếp theo)', 'Viết: Nghị luận về một vấn đề xã hội'],
        lt: ['<b>Nguyễn Trãi</b> (1380–1442): anh hùng dân tộc, danh nhân văn hoá thế giới; tư tưởng nhân nghĩa, yêu nước thương dân.', '"Bình Ngô đại cáo" (1428): bản tuyên ngôn độc lập thứ hai, viết theo thể cáo, văn biền ngẫu; tổng kết cuộc kháng chiến chống Minh.', '"Bảo kính cảnh giới" bài 43 (Quốc âm thi tập): bức tranh ngày hè rực rỡ và khát vọng "Dân giàu đủ khắp đòi phương".'],
        q: `? "Bình Ngô đại cáo" được viết năm: | 1428 | 1010 | 1077 | 1789
? "Bình Ngô đại cáo" được viết theo thể: | Cáo | Hịch | Chiếu | Phú
? "Bảo kính cảnh giới" thuộc tập thơ: | Quốc âm thi tập | Ức Trai thi tập | Truyền kì mạn lục | Nhật kí trong tù
? Tư tưởng cốt lõi xuyên suốt "Bình Ngô đại cáo" là: | Nhân nghĩa | Trung quân | Thoát tục | Ẩn dật
+ Nguyễn Trãi được UNESCO vinh danh là danh nhân văn hoá thế giới.
- "Bình Ngô đại cáo" là bản tuyên ngôn độc lập đầu tiên của nước ta.
_ "Việc nhân nghĩa cốt ở [yên dân], Quân điếu phạt trước lo trừ bạo."
? "Đại cáo bình Ngô" được viết sau thắng lợi của cuộc kháng chiến chống quân: | Minh | Nguyên | Tống | Thanh
? Nguyễn Trãi viết "Đại cáo bình Ngô" thừa lệnh: | Lê Lợi | Lê Thánh Tông | Trần Nhân Tông | Quang Trung
? Hiệu của Nguyễn Trãi là: | Ức Trai | Bạch Vân | Tố Như | Thanh Hiên
? "Dục Thuý sơn" viết về ngọn núi ở: | Ninh Bình | Hà Nội | Huế | Thanh Hoá
+ "Quốc âm thi tập" là tập thơ Nôm của Nguyễn Trãi.
- Nguyễn Trãi là tác giả "Truyện Kiều".
= Ức Trai = Nguyễn Trãi
= Tố Như = Nguyễn Du
= Bạch Vân cư sĩ = Nguyễn Bỉnh Khiêm` },
      { hk: 2, ten: 'Quyền năng của người kể chuyện', bai: ['Người cầm quyền khôi phục uy quyền (Vích-to Huy-gô)', 'Dưới bóng hoàng lan (Thạch Lam)', 'Một chuyện đùa nho nhỏ (An-tôn Sê-khốp)', 'Thực hành tiếng Việt: Biện pháp chêm xen, biện pháp liệt kê', 'Viết: Nghị luận về một vấn đề văn học', 'Nói và nghe: Thảo luận về một vấn đề văn học có ý kiến khác nhau'],
        lt: ['Người kể chuyện ngôi thứ nhất / ngôi thứ ba; điểm nhìn bên trong / bên ngoài; người kể chuyện toàn tri.', '"Người cầm quyền khôi phục uy quyền" (trích <i>Những người khốn khổ</i>, V. Huy-gô): Giăng Van-giăng.', '"Dưới bóng hoàng lan" (Thạch Lam): truyện không có cốt truyện gay cấn, giàu chất trữ tình, nhẹ nhàng.', '<b>Chêm xen</b>: chen thêm thông tin phụ vào câu; <b>liệt kê</b>: sắp xếp nối tiếp nhiều đơn vị cùng loại.'],
        q: `? "Những người khốn khổ" là tiểu thuyết của: | Vích-to Huy-gô | Sê-khốp | Lép Tôn-xtôi | Ban-dắc
? "Một chuyện đùa nho nhỏ" là truyện ngắn của: | An-tôn Sê-khốp | Vích-to Huy-gô | O. Hen-ri | Mô-pa-xăng
? "Dưới bóng hoàng lan" là truyện ngắn của: | Thạch Lam | Nam Cao | Kim Lân | Nguyễn Tuân
? Người kể chuyện biết hết mọi điều về nhân vật gọi là: | Người kể chuyện toàn tri | Người kể chuyện hạn tri | Nhân vật phụ | Người nghe
+ Truyện của Thạch Lam giàu chất trữ tình.
- Biện pháp liệt kê chỉ dùng một đơn vị duy nhất.
? Biện pháp chêm xen thường được đánh dấu bằng: | Dấu ngoặc đơn hoặc dấu gạch ngang | Dấu chấm hỏi | Dấu chấm than | Dấu hai chấm
? An-tôn Sê-khốp là nhà văn nước: | Nga | Pháp | Anh | Mỹ
? Vích-to Huy-gô là nhà văn nước: | Pháp | Nga | Anh | Đức
+ Thạch Lam là thành viên nhóm Tự lực văn đoàn.
- Truyện "Dưới bóng hoàng lan" có cốt truyện ly kì, gay cấn.`, fns: { bp: TV.bienphap(5) } },
      { hk: 2, ten: 'Thế giới đa dạng của thông tin', bai: ['Đọc hiểu văn bản thông tin tổng hợp (kết hợp nhiều phương thức biểu đạt)', 'Thực hành tiếng Việt: Phương tiện giao tiếp phi ngôn ngữ', 'Viết: Báo cáo kết quả nghiên cứu, có sử dụng trích dẫn, cước chú', 'Nói và nghe: Thuyết trình kết quả nghiên cứu'],
        lt: ['Văn bản thông tin tổng hợp: kết hợp thuyết minh, tự sự, miêu tả, biểu cảm, nghị luận để truyền đạt thông tin.', 'Phương tiện phi ngôn ngữ: hình ảnh, biểu đồ, sơ đồ, số liệu, kí hiệu giúp thông tin trực quan, dễ hiểu.', 'Trích dẫn, cước chú, tài liệu tham khảo thể hiện sự trung thực khi sử dụng thông tin của người khác.'],
        q: `? Phương tiện nào là phương tiện giao tiếp phi ngôn ngữ trong văn bản? | Biểu đồ, hình ảnh | Từ ngữ | Câu văn | Đoạn văn
? Mục đích chính của văn bản thông tin là: | Cung cấp thông tin chính xác cho người đọc | Kể chuyện tưởng tượng | Bày tỏ cảm xúc riêng | Gây cười
? Ghi rõ nguồn khi sử dụng thông tin của người khác thể hiện: | Sự trung thực, tôn trọng bản quyền | Sự sao chép | Thiếu hiểu biết | Không cần thiết
+ Văn bản thông tin tổng hợp có thể kết hợp nhiều phương thức biểu đạt.
- Không cần ghi nguồn khi trích dẫn tài liệu.
? Văn bản thông tin thường sử dụng phương thức biểu đạt chính là: | Thuyết minh | Biểu cảm | Tự sự | Nghị luận
? Cước chú dùng để: | Giải thích, ghi nguồn cho một nội dung | Trang trí | Làm tiêu đề | Kết bài
+ Sơ đồ, bảng biểu là phương tiện phi ngôn ngữ.
- Văn bản thông tin được phép bịa đặt số liệu.` },
      { hk: 2, ten: 'Hành trang cuộc sống', bai: ['Đọc hiểu văn bản nghị luận và văn bản văn học về giá trị sống', 'Thực hành tiếng Việt: Ôn tập biện pháp tu từ và từ Hán Việt', 'Viết: Nghị luận về một vấn đề xã hội (giá trị sống)', 'Nói và nghe: Trình bày, thảo luận về giá trị sống'], on: 'Ôn tập cuối năm',
        lt: ['Bài nghị luận về vấn đề xã hội: nêu vấn đề → giải thích → bàn luận (lí lẽ, bằng chứng) → phản đề → bài học nhận thức và hành động.', 'Giá trị sống: trung thực, trách nhiệm, tự lập, nhân ái, kiên trì, khát vọng.'],
        q: `? Bố cục bài nghị luận xã hội gồm: | Mở bài, thân bài, kết bài | Chỉ có thân bài | Mở bài và kết bài | Một đoạn duy nhất
? Phần "phản đề" trong bài nghị luận xã hội nhằm: | Bàn luận mở rộng, phê phán biểu hiện trái chiều | Kể chuyện | Liệt kê tài liệu | Giới thiệu tác giả
+ Bằng chứng trong bài nghị luận cần tiêu biểu, xác thực.
- Bài nghị luận xã hội chỉ cần cảm xúc, không cần lí lẽ.
? Thao tác giải thích trong nghị luận nhằm: | Làm rõ nghĩa của vấn đề | Kể chuyện | Miêu tả cảnh | Gây cười
? Bằng chứng trong bài nghị luận xã hội có thể là: | Số liệu, sự kiện, nhân vật có thật | Chuyện bịa đặt | Ý kiến vô căn cứ | Lời đồn
+ Kết bài cần khẳng định lại vấn đề và rút ra bài học.
- Bài nghị luận không cần mở bài.`, fns: { dh: TV.dochieu(5) } }
    ],
    essays: {
      1: [['Phân tích vẻ đẹp nhân vật Huấn Cao trong "Chữ người tử tù" (Nguyễn Tuân).', ['tài hoa', 'khí phách', 'thiên lương'], 'Huấn Cao: tài hoa (viết chữ đẹp, quý), khí phách hiên ngang (thản nhiên nhận rượu thịt, coi thường cái chết), thiên lương trong sáng (cho chữ quản ngục, khuyên về quê giữ thiên lương). Cảnh cho chữ: cái đẹp chiến thắng cái xấu, cái thiện thắng cái ác.', 4],
        ['Viết đoạn văn nghị luận (khoảng 150 chữ) về ý nghĩa của câu "Hiền tài là nguyên khí của quốc gia" đối với thế hệ trẻ hôm nay.', ['hiền tài', 'học tập', 'đất nước'], 'Giải thích hiền tài, nguyên khí; khẳng định vai trò của nhân tài với sự phát triển đất nước; trách nhiệm của thanh niên: học tập, rèn luyện, cống hiến; phê phán chảy máu chất xám, lười học.', 4]],
      2: [['Phân tích tư tưởng nhân nghĩa trong "Bình Ngô đại cáo" (Nguyễn Trãi).', ['nhân nghĩa', 'yên dân', 'trừ bạo'], 'Nhân nghĩa gắn với yên dân, trừ bạo — lấy dân làm gốc; là cơ sở chính nghĩa của cuộc kháng chiến; kết hợp với chân lí độc lập dân tộc (văn hiến, lãnh thổ, phong tục, lịch sử, hào kiệt).', 4],
        ['Viết bài văn nghị luận về một giá trị sống mà em cho là quan trọng nhất đối với tuổi trẻ.', ['giá trị', 'lí lẽ', 'bằng chứng'], 'Nêu giá trị sống (trách nhiệm, trung thực…); giải thích; phân tích biểu hiện, ý nghĩa với lí lẽ, bằng chứng; phản đề; bài học nhận thức và hành động của bản thân.', 5]]
    }
  });
})();

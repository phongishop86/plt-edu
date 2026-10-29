/* Ngữ văn 9 – KNTT. Tên bài học, văn bản theo mục lục SGK; câu hỏi, ngữ liệu luyện tập do PLT-Edu soạn. */
(function () {
  const TV = PLT.TV;
  PLT.KB.build({
    id: 'ngu-van-9', lop: 9, mon: 'Ngữ văn', icon: '📖', nhan: 'Bài', so: false, essayMax: 2,
    topics: [
      { hk: 1, ten: 'Thế giới kì ảo', bai: ['Chuyện người con gái Nam Xương (Nguyễn Dữ)', 'Dế chọi (Bồ Tùng Linh)', 'Sơn Tinh – Thuỷ Tinh (Nguyễn Nhược Pháp)', 'Thực hành tiếng Việt: Điển tích, điển cố; từ Hán Việt', 'Viết: Nghị luận về vấn đề cần giải quyết (con người với tự nhiên)', 'Nói và nghe: Ý kiến về sự việc có tính thời sự'],
        lt: ['<b>Truyện truyền kì</b>: truyện có yếu tố kì ảo, hoang đường đan xen với yếu tố thực; thể loại văn xuôi tự sự trung đại viết bằng chữ Hán.', '"Chuyện người con gái Nam Xương" (Nguyễn Dữ, trích <i>Truyền kì mạn lục</i>): bi kịch của <b>Vũ Nương</b> — người phụ nữ đức hạnh bị chồng (Trương Sinh) nghi oan, phải tự vẫn; chi tiết "cái bóng" thắt nút – mở nút.', '"Dế chọi" (Bồ Tùng Linh, <i>Liêu Trai chí dị</i>, Trung Quốc): phê phán triều đình ham chơi, quan lại nhũng nhiễu.', '<b>Điển tích, điển cố</b>: câu chuyện, sự việc trong sách xưa được dẫn lại ngắn gọn để gợi nghĩa sâu xa.'],
        q: `? "Chuyện người con gái Nam Xương" trích từ tác phẩm: | Truyền kì mạn lục | Liêu Trai chí dị | Hoàng Lê nhất thống chí | Vũ trung tùy bút
? Tác giả "Truyền kì mạn lục" là: | Nguyễn Dữ | Nguyễn Du | Bồ Tùng Linh | Ngô Gia văn phái
? Nguyên nhân trực tiếp dẫn đến cái chết của Vũ Nương là: | Lời nói ngây thơ của bé Đản về "cái bóng" | Chiến tranh | Bệnh tật | Lũ lụt
? "Liêu Trai chí dị" là tác phẩm của nhà văn: | Bồ Tùng Linh | La Quán Trung | Lỗ Tấn | Ngô Thừa Ân
? Đặc trưng nổi bật của truyện truyền kì là: | Kết hợp yếu tố kì ảo và yếu tố thực | Chỉ kể chuyện có thật | Viết bằng thơ lục bát | Không có nhân vật
+ Vũ Nương là người phụ nữ đức hạnh, thuỷ chung.
+ Chi tiết "cái bóng" vừa thắt nút vừa mở nút câu chuyện.
- Trương Sinh là người chồng hiểu vợ, tin tưởng vợ tuyệt đối.
- Truyện truyền kì không có yếu tố hoang đường.
= Nguyễn Dữ = Chuyện người con gái Nam Xương
= Bồ Tùng Linh = Dế chọi
= Nguyễn Nhược Pháp = Sơn Tinh – Thuỷ Tinh (thơ)
= Vũ Nương = Nhân vật bị chồng nghi oan` },
      { hk: 1, ten: 'Những cung bậc tâm trạng', bai: ['Nỗi niềm chinh phụ (trích Chinh phụ ngâm – Đặng Trần Côn, Đoàn Thị Điểm dịch)', 'Tiếng đàn mưa (Bích Khê)', 'Một thể thơ độc đáo của người Việt (Dương Lâm An)', 'Thực hành tiếng Việt: Biện pháp tu từ; điệp ngữ', 'Viết: Phân tích tác phẩm thơ song thất lục bát', 'Nói và nghe: Thảo luận vấn đề đáng quan tâm phù hợp lứa tuổi'],
        lt: ['<b>Thể thơ song thất lục bát</b>: mỗi khổ 4 dòng — hai câu 7 chữ (song thất) tiếp một cặp lục bát (6 – 8); vần lưng, vần chân đan xen.', '"Chinh phụ ngâm" (Đặng Trần Côn viết chữ Hán, <b>Đoàn Thị Điểm</b> dịch Nôm): nỗi cô đơn, nhớ thương chồng của người chinh phụ; tố cáo chiến tranh phi nghĩa.', '"Cung oán ngâm khúc" (Nguyễn Gia Thiều): nỗi sầu oán của người cung nữ.'],
        q: `? Một khổ thơ song thất lục bát gồm: | Hai câu 7 chữ, một câu 6 chữ, một câu 8 chữ | Bốn câu 7 chữ | Hai câu 6 chữ, hai câu 8 chữ | Tám câu 7 chữ
? "Chinh phụ ngâm" nguyên tác chữ Hán của: | Đặng Trần Côn | Đoàn Thị Điểm | Nguyễn Gia Thiều | Nguyễn Du
? Bản dịch Nôm "Chinh phụ ngâm" phổ biến được cho là của: | Đoàn Thị Điểm | Hồ Xuân Hương | Bà Huyện Thanh Quan | Nguyễn Khuyến
? "Cung oán ngâm khúc" là tác phẩm của: | Nguyễn Gia Thiều | Đặng Trần Côn | Nguyễn Đình Chiểu | Nguyễn Dữ
+ Thể song thất lục bát là thể thơ độc đáo của người Việt.
- "Chinh phụ ngâm" ca ngợi chiến tranh phi nghĩa.
= Đặng Trần Côn = Chinh phụ ngâm (nguyên tác chữ Hán)
= Nguyễn Gia Thiều = Cung oán ngâm khúc
= Bích Khê = Tiếng đàn mưa`, fns: { bp: TV.bienphap(5) } },
      { hk: 1, ten: 'Hồn nước nằm trong tiếng mẹ cha', bai: ['Kim – Kiều gặp gỡ (trích Truyện Kiều – Nguyễn Du)', 'Lục Vân Tiên đánh cướp, cứu Kiều Nguyệt Nga (trích Truyện Lục Vân Tiên – Nguyễn Đình Chiểu)', 'Tự tình (bài 2) (Hồ Xuân Hương)', 'Thực hành tiếng Việt: Từ ngữ địa phương, biệt ngữ xã hội', 'Viết: Nghị luận về vấn đề cần giải quyết trong đời sống học sinh', 'Nói và nghe: Vấn đề có tính thời sự trong đời sống học sinh'],
        lt: ['<b>Truyện thơ Nôm</b>: tác phẩm tự sự viết bằng thơ (chủ yếu lục bát), chữ Nôm.', '<b>Truyện Kiều</b> (Đoạn trường tân thanh) – <b>Nguyễn Du</b>: 3 254 câu lục bát, dựa theo cốt truyện Kim Vân Kiều truyện (Thanh Tâm Tài Nhân); số phận Thuý Kiều tài sắc mà bạc mệnh.', '<b>Truyện Lục Vân Tiên</b> – <b>Nguyễn Đình Chiểu</b>: đề cao đạo lí nhân nghĩa, trọng nghĩa khinh tài.', '"Tự tình" (bài 2) – <b>Hồ Xuân Hương</b> ("Bà chúa thơ Nôm"): tâm trạng buồn tủi và khát vọng hạnh phúc của người phụ nữ.'],
        q: `? Truyện Kiều có tên chữ Hán là: | Đoạn trường tân thanh | Truyền kì mạn lục | Hoàng Lê nhất thống chí | Chinh phụ ngâm
? Truyện Kiều có bao nhiêu câu thơ? | 3 254 | 2 082 | 1 000 | 5 000
? Truyện Kiều được viết theo thể thơ: | Lục bát | Song thất lục bát | Thất ngôn bát cú | Tự do
? Tác giả "Truyện Lục Vân Tiên" là: | Nguyễn Đình Chiểu | Nguyễn Du | Nguyễn Khuyến | Hồ Xuân Hương
? Nhà thơ được mệnh danh "Bà chúa thơ Nôm" là: | Hồ Xuân Hương | Đoàn Thị Điểm | Bà Huyện Thanh Quan | Xuân Quỳnh
? Lục Vân Tiên đánh cướp để cứu: | Kiều Nguyệt Nga | Thuý Kiều | Vũ Nương | Thuý Vân
+ Truyện Lục Vân Tiên đề cao đạo lí nhân nghĩa.
+ Truyện Kiều dựa theo cốt truyện "Kim Vân Kiều truyện" của Trung Quốc.
- Truyện Kiều được viết bằng chữ Quốc ngữ.
- Hồ Xuân Hương là tác giả "Truyện Lục Vân Tiên".
= Nguyễn Du = Truyện Kiều
= Nguyễn Đình Chiểu = Truyện Lục Vân Tiên
= Hồ Xuân Hương = Tự tình
= Thuý Kiều = Nhân vật tài sắc mà bạc mệnh` },
      { hk: 1, ten: 'Khám phá vẻ đẹp văn chương', bai: ['"Người con gái Nam Xương" – một bi kịch của con người (Nguyễn Đăng Na)', 'Từ "Thằng quỷ nhỏ" của Nguyễn Nhật Ánh nghĩ về những phẩm chất của một tác phẩm viết cho thiếu nhi (Trần Văn Toàn)', 'Ngày xưa (Vũ Cao)', 'Thực hành tiếng Việt: Câu rút gọn, câu đặc biệt', 'Viết: Phân tích một tác phẩm truyện', 'Nói và nghe: Làm thế nào để học tốt môn Ngữ văn?'],
        lt: ['<b>Văn nghị luận văn học</b>: luận đề, luận điểm, lí lẽ, bằng chứng từ tác phẩm; thể hiện cách hiểu và đánh giá của người viết.', '<b>Câu rút gọn</b>: lược bỏ một số thành phần để câu gọn, tránh lặp; <b>câu đặc biệt</b>: không cấu tạo theo mô hình chủ – vị (Mưa. Một đêm mùa xuân.).'],
        q: `? "Thằng quỷ nhỏ" là tác phẩm của: | Nguyễn Nhật Ánh | Tô Hoài | Nguyễn Dữ | Vũ Cao
? Câu "Mưa." là câu: | Câu đặc biệt | Câu rút gọn | Câu ghép | Câu phủ định
? Trong văn nghị luận văn học, bằng chứng chủ yếu lấy từ: | Tác phẩm được bàn luận | Số liệu kinh tế | Báo cáo khoa học | Ý kiến cá nhân không dẫn chứng
+ Câu rút gọn giúp lời nói gọn, tránh lặp từ.
- Câu đặc biệt luôn có đủ chủ ngữ và vị ngữ.
# Câu đặc biệt: Mưa., Ôi!, Một đêm mùa xuân.
# Câu rút gọn: Đi thôi!, Học bài chưa?, Ăn cơm rồi.` },
      { hk: 1, ten: 'Đối diện với nỗi đau', bai: ['Rô-mê-ô và Giu-li-ét (Uy-li-am Sếch-xpia)', 'Lơ Xít (Coóc-nây)', 'Bí ẩn của làn nước (Bảo Ninh)', 'Thực hành tiếng Việt: Lựa chọn câu đơn, câu ghép', 'Viết: Phân tích một tác phẩm kịch', 'Nói và nghe: Thảo luận vấn đề gợi ra từ tác phẩm'], on: 'Ôn tập học kì I',
        lt: ['<b>Bi kịch</b>: thể loại kịch thể hiện xung đột gay gắt, nhân vật chính thường gặp kết cục đau thương; khơi dậy lòng thương cảm, suy ngẫm.', '"Rô-mê-ô và Giu-li-ét" (Sếch-xpia, Anh): tình yêu vượt lên hận thù dòng họ Môn-ta-ghiu và Ca-piu-lét.', '"Lơ Xít" (Coóc-nây, Pháp): xung đột giữa tình yêu và danh dự.', 'Văn bản kịch: lời thoại (đối thoại, độc thoại, bàng thoại), chỉ dẫn sân khấu, hồi, cảnh.'],
        q: `? "Rô-mê-ô và Giu-li-ét" là tác phẩm của: | Sếch-xpia | Coóc-nây | Mô-li-e | Si-lơ
? Hai dòng họ thù địch trong "Rô-mê-ô và Giu-li-ét" là: | Môn-ta-ghiu và Ca-piu-lét | Trịnh và Nguyễn | Lan-ca-xtơ và Y-oóc | Mác-két và Pau-xtốp-xki
? Lời nhân vật tự nói với chính mình trên sân khấu gọi là: | Độc thoại | Đối thoại | Bàng thoại | Chỉ dẫn sân khấu
? "Lơ Xít" là tác phẩm của nhà soạn kịch người: | Pháp | Anh | Đức | Nga
+ Bi kịch thường kết thúc bằng sự mất mát, đau thương.
- Chỉ dẫn sân khấu là lời nhân vật nói với khán giả.
= Sếch-xpia = Rô-mê-ô và Giu-li-ét
= Coóc-nây = Lơ Xít
= Si-lơ = Âm mưu và tình yêu
= Bảo Ninh = Bí ẩn của làn nước` },
      { hk: 2, ten: 'Giải mã những bí mật', bai: ['Ba chàng sinh viên (A-thơ Cô-nan Đoi-lơ)', 'Bài hát đồng sáu xu (A-ga-thơ Crít-xti)', 'Phạm Xuân Ẩn – tên người như cuộc đời (Nguyễn Thị Ngọc Hải)', 'Thực hành tiếng Việt: Lời dẫn trực tiếp và lời dẫn gián tiếp', 'Viết: Truyện kể sáng tạo', 'Nói và nghe: Kể một câu chuyện tưởng tượng'],
        lt: ['<b>Truyện trinh thám</b>: xoay quanh một vụ án bí ẩn; nhân vật thám tử suy luận, phá án; tình tiết gây tò mò, bất ngờ.', 'A-thơ Cô-nan Đoi-lơ (Anh) – tác giả các truyện về thám tử <b>Sơ-lốc Hôm</b>; A-ga-thơ Crít-xti – "Nữ hoàng truyện trinh thám", thám tử Poa-rô.', '<b>Lời dẫn trực tiếp</b>: nhắc nguyên văn, đặt trong ngoặc kép; <b>lời dẫn gián tiếp</b>: thuật lại có điều chỉnh, không dùng ngoặc kép.'],
        q: `? Thám tử Sơ-lốc Hôm là nhân vật của nhà văn: | A-thơ Cô-nan Đoi-lơ | A-ga-thơ Crít-xti | Giuyn Véc-nơ | Mác Tuên
? Nhà văn được mệnh danh "Nữ hoàng truyện trinh thám" là: | A-ga-thơ Crít-xti | Xuân Quỳnh | Gioan Rao-linh | Sác-lốt Brôn-tê
? Lời dẫn trực tiếp được đặt trong: | Dấu ngoặc kép | Dấu ngoặc đơn | Dấu gạch ngang | Không có dấu
? Đặc trưng của truyện trinh thám là: | Có vụ án bí ẩn và quá trình phá án | Viết bằng thơ lục bát | Không có nhân vật | Chỉ tả cảnh thiên nhiên
+ Phạm Xuân Ẩn là nhà tình báo nổi tiếng của Việt Nam.
- Lời dẫn gián tiếp phải giữ nguyên văn lời nói và đặt trong ngoặc kép.
= Sơ-lốc Hôm = A-thơ Cô-nan Đoi-lơ
= Poa-rô = A-ga-thơ Crít-xti
= Phạm Cao Củng = Ba viên ngọc bích` },
      { hk: 2, ten: 'Hồn thơ muôn điệu', bai: ['Tiếng Việt (Lưu Quang Vũ)', 'Mưa xuân (Nguyễn Bính)', 'Một kiểu phát biểu luận đề độc đáo của Xuân Diệu ở bài thơ "Vội vàng" (Phan Huy Dũng)', 'Thực hành tiếng Việt: Biện pháp tu từ', 'Viết: Tập làm thơ tám chữ; đoạn văn cảm nghĩ về bài thơ tám chữ', 'Nói và nghe: Thảo luận vấn đề đời sống'],
        lt: ['<b>Thơ tám chữ</b>: mỗi dòng 8 tiếng; ngắt nhịp linh hoạt (3/5, 4/4, 3/3/2…); vần chân liền hoặc gián cách.', '"Tiếng Việt" (Lưu Quang Vũ): ca ngợi vẻ đẹp, sức sống của tiếng mẹ đẻ.', '"Mưa xuân" (Nguyễn Bính): thơ mang hồn quê, chất dân gian.', '"Vội vàng" (Xuân Diệu): lòng ham sống mãnh liệt, quan niệm sống vội vàng để tận hưởng tuổi trẻ.'],
        q: `? Thơ tám chữ có mỗi dòng: | 8 tiếng | 7 tiếng | 6 tiếng | 5 tiếng
? Bài thơ "Tiếng Việt" là của: | Lưu Quang Vũ | Nguyễn Bính | Xuân Diệu | Tế Hanh
? "Vội vàng" là bài thơ của: | Xuân Diệu | Huy Cận | Hàn Mặc Tử | Nguyễn Bính
? Thơ Nguyễn Bính thường mang đậm: | Hồn quê, chất dân gian | Chất trinh thám | Chất khoa học viễn tưởng | Chất bi kịch phương Tây
+ "Miền quê" là bài thơ của Nguyễn Khoa Điềm.
- Thơ tám chữ có số tiếng mỗi dòng không cố định.
= Lưu Quang Vũ = Tiếng Việt
= Nguyễn Bính = Mưa xuân
= Xuân Diệu = Vội vàng
= Nguyễn Khoa Điềm = Miền quê`, fns: { bp: TV.bienphap(5) } },
      { hk: 2, ten: 'Tiếng nói của lương tri', bai: ['Đấu tranh cho một thế giới hoà bình (Ga-bri-en Gác-xi-a Mác-két)', 'Biến đổi khí hậu – mối đe doạ sự tồn vong của hành tinh chúng ta (An-tô-ni-ô Gu-tê-rét)', 'Bài ca chúc Tết thanh niên (Phan Bội Châu)', 'Thực hành tiếng Việt: Phương tiện liên kết; câu ghép', 'Viết: Nghị luận về vấn đề cần giải quyết trong đời sống xã hội', 'Nói và nghe: Ý kiến về sự việc có tính thời sự'],
        lt: ['<b>Văn nghị luận xã hội</b> về vấn đề toàn cầu: chiến tranh – hoà bình, biến đổi khí hậu.', '"Đấu tranh cho một thế giới hoà bình" (Mác-két, Cô-lôm-bi-a): nguy cơ chiến tranh hạt nhân, kêu gọi đấu tranh vì hoà bình.', 'Phát biểu của Tổng Thư kí Liên hợp quốc <b>An-tô-ni-ô Gu-tê-rét</b> về biến đổi khí hậu.', '"Bài ca chúc Tết thanh niên" (Phan Bội Châu): khích lệ thanh niên đứng lên cứu nước.'],
        q: `? "Đấu tranh cho một thế giới hoà bình" là tác phẩm của: | Ga-bri-en Gác-xi-a Mác-két | An-tô-ni-ô Gu-tê-rét | Sếch-xpia | Lép Tôn-xtôi
? An-tô-ni-ô Gu-tê-rét là: | Tổng Thư kí Liên hợp quốc | Nhà văn Cô-lôm-bi-a | Nhà thơ Việt Nam | Nhà soạn kịch Anh
? "Bài ca chúc Tết thanh niên" là tác phẩm của: | Phan Bội Châu | Phan Châu Trinh | Hồ Chí Minh | Nguyễn Đình Chiểu
+ Văn bản nghị luận xã hội cần lí lẽ chặt chẽ, bằng chứng xác thực.
- "Đấu tranh cho một thế giới hoà bình" kêu gọi chạy đua vũ trang.
= Mác-két = Đấu tranh cho một thế giới hoà bình
= Gu-tê-rét = Phát biểu về biến đổi khí hậu
= Phan Bội Châu = Bài ca chúc Tết thanh niên
= Vũ Khoan = Chuẩn bị hành trang` },
      { hk: 2, ten: 'Đi và suy ngẫm', bai: ['Yên Tử, núi thiêng (Thi Sảnh)', 'Văn hoá hoa – cây cảnh (Trần Quốc Vượng)', 'Tình sông núi (Trần Mai Ninh)', 'Thực hành tiếng Việt: Từ Hán Việt; thuật ngữ', 'Viết: Thuyết minh về danh lam thắng cảnh hay di tích lịch sử', 'Nói và nghe: Thuyết minh về danh lam thắng cảnh, di tích'],
        lt: ['<b>Văn bản thông tin, thuyết minh</b> về danh lam thắng cảnh, di tích: vị trí, lịch sử, đặc điểm nổi bật, giá trị, cách bảo tồn.', 'Yên Tử (Quảng Ninh): nơi vua Trần Nhân Tông tu hành, sáng lập Thiền phái Trúc Lâm.', 'Khu Trung tâm Hoàng thành Thăng Long – Hà Nội: Di sản văn hoá thế giới (2010).'],
        q: `? Thiền phái Trúc Lâm Yên Tử do ai sáng lập? | Vua Trần Nhân Tông | Lý Công Uẩn | Lê Lợi | Nguyễn Huệ
? Yên Tử thuộc tỉnh: | Quảng Ninh | Ninh Bình | Hà Nam | Thanh Hoá
? Khu Trung tâm Hoàng thành Thăng Long được UNESCO công nhận năm: | 2010 | 1993 | 2003 | 1999
? Bài thuyết minh về di tích cần có: | Vị trí, lịch sử, đặc điểm, giá trị | Cảm xúc là chủ yếu | Cốt truyện hấp dẫn | Lời thoại nhân vật
+ Thuyết minh cần thông tin chính xác, khách quan.
- Văn bản thuyết minh chủ yếu dùng yếu tố tưởng tượng.
> Giới thiệu khái quát > Lịch sử hình thành > Đặc điểm nổi bật > Giá trị, ý nghĩa > Bảo tồn, phát huy` },
      { hk: 2, ten: 'Văn học – lịch sử tâm hồn', bai: ['Đọc: Đọc để trưởng thành', 'Viết: Quảng bá giá trị của sách', 'Nói và nghe: Phát triển văn hoá đọc'], on: 'Ôn tập học kì II',
        lt: ['Đọc mở rộng các thể loại đã học; tổng kết kiến thức Ngữ văn THCS; chuẩn bị thi vào lớp 10.'],
        q: `? Tác phẩm nào thuộc thể loại truyện thơ Nôm? | Truyện Kiều | Chuyện người con gái Nam Xương | Rô-mê-ô và Giu-li-ét | Ba chàng sinh viên
? Tác phẩm nào thuộc thể loại truyện truyền kì? | Chuyện người con gái Nam Xương | Truyện Kiều | Vội vàng | Tiếng Việt
+ Đọc sách giúp bồi dưỡng tâm hồn và hiểu biết.
# Truyện thơ Nôm: Truyện Kiều, Truyện Lục Vân Tiên
# Truyện trinh thám: Ba chàng sinh viên, Bài hát đồng sáu xu
# Kịch: Rô-mê-ô và Giu-li-ét, Lơ Xít`, fns: { dh: TV.dochieu(5) } }
    ],
    essays: {
      1: [['Phân tích nhân vật Vũ Nương trong "Chuyện người con gái Nam Xương".', ['Vũ Nương', 'đức hạnh', 'oan khuất', 'bi kịch'], 'Mở bài: Nguyễn Dữ, tác phẩm, nhân vật. Thân bài: vẻ đẹp (hiền thục, thuỷ chung, hiếu thảo); bi kịch bị nghi oan, cái chết; yếu tố kì ảo ở thuỷ cung và ý nghĩa; giá trị hiện thực và nhân đạo. Kết bài: đánh giá.', 8],
        ['Phân tích đoạn trích "Kim – Kiều gặp gỡ" (Truyện Kiều).', ['Kim Trọng', 'Thuý Kiều', 'lục bát', 'tình yêu'], 'Giới thiệu Nguyễn Du, Truyện Kiều, vị trí đoạn trích; khung cảnh gặp gỡ ngày thanh minh; vẻ đẹp Kim Trọng; rung động đầu đời của Thuý Kiều; nghệ thuật (lục bát, ước lệ, tả cảnh ngụ tình); đánh giá.', 8]],
      2: [['Viết bài văn nghị luận về vấn đề biến đổi khí hậu và trách nhiệm của thế hệ trẻ.', ['biến đổi khí hậu', 'nguyên nhân', 'giải pháp', 'trách nhiệm'], 'Nêu vấn đề; thực trạng (nhiệt độ tăng, thiên tai); nguyên nhân (khí nhà kính, phá rừng); hậu quả; giải pháp; trách nhiệm của thế hệ trẻ (tiết kiệm năng lượng, trồng cây, giảm rác thải); kết luận.', 8],
        ['Viết bài văn thuyết minh về một danh lam thắng cảnh hoặc di tích lịch sử ở địa phương em.', ['vị trí', 'lịch sử', 'đặc điểm', 'giá trị'], 'Giới thiệu khái quát; vị trí; lịch sử hình thành; đặc điểm kiến trúc, cảnh quan; giá trị lịch sử, văn hoá; hiện trạng và việc bảo tồn; lời mời, thông điệp.', 8]]
    }
  });
})();

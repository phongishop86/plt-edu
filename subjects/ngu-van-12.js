/* Ngữ văn 12 – KNTT. Tên bài học, văn bản theo mục lục SGK; câu hỏi do PLT-Edu soạn. */
(function () {
  const TV = PLT.TV;
  PLT.KB.build({
    id: 'ngu-van-12', lop: 12, mon: 'Ngữ văn', icon: '📖', nhan: 'Bài', so: false, essayMax: 2,
    topics: [
      { hk: 1, ten: 'Khả năng lớn lao của tiểu thuyết', bai: ['Xuân Tóc Đỏ cứu quốc (trích Số đỏ – Vũ Trọng Phụng)', 'Mùa lá rụng trong vườn (trích – Ma Văn Kháng)', 'Thực hành tiếng Việt: Biện pháp tu từ nói mỉa, nghịch ngữ', 'Viết: Nghị luận so sánh, đánh giá hai tác phẩm truyện', 'Nói và nghe: Trình bày kết quả so sánh, đánh giá hai tác phẩm truyện', 'Thực hành đọc: Trên xuồng cứu nạn (trích Cuộc đời của Pi – Y-an Mác-tên)'],
        lt: ['<b>Tiểu thuyết</b>: tác phẩm tự sự cỡ lớn, phản ánh đời sống rộng lớn, nhiều nhân vật, nhiều tuyến sự kiện.', '"Số đỏ" (Vũ Trọng Phụng, 1936): tiểu thuyết trào phúng, phê phán xã hội thành thị "Âu hoá" lố lăng; nhân vật Xuân Tóc Đỏ — kẻ ma cà bông gặp thời.', '<b>Nói mỉa</b>: nói ngược ý để châm biếm; <b>nghịch ngữ</b>: kết hợp các từ trái nghĩa tạo hiệu quả bất ngờ.'],
        q: `? "Số đỏ" là tiểu thuyết của: | Vũ Trọng Phụng | Nam Cao | Ngô Tất Tố | Nguyễn Công Hoan
? Nhân vật chính trong "Số đỏ" là: | Xuân Tóc Đỏ | Chí Phèo | Tràng | Huấn Cao
? "Số đỏ" thuộc loại tiểu thuyết: | Trào phúng | Lịch sử | Kiếm hiệp | Khoa học viễn tưởng
? "Cuộc đời của Pi" là tác phẩm của: | Y-an Mác-tên | Hê-minh-uê | Ta-go | Pu-skin
+ Tiểu thuyết có dung lượng lớn, phản ánh đời sống rộng lớn.
- Nghịch ngữ là kết hợp các từ đồng nghĩa.
= Vũ Trọng Phụng = Số đỏ
= Ma Văn Kháng = Mùa lá rụng trong vườn
= Y-an Mác-tên = Cuộc đời của Pi
? Chương trích "Hạnh phúc của một tang gia" thuộc tiểu thuyết: | Số đỏ | Tắt đèn | Bỉ vỏ | Giông tố
? Vũ Trọng Phụng được mệnh danh là: | "Ông vua phóng sự đất Bắc" | "Ông hoàng thơ tình" | "Nhà văn của người nông dân" | "Thi sĩ đồng quê"
? Ma Văn Kháng nổi tiếng với các tác phẩm viết về: | Đời sống gia đình, xã hội thời kì Đổi mới | Chiến tranh cổ đại | Khoa học viễn tưởng | Thần thoại
+ Tiểu thuyết có thể có nhiều tuyến nhân vật, nhiều sự kiện.
- "Số đỏ" là tiểu thuyết lịch sử.`, fns: { bp: TV.bienphap(5) } },
      { hk: 1, ten: 'Những thế giới thơ', bai: ['Cảm hoài (Đặng Dung)', 'Tây Tiến (Quang Dũng)', 'Đàn ghi ta của Lor-ca (Thanh Thảo)', 'Thực hành tiếng Việt: Tác dụng của một số biện pháp tu từ trong thơ', 'Viết: Nghị luận so sánh, đánh giá hai tác phẩm thơ', 'Thực hành đọc: Bài thơ số 28 (Ta-go)'],
        lt: ['"Tây Tiến" (Quang Dũng, 1948): nỗi nhớ về đoàn binh Tây Tiến và miền Tây; bút pháp lãng mạn kết hợp hiện thực; hình tượng người lính hào hoa, bi tráng.', '"Cảm hoài" (Đặng Dung): nỗi lòng người anh hùng thất thế, chí lớn chưa thành.', '"Đàn ghi ta của Lor-ca" (Thanh Thảo): thơ tượng trưng, siêu thực; ngợi ca nghệ sĩ Tây Ban Nha Lor-ca.'],
        q: `? "Tây Tiến" là bài thơ của: | Quang Dũng | Tố Hữu | Chính Hữu | Nguyễn Đình Thi
? Hình tượng trung tâm của bài "Tây Tiến" là: | Người lính Tây Tiến | Người mẹ | Dòng sông | Mùa thu
? "Đàn ghi ta của Lor-ca" là sáng tác của: | Thanh Thảo | Quang Dũng | Xuân Quỳnh | Hữu Thỉnh
? Lor-ca là nghệ sĩ của nước: | Tây Ban Nha | Pháp | Ý | Nga
+ "Tây Tiến" có sự kết hợp giữa cảm hứng lãng mạn và hiện thực.
- "Cảm hoài" là bài thơ của Quang Dũng.
? Đoàn binh Tây Tiến hoạt động ở vùng: | Tây Bắc và biên giới Việt – Lào | Nam Bộ | Tây Nguyên | Đồng bằng sông Hồng
? Bài "Tây Tiến" ban đầu có tên: | Nhớ Tây Tiến | Tây Tiến ca | Đường lên Tây Bắc | Người lính
? Đặng Dung là tác giả thời: | Hậu Trần | Lý | Lê sơ | Nguyễn
? Ta-go là nhà thơ nước: | Ấn Độ | Trung Quốc | Nhật Bản | Thái Lan
+ Thanh Thảo là nhà thơ tiêu biểu của thơ ca chống Mỹ và sau 1975.
- Ta-go là nhà thơ Nhật Bản.`, fns: { bp: TV.bienphap(5) } },
      { hk: 1, ten: 'Lập luận trong văn bản nghị luận', bai: ['Nhìn về vốn văn hoá dân tộc (Trần Đình Hượu)', 'Năng lực sáng tạo (Phan Đình Diệu)', 'Mấy ý nghĩ về thơ (Nguyễn Đình Thi)', 'Thực hành tiếng Việt: Lỗi logic, lỗi câu mơ hồ và cách sửa', 'Viết: Nghị luận về một vấn đề liên quan đến tuổi trẻ (hoài bão, ước mơ)', 'Nói và nghe: Thuyết trình về một vấn đề liên quan đến tuổi trẻ'],
        lt: ['Các thao tác lập luận: giải thích, chứng minh, phân tích, so sánh, bình luận, bác bỏ.', 'Lỗi logic: mâu thuẫn, kết luận không có căn cứ, khái niệm không tương thích. Câu mơ hồ: có thể hiểu theo nhiều nghĩa.'],
        q: `? Thao tác dùng lí lẽ, dẫn chứng để chỉ ra cái sai của ý kiến khác là: | Bác bỏ | Giải thích | Chứng minh | Phân tích
? Câu có thể hiểu theo nhiều cách khác nhau gọi là: | Câu mơ hồ | Câu đặc biệt | Câu ghép | Câu rút gọn
? "Mấy ý nghĩ về thơ" là bài viết của: | Nguyễn Đình Thi | Hoài Thanh | Trần Đình Hượu | Phan Đình Diệu
+ Lập luận cần có lí lẽ chặt chẽ và dẫn chứng thuyết phục.
- Lỗi logic không ảnh hưởng đến sức thuyết phục của văn bản.
? Thao tác so sánh trong nghị luận nhằm: | Làm rõ đối tượng qua đối chiếu với đối tượng khác | Kể chuyện | Liệt kê | Miêu tả
? Lỗi "Trời mưa nên tôi đi học đúng giờ" là lỗi: | Lôgic (quan hệ nhân quả không hợp lí) | Chính tả | Dấu câu | Dùng từ Hán Việt
? Phan Đình Diệu là nhà khoa học trong lĩnh vực: | Toán học, tin học | Văn học | Âm nhạc | Y học
+ Lập luận chặt chẽ giúp tăng sức thuyết phục.
- Câu mơ hồ luôn giúp người đọc hiểu đúng ý.` },
      { hk: 1, ten: 'Tiếng cười của hài kịch', bai: ['Đọc hiểu văn bản hài kịch', 'Thực hành tiếng Việt: Ngôn ngữ trang trọng và ngôn ngữ thân mật (luyện tập)', 'Viết: Nghị luận về một tác phẩm kịch', 'Nói và nghe: Thảo luận về một tác phẩm kịch'],
        lt: ['<b>Hài kịch</b>: thể loại kịch dùng tiếng cười phê phán thói xấu; mâu thuẫn giữa bản chất và hình thức bên ngoài của nhân vật.', 'Thủ pháp: tình huống nhầm lẫn, phóng đại, lời thoại châm biếm, hành động gây cười.'],
        q: `? Mâu thuẫn trào phúng trong hài kịch thường là giữa: | Bản chất và vẻ bề ngoài | Con người và thiên nhiên | Quá khứ và tương lai | Hai đất nước
? Tình huống nhầm lẫn trong hài kịch nhằm: | Tạo tiếng cười, bộc lộ bản chất nhân vật | Gây sợ hãi | Kể chuyện lịch sử | Miêu tả thiên nhiên
+ Hài kịch phê phán cái xấu bằng tiếng cười.
- Hài kịch luôn kết thúc bằng cái chết của nhân vật chính.
? Hài kịch thường kết thúc: | Có hậu hoặc lật tẩy nhân vật xấu bằng tiếng cười | Bi thảm | Cái chết của người anh hùng | Không có kết
? "Quan thanh tra" là vở hài kịch của: | Gô-gôn | Sếch-xpia | Sê-khốp | Pu-skin
? Mô-li-e là nhà viết hài kịch nổi tiếng của nước: | Pháp | Nga | Anh | Đức
+ Hài kịch phơi bày mâu thuẫn giữa bản chất và vẻ ngoài.
- Hài kịch không có xung đột.` },
      { hk: 1, ten: 'Văn bản thông tin tổng hợp', bai: ['Đọc hiểu văn bản thông tin tổng hợp', 'Thực hành tiếng Việt: Cách giới thiệu tài liệu tham khảo, trích dẫn', 'Viết: Báo cáo nghiên cứu về một vấn đề', 'Nói và nghe: Trình bày báo cáo nghiên cứu'], on: 'Ôn tập học kì I',
        lt: ['Văn bản thông tin tổng hợp có nhiều cách trình bày kết hợp; mục đích chính là cung cấp thông tin khách quan.', 'Trích dẫn trực tiếp (đặt trong ngoặc kép) và gián tiếp; ghi rõ tác giả, năm, tên tài liệu.'],
        q: `? Trích dẫn trực tiếp cần đặt trong: | Dấu ngoặc kép | Dấu ngoặc đơn | Dấu gạch ngang | Dấu chấm phẩy
? Mục đích chính của văn bản thông tin là: | Cung cấp thông tin khách quan | Bày tỏ cảm xúc | Gây cười | Kể chuyện hư cấu
+ Danh mục tài liệu tham khảo thể hiện tính trung thực khoa học.
- Báo cáo nghiên cứu không cần nêu phương pháp nghiên cứu.
? Trích dẫn gián tiếp là: | Thuật lại ý của người khác, không đặt trong ngoặc kép | Dẫn nguyên văn trong ngoặc kép | Không ghi nguồn | Sao chép toàn bộ
? Báo cáo nghiên cứu thường có phần: | Kết quả và kết luận | Chỉ có lời chào | Chỉ hình ảnh | Thơ
+ Danh mục tài liệu tham khảo đặt ở cuối báo cáo.
- Đạo văn là hành vi được chấp nhận.` },
      { hk: 2, ten: 'Hồ Chí Minh – "Văn hoá phải soi đường cho quốc dân đi"', bai: ['Tác gia Hồ Chí Minh', 'Tuyên ngôn Độc lập (Hồ Chí Minh)', 'Mộ – Chiều tối (Hồ Chí Minh)', 'Nguyên tiêu – Rằm tháng Giêng (Hồ Chí Minh)', 'Những trò lố hay là Va-ren và Phan Bội Châu (Nguyễn Ái Quốc)', 'Viết, nói và nghe: Báo cáo kết quả bài tập dự án', 'Thực hành đọc: Vọng nguyệt; Cảnh khuya'],
        lt: ['<b>Hồ Chí Minh</b> (1890–1969): anh hùng giải phóng dân tộc, danh nhân văn hoá; sự nghiệp văn học gồm văn chính luận, truyện và kí, thơ ca.', '"Tuyên ngôn Độc lập" (2/9/1945, Quảng trường Ba Đình): áng văn chính luận mẫu mực; cơ sở pháp lí (trích Tuyên ngôn Mỹ, Pháp), cơ sở thực tế, lời tuyên bố độc lập.', '"Chiều tối" (<i>Nhật kí trong tù</i>): vẻ đẹp cổ điển và hiện đại, tinh thần lạc quan.', '"Những trò lố hay là Va-ren và Phan Bội Châu": truyện ngắn châm biếm sắc sảo.'],
        q: `? "Tuyên ngôn Độc lập" được Chủ tịch Hồ Chí Minh đọc vào ngày: | 2/9/1945 | 19/8/1945 | 7/5/1954 | 30/4/1975
? Mở đầu "Tuyên ngôn Độc lập", Hồ Chí Minh trích dẫn Tuyên ngôn của: | Mỹ và Pháp | Anh và Nga | Trung Quốc | Nhật Bản
? Bài thơ "Mộ" (Chiều tối) thuộc tập: | Nhật kí trong tù | Từ ấy | Việt Bắc | Lửa thiêng
? "Những trò lố hay là Va-ren và Phan Bội Châu" thuộc thể loại: | Truyện ngắn châm biếm | Thơ trữ tình | Hồi kí | Kịch
+ "Tuyên ngôn Độc lập" là áng văn chính luận mẫu mực.
- "Nhật kí trong tù" được viết bằng chữ Quốc ngữ.
_ "Tất cả mọi người đều sinh ra có quyền [bình đẳng]."
? "Nhật kí trong tù" được Hồ Chí Minh sáng tác bằng: | Chữ Hán | Chữ Quốc ngữ | Chữ Nôm | Tiếng Pháp
? "Nhật kí trong tù" được viết trong thời gian Người bị giam ở: | Quảng Tây (Trung Quốc) | Côn Đảo | Hỏa Lò | Pa-ri
? Bài "Cảnh khuya" được sáng tác ở: | Chiến khu Việt Bắc | Pa-ri | Hồng Kông | Pác Bó năm 1941
? Bút danh Nguyễn Ái Quốc gắn với hoạt động của Bác ở: | Pháp | Mỹ | Nhật | Liên Xô
+ Thơ Hồ Chí Minh kết hợp vẻ đẹp cổ điển và tinh thần hiện đại.
- "Tuyên ngôn Độc lập" là một bài thơ.` },
      { hk: 2, ten: 'Sự thật trong tác phẩm kí', bai: ['Nghệ thuật băm thịt gà (trích Việc làng – Ngô Tất Tố)', 'Bước vào đời (trích Nhớ nghĩ chiều hôm – Đào Duy Anh)', 'Thực hành tiếng Việt: Ngôn ngữ trang trọng và ngôn ngữ thân mật', 'Viết: Nghị luận về một vấn đề liên quan đến tuổi trẻ (cách ứng xử trong các mối quan hệ)', 'Nói và nghe: Trình bày quan điểm về một vấn đề liên quan đến tuổi trẻ', 'Thực hành đọc: Vĩ tuyến 17 (Xuân Phượng)'],
        lt: ['<b>Phóng sự</b>: thể kí ghi chép người thật, việc thật có tính thời sự, phê phán. <b>Hồi kí</b>: tác giả kể lại những sự việc mình đã trải qua.', '"Việc làng" (Ngô Tất Tố): phóng sự phê phán hủ tục nông thôn trước Cách mạng.', '<b>Ngôn ngữ trang trọng</b>: dùng trong hoàn cảnh nghi thức; <b>ngôn ngữ thân mật</b>: dùng trong giao tiếp gần gũi.'],
        q: `? "Việc làng" của Ngô Tất Tố thuộc thể loại: | Phóng sự | Tiểu thuyết | Thơ | Kịch
? "Nhớ nghĩ chiều hôm" là hồi kí của: | Đào Duy Anh | Ngô Tất Tố | Tô Hoài | Nguyễn Tuân
? Ngôn ngữ dùng trong phát biểu tại lễ khai giảng là: | Ngôn ngữ trang trọng | Ngôn ngữ thân mật | Tiếng lóng | Ngôn ngữ mạng
+ Hồi kí do tác giả kể lại những điều mình đã trải qua.
- Phóng sự là thể loại hoàn toàn hư cấu.
? Ngô Tất Tố là tác giả tiểu thuyết: | Tắt đèn | Số đỏ | Bỉ vỏ | Lão Hạc
? Hồi kí khác tiểu thuyết ở chỗ: | Kể lại sự việc có thật tác giả đã trải qua | Hoàn toàn hư cấu | Không có nhân vật | Viết bằng thơ
? Ngôn ngữ thân mật thường dùng khi: | Giao tiếp với người thân, bạn bè | Phát biểu hội nghị | Viết văn bản hành chính | Đọc diễn văn
+ Phóng sự cần tính xác thực và thời sự.
- Ngôn ngữ trang trọng phù hợp khi nói chuyện với bạn thân hằng ngày.` },
      { hk: 2, ten: 'Dấu ấn của người viết trong văn bản nghị luận', bai: ['Đọc hiểu văn bản nghị luận văn học và xã hội', 'Thực hành tiếng Việt: Biện pháp tăng tính khẳng định, phủ định', 'Viết: Nghị luận về một vấn đề xã hội', 'Nói và nghe: Tranh biện về một vấn đề'],
        lt: ['Dấu ấn người viết thể hiện qua: cách nêu vấn đề, lựa chọn lí lẽ, bằng chứng, giọng điệu, cảm xúc và thái độ.', 'Biện pháp tăng tính khẳng định, phủ định: câu phủ định hai lần, câu hỏi tu từ, từ ngữ nhấn mạnh.'],
        q: `? Dấu ấn người viết trong văn nghị luận thể hiện rõ qua: | Giọng điệu, thái độ, cách lập luận | Số trang | Kiểu chữ | Khổ giấy
? "Không ai không yêu quê hương" là câu dùng biện pháp: | Phủ định hai lần để khẳng định | Liệt kê | So sánh | Nhân hoá
+ Câu hỏi tu từ có thể dùng để khẳng định mạnh mẽ một ý kiến.
- Văn nghị luận không thể hiện cảm xúc của người viết.
? Câu hỏi tu từ trong văn nghị luận dùng để: | Khẳng định hoặc phủ định mạnh mẽ, gây chú ý | Hỏi thông tin | Kể chuyện | Liệt kê
? Giọng điệu trong văn nghị luận thể hiện: | Thái độ, cảm xúc của người viết | Số trang | Tên tác phẩm | Thời gian
+ Văn nghị luận có thể kết hợp yếu tố biểu cảm.
- Câu hỏi tu từ luôn cần người nghe trả lời.` },
      { hk: 2, ten: 'Hành trang vào tương lai', bai: ['Đọc hiểu văn bản về khát vọng, hoài bão của tuổi trẻ', 'Thực hành tiếng Việt: Ôn tập tổng hợp', 'Viết: Nghị luận xã hội tổng hợp', 'Nói và nghe: Trình bày định hướng nghề nghiệp của bản thân'], on: 'Ôn tập cuối năm',
        lt: ['Ôn tập: đặc trưng thể loại (truyện, thơ, kí, kịch, nghị luận, thông tin) và kĩ năng đọc – viết – nói – nghe.', 'Chuẩn bị kì thi tốt nghiệp THPT: đọc hiểu văn bản ngoài SGK, viết đoạn nghị luận văn học, bài nghị luận xã hội.'],
        q: `? Đề thi tốt nghiệp THPT môn Ngữ văn theo chương trình mới thường gồm: | Đọc hiểu và Viết | Chỉ trắc nghiệm | Chỉ đọc thuộc lòng | Chỉ chép lại văn mẫu
+ Văn bản đọc hiểu trong đề thi có thể nằm ngoài sách giáo khoa.
- Chỉ cần học thuộc văn mẫu là làm tốt bài thi theo chương trình mới.
? Đề đọc hiểu thường yêu cầu xác định: | Phương thức biểu đạt, biện pháp tu từ, nội dung chính | Năm sinh người ra đề | Số chữ của đề | Màu giấy
? Đoạn văn nghị luận khoảng 200 chữ cần: | Có câu chủ đề, lí lẽ và dẫn chứng | Chỉ một câu | Không có ý | Chép văn mẫu
+ Đọc kĩ đề giúp tránh lạc đề.
- Bài nghị luận văn học không cần dẫn chứng từ tác phẩm.`, fns: { dh: TV.dochieu(5) } }
    ],
    essays: {
      1: [['Phân tích hình tượng người lính trong bài thơ "Tây Tiến" (Quang Dũng).', ['hào hoa', 'bi tráng', 'lãng mạn'], 'Người lính Tây Tiến: vẻ đẹp hào hùng (vượt gian khổ, coi thường cái chết), hào hoa lãng mạn (mắt trừng gửi mộng, dáng kiều thơm), bi tráng (sự hi sinh "áo bào thay chiếu", "sông Mã gầm lên khúc độc hành"). Bút pháp lãng mạn kết hợp hiện thực.', 4],
        ['So sánh hai nhân vật Xuân Tóc Đỏ (Số đỏ) và Chí Phèo (Chí Phèo) để thấy cách các nhà văn phản ánh xã hội.', ['so sánh', 'trào phúng', 'hiện thực'], 'Điểm giống: đều xuất thân thấp kém, sản phẩm của xã hội cũ. Khác: Xuân gặp thời, leo thang nhờ sự lố lăng của xã hội "Âu hoá" (bút pháp trào phúng); Chí bị tha hoá, bi kịch cự tuyệt quyền làm người (bút pháp hiện thực, nhân đạo). Đánh giá giá trị phê phán.', 4]],
      2: [['Phân tích nghệ thuật lập luận trong "Tuyên ngôn Độc lập" (Hồ Chí Minh).', ['cơ sở pháp lí', 'cơ sở thực tế', 'lập luận'], 'Cơ sở pháp lí: trích dẫn Tuyên ngôn Mỹ 1776, Tuyên ngôn Pháp 1791 (khéo léo, "suy rộng ra"); cơ sở thực tế: vạch tội ác thực dân Pháp, khẳng định nhân dân ta giành chính quyền từ tay Nhật; lời tuyên bố độc lập đanh thép. Lập luận chặt chẽ, dẫn chứng xác thực, ngôn ngữ hùng hồn.', 4],
        ['Viết bài văn nghị luận về hoài bão, ước mơ của tuổi trẻ hôm nay.', ['hoài bão', 'ước mơ', 'hành động'], 'Giải thích hoài bão, ước mơ; ý nghĩa: động lực phấn đấu, định hướng tương lai, đóng góp cho xã hội; dẫn chứng tấm gương; phê phán sống không mục tiêu, ảo tưởng; bài học: ước mơ gắn với hành động, học tập, rèn luyện.', 5]]
    }
  });
})();

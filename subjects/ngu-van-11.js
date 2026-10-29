/* Ngữ văn 11 – KNTT. Tên bài học, văn bản theo mục lục SGK; câu hỏi do PLT-Edu soạn. */
(function () {
  const TV = PLT.TV;
  PLT.KB.build({
    id: 'ngu-van-11', lop: 11, mon: 'Ngữ văn', icon: '📖', nhan: 'Bài', so: false, essayMax: 2,
    topics: [
      { hk: 1, ten: 'Câu chuyện và điểm nhìn trong truyện kể', bai: ['Vợ nhặt (Kim Lân)', 'Chí Phèo (Nam Cao)', 'Thực hành tiếng Việt: Đặc điểm cơ bản của ngôn ngữ nói và ngôn ngữ viết', 'Viết: Nghị luận về một tác phẩm truyện (đặc điểm trong cách kể)', 'Nói và nghe: Thuyết trình về nghệ thuật kể chuyện', 'Thực hành đọc: Cải ơi! (Nguyễn Ngọc Tư)'],
        lt: ['<b>Điểm nhìn</b>: vị trí người kể quan sát, kể lại câu chuyện (bên ngoài / bên trong nhân vật).', '"Vợ nhặt" (Kim Lân): bối cảnh nạn đói 1945; Tràng "nhặt" được vợ; niềm khát khao hạnh phúc, tình người trong cảnh đói; chi tiết lá cờ đỏ, Việt Minh.', '"Chí Phèo" (Nam Cao): bi kịch bị cự tuyệt quyền làm người của người nông dân bị tha hoá; bát cháo hành của Thị Nở đánh thức Chí.'],
        q: `? Bối cảnh của truyện "Vợ nhặt" là: | Nạn đói năm 1945 | Kháng chiến chống Mỹ | Thời bao cấp | Thời phong kiến xa xưa
? Chi tiết đánh thức bản tính lương thiện của Chí Phèo là: | Bát cháo hành của Thị Nở | Tiếng chửi | Rượu | Con dao
? "Chí Phèo" là tác phẩm của: | Nam Cao | Kim Lân | Nguyễn Tuân | Thạch Lam
? Nhân vật "nhặt" được vợ trong "Vợ nhặt" là: | Tràng | Chí Phèo | Bá Kiến | Mị
+ "Chí Phèo" thể hiện bi kịch bị cự tuyệt quyền làm người.
- Ngôn ngữ nói không bao giờ có yếu tố phi ngôn ngữ đi kèm.
= Kim Lân = Vợ nhặt
= Nam Cao = Chí Phèo
= Nguyễn Ngọc Tư = Cải ơi!
? Bà cụ Tứ trong "Vợ nhặt" là mẹ của: | Tràng | Chí Phèo | Mị | A Phủ
? Nhân vật Bá Kiến trong "Chí Phèo" là: | Cường hào ở làng Vũ Đại | Người nông dân nghèo | Thầy giáo | Bạn của Chí
? Làng của Chí Phèo là làng: | Vũ Đại | Đông Xá | Cổ Nhuế | Mỹ Lộc
+ Nam Cao là nhà văn hiện thực xuất sắc trước Cách mạng tháng Tám.
- Thị Nở là vợ của Bá Kiến.` },
      { hk: 1, ten: 'Cấu tứ và hình ảnh trong thơ trữ tình', bai: ['Nhớ đồng (Tố Hữu)', 'Tràng giang (Huy Cận)', 'Con đường mùa đông (A. Pu-skin)', 'Thực hành tiếng Việt: Một số hiện tượng phá vỡ quy tắc ngôn ngữ thông thường', 'Viết: Nghị luận về một tác phẩm thơ (cấu tứ và hình ảnh)', 'Thực hành đọc: Thời gian (Văn Cao)'],
        lt: ['<b>Cấu tứ</b>: cách tổ chức, triển khai ý tưởng, hình ảnh trong bài thơ.', '"Tràng giang" (Huy Cận, tập <i>Lửa thiêng</i>): nỗi sầu nhân thế, nỗi cô đơn trước vũ trụ, lòng yêu nước thầm kín; màu sắc cổ điển và hiện đại.', '"Nhớ đồng" (Tố Hữu, tập <i>Từ ấy</i>): viết trong nhà lao, nỗi nhớ quê, nhớ đồng, khát khao tự do.'],
        q: `? "Tràng giang" in trong tập thơ: | Lửa thiêng | Từ ấy | Thơ thơ | Điêu tàn
? "Nhớ đồng" được Tố Hữu sáng tác trong hoàn cảnh: | Bị giam trong nhà lao | Đi du lịch | Đang ở chiến khu Việt Bắc | Ở nước ngoài
? "Con đường mùa đông" là bài thơ của nhà thơ: | Pu-skin | Ta-go | Đỗ Phủ | Lý Bạch
? Cấu tứ của bài thơ là: | Cách tổ chức, triển khai ý tưởng, hình ảnh | Số câu thơ | Vần thơ | Tên bài thơ
+ "Tràng giang" kết hợp vẻ đẹp cổ điển và hiện đại.
- "Thời gian" là bài thơ của Tố Hữu.
? Câu thơ mở đầu "Tràng giang": | Sóng gợn tràng giang buồn điệp điệp | Ngoài thềm rơi chiếc lá đa | Em không nghe mùa thu | Sao anh không về chơi thôn Vĩ
? Huy Cận là nhà thơ của phong trào: | Thơ mới | Thơ cách mạng 1960 | Thơ trung đại | Thơ hậu hiện đại
? Tố Hữu viết bài "Từ ấy" năm: | 1938 | 1945 | 1954 | 1975
+ Bài "Tràng giang" có lời đề từ "Bâng khuâng trời rộng nhớ sông dài".
- Tố Hữu là nhà thơ của phong trào Thơ mới lãng mạn.`, fns: { bp: TV.bienphap(5) } },
      { hk: 1, ten: 'Cấu trúc của văn bản nghị luận', bai: ['Cầu hiền chiếu (Ngô Thì Nhậm)', 'Tôi có một ước mơ (Mác-tin Lu-thơ Kinh)', 'Một thời đại trong thi ca (Hoài Thanh)', 'Thực hành tiếng Việt: Ngôn ngữ nói và ngôn ngữ viết (tiếp theo)', 'Viết: Nghị luận về một vấn đề xã hội', 'Nói và nghe: Thảo luận về một vấn đề xã hội'],
        lt: ['Cấu trúc văn bản nghị luận: vấn đề → luận điểm → lí lẽ → bằng chứng; mối quan hệ chặt chẽ giữa các yếu tố.', '"Cầu hiền chiếu" (Ngô Thì Nhậm thay vua Quang Trung soạn): kêu gọi người hiền tài ra giúp nước.', '"Tôi có một ước mơ" (M. L. King): bài diễn văn đấu tranh cho bình đẳng chủng tộc.', '"Một thời đại trong thi ca" (Hoài Thanh, <i>Thi nhân Việt Nam</i>): tinh thần thơ mới — chữ "tôi".'],
        q: `? "Cầu hiền chiếu" được Ngô Thì Nhậm soạn thay cho: | Vua Quang Trung | Vua Lê Lợi | Vua Gia Long | Vua Trần Nhân Tông
? Bài diễn văn "Tôi có một ước mơ" đấu tranh cho: | Bình đẳng chủng tộc | Bảo vệ môi trường | Hoà bình thế giới | Quyền trẻ em
? "Một thời đại trong thi ca" trích từ tác phẩm: | Thi nhân Việt Nam | Truyền kì mạn lục | Việt Nam sử lược | Lửa thiêng
+ Chiếu là thể văn vua dùng để ban bố mệnh lệnh.
- Văn bản nghị luận không cần bằng chứng.
? Chiếu là thể văn: | Vua ban bố mệnh lệnh cho bề tôi, nhân dân | Thần dân dâng lên vua | Kêu gọi đánh giặc | Thông báo chiến thắng
? Mác-tin Lu-thơ Kinh là nhà hoạt động nhân quyền người: | Mỹ | Anh | Pháp | Nam Phi
? Hoài Thanh và Hoài Chân là tác giả cuốn: | Thi nhân Việt Nam | Việt Nam sử lược | Văn chương và hành động | Truyện Kiều
+ Luận điểm phải phục vụ cho luận đề của văn bản nghị luận.
- Bài "Cầu hiền chiếu" được viết bằng chữ Quốc ngữ.` },
      { hk: 1, ten: 'Cấu trúc của văn bản thông tin', bai: ['Đọc hiểu văn bản thông tin có lồng ghép nhiều yếu tố', 'Thực hành tiếng Việt: Sử dụng phương tiện phi ngôn ngữ', 'Viết: Báo cáo nghiên cứu về một vấn đề tự nhiên hoặc xã hội', 'Nói và nghe: Trình bày báo cáo kết quả nghiên cứu'],
        lt: ['Văn bản thông tin: nhan đề, sa-pô, đề mục, đoạn văn, phương tiện phi ngôn ngữ; cách trình bày theo trật tự thời gian, nguyên nhân – kết quả, so sánh – đối chiếu…', 'Văn bản thông tin có thể lồng ghép yếu tố tự sự, miêu tả, biểu cảm để tăng tính hấp dẫn.'],
        q: `? Phần sa-pô trong văn bản thông tin có tác dụng: | Tóm tắt, gợi mở nội dung chính | Kết thúc văn bản | Ghi nguồn | Liệt kê tài liệu
? Cách trình bày theo nguyên nhân – kết quả giúp người đọc: | Hiểu mối quan hệ giữa các sự kiện | Nhớ tên tác giả | Đọc nhanh hơn | Bỏ qua chi tiết
+ Biểu đồ, bảng số liệu giúp thông tin trực quan hơn.
- Văn bản thông tin không được dùng yếu tố miêu tả.
? Văn bản thông tin có thể trình bày theo cách: | Trật tự thời gian, nguyên nhân – kết quả, so sánh – đối chiếu | Chỉ theo vần | Chỉ bằng thơ | Không có trật tự
? Đề mục trong văn bản thông tin giúp: | Người đọc nắm cấu trúc và nội dung chính | Trang trí | Làm dài văn bản | Gây khó hiểu
+ Văn bản thông tin cần chính xác, khách quan.
- Sa-pô luôn đặt ở cuối văn bản.` },
      { hk: 1, ten: 'Tích trò sân khấu và kịch', bai: ['Đọc hiểu văn bản kịch (bi kịch, hài kịch)', 'Thực hành tiếng Việt: Lỗi về thành phần câu và cách sửa', 'Viết: Nghị luận về một tác phẩm kịch', 'Nói và nghe: Giới thiệu một tác phẩm kịch'], on: 'Ôn tập học kì I',
        lt: ['<b>Kịch</b>: tác phẩm viết để diễn trên sân khấu; gồm lời thoại (đối thoại, độc thoại, bàng thoại) và chỉ dẫn sân khấu.', '<b>Bi kịch</b>: xung đột gay gắt, nhân vật anh hùng có kết cục bi thảm; <b>hài kịch</b>: phê phán cái xấu qua tiếng cười.', 'Xung đột kịch là yếu tố then chốt thúc đẩy hành động kịch.'],
        q: `? Lời nhân vật nói một mình, bộc lộ suy nghĩ nội tâm gọi là: | Độc thoại | Đối thoại | Bàng thoại | Chỉ dẫn sân khấu
? Yếu tố then chốt của kịch là: | Xung đột | Vần điệu | Cước chú | Sa-pô
? Bi kịch thường kết thúc: | Bi thảm | Có hậu, vui vẻ | Bằng tiếng cười | Không có kết thúc
+ Hài kịch dùng tiếng cười để phê phán cái xấu.
- Kịch không có lời thoại.
= Đối thoại = Lời trao đổi giữa các nhân vật
= Độc thoại = Nhân vật nói với chính mình
= Bàng thoại = Nói riêng với khán giả
? Lời chỉ dẫn sân khấu trong kịch bản thường đặt trong: | Dấu ngoặc đơn hoặc in nghiêng | Dấu ngoặc kép | Dấu chấm phẩy | Không có
? "Hamlet" là vở bi kịch của: | Sếch-xpia | Mô-li-e | Sê-khốp | Ip-xen
? "Vũ Như Tô" là vở kịch của: | Nguyễn Huy Tưởng | Lưu Quang Vũ | Nam Cao | Kim Lân
+ Xung đột kịch thúc đẩy hành động của nhân vật.
- Kịch bản không có lời thoại.` },
      { hk: 2, ten: 'Nguyễn Du – "Những điều trông thấy mà đau đớn lòng"', bai: ['Tác gia Nguyễn Du', 'Trao duyên (trích Truyện Kiều)', 'Độc Tiểu Thanh kí (Nguyễn Du)', 'Thực hành tiếng Việt: Biện pháp tu từ lặp cấu trúc, biện pháp tu từ đối', 'Viết: Thuyết minh về một tác phẩm văn học', 'Thực hành đọc: Chí khí anh hùng; Mộng đắc thái liên'],
        lt: ['<b>Nguyễn Du</b> (1765–1820): đại thi hào dân tộc, danh nhân văn hoá thế giới; chủ nghĩa nhân đạo sâu sắc.', '<b>Truyện Kiều</b> (Đoạn trường tân thanh): truyện thơ Nôm, 3254 câu lục bát.', '"Trao duyên": Kiều nhờ Thuý Vân trả nghĩa Kim Trọng — bi kịch tình yêu, nhân cách cao đẹp của Kiều.', '"Độc Tiểu Thanh kí": thương xót số phận người tài hoa bạc mệnh.'],
        q: `? Truyện Kiều gồm bao nhiêu câu thơ lục bát? | 3254 | 3000 | 2000 | 1500
? Tên gọi khác của Truyện Kiều là: | Đoạn trường tân thanh | Chinh phụ ngâm | Lục Vân Tiên | Cung oán ngâm khúc
? Trong đoạn "Trao duyên", Kiều trao duyên cho: | Thuý Vân | Kim Trọng | Từ Hải | Hoạn Thư
? "Độc Tiểu Thanh kí" thể hiện niềm thương cảm với: | Người tài hoa bạc mệnh | Người nông dân | Vua chúa | Trẻ em
+ Nguyễn Du được vinh danh là danh nhân văn hoá thế giới.
- Truyện Kiều được viết bằng chữ Hán theo thể thất ngôn bát cú.
_ "Trăm năm trong cõi người ta, Chữ [tài] chữ mệnh khéo là ghét nhau."
? Nguyễn Du có tên chữ là: | Tố Như | Ức Trai | Bạch Vân | Thanh Hiên
? Quê hương của Nguyễn Du ở: | Tiên Điền, Nghi Xuân, Hà Tĩnh | Côn Sơn, Hải Dương | Kim Liên, Nghệ An | Vĩnh Lại, Hải Dương
? Truyện Kiều dựa theo cốt truyện của tác phẩm: | Kim Vân Kiều truyện (Thanh Tâm Tài Nhân) | Tây du kí | Tam quốc diễn nghĩa | Liêu trai chí dị
? Từ Hải xuất hiện trong đoạn trích: | Chí khí anh hùng | Trao duyên | Chị em Thuý Kiều | Kiều ở lầu Ngưng Bích
+ Nghệ thuật tả cảnh ngụ tình được Nguyễn Du sử dụng tài tình.
- Nguyễn Du sống ở thế kỉ XV.` },
      { hk: 2, ten: 'Ghi chép và tưởng tượng trong kí', bai: ['Ai đã đặt tên cho dòng sông? (Hoàng Phủ Ngọc Tường)', '"Và tôi vẫn muốn mẹ…" (X. A-lếch-xi-ê-vích)', 'Cà Mau quê xứ (Trần Tuấn)', 'Thực hành tiếng Việt: Hiện tượng phá vỡ quy tắc ngôn ngữ thông thường (tiếp theo)', 'Viết: Thuyết minh về một sự vật, hiện tượng trong đời sống xã hội', 'Nói và nghe: Thảo luận, tranh luận về một vấn đề trong đời sống'],
        lt: ['<b>Kí</b>: thể loại ghi chép người thật, việc thật, kết hợp tự sự, miêu tả, biểu cảm; có tuỳ bút, bút kí, hồi kí, phóng sự…', '"Ai đã đặt tên cho dòng sông?" (Hoàng Phủ Ngọc Tường): bút kí về sông Hương — vẻ đẹp thiên nhiên, lịch sử, văn hoá; văn phong tài hoa, uyên bác.'],
        q: `? "Ai đã đặt tên cho dòng sông?" viết về dòng sông: | Sông Hương | Sông Hồng | Sông Đà | Sông Cửu Long
? Tác giả "Ai đã đặt tên cho dòng sông?" là: | Hoàng Phủ Ngọc Tường | Nguyễn Tuân | Thạch Lam | Tô Hoài
? Đặc trưng cơ bản của thể kí là: | Ghi chép người thật, việc thật | Hoàn toàn hư cấu | Viết bằng thơ | Chỉ có đối thoại
+ Kí có thể kết hợp ghi chép sự thật với tưởng tượng, liên tưởng.
- Bút kí là thể loại sân khấu.
? Hoàng Phủ Ngọc Tường gắn bó với vùng đất: | Huế | Hà Nội | Sài Gòn | Cà Mau
? Tuỳ bút là thể kí: | Thiên về bộc lộ cảm xúc, suy nghĩ của tác giả | Kể chuyện hư cấu | Kịch | Thơ lục bát
? Xvét-la-na A-lếch-xi-ê-vích đoạt giải Nô-ben Văn học năm: | 2015 | 2000 | 1990 | 2022
+ Kí kết hợp ghi chép sự thật với cảm xúc, liên tưởng.
- Bút kí là thể loại thơ.` },
      { hk: 2, ten: 'Tiếng cười và sự phê phán', bai: ['Đọc hiểu truyện và kịch trào phúng', 'Thực hành tiếng Việt: Biện pháp chơi chữ, nói mỉa', 'Viết: Nghị luận về một vấn đề xã hội', 'Nói và nghe: Trình bày ý kiến về một hiện tượng xã hội'],
        lt: ['Văn học trào phúng: dùng tiếng cười (hài hước, châm biếm, đả kích) để phê phán thói hư tật xấu.', 'Thủ pháp: phóng đại, tương phản, nói mỉa, chơi chữ, tình huống trớ trêu.'],
        q: `? Mục đích chính của văn học trào phúng là: | Phê phán cái xấu bằng tiếng cười | Ca ngợi người anh hùng | Kể chuyện thần thoại | Miêu tả thiên nhiên
? Thủ pháp thường dùng để tạo tiếng cười trào phúng là: | Phóng đại, tương phản | Liệt kê tài liệu | Trích dẫn khoa học | Chú thích
+ Tiếng cười châm biếm có thể mang tính giáo dục.
- Văn học trào phúng chỉ nhằm mua vui, không có ý nghĩa phê phán.
? Nói giảm, nói tránh trái ngược với biện pháp: | Nói quá | Ẩn dụ | So sánh | Hoán dụ
? Tiếng cười trào phúng hướng tới: | Phê phán thói hư tật xấu | Ca ngợi người tốt | Kể chuyện cổ tích | Thuyết minh khoa học
+ Nguyễn Công Hoan là nhà văn viết truyện ngắn trào phúng nổi tiếng.
- Châm biếm là ca ngợi nhân vật.`, fns: { bp: TV.bienphap(5) } },
      { hk: 2, ten: 'Lựa chọn và hành động', bai: ['Đọc hiểu bi kịch và văn bản nghị luận về sự lựa chọn', 'Thực hành tiếng Việt: Ôn tập', 'Viết: Nghị luận về một vấn đề xã hội (lựa chọn của tuổi trẻ)', 'Nói và nghe: Trình bày quan điểm về một vấn đề'], on: 'Ôn tập cuối năm',
        lt: ['Nhân vật bi kịch thường đứng trước những lựa chọn khó khăn, mâu thuẫn giữa khát vọng và hiện thực.', 'Bài học: lựa chọn có trách nhiệm, dám hành động vì lẽ phải.'],
        q: `? Nhân vật bi kịch thường đứng trước: | Những lựa chọn khó khăn, xung đột gay gắt | Cuộc sống bình yên | Chuyện cười | Không có mâu thuẫn
+ Lựa chọn có trách nhiệm là phẩm chất cần thiết của người trẻ.
- Không cần suy nghĩ khi đưa ra lựa chọn quan trọng.
? Vở "Vũ Như Tô" đặt ra mâu thuẫn giữa: | Khát vọng nghệ thuật và lợi ích của nhân dân | Thầy và trò | Hai quốc gia | Thiên nhiên và con người
? Câu nói "Sống hay không sống – đó là vấn đề" là lời của nhân vật: | Hamlet | Rô-mê-ô | Prô-mê-tê | Vũ Như Tô
+ Bi kịch giúp người đọc suy ngẫm về lựa chọn và trách nhiệm.
- Nhân vật bi kịch không có xung đột nội tâm.`, fns: { dh: TV.dochieu(5) } }
    ],
    essays: {
      1: [['Phân tích giá trị nhân đạo của truyện ngắn "Vợ nhặt" (Kim Lân).', ['nạn đói', 'tình người', 'khát vọng'], 'Cảm thông với nỗi khổ của người dân trong nạn đói 1945; phát hiện vẻ đẹp tình người (Tràng, bà cụ Tứ, người vợ nhặt); khát vọng sống, hạnh phúc, niềm tin vào tương lai (hình ảnh lá cờ đỏ, Việt Minh).', 4],
        ['Phân tích bi kịch bị cự tuyệt quyền làm người của Chí Phèo.', ['tha hoá', 'thức tỉnh', 'bi kịch'], 'Chí từ người nông dân lương thiện bị nhà tù thực dân và Bá Kiến đẩy vào tha hoá; gặp Thị Nở, bát cháo hành thức tỉnh khát vọng lương thiện; bị bà cô Thị Nở, xã hội cự tuyệt → giết Bá Kiến rồi tự sát. Giá trị hiện thực và nhân đạo.', 4]],
      2: [['Phân tích tâm trạng của Thuý Kiều trong đoạn trích "Trao duyên".', ['nhờ cậy', 'đau đớn', 'nhân cách'], 'Lời nhờ cậy khẩn khoản (cậy, chịu lời, lạy, thưa); lí lẽ thuyết phục Thuý Vân; tâm trạng giằng xé khi trao kỉ vật; đau đớn tột cùng, hướng về Kim Trọng ("Ôi Kim Lang! Hỡi Kim Lang!"). Nhân cách cao đẹp: hi sinh, giàu tình yêu.', 4],
        ['Viết bài văn nghị luận về sự lựa chọn của tuổi trẻ trước những cám dỗ của cuộc sống hiện đại.', ['lựa chọn', 'cám dỗ', 'bản lĩnh'], 'Nêu vấn đề; các cám dỗ (mạng xã hội, tiền bạc nhanh, tệ nạn); tầm quan trọng của lựa chọn đúng, bản lĩnh, giá trị sống; dẫn chứng; phản đề; bài học hành động.', 5]]
    }
  });
})();

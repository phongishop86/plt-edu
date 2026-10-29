/* Ngữ văn 7 – KNTT. Tên bài học, văn bản theo mục lục SGK; câu hỏi, ngữ liệu luyện tập do PLT-Edu soạn. */
(function () {
  const TV = PLT.TV;
  PLT.KB.build({
    id: 'ngu-van-7', lop: 7, mon: 'Ngữ văn', icon: '📖', nhan: 'Bài', so: false, essayMax: 2,
    topics: [
      { hk: 1, ten: 'Bầu trời tuổi thơ', bai: ['Bầy chim chìa vôi (Nguyễn Quang Thiều)', 'Đi lấy mật (trích Đất rừng phương Nam – Đoàn Giỏi)', 'Ngàn sao làm việc (Võ Quảng)', 'Thực hành tiếng Việt: Mở rộng thành phần chính của câu bằng cụm từ; phó từ', 'Viết: Tóm tắt văn bản theo những yêu cầu khác nhau về độ dài', 'Nói và nghe: Trao đổi về một vấn đề mà em quan tâm'],
        lt: ['<b>Truyện</b>: đề tài, chủ đề, nhân vật, người kể chuyện; tính cách nhân vật thể hiện qua ngoại hình, hành động, lời nói, suy nghĩ.', '"Bầy chim chìa vôi" (Nguyễn Quang Thiều): hai anh em Mon và Mên lo lắng cho bầy chim non khi nước sông lên — tình yêu thiên nhiên, lòng nhân hậu trẻ thơ.', '"Đi lấy mật" trích <i>Đất rừng phương Nam</i> (Đoàn Giỏi): An theo tía nuôi và Cò đi lấy mật ong rừng U Minh — vẻ đẹp thiên nhiên Nam Bộ.', '<b>Phó từ</b>: từ chuyên đi kèm danh từ, động từ, tính từ để bổ sung ý nghĩa (đã, đang, sẽ, rất, lắm, những, các…).', 'Mở rộng thành phần chính bằng cụm từ (cụm danh từ, cụm động từ, cụm tính từ) giúp câu cụ thể, sinh động.', '<b>Tóm tắt</b>: nêu đúng nội dung chính, theo trình tự, bằng lời văn của mình, đúng độ dài yêu cầu.'],
        q: `? "Đất rừng phương Nam" là tác phẩm của: | Đoàn Giỏi | Tô Hoài | Nguyễn Quang Thiều | Võ Quảng
? Truyện "Bầy chim chìa vôi" có hai nhân vật chính là: | Mon và Mên | An và Cò | Dế Mèn và Dế Choắt | Chi và Lan
? Trong câu "Em <b>đang</b> học bài", từ in đậm là: | Phó từ | Danh từ | Tính từ | Quan hệ từ
? "Ngàn sao làm việc" là bài thơ của: | Võ Quảng | Thanh Hải | Tế Hanh | Nguyễn Khoa Điềm
? Từ nào là phó từ chỉ mức độ? | Rất | Đã | Những | Cũng
? Tóm tắt văn bản cần: | Nêu nội dung chính, đúng trình tự, bằng lời văn của mình | Chép nguyên văn | Thêm chi tiết tưởng tượng | Bình luận dài
? Không gian chủ yếu trong "Đi lấy mật" là: | Rừng U Minh | Sông Hồng | Tây Bắc | Phố cổ Hội An
+ Phó từ thường đi kèm danh từ, động từ, tính từ.
+ "Đi lấy mật" thể hiện vẻ đẹp thiên nhiên và con người Nam Bộ.
+ Mở rộng chủ ngữ, vị ngữ bằng cụm từ làm câu cụ thể hơn.
- Phó từ có thể làm chủ ngữ độc lập trong câu.
- "Bầy chim chìa vôi" là tác phẩm của Đoàn Giỏi.
- Tóm tắt văn bản là chép lại toàn bộ văn bản.
# Phó từ chỉ thời gian: Đã, Đang, Sẽ, Vừa
# Phó từ chỉ mức độ: Rất, Lắm, Quá, Hơi
= Nguyễn Quang Thiều = Bầy chim chìa vôi
= Đoàn Giỏi = Đất rừng phương Nam
= Võ Quảng = Ngàn sao làm việc
> Đọc kĩ văn bản > Xác định nội dung chính > Sắp xếp theo trình tự > Viết bằng lời văn của mình > Đối chiếu độ dài yêu cầu`, fns: { bp: TV.bienphap(5) } },
      { hk: 1, ten: 'Khúc nhạc tâm hồn', bai: ['Đồng dao mùa xuân (Nguyễn Khoa Điềm)', 'Gặp lá cơm nếp (Thanh Thảo)', 'Trở gió (Nguyễn Ngọc Tư)', 'Thực hành tiếng Việt: Biện pháp tu từ; nghĩa của từ', 'Viết: Tập làm thơ bốn chữ, năm chữ; đoạn văn ghi lại cảm xúc về bài thơ', 'Nói và nghe: Trình bày suy nghĩ về một vấn đề đời sống'],
        lt: ['<b>Thơ bốn chữ, năm chữ</b>: mỗi dòng 4 hoặc 5 tiếng; vần chân, vần lưng; nhịp 2/2, 2/3 hoặc 3/2.', '"Đồng dao mùa xuân" (Nguyễn Khoa Điềm): hình tượng người lính trẻ hi sinh trong chiến tranh, mãi mãi tuổi hai mươi — lòng biết ơn, xót thương.', '"Gặp lá cơm nếp" (Thanh Thảo): người lính xa nhà gặp lá cơm nếp, nhớ mẹ, nhớ quê, tình yêu đất nước.', '"Trở gió" (Nguyễn Ngọc Tư): tuỳ bút về gió chướng miền Tây, nỗi nhớ quê, nhớ mẹ.', 'Biện pháp tu từ: so sánh, nhân hoá, ẩn dụ, hoán dụ, điệp ngữ.'],
        q: `? Thơ năm chữ có mỗi dòng: | 5 tiếng | 4 tiếng | 6 tiếng | 7 tiếng
? "Đồng dao mùa xuân" viết về: | Người lính trẻ hi sinh mãi mãi tuổi hai mươi | Trò chơi trẻ em | Cảnh mùa xuân ở làng quê | Một người mẹ bán hàng
? "Gặp lá cơm nếp" là bài thơ của: | Thanh Thảo | Thanh Hải | Tế Hanh | Hữu Thỉnh
? "Trở gió" thuộc thể loại: | Tuỳ bút | Truyện ngắn | Thơ | Kịch
? Vần chân là vần được gieo ở: | Cuối dòng thơ | Giữa dòng thơ | Đầu dòng thơ | Tên bài thơ
? Biện pháp gọi tên sự vật này bằng tên sự vật khác có nét tương đồng là: | Ẩn dụ | Hoán dụ | So sánh | Điệp ngữ
+ Thơ bốn chữ thường có nhịp 2/2.
+ "Trở gió" là tác phẩm của Nguyễn Ngọc Tư.
- Thơ năm chữ có mỗi dòng 7 tiếng.
- Hoán dụ dựa trên quan hệ tương đồng giữa hai sự vật.
= Nguyễn Khoa Điềm = Đồng dao mùa xuân
= Thanh Thảo = Gặp lá cơm nếp
= Nguyễn Ngọc Tư = Trở gió
= Hữu Thỉnh = Chiều sông Thương`, fns: { bp: TV.bienphap(5) } },
      { hk: 1, ten: 'Cội nguồn yêu thương', bai: ['Vừa nhắm mắt vừa mở cửa sổ (Nguyễn Ngọc Thuần)', 'Người thầy đầu tiên (Trin-ghi-dơ Ai-tơ-ma-tốp)', 'Quê hương (Tế Hanh)', 'Thực hành tiếng Việt: Số từ; phó từ', 'Viết: Phân tích đặc điểm nhân vật trong tác phẩm văn học', 'Nói và nghe: Trình bày ý kiến về một vấn đề đời sống (gợi ra từ nhân vật văn học)'],
        lt: ['"Vừa nhắm mắt vừa mở cửa sổ" (Nguyễn Ngọc Thuần): người bố dạy con cảm nhận vẻ đẹp cuộc sống bằng mọi giác quan.', '"Người thầy đầu tiên" (Ai-tơ-ma-tốp, Cư-rơ-gư-xtan): thầy Đuy-sen tận tuỵ mở trường, dạy An-tư-nai, thay đổi số phận cô.', '"Quê hương" (Tế Hanh): làng chài ven biển, đoàn thuyền ra khơi, nỗi nhớ quê da diết.', '<b>Số từ</b>: chỉ số lượng (một, hai, vài, mấy) hoặc thứ tự (thứ nhất, thứ hai).', 'Phân tích nhân vật: ngoại hình, lời nói, hành động, suy nghĩ, mối quan hệ; nhận xét nghệ thuật xây dựng nhân vật.'],
        q: `? "Người thầy đầu tiên" là tác phẩm của nhà văn: | Ai-tơ-ma-tốp | Lép Tôn-xtôi | An-đéc-xen | Ê-xu-pe-ri
? Nhân vật người thầy trong "Người thầy đầu tiên" tên là: | Đuy-sen | An-tư-nai | Mon | Đa-ni-en
? Bài thơ "Quê hương" của Tế Hanh viết về: | Làng chài ven biển | Làng trồng lúa trung du | Phố phường Hà Nội | Núi rừng Tây Bắc
? Từ "thứ ba" trong câu "Em là con thứ ba" là: | Số từ chỉ thứ tự | Số từ chỉ số lượng | Phó từ | Lượng từ
? Từ nào là số từ chỉ số lượng? | Năm | Thứ năm | Rất | Những
+ Số từ có thể chỉ số lượng hoặc thứ tự.
+ Tế Hanh là tác giả bài thơ "Quê hương".
- An-tư-nai là tên người thầy trong truyện.
- Phân tích nhân vật chỉ cần kể lại toàn bộ truyện.
# Số từ chỉ số lượng: Một, Hai, Vài, Mấy
# Số từ chỉ thứ tự: Thứ nhất, Thứ hai, Thứ ba
= Nguyễn Ngọc Thuần = Vừa nhắm mắt vừa mở cửa sổ
= Tế Hanh = Quê hương
= Nguyên Hồng = Trong lòng mẹ` },
      { hk: 1, ten: 'Giai điệu đất nước', bai: ['Mùa xuân nho nhỏ (Thanh Hải)', 'Gò Me (Hoàng Tố Nguyên)', 'Bài thơ "Đường núi" của Nguyễn Đình Thi (Vũ Quần Phương)', 'Thực hành tiếng Việt: Biện pháp tu từ', 'Viết: Bài văn biểu cảm về con người hoặc sự việc', 'Nói và nghe: Trình bày ý kiến về hoạt động thiện nguyện vì cộng đồng'],
        lt: ['"Mùa xuân nho nhỏ" (Thanh Hải, 1980): bài thơ năm chữ, ước nguyện được làm "mùa xuân nho nhỏ" lặng lẽ dâng cho đời.', '"Gò Me" (Hoàng Tố Nguyên): vẻ đẹp quê hương Nam Bộ, con người cần cù, kiên cường.', 'Văn bản bình thơ "Đường núi": phân tích, đánh giá bài thơ của Nguyễn Đình Thi.', '<b>Văn biểu cảm</b>: bày tỏ tình cảm, cảm xúc về con người, sự việc; kết hợp kể, tả để bộc lộ cảm xúc.'],
        q: `? "Mùa xuân nho nhỏ" là bài thơ của: | Thanh Hải | Tế Hanh | Thanh Thảo | Nguyễn Đình Thi
? "Mùa xuân nho nhỏ" được viết theo thể thơ: | Năm chữ | Lục bát | Bốn chữ | Tự do
? Ước nguyện của nhà thơ trong "Mùa xuân nho nhỏ" là: | Lặng lẽ cống hiến cho đời | Được nổi tiếng | Được đi du lịch | Được nghỉ ngơi
? Văn biểu cảm chủ yếu nhằm: | Bày tỏ tình cảm, cảm xúc | Kể lại sự việc | Thuyết minh quy tắc | Tường trình sự việc
+ Văn biểu cảm có thể kết hợp yếu tố tự sự, miêu tả.
- "Mùa xuân nho nhỏ" là truyện ngắn.
= Thanh Hải = Mùa xuân nho nhỏ
= Hoàng Tố Nguyên = Gò Me
= Lò Ngân Sủn = Chiều biên giới` },
      { hk: 1, ten: 'Màu sắc trăm miền', bai: ['Tháng Giêng, mơ về trăng non rét ngọt (Vũ Bằng)', 'Chuyện cơm hến (Hoàng Phủ Ngọc Tường)', 'Hội lồng tồng (Trần Quốc Vượng – Lê Văn Hảo – Dương Tất Từ)', 'Thực hành tiếng Việt: Từ địa phương; dấu câu', 'Viết: Văn bản tường trình', 'Nói và nghe: Văn hoá truyền thống trong xã hội hiện đại'], on: 'Ôn tập học kì I',
        lt: ['<b>Tuỳ bút</b>: ghi chép cảm xúc, suy nghĩ chủ quan của tác giả; <b>tản văn</b>: bài văn ngắn, bộc lộ cảm xúc về sự việc đời thường.', '"Tháng Giêng, mơ về trăng non rét ngọt" (Vũ Bằng, trích <i>Thương nhớ mười hai</i>): nỗi nhớ Tết, mùa xuân Bắc Bộ.', '"Chuyện cơm hến" (Hoàng Phủ Ngọc Tường): món ăn dân dã xứ Huế và giá trị văn hoá ẩm thực.', '"Hội lồng tồng": lễ hội xuống đồng của người Tày, Nùng.', '<b>Văn bản tường trình</b>: trình bày lại sự việc đã xảy ra để người có trách nhiệm biết; có quốc hiệu, tiêu đề, người nhận, nội dung, cam kết, chữ kí.'],
        q: `? Cơm hến là món ăn đặc trưng của: | Huế | Hà Nội | Sài Gòn | Hải Phòng
? Hội lồng tồng là lễ hội của người: | Tày, Nùng | Chăm | Khơ-me | Ê-đê
? Văn bản tường trình dùng để: | Trình bày lại sự việc đã xảy ra cho người có trách nhiệm biết | Bày tỏ cảm xúc | Kể chuyện tưởng tượng | Quảng cáo sản phẩm
? "Thương nhớ mười hai" là tác phẩm của: | Vũ Bằng | Thạch Lam | Tô Hoài | Hoàng Phủ Ngọc Tường
? Tuỳ bút thiên về: | Bộc lộ cảm xúc, suy nghĩ của tác giả | Kể chuyện có cốt truyện chặt chẽ | Trình bày số liệu | Đối thoại kịch
+ Từ địa phương là từ chỉ dùng ở một hoặc một số địa phương.
+ Văn bản tường trình phải trung thực, khách quan.
- Văn bản tường trình nên viết bằng nhiều biện pháp tu từ.
- Cơm hến là món ăn đặc trưng của Hà Nội.
= Mẹ (phổ thông) = Má, u, bầm (địa phương)
= Quả dứa (phổ thông) = Trái thơm (Nam Bộ)
= Cái bát (phổ thông) = Cái chén (Nam Bộ)
> Quốc hiệu, tiêu ngữ > Tên văn bản > Người nhận > Nội dung sự việc > Lời cam đoan > Chữ kí, họ tên`, fns: { dc: TV.daucau } },
      { hk: 2, ten: 'Bài học cuộc sống', bai: ['Đẽo cày giữa đường (Ngụ ngôn Việt Nam)', 'Ếch ngồi đáy giếng (Trang Tử)', 'Con mối và con kiến (Nam Hương)', 'Một số câu tục ngữ Việt Nam', 'Con hổ có nghĩa (Vũ Trinh)', 'Thực hành tiếng Việt: Thành ngữ, tục ngữ; nói quá', 'Viết: Nghị luận về vấn đề đời sống (tán thành)', 'Nói và nghe: Kể lại một truyện ngụ ngôn'],
        lt: ['<b>Truyện ngụ ngôn</b>: truyện ngắn, mượn chuyện loài vật, đồ vật hoặc con người để nêu bài học về cách sống.', '"Đẽo cày giữa đường": phê phán người không có chính kiến, nghe ai cũng làm theo.', '"Ếch ngồi đáy giếng": phê phán kẻ hiểu biết hạn hẹp mà huênh hoang.', '<b>Tục ngữ</b>: câu nói ngắn gọn, có vần, nhịp, đúc kết kinh nghiệm về thiên nhiên, lao động, con người.', '<b>Nói quá</b>: phóng đại quy mô, mức độ để nhấn mạnh, gây ấn tượng.'],
        q: `? Truyện "Ếch ngồi đáy giếng" phê phán: | Kẻ hiểu biết hạn hẹp mà huênh hoang | Người chăm chỉ | Người thật thà | Người dũng cảm
? Bài học từ "Đẽo cày giữa đường" là: | Cần có chính kiến, không nghe theo người khác một cách mù quáng | Phải đẽo cày thật nhanh | Nên làm theo mọi lời góp ý | Không cần học nghề
? Câu "Tấc đất tấc vàng" là: | Tục ngữ | Thành ngữ | Ca dao | Câu đố
? Câu "Ráng mỡ gà, có nhà thì giữ" đúc kết kinh nghiệm về: | Thiên nhiên, thời tiết | Ăn uống | Học tập | Giao tiếp
? "Con hổ có nghĩa" là tác phẩm của: | Vũ Trinh | Trang Tử | Nam Hương | I-van Crư-lốp
? Câu nào dùng biện pháp nói quá? | Mồ hôi thánh thót như mưa ruộng cày | Trời hôm nay nắng | Em đi học | Con mèo nằm ngủ
+ Truyện ngụ ngôn thường ngắn gọn và nêu bài học về cách sống.
+ Tục ngữ có vần, nhịp, dễ nhớ.
- Thành ngữ là một câu hoàn chỉnh nêu kinh nghiệm.
- "Ếch ngồi đáy giếng" ca ngợi người hiểu biết rộng.
# Tục ngữ về thiên nhiên: Chuồn chuồn bay thấp thì mưa, Tháng bảy kiến bò chỉ lo lại lụt, Ráng mỡ gà có nhà thì giữ
# Tục ngữ về con người: Một mặt người bằng mười mặt của, Học thầy không tày học bạn, Uống nước nhớ nguồn
= Ếch ngồi đáy giếng = Hiểu biết hạn hẹp mà huênh hoang
= Đẽo cày giữa đường = Không có chính kiến
= Thầy bói xem voi = Nhìn phiến diện, một phía
= Con hổ có nghĩa = Đề cao lòng biết ơn` },
      { hk: 2, ten: 'Thế giới viễn tưởng', bai: ['Cuộc chạm trán trên đại dương (trích Hai vạn dặm dưới biển – Giuyn Véc-nơ)', 'Đường vào trung tâm vũ trụ (trích Thiên Mã – Hà Thuỷ Nguyên)', 'Dấu ấn Hồ Khanh (Nhật Văn)', 'Thực hành tiếng Việt: Mạch lạc và liên kết; dấu chấm lửng', 'Viết: Kể lại sự việc có thật liên quan đến nhân vật lịch sử', 'Nói và nghe: Vai trò của công nghệ đối với đời sống'],
        lt: ['<b>Truyện khoa học viễn tưởng</b>: kể về những điều kì lạ dựa trên tri thức khoa học, tưởng tượng về tương lai, vũ trụ, công nghệ.', '"Hai vạn dặm dưới biển" (Giuyn Véc-nơ, Pháp): tàu ngầm Nau-ti-lút và thuyền trưởng Nê-mô.', '<b>Dấu chấm lửng</b>: biểu thị còn nhiều sự vật chưa liệt kê, lời nói ngập ngừng, hoặc tạo bất ngờ.', '<b>Mạch lạc</b>: các phần, câu cùng hướng về chủ đề, sắp xếp hợp lí; <b>liên kết</b>: dùng phép lặp, thế, nối.'],
        q: `? "Hai vạn dặm dưới biển" là tác phẩm của: | Giuyn Véc-nơ | Ai-tơ-ma-tốp | Mác Tuên | Đa-ni-en Đi-phô
? Tên con tàu ngầm trong "Hai vạn dặm dưới biển" là: | Nau-ti-lút | Ti-ta-níc | A-pô-lô | Mây Phlao
? Truyện khoa học viễn tưởng dựa trên: | Tri thức khoa học và trí tưởng tượng | Hoàn toàn sự thật lịch sử | Kinh nghiệm thời tiết | Lời khuyên đạo đức
? Dấu chấm lửng KHÔNG dùng để: | Kết thúc câu hỏi | Biểu thị liệt kê chưa hết | Thể hiện lời nói ngập ngừng | Làm giãn nhịp, tạo bất ngờ
+ Truyện khoa học viễn tưởng thường có yếu tố tưởng tượng về công nghệ.
+ Phép thế dùng từ ngữ khác thay cho từ ngữ đã có ở câu trước.
- Dấu chấm lửng chỉ dùng ở đầu câu.
- "Hai vạn dặm dưới biển" là tác phẩm của nhà văn Việt Nam.
= Phép lặp = Lặp lại từ ngữ ở câu trước
= Phép thế = Dùng từ ngữ thay thế
= Phép nối = Dùng từ nối (nhưng, vì vậy, tuy nhiên…)` },
      { hk: 2, ten: 'Trải nghiệm để trưởng thành', bai: ['Bản đồ dẫn đường (Đa-ni-en Gốt-li-ép)', 'Hãy cầm lấy và đọc (Huỳnh Như Phương)', 'Nói với con (Y Phương)', 'Thực hành tiếng Việt: Liên kết; thuật ngữ', 'Viết: Nghị luận về vấn đề đời sống (phản đối)', 'Nói và nghe: Trình bày ý kiến về một vấn đề đời sống'],
        lt: ['<b>Văn bản nghị luận</b>: ý kiến (luận điểm), lí lẽ, bằng chứng nhằm thuyết phục người đọc.', '"Bản đồ dẫn đường": mỗi người cần tự vẽ tấm bản đồ cuộc đời mình, tôn trọng sự khác biệt.', '"Hãy cầm lấy và đọc" (Huỳnh Như Phương): bàn về giá trị của sách và việc đọc.', '"Nói với con" (Y Phương, dân tộc Tày): người cha nói với con về cội nguồn, phẩm chất của người đồng mình.'],
        q: `? "Nói với con" là bài thơ của: | Y Phương | Tế Hanh | Thanh Hải | Hữu Thỉnh
? Y Phương là nhà thơ dân tộc: | Tày | Kinh | Thái | Mường
? Yếu tố cốt lõi của văn bản nghị luận là: | Luận điểm, lí lẽ, bằng chứng | Nhân vật, cốt truyện | Vần, nhịp | Lời thoại, chỉ dẫn sân khấu
? "Hãy cầm lấy và đọc" bàn về: | Giá trị của sách và việc đọc | Cách nấu ăn | Lịch sử dân tộc | Thiên nhiên Nam Bộ
+ Bằng chứng trong văn nghị luận cần xác thực, tiêu biểu.
- Văn nghị luận chủ yếu dùng để kể chuyện.
= Luận điểm = Ý kiến chính của người viết
= Lí lẽ = Lời giải thích, lập luận
= Bằng chứng = Dẫn chứng, số liệu, ví dụ thực tế
> Nêu vấn đề > Nêu ý kiến của người viết > Trình bày lí lẽ và bằng chứng > Khẳng định lại ý kiến` },
      { hk: 2, ten: 'Hoà điệu với tự nhiên', bai: ['Thuỷ tiên tháng Một (Thô-mát L. Phrít-man)', 'Lễ rửa làng của người Lô Lô (Phạm Thuỳ Dung)', 'Bản tin về hoa anh đào (Nguyễn Vĩnh Nguyên)', 'Thực hành tiếng Việt: Cước chú, tài liệu tham khảo; thuật ngữ', 'Viết: Thuyết minh về quy tắc, luật lệ trong trò chơi hay hoạt động', 'Nói và nghe: Giải thích quy tắc, luật lệ trong trò chơi hay hoạt động'],
        lt: ['<b>Văn bản thông tin</b>: cung cấp thông tin khách quan; dùng nhan đề, sa-pô, đề mục, hình ảnh, số liệu.', '"Thuỷ tiên tháng Một": biến đổi khí hậu làm hoa thuỷ tiên nở sớm — cảnh báo về môi trường.', '"Lễ rửa làng của người Lô Lô" (Hà Giang): tục lệ cầu bình an.', 'Thuyết minh quy tắc trò chơi: giới thiệu trò chơi, chuẩn bị, luật chơi theo trình tự, lưu ý.'],
        q: `? "Thuỷ tiên tháng Một" đề cập vấn đề: | Biến đổi khí hậu | Lễ hội truyền thống | Văn hoá ẩm thực | Lịch sử dân tộc
? Lễ rửa làng là phong tục của người: | Lô Lô | Tày | Chăm | Ba Na
? Sa-pô trong văn bản thông tin là: | Đoạn mở đầu tóm tắt nội dung chính | Lời kết | Chú thích hình ảnh | Danh mục tài liệu
? Văn bản thuyết minh quy tắc trò chơi cần: | Trình bày luật chơi rõ ràng, theo trình tự | Bày tỏ cảm xúc | Kể chuyện tưởng tượng | Nêu số liệu kinh tế
+ Cước chú giải thích từ ngữ hoặc nguồn trích dẫn trong văn bản.
- Văn bản thông tin chủ yếu thể hiện cảm xúc chủ quan.
> Giới thiệu trò chơi > Chuẩn bị dụng cụ, người chơi > Cách chơi và luật chơi > Cách tính thắng thua > Lưu ý an toàn` },
      { hk: 2, ten: 'Trang sách và cuộc sống', bai: ['Đọc: Chinh phục những cuốn sách mới', 'Viết: Phân tích một nhân vật văn học yêu thích trong cuốn sách đã đọc', 'Nói và nghe: Ngày hội với sách'], on: 'Ôn tập học kì II',
        lt: ['Đọc mở rộng theo thể loại đã học: truyện, thơ, tuỳ bút, ngụ ngôn, khoa học viễn tưởng, nghị luận, văn bản thông tin.', 'Giới thiệu sách: tên sách, tác giả, nội dung chính, nhân vật, điều tâm đắc.'],
        q: `? Khi giới thiệu một cuốn sách, em nên nêu: | Tên sách, tác giả, nội dung chính, điều tâm đắc | Giá tiền | Số trang | Màu bìa
? Thể loại nào thuộc văn bản nghị luận? | Bàn về giá trị của việc đọc | Truyện cổ tích | Thơ bốn chữ | Tuỳ bút về mùa xuân
+ Ghi chép khi đọc giúp hiểu và nhớ nội dung lâu hơn.
- Chỉ cần đọc lời giới thiệu ở bìa là hiểu cả cuốn sách.
# Truyện: Người thầy đầu tiên, Bầy chim chìa vôi, Đi lấy mật
# Thơ: Mùa xuân nho nhỏ, Quê hương, Nói với con
# Ngụ ngôn: Ếch ngồi đáy giếng, Đẽo cày giữa đường`, fns: { dh: TV.dochieu(5) } }
    ],
    essays: {
      1: [['Viết bài văn phân tích đặc điểm một nhân vật trong tác phẩm văn học em đã học (ví dụ thầy Đuy-sen trong "Người thầy đầu tiên").', ['nhân vật', 'đặc điểm', 'chi tiết', 'nghệ thuật'], 'Mở bài: giới thiệu tác phẩm, nhân vật. Thân bài: phân tích từng đặc điểm (ngoại hình, hành động, lời nói, suy nghĩ) với dẫn chứng; nhận xét nghệ thuật. Kết bài: đánh giá ý nghĩa nhân vật.', 8],
        ['Viết bài văn biểu cảm về một người thân trong gia đình em.', ['yêu thương', 'kỉ niệm', 'cảm xúc'], 'Giới thiệu người thân; kể, tả những kỉ niệm, chi tiết tiêu biểu; bộc lộ cảm xúc chân thành; khẳng định tình cảm.', 8]],
      2: [['Viết bài văn nghị luận tán thành ý kiến: "Đọc sách là con đường quan trọng để tích luỹ tri thức".', ['ý kiến', 'lí lẽ', 'bằng chứng', 'sách'], 'Nêu vấn đề và ý kiến tán thành; lí lẽ 1: sách lưu giữ tri thức nhân loại; lí lẽ 2: đọc giúp mở rộng hiểu biết, bồi dưỡng tâm hồn; bằng chứng; phản bác ý kiến trái chiều; khẳng định lại.', 8],
        ['Viết bài văn thuyết minh về quy tắc của một trò chơi dân gian (ví dụ kéo co, ô ăn quan).', ['luật chơi', 'người chơi', 'cách chơi'], 'Giới thiệu trò chơi; chuẩn bị; số người chơi; cách chơi và luật chơi theo trình tự; cách xác định thắng thua; ý nghĩa, lưu ý an toàn.', 8]]
    }
  });
})();

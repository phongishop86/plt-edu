/* Ngữ văn 6 – KNTT. Tên bài học, văn bản theo mục lục SGK; câu hỏi, ngữ liệu luyện tập do PLT-Edu soạn. */
(function () {
  const TV = PLT.TV;
  PLT.KB.build({
    id: 'ngu-van-6', lop: 6, mon: 'Ngữ văn', icon: '📖', nhan: 'Bài', so: false, essayMax: 2,
    topics: [
      { hk: 1, ten: 'Tôi và các bạn', bai: ['Bài học đường đời đầu tiên (Tô Hoài)', 'Nếu cậu muốn có một người bạn… (Xanh-tơ Ê-xu-pe-ri)', 'Bắt nạt (Nguyễn Thế Hoàng Linh)', 'Thực hành tiếng Việt: Từ đơn, từ phức; biện pháp so sánh', 'Viết: Kể lại một trải nghiệm của em'],
        lt: ['<b>Truyện</b>: có cốt truyện, nhân vật, người kể chuyện. Ngôi kể <b>thứ nhất</b> (xưng "tôi") và <b>thứ ba</b>.', '"Bài học đường đời đầu tiên" trích <i>Dế Mèn phiêu lưu kí</i> của <b>Tô Hoài</b>: Dế Mèn kiêu căng, xốc nổi gây ra cái chết của Dế Choắt, rút ra bài học đầu tiên.', '"Nếu cậu muốn có một người bạn…" trích <i>Hoàng tử bé</i> (Ăng-toan đơ Xanh-tơ Ê-xu-pe-ri): tình bạn cần sự "cảm hoá", gắn bó, kiên nhẫn.', '<b>Từ đơn</b>: một tiếng; <b>từ phức</b>: hai tiếng trở lên, gồm <b>từ ghép</b> (các tiếng có quan hệ nghĩa) và <b>từ láy</b> (các tiếng lặp âm, vần).', 'Kể lại trải nghiệm: ngôi thứ nhất, sự việc theo trình tự, cảm xúc và bài học rút ra.'],
        q: `? "Dế Mèn phiêu lưu kí" là tác phẩm của: | Tô Hoài | Nguyễn Nhật Ánh | Kim Lân | Nam Cao
? Truyện "Bài học đường đời đầu tiên" được kể theo ngôi thứ mấy? | Ngôi thứ nhất | Ngôi thứ hai | Ngôi thứ ba | Không có người kể
? Bài học Dế Mèn rút ra sau cái chết của Dế Choắt là: | Không được hung hăng, kiêu căng, hống hách | Phải biết đánh nhau giỏi | Nên trêu chọc người khác | Không cần bạn bè
? "Hoàng tử bé" là tác phẩm của: | Xanh-tơ Ê-xu-pe-ri | An-đéc-xen | Ta-go | Mác Tuên
? Từ "xinh xắn" là: | Từ láy | Từ ghép | Từ đơn | Thành ngữ
? Từ "sách vở" là: | Từ ghép | Từ láy | Từ đơn | Từ mượn
? Từ nào là từ đơn? | Nhà | Nhà cửa | Nhà nhà | Nhà sàn
+ Từ phức gồm từ ghép và từ láy.
+ Người kể chuyện ngôi thứ nhất xưng "tôi".
+ Dế Choắt là người hàng xóm yếu ớt của Dế Mèn.
- "Dế Mèn phiêu lưu kí" là tác phẩm của Nguyễn Nhật Ánh.
- Từ láy là từ chỉ có một tiếng.
- Trong truyện, Dế Mèn luôn khiêm tốn, hiền lành từ đầu đến cuối.
# Từ láy: Long lanh, Xinh xắn, Lấp lánh, Rì rào
# Từ ghép: Sách vở, Bàn ghế, Xe đạp, Hoa hồng
= Tô Hoài = Dế Mèn phiêu lưu kí
= Xanh-tơ Ê-xu-pe-ri = Hoàng tử bé
= Nguyễn Thế Hoàng Linh = Bắt nạt
> Mở bài: giới thiệu trải nghiệm > Thân bài: kể diễn biến sự việc > Kết bài: cảm xúc, bài học`, fns: { bp: TV.bienphap(5) } },
      { hk: 1, ten: 'Gõ cửa trái tim', bai: ['Chuyện cổ tích về loài người (Xuân Quỳnh)', 'Mây và sóng (Ta-go)', 'Bức tranh của em gái tôi (Tạ Duy Anh)', 'Thực hành tiếng Việt: Biện pháp tu từ ẩn dụ, điệp ngữ', 'Viết: Đoạn văn ghi lại cảm xúc về một bài thơ'],
        lt: ['<b>Thơ có yếu tố tự sự, miêu tả</b>: kể sự việc, tả cảnh vật bằng ngôn ngữ thơ, thể hiện cảm xúc.', '"Chuyện cổ tích về loài người" (Xuân Quỳnh): trẻ em được sinh ra đầu tiên, mọi thứ được tạo ra vì trẻ em.', '"Mây và sóng" (Ta-go, Ấn Độ): tình mẫu tử thiêng liêng; em bé từ chối lời rủ rê để ở bên mẹ.', '"Bức tranh của em gái tôi" (Tạ Duy Anh): người anh ghen tị rồi nhận ra lòng nhân hậu của em gái Kiều Phương.', '<b>Ẩn dụ</b>: gọi sự vật này bằng tên sự vật khác có nét tương đồng. <b>Điệp ngữ</b>: lặp lại từ ngữ để nhấn mạnh.'],
        q: `? "Mây và sóng" là bài thơ của nhà thơ nước nào? | Ấn Độ | Pháp | Nga | Trung Quốc
? Bài thơ "Mây và sóng" ca ngợi: | Tình mẫu tử | Tình bạn | Thiên nhiên hoang dã | Lòng yêu nước
? Nhân vật Kiều Phương trong "Bức tranh của em gái tôi" có tài: | Vẽ tranh | Hát | Đánh đàn | Làm thơ
? "Chuyện cổ tích về loài người" là bài thơ của: | Xuân Quỳnh | Tố Hữu | Trần Đăng Khoa | Huy Cận
? Biện pháp gọi sự vật này bằng tên sự vật khác có nét tương đồng là: | Ẩn dụ | So sánh | Nhân hoá | Liệt kê
+ Người anh trong truyện cuối cùng nhận ra lòng nhân hậu của em gái.
+ Điệp ngữ là lặp lại từ ngữ để nhấn mạnh ý.
- "Mây và sóng" là bài thơ của Xuân Quỳnh.
- Ẩn dụ luôn dùng từ "như" để so sánh.
= Xuân Quỳnh = Chuyện cổ tích về loài người
= Ta-go = Mây và sóng
= Tạ Duy Anh = Bức tranh của em gái tôi`, fns: { bp: TV.bienphap(5) } },
      { hk: 1, ten: 'Yêu thương và chia sẻ', bai: ['Cô bé bán diêm (An-đéc-xen)', 'Gió lạnh đầu mùa (Thạch Lam)', 'Con chào mào (Mai Văn Phán)', 'Thực hành tiếng Việt: Cụm danh từ, cụm động từ, cụm tính từ', 'Viết: Kể lại một trải nghiệm của em'],
        lt: ['"Cô bé bán diêm" (An-đéc-xen, Đan Mạch): cô bé nghèo chết rét đêm giao thừa; những lần quẹt diêm là ước mơ về hạnh phúc → lòng thương cảm với người nghèo.', '"Gió lạnh đầu mùa" (Thạch Lam): chị em Sơn cho bé Hiên chiếc áo bông cũ — lòng nhân hậu, chia sẻ.', '<b>Cụm danh từ</b>: danh từ + phụ ngữ (những ngôi nhà ấy). <b>Cụm động từ</b>: động từ + phụ ngữ (đang học bài). <b>Cụm tính từ</b>: tính từ + phụ ngữ (rất đẹp).'],
        q: `? "Cô bé bán diêm" là truyện của nhà văn: | An-đéc-xen | Thạch Lam | Tô Hoài | Ta-go
? An-đéc-xen là nhà văn nước: | Đan Mạch | Pháp | Ấn Độ | Nga
? Cô bé bán diêm quẹt que diêm đầu tiên và thấy: | Lò sưởi ấm áp | Bà nội | Cây thông Nô-en | Con ngỗng quay
? "Gió lạnh đầu mùa" là tác phẩm của: | Thạch Lam | Nam Cao | Kim Lân | Nguyễn Tuân
? "Những ngôi nhà ấy" là: | Cụm danh từ | Cụm động từ | Cụm tính từ | Câu đơn
? "Đang chăm chỉ học bài" là: | Cụm động từ | Cụm danh từ | Cụm tính từ | Từ ghép
+ Sơn và chị Lan đã cho bé Hiên chiếc áo bông cũ.
+ Cụm tính từ có tính từ làm thành tố trung tâm.
- Cô bé bán diêm được mọi người giúp đỡ trong đêm giao thừa.
- "Rất đẹp" là cụm danh từ.
# Cụm danh từ: Những ngôi nhà ấy, Một chiếc áo bông, Tất cả học sinh
# Cụm động từ: Đang học bài, Sẽ đi tham quan, Vẫn chạy nhảy
# Cụm tính từ: Rất đẹp, Xanh biếc cả một vùng, Vô cùng chăm chỉ` },
      { hk: 1, ten: 'Quê hương yêu dấu', bai: ['Chùm ca dao về quê hương, đất nước', 'Chuyện cổ nước mình (Lâm Thị Mỹ Dạ)', 'Cây tre Việt Nam (Thép Mới)', 'Thực hành tiếng Việt: Từ đồng âm, từ đa nghĩa', 'Viết: Tập làm thơ lục bát'],
        lt: ['<b>Ca dao</b>: thơ dân gian, thường làm theo thể <b>lục bát</b> (câu 6 tiếng – câu 8 tiếng).', 'Luật lục bát: tiếng thứ 6 câu 6 vần với tiếng thứ 6 câu 8; tiếng thứ 8 câu 8 vần với tiếng thứ 6 câu 6 tiếp theo.', '"Cây tre Việt Nam" (Thép Mới): cây tre là biểu tượng của con người, dân tộc Việt Nam: cần cù, bất khuất.', '<b>Từ đồng âm</b>: âm giống nhau, nghĩa khác hẳn nhau. <b>Từ đa nghĩa</b>: một từ có nhiều nghĩa liên quan nhau.'],
        q: `? Thể thơ thường gặp trong ca dao là: | Lục bát | Thất ngôn bát cú | Tự do | Năm chữ
? Trong thơ lục bát, câu lục có bao nhiêu tiếng? | 6 | 8 | 7 | 5
? "Cây tre Việt Nam" là bài kí của: | Thép Mới | Nguyễn Tuân | Tô Hoài | Thạch Lam
? Cây tre trong bài kí của Thép Mới tượng trưng cho: | Con người, dân tộc Việt Nam | Nông thôn nước ngoài | Thành phố hiện đại | Mùa đông
? "Đường" trong "đường kính" và "đường đi" là: | Từ đồng âm | Từ đa nghĩa | Từ trái nghĩa | Từ láy
? "Chân" trong "chân bàn" và "chân người" là: | Từ đa nghĩa | Từ đồng âm | Từ trái nghĩa | Từ mượn
+ Tiếng thứ sáu câu lục vần với tiếng thứ sáu câu bát.
+ "Chuyện cổ nước mình" là bài thơ của Lâm Thị Mỹ Dạ.
- Ca dao là thơ do một nhà thơ nổi tiếng sáng tác.
- Câu bát trong thơ lục bát có 6 tiếng.
= Câu lục = 6 tiếng
= Câu bát = 8 tiếng
= Thép Mới = Cây tre Việt Nam
= Lâm Thị Mỹ Dạ = Chuyện cổ nước mình` },
      { hk: 1, ten: 'Những nẻo đường xứ sở', bai: ['Cô Tô (Nguyễn Tuân)', 'Hang Én (Hà My)', 'Cửu Long Giang ta đi (Nguyễn Tuân)', 'Thực hành tiếng Việt: Từ mượn; thành ngữ', 'Viết: Tả cảnh sinh hoạt'],
        lt: ['<b>Du kí</b> (kí): ghi chép về những chuyến đi, cảnh vật, con người có thật.', '"Cô Tô" (Nguyễn Tuân): cảnh đảo Cô Tô sau trận bão trong sáng, tươi đẹp; cảnh mặt trời mọc trên biển; sinh hoạt của người dân đảo.', '"Hang Én" (Hà My): khám phá hang động hùng vĩ ở Quảng Bình.', '<b>Từ mượn</b>: từ vay mượn tiếng nước ngoài (Hán Việt: giang sơn; Âu: ti vi, ra-đi-ô). <b>Thành ngữ</b>: cụm từ cố định, biểu thị ý nghĩa hoàn chỉnh.'],
        q: `? "Cô Tô" là tác phẩm của nhà văn: | Nguyễn Tuân | Tô Hoài | Thép Mới | Thạch Lam
? Đảo Cô Tô thuộc tỉnh: | Quảng Ninh | Quảng Bình | Khánh Hoà | Kiên Giang
? Hang Én nằm ở tỉnh: | Quảng Bình | Quảng Ninh | Hà Giang | Lào Cai
? Từ "giang sơn" là từ mượn tiếng: | Hán | Pháp | Anh | Nga
? Từ "ra-đi-ô" là từ mượn tiếng: | Ấn – Âu | Hán | Thái | Khơ-me
+ Kí ghi chép về người thật, việc thật.
+ Thành ngữ là cụm từ có cấu tạo cố định.
- "Cô Tô" là truyện cổ tích.
- Từ "ti vi" là từ thuần Việt.
# Từ Hán Việt: Giang sơn, Hải đảo, Phụ huynh
# Từ mượn ngôn ngữ châu Âu: Ti vi, Ra-đi-ô, In-tơ-nét` },
      { hk: 2, ten: 'Chuyện kể về những người anh hùng', bai: ['Thánh Gióng', 'Sơn Tinh, Thuỷ Tinh', 'Bánh chưng, bánh giầy', 'Thực hành tiếng Việt: Dấu chấm phẩy; nghĩa của từ', 'Viết: Thuyết minh thuật lại một sự kiện'],
        lt: ['<b>Truyền thuyết</b>: truyện dân gian kể về nhân vật, sự kiện liên quan đến lịch sử, có yếu tố kì ảo; thể hiện thái độ, cách đánh giá của nhân dân.', '"Thánh Gióng": ca ngợi lòng yêu nước, sức mạnh chống giặc ngoại xâm (giặc Ân).', '"Sơn Tinh, Thuỷ Tinh": giải thích hiện tượng lũ lụt hằng năm; ước mơ chế ngự thiên tai.', '"Bánh chưng, bánh giầy": Lang Liêu làm bánh dâng vua Hùng, đề cao nghề nông, giải thích phong tục ngày Tết.'],
        q: `? Truyện "Thánh Gióng" thuộc thể loại: | Truyền thuyết | Truyện cổ tích | Truyện ngụ ngôn | Truyện cười
? Thánh Gióng đánh tan giặc: | Ân | Minh | Thanh | Nguyên
? Truyện "Sơn Tinh, Thuỷ Tinh" giải thích hiện tượng: | Lũ lụt hằng năm | Núi lửa | Mưa đá | Hạn hán
? Người làm bánh chưng, bánh giầy dâng vua Hùng là: | Lang Liêu | Sơn Tinh | Thánh Gióng | Thạch Sanh
? Vua Hùng thứ mấy kén rể trong "Sơn Tinh, Thuỷ Tinh"? | Thứ mười tám | Thứ nhất | Thứ sáu | Thứ mười
+ Truyền thuyết thường gắn với nhân vật, sự kiện lịch sử.
+ Sau khi đánh tan giặc, Thánh Gióng cưỡi ngựa bay về trời.
- Sơn Tinh là thần nước, Thuỷ Tinh là thần núi.
- "Thánh Gióng" là truyện ngụ ngôn.
= Thánh Gióng = Đánh giặc Ân
= Sơn Tinh = Thần núi Tản Viên
= Thuỷ Tinh = Thần nước
= Lang Liêu = Bánh chưng, bánh giầy` },
      { hk: 2, ten: 'Thế giới cổ tích', bai: ['Thạch Sanh', 'Cây khế', 'Vua chích choè', 'Sọ Dừa', 'Thực hành tiếng Việt: Trạng ngữ', 'Viết: Đóng vai nhân vật kể lại một truyện cổ tích'],
        lt: ['<b>Truyện cổ tích</b>: truyện dân gian về số phận các kiểu nhân vật (mồ côi, bất hạnh, dũng sĩ, thông minh…), có yếu tố kì ảo; thể hiện ước mơ công lí "ở hiền gặp lành".', '"Thạch Sanh": dũng sĩ diệt chằn tinh, đại bàng; chống lại Lí Thông gian xảo; niêu cơm thần, cây đàn thần.', '"Cây khế": người em hiền lành được chim trả vàng; người anh tham lam bị trừng phạt.', '<b>Trạng ngữ</b>: thành phần phụ chỉ thời gian, nơi chốn, nguyên nhân, mục đích, phương tiện.'],
        q: `? Nhân vật đối lập với Thạch Sanh là: | Lí Thông | Lang Liêu | Sọ Dừa | Thuỷ Tinh
? Tiếng đàn của Thạch Sanh có tác dụng: | Giải oan, làm quân giặc xin hàng | Gọi mưa | Chữa bệnh | Gọi chim trả vàng
? Truyện "Cây khế" phê phán: | Lòng tham | Sự dũng cảm | Tình yêu thương | Lòng hiếu thảo
? Truyện cổ tích thường thể hiện ước mơ: | Cái thiện thắng cái ác, ở hiền gặp lành | Giải thích lịch sử | Châm biếm thói xấu | Kể chuyện khoa học
? Trạng ngữ trong câu "Sáng nay, lớp em đi lao động." chỉ: | Thời gian | Nơi chốn | Nguyên nhân | Mục đích
+ Niêu cơm thần trong truyện Thạch Sanh ăn mãi không hết.
+ Truyện cổ tích có nhiều yếu tố kì ảo.
- Người anh trong "Cây khế" hiền lành, tốt bụng.
- Lí Thông là người thật thà, tốt bụng.
= Thạch Sanh = Dũng sĩ diệt chằn tinh
= Lí Thông = Kẻ gian xảo, lừa lọc
= Người em (Cây khế) = Hiền lành, được đền đáp
= Người anh (Cây khế) = Tham lam, bị trừng phạt`, fns: { tn: TV.trangngu } },
      { hk: 2, ten: 'Khác biệt và gần gũi', bai: ['Xem người ta kìa! (Lạc Thanh)', 'Hai loại khác biệt (Giong-mi Mun)', 'Bài tập làm văn (trích Nhóc Ni-cô-la)', 'Thực hành tiếng Việt: Dấu câu; mở rộng thành phần chính của câu', 'Viết: Trình bày ý kiến về một hiện tượng (vấn đề) mà em quan tâm'],
        lt: ['<b>Văn bản nghị luận</b>: trình bày ý kiến (quan điểm) có <b>lí lẽ</b> và <b>bằng chứng</b> để thuyết phục người đọc.', '"Xem người ta kìa!": mỗi người cần hoà đồng nhưng cũng cần giữ nét riêng, tôn trọng sự khác biệt.', '"Hai loại khác biệt": khác biệt tạo nên giá trị riêng của mỗi người, không phải khác biệt để gây chú ý.'],
        q: `? Văn bản nghị luận cần có: | Ý kiến, lí lẽ và bằng chứng | Chỉ cần kể chuyện | Chỉ miêu tả | Vần điệu như thơ
? Thông điệp của "Xem người ta kìa!" là: | Tôn trọng sự khác biệt, giữ nét riêng của mỗi người | Phải giống hệt người khác | Không cần hoà đồng | Chê bai người khác
+ Bằng chứng giúp làm sáng tỏ lí lẽ.
- Văn nghị luận không cần lí lẽ.
> Nêu vấn đề > Trình bày ý kiến > Đưa lí lẽ và bằng chứng > Khẳng định lại ý kiến` },
      { hk: 2, ten: 'Trái Đất – ngôi nhà chung', bai: ['Trái Đất – cái nôi của sự sống (Hồ Thanh Trang)', 'Các loài chung sống với nhau như thế nào? (Ngọc Phú)', 'Trái Đất (thơ)', 'Thực hành tiếng Việt: Lựa chọn từ ngữ, cấu trúc câu', 'Viết: Biên bản; tóm tắt văn bản'],
        lt: ['<b>Văn bản thông tin</b>: cung cấp thông tin về sự vật, hiện tượng; có nhan đề, sa-pô, đề mục, hình ảnh, số liệu.', 'Thông điệp: Trái Đất là ngôi nhà chung, con người cần bảo vệ môi trường, sống hài hoà với muôn loài.', '<b>Biên bản</b>: ghi lại sự việc đang diễn ra hoặc đã xảy ra (thời gian, địa điểm, thành phần, nội dung, chữ kí).'],
        q: `? Văn bản thông tin có mục đích chính là: | Cung cấp thông tin | Bộc lộ cảm xúc bằng vần điệu | Kể chuyện cổ tích | Gây cười
? Thông điệp chung của bài "Trái Đất – ngôi nhà chung" là: | Bảo vệ Trái Đất, sống hài hoà với muôn loài | Khai thác thiên nhiên tối đa | Chỉ con người quan trọng | Không cần quan tâm môi trường
+ Biên bản cần ghi rõ thời gian, địa điểm, người tham gia.
- Văn bản thông tin thường dùng nhiều yếu tố kì ảo.` },
      { hk: 2, ten: 'Cuốn sách tôi yêu', bai: ['Đọc mở rộng: Giới thiệu cuốn sách em yêu thích', 'Viết: Kể lại một trải nghiệm; tóm tắt nội dung', 'Nói và nghe: Trình bày cảm nhận về một cuốn sách', '*Ôn tập cuối năm'],
        lt: ['Đọc sách giúp mở rộng hiểu biết, bồi dưỡng tâm hồn.', 'Giới thiệu sách: tên sách, tác giả, nội dung chính, nhân vật, chi tiết ấn tượng, lí do yêu thích.'],
        q: `? Khi giới thiệu một cuốn sách, em cần nêu: | Tên sách, tác giả, nội dung chính, lí do yêu thích | Giá tiền | Màu bìa | Số trang
+ Đọc sách thường xuyên giúp mở rộng vốn hiểu biết.
- Chỉ cần đọc tên sách là hiểu hết nội dung.`, fns: { dh: TV.dochieu(5) } }
    ],
    essays: {
      1: [['Viết bài văn kể lại một trải nghiệm đáng nhớ của em.', ['tôi', 'em', 'cảm xúc', 'bài học'], 'Dùng ngôi thứ nhất. Mở bài: giới thiệu trải nghiệm. Thân bài: kể diễn biến theo trình tự (thời gian, không gian, nhân vật, sự việc chính), kết hợp miêu tả, biểu cảm. Kết bài: cảm xúc và bài học rút ra.', 8],
        ['Viết đoạn văn (khoảng 150 chữ) ghi lại cảm xúc về một bài thơ có yếu tố tự sự, miêu tả mà em yêu thích.', ['bài thơ', 'cảm xúc', 'hình ảnh'], 'Giới thiệu tên bài thơ, tác giả; nêu cảm xúc chung; chỉ ra hình ảnh, chi tiết, biện pháp nghệ thuật ấn tượng và cảm nhận của em.', 6]],
      2: [['Đóng vai một nhân vật trong truyện cổ tích (ví dụ Thạch Sanh) để kể lại câu chuyện.', ['tôi', 'Thạch Sanh', 'kể'], 'Dùng ngôi thứ nhất, xưng "tôi" theo vai nhân vật; kể đúng các sự việc chính; thể hiện suy nghĩ, cảm xúc của nhân vật; kết thúc rút ra ý nghĩa.', 8],
        ['Trình bày ý kiến của em về hiện tượng học sinh nghiện điện thoại, mạng xã hội.', ['ý kiến', 'lí lẽ', 'bằng chứng', 'tác hại'], 'Nêu vấn đề; bày tỏ ý kiến; lí lẽ và bằng chứng về tác hại (sức khoẻ, học tập, giao tiếp); giải pháp; khẳng định lại ý kiến.', 8]]
    }
  });
})();

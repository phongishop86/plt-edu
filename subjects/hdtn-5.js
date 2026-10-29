/* Hoạt động trải nghiệm 5 – KNTT. Các chủ đề theo chương trình; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'hdtn-5', lop: 5, mon: 'Hoạt động trải nghiệm', icon: '🧭', so: false,
  topics: [
    { hk: 1, ten: 'Trường học mến yêu', bai: ['Tuần 1: Năm học cuối cấp', 'Tuần 2: Xây dựng lớp học hạnh phúc', 'Tuần 3: Hợp tác cùng bạn', 'Tuần 4: Tự hào truyền thống trường'],
      lt: ['Năm cuối cấp: đặt mục tiêu học tập, làm gương cho các em lớp dưới.', 'Hợp tác: lắng nghe, chia sẻ, tôn trọng, cùng chịu trách nhiệm.'],
      q: `? Học sinh lớp 5 là "anh chị lớn" của trường nên: | Gương mẫu, giúp đỡ các em nhỏ | Bắt nạt em nhỏ | Không tuân thủ nội quy | Chen lấn ở căng tin
? Để hợp tác tốt, em cần: | Lắng nghe, tôn trọng ý kiến của bạn | Áp đặt ý mình | Làm một mình | Bỏ mặc nhóm
+ Đặt mục tiêu học tập giúp em cố gắng hơn.
- Lớp học hạnh phúc là lớp không có nội quy.
? Học sinh lớp 5 cần làm gương cho các em nhỏ bằng cách: | Chăm học, lễ phép, giữ kỉ luật | Bắt nạt em nhỏ | Nói tục | Bỏ học
+ Giữ gìn tình bạn bằng sự chân thành, chia sẻ.` },
    { hk: 1, ten: 'Khám phá và rèn luyện bản thân', bai: ['Tuần 5: Hình ảnh của em trong mắt bạn bè', 'Tuần 6: Quản lí cảm xúc', 'Tuần 7: Sống có trách nhiệm', 'Tuần 8: Tư duy tích cực'],
      lt: ['Tự nhận thức: biết điểm mạnh, hạn chế qua tự đánh giá và nhận xét của bạn bè.', 'Trách nhiệm: làm tròn việc của mình, giữ lời hứa, nhận lỗi khi sai.', 'Tư duy tích cực: nhìn vào cơ hội, cách giải quyết thay vì than phiền.'],
      q: `? Biểu hiện của người có trách nhiệm là: | Hoàn thành việc được giao, dám nhận lỗi | Đổ lỗi cho người khác | Hứa rồi quên | Bỏ dở công việc
? Bị điểm kém, suy nghĩ tích cực là: | Mình sẽ tìm chỗ sai để cố gắng hơn | Mình là người kém cỏi | Bỏ học thôi | Do thầy cô ghét mình
+ Lắng nghe nhận xét của bạn giúp em hiểu mình hơn.
- Người có trách nhiệm không bao giờ nhận lỗi.
? Lập thời gian biểu giúp em: | Sắp xếp công việc hợp lí | Lãng phí thời gian | Quên việc | Thức khuya
+ Biết kiểm soát cảm xúc giúp em ứng xử tốt hơn.` },
    { hk: 1, ten: 'Tri ân và cộng đồng', bai: ['Tuần 9: Biết ơn thầy cô', 'Tuần 10: Hướng về cội nguồn', 'Tuần 11: Hoạt động thiện nguyện', 'Tuần 12: Giữ gìn bản sắc văn hoá'],
      lt: ['Tri ân thầy cô, người có công; tham gia thiện nguyện vừa sức.', 'Giữ gìn bản sắc văn hoá: trân trọng lễ hội, trang phục, món ăn, trò chơi dân gian.'],
      q: `? Ngày Quân đội nhân dân Việt Nam là: | 22/12 | 27/7 | 20/11 | 2/9
? Trò chơi dân gian là: | Ô ăn quan, kéo co, nhảy bao bố | Game điện tử | Lướt mạng xã hội | Xem phim
+ Áo dài là trang phục truyền thống của Việt Nam.
- Bản sắc văn hoá không cần gìn giữ.
? Ngày Thương binh – Liệt sĩ là ngày: | 27/7 | 22/12 | 30/4 | 1/5
? Hoạt động "Đền ơn đáp nghĩa" là: | Thăm hỏi, giúp đỡ gia đình thương binh, liệt sĩ | Chơi trò chơi điện tử | Đi chợ | Đi du lịch
+ Quyên góp sách vở giúp bạn vùng khó khăn là việc làm tốt.` },
    { hk: 1, ten: 'An toàn và sức khoẻ', bai: ['Tuần 13: Phòng tránh tai nạn giao thông', 'Tuần 14: Phòng tránh đuối nước', 'Tuần 15: An toàn trên không gian mạng', 'Tuần 16: Phòng tránh xâm hại', 'Tuần 17: Tổng kết học kì I'],
      lt: ['Đi xe đạp: đi bên phải, đúng làn, không đi hàng ba, không buông tay; đội mũ bảo hiểm khi đi xe máy, xe đạp điện.', 'An toàn mạng: bảo vệ thông tin cá nhân, không gặp người quen qua mạng, báo người lớn khi bị đe doạ.', 'Gọi <b>111</b> khi trẻ em bị xâm hại, bạo lực.'],
      q: `? Trẻ em dưới 12 tuổi có được tự lái xe máy không? | Không | Có | Có nếu đi gần | Có nếu đội mũ
? Khi đi xe đạp, em nên: | Đi bên phải, không dàn hàng ba | Buông hai tay | Lạng lách | Đi ngược chiều
? Thấy bạn đuối nước, em nên: | Gọi to người lớn, ném phao hoặc vật nổi cho bạn | Nhảy xuống cứu khi không biết bơi | Bỏ chạy | Đứng xem
+ Ngồi xe đạp điện, xe máy phải đội mũ bảo hiểm.
- Có thể nhảy xuống nước cứu bạn dù em không biết bơi.
? Khi có người lạ rủ đi chơi, em nên: | Từ chối và báo cho bố mẹ, thầy cô | Đi theo ngay | Giữ bí mật | Nhận quà rồi đi
? Khi bị chảy máu cam, em nên: | Ngồi hơi cúi người về trước, bóp nhẹ cánh mũi | Ngửa đầu ra sau thật mạnh | Nằm úp | Chạy nhảy
+ Ăn uống đủ chất giúp cơ thể khoẻ mạnh.` },
    { hk: 2, ten: 'Gia đình và kĩ năng sống', bai: ['Tuần 18: Gia đình hạnh phúc', 'Tuần 19: Tết yêu thương', 'Tuần 20: Kĩ năng tự phục vụ', 'Tuần 21: Quản lí tiền cá nhân', 'Tuần 22: Kế hoạch chi tiêu'],
      lt: ['Gia đình hạnh phúc: yêu thương, chia sẻ, cùng làm việc nhà.', 'Quản lí tiền: lập kế hoạch, ưu tiên nhu cầu, tiết kiệm, ghi chép thu chi.'],
      q: `? Ghi chép thu chi giúp: | Biết tiền đi đâu, chi tiêu hợp lí | Tiêu nhiều hơn | Quên tiền | Mất tiền
? Kĩ năng tự phục vụ của học sinh lớp 5 gồm: | Tự giặt đồ nhỏ, nấu món đơn giản, dọn phòng | Nhờ người khác làm hết | Không làm gì | Chỉ chơi game
+ Tiết kiệm từ số tiền nhỏ hằng ngày sẽ thành khoản lớn.
- Chi tiêu không cần kế hoạch.
? Kĩ năng tự phục vụ của học sinh lớp 5 là: | Tự gấp quần áo, dọn góc học tập | Đợi bố mẹ làm hết | Không làm gì | Bày bừa
+ Lắng nghe ý kiến của bố mẹ giúp gia đình hoà thuận.` },
    { hk: 2, ten: 'Môi trường và cộng đồng', bai: ['Tuần 23: Ứng phó biến đổi khí hậu', 'Tuần 24: Sống xanh', 'Tuần 25: Tái chế, tái sử dụng', 'Tuần 26: Cảnh quan quê hương', 'Tuần 27: Chung tay vì cộng đồng'],
      lt: ['Biến đổi khí hậu: nhiệt độ tăng, thời tiết cực đoan, nước biển dâng.', 'Sống xanh: tiết kiệm năng lượng, đi bộ, xe đạp, hạn chế nhựa, trồng cây; nguyên tắc <b>3R</b>: giảm thiểu (Reduce), tái sử dụng (Reuse), tái chế (Recycle).'],
      q: `? Nguyên tắc 3R gồm: | Giảm thiểu, tái sử dụng, tái chế | Đốt, chôn, vứt | Mua, dùng, bỏ | Ăn, ngủ, chơi
? Việc làm "sống xanh" là: | Đi xe đạp khi đi gần | Bật điều hoà cả ngày | Dùng túi ni lông mỗi ngày | Đốt rác
+ Trồng cây góp phần giảm tác động của biến đổi khí hậu.
- Biến đổi khí hậu không ảnh hưởng đến Việt Nam.
? Tiết kiệm nước là: | Khoá vòi khi đánh răng | Để vòi chảy suốt | Xả nước rửa xe mỗi ngày | Tắm thật lâu
+ Mang túi vải khi đi chợ giúp giảm rác nhựa.` },
    { hk: 2, ten: 'Định hướng nghề nghiệp', bai: ['Tuần 28: Thế giới nghề nghiệp', 'Tuần 29: Nghề truyền thống', 'Tuần 30: Sở thích và nghề nghiệp', 'Tuần 31: Phẩm chất cần có', 'Tuần 32: Ước mơ nghề nghiệp', 'Tuần 33: Chuẩn bị vào lớp 6', 'Tuần 34: Lưu bút tuổi thơ', 'Tuần 35: Tổng kết năm học'],
      lt: ['Liên hệ sở thích, khả năng với nghề phù hợp.', 'Chuẩn bị lên lớp 6: nhiều môn học, nhiều thầy cô, tự giác, sắp xếp thời gian.'],
      q: `? Bạn thích vẽ, giàu sáng tạo có thể phù hợp với nghề: | Thiết kế, hoạ sĩ | Kế toán thuần tuý | Lái xe tải | Thợ lặn
? Lên lớp 6, em cần chuẩn bị: | Tinh thần tự giác, biết sắp xếp thời gian | Chơi nhiều hơn | Bỏ thói quen học bài | Không cần chuẩn bị
+ Sở thích và khả năng là căn cứ để chọn nghề sau này.
- Nghề nghiệp không liên quan đến sở thích, khả năng.
? Để biết mình phù hợp nghề gì, em nên: | Tìm hiểu sở thích, khả năng của bản thân | Chọn theo bạn | Không suy nghĩ | Chọn nghề ngẫu nhiên
+ Học tốt hôm nay là chuẩn bị cho nghề nghiệp tương lai.` }
  ],
  essays: {
    1: [['Em hãy đặt 3 mục tiêu học tập cho năm học lớp 5 và cách thực hiện.', ['mục tiêu', 'kế hoạch'], 'Nêu 3 mục tiêu cụ thể (ví dụ đọc 10 cuốn sách, nâng điểm Toán, học thêm từ vựng) và cách thực hiện, thời gian.'],
      ['Nêu những việc cần làm để an toàn khi tham gia giao thông bằng xe đạp.', ['bên phải', 'mũ', 'tín hiệu'], 'Đi bên phải, đúng làn; tuân thủ đèn tín hiệu, biển báo; không dàn hàng, không buông tay, không lạng lách; quan sát khi rẽ, xin đường.']],
    2: [['Em sẽ áp dụng nguyên tắc 3R như thế nào trong cuộc sống hằng ngày?', ['giảm', 'tái sử dụng', 'tái chế'], 'Giảm: hạn chế túi ni lông, đồ nhựa dùng một lần; Tái sử dụng: dùng lại chai lọ, giấy một mặt; Tái chế: phân loại giấy, nhựa, kim loại để tái chế.'],
      ['Chia sẻ ước mơ nghề nghiệp và những điều em cần chuẩn bị từ bây giờ.', ['nghề', 'ước mơ', 'chuẩn bị'], 'Nêu nghề mơ ước, lí do, phẩm chất và kiến thức cần có, những việc em sẽ làm từ bây giờ (học tốt môn liên quan, rèn kĩ năng…).']]
  }
});

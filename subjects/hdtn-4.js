/* Hoạt động trải nghiệm 4 – KNTT. Các chủ đề theo chương trình; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'hdtn-4', lop: 4, mon: 'Hoạt động trải nghiệm', icon: '🧭', so: false,
  topics: [
    { hk: 1, ten: 'Em lớn lên cùng mái trường', bai: ['Tuần 1: Chào năm học mới', 'Tuần 2: Nội quy lớp học', 'Tuần 3: Tình bạn tuổi học trò', 'Tuần 4: Em là thành viên tích cực'],
      lt: ['Xây dựng và thực hiện nội quy lớp học.', 'Thành viên tích cực: tham gia hoạt động, giúp đỡ bạn, đóng góp ý kiến.'],
      q: `? Nội quy lớp học giúp: | Lớp có nề nếp, mọi người học tập tốt | Lớp mất trật tự | Bạn bè xa cách | Không có tác dụng
? Thành viên tích cực của lớp là bạn: | Hăng hái tham gia và giúp đỡ các bạn | Luôn đứng ngoài | Chỉ làm khi được thưởng | Hay bỏ dở việc
+ Mỗi học sinh cần thực hiện tốt nội quy lớp học.
- Nội quy chỉ dành cho học sinh hư.` },
    { hk: 1, ten: 'Khám phá bản thân', bai: ['Tuần 5: Điểm mạnh, điểm hạn chế của em', 'Tuần 6: Kiểm soát cảm xúc', 'Tuần 7: Thói quen tốt', 'Tuần 8: Tự tin trước đám đông'],
      lt: ['Nhận biết điểm mạnh để phát huy, điểm hạn chế để khắc phục.', 'Kiểm soát cảm xúc: nhận ra cảm xúc, hít thở, suy nghĩ tích cực, chia sẻ.', 'Tự tin: chuẩn bị kĩ, luyện tập, đứng thẳng, nhìn người nghe, nói rõ ràng.'],
      q: `? Để tự tin khi thuyết trình, em nên: | Chuẩn bị kĩ và luyện tập trước | Không chuẩn bị gì | Nhìn xuống đất | Nói thật nhỏ
? Khi tức giận, em có thể: | Hít thở sâu, rời khỏi chỗ đó một lúc | Đập phá | Quát tháo | Đánh người
+ Thói quen tốt giúp em học tập và sống lành mạnh.
- Ai cũng không có điểm hạn chế.` },
    { hk: 1, ten: 'Truyền thống và tri ân', bai: ['Tuần 9: Truyền thống trường em', 'Tuần 10: Biết ơn thầy cô', 'Tuần 11: Ngày hội 20/11', 'Tuần 12: Uống nước nhớ nguồn'],
      lt: ['Tri ân thầy cô, người có công với quê hương, đất nước.', '"Uống nước nhớ nguồn": biết ơn những người đi trước.'],
      q: `? Câu tục ngữ thể hiện lòng biết ơn là: | Uống nước nhớ nguồn | Ăn cỗ đi trước, lội nước theo sau | Nước chảy đá mòn | Một con ngựa đau cả tàu bỏ cỏ
? Ngày Thương binh – Liệt sĩ là ngày: | 27/7 | 20/11 | 1/6 | 26/3
+ Thăm nghĩa trang liệt sĩ là thể hiện lòng biết ơn.
- Tri ân thầy cô chỉ cần làm vào ngày 20/11.` },
    { hk: 1, ten: 'An toàn và sức khoẻ', bai: ['Tuần 13: Phòng tránh tai nạn thương tích', 'Tuần 14: Ứng phó với bắt nạt', 'Tuần 15: An toàn trên mạng', 'Tuần 16: Sơ cứu đơn giản', 'Tuần 17: Tổng kết học kì I'],
      lt: ['An toàn trên mạng: không chia sẻ thông tin cá nhân, không gặp người quen qua mạng, báo người lớn khi bị đe doạ.', 'Sơ cứu vết xước: rửa sạch bằng nước sạch, sát trùng, băng lại; chảy máu cam: ngồi hơi cúi đầu về trước, bóp nhẹ cánh mũi.'],
      q: `? Bị chảy máu cam, em nên: | Ngồi hơi cúi đầu về trước, bóp nhẹ cánh mũi | Ngửa đầu ra sau | Nằm ngửa | Chạy nhảy
? Người lạ trên mạng xin địa chỉ nhà và hẹn gặp, em nên: | Không cung cấp và báo bố mẹ | Gửi địa chỉ | Hẹn gặp một mình | Gửi ảnh cá nhân
+ Không chia sẻ mật khẩu cho người khác.
- Bị bắt nạt trên mạng thì nên im lặng chịu đựng.` },
    { hk: 2, ten: 'Gia đình và chi tiêu', bai: ['Tuần 18: Gia đình yêu thương', 'Tuần 19: Đón Tết cổ truyền', 'Tuần 20: Chia sẻ việc nhà', 'Tuần 21: Chi tiêu hợp lí', 'Tuần 22: Tiết kiệm tiền'],
      lt: ['Chi tiêu hợp lí: phân biệt cái <b>cần</b> và cái <b>muốn</b>; ưu tiên thứ cần thiết.', 'Tiết kiệm: để dành một phần tiền, không mua sắm lãng phí.'],
      q: `? Thứ "cần" cho học tập là: | Sách vở, bút | Đồ chơi đắt tiền | Kẹo | Thẻ trò chơi
? Có 50 000 đồng, em nên: | Ưu tiên mua đồ cần thiết, để dành phần còn lại | Mua hết kẹo | Cho người lạ | Tiêu hết ngay
+ Lập kế hoạch chi tiêu giúp tiết kiệm.
- Muốn gì mua nấy là chi tiêu hợp lí.
# Cần: Sách giáo khoa, Áo đồng phục, Bút viết
# Muốn: Đồ chơi mới, Bim bim, Thẻ game` },
    { hk: 2, ten: 'Cộng đồng và môi trường', bai: ['Tuần 23: Em với cộng đồng', 'Tuần 24: Hoạt động tình nguyện', 'Tuần 25: Bảo vệ cảnh quan', 'Tuần 26: Giảm rác thải nhựa', 'Tuần 27: Trồng cây xanh'],
      lt: ['Giảm rác thải nhựa: dùng túi vải, bình nước cá nhân, hạn chế ống hút nhựa.', 'Tham gia hoạt động tình nguyện vừa sức: dọn vệ sinh, quyên góp.'],
      q: `? Cách giảm rác thải nhựa là: | Dùng túi vải, bình nước cá nhân | Dùng thật nhiều túi ni lông | Vứt chai nhựa xuống sông | Đốt nhựa
? Rác thải nhựa phân huỷ: | Rất lâu, hàng trăm năm | Trong một ngày | Ngay lập tức | Không gây hại
+ Trồng cây xanh góp phần bảo vệ môi trường.
- Túi ni lông phân huỷ rất nhanh.` },
    { hk: 2, ten: 'Nghề nghiệp', bai: ['Tuần 28: Nghề ở địa phương', 'Tuần 29: Công cụ lao động', 'Tuần 30: Phẩm chất người lao động', 'Tuần 31: An toàn lao động', 'Tuần 32: Ước mơ của em', 'Tuần 33: Ngày hội nghề nghiệp', 'Tuần 34: Đón hè an toàn', 'Tuần 35: Tổng kết năm học'],
      lt: ['Mỗi nghề có công cụ, sản phẩm, phẩm chất cần có.', 'An toàn lao động: dùng đồ bảo hộ, làm theo hướng dẫn.'],
      q: `? Công nhân xây dựng cần đội: | Mũ bảo hộ | Mũ bơi | Mũ len | Mũ sinh nhật
? Phẩm chất cần có của bác sĩ là: | Tận tâm, cẩn thận | Cẩu thả | Nóng nảy | Lười biếng
+ Mọi nghề nghiệp chân chính đều đáng quý.
= Mũ bảo hộ = Công nhân xây dựng
= Áo blouse trắng = Bác sĩ
= Phấn, bảng = Giáo viên
= Lưới đánh cá = Ngư dân` }
  ],
  essays: {
    1: [['Nêu một điểm mạnh và một điểm hạn chế của em, kế hoạch khắc phục hạn chế.', ['điểm mạnh', 'hạn chế', 'khắc phục'], 'Nêu rõ điểm mạnh (ví dụ vẽ đẹp), điểm hạn chế (ví dụ hay quên đồ) và cách khắc phục cụ thể (soạn cặp từ tối, ghi chú…).'],
      ['Em làm gì để an toàn khi sử dụng Internet?', ['thông tin cá nhân', 'mật khẩu', 'người lớn'], 'Không chia sẻ thông tin cá nhân, mật khẩu; không kết bạn, hẹn gặp người lạ; không mở đường link lạ; báo người lớn khi gặp nội dung xấu hoặc bị đe doạ.']],
    2: [['Phân biệt "cần" và "muốn" khi chi tiêu. Cho ví dụ.', ['cần', 'muốn', 'ví dụ'], 'Cần là những thứ thiết yếu cho cuộc sống, học tập (sách vở, quần áo); muốn là thứ thích nhưng không nhất thiết (đồ chơi mới, bánh kẹo). Ưu tiên mua thứ cần.'],
      ['Kể những việc em có thể làm để giảm rác thải nhựa.', ['túi vải', 'bình nước', 'tái sử dụng'], 'Dùng túi vải, hộp đựng, bình nước cá nhân; không dùng ống hút nhựa; tái sử dụng chai lọ; phân loại rác.']]
  }
});

/* Hoạt động trải nghiệm, hướng nghiệp 11 – KNTT. Câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'hdtn-11', lop: 11, mon: 'Hoạt động trải nghiệm, hướng nghiệp', icon: '🧭', so: false,
  topics: [
    { hk: 1, ten: 'Phát huy truyền thống nhà trường', bai: ['Tham gia hoạt động giáo dục truyền thống', 'Xây dựng văn hoá học đường'],
      lt: ['Văn hoá học đường: ứng xử tôn trọng, không bạo lực, không bắt nạt (kể cả trên mạng).', 'Phòng chống bạo lực học đường: bình tĩnh, tránh xung đột, báo thầy cô, người lớn.'],
      q: `? Khi chứng kiến bạn bị bắt nạt, em nên: | Báo ngay cho thầy cô hoặc người lớn | Quay video đăng mạng | Cổ vũ | Làm ngơ
+ Bắt nạt trên mạng cũng là một hình thức bạo lực học đường.
- Văn hoá học đường chỉ là trách nhiệm của giáo viên.` },
    { hk: 1, ten: 'Rèn luyện bản thân', bai: ['Thể hiện sự tự chủ, tự tin', 'Quản lí tài chính cá nhân'],
      lt: ['Tự chủ: kiểm soát cảm xúc, hành vi; tự tin: tin vào khả năng của mình, dám thể hiện.', 'Tài chính cá nhân: lập ngân sách, tiết kiệm trước – chi tiêu sau, tránh vay nợ không cần thiết.'],
      q: `? Nguyên tắc quản lí tài chính cá nhân hợp lí là: | Tiết kiệm trước, chi tiêu sau | Tiêu hết rồi mới tiết kiệm | Vay để mua sắm | Không ghi chép thu chi
+ Lập ngân sách giúp kiểm soát chi tiêu.
- Tự tin nghĩa là không cần lắng nghe ý kiến người khác.` },
    { hk: 1, ten: 'Xây dựng gia đình hạnh phúc', bai: ['Giải quyết mâu thuẫn trong gia đình', 'Chăm sóc, hiếu thảo với ông bà, cha mẹ'],
      lt: ['Giải quyết mâu thuẫn: bình tĩnh, lắng nghe, tôn trọng, tìm giải pháp chung.'],
      q: `? Khi có mâu thuẫn với bố mẹ, cách giải quyết phù hợp là: | Bình tĩnh trao đổi, lắng nghe | Bỏ nhà đi | Im lặng mãi mãi | Cãi lại gay gắt
+ Lắng nghe giúp các thành viên hiểu nhau hơn.
- Mâu thuẫn trong gia đình chỉ có thể giải quyết bằng to tiếng.` },
    { hk: 2, ten: 'Tham gia hoạt động xã hội và bảo vệ môi trường', bai: ['Xây dựng cộng đồng văn minh', 'Ứng phó với biến đổi khí hậu'],
      lt: ['Biến đổi khí hậu: nhiệt độ tăng, nước biển dâng, thiên tai cực đoan.', 'Hành động: tiết kiệm năng lượng, đi xe đạp, phương tiện công cộng, trồng cây, giảm rác thải.'],
      q: `? Hành động góp phần giảm phát thải khí nhà kính là: | Đi xe đạp, phương tiện công cộng | Đốt rơm rạ | Để đèn sáng cả ngày | Chặt phá rừng
+ Biến đổi khí hậu làm gia tăng thiên tai cực đoan.
- Một cá nhân không thể góp phần ứng phó biến đổi khí hậu.` },
    { hk: 2, ten: 'Tìm hiểu nghề và thị trường lao động', bai: ['Nhóm nghề và yêu cầu', 'Thị trường lao động Việt Nam'],
      lt: ['Thị trường lao động: cung – cầu lao động; nhu cầu lao động có kĩ năng số, ngoại ngữ, kĩ năng mềm.', 'Kênh thông tin tuyển dụng: trung tâm dịch vụ việc làm, website tuyển dụng chính thống.'],
      q: `? Kĩ năng ngày càng được nhà tuyển dụng coi trọng là: | Kĩ năng số, ngoại ngữ, làm việc nhóm | Chỉ cần bằng cấp | Không cần giao tiếp | Học thuộc lòng
+ Cần cảnh giác với tin tuyển dụng việc nhẹ lương cao.
- Thị trường lao động không thay đổi theo thời gian.` },
    { hk: 2, ten: 'Rèn luyện phẩm chất, năng lực phù hợp với nghề', bai: ['Phẩm chất, năng lực của nghề định chọn', 'Kế hoạch rèn luyện'], on: 'Ôn tập cuối năm',
      lt: ['Phẩm chất chung: trung thực, trách nhiệm, chăm chỉ, kỉ luật. Năng lực: chuyên môn, giải quyết vấn đề, sáng tạo, tự học.'],
      q: `? Phẩm chất cần thiết cho hầu hết các nghề là: | Trách nhiệm, trung thực | Lười biếng | Gian dối | Thiếu kỉ luật
+ Năng lực tự học giúp thích ứng với sự thay đổi của nghề.
- Phẩm chất không ảnh hưởng đến thành công trong nghề.` }
  ],
  essays: {
    1: [['Nêu các biện pháp phòng, chống bạo lực học đường.', ['tôn trọng', 'báo', 'kiểm soát'], 'Ứng xử tôn trọng, kiểm soát cảm xúc; không tham gia, không cổ vũ bạo lực; báo thầy cô, người lớn khi phát hiện; hỗ trợ bạn bị bắt nạt; không chia sẻ clip bạo lực.', 3],
      ['Lập ngân sách chi tiêu cá nhân trong một tháng.', ['thu', 'chi', 'tiết kiệm'], 'Liệt kê khoản thu (tiền tiêu vặt); khoản chi thiết yếu, không thiết yếu; dành phần tiết kiệm trước; ghi chép, đối chiếu cuối tháng, điều chỉnh.', 3]],
    2: [['Em có thể làm gì để ứng phó với biến đổi khí hậu?', ['năng lượng', 'rác thải', 'cây xanh'], 'Tiết kiệm điện nước; đi xe đạp, phương tiện công cộng; giảm rác nhựa, tái chế; trồng cây; tuyên truyền; tham gia hoạt động môi trường.', 3],
      ['Giới thiệu một nghề em quan tâm: công việc, yêu cầu, nơi đào tạo, cơ hội việc làm.', ['công việc', 'yêu cầu', 'đào tạo'], 'Tên nghề; công việc chính; môi trường làm việc; phẩm chất, năng lực cần có; nơi đào tạo; cơ hội việc làm, xu hướng; kế hoạch của bản thân.', 3]]
  }
});

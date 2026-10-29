/* Giáo dục thể chất 12 – KNTT. Câu hỏi ôn do PLT-Edu soạn. */
PLT.KB.build({
  id: 'gdtc-12', lop: 12, mon: 'Giáo dục thể chất', icon: '⚽', share: PLT.KB.SHARE.gdtc,
  topics: [
    { hk: 1, ten: 'Kiểm tra, đánh giá thể lực học sinh', bai: ['Các nội dung kiểm tra thể lực', 'Tự xây dựng kế hoạch luyện tập'],
      lt: ['Nội dung đánh giá thể lực: chạy 30 m (sức nhanh), bật xa tại chỗ (sức mạnh chân), chạy tuỳ sức 5 phút (sức bền), nằm ngửa gập bụng, lực bóp tay.', 'Kế hoạch luyện tập: mục tiêu, nội dung, tần suất (3–5 buổi/tuần), cường độ tăng dần.'],
      q: `? Bài kiểm tra bật xa tại chỗ đánh giá: | Sức mạnh chân | Sức bền | Sự mềm dẻo | Khả năng bơi
? Chạy tuỳ sức 5 phút đánh giá tố chất: | Sức bền | Sức nhanh | Khéo léo | Sức mạnh tay
+ Kế hoạch luyện tập nên tăng dần lượng vận động.
- Tập luyện quá sức liên tục giúp thể lực tăng nhanh và an toàn.` },
    { hk: 1, ten: 'Bóng đá và futsal', bai: ['Phối hợp chiến thuật', 'Luật futsal'],
      lt: ['Futsal: mỗi đội 5 người (kể cả thủ môn), 2 hiệp × 20 phút (thời gian thực), bóng số 4 ít nảy.', 'Chiến thuật: phối hợp 2 người (bật tường), giữ cự li đội hình.'],
      q: `? Mỗi đội futsal có bao nhiêu cầu thủ trên sân (kể cả thủ môn)? | 5 | 7 | 11 | 6
? Phối hợp chuyền bóng cho đồng đội rồi nhận lại ngay gọi là: | Bật tường | Việt vị | Phạt góc | Ném biên
+ Futsal sử dụng bóng ít nảy hơn bóng đá sân lớn.
- Futsal thi đấu 2 hiệp, mỗi hiệp 45 phút.` },
    { hk: 2, ten: 'Bóng chuyền và bóng rổ nâng cao', bai: ['Chiến thuật tấn công, phòng thủ', 'Tổ chức thi đấu, trọng tài'],
      lt: ['Bóng chuyền: chiến thuật chuyền 2 – đập bóng, chắn bóng; vị trí libero (chuyên phòng thủ).', 'Bóng rổ: phòng thủ kèm người, phòng thủ khu vực; luật 24 giây tấn công.'],
      q: `? Trong bóng chuyền, cầu thủ chuyên phòng thủ mặc áo khác màu gọi là: | Libero | Chuyền hai | Đập biên | Đội trưởng
? Theo luật FIBA, mỗi lượt tấn công trong bóng rổ có tối đa: | 24 giây | 30 giây | 10 giây | 60 giây
+ Phòng thủ khu vực là chiến thuật phòng thủ trong bóng rổ.
- Libero được phép đập bóng tấn công từ trên cao mép lưới ở mọi vị trí.` },
    { hk: 2, ten: 'Thể thao và lối sống lành mạnh', bai: ['Tổ chức hoạt động thể thao ngoại khoá', 'Thể thao và nghề nghiệp'], on: 'Ôn tập cuối năm',
      lt: ['Lối sống lành mạnh: vận động ít nhất 60 phút/ngày (thanh thiếu niên theo khuyến nghị WHO), ngủ đủ, ăn uống cân đối, không chất kích thích.', 'Nghề liên quan: vận động viên, huấn luyện viên, giáo viên thể dục, trọng tài, chuyên viên phục hồi chức năng.'],
      q: `? WHO khuyến nghị thanh thiếu niên vận động thể lực mức trung bình đến mạnh mỗi ngày ít nhất: | 60 phút | 10 phút | 5 phút | 300 phút
+ Trọng tài là một nghề liên quan đến thể thao.
- Dùng chất kích thích giúp nâng cao thành tích là hợp lệ.` }
  ],
  essays: {
    1: [['Xây dựng kế hoạch tự luyện tập nâng cao sức bền trong 4 tuần.', ['mục tiêu', 'tần suất', 'tăng dần'], 'Mục tiêu (chạy liên tục 20 phút); tuần 1: chạy – đi bộ xen kẽ 15 phút, 3 buổi; tuần 2: chạy 15 phút; tuần 3: chạy 18 phút, 4 buổi; tuần 4: chạy 20 phút. Khởi động, thả lỏng; theo dõi nhịp tim, điều chỉnh.', 3],
      ['Phân biệt bóng đá sân 11 người và futsal.', ['5 người', '11 người', 'thời gian'], 'Bóng đá: 11 người/đội, 2 hiệp × 45 phút, sân cỏ lớn, bóng số 5. Futsal: 5 người/đội, 2 hiệp × 20 phút thời gian thực, sân nhỏ trong nhà, bóng số 4 ít nảy, thay người không hạn chế.', 3]],
    2: [['Trình bày vai trò của thể dục thể thao đối với lối sống lành mạnh của học sinh.', ['sức khoẻ', 'tinh thần', 'thói quen'], 'Nâng cao sức khoẻ, phòng bệnh; giảm căng thẳng học tập; hình thành thói quen tốt, tránh tệ nạn; rèn ý chí, tinh thần đồng đội; tạo niềm vui, gắn kết.', 3],
      ['Nêu một số nghề nghiệp liên quan đến thể dục thể thao và yêu cầu đối với người làm nghề.', ['huấn luyện viên', 'trọng tài', 'yêu cầu'], 'Nghề: vận động viên, huấn luyện viên, giáo viên GDTC, trọng tài, bác sĩ thể thao, quản lí sự kiện thể thao. Yêu cầu: sức khoẻ tốt, kiến thức chuyên môn, kỉ luật, đam mê, kĩ năng giao tiếp.', 3]]
  }
});

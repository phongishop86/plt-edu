/* Hoạt động trải nghiệm, hướng nghiệp 9 – KNTT. 9 chủ đề; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'hdtn-9', lop: 9, mon: 'Hoạt động trải nghiệm, hướng nghiệp', icon: '🧭', so: false,
  topics: [
    { hk: 1, ten: 'Em với nhà trường', bai: ['Xây dựng nhà trường văn minh, thân thiện', 'Tình bạn tuổi học trò'],
      lt: ['Trường học văn minh, thân thiện: tôn trọng, hợp tác, không bạo lực; giữ gìn cảnh quan.', 'Giữ gìn tình bạn: chia sẻ, hỗ trợ, giải quyết mâu thuẫn tích cực.'],
      q: `? Biểu hiện của trường học thân thiện là: | Thầy trò tôn trọng, hợp tác, không bạo lực | Bắt nạt học sinh lớp dưới | Vứt rác bừa bãi | Ganh ghét nhau
+ Mỗi học sinh góp phần xây dựng trường học văn minh.
- Trường học thân thiện chỉ là trách nhiệm của thầy cô.` },
    { hk: 1, ten: 'Khám phá bản thân', bai: ['Điểm mạnh, điểm hạn chế của bản thân', 'Tư duy tích cực'],
      lt: ['Nhận diện điểm mạnh, điểm hạn chế; xây dựng kế hoạch phát triển bản thân.', 'Tư duy tích cực: nhìn nhận vấn đề theo hướng xây dựng, học hỏi từ thất bại.'],
      q: `? Tư duy tích cực khi bị điểm kém là: | Tìm nguyên nhân và lập kế hoạch cải thiện | Bỏ cuộc | Đổ lỗi cho thầy cô | Tự ti mãi
+ Thất bại là cơ hội để học hỏi và tiến bộ.
- Người có tư duy tích cực không bao giờ gặp khó khăn.` },
    { hk: 1, ten: 'Trách nhiệm với bản thân', bai: ['Sống có trách nhiệm', 'Kĩ năng tự bảo vệ'],
      lt: ['Chịu trách nhiệm về lời nói, việc làm của mình; giữ lời hứa; hoàn thành nhiệm vụ.', 'Tự bảo vệ: trước xâm hại, lừa đảo, tệ nạn xã hội; nhận diện và từ chối.'],
      q: `? Biểu hiện của sống có trách nhiệm là: | Thực hiện đến cùng việc mình đã nhận | Đổ lỗi cho người khác | Hứa rồi bỏ đó | Trốn tránh nhiệm vụ
+ Từ chối dứt khoát trước lời rủ rê sử dụng chất gây nghiện là cách tự bảo vệ.
- Sống có trách nhiệm chỉ là việc của người lớn.` },
    { hk: 1, ten: 'Rèn luyện bản thân', bai: ['Quản lí cảm xúc và căng thẳng', 'Kĩ năng tài chính cá nhân'],
      lt: ['Nhận diện nguyên nhân căng thẳng (thi vào 10, áp lực học tập); biện pháp: lập kế hoạch, thư giãn, chia sẻ.', 'Tài chính cá nhân: ngân sách, tiết kiệm, tiêu dùng thông minh.'],
      q: `? Cách giảm căng thẳng trước kì thi vào lớp 10 là: | Lập kế hoạch ôn tập hợp lí, ngủ đủ, tập thể dục | Thức trắng đêm | Bỏ ăn | Uống nhiều nước tăng lực
+ Ngủ đủ giấc giúp ghi nhớ tốt hơn.
- Học liên tục không nghỉ là cách ôn thi hiệu quả nhất.` },
    { hk: 2, ten: 'Em với gia đình', bai: ['Xây dựng gia đình hạnh phúc', 'Chia sẻ với gia đình về định hướng nghề nghiệp'],
      lt: ['Góp phần xây dựng gia đình hạnh phúc: yêu thương, chia sẻ, tôn trọng.', 'Trao đổi với gia đình về lựa chọn hướng học, nghề nghiệp.'],
      q: `? Khi lựa chọn hướng học sau THCS, em nên: | Trao đổi, lắng nghe ý kiến gia đình và thầy cô | Tự quyết định không hỏi ai | Theo bạn thân | Chọn ngẫu nhiên
+ Gia đình là chỗ dựa quan trọng khi định hướng nghề nghiệp.
- Ý kiến cha mẹ không có giá trị khi chọn nghề.` },
    { hk: 2, ten: 'Em với cộng đồng', bai: ['Phát triển cộng đồng văn minh', 'Dự án vì cộng đồng'],
      lt: ['Tham gia xây dựng nếp sống văn minh, an toàn giao thông, bảo vệ môi trường ở địa phương.', 'Thực hiện dự án nhỏ vì cộng đồng: lập kế hoạch, phân công, triển khai, đánh giá.'],
      q: `? Bước đầu tiên của một dự án vì cộng đồng là: | Xác định vấn đề, nhu cầu của cộng đồng | Báo cáo kết quả | Xin tiền tài trợ | Đăng mạng xã hội
+ Dự án cộng đồng cần kế hoạch và phân công rõ ràng.
> Xác định vấn đề > Lập kế hoạch > Phân công > Triển khai > Đánh giá, rút kinh nghiệm` },
    { hk: 2, ten: 'Em với thiên nhiên và môi trường', bai: ['Ứng phó với biến đổi khí hậu', 'Bảo tồn danh lam thắng cảnh'],
      lt: ['Biến đổi khí hậu: biểu hiện, nguyên nhân, hành động giảm nhẹ và thích ứng.', 'Bảo tồn danh lam thắng cảnh: không xả rác, không khắc vẽ, tuyên truyền.'],
      q: `? Hành động góp phần giảm phát thải khí nhà kính là: | Đi xe đạp, dùng phương tiện công cộng | Đốt rác | Chặt phá rừng | Lãng phí điện
+ Trồng cây xanh góp phần hấp thụ CO₂.
- Biến đổi khí hậu không ảnh hưởng đến Việt Nam.` },
    { hk: 2, ten: 'Khám phá thế giới nghề nghiệp', bai: ['Tìm hiểu nhóm nghề và yêu cầu', 'Trải nghiệm nghề nghiệp'],
      lt: ['Nhóm nghề: kĩ thuật – công nghệ, kinh tế – dịch vụ, y tế, giáo dục, nghệ thuật, nông – lâm – ngư nghiệp.', 'Yêu cầu của nghề: kiến thức, kĩ năng, phẩm chất, sức khoẻ; môi trường làm việc; triển vọng.'],
      q: `? Khi tìm hiểu một nghề, em cần biết: | Công việc, yêu cầu năng lực, môi trường, triển vọng | Chỉ mức lương | Chỉ tên nghề | Chỉ đồng phục
+ Trải nghiệm thực tế giúp hiểu rõ hơn về nghề nghiệp.
- Mọi nghề đều có yêu cầu giống nhau.` },
    { hk: 2, ten: 'Hiểu bản thân – chọn đúng nghề', bai: ['Lựa chọn hướng học sau THCS', 'Lập kế hoạch học tập theo định hướng nghề'], on: 'Tổng kết năm học',
      lt: ['Phân luồng sau THCS: THPT, trung cấp/giáo dục nghề nghiệp, giáo dục thường xuyên.', 'Lập kế hoạch: mục tiêu, môn học cần chú trọng, kĩ năng cần rèn, mốc thời gian.'],
      q: `? Phân luồng sau THCS nhằm: | Giúp học sinh chọn hướng học phù hợp năng lực, nguyện vọng | Hạn chế học sinh học tiếp | Bắt buộc mọi người vào đại học | Không có mục đích
+ Học nghề sau THCS giúp sớm có kĩ năng làm việc.
- Chỉ có một con đường duy nhất sau THCS là vào THPT.` }
  ],
  essays: {
    1: [['Nêu điểm mạnh, điểm hạn chế của bản thân và kế hoạch phát huy, khắc phục.', ['điểm mạnh', 'hạn chế', 'kế hoạch'], 'Liệt kê 2–3 điểm mạnh, 2–3 điểm hạn chế; biện pháp phát huy, khắc phục cụ thể, thời gian thực hiện, cách tự đánh giá.'],
      ['Em làm gì để giảm căng thẳng trong giai đoạn ôn thi vào lớp 10?', ['kế hoạch', 'nghỉ ngơi', 'chia sẻ'], 'Lập kế hoạch ôn tập hợp lí; ngủ đủ, ăn uống điều độ; tập thể dục; thư giãn; suy nghĩ tích cực; chia sẻ với gia đình, thầy cô, bạn bè.']],
    2: [['Trình bày định hướng học tập của em sau khi tốt nghiệp THCS và lí do.', ['THPT', 'học nghề', 'lí do'], 'Nêu lựa chọn (THPT/trường nghề…), căn cứ: năng lực, sở thích, điều kiện gia đình, nhu cầu xã hội; kế hoạch chuẩn bị.'],
      ['Đề xuất một dự án nhỏ vì cộng đồng tại địa phương em.', ['dự án', 'kế hoạch', 'cộng đồng'], 'Tên dự án, vấn đề cần giải quyết, mục tiêu, đối tượng, hoạt động, phân công, thời gian, kinh phí, kết quả mong đợi, cách đánh giá.']]
  }
});

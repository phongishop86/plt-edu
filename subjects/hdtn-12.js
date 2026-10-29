/* Hoạt động trải nghiệm, hướng nghiệp 12 – KNTT. Câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'hdtn-12', lop: 12, mon: 'Hoạt động trải nghiệm, hướng nghiệp', icon: '🧭', so: false,
  topics: [
    { hk: 1, ten: 'Xây dựng và phát triển nhà trường', bai: ['Tổ chức hoạt động truyền thống', 'Tri ân thầy cô, bạn bè trước khi ra trường'],
      lt: ['Học sinh lớp 12: phát huy vai trò gương mẫu, truyền cảm hứng cho đàn em, lưu giữ kỉ niệm tuổi học trò.'],
      q: `? Hành động thể hiện lòng tri ân thầy cô là: | Học tập tốt, gửi lời cảm ơn chân thành | Nói xấu thầy cô | Bỏ tiết học | Phá hoại tài sản trường
+ Học sinh lớp 12 có thể là tấm gương cho học sinh lớp dưới.
- Tri ân thầy cô chỉ thể hiện bằng quà đắt tiền.` },
    { hk: 1, ten: 'Trưởng thành và tự lập', bai: ['Thể hiện sự trưởng thành của bản thân', 'Kĩ năng sống tự lập'],
      lt: ['Biểu hiện trưởng thành: tự chịu trách nhiệm, tự quản lí thời gian, tài chính, ra quyết định có cân nhắc.', 'Kĩ năng tự lập: nấu ăn cơ bản, giặt giũ, quản lí chi tiêu, an toàn khi sống xa nhà.'],
      q: `? Biểu hiện của người trưởng thành là: | Tự chịu trách nhiệm về quyết định của mình | Đổ lỗi cho người khác | Phụ thuộc hoàn toàn vào bố mẹ | Hành động bốc đồng
+ Kĩ năng tự lập rất cần khi sinh viên sống xa nhà.
- Trưởng thành chỉ phụ thuộc vào tuổi tác.` },
    { hk: 1, ten: 'Trách nhiệm với gia đình và cộng đồng', bai: ['Chăm sóc gia đình', 'Tham gia hoạt động tình nguyện, phát triển cộng đồng'],
      lt: ['Hiến máu tình nguyện: người từ đủ 18 tuổi, đủ sức khoẻ, cân nặng theo quy định.', 'Hoạt động tình nguyện: mùa hè xanh, tiếp sức mùa thi, hỗ trợ người khó khăn.'],
      q: `? Độ tuổi tối thiểu để hiến máu tình nguyện ở Việt Nam là đủ: | 18 tuổi | 16 tuổi | 15 tuổi | 21 tuổi
+ Tham gia hoạt động tình nguyện giúp rèn kĩ năng và lòng nhân ái.
- Học sinh không thể đóng góp gì cho cộng đồng.` },
    { hk: 2, ten: 'Bảo vệ môi trường và phát triển bền vững', bai: ['Hành động vì môi trường', 'Lối sống xanh'],
      lt: ['Lối sống xanh: tiêu dùng có trách nhiệm, tái sử dụng, tái chế, ưu tiên sản phẩm thân thiện môi trường.'],
      q: `? Biểu hiện của lối sống xanh là: | Mang bình nước cá nhân thay chai nhựa | Dùng đồ nhựa một lần | Lãng phí thức ăn | Xả rác bừa bãi
+ Nguyên tắc 3R gồm giảm thiểu, tái sử dụng, tái chế.
- Lối sống xanh làm giảm chất lượng cuộc sống.` },
    { hk: 2, ten: 'Lựa chọn nghề và trường đào tạo', bai: ['Thông tin tuyển sinh đại học, cao đẳng, trường nghề', 'Ra quyết định chọn nghề, chọn trường'],
      lt: ['Căn cứ chọn nghề: sở thích, năng lực, tính cách, nhu cầu xã hội, điều kiện gia đình.', 'Tìm hiểu tuyển sinh: phương thức xét tuyển (điểm thi tốt nghiệp, học bạ, đánh giá năng lực…), tổ hợp môn, ngành, chỉ tiêu.', 'Con đường sau THPT: đại học, cao đẳng, trung cấp nghề, đi làm, du học.'],
      q: `? Căn cứ quan trọng nhất khi chọn nghề là: | Sự phù hợp giữa sở thích, năng lực và nhu cầu xã hội | Theo bạn thân | Chỉ theo mức lương | Chọn ngẫu nhiên
? Nguồn thông tin tuyển sinh đáng tin cậy là: | Website chính thức của trường và Bộ GD&ĐT | Tin đồn trên mạng | Quảng cáo không rõ nguồn | Lời người lạ
+ Học nghề cũng là một con đường lập nghiệp tốt sau THPT.
- Chỉ có học đại học mới thành công.` },
    { hk: 2, ten: 'Chuẩn bị hành trang vào đời', bai: ['Kĩ năng viết hồ sơ, phỏng vấn', 'Kế hoạch sau tốt nghiệp'], on: 'Ôn tập cuối năm',
      lt: ['Hồ sơ xin việc/học bổng: CV ngắn gọn, trung thực, nêu học vấn, kĩ năng, hoạt động.', 'Phỏng vấn: trang phục phù hợp, đúng giờ, tự tin, trả lời rõ ràng.'],
      q: `? Khi viết CV cần đảm bảo: | Ngắn gọn, trung thực, rõ ràng | Càng dài càng tốt | Phóng đại thành tích | Không cần thông tin liên hệ
+ Đúng giờ là yêu cầu quan trọng khi đi phỏng vấn.
- Có thể ghi thành tích không có thật vào CV.` }
  ],
  essays: {
    1: [['Nêu những biểu hiện của sự trưởng thành ở học sinh lớp 12.', ['trách nhiệm', 'tự lập', 'quyết định'], 'Tự chịu trách nhiệm; tự quản lí thời gian, tài chính; kiểm soát cảm xúc; quan tâm gia đình, cộng đồng; ra quyết định có cân nhắc; định hướng tương lai rõ ràng.', 3],
      ['Em sẽ làm gì để chuẩn bị cho cuộc sống tự lập khi học xa nhà?', ['kĩ năng', 'chi tiêu', 'an toàn'], 'Rèn kĩ năng nấu ăn, giặt giũ, dọn dẹp; lập kế hoạch chi tiêu; tìm hiểu nơi ở an toàn; cảnh giác lừa đảo; giữ liên lạc gia đình; chăm sóc sức khoẻ.', 3]],
    2: [['Trình bày quyết định chọn nghề, chọn trường của em và lí do.', ['nghề', 'trường', 'lí do'], 'Nghề và ngành học dự định; trường, phương thức xét tuyển; lí do (sở thích, năng lực, cơ hội việc làm, điều kiện gia đình); phương án dự phòng; kế hoạch chuẩn bị.', 3],
      ['Nêu những lưu ý khi viết CV và tham gia phỏng vấn.', ['trung thực', 'ngắn gọn', 'tự tin'], 'CV: ngắn gọn (1–2 trang), trung thực, rõ ràng, có thông tin liên hệ, học vấn, kĩ năng, kinh nghiệm. Phỏng vấn: tìm hiểu đơn vị, trang phục phù hợp, đúng giờ, tự tin, lắng nghe, trả lời rõ ràng, đặt câu hỏi phù hợp.', 3]]
  }
});

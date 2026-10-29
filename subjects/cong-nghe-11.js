/* Công nghệ 11 (Công nghệ cơ khí) – KNTT. Bài theo mục lục SGK; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'cong-nghe-11', lop: 11, mon: 'Công nghệ', icon: '🛠️', nhan: 'Chương', so: false,
  topics: [
    { hk: 1, nhan: 'Chương I, II', ten: 'Giới thiệu chung về cơ khí chế tạo. Vật liệu cơ khí', bai: ['Bài 1. Khái quát về cơ khí chế tạo', 'Bài 2. Ngành nghề trong lĩnh vực cơ khí chế tạo', 'Bài 3. Tổng quan về vật liệu cơ khí', 'Bài 4. Vật liệu kim loại và hợp kim', 'Bài 5. Vật liệu phi kim loại', 'Bài 6. Vật liệu mới'],
      lt: ['Cơ khí chế tạo: thiết kế, chế tạo máy móc, thiết bị, dụng cụ; vai trò nền tảng của công nghiệp.', 'Tính chất vật liệu: cơ học (độ bền, độ cứng, độ dẻo), vật lí, hoá học, công nghệ.', 'Kim loại đen: gang (C > 2,14%), thép (C ≤ 2,14%). Kim loại màu: nhôm, đồng và hợp kim.', 'Phi kim loại: chất dẻo nhiệt (tái chế được), chất dẻo nhiệt rắn, cao su, gốm. Vật liệu mới: nano, composite, vật liệu thông minh.'],
      q: `? Gang là hợp kim của sắt với cacbon có tỉ lệ cacbon: | Lớn hơn 2,14% | Nhỏ hơn 2,14% | Bằng 0% | Trên 50%
? Kim loại màu nhẹ, dẫn điện tốt, dùng làm dây điện, vỏ máy bay là: | Nhôm | Gang | Thép | Chì
? Chất dẻo có thể nung nóng chảy để tái chế nhiều lần là: | Chất dẻo nhiệt | Chất dẻo nhiệt rắn | Gốm | Cao su lưu hoá
? Vật liệu kết hợp từ hai hay nhiều vật liệu khác nhau gọi là: | Composite | Gang | Đồng thau | Nhôm nguyên chất
+ Thép có tỉ lệ cacbon không quá 2,14%.
- Gốm là kim loại màu.
= Gang = Sắt + cacbon trên 2,14%
= Thép = Sắt + cacbon không quá 2,14%
= Composite = Vật liệu kết hợp nhiều thành phần
= Chất dẻo nhiệt = Tái chế được` },
    { hk: 1, nhan: 'Chương III, IV', ten: 'Gia công cơ khí. Sản xuất cơ khí', bai: ['Bài 7. Khái quát về gia công cơ khí', 'Bài 8. Một số phương pháp gia công cơ khí', 'Bài 9. Quy trình công nghệ gia công chi tiết', 'Bài 10. Dự án: Chế tạo sản phẩm bằng phương pháp gia công cắt gọt', 'Bài 11. Quá trình sản xuất cơ khí', 'Bài 12. Dây chuyền sản xuất tự động với sự tham gia của robot', 'Bài 13. Tự động hoá quá trình sản xuất dưới tác động của Cách mạng công nghiệp 4.0', 'Bài 14. An toàn lao động và bảo vệ môi trường trong sản xuất cơ khí'],
      lt: ['Gia công không phoi: đúc, rèn, dập, hàn. Gia công có phoi (cắt gọt): tiện, phay, khoan, bào, mài.', 'Tiện: chi tiết quay tròn, dao tiến – gia công mặt trụ tròn xoay.', 'Robot công nghiệp, máy CNC (điều khiển số bằng máy tính), sản xuất thông minh.', 'An toàn lao động: bảo hộ (kính, găng, giày), tuân thủ quy trình; xử lí chất thải, tiếng ồn.'],
      q: `? Phương pháp gia công cắt gọt chi tiết dạng trụ tròn xoay là: | Tiện | Đúc | Hàn | Rèn
? Phương pháp nối các chi tiết kim loại bằng cách nung nóng chảy chỗ nối là: | Hàn | Tiện | Phay | Khoan
? Máy CNC là máy: | Điều khiển số bằng máy tính | Chạy bằng sức người | Chạy bằng hơi nước | Không cần điện
? Phương pháp gia công tạo phôi bằng cách rót kim loại lỏng vào khuôn là: | Đúc | Tiện | Bào | Mài
+ Robot công nghiệp giúp tăng năng suất và độ chính xác.
- Đúc là phương pháp gia công có phoi.
# Gia công có phoi: Tiện, Phay, Khoan, Mài
# Gia công không phoi: Đúc, Rèn, Dập, Hàn` },
    { hk: 2, nhan: 'Chương V, VI', ten: 'Cơ khí động lực. Động cơ đốt trong', bai: ['Bài 15. Khái quát về cơ khí động lực', 'Bài 16. Ngành nghề trong lĩnh vực cơ khí động lực', 'Bài 17. Đại cương về động cơ đốt trong', 'Bài 18. Nguyên lí làm việc của động cơ đốt trong', 'Bài 19. Các cơ cấu trong động cơ đốt trong', 'Bài 20. Các hệ thống trong động cơ đốt trong'],
      lt: ['Hệ thống cơ khí động lực: nguồn động lực → hệ thống truyền động → máy công tác (ô tô, tàu thuỷ, máy bay, máy nông nghiệp).', 'Động cơ đốt trong: nhiên liệu đốt cháy bên trong xi lanh. Phân loại: xăng, Diesel; 2 kì, 4 kì.', 'Chu trình 4 kì: <b>nạp → nén → nổ (cháy – giãn nở, sinh công) → thải</b>. Chỉ kì nổ sinh công.', 'Cơ cấu trục khuỷu – thanh truyền; cơ cấu phân phối khí. Hệ thống: bôi trơn, làm mát, cung cấp nhiên liệu, đánh lửa (động cơ xăng), khởi động.', 'Điểm chết trên (ĐCT), điểm chết dưới (ĐCD), hành trình pít-tông.'],
      q: `? Trong chu trình động cơ 4 kì, kì sinh công là: | Kì nổ (cháy – giãn nở) | Kì nạp | Kì nén | Kì thải
? Hệ thống đánh lửa có ở động cơ: | Xăng | Diesel | Cả hai | Không động cơ nào
? Cơ cấu biến chuyển động tịnh tiến của pít-tông thành chuyển động quay là: | Trục khuỷu – thanh truyền | Phân phối khí | Hệ thống làm mát | Bộ chế hoà khí
? Động cơ Diesel tự cháy nhờ: | Không khí bị nén có nhiệt độ cao | Bugi đánh lửa | Ánh sáng | Pin
+ Trong động cơ 4 kì, mỗi chu trình trục khuỷu quay 2 vòng.
- Hệ thống làm mát giúp tăng nhiệt độ động cơ.
> Nạp > Nén > Nổ > Thải
= Hệ thống bôi trơn = Giảm ma sát, mài mòn
= Hệ thống làm mát = Giữ nhiệt độ động cơ ổn định
= Hệ thống khởi động = Quay trục khuỷu đến khi động cơ tự chạy
= Hệ thống đánh lửa = Tạo tia lửa điện ở bugi` },
    { hk: 2, nhan: 'Chương VII', ten: 'Ô tô', bai: ['Bài 21. Khái quát chung về ô tô', 'Bài 22. Hệ thống truyền lực', 'Bài 23. Bánh xe và hệ thống treo', 'Bài 24. Hệ thống lái', 'Bài 25. Hệ thống phanh và an toàn khi tham gia giao thông'], on: 'Ôn tập cuối năm',
      lt: ['Cấu tạo ô tô: động cơ, khung vỏ, hệ thống truyền lực, hệ thống điều khiển (lái, phanh), bánh xe và hệ thống treo, hệ thống điện.', 'Hệ thống truyền lực: li hợp → hộp số → truyền lực các-đăng → truyền lực chính, vi sai → bán trục → bánh xe chủ động.', 'Hệ thống treo giảm rung động; hệ thống lái thay đổi hướng chuyển động; hệ thống phanh giảm tốc, dừng xe (ABS chống bó cứng).'],
      q: `? Bộ phận giúp bánh xe hai bên quay với tốc độ khác nhau khi ô tô vào cua là: | Bộ vi sai | Li hợp | Hộp số | Hệ thống treo
? Hệ thống ABS trên ô tô có tác dụng: | Chống bó cứng phanh | Tăng tốc | Làm mát động cơ | Chiếu sáng
? Bộ phận dùng để ngắt, nối truyền động từ động cơ đến hộp số là: | Li hợp | Bộ vi sai | Bán trục | Lốp xe
+ Hệ thống treo giúp giảm rung động, êm dịu khi xe chạy.
- Hệ thống lái dùng để dừng xe.
> Động cơ > Li hợp > Hộp số > Truyền lực các-đăng > Truyền lực chính và vi sai > Bánh xe chủ động` }
  ],
  essays: {
    1: [['Phân biệt gang và thép về thành phần, tính chất, ứng dụng.', ['cacbon', 'giòn', 'dẻo'], 'Gang: tỉ lệ cacbon > 2,14%, cứng, giòn, khó gia công áp lực, dùng đúc vỏ máy, bệ máy. Thép: cacbon ≤ 2,14%, bền, dẻo, dai hơn, dễ gia công, dùng làm kết cấu xây dựng, chi tiết máy, dụng cụ.'],
      ['Nêu các biện pháp đảm bảo an toàn lao động trong sản xuất cơ khí.', ['bảo hộ', 'quy trình', 'môi trường'], 'Sử dụng đầy đủ trang bị bảo hộ (kính, găng tay, giày, quần áo); tuân thủ quy trình vận hành máy; kiểm tra máy trước khi dùng; giữ khu vực làm việc gọn gàng; xử lí chất thải, phoi, dầu mỡ đúng quy định; giảm tiếng ồn, bụi.', 3]],
    2: [['Trình bày nguyên lí làm việc của động cơ xăng 4 kì.', ['nạp', 'nén', 'nổ', 'thải'], 'Kì nạp: pít-tông đi xuống, xu páp nạp mở, hoà khí vào xi lanh. Kì nén: hai xu páp đóng, pít-tông đi lên nén hoà khí. Kì nổ: bugi đánh lửa, hoà khí cháy giãn nở đẩy pít-tông đi xuống, sinh công. Kì thải: xu páp thải mở, pít-tông đi lên đẩy khí thải ra ngoài.'],
      ['Nêu những quy tắc an toàn khi sử dụng hệ thống phanh và tham gia giao thông bằng ô tô.', ['phanh', 'khoảng cách', 'tốc độ'], 'Kiểm tra hệ thống phanh định kì; giữ khoảng cách an toàn; giảm tốc độ khi đường trơn, vào cua; không phanh gấp đột ngột khi không cần; thắt dây an toàn; tuân thủ luật giao thông, không uống rượu bia khi lái xe.', 3]]
  }
});

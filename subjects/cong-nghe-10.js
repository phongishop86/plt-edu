/* Công nghệ 10 (Thiết kế và công nghệ) – KNTT. Bài theo mục lục SGK; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'cong-nghe-10', lop: 10, mon: 'Công nghệ', icon: '🛠️', nhan: 'Chương', so: false,
  topics: [
    { hk: 1, nhan: 'Chương I, II', ten: 'Đại cương về công nghệ. Công nghệ phổ biến', bai: ['Bài 1. Công nghệ và đời sống', 'Bài 2. Hệ thống kĩ thuật', 'Bài 3. Công nghệ phổ biến', 'Bài 4. Một số công nghệ mới', 'Bài 5. Đánh giá công nghệ', 'Bài 6. Cách mạng công nghiệp', 'Bài 7. Ngành nghề kĩ thuật, công nghệ'],
      lt: ['<b>Công nghệ</b>: giải pháp, quy trình, bí quyết kĩ thuật để biến đổi nguồn lực thành sản phẩm.', '<b>Hệ thống kĩ thuật</b>: đầu vào → bộ phận xử lí → đầu ra (có thể có điều khiển, phản hồi).', 'Công nghệ phổ biến: luyện kim, đúc, cắt gọt, hàn; điện – điện tử; truyền thông.', 'Công nghệ mới: nano, CAD/CAM/CAE, vật liệu mới, AI, IoT, năng lượng tái tạo, in 3D.', 'Cách mạng công nghiệp: 1.0 (máy hơi nước), 2.0 (điện, dây chuyền), 3.0 (điện tử, máy tính, tự động hoá), 4.0 (số hoá, AI, IoT, dữ liệu lớn).'],
      q: `? Cuộc cách mạng công nghiệp lần thứ nhất gắn với: | Máy hơi nước | Điện năng | Máy tính | Trí tuệ nhân tạo
? Cuộc cách mạng công nghiệp lần thứ tư đặc trưng bởi: | Số hoá, AI, IoT | Máy hơi nước | Dây chuyền điện | Cối xay gió
? Thành phần của hệ thống kĩ thuật gồm: | Đầu vào, bộ phận xử lí, đầu ra | Chỉ có đầu ra | Chỉ có máy móc | Chỉ có người
? Công nghệ in 3D tạo sản phẩm bằng cách: | Đắp từng lớp vật liệu | Cắt gọt khối vật liệu | Đúc khuôn | Rèn
+ Đánh giá công nghệ dựa trên tiêu chí hiệu quả, độ tin cậy, kinh tế, môi trường.
- Cách mạng công nghiệp lần thứ ba gắn với máy hơi nước.
= Cách mạng công nghiệp 1.0 = Máy hơi nước, cơ khí hoá
= Cách mạng công nghiệp 2.0 = Điện, sản xuất hàng loạt
= Cách mạng công nghiệp 3.0 = Điện tử, máy tính, tự động hoá
= Cách mạng công nghiệp 4.0 = Số hoá, AI, IoT` },
    { hk: 1, nhan: 'Chương III, IV', ten: 'Vẽ kĩ thuật: tiêu chuẩn, hình chiếu, hình cắt', bai: ['Bài 8. Bản vẽ kĩ thuật và tiêu chuẩn trình bày bản vẽ kĩ thuật', 'Bài 9. Hình chiếu vuông góc', 'Bài 10. Hình cắt và mặt cắt', 'Bài 11. Hình chiếu trục đo', 'Bài 12. Hình chiếu phối cảnh'],
      lt: ['Tiêu chuẩn: khổ giấy (A0 lớn nhất → A4), tỉ lệ (thu nhỏ 1:2, nguyên hình 1:1, phóng to 2:1), nét vẽ (liền đậm – đường bao thấy; nét đứt – đường bao khuất; gạch chấm mảnh – đường tâm, trục), chữ viết, ghi kích thước (đơn vị mm).', 'Phương pháp chiếu góc thứ nhất: hình chiếu đứng, bằng (dưới hình chiếu đứng), cạnh (bên phải hình chiếu đứng).', 'Hình cắt: biểu diễn phần vật thể sau mặt phẳng cắt; mặt cắt: phần tiếp xúc với mặt phẳng cắt.', 'Hình chiếu trục đo: vuông góc đều, xiên góc cân. Hình chiếu phối cảnh: một điểm tụ, hai điểm tụ.'],
      q: `? Khổ giấy lớn nhất trong các khổ giấy chính là: | A0 | A4 | A3 | A1
? Tỉ lệ 1:2 là tỉ lệ: | Thu nhỏ | Phóng to | Nguyên hình | Không xác định
? Nét liền đậm dùng để vẽ: | Đường bao thấy | Đường bao khuất | Đường tâm | Đường kích thước
? Nét đứt mảnh dùng để vẽ: | Đường bao khuất | Đường bao thấy | Đường tâm | Đường gióng
? Theo phương pháp chiếu góc thứ nhất, hình chiếu bằng đặt ở: | Dưới hình chiếu đứng | Trên hình chiếu đứng | Bên trái hình chiếu đứng | Bên phải hình chiếu cạnh
? Đơn vị đo kích thước dài trên bản vẽ kĩ thuật là: | mm | cm | m | inch
+ Hình chiếu phối cảnh tạo cảm giác xa gần như mắt người nhìn thấy.
- Tỉ lệ 2:1 là tỉ lệ thu nhỏ.
= Nét liền đậm = Đường bao thấy
= Nét đứt mảnh = Đường bao khuất
= Nét gạch chấm mảnh = Đường tâm, đường trục
= Nét liền mảnh = Đường kích thước, đường gióng` },
    { hk: 2, nhan: 'Chương IV, V', ten: 'Bản vẽ kĩ thuật cơ khí, xây dựng. Vẽ bằng máy tính', bai: ['Bài 13. Biểu diễn quy ước ren', 'Bài 14. Bản vẽ cơ khí', 'Bài 15. Bản vẽ xây dựng', 'Bài 16. Vẽ kĩ thuật với sự trợ giúp của máy tính'],
      lt: ['Ren: đường đỉnh ren vẽ nét liền đậm, đường chân ren vẽ nét liền mảnh; vòng chân ren chỉ vẽ 3/4 vòng.', 'Bản vẽ chi tiết: hình biểu diễn, kích thước, yêu cầu kĩ thuật, khung tên. Bản vẽ lắp: hình biểu diễn, kích thước, bảng kê, khung tên.', 'Bản vẽ nhà: mặt bằng (quan trọng nhất), mặt đứng, mặt cắt.', 'Vẽ bằng máy tính: phần mềm CAD (AutoCAD, SolidWorks, Inventor…).'],
      q: `? Đường đỉnh ren ngoài được vẽ bằng nét: | Liền đậm | Liền mảnh | Đứt mảnh | Gạch chấm
? Hình biểu diễn quan trọng nhất của bản vẽ nhà là: | Mặt bằng | Mặt đứng | Mặt cắt | Phối cảnh
? Bản vẽ lắp có thêm thành phần nào so với bản vẽ chi tiết? | Bảng kê | Khung tên | Kích thước | Hình biểu diễn
? Phần mềm hỗ trợ vẽ kĩ thuật trên máy tính là: | AutoCAD | Word | Excel | Paint
+ Vòng chân ren trên hình chiếu cạnh chỉ vẽ khoảng 3/4 vòng.
- Bản vẽ nhà không cần mặt bằng.` },
    { hk: 2, nhan: 'Chương VI, VII', ten: 'Thiết kế kĩ thuật', bai: ['Bài 17. Khái quát về thiết kế kĩ thuật', 'Bài 18. Quy trình thiết kế kĩ thuật', 'Bài 19. Những yếu tố ảnh hưởng đến thiết kế kĩ thuật', 'Bài 20. Nguyên tắc thiết kế kĩ thuật', 'Bài 21. Phương pháp, phương tiện hỗ trợ thiết kế kĩ thuật', 'Bài 22. Dự án: Thiết kế sản phẩm đơn giản'], on: 'Ôn tập cuối năm',
      lt: ['Quy trình thiết kế: xác định vấn đề → tìm hiểu tổng quan, đề xuất giải pháp → xây dựng nguyên mẫu → thử nghiệm, đánh giá → lập hồ sơ kĩ thuật.', 'Yếu tố ảnh hưởng: sản phẩm (nhu cầu, tính năng), nguồn lực, thẩm mĩ, nhân trắc, an toàn, năng lượng, công nghệ, kinh tế, môi trường.', 'Nguyên tắc: đơn giản hoá, tối ưu, tiết kiệm, bền vững, an toàn.', 'Phương pháp: động não, phân tích sản phẩm, tham khảo; phương tiện: phác thảo, CAD, in 3D, mô phỏng.'],
      q: `? Bước đầu tiên của quy trình thiết kế kĩ thuật là: | Xác định vấn đề, xây dựng tiêu chí | Lập hồ sơ kĩ thuật | Thử nghiệm | Chế tạo hàng loạt
? Nhân trắc học liên quan đến: | Kích thước, đặc điểm cơ thể người sử dụng | Giá thành | Màu sắc | Tốc độ máy
? Phương pháp "động não" (brainstorming) dùng để: | Tạo ra nhiều ý tưởng | Đo kích thước | Vẽ bản vẽ | Kiểm tra chất lượng
+ Nguyên mẫu (prototype) dùng để thử nghiệm trước khi sản xuất.
- Thiết kế kĩ thuật không cần quan tâm đến môi trường.
> Xác định vấn đề > Đề xuất giải pháp > Xây dựng nguyên mẫu > Thử nghiệm, đánh giá > Lập hồ sơ kĩ thuật` }
  ],
  essays: {
    1: [['Trình bày đặc điểm các cuộc cách mạng công nghiệp.', ['máy hơi nước', 'điện', 'máy tính', 'số hoá'], 'Lần 1 (cuối thế kỉ XVIII): máy hơi nước, cơ khí hoá. Lần 2 (cuối XIX – đầu XX): điện năng, dây chuyền sản xuất hàng loạt. Lần 3 (từ 1970): điện tử, máy tính, Internet, tự động hoá. Lần 4 (từ đầu thế kỉ XXI): số hoá, AI, IoT, dữ liệu lớn, kết nối thực – ảo.'],
      ['Nêu vị trí các hình chiếu theo phương pháp chiếu góc thứ nhất.', ['hình chiếu đứng', 'hình chiếu bằng', 'hình chiếu cạnh'], 'Hình chiếu đứng ở góc trên bên trái; hình chiếu bằng đặt ngay dưới hình chiếu đứng; hình chiếu cạnh đặt bên phải hình chiếu đứng; các hình chiếu gióng thẳng hàng với nhau.']],
    2: [['Trình bày quy trình thiết kế kĩ thuật. Áp dụng thiết kế một giá để sách đơn giản.', ['vấn đề', 'giải pháp', 'nguyên mẫu', 'thử nghiệm'], '1) Xác định vấn đề, tiêu chí (sức chứa, kích thước, vật liệu, chi phí). 2) Tìm hiểu, đề xuất giải pháp, phác thảo. 3) Xây dựng nguyên mẫu (bìa cứng/gỗ). 4) Thử nghiệm, đánh giá, điều chỉnh. 5) Lập hồ sơ kĩ thuật (bản vẽ, thuyết minh).', 3],
      ['Phân biệt bản vẽ chi tiết và bản vẽ lắp.', ['bản vẽ chi tiết', 'bản vẽ lắp', 'bảng kê'], 'Bản vẽ chi tiết: thể hiện hình dạng, kích thước, yêu cầu kĩ thuật của một chi tiết, dùng để chế tạo, kiểm tra. Bản vẽ lắp: thể hiện hình dạng, vị trí tương quan giữa các chi tiết của sản phẩm, có bảng kê, dùng để lắp ráp.']]
  }
});

/* Công nghệ 8 – KNTT. Chương, bài theo mục lục SGK; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'cong-nghe-8', lop: 8, mon: 'Công nghệ', icon: '🛠️', nhan: 'Chương',
  topics: [
    { hk: 1, ten: 'Vẽ kĩ thuật', bai: ['Một số tiêu chuẩn trình bày bản vẽ kĩ thuật', 'Hình chiếu vuông góc', 'Bản vẽ chi tiết', 'Bản vẽ lắp', 'Bản vẽ nhà', '*Ôn tập Chương I'],
      lt: ['Khổ giấy: A0, A1, A2, A3, A4 (A4: 297 × 210 mm). <b>Tỉ lệ</b>: thu nhỏ (1:2), nguyên hình (1:1), phóng to (2:1).', 'Nét vẽ: nét liền đậm (đường bao thấy), nét liền mảnh (đường kích thước), nét đứt mảnh (đường bao khuất), nét gạch dài – chấm – mảnh (đường tâm, trục đối xứng).', '<b>Hình chiếu vuông góc</b>: hình chiếu đứng (nhìn từ trước), hình chiếu bằng (từ trên xuống, đặt dưới hình chiếu đứng), hình chiếu cạnh (từ trái sang, đặt bên phải hình chiếu đứng).', 'Bản vẽ chi tiết: hình biểu diễn, kích thước, yêu cầu kĩ thuật, khung tên. Bản vẽ lắp: thêm bảng kê. Bản vẽ nhà: mặt bằng, mặt đứng, mặt cắt.'],
      q: `? Đường bao thấy của vật thể được vẽ bằng nét: | Liền đậm | Đứt mảnh | Liền mảnh | Gạch dài – chấm – mảnh
? Đường tâm, trục đối xứng được vẽ bằng nét: | Gạch dài – chấm – mảnh | Liền đậm | Đứt mảnh | Lượn sóng
? Hình chiếu bằng có hướng chiếu: | Từ trên xuống | Từ trước tới | Từ trái sang | Từ dưới lên
? Hình chiếu cạnh được đặt ở vị trí: | Bên phải hình chiếu đứng | Dưới hình chiếu đứng | Trên hình chiếu đứng | Bên trái hình chiếu bằng
? Tỉ lệ 1:2 là tỉ lệ: | Thu nhỏ | Phóng to | Nguyên hình | Không xác định
? Khổ giấy A4 có kích thước: | 297 × 210 mm | 420 × 297 mm | 594 × 420 mm | 210 × 148 mm
? Bản vẽ lắp khác bản vẽ chi tiết ở chỗ có thêm: | Bảng kê | Khung tên | Kích thước | Hình biểu diễn
+ Mặt bằng là hình biểu diễn quan trọng nhất của bản vẽ nhà.
+ Nét đứt mảnh biểu diễn đường bao khuất.
- Hình chiếu bằng đặt bên phải hình chiếu đứng.
- Tỉ lệ 2:1 là tỉ lệ thu nhỏ.
= Nét liền đậm = Đường bao thấy
= Nét đứt mảnh = Đường bao khuất
= Nét liền mảnh = Đường kích thước, đường gióng
= Nét gạch dài – chấm – mảnh = Đường tâm, trục đối xứng
> Đọc khung tên > Phân tích hình biểu diễn > Đọc kích thước > Đọc yêu cầu kĩ thuật > Tổng hợp` },
    { hk: 1, ten: 'Cơ khí', bai: ['Vật liệu cơ khí', 'Truyền và biến đổi chuyển động', 'Gia công cơ khí bằng tay', 'Ngành nghề trong lĩnh vực cơ khí', 'Dự án: Gia công chi tiết bằng dụng cụ cầm tay', '*Ôn tập Chương II'],
      lt: ['Vật liệu kim loại: <b>kim loại đen</b> (thép, gang — thành phần chính sắt và cacbon) và <b>kim loại màu</b> (đồng, nhôm…). Phi kim loại: chất dẻo, cao su.', 'Truyền chuyển động: <b>truyền động đai</b>, <b>truyền động xích</b>, <b>truyền động bánh răng</b>. Tỉ số truyền i = n₂/n₁ = D₁/D₂ (đai) = Z₁/Z₂ (bánh răng, xích).', 'Biến đổi chuyển động: tay quay – thanh trượt (quay ↔ tịnh tiến), bánh răng – thanh răng.', 'Gia công bằng tay: đo, vạch dấu, cưa, giũa, khoan.'],
      q: `? Gang và thép thuộc nhóm vật liệu: | Kim loại đen | Kim loại màu | Chất dẻo | Cao su
? Đồng, nhôm thuộc nhóm: | Kim loại màu | Kim loại đen | Phi kim loại | Gốm sứ
? Cơ cấu biến chuyển động quay thành chuyển động tịnh tiến là: | Tay quay – thanh trượt | Truyền động đai | Truyền động bánh răng | Truyền động xích
? Xe đạp truyền chuyển động từ đĩa đến líp bằng: | Truyền động xích | Truyền động đai | Bánh răng | Thanh răng
? Bánh dẫn có 40 răng, bánh bị dẫn có 20 răng. Tỉ số truyền i là: | 2 | 0,5 | 20 | 60
+ Thép có tỉ lệ cacbon thấp hơn gang.
- Nhôm là kim loại đen.
= Truyền động đai = Máy khâu đạp chân, máy xay xát
= Truyền động xích = Xe đạp, xe máy
= Tay quay – thanh trượt = Biến quay thành tịnh tiến
> Lấy dấu > Cắt (cưa) > Giũa > Khoan > Kiểm tra` },
    { hk: 1, ten: 'An toàn điện', bai: ['Tai nạn điện', 'Biện pháp an toàn điện', 'Sơ cứu người bị tai nạn điện', '*Ôn tập Chương III'],
      lt: ['Nguyên nhân tai nạn điện: chạm vào vật mang điện, vi phạm khoảng cách an toàn với lưới điện cao áp, đến gần dây điện đứt rơi xuống đất.', 'Biện pháp: dùng thiết bị có vỏ cách điện; lắp cầu chì, aptomat; dùng dụng cụ bảo vệ (găng tay cao su, bút thử điện, thảm cách điện); không thả diều gần đường dây điện.', 'Sơ cứu: <b>ngắt nguồn điện</b> hoặc tách nạn nhân bằng vật cách điện khô; đưa ra chỗ thoáng; hô hấp nhân tạo nếu cần; gọi 115.'],
      q: `? Việc làm đầu tiên khi thấy người bị điện giật là: | Ngắt nguồn điện | Kéo tay nạn nhân bằng tay trần | Dội nước vào nạn nhân | Bỏ chạy
? Dụng cụ dùng để kiểm tra vật có điện hay không là: | Bút thử điện | Tua vít thường | Kìm cắt | Búa
? Thiết bị tự động ngắt điện khi quá tải, ngắn mạch là: | Aptomat (cầu dao tự động) | Công tắc | Ổ cắm | Phích cắm
+ Không thả diều gần đường dây điện cao áp.
- Có thể dùng thanh sắt để tách nạn nhân khỏi dây điện.
> Ngắt nguồn điện hoặc tách nạn nhân bằng vật cách điện > Đưa nạn nhân ra nơi thoáng > Kiểm tra hô hấp > Hô hấp nhân tạo nếu cần > Gọi cấp cứu 115` },
    { hk: 2, ten: 'Kĩ thuật điện', bai: ['Khái quát về mạch điện', 'Cảm biến và mô đun cảm biến', 'Mạch điện điều khiển sử dụng mô đun cảm biến', 'Ngành nghề trong lĩnh vực kĩ thuật điện', '*Ôn tập Chương IV'],
      lt: ['Mạch điện gồm: <b>nguồn điện</b>, <b>phụ tải</b> (đèn, quạt…), <b>dây dẫn</b>, <b>thiết bị đóng cắt, bảo vệ, điều khiển</b>.', 'Cảm biến: thiết bị chuyển đại lượng vật lí (ánh sáng, nhiệt độ, độ ẩm, chuyển động) thành tín hiệu điện.', 'Mạch điều khiển dùng mô đun cảm biến: đèn tự bật khi trời tối (cảm biến ánh sáng), báo cháy (cảm biến khói, nhiệt), tưới cây (cảm biến độ ẩm đất).'],
      q: `? Bộ phận cung cấp năng lượng cho mạch điện là: | Nguồn điện | Phụ tải | Công tắc | Dây dẫn
? Bóng đèn, quạt điện trong mạch điện đóng vai trò: | Phụ tải | Nguồn điện | Thiết bị bảo vệ | Dây dẫn
? Đèn đường tự bật khi trời tối sử dụng cảm biến: | Ánh sáng | Nhiệt độ | Độ ẩm | Âm thanh
? Hệ thống tưới cây tự động thường dùng cảm biến: | Độ ẩm đất | Ánh sáng | Khói | Chuyển động
+ Cảm biến chuyển đổi đại lượng vật lí thành tín hiệu điện.
- Công tắc là phụ tải tiêu thụ điện.
= Cảm biến ánh sáng = Đèn tự bật khi trời tối
= Cảm biến nhiệt độ = Báo cháy, điều hoà
= Cảm biến độ ẩm = Tưới cây tự động
= Cảm biến chuyển động = Đèn hành lang tự bật` },
    { hk: 2, ten: 'Thiết kế kĩ thuật', bai: ['Giới thiệu về thiết kế kĩ thuật', 'Các bước cơ bản trong thiết kế kĩ thuật', 'Dự án: Thiết kế hệ thống tưới cây tự động', '*Ôn tập Chương V'],
      lt: ['Thiết kế kĩ thuật: quá trình tạo ra giải pháp, sản phẩm đáp ứng nhu cầu.', 'Các bước: <b>xác định vấn đề → tìm hiểu tổng quan, đề xuất giải pháp → xây dựng nguyên mẫu → thử nghiệm, đánh giá → hoàn thiện, lập hồ sơ</b>.'],
      q: `? Bước đầu tiên của thiết kế kĩ thuật là: | Xác định vấn đề, xây dựng tiêu chí | Chế tạo sản phẩm | Bán sản phẩm | Thử nghiệm
? Mẫu sản phẩm đầu tiên dùng để thử nghiệm gọi là: | Nguyên mẫu | Bản sao | Thành phẩm | Phế phẩm
+ Thử nghiệm giúp phát hiện và khắc phục hạn chế của sản phẩm.
- Thiết kế kĩ thuật không cần đánh giá sản phẩm.
> Xác định vấn đề > Đề xuất giải pháp > Xây dựng nguyên mẫu > Thử nghiệm, đánh giá > Hoàn thiện sản phẩm` }
  ],
  essays: {
    1: [['Kể tên các loại nét vẽ cơ bản và ứng dụng của từng loại trong bản vẽ kĩ thuật.', ['liền đậm', 'đứt mảnh', 'liền mảnh', 'gạch dài'], 'Nét liền đậm: đường bao thấy; nét liền mảnh: đường kích thước, đường gióng; nét đứt mảnh: đường bao khuất; nét gạch dài – chấm – mảnh: đường tâm, trục đối xứng.'],
      ['Nêu các biện pháp an toàn khi sử dụng điện trong gia đình.', ['cách điện', 'aptomat', 'tay ướt'], 'Dùng thiết bị có vỏ cách điện tốt; lắp aptomat, cầu chì; không chạm tay ướt vào thiết bị điện; ngắt điện khi sửa chữa; không cắm nhiều thiết bị vào một ổ; kiểm tra dây điện định kì; tránh xa đường dây cao áp.']],
    2: [['Trình bày các bộ phận của mạch điện và chức năng của chúng.', ['nguồn', 'phụ tải', 'dây dẫn', 'đóng cắt'], 'Nguồn điện: cung cấp điện năng; phụ tải: tiêu thụ điện, biến đổi thành dạng năng lượng khác; dây dẫn: truyền điện; thiết bị đóng cắt, bảo vệ, điều khiển (công tắc, cầu chì, aptomat, cảm biến): đóng ngắt, bảo vệ, điều khiển mạch.'],
      ['Mô tả ý tưởng thiết kế hệ thống tưới cây tự động.', ['cảm biến độ ẩm', 'máy bơm', 'mạch điều khiển'], 'Cảm biến độ ẩm đất đo độ ẩm; khi đất khô dưới ngưỡng, mạch điều khiển bật máy bơm tưới; đủ ẩm thì tắt; nguồn điện, ống dẫn nước, bình chứa; thử nghiệm và điều chỉnh ngưỡng.']]
  }
});

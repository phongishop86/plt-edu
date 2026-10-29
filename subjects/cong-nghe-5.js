/* Công nghệ 5 – KNTT. Bài theo chương trình; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'cong-nghe-5', lop: 5, mon: 'Công nghệ', icon: '🛠️', nhan: 'Phần',
  topics: [
    { hk: 1, ten: 'Công nghệ và đời sống', bai: ['Vai trò của công nghệ', 'Nhà sáng chế', 'Tìm hiểu thiết kế', 'Thiết kế sản phẩm', 'Sử dụng điện thoại', 'Sử dụng tủ lạnh'],
      lt: ['Công nghệ giúp con người: sản xuất, đi lại, liên lạc, học tập, chữa bệnh… nhưng sử dụng không đúng có thể gây hại (ô nhiễm, nghiện thiết bị).', 'Nhà sáng chế tiêu biểu: <b>Tô-mát Ê-đi-xơn</b> (bóng đèn sợi đốt), <b>A. G. Bell</b> (điện thoại), anh em <b>Wright</b> (máy bay).', 'Thiết kế: hình thành ý tưởng → vẽ phác thảo → chọn vật liệu → làm sản phẩm mẫu → đánh giá, hoàn thiện.', 'Điện thoại: gọi điện, nhắn tin; gọi khẩn cấp 113, 114, 115. Tủ lạnh: bảo quản thực phẩm; ngăn đá rất lạnh, ngăn mát để rau quả; không để thức ăn nóng vào tủ.'],
      q: `? Ai được biết đến với phát minh bóng đèn sợi đốt? | Ê-đi-xơn | Bell | Anh em Wright | Niu-tơn
? Người phát minh điện thoại là: | A. G. Bell | Ê-đi-xơn | Anh em Wright | Mô-da
? Anh em Wright nổi tiếng với phát minh: | Máy bay | Điện thoại | Bóng đèn | Ô tô
? Bước đầu tiên của quá trình thiết kế là: | Hình thành ý tưởng | Làm sản phẩm hoàn chỉnh | Bán sản phẩm | Sơn màu
? Rau, quả nên được bảo quản ở ngăn nào của tủ lạnh? | Ngăn mát | Ngăn đá | Nóc tủ | Bên ngoài tủ
? Khi phát hiện cháy, em gọi số: | 114 | 113 | 115 | 116
+ Không nên mở cửa tủ lạnh quá lâu để tiết kiệm điện.
+ Công nghệ có thể gây hại nếu sử dụng không đúng cách.
- Nên cho thức ăn còn nóng ngay vào tủ lạnh.
- Ê-đi-xơn là người phát minh ra máy bay.
= Ê-đi-xơn = Bóng đèn sợi đốt
= A. G. Bell = Điện thoại
= Anh em Wright = Máy bay
= Tủ lạnh = Bảo quản thực phẩm
> Hình thành ý tưởng > Vẽ phác thảo > Chọn vật liệu, dụng cụ > Làm sản phẩm mẫu > Đánh giá, hoàn thiện` },
    { hk: 2, ten: 'Thủ công kĩ thuật', bai: ['Lắp ráp mô hình xe điện chạy bằng pin', 'Mô hình máy phát điện gió', 'Mô hình điện mặt trời'],
      lt: ['Mô hình xe điện: khung xe, bánh xe, động cơ điện, pin, công tắc, dây nối.', 'Máy phát điện gió: gió làm quay cánh quạt → quay máy phát → sinh ra điện.', 'Pin mặt trời: biến năng lượng ánh sáng mặt trời thành điện năng — năng lượng sạch.'],
      q: `? Bộ phận làm bánh xe điện đồ chơi quay là: | Động cơ điện | Vỏ xe | Bánh xe | Khung xe
? Pin mặt trời biến năng lượng ánh sáng thành: | Năng lượng điện | Năng lượng gió | Âm thanh | Nhiệt lạnh
? Máy phát điện gió hoạt động nhờ: | Gió làm quay cánh quạt | Đốt than | Nước sôi | Pin tiểu
+ Điện gió, điện mặt trời là năng lượng sạch.
- Pin mặt trời hoạt động tốt nhất trong bóng tối.
> Gió thổi > Cánh quạt quay > Máy phát điện quay > Sinh ra điện` }
  ],
  essays: {
    1: [['Nêu vai trò của công nghệ trong đời sống và một tác hại nếu dùng không đúng cách.', ['công nghệ', 'tác hại'], 'Công nghệ giúp sản xuất, liên lạc, đi lại, học tập, chữa bệnh. Tác hại: ô nhiễm môi trường, tai nạn, nghiện điện thoại, máy tính nếu dùng sai cách.'],
      ['Nêu cách sử dụng tủ lạnh đúng cách, tiết kiệm điện.', ['ngăn mát', 'ngăn đá', 'đóng cửa'], 'Để thực phẩm đúng ngăn (rau quả ngăn mát, thịt cá ngăn đá); không để đồ nóng vào tủ; không mở cửa lâu; đóng kín cửa; vệ sinh tủ định kì.']],
    2: [['Mô tả cách hoạt động của máy phát điện gió.', ['gió', 'cánh quạt', 'điện'], 'Gió thổi làm cánh quạt quay; trục cánh quạt làm máy phát điện quay; máy phát tạo ra điện năng.'],
      ['Nêu các bước thiết kế một sản phẩm đơn giản em muốn làm.', ['ý tưởng', 'phác thảo', 'vật liệu'], 'Hình thành ý tưởng → vẽ phác thảo → chọn vật liệu, dụng cụ → làm sản phẩm mẫu → đánh giá, chỉnh sửa, hoàn thiện.']]
  }
});

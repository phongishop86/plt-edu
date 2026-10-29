/* Tin học 5 – KNTT. Chủ đề, bài theo chương trình; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'tin-hoc-5', lop: 5, mon: 'Tin học', icon: '💻',
  topics: [
    { hk: 1, ten: 'Máy tính và em', bai: ['Em có thể làm gì với máy tính?'],
      lt: ['Máy tính giúp: học tập, tính toán, soạn thảo, vẽ, lưu trữ, liên lạc, giải trí, điều khiển thiết bị.', 'Máy tính chỉ thực hiện được những việc con người lập trình; không tự suy nghĩ thay con người.', 'Dùng máy tính đúng cách, đúng tư thế, thời gian hợp lí.'],
      q: `? Việc nào máy tính KHÔNG tự làm được? | Tự quyết định thay con người mọi việc | Tính toán nhanh | Lưu trữ tài liệu | Phát nhạc
? Máy tính giúp em học tập bằng cách: | Tra cứu, làm bài với phần mềm học tập | Làm hộ toàn bộ bài tập | Thay thầy cô | Thay em đi học
+ Không nên dùng máy tính quá lâu liên tục.
- Máy tính có thể tự suy nghĩ như con người trong mọi việc.` },
    { hk: 1, ten: 'Mạng máy tính và Internet', bai: ['Tìm kiếm thông tin trên website'],
      lt: ['Website gồm nhiều trang web liên kết; trang chủ là trang đầu tiên.', 'Tìm thông tin trên website: dùng thanh menu, ô tìm kiếm, siêu liên kết.', 'Đánh giá thông tin: chọn nguồn tin cậy (trang chính thức của cơ quan, trường học).'],
      q: `? Trang đầu tiên khi truy cập một website gọi là: | Trang chủ | Trang cuối | Trang lỗi | Trang tạm
? Nguồn thông tin đáng tin cậy là: | Trang web chính thức của cơ quan nhà nước, nhà trường | Bình luận ẩn danh | Tin nhắn lạ | Trang quảng cáo giật tít
+ Có thể dùng ô tìm kiếm trên website để tìm thông tin nhanh.
- Mọi thông tin trên mạng đều chính xác.` },
    { hk: 1, ten: 'Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin', bai: ['Tổ chức và tìm kiếm thông tin trong máy tính', 'Cây thư mục'],
      lt: ['<b>Cây thư mục</b>: thư mục gốc → thư mục con → tệp, giúp tổ chức thông tin khoa học.', 'Tìm tệp: dùng ô tìm kiếm của File Explorer, gõ tên tệp hoặc phần tên.', 'Đặt tên tệp, thư mục rõ nghĩa giúp dễ tìm.'],
      q: `? Cây thư mục cho biết: | Cách tổ chức các thư mục và tệp | Nhiệt độ máy tính | Tốc độ mạng | Màu màn hình
? Đặt tên tệp nên: | Ngắn gọn, rõ nội dung | Toàn dấu cách | Giống hệt nhau | Rất dài vô nghĩa
+ Một thư mục có thể chứa thư mục con và tệp.
- Không thể tìm kiếm tệp trong máy tính.` },
    { hk: 1, ten: 'Đạo đức, pháp luật và văn hoá trong môi trường số', bai: ['Bản quyền nội dung thông tin'],
      lt: ['Bài viết, hình ảnh, âm nhạc, video là sản phẩm có <b>bản quyền</b> của tác giả.', 'Muốn dùng phải xin phép hoặc ghi rõ nguồn theo quy định; không sao chép rồi nhận là của mình.'],
      q: `? Khi dùng hình ảnh của người khác cho bài trình chiếu, em nên: | Ghi rõ nguồn hoặc xin phép | Nhận là của mình | Xoá tên tác giả | Bán lại
+ Tôn trọng bản quyền là tôn trọng công sức của tác giả.
- Chép bài của người khác rồi ghi tên mình là hợp pháp.` },
    { hk: 2, ten: 'Ứng dụng tin học', bai: ['Định dạng văn bản nâng cao', 'Chèn bảng và hình ảnh vào văn bản', 'Thực hành soạn thảo sản phẩm', 'Bài trình chiếu đa phương tiện'],
      lt: ['Định dạng đoạn: căn trái, căn giữa, căn phải, căn đều hai bên; khoảng cách dòng.', 'Chèn bảng (Insert → Table), chèn hình ảnh (Insert → Picture), bố trí hình với chữ.', 'Bài trình chiếu đa phương tiện: chữ, hình, âm thanh, video, hiệu ứng.'],
      q: `? Để chèn bảng vào văn bản, em chọn: | Insert → Table | File → Save | Home → Bold | View → Zoom
? Kiểu căn lề làm đoạn văn thẳng đều cả hai bên là: | Căn đều hai bên | Căn trái | Căn giữa | Căn phải
? Tiêu đề bài văn thường được: | Căn giữa | Căn phải | Viết ở cuối | Không cần
+ Có thể chèn video vào bài trình chiếu.
- Văn bản không thể chèn hình ảnh.
= Căn giữa = Tiêu đề
= Insert → Picture = Chèn hình ảnh
= Insert → Table = Chèn bảng
= Ctrl + S = Lưu tệp` },
    { hk: 2, ten: 'Giải quyết vấn đề với sự trợ giúp của máy tính', bai: ['Cấu trúc tuần tự', 'Cấu trúc lặp', 'Cấu trúc rẽ nhánh', 'Sử dụng biến trong chương trình', 'Chương trình của em'],
      lt: ['<b>Tuần tự</b>: các lệnh thực hiện lần lượt từ trên xuống.', '<b>Lặp</b>: lặp lại một nhóm lệnh nhiều lần (khối "lặp lại … lần", "liên tục").', '<b>Rẽ nhánh</b>: "nếu … thì …", "nếu … thì … nếu không thì …".', '<b>Biến</b>: nơi lưu giá trị có thể thay đổi (ví dụ điểm số trong trò chơi).'],
      q: `? Cấu trúc "nếu … thì …" là cấu trúc: | Rẽ nhánh | Tuần tự | Lặp | Biến
? Muốn nhân vật đi 10 bước liên tiếp 5 lần, dùng cấu trúc: | Lặp | Rẽ nhánh | Tuần tự đơn lẻ | Biến
? Đại lượng lưu điểm số trong trò chơi Scratch gọi là: | Biến | Phông nền | Nhân vật | Âm thanh
? Các lệnh thực hiện lần lượt từ trên xuống là cấu trúc: | Tuần tự | Lặp | Rẽ nhánh | Ngẫu nhiên
+ Trong Scratch, khối "lặp lại 10" là cấu trúc lặp.
- Biến là giá trị không bao giờ thay đổi.
= Tuần tự = Thực hiện lần lượt từng lệnh
= Lặp = Lặp lại nhóm lệnh nhiều lần
= Rẽ nhánh = Chọn việc làm theo điều kiện
= Biến = Lưu giá trị có thể thay đổi` }
  ],
  essays: {
    1: [['Kể những việc em có thể làm với máy tính để phục vụ học tập.', ['tra cứu', 'soạn thảo', 'trình chiếu'], 'Tra cứu thông tin, soạn thảo bài viết, làm bài trình chiếu, luyện gõ phím, học với phần mềm học tập, lưu trữ bài làm.'],
      ['Vì sao cần tôn trọng bản quyền nội dung thông tin?', ['bản quyền', 'tác giả', 'xin phép'], 'Vì đó là công sức, sáng tạo của tác giả; được pháp luật bảo vệ; khi dùng cần xin phép hoặc ghi nguồn.']],
    2: [['Phân biệt ba cấu trúc: tuần tự, lặp, rẽ nhánh. Mỗi cấu trúc cho một ví dụ trong cuộc sống.', ['tuần tự', 'lặp', 'rẽ nhánh'], 'Tuần tự: các bước đánh răng. Lặp: chạy 3 vòng sân. Rẽ nhánh: nếu trời mưa thì mang áo mưa, nếu không thì đội mũ.'],
      ['Mô tả một trò chơi Scratch em muốn làm có sử dụng biến và cấu trúc rẽ nhánh.', ['biến', 'nếu', 'điểm'], 'Ví dụ: mèo bắt táo; biến "điểm" tăng 1 khi chạm táo; nếu điểm bằng 10 thì nói "Chiến thắng!".']]
  }
});

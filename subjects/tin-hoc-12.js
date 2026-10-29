/* Tin học 12 (Tin học ứng dụng) – KNTT. Bài theo mục lục SGK; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'tin-hoc-12', lop: 12, mon: 'Tin học', icon: '💻', nhan: 'Chủ đề', so: false,
  topics: [
    { hk: 1, nhan: 'Chủ đề 1', ten: 'Máy tính và xã hội tri thức: Trí tuệ nhân tạo', bai: ['Bài 1. Làm quen với trí tuệ nhân tạo', 'Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống'],
      lt: ['<b>Trí tuệ nhân tạo (AI)</b>: khả năng của máy tính thực hiện các công việc cần trí tuệ con người: học, suy luận, nhận dạng, hiểu ngôn ngữ.', 'AI hẹp (giải quyết nhiệm vụ cụ thể) và AI tổng quát. Học máy (machine learning) là lĩnh vực cốt lõi của AI.', 'Ứng dụng: trợ lí ảo, nhận dạng khuôn mặt, dịch máy, xe tự lái, chẩn đoán y tế, AI tạo sinh.', 'Cảnh báo: thông tin sai lệch, deepfake, quyền riêng tư, việc làm, đạo đức AI.'],
      q: `? AI là viết tắt của: | Trí tuệ nhân tạo | Internet vạn vật | Thực tế ảo | Dữ liệu lớn
? Lĩnh vực giúp máy tính tự học từ dữ liệu gọi là: | Học máy | Đồ hoạ | Soạn thảo | Mạng LAN
? Ứng dụng nào là ví dụ của AI? | Nhận dạng khuôn mặt để mở khoá điện thoại | Máy tính bỏ túi cộng hai số | Bóng đèn | Thước kẻ
? Video giả mạo khuôn mặt, giọng nói người thật bằng AI gọi là: | Deepfake | Firewall | Backup | Router
+ Cần kiểm chứng thông tin do AI tạo ra.
- AI hiện nay luôn đưa ra câu trả lời đúng tuyệt đối.` },
    { hk: 1, nhan: 'Chủ đề 2, 3', ten: 'Mạng máy tính và Internet. Đạo đức, pháp luật và văn hoá trong môi trường số', bai: ['Bài 3. Một số thiết bị mạng thông dụng', 'Bài 4. Giao thức mạng', 'Bài 5. Thực hành chia sẻ tài nguyên trên mạng', 'Bài 6. Giao tiếp và ứng xử trong không gian mạng'],
      lt: ['Thiết bị mạng: <b>Switch</b> (bộ chuyển mạch, kết nối máy trong LAN), <b>Router</b> (bộ định tuyến, kết nối các mạng), <b>Modem</b>, <b>Access Point</b> (điểm truy cập không dây).', '<b>Giao thức</b>: tập quy tắc truyền thông. TCP/IP, HTTP/HTTPS (web), SMTP (gửi thư), DNS (phân giải tên miền).', '<b>Địa chỉ IP</b>: định danh thiết bị trên mạng (IPv4: 4 số 0–255).'],
      q: `? Thiết bị kết nối các mạng khác nhau và định tuyến gói tin là: | Router | Switch | Loa | Máy in
? Giao thức dùng để truy cập trang web bảo mật là: | HTTPS | SMTP | FTP | POP3
? Dịch vụ chuyển tên miền thành địa chỉ IP là: | DNS | HTML | CSS | SQL
? Địa chỉ IPv4 hợp lệ là: | 192.168.1.10 | 256.1.1.1 | 192.168.1 | abc.def
+ Switch dùng để kết nối các máy tính trong mạng LAN.
- HTTP mã hoá dữ liệu an toàn hơn HTTPS.
= Router = Định tuyến giữa các mạng
= Switch = Kết nối thiết bị trong LAN
= Access Point = Phát sóng Wi-Fi
= DNS = Phân giải tên miền` },
    { hk: 1, nhan: 'Chủ đề 4', ten: 'Giải quyết vấn đề với sự trợ giúp của máy tính: HTML', bai: ['Bài 7. HTML và cấu trúc trang web', 'Bài 8. Định dạng văn bản', 'Bài 9. Tạo danh sách, bảng', 'Bài 10. Tạo liên kết', 'Bài 11. Chèn tệp tin đa phương tiện và khung nội tuyến vào trang web', 'Bài 12. Tạo biểu mẫu'],
      lt: ['HTML: ngôn ngữ đánh dấu siêu văn bản. Cấu trúc: <code>&lt;html&gt;&lt;head&gt;…&lt;/head&gt;&lt;body&gt;…&lt;/body&gt;&lt;/html&gt;</code>.', 'Thẻ: <code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code> tiêu đề, <code>&lt;p&gt;</code> đoạn, <code>&lt;b&gt;</code>/<code>&lt;strong&gt;</code> đậm, <code>&lt;i&gt;</code> nghiêng.', 'Danh sách: <code>&lt;ul&gt;</code> không thứ tự, <code>&lt;ol&gt;</code> có thứ tự, <code>&lt;li&gt;</code> mục. Bảng: <code>&lt;table&gt;&lt;tr&gt;&lt;td&gt;</code>.', 'Liên kết <code>&lt;a href="…"&gt;</code>; ảnh <code>&lt;img src alt&gt;</code>; video <code>&lt;video&gt;</code>; <code>&lt;iframe&gt;</code>; biểu mẫu <code>&lt;form&gt;&lt;input&gt;</code>.'],
      q: `? Thẻ HTML tạo liên kết là: | <a> | <p> | <img> | <li>
? Thẻ HTML tạo tiêu đề lớn nhất là: | &lt;h1&gt; | &lt;h6&gt; | &lt;head&gt; | &lt;title&gt;
? Thẻ tạo danh sách có thứ tự là: | &lt;ol&gt; | &lt;ul&gt; | &lt;dl&gt; | &lt;tr&gt;
? Thuộc tính chỉ đường dẫn ảnh trong thẻ &lt;img&gt; là: | src | href | alt | link
? Thẻ tạo một hàng trong bảng là: | &lt;tr&gt; | &lt;td&gt; | &lt;th&gt; | &lt;table&gt;
+ Nội dung hiển thị của trang web nằm trong thẻ &lt;body&gt;.
- Thẻ &lt;ul&gt; tạo danh sách có đánh số thứ tự.
= &lt;p&gt; = Đoạn văn bản
= &lt;img&gt; = Chèn ảnh
= &lt;a&gt; = Tạo liên kết
= &lt;form&gt; = Tạo biểu mẫu
_ Liên kết: &lt;a [href]="https://example.com"&gt;Trang chủ&lt;/a&gt;` },
    { hk: 2, nhan: 'Chủ đề 4 (tiếp)', ten: 'CSS và thiết kế trang web', bai: ['Bài 13. Khái niệm, vai trò của CSS', 'Bài 14. Định dạng văn bản bằng CSS', 'Bài 15. Tạo màu cho chữ và nền', 'Bài 16. Định dạng khung', 'Bài 17. Các mức ưu tiên của bộ chọn', 'Bài 18. Thực hành tổng hợp thiết kế trang web'],
      lt: ['<b>CSS</b>: ngôn ngữ định kiểu, quy định cách hiển thị (màu, phông, bố cục) của trang HTML. Cú pháp: <code>bo_chon { thuoc_tinh: gia_tri; }</code>.', 'Cách nhúng: inline (thuộc tính style), internal (thẻ &lt;style&gt;), external (tệp .css qua &lt;link&gt;).', 'Bộ chọn: thẻ (p), lớp (.ten), định danh (#ten). Mức ưu tiên: inline > id > class > thẻ.', 'Mô hình hộp: content, padding, border, margin.'],
      q: `? CSS dùng để: | Định dạng cách hiển thị trang web | Lưu trữ cơ sở dữ liệu | Quản lí hệ điều hành | Tạo virus
? Bộ chọn lớp trong CSS bắt đầu bằng kí hiệu: | Dấu chấm (.) | Dấu thăng (#) | Dấu @ | Dấu $
? Bộ chọn định danh (id) bắt đầu bằng: | # | . | * | &
? Thuộc tính CSS đổi màu chữ là: | color | background | font-size | margin
? Khoảng cách bên ngoài viền của phần tử là: | margin | padding | border | content
+ Bộ chọn id có mức ưu tiên cao hơn bộ chọn lớp.
- CSS chỉ có thể viết bên trong thẻ &lt;body&gt;.
= color = Màu chữ
= background-color = Màu nền
= font-size = Cỡ chữ
= padding = Khoảng đệm bên trong viền` },
    { hk: 2, nhan: 'Chủ đề 5, 6', ten: 'Hướng nghiệp với tin học. Thực hành xây dựng trang web', bai: ['Bài 19. Dịch vụ sửa chữa và bảo trì máy tính', 'Bài 20. Nhóm nghề quản trị trong ngành Công nghệ thông tin', 'Bài 21–22. Giới thiệu phần mềm tạo trang web; chuẩn bị nội dung', 'Bài 23. Chuẩn bị xây dựng trang web', 'Bài 24–27. Xây dựng phần đầu, thân, chân trang; biểu mẫu trên trang web', 'Bài 28. Thực hành tổng hợp: hoàn thiện trang web'], on: 'Ôn tập cuối năm',
      lt: ['Nghề sửa chữa, bảo trì máy tính: chẩn đoán lỗi phần cứng, phần mềm; cài đặt, nâng cấp, vệ sinh máy.', 'Nhóm nghề quản trị CNTT: quản trị mạng, quản trị hệ thống, quản trị CSDL, an ninh mạng.', 'Quy trình xây dựng website: xác định mục tiêu → nội dung → thiết kế bố cục (header, nav, main, footer) → xây dựng → kiểm thử → xuất bản.'],
      q: `? Người chịu trách nhiệm vận hành, bảo mật hệ thống mạng của cơ quan là: | Quản trị mạng | Thiết kế đồ hoạ | Biên tập viên | Kế toán
? Phần đầu trang web thường chứa: | Logo, tên, menu điều hướng | Thông tin bản quyền cuối trang | Chỉ có quảng cáo | Không có gì
? Bước đầu tiên khi xây dựng trang web là: | Xác định mục tiêu, đối tượng người xem | Xuất bản ngay | Mua tên miền đắt nhất | Viết CSS
+ Phần chân trang (footer) thường chứa thông tin liên hệ, bản quyền.
- Kiểm thử trang web là bước không cần thiết.` }
  ],
  essays: {
    1: [['Nêu ba ứng dụng của trí tuệ nhân tạo trong đời sống và một rủi ro cần lưu ý.', ['ứng dụng', 'rủi ro'], 'Ứng dụng: trợ lí ảo, dịch máy, nhận dạng khuôn mặt, chẩn đoán hình ảnh y tế, gợi ý sản phẩm, xe tự lái. Rủi ro: tin giả, deepfake, lộ dữ liệu cá nhân, phụ thuộc quá mức, thiên kiến thuật toán → cần kiểm chứng, dùng có trách nhiệm.', 3],
      ['Phân biệt chức năng của Switch và Router.', ['Switch', 'Router', 'mạng'], 'Switch: kết nối các thiết bị trong cùng một mạng LAN, chuyển dữ liệu đến đúng thiết bị đích (theo địa chỉ MAC). Router: kết nối các mạng khác nhau (LAN với Internet), định tuyến gói tin theo địa chỉ IP, thường tích hợp phát Wi-Fi, cấp IP (DHCP).']],
    2: [['Viết mã HTML tạo một danh sách không thứ tự gồm 3 môn học và một liên kết tới https://example.com.', ['<ul>', '<li>', '<a', 'href'], '&lt;ul&gt;\n  &lt;li&gt;Toán&lt;/li&gt;\n  &lt;li&gt;Ngữ văn&lt;/li&gt;\n  &lt;li&gt;Tin học&lt;/li&gt;\n&lt;/ul&gt;\n&lt;a href="https://example.com"&gt;Xem thêm&lt;/a&gt;'],
      ['Viết quy tắc CSS: các đoạn văn (p) có chữ màu xanh dương, cỡ chữ 16px; phần tử có id "tieude" căn giữa.', ['color', 'font-size', 'text-align', '#tieude'], 'p {\n  color: blue;\n  font-size: 16px;\n}\n#tieude {\n  text-align: center;\n}']]
  }
});

/* Tin học 11 (Tin học ứng dụng) – KNTT. Bài theo mục lục SGK; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'tin-hoc-11', lop: 11, mon: 'Tin học', icon: '💻', nhan: 'Chủ đề', so: false,
  topics: [
    { hk: 1, nhan: 'Chủ đề 1', ten: 'Máy tính và xã hội tri thức', bai: ['Bài 1. Hệ điều hành', 'Bài 2. Thực hành sử dụng hệ điều hành', 'Bài 3. Phần mềm nguồn mở và phần mềm chạy trên Internet', 'Bài 4. Bên trong máy tính', 'Bài 5. Kết nối máy tính với các thiết bị số'],
      lt: ['<b>Hệ điều hành</b>: phần mềm quản lí tài nguyên máy tính, làm cầu nối người dùng – phần cứng (Windows, Linux, macOS, Android, iOS).', '<b>Phần mềm nguồn mở</b>: được công bố mã nguồn, cho phép sửa đổi, phân phối (Linux, LibreOffice, Firefox).', 'Bên trong máy tính: CPU (bộ xử lí trung tâm), RAM (bộ nhớ trong, mất dữ liệu khi tắt máy), ROM, bo mạch chủ, ổ cứng HDD/SSD.', 'Cổng kết nối: USB, HDMI, mạng LAN, Bluetooth, Wi-Fi.'],
      q: `? Bộ nhớ bị mất dữ liệu khi tắt máy là: | RAM | ROM | Ổ cứng SSD | USB
? Bộ phận thực hiện tính toán, điều khiển hoạt động máy tính là: | CPU | Màn hình | Bàn phím | Loa
? Hệ điều hành nguồn mở phổ biến là: | Linux | Windows | macOS | iOS
? Cổng thường dùng để xuất hình ảnh ra màn hình, máy chiếu là: | HDMI | RJ45 | Jack 3.5 mm | PS/2
+ Hệ điều hành quản lí tài nguyên của máy tính.
- ROM bị mất toàn bộ dữ liệu khi tắt máy.
= CPU = Xử lí, tính toán
= RAM = Bộ nhớ tạm thời khi máy chạy
= SSD = Lưu trữ dữ liệu lâu dài
= HDMI = Truyền hình ảnh, âm thanh` },
    { hk: 1, nhan: 'Chủ đề 2, 3', ten: 'Lưu trữ, tìm kiếm và trao đổi thông tin. Giao tiếp an toàn', bai: ['Bài 6. Lưu trữ và chia sẻ tệp tin trên Internet', 'Bài 7. Thực hành tìm kiếm thông tin trên Internet', 'Bài 8. Thực hành nâng cao sử dụng thư điện tử và mạng xã hội', 'Bài 9. Giao tiếp an toàn trên Internet'],
      lt: ['Lưu trữ đám mây: Google Drive, OneDrive, Dropbox — truy cập mọi nơi, chia sẻ quyền xem/sửa.', 'Tìm kiếm nâng cao: dấu ngoặc kép "…" tìm chính xác cụm từ, dấu trừ (−) loại từ, <code>site:</code> giới hạn trang web, <code>filetype:</code> loại tệp.', 'Nhận diện lừa đảo, bắt nạt trên mạng; bảo vệ thông tin cá nhân.'],
      q: `? Để tìm chính xác cụm từ, ta đặt cụm từ trong: | Dấu ngoặc kép | Dấu ngoặc đơn | Dấu chấm | Dấu phẩy
? Toán tử giúp tìm kiếm chỉ trong một trang web cụ thể là: | site: | filetype: | and: | link:
? Dịch vụ lưu trữ đám mây là: | Google Drive | Microsoft Paint | Notepad | Calculator
+ Có thể phân quyền "chỉ xem" khi chia sẻ tệp trên đám mây.
- Nên chia sẻ mật khẩu tài khoản cho bạn bè trên mạng xã hội.` },
    { hk: 1, nhan: 'Chủ đề 4', ten: 'Giới thiệu các hệ cơ sở dữ liệu', bai: ['Bài 10. Lưu trữ dữ liệu và khai thác thông tin phục vụ quản lí', 'Bài 11. Cơ sở dữ liệu', 'Bài 12. Hệ quản trị cơ sở dữ liệu và hệ cơ sở dữ liệu', 'Bài 13. Cơ sở dữ liệu quan hệ', 'Bài 14. SQL – Ngôn ngữ truy vấn có cấu trúc', 'Bài 15. Bảo mật và an toàn hệ cơ sở dữ liệu'],
      lt: ['<b>Cơ sở dữ liệu (CSDL)</b>: tập hợp dữ liệu có liên quan, được lưu trữ có tổ chức. <b>Hệ quản trị CSDL</b>: phần mềm tạo lập, cập nhật, khai thác CSDL (MySQL, SQL Server, Access).', '<b>CSDL quan hệ</b>: dữ liệu lưu trong các bảng (quan hệ); bản ghi (hàng), trường (cột).', '<b>Khoá chính</b>: trường xác định duy nhất mỗi bản ghi. <b>Khoá ngoài</b>: trường liên kết tới khoá chính của bảng khác.', 'SQL: <code>CREATE TABLE</code>, <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>, <code>SELECT … FROM … WHERE</code>.'],
      q: `? Trường xác định duy nhất mỗi bản ghi trong bảng gọi là: | Khoá chính | Khoá ngoài | Bản ghi | Truy vấn
? Câu lệnh SQL dùng để truy xuất dữ liệu là: | SELECT | INSERT | DELETE | CREATE
? Câu lệnh SQL dùng để thêm bản ghi mới là: | INSERT | SELECT | UPDATE | DROP
? Trong CSDL quan hệ, mỗi hàng của bảng gọi là: | Bản ghi | Trường | Khoá | Truy vấn
? MySQL là: | Hệ quản trị cơ sở dữ liệu | Hệ điều hành | Trình duyệt web | Phần mềm đồ hoạ
+ Khoá ngoài dùng để liên kết giữa các bảng.
- Hai bản ghi trong một bảng có thể trùng giá trị khoá chính.
= SELECT = Truy xuất dữ liệu
= INSERT = Thêm bản ghi
= UPDATE = Sửa dữ liệu
= DELETE = Xoá bản ghi
_ Câu lệnh SQL: [SELECT] * FROM HocSinh;` },
    { hk: 2, nhan: 'Chủ đề 5, 6', ten: 'Hướng nghiệp quản trị CSDL. Thực hành tạo và khai thác CSDL', bai: ['Bài 16. Công việc quản trị cơ sở dữ liệu', 'Bài 17. Quản trị cơ sở dữ liệu trên máy tính', 'Bài 18. Thực hành xác định cấu trúc bảng và các trường khoá', 'Bài 19. Thực hành tạo lập cơ sở dữ liệu và các bảng', 'Bài 20. Thực hành tạo lập các bảng có khoá ngoài', 'Bài 21–23. Thực hành cập nhật, truy xuất dữ liệu, liên kết các bảng', 'Bài 24. Thực hành sao lưu dữ liệu'],
      lt: ['Người quản trị CSDL: thiết kế, cài đặt, bảo mật, sao lưu – phục hồi, tối ưu hiệu năng CSDL.', 'Truy xuất qua liên kết các bảng: <code>SELECT … FROM A INNER JOIN B ON A.khoa = B.khoa</code>.', 'Sao lưu định kì để phòng mất dữ liệu.'],
      q: `? Phép liên kết hai bảng trong SQL dùng từ khoá: | JOIN | LINK | MERGE | ADD
? Để chỉ lấy các bản ghi thoả điều kiện, ta dùng mệnh đề: | WHERE | FROM | ORDER | TABLE
? Mệnh đề sắp xếp kết quả truy vấn là: | ORDER BY | GROUP | SORT ON | ARRANGE
+ Sao lưu dữ liệu định kì giúp phục hồi khi có sự cố.
- Người quản trị CSDL không cần quan tâm đến bảo mật.` },
    { hk: 2, nhan: 'Chủ đề 7', ten: 'Phần mềm chỉnh sửa ảnh và làm video', bai: ['Bài 25. Phần mềm chỉnh sửa ảnh', 'Bài 26. Công cụ tinh chỉnh màu sắc và công cụ chọn', 'Bài 27. Công cụ vẽ và một số ứng dụng', 'Bài 28. Tạo ảnh động', 'Bài 29. Khám phá phần mềm làm phim', 'Bài 30. Biên tập phim', 'Bài 31. Thực hành tạo phim hoạt hình'], on: 'Ôn tập cuối năm',
      lt: ['Phần mềm chỉnh sửa ảnh: GIMP (miễn phí), Photoshop. Lớp (layer), vùng chọn, cắt, chỉnh độ sáng, tương phản, màu sắc.', 'Ảnh động GIF: nhiều khung hình hiển thị liên tiếp.', 'Làm phim: nhập tư liệu, sắp xếp trên dòng thời gian (timeline), cắt ghép, hiệu ứng chuyển cảnh, chèn chữ, nhạc, xuất video (MP4).'],
      q: `? GIMP là phần mềm: | Chỉnh sửa ảnh | Soạn thảo văn bản | Quản trị CSDL | Trình duyệt
? Định dạng ảnh động phổ biến là: | GIF | DOCX | MP3 | XLSX
? Khu vực sắp xếp các đoạn phim theo thứ tự thời gian gọi là: | Timeline (dòng thời gian) | Toolbar | Menu | Layer
+ Lớp (layer) giúp chỉnh sửa từng phần của ảnh độc lập.
- Định dạng MP4 là định dạng ảnh tĩnh.` }
  ],
  essays: {
    1: [['Phân biệt RAM và ROM.', ['RAM', 'ROM', 'tắt máy'], 'RAM: bộ nhớ truy cập ngẫu nhiên, đọc/ghi được, lưu dữ liệu, chương trình đang chạy, mất dữ liệu khi tắt máy. ROM: bộ nhớ chỉ đọc, chứa chương trình khởi động (BIOS/UEFI), không mất dữ liệu khi tắt máy.'],
      ['Thế nào là khoá chính, khoá ngoài? Cho ví dụ với bảng HocSinh và bảng Lop.', ['khoá chính', 'khoá ngoài', 'liên kết'], 'Khoá chính: trường xác định duy nhất mỗi bản ghi, ví dụ MaHS trong HocSinh, MaLop trong Lop. Khoá ngoài: trường của bảng này tham chiếu khoá chính bảng khác, ví dụ MaLop trong bảng HocSinh liên kết tới Lop.MaLop.']],
    2: [['Viết câu lệnh SQL lấy họ tên các học sinh có điểm Tin lớn hơn 8 từ bảng HocSinh(MaHS, HoTen, DiemTin), sắp xếp giảm dần theo điểm.', ['SELECT', 'WHERE', 'ORDER BY'], 'SELECT HoTen, DiemTin\nFROM HocSinh\nWHERE DiemTin > 8\nORDER BY DiemTin DESC;'],
      ['Nêu các bước cơ bản để làm một video ngắn giới thiệu trường em.', ['kịch bản', 'quay', 'biên tập', 'xuất'], 'Lên ý tưởng, kịch bản; chuẩn bị tư liệu (quay, chụp, ghi âm); nhập vào phần mềm làm phim; sắp xếp trên timeline, cắt ghép, hiệu ứng, chữ, nhạc nền (có bản quyền); xem lại, chỉnh sửa; xuất video MP4 và chia sẻ.', 3]]
  }
});

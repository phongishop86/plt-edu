/* Tin học 6 – KNTT. Chủ đề, bài theo mục lục SGK; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'tin-hoc-6', lop: 6, mon: 'Tin học', icon: '💻', nhan: 'Chủ đề',
  topics: [
    { hk: 1, ten: 'Máy tính và cộng đồng', bai: ['Thông tin và dữ liệu', 'Xử lí thông tin', 'Thông tin trong máy tính'],
      lt: ['<b>Dữ liệu</b> là các con số, văn bản, hình ảnh, âm thanh… <b>Thông tin</b> là ý nghĩa thu được từ dữ liệu, giúp con người ra quyết định.', 'Xử lí thông tin gồm: <b>thu nhận → xử lí → lưu trữ → truyền</b>. Máy tính có thiết bị vào (bàn phím, chuột), bộ xử lí, bộ nhớ, thiết bị ra (màn hình, máy in).', 'Máy tính biểu diễn thông tin bằng dãy <b>bit</b> (0 và 1). 1 byte = 8 bit; 1 KB = 1024 B; 1 MB = 1024 KB; 1 GB = 1024 MB; 1 TB = 1024 GB.'],
      q: `? Đơn vị nhỏ nhất dùng đo dung lượng thông tin là: | Bit | Byte | KB | MB
? 1 byte bằng bao nhiêu bit? | 8 | 10 | 16 | 1024
? 1 KB bằng: | 1024 byte | 1000 bit | 8 byte | 1024 MB
? 1 GB bằng: | 1024 MB | 1000 KB | 1024 KB | 8 MB
? Thiết bị nào là thiết bị vào? | Bàn phím | Màn hình | Máy in | Loa
? Thiết bị nào là thiết bị ra? | Máy in | Chuột | Bàn phím | Máy quét
? Máy tính biểu diễn thông tin bằng các kí hiệu: | 0 và 1 | A và B | 1 đến 9 | Chữ cái
+ Thông tin giúp con người ra quyết định.
+ Bộ nhớ dùng để lưu trữ dữ liệu.
- 1 MB lớn hơn 1 GB.
- Loa là thiết bị vào.
> Thu nhận > Xử lí > Lưu trữ > Truyền
> Bit > Byte > KB > MB > GB > TB
_ 1 byte = [8] bit.
# Thiết bị vào: Bàn phím, Chuột, Máy quét, Micro
# Thiết bị ra: Màn hình, Máy in, Loa, Tai nghe` },
    { hk: 1, ten: 'Mạng máy tính và Internet', bai: ['Mạng máy tính', 'Internet'],
      lt: ['<b>Mạng máy tính</b>: nhóm máy tính và thiết bị kết nối để trao đổi dữ liệu, dùng chung tài nguyên.', 'Thành phần: thiết bị đầu cuối, thiết bị kết nối (dây cáp, bộ chuyển mạch, bộ định tuyến, điểm truy cập không dây), phần mềm mạng.', '<b>Internet</b>: mạng kết nối hàng triệu máy tính và mạng máy tính trên toàn thế giới; đặc điểm: toàn cầu, tương tác, dễ tiếp cận, không chủ sở hữu.'],
      q: `? Thiết bị giúp kết nối không dây vào mạng là: | Điểm truy cập không dây (Wi-Fi) | Máy in | Bàn phím | Loa
? Internet có đặc điểm: | Tính toàn cầu, tương tác, không thuộc sở hữu của ai | Chỉ dùng trong một trường học | Không thể tương tác | Thuộc sở hữu một người
? Lợi ích của mạng máy tính là: | Chia sẻ dữ liệu và dùng chung thiết bị | Làm máy chạy chậm | Không trao đổi được thông tin | Tăng giá máy tính
+ Internet giúp tìm kiếm thông tin, liên lạc, học tập trực tuyến.
- Mạng máy tính chỉ có thể kết nối bằng dây cáp.
= Bộ định tuyến = Kết nối các mạng với nhau
= Dây cáp mạng = Truyền dữ liệu có dây
= Điểm truy cập không dây = Kết nối Wi-Fi` },
    { hk: 1, ten: 'Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin', bai: ['Mạng thông tin toàn cầu', 'Tìm kiếm thông tin trên Internet', 'Thư điện tử'],
      lt: ['<b>WWW</b> (World Wide Web): hệ thống các website trên Internet. Website gồm các trang web liên kết, có địa chỉ (URL). Xem web bằng <b>trình duyệt</b> (Chrome, Edge, Cốc Cốc…).', '<b>Máy tìm kiếm</b> (Google, Bing…): tìm theo <b>từ khoá</b>.', '<b>Thư điện tử</b> (email): địa chỉ dạng <i>tên@tên_miền</i>; gửi, nhận, trả lời, chuyển tiếp; không mở thư, tệp đính kèm lạ.'],
      q: `? Phần mềm dùng để truy cập trang web là: | Trình duyệt web | Phần mềm soạn thảo | Phần mềm vẽ | Hệ điều hành
? Địa chỉ thư điện tử hợp lệ là: | an.nguyen@gmail.com | an.nguyen.gmail.com | @an nguyen | an nguyen@
? Để tìm thông tin trên Internet, ta dùng: | Máy tìm kiếm với từ khoá | Máy in | Thư mục | Bàn phím số
? Kí tự bắt buộc có trong địa chỉ email là: | @ | # | & | %
+ Không nên mở tệp đính kèm từ người gửi lạ.
+ Website gồm nhiều trang web liên kết với nhau.
- Thư điện tử chỉ gửi được cho người dùng cùng nhà mạng.
- Từ khoá càng dài, càng mơ hồ thì tìm kiếm càng chính xác.` },
    { hk: 2, ten: 'Đạo đức, pháp luật và văn hoá trong môi trường số', bai: ['An toàn thông tin trên Internet'],
      lt: ['Tác hại, nguy cơ: lừa đảo, virus, lộ thông tin cá nhân, bắt nạt trên mạng, nghiện Internet.', 'Quy tắc: bảo vệ mật khẩu, thông tin cá nhân; không mở thư/đường link lạ; không kết bạn, gặp người lạ; báo người lớn khi bị đe doạ; dùng mạng có giới hạn thời gian.'],
      q: `? Mật khẩu mạnh là: | Có chữ hoa, chữ thường, số và kí tự đặc biệt | 123456 | Ngày sinh của em | Tên của em
? Nhận tin nhắn trúng thưởng yêu cầu gửi mã OTP, em nên: | Không cung cấp và báo người lớn | Gửi ngay mã OTP | Chuyển tiếp cho bạn | Trả lời xin thêm quà
+ Không chia sẻ mật khẩu cho người khác.
- Có thể đăng địa chỉ nhà, số điện thoại công khai lên mạng.` },
    { hk: 2, ten: 'Ứng dụng tin học', bai: ['Sơ đồ tư duy', 'Định dạng văn bản', 'Trình bày thông tin ở dạng bảng', 'Thực hành: Tìm kiếm và thay thế', 'Thực hành tổng hợp: Hoàn thiện sổ lưu niệm'],
      lt: ['<b>Sơ đồ tư duy</b>: chủ đề chính ở giữa, các nhánh chủ đề con; dùng từ khoá, màu sắc, hình ảnh.', 'Định dạng: kí tự (phông, cỡ, kiểu, màu), đoạn văn (căn lề, khoảng cách, thụt lề), trang (hướng giấy, lề).', 'Bảng: chèn bảng (Insert → Table), thêm/xoá hàng cột, gộp ô.', 'Tìm kiếm (Ctrl + F) và thay thế (Ctrl + H).'],
      q: `? Tổ hợp phím mở chức năng tìm kiếm trong phần mềm soạn thảo là: | Ctrl + F | Ctrl + H | Ctrl + S | Ctrl + P
? Tổ hợp phím mở chức năng thay thế là: | Ctrl + H | Ctrl + F | Ctrl + C | Ctrl + Z
? Trong sơ đồ tư duy, chủ đề chính thường đặt ở: | Trung tâm | Góc dưới | Cuối trang | Ngoài lề
? Để chèn bảng trong Word, em chọn: | Insert → Table | Home → Font | File → Print | View → Ruler
+ Sơ đồ tư duy giúp ghi nhớ và trình bày ý tưởng rõ ràng.
- Định dạng văn bản là xoá nội dung văn bản.
= Ctrl + F = Tìm kiếm
= Ctrl + H = Thay thế
= Ctrl + S = Lưu tệp
= Ctrl + Z = Hoàn tác` },
    { hk: 2, ten: 'Giải quyết vấn đề với sự trợ giúp của máy tính', bai: ['Thuật toán', 'Các cấu trúc điều khiển', 'Chương trình máy tính'],
      lt: ['<b>Thuật toán</b>: dãy các chỉ dẫn rõ ràng, có trình tự để giải quyết một vấn đề (đầu vào → đầu ra). Mô tả bằng ngôn ngữ tự nhiên hoặc sơ đồ khối.', 'Ba cấu trúc điều khiển: <b>tuần tự</b>, <b>rẽ nhánh</b> (nếu… thì… / nếu… thì… nếu không thì…), <b>lặp</b> (lặp với số lần biết trước / lặp có điều kiện).', '<b>Chương trình</b>: thuật toán được viết bằng ngôn ngữ lập trình để máy tính thực hiện.'],
      q: `? Thuật toán là: | Dãy các chỉ dẫn rõ ràng, có trình tự để giải quyết vấn đề | Một thiết bị phần cứng | Một trang web | Tên phần mềm
? Cấu trúc "Nếu trời mưa thì mang ô" là cấu trúc: | Rẽ nhánh | Tuần tự | Lặp | Không phải cấu trúc
? Cấu trúc "Chạy 5 vòng sân" là cấu trúc: | Lặp | Rẽ nhánh | Tuần tự | Ngẫu nhiên
? Chương trình máy tính là: | Thuật toán viết bằng ngôn ngữ lập trình | Bản vẽ sơ đồ khối trên giấy | Dữ liệu đầu vào | Kết quả đầu ra
+ Thuật toán có đầu vào và đầu ra.
- Các bước trong thuật toán có thể thực hiện theo thứ tự bất kì.
= Tuần tự = Thực hiện lần lượt các bước
= Rẽ nhánh = Chọn hướng theo điều kiện
= Lặp = Thực hiện lại nhiều lần
> Xác định đầu vào, đầu ra > Mô tả thuật toán > Viết chương trình > Chạy và kiểm tra kết quả` }
  ],
  essays: {
    1: [['Phân biệt thông tin và dữ liệu. Lấy ví dụ.', ['dữ liệu', 'thông tin', 'ví dụ'], 'Dữ liệu là số, chữ, hình ảnh, âm thanh… chưa xử lí; thông tin là ý nghĩa rút ra từ dữ liệu. Ví dụ: số 38,5 °C (dữ liệu) → "bạn bị sốt" (thông tin) → quyết định đi khám.'],
      ['Nêu các bước gửi một thư điện tử.', ['đăng nhập', 'soạn thư', 'người nhận', 'gửi'], 'Đăng nhập hộp thư → chọn Soạn thư → nhập địa chỉ người nhận, tiêu đề, nội dung (đính kèm tệp nếu cần) → nhấn Gửi.']],
    2: [['Mô tả thuật toán (bằng các bước) để giải một bài toán đơn giản, ví dụ tìm số lớn hơn trong hai số a, b.', ['đầu vào', 'nếu', 'đầu ra'], 'Đầu vào: a, b. Bước 1: Nhập a, b. Bước 2: Nếu a > b thì số lớn là a, nếu không thì số lớn là b. Bước 3: Thông báo số lớn. Đầu ra: số lớn hơn.'],
      ['Em cần làm gì để an toàn khi sử dụng Internet?', ['mật khẩu', 'thông tin cá nhân', 'người lạ'], 'Đặt mật khẩu mạnh, không chia sẻ; không công khai thông tin cá nhân; không mở đường link, tệp lạ; không gặp người quen qua mạng; báo người lớn khi bị đe doạ; dùng mạng vừa phải.']]
  }
});

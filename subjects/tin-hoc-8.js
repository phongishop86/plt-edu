/* Tin học 8 – KNTT. Chủ đề, bài theo mục lục SGK; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'tin-hoc-8', lop: 8, mon: 'Tin học', icon: '💻', nhan: 'Chủ đề',
  topics: [
    { hk: 1, ten: 'Máy tính và cộng đồng', bai: ['Lược sử công cụ tính toán'],
      lt: ['Công cụ tính toán qua các thời kì: que tính, bàn tính (abacus), máy tính cơ học (Pascal – Pascaline, Leibniz), máy phân tích của <b>Babbage</b>.', 'Các thế hệ máy tính điện tử: <b>đèn điện tử chân không</b> (ENIAC) → <b>bóng bán dẫn (transistor)</b> → <b>mạch tích hợp (IC)</b> → <b>mạch tích hợp cỡ rất lớn (VLSI)</b> → máy tính dùng trí tuệ nhân tạo.', 'Máy tính ngày càng nhỏ gọn, mạnh, rẻ, tiêu thụ ít điện năng.'],
      q: `? Thế hệ máy tính đầu tiên sử dụng linh kiện: | Đèn điện tử chân không | Bóng bán dẫn | Mạch tích hợp | Vi xử lí
? Máy tính ENIAC thuộc thế hệ: | Thứ nhất | Thứ hai | Thứ ba | Thứ tư
? Người thiết kế "máy phân tích" được coi là ông tổ của máy tính là: | Charles Babbage | Blaise Pascal | Bill Gates | Alan Turing
? Linh kiện đặc trưng của máy tính thế hệ thứ hai là: | Bóng bán dẫn | Đèn điện tử | Vi mạch VLSI | Trí tuệ nhân tạo
+ Máy tính ngày càng nhỏ gọn và mạnh mẽ hơn.
+ Bàn tính là một công cụ tính toán thủ công.
- Máy tính thế hệ thứ nhất rất nhỏ gọn, tiết kiệm điện.
> Đèn điện tử chân không > Bóng bán dẫn > Mạch tích hợp > Mạch tích hợp cỡ rất lớn > Máy tính dùng trí tuệ nhân tạo` },
    { hk: 1, ten: 'Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin', bai: ['Thông tin trong môi trường số', 'Thực hành: Khai thác thông tin số'],
      lt: ['Thông tin số: được mã hoá, lưu trữ, truyền qua thiết bị số; dễ nhân bản, lan truyền nhanh, khó xoá bỏ hoàn toàn.', 'Đánh giá độ tin cậy: nguồn gốc rõ ràng (cơ quan chính thống), tác giả, thời gian cập nhật, đối chiếu nhiều nguồn.'],
      q: `? Thông tin đáng tin cậy thường: | Có nguồn gốc rõ ràng, từ cơ quan chính thống | Được chia sẻ nhiều lượt | Có tiêu đề giật gân | Không ghi tác giả
? Đặc điểm của thông tin số là: | Dễ nhân bản, lan truyền nhanh | Không thể sao chép | Chỉ lưu trên giấy | Không thể chỉnh sửa
+ Nên đối chiếu nhiều nguồn trước khi tin và chia sẻ thông tin.
- Thông tin có nhiều lượt thích chắc chắn đúng.` },
    { hk: 1, ten: 'Đạo đức, pháp luật và văn hoá trong môi trường số', bai: ['Đạo đức và văn hoá trong sử dụng công nghệ kĩ thuật số'],
      lt: ['Tôn trọng <b>bản quyền</b>, không sao chép, phát tán sản phẩm số trái phép; trích dẫn nguồn khi sử dụng.', 'Không dùng công nghệ để lừa đảo, quay cóp, xâm phạm quyền riêng tư người khác.'],
      q: `? Hành vi nào vi phạm đạo đức trong môi trường số? | Dùng điện thoại quay cóp bài kiểm tra | Trích dẫn nguồn khi dùng ảnh | Xin phép trước khi đăng ảnh bạn | Mua phần mềm có bản quyền
? Khi sử dụng tài liệu của người khác trong bài làm, em cần: | Ghi rõ nguồn trích dẫn | Nhận là của mình | Xoá tên tác giả | Bán lại tài liệu
+ Tải và phát tán phim lậu là vi phạm bản quyền.
- Mọi hình ảnh trên Internet đều được dùng tự do.` },
    { hk: 1, ten: 'Ứng dụng tin học – Bảng tính nâng cao', bai: ['Sử dụng bảng tính giải quyết bài toán thực tế', 'Sắp xếp và lọc dữ liệu', 'Trình bày dữ liệu bằng biểu đồ'],
      lt: ['<b>Địa chỉ tương đối</b> (A1) thay đổi khi sao chép công thức; <b>địa chỉ tuyệt đối</b> ($A$1) giữ nguyên; địa chỉ hỗn hợp ($A1, A$1).', '<b>Sắp xếp</b> dữ liệu tăng dần/giảm dần; <b>lọc</b> dữ liệu để hiển thị các hàng thoả mãn điều kiện.', '<b>Biểu đồ</b>: cột (so sánh), đường (xu hướng theo thời gian), hình tròn (tỉ lệ thành phần).'],
      q: `? Địa chỉ ô tuyệt đối được viết là: | $B$2 | B2 | B$ | #B2
? Khi sao chép công thức, địa chỉ ô không thay đổi là: | Địa chỉ tuyệt đối | Địa chỉ tương đối | Mọi địa chỉ | Không có
? Để thể hiện tỉ lệ các thành phần trong tổng thể, nên dùng biểu đồ: | Hình tròn | Đường | Cột | Phân tán
? Để thể hiện sự thay đổi nhiệt độ theo các tháng, nên dùng biểu đồ: | Đường | Hình tròn | Cột chồng | Không cần biểu đồ
? Chức năng hiển thị các hàng thoả mãn điều kiện là: | Lọc dữ liệu | Sắp xếp | Gộp ô | Định dạng
+ Sắp xếp có thể theo thứ tự tăng dần hoặc giảm dần.
- Lọc dữ liệu sẽ xoá vĩnh viễn các hàng không thoả mãn.
= Biểu đồ cột = So sánh số liệu
= Biểu đồ đường = Xu hướng thay đổi theo thời gian
= Biểu đồ hình tròn = Tỉ lệ các thành phần
= $A$1 = Địa chỉ tuyệt đối` },
    { hk: 2, ten: 'Ứng dụng tin học – Soạn thảo, trình chiếu nâng cao và chỉnh sửa ảnh', bai: ['Làm việc với danh sách dạng liệt kê và hình ảnh trong văn bản', 'Tạo đầu trang, chân trang cho văn bản', 'Định dạng nâng cao cho trang chiếu', 'Sử dụng bản mẫu tạo bài trình chiếu', 'Phần mềm chỉnh sửa ảnh (tự chọn)'],
      lt: ['Danh sách liệt kê: dạng kí hiệu (bullets) và dạng số thứ tự (numbering).', '<b>Đầu trang (header), chân trang (footer)</b>: thông tin lặp lại ở mỗi trang (tên tài liệu, số trang).', 'Bản mẫu (template) giúp tạo bài trình chiếu nhanh, thống nhất.', 'Chỉnh sửa ảnh: cắt, xoay, thay đổi kích thước, chỉnh sáng, thêm chữ, hiệu ứng; làm việc với lớp (layer).'],
      q: `? Phần hiển thị số trang lặp lại ở cuối mỗi trang văn bản là: | Chân trang | Đầu trang | Lề trái | Tiêu đề bảng
? Danh sách liệt kê dạng 1, 2, 3 gọi là: | Danh sách số thứ tự | Danh sách kí hiệu | Bảng | Cột báo
? Thao tác bỏ bớt phần thừa của bức ảnh gọi là: | Cắt ảnh | Xoay ảnh | Lật ảnh | Thêm chữ
+ Bản mẫu giúp các trang chiếu có bố cục, màu sắc thống nhất.
- Đầu trang chỉ xuất hiện ở trang đầu tiên.` },
    { hk: 2, ten: 'Giải quyết vấn đề với sự trợ giúp của máy tính', bai: ['Từ thuật toán đến chương trình', 'Biểu diễn dữ liệu', 'Cấu trúc điều khiển', 'Gỡ lỗi'],
      lt: ['<b>Chương trình</b>: dãy lệnh mô tả thuật toán bằng ngôn ngữ lập trình (Scratch, Python…).', 'Dữ liệu: <b>hằng</b>, <b>biến</b>; kiểu dữ liệu: số, xâu kí tự, lôgic.', '3 cấu trúc điều khiển: <b>tuần tự</b>, <b>rẽ nhánh</b> (nếu… thì… [nếu không thì…]), <b>lặp</b> (lặp với số lần biết trước, lặp có điều kiện).', '<b>Gỡ lỗi</b>: tìm và sửa lỗi cú pháp, lỗi lôgic; chạy thử với nhiều bộ dữ liệu.'],
      q: `? Ba cấu trúc điều khiển cơ bản là: | Tuần tự, rẽ nhánh, lặp | Cộng, trừ, nhân | Nhập, xuất, lưu | Hằng, biến, xâu
? Cấu trúc "nếu… thì… nếu không thì…" là cấu trúc: | Rẽ nhánh | Lặp | Tuần tự | Hàm
? Đại lượng có giá trị có thể thay đổi khi chương trình chạy là: | Biến | Hằng | Chú thích | Tên chương trình
? Chương trình chạy được nhưng cho kết quả sai là mắc lỗi: | Lôgic | Cú pháp | Chính tả bàn phím | Phần cứng
? Lệnh "lặp lại 10 lần" thuộc cấu trúc: | Lặp với số lần biết trước | Rẽ nhánh | Tuần tự | Lặp vô hạn có điều kiện
+ Chương trình máy tính là cách mô tả thuật toán để máy tính thực hiện.
- Hằng là đại lượng thay đổi giá trị trong khi chương trình chạy.
= Tuần tự = Các lệnh thực hiện lần lượt
= Rẽ nhánh = Chọn lệnh theo điều kiện
= Lặp = Thực hiện lệnh nhiều lần
> Xác định bài toán > Thiết kế thuật toán > Viết chương trình > Chạy thử, gỡ lỗi` },
    { hk: 2, ten: 'Hướng nghiệp với Tin học', bai: ['Tin học với nghề nghiệp'],
      lt: ['Nghề liên quan Tin học: lập trình viên, kĩ sư phần mềm, quản trị mạng, an ninh mạng, phân tích dữ liệu, thiết kế đồ hoạ, trí tuệ nhân tạo.', 'Tin học được ứng dụng trong mọi ngành nghề: y tế, giáo dục, ngân hàng, nông nghiệp…'],
      q: `? Nghề bảo vệ hệ thống máy tính khỏi tấn công là: | Chuyên viên an ninh mạng | Thợ điện | Kế toán | Giáo viên mầm non
? Ngành nghề nào ứng dụng Tin học? | Hầu hết mọi ngành nghề | Chỉ ngành công nghệ thông tin | Không ngành nào | Chỉ ngành ngân hàng
+ Kĩ năng tin học cần thiết cho nhiều nghề nghiệp hiện nay.
- Chỉ người học ngành Tin học mới cần biết dùng máy tính.` }
  ],
  essays: {
    1: [['Trình bày các thế hệ máy tính điện tử và đặc điểm chính của mỗi thế hệ.', ['đèn điện tử', 'bóng bán dẫn', 'mạch tích hợp'], 'Thế hệ 1: đèn điện tử chân không, cồng kềnh, tốn điện. Thế hệ 2: bóng bán dẫn, nhỏ hơn, nhanh hơn. Thế hệ 3: mạch tích hợp. Thế hệ 4: mạch tích hợp cỡ rất lớn (VLSI), máy tính cá nhân. Thế hệ 5: trí tuệ nhân tạo.'],
      ['Phân biệt địa chỉ tương đối và địa chỉ tuyệt đối, cho ví dụ khi tính thành tiền có thuế suất cố định ở ô E1.', ['tương đối', 'tuyệt đối', '$E$1'], 'Địa chỉ tương đối (C2) thay đổi khi sao chép; địa chỉ tuyệt đối ($E$1) giữ nguyên. Ví dụ: =C2*D2*(1+$E$1), sao chép xuống các hàng, C2, D2 đổi theo hàng, $E$1 giữ nguyên.']],
    2: [['Viết thuật toán (hoặc chương trình) nhập điểm trung bình và xếp loại: ≥ 8 Giỏi, ≥ 6,5 Khá, ≥ 5 Trung bình, còn lại Yếu.', ['nếu', 'rẽ nhánh', 'điểm'], 'Nhập điểm d. Nếu d ≥ 8 thì xếp "Giỏi"; nếu không, nếu d ≥ 6,5 thì "Khá"; nếu không, nếu d ≥ 5 thì "Trung bình"; nếu không thì "Yếu". Đưa ra kết quả. Dùng cấu trúc rẽ nhánh lồng nhau.'],
      ['Nêu các bước gỡ lỗi chương trình.', ['lỗi', 'chạy thử', 'sửa'], 'Chạy thử với các bộ dữ liệu; quan sát kết quả, xác định lỗi (cú pháp, lôgic); khoanh vùng đoạn lệnh gây lỗi (theo dõi giá trị biến, chạy từng bước); sửa lỗi; chạy thử lại.']]
  }
});

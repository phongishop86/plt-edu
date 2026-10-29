/* Tin học 4 – KNTT. Chủ đề, bài theo chương trình; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'tin-hoc-4', lop: 4, mon: 'Tin học', icon: '💻',
  topics: [
    { hk: 1, ten: 'Máy tính và em', bai: ['Phần cứng và phần mềm', 'Gõ bàn phím đúng cách'],
      lt: ['<b>Phần cứng</b>: các bộ phận nhìn thấy, chạm vào được (màn hình, bàn phím, chuột, thân máy, loa, máy in).', '<b>Phần mềm</b>: các chương trình chạy trên máy tính (hệ điều hành, phần mềm soạn thảo, trò chơi, trình duyệt). Phần cứng và phần mềm phối hợp với nhau.', 'Gõ bàn phím 10 ngón: hai ngón trỏ đặt lên phím F và J; ngón cái đặt trên phím cách (Space).'],
      q: `? Đâu là phần cứng? | Bàn phím | Phần mềm soạn thảo | Trò chơi điện tử | Hệ điều hành
? Đâu là phần mềm? | Phần mềm trình chiếu | Chuột | Màn hình | Loa
? Ngón cái dùng để gõ phím: | Phím cách (Space) | Phím Enter | Phím F | Phím J
? Máy tính hoạt động được khi: | Phần cứng và phần mềm phối hợp với nhau | Chỉ có phần cứng | Chỉ có phần mềm | Không cần điện
+ Máy in là thiết bị phần cứng.
+ Hệ điều hành là phần mềm.
- Phần mềm có thể cầm nắm được.
- Gõ bàn phím chỉ cần dùng hai ngón trỏ là đúng cách.
# Phần cứng: Màn hình, Bàn phím, Chuột, Máy in
# Phần mềm: Hệ điều hành, Phần mềm soạn thảo, Trình duyệt web, Phần mềm vẽ` },
    { hk: 1, ten: 'Mạng máy tính và Internet', bai: ['Thông tin trên trang web'],
      lt: ['Trang web có thể chứa văn bản, hình ảnh, âm thanh, video và <b>siêu liên kết</b> (nháy vào để chuyển đến trang khác).', 'Con trỏ chuột chuyển thành hình bàn tay khi trỏ vào siêu liên kết.'],
      q: `? Khi trỏ chuột vào siêu liên kết, con trỏ thường có hình: | Bàn tay | Đồng hồ cát | Mũi tên hai chiều | Chữ I
? Phần mềm dùng để xem trang web là: | Trình duyệt web | Phần mềm vẽ | Phần mềm luyện gõ | Máy tính bỏ túi
+ Trang web có thể chứa video và âm thanh.
- Siêu liên kết không thể nháy vào được.` },
    { hk: 1, ten: 'Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin', bai: ['Tìm kiếm thông tin trên Internet', 'Thao tác với tệp và thư mục'],
      lt: ['Tìm kiếm: dùng máy tìm kiếm (ví dụ Google), gõ <b>từ khoá</b> ngắn gọn, đúng trọng tâm.', 'Thao tác với tệp, thư mục: tạo, đổi tên, sao chép, di chuyển, xoá. Xoá nhầm có thể khôi phục từ Thùng rác (Recycle Bin).'],
      q: `? Để tìm thông tin trên Internet, em cần gõ: | Từ khoá vào máy tìm kiếm | Mật khẩu | Địa chỉ nhà | Số điện thoại
? Tệp bị xoá nhầm có thể khôi phục từ: | Thùng rác (Recycle Bin) | Bàn phím | Màn hình nền mới | Máy in
? Thao tác sao chép tệp tạo ra: | Một bản giống hệt ở vị trí mới, bản cũ vẫn còn | Xoá tệp cũ | Đổi tên tệp | Không có gì
+ Từ khoá ngắn gọn, chính xác giúp tìm kiếm nhanh hơn.
- Di chuyển tệp sẽ tạo ra hai bản giống nhau.
= Sao chép = Tạo thêm bản giống hệt ở nơi khác
= Di chuyển = Chuyển tệp sang nơi khác
= Đổi tên = Đặt lại tên cho tệp, thư mục
= Xoá = Bỏ tệp vào Thùng rác` },
    { hk: 1, ten: 'Đạo đức, pháp luật và văn hoá trong môi trường số', bai: ['Sử dụng phần mềm khi được phép'],
      lt: ['Phần mềm có bản quyền: cần mua hoặc được phép mới dùng. Phần mềm miễn phí được dùng tự do theo quy định.', 'Không sao chép, cài đặt phần mềm trái phép; dùng phần mềm lậu có thể chứa virus.'],
      q: `? Sử dụng phần mềm không có bản quyền là: | Vi phạm quy định, có thể nhiễm virus | Việc làm đáng khen | Luôn an toàn | Bắt buộc
? Muốn cài phần mềm trên máy tính của gia đình, em nên: | Xin phép bố mẹ | Tự cài bất kì phần mềm nào | Tải từ trang lạ | Nhờ người lạ cài
+ Cần tôn trọng bản quyền phần mềm.
- Phần mềm nào trên mạng cũng được dùng tự do.` },
    { hk: 2, ten: 'Ứng dụng tin học', bai: ['Tạo bài trình chiếu', 'Định dạng, hiệu ứng trang chiếu', 'Phần mềm soạn thảo văn bản', 'Chỉnh sửa và định dạng văn bản', 'Phần mềm luyện gõ bàn phím'],
      lt: ['Phần mềm trình chiếu: thêm trang chiếu, chèn chữ, hình ảnh, chọn <b>hiệu ứng chuyển trang</b>.', 'Phần mềm soạn thảo: gõ văn bản, chỉnh sửa (chọn, xoá, sao chép, di chuyển), định dạng chữ (đậm <b>B</b>, nghiêng <i>I</i>, gạch chân U, cỡ chữ, màu chữ).', 'Phím Backspace xoá kí tự bên trái con trỏ; Delete xoá kí tự bên phải.'],
      q: `? Nút B trong phần mềm soạn thảo dùng để: | In đậm chữ | In nghiêng | Gạch chân | Đổi màu
? Phím xoá kí tự bên trái con trỏ soạn thảo là: | Backspace | Delete | Enter | Shift
? Phím xoá kí tự bên phải con trỏ soạn thảo là: | Delete | Backspace | Tab | Ctrl
? Phím dùng để xuống dòng, tạo đoạn mới là: | Enter | Space | Shift | Esc
+ Hiệu ứng chuyển trang làm bài trình chiếu sinh động hơn.
- Nút I dùng để in đậm chữ.
= B = In đậm
= I = In nghiêng
= U = Gạch chân
= Enter = Xuống dòng, tạo đoạn mới` },
    { hk: 2, ten: 'Giải quyết vấn đề với sự trợ giúp của máy tính', bai: ['Làm quen với môi trường lập trình trực quan', 'Tạo chương trình máy tính để kể chuyện', 'Tạo chương trình có phông nền thay đổi', 'Chương trình của em'],
      lt: ['<b>Scratch</b>: môi trường lập trình trực quan bằng cách kéo thả các khối lệnh.', 'Thành phần: sân khấu, nhân vật (sprite), phông nền, khu vực khối lệnh, khu vực lập trình.', 'Lá cờ xanh: chạy chương trình; nút đỏ: dừng chương trình.', 'Khối "nói…", "di chuyển… bước", "đổi phông nền", "đợi… giây".'],
      q: `? Trong Scratch, để chạy chương trình em nháy vào: | Lá cờ xanh | Nút đỏ | Nhân vật | Phông nền
? Trong Scratch, nút đỏ dùng để: | Dừng chương trình | Chạy chương trình | Thêm nhân vật | Xoá phông nền
? Scratch là môi trường lập trình: | Trực quan, kéo thả khối lệnh | Chỉ gõ lệnh bằng chữ | Để vẽ tranh | Để soạn thảo văn bản
+ Trong Scratch, có thể thêm nhiều nhân vật.
- Scratch không thể thay đổi phông nền.
= Lá cờ xanh = Chạy chương trình
= Nút đỏ = Dừng chương trình
= Nhân vật = Đối tượng thực hiện lệnh
= Sân khấu = Nơi hiển thị kết quả` }
  ],
  essays: {
    1: [['Phân biệt phần cứng và phần mềm. Mỗi loại cho 2 ví dụ.', ['phần cứng', 'phần mềm', 'chạm'], 'Phần cứng là các thiết bị nhìn thấy, chạm vào được (bàn phím, chuột). Phần mềm là các chương trình chạy trên máy (phần mềm soạn thảo, trình duyệt web).'],
      ['Nêu các bước tìm kiếm thông tin trên Internet.', ['trình duyệt', 'từ khoá', 'kết quả'], 'Mở trình duyệt web → vào trang máy tìm kiếm → gõ từ khoá → nhấn Enter → xem danh sách kết quả, chọn trang phù hợp, tin cậy.']],
    2: [['Nêu các bước tạo một bài trình chiếu đơn giản.', ['trang chiếu', 'chữ', 'hình ảnh', 'lưu'], 'Mở phần mềm trình chiếu → chọn mẫu → gõ tiêu đề → thêm trang chiếu, chèn chữ, hình ảnh → chọn hiệu ứng chuyển trang → lưu bài → trình chiếu.'],
      ['Mô tả một chương trình Scratch em muốn tạo (nhân vật, phông nền, hoạt động).', ['nhân vật', 'phông nền', 'lá cờ'], 'Ví dụ: nhân vật mèo; phông nền công viên; khi nháy lá cờ xanh, mèo nói "Xin chào!", di chuyển 10 bước, đổi phông nền sang bãi biển.']]
  }
});

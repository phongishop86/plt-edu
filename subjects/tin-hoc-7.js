/* Tin học 7 – KNTT. Chủ đề, bài theo mục lục SGK; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'tin-hoc-7', lop: 7, mon: 'Tin học', icon: '💻', nhan: 'Chủ đề',
  topics: [
    { hk: 1, ten: 'Máy tính và cộng đồng', bai: ['Thiết bị vào – ra', 'Phần mềm máy tính', 'Quản lí dữ liệu trong máy tính'],
      lt: ['<b>Thiết bị vào</b>: bàn phím, chuột, máy quét, micro, webcam… <b>Thiết bị ra</b>: màn hình, máy in, loa, máy chiếu… Có thiết bị vừa vào vừa ra: màn hình cảm ứng, ổ đĩa.', '<b>Hệ điều hành</b> (Windows, macOS, Linux, Android, iOS) quản lí và điều khiển máy tính; <b>phần mềm ứng dụng</b> (soạn thảo, bảng tính, trình duyệt…) giúp làm công việc cụ thể.', 'Tệp có <b>phần mở rộng</b> cho biết kiểu tệp: .docx, .xlsx, .pptx, .jpg, .mp3, .exe…; sao lưu dữ liệu định kì để phòng mất mát.'],
      q: `? Thiết bị nào là thiết bị vào? | Bàn phím | Màn hình | Máy in | Loa
? Thiết bị nào là thiết bị ra? | Máy in | Chuột | Máy quét | Micro
? Phần mềm nào là hệ điều hành? | Windows | Microsoft Word | Google Chrome | Paint
? Tệp có phần mở rộng .xlsx thường là tệp: | Bảng tính | Văn bản | Hình ảnh | Âm thanh
? Tệp có phần mở rộng .mp3 là tệp: | Âm thanh | Văn bản | Bảng tính | Trình chiếu
? Để phòng mất dữ liệu, em nên: | Sao lưu dữ liệu định kì | Xoá bớt tệp | Tắt máy liên tục | Không lưu tệp
+ Màn hình cảm ứng vừa là thiết bị vào vừa là thiết bị ra.
+ Hệ điều hành quản lí các tài nguyên của máy tính.
- Microsoft Word là một hệ điều hành.
- Máy in là thiết bị vào.
# Thiết bị vào: Bàn phím, Chuột, Máy quét, Micro
# Thiết bị ra: Màn hình, Máy in, Loa, Máy chiếu
= .docx = Văn bản
= .xlsx = Bảng tính
= .pptx = Trình chiếu
= .jpg = Hình ảnh` },
    { hk: 1, ten: 'Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin', bai: ['Mạng xã hội và một số kênh trao đổi thông tin trên Internet'],
      lt: ['<b>Mạng xã hội</b> (Facebook, Zalo, TikTok…): kết nối, chia sẻ thông tin; cần cài đặt quyền riêng tư, không chia sẻ thông tin cá nhân bừa bãi.', 'Kênh trao đổi thông tin: thư điện tử, diễn đàn, nhắn tin, mạng xã hội, trang web.', 'Tác hại khi dùng không đúng: nghiện mạng, lộ thông tin, bị lừa đảo, tin giả.'],
      q: `? Đâu là một mạng xã hội? | Facebook | Microsoft Excel | Windows | Paint
? Khi dùng mạng xã hội, em KHÔNG nên: | Chia sẻ mật khẩu, địa chỉ nhà cho người lạ | Cài đặt quyền riêng tư | Kiểm tra nguồn tin | Dùng thời gian hợp lí
+ Cần kiểm chứng thông tin trước khi chia sẻ trên mạng xã hội.
- Mọi thông tin trên mạng xã hội đều chính xác.
- Có thể kết bạn và gặp mặt người lạ quen trên mạng mà không cần báo bố mẹ.` },
    { hk: 1, ten: 'Đạo đức, pháp luật và văn hoá trong môi trường số', bai: ['Ứng xử trên mạng'],
      lt: ['Giao tiếp lịch sự, tôn trọng; không bắt nạt, xúc phạm người khác trên mạng.', 'Không đăng, chia sẻ thông tin sai sự thật; tôn trọng bản quyền.', 'Bị bắt nạt hoặc gặp nội dung xấu: không đáp trả, lưu bằng chứng, báo cho người lớn tin cậy.'],
      q: `? Khi bị nhắn tin đe doạ trên mạng, em nên: | Không đáp trả, lưu bằng chứng và báo người lớn | Đe doạ lại | Xoá hết và im lặng | Gặp người đó một mình
? Hành vi nào là ứng xử văn minh trên mạng? | Bình luận lịch sự, tôn trọng người khác | Đăng ảnh bạn để chế giễu | Chia sẻ tin đồn | Dùng lời lẽ thô tục
+ Bắt nạt trên mạng là hành vi sai trái.
- Lấy ảnh của người khác đăng lên mạng không cần xin phép là bình thường.` },
    { hk: 1, ten: 'Ứng dụng tin học – Bảng tính', bai: ['Làm quen với phần mềm bảng tính', 'Tính toán tự động trên bảng tính', 'Công cụ hỗ trợ tính toán', 'Trình bày bảng tính', 'Hoàn thiện bảng tính'],
      lt: ['Bảng tính gồm các <b>cột</b> (A, B, C…) và <b>hàng</b> (1, 2, 3…); giao của cột và hàng là <b>ô</b>, có địa chỉ như B3.', 'Công thức bắt đầu bằng dấu <b>=</b>; phép toán: + − * / ^; dùng địa chỉ ô để kết quả tự cập nhật.', 'Hàm: <b>SUM</b> (tổng), <b>AVERAGE</b> (trung bình), <b>MAX</b> (lớn nhất), <b>MIN</b> (nhỏ nhất), <b>COUNT</b> (đếm số ô chứa số).', 'Định dạng: phông chữ, căn lề, kẻ khung, gộp ô, định dạng số; in bảng tính.'],
      q: `? Trong bảng tính, công thức phải bắt đầu bằng dấu: | = | + | # | @
? Ô nằm ở cột C, hàng 5 có địa chỉ là: | C5 | 5C | C:5 | R5C3
? Hàm tính tổng là: | SUM | AVERAGE | MAX | COUNT
? Hàm tính giá trị trung bình là: | AVERAGE | SUM | MIN | COUNT
? Công thức =MAX(A1:A5) cho kết quả: | Giá trị lớn nhất trong khối A1:A5 | Tổng khối A1:A5 | Giá trị nhỏ nhất | Số ô có dữ liệu
? Ô A1 = 4, A2 = 6. Công thức =A1*A2 cho kết quả: | 24 | 10 | 46 | 2
+ Khi thay đổi dữ liệu trong ô, kết quả công thức dùng địa chỉ ô tự động cập nhật.
+ Hàm COUNT đếm số ô chứa dữ liệu số.
- Trong bảng tính, cột được đánh số 1, 2, 3 còn hàng được đánh chữ A, B, C.
- Hàm MIN cho giá trị lớn nhất.
= SUM = Tính tổng
= AVERAGE = Tính trung bình cộng
= MAX = Tìm giá trị lớn nhất
= MIN = Tìm giá trị nhỏ nhất
= COUNT = Đếm ô chứa số
_ Hàm [SUM|sum] dùng để tính tổng các giá trị.` },
    { hk: 2, ten: 'Ứng dụng tin học – Trình chiếu', bai: ['Tạo bài trình chiếu', 'Định dạng đối tượng trên trang chiếu', 'Thực hành tổng hợp: Hoàn thiện bài trình chiếu'],
      lt: ['Bài trình chiếu gồm các <b>trang chiếu</b> (slide): trang tiêu đề, trang nội dung; dùng cấu trúc phân cấp (mức 1, mức 2).', 'Chèn hình ảnh, sắp xếp đối tượng, chọn mẫu bố trí (layout), mẫu thiết kế (theme).', 'Hiệu ứng chuyển trang (transition) và hiệu ứng động cho đối tượng (animation); không lạm dụng hiệu ứng.'],
      q: `? Trang đầu tiên của bài trình chiếu thường là: | Trang tiêu đề | Trang kết thúc | Trang mục lục cuối | Trang trắng
? Hiệu ứng khi chuyển từ trang này sang trang khác gọi là: | Hiệu ứng chuyển trang | Hiệu ứng động | Định dạng phông | Mẫu bố trí
? Phần mềm nào dùng để tạo bài trình chiếu? | PowerPoint | Excel | Paint | Notepad
+ Nên dùng ít chữ, nhiều ý ngắn gọn trên mỗi trang chiếu.
- Càng nhiều hiệu ứng thì bài trình chiếu càng tốt.
> Xác định nội dung, bố cục > Tạo trang tiêu đề > Tạo các trang nội dung > Chèn hình ảnh, định dạng > Thêm hiệu ứng phù hợp > Trình chiếu thử` },
    { hk: 2, ten: 'Giải quyết vấn đề với sự trợ giúp của máy tính', bai: ['Thuật toán tìm kiếm tuần tự', 'Thuật toán tìm kiếm nhị phân', 'Thuật toán sắp xếp'],
      lt: ['<b>Tìm kiếm tuần tự</b>: lần lượt so sánh từng phần tử từ đầu danh sách đến khi tìm thấy hoặc hết danh sách.', '<b>Tìm kiếm nhị phân</b>: chỉ dùng cho danh sách <b>đã sắp xếp</b>; so sánh với phần tử ở giữa, loại bỏ một nửa danh sách sau mỗi bước.', '<b>Sắp xếp nổi bọt</b>: so sánh hai phần tử liền kề, đổi chỗ nếu sai thứ tự; lặp lại đến khi không còn đổi chỗ. <b>Sắp xếp chọn</b>: mỗi lượt chọn phần tử nhỏ nhất đưa về đầu.', 'Chia bài toán thành bài toán nhỏ hơn giúp giải quyết dễ dàng.'],
      q: `? Thuật toán tìm kiếm nhị phân chỉ áp dụng được khi danh sách: | Đã được sắp xếp | Chưa sắp xếp | Có ít hơn 5 phần tử | Toàn số chẵn
? Tìm kiếm tuần tự là: | Lần lượt so sánh từ phần tử đầu tiên | So sánh với phần tử ở giữa | Chọn ngẫu nhiên | Sắp xếp trước rồi chia đôi
? Sau mỗi bước so sánh, tìm kiếm nhị phân loại bỏ được khoảng: | Một nửa danh sách | Một phần tử | Toàn bộ danh sách | Hai phần tử
? Thuật toán sắp xếp nổi bọt so sánh: | Hai phần tử liền kề | Phần tử đầu và cuối | Phần tử giữa với phần tử đầu | Ngẫu nhiên hai phần tử
? Danh sách 8 phần tử đã sắp xếp; tìm kiếm nhị phân cần tối đa khoảng bao nhiêu lần so sánh? | 4 | 8 | 1 | 16
+ Với danh sách lớn đã sắp xếp, tìm kiếm nhị phân nhanh hơn tìm kiếm tuần tự.
+ Thuật toán sắp xếp chọn mỗi lượt chọn phần tử nhỏ nhất đưa về đầu đoạn chưa sắp xếp.
- Tìm kiếm nhị phân dùng được cho danh sách chưa sắp xếp.
- Tìm kiếm tuần tự luôn bắt đầu từ phần tử ở giữa.
> So sánh giá trị cần tìm với phần tử giữa > Nếu bằng: tìm thấy, kết thúc > Nếu nhỏ hơn: tìm ở nửa trước > Nếu lớn hơn: tìm ở nửa sau > Lặp lại đến khi tìm thấy hoặc hết dãy` }
  ],
  essays: {
    1: [['Phân biệt hệ điều hành và phần mềm ứng dụng, cho ví dụ mỗi loại.', ['hệ điều hành', 'ứng dụng', 'Windows'], 'Hệ điều hành quản lí, điều khiển phần cứng và tạo môi trường cho phần mềm khác chạy (Windows, Android, iOS). Phần mềm ứng dụng giúp người dùng làm công việc cụ thể (Word, Excel, trình duyệt Chrome, Zalo).'],
      ['Bảng điểm có điểm Toán ở các ô B2:B30. Viết công thức tính điểm cao nhất, thấp nhất, trung bình và giải thích.', ['MAX', 'MIN', 'AVERAGE', 'B2:B30'], '=MAX(B2:B30) cho điểm cao nhất; =MIN(B2:B30) cho điểm thấp nhất; =AVERAGE(B2:B30) cho điểm trung bình. Dùng địa chỉ khối ô để kết quả tự cập nhật khi điểm thay đổi.']],
    2: [['Mô tả các bước tìm số 23 trong dãy đã sắp xếp 3, 8, 12, 17, 23, 30, 41 bằng thuật toán tìm kiếm nhị phân.', ['giữa', '17', '30', '23'], 'Phần tử giữa là 17 < 23 → xét nửa sau 23, 30, 41; phần tử giữa là 30 > 23 → xét nửa trước còn 23; so sánh 23 = 23 → tìm thấy ở vị trí thứ 5.'],
      ['Nêu các quy tắc ứng xử văn minh khi tham gia mạng xã hội.', ['lịch sự', 'thông tin cá nhân', 'kiểm chứng'], 'Giao tiếp lịch sự, tôn trọng; không xúc phạm, bắt nạt; bảo vệ thông tin cá nhân; kiểm chứng trước khi chia sẻ; tôn trọng bản quyền; dùng thời gian hợp lí; gặp vấn đề báo người lớn.']]
  }
});

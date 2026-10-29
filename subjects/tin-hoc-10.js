/* Tin học 10 – KNTT. Bài theo mục lục SGK; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'tin-hoc-10', lop: 10, mon: 'Tin học', icon: '💻', nhan: 'Chủ đề', so: false,
  topics: [
    { hk: 1, nhan: 'Chủ đề 1', ten: 'Máy tính và xã hội tri thức', bai: ['Bài 1. Thông tin và xử lí thông tin', 'Bài 2. Vai trò của thiết bị thông minh và tin học đối với xã hội', 'Bài 3. Một số kiểu dữ liệu và dữ liệu văn bản', 'Bài 4. Hệ nhị phân và dữ liệu số nguyên', 'Bài 5. Dữ liệu lôgic', 'Bài 6. Dữ liệu âm thanh và hình ảnh', 'Bài 7. Thực hành sử dụng thiết bị số thông dụng'],
      lt: ['Đơn vị đo thông tin: bit, byte (1 B = 8 bit), KB, MB, GB, TB (mỗi đơn vị gấp 1024 lần).', 'Hệ nhị phân dùng 2 chữ số 0 và 1. Ví dụ: 5 = 101₂, 10 = 1010₂.', 'Mã hoá văn bản: ASCII (8 bit), Unicode (hỗ trợ tiếng Việt và mọi ngôn ngữ).', 'Phép toán lôgic: AND (và), OR (hoặc), NOT (phủ định), XOR.', 'Số hoá âm thanh (lấy mẫu, lượng tử hoá) và hình ảnh (điểm ảnh – pixel).'],
      q: `? 1 byte bằng bao nhiêu bit? | 8 | 10 | 16 | 1024
? Số 5 trong hệ thập phân viết sang hệ nhị phân là: | 101 | 110 | 111 | 100
? Số nhị phân 1010 bằng bao nhiêu trong hệ thập phân? | 10 | 8 | 12 | 5
? Bảng mã hỗ trợ hiển thị đầy đủ tiếng Việt là: | Unicode | ASCII 7 bit | Morse | Nhị phân thuần
? Kết quả của phép 1 AND 0 là: | 0 | 1 | 2 | 10
? Kết quả của phép 1 OR 0 là: | 1 | 0 | 2 | 10
+ 1 KB = 1024 byte.
- Hệ nhị phân sử dụng 10 chữ số từ 0 đến 9.
= AND = Đúng khi cả hai đều đúng
= OR = Đúng khi ít nhất một vế đúng
= NOT = Đảo giá trị lôgic
= XOR = Đúng khi hai vế khác nhau` },
    { hk: 1, nhan: 'Chủ đề 2, 3', ten: 'Mạng máy tính và Internet. Đạo đức, pháp luật và văn hoá trong môi trường số', bai: ['Bài 8. Mạng máy tính trong cuộc sống hiện đại', 'Bài 9. An toàn trên không gian mạng', 'Bài 10. Thực hành khai thác tài nguyên trên Internet', 'Bài 11. Ứng xử trên môi trường số. Nghĩa vụ tôn trọng bản quyền'],
      lt: ['Mạng LAN (cục bộ), WAN (diện rộng), Internet; điện toán đám mây; Internet vạn vật (IoT).', 'Nguy cơ: phần mềm độc hại (virus, mã độc tống tiền), lừa đảo trực tuyến (phishing), lộ thông tin cá nhân.', 'Phòng tránh: mật khẩu mạnh, xác thực hai lớp, cập nhật phần mềm, không mở liên kết lạ.', 'Tôn trọng bản quyền, Luật An ninh mạng 2018; ứng xử văn minh trên mạng.'],
      q: `? Mạng kết nối các máy tính trong phạm vi một trường học thường là: | LAN | WAN | Internet toàn cầu | GPS
? Hình thức giả mạo email, trang web để lấy cắp thông tin là: | Lừa đảo trực tuyến (phishing) | Sao lưu | Nén tệp | Định dạng
? IoT là viết tắt của: | Internet vạn vật | Mạng nội bộ | Hệ điều hành | Phần mềm diệt virus
? Mật khẩu nào mạnh nhất? | Tx#9mK!2qL | 123456 | matkhau | ngaysinh2008
+ Xác thực hai lớp giúp tăng cường bảo mật tài khoản.
- Có thể tự do sao chép, bán lại phần mềm có bản quyền.` },
    { hk: 1, nhan: 'Chủ đề 4', ten: 'Ứng dụng tin học: thiết kế đồ hoạ', bai: ['Bài 12. Phần mềm thiết kế đồ hoạ', 'Bài 13. Bổ sung các đối tượng đồ hoạ', 'Bài 14. Làm việc với đối tượng đường và văn bản', 'Bài 15. Hoàn thiện hình ảnh đồ hoạ'],
      lt: ['Đồ hoạ <b>điểm ảnh</b> (raster: JPG, PNG) – phóng to bị vỡ; đồ hoạ <b>vectơ</b> (SVG) – phóng to không vỡ.', 'Phần mềm đồ hoạ vectơ: Inkscape (miễn phí, nguồn mở), Adobe Illustrator.', 'Thao tác: vẽ hình, tô màu, nét viền, nhóm (group), căn chỉnh, đường Bézier, chữ theo đường.'],
      q: `? Ảnh nào không bị vỡ khi phóng to? | Ảnh vectơ | Ảnh điểm ảnh | Ảnh JPG | Ảnh chụp
? Inkscape là phần mềm: | Thiết kế đồ hoạ vectơ | Soạn thảo văn bản | Bảng tính | Trình duyệt
? Định dạng tệp đồ hoạ vectơ phổ biến là: | SVG | JPG | MP3 | DOCX
+ Đồ hoạ điểm ảnh được tạo từ các pixel.
- Ảnh JPG là ảnh vectơ.` },
    { hk: 2, nhan: 'Chủ đề 5', ten: 'Giải quyết vấn đề với sự trợ giúp của máy tính (Python)', bai: ['Bài 16. Ngôn ngữ lập trình bậc cao và Python', 'Bài 17. Biến và lệnh gán', 'Bài 18. Các lệnh vào ra đơn giản', 'Bài 19. Câu lệnh rẽ nhánh if', 'Bài 20. Câu lệnh lặp for', 'Bài 21. Câu lệnh lặp while', 'Bài 22–23. Kiểu dữ liệu danh sách', 'Bài 24–25. Xâu kí tự', 'Bài 26–28. Hàm, tham số, phạm vi của biến', 'Bài 29–31. Nhận biết lỗi, kiểm thử, gỡ lỗi; thực hành viết chương trình'],
      lt: ['Kiểu dữ liệu: int (số nguyên), float (số thực), str (xâu), bool (lôgic), list (danh sách).', '<code>input()</code> nhập dữ liệu (kiểu str), <code>print()</code> in kết quả; <code>int()</code>, <code>float()</code> chuyển kiểu.', 'Phép toán: <code>//</code> chia nguyên, <code>%</code> chia lấy dư, <code>**</code> luỹ thừa.', '<code>for i in range(n)</code> lặp n lần (i từ 0 đến n−1); <code>while</code> lặp khi điều kiện đúng.', 'Hàm: <code>def ten(tham_so): ... return</code>. Lỗi: cú pháp, ngoại lệ khi chạy, lỗi ngữ nghĩa.'],
      q: `? Trong Python, kết quả của 7 // 2 là: | 3 | 3.5 | 1 | 4
? Trong Python, kết quả của 7 % 2 là: | 1 | 3 | 3.5 | 0
? Trong Python, 2 ** 3 bằng: | 8 | 6 | 9 | 5
? range(5) tạo ra dãy số: | 0, 1, 2, 3, 4 | 1, 2, 3, 4, 5 | 0, 1, 2, 3, 4, 5 | 5
? Hàm dùng để nhập dữ liệu từ bàn phím là: | input() | print() | len() | range()
? len("Python") trả về: | 6 | 5 | 7 | Python
? Từ khoá dùng để định nghĩa hàm trong Python là: | def | function | func | define
? Kiểu dữ liệu của giá trị True là: | bool | int | str | float
+ Hàm input() luôn trả về dữ liệu kiểu xâu (str).
- Trong Python, chỉ số phần tử đầu tiên của danh sách là 1.
_ Lệnh in ra màn hình trong Python là [print]().
_ Để thêm phần tử vào cuối danh sách a, ta dùng a.[append](x).
= int = Số nguyên
= float = Số thực
= str = Xâu kí tự
= list = Danh sách` },
    { hk: 2, nhan: 'Chủ đề 6', ten: 'Hướng nghiệp với tin học', bai: ['Bài 33. Nghề thiết kế đồ hoạ máy tính', 'Bài 34. Nghề phát triển phần mềm'], on: 'Ôn tập cuối năm',
      lt: ['Nghề thiết kế đồ hoạ: thiết kế logo, quảng cáo, giao diện, minh hoạ; cần óc thẩm mĩ, kĩ năng phần mềm.', 'Nghề phát triển phần mềm: phân tích yêu cầu, thiết kế, lập trình, kiểm thử, bảo trì; cần tư duy logic, làm việc nhóm, học suốt đời.'],
      q: `? Công việc kiểm tra phần mềm có lỗi hay không gọi là: | Kiểm thử | Thiết kế logo | Bán hàng | Nhập liệu
? Phẩm chất quan trọng của lập trình viên là: | Tư duy logic, kiên nhẫn | Không cần học thêm | Làm việc một mình tuyệt đối | Không cần tiếng Anh
+ Nhà thiết kế đồ hoạ cần có óc thẩm mĩ.
- Phát triển phần mềm chỉ gồm việc gõ mã lệnh.` }
  ],
  essays: {
    1: [['Chuyển số 13 sang hệ nhị phân. Trình bày cách làm.', ['1101'], 'Chia liên tiếp cho 2, lấy số dư: 13:2=6 dư 1; 6:2=3 dư 0; 3:2=1 dư 1; 1:2=0 dư 1. Đọc ngược các số dư: 13 = 1101₂.'],
      ['Nêu các biện pháp bảo vệ bản thân khi tham gia không gian mạng.', ['mật khẩu', 'thông tin cá nhân', 'liên kết lạ'], 'Đặt mật khẩu mạnh, bật xác thực hai lớp; không chia sẻ thông tin cá nhân; không mở liên kết, tệp đính kèm lạ; cài phần mềm diệt virus, cập nhật hệ thống; cảnh giác lừa đảo, báo người lớn khi bị đe doạ.', 3]],
    2: [['Viết chương trình Python nhập số nguyên n, in ra tổng các số từ 1 đến n.', ['input', 'for', 'range', 'print'], 'n = int(input("n = "))\ns = 0\nfor i in range(1, n + 1):\n    s = s + i\nprint("Tổng:", s)'],
      ['Viết hàm Python kiểm tra một số nguyên n có phải số chẵn không.', ['def', '%', 'return'], 'def la_so_chan(n):\n    return n % 2 == 0\n\nprint(la_so_chan(4))  # True']]
  }
});

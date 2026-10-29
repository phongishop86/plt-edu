/* Công nghệ 12 (Công nghệ điện – điện tử) – KNTT. Bài theo mục lục SGK; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'cong-nghe-12', lop: 12, mon: 'Công nghệ', icon: '🛠️', nhan: 'Chương', so: false,
  topics: [
    { hk: 1, nhan: 'Chương I, II', ten: 'Giới thiệu chung về kĩ thuật điện. Hệ thống điện quốc gia', bai: ['Bài 1. Giới thiệu tổng quan về kĩ thuật điện', 'Bài 2. Ngành nghề trong lĩnh vực kĩ thuật điện', 'Bài 3. Mạch điện xoay chiều ba pha', 'Bài 4. Hệ thống điện quốc gia', 'Bài 5. Sản xuất điện năng', 'Bài 6. Mạng điện sản xuất quy mô nhỏ', 'Bài 7. Mạng điện hạ áp dùng trong sinh hoạt'],
      lt: ['Mạch điện ba pha: 3 dây pha và dây trung tính. Nối hình sao: U<sub>d</sub> = √3·U<sub>p</sub>, I<sub>d</sub> = I<sub>p</sub>. Nối tam giác: U<sub>d</sub> = U<sub>p</sub>, I<sub>d</sub> = √3·I<sub>p</sub>.', 'Lưới điện sinh hoạt Việt Nam: 220 V/380 V, tần số 50 Hz.', 'Hệ thống điện quốc gia: nguồn điện (nhà máy) → lưới truyền tải (500 kV, 220 kV, 110 kV) → lưới phân phối → hộ tiêu thụ.', 'Sản xuất điện: nhiệt điện, thuỷ điện, điện hạt nhân, điện gió, điện mặt trời.'],
      q: `? Tần số lưới điện ở Việt Nam là: | 50 Hz | 60 Hz | 100 Hz | 220 Hz
? Điện áp lưới điện sinh hoạt một pha ở Việt Nam là: | 220 V | 110 V | 380 V | 500 V
? Trong cách nối hình sao, quan hệ giữa điện áp dây và điện áp pha là: | Ud = √3·Up | Ud = Up | Up = √3·Ud | Ud = 3·Up
? Cấp điện áp truyền tải cao nhất ở nước ta là: | 500 kV | 220 kV | 110 kV | 35 kV
? Nhà máy điện sử dụng năng lượng của dòng nước là: | Thuỷ điện | Nhiệt điện | Điện gió | Điện mặt trời
+ Truyền tải điện ở điện áp cao giúp giảm hao phí trên đường dây.
- Điện mặt trời là nguồn năng lượng không tái tạo.
= Thuỷ điện = Năng lượng dòng nước
= Nhiệt điện = Đốt than, khí
= Điện gió = Năng lượng gió
= Điện hạt nhân = Phản ứng phân hạch` },
    { hk: 1, nhan: 'Chương III, IV', ten: 'Hệ thống điện trong gia đình. An toàn và tiết kiệm điện năng', bai: ['Bài 8. Hệ thống điện trong gia đình', 'Bài 9. Thiết bị điện trong hệ thống điện gia đình', 'Bài 10. Thiết kế và lắp đặt mạch điện điều khiển trong gia đình', 'Bài 11. An toàn điện', 'Bài 12. Tiết kiệm điện năng'],
      lt: ['Thiết bị đóng cắt, bảo vệ: aptomat (cầu dao tự động – bảo vệ quá tải, ngắn mạch), cầu chì, RCD/ELCB (chống giật – dòng rò), công tắc, ổ cắm.', 'Công tơ điện đo điện năng tiêu thụ (kWh). Điện năng A = P·t.', 'An toàn điện: nối đất vỏ thiết bị, dùng thiết bị chống giật, không chạm vào dây trần; cứu người bị điện giật: ngắt nguồn trước.', 'Tiết kiệm: thiết bị nhãn năng lượng, đèn LED, tắt khi không dùng, tận dụng ánh sáng tự nhiên.'],
      q: `? Thiết bị tự động ngắt điện khi quá tải, ngắn mạch là: | Aptomat | Công tơ | Ổ cắm | Bóng đèn
? Thiết bị chống giật hoạt động dựa trên phát hiện: | Dòng điện rò | Điện áp tăng | Nhiệt độ | Ánh sáng
? Đơn vị đo điện năng tiêu thụ trên công tơ là: | kWh | kW | V | A
? Một bóng đèn 10 W bật 5 giờ tiêu thụ điện năng: | 0,05 kWh | 50 kWh | 0,5 kWh | 2 kWh
? Khi thấy người bị điện giật, việc đầu tiên cần làm là: | Ngắt nguồn điện | Kéo tay người bị nạn ngay | Dội nước | Bỏ đi
+ Đèn LED tiết kiệm điện hơn đèn sợi đốt.
- Có thể dùng tay không kéo người đang bị điện giật ra.
_ Điện năng tiêu thụ: A = P · [t]` },
    { hk: 1, nhan: 'Chương V, VI', ten: 'Kĩ thuật điện tử. Linh kiện điện tử', bai: ['Bài 13. Khái quát về kĩ thuật điện tử', 'Bài 14. Ngành nghề và dịch vụ trong lĩnh vực kĩ thuật điện tử', 'Bài 15. Điện trở, tụ điện và cuộn cảm', 'Bài 16. Diode, transistor và mạch tích hợp', 'Bài 17. Thực hành: Mạch phát hiện ánh sáng'],
      lt: ['<b>Điện trở</b> (Ω): hạn chế, điều chỉnh dòng điện; đọc giá trị bằng vạch màu. <b>Tụ điện</b> (F): tích – phóng điện, ngăn dòng một chiều, cho dòng xoay chiều đi qua. <b>Cuộn cảm</b> (H): cho dòng một chiều đi qua, cản trở dòng xoay chiều.', '<b>Diode</b>: dẫn điện một chiều (anốt → catốt); dùng chỉnh lưu. LED là diode phát quang.', '<b>Transistor</b> (B, C, E): khuếch đại, khoá điện tử. <b>IC</b>: mạch tích hợp.', 'Quang trở (LDR): điện trở giảm khi ánh sáng tăng.'],
      q: `? Linh kiện chỉ cho dòng điện đi qua theo một chiều là: | Diode | Điện trở | Tụ điện | Cuộn cảm
? Đơn vị đo điện dung của tụ điện là: | Fara (F) | Ôm (Ω) | Henry (H) | Oát (W)
? Đơn vị đo điện trở là: | Ôm (Ω) | Fara (F) | Henry (H) | Vôn (V)
? Transistor có ba cực là: | B, C, E | A, K, G | P, N, P | L, N, E
? Quang trở có điện trở thay đổi theo: | Cường độ ánh sáng | Nhiệt độ | Từ trường | Âm thanh
+ Tụ điện ngăn dòng điện một chiều.
- Diode cho dòng điện đi qua theo cả hai chiều như nhau.
= Điện trở = Hạn chế dòng điện
= Tụ điện = Tích và phóng điện
= Diode = Chỉnh lưu, dẫn một chiều
= Transistor = Khuếch đại, đóng cắt` },
    { hk: 2, nhan: 'Chương VII, VIII', ten: 'Điện tử tương tự. Điện tử số', bai: ['Bài 18. Giới thiệu về điện tử tương tự', 'Bài 19. Khuếch đại thuật toán', 'Bài 20. Thực hành: Mạch khuếch đại đảo', 'Bài 21. Tín hiệu số và các cổng logic cơ bản', 'Bài 22. Một số mạch xử lí tín hiệu trong điện tử số', 'Bài 23. Thực hành: Lắp ráp mạch điện tử số'],
      lt: ['Tín hiệu <b>tương tự</b> (analog): biến thiên liên tục. Tín hiệu <b>số</b> (digital): hai mức 0 và 1.', '<b>Khuếch đại thuật toán</b> (Op-amp): mạch khuếch đại đảo hệ số K = −R<sub>ht</sub>/R<sub>1</sub>.', 'Cổng logic: AND (Y = A·B), OR (Y = A + B), NOT (Y = Ā), NAND, NOR, XOR.', 'Mạch số: mạch tổ hợp, flip-flop (trigơ), bộ đếm.'],
      q: `? Tín hiệu chỉ có hai mức 0 và 1 là: | Tín hiệu số | Tín hiệu tương tự | Tín hiệu âm thanh | Tín hiệu nhiệt
? Cổng logic cho đầu ra 1 khi tất cả đầu vào đều bằng 1 là: | AND | OR | NOT | NOR
? Cổng NOT với đầu vào 1 cho đầu ra: | 0 | 1 | 2 | Không xác định
? Mạch khuếch đại đảo có R1 = 1 kΩ, Rht = 10 kΩ. Hệ số khuếch đại là: | −10 | 10 | 11 | −0,1
? Cổng OR với hai đầu vào 0 và 1 cho đầu ra: | 1 | 0 | 2 | Không xác định
+ Tín hiệu tương tự biến thiên liên tục theo thời gian.
- Mạch khuếch đại đảo cho tín hiệu ra cùng pha với tín hiệu vào.` },
    { hk: 2, nhan: 'Chương IX', ten: 'Vi điều khiển', bai: ['Bài 24. Khái quát về vi điều khiển', 'Bài 25. Mạch xử lí tín hiệu dùng vi điều khiển', 'Bài 26. Thực hành: Thiết kế, lắp ráp mạch tự động điều khiển đèn'], on: 'Ôn tập cuối năm',
      lt: ['<b>Vi điều khiển</b>: máy tính nhỏ trên một chip (CPU, bộ nhớ, cổng vào/ra), dùng điều khiển thiết bị.', 'Bo mạch phổ biến: Arduino (ATmega328), ESP32, micro:bit. Lập trình bằng Arduino IDE (C/C++) hoặc kéo thả.', 'Ứng dụng: nhà thông minh, đèn tự động, robot, IoT. Cấu trúc chương trình Arduino: <code>setup()</code> chạy 1 lần, <code>loop()</code> lặp lại.'],
      q: `? Arduino Uno sử dụng vi điều khiển: | ATmega328 | Intel Core i7 | Snapdragon | AMD Ryzen
? Trong chương trình Arduino, hàm chạy lặp đi lặp lại là: | loop() | setup() | main() | start()
? Vi điều khiển gồm các thành phần chính: | CPU, bộ nhớ, cổng vào/ra | Chỉ có màn hình | Chỉ có pin | Bàn phím và chuột
+ Hàm setup() trong Arduino chỉ chạy một lần khi khởi động.
- Vi điều khiển không thể lập trình được.` }
  ],
  essays: {
    1: [['Một gia đình dùng: 5 bóng đèn LED 10 W bật 6 giờ/ngày, 1 tủ lạnh 100 W chạy 24 giờ/ngày. Tính điện năng tiêu thụ trong 30 ngày (kWh).', ['81'], 'Đèn: 5 × 10 W × 6 h = 300 Wh/ngày. Tủ lạnh: 100 W × 24 h = 2 400 Wh/ngày. Tổng 2 700 Wh = 2,7 kWh/ngày. 30 ngày: 2,7 × 30 = 81 kWh.'],
      ['Nêu các biện pháp an toàn điện trong gia đình.', ['aptomat', 'nối đất', 'chống giật'], 'Lắp aptomat, thiết bị chống giật (RCD); nối đất vỏ thiết bị kim loại; dây dẫn có vỏ cách điện tốt, ổ cắm ngoài tầm tay trẻ em; không dùng thiết bị điện khi tay ướt; ngắt điện khi sửa chữa; kiểm tra định kì.', 3]],
    2: [['Mạch khuếch đại đảo dùng Op-amp có R1 = 2 kΩ, Rht = 20 kΩ, điện áp vào 0,3 V. Tính hệ số khuếch đại và điện áp ra.', ['-10', '-3'], 'K = −Rht/R1 = −20/2 = −10. Ura = K·Uvào = −10 × 0,3 = −3 V (ngược pha với tín hiệu vào).'],
      ['Lập bảng chân lí của cổng AND và cổng OR hai đầu vào.', ['AND', 'OR', 'bảng chân lí'], 'AND: 00→0, 01→0, 10→0, 11→1. OR: 00→0, 01→1, 10→1, 11→1.']]
  }
});

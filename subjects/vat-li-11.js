/* Vật lí 11 – KNTT. Chương, bài theo mục lục SGK; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'vat-li-11', lop: 11, mon: 'Vật lí', icon: '⚛️', nhan: 'Chương', so: false,
  topics: [
    { hk: 1, nhan: 'Chương I', ten: 'Dao động', bai: ['Bài 1. Dao động điều hoà', 'Bài 2. Mô tả dao động điều hoà', 'Bài 3. Vận tốc, gia tốc trong dao động điều hoà', 'Bài 4. Bài tập về dao động điều hoà', 'Bài 5. Động năng. Thế năng. Sự chuyển hoá năng lượng trong dao động điều hoà', 'Bài 6. Dao động tắt dần. Dao động cưỡng bức. Hiện tượng cộng hưởng', 'Bài 7. Bài tập về sự chuyển hoá năng lượng trong dao động điều hoà'],
      lt: ['Phương trình dao động điều hoà: x = A·cos(ωt + φ); A biên độ, ω tần số góc, φ pha ban đầu.', 'Chu kì T = 2π/ω; tần số f = 1/T. Vận tốc cực đại v_max = ωA; gia tốc a = −ω²x, a_max = ω²A.', 'Con lắc lò xo: ω = √(k/m); con lắc đơn: T = 2π√(l/g).', 'Cơ năng W = ½kA² = ½mω²A² (không đổi). Dao động tắt dần, cưỡng bức; <b>cộng hưởng</b> khi tần số lực cưỡng bức bằng tần số riêng.'],
      q: `? Trong phương trình x = A·cos(ωt + φ), A là: | Biên độ | Tần số góc | Pha ban đầu | Chu kì
? Liên hệ giữa chu kì và tần số là: | T = 1/f | T = f | T = 2πf | T = f²
? Vật dao động với A = 5 cm, ω = 10 rad/s. Tốc độ cực đại là: | 50 cm/s | 2 cm/s | 15 cm/s | 500 cm/s
? Chu kì con lắc đơn phụ thuộc vào: | Chiều dài dây và gia tốc trọng trường | Khối lượng vật nặng | Biên độ nhỏ | Màu sắc vật
? Hiện tượng biên độ dao động cưỡng bức tăng đến cực đại khi tần số ngoại lực bằng tần số riêng là: | Cộng hưởng | Tắt dần | Giao thoa | Nhiễu xạ
? Gia tốc trong dao động điều hoà: | a = −ω²x | a = ωx | a = ω²A luôn | a = 0 luôn
+ Cơ năng của vật dao động điều hoà được bảo toàn.
+ Dao động tắt dần có biên độ giảm dần theo thời gian.
- Chu kì con lắc đơn tỉ lệ thuận với khối lượng vật.
- Tại vị trí cân bằng, gia tốc của vật đạt cực đại.
= T = 2π/ω = Chu kì
= T = 2π√(l/g) = Chu kì con lắc đơn
= ω = √(k/m) = Tần số góc con lắc lò xo
= W = ½kA² = Cơ năng con lắc lò xo
? Chu kì dao động là: | Thời gian thực hiện một dao động toàn phần | Số dao động trong 1 giây | Biên độ dao động | Li độ cực đại
? Tần số có đơn vị là: | héc (Hz) | giây (s) | mét (m) | rad
? Mối liên hệ giữa chu kì T và tần số f là: | T = 1/f | T = f | T = 2f | T = f²
? Dao động tắt dần có: | Biên độ giảm dần theo thời gian | Biên độ tăng dần | Tần số tăng | Năng lượng không đổi
? Hiện tượng cộng hưởng xảy ra khi: | Tần số lực cưỡng bức bằng tần số riêng | Lực cưỡng bức bằng 0 | Biên độ bằng 0 | Không có ma sát
+ Trong dao động điều hoà, cơ năng được bảo toàn.
- Tần số góc ω = 2π/f.
_ Tần số góc: ω = 2π[f]` },
    { hk: 1, nhan: 'Chương II', ten: 'Sóng', bai: ['Bài 8. Mô tả sóng', 'Bài 9. Sóng ngang. Sóng dọc. Sự truyền năng lượng của sóng cơ', 'Bài 10. Thực hành: Đo tần số của sóng âm', 'Bài 11. Sóng điện từ', 'Bài 12. Giao thoa sóng', 'Bài 13. Sóng dừng', 'Bài 14. Bài tập về sóng', 'Bài 15. Thực hành: Đo tốc độ truyền âm'],
      lt: ['Bước sóng λ = v·T = v/f.', '<b>Sóng ngang</b>: phần tử dao động vuông góc phương truyền; <b>sóng dọc</b>: dao động dọc phương truyền (sóng âm trong không khí).', '<b>Sóng điện từ</b> truyền được trong chân không với tốc độ c = 3·10⁸ m/s; thang sóng: sóng vô tuyến, hồng ngoại, ánh sáng nhìn thấy, tử ngoại, tia X, tia gamma.', '<b>Giao thoa</b> ánh sáng (Y-âng): khoảng vân i = λD/a. <b>Sóng dừng</b> trên dây hai đầu cố định: l = kλ/2.'],
      q: `? Bước sóng được tính bằng: | λ = v/f | λ = v·f | λ = f/v | λ = vT²
? Sóng có tần số 50 Hz, tốc độ 10 m/s thì bước sóng là: | 0,2 m | 500 m | 5 m | 60 m
? Sóng âm truyền trong không khí là sóng: | Dọc | Ngang | Điện từ | Không truyền được
? Tốc độ của sóng điện từ trong chân không là: | 3·10⁸ m/s | 340 m/s | 3·10⁵ m/s | 1 500 m/s
? Sóng điện từ có bước sóng ngắn nhất trong các loại sau là: | Tia gamma | Sóng vô tuyến | Hồng ngoại | Ánh sáng đỏ
? Khoảng vân trong thí nghiệm Y-âng là: | i = λD/a | i = λa/D | i = aD/λ | i = λ/aD
+ Sóng điện từ truyền được trong chân không.
+ Sóng dừng trên dây hai đầu cố định có chiều dài bằng số nguyên lần nửa bước sóng.
- Sóng âm truyền được trong chân không.
- Sóng ngang là sóng có phương dao động trùng phương truyền sóng.
> Sóng vô tuyến > Hồng ngoại > Ánh sáng nhìn thấy > Tử ngoại > Tia X > Tia gamma
? Sóng ngang là sóng có phương dao động: | Vuông góc với phương truyền sóng | Trùng phương truyền sóng | Song song mặt đất | Không xác định
? Công thức liên hệ giữa bước sóng, tốc độ và tần số là: | λ = v/f | λ = v·f | λ = f/v | λ = v + f
? Âm thanh không truyền được trong: | Chân không | Không khí | Nước | Thép
? Tốc độ ánh sáng trong chân không xấp xỉ: | 3·10⁸ m/s | 340 m/s | 3·10⁵ m/s | 1500 m/s
? Trong sóng dừng, khoảng cách giữa hai nút liên tiếp bằng: | Nửa bước sóng | Một bước sóng | Một phần tư bước sóng | Hai bước sóng
? Hiện tượng hai sóng kết hợp gặp nhau tạo vân sáng tối xen kẽ là: | Giao thoa | Tán sắc | Phản xạ | Khúc xạ
- Sóng âm trong không khí là sóng ngang.
= Sóng vô tuyến = Bước sóng dài nhất trong thang sóng điện từ
= Tia hồng ngoại = Tác dụng nhiệt
= Tia tử ngoại = Diệt khuẩn, gây sạm da
= Tia X = Chụp chiếu trong y tế` },
    { hk: 2, nhan: 'Chương III', ten: 'Điện trường', bai: ['Bài 16. Lực tương tác giữa các điện tích', 'Bài 17. Khái niệm điện trường', 'Bài 18. Điện trường đều', 'Bài 19. Thế năng điện', 'Bài 20. Điện thế', 'Bài 21. Tụ điện'],
      lt: ['<b>Định luật Coulomb</b>: F = k·|q₁q₂|/r² (k = 9·10⁹ N·m²/C²).', 'Cường độ điện trường E = F/q; điện tích điểm: E = k|Q|/r². Điện trường đều: E = U/d.', 'Điện thế V = A/q; hiệu điện thế U_MN = V_M − V_N.', '<b>Tụ điện</b>: điện dung C = Q/U (F); năng lượng W = ½CU². Tụ ghép song song: C = C₁ + C₂; nối tiếp: 1/C = 1/C₁ + 1/C₂.'],
      q: `? Định luật Coulomb: lực tương tác giữa hai điện tích điểm tỉ lệ nghịch với: | Bình phương khoảng cách | Khoảng cách | Tích điện tích | Hằng số k
? Hai điện tích cùng dấu thì: | Đẩy nhau | Hút nhau | Không tương tác | Trung hoà
? Điện trường đều giữa hai bản cách nhau 0,02 m, hiệu điện thế 100 V có cường độ: | 5 000 V/m | 2 V/m | 50 V/m | 200 V/m
? Đơn vị của điện dung là: | Fara (F) | Vôn (V) | Culông (C) | Oát (W)
? Tụ 2 μF tích điện ở 10 V có điện tích: | 20 μC | 5 μC | 0,2 μC | 12 μC
+ Đường sức điện của điện trường đều là các đường thẳng song song cách đều.
- Hai điện tích trái dấu đẩy nhau.
= F = k|q₁q₂|/r² = Định luật Coulomb
= E = U/d = Điện trường đều
= C = Q/U = Điện dung
= W = ½CU² = Năng lượng tụ điện
? Theo định luật Cu-lông, lực tương tác giữa hai điện tích: | Tỉ lệ nghịch với bình phương khoảng cách | Tỉ lệ thuận với khoảng cách | Không phụ thuộc khoảng cách | Tỉ lệ nghịch với khoảng cách
? Đơn vị của cường độ điện trường là: | V/m | V | C | F
? Năng lượng của tụ điện tích điện được tính bằng: | W = C·U²/2 | W = C·U | W = U/C | W = Q·C
? Đường sức điện của điện tích dương có hướng: | Đi ra từ điện tích | Đi vào điện tích | Khép kín | Tròn quanh điện tích
+ Tụ điện là hệ hai vật dẫn đặt gần nhau, ngăn cách bởi lớp cách điện.` },
    { hk: 2, nhan: 'Chương IV', ten: 'Dòng điện. Mạch điện', bai: ['Bài 22. Cường độ dòng điện', 'Bài 23. Điện trở. Định luật Ohm', 'Bài 24. Nguồn điện', 'Bài 25. Năng lượng và công suất điện', 'Bài 26. Thực hành: Đo suất điện động và điện trở trong của pin điện hoá'],
      lt: ['Cường độ dòng điện I = Δq/Δt (A).', 'Điện trở R = ρl/S; phụ thuộc nhiệt độ. Định luật Ohm cho toàn mạch: I = E/(R + r).', 'Nguồn điện có suất điện động E và điện trở trong r; U = E − I·r.', 'Năng lượng điện A = UIt; công suất P = UI = I²R = U²/R.'],
      q: `? Định luật Ohm cho toàn mạch: | I = E/(R + r) | I = U/R + r | I = E·(R + r) | I = R/E
? Nguồn E = 12 V, r = 1 Ω, mạch ngoài R = 5 Ω. Cường độ dòng điện là: | 2 A | 12 A | 2,4 A | 6 A
? Công suất tiêu thụ trên điện trở R = 10 Ω khi I = 2 A là: | 40 W | 20 W | 5 W | 200 W
? Điện trở của dây kim loại khi nhiệt độ tăng thì: | Tăng | Giảm | Không đổi | Bằng 0
+ Hiệu điện thế mạch ngoài U = E − Ir.
- Điện trở dây dẫn tỉ lệ thuận với tiết diện dây.
= I = Δq/Δt = Cường độ dòng điện
= R = ρl/S = Điện trở dây dẫn
= P = UI = Công suất điện
= U = E − Ir = Hiệu điện thế mạch ngoài
? Cường độ dòng điện có đơn vị là: | ampe (A) | vôn (V) | ôm (Ω) | oát (W)
? Định luật Ôm cho đoạn mạch: | I = U/R | I = U·R | I = R/U | I = U + R
? Điện trở 10 Ω mắc vào hiệu điện thế 20 V. Cường độ dòng điện là: | 2 A | 200 A | 0,5 A | 30 A
? Hai điện trở 4 Ω và 6 Ω mắc nối tiếp có điện trở tương đương: | 10 Ω | 2,4 Ω | 24 Ω | 2 Ω
? Công suất tiêu thụ của đoạn mạch là: | P = U·I | P = U/I | P = I/U | P = U + I
? Điện trở của dây kim loại tăng khi: | Nhiệt độ tăng | Nhiệt độ giảm | Dây ngắn lại | Tiết diện tăng
+ Suất điện động đặc trưng cho khả năng thực hiện công của nguồn điện.
- Hai điện trở mắc song song có điện trở tương đương lớn hơn mỗi điện trở thành phần.
_ Định luật Ôm toàn mạch: I = E / (R + [r])` }
  ],
  essays: {
    1: [['Một con lắc lò xo có k = 100 N/m, m = 0,25 kg dao động với biên độ 4 cm. Tính tần số góc, chu kì và cơ năng.', ['20', '0,314', '0,08'], 'ω = √(k/m) = √(100/0,25) = 20 rad/s; T = 2π/ω ≈ 0,314 s; W = ½kA² = ½·100·0,04² = 0,08 J.'],
      ['Sóng trên mặt nước có tần số 20 Hz, khoảng cách giữa 5 gợn lồi liên tiếp là 8 cm. Tính bước sóng và tốc độ truyền sóng.', ['2', '40'], '5 gợn lồi liên tiếp cách nhau 4λ = 8 cm → λ = 2 cm; v = λf = 2·20 = 40 cm/s.']],
    2: [['Hai điện tích q₁ = 2·10⁻⁶ C, q₂ = 3·10⁻⁶ C đặt cách nhau 0,3 m trong chân không. Tính lực tương tác.', ['0,6'], 'F = k|q₁q₂|/r² = 9·10⁹·6·10⁻¹²/0,09 = 0,6 N; hai điện tích cùng dấu nên đẩy nhau.'],
      ['Nguồn điện E = 9 V, r = 1 Ω mắc với điện trở R = 8 Ω. Tính cường độ dòng điện, hiệu điện thế mạch ngoài và công suất tiêu thụ ở R.', ['1', '8'], 'I = E/(R + r) = 9/9 = 1 A; U = IR = 8 V; P = I²R = 8 W.']]
  }
});

/* Khoa học tự nhiên 9 – KNTT. Chương, bài theo mục lục SGK; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'khtn-9', lop: 9, mon: 'Khoa học tự nhiên', icon: '🔬', nhan: 'Chương', so: false,
  topics: [
    { hk: 1, nhan: 'Mở đầu – Chương I', ten: 'Năng lượng cơ học', bai: ['Bài 1. Nhận biết một số dụng cụ, hoá chất. Thuyết trình một vấn đề khoa học', 'Bài 2. Động năng. Thế năng', 'Bài 3. Cơ năng', 'Bài 4. Công và công suất'],
      lt: ['<b>Động năng</b> W_đ = ½·m·v² (J); <b>thế năng trọng trường</b> W_t = P·h = 10·m·h (J).', '<b>Cơ năng</b> W = W_đ + W_t; khi bỏ qua ma sát, cơ năng được bảo toàn (động năng và thế năng chuyển hoá cho nhau).', '<b>Công</b> A = F·s (J); <b>công suất</b> P = A/t (W). 1 kW = 1 000 W; 1 HP ≈ 746 W.'],
      q: `? Công thức tính động năng là: | W_đ = ½·m·v² | W_đ = m·g·h | W_đ = F·s | W_đ = A/t
? Vật khối lượng 2 kg chuyển động với vận tốc 3 m/s có động năng: | 9 J | 6 J | 18 J | 3 J
? Vật khối lượng 5 kg ở độ cao 2 m (lấy P = 10m) có thế năng trọng trường: | 100 J | 10 J | 50 J | 7 J
? Công thức tính công suất là: | P = A/t | P = A·t | P = F/s | P = m·v
? Lực 50 N kéo vật đi 4 m theo phương của lực thực hiện công: | 200 J | 54 J | 12,5 J | 46 J
? Máy thực hiện công 6 000 J trong 30 s có công suất: | 200 W | 180 000 W | 6 030 W | 20 W
+ Khi vật rơi tự do, thế năng giảm, động năng tăng.
+ Đơn vị của công suất là oát (W).
- Vật đứng yên luôn có động năng lớn nhất.
- Cơ năng luôn tăng khi có ma sát.
= W_đ = ½mv² = Động năng
= W_t = Ph = Thế năng trọng trường
= A = F·s = Công cơ học
= P = A/t = Công suất` },
    { hk: 1, nhan: 'Chương II', ten: 'Ánh sáng', bai: ['Bài 5. Khúc xạ ánh sáng', 'Bài 6. Phản xạ toàn phần', 'Bài 7. Lăng kính', 'Bài 8. Thấu kính', 'Bài 9. Thực hành đo tiêu cự của thấu kính hội tụ', 'Bài 10. Kính lúp. Bài tập thấu kính'],
      lt: ['<b>Khúc xạ ánh sáng</b>: tia sáng bị gãy khúc tại mặt phân cách khi truyền xiên góc từ môi trường trong suốt này sang môi trường khác. Chiết suất n = c/v.', '<b>Phản xạ toàn phần</b>: xảy ra khi ánh sáng đi từ môi trường chiết quang hơn sang kém hơn và góc tới ≥ góc giới hạn; ứng dụng: <b>cáp quang</b>.', '<b>Lăng kính</b> phân tích ánh sáng trắng thành dải màu (đỏ, cam, vàng, lục, lam, chàm, tím).', '<b>Thấu kính hội tụ</b> (rìa mỏng) hội tụ chùm sáng song song tại tiêu điểm; <b>thấu kính phân kì</b> (rìa dày) luôn cho ảnh ảo, nhỏ hơn vật.', '<b>Kính lúp</b>: thấu kính hội tụ tiêu cự ngắn; số bội giác G = 25/f (f tính bằng cm).'],
      q: `? Hiện tượng tia sáng bị gãy khúc khi truyền xiên góc qua mặt phân cách hai môi trường là: | Khúc xạ ánh sáng | Phản xạ ánh sáng | Tán sắc | Nhiễu xạ
? Cáp quang hoạt động dựa trên hiện tượng: | Phản xạ toàn phần | Khúc xạ ánh sáng thông thường | Tán sắc | Hấp thụ ánh sáng
? Ánh sáng trắng qua lăng kính bị phân tích thành: | Dải màu từ đỏ đến tím | Ánh sáng đỏ | Ánh sáng đen | Ánh sáng trắng sáng hơn
? Thấu kính hội tụ có đặc điểm: | Phần rìa mỏng hơn phần giữa | Phần rìa dày hơn phần giữa | Hai mặt phẳng | Không cho ánh sáng đi qua
? Thấu kính phân kì luôn cho ảnh: | Ảo, nhỏ hơn vật | Thật, lớn hơn vật | Thật, ngược chiều | Ảo, lớn hơn vật
? Kính lúp có tiêu cự 5 cm thì số bội giác là: | 5x | 25x | 2,5x | 125x
+ Chiết suất của môi trường n = c/v.
+ Kính lúp là thấu kính hội tụ có tiêu cự ngắn.
- Thấu kính phân kì có phần rìa mỏng hơn phần giữa.
- Phản xạ toàn phần xảy ra khi ánh sáng đi từ không khí vào nước.
= Thấu kính hội tụ = Rìa mỏng, hội tụ chùm sáng
= Thấu kính phân kì = Rìa dày, ảnh ảo nhỏ hơn vật
= Lăng kính = Phân tích ánh sáng trắng
= Cáp quang = Phản xạ toàn phần
> Đỏ > Cam > Vàng > Lục > Lam > Chàm > Tím` },
    { hk: 1, nhan: 'Chương III, IV', ten: 'Điện và điện từ', bai: ['Bài 11. Điện trở. Định luật Ohm', 'Bài 12. Đoạn mạch nối tiếp, song song', 'Bài 13. Năng lượng của dòng điện và công suất điện', 'Bài 14. Cảm ứng điện từ. Nguyên tắc tạo ra dòng điện xoay chiều', 'Bài 15. Tác dụng của dòng điện xoay chiều'],
      lt: ['<b>Định luật Ohm</b>: I = U/R. Điện trở dây dẫn R = ρ·l/S.', '<b>Nối tiếp</b>: I = I₁ = I₂; U = U₁ + U₂; R = R₁ + R₂. <b>Song song</b>: U = U₁ = U₂; I = I₁ + I₂; 1/R = 1/R₁ + 1/R₂.', '<b>Công suất điện</b> P = U·I; <b>năng lượng điện</b> W = P·t (1 kWh = 3,6 × 10⁶ J).', '<b>Cảm ứng điện từ</b>: số đường sức từ qua cuộn dây biến thiên → xuất hiện dòng điện cảm ứng; máy phát điện xoay chiều.', 'Dòng điện xoay chiều có tác dụng nhiệt, quang, từ, sinh lí.'],
      q: `? Biểu thức định luật Ohm là: | I = U/R | I = U·R | I = R/U | U = I/R
? Đặt U = 12 V vào điện trở R = 4 Ω, cường độ dòng điện là: | 3 A | 48 A | 16 A | 0,33 A
? Hai điện trở 10 Ω và 20 Ω mắc nối tiếp có điện trở tương đương: | 30 Ω | 10 Ω | 6,67 Ω | 200 Ω
? Hai điện trở 6 Ω và 3 Ω mắc song song có điện trở tương đương: | 2 Ω | 9 Ω | 18 Ω | 3 Ω
? Bóng đèn ghi 220 V – 100 W sáng bình thường trong 5 giờ tiêu thụ: | 0,5 kWh | 500 kWh | 20 kWh | 1,1 kWh
? Hiện tượng xuất hiện dòng điện cảm ứng khi số đường sức từ qua cuộn dây biến thiên là: | Cảm ứng điện từ | Nhiễm điện do cọ xát | Khúc xạ | Điện phân
+ Trong đoạn mạch song song, hiệu điện thế giữa hai đầu các điện trở bằng nhau.
+ Máy phát điện xoay chiều hoạt động dựa trên hiện tượng cảm ứng điện từ.
- Trong đoạn mạch nối tiếp, cường độ dòng điện qua các điện trở khác nhau.
- 1 kWh bằng 1 000 J.
= I = U/R = Định luật Ohm
= P = U·I = Công suất điện
= W = P·t = Năng lượng điện tiêu thụ
= R = R₁ + R₂ = Điện trở tương đương mạch nối tiếp` },
    { hk: 1, nhan: 'Chương V, VI', ten: 'Năng lượng với cuộc sống. Kim loại', bai: ['Bài 16. Vòng năng lượng trên Trái Đất. Năng lượng hoá thạch', 'Bài 17. Một số dạng năng lượng tái tạo', 'Bài 18. Tính chất chung của kim loại', 'Bài 19. Dãy hoạt động hoá học', 'Bài 20. Tách kim loại và việc sử dụng hợp kim', 'Bài 21. Sự khác nhau cơ bản giữa phi kim và kim loại'],
      lt: ['Năng lượng hoá thạch: than đá, dầu mỏ, khí tự nhiên — không tái tạo, gây ô nhiễm. Năng lượng tái tạo: mặt trời, gió, nước, sinh khối, địa nhiệt.', 'Kim loại: dẫn điện, dẫn nhiệt, có ánh kim, dẻo; tác dụng với oxygen, phi kim, acid, dung dịch muối.', '<b>Dãy hoạt động hoá học</b>: K, Na, Ca, Mg, Al, Zn, Fe, Pb, (H), Cu, Ag, Au. Kim loại đứng trước H đẩy được H khỏi acid; kim loại mạnh đẩy kim loại yếu khỏi dung dịch muối.', 'Tách kim loại: điện phân nóng chảy (Al, Na), dùng chất khử (C, CO, H₂) cho Fe, Cu…; hợp kim: gang, thép, inox, đuyra.'],
      q: `? Nguồn năng lượng nào là năng lượng tái tạo? | Năng lượng gió | Than đá | Dầu mỏ | Khí tự nhiên
? Kim loại dẫn điện tốt nhất là: | Bạc | Sắt | Nhôm | Chì
? Kim loại nào KHÔNG tác dụng với dung dịch HCl? | Cu | Zn | Fe | Mg
? Theo dãy hoạt động hoá học, kim loại hoạt động mạnh nhất trong các kim loại sau là: | K | Fe | Cu | Ag
? Sắt tác dụng với dung dịch CuSO₄ tạo thành: | FeSO₄ và Cu | Fe₂(SO₄)₃ và Cu | Không phản ứng | CuO và Fe
? Nhôm được sản xuất trong công nghiệp bằng phương pháp: | Điện phân nóng chảy | Dùng CO khử | Nhiệt phân | Hoà tan trong nước
? Thép là hợp kim của sắt với: | Carbon (dưới 2%) | Đồng | Nhôm | Vàng
+ Kim loại đứng trước H trong dãy hoạt động có thể đẩy H khỏi dung dịch acid.
+ Năng lượng hoá thạch là nguồn năng lượng không tái tạo.
- Đồng tác dụng với dung dịch HCl giải phóng khí H₂.
- Phi kim dẫn điện tốt hơn kim loại.
> K > Na > Mg > Al > Zn > Fe > Cu > Ag > Au
# Năng lượng tái tạo: Mặt trời, Gió, Nước, Sinh khối
# Năng lượng hoá thạch: Than đá, Dầu mỏ, Khí tự nhiên
= Gang = Hợp kim sắt – carbon (2–5% C)
= Inox = Thép không gỉ
= Đuyra = Hợp kim nhẹ của nhôm` },
    { hk: 2, nhan: 'Chương VII, VIII', ten: 'Chất hữu cơ. Hydrocarbon. Ethylic alcohol và acetic acid', bai: ['Bài 22. Giới thiệu về hợp chất hữu cơ', 'Bài 23. Alkane', 'Bài 24. Alkene', 'Bài 25. Nguồn nhiên liệu', 'Bài 26. Ethylic alcohol', 'Bài 27. Acetic acid'],
      lt: ['<b>Hợp chất hữu cơ</b>: hợp chất của carbon (trừ CO, CO₂, H₂CO₃, muối carbonate…). Hydrocarbon chỉ gồm C và H.', '<b>Alkane</b>: chỉ có liên kết đơn, CₙH₂ₙ₊₂ (methane CH₄); phản ứng cháy, phản ứng thế với Cl₂.', '<b>Alkene</b>: có một liên kết đôi C=C, CₙH₂ₙ (ethylene C₂H₄); phản ứng cộng (làm mất màu nước bromine), trùng hợp tạo PE.', '<b>Ethylic alcohol</b> C₂H₅OH: chất lỏng, tan vô hạn trong nước; độ rượu = số mL rượu nguyên chất trong 100 mL hỗn hợp.', '<b>Acetic acid</b> CH₃COOH: giấm ăn 2–5%; làm quỳ tím hoá đỏ; phản ứng ester hoá với alcohol.'],
      q: `? Công thức phân tử của methane là: | CH₄ | C₂H₄ | C₂H₆ | C₂H₅OH
? Công thức của ethylene là: | C₂H₄ | CH₄ | C₂H₂ | C₂H₆
? Chất làm mất màu dung dịch nước bromine là: | Ethylene | Methane | Ethane | Carbon dioxide
? Công thức hoá học của ethylic alcohol là: | C₂H₅OH | CH₃COOH | CH₄ | C₆H₁₂O₆
? Giấm ăn là dung dịch acetic acid có nồng độ khoảng: | 2–5% | 50% | 90% | 0,01%
? Rượu 40° nghĩa là: | 100 mL rượu có 40 mL ethylic alcohol nguyên chất | 100 mL rượu có 40 g nước | Rượu ở 40 °C | 40 mL rượu có 100 mL alcohol
? Công thức chung của alkane là: | CₙH₂ₙ₊₂ | CₙH₂ₙ | CₙH₂ₙ₋₂ | CₙHₙ
+ CO₂ không được xếp vào hợp chất hữu cơ.
+ Trùng hợp ethylene tạo thành polyethylene (PE).
- Methane có liên kết đôi trong phân tử.
- Acetic acid làm quỳ tím hoá xanh.
= CH₄ = Methane
= C₂H₄ = Ethylene
= C₂H₅OH = Ethylic alcohol
= CH₃COOH = Acetic acid` },
    { hk: 2, nhan: 'Chương IX, X', ten: 'Lipid, carbohydrate, protein, polymer. Khai thác tài nguyên từ vỏ Trái Đất', bai: ['Bài 28. Lipid', 'Bài 29. Carbohydrate. Glucose và saccharose', 'Bài 30. Tinh bột và cellulose', 'Bài 31. Protein', 'Bài 32. Polymer', 'Bài 33. Sơ lược về hoá học vỏ Trái Đất và khai thác tài nguyên từ vỏ Trái Đất', 'Bài 34. Khai thác đá vôi. Công nghiệp silicate', 'Bài 35. Khai thác nhiên liệu hoá thạch. Nguồn carbon. Chu trình carbon và sự ấm lên toàn cầu'],
      lt: ['<b>Lipid</b> (chất béo): ester của glycerol và acid béo; không tan trong nước.', '<b>Glucose</b> C₆H₁₂O₆ (có trong quả chín, phản ứng tráng bạc); <b>saccharose</b> C₁₂H₂₂O₁₁ (đường mía); <b>tinh bột, cellulose</b> (C₆H₁₀O₅)ₙ; tinh bột + iodine → màu xanh tím.', '<b>Protein</b>: cấu tạo từ amino acid; bị đông tụ khi đun nóng.', '<b>Polymer</b>: phân tử khối lớn, gồm nhiều mắt xích: PE, PVC, cao su, tơ.', 'Đá vôi CaCO₃ → vôi sống CaO; công nghiệp silicate: gốm sứ, thuỷ tinh, xi măng. Đốt nhiên liệu hoá thạch thải CO₂ → hiệu ứng nhà kính, ấm lên toàn cầu.'],
      q: `? Công thức phân tử của glucose là: | C₆H₁₂O₆ | C₁₂H₂₂O₁₁ | (C₆H₁₀O₅)ₙ | C₂H₅OH
? Đường mía (saccharose) có công thức: | C₁₂H₂₂O₁₁ | C₆H₁₂O₆ | CH₃COOH | C₂H₄
? Nhỏ dung dịch iodine vào hồ tinh bột thấy xuất hiện màu: | Xanh tím | Đỏ | Vàng | Không màu
? Protein được cấu tạo từ các: | Amino acid | Glucose | Acid béo | Ethylene
? Lòng trắng trứng đông lại khi đun nóng là hiện tượng: | Đông tụ protein | Thuỷ phân tinh bột | Lên men | Xà phòng hoá
? Nung đá vôi (CaCO₃) thu được: | CaO và CO₂ | Ca và CO₂ | CaO và O₂ | Ca(OH)₂
? Khí gây hiệu ứng nhà kính chủ yếu là: | CO₂ | O₂ | N₂ | H₂
+ Chất béo không tan trong nước.
+ Thuỷ tinh, gốm sứ, xi măng là sản phẩm của công nghiệp silicate.
- Cellulose có phản ứng tráng bạc giống glucose.
- Polymer có phân tử khối rất nhỏ.
= Glucose = Có trong quả nho chín
= Saccharose = Có trong cây mía
= Tinh bột = Có trong gạo, ngô, khoai
= Cellulose = Thành phần chính của bông, gỗ
= PE = Polymer làm túi ni-lông` },
    { hk: 2, nhan: 'Chương XI, XII', ten: 'Di truyền học Mendel. Di truyền nhiễm sắc thể', bai: ['Bài 36. Khái quát về di truyền học', 'Bài 37. Các quy luật di truyền của Mendel', 'Bài 38. Nucleic acid và gene', 'Bài 39. Tái bản DNA và phiên mã tạo RNA', 'Bài 40. Dịch mã và mối quan hệ từ gene đến tính trạng', 'Bài 41. Đột biến gene', 'Bài 42. Nhiễm sắc thể và bộ nhiễm sắc thể', 'Bài 43. Nguyên phân và giảm phân', 'Bài 44. Nhiễm sắc thể giới tính và cơ chế xác định giới tính', 'Bài 45. Di truyền liên kết', 'Bài 46. Đột biến nhiễm sắc thể'],
      lt: ['<b>Mendel</b> thí nghiệm trên cây đậu Hà Lan; quy luật <b>phân li</b> (F₂ tỉ lệ 3 trội : 1 lặn), quy luật <b>phân li độc lập</b> (F₂ 9 : 3 : 3 : 1).', '<b>DNA</b>: chuỗi xoắn kép, 4 loại nucleotide A, T, G, C; nguyên tắc bổ sung A – T, G – C. <b>RNA</b>: A, U, G, C.', 'Tái bản DNA → phiên mã (DNA → mRNA) → dịch mã (mRNA → protein) → tính trạng.', '<b>Nguyên phân</b>: 1 tế bào → 2 tế bào con giống hệt (2n). <b>Giảm phân</b>: 1 tế bào (2n) → 4 tế bào con (n), tạo giao tử.', 'Người: 2n = 46; nam XY, nữ XX. Đột biến gene, đột biến cấu trúc và số lượng NST (hội chứng Down: 3 NST số 21).'],
      q: `? Mendel tiến hành thí nghiệm trên đối tượng: | Đậu Hà Lan | Ruồi giấm | Chuột | Lúa nước
? Lai một cặp tính trạng (P thuần chủng), F₂ có tỉ lệ kiểu hình: | 3 trội : 1 lặn | 1 : 1 | 9 : 3 : 3 : 1 | 1 : 2 : 1 trội
? Theo nguyên tắc bổ sung trong DNA, A liên kết với: | T | G | C | U
? Trong RNA không có loại nucleotide nào? | T (thymine) | A | G | U
? Bộ nhiễm sắc thể lưỡng bội của người là: | 2n = 46 | 2n = 48 | 2n = 23 | 2n = 44
? Qua giảm phân, từ 1 tế bào 2n tạo ra: | 4 tế bào con n | 2 tế bào con 2n | 4 tế bào con 2n | 1 tế bào n
? Ở người, nam giới có cặp nhiễm sắc thể giới tính: | XY | XX | XO | YY
? Quá trình tổng hợp mRNA từ DNA gọi là: | Phiên mã | Dịch mã | Tái bản | Đột biến
+ Nguyên phân tạo ra hai tế bào con có bộ NST giống hệt tế bào mẹ.
+ Hội chứng Down do có ba nhiễm sắc thể số 21.
- Trong DNA, G liên kết với T.
- Giảm phân tạo ra tế bào con có bộ NST 2n.
= Tái bản = DNA → DNA
= Phiên mã = DNA → mRNA
= Dịch mã = mRNA → protein
= Nguyên phân = 1 tế bào 2n → 2 tế bào 2n
= Giảm phân = 1 tế bào 2n → 4 tế bào n
> Gene (DNA) > mRNA > Protein > Tính trạng` },
    { hk: 2, nhan: 'Chương XIII, XIV', ten: 'Di truyền học với con người và đời sống. Tiến hoá', bai: ['Bài 47. Di truyền học với con người', 'Bài 48. Ứng dụng công nghệ di truyền vào đời sống', 'Bài 49. Khái niệm tiến hoá và các hình thức chọn lọc', 'Bài 50. Cơ chế tiến hoá', 'Bài 51. Sự phát sinh và phát triển sự sống trên Trái Đất'],
      lt: ['Bệnh, tật di truyền: Down, Turner, bạch tạng, mù màu, máu khó đông; tư vấn di truyền, hạn chế kết hôn gần.', 'Công nghệ di truyền: cây trồng, vật nuôi biến đổi gene; sản xuất insulin bằng vi khuẩn; liệu pháp gene; xác định danh tính bằng DNA.', '<b>Tiến hoá</b>: sự thay đổi đặc điểm di truyền của quần thể qua các thế hệ. <b>Chọn lọc tự nhiên</b> (Đác-uyn) và <b>chọn lọc nhân tạo</b>.', 'Sự sống phát sinh từ chất vô cơ → hữu cơ → tế bào nguyên thuỷ → sinh vật ngày càng đa dạng.'],
      q: `? Học thuyết chọn lọc tự nhiên là của: | Đác-uyn | Mendel | Niu-tơn | Pa-xtơ
? Bệnh di truyền liên kết với giới tính X là: | Máu khó đông | Hội chứng Down | Bạch tạng | Cúm
? Ứng dụng công nghệ di truyền để sản xuất hormone insulin chữa bệnh: | Tiểu đường | Cận thị | Sâu răng | Cảm cúm
? Hình thức chọn lọc do con người tiến hành để tạo giống mới là: | Chọn lọc nhân tạo | Chọn lọc tự nhiên | Đột biến | Di nhập gene
+ Kết hôn gần làm tăng nguy cơ mắc bệnh di truyền ở con cháu.
- Tiến hoá là sự thay đổi của một cá thể trong đời sống của nó.
= Đác-uyn = Chọn lọc tự nhiên
= Mendel = Quy luật di truyền
= Chọn lọc nhân tạo = Tạo giống cây trồng, vật nuôi` }
  ],
  essays: {
    1: [['Cho hai điện trở R₁ = 10 Ω và R₂ = 15 Ω mắc nối tiếp vào hiệu điện thế 12 V. Tính điện trở tương đương, cường độ dòng điện và hiệu điện thế giữa hai đầu mỗi điện trở.', ['25', '0,48', '4,8', '7,2'], 'R = R₁ + R₂ = 25 Ω; I = U/R = 12/25 = 0,48 A; U₁ = I·R₁ = 4,8 V; U₂ = I·R₂ = 7,2 V.'],
      ['Cho 5,6 g sắt tác dụng hết với dung dịch HCl. Viết phương trình hoá học và tính thể tích khí H₂ thu được ở điều kiện chuẩn (Fe = 56).', ['Fe + 2HCl', '0,1', '2,479'], 'Fe + 2HCl → FeCl₂ + H₂. n(Fe) = 5,6 : 56 = 0,1 mol → n(H₂) = 0,1 mol → V = 0,1 × 24,79 = 2,479 (L).']],
    2: [['Ở đậu Hà Lan, hạt vàng (A) trội hoàn toàn so với hạt xanh (a). Cho P: AA × aa. Xác định kiểu gene, kiểu hình ở F₁ và F₂.', ['Aa', '3 vàng : 1 xanh', '1AA : 2Aa : 1aa'], 'P: AA (vàng) × aa (xanh) → F₁: 100% Aa (vàng). F₁ × F₁: Aa × Aa → F₂: 1AA : 2Aa : 1aa; kiểu hình 3 vàng : 1 xanh.'],
      ['Trình bày tác hại của việc sử dụng nhiên liệu hoá thạch và giải pháp sử dụng năng lượng bền vững.', ['CO₂', 'ấm lên toàn cầu', 'tái tạo', 'tiết kiệm'], 'Tác hại: thải CO₂, SO₂… gây hiệu ứng nhà kính, ấm lên toàn cầu, mưa acid, ô nhiễm không khí; cạn kiệt tài nguyên. Giải pháp: phát triển năng lượng tái tạo (mặt trời, gió, nước), tiết kiệm năng lượng, dùng phương tiện công cộng, trồng rừng.']]
  }
});

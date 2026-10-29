/* Khoa học tự nhiên 8 – KNTT. Chương, bài theo chương trình SGK; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'khtn-8', lop: 8, mon: 'Khoa học tự nhiên', icon: '🔬', nhan: 'Chương', so: false,
  topics: [
    { hk: 1, nhan: 'Mở đầu – Chương I', ten: 'Phản ứng hoá học', bai: ['Bài 1. Sử dụng một số hoá chất, thiết bị cơ bản trong phòng thí nghiệm', 'Bài 2. Phản ứng hoá học', 'Bài 3. Mol và tỉ khối chất khí', 'Bài 4. Dung dịch và nồng độ', 'Bài 5. Định luật bảo toàn khối lượng và phương trình hoá học', 'Bài 6. Tính theo phương trình hoá học', 'Bài 7. Tốc độ phản ứng và chất xúc tác'],
      lt: ['<b>Biến đổi vật lí</b>: không tạo chất mới (nước đá tan); <b>biến đổi hoá học</b>: tạo chất mới (đốt cháy than). Dấu hiệu phản ứng: đổi màu, tạo kết tủa, khí, toả nhiệt/ánh sáng.', '<b>Mol</b>: lượng chất chứa 6,022 × 10²³ hạt. n = m/M; ở điều kiện chuẩn (25 °C, 1 bar) thể tích 1 mol khí là <b>24,79 L</b>: V = 24,79 × n. Tỉ khối d(A/B) = M(A)/M(B); so với không khí: M(A)/29.', '<b>Nồng độ phần trăm</b> C% = m(chất tan)/m(dung dịch) × 100%; <b>nồng độ mol</b> C_M = n/V (mol/L). Độ tan S: số gam chất tan trong 100 g nước tạo dung dịch bão hoà.', '<b>Định luật bảo toàn khối lượng</b>: tổng khối lượng sản phẩm bằng tổng khối lượng chất phản ứng.', 'Tốc độ phản ứng tăng khi tăng nồng độ, nhiệt độ, diện tích bề mặt tiếp xúc, có <b>chất xúc tác</b>.'],
      q: `? Hiện tượng nào là biến đổi hoá học? | Đốt cháy cồn | Nước đá tan thành nước lỏng | Cồn bay hơi | Muối tan trong nước
? 1 mol chất chứa khoảng bao nhiêu hạt? | 6,022 × 10²³ | 6,022 × 10²² | 22,4 | 24,79
? Ở điều kiện chuẩn (25 °C, 1 bar), 1 mol khí chiếm thể tích: | 24,79 L | 22,4 L | 1 L | 29 L
? Khối lượng của 2 mol nước (H₂O, M = 18 g/mol) là: | 36 g | 18 g | 9 g | 20 g
? Hoà tan 10 g muối vào 40 g nước. Nồng độ phần trăm của dung dịch là: | 20% | 25% | 10% | 40%
? Hoà tan 0,5 mol NaCl vào nước được 2 L dung dịch. Nồng độ mol là: | 0,25 M | 1 M | 0,5 M | 4 M
? Khí nào nặng hơn không khí (M ≈ 29)? | CO₂ (M = 44) | H₂ (M = 2) | He (M = 4) | CH₄ (M = 16)
? Đốt cháy 12 g carbon cần 32 g oxygen. Khối lượng CO₂ tạo thành là: | 44 g | 20 g | 32 g | 12 g
? Yếu tố nào KHÔNG làm tăng tốc độ phản ứng? | Giảm nhiệt độ | Tăng nồng độ | Nghiền nhỏ chất rắn | Dùng chất xúc tác
+ Trong phản ứng hoá học, tổng khối lượng các chất được bảo toàn.
+ Chất xúc tác làm tăng tốc độ phản ứng nhưng không bị tiêu hao sau phản ứng.
+ Sự xuất hiện chất kết tủa là một dấu hiệu có phản ứng hoá học xảy ra.
- Muối tan trong nước là biến đổi hoá học.
- Trong phản ứng hoá học, các nguyên tử bị mất đi.
- Ở điều kiện chuẩn, 1 mol khí chiếm 1 lít.
= n = m/M = Số mol theo khối lượng
= V = 24,79 × n = Thể tích khí ở điều kiện chuẩn
= C% = m(ct)/m(dd) × 100% = Nồng độ phần trăm
= C_M = n/V = Nồng độ mol
> Viết sơ đồ phản ứng > Cân bằng số nguyên tử mỗi nguyên tố > Viết phương trình hoá học hoàn chỉnh
# Biến đổi vật lí: Nước đá tan, Cồn bay hơi, Muối tan trong nước, Thuỷ tinh bị vỡ
# Biến đổi hoá học: Đốt cháy than, Sắt bị gỉ, Thức ăn bị ôi thiu, Đốt cháy cồn` },
    { hk: 1, nhan: 'Chương II', ten: 'Một số hợp chất thông dụng', bai: ['Bài 8. Acid', 'Bài 9. Base. Thang pH', 'Bài 10. Oxide', 'Bài 11. Muối', 'Bài 12. Phân bón hoá học'],
      lt: ['<b>Acid</b>: phân tử gồm H liên kết với gốc acid (HCl, H₂SO₄, HNO₃); làm quỳ tím hoá <b>đỏ</b>; tác dụng với kim loại (Fe, Zn…) giải phóng H₂.', '<b>Base</b>: kim loại + nhóm OH (NaOH, KOH, Ca(OH)₂ – base tan là kiềm); làm quỳ tím hoá <b>xanh</b>, phenolphthalein hoá hồng.', '<b>Thang pH</b>: pH < 7 acid; pH = 7 trung tính; pH > 7 base.', '<b>Oxide</b>: hợp chất của một nguyên tố với oxygen: oxide acid (CO₂, SO₂), oxide base (CaO, Na₂O), oxide lưỡng tính (Al₂O₃), oxide trung tính (CO).', '<b>Muối</b>: kim loại liên kết với gốc acid (NaCl, CaCO₃, CuSO₄). Acid + base → muối + nước (phản ứng trung hoà).', '<b>Phân bón</b>: phân đạm (N), phân lân (P), phân kali (K), phân NPK.'],
      q: `? Dung dịch acid làm quỳ tím chuyển sang màu: | Đỏ | Xanh | Không đổi màu | Vàng
? Dung dịch base làm quỳ tím chuyển sang màu: | Xanh | Đỏ | Không đổi màu | Tím đậm
? Dung dịch có pH = 3 là môi trường: | Acid | Base | Trung tính | Không xác định
? Dung dịch có pH = 7 là môi trường: | Trung tính | Acid | Base | Kiềm mạnh
? Công thức hoá học của acid hydrochloric là: | HCl | NaCl | H₂SO₄ | NaOH
? Chất nào là base? | NaOH | HCl | CO₂ | NaCl
? Chất nào là oxide acid? | CO₂ | CaO | NaOH | NaCl
? Phản ứng giữa acid và base tạo thành muối và nước gọi là phản ứng: | Trung hoà | Phân huỷ | Cháy | Oxi hoá
? Phân bón cung cấp nguyên tố nitrogen cho cây là: | Phân đạm | Phân lân | Phân kali | Phân vi sinh
+ Muối ăn có công thức hoá học là NaCl.
+ Kẽm tác dụng với dung dịch HCl giải phóng khí hydrogen.
+ Đá vôi có thành phần chính là CaCO₃.
- Dung dịch NaOH làm quỳ tím hoá đỏ.
- CaO là oxide acid.
- Nước nguyên chất có pH = 1.
# Acid: HCl, H₂SO₄, HNO₃
# Base: NaOH, KOH, Ca(OH)₂
# Muối: NaCl, CaCO₃, CuSO₄
# Oxide: CO₂, CaO, Fe₂O₃
= Phân đạm = Cung cấp nitrogen (N)
= Phân lân = Cung cấp phosphorus (P)
= Phân kali = Cung cấp potassium (K)
= Quỳ tím hoá đỏ = Acid
= Quỳ tím hoá xanh = Base` },
    { hk: 1, nhan: 'Chương III', ten: 'Khối lượng riêng và áp suất', bai: ['Bài 13. Khối lượng riêng', 'Bài 14. Thực hành xác định khối lượng riêng', 'Bài 15. Áp suất trên một bề mặt', 'Bài 16. Áp suất chất lỏng. Áp suất khí quyển', 'Bài 17. Lực đẩy Archimedes'],
      lt: ['<b>Khối lượng riêng</b> D = m/V (kg/m³ hoặc g/cm³). Nước: 1 000 kg/m³ (1 g/cm³).', '<b>Áp suất</b> p = F/S (đơn vị Pa = N/m²). Tăng áp suất: tăng lực ép hoặc giảm diện tích bị ép.', '<b>Áp suất chất lỏng</b> p = d·h (d: trọng lượng riêng N/m³; h: độ sâu). Bình thông nhau chứa cùng chất lỏng đứng yên thì mực chất lỏng ngang nhau.', '<b>Áp suất khí quyển</b> ≈ 760 mmHg ≈ 1,013 × 10⁵ Pa.', '<b>Lực đẩy Archimedes</b> F_A = d·V (V: thể tích phần chất lỏng bị vật chiếm chỗ). Vật nổi khi F_A > P, chìm khi F_A < P, lơ lửng khi F_A = P.'],
      q: `? Công thức tính khối lượng riêng là: | D = m/V | D = V/m | D = m·V | D = F/S
? Khối lượng riêng của nước là: | 1 000 kg/m³ | 100 kg/m³ | 10 kg/m³ | 1 kg/m³
? Một vật có khối lượng 2,7 kg, thể tích 0,001 m³. Khối lượng riêng là: | 2 700 kg/m³ | 270 kg/m³ | 2,7 kg/m³ | 27 000 kg/m³
? Công thức tính áp suất là: | p = F/S | p = F·S | p = S/F | p = m/V
? Lực 200 N tác dụng vuông góc lên diện tích 0,5 m². Áp suất là: | 400 Pa | 100 Pa | 200 Pa | 1 000 Pa
? Lưỡi dao được mài sắc để: | Giảm diện tích bị ép, tăng áp suất | Tăng diện tích bị ép | Giảm lực ép | Giảm áp suất
? Áp suất chất lỏng tăng khi: | Độ sâu tăng | Độ sâu giảm | Diện tích đáy bình tăng | Chất lỏng ít đi
? Lực đẩy Archimedes phụ thuộc vào: | Trọng lượng riêng chất lỏng và thể tích phần chìm | Khối lượng của vật | Hình dạng của vật | Màu sắc của vật
? Vật nổi trên mặt chất lỏng khi: | Lực đẩy Archimedes lớn hơn trọng lượng | Lực đẩy nhỏ hơn trọng lượng | Không có lực đẩy | Vật nặng hơn nước
+ Đơn vị của áp suất là Pa (N/m²).
+ Áp suất khí quyển xấp xỉ 760 mmHg.
+ Mực chất lỏng trong các nhánh bình thông nhau (cùng chất lỏng, đứng yên) luôn ngang nhau.
- Càng xuống sâu, áp suất chất lỏng càng giảm.
- Lực đẩy Archimedes có hướng thẳng đứng từ trên xuống.
= D = m/V = Khối lượng riêng
= p = F/S = Áp suất trên một bề mặt
= p = d·h = Áp suất chất lỏng
= F_A = d·V = Lực đẩy Archimedes` },
    { hk: 1, nhan: 'Chương IV', ten: 'Tác dụng làm quay của lực', bai: ['Bài 18. Tác dụng làm quay của lực. Moment lực', 'Bài 19. Đòn bẩy và ứng dụng'],
      lt: ['<b>Moment lực</b> M = F·d (d: khoảng cách từ trục quay đến giá của lực) — đặc trưng cho tác dụng làm quay.', '<b>Đòn bẩy</b> gồm điểm tựa O, lực tác dụng F₁, F₂. Khi OO₁ > OO₂ thì F₁ < F₂ (được lợi về lực).', 'Ba loại đòn bẩy: điểm tựa ở giữa (bập bênh, kéo cắt), vật ở giữa (xe cút kít), lực ở giữa (cần câu, gắp thức ăn).'],
      q: `? Moment lực được tính bằng: | M = F·d | M = F/d | M = F + d | M = d/F
? Để vặn ốc dễ hơn, người ta dùng cờ lê có cán: | Dài hơn | Ngắn hơn | Bằng nhựa | Tròn hơn
? Dụng cụ nào là đòn bẩy có điểm tựa ở giữa? | Cái kéo | Xe cút kít | Cần câu cá | Kẹp gắp đá
? Muốn được lợi về lực khi dùng đòn bẩy thì khoảng cách từ điểm tựa đến lực tác dụng phải: | Lớn hơn khoảng cách từ điểm tựa đến vật | Nhỏ hơn | Bằng nhau | Bằng 0
+ Khoảng cách từ trục quay đến giá của lực càng lớn thì tác dụng làm quay càng mạnh.
- Lực có giá đi qua trục quay sẽ làm vật quay mạnh nhất.
# Điểm tựa ở giữa: Bập bênh, Cái kéo, Kìm
# Vật ở giữa: Xe cút kít, Dụng cụ mở nắp chai
# Lực ở giữa: Cần câu cá, Kẹp gắp thức ăn` },
    { hk: 2, nhan: 'Chương V', ten: 'Điện', bai: ['Bài 20. Hiện tượng nhiễm điện do cọ xát', 'Bài 21. Dòng điện, nguồn điện', 'Bài 22. Mạch điện đơn giản', 'Bài 23. Tác dụng của dòng điện', 'Bài 24. Cường độ dòng điện và hiệu điện thế', 'Bài 25. Thực hành đo cường độ dòng điện và hiệu điện thế'],
      lt: ['Cọ xát làm vật nhiễm điện; hai vật nhiễm điện <b>cùng loại thì đẩy nhau, khác loại thì hút nhau</b>.', '<b>Dòng điện</b> là dòng chuyển dời có hướng của các hạt mang điện; quy ước chiều dòng điện từ cực dương qua dây dẫn đến cực âm.', 'Vật dẫn điện: kim loại, dung dịch muối; vật cách điện: nhựa, sứ, cao su, thuỷ tinh khô.', 'Tác dụng của dòng điện: nhiệt, phát sáng, từ, hoá học, sinh lí.', '<b>Cường độ dòng điện</b> I (A), đo bằng <b>ampe kế</b> mắc nối tiếp; <b>hiệu điện thế</b> U (V), đo bằng <b>vôn kế</b> mắc song song.'],
      q: `? Hai vật nhiễm điện cùng loại khi đặt gần nhau sẽ: | Đẩy nhau | Hút nhau | Không tương tác | Dính chặt vào nhau
? Chiều dòng điện quy ước là chiều: | Từ cực dương qua dây dẫn đến cực âm | Từ cực âm đến cực dương | Ngẫu nhiên | Chiều chuyển động của electron
? Vật liệu nào là vật dẫn điện? | Đồng | Nhựa | Sứ | Cao su
? Dụng cụ đo cường độ dòng điện là: | Ampe kế | Vôn kế | Nhiệt kế | Lực kế
? Vôn kế được mắc như thế nào với dụng cụ cần đo hiệu điện thế? | Song song | Nối tiếp | Không cần mắc | Mắc vào một cực
? Đơn vị của hiệu điện thế là: | Vôn (V) | Ampe (A) | Oát (W) | Jun (J)
? Bóng đèn sợi đốt sáng lên là do tác dụng nào của dòng điện? | Nhiệt và phát sáng | Hoá học | Sinh lí | Từ
? Mạ vàng đồ trang sức là ứng dụng tác dụng nào của dòng điện? | Hoá học | Nhiệt | Từ | Sinh lí
+ Ampe kế được mắc nối tiếp với dụng cụ cần đo.
+ Thước nhựa cọ xát vào vải khô có thể hút các mẩu giấy vụn.
- Nhựa và cao su là vật dẫn điện tốt.
- Đơn vị của cường độ dòng điện là vôn.
= Ampe kế = Đo cường độ dòng điện, mắc nối tiếp
= Vôn kế = Đo hiệu điện thế, mắc song song
= Nam châm điện = Tác dụng từ
= Mạ điện = Tác dụng hoá học
= Bàn là, nồi cơm điện = Tác dụng nhiệt
# Vật dẫn điện: Đồng, Nhôm, Sắt, Dung dịch muối
# Vật cách điện: Nhựa, Sứ, Cao su, Thuỷ tinh khô` },
    { hk: 2, nhan: 'Chương VI', ten: 'Nhiệt', bai: ['Bài 26. Năng lượng nhiệt và nội năng', 'Bài 27. Thực hành đo năng lượng nhiệt bằng joulemeter', 'Bài 28. Sự truyền nhiệt', 'Bài 29. Sự nở vì nhiệt'],
      lt: ['<b>Nội năng</b> là tổng động năng và thế năng của các phân tử cấu tạo nên vật; nhiệt độ càng cao, các phân tử chuyển động càng nhanh.', 'Ba hình thức truyền nhiệt: <b>dẫn nhiệt</b> (chủ yếu ở chất rắn), <b>đối lưu</b> (chất lỏng, chất khí), <b>bức xạ nhiệt</b> (truyền được cả trong chân không).', 'Các chất nở ra khi nóng lên, co lại khi lạnh đi; chất khí nở vì nhiệt nhiều nhất, chất rắn ít nhất.'],
      q: `? Hình thức truyền nhiệt chủ yếu ở chất rắn là: | Dẫn nhiệt | Đối lưu | Bức xạ nhiệt | Bay hơi
? Nhiệt từ Mặt Trời truyền đến Trái Đất bằng hình thức: | Bức xạ nhiệt | Dẫn nhiệt | Đối lưu | Ngưng tụ
? Đun nước, nước nóng ở dưới đi lên, nước lạnh đi xuống là hình thức: | Đối lưu | Dẫn nhiệt | Bức xạ | Nóng chảy
? Chất nở vì nhiệt nhiều nhất là: | Chất khí | Chất lỏng | Chất rắn | Như nhau
? Giữa các thanh ray đường sắt có khe hở để: | Tránh ray bị cong khi nở vì nhiệt | Tiết kiệm sắt | Thoát nước mưa | Trang trí
+ Nhiệt độ của vật càng cao thì các phân tử chuyển động càng nhanh.
+ Bức xạ nhiệt có thể truyền trong chân không.
- Dẫn nhiệt là hình thức truyền nhiệt chủ yếu của chất khí.
- Chất rắn nở vì nhiệt nhiều hơn chất khí.
= Dẫn nhiệt = Thìa kim loại nóng dần khi nhúng vào nước sôi
= Đối lưu = Nước trong ấm nóng lên khi đun
= Bức xạ nhiệt = Sưởi ấm bên đống lửa, ánh nắng Mặt Trời` },
    { hk: 2, nhan: 'Chương VII', ten: 'Sinh học cơ thể người', bai: ['Bài 30. Khái quát về cơ thể người', 'Bài 31. Hệ vận động ở người', 'Bài 32. Dinh dưỡng và tiêu hoá ở người', 'Bài 33. Máu và hệ tuần hoàn của cơ thể người', 'Bài 34. Hệ hô hấp ở người', 'Bài 35. Hệ bài tiết ở người', 'Bài 36. Điều hoà môi trường trong của cơ thể người', 'Bài 37. Hệ thần kinh và các giác quan ở người', 'Bài 38. Hệ nội tiết ở người', 'Bài 39. Da và điều hoà thân nhiệt ở người', 'Bài 40. Sinh sản ở người'],
      lt: ['Cơ thể gồm các <b>cơ quan, hệ cơ quan</b> phối hợp: vận động, tiêu hoá, tuần hoàn, hô hấp, bài tiết, thần kinh, nội tiết, sinh dục.', 'Hệ vận động: bộ xương + hệ cơ. Tiêu hoá: ống tiêu hoá (miệng → hầu → thực quản → dạ dày → ruột non → ruột già → hậu môn) và tuyến tiêu hoá; <b>ruột non</b> là nơi hấp thụ chất dinh dưỡng chủ yếu.', 'Máu: huyết tương, hồng cầu (vận chuyển O₂, CO₂), bạch cầu (bảo vệ), tiểu cầu (đông máu). Nhóm máu A, B, AB, O; tim 4 ngăn.', 'Hô hấp: mũi → họng → thanh quản → khí quản → phế quản → phổi (phế nang trao đổi khí).', 'Bài tiết: thận lọc máu tạo nước tiểu. Thần kinh: não, tuỷ sống, dây thần kinh. Nội tiết: tuyến yên, tuyến giáp, tuyến tuỵ (insulin)…'],
      q: `? Chất dinh dưỡng được hấp thụ chủ yếu ở: | Ruột non | Dạ dày | Ruột già | Thực quản
? Tế bào máu có chức năng vận chuyển O₂ và CO₂ là: | Hồng cầu | Bạch cầu | Tiểu cầu | Huyết tương
? Tế bào máu tham gia bảo vệ cơ thể là: | Bạch cầu | Hồng cầu | Tiểu cầu | Tế bào cơ
? Tim người có mấy ngăn? | 4 | 2 | 3 | 5
? Nơi diễn ra trao đổi khí ở phổi là: | Phế nang | Khí quản | Thanh quản | Phế quản
? Cơ quan lọc máu tạo nước tiểu là: | Thận | Gan | Phổi | Tim
? Hormone insulin do tuyến nào tiết ra? | Tuyến tuỵ | Tuyến giáp | Tuyến yên | Tuyến trên thận
? Người có nhóm máu O có thể truyền máu cho: | Mọi nhóm máu (truyền ít, chậm) | Chỉ nhóm O | Chỉ nhóm AB | Không truyền được cho ai
+ Hệ vận động gồm bộ xương và hệ cơ.
+ Tiểu cầu tham gia vào quá trình đông máu.
+ Da tham gia điều hoà thân nhiệt.
- Ruột già là nơi hấp thụ chất dinh dưỡng chủ yếu.
- Hồng cầu có chức năng chính là đông máu.
- Tim người có hai ngăn.
> Miệng > Hầu > Thực quản > Dạ dày > Ruột non > Ruột già
> Mũi > Họng > Thanh quản > Khí quản > Phế quản > Phổi
= Hồng cầu = Vận chuyển khí O₂, CO₂
= Bạch cầu = Bảo vệ cơ thể
= Tiểu cầu = Đông máu
= Thận = Lọc máu, tạo nước tiểu
= Tuyến tuỵ = Tiết insulin điều hoà đường huyết` },
    { hk: 2, nhan: 'Chương VIII', ten: 'Sinh vật và môi trường', bai: ['Bài 41. Môi trường và các nhân tố sinh thái', 'Bài 42. Quần thể sinh vật', 'Bài 43. Quần xã sinh vật', 'Bài 44. Hệ sinh thái', 'Bài 45. Sinh quyển', 'Bài 46. Cân bằng tự nhiên', 'Bài 47. Bảo vệ môi trường'],
      lt: ['Nhân tố sinh thái: <b>vô sinh</b> (ánh sáng, nhiệt độ, nước…) và <b>hữu sinh</b> (các sinh vật, con người).', '<b>Quần thể</b>: các cá thể <b>cùng loài</b> sống trong một khu vực; <b>quần xã</b>: tập hợp nhiều quần thể <b>khác loài</b>.', '<b>Hệ sinh thái</b> = quần xã + môi trường sống (sinh cảnh). Chuỗi thức ăn: sinh vật sản xuất → sinh vật tiêu thụ → sinh vật phân giải.', 'Cân bằng tự nhiên: số lượng cá thể các quần thể dao động ổn định. Bảo vệ môi trường: giảm ô nhiễm, bảo vệ đa dạng sinh học.'],
      q: `? Tập hợp các cá thể cùng loài sống trong một khu vực là: | Quần thể | Quần xã | Hệ sinh thái | Sinh quyển
? Tập hợp nhiều quần thể khác loài cùng sống trong một khu vực là: | Quần xã | Quần thể | Loài | Cá thể
? Nhân tố nào là nhân tố hữu sinh? | Vi khuẩn | Ánh sáng | Nhiệt độ | Độ ẩm
? Trong chuỗi thức ăn, cây xanh là: | Sinh vật sản xuất | Sinh vật tiêu thụ bậc 1 | Sinh vật phân giải | Sinh vật tiêu thụ bậc 2
? Chuỗi thức ăn đúng là: | Cỏ → Châu chấu → Ếch → Rắn | Rắn → Ếch → Cỏ → Châu chấu | Ếch → Cỏ → Rắn → Châu chấu | Châu chấu → Cỏ → Rắn → Ếch
+ Hệ sinh thái gồm quần xã sinh vật và sinh cảnh.
+ Vi sinh vật phân giải xác sinh vật thành chất vô cơ.
- Nhiệt độ là nhân tố sinh thái hữu sinh.
- Quần thể gồm nhiều loài khác nhau.
# Nhân tố vô sinh: Ánh sáng, Nhiệt độ, Độ ẩm, Gió
# Nhân tố hữu sinh: Thực vật, Động vật, Vi sinh vật, Con người
> Cỏ > Châu chấu > Ếch > Rắn > Đại bàng` }
  ],
  essays: {
    1: [['Đốt cháy hoàn toàn 2,4 g magnesium trong khí oxygen tạo thành magnesium oxide (MgO). Viết phương trình hoá học và tính khối lượng MgO tạo thành (Mg = 24, O = 16).', ['2Mg', 'MgO', '0,1', '4'], 'PTHH: 2Mg + O₂ → 2MgO. n(Mg) = 2,4 : 24 = 0,1 mol → n(MgO) = 0,1 mol → m(MgO) = 0,1 × 40 = 4 (g).'],
      ['Một vật có trọng lượng 600 N đặt trên mặt sàn, diện tích tiếp xúc 0,03 m². Tính áp suất vật tác dụng lên sàn. Nêu cách làm tăng áp suất này.', ['p = F/S', '20 000', 'diện tích'], 'p = F/S = 600 : 0,03 = 20 000 (Pa). Tăng áp suất bằng cách tăng lực ép (đặt thêm vật lên) hoặc giảm diện tích tiếp xúc.']],
    2: [['Vẽ sơ đồ (mô tả) mạch điện gồm nguồn điện, công tắc, bóng đèn, ampe kế và vôn kế đo hiệu điện thế giữa hai đầu bóng đèn. Nêu cách mắc ampe kế và vôn kế.', ['nối tiếp', 'song song', 'ampe kế', 'vôn kế'], 'Nguồn – công tắc – ampe kế – bóng đèn mắc nối tiếp thành mạch kín; vôn kế mắc song song với hai đầu bóng đèn; chốt (+) của dụng cụ đo nối về phía cực dương của nguồn.'],
      ['Nêu các biện pháp bảo vệ hệ tiêu hoá và hệ hô hấp.', ['ăn uống', 'vệ sinh', 'khẩu trang', 'thuốc lá'], 'Tiêu hoá: ăn chín uống sôi, ăn đúng giờ, nhai kĩ, vệ sinh răng miệng, hạn chế đồ cay nóng, rượu bia. Hô hấp: đeo khẩu trang nơi khói bụi, không hút thuốc lá, trồng cây xanh, tập thể dục, giữ ấm cơ thể.']]
  }
});

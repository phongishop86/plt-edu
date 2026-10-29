/* Vật lí 12 – KNTT. Chương, bài theo mục lục SGK; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'vat-li-12', lop: 12, mon: 'Vật lí', icon: '⚛️', nhan: 'Chương', so: false,
  topics: [
    { hk: 1, nhan: 'Chương I', ten: 'Vật lí nhiệt', bai: ['Bài 1. Cấu trúc của chất. Sự chuyển thể', 'Bài 2. Nội năng. Định luật I của nhiệt động lực học', 'Bài 3. Nhiệt độ. Thang nhiệt độ – nhiệt kế', 'Bài 4. Nhiệt dung riêng', 'Bài 5. Nhiệt nóng chảy riêng', 'Bài 6. Nhiệt hoá hơi riêng', 'Bài 7. Bài tập về vật lí nhiệt'],
      lt: ['Mô hình động học phân tử: chất cấu tạo từ phân tử chuyển động không ngừng; nhiệt độ càng cao chuyển động càng nhanh.', '<b>Định luật I nhiệt động lực học</b>: ΔU = A + Q.', 'Thang Kelvin: T(K) = t(°C) + 273. Nhiệt lượng Q = mcΔt (c: nhiệt dung riêng, nước c ≈ 4 200 J/kg·K).', 'Nóng chảy: Q = λm; hoá hơi: Q = Lm.'],
      q: `? Định luật I nhiệt động lực học được viết: | ΔU = A + Q | ΔU = A − Q luôn | Q = mcΔt | pV = nRT
? 27 °C tương ứng với nhiệt độ tuyệt đối: | 300 K | 27 K | 246 K | 273 K
? Nhiệt lượng cần để đun nóng 2 kg nước tăng 10 °C (c = 4 200 J/kg·K) là: | 84 000 J | 8 400 J | 42 000 J | 840 J
? Nhiệt lượng cần để làm nóng chảy hoàn toàn vật ở nhiệt độ nóng chảy: | Q = λm | Q = mcΔt | Q = Lm | Q = UIt
? 0 K tương ứng với: | −273 °C | 0 °C | 273 °C | −100 °C
+ Nội năng của vật là tổng động năng và thế năng của các phân tử cấu tạo nên vật.
- Nhiệt độ tuyệt đối có thể nhận giá trị âm.
= Q = mcΔt = Nhiệt lượng thu/toả khi thay đổi nhiệt độ
= T = t + 273 = Đổi °C sang K
? Nhiệt độ 0 °C tương ứng với bao nhiêu kelvin? | 273 K | 0 K | 100 K | 373 K
? Nhiệt dung riêng của nước khoảng: | 4200 J/(kg·K) | 420 J/(kg·K) | 880 J/(kg·K) | 130 J/(kg·K)
? Nhiệt lượng cần để làm nóng vật được tính bằng: | Q = m·c·Δt | Q = m·g·h | Q = U·I | Q = m/c
? Quá trình chuyển từ thể lỏng sang thể khí là: | Hoá hơi | Nóng chảy | Đông đặc | Ngưng tụ
? Theo định luật I nhiệt động lực học: | ΔU = A + Q | ΔU = A·Q | ΔU = 0 | ΔU = A/Q
? Trong quá trình nóng chảy của chất rắn kết tinh, nhiệt độ: | Không đổi | Tăng liên tục | Giảm | Dao động
+ Nhiệt nóng chảy riêng là nhiệt lượng cần để 1 kg chất rắn nóng chảy hoàn toàn ở nhiệt độ nóng chảy.
- Nội năng của vật không phụ thuộc nhiệt độ.
_ Nhiệt độ tuyệt đối: T = t + [273]
? Nước sôi ở 100 °C (áp suất chuẩn) tương ứng với nhiệt độ tuyệt đối: | 373 K | 273 K | 100 K | 173 K
? Nhiệt lượng cần cung cấp để 2 kg nước tăng thêm 10 °C (c = 4 200 J/kg·K) là: | 84 000 J | 8 400 J | 42 000 J | 21 000 J
? Quá trình chuyển từ thể lỏng sang thể khí gọi là: | Hoá hơi | Nóng chảy | Đông đặc | Ngưng tụ
? Nhiệt nóng chảy riêng của một chất là nhiệt lượng cần để: | 1 kg chất đó nóng chảy hoàn toàn ở nhiệt độ nóng chảy | Tăng 1 °C cho 1 kg chất | Làm bay hơi 1 kg chất | Đun sôi nước
+ Trong quá trình nóng chảy của chất rắn kết tinh, nhiệt độ không đổi.
- 0 K tương ứng với 0 °C.
_ T(K) = t(°C) + [273]` },
    { hk: 1, nhan: 'Chương II', ten: 'Khí lí tưởng', bai: ['Bài 8. Mô hình động học phân tử chất khí', 'Bài 9. Định luật Boyle', 'Bài 10. Định luật Charles', 'Bài 11. Phương trình trạng thái của khí lí tưởng', 'Bài 12. Áp suất khí theo mô hình động học phân tử. Quan hệ giữa động năng phân tử và nhiệt độ', 'Bài 13. Bài tập về khí lí tưởng'],
      lt: ['<b>Định luật Boyle</b> (đẳng nhiệt): p₁V₁ = p₂V₂.', '<b>Định luật Charles</b> (đẳng áp): V₁/T₁ = V₂/T₂.', '<b>Phương trình trạng thái</b>: pV/T = hằng số; <b>phương trình Clapeyron</b>: pV = nRT (R = 8,31 J/mol·K).', 'Động năng trung bình phân tử: W_đ = (3/2)kT.'],
      q: `? Định luật Boyle áp dụng cho quá trình: | Đẳng nhiệt | Đẳng áp | Đẳng tích | Đoạn nhiệt
? Khí có p = 1 atm, V = 6 L, nén đẳng nhiệt đến V = 2 L thì áp suất là: | 3 atm | 2 atm | 1/3 atm | 12 atm
? Định luật Charles: trong quá trình đẳng áp, V tỉ lệ thuận với: | Nhiệt độ tuyệt đối T | Áp suất p | Nhiệt độ °C | Khối lượng
? Phương trình Clapeyron là: | pV = nRT | p₁V₁ = p₂V₂ | V/T = const | ΔU = A + Q
+ Nhiệt độ tuyệt đối tỉ lệ với động năng trung bình của các phân tử khí.
- Trong quá trình đẳng nhiệt, áp suất tỉ lệ thuận với thể tích.
= p₁V₁ = p₂V₂ = Định luật Boyle
= V₁/T₁ = V₂/T₂ = Định luật Charles
= pV = nRT = Phương trình Clapeyron
? Trong quá trình đẳng nhiệt, áp suất và thể tích: | Tỉ lệ nghịch | Tỉ lệ thuận | Không đổi cả hai | Bằng nhau
? Phương trình trạng thái khí lí tưởng là: | pV/T = hằng số | pV = hằng số luôn đúng | p/V = T | pT = V
? Quá trình đẳng tích là quá trình có: | Thể tích không đổi | Áp suất không đổi | Nhiệt độ không đổi | Khối lượng thay đổi
? Hằng số khí lí tưởng R có giá trị xấp xỉ: | 8,31 J/(mol·K) | 6,02·10²³ | 9,8 m/s² | 1,6·10⁻¹⁹ C
? Áp suất khí gây ra do: | Các phân tử khí va chạm vào thành bình | Khí đứng yên | Trọng lượng bình | Ánh sáng
+ Số Avogadro xấp xỉ 6,02·10²³ mol⁻¹.
- Trong quá trình đẳng áp, thể tích tỉ lệ nghịch với nhiệt độ tuyệt đối.
= Đẳng nhiệt = p tỉ lệ nghịch với V
= Đẳng áp = V tỉ lệ thuận với T
= Đẳng tích = p tỉ lệ thuận với T
? Theo định luật Boyle, ở nhiệt độ không đổi: | p·V = hằng số | p/V = hằng số | V/T = hằng số | p·T = hằng số
? Khí được nén đẳng nhiệt từ 4 lít xuống 2 lít thì áp suất: | Tăng gấp đôi | Giảm một nửa | Không đổi | Tăng gấp bốn
? Theo định luật Charles, ở áp suất không đổi, thể tích khí: | Tỉ lệ thuận với nhiệt độ tuyệt đối | Tỉ lệ nghịch với nhiệt độ | Không đổi | Tỉ lệ với áp suất
+ Áp suất khí là do các phân tử khí va chạm vào thành bình.
- Phân tử khí lí tưởng có tương tác mạnh với nhau khi không va chạm.` },
    { hk: 2, nhan: 'Chương III', ten: 'Từ trường', bai: ['Bài 14. Từ trường', 'Bài 15. Lực từ tác dụng lên dây dẫn mang dòng điện. Cảm ứng từ', 'Bài 16. Từ thông. Hiện tượng cảm ứng điện từ', 'Bài 17. Máy phát điện xoay chiều', 'Bài 18. Ứng dụng hiện tượng cảm ứng điện từ', 'Bài 19. Điện từ trường. Mô hình sóng điện từ', 'Bài 20. Bài tập về từ trường'],
      lt: ['Lực từ lên dây dẫn: F = B·I·l·sinα; chiều theo <b>quy tắc bàn tay trái</b>. Đơn vị cảm ứng từ: tesla (T).', 'Từ thông Φ = B·S·cosα (Wb). <b>Định luật Faraday</b>: e_c = −ΔΦ/Δt; chiều dòng cảm ứng theo <b>định luật Lenz</b>.', 'Máy phát điện xoay chiều, máy biến áp: U₁/U₂ = N₁/N₂. Dòng điện xoay chiều: giá trị hiệu dụng I = I₀/√2.', 'Điện trường biến thiên sinh ra từ trường và ngược lại → điện từ trường, sóng điện từ.'],
      q: `? Đơn vị của cảm ứng từ là: | Tesla (T) | Vêbe (Wb) | Henri (H) | Vôn (V)
? Đơn vị của từ thông là: | Vêbe (Wb) | Tesla (T) | Ampe (A) | Oát (W)
? Lực từ tác dụng lên đoạn dây dẫn mang dòng điện xác định theo quy tắc: | Bàn tay trái | Bàn tay phải | Nắm tay phải | Vặn nút chai
? Dây dài 0,5 m, I = 2 A đặt vuông góc trong từ trường B = 0,1 T chịu lực từ: | 0,1 N | 1 N | 0,01 N | 10 N
? Máy biến áp có N₁ = 1 000 vòng, N₂ = 100 vòng, U₁ = 220 V thì U₂ là: | 22 V | 2 200 V | 220 V | 2,2 V
? Dòng điện xoay chiều có I₀ = 2√2 A thì cường độ hiệu dụng là: | 2 A | 2√2 A | 4 A | 1 A
+ Định luật Lenz xác định chiều dòng điện cảm ứng.
- Máy biến áp hoạt động được với dòng điện một chiều không đổi.
= F = BIl sinα = Lực từ
= Φ = BS cosα = Từ thông
= e = −ΔΦ/Δt = Định luật Faraday
= U₁/U₂ = N₁/N₂ = Máy biến áp
? Lực từ tác dụng lên đoạn dây dẫn mang dòng điện: | F = B·I·l·sinα | F = B/I | F = I·l | F = m·a
? Hiện tượng cảm ứng điện từ xảy ra khi: | Từ thông qua mạch kín biến thiên | Từ thông không đổi | Không có từ trường | Mạch hở
? Máy phát điện xoay chiều hoạt động dựa trên hiện tượng: | Cảm ứng điện từ | Quang điện | Nhiệt điện | Phóng xạ
? Máy biến áp có số vòng cuộn thứ cấp lớn hơn sơ cấp là máy: | Tăng áp | Hạ áp | Không đổi áp | Phát điện
? Giá trị hiệu dụng của điện áp xoay chiều liên hệ với giá trị cực đại: | U = U₀/√2 | U = U₀ | U = 2U₀ | U = U₀²
+ Đường sức từ là những đường cong khép kín.
_ Máy biến áp lí tưởng: U1/U2 = N1/[N2]
? Lực từ tác dụng lên đoạn dây dẫn mang dòng điện đặt trong từ trường được tính bằng: | F = B·I·l·sinα | F = B/I | F = m·a | F = q·E
? Đơn vị cảm ứng từ là: | Tesla (T) | Vêbe (Wb) | Henry (H) | Vôn (V)
? Đơn vị từ thông là: | Vêbe (Wb) | Tesla (T) | Ampe (A) | Oát (W)
? Máy biến áp hoạt động dựa trên hiện tượng: | Cảm ứng điện từ | Quang điện | Nhiệt điện | Phóng xạ
? Máy biến áp có N1 = 1 000 vòng, N2 = 100 vòng, U1 = 220 V. Điện áp U2 là: | 22 V | 2 200 V | 110 V | 220 V
+ Quy tắc nắm tay phải dùng để xác định chiều đường sức từ của dòng điện.
- Máy biến áp có thể biến đổi điện áp của dòng điện không đổi.` },
    { hk: 2, nhan: 'Chương IV', ten: 'Vật lí hạt nhân', bai: ['Bài 21. Cấu trúc hạt nhân', 'Bài 22. Phản ứng hạt nhân và năng lượng liên kết', 'Bài 23. Hiện tượng phóng xạ', 'Bài 24. Công nghiệp hạt nhân', 'Bài 25. Bài tập về vật lí hạt nhân'],
      lt: ['Hạt nhân ᴬ_Z X gồm Z proton và N = A − Z neutron; <b>đồng vị</b>: cùng Z khác A.', 'Năng lượng liên kết W_lk = Δm·c²; năng lượng liên kết riêng càng lớn, hạt nhân càng bền.', 'Phản ứng hạt nhân bảo toàn số nucleon và điện tích. <b>Phân hạch</b> (hạt nhân nặng vỡ ra), <b>nhiệt hạch</b> (hạt nhân nhẹ tổng hợp).', '<b>Phóng xạ</b>: α (⁴₂He), β⁻, β⁺, γ; định luật phóng xạ N = N₀·2^(−t/T), T là chu kì bán rã.'],
      q: `? Hạt nhân ¹⁴₆C có số neutron là: | 8 | 6 | 14 | 20
? Các hạt nhân đồng vị có cùng: | Số proton | Số neutron | Số khối | Khối lượng
? Sau 2 chu kì bán rã, lượng chất phóng xạ còn lại: | 1/4 ban đầu | 1/2 ban đầu | 1/8 ban đầu | Không còn
? Phản ứng tổng hợp hai hạt nhân nhẹ thành hạt nhân nặng hơn là: | Nhiệt hạch | Phân hạch | Phóng xạ α | Phóng xạ γ
? Tia phóng xạ không mang điện là: | Tia γ | Tia α | Tia β⁻ | Tia β⁺
? Nhà máy điện hạt nhân hiện nay dùng phản ứng: | Phân hạch | Nhiệt hạch | Hoá học | Quang hợp
+ Năng lượng liên kết riêng càng lớn thì hạt nhân càng bền vững.
- Tia α là dòng các electron.
= Phân hạch = Hạt nhân nặng vỡ thành hạt nhân nhẹ hơn
= Nhiệt hạch = Hạt nhân nhẹ kết hợp thành hạt nhân nặng hơn
= Tia α = Hạt nhân heli ⁴₂He
= Tia γ = Sóng điện từ năng lượng cao
? Hạt nhân nguyên tử được cấu tạo từ: | Prôtôn và nơtron | Êlectron và prôtôn | Chỉ êlectron | Phôtôn
? Số khối A của hạt nhân bằng: | Tổng số prôtôn và nơtron | Số prôtôn | Số nơtron | Số êlectron
? Chu kì bán rã là thời gian để: | Một nửa số hạt nhân bị phân rã | Toàn bộ hạt nhân phân rã | Hạt nhân tăng gấp đôi | Hạt nhân đứng yên
? Phản ứng phân hạch là: | Hạt nhân nặng vỡ thành hai hạt nhân nhẹ hơn | Hai hạt nhân nhẹ kết hợp | Êlectron bứt ra | Ánh sáng tán sắc
? Năng lượng trong lòng Mặt Trời sinh ra chủ yếu từ: | Phản ứng nhiệt hạch | Phản ứng phân hạch | Đốt than | Phóng xạ alpha
? Sau 2 chu kì bán rã, lượng chất phóng xạ còn lại là: | 1/4 | 1/2 | 1/8 | 0
+ Nhà máy điện hạt nhân sử dụng phản ứng phân hạch.
- Tia alpha có khả năng đâm xuyên mạnh nhất.
= Tia alpha = Hạt nhân heli, đâm xuyên yếu
= Tia bêta = Êlectron hoặc pôzitron
? Hạt nhân ²³⁵U có số neutron là: | 143 | 92 | 235 | 327
? Tia phóng xạ có khả năng đâm xuyên mạnh nhất là: | Tia gamma | Tia alpha | Tia beta | Tia hồng ngoại
? Phản ứng hạt nhân xảy ra trong lõi Mặt Trời chủ yếu là: | Phản ứng nhiệt hạch | Phản ứng phân hạch | Phản ứng hoá học | Phóng xạ alpha
? Lò phản ứng hạt nhân của nhà máy điện hạt nhân sử dụng phản ứng: | Phân hạch | Nhiệt hạch | Đốt cháy than | Quang hợp
+ Tia alpha là dòng hạt nhân heli.
- Độ hụt khối của hạt nhân luôn bằng 0.
= Chu kì bán rã = Thời gian một nửa số hạt nhân bị phân rã` }
  ],
  essays: {
    1: [['Tính nhiệt lượng cần cung cấp để biến 1 kg nước đá ở 0 °C thành nước ở 20 °C (λ = 3,4·10⁵ J/kg; c = 4 200 J/kg·K).', ['340 000', '84 000', '424 000'], 'Nóng chảy: Q₁ = λm = 340 000 J; đun nóng: Q₂ = mcΔt = 1·4 200·20 = 84 000 J; Q = 424 000 J.'],
      ['Một lượng khí ở 27 °C có thể tích 6 L. Đun nóng đẳng áp đến 127 °C thì thể tích là bao nhiêu?', ['300', '400', '8'], 'T₁ = 300 K, T₂ = 400 K; V₂ = V₁·T₂/T₁ = 6·400/300 = 8 L.']],
    2: [['Một máy biến áp có cuộn sơ cấp 2 000 vòng, thứ cấp 100 vòng, điện áp sơ cấp 220 V. Tính điện áp thứ cấp. Máy này là máy tăng áp hay hạ áp?', ['11', 'hạ áp'], 'U₂ = U₁·N₂/N₁ = 220·100/2 000 = 11 V; N₂ < N₁ nên là máy hạ áp.'],
      ['Một chất phóng xạ có chu kì bán rã 8 ngày, khối lượng ban đầu 80 g. Tính khối lượng còn lại sau 24 ngày.', ['3', '10'], 't = 24 ngày = 3T; m = m₀/2³ = 80/8 = 10 g.']]
  }
});

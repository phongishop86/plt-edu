/* Vật lí 10 – KNTT. Chương, bài theo mục lục SGK; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'vat-li-10', lop: 10, mon: 'Vật lí', icon: '⚛️', nhan: 'Chương', so: false,
  topics: [
    { hk: 1, nhan: 'Chương I', ten: 'Mở đầu', bai: ['Bài 1. Làm quen với Vật lí', 'Bài 2. Các quy tắc an toàn trong phòng thực hành Vật lí', 'Bài 3. Thực hành tính sai số trong phép đo. Ghi kết quả đo'],
      lt: ['Đối tượng nghiên cứu của Vật lí: các dạng vận động của vật chất, năng lượng. Phương pháp: thực nghiệm và lí thuyết (mô hình).', 'Sai số: <b>sai số hệ thống</b> (do dụng cụ), <b>sai số ngẫu nhiên</b>. Sai số tuyệt đối Δx; sai số tỉ đối δ = Δx/x̄ × 100%. Kết quả: x = x̄ ± Δx.'],
      q: `? Kết quả đo được ghi dưới dạng: | x = x̄ ± Δx | x = Δx/x̄ | x = x̄ · Δx | x = x̄ − 2Δx
? Sai số do dụng cụ đo gây ra là: | Sai số hệ thống | Sai số ngẫu nhiên | Sai số tỉ đối | Sai số tuyệt đối trung bình
? Đo chiều dài được l = (20,0 ± 0,2) cm. Sai số tỉ đối là: | 1% | 0,2% | 2% | 10%
+ Đơn vị cơ bản của chiều dài trong hệ SI là mét.
- Sai số ngẫu nhiên có thể loại bỏ hoàn toàn.
= Mét (m) = Chiều dài
= Kilôgam (kg) = Khối lượng
= Giây (s) = Thời gian
= Ampe (A) = Cường độ dòng điện
= Kenvin (K) = Nhiệt độ
? Đơn vị cơ bản của khối lượng trong hệ SI là: | kilôgam (kg) | gam (g) | tấn | niutơn (N)
? Đơn vị cơ bản của thời gian trong hệ SI là: | giây (s) | phút | giờ | ngày
? Sai số ngẫu nhiên có thể giảm bằng cách: | Đo nhiều lần rồi lấy giá trị trung bình | Đo một lần | Dùng dụng cụ hỏng | Bỏ qua kết quả
? Kí hiệu cảnh báo chất dễ cháy có hình: | Ngọn lửa | Đầu lâu xương chéo | Tia sét | Bình gas
+ Sai số hệ thống thường do dụng cụ đo gây ra.
- Ampe (A) không phải là đơn vị cơ bản trong hệ SI.
? Kí hiệu cảnh báo chất dễ cháy trong phòng thí nghiệm thường có hình: | Ngọn lửa | Đầu lâu | Tia sét | Bông hoa
+ Sai số hệ thống thường do dụng cụ đo hoặc phương pháp đo gây ra.
- Kết quả đo luôn chính xác tuyệt đối, không có sai số.
= Kelvin (K) = Nhiệt độ` },
    { hk: 1, nhan: 'Chương II', ten: 'Động học', bai: ['Bài 4. Độ dịch chuyển và quãng đường đi được', 'Bài 5. Tốc độ và vận tốc', 'Bài 6. Thực hành: Đo tốc độ của vật chuyển động', 'Bài 7. Đồ thị độ dịch chuyển – thời gian', 'Bài 8. Chuyển động biến đổi. Gia tốc', 'Bài 9. Chuyển động thẳng biến đổi đều', 'Bài 10. Sự rơi tự do', 'Bài 11. Thực hành: Đo gia tốc rơi tự do', 'Bài 12. Chuyển động ném'],
      lt: ['<b>Độ dịch chuyển</b> (vectơ) khác <b>quãng đường</b> (vô hướng). Vận tốc v = d/t; tốc độ trung bình = s/t.', '<b>Gia tốc</b> a = Δv/Δt (m/s²). Chuyển động thẳng biến đổi đều: v = v₀ + at; d = v₀t + ½at²; v² − v₀² = 2ad.', '<b>Rơi tự do</b>: chuyển động nhanh dần đều, a = g ≈ 9,8 m/s²; v = gt; h = ½gt².', '<b>Ném ngang</b>: tầm xa L = v₀·√(2h/g).'],
      q: `? Đơn vị của gia tốc là: | m/s² | m/s | m | s²
? Một xe tăng tốc từ 0 lên 20 m/s trong 5 s. Gia tốc là: | 4 m/s² | 100 m/s² | 0,25 m/s² | 15 m/s²
? Vật rơi tự do từ nghỉ, lấy g = 10 m/s². Sau 3 s vận tốc là: | 30 m/s | 3 m/s | 45 m/s | 10 m/s
? Vật rơi tự do trong 2 s (g = 10 m/s²) đi được quãng đường: | 20 m | 10 m | 40 m | 5 m
? Công thức liên hệ v, a, d (không chứa t) là: | v² − v₀² = 2ad | v = v₀ + at | d = vt | a = v/t²
? Đi 3 km về phía đông rồi 4 km về phía bắc. Độ lớn độ dịch chuyển là: | 5 km | 7 km | 1 km | 12 km
+ Trong chân không, mọi vật rơi tự do nhanh như nhau.
+ Độ dịch chuyển là đại lượng vectơ.
- Quãng đường luôn bằng độ lớn độ dịch chuyển.
- Vật nặng luôn rơi tự do nhanh hơn vật nhẹ trong chân không.
= v = v₀ + at = Vận tốc trong chuyển động biến đổi đều
= d = v₀t + ½at² = Độ dịch chuyển
= h = ½gt² = Quãng đường rơi tự do
= a = Δv/Δt = Gia tốc
? Một xe chạy 120 km trong 2 h. Tốc độ trung bình là: | 60 km/h | 240 km/h | 30 km/h | 120 km/h
? Gia tốc của chuyển động thẳng nhanh dần đều có đặc điểm: | Cùng dấu với vận tốc | Ngược dấu với vận tốc | Bằng 0 | Thay đổi liên tục
? Công thức tính quãng đường của chuyển động thẳng biến đổi đều là: | d = v0t + at²/2 | d = vt² | d = at | d = v/t
? Vật rơi tự do từ độ cao 20 m (g = 10 m/s²). Thời gian rơi là: | 2 s | 4 s | 1 s | 20 s
? Đồ thị độ dịch chuyển – thời gian của chuyển động thẳng đều là: | Đường thẳng | Đường parabol | Đường tròn | Đường cong bất kì
? Trong chuyển động ném ngang, theo phương ngang vật chuyển động: | Thẳng đều | Nhanh dần đều | Chậm dần đều | Đứng yên
- Quãng đường đi được luôn nhỏ hơn độ lớn độ dịch chuyển.
_ Gia tốc rơi tự do gần mặt đất lấy gần đúng g = [9,8] m/s².
? Một ô tô đi 120 km trong 2 giờ. Tốc độ trung bình là: | 60 km/h | 240 km/h | 30 km/h | 120 km/h
? Vật rơi tự do không vận tốc đầu (g = 10 m/s²). Sau 2 s, vận tốc của vật là: | 20 m/s | 10 m/s | 40 m/s | 5 m/s
? Quãng đường vật rơi tự do (g = 10 m/s²) trong 3 s đầu là: | 45 m | 30 m | 90 m | 15 m
? Công thức vận tốc của chuyển động thẳng biến đổi đều là: | v = v₀ + at | v = s/t² | v = at² | v = v₀ − s
? Một vật được ném ngang. Theo phương ngang, vật chuyển động: | Thẳng đều | Nhanh dần đều | Chậm dần đều | Đứng yên
+ Gia tốc rơi tự do gần mặt đất xấp xỉ 9,8 m/s².
- Quãng đường đi được luôn bằng độ lớn độ dịch chuyển.
_ Đổi đơn vị: 72 km/h = [20] m/s.` },
    { hk: 1, nhan: 'Chương III', ten: 'Động lực học', bai: ['Bài 13. Tổng hợp và phân tích lực. Cân bằng lực', 'Bài 14. Định luật 1 Newton', 'Bài 15. Định luật 2 Newton', 'Bài 16. Định luật 3 Newton', 'Bài 17. Trọng lực và lực căng', 'Bài 18. Lực ma sát', 'Bài 19. Lực cản và lực nâng', 'Bài 20. Một số ví dụ về cách giải các bài toán thuộc phần động lực học', 'Bài 21. Moment lực. Cân bằng của vật rắn', 'Bài 22. Thực hành: Tổng hợp lực'],
      lt: ['<b>Định luật 1 Newton</b> (quán tính): vật không chịu lực hoặc hợp lực bằng 0 thì đứng yên hoặc chuyển động thẳng đều.', '<b>Định luật 2</b>: a = F/m (F = ma). <b>Định luật 3</b>: lực và phản lực cùng độ lớn, cùng phương, ngược chiều, đặt vào hai vật khác nhau.', 'Trọng lực P = mg; lực ma sát trượt F = μN.', '<b>Moment lực</b> M = F·d; quy tắc moment: tổng moment theo chiều kim đồng hồ bằng tổng moment ngược chiều.'],
      q: `? Biểu thức định luật 2 Newton là: | F = ma | F = m/a | F = a/m | F = mv
? Tác dụng lực 10 N vào vật 2 kg, gia tốc của vật là: | 5 m/s² | 20 m/s² | 0,2 m/s² | 12 m/s²
? Khi xe buýt đột ngột phanh, hành khách bị ngã về phía trước do: | Quán tính | Lực ma sát | Trọng lực | Lực đẩy Archimedes
? Lực và phản lực: | Cùng độ lớn, ngược chiều, đặt vào hai vật khác nhau | Cân bằng nhau | Đặt vào cùng một vật | Khác độ lớn
? Vật khối lượng 5 kg (g = 10 m/s²) có trọng lượng: | 50 N | 5 N | 0,5 N | 500 N
? Lực ma sát trượt có hệ số μ = 0,2, áp lực 100 N thì lực ma sát bằng: | 20 N | 500 N | 2 N | 100 N
+ Hợp lực tác dụng lên vật bằng 0 thì vật đứng yên hoặc chuyển động thẳng đều.
+ Moment lực M = F·d, với d là cánh tay đòn.
- Lực và phản lực là hai lực cân bằng.
- Vật có khối lượng càng lớn thì quán tính càng nhỏ.
= Định luật 1 Newton = Quán tính
= Định luật 2 Newton = F = ma
= Định luật 3 Newton = Lực và phản lực
= F = μN = Lực ma sát trượt
? Theo định luật II Newton, gia tốc của vật: | Tỉ lệ thuận với lực, tỉ lệ nghịch với khối lượng | Tỉ lệ thuận với khối lượng | Không phụ thuộc lực | Luôn bằng 0
? Một lực 10 N tác dụng vào vật 2 kg. Gia tốc của vật là: | 5 m/s² | 20 m/s² | 0,2 m/s² | 12 m/s²
? Trọng lượng của vật khối lượng 5 kg (g = 10 m/s²) là: | 50 N | 5 N | 0,5 N | 500 N
? Định luật III Newton: lực và phản lực có đặc điểm: | Cùng độ lớn, ngược chiều, đặt vào hai vật khác nhau | Cùng đặt vào một vật | Khác độ lớn | Cùng chiều
? Quán tính là tính chất của vật: | Có xu hướng bảo toàn vận tốc | Luôn tăng tốc | Luôn dừng lại | Không có khối lượng
? Lực ma sát trượt phụ thuộc vào: | Áp lực và tính chất bề mặt tiếp xúc | Diện tích tiếp xúc | Tốc độ vật | Màu sắc vật
+ Khối lượng là đại lượng đặc trưng cho mức quán tính của vật.
- Lực và phản lực cân bằng nhau vì cùng đặt vào một vật.
= Định luật I Newton = Định luật quán tính
= Định luật II Newton = F = m·a
? Lực 10 N tác dụng lên vật 2 kg. Gia tốc của vật là: | 5 m/s² | 20 m/s² | 0,2 m/s² | 12 m/s²
? Khi xe phanh gấp, hành khách bị ngả về phía trước là do: | Quán tính | Lực ma sát | Trọng lực | Lực đẩy Archimedes
? Lực đẩy Archimedes có độ lớn bằng: | Trọng lượng phần chất lỏng bị vật chiếm chỗ | Trọng lượng vật | Khối lượng vật | Áp suất chất lỏng
? Moment lực đối với trục quay được tính bằng: | M = F·d | M = F/d | M = m·g | M = F + d
+ Lực và phản lực theo định luật III Newton có cùng độ lớn, ngược chiều.
- Lực và phản lực tác dụng lên cùng một vật nên cân bằng nhau.
= Định luật III Newton = Lực và phản lực` },
    { hk: 2, nhan: 'Chương IV', ten: 'Năng lượng, công, công suất', bai: ['Bài 23. Năng lượng. Công cơ học', 'Bài 24. Công suất', 'Bài 25. Động năng, thế năng', 'Bài 26. Cơ năng và định luật bảo toàn cơ năng', 'Bài 27. Hiệu suất'],
      lt: ['Công A = F·s·cosα (J); công suất P = A/t (W).', 'Động năng W_đ = ½mv²; thế năng trọng trường W_t = mgh; cơ năng W = W_đ + W_t được bảo toàn khi chỉ có trọng lực, lực đàn hồi.', 'Hiệu suất H = A_có ích / A_toàn phần × 100%.'],
      q: `? Công thức tính công khi lực hợp với hướng dịch chuyển góc α là: | A = F·s·cosα | A = F·s·sinα | A = F/s | A = F·t
? Lực 20 N kéo vật đi 5 m cùng hướng lực. Công thực hiện là: | 100 J | 4 J | 25 J | 15 J
? Vật 2 kg chuyển động với tốc độ 4 m/s có động năng: | 16 J | 8 J | 32 J | 4 J
? Vật 1 kg ở độ cao 10 m (g = 10 m/s²) có thế năng: | 100 J | 10 J | 1 000 J | 1 J
? Động cơ có công toàn phần 1 000 J, công có ích 800 J. Hiệu suất là: | 80% | 20% | 125% | 8%
+ Khi bỏ qua ma sát, cơ năng của vật được bảo toàn.
- Hiệu suất của máy có thể lớn hơn 100%.
= A = Fs cosα = Công cơ học
= P = A/t = Công suất
= W_đ = ½mv² = Động năng
= W_t = mgh = Thế năng trọng trường
? Công thức tính công của lực không đổi là: | A = F·s·cosα | A = F/s | A = m·g | A = P·t²
? Đơn vị của công suất là: | oát (W) | jun (J) | niutơn (N) | paxcan (Pa)
? Động năng của vật khối lượng 2 kg chuyển động với tốc độ 3 m/s là: | 9 J | 6 J | 18 J | 3 J
? Thế năng trọng trường của vật 1 kg ở độ cao 10 m (g = 10 m/s²) là: | 100 J | 10 J | 1 J | 1000 J
? Khi chỉ có trọng lực tác dụng, đại lượng được bảo toàn là: | Cơ năng | Động năng | Thế năng | Vận tốc
? Hiệu suất của máy luôn: | Nhỏ hơn 1 (100%) | Lớn hơn 100% | Bằng 0 | Âm
+ Công suất cho biết tốc độ thực hiện công.
- Khi vật rơi tự do, thế năng của vật tăng dần.
_ Động năng: Wđ = m·v² / [2]
? Công của lực F = 10 N kéo vật đi 5 m theo hướng của lực là: | 50 J | 2 J | 15 J | 500 J
? Động năng của vật 2 kg chuyển động với tốc độ 3 m/s là: | 9 J | 6 J | 18 J | 3 J
? Công suất là: | Công thực hiện trong một đơn vị thời gian | Lực nhân thời gian | Năng lượng toàn phần | Khối lượng nhân vận tốc
? Máy thực hiện công 600 J trong 2 s có công suất: | 300 W | 1 200 W | 600 W | 150 W
? Hiệu suất của động cơ luôn: | Nhỏ hơn 100% | Lớn hơn 100% | Bằng 100% | Bằng 0
- Đơn vị của công suất là jun (J).
_ Động năng: Wđ = ½·m·v[²]` },
    { hk: 2, nhan: 'Chương V, VI, VII', ten: 'Động lượng. Chuyển động tròn đều. Biến dạng của vật rắn', bai: ['Bài 28. Động lượng', 'Bài 29. Định luật bảo toàn động lượng', 'Bài 30. Thực hành: Xác định động lượng của vật trước và sau va chạm', 'Bài 31. Động học của chuyển động tròn đều', 'Bài 32. Lực hướng tâm và gia tốc hướng tâm', 'Bài 33. Biến dạng của vật rắn', 'Bài 34. Khối lượng riêng. Áp suất chất lỏng'],
      lt: ['<b>Động lượng</b> p = m·v (kg·m/s). <b>Định luật bảo toàn động lượng</b>: tổng động lượng của hệ kín không đổi. Ứng dụng: chuyển động bằng phản lực (tên lửa).', 'Chuyển động tròn đều: ω = Δθ/Δt; v = ωr; chu kì T = 2π/ω; gia tốc hướng tâm a_ht = v²/r = ω²r; lực hướng tâm F_ht = m·a_ht.', '<b>Định luật Hooke</b>: F_đh = k·|Δl|.', 'Áp suất chất lỏng p = p₀ + ρgh.'],
      q: `? Động lượng được tính bằng: | p = m·v | p = m/v | p = ½mv² | p = mgh
? Vật 2 kg chuyển động 3 m/s có động lượng: | 6 kg·m/s | 9 kg·m/s | 1,5 kg·m/s | 18 kg·m/s
? Tên lửa chuyển động được dựa trên: | Định luật bảo toàn động lượng | Định luật Hooke | Định luật Ohm | Lực đẩy Archimedes
? Gia tốc hướng tâm có công thức: | a = v²/r | a = v/r² | a = vr | a = r/v
? Lò xo k = 100 N/m dãn 0,05 m. Lực đàn hồi là: | 5 N | 2 000 N | 0,5 N | 50 N
+ Trong chuyển động tròn đều, tốc độ không đổi nhưng vận tốc luôn đổi hướng.
- Gia tốc hướng tâm có hướng ra xa tâm quỹ đạo.
= p = mv = Động lượng
? Động lượng của vật được tính bằng: | p = m·v | p = m/v | p = m·a | p = F·s
? Đơn vị của động lượng là: | kg·m/s | N·m | J | W
? Trong chuyển động tròn đều, gia tốc hướng tâm có hướng: | Về tâm quỹ đạo | Ra xa tâm | Tiếp tuyến | Cùng chiều vận tốc
? Chuyển động bằng phản lực là ứng dụng của: | Định luật bảo toàn động lượng | Định luật Ôm | Định luật Húc | Định luật Ác-si-mét
? Theo định luật Húc, lực đàn hồi của lò xo: | Tỉ lệ thuận với độ biến dạng | Tỉ lệ nghịch với độ biến dạng | Không đổi | Bằng 0
? Công thức tính áp suất chất lỏng ở độ sâu h là: | p = ρ·g·h | p = m·g | p = F·s | p = ρ/h
+ Súng giật lùi khi bắn là do bảo toàn động lượng.
- Trong chuyển động tròn đều, tốc độ thay đổi liên tục.
? Động lượng của vật 2 kg chuyển động với vận tốc 5 m/s là: | 10 kg·m/s | 2,5 kg·m/s | 7 kg·m/s | 25 kg·m/s
? Chuyển động bằng phản lực (tên lửa) dựa trên định luật: | Bảo toàn động lượng | Bảo toàn khối lượng | Ôm | Húc
? Theo định luật Hooke, lực đàn hồi của lò xo: | Tỉ lệ thuận với độ biến dạng | Tỉ lệ nghịch với độ biến dạng | Không phụ thuộc độ biến dạng | Bằng trọng lượng lò xo
? Lò xo độ cứng 100 N/m bị dãn 0,05 m. Lực đàn hồi là: | 5 N | 2 000 N | 0,5 N | 50 N
+ Tốc độ góc của chuyển động tròn đều không đổi.
- Trong va chạm mềm, động năng của hệ luôn được bảo toàn.
= Động lượng = p = m·v
= Định luật Hooke = F = k·|Δl|
= Gia tốc hướng tâm = a = v²/r` }
  ],
  essays: {
    1: [['Một ô tô đang chạy 10 m/s thì tăng tốc đều, sau 5 s đạt 20 m/s. Tính gia tốc và quãng đường đi được trong thời gian đó.', ['2', '75'], 'a = (20 − 10)/5 = 2 m/s². s = v₀t + ½at² = 10·5 + ½·2·25 = 75 m.'],
      ['Vật 4 kg chịu lực kéo 20 N theo phương ngang, lực ma sát 4 N. Tính gia tốc của vật.', ['16', '4'], 'Hợp lực F = 20 − 4 = 16 N; a = F/m = 16/4 = 4 m/s².']],
    2: [['Thả vật 2 kg rơi tự do từ độ cao 20 m (g = 10 m/s², bỏ qua sức cản). Tính cơ năng và vận tốc khi chạm đất.', ['400', '20'], 'W = mgh = 2·10·20 = 400 J. Khi chạm đất W_đ = 400 J → ½·2·v² = 400 → v = 20 m/s.'],
      ['Viên bi 0,2 kg chuyển động 5 m/s va chạm và dính vào viên bi 0,3 kg đang đứng yên. Tính vận tốc hai viên bi sau va chạm.', ['1', '2'], 'Bảo toàn động lượng: 0,2·5 = (0,2 + 0,3)·v → v = 1/0,5 = 2 m/s.']]
  }
});

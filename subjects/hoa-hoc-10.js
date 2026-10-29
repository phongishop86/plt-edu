/* Hoá học 10 – KNTT. Chương, bài theo mục lục SGK; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'hoa-hoc-10', lop: 10, mon: 'Hoá học', icon: '🧪', nhan: 'Chương', so: false,
  topics: [
    { hk: 1, nhan: 'Chương 1', ten: 'Cấu tạo nguyên tử', bai: ['Bài 1. Thành phần của nguyên tử', 'Bài 2. Nguyên tố hoá học', 'Bài 3. Cấu trúc lớp vỏ electron nguyên tử', '*Bài 4. Ôn tập chương 1'],
      lt: ['Nguyên tử gồm hạt nhân (proton p⁺, neutron n) và vỏ electron (e⁻). Số p = số e = Z (số hiệu nguyên tử). Số khối A = Z + N.', '<b>Đồng vị</b>: cùng Z, khác N. Nguyên tử khối trung bình Ā = Σ(Aᵢ·xᵢ)/100.', 'Lớp electron n = 1, 2, 3… (K, L, M…); phân lớp s (tối đa 2e), p (6e), d (10e), f (14e). Thứ tự năng lượng: 1s 2s 2p 3s 3p 4s 3d 4p…', 'Nguyên tử có 1, 2, 3 e lớp ngoài cùng thường là kim loại; 5, 6, 7 e thường là phi kim; 8 e (He: 2e) là khí hiếm.'],
      q: `? Hạt mang điện dương trong hạt nhân là: | Proton | Neutron | Electron | Photon
? Nguyên tử Na có Z = 11, A = 23. Số neutron là: | 12 | 11 | 23 | 34
? Phân lớp p chứa tối đa bao nhiêu electron? | 6 | 2 | 10 | 14
? Cấu hình electron của nguyên tử Z = 11 là: | 1s² 2s² 2p⁶ 3s¹ | 1s² 2s² 2p⁷ | 1s² 2s² 2p⁶ 3p¹ | 1s² 2s⁸ 3s¹
? Các nguyên tử đồng vị có cùng: | Số proton | Số neutron | Số khối | Khối lượng nguyên tử
? Nguyên tử có 7 electron lớp ngoài cùng thường là: | Phi kim | Kim loại | Khí hiếm | Kim loại kiềm
+ Khối lượng nguyên tử tập trung chủ yếu ở hạt nhân.
+ Trong nguyên tử trung hoà, số proton bằng số electron.
- Neutron mang điện tích âm.
- Phân lớp s chứa tối đa 6 electron.
= Phân lớp s = Tối đa 2 electron
= Phân lớp p = Tối đa 6 electron
= Phân lớp d = Tối đa 10 electron
= Phân lớp f = Tối đa 14 electron
> 1s > 2s > 2p > 3s > 3p > 4s > 3d` },
    { hk: 1, nhan: 'Chương 2', ten: 'Bảng tuần hoàn các nguyên tố hoá học', bai: ['Bài 5. Cấu tạo của bảng tuần hoàn các nguyên tố hoá học', 'Bài 6. Xu hướng biến đổi một số tính chất của nguyên tử các nguyên tố trong một chu kì và trong một nhóm', 'Bài 7. Xu hướng biến đổi thành phần và một số tính chất của hợp chất trong một chu kì', 'Bài 8. Định luật tuần hoàn. Ý nghĩa của bảng tuần hoàn', '*Bài 9. Ôn tập chương 2'],
      lt: ['Bảng tuần hoàn: xếp theo chiều tăng điện tích hạt nhân; <b>chu kì</b> = số lớp electron; nhóm A: số thứ tự nhóm = số e lớp ngoài cùng.', 'Trong một chu kì (trái → phải): bán kính nguyên tử giảm, độ âm điện tăng, tính kim loại giảm, tính phi kim tăng.', 'Trong một nhóm A (trên → dưới): bán kính tăng, độ âm điện giảm, tính kim loại tăng.', 'Oxide và hydroxide: tính base giảm, tính acid tăng theo chiều tăng Z trong chu kì.'],
      q: `? Số thứ tự chu kì bằng: | Số lớp electron | Số electron lớp ngoài cùng | Số proton | Số neutron
? Nguyên tố nhóm IA có bao nhiêu electron lớp ngoài cùng? | 1 | 2 | 7 | 8
? Trong một chu kì, theo chiều tăng điện tích hạt nhân, bán kính nguyên tử: | Giảm dần | Tăng dần | Không đổi | Tăng rồi giảm
? Nguyên tố có độ âm điện lớn nhất là: | Fluorine (F) | Oxygen (O) | Chlorine (Cl) | Sodium (Na)
? Trong nhóm IA, kim loại có tính kim loại mạnh nhất (không kể Fr) là: | Cs | Li | Na | K
+ Trong một nhóm A, tính kim loại tăng dần từ trên xuống dưới.
- Trong một chu kì, tính phi kim giảm dần từ trái sang phải.
= Chu kì = Hàng ngang, cùng số lớp electron
= Nhóm = Cột dọc, tính chất tương tự
= Nhóm VIIA = Halogen
= Nhóm VIIIA = Khí hiếm` },
    { hk: 1, nhan: 'Chương 3', ten: 'Liên kết hoá học', bai: ['Bài 10. Quy tắc octet', 'Bài 11. Liên kết ion', 'Bài 12. Liên kết cộng hoá trị', 'Bài 13. Liên kết hydrogen và tương tác van der Waals', '*Bài 14. Ôn tập chương 3'],
      lt: ['<b>Quy tắc octet</b>: nguyên tử có xu hướng đạt 8 electron lớp ngoài cùng (như khí hiếm).', '<b>Liên kết ion</b>: lực hút tĩnh điện giữa cation và anion (NaCl), thường giữa kim loại điển hình và phi kim điển hình.', '<b>Liên kết cộng hoá trị</b>: dùng chung cặp electron; không phân cực (H₂, Cl₂) và phân cực (HCl, H₂O); liên kết đơn, đôi, ba; liên kết σ, π.', '<b>Liên kết hydrogen</b>: giữa H (liên kết với F, O, N) và nguyên tử F, O, N khác; làm nhiệt độ sôi của H₂O cao bất thường.'],
      q: `? Liên kết trong phân tử NaCl là: | Liên kết ion | Liên kết cộng hoá trị không phân cực | Liên kết kim loại | Liên kết hydrogen
? Liên kết trong phân tử Cl₂ là: | Cộng hoá trị không phân cực | Ion | Cộng hoá trị phân cực | Hydrogen
? Phân tử N₂ có liên kết: | Ba | Đơn | Đôi | Ion
? Liên kết hydrogen giải thích vì sao: | Nước có nhiệt độ sôi cao bất thường | Sắt dẫn điện | Muối tan trong nước | Kim cương cứng
? Theo quy tắc octet, nguyên tử Na có xu hướng: | Nhường 1 electron | Nhận 1 electron | Nhận 7 electron | Dùng chung 2 electron
+ Liên kết đôi gồm một liên kết σ và một liên kết π.
- Liên kết ion được hình thành bằng cách dùng chung cặp electron.
= NaCl = Liên kết ion
= H₂O = Cộng hoá trị phân cực
= O₂ = Liên kết đôi
= N₂ = Liên kết ba` },
    { hk: 2, nhan: 'Chương 4, 5', ten: 'Phản ứng oxi hoá – khử. Năng lượng hoá học', bai: ['Bài 15. Phản ứng oxi hoá – khử', '*Bài 16. Ôn tập chương 4', 'Bài 17. Biến thiên enthalpy trong các phản ứng hoá học', '*Bài 18. Ôn tập chương 5'],
      lt: ['<b>Số oxi hoá</b>; <b>chất khử</b> nhường electron (số oxi hoá tăng), <b>chất oxi hoá</b> nhận electron (số oxi hoá giảm). "Khử cho – O nhận".', 'Cân bằng phản ứng oxi hoá – khử bằng phương pháp thăng bằng electron.', '<b>Enthalpy tạo thành chuẩn</b> Δ_fH°₂₉₈; biến thiên enthalpy phản ứng Δ_rH: < 0 toả nhiệt, > 0 thu nhiệt.'],
      q: `? Chất khử là chất: | Nhường electron | Nhận electron | Không thay đổi số oxi hoá | Là chất xúc tác
? Số oxi hoá của S trong H₂SO₄ là: | +6 | +4 | −2 | 0
? Số oxi hoá của Mn trong KMnO₄ là: | +7 | +2 | +4 | +6
? Phản ứng có Δ_rH < 0 là phản ứng: | Toả nhiệt | Thu nhiệt | Không có nhiệt | Phân huỷ
? Trong phản ứng Fe + CuSO₄ → FeSO₄ + Cu, chất oxi hoá là: | Cu²⁺ (CuSO₄) | Fe | FeSO₄ | Cu
+ Quá trình oxi hoá là quá trình nhường electron.
+ Phản ứng đốt cháy nhiên liệu là phản ứng toả nhiệt.
- Chất oxi hoá là chất nhường electron.
- Phản ứng nung đá vôi là phản ứng toả nhiệt.
= Chất khử = Nhường electron, số oxi hoá tăng
= Chất oxi hoá = Nhận electron, số oxi hoá giảm
= Δ_rH < 0 = Phản ứng toả nhiệt
= Δ_rH > 0 = Phản ứng thu nhiệt` },
    { hk: 2, nhan: 'Chương 6, 7', ten: 'Tốc độ phản ứng. Nguyên tố nhóm VIIA – Halogen', bai: ['Bài 19. Tốc độ phản ứng', '*Bài 20. Ôn tập chương 6', 'Bài 21. Nhóm halogen', 'Bài 22. Hydrogen halide. Muối halide', '*Bài 23. Ôn tập chương 7'],
      lt: ['Tốc độ phản ứng phụ thuộc: nồng độ, áp suất (chất khí), nhiệt độ, diện tích bề mặt, chất xúc tác. <b>Quy tắc Van\'t Hoff</b>: nhiệt độ tăng 10 °C, tốc độ tăng γ lần (γ = 2–4).', 'Halogen (nhóm VIIA): F, Cl, Br, I; có 7 e lớp ngoài cùng; tính oxi hoá giảm dần từ F đến I.', 'HF, HCl, HBr, HI; tính acid tăng dần HF < HCl < HBr < HI. Nhận biết ion halide bằng AgNO₃: AgCl trắng, AgBr vàng nhạt, AgI vàng.'],
      q: `? Yếu tố nào KHÔNG làm tăng tốc độ phản ứng? | Giảm nhiệt độ | Tăng nồng độ | Dùng chất xúc tác | Tăng diện tích bề mặt
? Halogen có tính oxi hoá mạnh nhất là: | F₂ | Cl₂ | Br₂ | I₂
? Dung dịch AgNO₃ tác dụng với NaCl tạo kết tủa màu: | Trắng | Vàng | Đen | Xanh
? Dãy acid có tính acid tăng dần là: | HF < HCl < HBr < HI | HI < HBr < HCl < HF | HCl < HF < HI < HBr | HF < HI < HCl < HBr
? Nguyên tử halogen có bao nhiêu electron lớp ngoài cùng? | 7 | 1 | 5 | 8
+ Chất xúc tác làm tăng tốc độ phản ứng nhưng không bị tiêu hao.
- Hydrofluoric acid (HF) là acid mạnh nhất trong dãy HX.
= AgCl = Kết tủa trắng
= AgBr = Kết tủa vàng nhạt
= AgI = Kết tủa vàng
> F > Cl > Br > I` }
  ],
  essays: {
    1: [['Nguyên tố X có Z = 17. Viết cấu hình electron, xác định vị trí của X trong bảng tuần hoàn và cho biết X là kim loại hay phi kim.', ['1s²2s²2p⁶3s²3p⁵', 'chu kì 3', 'VIIA', 'phi kim'], 'Cấu hình 1s² 2s² 2p⁶ 3s² 3p⁵; ô 17, chu kì 3 (3 lớp e), nhóm VIIA (7 e lớp ngoài cùng); X là phi kim (chlorine).'],
      ['Trình bày sự hình thành liên kết ion trong phân tử NaCl.', ['Na⁺', 'Cl⁻', 'nhường', 'nhận'], 'Na (1 e ngoài cùng) nhường 1 e → Na⁺; Cl (7 e) nhận 1 e → Cl⁻; hai ion trái dấu hút nhau bằng lực tĩnh điện tạo liên kết ion; cả hai đạt cấu hình bền của khí hiếm.']],
    2: [['Cân bằng phản ứng sau bằng phương pháp thăng bằng electron: Cu + HNO₃ → Cu(NO₃)₂ + NO + H₂O. Xác định chất khử, chất oxi hoá.', ['3Cu', '8HNO₃', '2NO', '4H₂O'], '3Cu + 8HNO₃ → 3Cu(NO₃)₂ + 2NO + 4H₂O. Chất khử: Cu (0 → +2); chất oxi hoá: HNO₃ (N +5 → +2).'],
      ['Nêu các yếu tố ảnh hưởng đến tốc độ phản ứng, cho ví dụ thực tế.', ['nồng độ', 'nhiệt độ', 'diện tích', 'xúc tác'], 'Nồng độ (thổi khí vào bếp than), nhiệt độ (bảo quản thực phẩm trong tủ lạnh), diện tích bề mặt (chẻ nhỏ củi), áp suất, chất xúc tác (enzyme trong tiêu hoá, men trong lên men).']]
  }
});

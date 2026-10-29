/* Hoá học 12 – KNTT. Chương, bài theo mục lục SGK; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'hoa-hoc-12', lop: 12, mon: 'Hoá học', icon: '🧪', nhan: 'Chương', so: false,
  topics: [
    { hk: 1, nhan: 'Chương 1, 2', ten: 'Ester – Lipid. Carbohydrate', bai: ['Bài 1. Ester – Lipid', 'Bài 2. Xà phòng và chất giặt rửa', 'Bài 4. Giới thiệu về carbohydrate. Glucose và fructose', 'Bài 5. Saccharose và maltose', 'Bài 6. Tinh bột và cellulose'],
      lt: ['Ester RCOOR\'; thuỷ phân trong acid (thuận nghịch) và trong base (<b>phản ứng xà phòng hoá</b>, một chiều).', 'Chất béo: triester của glycerol và acid béo. Xà phòng: muối sodium/potassium của acid béo.', 'Glucose, fructose C₆H₁₂O₆ (monosaccharide); saccharose, maltose C₁₂H₂₂O₁₁ (disaccharide); tinh bột, cellulose (C₆H₁₀O₅)ₙ (polysaccharide).', 'Glucose có phản ứng tráng bạc; tinh bột + iodine → xanh tím.'],
      q: `? Phản ứng thuỷ phân ester trong môi trường base gọi là: | Xà phòng hoá | Ester hoá | Trùng hợp | Tráng bạc
? Chất béo là triester của acid béo với: | Glycerol | Ethanol | Methanol | Phenol
? Glucose và fructose có cùng công thức: | C₆H₁₂O₆ | C₁₂H₂₂O₁₁ | (C₆H₁₀O₅)ₙ | C₂H₅OH
? Saccharose thuộc loại: | Disaccharide | Monosaccharide | Polysaccharide | Protein
? Nhỏ iodine vào hồ tinh bột thấy màu: | Xanh tím | Đỏ gạch | Vàng | Trắng
+ Thuỷ phân tinh bột hoàn toàn thu được glucose.
- Cellulose tan tốt trong nước.
= Glucose = Monosaccharide, có trong quả nho
= Saccharose = Disaccharide, có trong mía
= Tinh bột = Polysaccharide, có trong gạo
= Cellulose = Polysaccharide, thành phần của gỗ, bông` },
    { hk: 1, nhan: 'Chương 3, 4', ten: 'Hợp chất chứa nitrogen. Polymer', bai: ['Bài 8. Amine', 'Bài 9. Amino acid và peptide', 'Bài 10. Protein và enzyme', 'Bài 12. Đại cương về polymer', 'Bài 13. Vật liệu polymer'],
      lt: ['Amine: dẫn xuất của NH₃; methylamine, aniline (C₆H₅NH₂ – tạo kết tủa trắng với nước bromine).', 'Amino acid: chứa –NH₂ và –COOH (lưỡng tính); peptide: liên kết –CO–NH–. Protein: đông tụ khi đun nóng; phản ứng màu biuret (tím).', 'Polymer: trùng hợp (PE, PVC, PS) và trùng ngưng (nylon-6,6, tơ lapsan). Vật liệu: chất dẻo, tơ, cao su, keo dán, vật liệu composite.'],
      q: `? Aniline có công thức: | C₆H₅NH₂ | CH₃NH₂ | C₆H₅OH | NH₃
? Liên kết peptide là liên kết: | –CO–NH– | –O–O– | –C=C– | –COO–
? Protein tác dụng với Cu(OH)₂ trong môi trường kiềm tạo màu: | Tím (phản ứng biuret) | Xanh lam | Đỏ gạch | Vàng
? PVC được điều chế bằng phản ứng: | Trùng hợp vinyl chloride | Trùng ngưng | Ester hoá | Xà phòng hoá
? Nylon-6,6 được tổng hợp bằng phản ứng: | Trùng ngưng | Trùng hợp | Cộng hydrogen | Thế
+ Amino acid là hợp chất lưỡng tính.
- Polyethylene được điều chế bằng phản ứng trùng ngưng.
= PE = Trùng hợp ethylene
= PVC = Trùng hợp vinyl chloride
= Nylon-6,6 = Trùng ngưng
= Cao su thiên nhiên = Polyisoprene` },
    { hk: 1, nhan: 'Chương 5', ten: 'Pin điện và điện phân', bai: ['Bài 15. Thế điện cực và nguồn điện hoá học', 'Bài 16. Điện phân', '*Bài 17. Ôn tập chương 5'],
      lt: ['Cặp oxi hoá – khử Mⁿ⁺/M; thế điện cực chuẩn E°; E° càng nhỏ, kim loại càng có tính khử mạnh.', 'Pin Galvani (Zn–Cu): anode (−) xảy ra oxi hoá, cathode (+) xảy ra khử; suất điện động E°pin = E°cathode − E°anode.', 'Điện phân: cathode (−) xảy ra sự khử, anode (+) xảy ra sự oxi hoá. Ứng dụng: điều chế kim loại (Al, Na), mạ điện, tinh chế kim loại.'],
      q: `? Trong pin điện hoá, tại anode xảy ra: | Sự oxi hoá | Sự khử | Không phản ứng | Kết tủa
? Trong điện phân, tại cathode xảy ra: | Sự khử | Sự oxi hoá | Sự hoà tan | Tạo khí O₂ luôn
? Kim loại nhôm được sản xuất bằng: | Điện phân nóng chảy Al₂O₃ | Nhiệt luyện bằng CO | Thuỷ luyện | Điện phân dung dịch AlCl₃
? Pin Zn–Cu có suất điện động chuẩn (E°Zn²⁺/Zn = −0,76 V; E°Cu²⁺/Cu = +0,34 V) là: | 1,10 V | 0,42 V | −1,10 V | 0,34 V
+ Mạ điện là một ứng dụng của điện phân.
- Thế điện cực chuẩn càng lớn thì kim loại có tính khử càng mạnh.
= Anode (pin) = Cực âm, xảy ra oxi hoá
= Cathode (pin) = Cực dương, xảy ra khử
= Mạ điện = Ứng dụng điện phân` },
    { hk: 2, nhan: 'Chương 6', ten: 'Đại cương về kim loại', bai: ['Bài 18. Cấu tạo và liên kết trong tinh thể kim loại', 'Bài 19. Tính chất vật lí và tính chất hoá học của kim loại', 'Bài 20. Kim loại trong tự nhiên và phương pháp tách kim loại', 'Bài 21. Hợp kim', 'Bài 22. Sự ăn mòn kim loại', '*Bài 23. Ôn tập chương 6'],
      lt: ['Liên kết kim loại: lực hút giữa ion dương và electron tự do → tính dẻo, dẫn điện, dẫn nhiệt, ánh kim.', 'Phương pháp tách kim loại: <b>nhiệt luyện</b> (CO, C, H₂ khử oxide: Fe, Cu…), <b>thuỷ luyện</b> (Cu, Ag), <b>điện phân</b> (Na, Al…).', '<b>Ăn mòn hoá học</b> và <b>ăn mòn điện hoá</b> (cần 2 điện cực khác nhau, tiếp xúc, cùng dung dịch chất điện li). Chống ăn mòn: phủ bề mặt, dùng kim loại hi sinh (Zn bảo vệ vỏ tàu thép).'],
      q: `? Kim loại dẫn điện tốt nhất là: | Ag | Cu | Al | Fe
? Kim loại có nhiệt độ nóng chảy thấp nhất là: | Hg | W | Fe | Cu
? Kim loại cứng nhất là: | Cr | Na | Pb | Al
? Để bảo vệ vỏ tàu biển bằng thép, người ta gắn tấm: | Zn | Cu | Ag | Pb
? Phương pháp điều chế Fe từ Fe₂O₃ bằng CO ở nhiệt độ cao là: | Nhiệt luyện | Thuỷ luyện | Điện phân | Chưng cất
+ Ăn mòn điện hoá cần hai điện cực khác bản chất tiếp xúc nhau trong dung dịch chất điện li.
- Vàng bị ăn mòn mạnh trong không khí.
= Ag = Dẫn điện tốt nhất
= Hg = Nhiệt độ nóng chảy thấp nhất (lỏng ở nhiệt độ thường)
= W = Nhiệt độ nóng chảy cao nhất
= Cr = Kim loại cứng nhất` },
    { hk: 2, nhan: 'Chương 7, 8', ten: 'Nguyên tố nhóm IA, IIA. Kim loại chuyển tiếp và phức chất', bai: ['Bài 24. Nguyên tố nhóm IA', 'Bài 25. Nguyên tố nhóm IIA', 'Bài 27. Đại cương về kim loại chuyển tiếp dãy thứ nhất', 'Bài 28. Sơ lược về phức chất', 'Bài 29. Một số tính chất và ứng dụng của phức chất'],
      lt: ['Nhóm IA (kim loại kiềm): Li, Na, K…; 1 e lớp ngoài cùng; tính khử rất mạnh; tác dụng mạnh với nước; bảo quản trong dầu hoả. Hợp chất: NaOH, NaHCO₃, Na₂CO₃, NaCl.', 'Nhóm IIA: Be, Mg, Ca, Sr, Ba; CaCO₃, CaO, Ca(OH)₂; <b>nước cứng</b> chứa nhiều Ca²⁺, Mg²⁺; làm mềm bằng Na₂CO₃, Na₃PO₄, trao đổi ion.', 'Kim loại chuyển tiếp dãy thứ nhất (Sc → Cu): nhiều số oxi hoá, hợp chất có màu. Phức chất: nguyên tử trung tâm + phối tử (ví dụ [Cu(NH₃)₄]²⁺ màu xanh lam đậm).'],
      q: `? Kim loại kiềm được bảo quản bằng cách: | Ngâm trong dầu hoả | Ngâm trong nước | Để ngoài không khí | Ngâm trong ethanol
? Nước cứng chứa nhiều ion: | Ca²⁺ và Mg²⁺ | Na⁺ và K⁺ | Cl⁻ và NO₃⁻ | H⁺ và OH⁻
? Chất dùng làm mềm nước cứng là: | Na₂CO₃ | NaCl | HCl | CaCl₂
? Baking soda (bột nở) có công thức: | NaHCO₃ | Na₂CO₃ | NaOH | CaCO₃
? Thạch cao nung dùng bó bột có công thức gần đúng: | CaSO₄·0,5H₂O | CaCO₃ | CaO | Ca(OH)₂
+ Kim loại kiềm có tính khử rất mạnh.
- Kim loại kiềm có 2 electron lớp ngoài cùng.
= NaHCO₃ = Bột nở (baking soda)
= CaCO₃ = Đá vôi
= CaO = Vôi sống
= Ca(OH)₂ = Vôi tôi` }
  ],
  essays: {
    1: [['Viết phương trình xà phòng hoá tristearin bằng NaOH. Giải thích vì sao xà phòng có khả năng giặt rửa.', ['C₁₇H₃₅COONa', 'glycerol', 'ưa nước', 'kị nước'], '(C₁₇H₃₅COO)₃C₃H₅ + 3NaOH → 3C₁₇H₃₅COONa + C₃H₅(OH)₃. Phân tử xà phòng có đầu ưa nước và đuôi kị nước (ưa dầu); đuôi gắn vào vết bẩn dầu mỡ, đầu hướng ra nước, chia nhỏ vết bẩn và kéo vào nước.'],
      ['Trình bày nguyên tắc hoạt động của pin Zn – Cu.', ['anode', 'cathode', 'Zn', 'Cu²⁺'], 'Anode (−) Zn bị oxi hoá: Zn → Zn²⁺ + 2e; electron chạy qua dây dẫn sang cathode (+) Cu, tại đó Cu²⁺ + 2e → Cu; cầu muối cân bằng điện tích; E°pin = 0,34 − (−0,76) = 1,10 V.']],
    2: [['Trình bày các phương pháp tách kim loại, cho ví dụ mỗi phương pháp.', ['nhiệt luyện', 'thuỷ luyện', 'điện phân'], 'Nhiệt luyện: khử oxide bằng CO, C, H₂ (Fe₂O₃ + 3CO → 2Fe + 3CO₂). Thuỷ luyện: dùng kim loại mạnh khử ion kim loại trong dung dịch (Fe + CuSO₄ → FeSO₄ + Cu). Điện phân: điện phân nóng chảy Al₂O₃ để điều chế Al.'],
      ['Nêu tác hại của nước cứng và các phương pháp làm mềm nước cứng.', ['Ca²⁺', 'Mg²⁺', 'làm mềm'], 'Tác hại: đóng cặn ấm, nồi hơi, tắc ống dẫn, giảm tác dụng xà phòng, làm thực phẩm lâu chín. Làm mềm: đun sôi (nước cứng tạm thời), dùng Na₂CO₃, Na₃PO₄, phương pháp trao đổi ion.']]
  }
});

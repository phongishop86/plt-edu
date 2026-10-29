/* Hoá học 11 – KNTT. Chương, bài theo mục lục SGK; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'hoa-hoc-11', lop: 11, mon: 'Hoá học', icon: '🧪', nhan: 'Chương', so: false,
  topics: [
    { hk: 1, nhan: 'Chương 1', ten: 'Cân bằng hoá học', bai: ['Bài 1. Khái niệm về cân bằng hoá học', 'Bài 2. Cân bằng trong dung dịch nước', '*Bài 3. Ôn tập chương 1'],
      lt: ['Phản ứng thuận nghịch; trạng thái cân bằng: tốc độ thuận = tốc độ nghịch. Hằng số cân bằng K_C.', '<b>Nguyên lí Le Chatelier</b>: cân bằng chuyển dịch theo chiều chống lại sự thay đổi (nồng độ, nhiệt độ, áp suất).', 'Thuyết Brønsted – Lowry: acid cho H⁺, base nhận H⁺. pH = −lg[H⁺]; pH < 7 acid, = 7 trung tính, > 7 base.'],
      q: `? Theo Brønsted – Lowry, acid là chất: | Cho proton (H⁺) | Nhận proton | Cho electron | Nhận OH⁻
? Dung dịch có [H⁺] = 10⁻³ M có pH bằng: | 3 | 11 | −3 | 7
? Khi tăng nhiệt độ, cân bằng chuyển dịch theo chiều: | Phản ứng thu nhiệt | Phản ứng toả nhiệt | Không chuyển dịch | Giảm số mol khí
? Tại trạng thái cân bằng hoá học: | Tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch | Phản ứng dừng hẳn | Nồng độ các chất bằng nhau | Chỉ còn sản phẩm
+ Chất xúc tác không làm chuyển dịch cân bằng.
- Cân bằng hoá học là cân bằng tĩnh, phản ứng dừng lại.
= pH < 7 = Môi trường acid
= pH = 7 = Môi trường trung tính
= pH > 7 = Môi trường base` },
    { hk: 1, nhan: 'Chương 2', ten: 'Nitrogen – Sulfur', bai: ['Bài 4. Nitrogen', 'Bài 5. Ammonia. Muối ammonium', 'Bài 6. Một số hợp chất của nitrogen với oxygen', 'Bài 7. Sulfur và sulfur dioxide', 'Bài 8. Sulfuric acid và muối sulfate', '*Bài 9. Ôn tập chương 2'],
      lt: ['N₂ chiếm ~78% thể tích không khí, kém hoạt động ở nhiệt độ thường (liên kết ba bền).', 'NH₃: khí mùi khai, tan nhiều trong nước, có tính base; sản xuất bằng phương pháp Haber: N₂ + 3H₂ ⇌ 2NH₃.', 'HNO₃: acid mạnh, tính oxi hoá mạnh. NOₓ gây mưa acid, hiện tượng phú dưỡng.', 'SO₂ vừa có tính oxi hoá vừa tính khử; gây mưa acid. H₂SO₄ đặc có tính háo nước, oxi hoá mạnh; pha loãng: rót từ từ acid vào nước.'],
      q: `? Khí chiếm khoảng 78% thể tích không khí là: | N₂ | O₂ | CO₂ | Ar
? Khí có mùi khai, tan nhiều trong nước, tạo dung dịch có tính base là: | NH₃ | SO₂ | NO₂ | N₂
? Khi pha loãng H₂SO₄ đặc, phải: | Rót từ từ acid vào nước | Rót nhanh nước vào acid | Đun nóng acid | Rót acid vào nước nóng sôi
? Khí gây mưa acid chủ yếu là: | SO₂ và NOₓ | O₂ và N₂ | H₂ và He | CO và CH₄
? Phương trình tổng hợp ammonia là: | N₂ + 3H₂ ⇌ 2NH₃ | N₂ + O₂ → 2NO | NH₃ + HCl → NH₄Cl | 2NO + O₂ → 2NO₂
+ H₂SO₄ đặc có tính háo nước.
- N₂ rất hoạt động hoá học ở nhiệt độ thường.
= NH₃ = Khí mùi khai, tính base
= SO₂ = Khí gây mưa acid
= H₂SO₄ đặc = Háo nước, oxi hoá mạnh
= HNO₃ = Acid có tính oxi hoá mạnh` },
    { hk: 1, nhan: 'Chương 3, 4', ten: 'Đại cương hoá học hữu cơ. Hydrocarbon', bai: ['Bài 10. Hợp chất hữu cơ và hoá học hữu cơ', 'Bài 11. Phương pháp tách biệt và tinh chế hợp chất hữu cơ', 'Bài 12. Công thức phân tử hợp chất hữu cơ', 'Bài 13. Cấu tạo hoá học hợp chất hữu cơ', 'Bài 15. Alkane', 'Bài 16. Hydrocarbon không no', 'Bài 17. Arene (hydrocarbon thơm)'],
      lt: ['Phương pháp tách, tinh chế: chưng cất, chiết, kết tinh, sắc kí cột. Phổ hồng ngoại (IR) xác định nhóm chức; phổ khối lượng (MS) xác định phân tử khối.', '<b>Đồng phân</b>: cùng công thức phân tử, khác cấu tạo. <b>Đồng đẳng</b>: hơn kém nhau một hay nhiều nhóm CH₂.', 'Alkane CₙH₂ₙ₊₂ (phản ứng thế, cháy, cracking); alkene CₙH₂ₙ (phản ứng cộng, trùng hợp; quy tắc Markovnikov); alkyne CₙH₂ₙ₋₂; arene: benzene C₆H₆, toluene.'],
      q: `? Công thức chung của alkene là: | CₙH₂ₙ | CₙH₂ₙ₊₂ | CₙH₂ₙ₋₂ | CₙH₂ₙ₋₆
? Các chất cùng công thức phân tử nhưng khác cấu tạo gọi là: | Đồng phân | Đồng đẳng | Đồng vị | Thù hình
? Phương pháp phổ dùng xác định phân tử khối hợp chất hữu cơ là: | Phổ khối lượng (MS) | Phổ hồng ngoại (IR) | Chưng cất | Kết tinh
? Benzene có công thức phân tử: | C₆H₆ | C₆H₁₂ | C₆H₁₄ | C₇H₈
? Phản ứng đặc trưng của alkane là: | Phản ứng thế | Phản ứng cộng | Phản ứng trùng hợp | Phản ứng tráng bạc
? Ethylene làm mất màu nước bromine do phản ứng: | Cộng | Thế | Tách | Trùng ngưng
+ Methane và ethane thuộc cùng dãy đồng đẳng.
- Alkane có phản ứng cộng đặc trưng với nước bromine.
= CₙH₂ₙ₊₂ = Alkane
= CₙH₂ₙ = Alkene
= CₙH₂ₙ₋₂ = Alkyne
= C₆H₆ = Benzene` },
    { hk: 2, nhan: 'Chương 5', ten: 'Dẫn xuất halogen – Alcohol – Phenol', bai: ['Bài 19. Dẫn xuất halogen', 'Bài 20. Alcohol', 'Bài 21. Phenol', '*Bài 22. Ôn tập chương 5'],
      lt: ['Dẫn xuất halogen: phản ứng thế nguyên tử halogen bằng nhóm OH, phản ứng tách (quy tắc Zaitsev).', '<b>Alcohol</b>: nhóm –OH gắn với carbon no; ethanol C₂H₅OH; tác dụng với Na, oxi hoá thành aldehyde/ketone; glycerol hoà tan Cu(OH)₂ tạo dung dịch xanh lam.', '<b>Phenol</b> C₆H₅OH: –OH gắn trực tiếp vòng benzene; tính acid yếu (tác dụng NaOH); tạo kết tủa trắng với nước bromine.'],
      q: `? Ethanol có công thức: | C₂H₅OH | CH₃OH | C₆H₅OH | CH₃COOH
? Phenol có công thức: | C₆H₅OH | C₂H₅OH | C₆H₆ | C₆H₅CH₃
? Chất hoà tan Cu(OH)₂ tạo dung dịch xanh lam là: | Glycerol | Ethanol | Phenol | Methane
? Phenol tác dụng với nước bromine tạo: | Kết tủa trắng | Kết tủa vàng | Khí không màu | Dung dịch xanh
? Phenol khác ethanol ở chỗ phenol tác dụng được với: | Dung dịch NaOH | Kim loại Na | Oxygen | Không có gì
+ Nhóm –OH của phenol gắn trực tiếp vào vòng benzene.
- Ethanol có tính acid mạnh hơn phenol.
= C₂H₅OH = Ethanol
= C₆H₅OH = Phenol
= C₃H₅(OH)₃ = Glycerol` },
    { hk: 2, nhan: 'Chương 6', ten: 'Hợp chất carbonyl – Carboxylic acid', bai: ['Bài 23. Hợp chất carbonyl', 'Bài 24. Carboxylic acid', '*Bài 25. Ôn tập chương 6'],
      lt: ['Hợp chất carbonyl: aldehyde (–CHO), ketone (–CO–). Aldehyde có phản ứng tráng bạc (thuốc thử Tollens), tác dụng Cu(OH)₂/OH⁻ đun nóng tạo kết tủa đỏ gạch.', '<b>Carboxylic acid</b> (–COOH): acetic acid CH₃COOH; tính acid yếu; phản ứng ester hoá với alcohol (xúc tác H₂SO₄ đặc).'],
      q: `? Nhóm chức của aldehyde là: | –CHO | –COOH | –OH | –CO– giữa hai gốc
? Phản ứng tráng bạc dùng để nhận biết: | Aldehyde | Ketone | Alcohol | Alkane
? Acetic acid có công thức: | CH₃COOH | HCOOH | C₂H₅OH | CH₃CHO
? Phản ứng giữa carboxylic acid và alcohol tạo ester gọi là phản ứng: | Ester hoá | Xà phòng hoá | Trùng hợp | Tráng bạc
+ Giấm ăn là dung dịch acetic acid loãng.
- Ketone tham gia phản ứng tráng bạc giống aldehyde.
= –CHO = Aldehyde
= –COOH = Carboxylic acid
= –CO– = Ketone
= –OH = Alcohol` }
  ],
  essays: {
    1: [['Viết phương trình tổng hợp NH₃ trong công nghiệp. Nêu các biện pháp làm cân bằng chuyển dịch theo chiều thuận (biết phản ứng toả nhiệt).', ['N₂ + 3H₂', 'áp suất', 'nhiệt độ', 'xúc tác'], 'N₂ + 3H₂ ⇌ 2NH₃ (Δ_rH < 0). Tăng áp suất (giảm số mol khí), tăng nồng độ N₂, H₂, tách NH₃ ra; nhiệt độ vừa phải (thấp có lợi cho cân bằng nhưng tốc độ chậm nên chọn ~450 °C) và dùng xúc tác Fe để tăng tốc độ.'],
      ['Trình bày nguyên nhân, tác hại của mưa acid và biện pháp hạn chế.', ['SO₂', 'NOₓ', 'tác hại', 'biện pháp'], 'Nguyên nhân: SO₂, NOₓ từ đốt nhiên liệu, công nghiệp, phương tiện giao thông. Tác hại: phá huỷ công trình, làm chua đất, hại cây trồng, sinh vật nước. Biện pháp: xử lí khí thải, dùng năng lượng sạch, giảm phương tiện cá nhân.']],
    2: [['Bằng phương pháp hoá học, nhận biết ba dung dịch: ethanol, glycerol, phenol.', ['Cu(OH)₂', 'nước bromine', 'kết tủa'], 'Dùng nước bromine: phenol tạo kết tủa trắng. Dùng Cu(OH)₂: glycerol hoà tan tạo dung dịch xanh lam. Còn lại là ethanol.'],
      ['Viết phương trình phản ứng ester hoá giữa acetic acid và ethanol. Nêu điều kiện phản ứng.', ['CH₃COOC₂H₅', 'H₂SO₄ đặc', 'thuận nghịch'], 'CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O; xúc tác H₂SO₄ đặc, đun nóng; phản ứng thuận nghịch.']]
  }
});

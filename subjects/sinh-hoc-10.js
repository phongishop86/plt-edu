/* Sinh học 10 – KNTT. Phần, chương, bài theo mục lục SGK; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'sinh-hoc-10', lop: 10, mon: 'Sinh học', icon: '🧬', nhan: 'Chương', so: false,
  topics: [
    { hk: 1, nhan: 'Mở đầu', ten: 'Giới thiệu Sinh học và các cấp độ tổ chức sống', bai: ['Bài 1. Giới thiệu khái quát môn Sinh học', 'Bài 2. Phương pháp nghiên cứu và học tập môn Sinh học', 'Bài 3. Các cấp độ tổ chức của thế giới sống'],
      lt: ['Sinh học nghiên cứu sự sống; ngành nghề: y dược, công nghệ sinh học, nông nghiệp, môi trường.', 'Phương pháp: quan sát, làm thí nghiệm, nghiên cứu thực địa; tin sinh học.', 'Các cấp độ tổ chức sống: phân tử → bào quan → <b>tế bào</b> → mô → cơ quan → hệ cơ quan → <b>cơ thể</b> → <b>quần thể</b> → <b>quần xã</b> → <b>hệ sinh thái</b> → sinh quyển. Tế bào là đơn vị cơ bản của sự sống.'],
      q: `? Đơn vị cấu trúc và chức năng cơ bản của sự sống là: | Tế bào | Phân tử | Mô | Cơ quan
? Cấp độ tổ chức sống lớn nhất là: | Sinh quyển | Quần thể | Quần xã | Cơ thể
? Tập hợp các cá thể cùng loài sống trong một khu vực là: | Quần thể | Quần xã | Hệ sinh thái | Mô
+ Thế giới sống được tổ chức theo nguyên tắc thứ bậc.
- Phân tử là cấp độ tổ chức sống cơ bản.
> Tế bào > Cơ thể > Quần thể > Quần xã > Hệ sinh thái > Sinh quyển` },
    { hk: 1, nhan: 'Chương 1, 2', ten: 'Thành phần hoá học và cấu trúc tế bào', bai: ['Bài 4. Các nguyên tố hoá học và nước', 'Bài 5. Các phân tử sinh học', 'Bài 6. Thực hành: Nhận biết một số phân tử sinh học', 'Bài 7. Tế bào nhân sơ', 'Bài 8. Tế bào nhân thực', 'Bài 9. Thực hành: Quan sát tế bào'],
      lt: ['Nguyên tố đa lượng (C, H, O, N…), vi lượng (Fe, Zn, I…). Carbon là nguyên tố quan trọng tạo khung các phân tử hữu cơ. Nước chiếm phần lớn khối lượng tế bào, là dung môi.', 'Phân tử sinh học: <b>carbohydrate</b> (năng lượng, cấu trúc), <b>lipid</b> (dự trữ, cấu tạo màng), <b>protein</b> (cấu trúc, enzyme…), <b>nucleic acid</b> (DNA, RNA – mang thông tin di truyền).', '<b>Tế bào nhân sơ</b> (vi khuẩn): chưa có màng nhân, không có bào quan có màng, ribosome nhỏ.', '<b>Tế bào nhân thực</b>: có nhân hoàn chỉnh; ti thể (hô hấp), lục lạp (quang hợp – ở thực vật), lưới nội chất, bộ máy Golgi, lysosome…'],
      q: `? Tế bào nhân sơ khác tế bào nhân thực ở chỗ: | Chưa có màng nhân | Có ti thể | Có lục lạp | Có lưới nội chất
? Bào quan thực hiện quang hợp là: | Lục lạp | Ti thể | Ribosome | Lysosome
? Bào quan được ví như "nhà máy năng lượng" của tế bào là: | Ti thể | Lục lạp | Bộ máy Golgi | Nhân
? Phân tử mang thông tin di truyền là: | DNA | Glucose | Lipid | Cellulose
? Iodine là nguyên tố: | Vi lượng | Đa lượng | Không cần thiết | Kim loại kiềm
? Nơi tổng hợp protein trong tế bào là: | Ribosome | Lysosome | Không bào | Trung thể
+ Vi khuẩn có cấu tạo tế bào nhân sơ.
+ Thành tế bào thực vật được cấu tạo chủ yếu từ cellulose.
- Tế bào nhân sơ có nhiều bào quan có màng bao bọc.
- Lục lạp có ở mọi tế bào động vật.
= Ti thể = Hô hấp tế bào, tạo ATP
= Lục lạp = Quang hợp
= Ribosome = Tổng hợp protein
= Lysosome = Phân giải chất, bào quan già
= Nhân = Chứa vật chất di truyền, điều khiển hoạt động tế bào` },
    { hk: 1, nhan: 'Chương 3, 4', ten: 'Trao đổi chất qua màng, truyền tin và chuyển hoá năng lượng', bai: ['Bài 10. Trao đổi chất qua màng tế bào', 'Bài 11. Thực hành: Thí nghiệm co và phản co nguyên sinh', 'Bài 12. Truyền tin tế bào', 'Bài 13. Khái quát về chuyển hoá vật chất và năng lượng', 'Bài 14. Phân giải và tổng hợp các chất trong tế bào', 'Bài 15. Thực hành: Thí nghiệm phân tích ảnh hưởng của một số yếu tố đến hoạt tính enzyme'],
      lt: ['Vận chuyển <b>thụ động</b> (theo chiều gradient nồng độ, không tốn năng lượng: khuếch tán, thẩm thấu) và <b>chủ động</b> (ngược gradient, tốn ATP); nhập bào, xuất bào.', 'Môi trường ưu trương → tế bào co nguyên sinh; nhược trương → tế bào trương nước.', '<b>ATP</b>: "đồng tiền năng lượng" của tế bào. <b>Enzyme</b>: chất xúc tác sinh học, hoạt tính chịu ảnh hưởng của nhiệt độ, pH, nồng độ.', 'Quang hợp: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (ánh sáng, diệp lục). Hô hấp tế bào: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP.'],
      q: `? Vận chuyển các chất ngược chiều gradient nồng độ, tốn năng lượng là: | Vận chuyển chủ động | Khuếch tán | Thẩm thấu | Vận chuyển thụ động
? Đặt tế bào thực vật vào môi trường ưu trương, tế bào sẽ: | Co nguyên sinh | Trương nước và vỡ | Không thay đổi | Phân chia
? "Đồng tiền năng lượng" của tế bào là: | ATP | DNA | Glucose | Protein
? Enzyme là: | Chất xúc tác sinh học | Nguồn năng lượng chính | Vật chất di truyền | Hormone
? Sản phẩm của quang hợp gồm: | Glucose và oxygen | CO₂ và nước | ATP và CO₂ | Protein và lipid
+ Nhiệt độ quá cao có thể làm enzyme mất hoạt tính.
- Khuếch tán là hình thức vận chuyển tiêu tốn ATP.
= Khuếch tán = Thụ động, theo gradient nồng độ
= Bơm Na⁺/K⁺ = Vận chuyển chủ động
= Thực bào = Nhập bào các phân tử lớn` },
    { hk: 2, nhan: 'Chương 5', ten: 'Chu kì tế bào và phân bào', bai: ['Bài 16. Chu kì tế bào và nguyên phân', 'Bài 17. Giảm phân', 'Bài 18. Thực hành: Làm và quan sát tiêu bản quá trình nguyên phân và giảm phân', 'Bài 19. Công nghệ tế bào'],
      lt: ['Chu kì tế bào: <b>kì trung gian</b> (G1, S – nhân đôi DNA, G2) và <b>phân bào</b>.', '<b>Nguyên phân</b>: 4 kì (đầu, giữa, sau, cuối) → 2 tế bào con giống hệt mẹ (2n). Ý nghĩa: sinh trưởng, tái sinh.', '<b>Giảm phân</b>: 2 lần phân bào, 1 lần nhân đôi NST → 4 tế bào con (n); trao đổi chéo tạo biến dị tổ hợp.', '<b>Công nghệ tế bào</b>: nuôi cấy mô, nhân bản vô tính, tế bào gốc.'],
      q: `? Pha nhân đôi DNA trong kì trung gian là: | Pha S | Pha G1 | Pha G2 | Kì giữa
? Ở kì giữa nguyên phân, NST: | Xếp thành một hàng ở mặt phẳng xích đạo | Tháo xoắn | Phân li về hai cực | Nhân đôi
? Từ một tế bào 2n, nguyên phân tạo ra: | 2 tế bào 2n | 4 tế bào n | 2 tế bào n | 4 tế bào 2n
? Hiện tượng trao đổi chéo xảy ra ở: | Kì đầu giảm phân I | Kì giữa nguyên phân | Kì sau nguyên phân | Kì cuối giảm phân II
? Nuôi cấy mô tế bào thực vật thuộc: | Công nghệ tế bào | Công nghệ gene | Lai hữu tính | Đột biến
+ Giảm phân góp phần tạo biến dị tổ hợp.
- Nguyên phân tạo ra giao tử.
> Kì đầu > Kì giữa > Kì sau > Kì cuối` },
    { hk: 2, nhan: 'Chương 6, 7', ten: 'Sinh học vi sinh vật và virus', bai: ['Bài 20. Sự đa dạng và phương pháp nghiên cứu vi sinh vật', 'Bài 21. Trao đổi chất, sinh trưởng và sinh sản ở vi sinh vật', 'Bài 22. Vai trò và ứng dụng của vi sinh vật', 'Bài 23. Thực hành: Tìm hiểu về các sản phẩm công nghệ vi sinh vật', 'Bài 24. Khái quát về virus', 'Bài 25. Một số bệnh do virus và các thành tựu nghiên cứu ứng dụng virus', 'Bài 26. Thực hành: Điều tra một số bệnh do virus và tuyên truyền phòng chống bệnh'],
      lt: ['Vi sinh vật: vi khuẩn, vi nấm, vi tảo, động vật nguyên sinh; kích thước nhỏ, sinh trưởng nhanh.', 'Sinh trưởng của quần thể vi khuẩn trong nuôi cấy không liên tục: pha tiềm phát → luỹ thừa → cân bằng → suy vong.', 'Ứng dụng: sữa chua, nước mắm, rượu, phân bón vi sinh, xử lí rác thải, sản xuất kháng sinh.', '<b>Virus</b>: chưa có cấu tạo tế bào, gồm lõi nucleic acid và vỏ protein (capsid); sống kí sinh nội bào bắt buộc. Bệnh do virus: cúm, sởi, HIV/AIDS, COVID-19; phòng bằng vaccine.'],
      q: `? Virus khác vi khuẩn ở điểm: | Chưa có cấu tạo tế bào | Có thành tế bào | Có ribosome | Sống tự do
? Virus sống: | Kí sinh nội bào bắt buộc | Tự do trong đất | Quang hợp | Phân giải chất hữu cơ tự do
? Làm sữa chua là ứng dụng của vi khuẩn: | Lactic | Lam | Lao | Tả
? Pha mà số lượng tế bào vi khuẩn tăng nhanh nhất là: | Pha luỹ thừa | Pha tiềm phát | Pha cân bằng | Pha suy vong
? Biện pháp phòng bệnh do virus hiệu quả là: | Tiêm vaccine | Dùng kháng sinh | Ăn nhiều đường | Không rửa tay
+ Kháng sinh không có tác dụng diệt virus.
- Virus có cấu tạo tế bào nhân sơ.
> Pha tiềm phát > Pha luỹ thừa > Pha cân bằng > Pha suy vong
= Vi khuẩn lactic = Sữa chua, dưa muối
= Nấm men = Làm bánh mì, rượu
= Virus = Cúm, sởi, HIV` }
  ],
  essays: {
    1: [['So sánh cấu tạo tế bào nhân sơ và tế bào nhân thực.', ['màng nhân', 'bào quan', 'ribosome', 'kích thước'], 'Nhân sơ: kích thước nhỏ, chưa có màng nhân (vùng nhân), không có bào quan có màng, ribosome 70S. Nhân thực: kích thước lớn, nhân có màng, nhiều bào quan có màng (ti thể, lưới nội chất, Golgi…), ribosome 80S.'],
      ['Phân biệt vận chuyển thụ động và vận chuyển chủ động qua màng tế bào.', ['gradient', 'năng lượng', 'ATP', 'protein'], 'Thụ động: theo chiều gradient nồng độ, không tiêu tốn năng lượng (khuếch tán qua lớp phospholipid hoặc kênh protein, thẩm thấu). Chủ động: ngược gradient, tiêu tốn ATP, cần protein vận chuyển (bơm).']],
    2: [['So sánh nguyên phân và giảm phân.', ['tế bào sinh dưỡng', 'giao tử', '2n', 'n'], 'Nguyên phân: tế bào sinh dưỡng, 1 lần phân bào, tạo 2 tế bào 2n giống mẹ; giảm phân: tế bào sinh dục chín, 2 lần phân bào, tạo 4 tế bào n, có trao đổi chéo, tạo biến dị tổ hợp.'],
      ['Trình bày cấu tạo của virus và các biện pháp phòng chống bệnh do virus.', ['capsid', 'nucleic acid', 'vaccine'], 'Cấu tạo: lõi nucleic acid (DNA hoặc RNA), vỏ protein (capsid), một số có vỏ ngoài. Phòng chống: tiêm vaccine, đeo khẩu trang, rửa tay, vệ sinh môi trường, diệt vật trung gian truyền bệnh, cách li người bệnh.']]
  }
});

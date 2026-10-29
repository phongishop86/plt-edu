/* Tự nhiên và Xã hội 3 – KNTT. Chủ đề, bài theo mục lục SGK; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'tnxh-3', lop: 3, mon: 'Tự nhiên và Xã hội', icon: '🌳',
  topics: [
    { hk: 1, ten: 'Gia đình', bai: ['Họ hàng và những ngày kỉ niệm của gia đình', 'Phòng tránh hoả hoạn khi ở nhà', 'Vệ sinh xung quanh nhà', 'Ôn tập chủ đề Gia đình'],
      lt: ['<b>Họ nội</b>: họ hàng bên bố (ông bà nội, cô, chú, bác). <b>Họ ngoại</b>: họ hàng bên mẹ (ông bà ngoại, cậu, dì).', 'Nguyên nhân cháy: đun nấu bất cẩn, chập điện, nghịch lửa, để chất dễ cháy gần bếp.', 'Khi có cháy: bình tĩnh, kêu cứu, thoát ra ngoài theo lối an toàn, cúi thấp người, che mũi bằng khăn ướt, gọi <b>114</b>.', 'Vệ sinh quanh nhà: quét dọn, khơi thông cống rãnh, phát quang bụi rậm để phòng muỗi, chuột.'],
      q: `? Em gái của mẹ, em gọi là: | Dì | Cô | Thím | Bác gái
? Em trai của bố, em gọi là: | Chú | Cậu | Dượng | Bác
? Anh trai của mẹ, em gọi là: | Cậu | Chú | Bác | Dượng
? Số điện thoại báo cháy là: | 114 | 113 | 115 | 116
? Khi thoát khỏi đám cháy có nhiều khói, em nên: | Cúi thấp người, che mũi miệng bằng khăn ướt | Đứng thẳng chạy nhanh | Trốn vào tủ | Đi thang máy
? Bụi rậm, nước đọng quanh nhà là nơi sinh sản của: | Muỗi | Chim sẻ | Bướm | Cá
+ Ông bà nội là bố mẹ của bố.
+ Không nghịch lửa, diêm, bật lửa để phòng cháy.
+ Khơi thông cống rãnh giúp phòng chống dịch bệnh.
- Khi có cháy nên trốn vào gầm giường.
- Cô là chị hoặc em gái của mẹ.
- Dùng thang máy để thoát hiểm khi có cháy.
# Họ nội: Ông bà nội, Cô, Chú, Bác (anh của bố)
# Họ ngoại: Ông bà ngoại, Dì, Cậu
> Bình tĩnh, kêu cứu > Che mũi miệng bằng khăn ướt > Cúi thấp người thoát ra lối an toàn > Gọi 114` },
    { hk: 1, ten: 'Trường học', bai: ['Hoạt động kết nối với cộng đồng', 'Truyền thống trường em', 'Giữ an toàn và vệ sinh ở trường', 'Ôn tập chủ đề Trường học'],
      lt: ['Hoạt động kết nối cộng đồng: trồng cây, quyên góp ủng hộ, thăm gia đình chính sách, giữ vệ sinh đường làng.', 'Truyền thống trường: năm thành lập, thành tích, thầy cô và học sinh tiêu biểu.', 'An toàn ở trường: không leo trèo, đùa nghịch nguy hiểm; vệ sinh: bỏ rác đúng nơi, rửa tay, giữ nhà vệ sinh sạch.'],
      q: `? Hoạt động nào là kết nối với cộng đồng? | Quyên góp sách vở cho học sinh vùng khó khăn | Đá bóng trong lớp | Chép bài | Xem ti vi
? Để tìm hiểu truyền thống trường, em có thể: | Hỏi thầy cô, xem phòng truyền thống | Hỏi người bán hàng rong | Xem phim hoạt hình | Đoán
+ Tri ân thầy cô cũ là một truyền thống tốt đẹp của nhà trường.
- Giữ vệ sinh trường chỉ là việc của cô lao công.
# Giữ an toàn: Đi cầu thang bên phải, Không leo trèo lan can, Không đùa nghịch nguy hiểm
# Giữ vệ sinh: Bỏ rác vào thùng, Rửa tay sau khi đi vệ sinh, Lau bảng sạch` },
    { hk: 1, ten: 'Cộng đồng địa phương', bai: ['Hoạt động sản xuất nông nghiệp', 'Hoạt động sản xuất thủ công và công nghiệp', 'Di tích lịch sử – văn hoá và cảnh quan thiên nhiên', 'Ôn tập chủ đề Cộng đồng địa phương'],
      lt: ['<b>Nông nghiệp</b>: trồng trọt, chăn nuôi, nuôi trồng và đánh bắt thuỷ sản, trồng rừng.', '<b>Thủ công</b>: làm bằng tay với dụng cụ đơn giản (gốm, mây tre đan, dệt lụa). <b>Công nghiệp</b>: dùng máy móc sản xuất hàng loạt (nhà máy dệt, ô tô, điện).', 'Di tích lịch sử – văn hoá: Văn Miếu – Quốc Tử Giám, Cố đô Huế, Đền Hùng… Cảnh quan: vịnh Hạ Long, Phong Nha – Kẻ Bàng…'],
      q: `? Hoạt động nào là sản xuất nông nghiệp? | Trồng lúa, nuôi lợn | Dệt vải trong nhà máy | Làm gốm bằng tay | Sản xuất ô tô
? Làng gốm Bát Tràng nổi tiếng với nghề: | Làm gốm sứ | Dệt lụa | Đúc đồng | Làm nón
? Sản xuất công nghiệp có đặc điểm: | Dùng máy móc, sản xuất số lượng lớn | Làm hoàn toàn bằng tay | Chỉ ở trên đồng ruộng | Chỉ nuôi trồng thuỷ sản
? Văn Miếu – Quốc Tử Giám ở: | Hà Nội | Huế | Thành phố Hồ Chí Minh | Đà Nẵng
+ Nuôi tôm, cá là hoạt động nông nghiệp (thuỷ sản).
+ Cần giữ gìn, bảo vệ di tích lịch sử – văn hoá.
- Làm mây tre đan là sản xuất công nghiệp hiện đại.
- Có thể khắc tên lên di tích để làm kỉ niệm.
# Nông nghiệp: Trồng lúa, Chăn nuôi bò, Nuôi cá, Trồng rừng
# Thủ công: Làm gốm bằng tay, Đan rổ rá, Thêu tranh
# Công nghiệp: Sản xuất ô tô, Nhà máy dệt, Sản xuất điện` },
    { hk: 1, ten: 'Thực vật và động vật', bai: ['Một số bộ phận của thực vật', 'Chức năng một số bộ phận của thực vật', 'Một số bộ phận của động vật và chức năng của chúng', 'Sử dụng hợp lí thực vật và động vật', 'Ôn tập chủ đề Thực vật và động vật'],
      lt: ['Cây có: rễ, thân, lá, hoa, quả. <b>Rễ cọc</b> (một rễ to, nhiều rễ con), <b>rễ chùm</b> (nhiều rễ bằng nhau). Thân đứng, thân leo, thân bò.', '<b>Rễ</b> hút nước và muối khoáng; <b>thân</b> vận chuyển nước, chất dinh dưỡng; <b>lá</b> quang hợp, hô hấp, thoát hơi nước.', 'Động vật có: đầu, mình, cơ quan di chuyển. Lớp bao phủ: lông vũ (chim), lông mao (thú), vảy (cá, bò sát), da trần (ếch).', 'Sử dụng hợp lí: khai thác vừa đủ, bảo vệ loài quý hiếm, trồng rừng.'],
      q: `? Bộ phận nào của cây hút nước và muối khoáng? | Rễ | Lá | Hoa | Quả
? Bộ phận nào của cây giúp vận chuyển nước và chất dinh dưỡng? | Thân | Rễ | Hoa | Hạt
? Cây lúa có loại rễ: | Rễ chùm | Rễ cọc | Rễ phụ | Không có rễ
? Cây mướp có loại thân: | Thân leo | Thân đứng | Thân bò | Thân gỗ to
? Cơ thể chim được bao phủ bởi: | Lông vũ | Vảy | Da trần | Lông mao
? Cá di chuyển nhờ: | Vây và đuôi | Cánh | Chân | Bụng trườn
+ Lá cây giúp cây quang hợp tạo chất dinh dưỡng.
+ Ếch có da trần, ẩm ướt.
+ Cây bàng, cây nhãn có thân gỗ.
- Rễ cây giúp cây thoát hơi nước là chủ yếu.
- Mèo có lông vũ.
- Khai thác càng nhiều cây rừng càng tốt.
= Rễ = Hút nước và muối khoáng
= Thân = Vận chuyển nước và chất dinh dưỡng
= Lá = Quang hợp, hô hấp, thoát hơi nước
= Hoa = Tạo thành quả và hạt
# Rễ cọc: Cây bưởi, Cây cải, Cây đậu
# Rễ chùm: Cây lúa, Cây hành, Cây ngô
# Lông vũ: Gà, Vịt, Chim sẻ
# Vảy: Cá chép, Rắn, Thằn lằn` },
    { hk: 2, ten: 'Con người và sức khoẻ', bai: ['Cơ quan tiêu hoá', 'Chăm sóc và bảo vệ cơ quan tiêu hoá', 'Cơ quan tuần hoàn', 'Chăm sóc và bảo vệ cơ quan tuần hoàn', 'Cơ quan thần kinh', 'Chăm sóc và bảo vệ cơ quan thần kinh', 'Thực hành: Thực phẩm và thói quen tốt cho sức khoẻ', 'Ôn tập chủ đề Con người và sức khoẻ'],
      lt: ['<b>Cơ quan tiêu hoá</b>: miệng, thực quản, dạ dày, ruột non, ruột già, hậu môn + tuyến nước bọt, gan, tuỵ.', '<b>Cơ quan tuần hoàn</b>: tim và các mạch máu. Tim co bóp đẩy máu đi khắp cơ thể.', '<b>Cơ quan thần kinh</b>: não, tuỷ sống, các dây thần kinh — điều khiển mọi hoạt động của cơ thể.', 'Bảo vệ: ăn chín uống sôi, ăn đúng giờ; vận động vừa sức; ngủ đủ giấc, tránh căng thẳng, không dùng chất kích thích.'],
      q: `? Thức ăn từ miệng đi xuống dạ dày qua: | Thực quản | Khí quản | Ruột già | Tim
? Bộ phận co bóp đẩy máu đi khắp cơ thể là: | Tim | Phổi | Dạ dày | Não
? Cơ quan nào điều khiển mọi hoạt động của cơ thể? | Cơ quan thần kinh | Cơ quan tiêu hoá | Cơ quan bài tiết | Cơ quan hô hấp
? Để bảo vệ cơ quan thần kinh, em nên: | Ngủ đủ giấc, học và chơi điều độ | Thức khuya chơi điện tử | Uống cà phê | Luôn lo lắng
? Thói quen tốt cho cơ quan tiêu hoá là: | Ăn chậm, nhai kĩ, ăn đúng giờ | Vừa ăn vừa chạy nhảy | Ăn đồ ôi thiu | Bỏ bữa sáng
+ Tim và mạch máu tạo thành cơ quan tuần hoàn.
+ Não và tuỷ sống thuộc cơ quan thần kinh.
+ Ruột non là nơi hấp thụ chất dinh dưỡng chủ yếu.
- Dạ dày thuộc cơ quan tuần hoàn.
- Chạy nhảy ngay sau khi ăn no tốt cho tiêu hoá.
- Thức khuya giúp não khoẻ hơn.
> Miệng > Thực quản > Dạ dày > Ruột non > Ruột già > Hậu môn
= Dạ dày, ruột = Cơ quan tiêu hoá
= Tim, mạch máu = Cơ quan tuần hoàn
= Não, tuỷ sống = Cơ quan thần kinh` },
    { hk: 2, ten: 'Trái Đất và bầu trời', bai: ['Xác định các phương trong không gian', 'Trái Đất và các đới khí hậu', 'Bề mặt Trái Đất', 'Mặt Trời, Trái Đất, Mặt Trăng', 'Ôn tập chủ đề Trái Đất và bầu trời'],
      lt: ['Bốn phương chính: <b>Đông, Tây, Nam, Bắc</b>. Mặt Trời mọc ở phía Đông, lặn ở phía Tây.', 'Đứng dang tay phải chỉ hướng Mặt Trời mọc: tay phải phía Đông, tay trái phía Tây, trước mặt phía Bắc, sau lưng phía Nam.', 'Trái Đất có dạng hình cầu, có 5 đới khí hậu: 1 nhiệt đới, 2 ôn đới, 2 hàn đới. Việt Nam thuộc đới nóng (nhiệt đới).', 'Bề mặt Trái Đất: lục địa và đại dương; có 6 châu lục, 4 đại dương (Thái Bình Dương lớn nhất).', 'Trái Đất quay quanh mình nó (ngày và đêm) và quay quanh Mặt Trời; Mặt Trăng quay quanh Trái Đất.'],
      q: `? Mặt Trời mọc ở phương nào? | Đông | Tây | Nam | Bắc
? Mặt Trời lặn ở phương nào? | Tây | Đông | Nam | Bắc
? Trái Đất có dạng: | Hình cầu | Hình vuông | Hình đĩa phẳng | Hình hộp
? Đại dương lớn nhất là: | Thái Bình Dương | Đại Tây Dương | Ấn Độ Dương | Bắc Băng Dương
? Việt Nam nằm ở đới khí hậu nào? | Nhiệt đới (đới nóng) | Hàn đới | Ôn đới | Không thuộc đới nào
? Mặt Trăng quay quanh: | Trái Đất | Mặt Trời trực tiếp | Sao Hoả | Không quay
? Hiện tượng ngày và đêm do: | Trái Đất tự quay quanh mình nó | Mặt Trăng che Mặt Trời | Mây che | Gió thổi
+ Trái Đất có 6 châu lục và 4 đại dương.
+ Trái Đất vừa tự quay quanh mình vừa quay quanh Mặt Trời.
+ Đới nóng (nhiệt đới) quanh năm nóng.
- Mặt Trời quay quanh Trái Đất.
- Trên Trái Đất, lục địa chiếm diện tích lớn hơn đại dương.
- Hàn đới quanh năm nóng bức.
= Nhiệt đới = Nóng quanh năm
= Ôn đới = Ôn hoà, có bốn mùa rõ rệt
= Hàn đới = Lạnh quanh năm
= Mặt Trăng = Vệ tinh của Trái Đất` }
  ],
  essays: {
    1: [['Nêu những việc cần làm khi phát hiện có cháy trong nhà.', ['bình tĩnh', 'kêu cứu', '114', 'khăn ướt'], 'Bình tĩnh, kêu cứu báo người lớn; tìm lối thoát an toàn, cúi thấp người, che mũi miệng bằng khăn ướt; không đi thang máy, không trốn trong nhà; gọi 114.'],
      ['Nêu chức năng của rễ, thân, lá đối với cây.', ['rễ', 'thân', 'lá', 'nước'], 'Rễ hút nước và muối khoáng, giữ cây; thân vận chuyển nước, chất dinh dưỡng, nâng đỡ tán lá; lá quang hợp tạo chất dinh dưỡng, hô hấp, thoát hơi nước.']],
    2: [['Kể tên các bộ phận của cơ quan tiêu hoá và nêu 3 việc làm để bảo vệ cơ quan tiêu hoá.', ['miệng', 'dạ dày', 'ruột', 'ăn chín'], 'Miệng, thực quản, dạ dày, ruột non, ruột già, hậu môn (và tuyến nước bọt, gan, tuỵ). Bảo vệ: ăn chín uống sôi, ăn chậm nhai kĩ, ăn đúng giờ, không chạy nhảy sau khi ăn no.'],
      ['Làm thế nào để xác định bốn phương bằng Mặt Trời?', ['đông', 'tây', 'nam', 'bắc'], 'Buổi sáng, đứng dang hai tay, tay phải chỉ về phía Mặt Trời mọc là phương Đông, tay trái là phương Tây, trước mặt là phương Bắc, sau lưng là phương Nam.']]
  }
});

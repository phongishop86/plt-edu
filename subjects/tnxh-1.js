/* Tự nhiên và Xã hội 1 – KNTT. Tên chủ đề, bài theo mục lục SGK; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'tnxh-1', lop: 1, mon: 'Tự nhiên và Xã hội', icon: '🌳',
  topics: [
    { hk: 1, ten: 'Gia đình', bai: ['Kể về gia đình', 'Ngôi nhà của em', 'Đồ dùng trong nhà', 'An toàn khi sử dụng đồ dùng trong nhà', 'Ôn tập chủ đề Gia đình'],
      lt: ['Gia đình gồm ông bà, bố mẹ, anh chị em… cùng yêu thương, chăm sóc nhau.', 'Có nhiều loại nhà: nhà tầng, nhà sàn, nhà mái ngói, chung cư…', 'Đồ dùng trong nhà: bàn ghế, giường, tủ, nồi, quạt, ti vi… Mỗi đồ dùng có công dụng riêng.', '<b>An toàn</b>: không nghịch ổ điện, tránh xa bếp nóng, cẩn thận với dao, kéo, đồ thủy tinh.'],
      q: `? Đồ dùng nào dùng để nấu cơm? | Nồi cơm điện | Quạt điện | Tủ quần áo | Giường
? Đồ dùng nào có thể gây bỏng nếu không cẩn thận? | Ấm nước đang sôi | Gối | Quyển sách | Thước kẻ
? Khi dùng kéo, em cần: | Cầm cẩn thận, không chĩa mũi kéo vào người khác | Vừa cắt vừa chạy | Ném kéo cho bạn | Cắt dây điện
? Nhà sàn thường có ở đâu? | Vùng núi | Giữa thành phố lớn | Trên biển | Trong hang
? Phòng nào trong nhà dùng để nấu ăn? | Phòng bếp | Phòng ngủ | Phòng khách | Nhà vệ sinh
+ Các thành viên trong gia đình cần yêu thương, giúp đỡ nhau.
+ Không được chạm tay ướt vào ổ điện, công tắc.
+ Đồ dùng trong nhà cần được giữ gìn, sắp xếp gọn gàng.
- Có thể nghịch dao, kéo khi không có người lớn.
- Mọi gia đình đều sống trong một kiểu nhà giống nhau.
- Đồ thủy tinh rất bền, rơi xuống đất không vỡ.
= Giường = Để ngủ
= Bàn học = Để ngồi học
= Tủ lạnh = Bảo quản thức ăn
= Quạt điện = Làm mát
= Ti vi = Xem chương trình
# Phòng bếp: Nồi, Chảo, Bát đĩa, Bếp
# Phòng ngủ: Giường, Gối, Chăn, Tủ quần áo
# Phòng khách: Bộ bàn ghế tiếp khách, Ti vi, Ấm chén tiếp khách` },
    { hk: 1, ten: 'Trường học', bai: ['Lớp học của em', 'Cùng khám phá trường học', 'Cùng vui ở trường', 'Ôn tập chủ đề Trường học'],
      lt: ['Lớp học có thầy cô, bạn bè, bàn ghế, bảng, tủ sách…', 'Trường học có các phòng: phòng học, thư viện, phòng y tế, phòng hiệu trưởng…; có sân chơi, vườn trường.', 'Ở trường có nhiều hoạt động: học tập, vui chơi, văn nghệ, thể dục. Cần chơi an toàn, đoàn kết.'],
      q: `? Em đến đâu để mượn sách đọc ở trường? | Thư viện | Phòng y tế | Nhà xe | Căng tin
? Khi bị đau, mệt ở trường, em đến: | Phòng y tế | Thư viện | Sân bóng | Phòng âm nhạc
? Người dạy học ở lớp em là: | Thầy cô giáo | Bác bảo vệ | Cô lao công | Bác sĩ
? Trò chơi nào ở sân trường là không an toàn? | Leo trèo lên cây cao | Nhảy dây | Đá cầu | Kéo co
+ Lớp học có bảng, bàn ghế, đồ dùng học tập.
+ Bác bảo vệ giữ gìn an ninh cho trường học.
+ Khi chơi ở trường, em cần đoàn kết và chơi an toàn.
- Em có thể xô đẩy bạn khi xếp hàng.
- Thư viện là nơi để chạy nhảy, nói to.
= Thư viện = Đọc và mượn sách
= Phòng y tế = Chăm sóc sức khoẻ
= Sân trường = Vui chơi, tập thể dục
= Bác bảo vệ = Giữ gìn an ninh trường học
= Cô lao công = Giữ trường lớp sạch sẽ
# Trò chơi an toàn: Nhảy dây, Đá cầu, Kéo co, Ô ăn quan
# Trò chơi không an toàn: Leo cây, Đánh nhau, Xô đẩy bạn, Chơi gần ổ điện` },
    { hk: 1, ten: 'Cộng đồng địa phương', bai: ['Cùng khám phá quang cảnh xung quanh', 'Con người nơi em sống', 'Vui đón Tết', 'An toàn trên đường', 'Ôn tập chủ đề Cộng đồng địa phương'],
      lt: ['Quang cảnh ở nông thôn: đồng ruộng, cây cối, nhà thưa; ở thành phố: nhà cao tầng, đường phố đông xe.', 'Mỗi người làm một công việc: nông dân, công nhân, bác sĩ, giáo viên… đều đáng quý.', 'Tết Nguyên đán: gói bánh chưng, dọn nhà, chúc Tết, mừng tuổi.', '<b>An toàn trên đường</b>: đi bộ trên vỉa hè, qua đường ở vạch kẻ đường; đèn đỏ dừng lại, đèn xanh được đi, đèn vàng đi chậm.'],
      q: `? Khi đèn tín hiệu giao thông màu đỏ, người đi đường phải: | Dừng lại | Đi nhanh qua | Đi chậm | Quay đầu
? Đèn xanh có nghĩa là: | Được đi | Phải dừng lại | Đi chậm lại | Cấm đi
? Người đi bộ đi ở đâu là an toàn? | Trên vỉa hè | Giữa lòng đường | Trên dải phân cách | Trên đường ray
? Người làm việc trên đồng ruộng, trồng lúa là: | Nông dân | Bác sĩ | Phi công | Thợ may
? Ngày Tết, người Việt thường gói bánh gì? | Bánh chưng | Bánh mì | Bánh pizza | Bánh quy
? Nhà cao tầng, nhiều xe cộ là quang cảnh ở: | Thành phố | Đồng ruộng | Rừng núi | Biển đảo
+ Mỗi nghề nghiệp đều có ích cho xã hội.
+ Qua đường cần đi ở vạch kẻ dành cho người đi bộ và có người lớn đi cùng.
+ Tết là dịp gia đình sum họp, chúc nhau những điều tốt đẹp.
- Đèn vàng là lúc nên chạy thật nhanh qua đường.
- Có thể chơi đùa dưới lòng đường.
- Nông thôn có nhiều nhà cao tầng hơn thành phố.
= Bác sĩ = Khám chữa bệnh
= Giáo viên = Dạy học
= Công an = Giữ gìn trật tự
= Nông dân = Trồng lúa, rau màu
= Đầu bếp = Nấu ăn
# Nông thôn: Cánh đồng lúa, Lũy tre, Đàn trâu, Ao cá
# Thành phố: Nhà cao tầng, Siêu thị lớn, Đường phố đông xe, Đèn giao thông` },
    { hk: 2, ten: 'Thực vật và động vật', bai: ['Cây xung quanh em', 'Chăm sóc và bảo vệ cây trồng', 'Con vật quanh em', 'Chăm sóc và bảo vệ vật nuôi', 'Ôn tập chủ đề Thực vật và động vật'],
      lt: ['Cây thường có <b>rễ, thân, lá</b>; nhiều cây có hoa, quả.', 'Có cây cho bóng mát, cây ăn quả, cây rau, cây hoa…', 'Con vật có các bộ phận: đầu, mình, cơ quan di chuyển (chân, cánh, vây…).', 'Chăm sóc cây: tưới nước, nhổ cỏ, bón phân. Chăm sóc vật nuôi: cho ăn, uống, giữ chuồng sạch.'],
      q: `? Bộ phận nào của cây nằm dưới đất? | Rễ | Lá | Hoa | Quả
? Cây nào là cây ăn quả? | Cây cam | Cây bàng | Cây hoa hồng | Cây lúa
? Con vật nào di chuyển bằng cách bơi? | Con cá | Con gà | Con mèo | Con chim
? Con vật nào có cánh và biết bay? | Con chim | Con chó | Con cá | Con rắn
? Để cây xanh tốt, em cần: | Tưới nước, nhổ cỏ, bón phân | Bẻ cành | Ngắt lá | Giẫm lên cây
? Con vật nào được nuôi để trông nhà? | Con chó | Con lợn | Con vịt | Con bò
+ Cây cần nước, ánh sáng và không khí để sống.
+ Không nên trêu chọc, đánh đập các con vật.
+ Con gà có hai chân, có mỏ và lông vũ.
- Bẻ cành, hái hoa ở công viên là việc nên làm.
- Con cá thở bằng phổi giống người.
- Vật nuôi không cần được cho ăn, uống.
= Con bò = Cho sữa, thịt
= Con gà = Cho trứng, thịt
= Con mèo = Bắt chuột
= Con chó = Trông nhà
= Con trâu = Kéo cày
# Cây cho bóng mát: Cây bàng, Cây phượng, Cây đa
# Cây ăn quả: Cây cam, Cây xoài, Cây chuối
# Cây rau: Rau muống, Rau cải, Bắp cải
# Cây hoa: Hoa hồng, Hoa cúc, Hoa mai` },
    { hk: 2, ten: 'Con người và sức khoẻ', bai: ['Cơ thể em', 'Các giác quan của cơ thể', 'Ăn, uống hằng ngày', 'Vận động và nghỉ ngơi', 'Tự bảo vệ mình', 'Ôn tập chủ đề Con người và sức khoẻ'],
      lt: ['Cơ thể gồm: <b>đầu, mình, tay, chân</b>.', '5 giác quan: mắt (nhìn), tai (nghe), mũi (ngửi), lưỡi (nếm), da (cảm nhận nóng lạnh, đau).', 'Ăn đủ bữa, đủ chất, uống đủ nước; rửa tay trước khi ăn.', 'Vận động vừa sức và nghỉ ngơi hợp lí giúp cơ thể khoẻ mạnh.', 'Vùng riêng tư là vùng được đồ lót che kín; không ai được chạm vào. Gặp nguy hiểm hãy nói "Không!", chạy đi và kể với người lớn tin cậy.'],
      q: `? Em nhìn mọi vật bằng bộ phận nào? | Mắt | Tai | Mũi | Lưỡi
? Em nghe âm thanh nhờ: | Tai | Mắt | Da | Lưỡi
? Bộ phận giúp em biết vị ngọt, mặn, chua của thức ăn là: | Lưỡi | Mũi | Mắt | Tai
? Em ngửi thấy mùi thơm của hoa nhờ: | Mũi | Tai | Mắt | Tay
? Để bảo vệ mắt, em nên: | Đọc sách ở nơi đủ ánh sáng, không xem ti vi quá lâu | Nhìn thẳng vào Mặt Trời | Dụi mắt bằng tay bẩn | Đọc sách trong bóng tối
? Bữa ăn hằng ngày cần: | Đủ chất, có rau, thịt, cá, trứng, cơm | Chỉ ăn bánh kẹo | Chỉ uống nước ngọt | Bỏ bữa sáng
+ Da giúp em cảm nhận được nóng, lạnh.
+ Ngủ đủ giấc giúp cơ thể khoẻ mạnh.
+ Vùng riêng tư của em không ai được chạm vào.
- Bỏ bữa sáng giúp em học tốt hơn.
- Em nên chơi điện tử thật lâu thay vì vận động.
- Có thể nhìn thẳng vào Mặt Trời để mắt khoẻ hơn.
= Mắt = Nhìn
= Tai = Nghe
= Mũi = Ngửi
= Lưỡi = Nếm
= Da = Cảm nhận nóng, lạnh
# Thói quen tốt: Ăn đủ bữa, Uống đủ nước, Tập thể dục, Ngủ đúng giờ
# Thói quen chưa tốt: Ăn nhiều kẹo, Thức khuya, Xem ti vi quá lâu, Bỏ bữa sáng` },
    { hk: 2, ten: 'Trái Đất và bầu trời', bai: ['Cùng khám phá bầu trời', 'Thời tiết luôn thay đổi', 'Ôn tập chủ đề Trái Đất và bầu trời'],
      lt: ['Ban ngày: có Mặt Trời, bầu trời sáng. Ban đêm: có Mặt Trăng, các vì sao.', 'Thời tiết có thể nắng, mưa, nhiều mây, có gió, nóng, lạnh — thay đổi hằng ngày.', 'Ăn mặc phù hợp thời tiết: trời lạnh mặc áo ấm, trời mưa mang áo mưa, trời nắng đội mũ.'],
      q: `? Ban ngày, trên bầu trời có: | Mặt Trời | Rất nhiều sao sáng | Chỉ có Mặt Trăng | Không có gì
? Trời mưa, khi ra ngoài em cần: | Mặc áo mưa hoặc che ô | Mặc áo len dày | Đi chân đất | Đội mũ lưỡi trai thôi
? Trời rét, em nên: | Mặc quần áo ấm, đi tất | Mặc áo cộc tay | Tắm nước lạnh ngoài trời | Ngủ không đắp chăn
? Khi có sấm sét, em nên: | Vào trong nhà, tránh đứng dưới gốc cây to | Chạy ra đồng chơi | Trèo lên cây | Đứng giữa sân
+ Thời tiết có thể thay đổi trong ngày.
+ Ban đêm có thể nhìn thấy Mặt Trăng và các vì sao.
- Ban đêm Mặt Trời chiếu sáng rực rỡ.
- Trời nắng to nên ra ngoài không cần đội mũ.
= Trời nắng = Đội mũ, nón
= Trời mưa = Mặc áo mưa, che ô
= Trời rét = Mặc áo ấm
= Trời nóng = Mặc quần áo mỏng, thoáng mát
# Ban ngày: Mặt Trời, Bầu trời sáng, Mây trắng
# Ban đêm: Mặt Trăng, Các vì sao, Bầu trời tối` }
  ],
  essays: {
    1: [['Kể tên các đồ dùng trong nhà em có thể gây nguy hiểm và cách sử dụng chúng an toàn.', ['dao', 'điện', 'bếp'], 'Ví dụ: dao, kéo (cầm cẩn thận, không nghịch); ổ điện (không chạm tay vào, nhất là tay ướt); bếp, ấm nước sôi (tránh xa, nhờ người lớn).'],
      ['Khi đi bộ trên đường, em cần làm gì để an toàn?', ['vỉa hè', 'đèn', 'người lớn'], 'Đi trên vỉa hè hoặc sát lề đường bên phải; qua đường ở vạch kẻ cho người đi bộ, quan sát đèn tín hiệu, đi cùng người lớn.']],
    2: [['Kể tên 5 giác quan và nêu cách bảo vệ một giác quan mà em chọn.', ['mắt', 'tai', 'mũi', 'lưỡi', 'da'], 'Mắt, tai, mũi, lưỡi, da. Ví dụ bảo vệ mắt: đọc sách đủ ánh sáng, không xem ti vi quá lâu, không dụi mắt bằng tay bẩn.'],
      ['Em đã làm gì để chăm sóc cây trồng hoặc vật nuôi ở nhà?', ['tưới', 'cho ăn', 'chăm sóc'], 'Kể việc làm cụ thể: tưới nước, nhổ cỏ cho cây; cho vật nuôi ăn, uống, giữ chuồng sạch; không trêu chọc con vật.']]
  }
});

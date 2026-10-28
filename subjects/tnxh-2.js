/* Tự nhiên và Xã hội 2 – KNTT. Chủ đề, bài theo mục lục SGK; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'tnxh-2', lop: 2, mon: 'Tự nhiên và Xã hội', icon: '🌳',
  topics: [
    { hk: 1, ten: 'Gia đình', bai: ['Các thế hệ trong gia đình', 'Nghề nghiệp của người lớn trong gia đình', 'Phòng tránh ngộ độc khi ở nhà', 'Giữ sạch nhà ở', 'Ôn tập chủ đề Gia đình'],
      lt: ['Gia đình có thể có <b>2 thế hệ</b> (bố mẹ – con) hoặc <b>3 thế hệ</b> (ông bà – bố mẹ – con) cùng chung sống.', 'Mỗi nghề đều có ích: bác sĩ, giáo viên, nông dân, kĩ sư, công nhân…', 'Ngộ độc có thể do: thức ăn ôi thiu, thuốc uống sai, hoá chất tẩy rửa, nấm lạ. Cất thuốc, hoá chất xa tầm tay trẻ em.', 'Giữ sạch nhà ở: quét nhà, lau dọn, sắp xếp gọn gàng, đổ rác hằng ngày.'],
      q: `? Gia đình có ông bà, bố mẹ và con cùng sống là gia đình mấy thế hệ? | Ba thế hệ | Hai thế hệ | Một thế hệ | Bốn thế hệ
? Gia đình chỉ có bố mẹ và con là gia đình mấy thế hệ? | Hai thế hệ | Ba thế hệ | Một thế hệ | Bốn thế hệ
? Thứ nào dễ gây ngộ độc nếu uống nhầm? | Nước tẩy rửa | Nước lọc | Sữa tươi | Nước cam
? Em nên làm gì khi thấy thức ăn có mùi lạ? | Không ăn và báo người lớn | Ăn thử | Cho vào tủ lạnh rồi ăn | Chia cho bạn
? Để giữ nhà sạch sẽ, em có thể: | Quét nhà, sắp xếp đồ đạc gọn gàng | Vứt rác ra sàn | Để quần áo bừa bãi | Vẽ lên tường
+ Thuốc và hoá chất cần cất xa tầm tay trẻ em.
+ Mỗi nghề nghiệp đều đáng quý và có ích cho xã hội.
+ Nhà ở sạch sẽ giúp phòng tránh bệnh tật.
- Có thể tự ý uống thuốc của người lớn khi thấy mệt.
- Nấm mọc trong vườn đều ăn được.
- Gia đình nào cũng có ba thế hệ.
= Bác sĩ = Chữa bệnh cho mọi người
= Giáo viên = Dạy học
= Nông dân = Trồng lúa, rau màu
= Công nhân xây dựng = Xây nhà, công trình
= Lái xe = Chở người, hàng hoá
# Dễ gây ngộ độc: Thức ăn ôi thiu, Thuốc uống nhầm, Nước tẩy rửa, Nấm lạ
# An toàn khi ăn uống: Thức ăn nấu chín, Nước đun sôi, Rau quả rửa sạch` },
    { hk: 1, ten: 'Trường học', bai: ['Chào đón ngày khai giảng', 'Ngày hội đọc sách của chúng em', 'An toàn khi ở trường', 'Giữ vệ sinh trường học', 'Ôn tập chủ đề Trường học'],
      lt: ['Ngày khai giảng: lễ chào cờ, đánh trống khai trường, văn nghệ chào mừng năm học mới.', 'Ngày hội đọc sách: đọc, trao đổi, giới thiệu sách hay.', 'An toàn ở trường: không leo trèo, chạy xô đẩy, chơi trò nguy hiểm.', 'Giữ vệ sinh trường: bỏ rác đúng nơi, không vẽ bậy, dội nước sau khi đi vệ sinh.'],
      q: `? Ngày khai giảng năm học mới thường vào ngày nào? | 5/9 | 20/11 | 1/6 | 26/3
? Hoạt động nào KHÔNG an toàn ở trường? | Trèo lên lan can | Đọc sách ở thư viện | Chơi đá cầu | Nhảy dây
? Sau khi đi vệ sinh, em cần: | Dội nước và rửa tay bằng xà phòng | Đi ra ngay | Vẽ lên tường | Để vòi nước chảy
+ Ngày hội đọc sách giúp em yêu thích việc đọc.
+ Giữ vệ sinh trường học là trách nhiệm của mỗi học sinh.
- Có thể viết, vẽ lên bàn ghế cho đẹp.
- Chạy đuổi nhau trên cầu thang là an toàn.
# An toàn: Đi bộ nhẹ nhàng trên hành lang, Xếp hàng lên xuống cầu thang, Chơi đá cầu
# Không an toàn: Trèo cây, Xô đẩy bạn, Ngồi trên lan can` },
    { hk: 1, ten: 'Cộng đồng địa phương', bai: ['Hoạt động mua bán hàng hoá', 'Thực hành mua bán hàng hoá', 'Hoạt động giao thông', 'Cùng tham gia giao thông', 'Ôn tập chủ đề Cộng đồng địa phương'],
      lt: ['Mua bán hàng hoá diễn ra ở chợ, siêu thị, cửa hàng, trên mạng.', 'Khi mua hàng: chọn hàng cần thiết, xem hạn sử dụng, trả tiền, nhận tiền thừa.', 'Phương tiện giao thông: đường bộ (ô tô, xe máy), đường thuỷ (tàu, thuyền), đường hàng không (máy bay), đường sắt (tàu hoả).', 'Biển báo: biển cấm (hình tròn viền đỏ), biển nguy hiểm (tam giác viền đỏ), biển chỉ dẫn (hình vuông/chữ nhật nền xanh).'],
      q: `? Máy bay là phương tiện giao thông đường: | Hàng không | Bộ | Thuỷ | Sắt
? Tàu thuỷ là phương tiện giao thông đường: | Thuỷ | Bộ | Hàng không | Sắt
? Biển báo cấm thường có hình: | Tròn, viền đỏ | Tam giác, viền đỏ | Vuông, nền xanh | Ngôi sao
? Khi mua thực phẩm đóng gói, em cần xem: | Hạn sử dụng | Màu của túi | Giá của cửa hàng bên cạnh | Tên người bán
+ Ở siêu thị, khách hàng tự chọn hàng rồi mang ra quầy thanh toán.
+ Biển báo giao thông giúp mọi người đi đường an toàn.
- Tàu hoả là phương tiện giao thông đường thuỷ.
- Có thể đi bộ dưới lòng đường khi có vỉa hè.
= Ô tô, xe máy = Giao thông đường bộ
= Tàu hoả = Giao thông đường sắt
= Thuyền, ca nô = Giao thông đường thuỷ
= Máy bay = Giao thông đường hàng không
# Đường bộ: Xe đạp, Xe buýt, Xe máy
# Đường thuỷ: Thuyền, Ca nô, Tàu thuỷ
# Đường hàng không: Máy bay, Trực thăng` },
    { hk: 2, ten: 'Thực vật và động vật', bai: ['Thực vật sống ở đâu?', 'Động vật sống ở đâu?', 'Bảo vệ môi trường sống của thực vật và động vật', 'Thực vật và động vật quanh em', 'Ôn tập chủ đề Thực vật và động vật'],
      lt: ['Thực vật, động vật sống ở <b>trên cạn</b>, <b>dưới nước</b>; một số động vật sống trên cây, bay lượn trên không.', 'Môi trường sống bị phá huỷ (chặt rừng, ô nhiễm nước) làm thực vật, động vật bị chết, mất nơi ở.', 'Bảo vệ: trồng cây, không chặt phá rừng, không săn bắt động vật hoang dã, không xả rác xuống nước.'],
      q: `? Cây nào sống dưới nước? | Cây sen | Cây xoài | Cây xương rồng | Cây bàng
? Con vật nào sống dưới nước? | Con cá | Con hổ | Con gà | Con khỉ
? Xương rồng thường sống ở nơi: | Khô hạn | Dưới nước | Ngập mặn | Trong hang tối
? Việc làm nào bảo vệ môi trường sống của động vật? | Không săn bắt chim, thú rừng | Chặt phá rừng | Đổ rác xuống sông | Đốt rừng làm rẫy
+ Rong, rêu, sen, súng là những cây sống dưới nước.
+ Chặt phá rừng làm nhiều loài động vật mất nơi ở.
- Cá có thể sống trên cạn lâu ngày.
- Xả rác xuống sông không ảnh hưởng đến cá tôm.
# Sống trên cạn: Con hổ, Con bò, Cây mít, Cây ngô
# Sống dưới nước: Con cá, Con tôm, Cây sen, Cây rong` },
    { hk: 2, ten: 'Con người và sức khoẻ', bai: ['Tìm hiểu cơ quan vận động', 'Chăm sóc, bảo vệ cơ quan vận động', 'Tìm hiểu cơ quan hô hấp', 'Chăm sóc, bảo vệ cơ quan hô hấp', 'Tìm hiểu cơ quan bài tiết nước tiểu', 'Chăm sóc, bảo vệ cơ quan bài tiết nước tiểu', 'Ôn tập chủ đề Con người và sức khoẻ'],
      lt: ['<b>Cơ quan vận động</b> gồm xương và cơ, giúp cơ thể cử động.', '<b>Cơ quan hô hấp</b>: mũi, khí quản, phế quản, hai lá phổi. Hít vào lấy khí ô-xi, thở ra khí các-bô-níc.', '<b>Cơ quan bài tiết nước tiểu</b>: hai quả thận, hai ống dẫn nước tiểu, bóng đái, ống đái. Thận lọc máu tạo thành nước tiểu.', 'Bảo vệ: ngồi đúng tư thế, ăn uống đủ chất; thở bằng mũi, đeo khẩu trang nơi bụi; uống đủ nước, không nhịn tiểu.'],
      q: `? Cơ quan vận động gồm: | Xương và cơ | Tim và mạch máu | Phổi và mũi | Thận và bóng đái
? Bộ phận nào thuộc cơ quan hô hấp? | Phổi | Thận | Dạ dày | Xương sống
? Bộ phận nào lọc máu để tạo thành nước tiểu? | Thận | Phổi | Tim | Bóng đái
? Bóng đái có chức năng: | Chứa nước tiểu | Lọc máu | Trao đổi khí | Co bóp đẩy máu
? Để bảo vệ cơ quan hô hấp, em nên: | Đeo khẩu trang khi ra đường bụi | Hút thuốc lá | Ở phòng đầy khói | Thở bằng miệng nơi bụi
? Để bảo vệ cơ quan bài tiết nước tiểu, em nên: | Uống đủ nước, không nhịn tiểu | Nhịn tiểu lâu | Uống rất ít nước | Ăn thật mặn
+ Mang vác vật quá nặng có thể làm cong vẹo cột sống.
+ Nên thở bằng mũi vì lông mũi cản bụi.
+ Thận lọc máu, tạo thành nước tiểu.
- Ngồi học cong lưng giúp xương phát triển tốt.
- Nhịn tiểu lâu tốt cho sức khoẻ.
- Phổi thuộc cơ quan bài tiết nước tiểu.
= Xương, cơ = Cơ quan vận động
= Mũi, khí quản, phổi = Cơ quan hô hấp
= Thận, bóng đái = Cơ quan bài tiết nước tiểu
> Mũi > Khí quản > Phế quản > Phổi
> Thận > Ống dẫn nước tiểu > Bóng đái > Ống đái` },
    { hk: 2, ten: 'Trái Đất và bầu trời', bai: ['Các mùa trong năm', 'Một số thiên tai thường gặp', 'Luyện tập ứng phó với thiên tai', 'Ôn tập chủ đề Trái Đất và bầu trời'],
      lt: ['Miền Bắc có 4 mùa: xuân, hạ, thu, đông. Miền Nam có 2 mùa: mùa mưa và mùa khô.', 'Thiên tai thường gặp: bão, lũ lụt, sạt lở đất, hạn hán, giông sét, mưa đá.', 'Ứng phó: theo dõi tin dự báo, chuẩn bị đồ dùng cần thiết, ở trong nhà an toàn, nghe theo người lớn và chính quyền.'],
      q: `? Miền Nam nước ta có mấy mùa? | 2 mùa | 4 mùa | 3 mùa | 1 mùa
? Miền Bắc nước ta có mấy mùa? | 4 mùa | 2 mùa | 3 mùa | 5 mùa
? Khi có bão, em nên: | Ở trong nhà an toàn, tránh xa cửa kính | Ra ngoài xem gió | Tắm sông | Trèo lên cây
? Thiên tai nào thường xảy ra ở vùng đồi núi khi mưa lớn? | Sạt lở đất | Sóng thần | Động đất | Bão tuyết
+ Theo dõi dự báo thời tiết giúp chủ động phòng tránh thiên tai.
- Khi có giông sét nên đứng dưới gốc cây to.
- Lũ lụt chỉ là nước dâng nhẹ, không nguy hiểm.
# Mùa ở miền Bắc: Mùa xuân, Mùa hạ, Mùa thu, Mùa đông
# Mùa ở miền Nam: Mùa mưa, Mùa khô` }
  ],
  essays: {
    1: [['Em cần làm gì để phòng tránh ngộ độc khi ở nhà?', ['thức ăn', 'thuốc', 'hoá chất'], 'Không ăn thức ăn ôi thiu, không rõ nguồn gốc; không tự ý uống thuốc; không chơi với hoá chất tẩy rửa; ăn chín uống sôi; rửa tay trước khi ăn.'],
      ['Kể tên các loại phương tiện giao thông theo đường bộ, đường thuỷ, đường hàng không.', ['ô tô', 'thuyền', 'máy bay'], 'Đường bộ: ô tô, xe máy, xe đạp; đường thuỷ: thuyền, ca nô, tàu thuỷ; đường hàng không: máy bay, trực thăng; đường sắt: tàu hoả.']],
    2: [['Nêu tên các bộ phận chính của cơ quan hô hấp và cách bảo vệ cơ quan hô hấp.', ['mũi', 'phổi', 'khẩu trang'], 'Mũi, khí quản, phế quản, hai lá phổi. Bảo vệ: thở bằng mũi, đeo khẩu trang nơi khói bụi, giữ ấm cổ, tránh khói thuốc lá, tập thể dục.'],
      ['Khi có bão, em và gia đình cần làm gì?', ['dự báo', 'trong nhà', 'chuẩn bị'], 'Theo dõi tin dự báo; chuẩn bị đèn pin, nước uống, thức ăn; chằng chống nhà cửa; ở trong nhà an toàn; nghe theo hướng dẫn của người lớn và chính quyền.']]
  }
});

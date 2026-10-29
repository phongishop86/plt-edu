/* Mĩ thuật 2 – KNTT. Các chủ đề về yếu tố tạo hình và vận dụng; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'mi-thuat-2', lop: 2, mon: 'Mĩ thuật', icon: '🎨', so: false, share: PLT.KB.SHARE.mithuat,
  topics: [
    { hk: 1, ten: 'Sắc màu thiên nhiên', bai: ['Quan sát', 'Thể hiện', 'Thảo luận', 'Vận dụng'],
      lt: ['Thiên nhiên có nhiều màu sắc: xanh của lá, đỏ của hoa, vàng của nắng…', 'Màu <b>cơ bản</b>: đỏ, vàng, lam. Màu <b>thứ cấp</b> (pha từ 2 màu cơ bản): cam, lục, tím.'],
      q: `? Màu cam được pha từ: | Đỏ và vàng | Vàng và lam | Đỏ và lam | Đen và trắng
? Màu tím được pha từ: | Đỏ và lam | Đỏ và vàng | Vàng và lam | Trắng và vàng
? Màu lục được pha từ: | Vàng và lam | Đỏ và vàng | Đỏ và lam | Đen và vàng
+ Cam, lục, tím là màu thứ cấp.
- Màu cam là màu cơ bản.
# Màu cơ bản: Đỏ, Vàng, Lam
# Màu thứ cấp: Cam, Lục, Tím` },
    { hk: 1, ten: 'Sự thú vị của nét', bai: ['Quan sát', 'Thể hiện', 'Thảo luận', 'Vận dụng'],
      lt: ['Nét thẳng, nét cong, nét gấp khúc, nét xoắn ốc, nét lượn sóng; nét đậm, nét mảnh.', 'Nét tạo nên hình dáng sự vật và trang trí sản phẩm.'],
      q: `? Nét nào thường dùng để vẽ sóng nước? | Nét lượn sóng | Nét thẳng | Nét gấp khúc | Nét chấm
? Nét vẽ bằng bút tô mạnh tay thường: | Đậm | Mảnh | Mờ | Không thấy
+ Kết hợp nhiều loại nét giúp bức tranh sinh động.
- Một bức tranh chỉ được dùng một loại nét.
= Nét gấp khúc = Răng cưa, tia chớp
= Nét xoắn ốc = Vỏ ốc, cuộn len
= Nét lượn sóng = Sóng nước, dải lụa
= Nét thẳng = Cột cờ, thân tre` },
    { hk: 1, ten: 'Sự kết hợp của các hình cơ bản', bai: ['Quan sát', 'Thể hiện', 'Thảo luận', 'Vận dụng'],
      lt: ['Hình cơ bản: tròn, vuông, tam giác, chữ nhật.', 'Kết hợp các hình cơ bản tạo thành con vật, đồ vật, ngôi nhà, xe cộ.'],
      q: `? Ghép hình chữ nhật và hai hình tròn có thể tạo thành: | Chiếc ô tô | Bông hoa | Con cá | Ngọn núi
? Ghép hình vuông và hình tam giác có thể tạo thành: | Ngôi nhà | Quả bóng | Mặt trời | Con rắn
+ Mặt trời, bánh xe có dạng hình tròn.
- Mái nhà thường có dạng hình tròn.` },
    { hk: 1, ten: 'Chất cảm của bề mặt', bai: ['Quan sát', 'Thể hiện', 'Thảo luận', 'Vận dụng'],
      lt: ['<b>Chất cảm</b>: cảm giác khi nhìn hoặc sờ bề mặt vật: nhẵn, sần sùi, mềm, cứng, thô ráp.', 'Có thể tạo chất cảm bằng cách in, cào, xé, dán vật liệu khác nhau.'],
      q: `? Vỏ cây thường có bề mặt: | Sần sùi, thô ráp | Nhẵn bóng | Mềm mịn | Trong suốt
? Mặt gương có bề mặt: | Nhẵn bóng | Sần sùi | Xù xì | Có lông
+ Lông gấu bông có bề mặt mềm mại.
- Giấy nhám có bề mặt nhẵn bóng.
# Bề mặt nhẵn: Mặt gương, Quả bóng nhựa, Cốc thuỷ tinh
# Bề mặt sần sùi: Vỏ cây, Giấy nhám, Vỏ dứa` },
    { hk: 2, ten: 'Đậm nhạt', bai: ['Quan sát', 'Thể hiện', 'Thảo luận', 'Vận dụng'],
      lt: ['Một màu có thể có độ <b>đậm</b> và <b>nhạt</b> khác nhau.', 'Pha thêm trắng màu nhạt hơn; tô nhiều lớp hoặc pha thêm đen màu đậm hơn.', 'Đậm nhạt giúp hình vẽ nổi bật, có chiều sâu.'],
      q: `? Muốn màu nhạt hơn, em pha thêm màu: | Trắng | Đen | Nâu | Tím
? Muốn màu đậm hơn, em có thể: | Tô nhiều lớp hoặc pha thêm chút màu đen | Pha thêm nhiều nước trắng | Tẩy đi | Không tô
+ Đậm nhạt giúp bức tranh có chiều sâu.
- Màu nào cũng chỉ có một độ đậm nhạt.
> Xanh rất nhạt > Xanh nhạt > Xanh vừa > Xanh đậm` },
    { hk: 2, ten: 'Khối và sản phẩm từ vật liệu tái chế', bai: ['Quan sát', 'Thể hiện', 'Thảo luận', 'Vận dụng'],
      lt: ['Khối cơ bản: khối cầu, khối hộp, khối trụ, khối nón.', 'Vật liệu tái chế: vỏ hộp, chai nhựa, lõi giấy, nắp chai… có thể làm thành đồ chơi, đồ dùng.'],
      q: `? Lõi giấy vệ sinh có dạng khối: | Khối trụ | Khối cầu | Khối nón | Khối hộp
? Vỏ hộp sữa giấy có dạng khối: | Khối hộp | Khối cầu | Khối nón | Khối trụ
? Dùng vật liệu tái chế làm đồ chơi giúp: | Tiết kiệm, bảo vệ môi trường | Lãng phí | Làm bẩn nhà | Không có ích
+ Nắp chai nhựa có thể dùng làm bánh xe ô tô đồ chơi.
- Vật liệu tái chế chỉ để vứt đi.
= Quả cam = Khối cầu
= Hộp bánh = Khối hộp
= Ống hút = Khối trụ
= Mũ sinh nhật = Khối nón` },
    { hk: 2, ten: 'Gia đình và người thân', bai: ['Quan sát', 'Thể hiện', 'Thảo luận', 'Vận dụng'],
      lt: ['Vẽ chân dung người thân với nét mặt, kiểu tóc, trang phục đặc trưng.', 'Thể hiện hoạt động của gia đình: bữa cơm, đi chơi, làm việc nhà.'],
      q: `? Vẽ chân dung là vẽ: | Khuôn mặt, đặc điểm của một người | Cảnh biển | Con vật | Đồ vật
? Để thể hiện người ông, em có thể vẽ: | Tóc bạc, nếp nhăn, có thể đeo kính | Tóc dài thắt bím | Mặt em bé | Đồng phục học sinh
+ Mỗi người có đặc điểm khuôn mặt riêng.
- Vẽ chân dung không cần vẽ mắt, mũi, miệng.` },
    { hk: 2, ten: 'Trường em', bai: ['Quan sát', 'Thể hiện', 'Thảo luận', 'Vận dụng', '*Trưng bày sản phẩm cuối năm'],
      lt: ['Vẽ, xé dán về hoạt động ở trường: giờ ra chơi, chào cờ, lớp học.', 'Giới thiệu sản phẩm: tên, chất liệu, ý tưởng; nhận xét sản phẩm của bạn lịch sự.'],
      q: `? Khi nhận xét sản phẩm của bạn, em nên: | Khen điểm hay và góp ý nhẹ nhàng | Chê bai | Cười nhạo | Không nói gì
? Hoạt động giờ ra chơi có thể vẽ: | Các bạn nhảy dây, đá cầu | Bữa cơm gia đình | Đi chợ Tết | Cánh đồng lúa
+ Trưng bày sản phẩm giúp các bạn học hỏi lẫn nhau.
- Giới thiệu sản phẩm chỉ cần nói tên mình.` }
  ],
  essays: {
    1: [['Nêu cách pha các màu cam, lục, tím từ màu cơ bản.', ['cam', 'lục', 'tím', 'đỏ', 'vàng', 'lam'], 'Đỏ + vàng = cam; vàng + lam = lục; đỏ + lam = tím.'],
      ['Kể tên các hình cơ bản và một hình ảnh em có thể tạo ra khi ghép chúng.', ['tròn', 'vuông', 'tam giác'], 'Hình tròn, vuông, tam giác, chữ nhật. Ví dụ: hình vuông + tam giác = ngôi nhà; hình chữ nhật + hai hình tròn = ô tô.']],
    2: [['Kể tên những vật liệu tái chế em có thể dùng để làm đồ chơi và đồ chơi em sẽ làm.', ['chai', 'hộp', 'nắp'], 'Ví dụ: vỏ hộp sữa, chai nhựa, lõi giấy, nắp chai; làm ô tô, robot, chậu cây…'],
      ['Giới thiệu bức tranh về gia đình mà em đã vẽ.', ['gia đình', 'màu', 'vẽ'], 'Nêu tên tranh, vẽ những ai, đang làm gì, màu sắc chính, cảm xúc của em.']]
  }
});

/* Mĩ thuật 1 – KNTT (9 chủ đề: chấm, nét, hình, màu, khối cơ bản và vận dụng). Câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'mi-thuat-1', lop: 1, mon: 'Mĩ thuật', icon: '🎨', so: false,
  topics: [
    { hk: 1, ten: 'Mĩ thuật trong cuộc sống', bai: ['Quan sát', 'Thể hiện', 'Thảo luận', 'Vận dụng'],
      lt: ['Mĩ thuật có ở khắp nơi: tranh vẽ, tượng, đồ chơi, quần áo, đồ dùng, nhà cửa…', 'Đồ dùng học mĩ thuật: bút chì, bút màu, giấy vẽ, kéo, hồ dán, đất nặn.'],
      q: `? Đồ dùng nào dùng để nặn? | Đất nặn | Bút chì | Thước kẻ | Tẩy
? Sản phẩm nào là sản phẩm mĩ thuật? | Bức tranh em vẽ | Bát cơm | Cốc nước | Con mèo thật
? Khi dùng kéo cắt giấy, em cần: | Cẩn thận, không chĩa mũi kéo vào bạn | Vừa cắt vừa chạy | Cắt tóc bạn | Ném kéo
+ Tranh, tượng, đồ chơi đều có thể là sản phẩm mĩ thuật.
- Học mĩ thuật chỉ cần bút chì.
# Dùng để vẽ, tô: Bút chì, Bút sáp màu, Màu nước
# Dùng để cắt, dán: Kéo, Hồ dán, Giấy màu` },
    { hk: 1, ten: 'Sự thú vị của chấm', bai: ['Quan sát', 'Thể hiện', 'Thảo luận', 'Vận dụng'],
      lt: ['<b>Chấm</b> có nhiều hình dạng, kích thước, màu sắc khác nhau.', 'Có thể tạo chấm bằng bút, đầu ngón tay, que tăm, cọ…', 'Các chấm sắp xếp gần nhau, xa nhau tạo nên hình ảnh, hoa văn.'],
      q: `? Có thể tạo chấm bằng cách nào? | Chấm đầu ngón tay có màu lên giấy | Kẻ một đường dài | Gấp giấy | Cắt giấy
? Hình ảnh nào trong tự nhiên có nhiều chấm? | Bộ lông con báo | Cái thước | Sợi dây | Tờ giấy trắng
+ Chấm có thể to, nhỏ và có nhiều màu khác nhau.
- Chấm chỉ có một màu đen.
# Chấm to: Quả bóng màu tròn, Hạt mưa lớn
# Chấm nhỏ: Hạt cát, Hạt vừng` },
    { hk: 1, ten: 'Sự thú vị của nét', bai: ['Quan sát', 'Thể hiện', 'Thảo luận', 'Vận dụng'],
      lt: ['Các loại <b>nét</b>: nét thẳng, nét cong, nét gấp khúc, nét xoắn ốc, nét lượn sóng.', 'Nét được dùng để vẽ hình, trang trí.'],
      q: `? Sóng biển thường được vẽ bằng nét: | Lượn sóng | Thẳng | Chấm | Gấp khúc
? Tia chớp thường được vẽ bằng nét: | Gấp khúc | Lượn sóng | Tròn | Chấm
? Vỏ ốc sên có dạng nét: | Xoắn ốc | Thẳng | Gấp khúc | Chấm
+ Nét có thể thẳng, cong hoặc gấp khúc.
- Chỉ có một loại nét là nét thẳng.
= Thân cây cột điện = Nét thẳng
= Sóng nước = Nét lượn sóng
= Tia chớp = Nét gấp khúc
= Vỏ ốc sên = Nét xoắn ốc` },
    { hk: 1, ten: 'Sự thú vị của hình', bai: ['Quan sát', 'Thể hiện', 'Thảo luận', 'Vận dụng'],
      lt: ['Hình cơ bản: <b>hình tròn, hình vuông, hình tam giác, hình chữ nhật</b>.', 'Ghép các hình cơ bản có thể tạo thành ngôi nhà, ô tô, con vật…'],
      q: `? Mặt trời thường được vẽ bằng hình: | Hình tròn | Hình tam giác | Hình vuông | Hình chữ nhật
? Mái nhà thường có dạng hình: | Tam giác | Tròn | Lượn sóng | Xoắn ốc
? Viên gạch thường có dạng hình: | Chữ nhật | Tròn | Tam giác | Ngôi sao
+ Ghép hình vuông và hình tam giác có thể được ngôi nhà.
- Bánh xe có dạng hình tam giác.
= Bánh xe = Hình tròn
= Mái nhà = Hình tam giác
= Ô cửa sổ = Hình vuông
= Cánh cửa ra vào = Hình chữ nhật` },
    { hk: 1, ten: 'Màu cơ bản', bai: ['Quan sát', 'Thể hiện', 'Thảo luận', 'Vận dụng'],
      lt: ['Ba màu cơ bản: <b>đỏ, vàng, lam (xanh dương)</b>.', 'Pha hai màu cơ bản được màu mới: đỏ + vàng = cam; vàng + lam = lục (xanh lá); đỏ + lam = tím.'],
      q: `? Ba màu cơ bản là: | Đỏ, vàng, lam | Đen, trắng, xám | Cam, tím, lục | Hồng, nâu, đen
? Pha màu đỏ với màu vàng được màu: | Cam | Tím | Lục | Nâu
? Pha màu vàng với màu lam được màu: | Lục (xanh lá cây) | Cam | Tím | Đen
? Pha màu đỏ với màu lam được màu: | Tím | Cam | Xanh lá | Vàng
+ Màu đỏ là một trong ba màu cơ bản.
- Màu tím là màu cơ bản.
= Đỏ + vàng = Cam
= Vàng + lam = Lục
= Đỏ + lam = Tím
_ Pha màu đỏ và màu vàng được màu [cam].` },
    { hk: 2, ten: 'Sự thú vị của khối', bai: ['Quan sát', 'Thể hiện', 'Thảo luận', 'Vận dụng'],
      lt: ['Khối cơ bản: <b>khối cầu, khối hộp (lập phương, hộp chữ nhật), khối trụ, khối nón</b>.', 'Dùng đất nặn tạo khối, ghép khối thành con vật, đồ vật.'],
      q: `? Quả bóng có dạng khối: | Khối cầu | Khối hộp | Khối trụ | Khối nón
? Hộp phấn có dạng khối: | Khối hộp | Khối cầu | Khối nón | Khối trụ
? Lon nước ngọt có dạng khối: | Khối trụ | Khối cầu | Khối hộp | Khối nón
? Chiếc nón lá có dạng khối: | Khối nón | Khối trụ | Khối hộp | Khối cầu
+ Có thể dùng đất nặn để tạo khối.
- Quả cam có dạng khối hộp.
= Quả bóng = Khối cầu
= Hộp quà = Khối hộp
= Lon sữa = Khối trụ
= Nón lá = Khối nón` },
    { hk: 2, ten: 'Thiên nhiên', bai: ['Quan sát', 'Thể hiện', 'Thảo luận', 'Vận dụng'],
      lt: ['Thiên nhiên có cây cối, hoa lá, con vật, bầu trời, sông núi với nhiều màu sắc.', 'Dùng chấm, nét, hình, màu để vẽ, xé dán tranh thiên nhiên.'],
      q: `? Lá cây thường có màu: | Xanh lục | Tím | Đen | Trắng
? Bầu trời ngày nắng thường có màu: | Xanh lam | Đỏ | Đen | Nâu
+ Có thể xé dán giấy màu để làm tranh về thiên nhiên.
- Tranh thiên nhiên chỉ được vẽ bằng bút chì đen.` },
    { hk: 2, ten: 'Gia đình em', bai: ['Quan sát', 'Thể hiện', 'Thảo luận', 'Vận dụng'],
      lt: ['Vẽ chân dung người thân: khuôn mặt, mắt, mũi, miệng, tóc.', 'Làm thiệp, sản phẩm tặng người thân.'],
      q: `? Khi vẽ chân dung, em cần vẽ: | Khuôn mặt, mắt, mũi, miệng, tóc | Chỉ vẽ đôi giày | Chỉ vẽ nhà | Chỉ vẽ cây
? Sản phẩm mĩ thuật nào phù hợp để tặng mẹ ngày 8/3? | Tấm thiệp hoa tự làm | Đất cát | Giấy vụn | Hộp rỗng bẩn
+ Có thể dùng hình tròn để vẽ khuôn mặt.
- Vẽ chân dung là vẽ phong cảnh.` },
    { hk: 2, ten: 'Trường học', bai: ['Quan sát', 'Thể hiện', 'Thảo luận', 'Vận dụng', '*Trưng bày sản phẩm cuối năm'],
      lt: ['Vẽ, xé dán về ngôi trường, lớp học, bạn bè, thầy cô.', 'Trưng bày, giới thiệu sản phẩm: tên sản phẩm, màu sắc, cách làm.'],
      q: `? Khi giới thiệu sản phẩm của mình, em nên nói: | Tên sản phẩm, màu sắc, cách làm | Chê sản phẩm của bạn | Không nói gì | Giấu sản phẩm đi
? Trưng bày sản phẩm giúp em: | Chia sẻ và học hỏi từ các bạn | Bị chê cười | Làm hỏng tranh | Không học được gì
+ Em cần tôn trọng sản phẩm của bạn.
- Có thể vẽ bậy lên tranh của bạn.` }
  ],
  essays: {
    1: [['Kể tên ba màu cơ bản và màu tạo thành khi pha hai màu cơ bản với nhau.', ['đỏ', 'vàng', 'lam', 'cam', 'tím', 'lục'], 'Ba màu cơ bản: đỏ, vàng, lam. Đỏ + vàng = cam; vàng + lam = lục; đỏ + lam = tím.'],
      ['Kể tên các loại nét em đã học và vẽ được hình ảnh gì từ các nét đó.', ['thẳng', 'cong', 'gấp khúc'], 'Nét thẳng, nét cong, nét gấp khúc, nét lượn sóng, nét xoắn ốc. Ví dụ: nét lượn sóng vẽ sóng biển, nét gấp khúc vẽ tia chớp.']],
    2: [['Kể tên các khối cơ bản và một đồ vật có dạng mỗi khối.', ['cầu', 'hộp', 'trụ', 'nón'], 'Khối cầu (quả bóng), khối hộp (hộp quà), khối trụ (lon sữa), khối nón (nón lá).'],
      ['Giới thiệu một sản phẩm mĩ thuật em đã làm (tên, chất liệu, màu sắc, ý nghĩa).', ['sản phẩm', 'màu'], 'Nêu tên sản phẩm, em dùng chất liệu gì (màu sáp, giấy màu, đất nặn…), màu sắc chính, em làm để tặng ai hoặc nói về điều gì.']]
  }
});

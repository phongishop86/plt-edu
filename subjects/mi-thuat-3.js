/* Mĩ thuật 3 – KNTT. Chủ đề về yếu tố và nguyên lí tạo hình; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'mi-thuat-3', lop: 3, mon: 'Mĩ thuật', icon: '🎨', so: false,
  topics: [
    { hk: 1, ten: 'Sự thú vị của màu sắc', bai: ['Quan sát', 'Thể hiện', 'Thảo luận', 'Vận dụng'],
      lt: ['Màu cơ bản: đỏ, vàng, lam. Màu thứ cấp: cam, lục, tím.', '<b>Màu nóng</b> (đỏ, cam, vàng) gợi cảm giác ấm áp; <b>màu lạnh</b> (lam, lục, tím) gợi cảm giác mát mẻ.'],
      q: `? Màu nào là màu nóng? | Đỏ | Lam | Lục | Tím
? Màu nào là màu lạnh? | Xanh lam | Cam | Đỏ | Vàng
? Tranh vẽ biển mát mẻ thường dùng nhiều màu: | Lạnh | Nóng | Đen | Trắng
+ Đỏ, cam, vàng là các màu nóng.
- Xanh lam là màu nóng.
# Màu nóng: Đỏ, Cam, Vàng
# Màu lạnh: Lam, Lục, Tím` },
    { hk: 1, ten: 'Đường nét và hình khối', bai: ['Quan sát', 'Thể hiện', 'Thảo luận', 'Vận dụng'],
      lt: ['Nét tạo hình, tạo chuyển động; khối tạo cảm giác ba chiều.', 'Hình 2D (phẳng): tròn, vuông, tam giác. Khối 3D: cầu, hộp, trụ, nón.'],
      q: `? Hình nào là hình phẳng (2D)? | Hình tam giác | Khối cầu | Khối trụ | Khối hộp
? Quả bóng có dạng: | Khối cầu | Hình tròn phẳng | Khối nón | Khối hộp
+ Khối có chiều dài, chiều rộng và chiều cao.
- Hình vuông vẽ trên giấy là một khối.
# Hình phẳng: Hình tròn, Hình vuông, Hình tam giác
# Khối: Khối cầu, Khối trụ, Khối nón` },
    { hk: 1, ten: 'Nhịp điệu và sự lặp lại', bai: ['Quan sát', 'Thể hiện', 'Thảo luận', 'Vận dụng'],
      lt: ['<b>Lặp lại</b>: một hình, màu, nét được nhắc lại nhiều lần.', '<b>Nhịp điệu</b>: sự lặp lại có quy luật tạo cảm giác chuyển động — dùng trong trang trí đường diềm, khăn, áo.'],
      q: `? Đường diềm thường được trang trí bằng cách: | Lặp lại hoạ tiết theo quy luật | Vẽ lung tung | Chỉ vẽ một hình | Không dùng màu
? Hoạ tiết lặp lại đều đặn tạo nên: | Nhịp điệu | Tương phản | Khối | Chất cảm
+ Hoa văn trên vải thổ cẩm thường lặp lại có nhịp điệu.
- Nhịp điệu là các hình không bao giờ lặp lại.` },
    { hk: 1, ten: 'Tranh chân dung', bai: ['Quan sát', 'Thể hiện', 'Thảo luận', 'Vận dụng'],
      lt: ['Chân dung: thể hiện khuôn mặt, đặc điểm, cảm xúc của một người.', 'Biểu cảm khuôn mặt: vui (miệng cười), buồn (miệng trễ), ngạc nhiên (mắt mở to).'],
      q: `? Để vẽ khuôn mặt đang vui, em vẽ miệng: | Cong lên, tươi cười | Trễ xuống | Mím chặt | Không có miệng
? Tranh chân dung tập trung thể hiện: | Khuôn mặt và đặc điểm của người | Phong cảnh | Đồ vật | Con vật
+ Mỗi người có khuôn mặt và nét riêng.
- Tranh chân dung là tranh vẽ cánh đồng.` },
    { hk: 2, ten: 'Tranh phong cảnh và tĩnh vật', bai: ['Quan sát', 'Thể hiện', 'Thảo luận', 'Vận dụng'],
      lt: ['<b>Tranh phong cảnh</b>: vẽ cảnh thiên nhiên, làng quê, phố phường.', '<b>Tranh tĩnh vật</b>: vẽ đồ vật, hoa quả được bày đặt.', 'Vật ở gần vẽ to, rõ; vật ở xa vẽ nhỏ, mờ.'],
      q: `? Tranh vẽ lọ hoa và đĩa quả là tranh: | Tĩnh vật | Phong cảnh | Chân dung | Hoạt hình
? Trong tranh phong cảnh, vật ở xa thường được vẽ: | Nhỏ hơn và mờ hơn | To hơn | Đậm hơn | Giống hệt vật ở gần
+ Tranh vẽ dòng sông, cánh đồng là tranh phong cảnh.
- Tranh tĩnh vật là tranh vẽ người đang chạy.
= Tranh phong cảnh = Cảnh thiên nhiên, làng quê
= Tranh tĩnh vật = Đồ vật, hoa quả
= Tranh chân dung = Khuôn mặt người` },
    { hk: 2, ten: 'Tạo hình 3D và đồ chơi', bai: ['Quan sát', 'Thể hiện', 'Thảo luận', 'Vận dụng'],
      lt: ['Nặn, ghép khối bằng đất nặn, giấy bìa, vật liệu tái chế để tạo con vật, đồ chơi.', 'Sản phẩm 3D có thể quan sát từ nhiều phía.'],
      q: `? Vật liệu nào thích hợp để nặn con vật? | Đất nặn | Nước | Giấy mỏng | Cát khô
? Sản phẩm 3D khác tranh vẽ ở điểm: | Có thể quan sát từ nhiều phía | Chỉ nhìn được một mặt | Không có màu | Phẳng
+ Có thể dùng vỏ hộp để làm ô tô đồ chơi.
- Tượng là sản phẩm 2D.` },
    { hk: 2, ten: 'Mĩ thuật và cuộc sống', bai: ['Quan sát', 'Thể hiện', 'Thảo luận', 'Vận dụng', '*Trưng bày sản phẩm cuối năm'],
      lt: ['Mĩ thuật ứng dụng: thiết kế bưu thiếp, túi, bìa sách, áo… đẹp và có ích.', 'Trưng bày, giới thiệu, nhận xét sản phẩm bằng lời lẽ tôn trọng.'],
      q: `? Thiết kế bưu thiếp chúc mừng là ứng dụng mĩ thuật vào: | Cuộc sống hằng ngày | Toán học | Thể dục | Khoa học vũ trụ
? Khi nhận xét sản phẩm của bạn, em nên: | Nêu điểm đẹp và góp ý chân thành | Chê bai | Chế giễu | Bỏ qua
+ Trang trí bìa vở là một hoạt động mĩ thuật ứng dụng.
- Mĩ thuật không liên quan gì đến cuộc sống.` }
  ],
  essays: {
    1: [['Thế nào là màu nóng, màu lạnh? Cho ví dụ.', ['nóng', 'lạnh', 'đỏ', 'lam'], 'Màu nóng (đỏ, cam, vàng) gợi cảm giác ấm áp; màu lạnh (lam, lục, tím) gợi cảm giác mát mẻ.'],
      ['Nêu cách vẽ một bức chân dung bạn em.', ['khuôn mặt', 'mắt', 'tóc'], 'Quan sát bạn; vẽ hình khuôn mặt; vẽ mắt, mũi, miệng, tai, tóc; thể hiện nét đặc trưng, biểu cảm; tô màu.']],
    2: [['Phân biệt tranh phong cảnh và tranh tĩnh vật.', ['phong cảnh', 'tĩnh vật', 'đồ vật'], 'Tranh phong cảnh vẽ cảnh thiên nhiên, làng quê, phố phường; tranh tĩnh vật vẽ đồ vật, hoa quả được bày đặt.'],
      ['Giới thiệu một sản phẩm mĩ thuật 3D em đã làm.', ['vật liệu', 'sản phẩm'], 'Tên sản phẩm, vật liệu (đất nặn, vỏ hộp…), cách làm, màu sắc, công dụng hoặc ý nghĩa.']]
  }
});

/* Mĩ thuật 5 – KNTT. Câu hỏi do PLT-Edu soạn theo các chủ đề tạo hình, di sản và ứng dụng. */
PLT.KB.build({
  id: 'mi-thuat-5', lop: 5, mon: 'Mĩ thuật', icon: '🎨', so: false, share: PLT.KB.SHARE.mithuat,
  topics: [
    { hk: 1, ten: 'Hoà sắc và cảm xúc', bai: ['Quan sát', 'Thể hiện', 'Thảo luận', 'Vận dụng'],
      lt: ['<b>Hoà sắc</b>: sự kết hợp hài hoà các màu trong tranh (hoà sắc nóng, hoà sắc lạnh).', 'Màu bổ túc (tương phản mạnh): đỏ – lục, vàng – tím, cam – lam.', 'Màu sắc thể hiện cảm xúc: tươi sáng – vui vẻ; trầm tối – buồn, bí ẩn.'],
      q: `? Tranh có hoà sắc lạnh thường dùng nhiều màu: | Lam, lục, tím | Đỏ, cam, vàng | Đen và nâu | Hồng và đỏ
? Cặp màu bổ túc là: | Vàng – tím | Vàng – cam | Lam – lục | Đỏ – hồng
+ Hoà sắc giúp bức tranh hài hoà, thống nhất.
- Hoà sắc là dùng thật nhiều màu không liên quan.` },
    { hk: 1, ten: 'Di sản mĩ thuật Việt Nam', bai: ['Quan sát', 'Thể hiện', 'Thảo luận', 'Vận dụng'],
      lt: ['Trống đồng Đông Sơn với hoa văn mặt trời, chim Lạc, người giã gạo.', 'Tranh dân gian: Đông Hồ, Hàng Trống, Kim Hoàng.', 'Tranh sơn mài, tranh lụa; hoạ sĩ <b>Tô Ngọc Vân</b> (Thiếu nữ bên hoa huệ), <b>Nguyễn Gia Trí</b> (sơn mài), <b>Bùi Xuân Phái</b> (Phố cổ Hà Nội).'],
      q: `? Hoa văn chim Lạc thường thấy trên: | Trống đồng Đông Sơn | Tranh sơn dầu châu Âu | Gốm Nhật Bản | Tượng Ai Cập
? Tranh "Thiếu nữ bên hoa huệ" là của hoạ sĩ: | Tô Ngọc Vân | Bùi Xuân Phái | Nguyễn Gia Trí | Văn Cao
? Hoạ sĩ nổi tiếng với tranh phố cổ Hà Nội là: | Bùi Xuân Phái | Tô Ngọc Vân | Nguyễn Gia Trí | Lê Phổ
+ Sơn mài là chất liệu truyền thống của mĩ thuật Việt Nam.
- Trống đồng Đông Sơn là di vật của Ai Cập.
= Tô Ngọc Vân = Thiếu nữ bên hoa huệ
= Bùi Xuân Phái = Phố cổ Hà Nội
= Nguyễn Gia Trí = Tranh sơn mài
= Đông Hồ = Tranh dân gian Bắc Ninh` },
    { hk: 2, ten: 'Bố cục và không gian', bai: ['Quan sát', 'Thể hiện', 'Thảo luận', 'Vận dụng'],
      lt: ['Bố cục: sắp xếp mảng chính – mảng phụ, có trọng tâm, cân đối.', 'Không gian: gần – xa, trước – sau, đậm – nhạt; luật xa gần.'],
      q: `? Mảng chính trong tranh thường: | To, rõ, ở vị trí nổi bật | Nhỏ ở góc | Bị che hết | Mờ nhạt nhất
? Vật ở gần trong tranh thường vẽ: | To, rõ, đậm | Nhỏ, mờ | Ở trên cao nhất | Trong suốt
+ Bố cục tốt giúp người xem tập trung vào hình ảnh chính.
- Không gian trong tranh không liên quan đến xa gần.` },
    { hk: 2, ten: 'Thiết kế và sản phẩm ứng dụng', bai: ['Quan sát', 'Thể hiện', 'Thảo luận', 'Vận dụng', '*Trưng bày sản phẩm cuối năm'],
      lt: ['Thiết kế logo, áp phích (poster), bìa sách, trang phục, đồ dùng từ vật liệu tái chế.', 'Áp phích cần: thông điệp ngắn gọn, hình ảnh nổi bật, chữ rõ ràng.'],
      q: `? Áp phích tuyên truyền bảo vệ môi trường cần: | Thông điệp ngắn gọn, hình ảnh nổi bật | Thật nhiều chữ nhỏ | Không có hình | Màu xám xịt khó đọc
? Logo là: | Biểu tượng nhận diện của tổ chức, sản phẩm | Một bức tranh phong cảnh lớn | Một bài hát | Một bức tượng
+ Sản phẩm từ vật liệu tái chế góp phần bảo vệ môi trường.
- Áp phích không cần thông điệp.` }
  ],
  essays: {
    1: [['Thế nào là hoà sắc? Em sẽ dùng hoà sắc nào để vẽ tranh về mùa hè? Vì sao?', ['hoà sắc', 'nóng', 'mùa hè'], 'Hoà sắc là sự phối hợp hài hoà các màu. Vẽ mùa hè có thể dùng hoà sắc nóng (đỏ, cam, vàng) để gợi nắng, ấm áp, sôi động.'],
      ['Giới thiệu một tác phẩm hoặc di sản mĩ thuật Việt Nam em biết.', ['tác phẩm', 'hoạ sĩ', 'di sản'], 'Ví dụ: trống đồng Đông Sơn – hoa văn mặt trời, chim Lạc; hoặc tranh "Thiếu nữ bên hoa huệ" của Tô Ngọc Vân.']],
    2: [['Nêu các bước thiết kế một áp phích tuyên truyền.', ['thông điệp', 'phác thảo', 'màu'], 'Xác định thông điệp → phác thảo bố cục (hình chính, chữ) → chọn màu nổi bật → vẽ, tô màu → hoàn thiện, kiểm tra chữ rõ ràng.'],
      ['Giới thiệu một sản phẩm em làm từ vật liệu tái chế.', ['vật liệu', 'tái chế', 'công dụng'], 'Tên sản phẩm, vật liệu tái chế đã dùng, cách làm, công dụng, ý nghĩa bảo vệ môi trường.']]
  }
});

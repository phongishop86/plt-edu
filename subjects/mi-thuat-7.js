/* Mĩ thuật 7 – KNTT. Các chủ đề mĩ thuật tạo hình, mĩ thuật ứng dụng; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'mi-thuat-7', lop: 7, mon: 'Mĩ thuật', icon: '🎨', so: false, share: PLT.KB.SHARE.mithuat,
  topics: [
    { hk: 1, ten: 'Mĩ thuật thời cổ đại thế giới', bai: ['Quan sát và nhận thức', 'Luyện tập và sáng tạo', 'Phân tích và đánh giá', 'Vận dụng'],
      lt: ['Mĩ thuật Ai Cập cổ đại: <b>kim tự tháp</b>, tượng Nhân sư, tranh tường với lối vẽ "mặt nghiêng, mắt nhìn thẳng".', 'Mĩ thuật Hy Lạp, La Mã cổ đại: kiến trúc đền Pác-tê-nông, đấu trường Cô-li-dê; điêu khắc tỉ lệ cơ thể hài hoà.'],
      q: `? Kim tự tháp là công trình kiến trúc tiêu biểu của: | Ai Cập cổ đại | Hy Lạp cổ đại | Trung Quốc cổ đại | Ấn Độ cổ đại
? Đền Pác-tê-nông thuộc nền mĩ thuật: | Hy Lạp cổ đại | Ai Cập cổ đại | La Mã | Lưỡng Hà
? Đấu trường Cô-li-dê là công trình của: | La Mã cổ đại | Ai Cập | Hy Lạp | Ấn Độ
+ Điêu khắc Hy Lạp cổ đại chú trọng tỉ lệ cơ thể người hài hoà.
- Kim tự tháp là công trình của người La Mã.
= Ai Cập = Kim tự tháp, tượng Nhân sư
= Hy Lạp = Đền Pác-tê-nông
= La Mã = Đấu trường Cô-li-dê
? Tượng Nhân sư (Sphinx) thuộc mĩ thuật: | Ai Cập cổ đại | Hy Lạp | La Mã | Trung Hoa
? Tượng "Thần Vệ nữ Milo" thuộc mĩ thuật: | Hy Lạp cổ đại | Ai Cập | Ấn Độ | Việt Nam
+ Mĩ thuật Hy Lạp cổ đại đề cao vẻ đẹp cân đối của cơ thể người.` },
    { hk: 1, ten: 'Nghệ thuật trung đại Việt Nam', bai: ['Quan sát và nhận thức', 'Luyện tập và sáng tạo', 'Phân tích và đánh giá', 'Vận dụng'],
      lt: ['Mĩ thuật thời Lý: <b>hình rồng</b> mềm mại uốn lượn, tượng A-di-đà chùa Phật Tích, chùa Một Cột.', 'Mĩ thuật thời Trần: tháp Phổ Minh, gốm hoa nâu; thời Lê sơ: chạm khắc đình làng, rồng mạnh mẽ.', 'Hoạ tiết dân tộc: hoa sen, hoa cúc, mây, sóng nước — ứng dụng trong trang trí.'],
      q: `? Hình rồng thời Lý có đặc điểm: | Mềm mại, uốn lượn như con rắn | Hung dữ, nhiều vảy cứng | Hình vuông | Không có thân
? Chùa Một Cột được xây dựng dưới thời: | Lý | Trần | Lê sơ | Nguyễn
? Gốm hoa nâu là sản phẩm nổi bật thời: | Trần | Nguyễn | Lý | Hồ
+ Hoa sen là hoạ tiết phổ biến trong mĩ thuật truyền thống Việt Nam.
- Chùa Một Cột được xây dựng thời Nguyễn.
? Chùa Bút Tháp nổi tiếng với tượng: | Phật Bà Quan Âm nghìn mắt nghìn tay | Nữ thần Tự do | Nhân sư | Thần Vệ nữ
? Kiến trúc tiêu biểu thời Lý – Trần là: | Chùa, tháp (chùa Một Cột, tháp Phổ Minh) | Nhà chọc trời | Kim tự tháp | Lâu đài châu Âu
+ Gốm men thời Lý – Trần có chất lượng cao.` },
    { hk: 2, ten: 'Mĩ thuật ứng dụng: thiết kế đồ hoạ', bai: ['Quan sát và nhận thức', 'Luyện tập và sáng tạo', 'Phân tích và đánh giá', 'Vận dụng'],
      lt: ['Thiết kế logo, bìa sách, áp phích: hình ảnh ngắn gọn, dễ nhận biết, màu sắc hài hoà, chữ rõ ràng.', 'Nguyên lí tạo hình: <b>cân bằng, tương phản, nhịp điệu, nhấn mạnh, lặp lại, chuyển động</b>.'],
      q: `? Một logo tốt cần: | Đơn giản, dễ nhận biết, dễ nhớ | Thật nhiều chi tiết | Nhiều chữ nhỏ | Màu sắc lộn xộn
? Dùng màu sáng đặt cạnh màu tối để làm nổi bật là nguyên lí: | Tương phản | Lặp lại | Cân bằng | Nhịp điệu
+ Áp phích cần thông điệp ngắn gọn, hình ảnh nổi bật.
- Bìa sách không cần thể hiện tên sách.
= Cân bằng = Bố cục ổn định, hài hoà
= Tương phản = Đối lập sáng – tối, to – nhỏ
= Nhịp điệu = Sự lặp lại có biến đổi tạo cảm giác chuyển động
? Áp phích (poster) cần: | Hình ảnh nổi bật, chữ ngắn gọn, thông điệp rõ | Nhiều chữ nhỏ | Không có hình | Màu nhạt mờ
? Kiểu chữ trong thiết kế đồ hoạ cần: | Dễ đọc, phù hợp nội dung | Càng rối càng tốt | Không quan trọng | Viết tay lộn xộn
+ Màu sắc tương phản giúp thông điệp nổi bật.` },
    { hk: 2, ten: 'Mĩ thuật tạo hình: tranh và tượng', bai: ['Quan sát và nhận thức', 'Luyện tập và sáng tạo', 'Phân tích và đánh giá', 'Vận dụng', '*Trưng bày sản phẩm cuối năm'],
      lt: ['<b>Luật xa gần</b>: vật ở gần to, rõ; vật ở xa nhỏ, mờ; đường tầm mắt.', 'Tượng tròn và phù điêu; chất liệu: đất nặn, giấy, vật liệu tái chế.'],
      q: `? Theo luật xa gần, vật ở xa thường: | Nhỏ và mờ hơn | To và rõ hơn | Có màu đậm nhất | Không thay đổi
? Hình khối được chạm nổi trên một mặt phẳng gọi là: | Phù điêu | Tượng tròn | Tranh in | Tranh xé dán
+ Đường tầm mắt là đường ngang ngang tầm mắt người nhìn.
- Theo luật xa gần, vật ở xa luôn to hơn vật ở gần.
? Tranh tĩnh vật thường vẽ: | Đồ vật, hoa quả | Phong cảnh rộng | Chân dung | Hoạt động thể thao
? Tạo hình tượng bằng đất nặn cần chú ý: | Tỉ lệ, hình khối, dáng | Chỉ màu sắc | Tên tượng | Kích thước giấy
+ Ánh sáng tạo khối sáng tối trong tranh.` }
  ],
  essays: {
    1: [['Giới thiệu một công trình mĩ thuật cổ đại thế giới em ấn tượng.', ['công trình', 'đặc điểm', 'giá trị'], 'Nêu tên, quốc gia, thời kì, đặc điểm kiến trúc/điêu khắc, giá trị lịch sử – nghệ thuật, cảm nhận của em.'],
      ['Nêu đặc điểm hình rồng thời Lý.', ['mềm mại', 'uốn lượn', 'rắn'], 'Rồng thời Lý có thân dài, mềm mại, uốn lượn nhiều khúc như con rắn, đầu nhỏ, có mào lửa; thể hiện sự uyển chuyển, thanh thoát.']],
    2: [['Trình bày ý tưởng thiết kế một logo cho câu lạc bộ của lớp em.', ['logo', 'màu', 'ý nghĩa'], 'Tên câu lạc bộ; hình ảnh chính và ý nghĩa; màu sắc, kiểu chữ; bố cục; lí do lựa chọn.'],
      ['Thế nào là luật xa gần? Ứng dụng khi vẽ tranh phong cảnh.', ['xa', 'gần', 'tầm mắt'], 'Vật ở gần to, rõ, đậm; vật ở xa nhỏ, mờ, nhạt; các đường song song hội tụ về điểm tụ trên đường tầm mắt. Khi vẽ phong cảnh: cảnh gần vẽ to, chi tiết; cảnh xa vẽ nhỏ, màu nhạt.']]
  }
});

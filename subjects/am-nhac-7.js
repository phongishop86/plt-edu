/* Âm nhạc 7 – KNTT. Hát, nghe nhạc, đọc nhạc, nhạc cụ, thường thức âm nhạc; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'am-nhac-7', lop: 7, mon: 'Âm nhạc', icon: '🎵', so: false, share: PLT.KB.SHARE.amnhac,
  topics: [
    { hk: 1, ten: 'Tình bạn – mái trường', bai: ['Hát', 'Nghe nhạc', 'Lí thuyết âm nhạc: Nhịp 3/4, dấu nối, dấu luyến', 'Đọc nhạc', 'Nhạc cụ'],
      lt: ['<b>Nhịp 3/4</b>: mỗi ô nhịp có 3 phách, mỗi phách bằng một nốt đen; phách 1 mạnh, phách 2 và 3 nhẹ — thường gặp ở điệu Van-xơ.', '<b>Nhịp 2/4</b>: 2 phách, phách 1 mạnh, phách 2 nhẹ.', '<b>Dấu nối</b>: nối hai nốt cùng cao độ; <b>dấu luyến</b>: nối các nốt khác cao độ, hát liền hơi.'],
      q: `? Nhịp 3/4 mỗi ô nhịp có: | 3 phách, mỗi phách bằng một nốt đen | 4 phách | 2 phách | 3 phách, mỗi phách bằng nốt trắng
? Trong nhịp 3/4, phách mạnh là: | Phách 1 | Phách 2 | Phách 3 | Không có phách mạnh
? Điệu nhảy thường dùng nhịp 3/4 là: | Van-xơ | Hip-hop | Tăng-gô | Rốc
+ Nhịp 2/4 có phách 1 mạnh, phách 2 nhẹ.
- Dấu nối dùng cho hai nốt khác cao độ.
= Nhịp 2/4 = 2 phách trong một ô nhịp
= Nhịp 3/4 = 3 phách trong một ô nhịp
= Nhịp 4/4 = 4 phách trong một ô nhịp` },
    { hk: 1, ten: 'Giai điệu quê hương', bai: ['Hát dân ca', 'Thường thức âm nhạc: Một số thể loại dân ca Việt Nam', 'Nghe nhạc', '*Ôn tập học kì I'],
      lt: ['Dân ca các vùng miền: <b>Quan họ</b> (Bắc Ninh), <b>hát Xoan</b> (Phú Thọ), <b>ví, giặm</b> (Nghệ Tĩnh), <b>hò</b> (Huế, Nam Bộ), <b>lí</b> (Nam Bộ), <b>bài chòi</b> (Trung Bộ).', 'Nhiều loại hình đã được UNESCO ghi danh: Quan họ, Ca trù, Ví – Giặm, Hát Xoan, Đờn ca tài tử, Bài chòi.'],
      q: `? Dân ca Quan họ là của vùng: | Bắc Ninh | Nghệ Tĩnh | Huế | Nam Bộ
? Hát Xoan là loại hình dân ca của tỉnh: | Phú Thọ | Bắc Ninh | Nghệ An | Bình Định
? Ví, giặm là dân ca của vùng: | Nghệ Tĩnh | Bắc Ninh | Tây Nguyên | Đồng Tháp
? Đờn ca tài tử là loại hình âm nhạc của: | Nam Bộ | Tây Bắc | Bắc Bộ | Tây Nguyên
+ Dân ca Quan họ được UNESCO ghi danh là di sản văn hoá phi vật thể.
- Đờn ca tài tử là âm nhạc của vùng Tây Bắc.
= Quan họ = Bắc Ninh
= Hát Xoan = Phú Thọ
= Ví, giặm = Nghệ Tĩnh
= Đờn ca tài tử = Nam Bộ` },
    { hk: 2, ten: 'Âm nhạc thế giới', bai: ['Hát', 'Thường thức âm nhạc: Nhạc sĩ thế giới', 'Nghe nhạc', 'Nhạc cụ'],
      lt: ['<b>Mô-da</b> (W. A. Mozart, Áo): thần đồng âm nhạc, sáng tác từ nhỏ.', '<b>Bét-tô-ven</b> (L. van Beethoven, Đức): sáng tác cả khi bị điếc, Giao hưởng số 5, số 9.', '<b>Sô-panh</b> (F. Chopin, Ba Lan): "nhà thơ của đàn pi-a-nô".', '<b>Trai-cốp-xki</b> (Nga): vở ba lê Hồ thiên nga, Kẹp hạt dẻ.'],
      q: `? Nhạc sĩ được mệnh danh "thần đồng âm nhạc" người Áo là: | Mô-da | Bét-tô-ven | Sô-panh | Trai-cốp-xki
? Nhạc sĩ vẫn sáng tác khi bị điếc là: | Bét-tô-ven | Mô-da | Sô-panh | Văn Cao
? Vở ba lê "Hồ thiên nga" của nhạc sĩ: | Trai-cốp-xki | Mô-da | Bét-tô-ven | Sô-panh
? Sô-panh là nhạc sĩ người: | Ba Lan | Đức | Áo | Nga
+ Sô-panh được gọi là "nhà thơ của đàn pi-a-nô".
- Bét-tô-ven là nhạc sĩ người Nga.
= Mô-da = Áo
= Bét-tô-ven = Đức
= Sô-panh = Ba Lan
= Trai-cốp-xki = Nga` },
    { hk: 2, ten: 'Mùa xuân – ước mơ', bai: ['Hát', 'Nghe nhạc', 'Đọc nhạc', 'Vận dụng – sáng tạo', '*Ôn tập cuối năm'],
      lt: ['Nhạc sĩ Việt Nam viết cho thiếu nhi: <b>Phạm Tuyên</b>, <b>Hoàng Long</b>, <b>Hoàng Vân</b>, <b>Mộng Lân</b>…; nhạc sĩ <b>Văn Cao</b> (Tiến quân ca), <b>Đỗ Nhuận</b>, <b>Hoàng Việt</b>.', 'Sáng tạo: đặt lời mới, gõ đệm, biểu diễn theo nhóm, kết hợp vận động.'],
      q: `? Tác giả bài Tiến quân ca (Quốc ca Việt Nam) là: | Văn Cao | Phạm Tuyên | Hoàng Vân | Đỗ Nhuận
? Biểu diễn bài hát theo nhóm cần: | Hoà giọng, đúng nhịp, phối hợp nhịp nhàng | Mỗi người hát một kiểu | Hát thật to át bạn | Không cần tập trước
+ Có thể kết hợp gõ đệm và vận động khi biểu diễn bài hát.
- Biểu diễn theo nhóm không cần thống nhất nhịp.` }
  ],
  essays: {
    1: [['Giới thiệu một loại hình dân ca Việt Nam mà em biết.', ['dân ca', 'vùng', 'đặc điểm'], 'Nêu tên loại hình (Quan họ, Hò, Lí, Ví giặm…), vùng miền, đặc điểm (lối hát, trang phục, nhạc cụ, hoàn cảnh diễn xướng), giá trị và cách gìn giữ.'],
      ['Phân biệt nhịp 2/4 và nhịp 3/4.', ['2 phách', '3 phách', 'mạnh', 'nhẹ'], 'Nhịp 2/4: mỗi ô nhịp 2 phách (mạnh – nhẹ), mỗi phách là một nốt đen. Nhịp 3/4: mỗi ô nhịp 3 phách (mạnh – nhẹ – nhẹ), mỗi phách là một nốt đen.']],
    2: [['Giới thiệu một nhạc sĩ thế giới em đã học.', ['nhạc sĩ', 'tác phẩm', 'quốc'], 'Nêu tên, quốc tịch, thời đại, những tác phẩm tiêu biểu, đặc điểm sáng tác và điều em ấn tượng.'],
      ['Âm nhạc mang lại lợi ích gì cho cuộc sống của em?', ['thư giãn', 'cảm xúc', 'gắn kết'], 'Giúp thư giãn, giải toả căng thẳng; bồi dưỡng tâm hồn, cảm xúc; gắn kết bạn bè, gia đình; phát triển khả năng sáng tạo, tập trung.']]
  }
});

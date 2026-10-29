/* Âm nhạc 5 – KNTT. Câu hỏi do PLT-Edu soạn theo nội dung hát, đọc nhạc, nhạc cụ, thường thức âm nhạc. */
PLT.KB.build({
  id: 'am-nhac-5', lop: 5, mon: 'Âm nhạc', icon: '🎵', so: false, share: PLT.KB.SHARE.amnhac,
  topics: [
    { hk: 1, ten: 'Nhịp và hình nốt', bai: ['Hát', 'Đọc nhạc', 'Lí thuyết âm nhạc', 'Vận dụng – Sáng tạo'],
      lt: ['<b>Nhịp 3/4</b>: mỗi ô nhịp có 3 phách (mạnh – nhẹ – nhẹ), mỗi phách là một nốt đen; thường gặp ở điệu van (valse).', '<b>Dấu chấm dôi</b>: đặt sau nốt, làm tăng thêm một nửa độ dài của nốt đó (nốt trắng chấm dôi = 3 phách).', 'Nốt tròn = 4 phách; nốt trắng = 2; nốt đen = 1; nốt móc đơn = 1/2.'],
      q: `? Nhịp 3/4 có mấy phách trong mỗi ô nhịp? | 3 | 2 | 4 | 6
? Nốt trắng có dấu chấm dôi dài mấy phách? | 3 | 2 | 4 | 1
? Nốt tròn dài bao nhiêu phách? | 4 | 2 | 3 | 1
? Dấu chấm dôi làm nốt nhạc: | Dài thêm một nửa độ dài của nó | Ngắn đi một nửa | Cao lên | To hơn
? Trong nhịp 3/4, phách mạnh là: | Phách thứ nhất | Phách thứ hai | Phách thứ ba | Không có
+ Nhịp 3/4 thường dùng cho điệu van.
- Nốt đen dài hơn nốt trắng.
> Nốt móc đơn > Nốt đen > Nốt trắng > Nốt tròn
= Nốt tròn = 4 phách
= Nốt trắng chấm dôi = 3 phách
= Nốt trắng = 2 phách
= Nốt đen = 1 phách` },
    { hk: 1, ten: 'Âm nhạc Việt Nam', bai: ['Hát dân ca', 'Nghe nhạc', 'Thường thức âm nhạc', '*Ôn tập cuối học kì I'],
      lt: ['Di sản âm nhạc được UNESCO ghi danh: <b>Nhã nhạc cung đình Huế</b> (2003), <b>Không gian văn hoá Cồng chiêng Tây Nguyên</b> (2005), <b>Dân ca Quan họ Bắc Ninh</b> (2009), <b>Ca trù</b> (2009), <b>Hát xoan Phú Thọ</b>, <b>Đờn ca tài tử Nam Bộ</b> (2013), <b>Dân ca Ví, Giặm Nghệ Tĩnh</b> (2014), <b>Bài Chòi</b> (2017).', 'Nhạc sĩ Việt Nam: Văn Cao (Tiến quân ca), Phạm Tuyên, Hoàng Vân, Trần Hoàn…'],
      q: `? Nhã nhạc là âm nhạc cung đình của: | Triều Nguyễn – Huế | Nam Bộ | Tây Nguyên | Tây Bắc
? Đờn ca tài tử là loại hình âm nhạc của vùng: | Nam Bộ | Bắc Bộ | Tây Nguyên | Huế
? Hát xoan gắn với tỉnh: | Phú Thọ | Bắc Ninh | Nghệ An | Huế
? Dân ca Ví, Giặm là của vùng: | Nghệ Tĩnh | Bắc Ninh | Nam Bộ | Tây Nguyên
+ Ca trù là di sản văn hoá phi vật thể được UNESCO ghi danh.
- Quan họ là dân ca của vùng Nam Bộ.
= Quan họ = Bắc Ninh
= Hát xoan = Phú Thọ
= Ví, Giặm = Nghệ Tĩnh
= Đờn ca tài tử = Nam Bộ
= Nhã nhạc = Cung đình Huế` },
    { hk: 2, ten: 'Âm nhạc thế giới', bai: ['Hát', 'Nghe nhạc', 'Thường thức âm nhạc', 'Vận dụng – Sáng tạo'],
      lt: ['Nhạc sĩ cổ điển: Mô-da (Áo), Bét-tô-ven (Đức), Sô-panh (Ba Lan, nhà thơ của dương cầm), Trai-cốp-xki (Nga, Hồ thiên nga).', 'Nhạc cụ phương Tây: đàn piano, vi-ô-lông, ghi-ta, kèn trum-pét, sáo flute.'],
      q: `? Sô-panh là nhạc sĩ người nước: | Ba Lan | Đức | Áo | Nga
? Vở ba lê "Hồ thiên nga" là của: | Trai-cốp-xki | Mô-da | Bét-tô-ven | Sô-panh
? Nhạc cụ có bàn phím đen trắng là: | Đàn piano | Vi-ô-lông | Ghi-ta | Kèn trum-pét
? Vi-ô-lông phát ra âm thanh bằng cách: | Kéo vĩ trên dây | Thổi | Gõ | Lắc
+ Mô-da là nhạc sĩ người Áo.
- Bét-tô-ven là nhạc sĩ người Việt Nam.
= Mô-da = Áo
= Bét-tô-ven = Đức
= Sô-panh = Ba Lan
= Trai-cốp-xki = Nga` },
    { hk: 2, ten: 'Biểu diễn và sáng tạo', bai: ['Hát hai bè', 'Hoà tấu nhạc cụ', 'Biểu diễn', '*Ôn tập cuối năm'],
      lt: ['Hát bè: các nhóm hát những giai điệu khác nhau cùng lúc tạo hoà âm.', 'Hoà tấu: nhiều nhạc cụ cùng chơi; cần nghe nhau, đúng nhịp.'],
      q: `? Nhiều nhạc cụ cùng chơi một bản nhạc gọi là: | Hoà tấu | Độc tấu | Đơn ca | Song ca
? Một người hát gọi là: | Đơn ca | Tốp ca | Hợp xướng | Song ca
? Hai người cùng hát gọi là: | Song ca | Đơn ca | Tốp ca | Độc tấu
+ Khi hát bè cần lắng nghe các bè khác để hoà giọng.
- Hoà tấu là chỉ một nhạc cụ chơi.
= Đơn ca = Một người hát
= Song ca = Hai người hát
= Tốp ca = Một nhóm nhỏ cùng hát
= Độc tấu = Một người chơi nhạc cụ` }
  ],
  essays: {
    1: [['Nhịp 3/4 là gì? Kể tên một điệu nhạc thường dùng nhịp 3/4.', ['3 phách', 'nốt đen', 'van'], 'Nhịp 3/4: mỗi ô nhịp có 3 phách, mỗi phách bằng một nốt đen, phách 1 mạnh, phách 2 và 3 nhẹ. Thường dùng trong điệu van (valse).'],
      ['Kể tên 3 di sản âm nhạc của Việt Nam được UNESCO ghi danh.', ['quan họ', 'nhã nhạc', 'cồng chiêng', 'ca trù'], 'Ví dụ: Nhã nhạc cung đình Huế, Không gian văn hoá Cồng chiêng Tây Nguyên, Dân ca Quan họ Bắc Ninh, Ca trù, Đờn ca tài tử Nam Bộ, Hát xoan, Ví Giặm, Bài Chòi.']],
    2: [['Giới thiệu một nhạc sĩ nổi tiếng thế giới.', ['nhạc sĩ', 'nước', 'tác phẩm'], 'Ví dụ: Bét-tô-ven – nhạc sĩ người Đức, nhiều bản giao hưởng nổi tiếng, vẫn sáng tác khi bị điếc, là tấm gương nghị lực.'],
      ['Phân biệt đơn ca, song ca, tốp ca, hợp xướng.', ['một người', 'hai người', 'nhóm'], 'Đơn ca: một người hát; song ca: hai người; tốp ca: nhóm nhỏ; hợp xướng: tập thể đông người hát nhiều bè.']]
  }
});

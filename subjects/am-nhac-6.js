/* Âm nhạc 6 – KNTT. Hát, nghe nhạc, đọc nhạc, nhạc cụ, thường thức âm nhạc; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'am-nhac-6', lop: 6, mon: 'Âm nhạc', icon: '🎵', so: false, share: PLT.KB.SHARE.amnhac,
  topics: [
    { hk: 1, ten: 'Tuổi học trò và quê hương', bai: ['Hát', 'Nghe nhạc', 'Lí thuyết âm nhạc: Các thuộc tính của âm thanh', 'Đọc nhạc', 'Nhạc cụ'],
      lt: ['Bốn thuộc tính của âm thanh có tính nhạc: <b>cao độ, trường độ, cường độ, âm sắc</b>.', 'Kí hiệu ghi cao độ: khuông nhạc, khoá Son, tên nốt; trường độ: hình nốt tròn, trắng, đen, móc đơn, móc kép và dấu lặng tương ứng.', 'Nhịp 2/4, 3/4; dấu nối, dấu luyến, dấu chấm dôi.'],
      q: `? Thuộc tính giúp phân biệt âm thanh to, nhỏ là: | Cường độ | Cao độ | Trường độ | Âm sắc
? Nốt móc kép có độ dài bằng: | 1/4 nốt đen | Nửa nốt đen | Một nốt đen | Hai nốt đen
? Dấu luyến dùng để: | Nối các nốt khác cao độ, hát liền một hơi | Kéo dài gấp đôi nốt | Ngắt âm | Tăng cường độ
? Dấu nối đặt giữa hai nốt: | Cùng cao độ, ngân liền độ dài | Khác cao độ | Bất kì | Chỉ nốt tròn
+ Một nốt tròn bằng bốn nốt đen.
- Âm sắc là độ to nhỏ của âm thanh.
= Nốt tròn = 4 phách
= Nốt trắng = 2 phách
= Nốt đen = 1 phách
= Nốt móc đơn = 1/2 phách` },
    { hk: 1, ten: 'Âm nhạc dân tộc', bai: ['Hát dân ca', 'Thường thức âm nhạc: Một số nhạc cụ dân tộc', 'Nghe nhạc', '*Ôn tập học kì I'],
      lt: ['Nhạc cụ dân tộc Việt Nam: <b>dây</b> (đàn bầu, đàn tranh, đàn nguyệt, đàn nhị, đàn đáy), <b>hơi</b> (sáo trúc, kèn bầu), <b>gõ</b> (trống, phách, mõ, song loan, cồng chiêng, đàn t\'rưng, đàn đá).'],
      q: `? Đàn nhị phát ra âm thanh bằng cách: | Kéo cần kéo (vĩ) qua dây | Thổi | Gõ | Lắc
? Đàn nguyệt có hộp đàn hình: | Tròn như mặt trăng | Bầu dục dài | Vuông | Tam giác
? Nhạc cụ nào thuộc nhóm hơi? | Sáo trúc | Đàn tranh | Mõ | Trống cơm
+ Đàn đá là nhạc cụ gõ cổ của Việt Nam.
- Đàn nhị là nhạc cụ gõ.
# Nhạc cụ dây: Đàn bầu, Đàn tranh, Đàn nguyệt, Đàn nhị
# Nhạc cụ hơi: Sáo trúc, Kèn bầu, Khèn
# Nhạc cụ gõ: Mõ, Phách, Trống cơm, Đàn đá` },
    { hk: 2, ten: 'Âm nhạc thế giới và nhạc sĩ', bai: ['Hát', 'Nghe nhạc', 'Thường thức âm nhạc: Nhạc sĩ', 'Đọc nhạc', 'Nhạc cụ'],
      lt: ['Nhạc sĩ Việt Nam: Văn Cao (Tiến quân ca, Làng tôi), Hoàng Việt (Tình ca), Phạm Tuyên (Như có Bác trong ngày vui đại thắng), Hoàng Vân (Hò kéo pháo)…', 'Nhạc sĩ thế giới: Mô-da, Bét-tô-ven, Sô-panh, Trai-cốp-xki, Bach.'],
      q: `? Bài hát "Như có Bác trong ngày vui đại thắng" của nhạc sĩ: | Phạm Tuyên | Văn Cao | Hoàng Việt | Trần Hoàn
? Nhạc sĩ được mệnh danh "nhà thơ của dương cầm" là: | Sô-panh | Bét-tô-ven | Mô-da | Bach
? Bét-tô-ven là nhạc sĩ người: | Đức | Áo | Ba Lan | Nga
+ Văn Cao là tác giả Tiến quân ca.
- Sô-panh là nhạc sĩ người Việt Nam.
= Sô-panh = Ba Lan
= Mô-da = Áo
= Bét-tô-ven = Đức
= Trai-cốp-xki = Nga` },
    { hk: 2, ten: 'Biểu diễn và sáng tạo', bai: ['Hát bè, hát hoà giọng', 'Nhạc cụ giai điệu (sáo recorder, kèn phím)', 'Vận dụng – Sáng tạo', '*Ôn tập cuối năm'],
      lt: ['Hình thức trình diễn: đơn ca, song ca, tốp ca, đồng ca, hợp xướng; độc tấu, hoà tấu.', 'Sáo recorder: bịt lỗ bằng đầu ngón tay, thổi nhẹ đều hơi.'],
      q: `? Nhiều người cùng hát một giai điệu gọi là: | Đồng ca | Đơn ca | Song ca | Độc tấu
? Hợp xướng là: | Tập thể đông người hát nhiều bè | Một người hát | Hai người hát | Một nhạc cụ chơi
+ Khi thổi sáo recorder cần thổi hơi nhẹ, đều.
- Độc tấu là nhiều nhạc cụ cùng chơi.` }
  ],
  essays: {
    1: [['Nêu 4 thuộc tính của âm thanh có tính nhạc và cho ví dụ.', ['cao độ', 'trường độ', 'cường độ', 'âm sắc'], 'Cao độ (cao – thấp), trường độ (dài – ngắn), cường độ (mạnh – nhẹ), âm sắc (màu sắc riêng của giọng, nhạc cụ). Ví dụ: tiếng sáo và tiếng đàn khác nhau về âm sắc.'],
      ['Kể tên và phân loại 6 nhạc cụ dân tộc Việt Nam.', ['dây', 'hơi', 'gõ'], 'Dây: đàn bầu, đàn tranh; hơi: sáo trúc, kèn bầu; gõ: trống, cồng chiêng, đàn t\'rưng…']],
    2: [['Giới thiệu một nhạc sĩ Việt Nam và một tác phẩm tiêu biểu.', ['nhạc sĩ', 'tác phẩm'], 'Ví dụ: nhạc sĩ Văn Cao, tác giả Tiến quân ca — Quốc ca Việt Nam; ngoài ra có Làng tôi, Mùa xuân đầu tiên…'],
      ['Phân biệt các hình thức trình diễn: đơn ca, song ca, tốp ca, hợp xướng.', ['một', 'hai', 'nhóm', 'bè'], 'Đơn ca: 1 người; song ca: 2 người; tốp ca: nhóm nhỏ; hợp xướng: tập thể lớn hát nhiều bè.']]
  }
});

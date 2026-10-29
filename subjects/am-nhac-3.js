/* Âm nhạc 3 – KNTT. Các chủ đề: hát, nghe nhạc, đọc nhạc, nhạc cụ, thường thức âm nhạc; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'am-nhac-3', lop: 3, mon: 'Âm nhạc', icon: '🎵', so: false, share: PLT.KB.SHARE.amnhac,
  topics: [
    { hk: 1, ten: 'Mở đầu – Âm thanh và nốt nhạc', bai: ['Hát', 'Đọc nhạc', 'Thường thức âm nhạc', 'Vận dụng – Sáng tạo'],
      lt: ['Âm thanh trong âm nhạc có <b>cao độ</b> (cao – thấp), <b>trường độ</b> (dài – ngắn), <b>cường độ</b> (to – nhỏ), <b>âm sắc</b> (màu sắc riêng của mỗi giọng, nhạc cụ).', 'Bảy nốt nhạc: Đô, Rê, Mi, Pha, Son, La, Si; được viết trên <b>khuông nhạc</b> gồm 5 dòng kẻ.'],
      q: `? Khuông nhạc có mấy dòng kẻ? | 5 | 4 | 7 | 3
? Âm thanh to hay nhỏ gọi là: | Cường độ | Cao độ | Trường độ | Âm sắc
? Âm thanh dài hay ngắn gọi là: | Trường độ | Cao độ | Cường độ | Âm sắc
? Nhờ yếu tố nào ta phân biệt được tiếng sáo với tiếng đàn? | Âm sắc | Trường độ | Cường độ | Nhịp
+ Bảy nốt nhạc được viết trên khuông nhạc.
- Khuông nhạc có 7 dòng kẻ.
= Cao độ = Âm thanh cao hay thấp
= Trường độ = Âm thanh dài hay ngắn
= Cường độ = Âm thanh to hay nhỏ
= Âm sắc = Màu sắc riêng của âm thanh
> Đô > Rê > Mi > Pha > Son > La > Si` },
    { hk: 1, ten: 'Trường ca và tình bạn', bai: ['Hát', 'Nghe nhạc', 'Nhạc cụ', 'Vận dụng – Sáng tạo'],
      lt: ['Hát đúng cao độ, trường độ, rõ lời; thể hiện sắc thái vui tươi.', 'Nhạc cụ gõ: thanh phách, trống con, song loan, tem-bơ-rin, trai-en-gô (kẻng ba góc), ma-ra-cát.'],
      q: `? Trai-en-gô (triangle) có hình: | Tam giác | Tròn | Vuông | Ngôi sao
? Tem-bơ-rin phát ra âm thanh bằng cách: | Gõ hoặc lắc | Thổi | Kéo dây | Bấm phím
+ Hát tập thể cần hoà giọng, đều nhịp.
- Thanh phách là nhạc cụ thổi.
# Nhạc cụ gõ: Thanh phách, Trống con, Trai-en-gô, Tem-bơ-rin
# Nhạc cụ thổi: Sáo trúc, Kèn phím, Kèn harmonica` },
    { hk: 1, ten: 'Quê hương thân yêu', bai: ['Hát dân ca', 'Nghe nhạc', 'Thường thức âm nhạc', '*Ôn tập cuối học kì I'],
      lt: ['Dân ca là bài hát của nhân dân, truyền miệng qua nhiều thế hệ; mỗi vùng có làn điệu riêng.', 'Một số nhạc cụ dân tộc: đàn bầu (1 dây), đàn tranh (16 dây), đàn nguyệt, sáo trúc, đàn T\'rưng (Tây Nguyên), cồng chiêng.'],
      q: `? Đàn T'rưng là nhạc cụ của vùng: | Tây Nguyên | Đồng bằng Bắc Bộ | Nam Bộ | Tây Bắc
? Đàn tranh thường có bao nhiêu dây? | 16 dây | 1 dây | 2 dây | 6 dây
? Dân ca quan họ là của vùng: | Bắc Ninh | Huế | Nam Bộ | Tây Nguyên
+ Cồng chiêng Tây Nguyên là di sản văn hoá của Việt Nam.
- Đàn bầu có 16 dây.
= Đàn bầu = Một dây
= Đàn tranh = Mười sáu dây
= Đàn T'rưng = Nhạc cụ bằng ống tre của Tây Nguyên
= Quan họ = Dân ca Bắc Ninh` },
    { hk: 2, ten: 'Mùa xuân và ngày hội', bai: ['Hát', 'Đọc nhạc', 'Nghe nhạc', 'Vận dụng – Sáng tạo'],
      lt: ['Bài hát mùa xuân thường vui tươi, rộn ràng; gõ đệm theo phách, theo nhịp.', 'Đọc nhạc: đọc tên nốt, đúng cao độ, kết hợp gõ phách.'],
      q: `? Gõ đệm theo phách là: | Gõ đều theo từng phách của bài hát | Gõ lung tung | Gõ thật to một lần | Không gõ
? Bài hát mùa xuân thường có tính chất: | Vui tươi, rộn ràng | Buồn thương | U ám | Sợ hãi
+ Phách là đơn vị đều đặn của thời gian trong âm nhạc.
- Gõ đệm không cần theo nhịp bài hát.` },
    { hk: 2, ten: 'Thiên nhiên và gia đình', bai: ['Hát', 'Nghe nhạc', 'Nhạc cụ', 'Vận dụng – Sáng tạo'],
      lt: ['Âm nhạc có thể mô phỏng tiếng mưa, tiếng chim, tiếng suối…', 'Bài hát ru, bài hát về mẹ thể hiện tình cảm gia đình.'],
      q: `? Bài hát ru thường có tính chất: | Nhẹ nhàng, êm ái | Sôi động | Hùng tráng | Gấp gáp
? Nhạc cụ có thể mô phỏng tiếng mưa rơi là: | Ma-ra-cát lắc nhẹ | Trống cái đánh mạnh | Kèn đồng | Đàn piano bấm mạnh
+ Âm nhạc giúp thể hiện tình cảm, cảm xúc.
- Bài hát ru thường rất ồn ào.` },
    { hk: 2, ten: 'Mùa hè vui', bai: ['Hát', 'Nghe nhạc', 'Biểu diễn', '*Ôn tập cuối năm'],
      lt: ['Ôn tập các bài hát, bài đọc nhạc, nhạc cụ, kiến thức thường thức đã học.', 'Biểu diễn tự tin, kết hợp vận động và gõ đệm.'],
      q: `? Khi biểu diễn, em nên: | Tự tin, hát rõ lời, thể hiện cảm xúc | Quay lưng lại khán giả | Hát lí nhí | Cười đùa
? Yếu tố giúp phân biệt giọng hát của các bạn là: | Âm sắc | Cường độ | Trường độ | Nhịp
+ Vận động phụ hoạ giúp tiết mục sinh động hơn.
> Chào khán giả > Biểu diễn bài hát > Cảm ơn và chào kết thúc` }
  ],
  essays: {
    1: [['Nêu 4 thuộc tính của âm thanh trong âm nhạc.', ['cao độ', 'trường độ', 'cường độ', 'âm sắc'], 'Cao độ (cao – thấp), trường độ (dài – ngắn), cường độ (to – nhỏ), âm sắc (màu sắc riêng).'],
      ['Kể tên một số nhạc cụ dân tộc Việt Nam mà em biết.', ['đàn bầu', 'đàn tranh', 'sáo'], 'Đàn bầu, đàn tranh, đàn nguyệt, đàn nhị, sáo trúc, đàn T\'rưng, cồng chiêng…']],
    2: [['Kể tên một bài hát em thích trong năm học và cảm nhận của em.', ['bài hát', 'thích'], 'Nêu tên bài hát, nội dung, tính chất (vui tươi, nhẹ nhàng…), lí do em thích.'],
      ['Em sẽ chuẩn bị gì để biểu diễn một tiết mục văn nghệ của lớp?', ['tập', 'biểu diễn', 'trang phục'], 'Chọn bài hát, tập thuộc lời và giai điệu, tập gõ đệm/động tác phụ hoạ, chuẩn bị trang phục, tự tin biểu diễn.']]
  }
});

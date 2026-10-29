/* Âm nhạc 10 – KNTT. Câu hỏi ôn hát, nghe, lí thuyết, thường thức âm nhạc do PLT-Edu soạn. */
PLT.KB.build({
  id: 'am-nhac-10', lop: 10, mon: 'Âm nhạc', icon: '🎵', so: false, share: PLT.KB.SHARE.amnhac,
  topics: [
    { hk: 1, ten: 'Âm nhạc và cuộc sống', bai: ['Hát', 'Nghe nhạc', 'Lí thuyết âm nhạc: Nhịp, phách, tiết tấu', 'Thường thức âm nhạc: Vai trò của âm nhạc'],
      lt: ['Âm nhạc gắn với lao động, lễ hội, tín ngưỡng, giải trí, giáo dục.', 'Nhịp 2/4 (2 phách, mỗi phách = nốt đen), 3/4, 4/4; phách mạnh, phách nhẹ.'],
      q: `? Nhịp 3/4 có mấy phách trong một ô nhịp? | 3 | 2 | 4 | 6
? Trong nhịp 2/4, mỗi phách có giá trị bằng: | Nốt đen | Nốt trắng | Nốt tròn | Nốt móc kép
+ Âm nhạc có vai trò giáo dục, giải trí và gắn kết cộng đồng.
- Phách đầu tiên của ô nhịp luôn là phách nhẹ.` },
    { hk: 1, ten: 'Âm nhạc truyền thống Việt Nam', bai: ['Hát dân ca', 'Nghe nhạc', 'Thường thức âm nhạc: Nhã nhạc cung đình Huế, Ca trù', '*Ôn tập học kì I'],
      lt: ['<b>Nhã nhạc cung đình Huế</b>: UNESCO ghi danh năm 2003 — di sản âm nhạc đầu tiên của Việt Nam.', '<b>Ca trù</b>: ghi danh 2009 (cần bảo vệ khẩn cấp); nhạc cụ: đàn đáy, phách, trống chầu.'],
      q: `? Di sản âm nhạc đầu tiên của Việt Nam được UNESCO ghi danh là: | Nhã nhạc cung đình Huế | Quan họ | Đờn ca tài tử | Hát Xoan
? Nhạc cụ đặc trưng của Ca trù là: | Đàn đáy | Đàn bầu | Đàn tranh | Sáo trúc
+ Trống chầu được dùng trong biểu diễn Ca trù.
- Nhã nhạc cung đình Huế là âm nhạc dân gian của người Tây Nguyên.` },
    { hk: 2, ten: 'Âm nhạc thế giới', bai: ['Hát', 'Nghe nhạc', 'Thường thức âm nhạc: Các thời kì âm nhạc cổ điển châu Âu', 'Nhạc cụ'],
      lt: ['Các thời kì: Ba-rốc (Bach, Handel), Cổ điển (Haydn, Mozart, Beethoven), Lãng mạn (Chopin, Schubert, Tchaikovsky).', 'Dàn nhạc giao hưởng: bộ dây, bộ gỗ, bộ đồng, bộ gõ.'],
      q: `? Nhà soạn nhạc thuộc thời kì Cổ điển là: | Mozart | Bach | Chopin | Debussy
? Đàn vi-ô-lông thuộc bộ nào trong dàn nhạc giao hưởng? | Bộ dây | Bộ gỗ | Bộ đồng | Bộ gõ
+ Beethoven là cầu nối giữa thời kì Cổ điển và Lãng mạn.
- Kèn trompet thuộc bộ gỗ.` },
    { hk: 2, ten: 'Âm nhạc đương đại và sáng tạo', bai: ['Hát', 'Nghe nhạc: Các thể loại nhạc phổ thông', 'Sáng tạo âm nhạc với phần mềm', '*Ôn tập cuối năm'],
      lt: ['Các thể loại phổ thông: pop, rock, jazz, rap, EDM, ballad.', 'Phần mềm âm nhạc: MuseScore (ghi bản nhạc, miễn phí), GarageBand, FL Studio.'],
      q: `? Phần mềm miễn phí dùng để ghi chép bản nhạc là: | MuseScore | Excel | Paint | Word
? Thể loại âm nhạc có nguồn gốc từ cộng đồng người Mỹ gốc Phi, nổi bật với ngẫu hứng là: | Jazz | Nhã nhạc | Ca trù | Quan họ
+ Sử dụng nhạc trên mạng cần tôn trọng bản quyền.
- Rap là thể loại nhạc cổ điển châu Âu thế kỉ XVIII.` }
  ],
  essays: {
    1: [['Giới thiệu một di sản âm nhạc Việt Nam được UNESCO ghi danh.', ['UNESCO', 'vùng', 'đặc điểm'], 'Nêu tên di sản, vùng, năm ghi danh, đặc điểm biểu diễn, nhạc cụ, giá trị văn hoá, trách nhiệm gìn giữ.', 3],
      ['Âm nhạc có vai trò gì trong đời sống học sinh?', ['thư giãn', 'cảm xúc', 'kĩ năng'], 'Giải toả căng thẳng, bồi dưỡng cảm xúc, phát triển trí tuệ, kĩ năng hợp tác, tự tin, gắn kết bạn bè.', 3]],
    2: [['Giới thiệu một nhạc sĩ (Việt Nam hoặc thế giới) và tác phẩm tiêu biểu.', ['nhạc sĩ', 'tác phẩm'], 'Tên, quốc tịch, thời kì, tác phẩm tiêu biểu, phong cách, ảnh hưởng.', 3],
      ['Em làm gì để góp phần gìn giữ, phát huy âm nhạc truyền thống?', ['học', 'biểu diễn', 'quảng bá'], 'Tìm hiểu, học hát dân ca, nhạc cụ dân tộc; tham gia biểu diễn, câu lạc bộ; giới thiệu trên mạng xã hội; tôn trọng nghệ nhân, bản quyền.', 3]]
  }
});

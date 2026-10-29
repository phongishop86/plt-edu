/* Âm nhạc 8 – KNTT. Hát, nghe nhạc, đọc nhạc, nhạc cụ, thường thức âm nhạc; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'am-nhac-8', lop: 8, mon: 'Âm nhạc', icon: '🎵', so: false, share: PLT.KB.SHARE.amnhac,
  topics: [
    { hk: 1, ten: 'Tuổi trẻ và ước mơ', bai: ['Hát', 'Nghe nhạc', 'Lí thuyết âm nhạc: Giọng Đô trưởng, La thứ', 'Đọc nhạc', 'Nhạc cụ'],
      lt: ['<b>Giọng Đô trưởng</b> (C major): âm chủ Đô, không có dấu hoá; tính chất sáng, vui tươi.', '<b>Giọng La thứ</b> (A minor): âm chủ La, giọng song song với Đô trưởng (cùng không dấu hoá); tính chất buồn, trữ tình.', 'Hợp âm ba: Đô – Mi – Son (C), La – Đô – Mi (Am).'],
      q: `? Âm chủ của giọng Đô trưởng là: | Đô | La | Son | Mi
? Giọng song song của Đô trưởng là: | La thứ | Mi thứ | Son trưởng | Rê thứ
? Hợp âm Đô trưởng gồm các nốt: | Đô – Mi – Son | La – Đô – Mi | Rê – Pha – La | Son – Si – Rê
? Giọng thứ thường mang tính chất: | Buồn, trữ tình | Vui tươi, rộn ràng | Hùng tráng | Không có cảm xúc
+ Giọng Đô trưởng và La thứ đều không có dấu hoá ở hoá biểu.
- Âm chủ của giọng La thứ là nốt Đô.` },
    { hk: 1, ten: 'Âm nhạc truyền thống Việt Nam', bai: ['Hát dân ca', 'Thường thức âm nhạc: Nghệ thuật Chèo, Ca Huế', 'Nghe nhạc', '*Ôn tập học kì I'],
      lt: ['<b>Chèo</b>: sân khấu dân gian đồng bằng Bắc Bộ, các làn điệu: sa mạc, đường trường…; nhạc cụ: trống, đàn nguyệt, nhị, sáo.', '<b>Ca Huế</b>: lối hát thính phòng xứ Huế, thường biểu diễn trên thuyền rồng sông Hương.', '<b>Nhã nhạc cung đình Huế</b>: âm nhạc cung đình triều Nguyễn, được UNESCO ghi danh (2003).'],
      q: `? Chèo là loại hình sân khấu dân gian của vùng: | Đồng bằng Bắc Bộ | Nam Bộ | Tây Nguyên | Tây Bắc
? Ca Huế thường được biểu diễn ở: | Thuyền trên sông Hương | Sân đình miền núi | Nhà rông | Chợ nổi
? Nhã nhạc cung đình Huế là âm nhạc của triều đại: | Nguyễn | Lý | Trần | Lê sơ
+ Nhã nhạc cung đình Huế được UNESCO ghi danh là di sản văn hoá phi vật thể.
- Chèo có nguồn gốc từ Tây Nguyên.
= Chèo = Đồng bằng Bắc Bộ
= Ca Huế = Sông Hương, xứ Huế
= Cồng chiêng = Tây Nguyên
= Đờn ca tài tử = Nam Bộ` },
    { hk: 2, ten: 'Âm nhạc thế giới', bai: ['Hát', 'Thường thức âm nhạc: Một số thể loại âm nhạc', 'Nghe nhạc', 'Nhạc cụ'],
      lt: ['Thể loại: <b>giao hưởng</b> (dàn nhạc lớn nhiều bè), <b>opera</b> (nhạc kịch), <b>ba lê</b> (vũ kịch), <b>nhạc pop, rock, jazz</b> (âm nhạc đại chúng hiện đại).', 'Dàn nhạc giao hưởng gồm bộ dây, bộ gỗ, bộ đồng, bộ gõ; người chỉ huy dàn nhạc.'],
      q: `? Tác phẩm âm nhạc cho dàn nhạc lớn, nhiều chương là: | Giao hưởng | Dân ca | Đồng dao | Hát ru
? Loại hình kết hợp âm nhạc, ca hát và kịch là: | Opera | Ba lê | Giao hưởng | Hoà tấu
? Vi-ô-lông thuộc bộ nhạc cụ nào trong dàn nhạc giao hưởng? | Bộ dây | Bộ gõ | Bộ đồng | Bộ gỗ
+ Ba lê là nghệ thuật múa kết hợp âm nhạc, không có lời hát.
- Kèn trumpet thuộc bộ dây.
= Giao hưởng = Dàn nhạc lớn, nhiều chương
= Opera = Nhạc kịch có hát
= Ba lê = Vũ kịch
= Jazz = Âm nhạc ngẫu hứng, nguồn gốc từ Mỹ` },
    { hk: 2, ten: 'Quê hương – đất nước', bai: ['Hát', 'Nghe nhạc', 'Đọc nhạc', 'Vận dụng – sáng tạo', '*Ôn tập cuối năm'],
      lt: ['Nhạc sĩ Việt Nam với các ca khúc về quê hương: Văn Cao, Phạm Tuyên, Hoàng Việt, Trần Hoàn, Phạm Minh Tuấn…', 'Sáng tạo: biểu diễn hát kết hợp nhạc cụ, đệm hợp âm đơn giản, dàn dựng tiết mục.'],
      q: `? Biểu diễn hát kết hợp đệm nhạc cụ theo hợp âm giúp: | Bài hát phong phú, hài hoà hơn | Bài hát lạc nhịp | Át tiếng hát | Không cần thiết
? Khi dàn dựng tiết mục văn nghệ của lớp, cần: | Phân công, tập luyện, phối hợp nhịp nhàng | Mỗi người tự làm | Không cần tập | Chỉ một người biểu diễn
+ Âm nhạc về quê hương góp phần bồi đắp tình yêu đất nước.
- Hát đệm hợp âm không cần đúng giọng.` }
  ],
  essays: {
    1: [['So sánh giọng Đô trưởng và giọng La thứ.', ['âm chủ', 'dấu hoá', 'tính chất'], 'Đô trưởng: âm chủ Đô, không dấu hoá, tính chất sáng, vui. La thứ: âm chủ La, cũng không dấu hoá (giọng song song), tính chất buồn, trữ tình.'],
      ['Giới thiệu một loại hình âm nhạc truyền thống Việt Nam.', ['loại hình', 'vùng', 'đặc điểm'], 'Nêu tên (Chèo, Ca Huế, Quan họ, Nhã nhạc…), vùng miền, đặc điểm biểu diễn, nhạc cụ, làn điệu, giá trị và cách bảo tồn.']],
    2: [['Kể tên các bộ nhạc cụ trong dàn nhạc giao hưởng và ví dụ.', ['dây', 'gỗ', 'đồng', 'gõ'], 'Bộ dây (vi-ô-lông, vi-ô-lông-xen); bộ gỗ (sáo, ô-boa, kèn cla-ri-nét); bộ đồng (kèn trumpet, trombone, horn); bộ gõ (trống timpani, chũm chọe).'],
      ['Em sẽ làm gì để giữ gìn và phát huy âm nhạc truyền thống?', ['tìm hiểu', 'biểu diễn', 'giới thiệu'], 'Tìm hiểu, nghe, học hát dân ca; tham gia câu lạc bộ, biểu diễn; giới thiệu với bạn bè qua mạng xã hội; tôn trọng nghệ nhân; kết hợp sáng tạo phù hợp.']]
  }
});

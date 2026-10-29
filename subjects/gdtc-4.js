/* Giáo dục thể chất 4 – KNTT. Câu hỏi ôn kiến thức, kĩ thuật, luật chơi, an toàn do PLT-Edu soạn. */
PLT.KB.build({
  id: 'gdtc-4', lop: 4, mon: 'Giáo dục thể chất', icon: '⚽',
  topics: [
    { hk: 1, ten: 'Đội hình đội ngũ', bai: ['Biến đổi đội hình từ một hàng dọc thành hai, bốn hàng dọc và ngược lại', 'Đi đều vòng bên phải, vòng bên trái', 'Đổi chân khi đi đều sai nhịp'],
      lt: ['Đi đều: bước chân trái trước, tay phải đánh ra trước, giữ đúng nhịp "1 – 2".', 'Khi đi đều sai nhịp: bước đệm (đổi chân) để trở về đúng nhịp.'],
      q: `? Khi đi đều, chân nào bước trước? | Chân trái | Chân phải | Hai chân cùng lúc | Tuỳ ý
? Khi chân trái bước lên, tay nào đánh ra trước? | Tay phải | Tay trái | Cả hai tay | Không đánh tay
+ Đi đều cần giữ đúng nhịp và thẳng hàng.
- Khi đi đều, tay và chân cùng bên đánh ra trước.` },
    { hk: 1, ten: 'Bài tập thể dục', bai: ['Bài thể dục với gậy', 'Động tác điều hoà'],
      lt: ['Tập với gậy: cầm gậy chắc, đúng tư thế, giữ khoảng cách an toàn với bạn.', 'Thở sâu, thả lỏng sau tập.'],
      q: `? Khi tập thể dục với gậy, cần: | Giữ khoảng cách an toàn với bạn | Vung gậy vào bạn | Ném gậy | Đứng sát nhau
+ Tập thể dục với gậy giúp tăng sự khéo léo, mềm dẻo.
- Có thể dùng gậy để đùa nghịch đánh nhau.` },
    { hk: 1, ten: 'Tư thế và kĩ năng vận động cơ bản', bai: ['Bài tập rèn luyện tư thế cơ bản', 'Chạy cự li ngắn', 'Nhảy xa', 'Ném bóng'],
      lt: ['Chạy cự li ngắn: xuất phát cao, chạy nhanh, đánh tay mạnh, về đích dứt khoát.', 'Nhảy xa: chạy đà → giậm nhảy bằng một chân → bay trên không → tiếp đất bằng hai chân, chùng gối.'],
      q: `? Thứ tự các giai đoạn nhảy xa là: | Chạy đà – giậm nhảy – bay trên không – tiếp đất | Tiếp đất – chạy đà – bay – giậm nhảy | Bay – chạy đà – tiếp đất | Giậm nhảy – tiếp đất – chạy đà
? Khi tiếp đất trong nhảy xa, em nên: | Chùng gối, hai chân tiếp đất | Thẳng chân cứng | Ngã ra sau | Tiếp đất bằng tay
+ Đánh tay mạnh giúp chạy nhanh hơn.
> Chạy đà > Giậm nhảy > Bay trên không > Tiếp đất` },
    { hk: 2, ten: 'Thể thao tự chọn: Bóng đá, Bóng rổ', bai: ['Dẫn bóng', 'Chuyền và bắt bóng', 'Ném rổ / sút bóng', 'Trò chơi vận dụng'],
      lt: ['Bóng rổ: dẫn bóng bằng các ngón tay; chuyền bóng bằng hai tay trước ngực.', 'Bóng đá: dẫn bóng bằng mu, má trong bàn chân; dừng bóng bằng lòng bàn chân.', 'Thi đấu: tôn trọng luật, đồng đội, trọng tài.'],
      q: `? Dừng bóng lăn sệt trong bóng đá thường dùng: | Lòng bàn chân | Đầu | Đầu gối | Tay
? Tinh thần thể thao là: | Tôn trọng luật chơi, đồng đội, đối thủ | Chơi xấu để thắng | Cãi trọng tài | Bỏ cuộc khi thua
+ Chuyền bóng tốt giúp cả đội phối hợp hiệu quả.
- Trong bóng rổ được ôm bóng chạy tự do.` }
  ],
  essays: {
    1: [['Nêu các giai đoạn của kĩ thuật nhảy xa.', ['chạy đà', 'giậm nhảy', 'tiếp đất'], 'Chạy đà → giậm nhảy bằng một chân → bay trên không → tiếp đất bằng hai chân, chùng gối.'],
      ['Nêu cách đi đều đúng nhịp.', ['chân trái', 'tay phải', 'nhịp'], 'Chân trái bước trước, tay phải đánh ra trước; tay chân phối hợp ngược bên, bước đều theo nhịp "1 – 2", giữ thẳng hàng.']],
    2: [['Em hiểu thế nào là tinh thần thể thao?', ['luật', 'tôn trọng', 'đồng đội'], 'Tôn trọng luật chơi, trọng tài, đối thủ; đoàn kết với đồng đội; thắng không kiêu, thua không nản; không chơi xấu.'],
      ['Kể những việc em làm để rèn luyện thân thể hằng ngày.', ['tập', 'thể thao', 'ăn'], 'Tập thể dục buổi sáng, chơi một môn thể thao yêu thích, đi bộ, ăn uống đủ chất, ngủ đủ giấc.']]
  }
});

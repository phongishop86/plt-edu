/* Giáo dục thể chất 6 – KNTT. Câu hỏi ôn kiến thức, kĩ thuật, luật, an toàn do PLT-Edu soạn. */
PLT.KB.build({
  id: 'gdtc-6', lop: 6, mon: 'Giáo dục thể chất', icon: '⚽', share: PLT.KB.SHARE.gdtc,
  topics: [
    { hk: 1, ten: 'Chạy cự li ngắn', bai: ['Bài tập bổ trợ, phát triển sức nhanh', 'Kĩ thuật xuất phát thấp và chạy lao', 'Kĩ thuật chạy giữa quãng và về đích'],
      lt: ['Chạy cự li ngắn (60 m) gồm 4 giai đoạn: <b>xuất phát → chạy lao → chạy giữa quãng → về đích</b>.', 'Xuất phát thấp: khẩu lệnh "Vào chỗ – Sẵn sàng – Chạy!".', 'Về đích: dùng ngực hoặc vai chạm dây đích, không nhảy lên.'],
      q: `? Các giai đoạn chạy cự li ngắn theo thứ tự là: | Xuất phát – chạy lao – giữa quãng – về đích | Chạy lao – xuất phát – về đích – giữa quãng | Về đích – giữa quãng – xuất phát – chạy lao | Giữa quãng – xuất phát – chạy lao – về đích
? Khẩu lệnh xuất phát thấp là: | Vào chỗ – Sẵn sàng – Chạy! | Một – hai – ba | Chuẩn bị – Bắt đầu | Nghiêm – Nghỉ
? Khi về đích, VĐV nên: | Dùng ngực hoặc vai chạm dây đích | Nhảy qua dây | Dừng lại trước vạch | Chạy chậm lại
+ Chạy cự li ngắn phát triển sức nhanh.
> Xuất phát > Chạy lao > Chạy giữa quãng > Về đích` },
    { hk: 1, ten: 'Nhảy xa', bai: ['Bài tập bổ trợ', 'Kĩ thuật chạy đà và giậm nhảy', 'Kĩ thuật bay trên không và tiếp đất'],
      lt: ['Nhảy xa kiểu "ngồi": chạy đà → giậm nhảy → bay trên không → tiếp đất.', 'Giậm nhảy bằng chân khoẻ trên ván giậm; tiếp đất bằng hai chân, chùng gối, đưa người về trước.'],
      q: `? Thành tích nhảy xa được đo từ: | Mép ván giậm nhảy đến dấu chạm cát gần nhất | Vạch xuất phát chạy đà | Giữa hố cát | Điểm cao nhất khi bay
? Khi tiếp đất trong nhảy xa, em nên: | Chùng gối, đưa người về trước | Ngã người ra sau | Thẳng chân | Chống tay ra sau
+ Giậm nhảy là giai đoạn quan trọng nhất trong nhảy xa.
> Chạy đà > Giậm nhảy > Bay trên không > Tiếp đất` },
    { hk: 2, ten: 'Chạy cự li trung bình', bai: ['Kĩ thuật chạy trên đường thẳng', 'Kĩ thuật chạy trên đường vòng', 'Phân phối sức khi chạy'],
      lt: ['Chạy cự li trung bình: xuất phát cao; phân phối sức đều, thở sâu nhịp nhàng.', 'Chạy đường vòng: nghiêng người vào phía trong.'],
      q: `? Chạy cự li trung bình thường dùng kiểu xuất phát: | Xuất phát cao | Xuất phát thấp có bàn đạp | Nhảy lên | Ngồi xổm
? Khi chạy đường vòng, thân người nghiêng: | Vào phía trong vòng chạy | Ra phía ngoài | Ra sau | Không nghiêng
+ Phân phối sức hợp lí giúp hoàn thành cự li tốt hơn.
- Chạy cự li trung bình nên dùng hết sức ngay từ đầu.` },
    { hk: 2, ten: 'Thể thao tự chọn: Bóng đá, Bóng rổ, Đá cầu', bai: ['Kĩ thuật cơ bản', 'Phối hợp kĩ thuật', 'Luật thi đấu và trò chơi'],
      lt: ['Bóng đá: dẫn bóng, chuyền bóng má trong, đá bóng mu bàn chân; mỗi đội 11 người.', 'Bóng rổ: dẫn bóng, chuyền bắt bóng hai tay trước ngực, ném rổ một tay trên vai; mỗi đội 5 người.', 'Đá cầu: tâng cầu bằng đùi, má trong, mu bàn chân; phát cầu thấp chân chính diện.'],
      q: `? Mỗi đội bóng rổ có bao nhiêu cầu thủ trên sân? | 5 | 6 | 11 | 7
? Kĩ thuật chuyền bóng chính xác cự li ngắn trong bóng đá là: | Chuyền bằng má trong bàn chân | Sút bằng mũi giày | Đánh đầu | Dùng gót
+ Đá cầu là môn thể thao dân tộc của Việt Nam.
- Bóng rổ cho phép ôm bóng chạy nhiều bước.` }
  ],
  essays: {
    1: [['Trình bày các giai đoạn của kĩ thuật chạy cự li ngắn.', ['xuất phát', 'chạy lao', 'giữa quãng', 'về đích'], 'Xuất phát thấp (Vào chỗ – Sẵn sàng – Chạy) → chạy lao tăng tốc → chạy giữa quãng giữ tốc độ cao → về đích dùng ngực/vai chạm dây đích.'],
      ['Nêu các giai đoạn của nhảy xa kiểu ngồi.', ['chạy đà', 'giậm nhảy', 'bay', 'tiếp đất'], 'Chạy đà tăng tốc → giậm nhảy mạnh trên ván → bay trên không (co gối, tư thế ngồi) → tiếp đất bằng hai chân, chùng gối, đưa người về trước.']],
    2: [['Em đã làm gì để phát triển sức bền?', ['chạy', 'đều', 'kiên trì'], 'Chạy bền đều đặn, tăng dần quãng đường; đạp xe, bơi; thở đúng cách; ăn uống, nghỉ ngơi hợp lí; kiên trì luyện tập.'],
      ['Giới thiệu luật cơ bản của môn thể thao tự chọn em học.', ['luật', 'đội', 'ghi điểm'], 'Nêu số người mỗi đội, cách ghi điểm, một số lỗi thường gặp, tinh thần thể thao.']]
  }
});

/* Giáo dục thể chất 3 – KNTT. Câu hỏi ôn kiến thức, kĩ thuật, an toàn do PLT-Edu soạn. */
PLT.KB.build({
  id: 'gdtc-3', lop: 3, mon: 'Giáo dục thể chất', icon: '⚽', share: PLT.KB.SHARE.gdtc,
  topics: [
    { hk: 1, ten: 'Đội hình đội ngũ', bai: ['Biến đổi đội hình từ một hàng dọc thành hai, ba hàng dọc', 'Biến đổi đội hình từ một hàng ngang thành hai, ba hàng ngang', 'Động tác quay trái, quay phải, quay sau'],
      lt: ['Biến đổi đội hình theo khẩu lệnh, giữ cự li, thẳng hàng.', 'Quay trái: lấy gót chân trái làm trụ, quay 90° sang trái. Quay phải: trụ gót chân phải. Quay sau: quay 180° theo chiều phải.'],
      q: `? Động tác "Đằng sau… quay!" quay người: | 180° ra phía sau | 90° sang trái | 90° sang phải | 360°
? Khi quay trái, trụ ở: | Gót chân trái | Gót chân phải | Mũi chân phải | Hai đầu gối
+ Khi tập đội hình cần giữ trật tự, nghe rõ khẩu lệnh.
- Quay phải là quay 180°.
= Quay trái = Quay 90° sang trái
= Quay phải = Quay 90° sang phải
= Quay sau = Quay 180°
? Khẩu lệnh "Bên phải — quay!" yêu cầu: | Quay người sang phải 90° | Quay sang trái | Quay ra sau | Đứng yên
? Dàn hàng ngang giúp: | Lớp tập luyện có khoảng cách an toàn | Đứng chen chúc | Không ai nhìn thấy | Chạy nhanh
+ Thực hiện đúng khẩu lệnh thể hiện tính kỉ luật.
- Khi điểm số, em được im lặng không nói số của mình.` },
    { hk: 1, ten: 'Bài tập thể dục', bai: ['Động tác vươn thở, tay, chân', 'Động tác vặn mình, bụng, phối hợp', 'Động tác nhảy, điều hoà'],
      lt: ['Tập đúng nhịp, biên độ; hít vào khi mở rộng lồng ngực, thở ra khi thu về.', 'Tập thể dục buổi sáng giúp tỉnh táo, khoẻ mạnh.'],
      q: `? Khi dang tay mở rộng lồng ngực, em nên: | Hít vào | Thở ra | Nín thở | Ho
? Động tác điều hoà có tác dụng: | Thả lỏng, hồi phục cơ thể | Tăng sức mạnh tối đa | Làm mệt hơn | Khởi động
+ Tập thể dục đều đặn giúp cơ thể phát triển cân đối.
> Vươn thở > Tay > Chân > Vặn mình > Bụng > Phối hợp > Nhảy > Điều hoà
? Động tác vươn thở giúp: | Hít thở sâu, điều hoà hô hấp | Mỏi chân | Đau bụng | Buồn ngủ
? Sau khi tập luyện xong cần: | Thả lỏng cơ thể | Uống nước đá ngay thật nhiều | Nằm im dưới nắng | Ăn ngay thật no
+ Bài thể dục phát triển chung giúp cơ thể khoẻ mạnh.
- Không cần khởi động trước khi tập.` },
    { hk: 1, ten: 'Tư thế và kĩ năng vận động cơ bản', bai: ['Đi theo các hướng', 'Chạy theo các hướng', 'Bật nhảy', 'Tung, bắt và ném bóng'],
      lt: ['Đi, chạy đúng tư thế: thân thẳng, mắt nhìn trước, tay đánh tự nhiên.', 'Bật nhảy: khuỵu gối, bật mạnh, tiếp đất nhẹ bằng hai nửa bàn chân trước rồi chùng gối.', 'Tung, bắt bóng: mắt theo bóng, tay đón bóng mềm mại.'],
      q: `? Khi tiếp đất sau bật nhảy, em nên: | Chùng gối để giảm chấn | Thẳng chân cứng | Tiếp đất bằng gót | Ngã người ra sau
? Khi chạy, mắt nên nhìn: | Phía trước | Xuống chân | Lên trời | Ra sau
+ Khởi động kĩ trước khi chạy, nhảy giúp tránh chấn thương.
- Tiếp đất bằng gót chân thẳng gối là đúng kĩ thuật.
? Bài tập đi theo vạch kẻ thẳng giúp rèn: | Khả năng giữ thăng bằng | Sức bền | Chơi cờ | Hát
? Khi chạy, tay em nên: | Đánh tay nhịp nhàng theo bước chân | Để thõng | Chắp sau lưng | Giơ lên trời
+ Tư thế đứng đúng: thẳng lưng, mắt nhìn phía trước.
- Khi chạy nên cúi đầu nhìn xuống chân.` },
    { hk: 2, ten: 'Thể thao tự chọn: Bóng đá', bai: ['Dẫn bóng', 'Chuyền bóng bằng má trong bàn chân', 'Dừng bóng', 'Sút bóng vào cầu môn'],
      lt: ['Bóng đá: mỗi đội đưa bóng vào cầu môn đối phương để ghi bàn; không dùng tay (trừ thủ môn trong khu vực).', 'Chuyền bằng má trong: chân trụ đặt cạnh bóng, má trong bàn chân sút tiếp xúc giữa bóng.'],
      q: `? Trong bóng đá, cầu thủ nào được dùng tay bắt bóng trong khu vực của mình? | Thủ môn | Tiền đạo | Hậu vệ | Tiền vệ
? Chuyền bóng chính xác cự li gần thường dùng: | Má trong bàn chân | Mũi giày | Gót chân | Đầu gối
+ Ghi bàn khi bóng lăn qua hết vạch cầu môn.
- Cầu thủ nào cũng được dùng tay chơi bóng.
? Môn bóng đá dùng bộ phận nào để chơi bóng chủ yếu? | Chân | Tay | Đầu gối duy nhất | Khuỷu tay
? Người được dùng tay bắt bóng trong khu vực cầu môn là: | Thủ môn | Hậu vệ | Tiền đạo | Trọng tài
+ Dẫn bóng bằng má trong bàn chân giúp kiểm soát bóng tốt.
- Trong bóng đá, cầu thủ được dùng tay ném bóng vào lưới.` },
    { hk: 2, ten: 'Thể thao tự chọn: Đá cầu, nhảy dây', bai: ['Tâng cầu bằng đùi', 'Tâng cầu bằng má trong bàn chân', 'Nhảy dây chụm chân', 'Nhảy dây luân phiên chân'],
      lt: ['Tâng cầu: mắt theo cầu, dùng đùi hoặc má trong bàn chân đỡ cầu nảy lên.', 'Nhảy dây: quay dây bằng cổ tay, bật nhảy nhẹ bằng nửa bàn chân trước.'],
      q: `? Khi nhảy dây, dây được quay chủ yếu bằng: | Cổ tay | Vai | Khuỷu tay thẳng cứng | Đầu
? Tâng cầu bằng má trong bàn chân, mắt cần: | Quan sát quả cầu | Nhắm lại | Nhìn bạn | Nhìn lên trời
+ Nhảy dây giúp tăng sức bật và sự khéo léo.
- Đá cầu chỉ được dùng tay.
? Đá cầu dùng chủ yếu: | Chân | Tay | Vợt | Gậy
? Khi nhảy dây, em nên tiếp đất bằng: | Nửa trước bàn chân | Gót chân | Cả bàn chân thật mạnh | Đầu gối
+ Nhảy dây giúp tăng sức bền và sự khéo léo.
- Đá cầu được dùng tay để đỡ cầu.` }
  ],
  essays: {
    1: [['Nêu cách thực hiện động tác quay trái, quay phải, quay sau.', ['gót', '90', '180'], 'Quay trái: trụ gót trái, mũi chân phải đẩy, quay 90° sang trái; quay phải tương tự sang phải; quay sau: quay 180° theo chiều kim đồng hồ rồi kéo chân về tư thế nghiêm.'],
      ['Vì sao cần khởi động trước khi tập luyện?', ['chấn thương', 'khớp'], 'Khởi động làm nóng cơ thể, khớp linh hoạt, cơ dẻo dai, phòng chấn thương, tập luyện hiệu quả.']],
    2: [['Nêu cách chuyền bóng bằng má trong bàn chân.', ['chân trụ', 'má trong', 'bóng'], 'Chân trụ đặt cạnh bóng, mũi chân hướng về nơi chuyền; chân chuyền xoay ngang, dùng má trong tiếp xúc giữa bóng, đẩy bóng đi.'],
      ['Em đã làm gì để rèn luyện sức khoẻ hằng ngày?', ['tập', 'thể dục', 'ăn'], 'Tập thể dục buổi sáng, chơi thể thao (đá cầu, nhảy dây, bơi…), ăn uống đủ chất, ngủ đủ giấc, giữ vệ sinh.']]
  }
});

/* Giáo dục thể chất 1 – KNTT. Chủ đề, bài theo mục lục SGK; câu hỏi do PLT-Edu soạn (ôn kiến thức, luật chơi, an toàn). */
PLT.KB.build({
  id: 'gdtc-1', lop: 1, mon: 'Giáo dục thể chất', icon: '⚽', share: PLT.KB.SHARE.gdtc,
  topics: [
    { hk: 1, ten: 'Đội hình đội ngũ', bai: ['Các tư thế đứng nghiêm, đứng nghỉ', 'Tập hợp đội hình hàng dọc, dóng hàng, điểm số', 'Tập hợp đội hình hàng ngang, dóng hàng, điểm số', 'Động tác quay các hướng'],
      lt: ['<b>Đứng nghiêm</b>: hai gót chân sát nhau, mũi chân chếch chữ V, tay khép sát thân, mắt nhìn thẳng.', '<b>Đứng nghỉ</b>: chùng một chân, dồn trọng tâm vào chân kia.', 'Hàng dọc: đứng nối tiếp nhau, dóng thẳng hàng theo người đứng trước. Hàng ngang: đứng cạnh nhau.', 'Quay phải, quay trái, quay sau theo khẩu lệnh.'],
      q: `? Khi nghe khẩu lệnh "Nghiêm!", em cần: | Đứng thẳng, hai gót chân sát nhau, tay khép sát thân | Ngồi xuống | Chạy đi | Giơ hai tay lên
? Đội hình hàng dọc là: | Các bạn đứng nối tiếp nhau, người sau nhìn gáy người trước | Các bạn đứng cạnh nhau | Đứng thành vòng tròn | Đứng lộn xộn
? Khi điểm số, mỗi bạn: | Đọc số của mình to, rõ và quay mặt về bên trái | Im lặng | Hét thật to tên mình | Chạy ra khỏi hàng
+ Khi tập hợp hàng ngang, các bạn đứng cạnh nhau thành một hàng.
- Khi đứng nghiêm có thể vung tay, nói chuyện.
= Nghiêm! = Đứng thẳng, gót chân sát nhau
= Nghỉ! = Chùng một chân, thả lỏng
= Bên phải quay! = Quay người sang phải
= Đằng sau quay! = Quay người ra phía sau` },
    { hk: 1, ten: 'Bài tập thể dục', bai: ['Động tác vươn thở, động tác tay', 'Động tác chân, động tác vặn mình, động tác bụng', 'Động tác phối hợp, động tác điều hoà'],
      lt: ['Bài thể dục gồm: vươn thở, tay, chân, vặn mình, bụng, phối hợp, điều hoà.', 'Hít vào bằng mũi khi vươn lên, thở ra bằng miệng khi hạ xuống.', 'Động tác điều hoà giúp cơ thể thả lỏng sau khi tập.'],
      q: `? Động tác nào thường tập đầu tiên trong bài thể dục? | Vươn thở | Điều hoà | Phối hợp | Bụng
? Động tác nào thường tập cuối cùng để thả lỏng? | Điều hoà | Vươn thở | Tay | Chân
? Khi tập vươn thở, em: | Hít vào khi vươn lên, thở ra khi hạ xuống | Nín thở suốt | Thở hổn hển | Hét to
+ Tập thể dục đều đặn giúp cơ thể khỏe mạnh.
- Bỏ khởi động sẽ giúp tập luyện an toàn hơn.
> Vươn thở > Tay > Chân > Vặn mình > Bụng > Phối hợp > Điều hoà` },
    { hk: 1, ten: 'Tư thế và kĩ năng vận động cơ bản', bai: ['Vận động của đầu, cổ', 'Vận động của tay', 'Vận động của chân', 'Vận động phối hợp của cơ thể', 'Vận động phối hợp của cơ thể (tiếp)'],
      lt: ['Đầu, cổ: cúi, ngửa, nghiêng, xoay.', 'Tay: đưa ra trước, lên cao, sang ngang; co, duỗi.', 'Chân: co, duỗi, đá, bật nhảy.', 'Phối hợp tay, chân, thân mình nhịp nhàng.'],
      q: `? Động tác cúi, ngửa, xoay là vận động của: | Đầu, cổ | Bàn chân | Ngón tay | Bụng
? Bật nhảy là vận động chủ yếu của: | Chân | Đầu | Cổ | Mắt
? Trước khi tập luyện, em cần: | Khởi động kĩ các khớp | Ăn thật no | Chạy nhanh ngay | Nằm ngủ
+ Khởi động giúp tránh bị chấn thương.
- Xoay cổ thật mạnh, thật nhanh là đúng cách.` },
    { hk: 2, ten: 'Môn Bóng rổ', bai: ['Làm quen với bóng', 'Động tác di chuyển không bóng', 'Động tác dẫn bóng', 'Động tác ném rổ hai tay trước ngực'],
      lt: ['Bóng rổ: đưa bóng vào rổ của đối phương để ghi điểm.', 'Dẫn bóng: đập bóng xuống đất bằng các ngón tay, mắt quan sát phía trước.', 'Ném rổ hai tay trước ngực: cầm bóng bằng hai tay, đẩy bóng lên cao về phía rổ.'],
      q: `? Trong bóng rổ, ghi điểm khi: | Đưa bóng vào rổ | Đá bóng vào gôn | Đánh bóng qua lưới | Lăn bóng ra ngoài
? Khi dẫn bóng, em dùng: | Các ngón tay đập bóng xuống đất | Chân đá bóng | Đầu đánh bóng | Ôm bóng chạy
+ Khi dẫn bóng nên nhìn về phía trước.
- Trong bóng rổ được dùng chân đá bóng.` },
    { hk: 2, ten: 'Môn Bơi', bai: ['Đi trong nước', 'Chạy, nhảy trong nước', 'Lặn, nhịn thở trong nước', 'Tập thở có điểm tì', 'Tập thở không có điểm tì'],
      lt: ['Chỉ xuống nước khi có thầy cô, người lớn hướng dẫn; khởi động kĩ trước khi bơi.', 'Thở: hít vào bằng miệng trên mặt nước, thở ra bằng mũi và miệng dưới nước.', 'Không bơi khi vừa ăn no hoặc quá đói, quá mệt.'],
      q: `? Em chỉ được xuống bể bơi khi: | Có thầy cô hoặc người lớn hướng dẫn | Ở một mình | Vừa ăn no | Trời tối
? Trước khi xuống nước, em cần: | Khởi động kĩ | Ăn thật no | Chạy nhảy trên thành bể | Đẩy bạn xuống nước
+ Học bơi giúp phòng tránh đuối nước.
- Có thể bơi ngay sau khi ăn no.
- Đùa nghịch, xô đẩy nhau trên thành bể là an toàn.` }
  ],
  essays: {
    1: [['Nêu cách thực hiện tư thế đứng nghiêm.', ['gót', 'thẳng', 'tay'], 'Đứng thẳng, hai gót chân sát nhau, hai mũi chân chếch hình chữ V, hai tay khép sát thân, mắt nhìn thẳng.'],
      ['Vì sao em cần tập thể dục buổi sáng hằng ngày?', ['khỏe', 'cơ thể'], 'Tập thể dục giúp cơ thể khỏe mạnh, tỉnh táo, học tập tốt, phòng bệnh.']],
    2: [['Kể những điều cần nhớ để an toàn khi học bơi.', ['người lớn', 'khởi động'], 'Chỉ xuống nước khi có người lớn hướng dẫn; khởi động kĩ; không bơi khi no hoặc đói; không xô đẩy, đùa nghịch.'],
      ['Nêu cách dẫn bóng rổ.', ['ngón tay', 'đập', 'bóng'], 'Dùng các ngón tay đập bóng xuống đất, bóng nảy lên ngang thắt lưng, mắt nhìn phía trước, vừa đập bóng vừa di chuyển.']]
  }
});

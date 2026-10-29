/* Giáo dục thể chất 2 – KNTT. Chủ đề, bài theo mục lục SGK; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'gdtc-2', lop: 2, mon: 'Giáo dục thể chất', icon: '⚽', share: PLT.KB.SHARE.gdtc,
  topics: [
    { hk: 1, ten: 'Đội hình đội ngũ', bai: ['Biến đổi đội hình từ hàng dọc thành vòng tròn và ngược lại', 'Biến đổi đội hình từ hàng ngang thành vòng tròn và ngược lại', 'Giậm chân tại chỗ, đứng lại'],
      lt: ['Biến đổi đội hình theo khẩu lệnh, nhanh, trật tự, giữ khoảng cách đều.', '"Giậm chân… giậm!": giậm chân tại chỗ, đánh tay tự nhiên. "Đứng lại… đứng!": dừng lại ở tư thế nghiêm.'],
      q: `? Khi nghe "Đứng lại… đứng!", em: | Dừng lại ở tư thế nghiêm | Chạy tiếp | Ngồi xuống | Quay sau
? Khi giậm chân tại chỗ, hai tay: | Đánh tự nhiên phối hợp với chân | Giơ cao lên đầu | Chống hông | Khoanh trước ngực
+ Khi biến đổi đội hình cần giữ trật tự, khoảng cách đều.
- Khi tập đội hình đội ngũ có thể chạy lung tung.
> Tập hợp hàng dọc > Dóng hàng > Điểm số > Biến đổi thành vòng tròn` },
    { hk: 1, ten: 'Bài tập thể dục', bai: ['Động tác vươn thở, động tác tay', 'Động tác chân, động tác lườn, động tác bụng', 'Động tác phối hợp, động tác nhảy, động tác điều hoà'],
      lt: ['Bài thể dục lớp 2: vươn thở, tay, chân, lườn, bụng, phối hợp, nhảy, điều hoà.', 'Tập đều đặn, đúng nhịp, kết hợp hít thở.'],
      q: `? Động tác cuối cùng của bài thể dục là: | Điều hoà | Nhảy | Vươn thở | Lườn
? Động tác đầu tiên của bài thể dục là: | Vươn thở | Điều hoà | Nhảy | Bụng
+ Động tác điều hoà giúp cơ thể trở lại trạng thái bình thường.
> Vươn thở > Tay > Chân > Lườn > Bụng > Phối hợp > Nhảy > Điều hoà` },
    { hk: 1, ten: 'Tư thế và kĩ năng vận động cơ bản', bai: ['Bài tập di chuyển theo vạch kẻ thẳng', 'Bài tập phối hợp di chuyển vòng trái, vòng phải', 'Bài tập phối hợp di chuyển nhanh dần theo vạch kẻ thẳng', 'Bài tập phối hợp di chuyển nhanh dần theo vạch kẻ sang trái và sang phải', 'Các động tác quỳ, ngồi cơ bản', 'Bài tập phối hợp các tư thế quỳ, ngồi cơ bản'],
      lt: ['Di chuyển theo vạch kẻ: mắt nhìn thẳng, giữ thăng bằng.', 'Di chuyển vòng trái, vòng phải: nghiêng người về phía vòng.', 'Quỳ, ngồi: quỳ hai gối, ngồi xổm, ngồi bệt… đúng kĩ thuật, tránh chấn thương.'],
      q: `? Khi di chuyển theo vạch kẻ thẳng, mắt em: | Nhìn thẳng về phía trước | Nhìn xuống chân | Nhắm lại | Nhìn ra sau
? Khi di chuyển vòng sang trái, người hơi nghiêng: | Sang trái | Sang phải | Ra sau | Không nghiêng
+ Khởi động kĩ giúp tránh chấn thương.
- Di chuyển nhanh dần nghĩa là chạy hết sức ngay từ đầu.` },
    { hk: 2, ten: 'Môn Bóng rổ', bai: ['Động tác di chuyển không bóng', 'Động tác dẫn bóng', 'Động tác tung – bắt bóng bằng hai tay', 'Động tác ném rổ hai tay trước ngực'],
      lt: ['Tung – bắt bóng: hai tay đưa ra đón bóng, các ngón tay xoè rộng, co tay hoãn xung.', 'Ném rổ hai tay trước ngực: hai tay cầm bóng trước ngực, duỗi tay đẩy bóng lên về phía rổ.'],
      q: `? Khi bắt bóng, các ngón tay: | Xoè rộng, đón bóng | Nắm chặt thành nắm đấm | Khép chặt | Để sau lưng
? Ném rổ hai tay trước ngực, bóng được cầm ở: | Trước ngực | Trên đầu | Sau lưng | Dưới chân
+ Khi tung bóng cần quan sát bạn bắt bóng.
- Bóng rổ được dùng đầu để ghi điểm.` },
    { hk: 2, ten: 'Môn Bơi', bai: ['Ôm gối nổi người trong nước', 'Nổi người duỗi thẳng chân tay trong nước', 'Đạp thành bể (hồ) bơi lướt nước', 'Đạp đáy bể bơi lướt nước'],
      lt: ['Ôm gối nổi: hít sâu, ôm gối, cúi đầu, người nổi như quả bóng.', 'Lướt nước: đạp chân vào thành bể, duỗi thẳng tay chân, người lướt trên mặt nước.', 'Luôn học bơi khi có người lớn, thầy cô hướng dẫn.'],
      q: `? Để ôm gối nổi trong nước, trước tiên em cần: | Hít sâu rồi nín thở | Thở ra hết | Nói chuyện | Mở mắt nhìn trời
? Học bơi chỉ an toàn khi: | Có thầy cô, người lớn hướng dẫn | Đi một mình | Tắm ở sông sâu | Trời tối
+ Duỗi thẳng tay chân giúp người lướt nước xa hơn.
- Có thể nhảy xuống chỗ nước sâu khi chưa biết bơi.` }
  ],
  essays: {
    1: [['Kể tên các động tác của bài thể dục lớp 2 theo thứ tự.', ['vươn thở', 'tay', 'chân', 'điều hoà'], 'Vươn thở, tay, chân, lườn, bụng, phối hợp, nhảy, điều hoà.'],
      ['Vì sao cần khởi động trước khi tập luyện?', ['chấn thương', 'khởi động'], 'Khởi động làm nóng cơ thể, các khớp linh hoạt, giúp tránh chấn thương và tập luyện hiệu quả hơn.']],
    2: [['Nêu cách thực hiện động tác tung – bắt bóng bằng hai tay.', ['tung', 'bắt', 'ngón tay'], 'Hai tay cầm bóng, tung bóng lên vừa sức; khi bóng rơi xuống, hai tay đưa ra đón, các ngón tay xoè rộng, co tay để giảm lực.'],
      ['Kể những điều cần làm để an toàn khi đi bơi.', ['người lớn', 'khởi động', 'áo phao'], 'Bơi ở nơi an toàn, có người lớn trông; khởi động kĩ; không bơi khi no hoặc đói; không đùa nghịch; dùng phao khi cần.']]
  }
});

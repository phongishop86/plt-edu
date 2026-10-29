/* Giáo dục thể chất 10 – KNTT. Câu hỏi ôn kiến thức, kĩ thuật, luật, an toàn do PLT-Edu soạn. */
PLT.KB.build({
  id: 'gdtc-10', lop: 10, mon: 'Giáo dục thể chất', icon: '⚽', share: PLT.KB.SHARE.gdtc,
  topics: [
    { hk: 1, ten: 'Sức khoẻ và chăm sóc sức khoẻ', bai: ['Chế độ dinh dưỡng, luyện tập hợp lí', 'Phòng tránh chấn thương trong thể thao'],
      lt: ['Khởi động kĩ trước khi tập (5–10 phút), thả lỏng sau khi tập.', 'Xử lí ban đầu chấn thương phần mềm (bong gân, căng cơ): nghỉ ngơi, chườm lạnh, băng ép, kê cao (nguyên tắc RICE).'],
      q: `? Khi bị bong gân cổ chân, việc nên làm ngay là: | Chườm lạnh, băng ép, kê cao | Chườm nóng ngay | Xoa bóp mạnh | Tiếp tục chạy
? Mục đích của khởi động trước khi tập luyện là: | Làm nóng cơ thể, phòng chấn thương | Làm cơ thể mệt | Giảm hứng thú | Không có tác dụng
+ Uống đủ nước giúp duy trì thể lực khi tập luyện.
- Không cần thả lỏng sau khi tập luyện cường độ cao.
? Chỉ số BMI được tính bằng: | Cân nặng (kg) chia bình phương chiều cao (m) | Chiều cao chia cân nặng | Cân nặng nhân chiều cao | Tuổi chia cân nặng
? Nhịp tim lúc nghỉ ngơi của người bình thường khoảng: | 60–100 lần/phút | 20 lần/phút | 200 lần/phút | 150–180 lần/phút
+ Ngủ đủ giấc giúp cơ thể hồi phục sau tập luyện.
- Doping là cách hợp lệ để nâng cao thành tích.` },
    { hk: 1, ten: 'Bóng đá', bai: ['Kĩ thuật dẫn bóng, chuyền bóng', 'Kĩ thuật sút bóng', 'Luật bóng đá 11 người'],
      lt: ['Mỗi đội 11 người; trận đấu 2 hiệp × 45 phút.', 'Việt vị, phạt góc, đá phạt trực tiếp, gián tiếp, phạt đền (11 m).', 'Thẻ vàng: cảnh cáo; thẻ đỏ: truất quyền thi đấu.'],
      q: `? Mỗi đội bóng đá sân 11 người có bao nhiêu cầu thủ trên sân? | 11 | 10 | 9 | 7
? Một trận bóng đá chính thức gồm mấy hiệp, mỗi hiệp bao nhiêu phút? | 2 hiệp, 45 phút | 4 hiệp, 15 phút | 2 hiệp, 30 phút | 3 hiệp, 20 phút
? Quả phạt đền được thực hiện tại chấm cách khung thành: | 11 m | 9,15 m | 16,5 m | 5,5 m
+ Hai thẻ vàng trong một trận tương đương một thẻ đỏ.
- Thủ môn được dùng tay bắt bóng ở mọi vị trí trên sân.
? Ném biên trong bóng đá được thực hiện bằng: | Hai tay, đưa bóng từ sau qua đầu | Một tay | Chân | Đầu
? Trận đấu bóng đá chính thức có bao nhiêu trọng tài chính trên sân? | 1 | 2 | 3 | 4
+ Việt vị được xét khi cầu thủ tấn công ở gần khung thành hơn bóng và hậu vệ áp chót tại thời điểm chuyền.` },
    { hk: 2, ten: 'Bóng chuyền', bai: ['Kĩ thuật chuyền bóng cao tay, thấp tay', 'Kĩ thuật phát bóng', 'Luật bóng chuyền'],
      lt: ['Mỗi đội 6 người trên sân; mỗi đội chạm bóng tối đa 3 lần (không kể chắn bóng).', 'Ván đấu 25 điểm (ván quyết thắng 15 điểm), cách biệt 2 điểm; thắng 3/5 ván.'],
      q: `? Mỗi đội bóng chuyền có bao nhiêu vận động viên trên sân? | 6 | 5 | 7 | 11
? Mỗi đội được chạm bóng tối đa bao nhiêu lần trước khi đưa bóng sang sân đối phương? | 3 | 2 | 4 | 5
? Một ván bóng chuyền (không phải ván quyết thắng) kết thúc khi một đội đạt: | 25 điểm và hơn 2 điểm | 21 điểm | 15 điểm | 11 điểm
+ Chuyền bóng thấp tay thường dùng để đỡ bóng phát và bóng đập.
- Một cầu thủ được chạm bóng hai lần liên tiếp (không kể chắn bóng).
? Chiều cao lưới bóng chuyền nam tiêu chuẩn là: | 2,43 m | 2,24 m | 3,05 m | 1,55 m
? Chiều cao lưới bóng chuyền nữ tiêu chuẩn là: | 2,24 m | 2,43 m | 3,05 m | 1,52 m
+ Chắn bóng không tính vào ba lần chạm bóng của đội.` },
    { hk: 2, ten: 'Bóng rổ', bai: ['Kĩ thuật dẫn bóng, chuyền bóng', 'Kĩ thuật ném rổ', 'Luật bóng rổ'], on: 'Ôn tập cuối năm',
      lt: ['Mỗi đội 5 người trên sân; trận đấu 4 hiệp × 10 phút (FIBA).', 'Điểm: ném phạt 1 điểm, trong vạch 3 điểm: 2 điểm, ngoài vạch 3 điểm: 3 điểm.', 'Lỗi chạy bước (cầm bóng di chuyển quá 2 bước), hai lần dẫn bóng.'],
      q: `? Mỗi đội bóng rổ có bao nhiêu vận động viên trên sân? | 5 | 6 | 7 | 11
? Cú ném thành công từ ngoài vạch 3 điểm được tính: | 3 điểm | 2 điểm | 1 điểm | 4 điểm
? Một quả ném phạt thành công được: | 1 điểm | 2 điểm | 3 điểm | 0 điểm
+ Cầm bóng di chuyển quá 2 bước là lỗi chạy bước.
- Được dẫn bóng bằng hai tay cùng lúc.
? Chiều cao vành rổ tiêu chuẩn là: | 3,05 m | 2,43 m | 2,5 m | 4 m
? Lỗi 3 giây trong bóng rổ là: | Cầu thủ tấn công đứng trong khu vực hạn chế quá 3 giây | Ném rổ trong 3 giây | Chuyền bóng 3 lần | Dẫn bóng 3 bước
+ Mỗi đội bóng rổ được thay người không hạn chế số lần.` }
  ],
  essays: {
    1: [['Trình bày cách xử lí ban đầu khi bị chấn thương phần mềm trong tập luyện.', ['chườm lạnh', 'băng ép', 'kê cao'], 'Ngừng tập, nghỉ ngơi; chườm lạnh 15–20 phút; băng ép vừa phải; kê cao chi bị thương; không xoa bóp, chườm nóng trong 24–48 giờ đầu; đến cơ sở y tế nếu đau nhiều.', 3],
      ['Nêu một số điều luật cơ bản của bóng đá 11 người.', ['11 người', '45 phút', 'thẻ'], 'Mỗi đội 11 người; 2 hiệp × 45 phút; bàn thắng khi bóng qua hết vạch cầu môn; phạt góc, phạt đền 11 m; việt vị; thẻ vàng cảnh cáo, thẻ đỏ truất quyền thi đấu.', 3]],
    2: [['Trình bày luật cơ bản của môn bóng chuyền.', ['6 người', '3 lần', '25 điểm'], 'Mỗi đội 6 người; chạm bóng tối đa 3 lần; một người không chạm 2 lần liên tiếp; ván 25 điểm (ván 5: 15 điểm), cách 2 điểm; thắng 3/5 ván; xoay vòng khi giành quyền phát.', 3],
      ['Phân biệt các cách tính điểm trong bóng rổ.', ['1 điểm', '2 điểm', '3 điểm'], 'Ném phạt thành công: 1 điểm; ném rổ trong vạch 3 điểm: 2 điểm; ném rổ từ ngoài vạch 3 điểm: 3 điểm.', 3]]
  }
});

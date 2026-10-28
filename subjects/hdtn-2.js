/* Hoạt động trải nghiệm 2 – KNTT. 9 chủ đề, 35 tuần theo mục lục SGK; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'hdtn-2', lop: 2, mon: 'Hoạt động trải nghiệm', icon: '🧭', so: false,
  topics: [
    { hk: 1, ten: 'Khám phá bản thân', bai: ['Tuần 1: Hình ảnh của em', 'Tuần 2: Nụ cười thân thiện', 'Tuần 3: Luyện tay cho khéo', 'Tuần 4: Khéo tay hay làm'],
      lt: ['Mỗi người có hình ảnh, điểm mạnh, sở thích riêng.', 'Nụ cười thân thiện giúp mọi người gần nhau hơn.', 'Rèn đôi tay khéo léo qua gấp, cắt, dán, làm đồ chơi.'],
      q: `? Nụ cười thân thiện giúp em: | Dễ kết bạn, mọi người vui vẻ | Bị bạn ghét | Mất bạn | Bị phạt
? Để đôi tay khéo léo hơn, em có thể: | Tập gấp giấy, cắt dán, làm đồ chơi | Chỉ xem ti vi | Không làm gì | Ngủ nhiều
+ Mỗi bạn đều có những điểm mạnh riêng.
- Chỉ những bạn học giỏi mới có điểm mạnh.
# Điểm mạnh: Vẽ đẹp, Hát hay, Chăm chỉ, Khéo tay
# Cần cố gắng: Hay quên đồ, Nói to trong lớp, Làm việc chậm` },
    { hk: 1, ten: 'Rèn nếp sống', bai: ['Tuần 5: Em sinh hoạt nền nếp', 'Tuần 6: Góc học tập của em', 'Tuần 7: Gọn gàng, ngăn nắp', 'Tuần 8: Em sắp xếp đồ dùng'],
      lt: ['Góc học tập: bàn ghế phù hợp, đủ ánh sáng, đồ dùng sắp xếp gọn gàng.', 'Gọn gàng, ngăn nắp: đồ dùng để đúng chỗ, dùng xong cất lại.'],
      q: `? Góc học tập tốt cần: | Đủ ánh sáng, gọn gàng, ngăn nắp | Tối, bừa bộn | Đặt cạnh ti vi | Nhiều đồ chơi trên bàn
? Học xong, em nên: | Cất sách vở vào cặp, xếp gọn bàn học | Để nguyên trên bàn | Ném xuống sàn | Để lên giường
+ Đồ dùng để đúng chỗ giúp em tìm nhanh hơn.
- Bàn học càng nhiều đồ chơi càng học tốt.` },
    { hk: 1, ten: 'Em yêu trường em', bai: ['Tuần 9: Có bạn thật vui', 'Tuần 10: Tìm sự trợ giúp để giữ gìn tình bạn', 'Tuần 11: Trường học hạnh phúc', 'Tuần 12: Biết ơn thầy cô'],
      lt: ['Có bạn giúp em vui hơn khi học tập, vui chơi.', 'Khi có mâu thuẫn với bạn: bình tĩnh, nói chuyện, nhờ thầy cô giúp đỡ.', 'Biết ơn thầy cô: chăm ngoan, học tốt, làm thiệp chúc mừng 20/11.'],
      q: `? Khi giận bạn, em nên: | Bình tĩnh, nói chuyện với bạn hoặc nhờ thầy cô giúp | Đánh bạn | Nói xấu bạn | Không bao giờ chơi với bạn nữa
? Trường học hạnh phúc là nơi: | Thầy cô, học sinh yêu thương, tôn trọng nhau | Bạn bè bắt nạt nhau | Không ai giúp ai | Ồn ào, mất trật tự
+ Làm thiệp tặng thầy cô ngày 20/11 thể hiện lòng biết ơn.
- Bạn bè giận nhau thì nên nghỉ chơi mãi mãi.` },
    { hk: 1, ten: 'Tự phục vụ bản thân', bai: ['Tuần 13: Em tự làm lấy việc của mình', 'Tuần 14: Nghĩ nhanh, làm giỏi', 'Tuần 15: Việc của mình không cần ai nhắc', 'Tuần 16: Lựa chọn trang phục', 'Tuần 17: Hành trang lên đường'],
      lt: ['Tự phục vụ: tự vệ sinh cá nhân, tự mặc quần áo, tự soạn sách vở.', 'Chọn trang phục phù hợp thời tiết, hoạt động (đi học, đi chơi, tập thể dục).', 'Chuẩn bị hành trang khi đi xa: quần áo, đồ dùng cá nhân, nước uống.'],
      q: `? Đi tập thể dục, em nên mặc: | Quần áo thể thao, giày thể thao | Váy dài | Áo dạ hội | Dép lê
? Trời lạnh, em nên chọn: | Áo khoác, khăn quàng | Áo cộc tay | Quần đùi | Áo mưa mỏng
? Tự phục vụ bản thân là: | Tự làm những việc của mình | Nhờ người khác làm hết | Chờ bố mẹ nhắc | Không làm gì
+ Việc của mình nên tự làm, không cần ai nhắc.
- Học sinh lớp 2 chưa cần tự soạn sách vở.
= Đi học = Đồng phục
= Tập thể dục = Quần áo thể thao
= Đi ngủ = Đồ ngủ
= Trời mưa = Áo mưa` },
    { hk: 2, ten: 'Gia đình thân thương', bai: ['Tuần 18: Người trong một nhà', 'Tuần 19: Tết Nguyên đán', 'Tuần 20: Ngày đáng nhớ của gia đình'],
      lt: ['Các thành viên trong gia đình yêu thương, quan tâm, giúp đỡ nhau.', 'Tết Nguyên đán: dọn nhà, gói bánh chưng, chúc Tết, mừng tuổi.', 'Ngày đáng nhớ: sinh nhật, ngày cưới của bố mẹ, ngày giỗ…'],
      q: `? Tết Nguyên đán còn gọi là: | Tết cổ truyền, Tết âm lịch | Tết Trung thu | Tết Dương lịch | Tết Thiếu nhi
? Ngày sinh nhật của mẹ, em có thể: | Làm thiệp, nói lời chúc mừng mẹ | Quên luôn | Đòi quà | Giận dỗi
+ Ngày đáng nhớ của gia đình là dịp mọi người quây quần bên nhau.
- Tết Nguyên đán diễn ra vào tháng 8 âm lịch.` },
    { hk: 2, ten: 'An toàn cho em', bai: ['Tuần 21: Tự chăm sóc sức khoẻ bản thân', 'Tuần 22: Những vật dụng bảo vệ em', 'Tuần 23: Câu chuyện lạc đường', 'Tuần 24: Phòng tránh bị bắt cóc'],
      lt: ['Tự chăm sóc sức khoẻ: ăn uống, ngủ nghỉ hợp lí, giữ ấm, vệ sinh.', 'Vật dụng bảo vệ: mũ bảo hiểm, khẩu trang, kem chống nắng, áo phao, áo mưa.', 'Khi bị lạc: bình tĩnh, nhờ công an, bảo vệ; nhớ địa chỉ, số điện thoại bố mẹ.', 'Phòng bắt cóc: không đi theo, không nhận quà của người lạ; kêu to, chạy đến nơi đông người.'],
      q: `? Đi thuyền, em cần mặc: | Áo phao | Áo len | Áo dài | Áo mưa
? Người lạ cho quà và rủ đi chơi, em nên: | Từ chối, chạy đến chỗ người lớn tin cậy | Nhận quà và đi theo | Đi theo một lúc | Giữ bí mật
? Để không bị lạc, em cần nhớ: | Địa chỉ nhà và số điện thoại bố mẹ | Tên con chó nhà hàng xóm | Màu xe buýt | Tên bài hát
+ Đội mũ bảo hiểm giúp bảo vệ đầu khi đi xe.
- Đi theo người lạ khi họ cho kẹo là lịch sự.
= Mũ bảo hiểm = Bảo vệ đầu khi đi xe
= Áo phao = Phòng đuối nước
= Khẩu trang = Phòng khói bụi
= Kem chống nắng = Bảo vệ da khi trời nắng` },
    { hk: 2, ten: 'Tham gia hoạt động cộng đồng', bai: ['Tuần 25: Những người bạn hàng xóm', 'Tuần 26: Tôi luôn bên bạn', 'Tuần 27: Chia sẻ khó khăn với người khác'],
      lt: ['Hàng xóm: chào hỏi, giúp đỡ, chơi đoàn kết với các bạn hàng xóm.', 'Chia sẻ khó khăn: quyên góp, động viên, giúp đỡ bạn ốm, bạn có hoàn cảnh khó khăn.'],
      q: `? Bạn hàng xóm bị ốm, em nên: | Đến thăm, hỏi han, động viên bạn | Trêu bạn | Không quan tâm | Kể xấu bạn
? Quyên góp sách vở cho bạn vùng lũ là việc: | Chia sẻ khó khăn với người khác | Lãng phí | Không cần thiết | Khoe khoang
+ Chia sẻ khó khăn giúp mọi người gần gũi hơn.
- Giúp đỡ người khác chỉ là việc của người lớn.` },
    { hk: 2, ten: 'Môi trường quanh em', bai: ['Tuần 28: Cảnh đẹp quê em', 'Tuần 29: Bảo vệ cảnh quan quê em', 'Tuần 30: Giữ gìn vệ sinh môi trường', 'Tuần 31: Lớp học xanh'],
      lt: ['Bảo vệ cảnh quan: không xả rác, không bẻ cây, không viết vẽ bậy.', 'Lớp học xanh: trồng cây trong lớp, giữ lớp sạch, tiết kiệm điện nước, phân loại rác.'],
      q: `? Lớp học xanh là lớp học: | Có cây xanh, sạch sẽ, tiết kiệm điện nước | Sơn màu xanh | Nhiều rác | Không có cửa sổ
? Ra khỏi lớp, em cần: | Tắt quạt, tắt đèn | Bật hết đèn | Mở vòi nước | Để rác trên bàn
+ Phân loại rác giúp tái chế, bảo vệ môi trường.
- Đổ rác xuống sông làm cảnh quan đẹp hơn.
# Rác tái chế: Chai nhựa, Giấy báo, Lon nhôm
# Rác hữu cơ: Vỏ trái cây, Lá cây khô, Thức ăn thừa` },
    { hk: 2, ten: 'Em tìm hiểu nghề nghiệp', bai: ['Tuần 32: Nghề của mẹ, nghề của cha', 'Tuần 33: Nghề nào tính nấy', 'Tuần 34: Lao động an toàn', 'Tuần 35: Đón mùa hè trải nghiệm'],
      lt: ['Mỗi nghề cần những đức tính phù hợp: bác sĩ cần tận tâm, giáo viên cần kiên nhẫn, thợ xây cần cẩn thận…', 'Lao động an toàn: dùng đồ bảo hộ (găng tay, mũ, khẩu trang), làm theo hướng dẫn.'],
      q: `? Nghề nào cần đức tính kiên nhẫn, yêu trẻ? | Giáo viên mầm non | Phi công | Thợ hàn | Lái tàu
? Khi làm vườn, để an toàn em nên: | Đeo găng tay, dùng dụng cụ cẩn thận | Dùng dao sắc nghịch | Đi chân đất giẫm gai | Cầm cuốc chạy
+ Nghề nào cũng đáng quý nếu mang lại lợi ích cho mọi người.
- Chỉ có nghề bác sĩ là có ích.
= Bác sĩ = Tận tâm, cẩn thận
= Giáo viên = Kiên nhẫn, yêu trẻ
= Lính cứu hoả = Dũng cảm, nhanh nhẹn
= Đầu bếp = Khéo léo, sạch sẽ` }
  ],
  essays: {
    1: [['Giới thiệu góc học tập của em (vị trí, đồ dùng, cách sắp xếp).', ['bàn', 'gọn gàng', 'sách'], 'Nêu góc học tập ở đâu, có bàn ghế, đèn, giá sách…; em sắp xếp sách vở, đồ dùng gọn gàng thế nào; em giữ góc học tập ra sao.'],
      ['Kể những việc em đã tự làm để phục vụ bản thân.', ['tự', 'soạn', 'gấp'], 'Tự đánh răng, rửa mặt, mặc quần áo, gấp chăn, soạn sách vở, chuẩn bị đồ dùng học tập.']],
    2: [['Em sẽ làm gì nếu có người lạ rủ đi theo?', ['từ chối', 'người lớn', 'kêu'], 'Kiên quyết từ chối, không nhận quà, chạy đến nơi đông người hoặc chỗ người lớn tin cậy, kêu to nếu bị kéo đi, kể lại với bố mẹ, thầy cô.'],
      ['Kể về nghề nghiệp của bố hoặc mẹ em.', ['nghề', 'bố', 'mẹ'], 'Nêu tên nghề, công việc hằng ngày, đức tính cần có, lợi ích của nghề, tình cảm của em.']]
  }
});

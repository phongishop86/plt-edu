/* Hoạt động trải nghiệm 1 – KNTT. Chủ đề, bài theo mục lục SGK; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'hdtn-1', lop: 1, mon: 'Hoạt động trải nghiệm', icon: '🧭',
  topics: [
    { hk: 1, ten: 'Chào năm học mới', bai: ['Làm quen với bạn mới', 'Những việc nên làm trong giờ học, giờ chơi'],
      lt: ['Làm quen: chào hỏi, giới thiệu tên, sở thích của mình và hỏi tên bạn.', 'Giờ học: ngồi ngay ngắn, chú ý nghe giảng, giơ tay phát biểu.', 'Giờ chơi: chơi trò chơi an toàn, đoàn kết, đi vệ sinh, uống nước.'],
      q: `? Khi làm quen với bạn mới, em nói: | Chào bạn, mình tên là…, còn bạn tên gì? | Này, tránh ra! | Không nói gì | Bạn xấu quá
? Trong giờ học, muốn phát biểu em cần: | Giơ tay xin phép | Đứng dậy nói to | Gọi to tên cô | Đập bàn
? Giờ ra chơi, em nên: | Chơi trò chơi an toàn cùng các bạn | Leo trèo lên cây | Xô đẩy bạn | Chạy ra cổng trường
+ Chào hỏi, giới thiệu bản thân giúp em có thêm bạn mới.
+ Giờ ra chơi là lúc em vui chơi, nghỉ ngơi, uống nước.
- Trong giờ học có thể nói chuyện riêng.
- Giờ chơi nên chơi những trò nguy hiểm cho vui.
# Giờ học: Chú ý nghe giảng, Giơ tay phát biểu, Ngồi ngay ngắn
# Giờ chơi: Nhảy dây, Đá cầu, Uống nước, Đi vệ sinh` },
    { hk: 1, ten: 'Em biết yêu thương', bai: ['Cảm xúc của em', 'Yêu thương con người'],
      lt: ['Cảm xúc: vui, buồn, sợ hãi, tức giận… Ai cũng có cảm xúc.', 'Thể hiện yêu thương: quan tâm, giúp đỡ, chia sẻ với mọi người.'],
      q: `? Khi được cô khen, em thường cảm thấy: | Vui vẻ | Tức giận | Sợ hãi | Buồn bã
? Bạn bị ngã, em nên: | Đỡ bạn dậy và hỏi han | Cười bạn | Bỏ đi | Trêu bạn
? Việc làm nào thể hiện yêu thương con người? | Chia sẻ đồ dùng với bạn khó khăn | Giành đồ của bạn | Chế giễu người khác | Không chào ai
+ Ai cũng có lúc vui, lúc buồn.
+ Giúp đỡ người khác làm em và mọi người vui hơn.
- Khi tức giận nên đánh bạn.
- Chỉ cần yêu thương người trong gia đình mình.
= Mỉm cười = Vui vẻ
= Khóc = Buồn
= Run rẩy = Sợ hãi
= Cau mày, đỏ mặt = Tức giận` },
    { hk: 1, ten: 'Truyền thống trường em', bai: ['Thân thiện với bạn bè', 'Thực hiện Năm điều Bác Hồ dạy', 'Kính yêu thầy cô'],
      lt: ['Thân thiện: vui vẻ, hoà nhã, giúp đỡ bạn bè.', '<b>Năm điều Bác Hồ dạy</b> thiếu niên, nhi đồng: Yêu Tổ quốc, yêu đồng bào; Học tập tốt, lao động tốt; Đoàn kết tốt, kỉ luật tốt; Giữ gìn vệ sinh thật tốt; Khiêm tốn, thật thà, dũng cảm.', 'Ngày 20/11 là Ngày Nhà giáo Việt Nam.'],
      q: `? Ngày Nhà giáo Việt Nam là ngày nào? | 20/11 | 1/6 | 2/9 | 8/3
? Đâu là một trong Năm điều Bác Hồ dạy? | Học tập tốt, lao động tốt | Ăn thật nhiều kẹo | Chơi điện tử thật giỏi | Ngủ thật muộn
? Để thể hiện lòng kính yêu thầy cô, em nên: | Chăm ngoan, học giỏi, lễ phép | Nói chuyện trong giờ | Không làm bài tập | Trêu bạn
+ Khiêm tốn, thật thà, dũng cảm là một trong Năm điều Bác Hồ dạy.
+ Làm thiệp tặng thầy cô ngày 20/11 là việc làm thể hiện lòng biết ơn.
- Năm điều Bác Hồ dạy chỉ dành cho người lớn.
- Thân thiện với bạn là hay trêu chọc bạn.
> Yêu Tổ quốc, yêu đồng bào > Học tập tốt, lao động tốt > Đoàn kết tốt, kỉ luật tốt > Giữ gìn vệ sinh thật tốt > Khiêm tốn, thật thà, dũng cảm
_ Ngày [20/11|20 tháng 11] là Ngày Nhà giáo Việt Nam.` },
    { hk: 1, ten: 'An toàn cho em', bai: ['An toàn khi vui chơi', 'Phòng tránh bị bắt nạt', 'Sử dụng an toàn đồ dùng trong gia đình'],
      lt: ['Vui chơi an toàn: không leo trèo, không chơi gần ao hồ, đường giao thông, ổ điện.', 'Khi bị bắt nạt: bình tĩnh, nói "Không", tránh xa và báo ngay cho thầy cô, bố mẹ.', 'Đồ dùng có thể gây nguy hiểm: dao, kéo, phích nước nóng, bàn là, ổ điện.'],
      q: `? Khi bị bạn bắt nạt, em nên: | Tránh xa và kể với thầy cô, bố mẹ | Đánh lại thật mạnh | Giữ im lặng mãi | Bắt nạt bạn khác
? Nơi nào KHÔNG an toàn để vui chơi? | Gần ao hồ, lòng đường | Sân trường | Công viên có người lớn | Phòng đọc sách
? Đồ dùng nào dễ gây bỏng? | Bàn là đang nóng | Gối ôm | Quyển truyện | Bút chì
+ Báo cho người lớn khi bị bắt nạt là việc làm đúng.
+ Chỉ dùng dao, kéo khi có người lớn hướng dẫn.
- Chơi đùa trên lòng đường rất an toàn.
- Bị bắt nạt thì nên giấu, không kể với ai.
# An toàn: Chơi ở sân trường, Nhảy dây, Đọc truyện, Xếp hình
# Không an toàn: Chơi gần ổ điện, Leo trèo cây cao, Đùa nghịch bên ao, Chơi dưới lòng đường` },
    { hk: 1, ten: 'Em quý trọng bản thân', bai: ['Chân dung của em', 'Giữ vệ sinh cá nhân', 'Ăn uống hợp lí', 'Sử dụng trang phục hằng ngày'],
      lt: ['Mỗi người có hình dáng, sở thích riêng; em yêu quý bản thân mình.', 'Giữ vệ sinh: rửa tay, đánh răng, tắm gội, cắt móng tay.', 'Ăn uống hợp lí: đủ bữa, đủ chất, nhiều rau quả, ít đồ ngọt, uống đủ nước.', 'Mặc trang phục phù hợp thời tiết và hoạt động.'],
      q: `? Bữa ăn hợp lí là: | Có cơm, rau, thịt hoặc cá, trứng, hoa quả | Chỉ ăn mì tôm | Chỉ uống nước ngọt | Ăn bánh kẹo thay cơm
? Trời lạnh, em mặc: | Áo ấm, khăn, tất | Áo cộc tay | Quần đùi | Đồ bơi
? Móng tay dài, bẩn, em nên: | Nhờ người lớn cắt ngắn, giữ sạch | Cắn móng tay | Để dài thêm | Không cần quan tâm
+ Ăn nhiều rau quả giúp cơ thể khỏe mạnh.
+ Đi học em mặc đồng phục gọn gàng, sạch sẽ.
- Uống nhiều nước ngọt có ga tốt hơn uống nước lọc.
- Đi học có thể mặc đồ ngủ.
# Nên ăn nhiều: Rau xanh, Hoa quả, Cá, Trứng
# Nên ăn ít: Kẹo, Nước ngọt, Đồ chiên rán, Bim bim` },
    { hk: 2, ten: 'Vui đón mùa xuân', bai: ['Sắp xếp nhà cửa gọn gàng để đón Tết', 'Ứng xử khi được nhận quà ngày Tết'],
      lt: ['Trước Tết: cùng gia đình dọn dẹp, trang trí nhà cửa.', 'Khi nhận quà, lì xì: nhận bằng hai tay, nói lời cảm ơn, chúc người tặng.'],
      q: `? Khi được ông bà lì xì, em nên: | Nhận bằng hai tay và nói lời cảm ơn, chúc Tết | Giật lấy | Mở ra xem ngay và chê ít | Không nói gì
? Trước Tết, em có thể giúp gia đình: | Lau bàn ghế, sắp xếp đồ đạc gọn gàng | Bày bừa đồ chơi | Chỉ xem ti vi | Vẽ lên tường
+ Chúc Tết ông bà, cha mẹ là truyền thống tốt đẹp.
- Chê quà người khác tặng là lịch sự.
> Nhận quà bằng hai tay > Nói lời cảm ơn > Chúc người tặng năm mới vui vẻ` },
    { hk: 2, ten: 'Tham gia hoạt động cộng đồng', bai: ['Hàng xóm nhà em', 'Em tham gia các hoạt động xã hội'],
      lt: ['Hàng xóm: chào hỏi lễ phép, giúp đỡ nhau, không làm ồn.', 'Hoạt động xã hội: quyên góp sách vở, quần áo cho bạn khó khăn; dọn vệ sinh ngõ xóm.'],
      q: `? Gặp bác hàng xóm, em nên: | Lễ phép chào hỏi | Lờ đi | Trêu chọc | Chạy trốn
? Hoạt động nào giúp đỡ bạn ở vùng khó khăn? | Quyên góp sách vở, quần áo | Vứt sách cũ đi | Giữ hết cho mình | Mua thêm đồ chơi
+ Hàng xóm tối lửa tắt đèn có nhau, cần giúp đỡ nhau.
- Bật nhạc thật to buổi trưa là tôn trọng hàng xóm.
= Quyên góp quần áo = Giúp người có hoàn cảnh khó khăn
= Dọn rác ngõ xóm = Giữ gìn vệ sinh chung
= Chào hỏi hàng xóm = Lễ phép, thân thiện` },
    { hk: 2, ten: 'Quê hương tươi đẹp', bai: ['Thiên nhiên tươi đẹp quê em', 'Em bảo vệ cảnh quan thiên nhiên'],
      lt: ['Quê hương có cánh đồng, dòng sông, núi đồi, bãi biển… đẹp và đáng yêu.', 'Bảo vệ cảnh quan: không xả rác, không bẻ cây hái hoa, không viết vẽ bậy.'],
      q: `? Việc làm nào bảo vệ cảnh quan thiên nhiên? | Không xả rác nơi công cộng | Bẻ cành cây | Viết tên lên di tích | Vứt rác xuống sông
? Đi tham quan, ăn xong em bỏ rác vào: | Thùng rác | Bãi cỏ | Hồ nước | Gốc cây
+ Trồng cây xanh giúp quê hương thêm đẹp.
- Hái hoa ở công viên là bảo vệ thiên nhiên.` },
    { hk: 2, ten: 'Em bảo vệ môi trường', bai: ['Giữ gìn môi trường sạch, đẹp'],
      lt: ['Giữ môi trường sạch: bỏ rác đúng nơi, phân loại rác, tiết kiệm nước, điện; trồng và chăm sóc cây.'],
      q: `? Để tiết kiệm nước, em nên: | Khoá vòi nước sau khi dùng | Để vòi chảy mãi | Nghịch nước | Tắm thật lâu
? Ra khỏi phòng, em nên: | Tắt đèn, quạt | Để đèn sáng | Bật thêm ti vi | Mở hết cửa sổ
+ Phân loại rác giúp bảo vệ môi trường.
+ Trồng cây xanh giúp không khí trong lành.
- Vứt rác xuống ao hồ không ảnh hưởng gì.
# Rác tái chế được: Vỏ chai nhựa, Giấy báo cũ, Lon nhôm
# Rác hữu cơ: Vỏ chuối, Rau thừa, Lá cây` }
  ],
  essays: {
    1: [['Kể về một người bạn mới của em (tên, sở thích, em thích bạn ở điểm nào).', ['bạn', 'tên', 'thích'], 'Giới thiệu tên bạn, sở thích của bạn, điều em quý ở bạn, em và bạn thường làm gì cùng nhau.'],
      ['Khi bị bắt nạt, em sẽ làm gì?', ['tránh', 'thầy cô', 'bố mẹ'], 'Giữ bình tĩnh, nói "Không", tránh xa và báo ngay với thầy cô, bố mẹ hoặc người lớn tin cậy.']],
    2: [['Kể những việc em đã làm để giúp gia đình chuẩn bị đón Tết.', ['dọn', 'Tết', 'giúp'], 'Ví dụ: lau bàn ghế, sắp xếp đồ chơi, trang trí nhà, cùng gia đình gói bánh, đi chợ hoa.'],
      ['Em làm gì để giữ gìn môi trường sạch đẹp?', ['rác', 'cây', 'tiết kiệm'], 'Bỏ rác đúng nơi quy định, phân loại rác, trồng và chăm sóc cây, tiết kiệm điện nước.']]
  }
});

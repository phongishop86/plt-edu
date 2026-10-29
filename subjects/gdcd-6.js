/* Giáo dục công dân 6 – KNTT. Bài theo mục lục SGK; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'gdcd-6', lop: 6, mon: 'Giáo dục công dân', icon: '⚖️', nhan: 'Bài',
  topics: [
    { hk: 1, ten: 'Tự hào về truyền thống gia đình, dòng họ', bai: ['Tự hào về truyền thống gia đình, dòng họ'],
      lt: ['Truyền thống gia đình, dòng họ: những giá trị tốt đẹp được lưu giữ, truyền từ đời này sang đời khác (hiếu học, nghề truyền thống, yêu nước…).', 'Giữ gìn, phát huy: tìm hiểu, trân trọng, học tập tốt, không làm điều gì tổn hại danh dự gia đình.'],
      q: `? Truyền thống tốt đẹp của gia đình, dòng họ là: | Những giá trị tốt đẹp được truyền qua nhiều thế hệ | Thói quen xấu | Của cải vật chất | Tên gọi của dòng họ
? Việc làm thể hiện phát huy truyền thống hiếu học của gia đình: | Chăm chỉ học tập, đạt kết quả tốt | Bỏ học đi chơi | Chép bài của bạn | Khoe khoang thành tích của ông bà
+ Mỗi người cần biết ơn, tự hào về truyền thống gia đình, dòng họ.
- Tự hào về truyền thống là coi thường gia đình người khác.` },
    { hk: 1, ten: 'Yêu thương con người', bai: ['Yêu thương con người'],
      lt: ['Yêu thương con người: quan tâm, giúp đỡ, chia sẻ, làm điều tốt đẹp cho người khác, nhất là người gặp khó khăn.', 'Trái với yêu thương: thờ ơ, vô cảm, ích kỉ, độc ác.'],
      q: `? Câu tục ngữ thể hiện lòng yêu thương con người là: | Lá lành đùm lá rách | Ăn cháo đá bát | Nước đổ đầu vịt | Đứng núi này trông núi nọ
? Trái với yêu thương con người là: | Vô cảm, thờ ơ trước nỗi đau của người khác | Chia sẻ với người khó khăn | Quan tâm hàng xóm | Giúp đỡ bạn học kém
+ Yêu thương con người là truyền thống quý báu của dân tộc.
- Giúp đỡ người khác là việc làm vô ích.` },
    { hk: 1, ten: 'Siêng năng, kiên trì', bai: ['Siêng năng, kiên trì'],
      lt: ['<b>Siêng năng</b>: cần cù, tự giác, miệt mài làm việc thường xuyên. <b>Kiên trì</b>: quyết tâm làm đến cùng dù gặp khó khăn.', 'Trái với: lười biếng, ngại khó, nản chí.'],
      q: `? Câu tục ngữ nói về kiên trì là: | Có công mài sắt, có ngày nên kim | Ăn quả nhớ kẻ trồng cây | Uống nước nhớ nguồn | Tốt gỗ hơn tốt nước sơn
? Biểu hiện của siêng năng là: | Tự giác học bài, làm việc nhà hằng ngày | Ngủ nướng | Học đối phó | Nhờ người khác làm hộ
+ Siêng năng, kiên trì giúp con người thành công.
- Gặp bài khó thì nên bỏ qua để đỡ mất thời gian.` },
    { hk: 1, ten: 'Tôn trọng sự thật', bai: ['Tôn trọng sự thật'],
      lt: ['Tôn trọng sự thật: luôn nói đúng sự thật, suy nghĩ, hành động theo lẽ phải; không nói sai sự thật, không bao che cái sai.'],
      q: `? Biểu hiện tôn trọng sự thật là: | Dũng cảm nhận lỗi khi làm sai | Đổ lỗi cho bạn | Nói dối thầy cô | Bịa chuyện
? Thấy bạn quay cóp, em nên: | Nhắc nhở bạn trung thực | Che giấu cho bạn | Quay cóp theo | Cười
+ Người tôn trọng sự thật được mọi người tin tưởng.
- Nói dối để được khen là việc làm đúng.` },
    { hk: 1, ten: 'Tự lập', bai: ['Tự lập'],
      lt: ['Tự lập: tự làm lấy, tự giải quyết công việc của mình, không trông chờ, dựa dẫm vào người khác.'],
      q: `? Biểu hiện của tính tự lập là: | Tự giác học bài, tự chuẩn bị đồ dùng | Nhờ mẹ soạn sách vở | Chờ bạn nhắc mới làm bài | Chép lời giải của bạn
? Trái với tự lập là: | Dựa dẫm, ỷ lại | Tự tin | Siêng năng | Kiên trì
+ Tự lập giúp con người tự tin, trưởng thành.
- Học sinh lớp 6 chưa cần tự lập.` },
    { hk: 1, ten: 'Tự nhận thức bản thân', bai: ['Tự nhận thức bản thân'],
      lt: ['Tự nhận thức bản thân: tự nhận biết, đánh giá đúng về bản thân (điểm mạnh, điểm yếu, sở thích, giá trị).', 'Cách tự nhận thức: tự quan sát, lắng nghe nhận xét của người khác, so sánh với tiêu chí đúng.'],
      q: `? Tự nhận thức bản thân giúp em: | Phát huy điểm mạnh, khắc phục điểm yếu | Tự cao tự đại | Tự ti | Đổ lỗi
+ Lắng nghe góp ý của người khác giúp em hiểu mình hơn.
- Người tự nhận thức tốt luôn cho mình hoàn hảo.` },
    { hk: 2, ten: 'Ứng phó với tình huống nguy hiểm', bai: ['Ứng phó với tình huống nguy hiểm'],
      lt: ['Tình huống nguy hiểm từ con người (bắt cóc, xâm hại, trộm cướp) và từ tự nhiên (đuối nước, cháy nổ, thiên tai, sét đánh).', 'Ứng phó: bình tĩnh, tìm nơi an toàn, kêu cứu, gọi số khẩn cấp: <b>113</b> (công an), <b>114</b> (cứu hoả), <b>115</b> (cấp cứu), <b>111</b> (bảo vệ trẻ em).'],
      q: `? Số điện thoại cứu hoả là: | 114 | 113 | 115 | 111
? Số điện thoại cấp cứu y tế là: | 115 | 113 | 114 | 116
? Khi có giông sét ngoài trời, em nên: | Tránh xa cây cao, cột điện, tìm nơi trú an toàn | Đứng dưới gốc cây | Tắm sông | Cầm vật kim loại giơ lên
+ Gặp nguy hiểm cần bình tĩnh và tìm sự trợ giúp.
- Khi bị bắt cóc nên im lặng làm theo kẻ xấu mãi.
= 113 = Công an
= 114 = Cứu hoả
= 115 = Cấp cứu
= 111 = Bảo vệ trẻ em` },
    { hk: 2, ten: 'Tiết kiệm', bai: ['Tiết kiệm'],
      lt: ['Tiết kiệm: sử dụng hợp lí, đúng mức của cải, thời gian, sức lực của mình và của người khác.', 'Trái với tiết kiệm: lãng phí, xa hoa; cũng khác với keo kiệt, bủn xỉn.'],
      q: `? Câu tục ngữ nói về tiết kiệm là: | Tích tiểu thành đại | Ăn cây nào rào cây ấy | Nói chín thì nên làm mười | Gần mực thì đen
? Biểu hiện của tiết kiệm là: | Tắt điện khi ra khỏi phòng | Để vòi nước chảy | Mua sắm theo sở thích | Bỏ thừa thức ăn
+ Tiết kiệm thời gian cũng là một biểu hiện của tiết kiệm.
- Tiết kiệm là keo kiệt, không dám tiêu tiền vào việc cần thiết.` },
    { hk: 2, ten: 'Công dân nước Cộng hoà xã hội chủ nghĩa Việt Nam', bai: ['Công dân nước Cộng hoà xã hội chủ nghĩa Việt Nam'],
      lt: ['<b>Công dân</b> là người dân của một nước. Căn cứ xác định công dân Việt Nam là <b>quốc tịch Việt Nam</b>.', 'Công dân Việt Nam có quyền và nghĩa vụ theo Hiến pháp và pháp luật.'],
      q: `? Căn cứ để xác định công dân của một nước là: | Quốc tịch | Nơi sinh sống | Màu da | Ngôn ngữ
? Trẻ em sinh ra có cha mẹ đều là công dân Việt Nam thì: | Là công dân Việt Nam | Không có quốc tịch | Là người nước ngoài | Tự chọn quốc tịch khi 5 tuổi
+ Mọi công dân đều bình đẳng trước pháp luật.
- Người nước ngoài sống ở Việt Nam đương nhiên là công dân Việt Nam.` },
    { hk: 2, ten: 'Quyền và nghĩa vụ cơ bản của công dân', bai: ['Quyền và nghĩa vụ cơ bản của công dân'],
      lt: ['Quyền cơ bản: bình đẳng trước pháp luật, quyền sống, bất khả xâm phạm về thân thể, tự do ngôn luận, học tập, lao động…', 'Nghĩa vụ: tuân theo Hiến pháp, pháp luật; bảo vệ Tổ quốc; nộp thuế; bảo vệ môi trường.', 'Hiến pháp là luật cơ bản có hiệu lực pháp lí cao nhất.'],
      q: `? Văn bản có hiệu lực pháp lí cao nhất ở nước ta là: | Hiến pháp | Luật Giáo dục | Nội quy nhà trường | Quyết định của địa phương
? Đâu là nghĩa vụ cơ bản của công dân? | Bảo vệ Tổ quốc | Tự do kinh doanh mọi thứ | Không đóng thuế | Xả rác tuỳ ý
+ Học tập vừa là quyền vừa là nghĩa vụ của công dân.
- Công dân chỉ có quyền mà không có nghĩa vụ.` },
    { hk: 2, ten: 'Quyền cơ bản của trẻ em', bai: ['Quyền cơ bản của trẻ em'],
      lt: ['Trẻ em: người dưới 16 tuổi (Luật Trẻ em 2016).', 'Nhóm quyền: <b>sống còn</b>, <b>bảo vệ</b>, <b>phát triển</b>, <b>tham gia</b>.'],
      q: `? Theo Luật Trẻ em 2016, trẻ em là người: | Dưới 16 tuổi | Dưới 18 tuổi | Dưới 14 tuổi | Dưới 12 tuổi
? Quyền được học tập, vui chơi giải trí thuộc nhóm quyền: | Phát triển | Bảo vệ | Tham gia | Sống còn
? Quyền được khai sinh, chăm sóc sức khoẻ thuộc nhóm quyền: | Sống còn | Tham gia | Phát triển | Bảo vệ
? Quyền được bày tỏ ý kiến thuộc nhóm quyền: | Tham gia | Sống còn | Bảo vệ | Phát triển
+ Trẻ em có quyền được bảo vệ khỏi mọi hình thức bạo lực, xâm hại.
- Trẻ em không có quyền bày tỏ ý kiến.
= Được khai sinh = Quyền sống còn
= Được bảo vệ khỏi bạo lực = Quyền bảo vệ
= Được học tập = Quyền phát triển
= Được bày tỏ ý kiến = Quyền tham gia` },
    { hk: 2, ten: 'Thực hiện quyền trẻ em', bai: ['Thực hiện quyền trẻ em'],
      lt: ['Gia đình, nhà trường, xã hội có trách nhiệm bảo đảm quyền trẻ em.', 'Trẻ em có bổn phận: kính trọng ông bà cha mẹ, chăm học, tuân thủ pháp luật; cần biết tự bảo vệ quyền của mình.'],
      q: `? Ai có trách nhiệm thực hiện quyền trẻ em? | Gia đình, nhà trường và xã hội | Chỉ trẻ em | Chỉ nhà trường | Chỉ cha mẹ
? Khi quyền trẻ em bị xâm phạm, em có thể gọi tổng đài: | 111 | 113 | 1080 | 116
+ Trẻ em cần thực hiện tốt bổn phận của mình.
- Cha mẹ có quyền bắt con bỏ học đi làm.` }
  ],
  essays: {
    1: [['Thế nào là siêng năng, kiên trì? Nêu ý nghĩa và cách rèn luyện của học sinh.', ['siêng năng', 'kiên trì', 'rèn luyện'], 'Siêng năng là cần cù, tự giác, miệt mài; kiên trì là quyết tâm làm đến cùng. Ý nghĩa: giúp thành công. Rèn luyện: học bài đều đặn, không nản khi gặp bài khó, lập kế hoạch và thực hiện.'],
      ['Em sẽ làm gì để thể hiện tình yêu thương con người trong cuộc sống hằng ngày?', ['giúp đỡ', 'chia sẻ', 'quan tâm'], 'Quan tâm, hỏi han người thân, bạn bè; giúp đỡ người già, người khuyết tật; quyên góp ủng hộ vùng khó khăn; không vô cảm, trêu chọc người khác.']],
    2: [['Nêu bốn nhóm quyền cơ bản của trẻ em, mỗi nhóm cho một ví dụ.', ['sống còn', 'bảo vệ', 'phát triển', 'tham gia'], 'Sống còn (được khai sinh, chăm sóc sức khoẻ); bảo vệ (không bị bạo lực, xâm hại); phát triển (học tập, vui chơi); tham gia (bày tỏ ý kiến).'],
      ['Khi gặp tình huống có cháy ở nơi đông người, em sẽ ứng phó như thế nào?', ['bình tĩnh', '114', 'thoát'], 'Bình tĩnh, hô hoán; gọi 114; che mũi miệng bằng khăn ướt, cúi thấp người, theo lối thoát hiểm; không dùng thang máy; nghe hướng dẫn của lực lượng chức năng.']]
  }
});

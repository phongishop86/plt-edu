/* Hoạt động trải nghiệm 3 – KNTT. Các chủ đề theo chương trình; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'hdtn-3', lop: 3, mon: 'Hoạt động trải nghiệm', icon: '🧭', so: false,
  topics: [
    { hk: 1, ten: 'Trường học thân thiện', bai: ['Tuần 1: Chào năm học mới', 'Tuần 2: Nụ cười thân thiện', 'Tuần 3: Hoạt động nhóm', 'Tuần 4: Lớp học thân thiện'],
      lt: ['Thân thiện: vui vẻ, cởi mở, giúp đỡ bạn bè, thầy cô.', 'Hoạt động nhóm: lắng nghe, chia sẻ, phân công công việc, hoàn thành phần việc của mình.'],
      q: `? Khi làm việc nhóm, em nên: | Lắng nghe ý kiến các bạn và làm tốt phần việc của mình | Áp đặt ý mình | Ngồi chơi | Cãi nhau
? Biểu hiện của lớp học thân thiện là: | Các bạn đoàn kết, giúp đỡ nhau | Hay trêu chọc nhau | Chia bè phái | Không nói chuyện với nhau
+ Nụ cười giúp mọi người gần gũi hơn.
- Làm việc nhóm thì chỉ cần bạn giỏi nhất làm.
> Nhận nhiệm vụ > Phân công công việc > Cùng thực hiện > Trình bày kết quả` },
    { hk: 1, ten: 'Khám phá bản thân', bai: ['Tuần 5: Những nét riêng của em', 'Tuần 6: Sở thích và khả năng', 'Tuần 7: Cảm xúc của em', 'Tuần 8: Điều chỉnh cảm xúc'],
      lt: ['Mỗi người có ngoại hình, tính cách, sở thích, khả năng riêng.', 'Điều chỉnh cảm xúc tiêu cực: hít thở sâu, đếm, làm việc mình thích, chia sẻ.'],
      q: `? Khi buồn, em có thể: | Chia sẻ với người thân, bạn bè | Đập phá đồ đạc | Bỏ ăn | Giận dỗi mọi người
? Sở thích là: | Những việc em thích làm | Những việc em sợ | Tên của em | Lớp học của em
+ Biết rõ sở thích giúp em phát triển khả năng.
- Ai cũng giống hệt nhau về sở thích.` },
    { hk: 1, ten: 'Truyền thống quê hương và nhà trường', bai: ['Tuần 9: Truyền thống nhà trường', 'Tuần 10: Biết ơn thầy cô', 'Tuần 11: Lễ hội quê em', 'Tuần 12: Nghề truyền thống quê em'],
      lt: ['Tìm hiểu truyền thống trường, tri ân thầy cô 20/11.', 'Quê hương có lễ hội, nghề truyền thống (gốm, dệt, mây tre đan…), cần tự hào và giữ gìn.'],
      q: `? Ngày 20/11 là ngày: | Nhà giáo Việt Nam | Quốc tế Thiếu nhi | Quốc khánh | Giải phóng miền Nam
? Nghề nào là nghề truyền thống? | Làm gốm | Lập trình máy tính | Lái máy bay | Bán điện thoại
+ Giới thiệu nghề truyền thống quê em là thể hiện niềm tự hào quê hương.
- Lễ hội truyền thống không cần giữ gìn.` },
    { hk: 1, ten: 'An toàn trong cuộc sống', bai: ['Tuần 13: An toàn khi ở nhà', 'Tuần 14: An toàn khi đi đường', 'Tuần 15: Phòng tránh xâm hại', 'Tuần 16: Ứng phó khi gặp nguy hiểm', 'Tuần 17: Tổng kết học kì I'],
      lt: ['An toàn ở nhà: điện, lửa, đồ sắc nhọn, hoá chất.', 'An toàn đi đường: đi bên phải, qua đường đúng nơi, đội mũ bảo hiểm.', 'Phòng xâm hại: không để ai chạm vào vùng riêng tư; nói "Không", chạy đi, kể với người tin cậy; gọi <b>111</b> (Tổng đài bảo vệ trẻ em).'],
      q: `? Tổng đài quốc gia bảo vệ trẻ em là: | 111 | 113 | 114 | 115
? Khi có người lạ đến nhà lúc bố mẹ vắng, em nên: | Không mở cửa, gọi điện cho bố mẹ | Mở cửa mời vào | Nói nhà không có ai lớn | Đi theo họ
+ Nói "Không" và kể với người lớn tin cậy khi bị đụng chạm không an toàn.
- Giữ bí mật khi bị người khác bắt nạt, đe doạ.
= 111 = Tổng đài bảo vệ trẻ em
= 113 = Công an
= 114 = Cứu hoả
= 115 = Cấp cứu` },
    { hk: 2, ten: 'Gia đình yêu thương', bai: ['Tuần 18: Gia đình của em', 'Tuần 19: Tết sum vầy', 'Tuần 20: Việc nhà em làm', 'Tuần 21: Chi tiêu tiết kiệm'],
      lt: ['Yêu thương, quan tâm, giúp đỡ người thân; làm việc nhà vừa sức.', 'Chi tiêu tiết kiệm: mua những thứ cần thiết, không lãng phí, để dành tiền tiết kiệm.'],
      q: `? Chi tiêu tiết kiệm là: | Chỉ mua những thứ cần thiết | Mua mọi thứ mình thích | Tiêu hết tiền ngay | Vay tiền bạn để mua đồ chơi
? Việc nhà vừa sức với học sinh lớp 3 là: | Quét nhà, gấp quần áo, rửa bát | Sửa điện | Lái xe | Leo mái nhà
+ Nuôi lợn đất là cách tiết kiệm tiền.
- Tiền lì xì nên tiêu hết ngay vào đồ chơi.
# Cần thiết: Sách vở, Bút, Áo đồng phục
# Có thể chưa cần: Đồ chơi đắt tiền, Kẹo, Nước ngọt` },
    { hk: 2, ten: 'Cộng đồng quanh em', bai: ['Tuần 22: Những người hàng xóm', 'Tuần 23: Chia sẻ, giúp đỡ người khó khăn', 'Tuần 24: Hoạt động tình nguyện', 'Tuần 25: Ứng xử nơi công cộng', 'Tuần 26: Văn minh nơi công cộng'],
      lt: ['Giúp đỡ người già, người khuyết tật, người gặp khó khăn.', 'Ứng xử văn minh nơi công cộng: xếp hàng, nói nhỏ, giữ vệ sinh, nhường chỗ.'],
      q: `? Trên xe buýt, gặp cụ già không có chỗ ngồi, em nên: | Nhường chỗ cho cụ | Giả vờ ngủ | Đứng chắn lối | Nói to
? Ở rạp chiếu phim, em nên: | Giữ trật tự, tắt chuông điện thoại | Nói chuyện to | Chạy nhảy | Ném vỏ bỏng ra sàn
+ Hoạt động tình nguyện giúp ích cho cộng đồng.
- Nơi công cộng có thể xả rác vì có người dọn.` },
    { hk: 2, ten: 'Bảo vệ môi trường', bai: ['Tuần 27: Thiên nhiên quanh em', 'Tuần 28: Tiết kiệm điện, nước', 'Tuần 29: Phân loại rác', 'Tuần 30: Trồng và chăm sóc cây'],
      lt: ['Tiết kiệm điện: tắt đèn, quạt khi ra khỏi phòng. Tiết kiệm nước: khoá vòi khi đánh răng.', 'Phân loại rác: hữu cơ (vỏ rau quả), tái chế (giấy, nhựa, kim loại), rác khác.'],
      q: `? Khi đánh răng, để tiết kiệm nước em nên: | Khoá vòi khi chải răng | Để vòi chảy suốt | Dùng thật nhiều nước | Mở vòi to
? Vỏ chai nhựa thuộc nhóm rác: | Tái chế | Hữu cơ | Nguy hại | Không phân loại được
+ Trồng cây xanh giúp không khí trong lành.
- Đốt rác thải nhựa là bảo vệ môi trường.
# Rác hữu cơ: Vỏ chuối, Lá rau, Bã chè
# Rác tái chế: Giấy báo, Chai nhựa, Lon nước ngọt` },
    { hk: 2, ten: 'Nghề nghiệp quanh em', bai: ['Tuần 31: Nghề em biết', 'Tuần 32: Phẩm chất người lao động', 'Tuần 33: Ước mơ nghề nghiệp', 'Tuần 34: Lao động an toàn', 'Tuần 35: Tổng kết năm học'],
      lt: ['Mỗi nghề có công việc, dụng cụ, phẩm chất cần có riêng.', 'Người lao động cần chăm chỉ, trách nhiệm, an toàn lao động.'],
      q: `? Dụng cụ của nghề y tá, bác sĩ là: | Ống nghe, nhiệt kế | Cày, cuốc | Phấn, bảng | Bay, thước xây
? Người nông dân thường dùng: | Cày, cuốc, liềm | Ống nghe | Kéo cắt tóc | Máy khoan nha khoa
+ Mọi nghề nghiệp chân chính đều đáng tôn trọng.
- Chỉ những nghề kiếm nhiều tiền mới đáng quý.
= Thợ xây = Bay, bàn xoa, thước
= Thợ may = Máy may, kéo, thước dây
= Giáo viên = Sách, phấn, bảng
= Nông dân = Cày, cuốc, liềm` }
  ],
  essays: {
    1: [['Kể về một sở thích hoặc khả năng đặc biệt của em.', ['thích', 'em'], 'Nêu sở thích/khả năng, em bắt đầu từ khi nào, em đã rèn luyện ra sao, điều đó giúp ích gì cho em.'],
      ['Em làm gì để giữ an toàn khi ở nhà một mình?', ['không mở cửa', 'điện', 'gọi'], 'Không mở cửa cho người lạ; không nghịch điện, lửa, đồ sắc nhọn; nhớ số điện thoại bố mẹ và các số khẩn cấp; gọi người lớn khi có việc bất thường.']],
    2: [['Kể những việc em làm để tiết kiệm điện, nước ở nhà.', ['tắt', 'khoá vòi', 'tiết kiệm'], 'Tắt đèn, quạt, ti vi khi không dùng; khoá vòi khi đánh răng, rửa tay; dùng nước vo gạo tưới cây…'],
      ['Ước mơ nghề nghiệp của em là gì? Vì sao?', ['nghề', 'ước mơ', 'vì'], 'Nêu nghề em mơ ước, công việc của nghề, phẩm chất cần có, lí do em thích, em sẽ cố gắng như thế nào.']]
  }
});

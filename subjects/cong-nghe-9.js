/* Công nghệ 9 – KNTT: Định hướng nghề nghiệp và các mô-đun Trải nghiệm nghề nghiệp. Câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'cong-nghe-9', lop: 9, mon: 'Công nghệ', icon: '🛠️', nhan: 'Phần', so: false,
  topics: [
    { hk: 1, nhan: 'Định hướng nghề nghiệp', ten: 'Nghề nghiệp và hệ thống giáo dục', bai: ['Bài 1. Nghề nghiệp trong lĩnh vực kĩ thuật và công nghệ', 'Bài 2. Cơ cấu hệ thống giáo dục quốc dân'],
      lt: ['Nghề nghiệp: tập hợp công việc được xã hội công nhận, đòi hỏi kiến thức, kĩ năng nhất định; mang lại thu nhập.', 'Nghề kĩ thuật, công nghệ: kĩ sư cơ khí, điện, xây dựng, kĩ thuật viên, thợ lành nghề…', 'Hệ thống giáo dục quốc dân: mầm non, phổ thông (tiểu học, THCS, THPT), giáo dục nghề nghiệp (sơ cấp, trung cấp, cao đẳng), đại học (đại học, thạc sĩ, tiến sĩ).', 'Sau THCS: học THPT hoặc trung cấp nghề (có thể học văn hoá song song).'],
      q: `? Sau khi tốt nghiệp THCS, học sinh có thể: | Học THPT hoặc học trung cấp nghề | Chỉ được học THPT | Chỉ được đi làm | Học thẳng lên đại học
? Giáo dục nghề nghiệp gồm các trình độ: | Sơ cấp, trung cấp, cao đẳng | Tiểu học, THCS, THPT | Thạc sĩ, tiến sĩ | Mầm non, mẫu giáo
? Nghề nào thuộc lĩnh vực kĩ thuật, công nghệ? | Kĩ sư điện | Giáo viên văn | Ca sĩ | Hướng dẫn viên du lịch
+ Học trung cấp nghề cũng là con đường lập nghiệp tốt.
- Giáo dục đại học thuộc giáo dục phổ thông.
> Mầm non > Tiểu học > Trung học cơ sở > Trung học phổ thông > Đại học` },
    { hk: 1, nhan: 'Định hướng nghề nghiệp', ten: 'Thị trường lao động và lựa chọn nghề', bai: ['Bài 3. Thị trường lao động kĩ thuật, công nghệ tại Việt Nam', 'Bài 4. Quy trình lựa chọn nghề nghiệp', 'Bài 5. Dự án: Tự đánh giá mức độ phù hợp của bản thân với một số ngành nghề'],
      lt: ['Thị trường lao động: nơi cung – cầu lao động gặp nhau; xu hướng nhu cầu cao về nhân lực kĩ thuật, công nghệ, có kĩ năng số.', 'Lựa chọn nghề dựa trên lí thuyết <b>cây nghề nghiệp</b>, mô hình <b>Holland</b>: sở thích, năng lực, tính cách, giá trị, nhu cầu xã hội, điều kiện gia đình.', 'Quy trình: tìm hiểu bản thân → tìm hiểu nghề → tìm hiểu thị trường lao động → ra quyết định → lập kế hoạch học tập.'],
      q: `? Khi chọn nghề, yếu tố quan trọng cần xem xét là: | Sở thích, năng lực bản thân và nhu cầu xã hội | Chỉ theo bạn bè | Chỉ chọn nghề lương cao | Chọn ngẫu nhiên
? Thị trường lao động là nơi: | Cung và cầu lao động gặp nhau | Chỉ có người tìm việc | Chỉ có doanh nghiệp | Bán hàng hoá thông thường
+ Nhu cầu nhân lực kĩ thuật, công nghệ ở Việt Nam ngày càng tăng.
- Chọn nghề chỉ cần dựa vào mức lương.
> Tìm hiểu bản thân > Tìm hiểu nghề nghiệp > Tìm hiểu thị trường lao động > Ra quyết định > Lập kế hoạch học tập` },
    { hk: 2, nhan: 'Mô-đun', ten: 'Lắp đặt mạng điện trong nhà', bai: ['Thiết bị, vật liệu, dụng cụ lắp đặt mạng điện', 'Thiết kế mạch điện', 'Lắp đặt mạch điện chiếu sáng', 'Kiểm tra, an toàn mạng điện'],
      lt: ['Vật liệu: dây dẫn (lõi đồng/nhôm, vỏ cách điện), ống luồn dây; thiết bị: công tắc, ổ cắm, cầu chì, aptomat, công tơ điện.', 'Dụng cụ: kìm, tua vít, bút thử điện, đồng hồ vạn năng, khoan.', 'Sơ đồ nguyên lí (mối liên hệ điện) và sơ đồ lắp đặt (vị trí, cách lắp). Công tắc mắc nối tiếp với tải trên dây pha.', 'An toàn: cắt điện trước khi lắp; dùng dụng cụ cách điện; kiểm tra bằng đồng hồ vạn năng trước khi đóng điện.'],
      q: `? Công tắc điện được mắc như thế nào với bóng đèn? | Nối tiếp, trên dây pha | Song song với bóng đèn | Trên dây trung tính | Không cần mắc
? Thiết bị đo điện năng tiêu thụ của gia đình là: | Công tơ điện | Aptomat | Cầu chì | Ổ cắm
? Dụng cụ đo điện áp, dòng điện, điện trở là: | Đồng hồ vạn năng | Bút thử điện | Kìm điện | Tua vít
+ Phải cắt nguồn điện trước khi lắp đặt, sửa chữa mạng điện.
- Dây dẫn điện không cần vỏ cách điện.
= Aptomat = Bảo vệ quá tải, ngắn mạch
= Công tơ điện = Đo điện năng tiêu thụ
= Bút thử điện = Kiểm tra có điện` },
    { hk: 2, nhan: 'Mô-đun', ten: 'Trồng cây ăn quả và chế biến thực phẩm', bai: ['Trồng cây ăn quả: giống, nhân giống, kĩ thuật trồng', 'Chăm sóc, thu hoạch cây ăn quả', 'Chế biến thực phẩm: an toàn vệ sinh thực phẩm', 'Chế biến món ăn không dùng nhiệt và có dùng nhiệt'], on: 'Ôn tập cuối năm',
      lt: ['Cây ăn quả có giá trị dinh dưỡng, kinh tế; nhân giống: giâm cành, chiết cành, ghép, nuôi cấy mô.', 'Chăm sóc: làm cỏ, tưới nước, bón phân, tỉa cành, phòng trừ sâu bệnh; thu hoạch đúng độ chín.', 'An toàn vệ sinh thực phẩm: chọn thực phẩm tươi, rõ nguồn gốc; bảo quản đúng cách; ăn chín uống sôi.', 'Chế biến không dùng nhiệt (trộn, muối chua) và dùng nhiệt (luộc, hấp, rán, nướng, xào).'],
      q: `? Phương pháp nhân giống cây ăn quả giữ được đặc tính tốt của cây mẹ là: | Chiết cành, ghép | Gieo hạt | Không nhân giống | Trồng ngẫu nhiên
? Món nộm (gỏi) là món ăn chế biến: | Không dùng nhiệt | Bằng cách rán | Bằng cách nướng | Bằng cách hấp
? Để đảm bảo an toàn thực phẩm, cần: | Chọn thực phẩm tươi, rõ nguồn gốc, ăn chín uống sôi | Dùng thực phẩm quá hạn | Để thực phẩm sống lẫn chín | Rã đông nhiều lần
+ Rửa tay sạch trước khi chế biến thực phẩm.
- Thực phẩm sống và chín nên để chung một thớt.
# Chế biến dùng nhiệt: Luộc, Hấp, Rán, Nướng
# Chế biến không dùng nhiệt: Trộn nộm, Muối dưa, Làm sinh tố` }
  ],
  essays: {
    1: [['Trình bày quy trình lựa chọn nghề nghiệp của bản thân.', ['bản thân', 'nghề', 'thị trường', 'kế hoạch'], 'Tìm hiểu bản thân (sở thích, năng lực, tính cách); tìm hiểu nghề (yêu cầu, môi trường, thu nhập); tìm hiểu thị trường lao động; đối chiếu, ra quyết định; lập kế hoạch học tập, rèn luyện.'],
      ['Sau khi tốt nghiệp THCS em có những lựa chọn nào? Em chọn hướng nào, vì sao?', ['THPT', 'trung cấp', 'lựa chọn'], 'Lựa chọn: học THPT; học trung cấp nghề (có thể kết hợp học văn hoá); học giáo dục thường xuyên. Nêu lựa chọn của em và lí do (năng lực, sở thích, điều kiện, mục tiêu nghề nghiệp).']],
    2: [['Nêu các bước lắp đặt mạch điện chiếu sáng gồm một công tắc điều khiển một bóng đèn và lưu ý an toàn.', ['sơ đồ', 'công tắc', 'dây pha', 'cắt điện'], 'Vẽ sơ đồ nguyên lí, sơ đồ lắp đặt; chuẩn bị vật liệu, dụng cụ; cắt điện; đi dây, lắp công tắc nối tiếp bóng đèn trên dây pha; kiểm tra bằng đồng hồ vạn năng; đóng điện thử. An toàn: cắt điện, dùng dụng cụ cách điện.'],
      ['Trình bày các biện pháp đảm bảo an toàn vệ sinh thực phẩm trong gia đình.', ['nguồn gốc', 'bảo quản', 'chín'], 'Chọn thực phẩm tươi, rõ nguồn gốc; rửa sạch; dụng cụ riêng cho đồ sống – chín; nấu chín kĩ; bảo quản đúng nhiệt độ; vệ sinh tay, bếp; không dùng thực phẩm ôi thiu, quá hạn.']]
  }
});

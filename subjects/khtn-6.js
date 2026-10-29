/* Khoa học tự nhiên 6 – KNTT. Chương, bài theo mục lục SGK; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'khtn-6', lop: 6, mon: 'Khoa học tự nhiên', icon: '🔬', nhan: 'Chương',
  topics: [
    { hk: 1, ten: 'Mở đầu về Khoa học tự nhiên', bai: ['Giới thiệu về Khoa học tự nhiên', 'An toàn trong phòng thực hành', 'Sử dụng kính lúp', 'Sử dụng kính hiển vi quang học', 'Đo chiều dài', 'Đo khối lượng', 'Đo thời gian', 'Đo nhiệt độ'],
      lt: ['KHTN nghiên cứu các sự vật, hiện tượng tự nhiên; gồm các lĩnh vực: Vật lí, Hoá học, Sinh học, Khoa học Trái Đất, Thiên văn học.', 'An toàn: tuân thủ nội quy, đọc kĩ kí hiệu cảnh báo (chất độc, dễ cháy, ăn mòn…), không ăn uống trong phòng thực hành.', 'Kính lúp phóng to vật 3–20 lần; kính hiển vi quang học phóng to 40–3000 lần, dùng quan sát tế bào.', 'Đơn vị đo trong hệ SI: chiều dài <b>mét (m)</b>, khối lượng <b>kilôgam (kg)</b>, thời gian <b>giây (s)</b>, nhiệt độ <b>kelvin (K)</b>; thường dùng °C.', 'Dụng cụ: thước (chiều dài), cân (khối lượng), đồng hồ (thời gian), nhiệt kế (nhiệt độ). Cần ước lượng, chọn dụng cụ có GHĐ và ĐCNN phù hợp.', 'Đổi nhiệt độ: <b>T(K) = t(°C) + 273</b>; <b>t(°F) = t(°C) × 1,8 + 32</b>.'],
      q: `? Đơn vị đo khối lượng trong hệ SI là: | Kilôgam (kg) | Gam (g) | Tấn | Lạng
? Đơn vị đo thời gian trong hệ SI là: | Giây (s) | Phút | Giờ | Ngày
? Dụng cụ dùng để quan sát tế bào là: | Kính hiển vi quang học | Kính lúp cầm tay | Ống nhòm | Kính râm
? Giới hạn đo (GHĐ) của thước là: | Độ dài lớn nhất ghi trên thước | Độ dài giữa hai vạch chia liên tiếp | Chiều rộng thước | Số vạch trên thước
? Độ chia nhỏ nhất (ĐCNN) của thước là: | Độ dài giữa hai vạch chia liên tiếp | Độ dài lớn nhất ghi trên thước | Chiều dày thước | Tổng số vạch
? 25 °C tương ứng với bao nhiêu kelvin? | 298 K | 273 K | 248 K | 25 K
? 20 °C tương ứng với bao nhiêu độ F? | 68 °F | 52 °F | 36 °F | 20 °F
? Lĩnh vực nghiên cứu về chất và sự biến đổi của chất là: | Hoá học | Vật lí | Sinh học | Thiên văn học
? Kính lúp thường phóng to ảnh của vật khoảng: | 3 đến 20 lần | 1000 lần | 40 đến 3000 lần | 1 lần
+ Không được ăn uống trong phòng thực hành.
+ Khi đo nhiệt độ cơ thể có thể dùng nhiệt kế y tế.
+ Cần ước lượng đại lượng cần đo để chọn dụng cụ phù hợp.
- Kính lúp có thể quan sát rõ cấu trúc bên trong tế bào.
- Đơn vị đo chiều dài trong hệ SI là xentimét.
- Có thể nếm thử hoá chất để nhận biết.
= Thước = Đo chiều dài
= Cân = Đo khối lượng
= Đồng hồ = Đo thời gian
= Nhiệt kế = Đo nhiệt độ
_ Nhiệt độ tuyệt đối T(K) = t(°C) + [273].
> Ước lượng đại lượng cần đo > Chọn dụng cụ đo phù hợp > Đặt dụng cụ đúng cách > Đọc và ghi kết quả` },
    { hk: 1, ten: 'Chất quanh ta', bai: ['Sự đa dạng của chất', 'Các thể của chất và sự chuyển thể', 'Oxygen. Không khí'],
      lt: ['Vật thể tự nhiên (cây, đá), vật thể nhân tạo (bàn, xe); vật sống, vật không sống. Chất tạo nên vật thể.', 'Ba thể: <b>rắn</b> (hình dạng, thể tích xác định), <b>lỏng</b> (thể tích xác định, hình dạng theo vật chứa), <b>khí</b> (không có hình dạng và thể tích xác định).', 'Chuyển thể: nóng chảy, đông đặc, bay hơi, ngưng tụ, sôi.', 'Không khí: <b>nitrogen ~78%</b>, <b>oxygen ~21%</b>, còn lại ~1% (carbon dioxide, hơi nước, khí hiếm…). Oxygen duy trì sự sống và sự cháy.', 'Ô nhiễm không khí do khí thải phương tiện, nhà máy, đốt rác; biện pháp: trồng cây, dùng năng lượng sạch.'],
      q: `? Vật thể nào là vật thể tự nhiên? | Cây xanh | Cái bàn | Xe đạp | Quyển vở
? Chất ở thể nào có hình dạng và thể tích xác định? | Rắn | Lỏng | Khí | Cả lỏng và khí
? Quá trình chất chuyển từ thể lỏng sang thể rắn gọi là: | Đông đặc | Nóng chảy | Bay hơi | Ngưng tụ
? Oxygen chiếm khoảng bao nhiêu phần trăm thể tích không khí? | 21% | 78% | 1% | 50%
? Khí chiếm tỉ lệ lớn nhất trong không khí là: | Nitrogen | Oxygen | Carbon dioxide | Hơi nước
? Khí cần cho sự cháy và hô hấp là: | Oxygen | Nitrogen | Carbon dioxide | Hydrogen
+ Chất ở thể khí có thể lan toả và dễ bị nén.
+ Sự sôi là sự bay hơi xảy ra cả trong lòng và trên mặt chất lỏng.
+ Trồng cây xanh góp phần giảm ô nhiễm không khí.
- Oxygen là chất khí có màu xanh nhạt và mùi hắc.
- Chất lỏng có hình dạng xác định.
- Nitrogen chiếm khoảng 21% thể tích không khí.
= Nóng chảy = Rắn sang lỏng
= Đông đặc = Lỏng sang rắn
= Bay hơi = Lỏng sang khí
= Ngưng tụ = Khí sang lỏng
# Vật thể tự nhiên: Cây xanh, Hòn đá, Con mèo, Nước biển
# Vật thể nhân tạo: Cái bàn, Xe đạp, Bút chì, Ngôi nhà` },
    { hk: 1, ten: 'Một số vật liệu, nguyên liệu, nhiên liệu, lương thực – thực phẩm thông dụng', bai: ['Một số vật liệu', 'Một số nguyên liệu', 'Một số nhiên liệu', 'Một số lương thực, thực phẩm'],
      lt: ['Vật liệu: kim loại, nhựa, gỗ, cao su, thuỷ tinh, gốm, vật liệu xây dựng… dùng để chế tạo đồ vật.', 'Nguyên liệu: quặng, đá vôi, dầu mỏ, mủ cao su… dùng để sản xuất vật liệu.', 'Nhiên liệu: than, xăng, dầu, khí đốt, củi — cháy toả nhiệt. Dùng hiệu quả, an toàn; khai thác năng lượng sạch.', 'Lương thực (gạo, ngô, khoai, sắn) cung cấp tinh bột; thực phẩm gồm chất đạm, chất béo, vitamin, khoáng chất.'],
      q: `? Quặng bauxite là nguyên liệu để sản xuất: | Nhôm | Sắt | Nhựa | Thuỷ tinh
? Đá vôi là nguyên liệu để sản xuất: | Vôi, xi măng | Nhôm | Cao su | Xăng
? Nhiên liệu nào ở thể khí? | Khí gas (khí hoá lỏng) | Than đá | Củi | Xăng
? Vật liệu dẫn điện tốt thường là: | Kim loại | Nhựa | Gỗ khô | Cao su
? Lương thực cung cấp chủ yếu chất: | Tinh bột | Chất béo | Vitamin | Chất đạm
+ Nhựa là vật liệu cách điện tốt.
+ Sử dụng nhiên liệu tiết kiệm góp phần bảo vệ môi trường.
- Gỗ là nhiên liệu không cháy được.
- Cao su là nguyên liệu để sản xuất thuỷ tinh.
# Vật liệu: Kim loại, Nhựa, Thuỷ tinh, Gỗ
# Nguyên liệu: Quặng sắt, Đá vôi, Dầu mỏ thô
# Nhiên liệu: Than, Xăng, Khí gas, Củi` },
    { hk: 1, ten: 'Hỗn hợp. Tách chất ra khỏi hỗn hợp', bai: ['Hỗn hợp các chất', 'Tách chất khỏi hỗn hợp'],
      lt: ['<b>Chất tinh khiết</b> (một chất), <b>hỗn hợp</b> (nhiều chất trộn lẫn).', 'Hỗn hợp đồng nhất (dung dịch muối, đường) và không đồng nhất (huyền phù: bột trong nước; nhũ tương: dầu trong nước).', 'Dung dịch gồm dung môi và chất tan; độ tan phụ thuộc nhiệt độ.', 'Tách chất: lọc, cô cạn, chiết (tách chất lỏng không tan vào nhau), dùng nam châm, chưng cất.'],
      q: `? Hỗn hợp dầu ăn và nước được tách bằng cách: | Chiết | Lọc | Cô cạn | Dùng nam châm
? Lấy muối từ nước biển, người ta dùng cách: | Cô cạn (làm bay hơi nước) | Chiết | Lọc | Dùng nam châm
? Tách cát ra khỏi nước, người ta dùng cách: | Lọc | Cô cạn | Chiết | Chưng cất
? Sữa là ví dụ về: | Nhũ tương | Chất tinh khiết | Dung dịch muối | Chất khí
? Nước cất là: | Chất tinh khiết | Hỗn hợp | Huyền phù | Nhũ tương
+ Nước muối là dung dịch, trong đó nước là dung môi.
+ Bột mì khuấy trong nước tạo thành huyền phù.
- Dầu ăn tan tốt trong nước.
- Không khí là một chất tinh khiết.
= Lọc = Tách chất rắn không tan khỏi chất lỏng
= Cô cạn = Tách chất rắn tan khỏi dung dịch
= Chiết = Tách hai chất lỏng không tan vào nhau
= Nam châm = Tách sắt khỏi hỗn hợp` },
    { hk: 1, ten: 'Tế bào', bai: ['Tế bào – Đơn vị cơ bản của sự sống', 'Cấu tạo và chức năng các thành phần của tế bào', 'Sự lớn lên và sinh sản của tế bào', 'Thực hành: Quan sát và phân biệt một số loại tế bào'],
      lt: ['Tế bào là <b>đơn vị cấu trúc và chức năng</b> của cơ thể sống.', 'Thành phần chính: <b>màng tế bào</b>, <b>tế bào chất</b>, <b>nhân</b> (hoặc vùng nhân). Tế bào thực vật có thêm <b>thành tế bào</b> và <b>lục lạp</b>.', 'Tế bào nhân sơ (vi khuẩn — chưa có nhân hoàn chỉnh) và tế bào nhân thực (có nhân hoàn chỉnh).', 'Tế bào lớn lên và phân chia: 1 tế bào → 2 tế bào; sau n lần phân chia tạo <b>2ⁿ</b> tế bào.'],
      q: `? Đơn vị cấu trúc và chức năng của cơ thể sống là: | Tế bào | Cơ quan | Mô | Hệ cơ quan
? Bào quan giúp tế bào thực vật quang hợp là: | Lục lạp | Nhân | Màng tế bào | Ti thể
? Thành phần điều khiển mọi hoạt động sống của tế bào là: | Nhân | Màng tế bào | Tế bào chất | Thành tế bào
? Một tế bào phân chia 3 lần liên tiếp tạo ra bao nhiêu tế bào? | 8 | 6 | 3 | 9
? Tế bào vi khuẩn là tế bào: | Nhân sơ | Nhân thực | Thực vật | Động vật
+ Tế bào thực vật có thành tế bào bằng cellulose.
+ Sự lớn lên và sinh sản của tế bào giúp cơ thể lớn lên.
- Tế bào động vật có lục lạp.
- Mọi tế bào đều có kích thước lớn, nhìn thấy bằng mắt thường.
= Màng tế bào = Bao bọc, kiểm soát trao đổi chất
= Tế bào chất = Nơi diễn ra hoạt động sống
= Nhân = Điều khiển hoạt động của tế bào
= Lục lạp = Quang hợp` },
    { hk: 2, ten: 'Từ tế bào đến cơ thể', bai: ['Cơ thể sinh vật', 'Tổ chức cơ thể đa bào', 'Thực hành: Quan sát và mô tả cơ thể đơn bào, cơ thể đa bào'],
      lt: ['Cơ thể <b>đơn bào</b> (1 tế bào: vi khuẩn, trùng roi, tảo lục đơn bào) và <b>đa bào</b> (nhiều tế bào: người, cây xanh).', 'Cấp độ tổ chức: tế bào → <b>mô</b> → <b>cơ quan</b> → <b>hệ cơ quan</b> → cơ thể.'],
      q: `? Sinh vật nào là cơ thể đơn bào? | Trùng roi | Cây lúa | Con chó | Con người
? Tập hợp các tế bào giống nhau cùng thực hiện một chức năng gọi là: | Mô | Cơ quan | Hệ cơ quan | Cơ thể
? Tim, mạch máu thuộc hệ cơ quan: | Tuần hoàn | Tiêu hoá | Hô hấp | Thần kinh
+ Cơ thể đa bào được cấu tạo từ nhiều tế bào.
- Cây xoài là cơ thể đơn bào.
> Tế bào > Mô > Cơ quan > Hệ cơ quan > Cơ thể` },
    { hk: 2, ten: 'Đa dạng thế giới sống', bai: ['Hệ thống phân loại sinh vật', 'Khoá lưỡng phân', 'Vi khuẩn', 'Thực hành: Làm sữa chua và quan sát vi khuẩn', 'Virus', 'Nguyên sinh vật', 'Thực hành: Quan sát nguyên sinh vật', 'Nấm', 'Thực hành: Quan sát các loại nấm', 'Thực vật', 'Thực hành: Quan sát và phân biệt một số nhóm thực vật', 'Động vật', 'Thực hành: Quan sát và nhận biết một số nhóm động vật ngoài thiên nhiên', 'Đa dạng sinh học', 'Tìm hiểu sinh vật ngoài thiên nhiên'],
      lt: ['Năm giới: <b>Khởi sinh, Nguyên sinh, Nấm, Thực vật, Động vật</b>. Bậc phân loại: Loài → Chi → Họ → Bộ → Lớp → Ngành → Giới.', 'Virus chưa có cấu tạo tế bào, chỉ sống kí sinh trong tế bào. Bệnh do virus: cúm, sởi, thuỷ đậu, COVID-19.', 'Nguyên sinh vật: trùng roi, trùng giày, trùng biến hình; gây bệnh sốt rét, kiết lị.', 'Thực vật: Rêu, Dương xỉ, Hạt trần, Hạt kín. Động vật không xương sống (ruột khoang, giun, thân mềm, chân khớp) và có xương sống (cá, lưỡng cư, bò sát, chim, thú).', 'Đa dạng sinh học: sự phong phú về loài, môi trường sống; cần bảo vệ.'],
      q: `? Sinh vật chưa có cấu tạo tế bào là: | Virus | Vi khuẩn | Nấm men | Trùng roi
? Bệnh sốt rét do tác nhân nào gây ra? | Trùng sốt rét (nguyên sinh vật) | Virus | Vi khuẩn | Nấm
? Nhóm thực vật có hoa và hạt được bao bọc trong quả là: | Hạt kín | Hạt trần | Dương xỉ | Rêu
? Cây thông thuộc nhóm thực vật: | Hạt trần | Hạt kín | Rêu | Dương xỉ
? Động vật nào thuộc lớp Thú? | Cá voi | Cá chép | Ếch | Cá sấu
? Động vật nào thuộc nhóm Chân khớp? | Tôm | Giun đất | Ốc sên | Sứa
? Bậc phân loại thấp nhất là: | Loài | Chi | Họ | Giới
+ Vi khuẩn lactic được dùng để làm sữa chua.
+ Dơi là động vật có vú (lớp Thú) biết bay.
+ Rêu là thực vật chưa có mạch dẫn.
- Virus có thể sống độc lập ngoài tế bào chủ trong thời gian dài để sinh sản.
- Cá voi thuộc lớp Cá.
- Nấm là thực vật vì có lục lạp.
= Rêu = Chưa có mạch dẫn
= Dương xỉ = Có mạch dẫn, sinh sản bằng bào tử
= Hạt trần = Hạt nằm lộ trên lá noãn
= Hạt kín = Có hoa, hạt nằm trong quả
> Loài > Chi > Họ > Bộ > Lớp > Ngành > Giới
# Lớp Thú: Cá voi, Dơi, Mèo
# Lớp Chim: Chim sẻ, Đà điểu, Chim cánh cụt
# Lớp Bò sát: Rắn, Cá sấu, Thằn lằn
# Lớp Lưỡng cư: Ếch, Cóc, Kì giông` },
    { hk: 2, ten: 'Lực trong đời sống', bai: ['Lực là gì?', 'Biểu diễn lực', 'Biến dạng của lò xo', 'Trọng lượng, lực hấp dẫn', 'Lực ma sát', 'Lực cản của nước'],
      lt: ['Lực là sự đẩy hoặc kéo của vật này lên vật khác. Lực có thể làm vật thay đổi tốc độ, hướng chuyển động hoặc bị biến dạng.', 'Đơn vị lực: <b>newton (N)</b>; đo bằng <b>lực kế</b>. Lực được biểu diễn bằng mũi tên: gốc, phương, chiều, độ lớn.', 'Độ dãn của lò xo tỉ lệ thuận với khối lượng vật treo (trong giới hạn đàn hồi).', '<b>Trọng lượng</b> là độ lớn lực hút của Trái Đất: P ≈ 10 × m (m tính bằng kg, P tính bằng N).', 'Ma sát trượt, ma sát lăn, ma sát nghỉ; có lợi (đi lại, phanh xe) và có hại (mài mòn). Vật chuyển động trong nước chịu lực cản.'],
      q: `? Đơn vị đo lực là: | Newton (N) | Kilôgam (kg) | Mét (m) | Jun (J)
? Dụng cụ đo lực là: | Lực kế | Cân đồng hồ | Nhiệt kế | Thước dây
? Vật có khối lượng 5 kg có trọng lượng khoảng: | 50 N | 5 N | 0,5 N | 500 N
? Trọng lượng của vật có phương và chiều: | Thẳng đứng, từ trên xuống | Nằm ngang | Thẳng đứng, từ dưới lên | Xiên
? Ma sát có lợi trong trường hợp: | Phanh xe dừng lại | Xích xe bị mòn | Trục quay bị nóng | Giày bị mòn đế
? Vì sao lốp xe có rãnh? | Tăng ma sát, tránh trơn trượt | Giảm ma sát | Cho đẹp | Để nhẹ hơn
+ Lực có thể làm vật bị biến dạng.
+ Treo vật nặng hơn thì lò xo dãn nhiều hơn (trong giới hạn đàn hồi).
+ Lực hấp dẫn là lực hút giữa các vật có khối lượng.
- Trọng lượng và khối lượng là một đại lượng, cùng đơn vị kg.
- Ma sát luôn có hại.
- Đá quả bóng chỉ làm bóng biến dạng, không làm thay đổi chuyển động.
= Lực kế = Đo lực
= Newton = Đơn vị lực
= Trọng lượng = Lực hút của Trái Đất
= Ma sát lăn = Bánh xe lăn trên mặt đường
_ Trọng lượng của vật 2 kg khoảng [20] N.` },
    { hk: 2, ten: 'Năng lượng', bai: ['Năng lượng và sự truyền năng lượng', 'Một số dạng năng lượng', 'Sự chuyển hoá năng lượng', 'Năng lượng hao phí', 'Năng lượng tái tạo', 'Tiết kiệm năng lượng'],
      lt: ['Năng lượng đặc trưng cho khả năng tác dụng lực; đơn vị <b>jun (J)</b>.', 'Dạng năng lượng: động năng, thế năng, nhiệt năng, quang năng, điện năng, hoá năng, năng lượng âm…', '<b>Định luật bảo toàn năng lượng</b>: năng lượng không tự sinh ra, không tự mất đi, chỉ chuyển từ dạng này sang dạng khác hoặc truyền từ vật này sang vật khác.', 'Năng lượng hao phí (thường là nhiệt) không có ích. Năng lượng tái tạo: mặt trời, gió, nước, sinh khối, địa nhiệt.'],
      q: `? Đơn vị năng lượng là: | Jun (J) | Newton (N) | Oát (W) | Mét (m)
? Bóng đèn sợi đốt chủ yếu chuyển điện năng thành: | Nhiệt năng và quang năng | Động năng | Hoá năng | Năng lượng âm
? Pin chuyển hoá năng thành: | Điện năng | Quang năng | Động năng | Thế năng
? Nguồn năng lượng tái tạo là: | Năng lượng mặt trời | Than đá | Dầu mỏ | Khí tự nhiên
? Vật ở trên cao có dạng năng lượng: | Thế năng | Động năng | Hoá năng | Quang năng
+ Năng lượng không tự sinh ra cũng không tự mất đi.
+ Tắt thiết bị điện khi không dùng là tiết kiệm năng lượng.
- Than đá là nguồn năng lượng tái tạo.
- Năng lượng hao phí luôn có ích cho con người.
= Quạt điện = Điện năng thành động năng
= Pin mặt trời = Quang năng thành điện năng
= Bếp than = Hoá năng thành nhiệt năng
= Loa = Điện năng thành năng lượng âm
# Tái tạo: Mặt trời, Gió, Thuỷ điện, Địa nhiệt
# Không tái tạo: Than đá, Dầu mỏ, Khí tự nhiên` },
    { hk: 2, ten: 'Trái Đất và bầu trời', bai: ['Chuyển động nhìn thấy của Mặt Trời. Thiên thể', 'Chuyển động nhìn thấy của Mặt Trăng', 'Hệ Mặt Trời', 'Ngân Hà'],
      lt: ['Hằng ngày thấy Mặt Trời mọc ở phía Đông, lặn ở phía Tây do Trái Đất tự quay quanh trục từ Tây sang Đông.', 'Mặt Trăng không tự phát sáng, phản xạ ánh sáng Mặt Trời; các pha: trăng non, trăng lưỡi liềm, bán nguyệt, trăng tròn (khoảng 29,5 ngày).', 'Hệ Mặt Trời: Mặt Trời và 8 hành tinh: <b>Thuỷ, Kim, Trái Đất, Hoả, Mộc, Thổ, Thiên Vương, Hải Vương</b>.', 'Hệ Mặt Trời nằm trong thiên hà <b>Ngân Hà</b>.'],
      q: `? Hành tinh gần Mặt Trời nhất là: | Sao Thuỷ | Sao Kim | Trái Đất | Sao Hoả
? Hành tinh lớn nhất trong Hệ Mặt Trời là: | Sao Mộc | Sao Thổ | Trái Đất | Sao Hải Vương
? Hệ Mặt Trời có bao nhiêu hành tinh? | 8 | 9 | 7 | 10
? Mặt Trăng sáng là do: | Phản xạ ánh sáng Mặt Trời | Tự phát sáng | Có lửa cháy | Phản chiếu ánh đèn
? Hệ Mặt Trời nằm trong thiên hà: | Ngân Hà | Tiên Nữ | Tam Giác | Xoáy Nước
+ Trái Đất là hành tinh thứ ba tính từ Mặt Trời.
+ Chu kì các pha Mặt Trăng khoảng 29,5 ngày.
- Mặt Trăng là một ngôi sao tự phát sáng.
- Sao Kim là hành tinh xa Mặt Trời nhất.
> Sao Thuỷ > Sao Kim > Trái Đất > Sao Hoả > Sao Mộc > Sao Thổ > Sao Thiên Vương > Sao Hải Vương` }
  ],
  essays: {
    1: [['Nêu các bước đo chiều dài một vật bằng thước và lưu ý khi đọc kết quả.', ['ước lượng', 'GHĐ', 'ĐCNN', 'vuông góc'], 'Ước lượng chiều dài → chọn thước có GHĐ, ĐCNN phù hợp → đặt thước dọc theo vật, một đầu vật ngang vạch 0 → mắt nhìn vuông góc với thước → đọc và ghi kết quả theo vạch gần nhất.'],
      ['Trình bày cấu tạo tế bào và chỉ ra điểm khác nhau giữa tế bào thực vật và tế bào động vật.', ['màng', 'tế bào chất', 'nhân', 'lục lạp', 'thành tế bào'], 'Tế bào gồm màng tế bào, tế bào chất, nhân. Tế bào thực vật có thêm thành tế bào và lục lạp; tế bào động vật không có.']],
    2: [['Lấy ví dụ về ma sát có lợi và ma sát có hại; nêu cách làm tăng hoặc giảm ma sát.', ['ma sát', 'có lợi', 'có hại', 'bôi trơn'], 'Có lợi: phanh xe, đi lại không trượt; tăng ma sát bằng tạo rãnh lốp, rắc cát. Có hại: mài mòn xích xe, trục quay; giảm bằng bôi trơn, dùng ổ bi.'],
      ['Phát biểu định luật bảo toàn năng lượng và nêu một ví dụ về sự chuyển hoá năng lượng.', ['không tự sinh ra', 'không tự mất đi', 'chuyển hoá'], 'Năng lượng không tự sinh ra, không tự mất đi mà chỉ chuyển từ dạng này sang dạng khác hoặc truyền từ vật này sang vật khác. Ví dụ: quạt điện chuyển điện năng thành động năng (và một phần nhiệt năng hao phí).']]
  }
});

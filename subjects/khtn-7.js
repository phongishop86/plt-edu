/* Khoa học tự nhiên 7 – KNTT. Chương, bài theo mục lục SGK; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'khtn-7', lop: 7, mon: 'Khoa học tự nhiên', icon: '🔬', nhan: 'Chương',
  topics: [
    { hk: 1, ten: 'Mở đầu. Nguyên tử. Sơ lược về bảng tuần hoàn các nguyên tố hoá học', nhan: 'Mở đầu – Chương I', bai: ['Phương pháp và kĩ năng học tập môn Khoa học tự nhiên', 'Nguyên tử', 'Nguyên tố hoá học', 'Sơ lược về bảng tuần hoàn các nguyên tố hoá học'],
      lt: ['Phương pháp tìm hiểu tự nhiên: đề xuất vấn đề → dự đoán → lập kế hoạch kiểm tra → thực hiện → viết báo cáo.', 'Nguyên tử gồm <b>hạt nhân</b> (proton mang điện +, neutron không mang điện) và <b>vỏ</b> gồm các electron (mang điện −). Nguyên tử trung hoà về điện: số p = số e.', 'Khối lượng nguyên tử tính bằng amu; khối lượng tập trung ở hạt nhân.', '<b>Nguyên tố hoá học</b>: tập hợp các nguyên tử cùng số proton. Kí hiệu: H, O, C, N, Na, Fe, Cu, Ca…', 'Bảng tuần hoàn: xếp theo chiều tăng điện tích hạt nhân; <b>chu kì</b> (hàng: cùng số lớp electron), <b>nhóm</b> (cột: tính chất tương tự). Kim loại, phi kim, khí hiếm.'],
      q: `? Hạt mang điện tích dương trong nguyên tử là: | Proton | Electron | Neutron | Hạt nhân
? Hạt không mang điện trong nguyên tử là: | Neutron | Proton | Electron | Ion
? Nguyên tử trung hoà về điện vì: | Số proton bằng số electron | Số proton bằng số neutron | Không có electron | Không có proton
? Nguyên tố hoá học được đặc trưng bởi: | Số proton trong hạt nhân | Số neutron | Khối lượng nguyên tử | Số lớp electron
? Kí hiệu hoá học của sắt là: | Fe | S | Si | F
? Kí hiệu hoá học của natri (sodium) là: | Na | N | Ni | S
? Các nguyên tố trong cùng một chu kì có cùng: | Số lớp electron | Số proton | Tính chất hoá học | Khối lượng
? Nguyên tố thuộc nhóm khí hiếm là: | Helium (He) | Oxygen (O) | Natri (Na) | Carbon (C)
+ Khối lượng nguyên tử tập trung chủ yếu ở hạt nhân.
+ Các nguyên tố trong cùng một nhóm có tính chất hoá học tương tự nhau.
- Electron mang điện tích dương.
- Bảng tuần hoàn sắp xếp các nguyên tố theo chiều tăng khối lượng tên gọi chữ cái.
= H = Hydrogen
= O = Oxygen
= C = Carbon
= N = Nitrogen
= Ca = Calcium
= Cu = Đồng (copper)
_ Nguyên tử oxygen có 8 proton nên có [8] electron.` },
    { hk: 1, ten: 'Phân tử. Liên kết hoá học', nhan: 'Chương II', bai: ['Phân tử – Đơn chất – Hợp chất', 'Giới thiệu về liên kết hoá học', 'Hoá trị và công thức hoá học'],
      lt: ['<b>Đơn chất</b>: tạo từ một nguyên tố (O₂, Fe, H₂). <b>Hợp chất</b>: tạo từ hai nguyên tố trở lên (H₂O, NaCl, CO₂).', 'Liên kết <b>ion</b> (kim loại – phi kim, nhường nhận electron: NaCl); liên kết <b>cộng hoá trị</b> (phi kim – phi kim, dùng chung electron: H₂O, CO₂).', 'Hoá trị: con số biểu thị khả năng liên kết. Quy tắc hoá trị AₓBᵧ: <b>x·a = y·b</b>.', 'Khối lượng phân tử = tổng khối lượng các nguyên tử. Ví dụ H₂O = 2·1 + 16 = 18 amu.'],
      q: `? Chất nào là đơn chất? | O₂ | H₂O | CO₂ | NaCl
? Chất nào là hợp chất? | H₂O | O₂ | Fe | N₂
? Liên kết trong phân tử NaCl là: | Liên kết ion | Liên kết cộng hoá trị | Liên kết kim loại | Không có liên kết
? Liên kết trong phân tử H₂O là: | Liên kết cộng hoá trị | Liên kết ion | Liên kết kim loại | Liên kết hydrogen giữa các nguyên tử trong phân tử
? Khối lượng phân tử của CO₂ (C = 12, O = 16) là: | 44 amu | 28 amu | 32 amu | 40 amu
? Trong hợp chất, oxygen thường có hoá trị: | II | I | III | IV
? Công thức hoá học của hợp chất tạo bởi Al (III) và O (II) là: | Al₂O₃ | AlO | Al₃O₂ | AlO₃
+ Đơn chất được tạo nên từ một nguyên tố hoá học.
+ Hydrogen có hoá trị I.
- CO₂ là đơn chất.
- Liên kết cộng hoá trị hình thành do kim loại nhường electron cho phi kim.
= H₂O = Nước
= NaCl = Muối ăn
= CO₂ = Carbon dioxide
= O₂ = Khí oxygen
# Đơn chất: O₂, N₂, Fe, Cu
# Hợp chất: H₂O, NaCl, CO₂, CaCO₃
_ Khối lượng phân tử H₂O (H = 1, O = 16) là [18] amu.` },
    { hk: 1, ten: 'Tốc độ', nhan: 'Chương III', bai: ['Tốc độ chuyển động', 'Đo tốc độ', 'Đồ thị quãng đường – thời gian', 'Thảo luận về ảnh hưởng của tốc độ trong an toàn giao thông'],
      lt: ['Tốc độ cho biết mức độ nhanh, chậm: <b>v = s / t</b>. Đơn vị: m/s, km/h. 1 m/s = 3,6 km/h.', 'Đo tốc độ: đo quãng đường bằng thước, thời gian bằng đồng hồ bấm giây hoặc cổng quang điện; thiết bị bắn tốc độ.', 'Đồ thị quãng đường – thời gian: đường thẳng nghiêng (chuyển động đều); càng dốc thì tốc độ càng lớn.', 'Tốc độ cao → quãng đường phanh dài → dễ tai nạn; tuân thủ tốc độ cho phép, giữ khoảng cách an toàn.'],
      q: `? Công thức tính tốc độ là: | v = s / t | v = s · t | v = t / s | v = s + t
? 36 km/h bằng bao nhiêu m/s? | 10 m/s | 36 m/s | 3,6 m/s | 100 m/s
? Một xe đi 120 km trong 2 giờ. Tốc độ của xe là: | 60 km/h | 240 km/h | 30 km/h | 122 km/h
? Một người chạy 100 m hết 20 s. Tốc độ là: | 5 m/s | 2000 m/s | 0,2 m/s | 80 m/s
? Trên đồ thị quãng đường – thời gian, đường càng dốc thì: | Tốc độ càng lớn | Tốc độ càng nhỏ | Vật đứng yên | Quãng đường bằng 0
+ Tốc độ càng lớn thì quãng đường phanh càng dài.
+ Đơn vị tốc độ trong hệ SI là m/s.
- 1 m/s bằng 1 km/h.
- Chạy quá tốc độ không ảnh hưởng đến an toàn giao thông.
_ Xe đi được 150 km trong 3 giờ, tốc độ là [50] km/h.` },
    { hk: 1, ten: 'Âm thanh', nhan: 'Chương IV', bai: ['Sóng âm', 'Độ to và độ cao của âm', 'Phản xạ âm, chống ô nhiễm tiếng ồn'],
      lt: ['Âm do vật <b>dao động</b> phát ra; truyền qua rắn, lỏng, khí; không truyền qua chân không.', '<b>Tần số</b> (Hz): số dao động trong 1 giây → quyết định <b>độ cao</b> (tần số lớn → âm cao, bổng). Tai người nghe 20 Hz – 20 000 Hz; dưới 20 Hz là hạ âm, trên 20 000 Hz là siêu âm.', '<b>Biên độ</b> dao động lớn → âm to. Độ to đo bằng dB.', 'Vật phản xạ âm tốt: cứng, nhẵn (gạch, kính). Phản xạ âm kém: mềm, xốp (rèm, thảm). Chống ồn: trồng cây, tường cách âm, giảm nguồn ồn.'],
      q: `? Đơn vị của tần số là: | Hertz (Hz) | Decibel (dB) | Mét (m) | Giây (s)
? Âm càng cao (bổng) khi: | Tần số càng lớn | Biên độ càng lớn | Tần số càng nhỏ | Vật dao động chậm
? Âm càng to khi: | Biên độ dao động càng lớn | Tần số càng lớn | Biên độ càng nhỏ | Vật đứng yên
? Âm có tần số trên 20 000 Hz gọi là: | Siêu âm | Hạ âm | Âm thanh nghe được | Tiếng vang
? Âm không truyền được trong: | Chân không | Không khí | Nước | Thép
? Vật phản xạ âm kém là: | Rèm nhung, thảm | Tường gạch | Mặt kính | Tấm kim loại
+ Âm truyền trong chất rắn nhanh hơn trong không khí.
+ Trồng cây xanh giúp giảm ô nhiễm tiếng ồn.
- Tai người nghe được siêu âm.
- Biên độ dao động quyết định độ cao của âm.
= Tần số = Độ cao của âm
= Biên độ = Độ to của âm
= Hạ âm = Dưới 20 Hz
= Siêu âm = Trên 20 000 Hz` },
    { hk: 1, ten: 'Ánh sáng', nhan: 'Chương V', bai: ['Năng lượng ánh sáng. Tia sáng, vùng tối', 'Sự phản xạ ánh sáng', 'Ảnh của vật tạo bởi gương phẳng'],
      lt: ['Ánh sáng là một dạng năng lượng; truyền theo đường thẳng; biểu diễn bằng <b>tia sáng</b> (đường thẳng có mũi tên). Chùm sáng song song, hội tụ, phân kì.', 'Vùng tối sau vật cản sáng; vùng nửa tối.', '<b>Định luật phản xạ ánh sáng</b>: tia phản xạ nằm trong mặt phẳng chứa tia tới và pháp tuyến; <b>góc phản xạ bằng góc tới</b> (i\' = i).', 'Phản xạ gương (mặt nhẵn) và phản xạ khuếch tán (mặt gồ ghề).', 'Ảnh qua gương phẳng: <b>ảnh ảo</b>, <b>lớn bằng vật</b>, đối xứng với vật qua gương.'],
      q: `? Theo định luật phản xạ ánh sáng: | Góc phản xạ bằng góc tới | Góc phản xạ gấp đôi góc tới | Góc phản xạ bằng 90° | Góc tới luôn bằng 0
? Chiếu tia sáng tới gương với góc tới 40°, góc phản xạ là: | 40° | 50° | 80° | 20°
? Ảnh của vật tạo bởi gương phẳng là: | Ảnh ảo, lớn bằng vật | Ảnh thật, lớn hơn vật | Ảnh ảo, nhỏ hơn vật | Ảnh thật, ngược chiều
? Vật đặt cách gương phẳng 30 cm thì ảnh cách gương: | 30 cm | 60 cm | 15 cm | 0 cm
? Ánh sáng truyền trong môi trường trong suốt, đồng tính theo: | Đường thẳng | Đường cong | Đường gấp khúc | Đường tròn
+ Phản xạ khuếch tán xảy ra trên bề mặt gồ ghề.
- Ảnh tạo bởi gương phẳng hứng được trên màn chắn.
- Góc phản xạ luôn lớn hơn góc tới.
_ Góc tới bằng 35° thì góc phản xạ bằng [35]°.` },
    { hk: 1, ten: 'Từ', nhan: 'Chương VI', bai: ['Nam châm', 'Từ trường', 'Chế tạo nam châm điện đơn giản'],
      lt: ['Nam châm có 2 cực: <b>Bắc (N)</b> và <b>Nam (S)</b>. Các cực cùng tên đẩy nhau, khác tên hút nhau. Nam châm hút sắt, thép, niken, coban.', 'Từ trường tồn tại xung quanh nam châm, dòng điện; biểu diễn bằng đường sức từ (đi ra từ cực Bắc, đi vào cực Nam).', 'Trái Đất có từ trường; la bàn dùng để xác định hướng.', '<b>Nam châm điện</b>: cuộn dây có lõi sắt non, có dòng điện chạy qua; có thể tăng lực từ bằng tăng số vòng dây hoặc cường độ dòng điện.'],
      q: `? Hai cực cùng tên của hai nam châm đặt gần nhau sẽ: | Đẩy nhau | Hút nhau | Không tương tác | Hút rồi đẩy
? Nam châm KHÔNG hút được vật làm bằng: | Nhôm | Sắt | Thép | Niken
? Đường sức từ bên ngoài nam châm đi: | Ra từ cực Bắc, vào cực Nam | Ra từ cực Nam, vào cực Bắc | Vòng quanh không vào cực nào | Song song với nam châm
? Dụng cụ dùng từ trường Trái Đất để xác định hướng là: | La bàn | Nhiệt kế | Lực kế | Ampe kế
? Để tăng lực từ của nam châm điện, ta có thể: | Tăng số vòng dây | Giảm cường độ dòng điện | Bỏ lõi sắt | Ngắt điện
+ Xung quanh dòng điện có từ trường.
- Nam châm hút được mọi kim loại.
- Nam châm điện vẫn có từ tính mạnh khi ngắt dòng điện (lõi sắt non).` },
    { hk: 2, ten: 'Trao đổi chất và chuyển hoá năng lượng ở sinh vật', nhan: 'Chương VII', bai: ['Khái quát về trao đổi chất và chuyển hoá năng lượng', 'Quang hợp ở thực vật', 'Một số yếu tố ảnh hưởng đến quang hợp', 'Thực hành: Chứng minh quang hợp ở cây xanh', 'Hô hấp tế bào', 'Một số yếu tố ảnh hưởng đến hô hấp tế bào', 'Thực hành: Hô hấp ở thực vật', 'Trao đổi khí ở sinh vật', 'Vai trò của nước và chất dinh dưỡng đối với sinh vật', 'Trao đổi nước và chất dinh dưỡng ở thực vật', 'Trao đổi nước và chất dinh dưỡng ở động vật', 'Thực hành: Chứng minh thân vận chuyển nước và lá thoát hơi nước'],
      lt: ['<b>Quang hợp</b>: Nước + Carbon dioxide —(ánh sáng, diệp lục)→ Glucose + Oxygen. Diễn ra chủ yếu ở lá (lục lạp).', 'Yếu tố ảnh hưởng quang hợp: ánh sáng, nước, CO₂, nhiệt độ.', '<b>Hô hấp tế bào</b>: Glucose + Oxygen → Carbon dioxide + Nước + năng lượng (ATP); diễn ra ở ti thể.', 'Trao đổi khí: ở thực vật qua <b>khí khổng</b>; ở động vật qua phổi, mang, da, ống khí.', 'Thực vật: rễ hút nước và muối khoáng → mạch gỗ vận chuyển lên lá → thoát hơi nước qua khí khổng; mạch rây vận chuyển chất hữu cơ.'],
      q: `? Sản phẩm của quang hợp là: | Glucose và oxygen | Carbon dioxide và nước | Chỉ có nước | Protein và chất béo
? Quang hợp diễn ra chủ yếu ở bào quan: | Lục lạp | Ti thể | Nhân | Không bào
? Hô hấp tế bào diễn ra chủ yếu ở: | Ti thể | Lục lạp | Màng tế bào | Nhân
? Khí được thải ra trong quá trình hô hấp tế bào là: | Carbon dioxide | Oxygen | Nitrogen | Hydrogen
? Trao đổi khí ở lá cây diễn ra qua: | Khí khổng | Mạch gỗ | Rễ | Hoa
? Nước được vận chuyển từ rễ lên lá qua: | Mạch gỗ | Mạch rây | Khí khổng | Biểu bì
? Cá trao đổi khí qua: | Mang | Phổi | Da khô | Ống khí
+ Ánh sáng là điều kiện cần cho quang hợp.
+ Hô hấp tế bào giải phóng năng lượng cho hoạt động sống.
+ Mạch rây vận chuyển chất hữu cơ trong cây.
- Quang hợp hấp thụ oxygen và thải carbon dioxide.
- Hô hấp tế bào chỉ diễn ra vào ban đêm.
- Côn trùng trao đổi khí bằng mang.
= Quang hợp = Tổng hợp chất hữu cơ, giải phóng O₂
= Hô hấp tế bào = Phân giải chất hữu cơ, giải phóng năng lượng
= Khí khổng = Trao đổi khí và thoát hơi nước
= Mạch gỗ = Vận chuyển nước và muối khoáng
# Trao đổi khí qua phổi: Người, Chó, Chim
# Trao đổi khí qua mang: Cá chép, Tôm, Cua
# Trao đổi khí qua ống khí: Châu chấu, Ong` },
    { hk: 2, ten: 'Cảm ứng ở sinh vật', nhan: 'Chương VIII', bai: ['Cảm ứng ở sinh vật và tập tính ở động vật', 'Vận dụng hiện tượng cảm ứng ở sinh vật vào thực tiễn', 'Thực hành: Cảm ứng ở sinh vật'],
      lt: ['<b>Cảm ứng</b>: khả năng tiếp nhận và phản ứng với kích thích từ môi trường. Ví dụ: cây trinh nữ cụp lá, ngọn cây hướng sáng, rễ hướng nước.', '<b>Tập tính</b> ở động vật: chuỗi phản ứng trả lời kích thích; bẩm sinh (nhện chăng tơ) hoặc học được (chó nghe tên chủ).'],
      q: `? Ngọn cây mọc vươn về phía có ánh sáng là: | Tính hướng sáng | Tính hướng nước | Tính hướng đất âm | Tập tính học được
? Tập tính chăng tơ của nhện là: | Tập tính bẩm sinh | Tập tính học được | Cảm ứng ở thực vật | Phản xạ có điều kiện của người
? Chó chạy đến khi nghe chủ gọi tên là: | Tập tính học được | Tập tính bẩm sinh | Tính hướng sáng | Cảm ứng ở thực vật
+ Lá cây trinh nữ cụp lại khi bị chạm là một biểu hiện cảm ứng.
- Thực vật không có khả năng cảm ứng.
# Tập tính bẩm sinh: Nhện chăng tơ, Chim làm tổ, Gà con mổ thức ăn
# Tập tính học được: Chó nghe tên chủ, Khỉ làm xiếc, Vẹt nói theo người` },
    { hk: 2, ten: 'Sinh trưởng và phát triển ở sinh vật', nhan: 'Chương IX', bai: ['Khái quát về sinh trưởng và phát triển ở sinh vật', 'Ứng dụng sinh trưởng và phát triển ở sinh vật vào thực tiễn', 'Thực hành: Quan sát, mô tả sự sinh trưởng và phát triển ở một số sinh vật'],
      lt: ['<b>Sinh trưởng</b>: tăng kích thước, khối lượng cơ thể. <b>Phát triển</b>: những biến đổi về cấu trúc, chức năng, hình thái (gồm sinh trưởng, phân hoá tế bào, phát sinh hình thái).', 'Mô phân sinh đỉnh (làm cây cao), mô phân sinh bên (làm thân to ra).', 'Yếu tố ảnh hưởng: nhiệt độ, ánh sáng, nước, chất dinh dưỡng.'],
      q: `? Mô phân sinh đỉnh giúp cây: | Tăng chiều cao | Tăng đường kính thân | Ra hoa | Rụng lá
? Sinh trưởng là: | Sự tăng kích thước, khối lượng cơ thể | Sự biến đổi hình thái | Sự sinh sản | Sự chết
+ Ánh sáng, nhiệt độ ảnh hưởng đến sinh trưởng của sinh vật.
- Phát triển chỉ là sự tăng chiều cao.` },
    { hk: 2, ten: 'Sinh sản ở sinh vật', nhan: 'Chương X', bai: ['Sinh sản vô tính ở sinh vật', 'Sinh sản hữu tính ở sinh vật', 'Một số yếu tố ảnh hưởng và điều hoà, điều khiển sinh sản ở sinh vật', 'Cơ thể sinh vật là một thể thống nhất'],
      lt: ['<b>Sinh sản vô tính</b>: không có sự kết hợp giao tử đực và cái (giâm, chiết, ghép cành; phân đôi, nảy chồi, trinh sản).', '<b>Sinh sản hữu tính</b>: có sự kết hợp giao tử đực và cái tạo hợp tử. Ở thực vật có hoa: thụ phấn → thụ tinh → hạt, quả.', 'Ứng dụng: nhân giống cây (giâm, chiết, ghép, nuôi cấy mô), điều khiển sinh sản vật nuôi.'],
      q: `? Hình thức sinh sản có sự kết hợp giữa giao tử đực và giao tử cái là: | Sinh sản hữu tính | Sinh sản vô tính | Nảy chồi | Phân đôi
? Giâm cành, chiết cành là hình thức: | Sinh sản vô tính | Sinh sản hữu tính | Thụ tinh | Thụ phấn
? Thuỷ tức sinh sản vô tính bằng cách: | Nảy chồi | Phân đôi | Giâm cành | Thụ tinh
+ Sinh sản hữu tính tạo ra con cái đa dạng hơn.
- Ghép cành là sinh sản hữu tính.
# Sinh sản vô tính: Giâm cành, Chiết cành, Nảy chồi, Phân đôi
# Sinh sản hữu tính: Thụ phấn và thụ tinh ở hoa, Gà đẻ trứng có phôi, Ếch đẻ trứng thụ tinh ngoài` }
  ],
  essays: {
    1: [['Nêu cấu tạo nguyên tử. Vì sao nguyên tử trung hoà về điện?', ['proton', 'neutron', 'electron', 'hạt nhân'], 'Nguyên tử gồm hạt nhân (proton mang điện dương, neutron không mang điện) và lớp vỏ gồm các electron mang điện âm chuyển động quanh hạt nhân. Nguyên tử trung hoà về điện vì số proton bằng số electron.'],
      ['Một ô tô đi quãng đường 90 km hết 1,5 giờ. Tính tốc độ của ô tô theo km/h và m/s.', ['60', '16,7', 'v = s/t'], 'v = s/t = 90 : 1,5 = 60 (km/h) ≈ 16,7 (m/s).']],
    2: [['Viết phương trình chữ của quang hợp và hô hấp tế bào. Nêu mối quan hệ giữa hai quá trình.', ['quang hợp', 'hô hấp', 'glucose', 'oxygen'], 'Quang hợp: nước + carbon dioxide → (ánh sáng, diệp lục) glucose + oxygen. Hô hấp: glucose + oxygen → carbon dioxide + nước + năng lượng. Sản phẩm của quá trình này là nguyên liệu của quá trình kia; quang hợp tích luỹ năng lượng, hô hấp giải phóng năng lượng.'],
      ['Phân biệt sinh sản vô tính và sinh sản hữu tính; nêu ứng dụng trong trồng trọt.', ['vô tính', 'hữu tính', 'giao tử', 'giâm', 'chiết'], 'Vô tính: không có kết hợp giao tử, con giống mẹ (giâm, chiết, ghép, nuôi cấy mô — nhân giống nhanh, giữ đặc tính tốt). Hữu tính: có kết hợp giao tử đực và cái, con đa dạng (lai tạo giống mới).']]
  }
});

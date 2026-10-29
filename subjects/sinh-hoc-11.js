/* Sinh học 11 – KNTT. Chương, bài theo mục lục SGK; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'sinh-hoc-11', lop: 11, mon: 'Sinh học', icon: '🧬', nhan: 'Chương', so: false,
  topics: [
    { hk: 1, nhan: 'Chương 1', ten: 'Trao đổi chất và chuyển hoá năng lượng ở thực vật', bai: ['Bài 1. Khái quát về trao đổi chất và chuyển hoá năng lượng', 'Bài 2. Trao đổi nước và khoáng ở thực vật', 'Bài 3. Thực hành: Trao đổi nước và khoáng ở thực vật', 'Bài 4. Quang hợp ở thực vật', 'Bài 5. Thực hành: Quang hợp ở thực vật', 'Bài 6. Hô hấp ở thực vật', 'Bài 7. Thực hành: Hô hấp ở thực vật'],
      lt: ['Rễ hấp thụ nước và khoáng chủ yếu qua <b>tế bào lông hút</b>; nước vận chuyển qua mạch gỗ nhờ lực đẩy của rễ, lực liên kết, lực hút do <b>thoát hơi nước</b> ở lá (chủ yếu qua khí khổng).', 'Nguyên tố khoáng đa lượng (N, P, K…), vi lượng (Fe, Mn, Zn…). Nitrogen: cây hấp thụ dạng NH₄⁺, NO₃⁻.', '<b>Quang hợp</b>: pha sáng (ở thylakoid, tạo ATP, NADPH, giải phóng O₂ từ nước), pha tối (chất nền lục lạp, cố định CO₂ – chu trình Calvin). Thực vật C3, C4, CAM.', '<b>Hô hấp</b>: đường phân → chu trình Krebs → chuỗi truyền electron; hô hấp sáng ở thực vật C3.'],
      q: `? Rễ cây hấp thụ nước chủ yếu qua: | Tế bào lông hút | Tế bào biểu bì thân | Khí khổng | Mạch rây
? Thoát hơi nước ở lá chủ yếu qua: | Khí khổng | Lớp cutin | Mạch rây | Lông hút
? O₂ trong quang hợp có nguồn gốc từ: | Nước (H₂O) | CO₂ | Glucose | Không khí
? Pha sáng của quang hợp diễn ra ở: | Màng thylakoid | Chất nền lục lạp | Ti thể | Tế bào chất
? Cây hấp thụ nitrogen ở dạng: | NH₄⁺ và NO₃⁻ | N₂ | NO₂ | N₂O
? Thực vật CAM (dứa, xương rồng) mở khí khổng vào: | Ban đêm | Ban ngày | Cả ngày | Không bao giờ
+ Thoát hơi nước tạo động lực đầu trên cho dòng mạch gỗ.
- Pha tối quang hợp diễn ra trên màng thylakoid.
= Pha sáng = Thylakoid, tạo ATP, NADPH, O₂
= Pha tối = Chất nền lục lạp, cố định CO₂
= Mạch gỗ = Vận chuyển nước, khoáng
= Mạch rây = Vận chuyển chất hữu cơ
? Quá trình thoát hơi nước chủ yếu qua: | Khí khổng | Rễ | Thân gỗ | Quả
? Pha tối (chu trình Calvin) của quang hợp diễn ra ở: | Chất nền lục lạp | Màng thylakoid | Ti thể | Nhân
? Sắc tố quang hợp chính là: | Diệp lục | Hemoglobin | Melanin | Insulin
? Nguyên tố khoáng đa lượng là: | Nitrogen, phosphorus, potassium | Sắt, kẽm | Iodine | Đồng
+ Thoát hơi nước giúp vận chuyển nước và hạ nhiệt cho lá.
- Hô hấp ở thực vật không tạo ra CO₂.
= C3 = Sản phẩm đầu tiên là hợp chất 3C
= C4 = Thích nghi khí hậu nóng, cường độ ánh sáng cao
= CAM = Mở khí khổng ban đêm, như xương rồng, dứa` },
    { hk: 1, nhan: 'Chương 1 (tiếp)', ten: 'Trao đổi chất và chuyển hoá năng lượng ở động vật', bai: ['Bài 8. Dinh dưỡng và tiêu hoá ở động vật', 'Bài 9. Hô hấp ở động vật', 'Bài 10. Tuần hoàn ở động vật', 'Bài 11. Thực hành: Một số thí nghiệm về tuần hoàn', 'Bài 12. Miễn dịch ở người và động vật', 'Bài 13. Bài tiết và cân bằng nội môi'],
      lt: ['Tiêu hoá: nội bào (động vật đơn bào) → túi tiêu hoá → ống tiêu hoá.', 'Hô hấp: qua bề mặt cơ thể, hệ thống ống khí (côn trùng), mang (cá), phổi (bò sát, chim, thú).', 'Tuần hoàn hở và kín; tuần hoàn đơn (cá) và kép (lưỡng cư, bò sát, chim, thú). Tim có tính tự động.', '<b>Miễn dịch</b>: không đặc hiệu (da, niêm mạc, thực bào) và đặc hiệu (dịch thể – kháng thể, tế bào – tế bào T). Vaccine tạo miễn dịch chủ động.', 'Cân bằng nội môi: thận, gan, phổi điều hoà áp suất thẩm thấu, pH, đường huyết.'],
      q: `? Côn trùng hô hấp bằng: | Hệ thống ống khí | Mang | Phổi | Da
? Cá có hệ tuần hoàn: | Kín, đơn | Hở | Kín, kép | Không có
? Kháng thể do loại tế bào nào tạo ra? | Tế bào B (tương bào) | Hồng cầu | Tiểu cầu | Tế bào thần kinh
? Chim hô hấp hiệu quả nhờ: | Phổi và hệ thống túi khí | Mang | Da | Ống khí
? Hormone làm giảm đường huyết là: | Insulin | Glucagon | Adrenaline | Thyroxine
+ Tim có khả năng co dãn tự động theo chu kì.
- Côn trùng hô hấp bằng mang.
= Mang = Cá
= Ống khí = Côn trùng
= Phổi + túi khí = Chim
= Insulin = Giảm đường huyết
= Glucagon = Tăng đường huyết
? Ruột non là nơi: | Tiêu hoá và hấp thụ chất dinh dưỡng chủ yếu | Chỉ chứa thức ăn | Thải phân | Trao đổi khí
? Ở người, trao đổi khí diễn ra ở: | Phế nang | Khí quản | Thanh quản | Mũi
? Tim người có mấy ngăn? | 4 | 2 | 3 | 5
? Máu từ tâm thất trái đi vào: | Động mạch chủ | Động mạch phổi | Tĩnh mạch chủ | Tâm nhĩ phải
? Tế bào máu có chức năng vận chuyển oxygen là: | Hồng cầu | Bạch cầu | Tiểu cầu | Tế bào gan
? Cơ quan bài tiết chính lọc máu tạo nước tiểu là: | Thận | Gan | Phổi | Dạ dày
? Huyết áp tâm thu ở người trưởng thành bình thường khoảng: | 110–120 mmHg | 200 mmHg | 30 mmHg | 300 mmHg
+ Bạch cầu tham gia bảo vệ cơ thể.
- Cá hô hấp chủ yếu bằng phổi.
= Hồng cầu = Vận chuyển O₂
= Bạch cầu = Bảo vệ cơ thể
= Tiểu cầu = Đông máu` },
    { hk: 2, nhan: 'Chương 2', ten: 'Cảm ứng ở sinh vật', bai: ['Bài 14. Khái quát về cảm ứng ở sinh vật', 'Bài 15. Cảm ứng ở thực vật', 'Bài 16. Cảm ứng ở động vật', 'Bài 17. Thực hành: Cảm ứng ở sinh vật', 'Bài 18. Tập tính ở động vật'],
      lt: ['Thực vật: <b>hướng động</b> (hướng sáng, hướng trọng lực, hướng nước, hướng tiếp xúc) và <b>ứng động</b> (cụp lá cây trinh nữ, nở hoa).', 'Động vật: hệ thần kinh dạng lưới, chuỗi hạch, dạng ống. Phản xạ (cung phản xạ); điện thế nghỉ, điện thế hoạt động; synapse.', '<b>Tập tính</b>: bẩm sinh và học được (in vết, điều kiện hoá, học khôn…).'],
      q: `? Ngọn cây hướng về phía ánh sáng là: | Hướng sáng dương | Hướng trọng lực | Ứng động | Hướng nước âm
? Lá cây trinh nữ cụp lại khi chạm vào là: | Ứng động | Hướng động | Tập tính | Phản xạ có điều kiện
? Hệ thần kinh dạng ống có ở: | Động vật có xương sống | Thuỷ tức | Giun dẹp | Côn trùng
? Tập tính ngỗng con đi theo vật chuyển động đầu tiên nó nhìn thấy là: | In vết | Bẩm sinh | Học khôn | Quen nhờn
+ Rễ cây có tính hướng trọng lực dương.
- Tập tính bẩm sinh là tập tính học được trong đời sống.
? Hướng động là phản ứng sinh trưởng của cây đối với: | Tác nhân kích thích từ một hướng | Không có kích thích | Chỉ nhiệt độ | Âm thanh
? Đơn vị cấu tạo của hệ thần kinh là: | Neuron | Nephron | Phế nang | Hồng cầu
? Phản xạ là: | Phản ứng của cơ thể trả lời kích thích qua hệ thần kinh | Sự sinh trưởng | Sự tiêu hoá | Sự bài tiết
? Phản xạ có điều kiện được hình thành: | Qua học tập, rèn luyện | Bẩm sinh | Không cần kích thích | Di truyền
+ Synapse là nơi truyền tin giữa các neuron.
- Phản xạ không điều kiện là do học tập mà có.` },
    { hk: 2, nhan: 'Chương 3, 4, 5', ten: 'Sinh trưởng, phát triển và sinh sản ở sinh vật', bai: ['Bài 19. Khái quát về sinh trưởng và phát triển ở sinh vật', 'Bài 20. Sinh trưởng và phát triển ở thực vật', 'Bài 22. Sinh trưởng và phát triển ở động vật', 'Bài 24. Khái quát về sinh sản ở sinh vật', 'Bài 25. Sinh sản ở thực vật', 'Bài 27. Sinh sản ở động vật', 'Bài 28. Mối quan hệ giữa các quá trình sinh lí trong cơ thể sinh vật', 'Bài 29. Một số ngành nghề liên quan đến sinh học cơ thể'],
      lt: ['Mô phân sinh đỉnh (sinh trưởng sơ cấp), mô phân sinh bên (sinh trưởng thứ cấp – tăng đường kính). Hormone thực vật: auxin, gibberellin, cytokinin (kích thích); abscisic acid, ethylene (ức chế, ethylene làm quả chín).', 'Động vật: biến thái hoàn toàn (bướm), không hoàn toàn (châu chấu), không qua biến thái (người). Hormone: GH, thyroxine, testosterone, estrogen.', 'Sinh sản vô tính (giâm, chiết, ghép, nuôi cấy mô) và hữu tính (thụ phấn, thụ tinh kép ở thực vật hạt kín).'],
      q: `? Hormone thực vật thúc đẩy quả chín là: | Ethylene | Auxin | Gibberellin | Cytokinin
? Mô phân sinh bên giúp cây: | Tăng đường kính thân | Tăng chiều cao | Ra hoa | Hút nước
? Bướm phát triển qua: | Biến thái hoàn toàn | Biến thái không hoàn toàn | Không qua biến thái | Phân đôi
? Thụ tinh kép là đặc trưng của: | Thực vật hạt kín | Rêu | Dương xỉ | Thực vật hạt trần
? Hormone sinh trưởng (GH) do tuyến nào tiết ra? | Tuyến yên | Tuyến giáp | Tuyến tuỵ | Tuyến trên thận
+ Nuôi cấy mô là hình thức sinh sản vô tính.
- Ethylene kích thích cây ra rễ cành giâm.
= Auxin = Kích thích ra rễ, hướng động
= Gibberellin = Kéo dài thân, nảy mầm
= Ethylene = Làm quả chín
= Abscisic acid = Đóng khí khổng, ngủ nghỉ
? Hormone kích thích sinh trưởng chiều cao ở người là: | GH (hormone sinh trưởng) | Insulin | Adrenaline | Glucagon
? Hormone thực vật kích thích ra rễ cành giâm là: | Auxin | Ethylene | Abscisic acid | Cytokinin
? Hormone làm quả chín nhanh là: | Ethylene | Auxin | Gibberellin | Cytokinin
? Biến thái hoàn toàn ở côn trùng (như bướm) gồm: | Trứng – sâu – nhộng – bướm | Trứng – bướm | Sâu – trứng | Nhộng – trứng
? Sinh sản vô tính tạo ra con cháu: | Giống hệt nhau và giống mẹ | Đa dạng di truyền | Không sống được | Luôn khác loài
? Giâm, chiết, ghép cành là hình thức: | Sinh sản sinh dưỡng nhân tạo | Sinh sản hữu tính | Thụ phấn | Nảy mầm hạt
+ Gibberellin kích thích sinh trưởng chiều cao của thân.
- Sinh sản hữu tính không có sự kết hợp giao tử.` }
  ],
  essays: {
    1: [['Trình bày con đường hấp thụ, vận chuyển nước từ đất vào rễ, lên lá và thoát ra ngoài.', ['lông hút', 'mạch gỗ', 'khí khổng', 'thoát hơi nước'], 'Nước từ đất vào tế bào lông hút (thẩm thấu) → qua vỏ rễ (con đường gian bào, tế bào chất) → mạch gỗ rễ → mạch gỗ thân → lá → thoát ra ngoài chủ yếu qua khí khổng; động lực: áp suất rễ, lực liên kết, lực hút do thoát hơi nước.'],
      ['Phân biệt miễn dịch không đặc hiệu và miễn dịch đặc hiệu.', ['bẩm sinh', 'kháng thể', 'tế bào T', 'thực bào'], 'Không đặc hiệu: bẩm sinh, không cần tiếp xúc trước, chống mọi tác nhân (da, niêm mạc, thực bào, phản ứng viêm). Đặc hiệu: hình thành khi tiếp xúc kháng nguyên, chống tác nhân cụ thể (dịch thể – kháng thể do tế bào B; tế bào – tế bào T).']],
    2: [['Phân biệt hướng động và ứng động ở thực vật, cho ví dụ.', ['hướng động', 'ứng động', 'tác nhân'], 'Hướng động: phản ứng sinh trưởng theo hướng xác định của tác nhân kích thích (ngọn hướng sáng, rễ hướng trọng lực). Ứng động: phản ứng với tác nhân không định hướng (lá trinh nữ cụp, hoa nở theo nhiệt độ).'],
      ['Nêu ứng dụng hiểu biết về hormone thực vật trong sản xuất nông nghiệp.', ['auxin', 'ethylene', 'gibberellin'], 'Auxin kích thích ra rễ cành giâm, tạo quả không hạt; gibberellin kích thích nảy mầm, tăng chiều cao; cytokinin trong nuôi cấy mô; ethylene thúc quả chín đồng loạt; điều khiển ra hoa trái vụ.']]
  }
});

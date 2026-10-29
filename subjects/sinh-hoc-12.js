/* Sinh học 12 – KNTT. Phần, chương, bài theo mục lục SGK; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'sinh-hoc-12', lop: 12, mon: 'Sinh học', icon: '🧬', nhan: 'Chương', so: false,
  topics: [
    { hk: 1, nhan: 'Chương 1', ten: 'Di truyền phân tử', bai: ['Bài 1. DNA và cơ chế tái bản DNA', 'Bài 2. Gene, quá trình truyền đạt thông tin di truyền và hệ gene', 'Bài 3. Điều hoà biểu hiện gene', 'Bài 4. Đột biến gene', 'Bài 5. Công nghệ gene', 'Bài 6. Thực hành: Tách chiết DNA'],
      lt: ['DNA: chuỗi xoắn kép, nucleotide A, T, G, C; liên kết bổ sung A=T (2 liên kết hydrogen), G≡C (3 liên kết). Tái bản theo nguyên tắc <b>bổ sung</b> và <b>bán bảo toàn</b>.', 'Phiên mã (DNA → mRNA), dịch mã (mRNA → protein); mã di truyền là mã bộ ba, có 64 bộ ba, 3 bộ ba kết thúc (UAA, UAG, UGA), bộ ba mở đầu AUG.', 'Điều hoà biểu hiện gene: mô hình <b>operon lac</b> ở E. coli.', 'Đột biến gene: thay thế, thêm, mất một hoặc vài cặp nucleotide. Công nghệ gene: tạo DNA tái tổ hợp, sinh vật biến đổi gene.'],
      q: `? Trong phân tử DNA, G liên kết với C bằng bao nhiêu liên kết hydrogen? | 3 | 2 | 1 | 4
? Nguyên tắc tái bản DNA là: | Bổ sung và bán bảo toàn | Bảo toàn hoàn toàn | Ngẫu nhiên | Phân tán
? Bộ ba mở đầu trên mRNA là: | AUG | UAA | UGA | UAG
? Quá trình tổng hợp protein từ mRNA là: | Dịch mã | Phiên mã | Tái bản | Đột biến
? Một gene có 3 000 nucleotide, trong đó A = 600. Số nucleotide loại G là: | 900 | 600 | 1 500 | 2 400
+ Mã di truyền có tính phổ biến, đặc hiệu và thoái hoá.
- Mỗi axit amin chỉ được mã hoá bởi đúng một bộ ba.
= Tái bản = DNA → DNA
= Phiên mã = DNA → mRNA
= Dịch mã = mRNA → chuỗi polypeptide
= UAA, UAG, UGA = Bộ ba kết thúc` },
    { hk: 1, nhan: 'Chương 2, 3', ten: 'Di truyền nhiễm sắc thể và mở rộng học thuyết di truyền', bai: ['Bài 7. Cấu trúc và chức năng của nhiễm sắc thể', 'Bài 8. Học thuyết di truyền Mendel', 'Bài 9. Mở rộng học thuyết Mendel', 'Bài 10. Di truyền liên kết giới tính, liên kết gene và hoán vị gene', 'Bài 12. Đột biến nhiễm sắc thể', 'Bài 13. Di truyền học người và di truyền y học', 'Bài 15. Di truyền gene ngoài nhân', 'Bài 16. Tương tác giữa kiểu gene với môi trường và thành tựu chọn giống'],
      lt: ['Mendel: quy luật phân li (3 : 1), phân li độc lập (9 : 3 : 3 : 1). Lai phân tích để kiểm tra kiểu gene.', 'Mở rộng: trội không hoàn toàn (1 : 2 : 1), đồng trội, tương tác gene, đa hiệu.', 'Liên kết gene hoàn toàn, hoán vị gene (tần số f ≤ 50%); di truyền liên kết với giới tính (gene trên X: mù màu, máu khó đông).', 'Đột biến NST: cấu trúc (mất, lặp, đảo, chuyển đoạn) và số lượng (lệch bội: Down 2n+1 NST 21, Turner XO; đa bội).', 'Gene ngoài nhân (ti thể, lục lạp) di truyền theo dòng mẹ. Thường biến: biến đổi kiểu hình do môi trường, không di truyền; mức phản ứng do kiểu gene quy định.'],
      q: `? Phép lai Aa × Aa (trội hoàn toàn) cho tỉ lệ kiểu hình: | 3 : 1 | 1 : 1 | 1 : 2 : 1 | 9 : 3 : 3 : 1
? Phép lai AaBb × AaBb (phân li độc lập, trội hoàn toàn) cho tỉ lệ kiểu hình: | 9 : 3 : 3 : 1 | 3 : 1 | 1 : 1 : 1 : 1 | 1 : 2 : 1
? Lai phân tích là lai cá thể mang tính trạng trội với cá thể: | Đồng hợp lặn | Đồng hợp trội | Dị hợp | Bất kì
? Bệnh máu khó đông do gene nằm trên: | NST X | NST Y | NST thường số 21 | Ti thể
? Hội chứng Down do: | Ba NST số 21 | Mất một NST X | Ba NST giới tính XXX | Đột biến gene
? Gene trong ti thể di truyền theo: | Dòng mẹ | Dòng bố | Cả bố và mẹ như nhau | Ngẫu nhiên
+ Tần số hoán vị gene không vượt quá 50%.
+ Thường biến không di truyền được.
- Gene ngoài nhân di truyền theo dòng bố.
= Aa × aa = Lai phân tích, tỉ lệ 1 : 1
= Trội không hoàn toàn = F₂ tỉ lệ 1 : 2 : 1
= Down = Ba NST số 21
= Turner = XO` },
    { hk: 1, nhan: 'Chương 4', ten: 'Di truyền quần thể', bai: ['Bài 18. Di truyền học quần thể'],
      lt: ['Quần thể đặc trưng bởi vốn gene, tần số allele, tần số kiểu gene.', 'Quần thể tự thụ phấn: tỉ lệ dị hợp giảm dần, đồng hợp tăng dần.', '<b>Định luật Hardy – Weinberg</b>: quần thể ngẫu phối ở trạng thái cân bằng có cấu trúc p²AA + 2pqAa + q²aa = 1 (p + q = 1).'],
      q: `? Quần thể cân bằng Hardy – Weinberg có cấu trúc: | p²AA + 2pqAa + q²aa = 1 | pAA + qaa = 1 | p²AA + q²aa = 1 | 2pAA + qaa = 1
? Quần thể có p(A) = 0,6 ở trạng thái cân bằng thì tần số kiểu gene Aa là: | 0,48 | 0,36 | 0,16 | 0,24
? Qua các thế hệ tự thụ phấn, tỉ lệ kiểu gene dị hợp: | Giảm dần | Tăng dần | Không đổi | Bằng 0 ngay
+ Tổng tần số các allele của một gene trong quần thể bằng 1.
- Ngẫu phối làm thay đổi tần số allele qua các thế hệ.` },
    { hk: 2, nhan: 'Chương 5', ten: 'Tiến hoá', bai: ['Bài 19. Các bằng chứng tiến hoá', 'Bài 20. Quan niệm của Darwin về chọn lọc tự nhiên và hình thành loài', 'Bài 21. Học thuyết tiến hoá tổng hợp hiện đại', 'Bài 22. Tiến hoá lớn và quá trình phát sinh chủng loại'],
      lt: ['Bằng chứng: hoá thạch, giải phẫu so sánh (cơ quan tương đồng, cơ quan thoái hoá), tế bào học, sinh học phân tử.', 'Darwin: <b>chọn lọc tự nhiên</b> giữ lại biến dị có lợi, đào thải biến dị có hại.', 'Thuyết tiến hoá tổng hợp: tiến hoá nhỏ (biến đổi vốn gene quần thể); nhân tố tiến hoá: đột biến, di – nhập gene, chọn lọc tự nhiên, phiêu bạt di truyền, giao phối không ngẫu nhiên. Cách li sinh sản → hình thành loài mới.'],
      q: `? Cánh dơi và tay người là ví dụ về: | Cơ quan tương đồng | Cơ quan tương tự | Cơ quan thoái hoá | Hoá thạch
? Nhân tố tiến hoá tạo nguồn nguyên liệu sơ cấp là: | Đột biến | Chọn lọc tự nhiên | Giao phối ngẫu nhiên | Cách li
? Theo thuyết tiến hoá tổng hợp, đơn vị tiến hoá cơ sở là: | Quần thể | Cá thể | Loài | Tế bào
? Dấu hiệu cơ bản để phân biệt hai loài là: | Cách li sinh sản | Màu sắc | Kích thước | Nơi sống
+ Chọn lọc tự nhiên là nhân tố tiến hoá có hướng.
- Thường biến là nguyên liệu chủ yếu của tiến hoá.
= Đột biến = Nguyên liệu sơ cấp
= Chọn lọc tự nhiên = Định hướng tiến hoá
= Phiêu bạt di truyền = Thay đổi ngẫu nhiên tần số allele` },
    { hk: 2, nhan: 'Chương 6, 7, 8', ten: 'Sinh thái học và phát triển bền vững', bai: ['Bài 23. Môi trường và các nhân tố sinh thái', 'Bài 24. Sinh thái học quần thể', 'Bài 26. Quần xã sinh vật', 'Bài 27. Hệ sinh thái', 'Bài 28. Trao đổi vật chất và chuyển hoá năng lượng trong hệ sinh thái', 'Bài 29. Chu trình sinh địa hoá và sinh quyển', 'Bài 30. Diễn thế sinh thái', 'Bài 33. Sinh thái học phục hồi và bảo tồn', 'Bài 34. Phát triển bền vững'],
      lt: ['Giới hạn sinh thái; nhân tố vô sinh, hữu sinh. Quần thể: kích thước, mật độ, tỉ lệ giới tính, cấu trúc tuổi; tăng trưởng hình chữ J, chữ S.', 'Quan hệ trong quần xã: cạnh tranh, kí sinh, vật ăn thịt – con mồi, cộng sinh, hợp tác, hội sinh, ức chế cảm nhiễm.', 'Chuỗi, lưới thức ăn; bậc dinh dưỡng; năng lượng truyền qua các bậc giảm dần (hiệu suất khoảng 10%). Chu trình carbon, nitrogen, nước.', 'Diễn thế nguyên sinh, thứ sinh. Phát triển bền vững: đáp ứng nhu cầu hiện tại mà không làm tổn hại thế hệ tương lai.'],
      q: `? Quan hệ giữa nấm và tảo trong địa y là: | Cộng sinh | Kí sinh | Cạnh tranh | Vật ăn thịt – con mồi
? Hiệu suất sinh thái giữa hai bậc dinh dưỡng liên tiếp thường khoảng: | 10% | 90% | 50% | 100%
? Diễn thế bắt đầu từ môi trường chưa có sinh vật là: | Diễn thế nguyên sinh | Diễn thế thứ sinh | Diễn thế phân huỷ | Không có
? Sinh vật sản xuất trong hệ sinh thái chủ yếu là: | Thực vật | Động vật ăn thịt | Nấm | Vi khuẩn phân giải
? Trong điều kiện môi trường không bị giới hạn, quần thể tăng trưởng theo đường cong: | Chữ J | Chữ S | Chữ U | Đường thẳng
+ Năng lượng giảm dần qua các bậc dinh dưỡng.
- Chu trình sinh địa hoá chỉ có ở hệ sinh thái dưới nước.
= Cộng sinh = Hai loài cùng có lợi, bắt buộc
= Kí sinh = Một loài có lợi, một loài có hại
= Hội sinh = Một loài có lợi, loài kia không lợi không hại
= Cạnh tranh = Hai loài cùng bị hại` }
  ],
  essays: {
    1: [['Một gene có 2 400 nucleotide, trong đó A = 480. Tính số nucleotide mỗi loại và số liên kết hydrogen của gene.', ['480', '720', '3120'], 'A = T = 480; G = X = (2 400 − 2·480)/2 = 720. Số liên kết hydrogen H = 2A + 3G = 960 + 2 160 = 3 120.'],
      ['Ở người, bệnh máu khó đông do allele lặn h trên NST X. Mẹ bình thường mang gene bệnh (XᴴXʰ), bố bình thường (XᴴY). Xác định xác suất sinh con trai bị bệnh.', ['XʰY', '25%', '1/4'], 'P: XᴴXʰ × XᴴY → con: XᴴXᴴ, XᴴXʰ, XᴴY, XʰY (mỗi loại 1/4). Xác suất sinh con trai bị bệnh (XʰY) = 1/4 = 25% (trong số con trai là 1/2).']],
    2: [['Trình bày vai trò của các nhân tố tiến hoá theo thuyết tiến hoá tổng hợp.', ['đột biến', 'chọn lọc tự nhiên', 'di – nhập gene', 'phiêu bạt'], 'Đột biến: tạo nguyên liệu sơ cấp; giao phối không ngẫu nhiên: thay đổi tần số kiểu gene; di – nhập gene: thay đổi tần số allele; chọn lọc tự nhiên: định hướng, giữ lại kiểu gene thích nghi; phiêu bạt di truyền: thay đổi ngẫu nhiên tần số allele, rõ ở quần thể nhỏ.'],
      ['Phát triển bền vững là gì? Nêu các biện pháp bảo vệ đa dạng sinh học.', ['bền vững', 'bảo tồn', 'đa dạng sinh học'], 'Phát triển đáp ứng nhu cầu hiện tại mà không ảnh hưởng khả năng đáp ứng nhu cầu của thế hệ sau. Biện pháp: bảo tồn tại chỗ (vườn quốc gia, khu bảo tồn), chuyển chỗ (vườn thú, ngân hàng gene), chống săn bắt, buôn bán trái phép, phục hồi hệ sinh thái, giáo dục cộng đồng.']]
  }
});

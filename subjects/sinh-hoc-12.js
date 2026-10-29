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
= UAA, UAG, UGA = Bộ ba kết thúc
? Mã di truyền là mã bộ ba, nghĩa là: | Ba nucleotide liên tiếp mã hoá một amino acid | Ba gene mã hoá một protein | Ba amino acid | Ba NST
? Quá trình tổng hợp RNA từ DNA gọi là: | Phiên mã | Dịch mã | Nhân đôi | Đột biến
? Quá trình tổng hợp protein từ mRNA gọi là: | Dịch mã | Phiên mã | Nhân đôi DNA | Giảm phân
? Theo nguyên tắc bổ sung trong DNA, A liên kết với: | T | G | C | U
? Nhân đôi DNA diễn ra theo nguyên tắc: | Bổ sung và bán bảo toàn | Chỉ bảo toàn | Ngẫu nhiên | Không có nguyên tắc
? Đột biến gene là: | Biến đổi trong cấu trúc gene | Biến đổi số lượng NST | Thay đổi môi trường | Thường biến
+ Mã di truyền có tính thoái hoá (nhiều bộ ba cùng mã hoá một amino acid).
- Trong RNA có base thymine (T).
= DNA → RNA = Phiên mã
= mRNA → protein = Dịch mã
= DNA → DNA = Nhân đôi
? Quá trình tổng hợp RNA dựa trên khuôn DNA gọi là: | Phiên mã | Dịch mã | Tái bản | Đột biến
? Quá trình tổng hợp protein tại ribosome gọi là: | Dịch mã | Phiên mã | Tái bản | Nhân đôi
? Theo nguyên tắc bổ sung, A liên kết với: | T (trong DNA) | G | C | A
? Đột biến gen là: | Biến đổi trong cấu trúc gen | Thay đổi kiểu hình do môi trường | Thay đổi số lượng NST | Thường biến
+ Mã di truyền có tính phổ biến ở hầu hết sinh vật.
- Bộ ba UAA mã hoá amino acid methionine.
> Tái bản DNA > Phiên mã tạo mRNA > Dịch mã tạo protein` },
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
= Turner = XO
? Phép lai một cặp tính trạng của Mendel, F₂ có tỉ lệ kiểu hình: | 3 : 1 | 1 : 1 | 9 : 3 : 3 : 1 | 1 : 2 : 1 luôn luôn
? Kiểu gene Aa được gọi là: | Dị hợp | Đồng hợp trội | Đồng hợp lặn | Thuần chủng
? Lai phân tích là phép lai giữa cá thể mang tính trạng trội với: | Cá thể mang tính trạng lặn | Cá thể trội | Bất kì cá thể | Bố mẹ
? Ở người, giới tính nam có cặp NST giới tính: | XY | XX | XO | YY
? Bệnh máu khó đông ở người do gene lặn nằm trên: | NST X | NST Y | NST thường | Ti thể
? Thường biến là: | Biến đổi kiểu hình do môi trường, không di truyền | Đột biến gene | Đột biến NST | Biến dị tổ hợp
+ Liên kết gene hoàn toàn hạn chế xuất hiện biến dị tổ hợp.
- Thường biến di truyền được cho đời sau.
? Phép lai Aa × Aa cho tỉ lệ kiểu hình (trội hoàn toàn) là: | 3 trội : 1 lặn | 1 : 1 | 1 : 2 : 1 | 9 : 3 : 3 : 1
? Phép lai Aa × aa cho tỉ lệ kiểu gene: | 1 Aa : 1 aa | 3 : 1 | 1 : 2 : 1 | 100% Aa
? Gen nằm trên NST X không có alen trên Y di truyền: | Chéo | Thẳng | Không di truyền | Chỉ qua mẹ sang con gái
? Thể đa bội thường gặp ở: | Thực vật | Động vật bậc cao | Người | Vi khuẩn
+ Mendel nghiên cứu di truyền trên đậu Hà Lan.
- Bệnh máu khó đông ở người do gen trên NST Y.` },
    { hk: 1, nhan: 'Chương 4', ten: 'Di truyền quần thể', bai: ['Bài 18. Di truyền học quần thể'],
      lt: ['Quần thể đặc trưng bởi vốn gene, tần số allele, tần số kiểu gene.', 'Quần thể tự thụ phấn: tỉ lệ dị hợp giảm dần, đồng hợp tăng dần.', '<b>Định luật Hardy – Weinberg</b>: quần thể ngẫu phối ở trạng thái cân bằng có cấu trúc p²AA + 2pqAa + q²aa = 1 (p + q = 1).'],
      q: `? Quần thể cân bằng Hardy – Weinberg có cấu trúc: | p²AA + 2pqAa + q²aa = 1 | pAA + qaa = 1 | p²AA + q²aa = 1 | 2pAA + qaa = 1
? Quần thể có p(A) = 0,6 ở trạng thái cân bằng thì tần số kiểu gene Aa là: | 0,48 | 0,36 | 0,16 | 0,24
? Qua các thế hệ tự thụ phấn, tỉ lệ kiểu gene dị hợp: | Giảm dần | Tăng dần | Không đổi | Bằng 0 ngay
+ Tổng tần số các allele của một gene trong quần thể bằng 1.
- Ngẫu phối làm thay đổi tần số allele qua các thế hệ.
? Quần thể ở trạng thái cân bằng Hardy – Weinberg có cấu trúc: | p²AA + 2pqAa + q²aa = 1 | pAA + qaa = 1 | AA + aa = 1 | 2pAA + qaa = 1
? Quần thể có p(A) = 0,6. Tần số allele a là: | 0,4 | 0,6 | 0,36 | 0,16
? Tự thụ phấn qua nhiều thế hệ làm: | Tăng tỉ lệ đồng hợp, giảm dị hợp | Tăng dị hợp | Không đổi | Tăng đột biến
? Ứng dụng của di truyền học trong chọn giống là: | Tạo giống mới năng suất cao | Gây bệnh di truyền | Làm giảm đa dạng | Tăng thiên tai
+ Kĩ thuật chuyển gene tạo ra sinh vật biến đổi gene.
- Giao phối gần làm tăng sức sống ở đời con.
_ Nếu p = 0,7 thì q = [0,3]
? Quần thể có thành phần kiểu gene 0,36 AA : 0,48 Aa : 0,16 aa. Tần số allele A là: | 0,6 | 0,4 | 0,36 | 0,5
? Quần thể cân bằng di truyền theo Hardy – Weinberg có cấu trúc: | p²AA + 2pqAa + q²aa = 1 | pAA + qaa = 1 | p + q = 2 | AA = aa
+ Kết hôn gần làm tăng nguy cơ xuất hiện bệnh di truyền lặn.
- Giao phối ngẫu nhiên làm thay đổi tần số allele qua các thế hệ.` },
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
= Phiêu bạt di truyền = Thay đổi ngẫu nhiên tần số allele
? Theo Darwin, nhân tố chính hình thành loài là: | Chọn lọc tự nhiên | Đột biến nhân tạo | Ăn uống | Khí hậu ổn định
? Nhân tố tiến hoá cung cấp nguyên liệu sơ cấp là: | Đột biến | Chọn lọc tự nhiên | Di – nhập gene | Giao phối ngẫu nhiên
? Cơ quan tương đồng là các cơ quan: | Cùng nguồn gốc, có thể khác chức năng | Khác nguồn gốc, cùng chức năng | Thoái hoá | Không tồn tại
? Cánh dơi và cánh chim là ví dụ về cơ quan: | Tương đồng (chi trước) | Tương tự | Thoái hoá | Không liên quan
? Cách li sinh sản là dấu hiệu: | Hình thành loài mới | Tuyệt chủng | Không tiến hoá | Thường biến
+ Hoá thạch là bằng chứng trực tiếp về lịch sử sự sống.
- Chọn lọc tự nhiên tạo ra đột biến mới.
? Nhân tố tiến hoá có hướng là: | Chọn lọc tự nhiên | Đột biến | Phiêu bạt di truyền | Di – nhập gene
? Nguồn nguyên liệu sơ cấp của tiến hoá là: | Đột biến | Thường biến | Chọn lọc | Cách li
? Cơ quan tương đồng là bằng chứng của: | Nguồn gốc chung | Tiến hoá hội tụ | Đột biến | Thường biến
? Hoá thạch là bằng chứng: | Trực tiếp về lịch sử sự sống | Gián tiếp | Không có giá trị | Chỉ về địa chất
+ Cách li sinh sản đánh dấu sự hình thành loài mới.` },
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
= Cạnh tranh = Hai loài cùng bị hại
? Nhân tố sinh thái vô sinh là: | Ánh sáng, nhiệt độ, độ ẩm | Vi khuẩn | Động vật ăn thịt | Con người
? Mối quan hệ cùng có lợi giữa hai loài là: | Cộng sinh | Kí sinh | Cạnh tranh | Vật ăn thịt – con mồi
? Trong chuỗi thức ăn, sinh vật sản xuất là: | Thực vật | Động vật ăn thịt | Vi khuẩn phân giải | Nấm kí sinh
? Năng lượng truyền qua mỗi bậc dinh dưỡng chỉ khoảng: | 10% | 90% | 50% | 100%
? Hiệu ứng nhà kính chủ yếu do tăng khí: | CO₂ | O₂ | N₂ | He
? Biện pháp phát triển bền vững là: | Sử dụng hợp lí tài nguyên, bảo tồn đa dạng sinh học | Khai thác rừng tối đa | Xả thải không xử lí | Săn bắt động vật quý
+ Diễn thế sinh thái là quá trình biến đổi tuần tự của quần xã.
- Năng lượng trong hệ sinh thái được tuần hoàn khép kín.
? Sinh vật sản xuất trong hệ sinh thái là: | Thực vật xanh | Động vật ăn thịt | Nấm hoại sinh | Vi khuẩn phân giải
? Sinh vật phân giải trong hệ sinh thái là: | Vi khuẩn, nấm | Cây xanh | Hổ | Thỏ
? Mối quan hệ giữa vi khuẩn cố định đạm và cây họ Đậu là: | Cộng sinh | Kí sinh | Cạnh tranh | Ức chế
? Năng lượng chuyển sang bậc dinh dưỡng kế tiếp thường chỉ khoảng: | 10% | 50% | 90% | 100%
? Hiệu ứng nhà kính chủ yếu do khí: | CO₂ | O₂ | N₂ | Ar
+ Bảo vệ đa dạng sinh học góp phần phát triển bền vững.
> Cỏ > Thỏ > Cáo > Vi khuẩn phân giải` }
  ],
  essays: {
    1: [['Một gene có 2 400 nucleotide, trong đó A = 480. Tính số nucleotide mỗi loại và số liên kết hydrogen của gene.', ['480', '720', '3120'], 'A = T = 480; G = X = (2 400 − 2·480)/2 = 720. Số liên kết hydrogen H = 2A + 3G = 960 + 2 160 = 3 120.'],
      ['Ở người, bệnh máu khó đông do allele lặn h trên NST X. Mẹ bình thường mang gene bệnh (XᴴXʰ), bố bình thường (XᴴY). Xác định xác suất sinh con trai bị bệnh.', ['XʰY', '25%', '1/4'], 'P: XᴴXʰ × XᴴY → con: XᴴXᴴ, XᴴXʰ, XᴴY, XʰY (mỗi loại 1/4). Xác suất sinh con trai bị bệnh (XʰY) = 1/4 = 25% (trong số con trai là 1/2).']],
    2: [['Trình bày vai trò của các nhân tố tiến hoá theo thuyết tiến hoá tổng hợp.', ['đột biến', 'chọn lọc tự nhiên', 'di – nhập gene', 'phiêu bạt'], 'Đột biến: tạo nguyên liệu sơ cấp; giao phối không ngẫu nhiên: thay đổi tần số kiểu gene; di – nhập gene: thay đổi tần số allele; chọn lọc tự nhiên: định hướng, giữ lại kiểu gene thích nghi; phiêu bạt di truyền: thay đổi ngẫu nhiên tần số allele, rõ ở quần thể nhỏ.'],
      ['Phát triển bền vững là gì? Nêu các biện pháp bảo vệ đa dạng sinh học.', ['bền vững', 'bảo tồn', 'đa dạng sinh học'], 'Phát triển đáp ứng nhu cầu hiện tại mà không ảnh hưởng khả năng đáp ứng nhu cầu của thế hệ sau. Biện pháp: bảo tồn tại chỗ (vườn quốc gia, khu bảo tồn), chuyển chỗ (vườn thú, ngân hàng gene), chống săn bắt, buôn bán trái phép, phục hồi hệ sinh thái, giáo dục cộng đồng.']]
  }
});

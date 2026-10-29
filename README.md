# PLT-Edu – Cổng học tập & luyện thi

Web tĩnh (HTML/CSS/JS thuần, không cần build), chạy được bằng GitHub Pages hoặc mở trực tiếp `index.html`.

## Tính năng (đủ 149 môn học lớp 1–12 – bộ Kết nối tri thức / Global Success)
- **Phạm vi**: tiểu học 9–12 môn/lớp, THCS 12 môn/lớp, THPT 16 môn/lớp — tổng 149 môn, khoảng 3 900 bài theo mục lục SGK.
- **Học bài**: Toán lớp 1–12 (128 chủ đề, 575 bài) có mô phỏng tương tác (cấu tạo số, bảng nhân, đặt tính từng bước, đồng hồ, biểu đồ…); các môn khác có lý thuyết tóm tắt, ngân hàng câu hỏi theo chủ đề/chương/bài. Câu hỏi và lý thuyết do PLT-Edu tự biên soạn.
- **Ôn tập nhanh**: câu hỏi sinh ngẫu nhiên không giới hạn theo chủ đề / học kì / cả năm.
- **Kiểm tra**: đề theo tuần (35 tuần), tháng, giữa kỳ, cuối kỳ; đồng hồ đếm ngược, lưới câu hỏi, nộp bài, chấm điểm thang 10, xem lại bài.
  Dạng câu: trắc nghiệm, đúng/sai, điền số/điền từ, nối, sắp xếp, xếp nhóm, so sánh >, <, =, câu có hình, tự luận/viết đoạn.
- **AI chấm tự luận**: Gemini API (người dùng nhập khóa trong ⚙️ Cài đặt). Không có khóa → chấm sơ bộ theo đáp số.
- **Tiến độ**: sao theo chủ đề, lịch sử điểm (lưu trên trình duyệt).

## Cấu trúc
```
index.html              khung portal + nạp script
assets/css/style.css    giao diện
assets/js/core.js       tiện ích, lưu trữ, đăng ký môn, hình vẽ SVG
assets/js/widgets.js    mô phỏng tương tác
assets/js/engine.js     hiển thị/chấm câu hỏi, luyện tập, phòng thi, AI chấm
assets/js/app.js        điều hướng các trang
subjects/toan-N.js      dữ liệu Toán lớp N (chủ đề, bài, bộ sinh câu hỏi, đề tự luận); lịch tuần/tháng/kỳ dựng tự động bởi PLT.buildCourse
subjects/<mon>-N.js     các môn còn lại, viết bằng ngân hàng câu hỏi dạng dòng (PLT.KB.build / PLT.KB.eng)
assets/js/mathlib.js    bộ sinh câu hỏi dùng chung (tiểu học), biểu đồ cột
assets/js/tvlib.js      bộ sinh câu hỏi Tiếng Việt / Ngữ văn (biện pháp tu từ, đọc hiểu, dấu câu)
assets/js/kblib.js      dựng môn từ ngân hàng câu hỏi (trắc nghiệm, đúng/sai, nối, điền từ, sắp xếp, xếp nhóm, tự luận)
assets/js/avail.js      danh sách môn dùng ngân hàng câu hỏi
assets/js/eco.js        liên kết qua lại với AI Edu, nút đăng nhập
tools/bump-version.sh   đổi ?v= để trình duyệt tải bản mới (chạy trước mỗi lần commit)
```

## Thêm môn / lớp mới
1. Toán: tạo `subjects/toan-N.js`, gọi `PLT.buildCourse({ id, lop, mon, topics, gens, essays })` (xem `toan-3.js`).
2. Môn khác: tạo `subjects/<mon>-<lop>.js`, gọi `PLT.KB.build({ id, lop, mon, icon, topics, essays })` (xem `dia-li-10.js`), thêm id vào `assets/js/avail.js`.
   Cú pháp ngân hàng: `? câu | đúng | sai…`, `+ ý đúng`, `- ý sai`, `= trái = phải`, `_ câu có [đáp án]`, `> a > b > c`, `# Nhóm: a, b`.
3. Chạy `tools/bump-version.sh` rồi commit.

## Lưu ý
- Khóa Gemini nhập trên trình duyệt chỉ phù hợp dùng cá nhân/thử nghiệm. Khi mở cho nhiều học sinh, nên chuyển sang gọi qua một máy chủ trung gian (Vercel/Cloudflare Worker) để giấu khóa.
- Không đưa file PDF SGK lên repo (bản quyền NXB Giáo dục Việt Nam); nội dung lý thuyết được tóm tắt lại bằng lời mới.

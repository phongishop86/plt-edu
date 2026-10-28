# PLT-Edu – Cổng học tập & luyện thi

Web tĩnh (HTML/CSS/JS thuần, không cần build), chạy được bằng GitHub Pages hoặc mở trực tiếp `index.html`.

## Tính năng (bản nháp: Toán lớp 3 – bộ Kết nối tri thức)
- **Học bài**: 16 chủ đề / 81 bài theo mục lục SGK; lý thuyết tóm tắt, mô phỏng tương tác (cấu tạo số, bảng nhân, đặt tính từng bước, biểu thức, đồng hồ, chu vi – diện tích, bốc bi…), bài tập có lời giải.
- **Ôn tập nhanh**: câu hỏi sinh ngẫu nhiên không giới hạn theo chủ đề / học kì / cả năm.
- **Kiểm tra**: đề theo tuần (35 tuần), tháng, giữa kỳ, cuối kỳ; đồng hồ đếm ngược, lưới câu hỏi, nộp bài, chấm điểm thang 10, xem lại bài.
  Dạng câu: trắc nghiệm, điền số, nối, sắp xếp, xếp nhóm đúng/sai, so sánh >, <, =, câu có hình.
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
subjects/toan-3.js      dữ liệu môn Toán 3 (chủ đề, bài, bộ sinh câu hỏi, đề tự luận, phân phối tuần/tháng/kỳ)
```

## Thêm môn / lớp mới
1. Tạo `subjects/<mon>-<lop>.js`, gọi `PLT.registerSubject({ id, lop, mon, icon, bo, topics, bai, gens, essays, weeks, months, terms })` (xem `toan-3.js` làm mẫu).
2. Thêm `<script src="subjects/<mon>-<lop>.js"></script>` trong `index.html` (trước `app.js`).

## Lưu ý
- Khóa Gemini nhập trên trình duyệt chỉ phù hợp dùng cá nhân/thử nghiệm. Khi mở cho nhiều học sinh, nên chuyển sang gọi qua một máy chủ trung gian (Vercel/Cloudflare Worker) để giấu khóa.
- Không đưa file PDF SGK lên repo (bản quyền NXB Giáo dục Việt Nam); nội dung lý thuyết được tóm tắt lại bằng lời mới.

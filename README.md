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
- **🀄 Tiếng Trung** (`#/tieng-trung`): lộ trình 30 ngày cho người Việt, đủ Ngày 1–30 (Pinyin → câu cơ bản → giao tiếp đời sống → phản xạ, kiểm tra cuối khoá). Mỗi ngày 5 phần A Ôn tập · B Kiến thức mới · C Luyện tập · D Hội thoại từng lượt · E Kiểm tra, kèm báo cáo cuối buổi. Có trang luyện 4 thanh, bảng Pinyin, thẻ từ vựng, tóm tắt tiến độ để chép sang gia sư AI. Giọng đọc dùng Web Speech API của trình duyệt (miễn phí; Edge/Chrome có giọng zh-CN).
- **🌏 Ngoại ngữ** (`#/ngoai-ngu`): trang lộ trình tự học **Tiếng Trung · Tiếng Anh · Tiếng Hàn**, mỗi thứ tiếng 5 cấp từ cơ bản đến nâng cao (Trung: HSK 1–2 → HSK 7–9; Anh: CEFR A1 → C1–C2/IELTS 7.0+; Hàn: TOPIK 1 → TOPIK 5–6). Cấp 1 của cả 3 thứ tiếng đã mở đủ 30 ngày (`#/tieng-anh` có bảng IPA, `#/tieng-han` có bảng chữ Hangul). Tiếng Anh đã mở đủ 5 cấp A1 → C1 (150 ngày học): `#/tieng-anh`, `#/tieng-anh/c2` … `c5`, kèm 3 công cụ dùng chung: **Sổ tay ngữ pháp** (`#/tieng-anh/ngu-phap`), **Phát âm & ngữ điệu** (`#/tieng-anh/luyen-noi`) và **Luyện đề chứng chỉ** (`#/tieng-anh/luyen-de`). Nút 🎤 dùng Web Speech Recognition (Chrome/Edge, miễn phí) để so câu người học nói với câu mẫu.

- **🌏 Ngoại ngữ đủ 5 cấp cả 3 thứ tiếng** (Trung HSK 1–9, Anh A1–C1, Hàn TOPIK 1–6), lớp tương tác kiểu Duolingo và trang **🏆 Thành tích** (`#/ngoai-ngu/thanh-tich`): hạng, 16 huy hiệu, nhiệm vụ ngày.
- **🤖 AI Edu** (`ai/`): khoá học dùng AI an toàn cho 4 cấp (Tiểu học, THCS, THPT, Người đi làm) – gộp từ repo `plt-aiedu`, nội dung sửa trong `ai/assets/js/lessons-*.js` (xem `ai/README.md`).
- **👤 Tài khoản & đồng bộ** (`assets/js/eco.js`): đăng nhập Google / email qua Firebase, tự lưu tiến độ PLT-Edu + AI Edu lên Firestore `users/{uid}`. Cấu hình ở `assets/js/firebase-config.js` (để `null` thì chỉ lưu trên máy).

### Quy tắc bảo mật Firestore (dán vào Firestore → Rules)
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Quản trị viên: chỉ email này (đã xác minh) đọc được thống kê
    function isAdmin() {
      return request.auth != null && request.auth.token.email == 'phongishop86@gmail.com'
        && request.auth.token.email_verified == true;
    }
    function step(k) {
      return !(k in request.resource.data.diff(resource.data).affectedKeys())
        || request.resource.data[k] == resource.data.get(k, 0) + 1;
    }
    match /users/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
    // Bảng xếp hạng XP tháng: ai đăng nhập cũng xem được; mỗi người chỉ ghi/xoá dòng của mình
    match /boards/{m}/users/{uid} {
      allow read: if request.auth != null;
      allow create, update: if request.auth != null && request.auth.uid == uid
        && request.resource.data.keys().hasOnly(['name', 'xp', 'at'])
        && request.resource.data.name is string && request.resource.data.name.size() <= 30
        && request.resource.data.xp is int && request.resource.data.xp >= 0 && request.resource.data.xp <= 200000;
      allow delete: if request.auth != null && request.auth.uid == uid;
    }
    // Đếm lượt truy cập theo ngày: ai cũng được cộng, mỗi lần chỉ +1
    match /stats/{d} {
      allow read: if isAdmin();
      allow create: if d.matches('d-[0-9]{4}-[0-9]{2}-[0-9]{2}')
        && request.resource.data.keys().hasOnly(['v', 'u', 'edu', 'ai'])
        && request.resource.data.values().hasOnly([1]);
      allow update: if request.resource.data.keys().hasOnly(['v', 'u', 'edu', 'ai'])
        && step('v') && step('u') && step('edu') && step('ai');
    }
    // Ai đang dùng (nhịp 2 phút): thành viên ghi theo uid, khách theo mã g-xxxxxxxxxxxx
    match /presence/{id} {
      allow read: if isAdmin();
      allow write: if request.resource.data.keys().hasOnly(['at', 'site', 'in', 'name', 'page'])
        && request.resource.data.at == request.time
        && request.resource.data.site in ['edu', 'ai']
        && request.resource.data.name is string && request.resource.data.name.size() <= 40
        && request.resource.data.page is string && request.resource.data.page.size() <= 60
        && ((request.auth != null && request.auth.uid == id && request.resource.data['in'] == true)
          || (id.matches('g-[a-z0-9]{12}') && request.resource.data['in'] == false && request.resource.data.name == ''));
    }
    // Danh sách thành viên (nhẹ) cho trang quản trị
    match /members/{uid} {
      allow read: if isAdmin() || (request.auth != null && request.auth.uid == uid);
      allow write: if request.auth != null && request.auth.uid == uid
        && request.resource.data.keys().hasOnly(['name', 'email', 'first', 'last', 'site', 'n']);
    }
  }
}
```

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
assets/js/eco.js        liên kết qua lại với AI Edu, nút đăng nhập, ghi thống kê (stats/presence/members)
assets/js/admin.js      trang quản trị #/quan-tri (lượt truy cập, đang dùng, thành viên)
assets/js/lang.js       module Ngoại ngữ dùng chung (Trung/Anh/Hàn): lộ trình 5 cấp, giọng đọc, bộ sinh câu hỏi, buổi học A–E, hội thoại, thẻ từ, tiến độ
subjects/tieng-trung*.js nội dung Tiếng Trung: tieng-trung.js (lộ trình, bảng Pinyin, Ngày 1–7), -2 (Ngày 8–14), -3 (15–21), -4 (22–30)
subjects/nn/            nội dung khoá ngoại ngữ (tách riêng để không trùng tên file môn phổ thông):
  en-a1.js, en-a1-2.js   Tiếng Anh Cấp 1 A1 (bảng IPA, Ngày 1–14 / 15–30)
  en-a2.js, en-a2-2.js   Tiếng Anh Cấp 2 A2 (Ngày 1–14 / 15–30)
  en-b1.js, en-b1-2.js   Tiếng Anh Cấp 3 B1 (Ngày 1–14 / 15–30)
  en-b2.js, en-b2-2.js   Tiếng Anh Cấp 4 B2 (Ngày 1–14 / 15–30)
  en-c1.js, en-c1-2.js   Tiếng Anh Cấp 5 C1 (Ngày 1–14 / 15–30)
  en-gram.js             Sổ tay ngữ pháp A1 → C1 (41 chủ điểm)
  en-noi.js              Phát âm và ngữ điệu (12 bài, nói theo có chấm)
  en-exam.js             Luyện đề: TOEIC / IELTS / A2 Key mini, luyện viết, luyện nói
  ko-1.js, ko-1-2.js     Tiếng Hàn Cấp 1 (bảng Hangul, Ngày 1–14 / 15–30)
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

## Quốc kỳ trên Windows
Windows không vẽ được emoji cờ (hiện chữ GB/CN/KR). Web tự nạp font `assets/fonts/TwemojiCountryFlags.woff2` (gói country-flag-emoji-polyfill, MIT; hình cờ Twemoji CC-BY 4.0 © Twitter) chỉ cho các ký tự cờ.

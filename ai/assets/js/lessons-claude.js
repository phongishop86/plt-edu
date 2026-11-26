/* Khóa "Học Claude từ cơ bản đến nâng cao": 16 buổi.
   Buổi 1–8 (file này): Phần 1 Chat thành thạo, Phần 2 Tạo sản phẩm. Buổi 9–16: lessons-claude-2.js.
   Thông tin sản phẩm đối chiếu tài liệu chính thức tháng 11/2026 (support.claude.com, claude.com/docs, code.claude.com).
   Tính năng và giá đổi thường xuyên: luôn ghi kèm "xem trang chính thức". Ảnh slide (img) chưa có thì hiện khung mô tả. */
window.AIEDU_LEVEL = {
key: "plt-aiedu-claude-v1",
level: "Học Claude",
age: "Từ 18 tuổi (học sinh dưới 18 học cùng người lớn)",
factLabel: "Mẹo hay",
recapLabel: "Mang về dùng ngay",
parts: {
  1: { cls: "p1", name: "Phần 1 · Chat thành thạo" },
  2: { cls: "p2", name: "Phần 2 · Tạo sản phẩm" },
  3: { cls: "p3", name: "Phần 3 · Tự động hoá" },
  4: { cls: "p4", name: "Phần 4 · Agent và lập trình" }
},
gym: {
  tag: "Buổi 2 · Prompt cho Claude 6 thành phần",
  title: "Phòng tập prompt cho Claude",
  intro: "Gõ yêu cầu bạn định gửi cho Claude, máy chấm theo 6 thành phần và cảnh báo nếu có dữ liệu nhạy cảm. Bài chấm chạy ngay trên máy, không gửi đi đâu.",
  unit: "thành phần",
  checks: [
    ["Mục tiêu", "Kết quả cuối cùng bạn cần là gì?", "(viết|soạn|tóm tắt|phân tích|lập|tạo|làm|dựng|so sánh|kiểm tra|rà soát|đề xuất|dịch|chuyển|sửa|thiết kế|lên kế hoạch)", "Thêm động từ rõ: soạn, tóm tắt, lập bảng, dựng trang web…"],
    ["Bối cảnh", "Ai dùng, để làm gì, tình hình ra sao", "(cho |gửi|người đọc|khách|sếp|học sinh|phụ huynh|mục tiêu|để |vì |bối cảnh|tình huống|đang)", "Thêm: “Dành cho phụ huynh lớp 3, mục tiêu là…”"],
    ["Tài liệu", "Đính kèm hoặc dán dữ liệu Claude cần dựa vào", "(đính kèm|file|tài liệu|dưới đây|như sau|dữ liệu|bảng|<[a-z_]+>|theo nội dung)", "Thêm: “Dựa vào file đính kèm…” hoặc dán nội dung trong thẻ &lt;tai_lieu&gt;…&lt;/tai_lieu&gt;"],
    ["Định dạng", "Kết quả trình bày thế nào", "(bảng|gạch đầu dòng|danh sách|\\d+\\s*(ý|câu|dòng|bước|từ|đoạn|chữ|slide|trang)|dưới \\d+|tiêu đề|cột|json|file|artifact|trang web)", "Thêm: “Dạng bảng 3 cột, dưới 200 chữ…”"],
    ["Ví dụ", "Cho Claude xem mẫu hoặc văn phong mong muốn", "(ví dụ|mẫu|tương tự|văn phong|giọng|phong cách)", "Thêm: “Giọng thân thiện, giống mẫu sau: …”"],
    ["Kiểm tra", "Yêu cầu hỏi lại, nêu giả định, chỗ chưa chắc", "(hỏi lại|nếu không chắc|không bịa|nêu giả định|nguồn|trích dẫn|đánh dấu|chưa rõ|tự kiểm tra)", "Thêm: “Nếu thiếu thông tin, hãy hỏi lại tôi trước khi làm.”"]
  ],
  privacy: "(\\b0\\d{9}\\b|\\b\\d{12}\\b|\\b\\d{16}\\b|cccd|cmnd|căn cước|mật khẩu|\\botp\\b|số tài khoản|số thẻ|mã pin|api key|sk-ant|địa chỉ nhà)",
  privacyMsg: "<b>Đèn đỏ!</b> Yêu cầu này có vẻ chứa dữ liệu nhạy cảm (CCCD, số tài khoản, số thẻ, mật khẩu, OTP, khóa API…). Thay bằng dữ liệu giả hoặc ký hiệu như [KHÁCH A], [STK] trước khi gửi.",
  samples: [
    "Viết bài giới thiệu cửa hàng.",
    "Bạn là chuyên viên marketing. Hãy soạn bài đăng Facebook giới thiệu dịch vụ sửa laptop của cửa hàng [CỬA HÀNG X] cho khách văn phòng quanh khu vực, mục tiêu là có tin nhắn hỏi giá. Dựa vào bảng giá dưới đây: <bang_gia>…</bang_gia>. Giọng thân thiện, giống mẫu sau: … Dưới 120 chữ, 3 gạch đầu dòng lợi ích, 1 câu kêu gọi. Nếu thiếu thông tin, hãy hỏi lại tôi trước khi viết.",
    "Tóm tắt file này.",
    "Kiểm tra giúp mật khẩu Abc@123 có mạnh không."
  ]
},
games: [
  { tag: "Buổi 12", title: "Việc này dùng tính năng nào?",
    choices: [["g", "Chat / Project", "l-g"], ["y", "Skill", "l-y"], ["r", "Kết nối / Agent", "l-r"]],
    items: [
      ["Hỏi nhanh cách dùng hàm XLOOKUP", "g", "Một câu hỏi lẻ: chat thường là đủ."],
      ["Tuần nào cũng làm báo cáo theo đúng một mẫu cố định", "y", "Việc lặp lại, cần làm giống nhau mỗi lần: đóng gói thành skill."],
      ["Đọc hộp thư Gmail và tóm tắt email chưa trả lời", "r", "Cần dữ liệu từ ứng dụng của bạn: bật connector Gmail."],
      ["Học cả học kỳ với cùng một bộ giáo trình PDF", "g", "Tạo Project, tải giáo trình vào kiến thức dự án, mọi cuộc chat đều dùng chung."],
      ["Viết kịch bản video luôn theo khung 25–40 giây, 3 cảnh, có câu kêu gọi", "y", "Khung cố định dùng mãi: viết thành skill “kịch bản video”."],
      ["Sửa lỗi và đưa web lên GitHub, Vercel", "r", "Việc nhiều bước trên mã nguồn: giao cho Claude Code (agent)."],
      ["Mỗi sáng 7 giờ tự gửi tóm tắt lịch họp trong ngày", "r", "Tác vụ chạy định kỳ có dùng connector Lịch."],
      ["Nhờ sửa chính tả một đoạn văn", "g", "Việc nhỏ một lần: chat."]
    ] },
  { tag: "Buổi 11", title: "Cho Claude làm hay phải duyệt?",
    choices: [["g", "Cho làm", "l-g"], ["y", "Phải duyệt từng bước", "l-y"], ["r", "Không giao cho AI", "l-r"]],
    items: [
      ["Tìm và đọc các email có chữ “báo giá” trong tuần", "g", "Chỉ đọc dữ liệu của chính bạn, không gửi đi đâu."],
      ["Gửi email trả lời khách thay bạn", "y", "Gửi đi là việc không rút lại được: xem bản nháp, tự bấm gửi hoặc duyệt từng lần."],
      ["Nhập mật khẩu ngân hàng để đăng nhập hộ", "r", "Không bao giờ đưa mật khẩu, OTP cho AI. Tự đăng nhập."],
      ["Tạo sự kiện họp trong lịch của bạn", "y", "Tạo việc thay bạn: kiểm tra giờ, người mời rồi mới đồng ý."],
      ["Chuyển tiền thanh toán hoá đơn", "r", "Giao dịch tiền luôn do bạn tự làm trên ứng dụng chính thức."],
      ["Đọc trang web công khai để tóm tắt tin tức", "g", "Thông tin công khai, chỉ đọc."],
      ["Xoá vĩnh viễn thư mục trên máy tính", "y", "Không hoàn tác được: Claude phải hỏi, bạn xác nhận rõ ràng."],
      ["Chạy lệnh trong thư mục dự án web để thử code", "g", "Trong phạm vi dự án bạn giao, có xem lại thay đổi trước khi đưa lên mạng."]
    ] }
],
lessons: [
{
 p: 1, t: "Làm quen Claude: tài khoản, gói, mô hình",
 g: "Tạo tài khoản, biết Claude có ở đâu (web, máy tính, điện thoại), chọn gói và mô hình phù hợp, hiểu giới hạn sử dụng.",
 pts: [
  "<b>Claude</b> là trợ lý AI của công ty Anthropic. Dùng trên web <b>claude.ai</b>, ứng dụng máy tính (Windows, macOS) và điện thoại (iOS, Android), chung một tài khoản.",
  "Gói cá nhân: <b>Free</b> (miễn phí, giới hạn lượt), <b>Pro</b> (khoảng 20 USD/tháng, dùng nhiều hơn, có Claude Code), <b>Max</b> và các gói cao hơn cho người dùng rất nhiều. Giá và quyền lợi thay đổi, luôn xem <b>claude.com/pricing</b>.",
  "Có nhiều mô hình: dòng <b>Opus</b> mạnh nhất cho việc khó, <b>Sonnet</b> cân bằng cho việc hằng ngày, <b>Haiku</b> nhanh và nhẹ. Đổi mô hình ở ô chọn dưới khung chat.",
  "Giới hạn tính theo <b>phiên vài giờ</b> và theo tuần. Cuộc chat càng dài, file càng lớn thì càng tốn lượt: mở chat mới cho việc mới."
 ],
 q: [
  ["Muốn biết giá gói Pro chính xác hiện tại thì xem ở đâu?", ["Trang chính thức claude.com/pricing", "Hỏi bạn bè", "Đoán theo giá năm ngoái"], 0, "Giá và quyền lợi gói thay đổi theo thời gian, trang chính thức là nguồn đúng nhất."],
  ["Việc khó, cần suy luận nhiều nên chọn dòng mô hình nào?", ["Opus", "Haiku", "Mô hình nào cũng như nhau"], 0, "Opus mạnh nhất; Haiku nhanh, hợp việc đơn giản."],
  ["Vì sao nên mở chat mới cho mỗi việc mới?", ["Chat quá dài tốn lượt dùng và dễ lẫn ngữ cảnh", "Vì Claude chỉ trả lời được 1 câu mỗi chat", "Vì bắt buộc"], 0, "Mỗi lần trả lời, Claude đọc lại cả cuộc chat; chat ngắn gọn thì nhanh và đỡ tốn lượt."]
 ],
 s: [
  { k: "cover", img: "cl01-1", alt: "Người đi làm mở Claude trên laptop và điện thoại, cùng một tài khoản", sub: "Bắt đầu đúng cách: tài khoản, gói, mô hình và giới hạn." },
  { k: "concept", title: "Claude là gì?", big: "Trợ lý AI trò chuyện bằng tiếng Việt, đọc được file, viết, phân tích, lập trình và làm việc nhiều bước thay bạn.", ex: ["Ví dụ", "Gửi ảnh chụp bảng điểm → Claude lập bảng Excel, vẽ biểu đồ và nhận xét em học sinh nào cần kèm thêm."] },
  { k: "cards", title: "Dùng Claude ở đâu?", items: [["🌐 Web claude.ai", "Mở trình duyệt là dùng, không cần cài."], ["💻 Ứng dụng máy tính", "Làm việc với file trên máy, dùng trình duyệt, chạy việc dài."], ["📱 Điện thoại", "Hỏi nhanh, chụp ảnh tài liệu, nói bằng giọng."]] },
  { k: "table", title: "Chọn gói nào?", head: ["Gói", "Hợp với ai", "Ghi chú"], rows: [["Free", "Mới làm quen, hỏi đáp thỉnh thoảng", "Giới hạn lượt, ít tính năng nâng cao"], ["Pro", "Dùng hằng ngày cho công việc", "Khoảng 20 USD/tháng, có Claude Code"], ["Max và cao hơn", "Dùng rất nhiều, chạy agent lâu", "Từ khoảng 100 USD/tháng"]], note: "Số liệu tham khảo tháng 11/2026. Kiểm tra lại ở claude.com/pricing trước khi mua." },
  { k: "table", title: "Chọn mô hình", head: ["Dòng", "Mạnh ở", "Dùng khi"], rows: [["Opus", "Suy luận sâu, việc dài, code khó", "Phân tích, lập kế hoạch, viết phần mềm"], ["Sonnet", "Nhanh, giỏi, cân bằng", "Việc hằng ngày, viết, tóm tắt"], ["Haiku", "Rất nhanh, nhẹ", "Việc đơn giản, số lượng lớn"]] },
  { k: "myth", items: [["Gói trả phí thì Claude không bao giờ sai.", "Gói nào Claude cũng có thể sai. Số liệu, điều luật, tên người luôn phải kiểm tra."], ["Hết lượt là bị khoá tài khoản.", "Hết lượt chỉ cần đợi phiên mới, hoặc chuyển sang mô hình nhẹ hơn."], ["Phải biết tiếng Anh mới dùng được.", "Claude hiểu và viết tiếng Việt tốt."]] },
  { k: "fact", text: "Mỗi lần bạn hỏi, Claude đọc lại toàn bộ cuộc trò chuyện. Một cuộc chat 50 lượt kèm 3 file PDF tốn lượt hơn nhiều so với 3 cuộc chat ngắn, mỗi cuộc một việc." },
  { k: "try", q: "Bạn cần soạn 200 câu trả lời ngắn cho khách hỏi giờ mở cửa. Chọn mô hình nào?", opts: ["Haiku: việc đơn giản, số lượng nhiều", "Opus: mạnh nhất nên dùng cho mọi việc"], a: 0, why: "Việc đơn giản dùng mô hình nhẹ để nhanh và tiết kiệm lượt; để Opus cho việc khó." },
  { k: "act", title: "Thực hành: khởi động", items: ["Tạo tài khoản ở claude.ai bằng email hoặc Google.", "Cài ứng dụng trên điện thoại, đăng nhập cùng tài khoản.", "Vào Cài đặt → Hồ sơ (Profile): ghi nghề nghiệp, cách bạn muốn Claude trả lời (ví dụ: “ngắn gọn, gạch đầu dòng, tiếng Việt”).", "Hỏi thử: “Giới thiệu 5 việc bạn có thể giúp một nhân viên văn phòng.”"], link: ["Mở claude.ai", "https://claude.ai"] },
  { k: "recap", items: ["Claude có trên web, máy tính, điện thoại, chung tài khoản.", "Free để làm quen; Pro cho công việc hằng ngày.", "Opus việc khó, Sonnet hằng ngày, Haiku việc nhẹ.", "Mỗi việc một chat để nhanh và đỡ tốn lượt."] }
 ]
},
{
 p: 1, t: "Prompt tốt: giao việc cho Claude như giao cho đồng nghiệp giỏi",
 g: "Viết yêu cầu đủ 6 thành phần, dùng thẻ để tách tài liệu, hỏi tiếp để sửa; lưu prompt hay vào thư viện.",
 pts: [
  "Prompt tốt có 6 thành phần: <b>Mục tiêu – Bối cảnh – Tài liệu – Định dạng – Ví dụ – Kiểm tra</b>.",
  "Dán tài liệu dài vào trong thẻ như <code>&lt;tai_lieu&gt;…&lt;/tai_lieu&gt;</code> để Claude phân biệt đâu là yêu cầu, đâu là dữ liệu.",
  "Cho phép Claude <b>hỏi lại</b> khi thiếu thông tin; yêu cầu đánh dấu chỗ chưa chắc thay vì đoán.",
  "Kết quả đầu tiên chưa ưng thì <b>góp ý cụ thể</b> trong cùng cuộc chat (“ngắn hơn”, “bỏ ý 3”) thay vì gõ lại từ đầu."
 ],
 q: [
  ["Vì sao nên bọc tài liệu trong thẻ &lt;tai_lieu&gt;?", ["Để Claude tách rõ dữ liệu với yêu cầu", "Để chữ đẹp hơn", "Vì Claude không đọc được chữ thường"], 0, "Thẻ giúp Claude không nhầm câu trong tài liệu thành lệnh của bạn."],
  ["Câu “Nếu thiếu thông tin, hãy hỏi lại tôi” thuộc thành phần nào?", ["Kiểm tra", "Ví dụ", "Định dạng"], 0, "Giảm việc Claude tự đoán và bịa."],
  ["Kết quả hơi dài. Cách tốt nhất?", ["Góp ý: “Rút còn 5 ý, mỗi ý 1 dòng”", "Xoá chat, gõ lại từ đầu", "Bỏ không dùng"], 0, "Góp ý trong cùng cuộc chat nhanh hơn và giữ được ngữ cảnh."]
 ],
 s: [
  { k: "cover", img: "cl02-1", alt: "Sáu mảnh ghép phát sáng ghép thành một yêu cầu hoàn chỉnh gửi Claude", sub: "Claude giỏi đến đâu phụ thuộc bạn giao việc rõ đến đâu." },
  { k: "compare", title: "Cùng một việc, hai cách hỏi", a: ["Hỏi mơ hồ", "“Viết bài giới thiệu cửa hàng.” → bài chung chung, không đúng sản phẩm, phải sửa gần hết."], b: ["Hỏi rõ ràng", "“Bạn là chuyên viên marketing… khách văn phòng… dựa vào bảng giá… dưới 120 chữ… hỏi lại nếu thiếu.” → dùng được gần như ngay."] },
  { k: "cards", title: "6 thành phần", items: [["1. Mục tiêu", "Kết quả cuối cùng: bài đăng, bảng, trang web…"], ["2. Bối cảnh", "Ai đọc, để làm gì, tình hình hiện tại"], ["3. Tài liệu", "File đính kèm hoặc dữ liệu trong thẻ"], ["4. Định dạng", "Độ dài, bảng, gạch đầu dòng, file"], ["5. Ví dụ", "Mẫu văn phong, cấu trúc mong muốn"], ["6. Kiểm tra", "Hỏi lại khi thiếu, đánh dấu chỗ chưa chắc"]] },
  { k: "code", title: "Bọc tài liệu trong thẻ", lang: "Prompt", code: "Tóm tắt biên bản họp dưới đây cho sếp chưa dự họp.\n- 5 ý chính, mỗi ý 1 dòng\n- Bảng việc cần làm: Việc | Người phụ trách | Hạn\n- Ý nào chưa rõ thì ghi [?]\n\n<bien_ban>\n(dán biên bản vào đây)\n</bien_ban>" },
  { k: "table", title: "Câu hỏi tiếp hay dùng", head: ["Muốn", "Gõ"], rows: [["Ngắn lại", "Rút còn 5 gạch đầu dòng, mỗi dòng dưới 15 chữ."], ["Nhiều phương án", "Cho tôi 3 phiên bản tiêu đề khác nhau."], ["Tự phản biện", "Chỉ ra 3 điểm yếu của bản này rồi sửa."], ["Đổi đối tượng", "Viết lại cho học sinh lớp 6 hiểu."]] },
  { k: "fact", text: "Claude làm tốt hơn khi bạn nói <b>vì sao</b> cần kết quả. “Viết ngắn vì khách đọc trên điện thoại” hiệu quả hơn “viết ngắn”." },
  { k: "try", q: "Prompt nào tốt hơn để nhờ phân tích bảng điểm?", opts: ["Phân tích bảng này.", "Bạn là giáo viên chủ nhiệm. Phân tích bảng điểm lớp 3A đính kèm: điểm trung bình từng môn, 5 em cần kèm thêm và lý do. Trình bày bảng + 3 nhận xét. Không tự đặt số liệu, chỗ nào thiếu ghi [?]."], a: 1, why: "Có vai trò, mục tiêu, tài liệu, định dạng và yêu cầu kiểm tra." },
  { k: "act", title: "Thực hành: phòng tập prompt", items: ["Mở Phòng tập prompt cho Claude trên trang khoá học.", "Viết prompt cho một việc thật của bạn, đạt đủ 6/6.", "Gửi cho Claude, góp ý ít nhất 2 lần để sửa.", "Lưu prompt cuối vào một file “Thư viện prompt”."], link: ["Mở phòng tập", "./#phong-tap-prompt"] },
  { k: "recap", items: ["Mục tiêu – Bối cảnh – Tài liệu – Định dạng – Ví dụ – Kiểm tra.", "Tài liệu dài bọc trong thẻ.", "Nói lý do để Claude làm đúng ý.", "Góp ý cụ thể, lưu prompt hay để dùng lại."] }
 ]
},
{
 p: 1, t: "Projects, bộ nhớ và cá nhân hoá",
 g: "Tạo Project có hướng dẫn và kho tài liệu riêng; dùng bộ nhớ, phong cách trả lời; biết cách xoá và giữ riêng tư.",
 pts: [
  "<b>Project</b> là “phòng làm việc” riêng: có <b>hướng dẫn</b> (custom instructions) và <b>kiến thức dự án</b> (file tải lên) dùng chung cho mọi cuộc chat trong đó.",
  "Ví dụ: Project “Soạn giáo án Toán 3” chứa SGK, khung giáo án; mọi chat trong đó tự theo đúng khung.",
  "<b>Bộ nhớ</b>: Claude có thể nhớ thông tin bạn chia sẻ giữa các cuộc chat (bật/tắt trong Cài đặt). Bạn xem, sửa, xoá được những gì Claude nhớ.",
  "<b>Hồ sơ và phong cách</b> (Styles): chọn cách trả lời mặc định như ngắn gọn, trang trọng, giải thích kỹ."
 ],
 q: [
  ["Project khác chat thường ở điểm nào?", ["Có hướng dẫn và kho tài liệu dùng chung cho mọi chat bên trong", "Chat nhanh hơn", "Không cần đăng nhập"], 0, "Project giúp khỏi dán lại tài liệu và yêu cầu mỗi lần."],
  ["Muốn Claude không nhớ một thông tin nữa thì làm gì?", ["Vào phần bộ nhớ để sửa hoặc xoá, hoặc nói rõ với Claude", "Không làm được", "Đổi mật khẩu"], 0, "Bộ nhớ do bạn kiểm soát: xem, sửa, xoá hoặc tắt."],
  ["Nên tải gì vào kiến thức dự án “Chăm sóc khách hàng”?", ["Chính sách đổi trả, bảng giá, câu hỏi thường gặp đã ẩn danh", "Danh sách khách kèm số CCCD", "Mật khẩu hệ thống"], 0, "Chỉ tải tài liệu cần thiết, đã bỏ dữ liệu nhạy cảm."]
 ],
 s: [
  { k: "cover", img: "cl03-1", alt: "Các phòng làm việc riêng, mỗi phòng một kệ tài liệu và bảng hướng dẫn", sub: "Mỗi công việc một Project: Claude hiểu bạn ngay từ câu đầu." },
  { k: "concept", title: "Project là gì?", big: "Không gian riêng có hướng dẫn và tài liệu cố định, mọi cuộc chat bên trong đều dùng chung.", ex: ["Ví dụ", "Project “Kênh video mẹo máy tính”: tải khung kịch bản, giọng văn kênh, danh sách chủ đề đã làm. Hỏi “viết kịch bản về phím tắt Windows” là ra đúng khung."] },
  { k: "steps", title: "Tạo Project trong 4 bước", items: [["Tạo", "Thanh bên trái → Projects → tạo mới, đặt tên rõ"], ["Hướng dẫn", "Viết cách Claude phải làm: vai trò, khung, giọng văn"], ["Kiến thức", "Tải file mẫu, quy định, dữ liệu đã ẩn danh"], ["Dùng", "Mở chat trong Project, hỏi như bình thường"]] },
  { k: "code", title: "Mẫu hướng dẫn cho Project", lang: "Hướng dẫn dự án", code: "Bạn là trợ lý soạn giáo án Toán lớp 3 theo SGK Kết nối tri thức.\nMỗi giáo án gồm: Mục tiêu – Chuẩn bị – Khởi động – Khám phá – Luyện tập – Vận dụng.\nCâu hỏi phù hợp lứa tuổi, không dùng số âm.\nCuối mỗi giáo án thêm 3 câu hỏi kiểm tra nhanh có đáp án.\nNếu thiếu tên bài hoặc thời lượng, hãy hỏi lại." },
  { k: "cards", title: "Cá nhân hoá Claude", items: [["Hồ sơ", "Nghề nghiệp, mục tiêu, cách xưng hô bạn thích"], ["Phong cách", "Ngắn gọn, trang trọng, giải thích kỹ…"], ["Bộ nhớ", "Claude nhớ điều bạn chia sẻ; bạn xem, sửa, xoá được"]] },
  { k: "lights", title: "Tài liệu nào đưa vào Project?", items: [["g", "Xanh · Đưa vào được", "Mẫu văn bản, quy định công khai, SGK, bài viết của chính bạn."], ["y", "Vàng · Ẩn danh trước", "Báo cáo nội bộ, email có tên khách, số liệu kinh doanh."], ["r", "Đỏ · Không đưa", "CCCD, số tài khoản, mật khẩu, khoá API, hồ sơ khách hàng thật."]] },
  { k: "try", q: "Bạn tuần nào cũng soạn bản tin nội bộ cùng một khung. Cách nào tiết kiệm nhất?", opts: ["Tạo Project “Bản tin” có hướng dẫn khung và vài bản tin mẫu", "Mỗi tuần dán lại khung vào chat mới"], a: 0, why: "Project giữ khung và mẫu sẵn; mỗi tuần chỉ cần gửi nội dung mới." },
  { k: "act", title: "Thực hành: Project đầu tiên", items: ["Chọn một công việc bạn làm thường xuyên.", "Tạo Project, viết hướng dẫn 5–8 dòng theo mẫu.", "Tải 2–3 file mẫu đã ẩn danh vào kiến thức dự án.", "Mở 2 cuộc chat trong Project, so sánh kết quả với chat thường."] },
  { k: "recap", items: ["Project = hướng dẫn + tài liệu dùng chung.", "Hồ sơ, phong cách, bộ nhớ giúp Claude trả lời đúng ý.", "Bạn kiểm soát bộ nhớ: xem, sửa, xoá, tắt.", "Chỉ đưa tài liệu cần thiết, đã ẩn danh."] }
 ]
},
{
 p: 1, t: "Làm việc với file: PDF, Excel, ảnh và tìm kiếm web",
 g: "Đưa file cho Claude phân tích, nhờ Claude tạo file Word/Excel/PowerPoint/PDF, dùng tìm kiếm web và nghiên cứu sâu có trích nguồn.",
 pts: [
  "Claude đọc được <b>PDF, Word, Excel/CSV, ảnh chụp</b> (kể cả chữ viết tay, bảng biểu, biểu đồ).",
  "Khi bật tính năng <b>tạo và sửa file</b>, Claude chạy code trong môi trường riêng để tính toán, vẽ biểu đồ và trả về file .xlsx, .docx, .pptx, .pdf tải về được.",
  "<b>Tìm kiếm web</b> giúp Claude lấy thông tin mới và ghi nguồn; <b>Nghiên cứu</b> (Research) tìm nhiều nguồn, tổng hợp thành báo cáo dài.",
  "Số liệu quan trọng nên nhờ Claude <b>tính bằng code</b>, không tính nhẩm; luôn mở nguồn để kiểm tra lại."
 ],
 q: [
  ["Muốn Claude tính tổng doanh thu 12 tháng chính xác nên yêu cầu gì?", ["“Tính bằng code từ file Excel và cho xem bảng kết quả”", "“Đoán nhanh giúp tôi”", "“Tính nhẩm thôi”"], 0, "Tính bằng code cho kết quả kiểm tra được."],
  ["Tìm kiếm web có lợi gì?", ["Lấy thông tin mới, có nguồn để kiểm tra", "Claude không bao giờ sai nữa", "Không tốn lượt"], 0, "Có nguồn nhưng vẫn phải mở xem nguồn đó."],
  ["Ảnh chụp hoá đơn mờ, Claude đọc sai 1 con số. Lỗi thuộc về ai khi bạn gửi số đó cho kế toán?", ["Bạn, vì chưa kiểm tra", "Claude", "Máy ảnh"], 0, "Người dùng luôn chịu trách nhiệm với kết quả gửi đi."]
 ],
 s: [
  { k: "cover", img: "cl04-1", alt: "File PDF, bảng tính và ảnh chụp bay vào khung chat, đi ra thành biểu đồ và báo cáo", sub: "Đưa file vào, nhận lại báo cáo, bảng tính, slide." },
  { k: "cards", title: "Claude đọc được gì?", items: [["📄 PDF, Word", "Hợp đồng, báo cáo, giáo trình dài hàng trăm trang"], ["📊 Excel, CSV", "Bảng số liệu, phân tích, vẽ biểu đồ"], ["🖼️ Ảnh", "Ảnh chụp tài liệu, bảng, biểu đồ, chữ viết tay"]] },
  { k: "steps", title: "Từ file thô đến báo cáo", items: [["Đính kèm", "Bấm + hoặc kéo thả file vào khung chat"], ["Giao việc", "Nói rõ cần phân tích gì, cho ai đọc"], ["Tính bằng code", "Yêu cầu tính toán bằng code, xuất bảng"], ["Nhận file", "Tải về .xlsx, .docx, .pptx hoặc .pdf"]] },
  { k: "code", title: "Prompt phân tích bảng tính", lang: "Prompt", code: "File đính kèm là doanh số 12 tháng của cửa hàng.\n1. Dùng code tính tổng, trung bình, tháng cao nhất và thấp nhất.\n2. Vẽ biểu đồ cột doanh số theo tháng.\n3. Viết 3 nhận xét cho chủ cửa hàng, dưới 100 chữ.\n4. Xuất tất cả ra file Excel có 2 sheet: Số liệu và Biểu đồ.\nKhông tự thêm số liệu không có trong file." },
  { k: "compare", title: "Tìm kiếm web và Nghiên cứu", a: ["Tìm kiếm web", "Vài giây đến 1 phút. Hợp với câu hỏi nhanh: giá, tin mới, quy định hiện hành."], b: ["Nghiên cứu (Research)", "Nhiều phút, đọc nhiều nguồn, ra báo cáo dài có trích dẫn. Hợp với tìm hiểu thị trường, so sánh sản phẩm."] },
  { k: "myth", items: [["Có trích nguồn là chắc chắn đúng.", "Nguồn có thể sai hoặc bị hiểu sai. Mở nguồn, đọc đoạn liên quan."], ["Claude tính nhẩm số lớn luôn đúng.", "Tính nhẩm dễ sai. Với số liệu quan trọng, yêu cầu tính bằng code."]] },
  { k: "try", q: "Bạn cần bảng so sánh 3 mẫu laptop văn phòng giá mới nhất. Dùng gì?", opts: ["Bật tìm kiếm web, yêu cầu bảng có cột nguồn và ngày cập nhật", "Hỏi không cần tìm kiếm, Claude nhớ giá"], a: 0, why: "Giá thay đổi liên tục; cần nguồn mới và có ngày để kiểm tra." },
  { k: "act", title: "Thực hành: một bảng tính thật", items: ["Chuẩn bị file Excel số liệu của bạn, xoá cột tên khách, số điện thoại.", "Nhờ Claude phân tích theo prompt mẫu, xuất file Excel.", "Mở file kiểm tra 2 con số bằng tay.", "Nhờ Claude chuyển kết quả thành 5 slide PowerPoint."] },
  { k: "recap", items: ["Claude đọc PDF, Word, Excel, ảnh.", "Bật tạo file để nhận lại .xlsx, .docx, .pptx, .pdf.", "Số liệu: tính bằng code, kiểm tra lại.", "Thông tin mới: tìm kiếm web, mở nguồn xem."] }
 ]
},
{
 p: 2, t: "Artifact: tạo trang web, công cụ, sơ đồ ngay trong chat",
 g: "Hiểu artifact là gì; nhờ Claude dựng trang web, máy tính nhỏ, sơ đồ, biểu đồ tương tác; sửa từng phần và chia sẻ đường link.",
 pts: [
  "<b>Artifact</b> là sản phẩm hiện ở khung riêng cạnh cuộc chat: trang web, ứng dụng nhỏ, sơ đồ, biểu đồ, tài liệu. Bạn dùng thử được ngay.",
  "Mô tả rõ <b>người dùng, chức năng, giao diện</b>; sửa bằng cách nói tiếp: “thêm nút xuất Excel”, “đổi màu cam”.",
  "Artifact có thể <b>chia sẻ bằng đường link</b>; người nhận mở trên trình duyệt, không cần biết code.",
  "Artifact là bản nhanh để thử ý tưởng. Muốn thành web chính thức có tên miền riêng thì đưa code lên GitHub + Vercel (Buổi 15)."
 ],
 q: [
  ["Artifact là gì?", ["Sản phẩm như trang web, công cụ, sơ đồ hiện ngay cạnh cuộc chat", "Một loại virus", "Tên gói trả phí"], 0, "Bạn xem và dùng thử ngay trong Claude."],
  ["Muốn thêm nút “Xuất Excel” vào artifact đã có thì làm gì?", ["Nói tiếp trong chat: “Thêm nút xuất Excel”", "Làm lại từ đầu", "Tự học lập trình 3 tháng"], 0, "Sửa từng phần bằng lời nói."],
  ["Artifact có tên miền riêng như edu.phatloctech.vn không?", ["Không, muốn vậy phải đưa code lên GitHub + Vercel", "Có, tự động", "Có nếu trả thêm tiền cho Claude"], 0, "Artifact có link chia sẻ của Claude; web chính thức cần triển khai riêng."]
 ],
 s: [
  { k: "cover", img: "cl05-1", alt: "Từ khung chat bật ra một trang web và biểu đồ tương tác", sub: "Nói ý tưởng, nhận về sản phẩm dùng được ngay." },
  { k: "cards", title: "Artifact làm được gì?", items: [["🌐 Trang web", "Trang giới thiệu cửa hàng, thiệp mời, CV online"], ["🧮 Công cụ nhỏ", "Máy tính lãi vay, đổi đơn vị, chấm điểm trắc nghiệm"], ["📈 Biểu đồ", "Biểu đồ tương tác từ số liệu của bạn"], ["🗺️ Sơ đồ", "Sơ đồ quy trình, sơ đồ tư duy, lịch trình"], ["🎮 Trò chơi", "Trò chơi ôn bài, câu đố cho học sinh"], ["📄 Tài liệu", "Kế hoạch, báo cáo trình bày đẹp"]] },
  { k: "code", title: "Prompt dựng công cụ", lang: "Prompt", code: "Làm một trang web tính tiền sửa laptop cho cửa hàng.\n- Người dùng: nhân viên quầy, dùng trên điện thoại\n- Chọn dịch vụ (vệ sinh, thay pin, nâng RAM, cài Win) theo bảng giá dưới đây\n- Tự cộng tiền, có ô giảm giá %, nút sao chép báo giá gửi Zalo\n- Giao diện sáng, chữ to, màu cam\n<bang_gia>…</bang_gia>" },
  { k: "steps", title: "Vòng sửa artifact", items: [["Dùng thử", "Bấm thử từng nút như người dùng thật"], ["Ghi lỗi", "Ghi cụ thể: nút nào, sai thế nào"], ["Nói sửa", "Mỗi lần 1–3 yêu cầu rõ ràng"], ["Chia sẻ", "Gửi link cho đồng nghiệp góp ý"]] },
  { k: "fact", text: "Nói lỗi càng cụ thể, Claude sửa càng nhanh: “Bấm Thay pin rồi bấm lại thì tiền bị cộng 2 lần” tốt hơn nhiều so với “bị lỗi”." },
  { k: "try", q: "Bạn muốn web tải video có tên miền riêng, chạy lâu dài cho khách. Nên làm gì?", opts: ["Dùng artifact để thử, rồi đưa code lên GitHub + Vercel và gắn tên miền", "Gửi link artifact cho khách dùng mãi"], a: 0, why: "Artifact hợp để thử nhanh; sản phẩm chính thức cần triển khai riêng để chủ động tên miền, dữ liệu." },
  { k: "act", title: "Thực hành: công cụ đầu tiên", items: ["Chọn một phép tính bạn hay làm tay (báo giá, quy đổi, chấm điểm).", "Viết prompt theo mẫu, nhận artifact.", "Dùng thử, nhờ sửa ít nhất 3 lần.", "Chia sẻ link cho 1 người, ghi lại góp ý."] },
  { k: "recap", items: ["Artifact = trang web, công cụ, biểu đồ ngay trong chat.", "Mô tả người dùng, chức năng, giao diện.", "Sửa từng phần bằng lời, lỗi nói cụ thể.", "Sản phẩm chính thức: GitHub + Vercel."] }
 ]
},
{
 p: 2, t: "Tài liệu, slide và báo cáo chuyên nghiệp",
 g: "Nhờ Claude soạn tài liệu dài, slide thuyết trình, báo cáo có biểu đồ; giữ giọng văn của bạn; kiểm tra trước khi gửi.",
 pts: [
  "Việc dài thì làm theo <b>2 bước</b>: duyệt <b>dàn ý</b> trước, rồi mới viết từng phần.",
  "Claude tạo được <b>slide</b> và <b>tài liệu</b> (trong ứng dụng hoặc file .pptx/.docx/.pdf tải về) để bạn chỉnh tiếp.",
  "Gửi 2–3 bài cũ của bạn làm <b>mẫu giọng văn</b>; yêu cầu Claude giữ thuật ngữ của đơn vị.",
  "Trước khi gửi: kiểm tra <b>số liệu, tên người, ngày tháng, trích dẫn</b>; nhờ Claude tự rà “5 chỗ có thể sai”."
 ],
 q: [
  ["Soạn báo cáo 10 trang nên bắt đầu thế nào?", ["Nhờ Claude đưa dàn ý, duyệt xong mới viết từng phần", "Yêu cầu viết cả 10 trang một lần", "Tự viết hết, không dùng AI"], 0, "Duyệt dàn ý trước đỡ phải sửa cả bài."],
  ["Muốn bài viết giống giọng văn của bạn, làm gì?", ["Gửi 2–3 bài cũ làm mẫu", "Yêu cầu “viết hay vào”", "Không làm được"], 0, "Mẫu thật là cách nhanh nhất để Claude bắt đúng giọng."],
  ["Trước khi gửi slide cho sếp, việc nào bắt buộc?", ["Kiểm tra số liệu, tên, ngày tháng", "Đổi phông chữ", "Thêm thật nhiều hình"], 0, "Nội dung đúng quan trọng hơn hình thức."]
 ],
 s: [
  { k: "cover", img: "cl06-1", alt: "Bản dàn ý biến thành bộ slide và tài liệu đẹp mắt", sub: "Dàn ý trước, nội dung sau, kiểm tra cuối cùng." },
  { k: "steps", title: "Quy trình 4 bước cho tài liệu dài", items: [["Dàn ý", "Claude đề xuất, bạn sửa và duyệt"], ["Viết từng phần", "Mỗi lần 1–2 mục, góp ý ngay"], ["Ghép và trình bày", "Xuất slide, tài liệu hoặc file"], ["Rà soát", "Số liệu, tên, ngày, nguồn"]] },
  { k: "code", title: "Prompt tạo slide", lang: "Prompt", code: "Làm 8 slide thuyết trình “Ứng dụng Excel add-in giúp giảm 50% thời gian lập báo cáo” cho hội đồng chấm sáng kiến.\nBước 1: đưa dàn ý 8 slide (tiêu đề + 3 ý mỗi slide) để tôi duyệt.\nBước 2: sau khi tôi duyệt mới làm slide hoàn chỉnh.\nGiọng trang trọng, có 1 slide số liệu trước – sau, 1 slide rủi ro và cách kiểm soát." },
  { k: "cards", title: "Mẹo giữ chất lượng", items: [["Giọng văn", "Gửi 2–3 bài cũ làm mẫu"], ["Thuật ngữ", "Liệt kê từ đơn vị hay dùng, từ cần tránh"], ["Tự rà", "“Chỉ ra 5 chỗ có thể sai hoặc chưa rõ”"], ["Phiên bản", "Lưu bản đã duyệt, sửa trên bản đó"]] },
  { k: "myth", items: [["Slide đẹp là xong.", "Hội đồng chấm nội dung và số liệu trước. Đẹp chỉ là phần cộng thêm."], ["Nhờ AI viết là không cần đọc lại.", "Bạn ký tên, bạn chịu trách nhiệm. Đọc lại từng trang."]] },
  { k: "try", q: "Claude viết slide có số “tiết kiệm 120 giờ/năm” mà bạn chưa từng đưa. Làm gì?", opts: ["Hỏi Claude con số này lấy từ đâu; không có nguồn thì xoá hoặc thay số thật", "Giữ lại vì nghe ấn tượng"], a: 0, why: "Số liệu tự bịa trong báo cáo là rủi ro lớn. Chỉ dùng số bạn đo được." },
  { k: "act", title: "Thực hành: bộ slide 8 trang", items: ["Chọn một đề tài thật bạn cần trình bày.", "Nhờ Claude đưa dàn ý, sửa ít nhất 2 chỗ rồi duyệt.", "Nhận bộ slide, xuất file PowerPoint.", "Nhờ Claude tự rà 5 chỗ có thể sai, bạn kiểm tra lại."] },
  { k: "recap", items: ["Tài liệu dài: dàn ý → từng phần → ghép → rà soát.", "Mẫu bài cũ giúp giữ giọng văn.", "Số liệu không nguồn thì không dùng.", "Bạn chịu trách nhiệm với tài liệu gửi đi."] }
 ]
},
{
 p: 2, t: "Hình ảnh và video bằng code",
 g: "Hiểu Claude tạo hình và video theo cách nào; làm ảnh SVG, ảnh bìa, đồ hoạ chuyển động bằng HTML; dựng video ngắn bằng mã và ffmpeg.",
 pts: [
  "Claude <b>không vẽ ảnh chụp như máy ảnh</b> theo kiểu công cụ tạo ảnh chuyên dụng. Claude tạo hình bằng <b>code</b>: SVG, HTML/CSS, canvas, biểu đồ.",
  "Hợp với: logo đơn giản, biểu tượng, infographic, ảnh bìa có chữ tiếng Việt chuẩn, sơ đồ, thẻ quảng cáo.",
  "Video: Claude viết <b>trang HTML có chuyển động</b> (ví dụ dùng GSAP) hoặc dự án Remotion, rồi xuất ra MP4; ghép, cắt, thêm phụ đề bằng <b>ffmpeg</b>.",
  "Ưu điểm của cách làm bằng code: chữ tiếng Việt không lỗi, sửa từng chi tiết bằng lời, xuất nhiều kích thước (9:16, 16:9, 1:1) từ một bản."
 ],
 q: [
  ["Claude tạo hình bằng cách nào?", ["Viết code như SVG, HTML, canvas", "Chụp ảnh bằng camera", "Tải ảnh có sẵn trên mạng về"], 0, "Hình do code vẽ, sửa được từng chi tiết."],
  ["Ưu điểm lớn của ảnh bìa làm bằng code?", ["Chữ tiếng Việt chuẩn, sửa từng chi tiết dễ", "Giống ảnh chụp thật 100%", "Không cần kiểm tra"], 0, "Công cụ tạo ảnh hay lỗi chữ; code thì chữ luôn đúng."],
  ["Công cụ nào hay dùng để ghép, cắt video và thêm phụ đề?", ["ffmpeg", "Notepad", "Calculator"], 0, "ffmpeg là công cụ dòng lệnh miễn phí xử lý video."]
 ],
 s: [
  { k: "cover", img: "cl07-1", alt: "Đoạn code biến thành logo, ảnh bìa và khung hình video dọc", sub: "Mỗi hình, mỗi khung video là code: chính xác và sửa được." },
  { k: "compare", title: "Hai cách làm hình", a: ["Công cụ tạo ảnh (Gemini, Flow…)", "Ảnh chân thực, cảnh người, phong cảnh. Hay lỗi chữ, khó sửa đúng 1 chi tiết."], b: ["Claude viết code", "Logo, infographic, ảnh bìa có chữ, sơ đồ. Chữ chuẩn, sửa từng chi tiết bằng lời."] },
  { k: "code", title: "Prompt làm ảnh bìa", lang: "Prompt", code: "Làm ảnh bìa video dọc 1080x1920 bằng SVG cho kênh mẹo máy tính:\n- Tiêu đề lớn: \"3 PHÍM TẮT WINDOWS AI CŨNG CẦN\"\n- Nền gradient xanh đậm sang tím, biểu tượng bàn phím đơn giản\n- Chữ trắng, viền đen, căn giữa, dễ đọc trên điện thoại\n- Góc dưới: logo chữ \"PLT\" tròn\nXuất cả bản PNG." },
  { k: "steps", title: "Dựng video ngắn bằng mã", items: [["Kịch bản", "Lời thoại + danh sách cảnh, mỗi cảnh vài giây"], ["Khung hình", "Claude viết HTML/CSS có chuyển động cho từng cảnh"], ["Xuất video", "Ghi lại thành MP4 (ví dụ Remotion, trình duyệt tự động)"], ["Hoàn thiện", "ffmpeg ghép cảnh, thêm nhạc, phụ đề, đúng tỉ lệ 9:16"]] },
  { k: "code", title: "Lệnh ffmpeg Claude hay viết", lang: "ffmpeg", code: "# Ghép 3 cảnh thành 1 video\nffmpeg -f concat -i danh_sach.txt -c copy video_ghep.mp4\n\n# Thêm phụ đề tiếng Việt\nffmpeg -i video_ghep.mp4 -vf subtitles=phu_de.srt video_cuoi.mp4\n\n# Đổi về khung dọc 1080x1920\nffmpeg -i video_cuoi.mp4 -vf \"scale=1080:1920:force_original_aspect_ratio=decrease,pad=1080:1920:(ow-iw)/2:(oh-ih)/2\" doc.mp4" },
  { k: "fact", text: "Đồ hoạ chuyển động bằng code rất hợp với video mẹo, video giải thích: chữ chạy, mũi tên chỉ, số đếm, biểu đồ mọc lên. Những thứ này công cụ tạo video bằng AI thường làm sai chữ." },
  { k: "try", q: "Bạn cần video 30 giây giới thiệu 3 phím tắt, có chữ to và mũi tên chỉ bàn phím. Cách nào hợp?", opts: ["Claude dựng đồ hoạ chuyển động bằng code, xuất MP4", "Nhờ công cụ tạo video từ một câu mô tả rồi hy vọng chữ đúng"], a: 0, why: "Nội dung nhiều chữ, cần chính xác: làm bằng code dễ kiểm soát hơn." },
  { k: "act", title: "Thực hành: ảnh bìa và 1 cảnh động", items: ["Nhờ Claude làm ảnh bìa SVG theo prompt mẫu, sửa 3 lần.", "Nhờ Claude làm 1 cảnh HTML có chữ chạy và mũi tên, xem trong artifact.", "Hỏi Claude cách xuất cảnh đó thành MP4 trên máy bạn.", "Lưu prompt hay vào thư viện."] },
  { k: "recap", items: ["Claude vẽ bằng code: SVG, HTML, canvas.", "Hợp với chữ, logo, sơ đồ, đồ hoạ chuyển động.", "Video: HTML động → MP4 → ffmpeg hoàn thiện.", "Ảnh chân thực thì phối hợp công cụ khác (Buổi 8)."] }
 ]
},
{
 p: 2, t: "Phối hợp Claude với Google Flow, Gemini, CapCut",
 g: "Dùng Claude làm “đạo diễn”: viết kịch bản, chia cảnh, viết prompt ảnh/video cho công cụ khác; hậu kỳ bằng CapCut; tuân thủ quy định nội dung AI.",
 pts: [
  "Mỗi công cụ một việc: <b>Claude</b> lên ý tưởng, kịch bản, prompt; <b>Gemini / Google Flow</b> tạo ảnh và clip chân thực; <b>CapCut</b> dựng, thêm chữ, nhạc.",
  "Prompt ảnh/video tốt có: <b>chủ thể – hành động – bối cảnh – góc máy – ánh sáng – phong cách – tỉ lệ</b>. Nhờ Claude viết bằng tiếng Anh nếu công cụ hiểu tiếng Anh tốt hơn.",
  "Giữ nhân vật nhất quán giữa các cảnh bằng một <b>bảng mô tả nhân vật</b> cố định, dán vào mọi prompt.",
  "Nội dung do AI tạo cần <b>gắn nhãn</b> theo quy định nền tảng (TikTok, Facebook, YouTube); không giả mạo người thật, thương hiệu thật."
 ],
 q: [
  ["Trong quy trình video, Claude hợp nhất với vai trò nào?", ["Đạo diễn: ý tưởng, kịch bản, prompt cho từng cảnh", "Máy quay", "Người đăng video thay bạn"], 0, "Claude lo phần chữ và kế hoạch; công cụ khác tạo hình."],
  ["Giữ nhân vật giống nhau ở 10 cảnh bằng cách nào?", ["Dùng một bảng mô tả nhân vật cố định trong mọi prompt", "Mỗi cảnh mô tả khác nhau", "Không làm được"], 0, "Mô tả lặp lại y hệt giúp nhân vật nhất quán hơn."],
  ["Video có người thật do AI tạo, giống một ca sĩ nổi tiếng. Có nên đăng?", ["Không, dễ vi phạm quyền và quy định nền tảng", "Có, càng giống càng nhiều view", "Có nếu không ai phát hiện"], 0, "Không giả mạo người thật; gắn nhãn nội dung AI."]
 ],
 s: [
  { k: "cover", img: "cl08-1", alt: "Claude làm đạo diễn, giao kịch bản cho các công cụ tạo ảnh, video và dựng phim", sub: "Claude viết kịch bản và prompt, công cụ khác tạo hình, bạn duyệt và đăng." },
  { k: "steps", title: "Dây chuyền làm video ngắn", items: [["Ý tưởng", "Claude đề xuất 10 chủ đề theo xu hướng, bạn chọn"], ["Kịch bản", "Claude viết lời + bảng cảnh 25–40 giây"], ["Tạo cảnh", "Claude viết prompt, Flow/Gemini tạo clip, ảnh"], ["Hậu kỳ", "CapCut: ghép, chữ, nhạc, phụ đề, nhãn AI"]] },
  { k: "table", title: "Bảng cảnh mẫu (Claude viết)", head: ["Cảnh", "Thời lượng", "Hình", "Lời / chữ"], rows: [["1", "0–3s", "Cận tay bấm phím, màn hình rối", "“Máy chậm? Thử 3 phím này!”"], ["2", "3–12s", "Màn hình Windows + mũi tên", "Win + D: về màn hình chính"], ["3", "12–25s", "Chia đôi màn hình", "Win + mũi tên: xếp cửa sổ"], ["4", "25–32s", "Logo PLT, nút theo dõi", "“Theo dõi để xem mẹo mỗi ngày”"]] },
  { k: "code", title: "Prompt cho công cụ tạo clip", lang: "Prompt (Claude viết, dán vào Flow)", code: "Close-up of hands of a young Vietnamese office worker typing on a laptop keyboard, soft morning light from a window, shallow depth of field, modern minimal desk, smooth slow push-in camera, realistic, vertical 9:16, no text on screen." },
  { k: "cards", title: "Bảng mô tả nhân vật cố định", items: [["Ngoại hình", "Nam ~28 tuổi, tóc ngắn đen, kính gọng mảnh"], ["Trang phục", "Áo polo cam có logo tròn, quần jean"], ["Bối cảnh", "Bàn kỹ thuật, đèn trắng, nền tường xám"]], note: "Dán nguyên văn bảng này vào mọi prompt cảnh có nhân vật." },
  { k: "lights", title: "Nội dung AI: được hay không?", items: [["g", "Được", "Nhân vật tự tạo, cảnh minh hoạ, có gắn nhãn “Nội dung tạo bằng AI”."], ["y", "Cẩn thận", "Hình giống sản phẩm thật: ghi rõ minh hoạ, không cam kết sai công dụng."], ["r", "Không", "Giả mạo người nổi tiếng, logo thương hiệu khác, tin giả, lừa đảo."]] },
  { k: "try", q: "Clip AI tạo ra có chữ tiếng Việt bị lỗi trên màn hình. Cách xử lý tốt?", opts: ["Tạo clip không có chữ (“no text on screen”), thêm chữ bằng CapCut hoặc code", "Đăng luôn, khán giả không để ý"], a: 0, why: "Chữ nên thêm ở hậu kỳ để chính xác." },
  { k: "act", title: "Thực hành: video 30 giây", items: ["Nhờ Claude viết kịch bản + bảng cảnh cho 1 mẹo máy tính.", "Nhờ Claude viết prompt tiếng Anh cho từng cảnh, có bảng mô tả nhân vật.", "Tạo 3–4 clip bằng công cụ bạn có sẵn (ưu tiên gói đang dùng).", "Dựng bằng CapCut, thêm phụ đề và nhãn nội dung AI."] },
  { k: "recap", items: ["Claude = đạo diễn: ý tưởng, kịch bản, prompt.", "Prompt hình: chủ thể – hành động – bối cảnh – góc máy – ánh sáng – phong cách – tỉ lệ.", "Bảng nhân vật cố định cho mọi cảnh.", "Gắn nhãn AI, không giả mạo người thật."] }
 ]
}
]
};

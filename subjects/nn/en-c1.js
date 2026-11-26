/* PLT-Edu · Tiếng Anh – Cấp 5 (C1): lộ trình 30 ngày, Ngày 1–14 */
(function () {
  'use strict';
  const sp = PLT.LANG.sp;
  const w = (h, p, v, use, ex) => ({ h, p, v, use, ex });
  const L = (h, p, v) => ({ h, p: p || '', v });
  const T = (a, ok, ...bad) => ({ a: L(...a), o: [{ h: ok[0], p: '', v: ok[1], ok: 1, f: ok[2] }].concat(bad.map((b) => ({ h: b[0], p: '', f: b[1] }))) });
  const tbl = (head, rows) => `<div class="zh-scroll"><table class="dtable full zh-tb"><tr>${head.map((x) => `<th>${x}</th>`).join('')}</tr>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</table></div>`;
  const tip = (x) => `<div class="zh-tip">${x}</div>`;
  const exs = (a) => `<ul>${a.map(([h, v]) => `<li>${h} ${sp(h)}<br><span class="muted">${v}</span></li>`).join('')}</ul>`;
  const K = ['meaning', 'listen', 'listenWord', 'hanzi', 'write', 'match'];
  const G = (id, t) => `<p class="small">📐 Xem thêm: <a href="#/tieng-anh/ngu-phap/${id}">${t}</a> trong Sổ tay ngữ pháp.</p>`;
  const say = (h, v) => `<div class="zh-pass">${h} ${sp(h)}<br><span class="muted small">${v}</span></div>`;

  const plan = [
    'Đảo ngữ nhấn mạnh', 'Câu chẻ và cách nhấn thông tin', 'Thức giả định và cấu trúc trang trọng', 'Danh từ hoá và văn phong học thuật', 'Rào đón và giảm khẳng định', 'Tỉnh lược, thay thế và câu phức nâng cao', 'Ôn tập tuần 1 và kiểm tra',
    'Kết hợp từ nâng cao', 'Từ đồng nghĩa và sắc thái nghĩa', 'Thành ngữ và ẩn dụ trong kinh doanh', 'Cấu tạo từ: tiền tố và hậu tố', 'Văn phong trang trọng và thân mật', 'Diễn đạt lại (paraphrase)', 'Ôn tập tuần 2 và kiểm tra',
    'Thuyết trình trước hội đồng và kể chuyện bằng dữ liệu', 'Đàm phán cấp cao', 'Lãnh đạo và quản lý thay đổi', 'Viết bài chuyên ngành', 'Họp trực tuyến quốc tế', 'Quản trị khủng hoảng và truyền thông', 'Kiểm tra tổng hợp và mô phỏng lãnh đạo',
    'IELTS Writing Task 2 band 7+', 'IELTS Speaking band 7+', 'Đọc học thuật nâng cao: suy luận và quan điểm tác giả', 'Nghe nâng cao: nhiều giọng, tốc độ nhanh', 'Phát âm nâng cao: ngữ điệu biểu cảm', 'Tư duy phản biện và đánh giá lập luận', 'Tóm tắt và tổng hợp nhiều nguồn', 'Đề thi mô phỏng C1', 'Kiểm tra cuối khoá C1 và tự học suốt đời'
  ].map((ten, i) => ({ n: i + 1, ten }));
  const stages = [
    { ten: '🏛️ Giai đoạn 1 – Cấu trúc nâng cao', tu: 1, den: 7 }, { ten: '🎨 Giai đoạn 2 – Từ vựng tinh tế', tu: 8, den: 14 },
    { ten: '👑 Giai đoạn 3 – Lãnh đạo và chuyên môn', tu: 15, den: 21 }, { ten: '🎯 Giai đoạn 4 – Thành thạo và IELTS 7+', tu: 22, den: 30 }
  ];

  /* ================= NGÀY 1 ================= */
  const d1 = {
    n: 1, ten: plan[0].ten, kinds: K,
    muc: 'Dùng đảo ngữ sau trạng từ phủ định / hạn chế để nhấn mạnh trong diễn văn, báo cáo, bài viết học thuật.',
    hoc: `${tbl(['Đầu câu', 'Ví dụ'], [['Never (before) / Rarely / Seldom', 'Rarely have we seen such rapid growth.'], ['Not only … but (also)', 'Not only did the system fail, but the backup also failed.'], ['No sooner … than / Hardly … when', 'No sooner had we launched the app than complaints started.'], ['Only when / Only after / Only by', 'Only by working together can we solve this.'], ['Under no circumstances / On no account', 'Under no circumstances should passwords be shared.'], ['Little', 'Little did we know that the market would collapse.'], ['So + adj / Such + be', 'So successful was the campaign that it was extended.']])}
      ${tip('🎤 Đảo ngữ nghe trang trọng và mạnh. Dùng 1–2 lần trong bài nói/viết là đủ; lạm dụng sẽ thiếu tự nhiên.')}${G('dao-ngu', 'Đảo ngữ')}`,
    vocab: [
      w('rarely', '/ˈrerli/', 'hiếm khi', '', ['Rarely have I seen such dedication.', '', 'Hiếm khi tôi thấy sự tận tâm như vậy.']),
      w('seldom', '/ˈseldəm/', 'ít khi', '', ['Seldom do we get a second chance.', '', 'Ít khi ta có cơ hội thứ hai.']),
      w('no sooner', '/noʊ ˈsuːnər/', 'vừa mới … thì', '', ['No sooner had I sat down than the phone rang.', '', 'Vừa ngồi xuống thì điện thoại reo.']),
      w('under no circumstances', '/ˈʌndər noʊ ˈsɜːrkəmstænsɪz/', 'trong bất kỳ trường hợp nào cũng không', '', ['Under no circumstances should you leave.', '', 'Bất kỳ trường hợp nào bạn cũng không được rời đi.']),
      w('little did', '/ˈlɪtl dɪd/', 'hầu như không (biết…)', '', ['Little did she know what would happen.', '', 'Cô ấy hầu như không biết điều gì sẽ xảy ra.']),
      w('only by', '/ˈoʊnli baɪ/', 'chỉ bằng cách', '', ['Only by cooperating can we succeed.', '', 'Chỉ bằng cách hợp tác ta mới thành công.']),
      w('unprecedented', '/ʌnˈpresɪdentɪd/', 'chưa từng có', '', ['The growth was unprecedented.', '', 'Tăng trưởng chưa từng có.']),
      w('dedication', '/ˌdedɪˈkeɪʃn/', 'sự tận tâm', '', ['Thank you for your dedication.', '', 'Cảm ơn sự tận tâm của bạn.']),
      w('collapse', '/kəˈlæps/', 'sụp đổ', '', ['The market collapsed in 2008.', '', 'Thị trường sụp đổ năm 2008.']),
      w('emphasis', '/ˈemfəsɪs/', 'sự nhấn mạnh', '', ['Inversion adds emphasis.', '', 'Đảo ngữ tăng nhấn mạnh.'])
    ],
    qs: [
      ['mc', 'Rarely ___ such a talented team.', 'have I worked with', ['I have worked with', 'I worked with', 'worked I with'], 'Đảo trợ động từ.'],
      ['mc', 'Not only ___ the deadline, but they also exceeded the budget.', 'did they miss', ['they missed', 'they did miss', 'missed they'], 'Not only + đảo.'],
      ['mc', 'No sooner had the meeting started ___ the power went out.', 'than', ['when', 'then', 'that'], 'No sooner … than.'],
      ['mc', 'Under no circumstances ___ customer data be shared.', 'should', ['you should', 'can you', 'do'], 'Đảo modal.'],
      ['mc', '___ did we know that the company would be sold.', 'Little', ['Few', 'Less', 'Small'], 'Little did…'],
      ['hear', "Only by investing in our people can we build a sustainable future.", 'Chỉ bằng cách đầu tư vào con người mới xây dựng tương lai bền vững.', ['Đầu tư vào máy móc là đủ.', 'Không cần đầu tư.', 'Tương lai không bền vững.'], 'Only by…'],
      ['order', 'Sắp xếp: “Hiếm khi chúng tôi thấy tăng trưởng nhanh như vậy.”', ['Rarely', 'have we', 'seen', 'such rapid growth.'], 'Rarely have we seen such rapid growth.']
    ],
    noi: [['*Rarely* have we seen → such *rapid* *growth*. ↘', 'Hiếm khi thấy tăng trưởng nhanh như vậy.'], ['Under *no* *circumstances* → should passwords be *shared*. ↘', 'Bất kỳ trường hợp nào cũng không chia sẻ mật khẩu.'], ['*Only* by working *together* → can we *solve* this. ↘', 'Chỉ khi hợp tác ta mới giải quyết được.']],
    hoithoai: {
      ctx: 'Em soạn bài phát biểu tổng kết năm cùng chuyên viên truyền thông người Anh.', vai: 'Chuyên viên góp ý, em nâng câu văn.', ai: '🎙️ Speechwriter',
      luot: [
        T(['"We have never had such a good year." Can you make it more powerful?', '', 'Làm câu này mạnh hơn?'], ['Never before have we had such an exceptional year.', 'Chưa bao giờ chúng ta có một năm xuất sắc như vậy.', 'Đảo ngữ + từ mạnh.'], ['Never we have had such year.', 'Thiếu đảo đúng.'], ['We never have good year before.', 'Sai.']),
        T(['"The team met the target and also beat it by 20%." Use "Not only".', '', 'Dùng Not only.'], ['Not only did the team meet the target, but it also exceeded it by 20%.', 'Không chỉ đạt chỉ tiêu, đội còn vượt 20%.', 'Not only did + but also.'], ['Not only the team met the target.', 'Thiếu đảo.'], ['Not only met the team.', 'Sai trật tự.']),
        T(['And a strong closing line about teamwork?', '', 'Câu kết mạnh về tinh thần đồng đội?'], ['Only by continuing to work together can we make next year even better.', 'Chỉ khi tiếp tục cùng nhau, năm sau mới tốt hơn nữa.', 'Only by + đảo.'], ['Only by work together we can.', 'Sai dạng và thiếu đảo.'], ['Together is good.', 'Thiếu sức nặng.'])
      ], ket: 'Em đã dùng đảo ngữ để bài phát biểu mạnh mẽ hơn.'
    },
    tom: ['Never / Rarely / Not only / No sooner / Only by / Under no circumstances / Little', 'Dùng vừa phải'], nguphap: 'Đảo ngữ nhấn mạnh', phatam: 'Nhấn mạnh từ đầu câu, ngắt nhẹ trước mệnh đề chính',
    loi: ['Quên đảo trợ động từ', 'Lạm dụng đảo ngữ'], btvn: ['Viết lại 8 câu thường thành câu đảo ngữ', 'Viết đoạn phát biểu 120 từ dùng 2 đảo ngữ', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 2 ================= */
  const d2 = {
    n: 2, ten: plan[1].ten, kinds: K,
    muc: 'Dùng câu chẻ (It… that / What… is / All… is / The reason why…) và đặt thông tin mới cuối câu để nhấn mạnh tự nhiên.',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ', 'Nhấn'], [['It is / was X that / who…', 'It was the IT team that solved the issue.', 'X (không phải ai khác)'], ['What + S + V + is / was…', 'What we need is a clear strategy.', 'điều cần nói'], ['All (that) + S + V + is…', 'All I\'m asking for is a little patience.', 'chỉ một điều'], ['The thing / The reason why… is (that)…', 'The reason why we failed is that we ignored the data.', 'lý do'], ['What happened was (that)…', 'What happened was that the server overheated.', 'kể sự việc']])}
      ${tip('🧠 Nguyên tắc <b>thông tin cũ trước – thông tin mới sau</b> (end-focus) giúp câu dễ hiểu. Câu chẻ là công cụ đưa thông tin quan trọng vào vị trí nhấn.')}${G('cau-che', 'Câu chẻ')}`,
    vocab: [
      w('strategy', '/ˈstrætədʒi/', 'chiến lược', '', ['What we need is a long-term strategy.', '', 'Điều ta cần là chiến lược dài hạn.']),
      w('patience', '/ˈpeɪʃns/', 'sự kiên nhẫn', '', ["All I'm asking for is patience.", '', 'Tôi chỉ xin sự kiên nhẫn.']),
      w('ignore', '/ɪɡˈnɔːr/', 'phớt lờ', '', ['We ignored the warning signs.', '', 'Chúng ta đã phớt lờ dấu hiệu cảnh báo.']),
      w('overheat', '/ˌoʊvərˈhiːt/', 'quá nhiệt', '', ['The server overheated.', '', 'Máy chủ bị quá nhiệt.']),
      w('highlight', '/ˈhaɪlaɪt/', 'làm nổi bật', '', ['I want to highlight one point.', '', 'Tôi muốn làm nổi bật một điểm.']),
      w('key takeaway', '/kiː ˈteɪkəweɪ/', 'thông điệp chính', '', ['The key takeaway is simple.', '', 'Thông điệp chính rất đơn giản.']),
      w('stakeholder', '/ˈsteɪkhoʊldər/', 'bên liên quan', '', ['We must inform all stakeholders.', '', 'Phải thông báo tất cả các bên liên quan.']),
      w('transparency', '/trænsˈpærənsi/', 'sự minh bạch', '', ['What customers want is transparency.', '', 'Điều khách hàng muốn là minh bạch.']),
      w('underlying', '/ˌʌndərˈlaɪɪŋ/', 'cơ bản, tiềm ẩn', '', ['What is the underlying problem?', '', 'Vấn đề cốt lõi là gì?']),
      w('it is not … but', '/ɪt ɪz nɑːt … bʌt/', 'không phải … mà là', '', ["It's not the price but the service that matters.", '', 'Không phải giá mà là dịch vụ mới quan trọng.'])
    ],
    qs: [
      ['mc', '___ was the CFO who approved the budget.', 'It', ['What', 'That', 'There'], 'It was … who.'],
      ['mc', '___ customers really want is transparency.', 'What', ['That', 'It', 'Which'], 'What-cleft.'],
      ['mc', "All we need ___ a little more time.", 'is', ['are', 'was being', 'it is'], 'All … is.'],
      ['mc', 'The reason why the project failed ___ that we ignored the data.', 'is', ['because', 'was because of', 'why'], 'The reason … is that.'],
      ['mc', '“It\'s not the price but the service that matters.” nhấn mạnh?', 'dịch vụ', ['giá', 'cả hai như nhau', 'không gì cả'], 'not X but Y.'],
      ['hear', "What happened was that the cooling system failed and the server overheated.", 'Hệ thống làm mát hỏng nên máy chủ quá nhiệt.', ['Máy chủ bị trộm.', 'Hệ thống làm mát quá lạnh.', 'Mất điện toàn bộ.'], 'What happened was…'],
      ['order', 'Sắp xếp: “Điều ta cần là một chiến lược rõ ràng.”', ['What', 'we need', 'is', 'a clear strategy.'], 'What we need is a clear strategy.']
    ],
    noi: [['*What* we need → is a *clear* *strategy*. ↘', 'Điều ta cần là chiến lược rõ ràng.'], ['It was the *IT* *team* → that *solved* the *issue*. ↘', 'Chính đội IT đã giải quyết.'], ["It's not the *price* → but the *service* that *matters*. ↘", 'Không phải giá mà là dịch vụ mới quan trọng.']],
    hoithoai: {
      ctx: 'Hội đồng hỏi em về nguyên nhân sự cố và bài học, em dùng câu chẻ để nhấn ý.', vai: 'Thành viên hội đồng hỏi, em trả lời.', ai: '🏛️ Board',
      luot: [
        T(['Was it a software bug that caused the outage?', '', 'Có phải lỗi phần mềm gây sự cố?'], ["No. It was the cooling system, not the software, that failed.", 'Không. Chính hệ thống làm mát, không phải phần mềm, bị hỏng.', 'It was … that.'], ['No, cooling system fail.', 'Thiếu nhấn và ngữ pháp.'], ['Yes, software.', 'Sai thông tin.']),
        T(["So what do we need to do?", '', 'Vậy ta cần làm gì?'], ['What we need is a monitoring system that alerts us before temperatures become critical.', 'Điều ta cần là hệ thống giám sát cảnh báo trước khi nhiệt độ nguy hiểm.', 'What-cleft.'], ['We need what monitoring.', 'Sai trật tự.'], ['Need monitor.', 'Câu cụt.']),
        T(["And the key lesson?", '', 'Bài học chính?'], ["The key takeaway is that we ignored early warning signs – and that's what we must change.", 'Thông điệp chính là ta đã phớt lờ dấu hiệu sớm – và đó là điều phải thay đổi.', 'Nhấn bài học.'], ['Lesson is warning.', 'Mơ hồ.'], ['No lesson.', 'Thiếu trách nhiệm.'])
      ], ket: 'Em đã nhấn thông tin then chốt bằng câu chẻ.'
    },
    tom: ['It… that / What… is / All… is', 'The reason why… is that', 'End-focus'], nguphap: 'Câu chẻ; nhấn thông tin', phatam: 'Nhấn mạnh phần được chẻ',
    loi: ['The reason is because', 'What … are (sai hoà hợp)'], btvn: ['Viết lại 6 câu thường thành câu chẻ', 'Trình bày nguyên nhân một vấn đề 1 phút dùng 3 câu chẻ', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 3 ================= */
  const d3 = {
    n: 3, ten: plan[2].ten, kinds: K,
    muc: 'Dùng thức giả định (suggest that he go, it is vital that…), It\'s (high) time, would rather, as if, lest / should trong văn trang trọng.',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ'], [['suggest / recommend / insist / require / demand + that + S + V nguyên mẫu', 'The auditor recommended that the bank review its procedures.'], ['It is essential / vital / imperative that + S + V nguyên mẫu', 'It is imperative that every employee complete the training.'], ['If + S + were to + V (giả định trang trọng)', 'If interest rates were to rise, demand would fall.'], ["It's (high) time + S + V2", "It's high time we modernised our systems."], ['would rather + S + V2', "I'd rather you kept this confidential."], ['as if / as though + V2 / had V3', 'He spoke as if he had seen it himself.']])}
      ${tip('📝 Trong tiếng Anh – Mỹ, giả định rất phổ biến trong văn bản pháp lý, quy định: <i>The board requires that all members <b>be</b> present.</i>')}${G('gia-dinh', 'Thức giả định')}`,
    vocab: [
      w('imperative', '/ɪmˈperətɪv/', 'cấp thiết, bắt buộc', '', ['It is imperative that we act now.', '', 'Cấp thiết là chúng ta hành động ngay.']),
      w('insist', '/ɪnˈsɪst/', 'khăng khăng, yêu cầu', '', ['She insisted that he be informed.', '', 'Cô ấy yêu cầu phải báo cho anh ấy.']),
      w('auditor', '/ˈɔːdɪtər/', 'kiểm toán viên', '', ['The auditor found no errors.', '', 'Kiểm toán viên không thấy sai sót.']),
      w('confidential', '/ˌkɑːnfɪˈdenʃl/', 'bảo mật', '', ['This information is confidential.', '', 'Thông tin này là bảo mật.']),
      w('modernise', '/ˈmɑːdərnaɪz/', 'hiện đại hoá', '', ["It's time we modernised the branch.", '', 'Đã đến lúc hiện đại hoá chi nhánh.']),
      w('were to', '/wɜːr tuː/', 'nếu (giả định trang trọng)', '', ['If prices were to fall, we would lose money.', '', 'Nếu giá giảm, ta sẽ lỗ.']),
      w('requirement', '/rɪˈkwaɪərmənt/', 'yêu cầu', '', ['It is a legal requirement.', '', 'Đó là yêu cầu pháp lý.']),
      w('procedure', '/prəˈsiːdʒər/', 'quy trình', '', ['Follow the procedure strictly.', '', 'Tuân thủ quy trình nghiêm ngặt.']),
      w('mandatory', '/ˈmændətɔːri/', 'bắt buộc', '', ['Training is mandatory for all staff.', '', 'Đào tạo là bắt buộc với mọi nhân viên.']),
      w('as though', '/æz ðoʊ/', 'như thể', '', ['He acts as though he owned the company.', '', 'Anh ta hành xử như thể sở hữu công ty.'])
    ],
    qs: [
      ['mc', 'The manager insisted that the report ___ resubmitted.', 'be', ['is', 'was', 'will be'], 'Giả định → be.'],
      ['mc', 'It is essential that every customer ___ their identity.', 'verify', ['verifies', 'verified', 'will verify'], 'V nguyên mẫu.'],
      ['mc', "It's high time the company ___ its website.", 'updated', ['update', 'updates', 'has updated'], "It's time + V2."],
      ['mc', 'If the economy ___ to slow down, we would cut costs.', 'were', ['was being', 'is', 'will be'], 'were to.'],
      ['mc', 'mandatory nghĩa là?', 'bắt buộc', ['tuỳ chọn', 'đề xuất', 'miễn phí'], 'mandatory.'],
      ['hear', "The auditor recommended that the bank strengthen its internal controls.", 'Kiểm toán viên khuyến nghị tăng cường kiểm soát nội bộ.', ['Đã tăng cường xong.', 'Không cần thay đổi.', 'Giảm kiểm soát.'], 'recommended that + V.'],
      ['order', 'Sắp xếp: “Tôi muốn bạn giữ bí mật chuyện này.”', ["I'd rather", 'you', 'kept', 'this confidential.'], "I'd rather you kept this confidential."]
    ],
    noi: [['It is *imperative* that every employee → *complete* the *training*. ↘', 'Bắt buộc mọi nhân viên hoàn thành đào tạo.'], ["It's *high* time we *modernised* our *systems*. ↘", 'Đã đến lúc hiện đại hoá hệ thống.'], ["I'd *rather* you kept this *confidential*. ↘", 'Tôi muốn bạn giữ bí mật chuyện này.']],
    hoithoai: {
      ctx: 'Em soạn thông báo nội bộ về quy định bảo mật mới cùng trưởng bộ phận tuân thủ.', vai: 'Bà Patel góp ý văn phong.', ai: '⚖️ Compliance head',
      luot: [
        T(['How would you phrase the training requirement formally?', '', 'Viết yêu cầu đào tạo trang trọng thế nào?'], ['It is mandatory that all staff complete the security training by 30 June.', 'Bắt buộc mọi nhân viên hoàn thành đào tạo bảo mật trước 30/6.', 'Giả định trang trọng.'], ['All staff must completes training.', 'Sai.'], ['It is mandatory that all staff completes.', 'Giả định → complete.']),
        T(['And about sharing customer data?', '', 'Còn chia sẻ dữ liệu khách hàng?'], ['The policy requires that customer data never be shared through personal email.', 'Quy định yêu cầu dữ liệu khách hàng không bao giờ được chia sẻ qua email cá nhân.', 'requires that + be.'], ['The policy requires data is never shared.', 'Văn trang trọng nên dùng be.'], ['Do not share please maybe.', 'Thiếu trang trọng.']),
        T(["Good. One more line to show urgency?", '', 'Thêm một câu thể hiện tính cấp bách?'], ["Given recent incidents, it's high time we treated data security as a top priority.", 'Với các sự cố gần đây, đã đến lúc coi bảo mật dữ liệu là ưu tiên hàng đầu.', "It's high time + V2."], ["It's time we treat data.", 'V2: treated.'], ['Time is high for security.', 'Sai.'])
      ], ket: 'Em đã viết thông báo trang trọng với thức giả định.'
    },
    tom: ['suggest / require + that + V', 'It is essential that…', "It's high time + V2", 'were to, would rather, as if'], nguphap: 'Thức giả định', phatam: 'imperative /ɪmˈperətɪv/, mandatory /ˈmændətɔːri/',
    loi: ['Chia động từ sau that (requires that he goes)', "It's time + V nguyên mẫu"], btvn: ['Viết thông báo nội bộ 120 từ dùng 3 cấu trúc giả định', 'Viết lại 5 quy định công ty theo văn phong trang trọng', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 4 ================= */
  const d4 = {
    n: 4, ten: plan[3].ten, kinds: K,
    muc: 'Chuyển động từ/tính từ thành danh từ để viết học thuật gọn, khách quan; dùng cụm danh từ dài có hậu bổ ngữ.',
    hoc: `${tbl(['Văn nói / thường', 'Văn học thuật (danh từ hoá)'], [['The bank decided to close three branches, which surprised customers.', "The bank's decision to close three branches came as a surprise to customers."], ['Because prices rose quickly, people bought less.', 'The rapid rise in prices led to a decline in consumption.'], ['If we analyse the data carefully, we can see…', 'A careful analysis of the data reveals…'], ['People are worried that AI will replace jobs.', 'There is growing concern over the potential replacement of jobs by AI.']])}
      ${tbl(['Động từ / tính từ', 'Danh từ'], [['decide', 'decision'], ['fail', 'failure'], ['grow', 'growth'], ['reduce', 'reduction'], ['able', 'ability'], ['efficient', 'efficiency'], ['available', 'availability'], ['implement', 'implementation']])}
      ${G('danh-tu-hoa', 'Danh từ hoá')}`,
    vocab: [
      w('nominalisation', '/ˌnɑːmɪnəlaɪˈzeɪʃn/', 'danh từ hoá', '', ['Nominalisation makes writing more formal.', '', 'Danh từ hoá làm văn trang trọng hơn.']),
      w('consumption', '/kənˈsʌmpʃn/', 'tiêu dùng', '', ['Energy consumption has risen.', '', 'Tiêu thụ năng lượng đã tăng.']),
      w('efficiency', '/ɪˈfɪʃnsi/', 'hiệu suất', '', ['Automation improves efficiency.', '', 'Tự động hoá tăng hiệu suất.']),
      w('implementation', '/ˌɪmplɪmenˈteɪʃn/', 'việc triển khai', '', ['The implementation took six months.', '', 'Việc triển khai mất 6 tháng.']),
      w('reduction', '/rɪˈdʌkʃn/', 'sự cắt giảm', '', ['A reduction in costs is needed.', '', 'Cần cắt giảm chi phí.']),
      w('availability', '/əˌveɪləˈbɪləti/', 'tính sẵn có', '', ['The availability of credit increased.', '', 'Tín dụng sẵn có hơn.']),
      w('concern over', '/kənˈsɜːrn ˈoʊvər/', 'lo ngại về', '', ['There is concern over rising debt.', '', 'Có lo ngại về nợ tăng.']),
      w('lead to', '/liːd tuː/', 'dẫn đến', '', ['This led to a decline in sales.', '', 'Điều này dẫn đến doanh số giảm.']),
      w('objective', '/əbˈdʒektɪv/', 'khách quan; mục tiêu', '', ['Academic writing should be objective.', '', 'Văn học thuật nên khách quan.']),
      w('dense', '/dens/', 'dày đặc (thông tin)', '', ['Academic texts are often dense.', '', 'Văn bản học thuật thường dày đặc.'])
    ],
    qs: [
      ['mc', 'Danh từ của "efficient" là?', 'efficiency', ['efficiently', 'efficience', 'effect'], 'efficiency.'],
      ['mc', '"Prices rose rapidly." → There was a ___ rise in prices.', 'rapid', ['rapidly', 'rapidity', 'rapidness'], 'Tính từ bổ nghĩa danh từ.'],
      ['mc', 'Câu học thuật hơn?', 'A careful analysis of the data reveals a clear trend.', ['If you look at the data, you can see a trend.', 'The data is like, showing a trend.', 'We looked and saw trend.'], 'Danh từ hoá.'],
      ['mc', 'Danh từ của "implement" là?', 'implementation', ['implementing', 'implement', 'implementment'], 'implementation.'],
      ['mc', 'The fall in demand ___ a reduction in staff.', 'led to', ['lead for', 'leaded to', 'leads of'], 'lead to.'],
      ['hear', "There is growing concern over the potential replacement of routine jobs by artificial intelligence.", 'Ngày càng lo ngại AI có thể thay thế công việc lặp lại.', ['AI đã thay thế mọi việc.', 'Không ai lo ngại về AI.', 'AI tạo việc lặp lại.'], 'concern over… replacement.'],
      ['order', 'Sắp xếp: “Việc triển khai mất sáu tháng.”', ['The implementation', 'took', 'six', 'months.'], 'The implementation took six months.']
    ],
    noi: [['A *careful* *analysis* of the *data* → *reveals* a clear *trend*. ↘', 'Phân tích kỹ dữ liệu cho thấy xu hướng rõ.'], ['The rapid *rise* in *prices* → led to a *decline* in *consumption*. ↘', 'Giá tăng nhanh dẫn đến tiêu dùng giảm.'], ['There is growing *concern* over *rising* *debt*. ↘', 'Ngày càng lo ngại về nợ tăng.']],
    hoithoai: {
      ctx: 'Biên tập viên tạp chí ngành ngân hàng góp ý bài viết của em.', vai: 'Biên tập viên yêu cầu văn phong học thuật.', ai: '📰 Editor',
      luot: [
        T(['"Because banks use AI, they work better." Make it academic.', '', 'Viết học thuật hơn.'], ['The adoption of AI has led to significant improvements in operational efficiency.', 'Việc áp dụng AI dẫn đến cải thiện đáng kể hiệu suất vận hành.', 'Danh từ hoá.'], ['Banks use AI so good.', 'Văn nói.'], ['AI adoption make better.', 'Sai ngữ pháp.']),
        T(['"People worry that hackers will steal data." Again, more formal.', '', 'Trang trọng hơn.'], ['There is widespread concern over the theft of customer data by cybercriminals.', 'Có lo ngại rộng rãi về việc tội phạm mạng đánh cắp dữ liệu khách hàng.', 'concern over + danh từ.'], ['People are worry hackers.', 'Sai.'], ['Hackers steal, people worried.', 'Văn nói.']),
        T(['Good. Is there a risk of overdoing it?', '', 'Có rủi ro lạm dụng không?'], ['Yes. Too much nominalisation can make the text dense, so I balance it with clear verbs.', 'Có. Danh từ hoá quá nhiều làm văn dày đặc, nên tôi cân bằng với động từ rõ ràng.', 'Nhận thức tinh tế.'], ['No, more nouns is always better.', 'Thiếu cân nhắc.'], ['I don\'t know.', 'Không trả lời.'])
      ], ket: 'Em đã chuyển văn nói thành văn học thuật.'
    },
    tom: ['Danh từ hoá', 'Cụm danh từ dài', 'Cân bằng, tránh dày đặc'], nguphap: 'Nominalisation; lead to; concern over', phatam: 'Nhấn âm đúng: implemenTAtion, efFIciency',
    loi: ['Sai dạng danh từ', 'Lạm dụng khiến khó đọc'], btvn: ['Viết lại 8 câu văn nói thành văn học thuật', 'Viết đoạn 150 từ học thuật về chủ đề ngành em', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 5 ================= */
  const d5 = {
    n: 5, ten: plan[4].ten, kinds: K,
    muc: 'Giảm mức khẳng định để lập luận học thuật đáng tin hơn: tend to, appear to, may, arguably, to a certain extent, it could be argued.',
    hoc: `${tbl(['Nhóm', 'Ví dụ'], [['Động từ', 'seem, appear, tend, suggest, indicate'], ['Modal', 'may, might, could'], ['Trạng từ', 'arguably, possibly, presumably, relatively, largely'], ['Tính từ', 'likely, possible, potential'], ['Cụm', 'to a certain extent, in most cases, it could be argued that, there is some evidence that']])}
      ${say('The findings suggest that remote work may, to a certain extent, improve employee well-being, although further research is needed.', 'Kết quả cho thấy làm việc từ xa có thể phần nào cải thiện sức khoẻ tinh thần nhân viên, dù cần nghiên cứu thêm.')}
      ${tip('⚖️ Không rào đón quá mức: "It might possibly perhaps be…" làm người đọc mất kiên nhẫn. Rào đón ở chỗ <b>thực sự chưa chắc</b>.')}${G('hedging', 'Rào đón')}`,
    vocab: [
      w('tend to', '/tend tuː/', 'có xu hướng', '', ['Older customers tend to prefer branches.', '', 'Khách lớn tuổi có xu hướng thích chi nhánh.']),
      w('appear to', '/əˈpɪr tuː/', 'có vẻ', '', ['The policy appears to be working.', '', 'Chính sách có vẻ hiệu quả.']),
      w('arguably', '/ˈɑːrɡjuəbli/', 'có thể nói là', '', ['It is arguably the best solution.', '', 'Có thể nói đó là giải pháp tốt nhất.']),
      w('to a certain extent', '/tə ə ˈsɜːrtn ɪkˈstent/', 'ở một mức độ nhất định', '', ['I agree to a certain extent.', '', 'Tôi đồng ý ở một mức độ nhất định.']),
      w('indicate', '/ˈɪndɪkeɪt/', 'cho thấy', '', ['The data indicate a slowdown.', '', 'Dữ liệu cho thấy sự chậm lại.']),
      w('presumably', '/prɪˈzuːməbli/', 'có lẽ, đoán chừng', '', ['Presumably, the costs will rise.', '', 'Có lẽ chi phí sẽ tăng.']),
      w('largely', '/ˈlɑːrdʒli/', 'phần lớn', '', ['The project was largely successful.', '', 'Dự án phần lớn thành công.']),
      w('well-being', '/ˌwel ˈbiːɪŋ/', 'sức khoẻ tinh thần, hạnh phúc', '', ['Employee well-being matters.', '', 'Sức khoẻ tinh thần nhân viên quan trọng.']),
      w('further research', '/ˈfɜːrðər rɪˈsɜːrtʃ/', 'nghiên cứu thêm', '', ['Further research is needed.', '', 'Cần nghiên cứu thêm.']),
      w('overgeneralise', '/ˌoʊvərˈdʒenrəlaɪz/', 'khái quát hoá quá mức', '', ['Avoid overgeneralising.', '', 'Tránh khái quát hoá quá mức.'])
    ],
    qs: [
      ['mc', 'Câu có rào đón hợp lý?', 'Young people tend to adopt new technology more quickly.', ['All young people love technology.', 'Young people always use apps.', 'Every young person is a tech expert.'], 'tend to.'],
      ['mc', 'The results ___ that the method is effective.', 'suggest', ['prove 100%', 'shows certainly', 'are suggest'], 'suggest.'],
      ['mc', 'It is ___ the most important invention of the century.', 'arguably', ['argue', 'arguing', 'argument'], 'arguably.'],
      ['mc', 'I agree with this view to a certain ___.', 'extent', ['extend', 'extension', 'extant'], 'to a certain extent.'],
      ['mc', 'Câu rào đón QUÁ MỨC?', 'It might possibly perhaps be somewhat true.', ['It may be true.', 'This is likely to be true.', 'It appears to be true.'], 'Lạm dụng.'],
      ['hear', "The data appear to indicate a slowdown, although further research is needed.", 'Dữ liệu có vẻ cho thấy chậm lại, cần nghiên cứu thêm.', ['Chắc chắn đã suy thoái.', 'Không có chậm lại.', 'Không cần nghiên cứu thêm.'], 'appear to indicate.'],
      ['order', 'Sắp xếp: “Dự án phần lớn thành công.”', ['The project', 'was', 'largely', 'successful.'], 'The project was largely successful.']
    ],
    noi: [['The findings *suggest* that → remote work *may* improve *well*-being. ↘', 'Kết quả cho thấy làm từ xa có thể cải thiện sức khoẻ tinh thần.'], ['It is *arguably* the most *cost*-effective *option*. ↘', 'Có thể nói đó là lựa chọn hiệu quả chi phí nhất.'], ['I *agree* → to a *certain* *extent*. ↘', 'Tôi đồng ý ở mức độ nhất định.']],
    hoithoai: {
      ctx: 'Em trả lời phỏng vấn của một tạp chí về chuyển đổi số ngân hàng.', vai: 'Phóng viên hỏi, em trả lời có rào đón.', ai: '🎤 Journalist',
      luot: [
        T(['Will digital banking replace branches completely?', '', 'Ngân hàng số sẽ thay thế hoàn toàn chi nhánh?'], ["It's unlikely in the short term. Branches will arguably remain important for complex services.", 'Ngắn hạn khó xảy ra. Có thể nói chi nhánh vẫn quan trọng cho dịch vụ phức tạp.', 'Rào đón hợp lý.'], ['Yes, 100% in five years.', 'Quá tuyệt đối.'], ['Never, branches are forever.', 'Cực đoan.']),
        T(['Are customers happy with the apps?', '', 'Khách hàng hài lòng với ứng dụng?'], ['Largely, yes. Younger customers tend to be very satisfied, whereas older ones appear to need more support.', 'Phần lớn có. Khách trẻ thường rất hài lòng, còn khách lớn tuổi có vẻ cần hỗ trợ thêm.', 'largely, tend to, appear to.'], ['Everyone loves them.', 'Khái quát quá.'], ['Nobody likes them.', 'Khái quát quá.']),
        T(["What's the biggest risk?", '', 'Rủi ro lớn nhất?'], ['Cybersecurity is presumably the main concern, although the evidence suggests fraud is falling.', 'An ninh mạng có lẽ là lo ngại chính, dù bằng chứng cho thấy gian lận đang giảm.', 'presumably + suggest.'], ['Hackers will destroy everything.', 'Phóng đại.'], ['There is no risk.', 'Thiếu trung thực.'])
      ], ket: 'Em đã trả lời phỏng vấn cân bằng, đáng tin.'
    },
    tom: ['Động từ / modal / trạng từ rào đón', 'Không rào đón quá mức'], nguphap: 'Hedging', phatam: 'arguably /ˈɑːrɡjuəbli/, presumably /prɪˈzuːməbli/',
    loi: ['Khái quát tuyệt đối (all, always, never)', 'Rào đón chồng chất'], btvn: ['Viết lại 6 câu tuyệt đối thành câu rào đón', 'Viết đoạn 150 từ phân tích một xu hướng có rào đón', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 6 ================= */
  const d6 = {
    n: 6, ten: plan[5].ten, kinds: K,
    muc: 'Viết và nói gọn bằng tỉnh lược (bỏ phần lặp), thay thế (so, do so, one, that of), mệnh đề phân từ nâng cao.',
    hoc: `${tbl(['Kỹ thuật', 'Ví dụ'], [['Tỉnh lược', "I wanted to go to the conference, but I couldn't (go)."], ['so / not thay mệnh đề', 'Will the system be ready? – I hope so. / I\'m afraid not.'], ['do so', 'Staff who wish to do so may work from home.'], ['one / ones', 'This model is cheaper than the old one.'], ['that of / those of', 'Our costs are lower than those of our competitors.'], ['Phân từ nâng cao', 'Having been warned twice, he was dismissed. / Given the risks, we postponed it.']])}
      ${tip('✂️ Người viết C1 tránh lặp từ. Thay vì lặp danh từ, dùng <b>that of / those of</b>; thay vì lặp mệnh đề, dùng <b>so / do so</b>.')}`,
    vocab: [
      w('ellipsis', '/ɪˈlɪpsɪs/', 'tỉnh lược', '', ['Ellipsis avoids repetition.', '', 'Tỉnh lược giúp tránh lặp.']),
      w('do so', '/duː soʊ/', 'làm như vậy', '', ['You may leave early if you wish to do so.', '', 'Bạn có thể về sớm nếu muốn.']),
      w('those of', '/ðoʊz əv/', 'những cái của', '', ['Our prices are lower than those of our rivals.', '', 'Giá của chúng tôi thấp hơn giá đối thủ.']),
      w('given', '/ˈɡɪvn/', 'xét đến, với', '', ['Given the risks, we waited.', '', 'Xét đến rủi ro, chúng tôi chờ.']),
      w('dismissed', '/dɪsˈmɪst/', 'bị sa thải; bị bác bỏ', '', ['He was dismissed for misconduct.', '', 'Anh ta bị sa thải vì vi phạm.']),
      w('rival', '/ˈraɪvl/', 'đối thủ', '', ['Our main rival launched a new app.', '', 'Đối thủ chính ra mắt ứng dụng mới.']),
      w('provided that', '/prəˈvaɪdɪd ðæt/', 'với điều kiện là', '', ['You can join, provided that you register.', '', 'Bạn tham gia được với điều kiện đăng ký.']),
      w('if so', '/ɪf soʊ/', 'nếu vậy', '', ['Is it urgent? If so, call me.', '', 'Có gấp không? Nếu có thì gọi tôi.']),
      w('if not', '/ɪf nɑːt/', 'nếu không', '', ['Are you free? If not, we can reschedule.', '', 'Bạn rảnh không? Nếu không ta dời lịch.']),
      w('repetition', '/ˌrepəˈtɪʃn/', 'sự lặp lại', '', ['Avoid unnecessary repetition.', '', 'Tránh lặp không cần thiết.'])
    ],
    qs: [
      ['mc', 'Our salaries are higher than ___ of other banks.', 'those', ['that', 'ones', 'them'], 'salaries số nhiều → those of.'],
      ['mc', 'The climate in Da Lat is cooler than ___ of Saigon.', 'that', ['those', 'it', 'one'], 'climate số ít → that of.'],
      ['mc', 'Will prices rise? – I\'m afraid ___.', 'so', ['it', 'that', 'yes'], "I'm afraid so."],
      ['mc', 'Employees may work remotely if they wish to ___.', 'do so', ['make so', 'do it so', 'so do'], 'do so.'],
      ['mc', '___ the circumstances, we accepted the offer.', 'Given', ['Giving', 'Gave', 'To give'], 'Given = xét đến.'],
      ['hear', "Is the issue urgent? If so, escalate it immediately. If not, log a ticket.", 'Nếu gấp thì báo lên ngay; nếu không thì tạo phiếu.', ['Luôn báo lên ngay.', 'Không bao giờ tạo phiếu.', 'Bỏ qua sự cố.'], 'If so / If not.'],
      ['order', 'Sắp xếp: “Xét đến rủi ro, chúng tôi hoãn lại.”', ['Given', 'the risks,', 'we', 'postponed it.'], 'Given the risks, we postponed it.']
    ],
    noi: [['Our *costs* are lower → than *those* of our *competitors*. ↘', 'Chi phí của chúng tôi thấp hơn đối thủ.'], ['Will it be *ready*? → I *hope* *so*. ↘', 'Sẽ xong chứ? Hy vọng vậy.'], ['*Given* the *risks*, → we *postponed* the *launch*. ↘', 'Xét đến rủi ro, chúng tôi hoãn ra mắt.']],
    hoithoai: {
      ctx: 'Em biên tập lại báo cáo so sánh chi phí của chi nhánh với đối thủ, tránh lặp từ.', vai: 'Đồng nghiệp đọc câu gốc, em viết gọn.', ai: '📝 Colleague',
      luot: [
        T(['"Our fees are lower than the fees of other banks."', '', 'Viết gọn câu này.'], ['Our fees are lower than those of other banks.', 'Phí của chúng tôi thấp hơn phí ngân hàng khác.', 'those of.'], ['Our fees are lower than that of other banks.', 'fees số nhiều → those.'], ['Our fees are lower than other banks fees of.', 'Sai.']),
        T(['"Customers who want to switch to e-statements can switch online."', '', 'Viết gọn.'], ['Customers who wish to switch to e-statements can do so online.', 'Khách muốn chuyển sang sao kê điện tử có thể làm online.', 'do so.'], ['Customers can switch so.', 'Sai.'], ['Customers switch switch online.', 'Lặp.']),
        T(['"Because we considered the risks, we delayed the launch." Use a participle.', '', 'Dùng phân từ.'], ['Having considered the risks, we delayed the launch.', 'Cân nhắc rủi ro xong, chúng tôi hoãn ra mắt.', 'Having V3.'], ['Considered the risks, we delayed.', 'Thiếu Having.'], ['Considering of risks delayed.', 'Sai.'])
      ], ket: 'Em đã viết gọn, tránh lặp như người dùng C1.'
    },
    tom: ['Tỉnh lược', 'so / not / do so', 'that of / those of', 'Given, Having V3'], nguphap: 'Ellipsis & substitution', phatam: "I hope so ↘ / I'm afraid not ↘",
    loi: ['that of cho danh từ số nhiều', 'Lặp danh từ'], btvn: ['Biên tập lại 1 trang email/báo cáo cũ bỏ lặp từ', 'Viết 6 câu với that of / those of / do so', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 7 ================= */
  const d7 = {
    n: 7, ten: plan[6].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Ôn giai đoạn 1: đảo ngữ, câu chẻ, giả định, danh từ hoá, rào đón, tỉnh lược – thay thế.',
    hoc: `<h4>Tóm tắt tuần 1</h4>${tbl(['Chủ điểm', 'Mẫu câu'], [['Đảo ngữ', 'Rarely have we… / Not only did… / Only by… can we…'], ['Câu chẻ', 'It was X that… / What we need is…'], ['Giả định', 'It is essential that he be… / It\'s high time we…'], ['Danh từ hoá', 'The rapid rise in… led to a decline in…'], ['Rào đón', 'tend to, appear to, arguably, to a certain extent'], ['Tỉnh lược – thay thế', 'those of, do so, I hope so, Given…']])}`,
    qs: [['mc', 'Not only ___ late, but he also forgot the slides.', 'was he', ['he was', 'did he was', 'he is'], 'Đảo to be.'], ['mc', 'It is vital that the data ___ protected.', 'be', ['is', 'are', 'will be'], 'Giả định.']],
    noi: [['*Seldom* do we get such an *opportunity*. ↘', 'Ít khi có cơ hội như vậy.'], ['What *matters* most → is *trust*. ↘', 'Điều quan trọng nhất là niềm tin.']],
    hoithoai: {
      ctx: 'Tổng ôn: em trình bày nhanh trước ban điều hành về một sáng kiến.', vai: 'Ban điều hành hỏi, em trả lời bằng cấu trúc C1.', ai: '🏛️ Executive',
      luot: [
        T(['Why should we prioritise this?', '', 'Vì sao nên ưu tiên việc này?'], ['Rarely have we had such a clear opportunity to cut costs and improve service at the same time.', 'Hiếm khi có cơ hội rõ ràng để vừa giảm chi phí vừa cải thiện dịch vụ.', 'Đảo ngữ.'], ['We rarely have opportunity.', 'Thiếu nhấn mạnh.'], ['Rarely we have had.', 'Thiếu đảo.']),
        T(["What's the core problem?", '', 'Vấn đề cốt lõi là gì?'], ["What slows us down is the manual approval process, not the technology.", 'Điều làm chậm là quy trình phê duyệt thủ công, không phải công nghệ.', 'Câu chẻ.'], ['Problem is slow.', 'Mơ hồ.'], ['It is slow what.', 'Sai.']),
        T(['How confident are you in the numbers?', '', 'Bạn tự tin vào số liệu tới đâu?'], ['The pilot data suggest savings of around 15%, although results may vary across regions.', 'Dữ liệu thí điểm cho thấy tiết kiệm khoảng 15%, dù kết quả có thể khác giữa các vùng.', 'Rào đón.'], ['100% sure, 15% everywhere.', 'Quá tuyệt đối.'], ['Not sure at all.', 'Thiếu tự tin.']),
        T(['What do you need from us?', '', 'Bạn cần gì từ chúng tôi?'], ['We recommend that the board approve a six-month pilot in five branches.', 'Chúng tôi khuyến nghị ban điều hành phê duyệt thí điểm 6 tháng ở 5 chi nhánh.', 'Giả định.'], ['We recommend the board approves.', 'Giả định → approve.'], ['Give money please.', 'Không chuyên nghiệp.'])
      ], ket: 'Em đã ôn trọn cấu trúc nâng cao C1!'
    },
    tom: ['Ôn tuần 1', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn', phatam: 'Nhấn ở vị trí đảo ngữ và câu chẻ',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: học lại ngày yếu', 'Làm 6 chủ điểm C1 trong Sổ tay ngữ pháp', 'Ghi âm bài nói 2 phút dùng ≥ 4 cấu trúc tuần 1']
  };

  /* ================= NGÀY 8 ================= */
  const d8 = {
    n: 8, ten: plan[7].ten, kinds: K,
    muc: 'Dùng kết hợp từ C1 trong học thuật và kinh doanh: trạng từ + tính từ, động từ + danh từ, tính từ + danh từ.',
    hoc: `${tbl(['Loại', 'Collocation C1'], [['Trạng từ + tính từ', 'highly unlikely, deeply concerned, fully aware, widely regarded, strongly recommended'], ['Động từ + danh từ', 'pose a threat, draw a conclusion, bear in mind, address an issue, exert pressure, seize an opportunity'], ['Tính từ + danh từ', 'a compelling argument, a viable option, a steep decline, a pivotal role, sweeping changes'], ['Danh từ + of', 'a sense of urgency, a lack of transparency, a wealth of experience']])}
      ${say('Rising cyber attacks pose a serious threat to the financial sector, and banks must address the issue with a sense of urgency.', 'Tấn công mạng gia tăng là mối đe doạ nghiêm trọng cho ngành tài chính, và ngân hàng phải giải quyết vấn đề này một cách khẩn trương.')}`,
    vocab: [
      w('pose a threat', '/poʊz ə θret/', 'gây ra mối đe doạ', '', ['Climate change poses a threat to farming.', '', 'BĐKH đe doạ nông nghiệp.']),
      w('address an issue', '/əˈdres ən ˈɪʃuː/', 'giải quyết một vấn đề', '', ['We must address this issue.', '', 'Ta phải giải quyết vấn đề này.']),
      w('draw a conclusion', '/drɔː ə kənˈkluːʒn/', 'rút ra kết luận', '', ["It's too early to draw a conclusion.", '', 'Còn quá sớm để kết luận.']),
      w('highly unlikely', '/ˈhaɪli ʌnˈlaɪkli/', 'rất khó xảy ra', '', ["It's highly unlikely to happen.", '', 'Rất khó xảy ra.']),
      w('widely regarded', '/ˈwaɪdli rɪˈɡɑːrdɪd/', 'được coi rộng rãi là', '', ['She is widely regarded as an expert.', '', 'Bà ấy được coi rộng rãi là chuyên gia.']),
      w('compelling argument', '/kəmˈpelɪŋ ˈɑːrɡjumənt/', 'lập luận thuyết phục', '', ['He made a compelling argument.', '', 'Anh ấy đưa ra lập luận thuyết phục.']),
      w('viable option', '/ˈvaɪəbl ˈɑːpʃn/', 'lựa chọn khả thi', '', ['Is outsourcing a viable option?', '', 'Thuê ngoài có khả thi không?']),
      w('pivotal role', '/ˈpɪvətl roʊl/', 'vai trò then chốt', '', ['She played a pivotal role in the merger.', '', 'Bà ấy đóng vai trò then chốt trong vụ sáp nhập.']),
      w('a sense of urgency', '/ə sens əv ˈɜːrdʒənsi/', 'tinh thần khẩn trương', '', ['We need a sense of urgency.', '', 'Cần tinh thần khẩn trương.']),
      w('seize an opportunity', '/siːz ən ˌɑːpərˈtuːnəti/', 'nắm bắt cơ hội', '', ['We must seize this opportunity.', '', 'Phải nắm bắt cơ hội này.'])
    ],
    qs: [
      ['mc', 'Cyber attacks ___ a serious threat to banks.', 'pose', ['make', 'do', 'give out'], 'pose a threat.'],
      ['mc', "It's too early to ___ a conclusion.", 'draw', ['make out', 'pull', 'take off'], 'draw a conclusion.'],
      ['mc', 'She is ___ regarded as the best analyst in the region.', 'widely', ['largely big', 'highly much', 'deeply'], 'widely regarded.'],
      ['mc', 'Is remote work a ___ option for bank tellers?', 'viable', ['vital', 'visible', 'valuable much'], 'viable option.'],
      ['mc', 'He played a ___ role in the success of the project.', 'pivotal', ['pivot', 'heavy', 'strong much'], 'pivotal role.'],
      ['hear', "It's highly unlikely that interest rates will fall this year, so we should seize this opportunity now.", 'Lãi suất rất khó giảm năm nay; nên nắm bắt cơ hội ngay.', ['Lãi suất chắc chắn giảm.', 'Nên chờ đến năm sau.', 'Không có cơ hội.'], 'highly unlikely / seize.'],
      ['order', 'Sắp xếp: “Ta phải giải quyết vấn đề này khẩn trương.”', ['We must', 'address', 'this issue', 'with a sense of urgency.'], 'We must address this issue with a sense of urgency.']
    ],
    noi: [['Cyber attacks *pose* a *serious* *threat* → to the *financial* *sector*. ↘', 'Tấn công mạng đe doạ nghiêm trọng ngành tài chính.'], ["It's *highly* *unlikely* to *happen*. ↘", 'Rất khó xảy ra.'], ['We must *seize* this *opportunity*. ↘', 'Ta phải nắm bắt cơ hội này.']],
    hoithoai: {
      ctx: 'Em tham gia hội thảo ngành về an ninh mạng ngân hàng.', vai: 'Người điều phối hỏi, em trả lời bằng collocation C1.', ai: '🎙️ Moderator',
      luot: [
        T(["How serious is the cyber threat for Vietnamese banks?", '', 'Mối đe doạ mạng nghiêm trọng thế nào?'], ['Ransomware poses a serious threat, and most banks are fully aware of the risks.', 'Mã độc tống tiền là mối đe doạ nghiêm trọng và hầu hết ngân hàng ý thức đầy đủ rủi ro.', 'pose a threat, fully aware.'], ['Ransomware makes a big threat.', 'pose a threat.'], ['It is very danger.', 'Sai.']),
        T(['Is outsourcing security a good idea?', '', 'Thuê ngoài bảo mật có nên không?'], ["It's a viable option for smaller banks, but larger ones should build in-house expertise.", 'Là lựa chọn khả thi cho ngân hàng nhỏ, nhưng ngân hàng lớn nên xây dựng năng lực nội bộ.', 'viable option.'], ["It's a visible option.", 'Sai từ.'], ['Outsourcing good.', 'Câu cụt.']),
        T(['What should regulators do?', '', 'Cơ quan quản lý nên làm gì?'], ['Regulators play a pivotal role. They should address the issue with a sense of urgency.', 'Cơ quan quản lý đóng vai trò then chốt. Họ nên giải quyết vấn đề khẩn trương.', 'pivotal role, address an issue.'], ['Regulators play big role.', 'Thiếu tinh tế.'], ['They should make the issue.', 'Sai.'])
      ], ket: 'Em đã thảo luận chuyên môn bằng collocation C1.'
    },
    tom: ['Trạng từ + tính từ', 'Động từ + danh từ', 'Tính từ + danh từ'], nguphap: 'Collocations C1', phatam: 'pivotal /ˈpɪvətl/, viable /ˈvaɪəbl/',
    loi: ['make a threat', 'very regarded'], btvn: ['Học 20 collocation C1 theo nhóm', 'Viết đoạn 150 từ dùng 6 collocation', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 9 ================= */
  const d9 = {
    n: 9, ten: plan[8].ten, kinds: K,
    muc: 'Chọn đúng từ trong nhóm đồng nghĩa theo sắc thái (tích cực / tiêu cực / trung tính) và mức độ trang trọng.',
    hoc: `${tbl(['Ý', 'Tích cực', 'Trung tính', 'Tiêu cực'], [['không tiêu nhiều tiền', 'thrifty, economical', 'careful with money', 'stingy, mean'], ['tự tin cao', 'self-assured', 'confident', 'arrogant'], ['kiên định', 'determined', 'firm', 'stubborn'], ['tò mò', 'inquisitive', 'curious', 'nosy'], ['thay đổi', 'reform, improve', 'change', 'disrupt']])}
      ${tbl(['Trang trọng', 'Thông thường'], [['commence', 'start'], ['purchase', 'buy'], ['obtain', 'get'], ['assist', 'help'], ['inform', 'tell'], ['sufficient', 'enough']])}
      ${tip('🎯 Chọn sai sắc thái có thể gây hiểu lầm: khen đồng nghiệp "stubborn" là chê; "determined" mới là khen.')}`,
    vocab: [
      w('connotation', '/ˌkɑːnəˈteɪʃn/', 'hàm ý, sắc thái', '', ['The word has a negative connotation.', '', 'Từ này có sắc thái tiêu cực.']),
      w('thrifty', '/ˈθrɪfti/', 'tiết kiệm (tích cực)', '', ['My grandmother is very thrifty.', '', 'Bà tôi rất tiết kiệm.']),
      w('stingy', '/ˈstɪndʒi/', 'keo kiệt', '', ["Don't be so stingy!", '', 'Đừng keo kiệt thế!']),
      w('determined', '/dɪˈtɜːrmɪnd/', 'quyết tâm', '', ['She is determined to succeed.', '', 'Cô ấy quyết tâm thành công.']),
      w('stubborn', '/ˈstʌbərn/', 'bướng bỉnh', '', ['He is too stubborn to listen.', '', 'Anh ta quá bướng để lắng nghe.']),
      w('arrogant', '/ˈærəɡənt/', 'kiêu ngạo', '', ['His tone sounded arrogant.', '', 'Giọng anh ta nghe kiêu ngạo.']),
      w('inquisitive', '/ɪnˈkwɪzətɪv/', 'ham hiểu biết', '', ['Inquisitive students ask good questions.', '', 'Học sinh ham hiểu biết hỏi hay.']),
      w('nosy', '/ˈnoʊzi/', 'tọc mạch', '', ['My neighbour is so nosy.', '', 'Hàng xóm tôi tọc mạch lắm.']),
      w('commence', '/kəˈmens/', 'bắt đầu (trang trọng)', '', ['The meeting will commence at 9.', '', 'Cuộc họp bắt đầu lúc 9 giờ.']),
      w('sufficient', '/səˈfɪʃnt/', 'đủ (trang trọng)', '', ['Is the budget sufficient?', '', 'Ngân sách có đủ không?'])
    ],
    qs: [
      ['mc', 'Khen đồng nghiệp không bỏ cuộc, dùng từ?', 'determined', ['stubborn', 'arrogant', 'nosy'], 'Tích cực.'],
      ['mc', 'Từ nào mang nghĩa tiêu cực?', 'stingy', ['thrifty', 'economical', 'careful with money'], 'keo kiệt.'],
      ['mc', 'Từ trang trọng của "buy" là?', 'purchase', ['get', 'take', 'pick'], 'purchase.'],
      ['mc', 'The ceremony will ___ at 10 a.m.', 'commence', ['commerce', 'comment', 'commend'], 'commence.'],
      ['mc', 'connotation nghĩa là?', 'hàm ý, sắc thái', ['định nghĩa từ điển', 'kết nối', 'phát âm'], 'connotation.'],
      ['hear', "She's not stubborn; she's simply determined to do things properly.", 'Cô ấy không bướng mà chỉ quyết tâm làm đúng.', ['Cô ấy bướng bỉnh.', 'Cô ấy lười.', 'Cô ấy kiêu ngạo.'], 'determined (tích cực).'],
      ['order', 'Sắp xếp: “Ngân sách có đủ không?”', ['Is', 'the budget', 'sufficient?'], 'Is the budget sufficient?']
    ],
    noi: [["She's not *stubborn*; → she's *determined*. ↘", 'Cô ấy không bướng; cô ấy quyết tâm.'], ['The *meeting* will *commence* at *nine*. ↘', 'Cuộc họp bắt đầu lúc 9 giờ.'], ['My grandmother is very *thrifty*. ↘', 'Bà tôi rất tiết kiệm.']],
    hoithoai: {
      ctx: 'Em viết thư giới thiệu (reference letter) cho một nhân viên cũ.', vai: 'HR góp ý chọn từ.', ai: '👩‍💼 HR manager',
      luot: [
        T(['You wrote that he is "stubborn". Is that what you mean?', '', 'Em viết anh ấy "stubborn". Ý em là vậy?'], ["No. I meant he is determined – he never gives up on difficult tasks.", 'Không. Ý tôi là anh ấy quyết tâm – không bỏ cuộc với việc khó.', 'Sửa sắc thái.'], ['Yes, stubborn is a compliment.', 'Sai sắc thái.'], ['He is arrogant.', 'Tiêu cực hơn.']),
        T(['And "he asks a lot of questions"?', '', 'Còn "anh ấy hỏi nhiều"?'], ["I'd describe him as inquisitive. He always wants to understand the root cause.", 'Tôi tả anh ấy là ham hiểu biết, luôn muốn hiểu nguyên nhân gốc.', 'inquisitive (tích cực).'], ['He is nosy.', 'Tiêu cực.'], ['He is curious too much.', 'Thiếu tinh tế.']),
        T(["Good. Make 'He started working here in 2018' more formal.", '', 'Trang trọng hơn.'], ['He commenced employment with us in 2018.', 'Anh ấy bắt đầu làm việc với chúng tôi năm 2018.', 'commence employment.'], ['He began to working here.', 'Sai.'], ['He start job 2018.', 'Sai.'])
      ], ket: 'Em đã chọn từ đúng sắc thái và văn phong.'
    },
    tom: ['Tích cực / trung tính / tiêu cực', 'Từ trang trọng', 'Hàm ý (connotation)'], nguphap: 'Lựa chọn từ vựng', phatam: 'thrifty /ˈθrɪfti/, inquisitive /ɪnˈkwɪzətɪv/',
    loi: ['Khen bằng từ tiêu cực', 'Dùng từ trang trọng trong văn nói thân mật'], btvn: ['Làm bảng 10 nhóm từ đồng nghĩa có sắc thái', 'Viết thư giới thiệu 150 từ', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 10 ================= */
  const d10 = {
    n: 10, ten: plan[9].ten, kinds: K,
    muc: 'Hiểu và dùng ẩn dụ, thành ngữ kinh doanh C1 trong báo chí và họp chiến lược.',
    hoc: `${tbl(['Biểu đạt', 'Nghĩa', 'Ví dụ'], [['low-hanging fruit', 'việc dễ đạt kết quả nhanh', "Let's start with the low-hanging fruit."], ['move the needle', 'tạo khác biệt đáng kể', "Will this campaign really move the needle?"], ['a game changer', 'thứ thay đổi cuộc chơi', 'Mobile payments were a game changer.'], ['the bottom line', 'lợi nhuận; điều cốt lõi', 'The bottom line is we need more customers.'], ['a level playing field', 'sân chơi bình đẳng', 'Regulation should create a level playing field.'], ['in the red / in the black', 'lỗ / có lãi', 'The branch is back in the black.'], ['a double-edged sword', 'con dao hai lưỡi', 'AI is a double-edged sword.'], ['ballpark figure', 'con số ước chừng', 'Can you give me a ballpark figure?']])}
      ${tip('📰 Báo kinh tế (The Economist, FT, Bloomberg) dùng rất nhiều ẩn dụ: <i>headwinds</i> (khó khăn), <i>tailwinds</i> (thuận lợi), <i>soft landing</i> (hạ cánh mềm).')}`,
    vocab: [
      w('low-hanging fruit', '/loʊ ˈhæŋɪŋ fruːt/', 'việc dễ thu kết quả nhanh', '', ["Let's go for the low-hanging fruit first.", '', 'Làm việc dễ có kết quả trước.']),
      w('move the needle', '/muːv ðə ˈniːdl/', 'tạo khác biệt đáng kể', '', ["This won't move the needle.", '', 'Việc này không tạo khác biệt.']),
      w('game changer', '/ɡeɪm ˈtʃeɪndʒər/', 'thứ thay đổi cuộc chơi', '', ['QR payments were a game changer.', '', 'Thanh toán QR là bước thay đổi cuộc chơi.']),
      w('the bottom line', '/ðə ˈbɑːtəm laɪn/', 'lợi nhuận; điểm cốt lõi', '', ['The bottom line is profit.', '', 'Điểm cốt lõi là lợi nhuận.']),
      w('level playing field', '/ˈlevl ˈpleɪɪŋ fiːld/', 'sân chơi bình đẳng', '', ['We want a level playing field.', '', 'Chúng tôi muốn sân chơi bình đẳng.']),
      w('in the red', '/ɪn ðə red/', 'thua lỗ', '', ['The company is in the red.', '', 'Công ty đang thua lỗ.']),
      w('double-edged sword', '/ˈdʌbl edʒd sɔːrd/', 'con dao hai lưỡi', '', ['Social media is a double-edged sword.', '', 'MXH là con dao hai lưỡi.']),
      w('ballpark figure', '/ˈbɔːlpɑːrk ˈfɪɡjər/', 'con số ước chừng', '', ['Give me a ballpark figure.', '', 'Cho tôi con số ước chừng.']),
      w('headwinds', '/ˈhedwɪndz/', 'trở ngại (kinh tế)', '', ['The economy faces strong headwinds.', '', 'Kinh tế gặp nhiều trở ngại.']),
      w('soft landing', '/sɔːft ˈlændɪŋ/', 'hạ cánh mềm', '', ['Economists hope for a soft landing.', '', 'Các nhà kinh tế mong hạ cánh mềm.'])
    ],
    qs: [
      ['mc', '“The branch is in the red” nghĩa là?', 'chi nhánh đang lỗ', ['chi nhánh sơn đỏ', 'chi nhánh có lãi', 'chi nhánh đóng cửa'], 'in the red.'],
      ['mc', 'Việc dễ đạt kết quả nhanh gọi là?', 'low-hanging fruit', ['game changer', 'headwinds', 'bottom line'], 'low-hanging fruit.'],
      ['mc', 'Can you give me a ___ figure? I don\'t need exact numbers.', 'ballpark', ['football', 'playground', 'stadium'], 'ballpark figure.'],
      ['mc', 'AI can save time but also spread errors. It\'s a ___.', 'double-edged sword', ['level playing field', 'soft landing', 'low-hanging fruit'], 'Con dao hai lưỡi.'],
      ['mc', '“headwinds” trong báo kinh tế là?', 'trở ngại, khó khăn', ['thuận lợi', 'lợi nhuận', 'gió lớn thật'], 'headwinds.'],
      ['hear', "Mobile payments were a real game changer, but the bottom line is we still need to grow our customer base.", 'Thanh toán di động thay đổi cuộc chơi, nhưng cốt lõi vẫn là tăng khách hàng.', ['Thanh toán di động thất bại.', 'Không cần thêm khách hàng.', 'Lợi nhuận đã đủ.'], 'game changer / bottom line.'],
      ['order', 'Sắp xếp: “Việc này không tạo khác biệt.”', ['This', "won't", 'move', 'the needle.'], "This won't move the needle."]
    ],
    noi: [["Let's go for the *low*-hanging *fruit* first. ↘", 'Làm việc dễ có kết quả trước.'], ['*AI* is a *double*-edged *sword*. ↘', 'AI là con dao hai lưỡi.'], ['The *bottom* *line* is → we need more *customers*. ↘', 'Cốt lõi là cần thêm khách hàng.']],
    hoithoai: {
      ctx: 'Họp chiến lược với giám đốc khu vực người Mỹ.', vai: 'Giám đốc dùng nhiều ẩn dụ, em hiểu và đáp lại.', ai: '🧑‍💼 Regional VP',
      luot: [
        T(["We're facing some serious headwinds this year. Where's the low-hanging fruit?", '', 'Năm nay gặp nhiều trở ngại. Việc dễ có kết quả ở đâu?'], ['I think digitising account opening is the low-hanging fruit. It could save 20% of processing time quickly.', 'Tôi nghĩ số hoá mở tài khoản là việc dễ có kết quả, tiết kiệm nhanh 20% thời gian xử lý.', 'Hiểu đúng ẩn dụ.'], ['We should plant fruit trees.', 'Hiểu theo nghĩa đen.'], ['Headwinds are winds.', 'Hiểu sai.']),
        T(["Will that really move the needle on profit?", '', 'Việc đó có thật sự tạo khác biệt về lợi nhuận?'], ['On its own, probably not. But combined with cross-selling, it could be a game changer.', 'Riêng nó thì có lẽ không. Nhưng kết hợp bán chéo thì có thể thay đổi cuộc chơi.', 'Rào đón + ẩn dụ.'], ['Yes, the needle moves.', 'Nghĩa đen.'], ['No needle.', 'Hiểu sai.']),
        T(["Give me a ballpark figure for the cost.", '', 'Cho con số ước chừng về chi phí.'], ["Roughly two billion dong, but I'll confirm the exact figure by Friday.", 'Khoảng 2 tỷ đồng, thứ Sáu tôi xác nhận số chính xác.', 'Ước chừng + cam kết.'], ['A ballpark costs a lot.', 'Nghĩa đen.'], ["I don't know.", 'Không hợp tác.'])
      ], ket: 'Em đã hiểu và dùng ẩn dụ kinh doanh tự nhiên.'
    },
    tom: ['8 ẩn dụ kinh doanh', 'Ngôn ngữ báo kinh tế'], nguphap: 'Thành ngữ cố định', phatam: 'Nhấn từ khoá trong thành ngữ',
    loi: ['Hiểu theo nghĩa đen', 'Lạm dụng trong văn trang trọng'], btvn: ['Đọc 1 bài The Economist/BBC Business, ghi 5 ẩn dụ', 'Viết email chiến lược 120 từ dùng 3 ẩn dụ', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 11 ================= */
  const d11 = {
    n: 11, ten: plan[10].ten, kinds: K,
    muc: 'Mở rộng vốn từ bằng tiền tố, hậu tố; đoán nghĩa từ mới trong bài đọc học thuật.',
    hoc: `${tbl(['Tiền tố', 'Nghĩa', 'Ví dụ'], [['un- / in- / im- / ir- / il-', 'không', 'unlikely, inefficient, impossible, irregular, illegal'], ['mis-', 'sai', 'misunderstand, misinterpret'], ['over- / under-', 'quá / dưới mức', 'overestimate, underperform'], ['re-', 'lại', 'reconsider, restructure'], ['co-', 'cùng', 'co-founder, cooperate'], ['pre- / post-', 'trước / sau', 'pre-approval, post-merger']])}
      ${tbl(['Hậu tố', 'Loại từ', 'Ví dụ'], [['-tion / -ment / -ness / -ity', 'danh từ', 'regulation, investment, awareness, stability'], ['-ise / -ify', 'động từ', 'digitise, simplify'], ['-able / -ive / -al', 'tính từ', 'sustainable, innovative, financial'], ['-ly', 'trạng từ', 'significantly']])}
      ${tip('🔍 Gặp từ lạ "unsustainability": un (không) + sustain (duy trì) + able (có thể) + ity (danh từ) = tính không bền vững.')}`,
    vocab: [
      w('overestimate', '/ˌoʊvərˈestɪmeɪt/', 'đánh giá quá cao', '', ["Don't overestimate the demand.", '', 'Đừng đánh giá quá cao nhu cầu.']),
      w('underperform', '/ˌʌndərpərˈfɔːrm/', 'hoạt động kém hơn kỳ vọng', '', ['The branch underperformed last year.', '', 'Chi nhánh kém kỳ vọng năm ngoái.']),
      w('restructure', '/ˌriːˈstrʌktʃər/', 'tái cấu trúc', '', ['The bank plans to restructure.', '', 'Ngân hàng dự định tái cấu trúc.']),
      w('misinterpret', '/ˌmɪsɪnˈtɜːrprɪt/', 'hiểu sai', '', ['The data was misinterpreted.', '', 'Dữ liệu bị hiểu sai.']),
      w('co-founder', '/ˌkoʊ ˈfaʊndər/', 'đồng sáng lập', '', ['She is the co-founder of a fintech.', '', 'Cô ấy là đồng sáng lập một fintech.']),
      w('sustainable', '/səˈsteɪnəbl/', 'bền vững', '', ['We need sustainable growth.', '', 'Cần tăng trưởng bền vững.']),
      w('digitise', '/ˈdɪdʒɪtaɪz/', 'số hoá', '', ["We're digitising all records.", '', 'Chúng tôi đang số hoá hồ sơ.']),
      w('simplify', '/ˈsɪmplɪfaɪ/', 'đơn giản hoá', '', ["Let's simplify the process.", '', 'Hãy đơn giản hoá quy trình.']),
      w('stability', '/stəˈbɪləti/', 'sự ổn định', '', ['Financial stability is crucial.', '', 'Ổn định tài chính rất quan trọng.']),
      w('irregular', '/ɪˈreɡjələr/', 'bất thường', '', ['We noticed irregular transactions.', '', 'Chúng tôi thấy giao dịch bất thường.'])
    ],
    qs: [
      ['mc', 'Từ trái nghĩa của "legal" là?', 'illegal', ['unlegal', 'inlegal', 'dislegal'], 'il- trước l.'],
      ['mc', 'Từ trái nghĩa của "regular" là?', 'irregular', ['unregular', 'inregular', 'misregular'], 'ir- trước r.'],
      ['mc', '"underperform" nghĩa là?', 'hoạt động kém hơn kỳ vọng', ['làm việc quá sức', 'biểu diễn dưới sân khấu', 'vượt kỳ vọng'], 'under- = dưới mức.'],
      ['mc', 'Động từ của "digital" là?', 'digitise', ['digitalness', 'digitally', 'digitation'], '-ise.'],
      ['mc', '"unsustainability" nghĩa là?', 'tính không bền vững', ['sự bền vững', 'có thể duy trì', 'duy trì lại'], 'un + sustain + able + ity.'],
      ['hear', "We overestimated demand, so several branches underperformed and the bank decided to restructure.", 'Đánh giá quá cao nhu cầu → chi nhánh kém → tái cấu trúc.', ['Đánh giá thấp nhu cầu.', 'Chi nhánh vượt kỳ vọng.', 'Ngân hàng mở rộng.'], 'over- / under- / re-.'],
      ['order', 'Sắp xếp: “Hãy đơn giản hoá quy trình.”', ["Let's", 'simplify', 'the', 'process.'], "Let's simplify the process."]
    ],
    noi: [["We *overestimated* the *demand*. ↘", 'Chúng tôi đánh giá quá cao nhu cầu.'], ['The bank plans to *restructure* → its *operations*. ↘', 'Ngân hàng dự định tái cấu trúc hoạt động.'], ['We need *sustainable* *growth*. ↘', 'Cần tăng trưởng bền vững.']],
    hoithoai: {
      ctx: 'Em đọc báo cáo tiếng Anh có nhiều từ lạ và giải thích cho đồng nghiệp.', vai: 'Đồng nghiệp hỏi nghĩa, em phân tích cấu tạo từ.', ai: '👩 Colleague',
      luot: [
        T(['What does "disintermediation" mean?', '', '"Disintermediation" nghĩa là gì?'], ['"Dis-" means removing, "intermediation" is acting as a middleman. So it means removing the middleman, like fintechs bypassing banks.', '"Dis-" là loại bỏ, "intermediation" là trung gian. Nghĩa là loại bỏ trung gian, như fintech bỏ qua ngân hàng.', 'Phân tích cấu tạo.'], ["I don't know, skip it.", 'Bỏ qua.'], ['It means the middle of something.', 'Đoán sai.']),
        T(['And "overcapitalised"?', '', 'Còn "overcapitalised"?'], ['"Over-" means too much, so it means having more capital than needed.', '"Over-" là quá mức, nghĩa là có nhiều vốn hơn cần thiết.', 'Đúng.'], ['It means no capital.', 'Sai.'], ['Capital city over there.', 'Sai.']),
        T(['Great. How do you remember so many words?', '', 'Hay. Sao nhớ được nhiều từ vậy?'], ['I learn common prefixes and suffixes, so I can guess the meaning of new words from their parts.', 'Tôi học tiền tố, hậu tố phổ biến nên đoán được nghĩa từ mới qua các phần.', 'Chiến lược học từ.'], ['I memorise the dictionary.', 'Không thực tế.'], ['Luck.', 'Không phải chiến lược.'])
      ], ket: 'Em đã đoán nghĩa từ mới nhờ cấu tạo từ.'
    },
    tom: ['Tiền tố phủ định và mức độ', 'Hậu tố đổi loại từ', 'Đoán nghĩa từ lạ'], nguphap: 'Word formation', phatam: 'Trọng âm đổi theo hậu tố: STAble → staBIlity',
    loi: ['unlegal, unregular', 'Sai loại từ'], btvn: ['Lập bảng 30 từ theo tiền tố/hậu tố', 'Đọc 1 bài báo, phân tích 5 từ dài', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 12 ================= */
  const d12 = {
    n: 12, ten: plan[11].ten, kinds: K,
    muc: 'Chuyển đổi linh hoạt giữa văn phong trang trọng và thân mật cho đúng người, đúng kênh (email CEO, Slack đồng nghiệp, báo cáo, phát biểu).',
    hoc: `${tbl(['Thân mật', 'Trung tính', 'Trang trọng'], [["Can you send it?", "Could you send it, please?", 'I would be grateful if you could forward it at your earliest convenience.'], ["Sorry I'm late!", 'Sorry for the delay.', 'Please accept my apologies for the delay.'], ['Got it, thanks!', 'Thanks, I understand.', 'Thank you for the clarification.'], ['Let me know.', 'Please let me know.', 'Should you require any further information, please do not hesitate to contact me.'], ['We need more cash.', 'We need more funding.', 'Additional funding will be required.']])}
      ${tip('⚖️ Trang trọng không có nghĩa là dài dòng. C1 biết khi nào nên ngắn gọn – rõ ràng (plain English) và khi nào cần trang trọng (pháp lý, đối ngoại).')}`,
    vocab: [
      w('register', '/ˈredʒɪstər/', 'văn phong, mức độ trang trọng', '', ['Choose the right register.', '', 'Chọn văn phong phù hợp.']),
      w('at your earliest convenience', '/æt jɔːr ˈɜːrliɪst kənˈviːniəns/', 'sớm nhất khi thuận tiện', '', ['Please reply at your earliest convenience.', '', 'Vui lòng trả lời sớm nhất khi thuận tiện.']),
      w('should you require', '/ʃʊd juː rɪˈkwaɪər/', 'nếu quý vị cần', '', ['Should you require assistance, call us.', '', 'Nếu cần hỗ trợ, xin gọi chúng tôi.']),
      w('do not hesitate', '/duː nɑːt ˈhezɪteɪt/', 'xin đừng ngần ngại', '', ['Do not hesitate to contact me.', '', 'Xin đừng ngần ngại liên hệ.']),
      w('clarification', '/ˌklærəfɪˈkeɪʃn/', 'sự làm rõ', '', ['Thank you for the clarification.', '', 'Cảm ơn đã làm rõ.']),
      w('plain English', '/pleɪn ˈɪŋɡlɪʃ/', 'tiếng Anh đơn giản, rõ ràng', '', ['Write in plain English.', '', 'Viết bằng tiếng Anh dễ hiểu.']),
      w('colloquial', '/kəˈloʊkwiəl/', 'thông tục, văn nói', '', ['Avoid colloquial language in reports.', '', 'Tránh văn nói trong báo cáo.']),
      w('forward', '/ˈfɔːrwərd/', 'chuyển tiếp', '', ['Please forward the invoice.', '', 'Vui lòng chuyển tiếp hoá đơn.']),
      w('acknowledge', '/əkˈnɑːlɪdʒ/', 'xác nhận đã nhận; thừa nhận', '', ['Please acknowledge receipt.', '', 'Vui lòng xác nhận đã nhận.']),
      w('tone', '/toʊn/', 'giọng điệu', '', ['Watch your tone in emails.', '', 'Chú ý giọng điệu trong email.'])
    ],
    qs: [
      ['mc', 'Email gửi CEO đối tác, câu nào phù hợp?', 'I would be grateful if you could review the proposal at your earliest convenience.', ['Pls check the proposal asap!!', 'Hey, look at this.', 'Check it now.'], 'Trang trọng.'],
      ['mc', 'Tin nhắn Slack cho đồng nghiệp thân, câu nào tự nhiên?', 'Got it, thanks!', ['Thank you for the clarification provided herein.', 'I hereby acknowledge receipt.', 'Should you require…'], 'Thân mật.'],
      ['mc', '___ you require further information, please contact me.', 'Should', ['If should', 'Would', 'Do'], 'Đảo ngữ điều kiện.'],
      ['mc', 'colloquial nghĩa là?', 'thông tục, văn nói', ['trang trọng', 'học thuật', 'pháp lý'], 'colloquial.'],
      ['mc', 'Please ___ receipt of this email.', 'acknowledge', ['knowledge', 'acknowledgement', 'know'], 'acknowledge receipt.'],
      ['hear', "Please accept my apologies for the delay. Should you require any further information, do not hesitate to contact me.", 'Xin lỗi vì chậm trễ; cần thêm thông tin xin cứ liên hệ.', ['Tôi không xin lỗi.', 'Đừng liên hệ tôi.', 'Tôi cần thêm thông tin.'], 'Văn phong trang trọng.'],
      ['order', 'Sắp xếp: “Vui lòng xác nhận đã nhận.”', ['Please', 'acknowledge', 'receipt.'], 'Please acknowledge receipt.']
    ],
    noi: [['Please *accept* my *apologies* → for the *delay*. ↘', 'Xin nhận lời xin lỗi vì sự chậm trễ.'], ['Should you *require* any further *information*, → please *contact* me. ↘', 'Nếu cần thêm thông tin, xin liên hệ tôi.'], ['*Got* it, *thanks*! ↘', 'Rõ rồi, cảm ơn!']],
    hoithoai: {
      ctx: 'Em xử lý cùng một nội dung (báo trễ báo cáo) cho 3 người nhận khác nhau.', vai: 'Mỗi lượt là một người nhận.', ai: '📨 Recipients',
      luot: [
        T(['(Close colleague on chat) Hey, where\'s the report?', '', '(Đồng nghiệp thân) Báo cáo đâu rồi?'], ["Sorry! Running a bit late – I'll send it by 3.", 'Xin lỗi! Hơi trễ chút – 3 giờ mình gửi.', 'Thân mật, ngắn.'], ['Please accept my sincere apologies for the delay in submission.', 'Quá trang trọng với bạn thân.'], ['Report is late.', 'Cộc, thiếu xin lỗi.']),
        T(['(Your manager by email) Is the report ready?', '', '(Quản lý qua email) Báo cáo xong chưa?'], ["Sorry for the delay. I'm finalising the figures and will send it by 3 p.m. today.", 'Xin lỗi vì chậm. Tôi đang hoàn thiện số liệu và sẽ gửi trước 3 giờ chiều nay.', 'Trung tính, chuyên nghiệp.'], ['Chill, coming soon!', 'Quá thân mật.'], ['I hereby inform you herein.', 'Cứng nhắc.']),
        T(["(External regulator by formal letter) We have not received your quarterly report.", '', '(Cơ quan quản lý, thư chính thức) Chưa nhận được báo cáo quý.'], ['Please accept our apologies for the delay. The report will be submitted by 30 June. Should you require any further information, please do not hesitate to contact us.', 'Xin nhận lời xin lỗi vì sự chậm trễ. Báo cáo sẽ được nộp trước 30/6. Nếu cần thêm thông tin, xin đừng ngần ngại liên hệ.', 'Trang trọng, rõ hạn.'], ["Sorry, we're late lol.", 'Không phù hợp.'], ['Report coming, wait.', 'Thiếu chuyên nghiệp.'])
      ], ket: 'Em đã chuyển văn phong linh hoạt theo người nhận.'
    },
    tom: ['3 mức văn phong', 'Cụm trang trọng', 'Plain English'], nguphap: 'Should you…; I would be grateful if…', phatam: 'Giọng điệu phù hợp mức trang trọng',
    loi: ['Quá trang trọng với đồng nghiệp', 'Văn nói trong thư chính thức'], btvn: ['Viết 1 nội dung theo 3 văn phong', 'Rà lại 3 email gần nhất, chỉnh văn phong', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 13 ================= */
  const d13 = {
    n: 13, ten: plan[12].ten, kinds: K,
    muc: 'Diễn đạt lại bằng 4 kỹ thuật: đổi từ đồng nghĩa, đổi loại từ, đổi cấu trúc câu, đổi chủ động – bị động. Kỹ năng then chốt cho IELTS và công việc.',
    hoc: `${tbl(['Kỹ thuật', 'Câu gốc', 'Diễn đạt lại'], [['Từ đồng nghĩa', 'The number of tourists increased.', 'The number of visitors rose.'], ['Đổi loại từ', 'Prices increased dramatically.', 'There was a dramatic increase in prices.'], ['Đổi cấu trúc', 'Although it was expensive, it sold well.', 'Despite its high price, it sold well.'], ['Chủ động ↔ bị động', 'The bank launched a new app.', 'A new app was launched by the bank.']])}
      ${say('Original: "Many people believe that online learning is less effective than classroom learning." → Paraphrase: "It is widely held that studying online is not as productive as learning in a classroom."', 'Câu gốc → câu diễn đạt lại: dùng bị động khách quan, từ đồng nghĩa và so sánh không bằng.')}
      ${tip('⚠️ Không đổi nghĩa gốc và giữ nguyên thuật ngữ chuyên ngành (không ai paraphrase "interest rate").')}`,
    vocab: [
      w('paraphrase', '/ˈpærəfreɪz/', 'diễn đạt lại', '', ['Paraphrase the question in your introduction.', '', 'Diễn đạt lại đề trong mở bài.']),
      w('it is widely held', '/ɪt ɪz ˈwaɪdli held/', 'nhiều người cho rằng', '', ['It is widely held that exercise is beneficial.', '', 'Nhiều người cho rằng tập thể dục có lợi.']),
      w('productive', '/prəˈdʌktɪv/', 'năng suất', '', ['Remote workers can be very productive.', '', 'Người làm từ xa có thể rất năng suất.']),
      w('rise', '/raɪz/', 'tăng', '', ['Visitor numbers rose sharply.', '', 'Lượng khách tăng mạnh.']),
      w('the majority of', '/ðə məˈdʒɔːrəti əv/', 'phần lớn', '', ['The majority of respondents agreed.', '', 'Phần lớn người được hỏi đồng ý.']),
      w('a minority of', '/ə maɪˈnɔːrəti əv/', 'một số ít', '', ['A minority of users complained.', '', 'Một số ít người dùng phàn nàn.']),
      w('reword', '/ˌriːˈwɜːrd/', 'đổi cách diễn đạt', '', ['Can you reword this sentence?', '', 'Viết lại câu này được không?']),
      w('plagiarism', '/ˈpleɪdʒərɪzəm/', 'đạo văn', '', ['Copying text is plagiarism.', '', 'Chép văn bản là đạo văn.']),
      w('accurate', '/ˈækjərət/', 'chính xác', '', ['A paraphrase must be accurate.', '', 'Diễn đạt lại phải chính xác.']),
      w('equivalent', '/ɪˈkwɪvələnt/', 'tương đương', '', ['Find an equivalent expression.', '', 'Tìm cách diễn đạt tương đương.'])
    ],
    qs: [
      ['mc', 'Diễn đạt lại "Most people prefer cash."', 'The majority of people favour cash.', ['A minority of people prefer cash.', 'Most people hate cash.', 'People cash prefer most.'], 'majority + favour.'],
      ['mc', '"The government introduced a new law." → Bị động?', 'A new law was introduced by the government.', ['The government was introduced a law.', 'A new law introduced the government.', 'A law is introducing.'], 'Bị động.'],
      ['mc', '"Sales fell sharply." → Danh từ hoá?', 'There was a sharp fall in sales.', ['Sales were sharp fall.', 'A sharp sales fell.', 'There fell sales sharply.'], 'Danh từ hoá.'],
      ['mc', 'Thuật ngữ nào KHÔNG nên paraphrase?', 'interest rate', ['many people', 'increase', 'important'], 'Giữ thuật ngữ.'],
      ['mc', 'plagiarism nghĩa là?', 'đạo văn', ['diễn đạt lại', 'trích dẫn đúng', 'tóm tắt'], 'plagiarism.'],
      ['hear', "It is widely held that studying online is not as productive as learning in a classroom.", 'Nhiều người cho rằng học online kém hiệu quả hơn học trên lớp.', ['Học online hiệu quả hơn.', 'Hai cách như nhau.', 'Không ai học online.'], 'not as productive as.'],
      ['order', 'Sắp xếp: “Phần lớn người được hỏi đồng ý.”', ['The majority', 'of', 'respondents', 'agreed.'], 'The majority of respondents agreed.']
    ],
    noi: [['It is *widely* *held* that → studying *online* is *less* *productive*. ↘', 'Nhiều người cho rằng học online kém hiệu quả hơn.'], ['The *majority* of *respondents* → *favour* *digital* *payments*. ↘', 'Phần lớn người được hỏi ưa thanh toán số.'], ['There was a *sharp* *fall* in *sales*. ↘', 'Doanh số giảm mạnh.']],
    hoithoai: {
      ctx: 'Luyện paraphrase cấp tốc với gia sư IELTS.', vai: 'Gia sư đưa câu, em diễn đạt lại.', ai: '👩‍🏫 Tutor',
      luot: [
        T(['"Many young people use social media every day."', '', 'Diễn đạt lại.'], ['A large proportion of young people go on social networking sites daily.', 'Phần lớn người trẻ vào mạng xã hội hằng ngày.', 'Đồng nghĩa + đổi cấu trúc.'], ['Many young people use social media every day too.', 'Chép lại.'], ['Old people never use social media.', 'Đổi nghĩa.']),
        T(['"Because the price was high, few people bought it."', '', 'Diễn đạt lại.'], ['Owing to its high price, the product attracted few buyers.', 'Do giá cao, sản phẩm thu hút ít người mua.', 'Đổi cấu trúc + từ.'], ['Because price high, few buy.', 'Sai ngữ pháp.'], ['It was cheap so many bought.', 'Đổi nghĩa.']),
        T(['"The company hired 200 new staff last year."', '', 'Dùng bị động.'], ['Two hundred new employees were recruited by the company last year.', '200 nhân viên mới được công ty tuyển năm ngoái.', 'Bị động + đồng nghĩa.'], ['The company was hired 200 staff.', 'Sai bị động.'], ['200 staff hired company.', 'Sai.'])
      ], ket: 'Em đã diễn đạt lại linh hoạt, giữ nguyên nghĩa.'
    },
    tom: ['4 kỹ thuật paraphrase', 'Giữ nghĩa, giữ thuật ngữ'], nguphap: 'Đồng nghĩa, danh từ hoá, đổi cấu trúc, bị động', phatam: '—',
    loi: ['Đổi nghĩa', 'Chỉ đổi 1 từ'], btvn: ['Paraphrase 10 đề IELTS Writing Task 2', 'Viết lại 1 đoạn báo chí 100 từ bằng lời mình', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 14 ================= */
  const d14 = {
    n: 14, ten: plan[13].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Ôn giai đoạn 2: collocation C1, sắc thái nghĩa, ẩn dụ kinh doanh, cấu tạo từ, văn phong, paraphrase.',
    hoc: `<h4>Tóm tắt tuần 2</h4>${tbl(['Chủ điểm', 'Ghi nhớ'], [['Collocation C1', 'pose a threat, draw a conclusion, viable option, pivotal role'], ['Sắc thái', 'determined vs stubborn; thrifty vs stingy'], ['Ẩn dụ', 'low-hanging fruit, game changer, bottom line, in the red'], ['Cấu tạo từ', 'un-, mis-, over-, re-; -tion, -ise, -able'], ['Văn phong', 'Got it! / Thanks, I understand. / Thank you for the clarification.'], ['Paraphrase', 'đồng nghĩa, đổi loại từ, đổi cấu trúc, bị động']])}`,
    qs: [['mc', 'Rising debt ___ a serious threat to the economy.', 'poses', ['makes', 'does', 'gives'], 'pose a threat.'], ['mc', 'Trái nghĩa của "possible"?', 'impossible', ['unpossible', 'inpossible', 'dispossible'], 'im- trước p.']],
    noi: [['It\'s *highly* *unlikely* → to *move* the *needle*. ↘', 'Rất khó tạo khác biệt.'], ['Thank you for the *clarification*. ↘', 'Cảm ơn đã làm rõ.']],
    hoithoai: {
      ctx: 'Tổng ôn: buổi họp chiến lược đa văn hoá.', vai: 'Nhiều người hỏi, em trả lời đúng văn phong.', ai: '🎭 Nhiều người',
      luot: [
        T(['(CEO) Where should we start?', '', '(CEO) Nên bắt đầu từ đâu?'], ['I\'d suggest starting with the low-hanging fruit: digitising account opening.', 'Tôi đề xuất bắt đầu với việc dễ có kết quả: số hoá mở tài khoản.', 'Ẩn dụ + đề xuất.'], ['Fruit first.', 'Nghĩa đen.'], ['Start anywhere.', 'Mơ hồ.']),
        T(['(Analyst) Is the new competitor a threat?', '', '(Chuyên viên) Đối thủ mới có là mối đe doạ?'], ['They pose a real threat in the youth segment, although it\'s too early to draw firm conclusions.', 'Họ là mối đe doạ thực ở phân khúc trẻ, dù còn quá sớm để kết luận chắc chắn.', 'Collocation + rào đón.'], ['They make big threat.', 'Sai collocation.'], ['No threat ever.', 'Tuyệt đối.']),
        T(['(Colleague on chat) Can you send me the slides?', '', '(Đồng nghiệp) Gửi mình slide nhé?'], ['Sure, sending now!', 'Ừ, gửi liền!', 'Thân mật, đúng kênh.'], ['I would be grateful to forward herewith.', 'Quá trang trọng.'], ['No.', 'Cộc.']),
        T(['(Regulator, formal) Please confirm the submission date.', '', '(Cơ quan quản lý) Vui lòng xác nhận ngày nộp.'], ['We confirm that the report will be submitted by 15 July. Should you require further information, please do not hesitate to contact us.', 'Chúng tôi xác nhận báo cáo sẽ nộp trước 15/7. Nếu cần thêm thông tin xin cứ liên hệ.', 'Trang trọng.'], ['OK 15 July.', 'Thiếu trang trọng.'], ['Soon lol.', 'Không phù hợp.'])
      ], ket: 'Em đã ôn trọn giai đoạn từ vựng tinh tế!'
    },
    tom: ['Ôn tuần 2', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn', phatam: 'Giọng điệu theo văn phong',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: học lại ngày yếu', 'Paraphrase 5 đề IELTS', 'Viết 1 nội dung theo 3 văn phong']
  };

  window.PLT_EN5 = { plan, stages, H: { w, L, T, tbl, tip, exs, sp, K, G, say }, days: [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14] };
})();

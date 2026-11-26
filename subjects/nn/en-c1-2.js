/* PLT-Edu · Tiếng Anh – Cấp 5 (C1): Ngày 15–30 */
(function () {
  'use strict';
  const { w, T, tbl, tip, exs, K, say } = window.PLT_EN5.H;
  const P = window.PLT_EN5.plan;

  /* ================= NGÀY 15 ================= */
  const d15 = {
    n: 15, ten: P[14].ten, kinds: K,
    muc: 'Thuyết trình trước hội đồng theo nguyên tắc "kết luận trước" (BLUF); kể chuyện bằng dữ liệu: bối cảnh – xung đột – giải pháp – lời kêu gọi hành động.',
    hoc: `${tbl(['Bước', 'Mục đích', 'Câu mẫu'], [['Bottom line up front', 'Nói kết luận/đề xuất ngay', "I'm here to ask for approval for a 5-billion-dong investment that will pay for itself in 18 months."], ['Context', 'Bối cảnh ngắn', 'Over the past year, customer complaints about waiting times have doubled.'], ['Conflict', 'Vấn đề + dữ liệu', 'This is costing us an estimated 8% of new accounts.'], ['Resolution', 'Giải pháp', 'An online booking system would cut average waiting time by half.'], ['Call to action', 'Yêu cầu cụ thể', "What I'm asking for today is approval to start a pilot next month."]])}
      ${tip('📊 Mỗi biểu đồ một thông điệp. Nói "so what?" sau mỗi con số: <i>"…which means we lose about 300 customers a month."</i>')}`,
    vocab: [
      w('bottom line up front', '/ˈbɑːtəm laɪn ʌp frʌnt/', 'nói kết luận trước (BLUF)', '', ['Use bottom line up front with executives.', '', 'Với lãnh đạo, hãy nói kết luận trước.']),
      w('pay for itself', '/peɪ fər ɪtˈself/', 'tự hoàn vốn', '', ['The system will pay for itself in a year.', '', 'Hệ thống sẽ hoàn vốn trong một năm.']),
      w('call to action', '/kɔːl tuː ˈækʃn/', 'lời kêu gọi hành động', '', ['End with a clear call to action.', '', 'Kết thúc bằng lời kêu gọi hành động rõ ràng.']),
      w('return on investment', '/rɪˈtɜːrn ɑːn ɪnˈvestmənt/', 'lợi tức đầu tư (ROI)', '', ['The return on investment is 40%.', '', 'Lợi tức đầu tư là 40%.']),
      w('executive', '/ɪɡˈzekjətɪv/', 'lãnh đạo cấp cao', '', ['Executives have little time.', '', 'Lãnh đạo có ít thời gian.']),
      w('which means', '/wɪtʃ miːnz/', 'điều đó có nghĩa là', '', ['Costs fell by 10%, which means higher profit.', '', 'Chi phí giảm 10%, nghĩa là lợi nhuận cao hơn.']),
      w('approval', '/əˈpruːvl/', 'sự phê duyệt', '', ['We need board approval.', '', 'Cần hội đồng phê duyệt.']),
      w('estimate', '/ˈestɪmət/', 'ước tính (danh từ)', '', ['Our estimate is 2 billion.', '', 'Ước tính của chúng tôi là 2 tỷ.']),
      w('compelling', '/kəmˈpelɪŋ/', 'thuyết phục, hấp dẫn', '', ['The data tells a compelling story.', '', 'Dữ liệu kể một câu chuyện thuyết phục.']),
      w('pilot', '/ˈpaɪlət/', 'thí điểm', '', ["Let's run a three-month pilot.", '', 'Chạy thí điểm ba tháng.'])
    ],
    qs: [
      ['mc', 'BLUF khi thuyết trình với lãnh đạo nghĩa là?', 'Nói kết luận / đề xuất ngay từ đầu', ['Kể chuyện dài trước', 'Để kết luận cuối cùng', 'Chỉ trình bày số liệu'], 'Bottom line up front.'],
      ['mc', 'Sau mỗi con số, nên nói?', '"…which means…" (ý nghĩa của con số)', ['Đọc thêm số khác', 'Chuyển slide ngay', 'Hỏi khán giả có hiểu không'], 'So what?'],
      ['mc', 'The new system will pay ___ itself within 18 months.', 'for', ['off', 'back', 'to'], 'pay for itself.'],
      ['mc', 'ROI là?', 'return on investment', ['rate of interest', 'risk of inflation', 'return of income'], 'ROI.'],
      ['mc', 'Kết bài thuyết trình xin phê duyệt, câu nào mạnh nhất?', "What I'm asking for today is approval to start a pilot next month.", ['Thank you, bye.', 'Any questions maybe?', "That's all I think."], 'Call to action.'],
      ['hear', "Complaints have doubled this year, which means we are losing around three hundred potential customers every month.", 'Phàn nàn gấp đôi → mất ~300 khách tiềm năng mỗi tháng.', ['Mất 30 khách/tháng.', 'Phàn nàn giảm một nửa.', 'Có thêm 300 khách.'], 'which means…'],
      ['order', 'Sắp xếp: “Hãy chạy thí điểm ba tháng.”', ["Let's", 'run', 'a three-month', 'pilot.'], "Let's run a three-month pilot."]
    ],
    noi: [["I'm here to ask for *approval* → for an investment that will *pay* for *itself* in *eighteen* *months*. ↘", 'Tôi xin phê duyệt một khoản đầu tư hoàn vốn trong 18 tháng.'], ['Complaints have *doubled*, → which *means* we\'re losing *customers*. ↘', 'Phàn nàn tăng gấp đôi, nghĩa là ta đang mất khách.'], ["What I'm *asking* for today → is approval to start a *pilot*. ↘", 'Điều tôi xin hôm nay là phê duyệt thí điểm.']],
    hoithoai: {
      ctx: 'Em có 3 phút trình bày trước hội đồng quản trị để xin ngân sách hệ thống đặt lịch online.', vai: 'Hội đồng hỏi, em trình bày theo BLUF.', ai: '🏛️ Board chair',
      luot: [
        T(["You have three minutes. Go ahead.", '', 'Bạn có 3 phút. Mời bắt đầu.'], ["Thank you. I'm asking for 5 billion dong for an online booking system that will pay for itself in 18 months.", 'Cảm ơn. Tôi xin 5 tỷ đồng cho hệ thống đặt lịch online, hoàn vốn trong 18 tháng.', 'BLUF.'], ['First, let me tell you the history of our bank.', 'Lan man, mất thời gian.'], ['I have some slides, maybe interesting.', 'Thiếu trọng tâm.']),
        T(['Why now?', '', 'Vì sao lại là bây giờ?'], ["Complaints about waiting times have doubled this year, which means we're losing around 300 potential customers a month.", 'Phàn nàn về thời gian chờ tăng gấp đôi, nghĩa là mất khoảng 300 khách tiềm năng mỗi tháng.', 'Dữ liệu + so what.'], ['Because it is modern.', 'Thiếu dữ liệu.'], ['Competitors have it.', 'Lý do yếu.']),
        T(["And what exactly do you want from us today?", '', 'Hôm nay bạn muốn gì từ chúng tôi?'], ["Approval to run a three-month pilot in five branches, with a full report to the board in September.", 'Phê duyệt thí điểm 3 tháng ở 5 chi nhánh, báo cáo đầy đủ cho hội đồng vào tháng 9.', 'Call to action cụ thể.'], ['Money, please.', 'Thiếu chuyên nghiệp.'], ['Whatever you think.', 'Không có yêu cầu rõ.'])
      ], ket: 'Em đã thuyết trình trước hội đồng ngắn gọn, thuyết phục.'
    },
    tom: ['BLUF', 'Context – Conflict – Resolution – Call to action', 'which means…'], nguphap: "What I'm asking for is…; which means…", phatam: 'Chậm, chắc, nhấn số liệu và lời kêu gọi',
    loi: ['Lan man trước khi vào ý chính', 'Số liệu không kèm ý nghĩa'], btvn: ['Soạn bài 3 phút xin phê duyệt một dự án theo BLUF', 'Ghi âm, cắt bớt mọi câu không cần thiết', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 16 ================= */
  const d16 = {
    n: 16, ten: P[15].ten, kinds: K,
    muc: 'Đàm phán cấp cao: chuẩn bị BATNA, neo giá, trao đổi có điều kiện, đọc tín hiệu, chốt và ghi nhận bằng văn bản.',
    hoc: `${tbl(['Khái niệm', 'Nghĩa', 'Câu dùng'], [['BATNA', 'phương án tốt nhất nếu không đạt thoả thuận', "We have other options, but we'd prefer to work with you."], ['Anchoring', 'đưa con số đầu tiên làm mốc', 'Based on market rates, we were thinking of something in the region of…'], ['Trade-off', 'đổi cái này lấy cái kia', "We could be flexible on price if you could commit to a three-year contract."], ['Signalling', 'tín hiệu sẵn sàng nhượng bộ', "That's not something we'd normally do, but…"], ['Summarising', 'tóm tắt trước khi chốt', "So, to recap what we've agreed…"]])}
      ${tip('🧭 Không bao giờ nhượng bộ miễn phí: mỗi nhượng bộ đi kèm một điều kiện (<i>if… then…</i>).')}`,
    vocab: [
      w('BATNA', '/ˈbætnə/', 'phương án tốt nhất thay thế thoả thuận', 'Best Alternative To a Negotiated Agreement.', ["What's our BATNA?", '', 'Phương án thay thế tốt nhất của ta là gì?']),
      w('in the region of', '/ɪn ðə ˈriːdʒən əv/', 'vào khoảng', '', ['We were thinking of something in the region of $2 million.', '', 'Chúng tôi nghĩ khoảng 2 triệu đô.']),
      w('trade-off', '/ˈtreɪd ɔːf/', 'sự đánh đổi', '', ["It's a trade-off between price and speed.", '', 'Đó là đánh đổi giữa giá và tốc độ.']),
      w('commit to', '/kəˈmɪt tuː/', 'cam kết', '', ['Can you commit to a longer contract?', '', 'Anh có thể cam kết hợp đồng dài hơn?']),
      w('flexible', '/ˈfleksəbl/', 'linh hoạt', '', ["We can be flexible on delivery.", '', 'Chúng tôi linh hoạt về giao hàng.']),
      w('leverage', '/ˈlevərɪdʒ/', 'đòn bẩy, lợi thế', '', ['We have strong leverage in this deal.', '', 'Ta có lợi thế lớn trong thương vụ này.']),
      w('non-negotiable', '/ˌnɑːn nɪˈɡoʊʃiəbl/', 'không thể thương lượng', '', ['Security standards are non-negotiable.', '', 'Tiêu chuẩn bảo mật không thể thương lượng.']),
      w('walk away', '/wɔːk əˈweɪ/', 'rút lui (khỏi đàm phán)', '', ["We're prepared to walk away.", '', 'Chúng tôi sẵn sàng rút lui.']),
      w('heads of terms', '/hedz əv tɜːrmz/', 'bản thoả thuận khung', '', ["Let's draft the heads of terms.", '', 'Hãy soạn thoả thuận khung.']),
      w('to recap', '/tə ˈriːkæp/', 'tóm lại', '', ["To recap what we've agreed…", '', 'Tóm lại những gì đã thống nhất…'])
    ],
    qs: [
      ['mc', 'BATNA là?', 'phương án tốt nhất nếu không đạt thoả thuận', ['giá cao nhất', 'hợp đồng cuối', 'đối tác chính'], 'BATNA.'],
      ['mc', 'Nhượng bộ đúng cách?', 'We could be flexible on price if you could commit to three years.', ['OK, we\'ll lower the price.', 'Fine, take it for free.', 'Whatever you want.'], 'Có điều kiện.'],
      ['mc', 'Security standards are ___. We cannot change them.', 'non-negotiable', ['negotiable', 'flexible', 'in the region of'], 'Không thể thương lượng.'],
      ['mc', 'Neo giá mềm mỏng?', "We were thinking of something in the region of 2 billion.", ['Give us 2 billion now.', 'It must be 2 billion, final.', 'Maybe 2 billion or less or more.'], 'in the region of.'],
      ['mc', 'leverage nghĩa là?', 'đòn bẩy, lợi thế', ['đòn bẩy cơ khí duy nhất', 'khoản vay', 'mức giá'], 'leverage.'],
      ['hear', "That's not something we'd normally do, but if you sign today, we could include free training.", 'Bình thường không làm, nhưng ký hôm nay thì tặng đào tạo miễn phí.', ['Không bao giờ tặng đào tạo.', 'Đào tạo tính phí.', 'Ký tuần sau mới tặng.'], 'Tín hiệu + có điều kiện.'],
      ['order', 'Sắp xếp: “Tóm lại những gì đã thống nhất.”', ['To recap', 'what', "we've", 'agreed.'], "To recap what we've agreed."]
    ],
    noi: [["We were thinking of something *in* the *region* of *two* *billion*. ↘", 'Chúng tôi nghĩ khoảng 2 tỷ.'], ['We could be *flexible* on *price* → *if* you could *commit* to *three* *years*. ↘', 'Có thể linh hoạt giá nếu anh cam kết 3 năm.'], ["*Security* standards are *non*-*negotiable*. ↘", 'Tiêu chuẩn bảo mật không thể thương lượng.']],
    hoithoai: {
      ctx: 'Em đàm phán hợp đồng 3 năm với nhà cung cấp phần mềm lõi ngân hàng nước ngoài.', vai: 'Đại diện bán hàng đàm phán, em giữ thế chủ động.', ai: '🤝 Vendor VP',
      luot: [
        T(["Our standard licence fee is $500,000 a year.", '', 'Phí bản quyền tiêu chuẩn 500.000 đô/năm.'], ["Thank you. Based on similar projects in the region, we were thinking of something in the region of $380,000.", 'Cảm ơn. Dựa trên dự án tương tự trong khu vực, chúng tôi nghĩ khoảng 380.000 đô.', 'Neo giá có căn cứ.'], ['Too expensive, no.', 'Cắt đứt.'], ['OK, $500,000.', 'Không thương lượng.']),
        T(["That's quite a gap. What can you offer in return?", '', 'Chênh lệch lớn. Bên anh đổi lại được gì?'], ["We could commit to a three-year contract if you could meet us at $420,000 and include staff training.", 'Chúng tôi cam kết 3 năm nếu anh chấp nhận 420.000 đô và gồm đào tạo nhân viên.', 'Trade-off có điều kiện.'], ['We give nothing.', 'Không tạo giá trị.'], ['We pay more later.', 'Bất lợi.']),
        T(["We can agree to $430,000 with training, but data hosting must be in Singapore.", '', 'Chúng tôi đồng ý 430.000 đô kèm đào tạo, nhưng lưu trữ dữ liệu phải ở Singapore.'], ["Data location is non-negotiable for us due to local regulations. If hosting stays in Vietnam, we can accept $430,000. To recap, then…", 'Vị trí dữ liệu không thể thương lượng do quy định trong nước. Nếu lưu trữ ở Việt Nam, chúng tôi chấp nhận 430.000 đô. Tóm lại…', 'Giữ nguyên tắc + chốt.'], ['OK, Singapore is fine.', 'Bỏ qua quy định.'], ['We walk away now.', 'Rút lui quá sớm.'])
      ], ket: 'Em đã đàm phán cấp cao, giữ nguyên tắc và chốt thoả thuận.'
    },
    tom: ['BATNA, anchoring, trade-off', 'Nhượng bộ có điều kiện', 'Điểm không thể thương lượng', 'Tóm tắt chốt'], nguphap: "We could… if you could…; in the region of", phatam: 'Bình tĩnh, ngắt nhịp sau con số',
    loi: ['Nhượng bộ miễn phí', 'Đưa giá cứng nhắc'], btvn: ['Viết kế hoạch đàm phán: BATNA, giá neo, 3 trade-off', 'Đóng vai đàm phán 10 lượt', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 17 ================= */
  const d17 = {
    n: 17, ten: P[16].ten, kinds: K,
    muc: 'Ngôn ngữ lãnh đạo: truyền đạt tầm nhìn, quản lý thay đổi, trao quyền, ghi nhận, xử lý sự phản kháng.',
    hoc: `${tbl(['Tình huống', 'Mẫu câu'], [['Truyền tầm nhìn', 'Imagine a branch where no customer waits more than five minutes. That\'s where we\'re heading.'], ['Giải thích lý do thay đổi', "I know change isn't easy. Here's why it matters…"], ['Trao quyền', "I trust you to make this call. Let me know if you need support."], ['Ghi nhận', "I want to recognise Lan's team – their work made this possible."], ['Đón sự phản kháng', "I hear your concerns. Let's look at what would make this work for you."], ['Cam kết', "I'll be there every step of the way."]])}
      ${tip('🧭 Mô hình thay đổi của Kotter rút gọn: tạo cấp bách → liên minh → tầm nhìn → truyền đạt → trao quyền → thắng lợi nhanh → củng cố.')}`,
    vocab: [
      w('vision', '/ˈvɪʒn/', 'tầm nhìn', '', ['Our vision is a fully digital bank.', '', 'Tầm nhìn của chúng ta là ngân hàng số hoàn toàn.']),
      w('empower', '/ɪmˈpaʊər/', 'trao quyền', '', ['Good leaders empower their teams.', '', 'Lãnh đạo giỏi trao quyền cho đội.']),
      w('resistance', '/rɪˈzɪstəns/', 'sự phản kháng', '', ['There is resistance to the new system.', '', 'Có sự phản kháng với hệ thống mới.']),
      w('recognise', '/ˈrekəɡnaɪz/', 'ghi nhận', '', ["I'd like to recognise the team's effort.", '', 'Tôi muốn ghi nhận nỗ lực của đội.']),
      w('quick win', '/kwɪk wɪn/', 'thắng lợi nhanh', '', ["Let's focus on some quick wins.", '', 'Tập trung vào vài thắng lợi nhanh.']),
      w('buy-in', '/ˈbaɪ ɪn/', 'sự đồng thuận, ủng hộ', '', ['We need buy-in from all managers.', '', 'Cần sự đồng thuận của các quản lý.']),
      w('accountable', '/əˈkaʊntəbl/', 'chịu trách nhiệm giải trình', '', ['Each manager is accountable for results.', '', 'Mỗi quản lý chịu trách nhiệm về kết quả.']),
      w('morale', '/məˈræl/', 'tinh thần (tập thể)', '', ['Team morale is high.', '', 'Tinh thần đội đang cao.']),
      w('make the call', '/meɪk ðə kɔːl/', 'đưa ra quyết định', '', ['You make the call.', '', 'Bạn quyết định.']),
      w('every step of the way', '/ˈevri step əv ðə weɪ/', 'suốt chặng đường', '', ["I'll support you every step of the way.", '', 'Tôi sẽ đồng hành suốt chặng đường.'])
    ],
    qs: [
      ['mc', 'Câu đón nhận phản kháng tốt nhất?', "I hear your concerns. Let's look at what would make this work for you.", ['Just do it.', 'Stop complaining.', "It's not my decision."], 'Lắng nghe + hợp tác.'],
      ['mc', 'Câu trao quyền?', "I trust you to make this call. Let me know if you need support.", ['Ask me before every step.', 'I will do it myself.', "Don't decide anything."], 'empower.'],
      ['mc', 'We need ___ from all branch managers before we start.', 'buy-in', ['buy-out', 'buy-up', 'buying'], 'buy-in.'],
      ['mc', 'morale nghĩa là?', 'tinh thần tập thể', ['đạo đức', 'bài học', 'kỷ luật'], 'morale.'],
      ['mc', 'Thắng lợi nhanh để tạo động lực gọi là?', 'quick wins', ['fast money', 'speed goals', 'rapid fire'], 'quick wins.'],
      ['hear', "I know change isn't easy. But imagine a branch where no customer waits more than five minutes. That's where we're heading.", 'Thay đổi không dễ; tầm nhìn: khách không chờ quá 5 phút.', ['Khách chờ 50 phút.', 'Không cần thay đổi.', 'Đóng chi nhánh.'], 'Truyền tầm nhìn.'],
      ['order', 'Sắp xếp: “Tôi sẽ đồng hành suốt chặng đường.”', ["I'll be there", 'every step', 'of the', 'way.'], "I'll be there every step of the way."]
    ],
    noi: [['*Imagine* a branch where *no* *customer* → waits more than *five* *minutes*. ↘', 'Hãy hình dung một chi nhánh không khách nào chờ quá 5 phút.'], ['I *hear* your *concerns*. ↘', 'Tôi lắng nghe những lo ngại của các bạn.'], ["I'll be there *every* step of the *way*. ↘", 'Tôi sẽ đồng hành suốt chặng đường.']],
    hoithoai: {
      ctx: 'Em là trưởng dự án chuyển đổi số, họp với nhân viên chi nhánh đang lo lắng.', vai: 'Nhân viên phản đối, em dẫn dắt.', ai: '😟 Branch staff',
      luot: [
        T(["Why do we have to change? The old system works fine.", '', 'Sao phải thay đổi? Hệ thống cũ vẫn ổn.'], ["I hear you. The old system has served us well, but customers now expect faster service, and we're losing them to competitors.", 'Tôi hiểu. Hệ thống cũ đã phục vụ tốt, nhưng khách giờ muốn nhanh hơn và ta đang mất khách cho đối thủ.', 'Công nhận + lý do thay đổi.'], ['Because I said so.', 'Áp đặt.'], ["It's management's decision.", 'Đổ trách nhiệm.']),
        T(["But we don't have time to learn something new.", '', 'Nhưng chúng tôi không có thời gian học cái mới.'], ["That's a fair point. We'll provide training during work hours, and I'll be there every step of the way.", 'Ý hợp lý. Chúng tôi đào tạo trong giờ làm, và tôi sẽ đồng hành suốt chặng đường.', 'Giải pháp + cam kết.'], ['Learn at night.', 'Thiếu cảm thông.'], ["That's your problem.", 'Thiếu lãnh đạo.']),
        T(["OK… what happens if something goes wrong?", '', 'Được… nếu có sự cố thì sao?'], ["You'll have a direct line to our support team, and I trust you to make the call on urgent customer issues.", 'Các bạn có đường dây trực tiếp với đội hỗ trợ, và tôi tin các bạn tự quyết các vấn đề khẩn của khách.', 'Hỗ trợ + trao quyền.'], ['Nothing will go wrong.', 'Hứa suông.'], ['Call me every minute.', 'Không trao quyền.'])
      ], ket: 'Em đã dẫn dắt thay đổi bằng ngôn ngữ lãnh đạo.'
    },
    tom: ['Tầm nhìn, lý do, trao quyền, ghi nhận', 'Đón phản kháng', 'buy-in, quick wins, morale'], nguphap: 'Câu mệnh lệnh mềm: Imagine…, Let\'s…', phatam: 'Giọng ấm, chắc, chậm ở câu tầm nhìn',
    loi: ['Áp đặt', 'Hứa suông'], btvn: ['Viết bài nói 2 phút giới thiệu một thay đổi cho đội', 'Viết email ghi nhận đóng góp của một đồng nghiệp', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 18 ================= */
  const d18 = {
    n: 18, ten: P[17].ten, kinds: K,
    muc: 'Viết bài chuyên ngành / bài blog chuyên gia (600–800 từ): tiêu đề, mở đầu thu hút, lập luận có dẫn chứng, kết có hàm ý.',
    hoc: `${tbl(['Phần', 'Nội dung', 'Ví dụ'], [['Tiêu đề', 'Ngắn, có lợi ích hoặc câu hỏi', 'Is Your Branch Ready for the Cashless Customer?'], ['Mở đầu (hook)', 'Số liệu bất ngờ, câu hỏi, câu chuyện ngắn', 'Last year, Vietnamese consumers made more payments by QR code than by cash.'], ['Thân bài', '3 ý chính, mỗi ý có dẫn chứng', 'According to a 2025 industry survey, …'], ['Phản biện', 'Nêu giới hạn', 'Of course, this shift is not without risks.'], ['Kết', 'Hàm ý / lời khuyên', 'The question is no longer whether to go digital, but how fast.']])}
      ${tip('🔗 Luôn trích nguồn khi dùng số liệu (According to…, A study by… found that…). Không bịa số liệu.')}`,
    vocab: [
      w('hook', '/hʊk/', 'câu mở đầu thu hút', '', ['Start your article with a strong hook.', '', 'Mở bài bằng câu thu hút mạnh.']),
      w('according to', '/əˈkɔːrdɪŋ tuː/', 'theo (nguồn)', '', ['According to the report, …', '', 'Theo báo cáo, …']),
      w('cite', '/saɪt/', 'trích dẫn', '', ['Always cite your sources.', '', 'Luôn trích nguồn.']),
      w('implication', '/ˌɪmplɪˈkeɪʃn/', 'hàm ý, hệ quả', '', ['What are the implications for banks?', '', 'Hàm ý đối với ngân hàng là gì?']),
      w('not without', '/nɑːt wɪˈðaʊt/', 'không phải không có', '', ['The plan is not without risks.', '', 'Kế hoạch không phải không có rủi ro.']),
      w('shift', '/ʃɪft/', 'sự chuyển dịch', '', ['There is a shift towards digital payments.', '', 'Có sự chuyển dịch sang thanh toán số.']),
      w('thought leadership', '/θɔːt ˈliːdərʃɪp/', 'dẫn dắt tư tưởng (chuyên gia)', '', ['LinkedIn articles build thought leadership.', '', 'Bài LinkedIn xây dựng vị thế chuyên gia.']),
      w('insight', '/ˈɪnsaɪt/', 'hiểu biết sâu sắc', '', ['The article offers valuable insights.', '', 'Bài viết đưa ra nhiều hiểu biết giá trị.']),
      w('concise', '/kənˈsaɪs/', 'súc tích', '', ['Keep paragraphs concise.', '', 'Giữ đoạn văn súc tích.']),
      w('takeaway', '/ˈteɪkəweɪ/', 'điều đọng lại', '', ['End with three key takeaways.', '', 'Kết bằng ba điều đọng lại.'])
    ],
    qs: [
      ['mc', 'Mở đầu bài chuyên ngành thu hút nhất?', 'Last year, more payments in Vietnam were made by QR code than by cash.', ['In this article I will write about payments.', 'Payments are important.', 'Hello readers.'], 'Hook bằng dữ liệu.'],
      ['mc', 'Khi dùng số liệu, cần?', 'Trích nguồn rõ ràng', ['Làm tròn cho đẹp', 'Không cần nguồn', 'Ước đoán là đủ'], 'cite.'],
      ['mc', 'The strategy is not ___ risks.', 'without', ['with', 'out of', 'no'], 'not without.'],
      ['mc', 'implication nghĩa là?', 'hàm ý, hệ quả', ['ứng dụng', 'triển khai', 'phức tạp'], 'implication.'],
      ['mc', 'Câu kết có hàm ý mạnh?', 'The question is no longer whether to go digital, but how fast.', ['That is all.', 'Thanks for reading my article.', 'Digital is good.'], 'Kết có hàm ý.'],
      ['hear', "According to a recent industry survey, three in four customers now prefer to open accounts online.", 'Theo khảo sát ngành, 3/4 khách thích mở tài khoản online.', ['1/4 khách thích online.', 'Không có khảo sát.', 'Khách thích đến quầy.'], 'three in four.'],
      ['order', 'Sắp xếp: “Luôn trích nguồn.”', ['Always', 'cite', 'your', 'sources.'], 'Always cite your sources.']
    ],
    noi: [["*Last* year, → more payments were made by *QR* *code* → than by *cash*. ↘", 'Năm ngoái, thanh toán QR nhiều hơn tiền mặt.'], ['Of course, → this shift is *not* *without* *risks*. ↘', 'Dĩ nhiên, sự chuyển dịch này không phải không có rủi ro.'], ['The question is no longer *whether*, → but how *fast*. ↘', 'Câu hỏi không còn là có hay không, mà là nhanh đến đâu.']],
    hoithoai: {
      ctx: 'Em lên dàn ý bài viết LinkedIn về ngân hàng số cùng chuyên gia nội dung.', vai: 'Chuyên gia hỏi, em trả lời.', ai: '✍️ Content coach',
      luot: [
        T(["What's your headline?", '', 'Tiêu đề của bạn là gì?'], ['"Is Your Branch Ready for the Cashless Customer?"', '"Chi nhánh của bạn đã sẵn sàng cho khách hàng không tiền mặt?"', 'Tiêu đề dạng câu hỏi.'], ['"An article about banks."', 'Nhạt.'], ['"Digital digital digital."', 'Vô nghĩa.']),
        T(["And your opening hook?", '', 'Câu mở thu hút?'], ["I'll open with a statistic from the central bank about QR payments, citing the source.", 'Tôi mở bằng số liệu của ngân hàng nhà nước về thanh toán QR, có trích nguồn.', 'Hook + trích nguồn.'], ["I'll make up a big number.", 'Bịa số liệu.'], ['I\'ll introduce myself for two paragraphs.', 'Lan man.']),
        T(['How will you end?', '', 'Kết thế nào?'], ["With three practical takeaways for branch managers and a question for readers to comment on.", 'Bằng ba điều thực tế cho giám đốc chi nhánh và một câu hỏi để người đọc bình luận.', 'Takeaways + tương tác.'], ['Just "The end."', 'Hụt hẫng.'], ['With my phone number.', 'Không phù hợp.'])
      ], ket: 'Em đã lên dàn ý bài viết chuyên gia.'
    },
    tom: ['Tiêu đề – hook – thân – phản biện – kết', 'Trích nguồn', 'Takeaways'], nguphap: 'According to…; not without…; The question is no longer…', phatam: '—',
    loi: ['Bịa số liệu', 'Mở bài lan man'], btvn: ['Viết bài 600 từ về chủ đề chuyên môn của em', 'Nhờ gia sư AI biên tập (Sao chép trong Luyện viết)', 'Đăng thử lên LinkedIn nếu muốn']
  };

  /* ================= NGÀY 19 ================= */
  const d19 = {
    n: 19, ten: P[18].ten, kinds: K,
    muc: 'Chủ trì và tham gia họp trực tuyến đa quốc gia: kiểm soát lượt nói, xử lý sự cố kỹ thuật, đảm bảo mọi múi giờ và giọng nói đều được nghe.',
    hoc: `${tbl(['Tình huống', 'Mẫu câu'], [['Mở họp', "Good morning, good afternoon, or good evening, depending on where you are."], ['Sự cố âm thanh', "Sorry, you're breaking up. Could you turn your camera off to save bandwidth?"], ['Mời người im lặng', "Priya, we haven't heard from you yet – what's your view from the Mumbai office?"], ['Kiểm soát lượt nói', "Let's hear from Tom first, then Mai."], ['Kiểm tra hiểu', "Just to confirm, are we all clear on the next steps?"], ['Kết họp', "I'll send a summary with action points within the hour."]])}
      ${tip('🌏 Với người nghe không bản xứ: nói chậm, câu ngắn, tránh thành ngữ địa phương, xác nhận lại bằng văn bản.')}`,
    vocab: [
      w('breaking up', '/ˈbreɪkɪŋ ʌp/', 'tiếng bị ngắt quãng', '', ["Sorry, you're breaking up.", '', 'Xin lỗi, tiếng anh bị ngắt quãng.']),
      w('on mute', '/ɑːn mjuːt/', 'đang tắt mic', '', ["I think you're on mute.", '', 'Hình như anh đang tắt mic.']),
      w('bandwidth', '/ˈbændwɪdθ/', 'băng thông; khả năng (nhận thêm việc)', '', ["I don't have the bandwidth this week.", '', 'Tuần này tôi không còn sức nhận thêm việc.']),
      w('time zone', '/taɪm zoʊn/', 'múi giờ', '', ["Let's find a time that works across time zones.", '', 'Tìm giờ phù hợp các múi giờ.']),
      w('share my screen', '/ʃer maɪ skriːn/', 'chia sẻ màn hình', '', ['Let me share my screen.', '', 'Để tôi chia sẻ màn hình.']),
      w('action points', '/ˈækʃn pɔɪnts/', 'đầu việc cần làm', '', ["I'll send the action points.", '', 'Tôi sẽ gửi các đầu việc.']),
      w('hear from', '/hɪr frʌm/', 'nghe ý kiến của', '', ["Let's hear from Lan.", '', 'Hãy nghe ý kiến của Lan.']),
      w('asynchronous', '/eɪˈsɪŋkrənəs/', 'không đồng thời', '', ['We use asynchronous updates.', '', 'Chúng tôi cập nhật không đồng thời.']),
      w('lag', '/læɡ/', 'độ trễ', '', ['There is a lag on the call.', '', 'Cuộc gọi bị trễ.']),
      w('follow-up', '/ˈfɑːloʊ ʌp/', 'việc theo dõi sau', '', ["I'll send a follow-up email.", '', 'Tôi sẽ gửi email theo dõi.'])
    ],
    qs: [
      ['mc', 'Đồng nghiệp nói nhưng không ai nghe thấy, em nói?', "I think you're on mute.", ['You are silent forever.', 'Speak louder!!', 'Your mic is dead.'], 'on mute.'],
      ['mc', 'Mời người chưa phát biểu?', "Priya, we haven't heard from you yet – what's your view?", ['Priya, why are you quiet?', 'Priya, say something.', 'Priya is not working.'], 'Mời khéo.'],
      ['mc', "Sorry, you're ___. Could you repeat that?", 'breaking up', ['breaking down', 'breaking in', 'breaking off'], 'breaking up.'],
      ['mc', '“I don\'t have the bandwidth this week” nghĩa là?', 'tuần này tôi không còn sức nhận thêm việc', ['mạng tôi yếu', 'tôi không có Internet', 'tôi bận đi du lịch'], 'Nghĩa bóng.'],
      ['mc', 'Nói với người nghe không bản xứ nên?', 'Câu ngắn, chậm, tránh thành ngữ địa phương', ['Nói nhanh như người bản xứ', 'Dùng nhiều tiếng lóng', 'Không cần xác nhận'], 'Rõ ràng.'],
      ['hear', "Good morning, good afternoon, or good evening, depending on where you are. Let me share my screen.", 'Chào theo múi giờ; chia sẻ màn hình.', ['Chỉ chào buổi sáng.', 'Kết thúc cuộc họp.', 'Tắt màn hình.'], 'Mở họp đa múi giờ.'],
      ['order', 'Sắp xếp: “Để tôi chia sẻ màn hình.”', ['Let me', 'share', 'my', 'screen.'], 'Let me share my screen.']
    ],
    noi: [["Good *morning*, good *afternoon*, → or good *evening*, → depending on where you *are*. ↘", 'Chào buổi sáng, chiều hoặc tối tuỳ nơi bạn ở.'], ["I think you're on *mute*. ↘", 'Hình như anh đang tắt mic.'], ["Priya, → we haven't *heard* from you *yet*. → What's your *view*? ↘", 'Priya, chưa nghe ý kiến chị. Chị nghĩ sao?']],
    hoithoai: {
      ctx: 'Em chủ trì họp trực tuyến với đồng nghiệp ở Singapore, Mumbai và Sydney.', vai: 'Nhiều người tham gia, em điều phối.', ai: '💻 Participants',
      luot: [
        T(['(Silence. Nobody starts.)', '', '(Im lặng. Không ai bắt đầu.)'], ["Good morning, good afternoon or good evening, depending on where you are. Let's get started – I'll share my screen.", 'Chào mọi người theo múi giờ. Bắt đầu nhé – tôi chia sẻ màn hình.', 'Mở họp đa múi giờ.'], ['Hello? Anyone?', 'Thiếu chủ động.'], ['Start, everybody.', 'Cộc.']),
        T(["(Tom, Sydney) …the budget… can't… next…", '', '(Tom ở Sydney) …ngân sách… không thể… tiếp theo…'], ["Sorry Tom, you're breaking up. Could you turn your camera off and try again?", 'Xin lỗi Tom, tiếng anh bị ngắt. Anh tắt camera rồi thử lại nhé?', 'Xử lý sự cố.'], ['Tom, speak English!', 'Thô lỗ.'], ['Ignore Tom.', 'Bỏ qua người tham gia.']),
        T(['(Priya, Mumbai, has not spoken.)', '', '(Priya ở Mumbai chưa nói.)'], ["Priya, we haven't heard from you yet – how does this plan look from the Mumbai side?", 'Priya, chưa nghe ý kiến chị – kế hoạch này nhìn từ Mumbai thế nào?', 'Mời khéo.'], ['Priya, are you sleeping?', 'Thiếu tôn trọng.'], ["We don't need Mumbai.", 'Loại trừ.']),
        T(['(End of meeting)', '', '(Cuối buổi)'], ["Just to confirm, are we all clear on the next steps? I'll send a summary with action points within the hour.", 'Xác nhận lại, mọi người rõ bước tiếp chưa? Trong vòng 1 giờ tôi gửi tóm tắt kèm đầu việc.', 'Kiểm tra hiểu + theo dõi.'], ['Bye.', 'Thiếu chốt.'], ['Remember everything yourselves.', 'Thiếu trách nhiệm.'])
      ], ket: 'Em đã điều phối họp trực tuyến đa quốc gia hiệu quả.'
    },
    tom: ['Mở họp đa múi giờ', 'Sự cố kỹ thuật', 'Mời người im lặng', 'Xác nhận và theo dõi'], nguphap: "Let's hear from…; Just to confirm…", phatam: 'Nói chậm, rõ phụ âm cuối cho người nghe không bản xứ',
    loi: ['Nói quá nhanh, dùng tiếng lóng', 'Không gửi tóm tắt sau họp'], btvn: ['Soạn kịch bản chủ trì họp online 15 phút', 'Viết email tóm tắt sau họp với 5 đầu việc', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 20 ================= */
  const d20 = {
    n: 20, ten: P[19].ten, kinds: K,
    muc: 'Truyền thông khi khủng hoảng: thông báo sự cố minh bạch, xin lỗi đúng mực, trả lời báo chí, tránh hứa quá mức.',
    hoc: `${tbl(['Nguyên tắc', 'Câu mẫu'], [['Nhanh và minh bạch', "At 9:15 this morning, some customers were unable to access mobile banking."], ['Thừa nhận và xin lỗi', "We sincerely apologise for the inconvenience this has caused."], ['Nêu hành động', "Our engineers are working to restore full service, and no customer data has been compromised."], ['Không suy đoán', "We will share more information as soon as it is confirmed."], ['Cam kết cập nhật', "We will provide another update by 12 noon."]])}
      ${tbl(['Tránh nói', 'Nói thay'], [['No comment.', "We're not able to share details at this stage, but…"], ['It\'s not our fault.', "We're investigating the cause."], ['This will never happen again.', "We're taking steps to prevent this from happening again."]])}`,
    vocab: [
      w('outage', '/ˈaʊtɪdʒ/', 'sự cố ngừng dịch vụ', '', ['There was a two-hour outage.', '', 'Có sự cố ngừng dịch vụ hai giờ.']),
      w('restore', '/rɪˈstɔːr/', 'khôi phục', '', ['Service has been fully restored.', '', 'Dịch vụ đã được khôi phục hoàn toàn.']),
      w('compromised', '/ˈkɑːmprəmaɪzd/', 'bị xâm phạm', '', ['No customer data has been compromised.', '', 'Không dữ liệu khách hàng nào bị xâm phạm.']),
      w('sincerely apologise', '/sɪnˈsɪrli əˈpɑːlədʒaɪz/', 'thành thật xin lỗi', '', ['We sincerely apologise.', '', 'Chúng tôi thành thật xin lỗi.']),
      w('statement', '/ˈsteɪtmənt/', 'tuyên bố', '', ['The bank issued a statement.', '', 'Ngân hàng ra tuyên bố.']),
      w('speculate', '/ˈspekjuleɪt/', 'suy đoán', '', ["We won't speculate on the cause.", '', 'Chúng tôi sẽ không suy đoán nguyên nhân.']),
      w('reassure', '/ˌriːəˈʃʊr/', 'trấn an', '', ['We want to reassure our customers.', '', 'Chúng tôi muốn trấn an khách hàng.']),
      w('spokesperson', '/ˈspoʊkspɜːrsn/', 'người phát ngôn', '', ['A spokesperson confirmed the incident.', '', 'Người phát ngôn xác nhận sự cố.']),
      w('reputation', '/ˌrepjuˈteɪʃn/', 'uy tín, danh tiếng', '', ['Trust and reputation take years to build.', '', 'Niềm tin và uy tín mất nhiều năm để xây.']),
      w('update', '/ˈʌpdeɪt/', 'thông tin cập nhật', '', ["We'll provide an update by noon.", '', 'Chúng tôi cập nhật trước trưa.'])
    ],
    qs: [
      ['mc', 'Câu tuyên bố khủng hoảng tốt nhất?', 'We sincerely apologise. Our engineers are working to restore service, and we will update you by noon.', ["It's not our fault.", 'No comment.', 'This will never happen again, 100%.'], 'Xin lỗi + hành động + cập nhật.'],
      ['mc', 'Thay "No comment" bằng?', "We're not able to share details at this stage, but we'll update you soon.", ['Go away.', 'Ask someone else.', "I don't know anything."], 'Minh bạch có giới hạn.'],
      ['mc', 'No customer data has been ___.', 'compromised', ['compromise', 'compromising', 'promised'], 'bị xâm phạm.'],
      ['mc', 'Khi chưa rõ nguyên nhân, người phát ngôn nên?', 'Không suy đoán, hứa cập nhật khi xác nhận', ['Đoán đại nguyên nhân', 'Đổ lỗi cho nhà cung cấp', 'Im lặng hoàn toàn'], 'Không speculate.'],
      ['mc', 'outage nghĩa là?', 'sự cố ngừng dịch vụ', ['sự tức giận', 'lối ra', 'chi phí'], 'outage.'],
      ['hear', "At nine fifteen this morning, some customers were unable to access mobile banking. Full service has now been restored.", '9:15 sáng một số khách không vào được app; nay đã khôi phục.', ['Lỗi kéo dài cả ngày.', 'Mất dữ liệu khách hàng.', 'Lỗi lúc 9:50 tối.'], '9:15 / restored.'],
      ['order', 'Sắp xếp: “Chúng tôi thành thật xin lỗi.”', ['We', 'sincerely', 'apologise.'], 'We sincerely apologise.']
    ],
    noi: [["We *sincerely* *apologise* → for the *inconvenience* this has *caused*. ↘", 'Thành thật xin lỗi vì sự bất tiện.'], ['*No* customer data → has been *compromised*. ↘', 'Không dữ liệu khách hàng nào bị xâm phạm.'], ["We'll provide another *update* → by *twelve* *noon*. ↘", 'Chúng tôi sẽ cập nhật trước 12 giờ trưa.']],
    hoithoai: {
      ctx: 'Ứng dụng ngân hàng sập 2 giờ. Một phóng viên tiếng Anh gọi đến, em là người phát ngôn được uỷ quyền.', vai: 'Phóng viên hỏi dồn, em trả lời.', ai: '📰 Reporter',
      luot: [
        T(["Is it true your app was down all morning?", '', 'Ứng dụng của bên anh sập cả buổi sáng đúng không?'], ["From 9:15 to around 11:20, some customers were unable to log in. Full service has now been restored, and we sincerely apologise.", 'Từ 9:15 đến khoảng 11:20, một số khách không đăng nhập được. Dịch vụ đã khôi phục và chúng tôi thành thật xin lỗi.', 'Sự thật + xin lỗi.'], ['No comment.', 'Né tránh.'], ['It was only a small problem, nobody cared.', 'Coi nhẹ.']),
        T(["Was it a cyber attack?", '', 'Có phải tấn công mạng không?'], ["We won't speculate at this stage. What I can confirm is that no customer data has been compromised.", 'Chúng tôi sẽ không suy đoán lúc này. Điều tôi xác nhận được là không dữ liệu khách hàng nào bị xâm phạm.', 'Không suy đoán + trấn an.'], ['Yes, probably hackers.', 'Suy đoán.'], ['Maybe, who knows.', 'Thiếu chuyên nghiệp.']),
        T(["Can you promise it won't happen again?", '', 'Anh có thể hứa không lặp lại?'], ["We're investigating the cause and taking steps to prevent it from happening again. We'll share our findings publicly.", 'Chúng tôi đang điều tra nguyên nhân và có biện pháp ngăn tái diễn. Sẽ công bố kết quả công khai.', 'Cam kết thực tế.'], ['Yes, never again, 100%.', 'Hứa quá mức.'], ["I can't promise anything.", 'Thiếu cam kết.'])
      ], ket: 'Em đã truyền thông khủng hoảng minh bạch và đúng mực.'
    },
    tom: ['Nhanh – minh bạch – xin lỗi – hành động – cập nhật', 'Không suy đoán, không hứa quá mức'], nguphap: 'Bị động hiện tại hoàn thành (has been restored); won\'t speculate', phatam: 'Giọng điềm tĩnh, chậm, rõ',
    loi: ['No comment', 'Hứa "never again"'], btvn: ['Viết thông cáo sự cố 150 từ', 'Chuẩn bị 5 câu trả lời báo chí khó', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 21 ================= */
  const d21 = {
    n: 21, ten: P[20].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Ôn giai đoạn 3: thuyết trình hội đồng, đàm phán cấp cao, lãnh đạo thay đổi, viết chuyên ngành, họp online, truyền thông khủng hoảng.',
    hoc: `<h4>Tóm tắt giai đoạn 3</h4>${tbl(['Tình huống', 'Câu then chốt'], [['Hội đồng', "I'm asking for… / …which means… / What I'm asking for today is…"], ['Đàm phán', 'in the region of… / We could… if you could… / non-negotiable / To recap…'], ['Lãnh đạo', 'Imagine… / I hear your concerns. / I trust you to make the call.'], ['Viết chuyên ngành', 'hook, According to…, not without risks, takeaways'], ['Họp online', "You're on mute. / Let's hear from… / Just to confirm…"], ['Khủng hoảng', 'We sincerely apologise… / We won\'t speculate… / We\'ll update you by…']])}`,
    qs: [['mc', 'Thay "No comment" bằng?', "We're not able to share details at this stage.", ['Go away.', 'Ask later.', 'Nothing.'], 'Minh bạch.'], ['mc', 'We could lower the price ___ you could commit to three years.', 'if', ['unless', 'despite', 'whereas'], 'Trade-off có điều kiện.']],
    noi: [["What I'm *asking* for → is a three-month *pilot*. ↘", 'Tôi xin thí điểm 3 tháng.'], ["I *hear* your *concerns*. ↘", 'Tôi lắng nghe lo ngại của các bạn.']],
    hoithoai: {
      ctx: 'Mô phỏng một ngày làm giám đốc khối: hội đồng, đối tác, nhân viên, báo chí.', vai: 'Nhiều vai, em phản xạ cấp C1.', ai: '🎭 Nhiều người',
      luot: [
        T(['(Board) What do you need from us?', '', '(Hội đồng) Bạn cần gì?'], ["Approval for a 3-billion pilot, which would pay for itself in a year.", 'Phê duyệt thí điểm 3 tỷ, tự hoàn vốn trong một năm.', 'BLUF.'], ['Let me explain our history first.', 'Lan man.'], ['Maybe some money.', 'Mơ hồ.']),
        T(["(Vendor) That's our final price.", '', '(Nhà cung cấp) Đó là giá cuối.'], ["I understand. We could commit to a longer contract if you could include support at no extra cost.", 'Tôi hiểu. Chúng tôi có thể cam kết hợp đồng dài hơn nếu anh gồm hỗ trợ miễn phí.', 'Trade-off.'], ['OK, fine.', 'Nhượng bộ không điều kiện.'], ['Then goodbye.', 'Rút lui quá sớm.']),
        T(["(Staff) This change is too fast!", '', '(Nhân viên) Thay đổi quá nhanh!'], ["I hear your concerns. Let's agree on a schedule that works, and I'll be there every step of the way.", 'Tôi lắng nghe. Cùng thống nhất lịch phù hợp, tôi sẽ đồng hành suốt chặng đường.', 'Lãnh đạo thay đổi.'], ['Just do it.', 'Áp đặt.'], ['Complain to HR.', 'Né tránh.']),
        T(["(Reporter) Was customer data leaked?", '', '(Phóng viên) Dữ liệu khách có bị lộ?'], ["What I can confirm is that no customer data has been compromised. We'll provide a full update by 5 p.m.", 'Tôi xác nhận không dữ liệu khách hàng nào bị xâm phạm. Chúng tôi cập nhật đầy đủ trước 5 giờ chiều.', 'Minh bạch + cập nhật.'], ['No comment.', 'Né tránh.'], ['Maybe a little.', 'Suy đoán gây hoang mang.'])
      ], ket: 'Em đã xử lý trọn vai trò lãnh đạo bằng tiếng Anh!'
    },
    tom: ['Ôn giai đoạn 3', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn', phatam: 'Phong thái lãnh đạo: chậm, chắc, rõ',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: học lại ngày yếu', 'Viết bài chuyên ngành 600 từ', 'Ghi âm bài nói 3 phút trước hội đồng']
  };

  /* ================= NGÀY 22 ================= */
  const d22 = {
    n: 22, ten: P[21].ten, kinds: K,
    muc: 'Viết IELTS Task 2 band 7+: quan điểm rõ xuyên suốt, ý phát triển sâu, ví dụ cụ thể, từ vựng chính xác, câu phức đa dạng, ít lỗi.',
    hoc: `${tbl(['Tiêu chí', 'Band 6', 'Band 7+'], [['Task Response', 'Quan điểm có nhưng chưa rõ ở mọi đoạn', 'Quan điểm rõ xuyên suốt, ý được mở rộng và chứng minh'], ['Coherence', 'Từ nối máy móc (Firstly, Secondly…)', 'Liên kết tự nhiên, dùng đại từ, từ thay thế'], ['Lexical', 'Từ vựng đủ dùng, đôi khi lặp', 'Từ ít phổ biến, collocation chính xác, ít lỗi chính tả'], ['Grammar', 'Câu phức có nhưng hay lỗi', 'Đa dạng cấu trúc, phần lớn câu không lỗi']])}
      ${say('While it is undeniable that technology has made banking more convenient, I would argue that the decline of face-to-face services risks excluding the very customers who need financial guidance most.', 'Dù không thể phủ nhận công nghệ làm ngân hàng thuận tiện hơn, tôi cho rằng sự suy giảm dịch vụ trực tiếp có nguy cơ loại trừ chính những khách hàng cần tư vấn tài chính nhất.')}
      ${tip('✍️ Mỗi đoạn thân bài: 1 ý chính được <b>phát triển 2–3 bước</b> (giải thích → hệ quả → ví dụ cụ thể), thay vì liệt kê nhiều ý nông.')}`,
    vocab: [
      w('undeniable', '/ˌʌndɪˈnaɪəbl/', 'không thể phủ nhận', '', ['It is undeniable that AI is powerful.', '', 'Không thể phủ nhận AI rất mạnh.']),
      w('exclude', '/ɪkˈskluːd/', 'loại trừ', '', ['Digital services may exclude older people.', '', 'Dịch vụ số có thể loại trừ người lớn tuổi.']),
      w('the very', '/ðə ˈveri/', 'chính (những)', 'Nhấn mạnh.', ['It harms the very people it aims to help.', '', 'Nó gây hại cho chính những người nó muốn giúp.']),
      w('exacerbate', '/ɪɡˈzæsərbeɪt/', 'làm trầm trọng thêm', '', ['This could exacerbate inequality.', '', 'Điều này có thể làm trầm trọng bất bình đẳng.']),
      w('mitigate', '/ˈmɪtɪɡeɪt/', 'giảm nhẹ', '', ['Training can mitigate the risks.', '', 'Đào tạo có thể giảm nhẹ rủi ro.']),
      w('inevitable', '/ɪnˈevɪtəbl/', 'không thể tránh khỏi', '', ['Change is inevitable.', '', 'Thay đổi là không thể tránh khỏi.']),
      w('disproportionately', '/ˌdɪsprəˈpɔːrʃənətli/', 'một cách không tương xứng', '', ['Rural areas are disproportionately affected.', '', 'Vùng nông thôn bị ảnh hưởng nặng hơn.']),
      w('a case in point', '/ə keɪs ɪn pɔɪnt/', 'một ví dụ điển hình', '', ['Singapore is a case in point.', '', 'Singapore là ví dụ điển hình.']),
      w('by the same token', '/baɪ ðə seɪm ˈtoʊkən/', 'tương tự như vậy', '', ['By the same token, banks must adapt.', '', 'Tương tự, ngân hàng phải thích nghi.']),
      w('far-reaching', '/ˌfɑːr ˈriːtʃɪŋ/', 'sâu rộng', '', ['The changes will have far-reaching effects.', '', 'Thay đổi sẽ có tác động sâu rộng.'])
    ],
    qs: [
      ['mc', 'Band 7 khác band 6 ở Task Response?', 'Quan điểm rõ xuyên suốt và ý được phát triển sâu', ['Viết dài hơn 400 từ', 'Dùng thật nhiều từ nối Firstly, Secondly', 'Liệt kê thật nhiều ý'], 'Phát triển sâu.'],
      ['mc', 'Từ thay cho "make worse" trang trọng?', 'exacerbate', ['mitigate', 'alleviate', 'facilitate'], 'exacerbate.'],
      ['mc', 'Từ thay cho "reduce the harm of"?', 'mitigate', ['exacerbate', 'aggravate', 'escalate'], 'mitigate.'],
      ['mc', 'Singapore\'s cashless policy is ___ in point.', 'a case', ['an example', 'a point', 'a matter'], 'a case in point.'],
      ['mc', 'Rural communities are ___ affected by branch closures.', 'disproportionately', ['proportion', 'disproportion', 'proportional'], 'Trạng từ.'],
      ['hear', "While it is undeniable that technology has made banking more convenient, it risks excluding the very customers who need guidance most.", 'Công nghệ tiện hơn nhưng có nguy cơ loại trừ chính khách cần tư vấn nhất.', ['Công nghệ không có lợi.', 'Mọi khách đều được lợi như nhau.', 'Không cần tư vấn.'], 'While… the very…'],
      ['order', 'Sắp xếp: “Thay đổi là không thể tránh khỏi.”', ['Change', 'is', 'inevitable.'], 'Change is inevitable.']
    ],
    noi: [['While it is *undeniable* that technology helps, → it risks excluding the *very* customers → who need it *most*. ↘', 'Dù không thể phủ nhận công nghệ có ích, nó có nguy cơ loại trừ chính những khách cần nhất.'], ['*Singapore* is a *case* in *point*. ↘', 'Singapore là ví dụ điển hình.'], ['Training can *mitigate* the *risks*. ↘', 'Đào tạo có thể giảm nhẹ rủi ro.']],
    hoithoai: {
      ctx: 'Giám khảo IELTS cũ nhận xét đoạn thân bài band 6 của em và hướng dẫn nâng lên band 7.', vai: 'Giám khảo góp ý, em sửa.', ai: '🧑‍⚖️ Ex-examiner',
      luot: [
        T(['Your paragraph lists four reasons with one sentence each. What should you do?', '', 'Đoạn của em liệt kê 4 lý do mỗi lý do một câu. Nên làm gì?'], ['Choose the strongest reason and develop it: explain it, show its consequence, then give a specific example.', 'Chọn lý do mạnh nhất và phát triển: giải thích, nêu hệ quả, rồi ví dụ cụ thể.', 'Phát triển sâu.'], ['Add more reasons.', 'Càng nông hơn.'], ['Make sentences shorter.', 'Không giải quyết vấn đề.']),
        T(['You wrote "This makes the problem worse." Upgrade it.', '', 'Nâng cấp câu này.'], ['This is likely to exacerbate existing inequalities.', 'Điều này có thể làm trầm trọng thêm bất bình đẳng hiện có.', 'Từ vựng + rào đón.'], ['This makes the problem very very worse.', 'Lặp.'], ['This exacerbates worse.', 'Sai.']),
        T(['Your example says "some countries". Be specific.', '', 'Ví dụ "một số nước". Cụ thể hơn.'], ['Sweden is a case in point: as cash use fell below 10%, many elderly people struggled to pay for basic services.', 'Thuỵ Điển là ví dụ điển hình: khi tiền mặt dưới 10%, nhiều người già gặp khó khi thanh toán dịch vụ cơ bản.', 'Ví dụ cụ thể (dạng minh hoạ, cần kiểm chứng số liệu khi viết thật).'], ['Many countries, everywhere.', 'Mơ hồ.'], ['My friend said so.', 'Không thuyết phục.'])
      ], ket: 'Em đã nâng một đoạn văn từ band 6 lên band 7.'
    },
    tom: ['4 tiêu chí band 7+', 'Phát triển ý 2–3 bước', 'Từ vựng chính xác'], nguphap: 'While…; the very…; câu phức đa dạng', phatam: '—',
    loi: ['Liệt kê nhiều ý nông', 'Ví dụ mơ hồ'], btvn: ['Viết lại bài Task 2 cũ theo hướng band 7', 'Nhờ gia sư AI chấm theo 4 tiêu chí, so sánh trước – sau', 'Học 10 từ band 7+']
  };

  /* ================= NGÀY 23 ================= */
  const d23 = {
    n: 23, ten: P[22].ten, kinds: K,
    muc: 'Nói IELTS band 7+: trôi chảy, tự nhiên, dùng cấu trúc linh hoạt, từ vựng ít phổ biến, ngữ điệu biểu cảm; xử lý câu hỏi trừu tượng.',
    hoc: `${tbl(['Kỹ thuật', 'Ví dụ'], [['Câu đệm tự nhiên (mua thời gian)', "That's an interesting question – I've never really thought about it, but…"], ['Suy đoán tương lai', "I suspect that within a decade, most people won't carry cash at all."], ['So sánh xưa – nay', "Whereas my parents' generation saved in gold, younger people tend to invest in funds."], ['Câu điều kiện giả định', 'If I were in charge of education policy, I would make financial literacy compulsory.'], ['Từ vựng biểu cảm', 'genuinely, remarkably, a far cry from, by and large']])}
      ${tip('🎙️ Band 7 không cần hoàn hảo; cần <b>nói được lâu, tự nhiên, ít ngập ngừng</b>, tự sửa lỗi nhanh và dùng đa dạng cấu trúc một cách thoải mái.')}`,
    vocab: [
      w("I've never really thought about it", '/aɪv ˈnevər ˈrɪəli θɔːt əˈbaʊt ɪt/', 'tôi chưa nghĩ kỹ về điều đó', '', ["I've never really thought about it, but I'd say yes.", '', 'Tôi chưa nghĩ kỹ, nhưng có lẽ là có.']),
      w('I suspect', '/aɪ səˈspekt/', 'tôi ngờ rằng', '', ['I suspect prices will keep rising.', '', 'Tôi ngờ rằng giá sẽ tiếp tục tăng.']),
      w('a far cry from', '/ə fɑːr kraɪ frʌm/', 'khác xa với', '', ['Life today is a far cry from the 1990s.', '', 'Cuộc sống nay khác xa thập niên 90.']),
      w('by and large', '/baɪ ənd lɑːrdʒ/', 'nhìn chung', '', ['By and large, people are optimistic.', '', 'Nhìn chung mọi người lạc quan.']),
      w('genuinely', '/ˈdʒenjuɪnli/', 'thực sự', '', ["I'm genuinely interested.", '', 'Tôi thực sự quan tâm.']),
      w('remarkably', '/rɪˈmɑːrkəbli/', 'đáng chú ý', '', ['The city has changed remarkably.', '', 'Thành phố thay đổi đáng kể.']),
      w('financial literacy', '/faɪˈnænʃl ˈlɪtərəsi/', 'hiểu biết tài chính', '', ['Financial literacy should be taught at school.', '', 'Nên dạy hiểu biết tài chính ở trường.']),
      w('compulsory', '/kəmˈpʌlsəri/', 'bắt buộc', '', ['English is compulsory in schools.', '', 'Tiếng Anh bắt buộc ở trường.']),
      w('off the top of my head', '/ɔːf ðə tɑːp əv maɪ hed/', 'nghĩ nhanh thì', '', ["Off the top of my head, I'd say three.", '', 'Nghĩ nhanh thì khoảng ba.']),
      w('come to think of it', '/kʌm tə θɪŋk əv ɪt/', 'nghĩ lại thì', '', ['Come to think of it, you may be right.', '', 'Nghĩ lại thì bạn có thể đúng.'])
    ],
    qs: [
      ['mc', 'Câu mua thời gian tự nhiên khi gặp câu hỏi khó?', "That's an interesting question – I've never really thought about it, but…", ['Um… um… I don\'t know.', 'Next question please.', 'Silence.'], 'Câu đệm.'],
      ['mc', 'Life today is a far ___ from my childhood.', 'cry', ['call', 'way', 'shout'], 'a far cry from.'],
      ['mc', '___, I think most people are happy with online banking.', 'By and large', ['By large', 'In and large', 'At large and'], 'By and large.'],
      ['mc', 'If I ___ in charge, I would make it compulsory.', 'were', ['am', 'will be', 'had'], 'Giả định.'],
      ['mc', 'compulsory nghĩa là?', 'bắt buộc', ['tự chọn', 'phức tạp', 'đầy đủ'], 'compulsory.'],
      ['hear', "Whereas my parents' generation saved in gold, younger people tend to invest in funds or digital assets.", 'Thế hệ cha mẹ tích vàng, người trẻ đầu tư quỹ hoặc tài sản số.', ['Người trẻ tích vàng.', 'Cha mẹ đầu tư quỹ.', 'Không ai tiết kiệm.'], 'Whereas…'],
      ['order', 'Sắp xếp: “Nghĩ lại thì bạn có thể đúng.”', ['Come to think of it,', 'you', 'may be', 'right.'], 'Come to think of it, you may be right.']
    ],
    noi: [["That's an *interesting* question. → I've never *really* *thought* about it, → but… →", 'Câu hỏi thú vị. Tôi chưa nghĩ kỹ, nhưng…'], ['I *suspect* that within a *decade*, → most people won\'t carry *cash* at *all*. ↘', 'Tôi ngờ rằng trong 10 năm, hầu hết mọi người không mang tiền mặt.'], ['Life today is a *far* *cry* from the *nineties*. ↘', 'Cuộc sống nay khác xa thập niên 90.']],
    hoithoai: {
      ctx: 'IELTS Speaking Part 3, chủ đề "Money and society". Mục tiêu band 7+.', vai: 'Giám khảo hỏi câu trừu tượng, em trả lời tự nhiên.', ai: '👩‍🏫 Examiner',
      luot: [
        T(['How have attitudes towards saving money changed in your country?', '', 'Thái độ tiết kiệm ở nước bạn thay đổi thế nào?'], ["Quite remarkably, actually. Whereas my parents' generation kept savings in gold at home, younger people tend to invest in funds through their phones – it's a far cry from twenty years ago.", 'Khá đáng kể. Thế hệ cha mẹ cất vàng ở nhà, còn người trẻ đầu tư quỹ qua điện thoại – khác xa 20 năm trước.', 'So sánh xưa – nay + idiom.'], ['People save money more now.', 'Ngắn, đơn giản.'], ['Saving is changing, yes.', 'Không phát triển.']),
        T(['Should financial education be part of the school curriculum?', '', 'Giáo dục tài chính có nên vào chương trình học?'], ["Absolutely. If I were in charge of education policy, I'd make financial literacy compulsory from secondary school, because so many young adults fall into debt simply because nobody taught them how credit works.", 'Chắc chắn. Nếu tôi phụ trách chính sách, tôi sẽ bắt buộc dạy hiểu biết tài chính từ THCS, vì nhiều người trẻ mắc nợ chỉ vì không ai dạy họ tín dụng hoạt động thế nào.', 'Giả định + lý do sâu.'], ['Yes, good idea.', 'Quá ngắn.'], ['If I am the minister, I teach money.', 'Sai giả định.']),
        T(['Do you think money can buy happiness?', '', 'Tiền có mua được hạnh phúc không?'], ["Hmm, I've never really thought about it in depth, but I suspect it can up to a point – it removes stress – but by and large, relationships matter far more.", 'Tôi chưa nghĩ sâu, nhưng tôi ngờ rằng ở mức độ nào đó thì có – nó giảm căng thẳng – nhưng nhìn chung các mối quan hệ quan trọng hơn nhiều.', 'Câu đệm + rào đón + quan điểm cân bằng.'], ['Yes, money is happiness.', 'Đơn giản hoá.'], ['I don\'t know.', 'Không trả lời.'])
      ], ket: 'Em đã trả lời Part 3 tự nhiên ở mức band 7+.'
    },
    tom: ['Câu đệm tự nhiên', 'Suy đoán, so sánh, giả định', 'Từ vựng biểu cảm'], nguphap: 'Whereas…; I suspect…; If I were…', phatam: 'Ngữ điệu biểu cảm, ngắt nhóm tự nhiên',
    loi: ['Ngập ngừng bằng um/uh', 'Câu trả lời ngắn cho câu hỏi trừu tượng'], btvn: ['Trả lời 6 câu Part 3 chủ đề tiền bạc, ghi âm', 'Đếm từ/phút và số lần ngập ngừng', 'Nhờ gia sư AI chấm band']
  };

  /* ================= NGÀY 24 ================= */
  const d24 = {
    n: 24, ten: P[23].ten, kinds: K,
    muc: 'Đọc bài học thuật dài: xác định luận điểm, thái độ tác giả, suy luận ý ngầm, nhận ra kỹ thuật thuyết phục.',
    hoc: `${tbl(['Kỹ năng', 'Dấu hiệu / câu hỏi'], [['Luận điểm chính', 'Câu chủ đề đoạn mở và kết; từ "this article argues"'], ['Thái độ tác giả', 'Tính từ/trạng từ đánh giá: alarmingly, admittedly, dubious, compelling'], ['Suy luận', 'What does the writer imply? – đọc giữa các dòng'], ['Phân biệt sự thật – ý kiến', 'Số liệu có nguồn vs. "it seems", "I believe"'], ['Kỹ thuật thuyết phục', 'câu hỏi tu từ, so sánh, dẫn chuyên gia, ngôn ngữ cảm xúc']])}
      ${say('Alarmingly, fewer than half of the respondents could correctly calculate simple interest – a finding that raises serious questions about the effectiveness of current financial education.', 'Đáng báo động là chưa đến một nửa người được hỏi tính đúng lãi đơn – phát hiện đặt ra câu hỏi nghiêm túc về hiệu quả giáo dục tài chính hiện nay.')}`,
    vocab: [
      w('alarmingly', '/əˈlɑːrmɪŋli/', 'đáng báo động', '', ['Alarmingly, debt is rising fast.', '', 'Đáng báo động là nợ tăng nhanh.']),
      w('dubious', '/ˈduːbiəs/', 'đáng ngờ', '', ['The claim seems dubious.', '', 'Tuyên bố có vẻ đáng ngờ.']),
      w('imply', '/ɪmˈplaɪ/', 'ngụ ý', '', ['What does the writer imply?', '', 'Tác giả ngụ ý gì?']),
      w('stance', '/stæns/', 'lập trường', '', ["What is the author's stance?", '', 'Lập trường tác giả là gì?']),
      w('rhetorical question', '/rɪˈtɔːrɪkl ˈkwestʃən/', 'câu hỏi tu từ', '', ['The writer uses rhetorical questions.', '', 'Tác giả dùng câu hỏi tu từ.']),
      w('raise questions about', '/reɪz ˈkwestʃənz əˈbaʊt/', 'đặt ra câu hỏi về', '', ['This raises questions about safety.', '', 'Điều này đặt ra câu hỏi về an toàn.']),
      w('impartial', '/ɪmˈpɑːrʃl/', 'khách quan, vô tư', '', ['The report is largely impartial.', '', 'Báo cáo phần lớn khách quan.']),
      w('biased', '/ˈbaɪəst/', 'thiên lệch', '', ['The article seems biased.', '', 'Bài báo có vẻ thiên lệch.']),
      w('underpin', '/ˌʌndərˈpɪn/', 'làm nền tảng cho', '', ['Data underpins the argument.', '', 'Dữ liệu làm nền cho lập luận.']),
      w('scepticism', '/ˈskeptɪsɪzəm/', 'sự hoài nghi', '', ['The writer expresses scepticism.', '', 'Tác giả bày tỏ hoài nghi.'])
    ],
    qs: [
      ['mc', 'Từ "alarmingly" cho thấy thái độ tác giả?', 'lo ngại', ['vui mừng', 'trung lập', 'hài hước'], 'alarmingly.'],
      ['mc', '"The claim seems dubious" – tác giả?', 'nghi ngờ tuyên bố', ['đồng ý hoàn toàn', 'không có ý kiến', 'ca ngợi'], 'dubious.'],
      ['mc', 'Câu hỏi tác giả hỏi nhưng không cần trả lời gọi là?', 'rhetorical question', ['direct question', 'yes/no question', 'tag question'], 'Câu hỏi tu từ.'],
      ['mc', 'Câu nào là ý kiến, không phải sự thật?', 'It seems that the policy has failed.', ['The policy was introduced in 2020.', 'Unemployment fell to 3%.', 'The survey had 2,000 respondents.'], 'It seems = ý kiến.'],
      ['mc', 'biased nghĩa là?', 'thiên lệch', ['khách quan', 'chi tiết', 'chính xác'], 'biased.'],
      ['hear', "Fewer than half of the respondents could calculate simple interest – a finding that raises serious questions about financial education.", 'Chưa đến nửa tính được lãi đơn – đặt câu hỏi về giáo dục tài chính.', ['Hơn một nửa tính đúng.', 'Giáo dục tài chính rất hiệu quả.', 'Không có khảo sát.'], 'raises serious questions.'],
      ['order', 'Sắp xếp: “Lập trường tác giả là gì?”', ['What', 'is', "the author's", 'stance?'], "What is the author's stance?"]
    ],
    noi: [["*Alarmingly*, → fewer than *half* could calculate *simple* *interest*. ↘", 'Đáng báo động là chưa đến nửa tính được lãi đơn.'], ['This *raises* *serious* *questions* → about financial *education*. ↘', 'Điều này đặt câu hỏi nghiêm túc về giáo dục tài chính.'], ["The writer's *stance* is *sceptical*. ↘", 'Lập trường của tác giả là hoài nghi.']],
    hoithoai: {
      ctx: 'Em cùng đồng nghiệp phân tích một bài bình luận kinh tế tiếng Anh trước khi trích dẫn vào báo cáo.', vai: 'Đồng nghiệp hỏi, em phân tích.', ai: '🧑‍💻 Analyst',
      luot: [
        T(["What's the writer's main argument?", '', 'Luận điểm chính của tác giả là gì?'], ['The writer argues that current financial education is failing, based on survey data about basic interest calculations.', 'Tác giả cho rằng giáo dục tài chính hiện nay thất bại, dựa trên dữ liệu khảo sát về tính lãi cơ bản.', 'Luận điểm + căn cứ.'], ['It is about money.', 'Quá chung.'], ['The writer likes banks.', 'Suy diễn sai.']),
        T(['Is the article objective?', '', 'Bài có khách quan không?'], ["Largely, but words like 'alarmingly' and the rhetorical question at the end suggest the writer wants to persuade, not just inform.", 'Phần lớn, nhưng từ "alarmingly" và câu hỏi tu từ cuối bài cho thấy tác giả muốn thuyết phục chứ không chỉ thông tin.', 'Nhận diện kỹ thuật thuyết phục.'], ['Yes, 100% objective.', 'Bỏ qua tín hiệu.'], ['No, it is fake.', 'Kết luận vội.']),
        T(['Can we quote the survey figure in our report?', '', 'Có thể trích số liệu khảo sát vào báo cáo không?'], ["Only if we check the original survey first – the article doesn't name the source, which makes the figure somewhat dubious.", 'Chỉ khi kiểm tra khảo sát gốc trước – bài không nêu nguồn nên con số hơi đáng ngờ.', 'Tư duy kiểm chứng nguồn.'], ['Yes, just copy it.', 'Thiếu kiểm chứng.'], ['Never quote anything.', 'Cực đoan.'])
      ], ket: 'Em đã đọc phân tích bài học thuật với tư duy phản biện.'
    },
    tom: ['Luận điểm, thái độ, suy luận', 'Sự thật vs ý kiến', 'Kỹ thuật thuyết phục'], nguphap: 'Trạng từ đánh giá; imply / infer', phatam: '—',
    loi: ['Nhầm ý kiến tác giả là sự thật', 'Trích số liệu không kiểm nguồn'], btvn: ['Đọc 1 bài bình luận The Economist/FT, phân tích 5 điểm theo bảng', 'Viết tóm tắt 120 từ có nêu lập trường tác giả', 'Làm Reading "IELTS mini 2"']
  };

  /* ================= NGÀY 25 ================= */
  const d25 = {
    n: 25, ten: P[24].ten, kinds: K,
    muc: 'Nghe hiểu nhiều giọng (Mỹ, Anh, Úc, Ấn, Singapore), tốc độ tự nhiên, nối âm và nuốt âm; luyện nghe chủ động.',
    hoc: `${tbl(['Giọng', 'Đặc điểm dễ nhận ra'], [['Mỹ (General American)', 'phát âm rõ r cuối: car /kɑːr/; t giữa từ thành gần "đ": water'], ['Anh (RP / London)', 'không phát âm r cuối: car /kɑː/; t bật rõ hoặc nuốt (glottal stop)'], ['Úc', 'nguyên âm "ay" nghe như "ai": today → "to-die"; ngữ điệu hay lên cuối câu'], ['Ấn Độ', 't, d đọc bằng đầu lưỡi cong; nhịp đều từng âm tiết'], ['Singapore', 'nhịp nhanh, câu ngắn, có "lah", "can"']])}
      ${tip('🎧 Phương pháp <b>shadowing</b>: nghe 1 câu → dừng → nói đuổi theo đúng nhịp, ngữ điệu. 10 phút/ngày cải thiện cả nghe lẫn nói.')}`,
    vocab: [
      w('accent', '/ˈæksent/', 'giọng (vùng miền)', '', ['She has a strong Australian accent.', '', 'Cô ấy có giọng Úc rõ.']),
      w('shadowing', '/ˈʃædoʊɪŋ/', 'nói đuổi theo', '', ['Shadowing improves fluency.', '', 'Nói đuổi cải thiện độ trôi chảy.']),
      w('connected speech', '/kəˈnektɪd spiːtʃ/', 'lời nói nối liền', '', ['Connected speech makes listening harder.', '', 'Lời nói nối liền khiến nghe khó hơn.']),
      w('glottal stop', '/ˈɡlɑːtl stɑːp/', 'âm tắc thanh hầu', '', ['Londoners often use a glottal stop.', '', 'Người London hay dùng âm tắc thanh hầu.']),
      w('intelligible', '/ɪnˈtelɪdʒəbl/', 'dễ hiểu', '', ['Your English is perfectly intelligible.', '', 'Tiếng Anh của bạn hoàn toàn dễ hiểu.']),
      w('native-like', '/ˈneɪtɪv laɪk/', 'giống người bản xứ', '', ["You don't need a native-like accent.", '', 'Không cần giọng như người bản xứ.']),
      w('pick up on', '/pɪk ʌp ɑːn/', 'nhận ra, bắt được', '', ['Did you pick up on her tone?', '', 'Bạn có nhận ra giọng điệu cô ấy không?']),
      w('gist', '/dʒɪst/', 'ý chính', '', ['I got the gist of the talk.', '', 'Tôi nắm được ý chính bài nói.']),
      w('mumble', '/ˈmʌmbl/', 'nói lầm bầm', '', ["Please don't mumble.", '', 'Đừng nói lầm bầm.']),
      w('get used to accents', '/ɡet juːst tə ˈæksents/', 'quen với các giọng', '', ['It takes time to get used to accents.', '', 'Cần thời gian để quen các giọng.'])
    ],
    qs: [
      ['hear', "We'll need to get the report finished by the end of the day, I'm afraid.", 'Cần xong báo cáo trước cuối ngày.', ['Báo cáo đã xong.', 'Báo cáo hoãn sang mai.', 'Không cần báo cáo.'], 'Nghe tốc độ tự nhiên.'],
      ['hear', "Whaddya reckon about the new system? I reckon it's a bit dodgy, to be honest.", 'Người nói nghi ngờ hệ thống mới.', ['Người nói rất thích hệ thống.', 'Người nói chưa thấy hệ thống.', 'Người nói đã sửa hệ thống.'], 'reckon / dodgy (khẩu ngữ Anh – Úc).'],
      ['mc', 'Mục tiêu phát âm thực tế cho người học C1?', 'Dễ hiểu (intelligible), rõ ràng, tự nhiên', ['Giống hệt người bản xứ', 'Chỉ giọng Anh chuẩn', 'Nói thật nhanh'], 'intelligible.'],
      ['mc', 'Phương pháp nói đuổi theo băng là?', 'shadowing', ['dictation', 'skimming', 'mumbling'], 'shadowing.'],
      ['mc', 'Giọng Anh (RP) đọc "car" thế nào?', 'không phát âm r cuối /kɑː/', ['phát âm r cuối rõ /kɑːr/', 'đọc "ca-rờ"', 'đọc "kia"'], 'non-rhotic.'],
      ['mc', 'gist nghĩa là?', 'ý chính', ['chi tiết nhỏ', 'giọng nói', 'lời khen'], 'gist.'],
      ['mc', '"I reckon" (Anh – Úc) nghĩa là?', 'tôi nghĩ là', ['tôi đếm', 'tôi nhớ', 'tôi từ chối'], 'reckon = think.']
    ],
    noi: [["We'll need to get the *report* *finished* → by the *end* of the *day*. ↘", 'Cần xong báo cáo trước cuối ngày.'], ['I got the *gist*, → but could you *repeat* the *figures*? ↗', 'Tôi nắm ý chính, nhưng nhắc lại số liệu được không?'], ['Your English is *perfectly* *intelligible*. ↘', 'Tiếng Anh của bạn hoàn toàn dễ hiểu.']],
    hoithoai: {
      ctx: 'Cuộc gọi với đối tác Úc nói nhanh, nhiều khẩu ngữ. Tắt "Hiện nghĩa tiếng Việt".', vai: 'Đối tác nói, em hiểu và phản hồi.', ai: '🇦🇺 Aussie partner',
      luot: [
        T(["G'day! Reckon we can get the contract sorted by arvo?", '', 'Chào! Anh nghĩ xong hợp đồng trước chiều nay được không?'], ["Hi! I think so – I'll send the final version by 3 this afternoon.", 'Chào! Tôi nghĩ được – tôi gửi bản cuối trước 3 giờ chiều nay.', 'Hiểu "arvo" = afternoon.'], ['Sorry, what is arvo? A city?', 'Hiểu sai (nên hỏi lịch sự hơn).'], ['Yes, tomorrow morning.', 'Nghe nhầm thời gian.']),
        T(["Too easy. Oh, and the pricing table looked a bit dodgy – mind double-checking it?", '', 'Ổn. À, bảng giá trông hơi đáng ngờ – kiểm tra lại giúp nhé?'], ["Sure, I'll double-check the figures and get back to you.", 'Được, tôi sẽ kiểm tra lại số liệu và phản hồi.', 'Hiểu "dodgy" = có vấn đề.'], ['Thanks, the table is perfect.', 'Hiểu ngược.'], ["What's 'too easy'? Is it hard?", 'Hiểu nhầm (too easy = no problem).']),
        T(["Legend. Catch you later!", '', 'Tuyệt. Nói chuyện sau nhé!'], ['Thanks, talk to you later!', 'Cảm ơn, nói chuyện sau!', 'Đáp tự nhiên.'], ['Who is legend?', 'Hiểu nhầm.'], ['Please catch me.', 'Hiểu theo nghĩa đen.'])
      ], ket: 'Em đã nghe hiểu khẩu ngữ và giọng Úc trong công việc.'
    },
    tom: ['5 giọng tiếng Anh phổ biến', 'Nối âm, nuốt âm', 'Shadowing'], nguphap: 'Khẩu ngữ: reckon, arvo, dodgy, too easy', phatam: 'Mục tiêu dễ hiểu, không cần giống bản xứ',
    loi: ['Hoảng khi nghe giọng lạ', 'Hiểu thành ngữ theo nghĩa đen'], btvn: ['Shadowing 10 phút/ngày với 1 video tiếng Anh', 'Nghe 1 podcast Úc hoặc Anh, ghi 5 khẩu ngữ', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 26 ================= */
  const d26 = {
    n: 26, ten: P[25].ten, kinds: K,
    muc: 'Dùng ngữ điệu để thể hiện thái độ: nhấn tương phản, ngạc nhiên, lịch sự, hoài nghi; ngắt nhịp và tốc độ khi thuyết trình.',
    hoc: `${tbl(['Kỹ thuật', 'Ví dụ', 'Tác dụng'], [['Nhấn tương phản', "I didn't say *he* took it. (someone else did)", 'đổi nghĩa câu'], ['Ngữ điệu lên – xuống (fall-rise)', "Well… ↘↗ it's *possible*.", 'ngập ngừng, chưa đồng ý hẳn'], ['Ngạc nhiên', "*Really*? ↗ / You *did*? ↗", 'bất ngờ'], ['Lịch sự', 'Could you *possibly* help me? ↗', 'mềm mỏng'], ['Ngắt nhịp (pause)', 'This year → we *doubled* → our *profit*. ↘', 'nhấn mạnh, tạo kịch tính']])}
      ${tip('🎭 Cùng một câu "That\'s great" có thể là khen thật (↘ hào hứng) hoặc mỉa mai (giọng đều, kéo dài). Người nghe C1 cần bắt được thái độ này.')}<p class="small">🎤 Luyện thêm: <a href="#/tieng-anh/luyen-noi/nhan-cau">Nhấn câu</a> · <a href="#/tieng-anh/luyen-noi/ngu-dieu">Ngữ điệu</a> · <a href="#/tieng-anh/luyen-noi/nhom-y">Ngắt nhóm ý</a></p>`,
    vocab: [
      w('contrastive stress', '/kənˈtræstɪv stres/', 'nhấn tương phản', '', ['Contrastive stress changes the meaning.', '', 'Nhấn tương phản thay đổi nghĩa.']),
      w('fall-rise', '/fɔːl raɪz/', 'xuống rồi lên (ngữ điệu)', '', ['A fall-rise shows hesitation.', '', 'Ngữ điệu xuống-lên thể hiện ngập ngừng.']),
      w('sarcasm', '/ˈsɑːrkæzəm/', 'sự mỉa mai', '', ['Her tone was full of sarcasm.', '', 'Giọng cô ấy đầy mỉa mai.']),
      w('pause', '/pɔːz/', 'ngắt, dừng', '', ['Pause before the key number.', '', 'Dừng trước con số quan trọng.']),
      w('pace', '/peɪs/', 'tốc độ (nói)', '', ['Vary your pace.', '', 'Thay đổi tốc độ nói.']),
      w('emphasise', '/ˈemfəsaɪz/', 'nhấn mạnh', '', ['Emphasise the key word.', '', 'Nhấn mạnh từ khoá.']),
      w('monotone', '/ˈmɑːnətoʊn/', 'giọng đều đều', '', ['Avoid speaking in a monotone.', '', 'Tránh nói giọng đều đều.']),
      w('expressive', '/ɪkˈspresɪv/', 'biểu cảm', '', ['She is a very expressive speaker.', '', 'Cô ấy nói rất biểu cảm.']),
      w('attitude', '/ˈætɪtuːd/', 'thái độ', '', ['Intonation shows your attitude.', '', 'Ngữ điệu thể hiện thái độ.']),
      w('projection', '/prəˈdʒekʃn/', 'độ vang (giọng)', '', ['Good voice projection fills the room.', '', 'Giọng vang tốt lấp đầy căn phòng.'])
    ],
    qs: [
      ['mc', '"I didn\'t say HE took it." (nhấn HE) nghĩa là?', 'Người khác lấy, không phải anh ấy', ['Tôi không nói gì cả', 'Anh ấy không lấy gì', 'Tôi đã nói anh ấy lấy'], 'Nhấn tương phản.'],
      ['mc', '"Well… it\'s possible." với ngữ điệu xuống-lên thể hiện?', 'ngập ngừng, chưa đồng ý hẳn', ['đồng ý hoàn toàn', 'tức giận', 'vui mừng'], 'fall-rise.'],
      ['mc', 'Trước con số quan trọng khi thuyết trình, nên?', 'dừng một nhịp', ['nói nhanh hơn', 'hạ giọng xuống thấp', 'bỏ qua'], 'pause.'],
      ['mc', 'Giọng đều đều, không lên xuống là?', 'monotone', ['expressive', 'projection', 'sarcasm'], 'monotone.'],
      ['mc', 'sarcasm nghĩa là?', 'sự mỉa mai', ['sự chân thành', 'sự ngạc nhiên', 'sự lịch sự'], 'sarcasm.'],
      ['hear', "This year… we doubled… our profit.", 'Năm nay lợi nhuận tăng gấp đôi (ngắt nhịp nhấn mạnh).', ['Lợi nhuận giảm một nửa.', 'Năm sau tăng gấp đôi.', 'Không đổi.'], 'Pause tạo nhấn.'],
      ['order', 'Sắp xếp: “Tránh nói giọng đều đều.”', ['Avoid', 'speaking', 'in a', 'monotone.'], 'Avoid speaking in a monotone.']
    ],
    noi: [["I didn't say *he* took it. ↘", 'Tôi đâu có nói anh ấy lấy (người khác lấy).'], ['*This* *year*… → we *doubled*… → our *profit*. ↘', 'Năm nay… chúng ta tăng gấp đôi… lợi nhuận.'], ['*Really*? ↗ You *finished* it *already*? ↗', 'Thật à? Bạn xong rồi sao?'], ['Could you *possibly* help me with this? ↗', 'Bạn có thể giúp tôi việc này được không?']],
    hoithoai: {
      ctx: 'Huấn luyện viên thuyết trình giúp em luyện ngữ điệu trước buổi phát biểu cuối năm.', vai: 'Huấn luyện viên góp ý, em điều chỉnh.', ai: '🎭 Speech coach',
      luot: [
        T(["You said 'we doubled our profit' very fast and flat. How can you make it powerful?", '', 'Em nói câu "tăng gấp đôi lợi nhuận" quá nhanh và đều. Làm sao cho mạnh?'], ["I'll pause before 'doubled', stress it, and slow down: 'This year… we doubled… our profit.'", 'Tôi sẽ ngắt trước "doubled", nhấn nó và nói chậm lại.', 'Pause + stress + pace.'], ["I'll say it louder and faster.", 'Không hiệu quả.'], ["I'll skip that sentence.", 'Bỏ ý quan trọng.']),
        T(["Someone asks 'Was it the sales team?' but it was IT. How do you answer with stress?", '', 'Có người hỏi "Có phải đội bán hàng?" nhưng thực ra là IT. Trả lời với nhấn âm thế nào?'], ["Actually, it was the *IT* team.", 'Thực ra, là đội IT.', 'Nhấn tương phản.'], ['Actually, it was the IT team. (giọng đều)', 'Thiếu nhấn.'], ['No.', 'Cụt.']),
        T(["Last one: show polite hesitation when the CEO proposes an unrealistic deadline.", '', 'Cuối: thể hiện ngập ngừng lịch sự khi CEO đề xuất hạn không thực tế.'], ["Well… ↘↗ it's possible, but it would be quite a stretch.", 'Ừm… có thể, nhưng sẽ khá căng.', 'Fall-rise + nói giảm.'], ['Impossible!', 'Quá thẳng.'], ['Yes, sure! (vui vẻ)', 'Không trung thực.'])
      ], ket: 'Em đã dùng ngữ điệu để thể hiện thái độ và nhấn mạnh.'
    },
    tom: ['Nhấn tương phản', 'Fall-rise, ngạc nhiên, lịch sự', 'Pause, pace, projection'], nguphap: '—', phatam: 'Thực hành tất cả câu mẫu với 🎤 và ghi âm',
    loi: ['Giọng đều đều', 'Nói quá nhanh ở ý quan trọng'], btvn: ['Ghi âm 1 câu với 4 cách nhấn khác nhau, giải thích nghĩa', 'Luyện 3 bài Phát âm & ngữ điệu nâng cao', 'Luyện 🎤 4 câu']
  };

  /* ================= NGÀY 27 ================= */
  const d27 = {
    n: 27, ten: P[26].ten, kinds: K,
    muc: 'Nhận ra lỗi lập luận (ngụy biện) phổ biến, đánh giá bằng chứng, đặt câu hỏi phản biện lịch sự.',
    hoc: `${tbl(['Ngụy biện', 'Ví dụ', 'Câu phản biện'], [['Khái quát vội (hasty generalisation)', 'Two customers complained, so everyone hates the app.', 'Two complaints may not be representative. How many users are satisfied?'], ['Tương quan ≠ nhân quả', 'Sales rose after we changed the logo, so the logo caused it.', 'Could other factors explain the rise, such as the holiday season?'], ['Hai lựa chọn giả (false dilemma)', 'Either we cut staff or we go bankrupt.', 'Are there really only two options?'], ['Công kích cá nhân (ad hominem)', "He's too young to understand finance.", "Let's focus on the argument rather than the person."], ['Dốc trơn (slippery slope)', 'If we allow remote work, no one will come to the office.', "Is there evidence that one step will lead to the other?"]])}`,
    vocab: [
      w('fallacy', '/ˈfæləsi/', 'ngụy biện', '', ["That's a logical fallacy.", '', 'Đó là ngụy biện logic.']),
      w('correlation', '/ˌkɔːrəˈleɪʃn/', 'tương quan', '', ['Correlation does not imply causation.', '', 'Tương quan không có nghĩa là nhân quả.']),
      w('causation', '/kɔːˈzeɪʃn/', 'quan hệ nhân quả', '', ['There is no proof of causation.', '', 'Không có bằng chứng nhân quả.']),
      w('representative', '/ˌreprɪˈzentətɪv/', 'mang tính đại diện', '', ['Is the sample representative?', '', 'Mẫu có đại diện không?']),
      w('assumption', '/əˈsʌmpʃn/', 'giả định', '', ["Let's question that assumption.", '', 'Hãy chất vấn giả định đó.']),
      w('evidence-based', '/ˈevɪdəns beɪst/', 'dựa trên bằng chứng', '', ['We need evidence-based decisions.', '', 'Cần quyết định dựa trên bằng chứng.']),
      w('false dilemma', '/fɔːls dɪˈlemə/', 'lựa chọn giả (chỉ hai)', '', ["That's a false dilemma.", '', 'Đó là lựa chọn giả.']),
      w('critical thinking', '/ˈkrɪtɪkl ˈθɪŋkɪŋ/', 'tư duy phản biện', '', ['Critical thinking is essential.', '', 'Tư duy phản biện là thiết yếu.']),
      w('sample size', '/ˈsæmpl saɪz/', 'cỡ mẫu', '', ['The sample size is too small.', '', 'Cỡ mẫu quá nhỏ.']),
      w('confounding factor', '/kənˈfaʊndɪŋ ˈfæktər/', 'yếu tố gây nhiễu', '', ['Weather may be a confounding factor.', '', 'Thời tiết có thể là yếu tố gây nhiễu.'])
    ],
    qs: [
      ['mc', '"Sales rose after the new logo, so the logo caused it." Lỗi?', 'nhầm tương quan với nhân quả', ['khái quát vội', 'công kích cá nhân', 'dốc trơn'], 'Correlation ≠ causation.'],
      ['mc', '"Either we cut staff or we go bankrupt." Lỗi?', 'lựa chọn giả', ['nhân quả', 'công kích cá nhân', 'không có lỗi'], 'False dilemma.'],
      ['mc', '"He\'s too young to understand finance." Lỗi?', 'công kích cá nhân', ['khái quát vội', 'dốc trơn', 'lựa chọn giả'], 'Ad hominem.'],
      ['mc', 'Câu phản biện lịch sự?', 'Could other factors explain the rise, such as the holiday season?', ["You're wrong and illogical.", 'That is stupid reasoning.', 'Nobody believes that.'], 'Câu hỏi mở.'],
      ['mc', 'sample size nghĩa là?', 'cỡ mẫu', ['kích thước sản phẩm', 'mẫu thử miễn phí', 'cỡ áo'], 'sample size.'],
      ['hear', "Two customers complained on Facebook, so clearly everyone hates the new app.", 'Khái quát vội từ hai phàn nàn.', ['Lập luận chặt chẽ.', 'Mọi khách đều hài lòng.', 'Không có phàn nàn.'], 'Hasty generalisation.'],
      ['order', 'Sắp xếp: “Tương quan không có nghĩa là nhân quả.”', ['Correlation', 'does not imply', 'causation.'], 'Correlation does not imply causation.']
    ],
    noi: [["*Correlation* doesn't *imply* *causation*. ↘", 'Tương quan không có nghĩa là nhân quả.'], ['Could *other* *factors* explain the *rise*? ↗', 'Có yếu tố khác giải thích mức tăng không?'], ["Let's focus on the *argument* → rather than the *person*. ↘", 'Hãy tập trung vào lập luận thay vì con người.']],
    hoithoai: {
      ctx: 'Họp đánh giá chiến dịch marketing; một quản lý đưa ra lập luận có lỗi.', vai: 'Quản lý lập luận, em phản biện lịch sự.', ai: '📣 Marketing manager',
      luot: [
        T(["Sales went up 20% after we launched the TikTok videos, so TikTok clearly works.", '', 'Doanh số tăng 20% sau khi ra video TikTok, rõ ràng TikTok hiệu quả.'], ["That's encouraging. But could other factors explain it? The campaign started just before Tet, when sales usually rise.", 'Đáng khích lệ. Nhưng có yếu tố khác không? Chiến dịch bắt đầu ngay trước Tết, lúc doanh số thường tăng.', 'Chỉ ra yếu tố gây nhiễu.'], ['You are wrong.', 'Không lập luận.'], ['Great, TikTok is everything.', 'Chấp nhận thiếu phản biện.']),
        T(["Well, we either invest more in TikTok or we lose young customers.", '', 'Hoặc đầu tư thêm TikTok hoặc mất khách trẻ.'], ["I'm not sure those are the only two options. We could also test other channels and compare results.", 'Tôi không chắc chỉ có hai lựa chọn. Ta có thể thử kênh khác và so sánh kết quả.', 'Chỉ ra lựa chọn giả.'], ['OK, invest everything.', 'Thiếu phản biện.'], ['Neither, stop marketing.', 'Cực đoan.']),
        T(["So what do you suggest?", '', 'Vậy bạn đề xuất gì?'], ["Let's run an A/B test for six weeks with a large enough sample size, so our decision is evidence-based.", 'Chạy thử A/B 6 tuần với cỡ mẫu đủ lớn để quyết định dựa trên bằng chứng.', 'Đề xuất khoa học.'], ['Ask my friends.', 'Không đại diện.'], ['Trust your feelings.', 'Không dựa bằng chứng.'])
      ], ket: 'Em đã phản biện lịch sự và đề xuất cách tiếp cận dựa trên bằng chứng.'
    },
    tom: ['5 ngụy biện phổ biến', 'Tương quan ≠ nhân quả', 'Câu hỏi phản biện lịch sự'], nguphap: 'Câu hỏi mở: Could…? Are there…? Is there evidence…?', phatam: 'Ngữ điệu hỏi mềm, không gay gắt',
    loi: ['Phản biện bằng công kích', 'Chấp nhận số liệu thiếu căn cứ'], btvn: ['Tìm 3 ngụy biện trong quảng cáo/bài báo, viết câu phản biện', 'Viết đoạn 150 từ đánh giá một lập luận', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 28 ================= */
  const d28 = {
    n: 28, ten: P[27].ten, tong: 1, kt: { n: 20, min: 20 }, kinds: ['listen', 'listenWord', 'listen', 'meaning', 'write'],
    muc: 'Nghe và đọc nhiều nguồn, tóm tắt và tổng hợp (synthesis): tìm điểm chung, điểm khác, đưa ra kết luận của mình.',
    hoc: `${tbl(['Bước', 'Câu mẫu'], [['Nêu chủ đề chung', 'Both sources address the impact of AI on banking jobs.'], ['Điểm đồng thuận', 'They agree that routine roles are most at risk.'], ['Điểm khác biệt', 'However, while Source A predicts large job losses, Source B emphasises new roles being created.'], ['Đánh giá', 'Source B appears more convincing, as it draws on data from 40 banks.'], ['Kết luận riêng', 'Taken together, the evidence suggests that reskilling, rather than replacement, is the key issue.']])}
      ${tip('🧩 Tổng hợp ≠ tóm tắt từng nguồn riêng lẻ. Hãy tổ chức theo <b>ý</b>, không theo <b>nguồn</b>.')}`,
    vocab: [
      w('synthesise', '/ˈsɪnθəsaɪz/', 'tổng hợp', '', ['Synthesise information from several sources.', '', 'Tổng hợp thông tin từ nhiều nguồn.']),
      w('address', '/əˈdres/', 'đề cập, giải quyết', '', ['Both articles address the same issue.', '', 'Cả hai bài đề cập cùng vấn đề.']),
      w('draw on', '/drɔː ɑːn/', 'dựa vào', '', ['The report draws on data from 40 banks.', '', 'Báo cáo dựa vào dữ liệu 40 ngân hàng.']),
      w('taken together', '/ˈteɪkən təˈɡeðər/', 'xét tổng thể', '', ['Taken together, the results are positive.', '', 'Xét tổng thể, kết quả tích cực.']),
      w('reskilling', '/ˌriːˈskɪlɪŋ/', 'đào tạo lại kỹ năng', '', ['Reskilling is essential.', '', 'Đào tạo lại kỹ năng là thiết yếu.']),
      w('converge', '/kənˈvɜːrdʒ/', 'hội tụ, thống nhất', '', ['The two views converge on one point.', '', 'Hai quan điểm thống nhất ở một điểm.']),
      w('diverge', '/daɪˈvɜːrdʒ/', 'khác biệt, rẽ hướng', '', ['Their conclusions diverge.', '', 'Kết luận của họ khác nhau.']),
      w('at risk', '/æt rɪsk/', 'có nguy cơ', '', ['Routine jobs are most at risk.', '', 'Công việc lặp lại có nguy cơ cao nhất.']),
      w('underscore', '/ˌʌndərˈskɔːr/', 'nhấn mạnh, làm nổi rõ', '', ['The author underscores new opportunities.', '', 'Tác giả nhấn mạnh cơ hội mới.']),
      w('overview', '/ˈoʊvərvjuː/', 'tổng quan', '', ['Give a brief overview first.', '', 'Nêu tổng quan ngắn trước.'])
    ],
    qs: [
      ['hear', "Source A predicts that thirty percent of banking jobs will disappear by 2030.", 'Nguồn A dự báo 30% việc làm ngân hàng biến mất trước 2030.', ['13% trước 2030.', '30% được tạo mới.', '30% trước 2013.'], 'thirty percent / 2030.'],
      ['hear', "Source B, which draws on data from forty banks, argues that new roles in data and cybersecurity will offset most losses.", 'Nguồn B (dữ liệu 40 ngân hàng): vai trò mới bù đắp phần lớn.', ['Nguồn B: mất việc nhiều hơn.', 'Nguồn B: 14 ngân hàng.', 'Nguồn B không có dữ liệu.'], 'offset most losses.'],
      ['hear', "Both sources agree that routine back-office roles are most at risk.", 'Cả hai đồng ý: việc hậu cần lặp lại có nguy cơ nhất.', ['Hai nguồn trái ngược hoàn toàn.', 'Giao dịch viên an toàn nhất.', 'Không ai có nguy cơ.'], 'converge.'],
      ['hear', "Taken together, the evidence suggests that reskilling, rather than replacement, is the real challenge.", 'Thách thức thật là đào tạo lại, không phải thay thế.', ['Thách thức là thay thế toàn bộ.', 'Không có thách thức.', 'Nên sa thải nhiều hơn.'], 'Taken together.'],
      ['mc', 'Tổng hợp tốt nên tổ chức theo?', 'ý (chủ đề)', ['thứ tự nguồn', 'độ dài nguồn', 'năm xuất bản'], 'By idea.'],
      ['mc', '"Their conclusions diverge" nghĩa là?', 'kết luận khác nhau', ['kết luận giống nhau', 'không có kết luận', 'kết luận sai'], 'diverge.'],
      ['mc', 'reskilling nghĩa là?', 'đào tạo lại kỹ năng', ['tuyển dụng mới', 'cắt giảm nhân sự', 'trả lương lại'], 'reskilling.']
    ],
    noi: [['*Both* sources *agree* → that routine roles are most at *risk*. ↘', 'Cả hai nguồn đồng ý việc lặp lại có nguy cơ nhất.'], ['*However*, → their *conclusions* *diverge*. ↘', 'Tuy nhiên, kết luận của họ khác nhau.'], ['*Taken* *together*, → reskilling is the *key* *issue*. ↘', 'Xét tổng thể, đào tạo lại là vấn đề then chốt.']],
    hoithoai: {
      ctx: 'Em vừa đọc hai báo cáo về AI và việc làm ngân hàng; giám đốc nhân sự hỏi em tổng hợp. Tắt "Hiện nghĩa tiếng Việt".', vai: 'Giám đốc hỏi, em tổng hợp.', ai: '👩‍💼 HR Director',
      luot: [
        T(["Give me the big picture. What do both reports say?", '', 'Cho tôi bức tranh tổng thể. Hai báo cáo nói gì?'], ['Both reports address the impact of AI on banking jobs, and they agree that routine back-office roles are most at risk.', 'Cả hai đề cập tác động của AI lên việc làm ngân hàng và đồng ý việc hậu cần lặp lại có nguy cơ nhất.', 'Chủ đề + điểm chung.'], ['Report A says…, then report B says…', 'Tóm tắt từng nguồn, chưa tổng hợp.'], ['AI is coming.', 'Quá chung.']),
        T(["Where do they differ?", '', 'Khác nhau ở đâu?'], ['Their conclusions diverge: one predicts 30% job losses, whereas the other argues new data and security roles will offset most of them.', 'Kết luận khác: một bên dự báo mất 30% việc, bên kia cho rằng vai trò dữ liệu và bảo mật mới sẽ bù phần lớn.', 'Điểm khác + số liệu.'], ['They are the same.', 'Sai.'], ['One is long, one is short.', 'Không liên quan.']),
        T(["So what should HR do?", '', 'Vậy nhân sự nên làm gì?'], ['Taken together, the evidence suggests we should invest in reskilling programmes now, rather than wait for redundancies.', 'Xét tổng thể, bằng chứng cho thấy nên đầu tư đào tạo lại ngay thay vì chờ cắt giảm.', 'Kết luận + đề xuất.'], ['Fire everyone.', 'Cực đoan.'], ['Do nothing.', 'Thiếu hành động.'])
      ], ket: 'Em đã tổng hợp hai nguồn và đưa ra khuyến nghị.'
    },
    tom: ['Chủ đề – điểm chung – điểm khác – đánh giá – kết luận', 'Tổ chức theo ý'], nguphap: 'Both… agree / whereas / Taken together…', phatam: 'Nhấn từ báo hiệu: Both, However, Taken together',
    loi: ['Tóm tắt từng nguồn riêng rẽ', 'Thiếu kết luận riêng'], btvn: ['Đọc 2 bài về cùng chủ đề, viết bài tổng hợp 200 từ', 'Nói tổng hợp 2 phút, ghi âm', 'Làm đề "IELTS mini 2" phần nghe']
  };

  /* ================= NGÀY 29 ================= */
  const d29 = {
    n: 29, ten: P[28].ten, vocab: [], tong: 1, kt: { n: 30, min: 30 }, kinds: K,
    muc: 'Làm đề mô phỏng C1 30 câu tổng hợp ngữ pháp, từ vựng, nghe, đọc; hoàn thiện kế hoạch thi IELTS 7+ / TOEIC 945+.',
    hoc: `<h4>Kế hoạch chinh phục IELTS 7+</h4>${tbl(['Kỹ năng', 'Trọng tâm 4 tuần cuối'], [['Listening', 'Section 3–4 (học thuật), giọng Anh – Úc, bẫy thông tin bị sửa'], ['Reading', 'Matching headings, T/F/NG với từ hạn chế, quản lý 20 phút/bài'], ['Writing', 'Task 2: phát triển ý sâu, ví dụ cụ thể; Task 1: tổng quan sắc nét'], ['Speaking', 'Part 3: A-R-E-A, câu đệm tự nhiên, ngữ điệu biểu cảm']])}
      ${tip('🏅 Làm lần lượt "IELTS mini 1", "IELTS mini 2" trong Luyện đề sau bài này. Điểm quy đổi chỉ tham khảo; đăng ký thi thử tại trung tâm được cấp phép để biết điểm chính xác.')}`,
    qs: [['mc', 'Seldom ___ such a thorough report.', 'have I read', ['I have read', 'I read', 'read I have'], 'Đảo ngữ.'], ['mc', 'It is imperative that the data ___ encrypted.', 'be', ['is', 'are', 'was'], 'Giả định.'], ['mc', 'Rising inflation ___ a threat to savers.', 'poses', ['makes', 'does', 'puts'], 'pose a threat.']],
    noi: [['*Rarely* have I seen → such a *compelling* *argument*. ↘', 'Hiếm khi thấy lập luận thuyết phục như vậy.'], ['*Taken* *together*, → the *evidence* is *clear*. ↘', 'Xét tổng thể, bằng chứng rõ ràng.']],
    hoithoai: {
      ctx: 'Mô phỏng phỏng vấn vị trí giám đốc khu vực tại một ngân hàng quốc tế (tiếng Anh C1).', vai: 'Hội đồng hỏi khó, em trả lời ở trình độ C1.', ai: '👔 Executive panel',
      luot: [
        T(["Tell us about a time you led a major change.", '', 'Kể về lần bạn dẫn dắt một thay đổi lớn.'], ["Not only did we migrate 40 branches to a new core system, but we also did so without a single day of downtime – largely because we invested heavily in training.", 'Chúng tôi không chỉ chuyển 40 chi nhánh sang hệ thống lõi mới mà còn không có ngày ngừng nào – phần lớn nhờ đầu tư mạnh vào đào tạo.', 'Đảo ngữ + do so + rào đón.'], ['We changed a system, it was OK.', 'Quá đơn giản.'], ['I did everything myself.', 'Thiếu tinh thần đội.']),
        T(["What would you do if a regulator questioned your data practices?", '', 'Nếu cơ quan quản lý chất vấn cách quản lý dữ liệu của bạn?'], ["I'd be fully transparent. What matters most is that we demonstrate compliance with evidence, not assurances.", 'Tôi sẽ hoàn toàn minh bạch. Điều quan trọng nhất là chứng minh tuân thủ bằng bằng chứng, không phải lời hứa.', 'Câu chẻ + collocation.'], ['Hide the data.', 'Vi phạm.'], ['Blame IT.', 'Đổ lỗi.']),
        T(["Some say AI will make branch managers redundant. Your view?", '', 'Có người nói AI sẽ khiến giám đốc chi nhánh dư thừa. Quan điểm bạn?'], ["I'd argue that's a false dilemma. AI will arguably automate routine decisions, but the human role in building trust and leading teams is likely to become even more important.", 'Tôi cho đó là lựa chọn giả. AI có thể tự động hoá quyết định thường nhật, nhưng vai trò con người trong xây dựng niềm tin và dẫn dắt đội có lẽ còn quan trọng hơn.', 'Tư duy phản biện + rào đón.'], ['Yes, we will all lose jobs.', 'Khái quát vội.'], ['AI is useless.', 'Cực đoan.']),
        T(["Why should we choose you?", '', 'Vì sao chúng tôi nên chọn bạn?'], ["Because I combine deep technical knowledge with a proven ability to lead people through change – and that, I believe, is exactly what this role requires.", 'Vì tôi kết hợp kiến thức kỹ thuật sâu với năng lực đã được chứng minh trong dẫn dắt con người qua thay đổi – và tôi tin đó chính là điều vị trí này cần.', 'Kết thúc mạnh, có nhấn.'], ["I'm the best.", 'Thiếu căn cứ.'], ['I need a job.', 'Không thuyết phục.'])
      ], ket: '🎉 Em đã vượt qua vòng phỏng vấn mô phỏng cấp lãnh đạo bằng tiếng Anh C1!'
    },
    tom: ['Đề mô phỏng C1 30 câu', 'Kế hoạch IELTS 7+'], nguphap: 'Tổng ôn C1', phatam: 'Phong thái tự tin, ngữ điệu biểu cảm',
    loi: ['Xem lại câu sai, phân nhóm lỗi'], btvn: ['Làm "IELTS mini 1" và "IELTS mini 2"', 'Viết 1 bài Task 2 band 7 và nhờ gia sư AI chấm', 'Ôn thẻ "Từ chưa nhớ"']
  };

  /* ================= NGÀY 30 ================= */
  const d30 = {
    n: 30, ten: P[29].ten, vocab: [], tong: 1, kt: { n: 30, min: 30 }, kinds: K,
    muc: 'Kiểm tra cuối khoá C1, tự đánh giá, và xây dựng thói quen tự học suốt đời để duy trì, tiến tới C2.',
    hoc: `<h4>1. Bài kiểm tra cuối khoá</h4><p><b>30 câu · 30 phút</b> lấy từ toàn bộ 30 ngày C1.</p>
      <h4>2. Mốc C1</h4>${tbl(['Kỹ năng', 'Em làm được'], [['Nghe', 'Hiểu bài giảng, phim, họp đa quốc gia với nhiều giọng, kể cả ý ngầm.'], ['Nói', 'Thuyết trình trước hội đồng, đàm phán cấp cao, dẫn dắt thay đổi, truyền thông khủng hoảng.'], ['Đọc', 'Đọc báo kinh tế, báo cáo chuyên ngành, nhận ra lập trường tác giả.'], ['Viết', 'Bài chuyên ngành, báo cáo, IELTS Task 2 band 7+ với văn phong phù hợp.']])}
      <p>C1 tương đương <b>TOEIC L&R khoảng 945+</b> (mốc tối thiểu ETS gợi ý), <b>IELTS 7.0–8.0</b>, <b>VSTEP bậc 5</b>.</p>
      <h4>3. Tự học suốt đời (để không bị "rơi" trình độ)</h4>${tbl(['Hằng ngày', 'Hằng tuần', 'Hằng tháng'], [['15 phút đọc báo kinh tế, ghi 3 collocation', '1 bài viết chuyên môn hoặc LinkedIn', '1 đề thi thử, so sánh điểm'], ['10 phút shadowing podcast', '1 buổi nói 30 phút (câu lạc bộ, gia sư AI, đồng nghiệp)', 'Ôn lại thẻ từ "chưa nhớ"'], ['Nghĩ bằng tiếng Anh khi lên kế hoạch ngày', 'Xem 1 TED Talk không phụ đề', 'Đặt 1 mục tiêu mới: C2, chứng chỉ chuyên ngành…']])}
      ${tip('🧾 Vào <a href="#/tieng-anh/c5/tien-do">Tiến độ</a> → Sao chép tóm tắt, dán cho gia sư AI để được tư vấn lộ trình C2 riêng.')}`,
    qs: [['mc', 'Only by working together ___ succeed.', 'can we', ['we can', 'we could have', 'can'], 'Only by + đảo.'], ['mc', 'Correlation does not ___ causation.', 'imply', ['infer', 'apply', 'reply'], 'imply.'], ['mc', 'Taken ___, the evidence supports the plan.', 'together', ['totally', 'altogether of', 'with'], 'Taken together.']],
    noi: [["I've *completed* *level* *five*! ↘", 'Tôi đã hoàn thành cấp 5!'], ['*Learning* a language → is a *lifelong* *journey*. ↘', 'Học ngôn ngữ là hành trình suốt đời.']],
    hoithoai: {
      ctx: 'Phần thi nói cuối khoá C1: giám khảo hỏi 4 câu mở.', vai: 'Trả lời ở trình độ C1: chính xác, tự nhiên, sâu sắc.', ai: '👩‍🏫 Examiner',
      luot: [
        T(["How has learning English changed your career?", '', 'Học tiếng Anh thay đổi sự nghiệp bạn thế nào?'], ["Quite remarkably. What it has really given me is access – to international colleagues, to research, and to opportunities I simply wouldn't have had otherwise.", 'Đáng kể. Điều nó thực sự mang lại là khả năng tiếp cận – đồng nghiệp quốc tế, nghiên cứu và những cơ hội mà nếu không tôi đã không có.', 'Câu chẻ + giả định.'], ['It is good for job.', 'Quá đơn giản.'], ['English changed me much.', 'Thiếu sâu.']),
        T(["Is it necessary for everyone to learn English today?", '', 'Ngày nay ai cũng cần học tiếng Anh?'], ["Not necessarily everyone, but for anyone working in finance or technology, I'd argue it's become close to essential – although translation tools may change that to some extent.", 'Không hẳn ai cũng cần, nhưng với người làm tài chính hay công nghệ, tôi cho rằng gần như thiết yếu – dù công cụ dịch có thể thay đổi điều đó phần nào.', 'Rào đón + phản biện.'], ['Yes, everyone must.', 'Tuyệt đối.'], ['No, nobody needs it.', 'Cực đoan.']),
        T(["What advice would you give to someone starting at A1 today?", '', 'Lời khuyên cho người mới bắt đầu từ A1?'], ["Little did I know when I started how much daily habits would matter. So my advice is: fifteen minutes every day beats three hours once a week.", 'Khi bắt đầu tôi hầu như không biết thói quen hằng ngày quan trọng thế nào. Nên lời khuyên của tôi: 15 phút mỗi ngày tốt hơn 3 giờ mỗi tuần.', 'Đảo ngữ Little did + lời khuyên cụ thể.'], ['Study hard.', 'Chung chung.'], ['Just watch movies.', 'Thiếu cân bằng.']),
        T(["What's next for you?", '', 'Tiếp theo của bạn là gì?'], ["By this time next year, I hope I'll have achieved IELTS 8 and I'll be mentoring colleagues who are just starting their own journey.", 'Giờ này năm sau mong đã đạt IELTS 8 và đang hướng dẫn những đồng nghiệp mới bắt đầu hành trình của họ.', 'Tương lai hoàn thành + tiếp diễn. Chúc mừng em hoàn thành trọn lộ trình A1 → C1!'], ['I will stop learning now.', 'Bỏ cuộc.'], ['I hope get IELTS 8.', 'hope to get.'])
      ], ket: '🏆 Chúc mừng em đã hoàn thành trọn lộ trình Tiếng Anh từ A1 đến C1!'
    },
    tom: ['Kiểm tra cuối khoá 30 câu', 'Mốc C1', 'Thói quen tự học suốt đời'], nguphap: 'Tổng ôn C1', phatam: 'Tổng ôn',
    loi: ['Xem lại các câu sai'], btvn: ['Sao chép tóm tắt tiến độ gửi gia sư AI', 'Đăng ký thi thử IELTS/TOEIC tại trung tâm được cấp phép', 'Duy trì kế hoạch tự học hằng ngày – tuần – tháng']
  };

  window.PLT_EN5.days.push(d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30);
})();

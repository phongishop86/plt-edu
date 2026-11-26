/* PLT-Edu · Tiếng Anh – Cấp 4 (B2): Ngày 15–30 */
(function () {
  'use strict';
  const { w, T, tbl, tip, exs, K, say } = window.PLT_EN4.H;
  const P = window.PLT_EN4.plan;

  /* ================= NGÀY 15 ================= */
  const d15 = {
    n: 15, ten: P[14].ten, kinds: K,
    muc: 'Viết báo cáo ngắn và đề xuất (300–400 từ): tiêu đề mục, phát hiện, kết luận, khuyến nghị.',
    hoc: `${tbl(['Mục', 'Nội dung', 'Câu mẫu'], [['Introduction', 'Mục đích báo cáo', 'The aim of this report is to evaluate…'], ['Findings', 'Kết quả khảo sát / dữ liệu', 'The survey revealed that 68% of customers…'], ['Conclusion', 'Đánh giá chung', 'It is clear that the current system is not efficient.'], ['Recommendations', 'Đề xuất hành động', 'It is recommended that the bank (should) invest in…']])}
      ${say('Based on these findings, it is recommended that all branches adopt the new queuing system by the end of the year.', 'Dựa trên các phát hiện, khuyến nghị tất cả chi nhánh áp dụng hệ thống xếp hàng mới trước cuối năm.')}
      ${tip('📄 Báo cáo: dùng tiêu đề mục, gạch đầu dòng, văn phong khách quan (bị động, It is…). Đề xuất (proposal): thuyết phục hơn, nêu lợi ích và chi phí.')}`,
    vocab: [
      w('aim', '/eɪm/', 'mục đích', '', ['The aim of this report is to analyse costs.', '', 'Mục đích báo cáo là phân tích chi phí.']),
      w('findings', '/ˈfaɪndɪŋz/', 'kết quả, phát hiện', '', ['The findings were surprising.', '', 'Kết quả rất bất ngờ.']),
      w('reveal', '/rɪˈviːl/', 'cho thấy, tiết lộ', '', ['The survey revealed a problem.', '', 'Khảo sát cho thấy một vấn đề.']),
      w('recommend', '/ˌrekəˈmend/', 'khuyến nghị', '', ['We recommend upgrading the software.', '', 'Chúng tôi khuyến nghị nâng cấp phần mềm.']),
      w('evaluate', '/ɪˈvæljueɪt/', 'đánh giá', '', ['We need to evaluate the results.', '', 'Cần đánh giá kết quả.']),
      w('respondents', '/rɪˈspɑːndənts/', 'người trả lời khảo sát', '', ['Most respondents were satisfied.', '', 'Phần lớn người được hỏi hài lòng.']),
      w('implement', '/ˈɪmplɪment/', 'triển khai', '', ['The plan will be implemented in May.', '', 'Kế hoạch triển khai tháng 5.']),
      w('cost-effective', '/ˌkɔːst ɪˈfektɪv/', 'hiệu quả chi phí', '', ['It is a cost-effective solution.', '', 'Đó là giải pháp hiệu quả chi phí.']),
      w('adopt', '/əˈdɑːpt/', 'áp dụng', '', ['Many banks have adopted this system.', '', 'Nhiều ngân hàng đã áp dụng hệ thống này.']),
      w('feasible', '/ˈfiːzəbl/', 'khả thi', '', ['Is this plan feasible?', '', 'Kế hoạch này khả thi không?'])
    ],
    qs: [
      ['mc', 'Câu mở đầu báo cáo phù hợp?', 'The aim of this report is to evaluate the new queuing system.', ['Hi, this report is about queues.', 'I want to talk about queues.', 'Queues are bad, I think.'], 'Trang trọng, nêu mục đích.'],
      ['mc', 'It is recommended that the bank ___ more staff.', 'hire', ['hires', 'hired', 'will hire'], 'Giả định → V nguyên mẫu.'],
      ['mc', 'The survey ___ that customers wait too long.', 'revealed', ['revelation', 'revealing to', 'reveal of'], 'reveal that.'],
      ['mc', 'Người trả lời khảo sát là?', 'respondents', ['responders to', 'answerers', 'respondings'], 'respondents.'],
      ['mc', 'feasible nghĩa là?', 'khả thi', ['tốn kém', 'cần thiết', 'nhanh chóng'], 'feasible.'],
      ['hear', "The survey revealed that sixty-eight percent of respondents waited more than fifteen minutes.", '68% người được hỏi chờ hơn 15 phút.', ['86% chờ hơn 50 phút.', '68% không phải chờ.', '15% chờ 68 phút.'], '68% / 15 minutes.'],
      ['order', 'Sắp xếp: “Kế hoạch sẽ được triển khai vào tháng 5.”', ['The plan', 'will be', 'implemented', 'in May.'], 'The plan will be implemented in May.']
    ],
    noi: [['The *aim* of this *report* → is to *evaluate* the new *system*. ↘', 'Mục đích báo cáo là đánh giá hệ thống mới.'], ['The *survey* *revealed* that → *most* customers were *satisfied*. ↘', 'Khảo sát cho thấy phần lớn khách hài lòng.'], ['It is *recommended* that → all branches *adopt* it by *December*. ↘', 'Khuyến nghị các chi nhánh áp dụng trước tháng 12.']],
    hoithoai: {
      ctx: 'Em trình bày miệng nội dung báo cáo khảo sát thời gian chờ ở quầy cho giám đốc vùng.', vai: 'Giám đốc hỏi, em trả lời theo cấu trúc báo cáo.', ai: '👩‍💼 Regional Director',
      luot: [
        T(["What was the aim of your report?", '', 'Mục đích báo cáo là gì?'], ['The aim was to evaluate how long customers wait at the counter and why.', 'Mục đích là đánh giá khách chờ ở quầy bao lâu và vì sao.', 'Nêu mục đích.'], ['Report about waiting.', 'Câu cụt.'], ['I aim the report.', 'Sai nghĩa.']),
        T(['What did you find?', '', 'Bạn phát hiện gì?'], ['The survey revealed that 68% of respondents waited over 15 minutes, mainly at lunchtime.', 'Khảo sát cho thấy 68% người được hỏi chờ hơn 15 phút, chủ yếu giờ trưa.', 'Findings + số liệu.'], ['People wait long, I think.', 'Không có dữ liệu.'], ['The findings is 68%.', 'findings (số nhiều) → are.']),
        T(["And what do you recommend?", '', 'Bạn khuyến nghị gì?'], ['We recommend implementing an online booking system. It\'s cost-effective and feasible within three months.', 'Khuyến nghị triển khai đặt lịch online. Hiệu quả chi phí và khả thi trong 3 tháng.', 'Khuyến nghị + lý do.'], ['We recommend to implement.', 'recommend + V-ing.'], ['Buy more chairs.', 'Thiếu chuyên nghiệp.'])
      ], ket: 'Em đã trình bày báo cáo theo cấu trúc chuyên nghiệp.'
    },
    tom: ['4 mục báo cáo', 'Văn phong khách quan', 'recommend + V-ing / that + V'], nguphap: 'Bị động; giả định sau recommend', phatam: 'findings /ˈfaɪndɪŋz/, feasible /ˈfiːzəbl/',
    loi: ['recommend to V', 'Văn phong quá cá nhân'], btvn: ['Viết báo cáo 300 từ về một vấn đề ở nơi em làm', 'Viết 3 khuyến nghị dạng It is recommended that…', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 16 ================= */
  const d16 = {
    n: 16, ten: P[15].ten, kinds: K,
    muc: 'Trình bày số liệu thuyết phục; xử lý câu hỏi khó: câu hỏi không biết, câu hỏi chỉ trích, câu hỏi lạc đề.',
    hoc: `<h4>1. Trình bày số liệu</h4>${exs([["If you look at this chart, you'll notice a sharp drop in Q3.", 'Nhìn biểu đồ, quý 3 giảm mạnh.'], ["What's interesting here is that…", 'Điều thú vị ở đây là…'], ['This represents a 25% increase compared to last year.', 'Tương đương tăng 25% so với năm ngoái.']])}
      <h4>2. Xử lý câu hỏi khó</h4>${tbl(['Tình huống', 'Cách nói'], [['Chưa biết câu trả lời', "That's a great question. I don't have the exact figure now, but I'll get back to you by tomorrow."], ['Câu hỏi chỉ trích', 'I understand your concern. Let me explain why we chose this approach.'], ['Lạc đề', "That's an interesting point, but it's a bit outside today's topic. Could we discuss it after the session?"], ['Câu hỏi không rõ', "Just to make sure I understand, are you asking about…?"]])}`,
    vocab: [
      w('represent', '/ˌreprɪˈzent/', 'tương đương, đại diện', '', ['This represents a 10% rise.', '', 'Điều này tương đương mức tăng 10%.']),
      w('compared to', '/kəmˈperd tuː/', 'so với', '', ['Sales rose compared to last year.', '', 'Doanh số tăng so với năm ngoái.']),
      w('concern', '/kənˈsɜːrn/', 'mối lo ngại', '', ['I understand your concern.', '', 'Tôi hiểu mối lo của anh.']),
      w('clarify', '/ˈklærəfaɪ/', 'làm rõ', '', ['Could you clarify your question?', '', 'Anh làm rõ câu hỏi được không?']),
      w('approach', '/əˈproʊtʃ/', 'cách tiếp cận', '', ['We chose a different approach.', '', 'Chúng tôi chọn cách tiếp cận khác.']),
      w('exact figure', '/ɪɡˈzækt ˈfɪɡjər/', 'con số chính xác', '', ["I don't have the exact figure.", '', 'Tôi không có số chính xác.']),
      w('outside the scope', '/ˌaʊtˈsaɪd ðə skoʊp/', 'ngoài phạm vi', '', ["That's outside the scope of this talk.", '', 'Điều đó ngoài phạm vi bài nói.']),
      w('Q&A', '/ˌkjuː ən ˈeɪ/', 'phần hỏi đáp', '', ["Let's move on to Q&A.", '', 'Chuyển sang phần hỏi đáp.']),
      w('notice', '/ˈnoʊtɪs/', 'nhận thấy', '', ["You'll notice a sharp drop here.", '', 'Bạn sẽ thấy sụt giảm mạnh ở đây.']),
      w('justify', '/ˈdʒʌstɪfaɪ/', 'biện minh, chứng minh hợp lý', '', ['Can you justify the cost?', '', 'Anh chứng minh chi phí hợp lý được không?'])
    ],
    qs: [
      ['mc', 'Khi chưa biết câu trả lời, em nói?', "I don't have the exact figure now, but I'll get back to you by tomorrow.", ["I don't know. Next question.", 'That question is wrong.', 'Nobody knows that.'], 'Hứa trả lời sau.'],
      ['mc', 'Câu hỏi lạc đề, em nói?', "That's an interesting point, but it's outside today's topic. Could we discuss it later?", ['Stop asking that.', "I don't care.", 'That is stupid.'], 'Lịch sự, đúng trọng tâm.'],
      ['mc', 'This ___ a 25% increase compared to last year.', 'represents', ['presents to', 'is represent', 'representing'], 'represent.'],
      ['mc', '“Just to make sure I understand, …” dùng để?', 'làm rõ câu hỏi', ['kết thúc bài', 'từ chối trả lời', 'chuyển slide'], 'clarify.'],
      ['mc', 'justify nghĩa là?', 'chứng minh hợp lý', ['điều chỉnh', 'phán xét', 'căn lề'], 'justify.'],
      ['hear', "I understand your concern about the cost. Let me explain why this approach saves money in the long run.", 'Hiểu lo ngại chi phí; giải thích cách này tiết kiệm về lâu dài.', ['Từ chối giải thích.', 'Đồng ý chi phí quá cao.', 'Đổi chủ đề.'], 'concern + explain.'],
      ['order', 'Sắp xếp: “Anh làm rõ câu hỏi được không?”', ['Could you', 'clarify', 'your', 'question?'], 'Could you clarify your question?']
    ],
    noi: [["If you look at this *chart*, → you'll *notice* a *sharp* *drop* in *Q3*. ↘", 'Nhìn biểu đồ, bạn thấy quý 3 giảm mạnh.'], ['I *understand* your *concern*. → Let me *explain*. ↘', 'Tôi hiểu lo ngại của anh. Để tôi giải thích.'], ["That's a *great* *question*. ↘", 'Câu hỏi hay.']],
    hoithoai: {
      ctx: 'Phần hỏi đáp sau khi em thuyết trình đề xuất đầu tư hệ thống mới.', vai: 'Thành viên hội đồng hỏi khó, em xử lý.', ai: '🧐 Board member',
      luot: [
        T(['How much will this cost in maintenance every year?', '', 'Mỗi năm phí bảo trì bao nhiêu?'], ["That's a great question. I don't have the exact figure now, but I'll send it to you by tomorrow.", 'Câu hỏi hay. Hiện tôi chưa có số chính xác, mai tôi gửi anh.', 'Thành thật + cam kết.'], ['About… maybe a lot.', 'Đoán mò.'], ['Not important.', 'Coi thường câu hỏi.']),
        T(["Frankly, I think this is a waste of money.", '', 'Thẳng thắn, tôi nghĩ đây là lãng phí.'], ['I understand your concern. Let me explain: the system would pay for itself within two years.', 'Tôi hiểu lo ngại. Xin giải thích: hệ thống tự hoàn vốn trong 2 năm.', 'Đồng cảm + số liệu.'], ["You're wrong.", 'Đối đầu.'], ["Maybe you're right, let's cancel.", 'Bỏ cuộc dễ dàng.']),
        T(['What about our competitors\' AI plans?', '', 'Còn kế hoạch AI của đối thủ thì sao?'], ["That's an interesting point, but it's a bit outside the scope of today's proposal. Could we discuss it after the session?", 'Ý hay, nhưng hơi ngoài phạm vi đề xuất hôm nay. Ta bàn sau buổi họp được không?', 'Lịch sự chuyển hướng.'], ["I don't know about AI.", 'Không xử lý.'], ['Competitors are bad.', 'Thiếu chuyên nghiệp.'])
      ], ket: 'Em đã xử lý câu hỏi khó bình tĩnh và chuyên nghiệp.'
    },
    tom: ['Trình bày số liệu', 'Câu hỏi không biết / chỉ trích / lạc đề / không rõ'], nguphap: "I'll get back to you…; Let me explain…; Just to make sure…", phatam: 'Giọng bình tĩnh, chậm lại khi gặp câu hỏi khó',
    loi: ['Đoán mò số liệu', 'Phản ứng phòng thủ'], btvn: ['Viết sẵn 5 câu trả lời cho 5 câu hỏi khó có thể gặp', 'Thuyết trình 3 phút + nhờ người thân hỏi khó', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 17 ================= */
  const d17 = {
    n: 17, ten: P[16].ten, kinds: K,
    muc: 'Đàm phán đôi bên cùng có lợi; tách người khỏi vấn đề; giải quyết bất đồng trong nhóm.',
    hoc: `${tbl(['Kỹ thuật', 'Mẫu câu'], [['Tìm lợi ích chung', 'We both want to… Let\'s focus on that.'], ['Đặt câu hỏi mở', 'What would make this work for you?'], ['Đề xuất có điều kiện', "If you could…, we'd be prepared to…"], ['Tóm tắt để xác nhận', "So, if I understand correctly, your main concern is…"], ['Giảm căng thẳng', "I can see this is frustrating. Let's take a step back."], ['Tìm giải pháp chung', "How about we meet halfway?"]])}
      ${tip('🤝 Nguyên tắc: <b>cứng với vấn đề, mềm với con người</b>. Tránh "you always / you never"; dùng "I feel… when…".')}`,
    vocab: [
      w('win-win', '/ˌwɪn ˈwɪn/', 'đôi bên cùng có lợi', '', ["Let's find a win-win solution.", '', 'Hãy tìm giải pháp đôi bên cùng có lợi.']),
      w('common ground', '/ˈkɑːmən ɡraʊnd/', 'điểm chung', '', ['We need to find common ground.', '', 'Cần tìm điểm chung.']),
      w('meet halfway', '/miːt ˌhæfˈweɪ/', 'mỗi bên nhường một nửa', '', ["Let's meet halfway on the price.", '', 'Mỗi bên nhường một nửa về giá.']),
      w('take a step back', '/teɪk ə step bæk/', 'lùi lại để nhìn tổng thể', '', ["Let's take a step back.", '', 'Hãy lùi lại một bước.']),
      w('conflict', '/ˈkɑːnflɪkt/', 'mâu thuẫn', '', ['How do you handle conflict?', '', 'Bạn xử lý mâu thuẫn thế nào?']),
      w('prepared to', '/prɪˈperd tuː/', 'sẵn sàng', '', ["We're prepared to lower the price.", '', 'Chúng tôi sẵn sàng giảm giá.']),
      w('priority', '/praɪˈɔːrəti/', 'ưu tiên', '', ["What's your top priority?", '', 'Ưu tiên hàng đầu của anh là gì?']),
      w('deadlock', '/ˈdedlɑːk/', 'bế tắc', '', ['The talks reached a deadlock.', '', 'Đàm phán rơi vào bế tắc.']),
      w('concession', '/kənˈseʃn/', 'sự nhượng bộ', '', ['Both sides made concessions.', '', 'Hai bên đều nhượng bộ.']),
      w('mutual', '/ˈmjuːtʃuəl/', 'chung, lẫn nhau', '', ['It is in our mutual interest.', '', 'Đó là lợi ích chung.'])
    ],
    qs: [
      ['mc', 'Câu tìm lợi ích chung?', 'We both want the project to succeed, so let\'s focus on that.', ['You always cause problems.', 'My way or no way.', 'This is your fault.'], 'Lợi ích chung.'],
      ['mc', "If you could pay earlier, we'd be ___ to give a discount.", 'prepared', ['prepare', 'preparing', 'preparation'], 'be prepared to.'],
      ['mc', '“meet halfway” nghĩa là?', 'mỗi bên nhường một nửa', ['gặp ở giữa đường', 'bỏ dở', 'gặp nhau lần đầu'], 'compromise.'],
      ['mc', 'The negotiations reached a ___. Neither side would move.', 'deadlock', ['deadline', 'deal', 'dead end road'], 'bế tắc.'],
      ['mc', 'Câu giảm căng thẳng?', "I can see this is frustrating. Let's take a step back.", ['Calm down!', 'You are too emotional.', 'Stop complaining.'], 'Đồng cảm + lùi lại.'],
      ['hear', "So, if I understand correctly, your main concern is the delivery time, not the price.", 'Lo ngại chính là thời gian giao, không phải giá.', ['Lo ngại chính là giá.', 'Không lo gì.', 'Lo về chất lượng.'], 'delivery time, not the price.'],
      ['order', 'Sắp xếp: “Hãy tìm giải pháp đôi bên cùng có lợi.”', ["Let's", 'find', 'a win-win', 'solution.'], "Let's find a win-win solution."]
    ],
    noi: [['What would make this *work* for *you*? ↘', 'Điều gì giúp việc này ổn với anh?'], ["So, if I *understand* *correctly*, → your main *concern* is *timing*. ↘", 'Nếu tôi hiểu đúng, lo ngại chính là thời gian.'], ['How about we *meet* *halfway*? ↗', 'Mỗi bên nhường một nửa nhé?']],
    hoithoai: {
      ctx: 'Hai trưởng nhóm (IT và Kinh doanh) mâu thuẫn về lịch nâng cấp hệ thống. Em là người hoà giải.', vai: 'Trưởng nhóm kinh doanh bức xúc, em xử lý.', ai: '😤 Sales lead',
      luot: [
        T(["The IT team always chooses the worst time! We can't stop sales for a whole day!", '', 'Đội IT lúc nào cũng chọn giờ tệ nhất! Không thể dừng bán hàng cả ngày!'], ["I can see this is frustrating. We both want the upgrade to go smoothly, so let's take a step back.", 'Tôi hiểu điều này gây bực. Chúng ta đều muốn nâng cấp suôn sẻ, hãy lùi lại một bước.', 'Đồng cảm + lợi ích chung.'], ['IT is right, you must accept.', 'Đứng về một phía.'], ['Calm down!', 'Leo thang căng thẳng.']),
        T(['Fine. But Monday is our busiest day.', '', 'Được. Nhưng thứ Hai là ngày bận nhất.'], ['So, if I understand correctly, your main concern is the timing, not the upgrade itself?', 'Vậy nếu tôi hiểu đúng, lo ngại chính là thời điểm, không phải bản thân việc nâng cấp?', 'Tóm tắt xác nhận.'], ['You never like upgrades.', 'Công kích cá nhân.'], ['Monday is fine for IT.', 'Bỏ qua lo ngại.']),
        T(["Exactly. Saturday night would be much better for us.", '', 'Đúng. Tối thứ Bảy tốt hơn nhiều cho chúng tôi.'], ['If IT could do it on Saturday night, would you be prepared to send one person to test the sales app on Sunday morning?', 'Nếu IT làm tối thứ Bảy, anh có sẵn sàng cử một người thử ứng dụng bán hàng sáng Chủ nhật không?', 'Đề xuất có điều kiện – win-win.'], ['OK, Saturday. IT must work.', 'Áp đặt.'], ["Let's cancel the upgrade.", 'Né vấn đề.'])
      ], ket: 'Em đã hoà giải mâu thuẫn theo hướng đôi bên cùng có lợi.'
    },
    tom: ['Lợi ích chung, câu hỏi mở', 'Đề xuất có điều kiện', 'Tóm tắt xác nhận, giảm căng thẳng'], nguphap: "If you could…, we'd be prepared to…; So, if I understand correctly…", phatam: 'Giọng hạ thấp, chậm khi giảm căng thẳng',
    loi: ['Dùng you always / you never', 'Đứng về một phía khi hoà giải'], btvn: ['Viết đoạn hội thoại hoà giải 8 lượt', 'Liệt kê 5 câu giảm căng thẳng', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 18 ================= */
  const d18 = {
    n: 18, ten: P[17].ten, kinds: K,
    muc: 'Góp ý xây dựng theo mô hình SBI (Situation – Behaviour – Impact); khen cụ thể; nhận góp ý chuyên nghiệp.',
    hoc: `${tbl(['Bước', 'Ý nghĩa', 'Câu mẫu'], [['Situation', 'Bối cảnh cụ thể', "In yesterday's client meeting, …"], ['Behaviour', 'Hành vi quan sát được (không phán xét tính cách)', '…you interrupted the client several times…'], ['Impact', 'Ảnh hưởng', '…and I felt it made him less willing to share his concerns.'], ['Next step', 'Hướng cải thiện', 'Next time, could you let him finish before responding?']])}
      ${exs([["You handled that complaint really well – especially the way you stayed calm.", 'Em xử lý khiếu nại rất tốt – nhất là cách giữ bình tĩnh.'], ["Thanks for the feedback. I hadn't realised that. I'll work on it.", 'Cảm ơn góp ý. Tôi chưa nhận ra. Tôi sẽ cải thiện.']])}
      ${tip('🙂 Khen <b>cụ thể</b> (cái gì, vì sao tốt) hiệu quả hơn khen chung chung "Good job!".')}`,
    vocab: [
      w('feedback', '/ˈfiːdbæk/', 'phản hồi, góp ý', 'Không đếm được.', ['Thanks for your feedback.', '', 'Cảm ơn góp ý của bạn.']),
      w('constructive', '/kənˈstrʌktɪv/', 'mang tính xây dựng', '', ['Give constructive feedback.', '', 'Hãy góp ý xây dựng.']),
      w('performance review', '/pərˈfɔːrməns rɪˈvjuː/', 'đánh giá hiệu quả công việc', '', ['My performance review is next week.', '', 'Tuần sau đánh giá hiệu quả công việc.']),
      w('strengths', '/streŋθs/', 'điểm mạnh', '', ['Let\'s start with your strengths.', '', 'Bắt đầu với điểm mạnh.']),
      w('area for improvement', '/ˈeriə fər ɪmˈpruːvmənt/', 'điểm cần cải thiện', '', ['One area for improvement is time management.', '', 'Một điểm cần cải thiện là quản lý thời gian.']),
      w('work on', '/wɜːrk ɑːn/', 'cải thiện (kỹ năng)', '', ["I'll work on my presentation skills.", '', 'Tôi sẽ cải thiện kỹ năng thuyết trình.']),
      w('impact', '/ˈɪmpækt/', 'tác động', '', ['It had a big impact on the team.', '', 'Nó tác động lớn tới đội.']),
      w('appreciate', '/əˈpriːʃieɪt/', 'trân trọng', '', ['I really appreciate your effort.', '', 'Tôi rất trân trọng nỗ lực của bạn.']),
      w('goal-setting', '/ˈɡoʊl setɪŋ/', 'đặt mục tiêu', '', ["Let's do some goal-setting for next year.", '', 'Cùng đặt mục tiêu năm sau.']),
      w('mentor', '/ˈmentɔːr/', 'người hướng dẫn', '', ['She is my mentor.', '', 'Chị ấy là người hướng dẫn tôi.'])
    ],
    qs: [
      ['mc', 'Góp ý theo SBI, phần B (Behaviour) nên?', 'mô tả hành vi cụ thể quan sát được', ['nhận xét tính cách', 'so sánh với người khác', 'nói chung chung'], 'Hành vi cụ thể.'],
      ['mc', 'Câu khen cụ thể nhất?', 'Your report was clear – especially the summary table on page 2.', ['Good job!', 'Nice.', 'You are the best person.'], 'Cụ thể.'],
      ['mc', 'Thanks for your ___. I\'ll work on it.', 'feedback', ['feedbacks', 'a feedback', 'feed back'], 'Không đếm được.'],
      ['mc', "One ___ for improvement is meeting deadlines.", 'area', ['place', 'zone', 'field of'], 'area for improvement.'],
      ['mc', 'constructive nghĩa là?', 'mang tính xây dựng', ['xây dựng nhà cửa', 'chỉ trích', 'tiêu cực'], 'constructive.'],
      ['hear', "In yesterday's meeting, you interrupted the client several times, and I think it made him less open.", 'SBI: hôm qua bạn ngắt lời khách nhiều lần khiến khách kém cởi mở.', ['Khen bạn xử lý tốt.', 'Bạn đến muộn.', 'Khách ngắt lời bạn.'], 'S-B-I.'],
      ['order', 'Sắp xếp: “Tôi rất trân trọng nỗ lực của bạn.”', ['I', 'really', 'appreciate', 'your effort.'], 'I really appreciate your effort.']
    ],
    noi: [["In yesterday's *meeting*, → you *interrupted* the client *several* *times*. ↘", 'Hôm qua bạn ngắt lời khách nhiều lần.'], ['*Next* *time*, → could you let him *finish* first? ↗', 'Lần sau để khách nói hết nhé?'], ["Thanks for the *feedback*. → I'll *work* on it. ↘", 'Cảm ơn góp ý. Tôi sẽ cải thiện.']],
    hoithoai: {
      ctx: 'Em là trưởng nhóm, góp ý cho một nhân viên mới (người nước ngoài) sau tuần đầu.', vai: 'Nhân viên hỏi, em góp ý theo SBI.', ai: '🧑 Alex',
      luot: [
        T(['How am I doing so far?', '', 'Tôi làm thế nào đến giờ?'], ["You're doing well. I really appreciate how quickly you learned the system.", 'Bạn làm tốt. Tôi rất trân trọng việc bạn học hệ thống rất nhanh.', 'Khen cụ thể trước.'], ['Good.', 'Chung chung.'], ['Not bad, but you are lazy.', 'Phán xét tính cách.']),
        T(['Is there anything I should improve?', '', 'Tôi cần cải thiện gì?'], ["One area for improvement: in Tuesday's meeting, you didn't share the report beforehand, so the team couldn't prepare.", 'Một điểm cần cải thiện: họp thứ Ba bạn không gửi báo cáo trước nên nhóm không chuẩn bị được.', 'SBI đầy đủ.'], ['You are bad at meetings.', 'Không cụ thể, phán xét.'], ['Everything is wrong.', 'Tiêu cực, mơ hồ.']),
        T(["I see. I hadn't realised that.", '', 'Tôi hiểu. Tôi chưa nhận ra.'], ['No problem. Next time, could you send it the day before? That would really help.', 'Không sao. Lần sau gửi trước một ngày nhé? Sẽ giúp ích nhiều.', 'Hướng cải thiện cụ thể.'], ['You should know.', 'Thiếu hỗ trợ.'], ['Never do it again!', 'Quá gay gắt.'])
      ], ket: 'Em đã góp ý xây dựng theo mô hình SBI.'
    },
    tom: ['SBI + Next step', 'Khen cụ thể', 'Nhận góp ý chuyên nghiệp'], nguphap: 'Câu đề nghị mềm: Could you…? That would…', phatam: 'Giọng ấm, nhấn hành vi không nhấn người',
    loi: ['Nhận xét tính cách', 'feedbacks'], btvn: ['Viết 2 góp ý theo SBI cho đồng nghiệp/người thân', 'Viết 3 câu khen cụ thể', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 19 ================= */
  const d19 = {
    n: 19, ten: P[18].ten, kinds: K,
    muc: 'Từ vựng và hội thoại tài chính – ngân hàng: tín dụng, lãi suất, rủi ro, tuân thủ, chống rửa tiền.',
    hoc: `${tbl(['Lĩnh vực', 'Từ khoá'], [['Tín dụng', 'loan, mortgage, collateral, credit score, repayment, default'], ['Lãi suất – tiền gửi', 'interest rate, fixed / variable rate, term deposit, maturity'], ['Rủi ro – tuân thủ', 'risk assessment, compliance, KYC (Know Your Customer), AML (anti-money laundering)'], ['Báo cáo', 'balance sheet, profit and loss, revenue, net profit, NPL (non-performing loan)']])}
      ${say('Before approving the loan, we need to assess the customer\'s credit score and check the value of the collateral.', 'Trước khi duyệt khoản vay, cần đánh giá điểm tín dụng của khách và kiểm tra giá trị tài sản đảm bảo.')}
      ${tip('🏦 Đây là bài học ngôn ngữ. Thông tin sản phẩm, lãi suất thực tế luôn theo quy định của từng ngân hàng.')}`,
    vocab: [
      w('mortgage', '/ˈmɔːrɡɪdʒ/', 'vay thế chấp mua nhà', 't câm.', ['They took out a 20-year mortgage.', '', 'Họ vay thế chấp 20 năm.']),
      w('collateral', '/kəˈlætərəl/', 'tài sản đảm bảo', '', ['The house is used as collateral.', '', 'Căn nhà dùng làm tài sản đảm bảo.']),
      w('credit score', '/ˈkredɪt skɔːr/', 'điểm tín dụng', '', ['A good credit score helps you borrow.', '', 'Điểm tín dụng tốt giúp vay dễ hơn.']),
      w('repayment', '/rɪˈpeɪmənt/', 'việc trả nợ', '', ['Monthly repayments are 8 million.', '', 'Mỗi tháng trả 8 triệu.']),
      w('default', '/dɪˈfɔːlt/', 'vỡ nợ, không trả được nợ', '', ['The risk of default is low.', '', 'Rủi ro vỡ nợ thấp.']),
      w('compliance', '/kəmˈplaɪəns/', 'tuân thủ (quy định)', '', ['She works in compliance.', '', 'Cô ấy làm bộ phận tuân thủ.']),
      w('money laundering', '/ˈmʌni ˈlɔːndərɪŋ/', 'rửa tiền', '', ['Banks must prevent money laundering.', '', 'Ngân hàng phải ngăn chặn rửa tiền.']),
      w('term deposit', '/tɜːrm dɪˈpɑːzɪt/', 'tiền gửi có kỳ hạn', '', ['I opened a 12-month term deposit.', '', 'Tôi mở tiền gửi kỳ hạn 12 tháng.']),
      w('revenue', '/ˈrevənuː/', 'doanh thu', '', ['Revenue grew by 15%.', '', 'Doanh thu tăng 15%.']),
      w('net profit', '/net ˈprɑːfɪt/', 'lợi nhuận ròng', '', ['Net profit reached 2 trillion dong.', '', 'Lợi nhuận ròng đạt 2 nghìn tỷ.'])
    ],
    qs: [
      ['mc', 'Tài sản đảm bảo khoản vay là?', 'collateral', ['collection', 'credit card', 'deposit'], 'collateral.'],
      ['mc', 'KYC là viết tắt của?', 'Know Your Customer', ['Keep Your Cash', 'Key Yearly Check', 'Know Your Credit'], 'KYC.'],
      ['mc', 'Không trả được nợ là?', 'default', ['deposit', 'deduct', 'defer'], 'default.'],
      ['mc', 'mortgage đọc là?', "/ˈmɔːrɡɪdʒ/ (t câm)", ['/ˈmɔːrtɡeɪdʒ/', '/mɔːrˈɡeɪtʃ/', '/ˈmɔːrɡeɪt/'], 't câm.'],
      ['mc', 'revenue nghĩa là?', 'doanh thu', ['lợi nhuận ròng', 'chi phí', 'vốn'], 'revenue.'],
      ['hear', "Before approving the loan, we need to check the customer's credit score and the value of the collateral.", 'Trước khi duyệt vay: kiểm tra điểm tín dụng và giá trị tài sản đảm bảo.', ['Kiểm tra lãi suất và kỳ hạn.', 'Duyệt ngay không cần kiểm tra.', 'Chỉ kiểm tra thu nhập.'], 'credit score + collateral.'],
      ['order', 'Sắp xếp: “Ngân hàng phải ngăn chặn rửa tiền.”', ['Banks', 'must prevent', 'money', 'laundering.'], 'Banks must prevent money laundering.']
    ],
    noi: [['We need to *assess* the customer\'s *credit* *score*. ↘', 'Cần đánh giá điểm tín dụng của khách.'], ['The *house* is used as *collateral*. ↘', 'Căn nhà dùng làm tài sản đảm bảo.'], ['*Net* *profit* grew by *fifteen* *percent*. ↘', 'Lợi nhuận ròng tăng 15%.']],
    hoithoai: {
      ctx: 'Một khách nước ngoài sống ở Việt Nam hỏi về vay mua căn hộ.', vai: 'Khách hỏi, em là chuyên viên tư vấn.', ai: '🧑‍💼 Expat customer',
      luot: [
        T(["I'd like to buy an apartment. Can foreigners get a mortgage here?", '', 'Tôi muốn mua căn hộ. Người nước ngoài vay thế chấp được không?'], ["It's possible in some cases. We'll need to check your residence status, income and credit history first.", 'Có thể trong một số trường hợp. Trước hết cần kiểm tra tình trạng cư trú, thu nhập và lịch sử tín dụng.', 'Thận trọng, đúng quy trình.'], ['Yes, everyone can, no problem.', 'Hứa hẹn thiếu căn cứ.'], ['No, impossible.', 'Khẳng định vội.']),
        T(["What kind of interest rate would it be?", '', 'Lãi suất loại nào?'], ["Usually it's fixed for the first one to three years, then it becomes variable.", 'Thường cố định 1–3 năm đầu, sau đó thả nổi.', 'fixed / variable.'], ['It is default rate.', 'Sai thuật ngữ.'], ['Interest is collateral.', 'Sai nghĩa.']),
        T(['And what do you need as collateral?', '', 'Cần tài sản đảm bảo gì?'], ['In most cases, the apartment itself is used as collateral.', 'Phần lớn trường hợp, chính căn hộ được dùng làm tài sản đảm bảo.', 'Bị động + thuật ngữ đúng.'], ['Your passport is collateral.', 'Sai.'], ['You need compliance.', 'Sai nghĩa.'])
      ], ket: 'Em đã tư vấn bằng thuật ngữ ngân hàng tiếng Anh.'
    },
    tom: ['Tín dụng, lãi suất, tuân thủ, báo cáo', 'KYC / AML'], nguphap: 'Bị động trong quy trình ngân hàng', phatam: 'mortgage /ˈmɔːrɡɪdʒ/, collateral /kəˈlætərəl/',
    loi: ['Đọc t trong mortgage', 'Hứa hẹn thiếu căn cứ với khách'], btvn: ['Viết bảng thuật ngữ 20 từ ngành của em', 'Giải thích quy trình vay vốn 120 từ bằng tiếng Anh', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 20 ================= */
  const d20 = {
    n: 20, ten: P[19].ten, kinds: K,
    muc: 'Từ vựng CNTT và an ninh mạng; giải thích sự cố, rủi ro bảo mật, hướng dẫn người dùng không chuyên.',
    hoc: `${tbl(['Nhóm', 'Từ khoá'], [['Hạ tầng', 'server, network, bandwidth, downtime, cloud, data centre'], ['Phần mềm', 'update, patch, bug, deploy, roll back, compatibility'], ['Bảo mật', 'phishing, malware, ransomware, firewall, encryption, two-factor authentication (2FA)'], ['Quy trình', 'incident, ticket, escalate, root cause analysis, backup and recovery']])}
      ${say('We have detected a phishing email targeting our staff. Please do not click any links, and report suspicious messages to the IT help desk immediately.', 'Chúng tôi phát hiện email lừa đảo nhắm vào nhân viên. Vui lòng không bấm liên kết và báo ngay tin nhắn đáng ngờ cho bộ phận hỗ trợ IT.')}
      ${tip('🗣️ Giải thích cho người không chuyên: tránh thuật ngữ, dùng so sánh. <i>"A firewall is like a security guard for the network."</i>')}`,
    vocab: [
      w('phishing', '/ˈfɪʃɪŋ/', 'lừa đảo giả mạo (email, tin nhắn)', '', ["Don't click links in phishing emails.", '', 'Đừng bấm liên kết trong email lừa đảo.']),
      w('malware', '/ˈmælwer/', 'phần mềm độc hại', '', ['The laptop was infected with malware.', '', 'Laptop bị nhiễm phần mềm độc hại.']),
      w('ransomware', '/ˈrænsəmwer/', 'mã độc tống tiền', '', ['Ransomware encrypted all the files.', '', 'Mã độc tống tiền mã hoá toàn bộ file.']),
      w('firewall', '/ˈfaɪərwɔːl/', 'tường lửa', '', ['The firewall blocked the attack.', '', 'Tường lửa chặn cuộc tấn công.']),
      w('encryption', '/ɪnˈkrɪpʃn/', 'mã hoá', '', ['All data is protected by encryption.', '', 'Mọi dữ liệu được mã hoá.']),
      w('two-factor authentication', '/tuː ˈfæktər ɔːˌθentɪˈkeɪʃn/', 'xác thực hai lớp', '', ['Turn on two-factor authentication.', '', 'Bật xác thực hai lớp.']),
      w('patch', '/pætʃ/', 'bản vá', '', ['Install the security patch today.', '', 'Cài bản vá bảo mật hôm nay.']),
      w('downtime', '/ˈdaʊntaɪm/', 'thời gian ngừng hoạt động', '', ['The upgrade caused two hours of downtime.', '', 'Nâng cấp gây ngừng hệ thống 2 giờ.']),
      w('incident', '/ˈɪnsɪdənt/', 'sự cố', '', ['Please report any security incident.', '', 'Vui lòng báo mọi sự cố bảo mật.']),
      w('roll back', '/roʊl bæk/', 'khôi phục bản cũ', '', ['We had to roll back the update.', '', 'Chúng tôi phải khôi phục bản cũ.'])
    ],
    qs: [
      ['mc', 'Email giả mạo ngân hàng để lấy mật khẩu là?', 'phishing', ['patching', 'firewall', 'encryption'], 'phishing.'],
      ['mc', 'Mã độc khoá file và đòi tiền chuộc là?', 'ransomware', ['firmware', 'spyware only', 'hardware'], 'ransomware.'],
      ['mc', 'The new version had bugs, so we ___ it.', 'rolled back', ['rolled up', 'rolled over', 'patched up'], 'roll back.'],
      ['mc', '2FA là?', 'two-factor authentication', ['two-file access', 'second firewall', 'two-factor administration'], '2FA.'],
      ['mc', 'Giải thích firewall cho người không chuyên?', 'It\'s like a security guard that checks what comes in and out of the network.', ['It is a wall on fire.', 'It is a type of virus.', 'It is the internet cable.'], 'So sánh dễ hiểu.'],
      ['hear', "We've detected a phishing email. Please don't click any links, and report it to the help desk.", 'Phát hiện email lừa đảo; không bấm link, báo bộ phận hỗ trợ.', ['Hãy bấm link để cập nhật.', 'Xoá máy tính.', 'Gửi email cho mọi người.'], "don't click / report."],
      ['order', 'Sắp xếp: “Bật xác thực hai lớp.”', ['Turn on', 'two-factor', 'authentication.'], 'Turn on two-factor authentication.']
    ],
    noi: [['Please do *not* *click* any *links*. ↘', 'Vui lòng không bấm liên kết nào.'], ['A *firewall* is like a *security* *guard* → for the *network*. ↘', 'Tường lửa như bảo vệ cho mạng.'], ['We had to *roll* *back* the *update*. ↘', 'Chúng tôi phải khôi phục bản cũ.']],
    hoithoai: {
      ctx: 'Một nhân viên chi nhánh (người nước ngoài) gọi IT vì nhận email lạ.', vai: 'Nhân viên hỏi, em hướng dẫn.', ai: '📧 Staff member',
      luot: [
        T(["I got an email saying my account will be locked unless I log in through a link. Is it real?", '', 'Tôi nhận email nói tài khoản sẽ bị khoá trừ khi đăng nhập qua liên kết. Thật không?'], ["It sounds like a phishing email. Please don't click the link or enter your password.", 'Có vẻ là email lừa đảo. Đừng bấm liên kết hay nhập mật khẩu.', 'Nhận diện + hướng dẫn.'], ["It's probably fine, just click it.", 'Nguy hiểm.'], ['Reply with your password to check.', 'Rất nguy hiểm.']),
        T(["Oh no, I already clicked it, but I didn't type anything.", '', 'Ôi, tôi lỡ bấm rồi nhưng chưa gõ gì.'], ["OK, don't worry. Please disconnect from the network now, and I'll check your laptop for malware.", 'Đừng lo. Ngắt mạng ngay, tôi sẽ kiểm tra laptop xem có mã độc không.', 'Xử lý sự cố đúng bước.'], ['Your computer is destroyed.', 'Gây hoảng loạn.'], ['Do nothing.', 'Bỏ qua rủi ro.']),
        T(['Thanks. How can I avoid this in future?', '', 'Cảm ơn. Sau này tránh thế nào?'], ['Turn on two-factor authentication, and always check the sender\'s address before clicking.', 'Bật xác thực hai lớp và luôn kiểm tra địa chỉ người gửi trước khi bấm.', 'Lời khuyên phòng ngừa.'], ['Never use email.', 'Không thực tế.'], ['Use the same password everywhere.', 'Sai.'])
      ], ket: 'Em đã xử lý sự cố bảo mật và hướng dẫn người dùng.'
    },
    tom: ['Từ vựng hạ tầng, phần mềm, bảo mật', 'Giải thích cho người không chuyên'], nguphap: 'Mệnh lệnh phủ định; bị động (was infected)', phatam: 'authentication /ɔːˌθentɪˈkeɪʃn/, encryption /ɪnˈkrɪpʃn/',
    loi: ['Dùng thuật ngữ khó với người dùng thường', 'Gây hoảng loạn khi báo sự cố'], btvn: ['Viết email cảnh báo phishing gửi toàn chi nhánh, 100 từ', 'Giải thích 3 thuật ngữ bảo mật bằng so sánh đơn giản', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 21 ================= */
  const d21 = {
    n: 21, ten: P[20].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Ôn giai đoạn 3: báo cáo – đề xuất, thuyết trình số liệu, đàm phán – hoà giải, góp ý, tài chính, CNTT.',
    hoc: `<h4>Tóm tắt giai đoạn 3</h4>${tbl(['Tình huống', 'Câu then chốt'], [['Báo cáo', 'The aim of this report is… / The survey revealed… / It is recommended that…'], ['Câu hỏi khó', "I'll get back to you… / I understand your concern… / Just to make sure…"], ['Hoà giải', "We both want… / If you could…, we'd be prepared to… / meet halfway"], ['Góp ý', 'Situation – Behaviour – Impact – Next step'], ['Tài chính', 'collateral, credit score, compliance, KYC, AML'], ['CNTT', 'phishing, malware, 2FA, patch, roll back']])}`,
    qs: [['mc', 'It is recommended that every branch ___ the new policy.', 'adopt', ['adopts', 'adopted', 'will adopt'], 'Giả định.'], ['mc', 'We need to check the ___ before approving the loan.', 'collateral', ['colleague', 'collection', 'collapse'], 'Tài sản đảm bảo.']],
    noi: [['It is *recommended* that we *invest* → in *cybersecurity* *training*. ↘', 'Khuyến nghị đầu tư đào tạo an ninh mạng.'], ['I *understand* your *concern*. ↘', 'Tôi hiểu lo ngại của anh.']],
    hoithoai: {
      ctx: 'Một ngày ở hội sở: báo cáo, câu hỏi khó, mâu thuẫn, sự cố.', vai: 'Nhiều vai, em phản xạ.', ai: '🎭 Nhiều người',
      luot: [
        T(['(Director) Summarise your findings in one sentence.', '', '(Giám đốc) Tóm kết quả trong một câu.'], ['The survey revealed that 40% of staff have clicked a phishing link at least once.', 'Khảo sát cho thấy 40% nhân viên từng bấm link lừa đảo ít nhất một lần.', 'Findings rõ.'], ['Staff click many things.', 'Mơ hồ.'], ['The findings is bad.', 'Sai.']),
        T(['(Board member) Is that training really worth the cost?', '', '(Hội đồng) Khoá đào tạo có đáng tiền không?'], ['I understand your concern. One ransomware incident could cost far more than the training.', 'Tôi hiểu lo ngại. Một sự cố mã độc tống tiền có thể tốn hơn nhiều so với đào tạo.', 'Đồng cảm + lập luận.'], ['Yes, trust me.', 'Thiếu lập luận.'], ["You don't understand IT.", 'Công kích.']),
        T(['(Two colleagues argue about the training date.)', '', '(Hai đồng nghiệp tranh cãi về ngày đào tạo.)'], ["We both want everyone trained by June. How about we meet halfway and run two shorter sessions?", 'Chúng ta đều muốn mọi người được đào tạo trước tháng 6. Mỗi bên nhường một chút, tổ chức hai buổi ngắn hơn nhé?', 'Lợi ích chung + thoả hiệp.'], ['Do what I say.', 'Áp đặt.'], ['Cancel the training.', 'Né tránh.']),
        T(['(Staff) My screen says all my files are encrypted!', '', '(Nhân viên) Màn hình báo toàn bộ file bị mã hoá!'], ["Please disconnect from the network immediately. It may be ransomware – I'm escalating this now.", 'Ngắt mạng ngay. Có thể là mã độc tống tiền – tôi đang báo lên cấp trên.', 'Xử lý đúng quy trình.'], ['Pay the money quickly.', 'Sai quy trình.'], ['Restart and try again.', 'Không xử lý đúng.'])
      ], ket: 'Em đã xử lý trọn một ngày ở hội sở bằng tiếng Anh!'
    },
    tom: ['Ôn giai đoạn 3', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn', phatam: 'Ngữ điệu chuyên nghiệp',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: học lại ngày yếu', 'Viết báo cáo 300 từ về an ninh mạng ở nơi em làm', 'Làm đề "TOEIC mini 2" trong Luyện đề']
  };

  /* ================= NGÀY 22 ================= */
  const d22 = {
    n: 22, ten: P[21].ten, kinds: K,
    muc: 'Hiểu và dùng đúng lúc 20 thành ngữ và cách nói tự nhiên hay gặp trong công việc và đời sống.',
    hoc: `${tbl(['Thành ngữ', 'Nghĩa', 'Ví dụ'], [['on the same page', 'cùng hiểu một vấn đề', "Let's make sure we're on the same page."], ['the ball is in your court', 'đến lượt bạn quyết định', "We've sent the offer. The ball is in their court."], ['get the hang of', 'quen tay, nắm được cách làm', "You'll get the hang of it."], ['a piece of cake', 'dễ như ăn bánh', 'The test was a piece of cake.'], ['under the weather', 'hơi mệt, không khoẻ', "I'm feeling a bit under the weather."], ['cut corners', 'làm ẩu để tiết kiệm', "Don't cut corners on security."], ['think outside the box', 'nghĩ sáng tạo', 'We need to think outside the box.'], ['back to square one', 'quay lại từ đầu', 'The deal failed, so we\'re back to square one.'], ['hit the ground running', 'bắt tay làm ngay hiệu quả', 'She hit the ground running in her new job.'], ['call it a day', 'nghỉ, dừng làm việc', "Let's call it a day."]])}
      ${tip('⚠️ Dùng thành ngữ vừa phải và đúng ngữ cảnh. Trong văn viết học thuật (IELTS Writing) hạn chế thành ngữ.')}`,
    vocab: [
      w('on the same page', '/ɑːn ðə seɪm peɪdʒ/', 'cùng chung hiểu biết', '', ["Let's make sure we're on the same page.", '', 'Đảm bảo chúng ta hiểu giống nhau.']),
      w('the ball is in your court', '/ðə bɔːl ɪz ɪn jɔːr kɔːrt/', 'đến lượt bạn quyết', '', ["We've made our offer. The ball is in your court.", '', 'Chúng tôi đã đề nghị, giờ anh quyết.']),
      w('get the hang of', '/ɡet ðə hæŋ əv/', 'quen tay, nắm được', '', ["You'll get the hang of the new system.", '', 'Bạn sẽ quen hệ thống mới.']),
      w('a piece of cake', '/ə piːs əv keɪk/', 'rất dễ', '', ['The exam was a piece of cake.', '', 'Bài thi dễ ợt.']),
      w('under the weather', '/ˈʌndər ðə ˈweðər/', 'hơi mệt, ốm nhẹ', '', ["I'm feeling under the weather today.", '', 'Hôm nay tôi hơi mệt.']),
      w('cut corners', '/kʌt ˈkɔːrnərz/', 'làm ẩu, cắt bớt công đoạn', '', ['Never cut corners on safety.', '', 'Đừng bao giờ làm ẩu về an toàn.']),
      w('think outside the box', '/θɪŋk ˌaʊtˈsaɪd ðə bɑːks/', 'nghĩ sáng tạo', '', ['We need to think outside the box.', '', 'Cần nghĩ sáng tạo.']),
      w('back to square one', '/bæk tə skwer wʌn/', 'quay lại từ đầu', '', ["We're back to square one.", '', 'Chúng ta quay lại từ đầu.']),
      w('hit the ground running', '/hɪt ðə ɡraʊnd ˈrʌnɪŋ/', 'bắt tay vào việc ngay', '', ['He hit the ground running.', '', 'Anh ấy bắt tay vào việc ngay.']),
      w('call it a day', '/kɔːl ɪt ə deɪ/', 'kết thúc ngày làm việc', '', ["It's 7 p.m. Let's call it a day.", '', '7 giờ tối rồi, nghỉ thôi.'])
    ],
    qs: [
      ['mc', '“I\'m feeling under the weather” nghĩa là?', 'Tôi hơi mệt', ['Tôi bị ướt mưa', 'Tôi thích thời tiết', 'Tôi đang đi du lịch'], 'under the weather.'],
      ['mc', 'The client rejected all our ideas. We\'re ___.', 'back to square one', ['a piece of cake', 'on the same page', 'calling it a day'], 'Quay lại từ đầu.'],
      ['mc', "Don't ___ on testing. Bugs are expensive.", 'cut corners', ['call it a day', 'think outside the box', 'hit the ground'], 'Làm ẩu.'],
      ['mc', '“The ball is in your court” nghĩa là?', 'Đến lượt bạn quyết định', ['Bạn đang chơi bóng', 'Bạn thua', 'Hãy ra sân'], 'Đến lượt bạn.'],
      ['mc', 'Thành ngữ nào KHÔNG nên dùng trong IELTS Writing?', 'a piece of cake', ['a significant increase', 'in contrast', 'it is widely believed'], 'Văn học thuật hạn chế thành ngữ.'],
      ['hear', "Don't worry about the new software. You'll get the hang of it in a few days.", 'Vài ngày nữa sẽ quen phần mềm mới.', ['Phần mềm sẽ hỏng.', 'Bạn phải học lại từ đầu.', 'Phần mềm rất khó, đừng dùng.'], 'get the hang of it.'],
      ['order', 'Sắp xếp: “Nghỉ thôi.”', ["Let's", 'call', 'it', 'a day.'], "Let's call it a day."]
    ],
    noi: [["Let's make *sure* we're on the *same* *page*. ↘", 'Đảm bảo ta hiểu giống nhau.'], ["You'll get the *hang* of it. ↘", 'Bạn sẽ quen thôi.'], ["It's *seven* p.m. → Let's *call* it a *day*. ↘", '7 giờ rồi, nghỉ thôi.']],
    hoithoai: {
      ctx: 'Cuối ngày làm việc với đồng nghiệp người Mỹ.', vai: 'Jake nói chuyện tự nhiên, em đáp bằng thành ngữ phù hợp.', ai: '🧑 Jake',
      luot: [
        T(["How's the new system? Is it hard?", '', 'Hệ thống mới thế nào? Khó không?'], ["It was tricky at first, but I'm getting the hang of it.", 'Lúc đầu hơi khó nhưng tôi đang quen dần.', 'get the hang of.'], ["It's under the weather.", 'Sai ngữ cảnh.'], ["It's back to square one.", 'Sai nghĩa.']),
        T(["The client didn't like our design. They want something completely different.", '', 'Khách không thích thiết kế. Họ muốn khác hoàn toàn.'], ["So we're back to square one. Maybe we need to think outside the box this time.", 'Vậy quay lại từ đầu. Lần này có lẽ cần nghĩ sáng tạo hơn.', 'Hai thành ngữ đúng.'], ["It's a piece of cake.", 'Không hợp.'], ["Let's cut corners.", 'Không nên.']),
        T(["Agreed. It's late. Shall we continue tomorrow?", '', 'Đồng ý. Muộn rồi. Mai làm tiếp nhé?'], ["Yes, let's call it a day. See you tomorrow!", 'Ừ, nghỉ thôi. Mai gặp!', 'call it a day.'], ['Yes, the ball is in my court.', 'Không hợp.'], ['Yes, I hit the ground running.', 'Sai ngữ cảnh.'])
      ], ket: 'Em đã dùng thành ngữ tự nhiên, đúng ngữ cảnh.'
    },
    tom: ['10 thành ngữ công sở', 'Dùng đúng ngữ cảnh', 'Hạn chế trong văn học thuật'], nguphap: 'Thành ngữ cố định, không đổi từ', phatam: 'Đọc thành ngữ liền một hơi',
    loi: ['Đổi từ trong thành ngữ', 'Dùng thành ngữ trong bài viết học thuật'], btvn: ['Viết đoạn hội thoại 8 lượt dùng 5 thành ngữ', 'Nghe 1 tập podcast tiếng Anh, ghi lại thành ngữ gặp được', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 23 ================= */
  const d23 = {
    n: 23, ten: P[22].ten, kinds: K,
    muc: 'Nói khéo, nói giảm trong công việc: từ chối, phê bình, báo tin xấu, không đồng ý cấp trên.',
    hoc: `${tbl(['Nói thẳng', 'Nói ngoại giao'], [['Your plan is bad.', "I'm not sure this plan would work as well as we'd hope."], ['That\'s wrong.', 'I think there might be a small mistake here.'], ['No, we can\'t.', "Unfortunately, that won't be possible at this stage."], ['You\'re late again.', "I've noticed you've been arriving a bit late recently. Is everything OK?"], ['This is too expensive.', 'It seems slightly above our budget.'], ['I disagree.', 'I see where you\'re coming from, but have we considered…?']])}
      <h4>Công cụ làm mềm</h4><ul><li>Từ giảm nhẹ: <i>a bit, slightly, rather, quite</i></li><li>Modal: <i>might, could, would</i></li><li>Câu hỏi thay cho mệnh lệnh: <i>Would it be possible to…?</i></li><li>Phủ định tích cực: <i>not ideal</i> (thay vì bad), <i>not entirely convinced</i></li></ul>`,
    vocab: [
      w('diplomatic', '/ˌdɪpləˈmætɪk/', 'khéo léo, ngoại giao', '', ['Be diplomatic with clients.', '', 'Hãy khéo léo với khách hàng.']),
      w('slightly', '/ˈslaɪtli/', 'hơi, một chút', '', ['The price is slightly high.', '', 'Giá hơi cao.']),
      w('not ideal', '/nɑːt aɪˈdiːəl/', 'chưa lý tưởng', '', ["The timing isn't ideal.", '', 'Thời điểm chưa lý tưởng.']),
      w('at this stage', '/æt ðɪs steɪdʒ/', 'ở giai đoạn này', '', ["That won't be possible at this stage.", '', 'Ở giai đoạn này chưa thể.']),
      w('convinced', '/kənˈvɪnst/', 'bị thuyết phục, tin chắc', '', ["I'm not entirely convinced.", '', 'Tôi chưa hoàn toàn bị thuyết phục.']),
      w('where you\'re coming from', '/wer jʊr ˈkʌmɪŋ frʌm/', 'lý do/quan điểm của bạn', '', ["I see where you're coming from.", '', 'Tôi hiểu lý do của bạn.']),
      w('would it be possible', '/wʊd ɪt biː ˈpɑːsəbl/', 'liệu có thể', '', ['Would it be possible to extend the deadline?', '', 'Liệu có thể gia hạn không?']),
      w('tactful', '/ˈtæktfl/', 'tế nhị', '', ['Her answer was very tactful.', '', 'Câu trả lời của cô ấy rất tế nhị.']),
      w('bad news', '/bæd nuːz/', 'tin xấu', '', ["I'm afraid I have some bad news.", '', 'E là tôi có tin không vui.']),
      w('reconsider', '/ˌriːkənˈsɪdər/', 'cân nhắc lại', '', ['Could we reconsider the budget?', '', 'Ta cân nhắc lại ngân sách được không?'])
    ],
    qs: [
      ['mc', 'Nói ngoại giao thay cho "Your idea is bad."', "I'm not sure this idea would work as well as we'd hope.", ['Your idea is terrible.', 'Bad idea.', 'No way.'], 'Làm mềm.'],
      ['mc', 'Thay "No, we can\'t" bằng?', "Unfortunately, that won't be possible at this stage.", ["We can't, stop asking.", 'Never.', 'Impossible, sorry not sorry.'], 'Lịch sự.'],
      ['mc', 'Không đồng ý cấp trên khéo léo?', "I see where you're coming from, but have we considered the cost?", ["You're wrong, boss.", 'That makes no sense.', 'I refuse.'], 'Công nhận + câu hỏi.'],
      ['mc', '___ it be possible to move the meeting to Friday?', 'Would', ['Will', 'Is', 'Does'], 'Would it be possible…?'],
      ['mc', 'tactful nghĩa là?', 'tế nhị', ['chiến thuật', 'thô lỗ', 'nhanh nhẹn'], 'tactful.'],
      ['hear', "I'm afraid I have some bad news. The shipment will be slightly delayed.", 'Tin không vui: lô hàng sẽ trễ một chút.', ['Lô hàng đến sớm.', 'Lô hàng bị huỷ.', 'Tin tốt: giao đúng hạn.'], 'slightly delayed.'],
      ['order', 'Sắp xếp: “Tôi chưa hoàn toàn bị thuyết phục.”', ["I'm", 'not', 'entirely', 'convinced.'], "I'm not entirely convinced."]
    ],
    noi: [["I'm not *sure* this plan would *work* → as *well* as we'd *hope*. ↘", 'Tôi không chắc kế hoạch hiệu quả như mong đợi.'], ['Would it be *possible* to *extend* the *deadline*? ↗', 'Liệu có thể gia hạn không?'], ["I see where you're *coming* *from*, → but have we *considered* the *cost*? ↗", 'Tôi hiểu lý do của anh, nhưng ta đã tính chi phí chưa?']],
    hoithoai: {
      ctx: 'Giám đốc người nước ngoài đề xuất triển khai phần mềm mới trong 2 tuần – em thấy quá gấp.', vai: 'Giám đốc hỏi ý, em phản biện khéo.', ai: '👨‍💼 CEO',
      luot: [
        T(["I want the new software live in all branches in two weeks. What do you think?", '', 'Tôi muốn phần mềm mới chạy ở mọi chi nhánh trong 2 tuần. Bạn nghĩ sao?'], ["I see where you're coming from, but I'm not entirely convinced two weeks is enough for training.", 'Tôi hiểu lý do, nhưng chưa tin 2 tuần đủ để đào tạo.', 'Công nhận + phản biện mềm.'], ["That's impossible.", 'Quá thẳng.'], ['Yes, no problem.', 'Đồng ý dù thấy rủi ro.']),
        T(['But our competitors are moving fast.', '', 'Nhưng đối thủ đang đi nhanh.'], ['That\'s true. Would it be possible to start with five pilot branches and expand next month?', 'Đúng vậy. Liệu ta có thể bắt đầu với 5 chi nhánh thí điểm và mở rộng tháng sau không?', 'Đề xuất thay thế dạng câu hỏi.'], ['Competitors are not important.', 'Gạt bỏ ý cấp trên.'], ['You should listen to me.', 'Không phù hợp.']),
        T(["Hmm. What's the risk if we go all at once?", '', 'Rủi ro nếu làm cùng lúc?'], ["If something goes wrong, it might affect all customers at the same time, which wouldn't be ideal.", 'Nếu có sự cố, có thể ảnh hưởng mọi khách cùng lúc, điều không lý tưởng.', 'Nói giảm + rủi ro rõ.'], ['Everything will crash, 100%.', 'Phóng đại.'], ['No risk at all.', 'Thiếu trung thực.'])
      ], ket: 'Em đã phản biện cấp trên khéo léo và xây dựng.'
    },
    tom: ['Nói thẳng → ngoại giao', 'Công cụ làm mềm', 'Phản biện cấp trên'], nguphap: 'Modal làm mềm; câu hỏi thay mệnh lệnh', phatam: 'Giọng hạ, nhịp chậm khi báo tin xấu',
    loi: ['Quá thẳng', 'Quá mơ hồ đến mức không ai hiểu'], btvn: ['Viết lại 8 câu thẳng thành câu ngoại giao', 'Viết email báo tin xấu cho khách 120 từ', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 24 ================= */
  const d24 = {
    n: 24, ten: P[23].ten, kinds: K,
    muc: 'Kể chuyện cuốn hút theo cấu trúc bối cảnh – xung đột – cao trào – kết quả – bài học; dùng thì quá khứ đa dạng.',
    hoc: `${tbl(['Phần', 'Câu mẫu'], [['Mở đầu gây chú ý', 'I\'ll never forget the day when…'], ['Bối cảnh', 'It was a Friday afternoon, and we were preparing for…'], ['Xung đột', 'Suddenly, / Out of nowhere, / To make matters worse, …'], ['Cao trào', 'Just as we were about to give up, …'], ['Kết quả', 'In the end, / Eventually, …'], ['Bài học', 'Looking back, what I learned was…']])}
      ${tip('🎬 Kết hợp: quá khứ tiếp diễn (bối cảnh), quá khứ đơn (sự kiện), quá khứ hoàn thành (hồi tưởng). Thêm cảm xúc và chi tiết giác quan.')}`,
    vocab: [
      w("I'll never forget", '/aɪl ˈnevər fərˈɡet/', 'tôi sẽ không bao giờ quên', '', ["I'll never forget my first day at work.", '', 'Tôi không bao giờ quên ngày đầu đi làm.']),
      w('out of nowhere', '/aʊt əv ˈnoʊwer/', 'bất thình lình', '', ['Out of nowhere, the lights went off.', '', 'Bất thình lình đèn tắt.']),
      w('to make matters worse', '/tə meɪk ˈmætərz wɜːrs/', 'tệ hơn nữa là', '', ['To make matters worse, it started raining.', '', 'Tệ hơn nữa, trời bắt đầu mưa.']),
      w('about to', '/əˈbaʊt tuː/', 'sắp sửa', '', ['We were about to leave when he called.', '', 'Chúng tôi sắp đi thì anh ấy gọi.']),
      w('eventually', '/ɪˈventʃuəli/', 'cuối cùng', '', ['Eventually, we found a solution.', '', 'Cuối cùng chúng tôi tìm ra giải pháp.']),
      w('panic', '/ˈpænɪk/', 'hoảng loạn', '', ['Everyone started to panic.', '', 'Mọi người bắt đầu hoảng.']),
      w('relief', '/rɪˈliːf/', 'sự nhẹ nhõm', '', ['What a relief!', '', 'Thật nhẹ nhõm!']),
      w('nerve-racking', '/ˈnɜːrv rækɪŋ/', 'căng thẳng, hồi hộp', '', ['It was a nerve-racking moment.', '', 'Đó là khoảnh khắc căng thẳng.']),
      w('looking back', '/ˈlʊkɪŋ bæk/', 'nhìn lại', '', ['Looking back, it was a great experience.', '', 'Nhìn lại, đó là trải nghiệm tuyệt vời.']),
      w('vivid', '/ˈvɪvɪd/', 'sống động', '', ['She told a vivid story.', '', 'Cô ấy kể câu chuyện sống động.'])
    ],
    qs: [
      ['mc', 'We ___ the presentation when the power went off.', 'were preparing', ['prepared', 'had prepared', 'prepare'], 'Bối cảnh → tiếp diễn.'],
      ['mc', "Just as we were ___ to give up, the system came back online.", 'about', ['going', 'near', 'ready about'], 'be about to.'],
      ['mc', '___, the client arrived an hour early!', 'To make matters worse', ['Looking back', 'Eventually', 'In conclusion'], 'Tệ hơn nữa.'],
      ['mc', 'Câu mở đầu câu chuyện cuốn hút?', "I'll never forget the day our whole system crashed during a live demo.", ['This is a story.', 'I want to tell something.', 'Story time now.'], 'Gây chú ý.'],
      ['mc', 'nerve-racking nghĩa là?', 'căng thẳng, hồi hộp', ['thư giãn', 'nhàm chán', 'đau thần kinh'], 'nerve-racking.'],
      ['hear', "Looking back, what I learned was to always have a backup plan.", 'Bài học: luôn có phương án dự phòng.', ['Không cần kế hoạch.', 'Luôn làm một mình.', 'Đừng thuyết trình.'], 'backup plan.'],
      ['order', 'Sắp xếp: “Cuối cùng chúng tôi tìm ra giải pháp.”', ['Eventually,', 'we', 'found', 'a solution.'], 'Eventually, we found a solution.']
    ],
    noi: [["I'll *never* *forget* the day → when our system *crashed* during a *live* *demo*. ↘", 'Không bao giờ quên ngày hệ thống sập giữa buổi demo.'], ['*Just* as we were about to *give* *up*, → it came back *online*. ↘', 'Đúng lúc sắp bỏ cuộc thì hệ thống chạy lại.'], ['*Looking* *back*, → what I *learned* was → to always have a *backup* *plan*. ↘', 'Nhìn lại, bài học là luôn có phương án dự phòng.']],
    hoithoai: {
      ctx: 'Tiệc cuối năm, đồng nghiệp nước ngoài mời em kể một kỷ niệm đáng nhớ.', vai: 'Emma hỏi dồn, em kể chuyện.', ai: '🎉 Emma',
      luot: [
        T(["Tell us a memorable work story!", '', 'Kể chuyện công việc đáng nhớ đi!'], ["I'll never forget the day we were opening a new branch, and out of nowhere the whole network went down.", 'Tôi không quên ngày khai trương chi nhánh mới, bất thình lình toàn bộ mạng sập.', 'Mở đầu + xung đột.'], ['One day network down.', 'Thiếu hấp dẫn.'], ['I forget the day.', 'Sai nghĩa.']),
        T(["Oh no! What did you do?", '', 'Ôi! Rồi bạn làm gì?'], ["Everyone started to panic. To make matters worse, the bank director had just arrived!", 'Mọi người hoảng. Tệ hơn nữa, giám đốc vừa đến!', 'Tăng kịch tính + quá khứ hoàn thành.'], ['We panic and director come.', 'Sai thì.'], ['It was relaxing.', 'Không hợp.']),
        T(['And then?', '', 'Rồi sao?'], ["Just as we were about to cancel the ceremony, we found a loose cable. What a relief! Looking back, I learned to always double-check everything.", 'Đúng lúc sắp huỷ lễ, chúng tôi tìm ra dây cáp lỏng. Thật nhẹ nhõm! Nhìn lại, bài học là luôn kiểm tra kỹ.', 'Cao trào + kết + bài học.'], ['Then we go home.', 'Hụt hẫng.'], ['Eventually nothing.', 'Thiếu kết.'])
      ], ket: 'Em đã kể một câu chuyện cuốn hút có bài học.'
    },
    tom: ['Cấu trúc 6 phần', 'Từ tạo kịch tính', 'Phối hợp thì quá khứ'], nguphap: 'Quá khứ đơn / tiếp diễn / hoàn thành; be about to', phatam: 'Thay đổi nhịp và âm lượng ở cao trào',
    loi: ['Kể đều đều không cao trào', 'Dùng hiện tại khi kể'], btvn: ['Viết câu chuyện 200 từ về một sự cố em đã xử lý', 'Ghi âm kể chuyện 2 phút', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 25 ================= */
  const d25 = {
    n: 25, ten: P[24].ten, kinds: K,
    muc: 'Lập luận chặt chẽ (claim – reason – evidence), phản bác lịch sự, nhượng bộ rồi phản biện.',
    hoc: `${tbl(['Bước', 'Mẫu câu'], [['Khẳng định', 'I would argue that…'], ['Lý do', 'The main reason is that…'], ['Bằng chứng', 'Research shows that… / For instance, in Singapore…'], ['Nhượng bộ', 'Admittedly, … / It is true that…'], ['Phản bác', 'However, this overlooks the fact that… / That argument doesn\'t take into account…'], ['Kết', 'So on balance, I believe…']])}
      ${say('Admittedly, a four-day work week could reduce output in some industries. However, this overlooks the fact that well-rested employees are often more productive.', 'Phải thừa nhận tuần làm 4 ngày có thể giảm sản lượng ở vài ngành. Tuy nhiên điều đó bỏ qua thực tế là nhân viên được nghỉ ngơi thường làm việc hiệu quả hơn.')}`,
    vocab: [
      w('admittedly', '/ədˈmɪtɪdli/', 'phải thừa nhận rằng', '', ['Admittedly, it is expensive.', '', 'Phải thừa nhận nó đắt.']),
      w('overlook the fact', '/ˌoʊvərˈlʊk ðə fækt/', 'bỏ qua thực tế', '', ['This overlooks the fact that costs are rising.', '', 'Điều này bỏ qua thực tế chi phí đang tăng.']),
      w('take into account', '/teɪk ˈɪntuː əˈkaʊnt/', 'tính đến', '', ["We must take inflation into account.", '', 'Phải tính đến lạm phát.']),
      w('on balance', '/ɑːn ˈbæləns/', 'cân nhắc mọi mặt', '', ['On balance, I support the idea.', '', 'Cân nhắc mọi mặt, tôi ủng hộ.']),
      w('counter-argument', '/ˈkaʊntər ˈɑːrɡjumənt/', 'lập luận phản bác', '', ["Let's look at the counter-argument.", '', 'Hãy xem lập luận phản bác.']),
      w('valid', '/ˈvælɪd/', 'hợp lý, có giá trị', '', ["That's a valid point.", '', 'Đó là ý hợp lý.']),
      w('flawed', '/flɔːd/', 'có lỗ hổng', '', ['The argument is flawed.', '', 'Lập luận có lỗ hổng.']),
      w('debate', '/dɪˈbeɪt/', 'tranh luận', '', ['There is a debate about AI.', '', 'Đang có tranh luận về AI.']),
      w('assume', '/əˈsuːm/', 'giả định', '', ["You're assuming that everyone has internet.", '', 'Bạn giả định ai cũng có Internet.']),
      w('four-day work week', '/fɔːr deɪ wɜːrk wiːk/', 'tuần làm việc 4 ngày', '', ['Some companies are testing a four-day work week.', '', 'Vài công ty thử tuần làm 4 ngày.'])
    ],
    qs: [
      ['mc', 'Từ nhượng bộ trước khi phản bác?', 'Admittedly,', ['Therefore,', 'For instance,', 'Firstly,'], 'Nhượng bộ.'],
      ['mc', 'That argument doesn\'t take ___ account the cost of training.', 'into', ['in', 'on', 'to'], 'take into account.'],
      ['mc', '___, I believe the benefits are greater.', 'On balance', ['On contrast', 'In balance', 'At balance'], 'On balance.'],
      ['mc', 'Phản bác lịch sự?', 'However, this overlooks the fact that many people still prefer cash.', ['That is stupid.', 'You know nothing.', 'Wrong!'], 'Lịch sự, có lý.'],
      ['mc', 'flawed nghĩa là?', 'có lỗ hổng', ['hoàn hảo', 'mạnh mẽ', 'phổ biến'], 'flawed.'],
      ['hear', "Admittedly, it may reduce output at first. However, research shows rested employees are more productive.", 'Thừa nhận có thể giảm lúc đầu; nhưng nhân viên nghỉ ngơi hiệu quả hơn.', ['Chắc chắn giảm năng suất.', 'Không có nghiên cứu.', 'Nhân viên làm nhiều hơn thì tốt.'], 'Admittedly … However…'],
      ['order', 'Sắp xếp: “Đó là ý hợp lý.”', ["That's", 'a', 'valid', 'point.'], "That's a valid point."]
    ],
    noi: [['I would *argue* that → a four-day *week* → could *improve* *productivity*. ↘', 'Tôi cho rằng tuần 4 ngày có thể tăng năng suất.'], ['*Admittedly*, → it may *not* suit every *industry*. ↘', 'Phải thừa nhận nó không hợp mọi ngành.'], ['On *balance*, → I *support* the *idea*. ↘', 'Cân nhắc mọi mặt, tôi ủng hộ.']],
    hoithoai: {
      ctx: 'Tranh luận nhóm: "Banks should close most physical branches within 10 years."', vai: 'Đối phương lập luận, em phản bác.', ai: '🎙️ Opponent',
      luot: [
        T(['Physical branches are outdated. Everyone uses apps now.', '', 'Chi nhánh vật lý lỗi thời. Ai cũng dùng app.'], ["That's a valid point for young people. However, it overlooks the fact that many elderly and rural customers still depend on branches.", 'Đúng với người trẻ. Tuy nhiên, điều đó bỏ qua thực tế nhiều khách lớn tuổi và vùng nông thôn vẫn cần chi nhánh.', 'Công nhận + phản bác.'], ["You're wrong.", 'Không lập luận.'], ['Yes, close all.', 'Không phản biện.']),
        T(['But branches are very expensive to run.', '', 'Nhưng chi nhánh rất tốn chi phí.'], ["Admittedly, they are. But we should also take into account the trust and complex services that branches provide.", 'Phải thừa nhận vậy. Nhưng cũng nên tính đến niềm tin và dịch vụ phức tạp chi nhánh mang lại.', 'Nhượng bộ + phản biện.'], ['Money is not important.', 'Thiếu thuyết phục.'], ['Admittedly, close them.', 'Mâu thuẫn.'])
        , T(['So what is your conclusion?', '', 'Vậy kết luận của bạn?'], ['On balance, I believe banks should reduce, not close, their branches and turn them into advice centres.', 'Cân nhắc mọi mặt, ngân hàng nên giảm, không đóng, chi nhánh và biến chúng thành trung tâm tư vấn.', 'Kết luận cân bằng + đề xuất.'], ['I have no conclusion.', 'Không kết luận.'], ['Close everything tomorrow.', 'Cực đoan.'])
      ], ket: 'Em đã tranh luận có lập luận, nhượng bộ và phản bác.'
    },
    tom: ['Claim – reason – evidence', 'Admittedly… However…', 'On balance'], nguphap: 'Câu phức lập luận; take into account', phatam: 'Nhấn từ đối lập: However, Admittedly',
    loi: ['Phản bác không có lý do', 'Công kích người thay vì lập luận'], btvn: ['Viết đoạn tranh luận 200 từ cho một chủ đề tự chọn', 'Ghi âm phản bác 1 phút', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 26 ================= */
  const d26 = {
    n: 26, ten: P[25].ten, kinds: K,
    muc: 'Hiểu khác biệt văn hoá giao tiếp (trực tiếp – gián tiếp, giờ giấc, xưng hô, small talk) khi làm việc với đối tác quốc tế.',
    hoc: `${tbl(['Khía cạnh', 'Văn hoá trực tiếp (Mỹ, Đức, Úc)', 'Văn hoá gián tiếp (Việt Nam, Nhật, Hàn)'], [['Từ chối', 'Nói rõ "No, that won\'t work."', 'Nói vòng: "It may be difficult…"'], ['Góp ý', 'Thẳng, tập trung vấn đề', 'Riêng tư, tế nhị, giữ thể diện'], ['Thời gian', 'Đúng giờ tuyệt đối, lịch họp chặt', 'Linh hoạt hơn, quan hệ trước công việc'], ['Xưng hô', 'Gọi tên riêng nhanh (Call me John)', 'Dùng chức danh, kính ngữ'], ['Small talk', 'Thời tiết, thể thao, cuối tuần', 'Gia đình, quê quán (nhưng tránh hỏi lương, tuổi với người phương Tây)']])}
      ${tip('🌏 Câu hỏi nên tránh với đối tác phương Tây khi mới quen: How much do you earn? How old are you? Why aren\'t you married?')}`,
    vocab: [
      w('cross-cultural', '/ˌkrɔːs ˈkʌltʃərəl/', 'liên văn hoá', '', ['Cross-cultural skills are important.', '', 'Kỹ năng liên văn hoá rất quan trọng.']),
      w('direct', '/dəˈrekt/', 'thẳng thắn, trực tiếp', '', ['Germans tend to be direct.', '', 'Người Đức thường thẳng thắn.']),
      w('indirect', '/ˌɪndəˈrekt/', 'gián tiếp', '', ['Indirect communication is common in Asia.', '', 'Giao tiếp gián tiếp phổ biến ở châu Á.']),
      w('save face', '/seɪv feɪs/', 'giữ thể diện', '', ['Give feedback privately so he can save face.', '', 'Góp ý riêng để anh ấy giữ thể diện.']),
      w('small talk', '/smɔːl tɔːk/', 'chuyện phiếm xã giao', '', ['Small talk helps build relationships.', '', 'Chuyện phiếm giúp xây dựng quan hệ.']),
      w('punctual', '/ˈpʌŋktʃuəl/', 'đúng giờ', '', ['Swiss people are very punctual.', '', 'Người Thuỵ Sĩ rất đúng giờ.']),
      w('etiquette', '/ˈetɪket/', 'phép lịch sự, nghi thức', '', ['Learn the business etiquette before you go.', '', 'Học phép lịch sự kinh doanh trước khi đi.']),
      w('stereotype', '/ˈsteriətaɪp/', 'định kiến', '', ['Avoid cultural stereotypes.', '', 'Tránh định kiến văn hoá.']),
      w('misinterpret', '/ˌmɪsɪnˈtɜːrprɪt/', 'hiểu sai', '', ['Silence can be misinterpreted.', '', 'Im lặng có thể bị hiểu sai.']),
      w('rapport', '/ræˈpɔːr/', 'mối quan hệ thân thiện, sự hoà hợp', 't câm.', ['Build rapport with your clients.', '', 'Xây dựng quan hệ tốt với khách.'])
    ],
    qs: [
      ['mc', 'Câu hỏi nên TRÁNH khi mới gặp đối tác phương Tây?', 'How much do you earn?', ['How was your flight?', 'Have you tried Vietnamese coffee?', 'How long are you staying?'], 'Tránh hỏi thu nhập.'],
      ['mc', 'Góp ý riêng để người khác ___.', 'save face', ['lose face', 'face up', 'make face'], 'giữ thể diện.'],
      ['mc', '“punctual” nghĩa là?', 'đúng giờ', ['đúng chính tả', 'chính xác số liệu', 'đúng luật'], 'punctual.'],
      ['mc', 'Một đối tác Úc nói "Call me Jack." Em nên?', 'Gọi anh ấy là Jack.', ['Gọi Mr. Jack Smith mãi.', 'Không gọi tên.', 'Gọi sếp Jack.'], 'Theo cách họ muốn.'],
      ['mc', 'rapport đọc là?', '/ræˈpɔːr/ (t câm)', ['/ˈræpɔːrt/', '/ˈreɪpɔːrt/', '/ræˈpɔːrt/'], 't câm.'],
      ['hear', "In some cultures, silence in a meeting means agreement, but in others it can be misinterpreted as disinterest.", 'Im lặng có nơi là đồng ý, có nơi bị hiểu là không quan tâm.', ['Im lặng luôn là đồng ý.', 'Im lặng luôn bất lịch sự.', 'Không ai để ý im lặng.'], 'misinterpreted.'],
      ['order', 'Sắp xếp: “Tránh định kiến văn hoá.”', ['Avoid', 'cultural', 'stereotypes.'], 'Avoid cultural stereotypes.']
    ],
    noi: [['*Please*, → call me *Minh*. ↘', 'Cứ gọi tôi là Minh.'], ['How was your *flight*? ↘', 'Chuyến bay của anh thế nào?'], ['Is this your *first* *time* in *Vietnam*? ↗', 'Đây là lần đầu anh đến Việt Nam?']],
    hoithoai: {
      ctx: 'Em đón đối tác Đức đến Việt Nam lần đầu, trên xe từ sân bay về.', vai: 'Ông Klaus nói chuyện, em giao tiếp đúng văn hoá.', ai: '🇩🇪 Klaus',
      luot: [
        T(["Thank you for picking me up. Sorry, I'm a bit tired.", '', 'Cảm ơn đã đón. Xin lỗi, tôi hơi mệt.'], ["Not at all. How was your flight? Is this your first time in Vietnam?", 'Không có gì. Chuyến bay thế nào? Lần đầu ông đến Việt Nam?', 'Small talk phù hợp.'], ['How old are you? Are you married?', 'Câu hỏi riêng tư.'], ['How much is your salary?', 'Rất không phù hợp.']),
        T(["Yes, first time. By the way, our meeting tomorrow starts at 9 sharp, right?", '', 'Lần đầu. Nhân tiện, mai họp đúng 9 giờ phải không?'], ["Yes, 9 a.m. sharp. I'll pick you up at 8:30 so we arrive on time.", 'Vâng, đúng 9 giờ. Tôi đón ông lúc 8:30 để đến đúng giờ.', 'Tôn trọng tính đúng giờ.'], ['Around 9 or 10, no problem.', 'Không phù hợp văn hoá đúng giờ.'], ['Maybe 9.', 'Mơ hồ.'])
        , T(["Good. In Germany we like to get straight to business. Is that OK here?", '', 'Ở Đức chúng tôi thích vào việc ngay. Ở đây có ổn không?'], ["Of course. Our director may start with a little small talk to build rapport, but then we'll go straight to the agenda.", 'Tất nhiên. Giám đốc có thể bắt đầu bằng chút chuyện phiếm để tạo thiện cảm, sau đó vào chương trình ngay.', 'Giải thích khác biệt khéo léo.'], ['No, you must talk about family first.', 'Áp đặt.'], ['Germans are rude.', 'Định kiến.'])
      ], ket: 'Em đã giao tiếp nhạy bén về văn hoá với đối tác quốc tế.'
    },
    tom: ['Trực tiếp vs gián tiếp', 'Small talk an toàn', 'Đúng giờ, xưng hô, giữ thể diện'], nguphap: 'Câu hỏi xã giao; tend to', phatam: 'rapport /ræˈpɔːr/, etiquette /ˈetɪket/',
    loi: ['Hỏi chuyện riêng tư', 'Định kiến văn hoá'], btvn: ['Liệt kê 5 chủ đề small talk an toàn và 5 chủ đề nên tránh', 'Viết email chào đón đối tác nước ngoài 100 từ', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 27 ================= */
  const d27 = {
    n: 27, ten: P[26].ten, kinds: K,
    muc: 'Nâng câu trả lời IELTS Speaking lên band 6.5: kéo dài ý, từ vựng ít phổ biến, ngữ pháp đa dạng, sửa lỗi tự nhiên.',
    hoc: `${tbl(['Tiêu chí', 'Band 5.5', 'Band 6.5'], [['Fluency', 'Ngập ngừng, lặp lại', 'Nói liền mạch, dùng từ nối, tự sửa tự nhiên'], ['Vocabulary', 'Từ cơ bản: good, bad, very', 'Từ cụ thể + collocation: incredibly rewarding, a steep learning curve'], ['Grammar', 'Câu đơn, lỗi thì', 'Câu phức (điều kiện, mệnh đề quan hệ), ít lỗi'], ['Pronunciation', 'Khó hiểu vài chỗ', 'Dễ hiểu, có ngữ điệu, nhấn đúng']])}
      <h4>Kỹ thuật kéo dài câu trả lời Part 3 (A-R-E-A)</h4><p><b>A</b>nswer → <b>R</b>eason → <b>E</b>xample → <b>A</b>lternative (mặt khác / tương lai).</p>
      ${say("Well, I'd say it depends. Generally, I think young people adapt to technology faster because they've grown up with it. For example, my nephew learned to code at ten. That said, older generations are catching up quickly, especially since the pandemic.", 'Tôi cho rằng còn tuỳ. Nói chung người trẻ thích nghi công nghệ nhanh hơn vì lớn lên cùng nó. Ví dụ cháu tôi học lập trình năm 10 tuổi. Tuy vậy, thế hệ lớn tuổi đang theo kịp nhanh, nhất là từ sau đại dịch.')}`,
    vocab: [
      w('it depends', '/ɪt dɪˈpendz/', 'còn tuỳ', '', ["Well, I'd say it depends.", '', 'Tôi cho là còn tuỳ.']),
      w('that said', '/ðæt sed/', 'dù vậy', '', ['That said, there are some risks.', '', 'Dù vậy, có một số rủi ro.']),
      w('catch up', '/kætʃ ʌp/', 'bắt kịp', '', ['Older people are catching up.', '', 'Người lớn tuổi đang bắt kịp.']),
      w('rewarding', '/rɪˈwɔːrdɪŋ/', 'đáng giá, mang lại thoả mãn', '', ['My job is incredibly rewarding.', '', 'Công việc của tôi rất đáng giá.']),
      w('steep learning curve', '/stiːp ˈlɜːrnɪŋ kɜːrv/', 'phải học rất nhiều trong thời gian ngắn', '', ['It was a steep learning curve.', '', 'Phải học rất nhiều trong thời gian ngắn.']),
      w('generally speaking', '/ˈdʒenrəli ˈspiːkɪŋ/', 'nói chung', '', ['Generally speaking, people are friendly.', '', 'Nói chung mọi người thân thiện.']),
      w('as far as I know', '/æz fɑːr æz aɪ noʊ/', 'theo những gì tôi biết', '', ['As far as I know, it is free.', '', 'Theo tôi biết thì miễn phí.']),
      w("what I mean is", '/wɑːt aɪ miːn ɪz/', 'ý tôi là', 'Dùng để tự sửa / làm rõ.', ["What I mean is, it's not always easy.", '', 'Ý tôi là không phải lúc nào cũng dễ.']),
      w('to be honest', '/tə biː ˈɑːnɪst/', 'thành thật mà nói', '', ["To be honest, I prefer working alone.", '', 'Thật lòng tôi thích làm một mình.']),
      w('generation', '/ˌdʒenəˈreɪʃn/', 'thế hệ', '', ['Each generation has different values.', '', 'Mỗi thế hệ có giá trị khác nhau.'])
    ],
    qs: [
      ['mc', 'Kỹ thuật A-R-E-A gồm?', 'Answer – Reason – Example – Alternative', ['Ask – Repeat – End – Again', 'Agree – Refuse – Explain – Apologise', 'Answer – Read – Explain – Ask'], 'A-R-E-A.'],
      ['mc', 'Từ vựng band 6.5 thay cho "very good job"?', 'incredibly rewarding', ['very very good', 'good good', 'so nice job'], 'Cụ thể hơn.'],
      ['mc', '“That said, …” dùng để?', 'đưa ý đối lập nhẹ', ['kết thúc bài', 'nhắc lại câu hỏi', 'xin lỗi'], 'Dù vậy.'],
      ['mc', 'Tự sửa câu tự nhiên bằng?', "What I mean is, …", ['Sorry sorry sorry.', 'I stop.', 'Um um um.'], 'Tự sửa.'],
      ['mc', 'steep learning curve nghĩa là?', 'phải học rất nhiều trong thời gian ngắn', ['đường cong dốc', 'học rất chậm', 'bài học dễ'], 'idiom.'],
      ['hear', "Generally speaking, young people adapt faster. That said, older generations are catching up quickly.", 'Người trẻ thích nghi nhanh hơn; dù vậy người lớn tuổi đang bắt kịp.', ['Người lớn tuổi nhanh hơn.', 'Không ai thích nghi.', 'Người trẻ đang bắt kịp.'], 'That said = đối lập nhẹ.'],
      ['order', 'Sắp xếp: “Thành thật mà nói, tôi thích làm một mình.”', ['To be honest,', 'I', 'prefer', 'working alone.'], 'To be honest, I prefer working alone.']
    ],
    noi: [["*Well*, → I'd say it *depends*. ↘", 'Tôi cho rằng còn tuỳ.'], ['*Generally* speaking, → young people *adapt* *faster*. ↘', 'Nói chung người trẻ thích nghi nhanh hơn.'], ['*That* said, → older generations are *catching* *up*. ↘', 'Dù vậy, người lớn tuổi đang bắt kịp.']],
    hoithoai: {
      ctx: 'Thi nói IELTS Part 3 chủ đề "Work and technology". Mục tiêu: trả lời A-R-E-A.', vai: 'Giám khảo hỏi, em trả lời band 6.5.', ai: '👩‍🏫 Examiner',
      luot: [
        T(['Do you think people will work fewer hours in the future?', '', 'Bạn nghĩ tương lai người ta làm ít giờ hơn không?'], ["I'd say it depends on the industry. Generally speaking, automation will reduce routine work, so office staff might work fewer hours. That said, jobs like healthcare will probably stay demanding.", 'Còn tuỳ ngành. Nói chung tự động hoá giảm việc lặp lại nên nhân viên văn phòng có thể làm ít hơn. Dù vậy, ngành y tế có lẽ vẫn vất vả.', 'A-R-E-A đầy đủ.'], ['Yes. Fewer hours.', 'Quá ngắn.'], ['Maybe yes maybe no, I don\'t know.', 'Không phát triển ý.']),
        T(['Is it a good thing?', '', 'Đó có phải điều tốt?'], ["To be honest, mostly yes. People would have more time for family. What I mean is, a better work-life balance could make society healthier.", 'Thành thật, phần lớn là có. Mọi người có thêm thời gian cho gia đình. Ý tôi là cân bằng tốt hơn khiến xã hội khoẻ mạnh hơn.', 'Ý kiến + tự làm rõ.'], ['Good thing very good.', 'Lặp từ.'], ['It is good because good.', 'Vòng vo.']),
        T(['What skills will workers need?', '', 'Người lao động sẽ cần kỹ năng gì?'], ["Adaptability, above all. Technology changes so fast that it's a steep learning curve for everyone. For instance, I had to learn three new systems last year alone.", 'Khả năng thích nghi là trên hết. Công nghệ thay đổi nhanh nên ai cũng phải học rất nhiều. Ví dụ năm ngoái riêng tôi đã học 3 hệ thống mới.', 'Từ vựng + ví dụ cá nhân.'], ['Computer skills.', 'Quá ngắn.'], ['Skills are skill.', 'Vô nghĩa.'])
      ], ket: 'Em đã trả lời Part 3 theo hướng band 6.5.'
    },
    tom: ['4 tiêu chí chấm nói', 'A-R-E-A', 'Cụm tự nhiên: it depends, that said, what I mean is'], nguphap: 'Câu phức đa dạng', phatam: 'Ngữ điệu tự nhiên, nhấn từ khoá',
    loi: ['Trả lời 1 câu', 'Lặp very / good'], btvn: ['Làm 3 đề Luyện nói, áp dụng A-R-E-A', 'Sao chép bản ghi nhờ gia sư AI chấm band', 'Học 10 cụm từ band 6.5+']
  };

  /* ================= NGÀY 28 ================= */
  const d28 = {
    n: 28, ten: P[27].ten, tong: 1, kt: { n: 20, min: 20 }, kinds: ['listen', 'listenWord', 'listen', 'meaning', 'write'],
    muc: 'Nghe bài giảng, podcast: nhận ra cấu trúc bài, định nghĩa, ví dụ, quan điểm người nói; điền thông tin vào ghi chú.',
    hoc: `${tbl(['Dấu hiệu', 'Báo hiệu'], [['What I want to focus on today is…', 'chủ đề chính'], ['By X, I mean… / X refers to…', 'định nghĩa'], ['Take … for example', 'ví dụ'], ['This is crucial because…', 'ý quan trọng'], ['Personally, I\'m sceptical about…', 'quan điểm người nói'], ['Let me recap…', 'tóm tắt']])}
      ${tip('🎧 Nguồn luyện miễn phí: BBC Learning English, TED Talks (bật phụ đề tiếng Anh), podcast "6 Minute English". Nghe 2 lần: lần 1 không phụ đề, lần 2 có.')}`,
    vocab: [
      w('focus on', '/ˈfoʊkəs ɑːn/', 'tập trung vào', '', ['Today I want to focus on AI.', '', 'Hôm nay tôi tập trung vào AI.']),
      w('refer to', '/rɪˈfɜːr tuː/', 'ám chỉ, chỉ', '', ['Fintech refers to financial technology.', '', 'Fintech chỉ công nghệ tài chính.']),
      w('crucial', '/ˈkruːʃl/', 'then chốt', '', ['This point is crucial.', '', 'Điểm này then chốt.']),
      w('sceptical', '/ˈskeptɪkl/', 'hoài nghi', '', ["I'm sceptical about that claim.", '', 'Tôi hoài nghi tuyên bố đó.']),
      w('recap', '/ˈriːkæp/', 'tóm tắt lại', '', ['Let me recap the main points.', '', 'Để tôi tóm tắt các ý chính.']),
      w('podcast', '/ˈpɑːdkæst/', 'chương trình âm thanh', '', ['I listen to a podcast every morning.', '', 'Sáng nào tôi cũng nghe podcast.']),
      w('fintech', '/ˈfɪntek/', 'công nghệ tài chính', '', ['Fintech is growing fast in Vietnam.', '', 'Fintech tăng trưởng nhanh ở Việt Nam.']),
      w('digital wallet', '/ˈdɪdʒɪtl ˈwɑːlɪt/', 'ví điện tử', '', ['Many people pay with a digital wallet.', '', 'Nhiều người thanh toán bằng ví điện tử.']),
      w('unbanked', '/ʌnˈbæŋkt/', 'chưa có tài khoản ngân hàng', '', ['Fintech helps the unbanked.', '', 'Fintech giúp người chưa có tài khoản.']),
      w('regulation', '/ˌreɡjuˈleɪʃn/', 'quy định', '', ['New regulations were introduced.', '', 'Quy định mới được ban hành.'])
    ],
    qs: [
      ['hear', "What I want to focus on today is how fintech is changing banking in Southeast Asia.", 'Chủ đề: fintech thay đổi ngân hàng ở Đông Nam Á.', ['Lịch sử ngân hàng châu Âu.', 'Cách mở tài khoản.', 'Giá cổ phiếu.'], 'focus on → chủ đề.'],
      ['hear', "By 'the unbanked', I mean adults who don't have an account at any financial institution.", 'Người chưa có tài khoản ở tổ chức tài chính nào.', ['Ngân hàng đóng cửa.', 'Người có nhiều tài khoản.', 'Ngân hàng không có tiền.'], 'By X, I mean… = định nghĩa.'],
      ['hear', "Take Vietnam, for example: digital wallet users more than doubled in five years.", 'Ví dụ Việt Nam: người dùng ví điện tử tăng hơn gấp đôi trong 5 năm.', ['Giảm một nửa.', 'Tăng gấp 5.', 'Không đổi.'], 'more than doubled.'],
      ['hear', "Personally, I'm sceptical about claims that cash will disappear within a decade.", 'Người nói hoài nghi việc tiền mặt biến mất trong 10 năm.', ['Người nói tin tiền mặt sẽ biến mất.', 'Người nói ủng hộ tiền mặt hoàn toàn.', 'Không có ý kiến.'], 'sceptical.'],
      ['hear', "Let me recap: growth is fast, regulation is catching up, and trust remains crucial.", 'Tóm tắt: tăng nhanh, quy định đang theo kịp, niềm tin then chốt.', ['Tăng chậm, không có quy định.', 'Niềm tin không quan trọng.', 'Quy định đã hoàn thiện.'], 'recap.'],
      ['mc', '“By X, I mean…” báo hiệu?', 'định nghĩa', ['ví dụ', 'kết luận', 'phản bác'], 'Định nghĩa.'],
      ['mc', 'sceptical nghĩa là?', 'hoài nghi', ['lạc quan', 'đồng ý', 'chuyên nghiệp'], 'sceptical.']
    ],
    noi: [['What I want to *focus* on *today* is… ↘', 'Điều tôi muốn tập trung hôm nay là…'], ["By the *unbanked*, → I *mean* adults without an *account*. ↘", 'Người chưa có tài khoản là người lớn không có tài khoản.'], ['Let me *recap* the *main* *points*. ↘', 'Để tôi tóm tắt các ý chính.']],
    hoithoai: {
      ctx: 'Em vừa nghe một bài giảng ngắn về fintech. Tắt "Hiện nghĩa tiếng Việt" và trả lời câu hỏi.', vai: 'Bạn học hỏi lại nội dung.', ai: '🎓 Classmate',
      luot: [
        T(["What was the lecture mainly about?", '', 'Bài giảng chủ yếu về gì?'], ['It focused on how fintech is changing banking in Southeast Asia.', 'Về việc fintech thay đổi ngân hàng ở Đông Nam Á.', 'Ý chính.'], ['About banks in Europe.', 'Sai.'], ['About many things.', 'Mơ hồ.']),
        T(['How did she define "the unbanked"?', '', 'Cô ấy định nghĩa "the unbanked" thế nào?'], ["Adults who don't have an account at any financial institution.", 'Người lớn không có tài khoản ở bất kỳ tổ chức tài chính nào.', 'Định nghĩa chính xác.'], ['People who work in banks.', 'Sai.'], ['Banks with no money.', 'Sai.']),
        T(['Did she think cash will disappear soon?', '', 'Cô ấy nghĩ tiền mặt sắp biến mất không?'], ["No, she was sceptical. She said trust and regulation still matter.", 'Không, cô ấy hoài nghi. Cô nói niềm tin và quy định vẫn quan trọng.', 'Nắm quan điểm người nói.'], ['Yes, within a year.', 'Sai.'], ['She didn\'t say anything.', 'Bỏ sót.'])
      ], ket: 'Em đã nghe hiểu bài giảng học thuật và quan điểm người nói.'
    },
    tom: ['Dấu hiệu cấu trúc bài giảng', 'Định nghĩa, ví dụ, quan điểm', 'Tóm tắt'], nguphap: 'refer to; By X, I mean…', phatam: 'Nghe nhấn ở từ báo hiệu',
    loi: ['Bỏ lỡ quan điểm người nói', 'Không phân biệt ví dụ và ý chính'], btvn: ['Nghe 1 TED Talk 10 phút, ghi 5 ý chính', 'Viết tóm tắt 100 từ', 'Làm phần nghe đề "IELTS mini 2"']
  };

  /* ================= NGÀY 29 ================= */
  const d29 = {
    n: 29, ten: P[28].ten, vocab: [], tong: 1, kt: { n: 30, min: 30 }, kinds: K,
    muc: 'Làm đề tổng hợp 30 câu và lập kế hoạch luyện đề 4 tuần trước kỳ thi thật.',
    hoc: `<h4>Kế hoạch 4 tuần trước kỳ thi</h4>${tbl(['Tuần', 'Việc cần làm'], [['1', '2 đề đầy đủ, ghi lỗi theo nhóm (từ vựng, ngữ pháp, nghe số…)'], ['2', 'Luyện kỹ năng yếu nhất mỗi ngày 30 phút; 2 bài viết có chấm'], ['3', 'Thi thử đúng giờ, đúng điều kiện; luyện nói với bạn/gia sư AI'], ['4', 'Ôn danh sách lỗi, ngủ đủ, không học mới; kiểm tra giấy tờ dự thi']])}
      ${tip('🏅 Vào <a href="#/tieng-anh/luyen-de">Luyện đề</a> làm "TOEIC mini 2" và "IELTS mini 2" ngay sau bài kiểm tra này, so sánh kết quả.')}`,
    qs: [['mc', 'Had we known, we ___ earlier.', 'would have left', ['would leave', 'left', 'will leave'], 'Đảo ngữ loại 3.'], ['mc', '___ the rain, the match continued.', 'Despite', ['Although', 'However', 'Whereas'], '+ danh từ.'], ['mc', 'Banks must comply with anti-money ___ rules.', 'laundering', ['washing', 'cleaning', 'laundry'], 'AML.']],
    noi: [["I'd say it *depends* on the *situation*. ↘", 'Còn tuỳ tình huống.'], ['On *balance*, → I *support* the *proposal*. ↘', 'Cân nhắc mọi mặt, tôi ủng hộ đề xuất.']],
    hoithoai: {
      ctx: 'Mô phỏng vòng phỏng vấn tuyển dụng vị trí chuyên viên khu vực (tiếng Anh B2).', vai: 'Hội đồng hỏi liên tục.', ai: '👔 Panel',
      luot: [
        T(["Tell us about a project that didn't go as planned.", '', 'Kể về một dự án không như kế hoạch.'], ["Last year we rolled out a new system too quickly. In hindsight, if we had piloted it first, we would have avoided two days of downtime.", 'Năm ngoái chúng tôi triển khai hệ thống quá nhanh. Nhìn lại, nếu thí điểm trước thì đã tránh được 2 ngày ngừng hệ thống.', 'Điều kiện loại 3 + thuật ngữ.'], ['Everything always goes well.', 'Không thật.'], ['A project failed, bad.', 'Thiếu chi tiết.']),
        T(['How do you handle disagreements with senior managers?', '', 'Bạn xử lý bất đồng với quản lý cấp cao thế nào?'], ["I try to be diplomatic. I'd say something like, 'I see where you're coming from, but have we considered the risks?'", 'Tôi cố khéo léo, ví dụ: "Tôi hiểu lý do của anh, nhưng ta đã tính rủi ro chưa?"', 'Ngôn ngữ ngoại giao.'], ['I tell them they are wrong.', 'Quá thẳng.'], ['I always agree.', 'Thiếu chính kiến.']),
        T(['Where do you see yourself in five years?', '', '5 năm nữa bạn ở đâu?'], ["By then, I hope I'll have led several regional projects and I'll be mentoring younger staff.", 'Khi đó tôi mong đã dẫn dắt vài dự án khu vực và đang hướng dẫn nhân viên trẻ.', 'Tương lai hoàn thành + tiếp diễn.'], ['I will be rich.', 'Không chuyên nghiệp.'], ['I don\'t know.', 'Thiếu định hướng.']),
        T(["Any questions for us?", '', 'Bạn có câu hỏi không?'], ["Yes. Could you tell me how success in this role is measured during the first year?", 'Có. Cho tôi biết thành công ở vị trí này được đo thế nào trong năm đầu?', 'Câu hỏi gián tiếp, chiến lược.'], ['No.', 'Bỏ lỡ cơ hội.'], ['What is the salary?', 'Chưa phù hợp thời điểm, thiếu khéo.'])
      ], ket: '🎉 Em đã vượt qua vòng phỏng vấn mô phỏng B2!'
    },
    tom: ['Đề tổng hợp 30 câu', 'Kế hoạch 4 tuần trước thi'], nguphap: 'Tổng ôn B2', phatam: 'Nói liền mạch, tự tin',
    loi: ['Xem lại câu sai, phân nhóm lỗi'], btvn: ['Làm "TOEIC mini 2" và "IELTS mini 2"', 'Lập kế hoạch 4 tuần cho kỳ thi em nhắm tới', 'Ôn thẻ "Từ chưa nhớ"']
  };

  /* ================= NGÀY 30 ================= */
  const d30 = {
    n: 30, ten: P[29].ten, vocab: [], tong: 1, kt: { n: 30, min: 30 }, kinds: K,
    muc: 'Kiểm tra cuối khoá B2, tự đánh giá, chọn hướng đi lên C1.',
    hoc: `<h4>1. Bài kiểm tra cuối khoá</h4><p><b>30 câu · 30 phút</b> lấy từ toàn bộ 30 ngày B2. Đạt ≥ 7 điểm là đủ nền sang C1.</p>
      <h4>2. Mốc B2</h4>${tbl(['Kỹ năng', 'Em làm được'], [['Nghe', 'Hiểu bài giảng, podcast, cuộc họp tốc độ tự nhiên về chủ đề quen thuộc.'], ['Nói', 'Thảo luận, tranh luận, đàm phán, góp ý, thuyết trình có xử lý câu hỏi.'], ['Đọc', 'Đọc báo, báo cáo chuyên ngành, bài IELTS Academic.'], ['Viết', 'Báo cáo, đề xuất, IELTS Task 1–2 band 6–6.5.']])}
      <p>B2 tương đương <b>TOEIC L&R khoảng 785+</b> (mốc tối thiểu ETS gợi ý), <b>IELTS 5.5–6.5</b>, <b>VSTEP bậc 4</b>.</p>
      <h4>3. Lộ trình tiếp theo</h4>${tbl(['Mục tiêu', 'Gợi ý'], [['📘 Lên C1 (Cấp 5)', 'Đảo ngữ, câu chẻ, giả định, danh từ hoá, rào đón; viết học thuật, đàm phán cấp cao, thuyết trình trước hội đồng.'], ['🏅 Thi thật', 'IELTS 6.5 hoặc TOEIC 785+: đăng ký sau 4 tuần luyện đề theo kế hoạch Ngày 29.'], ['📰 Đọc mỗi ngày', '1 bài The Economist / BBC Business, ghi collocation.'], ['🎙️ Nói mỗi tuần', '2 bài Luyện nói, nhờ gia sư AI chấm.']])}
      ${tip('🧾 Vào <a href="#/tieng-anh/c4/tien-do">Tiến độ</a> → Sao chép tóm tắt, dán cho gia sư AI để được tư vấn lộ trình riêng.')}`,
    qs: [['mc', 'I wish I ___ that opportunity.', "hadn't missed", ["didn't miss", "don't miss", "wouldn't miss"], 'Hối tiếc quá khứ.'], ['mc', 'It is widely ___ that the economy will grow.', 'expected', ['expecting', 'expect', 'expectation'], 'Bị động khách quan.'], ['mc', 'We need to make sure we are on the same ___.', 'page', ['book', 'line', 'boat'], 'on the same page.']],
    noi: [["I've *completed* *level* *four*! ↘", 'Tôi đã hoàn thành cấp 4!'], ['*Next*, → I\'m aiming for *IELTS* *seven*. ↘', 'Tiếp theo tôi nhắm IELTS 7.']],
    hoithoai: {
      ctx: 'Phần thi nói cuối khoá B2: giám khảo hỏi 4 câu khó.', vai: 'Trả lời band 6.5+.', ai: '👩‍🏫 Examiner',
      luot: [
        T(['Describe a decision you regret.', '', 'Mô tả một quyết định bạn hối tiếc.'], ["I wish I hadn't turned down a scholarship to study abroad. If I had accepted it, I'd probably be working internationally now.", 'Ước gì tôi đã không từ chối học bổng du học. Nếu nhận, có lẽ giờ tôi đang làm việc quốc tế.', 'Câu ước + điều kiện hỗn hợp.'], ['I regret to turn down.', 'regret + V-ing.'], ['I wish I didn\'t turn down.', 'had V3.']),
        T(['Should companies allow a four-day week?', '', 'Công ty có nên cho tuần làm 4 ngày?'], ["Admittedly, it may not suit every industry. However, research suggests rested employees are more productive, so on balance I'd support a trial.", 'Thừa nhận không hợp mọi ngành. Tuy nhiên nghiên cứu cho thấy nhân viên được nghỉ hiệu quả hơn, nên cân nhắc mọi mặt tôi ủng hộ thử nghiệm.', 'Lập luận B2.'], ['Yes, because rest.', 'Thiếu lập luận.'], ['No, never.', 'Không lập luận.']),
        T(['How would you explain phishing to your grandmother?', '', 'Giải thích phishing cho bà bạn thế nào?'], ["I'd say it's like a stranger pretending to be the bank to steal your password, so never share codes with anyone.", 'Tôi sẽ nói nó như người lạ giả danh ngân hàng để lấy mật khẩu, nên đừng bao giờ chia sẻ mã với ai.', 'Giải thích đơn giản bằng so sánh.'], ['It is malware encryption ransomware.', 'Quá thuật ngữ.'], ['It is a fish.', 'Sai.']),
        T(['What are your goals for C1?', '', 'Mục tiêu C1 của bạn?'], ["By this time next year, I hope I'll have reached IELTS 7.0 and I'll be presenting confidently to regional boards.", 'Giờ này năm sau mong đã đạt IELTS 7.0 và đang thuyết trình tự tin trước hội đồng khu vực.', 'Tương lai hoàn thành + tiếp diễn. Chúc mừng em hoàn thành B2!'], ['I will reach C1 tomorrow.', 'Không thực tế.'], ['I hope reach IELTS.', 'hope to reach.'])
      ], ket: '🏆 Chúc mừng em đã hoàn thành Tiếng Anh Cấp 4 (B2)!'
    },
    tom: ['Kiểm tra cuối khoá 30 câu', 'Mốc B2', 'Lộ trình C1'], nguphap: 'Tổng ôn B2', phatam: 'Tổng ôn',
    loi: ['Xem lại câu sai'], btvn: ['Sao chép tóm tắt tiến độ gửi gia sư AI', 'Làm 2 đề IELTS mini', 'Duy trì 30 phút tiếng Anh mỗi ngày']
  };

  window.PLT_EN4.days.push(d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30);
})();

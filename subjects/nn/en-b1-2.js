/* PLT-Edu · Tiếng Anh – Cấp 3 (B1): Ngày 15–30 */
(function () {
  'use strict';
  const { w, T, tbl, tip, exs, F, K, G, say } = window.PLT_EN3.H;
  const P = window.PLT_EN3.plan;

  /* ================= NGÀY 15 ================= */
  const d15 = {
    n: 15, ten: P[14].ten, kinds: K,
    muc: 'Mở đầu và điều phối cuộc họp, xin ý kiến, ngắt lời lịch sự, tóm tắt và giao việc.',
    hoc: `${tbl(['Chức năng', 'Mẫu câu'], [['Mở đầu', "Let's get started. The purpose of today's meeting is to…"], ['Xin ý kiến', "What are your thoughts on this? / Lan, what do you think?"], ['Ngắt lời lịch sự', 'Sorry to interrupt, but… / Can I just add something?'], ['Giữ lượt nói', "If I could just finish my point…"], ['Quay lại chủ đề', "Let's get back to the main point."], ['Tóm tắt, giao việc', "So, to sum up… / Minh, could you take care of…? / Let's meet again next Tuesday."]])}
      ${tip('🗒️ Người chủ trì nên nói <b>mục tiêu</b> ngay câu đầu và <b>chốt hành động</b> (ai – làm gì – khi nào) ở cuối.')}`,
    vocab: [
      w('agenda', '/əˈdʒendə/', 'chương trình họp', '', ["Let's look at the agenda.", '', 'Hãy xem chương trình họp.']),
      w('purpose', '/ˈpɜːrpəs/', 'mục đích', '', ['The purpose of this meeting is to plan the launch.', '', 'Mục đích buổi họp là lên kế hoạch ra mắt.']),
      w('interrupt', '/ˌɪntəˈrʌpt/', 'ngắt lời', '', ['Sorry to interrupt, but I have a question.', '', 'Xin lỗi ngắt lời, tôi có câu hỏi.']),
      w('thoughts', '/θɔːts/', 'suy nghĩ, ý kiến', '', ['What are your thoughts?', '', 'Ý kiến của bạn thế nào?']),
      w('to sum up', '/tə sʌm ʌp/', 'tóm lại', '', ['To sum up, we need more staff.', '', 'Tóm lại, chúng ta cần thêm nhân sự.']),
      w('take care of', '/teɪk ker əv/', 'lo, phụ trách', '', ['Could you take care of the budget?', '', 'Bạn lo phần ngân sách được không?']),
      w('action point', '/ˈækʃn pɔɪnt/', 'đầu việc cần làm', '', ["Let's go through the action points.", '', 'Cùng điểm lại các đầu việc.']),
      w('budget', '/ˈbʌdʒɪt/', 'ngân sách', '', ['The budget is limited.', '', 'Ngân sách có hạn.']),
      w('minutes', '/ˈmɪnɪts/', 'biên bản họp', '', ["I'll send the minutes after the meeting.", '', 'Tôi sẽ gửi biên bản sau buổi họp.']),
      w('get back to', '/ɡet bæk tuː/', 'quay lại (chủ đề); trả lời sau', '', ["I'll get back to you tomorrow.", '', 'Mai tôi sẽ trả lời bạn.'])
    ],
    qs: [
      ['mc', 'Ngắt lời lịch sự là?', 'Sorry to interrupt, but…', ['Stop talking!', 'Wait, you are wrong.', 'Me first.'], 'Sorry to interrupt.'],
      ['mc', "The ___ of today's meeting is to choose a supplier.", 'purpose', ['agenda point', 'minutes', 'budget'], 'purpose.'],
      ['mc', 'Biên bản họp là?', 'minutes', ['hours', 'agenda', 'notes paper'], 'minutes.'],
      ['mc', 'Could you ___ the hotel booking?', 'take care of', ['take part of', 'care take', 'look of'], 'take care of.'],
      ['mc', '“Tóm lại” là?', 'To sum up,', ['In addition,', 'For example,', 'However,'], 'To sum up.'],
      ['hear', "So, to sum up: Minh will contact the supplier, and Lan will prepare the budget by Thursday.", 'Minh liên hệ nhà cung cấp, Lan làm ngân sách trước thứ Năm.', ['Lan liên hệ nhà cung cấp, Minh làm ngân sách.', 'Cả hai làm ngân sách.', 'Họp lại thứ Năm.'], 'Minh – supplier, Lan – budget.'],
      ['order', 'Sắp xếp: “Hãy quay lại ý chính.”', ["Let's", 'get back', 'to', 'the main point.'], "Let's get back to the main point."]
    ],
    noi: [["Let's get *started*. → The *purpose* of today's meeting → is to *plan* the *launch*. ↘", 'Bắt đầu nhé. Mục đích là lên kế hoạch ra mắt.'], ['Sorry to *interrupt*, → but can I just *add* something? ↗', 'Xin lỗi ngắt lời, tôi bổ sung chút được không?'], ['So, to *sum* *up*, → we need *two* more *weeks*. ↘', 'Tóm lại, chúng ta cần thêm hai tuần.']],
    hoithoai: {
      ctx: 'Em chủ trì cuộc họp nhóm IT (có đồng nghiệp nước ngoài) về việc thay máy tính cho chi nhánh.', vai: 'Em điều phối, mọi người phát biểu.', ai: '👥 Team',
      luot: [
        T(['(Everyone sits down.)', '', '(Mọi người ngồi vào chỗ.)'], ["Let's get started. The purpose of today's meeting is to plan the new computer roll-out.", 'Bắt đầu nhé. Mục đích hôm nay là lên kế hoạch thay máy tính mới.', 'Mở đầu + mục đích.'], ['OK, talk.', 'Thiếu chuyên nghiệp.'], ['The agenda is a meeting.', 'Vô nghĩa.']),
        T(['(Tom) I think we should replace all 60 computers in one weekend.', '', '(Tom) Tôi nghĩ nên thay cả 60 máy trong một cuối tuần.'], ['Thanks, Tom. Lan, what are your thoughts on that?', 'Cảm ơn Tom. Lan, chị nghĩ sao?', 'Xin ý kiến người khác.'], ["No, that's stupid.", 'Bất lịch sự.'], ['Lan, you agree, yes?', 'Ép ý kiến.']),
        T(['(Lan) Sorry to interrupt, but our budget only covers 40 this year.', '', '(Lan) Xin lỗi ngắt lời, ngân sách năm nay chỉ đủ 40 máy.'], ["Good point. So, to sum up: we'll replace 40 now, and Lan will check the budget for the rest.", 'Ý hay. Tóm lại: thay 40 máy trước, Lan kiểm tra ngân sách phần còn lại.', 'Tóm tắt + giao việc.'], ["Let's replace 60 anyway.", 'Bỏ qua thông tin ngân sách.'], ['Interrupt is not allowed.', 'Không xây dựng.'])
      ], ket: 'Em đã điều phối một cuộc họp ngắn bằng tiếng Anh.'
    },
    tom: ['Mở đầu – xin ý kiến – ngắt lời – tóm tắt', 'agenda, minutes, action points'], nguphap: "Let's + V; Could you…?; câu ngắt lời lịch sự", phatam: 'Ngữ điệu mời góp ý ↗; tóm tắt ↘ dứt khoát',
    loi: ['Ngắt lời không xin phép', 'Không chốt người làm – hạn'], btvn: ['Viết kịch bản mở đầu và kết thúc một cuộc họp', 'Viết biên bản họp 5 dòng (ai – làm gì – khi nào)', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 16 ================= */
  const d16 = {
    n: 16, ten: P[15].ten, kinds: K,
    muc: 'Trình bày 3–5 phút có cấu trúc: chào, giới thiệu chủ đề, dàn ý, chuyển ý, mô tả hình, kết luận, hỏi đáp.',
    hoc: `${tbl(['Phần', 'Mẫu câu'], [['Mở đầu', "Good morning, everyone. Today I'm going to talk about…"], ['Dàn ý', "My talk is divided into three parts. First, … Then, … Finally, …"], ['Chuyển ý', "Now let's move on to… / That brings me to my next point."], ['Mô tả hình', 'As you can see from this chart, … / Let me draw your attention to…'], ['Kết luận', "To conclude, … / Thank you for listening."], ['Hỏi đáp', "Are there any questions? / That's a great question."]])}
      ${tip('🎤 Mẹo: mỗi slide 1 ý chính, nói chậm hơn bình thường 20%, dừng 1 giây sau mỗi câu chuyển ý. Không đọc slide.')}`,
    vocab: [
      w('presentation', '/ˌpreznˈteɪʃn/', 'bài thuyết trình', '', ["I'm giving a presentation tomorrow.", '', 'Mai tôi thuyết trình.']),
      w('divided into', '/dɪˈvaɪdɪd ˈɪntuː/', 'được chia thành', '', ['My talk is divided into three parts.', '', 'Bài nói chia làm ba phần.']),
      w('move on to', '/muːv ɑːn tuː/', 'chuyển sang', '', ["Let's move on to the next slide.", '', 'Chuyển sang slide tiếp theo.']),
      w('chart', '/tʃɑːrt/', 'biểu đồ', '', ['As you can see from this chart…', '', 'Như các bạn thấy trên biểu đồ…']),
      w('slide', '/slaɪd/', 'trang chiếu', '', ['Please look at this slide.', '', 'Xin xem trang chiếu này.']),
      w('highlight', '/ˈhaɪlaɪt/', 'nhấn mạnh, làm nổi bật', '', ['I want to highlight two points.', '', 'Tôi muốn nhấn mạnh hai điểm.']),
      w('conclude', '/kənˈkluːd/', 'kết luận', '', ['To conclude, the project was a success.', '', 'Kết luận, dự án thành công.']),
      w('audience', '/ˈɔːdiəns/', 'khán giả, người nghe', '', ['Look at your audience.', '', 'Hãy nhìn người nghe.']),
      w('benefit', '/ˈbenɪfɪt/', 'lợi ích', '', ['The main benefit is speed.', '', 'Lợi ích chính là tốc độ.']),
      w('in summary', '/ɪn ˈsʌməri/', 'tóm lại', '', ['In summary, we saved 20% of costs.', '', 'Tóm lại, chúng ta tiết kiệm 20% chi phí.'])
    ],
    qs: [
      ['mc', 'Câu mở đầu bài thuyết trình phù hợp?', "Good morning, everyone. Today I'm going to talk about our new app.", ['OK, start. App.', 'Hello, I talk app now.', 'Look slide.'], 'Chào + chủ đề.'],
      ['mc', "Now let's move ___ to the costs.", 'on', ['in', 'up', 'at'], 'move on to.'],
      ['mc', 'As you can see ___ this chart, sales doubled.', 'from', ['at', 'in', 'by'], 'As you can see from.'],
      ['mc', 'My talk is divided ___ three parts.', 'into', ['in', 'to', 'by'], 'divided into.'],
      ['mc', 'audience nghĩa là?', 'người nghe, khán giả', ['âm thanh', 'hội trường', 'diễn giả'], 'audience.'],
      ['hear', "That brings me to my final point: the benefits for our customers.", 'Chuyển sang ý cuối: lợi ích cho khách hàng.', ['Ý đầu tiên: chi phí.', 'Kết thúc, không còn ý.', 'Ý thứ hai: nhân sự.'], 'final point / benefits.'],
      ['order', 'Sắp xếp: “Cảm ơn mọi người đã lắng nghe.”', ['Thank you', 'for', 'listening,', 'everyone.'], 'Thank you for listening, everyone.']
    ],
    noi: [["Good *morning*, everyone. → Today I'm going to talk about → our new *banking* *app*. ↘", 'Chào buổi sáng. Hôm nay tôi nói về ứng dụng ngân hàng mới.'], ["*Now* → let's *move* on to the *costs*. ↘", 'Giờ chuyển sang chi phí.'], ['As you can *see* from this *chart*, → *users* *doubled* in *six* *months*. ↘', 'Như biểu đồ cho thấy, người dùng tăng gấp đôi trong 6 tháng.'], ['Thank you for *listening*. → Are there any *questions*? ↗', 'Cảm ơn đã lắng nghe. Có câu hỏi nào không?']],
    hoithoai: {
      ctx: 'Em thuyết trình đề xuất dùng phần mềm quản lý tài sản mới trước ban giám đốc.', vai: 'Em trình bày, giám đốc đặt câu hỏi.', ai: '👔 Board',
      luot: [
        T(['(The room is quiet.) Please go ahead.', '', '(Phòng yên lặng.) Mời bạn bắt đầu.'], ["Good morning, everyone. Today I'm going to talk about a new asset management system. My talk is divided into three parts.", 'Chào mọi người. Hôm nay tôi nói về hệ thống quản lý tài sản mới, gồm ba phần.', 'Mở đầu + dàn ý.'], ['Hello. System. Three part.', 'Thiếu câu hoàn chỉnh.'], ['I talk software now quickly.', 'Không chuyên nghiệp.']),
        T(['(After the first part) Go on.', '', '(Sau phần một) Tiếp đi.'], ["Thank you. Now let's move on to the costs. As you can see from this chart, we'd save about 30% in two years.", 'Cảm ơn. Giờ sang chi phí. Như biểu đồ cho thấy, 2 năm sẽ tiết kiệm khoảng 30%.', 'Chuyển ý + mô tả biểu đồ.'], ['Next costs chart 30%.', 'Câu cụt.'], ['As you can see at this chart.', 'see from.']),
        T(["That's interesting. How long would the training take?", '', 'Thú vị. Đào tạo mất bao lâu?'], ["That's a great question. About two days for each branch.", 'Câu hỏi hay. Khoảng hai ngày cho mỗi chi nhánh.', 'Đón câu hỏi + trả lời.'], ["I don't know, sorry, bye.", 'Không xử lý câu hỏi.'], ['Training is long.', 'Mơ hồ.'])
      ], ket: 'Em đã thuyết trình có cấu trúc và trả lời câu hỏi.'
    },
    tom: ['Khung thuyết trình 6 phần', 'Câu chuyển ý', 'Mô tả biểu đồ'], nguphap: "be going to (mở đầu); Let's…; As you can see…", phatam: 'Ngắt nhóm ý, nhấn từ khoá, dừng sau chuyển ý',
    loi: ['Đọc slide', 'Không có câu chuyển ý'], btvn: ['Soạn 1 bài thuyết trình 3 phút về sản phẩm/dịch vụ của em', 'Ghi âm và đo tốc độ (110–140 từ/phút)', 'Luyện 🎤 bài "Ngắt nhóm ý" trong Phát âm & ngữ điệu']
  };

  /* ================= NGÀY 17 ================= */
  const d17 = {
    n: 17, ten: P[16].ten, kinds: K,
    muc: 'Viết email công việc 120–150 từ: yêu cầu thông tin, xác nhận, theo dõi (follow-up), đề xuất lịch.',
    hoc: `<h4>1. Bố cục 4 đoạn</h4>${tbl(['Đoạn', 'Nội dung', 'Câu mẫu'], [['1', 'Lý do viết', "I'm writing to follow up on our call last Tuesday."], ['2', 'Chi tiết / yêu cầu', 'Could you please send me the updated quotation, including delivery costs?'], ['3', 'Hành động tiếp theo', 'If possible, I would like to arrange a short call on Thursday.'], ['4', 'Kết', "Please let me know if you have any questions. I look forward to hearing from you."]])}
      ${say("I'm writing to follow up on the quotation you sent on 3rd June. Could you please confirm whether the price includes installation? We would like to place the order by the end of this month.", 'Tôi viết để theo dõi báo giá anh gửi ngày 3/6. Anh vui lòng xác nhận giá đã gồm lắp đặt chưa? Chúng tôi muốn đặt hàng trước cuối tháng.')}
      ${tip('✉️ Câu nhắc nhở lịch sự: <i>Just a quick reminder that…</i> · <i>I was wondering if you\'d had a chance to look at…</i>')}`,
    vocab: [
      w('follow up on', '/ˈfɑːloʊ ʌp ɑːn/', 'theo dõi tiếp, hỏi lại về', '', ["I'm writing to follow up on my last email.", '', 'Tôi viết để hỏi lại về email trước.']),
      w('quotation', '/kwoʊˈteɪʃn/', 'báo giá', '', ['Could you send me a quotation?', '', 'Gửi tôi báo giá được không?']),
      w('arrange', '/əˈreɪndʒ/', 'sắp xếp', '', ["Let's arrange a call.", '', 'Hãy sắp xếp một cuộc gọi.']),
      w('reminder', '/rɪˈmaɪndər/', 'lời nhắc', '', ['Just a quick reminder about the deadline.', '', 'Nhắc nhanh về hạn chót.']),
      w('regarding', '/rɪˈɡɑːrdɪŋ/', 'về việc', '', ['Regarding your question, …', '', 'Về câu hỏi của anh…']),
      w('place an order', '/pleɪs ən ˈɔːrdər/', 'đặt hàng', '', ['We would like to place an order.', '', 'Chúng tôi muốn đặt hàng.']),
      w('include', '/ɪnˈkluːd/', 'bao gồm', '', ['Does the price include VAT?', '', 'Giá đã gồm VAT chưa?']),
      w('had a chance', '/hæd ə tʃæns/', 'có dịp, có thời gian', '', ["Have you had a chance to read it?", '', 'Anh đã có dịp đọc chưa?']),
      w('in advance', '/ɪn ədˈvæns/', 'trước', '', ['Thank you in advance.', '', 'Cảm ơn trước.']),
      w('kind regards', '/kaɪnd rɪˈɡɑːrdz/', 'trân trọng (kết thư)', '', ['Kind regards, Minh', '', 'Trân trọng, Minh'])
    ],
    qs: [
      ['mc', "I'm writing to follow ___ on our meeting.", 'up', ['out', 'on', 'in'], 'follow up on.'],
      ['mc', 'Nhắc nhở lịch sự trong email?', 'Just a quick reminder that the report is due on Friday.', ['You forgot the report!', 'Why no report?', 'Report now please quick.'], 'Just a quick reminder.'],
      ['mc', '___ your question about delivery, it takes three days.', 'Regarding', ['Regard', 'Regards', 'Regarded'], 'Regarding = về việc.'],
      ['mc', 'Does the price ___ installation?', 'include', ['included', 'inclusive', 'including'], 'Does + V.'],
      ['mc', 'quotation nghĩa là?', 'báo giá', ['hoá đơn', 'hợp đồng', 'trích dẫn văn học'], 'quotation (business).'],
      ['hear', "I was wondering if you'd had a chance to look at our proposal.", 'Hỏi lịch sự đối tác đã xem đề xuất chưa.', ['Cảm ơn vì đã duyệt đề xuất.', 'Từ chối đề xuất.', 'Gửi đề xuất mới.'], "had a chance to look at."],
      ['order', 'Sắp xếp: “Chúng tôi muốn đặt hàng.”', ['We', 'would like', 'to place', 'an order.'], 'We would like to place an order.']
    ],
    noi: [["I'm *writing* to follow *up* on our *call* last *Tuesday*. ↘", 'Tôi viết để hỏi lại về cuộc gọi thứ Ba.'], ['Could you please *confirm* → whether the *price* includes *installation*? ↗', 'Xác nhận giá đã gồm lắp đặt chưa?'], ['Thank you in *advance*. ↘', 'Cảm ơn trước.']],
    hoithoai: {
      ctx: 'Em nhờ chị trưởng phòng người Singapore duyệt email gửi nhà cung cấp.', vai: 'Chị Grace góp ý từng đoạn.', ai: '👩‍💼 Grace',
      luot: [
        T(["Your first line says 'I want price.' Can you make it more professional?", '', 'Dòng đầu em viết "I want price." Viết chuyên nghiệp hơn được không?'], ["I'm writing to follow up on the quotation you sent on 3rd June.", 'Tôi viết để hỏi lại về báo giá anh gửi ngày 3/6.', 'Câu mở chuyên nghiệp.'], ['Give me price please.', 'Vẫn cộc.'], ['I write to price.', 'Sai.']),
        T(['Better. Now ask about delivery costs politely.', '', 'Tốt hơn. Giờ hỏi phí giao hàng lịch sự.'], ['Could you please confirm whether the price includes delivery?', 'Vui lòng xác nhận giá đã gồm giao hàng chưa?', 'Câu hỏi gián tiếp lịch sự.'], ['Delivery is free, yes?', 'Ép buộc.'], ['Could you confirm does the price include delivery?', 'Câu hỏi gián tiếp không đảo.']),
        T(['Good. How will you end it?', '', 'Tốt. Kết thế nào?'], ['Please let me know if you have any questions. Kind regards, Minh.', 'Có câu hỏi gì xin cho tôi biết. Trân trọng, Minh.', 'Kết chuẩn.'], ['Bye bye.', 'Không phù hợp.'], ['Answer fast.', 'Thiếu lịch sự.'])
      ], ket: 'Em đã viết lại email chuyên nghiệp.'
    },
    tom: ['Bố cục 4 đoạn', 'follow up / reminder / regarding', 'Câu hỏi gián tiếp trong email'], nguphap: 'Câu hỏi gián tiếp; would like to; Could you please…?', phatam: 'quotation /kwoʊˈteɪʃn/',
    loi: ['Mở đầu cộc lốc', 'Thiếu hành động tiếp theo'], btvn: ['Viết email follow-up 120 từ', 'Viết email nhắc hạn lịch sự 80 từ', 'Làm "Trả lời khách hàng" trong Luyện đề → Luyện viết']
  };

  /* ================= NGÀY 18 ================= */
  const d18 = {
    n: 18, ten: P[17].ten, kinds: K,
    muc: 'Tiếp nhận và xử lý khiếu nại theo mô hình LEARN: lắng nghe, đồng cảm, xin lỗi, giải quyết, cảm ơn.',
    hoc: `${tbl(['Bước', 'Mẫu câu'], [['Listen – lắng nghe', 'I see. Could you tell me exactly what happened?'], ['Empathise – đồng cảm', 'I completely understand how frustrating that must be.'], ['Apologise – xin lỗi', "I'm very sorry for the inconvenience."], ['Resolve – giải quyết', "Here's what I can do: … / I'll make sure that…"], ['Notify / thank – cảm ơn', 'Thank you for bringing this to our attention.']])}
      ${tip('🚫 Tránh: <i>It\'s not my fault. / That\'s impossible. / Calm down!</i> · ✅ Dùng: <i>Let me look into this for you.</i>')}`,
    vocab: [
      w('complaint', '/kəmˈpleɪnt/', 'lời khiếu nại', '', ['We received a complaint today.', '', 'Hôm nay chúng tôi nhận một khiếu nại.']),
      w('frustrating', '/ˈfrʌstreɪtɪŋ/', 'gây bực mình', '', ['I understand how frustrating it is.', '', 'Tôi hiểu điều đó bực mình thế nào.']),
      w('inconvenience', '/ˌɪnkənˈviːniəns/', 'sự bất tiện', '', ['Sorry for the inconvenience.', '', 'Xin lỗi vì sự bất tiện.']),
      w('look into', '/lʊk ˈɪntuː/', 'xem xét, kiểm tra', '', ['Let me look into this for you.', '', 'Để tôi kiểm tra giúp anh.']),
      w('resolve', '/rɪˈzɑːlv/', 'giải quyết', '', ["We'll resolve the issue today.", '', 'Chúng tôi sẽ giải quyết hôm nay.']),
      w('compensation', '/ˌkɑːmpenˈseɪʃn/', 'bồi thường', '', ['We will offer compensation.', '', 'Chúng tôi sẽ bồi thường.']),
      w('voucher', '/ˈvaʊtʃər/', 'phiếu giảm giá', '', ["Here's a voucher for your next visit.", '', 'Đây là phiếu giảm giá cho lần sau.']),
      w('make sure', '/meɪk ʃʊr/', 'đảm bảo', '', ["I'll make sure it doesn't happen again.", '', 'Tôi sẽ đảm bảo không lặp lại.']),
      w('attention', '/əˈtenʃn/', 'sự chú ý', '', ['Thank you for bringing this to our attention.', '', 'Cảm ơn anh đã báo cho chúng tôi.']),
      w('escalate', '/ˈeskəleɪt/', 'chuyển lên cấp trên', '', ["I'll escalate this to my manager.", '', 'Tôi sẽ chuyển việc này lên quản lý.'])
    ],
    qs: [
      ['mc', 'Câu đồng cảm khi khách bực mình?', 'I completely understand how frustrating that must be.', ["It's not my fault.", 'Calm down!', "That's impossible."], 'Đồng cảm.'],
      ['mc', "I'm very sorry for the ___.", 'inconvenience', ['convenient', 'inconvenient', 'convenience'], 'Danh từ.'],
      ['mc', 'Let me ___ this for you.', 'look into', ['look after', 'look up to', 'look like'], 'look into = kiểm tra.'],
      ['mc', "I'll ___ this to my manager.", 'escalate', ['escape', 'elevate up', 'escalator'], 'escalate.'],
      ['mc', 'Thank you for bringing this to our ___.', 'attention', ['attend', 'attentive', 'tension'], 'attention.'],
      ['hear', "We'll replace the card for free and give you a voucher for the inconvenience.", 'Thay thẻ miễn phí và tặng phiếu giảm giá.', ['Tính phí thay thẻ.', 'Chỉ xin lỗi.', 'Hoàn tiền toàn bộ.'], 'replace for free + voucher.'],
      ['order', 'Sắp xếp: “Tôi sẽ đảm bảo việc này không lặp lại.”', ["I'll make sure", 'it', "doesn't", 'happen again.'], "I'll make sure it doesn't happen again."]
    ],
    noi: [["I *completely* *understand* → how *frustrating* that must be. ↘", 'Tôi hoàn toàn hiểu điều đó bực mình thế nào.'], ["I'm very *sorry* for the *inconvenience*. ↘", 'Rất xin lỗi vì sự bất tiện.'], ['Let me *look* into this → for you *right* *away*. ↘', 'Để tôi kiểm tra ngay cho anh.']],
    hoithoai: {
      ctx: 'Một khách hàng nước ngoài gọi đến bực bội vì bị trừ tiền hai lần.', vai: 'Khách khiếu nại, em xử lý theo LEARN.', ai: '😠 Customer',
      luot: [
        T(["I've been charged twice for the same payment! This is ridiculous!", '', 'Tôi bị trừ tiền hai lần cho cùng một khoản! Thật vô lý!'], ['I completely understand how frustrating that must be. Could you tell me the date and amount?', 'Tôi hoàn toàn hiểu. Anh cho tôi biết ngày và số tiền được không?', 'Đồng cảm + hỏi thông tin.'], ["It's not my fault.", 'Đổ lỗi.'], ['Calm down, sir.', 'Làm khách bực hơn.']),
        T(['It was yesterday, 2.5 million dong at the electronics shop.', '', 'Hôm qua, 2,5 triệu ở cửa hàng điện máy.'], ["Thank you. I'm very sorry for the inconvenience. Let me look into this right away.", 'Cảm ơn. Rất xin lỗi vì sự bất tiện. Để tôi kiểm tra ngay.', 'Xin lỗi + hành động.'], ["That's impossible.", 'Phủ nhận.'], ['Wait one week.', 'Thiếu thiện chí.']),
        T(["(A minute later) So, what's going on?", '', '(Một phút sau) Sao rồi?'], ["I can see the double charge. We'll refund 2.5 million within three working days, and I'll make sure it doesn't happen again.", 'Tôi thấy bị trừ trùng. Chúng tôi sẽ hoàn 2,5 triệu trong 3 ngày làm việc và đảm bảo không lặp lại.', 'Giải pháp cụ thể.'], ["We'll refund maybe.", 'Mơ hồ.'], ['You must go to the shop.', 'Đẩy trách nhiệm.'])
      ], ket: 'Em đã xử lý khiếu nại chuyên nghiệp.'
    },
    tom: ['Mô hình LEARN', 'Câu đồng cảm, xin lỗi', 'Giải pháp cụ thể'], nguphap: "I'll make sure…; Let me + V; Could you tell me…?", phatam: 'Giọng bình tĩnh, nhấn understand / sorry',
    loi: ["Nói It's not my fault", 'Giải pháp mơ hồ'], btvn: ['Viết kịch bản xử lý 2 khiếu nại thường gặp ở nơi em làm', 'Viết email xin lỗi khách 100 từ', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 19 ================= */
  const d19 = {
    n: 19, ten: P[18].ten, kinds: K,
    muc: 'Thương lượng giá, thời hạn thanh toán, giao hàng; đưa đề nghị, nhượng bộ có điều kiện, chốt thoả thuận.',
    hoc: `${tbl(['Chức năng', 'Mẫu câu'], [['Đưa đề nghị', 'We can offer you… / Our best price is…'], ['Phản đề nghị', "That's a bit higher than we expected. Would you consider…?"], ['Nhượng bộ có điều kiện', "We could lower the price if you agreed to a two-year contract."], ['Từ chối khéo', "I'm afraid we can't go below… / That would be difficult for us."], ['Chốt', "I think we have a deal. / Let's put that in writing."]])}
      ${tip('🤝 Dùng <b>would / could</b> (điều kiện loại 2) để đề nghị mềm mỏng, chừa đường lùi: <i>What if we paid 50% upfront?</i>')}`,
    vocab: [
      w('negotiate', '/nɪˈɡoʊʃieɪt/', 'thương lượng', '', ["Let's negotiate the price.", '', 'Hãy thương lượng giá.']),
      w('offer', '/ˈɔːfər/', 'đề nghị; lời chào giá', '', ['We can offer a 5% discount.', '', 'Chúng tôi có thể giảm 5%.']),
      w('expect', '/ɪkˈspekt/', 'kỳ vọng', '', ["It's higher than we expected.", '', 'Cao hơn chúng tôi kỳ vọng.']),
      w('upfront', '/ˌʌpˈfrʌnt/', 'trả trước', '', ['We need 30% upfront.', '', 'Cần trả trước 30%.']),
      w('contract', '/ˈkɑːntrækt/', 'hợp đồng', '', ['We signed a one-year contract.', '', 'Chúng tôi ký hợp đồng một năm.']),
      w('terms', '/tɜːrmz/', 'điều khoản', '', ['What are the payment terms?', '', 'Điều khoản thanh toán thế nào?']),
      w('compromise', '/ˈkɑːmprəmaɪz/', 'thoả hiệp', '', ["Let's find a compromise.", '', 'Hãy tìm điểm thoả hiệp.']),
      w('in writing', '/ɪn ˈraɪtɪŋ/', 'bằng văn bản', '', ['Please confirm it in writing.', '', 'Xác nhận bằng văn bản nhé.']),
      w('bulk order', '/bʌlk ˈɔːrdər/', 'đơn hàng số lượng lớn', '', ['We give discounts for bulk orders.', '', 'Giảm giá cho đơn số lượng lớn.']),
      w('warranty', '/ˈwɔːrənti/', 'bảo hành', '', ['It comes with a two-year warranty.', '', 'Bảo hành hai năm.'])
    ],
    qs: [
      ['mc', 'Phản đề nghị lịch sự là?', "That's a bit higher than we expected. Would you consider 8%?", ['Too expensive, no.', 'Your price is crazy.', 'Give 8% now.'], 'Mềm mỏng.'],
      ['mc', 'We could lower the price if you ___ a two-year contract.', 'signed', ['sign', 'will sign', 'signing'], 'Điều kiện loại 2.'],
      ['mc', "I'm afraid we can't go ___ 10 million.", 'below', ['under of', 'down', 'less'], 'go below.'],
      ['mc', 'Bảo hành là?', 'warranty', ['warning', 'guarantee money', 'terms'], 'warranty.'],
      ['mc', '“Trả trước” là?', 'upfront', ['in advance of', 'before pay', 'front pay'], 'upfront.'],
      ['hear', "What if we paid fifty percent upfront? Could you give us free delivery?", 'Nếu trả trước 50%, giao miễn phí được không?', ['Trả trước 15%.', 'Giao hàng tính phí.', 'Trả sau toàn bộ.'], 'fifty percent upfront / free delivery.'],
      ['order', 'Sắp xếp: “Hãy xác nhận bằng văn bản.”', ["Let's", 'put', 'that', 'in writing.'], "Let's put that in writing."]
    ],
    noi: [["That's a *bit* *higher* → than we *expected*. ↘", 'Hơi cao hơn kỳ vọng.'], ['What if we paid *fifty* percent *upfront*? ↗', 'Nếu chúng tôi trả trước 50% thì sao?'], ['I think we have a *deal*. ↘', 'Tôi nghĩ chúng ta chốt được rồi.']],
    hoithoai: {
      ctx: 'Em đại diện công ty mua 100 máy in từ nhà cung cấp nước ngoài.', vai: 'Bên bán chào giá, em thương lượng.', ai: '🧑‍💼 Supplier',
      luot: [
        T(['Our price is $180 per printer.', '', 'Giá của chúng tôi 180 đô/máy.'], ["That's a bit higher than we expected. Since this is a bulk order, would you consider $160?", 'Hơi cao hơn kỳ vọng. Vì đơn lớn, anh cân nhắc 160 đô được không?', 'Phản đề nghị có lý do.'], ['No. Too expensive.', 'Cộc.'], ['OK, $180 is fine.', 'Bỏ lỡ cơ hội thương lượng.']),
        T(["I'm afraid $160 would be difficult. We could do $170.", '', 'E là 160 khó. Chúng tôi có thể 170.'], ['What if we paid 50% upfront? Could you go down to $165?', 'Nếu trả trước 50% thì anh giảm xuống 165 được không?', 'Nhượng bộ có điều kiện.'], ['You must give $160.', 'Ép.'], ['What if we pay later 100%?', 'Bất lợi cho bên bán, khó chốt.']),
        T(['OK, $165 with 50% upfront. And a two-year warranty.', '', 'Được, 165 với 50% trả trước. Bảo hành hai năm.'], ["I think we have a deal. Let's put that in writing.", 'Chốt nhé. Ta ghi lại bằng văn bản.', 'Chốt + văn bản.'], ['Deal, no paper.', 'Thiếu văn bản.'], ['Maybe, I will think next year.', 'Không chốt.'])
      ], ket: 'Em đã thương lượng giá thành công.'
    },
    tom: ['Đề nghị – phản đề nghị – nhượng bộ – chốt', 'What if…? / could…if…', 'terms, upfront, warranty'], nguphap: 'Điều kiện loại 2 trong đàm phán', phatam: 'Giọng chắc, nhấn con số',
    loi: ['Từ chối cộc lốc', 'Không chốt bằng văn bản'], btvn: ['Viết đoạn đàm phán 8 lượt về đơn hàng của em', 'Liệt kê 5 điều khoản cần thương lượng khi mua thiết bị', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 20 ================= */
  const d20 = {
    n: 20, ten: P[19].ten, kinds: K,
    muc: 'Gọi và nhận điện thoại công việc: chuyển máy, để lại lời nhắn, đánh vần, xác nhận chi tiết, kết thúc cuộc gọi.',
    hoc: `${tbl(['Tình huống', 'Mẫu câu'], [['Giới thiệu', 'Hello, this is Minh from PLT Tech. Could I speak to Ms. Lee, please?'], ['Chuyển máy', "Please hold. I'll put you through."], ['Người nhận vắng', "I'm afraid she's in a meeting. Can I take a message?"], ['Để lại lời nhắn', 'Could you ask her to call me back on…?'], ['Xác nhận', 'Let me read that back to you… / Could you spell that, please?'], ['Kết thúc', 'Thanks for calling. Have a nice day.']])}
      ${tip('🔤 Đánh vần chuẩn quốc tế: A for Alpha, B for Bravo, M for Mike, N for November… <i>"Minh – M for Mike, I, N for November, H for Hotel."</i>')}`,
    vocab: [
      w('put you through', '/pʊt juː θruː/', 'chuyển máy cho bạn', '', ["I'll put you through now.", '', 'Tôi chuyển máy ngay.']),
      w('hold', '/hoʊld/', 'giữ máy', '', ['Please hold.', '', 'Vui lòng giữ máy.']),
      w('take a message', '/teɪk ə ˈmesɪdʒ/', 'ghi lời nhắn', '', ['Can I take a message?', '', 'Tôi ghi lời nhắn nhé?']),
      w('extension', '/ɪkˈstenʃn/', 'số máy lẻ', '', ['My extension is 204.', '', 'Số máy lẻ của tôi là 204.']),
      w('read back', '/riːd bæk/', 'đọc lại (để xác nhận)', '', ['Let me read that back to you.', '', 'Để tôi đọc lại cho anh.']),
      w('spell', '/spel/', 'đánh vần', '', ['Could you spell your surname?', '', 'Đánh vần họ của anh được không?']),
      w('line', '/laɪn/', 'đường dây', '', ["The line is busy.", '', 'Máy đang bận.']),
      w('cut off', '/kʌt ɔːf/', 'bị ngắt (cuộc gọi)', '', ['Sorry, we were cut off.', '', 'Xin lỗi, máy bị ngắt.']),
      w('surname', '/ˈsɜːrneɪm/', 'họ', '', ["What's your surname?", '', 'Họ của bạn là gì?']),
      w('urgent', '/ˈɜːrdʒənt/', 'khẩn cấp', '', ["It's urgent.", '', 'Việc này khẩn.'])
    ],
    qs: [
      ['mc', 'Please hold. I\'ll ___ you through.', 'put', ['take', 'make', 'get'], 'put through.'],
      ['mc', "She's in a meeting. Can I ___ a message?", 'take', ['make', 'do', 'leave you'], 'take a message.'],
      ['mc', 'Để xác nhận thông tin, em nói?', 'Let me read that back to you.', ['Read again you.', 'Say again fast.', 'I know.'], 'read back.'],
      ['mc', 'Sorry, we were ___. The signal was bad.', 'cut off', ['cut out of', 'cut down', 'cut up'], 'cut off.'],
      ['mc', '“M for Mike” dùng khi?', 'đánh vần qua điện thoại', ['giới thiệu tên', 'đặt bí danh', 'viết email'], 'NATO alphabet.'],
      ['hear', "Could you ask him to call me back on 0903 456 789? It's quite urgent.", 'Nhờ gọi lại số 0903 456 789, khá gấp.', ['Số 0903 465 789, không gấp.', 'Số 0930 456 789.', 'Tôi sẽ gọi lại sau.'], 'Nghe số theo cụm.'],
      ['order', 'Sắp xếp: “Đánh vần họ của anh được không?”', ['Could you', 'spell', 'your', 'surname?'], 'Could you spell your surname?']
    ],
    noi: [['Hello, this is *Minh* from *PLT* *Tech*. → Could I speak to *Ms.* *Lee*, please? ↗', 'Alo, tôi là Minh ở PLT Tech. Cho tôi gặp chị Lee?'], ["I'm afraid she's in a *meeting*. → Can I take a *message*? ↗", 'E là chị ấy đang họp. Tôi ghi lời nhắn nhé?'], ['Let me *read* that *back* to you. ↘', 'Để tôi đọc lại cho anh.']],
    hoithoai: {
      ctx: 'Em nghe máy lễ tân, một đối tác Úc gọi tìm giám đốc.', vai: 'Đối tác gọi, em xử lý cuộc gọi.', ai: '📞 Caller',
      luot: [
        T(["Hi, this is Jack Harris from Sydney. Could I speak to Mr. Nam, please?", '', 'Chào, tôi là Jack Harris từ Sydney. Cho tôi gặp ông Nam.'], ["I'm afraid he's in a meeting at the moment. Can I take a message?", 'E là ông ấy đang họp. Tôi ghi lời nhắn nhé?', 'Lịch sự + đề nghị.'], ['He busy. Bye.', 'Cộc.'], ['Please hold forever.', 'Không hợp lý.']),
        T(['Yes, please. Could you ask him to call me back today? It\'s urgent.', '', 'Vâng. Nhờ ông ấy gọi lại hôm nay. Việc gấp.'], ['Of course. Could you spell your surname, please?', 'Vâng. Anh đánh vần họ giúp tôi?', 'Xác nhận chi tiết.'], ['What urgent?', 'Thiếu lịch sự.'], ['OK, tomorrow.', 'Sai thời gian.']),
        T(["H-A-R-R-I-S. My number is +61 412 555 019.", '', 'H-A-R-R-I-S. Số tôi là +61 412 555 019.'], ["Let me read that back: Jack Harris, +61 412 555 019. I'll make sure he gets the message.", 'Tôi đọc lại: Jack Harris, +61 412 555 019. Tôi sẽ đảm bảo ông ấy nhận lời nhắn.', 'Đọc lại + cam kết.'], ['Harry, OK.', 'Sai tên.'], ['+61 412 555 091.', 'Sai số.'])
      ], ket: 'Em đã xử lý cuộc gọi và lời nhắn chính xác.'
    },
    tom: ['Giới thiệu – chuyển máy – ghi lời nhắn', 'Đánh vần, đọc lại', 'Kết thúc lịch sự'], nguphap: "I'm afraid…; Could you…?; I'll + V", phatam: 'Đọc số điện thoại theo cụm, đánh vần NATO',
    loi: ['Không đọc lại thông tin', 'Nghe nhầm số'], btvn: ['Học thuộc bảng chữ cái NATO A–Z', 'Đóng vai nhận cuộc gọi 3 tình huống', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 21 ================= */
  const d21 = {
    n: 21, ten: P[20].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Ôn giai đoạn 3: họp, thuyết trình, email, khiếu nại, thương lượng, điện thoại.',
    hoc: `<h4>Tóm tắt giai đoạn 3</h4>${tbl(['Tình huống', 'Câu then chốt'], [['Họp', "Let's get started… / Sorry to interrupt… / To sum up…"], ['Thuyết trình', "Today I'm going to talk about… / Let's move on to… / As you can see…"], ['Email', "I'm writing to follow up on… / Could you please confirm whether…?"], ['Khiếu nại', 'I completely understand… / Let me look into this… / I\'ll make sure…'], ['Thương lượng', "That's a bit higher than we expected… / What if we…?"], ['Điện thoại', "I'll put you through. / Can I take a message? / Let me read that back."]])}`,
    qs: [['mc', 'Could you please confirm ___ the price includes VAT?', 'whether', ['that', 'what', 'does'], 'whether = liệu.'], ['mc', "Let's move ___ to the next point.", 'on', ['in', 'up', 'at'], 'move on to.']],
    noi: [["Let's *move* on to the *next* *point*. ↘", 'Chuyển sang ý tiếp theo.'], ["I'm very *sorry* for the *inconvenience*. ↘", 'Xin lỗi vì sự bất tiện.']],
    hoithoai: {
      ctx: 'Một ngày ở văn phòng: họp, điện thoại, khách khiếu nại, đối tác thương lượng.', vai: 'Nhiều vai, em phản xạ.', ai: '🎭 Nhiều người',
      luot: [
        T(['(Meeting) So what do we decide?', '', '(Họp) Vậy ta quyết thế nào?'], ['To sum up, we\'ll launch in May and Lan will prepare the budget.', 'Tóm lại, ra mắt tháng 5 và Lan chuẩn bị ngân sách.', 'Tóm tắt + giao việc.'], ['I decide nothing.', 'Không xây dựng.'], ['Sum up May.', 'Câu cụt.']),
        T(['(Phone) Is Ms. Hoa there?', '', '(Điện thoại) Chị Hoa có đó không?'], ["I'm afraid she's out. Can I take a message?", 'E là chị ấy ra ngoài. Tôi ghi lời nhắn nhé?', 'Lịch sự.'], ['No.', 'Cộc.'], ['She is take message.', 'Sai.']),
        T(['(Customer) My order still hasn\'t arrived!', '', '(Khách) Đơn của tôi vẫn chưa đến!'], ["I completely understand how frustrating that is. Let me look into it right away.", 'Tôi hiểu điều đó bực thế nào. Để tôi kiểm tra ngay.', 'Đồng cảm + hành động.'], ["It's not our fault.", 'Đổ lỗi.'], ['Wait.', 'Cộc.']),
        T(["(Supplier) We can offer $50 per unit.", '', '(Nhà cung cấp) Chúng tôi chào 50 đô/chiếc.'], ["That's a bit higher than we expected. Would you consider $45 for 200 units?", 'Hơi cao. Anh cân nhắc 45 đô cho 200 chiếc được không?', 'Phản đề nghị.'], ['OK.', 'Không thương lượng.'], ['Too expensive, bye.', 'Cắt đứt đàm phán.'])
      ], ket: 'Em đã xử lý một ngày công sở bằng tiếng Anh!'
    },
    tom: ['Ôn giai đoạn 3', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn', phatam: 'Ngữ điệu chuyên nghiệp',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: học lại ngày yếu', 'Làm đề "TOEIC mini 2" trong Luyện đề', 'Ghi âm bài thuyết trình 2 phút']
  };

  /* ================= NGÀY 22 ================= */
  const d22 = {
    n: 22, ten: P[21].ten, kinds: K,
    muc: 'Suy đoán về hiện tại với must / might / could / can\'t và về quá khứ với must have / might have / can\'t have + V3.',
    hoc: `${tbl(['Mức chắc', 'Hiện tại', 'Quá khứ'], [['~95% có', "He must be at home. (đèn sáng)", 'He must have forgotten.'], ['~50%', 'She might / could be in a meeting.', 'She might have missed the bus.'], ['~95% không', "That can't be Lan – she's in Hue.", "He can't have finished already!"]])}
      ${exs([["The office is empty. Everyone must have gone home.", 'Văn phòng trống. Chắc mọi người về hết rồi.'], ["She isn't answering. She might be driving.", 'Cô ấy không nghe máy. Có thể đang lái xe.'], ["You can't be serious!", 'Bạn đùa chắc!']])}
      ${G('suy-doan', 'Suy đoán')}`,
    vocab: [
      w('must be', '/mʌst biː/', 'chắc hẳn là', '', ['You must be tired after the trip.', '', 'Chắc bạn mệt sau chuyến đi.']),
      w('might', '/maɪt/', 'có thể (không chắc)', '', ['It might rain later.', '', 'Lát có thể mưa.']),
      w("can't be", '/kænt biː/', 'không thể nào là', '', ["That can't be true.", '', 'Không thể nào là thật.']),
      w('must have', '/mʌst həv/', 'chắc hẳn đã', '+ V3.', ['He must have left early.', '', 'Chắc anh ấy về sớm.']),
      w('might have', '/maɪt həv/', 'có lẽ đã', '+ V3.', ['I might have left it in the car.', '', 'Có lẽ tôi để quên trong xe.']),
      w('evidence', '/ˈevɪdəns/', 'bằng chứng', '', ["What's your evidence?", '', 'Bằng chứng của bạn là gì?']),
      w('obviously', '/ˈɑːbviəsli/', 'rõ ràng là', '', ["Obviously, he didn't read the email.", '', 'Rõ ràng anh ấy không đọc email.']),
      w('probably', '/ˈprɑːbəbli/', 'có lẽ', '', ["She's probably stuck in traffic.", '', 'Có lẽ cô ấy kẹt xe.']),
      w('stuck', '/stʌk/', 'bị kẹt', '', ['I was stuck in traffic for an hour.', '', 'Tôi kẹt xe một tiếng.']),
      w('mystery', '/ˈmɪstəri/', 'điều bí ẩn', '', ["It's a mystery.", '', 'Thật là bí ẩn.'])
    ],
    qs: [
      ['mc', "The lights are on. They ___ be at home.", 'must', ["can't", 'should', 'had to'], 'Chắc chắn có.'],
      ['mc', "That ___ be Tom – he's on holiday in Japan.", "can't", ['must', 'might', 'should'], 'Không thể.'],
      ['mc', "I can't find my keys. I ___ them at the office.", 'might have left', ['must leave', "can't leave", 'might leave yesterday'], 'Suy đoán quá khứ.'],
      ['mc', "The ground is wet. It ___ last night.", 'must have rained', ["can't have rained", 'might rain', 'must rain'], 'Chắc chắn đã.'],
      ['mc', 'stuck nghĩa là?', 'bị kẹt', ['bị lạc', 'bị ốm', 'bị muộn'], 'stuck.'],
      ['hear', "He can't have finished the report already – he only started an hour ago.", 'Không thể đã xong báo cáo vì mới bắt đầu 1 giờ trước.', ['Chắc chắn đã xong.', 'Có lẽ đã xong.', 'Sẽ xong trong 1 giờ.'], "can't have finished."],
      ['order', 'Sắp xếp: “Chắc anh ấy quên rồi.”', ['He', 'must have', 'forgotten.'], 'He must have forgotten.']
    ],
    noi: [['She *isn\'t* answering. → She *might* be *driving*. ↘', 'Cô ấy không nghe máy. Có thể đang lái xe.'], ['The office is *empty*. → Everyone *must* have gone *home*. ↘', 'Văn phòng trống. Chắc mọi người về rồi.'], ["You *can't* be *serious*! ↘", 'Bạn đùa chắc!']],
    hoithoai: {
      ctx: 'Cả nhóm chờ khách đối tác đến họp nhưng khách trễ 30 phút.', vai: 'Đồng nghiệp đoán, em suy luận.', ai: '👩 Anna',
      luot: [
        T(["Mr. Lim is 30 minutes late. Where could he be?", '', 'Ông Lim trễ 30 phút. Ông ấy có thể ở đâu?'], ["He might be stuck in traffic. It's rush hour.", 'Có thể kẹt xe. Đang giờ cao điểm.', 'might + lý do.'], ['He must stuck.', 'must be stuck.'], ['He is stuck surely.', 'Chưa có bằng chứng.']),
        T(["But he always takes the metro.", '', 'Nhưng ông ấy luôn đi metro.'], ["Then he can't be in traffic. He might have got the time wrong.", 'Vậy không thể kẹt xe. Có lẽ ông ấy nhầm giờ.', "can't + might have V3."], ['Then he must be in traffic.', 'Mâu thuẫn bằng chứng.'], ['He might have get the time wrong.', 'have + V3: got.']),
        T(["Look, I've got an email from him: 'Sorry, train problem!'", '', 'Này, có email ông ấy: "Xin lỗi, tàu gặp sự cố!"'], ["Ah, the metro must have broken down. That explains it.", 'À, chắc metro bị hỏng. Thế là rõ.', 'must have + V3.'], ["The metro can't have broken.", 'Mâu thuẫn email.'], ['The metro must break.', 'Quá khứ → must have broken.'])
      ], ket: 'Em đã suy luận bằng must / might / can\'t.'
    },
    tom: ['must / might / can\'t + V', 'must have / might have / can\'t have + V3'], nguphap: 'Động từ khuyết thiếu chỉ suy đoán', phatam: "must have → /ˈmʌstəv/; can't /kænt/ nhấn mạnh",
    loi: ['must + V-ed cho quá khứ', "can't have get"], btvn: ['Viết 6 câu suy đoán về một bức ảnh bất kỳ', 'Đoán nguyên nhân 3 sự cố gần đây (máy hỏng, khách trễ…)', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 23 ================= */
  const d23 = {
    n: 23, ten: P[22].ten, kinds: K,
    muc: 'Nói về việc thích nghi: be used to / get used to + V-ing so với used to + V; kể trải nghiệm sống – làm việc ở môi trường mới.',
    hoc: `${tbl(['Cấu trúc', 'Nghĩa', 'Ví dụ'], [['used to + V', 'đã từng (nay không còn)', 'I used to work in a bank.'], ['be used to + V-ing / N', 'đã quen với', "I'm used to working night shifts."], ['get used to + V-ing / N', 'dần quen với (quá trình)', "I'm getting used to the cold weather."]])}
      ${say("When I first moved to Seoul, I wasn't used to eating spicy food for breakfast. But after a few months, I got used to it.", 'Khi mới chuyển đến Seoul, tôi chưa quen ăn cay vào bữa sáng. Vài tháng sau tôi quen dần.')}
      ${G('used-to', 'used to / be used to / get used to')}`,
    vocab: [
      w('be used to', '/biː juːst tuː/', 'quen với', '+ V-ing / N.', ["I'm used to getting up early.", '', 'Tôi quen dậy sớm.']),
      w('get used to', '/ɡet juːst tuː/', 'dần quen với', '', ["You'll get used to it.", '', 'Bạn sẽ quen thôi.']),
      w('adapt', '/əˈdæpt/', 'thích nghi', '+ to.', ['It took me a month to adapt to the new job.', '', 'Tôi mất một tháng để thích nghi công việc mới.']),
      w('culture shock', '/ˈkʌltʃər ʃɑːk/', 'sốc văn hoá', '', ['I had culture shock in my first week.', '', 'Tuần đầu tôi bị sốc văn hoá.']),
      w('homesick', '/ˈhoʊmsɪk/', 'nhớ nhà', '', ['I was homesick at first.', '', 'Lúc đầu tôi nhớ nhà.']),
      w('shift', '/ʃɪft/', 'ca làm việc', '', ['I work the night shift.', '', 'Tôi làm ca đêm.']),
      w('customs', '/ˈkʌstəmz/', 'phong tục', '', ['Every country has different customs.', '', 'Mỗi nước có phong tục khác nhau.']),
      w('strange', '/streɪndʒ/', 'lạ', '', ['It felt strange at first.', '', 'Lúc đầu thấy lạ.']),
      w('at first', '/æt fɜːrst/', 'lúc đầu', '', ['At first, I found it difficult.', '', 'Lúc đầu tôi thấy khó.']),
      w('settle in', '/ˈsetl ɪn/', 'ổn định (nơi mới)', '', ['Have you settled in yet?', '', 'Bạn ổn định chưa?'])
    ],
    qs: [
      ['mc', "I'm used to ___ in a noisy office.", 'working', ['work', 'worked', 'to work'], 'be used to + V-ing.'],
      ['mc', 'I ___ smoke, but I gave up five years ago.', 'used to', ['am used to', 'get used to', 'was used to'], 'Thói quen cũ.'],
      ['mc', "Driving on the left is hard, but you'll ___ it.", 'get used to', ['used to', 'use to', 'be use'], 'Dần quen.'],
      ['mc', 'It took me weeks to adapt ___ the new system.', 'to', ['with', 'for', 'at'], 'adapt to.'],
      ['mc', 'homesick nghĩa là?', 'nhớ nhà', ['ốm ở nhà', 'chán nhà', 'say xe'], 'homesick.'],
      ['hear', "At first I wasn't used to the cold, but I've settled in well now.", 'Lúc đầu chưa quen lạnh, giờ đã ổn định.', ['Vẫn chưa quen lạnh.', 'Đã quen lạnh từ đầu.', 'Sắp chuyển đi.'], "wasn't used to … settled in."],
      ['order', 'Sắp xếp: “Bạn sẽ quen thôi.”', ["You'll", 'get', 'used', 'to it.'], "You'll get used to it."]
    ],
    noi: [["At *first*, → I wasn't *used* to the *weather*. ↘", 'Lúc đầu tôi chưa quen thời tiết.'], ["But I *soon* got *used* to it. ↘", 'Nhưng tôi sớm quen.'], ['Have you *settled* in *yet*? ↗', 'Bạn ổn định chưa?']],
    hoithoai: {
      ctx: 'Em đi làm 6 tháng ở chi nhánh Singapore, một đồng nghiệp hỏi thăm.', vai: 'Raj hỏi, em kể chuyện thích nghi.', ai: '🧑 Raj',
      luot: [
        T(['So, have you settled in?', '', 'Bạn ổn định chưa?'], ["Yes, mostly. At first I wasn't used to the fast pace, but I've got used to it.", 'Phần lớn rồi. Lúc đầu chưa quen nhịp nhanh nhưng giờ đã quen.', "wasn't used to + got used to."], ['Yes, I used to the pace.', 'Thiếu be/get.'], ['I am use to.', 'used.']),
        T(["What was the hardest thing?", '', 'Điều gì khó nhất?'], ["Speaking English all day. I used to speak Vietnamese at work, so it was tiring.", 'Nói tiếng Anh cả ngày. Trước đây ở chỗ làm tôi nói tiếng Việt nên mệt lắm.', 'used to + V (thói quen cũ).'], ['I used to speaking Vietnamese.', 'used to + V.'], ['I am used to speak.', 'be used to + V-ing.']),
        T(['And now?', '', 'Còn giờ?'], ["Now I'm used to thinking in English, and I don't feel homesick anymore.", 'Giờ tôi quen nghĩ bằng tiếng Anh và hết nhớ nhà.', 'be used to + V-ing.'], ['Now I used to think English.', 'Sai cấu trúc.'], ["I'm homesick used.", 'Câu rối.'])
      ], ket: 'Em đã kể quá trình thích nghi đúng cấu trúc.'
    },
    tom: ['used to + V', 'be / get used to + V-ing', 'adapt to, settle in'], nguphap: 'used to / be used to / get used to', phatam: 'used to /ˈjuːstə/ đọc liền',
    loi: ['be used to + V', 'used to + V-ing (thói quen cũ)'], btvn: ['Viết 100 từ về lần em thích nghi môi trường mới', 'Viết 3 cặp câu used to / be used to', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 24 ================= */
  const d24 = {
    n: 24, ten: P[23].ten, kinds: K,
    muc: 'Đọc tiêu đề và tin ngắn, kể lại tin tức, phản ứng với tin; dùng bị động thông tấn.',
    hoc: `<h4>1. Ngôn ngữ tiêu đề</h4>${tbl(['Tiêu đề', 'Nghĩa đầy đủ'], [['Bank to open 50 new branches', 'The bank is going to open 50 new branches.'], ['Storm hits central coast', 'A storm has hit the central coast.'], ['New law approved', 'A new law has been approved.']])}
      <h4>2. Kể lại và phản ứng</h4>${exs([['Did you hear about the new metro line? – No, what happened?', 'Bạn nghe tin tuyến metro mới chưa? – Chưa, sao vậy?'], ["According to the news, it'll open next month.", 'Theo tin tức, tháng sau sẽ mở.'], ["Really? That's great news! / That's terrible!", 'Thật à? Tin tuyệt quá! / Tệ quá!']])}
      ${tip('📰 Đọc tin tiếng Anh dễ: VnExpress International, Tuổi Trẻ News, BBC Learning English (News Review). Mỗi ngày 1 tin, ghi 5 từ mới.')}`,
    vocab: [
      w('headline', '/ˈhedlaɪn/', 'tiêu đề báo', '', ['Did you see the headline?', '', 'Bạn thấy tiêu đề chưa?']),
      w('according to the news', '/əˈkɔːrdɪŋ tə ðə nuːz/', 'theo tin tức', '', ['According to the news, prices will rise.', '', 'Theo tin, giá sẽ tăng.']),
      w('report', '/rɪˈpɔːrt/', 'đưa tin; bản tin', '', ['It was reported that…', '', 'Có tin rằng…']),
      w('announce', '/əˈnaʊns/', 'thông báo', '', ['The government announced a new policy.', '', 'Chính phủ công bố chính sách mới.']),
      w('policy', '/ˈpɑːləsi/', 'chính sách', '', ['The new policy starts in January.', '', 'Chính sách mới bắt đầu tháng 1.']),
      w('affect', '/əˈfekt/', 'ảnh hưởng đến', '', ['The storm affected thousands of people.', '', 'Cơn bão ảnh hưởng hàng nghìn người.']),
      w('increase in', '/ˈɪnkriːs ɪn/', 'sự tăng về', '', ['There was an increase in tourism.', '', 'Du lịch tăng.']),
      w('residents', '/ˈrezɪdənts/', 'cư dân', '', ['Residents were moved to safety.', '', 'Cư dân được di dời an toàn.']),
      w('official', '/əˈfɪʃl/', 'chính thức; quan chức', '', ['The official figures are not out yet.', '', 'Số liệu chính thức chưa có.']),
      w('breaking news', '/ˈbreɪkɪŋ nuːz/', 'tin nóng', '', ["Here's some breaking news.", '', 'Có tin nóng.'])
    ],
    qs: [
      ['mc', 'Tiêu đề "Bank to open 50 branches" nghĩa là?', 'Ngân hàng sắp mở 50 chi nhánh.', ['Ngân hàng đã đóng 50 chi nhánh.', 'Ngân hàng mở cửa lúc 5 giờ.', 'Ngân hàng có 50 chi nhánh.'], 'to + V trong tiêu đề = tương lai.'],
      ['mc', 'Tiêu đề "Storm hits central coast" dùng thì gì để nói việc vừa xảy ra?', 'hiện tại đơn (thay cho HTHT)', ['tương lai', 'quá khứ hoàn thành', 'tiếp diễn'], 'Tiêu đề dùng hiện tại đơn.'],
      ['mc', 'Thousands of homes ___ by the floods.', 'were affected', ['affected', 'were effect', 'affecting'], 'Bị động.'],
      ['mc', '___ the news, the bridge will open in May.', 'According to', ['According', 'Accord with', 'By according'], 'According to.'],
      ['mc', 'policy nghĩa là?', 'chính sách', ['cảnh sát', 'chính trị', 'hợp đồng'], 'policy.'],
      ['hear', "According to the report, the number of tourists increased by thirty percent this year.", 'Khách du lịch tăng 30% năm nay.', ['Giảm 30%.', 'Tăng 13%.', 'Không đổi.'], 'increased by thirty percent.'],
      ['order', 'Sắp xếp: “Chính phủ đã công bố chính sách mới.”', ['The government', 'has announced', 'a new', 'policy.'], 'The government has announced a new policy.']
    ],
    noi: [['Did you *hear* about the new *metro* *line*? ↗', 'Bạn nghe tin tuyến metro mới chưa?'], ["According to the *news*, → it'll *open* next *month*. ↘", 'Theo tin, tháng sau mở.'], ["*Really*? ↗ That's *great* *news*! ↘", 'Thật à? Tin tuyệt quá!']],
    hoithoai: {
      ctx: 'Giờ giải lao, đồng nghiệp người Anh bàn tin tức.', vai: 'Oliver kể tin, em hỏi và phản ứng.', ai: '🧑 Oliver',
      luot: [
        T(['Did you hear the news about the new airport?', '', 'Bạn nghe tin về sân bay mới chưa?'], ['No, I didn\'t. What happened?', 'Chưa. Chuyện gì vậy?', 'Phản ứng tự nhiên.'], ['Yes, what?', 'Mâu thuẫn.'], ['I heard no.', 'Sai.']),
        T(["It's going to open in June, a year earlier than planned.", '', 'Sẽ mở tháng 6, sớm hơn kế hoạch một năm.'], ["Really? That's great news. It'll affect travel a lot.", 'Thật à? Tin tuyệt. Sẽ ảnh hưởng nhiều đến việc đi lại.', 'Phản ứng + bình luận.'], ["Really? That's terrible news.", 'Phản ứng không hợp.'], ['It affects to travel.', 'affect không có to.']),
        T(['Yes, but some residents are worried about noise.', '', 'Ừ, nhưng một số cư dân lo về tiếng ồn.'], ['That makes sense. I hope the government has a plan for that.', 'Cũng hợp lý. Mong chính phủ có kế hoạch cho việc đó.', 'Bình luận cân bằng.'], ['Residents are noise.', 'Câu sai.'], ["I don't care.", 'Thiếu tinh tế.'])
      ], ket: 'Em đã bàn về tin tức bằng tiếng Anh.'
    },
    tom: ['Ngôn ngữ tiêu đề', 'Kể lại tin', 'Phản ứng với tin'], nguphap: 'Bị động trong tin tức; According to…', phatam: "Phản ứng: Really? ↗ That's great! ↘",
    loi: ['affect to', 'Hiểu sai thì trong tiêu đề'], btvn: ['Đọc 1 tin tiếng Anh, tóm tắt 5 câu', 'Kể lại tin đó cho người thân bằng tiếng Anh', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 25 ================= */
  const d25 = {
    n: 25, ten: P[24].ten, kinds: K,
    muc: 'Thảo luận vấn đề môi trường, nguyên nhân – hậu quả – giải pháp; dùng từ nối because of, as a result, in order to.',
    hoc: `${tbl(['Ý', 'Từ nối', 'Ví dụ'], [['Nguyên nhân', 'because of / due to + N; because + mệnh đề', 'Air pollution is getting worse because of traffic.'], ['Hậu quả', 'As a result, / This leads to…', 'As a result, more people have breathing problems.'], ['Mục đích', 'in order to / so that', 'We should use public transport in order to reduce emissions.'], ['Giải pháp', 'One solution is to… / The government should…', 'One solution is to ban single-use plastic.']])}
      ${tip('🗣️ IELTS Speaking Part 3 hay hỏi: <i>What can individuals do to protect the environment?</i> Trả lời: ý chính → lý do → ví dụ.')}`,
    vocab: [
      w('environment', '/ɪnˈvaɪrənmənt/', 'môi trường', '', ['We must protect the environment.', '', 'Chúng ta phải bảo vệ môi trường.']),
      w('pollution', '/pəˈluːʃn/', 'ô nhiễm', '', ['Air pollution is serious in big cities.', '', 'Ô nhiễm không khí nghiêm trọng ở thành phố lớn.']),
      w('climate change', '/ˈklaɪmət tʃeɪndʒ/', 'biến đổi khí hậu', '', ['Climate change affects the Mekong Delta.', '', 'BĐKH ảnh hưởng ĐBSCL.']),
      w('single-use plastic', '/ˈsɪŋɡl juːs ˈplæstɪk/', 'nhựa dùng một lần', '', ['Avoid single-use plastic.', '', 'Tránh nhựa dùng một lần.']),
      w('recycle', '/ˌriːˈsaɪkl/', 'tái chế', '', ['We recycle paper and bottles.', '', 'Chúng tôi tái chế giấy và chai.']),
      w('reduce', '/rɪˈduːs/', 'giảm', '', ['We need to reduce waste.', '', 'Cần giảm rác thải.']),
      w('emissions', '/iˈmɪʃnz/', 'khí thải', '', ['Cars produce a lot of emissions.', '', 'Ô tô thải nhiều khí.']),
      w('renewable energy', '/rɪˈnuːəbl ˈenərdʒi/', 'năng lượng tái tạo', '', ['Solar power is renewable energy.', '', 'Điện mặt trời là năng lượng tái tạo.']),
      w('as a result', '/æz ə rɪˈzʌlt/', 'kết quả là', '', ['As a result, the river is dirty.', '', 'Kết quả là con sông bẩn.']),
      w('in order to', '/ɪn ˈɔːrdər tə/', 'để (mục đích)', '', ['I cycle in order to save money.', '', 'Tôi đạp xe để tiết kiệm.'])
    ],
    qs: [
      ['mc', 'Many fish died ___ the pollution.', 'because of', ['because', 'as a result', 'in order to'], 'Theo sau là danh từ.'],
      ['mc', 'Factories polluted the river. ___, people could not fish there.', 'As a result', ['Because of', 'In order to', 'Due'], 'Hậu quả.'],
      ['mc', 'We use solar panels ___ save electricity.', 'in order to', ['because of', 'as a result', 'due to'], 'Mục đích.'],
      ['mc', 'renewable energy là?', 'năng lượng tái tạo', ['năng lượng hạt nhân', 'xăng dầu', 'than đá'], 'renewable.'],
      ['mc', 'recycle nghĩa là?', 'tái chế', ['vứt bỏ', 'đạp xe lại', 'sản xuất'], 'recycle.'],
      ['hear', "One solution is to ban single-use plastic bags in supermarkets.", 'Giải pháp: cấm túi nhựa dùng một lần ở siêu thị.', ['Tăng giá túi giấy.', 'Bán thêm túi nhựa.', 'Tái chế túi nhựa ở nhà.'], 'ban single-use plastic bags.'],
      ['order', 'Sắp xếp: “Chúng ta cần giảm rác thải.”', ['We', 'need to', 'reduce', 'waste.'], 'We need to reduce waste.']
    ],
    noi: [['Air *pollution* is getting *worse* → because of *traffic*. ↘', 'Ô nhiễm không khí tệ hơn vì giao thông.'], ['One *solution* is to *ban* single-use *plastic*. ↘', 'Một giải pháp là cấm nhựa dùng một lần.'], ['We should use *public* *transport* → in order to *reduce* *emissions*. ↘', 'Nên đi phương tiện công cộng để giảm khí thải.']],
    hoithoai: {
      ctx: 'Giám khảo IELTS hỏi em về môi trường (Speaking Part 3).', vai: 'Trả lời có lý do và ví dụ.', ai: '👩‍🏫 Examiner',
      luot: [
        T(["What's the biggest environmental problem in your country?", '', 'Vấn đề môi trường lớn nhất ở nước bạn là gì?'], ['I think it\'s air pollution in big cities, mainly because of the huge number of motorbikes.', 'Tôi nghĩ là ô nhiễm không khí ở thành phố lớn, chủ yếu do quá nhiều xe máy.', 'Ý + nguyên nhân.'], ['Pollution.', 'Quá ngắn.'], ['It is because pollution.', 'because of + N.']),
        T(['What effects does it have?', '', 'Nó gây ảnh hưởng gì?'], ['As a result, many people have breathing problems, especially children.', 'Kết quả là nhiều người có vấn đề hô hấp, nhất là trẻ em.', 'Hậu quả.'], ['Effect is bad.', 'Mơ hồ.'], ['As a result of, people sick.', 'Sai.']),
        T(['What can individuals do?', '', 'Mỗi cá nhân có thể làm gì?'], ['People could use public transport more often in order to reduce emissions. For example, I take the metro to work.', 'Mọi người có thể đi phương tiện công cộng nhiều hơn để giảm khí thải. Ví dụ, tôi đi metro đi làm.', 'Giải pháp + ví dụ cá nhân.'], ['Nothing.', 'Không phát triển ý.'], ['Recycle is good, yes.', 'Thiếu cấu trúc.'])
      ], ket: 'Em đã thảo luận môi trường theo cấu trúc nguyên nhân – hậu quả – giải pháp.'
    },
    tom: ['Nguyên nhân – hậu quả – giải pháp', 'because of / as a result / in order to', 'Từ vựng môi trường'], nguphap: 'Từ nối nguyên nhân, kết quả, mục đích', phatam: 'environment /ɪnˈvaɪrənmənt/, emissions /iˈmɪʃnz/',
    loi: ['because + danh từ', 'As a result of đầu câu thiếu danh từ'], btvn: ['Viết đoạn 120 từ về một vấn đề môi trường ở quê em', 'Trả lời 3 câu hỏi Part 3, ghi âm', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 26 ================= */
  const d26 = {
    n: 26, ten: P[25].ten, kinds: K,
    muc: 'Phân tích ưu – nhược điểm của công nghệ và mạng xã hội; so sánh hai mặt, đưa kết luận cá nhân.',
    hoc: `${tbl(['Ưu điểm', 'Nhược điểm'], [['stay in touch with friends and family', 'spend too much time online'], ['find information quickly', 'spread fake news'], ['promote small businesses', 'cause stress and comparison'], ['learn new skills for free', 'privacy and security risks']])}
      <h4>Khung câu trả lời 2 mặt</h4>${exs([['On the one hand, social media helps small businesses reach more customers.', 'Một mặt, mạng xã hội giúp doanh nghiệp nhỏ tiếp cận nhiều khách hơn.'], ['On the other hand, it can spread fake news very quickly.', 'Mặt khác, nó có thể lan truyền tin giả rất nhanh.'], ['Overall, I believe the benefits outweigh the drawbacks if we use it wisely.', 'Nhìn chung, tôi tin lợi ích lớn hơn tác hại nếu dùng khôn ngoan.']])}`,
    vocab: [
      w('social media', '/ˈsoʊʃl ˈmiːdiə/', 'mạng xã hội', '', ['I use social media for work.', '', 'Tôi dùng MXH cho công việc.']),
      w('fake news', '/feɪk nuːz/', 'tin giả', '', ['Fake news spreads quickly.', '', 'Tin giả lan nhanh.']),
      w('privacy', '/ˈpraɪvəsi/', 'quyền riêng tư', '', ['Protect your privacy online.', '', 'Bảo vệ quyền riêng tư trên mạng.']),
      w('addicted', '/əˈdɪktɪd/', 'nghiện', '+ to.', ['Some teenagers are addicted to their phones.', '', 'Một số thiếu niên nghiện điện thoại.']),
      w('stay in touch', '/steɪ ɪn tʌtʃ/', 'giữ liên lạc', '', ['I stay in touch with old friends on Facebook.', '', 'Tôi giữ liên lạc bạn cũ qua Facebook.']),
      w('outweigh', '/ˌaʊtˈweɪ/', 'lớn hơn, nặng hơn', '', ['The benefits outweigh the risks.', '', 'Lợi ích lớn hơn rủi ro.']),
      w('drawback', '/ˈdrɔːbæk/', 'nhược điểm', '', ['The main drawback is the cost.', '', 'Nhược điểm chính là chi phí.']),
      w('scam', '/skæm/', 'lừa đảo', '', ['Be careful of online scams.', '', 'Cẩn thận lừa đảo trực tuyến.']),
      w('content', '/ˈkɑːntent/', 'nội dung', '', ['She creates video content.', '', 'Cô ấy làm nội dung video.']),
      w('wisely', '/ˈwaɪzli/', 'một cách khôn ngoan', '', ['Use technology wisely.', '', 'Dùng công nghệ khôn ngoan.'])
    ],
    qs: [
      ['mc', 'Some people are addicted ___ social media.', 'to', ['with', 'of', 'for'], 'addicted to.'],
      ['mc', 'The benefits ___ the drawbacks.', 'outweigh', ['outweighs to', 'are outweigh', 'weigh out'], 'outweigh.'],
      ['mc', '___, social media helps businesses. On the other hand, it spreads fake news.', 'On the one hand', ['As a result', 'Because of', 'In order to'], 'On the one hand … On the other hand.'],
      ['mc', 'scam nghĩa là?', 'lừa đảo', ['quét mã', 'thư rác', 'tin nóng'], 'scam.'],
      ['mc', 'privacy nghĩa là?', 'quyền riêng tư', ['đặc quyền', 'giá cả', 'chính sách'], 'privacy.'],
      ['hear', "Overall, I think social media is useful, as long as we check information before sharing it.", 'Hữu ích nếu kiểm tra thông tin trước khi chia sẻ.', ['Nên bỏ mạng xã hội.', 'Mạng xã hội luôn đáng tin.', 'Chia sẻ mọi thứ.'], 'as long as we check.'],
      ['order', 'Sắp xếp: “Hãy dùng công nghệ khôn ngoan.”', ['Use', 'technology', 'wisely.'], 'Use technology wisely.']
    ],
    noi: [['On the *one* *hand*, → social media helps *small* *businesses*. ↘', 'Một mặt, MXH giúp doanh nghiệp nhỏ.'], ['On the *other* *hand*, → it can spread *fake* *news*. ↘', 'Mặt khác, nó lan truyền tin giả.'], ['*Overall*, → the *benefits* outweigh the *drawbacks*. ↘', 'Nhìn chung lợi nhiều hơn hại.']],
    hoithoai: {
      ctx: 'Em tranh luận nhẹ với bạn về việc cho trẻ em dùng điện thoại.', vai: 'Bạn nêu ý, em phân tích hai mặt.', ai: '👩 Mia',
      luot: [
        T(['I think children under 12 shouldn\'t have smartphones at all.', '', 'Tôi nghĩ trẻ dưới 12 tuổi không nên có điện thoại.'], ['I see your point. On the one hand, they can get addicted to games.', 'Tôi hiểu. Một mặt, trẻ có thể nghiện game.', 'Công nhận + phân tích.'], ['You are completely wrong.', 'Quá thẳng.'], ['Children addicted with phones.', 'addicted to; thiếu are.']),
        T(['Exactly!', '', 'Chính xác!'], ['On the other hand, phones help them learn and stay in touch with parents.', 'Mặt khác, điện thoại giúp học và giữ liên lạc với bố mẹ.', 'Mặt đối lập.'], ['On the other hand, phones are bad.', 'Không phải mặt đối lập.'], ['Other hand, learning.', 'Câu cụt.']),
        T(['So what do you suggest?', '', 'Vậy bạn đề xuất gì?'], ['Overall, I think they can use phones as long as parents set clear time limits.', 'Nhìn chung, trẻ có thể dùng nếu bố mẹ đặt giới hạn thời gian rõ ràng.', 'Kết luận có điều kiện.'], ['Give them phones all day.', 'Thiếu cân nhắc.'], ['I suggest nothing.', 'Không xây dựng.'])
      ], ket: 'Em đã phân tích hai mặt và đưa kết luận cân bằng.'
    },
    tom: ['Ưu – nhược của công nghệ', 'On the one hand / On the other hand / Overall', 'outweigh, drawback'], nguphap: 'Từ nối đối lập và kết luận', phatam: 'Nhịp cân đối hai vế On the one hand → On the other hand',
    loi: ['addicted with', 'Chỉ nêu một mặt'], btvn: ['Viết đoạn 150 từ "Social media: good or bad?"', 'Ghi âm 1 phút trả lời câu hỏi trên', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 27 ================= */
  const d27 = {
    n: 27, ten: P[26].ten, kinds: K,
    muc: 'Viết đoạn văn ý kiến 150–200 từ theo cấu trúc PEEL; chuẩn bị cho IELTS Writing Task 2 và VSTEP.',
    hoc: `<h4>1. Cấu trúc PEEL cho mỗi đoạn thân bài</h4>${tbl(['Chữ', 'Nghĩa', 'Câu mẫu'], [['P – Point', 'Câu chủ đề', 'The main advantage of online learning is flexibility.'], ['E – Explain', 'Giải thích', 'Learners can study at any time that suits them.'], ['E – Example', 'Ví dụ', 'For example, many bank staff take courses in the evening after work.'], ['L – Link', 'Nối lại ý chính', 'Therefore, online learning is ideal for busy adults.']])}
      <h4>2. Bài 4 đoạn</h4><p><b>Mở bài</b> (viết lại đề + quan điểm) → <b>Thân 1</b> (PEEL) → <b>Thân 2</b> (PEEL) → <b>Kết bài</b> (tóm tắt + nhắc lại quan điểm).</p>
      ${tip('✍️ Mỗi bài dùng ≥ 4 từ nối khác nhau: <i>Firstly, Moreover, However, For example, Therefore, In conclusion</i>. Kiểm tra số từ và thì.')}`,
    vocab: [
      w('flexibility', '/ˌfleksəˈbɪləti/', 'sự linh hoạt', '', ['Online courses offer flexibility.', '', 'Khoá online mang lại sự linh hoạt.']),
      w('firstly', '/ˈfɜːrstli/', 'thứ nhất', '', ['Firstly, it saves time.', '', 'Thứ nhất, nó tiết kiệm thời gian.']),
      w('moreover', '/mɔːrˈoʊvər/', 'hơn nữa', '', ['Moreover, it is cheaper.', '', 'Hơn nữa, nó rẻ hơn.']),
      w('therefore', '/ˈðerfɔːr/', 'vì vậy', '', ['Therefore, I support this idea.', '', 'Vì vậy, tôi ủng hộ ý này.']),
      w('in conclusion', '/ɪn kənˈkluːʒn/', 'kết luận', '', ['In conclusion, both have benefits.', '', 'Kết luận, cả hai đều có lợi.']),
      w('argue', '/ˈɑːrɡjuː/', 'lập luận', '', ['Some people argue that…', '', 'Một số người lập luận rằng…']),
      w('support', '/səˈpɔːrt/', 'ủng hộ', '', ['I strongly support this view.', '', 'Tôi ủng hộ mạnh mẽ quan điểm này.']),
      w('view', '/vjuː/', 'quan điểm', '', ['In my view, it is necessary.', '', 'Theo quan điểm của tôi, nó cần thiết.']),
      w('significant', '/sɪɡˈnɪfɪkənt/', 'đáng kể', '', ['There is a significant difference.', '', 'Có sự khác biệt đáng kể.']),
      w('ideal', '/aɪˈdiːəl/', 'lý tưởng', '', ['It is ideal for busy people.', '', 'Lý tưởng cho người bận rộn.'])
    ],
    qs: [
      ['mc', 'Trong PEEL, chữ P là?', 'Point – câu chủ đề', ['Practice', 'Paragraph', 'Problem'], 'Point.'],
      ['mc', '___, online learning saves money.', 'Moreover', ['Because', 'Although', 'Despite'], 'Bổ sung ý.'],
      ['mc', 'Từ nối dùng ở đoạn kết?', 'In conclusion,', ['Firstly,', 'For example,', 'Moreover,'], 'In conclusion.'],
      ['mc', 'Some people ___ that exams are unnecessary.', 'argue', ['argument', 'arguing to', 'argues'], 'people argue.'],
      ['mc', 'significant nghĩa là?', 'đáng kể', ['có ý nghĩa ký hiệu', 'nhỏ bé', 'đặc biệt'], 'significant.'],
      ['hear', "For example, many bank staff take online courses in the evening after work.", 'Ví dụ: nhân viên ngân hàng học online buổi tối.', ['Nhân viên học buổi sáng.', 'Nhân viên không học thêm.', 'Ngân hàng tổ chức khoá học.'], 'evening after work.'],
      ['order', 'Sắp xếp: “Theo quan điểm của tôi, điều đó cần thiết.”', ['In my view,', 'it', 'is', 'necessary.'], 'In my view, it is necessary.']
    ],
    noi: [['The *main* *advantage* of online learning → is *flexibility*. ↘', 'Ưu điểm chính của học online là linh hoạt.'], ['For *example*, → many bank *staff* → take courses in the *evening*. ↘', 'Ví dụ, nhân viên ngân hàng học buổi tối.'], ['*Therefore*, → it is *ideal* for *busy* *adults*. ↘', 'Vì vậy, nó lý tưởng cho người bận rộn.']],
    hoithoai: {
      ctx: 'Gia sư AI giúp em dàn ý đề: "Online learning is better than classroom learning. Do you agree?"', vai: 'Gia sư hỏi từng phần, em trả lời.', ai: '🤖 Tutor',
      luot: [
        T(["What's your opinion for the introduction?", '', 'Quan điểm của em cho mở bài là gì?'], ['I partly agree. Online learning is more flexible, but classroom learning is better for some skills.', 'Tôi đồng ý một phần. Học online linh hoạt hơn nhưng học trên lớp tốt hơn cho một số kỹ năng.', 'Quan điểm rõ.'], ['Online yes.', 'Quá ngắn.'], ['I agree and disagree everything.', 'Mơ hồ.']),
        T(['Good. Give me a Point and an Example for body paragraph 1.', '', 'Tốt. Cho câu chủ đề và ví dụ cho thân bài 1.'], ['Point: online learning offers flexibility. Example: bank staff can study at night after work.', 'Ý: học online linh hoạt. Ví dụ: nhân viên ngân hàng học buổi tối sau giờ làm.', 'PEEL đúng.'], ['Point: I like online.', 'Không phải câu chủ đề học thuật.'], ['Example: firstly.', 'Sai.']),
        T(['And how will you link it back?', '', 'Nối lại ý thế nào?'], ['Therefore, online learning is ideal for busy adults.', 'Vì vậy, học online lý tưởng cho người bận rộn.', 'Link.'], ['However, online is bad.', 'Mâu thuẫn.'], ['In conclusion, the end.', 'Không phải câu nối.'])
      ], ket: 'Em đã dàn ý bài viết ý kiến theo PEEL.'
    },
    tom: ['PEEL', 'Bài 4 đoạn', 'Từ nối học thuật'], nguphap: 'Câu chủ đề; từ nối Firstly, Moreover, Therefore, In conclusion', phatam: 'Đọc to bài viết, ngắt ở từ nối',
    loi: ['Không có quan điểm rõ', 'Thiếu ví dụ'], btvn: ['Viết bài 180 từ: "Online learning is better than classroom learning."', 'Bấm Sao chép trong Luyện viết để nhờ gia sư AI chấm', 'Làm bài "IELTS Writing Task 2" trong Luyện đề']
  };

  /* ================= NGÀY 28 ================= */
  const d28 = {
    n: 28, ten: P[27].ten, tong: 1, kt: { n: 20, min: 20 }, kinds: ['listen', 'listenWord', 'listen', 'meaning', 'write'],
    muc: 'Nghe bài nói 1–2 phút, nhận ra dấu hiệu chuyển ý, ghi chú bằng từ khoá và ký hiệu.',
    hoc: `<h4>1. Từ báo hiệu trong bài nói</h4>${tbl(['Báo hiệu', 'Ý nghĩa'], [['First of all / To begin with', 'ý đầu tiên'], ['Another important point is…', 'thêm ý'], ['However / On the other hand', 'đối lập – thường là ý quan trọng'], ['The main reason is…', 'lý do chính'], ['To sum up / In short', 'tóm tắt – nghe kỹ!']])}
      <h4>2. Ghi chú nhanh</h4><p>Dùng ký hiệu: ↑ tăng, ↓ giảm, → dẫn đến, = bằng, ≠ khác, + thêm, ex. ví dụ, ppl người, govt chính phủ.</p>
      ${tip('🎧 Nghe lần 1: nắm ý chính. Lần 2: ghi chi tiết (số, tên, lý do). Không cố viết cả câu.')}`,
    vocab: [
      w('note-taking', '/ˈnoʊt teɪkɪŋ/', 'ghi chú', '', ['Note-taking helps you remember.', '', 'Ghi chú giúp bạn nhớ.']),
      w('main idea', '/meɪn aɪˈdiːə/', 'ý chính', '', ["What's the main idea?", '', 'Ý chính là gì?']),
      w('to begin with', '/tə bɪˈɡɪn wɪð/', 'trước hết', '', ['To begin with, let me explain the problem.', '', 'Trước hết, để tôi giải thích vấn đề.']),
      w('in short', '/ɪn ʃɔːrt/', 'nói ngắn gọn', '', ['In short, we need more time.', '', 'Nói ngắn gọn, chúng ta cần thêm thời gian.']),
      w('lecture', '/ˈlektʃər/', 'bài giảng', '', ['The lecture was about sleep.', '', 'Bài giảng về giấc ngủ.']),
      w('speaker', '/ˈspiːkər/', 'người nói', '', ['The speaker talked about AI.', '', 'Người nói bàn về AI.']),
      w('key point', '/kiː pɔɪnt/', 'điểm then chốt', '', ['Write down the key points.', '', 'Ghi lại các điểm then chốt.']),
      w('research', '/ˈriːsɜːrtʃ/', 'nghiên cứu', 'Không đếm được.', ['Research shows that…', '', 'Nghiên cứu cho thấy…']),
      w('suggest', '/səˈdʒest/', 'gợi ý; cho thấy', '', ['The study suggests a link.', '', 'Nghiên cứu cho thấy có mối liên hệ.']),
      w('percent', '/pərˈsent/', 'phần trăm', '', ['Sixty percent of users agreed.', '', '60% người dùng đồng ý.'])
    ],
    qs: [
      ['hear', 'To begin with, research suggests that people who sleep less than six hours make more mistakes at work.', 'Ngủ dưới 6 tiếng mắc nhiều lỗi hơn ở chỗ làm.', ['Ngủ nhiều mắc nhiều lỗi.', 'Ngủ 6 tiếng là đủ.', 'Không liên quan.'], 'less than six hours → more mistakes.'],
      ['hear', 'However, the most important point is not how long you sleep, but how regularly you sleep.', 'Quan trọng nhất là ngủ đều đặn.', ['Quan trọng nhất là ngủ lâu.', 'Ngủ trưa là tốt nhất.', 'Ngủ muộn không sao.'], 'However → ý quan trọng: regularly.'],
      ['hear', 'In our survey, sixty-five percent of staff said they check emails after 10 p.m.', '65% nhân viên đọc email sau 10 giờ tối.', ['56% nhân viên.', '65% nhân viên ngủ trước 10 giờ.', '15% nhân viên.'], 'sixty-five percent.'],
      ['hear', 'In short, turning off notifications in the evening can improve both sleep and productivity.', 'Tắt thông báo buổi tối cải thiện giấc ngủ và năng suất.', ['Bật thông báo để làm việc tốt hơn.', 'Chỉ cải thiện giấc ngủ.', 'Tắt điện thoại cả ngày.'], 'In short = tóm tắt.'],
      ['mc', 'Ký hiệu "↑" khi ghi chú nghĩa là?', 'tăng', ['giảm', 'dẫn đến', 'bằng'], '↑ = tăng.'],
      ['mc', 'Từ báo hiệu tóm tắt?', 'In short', ['To begin with', 'Another point', 'For example'], 'In short.'],
      ['mc', 'research là danh từ?', 'không đếm được', ['đếm được: a research', 'chỉ số nhiều', 'động từ duy nhất'], 'research (n) không đếm được.']
    ],
    noi: [['*To* *begin* with, → let me *explain* the *problem*. ↘', 'Trước hết, để tôi giải thích vấn đề.'], ['*However*, → the most *important* *point* is… ↘', 'Tuy nhiên, điểm quan trọng nhất là…'], ['In *short*, → we need more *time*. ↘', 'Nói ngắn gọn, cần thêm thời gian.']],
    hoithoai: {
      ctx: 'Em vừa nghe một bài nói về làm việc từ xa. Tắt "Hiện nghĩa tiếng Việt" và trả lời người hỏi.', vai: 'Đồng nghiệp hỏi lại nội dung.', ai: '🎧 Colleague',
      luot: [
        T(["What was the main idea of the talk?", '', 'Ý chính bài nói là gì?'], ['The speaker said remote work can increase productivity if teams communicate well.', 'Người nói cho rằng làm từ xa tăng năng suất nếu nhóm giao tiếp tốt.', 'Tóm ý chính + tường thuật.'], ['It was about many things.', 'Mơ hồ.'], ['The speaker says remote is bad always.', 'Sai ý.']),
        T(['Did she give any numbers?', '', 'Có số liệu không?'], ['Yes. She mentioned that 70 percent of staff preferred working from home two days a week.', 'Có. Bà ấy nói 70% nhân viên thích làm ở nhà 2 ngày/tuần.', 'Chi tiết số liệu.'], ['Yes, 17 percent.', 'Nghe nhầm.'], ['No numbers.', 'Bỏ sót.']),
        T(['What was her final advice?', '', 'Lời khuyên cuối là gì?'], ['In short, she suggested having one video meeting every morning.', 'Tóm lại, bà ấy đề xuất họp video mỗi sáng.', 'In short → kết luận.'], ['She suggested to stop meeting.', 'Sai ý, sai cấu trúc.'], ['No advice.', 'Bỏ sót.'])
      ], ket: 'Em đã nghe, ghi chú và tóm tắt bài nói.'
    },
    tom: ['Từ báo hiệu', 'Ghi chú bằng ký hiệu', 'Tóm tắt bài nói'], nguphap: 'Tường thuật: The speaker said / mentioned / suggested…', phatam: 'Nghe nhấn và ngắt trước However / In short',
    loi: ['Ghi cả câu', 'Bỏ qua ý sau However'], btvn: ['Nghe 1 bài BBC 6 Minute English, ghi 5 ý', 'Tóm tắt bằng 5 câu tường thuật', 'Làm đề "IELTS mini 2" phần nghe']
  };

  /* ================= NGÀY 29 ================= */
  const d29 = {
    n: 29, ten: P[28].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Mô phỏng thi nói IELTS 3 phần: Part 1 câu hỏi ngắn, Part 2 nói 1–2 phút theo thẻ, Part 3 thảo luận.',
    hoc: `${tbl(['Phần', 'Thời gian', 'Mẹo'], [['Part 1 – Giới thiệu', '4–5 phút', 'Trả lời 2–3 câu: ý + lý do + ví dụ.'], ['Part 2 – Thẻ đề', '1 phút chuẩn bị, nói 1–2 phút', 'Ghi 4–5 từ khoá, nói đủ các ý gợi ý, kể chuyện có thời gian, địa điểm, cảm xúc.'], ['Part 3 – Thảo luận', '4–5 phút', 'Mở rộng: nguyên nhân, so sánh xưa – nay, dự đoán tương lai; dùng It depends…, On the other hand…']])}
      ${tip('🎤 Vào <a href="#/tieng-anh/luyen-de">Luyện đề → Luyện nói</a> để nói tự do có đếm từ và tốc độ. Mục tiêu B1: nói liền mạch 1 phút, 110+ từ/phút.')}`,
    qs: [['mc', 'Ở Part 2, thời gian chuẩn bị là?', '1 phút', ['5 phút', 'Không có', '10 phút'], 'Part 2: 1 phút chuẩn bị.']],
    noi: [["*Well*, → that's an *interesting* *question*. ↘", 'Ồ, câu hỏi thú vị.'], ['It *depends* on the *situation*. ↘', 'Còn tuỳ tình huống.'], ['I\'d like to talk about a *person* → who has *influenced* me a *lot*. ↘', 'Tôi muốn nói về một người ảnh hưởng nhiều đến tôi.']],
    hoithoai: {
      ctx: 'Thi nói IELTS mô phỏng – 6 lượt qua 3 phần.', vai: 'Giám khảo hỏi, em trả lời mở rộng.', ai: '👩‍🏫 Examiner',
      luot: [
        T(['(Part 1) Do you work or are you a student?', '', '(Part 1) Bạn đi làm hay đi học?'], ["I work as an IT officer at a bank. I've been there for about eight years, and I really enjoy solving technical problems.", 'Tôi là cán bộ IT ở ngân hàng, làm 8 năm, rất thích giải quyết sự cố kỹ thuật.', 'Ý + thời gian + cảm nhận.'], ['I work.', 'Quá ngắn.'], ['I am work in bank.', 'Sai ngữ pháp.']),
        T(['(Part 1) Do you prefer mornings or evenings?', '', '(Part 1) Bạn thích buổi sáng hay tối?'], ["Definitely mornings, because my mind is clearer, so I usually do my most difficult tasks before lunch.", 'Chắc chắn buổi sáng, vì đầu óc minh mẫn hơn, nên tôi làm việc khó nhất trước trưa.', 'Lựa chọn + lý do + ví dụ.'], ['Yes, I prefer.', 'Câu hỏi lựa chọn.'], ['Morning evening both.', 'Mơ hồ.']),
        T(['(Part 2) Describe a person who has influenced you. You have one minute to prepare.', '', '(Part 2) Mô tả một người ảnh hưởng đến bạn.'], ["I'd like to talk about my first manager, who taught me how to work professionally. I met her in 2017 when I joined the bank…", 'Tôi muốn nói về quản lý đầu tiên, người dạy tôi làm việc chuyên nghiệp. Tôi gặp chị ấy năm 2017 khi vào ngân hàng…', 'Mở bài Part 2 chuẩn.'], ['My manager. She good.', 'Quá ngắn.'], ['I talk about many people.', 'Không tập trung.']),
        T(['(Part 2 follow-up) Are you still in touch with her?', '', '(Part 2) Bạn còn giữ liên lạc không?'], ["Yes, we still meet for coffee a few times a year.", 'Có, chúng tôi vẫn uống cà phê vài lần mỗi năm.', 'Trả lời ngắn gọn đúng.'], ['Yes, I used to meeting her.', 'Sai cấu trúc.'], ['No, she is in touch.', 'Mâu thuẫn.']),
        T(['(Part 3) Do you think managers today are different from managers in the past?', '', '(Part 3) Quản lý ngày nay khác xưa không?'], ["To some extent, yes. In the past, managers used to give orders, whereas today they're expected to listen and support their teams.", 'Ở mức độ nào đó, có. Xưa quản lý ra lệnh, còn nay được kỳ vọng lắng nghe và hỗ trợ đội nhóm.', 'So sánh xưa – nay.'], ['Yes, different.', 'Thiếu phát triển.'], ['Managers past were giving orders now.', 'Câu rối.']),
        T(['(Part 3) Will AI replace managers in the future?', '', '(Part 3) AI có thay thế quản lý trong tương lai?'], ["I doubt it. AI might help with planning, but people will probably always need a human leader who understands their feelings.", 'Tôi nghi ngờ điều đó. AI có thể hỗ trợ lập kế hoạch, nhưng con người có lẽ luôn cần một lãnh đạo hiểu cảm xúc của họ.', 'Dự đoán + rào đón.'], ['Yes, 100% sure.', 'Quá tuyệt đối.'], ['AI is manager.', 'Câu cụt.'])
      ], ket: '🎉 Em đã hoàn thành bài thi nói mô phỏng 3 phần!'
    },
    tom: ['Cấu trúc 3 phần thi nói', 'Mở rộng câu trả lời'], nguphap: 'Tổng ôn B1', phatam: 'Nói liền mạch, ngữ điệu tự nhiên',
    loi: ['Trả lời quá ngắn', 'Câu hỏi lựa chọn trả lời yes'], btvn: ['Làm 3 đề Luyện nói trong mục Luyện đề', 'Sao chép bản ghi lời nói nhờ gia sư AI chấm', 'Ôn thẻ "Từ chưa nhớ"']
  };

  /* ================= NGÀY 30 ================= */
  const d30 = {
    n: 30, ten: P[29].ten, vocab: [], tong: 1, kt: { n: 30, min: 30 }, kinds: K,
    muc: 'Kiểm tra cuối khoá 30 câu, tự đánh giá 4 kỹ năng, chọn bước tiếp theo hướng tới B2 / IELTS 5.5+.',
    hoc: `<h4>1. Bài kiểm tra cuối khoá</h4><p><b>30 câu · 30 phút</b> lấy từ toàn bộ 30 ngày B1. Đạt ≥ 7 điểm là đủ nền sang B2.</p>
      <h4>2. Tự đánh giá</h4>${tbl(['Kỹ năng', 'Mốc B1 cần đạt'], [['Nghe', 'Hiểu ý chính bài nói rõ ràng về chủ đề quen thuộc; bắt số liệu.'], ['Nói', 'Nói 1–2 phút liền mạch, nêu ý kiến có lý do; xử lý họp, điện thoại, khiếu nại.'], ['Đọc', 'Hiểu email, tin ngắn, bài đọc 300–400 từ.'], ['Viết', 'Email 120–150 từ, đoạn văn ý kiến 150–200 từ theo PEEL.']])}
      <h4>3. Mốc chứng chỉ tham khảo</h4><p>B1 tương đương <b>TOEIC L&R khoảng 550+</b> (mốc tối thiểu ETS gợi ý), <b>IELTS 4.0–5.0</b>, <b>VSTEP bậc 3</b>.</p>
      <h4>4. Lộ trình tiếp theo</h4>${tbl(['Mục tiêu', 'Gợi ý'], [['📘 Lên B2 (Cấp 4)', 'Câu điều kiện 3, câu ước, bị động nâng cao, mệnh đề rút gọn, cụm động từ, từ nối học thuật; viết báo cáo, thuyết trình dài.'], ['🏅 Thi thử', 'Làm "TOEIC mini 2" và "IELTS mini 1" trong Luyện đề.'], ['🎧 Nghe', 'BBC 6 Minute English, TED-Ed (phụ đề tiếng Anh).'], ['✍️ Viết', 'Mỗi tuần 1 bài Task 2, nhờ gia sư AI chấm theo 4 tiêu chí.']])}
      ${tip('🧾 Vào <a href="#/tieng-anh/c3/tien-do">Tiến độ</a> → Sao chép tóm tắt, dán cho gia sư AI để được tư vấn lộ trình riêng.')}`,
    qs: [['mc', 'If I ___ more time, I would learn Japanese.', 'had', ['have', 'will have', 'would have'], 'Loại 2.'], ['mc', 'The report ___ by the manager yesterday.', 'was approved', ['approved', 'is approved', 'has approve'], 'Bị động quá khứ.'], ['mc', "I'm used to ___ in English at work.", 'speaking', ['speak', 'spoke', 'to speak'], 'be used to + V-ing.']],
    noi: [["I've *finished* *level* *three*! ↘", 'Tôi đã hoàn thành cấp 3!'], ['*Next*, → I\'m *aiming* for *IELTS* six point *five*. ↘', 'Tiếp theo tôi nhắm IELTS 6.5.']],
    hoithoai: {
      ctx: 'Phần thi nói cuối khoá B1: giám khảo hỏi 5 câu.', vai: 'Trả lời đầy đủ, có lý do và ví dụ.', ai: '👩‍🏫 Examiner',
      luot: [
        T(['How long have you been learning English, and why?', '', 'Bạn học tiếng Anh bao lâu, vì sao?'], ["I've been learning it seriously for about a year, mainly because I need it for my job.", 'Tôi học nghiêm túc khoảng một năm, chủ yếu vì cần cho công việc.', 'HTHT tiếp diễn + lý do.'], ['I learn English one year.', 'Sai thì.'], ['Since one year.', 'for + khoảng.']),
        T(['What would you do if you could work abroad for a year?', '', 'Nếu được làm ở nước ngoài một năm bạn sẽ làm gì?'], ["I'd probably work in Singapore, because it's close to home and many international banks are based there.", 'Có lẽ tôi làm ở Singapore, vì gần nhà và nhiều ngân hàng quốc tế đặt trụ sở ở đó.', 'Loại 2 + bị động.'], ['I will work in Singapore.', 'Giả định → would.'], ["I'd worked in Singapore.", 'would + V.']),
        T(['Can you describe how a new customer opens an account at your bank?', '', 'Mô tả cách khách mới mở tài khoản ở ngân hàng bạn?'], ["First, their ID is checked. Then a form is filled in, and finally the account is activated on the app.", 'Đầu tiên kiểm tra giấy tờ, rồi điền mẫu, cuối cùng kích hoạt tài khoản trên ứng dụng.', 'Quy trình + bị động.'], ['Customer open account easy.', 'Thiếu cấu trúc.'], ['First, they checked ID by.', 'Câu rối.']),
        T(['Some people say social media does more harm than good. What do you think?', '', 'Có người nói MXH hại nhiều hơn lợi. Bạn nghĩ sao?'], ["I see their point, but I believe the benefits outweigh the drawbacks if people use it wisely.", 'Tôi hiểu ý họ, nhưng tôi tin lợi nhiều hơn hại nếu dùng khôn ngoan.', 'Phản đối lịch sự + điều kiện.'], ['They are wrong.', 'Quá thẳng.'], ['Social media is harm good.', 'Sai.']),
        T(['What are your English goals for next year?', '', 'Mục tiêu tiếng Anh năm sau?'], ["I'm going to finish level B2 and take the IELTS test. If I get 6.5, I'll apply for a regional role.", 'Tôi sẽ học xong B2 và thi IELTS. Nếu đạt 6.5 tôi sẽ ứng tuyển vị trí khu vực.', 'going to + điều kiện loại 1. Chúc mừng em hoàn thành B1!'], ['I will to take IELTS.', 'will + V.'], ['If I will get 6.5…', 'Không dùng will sau if.'])
      ], ket: '🏆 Chúc mừng em đã hoàn thành Tiếng Anh Cấp 3 (B1)!'
    },
    tom: ['Kiểm tra cuối khoá 30 câu', 'Tự đánh giá 4 kỹ năng', 'Lộ trình B2'], nguphap: 'Tổng ôn B1', phatam: 'Tổng ôn',
    loi: ['Xem lại câu sai'], btvn: ['Sao chép tóm tắt tiến độ gửi gia sư AI', 'Làm đề "TOEIC mini 2" và "IELTS mini 1"', 'Duy trì 20 phút tiếng Anh mỗi ngày']
  };

  window.PLT_EN3.days.push(d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30);
})();

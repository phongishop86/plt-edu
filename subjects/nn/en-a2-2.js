/* PLT-Edu · Tiếng Anh – Cấp 2 (A2): Ngày 15–30 */
(function () {
  'use strict';
  const { w, T, tbl, tip, exs, F, reads, K, G } = window.PLT_EN2.H;

  /* ================= NGÀY 15 ================= */
  const d15 = {
    n: 15, ten: 'Kế hoạch tương lai: be going to', kinds: K,
    muc: 'Nói dự định đã quyết với be going to; phân biệt với will (quyết định ngay lúc nói).',
    hoc: `<h4>1. Công thức</h4>${F(['S', '+', 'am / is / are', '+', 'going to', '+', 'V'])}${exs([["I'm going to learn Korean next year.", 'Năm sau tôi định học tiếng Hàn.'], ["We aren't going to buy a car.", 'Chúng tôi không định mua xe.'], ['What are you going to do this weekend?', 'Cuối tuần bạn định làm gì?']])}
      <h4>2. going to hay will?</h4>${tbl(['be going to', 'will'], [['Dự định có <b>từ trước</b>', 'Quyết định <b>ngay lúc nói</b>'], ["I'm going to visit Japan in June. (đã lên kế hoạch)", '"The phone\'s ringing." – "I\'ll get it."'], ['Dự đoán có dấu hiệu: Look at the sky! It\'s going to rain.', 'Dự đoán theo ý kiến: I think it will rain.']])}
      ${tip('🗣️ Văn nói nhanh: going to → <b>gonna</b> /ˈɡʌnə/. Nghe hiểu là được, viết thì dùng going to.')}${G('tuong-lai', 'Diễn tả tương lai')}`,
    vocab: [
      w('going to', '/ˈɡoʊɪŋ tə/', 'định, sắp (dự định)', '', ["I'm going to start a business.", '', 'Tôi định mở doanh nghiệp.']),
      w('plan', '/plæn/', 'kế hoạch; lên kế hoạch', '', ['Do you have any plans for Tet?', '', 'Tết bạn có kế hoạch gì không?']),
      w('next year', '/nekst jɪr/', 'năm sau', '', ["We're going to move next year.", '', 'Năm sau chúng tôi định chuyển nhà.']),
      w('save money', '/seɪv ˈmʌni/', 'tiết kiệm tiền', '', ["I'm going to save money for a house.", '', 'Tôi định tiết kiệm mua nhà.']),
      w('goal', '/ɡoʊl/', 'mục tiêu', '', ['My goal is to get IELTS 6.5.', '', 'Mục tiêu của tôi là IELTS 6.5.']),
      w('decide', '/dɪˈsaɪd/', 'quyết định', '', ["I've decided to learn English every day.", '', 'Tôi quyết định học tiếng Anh mỗi ngày.']),
      w('course', '/kɔːrs/', 'khoá học', '', ["I'm going to take an online course.", '', 'Tôi định học một khoá online.']),
      w('get a promotion', '/ɡet ə prəˈmoʊʃn/', 'được thăng chức', '', ['She hopes to get a promotion.', '', 'Cô ấy mong được thăng chức.']),
      w('this weekend', '/ðɪs ˈwiːkend/', 'cuối tuần này', '', ['What are you doing this weekend?', '', 'Cuối tuần này bạn làm gì?']),
      w('soon', '/suːn/', 'sớm, chẳng bao lâu nữa', '', ["We're going to open a new shop soon.", '', 'Chúng tôi sắp mở cửa hàng mới.']),
      w('future', '/ˈfjuːtʃər/', 'tương lai', '', ['What are your plans for the future?', '', 'Kế hoạch tương lai của bạn là gì?']),
      w('hope', '/hoʊp/', 'hy vọng', '+ to V.', ['I hope to see you again.', '', 'Hy vọng gặp lại bạn.'])
    ],
    qs: [
      ['mc', "We've booked the tickets. We ___ visit Hue in May.", 'are going to', ['will', 'go', 'are go to'], 'Dự định đã có → going to.'],
      ['mc', '“I\'m thirsty.” – “I ___ get you some water.”', "'ll", ["'m going to", 'am get', 'going'], 'Quyết định ngay → will.'],
      ['mc', 'Look at those dark clouds! It ___ rain.', 'is going to', ['will to', 'rains', 'goes to'], 'Có dấu hiệu → going to.'],
      ['mc', 'What ___ you going to do after work?', 'are', ['do', 'will', 'is'], 'you → are.'],
      ['mc', 'goal nghĩa là?', 'mục tiêu', ['khoá học', 'kế hoạch', 'tương lai'], 'goal.'],
      ['hear', "I'm going to take an English course and try to get a promotion next year.", 'Định học khoá tiếng Anh, cố được thăng chức năm sau.', ['Đã học xong khoá tiếng Anh.', 'Sẽ nghỉ việc năm sau.', 'Đang dạy khoá tiếng Anh.'], 'going to take … get a promotion.'],
      ['order', 'Sắp xếp: “Bạn định làm gì cuối tuần này?”', ['What', 'are you', 'going to', 'do', 'this weekend?'], 'What are you going to do this weekend?']
    ],
    noi: [['What are you *going* to *do* this *weekend*? ↘', 'Cuối tuần bạn định làm gì?'], ['I\'m *going* to *visit* my *parents*. ↘', 'Tôi định về thăm bố mẹ.'], ['My *goal* is to get *IELTS* six point *five*. ↘', 'Mục tiêu của tôi là IELTS 6.5.'], ['"The *phone\'s* ringing." → "I\'ll *get* it." ↘', '"Điện thoại reo." – "Để tôi nghe."']],
    hoithoai: {
      ctx: 'Cuối năm, công ty tổ chức buổi chia sẻ mục tiêu năm mới.', vai: 'Trưởng phòng hỏi, em chia sẻ kế hoạch.', ai: '👩‍💼 Ms. Linda',
      luot: [
        T(['So, what are your plans for next year?', '', 'Kế hoạch năm sau của em là gì?'], ["I'm going to improve my English and take the TOEIC test.", 'Em định nâng tiếng Anh và thi TOEIC.', 'going to + dự định.'], ['I will to improve my English.', 'will + V nguyên mẫu, không to.'], ['I going to improve.', 'Thiếu am.']),
        T(["That's great. What's your target score?", '', 'Tuyệt. Mục tiêu bao nhiêu điểm?'], ['My goal is to get 650 by the end of the year.', 'Mục tiêu của em là 650 điểm trước cuối năm.', 'My goal is to + V.'], ['My goal is get 650.', 'Thiếu to.'], ['I goal 650.', 'Câu sai.']),
        T(['How are you going to prepare?', '', 'Em định chuẩn bị thế nào?'], ["I'm going to study 45 minutes every day and do one practice test a week.", 'Em định học 45 phút mỗi ngày và làm một đề thử mỗi tuần.', 'Kế hoạch cụ thể.'], ['I studied every day.', 'Sai thì.'], ["I'm going study every day.", 'Thiếu to.'])
      ], ket: 'Em đã chia sẻ kế hoạch tương lai với be going to.'
    },
    tom: ['be going to + V', 'going to vs will', 'goal, plan, hope'], nguphap: 'be going to; phân biệt với will', phatam: 'going to /ˈɡoʊɪŋ tə/ → gonna (văn nói)',
    loi: ['Thiếu am/is/are', 'will to + V'], btvn: ['Viết 5 mục tiêu năm sau bằng going to', 'Viết 3 tình huống dùng will quyết định ngay', 'Luyện 🎤 4 câu']
  };

  /* ================= NGÀY 16 ================= */
  const d16 = {
    n: 16, ten: 'Mời, hẹn lịch, nhận lời và từ chối', kinds: K,
    muc: 'Mời lịch sự, nhận lời, từ chối khéo, đề xuất thời gian; dùng hiện tại tiếp diễn cho lịch đã hẹn.',
    hoc: `<h4>1. Mời – nhận – từ chối</h4>${tbl(['Mời', 'Nhận lời', 'Từ chối khéo'], [['Would you like to have dinner with us?', "I'd love to. Thanks!", "I'd love to, but I'm busy that day."], ['Do you want to see a film?', 'Sounds great!', "Sorry, I can't. Maybe next time?"], ['How about going for coffee?', "That's a good idea.", "I'm afraid I have other plans."]])}
      <h4>2. Lịch đã hẹn: hiện tại tiếp diễn</h4>${exs([["I'm meeting a client on Friday afternoon.", 'Chiều thứ Sáu tôi gặp khách (đã hẹn).'], ['Are you doing anything on Saturday?', 'Thứ Bảy bạn có bận gì không?']])}
      <h4>3. Chốt giờ</h4>${exs([['Are you free on Thursday?', 'Thứ Năm bạn rảnh không?'], ['Does 7 p.m. work for you?', '7 giờ tối có tiện cho bạn không?'], ["Let's meet at the café at seven.", 'Hẹn 7 giờ ở quán cà phê nhé.']])}
      ${tip('😊 Từ chối kiểu Anh – Mỹ: <b>cảm ơn + lý do ngắn + đề nghị khác</b>. Không nói cụt "No".')}`,
    vocab: [
      w("Would you like to…?", '/wʊd juː laɪk tə/', 'Bạn có muốn… không? (mời lịch sự)', '', ['Would you like to join us for lunch?', '', 'Bạn có muốn ăn trưa cùng chúng tôi không?']),
      w("I'd love to", '/aɪd lʌv tə/', 'Tôi rất muốn', '', ["I'd love to, thanks!", '', 'Rất sẵn lòng, cảm ơn!']),
      w("I'm afraid", '/aɪm əˈfreɪd/', 'tôi e là (từ chối lịch sự)', '', ["I'm afraid I can't come.", '', 'Tôi e là tôi không đến được.']),
      w('free', '/friː/', 'rảnh; miễn phí', '', ['Are you free tonight?', '', 'Tối nay bạn rảnh không?']),
      w('busy', '/ˈbɪzi/', 'bận', '', ["Sorry, I'm busy on Friday.", '', 'Xin lỗi, thứ Sáu tôi bận.']),
      w('appointment', '/əˈpɔɪntmənt/', 'cuộc hẹn (công việc, bác sĩ)', '', ['I have a dentist appointment.', '', 'Tôi có hẹn nha sĩ.']),
      w('invite', '/ɪnˈvaɪt/', 'mời', '', ['They invited me to their wedding.', '', 'Họ mời tôi dự đám cưới.']),
      w('How about…?', '/haʊ əˈbaʊt/', 'Thế còn… thì sao? (đề xuất)', '+ V-ing / N.', ['How about Sunday?', '', 'Chủ nhật thì sao?']),
      w('Sounds great', '/saʊndz ɡreɪt/', 'Nghe hay đấy', '', ['Dinner at 7? Sounds great!', '', 'Ăn tối lúc 7 giờ? Nghe hay đấy!']),
      w('next time', '/nekst taɪm/', 'lần sau', '', ['Maybe next time.', '', 'Có lẽ để lần sau.']),
      w('reschedule', '/ˌriːˈskedʒuːl/', 'dời lịch', '', ['Can we reschedule the meeting?', '', 'Chúng ta dời lịch họp được không?']),
      w('work for you', '/wɜːrk fər juː/', 'tiện cho bạn', '', ['Does Monday work for you?', '', 'Thứ Hai có tiện cho bạn không?'])
    ],
    qs: [
      ['mc', 'Cách mời lịch sự nhất là?', 'Would you like to come to my party?', ['You come to my party.', 'Come my party!', 'Do you like come to my party?'], 'Would you like to…?'],
      ['mc', 'Từ chối khéo lời mời là?', "I'd love to, but I'm busy that day.", ['No.', "I don't want.", 'No, I am not like.'], 'Cảm ơn + lý do.'],
      ['mc', "I ___ my boss at 3 p.m. tomorrow. (đã hẹn)", 'am meeting', ['meet', 'meeting', 'am meet'], 'Lịch đã hẹn → hiện tại tiếp diễn.'],
      ['mc', 'How about ___ to the cinema?', 'going', ['go', 'to go', 'went'], 'How about + V-ing.'],
      ['mc', 'reschedule nghĩa là?', 'dời lịch', ['huỷ lịch', 'đặt lịch', 'nhắc lịch'], 'reschedule.'],
      ['hear', "I'm afraid I can't make it on Friday. Does Monday work for you?", 'E là thứ Sáu không được. Thứ Hai có tiện không?', ['Thứ Sáu được. Thứ Hai thì không.', 'Tôi sợ thứ Sáu.', 'Thứ Hai tôi bận.'], "I'm afraid … Does Monday work for you?"],
      ['order', 'Sắp xếp: “Thứ Năm bạn rảnh không?”', ['Are', 'you', 'free', 'on Thursday?'], 'Are you free on Thursday?']
    ],
    noi: [['Would you *like* to have *dinner* with us on *Saturday*? ↗', 'Thứ Bảy bạn ăn tối với chúng tôi nhé?'], ['I\'d *love* to, → but I\'m *busy* that *day*. ↘', 'Rất muốn, nhưng hôm đó tôi bận.'], ['How about *Sunday* *instead*? ↗', 'Thay bằng Chủ nhật thì sao?'], ['Does *seven* p.m. *work* for you? ↗', '7 giờ tối có tiện cho bạn không?']],
    hoithoai: {
      ctx: 'Đồng nghiệp người nước ngoài rủ em đi ăn tối.', vai: 'Ben mời, em từ chối khéo rồi hẹn ngày khác.', ai: '🧑 Ben',
      luot: [
        T(['Would you like to have dinner with us on Friday?', '', 'Thứ Sáu đi ăn tối với tụi mình không?'], ["I'd love to, but I'm afraid I have a family dinner that night.", 'Mình rất muốn, nhưng e là tối đó có bữa tối gia đình.', 'Từ chối khéo có lý do.'], ["No, I don't want.", 'Cộc lốc, bất lịch sự.'], ['Yes, I busy.', 'Mâu thuẫn, sai ngữ pháp.']),
        T(["Oh, that's a pity. Are you free on Saturday?", '', 'Tiếc quá. Thứ Bảy bạn rảnh không?'], ['Yes, Saturday works for me. What time?', 'Có, thứ Bảy được. Mấy giờ?', 'Nhận lời + hỏi giờ.'], ['Yes, I am meeting.', 'Mâu thuẫn.'], ["How about going yesterday?", 'Sai thời gian.']),
        T(["How about 7 at the Italian restaurant on Le Loi Street?", '', '7 giờ ở nhà hàng Ý đường Lê Lợi thì sao?'], ["Sounds great! See you there.", 'Nghe hay đấy! Gặp ở đó nhé.', 'Chốt hẹn.'], ['I go there tomorrow.', 'Sai ngày.'], ["I'm afraid sounds great.", 'Câu rối.'])
      ], ket: 'Em đã từ chối khéo và hẹn lịch khác.'
    },
    tom: ["Would you like to…? / I'd love to", "I'm afraid… / Maybe next time", 'Hiện tại tiếp diễn cho lịch hẹn', 'Does … work for you?'], nguphap: 'Hiện tại tiếp diễn chỉ tương lai; How about + V-ing', phatam: "I'd love to – nhấn love, giọng ấm; Would you like… ↗",
    loi: ['Từ chối cụt lủn', 'How about + to V'], btvn: ['Viết 3 tin nhắn mời và 3 tin nhắn từ chối khéo', 'Viết lịch tuần sau bằng hiện tại tiếp diễn', 'Luyện 🎤 ngữ điệu câu mời']
  };

  /* ================= NGÀY 17 ================= */
  const d17 = {
    n: 17, ten: 'Lời khuyên và nghĩa vụ: should, must, have to', kinds: K,
    muc: 'Khuyên nên / không nên; nói việc bắt buộc, bị cấm, không cần thiết ở nơi làm việc và đời sống.',
    hoc: `${tbl(['Từ', 'Nghĩa', 'Ví dụ'], [['should / shouldn\'t', 'nên / không nên', 'You should drink more water.'], ['must', 'phải (người nói thấy cần)', 'I must call my mum tonight.'], ['have to / has to', 'phải (quy định bên ngoài)', 'Staff have to wear ID cards.'], ["mustn't", 'cấm', "You mustn't use your phone while driving."], ["don't have to", 'không cần', "You don't have to bring anything."]])}
      ${F(['modal', '+', 'V nguyên mẫu'])}<p>Hỏi xin lời khuyên: <i>What should I do?</i> · <i>Do you think I should…?</i></p>
      ${tip("⚠️ Quá khứ của must / have to đều là <b>had to</b>: <i>I had to work late yesterday.</i>")}${G('khuyet-thieu-a2', 'Động từ khuyết thiếu')}`,
    vocab: [
      w('should', '/ʃʊd/', 'nên', '', ['You should see a doctor.', '', 'Bạn nên đi khám bác sĩ.']),
      w('must', '/mʌst/', 'phải', '', ['I must finish this today.', '', 'Tôi phải xong việc này hôm nay.']),
      w('have to', '/ˈhæf tə/', 'phải (bắt buộc)', '', ['We have to start at 8.', '', 'Chúng tôi phải bắt đầu lúc 8 giờ.']),
      w("mustn't", '/ˈmʌsnt/', 'không được (cấm)', '', ["You mustn't smoke here.", '', 'Không được hút thuốc ở đây.']),
      w("don't have to", '/doʊnt ˈhæf tə/', 'không cần', '', ["You don't have to wear a tie.", '', 'Bạn không cần đeo cà vạt.']),
      w('had to', '/ˈhæd tə/', 'đã phải', '', ['I had to wait for two hours.', '', 'Tôi đã phải chờ hai tiếng.']),
      w('advice', '/ədˈvaɪs/', 'lời khuyên', 'Không đếm được.', ['Can you give me some advice?', '', 'Bạn cho tôi lời khuyên được không?']),
      w('rule', '/ruːl/', 'quy định, luật lệ', '', ['It is a company rule.', '', 'Đó là quy định công ty.']),
      w('uniform', '/ˈjuːnɪfɔːrm/', 'đồng phục', '', ['Bank staff have to wear a uniform.', '', 'Nhân viên ngân hàng phải mặc đồng phục.']),
      w('password', '/ˈpæswɜːrd/', 'mật khẩu', '', ["You mustn't share your password.", '', 'Không được chia sẻ mật khẩu.']),
      w('allowed', '/əˈlaʊd/', 'được phép', '', ["Pets aren't allowed.", '', 'Không được mang thú cưng.']),
      w('on time', '/ɑːn taɪm/', 'đúng giờ', '', ['You should arrive on time.', '', 'Bạn nên đến đúng giờ.'])
    ],
    qs: [
      ['mc', 'You look tired. You ___ go to bed early.', 'should', ["mustn't", "don't have to", 'had to'], 'Lời khuyên.'],
      ['mc', "You ___ share your password with anyone.", "mustn't", ["don't have to", 'should', 'have to'], 'Cấm.'],
      ['mc', "It's a holiday. We ___ go to work.", "don't have to", ["mustn't", 'must', 'should'], 'Không cần.'],
      ['mc', 'Yesterday I ___ stay late to finish the report.', 'had to', ['must', 'have to', 'should'], 'Quá khứ → had to.'],
      ['mc', 'Can you give me some ___?', 'advice', ['advices', 'an advice', 'advise'], 'advice không đếm được.'],
      ['hear', "All staff have to wear their ID cards, but you don't have to wear a tie.", 'Phải đeo thẻ, không cần đeo cà vạt.', ['Phải đeo cà vạt, không cần thẻ.', 'Không được đeo thẻ.', 'Nên đeo cà vạt.'], "have to … don't have to."],
      ['order', 'Sắp xếp: “Tôi nên làm gì?”', ['What', 'should', 'I', 'do?'], 'What should I do?']
    ],
    noi: [['What *should* I *do*? ↘', 'Tôi nên làm gì?'], ['You *should* *talk* to your *manager*. ↘', 'Bạn nên nói chuyện với quản lý.'], ['You *mustn\'t* *share* your *password*. ↘', 'Không được chia sẻ mật khẩu.'], ['You *don\'t* *have* to *bring* *anything*. ↘', 'Bạn không cần mang gì.']],
    hoithoai: {
      ctx: 'Nhân viên mới người nước ngoài hỏi em về quy định ở văn phòng.', vai: 'Kate hỏi, em giải thích quy định.', ai: '👩 Kate',
      luot: [
        T(['Do I have to wear a uniform?', '', 'Tôi có phải mặc đồng phục không?'], ['Yes, you have to wear it from Monday to Friday.', 'Có, phải mặc từ thứ Hai đến thứ Sáu.', 'have to = bắt buộc.'], ['Yes, you should to wear it.', 'should + V, không to.'], ["No, you mustn't wear it.", 'Sai nghĩa: mustn\'t = cấm.']),
        T(['Can I use my USB on the office computer?', '', 'Tôi dùng USB trên máy văn phòng được không?'], ["No, you mustn't. It's a security rule.", 'Không, không được. Đó là quy định bảo mật.', 'Cấm → mustn\'t.'], ["No, you don't have to.", 'Sai nghĩa: không cần.'], ['Yes, you must.', 'Sai.']),
        T(['I always feel sleepy after lunch. What should I do?', '', 'Ăn trưa xong tôi hay buồn ngủ. Tôi nên làm gì?'], ["You should take a short walk and you shouldn't eat too much.", 'Bạn nên đi bộ một chút và đừng ăn quá no.', 'should / shouldn\'t.'], ['You must sleep at your desk.', 'Không phải lời khuyên hợp lý.'], ['You should sleeping.', 'should + V.'])
      ], ket: 'Em đã giải thích quy định và đưa lời khuyên.'
    },
    tom: ['should / must / have to', "mustn't ≠ don't have to", 'had to'], nguphap: 'Động từ khuyết thiếu chỉ lời khuyên và nghĩa vụ', phatam: "mustn't /ˈmʌsnt/ (t đầu câm); have to /ˈhæf tə/",
    loi: ["Nhầm mustn't và don't have to", 'should to + V'], btvn: ['Viết 6 quy định nơi em làm việc', 'Viết 4 lời khuyên cho người học tiếng Anh', 'Luyện 🎤 4 câu']
  };

  /* ================= NGÀY 18 ================= */
  const d18 = {
    n: 18, ten: 'Sức khoẻ: đi khám và mua thuốc', kinds: K,
    muc: 'Mô tả triệu chứng, đặt lịch khám, hiểu lời dặn của bác sĩ và dược sĩ.',
    hoc: `<h4>1. Triệu chứng</h4>${tbl(['Mẫu câu', 'Ví dụ'], [['I have a / an + bệnh', 'I have a headache / a fever / a cough / a sore throat / a stomachache.'], ['My … hurts.', 'My back hurts. My leg hurts.'], ['I feel + tính từ', 'I feel sick / dizzy / tired.'], ['since / for', "I've had a fever since Monday / for two days."]])}
      <h4>2. Ở phòng khám và nhà thuốc</h4>${exs([["I'd like to make an appointment with a doctor.", 'Tôi muốn đặt lịch khám.'], ['Take two tablets three times a day after meals.', 'Uống 2 viên, ngày 3 lần, sau ăn.'], ['Do you have anything for a sore throat?', 'Có thuốc gì trị đau họng không?'], ['Are you allergic to any medicine?', 'Bạn có dị ứng thuốc nào không?']])}
      ${tip('⚠️ Đây là bài học ngôn ngữ, không phải tư vấn y tế. Khi ốm thật, hãy đi khám và làm theo hướng dẫn của bác sĩ, dược sĩ.')}`,
    vocab: [
      w('headache', '/ˈhedeɪk/', 'đau đầu', '', ['I have a terrible headache.', '', 'Tôi đau đầu kinh khủng.']),
      w('fever', '/ˈfiːvər/', 'sốt', '', ['My son has a high fever.', '', 'Con trai tôi sốt cao.']),
      w('cough', '/kɔːf/', 'ho', '', ["I've had a cough for a week.", '', 'Tôi ho cả tuần nay.']),
      w('sore throat', '/sɔːr θroʊt/', 'đau họng', '', ['Do you have anything for a sore throat?', '', 'Có thuốc trị đau họng không?']),
      w('dizzy', '/ˈdɪzi/', 'chóng mặt', '', ['I feel dizzy when I stand up.', '', 'Tôi chóng mặt khi đứng dậy.']),
      w('hurts', '/hɜːrts/', 'đau (bộ phận)', '', ['My back hurts.', '', 'Lưng tôi đau.']),
      w('medicine', '/ˈmedɪsn/', 'thuốc', '', ['Take this medicine after meals.', '', 'Uống thuốc này sau ăn.']),
      w('tablet', '/ˈtæblət/', 'viên thuốc', '', ['Take two tablets a day.', '', 'Uống 2 viên một ngày.']),
      w('pharmacy', '/ˈfɑːrməsi/', 'nhà thuốc', '', ["Is there a pharmacy near here?", '', 'Gần đây có nhà thuốc không?']),
      w('allergic', '/əˈlɜːrdʒɪk/', 'bị dị ứng', '+ to.', ["I'm allergic to seafood.", '', 'Tôi dị ứng hải sản.']),
      w('prescription', '/prɪˈskrɪpʃn/', 'đơn thuốc', '', ['You need a prescription for this.', '', 'Thuốc này cần đơn bác sĩ.']),
      w('get better', '/ɡet ˈbetər/', 'khoẻ lên', '', ['I hope you get better soon.', '', 'Mong bạn sớm khoẻ.'])
    ],
    qs: [
      ['mc', '“Tôi bị đau đầu” là?', 'I have a headache.', ['I am headache.', 'My head is headache.', 'I have headache pain hurt.'], 'have a headache.'],
      ['mc', 'My leg ___.', 'hurts', ['hurt me is', 'is hurting me pain', 'has hurt pain'], 'My … hurts.'],
      ['mc', "I'm allergic ___ penicillin.", 'to', ['with', 'of', 'for'], 'allergic to.'],
      ['mc', '“three times a day” nghĩa là?', 'ngày 3 lần', ['3 ngày một lần', 'trong 3 ngày', '3 viên một ngày'], 'times a day.'],
      ['mc', 'Mua thuốc ở đâu?', 'pharmacy', ['bakery', 'library', 'bank'], 'pharmacy.'],
      ['hear', "I've had a fever and a sore throat since Tuesday.", 'Bị sốt và đau họng từ thứ Ba.', ['Bị ho và đau đầu từ thứ Ba.', 'Bị sốt 2 ngày, khỏi từ thứ Ba.', 'Sẽ đi khám thứ Ba.'], 'fever, sore throat, since Tuesday.'],
      ['order', 'Sắp xếp: “Mong bạn sớm khoẻ.”', ['I hope', 'you', 'get better', 'soon.'], 'I hope you get better soon.']
    ],
    noi: [['I have a *headache* and a *sore* *throat*. ↘', 'Tôi đau đầu và đau họng.'], ['I\'ve had a *fever* since *Monday*. ↘', 'Tôi sốt từ thứ Hai.'], ['Do you have *anything* for a *cough*? ↗', 'Có thuốc gì trị ho không?'], ['I hope you get *better* *soon*. ↘', 'Mong bạn sớm khoẻ.']],
    hoithoai: {
      ctx: 'Em đi công tác ở Singapore, bị ốm và vào nhà thuốc.', vai: 'Dược sĩ hỏi, em mô tả triệu chứng.', ai: '💊 Pharmacist',
      luot: [
        T(['Hello. How can I help you?', '', 'Xin chào. Tôi giúp gì được?'], ["I have a bad cough and a sore throat.", 'Tôi bị ho nặng và đau họng.', 'Mô tả triệu chứng.'], ['I am cough.', 'Sai cấu trúc.'], ['My throat is sore throat.', 'Lặp ý.']),
        T(['How long have you had it?', '', 'Bị bao lâu rồi?'], ['For three days.', 'Ba ngày rồi.', 'for + khoảng thời gian.'], ['Since three days.', 'since + mốc, không + khoảng.'], ['Three days ago I will.', 'Câu sai.']),
        T(['Are you allergic to any medicine?', '', 'Bạn có dị ứng thuốc nào không?'], ["No, I'm not.", 'Không ạ.', 'Trả lời ngắn đúng.'], ["No, I don't allergic.", 'Sai ngữ pháp.'], ['Yes, I like medicine.', 'Sai nghĩa.']),
        T(['OK. Take these tablets three times a day after meals.', '', 'Được. Uống viên này ngày 3 lần sau ăn.'], ['Three times a day after meals. Thank you!', 'Ngày 3 lần sau ăn. Cảm ơn!', 'Nhắc lại để xác nhận.'], ['Three tablets one time?', 'Nghe nhầm.'], ['Before meals, OK.', 'Nghe nhầm: after meals.'])
      ], ket: 'Em đã mua thuốc và hiểu lời dặn bằng tiếng Anh.'
    },
    tom: ['I have a + bệnh', 'My … hurts', 'Lịch uống thuốc', 'allergic to'], nguphap: 'have a …; for / since; Present perfect cơ bản (I\'ve had)', phatam: 'cough /kɔːf/, medicine /ˈmedɪsn/',
    loi: ['I am headache', 'since + khoảng thời gian'], btvn: ['Viết đoạn hội thoại ở phòng khám 8 lượt', 'Học thuộc 6 triệu chứng', 'Luyện 🎤 4 câu']
  };

  /* ================= NGÀY 19 ================= */
  const d19 = {
    n: 19, ten: 'Lên kế hoạch chuyến đi và đặt vé', kinds: K,
    muc: 'Đặt vé máy bay/tàu, chọn chuyến, hỏi hành lý, đổi vé; đọc lịch trình.',
    hoc: `<h4>1. Đặt vé</h4>${exs([["I'd like to book a return ticket to Hanoi.", 'Tôi muốn đặt vé khứ hồi đi Hà Nội.'], ['Is there an earlier flight?', 'Có chuyến sớm hơn không?'], ['How much is the baggage allowance?', 'Được mang bao nhiêu kg hành lý?'], ['Can I change the date?', 'Tôi đổi ngày được không?']])}
      <h4>2. Từ khoá khi đặt vé</h4>${tbl(['Từ', 'Nghĩa'], [['one-way / return', 'một chiều / khứ hồi'], ['direct flight / stopover', 'bay thẳng / quá cảnh'], ['depart / arrive', 'khởi hành / đến'], ['economy / business class', 'hạng phổ thông / thương gia'], ['fully booked', 'hết chỗ'], ['booking reference', 'mã đặt chỗ']])}
      ${tip('🕐 Giờ trong lịch trình: 14:30 = "two thirty p.m." hoặc "fourteen thirty" (giờ 24h ở sân bay).')}`,
    vocab: [
      w('book', '/bʊk/', 'đặt (vé, phòng)', '', ['I want to book a flight.', '', 'Tôi muốn đặt chuyến bay.']),
      w('return ticket', '/rɪˈtɜːrn ˈtɪkɪt/', 'vé khứ hồi', '', ['A return ticket, please.', '', 'Cho tôi vé khứ hồi.']),
      w('one-way', '/ˌwʌn ˈweɪ/', 'một chiều', '', ['Just a one-way ticket.', '', 'Chỉ vé một chiều.']),
      w('direct flight', '/dəˈrekt flaɪt/', 'chuyến bay thẳng', '', ['Is it a direct flight?', '', 'Có phải bay thẳng không?']),
      w('depart', '/dɪˈpɑːrt/', 'khởi hành', '', ['The train departs at 6:15.', '', 'Tàu khởi hành lúc 6:15.']),
      w('arrive', '/əˈraɪv/', 'đến nơi', '+ in (thành phố) / at (địa điểm).', ['We arrive in Hanoi at 9.', '', 'Chúng tôi đến Hà Nội lúc 9 giờ.']),
      w('baggage allowance', '/ˈbæɡɪdʒ əˈlaʊəns/', 'hạn mức hành lý', '', ['The baggage allowance is 23 kg.', '', 'Hạn mức hành lý là 23 kg.']),
      w('fully booked', '/ˈfʊli bʊkt/', 'hết chỗ', '', ['Sorry, that flight is fully booked.', '', 'Xin lỗi, chuyến đó hết chỗ.']),
      w('booking reference', '/ˈbʊkɪŋ ˈrefrəns/', 'mã đặt chỗ', '', ['Your booking reference is K7X2P.', '', 'Mã đặt chỗ của bạn là K7X2P.']),
      w('itinerary', '/aɪˈtɪnəreri/', 'lịch trình', '', ['I sent you the itinerary.', '', 'Tôi đã gửi bạn lịch trình.']),
      w('earlier', '/ˈɜːrliər/', 'sớm hơn', '', ['Is there an earlier train?', '', 'Có chuyến tàu sớm hơn không?']),
      w('change the date', '/tʃeɪndʒ ðə deɪt/', 'đổi ngày', '', ['Can I change the date for free?', '', 'Đổi ngày có mất phí không?'])
    ],
    qs: [
      ['mc', 'Vé đi rồi về là?', 'return ticket', ['one-way ticket', 'single ticket', 'turn ticket'], 'return = khứ hồi.'],
      ['mc', 'Sorry, there are no seats left. The flight is ___.', 'fully booked', ['direct', 'departed', 'earlier'], 'Hết chỗ.'],
      ['mc', 'We arrive ___ Da Nang at noon.', 'in', ['at', 'to', 'on'], 'arrive in + thành phố.'],
      ['mc', "I'd like ___ a ticket to Hue.", 'to book', ['book', 'booking', 'booked'], "I'd like + to V."],
      ['mc', 'itinerary nghĩa là?', 'lịch trình', ['hành lý', 'mã đặt chỗ', 'chuyến bay thẳng'], 'itinerary.'],
      ['hear', 'The flight departs at 14:40 and arrives at 16:50.', 'Khởi hành 14:40, đến 16:50.', ['Khởi hành 14:14, đến 16:15.', 'Khởi hành 4:40, đến 6:50 sáng.', 'Khởi hành 16:50.'], 'Nghe kỹ số.'],
      ['order', 'Sắp xếp: “Có chuyến bay sớm hơn không?”', ['Is there', 'an', 'earlier', 'flight?'], 'Is there an earlier flight?']
    ],
    noi: [['I\'d *like* to book a *return* *ticket* to *Hanoi*, please. ↘', 'Tôi muốn đặt vé khứ hồi đi Hà Nội.'], ['Is it a *direct* *flight*? ↗', 'Có phải bay thẳng không?'], ['Is there an *earlier* *one*? ↗', 'Có chuyến sớm hơn không?'], ['My *booking* *reference* is *K*-*seven*-*X*-*two*-*P*. ↘', 'Mã đặt chỗ là K7X2P.']],
    hoithoai: {
      ctx: 'Em gọi tổng đài hãng bay đặt vé đi Singapore công tác.', vai: 'Nhân viên tổng đài hỏi, em đặt vé.', ai: '🎧 Agent',
      luot: [
        T(['Good morning. How can I help you?', '', 'Chào buổi sáng. Tôi giúp gì được?'], ["I'd like to book a return ticket to Singapore, please.", 'Tôi muốn đặt vé khứ hồi đi Singapore.', 'Yêu cầu rõ ràng.'], ['I want book Singapore.', 'Thiếu to, thiếu vé.'], ['I booked a ticket.', 'Sai thì.']),
        T(['When would you like to travel?', '', 'Anh muốn đi khi nào?'], ['On the 12th of March, and come back on the 15th.', 'Ngày 12/3, về ngày 15.', 'Ngày đi + về.'], ['In the 12th March.', 'Ngày → on.'], ['Twelve o\'clock.', 'Hỏi ngày, không phải giờ.']),
        T(["There's a flight at 6:05 a.m. or a direct flight at 1:30 p.m.", '', 'Có chuyến 6:05 sáng hoặc bay thẳng 1:30 chiều.'], ["I'll take the direct flight at 1:30, please. How much is it?", 'Tôi lấy chuyến bay thẳng 1:30. Giá bao nhiêu?', 'Chọn + hỏi giá.'], ['I take the 6:15 flight.', 'Nghe nhầm giờ.'], ['Is it a flight?', 'Câu vô nghĩa.']),
        T(["It's 4.2 million dong including 20 kilos of baggage.", '', '4,2 triệu đồng, gồm 20 kg hành lý.'], ['Great. Can I change the date later if I need to?', 'Tốt. Sau này tôi đổi ngày được không?', 'Hỏi điều kiện vé.'], ['Is the baggage 12 kilos?', 'Nghe nhầm: 20 kg.'], ['How many is it?', 'Đã nói giá rồi.'])
      ], ket: 'Em đã đặt vé máy bay qua điện thoại.'
    },
    tom: ['Đặt vé', 'return / one-way / direct', 'arrive in / at', 'Nghe giờ và ngày'], nguphap: "I'd like to + V; Is there…?; Can I…?", phatam: 'itinerary /aɪˈtɪnəreri/; đọc mã đặt chỗ từng chữ',
    loi: ['arrive to', 'Nghe nhầm 15 / 50'], btvn: ['Viết lịch trình chuyến đi 3 ngày bằng tiếng Anh', 'Đóng vai đặt vé tàu đi Huế', 'Luyện 🎤 đọc mã đặt chỗ và giờ']
  };

  /* ================= NGÀY 20 ================= */
  const d20 = {
    n: 20, ten: 'Ngân hàng và tiền bạc', kinds: K,
    muc: 'Giao dịch ngân hàng cơ bản: mở tài khoản, chuyển khoản, đổi tiền, báo mất thẻ; nói chuyện chi tiêu.',
    hoc: `<h4>1. Tại quầy giao dịch</h4>${exs([["I'd like to open a savings account.", 'Tôi muốn mở tài khoản tiết kiệm.'], ['I want to transfer money to this account.', 'Tôi muốn chuyển tiền vào tài khoản này.'], ["What's the exchange rate for US dollars today?", 'Tỷ giá đô la Mỹ hôm nay bao nhiêu?'], ["I've lost my card. Can you block it, please?", 'Tôi mất thẻ. Khoá thẻ giúp tôi.']])}
      <h4>2. Từ thông dụng</h4>${tbl(['Tiếng Anh', 'Nghĩa'], [['account / savings account', 'tài khoản / tài khoản tiết kiệm'], ['deposit / withdraw', 'gửi / rút tiền'], ['transfer', 'chuyển khoản'], ['balance', 'số dư'], ['interest rate', 'lãi suất'], ['fee / charge', 'phí'], ['ID card / passport', 'CCCD / hộ chiếu']])}
      ${tip('🔒 An toàn: ngân hàng <b>không bao giờ</b> hỏi mã OTP hay mật khẩu qua điện thoại. Câu cần nhớ: <i>I never share my OTP with anyone.</i>')}`,
    vocab: [
      w('account', '/əˈkaʊnt/', 'tài khoản', '', ['I have an account at this bank.', '', 'Tôi có tài khoản ở ngân hàng này.']),
      w('savings account', '/ˈseɪvɪŋz əˈkaʊnt/', 'tài khoản tiết kiệm', '', ["I'd like to open a savings account.", '', 'Tôi muốn mở tài khoản tiết kiệm.']),
      w('transfer', '/trænsˈfɜːr/', 'chuyển khoản', '', ['I transferred the money yesterday.', '', 'Hôm qua tôi đã chuyển tiền.']),
      w('withdraw', '/wɪðˈdrɔː/', 'rút tiền', '', ['I want to withdraw five million.', '', 'Tôi muốn rút 5 triệu.']),
      w('balance', '/ˈbæləns/', 'số dư', '', ['Can I check my balance?', '', 'Tôi kiểm tra số dư được không?']),
      w('exchange rate', '/ɪksˈtʃeɪndʒ reɪt/', 'tỷ giá', '', ["What's today's exchange rate?", '', 'Tỷ giá hôm nay bao nhiêu?']),
      w('interest rate', '/ˈɪntrəst reɪt/', 'lãi suất', '', ['The interest rate is 5% a year.', '', 'Lãi suất 5% một năm.']),
      w('fee', '/fiː/', 'phí', '', ['Is there a fee for this service?', '', 'Dịch vụ này có mất phí không?']),
      w('cash', '/kæʃ/', 'tiền mặt', '', ['Do you accept cash?', '', 'Bạn có nhận tiền mặt không?']),
      w('block', '/blɑːk/', 'khoá (thẻ)', '', ['Please block my card.', '', 'Khoá thẻ giúp tôi.']),
      w('fill in', '/fɪl ɪn/', 'điền (mẫu đơn)', '', ['Please fill in this form.', '', 'Vui lòng điền vào mẫu này.']),
      w('signature', '/ˈsɪɡnətʃər/', 'chữ ký', '', ['I need your signature here.', '', 'Tôi cần chữ ký của bạn ở đây.'])
    ],
    qs: [
      ['mc', '“Rút tiền” là?', 'withdraw', ['deposit', 'transfer', 'balance'], 'withdraw.'],
      ['mc', '“Số dư tài khoản” là?', 'balance', ['fee', 'interest', 'signature'], 'balance.'],
      ['mc', 'Please ___ this form and sign here.', 'fill in', ['fill on', 'full in', 'feel in'], 'fill in.'],
      ['mc', "I've lost my card. Can you ___ it, please?", 'block', ['open', 'withdraw', 'transfer'], 'block a card.'],
      ['mc', 'Người gọi tự xưng nhân viên ngân hàng và hỏi mã OTP. Em nói?', 'Sorry, I never share my OTP.', ['OK, my OTP is…', 'Wait, I will send it.', 'Can you send it again?'], 'Không bao giờ cung cấp OTP.'],
      ['hear', "The interest rate for a 12-month savings account is 5.2 percent.", 'Lãi suất tiết kiệm 12 tháng là 5,2%.', ['Lãi suất 2 tháng là 5,12%.', 'Phí rút tiền là 5,2%.', 'Lãi suất 12 tháng là 2,5%.'], '12-month / 5.2 percent.'],
      ['order', 'Sắp xếp: “Tôi muốn chuyển tiền.”', ['I', 'would like', 'to transfer', 'some money.'], 'I would like to transfer some money.']
    ],
    noi: [['I\'d *like* to open a *savings* *account*. ↘', 'Tôi muốn mở tài khoản tiết kiệm.'], ['What\'s the *exchange* *rate* for *US* *dollars*? ↘', 'Tỷ giá USD bao nhiêu?'], ['Is there a *fee* for *this*? ↗', 'Cái này có mất phí không?'], ['I *never* *share* my *OTP* with *anyone*. ↘', 'Tôi không bao giờ chia sẻ OTP với ai.']],
    hoithoai: {
      ctx: 'Một khách nước ngoài đến quầy giao dịch, em là giao dịch viên.', vai: 'Khách hỏi, em hỗ trợ.', ai: '🧔 Customer',
      luot: [
        T(["Hi. I'd like to open an account. I'm working in Vietnam now.", '', 'Chào. Tôi muốn mở tài khoản. Tôi đang làm việc ở Việt Nam.'], ['Sure. Could I see your passport and work permit, please?', 'Vâng. Cho tôi xem hộ chiếu và giấy phép lao động.', 'Yêu cầu giấy tờ lịch sự.'], ['Give me passport.', 'Thiếu lịch sự.'], ['You have account?', 'Sai ngữ pháp.']),
        T(['Here you are. Is there a monthly fee?', '', 'Đây. Có phí hàng tháng không?'], ['No, there is no monthly fee if your balance is over two million dong.', 'Không mất phí hàng tháng nếu số dư trên 2 triệu.', 'Giải thích điều kiện.'], ['Yes, fee is interest.', 'Câu rối.'], ['The balance is fee.', 'Sai nghĩa.']),
        T(['Great. And can I transfer money to my home country online?', '', 'Tốt. Tôi chuyển tiền về nước qua mạng được không?'], ['Yes, you can use our mobile app. Please fill in this form and sign here.', 'Được, dùng ứng dụng điện thoại. Vui lòng điền mẫu này và ký ở đây.', 'Hướng dẫn rõ.'], ['Yes, give me your OTP.', 'Không bao giờ hỏi OTP!'], ['No, you must withdraw.', 'Sai thông tin.'])
      ], ket: 'Em đã hỗ trợ khách mở tài khoản bằng tiếng Anh.'
    },
    tom: ['Giao dịch ở quầy', 'deposit / withdraw / transfer / balance', 'An toàn OTP'], nguphap: "I'd like to + V; Is there…?; Could I…?", phatam: 'withdraw /wɪðˈdrɔː/, interest /ˈɪntrəst/',
    loi: ['Nhầm deposit (gửi) và withdraw (rút)', 'fill on'], btvn: ['Viết 6 câu một khách hàng hay hỏi ở ngân hàng', 'Đóng vai báo mất thẻ', 'Luyện 🎤 4 câu']
  };

  /* ================= NGÀY 21 ================= */
  const d21 = {
    n: 21, ten: 'Kiểm tra tổng hợp và mô phỏng giao tiếp', vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Ôn giai đoạn 3: kế hoạch, mời – hẹn, lời khuyên, sức khoẻ, đặt vé, ngân hàng.',
    hoc: `<h4>Tóm tắt giai đoạn 3</h4>${tbl(['Chủ điểm', 'Mẫu câu'], [['Dự định', "I'm going to… · My goal is to…"], ['Mời – hẹn', "Would you like to…? · I'd love to, but… · Does … work for you?"], ['Lời khuyên – nghĩa vụ', "You should… · We have to… · You mustn't… · You don't have to…"], ['Sức khoẻ', 'I have a headache. · My back hurts. · three times a day'], ['Đặt vé', "I'd like to book a return ticket… · Is there an earlier flight?"], ['Ngân hàng', 'open an account · transfer · withdraw · balance']])}`,
    qs: [['mc', 'You ___ smoke in the hospital.', "mustn't", ["don't have to", 'should', 'have to'], 'Cấm.'], ['mc', "I'm going ___ a new laptop.", 'to buy', ['buy', 'buying', 'bought'], 'going to + V.']],
    noi: [['Would you *like* to *join* us? ↗', 'Bạn có muốn tham gia không?'], ['I\'m *going* to *book* the *tickets* *tonight*. ↘', 'Tối nay tôi sẽ đặt vé.'], ['You *should* see a *doctor*. ↘', 'Bạn nên đi khám.']],
    hoithoai: {
      ctx: 'Một tuần bận rộn: mời bạn, đi khám, đặt vé, ra ngân hàng.', vai: 'Nhiều vai, em phản xạ.', ai: '🎭 Nhiều người',
      luot: [
        T(['(Friend) Would you like to go to the beach on Sunday?', '', '(Bạn) Chủ nhật đi biển không?'], ["I'd love to, but I'm going to visit my parents.", 'Muốn lắm, nhưng mình định về thăm bố mẹ.', 'Từ chối khéo + going to.'], ['No.', 'Cộc lốc.'], ['Yes, I busy.', 'Mâu thuẫn.']),
        T(['(Doctor) What seems to be the problem?', '', '(Bác sĩ) Anh bị sao?'], ["I've had a bad headache for two days.", 'Tôi đau đầu nặng hai ngày nay.', 'Triệu chứng + for.'], ['I am headache two days.', 'Sai cấu trúc.'], ['My head has a headache since two days.', 'Sai since.']),
        T(['(Agent) One-way or return?', '', '(Nhân viên) Một chiều hay khứ hồi?'], ['Return, please. Is there a direct flight?', 'Khứ hồi. Có bay thẳng không?', 'Trả lời + hỏi thêm.'], ['Yes, please.', 'Câu hỏi lựa chọn không trả lời yes.'], ['One-way return.', 'Mâu thuẫn.']),
        T(['(Bank clerk) How can I help you?', '', '(Giao dịch viên) Tôi giúp gì được?'], ["I'd like to withdraw some cash and check my balance.", 'Tôi muốn rút tiền mặt và kiểm tra số dư.', 'Hai yêu cầu rõ ràng.'], ['I want deposit my withdraw.', 'Câu rối.'], ['Give me OTP.', 'Không hợp lý.'])
      ], ket: 'Em đã xử lý trọn một tuần nhiều tình huống!'
    },
    tom: ['Ôn giai đoạn 3', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn', phatam: 'Ngữ điệu câu mời ↗ và câu kể ↘',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: học lại ngày yếu', 'Làm đề "A2 Key mini" trong mục Luyện đề', 'Ghi âm đoạn từ chối lời mời khéo léo']
  };

  /* ================= NGÀY 22 ================= */
  const d22 = {
    n: 22, ten: 'Trải nghiệm: Have you ever…?', kinds: K,
    muc: 'Dùng hiện tại hoàn thành để hỏi và kể trải nghiệm; chuyển sang quá khứ đơn khi kể chi tiết.',
    hoc: `<h4>1. Công thức</h4>${F(['S', '+', 'have / has', '+', 'V3'])}${exs([['Have you ever been to Thailand?', 'Bạn từng đến Thái Lan chưa?'], ["I've never eaten durian.", 'Tôi chưa bao giờ ăn sầu riêng.'], ["She's been to Japan three times.", 'Cô ấy đến Nhật ba lần rồi.']])}
      <h4>2. Hỏi trải nghiệm → kể chi tiết</h4>${tbl(['Bước', 'Thì', 'Ví dụ'], [['Hỏi có / chưa', 'Hiện tại hoàn thành', 'Have you ever tried karaoke? – Yes, I have.'], ['Kể khi nào, thế nào', 'Quá khứ đơn', 'I tried it last month. It was fun!']])}
      <h4>3. V3 thông dụng</h4><p>be → been · go → gone · eat → eaten · see → seen · try → tried · meet → met · do → done · take → taken · write → written</p>
      ${tip('🔑 <b>been to</b> (đã đến và đã về) dùng cho trải nghiệm: <i>I\'ve been to Hue.</i>')}${G('htht-co-ban', 'Hiện tại hoàn thành')}`,
    vocab: [
      w('ever', '/ˈevər/', 'đã từng (trong câu hỏi)', '', ['Have you ever been abroad?', '', 'Bạn từng ra nước ngoài chưa?']),
      w('never', '/ˈnevər/', 'chưa bao giờ', '', ["I've never seen snow.", '', 'Tôi chưa bao giờ thấy tuyết.']),
      w('been to', '/bɪn tuː/', 'đã từng đến', '', ["I've been to Singapore twice.", '', 'Tôi đến Singapore hai lần rồi.']),
      w('tried', '/traɪd/', 'đã thử', '', ['Have you tried bánh xèo?', '', 'Bạn ăn thử bánh xèo chưa?']),
      w('abroad', '/əˈbrɔːd/', 'ở nước ngoài', '', ['I have never worked abroad.', '', 'Tôi chưa từng làm việc ở nước ngoài.']),
      w('twice', '/twaɪs/', 'hai lần', '', ["I've been there twice.", '', 'Tôi đến đó hai lần.']),
      w('experience', '/ɪkˈspɪriəns/', 'trải nghiệm; kinh nghiệm', '', ['It was a great experience.', '', 'Đó là trải nghiệm tuyệt vời.']),
      w('eaten', '/ˈiːtn/', 'đã ăn (V3 của eat)', '', ["I've never eaten snails.", '', 'Tôi chưa từng ăn ốc.']),
      w('seen', '/siːn/', 'đã thấy (V3 của see)', '', ['Have you seen this film?', '', 'Bạn xem phim này chưa?']),
      w('once', '/wʌns/', 'một lần', '', ["I've flown business class once.", '', 'Tôi từng bay hạng thương gia một lần.']),
      w('snow', '/snoʊ/', 'tuyết', '', ['I want to see snow one day.', '', 'Một ngày nào đó tôi muốn thấy tuyết.']),
      w('scary', '/ˈskeri/', 'đáng sợ', '', ['The ride was scary but fun.', '', 'Trò chơi đáng sợ nhưng vui.'])
    ],
    qs: [
      ['mc', '___ you ever been to Korea?', 'Have', ['Did', 'Has', 'Were'], 'you → Have.'],
      ['mc', "I've never ___ sushi.", 'eaten', ['ate', 'eat', 'eating'], 'have + V3.'],
      ['mc', 'Have you seen this film? – Yes, I ___ it last week.', 'saw', ['have seen', 'seen', 'see'], 'Có thời gian cụ thể → quá khứ đơn.'],
      ['mc', '“hai lần” là?', 'twice', ['two once', 'second', 'double times'], 'twice.'],
      ['mc', 'abroad nghĩa là?', 'ở nước ngoài', ['trên tàu', 'ở quê', 'xa nhà'], 'abroad.'],
      ['hear', "I've been to Thailand twice, but I've never been to Japan.", 'Đến Thái hai lần, chưa đến Nhật lần nào.', ['Đến Nhật hai lần, chưa đến Thái.', 'Đến cả hai nước.', 'Sắp đi Nhật hai lần.'], 'twice / never.'],
      ['order', 'Sắp xếp: “Tôi chưa bao giờ thấy tuyết.”', ["I've", 'never', 'seen', 'snow.'], "I've never seen snow."]
    ],
    noi: [['Have you *ever* been to *Thailand*? ↗', 'Bạn từng đến Thái Lan chưa?'], ['*Yes*, I *have*. → I went there last *year*. ↘', 'Rồi. Tôi đi năm ngoái.'], ['I\'ve *never* *eaten* *durian*. ↘', 'Tôi chưa từng ăn sầu riêng.'], ['It was a *great* *experience*. ↘', 'Đó là trải nghiệm tuyệt vời.']],
    hoithoai: {
      ctx: 'Giờ nghỉ trưa, đồng nghiệp người Canada hỏi về trải nghiệm du lịch.', vai: 'Ryan hỏi, em kể.', ai: '🧑 Ryan',
      luot: [
        T(['Have you ever been abroad?', '', 'Bạn từng ra nước ngoài chưa?'], ["Yes, I have. I've been to Singapore and Thailand.", 'Rồi. Tôi đã đến Singapore và Thái Lan.', 'Trả lời ngắn + HTHT.'], ['Yes, I did.', 'Have you…? → Yes, I have.'], ['Yes, I have go.', 'have + V3.']),
        T(['When did you go to Thailand?', '', 'Bạn đi Thái khi nào?'], ['I went there in 2023 for a company trip.', 'Tôi đi năm 2023, chuyến du lịch công ty.', 'Có thời gian → quá khứ đơn.'], ["I've been there in 2023.", 'Có năm cụ thể → quá khứ đơn.'], ['I go there 2023.', 'Sai thì.']),
        T(['Have you ever tried Thai street food?', '', 'Bạn ăn thử đồ ăn đường phố Thái chưa?'], ['Yes! I tried mango sticky rice. It was delicious.', 'Rồi! Tôi ăn xôi xoài. Ngon lắm.', 'Kể chi tiết bằng quá khứ đơn.'], ["Yes, I've tried it yesterday.", 'yesterday → quá khứ đơn.'], ['No, I have eat.', 'Mâu thuẫn, sai V3.'])
      ], ket: 'Em đã hỏi và kể trải nghiệm đúng thì.'
    },
    tom: ['Have you ever…?', 'never / once / twice', 'HTHT → quá khứ đơn khi kể chi tiết'], nguphap: 'Hiện tại hoàn thành: trải nghiệm', phatam: "I've /aɪv/ đọc rõ âm v; been /bɪn/",
    loi: ['Yes, I did cho câu Have you…?', 'Dùng HTHT với yesterday / in 2023'], btvn: ['Viết 5 điều em đã làm và 5 điều chưa bao giờ làm', 'Hỏi người thân 3 câu Have you ever…?', 'Luyện 🎤 4 câu']
  };

  /* ================= NGÀY 23 ================= */
  const d23 = {
    n: 23, ten: 'Cập nhật công việc: just, already, yet', kinds: K,
    muc: 'Báo cáo tiến độ công việc: việc vừa xong, đã xong, chưa xong; hỏi đồng nghiệp xong chưa.',
    hoc: `${tbl(['Từ', 'Nghĩa', 'Vị trí', 'Ví dụ'], [['just', 'vừa mới', 'giữa have và V3', "I've just sent the email."], ['already', 'đã … rồi (sớm hơn dự kiến)', 'giữa have và V3', "She's already finished the report."], ['yet', 'chưa (phủ định) / … chưa? (hỏi)', 'cuối câu', "I haven't called him yet. Have you called him yet?"]])}
      ${exs([['Has the client replied yet?', 'Khách hàng trả lời chưa?'], ["Not yet. I'll check again this afternoon.", 'Chưa. Chiều tôi kiểm tra lại.'], ["We've already fixed the printer.", 'Chúng tôi đã sửa xong máy in rồi.']])}
      ${tip('📋 Mẫu báo cáo ngắn: <b>Done</b>: I\'ve already… · <b>Just now</b>: I\'ve just… · <b>To do</b>: I haven\'t … yet. I\'m going to… by Friday.')}`,
    vocab: [
      w('just', '/dʒʌst/', 'vừa mới', '', ["I've just arrived.", '', 'Tôi vừa đến.']),
      w('already', '/ɔːlˈredi/', 'đã … rồi', '', ["I've already paid.", '', 'Tôi đã trả tiền rồi.']),
      w('yet', '/jet/', 'chưa; … chưa?', 'Cuối câu.', ["Have you finished yet?", '', 'Bạn xong chưa?']),
      w('not yet', '/nɑːt jet/', 'chưa', '', ['Not yet, sorry.', '', 'Chưa, xin lỗi.']),
      w('sent', '/sent/', 'đã gửi (send)', '', ["I've sent you the file.", '', 'Tôi đã gửi bạn file.']),
      w('replied', '/rɪˈplaɪd/', 'đã trả lời', '', ["He hasn't replied yet.", '', 'Anh ấy chưa trả lời.']),
      w('fixed', '/fɪkst/', 'đã sửa', '', ["We've fixed the problem.", '', 'Chúng tôi đã sửa lỗi.']),
      w('updated', '/ʌpˈdeɪtɪd/', 'đã cập nhật', '', ["I've updated the software.", '', 'Tôi đã cập nhật phần mềm.']),
      w('deadline', '/ˈdedlaɪn/', 'hạn chót', '', ['The deadline is Friday.', '', 'Hạn chót là thứ Sáu.']),
      w('progress', '/ˈprɑːɡres/', 'tiến độ', 'Không đếm được.', ["What's the progress on the project?", '', 'Dự án tiến độ thế nào?']),
      w('task', '/tæsk/', 'nhiệm vụ, đầu việc', '', ['I have three tasks today.', '', 'Hôm nay tôi có 3 đầu việc.']),
      w('by Friday', '/baɪ ˈfraɪdeɪ/', 'trước thứ Sáu (hạn)', '', ["I'll finish it by Friday.", '', 'Tôi sẽ xong trước thứ Sáu.'])
    ],
    qs: [
      ['mc', "Have you called the client ___?", 'yet', ['already', 'just', 'ever'], 'Câu hỏi → yet cuối câu.'],
      ['mc', "I've ___ finished. You can check it now.", 'just', ['yet', 'ever', 'since'], 'Vừa mới.'],
      ['mc', "Câu đúng là?", "I haven't sent the invoice yet.", ["I haven't sent yet the invoice.", "I didn't sent the invoice yet.", "I haven't yet sent the invoice yet."], 'yet cuối câu.'],
      ['mc', 'deadline nghĩa là?', 'hạn chót', ['tiến độ', 'nhiệm vụ', 'cuộc họp'], 'deadline.'],
      ['mc', "She has ___ booked the room, so you don't need to.", 'already', ['yet', 'ever', 'still not'], 'Đã rồi.'],
      ['hear', "I've already fixed the printer, but I haven't updated the software yet.", 'Đã sửa máy in, chưa cập nhật phần mềm.', ['Đã cập nhật phần mềm, chưa sửa máy in.', 'Chưa làm gì cả.', 'Vừa mua máy in mới.'], 'already fixed / not updated yet.'],
      ['order', 'Sắp xếp: “Tôi vừa gửi email.”', ["I've", 'just', 'sent', 'the email.'], "I've just sent the email."]
    ],
    noi: [['Have you *finished* the *report* *yet*? ↗', 'Bạn làm xong báo cáo chưa?'], ['*Not* *yet*. → I\'ll finish it by *Friday*. ↘', 'Chưa. Tôi sẽ xong trước thứ Sáu.'], ['I\'ve *just* *sent* you the *file*. ↘', 'Tôi vừa gửi bạn file.'], ['We\'ve *already* *fixed* the *problem*. ↘', 'Chúng tôi đã sửa xong lỗi rồi.']],
    hoithoai: {
      ctx: 'Họp nhanh đầu ngày, trưởng nhóm hỏi tiến độ công việc IT.', vai: 'Trưởng nhóm hỏi, em báo cáo.', ai: '👨‍💼 Team leader',
      luot: [
        T(["Morning. Have you installed the new software on the branch computers yet?", '', 'Chào. Em cài phần mềm mới cho máy chi nhánh chưa?'], ["Yes, I've already installed it on 15 computers.", 'Rồi, em đã cài xong 15 máy.', 'already + V3.'], ['Yes, I installed yet.', 'yet dùng sai.'], ['Yes, I have install.', 'have + V3.']),
        T(['Great. What about the printer on the second floor?', '', 'Tốt. Còn máy in tầng 2?'], ["I haven't fixed it yet. I'm waiting for a new part.", 'Em chưa sửa xong. Đang chờ linh kiện mới.', "haven't … yet."], ["I didn't fix it already.", 'already không dùng trong phủ định.'], ['I have fixed yet.', 'Mâu thuẫn.']),
        T(['When will it be ready?', '', 'Khi nào xong?'], ['The part has just arrived, so I\'ll finish it by noon.', 'Linh kiện vừa về, em sẽ xong trước trưa.', 'just + kế hoạch.'], ['It ready yesterday.', 'Sai thì, thiếu động từ.'], ['By noon, already yet.', 'Câu rối.'])
      ], ket: 'Em đã báo cáo tiến độ với just, already, yet.'
    },
    tom: ['just / already / yet', 'Mẫu báo cáo tiến độ', 'by + hạn'], nguphap: 'Hiện tại hoàn thành với just, already, yet', phatam: 'already /ɔːlˈredi/; Have you … yet? ↗',
    loi: ['yet giữa câu', 'already trong câu phủ định'], btvn: ['Viết báo cáo tiến độ công việc hôm nay theo mẫu Done / Just / To do', 'Viết 5 câu hỏi … yet?', 'Luyện 🎤 4 câu']
  };

  /* ================= NGÀY 24 ================= */
  const d24 = {
    n: 24, ten: 'Viết tin nhắn và email ngắn', kinds: K,
    muc: 'Viết email/tin nhắn ngắn đúng cấu trúc: chào, mục đích, nội dung, kết; phân biệt thân mật và trang trọng.',
    hoc: `<h4>1. Cấu trúc email</h4>${tbl(['Phần', 'Trang trọng', 'Thân mật'], [['Chào', 'Dear Mr. Smith, / Dear Sir or Madam,', 'Hi Tom, / Hello Lan,'], ['Mục đích', "I'm writing to ask about… / to confirm…", 'Just a quick message to…'], ['Nhờ', 'Could you please…? / I would be grateful if…', 'Can you…?'], ['Đính kèm', 'Please find attached the report.', "I've attached the photos."], ['Kết', 'I look forward to hearing from you. Best regards,', 'See you soon! / Cheers,']])}
      <h4>2. Email mẫu</h4><div class="zh-pass">Dear Ms. Taylor,<br>I'm writing to confirm our meeting on Thursday at 10 a.m. Please find attached the agenda. Could you please let me know if you need a projector?<br>I look forward to seeing you.<br>Best regards,<br>Minh</div>
      ${tip('✉️ Dòng tiêu đề (Subject) ngắn, rõ: <i>Meeting on Thursday – agenda</i>. Không viết toàn chữ hoa.')}`,
    vocab: [
      w('Dear', '/dɪr/', 'Kính gửi (mở đầu thư)', '', ['Dear Mr. Brown,', '', 'Kính gửi ông Brown,']),
      w("I'm writing to", '/aɪm ˈraɪtɪŋ tə/', 'Tôi viết thư này để', '', ["I'm writing to ask about the price.", '', 'Tôi viết để hỏi giá.']),
      w('confirm', '/kənˈfɜːrm/', 'xác nhận', '', ['Please confirm your order.', '', 'Vui lòng xác nhận đơn hàng.']),
      w('attached', '/əˈtætʃt/', 'đính kèm', '', ['Please find attached the invoice.', '', 'Hoá đơn được đính kèm.']),
      w('subject', '/ˈsʌbdʒekt/', 'tiêu đề (email)', '', ['Write a clear subject.', '', 'Viết tiêu đề rõ ràng.']),
      w('let me know', '/let miː noʊ/', 'cho tôi biết', '', ['Please let me know by Monday.', '', 'Vui lòng cho tôi biết trước thứ Hai.']),
      w('grateful', '/ˈɡreɪtfl/', 'biết ơn', '', ['I would be grateful if you could help.', '', 'Tôi rất biết ơn nếu bạn giúp được.']),
      w('look forward to', '/lʊk ˈfɔːrwərd tə/', 'mong đợi', '+ V-ing / N.', ['I look forward to hearing from you.', '', 'Mong nhận được phản hồi của bạn.']),
      w('Best regards', '/best rɪˈɡɑːrdz/', 'Trân trọng (kết thư)', '', ['Best regards, Minh', '', 'Trân trọng, Minh']),
      w('reply', '/rɪˈplaɪ/', 'trả lời', '', ['Thanks for your quick reply.', '', 'Cảm ơn bạn trả lời nhanh.']),
      w('as soon as possible', '/æz suːn æz ˈpɑːsəbl/', 'càng sớm càng tốt (ASAP)', '', ['Please call me as soon as possible.', '', 'Gọi tôi càng sớm càng tốt.']),
      w('forward', '/ˈfɔːrwərd/', 'chuyển tiếp (email)', '', ["I'll forward this email to my manager.", '', 'Tôi sẽ chuyển email này cho quản lý.'])
    ],
    qs: [
      ['mc', 'Mở đầu email trang trọng khi không biết tên người nhận?', 'Dear Sir or Madam,', ['Hi guys,', 'Hey you,', 'Dear Friend,'], 'Dear Sir or Madam.'],
      ['mc', 'Please find ___ the report.', 'attached', ['attach', 'attaching', 'attachment'], 'Please find attached.'],
      ['mc', 'I look forward to ___ from you.', 'hearing', ['hear', 'heard', 'be hear'], 'look forward to + V-ing.'],
      ['mc', 'Kết email công việc lịch sự?', 'Best regards,', ['Bye bye!', 'Love you,', 'OK see ya'], 'Best regards.'],
      ['mc', '“Tôi viết thư này để xác nhận…” là?', "I'm writing to confirm…", ["I write for confirm…", "I'm writing for confirming…", 'This mail is confirm…'], "I'm writing to + V."],
      ['hear', 'Could you please let me know as soon as possible?', 'Vui lòng cho tôi biết càng sớm càng tốt.', ['Tôi sẽ cho bạn biết sau.', 'Bạn có biết tôi không?', 'Vui lòng gửi lại email.'], 'let me know + ASAP.'],
      ['order', 'Sắp xếp: “Tôi sẽ chuyển email này cho quản lý.”', ["I'll", 'forward', 'this email', 'to my manager.'], "I'll forward this email to my manager."]
    ],
    noi: [['*Dear* Ms. *Taylor*, → I\'m *writing* to *confirm* our *meeting*. ↘', 'Kính gửi bà Taylor, tôi viết để xác nhận cuộc họp.'], ['Please find *attached* the *agenda*. ↘', 'Chương trình họp được đính kèm.'], ['Could you please *let* me *know* by *Monday*? ↗', 'Vui lòng cho tôi biết trước thứ Hai?'], ['I look *forward* to *hearing* from you. ↘', 'Mong nhận được phản hồi.']],
    hoithoai: {
      ctx: 'Em nhờ chị Mai (đồng nghiệp người Úc) xem giúp email gửi khách.', vai: 'Chị Mai góp ý từng phần.', ai: '👩 Mai',
      luot: [
        T(["Let's start. How will you open the email to Mr. Jones?", '', 'Bắt đầu nhé. Em mở đầu email gửi ông Jones thế nào?'], ['Dear Mr. Jones,', 'Kính gửi ông Jones,', 'Trang trọng, đúng.'], ['Hey Jones!', 'Quá thân mật.'], ['Dear Mr. Jones Smith Mr.', 'Sai.']),
        T(['Good. And the first sentence?', '', 'Tốt. Câu đầu tiên?'], ["I'm writing to send you our new price list.", 'Tôi viết để gửi ông bảng giá mới.', 'Nêu mục đích rõ.'], ['I write you for send price.', 'Sai ngữ pháp.'], ['Price list is here look.', 'Không lịch sự.']),
        T(['Nice. How do you mention the file?', '', 'Hay. Còn nhắc file đính kèm?'], ['Please find attached the price list for 2027.', 'Bảng giá 2027 được đính kèm.', 'Mẫu câu chuẩn.'], ['Please find attach the price.', 'attached.'], ['The file I attaching.', 'Sai.']),
        T(['And how will you end it?', '', 'Kết thư thế nào?'], ['I look forward to hearing from you. Best regards, Minh.', 'Mong phản hồi. Trân trọng, Minh.', 'Kết chuẩn.'], ['I look forward to hear from you.', 'to + V-ing.'], ['Bye, Minh.', 'Quá thân mật.'])
      ], ket: 'Em đã soạn một email công việc chuẩn.'
    },
    tom: ['Cấu trúc email', 'Trang trọng vs thân mật', "I'm writing to… / Please find attached… / I look forward to…"], nguphap: 'look forward to + V-ing; Could you please…?', phatam: 'Đọc email thành tiếng, ngắt ở dấu phẩy',
    loi: ['look forward to hear', 'Mở đầu "Hey" với khách hàng'], btvn: ['Viết email 60–80 từ xin nghỉ phép một ngày', 'Viết tin nhắn thân mật mời bạn đi ăn', 'Thử bài viết "Email mời bạn (A2)" trong Luyện đề']
  };

  /* ================= NGÀY 25 ================= */
  const d25 = {
    n: 25, ten: 'Công nghệ và sự cố máy tính', kinds: K,
    muc: 'Mô tả sự cố máy tính, điện thoại; hướng dẫn từng bước bằng mệnh lệnh; hỗ trợ kỹ thuật qua điện thoại.',
    hoc: `<h4>1. Mô tả sự cố</h4>${exs([["My laptop won't turn on.", 'Laptop không lên nguồn.'], ["The screen keeps freezing.", 'Màn hình cứ bị đơ.'], ["I can't connect to the Wi-Fi.", 'Tôi không kết nối được Wi-Fi.'], ['I forgot my password.', 'Tôi quên mật khẩu.']])}
      <h4>2. Hướng dẫn từng bước (câu mệnh lệnh)</h4>${tbl(['Bước', 'Câu'], [['1', 'First, restart your computer.'], ['2', 'Then, click on the Wi-Fi icon.'], ['3', 'Select the network and type the password.'], ['4', "If it still doesn't work, unplug the router for 30 seconds."]])}
      ${tip("💡 <b>won't + V</b> nói về máy móc = <i>không chịu</i>: <i>The printer won't print.</i> · <b>keep + V-ing</b> = cứ liên tục: <i>It keeps crashing.</i>")}`,
    vocab: [
      w('turn on', '/tɜːrn ɑːn/', 'bật', '', ['Turn on the computer.', '', 'Bật máy tính lên.']),
      w('restart', '/ˌriːˈstɑːrt/', 'khởi động lại', '', ['Have you tried restarting it?', '', 'Bạn thử khởi động lại chưa?']),
      w('freeze', '/friːz/', 'bị đơ', 'Quá khứ: froze.', ['My screen keeps freezing.', '', 'Màn hình cứ bị đơ.']),
      w('crash', '/kræʃ/', 'bị sập (phần mềm)', '', ['The app crashed again.', '', 'Ứng dụng lại bị sập.']),
      w('connect', '/kəˈnekt/', 'kết nối', '+ to.', ["I can't connect to the internet.", '', 'Tôi không kết nối được Internet.']),
      w('click on', '/klɪk ɑːn/', 'bấm vào', '', ['Click on the Start button.', '', 'Bấm vào nút Start.']),
      w('download', '/ˈdaʊnloʊd/', 'tải xuống', '', ['Download the latest version.', '', 'Tải phiên bản mới nhất.']),
      w('install', '/ɪnˈstɔːl/', 'cài đặt', '', ['I need to install a driver.', '', 'Tôi cần cài driver.']),
      w('unplug', '/ʌnˈplʌɡ/', 'rút phích cắm', '', ['Unplug the router for 30 seconds.', '', 'Rút điện router 30 giây.']),
      w('charger', '/ˈtʃɑːrdʒər/', 'bộ sạc', '', ['Did you bring your charger?', '', 'Bạn có mang sạc không?']),
      w('back up', '/bæk ʌp/', 'sao lưu', '', ['Always back up your files.', '', 'Luôn sao lưu dữ liệu.']),
      w('still', '/stɪl/', 'vẫn', '', ["It still doesn't work.", '', 'Nó vẫn không chạy.'])
    ],
    qs: [
      ['mc', '“Laptop không chịu lên nguồn” là?', "My laptop won't turn on.", ["My laptop doesn't turn on yesterday.", "My laptop isn't turn on.", 'My laptop not turns on.'], "won't + V."],
      ['mc', 'The program keeps ___.', 'crashing', ['crash', 'to crash', 'crashed'], 'keep + V-ing.'],
      ['mc', "I can't connect ___ the Wi-Fi.", 'to', ['with', 'on', 'in'], 'connect to.'],
      ['mc', 'Câu hướng dẫn đúng là?', 'Click on the icon and type your password.', ['You clicking the icon.', 'To click icon.', 'Clicked on the icon.'], 'Mệnh lệnh: V nguyên mẫu.'],
      ['mc', 'back up nghĩa là?', 'sao lưu', ['quay lại', 'tải xuống', 'cài đặt'], 'back up files.'],
      ['hear', "First, unplug the router. Wait thirty seconds, then plug it in again.", 'Rút router, chờ 30 giây, rồi cắm lại.', ['Rút router 13 giây.', 'Cắm router rồi chờ 30 phút.', 'Khởi động lại máy tính.'], 'unplug / thirty seconds / plug in.'],
      ['order', 'Sắp xếp: “Bạn thử khởi động lại chưa?”', ['Have you', 'tried', 'restarting', 'it?'], 'Have you tried restarting it?']
    ],
    noi: [['My *laptop* *won\'t* turn *on*. ↘', 'Laptop không lên nguồn.'], ['Have you *tried* *restarting* it? ↗', 'Bạn thử khởi động lại chưa?'], ['*First*, → *unplug* the *router*. → *Then*, → wait thirty *seconds*. ↘', 'Rút router, rồi chờ 30 giây.'], ['It *still* doesn\'t *work*. ↘', 'Nó vẫn không chạy.']],
    hoithoai: {
      ctx: 'Một khách nước ngoài gọi hotline hỗ trợ kỹ thuật, em là nhân viên IT.', vai: 'Khách mô tả lỗi, em hướng dẫn.', ai: '📞 Caller',
      luot: [
        T(["Hi, I can't connect to the internet in my office.", '', 'Chào, tôi không vào mạng được ở văn phòng.'], ['I see. Are other computers in your office working?', 'Tôi hiểu. Các máy khác trong văn phòng có vào được không?', 'Hỏi để khoanh vùng lỗi.'], ['You must buy new computer.', 'Kết luận vội.'], ['Yes, connect.', 'Câu cụt.']),
        T(["No, none of them can connect.", '', 'Không, không máy nào vào được.'], ["OK. First, please unplug the router. Wait thirty seconds, then plug it in again.", 'Được. Rút điện router, chờ 30 giây rồi cắm lại.', 'Hướng dẫn từng bước.'], ['You unplug router yesterday.', 'Sai thì.'], ['Please freeze the router.', 'Sai từ.']),
        T(['Done. The lights are on now, but it still doesn\'t work.', '', 'Xong. Đèn sáng rồi nhưng vẫn không được.'], ["Don't worry. I'll send a technician to your office within an hour.", 'Đừng lo. Tôi sẽ cử kỹ thuật viên đến trong vòng 1 giờ.', 'Quyết định ngay → will.'], ["I'm going to send yesterday.", 'Sai thời gian.'], ['It works, goodbye.', 'Khách vừa nói vẫn không được.'])
      ], ket: 'Em đã hỗ trợ kỹ thuật qua điện thoại bằng tiếng Anh.'
    },
    tom: ["won't / keep + V-ing để tả lỗi", 'Câu mệnh lệnh hướng dẫn', 'Từ vựng IT cơ bản'], nguphap: "Câu mệnh lệnh; won't (máy không chịu); keep + V-ing; Have you tried + V-ing?", phatam: 'download /ˈdaʊnloʊd/, install /ɪnˈstɔːl/',
    loi: ['connect with Wi-Fi', 'keep + to V'], btvn: ['Viết hướng dẫn 5 bước cài một ứng dụng', 'Mô tả 3 sự cố máy tính em hay gặp', 'Luyện 🎤 câu hướng dẫn có ngắt nhóm']
  };

  /* ================= NGÀY 26 ================= */
  const d26 = {
    n: 26, ten: 'Mua sắm online, đổi trả và phàn nàn', kinds: K,
    muc: 'Hỏi về đơn hàng online, báo hàng lỗi, yêu cầu đổi/hoàn tiền lịch sự và chắc chắn.',
    hoc: `<h4>1. Phàn nàn lịch sự: 3 bước</h4>${tbl(['Bước', 'Mẫu câu'], [['Nêu vấn đề', "I'm calling about my order number… · The item arrived damaged. · It's the wrong size."], ['Nêu cảm nhận ngắn', "I'm quite disappointed because I needed it for…"], ['Đề nghị giải pháp', "Could you send a replacement? · I'd like a refund, please."]])}
      <h4>2. Từ khoá đơn hàng</h4><p>order · delivery / shipping · tracking number · damaged · faulty (bị lỗi) · replacement (đổi hàng mới) · refund (hoàn tiền) · receipt (hoá đơn)</p>
      ${tip('😊 Lịch sự nhưng rõ ràng: dùng <b>Could you…?</b> và <b>I\'d like…</b>, tránh <i>You must…</i>. Luôn có mã đơn hàng.')}`,
    vocab: [
      w('order', '/ˈɔːrdər/', 'đơn hàng; đặt hàng', '', ['My order number is 4521.', '', 'Mã đơn hàng của tôi là 4521.']),
      w('delivery', '/dɪˈlɪvəri/', 'giao hàng', '', ['Delivery takes three days.', '', 'Giao hàng mất ba ngày.']),
      w('tracking number', '/ˈtrækɪŋ ˈnʌmbər/', 'mã vận đơn', '', ['Can you send me the tracking number?', '', 'Gửi tôi mã vận đơn được không?']),
      w('damaged', '/ˈdæmɪdʒd/', 'bị hư hỏng', '', ['The box was damaged.', '', 'Hộp bị hỏng.']),
      w('faulty', '/ˈfɔːlti/', 'bị lỗi (máy móc)', '', ['The headphones are faulty.', '', 'Tai nghe bị lỗi.']),
      w('wrong', '/rɔːŋ/', 'sai', '', ['You sent me the wrong colour.', '', 'Bạn gửi sai màu.']),
      w('replacement', '/rɪˈpleɪsmənt/', 'hàng thay thế', '', ['Could you send a replacement?', '', 'Gửi hàng thay thế được không?']),
      w('refund', '/ˈriːfʌnd/', 'hoàn tiền', '', ["I'd like a refund, please.", '', 'Tôi muốn được hoàn tiền.']),
      w('disappointed', '/ˌdɪsəˈpɔɪntɪd/', 'thất vọng', '', ["I'm disappointed with the service.", '', 'Tôi thất vọng về dịch vụ.']),
      w('return', '/rɪˈtɜːrn/', 'trả lại (hàng)', '', ['Can I return it?', '', 'Tôi trả hàng được không?']),
      w('receipt', '/rɪˈsiːt/', 'hoá đơn, biên nhận', 'p câm.', ['Please keep your receipt.', '', 'Vui lòng giữ hoá đơn.']),
      w('apologise', '/əˈpɑːlədʒaɪz/', 'xin lỗi (trang trọng)', '', ['We apologise for the delay.', '', 'Chúng tôi xin lỗi vì sự chậm trễ.'])
    ],
    qs: [
      ['mc', '“Hàng bị lỗi” (máy móc) là?', 'faulty', ['fault', 'fail', 'false'], 'faulty.'],
      ['mc', "I'd like a ___. Please return my money.", 'refund', ['replacement', 'receipt', 'delivery'], 'refund = hoàn tiền.'],
      ['mc', 'Cách phàn nàn lịch sự là?', 'Could you send me a replacement, please?', ['You must send new one now!', 'Send new.', 'Your shop is terrible, give money.'], 'Could you…?'],
      ['mc', 'receipt đọc là?', '/rɪˈsiːt/ (p câm)', ['/rɪˈsiːpt/', '/ˈrespit/', '/rɪˈsaɪpt/'], 'p câm.'],
      ['mc', 'We ___ for the inconvenience.', 'apologise', ['sorry', 'apology', 'excuse'], 'We apologise for…'],
      ['hear', "The shoes arrived yesterday, but they're the wrong size.", 'Giày đến hôm qua nhưng sai cỡ.', ['Giày chưa đến.', 'Giày đến hôm qua, bị rách.', 'Giày đúng cỡ nhưng sai màu.'], 'wrong size.'],
      ['order', 'Sắp xếp: “Tôi trả hàng được không?”', ['Can', 'I', 'return', 'it?'], 'Can I return it?']
    ],
    noi: [['I\'m *calling* about my *order*, → number four-five-two-*one*. ↘', 'Tôi gọi về đơn hàng số 4521.'], ['The *headphones* are *faulty*. ↘', 'Tai nghe bị lỗi.'], ['Could you *send* me a *replacement*, please? ↗', 'Bạn gửi hàng thay thế được không?'], ['I\'m quite *disappointed*. ↘', 'Tôi khá thất vọng.']],
    hoithoai: {
      ctx: 'Em đặt tai nghe trên một trang mua sắm quốc tế, hàng đến bị lỗi. Em chat với nhân viên.', vai: 'Nhân viên hỏi, em phàn nàn lịch sự.', ai: '💬 Support',
      luot: [
        T(['Hello, thanks for contacting us. How can I help?', '', 'Xin chào, cảm ơn đã liên hệ. Tôi giúp gì được?'], ["Hi. I received my order yesterday, but the headphones are faulty. The left side doesn't work.", 'Chào. Tôi nhận hàng hôm qua nhưng tai nghe bị lỗi, bên trái không kêu.', 'Nêu vấn đề rõ ràng.'], ['Your headphones are rubbish!', 'Thô lỗ.'], ['I order headphones.', 'Thiếu thông tin, sai thì.']),
        T(["I'm sorry to hear that. Could I have your order number?", '', 'Rất tiếc. Cho tôi xin mã đơn hàng?'], ["Sure, it's 45217.", 'Được, mã là 45217.', 'Cung cấp thông tin.'], ['My order is faulty.', 'Không trả lời câu hỏi.'], ["I don't know number.", 'Không hợp tác.']),
        T(['Thank you. Would you like a replacement or a refund?', '', 'Cảm ơn. Bạn muốn đổi hàng hay hoàn tiền?'], ["I'd like a replacement, please. Do I need to return the faulty pair?", 'Tôi muốn đổi hàng. Tôi có cần gửi trả đôi lỗi không?', 'Chọn + hỏi tiếp.'], ['Yes, please.', 'Câu hỏi lựa chọn không trả lời yes.'], ['I want both refund replacement.', 'Câu rối.'])
      ], ket: 'Em đã phàn nàn và đổi hàng lịch sự.'
    },
    tom: ['3 bước phàn nàn', 'refund / replacement / faulty / damaged', "Could you…? / I'd like…"], nguphap: "Could you…? ; I'd like…; Would you like A or B?", phatam: 'receipt /rɪˈsiːt/ (p câm); disappointed /ˌdɪsəˈpɔɪntɪd/',
    loi: ['Phàn nàn thô lỗ', 'Trả lời yes cho câu hỏi lựa chọn'], btvn: ['Viết email phàn nàn 80 từ về hàng giao sai', 'Đóng vai nhân viên trả lời phàn nàn', 'Thử bài "Email phàn nàn (B1)" trong Luyện đề']
  };

  /* ================= NGÀY 27 ================= */
  const d27 = {
    n: 27, ten: 'Phỏng vấn xin việc cơ bản', kinds: K,
    muc: 'Trả lời các câu phỏng vấn thường gặp: giới thiệu, kinh nghiệm, điểm mạnh – yếu, lý do ứng tuyển.',
    hoc: `<h4>1. Câu hỏi thường gặp và khung trả lời</h4>${tbl(['Câu hỏi', 'Khung trả lời'], [['Tell me about yourself.', 'Hiện tại (I work as…) → Quá khứ (I have … years of experience in…) → Tương lai (I\'m looking for…)'], ['What are your strengths?', "I'm good at… For example, I…"], ['What is your weakness?', 'Nêu 1 điểm yếu thật + cách đang cải thiện.'], ['Why do you want this job?', "Because I'm interested in… and I think I can…"], ['Do you have any questions?', 'Luôn hỏi 1 câu: What does a typical day look like?']])}
      ${exs([["I have five years of experience in customer service.", 'Tôi có 5 năm kinh nghiệm chăm sóc khách hàng.'], ["I'm good at solving problems.", 'Tôi giỏi giải quyết vấn đề.'], ["Sometimes I'm too detail-oriented, so I'm learning to manage my time better.", 'Đôi khi tôi quá kỹ tính, nên tôi đang học cách quản lý thời gian tốt hơn.']])}
      ${tip('🎯 Mỗi câu trả lời 3–5 câu, có <b>một ví dụ cụ thể</b>. Mỉm cười, nhìn người phỏng vấn, nói chậm và rõ.')}`,
    vocab: [
      w('interview', '/ˈɪntərvjuː/', 'phỏng vấn', '', ['I have a job interview tomorrow.', '', 'Mai tôi có buổi phỏng vấn.']),
      w('work experience', '/wɜːrk ɪkˈspɪriəns/', 'kinh nghiệm làm việc', 'experience (kinh nghiệm) không đếm được.', ['I have three years of work experience.', '', 'Tôi có ba năm kinh nghiệm làm việc.']),
      w('strength', '/streŋθ/', 'điểm mạnh', '', ['My biggest strength is teamwork.', '', 'Điểm mạnh lớn nhất của tôi là làm việc nhóm.']),
      w('weakness', '/ˈwiːknəs/', 'điểm yếu', '', ['What is your weakness?', '', 'Điểm yếu của bạn là gì?']),
      w('skills', '/skɪlz/', 'kỹ năng', '', ['I have good computer skills.', '', 'Tôi có kỹ năng máy tính tốt.']),
      w('responsible for', '/rɪˈspɑːnsəbl fɔːr/', 'chịu trách nhiệm về', '', ["I'm responsible for IT support.", '', 'Tôi phụ trách hỗ trợ IT.']),
      w('team player', '/tiːm ˈpleɪər/', 'người làm việc nhóm tốt', '', ["I'm a good team player.", '', 'Tôi làm việc nhóm tốt.']),
      w('apply for', '/əˈplaɪ fɔːr/', 'ứng tuyển', '', ["I'm applying for the manager position.", '', 'Tôi ứng tuyển vị trí quản lý.']),
      w('position', '/pəˈzɪʃn/', 'vị trí công việc', '', ['Why do you want this position?', '', 'Vì sao bạn muốn vị trí này?']),
      w('salary', '/ˈsæləri/', 'lương', '', ['What is the starting salary?', '', 'Lương khởi điểm bao nhiêu?']),
      w('candidate', '/ˈkændɪdət/', 'ứng viên', '', ['We have ten candidates.', '', 'Chúng tôi có mười ứng viên.']),
      w('achievement', '/əˈtʃiːvmənt/', 'thành tích', '', ['Tell me about an achievement.', '', 'Kể về một thành tích của bạn.'])
    ],
    qs: [
      ['mc', 'I have five years ___ experience.', 'of', ['for', 'in', 'with'], 'years of experience.'],
      ['mc', "I'm applying ___ the sales position.", 'for', ['to', 'at', 'in'], 'apply for a job.'],
      ['mc', 'Cách trả lời “What are your strengths?” tốt nhất?', "I'm good at solving problems. For example, I fixed our sales system in one day.", ["I don't know.", "I'm perfect, no weakness.", 'Strength is good.'], 'Có ví dụ cụ thể.'],
      ['mc', "I'm ___ for customer support.", 'responsible', ['responsibility', 'respond', 'response'], 'be responsible for.'],
      ['mc', 'candidate nghĩa là?', 'ứng viên', ['nhà tuyển dụng', 'vị trí', 'thành tích'], 'candidate.'],
      ['hear', "I'm interested in this position because I want to use my IT skills in a bigger company.", 'Muốn dùng kỹ năng IT ở công ty lớn hơn.', ['Muốn lương cao hơn.', 'Muốn làm việc ít hơn.', 'Muốn học IT.'], 'use my IT skills in a bigger company.'],
      ['order', 'Sắp xếp: “Tôi làm việc nhóm tốt.”', ["I'm", 'a good', 'team', 'player.'], "I'm a good team player."]
    ],
    noi: [['I *work* as an *IT* *officer* → at a *bank*. ↘', 'Tôi làm cán bộ IT ở ngân hàng.'], ['I have *five* *years* of *experience* → in *customer* *service*. ↘', '5 năm kinh nghiệm chăm sóc khách hàng.'], ['My *biggest* *strength* is → *solving* *problems*. ↘', 'Điểm mạnh nhất là giải quyết vấn đề.'], ['What does a *typical* *day* look *like*? ↘', 'Một ngày làm việc điển hình như thế nào?']],
    hoithoai: {
      ctx: 'Em phỏng vấn vị trí chuyên viên hỗ trợ IT ở công ty nước ngoài.', vai: 'Nhà tuyển dụng hỏi, em trả lời.', ai: '👩‍💼 Interviewer',
      luot: [
        T(['Thank you for coming. Can you tell me about yourself?', '', 'Cảm ơn bạn đã đến. Giới thiệu về bản thân nhé?'], ["Sure. I'm an IT support officer with four years of experience. I'm responsible for computers and networks for 80 staff.", 'Tôi là chuyên viên hỗ trợ IT, 4 năm kinh nghiệm, phụ trách máy tính và mạng cho 80 nhân viên.', 'Hiện tại + kinh nghiệm + con số.'], ['My name is Minh. I am 30. Bye.', 'Quá ngắn.'], ['I have four years experiences.', 'years of experience.']),
        T(['What is your greatest strength?', '', 'Điểm mạnh lớn nhất của bạn?'], ["I'm good at explaining technical problems simply. For example, I trained 30 staff to use our new software.", 'Tôi giỏi giải thích vấn đề kỹ thuật dễ hiểu. Ví dụ, tôi đã đào tạo 30 nhân viên dùng phần mềm mới.', 'Điểm mạnh + ví dụ.'], ["I'm good.", 'Không cụ thể.'], ['I have no weakness.', 'Lạc đề.']),
        T(['And your weakness?', '', 'Còn điểm yếu?'], ["Sometimes I spend too long on details, so now I set time limits for each task.", 'Đôi khi tôi mất nhiều thời gian vào chi tiết, nên giờ tôi đặt giới hạn thời gian cho mỗi việc.', 'Điểm yếu + cải thiện.'], ["I'm lazy and always late.", 'Gây ấn tượng xấu.'], ['I have not.', 'Câu sai.']),
        T(['Do you have any questions for us?', '', 'Bạn có câu hỏi nào không?'], ['Yes. What does a typical day look like in this position?', 'Có. Một ngày làm việc ở vị trí này như thế nào?', 'Câu hỏi thông minh.'], ['No.', 'Nên luôn có câu hỏi.'], ['How much salary give me?', 'Hỏi lương thiếu khéo, sai ngữ pháp.'])
      ], ket: 'Em đã trả lời phỏng vấn tự tin bằng tiếng Anh.'
    },
    tom: ['Khung Tell me about yourself', 'Strength + ví dụ', 'Weakness + cải thiện', 'Câu hỏi cho nhà tuyển dụng'], nguphap: 'years of experience; responsible for; apply for; be good at + V-ing', phatam: 'experience /ɪkˈspɪriəns/, strength /streŋθ/',
    loi: ['four years experiences', 'Trả lời quá ngắn, không ví dụ'], btvn: ['Viết câu trả lời 5 câu hỏi phỏng vấn của em', 'Thử bài "Phỏng vấn xin việc" trong Luyện đề → Luyện nói', 'Ghi âm và nghe lại tốc độ nói']
  };

  /* ================= NGÀY 28 ================= */
  const d28 = {
    n: 28, ten: 'Nghe hiểu: thông báo và tin nhắn thoại', tong: 1, kt: { n: 20, min: 20 }, kinds: ['listen', 'listenWord', 'listen', 'meaning', 'write'],
    muc: 'Nghe bắt thông tin chính trong thông báo nhà ga, sân bay, cửa hàng và tin nhắn thoại; ghi lại số, giờ, tên.',
    hoc: `<h4>1. Chiến lược nghe</h4><ol><li>Đọc câu hỏi trước, đoán cần nghe <b>số, giờ, tên hay địa điểm</b>.</li><li>Nghe <b>từ khoá</b> (delayed, gate, platform, call me back…), không cần hiểu từng từ.</li><li>Cẩn thận <b>thông tin bị sửa</b>: <i>at 3… sorry, at 4</i>.</li></ol>
      <h4>2. Mẫu thông báo</h4>${tbl(['Nơi', 'Câu mẫu (bấm để nghe)'], [['Sân bay', `Flight VN 245 to Bangkok is now boarding at gate 12. ${''}`], ['Nhà ga', 'The 9:15 train to Nha Trang will depart from platform 3.'], ['Cửa hàng', 'The store will close in fifteen minutes.'], ['Tin nhắn thoại', 'Hi, this is Lan from ABC Company. Please call me back on 0908 123 456.']])}
      ${reads([['Flight VN245 is delayed by forty minutes.', '', 'Chuyến bay trễ 40 phút.'], ['Please call me back before five.', '', 'Gọi lại cho tôi trước 5 giờ.'], ['The meeting has been moved to Thursday.', '', 'Cuộc họp dời sang thứ Năm.']])}`,
    vocab: [
      w('announcement', '/əˈnaʊnsmənt/', 'thông báo', '', ['Listen to the announcement.', '', 'Nghe thông báo.']),
      w('boarding', '/ˈbɔːrdɪŋ/', 'đang lên máy bay', '', ['Flight VN245 is now boarding.', '', 'Chuyến VN245 đang lên máy bay.']),
      w('gate', '/ɡeɪt/', 'cửa ra máy bay', '', ['Please go to gate 12.', '', 'Vui lòng đến cửa 12.']),
      w('platform', '/ˈplætfɔːrm/', 'sân ga', '', ['The train leaves from platform 3.', '', 'Tàu đi từ sân ga số 3.']),
      w('delayed', '/dɪˈleɪd/', 'bị trễ', '', ['The flight is delayed by one hour.', '', 'Chuyến bay trễ một tiếng.']),
      w('cancelled', '/ˈkænsld/', 'bị huỷ', '', ['The meeting was cancelled.', '', 'Cuộc họp bị huỷ.']),
      w('call me back', '/kɔːl miː bæk/', 'gọi lại cho tôi', '', ['Please call me back.', '', 'Vui lòng gọi lại cho tôi.']),
      w('voicemail', '/ˈvɔɪsmeɪl/', 'tin nhắn thoại', '', ['I left you a voicemail.', '', 'Tôi để lại tin nhắn thoại cho bạn.']),
      w('moved to', '/muːvd tuː/', 'dời sang', '', ['The meeting has been moved to Thursday.', '', 'Cuộc họp dời sang thứ Năm.']),
      w('attention please', '/əˈtenʃn pliːz/', 'xin chú ý', '', ['Attention please, passengers.', '', 'Xin quý khách chú ý.']),
      w('passenger', '/ˈpæsɪndʒər/', 'hành khách', '', ['All passengers must show their tickets.', '', 'Tất cả hành khách phải xuất trình vé.']),
      w('as soon as you can', '/æz suːn æz juː kæn/', 'sớm nhất có thể', '', ['Reply as soon as you can.', '', 'Trả lời sớm nhất có thể.'])
    ],
    qs: [
      ['hear', 'Attention please. Flight VN 245 to Bangkok is delayed by forty minutes.', 'Chuyến bay trễ 40 phút.', ['Chuyến bay trễ 14 phút.', 'Chuyến bay bị huỷ.', 'Chuyến bay đang lên máy bay.'], 'delayed by forty minutes.'],
      ['hear', 'The 9:15 train to Nha Trang will depart from platform 3.', 'Tàu 9:15 đi từ sân ga 3.', ['Tàu 9:50 đi từ sân ga 3.', 'Tàu 9:15 đi từ sân ga 13.', 'Tàu 3:15 đi từ sân ga 9.'], '9:15 / platform 3.'],
      ['hear', 'Hi, this is Lan. The meeting has been moved to Thursday at 2. Please call me back.', 'Họp dời sang thứ Năm lúc 2 giờ.', ['Họp thứ Ba lúc 2 giờ.', 'Họp bị huỷ.', 'Họp thứ Năm lúc 12 giờ.'], 'Thursday at 2.'],
      ['hear', 'The store will close in fifteen minutes. Please bring your items to the checkout.', 'Cửa hàng đóng cửa sau 15 phút.', ['Cửa hàng đóng cửa sau 50 phút.', 'Cửa hàng mở cửa sau 15 phút.', 'Cửa hàng giảm giá 15%.'], 'close in fifteen minutes.'],
      ['hear', "We're meeting at three… sorry, at four o'clock, in room B.", '4 giờ, phòng B.', ['3 giờ, phòng B.', '4 giờ, phòng D.', '3 giờ, phòng 4.'], 'Thông tin bị sửa: at four.'],
      ['mc', 'Ở sân bay, “gate” là?', 'cửa ra máy bay', ['sân ga', 'quầy check-in', 'băng chuyền hành lý'], 'gate.'],
      ['mc', 'cancelled nghĩa là?', 'bị huỷ', ['bị trễ', 'đang lên máy bay', 'đổi cửa']]
    ],
    noi: [['*Attention* please. → Flight *VN* two-four-*five* is now *boarding*. ↘', 'Xin chú ý. Chuyến VN245 đang lên máy bay.'], ['Hi, this is *Minh*. → Please call me *back* → before *five*. ↘', 'Chào, Minh đây. Gọi lại trước 5 giờ nhé.'], ['Sorry, → could you *repeat* the *gate* *number*? ↗', 'Xin lỗi, nhắc lại số cửa được không?']],
    hoithoai: {
      ctx: 'Em ở sân bay Suvarnabhumi, nghe thông báo rồi hỏi nhân viên. Tắt "Hiện nghĩa tiếng Việt" để luyện nghe.', vai: 'Nghe – hiểu – phản hồi nhanh.', ai: '🛫 Airport staff',
      luot: [
        T(['Attention please. Flight VN 610 to Ho Chi Minh City has changed to gate 25.', '', 'Chú ý. Chuyến VN610 đi TP.HCM đổi sang cửa 25.'], ['Excuse me, did they say gate 25 for VN 610?', 'Xin lỗi, có phải họ nói cửa 25 cho chuyến VN610 không?', 'Xác nhận lại.'], ['Gate 52, OK.', 'Nghe nhầm 25 / 52.'], ['Is my flight cancelled?', 'Không phải.']),
        T(["Yes, that's right. Gate 25. It's a ten-minute walk.", '', 'Đúng. Cửa 25. Đi bộ 10 phút.'], ['Thank you. Is the flight delayed?', 'Cảm ơn. Chuyến bay có trễ không?', 'Hỏi thêm.'], ['Thank you. I walk ten hours.', 'Nghe nhầm.'], ['Yes, gate.', 'Câu cụt.']),
        T(["Yes, by about thirty minutes. Boarding starts at 4:15.", '', 'Có, trễ khoảng 30 phút. Lên máy bay lúc 4:15.'], ['Boarding at 4:15. Got it, thanks!', 'Lên máy bay 4:15. Rõ rồi, cảm ơn!', 'Nhắc lại thông tin.'], ['Boarding at 4:50?', 'Nghe nhầm.'], ['Delayed by thirteen minutes, OK.', 'Nghe nhầm thirty.'])
      ], ket: 'Em đã nghe hiểu thông báo và xác nhận thông tin quan trọng.'
    },
    tom: ['Chiến lược nghe từ khoá', 'Thông báo sân bay, nhà ga', 'Tin nhắn thoại', 'Thông tin bị sửa'], nguphap: 'Câu bị động trong thông báo (has been moved, is delayed)', phatam: 'Nghe phân biệt 15 / 50, 13 / 30; đọc số điện thoại theo cụm',
    loi: ['Nghe nhầm -teen / -ty', 'Bỏ qua thông tin bị sửa'], btvn: ['Nghe 3 thông báo trong bài, chép lại số và giờ', 'Tự để lại 1 tin nhắn thoại tiếng Anh 30 giây', 'Làm bài "Số -teen và -ty" trong Phát âm & ngữ điệu']
  };
  d28.qs[6].push('cancelled.');

  /* ================= NGÀY 29 ================= */
  const d29 = {
    n: 29, ten: 'Mô phỏng tình huống liên tục', vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Ghép kỹ năng A2 thành một chuyến công tác trọn vẹn: đặt vé → sân bay → khách sạn → gặp khách → sự cố → về.',
    hoc: `<h4>Kịch bản chuyến công tác Singapore</h4>${tbl(['Chặng', 'Câu chính'], [['📞 Đặt vé', "I'd like to book a return ticket… Is there a direct flight?"], ['🛫 Sân bay', 'Excuse me, did they say gate 25? Is the flight delayed?'], ['🏨 Khách sạn', "I've booked a room under the name… Is breakfast included?"], ['🤝 Gặp khách', "Nice to meet you. I've just sent you our price list."], ['💻 Sự cố', "My laptop won't connect to the Wi-Fi. Could you help me?"], ['☕ Xã giao', 'Have you ever been to Vietnam? You should try phở!']])}${tip('🎤 Làm lại phần Hội thoại 2 lần: lần 1 bật nghĩa tiếng Việt, lần 2 tắt và đọc to từng câu trước khi chọn.')}`,
    qs: [['mc', "Have you ___ been to Vietnam?", 'ever', ['yet', 'already', 'just'], 'Have you ever…?']],
    noi: [['I\'ve *booked* a *room* → under the name *Nguyen*. ↘', 'Tôi đã đặt phòng tên Nguyễn.'], ['Is *breakfast* *included*? ↗', 'Có bao gồm bữa sáng không?'], ['I\'ve *just* *sent* you our *price* *list*. ↘', 'Tôi vừa gửi bảng giá.'], ['You *should* try *phở* → when you come to *Vietnam*. ↘', 'Khi đến Việt Nam bạn nên thử phở.']],
    hoithoai: {
      ctx: 'Chuyến công tác 2 ngày ở Singapore – mỗi lượt là một nơi khác nhau.', vai: 'Em là nhân viên đi công tác.', ai: '🎭 Nhiều người',
      luot: [
        T(['(Check-in) Do you have any bags to check in?', '', '(Quầy làm thủ tục) Bạn có hành lý ký gửi không?'], ['Just one suitcase, please.', 'Chỉ một vali.', 'Trả lời ngắn.'], ['Yes, I have.', 'Thiếu thông tin.'], ['I check bag yesterday.', 'Sai thì.']),
        T(['(Hotel) Good evening. Do you have a reservation?', '', '(Khách sạn) Chào buổi tối. Bạn có đặt phòng không?'], ["Yes, I've booked a room under the name Tran Minh.", 'Có, tôi đặt phòng tên Trần Minh.', 'HTHT + under the name.'], ['Yes, I book a room.', 'Sai thì.'], ['No, I am Minh.', 'Mâu thuẫn.']),
        T(['(Client) Thanks for coming. Did you have a good flight?', '', '(Khách hàng) Cảm ơn đã đến. Chuyến bay ổn chứ?'], ['Yes, thanks. It was a bit delayed, but it was fine.', 'Ổn, cảm ơn. Hơi trễ một chút nhưng không sao.', 'Quá khứ đơn + xã giao.'], ['Yes, it is delay.', 'Sai thì, sai dạng.'], ['No, I fly good.', 'Câu sai.']),
        T(['(Client) Have you sent us the new quotation yet?', '', '(Khách hàng) Anh gửi báo giá mới chưa?'], ["Yes, I've just sent it to your email.", 'Rồi, tôi vừa gửi vào email của anh.', 'just + V3.'], ['Yes, I sent yet.', 'yet sai vị trí.'], ['Not already.', 'Sai: Not yet.']),
        T(['(Hotel IT) How can I help you?', '', '(IT khách sạn) Tôi giúp gì được?'], ["My laptop won't connect to the Wi-Fi in my room.", 'Laptop tôi không kết nối được Wi-Fi trong phòng.', "won't + V."], ["My laptop doesn't connected.", 'Sai ngữ pháp.'], ['Wi-Fi is broke my laptop.', 'Câu rối.']),
        T(['(Client, at dinner) Have you ever tried chilli crab?', '', '(Khách hàng, bữa tối) Bạn từng ăn cua sốt ớt chưa?'], ["No, I've never tried it. I'd love to!", 'Chưa từng ăn. Rất muốn thử!', 'Trải nghiệm + nhận lời.'], ['No, I never try yesterday.', 'Sai thì.'], ['Yes, I did never.', 'Mâu thuẫn.'])
      ], ket: '🎉 Em đã đi trọn chuyến công tác chỉ bằng tiếng Anh!'
    },
    tom: ['Mô phỏng 6 chặng'], nguphap: 'Tổng ôn A2', phatam: 'Nói liền mạch, đúng ngữ điệu câu hỏi',
    loi: ['Xem lại các lượt chọn sai'], btvn: ['Ghi âm toàn bộ kịch bản, tự đóng 2 vai', 'Ôn thẻ "Từ chưa nhớ" chuẩn bị thi cuối khoá', 'Làm đề "TOEIC mini 1" trong Luyện đề']
  };

  /* ================= NGÀY 30 ================= */
  const d30 = {
    n: 30, ten: 'Kiểm tra cuối khoá A2 và lộ trình B1', vocab: [], tong: 1, kt: { n: 30, min: 30 }, kinds: K,
    muc: 'Làm bài kiểm tra cuối khoá 30 câu, tự đánh giá 5 kỹ năng, chọn bước tiếp theo hướng tới B1.',
    hoc: `<h4>1. Bài kiểm tra cuối khoá</h4><p><b>30 câu · 30 phút</b> lấy từ toàn bộ 30 ngày A2. Đạt ≥ 7 điểm là đủ nền sang B1.</p>
      <h4>2. Tự đánh giá (thang 100)</h4>${tbl(['Kỹ năng', 'Tối đa', 'Tự kiểm tra'], [['Phát âm & ngữ điệu', '20', 'Điểm 🎤 trung bình (xem Tiến độ) ≥ 80%? Đọc đúng -ed, -teen/-ty?'], ['Từ vựng', '20', 'Nhớ bao nhiêu % thẻ từ A2?'], ['Ngữ pháp', '20', 'Quá khứ đơn/tiếp diễn, so sánh, going to, modal, HTHT?'], ['Nghe hiểu', '20', 'Bắt được số, giờ, tên trong thông báo?'], ['Giao tiếp & viết', '20', 'Tự xử lý đặt vé, ngân hàng, phàn nàn, phỏng vấn, viết email ngắn?']])}
      <h4>3. Em đang ở đâu?</h4><p>Hoàn thành A2, em kể được chuyện quá khứ, mô tả – so sánh, nói kế hoạch, xử lý tình huống du lịch – công việc cơ bản. Tương đương mốc <b>TOEIC L&R khoảng 225+</b> (mốc tối thiểu A2 theo ETS) hoặc <b>Cambridge A2 Key</b>.</p>
      <h4>4. Lộ trình tiếp theo</h4>${tbl(['Mục tiêu', 'Gợi ý'], [['📘 Lên B1 (Cấp 3)', 'Hiện tại hoàn thành nâng cao, câu điều kiện, bị động, mệnh đề quan hệ, câu tường thuật; nêu ý kiến, viết email 120–150 từ.'], ['🏅 Thi thử', 'Làm "A2 Key mini" và "TOEIC mini 1" trong mục Luyện đề, ghi lại điểm.'], ['🎧 Nghe mỗi ngày', '15 phút podcast/video tiếng Anh chậm, có phụ đề tiếng Anh.'], ['✍️ Viết mỗi tuần', '2 email ngắn, nhờ gia sư AI chữa (nút Sao chép trong Luyện viết).']])}
      ${tip('🧾 Làm bài xong, vào <a href="#/tieng-anh/c2/tien-do">Tiến độ</a> → Sao chép tóm tắt, dán cho gia sư AI để được tư vấn lộ trình riêng.')}`,
    qs: [['mc', 'I ___ to Japan twice.', "'ve been", ['went ever', "'ve gone ago", 'am been'], 'Trải nghiệm → have been.'], ['mc', 'This phone is ___ than that one.', 'cheaper', ['more cheap', 'cheapest', 'more cheaper'], 'So sánh hơn.'], ['mc', "You ___ wear a tie. It's optional.", "don't have to", ["mustn't", 'must', 'should to'], 'Không bắt buộc.']],
    noi: [['I\'ve *finished* *level* *two*! ↘', 'Tôi đã hoàn thành cấp 2!'], ['*Next*, → I\'m *going* to *start* *B1*. ↘', 'Tiếp theo tôi sẽ học B1.']],
    hoithoai: {
      ctx: 'Phần thi nói cuối khoá: giám khảo hỏi 5 câu.', vai: 'Trả lời đầy đủ, đúng thì.', ai: '👩‍🏫 Examiner',
      luot: [
        T(['Can you tell me about your last holiday?', '', 'Kể về kỳ nghỉ gần nhất của bạn?'], ['I went to Phu Quoc with my family last summer. First, we swam in the sea. Then, we visited a night market.', 'Hè năm ngoái tôi đi Phú Quốc với gia đình. Đầu tiên bơi biển, sau đó đi chợ đêm.', 'Quá khứ đơn + từ nối.'], ['I go to Phu Quoc.', 'Sai thì.'], ["I've been to Phu Quoc last summer.", 'Có thời gian → quá khứ đơn.']),
        T(['How is your city different from Hanoi?', '', 'Thành phố bạn khác Hà Nội thế nào?'], ["It's smaller and quieter than Hanoi, but it isn't as interesting.", 'Nhỏ và yên tĩnh hơn Hà Nội nhưng không thú vị bằng.', 'Hai dạng so sánh.'], ["It's more small than Hanoi.", 'small → smaller.'], ['It is the quietest than Hanoi.', 'Sai cấu trúc.']),
        T(['What are you going to do next year?', '', 'Năm sau bạn định làm gì?'], ["I'm going to take the TOEIC test and look for a better job.", 'Tôi định thi TOEIC và tìm việc tốt hơn.', 'going to.'], ['I going to take TOEIC.', 'Thiếu am.'], ['I took TOEIC next year.', 'Sai thì.']),
        T(['Have you ever worked with foreign customers?', '', 'Bạn từng làm việc với khách nước ngoài chưa?'], ["Yes, I have. Last month I helped a customer from Korea open an account.", 'Rồi. Tháng trước tôi giúp một khách Hàn mở tài khoản.', 'HTHT → quá khứ đơn chi tiết.'], ['Yes, I did ever.', 'Sai.'], ['Yes, I have help.', 'have + V3.']),
        T(['What advice would you give to a new English learner?', '', 'Bạn khuyên người mới học tiếng Anh điều gì?'], ["You should practise a little every day, and you shouldn't be afraid of making mistakes.", 'Nên luyện mỗi ngày một chút, và đừng sợ mắc lỗi.', 'should / shouldn\'t. Chúc mừng em hoàn thành A2!'], ['You must to study.', 'must + V.'], ['You should practising.', 'should + V.'])
      ], ket: '🏆 Chúc mừng em đã hoàn thành Tiếng Anh Cấp 2 (A2)!'
    },
    tom: ['Kiểm tra cuối khoá 30 câu', 'Tự đánh giá 5 kỹ năng', 'Lộ trình B1'], nguphap: 'Tổng ôn A2', phatam: 'Tổng ôn',
    loi: ['Xem lại các câu sai'], btvn: ['Sao chép tóm tắt tiến độ gửi gia sư AI', 'Làm đề "TOEIC mini 1" và "A2 Key mini"', 'Duy trì 15 phút tiếng Anh mỗi ngày']
  };

  window.PLT_EN2.days.push(d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30);
})();

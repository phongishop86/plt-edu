/* PLT-Edu · Tiếng Anh – Luyện đề chứng chỉ (đề do PLT-Edu biên soạn theo dạng bài TOEIC / IELTS / A2 Key, không phải đề chính thức)
   Mục trong đề: ['hear', câu nghe, đáp án, [nhiễu], giải thích, lời dẫn] · ['talk', [lời thoại], [[câu hỏi, đáp án, [nhiễu], giải thích]]]
   ['read', bài đọc HTML, [[câu hỏi, đáp án, [nhiễu], giải thích]]] · ['mc', …] · ['fill', …] */
(function () {
  'use strict';
  const tbl = (h, rows) => `<div class="zh-scroll"><table class="dtable full zh-tb"><tr>${h.map((x) => `<th>${x}</th>`).join('')}</tr>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</table></div>`;
  const R = 'Chọn câu đáp lại phù hợp nhất.';
  const TFN = ['True', 'False', 'Not Given'];
  const tf = (q, a, e) => [q, a, TFN.filter((x) => x !== a), e];

  const gioi = `<h3>Chọn chứng chỉ nào?</h3>${tbl(['Chứng chỉ', 'Dành cho', 'Cấu trúc', 'Thang điểm'], [
    ['<b>TOEIC Listening & Reading</b>', 'Đi làm, doanh nghiệp, ngân hàng tại Việt Nam', 'Nghe 100 câu (~45 phút) + Đọc 100 câu (75 phút), toàn trắc nghiệm', '10–990'],
    ['<b>IELTS</b> (Academic / General Training)', 'Du học, định cư, giảng dạy', 'Nghe 40 câu (30 phút), Đọc 40 câu (60 phút), Viết 2 bài (60 phút), Nói 3 phần (11–14 phút)', 'band 0–9'],
    ['<b>VSTEP</b> (bậc 3–5)', 'Chuẩn đầu ra đại học, viên chức tại Việt Nam', 'Nghe, Đọc, Viết, Nói', 'bậc 3 (B1) – bậc 5 (C1)'],
    ['<b>Cambridge A2 Key / B1 Preliminary</b>', 'Học sinh, người mới học muốn có mốc A2/B1', 'Đọc – Viết, Nghe, Nói', 'thang Cambridge']])}
    <h3>Mốc tham khảo theo cấp học trên PLT-Edu</h3>${tbl(['Cấp', 'CEFR', 'TOEIC L&R (điểm tối thiểu ETS gợi ý)', 'IELTS'], [['Cấp 1', 'A1', '120+', '—'], ['Cấp 2', 'A2', '225+', '~3.0–3.5'], ['Cấp 3', 'B1', '550+', '4.0–5.0'], ['Cấp 4', 'B2', '785+', '5.5–6.5'], ['Cấp 5', 'C1', '945+', '7.0–8.0']])}
    <p class="small muted">Quy đổi chỉ mang tính tham khảo. ETS khuyên không dùng điểm cắt cứng nhắc; yêu cầu cụ thể tuỳ trường, cơ quan, nhà tuyển dụng. Hãy xem thông báo mới nhất của đơn vị tổ chức thi trước khi đăng ký.</p>
    <h3>Cách luyện hiệu quả</h3><ol class="small"><li>Học xong mỗi cấp, làm 1–2 đề mini cùng cấp để biết mình đang ở đâu.</li><li>Xem lại <b>từng câu sai</b>, ghi lý do sai (không hiểu từ, sai ngữ pháp, nghe nhầm số…).</li><li>Viết và nói: tự làm trước, rồi bấm <b>Sao chép</b> để nhờ gia sư AI chữa chi tiết.</li><li>2 tuần trước kỳ thi thật: làm đề chính thức của đơn vị tổ chức thi, đúng giờ.</li></ol>`;

  const de = [
    { id: 'a2-key', ten: 'Đề mini A2 (dạng A2 Key)', loai: 'a2', lv: 'A2', min: 20, mo: '18 câu: nghe, đọc thông báo, ngữ pháp',
      phan: [
        { ten: 'Nghe – hiểu câu ngắn', mo: 'Nghe câu hỏi hoặc lời nói, chọn câu đáp lại phù hợp.', items: [
          ['hear', 'What time does the shop close?', 'At half past nine.', ['Yes, it is.', 'In the city centre.', 'Ten dollars.'], 'Hỏi giờ → trả lời giờ.', R],
          ['hear', 'How did you get here?', 'I took a taxi.', ['I am fine, thanks.', 'Yesterday morning.', 'For two hours.'], 'How did you get here = bạn đến bằng gì.', R],
          ['hear', 'Would you like some more coffee?', 'No, thanks. I\'ve had enough.', ['Yes, I like it.', 'It\'s on the table.', 'I am coffee.'], 'Mời → nhận/từ chối lịch sự.', R],
          ['hear', 'Whose bag is this?', "It's Mai's.", ['It\'s blue.', 'It\'s fifty dollars.', 'Yes, it is a bag.'], 'Whose → của ai.', R],
          ['talk', ['Woman: Hi Tom, are you free on Saturday?', 'Man: In the morning I have football, but I\'m free in the afternoon.', 'Woman: Great. Let\'s go to the new shopping centre at two.', 'Man: OK. Shall we meet at the bus station?', 'Woman: No, it\'s easier to meet outside the cinema.'], [
            ['What does Tom do on Saturday morning?', 'plays football', ['goes shopping', 'watches a film', 'takes a bus'], 'In the morning I have football.'],
            ['What time will they meet?', 'at 2 p.m.', ['at 10 a.m.', 'at 12 p.m.', 'at 4 p.m.'], 'at two (buổi chiều).'],
            ['Where will they meet?', 'outside the cinema', ['at the bus station', 'at the football club', 'inside the shopping centre'], 'It\'s easier to meet outside the cinema.']]]
        ] },
        { ten: 'Đọc – thông báo ngắn', mo: 'Đọc biển báo, tin nhắn và chọn ý đúng.', items: [
          ['read', '<b>NOTICE</b><br>Swimming pool closed for cleaning on Monday 12th. Open again Tuesday 13th from 6 a.m. Children under 10 must be with an adult.', [
            ['When can people swim again?', 'Tuesday morning', ['Monday morning', 'Monday evening', 'Next week'], 'Open again Tuesday from 6 a.m.'],
            ['Who needs an adult with them?', 'children under 10', ['all children', 'people over 10', 'swimming teachers'], 'Children under 10 must be with an adult.']]],
          ['read', '<b>From:</b> Linh<br><b>To:</b> Anna<br>Hi Anna, I can\'t come to class today because I\'ve got a bad cold. Could you send me the homework? I\'ll give you back your dictionary on Friday. Thanks! Linh', [
            ['Why is Linh writing?', "She's ill and will miss class.", ['She wants to borrow a dictionary.', 'She is inviting Anna to class.', 'She finished her homework.'], 'I\'ve got a bad cold.'],
            ['What will Linh do on Friday?', "return Anna's dictionary", ['send the homework', 'go to the doctor', 'buy a new dictionary'], 'I\'ll give you back your dictionary on Friday.']]]
        ] },
        { ten: 'Ngữ pháp và từ vựng', mo: 'Chọn từ đúng điền vào chỗ trống.', items: [
          ['mc', 'I ___ to Hanoi last month.', 'went', ['go', 'have gone', 'going'], 'last month → quá khứ đơn.'],
          ['mc', 'This film is ___ than the book.', 'more interesting', ['interestinger', 'most interesting', 'interesting'], 'So sánh hơn tính từ dài.'],
          ['mc', 'You ___ wear a seatbelt in the car. It\'s the law.', 'must', ['can', 'might', "don't have to"], 'Luật → bắt buộc.'],
          ['mc', 'There isn\'t ___ milk left.', 'any', ['some', 'many', 'a'], 'Phủ định → any.'],
          ['mc', 'She is good ___ maths.', 'at', ['in', 'on', 'for'], 'good at.'],
          ['mc', 'We\'re ___ to visit my grandparents this weekend.', 'going', ['go', 'will', 'went'], 'be going to.'],
          ['mc', '“How ___ is this T-shirt?” – “Twelve dollars.”', 'much', ['many', 'long', 'old'], 'Hỏi giá → How much.']
        ] }] },
    { id: 'toeic-1', ten: 'TOEIC mini 1 – Văn phòng', loai: 'toeic', lv: 'A2–B1', min: 25, mo: '20 câu theo 4 dạng bài TOEIC',
      phan: [
        { ten: 'Part 2 – Hỏi đáp', mo: 'Nghe câu hỏi, chọn câu đáp lại hợp lý nhất. Bẫy hay gặp: đáp án lặp lại từ trong câu hỏi nhưng sai ý.', items: [
          ['hear', 'When is the sales report due?', 'By the end of the week.', ['The sales were good.', 'In the meeting room.', 'Yes, I reported it.'], 'When → thời hạn. Đáp án lặp từ "sales/report" là bẫy.', R],
          ['hear', 'Who is in charge of the new project?', 'Ms. Tanaka from marketing.', ['It\'s a new projector.', 'Next Monday.', 'About ten thousand dollars.'], 'Who → người.', R],
          ['hear', "Why don't we order lunch for the team?", 'Good idea. I\'ll call the restaurant.', ['Because I was hungry.', 'At twelve o\'clock.', 'No, the team won.'], 'Why don\'t we = lời đề nghị.', R],
          ['hear', 'Is the printer on the third floor working?', 'No, it\'s being repaired.', ['I work on the third floor.', 'Print two copies.', 'Yes, three floors.'], 'Hỏi tình trạng máy in.', R],
          ['hear', 'Would you prefer a window seat or an aisle seat?', 'An aisle seat, please.', ['Yes, I would.', 'The window is open.', 'I\'m seeing it.'], 'Câu hỏi lựa chọn → chọn một.', R]
        ] },
        { ten: 'Part 3 – Hội thoại', mo: 'Nghe đoạn hội thoại, trả lời 3 câu hỏi.', items: [
          ['talk', ['Man: Hi Sarah, the client from Lotus Bank wants to move our meeting to Thursday.', 'Woman: Thursday morning is fine, but I have a training session in the afternoon.', 'Man: They suggested ten o\'clock. Can you book the large conference room?', 'Woman: Sure. I\'ll also send them the updated price list before then.'], [
            ['What is the conversation mainly about?', 'changing a meeting time', ['hiring new staff', 'a problem with a bank account', 'cancelling a training session'], 'move our meeting to Thursday.'],
            ['What will happen on Thursday afternoon?', 'The woman will attend training.', ['The client will visit.', 'The man will go to the bank.', 'The price list will be printed.'], 'I have a training session in the afternoon.'],
            ['What will the woman send to the client?', 'an updated price list', ['a training schedule', 'a room booking', 'a contract'], 'send them the updated price list.']]]
        ] },
        { ten: 'Part 5 – Hoàn thành câu', mo: 'Chọn từ / cụm từ đúng.', items: [
          ['mc', 'All employees must ___ their ID cards at all times.', 'wear', ['wearing', 'wore', 'to wear'], 'must + V nguyên mẫu.'],
          ['mc', 'The new software is very easy ___.', 'to use', ['using', 'use', 'used'], 'adj + to V.'],
          ['mc', 'Please submit your application ___ Friday, May 20.', 'by', ['until', 'at', 'since'], 'by = trước hạn.'],
          ['mc', 'Mr. Kim will be ___ for the training program.', 'responsible', ['responsibility', 'responsibly', 'respond'], 'be responsible for.'],
          ['mc', 'Our sales increased ___ last quarter.', 'significantly', ['significant', 'significance', 'signify'], 'Bổ nghĩa cho động từ → trạng từ.'],
          ['mc', 'The package ___ yesterday afternoon.', 'was delivered', ['delivered', 'is delivering', 'has delivering'], 'Bị động quá khứ.'],
          ['mc', 'Neither the manager ___ the assistant was available.', 'nor', ['or', 'and', 'but'], 'neither … nor.'],
          ['mc', 'We look forward to ___ from you.', 'hearing', ['hear', 'heard', 'be heard'], 'look forward to + V-ing.']
        ] },
        { ten: 'Part 7 – Đọc hiểu', mo: 'Đọc email và trả lời.', items: [
          ['read', '<b>To:</b> All staff<br><b>Subject:</b> System maintenance<br>Please note that the internal email system will be unavailable from 10 p.m. Saturday to 6 a.m. Sunday while the IT department upgrades the servers. Staff who need to work during this time should save documents locally. If you have any problems after the upgrade, contact the help desk at extension 204.<br>— IT Department', [
            ['Why will the email system be unavailable?', 'Servers are being upgraded.', ['There was a power cut.', 'Staff are on holiday.', 'A virus was found.'], 'while the IT department upgrades the servers.'],
            ['How long will the maintenance last?', 'eight hours', ['two hours', 'one day', 'a whole weekend'], '10 p.m. → 6 a.m. = 8 tiếng.'],
            ['What should staff do if they have problems later?', 'call extension 204', ['save documents locally', 'restart their computer', 'email the IT manager'], 'contact the help desk at extension 204.']]]
        ] }] },
    { id: 'toeic-2', ten: 'TOEIC mini 2 – Khách hàng và dịch vụ', loai: 'toeic', lv: 'B1–B2', min: 25, mo: '20 câu, khó hơn mini 1',
      phan: [
        { ten: 'Part 2 – Hỏi đáp', mo: 'Câu trả lời gián tiếp là đặc trưng TOEIC từ B1 trở lên.', items: [
          ['hear', 'Has the budget for next year been approved?', "The director hasn't reviewed it yet.", ['Yes, it was a good year.', 'About fifteen percent.', 'I\'ll approve of him.'], 'Trả lời gián tiếp: chưa được duyệt.', R],
          ['hear', 'Where can I find the latest customer survey?', "It's in the shared folder.", ['Next Tuesday.', 'Most customers were happy.', 'I found it difficult.'], 'Where → vị trí (thư mục chung).', R],
          ['hear', "You've worked with this supplier before, haven't you?", 'Yes, for about three years.', ['No, I\'ll supply it.', 'Before lunch.', 'They are very expensive pens.'], 'Câu hỏi đuôi → xác nhận.', R],
          ['hear', 'How about postponing the launch until June?', "That would give us more time to test it.", ['It was launched in May.', 'About two hundred people.', 'At the lunch restaurant.'], 'How about = đề xuất.', R]
        ] },
        { ten: 'Part 4 – Bài nói ngắn', mo: 'Nghe thông báo, trả lời 3 câu hỏi.', items: [
          ['talk', ['Good morning, customers. Thank you for shopping at Green Market.', 'Today only, all fresh fruit is twenty percent off.', 'Members who show their card at the checkout will also receive double points.', 'Please note that the store will close early, at six p.m., because of staff training.'], [
            ['Where is the announcement being made?', 'in a supermarket', ['at an airport', 'in a bank', 'at a training centre'], 'shopping at Green Market.'],
            ['What is offered to members?', 'double points', ['free fruit', 'a new card', 'a training course'], 'members … double points.'],
            ['Why will the store close early?', 'Staff will attend training.', ['It is a public holiday.', 'There is a sale.', 'The fruit is sold out.'], 'because of staff training.']]]
        ] },
        { ten: 'Part 5 – Hoàn thành câu', mo: 'Ngữ pháp và từ vựng công sở.', items: [
          ['mc', '___ the heavy rain, the event was a great success.', 'Despite', ['Although', 'Because', 'However'], 'Theo sau là danh từ.'],
          ['mc', 'The report ___ by the time the meeting starts.', 'will have been completed', ['completes', 'has completed', 'will complete'], 'by the time → tương lai hoàn thành bị động.'],
          ['mc', 'Customers ___ purchase more than $100 receive free delivery.', 'who', ['which', 'whose', 'whom they'], 'Người → who.'],
          ['mc', 'The manager asked that all expenses ___ submitted by Friday.', 'be', ['are', 'were', 'will be'], 'Giả định → be.'],
          ['mc', 'Ms. Lee is the most ___ candidate for the position.', 'qualified', ['qualify', 'qualification', 'qualifying to'], 'Tính từ bổ nghĩa danh từ.'],
          ['mc', 'Had we known about the delay, we ___ the client.', 'would have informed', ['will inform', 'informed', 'would inform'], 'Đảo ngữ điều kiện loại 3.']
        ] },
        { ten: 'Part 6 – Hoàn thành đoạn văn', mo: 'Đọc thư, chọn từ phù hợp ngữ cảnh.', items: [
          ['read', 'Dear Mr. Nguyen,<br>Thank you for your order of 20 laptops. Unfortunately, one model is currently out of stock. ___(1)___, we can offer a similar model with better specifications at the same price. Please let us know your ___(2)___ by Wednesday so that we can ship the goods on time. We ___(3)___ for any inconvenience.<br>Best regards,<br>Customer Service', [
            ['Chỗ trống (1):', 'However', ['Therefore', 'Because', 'Despite'], 'Đối lập: hết hàng → nhưng có lựa chọn khác.'],
            ['Chỗ trống (2):', 'decision', ['decide', 'decisive', 'decided'], 'your + danh từ.'],
            ['Chỗ trống (3):', 'apologise', ['apology', 'sorry', 'excuse'], 'We apologise for…']]]
        ] },
        { ten: 'Part 7 – Đọc hiểu', mo: 'Quảng cáo dịch vụ.', items: [
          ['read', '<b>PLT IT Services – Business Support Packages</b><br>• <b>Basic</b> ($50/month): remote help desk, Monday–Friday, 8 a.m.–5 p.m.<br>• <b>Standard</b> ($120/month): Basic + one on-site visit per month + monthly security check.<br>• <b>Premium</b> ($250/month): 24/7 support, unlimited on-site visits, data backup service.<br>New customers who sign a 12-month contract get the first month free.', [
            ['Which package includes data backup?', 'Premium', ['Basic', 'Standard', 'All packages'], 'Premium: data backup service.'],
            ['What is true about the Basic package?', 'It does not include on-site visits.', ['It is available at weekends.', 'It costs $120 per month.', 'It includes a security check.'], 'Basic chỉ có remote help desk.'],
            ['How can new customers get a free month?', 'by signing a one-year contract', ['by choosing Premium', 'by paying in cash', 'by recommending a friend'], '12-month contract → first month free.']]]
        ] }] },
    { id: 'ielts-1', ten: 'IELTS mini 1 – Nghe và đọc', loai: 'ielts', lv: 'B1–B2', min: 30, mo: '18 câu: nghe tình huống, đọc True/False/Not Given',
      phan: [
        { ten: 'Listening Section 1', mo: 'Cuộc gọi đặt chỗ – nghe số, tên, ngày.', items: [
          ['talk', ['Receptionist: Good afternoon, Riverside Sports Centre. How can I help?', 'Caller: Hi, I\'d like to book a tennis court for next Saturday, please.', 'Receptionist: Certainly. Morning or afternoon?', 'Caller: Afternoon, around three, for two hours.', 'Receptionist: That\'s fine. The price is fifteen pounds an hour. Can I have your name?', 'Caller: Yes, it\'s David Brooks. That\'s B-R-O-O-K-S.', 'Receptionist: And a phone number?', 'Caller: Oh seven nine, four four six, eight one two.'], [
            ['What does the caller want to book?', 'a tennis court', ['a swimming lesson', 'a gym class', 'a badminton court'], 'book a tennis court.'],
            ['How much will he pay in total?', '£30', ['£15', '£45', '£20'], '£15/giờ × 2 giờ.'],
            ['How is his surname spelled?', 'BROOKS', ['BROOK', 'BRUKS', 'BROOKES'], 'B-R-O-O-K-S.'],
            ['What is his phone number?', '079 446 812', ['079 464 812', '097 446 812', '079 446 821'], 'Oh seven nine, four four six, eight one two (“oh” = 0).']]]
        ] },
        { ten: 'Listening Section 3', mo: 'Hai sinh viên bàn về bài tập nhóm.', items: [
          ['talk', ['Anna: So, for our project on city transport, I think we should focus on cycling.', 'Ben: I agree, but we need data. Should we do a survey or use government statistics?', 'Anna: Statistics are more reliable, but a survey would show what students actually think.', 'Ben: Why not do both? We could use statistics for the background and a short survey for our main findings.', 'Anna: Good idea. Let\'s ask our tutor if fifty responses is enough.'], [
            ['What is the main topic of their project?', 'cycling in the city', ['public buses', 'car pollution', 'student housing'], 'focus on cycling.'],
            ['What do they finally decide to use?', 'both statistics and a survey', ['only a survey', 'only statistics', 'interviews with the tutor'], 'Why not do both?'],
            ['What will they ask their tutor about?', 'the number of survey responses', ['the deadline', 'the project topic', 'government statistics'], 'if fifty responses is enough.']]]
        ] },
        { ten: 'Reading – True / False / Not Given', mo: 'True: đúng với bài · False: trái với bài · Not Given: bài không nói.', items: [
          ['read', '<b>The Rise of Urban Farming</b><br>In many large cities, empty rooftops and unused buildings are being turned into small farms. Supporters argue that urban farming reduces the distance food travels, which lowers transport costs and pollution. In Singapore, for example, the government aims to produce 30% of the country\'s nutritional needs locally by 2030. However, critics point out that urban farms are expensive to set up, and they mainly grow vegetables rather than staple foods such as rice or wheat. Despite these limits, many residents say that community gardens improve their quality of life and help them meet their neighbours.', [
            tf('Urban farming can reduce pollution from transporting food.', 'True', 'lowers transport costs and pollution.'),
            tf('Singapore already produces 30% of its food locally.', 'False', 'Bài nói "aims to … by 2030" – là mục tiêu, chưa đạt.'),
            tf('Urban farms are cheap to build.', 'False', 'expensive to set up.'),
            tf('Rooftop farms in Singapore mainly grow rice.', 'Not Given', 'Bài nói urban farms nói chung trồng rau, không nói riêng rooftop Singapore trồng gì.'),
            tf('Some residents feel community gardens help them socially.', 'True', 'help them meet their neighbours.'),
            ['The word "staple" in the passage is closest in meaning to…', 'basic and important', ['expensive', 'imported', 'fresh'], 'staple food = lương thực chính.']]]
        ] },
        { ten: 'Vocabulary for IELTS', mo: 'Từ học thuật hay gặp.', items: [
          ['mc', 'The number of tourists rose ___ from 2 million to 5 million.', 'dramatically', ['slightly', 'steady', 'dramatic'], 'Tăng mạnh → dramatically.'],
          ['mc', 'There are both advantages and ___ to living in a big city.', 'drawbacks', ['drawback', 'drawing', 'backs'], 'advantages and drawbacks.'],
          ['mc', 'Governments should ___ more in public transport.', 'invest', ['investment', 'spend on money', 'pay attention'], 'invest in.'],
          ['mc', 'The data ___ that online shopping is growing.', 'indicate', ['indicates to', 'indication', 'indicating of'], 'data (số nhiều) indicate.'],
          ['mc', '“Lương thực chính” trong văn học thuật là?', 'staple food', ['stable food', 'main eat', 'store food'], 'staple food.']
        ] }] },
    { id: 'ielts-2', ten: 'IELTS mini 2 – Học thuật', loai: 'ielts', lv: 'B2–C1', min: 30, mo: '16 câu: bài giảng, đọc học thuật',
      phan: [
        { ten: 'Listening Section 4', mo: 'Bài giảng ngắn về giấc ngủ.', items: [
          ['talk', ['Lecturer: Today I want to look at sleep and memory.', 'Research suggests that during deep sleep, the brain replays information learned during the day, which helps to move it into long-term memory.', 'In one study, students who slept after learning a list of words remembered about twenty percent more than those who stayed awake.', 'Interestingly, a short nap of around twenty minutes improved alertness, but did not have the same effect on memory as a full night\'s sleep.', 'So the practical advice for students is simple: avoid studying all night before an exam.'], [
            ['According to the lecture, what happens during deep sleep?', 'The brain replays new information.', ['The brain stops working.', 'Short-term memory gets stronger.', 'Students forget lists of words.'], 'the brain replays information.'],
            ['Students who slept after learning remembered…', 'about 20% more words', ['twice as many words', 'about 20 words', 'the same number of words'], 'remembered about twenty percent more.'],
            ['What was the effect of a 20-minute nap?', 'It made people more alert.', ['It improved long-term memory greatly.', 'It had no effect at all.', 'It replaced a full night\'s sleep.'], 'improved alertness, but not memory.'],
            ['What does the lecturer recommend?', 'not staying up all night before exams', ['taking many short naps', 'studying only in the morning', 'learning lists of words']," avoid studying all night."]]]
        ] },
        { ten: 'Reading – Academic', mo: 'Đọc đoạn học thuật, trả lời câu hỏi lựa chọn và True/False/Not Given.', items: [
          ['read', '<b>Cashless Societies</b><br>Over the past decade, digital payments have grown rapidly across Asia. In Vietnam, the use of QR codes and mobile banking apps has become common even in small street markets. Advocates claim that cashless payments are faster, safer and make it easier for governments to collect taxes. Nevertheless, a fully cashless society raises concerns. Elderly people and those in rural areas with weak internet connections may be excluded. Moreover, when payment systems fail, as happened during several bank outages, consumers who carry no cash can be left unable to buy basic goods. Some economists therefore recommend a "cash-lite" approach, in which digital payments are encouraged but cash remains legally accepted.', [
            ['What is the main purpose of the passage?', 'to discuss benefits and risks of going cashless', ['to explain how QR codes work', 'to argue that cash should be banned', 'to describe the history of banking in Vietnam'], 'Bài nêu cả lợi ích và lo ngại.'],
            tf('QR code payments are only used in large shopping centres in Vietnam.', 'False', 'common even in small street markets.'),
            tf('Digital payments may help governments collect taxes.', 'True', 'easier for governments to collect taxes.'),
            tf('Most elderly people in Vietnam refuse to use mobile banking.', 'Not Given', 'Bài chỉ nói "may be excluded", không có số liệu "most… refuse".'),
            ['The term "cash-lite" refers to…', 'a mix of digital payments and accepted cash', ['a society with no cash at all', 'a cheaper type of bank card', 'cash used only in rural areas'], 'digital encouraged but cash remains accepted.'],
            ['The word "outages" is closest in meaning to…', 'failures', ['openings', 'payments', 'branches'], 'outage = sự cố ngừng hoạt động.']]]
        ] },
        { ten: 'Grammar & Vocabulary C1', mo: 'Cấu trúc và từ trang trọng.', items: [
          ['mc', 'Not only ___ the deadline, but they also exceeded the budget.', 'did they miss', ['they missed', 'they did miss', 'missed they'], 'Đảo ngữ.'],
          ['mc', 'It is essential that every applicant ___ a valid passport.', 'have', ['has', 'had', 'having'], 'Giả định.'],
          ['mc', 'The findings ___ that diet plays a key role in health.', 'suggest', ['suggests to', 'are suggesting of', 'suggestion'], 'findings suggest that.'],
          ['mc', 'A careful ___ of the data was carried out.', 'analysis', ['analyse', 'analytic', 'analysed'], 'Danh từ hoá.'],
          ['mc', 'The policy had a ___ impact on small businesses.', 'considerable', ['considerate', 'considering', 'consider'], 'considerable = đáng kể.'],
          ['mc', 'Online learning is, ___, more flexible than classroom learning.', 'arguably', ['argue', 'arguing', 'argument'], 'arguably = có thể nói là (rào đón).']
        ] }] }
  ];

  const viet = [
    { id: 'a2-email', ten: 'Email mời bạn (A2)', lv: 'A2', min: 15, tu: 40, de: 'You are having a birthday party next Saturday. Write an email to your English friend, Alex. In your email: <ul><li>invite Alex to the party</li><li>say where and when it is</li><li>tell Alex what to bring</li></ul>Write <b>40 words or more</b>.',
      goi: ['Hi Alex,', 'I\'m having a birthday party … Would you like to come?', 'It\'s at … on … at … p.m.', 'Could you bring …?', 'See you soon, + tên'], keys: ['party', 'saturday', 'bring', 'come'],
      mau: 'Hi Alex,<br>I\'m having a birthday party next Saturday and I\'d love you to come! It\'s at my house on Le Loi Street, from 6 p.m. to 10 p.m. We\'ll have food, music and games. Could you bring some soft drinks? Let me know if you can come.<br>See you soon,<br>Nam' },
    { id: 'b1-complaint', ten: 'Email phàn nàn (B1)', lv: 'B1', min: 25, tu: 120, de: 'You bought a laptop online two weeks ago, but it still has not arrived. Write an email to the company. In your email: <ul><li>give details of your order</li><li>explain the problem and how it affects you</li><li>say what you want the company to do</li></ul>Write <b>at least 120 words</b>.',
      goi: ['Dear Sir or Madam,', 'Đoạn 1: I am writing to complain about… (mã đơn hàng, ngày mua, sản phẩm)', 'Đoạn 2: vấn đề + ảnh hưởng (I need it for work…)', 'Đoạn 3: yêu cầu: deliver within 3 days / full refund', 'I look forward to hearing from you. Yours faithfully,'], keys: ['order', 'delivery', 'refund', 'complain'],
      mau: 'Dear Sir or Madam,<br>I am writing to complain about my order (No. 58214) for a Dell Inspiron laptop, which I placed on your website on 3rd November. According to your website, delivery should take three to five working days, but the laptop has still not arrived.<br>This delay has caused me serious problems because I need the laptop for an important project at work. I have already contacted your customer service twice, but nobody has given me a clear answer.<br>I would therefore like you to deliver the laptop within three days. If this is not possible, I expect a full refund to my bank account.<br>I look forward to hearing from you.<br>Yours faithfully,<br>Tran Minh' },
    { id: 'toeic-reply', ten: 'Trả lời khách hàng (B1–B2, dạng TOEIC Writing)', lv: 'B1–B2', min: 20, tu: 100, de: '<i>Email from a customer:</i> "I ordered 10 printers from your company. One of them does not print in colour. What should I do?"<br><br>Reply to the customer. In your email: <b>apologise</b>, <b>ask for one piece of information</b> and <b>offer two solutions</b>. Write <b>at least 100 words</b>.',
      goi: ['Thank you for contacting us / We are sorry to hear that…', 'Could you please send us the serial number / a photo…?', 'Solution 1: our technician can visit…', 'Solution 2: we can replace the printer free of charge…', 'Please do not hesitate to contact me…'], keys: ['sorry', 'serial', 'replace', 'technician'],
      mau: 'Dear Mr. Hoang,<br>Thank you for contacting PLT Tech, and we are very sorry to hear that one of your printers is not printing in colour.<br>To help us check the problem, could you please send us the serial number of the printer, which you can find on the back of the machine?<br>We can offer two solutions. First, our technician can visit your office within 24 hours to repair the printer free of charge. Alternatively, we can replace it with a new one, which would be delivered by Friday.<br>Please let us know which option you prefer. Do not hesitate to contact me if you have any further questions.<br>Best regards,<br>Lan – Customer Service' },
    { id: 'ielts-task1', ten: 'IELTS Writing Task 1 – Mô tả bảng số liệu', lv: 'B2', min: 20, tu: 150, de: `The table below shows the percentage of adults using mobile banking in four countries in 2016 and 2026. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write <b>at least 150 words</b>.${tbl(['Country', '2016', '2026'], [['Vietnam', '15%', '78%'], ['Thailand', '25%', '82%'], ['Japan', '30%', '55%'], ['Germany', '35%', '60%']])}<p class="small muted">(Số liệu giả định để luyện tập.)</p>`,
      goi: ['Mở bài: viết lại đề bằng từ khác (The table illustrates…)', 'Tổng quan (Overall, …): xu hướng chung + điểm nổi bật nhất – không đưa số', 'Thân bài 1: nhóm tăng mạnh (Vietnam, Thailand) + số liệu', 'Thân bài 2: nhóm tăng vừa (Japan, Germany) + so sánh', 'Từ hữu ích: rose sharply, more than fivefold, by contrast, the highest proportion'], keys: ['overall', 'increase', 'whereas', 'percentage'],
      mau: 'The table illustrates the proportion of adults who used mobile banking in Vietnam, Thailand, Japan and Germany in 2016 and 2026.<br>Overall, mobile banking became more popular in all four countries, but the growth was far more dramatic in the two Southeast Asian nations, which overtook Japan and Germany by the end of the period.<br>In 2016, Vietnam had the lowest figure, at only 15%, while Thailand stood at 25%. Over the following decade, the percentage in Vietnam rose more than fivefold to 78%, and Thailand reached the highest proportion of all, at 82%.<br>By contrast, Japan and Germany began with higher rates of 30% and 35% respectively, yet their growth was much more moderate. By 2026, just over half of Japanese adults (55%) used mobile banking, compared with 60% in Germany.' },
    { id: 'ielts-task2', ten: 'IELTS Writing Task 2 – Nghị luận', lv: 'B2–C1', min: 40, tu: 250, de: 'Some people believe that artificial intelligence will replace many jobs in banking and finance. Others think it will mainly help employees work more efficiently. <b>Discuss both views and give your own opinion.</b> Write <b>at least 250 words</b>.',
      goi: ['Mở bài: giới thiệu chủ đề + nêu rõ quan điểm của mình', 'Thân bài 1: quan điểm AI thay thế (ví dụ: chatbot, xử lý hồ sơ tự động)', 'Thân bài 2: quan điểm AI hỗ trợ (phân tích rủi ro, nhân viên tập trung tư vấn)', 'Kết bài: tóm tắt + nhắc lại quan điểm', 'Dùng: It could be argued that…, Admittedly, …, Nevertheless, …, In my view, …'], keys: ['however', 'in my view', 'for example', 'efficient'],
      mau: 'The rapid development of artificial intelligence (AI) has led to a debate about its impact on jobs in banking. While some argue that AI will eliminate many positions, I believe its main role will be to support employees rather than replace them.<br>On the one hand, it is undeniable that certain routine tasks are already being automated. Chatbots now answer basic customer questions, and software can process loan applications far faster than humans. As a result, roles such as data entry clerks and call-centre staff may decline significantly, which is a genuine concern for workers with limited skills.<br>On the other hand, AI tools are often most effective when combined with human judgement. For example, an algorithm can detect unusual transactions, but a trained employee must still investigate whether fraud has actually occurred and communicate with the customer. Similarly, AI can analyse market data, allowing financial advisers to spend more time building relationships and offering personalised advice, which customers continue to value.<br>In my view, the second argument is more convincing. Although some jobs will disappear, new ones will be created in areas such as data analysis, cybersecurity and AI supervision. The key challenge for banks and governments is therefore to retrain employees so that they can work alongside these technologies.<br>In conclusion, AI will undoubtedly change the nature of banking work, but it is more likely to make employees more efficient than to make them redundant, provided that they are given the opportunity to develop new skills.' }
  ];

  const noi = [
    { id: 'p1-intro', ten: 'IELTS Speaking Part 1 – Giới thiệu bản thân', lv: 'A2–B1', sec: 60, cue: 'Let\'s talk about your work or studies. What do you do? Why did you choose this job? What do you like most about it?',
      goi: ['Trả lời 2–3 câu mỗi câu hỏi, thêm lý do và ví dụ', 'I work as … at … / I\'m currently studying …', 'The main reason is that …', 'What I like most is …'], keys: ['work as', 'because', 'what i like', 'for example'],
      mau: 'I work as an IT officer at a bank in Ho Chi Minh City. I chose this job because I have always been interested in technology, and I enjoy solving problems. What I like most is that every day is different. For example, one day I might fix a network problem, and the next day I could be setting up new software for my colleagues.' },
    { id: 'p2-tech', ten: 'IELTS Speaking Part 2 – Một thiết bị công nghệ hữu ích', lv: 'B1–B2', sec: 120, cue: 'Describe a piece of technology you find useful. You should say: <ul><li>what it is</li><li>when you got it</li><li>how you use it</li></ul>and explain why you find it useful.',
      goi: ['Nói đủ 4 ý gợi ý, theo thứ tự', 'Dùng quá khứ khi kể lúc mua; hiện tại khi nói cách dùng', 'Cụm hay: I can\'t imagine my life without…, It saves me a lot of time, The best thing about it is…'], keys: ['i got it', 'saves', 'useful', 'without'],
      mau: 'I\'d like to talk about my laptop, which I find extremely useful. I got it about two years ago, when I started university. I use it almost every day, both for my studies and for my part-time job. For example, I use it to write reports, join online classes and even edit short videos for social media. The main reason I find it so useful is that it saves me a lot of time. It\'s light enough to carry everywhere, and the battery lasts for about ten hours, so I can work on the bus or in a café. Honestly, I can\'t imagine my life without it.' },
    { id: 'p2-place', ten: 'IELTS Speaking Part 2 – Một nơi đáng nhớ', lv: 'B1–B2', sec: 120, cue: 'Describe a place you visited that you really enjoyed. You should say: <ul><li>where it was</li><li>when you went there</li><li>what you did there</li></ul>and explain why you enjoyed it.',
      goi: ['Kể theo trình tự: địa điểm → thời gian → hoạt động → cảm xúc', 'Dùng quá khứ đơn, tính từ miêu tả: breathtaking, peaceful, crowded', 'Kết: It was one of the best trips I\'ve ever had because…'], keys: ['visited', 'breathtaking', 'enjoyed', 'ever'],
      mau: 'I\'d like to describe Hoi An ancient town, which I visited last summer with my family. It\'s located in central Vietnam, not far from Da Nang. We stayed there for three days. During the day, we walked around the old streets, visited ancient houses and tried local dishes like cao lau. In the evening, the town was decorated with hundreds of colourful lanterns, which looked absolutely breathtaking. We also took a boat trip on the Hoai River and released paper lanterns. I enjoyed it so much because the atmosphere was peaceful and the people were friendly. It was one of the best trips I\'ve ever had.' },
    { id: 'p3-ai', ten: 'IELTS Speaking Part 3 – Thảo luận: AI và việc làm', lv: 'B2–C1', sec: 90, cue: 'Do you think artificial intelligence will change the way people work in the future? What are the advantages and disadvantages?',
      goi: ['Trả lời dài, có lập luận 2 chiều', 'Cụm: To some extent, …; On the other hand, …; It depends on…; In the long run, …', 'Đưa ví dụ cụ thể từ ngành ngân hàng / công nghệ'], keys: ['to some extent', 'on the other hand', 'in the long run', 'for instance'],
      mau: 'Yes, I believe AI will transform the way we work, although to some extent it is already happening. For instance, in banking, AI systems can check documents and detect fraud much faster than humans. The main advantage is clearly efficiency: employees can spend less time on repetitive tasks and more time on work that requires creativity or empathy. On the other hand, there are some serious drawbacks. People whose jobs are mainly routine may lose them, and there are also concerns about privacy and mistakes made by algorithms. In the long run, I think the impact will depend on how well companies retrain their staff.' },
    { id: 'job-interview', ten: 'Phỏng vấn xin việc – Giới thiệu bản thân', lv: 'B1–B2', sec: 90, cue: 'Tell me about yourself. Why are you interested in this position?',
      goi: ['Cấu trúc hiện tại – quá khứ – tương lai: đang làm gì, đã làm gì, muốn gì', 'Nêu 2–3 kỹ năng chính + ví dụ thành tích có số liệu', 'Kết bằng lý do phù hợp với vị trí'], keys: ['experience', 'skills', 'achieved', 'interested in'],
      mau: 'Certainly. I\'m an IT professional with over eight years of experience in the banking sector. In my current role, I\'m responsible for maintaining the branch network and supporting more than a hundred staff. One of my achievements was developing a small internal tool that reduced reporting time by around forty percent. I have also worked part-time in an electronics shop, which taught me a lot about customer service. I\'m interested in this position because it would allow me to combine my technical skills with my experience of working with clients.' }
  ];

  window.PLT_EN_EXAM = { gioi, de, viet, noi };
})();

/* PLT-Edu · Tiếng Anh – Cấp 1 (A1): Ngày 15–30 */
(function () {
  'use strict';
  const { w, T, tbl, tip, ex, F, reads, sp, K } = window.PLT_EN.H;
  const lv = (x) => `<p class="small muted">🎯 Từ giai đoạn này, hãy thử <b>tắt "Hiện nghĩa tiếng Việt"</b> trong phần Hội thoại để luyện nghĩ trực tiếp bằng tiếng Anh. ${x || ''}</p>`;

  /* ================= NGÀY 15 ================= */
  const d15 = {
    n: 15, ten: 'Mua sắm và giá cả', kinds: K,
    muc: 'Hỏi giá, nói giá tiền, so sánh đắt – rẻ, chọn mua và thanh toán.',
    hoc: `<h4>1. Hỏi giá: is hay are?</h4><ul>${ex('How much is this bag?', '', 'Cái túi này bao nhiêu tiền?')}${ex('How much are these shoes?', '', 'Đôi giày này bao nhiêu tiền?')}${ex('It\'s twenty dollars. / They\'re fifty dollars.', '', '20 đô. / 50 đô.')}</ul>
      <h4>2. Đọc giá tiền</h4><p>$12.50 → <b>twelve fifty</b> (hoặc twelve dollars and fifty cents) · 150,000 VND → <b>one hundred fifty thousand dong</b>. ${sp('twelve fifty|one hundred fifty thousand dong')}</p>
      <h4>3. Mua bán</h4>${reads([['It\'s too expensive.', '', 'Đắt quá.'], ['Do you have a cheaper one?', '', 'Có cái rẻ hơn không?'], ['Is there a discount?', '', 'Có giảm giá không?'], ['I\'ll take it.', '', 'Tôi lấy cái này.'], ['Can I pay by card?', '', 'Trả bằng thẻ được không?'], ['Can I have a receipt?', '', 'Cho tôi xin hóa đơn.']])}
      ${tip('💡 <b>too + tính từ</b> = quá (mang ý chê): too expensive. <b>very</b> = rất (trung tính): very nice.')}`,
    vocab: [
      w('how much', '/haʊ mʌtʃ/', 'bao nhiêu (tiền)', '', ['How much is it?', '/haʊ mʌtʃ ɪz ɪt/', 'Cái này bao nhiêu?']),
      w('price', '/praɪs/', 'giá', '', ['The price is good.', '/ðə praɪs ɪz ɡʊd/', 'Giá tốt đấy.']),
      w('cheap', '/tʃiːp/', 'rẻ', 'So sánh: cheaper.', ['It\'s very cheap.', '/ɪts ˈveri tʃiːp/', 'Rất rẻ.']),
      w('expensive', '/ɪkˈspensɪv/', 'đắt', '', ['It\'s too expensive.', '/ɪts tuː ɪkˈspensɪv/', 'Đắt quá.']),
      w('cash', '/kæʃ/', 'tiền mặt', '', ['I pay in cash.', '/aɪ peɪ ɪn kæʃ/', 'Tôi trả tiền mặt.']),
      w('card', '/kɑːrd/', 'thẻ', 'pay by card.', ['Can I pay by card?', '/kæn aɪ peɪ baɪ kɑːrd/', 'Trả bằng thẻ được không?']),
      w('pay', '/peɪ/', 'trả tiền', '', ['Where do I pay?', '/wer duː aɪ peɪ/', 'Tôi trả tiền ở đâu?']),
      w('buy', '/baɪ/', 'mua', '', ['I want to buy a phone.', '/aɪ wɑːnt tə baɪ ə foʊn/', 'Tôi muốn mua điện thoại.']),
      w('shop', '/ʃɑːp/', 'cửa hàng', '', ['This shop is open.', '/ðɪs ʃɑːp ɪz ˈoʊpən/', 'Cửa hàng này đang mở.']),
      w('discount', '/ˈdɪskaʊnt/', 'giảm giá', '', ['Is there a discount?', '/ɪz ðer ə ˈdɪskaʊnt/', 'Có giảm giá không?']),
      w('receipt', '/rɪˈsiːt/', 'hóa đơn, biên lai', 'Chữ p câm.', ['Can I have a receipt?', '/kæn aɪ hæv ə rɪˈsiːt/', 'Cho tôi xin hóa đơn.']),
      w('take', '/teɪk/', 'lấy (mua)', 'I\'ll take it = tôi mua.', ['I\'ll take this one.', '/aɪl teɪk ðɪs wʌn/', 'Tôi lấy cái này.'])
    ],
    qs: [
      ['mc', 'How much ___ these shoes?', 'are', ['is', 'am', 'do'], 'shoes số nhiều → are.'],
      ['mc', '“Đắt quá!” là?', 'It\'s too expensive!', ['It\'s very cheap!', 'It\'s expensive too.', 'Too it\'s expensive.'], 'too + tính từ.'],
      ['mc', '“Tôi lấy cái này” là?', 'I\'ll take it.', ['I\'ll buy it me.', 'I take you.', 'I\'ll have pay.'], 'I\'ll take it.'],
      ['mc', '“receipt” đọc là?', '/rɪˈsiːt/', ['/rɪˈsiːpt/', '/ˈresɪpt/', '/rɪˈsep/'], 'p câm.'],
      ['hear', 'Can I pay by card?', 'Trả bằng thẻ được không?', ['Có giảm giá không?', 'Cho xin hóa đơn.', 'Bao nhiêu tiền?'], 'pay by card = trả bằng thẻ.'],
      ['hear', 'It\'s forty-five dollars.', '45 đô', ['54 đô', '15 đô', '40 đô'], 'forty-five = 45.'],
      ['order', 'Sắp xếp: “Cái túi này bao nhiêu tiền?”', ['How much', 'is', 'this', 'bag?'], 'How much is this bag?']
    ],
    hoithoai: {
      ctx: 'Em đi chợ lưu niệm ở Bangkok, mua quà bằng tiếng Anh.', vai: 'Người bán hỏi, em hỏi giá và trả giá.', ai: '🧑 Seller',
      luot: [
        T(['Hello! Can I help you?', '', 'Xin chào! Tôi giúp gì được?'], ['How much is this bag?', '', 'Cái túi này bao nhiêu?', 'Hỏi giá số ít với is.'], ['How many is this bag?', '', 'Hỏi giá dùng how much.'], ['I\'m fine.', '', 'Lạc đề.']),
        T(['It\'s forty dollars.', '', '40 đô.'], ['Forty? It\'s too expensive. Is there a discount?', '', '40 à? Đắt quá. Có giảm giá không?', 'Mặc cả lịch sự.'], ['Fourteen? It\'s cheap!', '', 'Nghe nhầm forty (40) thành fourteen (14).'], ['It\'s very expensive good.', '', 'Sai ngữ pháp.']),
        T(['OK, thirty dollars for you.', '', 'Được, 30 đô cho bạn.'], ['Great, I\'ll take it!', '', 'Tuyệt, tôi lấy!', 'Chốt mua.'], ['I\'ll take you.', '', '"Tôi lấy bạn" 😄'], ['Too cheap!', '', 'Không cần nói vậy.']),
        T(['Cash or card?', '', 'Tiền mặt hay thẻ?'], ['By card, please. Can I have a receipt?', '', 'Thẻ ạ. Cho tôi xin hóa đơn.', 'Thanh toán và xin hóa đơn.'], ['Cash or card.', '', 'Lặp lại câu hỏi.'], ['I pay discount.', '', 'Sai nghĩa.'])
      ], ket: 'Em đã hỏi giá, mặc cả và thanh toán bằng tiếng Anh.'
    },
    tom: ['How much is/are …?', 'Đọc giá tiền', 'too + adj', 'Thanh toán'], nguphap: 'How much is/are …?; too + adj; I\'ll take it; pay by card / in cash', phatam: 'receipt (p câm), forty/fourteen',
    loi: ['How much is these …', 'Nghe nhầm 14/40', 'Đọc receipt có âm p'], btvn: ['Hỏi – đáp giá 5 món đồ trong nhà', 'Đọc 5 giá tiền bằng tiếng Anh', 'Tập hội thoại mua bán 1 phút']
  };

  /* ================= NGÀY 16 ================= */
  const d16 = {
    n: 16, ten: 'Hỏi đường và vị trí', kinds: K,
    muc: 'Hỏi đường, chỉ đường; dùng there is/are và giới từ chỉ vị trí.',
    hoc: `<h4>1. Hỏi đường</h4><ul>${ex('Excuse me, where is the bank?', '', 'Xin lỗi, ngân hàng ở đâu?')}${ex('How do I get to the station?', '', 'Đến nhà ga đi thế nào?')}${ex('Is there a supermarket near here?', '', 'Gần đây có siêu thị không?')}</ul>
      <h4>2. Chỉ đường</h4>${reads([['Go straight.', '', 'Đi thẳng.'], ['Turn left.', '', 'Rẽ trái.'], ['Turn right.', '', 'Rẽ phải.'], ['It\'s on your left.', '', 'Nó ở bên trái bạn.'], ['It\'s next to the bank.', '', 'Nó ở cạnh ngân hàng.'], ['It\'s opposite the hospital.', '', 'Nó đối diện bệnh viện.'], ['It\'s between the bank and the shop.', '', 'Nó ở giữa ngân hàng và cửa hàng.']])}
      <h4>3. There is / There are (có …)</h4>${F(['There is + số ít', '→', 'There are + số nhiều'])}<ul>${ex('There is a bank near here.', '', 'Gần đây có một ngân hàng.')}${ex('There are two hotels on this street.', '', 'Phố này có hai khách sạn.')}</ul>`,
    vocab: [
      w('left', '/left/', 'bên trái', '', ['Turn left.', '/tɜːrn left/', 'Rẽ trái.']),
      w('right', '/raɪt/', 'bên phải; đúng', '', ['Turn right at the bank.', '/tɜːrn raɪt æt ðə bæŋk/', 'Rẽ phải ở ngân hàng.']),
      w('straight', '/streɪt/', 'thẳng', 'gh câm.', ['Go straight ahead.', '/ɡoʊ streɪt əˈhed/', 'Đi thẳng về phía trước.']),
      w('next to', '/nekst tuː/', 'bên cạnh', '', ['It\'s next to the hotel.', '/ɪts nekst tuː ðə hoʊˈtel/', 'Nó ở cạnh khách sạn.']),
      w('opposite', '/ˈɑːpəzɪt/', 'đối diện', '', ['The bank is opposite the park.', '/ðə bæŋk ɪz ˈɑːpəzɪt ðə pɑːrk/', 'Ngân hàng đối diện công viên.']),
      w('between', '/bɪˈtwiːn/', 'ở giữa', 'between A and B.', ['It\'s between the bank and the shop.', '/ɪts bɪˈtwiːn ðə bæŋk ænd ðə ʃɑːp/', 'Nó ở giữa ngân hàng và cửa hàng.']),
      w('near', '/nɪr/', 'gần', '', ['Is it near here?', '/ɪz ɪt nɪr hɪr/', 'Có gần đây không?']),
      w('far', '/fɑːr/', 'xa', '', ['It\'s not far.', '/ɪts nɑːt fɑːr/', 'Không xa đâu.']),
      w('bank', '/bæŋk/', 'ngân hàng', '', ['Where is the bank?', '/wer ɪz ðə bæŋk/', 'Ngân hàng ở đâu?']),
      w('supermarket', '/ˈsuːpərmɑːrkɪt/', 'siêu thị', '', ['Is there a supermarket near here?', '/ɪz ðer ə ˈsuːpərmɑːrkɪt nɪr hɪr/', 'Gần đây có siêu thị không?']),
      w('hospital', '/ˈhɑːspɪtəl/', 'bệnh viện', '', ['The hospital is on the right.', '/ðə ˈhɑːspɪtəl ɪz ɑːn ðə raɪt/', 'Bệnh viện ở bên phải.']),
      w('street', '/striːt/', 'con phố, đường', '', ['Go down this street.', '/ɡoʊ daʊn ðɪs striːt/', 'Đi dọc con phố này.'])
    ],
    qs: [
      ['mc', 'There ___ two banks on this street.', 'are', ['is', 'am', 'be'], 'Số nhiều → there are.'],
      ['mc', 'There ___ a hotel near here.', 'is', ['are', 'am', 'have'], 'Số ít → there is.'],
      ['mc', '“Đối diện bệnh viện” là?', 'opposite the hospital', ['next to the hospital', 'between the hospital', 'near hospital the'], 'opposite = đối diện.'],
      ['mc', '“Rẽ phải” là?', 'Turn right.', ['Turn left.', 'Go straight.', 'Go right turn.'], 'Turn right.'],
      ['hear', 'Go straight and turn left.', 'Đi thẳng rồi rẽ trái.', ['Đi thẳng rồi rẽ phải.', 'Rẽ trái rồi đi thẳng.', 'Quay lại rồi rẽ trái.'], 'straight → left.'],
      ['hear', 'It\'s next to the bank.', 'Nó ở cạnh ngân hàng.', ['Nó đối diện ngân hàng.', 'Nó ở xa ngân hàng.', 'Nó trong ngân hàng.'], 'next to = bên cạnh.'],
      ['order', 'Sắp xếp: “Gần đây có siêu thị không?”', ['Is there', 'a supermarket', 'near', 'here?'], 'Is there a supermarket near here?']
    ],
    hoithoai: {
      ctx: 'Em ở Singapore, cần tìm ngân hàng để đổi tiền.', vai: 'Em hỏi một người đi đường.', ai: '🧑 Passer-by',
      luot: [
        T(['Hi, can I help you?', '', 'Chào, tôi giúp gì được không?'], ['Excuse me, is there a bank near here?', '', 'Xin lỗi, gần đây có ngân hàng không?', 'Excuse me mở đầu lịch sự.'], ['Where is bank there?', '', 'Sai ngữ pháp.'], ['Turn left.', '', 'Em là người hỏi đường.']),
        T(['Yes, there is. Go straight and turn right.', '', 'Có. Đi thẳng rồi rẽ phải.'], ['Turn right? OK. Is it far?', '', 'Rẽ phải à? Được. Có xa không?', 'Xác nhận và hỏi khoảng cách.'], ['Turn left? OK.', '', 'Người ta nói rẽ phải.'], ['There is far.', '', 'Sai ngữ pháp.']),
        T(['No, it\'s near. It\'s next to the supermarket.', '', 'Không, gần thôi. Ở cạnh siêu thị.'], ['Next to the supermarket. Got it!', '', 'Cạnh siêu thị. Hiểu rồi!', 'Got it = hiểu rồi.'], ['Opposite the hospital?', '', 'Nghe nhầm.'], ['Between supermarket.', '', 'between cần A and B.']),
        T(['You\'re welcome. Have a nice day!', '', 'Không có gì. Chúc một ngày tốt lành!'], ['Thank you! You too!', '', 'Cảm ơn! Bạn cũng vậy!', 'You too = bạn cũng vậy.'], ['Sorry!', '', 'Không cần xin lỗi.'], ['Turn right!', '', 'Lạc đề.'])
      ], ket: 'Em đã hỏi đường và hiểu chỉ dẫn.'
    },
    tom: ['Hỏi đường', 'Chỉ đường', 'Giới từ vị trí', 'There is/are'], nguphap: 'Where is …?; Is there …?; There is/are; next to/opposite/between', phatam: 'straight (gh câm), opposite',
    loi: ['There is two …', 'Nhầm left/right', 'between thiếu and'], btvn: ['Chỉ đường từ nhà em đến chợ bằng tiếng Anh', 'Mô tả 5 địa điểm quanh nhà với there is/are', 'Vẽ bản đồ nhỏ và ghi giới từ vị trí']
  };

  /* ================= NGÀY 17 ================= */
  const d17 = {
    n: 17, ten: 'Giao thông và đi lại', kinds: K,
    muc: 'Nói phương tiện đi lại, hỏi thời gian di chuyển, mua vé, đi taxi.',
    hoc: `<h4>1. Phương tiện: by + phương tiện</h4><ul>${ex('I go to work by bus.', '', 'Tôi đi làm bằng xe buýt.')}${ex('She goes to school on foot.', '', 'Cô ấy đi bộ đến trường.')}</ul><p class="small">by bus / by car / by train / by taxi / by plane — riêng đi bộ là <b>on foot</b>.</p>
      <h4>2. Hỏi thời gian đi lại</h4><ul>${ex('How long does it take?', '', 'Mất bao lâu?')}${ex('It takes about twenty minutes.', '', 'Mất khoảng 20 phút.')}</ul>
      <h4>3. Đi taxi, mua vé</h4>${reads([['To the airport, please.', '', 'Cho tôi ra sân bay.'], ['Please stop here.', '', 'Làm ơn dừng ở đây.'], ['A ticket to Hanoi, please.', '', 'Một vé đi Hà Nội.'], ['One way or return?', '', 'Một chiều hay khứ hồi?'], ['What time does the train leave?', '', 'Tàu chạy lúc mấy giờ?']])}`,
    vocab: [
      w('taxi', '/ˈtæksi/', 'xe taxi', '', ['Let\'s take a taxi.', '/lets teɪk ə ˈtæksi/', 'Mình đi taxi nhé.']),
      w('train', '/treɪn/', 'tàu hỏa', '', ['The train is late.', '/ðə treɪn ɪz leɪt/', 'Tàu bị trễ.']),
      w('plane', '/pleɪn/', 'máy bay', '', ['We go by plane.', '/wiː ɡoʊ baɪ pleɪn/', 'Chúng tôi đi máy bay.']),
      w('airport', '/ˈerpɔːrt/', 'sân bay', '', ['To the airport, please.', '/tə ði ˈerpɔːrt pliːz/', 'Cho tôi ra sân bay.']),
      w('station', '/ˈsteɪʃən/', 'nhà ga', '', ['Where is the station?', '/wer ɪz ðə ˈsteɪʃən/', 'Nhà ga ở đâu?']),
      w('ticket', '/ˈtɪkɪt/', 'vé', '', ['Two tickets, please.', '/tuː ˈtɪkɪts pliːz/', 'Hai vé, làm ơn.']),
      w('minute', '/ˈmɪnɪt/', 'phút', '', ['Wait a minute.', '/weɪt ə ˈmɪnɪt/', 'Chờ một phút.']),
      w('hour', '/aʊər/', 'giờ (khoảng thời gian)', 'h câm → an hour.', ['It takes an hour.', '/ɪt teɪks ən aʊər/', 'Mất một tiếng.']),
      w('how long', '/haʊ lɔːŋ/', 'bao lâu', '', ['How long does it take?', '/haʊ lɔːŋ dʌz ɪt teɪk/', 'Mất bao lâu?']),
      w('stop', '/stɑːp/', 'dừng; điểm dừng', '', ['Please stop here.', '/pliːz stɑːp hɪr/', 'Làm ơn dừng ở đây.']),
      w('on foot', '/ɑːn fʊt/', 'đi bộ', '', ['I go to work on foot.', '/aɪ ɡoʊ tə wɜːrk ɑːn fʊt/', 'Tôi đi bộ đi làm.']),
      w('trip', '/trɪp/', 'chuyến đi', '', ['Have a nice trip!', '/hæv ə naɪs trɪp/', 'Chúc chuyến đi vui vẻ!'])
    ],
    qs: [
      ['mc', 'I go to work ___ bus.', 'by', ['on', 'in', 'with'], 'by + phương tiện.'],
      ['mc', '“Đi bộ” là?', 'on foot', ['by foot', 'by walk', 'in foot'], 'Ngoại lệ: on foot.'],
      ['mc', '“Mất bao lâu?” là?', 'How long does it take?', ['How much does it take?', 'How long is it take?', 'What long does it take?'], 'How long + does it take.'],
      ['mc', '___ hour', 'an', ['a', 'two a', 'no article'], 'h câm → an.'],
      ['hear', 'To the airport, please.', 'Cho tôi ra sân bay.', ['Cho tôi ra nhà ga.', 'Dừng ở đây.', 'Một vé, làm ơn.'], 'airport = sân bay.'],
      ['hear', 'It takes about twenty minutes.', 'Mất khoảng 20 phút.', ['Mất khoảng 2 tiếng.', 'Mất khoảng 12 phút.', 'Mất 20 đô.'], 'twenty minutes = 20 phút.'],
      ['order', 'Sắp xếp: “Tàu chạy lúc mấy giờ?”', ['What time', 'does', 'the train', 'leave?'], 'What time does the train leave?']
    ],
    hoithoai: {
      ctx: 'Em lên taxi ở Sydney để ra sân bay.', vai: 'Tài xế hỏi, em trả lời.', ai: '🚕 Driver',
      luot: [
        T(['Where to?', '', 'Đi đâu ạ?'], ['To the airport, please.', '', 'Cho tôi ra sân bay.', 'To + nơi + please.'], ['By the airport.', '', 'Nói điểm đến dùng to.'], ['I\'m airport.', '', 'Sai nghĩa.']),
        T(['Sure. Which terminal?', '', 'Được. Nhà ga số mấy?'], ['Terminal two, please. How long does it take?', '', 'Nhà ga 2. Mất bao lâu?', 'Trả lời và hỏi thời gian.'], ['Two terminal.', '', 'Phải là terminal two.'], ['How much long?', '', 'How long …'])
        , T(['About thirty minutes.', '', 'Khoảng 30 phút.'], ['OK, thank you.', '', 'Vâng, cảm ơn.', 'Xác nhận.'], ['Thirteen minutes? Great!', '', 'Nghe nhầm: thirty (30).'], ['It\'s too expensive.', '', 'Chưa nói giá mà.']),
        T(['Here we are. That\'s forty-five dollars.', '', 'Đến rồi. 45 đô.'], ['Here you are. Please keep the change.', '', 'Gửi anh. Không cần thối lại.', 'keep the change = khỏi thối.'], ['Please stop here.', '', 'Đã đến nơi rồi.'], ['Fifty-four dollars?', '', 'Nghe nhầm: forty-five (45).'])
      ], ket: 'Em đã đi taxi: nói điểm đến, hỏi thời gian và trả tiền.'
    },
    tom: ['by + phương tiện, on foot', 'How long does it take?', 'Taxi, vé tàu'], nguphap: 'by + N; It takes + thời gian; What time does … leave?', phatam: 'hour (h câm), airport',
    loi: ['by foot', 'How much long', 'Nghe nhầm 30/13, 45/54'], btvn: ['Nói em đi làm bằng gì, mất bao lâu', 'Tập 5 câu dùng trên taxi', 'Đặt 3 câu với It takes …']
  };

  /* ================= NGÀY 18 ================= */
  const d18 = {
    n: 18, ten: 'Công việc và nghề nghiệp', kinds: K,
    muc: 'Hỏi và nói về nghề nghiệp, nơi làm, giờ làm, đồng nghiệp.',
    hoc: `<h4>1. Hỏi nghề</h4><ul>${ex('What do you do?', '', 'Bạn làm nghề gì?')}${ex('I\'m an engineer.', '', 'Tôi là kỹ sư.')}${ex('I work in a bank.', '', 'Tôi làm việc ở ngân hàng.')}${ex('I work for ABC Company.', '', 'Tôi làm cho công ty ABC.')}</ul>
      ${tip('⚠️ Nói nghề phải có <b>a/an</b>: ✘ I am engineer → ✔ I am <b>an</b> engineer. “What do you do?” hỏi nghề, không phải “bạn đang làm gì”.')}
      <h4>2. work in / at / for / as</h4>${tbl(['', 'Dùng', 'Ví dụ'], ['<tr><td>in</td><td>lĩnh vực, nơi chung</td><td>work in a bank / in IT</td></tr>', '<tr><td>at</td><td>nơi cụ thể</td><td>work at Vietcombank</td></tr>', '<tr><td>for</td><td>làm cho công ty</td><td>work for a big company</td></tr>', '<tr><td>as</td><td>với vai trò</td><td>work as a manager</td></tr>'])}`,
    vocab: [
      w('engineer', '/ˌendʒɪˈnɪr/', 'kỹ sư', 'an engineer; nhấn âm cuối.', ['I\'m an IT engineer.', '/aɪm ən ˌaɪˈtiː ˌendʒɪˈnɪr/', 'Tôi là kỹ sư IT.']),
      w('doctor', '/ˈdɑːktər/', 'bác sĩ', '', ['My sister is a doctor.', '/maɪ ˈsɪstər ɪz ə ˈdɑːktər/', 'Chị tôi là bác sĩ.']),
      w('nurse', '/nɜːrs/', 'y tá', '', ['She works as a nurse.', '/ʃiː wɜːrks æz ə nɜːrs/', 'Cô ấy làm y tá.']),
      w('accountant', '/əˈkaʊntənt/', 'kế toán', 'an accountant.', ['He is an accountant.', '/hiː ɪz ən əˈkaʊntənt/', 'Anh ấy là kế toán.']),
      w('manager', '/ˈmænɪdʒər/', 'quản lý', '', ['This is my manager.', '/ðɪs ɪz maɪ ˈmænɪdʒər/', 'Đây là quản lý của tôi.']),
      w('office', '/ˈɔːfɪs/', 'văn phòng', '', ['I work in an office.', '/aɪ wɜːrk ɪn ən ˈɔːfɪs/', 'Tôi làm ở văn phòng.']),
      w('company', '/ˈkʌmpəni/', 'công ty', '', ['I work for a big company.', '/aɪ wɜːrk fɔːr ə bɪɡ ˈkʌmpəni/', 'Tôi làm cho một công ty lớn.']),
      w('colleague', '/ˈkɑːliːɡ/', 'đồng nghiệp', '', ['She is my colleague.', '/ʃiː ɪz maɪ ˈkɑːliːɡ/', 'Cô ấy là đồng nghiệp của tôi.']),
      w('customer', '/ˈkʌstəmər/', 'khách hàng', '', ['I help customers every day.', '/aɪ help ˈkʌstəmərz ˈevri deɪ/', 'Tôi hỗ trợ khách hàng mỗi ngày.']),
      w('meeting', '/ˈmiːtɪŋ/', 'cuộc họp', '', ['I have a meeting at nine.', '/aɪ hæv ə ˈmiːtɪŋ æt naɪn/', 'Tôi có cuộc họp lúc 9 giờ.']),
      w('salary', '/ˈsæləri/', 'tiền lương', '', ['The salary is good.', '/ðə ˈsæləri ɪz ɡʊd/', 'Lương tốt.']),
      w('what do you do', '/wʌt duː juː duː/', 'bạn làm nghề gì', 'Hỏi nghề nghiệp.', ['What do you do? – I\'m a teacher.', '', 'Bạn làm nghề gì? – Tôi là giáo viên.'])
    ],
    qs: [
      ['mc', 'Câu đúng là?', 'I\'m an engineer.', ['I\'m engineer.', 'I\'m a engineer.', 'I engineer.'], 'Nghề cần a/an; engineer → an.'],
      ['mc', '“What do you do?” hỏi gì?', 'Bạn làm nghề gì?', ['Bạn đang làm gì?', 'Bạn làm thế nào?', 'Bạn muốn gì?'], 'Hỏi nghề nghiệp.'],
      ['mc', 'I work ___ a big company. (làm cho)', 'for', ['as', 'in', 'on'], 'work for + công ty.'],
      ['mc', 'She works ___ a nurse. (với vai trò)', 'as', ['for', 'in', 'like'], 'work as + nghề.'],
      ['mc', '“Đồng nghiệp” là?', 'colleague', ['customer', 'manager', 'company'], 'colleague /ˈkɑːliːɡ/.'],
      ['hear', 'I have a meeting at nine.', 'Tôi có cuộc họp lúc 9 giờ.', ['Tôi gặp khách lúc 9 giờ.', 'Tôi đi làm lúc 9 giờ.', 'Tôi họp 9 tiếng.'], 'meeting = cuộc họp.'],
      ['order', 'Sắp xếp: “Tôi làm việc ở ngân hàng.”', ['I', 'work', 'in', 'a bank.'], 'I work in a bank.']
    ],
    hoithoai: {
      ctx: 'Em dự hội thảo công nghệ, làm quen với anh Peter.', vai: 'Peter hỏi về công việc của em.', ai: '👨‍💼 Peter',
      luot: [
        T(['So, what do you do?', '', 'Vậy bạn làm nghề gì?'], ['I\'m an IT engineer. I work in a bank.', '', 'Tôi là kỹ sư IT. Tôi làm ở ngân hàng.', 'an IT engineer; work in a bank.'], ['I\'m doing coffee.', '', 'What do you do hỏi nghề nghiệp.'], ['I\'m IT engineer.', '', 'Thiếu an.']),
        T(['Interesting! Is your job busy?', '', 'Thú vị! Công việc có bận không?'], ['Yes, very busy. I help many customers.', '', 'Có, rất bận. Tôi hỗ trợ nhiều khách hàng.', 'Trả lời kèm lý do.'], ['Yes, I busy.', '', 'Thiếu am.'], ['No, I am salary.', '', 'Sai nghĩa.']),
        T(['What time do you start work?', '', 'Bạn bắt đầu làm lúc mấy giờ?'], ['I start at half past seven.', '', 'Tôi bắt đầu lúc 7 rưỡi.', 'at + giờ.'], ['I start on seven.', '', 'Giờ dùng at.'], ['I work for seven.', '', 'Sai nghĩa.']),
        T(['I\'m a manager at a software company.', '', 'Tôi là quản lý ở một công ty phần mềm.'], ['Nice! Here is my business card.', '', 'Hay quá! Đây là danh thiếp của tôi.', 'business card = danh thiếp.'], ['I\'m manager too.', '', 'Thiếu a, và hơi lạc ý.'], ['Software is a company.', '', 'Câu không tự nhiên.'])
      ], ket: 'Em đã giới thiệu nghề nghiệp và trao danh thiếp.'
    },
    tom: ['What do you do?', 'Nghề + a/an', 'work in/at/for/as'], nguphap: 'I\'m a/an + nghề; work in/at/for/as', phatam: 'engineer (nhấn cuối), colleague',
    loi: ['Thiếu a/an trước nghề', 'Hiểu What do you do là "đang làm gì"', 'Nhầm in/for/as'], btvn: ['Viết đoạn 5 câu giới thiệu công việc', 'Nói nghề của 3 người thân', 'Đặt câu với work in/at/for/as']
  };

  /* ================= NGÀY 19 ================= */
  const d19 = {
    n: 19, ten: 'Sở thích và khả năng (like, can)', kinds: K,
    muc: 'Nói sở thích với like/love/enjoy + V-ing, khả năng với can/can\'t.',
    hoc: `<h4>1. like / love / enjoy + V-ing</h4><ul>${ex('I like reading books.', '', 'Tôi thích đọc sách.')}${ex('She loves cooking.', '', 'Cô ấy rất thích nấu ăn.')}${ex('Do you enjoy travelling?', '', 'Bạn có thích đi du lịch không?')}</ul><p class="small">Mức độ: love > like > don't mind (không ngại) > don't like > hate (ghét).</p>
      <h4>2. can / can't + động từ nguyên mẫu</h4>${F(['I / you / he / she … + can + V', '→', 'can\'t + V', '→', 'Can + S + V?'])}<ul>${ex('I can swim.', '', 'Tôi biết bơi.')}${ex('He can\'t cook.', '', 'Anh ấy không biết nấu ăn.')}${ex('Can you play football?', '', 'Bạn có biết đá bóng không?')}</ul>${tip('⚠️ Sau can <b>không thêm -s, không thêm to</b>: ✘ He can swims / ✘ I can to swim.')}`,
    vocab: [
      w('like', '/laɪk/', 'thích', 'like + V-ing.', ['I like listening to music.', '/aɪ laɪk ˈlɪsənɪŋ tə ˈmjuːzɪk/', 'Tôi thích nghe nhạc.']),
      w('love', '/lʌv/', 'yêu, rất thích', '', ['She loves dancing.', '/ʃiː lʌvz ˈdænsɪŋ/', 'Cô ấy rất thích nhảy.']),
      w('enjoy', '/ɪnˈdʒɔɪ/', 'thích thú', '', ['I enjoy travelling.', '/aɪ ɪnˈdʒɔɪ ˈtrævəlɪŋ/', 'Tôi thích đi du lịch.']),
      w('music', '/ˈmjuːzɪk/', 'âm nhạc', '', ['What music do you like?', '/wʌt ˈmjuːzɪk duː juː laɪk/', 'Bạn thích nhạc gì?']),
      w('movie', '/ˈmuːvi/', 'bộ phim', '', ['Let\'s watch a movie.', '/lets wɑːtʃ ə ˈmuːvi/', 'Xem phim đi.']),
      w('read', '/riːd/', 'đọc', '', ['I read every night.', '/aɪ riːd ˈevri naɪt/', 'Tôi đọc sách mỗi tối.']),
      w('swim', '/swɪm/', 'bơi', '', ['Can you swim?', '/kæn juː swɪm/', 'Bạn biết bơi không?']),
      w('cook', '/kʊk/', 'nấu ăn', '', ['My mother cooks very well.', '/maɪ ˈmʌðər kʊks ˈveri wel/', 'Mẹ tôi nấu ăn rất ngon.']),
      w('play football', '/pleɪ ˈfʊtbɔːl/', 'đá bóng', '', ['We play football on Sunday.', '/wiː pleɪ ˈfʊtbɔːl ɑːn ˈsʌndeɪ/', 'Chủ nhật chúng tôi đá bóng.']),
      w('travel', '/ˈtrævəl/', 'du lịch', '', ['I want to travel to Japan.', '/aɪ wɑːnt tə ˈtrævəl tə dʒəˈpæn/', 'Tôi muốn du lịch Nhật Bản.']),
      w('can', '/kæn/', 'có thể, biết', 'can + V nguyên mẫu.', ['I can speak English.', '/aɪ kæn spiːk ˈɪŋɡlɪʃ/', 'Tôi nói được tiếng Anh.']),
      w('can\'t', '/kænt/', 'không thể, không biết', '', ['I can\'t drive.', '/aɪ kænt draɪv/', 'Tôi không biết lái xe.'])
    ],
    qs: [
      ['mc', 'I like ___ books.', 'reading', ['read', 'to reads', 'reads'], 'like + V-ing.'],
      ['mc', 'He can ___.', 'swim', ['swims', 'to swim', 'swimming'], 'can + V nguyên mẫu.'],
      ['mc', '“Bạn có biết nấu ăn không?” là?', 'Can you cook?', ['Do you can cook?', 'Are you cook?', 'Can you cooking?'], 'Can + S + V?'],
      ['mc', 'Mức thích cao nhất là?', 'love', ['like', 'don\'t mind', 'hate'], 'love > like.'],
      ['hear', 'I can\'t drive.', 'Tôi không biết lái xe.', ['Tôi biết lái xe.', 'Tôi thích lái xe.', 'Tôi đang lái xe.'], 'can\'t = không thể.'],
      ['hear', 'She loves cooking.', 'Cô ấy rất thích nấu ăn.', ['Cô ấy biết nấu ăn.', 'Cô ấy ghét nấu ăn.', 'Cô ấy đang nấu ăn.'], 'loves cooking.'],
      ['order', 'Sắp xếp: “Tôi thích đi du lịch.”', ['I', 'enjoy', 'travelling.'], 'I enjoy travelling.']
    ],
    hoithoai: {
      ctx: 'Em đang làm quen với bạn mới tên Jenny trong câu lạc bộ tiếng Anh.', vai: 'Jenny hỏi về sở thích.', ai: '👩 Jenny',
      luot: [
        T(['What do you like doing in your free time?', '', 'Lúc rảnh bạn thích làm gì?'], ['I like reading and watching movies.', '', 'Tôi thích đọc sách và xem phim.', 'like + V-ing.'], ['I like read and watch movie.', '', 'like + V-ing; movies số nhiều.'], ['I can free time.', '', 'Sai nghĩa.']),
        T(['Can you swim?', '', 'Bạn biết bơi không?'], ['Yes, I can. I swim every weekend.', '', 'Có. Tôi bơi mỗi cuối tuần.', 'Yes, I can.'], ['Yes, I do.', '', 'Câu hỏi Can → trả lời Yes, I can.'], ['Yes, I can swims.', '', 'can + V nguyên mẫu.']),
        T(['Cool! I can\'t swim, but I love cooking.', '', 'Hay quá! Tôi không biết bơi nhưng rất thích nấu ăn.'], ['Really? Can you cook Vietnamese food?', '', 'Thật à? Bạn nấu được món Việt không?', 'Hỏi tiếp – giữ câu chuyện.'], ['Really? You can cook?', '', 'Ngữ điệu câu hỏi không đầy đủ, nên dùng Can you …?'], ['I hate you.', '', '😅 Không phù hợp!']),
        T(['A little! Let\'s cook together sometime.', '', 'Một chút! Hôm nào mình nấu cùng nhau nhé.'], ['Sounds great! I\'d love to.', '', 'Nghe hay đấy! Tôi rất muốn.', 'I\'d love to = tôi rất muốn.'], ['I love cook.', '', 'Sai ngữ pháp.'], ['I can\'t.', '', 'Lời mời mà từ chối cộc lốc.'])
      ], ket: 'Em đã nói về sở thích và khả năng.'
    },
    tom: ['like/love/enjoy + V-ing', 'can/can\'t'], nguphap: 'like + V-ing; can + V; Can you …? – Yes, I can / No, I can\'t', phatam: 'can /kæn/ vs can\'t /kænt/',
    loi: ['like read', 'can swims / can to swim', 'Trả lời Can you … bằng Yes, I do'], btvn: ['Viết 5 câu về sở thích', 'Viết 3 việc em biết làm và 3 việc chưa biết', 'Hỏi 2 người: What do you like doing?']
  };

  /* ================= NGÀY 20 ================= */
  const d20 = {
    n: 20, ten: 'Hiện tại tiếp diễn và quá khứ đơn', kinds: K,
    muc: 'Nói việc đang làm (am/is/are + V-ing) và việc đã làm (was/were, V-ed, động từ bất quy tắc).',
    hoc: `<h4>1. Hiện tại tiếp diễn: đang làm</h4>${F(['S', '+', 'am / is / are', '+', 'V-ing'])}<ul>${ex('I\'m working now.', '', 'Tôi đang làm việc.')}${ex('What are you doing?', '', 'Bạn đang làm gì?')}</ul>
      <h4>2. Quá khứ đơn: đã làm</h4><ul><li>to be: <b>was</b> (I/he/she/it) · <b>were</b> (you/we/they). ${ex('I was tired yesterday.', '', 'Hôm qua tôi mệt.')}</li><li>Động từ có quy tắc: thêm <b>-ed</b>: work → worked, visit → visited.</li><li>Bất quy tắc (học thuộc): go → <b>went</b>, have → <b>had</b>, see → <b>saw</b>, buy → <b>bought</b>, eat → <b>ate</b>.</li></ul>
      <h4>3. Phủ định và câu hỏi quá khứ: did</h4><ul>${ex('I didn\'t go to work yesterday.', '', 'Hôm qua tôi không đi làm.')}${ex('Did you see the movie?', '', 'Bạn xem phim đó chưa?')}</ul>${tip('⚠️ Sau did / didn\'t, động từ <b>trở về nguyên mẫu</b>: ✘ I didn\'t went → ✔ I didn\'t go.')}
      <h4>4. Đuôi -ed có 3 cách đọc</h4><p>/t/: worked, stopped · /d/: played, called · /ɪd/: visited, needed (sau t, d). ${sp('worked|played|visited')}</p>`,
    vocab: [
      w('now', '/naʊ/', 'bây giờ', 'Dấu hiệu thì tiếp diễn.', ['I\'m busy now.', '/aɪm ˈbɪzi naʊ/', 'Giờ tôi đang bận.']),
      w('right now', '/raɪt naʊ/', 'ngay lúc này', '', ['She is cooking right now.', '/ʃiː ɪz ˈkʊkɪŋ raɪt naʊ/', 'Cô ấy đang nấu ăn.']),
      w('yesterday', '/ˈjestərdeɪ/', 'hôm qua', '', ['I was at home yesterday.', '/aɪ wʌz æt hoʊm ˈjestərdeɪ/', 'Hôm qua tôi ở nhà.']),
      w('last night', '/læst naɪt/', 'tối qua', '', ['Did you sleep well last night?', '/dɪd juː sliːp wel læst naɪt/', 'Tối qua bạn ngủ ngon không?']),
      w('ago', '/əˈɡoʊ/', 'cách đây', 'Thời gian + ago.', ['two days ago', '/tuː deɪz əˈɡoʊ/', 'hai ngày trước']),
      w('went', '/went/', 'đã đi (quá khứ của go)', '', ['We went to Da Nang.', '/wiː went tə dɑː nɑːŋ/', 'Chúng tôi đã đi Đà Nẵng.']),
      w('had', '/hæd/', 'đã có, đã ăn (quá khứ của have)', '', ['I had pho for breakfast.', '/aɪ hæd fʌ fɔːr ˈbrekfəst/', 'Sáng nay tôi ăn phở.']),
      w('saw', '/sɔː/', 'đã thấy, đã xem (quá khứ của see)', '', ['I saw a good movie.', '/aɪ sɔː ə ɡʊd ˈmuːvi/', 'Tôi đã xem một phim hay.']),
      w('bought', '/bɔːt/', 'đã mua (quá khứ của buy)', '', ['She bought a new phone.', '/ʃiː bɔːt ə nuː foʊn/', 'Cô ấy đã mua điện thoại mới.']),
      w('was', '/wʌz/', 'đã là, đã ở (I/he/she/it)', '', ['It was very hot.', '/ɪt wʌz ˈveri hɑːt/', 'Trời rất nóng.']),
      w('were', '/wɜːr/', 'đã là, đã ở (you/we/they)', '', ['They were happy.', '/ðeɪ wɜːr ˈhæpi/', 'Họ đã rất vui.']),
      w('visited', '/ˈvɪzɪtɪd/', 'đã thăm', 'Đuôi -ed đọc /ɪd/.', ['I visited my parents.', '/aɪ ˈvɪzɪtɪd maɪ ˈperənts/', 'Tôi đã về thăm bố mẹ.'])
    ],
    qs: [
      ['mc', 'Look! It ___ raining.', 'is', ['are', 'was', 'do'], 'Đang diễn ra → is + V-ing.'],
      ['mc', 'Yesterday I ___ to the market.', 'went', ['go', 'goed', 'going'], 'go → went.'],
      ['mc', 'Câu đúng là?', 'I didn\'t go to work yesterday.', ['I didn\'t went to work yesterday.', 'I not went to work yesterday.', 'I don\'t went to work.'], 'didn\'t + V nguyên mẫu.'],
      ['mc', 'They ___ at home last night.', 'were', ['was', 'are', 'is'], 'they + were.'],
      ['mc', '“visited” đọc đuôi -ed là?', '/ɪd/', ['/t/', '/d/', 'không đọc'], 'Sau t → /ɪd/.'],
      ['mc', 'Quá khứ của buy là?', 'bought', ['buyed', 'buied', 'brought'], 'buy → bought.'],
      ['hear', 'What are you doing?', 'Bạn đang làm gì?', ['Bạn đã làm gì?', 'Bạn làm nghề gì?', 'Bạn muốn làm gì?'], 'are … doing = đang làm.'],
      ['order', 'Sắp xếp: “Bạn có xem phim đó không?”', ['Did', 'you', 'see', 'the movie?'], 'Did you see the movie?']
    ],
    hoithoai: {
      ctx: 'Thứ Hai đầu tuần, đồng nghiệp John nhắn tin video call hỏi chuyện.', vai: 'John hỏi, em trả lời với thì tiếp diễn và quá khứ.', ai: '👨‍💼 John',
      luot: [
        T(['Hi! What are you doing?', '', 'Chào! Bạn đang làm gì đấy?'], ['I\'m writing a report.', '', 'Tôi đang viết báo cáo.', 'am + V-ing.'], ['I write a report yesterday.', '', 'Đang làm → I\'m writing.'], ['I doing report.', '', 'Thiếu am.']),
        T(['What did you do last weekend?', '', 'Cuối tuần trước bạn làm gì?'], ['I visited my parents in Hue.', '', 'Tôi về thăm bố mẹ ở Huế.', 'visit → visited.'], ['I visit my parents.', '', 'Phải dùng quá khứ.'], ['I did visited.', '', 'did + V nguyên mẫu, và không dùng did ở câu khẳng định.']),
        T(['Nice! Was the weather good?', '', 'Hay đấy! Thời tiết có đẹp không?'], ['Yes, it was sunny and warm.', '', 'Có, trời nắng và ấm.', 'it + was.'], ['Yes, it were sunny.', '', 'it + was.'], ['Yes, it is sunny yesterday.', '', 'yesterday → was.']),
        T(['Did you go to the beach?', '', 'Bạn có đi biển không?'], ['No, I didn\'t. We went to a restaurant.', '', 'Không. Chúng tôi đi nhà hàng.', 'didn\'t; went.'], ['No, I didn\'t went.', '', 'didn\'t + go (nguyên mẫu).'], ['No, I don\'t.', '', 'Câu hỏi quá khứ → didn\'t.'])
      ], ket: 'Em đã kể việc đang làm và việc đã làm.'
    },
    tom: ['Hiện tại tiếp diễn', 'Quá khứ đơn: was/were, -ed, bất quy tắc', 'did/didn\'t', '3 cách đọc -ed'], nguphap: 'am/is/are + V-ing; V-ed / bất quy tắc; didn\'t + V; Did … + V?', phatam: '-ed /t/ /d/ /ɪd/',
    loi: ['didn\'t went', 'it were', 'Dùng hiện tại cho việc hôm qua'], btvn: ['Kể 5 việc em đã làm hôm qua', 'Nói 3 việc mọi người trong nhà đang làm', 'Học thuộc 10 động từ bất quy tắc: go, have, see, buy, eat, get, make, take, come, do']
  };

  /* ================= NGÀY 21 ================= */
  const d21 = {
    n: 21, ten: 'Kiểm tra tổng hợp và mô phỏng giao tiếp', vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Ôn giai đoạn 3, mô phỏng một chuyến công tác, kiểm tra 20 câu.',
    hoc: `<h4>Tóm tắt giai đoạn 3</h4>${tbl(['Chủ đề', 'Mẫu câu'], ['<tr><td>Mua sắm</td><td>How much is/are …? It\'s too expensive. I\'ll take it.</td></tr>', '<tr><td>Hỏi đường</td><td>Is there a … near here? Turn left/right. It\'s next to / opposite …</td></tr>', '<tr><td>Đi lại</td><td>by bus/taxi; How long does it take? To the airport, please.</td></tr>', '<tr><td>Công việc</td><td>What do you do? I\'m an engineer. I work in/for/as …</td></tr>', '<tr><td>Sở thích</td><td>I like + V-ing. Can you …? Yes, I can.</td></tr>', '<tr><td>Tiếp diễn, quá khứ</td><td>I\'m working. I went / had / saw. Did you …? I didn\'t …</td></tr>'])}`,
    qs: [['mc', 'Is there ___ bank near here?', 'a', ['an', 'any', 'some'], 'Câu hỏi với số ít đếm được: a.'], ['mc', 'Last week I ___ a new laptop.', 'bought', ['buy', 'buyed', 'am buying'], 'Quá khứ của buy.']],
    hoithoai: {
      ctx: 'Một ngày công tác ở Kuala Lumpur: taxi → hỏi đường → gặp đối tác.', vai: 'Nhiều vai, em phản xạ liên tục.', ai: '🎭 Many roles',
      luot: [
        T(['(Driver) Where to?', '', '(Tài xế) Đi đâu ạ?'], ['To the Hilton Hotel, please.', '', 'Cho tôi đến khách sạn Hilton.', 'To + nơi.'], ['By the Hilton.', '', 'Dùng to.'], ['I\'m Hilton.', '', 'Sai.']),
        T(['(Driver) Here we are. Twenty-five ringgit.', '', '(Tài xế) Đến rồi. 25 ringgit.'], ['Here you are. Thank you!', '', 'Gửi anh. Cảm ơn!', 'Đưa tiền.'], ['Fifty-two?', '', 'Nghe nhầm.'], ['Turn left.', '', 'Lạc đề.']),
        T(['(Passer-by) Can I help you?', '', '(Người đi đường) Tôi giúp gì được?'], ['Excuse me, is there a coffee shop near here?', '', 'Xin lỗi, gần đây có quán cà phê không?', 'Is there …?'], ['Where coffee?', '', 'Câu cụt.'], ['There are a coffee shop?', '', 'Câu hỏi: Is there …?']),
        T(['(Partner) Nice to meet you! What do you do?', '', '(Đối tác) Rất vui được gặp! Anh làm gì?'], ['Nice to meet you too! I\'m an IT engineer at a bank.', '', 'Tôi cũng vậy! Tôi là kỹ sư IT ở một ngân hàng.', 'an IT engineer.'], ['I\'m IT engineer.', '', 'Thiếu an.'], ['I am doing coffee.', '', 'Sai nghĩa.']),
        T(['(Partner) How was your trip?', '', '(Đối tác) Chuyến đi của anh thế nào?'], ['It was great! The flight was short.', '', 'Tuyệt lắm! Chuyến bay ngắn.', 'was.'], ['It is great yesterday.', '', 'Quá khứ dùng was.'], ['It were great.', '', 'it + was.'])
      ], ket: 'Em đã xử lý trọn một ngày công tác bằng tiếng Anh!'
    },
    tom: ['Ôn giai đoạn 3', 'Kiểm tra 20 câu'], nguphap: 'Ôn giai đoạn 3', phatam: 'Nói liền mạch',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: ôn và làm lại', 'Tự đóng 2 vai hội thoại công tác']
  };

  /* ================= NGÀY 22 ================= */
  const d22 = {
    n: 22, ten: 'Làm quen và nói chuyện xã giao', kinds: K,
    muc: 'Bắt chuyện (small talk) về thời tiết, quê quán; giữ cuộc trò chuyện và xin liên lạc.',
    hoc: `${lv()}<h4>1. Mở đầu câu chuyện</h4>${reads([['Is this your first time here?', '', 'Bạn đến đây lần đầu à?'], ['Where are you from?', '', 'Bạn đến từ đâu?'], ['Nice weather today, isn\'t it?', '', 'Hôm nay trời đẹp nhỉ?'], ['How do you like Vietnam?', '', 'Bạn thấy Việt Nam thế nào?']])}
      <h4>2. Giữ câu chuyện: hỏi ngược lại</h4><ul>${ex('Really? That\'s interesting!', '', 'Thật à? Thú vị quá!')}${ex('What about you?', '', 'Còn bạn thì sao?')}</ul>
      <h4>3. Xin liên lạc và chào</h4><ul>${ex('Can I have your email?', '', 'Cho tôi xin email của bạn?')}${ex('Let\'s keep in touch!', '', 'Giữ liên lạc nhé!')}${ex('It was nice talking to you.', '', 'Rất vui được nói chuyện với bạn.')}</ul>
      ${tip('💡 Small talk nên tránh hỏi tuổi, lương, cân nặng, tình trạng hôn nhân với người mới quen phương Tây.')}`,
    vocab: [
      w('weather', '/ˈweðər/', 'thời tiết', '', ['The weather is nice.', '/ðə ˈweðər ɪz naɪs/', 'Thời tiết đẹp.']),
      w('sunny', '/ˈsʌni/', 'nắng', '', ['It\'s sunny today.', '/ɪts ˈsʌni təˈdeɪ/', 'Hôm nay trời nắng.']),
      w('rainy', '/ˈreɪni/', 'mưa', '', ['It\'s rainy in Hue.', '/ɪts ˈreɪni ɪn hweɪ/', 'Ở Huế trời mưa.']),
      w('hot', '/hɑːt/', 'nóng', '', ['It\'s very hot!', '/ɪts ˈveri hɑːt/', 'Nóng quá!']),
      w('cold', '/koʊld/', 'lạnh', '', ['Is it cold in Hanoi?', '/ɪz ɪt koʊld ɪn hæˈnɔɪ/', 'Hà Nội có lạnh không?']),
      w('first time', '/fɜːrst taɪm/', 'lần đầu', '', ['It\'s my first time here.', '/ɪts maɪ fɜːrst taɪm hɪr/', 'Đây là lần đầu tôi đến đây.']),
      w('interesting', '/ˈɪntrəstɪŋ/', 'thú vị', '', ['That\'s interesting!', '/ðæts ˈɪntrəstɪŋ/', 'Thú vị thật!']),
      w('really', '/ˈriːəli/', 'thật sự; thật à?', '', ['Really? Me too!', '/ˈriːəli miː tuː/', 'Thật à? Tôi cũng vậy!']),
      w('hometown', '/ˈhoʊmtaʊn/', 'quê nhà', '', ['My hometown is Can Tho.', '/maɪ ˈhoʊmtaʊn ɪz kɑːn tɔː/', 'Quê tôi ở Cần Thơ.']),
      w('email', '/ˈiːmeɪl/', 'thư điện tử', '', ['What\'s your email?', '/wʌts jʊr ˈiːmeɪl/', 'Email của bạn là gì?']),
      w('keep in touch', '/kiːp ɪn tʌtʃ/', 'giữ liên lạc', '', ['Let\'s keep in touch!', '/lets kiːp ɪn tʌtʃ/', 'Giữ liên lạc nhé!']),
      w('what about you', '/wʌt əˈbaʊt juː/', 'còn bạn thì sao', 'Hỏi ngược lại.', ['I\'m from Vietnam. What about you?', '', 'Tôi đến từ Việt Nam. Còn bạn?'])
    ],
    qs: [
      ['mc', 'Câu nào phù hợp để bắt chuyện với người mới quen?', 'Nice weather today, isn\'t it?', ['How much is your salary?', 'How old are you?', 'Are you married?'], 'Thời tiết là chủ đề an toàn.'],
      ['mc', 'Hỏi ngược lại “Còn bạn thì sao?” là?', 'What about you?', ['How you?', 'And what you?', 'You about?'], 'What about you?'],
      ['mc', '“Giữ liên lạc nhé!” là?', 'Let\'s keep in touch!', ['Let\'s touch!', 'Keep your touch!', 'Let\'s in touch keep!'], 'keep in touch.'],
      ['hear', 'Is this your first time here?', 'Bạn đến đây lần đầu à?', ['Bạn ở đây lâu chưa?', 'Bạn sống ở đây à?', 'Đây là nhà bạn à?'], 'first time = lần đầu.'],
      ['hear', 'It was nice talking to you.', 'Rất vui được nói chuyện với bạn.', ['Rất vui được gặp bạn.', 'Hẹn gặp lại bạn.', 'Cảm ơn bạn đã gọi.'], 'Câu chào khi kết thúc.'],
      ['order', 'Sắp xếp: “Bạn thấy Việt Nam thế nào?”', ['How', 'do you', 'like', 'Vietnam?'], 'How do you like Vietnam?']
    ],
    hoithoai: {
      ctx: 'Em gặp một du khách người Canada tên Ryan ở phố đi bộ Hồ Gươm.', vai: 'Ryan bắt chuyện, em trò chuyện tự nhiên.', ai: '👨 Ryan',
      luot: [
        T(['Hi! Nice weather today, isn\'t it?', '', 'Chào! Hôm nay trời đẹp nhỉ?'], ['Yes, it\'s sunny and not too hot. Is this your first time in Vietnam?', '', 'Ừ, nắng mà không quá nóng. Bạn đến Việt Nam lần đầu à?', 'Đồng ý + hỏi tiếp.'], ['Yes, I\'m weather.', '', 'Sai nghĩa.'], ['How old are you?', '', 'Không nên hỏi tuổi người mới quen.']),
        T(['Yes, it is! I\'m from Canada. What about you?', '', 'Đúng vậy! Tôi đến từ Canada. Còn bạn?'], ['I\'m from Hanoi, but my hometown is in Nam Dinh.', '', 'Tôi ở Hà Nội, nhưng quê tôi ở Nam Định.', 'hometown = quê.'], ['I\'m from Canada too.', '', 'Không đúng sự thật 😄'], ['What about me?', '', 'Ryan đang hỏi em.']),
        T(['How do you like Hanoi food?', '', 'Bạn thấy đồ ăn Hà Nội thế nào?'], ['I love it! You should try bun cha.', '', 'Tôi rất thích! Bạn nên thử bún chả.', 'Gợi ý món ăn – rất thân thiện.'], ['I like eat.', '', 'like + V-ing; câu chưa tự nhiên.'], ['It is rainy.', '', 'Lạc đề.']),
        T(['Great idea! Can I have your email? Let\'s keep in touch.', '', 'Ý hay! Cho tôi email của bạn nhé? Giữ liên lạc nhé.'], ['Sure! It was nice talking to you.', '', 'Được chứ! Rất vui được nói chuyện với bạn.', 'Kết thúc lịch sự.'], ['Keep in touch my email.', '', 'Câu sai.'], ['No, I can\'t email.', '', 'Không tự nhiên.'])
      ], ket: 'Em đã nói chuyện xã giao trọn vẹn với khách nước ngoài.'
    },
    tom: ['Small talk', 'Hỏi ngược lại', 'Xin liên lạc, chào kết thúc'], nguphap: 'Câu hỏi đuôi isn\'t it?; How do you like …?; What about you?', phatam: 'weather /ð/, interesting (nhấn âm 1)',
    loi: ['Hỏi tuổi, lương người mới quen', 'Chỉ trả lời mà không hỏi lại'], btvn: ['Chuẩn bị 5 câu small talk', 'Ghi âm cuộc trò chuyện tự đóng 2 vai', 'Tập giới thiệu quê nhà 3 câu']
  };

  /* ================= NGÀY 23 ================= */
  const d23 = {
    n: 23, ten: 'Giao tiếp tại nhà hàng', kinds: K,
    muc: 'Đặt bàn, hỏi món gợi ý, yêu cầu khẩu vị, gọi thêm, mang về, thanh toán, tip.',
    hoc: `${lv()}<h4>1. Vào nhà hàng</h4>${reads([['I have a reservation for two.', '', 'Tôi đã đặt bàn cho 2 người.'], ['A table for four, please.', '', 'Cho bàn 4 người.'], ['What do you recommend?', '', 'Bạn gợi ý món gì?']])}
      <h4>2. Yêu cầu khẩu vị</h4><ul>${ex('Not too spicy, please.', '', 'Đừng cay quá.')}${ex('Without onions, please.', '', 'Không cho hành.')}${ex('I\'m allergic to peanuts.', '', 'Tôi dị ứng đậu phộng.')}</ul>
      <h4>3. Thanh toán</h4>${reads([['Could we have the check, please?', '', 'Cho chúng tôi tính tiền.'], ['Can I get this to go?', '', 'Gói mang về được không?'], ['Is service included?', '', 'Đã gồm phí phục vụ chưa?']])}${tip('💡 Ở Mỹ, khách thường để lại <b>tip</b> (tiền boa) khoảng 15–20% hóa đơn. Mỹ gọi hóa đơn là <b>check</b>, Anh gọi là <b>bill</b>.')}`,
    vocab: [
      w('reservation', '/ˌrezərˈveɪʃən/', 'sự đặt chỗ', '', ['I have a reservation.', '/aɪ hæv ə ˌrezərˈveɪʃən/', 'Tôi đã đặt bàn.']),
      w('recommend', '/ˌrekəˈmend/', 'gợi ý, giới thiệu', '', ['What do you recommend?', '/wʌt duː juː ˌrekəˈmend/', 'Bạn gợi ý món gì?']),
      w('order', '/ˈɔːrdər/', 'gọi món; đơn hàng', '', ['Can I order now?', '/kæn aɪ ˈɔːrdər naʊ/', 'Tôi gọi món được chưa?']),
      w('spicy', '/ˈspaɪsi/', 'cay', '', ['Not too spicy, please.', '/nɑːt tuː ˈspaɪsi pliːz/', 'Đừng cay quá.']),
      w('without', '/wɪˈðaʊt/', 'không có, không kèm', '', ['Without ice, please.', '/wɪˈðaʊt aɪs pliːz/', 'Không đá, làm ơn.']),
      w('dessert', '/dɪˈzɜːrt/', 'món tráng miệng', 'Khác desert (sa mạc).', ['Any dessert?', '/ˈeni dɪˈzɜːrt/', 'Có dùng tráng miệng không?']),
      w('check', '/tʃek/', 'hóa đơn (Mỹ)', '', ['The check, please.', '/ðə tʃek pliːz/', 'Tính tiền giúp tôi.']),
      w('to go', '/tə ɡoʊ/', 'mang về', 'Anh: take away.', ['A coffee to go, please.', '/ə ˈkɔːfi tə ɡoʊ pliːz/', 'Một cà phê mang về.']),
      w('tip', '/tɪp/', 'tiền boa', '', ['Leave a tip.', '/liːv ə tɪp/', 'Để lại tiền boa.']),
      w('allergic', '/əˈlɜːrdʒɪk/', 'dị ứng', 'allergic to + N.', ['I\'m allergic to seafood.', '/aɪm əˈlɜːrdʒɪk tə ˈsiːfuːd/', 'Tôi dị ứng hải sản.']),
      w('full', '/fʊl/', 'no; đầy', '', ['I\'m full, thank you.', '/aɪm fʊl ˈθæŋk juː/', 'Tôi no rồi, cảm ơn.']),
      w('table for two', '/ˈteɪbəl fɔːr tuː/', 'bàn cho hai người', '', ['A table for two, please.', '/ə ˈteɪbəl fɔːr tuː pliːz/', 'Cho bàn 2 người.'])
    ],
    qs: [
      ['mc', '“Bạn gợi ý món gì?” là?', 'What do you recommend?', ['What you recommend?', 'Recommend me what?', 'What is recommend?'], 'What do you recommend?'],
      ['mc', '“Không cho hành” là?', 'Without onions, please.', ['No with onions.', 'Onions without.', 'Not onions with.'], 'without + N.'],
      ['mc', 'Ở Mỹ, hóa đơn ở nhà hàng thường gọi là?', 'check', ['menu', 'receipt only', 'tip'], 'Mỹ: check; Anh: bill.'],
      ['mc', '“Tôi dị ứng đậu phộng” là?', 'I\'m allergic to peanuts.', ['I allergic peanuts.', 'I\'m allergy peanuts.', 'Peanuts allergic me.'], 'be allergic to + N.'],
      ['hear', 'Can I get this to go?', 'Gói mang về được không?', ['Tôi đi được chưa?', 'Cho tôi tính tiền.', 'Món này là gì?'], 'to go = mang về.'],
      ['hear', 'I\'m full, thank you.', 'Tôi no rồi, cảm ơn.', ['Tôi đói rồi.', 'Bàn đầy rồi.', 'Tôi ổn, cảm ơn.'], 'full = no.'],
      ['order', 'Sắp xếp: “Cho bàn 2 người.”', ['A table', 'for two,', 'please.'], 'A table for two, please.']
    ],
    hoithoai: {
      ctx: 'Em mời khách hàng nước ngoài ăn tối ở nhà hàng.', vai: 'Phục vụ hỏi, em gọi món cho 2 người.', ai: '🧑‍🍳 Server',
      luot: [
        T(['Good evening! Do you have a reservation?', '', 'Chào buổi tối! Quý khách có đặt bàn không?'], ['Yes, a table for two under Nam.', '', 'Có, bàn 2 người tên Nam.', 'under + tên = đặt dưới tên.'], ['Yes, I have two.', '', 'Không rõ nghĩa.'], ['Good night!', '', 'Đang gặp, không chào good night.']),
        T(['Here are your menus. What would you like?', '', 'Thực đơn đây ạ. Quý khách dùng gì?'], ['What do you recommend?', '', 'Bạn gợi ý món gì?', 'Hỏi món đặc sắc.'], ['I recommend you.', '', 'Sai nghĩa.'], ['The check, please.', '', 'Chưa ăn mà đã tính tiền.']),
        T(['Our grilled fish is very popular. It\'s a little spicy.', '', 'Cá nướng của chúng tôi rất được ưa chuộng. Hơi cay ạ.'], ['Two grilled fish, please. Not too spicy.', '', 'Hai phần cá nướng. Đừng cay quá.', 'Gọi món + yêu cầu khẩu vị.'], ['Two fish spicy too.', '', 'Câu không rõ ý.'], ['I\'m allergic to you.', '', '😅 Sai nghĩa.']),
        T(['Would you like some dessert?', '', 'Quý khách dùng tráng miệng không?'], ['No, thank you. We\'re full. Could we have the check, please?', '', 'Không, cảm ơn. Chúng tôi no rồi. Cho tính tiền nhé.', 'Từ chối lịch sự + xin hóa đơn.'], ['Yes, desert please.', '', 'desert = sa mạc; tráng miệng là dessert.'], ['No, I\'m empty.', '', 'Không tự nhiên.'])
      ], ket: 'Em đã tiếp khách ở nhà hàng bằng tiếng Anh.'
    },
    tom: ['Đặt bàn', 'Hỏi món gợi ý', 'Yêu cầu khẩu vị', 'Tính tiền, mang về, tip'], nguphap: 'What do you recommend?; without + N; be allergic to; Could we have …?', phatam: 'dessert /dɪˈzɜːrt/ vs desert',
    loi: ['Nhầm dessert và desert', 'I allergic …', 'Quên tip ở Mỹ'], btvn: ['Viết yêu cầu khẩu vị của em bằng tiếng Anh', 'Đóng vai gọi món cho 3 người', 'Học 5 món ăn Việt bằng tiếng Anh để giới thiệu cho khách']
  };

  /* ================= NGÀY 24 ================= */
  const d24 = {
    n: 24, ten: 'Mua sắm quần áo', kinds: K,
    muc: 'Hỏi cỡ, màu, xin thử đồ, nói vừa – không vừa, đổi trả hàng.',
    hoc: `${lv()}<h4>1. Hỏi cỡ và màu</h4>${reads([['What size are you?', '', 'Bạn mặc cỡ nào?'], ['I\'m a medium.', '', 'Tôi mặc cỡ M.'], ['Do you have this in black?', '', 'Cái này có màu đen không?'], ['Do you have a smaller size?', '', 'Có cỡ nhỏ hơn không?']])}
      <h4>2. Thử đồ</h4><ul>${ex('Can I try it on?', '', 'Tôi thử được không?')}${ex('Where is the fitting room?', '', 'Phòng thử đồ ở đâu?')}${ex('It\'s too big. / It fits well.', '', 'Rộng quá. / Vừa lắm.')}</ul>
      <h4>3. Đổi trả</h4><ul>${ex('Can I exchange this?', '', 'Tôi đổi cái này được không?')}${ex('I\'d like a refund.', '', 'Tôi muốn hoàn tiền.')}</ul>
      <p class="small">So sánh hơn: tính từ ngắn + <b>-er</b> (small → smaller, big → bigger, cheap → cheaper); tính từ dài dùng <b>more</b> (more expensive).</p>`,
    vocab: [
      w('size', '/saɪz/', 'cỡ, kích thước', '', ['What size are you?', '/wʌt saɪz ɑːr juː/', 'Bạn mặc cỡ nào?']),
      w('try on', '/traɪ ɑːn/', 'mặc thử', 'try it on.', ['Can I try it on?', '/kæn aɪ traɪ ɪt ɑːn/', 'Tôi thử được không?']),
      w('fitting room', '/ˈfɪtɪŋ ruːm/', 'phòng thử đồ', '', ['The fitting room is there.', '/ðə ˈfɪtɪŋ ruːm ɪz ðer/', 'Phòng thử đồ ở đằng kia.']),
      w('small', '/smɔːl/', 'nhỏ', 'smaller.', ['It\'s too small.', '/ɪts tuː smɔːl/', 'Chật quá.']),
      w('medium', '/ˈmiːdiəm/', 'cỡ vừa (M)', '', ['I\'m a medium.', '/aɪm ə ˈmiːdiəm/', 'Tôi mặc cỡ M.']),
      w('large', '/lɑːrdʒ/', 'lớn (L)', '', ['Do you have a large?', '/duː juː hæv ə lɑːrdʒ/', 'Có cỡ L không?']),
      w('color', '/ˈkʌlər/', 'màu sắc', 'Anh viết colour.', ['What color do you like?', '/wʌt ˈkʌlər duː juː laɪk/', 'Bạn thích màu gì?']),
      w('shirt', '/ʃɜːrt/', 'áo sơ mi', '', ['This shirt is nice.', '/ðɪs ʃɜːrt ɪz naɪs/', 'Áo sơ mi này đẹp.']),
      w('shoes', '/ʃuːz/', 'giày', 'Luôn số nhiều.', ['These shoes are comfortable.', '/ðiːz ʃuːz ɑːr ˈkʌmftərbəl/', 'Đôi giày này êm.']),
      w('dress', '/dres/', 'váy liền', '', ['I like this dress.', '/aɪ laɪk ðɪs dres/', 'Tôi thích chiếc váy này.']),
      w('exchange', '/ɪksˈtʃeɪndʒ/', 'đổi (hàng)', '', ['Can I exchange it?', '/kæn aɪ ɪksˈtʃeɪndʒ ɪt/', 'Tôi đổi được không?']),
      w('refund', '/ˈriːfʌnd/', 'hoàn tiền', '', ['I\'d like a refund.', '/aɪd laɪk ə ˈriːfʌnd/', 'Tôi muốn hoàn tiền.'])
    ],
    qs: [
      ['mc', '“Tôi thử được không?” là?', 'Can I try it on?', ['Can I try on it?', 'Can I on try it?', 'Can try me?'], 'try it on (it đứng giữa).'],
      ['mc', 'So sánh hơn của big là?', 'bigger', ['biger', 'more big', 'bigest'], 'Gấp đôi phụ âm: bigger.'],
      ['mc', 'So sánh hơn của expensive là?', 'more expensive', ['expensiver', 'most expensive', 'expensivest'], 'Tính từ dài dùng more.'],
      ['mc', '“Vừa lắm” là?', 'It fits well.', ['It\'s too big.', 'It\'s fitting room.', 'It sizes well.'], 'fit = vừa.'],
      ['hear', 'Do you have this in black?', 'Cái này có màu đen không?', ['Có cỡ lớn hơn không?', 'Cái này giá bao nhiêu?', 'Tôi thử được không?'], 'in black = màu đen.'],
      ['hear', 'I\'d like a refund.', 'Tôi muốn hoàn tiền.', ['Tôi muốn đổi hàng.', 'Tôi muốn thử đồ.', 'Tôi muốn giảm giá.'], 'refund = hoàn tiền.'],
      ['order', 'Sắp xếp: “Có cỡ nhỏ hơn không?”', ['Do you have', 'a', 'smaller', 'size?'], 'Do you have a smaller size?']
    ],
    hoithoai: {
      ctx: 'Em mua áo sơ mi ở một trung tâm thương mại tại Úc.', vai: 'Nhân viên tư vấn, em chọn và thử áo.', ai: '👩 Shop assistant',
      luot: [
        T(['Hi! Are you looking for anything?', '', 'Chào! Bạn đang tìm gì ạ?'], ['Yes, I\'m looking for a shirt. Do you have this in white?', '', 'Vâng, tôi tìm áo sơ mi. Cái này có màu trắng không?', 'Nói nhu cầu + hỏi màu.'], ['Yes, I look shirt.', '', 'Câu thiếu.'], ['No, I\'m a shirt.', '', 'Sai nghĩa.']),
        T(['Sure. What size are you?', '', 'Có ạ. Bạn mặc cỡ nào?'], ['I\'m a medium. Can I try it on?', '', 'Tôi mặc cỡ M. Tôi thử được không?', 'Cỡ + xin thử.'], ['I\'m size.', '', 'Thiếu cỡ cụ thể.'], ['Can I try on it?', '', 'Phải là try it on.']),
        T(['Of course. How is it?', '', 'Tất nhiên. Thế nào ạ?'], ['It\'s a little big. Do you have a smaller size?', '', 'Hơi rộng. Có cỡ nhỏ hơn không?', 'Mô tả + yêu cầu đổi cỡ.'], ['It\'s more small.', '', 'smaller, không dùng more small.'], ['It\'s very fitting room.', '', 'Sai nghĩa.']),
        T(['Here\'s a small. Better?', '', 'Đây là cỡ S. Ổn hơn chưa?'], ['Yes, it fits well. I\'ll take it!', '', 'Vừa rồi. Tôi lấy!', 'Chốt mua.'], ['Yes, I\'d like a refund.', '', 'Chưa mua mà đòi hoàn tiền.'], ['No, it fits well.', '', 'Mâu thuẫn.'])
      ], ket: 'Em đã chọn cỡ, màu, thử đồ và mua áo.'
    },
    tom: ['Cỡ, màu', 'Thử đồ', 'Đổi trả', 'So sánh hơn'], nguphap: 'try it on; -er / more + adj; Do you have this in + màu?', phatam: 'medium, exchange',
    loi: ['try on it', 'more small, biger', 'Nhầm exchange và refund'], btvn: ['Tả 3 món đồ em đang mặc: màu, cỡ', 'So sánh 3 cặp đồ vật với -er/more', 'Đóng vai đổi hàng']
  };

  /* ================= NGÀY 25 ================= */
  const d25 = {
    n: 25, ten: 'Khách sạn và sân bay', kinds: K,
    muc: 'Làm thủ tục sân bay, nhận – trả phòng, hỏi dịch vụ, báo sự cố.',
    hoc: `${lv()}<h4>1. Ở sân bay</h4>${reads([['Here is my passport.', '', 'Đây là hộ chiếu của tôi.'], ['Window or aisle seat?', '', 'Ghế cửa sổ hay lối đi?'], ['How many bags are you checking in?', '', 'Bạn ký gửi mấy kiện?'], ['Which gate?', '', 'Cổng số mấy?'], ['Your flight is delayed.', '', 'Chuyến bay bị hoãn.']])}
      <h4>2. Ở khách sạn</h4><ul>${ex('I\'d like to check in. I have a booking.', '', 'Tôi muốn nhận phòng. Tôi đã đặt trước.')}${ex('Is breakfast included?', '', 'Có bao gồm bữa sáng không?')}${ex('What time is check-out?', '', 'Mấy giờ trả phòng?')}${ex('What\'s the Wi-Fi password?', '', 'Mật khẩu Wi-Fi là gì?')}</ul>
      <h4>3. Báo sự cố</h4><ul>${ex('The air conditioner is broken.', '', 'Máy lạnh bị hỏng.')}${ex('There is no hot water.', '', 'Không có nước nóng.')}${ex('Could I have an extra towel?', '', 'Cho tôi thêm khăn tắm được không?')}</ul>`,
    vocab: [
      w('check in', '/tʃek ɪn/', 'làm thủ tục, nhận phòng', '', ['I\'d like to check in.', '/aɪd laɪk tə tʃek ɪn/', 'Tôi muốn nhận phòng.']),
      w('check out', '/tʃek aʊt/', 'trả phòng', '', ['I\'d like to check out.', '/aɪd laɪk tə tʃek aʊt/', 'Tôi muốn trả phòng.']),
      w('passport', '/ˈpæspɔːrt/', 'hộ chiếu', '', ['Here is my passport.', '/hɪr ɪz maɪ ˈpæspɔːrt/', 'Hộ chiếu của tôi đây.']),
      w('luggage', '/ˈlʌɡɪdʒ/', 'hành lý', 'Không đếm được.', ['Where is my luggage?', '/wer ɪz maɪ ˈlʌɡɪdʒ/', 'Hành lý của tôi đâu?']),
      w('boarding pass', '/ˈbɔːrdɪŋ pæs/', 'thẻ lên máy bay', '', ['Here is your boarding pass.', '/hɪr ɪz jʊr ˈbɔːrdɪŋ pæs/', 'Thẻ lên máy bay của bạn đây.']),
      w('gate', '/ɡeɪt/', 'cổng (sân bay)', '', ['Go to gate 12.', '/ɡoʊ tə ɡeɪt twelv/', 'Đi đến cổng 12.']),
      w('flight', '/flaɪt/', 'chuyến bay', '', ['My flight is at nine.', '/maɪ flaɪt ɪz æt naɪn/', 'Chuyến bay của tôi lúc 9 giờ.']),
      w('booking', '/ˈbʊkɪŋ/', 'sự đặt chỗ', '', ['I have a booking.', '/aɪ hæv ə ˈbʊkɪŋ/', 'Tôi đã đặt phòng.']),
      w('included', '/ɪnˈkluːdɪd/', 'bao gồm', '', ['Is breakfast included?', '/ɪz ˈbrekfəst ɪnˈkluːdɪd/', 'Có gồm bữa sáng không?']),
      w('broken', '/ˈbroʊkən/', 'bị hỏng', '', ['The TV is broken.', '/ðə ˌtiːˈviː ɪz ˈbroʊkən/', 'Ti vi bị hỏng.']),
      w('towel', '/ˈtaʊəl/', 'khăn tắm', '', ['Could I have an extra towel?', '/kʊd aɪ hæv ən ˈekstrə ˈtaʊəl/', 'Cho tôi thêm khăn tắm.']),
      w('password', '/ˈpæswɜːrd/', 'mật khẩu', '', ['What\'s the Wi-Fi password?', '/wʌts ðə ˈwaɪfaɪ ˈpæswɜːrd/', 'Mật khẩu Wi-Fi là gì?'])
    ],
    qs: [
      ['mc', '“Có bao gồm bữa sáng không?” là?', 'Is breakfast included?', ['Breakfast is include?', 'Do breakfast included?', 'Is include breakfast?'], 'Is + N + included?'],
      ['mc', '“Máy lạnh bị hỏng” là?', 'The air conditioner is broken.', ['The air conditioner broke is.', 'The air conditioner is break.', 'Broken the air conditioner.'], 'is broken.'],
      ['mc', 'Trả phòng là?', 'check out', ['check in', 'booking', 'gate'], 'check out.'],
      ['mc', '“luggage” là danh từ?', 'Không đếm được (không thêm -s)', ['Đếm được', 'Luôn số nhiều', 'Động từ'], 'luggage không đếm được.'],
      ['hear', 'Your flight is delayed.', 'Chuyến bay của bạn bị hoãn.', ['Chuyến bay bị hủy.', 'Chuyến bay đến rồi.', 'Chuyến bay ở cổng 2.'], 'delayed = bị hoãn.'],
      ['hear', 'Window or aisle seat?', 'Ghế cửa sổ hay lối đi?', ['Ghế trước hay sau?', 'Hạng phổ thông hay thương gia?', 'Mấy kiện hành lý?'], 'aisle /aɪl/ = lối đi.'],
      ['order', 'Sắp xếp: “Mấy giờ trả phòng?”', ['What time', 'is', 'check-out?'], 'What time is check-out?']
    ],
    hoithoai: {
      ctx: 'Em đến khách sạn ở Tokyo sau chuyến bay.', vai: 'Lễ tân hỏi, em nhận phòng và hỏi dịch vụ.', ai: '🛎️ Receptionist',
      luot: [
        T(['Good afternoon! How can I help you?', '', 'Chào buổi chiều! Tôi giúp gì được?'], ['I\'d like to check in. I have a booking under Nam Nguyen.', '', 'Tôi muốn nhận phòng. Tôi đặt tên Nguyễn Nam.', 'check in + tên đặt phòng.'], ['I\'d like to check out.', '', 'Mới đến thì check in.'], ['I have a flight.', '', 'Lạc đề.']),
        T(['May I see your passport, please?', '', 'Cho tôi xem hộ chiếu.'], ['Sure. Here you are.', '', 'Vâng. Đây ạ.', 'Đưa giấy tờ.'], ['My passport is broken.', '', '😅'], ['Yes, I see.', '', 'Không phù hợp.']),
        T(['Thank you. Your room is 805.', '', 'Cảm ơn. Phòng của bạn là 805.'], ['Thanks. Is breakfast included?', '', 'Cảm ơn. Có gồm bữa sáng không?', 'Hỏi dịch vụ.'], ['Is breakfast include?', '', 'included.'], ['Room is 508?', '', 'Nghe nhầm số phòng.']),
        T(['Yes, from 6:30 to 10. Anything else?', '', 'Có, từ 6:30 đến 10 giờ. Còn gì nữa không?'], ['What\'s the Wi-Fi password?', '', 'Mật khẩu Wi-Fi là gì?', 'Câu hỏi hữu ích.'], ['What\'s the password broken?', '', 'Câu sai.'], ['I\'d like a refund.', '', 'Lạc đề.'])
      ], ket: 'Em đã nhận phòng khách sạn và hỏi dịch vụ.'
    },
    tom: ['Sân bay', 'Nhận/trả phòng', 'Hỏi dịch vụ', 'Báo sự cố'], nguphap: 'I\'d like to + V; Is … included?; … is broken', phatam: 'aisle /aɪl/ (s câm), luggage',
    loi: ['Nhầm check in/check out', 'luggages', 'Is breakfast include'], btvn: ['Đóng vai làm thủ tục sân bay', 'Báo 3 sự cố trong phòng khách sạn', 'Viết 5 câu hỏi dịch vụ khách sạn']
  };

  /* ================= NGÀY 26 ================= */
  const d26 = {
    n: 26, ten: 'Điện thoại, email và tin nhắn', kinds: K,
    muc: 'Gọi và nghe điện thoại, nhắn lại; viết email ngắn và tin nhắn công việc.',
    hoc: `${lv()}<h4>1. Điện thoại</h4>${reads([['Hello, this is Nam from ABC.', '', 'Xin chào, tôi là Nam từ ABC.'], ['Could I speak to Mr. Brown?', '', 'Cho tôi gặp ông Brown được không?'], ['Hold on, please.', '', 'Xin giữ máy.'], ['He\'s not available right now.', '', 'Anh ấy hiện không rảnh.'], ['Can I leave a message?', '', 'Tôi để lại lời nhắn được không?'], ['Could you call me back?', '', 'Bạn gọi lại cho tôi được không?']])}
      ${tip('⚠️ Trên điện thoại tự giới thiệu là <b>This is Nam</b>, không nói "I am Nam".')}
      <h4>2. Email ngắn</h4><div class="zh-rep">Dear Mr. Brown,\n\nI am writing to send you the report.\nPlease see the attached file.\n\nBest regards,\nNam</div>
      <h4>3. Tin nhắn công việc thường gặp</h4><p>ASAP = as soon as possible (càng sớm càng tốt) · FYI = for your information (để bạn biết) · Noted. = Đã ghi nhận · Thanks! / Got it!</p>`,
    vocab: [
      w('call', '/kɔːl/', 'gọi điện', '', ['I\'ll call you later.', '/aɪl kɔːl juː ˈleɪtər/', 'Tôi sẽ gọi bạn sau.']),
      w('call back', '/kɔːl bæk/', 'gọi lại', '', ['Could you call me back?', '/kʊd juː kɔːl miː bæk/', 'Bạn gọi lại cho tôi nhé?']),
      w('hold on', '/hoʊld ɑːn/', 'giữ máy, chờ chút', '', ['Hold on, please.', '/hoʊld ɑːn pliːz/', 'Xin giữ máy.']),
      w('message', '/ˈmesɪdʒ/', 'tin nhắn, lời nhắn', '', ['Can I leave a message?', '/kæn aɪ liːv ə ˈmesɪdʒ/', 'Tôi để lại lời nhắn được không?']),
      w('available', '/əˈveɪləbəl/', 'rảnh, sẵn có', '', ['Are you available tomorrow?', '/ɑːr juː əˈveɪləbəl təˈmɑːroʊ/', 'Mai bạn có rảnh không?']),
      w('speak to', '/spiːk tuː/', 'nói chuyện với', '', ['Could I speak to Anna?', '/kʊd aɪ spiːk tuː ˈænə/', 'Cho tôi gặp Anna.']),
      w('attach', '/əˈtætʃ/', 'đính kèm', 'attached file = tệp đính kèm.', ['Please see the attached file.', '/pliːz siː ði əˈtætʃt faɪl/', 'Vui lòng xem tệp đính kèm.']),
      w('reply', '/rɪˈplaɪ/', 'trả lời', '', ['Please reply soon.', '/pliːz rɪˈplaɪ suːn/', 'Vui lòng trả lời sớm.']),
      w('regards', '/rɪˈɡɑːrdz/', 'trân trọng (cuối thư)', 'Best regards,', ['Best regards, Nam', '/best rɪˈɡɑːrdz nɑːm/', 'Trân trọng, Nam']),
      w('ASAP', '/ˌeɪ es eɪ ˈpiː/', 'càng sớm càng tốt', 'as soon as possible.', ['Please send it ASAP.', '/pliːz send ɪt ˌeɪ es eɪ ˈpiː/', 'Vui lòng gửi sớm nhất có thể.']),
      w('text', '/tekst/', 'nhắn tin; tin nhắn', '', ['Text me when you arrive.', '/tekst miː wen juː əˈraɪv/', 'Nhắn tôi khi bạn đến nhé.']),
      w('dear', '/dɪr/', 'kính gửi (đầu thư)', '', ['Dear Ms. Lee,', '/dɪr mɪz liː/', 'Kính gửi bà Lee,'])
    ],
    qs: [
      ['mc', 'Tự giới thiệu khi gọi điện là?', 'Hello, this is Nam.', ['Hello, I am Nam speaking you.', 'Hello, my name Nam.', 'Hello, it Nam.'], 'Trên điện thoại dùng This is …'],
      ['mc', '“Xin giữ máy” là?', 'Hold on, please.', ['Hold up phone.', 'Stop on, please.', 'Keep calling.'], 'Hold on.'],
      ['mc', 'Kết thúc email lịch sự là?', 'Best regards,', ['Bye bye,', 'See you!', 'Thanks a lot lol'], 'Best regards.'],
      ['mc', 'ASAP nghĩa là?', 'càng sớm càng tốt', ['để bạn biết', 'đã ghi nhận', 'xin lỗi'], 'as soon as possible.'],
      ['hear', 'He\'s not available right now.', 'Anh ấy hiện không rảnh.', ['Anh ấy nghỉ việc rồi.', 'Anh ấy sẽ gọi lại.', 'Anh ấy đang ở đây.'], 'available = rảnh.'],
      ['hear', 'Could you call me back?', 'Bạn gọi lại cho tôi được không?', ['Bạn quay lại được không?', 'Tôi gọi lại cho bạn nhé?', 'Bạn nghe rõ không?'], 'call back = gọi lại.'],
      ['order', 'Sắp xếp: “Tôi để lại lời nhắn được không?”', ['Can I', 'leave', 'a', 'message?'], 'Can I leave a message?']
    ],
    hoithoai: {
      ctx: 'Em gọi điện cho công ty đối tác ở Singapore để gặp ông Brown.', vai: 'Thư ký nghe máy, em xử lý cuộc gọi.', ai: '☎️ Secretary',
      luot: [
        T(['Good morning, Delta Tech. How can I help you?', '', 'Chào buổi sáng, Delta Tech xin nghe.'], ['Hello, this is Nam from Vietnam. Could I speak to Mr. Brown?', '', 'Xin chào, tôi là Nam từ Việt Nam. Cho tôi gặp ông Brown.', 'This is … + Could I speak to …'], ['Hello, I am Nam. Give me Mr. Brown.', '', 'Thiếu lịch sự.'], ['Hold on, please.', '', 'Câu của người nghe máy.']),
        T(['Hold on, please. … Sorry, he\'s not available right now.', '', 'Xin giữ máy. … Xin lỗi, ông ấy hiện không rảnh.'], ['Can I leave a message?', '', 'Tôi để lại lời nhắn được không?', 'Đề nghị để lại lời nhắn.'], ['Why not?', '', 'Không lịch sự.'], ['I\'m available.', '', 'Lạc đề.']),
        T(['Of course. Go ahead.', '', 'Tất nhiên. Mời anh.'], ['Please ask him to call me back. My number is 0-9-0-1-2-3-4-5-6-7.', '', 'Nhờ ông ấy gọi lại cho tôi. Số tôi là …', 'Nhắn gọi lại + số điện thoại.'], ['Call him back me.', '', 'Sai trật tự.'], ['I text you.', '', 'Không rõ ý.']),
        T(['Got it. I\'ll give him the message.', '', 'Đã ghi nhận. Tôi sẽ chuyển lời.'], ['Thank you very much. Goodbye!', '', 'Cảm ơn nhiều. Tạm biệt!', 'Kết thúc cuộc gọi.'], ['Best regards!', '', 'Chỉ dùng cuối email.'], ['ASAP!', '', 'Cộc lốc.'])
      ], ket: 'Em đã gọi điện tìm người và để lại lời nhắn.'
    },
    tom: ['Câu gọi/nghe điện thoại', 'Để lại lời nhắn', 'Email ngắn', 'Viết tắt trong tin nhắn'], nguphap: 'This is …; Could I speak to …?; Can I leave a message?; Dear … / Best regards', phatam: 'available, message',
    loi: ['Nói I am Nam trên điện thoại', 'Kết thúc email bằng Bye'], btvn: ['Viết email 4 câu gửi báo cáo cho sếp', 'Đóng vai gọi điện tìm người', 'Học 4 viết tắt: ASAP, FYI, BTW, ETA']
  };

  /* ================= NGÀY 27 ================= */
  const d27 = {
    n: 27, ten: 'Tiếng Anh nơi công sở', kinds: K,
    muc: 'Họp, báo tiến độ, hẹn hạn chót, gửi báo giá, xử lý sự cố, chốt hợp tác.',
    hoc: `${lv()}<h4>1. Trong cuộc họp</h4>${reads([['Let\'s start the meeting.', '', 'Bắt đầu cuộc họp nhé.'], ['I agree with you.', '', 'Tôi đồng ý với bạn.'], ['Could you explain that again?', '', 'Bạn giải thích lại được không?'], ['What\'s the deadline?', '', 'Hạn chót là khi nào?']])}
      <h4>2. Báo tiến độ</h4><ul>${ex('I\'m working on the report.', '', 'Tôi đang làm báo cáo.')}${ex('It will be ready by Friday.', '', 'Nó sẽ xong trước thứ Sáu.')}${ex('We have an issue with the system.', '', 'Hệ thống đang gặp sự cố.')}${ex('Our team will fix it today.', '', 'Nhóm chúng tôi sẽ sửa trong hôm nay.')}</ul>
      <h4>3. Với khách hàng</h4><ul>${ex('I\'ll send you a quotation.', '', 'Tôi sẽ gửi bạn báo giá.')}${ex('Let\'s sign the contract.', '', 'Chúng ta ký hợp đồng nhé.')}${ex('It\'s a deal!', '', 'Chốt nhé!')}</ul><p class="small">will + V = sẽ làm (tương lai): I will send / It will be ready.</p>`,
    vocab: [
      w('deadline', '/ˈdedlaɪn/', 'hạn chót', '', ['The deadline is Friday.', '/ðə ˈdedlaɪn ɪz ˈfraɪdeɪ/', 'Hạn chót là thứ Sáu.']),
      w('report', '/rɪˈpɔːrt/', 'báo cáo', '', ['I\'m writing the report.', '/aɪm ˈraɪtɪŋ ðə rɪˈpɔːrt/', 'Tôi đang viết báo cáo.']),
      w('schedule', '/ˈskedʒuːl/', 'lịch trình', '', ['Let\'s check the schedule.', '/lets tʃek ðə ˈskedʒuːl/', 'Xem lịch trình nhé.']),
      w('quotation', '/kwoʊˈteɪʃən/', 'báo giá', '', ['Please send me a quotation.', '/pliːz send miː ə kwoʊˈteɪʃən/', 'Vui lòng gửi báo giá.']),
      w('contract', '/ˈkɑːntrækt/', 'hợp đồng', '', ['Let\'s sign the contract.', '/lets saɪn ðə ˈkɑːntrækt/', 'Ký hợp đồng nhé.']),
      w('issue', '/ˈɪʃuː/', 'vấn đề, sự cố', '', ['We have an issue.', '/wiː hæv ən ˈɪʃuː/', 'Chúng tôi gặp sự cố.']),
      w('fix', '/fɪks/', 'sửa', '', ['We will fix it today.', '/wiː wɪl fɪks ɪt təˈdeɪ/', 'Chúng tôi sẽ sửa hôm nay.']),
      w('support', '/səˈpɔːrt/', 'hỗ trợ', '', ['Thank you for your support.', '/ˈθæŋk juː fɔːr jʊr səˈpɔːrt/', 'Cảm ơn sự hỗ trợ của bạn.']),
      w('agree', '/əˈɡriː/', 'đồng ý', 'agree with + người.', ['I agree with you.', '/aɪ əˈɡriː wɪð juː/', 'Tôi đồng ý với bạn.']),
      w('sign', '/saɪn/', 'ký', 'g câm.', ['Please sign here.', '/pliːz saɪn hɪr/', 'Vui lòng ký ở đây.']),
      w('deal', '/diːl/', 'thỏa thuận', '', ['It\'s a deal!', '/ɪts ə diːl/', 'Chốt nhé!']),
      w('invoice', '/ˈɪnvɔɪs/', 'hóa đơn (bán hàng)', '', ['I\'ll send the invoice today.', '/aɪl send ði ˈɪnvɔɪs təˈdeɪ/', 'Hôm nay tôi sẽ gửi hóa đơn.'])
    ],
    qs: [
      ['mc', '“Hạn chót là khi nào?” là?', 'What\'s the deadline?', ['When is the dead?', 'What deadline is?', 'Where is the deadline?'], 'deadline = hạn chót.'],
      ['mc', '“Tôi sẽ gửi báo giá” là?', 'I\'ll send you a quotation.', ['I send you quotation yesterday.', 'I\'m send a quotation.', 'I will sending quotation.'], 'will + V.'],
      ['mc', '“Tôi đồng ý với bạn” là?', 'I agree with you.', ['I am agree with you.', 'I agree you.', 'I agreeing with you.'], 'agree không đi với am.'],
      ['mc', '“sign” đọc là?', '/saɪn/', ['/sɪɡn/', '/saɪɡn/', '/sɪn/'], 'g câm.'],
      ['hear', 'It will be ready by Friday.', 'Nó sẽ xong trước thứ Sáu.', ['Nó đã xong hôm thứ Sáu.', 'Nó sẽ bắt đầu thứ Sáu.', 'Thứ Sáu là hạn chót.'], 'will be ready by …'],
      ['hear', 'We have an issue with the system.', 'Hệ thống đang gặp sự cố.', ['Hệ thống mới rất tốt.', 'Chúng tôi sẽ mua hệ thống.', 'Hệ thống đã sửa xong.'], 'issue = sự cố.'],
      ['order', 'Sắp xếp: “Chúng ta ký hợp đồng nhé.”', ['Let\'s', 'sign', 'the', 'contract.'], 'Let\'s sign the contract.']
    ],
    hoithoai: {
      ctx: 'Em họp online với khách hàng nước ngoài về dự án cung cấp thiết bị IT.', vai: 'Khách hàng hỏi, em báo cáo và chốt hợp tác.', ai: '👨‍💼 Client',
      luot: [
        T(['Hi Nam. How is the project going?', '', 'Chào Nam. Dự án tiến triển thế nào?'], ['It\'s going well. We\'re working on the final report.', '', 'Tiến triển tốt. Chúng tôi đang làm báo cáo cuối.', 'Báo tiến độ bằng thì tiếp diễn.'], ['It go well.', '', 'It\'s going well.'], ['I\'m a report.', '', 'Sai nghĩa.']),
        T(['Great. When will it be ready?', '', 'Tốt. Khi nào xong?'], ['It will be ready by Friday.', '', 'Sẽ xong trước thứ Sáu.', 'will + be ready by.'], ['It ready Friday.', '', 'Thiếu will be, by.'], ['Yesterday.', '', 'Câu hỏi về tương lai.']),
        T(['We had an issue with the server last week.', '', 'Tuần trước chúng tôi gặp sự cố máy chủ.'], ['Sorry about that. Our team will fix it today.', '', 'Xin lỗi về điều đó. Nhóm chúng tôi sẽ xử lý hôm nay.', 'Xin lỗi + cam kết xử lý.'], ['It\'s a deal!', '', 'Chưa đến lúc chốt.'], ['I agree the issue.', '', 'Không phù hợp.']),
        T(['Perfect. Please send me the quotation for 50 laptops.', '', 'Tuyệt. Gửi tôi báo giá 50 laptop nhé.'], ['Sure, I\'ll send it today. Thank you for your support!', '', 'Vâng, hôm nay tôi gửi. Cảm ơn anh đã ủng hộ!', 'Nhận việc + cảm ơn.'], ['I send quotation yesterday.', '', 'Sai thì.'], ['Fifteen laptops?', '', 'Nghe nhầm: fifty (50).'])
      ], ket: 'Em đã họp với khách hàng: báo tiến độ, xử lý sự cố, nhận yêu cầu báo giá.'
    },
    tom: ['Câu trong cuộc họp', 'Báo tiến độ', 'will + V', 'Báo giá, hợp đồng'], nguphap: 'will + V; be working on; by + mốc thời gian; agree with', phatam: 'schedule /ˈskedʒuːl/ (Mỹ), sign (g câm)',
    loi: ['I am agree', 'Nghe nhầm fifteen/fifty', 'Quên will khi nói tương lai'], btvn: ['Viết email báo tiến độ 4 câu', 'Tập 5 câu dùng trong cuộc họp', 'Viết 3 câu với will']
  };

  /* ================= NGÀY 28 ================= */
  const d28 = {
    n: 28, ten: 'Nghe hiểu và phản xạ', tong: 1, kt: { n: 20, min: 20 }, kinds: ['listen', 'listenWord', 'listen', 'meaning', 'write'],
    muc: 'Câu “cứu nguy” khi chưa nghe rõ; nghe từ khoá; phản xạ trả lời trong 3 giây.',
    hoc: `${lv('Hôm nay phần Luyện tập và Kiểm tra chủ yếu là <b>nghe</b>.')}<h4>1. Câu cứu nguy</h4>${reads([['Sorry? / Pardon?', '', 'Xin lỗi, bạn nói gì?'], ['Could you repeat that, please?', '', 'Bạn nhắc lại được không?'], ['Could you speak more slowly?', '', 'Bạn nói chậm hơn được không?'], ['What does it mean?', '', 'Nó nghĩa là gì?'], ['How do you say it in English?', '', 'Tiếng Anh nói thế nào?'], ['I see. / Got it.', '', 'Tôi hiểu rồi.']])}
      <h4>2. Bí quyết nghe</h4><ul><li>Nghe <b>từ khoá</b>: ai, cái gì, khi nào, ở đâu, bao nhiêu.</li><li>Từ hỏi đầu câu quyết định câu trả lời: <b>What, Where, When, Who, How much, How long</b>.</li><li>Người bản xứ nói nối âm: "What do you" → "Whaddaya", "going to" → "gonna".</li></ul>
      <h4>3. Phản xạ 3 giây</h4>${reads([['What\'s your name?', '→ My name is …', ''], ['Where are you from?', '→ I\'m from …', ''], ['What do you do?', '→ I\'m a/an …', ''], ['How was your weekend?', '→ It was …', ''], ['Can you help me?', '→ Sure! / Sorry, I can\'t.', '']])}`,
    vocab: [
      w('repeat', '/rɪˈpiːt/', 'nhắc lại', '', ['Could you repeat that?', '/kʊd juː rɪˈpiːt ðæt/', 'Bạn nhắc lại được không?']),
      w('slowly', '/ˈsloʊli/', 'chậm rãi', '', ['Please speak slowly.', '/pliːz spiːk ˈsloʊli/', 'Làm ơn nói chậm.']),
      w('mean', '/miːn/', 'có nghĩa là', '', ['What does it mean?', '/wʌt dʌz ɪt miːn/', 'Nó nghĩa là gì?']),
      w('understand', '/ˌʌndərˈstænd/', 'hiểu', '', ['I don\'t understand.', '/aɪ doʊnt ˌʌndərˈstænd/', 'Tôi không hiểu.']),
      w('pardon', '/ˈpɑːrdən/', 'xin lỗi (bạn nói gì?)', '', ['Pardon? Say it again, please.', '/ˈpɑːrdən seɪ ɪt əˈɡen pliːz/', 'Xin lỗi? Làm ơn nói lại.']),
      w('got it', '/ɡɑːt ɪt/', 'hiểu rồi', '', ['Got it, thanks!', '/ɡɑːt ɪt θæŋks/', 'Hiểu rồi, cảm ơn!']),
      w('louder', '/ˈlaʊdər/', 'to hơn', '', ['Could you speak louder?', '/kʊd juː spiːk ˈlaʊdər/', 'Bạn nói to hơn được không?']),
      w('clear', '/klɪr/', 'rõ ràng', '', ['Is that clear?', '/ɪz ðæt klɪr/', 'Rõ chưa?'])
    ],
    qs: [
      ['hear', 'Could you repeat that, please?', 'Bạn nhắc lại được không?', ['Bạn nói chậm được không?', 'Bạn hiểu không?', 'Bạn nói to hơn được không?'], 'repeat = nhắc lại.'],
      ['hear', 'The meeting starts at three thirty.', 'Cuộc họp bắt đầu lúc 3:30.', ['Cuộc họp bắt đầu lúc 3:13.', 'Cuộc họp kéo dài 30 phút.', 'Cuộc họp lúc 13:30.'], 'three thirty = 3:30.'],
      ['hear', 'The bank is opposite the hotel.', 'Ngân hàng đối diện khách sạn.', ['Ngân hàng cạnh khách sạn.', 'Khách sạn trong ngân hàng.', 'Ngân hàng xa khách sạn.'], 'opposite = đối diện.'],
      ['hear', 'I didn\'t go to work yesterday.', 'Hôm qua tôi không đi làm.', ['Hôm nay tôi không đi làm.', 'Hôm qua tôi đi làm muộn.', 'Mai tôi không đi làm.'], 'didn\'t + yesterday.'],
      ['hear', 'It costs fifteen dollars.', '15 đô', ['50 đô', '5 đô', '55 đô'], 'fifteen = 15.'],
      ['hear', 'She can\'t come today.', 'Hôm nay cô ấy không đến được.', ['Hôm nay cô ấy đến được.', 'Cô ấy đã đến hôm nay.', 'Cô ấy sẽ đến mai.'], 'can\'t = không thể.'],
      ['mc', 'Không nghe rõ, em nói?', 'Sorry? Could you repeat that?', ['What? Speak!', 'No.', 'I know.'], 'Lịch sự.']
    ],
    hoithoai: {
      ctx: 'Luyện phản xạ: một người nước ngoài hỏi liên tục. Tắt "Hiện nghĩa tiếng Việt".', vai: 'Nghe – hiểu – chọn câu trả lời thật nhanh.', ai: '🗣️ Native speaker',
      luot: [
        T(['Hey! How\'s it going?', '', 'Chào! Dạo này thế nào?'], ['Pretty good, thanks! And you?', '', 'Khá tốt, cảm ơn! Còn bạn?', 'How\'s it going = How are you.'], ['It\'s going to the bank.', '', 'Hiểu sai nghĩa.'], ['I go.', '', 'Sai nghĩa.']),
        T(['Not bad. Whaddaya do for a living?', '', 'Ổn. Bạn làm nghề gì?'], ['I\'m an IT engineer.', '', 'Tôi là kỹ sư IT.', 'Whaddaya = What do you; for a living = kiếm sống.'], ['Sorry, I\'m living.', '', 'Hiểu sai.'], ['I do living.', '', 'Sai.']),
        T(['Cool. I\'m gonna grab a coffee. Wanna come?', '', 'Hay đấy. Tôi định đi mua cà phê. Đi cùng không?'], ['Sure, why not?', '', 'Được chứ!', 'gonna = going to; wanna = want to.'], ['Yes, I\'m coffee.', '', 'Sai nghĩa.'], ['Grab what?', '', 'grab a coffee = đi mua cà phê.']),
        T(['The place is just around the corner.', '', 'Quán ngay góc phố.'], ['Sorry, could you speak more slowly?', '', 'Xin lỗi, bạn nói chậm hơn được không?', 'Dùng câu cứu nguy khi cần.'], ['I don\'t corner.', '', 'Sai nghĩa.'], ['Around me.', '', 'Không phù hợp.'])
      ], ket: 'Em đã phản xạ với tiếng Anh tự nhiên và dùng câu cứu nguy đúng lúc.'
    },
    tom: ['Câu cứu nguy', 'Nghe từ khoá', 'Khẩu ngữ: gonna, wanna, whaddaya'], nguphap: 'Could you + V?; What does it mean?', phatam: 'Nối âm khẩu ngữ',
    loi: ['Im lặng khi không hiểu', 'Cố nghe từng chữ'], btvn: ['Nghe 1 video tiếng Anh ngắn có phụ đề, ghi 5 từ đã học', 'Học thuộc 6 câu cứu nguy', 'Luyện phản xạ 5 câu hỏi thường gặp']
  };

  /* ================= NGÀY 29 ================= */
  const d29 = {
    n: 29, ten: 'Mô phỏng tình huống liên tục', vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Ghép kỹ năng thành một chuyến đi trọn vẹn: sân bay → taxi → khách sạn → nhà hàng → mua sắm → điện thoại.',
    hoc: `${lv('Hôm nay không có từ mới.')}<h4>Kịch bản 1 ngày ở London</h4>${tbl(['Chặng', 'Câu chính'], ['<tr><td>✈️ Sân bay</td><td>Here is my passport. Window seat, please.</td></tr>', '<tr><td>🚕 Taxi</td><td>To the hotel, please. How long does it take?</td></tr>', '<tr><td>🏨 Khách sạn</td><td>I\'d like to check in. Is breakfast included?</td></tr>', '<tr><td>🍽️ Nhà hàng</td><td>A table for one. What do you recommend? The check, please.</td></tr>', '<tr><td>🛍️ Mua sắm</td><td>Can I try it on? Do you have a smaller size?</td></tr>', '<tr><td>☎️ Điện thoại</td><td>Hello, this is … Could I speak to …?</td></tr>'])}`,
    qs: [['mc', 'Ở khách sạn, nước nóng không có, em nói?', 'There is no hot water.', ['There are hot water no.', 'Hot water is fine.', 'I\'d like hot.'], 'There is no + N.']],
    hoithoai: {
      ctx: 'Một ngày ở London – mỗi lượt là một nơi khác nhau.', vai: 'Em là khách du lịch kiêm đi công tác.', ai: '🎭 Many roles',
      luot: [
        T(['(Airport) Window or aisle seat?', '', '(Sân bay) Ghế cửa sổ hay lối đi?'], ['Window seat, please.', '', 'Ghế cửa sổ.', 'Ngắn gọn.'], ['Aisle window.', '', 'Phải chọn một.'], ['Passport seat.', '', 'Sai.']),
        T(['(Taxi) Where to?', '', '(Taxi) Đi đâu?'], ['To the Park Hotel, please.', '', 'Đến khách sạn Park.', 'To + nơi.'], ['I park.', '', 'Sai.'], ['By hotel.', '', 'Dùng to.']),
        T(['(Hotel) Do you have a booking?', '', '(Khách sạn) Có đặt phòng không?'], ['Yes, under Nguyen. Is breakfast included?', '', 'Có, tên Nguyễn. Có gồm bữa sáng không?', 'Hai ý một lượt.'], ['Yes, I booking.', '', 'Sai ngữ pháp.'], ['No, I have booking.', '', 'Mâu thuẫn.']),
        T(['(Restaurant) What would you like?', '', '(Nhà hàng) Quý khách dùng gì?'], ['What do you recommend? Not too spicy, please.', '', 'Bạn gợi ý gì? Đừng cay quá nhé.', 'Hỏi gợi ý + yêu cầu.'], ['I\'d like recommend.', '', 'Sai.'], ['The menu is spicy.', '', 'Không tự nhiên.']),
        T(['(Shop) How is the size?', '', '(Cửa hàng) Cỡ thế nào?'], ['It\'s a bit small. Do you have a larger one?', '', 'Hơi chật. Có cỡ lớn hơn không?', 'larger one.'], ['It\'s more large.', '', 'larger.'], ['I\'d like a refund.', '', 'Chưa mua.']),
        T(['(Phone) Hello, Delta Tech.', '', '(Điện thoại) Delta Tech xin nghe.'], ['Hello, this is Nam. Could I speak to Mr. Brown?', '', 'Xin chào, tôi là Nam. Cho tôi gặp ông Brown.', 'This is …'], ['I am Nam, give Brown.', '', 'Thiếu lịch sự.'], ['Hold on.', '', 'Câu của người nghe máy.'])
      ], ket: '🎉 Em đã đi trọn một ngày ở London chỉ bằng tiếng Anh!'
    },
    tom: ['Mô phỏng liên tục 6 chặng'], nguphap: 'Ôn tổng hợp', phatam: 'Nói liền mạch',
    loi: ['Xem lại các lượt chọn sai'], btvn: ['Ghi âm toàn bộ kịch bản 1 ngày, tự đóng 2 vai', 'Ôn thẻ "Từ chưa nhớ" chuẩn bị thi cuối khoá']
  };

  /* ================= NGÀY 30 ================= */
  const d30 = {
    n: 30, ten: 'Kiểm tra cuối khoá và lộ trình A2', vocab: [], tong: 1, kt: { n: 30, min: 30 }, kinds: K,
    muc: 'Làm bài kiểm tra cuối khoá 30 câu, tự đánh giá 5 kỹ năng, chọn lộ trình tiếp theo.',
    hoc: `<h4>1. Bài kiểm tra cuối khoá</h4><p><b>30 câu · 30 phút</b> lấy từ toàn bộ 30 ngày. Điểm hệ 10 × 10 = điểm thang 100.</p>
      <h4>2. Tự đánh giá (thang 100)</h4>${tbl(['Kỹ năng', 'Tối đa', 'Tự kiểm tra'], ['<tr><td>Phát âm</td><td>25</td><td>Đọc đúng /θ/, âm cuối, -s/-ed, trọng âm? (tự ghi âm)</td></tr>', '<tr><td>Từ vựng</td><td>20</td><td>Nhớ bao nhiêu % thẻ từ?</td></tr>', '<tr><td>Ngữ pháp</td><td>20</td><td>to be, hiện tại đơn, quá khứ, can, will?</td></tr>', '<tr><td>Nghe hiểu</td><td>15</td><td>Hiểu câu tốc độ bình thường?</td></tr>', '<tr><td>Giao tiếp</td><td>20</td><td>Tự xử lý được nhà hàng, khách sạn, điện thoại, công việc?</td></tr>'])}
      <h4>3. Em đang ở đâu?</h4><p>Hoàn thành cấp 1, em có khoảng <b>300 từ</b> và các mẫu câu cơ bản, tương đương trình độ <b>A1</b> theo khung CEFR.</p>
      <h4>4. Lộ trình tiếp theo</h4>${tbl(['Mục tiêu', 'Gợi ý'], ['<tr><td>💬 Lên A2 (Cấp 2)</td><td>Học thì hiện tại hoàn thành, so sánh nhất, câu điều kiện loại 1; mỗi ngày nói 10–15 phút với gia sư AI.</td></tr>', '<tr><td>📜 Thi chứng chỉ</td><td>TOEIC nếu cần cho công việc; IELTS nếu đi du học, định cư (cần lên B1–B2 trước).</td></tr>', '<tr><td>🎧 Nghe nhiều</td><td>Mỗi ngày 15 phút podcast, video có phụ đề tiếng Anh.</td></tr>', '<tr><td>💼 Tiếng Anh chuyên ngành</td><td>Học từ vựng ngành của em (IT, ngân hàng, bán hàng), luyện viết email.</td></tr>'])}
      ${tip('🧾 Làm bài xong, vào <a href="#/tieng-anh/tien-do">Tiến độ</a> → Sao chép tóm tắt, dán cho gia sư AI để được tư vấn lộ trình riêng.')}`,
    qs: [['mc', 'She ___ to work yesterday.', 'didn\'t go', ['didn\'t went', 'don\'t go', 'not went'], 'didn\'t + V.'], ['mc', 'I\'m ___ engineer.', 'an', ['a', 'the a', 'no article'], 'an engineer.'], ['mc', 'There ___ two banks near here.', 'are', ['is', 'be', 'has'], 'Số nhiều.']],
    hoithoai: {
      ctx: 'Phần thi nói cuối khoá: giám khảo hỏi 5 câu.', vai: 'Trả lời đầy đủ, đúng ngữ pháp.', ai: '👩‍🏫 Examiner',
      luot: [
        T(['Please introduce yourself.', '', 'Hãy giới thiệu bản thân.'], ['My name is Nam. I\'m from Vietnam and I\'m an IT engineer.', '', 'Tôi tên Nam, đến từ Việt Nam, là kỹ sư IT.', 'Tên – quê – nghề.'], ['I name Nam, I engineer.', '', 'Thiếu is, am, an.'], ['Yourself is Nam.', '', 'Sai.']),
        T(['What do you usually do on weekends?', '', 'Cuối tuần em thường làm gì?'], ['I usually play football and visit my parents.', '', 'Tôi thường đá bóng và thăm bố mẹ.', 'usually + V.'], ['I usually playing football.', '', 'usually + V nguyên mẫu.'], ['I was weekend.', '', 'Sai.']),
        T(['What did you do yesterday?', '', 'Hôm qua em làm gì?'], ['I went to work and had dinner with my family.', '', 'Tôi đi làm và ăn tối với gia đình.', 'went, had.'], ['I go to work.', '', 'Quá khứ: went.'], ['I didn\'t went.', '', 'didn\'t + go.']),
        T(['Can you speak any other languages?', '', 'Em nói được ngôn ngữ nào khác không?'], ['I can speak Vietnamese and a little English.', '', 'Tôi nói tiếng Việt và một chút tiếng Anh.', 'can + V.'], ['I can speaks.', '', 'can + V nguyên mẫu.'], ['Yes, I do.', '', 'Câu hỏi Can.']),
        T(['What will you do next?', '', 'Tiếp theo em sẽ làm gì?'], ['I will study for A2 and practise speaking every day.', '', 'Tôi sẽ học lên A2 và luyện nói mỗi ngày.', 'will + V. Chúc mừng em hoàn thành khoá học!'], ['I will studied.', '', 'will + V nguyên mẫu.'], ['I next.', '', 'Câu cụt.'])
      ], ket: '🏆 Chúc mừng em đã hoàn thành Tiếng Anh Cấp 1!'
    },
    tom: ['Kiểm tra cuối khoá 30 câu', 'Tự đánh giá 5 kỹ năng', 'Lộ trình A2'], nguphap: 'Tổng ôn', phatam: 'Tổng ôn',
    loi: ['Xem lại các câu sai'], btvn: ['Sao chép tóm tắt tiến độ gửi gia sư AI', 'Chọn mục tiêu tiếp theo và bắt đầu ngay tuần sau']
  };

  window.PLT_EN.days.push(d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30);
})();

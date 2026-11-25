/* PLT-Edu · Tiếng Anh – Cấp 1 (A1): lộ trình 30 ngày, bảng âm IPA, Ngày 1–14
   Cấu trúc giống tiếng Trung: h = từ/câu, p = phiên âm IPA (giọng Mỹ), v = nghĩa. */
(function () {
  'use strict';
  const sp = PLT.LANG.sp;
  const w = (h, p, v, use, ex) => ({ h, p, v, use, ex });
  const L = (h, p, v) => ({ h, p, v });
  const T = (a, ok, ...bad) => ({ a: L(...a), o: [{ h: ok[0], p: ok[1], v: ok[2], ok: 1, f: ok[3] }].concat(bad.map((b) => ({ h: b[0], p: b[1], f: b[2] }))) });
  const tbl = (head, rows) => `<div class="zh-scroll"><table class="dtable full zh-tb"><tr>${head.map((x) => `<th>${x}</th>`).join('')}</tr>${rows.join('')}</table></div>`;
  const tip = (x) => `<div class="zh-tip">${x}</div>`;
  const ex = (h, p, v) => `<li>${h} ${sp(h)}<br>${p ? `<span class="zh-wp">${p}</span> – ` : ''}${v}</li>`;
  const F = (parts) => `<div class="zh-formula small">${parts.map((x) => (x === '+' || x === '→' ? `<i>${x}</i>` : `<span>${x}</span>`)).join('')}</div>`;
  const reads = (a) => `<div class="zh-read">${a.map(([h, p, v]) => `<button class="zh-rd" data-say="${h}"><b>${h}</b><span>${p}</span><small>${v}</small></button>`).join('')}</div>`;
  const K = ['meaning', 'listen', 'listenWord', 'hanzi', 'write', 'match'];

  const plan = [
    'Bảng chữ cái và đánh vần', 'Nguyên âm: ngắn, dài, đôi', 'Phụ âm khó và âm cuối', 'Trọng âm và ngữ điệu', 'Chào hỏi và giới thiệu bản thân', 'Số đếm, tuổi, số điện thoại', 'Ôn tập tuần 1 và kiểm tra',
    'Đại từ và động từ to be', 'Gia đình và tính từ sở hữu', 'Đồ vật: a/an, this/that, số nhiều', 'Thời gian: giờ, thứ, tháng', 'Thì hiện tại đơn: thói quen hằng ngày', 'Đồ ăn, thức uống và gọi món', 'Ôn tập tuần 2 và hội thoại tổng hợp',
    'Mua sắm và giá cả', 'Hỏi đường và vị trí', 'Giao thông và đi lại', 'Công việc và nghề nghiệp', 'Sở thích và khả năng (like, can)', 'Hiện tại tiếp diễn và quá khứ đơn', 'Kiểm tra tổng hợp và mô phỏng giao tiếp',
    'Làm quen và nói chuyện xã giao', 'Giao tiếp tại nhà hàng', 'Mua sắm quần áo', 'Khách sạn và sân bay', 'Điện thoại, email và tin nhắn', 'Tiếng Anh nơi công sở', 'Nghe hiểu và phản xạ', 'Mô phỏng tình huống liên tục', 'Kiểm tra cuối khoá và lộ trình A2'
  ].map((ten, i) => ({ n: i + 1, ten }));
  const stages = [
    { ten: '🌱 Giai đoạn 1 – Phát âm và nền tảng', tu: 1, den: 7 }, { ten: '🧱 Giai đoạn 2 – Câu cơ bản', tu: 8, den: 14 },
    { ten: '🏙️ Giai đoạn 3 – Giao tiếp đời sống', tu: 15, den: 21 }, { ten: '⚡ Giai đoạn 4 – Phản xạ và ứng dụng', tu: 22, den: 30 }
  ];

  /* ---------- Bảng âm IPA ---------- */
  const a = (k, c, p, g) => ({ k, c, p, g });
  const chart = {
    ten: 'Bảng âm IPA tiếng Anh',
    intro: '<p>IPA là bộ ký hiệu ghi <b>cách đọc</b> của từ (từ điển nào cũng có). Biết đọc IPA thì em tự đọc đúng mọi từ mới. Bấm vào từng ô để nghe từ ví dụ.</p><p class="muted small">Dòng chữ nhỏ là âm gần giống tiếng Việt, chỉ để tham khảo; hãy bắt chước giọng mẫu.</p>',
    phan: [
      { ten: 'Nguyên âm đơn', nhom: [
        { ten: 'Cặp ngắn – dài (dấu ː = kéo dài)', am: [a('/ɪ/', 'ship', '/ʃɪp/', 'i ngắn, dứt khoát'), a('/iː/', 'sheep', '/ʃiːp/', 'i kéo dài, cười mép'), a('/ʊ/', 'book', '/bʊk/', 'u ngắn'), a('/uː/', 'food', '/fuːd/', 'u dài, tròn môi'), a('/ɑː/', 'car', '/kɑːr/', 'a dài, mở miệng to'), a('/ɔː/', 'law', '/lɔː/', 'o dài')] },
        { ten: 'Nguyên âm khác', am: [a('/e/', 'bed', '/bed/', 'e'), a('/æ/', 'cat', '/kæt/', 'giữa a và e, bẹt miệng'), a('/ʌ/', 'cup', '/kʌp/', 'â ngắn'), a('/ə/', 'about', '/əˈbaʊt/', 'ơ nhẹ (âm yếu)'), a('/ɜː/', 'bird', '/bɜːrd/', 'ơ dài')] }
      ] },
      { ten: 'Nguyên âm đôi', nhom: [{ ten: 'Trượt từ âm này sang âm kia', am: [a('/eɪ/', 'day', '/deɪ/', 'ây'), a('/aɪ/', 'time', '/taɪm/', 'ai'), a('/ɔɪ/', 'boy', '/bɔɪ/', 'oi'), a('/aʊ/', 'house', '/haʊs/', 'ao'), a('/oʊ/', 'phone', '/foʊn/', 'âu (ôu)')] }] },
      { ten: 'Phụ âm khó với người Việt', nhom: [
        { ten: 'Âm “th” – đặt đầu lưỡi giữa hai hàm răng', am: [a('/θ/', 'think', '/θɪŋk/', 'thổi hơi, không rung cổ'), a('/ð/', 'this', '/ðɪs/', 'như /θ/ nhưng rung cổ')] },
        { ten: 'Âm xát và tắc xát', am: [a('/ʃ/', 'she', '/ʃiː/', 's uốn, tròn môi'), a('/ʒ/', 'television', '/ˈtelɪvɪʒən/', 'như /ʃ/ nhưng rung cổ'), a('/tʃ/', 'chair', '/tʃer/', 'ch bật mạnh'), a('/dʒ/', 'job', '/dʒɑːb/', 'gi rung'), a('/z/', 'zoo', '/zuː/', 'd rung như ong kêu'), a('/v/', 'very', '/ˈveri/', 'v, răng chạm môi dưới')] },
        { ten: 'Âm cuối – người Việt hay bỏ quên', am: [a('-s /s/', 'books', '/bʊks/', 'sau âm vô thanh'), a('-s /z/', 'dogs', '/dɔːɡz/', 'sau âm hữu thanh'), a('-es /ɪz/', 'buses', '/ˈbʌsɪz/', 'sau s, x, sh, ch'), a('-t', 'cat', '/kæt/', 'bật nhẹ cuối từ'), a('-d', 'bed', '/bed/', 'bật nhẹ cuối từ'), a('-l', 'school', '/skuːl/', 'cong lưỡi chạm lợi')] }
      ] }
    ]
  };

  /* ================= NGÀY 1 ================= */
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const d1 = {
    n: 1, ten: 'Bảng chữ cái và đánh vần', kinds: K,
    muc: 'Đọc đúng tên 26 chữ cái, đánh vần tên mình, dùng 11 từ giao tiếp đầu tiên.',
    hoc: `<h4>1. 26 chữ cái (bấm để nghe)</h4><div class="zh-read">${letters.map((x) => `<button class="zh-rd" data-say="${x}"><b>${x} ${x.toLowerCase()}</b></button>`).join('')}</div>
      <h4>2. Những chữ người Việt hay đọc sai</h4>${tbl(['Chữ', 'Đọc đúng', 'Hay đọc sai thành'], [['E', '/iː/ (i)', '"e"'], ['I', '/aɪ/ (ai)', '"i"'], ['A', '/eɪ/ (ây)', '"a"'], ['G', '/dʒiː/ (gi)', '"giê"'], ['J', '/dʒeɪ/ (giây)', '"gi"'], ['H', '/eɪtʃ/ (ây-ch)', '"hát"'], ['R', '/ɑːr/ (a-r)', '"e-rờ"'], ['W', '/ˈdʌbəljuː/ (đấp-bồ-liu)', '"vê kép"'], ['Y', '/waɪ/ (oai)', '"i dài"'], ['Z', '/ziː/ (di, giọng Mỹ)', '"dét"']].map(([c, r, s]) => `<tr><td><b>${c}</b> ${sp(c)}</td><td>${r}</td><td>${s}</td></tr>`))}
      ${tip('🔑 Ghi nhớ cặp dễ nhầm: <b>E – I</b> (i – ai), <b>G – J</b> (gi – giây), <b>A – R</b> (ây – a). Khi đánh vần qua điện thoại, người ta rất hay hỏi lại các chữ này.')}
      <h4>3. Đánh vần tên</h4><ul>${ex('How do you spell your name?', '/haʊ duː juː spel jʊr neɪm/', 'Tên bạn đánh vần thế nào?')}${ex('N-A-M. Nam.', '', 'N – A – M. Nam.')}${ex('Could you spell that, please?', '', 'Bạn đánh vần lại giúp được không?')}</ul>`,
    vocab: [
      w('hello', '/həˈloʊ/', 'xin chào', 'Chào mọi lúc, lịch sự.', ['Hello, I am Nam.', '/həˈloʊ aɪ æm nɑːm/', 'Xin chào, tôi là Nam.']),
      w('hi', '/haɪ/', 'chào (thân mật)', 'Dùng với bạn bè.', ['Hi, Linh!', '/haɪ lɪn/', 'Chào Linh!']),
      w('name', '/neɪm/', 'tên', '', ['My name is Lan.', '/maɪ neɪm ɪz lɑːn/', 'Tên tôi là Lan.']),
      w('spell', '/spel/', 'đánh vần', '', ['How do you spell it?', '/haʊ duː juː spel ɪt/', 'Đánh vần thế nào?']),
      w('letter', '/ˈletər/', 'chữ cái; lá thư', '', ['There are 26 letters.', '/ðer ɑːr ˈtwenti sɪks ˈletərz/', 'Có 26 chữ cái.']),
      w('please', '/pliːz/', 'làm ơn, vui lòng', 'Đặt đầu hoặc cuối câu nhờ vả.', ['Spell it, please.', '/spel ɪt pliːz/', 'Làm ơn đánh vần.']),
      w('thank you', '/ˈθæŋk juː/', 'cảm ơn', 'Thân mật: thanks.', ['Thank you very much!', '/ˈθæŋk juː ˈveri mʌtʃ/', 'Cảm ơn rất nhiều!']),
      w('sorry', '/ˈsɑːri/', 'xin lỗi', 'Hỏi lại khi chưa nghe rõ: Sorry?', ['Sorry, I am late.', '/ˈsɑːri aɪ æm leɪt/', 'Xin lỗi, tôi đến muộn.']),
      w('yes', '/jes/', 'vâng, có', '', ['Yes, please.', '/jes pliːz/', 'Vâng, làm ơn.']),
      w('no', '/noʊ/', 'không', '', ['No, thank you.', '/noʊ ˈθæŋk juː/', 'Không, cảm ơn.']),
      w('goodbye', '/ɡʊdˈbaɪ/', 'tạm biệt', 'Thân mật: bye.', ['Goodbye, see you!', '/ɡʊdˈbaɪ siː juː/', 'Tạm biệt, gặp lại nhé!'])
    ],
    qs: [
      ['hear', 'E', 'E', ['I', 'A', 'Y'], 'Chữ E đọc /iː/.', 'Nghe và chọn chữ cái đúng.'],
      ['hear', 'I', 'I', ['E', 'Y', 'A'], 'Chữ I đọc /aɪ/.', 'Nghe và chọn chữ cái đúng.'],
      ['hear', 'G', 'G', ['J', 'Z', 'C'], 'G đọc /dʒiː/, J đọc /dʒeɪ/.', 'Nghe và chọn chữ cái đúng.'],
      ['hear', 'R', 'R', ['A', 'H', 'L'], 'R đọc /ɑːr/.', 'Nghe và chọn chữ cái đúng.'],
      ['mc', 'Chữ <b>W</b> đọc là?', '/ˈdʌbəljuː/', ['/viː/', '/waɪ/', '/ˈdʌbəlviː/'], 'W = double U.'],
      ['mc', 'Hỏi “Tên bạn đánh vần thế nào?”', 'How do you spell your name?', ['What is spell your name?', 'How you spell name?', 'Do you name spell?'], 'How do you spell …?'],
      ['mc', 'Người khác nói “Thank you!”, em đáp?', 'You\'re welcome.', ['Sorry.', 'Goodbye.', 'No.'], 'Đáp lời cảm ơn: You\'re welcome.'],
      ['fill', 'Viết từ còn thiếu: “No, ____ you.” (Không, cảm ơn)', 'thank', 'No, thank you.']
    ],
    hoithoai: {
      ctx: 'Em đến quầy lễ tân một trung tâm tiếng Anh để đăng ký học. Cô lễ tân người Mỹ tên Emma.', vai: 'Emma hỏi, em trả lời.', ai: '👩 Emma',
      luot: [
        T(['Hello! Welcome!', '/həˈloʊ ˈwelkəm/', 'Xin chào! Chào mừng!'], ['Hello!', '/həˈloʊ/', 'Xin chào!', 'Chào lại lịch sự.'], ['Goodbye!', '/ɡʊdˈbaɪ/', 'Vừa đến đã tạm biệt?'], ['Sorry!', '/ˈsɑːri/', 'Không có gì phải xin lỗi.']),
        T(['What is your name?', '/wʌt ɪz jʊr neɪm/', 'Tên bạn là gì?'], ['My name is Nam.', '/maɪ neɪm ɪz nɑːm/', 'Tên tôi là Nam.', 'My name is + tên.'], ['Your name is Nam.', '/jʊr neɪm ɪz nɑːm/', 'Your = của bạn. Nói về mình dùng My.'], ['Yes, please.', '/jes pliːz/', 'Chưa trả lời câu hỏi.']),
        T(['How do you spell it?', '/haʊ duː juː spel ɪt/', 'Đánh vần thế nào?'], ['N-A-M.', '/en eɪ em/', 'N – A – M.', 'Đọc tên chữ cái: N /en/, A /eɪ/, M /em/.'], ['Nam, Nam.', '/nɑːm/', 'Cô hỏi đánh vần từng chữ.'], ['No, thank you.', '/noʊ ˈθæŋk juː/', 'Lạc đề.']),
        T(['Thank you, Nam!', '/ˈθæŋk juː nɑːm/', 'Cảm ơn Nam!'], ['You\'re welcome. Goodbye!', '/jʊr ˈwelkəm ɡʊdˈbaɪ/', 'Không có gì. Tạm biệt!', 'Đáp lời cảm ơn rồi chào.'], ['Thank you, Emma! Sorry!', '/ˈθæŋk juː ˈemə ˈsɑːri/', 'Không cần xin lỗi.'], ['Hi!', '/haɪ/', 'Hi dùng khi gặp, không dùng khi chia tay.'])
      ], ket: 'Em đã chào hỏi, nói tên và đánh vần bằng tiếng Anh!'
    },
    tom: ['26 chữ cái và các chữ dễ nhầm', 'Đánh vần tên', '11 từ giao tiếp đầu tiên'], nguphap: 'My name is …; How do you spell …?', phatam: 'Tên chữ cái E/I, G/J, A/R, W, Y, Z',
    loi: ['Đọc E thành "e", I thành "i"', 'Nhầm G và J', 'Đọc W là "vê kép"'], btvn: ['Đánh vần to tên và họ của em 5 lần', 'Hát bài ABC song 1 lần', 'Đánh vần tên 3 người trong nhà']
  };

  /* ================= NGÀY 2 ================= */
  const d2 = {
    n: 2, ten: 'Nguyên âm: ngắn, dài, đôi', kinds: K,
    muc: 'Phân biệt nguyên âm ngắn – dài (ship/sheep), đọc đúng /æ/, /ʌ/, /ə/ và 5 nguyên âm đôi.',
    hoc: `<h4>1. Ký hiệu ː nghĩa là kéo dài</h4><p>Nguyên âm dài đọc <b>dài hơn và căng hơn</b>. Đọc sai độ dài là sai nghĩa:</p>${tbl(['Ngắn', 'Dài', 'Nghe'], [['ship /ʃɪp/ (tàu)', 'sheep /ʃiːp/ (con cừu)', 'ship|sheep'], ['full /fʊl/ (đầy)', 'fool /fuːl/ (kẻ ngốc)', 'full|fool'], ['hut /hʌt/ (túp lều)', 'heart /hɑːrt/ (trái tim)', 'hut|heart']].map(([x, y, s]) => `<tr><td>${x}</td><td>${y}</td><td><button class="zh-say" data-say="${s}">🔊</button></td></tr>`))}
      <h4>2. Ba âm khó: /æ/, /ʌ/, /ə/</h4><ul><li><b>/æ/</b> cat, bad: mở miệng như đọc "a" nhưng kéo khoé môi sang hai bên như đọc "e". ${sp('cat|bad|apple')}</li><li><b>/ʌ/</b> cup, bus: gần "â" ngắn. ${sp('cup|bus|love')}</li><li><b>/ə/</b> about, banana: âm "ơ" rất nhẹ, xuất hiện ở âm tiết <b>không nhấn</b>. Đây là âm phổ biến nhất tiếng Anh. ${sp('about|banana|teacher')}</li></ul>
      <h4>3. Nguyên âm đôi: trượt từ âm này sang âm kia</h4>${reads([['day', '/eɪ/', 'ây'], ['time', '/aɪ/', 'ai'], ['boy', '/ɔɪ/', 'oi'], ['house', '/haʊs/', 'ao'], ['phone', '/oʊ/', 'âu']])}
      ${tip('⚠️ Người Việt hay đọc <b>phone</b> thành "phôn". Đúng là /foʊn/: "phâu-n", kết thúc bằng âm /n/ rõ.')}`,
    vocab: [
      w('ship', '/ʃɪp/', 'tàu thuỷ', 'i ngắn.', ['A big ship.', '/ə bɪɡ ʃɪp/', 'Một con tàu lớn.']),
      w('sheep', '/ʃiːp/', 'con cừu', 'i dài.', ['The sheep is white.', '/ðə ʃiːp ɪz waɪt/', 'Con cừu màu trắng.']),
      w('bed', '/bed/', 'cái giường', '', ['Go to bed.', '/ɡoʊ tə bed/', 'Đi ngủ.']),
      w('bad', '/bæd/', 'tệ, xấu', '/æ/ bẹt miệng.', ['Not bad!', '/nɑːt bæd/', 'Không tệ!']),
      w('cup', '/kʌp/', 'cái cốc, tách', '', ['A cup of tea.', '/ə kʌp əv tiː/', 'Một tách trà.']),
      w('car', '/kɑːr/', 'ô tô', 'a dài.', ['My car is red.', '/maɪ kɑːr ɪz red/', 'Xe tôi màu đỏ.']),
      w('book', '/bʊk/', 'quyển sách', 'u ngắn.', ['I like this book.', '/aɪ laɪk ðɪs bʊk/', 'Tôi thích cuốn sách này.']),
      w('food', '/fuːd/', 'đồ ăn', 'u dài.', ['The food is good.', '/ðə fuːd ɪz ɡʊd/', 'Đồ ăn ngon.']),
      w('day', '/deɪ/', 'ngày', '/eɪ/.', ['Have a nice day!', '/hæv ə naɪs deɪ/', 'Chúc một ngày tốt lành!']),
      w('time', '/taɪm/', 'thời gian', '/aɪ/.', ['What time is it?', '/wʌt taɪm ɪz ɪt/', 'Mấy giờ rồi?']),
      w('house', '/haʊs/', 'ngôi nhà', '/aʊ/.', ['This is my house.', '/ðɪs ɪz maɪ haʊs/', 'Đây là nhà tôi.']),
      w('phone', '/foʊn/', 'điện thoại', '/oʊ/, nhớ âm /n/ cuối.', ['Where is my phone?', '/wer ɪz maɪ foʊn/', 'Điện thoại của tôi đâu?'])
    ],
    qs: [
      ['hear', 'sheep', 'sheep', ['ship'], 'sheep /ʃiːp/: i dài.', 'Nghe: ship hay sheep?'],
      ['hear', 'ship', 'ship', ['sheep'], 'ship /ʃɪp/: i ngắn.', 'Nghe: ship hay sheep?'],
      ['hear', 'full', 'full', ['fool'], 'full /fʊl/: u ngắn.', 'Nghe: full hay fool?'],
      ['mc', 'Ký hiệu ː trong /iː/ nghĩa là?', 'Âm kéo dài', ['Âm nhấn mạnh', 'Âm câm', 'Âm mũi'], 'ː = dài.'],
      ['mc', 'Âm phổ biến nhất trong tiếng Anh, đọc "ơ" rất nhẹ, là?', '/ə/', ['/æ/', '/ʌ/', '/ɑː/'], '/ə/ (schwa) ở âm tiết không nhấn.'],
      ['mc', '“phone” đọc đúng là?', '/foʊn/', ['/fɔːn/', '/fən/', '/poʊn/'], 'Nguyên âm đôi /oʊ/.'],
      ['mc', 'Từ nào chứa âm /æ/?', 'bad', ['bed', 'book', 'car'], 'bad /bæd/.']
    ],
    hoithoai: {
      ctx: 'Em đi chợ đồ cũ cùng bạn Mỹ tên Tom và nói về những món đồ thấy được.', vai: 'Tom nói, em đáp. Chú ý đọc đúng nguyên âm dài – ngắn.', ai: '👨 Tom',
      luot: [
        T(['Look! A toy ship!', '/lʊk ə tɔɪ ʃɪp/', 'Nhìn kìa! Một con tàu đồ chơi!'], ['Yes! It is a nice ship.', '/jes ɪt ɪz ə naɪs ʃɪp/', 'Ừ! Con tàu đẹp đấy.', 'ship – i ngắn.'], ['Yes! It is a nice sheep.', '/jes ɪt ɪz ə naɪs ʃiːp/', 'sheep là con cừu – đọc dài sai nghĩa!'], ['No, it is a car.', '/noʊ ɪt ɪz ə kɑːr/', 'Đó là con tàu mà.']),
        T(['Do you like this book?', '/duː juː laɪk ðɪs bʊk/', 'Bạn thích cuốn sách này không?'], ['Yes, I like it.', '/jes aɪ laɪk ɪt/', 'Có, tôi thích.', 'Câu trả lời ngắn gọn, tự nhiên.'], ['Yes, I like food.', '/jes aɪ laɪk fuːd/', 'Tom hỏi về sách, không phải đồ ăn.'], ['Bad day!', '/bæd deɪ/', 'Lạc đề.']),
        T(['How is your day?', '/haʊ ɪz jʊr deɪ/', 'Hôm nay của bạn thế nào?'], ['Not bad, thank you!', '/nɑːt bæd ˈθæŋk juː/', 'Không tệ, cảm ơn!', 'Not bad = khá ổn.'], ['It is a house.', '/ɪt ɪz ə haʊs/', 'Lạc đề.'], ['Time, please.', '/taɪm pliːz/', 'Câu không phù hợp.']),
        T(['Oh, what time is it?', '/oʊ wʌt taɪm ɪz ɪt/', 'Ồ, mấy giờ rồi?'], ['Sorry, my phone is in the car.', '/ˈsɑːri maɪ foʊn ɪz ɪn ðə kɑːr/', 'Xin lỗi, điện thoại tôi để trong xe.', 'phone /foʊn/, car /kɑːr/ – đọc đúng nguyên âm.'], ['Yes, it is time.', '/jes ɪt ɪz taɪm/', 'Chưa trả lời câu hỏi.'], ['It is a cup.', '/ɪt ɪz ə kʌp/', 'Lạc đề.'])
      ], ket: 'Em đã dùng đúng ship – sheep, book – food, car, phone trong hội thoại.'
    },
    tom: ['Nguyên âm ngắn – dài', '/æ/, /ʌ/, /ə/', '5 nguyên âm đôi'], nguphap: 'It is a …; Do you like …?', phatam: '/ɪ/–/iː/, /ʊ/–/uː/, /æ/, /ʌ/, /ə/, /eɪ/ /aɪ/ /ɔɪ/ /aʊ/ /oʊ/',
    loi: ['Không phân biệt ship – sheep', 'Đọc phone thành "phôn"', 'Đọc /æ/ thành "a"'], btvn: ['Đọc 10 lần mỗi cặp: ship/sheep, full/fool', 'Ghi âm 12 từ mới, so với giọng mẫu', 'Tìm 3 từ có âm /ə/ trong bài']
  };

  /* ================= NGÀY 3 ================= */
  const d3 = {
    n: 3, ten: 'Phụ âm khó và âm cuối', kinds: K,
    muc: 'Phát âm đúng /θ/ /ð/ /ʃ/ /tʃ/ /dʒ/ /z/ /v/, không nuốt âm cuối, đọc đúng đuôi -s/-es.',
    hoc: `<h4>1. Âm "th": đặt đầu lưỡi giữa hai hàm răng</h4><ul><li><b>/θ/</b> (không rung cổ): think, three, thank. ${sp('think|three|thank you')}</li><li><b>/ð/</b> (rung cổ): this, that, mother. ${sp('this|that|mother')}</li></ul>${tip('⚠️ Người Việt hay đọc three thành "tri" hoặc "sri", this thành "đít". Hãy thè nhẹ đầu lưỡi ra giữa răng rồi thổi hơi.')}
      <h4>2. Các âm xát khác</h4>${tbl(['Âm', 'Ví dụ', 'Mẹo', 'Nghe'], [['/ʃ/', 'she, shop', 'tròn môi, "suỵt"', 'she|shop'], ['/tʃ/', 'chair, teacher', 'ch bật mạnh', 'chair|teacher'], ['/dʒ/', 'job, orange', 'gi rung', 'job|orange'], ['/z/', 'zoo, is', 'rung như ong kêu', 'zoo|is'], ['/v/', 'very, five', 'răng trên chạm môi dưới', 'very|five']].map(([x, y, z, s]) => `<tr><td><b>${x}</b></td><td>${y}</td><td>${z}</td><td><button class="zh-say" data-say="${s}">🔊</button></td></tr>`))}
      <h4>3. Đừng nuốt âm cuối!</h4><p>Tiếng Việt không bật âm cuối, nên người Việt hay đọc <b>bus</b> thành "bớt", <b>job</b> thành "giốp". Tiếng Anh phải <b>bật nhẹ âm cuối</b>: bus /bʌs/, job /dʒɑːb/, five /faɪv/. ${sp('bus|job|five')}</p>
      <h4>4. Đuôi -s / -es có 3 cách đọc</h4>${tbl(['Cách đọc', 'Khi nào', 'Ví dụ'], ['<tr><td>/s/</td><td>sau âm vô thanh p, t, k, f</td><td>books, cats</td></tr>', '<tr><td>/z/</td><td>sau âm hữu thanh và nguyên âm</td><td>dogs, boys</td></tr>', '<tr><td>/ɪz/</td><td>sau s, x, z, sh, ch, ge</td><td>buses, boxes</td></tr>'])}`,
    vocab: [
      w('think', '/θɪŋk/', 'nghĩ', '/θ/ đầu lưỡi giữa răng.', ['I think so.', '/aɪ θɪŋk soʊ/', 'Tôi nghĩ vậy.']),
      w('three', '/θriː/', 'số 3', '', ['Three cups, please.', '/θriː kʌps pliːz/', 'Ba cốc, làm ơn.']),
      w('this', '/ðɪs/', 'cái này', '/ð/ rung cổ.', ['This is my bag.', '/ðɪs ɪz maɪ bæɡ/', 'Đây là túi của tôi.']),
      w('mother', '/ˈmʌðər/', 'mẹ', '', ['My mother is a teacher.', '/maɪ ˈmʌðər ɪz ə ˈtiːtʃər/', 'Mẹ tôi là giáo viên.']),
      w('she', '/ʃiː/', 'cô ấy', '', ['She is my sister.', '/ʃiː ɪz maɪ ˈsɪstər/', 'Cô ấy là chị tôi.']),
      w('chair', '/tʃer/', 'cái ghế', '', ['Sit on the chair.', '/sɪt ɑːn ðə tʃer/', 'Ngồi lên ghế.']),
      w('job', '/dʒɑːb/', 'công việc', 'Bật /b/ cuối.', ['I like my job.', '/aɪ laɪk maɪ dʒɑːb/', 'Tôi thích công việc của mình.']),
      w('very', '/ˈveri/', 'rất', '', ['Very good!', '/ˈveri ɡʊd/', 'Rất tốt!']),
      w('zoo', '/zuː/', 'sở thú', '', ['We go to the zoo.', '/wiː ɡoʊ tə ðə zuː/', 'Chúng tôi đi sở thú.']),
      w('bus', '/bʌs/', 'xe buýt', 'Không đọc "bớt".', ['I take the bus.', '/aɪ teɪk ðə bʌs/', 'Tôi đi xe buýt.']),
      w('five', '/faɪv/', 'số 5', 'Bật /v/ cuối.', ['Five dollars.', '/faɪv ˈdɑːlərz/', 'Năm đô la.']),
      w('box', '/bɑːks/', 'cái hộp', 'Số nhiều: boxes /ˈbɑːksɪz/.', ['Two boxes, please.', '/tuː ˈbɑːksɪz pliːz/', 'Hai hộp, làm ơn.'])
    ],
    qs: [
      ['mc', 'Khi đọc /θ/ trong “think”, đầu lưỡi đặt ở đâu?', 'Giữa hai hàm răng', ['Sau răng dưới', 'Cong lên vòm miệng', 'Chạm môi trên'], 'Thè nhẹ lưỡi giữa răng rồi thổi hơi.'],
      ['mc', '“dogs” đọc đuôi -s là?', '/z/', ['/s/', '/ɪz/', 'Không đọc'], 'g là âm hữu thanh → /z/.'],
      ['mc', '“buses” đọc đuôi -es là?', '/ɪz/', ['/s/', '/z/', 'Không đọc'], 'Sau s → /ɪz/.'],
      ['mc', '“books” đọc đuôi -s là?', '/s/', ['/z/', '/ɪz/', 'Không đọc'], 'k là âm vô thanh → /s/.'],
      ['hear', 'three', 'three', ['tree', 'free'], 'three /θriː/ – số 3.', 'Nghe: three, tree hay free?'],
      ['hear', 'very', 'very', ['berry'], 'very /ˈveri/ – /v/ răng chạm môi.', 'Nghe: very hay berry?'],
      ['mc', 'Người Việt hay mắc lỗi gì với từ “bus”?', 'Nuốt âm /s/ cuối, đọc thành “bớt”', ['Đọc quá dài', 'Đọc sai /b/', 'Không có lỗi'], 'Nhớ bật âm cuối.']
    ],
    hoithoai: {
      ctx: 'Em gặp lại Emma ở trung tâm tiếng Anh, cô giới thiệu mẹ và đồ đạc trong phòng học.', vai: 'Emma nói, em đáp. Chú ý âm th và âm cuối.', ai: '👩 Emma',
      luot: [
        T(['This is my mother.', '/ðɪs ɪz maɪ ˈmʌðər/', 'Đây là mẹ tôi.'], ['Nice to meet you!', '/naɪs tə miːt juː/', 'Rất vui được gặp bác!', 'Câu chào khi được giới thiệu.'], ['This is my mother.', '/ðɪs ɪz maɪ ˈmʌðər/', 'Lặp lại câu của Emma.'], ['She is a zoo.', '/ʃiː ɪz ə zuː/', '😄 Sai nghĩa.']),
        T(['She is a teacher. What is your job?', '/ʃiː ɪz ə ˈtiːtʃər wʌt ɪz jʊr dʒɑːb/', 'Mẹ là giáo viên. Bạn làm nghề gì?'], ['I work in a bank.', '/aɪ wɜːrk ɪn ə bæŋk/', 'Tôi làm ở ngân hàng.', 'work = làm việc; bank = ngân hàng.'], ['I think so.', '/aɪ θɪŋk soʊ/', 'Không trả lời câu hỏi.'], ['Five boxes.', '/faɪv ˈbɑːksɪz/', 'Lạc đề.']),
        T(['How many chairs are there?', '/haʊ ˈmeni tʃerz ɑːr ðer/', 'Có bao nhiêu cái ghế?'], ['Three chairs.', '/θriː tʃerz/', 'Ba cái ghế.', 'three /θriː/, chairs /tʃerz/ – đuôi /z/.'], ['Tree chair.', '/triː tʃer/', 'three phải có /θ/; chairs phải có -s.'], ['Very chair.', '/ˈveri tʃer/', 'Sai nghĩa.']),
        T(['Thank you! See you!', '/ˈθæŋk juː siː juː/', 'Cảm ơn! Gặp lại nhé!'], ['Thank you! Bye!', '/ˈθæŋk juː baɪ/', 'Cảm ơn! Tạm biệt!', 'Nhớ đọc thank với /θ/.'], ['Sank you!', '/sæŋk juː/', 'sank là "đã chìm" – phải đọc /θ/.'], ['Hello!', '/həˈloʊ/', 'Đang chia tay.'])
      ], ket: 'Em đã nói đúng âm th, âm cuối và đuôi -s.'
    },
    tom: ['/θ/ và /ð/', '/ʃ/ /tʃ/ /dʒ/ /z/ /v/', 'Bật âm cuối', '3 cách đọc đuôi -s/-es'], nguphap: 'Số nhiều thêm -s/-es; How many …?', phatam: '/θ/ /ð/ /ʃ/ /tʃ/ /dʒ/ /z/ /v/, âm cuối, -s/-es',
    loi: ['Đọc three thành "tri"', 'Nuốt âm cuối (bus, job, five)', 'Đọc mọi đuôi -s là /s/'], btvn: ['Đọc 10 lần: think, three, this, mother', 'Ghi âm 5 từ có âm cuối, nghe lại xem có bật âm chưa', 'Chia 5 danh từ sang số nhiều và đọc to']
  };

  /* ================= NGÀY 4 ================= */
  const d4 = {
    n: 4, ten: 'Trọng âm và ngữ điệu', kinds: K,
    muc: 'Nhấn đúng trọng âm từ, lên giọng ở câu hỏi Yes/No, xuống giọng ở câu hỏi Wh-, nối âm cơ bản.',
    hoc: `<h4>1. Trọng âm từ (dấu ˈ đứng trước âm tiết được nhấn)</h4><p>Âm tiết nhấn đọc <b>to hơn, dài hơn, cao hơn</b>; âm tiết không nhấn thường thành /ə/.</p>${tbl(['Từ', 'IPA', 'Nhấn', 'Nghe'], [['teacher', '/ˈtiːtʃər/', 'TEA-cher'], ['computer', '/kəmˈpjuːtər/', 'com-PU-ter'], ['hotel', '/hoʊˈtel/', 'ho-TEL'], ['banana', '/bəˈnænə/', 'ba-NA-na'], ['family', '/ˈfæməli/', 'FA-mi-ly']].map(([x, y, z]) => `<tr><td>${x}</td><td>${y}</td><td><b>${z}</b></td><td>${sp(x)}</td></tr>`))}
      ${tip('⚠️ Người Việt hay đọc từng âm tiết đều nhau như tiếng Việt ("com-pu-tơ"). Hãy nhấn rõ một âm tiết và đọc lướt các âm còn lại.')}
      <h4>2. Ngữ điệu câu hỏi</h4><ul><li><b>Câu hỏi Yes/No</b> → lên giọng ở cuối ↗: Are you a student? ${sp('Are you a student?')}</li><li><b>Câu hỏi Wh-</b> (what, where, how…) → xuống giọng ↘: What is your name? ${sp('What is your name?')}</li></ul>
      <h4>3. Nối âm: phụ âm cuối + nguyên âm đầu</h4><ul><li>an apple → "a-napple" ${sp('an apple')}</li><li>check it out → "che-ki-tout" ${sp('check it out')}</li></ul>`,
    vocab: [
      w('teacher', '/ˈtiːtʃər/', 'giáo viên', 'Nhấn âm 1.', ['She is a teacher.', '/ʃiː ɪz ə ˈtiːtʃər/', 'Cô ấy là giáo viên.']),
      w('student', '/ˈstuːdənt/', 'học sinh, sinh viên', 'Nhấn âm 1.', ['I am a student.', '/aɪ æm ə ˈstuːdənt/', 'Tôi là sinh viên.']),
      w('computer', '/kəmˈpjuːtər/', 'máy tính', 'Nhấn âm 2.', ['My computer is new.', '/maɪ kəmˈpjuːtər ɪz nuː/', 'Máy tính của tôi mới.']),
      w('hotel', '/hoʊˈtel/', 'khách sạn', 'Nhấn âm 2.', ['The hotel is near.', '/ðə hoʊˈtel ɪz nɪr/', 'Khách sạn ở gần.']),
      w('banana', '/bəˈnænə/', 'quả chuối', 'Nhấn âm 2.', ['I like bananas.', '/aɪ laɪk bəˈnænəz/', 'Tôi thích chuối.']),
      w('coffee', '/ˈkɔːfi/', 'cà phê', 'Nhấn âm 1.', ['A coffee, please.', '/ə ˈkɔːfi pliːz/', 'Một cà phê, làm ơn.']),
      w('family', '/ˈfæməli/', 'gia đình', 'Nhấn âm 1.', ['I love my family.', '/aɪ lʌv maɪ ˈfæməli/', 'Tôi yêu gia đình tôi.']),
      w('English', '/ˈɪŋɡlɪʃ/', 'tiếng Anh', 'Nhấn âm 1, viết hoa.', ['I study English.', '/aɪ ˈstʌdi ˈɪŋɡlɪʃ/', 'Tôi học tiếng Anh.']),
      w('important', '/ɪmˈpɔːrtənt/', 'quan trọng', 'Nhấn âm 2.', ['It is very important.', '/ɪt ɪz ˈveri ɪmˈpɔːrtənt/', 'Điều đó rất quan trọng.']),
      w('again', '/əˈɡen/', 'lại, lần nữa', 'Nhấn âm 2.', ['Say it again, please.', '/seɪ ɪt əˈɡen pliːz/', 'Làm ơn nói lại.']),
      w('Vietnam', '/ˌviːetˈnɑːm/', 'Việt Nam', 'Nhấn âm cuối.', ['I am from Vietnam.', '/aɪ æm frʌm ˌviːetˈnɑːm/', 'Tôi đến từ Việt Nam.'])
    ],
    qs: [
      ['mc', '“computer” nhấn âm tiết nào?', 'Âm 2: com-PU-ter', ['Âm 1: COM-pu-ter', 'Âm 3: com-pu-TER', 'Đọc đều nhau'], '/kəmˈpjuːtər/.'],
      ['mc', '“hotel” nhấn âm tiết nào?', 'Âm 2: ho-TEL', ['Âm 1: HO-tel', 'Đọc đều nhau', 'Không nhấn'], '/hoʊˈtel/.'],
      ['mc', '“teacher” nhấn âm tiết nào?', 'Âm 1: TEA-cher', ['Âm 2: tea-CHER', 'Đọc đều nhau', 'Không nhấn'], '/ˈtiːtʃər/.'],
      ['mc', 'Câu “Are you a student?” cuối câu giọng thế nào?', 'Lên giọng ↗', ['Xuống giọng ↘', 'Giữ ngang', 'Ngắt hẳn'], 'Câu hỏi Yes/No lên giọng.'],
      ['mc', 'Câu “Where is the hotel?” cuối câu giọng thế nào?', 'Xuống giọng ↘', ['Lên giọng ↗', 'Giữ ngang', 'Hét to'], 'Câu hỏi Wh- xuống giọng.'],
      ['mc', 'Dấu ˈ trong /ˈfæməli/ cho biết?', 'Âm tiết ngay sau nó được nhấn', ['Âm kéo dài', 'Âm câm', 'Chỗ ngắt câu'], 'ˈ đứng trước âm tiết nhấn.'],
      ['hear', 'an apple', 'an apple (nối: a-napple)', ['a napple', 'and apple'], 'Phụ âm cuối nối với nguyên âm đầu.', 'Nghe và chọn cụm từ đúng.']
    ],
    hoithoai: {
      ctx: 'Em ngồi cạnh một khách nước ngoài trong quán cà phê, anh ấy bắt chuyện.', vai: 'Anh khách hỏi, em đáp. Nhớ nhấn đúng trọng âm.', ai: '👨 David',
      luot: [
        T(['Hi! Is this coffee good?', '/haɪ ɪz ðɪs ˈkɔːfi ɡʊd/', 'Chào! Cà phê ở đây ngon không?'], ['Yes, it is very good!', '/jes ɪt ɪz ˈveri ɡʊd/', 'Có, rất ngon!', 'Trả lời câu hỏi Yes/No.'], ['What is coffee?', '/wʌt ɪz ˈkɔːfi/', 'Câu hỏi lạc đề.'], ['Banana, please.', '/bəˈnænə pliːz/', 'Không liên quan.']),
        T(['Are you a student?', '/ɑːr juː ə ˈstuːdənt/', 'Bạn là sinh viên à?'], ['No, I am not. I work with computers.', '/noʊ aɪ æm nɑːt aɪ wɜːrk wɪð kəmˈpjuːtərz/', 'Không, tôi làm việc với máy tính.', 'Nhấn com-PU-ters.'], ['Yes, I am a hotel.', '/jes aɪ æm ə hoʊˈtel/', '😄 "Tôi là khách sạn".'], ['Student is important.', '/ˈstuːdənt ɪz ɪmˈpɔːrtənt/', 'Không trả lời câu hỏi.']),
        T(['Where are you from?', '/wer ɑːr juː frʌm/', 'Bạn đến từ đâu?'], ['I am from Vietnam.', '/aɪ æm frʌm ˌviːetˈnɑːm/', 'Tôi đến từ Việt Nam.', 'Nhấn viet-NAM.'], ['I am Vietnam.', '/aɪ æm ˌviːetˈnɑːm/', 'Thiếu from.'], ['From is Vietnam.', '/frʌm ɪz ˌviːetˈnɑːm/', 'Sai ngữ pháp.']),
        T(['Your English is good!', '/jʊr ˈɪŋɡlɪʃ ɪz ɡʊd/', 'Tiếng Anh của bạn tốt đấy!'], ['Thank you! I study every day.', '/ˈθæŋk juː aɪ ˈstʌdi ˈevri deɪ/', 'Cảm ơn! Tôi học mỗi ngày.', 'Nhận lời khen bằng Thank you.'], ['Sorry!', '/ˈsɑːri/', 'Được khen thì cảm ơn, không xin lỗi.'], ['Again, please.', '/əˈɡen pliːz/', 'Không cần nói lại.'])
      ], ket: 'Em đã trò chuyện với ngữ điệu và trọng âm đúng.'
    },
    tom: ['Trọng âm từ và dấu ˈ', 'Ngữ điệu câu hỏi Yes/No và Wh-', 'Nối âm'], nguphap: 'Are you …? – Yes, I am / No, I am not; Where are you from?', phatam: 'Trọng âm 2–3 âm tiết, ngữ điệu lên/xuống, nối âm',
    loi: ['Đọc đều các âm tiết', 'Câu hỏi Yes/No không lên giọng', 'Đọc Vietnam nhấn âm đầu'], btvn: ['Đọc 11 từ mới, vỗ tay ở âm tiết nhấn', 'Tập 3 câu hỏi Yes/No lên giọng', 'Tập 3 câu hỏi Wh- xuống giọng']
  };

  /* ================= NGÀY 5 ================= */
  const d5 = {
    n: 5, ten: 'Chào hỏi và giới thiệu bản thân', kinds: K,
    muc: 'Chào theo thời gian trong ngày, hỏi thăm sức khoẻ, tự giới thiệu tên, quê, nghề nghiệp.',
    hoc: `<h4>1. Chào theo buổi</h4>${reads([['Good morning!', 'trước 12 giờ', 'Chào buổi sáng'], ['Good afternoon!', '12–18 giờ', 'Chào buổi chiều'], ['Good evening!', 'sau 18 giờ', 'Chào buổi tối'], ['Good night!', 'khi đi ngủ / chia tay buổi tối', 'Chúc ngủ ngon']])}
      ${tip('⚠️ <b>Good night</b> là câu <b>chia tay</b> buổi tối, không dùng để chào khi gặp.')}
      <h4>2. Hỏi thăm</h4><ul>${ex('How are you?', '/haʊ ɑːr juː/', 'Bạn khỏe không?')}${ex('I\'m fine, thank you. And you?', '', 'Tôi khỏe, cảm ơn. Còn bạn?')}${ex('Not bad. / Pretty good.', '', 'Không tệ. / Khá tốt.')}</ul>
      <h4>3. Tự giới thiệu</h4>${F(['Hi, I\'m Nam.', '+', 'I\'m from Vietnam.', '+', 'I\'m a/an + nghề.', '+', 'Nice to meet you!'])}<ul>${ex('Nice to meet you!', '/naɪs tə miːt juː/', 'Rất vui được gặp bạn!')}${ex('Nice to meet you too!', '', 'Tôi cũng rất vui được gặp bạn!')}</ul>
      <p class="small">Viết tắt khi nói: I am → <b>I'm</b>, you are → <b>you're</b>, it is → <b>it's</b>.</p>`,
    vocab: [
      w('good morning', '/ɡʊd ˈmɔːrnɪŋ/', 'chào buổi sáng', '', ['Good morning, teacher!', '/ɡʊd ˈmɔːrnɪŋ ˈtiːtʃər/', 'Em chào thầy/cô buổi sáng!']),
      w('good afternoon', '/ɡʊd ˌæftərˈnuːn/', 'chào buổi chiều', '', ['Good afternoon, sir.', '/ɡʊd ˌæftərˈnuːn sɜːr/', 'Chào ông (buổi chiều).']),
      w('good evening', '/ɡʊd ˈiːvnɪŋ/', 'chào buổi tối', '', ['Good evening, everyone!', '/ɡʊd ˈiːvnɪŋ ˈevriwʌn/', 'Chào buổi tối mọi người!']),
      w('good night', '/ɡʊd naɪt/', 'chúc ngủ ngon', 'Chỉ dùng khi chia tay buổi tối.', ['Good night, Mom!', '/ɡʊd naɪt mɑːm/', 'Mẹ ngủ ngon!']),
      w('how are you', '/haʊ ɑːr juː/', 'bạn khỏe không', '', ['Hi Tom, how are you?', '/haɪ tɑːm haʊ ɑːr juː/', 'Chào Tom, khỏe không?']),
      w('fine', '/faɪn/', 'khỏe, ổn', '', ['I\'m fine, thanks.', '/aɪm faɪn θæŋks/', 'Tôi khỏe, cảm ơn.']),
      w('nice to meet you', '/naɪs tə miːt juː/', 'rất vui được gặp bạn', 'Lần gặp đầu tiên.', ['Nice to meet you, Anna.', '/naɪs tə miːt juː ˈænə/', 'Rất vui được gặp Anna.']),
      w('from', '/frʌm/', 'từ (đâu đến)', '', ['I\'m from Hanoi.', '/aɪm frʌm hæˈnɔɪ/', 'Tôi đến từ Hà Nội.']),
      w('my', '/maɪ/', 'của tôi', '', ['My name is Nam.', '/maɪ neɪm ɪz nɑːm/', 'Tên tôi là Nam.']),
      w('your', '/jʊr/', 'của bạn', '', ['What\'s your name?', '/wʌts jʊr neɪm/', 'Tên bạn là gì?']),
      w('friend', '/frend/', 'bạn bè', '', ['This is my friend, Linh.', '/ðɪs ɪz maɪ frend lɪn/', 'Đây là bạn tôi, Linh.']),
      w('see you later', '/siː juː ˈleɪtər/', 'hẹn gặp lại', '', ['Bye! See you later!', '/baɪ siː juː ˈleɪtər/', 'Tạm biệt! Gặp lại sau!'])
    ],
    qs: [
      ['mc', '3 giờ chiều gặp khách, em chào?', 'Good afternoon!', ['Good morning!', 'Good night!', 'Good evening!'], '12–18 giờ: Good afternoon.'],
      ['mc', '“Good night” dùng khi nào?', 'Chia tay buổi tối / trước khi ngủ', ['Gặp nhau buổi tối', 'Chào buổi sáng', 'Mọi lúc'], 'Gặp buổi tối dùng Good evening.'],
      ['mc', 'Ai đó nói “Nice to meet you!”, em đáp?', 'Nice to meet you too!', ['I\'m fine.', 'Good night!', 'You\'re welcome.'], 'Thêm too = cũng vậy.'],
      ['mc', '“I am” viết tắt là?', 'I\'m', ['Im', 'I\'am', 'Iam'], 'I am → I\'m.'],
      ['order', 'Sắp xếp: “Tôi đến từ Việt Nam.”', ['I\'m', 'from', 'Vietnam.'], 'I\'m from Vietnam.'],
      ['hear', 'How are you?', 'Bạn khỏe không?', ['Bạn là ai?', 'Bạn ở đâu?', 'Bạn bao nhiêu tuổi?'], 'How are you? = Bạn khỏe không?'],
      ['fill', 'Điền từ: “I\'m ____, thank you.” (Tôi khỏe)', 'fine|good|ok|okay', 'I\'m fine, thank you.']
    ],
    hoithoai: {
      ctx: 'Buổi sáng đầu tiên ở công ty mới, em gặp chị Sarah – trưởng nhóm người Úc.', vai: 'Sarah chào hỏi, em tự giới thiệu.', ai: '👩‍💼 Sarah',
      luot: [
        T(['Good morning! I\'m Sarah.', '/ɡʊd ˈmɔːrnɪŋ aɪm ˈserə/', 'Chào buổi sáng! Tôi là Sarah.'], ['Good morning! I\'m Nam.', '/ɡʊd ˈmɔːrnɪŋ aɪm nɑːm/', 'Chào buổi sáng! Tôi là Nam.', 'Chào lại và nói tên.'], ['Good night! I\'m Nam.', '/ɡʊd naɪt aɪm nɑːm/', 'Good night là chúc ngủ ngon.'], ['I\'m Sarah.', '/aɪm ˈserə/', 'Đó là tên chị ấy.']),
        T(['Nice to meet you, Nam!', '/naɪs tə miːt juː nɑːm/', 'Rất vui được gặp Nam!'], ['Nice to meet you too!', '/naɪs tə miːt juː tuː/', 'Tôi cũng rất vui được gặp chị!', 'Thêm too.'], ['You\'re welcome.', '/jʊr ˈwelkəm/', 'Câu đáp lời cảm ơn.'], ['See you later!', '/siː juː ˈleɪtər/', 'Vừa gặp đã hẹn gặp lại?']),
        T(['Where are you from?', '/wer ɑːr juː frʌm/', 'Bạn đến từ đâu?'], ['I\'m from Ho Chi Minh City.', '/aɪm frʌm hoʊ tʃiː mɪn ˈsɪti/', 'Tôi đến từ TP. Hồ Chí Minh.', 'I\'m from + nơi.'], ['I\'m fine.', '/aɪm faɪn/', 'Chị hỏi quê, không hỏi sức khỏe.'], ['From my friend.', '/frʌm maɪ frend/', 'Sai nghĩa.']),
        T(['Great! How are you today?', '/ɡreɪt haʊ ɑːr juː təˈdeɪ/', 'Tuyệt! Hôm nay bạn thế nào?'], ['I\'m fine, thank you. And you?', '/aɪm faɪn ˈθæŋk juː ænd juː/', 'Tôi khỏe, cảm ơn. Còn chị?', 'Hỏi lại người kia cho lịch sự.'], ['How are you?', '/haʊ ɑːr juː/', 'Nên trả lời trước rồi mới hỏi lại.'], ['Good evening!', '/ɡʊd ˈiːvnɪŋ/', 'Đang là buổi sáng.'])
      ], ket: 'Em đã chào hỏi đúng buổi và tự giới thiệu ở công ty mới.'
    },
    tom: ['Chào theo buổi', 'Hỏi thăm sức khỏe', 'Tự giới thiệu', 'Viết tắt I\'m, you\'re, it\'s'], nguphap: 'I\'m + tên / from + nơi; How are you?; … too', phatam: 'Nối âm: nice to meet you; ngữ điệu câu chào',
    loi: ['Dùng Good night khi gặp', 'Quên too khi đáp Nice to meet you', 'Nói I\'m Vietnam (thiếu from)'], btvn: ['Ghi âm đoạn tự giới thiệu 4 câu', 'Chào người trong nhà theo đúng buổi trong ngày', 'Viết tắt 5 câu với I\'m / you\'re / it\'s']
  };

  /* ================= NGÀY 6 ================= */
  const d6 = {
    n: 6, ten: 'Số đếm, tuổi, số điện thoại', kinds: K,
    muc: 'Đếm 0–100, phân biệt -teen và -ty, hỏi tuổi, đọc số điện thoại.',
    hoc: `<h4>1. Số 0–20</h4>${reads([['zero', '0', ''], ['one', '1', ''], ['two', '2', ''], ['three', '3', ''], ['four', '4', ''], ['five', '5', ''], ['six', '6', ''], ['seven', '7', ''], ['eight', '8', ''], ['nine', '9', ''], ['ten', '10', ''], ['eleven', '11', ''], ['twelve', '12', ''], ['thirteen', '13', ''], ['fifteen', '15', ''], ['twenty', '20', '']])}
      <h4>2. -teen hay -ty? (rất dễ nghe nhầm)</h4>${tbl(['-teen (13–19)', '-ty (30–90)', 'Nghe'], [['thirteen /θɜːrˈtiːn/', 'thirty /ˈθɜːrti/', 'thirteen|thirty'], ['fifteen /fɪfˈtiːn/', 'fifty /ˈfɪfti/', 'fifteen|fifty'], ['eighteen /eɪˈtiːn/', 'eighty /ˈeɪti/', 'eighteen|eighty']].map(([x, y, s]) => `<tr><td>${x}</td><td>${y}</td><td><button class="zh-say" data-say="${s}">🔊</button></td></tr>`))}
      ${tip('🔑 <b>-teen</b> nhấn âm cuối, kéo dài "tiin". <b>-ty</b> nhấn âm đầu, đuôi đọc nhẹ "ti".')}
      <h4>3. Ghép số 21–100</h4><p>21 = twenty-one · 45 = forty-five (chú ý: <b>forty</b> không có u) · 100 = one hundred.</p>
      <h4>4. Hỏi tuổi và số điện thoại</h4><ul>${ex('How old are you?', '/haʊ oʊld ɑːr juː/', 'Bạn bao nhiêu tuổi?')}${ex('I\'m thirty years old.', '', 'Tôi 30 tuổi.')}${ex('What\'s your phone number?', '', 'Số điện thoại của bạn là gì?')}${ex('It\'s 0-9-0, 1-2-3, 4-5-6-7.', '', 'Đọc từng chữ số; 0 đọc "oh" hoặc "zero".')}</ul>`,
    vocab: [
      w('number', '/ˈnʌmbər/', 'con số', '', ['What\'s your phone number?', '/wʌts jʊr foʊn ˈnʌmbər/', 'Số điện thoại của bạn là gì?']),
      w('how old', '/haʊ oʊld/', 'bao nhiêu tuổi', '', ['How old is your son?', '/haʊ oʊld ɪz jʊr sʌn/', 'Con trai bạn bao nhiêu tuổi?']),
      w('years old', '/jɪrz oʊld/', 'tuổi', 'Số + years old.', ['I\'m twenty-five years old.', '/aɪm ˈtwenti faɪv jɪrz oʊld/', 'Tôi 25 tuổi.']),
      w('eleven', '/ɪˈlevən/', 'số 11', '', ['It\'s eleven o\'clock.', '/ɪts ɪˈlevən əˈklɑːk/', 'Bây giờ là 11 giờ.']),
      w('twelve', '/twelv/', 'số 12', '', ['Twelve eggs.', '/twelv eɡz/', 'Mười hai quả trứng.']),
      w('thirteen', '/θɜːrˈtiːn/', 'số 13', 'Nhấn âm cuối.', ['She is thirteen.', '/ʃiː ɪz θɜːrˈtiːn/', 'Em ấy 13 tuổi.']),
      w('thirty', '/ˈθɜːrti/', 'số 30', 'Nhấn âm đầu.', ['Thirty dollars.', '/ˈθɜːrti ˈdɑːlərz/', 'Ba mươi đô la.']),
      w('fifteen', '/fɪfˈtiːn/', 'số 15', '', ['Fifteen minutes.', '/fɪfˈtiːn ˈmɪnɪts/', 'Mười lăm phút.']),
      w('fifty', '/ˈfɪfti/', 'số 50', '', ['Fifty people.', '/ˈfɪfti ˈpiːpəl/', 'Năm mươi người.']),
      w('twenty', '/ˈtwenti/', 'số 20', '', ['I\'m twenty.', '/aɪm ˈtwenti/', 'Tôi 20 tuổi.']),
      w('forty', '/ˈfɔːrti/', 'số 40', 'Viết không có u.', ['My father is forty.', '/maɪ ˈfɑːðər ɪz ˈfɔːrti/', 'Bố tôi 40 tuổi.']),
      w('hundred', '/ˈhʌndrəd/', 'trăm', '', ['One hundred dollars.', '/wʌn ˈhʌndrəd ˈdɑːlərz/', 'Một trăm đô la.'])
    ],
    qs: [
      ['hear', 'thirteen', '13', ['30', '3', '33'], 'thirteen – nhấn âm cuối.', 'Nghe và chọn số đúng.'],
      ['hear', 'thirty', '30', ['13', '3', '33'], 'thirty – nhấn âm đầu.', 'Nghe và chọn số đúng.'],
      ['hear', 'fifty', '50', ['15', '5', '55'], 'fifty /ˈfɪfti/.', 'Nghe và chọn số đúng.'],
      ['hear', 'eighteen', '18', ['80', '8', '88'], 'eighteen /eɪˈtiːn/.', 'Nghe và chọn số đúng.'],
      ['mc', 'Số 40 viết đúng là?', 'forty', ['fourty', 'fourteen', 'fortie'], 'forty không có u.'],
      ['mc', 'Hỏi tuổi là?', 'How old are you?', ['How many are you?', 'What old are you?', 'How year are you?'], 'How old …?'],
      ['fill', 'Viết bằng chữ số 21 (có gạch nối):', 'twenty-one|twenty one', '21 = twenty-one.'],
      ['order', 'Sắp xếp: “Tôi 30 tuổi.”', ['I\'m', 'thirty', 'years', 'old.'], 'I\'m thirty years old.']
    ],
    hoithoai: {
      ctx: 'Em làm thẻ thành viên ở phòng gym. Nhân viên hỏi thông tin.', vai: 'Nhân viên hỏi, em trả lời.', ai: '🧑‍💼 Staff',
      luot: [
        T(['What\'s your name, please?', '/wʌts jʊr neɪm pliːz/', 'Xin cho biết tên?'], ['My name is Nam. N-A-M.', '/maɪ neɪm ɪz nɑːm en eɪ em/', 'Tên tôi là Nam. N-A-M.', 'Đánh vần luôn cho chắc.'], ['I\'m fine.', '/aɪm faɪn/', 'Lạc đề.'], ['Your name is Nam.', '/jʊr neɪm ɪz nɑːm/', 'Nói về mình dùng My.']),
        T(['How old are you?', '/haʊ oʊld ɑːr juː/', 'Bạn bao nhiêu tuổi?'], ['I\'m thirty-two years old.', '/aɪm ˈθɜːrti tuː jɪrz oʊld/', 'Tôi 32 tuổi.', 'Số + years old.'], ['I\'m thirty-two years.', '/aɪm ˈθɜːrti tuː jɪrz/', 'Thiếu old (hoặc bỏ cả years old).'], ['I have thirty-two.', '/aɪ hæv ˈθɜːrti tuː/', 'Tiếng Anh dùng be (I\'m), không dùng have để nói tuổi.']),
        T(['And your phone number?', '/ænd jʊr foʊn ˈnʌmbər/', 'Còn số điện thoại?'], ['It\'s 0-9-0, 1-2-3, 4-5-6-7.', '/ɪts oʊ naɪn oʊ wʌn tuː θriː fɔːr faɪv sɪks ˈsevən/', 'Là 090 123 4567.', 'Đọc từng chữ số, chia nhóm.'], ['It\'s ninety million.', '/ɪts ˈnaɪnti ˈmɪljən/', 'Số điện thoại đọc từng chữ số.'], ['Number is phone.', '/ˈnʌmbər ɪz foʊn/', 'Sai nghĩa.']),
        T(['Thank you. That\'s fifty dollars a month.', '/ˈθæŋk juː ðæts ˈfɪfti ˈdɑːlərz ə mʌnθ/', 'Cảm ơn. Phí là 50 đô một tháng.'], ['Fifty? OK, here you are.', '/ˈfɪfti oʊˈkeɪ hɪr juː ɑːr/', '50 à? Được, gửi bạn.', 'Here you are = đây (khi đưa đồ).'], ['Fifteen? OK.', '/fɪfˈtiːn oʊˈkeɪ/', 'Nghe nhầm: fifty (50) chứ không phải fifteen (15).'], ['How old?', '/haʊ oʊld/', 'Lạc đề.'])
      ], ket: 'Em đã đọc tuổi, số điện thoại và nghe đúng giá tiền.'
    },
    tom: ['Số 0–100', '-teen và -ty', 'Hỏi tuổi', 'Đọc số điện thoại'], nguphap: 'How old are you? – I\'m … years old; What\'s your phone number?', phatam: 'Trọng âm -teen/-ty',
    loi: ['Nghe nhầm 15/50, 13/30', 'Nói I have … years old', 'Viết fourty'], btvn: ['Đọc số điện thoại của 3 người', 'Nghe và viết lại 10 số ngẫu nhiên (nhờ người đọc)', 'Nói tuổi của mọi người trong nhà']
  };

  /* ================= NGÀY 7 ================= */
  const d7 = {
    n: 7, ten: 'Ôn tập tuần 1 và kiểm tra', vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Hệ thống phát âm, chào hỏi, số đếm; làm bài kiểm tra tuần 20 câu.',
    hoc: `<h4>1. Tóm tắt phát âm tuần 1</h4>${tbl(['Chủ đề', 'Cần nhớ'], ['<tr><td>Chữ cái</td><td>E /iː/ · I /aɪ/ · G /dʒiː/ · J /dʒeɪ/ · R /ɑːr/ · W /ˈdʌbəljuː/</td></tr>', '<tr><td>Nguyên âm</td><td>ngắn – dài (ship/sheep), /æ/ /ʌ/ /ə/, nguyên âm đôi</td></tr>', '<tr><td>Phụ âm</td><td>/θ/ /ð/ đầu lưỡi giữa răng; bật âm cuối; -s đọc /s/ /z/ /ɪz/</td></tr>', '<tr><td>Trọng âm</td><td>dấu ˈ; câu hỏi Yes/No ↗, Wh- ↘</td></tr>', '<tr><td>Số</td><td>-teen nhấn cuối, -ty nhấn đầu; forty</td></tr>'])}
      <h4>2. Câu giao tiếp tuần 1</h4>${reads([['Hello! My name is Nam.', '', 'Xin chào! Tôi tên Nam.'], ['How do you spell it?', '', 'Đánh vần thế nào?'], ['Nice to meet you!', '', 'Rất vui được gặp bạn!'], ['How are you?', '', 'Bạn khỏe không?'], ['I\'m from Vietnam.', '', 'Tôi đến từ Việt Nam.'], ['How old are you?', '', 'Bạn bao nhiêu tuổi?'], ['What\'s your phone number?', '', 'Số điện thoại của bạn?'], ['See you later!', '', 'Hẹn gặp lại!']])}`,
    qs: [['mc', 'Từ nào nhấn âm 2?', 'computer', ['teacher', 'family', 'coffee'], 'com-PU-ter.'], ['mc', '“three” bắt đầu bằng âm?', '/θ/', ['/t/', '/s/', '/f/'], 'Đầu lưỡi giữa răng.']],
    hoithoai: {
      ctx: 'Em tham gia buổi giao lưu tiếng Anh cuối tuần và làm quen với Mike.', vai: 'Ôn tập tổng hợp tuần 1.', ai: '👨 Mike',
      luot: [
        T(['Good afternoon! I\'m Mike.', '/ɡʊd ˌæftərˈnuːn aɪm maɪk/', 'Chào buổi chiều! Tôi là Mike.'], ['Good afternoon! I\'m Lan. Nice to meet you!', '', 'Chào buổi chiều! Tôi là Lan. Rất vui được gặp bạn!', 'Chào + tên + câu xã giao.'], ['Good night! I\'m Lan.', '', 'Good night là chúc ngủ ngon.'], ['I\'m Mike.', '', 'Đó là tên của Mike.']),
        T(['Nice to meet you too! How do you spell Lan?', '', 'Tôi cũng vậy! Lan đánh vần thế nào?'], ['L-A-N.', '/el eɪ en/', 'L – A – N.', 'A đọc /eɪ/.'], ['L-R-N.', '', 'A không phải R.'], ['Lan, Lan.', '', 'Mike hỏi đánh vần.']),
        T(['Where are you from?', '', 'Bạn đến từ đâu?'], ['I\'m from Da Nang, Vietnam.', '', 'Tôi đến từ Đà Nẵng, Việt Nam.', 'Chuẩn.'], ['I\'m Vietnam.', '', 'Thiếu from.'], ['I\'m fifteen.', '', 'Lạc đề.']),
        T(['Cool! What\'s your phone number?', '', 'Hay quá! Số điện thoại của bạn?'], ['It\'s 0-9-8, 7-6-5, 4-3-2-1.', '', '098 765 4321.', 'Đọc từng chữ số.'], ['It\'s ninety-eight.', '', 'Đọc từng chữ số.'], ['Phone is good.', '', 'Sai nghĩa.']),
        T(['Thanks! See you later!', '', 'Cảm ơn! Gặp lại sau!'], ['See you! Bye!', '', 'Hẹn gặp lại! Tạm biệt!', 'Kết thúc tự nhiên.'], ['Hello!', '', 'Đang chia tay.'], ['Sorry!', '', 'Không cần xin lỗi.'])
      ], ket: 'Em đã hoàn thành tuần 1! 🎉'
    },
    tom: ['Ôn phát âm, chào hỏi, số đếm', 'Kiểm tra 20 câu'], nguphap: 'Ôn tuần 1', phatam: 'Ôn tuần 1',
    loi: ['Xem lại câu sai trong bài kiểm tra'], btvn: ['Dưới 7 điểm: ôn thẻ "Từ chưa nhớ" và làm lại', 'Ghi âm đoạn tự giới thiệu 30 giây']
  };

  /* ================= NGÀY 8 ================= */
  const d8 = {
    n: 8, ten: 'Đại từ và động từ to be', kinds: K,
    muc: 'Dùng đúng I/you/he/she/it/we/they với am/is/are ở câu khẳng định, phủ định, câu hỏi.',
    hoc: `<h4>1. Bảng động từ to be</h4>${tbl(['Chủ ngữ', 'to be', 'Viết tắt', 'Phủ định'], [['I', 'am', 'I\'m', 'I\'m not'], ['you / we / they', 'are', 'you\'re / we\'re / they\'re', 'aren\'t'], ['he / she / it', 'is', 'he\'s / she\'s / it\'s', 'isn\'t']].map((r) => `<tr>${r.map((x) => `<td>${x}</td>`).join('')}</tr>`))}
      <h4>2. Ba dạng câu</h4>${F(['Khẳng định: She is busy.', '→', 'Phủ định: She isn\'t busy.', '→', 'Câu hỏi: Is she busy?'])}<ul>${ex('Are you hungry? – Yes, I am. / No, I\'m not.', '', 'Bạn đói không? – Có. / Không.')}</ul>
      ${tip('⚠️ Tiếng Việt nói "Tôi bận" không cần "là". Tiếng Anh <b>bắt buộc có to be</b>: ✘ I busy → ✔ I am busy.')}
      <h4>3. he, she, it, they</h4><p><b>he</b>: nam · <b>she</b>: nữ · <b>it</b>: đồ vật, con vật, thời tiết · <b>they</b>: số nhiều (người hoặc vật).</p>`,
    vocab: [
      w('he', '/hiː/', 'anh ấy, ông ấy', '', ['He is my brother.', '/hiː ɪz maɪ ˈbrʌðər/', 'Anh ấy là anh trai tôi.']),
      w('it', '/ɪt/', 'nó (vật, con vật)', '', ['It is a cat.', '/ɪt ɪz ə kæt/', 'Nó là một con mèo.']),
      w('we', '/wiː/', 'chúng tôi, chúng ta', '', ['We are friends.', '/wiː ɑːr frendz/', 'Chúng tôi là bạn.']),
      w('they', '/ðeɪ/', 'họ, chúng nó', '', ['They are students.', '/ðeɪ ɑːr ˈstuːdənts/', 'Họ là sinh viên.']),
      w('happy', '/ˈhæpi/', 'vui vẻ', '', ['I am happy today.', '/aɪ æm ˈhæpi təˈdeɪ/', 'Hôm nay tôi vui.']),
      w('tired', '/taɪərd/', 'mệt', '', ['Are you tired?', '/ɑːr juː taɪərd/', 'Bạn mệt không?']),
      w('busy', '/ˈbɪzi/', 'bận', '', ['She isn\'t busy.', '/ʃiː ˈɪzənt ˈbɪzi/', 'Cô ấy không bận.']),
      w('hungry', '/ˈhʌŋɡri/', 'đói', '', ['We are hungry.', '/wiː ɑːr ˈhʌŋɡri/', 'Chúng tôi đói.']),
      w('here', '/hɪr/', 'ở đây', '', ['I\'m here.', '/aɪm hɪr/', 'Tôi ở đây.']),
      w('there', '/ðer/', 'ở đó', '', ['They are there.', '/ðeɪ ɑːr ðer/', 'Họ ở đằng kia.']),
      w('Vietnamese', '/ˌviːetnəˈmiːz/', 'người/tiếng Việt Nam', 'Viết hoa.', ['We are Vietnamese.', '/wiː ɑːr ˌviːetnəˈmiːz/', 'Chúng tôi là người Việt Nam.']),
      w('not', '/nɑːt/', 'không', 'Đặt sau to be.', ['I\'m not tired.', '/aɪm nɑːt taɪərd/', 'Tôi không mệt.'])
    ],
    qs: [
      ['mc', 'She ___ a teacher.', 'is', ['am', 'are', 'be'], 'he/she/it + is.'],
      ['mc', 'They ___ my friends.', 'are', ['is', 'am', 'be'], 'they + are.'],
      ['mc', 'Câu đúng là?', 'I am busy.', ['I busy.', 'I is busy.', 'I are busy.'], 'Phải có to be.'],
      ['mc', 'Phủ định của “He is tired” là?', 'He isn\'t tired.', ['He not tired.', 'He don\'t tired.', 'He aren\'t tired.'], 'is not = isn\'t.'],
      ['mc', '“Are you hungry?” – trả lời “có” đúng là?', 'Yes, I am.', ['Yes, I\'m.', 'Yes, you are.', 'Yes, I do.'], 'Câu trả lời ngắn không viết tắt I\'m.'],
      ['mc', 'Con mèo của tôi → dùng đại từ?', 'it', ['he', 'they', 'we'], 'Con vật → it.'],
      ['order', 'Sắp xếp câu hỏi: “Họ có ở đây không?”', ['Are', 'they', 'here?'], 'Are they here?'],
      ['fill', 'Điền: “We ____ Vietnamese.”', 'are', 'we + are.']
    ],
    hoithoai: {
      ctx: 'Giờ nghỉ trưa ở văn phòng, đồng nghiệp John hỏi chuyện.', vai: 'John hỏi, em trả lời với to be.', ai: '👨‍💼 John',
      luot: [
        T(['Hi! Are you busy?', '', 'Chào! Bạn có bận không?'], ['No, I\'m not. I\'m free now.', '/noʊ aɪm nɑːt aɪm friː naʊ/', 'Không, giờ tôi rảnh.', 'free = rảnh.'], ['No, I not busy.', '', 'Thiếu am: I\'m not busy.'], ['Yes, you are.', '', 'Phải trả lời về mình: I am.']),
        T(['Are you hungry?', '', 'Bạn đói không?'], ['Yes, I am. Very hungry!', '', 'Có, đói lắm!', 'Yes, I am.'], ['Yes, I\'m.', '', 'Câu trả lời ngắn không dùng I\'m.'], ['Yes, I hungry.', '', 'Thiếu am.']),
        T(['Who are they?', '', 'Họ là ai vậy?'], ['They are new students. They\'re Vietnamese.', '', 'Họ là thực tập sinh mới. Họ là người Việt.', 'they + are.'], ['They is new students.', '', 'they + are.'], ['He are students.', '', 'Số nhiều dùng they.']),
        T(['Great! Let\'s eat with them.', '', 'Tuyệt! Mình đi ăn cùng họ nhé.'], ['OK! I\'m happy to go.', '', 'Được! Tôi rất vui đi cùng.', 'Đồng ý tự nhiên.'], ['OK! I happy.', '', 'Thiếu am.'], ['No, it is tired.', '', 'Sai đại từ.'])
      ], ket: 'Em đã dùng to be đúng ở cả 3 dạng câu.'
    },
    tom: ['Bảng to be', 'Khẳng định – phủ định – câu hỏi', 'Đại từ he/she/it/they'], nguphap: 'S + am/is/are; isn\'t/aren\'t; Am/Is/Are + S …?', phatam: 'Viết tắt I\'m, isn\'t, aren\'t',
    loi: ['Quên to be (I busy)', 'Dùng sai is/are', 'Trả lời Yes, I\'m'], btvn: ['Viết 5 câu tả cảm xúc của mọi người trong nhà', 'Chuyển 5 câu sang phủ định và câu hỏi', 'Tập hỏi – đáp Are you …? với 3 tính từ']
  };

  /* ================= NGÀY 9 ================= */
  const d9 = {
    n: 9, ten: 'Gia đình và tính từ sở hữu', kinds: K,
    muc: 'Giới thiệu gia đình với my/your/his/her/our/their, sở hữu cách \'s, have/has.',
    hoc: `<h4>1. Tính từ sở hữu</h4>${tbl(['Đại từ', 'Sở hữu', 'Ví dụ'], [['I', 'my', 'my mother'], ['you', 'your', 'your father'], ['he', 'his', 'his wife'], ['she', 'her', 'her husband'], ['we', 'our', 'our children'], ['they', 'their', 'their son']].map((r) => `<tr>${r.map((x) => `<td>${x}</td>`).join('')}</tr>`))}
      <h4>2. Sở hữu cách 's</h4><p>Tên người + <b>'s</b> + vật/người: <b>Nam's</b> sister = em gái của Nam. ${sp("This is Nam's sister.")}</p>${tip('🔁 Ngược tiếng Việt: "em gái <b>của Nam</b>" → "<b>Nam\'s</b> sister".')}
      <h4>3. have / has (có)</h4>${F(['I / you / we / they + have', '→', 'he / she / it + has'])}<ul>${ex('I have two children.', '', 'Tôi có hai con.')}${ex('She has a brother.', '', 'Cô ấy có một anh trai.')}${ex('Do you have any sisters?', '', 'Bạn có chị em gái không?')}</ul>`,
    vocab: [
      w('father', '/ˈfɑːðər/', 'bố', 'Thân mật: dad.', ['My father is a doctor.', '/maɪ ˈfɑːðər ɪz ə ˈdɑːktər/', 'Bố tôi là bác sĩ.']),
      w('brother', '/ˈbrʌðər/', 'anh/em trai', '', ['I have one brother.', '/aɪ hæv wʌn ˈbrʌðər/', 'Tôi có một anh trai.']),
      w('sister', '/ˈsɪstər/', 'chị/em gái', '', ['Her sister is a nurse.', '/hɜːr ˈsɪstər ɪz ə nɜːrs/', 'Chị gái cô ấy là y tá.']),
      w('son', '/sʌn/', 'con trai', 'Đọc giống sun.', ['Their son is six.', '/ðer sʌn ɪz sɪks/', 'Con trai họ 6 tuổi.']),
      w('daughter', '/ˈdɔːtər/', 'con gái', 'gh câm.', ['I have a daughter.', '/aɪ hæv ə ˈdɔːtər/', 'Tôi có một con gái.']),
      w('husband', '/ˈhʌzbənd/', 'chồng', '', ['Her husband is kind.', '/hɜːr ˈhʌzbənd ɪz kaɪnd/', 'Chồng cô ấy tốt bụng.']),
      w('wife', '/waɪf/', 'vợ', '', ['This is my wife, Mai.', '/ðɪs ɪz maɪ waɪf maɪ/', 'Đây là vợ tôi, Mai.']),
      w('parents', '/ˈperənts/', 'bố mẹ', '', ['My parents live in Hue.', '/maɪ ˈperənts lɪv ɪn hweɪ/', 'Bố mẹ tôi sống ở Huế.']),
      w('children', '/ˈtʃɪldrən/', 'con cái, trẻ em', 'Số nhiều của child.', ['We have two children.', '/wiː hæv tuː ˈtʃɪldrən/', 'Chúng tôi có hai con.']),
      w('grandmother', '/ˈɡrænmʌðər/', 'bà', 'Thân mật: grandma.', ['My grandmother is eighty.', '/maɪ ˈɡrænmʌðər ɪz ˈeɪti/', 'Bà tôi 80 tuổi.']),
      w('have', '/hæv/', 'có', 'he/she/it dùng has.', ['Do you have a car?', '/duː juː hæv ə kɑːr/', 'Bạn có ô tô không?']),
      w('his', '/hɪz/', 'của anh ấy', '', ['His name is Long.', '/hɪz neɪm ɪz lɔːŋ/', 'Tên anh ấy là Long.'])
    ],
    qs: [
      ['mc', 'Linh has a brother. ___ brother is a student.', 'Her', ['His', 'She', 'Their'], 'Linh là nữ → her.'],
      ['mc', '“Xe của Nam” là?', 'Nam\'s car', ['car Nam', 'Nam car\'s', 'car\'s Nam'], 'Tên + \'s + vật.'],
      ['mc', 'She ___ two children.', 'has', ['have', 'is', 'are'], 'she + has.'],
      ['mc', 'We love ___ parents.', 'our', ['we', 'us', 'their'], 'we → our.'],
      ['mc', 'Số nhiều của child là?', 'children', ['childs', 'childes', 'child'], 'Bất quy tắc.'],
      ['hear', 'This is my daughter.', 'Đây là con gái tôi.', ['Đây là con trai tôi.', 'Đây là chị gái tôi.', 'Đây là vợ tôi.'], 'daughter = con gái.'],
      ['order', 'Sắp xếp: “Tôi có hai anh trai.”', ['I', 'have', 'two', 'brothers.'], 'I have two brothers.']
    ],
    hoithoai: {
      ctx: 'Đồng nghiệp người Anh tên Lucy xem ảnh gia đình trên điện thoại của em.', vai: 'Lucy hỏi, em giới thiệu gia đình.', ai: '👩 Lucy',
      luot: [
        T(['Is this your family?', '', 'Đây là gia đình bạn à?'], ['Yes, it is. This is my wife and these are our children.', '', 'Đúng vậy. Đây là vợ tôi và đây là các con chúng tôi.', 'my wife, our children.'], ['Yes, this is I wife.', '', 'I → my.'], ['No, it is a family.', '', 'Câu không tự nhiên.']),
        T(['How many children do you have?', '', 'Bạn có mấy con?'], ['I have two: a son and a daughter.', '', 'Tôi có hai: một trai một gái.', 'I have + số lượng.'], ['I has two.', '', 'I + have.'], ['I am two children.', '', 'Phải dùng have.']),
        T(['How old is your daughter?', '', 'Con gái bạn mấy tuổi?'], ['She\'s seven years old.', '', 'Bé 7 tuổi.', 'she + is.'], ['He\'s seven.', '', 'Con gái dùng she.'], ['Her is seven.', '', 'Chủ ngữ dùng she, không dùng her.']),
        T(['Do your parents live with you?', '', 'Bố mẹ bạn sống cùng bạn không?'], ['No, they live in my hometown.', '', 'Không, họ sống ở quê.', 'hometown = quê nhà.'], ['No, he live in Hue.', '', 'parents là số nhiều → they.'], ['Yes, I am parents.', '', 'Sai nghĩa.'])
      ], ket: 'Em đã giới thiệu gia đình với tính từ sở hữu và have/has.'
    },
    tom: ['Tính từ sở hữu', 'Sở hữu cách \'s', 'have/has', 'Từ vựng gia đình'], nguphap: 'my/your/his/her/our/their; Nam\'s …; have/has; Do you have …?', phatam: 'daughter (gh câm), husband /z/, children',
    loi: ['Nhầm his/her', 'Nói I has / she have', 'Viết car Nam thay vì Nam\'s car'], btvn: ['Vẽ cây gia đình bằng tiếng Anh', 'Viết 5 câu giới thiệu gia đình', 'Đặt 3 câu với \'s']
  };

  /* ================= NGÀY 10 ================= */
  const d10 = {
    n: 10, ten: 'Đồ vật: a/an, this/that, số nhiều', kinds: K,
    muc: 'Dùng a/an đúng, chỉ đồ vật gần – xa với this/that/these/those, chuyển danh từ sang số nhiều.',
    hoc: `<h4>1. a hay an?</h4><p>Xét <b>âm</b> đầu (không phải chữ): <b>an</b> trước nguyên âm: an apple, an umbrella, <b>an hour</b> (h câm). <b>a</b> trước phụ âm: a pen, a bag, <b>a university</b> (/juː/).</p>
      <h4>2. Gần – xa, ít – nhiều</h4>${tbl(['', 'Gần', 'Xa'], ['<tr><td>Số ít</td><td>this (cái này)</td><td>that (cái kia)</td></tr>', '<tr><td>Số nhiều</td><td>these (những cái này)</td><td>those (những cái kia)</td></tr>'])}<ul>${ex('What is this? – It\'s a key.', '', 'Cái này là gì? – Là chìa khóa.')}${ex('Are those your glasses?', '', 'Kia là kính của bạn à?')}</ul>
      <h4>3. Số nhiều</h4><ul><li>Thêm -s: pen → pens · -es sau s, x, sh, ch: watch → watches · phụ âm + y → ies: city → cities</li><li>Bất quy tắc: man → men, woman → women, child → children, person → people</li></ul>`,
    vocab: [
      w('pen', '/pen/', 'cây bút', '', ['Can I use your pen?', '/kæn aɪ juːz jʊr pen/', 'Tôi mượn bút của bạn được không?']),
      w('bag', '/bæɡ/', 'cái túi', '', ['This is my bag.', '/ðɪs ɪz maɪ bæɡ/', 'Đây là túi của tôi.']),
      w('table', '/ˈteɪbəl/', 'cái bàn', '', ['The keys are on the table.', '/ðə kiːz ɑːr ɑːn ðə ˈteɪbəl/', 'Chìa khóa ở trên bàn.']),
      w('door', '/dɔːr/', 'cửa ra vào', '', ['Close the door, please.', '/kloʊz ðə dɔːr pliːz/', 'Làm ơn đóng cửa.']),
      w('window', '/ˈwɪndoʊ/', 'cửa sổ', '', ['Open the window.', '/ˈoʊpən ðə ˈwɪndoʊ/', 'Mở cửa sổ ra.']),
      w('key', '/kiː/', 'chìa khóa', '', ['Where is my key?', '/wer ɪz maɪ kiː/', 'Chìa khóa của tôi đâu?']),
      w('umbrella', '/ʌmˈbrelə/', 'cái ô', 'Dùng an.', ['I need an umbrella.', '/aɪ niːd ən ʌmˈbrelə/', 'Tôi cần một cái ô.']),
      w('apple', '/ˈæpəl/', 'quả táo', 'Dùng an.', ['An apple a day.', '/ən ˈæpəl ə deɪ/', 'Mỗi ngày một quả táo.']),
      w('watch', '/wɑːtʃ/', 'đồng hồ đeo tay', 'Số nhiều: watches.', ['That is a nice watch.', '/ðæt ɪz ə naɪs wɑːtʃ/', 'Đó là chiếc đồng hồ đẹp.']),
      w('glasses', '/ˈɡlæsɪz/', 'kính mắt', 'Luôn số nhiều.', ['These are my glasses.', '/ðiːz ɑːr maɪ ˈɡlæsɪz/', 'Đây là kính của tôi.']),
      w('laptop', '/ˈlæptɑːp/', 'máy tính xách tay', '', ['Is that your laptop?', '/ɪz ðæt jʊr ˈlæptɑːp/', 'Kia là laptop của bạn à?']),
      w('people', '/ˈpiːpəl/', 'người (số nhiều)', 'Số nhiều của person.', ['Five people are here.', '/faɪv ˈpiːpəl ɑːr hɪr/', 'Có năm người ở đây.'])
    ],
    qs: [
      ['mc', '___ umbrella', 'an', ['a', 'the a', 'no article'], 'Âm đầu nguyên âm → an.'],
      ['mc', '___ hour', 'an', ['a', 'two', 'no article'], 'h câm → an hour.'],
      ['mc', '___ university', 'a', ['an', 'two', 'no article'], 'university bắt đầu âm /j/ → a.'],
      ['mc', 'Những cái này (ở gần) là?', 'these', ['this', 'that', 'those'], 'Gần + số nhiều.'],
      ['mc', 'Số nhiều của watch là?', 'watches', ['watchs', 'watchies', 'watch'], 'Sau ch thêm -es.'],
      ['mc', 'Số nhiều của woman là?', 'women', ['womans', 'womens', 'woman'], 'Bất quy tắc.'],
      ['order', 'Sắp xếp: “Kia có phải kính của bạn không?”', ['Are', 'those', 'your', 'glasses?'], 'Are those your glasses?']
    ],
    hoithoai: {
      ctx: 'Em giúp đồng nghiệp người Mỹ, chị Kate, tìm đồ bị thất lạc trong văn phòng.', vai: 'Kate hỏi, em chỉ đồ vật.', ai: '👩 Kate',
      luot: [
        T(['Where is my key?', '', 'Chìa khóa của tôi đâu?'], ['Is this your key? It\'s on the table.', '', 'Đây có phải chìa khóa của chị không? Nó ở trên bàn.', 'this + số ít.'], ['Is these your key?', '', 'key số ít → this.'], ['It is a umbrella.', '', 'Lạc đề, và phải là an umbrella.']),
        T(['Yes! Thanks. And my glasses?', '', 'Đúng rồi! Cảm ơn. Còn kính của tôi?'], ['Are those your glasses? Near the window.', '', 'Kia có phải kính chị không? Gần cửa sổ ấy.', 'glasses số nhiều + ở xa → those.'], ['Is that your glasses?', '', 'glasses luôn số nhiều → Are those …'], ['This are glasses.', '', 'Sai ngữ pháp.']),
        T(['Yes, they are! Do you have an umbrella?', '', 'Đúng rồi! Bạn có ô không?'], ['Yes, I have an umbrella in my bag.', '', 'Có, tôi có một cái ô trong túi.', 'an umbrella.'], ['Yes, I have a umbrella.', '', 'Âm đầu nguyên âm → an.'], ['Yes, it is an umbrella.', '', 'Chưa trả lời câu hỏi "có không".']),
        T(['Great, thank you so much!', '', 'Tuyệt, cảm ơn nhiều!'], ['You\'re welcome!', '', 'Không có gì!', 'Đáp lời cảm ơn.'], ['Thank you!', '', 'Người được cảm ơn nói You\'re welcome.'], ['Sorry!', '', 'Không cần xin lỗi.'])
      ], ket: 'Em đã dùng this/that/these/those và a/an đúng.'
    },
    tom: ['a/an theo âm', 'this/that/these/those', 'Số nhiều có quy tắc và bất quy tắc'], nguphap: 'a/an; this/that/these/those; danh từ số nhiều', phatam: '-es /ɪz/: watches, glasses',
    loi: ['a umbrella, an university', 'this glasses', 'womans, childs'], btvn: ['Chỉ 10 đồ vật trong nhà và nói This is a/an …', 'Viết số nhiều của 10 danh từ', 'Đặt 4 câu với this/that/these/those']
  };

  /* ================= NGÀY 11 ================= */
  const d11 = {
    n: 11, ten: 'Thời gian: giờ, thứ, tháng', kinds: K,
    muc: 'Hỏi và nói giờ, thứ, tháng, ngày sinh; dùng giới từ at/on/in với thời gian.',
    hoc: `<h4>1. Nói giờ</h4><ul>${ex('What time is it?', '', 'Mấy giờ rồi?')}${ex('It\'s seven o\'clock.', '', '7 giờ đúng.')}${ex('It\'s half past seven.', '', '7 giờ rưỡi.')}${ex('It\'s seven thirty.', '', '7 giờ 30 (cách nói đơn giản).')}</ul>
      <h4>2. Thứ trong tuần (luôn viết hoa)</h4>${reads([['Monday', 'Thứ Hai', ''], ['Tuesday', 'Thứ Ba', ''], ['Wednesday', 'Thứ Tư', ''], ['Thursday', 'Thứ Năm', ''], ['Friday', 'Thứ Sáu', ''], ['Saturday', 'Thứ Bảy', ''], ['Sunday', 'Chủ nhật', '']])}
      <h4>3. Giới từ thời gian: at – on – in</h4>${tbl(['Giới từ', 'Dùng với', 'Ví dụ'], ['<tr><td><b>at</b></td><td>giờ cụ thể</td><td>at 8 o\'clock, at noon</td></tr>', '<tr><td><b>on</b></td><td>thứ, ngày</td><td>on Monday, on May 10th</td></tr>', '<tr><td><b>in</b></td><td>tháng, năm, buổi</td><td>in June, in 2026, in the morning</td></tr>'])}
      <h4>4. Ngày sinh</h4><ul>${ex('When is your birthday?', '', 'Sinh nhật bạn khi nào?')}${ex('It\'s on March 5th.', '', 'Vào ngày 5 tháng 3.')}</ul>`,
    vocab: [
      w('Monday', '/ˈmʌndeɪ/', 'thứ Hai', 'Viết hoa.', ['See you on Monday.', '/siː juː ɑːn ˈmʌndeɪ/', 'Hẹn gặp thứ Hai.']),
      w('Wednesday', '/ˈwenzdeɪ/', 'thứ Tư', 'Chữ d đầu câm.', ['The meeting is on Wednesday.', '/ðə ˈmiːtɪŋ ɪz ɑːn ˈwenzdeɪ/', 'Cuộc họp vào thứ Tư.']),
      w('Sunday', '/ˈsʌndeɪ/', 'Chủ nhật', '', ['I relax on Sunday.', '/aɪ rɪˈlæks ɑːn ˈsʌndeɪ/', 'Chủ nhật tôi nghỉ ngơi.']),
      w('weekend', '/ˈwiːkend/', 'cuối tuần', '', ['Have a nice weekend!', '/hæv ə naɪs ˈwiːkend/', 'Cuối tuần vui vẻ!']),
      w('morning', '/ˈmɔːrnɪŋ/', 'buổi sáng', 'in the morning.', ['I run in the morning.', '/aɪ rʌn ɪn ðə ˈmɔːrnɪŋ/', 'Tôi chạy bộ buổi sáng.']),
      w('afternoon', '/ˌæftərˈnuːn/', 'buổi chiều', '', ['See you this afternoon.', '/siː juː ðɪs ˌæftərˈnuːn/', 'Hẹn gặp chiều nay.']),
      w('o\'clock', '/əˈklɑːk/', 'giờ đúng', '', ['It\'s nine o\'clock.', '/ɪts naɪn əˈklɑːk/', '9 giờ đúng.']),
      w('half past', '/hæf pæst/', 'rưỡi (giờ)', '', ['It\'s half past six.', '/ɪts hæf pæst sɪks/', '6 giờ rưỡi.']),
      w('January', '/ˈdʒænjueri/', 'tháng Một', 'Viết hoa.', ['My birthday is in January.', '/maɪ ˈbɜːrθdeɪ ɪz ɪn ˈdʒænjueri/', 'Sinh nhật tôi vào tháng Một.']),
      w('birthday', '/ˈbɜːrθdeɪ/', 'sinh nhật', '', ['Happy birthday!', '/ˈhæpi ˈbɜːrθdeɪ/', 'Chúc mừng sinh nhật!']),
      w('today', '/təˈdeɪ/', 'hôm nay', '', ['Today is Friday.', '/təˈdeɪ ɪz ˈfraɪdeɪ/', 'Hôm nay là thứ Sáu.']),
      w('tomorrow', '/təˈmɑːroʊ/', 'ngày mai', '', ['See you tomorrow!', '/siː juː təˈmɑːroʊ/', 'Mai gặp nhé!'])
    ],
    qs: [
      ['mc', 'The meeting is ___ Monday.', 'on', ['in', 'at', 'to'], 'Thứ → on.'],
      ['mc', 'I get up ___ 6 o\'clock.', 'at', ['on', 'in', 'to'], 'Giờ cụ thể → at.'],
      ['mc', 'My birthday is ___ June.', 'in', ['on', 'at', 'to'], 'Tháng → in.'],
      ['mc', '“7 giờ rưỡi” là?', 'half past seven', ['half seven past', 'seven half', 'past half seven'], 'half past + giờ.'],
      ['mc', 'Thứ Tư viết đúng là?', 'Wednesday', ['Wensday', 'wednesday', 'Wedensday'], 'Viết hoa, có d câm.'],
      ['hear', 'See you tomorrow!', 'Mai gặp nhé!', ['Hôm nay gặp nhé!', 'Cuối tuần gặp nhé!', 'Thứ Hai gặp nhé!'], 'tomorrow = ngày mai.'],
      ['order', 'Sắp xếp: “Sinh nhật bạn khi nào?”', ['When', 'is', 'your', 'birthday?'], 'When is your birthday?']
    ],
    hoithoai: {
      ctx: 'Em đặt lịch hẹn với phòng khám nha khoa qua quầy lễ tân.', vai: 'Lễ tân hỏi, em chọn thời gian.', ai: '👩‍⚕️ Receptionist',
      luot: [
        T(['When do you want to come?', '', 'Khi nào bạn muốn đến?'], ['On Wednesday, please.', '', 'Thứ Tư, làm ơn.', 'on + thứ.'], ['In Wednesday.', '', 'Thứ dùng on.'], ['At January.', '', 'Tháng dùng in, và nên chọn ngày cụ thể.']),
        T(['Morning or afternoon?', '', 'Buổi sáng hay chiều?'], ['In the afternoon.', '', 'Buổi chiều.', 'in the afternoon.'], ['On the afternoon.', '', 'Buổi dùng in the.'], ['At afternoon.', '', 'Buổi dùng in the.']),
        T(['Is half past two OK?', '', '2 giờ rưỡi được không?'], ['Yes, half past two is fine.', '', 'Vâng, 2 giờ rưỡi được.', 'Xác nhận lại giờ.'], ['Yes, two half.', '', 'Phải nói half past two.'], ['No, it\'s Sunday.', '', 'Lạc đề.']),
        T(['Great. See you on Wednesday!', '', 'Tốt. Hẹn gặp thứ Tư!'], ['Thank you. See you!', '', 'Cảm ơn. Hẹn gặp!', 'Kết thúc lịch sự.'], ['Happy birthday!', '', '😄 Lạc đề.'], ['Good morning!', '', 'Đang chia tay.'])
      ], ket: 'Em đã đặt lịch hẹn với đúng giờ, thứ, buổi.'
    },
    tom: ['Nói giờ', 'Thứ, tháng', 'at/on/in', 'Ngày sinh'], nguphap: 'What time is it?; at + giờ, on + thứ/ngày, in + tháng/năm/buổi', phatam: 'Wednesday (d câm), o\'clock',
    loi: ['Dùng sai at/on/in', 'Không viết hoa thứ, tháng', 'Đọc Wednesday có âm d'], btvn: ['Viết lịch tuần này bằng tiếng Anh', 'Nói giờ 5 lần trong ngày', 'Hỏi sinh nhật 3 người']
  };

  /* ================= NGÀY 12 ================= */
  const d12 = {
    n: 12, ten: 'Thì hiện tại đơn: thói quen hằng ngày', kinds: K,
    muc: 'Kể thói quen hằng ngày, chia động từ ngôi thứ ba (-s/-es), dùng do/does và trạng từ tần suất.',
    hoc: `<h4>1. Công thức</h4>${F(['I / you / we / they + V', '→', 'he / she / it + V-s/es'])}<ul>${ex('I get up at six.', '', 'Tôi dậy lúc 6 giờ.')}${ex('She gets up at seven.', '', 'Cô ấy dậy lúc 7 giờ.')}${ex('He watches TV.', '', 'Anh ấy xem TV.')}</ul><p class="small">go → goes · do → does · have → <b>has</b> · study → studies</p>
      <h4>2. Phủ định và câu hỏi với do / does</h4>${tbl(['', 'I / you / we / they', 'he / she / it'], ['<tr><td>Phủ định</td><td>I don\'t work on Sunday.</td><td>She doesn\'t work on Sunday.</td></tr>', '<tr><td>Câu hỏi</td><td>Do you work on Sunday?</td><td>Does she work on Sunday?</td></tr>'])}${tip('⚠️ Sau doesn\'t / does thì động từ <b>bỏ -s</b>: ✘ She doesn\'t works → ✔ She doesn\'t work.')}
      <h4>3. Trạng từ tần suất (đứng trước động từ thường, sau to be)</h4><p>always (luôn luôn) > usually (thường) > sometimes (thỉnh thoảng) > never (không bao giờ). ${sp('I always have breakfast.|She is never late.')}</p>`,
    vocab: [
      w('get up', '/ɡet ʌp/', 'thức dậy', '', ['I get up at six.', '/aɪ ɡet ʌp æt sɪks/', 'Tôi dậy lúc 6 giờ.']),
      w('go to work', '/ɡoʊ tə wɜːrk/', 'đi làm', '', ['He goes to work by bus.', '/hiː ɡoʊz tə wɜːrk baɪ bʌs/', 'Anh ấy đi làm bằng xe buýt.']),
      w('have breakfast', '/hæv ˈbrekfəst/', 'ăn sáng', '', ['We have breakfast at seven.', '/wiː hæv ˈbrekfəst æt ˈsevən/', 'Chúng tôi ăn sáng lúc 7 giờ.']),
      w('watch TV', '/wɑːtʃ ˌtiːˈviː/', 'xem TV', '', ['She watches TV at night.', '/ʃiː ˈwɑːtʃɪz ˌtiːˈviː æt naɪt/', 'Cô ấy xem TV buổi tối.']),
      w('go to bed', '/ɡoʊ tə bed/', 'đi ngủ', '', ['I go to bed at eleven.', '/aɪ ɡoʊ tə bed æt ɪˈlevən/', 'Tôi đi ngủ lúc 11 giờ.']),
      w('always', '/ˈɔːlweɪz/', 'luôn luôn', '', ['He always drinks coffee.', '/hiː ˈɔːlweɪz drɪŋks ˈkɔːfi/', 'Anh ấy luôn uống cà phê.']),
      w('usually', '/ˈjuːʒuəli/', 'thường thường', '', ['I usually walk to work.', '/aɪ ˈjuːʒuəli wɔːk tə wɜːrk/', 'Tôi thường đi bộ đi làm.']),
      w('sometimes', '/ˈsʌmtaɪmz/', 'thỉnh thoảng', '', ['We sometimes eat out.', '/wiː ˈsʌmtaɪmz iːt aʊt/', 'Thỉnh thoảng chúng tôi ăn ngoài.']),
      w('never', '/ˈnevər/', 'không bao giờ', '', ['She is never late.', '/ʃiː ɪz ˈnevər leɪt/', 'Cô ấy không bao giờ đến muộn.']),
      w('every day', '/ˈevri deɪ/', 'mỗi ngày', 'Thường đứng cuối câu.', ['I study English every day.', '/aɪ ˈstʌdi ˈɪŋɡlɪʃ ˈevri deɪ/', 'Tôi học tiếng Anh mỗi ngày.']),
      w('work', '/wɜːrk/', 'làm việc; công việc', '', ['Where do you work?', '/wer duː juː wɜːrk/', 'Bạn làm việc ở đâu?']),
      w('study', '/ˈstʌdi/', 'học', 'he/she studies.', ['He studies at night.', '/hiː ˈstʌdiz æt naɪt/', 'Anh ấy học buổi tối.'])
    ],
    qs: [
      ['mc', 'She ___ to work at 8.', 'goes', ['go', 'going', 'is go'], 'she + V-es.'],
      ['mc', 'He ___ TV every night.', 'watches', ['watch', 'watchs', 'is watch'], 'ch + es.'],
      ['mc', 'Câu đúng là?', 'She doesn\'t work on Sunday.', ['She don\'t work on Sunday.', 'She doesn\'t works on Sunday.', 'She not work on Sunday.'], 'doesn\'t + V nguyên mẫu.'],
      ['mc', '___ you get up early?', 'Do', ['Does', 'Are', 'Is'], 'you + do.'],
      ['mc', 'Vị trí đúng của always?', 'I always drink coffee.', ['I drink always coffee.', 'Always I drink coffee.', 'I drink coffee always.'], 'Trước động từ thường.'],
      ['mc', 'He ___ English every day.', 'studies', ['studys', 'study', 'studying'], 'Phụ âm + y → ies.'],
      ['order', 'Sắp xếp: “Tôi thường đi ngủ lúc 11 giờ.”', ['I', 'usually', 'go to bed', 'at eleven.'], 'I usually go to bed at eleven.']
    ],
    hoithoai: {
      ctx: 'Một khách nước ngoài phỏng vấn em cho bài khảo sát "Một ngày của người Việt".', vai: 'Người phỏng vấn hỏi, em kể thói quen.', ai: '🎤 Interviewer',
      luot: [
        T(['What time do you get up?', '', 'Bạn dậy lúc mấy giờ?'], ['I usually get up at half past five.', '', 'Tôi thường dậy lúc 5 rưỡi.', 'usually trước động từ.'], ['I get up usually at five.', '', 'usually đứng trước get up.'], ['I gets up at five.', '', 'I + V nguyên mẫu.']),
        T(['Do you have breakfast at home?', '', 'Bạn ăn sáng ở nhà không?'], ['No, I don\'t. I have breakfast near my office.', '', 'Không. Tôi ăn sáng gần công ty.', 'No, I don\'t.'], ['No, I doesn\'t.', '', 'I + don\'t.'], ['No, I not.', '', 'Thiếu trợ động từ.']),
        T(['What does your wife do in the evening?', '', 'Buổi tối vợ bạn làm gì?'], ['She watches TV and studies English.', '', 'Cô ấy xem TV và học tiếng Anh.', 'she + watches/studies.'], ['She watch TV.', '', 'she + watches.'], ['She does watches TV.', '', 'Câu khẳng định không dùng does.']),
        T(['Do you ever go to bed late?', '', 'Bạn có bao giờ đi ngủ muộn không?'], ['Sometimes, on Saturday.', '', 'Thỉnh thoảng, vào thứ Bảy.', 'Trả lời ngắn với trạng từ tần suất.'], ['Never always.', '', 'Mâu thuẫn.'], ['Yes, I go bed.', '', 'Thiếu to: go to bed.'])
      ], ket: 'Em đã kể một ngày của mình bằng thì hiện tại đơn.'
    },
    tom: ['Hiện tại đơn', 'V-s/es với he/she/it', 'do/does', 'Trạng từ tần suất'], nguphap: 'S + V(s/es); don\'t/doesn\'t + V; Do/Does + S + V?; always/usually/sometimes/never', phatam: 'Đuôi -s/-es: gets /s/, goes /z/, watches /ɪz/',
    loi: ['Quên -s với he/she/it', 'doesn\'t works', 'Đặt trạng từ tần suất sai chỗ'], btvn: ['Viết 8 câu kể một ngày của em', 'Viết 5 câu về thói quen của một người trong nhà (he/she)', 'Đặt 3 câu hỏi Do/Does']
  };

  /* ================= NGÀY 13 ================= */
  const d13 = {
    n: 13, ten: 'Đồ ăn, thức uống và gọi món', kinds: K,
    muc: 'Gọi món lịch sự với I\'d like / Can I have, dùng some/any, hỏi và trả tiền ở quán.',
    hoc: `<h4>1. Gọi món lịch sự</h4><ul>${ex('I\'d like a coffee, please.', '/aɪd laɪk ə ˈkɔːfi pliːz/', 'Cho tôi một cà phê.')}${ex('Can I have the chicken rice?', '', 'Cho tôi cơm gà được không?')}${ex('Could I see the menu, please?', '', 'Cho tôi xem thực đơn được không?')}</ul><p class="small">I'd like = I would like (lịch sự hơn I want).</p>
      <h4>2. some / any</h4>${tbl(['', 'Dùng', 'Ví dụ'], ['<tr><td>some</td><td>câu khẳng định, lời mời</td><td>I\'d like some water. · Would you like some tea?</td></tr>', '<tr><td>any</td><td>câu phủ định, câu hỏi</td><td>We don\'t have any fish. · Do you have any juice?</td></tr>'])}
      <h4>3. Danh từ đếm được – không đếm được</h4><p><b>Không đếm được</b> (không thêm -s, không dùng a): water, rice, bread, coffee, tea. Muốn đếm thì dùng lượng: a glass of water, a bowl of rice, a cup of tea.</p>
      <h4>4. Thanh toán</h4><ul>${ex('Can I have the bill, please?', '', 'Cho tôi hóa đơn (tính tiền).')}${ex('It\'s delicious!', '', 'Ngon quá!')}</ul>`,
    vocab: [
      w('rice', '/raɪs/', 'cơm, gạo', 'Không đếm được.', ['A bowl of rice, please.', '/ə boʊl əv raɪs pliːz/', 'Một bát cơm, làm ơn.']),
      w('chicken', '/ˈtʃɪkɪn/', 'thịt gà, con gà', '', ['I\'d like chicken rice.', '/aɪd laɪk ˈtʃɪkɪn raɪs/', 'Cho tôi cơm gà.']),
      w('beef', '/biːf/', 'thịt bò', '', ['Beef noodle soup.', '/biːf ˈnuːdəl suːp/', 'Phở bò.']),
      w('fish', '/fɪʃ/', 'cá', '', ['Do you have any fish?', '/duː juː hæv ˈeni fɪʃ/', 'Có món cá không?']),
      w('noodles', '/ˈnuːdəlz/', 'mì, bún, phở (sợi)', '', ['I love noodles.', '/aɪ lʌv ˈnuːdəlz/', 'Tôi rất thích các món sợi.']),
      w('bread', '/bred/', 'bánh mì', 'Không đếm được.', ['Some bread, please.', '/sʌm bred pliːz/', 'Cho ít bánh mì.']),
      w('water', '/ˈwɔːtər/', 'nước', 'Không đếm được.', ['A glass of water, please.', '/ə ɡlæs əv ˈwɔːtər pliːz/', 'Một cốc nước, làm ơn.']),
      w('tea', '/tiː/', 'trà', '', ['Would you like some tea?', '/wʊd juː laɪk sʌm tiː/', 'Bạn uống chút trà không?']),
      w('juice', '/dʒuːs/', 'nước ép', '', ['An orange juice, please.', '/ən ˈɔːrɪndʒ dʒuːs pliːz/', 'Một nước cam, làm ơn.']),
      w('menu', '/ˈmenjuː/', 'thực đơn', '', ['Could I see the menu?', '/kʊd aɪ siː ðə ˈmenjuː/', 'Cho tôi xem thực đơn?']),
      w('bill', '/bɪl/', 'hóa đơn (tính tiền)', 'Anh: bill; Mỹ hay nói check.', ['The bill, please.', '/ðə bɪl pliːz/', 'Tính tiền giúp tôi.']),
      w('delicious', '/dɪˈlɪʃəs/', 'ngon', '', ['It\'s delicious!', '/ɪts dɪˈlɪʃəs/', 'Ngon quá!'])
    ],
    qs: [
      ['mc', 'Gọi món lịch sự nhất là?', 'I\'d like a coffee, please.', ['Give me coffee.', 'Coffee!', 'I want coffee now.'], 'I\'d like … please.'],
      ['mc', 'Do you have ___ fish?', 'any', ['some', 'a', 'an'], 'Câu hỏi → any.'],
      ['mc', 'I\'d like ___ water.', 'some', ['any', 'a', 'an'], 'Khẳng định, không đếm được → some.'],
      ['mc', '“Một cốc nước” là?', 'a glass of water', ['a water', 'a waters', 'one waters'], 'water không đếm được.'],
      ['mc', 'Muốn tính tiền, em nói?', 'Can I have the bill, please?', ['Can I have the menu, please?', 'It\'s delicious!', 'I\'d like some bread.'], 'bill = hóa đơn.'],
      ['hear', 'It\'s delicious!', 'Ngon quá!', ['Đắt quá!', 'Đói quá!', 'Nóng quá!'], 'delicious = ngon.'],
      ['order', 'Sắp xếp: “Cho tôi xem thực đơn được không?”', ['Could', 'I', 'see', 'the menu?'], 'Could I see the menu?']
    ],
    hoithoai: {
      ctx: 'Em đưa khách nước ngoài đi ăn trưa. Phục vụ là người nói tiếng Anh.', vai: 'Phục vụ hỏi, em gọi món.', ai: '🧑‍🍳 Waiter',
      luot: [
        T(['Hello! Are you ready to order?', '', 'Xin chào! Quý khách gọi món chưa ạ?'], ['Could I see the menu, please?', '', 'Cho tôi xem thực đơn được không?', 'Xin thực đơn lịch sự.'], ['Give me menu.', '', 'Thiếu lịch sự và thiếu the.'], ['I\'m ready the bill.', '', 'Sai nghĩa.']),
        T(['Here you are. What would you like?', '', 'Đây ạ. Quý khách muốn dùng gì?'], ['I\'d like beef noodle soup and some chicken rice.', '', 'Cho tôi phở bò và cơm gà.', 'I\'d like …'], ['I like beef.', '', 'I like = tôi thích (sở thích), không phải gọi món.'], ['I\'d like a rice.', '', 'rice không đếm được.']),
        T(['Anything to drink?', '', 'Uống gì không ạ?'], ['Two glasses of water and an orange juice, please.', '', 'Hai cốc nước và một nước cam.', 'glasses of water; an orange juice.'], ['Two waters glass.', '', 'Sai trật tự.'], ['Any juice, please.', '', 'Câu khẳng định dùng some / an.']),
        T(['How is your food?', '', 'Đồ ăn thế nào ạ?'], ['It\'s delicious! Can I have the bill, please?', '', 'Ngon lắm! Cho tôi tính tiền nhé.', 'Khen + xin hóa đơn.'], ['It\'s menu.', '', 'Sai nghĩa.'], ['I\'m delicious!', '', '"Tôi ngon" 😄 – phải là It\'s delicious.'])
      ], ket: 'Em đã gọi món, gọi đồ uống và tính tiền bằng tiếng Anh.'
    },
    tom: ['I\'d like / Can I have', 'some / any', 'Danh từ không đếm được', 'Tính tiền'], nguphap: 'I\'d like + N; some/any; a glass/bowl/cup of + N', phatam: 'I\'d like (nối âm), delicious /dɪˈlɪʃəs/',
    loi: ['Dùng I want thay I\'d like', 'a rice, waters', 'Dùng some trong câu hỏi thông thường'], btvn: ['Viết thực đơn bữa sáng bằng tiếng Anh', 'Tập gọi món cho 3 người', 'Đặt 3 câu với some và 3 câu với any']
  };

  /* ================= NGÀY 14 ================= */
  const d14 = {
    n: 14, ten: 'Ôn tập tuần 2 và hội thoại tổng hợp', vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Hệ thống ngữ pháp tuần 2, hội thoại tổng hợp, kiểm tra 20 câu.',
    hoc: `<h4>Ngữ pháp tuần 2</h4>${tbl(['Chủ điểm', 'Ví dụ'], ['<tr><td>to be</td><td>I\'m busy. She isn\'t here. Are they Vietnamese?</td></tr>', '<tr><td>Sở hữu</td><td>my, your, his, her, our, their; Nam\'s car</td></tr>', '<tr><td>have/has</td><td>I have a son. She has a car.</td></tr>', '<tr><td>a/an, this/that/these/those</td><td>an umbrella; Are those your glasses?</td></tr>', '<tr><td>Thời gian</td><td>at 7 o\'clock, on Monday, in June</td></tr>', '<tr><td>Hiện tại đơn</td><td>She goes to work. Does he study? He doesn\'t work.</td></tr>', '<tr><td>Gọi món</td><td>I\'d like some water. Do you have any fish?</td></tr>'])}`,
    qs: [['mc', 'He ___ a car, but he ___ drive.', 'has / doesn\'t', ['have / don\'t', 'has / don\'t', 'have / doesn\'t'], 'he + has / doesn\'t.'], ['mc', 'I\'d like ___ apple.', 'an', ['a', 'some', 'any'], 'Đếm được, âm đầu nguyên âm.']],
    hoithoai: {
      ctx: 'Em gặp lại Mike ở quán cà phê cuối tuần và trò chuyện.', vai: 'Hội thoại tổng hợp tuần 2.', ai: '👨 Mike',
      luot: [
        T(['Hi! Is this your daughter?', '', 'Chào! Đây là con gái bạn à?'], ['Yes, this is my daughter, Hoa. She\'s eight.', '', 'Đúng, đây là con gái tôi, Hoa. Bé 8 tuổi.', 'my daughter; She\'s eight.'], ['Yes, this is I daughter.', '', 'I → my.'], ['Yes, he is eight.', '', 'Con gái → she.']),
        T(['What does she do on weekends?', '', 'Cuối tuần bé làm gì?'], ['She usually goes swimming on Saturday.', '', 'Bé thường đi bơi vào thứ Bảy.', 'she + goes; on Saturday.'], ['She usually go swimming in Saturday.', '', 'goes; on Saturday.'], ['She is weekend.', '', 'Sai nghĩa.']),
        T(['Would you like some coffee?', '', 'Bạn uống cà phê không?'], ['Yes, I\'d like a coffee, please.', '', 'Có, cho tôi một cà phê.', 'Nhận lời lịch sự.'], ['Yes, I like coffee.', '', 'Nhận lời mời dùng I\'d like.'], ['Yes, any coffee.', '', 'Khẳng định không dùng any.']),
        T(['What time do you go home?', '', 'Mấy giờ bạn về?'], ['At half past four.', '', 'Lúc 4 rưỡi.', 'at + giờ.'], ['On half four.', '', 'at half past four.'], ['In four o\'clock.', '', 'Giờ dùng at.'])
      ], ket: 'Em đã hoàn thành tuần 2! 🎉'
    },
    tom: ['Ôn tuần 2', 'Kiểm tra 20 câu'], nguphap: 'Ôn tuần 2', phatam: 'Ôn -s/-es',
    loi: ['Xem lại câu sai trong bài kiểm tra'], btvn: ['Dưới 7 điểm: ôn lại và làm lại', 'Viết đoạn 8 câu giới thiệu bản thân, gia đình và một ngày của em']
  };

  window.PLT_EN = { plan, stages, chart, H: { w, L, T, tbl, tip, ex, F, reads, sp, K }, days: [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14] };
})();

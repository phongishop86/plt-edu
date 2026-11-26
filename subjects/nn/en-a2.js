/* PLT-Edu · Tiếng Anh – Cấp 2 (A2): lộ trình 30 ngày, Ngày 1–14
   h = từ/câu, p = phiên âm IPA (giọng Mỹ), v = nghĩa · noi = câu luyện nói có ký hiệu ngữ điệu (*nhấn*, ↗, ↘, →, ‿) */
(function () {
  'use strict';
  const sp = PLT.LANG.sp;
  const w = (h, p, v, use, ex) => ({ h, p, v, use, ex });
  const L = (h, p, v) => ({ h, p: p || '', v });
  const T = (a, ok, ...bad) => ({ a: L(...a), o: [{ h: ok[0], p: '', v: ok[1], ok: 1, f: ok[2] }].concat(bad.map((b) => ({ h: b[0], p: '', f: b[1] }))) });
  const tbl = (head, rows) => `<div class="zh-scroll"><table class="dtable full zh-tb"><tr>${head.map((x) => `<th>${x}</th>`).join('')}</tr>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</table></div>`;
  const tip = (x) => `<div class="zh-tip">${x}</div>`;
  const ex = (h, v) => `<li>${h} ${sp(h)}<br><span class="muted">${v}</span></li>`;
  const exs = (a) => `<ul>${a.map(([h, v]) => ex(h, v)).join('')}</ul>`;
  const F = (parts) => `<div class="zh-formula small">${parts.map((x) => (x === '+' || x === '→' ? `<i>${x}</i>` : `<span>${x}</span>`)).join('')}</div>`;
  const reads = (a) => `<div class="zh-read">${a.map(([h, p, v]) => `<button class="zh-rd" data-say="${h}"><b>${h}</b><span>${p}</span><small>${v}</small></button>`).join('')}</div>`;
  const K = ['meaning', 'listen', 'listenWord', 'hanzi', 'write', 'match'];
  const G = (id, t) => `<p class="small">📐 Xem thêm: <a href="#/tieng-anh/ngu-phap/${id}">${t}</a> trong Sổ tay ngữ pháp.</p>`;

  const plan = [
    'Quá khứ đơn: kể việc hôm qua', 'Động từ bất quy tắc thông dụng', 'Kể chuyện cuối tuần và kỳ nghỉ', 'Quá khứ tiếp diễn: đang làm gì thì…', 'Hồi nhỏ: used to và could', 'Tiểu sử và các mốc cuộc đời', 'Ôn tập tuần 1 và kiểm tra',
    'Mô tả người: ngoại hình, tính cách', 'So sánh hơn', 'So sánh nhất và so sánh bằng', 'Mô tả thành phố và quê hương', 'Nhà cửa, đồ đạc và thuê nhà', 'Thời tiết và dự đoán với will', 'Ôn tập tuần 2 và hội thoại tổng hợp',
    'Kế hoạch tương lai: be going to', 'Mời, hẹn lịch, nhận lời và từ chối', 'Lời khuyên và nghĩa vụ: should, must, have to', 'Sức khoẻ: đi khám và mua thuốc', 'Lên kế hoạch chuyến đi và đặt vé', 'Ngân hàng và tiền bạc', 'Kiểm tra tổng hợp và mô phỏng giao tiếp',
    'Trải nghiệm: Have you ever…?', 'Cập nhật công việc: just, already, yet', 'Viết tin nhắn và email ngắn', 'Công nghệ và sự cố máy tính', 'Mua sắm online, đổi trả và phàn nàn', 'Phỏng vấn xin việc cơ bản', 'Nghe hiểu: thông báo và tin nhắn thoại', 'Mô phỏng tình huống liên tục', 'Kiểm tra cuối khoá A2 và lộ trình B1'
  ].map((ten, i) => ({ n: i + 1, ten }));
  const stages = [
    { ten: '📖 Giai đoạn 1 – Kể chuyện quá khứ', tu: 1, den: 7 }, { ten: '🖼️ Giai đoạn 2 – Mô tả và so sánh', tu: 8, den: 14 },
    { ten: '🗓️ Giai đoạn 3 – Kế hoạch và tình huống đời sống', tu: 15, den: 21 }, { ten: '💼 Giai đoạn 4 – Trải nghiệm, công việc, phản xạ', tu: 22, den: 30 }
  ];

  /* ================= NGÀY 1 ================= */
  const d1 = {
    n: 1, ten: 'Quá khứ đơn: kể việc hôm qua', kinds: K,
    muc: 'Dùng quá khứ đơn với động từ có quy tắc, đọc đúng đuôi -ed, hỏi và kể việc đã làm hôm qua.',
    hoc: `<h4>1. Công thức</h4>${F(['S', '+', 'V-ed', '+', 'thời gian quá khứ'])}${F(['S', '+', "didn't", '+', 'V'])}${F(['Did', '+', 'S', '+', 'V', '?'])}
      ${exs([['I worked late yesterday.', 'Hôm qua tôi làm việc muộn.'], ["She didn't call me.", 'Cô ấy đã không gọi cho tôi.'], ['Did you watch the match last night?', 'Tối qua bạn có xem trận đấu không?']])}
      <h4>2. Ba cách đọc đuôi -ed</h4>${tbl(['Đọc', 'Khi động từ tận cùng bằng âm', 'Ví dụ'], [['/t/', 'p, k, f, s, sh, ch', 'worked, stopped, washed'], ['/d/', 'âm hữu thanh và nguyên âm', 'played, called, cleaned'], ['/ɪd/', 't, d', 'wanted, visited, needed']])}${reads([['worked', '/wɜːrkt/', 'đã làm'], ['played', '/pleɪd/', 'đã chơi'], ['visited', '/ˈvɪzɪtɪd/', 'đã thăm']])}
      <h4>3. Từ chỉ thời gian quá khứ</h4><p>yesterday · last night / week / month / year · two days ago · in 2020 · this morning (khi buổi sáng đã qua)</p>
      ${tip('⚠️ Lỗi số 1 của người Việt: quên đổi động từ sang quá khứ vì tiếng Việt không chia thì. Mỗi khi có <b>yesterday, last, ago</b> → kiểm tra động từ.')}${G('qua-khu-don', 'Thì quá khứ đơn')}`,
    vocab: [
      w('yesterday', '/ˈjestərdeɪ/', 'hôm qua', '', ['I stayed home yesterday.', '', 'Hôm qua tôi ở nhà.']),
      w('last night', '/læst naɪt/', 'tối qua', '', ['I watched a film last night.', '', 'Tối qua tôi xem phim.']),
      w('ago', '/əˈɡoʊ/', 'cách đây', 'Đứng sau khoảng thời gian.', ['I moved here three years ago.', '', 'Tôi chuyển đến đây ba năm trước.']),
      w('worked', '/wɜːrkt/', 'đã làm việc', '-ed đọc /t/.', ['He worked until 9 p.m.', '', 'Anh ấy làm đến 9 giờ tối.']),
      w('stayed', '/steɪd/', 'đã ở lại', '-ed đọc /d/.', ['We stayed at a small hotel.', '', 'Chúng tôi ở một khách sạn nhỏ.']),
      w('visited', '/ˈvɪzɪtɪd/', 'đã thăm', '-ed đọc /ɪd/.', ['I visited my grandmother.', '', 'Tôi đã thăm bà.']),
      w('cooked', '/kʊkt/', 'đã nấu', '', ['My wife cooked dinner.', '', 'Vợ tôi nấu bữa tối.']),
      w('cleaned', '/kliːnd/', 'đã dọn dẹp', '', ['I cleaned the house on Sunday.', '', 'Chủ nhật tôi dọn nhà.']),
      w('called', '/kɔːld/', 'đã gọi điện', '', ['A customer called this morning.', '', 'Sáng nay có khách gọi.']),
      w('finished', '/ˈfɪnɪʃt/', 'đã hoàn thành', '', ['I finished the report at five.', '', 'Tôi làm xong báo cáo lúc 5 giờ.']),
      w('waited', '/ˈweɪtɪd/', 'đã chờ', '', ['We waited for an hour.', '', 'Chúng tôi chờ một tiếng.']),
      w('tired', '/taɪərd/', 'mệt', '', ['I was very tired last night.', '', 'Tối qua tôi rất mệt.'])
    ],
    qs: [
      ['mc', 'I ___ my parents last weekend.', 'visited', ['visit', 'visiting', 'am visit'], 'last weekend → quá khứ.'],
      ['mc', 'Đuôi -ed trong "worked" đọc là?', '/t/', ['/d/', '/ɪd/', 'không đọc'], 'k là âm vô thanh → /t/.'],
      ['mc', 'Đuôi -ed trong "wanted" đọc là?', '/ɪd/', ['/t/', '/d/', '/ed/ như tiếng Việt'], 'Tận cùng t → /ɪd/.'],
      ['mc', '___ you call the client yesterday?', 'Did', ['Do', 'Were', 'Have'], 'Câu hỏi quá khứ → Did.'],
      ['mc', 'Câu đúng là?', "She didn't finish her homework.", ["She didn't finished her homework.", 'She not finished her homework.', "She doesn't finished her homework."], 'didn\'t + V nguyên mẫu.'],
      ['hear', 'I moved to Ho Chi Minh City five years ago.', 'Tôi chuyển đến TP.HCM 5 năm trước.', ['Tôi sẽ chuyển đến TP.HCM trong 5 năm.', 'Tôi sống ở TP.HCM 5 năm.', 'Tôi rời TP.HCM 5 năm trước.'], 'moved + ago.'],
      ['order', 'Sắp xếp: “Tối qua tôi làm việc muộn.”', ['I', 'worked', 'late', 'last night.'], 'I worked late last night.']
    ],
    noi: [['I *worked* *late* *yesterday*. ↘', 'Hôm qua tôi làm muộn.'], ['Did you *watch* the *match* last *night*? ↗', 'Tối qua bạn có xem trận đấu không?'], ['We *waited* for an *hour*. ↘', 'Chúng tôi đã chờ một tiếng.'], ['What did you *do* *yesterday*? ↘', 'Hôm qua bạn làm gì?']],
    hoithoai: {
      ctx: 'Sáng thứ Hai ở văn phòng, đồng nghiệp hỏi em về ngày hôm qua.', vai: 'Đồng nghiệp hỏi, em kể lại.', ai: '👩‍💼 Emma',
      luot: [
        T(['Morning! You look tired. What did you do yesterday?', '', 'Chào buổi sáng! Trông bạn mệt. Hôm qua bạn làm gì?'], ['I cleaned the whole house and cooked for my family.', 'Tôi dọn cả nhà và nấu ăn cho gia đình.', 'Quá khứ đơn đúng.'], ['I clean the whole house.', 'Thiếu quá khứ: cleaned.'], ['Yes, I am tired yesterday.', 'Sai thì: was tired.']),
        T(['Wow, busy day! Did you go out in the evening?', '', 'Ngày bận rộn nhỉ! Tối bạn có đi chơi không?'], ["No, I didn't. I stayed home and watched TV.", 'Không. Tôi ở nhà xem TV.', 'Trả lời ngắn + kể thêm.'], ["No, I didn't stayed home.", "didn't + V nguyên mẫu."], ['Yes, I go out.', 'Sai thì.']),
        T(['Did you finish the report for Mr. Lee?', '', 'Bạn làm xong báo cáo cho ông Lee chưa?'], ['Yes, I finished it on Friday and emailed it to him.', 'Rồi, tôi làm xong thứ Sáu và đã email cho ông ấy.', 'Hai động từ quá khứ nối bằng and.'], ['Yes, I finish it.', 'Sai thì.'], ['Yes, I did finished.', 'did + V nguyên mẫu, không -ed.'])
      ], ket: 'Em đã kể ngày hôm qua bằng quá khứ đơn.'
    },
    tom: ['S + V-ed', "didn't + V", 'Did + S + V?', '3 cách đọc -ed'], nguphap: 'Quá khứ đơn với động từ có quy tắc', phatam: '-ed: /t/ worked, /d/ played, /ɪd/ visited',
    loi: ['Quên chia quá khứ', "didn't + V-ed", 'Đọc -ed thành "ét"'], btvn: ['Viết 6 câu về việc em làm hôm qua', 'Đọc to 9 động từ -ed, chia vào 3 nhóm /t/ /d/ /ɪd/', 'Dùng 🎤 luyện 4 câu mẫu đến khi đạt ≥ 80%']
  };

  /* ================= NGÀY 2 ================= */
  const d2 = {
    n: 2, ten: 'Động từ bất quy tắc thông dụng', kinds: K,
    muc: 'Thuộc 20 động từ bất quy tắc hay dùng nhất và dùng chúng để kể chuyện.',
    hoc: `<h4>1. 20 động từ bất quy tắc phải thuộc (bấm để nghe)</h4>${tbl(['V1', 'V2 (quá khứ)', 'Nghĩa', 'V1', 'V2', 'Nghĩa'], [['go', 'went', 'đi', 'buy', 'bought', 'mua'], ['have', 'had', 'có, ăn', 'take', 'took', 'lấy, đi (xe)'], ['get', 'got', 'nhận, đến', 'make', 'made', 'làm, chế tạo'], ['see', 'saw', 'thấy', 'come', 'came', 'đến'], ['eat', 'ate', 'ăn', 'drink', 'drank', 'uống'], ['do', 'did', 'làm', 'give', 'gave', 'cho'], ['say', 'said', 'nói', 'tell', 'told', 'kể, bảo'], ['meet', 'met', 'gặp', 'leave', 'left', 'rời đi'], ['write', 'wrote', 'viết', 'read', 'read /red/', 'đọc'], ['find', 'found', 'tìm thấy', 'think', 'thought', 'nghĩ']])}
      ${reads([['went', '/went/', 'đã đi'], ['bought', '/bɔːt/', 'đã mua'], ['thought', '/θɔːt/', 'đã nghĩ'], ['read', '/red/', 'đã đọc'], ['said', '/sed/', 'đã nói']])}
      <h4>2. Mẹo nhớ theo nhóm âm</h4><ul><li><b>-ought / -aught</b>: buy → bought, think → thought, bring → brought, teach → taught</li><li><b>i → a</b>: drink → drank, swim → swam, begin → began</li><li><b>Giữ nguyên</b>: put, cut, cost, hit, read (đổi cách đọc)</li></ul>
      ${tip('🔑 Câu hỏi và phủ định vẫn dùng did + V1: <i>Did you <b>go</b>?</i> – <i>I didn\'t <b>buy</b> it.</i>')}`,
    vocab: [
      w('went', '/went/', 'đã đi (go)', '', ['We went to Vung Tau on Sunday.', '', 'Chủ nhật chúng tôi đi Vũng Tàu.']),
      w('bought', '/bɔːt/', 'đã mua (buy)', '', ['I bought a new phone.', '', 'Tôi đã mua điện thoại mới.']),
      w('took', '/tʊk/', 'đã lấy, đã đi xe (take)', '', ['She took a taxi to the airport.', '', 'Cô ấy đi taxi ra sân bay.']),
      w('met', '/met/', 'đã gặp (meet)', '', ['I met an old friend.', '', 'Tôi gặp một người bạn cũ.']),
      w('saw', '/sɔː/', 'đã thấy, đã xem (see)', '', ['We saw a great film.', '', 'Chúng tôi xem một bộ phim hay.']),
      w('ate', '/eɪt/', 'đã ăn (eat)', '', ['They ate seafood by the beach.', '', 'Họ ăn hải sản bên bờ biển.']),
      w('got', '/ɡɑːt/', 'đã nhận, đã đến (get)', '', ['I got home at ten.', '', 'Tôi về đến nhà lúc 10 giờ.']),
      w('made', '/meɪd/', 'đã làm, đã nấu (make)', '', ['Mum made a cake.', '', 'Mẹ đã làm bánh.']),
      w('left', '/left/', 'đã rời đi (leave)', '', ['The bus left at 7.', '', 'Xe buýt rời đi lúc 7 giờ.']),
      w('told', '/toʊld/', 'đã kể, đã bảo (tell)', '', ['He told me a funny story.', '', 'Anh ấy kể tôi nghe chuyện vui.']),
      w('thought', '/θɔːt/', 'đã nghĩ (think)', '', ['I thought it was easy.', '', 'Tôi đã nghĩ nó dễ.']),
      w('found', '/faʊnd/', 'đã tìm thấy (find)', '', ['I found my keys under the sofa.', '', 'Tôi tìm thấy chìa khoá dưới ghế sofa.'])
    ],
    qs: [
      ['mc', 'buy → V2?', 'bought', ['buyed', 'brought', 'buy'], 'buy – bought.'],
      ['mc', 'think → V2?', 'thought', ['thinked', 'thank', 'taught'], 'think – thought.'],
      ['mc', 'Yesterday I ___ my old teacher.', 'met', ['meet', 'meeted', 'meets'], 'meet – met.'],
      ['mc', 'Did you ___ the news?', 'see', ['saw', 'seen', 'sees'], 'did + V1.'],
      ['mc', '“read” ở quá khứ đọc là?', '/red/ (giống red)', ['/riːd/ như hiện tại', '/reɪd/', '/rid/'], 'Viết giống, đọc khác.'],
      ['hear', 'We left the office at six and got home at seven.', 'Rời văn phòng lúc 6, về nhà lúc 7.', ['Rời văn phòng lúc 7, về nhà lúc 6.', 'Đến văn phòng lúc 6, rời đi lúc 7.', 'Làm việc từ 6 đến 7 giờ.'], 'left = rời, got home = về đến nhà.'],
      ['order', 'Sắp xếp: “Tôi đã mua một chiếc laptop mới.”', ['I', 'bought', 'a new', 'laptop.'], 'I bought a new laptop.']
    ],
    noi: [['We *went* to *Vung* *Tau* on *Sunday*. ↘', 'Chủ nhật chúng tôi đi Vũng Tàu.'], ['I *bought* a new *phone* last *week*. ↘', 'Tuần trước tôi mua điện thoại mới.'], ['Did you *see* the *news*? ↗', 'Bạn xem tin tức chưa?'], ['I *thought* it was *easy*, but it *wasn\'t*. ↘', 'Tôi tưởng dễ, nhưng không phải.']],
    hoithoai: {
      ctx: 'Em gặp lại bạn cũ là Jack sau kỳ nghỉ lễ.', vai: 'Jack hỏi, em kể chuyện kỳ nghỉ.', ai: '🧑 Jack',
      luot: [
        T(['Hey! Long time no see. Where did you go for the holiday?', '', 'Lâu quá không gặp! Kỳ nghỉ bạn đi đâu?'], ['I went to Da Lat with my family.', 'Tôi đi Đà Lạt với gia đình.', 'go → went.'], ['I go to Da Lat.', 'Sai thì.'], ['I goed to Da Lat.', 'Bất quy tắc: went.']),
        T(['Nice! How did you get there?', '', 'Hay đấy! Bạn đến đó bằng gì?'], ['We took a night bus. It was cheap.', 'Chúng tôi đi xe khách đêm. Rẻ lắm.', 'take → took.'], ['We taked a bus.', 'take → took.'], ['We get there by bus.', 'Sai thì.']),
        T(['Did you buy anything?', '', 'Bạn có mua gì không?'], ['Yes, I bought some strawberries and coffee.', 'Có, tôi mua dâu và cà phê.', 'buy → bought.'], ['Yes, I brought some strawberries.', 'brought = mang theo (bring), không phải mua.'], ["No, I didn't bought anything.", "didn't + buy."]),
        T(['Sounds great. I saw your photos on Facebook!', '', 'Nghe tuyệt. Mình thấy ảnh bạn trên Facebook!'], ['Thanks! We had a great time.', 'Cảm ơn! Chúng tôi đã rất vui.', 'have a great time → had.'], ['Thanks! We have a great time.', 'Sai thì.'], ['Yes, I saw it too.', 'Không hợp ngữ cảnh.'])
      ], ket: 'Em đã kể kỳ nghỉ bằng động từ bất quy tắc.'
    },
    tom: ['20 động từ bất quy tắc', 'Nhóm -ought', 'did + V1'], nguphap: 'Quá khứ đơn với động từ bất quy tắc', phatam: 'bought /bɔːt/, said /sed/, read /red/',
    loi: ['Thêm -ed cho động từ bất quy tắc (goed)', 'Nhầm bought (buy) và brought (bring)'], btvn: ['Viết bảng 20 động từ, che cột V2 rồi tự kiểm tra', 'Viết 5 câu kể kỳ nghỉ gần nhất', 'Ôn thẻ từ Ngày 1–2']
  };

  /* ================= NGÀY 3 ================= */
  const d3 = {
    n: 3, ten: 'Kể chuyện cuối tuần và kỳ nghỉ', kinds: K,
    muc: 'Kể một câu chuyện có trình tự bằng từ nối first, then, after that, finally; hỏi cảm nhận.',
    hoc: `<h4>1. Từ nối trình tự</h4>${tbl(['Từ nối', 'Nghĩa', 'Ví dụ'], [['First,', 'Đầu tiên', 'First, we had breakfast.'], ['Then, / Next,', 'Sau đó', 'Then, we went to the beach.'], ['After that,', 'Sau đó nữa', 'After that, we visited a temple.'], ['In the end, / Finally,', 'Cuối cùng', 'Finally, we went home at 8.']])}
      <h4>2. Hỏi và kể cảm nhận</h4>${exs([['How was your weekend? – It was great / OK / terrible.', 'Cuối tuần thế nào? – Tuyệt / Bình thường / Tệ.'], ['What was the best part?', 'Phần hay nhất là gì?'], ['The food was delicious, but the hotel was noisy.', 'Đồ ăn ngon nhưng khách sạn ồn.']])}
      <h4>3. was / were</h4><p>I / he / she / it → <b>was</b> · you / we / they → <b>were</b>. Phủ định: wasn't, weren't.</p>
      ${tip('🎤 Mẹo kể chuyện tự nhiên: 1 câu mở (khi nào, đi đâu) → 3–4 câu sự việc có từ nối → 1 câu cảm nhận.')}`,
    vocab: [
      w('weekend', '/ˈwiːkend/', 'cuối tuần', '', ['How was your weekend?', '', 'Cuối tuần của bạn thế nào?']),
      w('holiday', '/ˈhɑːlədeɪ/', 'kỳ nghỉ, ngày lễ', '', ['We had a long holiday in April.', '', 'Chúng tôi có kỳ nghỉ dài vào tháng Tư.']),
      w('first', '/fɜːrst/', 'đầu tiên', '', ['First, we checked in.', '', 'Đầu tiên chúng tôi nhận phòng.']),
      w('then', '/ðen/', 'sau đó', '', ['Then, we went swimming.', '', 'Sau đó chúng tôi đi bơi.']),
      w('after that', '/ˈæftər ðæt/', 'sau đó nữa', '', ['After that, we had lunch.', '', 'Sau đó chúng tôi ăn trưa.']),
      w('finally', '/ˈfaɪnəli/', 'cuối cùng', '', ['Finally, we got home.', '', 'Cuối cùng chúng tôi về đến nhà.']),
      w('trip', '/trɪp/', 'chuyến đi', '', ['The trip was amazing.', '', 'Chuyến đi thật tuyệt.']),
      w('delicious', '/dɪˈlɪʃəs/', 'ngon', '', ['The seafood was delicious.', '', 'Hải sản rất ngon.']),
      w('crowded', '/ˈkraʊdɪd/', 'đông đúc', '', ['The beach was very crowded.', '', 'Bãi biển rất đông.']),
      w('relaxing', '/rɪˈlæksɪŋ/', 'thư giãn', '', ['It was a relaxing weekend.', '', 'Đó là một cuối tuần thư giãn.']),
      w('terrible', '/ˈterəbl/', 'tệ, kinh khủng', '', ['The weather was terrible.', '', 'Thời tiết tệ kinh khủng.']),
      w('the best part', '/ðə best pɑːrt/', 'phần hay nhất', '', ['The best part was the food.', '', 'Phần hay nhất là đồ ăn.'])
    ],
    qs: [
      ['mc', 'The hotel ___ very clean.', 'was', ['were', 'is been', 'did'], 'hotel số ít → was.'],
      ['mc', 'The people ___ friendly.', 'were', ['was', 'is', 'did'], 'people số nhiều → were.'],
      ['mc', 'Từ nào dùng để mở đầu chuỗi sự việc?', 'First,', ['Finally,', 'After that,', 'Then,'], 'First = đầu tiên.'],
      ['mc', '“How was your trip?” – Câu trả lời phù hợp?', 'It was great, thanks!', ['I went by bus.', 'Yes, it was.', 'Next week.'], 'How was…? → cảm nhận.'],
      ['mc', 'delicious nghĩa là?', 'ngon', ['đông đúc', 'tệ', 'thư giãn'], 'delicious.'],
      ['hear', 'The beach was crowded, but the water was beautiful.', 'Bãi biển đông nhưng nước rất đẹp.', ['Bãi biển vắng và nước đẹp.', 'Bãi biển đông và nước bẩn.', 'Bãi biển đẹp nhưng nước lạnh.'], 'crowded … but … beautiful.'],
      ['order', 'Sắp xếp: “Phần hay nhất là đồ ăn.”', ['The best part', 'was', 'the food.'], 'The best part was the food.']
    ],
    noi: [['*First*, → we had *breakfast*. → *Then*, → we went to the *beach*. ↘', 'Đầu tiên ăn sáng, sau đó ra biển.'], ['How was your *weekend*? ↘', 'Cuối tuần thế nào?'], ['The *food* was *delicious*, → but the *hotel* was *noisy*. ↘', 'Đồ ăn ngon nhưng khách sạn ồn.'], ['It was a really *relaxing* *trip*. ↘', 'Đó là chuyến đi rất thư giãn.']],
    hoithoai: {
      ctx: 'Thứ Hai, quản lý người nước ngoài hỏi han em sau cuối tuần.', vai: 'Quản lý hỏi, em kể có trình tự.', ai: '👨‍💼 Mr. Brown',
      luot: [
        T(['How was your weekend?', '', 'Cuối tuần của bạn thế nào?'], ['It was great, thanks. I went to Can Gio with my friends.', 'Tuyệt lắm. Tôi đi Cần Giờ với bạn bè.', 'Cảm nhận + thông tin.'], ['Yes, it was.', 'How was…? không trả lời yes/no.'], ['I go to Can Gio.', 'Sai thì.']),
        T(['Oh, nice. What did you do there?', '', 'Hay đấy. Bạn làm gì ở đó?'], ['First, we visited the mangrove forest. Then, we had seafood for lunch.', 'Đầu tiên thăm rừng ngập mặn, sau đó ăn trưa hải sản.', 'Từ nối trình tự.'], ['We visit forest and eat.', 'Sai thì, thiếu mạo từ.'], ['Finally, first we go.', 'Từ nối lộn xộn, sai thì.']),
        T(['What was the best part?', '', 'Phần hay nhất là gì?'], ['The best part was the seafood. It was delicious!', 'Hay nhất là hải sản. Ngon lắm!', 'Trả lời đúng mẫu câu.'], ['The best part is tomorrow.', 'Lạc đề.'], ['It were delicious.', 'It → was.'])
      ], ket: 'Em đã kể chuyện cuối tuần có trình tự và cảm nhận.'
    },
    tom: ['First – Then – After that – Finally', 'How was…? It was…', 'was / were'], nguphap: 'Kể chuyện với quá khứ đơn và từ nối trình tự', phatam: 'Ngắt nhóm ý sau từ nối; delicious /dɪˈlɪʃəs/',
    loi: ['Trả lời "Yes" cho câu How was…?', 'Dùng were với số ít'], btvn: ['Viết đoạn 6–8 câu kể cuối tuần, có 4 từ nối', 'Ghi âm và đếm số lần dùng quá khứ đúng', 'Luyện nói 🎤 câu có ngắt nhóm ý']
  };

  /* ================= NGÀY 4 ================= */
  const d4 = {
    n: 4, ten: 'Quá khứ tiếp diễn: đang làm gì thì…', kinds: K,
    muc: 'Dùng was/were + V-ing để tả việc đang diễn ra, kể việc bị xen ngang với when / while.',
    hoc: `<h4>1. Công thức</h4>${F(['S', '+', 'was / were', '+', 'V-ing'])}${exs([['At 9 p.m. I was watching TV.', 'Lúc 9 giờ tối tôi đang xem TV.'], ['They were having dinner when I arrived.', 'Họ đang ăn tối khi tôi đến.'], ['What were you doing at 8 this morning?', 'Lúc 8 giờ sáng nay bạn đang làm gì?']])}
      <h4>2. when và while</h4>${tbl(['Từ', 'Theo sau là', 'Ví dụ'], [['when', 'việc ngắn xen vào (quá khứ đơn)', 'I was driving <b>when</b> the phone rang.'], ['while', 'việc đang kéo dài (tiếp diễn)', 'The phone rang <b>while</b> I was driving.']])}
      ${tip('🎬 Hình dung: quá khứ tiếp diễn là <b>cảnh nền</b> của bộ phim, quá khứ đơn là <b>sự kiện</b> xảy ra trong cảnh đó.')}${G('qua-khu-tiep-dien', 'Quá khứ tiếp diễn')}`,
    vocab: [
      w('while', '/waɪl/', 'trong khi', '+ hành động đang diễn ra.', ['While I was cooking, he arrived.', '', 'Trong khi tôi đang nấu thì anh ấy đến.']),
      w('suddenly', '/ˈsʌdənli/', 'bất ngờ, đột nhiên', '', ['Suddenly, the lights went out.', '', 'Đột nhiên đèn tắt.']),
      w('happened', '/ˈhæpənd/', 'đã xảy ra', '', ['What happened?', '', 'Chuyện gì đã xảy ra?']),
      w('accident', '/ˈæksɪdənt/', 'tai nạn', '', ['I saw an accident on my way to work.', '', 'Tôi thấy một vụ tai nạn trên đường đi làm.']),
      w('rang', '/ræŋ/', 'đã reo (ring)', '', ['The phone rang at midnight.', '', 'Điện thoại reo lúc nửa đêm.']),
      w('fell', '/fel/', 'đã ngã, rơi (fall)', '', ['I fell off my bike.', '', 'Tôi ngã xe đạp.']),
      w('broke', '/broʊk/', 'đã làm vỡ, hỏng (break)', '', ['I broke my phone screen.', '', 'Tôi làm vỡ màn hình điện thoại.']),
      w('power cut', '/ˈpaʊər kʌt/', 'cúp điện', '', ['There was a power cut last night.', '', 'Tối qua bị cúp điện.']),
      w('raining', '/ˈreɪnɪŋ/', 'đang mưa', '', ['It was raining heavily.', '', 'Trời đang mưa to.']),
      w('on my way', '/ɑːn maɪ weɪ/', 'trên đường (đi đâu đó)', '', ['I was on my way home.', '', 'Tôi đang trên đường về nhà.']),
      w('luckily', '/ˈlʌkɪli/', 'may mắn là', '', ["Luckily, nobody was hurt.", '', 'May là không ai bị thương.']),
      w('hurt', '/hɜːrt/', 'bị đau, bị thương', '', ['Was anyone hurt?', '', 'Có ai bị thương không?'])
    ],
    qs: [
      ['mc', 'At 10 p.m. yesterday, we ___ a film.', 'were watching', ['was watching', 'watched at', 'are watching'], 'we → were + V-ing.'],
      ['mc', 'I was walking home ___ it started to rain.', 'when', ['while', 'during', 'for'], 'Việc xen vào → when.'],
      ['mc', '___ she was sleeping, someone knocked on the door.', 'While', ['When', 'During', 'Then'], 'Việc kéo dài → while.'],
      ['mc', 'The phone ___ while I was taking a shower.', 'rang', ['was ringing', 'rings', 'ring'], 'Việc xen vào → quá khứ đơn.'],
      ['mc', 'power cut nghĩa là?', 'cúp điện', ['tai nạn', 'kẹt xe', 'mất mạng'], 'power cut.'],
      ['hear', 'I was driving to work when I saw the accident.', 'Tôi đang lái xe đi làm thì thấy vụ tai nạn.', ['Tôi gặp tai nạn khi đi làm.', 'Tôi lái xe sau vụ tai nạn.', 'Tôi thấy vụ tai nạn trên TV.'], 'was driving … when I saw.'],
      ['order', 'Sắp xếp: “Lúc đó trời đang mưa to.”', ['It', 'was', 'raining', 'heavily.'], 'It was raining heavily.']
    ],
    noi: [['I was *driving* to *work* → when I *saw* the *accident*. ↘', 'Tôi đang lái xe đi làm thì thấy tai nạn.'], ['What were you *doing* at *eight*? ↘', 'Lúc 8 giờ bạn đang làm gì?'], ['*Luckily*, → *nobody* was *hurt*. ↘', 'May là không ai bị thương.'], ['*Suddenly*, → the *lights* went *out*. ↘', 'Đột nhiên đèn tắt.']],
    hoithoai: {
      ctx: 'Em đến họp trễ, chị trưởng nhóm hỏi lý do.', vai: 'Chị Hoa hỏi, em giải thích.', ai: '👩 Ms. Hoa',
      luot: [
        T(["You're late. What happened?", '', 'Em đến muộn. Có chuyện gì vậy?'], ["Sorry. I was riding to work when my motorbike broke down.", 'Xin lỗi. Em đang chạy xe đi làm thì xe bị hỏng.', 'was riding … when … broke down.'], ['Sorry. I ride to work and my motorbike break.', 'Sai thì.'], ['I was late because yes.', 'Không trả lời.']),
        T(['Oh no! Where were you when it happened?', '', 'Ôi! Lúc đó em đang ở đâu?'], ['I was crossing Tran Hung Dao Street. It was raining heavily.', 'Em đang qua đường Trần Hưng Đạo. Trời đang mưa to.', 'Quá khứ tiếp diễn tả cảnh nền.'], ['I am crossing the street.', 'Sai thì.'], ['I were crossing the street.', 'I → was.']),
        T(['Are you OK now?', '', 'Giờ em ổn chứ?'], ["Yes, luckily I wasn't hurt. A mechanic fixed it quickly.", 'Ổn ạ, may là em không bị thương. Thợ sửa nhanh lắm.', 'Kết thúc câu chuyện.'], ['Yes, luckily I am hurt.', 'Nghĩa ngược.'], ['Yes, I was fixing.', 'Không rõ ý.'])
      ], ket: 'Em đã giải thích sự cố bằng quá khứ tiếp diễn và quá khứ đơn.'
    },
    tom: ['was/were + V-ing', 'when + quá khứ đơn', 'while + tiếp diễn'], nguphap: 'Quá khứ tiếp diễn; when/while', phatam: 'Ngắt nhóm trước when; suddenly /ˈsʌdənli/',
    loi: ['Dùng tiếp diễn cho cả hai hành động', 'I were'], btvn: ['Viết 5 câu: Lúc 8 giờ tối qua, mọi người trong nhà đang làm gì?', 'Kể lại một sự cố (cúp điện, hỏng xe) 5 câu', 'Luyện 🎤 4 câu mẫu']
  };

  /* ================= NGÀY 5 ================= */
  const d5 = {
    n: 5, ten: 'Hồi nhỏ: used to và could', kinds: K,
    muc: 'Kể thói quen, khả năng ngày xưa với used to và could; so sánh xưa và nay.',
    hoc: `<h4>1. used to + V: ngày xưa thường (nay không còn)</h4>${exs([['I used to live in the countryside.', 'Hồi trước tôi sống ở quê.'], ["I didn't use to like vegetables.", 'Hồi trước tôi không thích ăn rau.'], ['Did you use to walk to school?', 'Hồi đó bạn có đi bộ đến trường không?']])}
      <h4>2. could / couldn't: khả năng trong quá khứ</h4>${exs([['I could swim when I was six.', 'Tôi biết bơi từ lúc 6 tuổi.'], ["I couldn't speak English at that time.", 'Lúc đó tôi chưa nói được tiếng Anh.']])}
      <h4>3. So sánh xưa – nay</h4>${tbl(['Ngày xưa', 'Bây giờ'], [['I used to ride a bicycle.', 'Now I drive a car.'], ["There didn't use to be a supermarket here.", 'Now there are three.']])}
      ${tip('⚠️ Phủ định và câu hỏi: <b>did + use to</b> (không có d): ❌ <i>didn\'t used to</i>. Phát âm used to /ˈjuːstə/ – "iu-xtờ".')}${G('used-to', 'used to')}`,
    vocab: [
      w('used to', '/ˈjuːstə/', 'đã từng (thói quen cũ)', '', ['I used to play football every day.', '', 'Tôi từng chơi bóng mỗi ngày.']),
      w('childhood', '/ˈtʃaɪldhʊd/', 'tuổi thơ', '', ['I had a happy childhood.', '', 'Tôi có tuổi thơ hạnh phúc.']),
      w('when I was a kid', '/wen aɪ wəz ə kɪd/', 'khi tôi còn nhỏ', '', ['When I was a kid, I lived with my grandparents.', '', 'Hồi nhỏ tôi sống với ông bà.']),
      w('countryside', '/ˈkʌntrisaɪd/', 'vùng quê', '', ['My village is in the countryside.', '', 'Làng tôi ở vùng quê.']),
      w('could', '/kʊd/', 'đã có thể, đã biết', 'Quá khứ của can.', ['She could read at four.', '', 'Cô ấy biết đọc lúc 4 tuổi.']),
      w('primary school', '/ˈpraɪmeri skuːl/', 'trường tiểu học', '', ['I walked to primary school.', '', 'Tôi đi bộ đến trường tiểu học.']),
      w('naughty', '/ˈnɔːti/', 'nghịch ngợm', '', ['I was a naughty boy.', '', 'Tôi là một cậu bé nghịch ngợm.']),
      w('shy', '/ʃaɪ/', 'nhút nhát', '', ['She used to be very shy.', '', 'Cô ấy từng rất nhút nhát.']),
      w('grow up', '/ɡroʊ ʌp/', 'lớn lên', 'Quá khứ: grew up.', ['I grew up in Ben Tre.', '', 'Tôi lớn lên ở Bến Tre.']),
      w('anymore', '/ˌeniˈmɔːr/', 'không … nữa', 'Dùng trong câu phủ định.', ["I don't play games anymore.", '', 'Tôi không chơi game nữa.']),
      w('nowadays', '/ˈnaʊədeɪz/', 'ngày nay', '', ['Nowadays, kids use smartphones.', '', 'Ngày nay trẻ em dùng điện thoại.']),
      w('memory', '/ˈmeməri/', 'kỷ niệm; bộ nhớ', '', ['It is my favourite childhood memory.', '', 'Đó là kỷ niệm tuổi thơ tôi thích nhất.'])
    ],
    qs: [
      ['mc', 'I ___ live in Hue, but now I live in Saigon.', 'used to', ['use to', 'am used to', 'was used'], 'Thói quen cũ → used to.'],
      ['mc', 'Did you ___ have long hair?', 'use to', ['used to', 'using to', 'uses to'], 'did + use to.'],
      ['mc', 'When I was five, I ___ ride a bike.', 'could', ['can', 'must', 'used'], 'Khả năng quá khứ → could.'],
      ['mc', "I don't smoke ___.", 'anymore', ['nowadays', 'used to', 'yet already'], 'không … nữa.'],
      ['mc', 'grow up → quá khứ?', 'grew up', ['growed up', 'grown up', 'grow upped'], 'grow – grew.'],
      ['hear', "There didn't use to be any tall buildings here.", 'Ngày xưa ở đây không có toà nhà cao nào.', ['Bây giờ ở đây không có toà nhà cao.', 'Ở đây từng có nhiều toà nhà cao.', 'Sẽ có toà nhà cao ở đây.'], "didn't use to be."],
      ['order', 'Sắp xếp: “Tôi lớn lên ở vùng quê.”', ['I', 'grew up', 'in the', 'countryside.'], 'I grew up in the countryside.']
    ],
    noi: [['I *used* to *live* in the *countryside*. ↘', 'Tôi từng sống ở quê.'], ['Did you *use* to *walk* to *school*? ↗', 'Hồi đó bạn đi bộ đến trường à?'], ['I *couldn\'t* speak *English* at that *time*. ↘', 'Lúc đó tôi chưa nói được tiếng Anh.'], ['*Nowadays*, → *kids* use *smartphones*. ↘', 'Ngày nay trẻ con dùng điện thoại.']],
    hoithoai: {
      ctx: 'Em trò chuyện với Sophie, bạn người Anh, về tuổi thơ.', vai: 'Sophie hỏi, em kể.', ai: '👩 Sophie',
      luot: [
        T(['Where did you grow up?', '', 'Bạn lớn lên ở đâu?'], ['I grew up in a small village in Tien Giang.', 'Tôi lớn lên ở một làng nhỏ ở Tiền Giang.', 'grow up → grew up.'], ['I grow up in Tien Giang.', 'Sai thì.'], ['I am growing in Tien Giang.', 'Sai nghĩa và thì.']),
        T(['What did you use to do after school?', '', 'Hồi đó tan học bạn hay làm gì?'], ['I used to swim in the river with my friends.', 'Tôi hay bơi ở sông với bạn bè.', 'used to + V.'], ['I use to swimming in the river.', 'used to + V nguyên mẫu.'], ['I am used to swim.', 'be used to = quen với, sai nghĩa.']),
        T(['Can you still swim well?', '', 'Giờ bạn còn bơi giỏi không?'], ["Not really. I could swim very well as a kid, but I don't swim anymore.", 'Không lắm. Hồi nhỏ bơi giỏi, nhưng giờ không bơi nữa.', 'could + anymore.'], ['Yes, I used to can swim.', 'Không có "used to can".'], ['I can swim when I was a kid.', 'Quá khứ → could.'])
      ], ket: 'Em đã kể tuổi thơ với used to và could.'
    },
    tom: ['used to + V', "didn't use to", 'could / couldn\'t', 'anymore, nowadays'], nguphap: 'used to; could (quá khứ của can)', phatam: 'used to /ˈjuːstə/ đọc liền',
    loi: ["didn't used to", 'Nhầm used to và be used to'], btvn: ['Viết 6 câu so sánh tuổi thơ em và bây giờ', 'Hỏi một người thân 3 câu "Did you use to…?" và ghi lại', 'Luyện 🎤 4 câu']
  };

  /* ================= NGÀY 6 ================= */
  const d6 = {
    n: 6, ten: 'Tiểu sử và các mốc cuộc đời', kinds: K,
    muc: 'Kể tiểu sử của mình hoặc người khác: sinh ra, học, đi làm, kết hôn, chuyển nhà; đọc năm đúng.',
    hoc: `<h4>1. Mốc cuộc đời</h4>${reads([['was born', '/wəz bɔːrn/', 'được sinh ra'], ['went to university', '', 'học đại học'], ['graduated', '/ˈɡrædʒueɪtɪd/', 'tốt nghiệp'], ['got a job', '', 'có việc làm'], ['got married', '', 'kết hôn'], ['moved to', '', 'chuyển đến']])}
      <h4>2. Đọc năm</h4>${tbl(['Năm', 'Đọc'], [['1995', 'nineteen ninety-five'], ['2008', 'two thousand (and) eight'], ['2015', 'twenty fifteen / two thousand fifteen'], ['2026', 'twenty twenty-six']])}
      <h4>3. Giới từ</h4><p><b>in</b> + năm / tháng (in 1995, in May) · <b>on</b> + ngày (on 3rd May) · <b>at the age of</b> 22 · <b>for</b> 5 years · <b>from</b> 2015 <b>to</b> 2020</p>
      ${tip('⚠️ "Tôi sinh năm 1990" = <i>I <b>was</b> born in 1990</i> (bị động, luôn có was). ❌ <i>I born in 1990</i>.')}`,
    vocab: [
      w('was born', '/wəz bɔːrn/', 'được sinh ra', '', ['I was born in 1992.', '', 'Tôi sinh năm 1992.']),
      w('graduated', '/ˈɡrædʒueɪtɪd/', 'đã tốt nghiệp', '', ['She graduated from university in 2014.', '', 'Cô ấy tốt nghiệp đại học năm 2014.']),
      w('degree', '/dɪˈɡriː/', 'bằng cấp', '', ['He has a degree in IT.', '', 'Anh ấy có bằng CNTT.']),
      w('got married', '/ɡɑːt ˈmærid/', 'đã kết hôn', '', ['They got married in 2018.', '', 'Họ cưới năm 2018.']),
      w('moved', '/muːvd/', 'đã chuyển (nhà)', '', ['We moved to Long An in 2020.', '', 'Chúng tôi chuyển về Long An năm 2020.']),
      w('at the age of', '/æt ði eɪdʒ əv/', 'ở tuổi', '', ['He started work at the age of 22.', '', 'Anh ấy đi làm năm 22 tuổi.']),
      w('company', '/ˈkʌmpəni/', 'công ty', '', ['I joined the company in 2016.', '', 'Tôi vào công ty năm 2016.']),
      w('joined', '/dʒɔɪnd/', 'đã gia nhập', '', ['She joined our team last year.', '', 'Cô ấy vào nhóm năm ngoái.']),
      w('became', '/bɪˈkeɪm/', 'đã trở thành (become)', '', ['He became a manager in 2022.', '', 'Anh ấy thành quản lý năm 2022.']),
      w('famous', '/ˈfeɪməs/', 'nổi tiếng', '', ['She became famous at 20.', '', 'Cô ấy nổi tiếng năm 20 tuổi.']),
      w('died', '/daɪd/', 'đã mất', '', ['My grandfather died in 2010.', '', 'Ông tôi mất năm 2010.']),
      w('since then', '/sɪns ðen/', 'từ đó đến nay', '', ["Since then, I've worked here.", '', 'Từ đó tôi làm ở đây.'])
    ],
    qs: [
      ['mc', '“Tôi sinh năm 1995” là?', 'I was born in 1995.', ['I born in 1995.', 'I am born in 1995.', 'I was born on 1995.'], 'was born + in + năm.'],
      ['mc', '2008 đọc là?', 'two thousand and eight', ['twenty eight', 'two zero zero eight', 'twenty hundred eight'], '2000–2009: two thousand (and) …'],
      ['mc', '1999 đọc là?', 'nineteen ninety-nine', ['one thousand ninety-nine', 'nineteen nine-nine', 'one nine nine nine thousand'], 'Tách đôi: 19 – 99.'],
      ['mc', 'She graduated ___ university in 2015.', 'from', ['of', 'at', 'in'], 'graduate from.'],
      ['mc', 'He became a manager ___ the age of 30.', 'at', ['in', 'on', 'with'], 'at the age of.'],
      ['hear', 'I joined the bank in 2016 and became a team leader four years later.', 'Vào ngân hàng 2016, 4 năm sau làm trưởng nhóm.', ['Vào ngân hàng 2014, 6 năm sau làm trưởng nhóm.', 'Làm trưởng nhóm năm 2016.', 'Rời ngân hàng năm 2016.'], '2016 + four years later = 2020.'],
      ['order', 'Sắp xếp: “Họ kết hôn năm 2019.”', ['They', 'got married', 'in', '2019.'], 'They got married in 2019.']
    ],
    noi: [['I was *born* in nineteen ninety-*two*. ↘', 'Tôi sinh năm 1992.'], ['She *graduated* from *university* in twenty *fourteen*. ↘', 'Cô ấy tốt nghiệp năm 2014.'], ['When did you *join* the *company*? ↘', 'Bạn vào công ty khi nào?'], ['We *moved* to *Long* *An* → in twenty *twenty*. ↘', 'Chúng tôi chuyển về Long An năm 2020.']],
    hoithoai: {
      ctx: 'Buổi làm quen với đối tác mới, anh David hỏi về em.', vai: 'David hỏi, em kể tiểu sử ngắn.', ai: '🧔 David',
      luot: [
        T(['So, tell me a little about yourself. Where are you from?', '', 'Kể chút về bạn đi. Bạn từ đâu đến?'], ['I was born in Can Tho, but I grew up in Ho Chi Minh City.', 'Tôi sinh ở Cần Thơ nhưng lớn lên ở TP.HCM.', 'was born + grew up.'], ['I born in Can Tho.', 'Thiếu was.'], ['I am born in Can Tho.', 'Quá khứ → was born.']),
        T(['What did you study?', '', 'Bạn học ngành gì?'], ['I studied IT and graduated in 2015.', 'Tôi học CNTT và tốt nghiệp năm 2015.', 'Hai động từ quá khứ.'], ['I study IT in 2015.', 'Sai thì.'], ['I graduated of IT.', 'Sai giới từ và ý.']),
        T(['And when did you join your current company?', '', 'Bạn vào công ty hiện tại khi nào?'], ["I joined it in 2018. Since then, I've worked in the IT department.", 'Tôi vào năm 2018. Từ đó tôi làm ở phòng CNTT.', 'Since then + HTHT (học kỹ ở Ngày 22).'], ['I join in 2018.', 'Sai thì.'], ['On 2018.', 'Năm → in.'])
      ], ket: 'Em đã giới thiệu tiểu sử ngắn, đọc năm đúng.'
    },
    tom: ['was born', 'Mốc cuộc đời', 'Đọc năm', 'in / on / at the age of'], nguphap: 'Quá khứ đơn kể tiểu sử; giới từ thời gian', phatam: 'Đọc năm: nineteen ninety-two, twenty twenty-six',
    loi: ['I born…', 'Đọc năm như số đếm'], btvn: ['Viết tiểu sử 8 câu của em hoặc người thân', 'Đọc to 6 năm: 1975, 1986, 2000, 2009, 2010, 2026', 'Luyện 🎤 phần đọc năm']
  };

  /* ================= NGÀY 7 ================= */
  const d7 = {
    n: 7, ten: 'Ôn tập tuần 1 và kiểm tra', vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Ôn toàn bộ giai đoạn 1: quá khứ đơn, động từ bất quy tắc, quá khứ tiếp diễn, used to, tiểu sử.',
    hoc: `<h4>Tóm tắt tuần 1</h4>${tbl(['Chủ điểm', 'Mẫu câu'], [['Quá khứ đơn', 'I worked / went… · I didn\'t go · Did you go?'], ['Đuôi -ed', '/t/ worked · /d/ played · /ɪd/ visited'], ['Kể chuyện', 'First, … Then, … After that, … Finally, …'], ['Quá khứ tiếp diễn', 'I was driving when the phone rang.'], ['Thói quen cũ', 'I used to … · I didn\'t use to … · I could …'], ['Tiểu sử', 'I was born in … · graduated from … · joined … in …']])}
      ${tip('🗣️ Bài nói tổng hợp: kể <b>một ngày đáng nhớ</b> trong đời em (1 phút), dùng đủ: quá khứ đơn, 1 câu tiếp diễn với when, 2 từ nối. Ghi âm và nghe lại.')}`,
    qs: [['mc', 'I ___ TV when you called.', 'was watching', ['watched', 'am watching', 'were watching'], 'Việc nền → tiếp diễn.'], ['mc', 'She ___ to be shy, but now she is confident.', 'used', ['use', 'using', 'uses'], 'used to.']],
    noi: [['*Last* *year*, → I *went* to *Japan* for the *first* time. ↘', 'Năm ngoái tôi đi Nhật lần đầu.'], ['While I was *walking* in *Tokyo*, → I *met* an old *friend*. ↘', 'Đang đi dạo ở Tokyo thì gặp bạn cũ.'], ['It was the *best* *day* of the *trip*. ↘', 'Đó là ngày tuyệt nhất chuyến đi.']],
    hoithoai: {
      ctx: 'Tổng ôn: một người bạn Mỹ hỏi về cuộc đời em.', vai: 'Trả lời liên tục, dùng đúng thì.', ai: '🧑 Mike',
      luot: [
        T(['When were you born?', '', 'Bạn sinh năm nào?'], ['I was born in 1993.', 'Tôi sinh năm 1993.', 'was born in.'], ['I born in 1993.', 'Thiếu was.'], ['I was born on 1993.', 'Năm → in.']),
        T(['What did you use to do as a kid?', '', 'Hồi nhỏ bạn hay làm gì?'], ['I used to fly kites with my brother.', 'Tôi hay thả diều với anh trai.', 'used to + V.'], ['I use to flying kites.', 'used to + V.'], ['I was fly kites.', 'Sai cấu trúc.']),
        T(['What were you doing when you heard the news about your new job?', '', 'Bạn đang làm gì khi nghe tin được nhận việc?'], ['I was having lunch when they called me.', 'Tôi đang ăn trưa thì họ gọi.', 'Tiếp diễn + when + quá khứ đơn.'], ['I had lunch when they were calling.', 'Đảo vai trò hai hành động.'], ['I have lunch.', 'Sai thì.']),
        T(['How did you feel?', '', 'Lúc đó bạn thấy thế nào?'], ['I was so happy! First, I called my mum. Then, I bought a cake.', 'Vui lắm! Đầu tiên tôi gọi mẹ, sau đó mua bánh.', 'Cảm xúc + từ nối.'], ['I am happy, first I call mum.', 'Sai thì.'], ['Yes, I did feel.', 'How → không trả lời yes.'])
      ], ket: 'Em đã ôn trọn giai đoạn kể chuyện quá khứ!'
    },
    tom: ['Ôn tuần 1', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn quá khứ', phatam: 'Ôn -ed và đọc năm',
    loi: ['Xem lại các câu sai trong bài kiểm tra'], btvn: ['Dưới 7 điểm: học lại ngày yếu nhất rồi làm lại', 'Ghi âm bài nói 1 phút "Một ngày đáng nhớ"', 'Làm 2 chủ điểm ngữ pháp liên quan trong Sổ tay']
  };

  /* ================= NGÀY 8 ================= */
  const d8 = {
    n: 8, ten: 'Mô tả người: ngoại hình, tính cách', kinds: K,
    muc: 'Hỏi và tả ngoại hình (What does he look like?), tính cách (What is she like?); thứ tự tính từ.',
    hoc: `<h4>1. Hai câu hỏi dễ nhầm</h4>${tbl(['Câu hỏi', 'Hỏi về', 'Trả lời'], [['What does she <b>look like</b>?', 'ngoại hình', "She's tall and slim. She has long black hair."], ['What is she <b>like</b>?', 'tính cách', "She's friendly and hard-working."], ['How is she?', 'sức khoẻ', "She's fine, thanks."]])}
      <h4>2. Ngoại hình</h4><p>Dáng người: <i>tall, short, slim, overweight, of medium height</i> · Tóc: <i>long / short, straight / curly, black / grey hair</i> · Khác: <i>wears glasses, has a beard</i></p>
      <h4>3. Thứ tự tính từ</h4>${F(['ý kiến', '+', 'kích thước', '+', 'tuổi', '+', 'hình dạng', '+', 'màu', '+', 'danh từ'])}<p><i>a <b>beautiful long black</b> dress · a <b>nice old</b> man</i></p>
      ${tip('⚠️ Tóc là danh từ không đếm được: <i>She has long hair</i> (❌ long hairs).')}`,
    vocab: [
      w('look like', '/lʊk laɪk/', 'trông như thế nào (ngoại hình)', '', ['What does your brother look like?', '', 'Anh trai bạn trông thế nào?']),
      w('slim', '/slɪm/', 'mảnh mai', '', ['She is tall and slim.', '', 'Cô ấy cao và mảnh mai.']),
      w('medium height', '/ˈmiːdiəm haɪt/', 'chiều cao trung bình', '', ["He's of medium height.", '', 'Anh ấy cao trung bình.']),
      w('curly', '/ˈkɜːrli/', 'xoăn', '', ['My daughter has curly hair.', '', 'Con gái tôi tóc xoăn.']),
      w('glasses', '/ˈɡlæsɪz/', 'kính mắt', '', ['He wears glasses.', '', 'Anh ấy đeo kính.']),
      w('beard', '/bɪrd/', 'râu quai nón', '', ['My boss has a grey beard.', '', 'Sếp tôi có râu bạc.']),
      w('friendly', '/ˈfrendli/', 'thân thiện', '', ['Our neighbours are very friendly.', '', 'Hàng xóm rất thân thiện.']),
      w('hard-working', '/ˌhɑːrd ˈwɜːrkɪŋ/', 'chăm chỉ', '', ['She is a hard-working student.', '', 'Cô ấy là học sinh chăm chỉ.']),
      w('funny', '/ˈfʌni/', 'vui tính, hài hước', '', ['My uncle is really funny.', '', 'Chú tôi rất vui tính.']),
      w('patient', '/ˈpeɪʃnt/', 'kiên nhẫn', '', ['A good teacher is patient.', '', 'Giáo viên giỏi thì kiên nhẫn.']),
      w('lazy', '/ˈleɪzi/', 'lười', '', ["Don't be lazy!", '', 'Đừng lười!']),
      w('honest', '/ˈɑːnɪst/', 'trung thực', 'h câm → an honest man.', ['He is an honest person.', '', 'Anh ấy là người trung thực.'])
    ],
    qs: [
      ['mc', '“What is your manager like?” hỏi về?', 'tính cách', ['ngoại hình', 'sở thích', 'sức khoẻ'], 'What is … like = tính cách.'],
      ['mc', '“What does she look like?” – Trả lời phù hợp?', "She's short and has curly hair.", ["She's very kind.", 'She likes coffee.', "She's fine, thanks."], 'look like = ngoại hình.'],
      ['mc', 'Câu đúng là?', 'She has long black hair.', ['She has long black hairs.', 'She has black long hair.', 'She is long black hair.'], 'Kích thước trước màu; hair không đếm được.'],
      ['mc', 'He is ___ honest man.', 'an', ['a', 'the', '(không điền)'], 'h câm.'],
      ['mc', 'patient nghĩa là?', 'kiên nhẫn', ['bệnh nhân giỏi', 'lười biếng', 'vui tính'], 'patient (adj) = kiên nhẫn.'],
      ['hear', "He's of medium height, he wears glasses and he's very funny.", 'Cao trung bình, đeo kính, rất vui tính.', ['Cao, đeo kính, nghiêm túc.', 'Thấp, có râu, vui tính.', 'Cao trung bình, không đeo kính, lười.'], 'medium height, glasses, funny.'],
      ['order', 'Sắp xếp: “Cô ấy thân thiện và chăm chỉ.”', ["She's", 'friendly', 'and', 'hard-working.'], "She's friendly and hard-working."]
    ],
    noi: [['What does your *brother* *look* like? ↘', 'Anh trai bạn trông thế nào?'], ['She\'s *tall* and *slim*, → with long *curly* *hair*. ↘', 'Cô ấy cao, mảnh, tóc dài xoăn.'], ['What\'s your *manager* *like*? ↘', 'Quản lý của bạn là người thế nào?'], ['He\'s *patient*, *honest*, → and really *funny*. ↘', 'Anh ấy kiên nhẫn, trung thực và rất vui tính.']],
    hoithoai: {
      ctx: 'Em đón khách ở sân bay giúp đồng nghiệp, gọi điện hỏi khách trông thế nào.', vai: 'Đồng nghiệp tả khách, em hỏi thêm.', ai: '👨‍💻 Tom',
      luot: [
        T(['Can you pick up Mr. Smith at the airport? You have never met him.', '', 'Bạn đón ông Smith ở sân bay được không? Bạn chưa gặp ông ấy.'], ['Sure. What does he look like?', 'Được. Ông ấy trông thế nào?', 'Hỏi ngoại hình đúng.'], ['Sure. What is he like?', 'Đó là hỏi tính cách.'], ['Sure. How is he?', 'Đó là hỏi sức khoẻ.']),
        T(["He's tall, he has short grey hair and he wears glasses.", '', 'Ông ấy cao, tóc ngắn màu xám, đeo kính.'], ['OK. Does he have a beard?', 'Được. Ông ấy có râu không?', 'Hỏi thêm chi tiết.'], ['OK. Does he has a beard?', 'does + have.'], ['OK. He has grey hairs?', 'hair không đếm được.']),
        T(["No, he doesn't. Oh, and he's very friendly, so don't worry.", '', 'Không. À, ông ấy rất thân thiện, đừng lo.'], ["Great. I'll hold a sign with his name.", 'Tốt. Tôi sẽ cầm biển ghi tên ông ấy.', 'Kết thúc hợp lý.'], ["Great. He's tall like.", 'Câu không đúng.'], ['I am friendly too lazy.', 'Câu rối.'])
      ], ket: 'Em đã hỏi và tả ngoại hình, tính cách.'
    },
    tom: ['look like vs be like', 'Từ tả ngoại hình', 'Từ tả tính cách', 'Thứ tự tính từ'], nguphap: 'What does … look like? / What is … like?; thứ tự tính từ', phatam: 'honest /ˈɑːnɪst/ (h câm); curly /ˈkɜːrli/',
    loi: ['Nhầm look like và be like', 'long hairs'], btvn: ['Tả 3 người thân: ngoại hình + tính cách', 'Chọn 1 người nổi tiếng, tả để người khác đoán', 'Luyện 🎤 4 câu']
  };

  /* ================= NGÀY 9 ================= */
  const d9 = {
    n: 9, ten: 'So sánh hơn', kinds: K,
    muc: 'So sánh hai người, hai vật với -er than / more … than; dùng much, a bit để nhấn mức độ.',
    hoc: `<h4>1. Quy tắc</h4>${tbl(['Tính từ', 'Cách đổi', 'Ví dụ'], [['1 âm tiết', '+ er', 'cheap → cheaper, fast → faster'], ['tận cùng e', '+ r', 'nice → nicer, large → larger'], ['1 nguyên âm + 1 phụ âm', 'gấp đôi phụ âm + er', 'big → bigger, hot → hotter'], ['tận cùng y', 'y → ier', 'easy → easier, busy → busier'], ['2 âm tiết trở lên', 'more + adj', 'expensive → more expensive'], ['bất quy tắc', '—', 'good → better, bad → worse, far → farther']])}
      ${F(['A', '+', 'be', '+', 'adj-er / more adj', '+', 'than', '+', 'B'])}
      <h4>2. Nhấn mức độ</h4><p><b>much / a lot</b> + so sánh (hơn nhiều) · <b>a bit / a little</b> + so sánh (hơn một chút): <i>This laptop is <b>much</b> faster than my old one.</i></p>
      ${tip('⚠️ ❌ <i>more cheaper</i>, ❌ <i>more better</i>. Sau than, đại từ: <i>She is taller than <b>me</b></i> (văn nói) / <i>than I am</i>.')}${G('so-sanh', 'So sánh')}`,
    vocab: [
      w('cheaper', '/ˈtʃiːpər/', 'rẻ hơn', '', ['This shop is cheaper than that one.', '', 'Cửa hàng này rẻ hơn cửa hàng kia.']),
      w('more expensive', '/mɔːr ɪkˈspensɪv/', 'đắt hơn', '', ['iPhones are more expensive than other phones.', '', 'iPhone đắt hơn điện thoại khác.']),
      w('faster', '/ˈfæstər/', 'nhanh hơn', '', ['The new computer is much faster.', '', 'Máy tính mới nhanh hơn nhiều.']),
      w('better', '/ˈbetər/', 'tốt hơn (good)', '', ['Your English is better than mine.', '', 'Tiếng Anh của bạn giỏi hơn tôi.']),
      w('worse', '/wɜːrs/', 'tệ hơn (bad)', '', ['The traffic is worse today.', '', 'Hôm nay kẹt xe tệ hơn.']),
      w('heavier', '/ˈheviər/', 'nặng hơn', '', ['This bag is heavier than mine.', '', 'Túi này nặng hơn túi tôi.']),
      w('lighter', '/ˈlaɪtər/', 'nhẹ hơn', '', ['I need a lighter laptop.', '', 'Tôi cần laptop nhẹ hơn.']),
      w('quieter', '/ˈkwaɪətər/', 'yên tĩnh hơn', '', ['The countryside is quieter than the city.', '', 'Nông thôn yên tĩnh hơn thành phố.']),
      w('busier', '/ˈbɪziər/', 'bận hơn, đông hơn', '', ['Saigon is busier than Hanoi.', '', 'Sài Gòn nhộn nhịp hơn Hà Nội.']),
      w('than', '/ðæn/', 'hơn (so với)', 'Đọc yếu /ðən/.', ['She is older than me.', '', 'Cô ấy lớn tuổi hơn tôi.']),
      w('much', '/mʌtʃ/', 'nhiều (nhấn so sánh)', '', ['It is much bigger.', '', 'Nó lớn hơn nhiều.']),
      w('a bit', '/ə bɪt/', 'một chút', '', ['Can you speak a bit slower?', '', 'Bạn nói chậm hơn một chút được không?'])
    ],
    qs: [
      ['mc', 'A laptop is ___ than a tablet.', 'heavier', ['heavyer', 'more heavy', 'heavyest'], 'y → ier.'],
      ['mc', 'This hotel is ___ than the one we stayed at last year.', 'more comfortable', ['comfortabler', 'most comfortable', 'more comfortabler'], 'Tính từ dài → more.'],
      ['mc', 'Today the weather is ___ than yesterday.', 'worse', ['badder', 'more bad', 'worst'], 'bad → worse.'],
      ['mc', 'big → so sánh hơn?', 'bigger', ['biger', 'more big', 'biggest'], 'Gấp đôi g.'],
      ['mc', 'The new phone is ___ faster than the old one.', 'much', ['very', 'more', 'too'], 'much + so sánh hơn.'],
      ['hear', 'The blue one is a bit cheaper, but the black one is much better.', 'Cái xanh rẻ hơn chút, cái đen tốt hơn nhiều.', ['Cái xanh đắt hơn, cái đen rẻ hơn.', 'Cái đen rẻ hơn nhiều.', 'Hai cái giá như nhau.'], 'a bit cheaper / much better.'],
      ['order', 'Sắp xếp: “Hà Nội lạnh hơn Sài Gòn.”', ['Hanoi', 'is', 'colder', 'than', 'Saigon.'], 'Hanoi is colder than Saigon.']
    ],
    noi: [['This *laptop* is much *lighter* than my *old* one. ↘', 'Laptop này nhẹ hơn nhiều so với cái cũ.'], ['Is the *blue* one *cheaper*? ↗', 'Cái màu xanh rẻ hơn à?'], ['The *countryside* is *quieter* than the *city*. ↘', 'Nông thôn yên tĩnh hơn thành phố.'], ['Could you speak a *bit* *slower*, please? ↗', 'Bạn nói chậm hơn chút được không?']],
    hoithoai: {
      ctx: 'Khách hàng đang phân vân giữa hai mẫu laptop ở cửa hàng của em.', vai: 'Khách hỏi, em là nhân viên tư vấn.', ai: '🧑‍💼 Customer',
      luot: [
        T(["I can't decide between the Dell and the Asus. Which one is better?", '', 'Tôi không chọn được giữa Dell và Asus. Cái nào tốt hơn?'], ['The Dell is faster, but the Asus is lighter and cheaper.', 'Dell nhanh hơn, còn Asus nhẹ hơn và rẻ hơn.', 'So sánh hai mặt.'], ['The Dell is more fast.', 'fast → faster.'], ['The Dell is better than.', 'Thiếu đối tượng so sánh.']),
        T(['How much cheaper is the Asus?', '', 'Asus rẻ hơn bao nhiêu?'], ["It's about two million dong cheaper.", 'Rẻ hơn khoảng 2 triệu.', 'Lượng + so sánh.'], ["It's two million more cheaper.", 'Không dùng more + -er.'], ["It's cheapest.", 'So sánh nhất không hợp ngữ cảnh.']),
        T(['I travel a lot for work.', '', 'Tôi đi công tác nhiều.'], ['Then the Asus is a better choice for you. It\'s much easier to carry.', 'Vậy Asus là lựa chọn tốt hơn. Mang theo dễ hơn nhiều.', 'Tư vấn có lý do.'], ['Then the Dell is heavier for you.', 'Không phải lời khuyên.'], ['Asus is more good.', 'good → better.'])
      ], ket: 'Em đã tư vấn khách bằng so sánh hơn.'
    },
    tom: ['-er than / more … than', 'better / worse', 'much / a bit + so sánh'], nguphap: 'So sánh hơn', phatam: 'than đọc yếu /ðən/; nối âm: faster‿than',
    loi: ['more cheaper', 'Quên than'], btvn: ['So sánh 2 điện thoại / 2 thành phố, 6 câu', 'Viết 4 câu có much và a bit', 'Luyện 🎤 câu có than đọc yếu']
  };

  /* ================= NGÀY 10 ================= */
  const d10 = {
    n: 10, ten: 'So sánh nhất và so sánh bằng', kinds: K,
    muc: 'Nói "nhất" với the -est / the most; so sánh bằng as … as và không bằng not as … as.',
    hoc: `<h4>1. So sánh nhất</h4>${F(['the', '+', 'adj-est / most adj', '+', '(in / of …)'])}${tbl(['Tính từ', 'So sánh nhất'], [['cheap', 'the cheapest'], ['big', 'the biggest'], ['easy', 'the easiest'], ['popular', 'the most popular'], ['good / bad', 'the best / the worst']])}
      ${exs([['Phở is the most famous Vietnamese dish.', 'Phở là món Việt nổi tiếng nhất.'], ["It's the best restaurant in town.", 'Đó là nhà hàng ngon nhất thị trấn.'], ["That was the worst day of my life.", 'Đó là ngày tệ nhất đời tôi.']])}
      <h4>2. So sánh bằng / không bằng</h4>${F(['as', '+', 'adj', '+', 'as'])}${exs([['My son is as tall as me.', 'Con trai tôi cao bằng tôi.'], ["The bus isn't as fast as the train.", 'Xe buýt không nhanh bằng tàu.']])}
      ${tip('💡 Hay dùng: <b>one of the + so sánh nhất + danh từ số nhiều</b>: <i>one of the biggest <b>cities</b></i>.')}`,
    vocab: [
      w('the cheapest', '/ðə ˈtʃiːpɪst/', 'rẻ nhất', '', ['This is the cheapest model.', '', 'Đây là mẫu rẻ nhất.']),
      w('the biggest', '/ðə ˈbɪɡɪst/', 'lớn nhất', '', ['It is the biggest city in Vietnam.', '', 'Đó là thành phố lớn nhất Việt Nam.']),
      w('the most popular', '/ðə moʊst ˈpɑːpjələr/', 'phổ biến nhất', '', ['Coffee is the most popular drink here.', '', 'Cà phê là đồ uống phổ biến nhất ở đây.']),
      w('the best', '/ðə best/', 'tốt nhất', '', ['You are the best!', '', 'Bạn là nhất!']),
      w('the worst', '/ðə wɜːrst/', 'tệ nhất', '', ['It was the worst traffic jam.', '', 'Đó là vụ kẹt xe tệ nhất.']),
      w('as … as', '/æz … æz/', 'bằng (so sánh bằng)', '', ['Is it as good as the old one?', '', 'Nó có tốt bằng cái cũ không?']),
      w('one of the', '/wʌn əv ðə/', 'một trong những', '+ danh từ số nhiều.', ['She is one of the best students.', '', 'Cô ấy là một trong những học sinh giỏi nhất.']),
      w('well-known', '/ˌwel ˈnoʊn/', 'nổi tiếng, được biết đến', '', ['Ha Long Bay is well-known all over the world.', '', 'Vịnh Hạ Long nổi tiếng khắp thế giới.']),
      w('tallest', '/ˈtɔːlɪst/', 'cao nhất', '', ['Landmark 81 is the tallest building in Vietnam.', '', 'Landmark 81 là toà nhà cao nhất Việt Nam.']),
      w('oldest', '/ˈoʊldɪst/', 'già nhất, lâu đời nhất', '', ['He is the oldest in my family.', '', 'Ông ấy lớn tuổi nhất nhà.']),
      w('in the world', '/ɪn ðə wɜːrld/', 'trên thế giới', '', ["It's the longest river in the world.", '', 'Đó là con sông dài nhất thế giới.']),
      w("I've ever", '/aɪv ˈevər/', 'tôi từng (sau so sánh nhất)', 'the best … I\'ve ever + V3.', ["It's the best film I've ever seen.", '', 'Đó là phim hay nhất tôi từng xem.'])
    ],
    qs: [
      ['mc', 'This is ___ phone in the shop.', 'the most expensive', ['the expensivest', 'more expensive', 'most expensive than'], 'Tính từ dài → the most.'],
      ['mc', 'He is the ___ person in our team.', 'funniest', ['funnyest', 'most funny than', 'funnier'], 'y → iest.'],
      ['mc', 'My car is not ___ fast ___ yours.', 'as / as', ['so / than', 'more / than', 'as / than'], 'not as … as.'],
      ['mc', 'Hanoi is one of the oldest ___ in Asia.', 'cities', ['city', "city's", 'citys'], 'one of the + số nhiều.'],
      ['mc', 'good → so sánh nhất?', 'the best', ['the goodest', 'the better', 'the most good'], 'good – better – best.'],
      ['hear', "It's the best coffee I've ever had.", 'Đó là ly cà phê ngon nhất tôi từng uống.', ['Đó là ly cà phê đầu tiên tôi uống.', 'Cà phê này ngon hơn hôm qua.', 'Tôi chưa từng uống cà phê.'], "the best … I've ever."],
      ['order', 'Sắp xếp: “Xe buýt không nhanh bằng tàu.”', ['The bus', "isn't", 'as fast', 'as', 'the train.'], "The bus isn't as fast as the train."]
    ],
    noi: [['*Phở* is the *most* *famous* Vietnamese *dish*. ↘', 'Phở là món Việt nổi tiếng nhất.'], ['It\'s the *best* *coffee* I\'ve *ever* *had*. ↘', 'Ly cà phê ngon nhất tôi từng uống.'], ['The *bus* isn\'t as *fast* as the *train*. ↘', 'Xe buýt không nhanh bằng tàu.'], ['What\'s the *biggest* *city* in your *country*? ↘', 'Thành phố lớn nhất nước bạn là gì?']],
    hoithoai: {
      ctx: 'Một du khách nước ngoài hỏi em về Việt Nam.', vai: 'Du khách hỏi, em giới thiệu.', ai: '🧳 Tourist',
      luot: [
        T(["What's the biggest city in Vietnam?", '', 'Thành phố lớn nhất Việt Nam là gì?'], ["Ho Chi Minh City is the biggest, but Hanoi is the capital.", 'TP.HCM lớn nhất, nhưng Hà Nội là thủ đô.', 'So sánh nhất + thông tin.'], ['Ho Chi Minh City is bigger.', 'Hỏi "nhất" → the biggest.'], ['Ho Chi Minh City is the most big.', 'big → the biggest.']),
        T(["What's the most popular food?", '', 'Món ăn phổ biến nhất là gì?'], ["Phở is one of the most popular dishes. Bánh mì is also very famous.", 'Phở là một trong những món phổ biến nhất. Bánh mì cũng rất nổi tiếng.', 'one of the + số nhiều.'], ['Phở is one of the most popular dish.', 'Danh từ phải số nhiều.'], ['Phở is popular than bánh mì.', 'Thiếu more.']),
        T(["Is Da Nang as busy as Ho Chi Minh City?", '', 'Đà Nẵng có nhộn nhịp bằng TP.HCM không?'], ["No, it isn't as busy. It's quieter and cleaner.", 'Không, không đông bằng. Yên tĩnh và sạch hơn.', 'not as … as + so sánh hơn.'], ['No, it is busy as.', 'Thiếu as phía trước.'], ['No, Da Nang is the quietest than.', 'Sai cấu trúc.'])
      ], ket: 'Em đã giới thiệu Việt Nam bằng so sánh nhất và so sánh bằng.'
    },
    tom: ['the -est / the most', 'as … as / not as … as', 'one of the + N số nhiều', 'the best … I\'ve ever'], nguphap: 'So sánh nhất; so sánh bằng', phatam: 'the most /ðə moʊst/; -est đọc /ɪst/',
    loi: ['Quên the', 'one of the + danh từ số ít'], btvn: ['Viết 6 câu giới thiệu quê em dùng so sánh nhất', 'So sánh 3 đồ vật trong nhà bằng 3 dạng so sánh', 'Luyện 🎤 4 câu']
  };

  /* ================= NGÀY 11 ================= */
  const d11 = {
    n: 11, ten: 'Mô tả thành phố và quê hương', kinds: K,
    muc: 'Giới thiệu nơi em sống: vị trí, đặc điểm, điểm tham quan, ưu và nhược điểm.',
    hoc: `<h4>1. Khung giới thiệu một nơi</h4>${tbl(['Ý', 'Mẫu câu'], [['Vị trí', "It's in the south of Vietnam, about 50 km from Ho Chi Minh City."], ['Quy mô', "It's a small town / a big city with about 2 million people."], ['Nổi tiếng về', "It's famous for its rice fields and fruit."], ['Có gì', 'There are many markets and a beautiful river.'], ['Ưu – nhược', 'The good thing is… The bad thing is…']])}
      <h4>2. Phương hướng</h4><p>in the north / south / east / west / centre of … · near · by the sea · on the river</p>
      ${tip('🏡 Phân biệt: <b>hometown</b> (quê, nơi lớn lên) · <b>village</b> (làng) · <b>town</b> (thị trấn) · <b>city</b> (thành phố) · <b>province</b> (tỉnh).')}`,
    vocab: [
      w('hometown', '/ˈhoʊmtaʊn/', 'quê nhà', '', ['My hometown is in the Mekong Delta.', '', 'Quê tôi ở đồng bằng sông Cửu Long.']),
      w('province', '/ˈprɑːvɪns/', 'tỉnh', '', ['Long An is a province near Ho Chi Minh City.', '', 'Long An là tỉnh gần TP.HCM.']),
      w('in the south', '/ɪn ðə saʊθ/', 'ở phía nam', '', ['Can Tho is in the south of Vietnam.', '', 'Cần Thơ ở miền Nam.']),
      w('famous for', '/ˈfeɪməs fɔːr/', 'nổi tiếng về', '', ['Hue is famous for its old buildings.', '', 'Huế nổi tiếng với các công trình cổ.']),
      w('population', '/ˌpɑːpjuˈleɪʃn/', 'dân số', '', ['The population is about one million.', '', 'Dân số khoảng một triệu.']),
      w('peaceful', '/ˈpiːsfl/', 'yên bình', '', ['Life in my village is peaceful.', '', 'Cuộc sống ở làng tôi yên bình.']),
      w('modern', '/ˈmɑːdərn/', 'hiện đại', '', ['There are many modern buildings.', '', 'Có nhiều toà nhà hiện đại.']),
      w('traffic jam', '/ˈtræfɪk dʒæm/', 'kẹt xe', '', ['There are traffic jams every morning.', '', 'Sáng nào cũng kẹt xe.']),
      w('pollution', '/pəˈluːʃn/', 'ô nhiễm', '', ['Air pollution is a big problem.', '', 'Ô nhiễm không khí là vấn đề lớn.']),
      w('sightseeing', '/ˈsaɪtsiːɪŋ/', 'tham quan', '', ['There are many places for sightseeing.', '', 'Có nhiều nơi để tham quan.']),
      w('rice field', '/raɪs fiːld/', 'cánh đồng lúa', '', ['You can see rice fields everywhere.', '', 'Đâu đâu cũng thấy ruộng lúa.']),
      w('the good thing is', '/ðə ɡʊd θɪŋ ɪz/', 'điều hay là', '', ['The good thing is the food is cheap.', '', 'Điều hay là đồ ăn rẻ.'])
    ],
    qs: [
      ['mc', 'Ha Long Bay is famous ___ its islands.', 'for', ['of', 'with', 'about'], 'famous for.'],
      ['mc', 'Da Lat is ___ the Central Highlands.', 'in', ['on', 'at', 'of'], 'in + vùng.'],
      ['mc', 'Từ nào là nhược điểm của thành phố?', 'traffic jam', ['peaceful', 'sightseeing', 'modern'], 'traffic jam = kẹt xe.'],
      ['mc', 'population nghĩa là?', 'dân số', ['ô nhiễm', 'tỉnh', 'du lịch'], 'population.'],
      ['mc', 'Câu đúng là?', 'There are many markets in my town.', ['My town has many market.', 'It has many markets in my town.', 'There is many markets in my town.'], 'There are + số nhiều.'],
      ['hear', "The good thing is the people are friendly. The bad thing is there's a lot of pollution.", 'Hay: người thân thiện. Dở: ô nhiễm nhiều.', ['Hay: ít ô nhiễm. Dở: người không thân thiện.', 'Hay: đồ ăn rẻ. Dở: kẹt xe.', 'Hay: hiện đại. Dở: ồn ào.'], 'friendly / pollution.'],
      ['order', 'Sắp xếp: “Quê tôi nổi tiếng về trái cây.”', ['My hometown', 'is', 'famous', 'for', 'fruit.'], 'My hometown is famous for fruit.']
    ],
    noi: [['My *hometown* is in the *south* of *Vietnam*. ↘', 'Quê tôi ở miền Nam Việt Nam.'], ['It\'s *famous* for its *rice* *fields* → and *fresh* *fruit*. ↘', 'Nổi tiếng về đồng lúa và trái cây tươi.'], ['The *good* thing is → *life* is *peaceful*. ↘', 'Điều hay là cuộc sống yên bình.'], ['Where is your *hometown*? ↘', 'Quê bạn ở đâu?']],
    hoithoai: {
      ctx: 'Một đồng nghiệp người Úc hỏi về quê em.', vai: 'Chris hỏi, em giới thiệu.', ai: '🧑 Chris',
      luot: [
        T(['Where is your hometown?', '', 'Quê bạn ở đâu?'], ["It's in Long An province, about 40 kilometres from Ho Chi Minh City.", 'Ở tỉnh Long An, cách TP.HCM khoảng 40 km.', 'Vị trí + khoảng cách.'], ['It is Long An.', 'Thiếu thông tin, câu cụt.'], ['My hometown is on Long An.', 'in + tỉnh.']),
        T(["What's it famous for?", '', 'Ở đó nổi tiếng về gì?'], ["It's famous for its rice and dragon fruit.", 'Nổi tiếng về lúa gạo và thanh long.', 'famous for.'], ["It's famous of rice.", 'famous for.'], ['It is rice.', 'Không trả lời đúng.']),
        T(['Would you like to live there in the future?', '', 'Sau này bạn muốn sống ở đó không?'], ["Maybe. The good thing is it's peaceful, but there aren't many jobs.", 'Có thể. Điều hay là yên bình, nhưng không nhiều việc làm.', 'Ưu + nhược.'], ["Yes, because it's traffic jam.", 'Lý do không hợp lý.'], ['There is many jobs.', 'There are + số nhiều.'])
      ], ket: 'Em đã giới thiệu quê hương có cấu trúc.'
    },
    tom: ['Khung giới thiệu một nơi', 'famous for', 'Phương hướng', 'Ưu – nhược'], nguphap: 'There is/are; famous for; giới từ nơi chốn', phatam: 'province /ˈprɑːvɪns/, population /ˌpɑːpjuˈleɪʃn/',
    loi: ['famous of', 'My town has many … (nên dùng There are)'], btvn: ['Viết đoạn 8 câu giới thiệu quê em', 'Ghi âm bài nói 1 phút', 'Luyện 🎤 4 câu']
  };

  /* ================= NGÀY 12 ================= */
  const d12 = {
    n: 12, ten: 'Nhà cửa, đồ đạc và thuê nhà', kinds: K,
    muc: 'Tả căn nhà, đồ đạc, hỏi thuê phòng/căn hộ: giá thuê, tiền cọc, tiện ích.',
    hoc: `<h4>1. Các phòng và đồ đạc</h4>${tbl(['Phòng', 'Đồ đạc'], [['living room', 'sofa, TV, coffee table'], ['bedroom', 'bed, wardrobe, desk'], ['kitchen', 'fridge, cooker, microwave, sink'], ['bathroom', 'shower, toilet, washing machine']])}
      <h4>2. Hỏi thuê nhà</h4>${exs([["I'm looking for a two-bedroom apartment.", 'Tôi đang tìm căn hộ hai phòng ngủ.'], ["How much is the rent per month?", 'Tiền thuê bao nhiêu một tháng?'], ['Is the apartment furnished?', 'Căn hộ có sẵn nội thất không?'], ['Are electricity and water included?', 'Đã gồm tiền điện nước chưa?'], ['How much is the deposit?', 'Tiền cọc bao nhiêu?']])}
      ${tip('💡 <b>flat</b> (Anh) = <b>apartment</b> (Mỹ). <b>furnished</b> = có sẵn đồ, <b>unfurnished</b> = nhà trống.')}`,
    vocab: [
      w('apartment', '/əˈpɑːrtmənt/', 'căn hộ', '', ['We live in a small apartment.', '', 'Chúng tôi sống trong căn hộ nhỏ.']),
      w('rent', '/rent/', 'tiền thuê; thuê', '', ['The rent is 6 million a month.', '', 'Tiền thuê 6 triệu một tháng.']),
      w('deposit', '/dɪˈpɑːzɪt/', 'tiền đặt cọc', '', ['You need to pay a deposit.', '', 'Bạn cần đặt cọc.']),
      w('furnished', '/ˈfɜːrnɪʃt/', 'có sẵn nội thất', '', ['The room is fully furnished.', '', 'Phòng có đầy đủ nội thất.']),
      w('included', '/ɪnˈkluːdɪd/', 'đã bao gồm', '', ['Internet is included.', '', 'Đã bao gồm Internet.']),
      w('landlord', '/ˈlændlɔːrd/', 'chủ nhà (cho thuê)', '', ['I called the landlord about the leak.', '', 'Tôi gọi chủ nhà về chỗ dột.']),
      w('wardrobe', '/ˈwɔːrdroʊb/', 'tủ quần áo', '', ['There is a big wardrobe in the bedroom.', '', 'Phòng ngủ có tủ quần áo lớn.']),
      w('fridge', '/frɪdʒ/', 'tủ lạnh', '', ['The fridge is empty.', '', 'Tủ lạnh trống trơn.']),
      w('washing machine', '/ˈwɑːʃɪŋ məˈʃiːn/', 'máy giặt', '', ['The washing machine is broken.', '', 'Máy giặt bị hỏng.']),
      w('balcony', '/ˈbælkəni/', 'ban công', '', ['I grow plants on my balcony.', '', 'Tôi trồng cây ở ban công.']),
      w('neighbourhood', '/ˈneɪbərhʊd/', 'khu phố', '', ['It is a quiet neighbourhood.', '', 'Đó là khu phố yên tĩnh.']),
      w('move in', '/muːv ɪn/', 'dọn vào ở', '', ['When can I move in?', '', 'Khi nào tôi dọn vào được?'])
    ],
    qs: [
      ['mc', '“Tiền thuê bao nhiêu một tháng?” là?', 'How much is the rent per month?', ['How many is the rent?', 'What is the rent of month?', 'How much rent you?'], 'How much is the rent…'],
      ['mc', 'furnished nghĩa là?', 'có sẵn nội thất', ['nhà trống', 'đã sửa chữa', 'có ban công'], 'furnished.'],
      ['mc', 'Người cho thuê nhà là?', 'landlord', ['tenant', 'neighbour', 'manager'], 'landlord.'],
      ['mc', 'Are electricity and water ___?', 'included', ['including', 'include', 'inclusive of'], 'be included.'],
      ['mc', 'Bạn cất quần áo ở đâu?', 'wardrobe', ['fridge', 'sink', 'balcony'], 'wardrobe.'],
      ['hear', "The rent is five million a month and the deposit is one month's rent.", 'Thuê 5 triệu/tháng, cọc 1 tháng.', ['Thuê 1 triệu/tháng, cọc 5 tháng.', 'Thuê 5 triệu/tháng, không cọc.', 'Thuê 15 triệu/năm.'], 'five million / one month.'],
      ['order', 'Sắp xếp: “Khi nào tôi dọn vào được?”', ['When', 'can', 'I', 'move in?'], 'When can I move in?']
    ],
    noi: [['I\'m *looking* for a *two*-bedroom *apartment*. ↘', 'Tôi đang tìm căn hộ hai phòng ngủ.'], ['How *much* is the *rent* per *month*? ↘', 'Tiền thuê bao nhiêu một tháng?'], ['Is the *apartment* *furnished*? ↗', 'Căn hộ có sẵn nội thất không?'], ['Are *electricity* and *water* *included*? ↗', 'Đã gồm điện nước chưa?']],
    hoithoai: {
      ctx: 'Em gọi điện cho chủ nhà về một căn hộ cho thuê.', vai: 'Chủ nhà trả lời, em hỏi thông tin.', ai: '🏠 Landlord',
      luot: [
        T(['Hello, this is Mrs. Wilson.', '', 'Alo, tôi là bà Wilson.'], ["Hi, I saw your ad online. Is the apartment still available?", 'Chào bà, tôi thấy tin trên mạng. Căn hộ còn trống không?', 'Mở đầu tự nhiên.'], ['Hi, I want apartment.', 'Thiếu mạo từ, cộc lốc.'], ['Hello, I am the apartment.', 'Sai nghĩa.']),
        T(["Yes, it is. It has two bedrooms and a balcony.", '', 'Còn. Có hai phòng ngủ và ban công.'], ['Great. How much is the rent, and is it furnished?', 'Tốt quá. Tiền thuê bao nhiêu và có nội thất không?', 'Hỏi hai ý.'], ['How many money is it?', 'money không đếm được → How much.'], ['Is it furnish?', 'furnished.']),
        T(["It's seven million a month, fully furnished. Water is included, but not electricity.", '', '7 triệu/tháng, đủ nội thất. Gồm nước, chưa gồm điện.'], ['I see. Can I come and see it this weekend?', 'Tôi hiểu rồi. Cuối tuần tôi đến xem được không?', 'Đề nghị xem nhà.'], ['Electricity is included, great.', 'Nghe nhầm: điện chưa gồm.'], ['I move in yesterday.', 'Sai thì và nghĩa.'])
      ], ket: 'Em đã hỏi thuê nhà bằng tiếng Anh.'
    },
    tom: ['Phòng và đồ đạc', 'Hỏi thuê nhà', 'rent / deposit / furnished / included'], nguphap: 'Câu hỏi How much / Is it…? / Are … included?', phatam: 'apartment /əˈpɑːrtmənt/, furnished /ˈfɜːrnɪʃt/',
    loi: ['How many money', 'Nhầm landlord (chủ) và tenant (người thuê)'], btvn: ['Tả căn nhà của em 8 câu', 'Viết 5 câu hỏi khi đi thuê nhà', 'Luyện 🎤 4 câu']
  };

  /* ================= NGÀY 13 ================= */
  const d13 = {
    n: 13, ten: 'Thời tiết và dự đoán với will', kinds: K,
    muc: 'Nói về thời tiết, mùa; dự đoán tương lai với will / won\'t, probably, I think.',
    hoc: `<h4>1. Thời tiết</h4>${reads([['sunny', '/ˈsʌni/', 'nắng'], ['cloudy', '/ˈklaʊdi/', 'nhiều mây'], ['rainy', '/ˈreɪni/', 'mưa'], ['windy', '/ˈwɪndi/', 'gió'], ['humid', '/ˈhjuːmɪd/', 'nồm, ẩm'], ['storm', '/stɔːrm/', 'bão']])}
      ${exs([["What's the weather like today?", 'Hôm nay thời tiết thế nào?'], ["It's 35 degrees. It's boiling!", '35 độ. Nóng như thiêu!'], ['The rainy season starts in May.', 'Mùa mưa bắt đầu vào tháng Năm.']])}
      <h4>2. Dự đoán: will / won't</h4>${F(['I think', '+', 'S', '+', 'will (probably)', '+', 'V'])}${exs([["I think it'll rain this afternoon.", 'Tôi nghĩ chiều nay sẽ mưa.'], ["It probably won't be cold tomorrow.", 'Ngày mai chắc không lạnh.'], ['Will the flight be delayed?', 'Chuyến bay có bị hoãn không?']])}
      ${tip('🔑 Vị trí <b>probably</b>: sau will, trước won\'t: <i>It will probably rain. It probably won\'t rain.</i>')}${G('tuong-lai', 'Diễn tả tương lai')}`,
    vocab: [
      w('weather', '/ˈweðər/', 'thời tiết', '', ["What's the weather like?", '', 'Thời tiết thế nào?']),
      w('forecast', '/ˈfɔːrkæst/', 'dự báo', '', ['The weather forecast says it will rain.', '', 'Dự báo nói trời sẽ mưa.']),
      w('degrees', '/dɪˈɡriːz/', 'độ (nhiệt độ)', '', ["It's 30 degrees today.", '', 'Hôm nay 30 độ.']),
      w('humid', '/ˈhjuːmɪd/', 'ẩm, oi', '', ['Saigon is hot and humid.', '', 'Sài Gòn nóng và ẩm.']),
      w('rainy season', '/ˈreɪni ˈsiːzn/', 'mùa mưa', '', ['The rainy season lasts six months.', '', 'Mùa mưa kéo dài sáu tháng.']),
      w('dry season', '/draɪ ˈsiːzn/', 'mùa khô', '', ['Tourists like the dry season.', '', 'Du khách thích mùa khô.']),
      w('storm', '/stɔːrm/', 'bão', '', ['A big storm is coming.', '', 'Một cơn bão lớn đang đến.']),
      w('flood', '/flʌd/', 'lũ lụt; ngập', '', ['The street was flooded after the rain.', '', 'Đường ngập sau cơn mưa.']),
      w('umbrella', '/ʌmˈbrelə/', 'cái ô', '', ["Take an umbrella. It'll rain.", '', 'Mang ô đi. Trời sẽ mưa.']),
      w('probably', '/ˈprɑːbəbli/', 'có lẽ, chắc là', '', ["It'll probably be sunny.", '', 'Có lẽ trời sẽ nắng.']),
      w("won't", '/woʊnt/', 'sẽ không (will not)', '', ["It won't be cold.", '', 'Trời sẽ không lạnh.']),
      w('temperature', '/ˈtemprətʃər/', 'nhiệt độ', '', ['The temperature will drop tonight.', '', 'Tối nay nhiệt độ sẽ giảm.'])
    ],
    qs: [
      ['mc', 'I think it ___ rain later.', 'will', ['is', 'does', 'going'], 'Dự đoán → will.'],
      ['mc', 'Câu đúng là?', "It probably won't rain.", ["It won't probably rain.", "It probably will not rains.", "Probably it won't rains."], 'probably trước won\'t.'],
      ['mc', '“What\'s the weather like?” hỏi về?', 'thời tiết', ['sở thích', 'ngoại hình', 'nhiệt độ cơ thể'], 'weather.'],
      ['mc', "won't = ?", 'will not', ['want not', 'would not', 'was not'], "won't = will not."],
      ['mc', 'humid nghĩa là?', 'ẩm, oi', ['khô', 'lạnh', 'nhiều gió'], 'humid.'],
      ['hear', "The forecast says there'll be a storm tomorrow, so the flight will probably be delayed.", 'Dự báo có bão, chuyến bay có lẽ bị hoãn.', ['Ngày mai nắng, chuyến bay đúng giờ.', 'Chuyến bay bị huỷ hôm nay.', 'Có bão hôm nay.'], 'storm … probably be delayed.'],
      ['order', 'Sắp xếp: “Tôi nghĩ ngày mai sẽ nắng.”', ['I think', 'it', 'will be', 'sunny', 'tomorrow.'], 'I think it will be sunny tomorrow.']
    ],
    noi: [['What\'s the *weather* *like* in your *city*? ↘', 'Thời tiết ở thành phố bạn thế nào?'], ['It\'s *hot* and *humid* → *all* *year*. ↘', 'Nóng ẩm quanh năm.'], ['I *think* it\'ll *rain* this *afternoon*. ↘', 'Tôi nghĩ chiều nay sẽ mưa.'], ['Will the *flight* be *delayed*? ↗', 'Chuyến bay có bị hoãn không?']],
    hoithoai: {
      ctx: 'Đối tác nước ngoài sắp sang Việt Nam vào tháng 9, hỏi em về thời tiết.', vai: 'Anna hỏi, em tư vấn.', ai: '👩 Anna',
      luot: [
        T(["What's the weather like in Ho Chi Minh City in September?", '', 'Tháng 9 TP.HCM thời tiết thế nào?'], ["It's the rainy season, so it's hot and humid with heavy rain in the afternoon.", 'Mùa mưa, nóng ẩm, chiều hay mưa to.', 'Mô tả đủ ý.'], ["It's rainy season, cold.", 'Sai thông tin: không lạnh.'], ["It weather is rain.", 'Câu sai.']),
        T(['Will it be very hot?', '', 'Có nóng lắm không?'], ["It'll probably be around 32 degrees.", 'Có lẽ khoảng 32 độ.', 'will probably.'], ["It probably will be around 32 degree.", 'degrees số nhiều; probably sau will.'], ['It is will hot.', 'Câu sai.']),
        T(['What should I bring?', '', 'Tôi nên mang gì?'], ["Bring light clothes and an umbrella. You'll need it!", 'Mang đồ mỏng và ô. Chị sẽ cần nó!', 'Lời khuyên hợp lý.'], ['Bring a warm coat.', 'Không hợp thời tiết nóng.'], ["You won't need umbrella.", 'Mùa mưa thì cần ô.'])
      ], ket: 'Em đã tư vấn thời tiết và dự đoán bằng will.'
    },
    tom: ['Từ thời tiết', "will / won't + probably", "What's the weather like?"], nguphap: 'Tương lai đơn: dự đoán', phatam: "won't /woʊnt/ ≠ want /wɑːnt/; humid /ˈhjuːmɪd/",
    loi: ["Nhầm won't và want", 'Đặt probably sai chỗ'], btvn: ['Tả thời tiết quê em theo mùa, 6 câu', 'Viết 5 câu dự đoán về năm sau', 'Luyện 🎤 phân biệt won\'t / want']
  };

  /* ================= NGÀY 14 ================= */
  const d14 = {
    n: 14, ten: 'Ôn tập tuần 2 và hội thoại tổng hợp', vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Ôn mô tả người, nơi chốn, nhà cửa, thời tiết và ba dạng so sánh.',
    hoc: `<h4>Tóm tắt tuần 2</h4>${tbl(['Chủ điểm', 'Mẫu câu'], [['Ngoại hình / tính cách', 'What does he look like? / What is he like?'], ['So sánh hơn', 'cheaper than, more expensive than, better, worse'], ['So sánh nhất', 'the cheapest, the most popular, the best'], ['So sánh bằng', "as … as / isn't as … as"], ['Nơi chốn', "It's in the south… It's famous for…"], ['Thuê nhà', 'How much is the rent? Is it furnished?'], ['Thời tiết, dự đoán', "What's the weather like? It'll probably rain."]])}`,
    qs: [['mc', 'This is ___ hotel in the city.', 'the most expensive', ['more expensive', 'the expensivest', 'most expensive than'], 'So sánh nhất.'], ['mc', 'My sister is ___ than me.', 'younger', ['more young', 'youngest', 'the younger']]],
    noi: [['*Saigon* is *bigger* and *busier* than *Hanoi*. ↘', 'Sài Gòn lớn và nhộn nhịp hơn Hà Nội.'], ['It\'s one of the *most* *beautiful* places I\'ve *ever* *seen*. ↘', 'Một trong những nơi đẹp nhất tôi từng thấy.'], ['What\'s your *best* *friend* *like*? ↘', 'Bạn thân của bạn là người thế nào?']],
    hoithoai: {
      ctx: 'Em giới thiệu thành phố cho một nhân viên mới chuyển từ Singapore sang.', vai: 'Leo hỏi liên tục, em trả lời.', ai: '🧑 Leo',
      luot: [
        T(['Is Ho Chi Minh City bigger than Singapore?', '', 'TP.HCM lớn hơn Singapore không?'], ['Yes, it is. It\'s much bigger, but it isn\'t as clean as Singapore.', 'Có, lớn hơn nhiều nhưng không sạch bằng Singapore.', 'So sánh hơn + không bằng.'], ['Yes, it is more big.', 'big → bigger.'], ['Yes, it is biggest.', 'Không phải so sánh nhất.']),
        T(["Where's the best place to live?", '', 'Chỗ nào ở tốt nhất?'], ['District 7 is one of the quietest areas, and the apartments are modern.', 'Quận 7 là một trong những khu yên tĩnh nhất, căn hộ hiện đại.', 'one of the + so sánh nhất.'], ['District 7 is one of the quietest area.', 'areas số nhiều.'], ['District 7 is quieter.', 'Thiếu đối tượng so sánh.']),
        T(['What should I know about the weather?', '', 'Tôi cần biết gì về thời tiết?'], ["It's hot all year. From May to November it'll rain almost every afternoon.", 'Nóng quanh năm. Tháng 5–11 chiều nào cũng mưa.', 'Thời tiết + dự đoán.'], ["It's cold in December, you'll need a coat.", 'Không đúng với Sài Gòn.'], ['The weather is like hot.', 'Câu sai.']),
        T(["Thanks! What's my new manager like?", '', 'Cảm ơn! Quản lý mới của tôi là người thế nào?'], ["She's very patient and friendly. You'll like her.", 'Chị ấy rất kiên nhẫn, thân thiện. Anh sẽ thích chị ấy.', 'Tả tính cách.'], ["She's tall and has long hair.", 'Đó là ngoại hình, không phải tính cách.'], ['She likes coffee.', 'Không trả lời câu hỏi.'])
      ], ket: 'Em đã hoàn thành giai đoạn mô tả và so sánh!'
    },
    tom: ['Ôn tuần 2', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn mô tả và so sánh', phatam: 'Nhấn từ so sánh; than đọc yếu',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: học lại ngày yếu và làm lại', 'Ghi âm 1 phút giới thiệu thành phố em sống', 'Làm bài "So sánh hơn và nhất" trong Sổ tay ngữ pháp']
  };
  d14.qs[1].push('young → younger.');

  window.PLT_EN2 = { plan, stages, H: { w, L, T, tbl, tip, ex, exs, F, reads, sp, K, G }, days: [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14] };
})();

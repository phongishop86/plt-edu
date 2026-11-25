/* PLT-Edu · Tiếng Hàn – Cấp 1 (Nhập môn, hướng tới TOPIK I): lộ trình 30 ngày, bảng chữ Hangul, Ngày 1–14
   h = chữ Hàn, p = phiên âm La-tinh theo cách đọc thực tế (Romaja chuẩn), v = nghĩa. */
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
  const K = ['meaning', 'listen', 'listenWord', 'hanzi', 'pinyin', 'match'];

  const plan = [
    'Làm quen tiếng Hàn và 6 nguyên âm cơ bản', 'Phụ âm cơ bản', 'Nguyên âm ghép', 'Phụ âm bật hơi và phụ âm căng', 'Patchim – phụ âm cuối', 'Nối âm và luyện đọc', 'Ôn tập Hangul và kiểm tra',
    'Chào hỏi và giới thiệu bản thân', 'Trợ từ 은/는, 이/가 và câu 이에요/예요', 'Số Hán-Hàn: ngày tháng, tiền, điện thoại', 'Số thuần Hàn: giờ, tuổi, đếm đồ vật', 'Gia đình và 있어요/없어요', 'Đồ ăn và gọi món', 'Ôn tập tuần 2 và hội thoại tổng hợp',
    'Mua sắm và giá cả', 'Hỏi đường và vị trí', 'Giao thông và đi lại', 'Công việc và nơi làm việc', 'Sở thích và đuôi câu -아요/어요', 'Thời gian, lịch hẹn và thì quá khứ', 'Kiểm tra tổng hợp và mô phỏng giao tiếp',
    'Làm quen người mới', 'Giao tiếp tại nhà hàng', 'Mua sắm quần áo', 'Khách sạn và du lịch', 'Điện thoại và tin nhắn', 'Tiếng Hàn nơi công sở', 'Nghe hiểu và phản xạ', 'Mô phỏng tình huống liên tục', 'Kiểm tra cuối khoá và lộ trình TOPIK'
  ].map((ten, i) => ({ n: i + 1, ten }));
  const stages = [
    { ten: '🌱 Giai đoạn 1 – Bảng chữ Hangul', tu: 1, den: 7 }, { ten: '🧱 Giai đoạn 2 – Câu cơ bản', tu: 8, den: 14 },
    { ten: '🏙️ Giai đoạn 3 – Giao tiếp đời sống', tu: 15, den: 21 }, { ten: '⚡ Giai đoạn 4 – Phản xạ và ứng dụng', tu: 22, den: 30 }
  ];

  /* ---------- Bảng chữ Hangul ---------- */
  const a = (k, c, p, g) => ({ k, c, p, g });
  const chart = {
    ten: 'Bảng chữ Hangul',
    intro: '<p>Hangul có <b>14 phụ âm cơ bản, 10 nguyên âm cơ bản</b>, cộng thêm phụ âm đôi và nguyên âm ghép. Mỗi âm tiết là một <b>khối vuông</b>: phụ âm đầu + nguyên âm (+ phụ âm cuối). Bấm từng ô để nghe.</p><p class="muted small">Dòng chữ nhỏ là âm gần giống tiếng Việt, chỉ để tham khảo; hãy bắt chước giọng mẫu.</p>',
    phan: [
      { ten: 'Nguyên âm', nhom: [
        { ten: '10 nguyên âm cơ bản', mo: 'Viết kèm ㅇ (câm) khi đứng một mình: 아, 어, 오…', am: [a('ㅏ', '아', 'a', 'a'), a('ㅑ', '야', 'ya', 'ya'), a('ㅓ', '어', 'eo', 'ơ (mở miệng)'), a('ㅕ', '여', 'yeo', 'yơ'), a('ㅗ', '오', 'o', 'ô'), a('ㅛ', '요', 'yo', 'yô'), a('ㅜ', '우', 'u', 'u'), a('ㅠ', '유', 'yu', 'yu'), a('ㅡ', '으', 'eu', 'ư'), a('ㅣ', '이', 'i', 'i')] },
        { ten: 'Nguyên âm ghép', mo: 'ㅐ và ㅔ ngày nay đọc gần như giống nhau.', am: [a('ㅐ', '애', 'ae', 'e'), a('ㅔ', '에', 'e', 'ê'), a('ㅒ', '얘', 'yae', 'ye'), a('ㅖ', '예', 'ye', 'yê'), a('ㅘ', '와', 'wa', 'oa'), a('ㅙ', '왜', 'wae', 'oe'), a('ㅚ', '외', 'oe', 'uê'), a('ㅝ', '워', 'wo', 'uơ'), a('ㅞ', '웨', 'we', 'uê'), a('ㅟ', '위', 'wi', 'uy'), a('ㅢ', '의', 'ui', 'ưi')] }
      ] },
      { ten: 'Phụ âm', nhom: [
        { ten: 'Phụ âm cơ bản', mo: 'ㄱ ㄷ ㅂ ㅈ đầu từ đọc nhẹ như k, t, p, ch; giữa từ đọc như g, đ, b, j.', am: [a('ㄱ', '가', 'g/k', 'c, k nhẹ'), a('ㄴ', '나', 'n', 'n'), a('ㄷ', '다', 'd/t', 't nhẹ'), a('ㄹ', '라', 'r/l', 'r nhẹ; cuối là l'), a('ㅁ', '마', 'm', 'm'), a('ㅂ', '바', 'b/p', 'p nhẹ'), a('ㅅ', '사', 's', 'x'), a('ㅇ', '아', '–/ng', 'câm ở đầu, ng ở cuối'), a('ㅈ', '자', 'j', 'ch nhẹ'), a('ㅎ', '하', 'h', 'h')] },
        { ten: 'Phụ âm bật hơi', mo: 'Đọc kèm luồng hơi mạnh.', am: [a('ㅋ', '카', 'k', 'kh bật hơi'), a('ㅌ', '타', 't', 'th'), a('ㅍ', '파', 'p', 'p bật hơi (không phải ph)'), a('ㅊ', '차', 'ch', 'ch bật hơi')] },
        { ten: 'Phụ âm căng (đôi)', mo: 'Căng cổ họng, không bật hơi, âm cứng và gọn.', am: [a('ㄲ', '까', 'kk', 'c cứng'), a('ㄸ', '따', 'tt', 't cứng'), a('ㅃ', '빠', 'pp', 'p cứng'), a('ㅆ', '싸', 'ss', 'x mạnh'), a('ㅉ', '짜', 'jj', 'ch cứng')] }
      ] },
      { ten: 'Patchim – phụ âm cuối (7 âm đại diện)', nhom: [{ ten: 'Mọi phụ âm cuối đều đọc thành 1 trong 7 âm', am: [a('[k]', '국', 'guk', 'ㄱ ㄲ ㅋ'), a('[n]', '산', 'san', 'ㄴ'), a('[t]', '옷', 'ot', 'ㄷ ㅅ ㅆ ㅈ ㅊ ㅌ ㅎ'), a('[l]', '물', 'mul', 'ㄹ'), a('[m]', '감', 'gam', 'ㅁ'), a('[p]', '밥', 'bap', 'ㅂ ㅍ'), a('[ng]', '강', 'gang', 'ㅇ')] }] }
    ]
  };

  /* ================= NGÀY 1 ================= */
  const d1 = {
    n: 1, ten: 'Làm quen tiếng Hàn và 6 nguyên âm cơ bản', kinds: K,
    muc: 'Hiểu cấu tạo khối âm tiết Hangul, đọc 6 nguyên âm ㅏ ㅓ ㅗ ㅜ ㅡ ㅣ, nói 4 câu chào hỏi đầu tiên.',
    hoc: `<h4>1. Hangul là gì?</h4><p>Hangul (한글) là chữ viết tiếng Hàn do vua Sejong tạo ra năm 1443. Đây là chữ <b>ghép vần</b> giống tiếng Việt, rất dễ học: chỉ khoảng 1 tuần là đọc được.</p>
      <h4>2. Một âm tiết là một khối vuông</h4>${F(['ㅎ<small>phụ âm đầu</small>', '+', 'ㅏ<small>nguyên âm</small>', '+', 'ㄴ<small>phụ âm cuối</small>', '→', '한<small>han</small>'])}<p>Nguyên âm đứng một mình phải thêm <b>ㅇ</b> (câm) ở đầu: ㅏ → <b>아</b>.</p>
      <h4>3. Sáu nguyên âm cơ bản</h4>${tbl(['Chữ', 'Đọc', 'Gần với', 'Nghe'], [['아', 'a', 'a'], ['어', 'eo', 'ơ, miệng mở rộng'], ['오', 'o', 'ô, tròn môi'], ['우', 'u', 'u, chu môi'], ['으', 'eu', 'ư, kéo dẹt môi'], ['이', 'i', 'i']].map(([c, p, g]) => `<tr><td><b class="zh-hz">${c}</b></td><td>${p}</td><td>${g}</td><td>${sp(c)}</td></tr>`))}
      ${tip('🔑 Mẹo nhớ: nét ngắn nằm <b>bên phải</b> hoặc <b>bên trên</b> → a, o (miệng mở ra/ lên); nét ngắn nằm <b>bên trái</b> hoặc <b>bên dưới</b> → eo, u.')}
      <h4>4. Bốn câu chào đầu tiên (học thuộc cả câu)</h4>${reads([['안녕하세요', 'annyeonghaseyo', 'Xin chào'], ['감사합니다', 'gamsahamnida', 'Cảm ơn'], ['네', 'ne', 'Vâng / Dạ'], ['아니요', 'aniyo', 'Không']])}`,
    vocab: [
      w('안녕하세요', 'annyeonghaseyo', 'xin chào', 'Chào lịch sự, dùng mọi lúc.', ['선생님, 안녕하세요!', 'seonsaengnim, annyeonghaseyo', 'Em chào thầy/cô!']),
      w('감사합니다', 'gamsahamnida', 'cảm ơn', 'Trang trọng.', ['정말 감사합니다.', 'jeongmal gamsahamnida', 'Thật sự cảm ơn.']),
      w('네', 'ne', 'vâng, dạ, có', '', ['네, 맞아요.', 'ne, majayo', 'Vâng, đúng rồi.']),
      w('아니요', 'aniyo', 'không', '', ['아니요, 괜찮아요.', 'aniyo, gwaenchanayo', 'Không, không sao.']),
      w('아이', 'ai', 'đứa trẻ', 'Chỉ gồm 아 + 이.', ['아이가 예뻐요.', 'aiga yeppeoyo', 'Đứa bé xinh quá.']),
      w('오이', 'oi', 'dưa chuột', '', ['오이 주세요.', 'oi juseyo', 'Cho tôi dưa chuột.'])
    ],
    qs: [
      ['hear', '어', '어 (eo)', ['오 (o)', '우 (u)', '으 (eu)'], '어 đọc gần "ơ", miệng mở.', 'Nghe và chọn chữ đúng.'],
      ['hear', '우', '우 (u)', ['오 (o)', '어 (eo)', '이 (i)'], '우 = u.', 'Nghe và chọn chữ đúng.'],
      ['hear', '으', '으 (eu)', ['우 (u)', '어 (eo)', '아 (a)'], '으 = ư.', 'Nghe và chọn chữ đúng.'],
      ['mc', 'Nguyên âm ㅏ đứng một mình viết thế nào?', '아', ['ㅏ', '하', '야'], 'Thêm ㅇ câm ở đầu.'],
      ['mc', 'Chữ 오 đọc là?', 'o (ô)', ['eo (ơ)', 'u', 'a'], '오 = o.'],
      ['mc', '“Cảm ơn” (trang trọng) là?', '감사합니다', ['안녕하세요', '아니요', '네'], 'gamsahamnida.'],
      ['mc', 'Chữ Hangul do ai tạo ra?', 'Vua Sejong (thế kỷ 15)', ['Người Trung Quốc', 'Người Nhật', 'Không rõ'], 'Năm 1443, vua Sejong.']
    ],
    hoithoai: {
      ctx: 'Em gặp bạn Hàn Quốc tên Ji-min lần đầu tiên.', vai: 'Ji-min nói, em đáp lại.', ai: '👩 지민',
      luot: [
        T(['안녕하세요!', 'annyeonghaseyo', 'Xin chào!'], ['안녕하세요!', 'annyeonghaseyo', 'Xin chào!', 'Chào lại.'], ['감사합니다!', 'gamsahamnida', 'Chưa có gì để cảm ơn.'], ['아니요!', 'aniyo', '"Không" – không phù hợp.']),
        T(['커피 마셔요?', 'keopi masyeoyo?', 'Bạn uống cà phê không?'], ['네!', 'ne', 'Vâng!', 'Đồng ý.'], ['안녕하세요!', 'annyeonghaseyo', 'Đã chào rồi.'], ['오이!', 'oi', '"Dưa chuột" 😄']),
        T(['여기요.', 'yeogiyo', 'Đây (đưa cà phê).'], ['감사합니다!', 'gamsahamnida', 'Cảm ơn!', 'Được đưa đồ thì cảm ơn.'], ['아니요!', 'aniyo', 'Từ chối sau khi đã nhận lời?'], ['아이!', 'ai', 'Sai nghĩa.'])
      ], ket: 'Em đã chào hỏi và cảm ơn bằng tiếng Hàn!'
    },
    tom: ['Cấu tạo khối âm tiết', '6 nguyên âm cơ bản', '4 câu chào'], nguphap: 'Chưa học (học thuộc câu chào)', phatam: 'ㅏ ㅓ ㅗ ㅜ ㅡ ㅣ',
    loi: ['Nhầm 어 và 오', 'Nhầm 우 và 으', 'Viết nguyên âm thiếu ㅇ'], btvn: ['Viết mỗi nguyên âm 10 lần', 'Nói 안녕하세요 và 감사합니다 với giọng mẫu 10 lần', 'Đọc to: 아이, 오이, 이, 오']
  };

  /* ================= NGÀY 2 ================= */
  const d2 = {
    n: 2, ten: 'Phụ âm cơ bản', kinds: K,
    muc: 'Đọc và ghép 10 phụ âm cơ bản ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅅ ㅇ ㅈ ㅎ với nguyên âm.',
    hoc: `<h4>1. Mười phụ âm cơ bản</h4>${tbl(['Chữ', 'Ghép với ㅏ', 'Đọc', 'Ghi chú', 'Nghe'], [['ㄱ', '가', 'ga', 'đầu từ nghe như "ca" nhẹ'], ['ㄴ', '나', 'na', 'n'], ['ㄷ', '다', 'da', 'đầu từ như "ta" nhẹ'], ['ㄹ', '라', 'ra', 'r chạm lưỡi nhẹ'], ['ㅁ', '마', 'ma', 'm'], ['ㅂ', '바', 'ba', 'đầu từ như "pa" nhẹ'], ['ㅅ', '사', 'sa', 'x; trước ㅣ đọc "shi"'], ['ㅇ', '아', 'a', 'câm khi đứng đầu'], ['ㅈ', '자', 'ja', 'ch nhẹ'], ['ㅎ', '하', 'ha', 'h']].map(([c, s, p, g]) => `<tr><td><b class="zh-hz">${c}</b></td><td>${s}</td><td>${p}</td><td>${g}</td><td>${sp(s)}</td></tr>`))}
      ${tip('🔑 Hình dạng phụ âm mô phỏng <b>vị trí lưỡi, miệng</b>: ㄱ là lưỡi cong chạm vòm sau, ㄴ là lưỡi chạm lợi trên, ㅁ là cái miệng khép, ㅅ là hàm răng.')}
      <h4>2. Ghép âm</h4><p>Nguyên âm <b>đứng</b> (ㅏ ㅓ ㅣ) đặt bên phải phụ âm: 나, 너, 니. Nguyên âm <b>nằm</b> (ㅗ ㅜ ㅡ) đặt bên dưới: 노, 누, 느.</p>${reads([['나무', 'namu', 'cây'], ['바다', 'bada', 'biển'], ['어머니', 'eomeoni', 'mẹ'], ['고기', 'gogi', 'thịt']])}`,
    vocab: [
      w('나무', 'namu', 'cây', '', ['나무가 커요.', 'namuga keoyo', 'Cái cây to.']),
      w('바다', 'bada', 'biển', '', ['바다에 가요.', 'badae gayo', 'Đi biển.']),
      w('모자', 'moja', 'cái mũ', '', ['모자가 예뻐요.', 'mojaga yeppeoyo', 'Cái mũ đẹp.']),
      w('어머니', 'eomeoni', 'mẹ', 'Lịch sự; thân mật: 엄마.', ['어머니, 사랑해요.', 'eomeoni, saranghaeyo', 'Mẹ ơi, con yêu mẹ.']),
      w('아버지', 'abeoji', 'bố', 'Thân mật: 아빠.', ['아버지는 의사예요.', 'abeojineun uisayeyo', 'Bố tôi là bác sĩ.']),
      w('고기', 'gogi', 'thịt', '', ['고기 좋아해요.', 'gogi joahaeyo', 'Tôi thích thịt.']),
      w('다리', 'dari', 'chân; cây cầu', '', ['다리가 아파요.', 'dariga apayo', 'Chân tôi đau.']),
      w('지도', 'jido', 'bản đồ', '', ['지도 있어요?', 'jido isseoyo?', 'Có bản đồ không?']),
      w('가수', 'gasu', 'ca sĩ', '', ['가수가 노래해요.', 'gasuga noraehaeyo', 'Ca sĩ hát.']),
      w('머리', 'meori', 'đầu; tóc', '', ['머리가 길어요.', 'meoriga gireoyo', 'Tóc dài.']),
      w('하마', 'hama', 'hà mã', '', ['하마가 커요.', 'hamaga keoyo', 'Hà mã to.'])
    ],
    qs: [
      ['hear', '나', '나 (na)', ['다 (da)', '라 (ra)', '마 (ma)'], '나 = na.', 'Nghe và chọn chữ đúng.'],
      ['hear', '바다', '바다 (bada)', ['다바 (daba)', '나다 (nada)', '바라 (bara)'], '바다 = biển.', 'Nghe và chọn từ đúng.'],
      ['mc', 'ㅁ + ㅗ ghép thành?', '모', ['마', '무', '머'], 'ㅗ nằm dưới phụ âm.'],
      ['mc', 'ㄴ + ㅓ ghép thành?', '너', ['노', '나', '누'], 'ㅓ đứng bên phải.'],
      ['mc', 'Phụ âm ㅇ đứng đầu âm tiết thì?', 'Câm (không đọc)', ['Đọc ng', 'Đọc o', 'Đọc h'], '아 đọc "a".'],
      ['mc', '“어머니” nghĩa là?', 'mẹ', ['bố', 'bà', 'chị'], 'eomeoni = mẹ.']
    ],
    hoithoai: {
      ctx: 'Ji-min cho em xem ảnh gia đình và đồ vật.', vai: 'Ji-min hỏi, em đọc từ đúng.', ai: '👩 지민',
      luot: [
        T(['어머니예요.', 'eomeoniyeyo', 'Đây là mẹ mình.'], ['안녕하세요, 어머니!', 'annyeonghaseyo, eomeoni', 'Chào bác ạ!', 'Chào lịch sự.'], ['아버지!', 'abeoji', 'Đó là mẹ, không phải bố.'], ['고기!', 'gogi', 'Lạc đề.']),
        T(['바다 좋아해요?', 'bada joahaeyo?', 'Bạn thích biển không?'], ['네, 바다 좋아해요!', 'ne, bada joahaeyo', 'Có, tôi thích biển!', 'Nhắc lại từ để trả lời.'], ['아니요, 나무.', 'aniyo, namu', 'Câu không rõ ý.'], ['모자요.', 'mojayo', 'Lạc đề.']),
        T(['이건 지도예요.', 'igeon jidoyeyo', 'Đây là bản đồ.'], ['감사합니다!', 'gamsahamnida', 'Cảm ơn!', 'Nhận đồ thì cảm ơn.'], ['다리!', 'dari', 'Sai.'], ['하마!', 'hama', '😄'])
      ], ket: 'Em đã đọc được nhiều từ có phụ âm cơ bản.'
    },
    tom: ['10 phụ âm cơ bản', 'Cách ghép nguyên âm đứng/nằm'], nguphap: 'Chưa học', phatam: 'ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅅ ㅇ ㅈ ㅎ',
    loi: ['Đọc ㅇ đầu thành "ng"', 'Đặt ㅗ ㅜ bên phải phụ âm', 'Nhầm ㄷ và ㄹ'], btvn: ['Viết bảng ghép 10 phụ âm × 6 nguyên âm', 'Đọc to 11 từ mới 3 lần', 'Viết tên mình bằng Hangul (thử)']
  };

  /* ================= NGÀY 3 ================= */
  const d3 = {
    n: 3, ten: 'Nguyên âm ghép', kinds: K,
    muc: 'Đọc nguyên âm có y (ㅑㅕㅛㅠ), ㅐ/ㅔ và nguyên âm có w (ㅘㅝㅚㅟㅢ…).',
    hoc: `<h4>1. Thêm một nét = thêm âm "y"</h4>${reads([['야', 'ya', 'ㅏ + nét'], ['여', 'yeo', 'ㅓ + nét'], ['요', 'yo', 'ㅗ + nét'], ['유', 'yu', 'ㅜ + nét']])}
      <h4>2. ㅐ và ㅔ</h4><p>ㅐ (ae) và ㅔ (e) ngày nay người Hàn đọc <b>gần như giống nhau</b> (như "e/ê"). Phân biệt khi viết chính tả. ${sp('개|게')}</p>
      <h4>3. Nguyên âm có "w"</h4>${tbl(['Chữ', 'Ghép từ', 'Đọc', 'Nghe'], [['와', 'ㅗ + ㅏ', 'wa'], ['워', 'ㅜ + ㅓ', 'wo'], ['외', 'ㅗ + ㅣ', 'oe (≈ uê)'], ['위', 'ㅜ + ㅣ', 'wi (uy)'], ['의', 'ㅡ + ㅣ', 'ui (ưi)']].map(([c, g, p]) => `<tr><td><b class="zh-hz">${c}</b></td><td>${g}</td><td>${p}</td><td>${sp(c)}</td></tr>`))}
      ${tip('💡 ㅢ đọc "ưi" khi đứng đầu từ (의사 uisa); đứng sau phụ âm hay ở giữa từ thường đọc "i"; khi là trợ từ "của" đọc "ê".')}`,
    vocab: [
      w('우유', 'uyu', 'sữa', '', ['우유 주세요.', 'uyu juseyo', 'Cho tôi sữa.']),
      w('여자', 'yeoja', 'con gái, phụ nữ', 'Nam: 남자 namja.', ['여자 친구', 'yeoja chingu', 'bạn gái']),
      w('야구', 'yagu', 'bóng chày', '', ['야구 좋아해요.', 'yagu joahaeyo', 'Tôi thích bóng chày.']),
      w('휴지', 'hyuji', 'giấy vệ sinh, khăn giấy', '', ['휴지 있어요?', 'hyuji isseoyo?', 'Có khăn giấy không?']),
      w('새', 'sae', 'con chim; mới', '', ['새 차예요.', 'sae chayeyo', 'Là xe mới.']),
      w('사과', 'sagwa', 'quả táo; xin lỗi', '', ['사과 맛있어요.', 'sagwa masisseoyo', 'Táo ngon.']),
      w('교회', 'gyohoe', 'nhà thờ', '', ['교회에 가요.', 'gyohoee gayo', 'Đi nhà thờ.']),
      w('의사', 'uisa', 'bác sĩ', '', ['의사 선생님', 'uisa seonsaengnim', 'bác sĩ (cách gọi lịch sự)']),
      w('돼지', 'dwaeji', 'con lợn', '', ['돼지고기', 'dwaejigogi', 'thịt lợn']),
      w('귀', 'gwi', 'cái tai', '', ['귀가 아파요.', 'gwiga apayo', 'Tai đau.']),
      w('뭐', 'mwo', 'cái gì (khẩu ngữ)', '', ['뭐예요?', 'mwoyeyo?', 'Cái gì vậy?']),
      w('예', 'ye', 'vâng (rất trang trọng)', 'Giống 네.', ['예, 알겠습니다.', 'ye, algetseumnida', 'Vâng, tôi hiểu rồi.'])
    ],
    qs: [
      ['hear', '여', '여 (yeo)', ['요 (yo)', '야 (ya)', '유 (yu)'], '여 = yeo.', 'Nghe và chọn chữ đúng.'],
      ['hear', '우유', '우유 (uyu)', ['오이 (oi)', '여우 (yeou)', '아이 (ai)'], '우유 = sữa.', 'Nghe và chọn từ đúng.'],
      ['mc', 'ㅗ + ㅏ ghép thành?', 'ㅘ (wa)', ['ㅝ (wo)', 'ㅚ (oe)', 'ㅟ (wi)'], 'o + a → wa.'],
      ['mc', 'ㅜ + ㅣ ghép thành?', 'ㅟ (wi)', ['ㅢ (ui)', 'ㅚ (oe)', 'ㅘ (wa)'], 'u + i → wi.'],
      ['mc', 'ㅐ và ㅔ ngày nay đọc thế nào?', 'Gần như giống nhau', ['Hoàn toàn khác', 'ㅐ không đọc', 'ㅔ đọc như i'], 'Chỉ phân biệt khi viết.'],
      ['mc', '“의사” nghĩa là?', 'bác sĩ', ['ca sĩ', 'giáo viên', 'cái ghế'], 'uisa = bác sĩ.']
    ],
    hoithoai: {
      ctx: 'Em đi siêu thị ở Seoul với Ji-min.', vai: 'Ji-min hỏi, em trả lời.', ai: '👩 지민',
      luot: [
        T(['뭐 사요?', 'mwo sayo?', 'Mua gì vậy?'], ['우유요.', 'uyuyo', 'Sữa ạ.', 'Danh từ + 요 = câu trả lời ngắn lịch sự.'], ['여자요.', 'yeojayo', '"Phụ nữ" 😄'], ['귀요.', 'gwiyo', 'Sai nghĩa.']),
        T(['사과도 사요?', 'sagwado sayo?', 'Mua cả táo không?'], ['네, 사과 좋아요!', 'ne, sagwa joayo', 'Có, táo được đấy!', 'Đồng ý.'], ['돼지!', 'dwaeji', 'Lạc đề.'], ['야구요.', 'yaguyo', 'Lạc đề.']),
        T(['휴지도 필요해요?', 'hyujido pillyohaeyo?', 'Cần khăn giấy không?'], ['아니요, 괜찮아요.', 'aniyo, gwaenchanayo', 'Không, không cần đâu.', 'Từ chối nhẹ nhàng.'], ['의사요.', 'uisayo', 'Sai nghĩa.'], ['새요.', 'saeyo', 'Sai nghĩa.'])
      ], ket: 'Em đã dùng từ có nguyên âm ghép trong tình huống mua sắm.'
    },
    tom: ['ㅑㅕㅛㅠ', 'ㅐ/ㅔ', 'ㅘㅝㅚㅟㅢ'], nguphap: 'Danh từ + 요 (câu trả lời ngắn lịch sự)', phatam: 'Nguyên âm ghép',
    loi: ['Nhầm 여 và 요', 'Đọc ㅢ luôn là "ưi"'], btvn: ['Viết 11 nguyên âm ghép mỗi chữ 5 lần', 'Đọc to 12 từ mới', 'Tìm 3 từ có ㅘ hoặc ㅝ']
  };

  /* ================= NGÀY 4 ================= */
  const d4 = {
    n: 4, ten: 'Phụ âm bật hơi và phụ âm căng', kinds: K,
    muc: 'Phân biệt 3 bộ âm: thường – bật hơi – căng (ㄱ/ㅋ/ㄲ, ㄷ/ㅌ/ㄸ, ㅂ/ㅍ/ㅃ, ㅈ/ㅊ/ㅉ, ㅅ/ㅆ).',
    hoc: `<h4>1. Ba bộ âm</h4>${tbl(['Thường', 'Bật hơi', 'Căng', 'Nghe'], [['가 ga', '카 ka', '까 kka', '가|카|까'], ['다 da', '타 ta', '따 tta', '다|타|따'], ['바 ba', '파 pa', '빠 ppa', '바|파|빠'], ['자 ja', '차 cha', '짜 jja', '자|차|짜'], ['사 sa', '–', '싸 ssa', '사|싸']].map(([a1, b, c, s]) => `<tr><td>${a1}</td><td>${b}</td><td>${c}</td><td><button class="zh-say" data-say="${s}">🔊</button></td></tr>`))}
      <ul><li><b>Bật hơi</b> (ㅋ ㅌ ㅍ ㅊ): đặt tờ giấy trước miệng, giấy rung mạnh.</li><li><b>Căng</b> (ㄲ ㄸ ㅃ ㅆ ㅉ): căng cổ họng, âm cứng, gọn, <b>không</b> bật hơi.</li></ul>
      ${tip('⚠️ ㅍ là <b>p bật hơi</b>, không đọc "ph" như tiếng Việt: 포도 đọc "pô-đô", không phải "phô-đô".')}`,
    vocab: [
      w('커피', 'keopi', 'cà phê', 'ㅋ và ㅍ đều bật hơi.', ['커피 한 잔 주세요.', 'keopi han jan juseyo', 'Cho tôi một ly cà phê.']),
      w('차', 'cha', 'trà; xe ô tô', '', ['차 마셔요.', 'cha masyeoyo', 'Uống trà.']),
      w('포도', 'podo', 'quả nho', '', ['포도가 달아요.', 'podoga darayo', 'Nho ngọt.']),
      w('토끼', 'tokki', 'con thỏ', 'ㅌ bật hơi, ㄲ căng.', ['토끼가 귀여워요.', 'tokkiga gwiyeowoyo', 'Con thỏ dễ thương.']),
      w('코', 'ko', 'cái mũi', '', ['코가 높아요.', 'koga nopayo', 'Mũi cao.']),
      w('키', 'ki', 'chiều cao; chìa khoá', '', ['키가 커요.', 'kiga keoyo', 'Cao (người).']),
      w('아빠', 'appa', 'bố (thân mật)', 'ㅃ căng.', ['아빠, 사랑해요!', 'appa, saranghaeyo', 'Bố ơi, con yêu bố!']),
      w('오빠', 'oppa', 'anh (em gái gọi)', 'Chỉ nữ dùng để gọi anh.', ['오빠, 고마워요.', 'oppa, gomawoyo', 'Anh ơi, cảm ơn anh.']),
      w('비싸요', 'bissayo', 'đắt', 'ㅆ căng.', ['너무 비싸요!', 'neomu bissayo', 'Đắt quá!']),
      w('싸요', 'ssayo', 'rẻ', '', ['이거 싸요.', 'igeo ssayo', 'Cái này rẻ.']),
      w('짜요', 'jjayo', 'mặn', 'ㅉ căng.', ['국이 짜요.', 'gugi jjayo', 'Canh mặn.'])
    ],
    qs: [
      ['hear', '카', '카 (ka)', ['가 (ga)', '까 (kka)'], '카 – bật hơi.', 'Nghe: 가, 카 hay 까?'],
      ['hear', '따', '따 (tta)', ['다 (da)', '타 (ta)'], '따 – căng.', 'Nghe: 다, 타 hay 따?'],
      ['hear', '싸요', '싸요 (rẻ)', ['사요 (mua)'], '싸요 – ㅆ căng.', 'Nghe: 사요 (mua) hay 싸요 (rẻ)?'],
      ['mc', 'Âm nào là phụ âm bật hơi?', 'ㅍ', ['ㅃ', 'ㅂ', 'ㅁ'], 'ㅋ ㅌ ㅍ ㅊ bật hơi.'],
      ['mc', 'Âm nào là phụ âm căng?', 'ㄸ', ['ㅌ', 'ㄷ', 'ㄴ'], 'ㄲ ㄸ ㅃ ㅆ ㅉ là âm căng.'],
      ['mc', '“포도” đọc đúng là?', 'podo (p bật hơi)', ['phodo', 'bodo', 'ppodo'], 'ㅍ không phải "ph".'],
      ['mc', '“비싸요” nghĩa là?', 'đắt', ['rẻ', 'mặn', 'ngon'], 'bissayo = đắt.']
    ],
    hoithoai: {
      ctx: 'Em đi chợ Namdaemun với Ji-min.', vai: 'Ji-min hỏi, em trả lời. Chú ý âm bật hơi và căng.', ai: '👩 지민',
      luot: [
        T(['커피 마실래요?', 'keopi masillaeyo?', 'Uống cà phê không?'], ['네, 커피 좋아요!', 'ne, keopi joayo', 'Có, cà phê được đấy!', 'keopi – ㅋ, ㅍ bật hơi.'], ['네, 코 좋아요!', 'ne, ko joayo', '코 là cái mũi 😄'], ['아니요, 짜요.', 'aniyo, jjayo', '"Mặn" – lạc đề.']),
        T(['이 포도 어때요?', 'i podo eottaeyo?', 'Nho này thế nào?'], ['싸요! 사요.', 'ssayo! sayo', 'Rẻ! Mua đi.', '싸요 (rẻ) – 사요 (mua).'], ['사요! 싸요.', 'sayo! ssayo', 'Đảo thứ tự nghe hơi lạ; nên khen rẻ trước rồi quyết định mua.'], ['토끼요.', 'tokkiyo', 'Lạc đề.']),
        T(['이 모자는 비싸요.', 'i mojaneun bissayo', 'Cái mũ này đắt.'], ['네, 너무 비싸요.', 'ne, neomu bissayo', 'Ừ, đắt quá.', '너무 = quá.'], ['네, 너무 싸요.', 'ne, neomu ssayo', 'Ji-min nói đắt mà.'], ['오빠!', 'oppa', 'Lạc đề.'])
      ], ket: 'Em đã phân biệt được âm thường, bật hơi và căng.'
    },
    tom: ['Âm bật hơi ㅋㅌㅍㅊ', 'Âm căng ㄲㄸㅃㅆㅉ', 'Ba bộ âm'], nguphap: 'Tính từ + 요 (đắt, rẻ, mặn)', phatam: '가/카/까, 다/타/따, 바/파/빠, 자/차/짜, 사/싸',
    loi: ['Đọc ㅍ thành "ph"', 'Không phân biệt 사요 – 싸요', 'Bật hơi ở âm căng'], btvn: ['Dùng tờ giấy luyện 3 bộ âm mỗi bộ 10 lần', 'Đọc to 11 từ mới', 'Ghi âm cặp 사요/싸요, 비싸요']
  };

  /* ================= NGÀY 5 ================= */
  const d5 = {
    n: 5, ten: 'Patchim – phụ âm cuối', kinds: K,
    muc: 'Đọc đúng phụ âm cuối (patchim) theo 7 âm đại diện.',
    hoc: `<h4>1. Patchim là gì?</h4><p>Phụ âm đứng <b>cuối khối âm tiết</b> (dưới cùng): 한 = ㅎ + ㅏ + <b>ㄴ</b>. Có rất nhiều chữ có thể làm patchim nhưng khi đọc chỉ có <b>7 âm</b>:</p>
      ${tbl(['Âm đọc', 'Các patchim', 'Ví dụ', 'Nghe'], [['[k]', 'ㄱ ㄲ ㅋ', '책 chaek (sách)', '책'], ['[n]', 'ㄴ', '산 san (núi)', '산'], ['[t]', 'ㄷ ㅅ ㅆ ㅈ ㅊ ㅌ ㅎ', '옷 ot (áo), 꽃 kkot (hoa)', '옷|꽃'], ['[l]', 'ㄹ', '물 mul (nước)', '물'], ['[m]', 'ㅁ', '감 gam (hồng)', '감'], ['[p]', 'ㅂ ㅍ', '집 jip (nhà), 앞 ap (trước)', '집|앞'], ['[ng]', 'ㅇ', '강 gang (sông)', '강']].map(([a1, b, c, s]) => `<tr><td><b>${a1}</b></td><td>${b}</td><td>${c}</td><td><button class="zh-say" data-say="${s}">🔊</button></td></tr>`))}
      ${tip('💡 Patchim [k] [t] [p] đọc <b>tắc, không bật hơi</b>, giống âm cuối "c, t, p" trong tiếng Việt: 책 ≈ "chéc", 옷 ≈ "ốt", 집 ≈ "chíp". Đây là lợi thế của người Việt!')}`,
    vocab: [
      w('책', 'chaek', 'quyển sách', '', ['책을 읽어요.', 'chaegeul ilgeoyo', 'Đọc sách.']),
      w('산', 'san', 'núi', '', ['산이 높아요.', 'sani nopayo', 'Núi cao.']),
      w('옷', 'ot', 'quần áo', 'ㅅ cuối đọc [t].', ['옷이 예뻐요.', 'osi yeppeoyo', 'Quần áo đẹp.']),
      w('문', 'mun', 'cửa', '', ['문을 열어요.', 'muneul yeoreoyo', 'Mở cửa.']),
      w('입', 'ip', 'miệng', '', ['입을 열어요.', 'ibeul yeoreoyo', 'Há miệng.']),
      w('집', 'jip', 'nhà', '', ['집에 가요.', 'jibe gayo', 'Về nhà.']),
      w('강', 'gang', 'sông', '', ['한강', 'Hangang', 'sông Hàn']),
      w('꽃', 'kkot', 'hoa', 'ㅊ cuối đọc [t].', ['꽃이 예뻐요.', 'kkochi yeppeoyo', 'Hoa đẹp.']),
      w('낮', 'nat', 'ban ngày', 'ㅈ cuối đọc [t].', ['낮에 일해요.', 'naje ilhaeyo', 'Ban ngày làm việc.']),
      w('밖', 'bak', 'bên ngoài', 'ㄲ cuối đọc [k].', ['밖에 비가 와요.', 'bakke biga wayo', 'Bên ngoài trời mưa.']),
      w('한국', 'Hanguk', 'Hàn Quốc', '', ['한국 사람이에요.', 'Hanguk saramieyo', 'Là người Hàn Quốc.']),
      w('이름', 'ireum', 'tên', '', ['이름이 뭐예요?', 'ireumi mwoyeyo?', 'Tên bạn là gì?'])
    ],
    qs: [
      ['mc', 'Patchim ㅅ trong 옷 đọc là?', '[t]', ['[s]', '[k]', '[n]'], 'ㅅ cuối → [t].'],
      ['mc', 'Patchim ㅍ trong 앞 đọc là?', '[p]', ['[f]', '[t]', '[k]'], 'ㅂ ㅍ → [p].'],
      ['mc', 'Patchim ㄲ trong 밖 đọc là?', '[k]', ['[kk]', '[t]', '[g]'], 'ㄱ ㄲ ㅋ → [k].'],
      ['mc', 'Có tất cả mấy âm đọc cho patchim?', '7', ['5', '10', '14'], '7 âm đại diện.'],
      ['hear', '집', '집 (jip)', ['짐 (jim)', '진 (jin)', '징 (jing)'], '집 – patchim [p].', 'Nghe và chọn từ đúng.'],
      ['hear', '강', '강 (gang)', ['간 (gan)', '감 (gam)', '각 (gak)'], '강 – patchim [ng].', 'Nghe và chọn từ đúng.'],
      ['mc', '“한국” nghĩa là?', 'Hàn Quốc', ['Trung Quốc', 'Việt Nam', 'Nhật Bản'], 'Hanguk.']
    ],
    hoithoai: {
      ctx: 'Ji-min dẫn em đi dạo bờ sông Hàn.', vai: 'Ji-min chỉ đồ vật, em đọc đúng patchim.', ai: '👩 지민',
      luot: [
        T(['여기는 한강이에요.', 'yeogineun Hangangieyo', 'Đây là sông Hàn.'], ['와, 강이 커요!', 'wa, gangi keoyo', 'Wow, sông to quá!', '강 – patchim [ng].'], ['와, 산이 커요!', 'wa, sani keoyo', 'Đây là sông, không phải núi.'], ['집이에요.', 'jibieyo', 'Sai.']),
        T(['꽃 좋아해요?', 'kkot joahaeyo?', 'Bạn thích hoa không?'], ['네, 꽃이 예뻐요!', 'ne, kkochi yeppeoyo', 'Có, hoa đẹp quá!', '꽃이 – patchim nối sang âm sau (học ngày mai).'], ['아니요, 옷.', 'aniyo, ot', 'Lạc đề.'], ['책이에요.', 'chaegieyo', 'Sai nghĩa.']),
        T(['이름이 뭐예요?', 'ireumi mwoyeyo?', 'Tên bạn là gì?'], ['제 이름은 민이에요.', 'je ireumeun minieyo', 'Tên tôi là Min.', '제 = của tôi (khiêm tốn).'], ['이름이에요.', 'ireumieyo', 'Chưa nói tên.'], ['한국이에요.', 'Hangugieyo', 'Sai nghĩa.'])
      ], ket: 'Em đã đọc đúng patchim trong từ và câu.'
    },
    tom: ['Patchim', '7 âm đại diện'], nguphap: 'N + 이에요 (là N – xem trước)', phatam: 'Patchim [k] [n] [t] [l] [m] [p] [ng]',
    loi: ['Đọc ㅅ cuối thành "s"', 'Đọc ㅍ cuối thành "f"', 'Bật hơi ở âm cuối'], btvn: ['Đọc to bảng 7 âm patchim 3 lần', 'Viết 12 từ mới mỗi từ 3 lần', 'Tìm 5 từ có patchim trong biển hiệu Hàn Quốc trên mạng']
  };

  /* ================= NGÀY 6 ================= */
  const d6 = {
    n: 6, ten: 'Nối âm và luyện đọc', kinds: K,
    muc: 'Nắm quy tắc nối âm (연음) và biến âm mũi cơ bản; đọc trơn từ và câu ngắn.',
    hoc: `<h4>1. Nối âm: patchim + ㅇ → patchim chuyển sang âm sau</h4>${tbl(['Viết', 'Đọc', 'Nghĩa', 'Nghe'], [['한국어', '[한구거] hangugeo', 'tiếng Hàn'], ['단어', '[다너] daneo', 'từ vựng'], ['직업', '[지겁] jigeop', 'nghề nghiệp'], ['일요일', '[이료일] iryoil', 'Chủ nhật']].map(([a1, b, c]) => `<tr><td>${a1}</td><td>${b}</td><td>${c}</td><td>${sp(a1)}</td></tr>`))}
      <h4>2. Biến âm mũi: ㅂ + ㄴ/ㅁ → ㅁ</h4><p>합니다 đọc <b>[함니다]</b> hamnida; 감사합니다 đọc <b>[감사함니다]</b> gamsahamnida. ${sp('합니다|감사합니다')}</p>
      ${tip('💡 Người Việt dễ đọc từng chữ rời như tiếng Việt. Hãy <b>đọc liền</b> cả từ và áp dụng nối âm, nghe sẽ tự nhiên ngay.')}
      <h4>3. Luyện đọc câu</h4>${reads([['저는 학생이에요.', 'jeoneun haksaengieyo', 'Tôi là học sinh.'], ['베트남 사람이에요.', 'Beteunam saramieyo', 'Là người Việt Nam.'], ['한국어 선생님이에요.', 'hangugeo seonsaengnimieyo', 'Là giáo viên tiếng Hàn.']])}`,
    vocab: [
      w('한국어', 'hangugeo', 'tiếng Hàn', 'Đọc nối [한구거].', ['한국어를 배워요.', 'hangugeoreul baewoyo', 'Tôi học tiếng Hàn.']),
      w('단어', 'daneo', 'từ vựng', 'Đọc [다너].', ['단어를 외워요.', 'daneoreul oewoyo', 'Học thuộc từ vựng.']),
      w('직업', 'jigeop', 'nghề nghiệp', 'Đọc [지겁].', ['직업이 뭐예요?', 'jigeobi mwoyeyo?', 'Nghề của bạn là gì?']),
      w('일요일', 'iryoil', 'Chủ nhật', 'Đọc [이료일].', ['일요일에 쉬어요.', 'iryoire swieoyo', 'Chủ nhật nghỉ.']),
      w('학생', 'haksaeng', 'học sinh', '', ['저는 학생이에요.', 'jeoneun haksaengieyo', 'Tôi là học sinh.']),
      w('선생님', 'seonsaengnim', 'giáo viên, thầy/cô', 'Cũng dùng gọi bác sĩ, người có chuyên môn.', ['선생님, 안녕하세요!', 'seonsaengnim, annyeonghaseyo', 'Em chào thầy/cô!']),
      w('친구', 'chingu', 'bạn bè', '', ['제 친구예요.', 'je chinguyeyo', 'Là bạn tôi.']),
      w('사람', 'saram', 'người', 'Tên nước + 사람.', ['한국 사람', 'Hanguk saram', 'người Hàn Quốc']),
      w('베트남', 'Beteunam', 'Việt Nam', '', ['베트남 사람이에요.', 'Beteunam saramieyo', 'Là người Việt Nam.'])
    ],
    qs: [
      ['mc', '“한국어” đọc thực tế là?', '[한구거] hangugeo', ['[한국어] hanguk-eo (tách rời)', '[항구거]', '[한꾸거]'], 'Nối âm patchim ㄱ sang ㅇ.'],
      ['mc', '“감사합니다” đọc thực tế là?', 'gamsahamnida', ['gamsahapnida', 'gamsahabnida', 'gamsa-hap-ni-da'], 'ㅂ + ㄴ → ㅁ.'],
      ['mc', '“직업” đọc thực tế là?', '[지겁] jigeop', ['[직업] jik-eop', '[지깁]', '[직업] jikup'], 'Nối âm.'],
      ['hear', '일요일', 'Chủ nhật', ['thứ Hai', 'tháng 1', 'ngày mai'], 'iryoil = Chủ nhật.'],
      ['hear', '선생님', 'giáo viên', ['học sinh', 'bạn bè', 'bác sĩ'], 'seonsaengnim.'],
      ['order', 'Sắp xếp: “Là người Việt Nam.”', ['베트남', '사람이에요.'], '베트남 사람이에요.']
    ],
    hoithoai: {
      ctx: 'Buổi đầu ở lớp tiếng Hàn, cô giáo hỏi chuyện.', vai: 'Cô giáo hỏi, em trả lời.', ai: '👩‍🏫 선생님',
      luot: [
        T(['안녕하세요! 학생이에요?', 'annyeonghaseyo! haksaengieyo?', 'Chào em! Em là học sinh à?'], ['네, 학생이에요.', 'ne, haksaengieyo', 'Vâng, em là học viên.', 'Nhắc lại danh từ + 이에요.'], ['네, 선생님이에요.', 'ne, seonsaengnimieyo', 'Em là học viên mà.'], ['아니요, 친구.', 'aniyo, chingu', 'Sai.']),
        T(['한국 사람이에요?', 'Hanguk saramieyo?', 'Em là người Hàn à?'], ['아니요, 베트남 사람이에요.', 'aniyo, Beteunam saramieyo', 'Không, em là người Việt Nam.', 'Chuẩn.'], ['네, 베트남 사람이에요.', 'ne, Beteunam saramieyo', 'Mâu thuẫn: 네 là "vâng".'], ['한국어예요.', 'hangugeoyeyo', 'Sai nghĩa.']),
        T(['한국어 좋아해요?', 'hangugeo joahaeyo?', 'Em thích tiếng Hàn không?'], ['네, 정말 좋아해요!', 'ne, jeongmal joahaeyo', 'Vâng, em rất thích!', '정말 = thật sự.'], ['일요일이에요.', 'iryoirieyo', 'Lạc đề.'], ['단어요.', 'daneoyo', 'Lạc đề.'])
      ], ket: 'Em đã đọc trơn câu có nối âm.'
    },
    tom: ['Nối âm 연음', 'Biến âm mũi ㅂ → ㅁ', 'Đọc câu ngắn'], nguphap: 'N + 이에요 (là N)', phatam: 'Nối âm, ㅂ니다 → [ㅁ니다]',
    loi: ['Đọc tách rời từng âm tiết', 'Đọc 합니다 là "hap-ni-da"'], btvn: ['Đọc 10 từ có nối âm', 'Đọc to 3 câu mẫu 5 lần', 'Ôn toàn bộ bảng chữ Hangul']
  };

  /* ================= NGÀY 7 ================= */
  const d7 = {
    n: 7, ten: 'Ôn tập Hangul và kiểm tra', vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Ôn toàn bộ bảng chữ Hangul, nối âm; làm bài kiểm tra tuần 20 câu.',
    hoc: `<h4>Sơ đồ Hangul</h4>${tbl(['Phần', 'Cần nhớ'], ['<tr><td>Nguyên âm</td><td>ㅏ ㅓ ㅗ ㅜ ㅡ ㅣ · thêm nét = thêm y · ㅐ≈ㅔ · ㅘ ㅝ ㅚ ㅟ ㅢ</td></tr>', '<tr><td>Phụ âm</td><td>thường ㄱㄷㅂㅈㅅ · bật hơi ㅋㅌㅍㅊ · căng ㄲㄸㅃㅆㅉ</td></tr>', '<tr><td>Patchim</td><td>7 âm: [k] [n] [t] [l] [m] [p] [ng]</td></tr>', '<tr><td>Đọc liền</td><td>Nối âm 한국어 [한구거]; ㅂ니다 → [ㅁ니다]</td></tr>'])}
      <p>Ôn nhanh tại <a href="#/tieng-han/bang-chu">Bảng chữ Hangul</a>.</p>`,
    qs: [['mc', 'Bộ nào toàn là phụ âm căng?', 'ㄲ ㄸ ㅃ', ['ㅋ ㅌ ㅍ', 'ㄱ ㄷ ㅂ', 'ㄴ ㅁ ㅇ'], 'Phụ âm đôi = căng.'], ['mc', '꽃 đọc là?', 'kkot', ['kkoch', 'kkos', 'goch'], 'ㅊ cuối → [t].']],
    hoithoai: {
      ctx: 'Ji-min kiểm tra em đọc biển hiệu trên phố.', vai: 'Ji-min hỏi, em đọc và trả lời.', ai: '👩 지민',
      luot: [
        T(['이거 읽어 보세요: 커피', 'igeo ilgeo boseyo: keopi', 'Đọc thử cái này: 커피'], ['커피! 코-피.', 'keopi', 'Cà phê!', 'Bật hơi ㅋ, ㅍ.'], ['거비!', 'geobi', 'ㅋ và ㅍ phải bật hơi.'], ['꺼삐!', 'kkeoppi', 'Đó là âm căng.']),
        T(['한국어 어때요?', 'hangugeo eottaeyo?', 'Tiếng Hàn thế nào?'], ['재미있어요!', 'jaemiisseoyo', 'Thú vị lắm!', 'Câu khen phổ biến.'], ['짜요!', 'jjayo', '"Mặn" 😄'], ['비싸요!', 'bissayo', 'Lạc đề.']),
        T(['수고했어요!', 'sugohaesseoyo', 'Bạn vất vả rồi! (giỏi lắm)'], ['감사합니다!', 'gamsahamnida', 'Cảm ơn!', 'Nhớ đọc [감사함니다].'], ['안녕하세요!', 'annyeonghaseyo', 'Không phải lúc chào.'], ['아니요!', 'aniyo', 'Không phù hợp.'])
      ], ket: 'Em đã hoàn thành tuần Hangul! 🎉'
    },
    tom: ['Ôn bảng chữ Hangul', 'Kiểm tra 20 câu'], nguphap: 'Ôn tuần 1', phatam: 'Ôn tuần 1',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: ôn bảng chữ và làm lại', 'Tự viết tên mình và 5 người thân bằng Hangul']
  };

  /* ================= NGÀY 8 ================= */
  const d8 = {
    n: 8, ten: 'Chào hỏi và giới thiệu bản thân', kinds: K,
    muc: 'Chào hỏi trang trọng, tự giới thiệu với 저는 … 입니다 / 이에요, chào tạm biệt đúng ngữ cảnh.',
    hoc: `<h4>1. Mẫu tự giới thiệu</h4>${reads([['안녕하세요?', 'annyeonghaseyo', 'Xin chào'], ['처음 뵙겠습니다.', 'cheoeum boepgetseumnida', 'Rất hân hạnh lần đầu gặp mặt'], ['저는 민입니다.', 'jeoneun minimnida', 'Tôi là Min'], ['베트남 사람이에요.', 'Beteunam saramieyo', 'Tôi là người Việt Nam'], ['만나서 반갑습니다.', 'mannaseo bangapseumnida', 'Rất vui được gặp bạn'], ['잘 부탁드립니다.', 'jal butakdeurimnida', 'Mong được giúp đỡ']])}
      <h4>2. Hai mức lịch sự: -입니다 và -이에요/예요</h4>${tbl(['Đuôi', 'Mức', 'Ví dụ'], ['<tr><td>-입니다</td><td>rất trang trọng (phát biểu, công việc)</td><td>저는 학생입니다.</td></tr>', '<tr><td>-이에요 (sau patchim) / -예요 (sau nguyên âm)</td><td>lịch sự, thân thiện (hằng ngày)</td><td>학생이에요. / 의사예요.</td></tr>'])}
      <h4>3. Hai cách chào tạm biệt</h4><ul><li><b>안녕히 가세요</b> (annyeonghi gaseyo): người ở lại nói với người <b>đi</b> ("đi bình an"). ${sp('안녕히 가세요')}</li><li><b>안녕히 계세요</b> (annyeonghi gyeseyo): người đi nói với người <b>ở lại</b> ("ở lại bình an"). ${sp('안녕히 계세요')}</li></ul>
      ${tip('💡 저 (jeo) là "tôi" khiêm tốn, dùng với người lạ và người lớn. 나 (na) chỉ dùng với bạn thân, người nhỏ hơn.')}`,
    vocab: [
      w('저', 'jeo', 'tôi (khiêm tốn)', '저는 = tôi thì…', ['저는 민이에요.', 'jeoneun minieyo', 'Tôi là Min.']),
      w('입니다', 'imnida', 'là (rất trang trọng)', 'Đọc [임니다].', ['저는 학생입니다.', 'jeoneun haksaengimnida', 'Tôi là học sinh.']),
      w('반갑습니다', 'bangapseumnida', 'rất vui (được gặp)', '', ['만나서 반갑습니다.', 'mannaseo bangapseumnida', 'Rất vui được gặp bạn.']),
      w('처음 뵙겠습니다', 'cheoeum boepgetseumnida', 'hân hạnh lần đầu gặp mặt', 'Rất trang trọng.', ['처음 뵙겠습니다. 민입니다.', 'cheoeum boepgetseumnida. minimnida', 'Hân hạnh được gặp. Tôi là Min.']),
      w('잘 부탁드립니다', 'jal butakdeurimnida', 'mong được giúp đỡ', 'Câu kết khi tự giới thiệu.', ['앞으로 잘 부탁드립니다.', 'apeuro jal butakdeurimnida', 'Từ nay mong được giúp đỡ.']),
      w('안녕히 가세요', 'annyeonghi gaseyo', 'tạm biệt (người đi)', 'Nói với người ra về.', ['안녕히 가세요!', 'annyeonghi gaseyo', 'Đi cẩn thận nhé!']),
      w('안녕히 계세요', 'annyeonghi gyeseyo', 'tạm biệt (người ở lại)', 'Mình ra về thì nói câu này.', ['안녕히 계세요!', 'annyeonghi gyeseyo', 'Ở lại mạnh khoẻ nhé!']),
      w('미안합니다', 'mianhamnida', 'xin lỗi', 'Trang trọng hơn: 죄송합니다.', ['늦어서 미안합니다.', 'neujeoseo mianhamnida', 'Xin lỗi vì đến muộn.']),
      w('괜찮아요', 'gwaenchanayo', 'không sao, ổn', '', ['네, 괜찮아요.', 'ne, gwaenchanayo', 'Vâng, không sao.']),
      w('어느 나라', 'eoneu nara', 'nước nào', '', ['어느 나라 사람이에요?', 'eoneu nara saramieyo?', 'Bạn là người nước nào?'])
    ],
    qs: [
      ['mc', 'Em ra về, chào người ở lại là?', '안녕히 계세요', ['안녕히 가세요', '안녕하세요', '감사합니다'], 'Người đi nói 계세요 (ở lại bình an).'],
      ['mc', 'Bạn ra về, em (ở lại) chào là?', '안녕히 가세요', ['안녕히 계세요', '처음 뵙겠습니다', '괜찮아요'], 'Người ở lại nói 가세요 (đi bình an).'],
      ['mc', '학생 + (là) đúng là?', '학생이에요', ['학생예요', '학생이예요', '학생에요'], 'Sau patchim → 이에요.'],
      ['mc', '의사 + (là) đúng là?', '의사예요', ['의사이에요', '의사에요', '의사입이다'], 'Sau nguyên âm → 예요.'],
      ['mc', '“Bạn là người nước nào?” là?', '어느 나라 사람이에요?', ['무슨 사람이에요?', '어디 사람 나라예요?', '나라 사람 어느?'], '어느 나라 = nước nào.'],
      ['hear', '만나서 반갑습니다.', 'Rất vui được gặp bạn.', ['Mong được giúp đỡ.', 'Xin lỗi.', 'Tạm biệt.'], 'bangapseumnida.'],
      ['order', 'Sắp xếp: “Tôi là người Việt Nam.”', ['저는', '베트남', '사람이에요.'], '저는 베트남 사람이에요.']
    ],
    hoithoai: {
      ctx: 'Ngày đầu đi làm ở công ty Hàn Quốc, em gặp trưởng phòng Kim.', vai: 'Trưởng phòng hỏi, em tự giới thiệu trang trọng.', ai: '👨‍💼 김 부장님',
      luot: [
        T(['안녕하세요? 처음 뵙겠습니다.', 'annyeonghaseyo? cheoeum boepgetseumnida', 'Xin chào. Hân hạnh được gặp.'], ['안녕하세요? 저는 민입니다.', 'annyeonghaseyo? jeoneun minimnida', 'Xin chào. Tôi là Min.', 'Giới thiệu bằng 입니다 trang trọng.'], ['나는 민이야.', 'naneun miniya', 'Quá thân mật với cấp trên.'], ['안녕히 가세요.', 'annyeonghi gaseyo', 'Đó là câu tạm biệt.']),
        T(['어느 나라 사람이에요?', 'eoneu nara saramieyo?', 'Anh là người nước nào?'], ['베트남 사람입니다.', 'Beteunam saramimnida', 'Tôi là người Việt Nam.', 'Chuẩn.'], ['베트남이에요 사람.', 'Beteunamieyo saram', 'Sai trật tự.'], ['한국어입니다.', 'hangugeoimnida', 'Sai nghĩa.']),
        T(['만나서 반갑습니다.', 'mannaseo bangapseumnida', 'Rất vui được gặp.'], ['저도 반갑습니다. 잘 부탁드립니다.', 'jeodo bangapseumnida. jal butakdeurimnida', 'Tôi cũng rất vui. Mong được giúp đỡ.', '저도 = tôi cũng.'], ['미안합니다.', 'mianhamnida', 'Không cần xin lỗi.'], ['괜찮아요.', 'gwaenchanayo', 'Không phù hợp.']),
        T(['그럼 내일 봐요. 안녕히 가세요.', 'geureom naeil bwayo. annyeonghi gaseyo', 'Vậy mai gặp. Đi cẩn thận.'], ['네, 안녕히 계세요.', 'ne, annyeonghi gyeseyo', 'Vâng, chào anh ạ.', 'Em ra về → 계세요.'], ['네, 안녕히 가세요.', 'ne, annyeonghi gaseyo', 'Em là người đi nên phải nói 계세요.'], ['처음 뵙겠습니다.', 'cheoeum boepgetseumnida', 'Chỉ dùng khi mới gặp.'])
      ], ket: 'Em đã tự giới thiệu trang trọng và chào tạm biệt đúng ngữ cảnh.'
    },
    tom: ['Mẫu tự giới thiệu', '-입니다 và -이에요/예요', '가세요 vs 계세요'], nguphap: 'N + 입니다 / 이에요 / 예요; 저는 …', phatam: '입니다 [임니다], 반갑습니다 [반갑씀니다]',
    loi: ['Nhầm 안녕히 가세요/계세요', 'Dùng 나 với người lạ', 'Nhầm 이에요/예요'], btvn: ['Ghi âm đoạn tự giới thiệu 5 câu', 'Viết 5 nghề + 이에요/예요', 'Tập chào tạm biệt trong 2 tình huống']
  };

  /* ================= NGÀY 9 ================= */
  const d9 = {
    n: 9, ten: 'Trợ từ 은/는, 이/가 và câu 이에요/예요', kinds: K,
    muc: 'Dùng trợ từ chủ đề 은/는, chủ ngữ 이/가; hỏi "cái gì, ai"; phủ định 아니에요; chỉ đồ vật 이것/그것/저것.',
    hoc: `<h4>1. Trợ từ chủ đề 은/는 và chủ ngữ 이/가</h4>${tbl(['Trợ từ', 'Sau patchim', 'Sau nguyên âm', 'Dùng khi'], ['<tr><td>chủ đề</td><td>은</td><td>는</td><td>giới thiệu, so sánh: 저는…</td></tr>', '<tr><td>chủ ngữ</td><td>이</td><td>가</td><td>thông tin mới, câu hỏi với 누구/뭐: 누가…?</td></tr>'])}<ul>${ex('저는 학생이에요.', 'jeoneun haksaengieyo', 'Tôi là học sinh.')}${ex('이름이 뭐예요?', 'ireumi mwoyeyo?', 'Tên là gì?')}</ul>
      <h4>2. Phủ định: N이/가 아니에요</h4><ul>${ex('저는 의사가 아니에요.', 'jeoneun uisaga anieyo', 'Tôi không phải bác sĩ.')}</ul>
      <h4>3. Cái này – cái đó – cái kia</h4>${tbl(['Gần người nói', 'Gần người nghe', 'Xa cả hai'], ['<tr><td>이것 (이거) – cái này</td><td>그것 (그거) – cái đó</td><td>저것 (저거) – cái kia</td></tr>'])}<ul>${ex('이것은 뭐예요?', 'igeoseun mwoyeyo?', 'Cái này là gì?')}${ex('그것은 우산이에요.', 'geugeoseun usanieyo', 'Cái đó là cái ô.')}</ul>`,
    vocab: [
      w('이것', 'igeot', 'cái này', 'Khẩu ngữ: 이거.', ['이것은 뭐예요?', 'igeoseun mwoyeyo?', 'Cái này là gì?']),
      w('그것', 'geugeot', 'cái đó', '', ['그것은 제 가방이에요.', 'geugeoseun je gabangieyo', 'Cái đó là túi của tôi.']),
      w('저것', 'jeogeot', 'cái kia', '', ['저것은 시계예요.', 'jeogeoseun sigyeyeyo', 'Cái kia là đồng hồ.']),
      w('뭐예요', 'mwoyeyo', 'là gì', '', ['이름이 뭐예요?', 'ireumi mwoyeyo?', 'Tên là gì?']),
      w('누구', 'nugu', 'ai', '누구예요? = Là ai?', ['저 사람은 누구예요?', 'jeo sarameun nuguyeyo?', 'Người kia là ai?']),
      w('가방', 'gabang', 'cái túi, cặp', '', ['가방이 예뻐요.', 'gabangi yeppeoyo', 'Cái túi đẹp.']),
      w('책상', 'chaeksang', 'bàn học, bàn làm việc', '', ['책상 위에 있어요.', 'chaeksang wie isseoyo', 'Ở trên bàn.']),
      w('의자', 'uija', 'cái ghế', '', ['의자에 앉으세요.', 'uijae anjeuseyo', 'Mời ngồi ghế.']),
      w('시계', 'sigye', 'đồng hồ', 'Đọc [시게].', ['시계가 비싸요.', 'sigyega bissayo', 'Đồng hồ đắt.']),
      w('우산', 'usan', 'cái ô', '', ['우산 있어요?', 'usan isseoyo?', 'Có ô không?']),
      w('휴대폰', 'hyudaepon', 'điện thoại di động', '', ['제 휴대폰이에요.', 'je hyudaeponieyo', 'Điện thoại của tôi.']),
      w('아니에요', 'anieyo', 'không phải là', 'N이/가 아니에요.', ['제 우산이 아니에요.', 'je usani anieyo', 'Không phải ô của tôi.'])
    ],
    qs: [
      ['mc', '저 ___ 학생이에요.', '는', ['은', '이', '가'], '저 kết thúc bằng nguyên âm → 는.'],
      ['mc', '선생님 ___ 한국 사람이에요.', '은', ['는', '가', '를'], 'Patchim ㅁ → 은.'],
      ['mc', '이름 ___ 뭐예요?', '이', ['가', '는', '을'], 'Patchim ㅁ → 이.'],
      ['mc', '“Tôi không phải bác sĩ” là?', '저는 의사가 아니에요.', ['저는 의사 아니요.', '저는 의사예요 아니.', '저는 아니 의사예요.'], 'N이/가 아니에요.'],
      ['mc', 'Đồ vật ở gần người nghe gọi là?', '그것', ['이것', '저것', '무엇'], '그것 = cái đó (gần người nghe).'],
      ['hear', '저 사람은 누구예요?', 'Người kia là ai?', ['Đây là cái gì?', 'Bạn là ai?', 'Người kia ở đâu?'], '누구 = ai.'],
      ['order', 'Sắp xếp: “Cái này là gì?”', ['이것은', '뭐예요?'], '이것은 뭐예요?']
    ],
    hoithoai: {
      ctx: 'Đồng nghiệp người Hàn hỏi về đồ đạc trên bàn em.', vai: 'Đồng nghiệp hỏi, em trả lời.', ai: '👩 수진',
      luot: [
        T(['이것은 뭐예요?', 'igeoseun mwoyeyo?', 'Cái này là gì?'], ['그것은 베트남 커피예요.', 'geugeoseun Beteunam keopiyeyo', 'Đó là cà phê Việt Nam.', 'Đồ ở gần người hỏi → 그것.'], ['이것은 뭐예요.', 'igeoseun mwoyeyo', 'Lặp lại câu hỏi.'], ['저것이 의자예요.', 'jeogeosi uijayeyo', 'Sai đồ vật.']),
        T(['이 우산은 민 씨 우산이에요?', 'i usaneun min ssi usanieyo?', 'Cái ô này là của Min à?'], ['아니요, 제 우산이 아니에요.', 'aniyo, je usani anieyo', 'Không, không phải ô của tôi.', 'N이 아니에요.'], ['아니요, 우산 아니요.', 'aniyo, usan aniyo', 'Phải là 우산이 아니에요.'], ['네, 아니에요.', 'ne, anieyo', 'Mâu thuẫn.']),
        T(['그럼 누구 우산이에요?', 'geureom nugu usanieyo?', 'Vậy ô của ai?'], ['팀장님 우산이에요.', 'timjangnim usanieyo', 'Là ô của trưởng nhóm.', '팀장님 = trưởng nhóm.'], ['누구예요?', 'nuguyeyo?', 'Câu hỏi lại.'], ['시계예요.', 'sigyeyeyo', 'Sai.'])
      ], ket: 'Em đã dùng 은/는, 이/가, 이것/그것/저것 và 아니에요.'
    },
    tom: ['은/는', '이/가', '아니에요', '이것/그것/저것', '뭐/누구'], nguphap: 'N은/는 N이에요/예요; N이/가 아니에요; 이것/그것/저것', phatam: '시계 [시게], 휴대폰',
    loi: ['Nhầm 은/는 theo patchim', 'Nói 우산 아니요', 'Nhầm 그것 và 저것'], btvn: ['Chỉ 10 đồ vật trong nhà: 이것은 …이에요/예요', 'Đặt 3 câu phủ định với 아니에요', 'Hỏi – đáp 누구예요? với ảnh gia đình']
  };

  /* ================= NGÀY 10 ================= */
  const d10 = {
    n: 10, ten: 'Số Hán-Hàn: ngày tháng, tiền, điện thoại', kinds: K,
    muc: 'Đếm bằng số Hán-Hàn (일, 이, 삼…), nói ngày tháng, giá tiền, số điện thoại.',
    hoc: `<h4>1. Số Hán-Hàn</h4>${reads([['공 / 영', '0', 'gong / yeong'], ['일', '1', 'il'], ['이', '2', 'i'], ['삼', '3', 'sam'], ['사', '4', 'sa'], ['오', '5', 'o'], ['육', '6', 'yuk'], ['칠', '7', 'chil'], ['팔', '8', 'pal'], ['구', '9', 'gu'], ['십', '10', 'sip'], ['백', '100', 'baek'], ['천', '1.000', 'cheon'], ['만', '10.000', 'man']])}
      <p>Ghép số: 25 = 이십오 (2-10-5) · 350 = 삼백오십 · 15.000 = 만 오천. ${sp('이십오|삼백오십|만 오천')}</p>
      ${tip('⚠️ Tiếng Hàn đếm tiền theo <b>vạn (만 = 10.000)</b>, không theo nghìn: 50.000 원 = 오만 원 (5 vạn), không nói "오십천".')}
      <h4>2. Dùng số Hán-Hàn cho</h4><ul><li><b>Ngày tháng</b>: 11월 24일 (십일월 이십사일). Tháng 6 và 10 đọc đặc biệt: <b>유월, 시월</b>. ${sp('십일월 이십사일|유월|시월')}</li><li><b>Tiền</b>: 원 (won): 3.000원 = 삼천 원.</li><li><b>Số điện thoại</b>: đọc từng số; dấu gạch đọc 에 (e): 010-1234-5678.</li><li><b>Phút</b>: 분 (분 dùng số Hán-Hàn): 30분 = 삼십 분.</li></ul>`,
    vocab: [
      w('공', 'gong', 'số 0', 'Dùng khi đọc số điện thoại.', ['공일공', 'gong-il-gong', '010']),
      w('일', 'il', 'số 1; ngày', '', ['일월 일일', 'irwol iril', 'ngày 1 tháng 1']),
      w('삼', 'sam', 'số 3', '', ['삼만 원', 'samman won', '30.000 won']),
      w('십', 'sip', 'số 10', '', ['십 분', 'sip bun', '10 phút']),
      w('백', 'baek', 'trăm', '', ['백 원', 'baek won', '100 won']),
      w('천', 'cheon', 'nghìn', '', ['오천 원', 'ocheon won', '5.000 won']),
      w('만', 'man', 'vạn (10.000)', '', ['만 원이에요.', 'man wonieyo', 'Là 10.000 won.']),
      w('원', 'won', 'won (tiền Hàn)', '', ['얼마예요? – 삼천 원이에요.', 'eolmayeyo? – samcheon wonieyo', 'Bao nhiêu? – 3.000 won.']),
      w('월', 'wol', 'tháng', 'Số + 월.', ['오늘은 십일월이에요.', 'oneureun sibirworieyo', 'Hôm nay là tháng 11.']),
      w('전화번호', 'jeonhwabeonho', 'số điện thoại', '', ['전화번호가 뭐예요?', 'jeonhwabeonhoga mwoyeyo?', 'Số điện thoại của bạn là gì?']),
      w('생일', 'saengil', 'sinh nhật', '', ['생일이 언제예요?', 'saengiri eonjeyeyo?', 'Sinh nhật bạn khi nào?']),
      w('며칠', 'myeochil', 'ngày mấy', '', ['오늘 며칠이에요?', 'oneul myeochirieyo?', 'Hôm nay ngày mấy?'])
    ],
    qs: [
      ['mc', 'Số 25 theo Hán-Hàn là?', '이십오', ['오십이', '이오', '스물다섯'], '이(2) + 십(10) + 오(5).'],
      ['mc', '50.000 won đọc là?', '오만 원', ['오십천 원', '오천 원', '오십만 원'], 'Đếm theo vạn: 5 × 만.'],
      ['mc', 'Tháng 6 đọc là?', '유월', ['육월', '륙월', '여섯월'], 'Ngoại lệ: 유월.'],
      ['mc', 'Tháng 10 đọc là?', '시월', ['십월', '열월', '실월'], 'Ngoại lệ: 시월.'],
      ['hear', '삼천 원', '3.000 won', ['300 won', '30.000 won', '3 won'], '삼천 = 3.000.'],
      ['hear', '칠', '7', ['8', '1', '9'], '칠 = 7.'],
      ['mc', '“Sinh nhật bạn khi nào?” là?', '생일이 언제예요?', ['생일이 뭐예요?', '생일이 누구예요?', '생일 몇 개예요?'], '언제 = khi nào.']
    ],
    hoithoai: {
      ctx: 'Em làm thẻ thành viên ở cửa hàng tiện lợi Hàn Quốc.', vai: 'Nhân viên hỏi, em trả lời bằng số.', ai: '🧑‍💼 직원',
      luot: [
        T(['전화번호가 뭐예요?', 'jeonhwabeonhoga mwoyeyo?', 'Số điện thoại của anh là gì?'], ['공일공에 일이삼사에 오육칠팔이에요.', 'gong-il-gong-e il-i-sam-sa-e o-yuk-chil-par-ieyo', '010-1234-5678.', 'Đọc từng số, gạch nối đọc 에.'], ['백십이에요.', 'baeksibieyo', 'Số điện thoại đọc từng chữ số.'], ['며칠이에요?', 'myeochirieyo?', 'Lạc đề.']),
        T(['생일이 언제예요?', 'saengiri eonjeyeyo?', 'Sinh nhật khi nào?'], ['시월 오일이에요.', 'siwol oirieyo', 'Ngày 5 tháng 10.', 'Tháng 10 = 시월.'], ['십월 오일이에요.', 'sibwol oirieyo', 'Tháng 10 đọc 시월.'], ['오일 시월이에요.', 'oil siworieyo', 'Tháng đứng trước ngày.']),
        T(['네, 모두 오천삼백 원이에요.', 'ne, modu ocheonsambaek wonieyo', 'Tổng cộng 5.300 won.'], ['여기요. 감사합니다!', 'yeogiyo. gamsahamnida', 'Đây ạ. Cảm ơn!', 'Đưa tiền + cảm ơn.'], ['오만 삼천 원이에요?', 'oman samcheon wonieyo?', 'Nghe nhầm: 5.300 chứ không phải 53.000.'], ['비싸요!', 'bissayo', 'Không cần.'])
      ], ket: 'Em đã nói số điện thoại, ngày sinh và nghe đúng giá tiền.'
    },
    tom: ['Số Hán-Hàn 0–10.000', 'Đếm theo vạn', 'Ngày tháng (유월, 시월)', 'Số điện thoại, tiền won'], nguphap: 'Số + 월/일/원/분; 언제; 며칠', phatam: '십일 [시빌], 육 [육], 유월, 시월',
    loi: ['Đếm tiền theo nghìn thay vì vạn', 'Đọc 육월, 십월', 'Đặt ngày trước tháng'], btvn: ['Đọc số điện thoại của em', 'Đọc 5 giá tiền: 1.500 / 12.000 / 50.000 / 230.000 / 1.000.000 won', 'Nói ngày sinh của 3 người']
  };

  /* ================= NGÀY 11 ================= */
  const d11 = {
    n: 11, ten: 'Số thuần Hàn: giờ, tuổi, đếm đồ vật', kinds: K,
    muc: 'Đếm bằng số thuần Hàn (하나, 둘…), nói giờ, tuổi, đếm đồ vật và người.',
    hoc: `<h4>1. Số thuần Hàn (1–10, 20)</h4>${reads([['하나', '1', 'hana'], ['둘', '2', 'dul'], ['셋', '3', 'set'], ['넷', '4', 'net'], ['다섯', '5', 'daseot'], ['여섯', '6', 'yeoseot'], ['일곱', '7', 'ilgop'], ['여덟', '8', 'yeodeol'], ['아홉', '9', 'ahop'], ['열', '10', 'yeol'], ['스물', '20', 'seumul']])}
      <h4>2. Đứng trước đơn vị thì rút gọn</h4><p>하나 → <b>한</b>, 둘 → <b>두</b>, 셋 → <b>세</b>, 넷 → <b>네</b>, 스물 → <b>스무</b>: 한 개, 두 명, 세 시, 스무 살. ${sp('한 개|두 명|세 시|스무 살')}</p>
      <h4>3. Khi nào dùng số thuần Hàn?</h4>${tbl(['Dùng cho', 'Đơn vị', 'Ví dụ'], ['<tr><td>Giờ</td><td>시</td><td>세 시 (3 giờ)</td></tr>', '<tr><td>Tuổi</td><td>살</td><td>스물다섯 살 (25 tuổi)</td></tr>', '<tr><td>Đồ vật</td><td>개</td><td>사과 두 개 (2 quả táo)</td></tr>', '<tr><td>Người</td><td>명 (분: kính trọng)</td><td>세 명 (3 người)</td></tr>'])}
      ${tip('⚠️ Nói giờ: <b>giờ</b> dùng số thuần Hàn, <b>phút</b> dùng số Hán-Hàn: 3시 30분 = <b>세 시 삼십 분</b>. 반 = rưỡi: 세 시 반. ' + sp('세 시 삼십 분|세 시 반'))}`,
    vocab: [
      w('하나', 'hana', 'một (thuần Hàn)', 'Trước đơn vị: 한.', ['하나, 둘, 셋!', 'hana, dul, set', 'Một, hai, ba!']),
      w('둘', 'dul', 'hai', 'Trước đơn vị: 두.', ['두 명이에요.', 'du myeongieyo', 'Hai người.']),
      w('셋', 'set', 'ba', 'Trước đơn vị: 세.', ['세 시예요.', 'se siyeyo', 'Ba giờ.']),
      w('넷', 'net', 'bốn', 'Trước đơn vị: 네.', ['네 개 주세요.', 'ne gae juseyo', 'Cho tôi 4 cái.']),
      w('다섯', 'daseot', 'năm', '', ['다섯 살이에요.', 'daseot sarieyo', '5 tuổi.']),
      w('열', 'yeol', 'mười', '', ['열 시에 만나요.', 'yeol sie mannayo', 'Gặp lúc 10 giờ.']),
      w('살', 'sal', 'tuổi', 'Số thuần Hàn + 살.', ['몇 살이에요?', 'myeot sarieyo?', 'Bao nhiêu tuổi?']),
      w('시', 'si', 'giờ', 'Số thuần Hàn + 시.', ['지금 몇 시예요?', 'jigeum myeot siyeyo?', 'Bây giờ mấy giờ?']),
      w('분', 'bun', 'phút', 'Số Hán-Hàn + 분.', ['십 분 기다려요.', 'sip bun gidaryeoyo', 'Chờ 10 phút.']),
      w('개', 'gae', 'cái (đơn vị đồ vật)', '', ['사과 세 개', 'sagwa se gae', '3 quả táo']),
      w('명', 'myeong', 'người (đơn vị)', '', ['몇 명이에요?', 'myeot myeongieyo?', 'Mấy người?']),
      w('지금', 'jigeum', 'bây giờ', '', ['지금 바빠요?', 'jigeum bappayo?', 'Bây giờ bận không?'])
    ],
    qs: [
      ['mc', '3 giờ nói là?', '세 시', ['삼 시', '셋 시', '삼시 반'], 'Giờ dùng số thuần Hàn rút gọn.'],
      ['mc', '3 giờ 30 phút nói là?', '세 시 삼십 분', ['삼 시 서른 분', '세 시 서른 분', '삼 시 삼십 분'], 'Giờ thuần Hàn, phút Hán-Hàn.'],
      ['mc', '20 tuổi nói là?', '스무 살', ['스물 살', '이십 살', '두십 살'], '스물 → 스무 trước đơn vị.'],
      ['mc', '“2 quả táo” là?', '사과 두 개', ['사과 둘 개', '사과 이 개', '두 사과 개'], 'N + số + đơn vị.'],
      ['mc', 'Tuổi dùng loại số nào?', 'Số thuần Hàn', ['Số Hán-Hàn', 'Cả hai', 'Số La Mã'], 'Thuần Hàn + 살.'],
      ['hear', '몇 시예요?', 'Mấy giờ rồi?', ['Bao nhiêu tuổi?', 'Mấy người?', 'Bao nhiêu tiền?'], '몇 시 = mấy giờ.'],
      ['hear', '세 명이에요.', '3 người', ['3 giờ', '3 tuổi', '3 cái'], '명 = người.']
    ],
    hoithoai: {
      ctx: 'Em vào quán gà rán Hàn Quốc với hai người bạn.', vai: 'Nhân viên hỏi, em trả lời bằng số thuần Hàn.', ai: '🧑‍🍳 직원',
      luot: [
        T(['어서 오세요! 몇 명이세요?', 'eoseo oseyo! myeot myeongiseyo?', 'Xin mời vào! Mấy người ạ?'], ['세 명이에요.', 'se myeongieyo', '3 người.', '셋 → 세 + 명.'], ['삼 명이에요.', 'sam myeongieyo', 'Đếm người dùng số thuần Hàn.'], ['세 시예요.', 'se siyeyo', '시 là giờ.']),
        T(['콜라 몇 개 드릴까요?', 'kolla myeot gae deurilkkayo?', 'Mấy lon cola ạ?'], ['두 개 주세요.', 'du gae juseyo', 'Cho 2 lon.', '둘 → 두 + 개.'], ['둘 개 주세요.', 'dul gae juseyo', 'Phải rút gọn: 두 개.'], ['이 개 주세요.', 'i gae juseyo', 'Đếm đồ vật dùng thuần Hàn.']),
        T(['지금 몇 시예요? 저희 열 시에 문 닫아요.', 'jigeum myeot siyeyo? jeohui yeol sie mun dadayo', 'Mấy giờ rồi nhỉ? Quán đóng cửa lúc 10 giờ.'], ['지금 아홉 시 반이에요.', 'jigeum ahop si banieyo', 'Bây giờ là 9 giờ rưỡi.', 'Giờ thuần Hàn + 반.'], ['구 시 반이에요.', 'gu si banieyo', 'Giờ dùng số thuần Hàn: 아홉 시.'], ['아홉 살이에요.', 'ahop sarieyo', '살 là tuổi.'])
      ], ket: 'Em đã đếm người, đồ vật và nói giờ bằng số thuần Hàn.'
    },
    tom: ['Số thuần Hàn 1–20', 'Rút gọn 한/두/세/네/스무', 'Giờ, tuổi, đồ vật, người'], nguphap: 'N + số + 개/명; số + 시/살; 몇 + đơn vị?', phatam: '여덟 [여덜], 일곱',
    loi: ['Dùng số Hán-Hàn cho giờ, tuổi', 'Không rút gọn (둘 개)', 'Đọc phút bằng thuần Hàn'], btvn: ['Nói giờ 5 lần trong ngày bằng tiếng Hàn', 'Nói tuổi của mọi người trong nhà', 'Đếm 5 loại đồ vật trên bàn']
  };

  /* ================= NGÀY 12 ================= */
  const d12 = {
    n: 12, ten: 'Gia đình và 있어요/없어요', kinds: K,
    muc: 'Giới thiệu gia đình, cách gọi anh chị theo giới tính người nói, dùng 있어요/없어요.',
    hoc: `<h4>1. Gọi anh, chị phụ thuộc vào người nói!</h4>${tbl(['', 'Nam gọi', 'Nữ gọi'], ['<tr><td>Anh trai</td><td>형 hyeong</td><td>오빠 oppa</td></tr>', '<tr><td>Chị gái</td><td>누나 nuna</td><td>언니 eonni</td></tr>', '<tr><td>Em (trai/gái)</td><td colspan="2">동생 dongsaeng (em trai: 남동생, em gái: 여동생)</td></tr>'])}
      <h4>2. 있어요 (có, ở) / 없어요 (không có)</h4><ul>${ex('형이 있어요.', 'hyeongi isseoyo', 'Tôi có anh trai.')}${ex('동생이 없어요.', 'dongsaengi eopseoyo', 'Tôi không có em.')}${ex('가족이 몇 명이에요?', 'gajogi myeot myeongieyo?', 'Gia đình bạn có mấy người?')}</ul>
      <h4>3. 하고 (và) – nối hai danh từ</h4><p>아버지<b>하고</b> 어머니 = bố và mẹ. ${sp('아버지하고 어머니')}</p>`,
    vocab: [
      w('가족', 'gajok', 'gia đình', '', ['우리 가족은 네 명이에요.', 'uri gajogeun ne myeongieyo', 'Gia đình tôi có 4 người.']),
      w('형', 'hyeong', 'anh trai (nam gọi)', '', ['형이 한 명 있어요.', 'hyeongi han myeong isseoyo', 'Tôi có một anh trai.']),
      w('누나', 'nuna', 'chị gái (nam gọi)', '', ['누나는 의사예요.', 'nunaneun uisayeyo', 'Chị tôi là bác sĩ.']),
      w('언니', 'eonni', 'chị gái (nữ gọi)', '', ['언니, 고마워요!', 'eonni, gomawoyo', 'Chị ơi, cảm ơn chị!']),
      w('동생', 'dongsaeng', 'em', '', ['동생이 학생이에요.', 'dongsaengi haksaengieyo', 'Em tôi là học sinh.']),
      w('할머니', 'halmeoni', 'bà', '', ['할머니가 건강하세요.', 'halmeoniga geonganghaseyo', 'Bà khoẻ mạnh.']),
      w('할아버지', 'harabeoji', 'ông', 'Đọc [하라버지].', ['할아버지는 팔십 살이세요.', 'harabeojineun palsip sariseyo', 'Ông 80 tuổi.']),
      w('남편', 'nampyeon', 'chồng', '', ['남편은 회사원이에요.', 'nampyeoneun hoesawonieyo', 'Chồng tôi là nhân viên công ty.']),
      w('아내', 'anae', 'vợ', '', ['제 아내예요.', 'je anaeyeyo', 'Đây là vợ tôi.']),
      w('아들', 'adeul', 'con trai', '', ['아들이 하나 있어요.', 'adeuri hana isseoyo', 'Tôi có một con trai.']),
      w('딸', 'ttal', 'con gái', '', ['딸이 귀여워요.', 'ttari gwiyeowoyo', 'Con gái dễ thương.']),
      w('있어요', 'isseoyo', 'có; ở', '', ['시간 있어요?', 'sigan isseoyo?', 'Có thời gian không?']),
      w('없어요', 'eopseoyo', 'không có', '', ['돈이 없어요.', 'doni eopseoyo', 'Không có tiền.'])
    ],
    qs: [
      ['mc', 'Em (nữ) gọi anh trai là?', '오빠', ['형', '누나', '언니'], 'Nữ gọi anh: 오빠.'],
      ['mc', 'Em (nam) gọi chị gái là?', '누나', ['언니', '오빠', '형'], 'Nam gọi chị: 누나.'],
      ['mc', '“Tôi không có em” là?', '동생이 없어요.', ['동생이 안 있어요.', '동생 아니에요.', '동생이 있어요.'], 'Phủ định của 있어요 là 없어요.'],
      ['mc', '“Bố và mẹ” là?', '아버지하고 어머니', ['아버지가 어머니', '아버지는 어머니', '하고 아버지 어머니'], 'N하고 N.'],
      ['hear', '가족이 몇 명이에요?', 'Gia đình bạn có mấy người?', ['Bạn có anh chị em không?', 'Bố bạn bao nhiêu tuổi?', 'Bạn có con chưa?'], 'gajok = gia đình.'],
      ['hear', '딸이 있어요.', 'Tôi có con gái.', ['Tôi có con trai.', 'Tôi không có con.', 'Tôi có em gái.'], '딸 = con gái.'],
      ['order', 'Sắp xếp: “Tôi có một anh trai.”', ['형이', '한 명', '있어요.'], '형이 한 명 있어요.']
    ],
    hoithoai: {
      ctx: 'Đồng nghiệp Su-jin hỏi về gia đình em (em là nam).', vai: 'Su-jin hỏi, em trả lời.', ai: '👩 수진',
      luot: [
        T(['가족이 몇 명이에요?', 'gajogi myeot myeongieyo?', 'Gia đình anh có mấy người?'], ['네 명이에요. 아내하고 아들, 딸이 있어요.', 'ne myeongieyo. anaehago adeul, ttari isseoyo', '4 người. Có vợ, con trai và con gái.', 'Số + 명; 하고 nối danh từ.'], ['사 명이에요.', 'sa myeongieyo', 'Đếm người dùng số thuần Hàn.'], ['가족이 없어요.', 'gajogi eopseoyo', 'Không đúng ý.']),
        T(['형제가 있어요?', 'hyeongjega isseoyo?', 'Anh có anh chị em không?'], ['누나가 한 명 있어요.', 'nunaga han myeong isseoyo', 'Tôi có một chị gái.', 'Nam gọi chị là 누나.'], ['언니가 있어요.', 'eonniga isseoyo', 'Em là nam nên gọi chị là 누나.'], ['오빠가 있어요.', 'oppaga isseoyo', 'Chỉ nữ mới gọi 오빠.']),
        T(['아들은 몇 살이에요?', 'adeureun myeot sarieyo?', 'Con trai mấy tuổi?'], ['일곱 살이에요.', 'ilgop sarieyo', '7 tuổi.', 'Tuổi dùng số thuần Hàn.'], ['칠 살이에요.', 'chil sarieyo', 'Tuổi dùng số thuần Hàn: 일곱.'], ['일곱 시예요.', 'ilgop siyeyo', '시 là giờ.'])
      ], ket: 'Em đã giới thiệu gia đình bằng tiếng Hàn.'
    },
    tom: ['Từ vựng gia đình', 'Gọi anh/chị theo giới tính người nói', '있어요/없어요', '하고'], nguphap: 'N이/가 있어요/없어요; N하고 N', phatam: '할아버지 [하라버지], 있어요 [이써요], 없어요 [업써요]',
    loi: ['Nam gọi 언니, nữ gọi 형', 'Nói 안 있어요', 'Đếm người bằng số Hán-Hàn'], btvn: ['Vẽ cây gia đình bằng tiếng Hàn', 'Viết 5 câu với 있어요/없어요', 'Giới thiệu gia đình 4 câu']
  };

  /* ================= NGÀY 13 ================= */
  const d13 = {
    n: 13, ten: 'Đồ ăn và gọi món', kinds: K,
    muc: 'Gọi món với N 주세요, hỏi món, khen ngon, nói cay/mặn.',
    hoc: `<h4>1. Gọi món: N + 주세요</h4><ul>${ex('비빔밥 하나 주세요.', 'bibimbap hana juseyo', 'Cho tôi một bibimbap.')}${ex('물 좀 주세요.', 'mul jom juseyo', 'Cho tôi xin chút nước.')}${ex('여기요! / 저기요!', 'yeogiyo / jeogiyo', 'Em ơi! (gọi nhân viên)')}</ul>
      ${tip('💡 Ở Hàn Quốc gọi nhân viên bằng <b>저기요</b> hoặc <b>여기요</b>. Nước lọc và <b>반찬</b> (món ăn kèm) thường miễn phí và được thêm thoải mái.')}
      <h4>2. Nhận xét món ăn</h4>${reads([['맛있어요!', 'masisseoyo', 'Ngon quá!'], ['맛없어요.', 'madeopseoyo', 'Không ngon.'], ['매워요.', 'maewoyo', 'Cay.'], ['짜요.', 'jjayo', 'Mặn.'], ['달아요.', 'darayo', 'Ngọt.']])}
      <h4>3. Một số món Hàn phổ biến</h4>${reads([['김치', 'gimchi', 'kim chi'], ['비빔밥', 'bibimbap', 'cơm trộn'], ['불고기', 'bulgogi', 'thịt bò xào'], ['라면', 'ramyeon', 'mì gói'], ['삼겹살', 'samgyeopsal', 'thịt ba chỉ nướng']])}`,
    vocab: [
      w('밥', 'bap', 'cơm', '', ['밥 먹었어요?', 'bap meogeosseoyo?', 'Ăn cơm chưa?']),
      w('물', 'mul', 'nước', '', ['물 좀 주세요.', 'mul jom juseyo', 'Cho tôi xin nước.']),
      w('김치', 'gimchi', 'kim chi', '', ['김치가 맛있어요.', 'gimchiga masisseoyo', 'Kim chi ngon.']),
      w('비빔밥', 'bibimbap', 'cơm trộn', '', ['비빔밥 하나 주세요.', 'bibimbap hana juseyo', 'Cho tôi một bibimbap.']),
      w('불고기', 'bulgogi', 'thịt bò xào kiểu Hàn', '', ['불고기 좋아해요.', 'bulgogi joahaeyo', 'Tôi thích bulgogi.']),
      w('라면', 'ramyeon', 'mì gói', '', ['라면 먹어요.', 'ramyeon meogeoyo', 'Ăn mì.']),
      w('메뉴', 'menyu', 'thực đơn', '', ['메뉴 주세요.', 'menyu juseyo', 'Cho tôi thực đơn.']),
      w('주세요', 'juseyo', 'xin cho, làm ơn đưa', 'N + 주세요.', ['이거 주세요.', 'igeo juseyo', 'Cho tôi cái này.']),
      w('맛있어요', 'masisseoyo', 'ngon', 'Đọc [마시써요].', ['정말 맛있어요!', 'jeongmal masisseoyo', 'Ngon thật!']),
      w('매워요', 'maewoyo', 'cay', '', ['너무 매워요!', 'neomu maewoyo', 'Cay quá!']),
      w('저기요', 'jeogiyo', 'em ơi, anh ơi (gọi người)', '', ['저기요! 물 좀 주세요.', 'jeogiyo! mul jom juseyo', 'Em ơi! Cho xin nước.']),
      w('먹어요', 'meogeoyo', 'ăn', '', ['뭐 먹어요?', 'mwo meogeoyo?', 'Ăn gì?'])
    ],
    qs: [
      ['mc', '“Cho tôi một bibimbap” là?', '비빔밥 하나 주세요.', ['비빔밥 일 주세요.', '하나 비빔밥 먹어요.', '비빔밥 있어요 하나.'], 'N + 하나 + 주세요.'],
      ['mc', 'Gọi nhân viên trong quán ăn, em nói?', '저기요!', ['안녕히 계세요!', '괜찮아요!', '미안합니다!'], '저기요 / 여기요.'],
      ['mc', '“Ngon quá!” là?', '맛있어요!', ['맛없어요!', '매워요!', '짜요!'], 'masisseoyo.'],
      ['mc', '“맛있어요” đọc thực tế là?', '[마시써요] masisseoyo', ['[맛있어요] mat-it-eoyo', '[마딛써요]', '[맛시써요]'], 'Nối âm.'],
      ['hear', '너무 매워요!', 'Cay quá!', ['Mặn quá!', 'Ngon quá!', 'Ngọt quá!'], '매워요 = cay.'],
      ['hear', '물 좀 주세요.', 'Cho tôi xin chút nước.', ['Cho tôi thực đơn.', 'Cho tôi kim chi.', 'Tôi không uống nước.'], '물 = nước.'],
      ['order', 'Sắp xếp: “Cho tôi thực đơn.”', ['메뉴', '주세요.'], '메뉴 주세요.']
    ],
    hoithoai: {
      ctx: 'Em vào một quán ăn Hàn Quốc ở Seoul.', vai: 'Nhân viên hỏi, em gọi món.', ai: '🧑‍🍳 직원',
      luot: [
        T(['어서 오세요! 뭐 드릴까요?', 'eoseo oseyo! mwo deurilkkayo?', 'Mời vào! Quý khách dùng gì?'], ['메뉴 주세요.', 'menyu juseyo', 'Cho tôi thực đơn.', 'N + 주세요.'], ['메뉴 먹어요.', 'menyu meogeoyo', '"Ăn thực đơn" 😄'], ['안녕히 계세요.', 'annyeonghi gyeseyo', 'Đó là câu chào ra về.']),
        T(['여기 있어요.', 'yeogi isseoyo', 'Đây ạ.'], ['비빔밥 하나하고 불고기 하나 주세요.', 'bibimbap hanahago bulgogi hana juseyo', 'Cho một bibimbap và một bulgogi.', '하고 nối hai món.'], ['비빔밥 일 개 주세요.', 'bibimbap il gae juseyo', 'Dùng số thuần Hàn: 하나 / 한 개.'], ['맛있어요.', 'masisseoyo', 'Chưa ăn mà.']),
        T(['맛이 어때요?', 'masi eottaeyo?', 'Mùi vị thế nào?'], ['정말 맛있어요! 그런데 조금 매워요.', 'jeongmal masisseoyo! geureonde jogeum maewoyo', 'Ngon thật! Nhưng hơi cay.', '그런데 = nhưng; 조금 = một chút.'], ['맛없어요!', 'madeopseoyo', 'Hơi bất lịch sự.'], ['메뉴예요.', 'menyuyeyo', 'Sai.']),
        T(['물 드릴까요?', 'mul deurilkkayo?', 'Mang nước cho quý khách nhé?'], ['네, 물 좀 주세요. 감사합니다!', 'ne, mul jom juseyo. gamsahamnida', 'Vâng, cho xin nước. Cảm ơn!', 'Nhận lời + cảm ơn.'], ['아니요, 매워요.', 'aniyo, maewoyo', 'Đang cay thì nên uống nước 😄'], ['물 있어요?', 'mul isseoyo?', 'Nhân viên vừa mời rồi.'])
      ], ket: 'Em đã gọi món, khen món ăn và xin nước.'
    },
    tom: ['N + 주세요', 'Gọi nhân viên', 'Nhận xét món ăn', 'Món Hàn phổ biến'], nguphap: 'N + 하나/둘 + 주세요; N하고 N', phatam: '맛있어요 [마시써요], 맛없어요 [마덥써요]',
    loi: ['Dùng số Hán-Hàn khi gọi món', 'Đọc 맛있어요 tách rời'], btvn: ['Tập gọi 3 món cho 2 người', 'Nói 5 tính từ về món ăn', 'Xem thực đơn quán Hàn trên mạng và đọc tên 5 món']
  };

  /* ================= NGÀY 14 ================= */
  const d14 = {
    n: 14, ten: 'Ôn tập tuần 2 và hội thoại tổng hợp', vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Ôn ngữ pháp tuần 2, hội thoại tổng hợp, kiểm tra 20 câu.',
    hoc: `<h4>Ngữ pháp tuần 2</h4>${tbl(['Chủ điểm', 'Ví dụ'], ['<tr><td>입니다 / 이에요 / 예요</td><td>저는 민입니다. 학생이에요. 의사예요.</td></tr>', '<tr><td>은/는, 이/가</td><td>저는 … · 이름이 뭐예요?</td></tr>', '<tr><td>아니에요</td><td>의사가 아니에요.</td></tr>', '<tr><td>이것/그것/저것</td><td>이것은 뭐예요?</td></tr>', '<tr><td>Số Hán-Hàn</td><td>시월 오일, 삼천 원, 삼십 분</td></tr>', '<tr><td>Số thuần Hàn</td><td>세 시, 스무 살, 두 개, 세 명</td></tr>', '<tr><td>있어요/없어요</td><td>형이 있어요. 동생이 없어요.</td></tr>', '<tr><td>주세요</td><td>비빔밥 하나 주세요.</td></tr>'])}`,
    qs: [['mc', '3 giờ 15 phút là?', '세 시 십오 분', ['삼 시 십오 분', '세 시 열다섯 분', '셋 시 십오 분'], 'Giờ thuần Hàn, phút Hán-Hàn.'], ['mc', '의사 ___ 아니에요.', '가', ['이', '는', '을'], 'Sau nguyên âm → 가.']],
    hoithoai: {
      ctx: 'Em gặp lại Ji-min ở quán cà phê cuối tuần.', vai: 'Hội thoại tổng hợp tuần 2.', ai: '👩 지민',
      luot: [
        T(['민 씨, 오랜만이에요! 이분은 누구예요?', 'min ssi, oraenmanieyo! ibuneun nuguyeyo?', 'Min ơi, lâu rồi không gặp! Vị này là ai?'], ['제 누나예요. 의사예요.', 'je nunayeyo. uisayeyo', 'Chị tôi. Chị ấy là bác sĩ.', 'Nam gọi chị: 누나.'], ['제 언니예요.', 'je eonniyeyo', 'Em là nam → 누나.'], ['누구예요?', 'nuguyeyo?', 'Câu hỏi lại.']),
        T(['반갑습니다! 뭐 마실래요?', 'bangapseumnida! mwo masillaeyo?', 'Rất vui! Uống gì nhỉ?'], ['커피 두 잔 주세요.', 'keopi du jan juseyo', 'Cho 2 ly cà phê.', '잔 = ly; 둘 → 두.'], ['커피 이 잔 주세요.', 'keopi i jan juseyo', 'Đếm ly dùng số thuần Hàn.'], ['커피 없어요.', 'keopi eopseoyo', 'Lạc đề.']),
        T(['모두 만 이천 원이에요.', 'modu man icheon wonieyo', 'Tổng 12.000 won.'], ['여기요. 감사합니다!', 'yeogiyo. gamsahamnida', 'Đây ạ. Cảm ơn!', 'Thanh toán.'], ['천 이백 원?', 'cheon ibaek won?', 'Nghe nhầm: 12.000 (만 이천).'], ['비싸요!', 'bissayo', 'Không lịch sự.']),
        T(['지금 몇 시예요?', 'jigeum myeot siyeyo?', 'Mấy giờ rồi?'], ['네 시 반이에요.', 'ne si banieyo', '4 giờ rưỡi.', '넷 → 네 + 시.'], ['사 시 반이에요.', 'sa si banieyo', 'Giờ dùng thuần Hàn.'], ['네 살이에요.', 'ne sarieyo', '살 là tuổi.'])
      ], ket: 'Em đã hoàn thành tuần 2! 🎉'
    },
    tom: ['Ôn tuần 2', 'Kiểm tra 20 câu'], nguphap: 'Ôn tuần 2', phatam: 'Ôn nối âm',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: ôn và làm lại', 'Viết đoạn 6 câu: giới thiệu bản thân, gia đình, món ăn yêu thích']
  };

  window.PLT_KO = { plan, stages, chart, H: { w, L, T, tbl, tip, ex, F, reads, sp, K }, days: [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14] };
})();

/* PLT-Edu · Tiếng Hàn – Cấp 2 (TOPIK I · cấp 2): lộ trình 30 ngày, Ngày 1–14
   h = chữ Hàn, p = phiên âm La-tinh (Romaja), v = nghĩa · noi = [câu, "phiên âm – nghĩa"] */
(function () {
  'use strict';
  const sp = PLT.LANG.sp;
  const w = (h, p, v, use, ex) => ({ h, p, v, use, ex });
  const L = (h, p, v) => ({ h, p, v });
  const T = (a, ok, ...bad) => ({ a: L(...a), o: [{ h: ok[0], p: ok[1], v: ok[2], ok: 1, f: ok[3] }].concat(bad.map((b) => ({ h: b[0], p: b[1], f: b[2] }))) });
  const tbl = (head, rows) => `<div class="zh-scroll"><table class="dtable full zh-tb"><tr>${head.map((x) => `<th>${x}</th>`).join('')}</tr>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</table></div>`;
  const tip = (x) => `<div class="zh-tip">${x}</div>`;
  const exs = (a) => `<ul>${a.map(([h, p, v]) => `<li>${h} ${sp(h)}<br><span class="zh-wp">${p}</span> – ${v}</li>`).join('')}</ul>`;
  const K = ['meaning', 'listen', 'listenWord', 'hanzi', 'pinyin', 'match'];

  const plan = [
    'Kính ngữ: -(으)세요 và -(으)시-', 'Quá khứ và động từ bất quy tắc ㅂ, ㄷ, ㅡ', 'Tương lai: -(으)ㄹ 거예요 và -(으)ㄹ게요', 'Nối câu: -고, -지만, -아서/어서', 'Muốn và có thể: -고 싶다, -(으)ㄹ 수 있다', 'Phải, được phép, cấm', 'Ôn tập tuần 1 và kiểm tra',
    'Đang làm và định ngữ', 'Lý do: -(으)니까, -기 때문에', 'Điều kiện -(으)면 và thử -아/어 보다', 'So sánh: 보다, 더, 제일', 'Bệnh viện và nhà thuốc', 'Ngân hàng', 'Ôn tập tuần 2 và kiểm tra',
    'Bưu điện và giao hàng', 'Thuê nhà', 'Thời tiết và bốn mùa', 'Nơi làm việc: xin nghỉ, họp', 'Lễ tết Hàn Quốc: 설날, 추석', 'Mua sắm trực tuyến', 'Kiểm tra tổng hợp và mô phỏng',
    'Kể kinh nghiệm: -(으)ㄴ 적이 있다', 'Rủ rê: -(으)ㄹ까요?, -(으)ㅂ시다', 'Dự định: -(으)려고 하다', 'Khuyên nhủ: -는 게 좋겠다', 'Gọi điện công việc', 'Đọc hiểu dạng TOPIK I', 'Nghe hiểu và phản xạ', 'Mô phỏng tình huống liên tục', 'Kiểm tra cuối khoá TOPIK I cấp 2 và lộ trình TOPIK II'
  ].map((ten, i) => ({ n: i + 1, ten }));
  const stages = [
    { ten: '🧩 Giai đoạn 1 – Ngữ pháp sơ cấp trọng tâm', tu: 1, den: 7 }, { ten: '🔗 Giai đoạn 2 – Nối câu và tình huống', tu: 8, den: 14 },
    { ten: '🏙️ Giai đoạn 3 – Đời sống ở Hàn Quốc', tu: 15, den: 21 }, { ten: '🎯 Giai đoạn 4 – Phản xạ và luyện thi TOPIK I', tu: 22, den: 30 }
  ];

  const d1 = {
    n: 1, ten: plan[0].ten, kinds: K,
    muc: 'Nói lịch sự với người lớn, khách hàng: đề nghị -(으)세요, kính ngữ chủ thể -(으)시-, từ kính ngữ đặc biệt.',
    hoc: `${tbl(['Thường', 'Kính ngữ', 'Nghĩa'], [['가요', '가세요', 'đi'], ['읽어요', '읽으세요', 'đọc'], ['먹어요', '드세요', 'ăn (đặc biệt)'], ['자요', '주무세요', 'ngủ (đặc biệt)'], ['있어요 (ở)', '계세요', 'ở (đặc biệt)'], ['이름', '성함', 'tên']])}
      ${tip('🔑 Gốc có patchim + <b>으세요</b> (읽으세요); không patchim + <b>세요</b> (가세요). Với khách hàng, người lớn tuổi luôn dùng kính ngữ.')}`,
    vocab: [
      w('드세요', 'deuseyo', 'mời ăn/uống (kính ngữ)', '', ['맛있게 드세요.', 'masitge deuseyo', 'Chúc ngon miệng.']),
      w('주무세요', 'jumuseyo', 'ngủ (kính ngữ)', '', ['안녕히 주무세요.', 'annyeonghi jumuseyo', 'Chúc ngủ ngon (với người lớn).']),
      w('계세요', 'gyeseyo', 'ở (kính ngữ)', '', ['사장님 계세요?', 'sajangnim gyeseyo?', 'Giám đốc có ở đây không?']),
      w('성함', 'seongham', 'quý danh', '', ['성함이 어떻게 되세요?', 'seonghami eotteoke doeseyo?', 'Quý danh của ông/bà là gì?']),
      w('연세', 'yeonse', 'tuổi (kính ngữ)', '', ['연세가 어떻게 되세요?', 'yeonsega eotteoke doeseyo?', 'Bác bao nhiêu tuổi ạ?']),
      w('말씀하세요', 'malsseumhaseyo', 'xin nói (kính ngữ)', '', ['천천히 말씀하세요.', 'cheoncheonhi malsseumhaseyo', 'Xin nói chậm.']),
      w('앉으세요', 'anjeuseyo', 'mời ngồi', '', ['여기 앉으세요.', 'yeogi anjeuseyo', 'Mời ngồi đây.']),
      w('기다리세요', 'gidariseyo', 'xin đợi', '', ['잠깐만 기다리세요.', 'jamkkanman gidariseyo', 'Xin đợi một chút.']),
      w('손님', 'sonnim', 'quý khách', '', ['손님, 어서 오세요.', 'sonnim, eoseo oseyo', 'Quý khách, xin mời vào.']),
      w('부모님', 'bumonim', 'bố mẹ (kính ngữ)', '', ['부모님은 잘 계세요?', 'bumonimeun jal gyeseyo?', 'Bố mẹ bạn có khoẻ không?'])
    ],
    qs: [
      ['mc', 'Mời khách ngồi đúng cách?', '여기 앉으세요.', ['여기 앉아.', '여기 앉아요요.', '여기 앉세요.'], 'Gốc 앉 có patchim → 으세요.'],
      ['mc', 'Kính ngữ của 먹다 là?', '드시다', ['먹으시다', '주무시다', '계시다'], 'Từ đặc biệt.'],
      ['mc', 'Hỏi tên người lớn lịch sự?', '성함이 어떻게 되세요?', ['이름이 뭐야?', '너 누구야?', '이름 뭐예요요?'], '성함.'],
      ['mc', '연세 nghĩa là?', 'tuổi (kính ngữ)', ['năm', 'tên', 'sức khoẻ'], 'yeonse.'],
      ['hear', '잠깐만 기다리세요.', 'Xin đợi một chút.', ['Mời vào.', 'Xin ngồi.', 'Tạm biệt.'], '기다리세요.'],
      ['hear', '사장님 계세요?', 'Giám đốc có ở đây không?', ['Giám đốc có khoẻ không?', 'Giám đốc tên gì?', 'Giám đốc đi đâu?'], '계세요 = ở.'],
      ['order', 'Sắp xếp: “Chúc ngon miệng.”', ['맛있게', '드세요', '.'], '맛있게 드세요.']
    ],
    noi: [['어서 오세요. 여기 앉으세요.', 'eoseo oseyo. yeogi anjeuseyo – Xin mời vào. Mời ngồi đây.'], ['성함이 어떻게 되세요?', 'seonghami eotteoke doeseyo? – Quý danh của ông/bà là gì?'], ['잠깐만 기다리세요.', 'jamkkanman gidariseyo – Xin đợi một chút.']],
    hoithoai: {
      ctx: 'Em là nhân viên quầy giao dịch, tiếp một vị khách Hàn Quốc lớn tuổi.', vai: 'Khách nói, em phục vụ bằng kính ngữ.', ai: '👴 손님',
      luot: [
        T(['안녕하세요. 통장을 만들고 싶어요.', 'annyeonghaseyo. tongjangeul mandeulgo sipeoyo', 'Chào cô. Tôi muốn mở sổ tài khoản.'], ['네, 어서 오세요. 여기 앉으세요.', 'ne, eoseo oseyo. yeogi anjeuseyo', 'Vâng, mời bác vào. Mời bác ngồi đây.', 'Kính ngữ.'], ['여기 앉아.', 'yeogi anja', 'Nói trống không với người lớn.'], ['여기 앉세요.', 'yeogi anseyo', 'Sai: thiếu 으.']),
        T(['고마워요.', 'gomawoyo', 'Cảm ơn.'], ['성함이 어떻게 되세요?', 'seonghami eotteoke doeseyo?', 'Quý danh của bác là gì ạ?', 'Hỏi tên lịch sự.'], ['이름이 뭐야?', 'ireumi mwoya?', 'Trống không.'], ['너 누구예요?', 'neo nuguyeyo?', 'Sai: 너 với người lớn.']),
        T(['김철수예요.', 'Gim Cheolsuyeyo', 'Tôi là Kim Cheol-su.'], ['감사합니다. 신분증을 주시겠어요? 잠깐만 기다리세요.', 'gamsahamnida. sinbunjeungeul jusigesseoyo? jamkkanman gidariseyo', 'Cảm ơn bác. Bác cho cháu xin giấy tờ tuỳ thân? Xin đợi một chút.', 'Chuỗi kính ngữ.'], ['신분증 줘.', 'sinbunjeung jwo', 'Trống không.'], ['기다려.', 'gidaryeo', 'Mệnh lệnh thô.'])
      ], ket: 'Em đã tiếp khách lớn tuổi bằng kính ngữ chuẩn.'
    },
    tom: ['-(으)세요', 'Từ kính ngữ: 드시다, 주무시다, 계시다, 성함, 연세'], nguphap: 'Kính ngữ chủ thể', phatam: '앉으세요 [안즈세요]',
    loi: ['Quên 으 sau patchim', 'Nói trống không với người lớn'], btvn: ['Viết 8 câu mời lịch sự', 'Chuyển 5 câu thường sang kính ngữ', 'Luyện 🎤 3 câu']
  };

  const d2 = {
    n: 2, ten: plan[1].ten, kinds: K,
    muc: 'Chia quá khứ -았/었어요 và động từ bất quy tắc ㅂ (덥다), ㄷ (듣다), ㅡ (바쁘다).',
    hoc: `${tbl(['Loại', 'Gốc', 'Hiện tại', 'Quá khứ'], [['ㅂ → 우', '덥다 (nóng)', '더워요', '더웠어요'], ['ㅂ → 우', '어렵다 (khó)', '어려워요', '어려웠어요'], ['ㄷ → ㄹ', '듣다 (nghe)', '들어요', '들었어요'], ['ㄷ → ㄹ', '걷다 (đi bộ)', '걸어요', '걸었어요'], ['ㅡ rụng', '바쁘다 (bận)', '바빠요', '바빴어요'], ['ㅡ rụng', '쓰다 (viết)', '써요', '썼어요']])}
      ${tip('⚠️ 입다 (mặc), 좁다 (hẹp), 받다 (nhận), 닫다 (đóng) là <b>quy tắc</b>: 입어요, 받아요.')}`,
    vocab: [
      w('덥다', 'deopda', 'nóng', '', ['어제 정말 더웠어요.', 'eoje jeongmal deowosseoyo', 'Hôm qua nóng thật.']),
      w('춥다', 'chupda', 'lạnh', '', ['오늘 추워요.', 'oneul chuwoyo', 'Hôm nay lạnh.']),
      w('어렵다', 'eoryeopda', 'khó', '', ['시험이 어려웠어요.', 'siheomi eoryeowosseoyo', 'Bài thi khó.']),
      w('쉽다', 'swipda', 'dễ', '', ['한국어가 쉬워요?', 'hangugeoga swiwoyo?', 'Tiếng Hàn dễ không?']),
      w('듣다', 'deutda', 'nghe', '', ['음악을 들었어요.', 'eumageul deureosseoyo', 'Tôi đã nghe nhạc.']),
      w('걷다', 'geotda', 'đi bộ', '', ['공원에서 걸었어요.', 'gongwoneseo georeosseoyo', 'Tôi đi bộ ở công viên.']),
      w('바쁘다', 'bappeuda', 'bận', '', ['어제 바빴어요.', 'eoje bappasseoyo', 'Hôm qua tôi bận.']),
      w('쓰다', 'sseuda', 'viết; dùng', '', ['편지를 썼어요.', 'pyeonjireul sseosseoyo', 'Tôi đã viết thư.']),
      w('예쁘다', 'yeppeuda', 'đẹp', '', ['옷이 예뻐요.', 'osi yeppeoyo', 'Áo đẹp.']),
      w('입다', 'ipda', 'mặc (quy tắc)', '', ['코트를 입었어요.', 'koteureul ibeosseoyo', 'Tôi đã mặc áo khoác.'])
    ],
    qs: [
      ['mc', '덥다 → quá khứ?', '더웠어요', ['덥었어요', '더았어요', '덥어요'], 'ㅂ → 우 + 었어요.'],
      ['mc', '듣다 → hiện tại?', '들어요', ['듣어요', '드어요', '들워요'], 'ㄷ → ㄹ.'],
      ['mc', '바쁘다 → quá khứ?', '바빴어요', ['바쁘었어요', '바뻤어요', '바쁘았어요'], 'ㅡ rụng, 바 → 았.'],
      ['mc', '입다 → hiện tại?', '입어요', ['이워요', '입워요', '이버요'], '입다 là quy tắc.'],
      ['hear', '어제 정말 추웠어요.', 'Hôm qua lạnh thật.', ['Hôm nay lạnh.', 'Hôm qua nóng.', 'Mai sẽ lạnh.'], '추웠어요.'],
      ['hear', '시험이 생각보다 쉬웠어요.', 'Bài thi dễ hơn tôi nghĩ.', ['Bài thi rất khó.', 'Chưa thi.', 'Bài thi bị huỷ.'], '쉬웠어요.'],
      ['order', 'Sắp xếp: “Tôi đã nghe nhạc.”', ['음악을', '들었어요', '.'], '음악을 들었어요.']
    ],
    noi: [['어제 정말 바빴어요.', 'eoje jeongmal bappasseoyo – Hôm qua tôi bận thật.'], ['한국어가 어려워요.', 'hangugeoga eoryeowoyo – Tiếng Hàn khó.'], ['공원에서 걸었어요.', 'gongwoneseo georeosseoyo – Tôi đi bộ ở công viên.']],
    hoithoai: {
      ctx: 'Đồng nghiệp Hàn hỏi về cuối tuần của em.', vai: 'Bạn hỏi, em kể.', ai: '👩 지민',
      luot: [
        T(['주말에 뭐 했어요?', 'jumare mwo haesseoyo?', 'Cuối tuần bạn làm gì?'], ['공원에서 걷고 음악을 들었어요.', 'gongwoneseo geotgo eumageul deureosseoyo', 'Tôi đi bộ ở công viên và nghe nhạc.', 'ㄷ bất quy tắc.'], ['음악을 듣었어요.', 'eumageul deudeosseoyo', 'Sai: phải 들었어요.'], ['걸었어요 듣다.', 'georeosseoyo deutda', 'Sai.']),
        T(['날씨는 어땠어요?', 'nalssineun eottaesseoyo?', 'Thời tiết thế nào?'], ['좀 더웠어요. 그래도 좋았어요.', 'jom deowosseoyo. geuraedo joasseoyo', 'Hơi nóng. Nhưng vẫn vui.', 'ㅂ bất quy tắc.'], ['좀 덥었어요.', 'jom deobeosseoyo', 'Sai.'], ['날씨가 바빴어요.', 'nalssiga bappasseoyo', 'Vô nghĩa.']),
        T(['저는 너무 바빴어요. 보고서를 썼어요.', 'jeoneun neomu bappasseoyo. bogoseoreul sseosseoyo', 'Tôi bận quá. Viết báo cáo.'], ['아이고, 수고하셨어요!', 'aigo, sugohasyeosseoyo!', 'Ôi, vất vả rồi!', 'Đáp lời tự nhiên.'], ['잘했어.', 'jalhaesseo', 'Trống không.'], ['보고서가 예뻐요.', 'bogoseoga yeppeoyo', 'Lạc.'])
      ], ket: 'Em đã kể chuyện cuối tuần với động từ bất quy tắc.'
    },
    tom: ['ㅂ → 우', 'ㄷ → ㄹ', 'ㅡ rụng', 'Ngoại lệ: 입다, 받다, 닫다'], nguphap: 'Động từ bất quy tắc', phatam: '더워요 [더워요], 들어요 [드러요]',
    loi: ['덥었어요, 듣었어요'], btvn: ['Chia 10 động từ bất quy tắc ở hiện tại và quá khứ', 'Kể cuối tuần 6 câu', 'Luyện 🎤 3 câu']
  };

  const d3 = {
    n: 3, ten: plan[2].ten, kinds: K,
    muc: 'Nói kế hoạch, dự đoán -(으)ㄹ 거예요 và hứa hẹn, ý chí -(으)ㄹ게요.',
    hoc: `${tbl(['Cấu trúc', 'Dùng khi', 'Ví dụ'], [['-(으)ㄹ 거예요', 'kế hoạch, dự đoán', '내일 부산에 갈 거예요. / 비가 올 거예요.'], ['-(으)ㄹ게요', 'hứa, quyết định có liên quan người nghe', '제가 전화할게요. – Tôi sẽ gọi (cho bạn).']])}
      ${tip('🔑 -(으)ㄹ게요 chỉ dùng với chủ ngữ <b>tôi</b> và không dùng trong câu hỏi.')}`,
    vocab: [
      w('내일', 'naeil', 'ngày mai', '', ['내일 만날 거예요.', 'naeil mannal geoyeyo', 'Mai sẽ gặp.']),
      w('다음 주', 'daeum ju', 'tuần sau', '', ['다음 주에 출장 갈 거예요.', 'daeum jue chuljang gal geoyeyo', 'Tuần sau tôi đi công tác.']),
      w('출장', 'chuljang', 'công tác', '', ['출장을 가요.', 'chuljangeul gayo', 'Đi công tác.']),
      w('계획', 'gyehoek', 'kế hoạch', '', ['주말 계획이 있어요?', 'jumal gyehoegi isseoyo?', 'Cuối tuần có kế hoạch gì không?']),
      w('연락하다', 'yeollakhada', 'liên lạc', '', ['제가 연락할게요.', 'jega yeollakhalgeyo', 'Tôi sẽ liên lạc.']),
      w('보내다', 'bonaeda', 'gửi', '', ['이메일을 보낼게요.', 'imeireul bonaelgeyo', 'Tôi sẽ gửi email.']),
      w('도와주다', 'dowajuda', 'giúp', '', ['제가 도와줄게요.', 'jega dowajulgeyo', 'Tôi sẽ giúp.']),
      w('아마', 'ama', 'có lẽ', '', ['아마 비가 올 거예요.', 'ama biga ol geoyeyo', 'Có lẽ sẽ mưa.']),
      w('꼭', 'kkok', 'nhất định', '', ['꼭 갈게요.', 'kkok galgeyo', 'Nhất định tôi sẽ đi.']),
      w('나중에', 'najunge', 'sau này, lát nữa', '', ['나중에 전화할게요.', 'najunge jeonhwahalgeyo', 'Lát nữa tôi gọi.'])
    ],
    qs: [
      ['mc', 'Hứa với bạn “Tôi sẽ gọi cho bạn”?', '제가 전화할게요.', ['제가 전화할 거예요?', '전화할게요?', '당신이 전화할게요.'], '-(으)ㄹ게요.'],
      ['mc', 'Dự đoán “Có lẽ sẽ mưa”?', '아마 비가 올 거예요.', ['아마 비가 올게요.', '비가 올게요.', '아마 비가 와요게요.'], 'Dự đoán → 거예요.'],
      ['mc', '먹다 → kế hoạch?', '먹을 거예요', ['먹ㄹ 거예요', '먹를 거예요', '먹갈 거예요'], 'Có patchim + 을.'],
      ['mc', '출장 nghĩa là?', 'công tác', ['xuất phát', 'tan làm', 'nghỉ phép'], 'chuljang.'],
      ['hear', '다음 주에 부산으로 출장 갈 거예요.', 'Tuần sau tôi đi công tác Busan.', ['Tuần này đi Seoul.', 'Tuần sau nghỉ phép.', 'Đã đi Busan.'], '갈 거예요.'],
      ['hear', '걱정하지 마세요. 제가 도와줄게요.', 'Đừng lo, tôi sẽ giúp.', ['Bạn tự làm đi.', 'Tôi không giúp được.', 'Hãy giúp tôi.'], '도와줄게요.'],
      ['order', 'Sắp xếp: “Tôi sẽ gửi email.”', ['이메일을', '보낼게요', '.'], '이메일을 보낼게요.']
    ],
    noi: [['제가 연락할게요.', 'jega yeollakhalgeyo – Tôi sẽ liên lạc.'], ['다음 주에 출장 갈 거예요.', 'daeum jue chuljang gal geoyeyo – Tuần sau tôi đi công tác.'], ['꼭 갈게요!', 'kkok galgeyo! – Nhất định tôi sẽ đi!']],
    hoithoai: {
      ctx: 'Trưởng nhóm người Hàn giao việc trước chuyến công tác.', vai: 'Trưởng nhóm hỏi, em trả lời.', ai: '👨‍💼 박 팀장',
      luot: [
        T(['다음 주 계획이 어떻게 돼요?', 'daeum ju gyehoegi eotteoke dwaeyo?', 'Kế hoạch tuần sau thế nào?'], ['월요일에 하노이로 출장 갈 거예요.', 'woryoire Hanoiro chuljang gal geoyeyo', 'Thứ Hai tôi đi công tác Hà Nội.', 'Kế hoạch.'], ['하노이로 갈게요?', 'Hanoiro galgeyo?', 'Không dùng 게요 trong câu hỏi.'], ['출장 갔어요.', 'chuljang gasseoyo', 'Sai thì.']),
        T(['그럼 보고서는 언제 보내요?', 'geureom bogoseoneun eonje bonaeyo?', 'Vậy khi nào gửi báo cáo?'], ['금요일까지 꼭 보낼게요.', 'geumyoilkkaji kkok bonaelgeyo', 'Trước thứ Sáu tôi nhất định gửi.', 'Hứa hẹn.'], ['팀장님이 보낼게요.', 'timjangnimi bonaelgeyo', 'Sai chủ ngữ.'], ['아마 보낼 거예요.', 'ama bonael geoyeyo', 'Thiếu cam kết.']),
        T(['좋아요. 문제가 있으면 연락하세요.', 'joayo. munjega isseumyeon yeollakhaseyo', 'Tốt. Có vấn đề thì liên lạc.'], ['네, 알겠습니다. 바로 연락드릴게요.', 'ne, algesseumnida. baro yeollakdeurilgeyo', 'Vâng, tôi hiểu. Tôi sẽ liên lạc ngay.', 'Lịch sự.'], ['알았어.', 'arasseo', 'Trống không.'], ['연락 안 할 거예요.', 'yeollak an hal geoyeyo', 'Ngược.'])
      ], ket: 'Em đã nói kế hoạch và hứa hẹn đúng cấu trúc.'
    },
    tom: ['-(으)ㄹ 거예요: kế hoạch, dự đoán', '-(으)ㄹ게요: hứa, chủ ngữ tôi'], nguphap: 'Thì tương lai', phatam: '갈 거예요 [갈 꺼예요]',
    loi: ['Dùng 게요 trong câu hỏi', 'Dùng 게요 với ngôi khác'], btvn: ['Viết kế hoạch tuần sau 6 câu', 'Viết 4 lời hứa với đồng nghiệp', 'Luyện 🎤 3 câu']
  };

  const d4 = {
    n: 4, ten: plan[3].ten, kinds: K,
    muc: 'Nối hai câu: -고 (và, rồi), -지만 (nhưng), -아서/어서 (nên; rồi – trình tự gắn kết).',
    hoc: `${tbl(['Đuôi nối', 'Nghĩa', 'Ví dụ'], [['-고', 'và; rồi', '밥을 먹고 커피를 마셨어요.'], ['-지만', 'nhưng', '한국어는 어렵지만 재미있어요.'], ['-아서/어서 (lý do)', 'vì… nên', '배가 아파서 병원에 갔어요.'], ['-아서/어서 (trình tự)', 'rồi (gắn liền)', '친구를 만나서 영화를 봤어요.']])}
      ${tip('⚠️ -아서/어서 chỉ lý do <b>không đi với thì quá khứ</b> ở vế trước và không đi với câu mệnh lệnh: ❌ 바빴어서 → ✅ 바빠서.')}`,
    vocab: [
      w('그리고', 'geurigo', 'và, rồi', '', ['그리고 집에 갔어요.', 'geurigo jibe gasseoyo', 'Rồi tôi về nhà.']),
      w('하지만', 'hajiman', 'nhưng', '', ['하지만 시간이 없어요.', 'hajiman sigani eopseoyo', 'Nhưng không có thời gian.']),
      w('그래서', 'geuraeseo', 'vì vậy', '', ['그래서 늦었어요.', 'geuraeseo neujeosseoyo', 'Vì vậy tôi đến muộn.']),
      w('늦다', 'neutda', 'muộn', '', ['길이 막혀서 늦었어요.', 'giri makhyeoseo neujeosseoyo', 'Kẹt xe nên muộn.']),
      w('막히다', 'makhida', 'tắc (đường)', '', ['길이 많이 막혀요.', 'giri mani makhyeoyo', 'Đường tắc lắm.']),
      w('아프다', 'apeuda', 'đau, ốm', '', ['머리가 아파요.', 'meoriga apayo', 'Tôi đau đầu.']),
      w('재미있다', 'jaemiitda', 'thú vị', '', ['드라마가 재미있어요.', 'deuramaga jaemiisseoyo', 'Phim hay.']),
      w('비싸다', 'bissada', 'đắt', '', ['비싸지만 좋아요.', 'bissajiman joayo', 'Đắt nhưng tốt.']),
      w('씻다', 'ssitda', 'rửa', '', ['손을 씻고 먹어요.', 'soneul ssitgo meogeoyo', 'Rửa tay rồi ăn.']),
      w('만나다', 'mannada', 'gặp', '', ['친구를 만나서 놀았어요.', 'chingureul mannaseo norasseoyo', 'Gặp bạn rồi đi chơi.'])
    ],
    qs: [
      ['mc', '“Tiếng Hàn khó nhưng thú vị”?', '한국어는 어렵지만 재미있어요.', ['한국어는 어렵고 재미없어요.', '한국어는 어려워서 재미있어요.', '어렵지만고 재미있어요.'], '-지만.'],
      ['mc', '“Kẹt xe nên tôi đến muộn”?', '길이 막혀서 늦었어요.', ['길이 막혔어서 늦었어요.', '길이 막히고 늦었어요.', '길이 막히지만 늦었어요.'], 'Không dùng 었어서.'],
      ['mc', 'Gặp bạn rồi (cùng bạn) xem phim: 친구를 ___ 영화를 봤어요.', '만나서', ['만나고', '만나지만', '만났어서'], 'Trình tự gắn kết.'],
      ['mc', '막히다 nghĩa là?', 'tắc (đường)', ['mở ra', 'đóng cửa', 'rộng'], 'makhida.'],
      ['hear', '머리가 아파서 회사에 못 갔어요.', 'Đau đầu nên không đi làm được.', ['Đau đầu nhưng vẫn đi làm.', 'Đi làm rồi đau đầu.', 'Không đau đầu.'], '-아서 lý do.'],
      ['hear', '비싸지만 품질이 좋아요.', 'Đắt nhưng chất lượng tốt.', ['Rẻ và tốt.', 'Đắt và kém.', 'Rẻ nhưng kém.'], '-지만.'],
      ['order', 'Sắp xếp: “Rửa tay rồi ăn.”', ['손을', '씻고', '먹어요', '.'], '손을 씻고 먹어요.']
    ],
    noi: [['길이 막혀서 늦었어요. 죄송합니다.', 'giri makhyeoseo neujeosseoyo. joesonghamnida – Kẹt xe nên tôi muộn. Xin lỗi.'], ['한국어는 어렵지만 재미있어요.', 'hangugeoneun eoryeopjiman jaemiisseoyo – Tiếng Hàn khó nhưng thú vị.'], ['밥을 먹고 커피를 마셨어요.', 'babeul meokgo keopireul masyeosseoyo – Ăn cơm rồi uống cà phê.']],
    hoithoai: {
      ctx: 'Em đến họp muộn 10 phút, trưởng phòng người Hàn hỏi.', vai: 'Trưởng phòng hỏi, em giải thích.', ai: '👩‍💼 이 부장',
      luot: [
        T(['왜 늦었어요?', 'wae neujeosseoyo?', 'Sao bạn đến muộn?'], ['죄송합니다. 길이 많이 막혀서 늦었어요.', 'joesonghamnida. giri mani makhyeoseo neujeosseoyo', 'Xin lỗi. Đường tắc nhiều nên tôi muộn.', '-아서 lý do.'], ['길이 막혔어서요.', 'giri makhyeosseoseoyo', 'Sai thì.'], ['늦지만 괜찮아요.', 'neujiman gwaenchanayo', 'Thiếu xin lỗi.']),
        T(['내일은 일찍 오세요.', 'naeireun iljjik oseyo', 'Mai đến sớm nhé.'], ['네, 내일은 일찍 출발할게요.', 'ne, naeireun iljjik chulbalhalgeyo', 'Vâng, mai tôi sẽ đi sớm.', 'Hứa.'], ['네, 늦을 거예요.', 'ne, neujeul geoyeyo', 'Ngược.'], ['싫어요.', 'sireoyo', 'Bất lịch sự.']),
        T(['회의 자료는 준비했어요?', 'hoeui jaryoneun junbihaesseoyo?', 'Tài liệu họp chuẩn bị chưa?'], ['네, 어제 만들고 메일로 보냈어요.', 'ne, eoje mandeulgo meillo bonaesseoyo', 'Vâng, hôm qua làm xong rồi gửi qua mail.', '-고 trình tự.'], ['만들지만 안 보냈어요.', 'mandeuljiman an bonaesseoyo', 'Lạc.'], ['만들어서요.', 'mandeureoseoyo', 'Câu cụt.'])
      ], ket: 'Em đã xin lỗi và giải thích bằng câu nối đúng.'
    },
    tom: ['-고 / -지만 / -아서·어서', 'Không dùng 았/었 + 어서'], nguphap: 'Đuôi liên kết câu', phatam: '막혀서 [마켜서]',
    loi: ['바빴어서', '-아서 + mệnh lệnh'], btvn: ['Viết 3 câu cho mỗi đuôi nối', 'Viết lời xin lỗi đi muộn', 'Luyện 🎤 3 câu']
  };

  const d5 = {
    n: 5, ten: plan[4].ten, kinds: K,
    muc: 'Nói mong muốn -고 싶다 / -고 싶어하다 và khả năng -(으)ㄹ 수 있다/없다, 못.',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ'], [['-고 싶어요 (tôi muốn)', '한국에 가고 싶어요.'], ['-고 싶어해요 (người khác muốn)', '동생이 핸드폰을 사고 싶어해요.'], ['-(으)ㄹ 수 있어요', '한국어를 할 수 있어요.'], ['-(으)ㄹ 수 없어요 = 못 + V', '술을 마실 수 없어요. = 술을 못 마셔요.']])}`,
    vocab: [
      w('싶다', 'sipda', 'muốn', '', ['쉬고 싶어요.', 'swigo sipeoyo', 'Tôi muốn nghỉ.']),
      w('수 있다', 'su itda', 'có thể', '', ['운전할 수 있어요.', 'unjeonhal su isseoyo', 'Tôi lái xe được.']),
      w('못', 'mot', 'không thể', '', ['수영을 못 해요.', 'suyeongeul mot haeyo', 'Tôi không biết bơi.']),
      w('운전하다', 'unjeonhada', 'lái xe', '', ['운전할 줄 알아요?', 'unjeonhal jul arayo?', 'Bạn biết lái xe không?']),
      w('수영', 'suyeong', 'bơi lội', '', ['수영을 배우고 싶어요.', 'suyeongeul baeugo sipeoyo', 'Tôi muốn học bơi.']),
      w('배우다', 'baeuda', 'học', '', ['한국어를 배워요.', 'hangugeoreul baewoyo', 'Tôi học tiếng Hàn.']),
      w('여행', 'yeohaeng', 'du lịch', '', ['제주도 여행을 하고 싶어요.', 'Jejudo yeohaengeul hago sipeoyo', 'Tôi muốn đi du lịch Jeju.']),
      w('술', 'sul', 'rượu', '', ['술을 못 마셔요.', 'sureul mot masyeoyo', 'Tôi không uống được rượu.']),
      w('매운 음식', 'maeun eumsik', 'đồ ăn cay', '', ['매운 음식을 먹을 수 있어요?', 'maeun eumsigeul meogeul su isseoyo?', 'Bạn ăn cay được không?']),
      w('잘', 'jal', 'giỏi, tốt', '', ['노래를 잘해요.', 'noraereul jalhaeyo', 'Hát hay.'])
    ],
    qs: [
      ['mc', '“Em trai muốn mua điện thoại” (ngôi 3)?', '동생이 핸드폰을 사고 싶어해요.', ['동생이 핸드폰을 사고 싶어요.', '동생이 사고 싶다요.', '동생이 살 수 싶어요.'], 'Ngôi 3 → 싶어하다.'],
      ['mc', '“Tôi không uống được rượu”?', '술을 못 마셔요.', ['술을 안 마실 수 있어요.', '술을 못 마실 수 있어요.', '술을 마시고 싶어요.'], '못 + V.'],
      ['mc', '먹다 → có thể?', '먹을 수 있어요', ['먹ㄹ 수 있어요', '먹을 수 있다요', '먹을 수 싶어요'], 'Patchim + 을.'],
      ['mc', '배우다 nghĩa là?', 'học', ['dạy', 'bay', 'đói'], 'baeuda.'],
      ['hear', '저는 매운 음식을 잘 못 먹어요.', 'Tôi không ăn cay giỏi lắm.', ['Tôi rất thích ăn cay.', 'Tôi không ăn mặn.', 'Tôi ăn được mọi thứ.'], '잘 못.'],
      ['hear', '제주도에 여행 가고 싶어요.', 'Tôi muốn đi du lịch Jeju.', ['Tôi đã đi Jeju.', 'Tôi sống ở Jeju.', 'Tôi không muốn đi.'], '가고 싶어요.'],
      ['order', 'Sắp xếp: “Tôi lái xe được.”', ['운전할', '수', '있어요', '.'], '운전할 수 있어요.']
    ],
    noi: [['한국어를 조금 할 수 있어요.', 'hangugeoreul jogeum hal su isseoyo – Tôi nói được chút tiếng Hàn.'], ['저는 술을 못 마셔요.', 'jeoneun sureul mot masyeoyo – Tôi không uống được rượu.'], ['제주도에 가고 싶어요.', 'Jejudoe gago sipeoyo – Tôi muốn đi Jeju.']],
    hoithoai: {
      ctx: 'Buổi liên hoan (회식) đầu tiên với công ty Hàn.', vai: 'Đồng nghiệp hỏi, em trả lời.', ai: '🍻 김 대리',
      luot: [
        T(['술 마실 수 있어요?', 'sul masil su isseoyo?', 'Bạn uống rượu được không?'], ['죄송해요, 저는 술을 잘 못 마셔요. 음료수 마실게요.', 'joesonghaeyo, jeoneun sureul jal mot masyeoyo. eumnyosu masilgeyo', 'Xin lỗi, tôi không uống rượu giỏi. Tôi uống nước ngọt nhé.', 'Từ chối khéo.'], ['싫어요.', 'sireoyo', 'Cộc.'], ['못 마실 수 있어요.', 'mot masil su isseoyo', 'Sai ngữ pháp.']),
        T(['괜찮아요. 매운 음식은 먹을 수 있어요?', 'gwaenchanayo. maeun eumsigeun meogeul su isseoyo?', 'Không sao. Đồ cay ăn được không?'], ['네, 매운 음식을 아주 좋아해요!', 'ne, maeun eumsigeul aju joahaeyo!', 'Vâng, tôi rất thích đồ cay!', 'Tự nhiên.'], ['네, 먹고 싶어해요.', 'ne, meokgo sipeohaeyo', 'Sai ngôi.'], ['매워요 수 있어요.', 'maewoyo su isseoyo', 'Sai.']),
        T(['한국에서 뭐 하고 싶어요?', 'hangugeseo mwo hago sipeoyo?', 'Ở Hàn bạn muốn làm gì?'], ['제주도에 여행 가고 싶어요. 그리고 한국어를 더 배우고 싶어요.', 'Jejudoe yeohaeng gago sipeoyo. geurigo hangugeoreul deo baeugo sipeoyo', 'Tôi muốn du lịch Jeju. Và muốn học thêm tiếng Hàn.', '-고 싶다.'], ['제주도에 가고 싶어해요.', 'Jejudoe gago sipeohaeyo', 'Sai ngôi.'], ['몰라.', 'molla', 'Trống không.'])
      ], ket: 'Em đã nói mong muốn và khả năng trong buổi liên hoan.'
    },
    tom: ['-고 싶어요 / 싶어해요', '-(으)ㄹ 수 있다/없다 = 못'], nguphap: 'Mong muốn và khả năng', phatam: '먹을 수 있어요 [머글 쑤 이써요]',
    loi: ['Ngôi 3 dùng 싶어요'], btvn: ['Viết 5 điều muốn làm ở Hàn Quốc', 'Viết 5 việc làm được / không làm được', 'Luyện 🎤 3 câu']
  };

  const d6 = {
    n: 6, ten: plan[5].ten, kinds: K,
    muc: 'Nói nghĩa vụ -아야/어야 하다, cho phép -아도/어도 되다, cấm -(으)면 안 되다.',
    hoc: `${tbl(['Cấu trúc', 'Nghĩa', 'Ví dụ'], [['-아야/어야 해요', 'phải', '여권을 가져가야 해요.'], ['-아도/어도 돼요', 'được phép', '여기 앉아도 돼요?'], ['-(으)면 안 돼요', 'không được', '여기서 사진을 찍으면 안 돼요.'], ['-지 않아도 돼요', 'không cần', '예약하지 않아도 돼요.']])}`,
    vocab: [
      w('여권', 'yeogwon', 'hộ chiếu', '', ['여권을 보여 주세요.', 'yeogwoneul boyeo juseyo', 'Cho xem hộ chiếu.']),
      w('사진', 'sajin', 'ảnh', '', ['사진을 찍어도 돼요?', 'sajineul jjigeodo dwaeyo?', 'Chụp ảnh được không?']),
      w('찍다', 'jjikda', 'chụp', '', ['사진 찍어 주세요.', 'sajin jjigeo juseyo', 'Chụp giúp tôi tấm ảnh.']),
      w('담배', 'dambae', 'thuốc lá', '', ['여기서 담배를 피우면 안 돼요.', 'yeogiseo dambaereul piumyeon an dwaeyo', 'Không được hút thuốc ở đây.']),
      w('피우다', 'piuda', 'hút (thuốc)', '', ['담배를 피워요?', 'dambaereul piwoyo?', 'Bạn hút thuốc không?']),
      w('예약하다', 'yeyakhada', 'đặt trước', '', ['예약해야 해요?', 'yeyakhaeya haeyo?', 'Có phải đặt trước không?']),
      w('들어가다', 'deureogada', 'đi vào', '', ['들어가도 돼요?', 'deureogado dwaeyo?', 'Vào được không?']),
      w('신발', 'sinbal', 'giày dép', '', ['신발을 벗어야 해요.', 'sinbareul beoseoya haeyo', 'Phải cởi giày.']),
      w('벗다', 'beotda', 'cởi', '', ['모자를 벗으세요.', 'mojareul beoseuseyo', 'Xin bỏ mũ.']),
      w('규칙', 'gyuchik', 'quy tắc', '', ['규칙을 지켜야 해요.', 'gyuchigeul jikyeoya haeyo', 'Phải giữ quy tắc.'])
    ],
    qs: [
      ['mc', '“Chụp ảnh được không?”', '사진을 찍어도 돼요?', ['사진을 찍어야 해요?', '사진을 찍으면 안 돼요?', '사진 찍고 싶어해요?'], 'Xin phép.'],
      ['mc', '“Không được hút thuốc ở đây”?', '여기서 담배를 피우면 안 돼요.', ['여기서 담배를 피워도 돼요.', '담배를 피워야 해요.', '담배 피우지 않아도 돼요.'], 'Cấm.'],
      ['mc', '“Không cần đặt trước”?', '예약하지 않아도 돼요.', ['예약해야 해요.', '예약하면 안 돼요.', '예약할 수 없어요.'], 'Không cần.'],
      ['mc', '벗다 nghĩa là?', 'cởi', ['mặc', 'đội', 'rửa'], 'beotda.'],
      ['hear', '집에 들어갈 때 신발을 벗어야 해요.', 'Vào nhà phải cởi giày.', ['Không cần cởi giày.', 'Phải đi giày vào.', 'Không được vào.'], '-어야 해요.'],
      ['hear', '박물관 안에서 사진을 찍으면 안 돼요.', 'Trong bảo tàng không được chụp ảnh.', ['Được chụp tự do.', 'Phải chụp ảnh.', 'Bảo tàng đóng cửa.'], '-으면 안 돼요.'],
      ['order', 'Sắp xếp: “Phải giữ quy tắc.”', ['규칙을', '지켜야', '해요', '.'], '규칙을 지켜야 해요.']
    ],
    noi: [['여기 앉아도 돼요?', 'yeogi anjado dwaeyo? – Tôi ngồi đây được không?'], ['여권을 가져가야 해요.', 'yeogwoneul gajyeogaya haeyo – Phải mang hộ chiếu.'], ['여기서 사진을 찍으면 안 돼요.', 'yeogiseo sajineul jjigeumyeon an dwaeyo – Ở đây không được chụp ảnh.']],
    hoithoai: {
      ctx: 'Em hướng dẫn đoàn khách Việt tham quan cung điện Gyeongbokgung; hỏi nhân viên.', vai: 'Nhân viên trả lời, em hỏi.', ai: '🏯 직원',
      luot: [
        T(['안녕하세요. 무엇을 도와드릴까요?', 'annyeonghaseyo. mueoseul dowadeurilkkayo?', 'Xin chào, tôi giúp gì được?'], ['안에서 사진을 찍어도 돼요?', 'aneseo sajineul jjigeodo dwaeyo?', 'Trong này chụp ảnh được không?', 'Xin phép.'], ['사진 찍을게요.', 'sajin jjigeulgeyo', 'Không hỏi.'], ['사진을 찍어야 해요?', 'sajineul jjigeoya haeyo?', 'Sai nghĩa.']),
        T(['밖에서는 괜찮지만 전시실 안에서는 찍으면 안 돼요.', 'bakkeseoneun gwaenchanchiman jeonsisil aneseoneun jjigeumyeon an dwaeyo', 'Bên ngoài được nhưng trong phòng trưng bày thì không.'], ['알겠습니다. 예약해야 해요?', 'algesseumnida. yeyakhaeya haeyo?', 'Tôi hiểu. Có phải đặt trước không?', 'Hỏi nghĩa vụ.'], ['그럼 찍어도 돼요.', 'geureom jjigeodo dwaeyo', 'Hiểu sai.'], ['안 돼요?', 'an dwaeyo?', 'Thừa.']),
        T(['아니요, 예약하지 않아도 돼요. 표만 사면 돼요.', 'aniyo, yeyakhaji anado dwaeyo. pyoman samyeon dwaeyo', 'Không cần đặt, chỉ cần mua vé.'], ['감사합니다. 표 열 장 주세요.', 'gamsahamnida. pyo yeol jang juseyo', 'Cảm ơn. Cho tôi 10 vé.', 'Hành động tiếp.'], ['예약할게요.', 'yeyakhalgeyo', 'Ngược.'], ['표 안 사요.', 'pyo an sayo', 'Mâu thuẫn.'])
      ], ket: 'Em đã hỏi quy định tham quan rõ ràng.'
    },
    tom: ['-아야/어야 하다', '-아도/어도 되다', '-(으)면 안 되다', '-지 않아도 되다'], nguphap: 'Nghĩa vụ, cho phép, cấm', phatam: '찍어도 [찌거도]',
    loi: ['Nhầm 안 돼요 và 않아도 돼요'], btvn: ['Viết 8 nội quy công ty', 'Hỏi xin phép 5 câu', 'Luyện 🎤 3 câu']
  };

  const d7 = {
    n: 7, ten: plan[6].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Ôn giai đoạn 1: kính ngữ, bất quy tắc, tương lai, nối câu, muốn/có thể, phải/được/cấm.',
    hoc: `<h4>Tóm tắt tuần 1</h4>${tbl(['Chủ điểm', 'Mẫu'], [['Kính ngữ', '-(으)세요, 드세요, 계세요, 성함'], ['Bất quy tắc', '더워요, 들어요, 바빠요'], ['Tương lai', '갈 거예요 / 갈게요'], ['Nối câu', '-고, -지만, -아서/어서'], ['Muốn, có thể', '-고 싶다, -(으)ㄹ 수 있다, 못'], ['Phải, được, cấm', '-아야 해요, -아도 돼요, -(으)면 안 돼요']])}`,
    qs: [['mc', '듣다 → quá khứ?', '들었어요', ['듣었어요', '드었어요', '들웠어요'], 'ㄷ → ㄹ.'], ['mc', 'Hứa “Tôi sẽ gọi”?', '전화할게요.', ['전화할 거예요?', '전화해야 해요.', '전화해도 돼요.'], '게요.']],
    noi: [['맛있게 드세요.', 'masitge deuseyo – Chúc ngon miệng.'], ['길이 막혀서 늦었어요.', 'giri makhyeoseo neujeosseoyo – Kẹt xe nên muộn.']],
    hoithoai: {
      ctx: 'Tổng ôn: ngày đầu đi làm ở văn phòng Hàn Quốc.', vai: 'Trưởng phòng nói, em trả lời.', ai: '👨‍💼 최 과장',
      luot: [
        T(['어서 오세요. 이름이 뭐예요?', 'eoseo oseyo. ireumi mwoyeyo?', 'Chào mừng. Bạn tên gì?'], ['안녕하세요. 저는 응우옌 민이에요. 잘 부탁드립니다.', 'annyeonghaseyo. jeoneun Eunguyen Minieyo. jal butakdeurimnida', 'Xin chào, tôi là Nguyễn Minh. Mong được giúp đỡ.', 'Lịch sự.'], ['나 민이야.', 'na Miniya', 'Trống không.'], ['성함이 민이세요.', 'seonghami Miniseyo', 'Tự tôn mình.']),
        T(['한국어를 할 수 있어요?', 'hangugeoreul hal su isseoyo?', 'Bạn nói tiếng Hàn được không?'], ['조금 할 수 있어요. 어렵지만 재미있어요.', 'jogeum hal su isseoyo. eoryeopjiman jaemiisseoyo', 'Một chút. Khó nhưng thú vị.', 'Khả năng + -지만.'], ['못 할 수 있어요.', 'mot hal su isseoyo', 'Sai.'], ['한국어 싶어요.', 'hangugeo sipeoyo', 'Sai.']),
        T(['회사 규칙을 꼭 지켜야 해요.', 'hoesa gyuchigeul kkok jikyeoya haeyo', 'Phải giữ nội quy công ty.'], ['네, 꼭 지킬게요. 열심히 하겠습니다.', 'ne, kkok jikilgeyo. yeolsimhi hagesseumnida', 'Vâng, nhất định tôi sẽ giữ. Tôi sẽ cố gắng.', 'Hứa.'], ['안 지켜도 돼요?', 'an jikyeodo dwaeyo?', 'Không hợp.'], ['지킬 거예요?', 'jikil geoyeyo?', 'Hỏi lại thừa.'])
      ], ket: 'Em đã ôn trọn giai đoạn 1!'
    },
    tom: ['Ôn tuần 1', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn', phatam: 'Ôn nối âm',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: học lại ngày yếu', 'Làm ⚡ Luyện nhanh', 'Viết đoạn tự giới thiệu ở công ty 100 chữ']
  };

  const d8 = {
    n: 8, ten: plan[7].ten, kinds: K,
    muc: 'Nói việc đang làm -고 있다 và bổ nghĩa danh từ: -는 (hiện tại), -(으)ㄴ (quá khứ / tính từ), -(으)ㄹ (tương lai).',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ', 'Nghĩa'], [['V-고 있어요', '지금 회의하고 있어요.', 'Tôi đang họp.'], ['V-는 + N', '커피를 마시는 사람', 'người đang uống cà phê'], ['V-(으)ㄴ + N', '어제 본 영화', 'phim đã xem hôm qua'], ['A-(으)ㄴ + N', '예쁜 옷 / 작은 가방', 'áo đẹp / túi nhỏ'], ['V-(으)ㄹ + N', '내일 할 일', 'việc sẽ làm mai']])}`,
    vocab: [
      w('지금', 'jigeum', 'bây giờ', '', ['지금 뭐 하고 있어요?', 'jigeum mwo hago isseoyo?', 'Bạn đang làm gì?']),
      w('회의하다', 'hoeuihada', 'họp', '', ['회의하고 있어요.', 'hoeuihago isseoyo', 'Đang họp.']),
      w('사람', 'saram', 'người', '', ['저기 서 있는 사람', 'jeogi seo inneun saram', 'người đang đứng kia']),
      w('영화', 'yeonghwa', 'phim', '', ['어제 본 영화가 재미있었어요.', 'eoje bon yeonghwaga jaemiisseosseoyo', 'Phim xem hôm qua hay.']),
      w('일', 'il', 'việc', '', ['오늘 할 일이 많아요.', 'oneul hal iri manayo', 'Hôm nay nhiều việc phải làm.']),
      w('작다', 'jakda', 'nhỏ', '', ['작은 가방', 'jageun gabang', 'túi nhỏ']),
      w('크다', 'keuda', 'to', '', ['큰 회사', 'keun hoesa', 'công ty lớn']),
      w('좋아하다', 'joahada', 'thích', '', ['제가 좋아하는 음식', 'jega joahaneun eumsik', 'món tôi thích']),
      w('기다리다', 'gidarida', 'đợi', '', ['기다리고 있어요.', 'gidarigo isseoyo', 'Đang đợi.']),
      w('살다', 'salda', 'sống', '', ['서울에 사는 친구', 'Seoure saneun chingu', 'bạn sống ở Seoul'])
    ],
    qs: [
      ['mc', '“Tôi đang họp”?', '회의하고 있어요.', ['회의할 거예요.', '회의했어요.', '회의하는 있어요.'], '-고 있다.'],
      ['mc', '“phim đã xem hôm qua”?', '어제 본 영화', ['어제 보는 영화', '어제 볼 영화', '어제 보고 영화'], 'Quá khứ → -(으)ㄴ.'],
      ['mc', '“việc sẽ làm ngày mai”?', '내일 할 일', ['내일 한 일', '내일 하는 일', '내일 하고 일'], 'Tương lai → -(으)ㄹ.'],
      ['mc', '살다 + 는 → ?', '사는', ['살는', '산는', '살은'], 'ㄹ rụng trước ㄴ.'],
      ['hear', '저기 커피를 마시는 사람이 우리 팀장님이에요.', 'Người đang uống cà phê kia là trưởng nhóm chúng tôi.', ['Trưởng nhóm không uống cà phê.', 'Người đang đọc sách.', 'Trưởng nhóm đã về.'], '-는 + N.'],
      ['hear', '오늘 할 일이 너무 많아요.', 'Hôm nay quá nhiều việc phải làm.', ['Hôm nay rảnh.', 'Hôm qua nhiều việc.', 'Việc đã xong.'], '-(으)ㄹ + N.'],
      ['order', 'Sắp xếp: “Bạn đang làm gì?”', ['지금', '뭐', '하고', '있어요?'], '지금 뭐 하고 있어요?']
    ],
    noi: [['지금 회의하고 있어요.', 'jigeum hoeuihago isseoyo – Bây giờ tôi đang họp.'], ['제가 좋아하는 음식은 김치찌개예요.', 'jega joahaneun eumsigeun gimchijjigaeyeyo – Món tôi thích là canh kimchi.'], ['오늘 할 일이 많아요.', 'oneul hal iri manayo – Hôm nay nhiều việc phải làm.']],
    hoithoai: {
      ctx: 'Đồng nghiệp gọi điện hỏi em ở đâu, đang làm gì.', vai: 'Bạn hỏi, em trả lời.', ai: '📞 수진',
      luot: [
        T(['지금 뭐 하고 있어요?', 'jigeum mwo hago isseoyo?', 'Bạn đang làm gì?'], ['고객을 기다리고 있어요.', 'gogaegeul gidarigo isseoyo', 'Tôi đang đợi khách.', '-고 있다.'], ['기다리는 있어요.', 'gidarineun isseoyo', 'Sai.'], ['기다렸어요.', 'gidaryeosseoyo', 'Sai thì.']),
        T(['어떤 고객이에요?', 'eotteon gogaegieyo?', 'Khách nào vậy?'], ['어제 전화한 베트남 회사 사장님이에요.', 'eoje jeonhwahan Beteunam hoesa sajangnimieyo', 'Giám đốc công ty Việt Nam đã gọi hôm qua.', '-(으)ㄴ quá khứ.'], ['어제 전화하는 사장님.', 'eoje jeonhwahaneun sajangnim', 'Sai thì.'], ['어제 전화할 사장님.', 'eoje jeonhwahal sajangnim', 'Sai thì.']),
        T(['회의 끝나고 뭐 해요?', 'hoeui kkeutnago mwo haeyo?', 'Họp xong làm gì?'], ['내일 발표할 자료를 만들 거예요.', 'naeil balpyohal jaryoreul mandeul geoyeyo', 'Làm tài liệu sẽ thuyết trình ngày mai.', '-(으)ㄹ tương lai.'], ['내일 발표한 자료.', 'naeil balpyohan jaryo', 'Sai thì.'], ['몰라요.', 'mollayo', 'Thiếu.'])
      ], ket: 'Em đã dùng -고 있다 và định ngữ đúng thì.'
    },
    tom: ['-고 있다', '-는 / -(으)ㄴ / -(으)ㄹ + N'], nguphap: 'Tiếp diễn và định ngữ', phatam: '있는 [인는]',
    loi: ['Nhầm thì định ngữ', '살는 (sai)'], btvn: ['Mô tả 5 người trong văn phòng bằng định ngữ', 'Viết 3 câu -고 있다', 'Luyện 🎤 3 câu']
  };

  const d9 = {
    n: 9, ten: plan[8].ten, kinds: K,
    muc: 'Nêu lý do: -(으)니까 (vì – có thể đi mệnh lệnh/rủ), -기 때문에 (vì – trang trọng), N 때문에.',
    hoc: `${tbl(['Cấu trúc', 'Đặc điểm', 'Ví dụ'], [['-(으)니까', 'đi với mệnh lệnh, rủ rê', '비가 오니까 우산을 가져가세요.'], ['-기 때문에', 'trang trọng, giải thích', '시간이 없기 때문에 택시를 탔어요.'], ['N 때문에', 'vì N', '감기 때문에 결근했어요.'], ['-아서/어서', 'không đi với mệnh lệnh', '❌ 비가 와서 우산 가져가세요']])}`,
    vocab: [
      w('우산', 'usan', 'ô', '', ['우산을 가져가세요.', 'usaneul gajyeogaseyo', 'Mang ô đi.']),
      w('가져가다', 'gajyeogada', 'mang đi', '', ['서류를 가져가야 해요.', 'seoryureul gajyeogaya haeyo', 'Phải mang giấy tờ.']),
      w('택시', 'taeksi', 'taxi', '', ['택시를 탔어요.', 'taeksireul tasseoyo', 'Tôi đi taxi.']),
      w('타다', 'tada', 'đi (xe), lên (xe)', '', ['버스를 타요.', 'beoseureul tayo', 'Đi xe buýt.']),
      w('감기', 'gamgi', 'cảm', '', ['감기에 걸렸어요.', 'gamgie geollyeosseoyo', 'Tôi bị cảm.']),
      w('때문에', 'ttaemune', 'vì', '', ['일 때문에 바빠요.', 'il ttaemune bappayo', 'Bận vì công việc.']),
      w('결근하다', 'gyeolgeunhada', 'nghỉ làm', '', ['오늘 결근했어요.', 'oneul gyeolgeunhaesseoyo', 'Hôm nay tôi nghỉ làm.']),
      w('위험하다', 'wiheomhada', 'nguy hiểm', '', ['위험하니까 조심하세요.', 'wiheomhanikka josimhaseyo', 'Nguy hiểm, cẩn thận nhé.']),
      w('조심하다', 'josimhada', 'cẩn thận', '', ['길 조심하세요.', 'gil josimhaseyo', 'Đi đường cẩn thận.']),
      w('바로', 'baro', 'ngay', '', ['바로 갈게요.', 'baro galgeyo', 'Tôi đi ngay.'])
    ],
    qs: [
      ['mc', '“Trời mưa, mang ô đi” (mệnh lệnh)?', '비가 오니까 우산을 가져가세요.', ['비가 와서 우산을 가져가세요.', '비가 오지만 우산을 가져가세요.', '비가 오고 우산 가져가세요.'], 'Mệnh lệnh → 니까.'],
      ['mc', '“Vì cảm nên nghỉ làm”?', '감기 때문에 결근했어요.', ['감기니까 결근했어요.', '감기 때문 결근했어요.', '감기해서 결근했어요.'], 'N 때문에.'],
      ['mc', 'Giải thích trang trọng: 시간이 없___ 택시를 탔어요.', '기 때문에', ['니까요', '고', '지만'], '-기 때문에.'],
      ['mc', '조심하다 nghĩa là?', 'cẩn thận', ['nhỏ bé', 'lo lắng', 'đơn giản'], 'josimhada.'],
      ['hear', '위험하니까 들어가지 마세요.', 'Nguy hiểm, đừng vào.', ['An toàn, cứ vào.', 'Vào đi.', 'Cửa đóng.'], '니까 + cấm.'],
      ['hear', '길이 막히기 때문에 지하철을 타는 게 좋아요.', 'Vì kẹt xe nên đi tàu điện tốt hơn.', ['Đi taxi tốt hơn.', 'Đường thông thoáng.', 'Tàu điện hỏng.'], '-기 때문에.'],
      ['order', 'Sắp xếp: “Đi đường cẩn thận.”', ['길', '조심하세요', '.'], '길 조심하세요.']
    ],
    noi: [['비가 오니까 우산을 가져가세요.', 'biga onikka usaneul gajyeogaseyo – Trời mưa, mang ô đi nhé.'], ['감기 때문에 결근했어요.', 'gamgi ttaemune gyeolgeunhaesseoyo – Vì cảm nên tôi nghỉ làm.'], ['길 조심하세요.', 'gil josimhaseyo – Đi đường cẩn thận.']],
    hoithoai: {
      ctx: 'Em gọi điện báo trưởng nhóm người Hàn xin nghỉ ốm.', vai: 'Trưởng nhóm hỏi, em trả lời.', ai: '📞 정 팀장',
      luot: [
        T(['네, 정민수입니다.', 'ne, Jeong Minsuimnida', 'Vâng, Jeong Min-su nghe.'], ['팀장님, 죄송한데 감기 때문에 오늘 출근을 못 할 것 같아요.', 'timjangnim, joesonghande gamgi ttaemune oneul chulgeuneul mot hal geot gatayo', 'Trưởng nhóm, xin lỗi, vì cảm nên hôm nay em không đi làm được.', 'N 때문에.'], ['감기니까 안 가.', 'gamginikka an ga', 'Trống không.'], ['저는 출근할 거예요.', 'jeoneun chulgeunhal geoyeyo', 'Mâu thuẫn.']),
        T(['많이 아파요? 병원에 갔어요?', 'mani apayo? byeongwone gasseoyo?', 'Đau lắm không? Đi viện chưa?'], ['열이 나기 때문에 오전에 병원에 갈 거예요.', 'yeori nagi ttaemune ojeone byeongwone gal geoyeyo', 'Vì bị sốt nên sáng nay em sẽ đi viện.', '-기 때문에.'], ['병원 때문에 갔어요.', 'byeongwon ttaemune gasseoyo', 'Sai nghĩa.'], ['안 아파요.', 'an apayo', 'Mâu thuẫn.']),
        T(['알겠어요. 푹 쉬세요.', 'algesseoyo. puk swiseyo', 'Hiểu rồi. Nghỉ ngơi cho khoẻ.'], ['감사합니다. 급한 일이 있으면 바로 연락주세요.', 'gamsahamnida. geuphan iri isseumyeon baro yeollakjuseyo', 'Cảm ơn ạ. Có việc gấp xin gọi em ngay.', 'Trách nhiệm.'], ['네, 연락하지 마세요.', 'ne, yeollakhaji maseyo', 'Thiếu trách nhiệm.'], ['쉬니까요.', 'swinikkayo', 'Cụt.'])
      ], ket: 'Em đã xin nghỉ ốm lịch sự bằng câu lý do.'
    },
    tom: ['-(으)니까 + mệnh lệnh/rủ', '-기 때문에 / N 때문에'], nguphap: 'Câu lý do', phatam: '오니까 [오니까], 때문에 [때무네]',
    loi: ['-아서 + mệnh lệnh', 'N 때문 (thiếu 에)'], btvn: ['Viết 3 câu cho mỗi cấu trúc', 'Viết tin nhắn xin nghỉ', 'Luyện 🎤 3 câu']
  };

  const d10 = {
    n: 10, ten: plan[9].ten, kinds: K,
    muc: 'Nói điều kiện -(으)면 (nếu) và thử -아/어 보다 (thử làm; đã từng thử).',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ'], [['-(으)면', '시간이 있으면 같이 가요.'], ['-(으)면 좋겠어요', '내일 날씨가 좋으면 좋겠어요. (mong)'], ['-아/어 보세요', '이 김치 먹어 보세요. (thử đi)'], ['-아/어 봤어요', '한복을 입어 봤어요. (đã thử)']])}`,
    vocab: [
      w('시간', 'sigan', 'thời gian', '', ['시간이 있으면 연락하세요.', 'sigani isseumyeon yeollakhaseyo', 'Có thời gian thì liên lạc.']),
      w('같이', 'gachi', 'cùng nhau', '', ['같이 가요.', 'gachi gayo', 'Đi cùng nhé.']),
      w('한복', 'hanbok', 'hanbok', '', ['한복을 입어 봤어요.', 'hanbogeul ibeo bwasseoyo', 'Tôi đã mặc thử hanbok.']),
      w('김치', 'gimchi', 'kimchi', '', ['김치 먹어 보세요.', 'gimchi meogeo boseyo', 'Ăn thử kimchi đi.']),
      w('맛집', 'matjip', 'quán ngon', '', ['이 근처에 맛집 있어요?', 'i geuncheoe matjip isseoyo?', 'Gần đây có quán ngon không?']),
      w('날씨', 'nalssi', 'thời tiết', '', ['날씨가 좋으면 좋겠어요.', 'nalssiga joeumyeon jokesseoyo', 'Mong thời tiết đẹp.']),
      w('문제', 'munje', 'vấn đề', '', ['문제가 있으면 말하세요.', 'munjega isseumyeon malhaseyo', 'Có vấn đề thì nói.']),
      w('물어보다', 'mureoboda', 'hỏi thử', '', ['직원에게 물어보세요.', 'jigwonege mureoboseyo', 'Hỏi nhân viên xem.']),
      w('가 보다', 'ga boda', 'đi thử', '', ['명동에 가 봤어요?', 'Myeongdonge ga bwasseoyo?', 'Bạn đến Myeongdong chưa?']),
      w('추천하다', 'chucheonhada', 'giới thiệu, đề xuất', '', ['맛집을 추천해 주세요.', 'matjibeul chucheonhae juseyo', 'Giới thiệu quán ngon giúp tôi.'])
    ],
    qs: [
      ['mc', '“Có thời gian thì đi cùng nhé”?', '시간이 있으면 같이 가요.', ['시간이 있어서 같이 가요.', '시간이 있지만 같이 가요.', '시간이 있고 같이 가요.'], '-(으)면.'],
      ['mc', '“Ăn thử kimchi đi”?', '김치 먹어 보세요.', ['김치 먹으면 보세요.', '김치 먹고 보세요.', '김치 먹을 보세요.'], '-어 보세요.'],
      ['mc', '“Bạn đến Myeongdong chưa?”', '명동에 가 봤어요?', ['명동에 가면 봤어요?', '명동에 갈 봤어요?', '명동에 가고 봤어요?'], '-아 봤어요.'],
      ['mc', '추천하다 nghĩa là?', 'giới thiệu, đề xuất', ['đuổi theo', 'chúc mừng', 'tham gia'], 'chucheonhada.'],
      ['hear', '문제가 있으면 언제든지 말하세요.', 'Có vấn đề thì nói bất cứ lúc nào.', ['Đừng nói gì.', 'Không có vấn đề.', 'Nói vào ngày mai.'], '-으면.'],
      ['hear', '저는 한복을 한 번 입어 봤어요.', 'Tôi đã mặc thử hanbok một lần.', ['Tôi chưa mặc bao giờ.', 'Tôi muốn mặc.', 'Tôi bán hanbok.'], '-어 봤어요.'],
      ['order', 'Sắp xếp: “Hỏi nhân viên xem.”', ['직원에게', '물어보세요', '.'], '직원에게 물어보세요.']
    ],
    noi: [['시간이 있으면 같이 가요.', 'sigani isseumyeon gachi gayo – Có thời gian thì đi cùng nhé.'], ['이거 한번 먹어 보세요.', 'igeo hanbeon meogeo boseyo – Ăn thử cái này đi.'], ['맛집을 추천해 주세요.', 'matjibeul chucheonhae juseyo – Giới thiệu quán ngon giúp tôi.']],
    hoithoai: {
      ctx: 'Em mới đến Seoul, đồng nghiệp Hàn giới thiệu chỗ đi chơi.', vai: 'Bạn gợi ý, em hỏi.', ai: '👩 은지',
      luot: [
        T(['명동에 가 봤어요?', 'Myeongdonge ga bwasseoyo?', 'Bạn đến Myeongdong chưa?'], ['아직 못 가 봤어요. 추천해 주세요!', 'ajik mot ga bwasseoyo. chucheonhae juseyo!', 'Chưa đến. Giới thiệu giúp tôi!', '-아 봤어요.'], ['명동에 가면 봤어요.', 'Myeongdonge gamyeon bwasseoyo', 'Sai.'], ['가 볼 거예요?', 'ga bol geoyeyo?', 'Hỏi lại sai.']),
        T(['주말에 시간이 있으면 같이 가요. 길거리 음식도 먹어 보세요.', 'jumare sigani isseumyeon gachi gayo. gilgeori eumsikdo meogeo boseyo', 'Cuối tuần rảnh thì đi cùng. Ăn thử đồ ăn đường phố nhé.'], ['좋아요! 떡볶이를 꼭 먹어 보고 싶어요.', 'joayo! tteokbokkireul kkok meogeo bogo sipeoyo', 'Hay quá! Tôi rất muốn ăn thử tteokbokki.', 'Kết hợp.'], ['시간이 있어서 가요.', 'sigani isseoseo gayo', 'Sai nghĩa.'], ['먹으면 보세요.', 'meogeumyeon boseyo', 'Sai.']),
        T(['그럼 토요일 오후 두 시 어때요?', 'geureom toyoil ohu du si eottaeyo?', 'Vậy 2 giờ chiều thứ Bảy thế nào?'], ['좋아요. 날씨가 좋으면 좋겠어요!', 'joayo. nalssiga joeumyeon jokesseoyo!', 'Được. Mong trời đẹp!', '-(으)면 좋겠다.'], ['날씨가 좋아서 좋겠어요.', 'nalssiga joaseo jokesseoyo', 'Sai.'], ['안 가요.', 'an gayo', 'Mâu thuẫn.'])
      ], ket: 'Em đã hẹn đi chơi với câu điều kiện và -아 보다.'
    },
    tom: ['-(으)면', '-(으)면 좋겠다', '-아/어 보다'], nguphap: 'Điều kiện và thử', phatam: '있으면 [이쓰면]',
    loi: ['Nhầm -으면 và -어서'], btvn: ['Viết 5 câu điều kiện', 'Viết 5 điều đã thử ở Hàn/Việt', 'Luyện 🎤 3 câu']
  };

  const d11 = {
    n: 11, ten: plan[10].ten, kinds: K,
    muc: 'So sánh: N보다 (더) – hơn, 제일/가장 – nhất, N처럼 – như, N만큼 – bằng.',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ'], [['A이/가 B보다 (더) + adj', '서울이 부산보다 더 커요.'], ['제일 / 가장 + adj', '이게 제일 싸요.'], ['N처럼', '한국 사람처럼 말해요.'], ['N만큼', '형만큼 키가 커요.']])}`,
    vocab: [
      w('보다', 'boda', 'so với, hơn', '', ['어제보다 추워요.', 'eojeboda chuwoyo', 'Lạnh hơn hôm qua.']),
      w('더', 'deo', 'hơn', '', ['더 싸요.', 'deo ssayo', 'Rẻ hơn.']),
      w('제일', 'jeil', 'nhất', '', ['제일 좋아해요.', 'jeil joahaeyo', 'Thích nhất.']),
      w('가장', 'gajang', 'nhất (trang trọng)', '', ['가장 중요해요.', 'gajang jungyohaeyo', 'Quan trọng nhất.']),
      w('싸다', 'ssada', 'rẻ', '', ['이게 더 싸요.', 'ige deo ssayo', 'Cái này rẻ hơn.']),
      w('가볍다', 'gabyeopda', 'nhẹ', '', ['이 노트북이 더 가벼워요.', 'i noteubugi deo gabyeowoyo', 'Laptop này nhẹ hơn.']),
      w('무겁다', 'mugeopda', 'nặng', '', ['가방이 무거워요.', 'gabangi mugeowoyo', 'Túi nặng.']),
      w('처럼', 'cheoreom', 'như', '', ['가수처럼 노래해요.', 'gasucheoreom noraehaeyo', 'Hát như ca sĩ.']),
      w('만큼', 'mankeum', 'bằng', '', ['저만큼 바빠요.', 'jeomankeum bappayo', 'Bận bằng tôi.']),
      w('품질', 'pumjil', 'chất lượng', '', ['품질이 더 좋아요.', 'pumjiri deo joayo', 'Chất lượng tốt hơn.'])
    ],
    qs: [
      ['mc', '“Laptop này nhẹ hơn cái kia”?', '이 노트북이 저것보다 더 가벼워요.', ['이 노트북보다 저것이 가벼워요.', '이 노트북이 저것더 가벼워요.', '이 노트북이 제일보다 가벼워요.'], 'A이/가 B보다.'],
      ['mc', '“Cái này rẻ nhất”?', '이게 제일 싸요.', ['이게 더 싸요.', '이게 보다 싸요.', '이게 만큼 싸요.'], '제일.'],
      ['mc', '“Nói như người Hàn”?', '한국 사람처럼 말해요.', ['한국 사람보다 말해요.', '한국 사람만큼 말해요.', '한국 사람제일 말해요.'], '처럼.'],
      ['mc', '가볍다 → hiện tại?', '가벼워요', ['가볍어요', '가벼어요', '가뱌워요'], 'ㅂ bất quy tắc.'],
      ['hear', '이 모델이 그 모델보다 조금 비싸지만 품질이 더 좋아요.', 'Mẫu này đắt hơn chút nhưng chất lượng tốt hơn.', ['Rẻ hơn và tốt hơn.', 'Đắt và kém.', 'Giống nhau.'], 'So sánh + -지만.'],
      ['hear', '서울에서 어디가 제일 좋아요?', 'Ở Seoul chỗ nào thích nhất?', ['Seoul có to không?', 'Bạn ở đâu?', 'Seoul hơn Busan?'], '제일.'],
      ['order', 'Sắp xếp: “Lạnh hơn hôm qua.”', ['어제보다', '추워요', '.'], '어제보다 추워요.']
    ],
    noi: [['이게 저것보다 더 가벼워요.', 'ige jeogeotboda deo gabyeowoyo – Cái này nhẹ hơn cái kia.'], ['이게 제일 인기가 많아요.', 'ige jeil ingiga manayo – Cái này được ưa chuộng nhất.'], ['한국 사람처럼 말하고 싶어요.', 'hanguk saramcheoreom malhago sipeoyo – Tôi muốn nói như người Hàn.']],
    hoithoai: {
      ctx: 'Khách Hàn Quốc đến cửa hàng máy tính của em ở TP.HCM.', vai: 'Khách hỏi, em tư vấn.', ai: '🧑 손님',
      luot: [
        T(['이 두 노트북 중에서 뭐가 더 좋아요?', 'i du noteubuk jungeseo mwoga deo joayo?', 'Trong hai laptop này cái nào tốt hơn?'], ['이 노트북이 저것보다 더 가볍고 배터리도 더 오래가요.', 'i noteubugi jeogeotboda deo gabyeopgo baeteorido deo oraegayo', 'Laptop này nhẹ hơn và pin lâu hơn.', 'So sánh.'], ['이게 제일보다 좋아요.', 'ige jeilboda joayo', 'Sai.'], ['다 똑같아요.', 'da ttokgatayo', 'Thiếu tư vấn.']),
        T(['가격은요?', 'gagyeogeunyo?', 'Còn giá?'], ['조금 비싸지만 품질이 훨씬 좋아요.', 'jogeum bissajiman pumjiri hwolssin joayo', 'Đắt hơn chút nhưng chất lượng tốt hơn nhiều.', '-지만 + 훨씬.'], ['더 싸요.', 'deo ssayo', 'Sai thông tin.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['요즘 제일 잘 팔리는 건 뭐예요?', 'yojeum jeil jal pallineun geon mwoyeyo?', 'Dạo này bán chạy nhất là gì?'], ['이 모델이 가장 인기가 많아요.', 'i moderi gajang ingiga manayo', 'Mẫu này được ưa chuộng nhất.', '가장.'], ['이 모델이 더 인기요.', 'i moderi deo ingiyo', 'Sai.'], ['처럼 팔려요.', 'cheoreom pallyeoyo', 'Sai.'])
      ], ket: 'Em đã tư vấn khách Hàn bằng câu so sánh.'
    },
    tom: ['보다 (더)', '제일 / 가장', '처럼 / 만큼'], nguphap: 'So sánh', phatam: '가벼워요 [가벼워요]',
    loi: ['Đặt 보다 sai danh từ'], btvn: ['So sánh 2 sản phẩm 5 câu', 'Viết 3 câu 제일', 'Luyện 🎤 3 câu']
  };

  const d12 = {
    n: 12, ten: plan[11].ten, kinds: K,
    muc: 'Đi khám bệnh và mua thuốc ở Hàn: mô tả triệu chứng, hiểu cách dùng thuốc.',
    hoc: `${tbl(['Mẫu câu', 'Nghĩa'], [['어디가 아프세요?', 'Anh/chị đau ở đâu?'], ['열이 나고 기침을 해요.', 'Tôi sốt và ho.'], ['목이 아파요.', 'Tôi đau họng.'], ['하루에 세 번, 식후 30분에 드세요.', 'Ngày 3 lần, sau ăn 30 phút.'], ['처방전이 있어요?', 'Có đơn thuốc không?']])}
      ${tip('ℹ️ Bài học ngôn ngữ, không phải tư vấn y tế. Khi ốm thật hãy làm theo bác sĩ, dược sĩ.')}`,
    vocab: [
      w('병원', 'byeongwon', 'bệnh viện', '', ['병원에 가야 해요.', 'byeongwone gaya haeyo', 'Phải đi viện.']),
      w('약국', 'yakguk', 'nhà thuốc', '', ['약국이 어디예요?', 'yakgugi eodiyeyo?', 'Nhà thuốc ở đâu?']),
      w('열', 'yeol', 'sốt', '', ['열이 나요.', 'yeori nayo', 'Tôi bị sốt.']),
      w('기침', 'gichim', 'ho', '', ['기침을 해요.', 'gichimeul haeyo', 'Tôi ho.']),
      w('목', 'mok', 'họng, cổ', '', ['목이 아파요.', 'mogi apayo', 'Đau họng.']),
      w('배', 'bae', 'bụng', '', ['배가 아파요.', 'baega apayo', 'Đau bụng.']),
      w('처방전', 'cheobangjeon', 'đơn thuốc', '', ['처방전 주세요.', 'cheobangjeon juseyo', 'Cho tôi đơn thuốc.']),
      w('식후', 'sikhu', 'sau ăn', '', ['식후에 드세요.', 'sikhue deuseyo', 'Uống sau ăn.']),
      w('알레르기', 'allereugi', 'dị ứng', '', ['약 알레르기가 있어요?', 'yak allereugiga isseoyo?', 'Có dị ứng thuốc không?']),
      w('진료', 'jillyo', 'khám bệnh', '', ['진료 시간이 언제예요?', 'jillyo sigani eonjeyeyo?', 'Giờ khám khi nào?'])
    ],
    qs: [
      ['mc', '“Tôi sốt và ho”?', '열이 나고 기침을 해요.', ['열이 하고 기침이 나요.', '열을 나고 기침해요요.', '열 기침 아파요.'], 'Cụm cố định.'],
      ['mc', '식후 nghĩa là?', 'sau ăn', ['trước ăn', 'khi đói', 'buổi tối'], 'sikhu.'],
      ['mc', 'Hỏi nhà thuốc ở đâu?', '약국이 어디예요?', ['병원이 누구예요?', '약이 언제예요?', '약국 몇 개예요?'], 'yakguk.'],
      ['hear', '하루에 세 번, 식후 30분에 드세요.', 'Ngày 3 lần, sau ăn 30 phút.', ['Ngày 2 lần trước ăn.', 'Ngày 3 lần trước ăn.', 'Uống khi đói.'], 'Liều dùng.'],
      ['hear', '어디가 아프세요?', 'Anh/chị đau ở đâu?', ['Anh/chị đi đâu?', 'Anh/chị tên gì?', 'Anh/chị bao nhiêu tuổi?'], '아프세요.'],
      ['hear', '약 알레르기가 있어요?', 'Có dị ứng thuốc không?', ['Có đơn thuốc không?', 'Có sốt không?', 'Có bảo hiểm không?'], '알레르기.'],
      ['order', 'Sắp xếp: “Đau họng.”', ['목이', '아파요', '.'], '목이 아파요.']
    ],
    noi: [['목이 아프고 열이 나요.', 'mogi apeugo yeori nayo – Tôi đau họng và sốt.'], ['약국이 어디예요?', 'yakgugi eodiyeyo? – Nhà thuốc ở đâu?'], ['하루에 몇 번 먹어요?', 'harue myeot beon meogeoyo? – Một ngày uống mấy lần?']],
    hoithoai: {
      ctx: 'Em đi công tác Seoul, bị cảm và vào phòng khám.', vai: 'Bác sĩ hỏi, em trả lời.', ai: '👩‍⚕️ 의사',
      luot: [
        T(['어디가 아프세요?', 'eodiga apeuseyo?', 'Anh đau ở đâu?'], ['목이 아프고 기침을 많이 해요.', 'mogi apeugo gichimeul mani haeyo', 'Tôi đau họng và ho nhiều.', 'Triệu chứng.'], ['목이 기침해요.', 'mogi gichimhaeyo', 'Sai.'], ['안 아파요.', 'an apayo', 'Mâu thuẫn.']),
        T(['열도 나요? 언제부터 아팠어요?', 'yeoldo nayo? eonjebuteo apasseoyo?', 'Có sốt không? Đau từ khi nào?'], ['어제부터 열이 조금 나요.', 'eojebuteo yeori jogeum nayo', 'Từ hôm qua hơi sốt.', 'Thời gian.'], ['내일부터 아플 거예요.', 'naeilbuteo apeul geoyeyo', 'Sai thì.'], ['열을 했어요.', 'yeoreul haesseoyo', 'Sai.']),
        T(['감기예요. 약 알레르기 있어요?', 'gamgiyeyo. yak allereugi isseoyo?', 'Cảm thôi. Có dị ứng thuốc không?'], ['아니요, 없어요. 약은 하루에 몇 번 먹어요?', 'aniyo, eopseoyo. yageun harue myeot beon meogeoyo?', 'Không ạ. Thuốc ngày uống mấy lần?', 'Trả lời + hỏi liều.'], ['네, 감기예요.', 'ne, gamgiyeyo', 'Lạc.'], ['약 안 먹어요.', 'yak an meogeoyo', 'Không hợp.'])
      ], ket: 'Em đã khám bệnh và hỏi liều dùng bằng tiếng Hàn.'
    },
    tom: ['열이 나다 / 기침을 하다 / N이 아프다', '식후 / 처방전 / 알레르기'], nguphap: 'Ngôn ngữ y tế cơ bản', phatam: '약국 [약꾹], 식후 [시쿠]',
    loi: ['열을 하다 (sai)'], btvn: ['Viết hội thoại phòng khám 8 lượt', 'Học thuộc 10 từ bộ phận cơ thể', 'Luyện 🎤 3 câu']
  };

  const d13 = {
    n: 13, ten: plan[12].ten, kinds: K,
    muc: 'Giao dịch ngân hàng ở Hàn: mở tài khoản, đổi tiền, chuyển khoản, rút tiền ATM.',
    hoc: `${tbl(['Mẫu câu', 'Nghĩa'], [['통장을 만들고 싶어요.', 'Tôi muốn mở tài khoản.'], ['달러를 원화로 바꾸고 싶어요.', 'Tôi muốn đổi đô sang won.'], ['오늘 환율이 얼마예요?', 'Tỷ giá hôm nay bao nhiêu?'], ['송금하고 싶어요.', 'Tôi muốn chuyển tiền.'], ['외국인등록증 있으세요?', 'Có thẻ người nước ngoài không?']])}
      ${tip('⚠️ Nhân viên ngân hàng thật <b>không bao giờ</b> hỏi mật khẩu (비밀번호) hay mã OTP qua điện thoại.')}`,
    vocab: [
      w('통장', 'tongjang', 'sổ tài khoản', '', ['통장을 만들어요.', 'tongjangeul mandeureoyo', 'Mở tài khoản.']),
      w('환율', 'hwanyul', 'tỷ giá', '', ['환율이 얼마예요?', 'hwanyuri eolmayeyo?', 'Tỷ giá bao nhiêu?']),
      w('바꾸다', 'bakkuda', 'đổi', '', ['돈을 바꾸고 싶어요.', 'doneul bakkugo sipeoyo', 'Tôi muốn đổi tiền.']),
      w('송금', 'songgeum', 'chuyển tiền', '', ['베트남으로 송금해요.', 'Beteunameuro songgeumhaeyo', 'Chuyển tiền về Việt Nam.']),
      w('수수료', 'susuryo', 'phí', '', ['수수료가 얼마예요?', 'susuryoga eolmayeyo?', 'Phí bao nhiêu?']),
      w('비밀번호', 'bimilbeonho', 'mật khẩu', '', ['비밀번호를 누르세요.', 'bimilbeonhoreul nureuseyo', 'Nhập mật khẩu.']),
      w('외국인등록증', 'oegugin deungnokjeung', 'thẻ đăng ký người nước ngoài', '', ['외국인등록증 보여 주세요.', 'oegugin deungnokjeung boyeo juseyo', 'Cho xem thẻ người nước ngoài.']),
      w('현금', 'hyeongeum', 'tiền mặt', '', ['현금으로 주세요.', 'hyeongeumeuro juseyo', 'Cho tôi tiền mặt.']),
      w('찾다', 'chatda', 'rút (tiền); tìm', '', ['돈을 찾고 싶어요.', 'doneul chatgo sipeoyo', 'Tôi muốn rút tiền.']),
      w('서명', 'seomyeong', 'chữ ký', '', ['여기에 서명해 주세요.', 'yeogie seomyeonghae juseyo', 'Ký vào đây.'])
    ],
    qs: [
      ['mc', '“Tôi muốn đổi đô sang won”?', '달러를 원화로 바꾸고 싶어요.', ['원화를 달러로 바꾸고 싶어요.', '달러가 원화 바꿔요.', '달러로 원화를 송금해요.'], 'A를 B로 바꾸다.'],
      ['mc', '수수료 nghĩa là?', 'phí', ['lãi suất', 'tỷ giá', 'tiền mặt'], 'susuryo.'],
      ['mc', 'Ai đó gọi điện xin 비밀번호 của bạn, nên?', 'Cúp máy, gọi tổng đài chính thức', ['Cho ngay', 'Cho nửa mật khẩu', 'Gửi qua tin nhắn'], 'An toàn.'],
      ['hear', '베트남으로 송금하고 싶어요. 수수료가 얼마예요?', 'Tôi muốn chuyển tiền về VN. Phí bao nhiêu?', ['Đổi tiền mặt.', 'Mở tài khoản.', 'Rút tiền.'], '송금.'],
      ['hear', '여기에 서명해 주세요.', 'Xin ký vào đây.', ['Nhập mật khẩu.', 'Đợi ở ghế.', 'Đổi tiền.'], '서명.'],
      ['hear', '오늘 환율은 1달러에 1,350원이에요.', 'Hôm nay 1 đô = 1.350 won.', ['1 đô = 1.530 won.', '1 đô = 135 won.', '1 đô = 13.500 won.'], 'Nghe số. (minh hoạ)'],
      ['order', 'Sắp xếp: “Tôi muốn rút tiền.”', ['돈을', '찾고', '싶어요', '.'], '돈을 찾고 싶어요.']
    ],
    noi: [['통장을 만들고 싶어요.', 'tongjangeul mandeulgo sipeoyo – Tôi muốn mở tài khoản.'], ['오늘 환율이 얼마예요?', 'oneul hwanyuri eolmayeyo? – Tỷ giá hôm nay bao nhiêu?'], ['베트남으로 송금하고 싶어요.', 'Beteunameuro songgeumhago sipeoyo – Tôi muốn chuyển tiền về Việt Nam.']],
    hoithoai: {
      ctx: 'Em là giao dịch viên chi nhánh ngân hàng có khách Hàn; khách muốn chuyển tiền.', vai: 'Khách hỏi, em phục vụ.', ai: '🧑‍💼 손님',
      luot: [
        T(['한국으로 송금하고 싶어요.', 'hangugeuro songgeumhago sipeoyo', 'Tôi muốn chuyển tiền về Hàn.'], ['네, 여권 보여 주시겠어요?', 'ne, yeogwon boyeo jusigesseoyo?', 'Vâng, anh cho xem hộ chiếu được không?', 'Thủ tục.'], ['비밀번호 알려 주세요.', 'bimilbeonho allyeo juseyo', 'Không bao giờ hỏi mật khẩu!'], ['송금 못 해.', 'songgeum mot hae', 'Trống không.']),
        T(['여기요. 수수료가 얼마예요?', 'yeogiyo. susuryoga eolmayeyo?', 'Đây. Phí bao nhiêu?'], ['송금 수수료는 금액에 따라 달라요. 이 표를 보세요.', 'songgeum susuryoneun geumaege ttara dallayo. i pyoreul boseyo', 'Phí tuỳ số tiền. Anh xem bảng này.', 'Minh bạch.'], ['몰라요.', 'mollayo', 'Thiếu chuyên nghiệp.'], ['수수료 없어요.', 'susuryo eopseoyo', 'Có thể sai.']),
        T(['알겠어요. 오백만 동 보낼게요.', 'algesseoyo. obaengman dong bonaelgeyo', 'Hiểu rồi. Tôi gửi 5 triệu đồng.'], ['네, 여기에 서명해 주세요. 잠깐만 기다리세요.', 'ne, yeogie seomyeonghae juseyo. jamkkanman gidariseyo', 'Vâng, xin ký vào đây. Xin đợi chút.', 'Hoàn tất.'], ['오십만 동이요?', 'osimman dongiyo?', 'Nghe nhầm.'], ['서명하지 마세요.', 'seomyeonghaji maseyo', 'Sai.'])
      ], ket: 'Em đã phục vụ khách Hàn chuyển tiền chuyên nghiệp.'
    },
    tom: ['통장 / 환율 / 송금 / 수수료', 'A를 B로 바꾸다', 'Không hỏi 비밀번호'], nguphap: 'Ngôn ngữ ngân hàng', phatam: '환율 [화뉼], 송금 [송금]',
    loi: ['Hỏi mật khẩu khách', 'Nghe nhầm 만'], btvn: ['Đóng vai mở tài khoản 8 lượt', 'Đọc to 10 số tiền theo 만', 'Luyện 🎤 3 câu']
  };

  const d14 = {
    n: 14, ten: plan[13].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Ôn giai đoạn 2: -고 있다, định ngữ, lý do, điều kiện, thử, so sánh, bệnh viện, ngân hàng.',
    hoc: `<h4>Tóm tắt tuần 2</h4>${tbl(['Chủ điểm', 'Mẫu'], [['Đang / định ngữ', '-고 있다; -는/-(으)ㄴ/-(으)ㄹ + N'], ['Lý do', '-(으)니까, -기 때문에, N 때문에'], ['Điều kiện, thử', '-(으)면, -아/어 보다'], ['So sánh', '보다 더, 제일, 처럼, 만큼'], ['Bệnh viện', '열이 나다, 기침을 하다, 식후'], ['Ngân hàng', '통장, 환율, 송금, 수수료']])}`,
    qs: [['mc', '비가 오___ 우산을 가져가세요.', '니까', ['아서', '지만', '고'], 'Mệnh lệnh → 니까.'], ['mc', '“phim đã xem hôm qua”?', '어제 본 영화', ['어제 보는 영화', '어제 볼 영화', '어제 보고 영화'], 'Định ngữ quá khứ.']],
    noi: [['이게 제일 싸요.', 'ige jeil ssayo – Cái này rẻ nhất.'], ['시간이 있으면 같이 가요.', 'sigani isseumyeon gachi gayo – Có thời gian thì đi cùng.']],
    hoithoai: {
      ctx: 'Tổng ôn: tuần đầu sống ở Seoul.', vai: 'Bạn Hàn hỏi, em trả lời.', ai: '👨 준호',
      luot: [
        T(['한국 생활 어때요?', 'hanguk saenghwal eottaeyo?', 'Cuộc sống ở Hàn thế nào?'], ['베트남보다 춥지만 정말 재미있어요.', 'Beteunamboda chupjiman jeongmal jaemiisseoyo', 'Lạnh hơn VN nhưng thật thú vị.', 'So sánh + -지만.'], ['베트남이 춥워요.', 'Beteunami chuwoyo', 'Sai.'], ['재미없어서 좋아요.', 'jaemieopseoseo joayo', 'Mâu thuẫn.']),
        T(['한국 음식 먹어 봤어요?', 'hanguk eumsik meogeo bwasseoyo?', 'Ăn thử đồ Hàn chưa?'], ['네, 어제 먹은 삼계탕이 제일 맛있었어요.', 'ne, eoje meogeun samgyetangi jeil masisseosseoyo', 'Rồi, gà hầm sâm ăn hôm qua ngon nhất.', 'Định ngữ + 제일.'], ['먹는 삼계탕 맛있었어요.', 'meongneun samgyetang masisseosseoyo', 'Sai thì.'], ['안 먹어 볼게요.', 'an meogeo bolgeyo', 'Lạc.']),
        T(['감기 조심하세요. 요즘 추우니까요.', 'gamgi josimhaseyo. yojeum chuunikkayo', 'Cẩn thận cảm nhé, dạo này lạnh.'], ['고마워요. 그래서 따뜻한 옷을 사러 갈 거예요.', 'gomawoyo. geuraeseo ttatteuthan oseul sareo gal geoyeyo', 'Cảm ơn. Vì vậy tôi sẽ đi mua áo ấm.', 'Kết hợp.'], ['감기 때문 사요.', 'gamgi ttaemun sayo', 'Sai.'], ['추워서 가세요.', 'chuwoseo gaseyo', 'Sai.'])
      ], ket: 'Em đã ôn trọn giai đoạn 2!'
    },
    tom: ['Ôn tuần 2', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn', phatam: 'Ôn biến âm ㅎ',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: học lại ngày yếu', 'Làm ⚡ Luyện nhanh', 'Viết nhật ký một ngày ở Hàn 120 chữ']
  };

  window.PLT_KO2 = { plan, stages, H: { w, L, T, tbl, tip, exs, sp, K }, days: [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14] };
})();

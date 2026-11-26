/* PLT-Edu · Tiếng Hàn – Cấp 3 (TOPIK II · cấp 3): lộ trình 30 ngày, Ngày 1–14 */
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
    'Đuôi -는데: bối cảnh và tương phản', 'Câu gián tiếp trần thuật: -다고 하다', 'Gián tiếp câu hỏi, mệnh lệnh, rủ rê', 'Phỏng đoán: -(으)ㄹ 것 같다, -나 보다', 'Trở nên và khiến: -게 되다, -게 하다', 'Câu bị động', 'Ôn tập tuần 1 và kiểm tra',
    'Không những… mà còn: -(으)ㄹ 뿐만 아니라', 'Thời gian: -는 동안, -기 전에, -(으)ㄴ 후에', 'Hồi tưởng: -더라고요', 'Khuynh hướng và đáng: -는 편이다, -(으)ㄹ 만하다', 'Viết TOPIK II câu 51–52', 'Báo cáo và họp ở công ty Hàn', 'Ôn tập tuần 2 và kiểm tra',
    'Tin tức và xã hội', 'Môi trường', 'Văn hoá Hàn: K-pop, phim, 정', 'Giáo dục Hàn Quốc', 'Kinh tế và tiêu dùng', 'Công nghệ và đời sống số', 'Kiểm tra tổng hợp và mô phỏng',
    'Viết TOPIK II câu 53: mô tả biểu đồ', 'Viết đoạn văn nêu ý kiến', 'Thuyết trình ngắn', 'Khiếu nại và giải quyết vấn đề', 'Phỏng vấn xin việc', 'Đọc hiểu đoạn dài TOPIK II', 'Nghe hiểu TOPIK II', 'Mô phỏng tình huống liên tục', 'Kiểm tra cuối khoá TOPIK II cấp 3 và lộ trình cấp 4'
  ].map((ten, i) => ({ n: i + 1, ten }));
  const stages = [
    { ten: '🧩 Giai đoạn 1 – Ngữ pháp trung cấp trọng tâm', tu: 1, den: 7 }, { ten: '✍️ Giai đoạn 2 – Diễn đạt và viết', tu: 8, den: 14 },
    { ten: '📰 Giai đoạn 3 – Xã hội và chủ đề TOPIK', tu: 15, den: 21 }, { ten: '🎯 Giai đoạn 4 – Kỹ năng thi TOPIK II', tu: 22, den: 30 }
  ];

  const d1 = {
    n: 1, ten: plan[0].ten, kinds: K,
    muc: 'Dùng -는데 / -(으)ㄴ데 để nêu bối cảnh trước khi đề nghị, hỏi, hoặc nối hai ý tương phản.',
    hoc: `${tbl(['Chức năng', 'Ví dụ'], [['Bối cảnh → đề nghị', '비가 오는데 우산 있어요?'], ['Bối cảnh → hỏi', '이 근처에 사는데 맛집 좀 추천해 주세요.'], ['Tương phản', '형은 키가 큰데 저는 작아요.'], ['Kết câu mềm (-는데요)', '지금 회의 중인데요…']])}
      ${tip('🔑 Động từ + <b>는데</b>; tính từ có patchim + <b>은데</b>, không patchim + <b>ㄴ데</b>; 이다 → <b>인데</b>.')}`,
    vocab: [
      w('근처', 'geuncheo', 'gần đây', '', ['이 근처에 은행 있어요?', 'i geuncheoe eunhaeng isseoyo?', 'Gần đây có ngân hàng không?']),
      w('추천하다', 'chucheonhada', 'giới thiệu', '', ['좋은 책 좀 추천해 주세요.', 'joeun chaek jom chucheonhae juseyo', 'Giới thiệu sách hay giúp.']),
      w('부탁하다', 'butakhada', 'nhờ', '', ['부탁이 있는데요.', 'butagi inneundeyo', 'Tôi có việc muốn nhờ.']),
      w('사실', 'sasil', 'thật ra, sự thật', '', ['사실은 잘 모르는데요.', 'sasireun jal moreuneundeyo', 'Thật ra tôi không rõ lắm.']),
      w('키', 'ki', 'chiều cao', '', ['키가 커요.', 'kiga keoyo', 'Cao.']),
      w('복잡하다', 'bokjaphada', 'phức tạp, đông đúc', '', ['지하철이 복잡한데 택시 탈까요?', 'jihacheori bokjaphande taeksi talkkayo?', 'Tàu đông, đi taxi nhé?']),
      w('혹시', 'hoksi', 'liệu, có khi nào', '', ['혹시 시간 있어요?', 'hoksi sigan isseoyo?', 'Liệu bạn có rảnh không?']),
      w('궁금하다', 'gunggeumhada', 'tò mò, muốn biết', '', ['궁금한 게 있는데요.', 'gunggeumhan ge inneundeyo', 'Tôi có điều thắc mắc.']),
      w('대신', 'daesin', 'thay vì, thay cho', '', ['제가 대신 갈게요.', 'jega daesin galgeyo', 'Tôi đi thay.']),
      w('반면', 'banmyeon', 'ngược lại', '', ['반면에 단점도 있어요.', 'banmyeone danjeomdo isseoyo', 'Ngược lại cũng có nhược điểm.'])
    ],
    qs: [
      ['mc', '“Trời mưa, bạn có ô không?”', '비가 오는데 우산 있어요?', ['비가 와서 우산 있어요?', '비가 오고 우산 있어요?', '비가 온데 우산 있어요?'], 'Bối cảnh → hỏi: -는데.'],
      ['mc', 'Tính từ 크다 + 데?', '큰데', ['크는데', '컸는데요요', '크은데'], 'Tính từ không patchim + ㄴ데.'],
      ['mc', '학생 (이다) + 데?', '학생인데', ['학생는데', '학생은데', '학생한데'], '이다 → 인데.'],
      ['mc', '궁금하다 nghĩa là?', 'tò mò, muốn biết', ['buồn chán', 'lo lắng', 'bận rộn'], 'gunggeumhada.'],
      ['hear', '부탁이 있는데요, 이 서류 좀 봐 주실 수 있어요?', 'Tôi có việc nhờ, anh xem giúp giấy tờ này được không?', ['Tôi không cần giúp.', 'Tôi sẽ xem giấy tờ.', 'Giấy tờ mất rồi.'], 'Bối cảnh → nhờ.'],
      ['hear', '형은 운동을 잘하는데 저는 못해요.', 'Anh trai giỏi thể thao còn tôi thì không.', ['Cả hai đều giỏi.', 'Tôi giỏi hơn anh.', 'Anh trai không chơi.'], 'Tương phản.'],
      ['order', 'Sắp xếp: “Tôi có điều thắc mắc.”', ['궁금한', '게', '있는데요', '.'], '궁금한 게 있는데요.']
    ],
    noi: [['부탁이 있는데요.', 'butagi inneundeyo – Tôi có việc muốn nhờ.'], ['이 근처에 사는데 맛집 좀 추천해 주세요.', 'i geuncheoe saneunde matjip jom chucheonhae juseyo – Tôi sống gần đây, giới thiệu quán ngon giúp.'], ['지금 회의 중인데요.', 'jigeum hoeui jungindeyo – Bây giờ tôi đang họp ạ.']],
    hoithoai: {
      ctx: 'Em cần nhờ đồng nghiệp Hàn xem giúp hợp đồng bằng tiếng Hàn.', vai: 'Đồng nghiệp đáp, em nhờ khéo.', ai: '👩 서연',
      luot: [
        T(['민 씨, 무슨 일이에요?', 'Min ssi, museun irieyo?', 'Minh, có việc gì vậy?'], ['바쁘신데 죄송해요. 부탁이 하나 있는데요.', 'bappeusinde joesonghaeyo. butagi hana inneundeyo', 'Xin lỗi chị đang bận. Em có một việc muốn nhờ.', '-는데 mềm.'], ['이거 해.', 'igeo hae', 'Ra lệnh.'], ['바빠서 부탁해요.', 'bappaseo butakhaeyo', 'Sai nghĩa.']),
        T(['네, 말해 보세요.', 'ne, malhae boseyo', 'Ừ, nói đi.'], ['계약서를 썼는데 표현이 맞는지 봐 주실 수 있어요?', 'gyeyakseoreul sseonneunde pyohyeoni manneunji bwa jusil su isseoyo?', 'Em viết hợp đồng, chị xem giúp cách diễn đạt đúng không?', 'Bối cảnh + nhờ.'], ['계약서예요.', 'gyeyakseoyeyo', 'Thiếu.'], ['다 맞아요.', 'da majayo', 'Lạc.']),
        T(['그래요. 오후에 봐 줄게요.', 'geuraeyo. ohue bwa julgeyo', 'Được. Chiều chị xem cho.'], ['정말 감사해요. 대신 제가 커피 살게요!', 'jeongmal gamsahaeyo. daesin jega keopi salgeyo!', 'Cảm ơn chị. Đổi lại em mời cà phê!', 'Đáp lễ.'], ['빨리 봐요.', 'ppalli bwayo', 'Thúc ép.'], ['안 봐도 돼요.', 'an bwado dwaeyo', 'Mâu thuẫn.'])
      ], ket: 'Em đã nhờ việc khéo léo bằng -는데.'
    },
    tom: ['-는데 / -(으)ㄴ데 / 인데', 'Bối cảnh → đề nghị, tương phản'], nguphap: 'Đuôi -는데', phatam: '있는데 [인는데]',
    loi: ['Nhầm động từ/tính từ khi chia -는데'], btvn: ['Viết 6 câu nhờ vả có -는데', 'Viết 3 câu tương phản', 'Luyện 🎤 3 câu']
  };

  const d2 = {
    n: 2, ten: plan[1].ten, kinds: K,
    muc: 'Thuật lại lời người khác: V-ㄴ/는다고 하다, A-다고 하다, N(이)라고 하다; dạng rút gọn -대요.',
    hoc: `${tbl(['Loại', 'Gián tiếp', 'Rút gọn'], [['Động từ', '간다고 했어요 / 먹는다고 했어요', '간대요 / 먹는대요'], ['Tính từ', '바쁘다고 했어요', '바쁘대요'], ['Danh từ', '학생이라고 했어요', '학생이래요'], ['Quá khứ', '갔다고 했어요', '갔대요'], ['Tương lai', '갈 거라고 했어요', '갈 거래요']])}`,
    vocab: [
      w('뉴스', 'nyuseu', 'tin tức', '', ['뉴스에서 봤는데요.', 'nyuseueseo bwanneundeyo', 'Tôi xem trên tin tức.']),
      w('전하다', 'jeonhada', 'chuyển lời', '', ['말씀 전해 드릴게요.', 'malsseum jeonhae deurilgeyo', 'Tôi sẽ chuyển lời.']),
      w('들었다', 'deureotda', 'đã nghe (nói)', '', ['소식 들었어요?', 'sosik deureosseoyo?', 'Nghe tin chưa?']),
      w('소식', 'sosik', 'tin tức', '', ['좋은 소식이 있어요.', 'joeun sosigi isseoyo', 'Có tin vui.']),
      w('결혼하다', 'gyeolhonhada', 'kết hôn', '', ['다음 달에 결혼한대요.', 'daeum dare gyeolhonhandaeyo', 'Nghe nói tháng sau cưới.']),
      w('승진하다', 'seungjinhada', 'thăng chức', '', ['과장님이 승진했대요.', 'gwajangnimi seungjinhaetdaeyo', 'Nghe nói trưởng bộ phận thăng chức.']),
      w('취소되다', 'chwisodoeda', 'bị huỷ', '', ['회의가 취소됐대요.', 'hoeuiga chwisodwaetdaeyo', 'Nghe nói họp bị huỷ.']),
      w('연기되다', 'yeongidoeda', 'bị hoãn', '', ['행사가 연기됐대요.', 'haengsaga yeongidwaetdaeyo', 'Nghe nói sự kiện bị hoãn.']),
      w('소문', 'somun', 'tin đồn', '', ['소문이 사실이에요?', 'somuni sasirieyo?', 'Tin đồn là thật à?']),
      w('발표하다', 'balpyohada', 'công bố; thuyết trình', '', ['회사가 발표했대요.', 'hoesaga balpyohaetdaeyo', 'Nghe nói công ty đã công bố.'])
    ],
    qs: [
      ['mc', 'Trưởng phòng nói “내일 바빠요” → gián tiếp?', '부장님이 내일 바쁘다고 했어요.', ['부장님이 내일 바쁜다고 했어요.', '부장님이 내일 바빠라고 했어요.', '부장님이 바쁘냐고 했어요.'], 'Tính từ + 다고.'],
      ['mc', '먹다 → gián tiếp hiện tại?', '먹는다고', ['먹다고', '먹ㄴ다고', '먹는대고'], 'Động từ có patchim + 는다고.'],
      ['mc', '학생이에요 → gián tiếp?', '학생이라고 해요', ['학생다고 해요', '학생이다고 해요', '학생인다고 해요'], 'N(이)라고.'],
      ['mc', '연기되다 nghĩa là?', 'bị hoãn', ['diễn kịch', 'bị huỷ', 'kéo dài'], 'yeongidoeda.'],
      ['hear', '오늘 회의가 취소됐대요.', 'Nghe nói họp hôm nay bị huỷ.', ['Họp hôm nay vẫn diễn ra.', 'Họp bị hoãn sang mai.', 'Tôi huỷ họp.'], '-대요 = nghe nói.'],
      ['hear', '김 과장님이 다음 달에 결혼한대요.', 'Nghe nói trưởng bộ phận Kim tháng sau cưới.', ['Đã cưới tháng trước.', 'Không cưới.', 'Tôi sẽ cưới.'], 'Rút gọn.'],
      ['order', 'Sắp xếp: “Tôi sẽ chuyển lời.”', ['말씀', '전해', '드릴게요', '.'], '말씀 전해 드릴게요.']
    ],
    noi: [['회의가 취소됐대요.', 'hoeuiga chwisodwaetdaeyo – Nghe nói họp bị huỷ.'], ['부장님이 내일 바쁘다고 하셨어요.', 'bujangnimi naeil bappeudago hasyeosseoyo – Trưởng phòng nói mai bận.'], ['말씀 전해 드릴게요.', 'malsseum jeonhae deurilgeyo – Tôi sẽ chuyển lời.']],
    hoithoai: {
      ctx: 'Em vắng mặt buổi sáng; đồng nghiệp Hàn kể lại thông báo.', vai: 'Em hỏi, bạn kể; lượt này em thuật lại cho người khác.', ai: '👨 준영',
      luot: [
        T(['아까 부장님이 뭐라고 하셨어요?', 'akka bujangnimi mworago hasyeosseoyo?', 'Lúc nãy trưởng phòng nói gì vậy?'], ['다음 주 회의가 연기됐다고 하셨어요.', 'daeum ju hoeuiga yeongidwaetdago hasyeosseoyo', 'Ông ấy nói họp tuần sau bị hoãn.', 'Gián tiếp quá khứ + kính ngữ.'], ['회의 연기해.', 'hoeui yeongihae', 'Không phải gián tiếp.'], ['연기됐냐고 했어요.', 'yeongidwaennyago haesseoyo', 'Sai: đó là câu hỏi.']),
        T(['또 다른 소식은요?', 'tto dareun sosigeunyo?', 'Còn tin gì khác không?'], ['이 대리님이 과장으로 승진했대요.', 'I daerinimi gwajangeuro seungjinhaetdaeyo', 'Nghe nói trợ lý Lee lên trưởng bộ phận.', 'Rút gọn -대요.'], ['승진한대요 했어요.', 'seungjinhandaeyo haesseoyo', 'Lặp.'], ['승진했어?', 'seungjinhaesseo?', 'Hỏi ngược.']),
        T(['와, 축하할 일이네요!', 'wa, chukhahal irineyo!', 'Ồ, đáng chúc mừng!'], ['네, 오늘 저녁에 다 같이 축하하자고 했어요.', 'ne, oneul jeonyeoge da gachi chukhahajago haesseoyo', 'Vâng, mọi người rủ tối nay cùng chúc mừng.', 'Gián tiếp rủ rê (preview).'], ['축하하세요.', 'chukhahaseyo', 'Lạc.'], ['몰라요.', 'mollayo', 'Thiếu.'])
      ], ket: 'Em đã thuật lại thông tin bằng câu gián tiếp.'
    },
    tom: ['V-ㄴ/는다고 / A-다고 / N(이)라고', 'Rút gọn -대요 / -래요'], nguphap: 'Gián tiếp trần thuật', phatam: '먹는대요 [멍는대요]',
    loi: ['Chia động từ như tính từ khi gián tiếp'], btvn: ['Thuật lại 5 câu nói của sếp', 'Kể 3 tin nghe được bằng -대요', 'Luyện 🎤 3 câu']
  };

  const d3 = {
    n: 3, ten: plan[2].ten, kinds: K,
    muc: 'Gián tiếp câu hỏi -냐고, mệnh lệnh -(으)라고, rủ rê -자고, nhờ -아/어 달라고.',
    hoc: `${tbl(['Loại câu gốc', 'Gián tiếp', 'Ví dụ'], [['Câu hỏi', '-냐고 하다', '어디 가냐고 물었어요.'], ['Mệnh lệnh', '-(으)라고 하다', '빨리 오라고 했어요.'], ['Rủ rê', '-자고 하다', '같이 가자고 했어요.'], ['Nhờ (cho tôi)', '-아/어 달라고 하다', '도와 달라고 했어요.'], ['Nhờ (cho người khác)', '-아/어 주라고 하다', '동생을 도와주라고 했어요.']])}`,
    vocab: [
      w('묻다', 'mutda', 'hỏi', 'Bất quy tắc ㄷ: 물어요.', ['이름을 물었어요.', 'ireumeul mureosseoyo', 'Đã hỏi tên.']),
      w('시키다', 'sikida', 'sai bảo; gọi món', '', ['부장님이 시킨 일', 'bujangnimi sikin il', 'việc trưởng phòng giao']),
      w('달라고', 'dallago', '(nhờ) cho tôi', '', ['돈을 빌려 달라고 했어요.', 'doneul billyeo dallago haesseoyo', 'Anh ấy nhờ cho mượn tiền.']),
      w('제안하다', 'jeanhada', 'đề xuất', '', ['같이 하자고 제안했어요.', 'gachi hajago jeanhaesseoyo', 'Đề xuất làm cùng.']),
      w('요청하다', 'yocheonghada', 'yêu cầu', '', ['자료를 요청했어요.', 'jaryoreul yocheonghaesseoyo', 'Đã yêu cầu tài liệu.']),
      w('서두르다', 'seodureuda', 'vội vàng', '', ['서두르라고 했어요.', 'seodureurago haesseoyo', 'Bảo nhanh lên.']),
      w('조용히', 'joyonghi', 'yên lặng', '', ['조용히 하라고 했어요.', 'joyonghi harago haesseoyo', 'Bảo giữ yên lặng.']),
      w('제출하다', 'jechulhada', 'nộp', '', ['오늘까지 제출하라고 했어요.', 'oneulkkaji jechulharago haesseoyo', 'Bảo nộp trước hôm nay.']),
      w('미리', 'miri', 'trước', '', ['미리 연락하라고 했어요.', 'miri yeollakharago haesseoyo', 'Bảo liên lạc trước.']),
      w('왜', 'wae', 'tại sao', '', ['왜 늦었냐고 물었어요.', 'wae neujeonnyago mureosseoyo', 'Hỏi sao đến muộn.'])
    ],
    qs: [
      ['mc', '“Viết lại: sếp bảo 빨리 오세요”', '사장님이 빨리 오라고 하셨어요.', ['사장님이 빨리 온다고 하셨어요.', '사장님이 빨리 오냐고 하셨어요.', '사장님이 빨리 오자고 하셨어요.'], 'Mệnh lệnh → -(으)라고.'],
      ['mc', 'Bạn hỏi “어디 가요?” → gián tiếp?', '친구가 어디 가냐고 물었어요.', ['친구가 어디 간다고 물었어요.', '친구가 어디 가라고 물었어요.', '친구가 어디 가자고 물었어요.'], 'Câu hỏi → -냐고.'],
      ['mc', 'Bạn nói “같이 가요!” (rủ) → gián tiếp?', '친구가 같이 가자고 했어요.', ['친구가 같이 가라고 했어요.', '친구가 같이 가냐고 했어요.', '친구가 같이 간다고 했어요.'], 'Rủ → -자고.'],
      ['mc', 'Người khác nhờ “도와주세요” (giúp tôi) → gián tiếp?', '도와 달라고 했어요.', ['도와주라고 했어요.', '도와주냐고 했어요.', '도와주자고 했어요.'], 'Nhờ cho chính người nói → 달라고.'],
      ['hear', '부장님이 보고서를 오늘까지 제출하라고 하셨어요.', 'Trưởng phòng bảo nộp báo cáo trước hôm nay.', ['Nộp tuần sau.', 'Không cần nộp.', 'Trưởng phòng sẽ nộp.'], '-라고.'],
      ['hear', '손님이 영수증을 다시 보내 달라고 하셨어요.', 'Khách nhờ gửi lại hoá đơn.', ['Khách gửi hoá đơn.', 'Khách hỏi có hoá đơn không.', 'Khách không cần.'], '-아 달라고.'],
      ['order', 'Sắp xếp: “Đã yêu cầu tài liệu.”', ['자료를', '요청했어요', '.'], '자료를 요청했어요.']
    ],
    noi: [['부장님이 빨리 오라고 하셨어요.', 'bujangnimi ppalli orago hasyeosseoyo – Trưởng phòng bảo đến nhanh.'], ['친구가 같이 가자고 했어요.', 'chinguga gachi gajago haesseoyo – Bạn rủ đi cùng.'], ['손님이 도와 달라고 하셨어요.', 'sonnimi dowa dallago hasyeosseoyo – Khách nhờ giúp.']],
    hoithoai: {
      ctx: 'Em chuyển lời giữa trưởng phòng Hàn và đồng nghiệp Việt.', vai: 'Đồng nghiệp hỏi, em thuật lại.', ai: '👩 Lan (đồng nghiệp)',
      luot: [
        T(['부장님이 뭐라고 하셨어?', 'bujangnimi mworago hasyeosseo?', 'Trưởng phòng nói gì vậy?'], ['보고서를 금요일까지 제출하라고 하셨어요.', 'bogoseoreul geumyoilkkaji jechulharago hasyeosseoyo', 'Bảo nộp báo cáo trước thứ Sáu.', 'Mệnh lệnh gián tiếp.'], ['제출한다고 하셨어요.', 'jechulhandago hasyeosseoyo', 'Sai: thành trần thuật.'], ['제출하자고 했어요.', 'jechulhajago haesseoyo', 'Sai: thành rủ.']),
        T(['다른 건?', 'dareun geon?', 'Còn gì nữa?'], ['우리 팀이 몇 명이냐고 물어보셨어요.', 'uri timi myeot myeong-inyago mureobosyeosseoyo', 'Ông hỏi nhóm mình có mấy người.', 'Câu hỏi gián tiếp với 이다.'], ['몇 명이라고 하셨어요.', 'myeot myeongirago hasyeosseoyo', 'Sai: thành trần thuật.'], ['몇 명 오라고 했어요.', 'myeot myeong orago haesseoyo', 'Sai nghĩa.']),
        T(['알겠어. 또?', 'algesseo. tto?', 'Hiểu. Còn nữa?'], ['저녁에 같이 회식하자고 하셨어요.', 'jeonyeoge gachi hoesikhajago hasyeosseoyo', 'Ông rủ tối nay cùng liên hoan.', 'Rủ gián tiếp.'], ['회식하라고 하셨어요.', 'hoesikharago hasyeosseoyo', 'Sai sắc thái.'], ['회식했냐고요.', 'hoesikhaennyagoyo', 'Sai.'])
      ], ket: 'Em đã chuyển lời chính xác từng loại câu.'
    },
    tom: ['-냐고 / -(으)라고 / -자고 / -아 달라고'], nguphap: 'Gián tiếp các loại câu', phatam: '가냐고 [가냐고]',
    loi: ['Nhầm 달라고 và 주라고', 'Nhầm -라고 và -다고'], btvn: ['Chuyển 8 câu trực tiếp sang gián tiếp', 'Thuật lại 1 cuộc họp 6 câu', 'Luyện 🎤 3 câu']
  };

  const d4 = {
    n: 4, ten: plan[3].ten, kinds: K,
    muc: 'Phỏng đoán: -(으)ㄹ 것 같다 (có lẽ), -(으)ㄴ/는 것 같다 (hình như), -나 보다 / -(으)ㄴ가 보다 (chắc là – dựa trên quan sát).',
    hoc: `${tbl(['Cấu trúc', 'Dùng khi', 'Ví dụ'], [['-(으)ㄹ 것 같다', 'đoán tương lai, nói mềm', '비가 올 것 같아요.'], ['-는 것 같다', 'hình như (đang)', '밖에 비가 오는 것 같아요.'], ['-(으)ㄴ 것 같다', 'hình như (đã)', '벌써 간 것 같아요.'], ['-나 보다', 'chắc là (thấy dấu hiệu)', '불이 꺼졌네요. 퇴근했나 봐요.']])}
      ${tip('🔑 Người Hàn dùng <b>-것 같아요</b> để nói ý kiến mềm mỏng: 이 방법이 더 좋은 것 같아요.')}`,
    vocab: [
      w('것 같다', 'geot gatda', 'có vẻ, hình như', '', ['맛있는 것 같아요.', 'masinneun geot gatayo', 'Có vẻ ngon.']),
      w('벌써', 'beolsseo', 'đã… rồi', '', ['벌써 끝났나 봐요.', 'beolsseo kkeunnanna bwayo', 'Chắc là xong rồi.']),
      w('불', 'bul', 'đèn; lửa', '', ['불이 꺼졌어요.', 'buri kkeojyeosseoyo', 'Đèn tắt rồi.']),
      w('꺼지다', 'kkeojida', 'tắt', '', ['컴퓨터가 꺼졌어요.', 'keompyuteoga kkeojyeosseoyo', 'Máy tính tắt rồi.']),
      w('표정', 'pyojeong', 'nét mặt', '', ['표정이 안 좋아요.', 'pyojeongi an joayo', 'Nét mặt không vui.']),
      w('기분', 'gibun', 'tâm trạng', '', ['기분이 좋은가 봐요.', 'gibuni joeunga bwayo', 'Chắc tâm trạng tốt.']),
      w('인기', 'ingi', 'sự ưa chuộng', '', ['인기가 많은가 봐요.', 'ingiga maneunga bwayo', 'Chắc được ưa chuộng.']),
      w('줄', 'jul', 'hàng (xếp hàng)', '', ['줄이 길어요.', 'juri gireoyo', 'Hàng dài.']),
      w('예상하다', 'yesanghada', 'dự đoán', '', ['예상보다 빨라요.', 'yesangboda ppallayo', 'Nhanh hơn dự đoán.']),
      w('아마도', 'amado', 'có lẽ', '', ['아마도 늦을 것 같아요.', 'amado neujeul geot gatayo', 'Có lẽ sẽ muộn.'])
    ],
    qs: [
      ['mc', 'Nhìn trời đầy mây: “Có lẽ sẽ mưa”?', '비가 올 것 같아요.', ['비가 온 것 같아요.', '비가 오는가 봐요.', '비가 왔나 봐요.'], 'Tương lai → -(으)ㄹ 것 같다.'],
      ['mc', 'Thấy đèn văn phòng tắt: “Chắc tan làm rồi”?', '퇴근했나 봐요.', ['퇴근할 것 같아요.', '퇴근하나 봐요요.', '퇴근했을까요.'], 'Dấu hiệu → -나 보다.'],
      ['mc', 'Nói ý kiến mềm “Cách này có vẻ tốt hơn”?', '이 방법이 더 좋은 것 같아요.', ['이 방법이 더 좋아요!', '이 방법이 좋나 봐요.', '이 방법 좋을 거예요?'], 'Mềm mỏng.'],
      ['mc', '표정 nghĩa là?', 'nét mặt', ['biểu đồ', 'biểu diễn', 'tình cảm'], 'pyojeong.'],
      ['hear', '줄이 긴 걸 보니까 인기가 많은 가게인가 봐요.', 'Thấy hàng dài, chắc là quán nổi tiếng.', ['Quán vắng.', 'Quán đóng cửa.', 'Tôi không thích quán.'], '-ㄴ가 보다.'],
      ['hear', '길이 막혀서 조금 늦을 것 같아요.', 'Tắc đường nên có lẽ tôi muộn chút.', ['Tôi đến sớm.', 'Đã đến rồi.', 'Không đi nữa.'], '-ㄹ 것 같다.'],
      ['order', 'Sắp xếp: “Có lẽ sẽ muộn.”', ['아마도', '늦을', '것 같아요', '.'], '아마도 늦을 것 같아요.']
    ],
    noi: [['조금 늦을 것 같아요.', 'jogeum neujeul geot gatayo – Có lẽ tôi muộn chút.'], ['이 방법이 더 좋은 것 같아요.', 'i bangbeobi deo joeun geot gatayo – Cách này có vẻ tốt hơn.'], ['다들 퇴근했나 봐요.', 'dadeul toegeunhaenna bwayo – Chắc mọi người tan làm rồi.']],
    hoithoai: {
      ctx: 'Họp nhóm chọn phương án; em góp ý mềm mỏng theo phong cách Hàn.', vai: 'Trưởng nhóm hỏi, em đáp.', ai: '👨‍💼 윤 팀장',
      luot: [
        T(['A안과 B안 중에 뭐가 나아요?', 'A-angwa B-an junge mwoga nayayo?', 'Phương án A và B, cái nào tốt hơn?'], ['제 생각에는 B안이 비용 면에서 더 좋은 것 같아요.', 'je saenggageneun B-ani biyong myeoneseo deo joeun geot gatayo', 'Theo em, phương án B có vẻ tốt hơn về chi phí.', 'Ý kiến mềm.'], ['B안이 무조건 좋아요!', 'B-ani mujogeon joayo!', 'Quá cứng.'], ['B안인가 봐요.', 'B-aninga bwayo', 'Sai: không có dấu hiệu quan sát.']),
        T(['다른 팀원들은 어떻게 생각해요?', 'dareun timwondeureun eotteoke saenggakhaeyo?', 'Thành viên khác nghĩ sao?'], ['표정을 보니까 다들 B안에 동의하나 봐요.', 'pyojeongeul bonikka dadeul B-ane donguihana bwayo', 'Nhìn nét mặt, chắc mọi người đồng ý B.', '-나 보다 + quan sát.'], ['동의할 거예요.', 'donguihal geoyeyo', 'Khẳng định quá.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['그럼 B안으로 하죠. 언제까지 가능해요?', 'geureom B-aneuro hajyo. eonjekkaji ganeunghaeyo?', 'Vậy chọn B. Khi nào xong được?'], ['다음 주 수요일까지는 끝날 것 같아요.', 'daeum ju suyoilkkajineun kkeunnal geot gatayo', 'Có lẽ trước thứ Tư tuần sau sẽ xong.', 'Dự đoán.'], ['끝난 것 같아요.', 'kkeunnan geot gatayo', 'Sai thì.'], ['끝났나 봐요.', 'kkeunnanna bwayo', 'Sai thì.'])
      ], ket: 'Em đã góp ý và dự đoán mềm mỏng kiểu Hàn.'
    },
    tom: ['-(으)ㄹ/는/(으)ㄴ 것 같다', '-나 보다 / -(으)ㄴ가 보다'], nguphap: 'Phỏng đoán', phatam: '같아요 [가타요]',
    loi: ['Dùng -나 보다 khi không có dấu hiệu'], btvn: ['Viết 6 câu phỏng đoán', 'Góp ý mềm 3 câu với -것 같아요', 'Luyện 🎤 3 câu']
  };

  const d5 = {
    n: 5, ten: plan[4].ten, kinds: K,
    muc: 'Diễn đạt thay đổi -게 되다 (rốt cuộc, trở nên) và tác động -게 하다 (khiến, cho phép).',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ', 'Nghĩa'], [['V-게 되다', '한국 회사에서 일하게 됐어요.', 'Tôi được (sắp xếp) làm ở công ty Hàn.'], ['A-게 되다', '친하게 됐어요.', 'Trở nên thân.'], ['V-게 하다', '엄마가 동생을 일찍 자게 했어요.', 'Mẹ bắt em ngủ sớm.'], ['A-게 (trạng từ)', '깨끗하게 청소하세요.', 'Dọn sạch sẽ.']])}`,
    vocab: [
      w('되다', 'doeda', 'trở thành, được', '', ['의사가 됐어요.', 'uisaga dwaesseoyo', 'Đã trở thành bác sĩ.']),
      w('친하다', 'chinhada', 'thân', '', ['우리는 친하게 됐어요.', 'urineun chinhage dwaesseoyo', 'Chúng tôi đã thân nhau.']),
      w('발령', 'balryeong', 'điều động', '', ['서울로 발령이 났어요.', 'Seoullo ballyeongi nasseoyo', 'Được điều động lên Seoul.']),
      w('깨끗하다', 'kkaekkeuthada', 'sạch', '', ['깨끗하게 해 주세요.', 'kkaekkeuthage hae juseyo', 'Làm sạch giúp.']),
      w('익숙하다', 'iksukhada', 'quen', '', ['이제 익숙하게 됐어요.', 'ije iksukhage dwaesseoyo', 'Giờ đã quen.']),
      w('기회', 'gihoe', 'cơ hội', '', ['좋은 기회가 생겼어요.', 'joeun gihoega saenggyeosseoyo', 'Có cơ hội tốt.']),
      w('우연히', 'uyeonhi', 'tình cờ', '', ['우연히 만나게 됐어요.', 'uyeonhi mannage dwaesseoyo', 'Tình cờ gặp nhau.']),
      w('허락하다', 'heorakhada', 'cho phép', '', ['부모님이 허락하셨어요.', 'bumonimi heorakhasyeosseoyo', 'Bố mẹ đã cho phép.']),
      w('웃기다', 'utgida', 'buồn cười, làm cho cười', '', ['그 영화가 저를 웃게 했어요.', 'geu yeonghwaga jeoreul utge haesseoyo', 'Phim đó làm tôi cười.']),
      w('결국', 'gyeolguk', 'rốt cuộc', '', ['결국 회사를 옮기게 됐어요.', 'gyeolguk hoesareul omgige dwaesseoyo', 'Rốt cuộc tôi chuyển công ty.'])
    ],
    qs: [
      ['mc', '“Tôi được làm ở công ty Hàn (do hoàn cảnh)”?', '한국 회사에서 일하게 됐어요.', ['한국 회사에서 일하게 했어요.', '한국 회사에서 일했게 돼요.', '일하게 되다요.'], '-게 되다.'],
      ['mc', '“Mẹ bắt em ngủ sớm”?', '엄마가 동생을 일찍 자게 했어요.', ['엄마가 동생을 일찍 자게 됐어요.', '엄마가 동생이 자게 돼요.', '엄마가 자라고 됐어요.'], '-게 하다.'],
      ['mc', '“Dọn sạch sẽ” (trạng từ)?', '깨끗하게 청소하세요.', ['깨끗한 청소하세요.', '깨끗하고 청소하세요.', '깨끗히 청소해요요.'], 'A-게.'],
      ['mc', '우연히 nghĩa là?', 'tình cờ', ['cố ý', 'thường xuyên', 'đúng giờ'], 'uyeonhi.'],
      ['hear', '회사 일 때문에 한국어를 배우게 됐어요.', 'Vì công việc nên tôi đã bắt đầu học tiếng Hàn.', ['Tôi không học tiếng Hàn.', 'Tôi dạy tiếng Hàn.', 'Tôi học vì sở thích.'], '-게 되다.'],
      ['hear', '처음에는 어려웠는데 이제 익숙하게 됐어요.', 'Lúc đầu khó nhưng giờ đã quen.', ['Vẫn khó.', 'Lúc đầu dễ.', 'Tôi bỏ rồi.'], '-게 되다.'],
      ['order', 'Sắp xếp: “Rốt cuộc tôi chuyển công ty.”', ['결국', '회사를', '옮기게', '됐어요.'], '결국 회사를 옮기게 됐어요.']
    ],
    noi: [['한국 회사에서 일하게 됐어요.', 'hanguk hoesaeseo ilhage dwaesseoyo – Tôi được làm ở công ty Hàn.'], ['이제 많이 익숙하게 됐어요.', 'ije mani iksukhage dwaesseoyo – Giờ đã quen nhiều rồi.'], ['우연히 만나게 됐어요.', 'uyeonhi mannage dwaesseoyo – Tình cờ gặp nhau.']],
    hoithoai: {
      ctx: 'Đồng nghiệp mới hỏi em vì sao đến làm ở công ty Hàn.', vai: 'Bạn hỏi, em kể.', ai: '👩 다은',
      luot: [
        T(['어떻게 우리 회사에서 일하게 됐어요?', 'eotteoke uri hoesaeseo ilhage dwaesseoyo?', 'Sao bạn đến làm công ty mình?'], ['친구 소개로 면접을 보게 됐는데 운 좋게 합격했어요.', 'chingu sogaero myeonjeobeul boge dwaenneunde un joke hapgyeokhaesseoyo', 'Bạn giới thiệu nên tôi được phỏng vấn, may mắn đỗ.', '-게 되다 + -는데.'], ['일하게 했어요.', 'ilhage haesseoyo', 'Sai: -게 하다 = khiến người khác.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['한국 생활은 어때요?', 'hanguk saenghwareun eottaeyo?', 'Cuộc sống ở Hàn thế nào?'], ['처음에는 힘들었는데 지금은 익숙하게 됐어요.', 'cheoeumeneun himdeureonneunde jigeumeun iksukhage dwaesseoyo', 'Lúc đầu vất vả nhưng giờ đã quen.', 'Thay đổi.'], ['익숙하게 해요.', 'iksukhage haeyo', 'Sai cấu trúc.'], ['힘들게 됐어요.', 'himdeulge dwaesseoyo', 'Ngược ý.']),
        T(['한국어를 왜 이렇게 잘해요?', 'hangugeoreul wae ireoke jalhaeyo?', 'Sao bạn giỏi tiếng Hàn thế?'], ['한국 드라마가 저를 한국어에 관심을 갖게 했어요.', 'hanguk deuramaga jeoreul hangugeoe gwansimeul gatge haesseoyo', 'Phim Hàn khiến tôi quan tâm tiếng Hàn.', '-게 하다.'], ['드라마가 되게 했어요.', 'deuramaga doege haesseoyo', 'Sai.'], ['안 잘해요.', 'an jalhaeyo', 'Lạc.'])
      ], ket: 'Em đã kể hành trình bằng -게 되다 và -게 하다.'
    },
    tom: ['-게 되다 (thay đổi, do hoàn cảnh)', '-게 하다 (khiến)', 'A-게 (trạng từ)'], nguphap: 'Biến đổi và sai khiến', phatam: '깨끗하게 [깨끄타게]',
    loi: ['Nhầm 되다 và 하다'], btvn: ['Kể hành trình học tiếng Hàn 6 câu', 'Viết 3 câu -게 하다', 'Luyện 🎤 3 câu']
  };

  const d6 = {
    n: 6, ten: plan[5].ten, kinds: K,
    muc: 'Dùng động từ bị động: -이/히/리/기- (보이다, 닫히다, 열리다, 팔리다…) và -아/어지다.',
    hoc: `${tbl(['Chủ động', 'Bị động', 'Ví dụ'], [['보다 (nhìn)', '보이다 (được thấy)', '산이 보여요.'], ['닫다 (đóng)', '닫히다 (bị đóng)', '문이 닫혔어요.'], ['열다 (mở)', '열리다 (được mở)', '문이 열렸어요.'], ['팔다 (bán)', '팔리다 (được bán)', '잘 팔려요.'], ['쓰다 (viết)', '쓰이다', '한글로 쓰여 있어요.'], ['만들다', '만들어지다', '1990년에 만들어졌어요.']])}
      ${tip('🔑 Mô tả sự cố trung lập (không đổ lỗi): <b>컴퓨터가 꺼졌어요</b> thay vì "누가 껐어요".')}`,
    vocab: [
      w('보이다', 'boida', 'được thấy, hiện ra', '', ['화면이 안 보여요.', 'hwamyeoni an boyeoyo', 'Màn hình không hiện.']),
      w('들리다', 'deullida', 'được nghe thấy', '', ['소리가 안 들려요.', 'soriga an deullyeoyo', 'Không nghe thấy tiếng.']),
      w('닫히다', 'dachida', 'bị đóng', '', ['문이 닫혔어요.', 'muni dachyeosseoyo', 'Cửa đã đóng.']),
      w('열리다', 'yeollida', 'được mở', '', ['파일이 안 열려요.', 'pairi an yeollyeoyo', 'Tệp không mở được.']),
      w('팔리다', 'pallida', 'được bán', '', ['이 제품이 잘 팔려요.', 'i jepumi jal pallyeoyo', 'Sản phẩm này bán chạy.']),
      w('잠기다', 'jamgida', 'bị khoá', '', ['계정이 잠겼어요.', 'gyejeongi jamgyeosseoyo', 'Tài khoản bị khoá.']),
      w('끊기다', 'kkeunkida', 'bị cắt, đứt', '', ['인터넷이 끊겼어요.', 'inteoneosi kkeunkyeosseoyo', 'Mạng bị mất.']),
      w('바뀌다', 'bakkwida', 'bị đổi', '', ['비밀번호가 바뀌었어요.', 'bimilbeonhoga bakkwieosseoyo', 'Mật khẩu bị đổi.']),
      w('저장되다', 'jeojangdoeda', 'được lưu', '', ['자동으로 저장돼요.', 'jadongeuro jeojangdwaeyo', 'Tự động được lưu.']),
      w('지워지다', 'jiwojida', 'bị xoá', '', ['파일이 지워졌어요.', 'pairi jiwojyeosseoyo', 'Tệp bị xoá.'])
    ],
    qs: [
      ['mc', 'Báo sự cố trung lập “Mạng bị mất”?', '인터넷이 끊겼어요.', ['누가 인터넷을 끊었어요.', '인터넷을 끊어요.', '인터넷 끊어라.'], 'Bị động.'],
      ['mc', '열다 → bị động?', '열리다', ['열히다', '열이다', '열기다'], '열리다.'],
      ['mc', '“Tài khoản bị khoá”?', '계정이 잠겼어요.', ['계정을 잠갔어요.', '계정이 잠갔어요.', '계정 잠그세요.'], '잠기다.'],
      ['mc', '팔리다 nghĩa là?', 'được bán', ['bán', 'mua', 'trả lại'], 'pallida.'],
      ['hear', '파일이 갑자기 지워졌는데 복구할 수 있어요?', 'Tệp đột nhiên bị xoá, khôi phục được không?', ['Tệp được lưu.', 'Tôi xoá tệp.', 'Tệp mở được.'], '지워지다.'],
      ['hear', '화면이 안 보이고 소리도 안 들려요.', 'Màn hình không hiện, tiếng cũng không nghe.', ['Mọi thứ bình thường.', 'Chỉ mất tiếng.', 'Chỉ mất hình.'], 'Bị động.'],
      ['order', 'Sắp xếp: “Tự động được lưu.”', ['자동으로', '저장돼요', '.'], '자동으로 저장돼요.']
    ],
    noi: [['인터넷이 끊겼어요.', 'inteoneosi kkeunkyeosseoyo – Mạng bị mất rồi.'], ['계정이 잠겼어요.', 'gyejeongi jamgyeosseoyo – Tài khoản bị khoá.'], ['파일이 안 열려요.', 'pairi an yeollyeoyo – Tệp không mở được.']],
    hoithoai: {
      ctx: 'Em là IT hỗ trợ nhân viên Hàn gặp sự cố máy tính.', vai: 'Nhân viên báo lỗi, em hỏi và xử lý.', ai: '🧑‍💻 직원',
      luot: [
        T(['컴퓨터가 갑자기 꺼졌어요!', 'keompyuteoga gapjagi kkeojyeosseoyo!', 'Máy tính đột nhiên tắt!'], ['작업하던 파일은 저장됐어요?', 'jageopadeon pareun jeojangdwaesseoyo?', 'Tệp đang làm đã được lưu chưa?', 'Bị động.'], ['왜 껐어요?', 'wae kkeosseoyo?', 'Đổ lỗi.'], ['저장했어요?', 'jeojanghaesseoyo?', 'Ổn nhưng kém trung lập hơn.']),
        T(['잘 모르겠어요. 그리고 인터넷도 끊겼어요.', 'jal moreugesseoyo. geurigo inteoneosdo kkeunkyeosseoyo', 'Không rõ. Mà mạng cũng mất.'], ['걱정 마세요. 자동 저장 기능이 있어서 아마 복구될 거예요.', 'geokjeong maseyo. jadong jeojang gineungi isseoseo ama bokgudoel geoyeyo', 'Đừng lo, có tự động lưu nên có lẽ khôi phục được.', 'Trấn an.'], ['다 지워졌어요.', 'da jiwojyeosseoyo', 'Gây hoảng.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['다행이다! 고마워요.', 'dahaengida! gomawoyo', 'May quá! Cảm ơn.'], ['인터넷은 공유기가 재부팅되면 다시 연결될 거예요.', 'inteoneseun gongyugiga jaebutingdoemyeon dasi yeongyeoldoel geoyeyo', 'Mạng sẽ kết nối lại khi bộ phát khởi động lại xong.', 'Bị động + giải thích.'], ['인터넷 사세요.', 'inteonet saseyo', 'Lạc.'], ['끊겼어요.', 'kkeunkyeosseoyo', 'Lặp.'])
      ], ket: 'Em đã hỗ trợ IT bằng câu bị động trung lập.'
    },
    tom: ['-이/히/리/기-', '-아/어지다', 'Báo sự cố trung lập'], nguphap: 'Câu bị động', phatam: '열려요 [열려요], 닫혔어요 [다처써요]',
    loi: ['Nhầm chủ động/bị động: 계정이 잠갔어요'], btvn: ['Viết 8 câu báo sự cố IT bằng bị động', 'Lập bảng 10 cặp chủ động – bị động', 'Luyện 🎤 3 câu']
  };

  const d7 = {
    n: 7, ten: plan[6].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Ôn giai đoạn 1: -는데, gián tiếp, phỏng đoán, -게 되다/하다, bị động.',
    hoc: `<h4>Tóm tắt tuần 1</h4>${tbl(['Chủ điểm', 'Mẫu'], [['-는데', '부탁이 있는데요 / 키가 큰데'], ['Gián tiếp', '-다고 / -냐고 / -라고 / -자고 / -아 달라고'], ['Phỏng đoán', '-(으)ㄹ 것 같다, -나 보다'], ['Thay đổi', '-게 되다, -게 하다'], ['Bị động', '열리다, 닫히다, 잠기다, 끊기다']])}`,
    qs: [['mc', 'Sếp bảo “빨리 오세요” → gián tiếp?', '빨리 오라고 하셨어요.', ['빨리 온다고 하셨어요.', '빨리 오냐고 하셨어요.', '빨리 오자고 하셨어요.'], 'Mệnh lệnh.'], ['mc', '“Mạng bị mất”?', '인터넷이 끊겼어요.', ['인터넷을 끊겼어요.', '인터넷이 끊었어요.', '인터넷 끊어요.'], 'Bị động.']],
    noi: [['부탁이 있는데요.', 'butagi inneundeyo – Tôi có việc muốn nhờ.'], ['조금 늦을 것 같아요.', 'jogeum neujeul geot gatayo – Có lẽ tôi muộn chút.']],
    hoithoai: {
      ctx: 'Tổng ôn: buổi sáng bận rộn ở văn phòng.', vai: 'Đồng nghiệp hỏi, em đáp.', ai: '👨 성민',
      luot: [
        T(['아까 사장님이 뭐라고 하셨어요?', 'akka sajangnimi mworago hasyeosseoyo?', 'Lúc nãy giám đốc nói gì?'], ['오후 회의가 연기됐다고 하셨어요.', 'ohu hoeuiga yeongidwaetdago hasyeosseoyo', 'Ông nói họp chiều bị hoãn.', 'Gián tiếp + bị động.'], ['회의 연기하라고.', 'hoeui yeongiharago', 'Sai nghĩa.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['왜 연기됐대요?', 'wae yeongidwaetdaeyo?', 'Sao hoãn vậy?'], ['손님이 늦게 도착하실 것 같다고 하셨어요.', 'sonnimi neutge dochakhasil geot gatdago hasyeosseoyo', 'Ông nói khách có lẽ đến muộn.', 'Phỏng đoán gián tiếp.'], ['손님이 늦나 봐요 했어요.', 'sonnimi neunna bwayo haesseoyo', 'Sai.'], ['늦어라.', 'neujeora', 'Sai.']),
        T(['그럼 시간이 좀 생겼네요.', 'geureom sigani jom saenggyeonneyo', 'Vậy có chút thời gian rồi.'], ['네, 덕분에 보고서를 끝낼 수 있게 됐어요.', 'ne, deokbune bogoseoreul kkeunnael su itge dwaesseoyo', 'Vâng, nhờ vậy tôi có thể làm xong báo cáo.', '-게 되다.'], ['보고서 끝나게 했어요.', 'bogoseo kkeunnage haesseoyo', 'Sai.'], ['시간 없어요.', 'sigan eopseoyo', 'Mâu thuẫn.'])
      ], ket: 'Em đã ôn trọn giai đoạn 1!'
    },
    tom: ['Ôn tuần 1', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn', phatam: 'Ôn biến âm',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: học lại ngày yếu', 'Làm ⚡ Luyện nhanh', 'Viết đoạn 150 chữ dùng 5 mẫu tuần này']
  };

  const d8 = {
    n: 8, ten: plan[7].ten, kinds: K,
    muc: 'Tăng tiến và bổ sung: -(으)ㄹ 뿐만 아니라 (không những… mà còn), N뿐만 아니라, -기도 하다 (cũng, đôi khi).',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ'], [['V/A-(으)ㄹ 뿐만 아니라', '이 식당은 맛있을 뿐만 아니라 싸요.'], ['N뿐만 아니라', '한국어뿐만 아니라 일본어도 해요.'], ['-기도 하다', '주말에는 등산을 하기도 해요.'], ['-기도 하고 -기도 하다', '기쁘기도 하고 슬프기도 해요.']])}`,
    vocab: [
      w('뿐만 아니라', 'ppunman anira', 'không những… mà còn', '', ['빠를 뿐만 아니라 정확해요.', 'ppareul ppunman anira jeonghwakhaeyo', 'Không những nhanh mà còn chính xác.']),
      w('정확하다', 'jeonghwakhada', 'chính xác', '', ['정확한 정보', 'jeonghwakhan jeongbo', 'thông tin chính xác']),
      w('편리하다', 'pyeollihada', 'tiện lợi', '', ['사용이 편리해요.', 'sayongi pyeollihaeyo', 'Dùng tiện.']),
      w('저렴하다', 'jeoryeomhada', 'rẻ, phải chăng', '', ['가격이 저렴해요.', 'gagyeogi jeoryeomhaeyo', 'Giá phải chăng.']),
      w('등산', 'deungsan', 'leo núi', '', ['등산을 하기도 해요.', 'deungsaneul hagido haeyo', 'Đôi khi tôi leo núi.']),
      w('장점', 'jangjeom', 'ưu điểm', '', ['장점이 많아요.', 'jangjeomi manayo', 'Nhiều ưu điểm.']),
      w('단점', 'danjeom', 'nhược điểm', '', ['단점도 있어요.', 'danjeomdo isseoyo', 'Cũng có nhược điểm.']),
      w('기능', 'gineung', 'chức năng', '', ['기능이 다양해요.', 'gineungi dayanghaeyo', 'Chức năng đa dạng.']),
      w('다양하다', 'dayanghada', 'đa dạng', '', ['메뉴가 다양해요.', 'menyuga dayanghaeyo', 'Thực đơn đa dạng.']),
      w('게다가', 'gedaga', 'hơn nữa', '', ['게다가 서비스도 좋아요.', 'gedaga seobiseudo joayo', 'Hơn nữa dịch vụ cũng tốt.'])
    ],
    qs: [
      ['mc', '“Không những ngon mà còn rẻ”?', '맛있을 뿐만 아니라 싸요.', ['맛있는 뿐만 아니라 싸요.', '맛있어서 뿐만 싸요.', '맛있지만 싸요.'], '-(으)ㄹ 뿐만 아니라.'],
      ['mc', '“Không chỉ tiếng Hàn mà cả tiếng Nhật”?', '한국어뿐만 아니라 일본어도 해요.', ['한국어 뿐만 아니라 일본어는 해요.', '한국어일 뿐 일본어해요.', '한국어도 뿐만 일본어.'], 'N뿐만 아니라 … 도.'],
      ['mc', '“Đôi khi tôi leo núi”?', '등산을 하기도 해요.', ['등산을 하기 해요.', '등산도 해요기.', '등산을 하고도 해요.'], '-기도 하다.'],
      ['mc', '단점 nghĩa là?', 'nhược điểm', ['ưu điểm', 'điểm số', 'đơn giản'], 'danjeom.'],
      ['hear', '이 앱은 편리할 뿐만 아니라 무료예요.', 'App này không những tiện mà còn miễn phí.', ['App đắt.', 'App khó dùng.', 'App chỉ miễn phí.'], 'Tăng tiến.'],
      ['hear', '장점도 많지만 단점도 있어요.', 'Nhiều ưu điểm nhưng cũng có nhược điểm.', ['Chỉ có ưu điểm.', 'Chỉ có nhược điểm.', 'Không có gì.'], 'Cân bằng.'],
      ['order', 'Sắp xếp: “Hơn nữa dịch vụ cũng tốt.”', ['게다가', '서비스도', '좋아요', '.'], '게다가 서비스도 좋아요.']
    ],
    noi: [['이 제품은 빠를 뿐만 아니라 정확해요.', 'i jepumeun ppareul ppunman anira jeonghwakhaeyo – Sản phẩm này không những nhanh mà còn chính xác.'], ['게다가 가격도 저렴해요.', 'gedaga gagyeokdo jeoryeomhaeyo – Hơn nữa giá cũng phải chăng.'], ['주말에는 등산을 하기도 해요.', 'jumareneun deungsaneul hagido haeyo – Cuối tuần đôi khi tôi leo núi.']],
    hoithoai: {
      ctx: 'Em giới thiệu phần mềm quản lý cho khách Hàn ở hội chợ.', vai: 'Khách hỏi, em tư vấn.', ai: '🧑‍💼 바이어',
      luot: [
        T(['이 프로그램의 장점이 뭐예요?', 'i peurogeuraemui jangjeomi mwoyeyo?', 'Ưu điểm phần mềm này là gì?'], ['사용이 편리할 뿐만 아니라 기능도 다양해요.', 'sayongi pyeollihal ppunman anira gineungdo dayanghaeyo', 'Không những dễ dùng mà còn đa chức năng.', 'Tăng tiến.'], ['편리해요.', 'pyeollihaeyo', 'Thiếu.'], ['편리할 뿐만이에요.', 'pyeollihal ppunmanieyo', 'Sai.']),
        T(['가격은요?', 'gagyeogeunyo?', 'Giá?'], ['경쟁 제품보다 저렴해요. 게다가 1년 무료 지원도 있어요.', 'gyeongjaeng jepumboda jeoryeomhaeyo. gedaga illyeon muryo jiwondo isseoyo', 'Rẻ hơn đối thủ. Hơn nữa có hỗ trợ miễn phí 1 năm.', '게다가.'], ['비싸요.', 'bissayo', 'Tự hạ.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['단점은 없어요?', 'danjeomeun eopseoyo?', 'Không có nhược điểm à?'], ['솔직히 말하면 처음에는 설정이 조금 복잡하기도 해요. 그래서 저희가 설치를 도와드려요.', 'soljikhi malhamyeon cheoeumeneun seoljeongi jogeum bokjaphagido haeyo. geuraeseo jeohuiga seolchireul dowadeuryeoyo', 'Thật lòng thì lúc đầu cài đặt đôi khi hơi phức tạp. Vì vậy chúng tôi hỗ trợ cài.', 'Trung thực + giải pháp.'], ['단점 전혀 없어요!', 'danjeom jeonhyeo eopseoyo!', 'Thiếu trung thực.'], ['많아요.', 'manayo', 'Tự hạ.'])
      ], ket: 'Em đã tư vấn sản phẩm trung thực, thuyết phục.'
    },
    tom: ['-(으)ㄹ 뿐만 아니라 / N뿐만 아니라', '-기도 하다', '게다가'], nguphap: 'Tăng tiến', phatam: '뿐만 [뿐만]',
    loi: ['-는 뿐만 아니라 (sai)'], btvn: ['Giới thiệu 1 sản phẩm 6 câu có tăng tiến', 'Viết 3 câu -기도 하다', 'Luyện 🎤 3 câu']
  };

  const d9 = {
    n: 9, ten: plan[8].ten, kinds: K,
    muc: 'Diễn đạt thời gian: -는 동안 (trong khi), -기 전에 (trước khi), -(으)ㄴ 후에 (sau khi), -자마자 (ngay khi).',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ'], [['-는 동안', '제가 회의하는 동안 기다려 주세요.'], ['N 동안', '3년 동안 일했어요.'], ['-기 전에', '자기 전에 이를 닦아요.'], ['-(으)ㄴ 후에 / 다음에', '밥을 먹은 후에 약을 드세요.'], ['-자마자', '집에 도착하자마자 전화했어요.']])}`,
    vocab: [
      w('동안', 'dongan', 'trong khoảng', '', ['방학 동안 여행했어요.', 'banghak dongan yeohaenghaesseoyo', 'Kỳ nghỉ tôi đi du lịch.']),
      w('전에', 'jeone', 'trước khi', '', ['출발하기 전에 확인하세요.', 'chulbalhagi jeone hwaginhaseyo', 'Trước khi đi hãy kiểm tra.']),
      w('후에', 'hue', 'sau khi', '', ['회의가 끝난 후에 연락할게요.', 'hoeuiga kkeunnan hue yeollakhalgeyo', 'Họp xong tôi liên lạc.']),
      w('자마자', 'jamaja', 'ngay khi', '', ['도착하자마자 전화했어요.', 'dochakhajamaja jeonhwahaesseoyo', 'Vừa đến là gọi ngay.']),
      w('이를 닦다', 'ireul dakda', 'đánh răng', '', ['자기 전에 이를 닦아요.', 'jagi jeone ireul dakkayo', 'Trước khi ngủ đánh răng.']),
      w('졸업하다', 'joreophada', 'tốt nghiệp', '', ['졸업한 후에 취직했어요.', 'joreophan hue chwijikhaesseoyo', 'Tốt nghiệp xong thì đi làm.']),
      w('취직하다', 'chwijikhada', 'xin được việc', '', ['은행에 취직했어요.', 'eunhaenge chwijikhaesseoyo', 'Tôi vào làm ngân hàng.']),
      w('방학', 'banghak', 'kỳ nghỉ (học)', '', ['방학이 언제예요?', 'banghagi eonjeyeyo?', 'Nghỉ hè khi nào?']),
      w('확인하다', 'hwaginhada', 'kiểm tra', '', ['메일을 확인하세요.', 'meireul hwaginhaseyo', 'Kiểm tra mail.']),
      w('잊다', 'itda', 'quên', '', ['잊기 전에 메모하세요.', 'itgi jeone memohaseyo', 'Ghi lại trước khi quên.'])
    ],
    qs: [
      ['mc', '“Trước khi ngủ tôi đánh răng”?', '자기 전에 이를 닦아요.', ['잔 전에 이를 닦아요.', '자는 전에 이를 닦아요.', '자기 후에 이를 닦아요.'], '-기 전에.'],
      ['mc', '“Ăn xong rồi uống thuốc”?', '밥을 먹은 후에 약을 드세요.', ['밥을 먹는 후에 약을 드세요.', '밥을 먹기 후에 드세요.', '밥 먹을 후에.'], '-(으)ㄴ 후에.'],
      ['mc', '“Vừa đến là gọi ngay”?', '도착하자마자 전화했어요.', ['도착한 동안 전화했어요.', '도착하기 전에 전화했어요.', '도착하자 마자요.'], '-자마자.'],
      ['mc', '취직하다 nghĩa là?', 'xin được việc', ['nghỉ việc', 'tuyển dụng', 'thăng chức'], 'chwijikhada.'],
      ['hear', '제가 통화하는 동안 잠깐만 기다려 주세요.', 'Trong lúc tôi nói điện thoại xin đợi chút.', ['Sau khi gọi điện.', 'Trước khi gọi.', 'Đừng đợi.'], '-는 동안.'],
      ['hear', '대학교를 졸업하자마자 은행에 취직했어요.', 'Vừa tốt nghiệp đại học là vào ngân hàng làm.', ['Tốt nghiệp 2 năm sau mới đi làm.', 'Chưa tốt nghiệp.', 'Làm ngân hàng trước.'], '-자마자.'],
      ['order', 'Sắp xếp: “Ghi lại trước khi quên.”', ['잊기', '전에', '메모하세요', '.'], '잊기 전에 메모하세요.']
    ],
    noi: [['회의가 끝난 후에 연락할게요.', 'hoeuiga kkeunnan hue yeollakhalgeyo – Họp xong tôi liên lạc.'], ['출발하기 전에 확인하세요.', 'chulbalhagi jeone hwaginhaseyo – Trước khi đi hãy kiểm tra.'], ['도착하자마자 전화할게요.', 'dochakhajamaja jeonhwahalgeyo – Đến nơi là tôi gọi ngay.']],
    hoithoai: {
      ctx: 'Em được phỏng vấn, kể quá trình học và làm việc.', vai: 'Nhà tuyển dụng hỏi, em kể.', ai: '👔 면접관',
      luot: [
        T(['대학교 졸업 후에 뭘 했어요?', 'daehakgyo joreop hue mwol haesseoyo?', 'Tốt nghiệp xong bạn làm gì?'], ['졸업하자마자 은행 IT 부서에 취직했어요.', 'joreophajamaja eunhaeng IT buseoe chwijikhaesseoyo', 'Vừa tốt nghiệp tôi vào phòng IT ngân hàng.', '-자마자.'], ['졸업하는 동안 취직했어요.', 'joreophaneun dongan chwijikhaesseoyo', 'Sai.'], ['졸업하기 후에.', 'joreophagi hue', 'Sai.']),
        T(['거기서 얼마 동안 일했어요?', 'geogiseo eolma dongan ilhaesseoyo?', 'Làm ở đó bao lâu?'], ['5년 동안 일하면서 시스템 관리를 맡았어요.', 'onyeon dongan ilhamyeonseo siseutem gwallireul matasseoyo', 'Làm 5 năm, phụ trách quản trị hệ thống.', 'N 동안.'], ['5년 전에 일했어요.', 'onyeon jeone ilhaesseoyo', 'Sai nghĩa.'], ['5년 후에요.', 'onyeon hueyo', 'Sai.']),
        T(['입사하기 전에 준비할 게 있어요?', 'ipsahagi jeone junbihal ge isseoyo?', 'Trước khi vào công ty cần chuẩn bị gì?'], ['입사하기 전에 TOPIK 4급을 따려고 해요.', 'ipsahagi jeone TOPIK sageubeul ttaryeogo haeyo', 'Trước khi vào công ty tôi định lấy TOPIK 4.', '-기 전에 + dự định.'], ['입사한 전에.', 'ipsahan jeone', 'Sai.'], ['없어요.', 'eopseoyo', 'Thiếu chủ động.'])
      ], ket: 'Em đã kể trình tự thời gian rõ ràng.'
    },
    tom: ['-는 동안 / N 동안', '-기 전에 / -(으)ㄴ 후에', '-자마자'], nguphap: 'Liên từ thời gian', phatam: '먹은 후에 [머근 후에]',
    loi: ['-는 전에, -기 후에 (sai)'], btvn: ['Kể một ngày của em theo trình tự 8 câu', 'Viết 3 câu -자마자', 'Luyện 🎤 3 câu']
  };

  const d10 = {
    n: 10, ten: plan[9].ten, kinds: K,
    muc: 'Kể lại điều tự mình trải nghiệm, quan sát: -더라고요 (thấy rằng…), so với -았/었어요.',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ', 'Sắc thái'], [['-더라고요', '제주도가 정말 아름답더라고요.', 'Tôi thấy (tự trải nghiệm) Jeju đẹp lắm.'], ['-았/었더라고요', '벌써 끝났더라고요.', 'Hoá ra đã xong rồi (tôi phát hiện).'], ['-았/었어요', '제주도에 갔어요.', 'Kể sự kiện trung tính']])}
      ${tip('🔑 -더라고요 thường <b>không dùng cho hành động của chính mình</b> (❌ 제가 먹더라고요), mà cho điều mình quan sát/cảm nhận.')}`,
    vocab: [
      w('아름답다', 'areumdapda', 'đẹp', '', ['경치가 아름답더라고요.', 'gyeongchiga areumdapdeoragoyo', 'Phong cảnh đẹp lắm.']),
      w('경치', 'gyeongchi', 'phong cảnh', '', ['경치가 좋아요.', 'gyeongchiga joayo', 'Cảnh đẹp.']),
      w('친절하다', 'chinjeolhada', 'thân thiện', '', ['사람들이 친절하더라고요.', 'saramdeuri chinjeolhadeoragoyo', 'Mọi người thân thiện lắm.']),
      w('생각보다', 'saenggakboda', 'hơn tôi nghĩ', '', ['생각보다 쉽더라고요.', 'saenggakboda swipdeoragoyo', 'Dễ hơn tôi nghĩ.']),
      w('붐비다', 'bumbida', 'đông đúc', '', ['주말이라 붐비더라고요.', 'jumarira bumbideoragoyo', 'Cuối tuần nên đông lắm.']),
      w('놀라다', 'nollada', 'ngạc nhiên', '', ['깜짝 놀랐어요.', 'kkamjjak nollasseoyo', 'Tôi giật mình.']),
      w('분위기', 'bunwigi', 'bầu không khí', '', ['분위기가 좋더라고요.', 'bunwigiga jokeoragoyo', 'Không khí tốt lắm.']),
      w('물가', 'mulga', 'vật giá', '', ['서울 물가가 비싸더라고요.', 'Seoul mulgaga bissadeoragoyo', 'Vật giá Seoul đắt lắm.']),
      w('직접', 'jikjeop', 'trực tiếp', '', ['직접 가 보니까 좋더라고요.', 'jikjeop ga bonikka jokeoragoyo', 'Đi tận nơi thấy hay lắm.']),
      w('인상', 'insang', 'ấn tượng', '', ['첫인상이 좋았어요.', 'cheosinsangi joasseoyo', 'Ấn tượng đầu tốt.'])
    ],
    qs: [
      ['mc', 'Kể cảm nhận sau chuyến đi: “Jeju đẹp lắm”?', '제주도가 정말 아름답더라고요.', ['제주도가 정말 아름다웠더라고요요.', '제가 아름답더라고요.', '제주도 아름다울 거예요.'], '-더라고요.'],
      ['mc', 'Câu SAI?', '제가 김치를 먹더라고요.', ['식당 음식이 맛있더라고요.', '사람들이 친절하더라고요.', '날씨가 춥더라고요.'], 'Không dùng cho hành động mình.'],
      ['mc', '물가 nghĩa là?', 'vật giá', ['nước', 'giá nước', 'hàng hoá'], 'mulga.'],
      ['hear', '서울에 가 보니까 생각보다 물가가 비싸더라고요.', 'Đến Seoul thấy vật giá đắt hơn nghĩ.', ['Vật giá rẻ.', 'Chưa đi Seoul.', 'Giá như tôi nghĩ.'], '-더라고요.'],
      ['hear', '가게에 갔는데 벌써 문을 닫았더라고요.', 'Tôi đến cửa hàng thì hoá ra đã đóng cửa.', ['Cửa hàng mở.', 'Tôi đóng cửa.', 'Chưa đến.'], '-았더라고요.'],
      ['order', 'Sắp xếp: “Không khí tốt lắm.”', ['분위기가', '좋더라고요', '.'], '분위기가 좋더라고요.']
    ],
    noi: [['제주도가 정말 아름답더라고요.', 'Jejudoga jeongmal areumdapdeoragoyo – Jeju đẹp lắm.'], ['생각보다 쉽더라고요.', 'saenggakboda swipdeoragoyo – Dễ hơn tôi nghĩ.'], ['사람들이 정말 친절하더라고요.', 'saramdeuri jeongmal chinjeolhadeoragoyo – Mọi người thân thiện lắm.']],
    hoithoai: {
      ctx: 'Em vừa đi công tác Busan về, đồng nghiệp hỏi.', vai: 'Bạn hỏi, em kể cảm nhận.', ai: '👩 유나',
      luot: [
        T(['부산 출장 어땠어요?', 'Busan chuljang eottaesseoyo?', 'Công tác Busan thế nào?'], ['바다가 정말 아름답더라고요. 사람들도 친절하고요.', 'badaga jeongmal areumdapdeoragoyo. saramdeuldo chinjeolhagoyo', 'Biển đẹp lắm. Người ta cũng thân thiện.', '-더라고요.'], ['제가 아름답더라고요.', 'jega areumdapdeoragoyo', 'Sai chủ ngữ.'], ['아름다울 거예요.', 'areumdaul geoyeyo', 'Sai thì.']),
        T(['음식은요?', 'eumsigeunyo?', 'Đồ ăn?'], ['해산물이 싸고 신선하더라고요. 서울보다 훨씬 싸요.', 'haesanmuri ssago sinseonhadeoragoyo. Seoulboda hwolssin ssayo', 'Hải sản rẻ và tươi lắm. Rẻ hơn Seoul nhiều.', 'Cảm nhận + so sánh.'], ['제가 먹더라고요.', 'jega meokdeoragoyo', 'Sai.'], ['맛없어요.', 'maseopseoyo', 'Lạc.']),
        T(['회의는 잘 됐어요?', 'hoeuineun jal dwaesseoyo?', 'Họp ổn không?'], ['네, 거래처 분위기가 생각보다 좋더라고요.', 'ne, georaecheo bunwigiga saenggakboda jokeoragoyo', 'Vâng, không khí bên đối tác tốt hơn tôi nghĩ.', '-더라고요.'], ['회의했더라고요.', 'hoeuihaetdeoragoyo', 'Sai: hành động của mình.'], ['몰라요.', 'mollayo', 'Thiếu.'])
      ], ket: 'Em đã kể trải nghiệm sinh động bằng -더라고요.'
    },
    tom: ['-더라고요: điều tự quan sát', 'Không dùng cho hành động của mình'], nguphap: 'Hồi tưởng', phatam: '좋더라고요 [조터라고요]',
    loi: ['제가 …더라고요'], btvn: ['Kể chuyến đi gần nhất 6 câu -더라고요', 'So sánh -더라고요 và -았어요 bằng 2 ví dụ', 'Luyện 🎤 3 câu']
  };

  const d11 = {
    n: 11, ten: plan[10].ten, kinds: K,
    muc: 'Nói khuynh hướng -(으)ㄴ/는 편이다 (thuộc loại, khá là) và đáng giá -(으)ㄹ 만하다 (đáng để).',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ'], [['A-(으)ㄴ 편이다', '저는 키가 큰 편이에요.'], ['V-는 편이다', '저는 일찍 자는 편이에요.'], ['V-(으)ㄹ 만하다', '이 영화는 볼 만해요.'], ['V-(으)ㄹ 만한 N', '추천할 만한 식당 있어요?']])}`,
    vocab: [
      w('편', 'pyeon', 'phía, thuộc loại', '', ['조용한 편이에요.', 'joyonghan pyeonieyo', 'Thuộc loại trầm tính.']),
      w('만하다', 'manhada', 'đáng', '', ['먹을 만해요.', 'meogeul manhaeyo', 'Đáng ăn / ăn được.']),
      w('성격', 'seonggyeok', 'tính cách', '', ['성격이 밝은 편이에요.', 'seonggyeogi balgeun pyeonieyo', 'Tính khá vui vẻ.']),
      w('밝다', 'balkda', 'sáng; vui vẻ', '', ['밝은 성격', 'balgeun seonggyeok', 'tính vui vẻ']),
      w('꼼꼼하다', 'kkomkkomhada', 'tỉ mỉ', '', ['꼼꼼한 편이에요.', 'kkomkkomhan pyeonieyo', 'Khá tỉ mỉ.']),
      w('외향적', 'oehyangjeok', 'hướng ngoại', '', ['외향적인 사람', 'oehyangjeogin saram', 'người hướng ngoại']),
      w('내성적', 'naeseongjeok', 'hướng nội', '', ['내성적인 편이에요.', 'naeseongjeogin pyeonieyo', 'Khá hướng nội.']),
      w('믿다', 'mitda', 'tin', '', ['믿을 만한 사람', 'mideul manhan saram', 'người đáng tin']),
      w('가 볼 만하다', 'ga bol manhada', 'đáng đến thử', '', ['경주는 가 볼 만해요.', 'Gyeongjuneun ga bol manhaeyo', 'Gyeongju đáng đến.']),
      w('평가', 'pyeongga', 'đánh giá', '', ['평가가 좋아요.', 'pyeonggaga joayo', 'Đánh giá tốt.'])
    ],
    qs: [
      ['mc', '“Tôi thuộc loại ngủ sớm”?', '저는 일찍 자는 편이에요.', ['저는 일찍 잔 편이에요.', '저는 일찍 잘 편이에요.', '저는 일찍 자기 편이에요.'], 'V-는 편이다.'],
      ['mc', '“Phim này đáng xem”?', '이 영화는 볼 만해요.', ['이 영화는 보는 만해요.', '이 영화는 본 만해요.', '이 영화 볼 편이에요.'], '-(으)ㄹ 만하다.'],
      ['mc', '“người đáng tin”?', '믿을 만한 사람', ['믿는 만한 사람', '믿은 편 사람', '믿을 편한 사람'], '-(으)ㄹ 만한 N.'],
      ['mc', '꼼꼼하다 nghĩa là?', 'tỉ mỉ', ['lười', 'nóng tính', 'vui vẻ'], 'kkomkkomhada.'],
      ['hear', '저는 내성적인 편이지만 친구를 사귀면 오래 가요.', 'Tôi khá hướng nội nhưng kết bạn thì bền lâu.', ['Tôi rất hướng ngoại.', 'Tôi không có bạn.', 'Bạn bè ít lâu.'], '편이다.'],
      ['hear', '경주는 역사 도시라서 한번 가 볼 만해요.', 'Gyeongju là thành phố lịch sử, đáng đến một lần.', ['Gyeongju không đáng đến.', 'Gyeongju là thành phố mới.', 'Đã đến nhiều lần.'], '-ㄹ 만하다.'],
      ['order', 'Sắp xếp: “Đánh giá tốt.”', ['평가가', '좋아요', '.'], '평가가 좋아요.']
    ],
    noi: [['저는 꼼꼼한 편이에요.', 'jeoneun kkomkkomhan pyeonieyo – Tôi khá tỉ mỉ.'], ['이 식당은 가 볼 만해요.', 'i sikdangeun ga bol manhaeyo – Quán này đáng đến thử.'], ['믿을 만한 사람이에요.', 'mideul manhan saramieyo – Là người đáng tin.']],
    hoithoai: {
      ctx: 'Phỏng vấn: nhà tuyển dụng hỏi về tính cách em.', vai: 'Nhà tuyển dụng hỏi, em trả lời.', ai: '👔 인사 담당자',
      luot: [
        T(['본인의 성격을 소개해 주세요.', 'bonin-ui seonggyeogeul sogaehae juseyo', 'Hãy giới thiệu tính cách bạn.'], ['저는 꼼꼼한 편이라서 실수가 적은 편이에요.', 'jeoneun kkomkkomhan pyeoniraseo silsuga jeogeun pyeonieyo', 'Tôi khá tỉ mỉ nên ít mắc lỗi.', '편이다.'], ['저는 꼼꼼할 만해요.', 'jeoneun kkomkkomhal manhaeyo', 'Sai cấu trúc.'], ['저는 최고예요.', 'jeoneun choegoyeyo', 'Quá tự tin.']),
        T(['단점은요?', 'danjeomeunyo?', 'Nhược điểm?'], ['조금 내성적인 편이지만 팀 활동에는 적극적으로 참여해요.', 'jogeum naeseongjeogin pyeonijiman tim hwaldongeneun jeokgeukjeogeuro chamyeohaeyo', 'Hơi hướng nội nhưng tham gia tích cực hoạt động nhóm.', 'Trung thực + tích cực.'], ['단점 없어요.', 'danjeom eopseoyo', 'Thiếu trung thực.'], ['게을러요.', 'geeulleoyo', 'Tự hạ.']),
        T(['전 직장 상사는 당신을 어떻게 평가했어요?', 'jeon jikjang sangsaneun dangsineul eotteoke pyeonggahaesseoyo?', 'Sếp cũ đánh giá bạn thế nào?'], ['믿을 만한 직원이라고 하셨어요.', 'mideul manhan jigwonirago hasyeosseoyo', 'Ông nói tôi là nhân viên đáng tin.', 'Gián tiếp + 만한.'], ['믿는 편이었어요.', 'mineun pyeonieosseoyo', 'Sai nghĩa.'], ['몰라요.', 'mollayo', 'Thiếu.'])
      ], ket: 'Em đã giới thiệu tính cách khéo léo.'
    },
    tom: ['-(으)ㄴ/는 편이다', '-(으)ㄹ 만하다 / 만한 N'], nguphap: 'Khuynh hướng và đáng giá', phatam: '볼 만해요 [볼 만해요]',
    loi: ['Nhầm thì định ngữ với 편'], btvn: ['Viết 5 câu tự mô tả bằng 편이다', 'Giới thiệu 3 nơi đáng đến', 'Luyện 🎤 3 câu']
  };

  const d12 = {
    n: 12, ten: plan[11].ten, kinds: K,
    muc: 'Luyện TOPIK II câu 51 (điền câu vào văn bản thực dụng: thông báo, email) và 52 (điền câu vào đoạn giải thích).',
    hoc: `${tbl(['Câu', 'Dạng', 'Mẹo'], [['51', 'Thông báo, email, tin nhắn', 'Xem câu trước/sau, dùng văn phong -습니다/-(으)세요; điền 2 chỗ (ㄱ), (ㄴ)'], ['52', 'Đoạn giải thích 4–5 câu', 'Văn viết -다; tìm quan hệ: 그러나, 따라서, 예를 들어']])}
      ${tip('📝 Mỗi chỗ trống thường cần <b>một câu hoàn chỉnh</b> đúng ngữ pháp, khớp từ nối và đuôi câu. Giữ đúng văn phong của đoạn.')}`,
    vocab: [
      w('알려 드리다', 'allyeo deurida', 'xin thông báo', '', ['일정을 알려 드립니다.', 'iljeongeul allyeo deurimnida', 'Xin thông báo lịch trình.']),
      w('참석하다', 'chamseokhada', 'tham dự', '', ['회의에 참석해 주십시오.', 'hoeuie chamseokhae jusipsio', 'Xin tham dự họp.']),
      w('따라서', 'ttaraseo', 'do đó', '', ['따라서 주의해야 한다.', 'ttaraseo juuihaeya handa', 'Do đó phải chú ý.']),
      w('예를 들어', 'yereul deureo', 'ví dụ', '', ['예를 들어 운동이 있다.', 'yereul deureo undongi itda', 'Ví dụ như thể thao.']),
      w('그러나', 'geureona', 'tuy nhiên (văn viết)', '', ['그러나 문제가 있다.', 'geureona munjega itda', 'Tuy nhiên có vấn đề.']),
      w('일정', 'iljeong', 'lịch trình', '', ['일정이 변경되었습니다.', 'iljeongi byeongyeongdoeeotseumnida', 'Lịch trình đã thay đổi.']),
      w('변경되다', 'byeongyeongdoeda', 'bị thay đổi', '', ['장소가 변경되었습니다.', 'jangsoga byeongyeongdoeeotseumnida', 'Địa điểm đã thay đổi.']),
      w('양해', 'yanghae', 'thông cảm', '', ['양해 부탁드립니다.', 'yanghae butakdeurimnida', 'Mong thông cảm.']),
      w('문의', 'munui', 'hỏi, liên hệ', '', ['문의 사항이 있으면 연락 주세요.', 'munui sahangi isseumyeon yeollak juseyo', 'Có thắc mắc xin liên hệ.']),
      w('-는다', '-neunda', 'đuôi văn viết', '', ['사람들은 운동을 한다.', 'saramdeureun undongeul handa', 'Mọi người tập thể dục.'])
    ],
    qs: [
      ['mc', 'Thông báo: 회의 장소가 바뀌었습니다. 3층이 아니라 ( ). → điền?', '5층 회의실에서 진행합니다', ['회의가 재미있어요', '저는 3층에 가요', '장소가 좋습니다요'], 'Khớp ngữ cảnh + văn phong.'],
      ['mc', 'Câu 52 dùng đuôi nào?', '-다 / -는다 (văn viết)', ['-아요/어요', '-냐', '-자'], 'Văn viết.'],
      ['mc', '양해 부탁드립니다 dùng khi?', 'Xin thông cảm (thông báo bất tiện)', ['Chúc mừng', 'Mời ăn', 'Chào hỏi'], 'Cụm cố định.'],
      ['mc', '따라서 = ?', 'do đó', ['tuy nhiên', 'ví dụ', 'hơn nữa'], 'Văn viết.'],
      ['hear', '일정이 변경되었습니다. 양해 부탁드립니다.', 'Lịch trình đã thay đổi, mong thông cảm.', ['Lịch trình giữ nguyên.', 'Sự kiện bị huỷ.', 'Chúc mừng.'], 'Thông báo.'],
      ['order', 'Sắp xếp: “Có thắc mắc xin liên hệ.”', ['문의 사항이', '있으면', '연락', '주세요.'], '문의 사항이 있으면 연락 주세요.']
    ],
    noi: [['일정이 변경되었습니다.', 'iljeongi byeongyeongdoeeotseumnida – Lịch trình đã thay đổi.'], ['양해 부탁드립니다.', 'yanghae butakdeurimnida – Mong quý vị thông cảm.'], ['문의 사항이 있으면 연락 주세요.', 'munui sahangi isseumyeon yeollak juseyo – Có thắc mắc xin liên hệ.']],
    hoithoai: {
      ctx: 'Gia sư luyện thi hỏi em cách làm câu 51–52 TOPIK II.', vai: 'Gia sư hỏi, em trả lời.', ai: '👩‍🏫 과외 선생님',
      luot: [
        T(['51번은 어떻게 풀어요?', 'osibilbeoneun eotteoke pureoyo?', 'Câu 51 làm thế nào?'], ['빈칸 앞뒤 문장을 읽고 같은 말투로 한 문장을 써요.', 'binkan apdwi munjangeul ilgo gateun malturo han munjangeul sseoyo', 'Đọc câu trước sau chỗ trống, viết một câu cùng văn phong.', 'Chiến lược.'], ['단어 하나만 써요.', 'daneo hanaman sseoyo', 'Thiếu.'], ['아무거나 써요.', 'amugeona sseoyo', 'Sai.']),
        T(['52번은 무엇이 달라요?', 'osibibeoneun mueosi dallayo?', 'Câu 52 khác gì?'], ['52번은 설명문이니까 "-다"로 끝나는 문어체를 써야 해요.', 'osibibeoneun seolmyeongmuninikka "-da"ro kkeunnaneun muneochereul sseoya haeyo', 'Câu 52 là văn giải thích nên phải viết văn viết kết thúc bằng -다.', 'Văn phong.'], ['-아요로 써요.', '-ayoro sseoyo', 'Sai văn phong.'], ['안 써도 돼요.', 'an sseodo dwaeyo', 'Bỏ câu.']),
        T(['마지막으로 뭘 확인해요?', 'majimageuro mwol hwaginhaeyo?', 'Cuối cùng kiểm tra gì?'], ['접속사와 시제가 맞는지, 맞춤법이 틀리지 않았는지 확인해요.', 'jeopsoksawa sijega manneunji, matchumbeobi teulliji ananneunji hwaginhaeyo', 'Kiểm tra từ nối, thì, chính tả.', 'Soát.'], ['확인 안 해요.', 'hwagin an haeyo', 'Mất điểm.'], ['글씨만요.', 'geulssimanyo', 'Thiếu.'])
      ], ket: 'Em đã nắm chiến lược câu 51–52.'
    },
    tom: ['51: văn bản thực dụng', '52: văn giải thích -다', 'Khớp từ nối, thì, văn phong'], nguphap: 'Viết TOPIK II câu 51–52', phatam: '-습니다 [씀니다]',
    loi: ['Dùng -아요 trong câu 52', 'Viết cụm từ thay vì câu'], btvn: ['Làm 5 đề câu 51', 'Làm 5 đề câu 52', 'Luyện 🎤 3 câu']
  };

  const d13 = {
    n: 13, ten: plan[12].ten, kinds: K,
    muc: 'Báo cáo và họp ở công ty Hàn: văn phong -습니다, báo cáo kết quả, đề xuất, xin ý kiến cấp trên.',
    hoc: `${tbl(['Chức năng', 'Mẫu'], [['Báo cáo', '지난주 판매 실적을 보고드리겠습니다.'], ['Kết quả', '목표 대비 110%를 달성했습니다.'], ['Vấn đề', '다만 재고 문제가 있습니다.'], ['Đề xuất', '다음 달에는 프로모션을 진행하는 것이 좋겠습니다.'], ['Xin ý kiến', '어떻게 생각하십니까?']])}`,
    vocab: [
      w('실적', 'siljeok', 'thành tích, kết quả kinh doanh', '', ['실적이 좋아졌습니다.', 'siljeogi joajyeotseumnida', 'Kết quả đã tốt lên.']),
      w('달성하다', 'dalseonghada', 'đạt được', '', ['목표를 달성했습니다.', 'mokpyoreul dalseonghaetseumnida', 'Đã đạt mục tiêu.']),
      w('대비', 'daebi', 'so với', '', ['작년 대비 20% 증가', 'jangnyeon daebi isip peosenteu jeungga', 'tăng 20% so với năm ngoái']),
      w('증가하다', 'jeunggahada', 'tăng', '', ['매출이 증가했습니다.', 'maechuri jeunggahaetseumnida', 'Doanh thu tăng.']),
      w('감소하다', 'gamsohada', 'giảm', '', ['비용이 감소했습니다.', 'biyongi gamsohaetseumnida', 'Chi phí giảm.']),
      w('매출', 'maechul', 'doanh thu', '', ['매출이 얼마예요?', 'maechuri eolmayeyo?', 'Doanh thu bao nhiêu?']),
      w('재고', 'jaego', 'hàng tồn kho', '', ['재고가 많습니다.', 'jaegoga manseumnida', 'Tồn kho nhiều.']),
      w('다만', 'daman', 'chỉ có điều', '', ['다만 문제가 있습니다.', 'daman munjega itseumnida', 'Chỉ có điều có vấn đề.']),
      w('진행하다', 'jinhaenghada', 'tiến hành', '', ['프로젝트를 진행합니다.', 'peurojekteureul jinhaenghamnida', 'Tiến hành dự án.']),
      w('의견', 'uigyeon', 'ý kiến', '', ['의견을 말씀해 주십시오.', 'uigyeoneul malsseumhae jusipsio', 'Xin cho ý kiến.'])
    ],
    qs: [
      ['mc', '“Đã đạt mục tiêu” (trang trọng)?', '목표를 달성했습니다.', ['목표 달성했어.', '목표를 달성해요요.', '목표가 달성하겠어.'], '-습니다.'],
      ['mc', '작년 대비 = ?', 'so với năm ngoái', ['năm ngoái đối phó', 'chuẩn bị năm ngoái', 'cuối năm ngoái'], '대비.'],
      ['mc', 'Báo cáo vấn đề nhẹ nhàng sau tin tốt?', '다만 재고 문제가 있습니다.', ['근데 재고 문제야.', '재고 망했어요.', '재고 몰라요.'], '다만.'],
      ['hear', '3분기 매출이 작년 대비 15% 증가했습니다.', 'Doanh thu quý 3 tăng 15% so với năm ngoái.', ['Giảm 15%.', 'Tăng 50%.', 'Quý 2.'], 'Nghe số + động từ.'],
      ['hear', '다음 달에는 할인 행사를 진행하는 것이 좋겠습니다.', 'Tháng sau nên tổ chức chương trình giảm giá.', ['Huỷ giảm giá.', 'Đã giảm giá.', 'Tăng giá.'], 'Đề xuất.'],
      ['order', 'Sắp xếp: “Xin cho ý kiến.”', ['의견을', '말씀해', '주십시오', '.'], '의견을 말씀해 주십시오.']
    ],
    noi: [['지난주 실적을 보고드리겠습니다.', 'jinanju siljeogeul bogodeurigesseumnida – Xin báo cáo kết quả tuần trước.'], ['목표 대비 110%를 달성했습니다.', 'mokpyo daebi baeksip peosenteureul dalseonghaetseumnida – Đạt 110% so với mục tiêu.'], ['어떻게 생각하십니까?', 'eotteoke saenggakhasimnikka? – Anh/chị nghĩ sao ạ?']],
    hoithoai: {
      ctx: 'Em báo cáo doanh số tháng trong cuộc họp với giám đốc người Hàn.', vai: 'Giám đốc hỏi, em báo cáo.', ai: '👔 대표님',
      luot: [
        T(['이번 달 실적은 어때요?', 'ibeon dal siljeogeun eottaeyo?', 'Kết quả tháng này thế nào?'], ['이번 달 매출은 목표 대비 105%를 달성했습니다.', 'ibeon dal maechureun mokpyo daebi baego peosenteureul dalseonghaetseumnida', 'Doanh thu tháng này đạt 105% mục tiêu.', 'Trang trọng + số liệu.'], ['좋아요!', 'joayo!', 'Thiếu số liệu.'], ['달성했어.', 'dalseonghaesseo', 'Trống không.']),
        T(['문제는 없어요?', 'munjeneun eopseoyo?', 'Không có vấn đề gì?'], ['다만 노트북 재고가 많이 남아 있습니다.', 'daman noteubuk jaegoga mani nama itseumnida', 'Chỉ có điều tồn kho laptop còn nhiều.', '다만.'], ['문제없습니다.', 'munjeeopseumnida', 'Che giấu.'], ['재고가 망했어요.', 'jaegoga manghaesseoyo', 'Khẩu ngữ.']),
        T(['그럼 어떻게 하면 좋겠어요?', 'geureom eotteoke hamyeon jokesseoyo?', 'Vậy nên làm sao?'], ['다음 달에 할인 행사를 진행하는 것이 좋겠습니다. 어떻게 생각하십니까?', 'daeum dare harin haengsareul jinhaenghaneun geosi jokesseumnida. eotteoke saenggakhasimnikka?', 'Tháng sau nên tổ chức giảm giá. Anh nghĩ sao ạ?', 'Đề xuất + xin ý kiến.'], ['대표님이 정하세요.', 'daepyonimi jeonghaseyo', 'Đẩy trách nhiệm.'], ['몰라요.', 'mollayo', 'Thiếu.'])
      ], ket: 'Em đã báo cáo – đề xuất chuyên nghiệp.'
    },
    tom: ['보고드리겠습니다', '대비 / 달성 / 증가 / 감소', '다만 / -는 것이 좋겠습니다'], nguphap: 'Báo cáo trang trọng', phatam: '달성했습니다 [달썽핻씀니다]',
    loi: ['Báo cáo không có số liệu', 'Che giấu vấn đề'], btvn: ['Viết báo cáo tuần 150 chữ bằng -습니다', 'Tập trình bày 2 phút', 'Luyện 🎤 3 câu']
  };

  const d14 = {
    n: 14, ten: plan[13].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Ôn giai đoạn 2: tăng tiến, liên từ thời gian, -더라고요, 편이다, 만하다, viết câu 51–52, báo cáo.',
    hoc: `<h4>Tóm tắt tuần 2</h4>${tbl(['Chủ điểm', 'Mẫu'], [['Tăng tiến', '-(으)ㄹ 뿐만 아니라, -기도 하다'], ['Thời gian', '-는 동안, -기 전에, -(으)ㄴ 후에, -자마자'], ['Hồi tưởng', '-더라고요'], ['Khuynh hướng', '-는 편이다, -(으)ㄹ 만하다'], ['Viết', 'Câu 51–52, văn viết -다'], ['Báo cáo', '대비, 달성, 다만']])}`,
    qs: [['mc', '“Vừa tốt nghiệp là đi làm”?', '졸업하자마자 취직했어요.', ['졸업하는 동안 취직했어요.', '졸업하기 전에 취직했어요.', '졸업할 뿐만 취직했어요.'], '-자마자.'], ['mc', '“Phim này đáng xem”?', '볼 만해요.', ['보는 편이에요.', '본 만해요.', '볼 편해요.'], '만하다.']],
    noi: [['맛있을 뿐만 아니라 싸요.', 'masisseul ppunman anira ssayo – Không những ngon mà còn rẻ.'], ['생각보다 쉽더라고요.', 'saenggakboda swipdeoragoyo – Dễ hơn tôi nghĩ.']],
    hoithoai: {
      ctx: 'Tổng ôn: em kể về khoá đào tạo vừa tham gia ở Seoul.', vai: 'Đồng nghiệp hỏi, em kể.', ai: '👩 하늘',
      luot: [
        T(['서울 연수 어땠어요?', 'Seoul yeonsu eottaesseoyo?', 'Khoá đào tạo ở Seoul thế nào?'], ['강의가 유익할 뿐만 아니라 강사님도 친절하시더라고요.', 'gangui-ga yuikhal ppunman anira gangsanimdo chinjeolhasideoragoyo', 'Bài giảng không những bổ ích mà giảng viên cũng thân thiện lắm.', 'Tăng tiến + -더라고요.'], ['유익하더라고요 뿐만.', 'yuikhadeoragoyo ppunman', 'Sai.'], ['재미없었어요.', 'jaemieopseosseoyo', 'Lạc.']),
        T(['연수 받는 동안 뭐가 제일 기억에 남아요?', 'yeonsu banneun dongan mwoga jeil gieoge namayo?', 'Trong khi học, điều gì đáng nhớ nhất?'], ['수업이 끝나자마자 동료들하고 한강에 간 게 기억에 남아요.', 'sueobi kkeunnajamaja dongnyodeulhago Hangange gan ge gieoge namayo', 'Vừa tan học là cùng đồng nghiệp ra sông Hàn – đáng nhớ.', '-자마자.'], ['끝나는 동안 갔어요.', 'kkeunnaneun dongan gasseoyo', 'Sai.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['한강 가 볼 만해요?', 'Hangang ga bol manhaeyo?', 'Sông Hàn đáng đến không?'], ['네, 밤에는 특히 가 볼 만해요. 경치가 정말 아름답더라고요.', 'ne, bameneun teukhi ga bol manhaeyo. gyeongchiga jeongmal areumdapdeoragoyo', 'Có, đặc biệt buổi tối rất đáng đến. Cảnh đẹp lắm.', 'Kết hợp.'], ['가는 편이에요.', 'ganeun pyeonieyo', 'Lạc.'], ['별로예요.', 'byeolloyeyo', 'Mâu thuẫn.'])
      ], ket: 'Em đã ôn trọn giai đoạn 2!'
    },
    tom: ['Ôn tuần 2', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn', phatam: 'Ôn nối âm',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: học lại ngày yếu', 'Làm ⚡ Luyện nhanh', 'Viết đoạn 200 chữ văn viết -다 về một trải nghiệm']
  };

  window.PLT_KO3 = { plan, stages, H: { w, L, T, tbl, tip, exs, sp, K }, days: [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14] };
})();

/* PLT-Edu · Tiếng Hàn – Cấp 5 (TOPIK II · cấp 5–6): Ngày 15–30 */
(function () {
  'use strict';
  const Z = window.PLT_KO5; if (!Z) return;
  const { w, T, tbl, tip, exs, K } = Z.H;
  const plan = Z.plan;

  const d15 = {
    n: 15, ten: plan[14].ten, kinds: K,
    muc: 'Nguyên tắc biên dịch Việt – Hàn: dịch sát và dịch thoát, giữ ngữ cảnh và sắc thái, xây dựng bảng thuật ngữ, hiệu đính.',
    hoc: `${tbl(['Nguyên tắc', 'Ví dụ'], [['Dịch thoát khi dịch sát gượng', '"Chúc anh thượng lộ bình an" → 조심히 가세요 (không dịch từng chữ)'], ['Giữ văn phong', 'Công văn → -(으)ㅂ니다 / -다; tin nhắn → -아/어요'], ['Thuật ngữ nhất quán', 'Lập 용어집 cho dự án'], ['Hiệu đính', 'Đọc lại bản dịch như người bản xứ']])}
      ${tip('💡 Bẫy Hán Việt: "khẩn trương" ≠ 긴장 (căng thẳng); "bác sĩ" ≠ 박사 (tiến sĩ).')}`,
    vocab: [
      w('번역하다', 'beonyeokhada', 'biên dịch', '', ['계약서를 번역했다.', 'gyeyakseoreul beonyeokhaetda', 'Đã dịch hợp đồng.']),
      w('직역', 'jigyeok', 'dịch sát', '', ['직역하면 어색하다.', 'jigyeokhamyeon eosaekhada', 'Dịch sát thì gượng.']),
      w('의역', 'uiyeok', 'dịch thoát', '', ['자연스럽게 의역했다.', 'jayeonseureopge uiyeokhaetda', 'Đã dịch thoát tự nhiên.']),
      w('원문', 'wonmun', 'nguyên văn', '', ['원문에 충실하다.', 'wonmune chungsilhada', 'Trung thành với nguyên văn.']),
      w('문맥', 'munmaek', 'ngữ cảnh', '', ['문맥에 맞게', 'munmaege matge', 'cho hợp ngữ cảnh']),
      w('뉘앙스', 'nwiangseu', 'sắc thái', '', ['뉘앙스가 다르다.', 'nwiangseuga dareuda', 'Sắc thái khác.']),
      w('어색하다', 'eosaekhada', 'gượng gạo', '', ['문장이 어색하다.', 'munjangi eosaekhada', 'Câu gượng gạo.']),
      w('다듬다', 'dadeumda', 'trau chuốt', '', ['문장을 다듬다.', 'munjangeul dadeumda', 'Trau chuốt câu.']),
      w('용어집', 'yongeojip', 'bảng thuật ngữ', '', ['용어집을 만들다.', 'yongeojibeul mandeulda', 'Lập bảng thuật ngữ.']),
      w('감수', 'gamsu', 'hiệu đính', '', ['원어민 감수', 'woneomin gamsu', 'người bản xứ hiệu đính'])
    ],
    qs: [
      ['mc', '“bác sĩ” tiếng Hàn là?', '의사', ['박사', '교수', '약사'], 'Bẫy Hán Việt: 박사 = tiến sĩ.'],
      ['mc', 'Dịch sát từng chữ khiến câu gượng thì nên?', '의역한다', ['그대로 둔다', '삭제한다', '직역을 더 한다'], 'Dịch thoát.'],
      ['mc', '용어집 = ?', 'bảng thuật ngữ', ['từ điển song ngữ', 'tập thơ', 'nhật ký'], 'Thuật ngữ.'],
      ['hear', '직역하면 의미는 맞지만 문장이 어색하니까 문맥에 맞게 의역하세요.', 'Dịch sát thì đúng nghĩa nhưng câu gượng, hãy dịch thoát theo ngữ cảnh.', ['Hãy dịch sát hơn.', 'Bỏ câu đó.', 'Không cần ngữ cảnh.'], 'Nguyên tắc.'],
      ['hear', '최종 번역문은 원어민 감수를 거쳐 납품하겠습니다.', 'Bản dịch cuối sẽ qua người bản xứ hiệu đính rồi mới giao.', ['Giao ngay không kiểm.', 'Máy dịch.', 'Không giao.'], 'Quy trình.'],
      ['order', 'Sắp xếp: “Trau chuốt câu.”', ['문장을', '다듬다', '.'], '문장을 다듬다.']
    ],
    noi: [['문맥에 맞게 의역했습니다.', 'munmaege matge uiyeokhaetseumnida – Tôi đã dịch thoát theo ngữ cảnh.'], ['원문의 뉘앙스를 살렸습니다.', 'wonmunui nwiangseureul sallyeotseumnida – Tôi đã giữ sắc thái nguyên văn.'], ['용어집을 먼저 만들겠습니다.', 'yongeojibeul meonjeo mandeulgesseumnida – Tôi sẽ lập bảng thuật ngữ trước.']],
    hoithoai: {
      ctx: 'Khách Hàn đặt dịch tài liệu giới thiệu công ty sang tiếng Việt và ngược lại.', vai: 'Khách hỏi, em tư vấn.', ai: '📄 의뢰인',
      luot: [
        T(['번역기로 하면 안 돼요?', 'beonyeokgiro hamyeon an dwaeyo?', 'Dùng máy dịch không được à?'], ['초벌로는 쓸 수 있지만 직역이 많아 어색하니까 사람이 다듬어야 합니다.', 'chobeollo-neun sseul su itjiman jigyeogi mana eosaekhanikka sarami dadeumeoya hamnida', 'Dùng làm bản nháp được, nhưng dịch sát nhiều nên gượng, cần người trau chuốt.', 'Cân bằng.'], ['네, 번역기로 충분해요.', 'ne, beonyeokgiro chungbunhaeyo', 'Rủi ro chất lượng.'], ['번역기는 쓰레기예요.', 'beonyeokgineun sseuregiyeyo', 'Cực đoan.']),
        T(['전문 용어가 많은데 괜찮을까요?', 'jeonmun yongeoga maneunde gwaenchaneulkkayo?', 'Nhiều thuật ngữ chuyên môn có ổn không?'], ['먼저 용어집을 만들어서 확인받고, 그 기준으로 일관되게 번역하겠습니다.', 'meonjeo yongeojibeul mandeureoseo hwaginbatgo, geu gijuneuro ilgwandoege beonyeokhagesseumnida', 'Tôi lập bảng thuật ngữ để anh duyệt, rồi dịch nhất quán theo đó.', 'Chuyên nghiệp.'], ['그냥 할게요.', 'geunyang halgeyo', 'Thiếu quy trình.'], ['모르는 건 빼요.', 'moreuneun geon ppaeyo', 'Sai.']),
        T(['품질은 어떻게 보장해요?', 'pumjireun eotteoke bojanghaeyo?', 'Đảm bảo chất lượng thế nào?'], ['번역 후 원어민 감수를 거치고, 수정 사항은 납품 후 일주일까지 반영해 드립니다.', 'beonyeok hu woneomin gamsureul geochigo, sujeong sahangeun nappum hu iljuilkkaji banyeonghae deurimnida', 'Sau khi dịch có người bản xứ hiệu đính, chỉnh sửa trong vòng 1 tuần sau giao.', 'Cam kết.'], ['믿으세요.', 'mideuseyo', 'Suông.'], ['보장 못 해요.', 'bojang mot haeyo', 'Mất khách.'])
      ], ket: 'Em đã tư vấn quy trình biên dịch chuyên nghiệp.'
    },
    tom: ['직역 / 의역 / 원문 / 문맥 / 뉘앙스', 'Bẫy Hán Việt'], nguphap: 'Nguyên tắc biên dịch', phatam: '의역 [의역], 뉘앙스 [뉘앙스]',
    loi: ['Dịch sát từng chữ', 'Bẫy từ Hán Việt'], btvn: ['Dịch 1 đoạn giới thiệu công ty 150 chữ Việt → Hàn', 'Lập bảng 10 bẫy Hán Việt', 'Luyện 🎤 3 câu']
  };

  const d16 = {
    n: 16, ten: plan[15].ten, kinds: K,
    muc: 'Biên dịch văn bản ngân hàng – tài chính: tiền gửi, phí, tài sản đảm bảo, xếp hạng tín dụng, quá hạn, điều khoản.',
    hoc: `${tbl(['Tiếng Việt', 'Tiếng Hàn'], [['Tiền gửi có kỳ hạn', '정기 예금'], ['Tiết kiệm tích luỹ', '적금'], ['Tài sản đảm bảo', '담보'], ['Nợ quá hạn', '연체'], ['Ngày đáo hạn', '만기일'], ['Điều khoản sử dụng', '이용 약관']])}
      ${tip('ℹ️ Bài học thuật ngữ, không phải tư vấn tài chính. Văn bản pháp lý thật cần người dịch có chứng chỉ.')}`,
    vocab: [
      w('예금', 'yegeum', 'tiền gửi', '', ['정기 예금', 'jeonggi yegeum', 'tiền gửi có kỳ hạn']),
      w('적금', 'jeokgeum', 'tiết kiệm tích luỹ', '', ['적금을 들다.', 'jeokgeumeul deulda', 'Mở sổ tích luỹ.']),
      w('이체', 'iche', 'chuyển khoản', '', ['이체 수수료', 'iche susuryo', 'phí chuyển khoản']),
      w('수수료', 'susuryo', 'phí', '', ['수수료가 면제된다.', 'susuryoga myeonjedoenda', 'Được miễn phí.']),
      w('담보', 'dambo', 'tài sản đảm bảo', '', ['부동산 담보', 'budongsan dambo', 'thế chấp bất động sản']),
      w('신용 등급', 'sinyong deunggeup', 'xếp hạng tín dụng', '', ['신용 등급이 높다.', 'sinyong deunggeubi nopda', 'Xếp hạng tín dụng cao.']),
      w('연체', 'yeonche', 'quá hạn', '', ['연체 이자', 'yeonche ija', 'lãi quá hạn']),
      w('원금', 'wongeum', 'tiền gốc', '', ['원금과 이자', 'wongeumgwa ija', 'gốc và lãi']),
      w('만기', 'mangi', 'đáo hạn', '', ['만기일', 'mangiil', 'ngày đáo hạn']),
      w('약관', 'yakgwan', 'điều khoản', '', ['이용 약관', 'iyong yakgwan', 'điều khoản sử dụng'])
    ],
    qs: [
      ['mc', '“Nợ quá hạn” = ?', '연체', ['만기', '원금', '담보'], 'yeonche.'],
      ['mc', '“Tài sản đảm bảo” = ?', '담보', ['적금', '약관', '수수료'], 'dambo.'],
      ['mc', '원금 = ?', 'tiền gốc', ['tiền lãi', 'tiền phí', 'tiền mặt'], 'wongeum.'],
      ['hear', '만기 전에 해지하시면 약정 이자보다 낮은 이자가 적용됩니다.', 'Nếu tất toán trước hạn sẽ áp dụng lãi thấp hơn lãi thoả thuận.', ['Lãi cao hơn.', 'Không có lãi.', 'Không được tất toán.'], 'Điều khoản. (minh hoạ)'],
      ['hear', '모바일 앱으로 이체하시면 수수료가 면제됩니다.', 'Chuyển khoản qua app được miễn phí.', ['Phí gấp đôi.', 'Không chuyển được.', 'Chỉ tại quầy.'], 'Ưu đãi. (minh hoạ)'],
      ['order', 'Sắp xếp: “Xếp hạng tín dụng cao.”', ['신용 등급이', '높다', '.'], '신용 등급이 높다.']
    ],
    noi: [['정기 예금 금리는 연 몇 퍼센트예요?', 'jeonggi yegeum geumrineun yeon myeot peosenteuyeyo? – Lãi tiền gửi kỳ hạn mỗi năm bao nhiêu %?'], ['만기일은 다음 달 10일입니다.', 'mangiireun daeum dal siburimnida – Ngày đáo hạn là mùng 10 tháng sau.'], ['약관을 꼼꼼히 확인하세요.', 'yakgwaneul kkomkkomhi hwaginhaseyo – Hãy đọc kỹ điều khoản.']],
    hoithoai: {
      ctx: 'Khách Hàn tại chi nhánh hỏi về sản phẩm tiền gửi; em giải thích bằng tiếng Hàn.', vai: 'Khách hỏi, em tư vấn.', ai: '🧑‍💼 한국인 고객',
      luot: [
        T(['정기 예금하고 적금은 뭐가 달라요?', 'jeonggi yegeumhago jeokgeumeun mwoga dallayo?', 'Tiền gửi kỳ hạn và tích luỹ khác gì?'], ['정기 예금은 목돈을 한 번에 맡기는 것이고, 적금은 매달 일정 금액을 넣는 상품입니다.', 'jeonggi yegeumeun mokdoneul han beone matgineun geosigo, jeokgeumeun maedal iljeong geumaegeul neonneun sangpumimnida', 'Tiền gửi kỳ hạn là gửi một khoản lớn một lần, tích luỹ là gửi đều mỗi tháng.', 'Giải thích rõ.'], ['똑같아요.', 'ttokgatayo', 'Sai.'], ['인터넷 찾아보세요.', 'inteonet chajaboseyo', 'Thiếu phục vụ.']),
        T(['중간에 돈이 필요하면요?', 'junggane doni piryohamyeonyo?', 'Giữa chừng cần tiền thì sao?'], ['만기 전에 해지하실 수는 있지만 약관에 따라 낮은 이자가 적용됩니다.', 'mangi jeone haejihasil suneun itjiman yakgwane ttara najeun ijaga jeogyongdoemnida', 'Có thể tất toán trước hạn nhưng theo điều khoản sẽ áp lãi thấp.', 'Trung thực.'], ['절대 못 찾아요.', 'jeoldae mot chajayo', 'Sai.'], ['손해 없어요.', 'sonhae eopseoyo', 'Che giấu.']),
        T(['자세한 조건을 받아 볼 수 있을까요?', 'jasehan jogeoneul bada bol su isseulkkayo?', 'Có thể nhận điều kiện chi tiết không?'], ['네, 한국어로 번역된 상품 설명서와 약관을 드리겠습니다. 천천히 읽어 보시고 궁금한 점은 언제든지 물어보세요.', 'ne, hangugeoro beonyeokdoen sangpum seolmyeongseowa yakgwaneul deurigesseumnida. cheoncheonhi ilgeo bosigo gunggeumhan jeomeun eonjedeunji mureoboseyo', 'Vâng, tôi đưa bản mô tả sản phẩm và điều khoản tiếng Hàn. Anh đọc kỹ, có thắc mắc cứ hỏi.', 'Minh bạch.'], ['지금 서명하세요.', 'jigeum seomyeonghaseyo', 'Ép ký.'], ['없어요.', 'eopseoyo', 'Thiếu.'])
      ], ket: 'Em đã tư vấn sản phẩm tiền gửi bằng tiếng Hàn minh bạch.'
    },
    tom: ['예금 / 적금 / 이체 / 수수료 / 담보 / 신용 등급 / 연체 / 원금 / 만기 / 약관'], nguphap: 'Thuật ngữ ngân hàng', phatam: '적금 [적끔], 약관 [약꽌]',
    loi: ['Nhầm 예금 và 적금', 'Che giấu điều kiện bất lợi'], btvn: ['Dịch 1 tờ rơi sản phẩm tiền gửi sang tiếng Hàn', 'Lập bảng 20 thuật ngữ ngân hàng', 'Luyện 🎤 3 câu']
  };

  const d17 = {
    n: 17, ten: plan[16].ten, kinds: K,
    muc: 'Phiên dịch tiếp nối trong họp: ghi chú nhanh, nắm ý chính, hỏi lại khi chưa rõ, giữ trung lập, dịch ngôi thứ nhất.',
    hoc: `${tbl(['Kỹ năng', 'Mẫu'], [['Xin nói ngắn', '조금씩 끊어서 말씀해 주시겠습니까?'], ['Hỏi lại', '죄송하지만 마지막 숫자를 다시 말씀해 주시겠어요?'], ['Ngôi thứ nhất', 'Diễn giả nói "Tôi…" → dịch "저는…", không "그분은…"'], ['Trung lập', 'Không thêm ý kiến cá nhân']])}
      ${tip('✍️ Ghi chú: ký hiệu ↑ (tăng), ↓ (giảm), → (dẫn tới), số liệu ghi ngay.')}`,
    vocab: [
      w('통역', 'tongyeok', 'phiên dịch', '', ['회의 통역', 'hoeui tongyeok', 'phiên dịch cuộc họp']),
      w('순차 통역', 'suncha tongyeok', 'dịch tiếp nối', '', ['순차 통역을 맡다.', 'suncha tongyeogeul matda', 'Đảm nhận dịch tiếp nối.']),
      w('동시 통역', 'dongsi tongyeok', 'dịch cabin (đồng thời)', '', ['동시 통역 부스', 'dongsi tongyeok buseu', 'cabin dịch đồng thời']),
      w('요지', 'yoji', 'ý chính', '', ['발언의 요지', 'bareonui yoji', 'ý chính phát biểu']),
      w('발언', 'bareon', 'phát biểu', '', ['발언을 통역하다.', 'bareoneul tongyeokhada', 'Dịch lời phát biểu.']),
      w('되묻다', 'doemutda', 'hỏi lại', '', ['모르면 되물으세요.', 'moreumyeon doemureuseyo', 'Không rõ thì hỏi lại.']),
      w('정확성', 'jeonghwakseong', 'độ chính xác', '', ['정확성이 생명이다.', 'jeonghwakseongi saengmyeongida', 'Chính xác là sống còn.']),
      w('중립', 'jungnip', 'trung lập', '', ['중립을 지키다.', 'jungnibeul jikida', 'Giữ trung lập.']),
      w('전달하다', 'jeondalhada', 'truyền đạt', '', ['의미를 전달하다.', 'uimireul jeondalhada', 'Truyền đạt ý nghĩa.']),
      w('끊다', 'kkeunta', 'ngắt (lời, câu)', '', ['끊어서 말하다.', 'kkeuneoseo malhada', 'Nói ngắt từng đoạn.'])
    ],
    qs: [
      ['mc', 'Diễn giả nói "Tôi đồng ý", phiên dịch nên nói?', '저는 동의합니다.', ['그분은 동의한대요.', '저 사람이 좋대요.', '동의하는 것 같아요.'], 'Ngôi thứ nhất.'],
      ['mc', 'Nghe không rõ con số, nên?', '정중하게 되묻는다', ['대충 추측한다', '생략한다', '아무 숫자나 말한다'], 'Chính xác.'],
      ['mc', '순차 통역 = ?', 'dịch tiếp nối', ['dịch cabin', 'dịch viết', 'dịch máy'], 'sequential.'],
      ['hear', '죄송하지만 마지막 숫자를 다시 한번 말씀해 주시겠습니까?', 'Xin lỗi, xin nhắc lại con số cuối được không ạ?', ['Xin nói nhanh hơn.', 'Tôi hiểu rồi.', 'Xin dừng họp.'], 'Hỏi lại.'],
      ['hear', '통역사는 개인 의견을 덧붙이지 않고 중립을 지켜야 합니다.', 'Phiên dịch không thêm ý kiến cá nhân, phải giữ trung lập.', ['Nên góp ý thêm.', 'Nên đứng về một bên.', 'Có thể bỏ ý.'], 'Đạo đức nghề.'],
      ['order', 'Sắp xếp: “Truyền đạt ý nghĩa.”', ['의미를', '전달하다', '.'], '의미를 전달하다.']
    ],
    noi: [['조금씩 끊어서 말씀해 주시겠습니까?', 'jogeumssik kkeuneoseo malsseumhae jusigetseumnikka? – Xin nói ngắt từng đoạn được không ạ?'], ['마지막 부분을 다시 말씀해 주시겠어요?', 'majimak bubuneul dasi malsseumhae jusigesseoyo? – Xin nhắc lại phần cuối được không ạ?'], ['요지를 정리해서 전달하겠습니다.', 'yojireul jeongnihaeseo jeondalhagesseumnida – Tôi sẽ tóm ý chính để truyền đạt.']],
    hoithoai: {
      ctx: 'Em phiên dịch cuộc họp giữa giám đốc chi nhánh Việt và đoàn doanh nghiệp Hàn.', vai: 'Trưởng đoàn Hàn nói, em xử lý.', ai: '🇰🇷 방문단 단장',
      luot: [
        T(['저희는 내년에 베트남에 공장을 짓고, 약 오백 명을… (빠르게 계속)', 'jeohuineun naenyeone Beteuname gongjangeul jitgo, yak obaek myeongeul… (ppareuge gyesok)', 'Chúng tôi năm sau xây nhà máy ở VN và khoảng 500 người… (nói nhanh liên tục)'], ['죄송하지만 정확한 통역을 위해 조금씩 끊어서 말씀해 주시겠습니까?', 'joesonghajiman jeonghwakan tongyeogeul wihae jogeumssik kkeuneoseo malsseumhae jusigetseumnikka?', 'Xin lỗi, để dịch chính xác, xin ông nói ngắt từng đoạn được không ạ?', 'Kiểm soát nhịp.'], ['(아무 말 안 하고 대충 요약)', '(amu mal an hago daechung yoyak)', 'Mất thông tin.'], ['너무 빨라요!', 'neomu ppallayo!', 'Thiếu lễ.']),
        T(['아, 네. 고용 인원은 오백 명, 투자액은 삼천만 달러입니다.', 'a, ne. goyong inwoneun obaek myeong, tujaaegeun samcheonman dalleoimnida', 'À vâng. Tuyển 500 người, vốn đầu tư 30 triệu USD.'], ['(Việt) Ông cho biết: "Chúng tôi sẽ tuyển 500 người, vốn đầu tư 30 triệu đô la."', '-', 'Ngôi thứ nhất, số chính xác.', 'Chuẩn.'], ['(Việt) Ông ấy nói chắc khoảng 3 triệu đô.', '-', 'Sai số liệu.'], ['(Việt) Họ đầu tư nhiều lắm.', '-', 'Mơ hồ.']),
        T(['그리고 은행의 금융 지원 가능성도 궁금합니다.', 'geurigo eunhaengui geumyung jiwon ganeungseongdo gunggeumhamnida', 'Và tôi muốn biết khả năng hỗ trợ tài chính của ngân hàng.'], ['(Việt) "Tôi cũng muốn biết khả năng hỗ trợ tài chính của ngân hàng." – em chuyển nguyên ý, không tự trả lời thay giám đốc.', '-', 'Trung lập, đúng vai.', 'Chuẩn.'], ['(한국어) 네, 무조건 해 드려요.', 'ne, mujogeon hae deuryeoyo', 'Vượt vai, hứa thay.'], ['(Bỏ qua câu hỏi)', '-', 'Bỏ ý.'])
      ], ket: 'Em đã phiên dịch tiếp nối chính xác và đúng vai.'
    },
    tom: ['순차/동시 통역', 'Hỏi lại, ngắt đoạn, ngôi thứ nhất, trung lập'], nguphap: 'Kỹ năng phiên dịch', phatam: '통역 [통역], 중립 [중닙]',
    loi: ['Tự trả lời thay', 'Đoán số liệu'], btvn: ['Nghe 1 đoạn phát biểu 1 phút, ghi chú ký hiệu, dịch lại', 'Lập bộ ký hiệu ghi chú riêng', 'Luyện 🎤 3 câu']
  };

  const d18 = {
    n: 18, ten: plan[17].ten, kinds: K,
    muc: 'Ngôn ngữ pháp lý – hợp đồng: điều khoản, vi phạm, bồi thường, chấm dứt, hiệu lực, các bên, tranh chấp, luật áp dụng.',
    hoc: `${tbl(['Mẫu điều khoản', 'Nghĩa'], [['갑과 을은 다음과 같이 계약을 체결한다.', 'Bên A và bên B ký hợp đồng như sau.'], ['을이 본 계약을 위반한 경우 갑은 손해 배상을 청구할 수 있다.', 'Nếu bên B vi phạm, bên A có quyền đòi bồi thường.'], ['본 계약은 서명한 날부터 효력이 발생한다.', 'Hợp đồng có hiệu lực từ ngày ký.']])}
      ${tip('ℹ️ 갑 = Bên A, 을 = Bên B. Bài học ngôn ngữ, không phải tư vấn pháp lý.')}`,
    vocab: [
      w('조항', 'johang', 'điều khoản', '', ['계약서 제5조 조항', 'gyeyakseo jeojo johang', 'điều 5 hợp đồng']),
      w('위반', 'wiban', 'vi phạm', '', ['계약 위반', 'gyeyak wiban', 'vi phạm hợp đồng']),
      w('손해 배상', 'sonhae baesang', 'bồi thường thiệt hại', '', ['손해 배상을 청구하다.', 'sonhae baesangeul cheongguhada', 'Yêu cầu bồi thường.']),
      w('해지', 'haeji', 'chấm dứt (hợp đồng)', '', ['계약을 해지하다.', 'gyeyageul haejihada', 'Chấm dứt hợp đồng.']),
      w('효력', 'hyoryeok', 'hiệu lực', '', ['효력이 발생하다.', 'hyoryeogi balsaenghada', 'Phát sinh hiệu lực.']),
      w('당사자', 'dangsaja', 'các bên, đương sự', '', ['계약 당사자', 'gyeyak dangsaja', 'các bên hợp đồng']),
      w('분쟁', 'bunjaeng', 'tranh chấp', '', ['분쟁이 발생하다.', 'bunjaengi balsaenghada', 'Phát sinh tranh chấp.']),
      w('체결하다', 'chegyeolhada', 'ký kết', '', ['협약을 체결했다.', 'hyeobageul chegyeolhaetda', 'Đã ký thoả thuận.']),
      w('청구하다', 'cheongguhada', 'yêu cầu (đòi)', '', ['대금을 청구하다.', 'daegeumeul cheongguhada', 'Yêu cầu thanh toán.']),
      w('준거법', 'jungeobeop', 'luật áp dụng', '', ['준거법은 베트남법으로 한다.', 'jungeobeobeun Beteunambeobeuro handa', 'Luật áp dụng là luật VN.'])
    ],
    qs: [
      ['mc', '갑 trong hợp đồng là?', 'Bên A', ['Bên B', 'Người làm chứng', 'Toà án'], 'Quy ước.'],
      ['mc', '“Hợp đồng có hiệu lực từ ngày ký”?', '본 계약은 서명한 날부터 효력이 발생한다.', ['본 계약은 서명하면 해지한다.', '본 계약은 효력이 없다.', '서명은 위반이다.'], 'Mẫu câu.'],
      ['mc', '분쟁 = ?', 'tranh chấp', ['phân chia', 'chiến tranh', 'phân tích'], 'bunjaeng.'],
      ['hear', '을이 납기를 지키지 못한 경우 갑은 손해 배상을 청구할 수 있다.', 'Nếu bên B không đúng hạn giao, bên A có thể đòi bồi thường.', ['Bên A phải bồi thường.', 'Không ai chịu trách nhiệm.', 'Bên B đòi bồi thường.'], 'Điều khoản.'],
      ['hear', '본 계약과 관련된 분쟁은 상호 협의로 해결함을 원칙으로 한다.', 'Tranh chấp liên quan HĐ nguyên tắc giải quyết bằng thương lượng.', ['Ra toà ngay.', 'Không giải quyết.', 'Bên A quyết định.'], 'Văn pháp lý.'],
      ['order', 'Sắp xếp: “Chấm dứt hợp đồng.”', ['계약을', '해지하다', '.'], '계약을 해지하다.']
    ],
    noi: [['이 조항은 수정이 필요합니다.', 'i johangeun sujeongi piryohamnida – Điều khoản này cần sửa.'], ['위반 시 손해 배상 범위를 명확히 합시다.', 'wiban si sonhae baesang beomwireul myeonghwakhi hapsida – Hãy làm rõ phạm vi bồi thường khi vi phạm.'], ['준거법은 어느 나라 법으로 할까요?', 'jungeobeobeun eoneu nara beobeuro halkkayo? – Luật áp dụng là luật nước nào?']],
    hoithoai: {
      ctx: 'Rà soát dự thảo hợp đồng cung cấp thiết bị với đối tác Hàn.', vai: 'Luật sư đối tác nói, em trao đổi.', ai: '⚖️ 상대측 변호사',
      luot: [
        T(['제7조에 따르면 분쟁은 서울 법원에서 해결합니다.', 'je chiljo-e ttareumyeon bunjaengeun Seoul beobwoneseo haegyeolhamnida', 'Theo điều 7, tranh chấp giải quyết tại toà Seoul.'], ['양측의 부담을 고려해서 국제 중재 기관으로 하는 방안을 제안드립니다.', 'yangcheugui budameul goryeohaeseo gukje jungjae gigwaneuro haneun banganeul jeandeurimnida', 'Xét gánh nặng hai bên, tôi đề xuất dùng tổ chức trọng tài quốc tế.', 'Đề xuất trung hoà.'], ['좋아요, 서울로 해요.', 'joayo, seoullo haeyo', 'Bất lợi.'], ['절대 안 돼요!', 'jeoldae an dwaeyo!', 'Cứng.']),
        T(['손해 배상 한도는요?', 'sonhae baesang handoneunyo?', 'Mức trần bồi thường?'], ['위반 시 배상 범위를 계약 금액 이내로 명시하는 것이 합리적이라고 봅니다.', 'wiban si baesang beomwireul gyeyak geumaek inaero myeongsihaneun geosi hamnijeogirago bomnida', 'Tôi cho rằng hợp lý khi ghi rõ phạm vi bồi thường không vượt giá trị hợp đồng.', 'Rõ ràng.'], ['무제한으로 해요.', 'mujehaneuro haeyo', 'Rủi ro.'], ['상관없어요.', 'sanggwaneopseoyo', 'Thiếu cẩn trọng.']),
        T(['수정안을 언제 받을 수 있을까요?', 'sujeonganeul eonje badeul su isseulkkayo?', 'Khi nào nhận bản sửa?'], ['내부 법무팀 검토를 거쳐 금요일까지 수정안을 보내 드리겠습니다.', 'naebu beommutim geomtoreul geochyeo geumyoilkkaji sujeonganeul bonae deurigesseumnida', 'Qua pháp chế nội bộ rà soát, thứ Sáu tôi gửi bản sửa.', 'Đúng quy trình.'], ['지금 서명할게요.', 'jigeum seomyeonghalgeyo', 'Vội ký.'], ['몰라요.', 'mollayo', 'Thiếu.'])
      ], ket: 'Em đã rà soát hợp đồng bằng ngôn ngữ pháp lý thận trọng.'
    },
    tom: ['갑 / 을 / 조항 / 위반 / 손해 배상 / 해지 / 효력 / 분쟁 / 준거법'], nguphap: 'Văn phong pháp lý', phatam: '손해 배상 [손해 배상], 효력 [효녁]',
    loi: ['Ký vội', 'Nhầm 갑/을'], btvn: ['Dịch 3 điều khoản mẫu Việt → Hàn', 'Học 10 thuật ngữ pháp lý', 'Luyện 🎤 3 câu']
  };

  const d19 = {
    n: 19, ten: plan[18].ten, kinds: K,
    muc: 'Hợp tác Việt – Hàn: quan hệ ngoại giao, thương mại, đầu tư, chuỗi cung ứng, giao lưu nhân dân – trình bày khách quan.',
    hoc: `${tbl(['Mốc / Khái niệm', 'Tiếng Hàn'], [['Thiết lập quan hệ ngoại giao (1992)', '한-베 수교 (1992년)'], ['Đối tác chiến lược toàn diện', '포괄적 전략 동반자 관계'], ['Hiệp định thương mại tự do', '자유 무역 협정 (FTA)'], ['Chuỗi cung ứng', '공급망']])}
      ${tip('📌 Số liệu thương mại – đầu tư thay đổi hằng năm: khi nói/viết hãy dẫn nguồn mới nhất.')}`,
    vocab: [
      w('수교', 'sugyo', 'thiết lập quan hệ ngoại giao', '', ['수교 30주년', 'sugyo samsipjunyeon', 'kỷ niệm 30 năm quan hệ']),
      w('양국', 'yangguk', 'hai nước', '', ['양국 관계', 'yangguk gwangye', 'quan hệ hai nước']),
      w('교역', 'gyoyeok', 'thương mại (trao đổi)', '', ['교역 규모', 'gyoyeok gyumo', 'quy mô thương mại']),
      w('동반자', 'dongbanja', 'đối tác, bạn đồng hành', '', ['전략적 동반자', 'jeollyakjeok dongbanja', 'đối tác chiến lược']),
      w('협정', 'hyeopjeong', 'hiệp định', '', ['자유 무역 협정', 'jayu muyeok hyeopjeong', 'hiệp định thương mại tự do']),
      w('진출하다', 'jinchulhada', 'tiến ra (thị trường)', '', ['베트남에 진출했다.', 'Beteuname jinchulhaetda', 'Đã vào thị trường VN.']),
      w('공급망', 'gonggeummang', 'chuỗi cung ứng', '', ['공급망 다변화', 'gonggeummang dabyeonhwa', 'đa dạng hoá chuỗi cung ứng']),
      w('교류', 'gyoryu', 'giao lưu', '', ['인적 교류', 'injeok gyoryu', 'giao lưu nhân dân']),
      w('상생', 'sangsaeng', 'cùng có lợi', '', ['상생 협력', 'sangsaeng hyeomnyeok', 'hợp tác cùng có lợi']),
      w('격상되다', 'gyeoksangdoeda', 'được nâng cấp', '', ['관계가 격상되었다.', 'gwangyega gyeoksangdoeeotda', 'Quan hệ được nâng cấp.'])
    ],
    qs: [
      ['mc', 'Việt Nam – Hàn Quốc thiết lập quan hệ ngoại giao năm?', '1992', ['1975', '2000', '1988'], '한-베 수교 1992.'],
      ['mc', '공급망 = ?', 'chuỗi cung ứng', ['mạng xã hội', 'cung cầu', 'lưới điện'], 'gonggeummang.'],
      ['mc', '상생 = ?', 'cùng có lợi', ['sinh tồn', 'thượng sách', 'tương sinh tương khắc'], 'sangsaeng.'],
      ['hear', '양국 관계는 포괄적 전략 동반자 관계로 격상되었습니다.', 'Quan hệ hai nước được nâng lên Đối tác chiến lược toàn diện.', ['Quan hệ bị hạ cấp.', 'Chưa có quan hệ.', 'Chỉ là bạn hàng.'], 'Ngoại giao.'],
      ['hear', '많은 한국 기업이 공급망 다변화를 위해 베트남에 진출하고 있습니다.', 'Nhiều doanh nghiệp Hàn vào VN để đa dạng hoá chuỗi cung ứng.', ['Doanh nghiệp Hàn rút khỏi VN.', 'Không liên quan chuỗi cung ứng.', 'Chỉ du lịch.'], 'Đầu tư.'],
      ['order', 'Sắp xếp: “Hợp tác cùng có lợi.”', ['상생', '협력', '.'], '상생 협력.']
    ],
    noi: [['한-베 양국은 1992년에 수교했습니다.', 'han-be yanggugeun cheongubaekgusibinyeone sugyohaetseumnida – Hàn – Việt thiết lập quan hệ năm 1992.'], ['상생 협력이 중요합니다.', 'sangsaeng hyeomnyeogi jungyohamnida – Hợp tác cùng có lợi là quan trọng.'], ['인적 교류가 활발합니다.', 'injeok gyoryuga hwalbalhamnida – Giao lưu nhân dân sôi nổi.']],
    hoithoai: {
      ctx: 'Em phát biểu ngắn tại diễn đàn doanh nghiệp Việt – Hàn ở tỉnh Long An.', vai: 'Người điều phối hỏi, em trả lời.', ai: '🎙️ 사회자',
      luot: [
        T(['한-베 관계를 한마디로 표현한다면요?', 'han-be gwangyereul hanmadiro pyohyeonhandamyeon?', 'Diễn tả quan hệ Hàn – Việt trong một câu?'], ['1992년 수교 이후 경제와 인적 교류 모두에서 서로에게 중요한 동반자가 된 관계입니다.', 'cheongubaekgusibinyeon sugyo ihu gyeongjewa injeok gyoryu modueseo seoroege jungyohan dongbanjaga doen gwangyeimnida', 'Từ khi lập quan hệ 1992, hai bên trở thành đối tác quan trọng của nhau cả kinh tế lẫn giao lưu nhân dân.', 'Khách quan.'], ['한국이 최고예요.', 'hangugi choegoyeyo', 'Thiên lệch.'], ['잘 몰라요.', 'jal mollayo', 'Thiếu.']),
        T(['롱안성의 강점은요?', 'Rongan-seong-ui gangjeomeunyo?', 'Thế mạnh của Long An?'], ['호찌민시와 가깝고 산업단지가 많아서 공급망 거점으로 유리합니다.', 'Hojjiminsiwa gakkapgo saneopdanjiga manaseo gonggeummang geojeomeuro yurihamnida', 'Gần TP.HCM, nhiều khu công nghiệp nên thuận lợi làm điểm trung chuyển chuỗi cung ứng.', 'Cụ thể.'], ['다 좋아요.', 'da joayo', 'Mơ hồ.'], ['없어요.', 'eopseoyo', 'Tự hạ.']),
        T(['은행의 역할은요?', 'eunhaengui yeokhareun?', 'Vai trò ngân hàng?'], ['진출 기업에 금융과 행정 정보를 제공해서 상생 협력을 돕는 것이라고 생각합니다.', 'jinchul gieobe geumyunggwa haengjeong jeongboreul jegonghaeseo sangsaeng hyeomnyeogeul domneun geosirago saenggakhamnida', 'Cung cấp tài chính và thông tin hành chính cho DN đầu tư, hỗ trợ hợp tác cùng có lợi.', 'Đúng vai.'], ['돈 빌려 줘요.', 'don billyeo jwoyo', 'Sơ sài.'], ['상관없어요.', 'sanggwaneopseoyo', 'Thiếu.'])
      ], ket: 'Em đã phát biểu về hợp tác Việt – Hàn khách quan, rõ ràng.'
    },
    tom: ['수교 / 양국 / 교역 / 동반자 / 협정 / 진출 / 공급망 / 교류 / 상생 / 격상'], nguphap: 'Chủ đề quan hệ quốc tế', phatam: '공급망 [공금망]',
    loi: ['Nêu số liệu không nguồn', 'Phát biểu thiên lệch'], btvn: ['Viết 200 chữ về hợp tác Việt – Hàn có dẫn nguồn', 'Học 10 từ', 'Luyện 🎤 3 câu']
  };

  const d20 = {
    n: 20, ten: plan[19].ten, kinds: K,
    muc: 'Làm quen thời điệu (시조) – thể thơ cổ điển Hàn: cấu trúc 3 chương, đọc 단심가 của Chŏng Mong-ju (thế kỷ 14) và cảm nhận.',
    hoc: `${tbl(['Phần', 'Đặc điểm'], [['초장', 'chương đầu – nêu ý'], ['중장', 'chương giữa – phát triển'], ['종장', 'chương cuối – kết, chữ đầu thường 3 âm tiết']])}
      <h4>단심가 (丹心歌) – 정몽주</h4><p>이 몸이 죽고 죽어 일백 번 고쳐 죽어<br>백골이 진토되어 넋이라도 있고 없고<br>임 향한 일편단심이야 가실 줄이 있으랴</p>
      ${tip('📜 Ý: Dù chết trăm lần, xương hoá bụi, tấm lòng son với vua vẫn không đổi. (Tác phẩm cổ, thuộc phạm vi công cộng.)')}`,
    vocab: [
      w('시조', 'sijo', 'thời điệu (thơ cổ Hàn)', '', ['시조를 읊다.', 'sijoreul eupda', 'Ngâm thời điệu.']),
      w('초장', 'chojang', 'chương đầu', '', ['초장에서 주제를 제시한다.', 'chojangeseo jujereul jesihanda', 'Chương đầu nêu chủ đề.']),
      w('종장', 'jongjang', 'chương cuối', '', ['종장이 핵심이다.', 'jongjangi haeksimida', 'Chương cuối là cốt lõi.']),
      w('일편단심', 'ilpyeondansim', 'tấm lòng son', '', ['일편단심의 충절', 'ilpyeondansimui chungjeol', 'lòng trung son sắt']),
      w('충절', 'chungjeol', 'trung tiết', '', ['충절을 지키다.', 'chungjeoreul jikida', 'Giữ trung tiết.']),
      w('백골', 'baekgol', 'xương trắng', '', ['백골이 진토되다.', 'baekgori jintodoeda', 'Xương trắng hoá bụi.']),
      w('넋', 'neok', 'hồn', '', ['넋이라도 있고 없고', 'neoksirado itgo eopgo', 'dù hồn còn hay mất']),
      w('운율', 'unyul', 'vần điệu', '', ['운율이 아름답다.', 'unyuri areumdapda', 'Vần điệu đẹp.']),
      w('고전', 'gojeon', 'cổ điển', '', ['고전 문학', 'gojeon munhak', 'văn học cổ điển']),
      w('읊다', 'eupda', 'ngâm (thơ)', '', ['시를 읊다.', 'sireul eupda', 'Ngâm thơ.'])
    ],
    qs: [
      ['mc', 'Thời điệu có mấy chương?', '3', ['2', '4', '5'], '초장, 중장, 종장.'],
      ['mc', '일편단심 nghĩa?', 'tấm lòng son không đổi', ['một nửa tấm lòng', 'lòng tham', 'tâm trạng thất thường'], 'Hán Việt: nhất phiến đan tâm.'],
      ['mc', '종장 = ?', 'chương cuối', ['chương đầu', 'chương giữa', 'tựa đề'], 'jongjang.'],
      ['hear', '이 몸이 죽고 죽어 일백 번 고쳐 죽어', 'Thân này chết đi chết lại, dẫu chết trăm lần.', ['Thân này sống trăm năm.', 'Một trăm người chết.', 'Không bao giờ chết.'], '초장 단심가.'],
      ['hear', '임 향한 일편단심이야 가실 줄이 있으랴', 'Tấm lòng son hướng về vua lẽ nào đổi thay.', ['Lòng đã đổi.', 'Hướng về quê.', 'Không có lòng.'], '종장.'],
      ['order', 'Sắp xếp: “Văn học cổ điển.”', ['고전', '문학', '.'], '고전 문학.']
    ],
    noi: [['시조는 초장, 중장, 종장으로 이루어져 있습니다.', 'sijoneun chojang, jungjang, jongjangeuro irueojyeo itseumnida – Thời điệu gồm chương đầu, giữa, cuối.'], ['이 작품은 일편단심을 노래합니다.', 'i jakpumeun ilpyeondansimeul noraehamnida – Tác phẩm ca ngợi tấm lòng son.'], ['운율이 아름답습니다.', 'unyuri areumdapseumnida – Vần điệu đẹp.']],
    hoithoai: {
      ctx: 'Lớp văn học: cô hỏi cảm nhận về 단심가.', vai: 'Cô hỏi, em trả lời.', ai: '👩‍🏫 국어 선생님',
      luot: [
        T(['이 시조의 주제는 뭐예요?', 'i sijoui jujeneun mwoyeyo?', 'Chủ đề thời điệu này là gì?'], ['죽어도 변하지 않는 임금을 향한 충절, 즉 일편단심입니다.', 'jugeodo byeonhaji anneun imgeumeul hyanghan chungjeol, jeuk ilpyeondansimimnida', 'Lòng trung với vua dù chết không đổi, tức tấm lòng son.', 'Đúng chủ đề.'], ['사랑 노래예요.', 'sarang noraeyeyo', 'Hiểu sai.'], ['죽음이 무서워요.', 'jugeumi museowoyo', 'Lệch.']),
        T(['반복 표현의 효과는요?', 'banbok pyohyeonui hyogwaneunyo?', 'Hiệu quả của lặp lại?'], ['"죽고 죽어"처럼 반복해서 의지가 얼마나 강한지 강조합니다.', '"jukgo jugeo"cheoreom banbokhaeseo uijiga eolmana ganghanji gangjohamnida', 'Lặp "chết đi chết lại" để nhấn mạnh ý chí mạnh mẽ.', 'Phân tích tu từ.'], ['재미있어요.', 'jaemiisseoyo', 'Cảm tính.'], ['효과 없어요.', 'hyogwa eopseoyo', 'Sai.']),
        T(['베트남 문학과 비슷한 점은요?', 'Beteunam munhakgwa biseutan jeomeunyo?', 'Điểm giống văn học VN?'], ['베트남 고전 시에도 충과 절개를 노래한 작품이 많아서 정서가 비슷하다고 느꼈습니다.', 'Beteunam gojeon siedo chunggwa jeolgaereul noraehan jakpumi manaseo jeongseoga biseutadago neukkyeotseumnida', 'Thơ cổ VN cũng nhiều bài ca ngợi trung và tiết nên em thấy tình cảm tương đồng.', 'Liên hệ.'], ['전혀 달라요.', 'jeonhyeo dallayo', 'Thiếu liên hệ.'], ['몰라요.', 'mollayo', 'Thiếu.'])
      ], ket: 'Em đã cảm thụ một bài thời điệu cổ điển!'
    },
    tom: ['시조: 초장 – 중장 – 종장', '단심가: 일편단심, 충절'], nguphap: 'Văn học cổ điển', phatam: '읊다 [읍따], 넋 [넉]',
    loi: ['Hiểu 임 là người yêu trong ngữ cảnh này (ở đây là vua)'], btvn: ['Học thuộc 단심가', 'Viết cảm nhận 150 chữ', 'Thử viết 1 bài thời điệu 3 dòng của riêng em']
  };

  const d21 = {
    n: 21, ten: plan[20].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Kiểm tra giai đoạn 3: biên dịch, thuật ngữ ngân hàng, phiên dịch, pháp lý, quan hệ Việt – Hàn, thời điệu.',
    hoc: `<h4>Tóm tắt giai đoạn 3</h4>${tbl(['Chủ đề', 'Cụm then chốt'], [['Biên dịch', '직역/의역, 문맥, 용어집, 감수'], ['Ngân hàng', '예금, 적금, 담보, 연체, 만기, 약관'], ['Phiên dịch', '순차 통역, 되묻다, 중립'], ['Pháp lý', '갑/을, 조항, 위반, 손해 배상, 효력'], ['Việt – Hàn', '수교 1992, 공급망, 상생'], ['Thời điệu', '초장·중장·종장, 일편단심']])}`,
    qs: [['mc', '“Tiết kiệm tích luỹ hằng tháng”?', '적금', ['예금', '담보', '연체'], 'jeokgeum.'], ['mc', 'Phiên dịch nghe không rõ số, nên?', '정중하게 되묻는다', ['추측한다', '생략한다', '반올림한다'], 'Chính xác.']],
    noi: [['문맥에 맞게 의역했습니다.', 'munmaege matge uiyeokhaetseumnida – Tôi đã dịch thoát theo ngữ cảnh.'], ['본 계약은 서명한 날부터 효력이 발생합니다.', 'bon gyeyageun seomyeonghan nalbuteo hyoryeogi balsaenghamnida – Hợp đồng có hiệu lực từ ngày ký.']],
    hoithoai: {
      ctx: 'Mô phỏng: em vừa phiên dịch vừa giải thích điều khoản vay cho khách doanh nghiệp Hàn.', vai: 'Khách hỏi, em trả lời.', ai: '🏢 법인 고객',
      luot: [
        T(['담보가 꼭 필요해요?', 'damboga kkok piryohaeyo?', 'Có bắt buộc tài sản đảm bảo?'], ['대출 규모와 신용 등급에 따라 다르며, 자세한 조건은 약관과 심사 결과에 따릅니다.', 'daechul gyumowa sinyong deunggeube ttara dareumyeo, jasehan jogeoneun yakgwangwa simsa gyeolgwae ttareumnida', 'Tuỳ quy mô vay và xếp hạng tín dụng; điều kiện chi tiết theo điều khoản và kết quả thẩm định.', 'Chính xác, thận trọng.'], ['필요 없어요.', 'piryo eopseoyo', 'Hứa sai.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['연체하면 어떻게 돼요?', 'yeonchehamyeon eotteoke dwaeyo?', 'Quá hạn thì sao?'], ['연체 이자가 부과되고 신용 등급에 영향을 줄 수 있습니다.', 'yeonche ijaga bugwadoego sinyong deunggeube yeonghyangeul jul su itseumnida', 'Sẽ tính lãi quá hạn và có thể ảnh hưởng xếp hạng tín dụng.', 'Minh bạch.'], ['괜찮아요.', 'gwaenchanayo', 'Che giấu.'], ['감옥 가요.', 'gamok gayo', 'Sai, doạ.']),
        T(['계약서는 한국어로도 있어요?', 'gyeyakseoneun hangugeorodo isseoyo?', 'Hợp đồng có bản tiếng Hàn không?'], ['참고용 한국어 번역본을 드리고, 법적 효력은 베트남어 원문을 기준으로 한다는 점을 안내드립니다.', 'chamgoyong hangugeo beonyeokbon-eul deurigo, beopjeok hyoryeogeun Beteunameo wonmuneul gijuneuro handaneun jeomeul annaedeurimnida', 'Tôi gửi bản dịch tiếng Hàn để tham khảo, lưu ý hiệu lực pháp lý theo nguyên văn tiếng Việt.', 'Chuẩn pháp lý.'], ['없어요.', 'eopseoyo', 'Thiếu.'], ['번역본이 원문이에요.', 'beonyeokboni wonmunieyo', 'Sai.'])
      ], ket: 'Em đã kết hợp phiên dịch và nghiệp vụ ngân hàng!'
    },
    tom: ['Ôn giai đoạn 3', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn', phatam: 'Ôn thuật ngữ',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: học lại ngày yếu', 'Làm ⚡ Luyện nhanh', 'Dịch 1 trang tài liệu nghiệp vụ']
  };

  const d22 = {
    n: 22, ten: plan[21].ten, kinds: K,
    muc: 'Phát biểu trang trọng: khai mạc, bế mạc, chúc mừng, nâng ly; cấu trúc chào – cảm ơn – nội dung – chúc.',
    hoc: `${tbl(['Phần', 'Mẫu'], [['Chào', '존경하는 내빈 여러분, 안녕하십니까.'], ['Cảm ơn', '바쁘신 가운데 이 자리를 빛내 주셔서 감사합니다.'], ['Nội dung', '지난 10년을 돌아보면 감회가 새롭습니다.'], ['Chúc', '여러분의 건강과 행복을 기원합니다.'], ['Nâng ly', '제가 "위하여"를 외치면 …']])}`,
    vocab: [
      w('내빈', 'naebin', 'quan khách', '', ['존경하는 내빈 여러분', 'jongyeonghaneun naebin yeoreobun', 'Kính thưa quý quan khách']),
      w('개회사', 'gaehoesa', 'diễn văn khai mạc', '', ['개회사를 하다.', 'gaehoesareul hada', 'Đọc diễn văn khai mạc.']),
      w('폐회사', 'pyehoesa', 'diễn văn bế mạc', '', ['폐회사로 마치다.', 'pyehoesaro machida', 'Kết thúc bằng bế mạc.']),
      w('건배사', 'geonbaesa', 'lời nâng ly', '', ['건배사를 부탁드립니다.', 'geonbaesareul butakdeurimnida', 'Xin mời phát biểu nâng ly.']),
      w('뜻깊다', 'tteutgipda', 'ý nghĩa', '', ['뜻깊은 자리', 'tteutgipeun jari', 'buổi lễ ý nghĩa']),
      w('감회', 'gamhoe', 'cảm xúc hồi tưởng', '', ['감회가 새롭다.', 'gamhoega saeropda', 'Bồi hồi xúc động.']),
      w('빛내다', 'binnaeda', 'làm rạng rỡ', '', ['자리를 빛내 주셔서', 'jarireul binnae jusyeoseo', 'đã làm rạng rỡ buổi lễ']),
      w('성원', 'seongwon', 'sự ủng hộ', '', ['아낌없는 성원', 'akkimeomneun seongwon', 'sự ủng hộ hết mình']),
      w('아낌없다', 'akkimeopda', 'hết lòng, không tiếc', '', ['아낌없이 지원하다.', 'akkimeopsi jiwonhada', 'Hỗ trợ hết lòng.']),
      w('거듭', 'geodeup', 'một lần nữa', '', ['거듭 감사드립니다.', 'geodeup gamsadeurimnida', 'Một lần nữa xin cảm ơn.'])
    ],
    qs: [
      ['mc', 'Mở đầu diễn văn?', '존경하는 내빈 여러분, 안녕하십니까.', ['야, 다들 왔어?', '여러분 안녕.', '시작할게요.'], 'Trang trọng.'],
      ['mc', '“Cảm ơn quý vị đã làm rạng rỡ buổi lễ”?', '이 자리를 빛내 주셔서 감사합니다.', ['와 줘서 고마워.', '빛이 밝네요.', '자리가 좁아요.'], 'Nghi lễ.'],
      ['mc', '감회가 새롭다 = ?', 'bồi hồi xúc động', ['cảm thấy mới mẻ về đồ vật', 'cảm cúm', 'hồi hộp thi cử'], 'Hồi tưởng.'],
      ['hear', '그동안 아낌없는 성원을 보내 주신 여러분께 거듭 감사드립니다.', 'Một lần nữa xin cảm ơn quý vị đã ủng hộ hết lòng thời gian qua.', ['Xin lỗi quý vị.', 'Xin quý vị ủng hộ lần đầu.', 'Tạm biệt.'], 'Cảm ơn.'],
      ['hear', '이상으로 오늘 행사를 마치겠습니다. 감사합니다.', 'Xin kết thúc sự kiện hôm nay. Xin cảm ơn.', ['Bắt đầu sự kiện.', 'Nghỉ giải lao.', 'Mời ăn.'], 'Bế mạc.'],
      ['order', 'Sắp xếp: “Một lần nữa xin cảm ơn.”', ['거듭', '감사드립니다', '.'], '거듭 감사드립니다.']
    ],
    noi: [['존경하는 내빈 여러분, 안녕하십니까.', 'jongyeonghaneun naebin yeoreobun, annyeonghasimnikka – Kính thưa quý quan khách.'], ['감회가 새롭습니다.', 'gamhoega saeropseumnida – Tôi bồi hồi xúc động.'], ['여러분의 건강과 행복을 기원합니다.', 'yeoreobunui geonganggwa haengbogeul giwonhamnida – Chúc quý vị sức khoẻ và hạnh phúc.']],
    hoithoai: {
      ctx: 'Lễ kỷ niệm 10 năm chi nhánh; MC mời em phát biểu bằng tiếng Hàn cho khách Hàn.', vai: 'MC giới thiệu, em phát biểu.', ai: '🎤 사회자',
      luot: [
        T(['다음은 지점 대표의 인사 말씀이 있겠습니다.', 'daeumeun jijeom daepyoui insa malsseumi itgetseumnida', 'Tiếp theo là lời phát biểu của đại diện chi nhánh.'], ['존경하는 내빈 여러분, 바쁘신 가운데 이 뜻깊은 자리를 빛내 주셔서 진심으로 감사드립니다.', 'jongyeonghaneun naebin yeoreobun, bappeusin gaunde i tteutgipeun jarireul binnae jusyeoseo jinsimeuro gamsadeurimnida', 'Kính thưa quý quan khách, xin chân thành cảm ơn đã làm rạng rỡ buổi lễ ý nghĩa này.', 'Mở đầu chuẩn.'], ['안녕, 반가워요.', 'annyeong, bangawoyo', 'Suồng sã.'], ['저 떨려요.', 'jeo tteollyeoyo', 'Thiếu chuyên nghiệp.']),
        T(['(청중 박수)', '(cheongjung baksu)', '(Khán giả vỗ tay)'], ['지난 10년을 돌아보면 감회가 새롭습니다. 고객 여러분의 아낌없는 성원 덕분에 오늘이 있었습니다.', 'jinan simnyeoneul dorabomyeon gamhoega saeropseumnida. gogaek yeoreobunui akkimeomneun seongwon deokbune oneuri isseotseumnida', 'Nhìn lại 10 năm tôi bồi hồi. Nhờ sự ủng hộ hết lòng của quý khách mới có hôm nay.', 'Nội dung.'], ['우리가 최고예요.', 'uriga choegoyeyo', 'Khoe khoang.'], ['힘들었어요.', 'himdeureosseoyo', 'Than vãn.']),
        T(['(마무리 신호)', '(mamuri sinho)', '(Tín hiệu kết)'], ['앞으로도 변함없는 관심 부탁드리며, 여러분의 건강과 행복을 기원합니다. 감사합니다.', 'apeurodo byeonhameomneun gwansim butakdeurimyeo, yeoreobunui geonganggwa haengbogeul giwonhamnida. gamsahamnida', 'Mong tiếp tục nhận được sự quan tâm, chúc quý vị sức khoẻ và hạnh phúc. Xin cảm ơn.', 'Kết chuẩn.'], ['끝.', 'kkeut', 'Cụt.'], ['밥 먹어요.', 'bap meogeoyo', 'Suồng sã.'])
      ], ket: 'Em đã phát biểu lễ kỷ niệm trang trọng, xúc động.'
    },
    tom: ['Chào – Cảm ơn – Nội dung – Chúc', '내빈 / 개회사 / 폐회사 / 건배사 / 감회 / 성원'], nguphap: 'Diễn văn trang trọng', phatam: '뜻깊다 [뜯낍따]',
    loi: ['Suồng sã trong lễ', 'Kể khổ thay vì cảm ơn'], btvn: ['Soạn diễn văn 2 phút', 'Tập đọc trước gương', 'Luyện 🎤 3 câu']
  };

  const d23 = {
    n: 23, ten: plan[22].ten, kinds: K,
    muc: 'Phỏng vấn vị trí cấp cao: năng lực, thành tích có số liệu (STAR), động cơ, điểm mạnh – yếu, tầm nhìn.',
    hoc: `${tbl(['STAR', 'Mẫu'], [['Situation', '당시 지점의 디지털 거래 비중이 낮았습니다.'], ['Task', '제 역할은 모바일 전환을 이끄는 것이었습니다.'], ['Action', '직원 교육과 고객 안내 캠페인을 진행했습니다.'], ['Result', '1년 만에 비중이 2배로 늘었습니다.']])}`,
    vocab: [
      w('역량', 'yeongnyang', 'năng lực', '', ['핵심 역량', 'haeksim yeongnyang', 'năng lực cốt lõi']),
      w('성과', 'seonggwa', 'thành tích', '', ['성과를 내다.', 'seonggwareul naeda', 'Đạt thành tích.']),
      w('지원 동기', 'jiwon donggi', 'động cơ ứng tuyển', '', ['지원 동기를 말하다.', 'jiwon donggireul malhada', 'Nói động cơ ứng tuyển.']),
      w('포부', 'pobu', 'hoài bão', '', ['입사 후 포부', 'ipsa hu pobu', 'hoài bão sau khi vào công ty']),
      w('강점', 'gangjeom', 'điểm mạnh', '', ['저의 강점은…', 'jeoui gangjeomeun…', 'Điểm mạnh của tôi là…']),
      w('약점', 'yakjeom', 'điểm yếu', '', ['약점을 보완하다.', 'yakjeomeul bowanhada', 'Khắc phục điểm yếu.']),
      w('기여하다', 'giyeohada', 'đóng góp', '', ['회사에 기여하다.', 'hoesae giyeohada', 'Đóng góp cho công ty.']),
      w('이끌다', 'ikkeulda', 'dẫn dắt', '', ['팀을 이끌다.', 'timeul ikkeulda', 'Dẫn dắt nhóm.']),
      w('비중', 'bijung', 'tỷ trọng', '', ['비중이 늘었다.', 'bijungi neureotda', 'Tỷ trọng tăng.']),
      w('비전', 'bijeon', 'tầm nhìn', '', ['회사의 비전', 'hoesaui bijeon', 'tầm nhìn công ty'])
    ],
    qs: [
      ['mc', 'Nói thành tích tốt nhất?', '1년 만에 디지털 거래 비중을 2배로 늘렸습니다.', ['열심히 했습니다.', '성과가 좋았어요.', '다 잘했어요.'], 'Có số liệu.'],
      ['mc', 'Nói điểm yếu khéo?', '꼼꼼한 편이라 속도가 느렸지만 우선순위 관리로 보완하고 있습니다.', ['약점 없습니다.', '게을러요.', '다 못해요.'], 'Yếu + khắc phục.'],
      ['mc', '포부 = ?', 'hoài bão', ['phụ bếp', 'phong phú', 'bổ sung'], 'pobu.'],
      ['hear', '저의 강점은 데이터를 바탕으로 문제를 분석하고 팀을 이끄는 역량입니다.', 'Điểm mạnh của tôi là năng lực phân tích vấn đề dựa trên dữ liệu và dẫn dắt nhóm.', ['Điểm mạnh là ngoại hình.', 'Không có điểm mạnh.', 'Thích làm một mình.'], 'Năng lực.'],
      ['hear', '입사 후에는 베트남 시장 확대에 기여하고 싶습니다.', 'Sau khi vào công ty tôi muốn đóng góp mở rộng thị trường VN.', ['Muốn nghỉ sớm.', 'Muốn làm ở Hàn.', 'Không có kế hoạch.'], 'Hoài bão.'],
      ['order', 'Sắp xếp: “Dẫn dắt nhóm.”', ['팀을', '이끌다', '.'], '팀을 이끌다.']
    ],
    noi: [['저의 강점은 … 입니다.', 'jeoui gangjeomeun … imnida – Điểm mạnh của tôi là…'], ['그 결과 비중이 2배로 늘었습니다.', 'geu gyeolgwa bijungi dubaero neureotseumnida – Kết quả tỷ trọng tăng gấp đôi.'], ['회사의 비전에 기여하고 싶습니다.', 'hoesaui bijeone giyeohago sipseumnida – Tôi muốn đóng góp vào tầm nhìn công ty.']],
    hoithoai: {
      ctx: 'Phỏng vấn vị trí trưởng nhóm tại ngân hàng Hàn ở TP.HCM.', vai: 'Hội đồng hỏi, em trả lời.', ai: '👔 면접관',
      luot: [
        T(['지원 동기가 뭐예요?', 'jiwon donggiga mwoyeyo?', 'Động cơ ứng tuyển?'], ['디지털 금융에서 쌓은 경험을 한국계 은행의 베트남 시장 확대에 기여하고 싶어서 지원했습니다.', 'dijiteol geumyungeseo ssaeun gyeongheomeul hanggukgye eunhaengui Beteunam sijang hwakdae-e giyeohago sipeoseo jiwonhaetseumnida', 'Tôi muốn đóng góp kinh nghiệm tài chính số vào việc mở rộng thị trường VN của ngân hàng Hàn.', 'Rõ, gắn công ty.'], ['월급 때문에요.', 'wolgeup ttaemuneyo', 'Thiếu khéo.'], ['그냥요.', 'geunyangyo', 'Thiếu.']),
        T(['대표적인 성과를 말해 주세요.', 'daepyojeogin seonggwareul malhae juseyo', 'Nói thành tích tiêu biểu.'], ['지점의 디지털 거래 비중이 낮은 상황에서 교육과 캠페인을 이끌어 1년 만에 비중을 두 배로 늘렸습니다.', 'jijeomui dijiteol georae bijungi najeun sanghwang-eseo gyoyukgwa kaempeineul ikkeureo illyeon mane bijungeul du baero neullyeotseumnida', 'Khi tỷ trọng giao dịch số của chi nhánh thấp, tôi dẫn dắt đào tạo và chiến dịch, sau 1 năm tăng gấp đôi.', 'STAR.'], ['많이 했어요.', 'mani haesseoyo', 'Mơ hồ.'], ['기억 안 나요.', 'gieok an nayo', 'Thiếu.']),
        T(['약점은요?', 'yakjeomeunyo?', 'Điểm yếu?'], ['완벽을 추구하다 보니 위임이 부족했는데, 지금은 역할을 나누고 결과를 점검하는 방식으로 보완하고 있습니다.', 'wanbyeogeul chuguhada boni wiimi bujokhaenneunde, jigeumeun yeokhareul nanugo gyeolgwareul jeomgeomhaneun bangsigeuro bowanhago itseumnida', 'Theo đuổi hoàn hảo nên từng ít giao việc, giờ tôi khắc phục bằng chia vai và kiểm tra kết quả.', 'Yếu + khắc phục.'], ['없습니다.', 'eopseumnida', 'Thiếu thật.'], ['게으른 거요.', 'geeureun geoyo', 'Tự hại.'])
      ], ket: 'Em đã trả lời phỏng vấn cấp cao thuyết phục.'
    },
    tom: ['STAR', '역량 / 성과 / 지원 동기 / 포부 / 강점·약점 / 기여'], nguphap: 'Phỏng vấn cấp cao', phatam: '역량 [영냥], 약점 [약쩜]',
    loi: ['Thành tích không số liệu', 'Nói "không có điểm yếu"'], btvn: ['Viết 3 câu chuyện STAR của em', 'Tập trả lời 5 câu phỏng vấn', 'Luyện 🎤 3 câu']
  };

  const d24 = {
    n: 24, ten: plan[23].ten, kinds: K,
    muc: 'Thảo luận tại hội thảo: vai trò chủ toạ, người phát đề, người bình luận; xin bổ sung, nêu quan điểm khác, hỏi – đáp.',
    hoc: `${tbl(['Vai / Chức năng', 'Mẫu'], [['Chủ toạ', '지금부터 질의응답 시간을 갖겠습니다.'], ['Bổ sung', '앞서 말씀하신 내용에 한 가지 덧붙이자면 …'], ['Ý khác', '저는 조금 다른 견해를 가지고 있습니다.'], ['Hỏi', '발제자께 한 가지 여쭙고 싶습니다.']])}`,
    vocab: [
      w('발제', 'balje', 'trình bày đề dẫn', '', ['발제를 맡다.', 'baljereul matda', 'Đảm nhận đề dẫn.']),
      w('토론자', 'toronja', 'người thảo luận', '', ['지정 토론자', 'jijeong toronja', 'người thảo luận được chỉ định']),
      w('좌장', 'jwajang', 'chủ toạ', '', ['좌장을 맡다.', 'jwajangeul matda', 'Làm chủ toạ.']),
      w('질의응답', 'jiruieungdap', 'hỏi đáp', '', ['질의응답 시간', 'jiruieungdap sigan', 'thời gian hỏi đáp']),
      w('견해', 'gyeonhae', 'quan điểm', '', ['다른 견해', 'dareun gyeonhae', 'quan điểm khác']),
      w('덧붙이다', 'deotbuchida', 'bổ sung thêm', '', ['한마디 덧붙이다.', 'hanmadi deotbuchida', 'Bổ sung một câu.']),
      w('쟁점', 'jaengjeom', 'điểm tranh luận', '', ['핵심 쟁점', 'haeksim jaengjeom', 'điểm tranh luận chính']),
      w('이견', 'igyeon', 'ý kiến khác biệt', '', ['이견을 좁히다.', 'igyeoneul jopida', 'Thu hẹp bất đồng.']),
      w('여쭙다', 'yeojjupda', 'xin hỏi (kính)', '', ['한 가지 여쭙겠습니다.', 'han gaji yeojjupgetseumnida', 'Xin hỏi một điều.']),
      w('학회', 'hakhoe', 'hội nghị học thuật', '', ['학회에 참석하다.', 'hakhoee chamseokhada', 'Dự hội nghị học thuật.'])
    ],
    qs: [
      ['mc', 'Bổ sung ý người trước?', '앞서 말씀하신 내용에 한 가지 덧붙이자면 …', ['그건 틀렸어요.', '제 차례예요.', '다시 말하세요.'], 'Lịch sự.'],
      ['mc', '좌장 = ?', 'chủ toạ', ['ghế ngồi', 'tả hữu', 'thủ trưởng'], 'jwajang.'],
      ['mc', 'Hỏi người trình bày lịch sự?', '발제자께 한 가지 여쭙고 싶습니다.', ['발제자, 질문 있어.', '그거 왜 그래요?', '이해 안 돼요.'], '여쭙다.'],
      ['hear', '이번 토론의 핵심 쟁점은 규제와 혁신 사이의 균형입니다.', 'Điểm tranh luận chính là cân bằng giữa quản lý và đổi mới.', ['Không có tranh luận.', 'Chỉ về quản lý.', 'Chỉ về đổi mới.'], '쟁점.'],
      ['hear', '저는 발제자와 조금 다른 견해를 가지고 있습니다.', 'Tôi có quan điểm hơi khác người đề dẫn.', ['Tôi đồng ý hoàn toàn.', 'Tôi không có ý kiến.', 'Tôi là người đề dẫn.'], '견해.'],
      ['order', 'Sắp xếp: “Thu hẹp bất đồng.”', ['이견을', '좁히다', '.'], '이견을 좁히다.']
    ],
    noi: [['한 가지 덧붙이자면 …', 'han gaji deotbuchijamyeon … – Xin bổ sung một điều…'], ['저는 조금 다른 견해를 가지고 있습니다.', 'jeoneun jogeum dareun gyeonhaereul gajigo itseumnida – Tôi có quan điểm hơi khác.'], ['발제자께 여쭙고 싶습니다.', 'baljejakke yeojjupgo sipseumnida – Xin hỏi người đề dẫn.']],
    hoithoai: {
      ctx: 'Hội thảo “Chuyển đổi số ngân hàng Việt – Hàn”; em là người thảo luận.', vai: 'Chủ toạ điều phối, em phát biểu.', ai: '🎓 좌장',
      luot: [
        T(['지정 토론자께서 의견을 말씀해 주시죠.', 'jijeong toronjakkeseo uigyeoneul malsseumhae jusijyo', 'Mời người thảo luận phát biểu.'], ['좋은 발제 감사합니다. 앞서 말씀하신 내용에 한 가지 덧붙이자면, 지방 고객의 디지털 격차도 고려해야 합니다.', 'joeun balje gamsahamnida. apseo malsseumhasin naeyonge han gaji deotbuchijamyeon, jibang gogaegui dijiteol gyeokchado goryeohaeya hamnida', 'Cảm ơn bài đề dẫn. Xin bổ sung: cần xét cả khoảng cách số của khách ở địa phương.', 'Bổ sung có giá trị.'], ['다 맞아요.', 'da majayo', 'Thiếu đóng góp.'], ['발제가 별로예요.', 'baljega byeolloyeyo', 'Thô.']),
        T(['구체적으로 설명해 주시겠어요?', 'guchejeogeuro seolmyeonghae jusigesseoyo?', 'Giải thích cụ thể được không?'], ['예를 들어 농촌 지역 고령 고객은 앱보다 창구를 선호하므로 단계적 전환이 필요하다고 봅니다.', 'yereul deureo nongchon jiyeok goryeong gogaegeun aepboda changgureul seonhohameuro dangyejeok jeonhwani piryohadago bomnida', 'Ví dụ khách cao tuổi nông thôn thích quầy hơn app, nên cần chuyển đổi từng bước.', 'Có ví dụ.'], ['그냥 그래요.', 'geunyang geuraeyo', 'Mơ hồ.'], ['나중에요.', 'najungeyo', 'Né.']),
        T(['발제자께 질문하실 것이 있나요?', 'baljejakke jilmunhasil geosi innayo?', 'Có câu hỏi cho người đề dẫn không?'], ['네, 발제자께 한 가지 여쭙고 싶습니다. 한국에서는 이 격차를 어떻게 해소했는지 궁금합니다.', 'ne, baljejakke han gaji yeojjupgo sipseumnida. hangugeseoneun i gyeokchareul eotteoke haesohaenneunji gunggeumhamnida', 'Vâng, xin hỏi người đề dẫn: Hàn Quốc đã thu hẹp khoảng cách này thế nào?', 'Câu hỏi tốt.'], ['없어요.', 'eopseoyo', 'Bỏ lỡ.'], ['왜 그랬어요?', 'wae geuraesseoyo?', 'Thiếu lễ.'])
      ], ket: 'Em đã thảo luận tại hội thảo chuyên nghiệp.'
    },
    tom: ['발제 / 토론자 / 좌장 / 질의응답 / 견해 / 쟁점 / 이견', '덧붙이자면 / 여쭙다'], nguphap: 'Ngôn ngữ hội thảo', phatam: '질의응답 [지릐응답]',
    loi: ['Phản bác thô người đề dẫn'], btvn: ['Chuẩn bị 1 bình luận 2 phút cho 1 bài đề dẫn', 'Viết 3 câu hỏi hội thảo', 'Luyện 🎤 3 câu']
  };

  const d25 = {
    n: 25, ten: plan[24].ten, kinds: K,
    muc: 'Trình bày đề tài nghiên cứu: phương pháp, đối tượng khảo sát, kết quả có ý nghĩa thống kê, tương quan, đề xuất và hướng tiếp.',
    hoc: `${tbl(['Phần', 'Mẫu'], [['Phương pháp', '본 연구는 설문 조사 방법을 사용하였다.'], ['Kết quả', '두 변수 사이에 유의미한 상관관계가 나타났다.'], ['Diễn giải', '이를 통해 … 을/를 도출할 수 있었다.'], ['Đề xuất', '향후 연구에서는 … 을/를 제언한다.']])}`,
    vocab: [
      w('연구 방법', 'yeongu bangbeop', 'phương pháp nghiên cứu', '', ['연구 방법을 설명하다.', 'yeongu bangbeobeul seolmyeonghada', 'Giải thích phương pháp.']),
      w('응답자', 'eungdapja', 'người trả lời (khảo sát)', '', ['응답자 300명', 'eungdapja sambaek myeong', '300 người trả lời']),
      w('유의미하다', 'yuuimihada', 'có ý nghĩa (thống kê)', '', ['유의미한 차이', 'yuuimihan chai', 'khác biệt có ý nghĩa']),
      w('상관관계', 'sanggwangwangye', 'tương quan', '', ['양의 상관관계', 'yangui sanggwangwangye', 'tương quan thuận']),
      w('도출하다', 'dochulhada', 'rút ra', '', ['결론을 도출하다.', 'gyeolloneul dochulhada', 'Rút ra kết luận.']),
      w('향후', 'hyanghu', 'sau này, tới đây', '', ['향후 과제', 'hyanghu gwaje', 'nhiệm vụ tới đây']),
      w('제언하다', 'jeeonhada', 'kiến nghị', '', ['정책을 제언하다.', 'jeongchaegeul jeeonhada', 'Kiến nghị chính sách.']),
      w('분포', 'bunpo', 'phân bố', '', ['연령 분포', 'yeollyeong bunpo', 'phân bố độ tuổi']),
      w('경향', 'gyeonghyang', 'khuynh hướng', '', ['증가하는 경향', 'jeunggahaneun gyeonghyang', 'khuynh hướng tăng']),
      w('수치화하다', 'suchihwahada', 'lượng hoá', '', ['만족도를 수치화하다.', 'manjokdoreul suchihwahada', 'Lượng hoá mức hài lòng.'])
    ],
    qs: [
      ['mc', '“Tương quan có ý nghĩa”?', '유의미한 상관관계', ['의미 없는 관계', '상관없는 관계', '유명한 관계'], 'Thống kê.'],
      ['mc', '도출하다 = ?', 'rút ra (kết luận)', ['đề xuất', 'xuất bản', 'đột xuất'], 'dochulhada.'],
      ['mc', 'Câu đề xuất cuối bài?', '향후 연구에서는 표본을 확대할 것을 제언한다.', ['연구 끝.', '더 할 게 없다.', '다음은 없다.'], 'Kiến nghị.'],
      ['hear', '응답자 300명 중 70%가 모바일 앱을 주로 사용하는 것으로 나타났다.', '70% trong 300 người trả lời chủ yếu dùng app.', ['30% dùng app.', 'Không ai dùng app.', '300% dùng app.'], 'Số liệu.'],
      ['hear', '사용 빈도와 만족도 사이에 유의미한 양의 상관관계가 확인되었다.', 'Xác nhận tương quan thuận có ý nghĩa giữa tần suất dùng và mức hài lòng.', ['Tương quan nghịch.', 'Không có tương quan.', 'Chưa phân tích.'], 'Kết quả.'],
      ['order', 'Sắp xếp: “Rút ra kết luận.”', ['결론을', '도출하다', '.'], '결론을 도출하다.']
    ],
    noi: [['본 연구는 설문 조사 방법을 사용하였습니다.', 'bon yeonguneun seolmun josa bangbeobeul sayonghayeotseumnida – Nghiên cứu dùng phương pháp khảo sát.'], ['유의미한 상관관계가 나타났습니다.', 'yuuimihan sanggwangwangyega natanatseumnida – Xuất hiện tương quan có ý nghĩa.'], ['향후 과제를 제언하겠습니다.', 'hyanghu gwajereul jeeonhagesseumnida – Xin kiến nghị nhiệm vụ tới.']],
    hoithoai: {
      ctx: 'Em bảo vệ đề tài trước hội đồng.', vai: 'Hội đồng hỏi, em trả lời.', ai: '🎓 심사위원장',
      luot: [
        T(['연구 방법을 간단히 설명해 주세요.', 'yeongu bangbeobeul gandanhi seolmyeonghae juseyo', 'Giải thích ngắn phương pháp.'], ['20대에서 60대까지 응답자 300명을 대상으로 설문 조사를 실시하고 상관 분석을 했습니다.', 'isipdaeeseo yuksipdaekkaji eungdapja sambaek myeongeul daesangeuro seolmun josareul silsihago sanggwan bunseogeul haetseumnida', 'Khảo sát 300 người 20–60 tuổi và phân tích tương quan.', 'Rõ ràng.'], ['물어봤어요.', 'mureobwasseoyo', 'Sơ sài.'], ['인터넷 봤어요.', 'inteonet bwasseoyo', 'Thiếu khoa học.']),
        T(['결과가 일반화될 수 있나요?', 'gyeolgwaga ilbanhwadoel su innayo?', 'Kết quả khái quát hoá được không?'], ['표본이 남부 지역에 집중되어 있어서 일반화에는 한계가 있으며, 향후 지역을 확대할 필요가 있습니다.', 'pyoboni nambu jiyeoge jipjungdoeeo isseoseo ilbanhwaeneun hangyega isseumyeo, hyanghu jiyeogeul hwakdaehal piryoga itseumnida', 'Mẫu tập trung miền Nam nên khái quát hoá có hạn chế, sau này cần mở rộng vùng.', 'Trung thực học thuật.'], ['네, 완벽해요.', 'ne, wanbyeokhaeyo', 'Phóng đại.'], ['모르겠습니다.', 'moreugetseumnida', 'Thiếu.']),
        T(['실무적 시사점은요?', 'silmujeok sisajeomeunyo?', 'Hàm ý thực tiễn?'], ['앱 사용을 늘리는 교육이 만족도 향상으로 이어질 수 있다는 점을 도출했습니다.', 'aep sayongeul neullineun gyoyugi manjokdo hyangsangeuro ieojil su itdaneun jeomeul dochulhaetseumnida', 'Rút ra: đào tạo tăng dùng app có thể dẫn đến tăng hài lòng.', 'Ứng dụng.'], ['없어요.', 'eopseoyo', 'Thiếu.'], ['은행이 알아서 하겠죠.', 'eunhaengi araseo hagetjyo', 'Né.'])
      ], ket: 'Em đã bảo vệ đề tài nghiên cứu vững vàng.'
    },
    tom: ['연구 방법 / 응답자 / 유의미하다 / 상관관계 / 도출 / 향후 / 제언'], nguphap: 'Trình bày nghiên cứu', phatam: '상관관계 [상관관계], 유의미 [유의미]',
    loi: ['Phóng đại khả năng khái quát hoá'], btvn: ['Soạn 5 slide trình bày đề tài', 'Viết phần kết quả 150 chữ', 'Luyện 🎤 3 câu']
  };

  const d26 = {
    n: 26, ten: plan[25].ten, kinds: K,
    muc: 'Đọc văn bản học thuật: tóm tắt (초록), từ khoá, tạp chí, chú thích; đọc nhanh nắm cấu trúc và hàm ý.',
    hoc: `${tbl(['Chiến lược', 'Cách làm'], [['Đọc 초록 trước', 'Nắm mục đích – phương pháp – kết quả'], ['Xem 키워드', 'Biết phạm vi'], ['Đọc 결론 rồi mới 본론', 'Biết đích đến'], ['Ghi chú chú thích', 'Tìm nguồn liên quan']])}`,
    vocab: [
      w('초록', 'chorok', 'tóm tắt (abstract)', '', ['논문 초록', 'nonmun chorok', 'tóm tắt luận văn']),
      w('논문', 'nonmun', 'luận văn, bài báo khoa học', '', ['논문을 발표하다.', 'nonmuneul balpyohada', 'Công bố bài báo.']),
      w('학술지', 'haksulji', 'tạp chí học thuật', '', ['학술지에 게재되다.', 'haksuljie gejaedoeda', 'Được đăng tạp chí.']),
      w('저자', 'jeoja', 'tác giả', '', ['공동 저자', 'gongdong jeoja', 'đồng tác giả']),
      w('각주', 'gakju', 'chú thích cuối trang', '', ['각주를 달다.', 'gakjureul dalda', 'Ghi chú thích.']),
      w('함의', 'hamui', 'hàm ý', '', ['정책적 함의', 'jeongchaekjeok hamui', 'hàm ý chính sách']),
      w('개관하다', 'gaegwanhada', 'khái quát, điểm qua', '', ['선행 연구를 개관하다.', 'seonhaeng yeongureul gaegwanhada', 'Điểm qua nghiên cứu trước.']),
      w('실증', 'siljeung', 'thực chứng', '', ['실증 분석', 'siljeung bunseok', 'phân tích thực chứng']),
      w('이론적', 'ironjeok', 'mang tính lý thuyết', '', ['이론적 배경', 'ironjeok baegyeong', 'cơ sở lý thuyết']),
      w('게재되다', 'gejaedoeda', 'được đăng', '', ['논문이 게재되었다.', 'nonmuni gejaedoeeotda', 'Bài đã được đăng.'])
    ],
    qs: [
      ['mc', 'Đọc luận văn nhanh, đọc gì trước?', '초록', ['참고 문헌 끝부분', '각주만', '표지만'], 'Abstract.'],
      ['mc', '각주 = ?', 'chú thích cuối trang', ['góc phố', 'kịch bản', 'cổ phần'], 'gakju.'],
      ['mc', '이론적 배경 = ?', 'cơ sở lý thuyết', ['bối cảnh thực tế', 'phong cảnh', 'lý lịch'], 'Học thuật.'],
      ['hear', '본 논문은 이론적 배경을 개관한 후 실증 분석을 통해 가설을 검증하였다.', 'Bài điểm qua cơ sở lý thuyết rồi kiểm chứng giả thuyết bằng phân tích thực chứng.', ['Bài chỉ có lý thuyết.', 'Không có giả thuyết.', 'Bài là tiểu thuyết.'], 'Cấu trúc.'],
      ['hear', '이 연구 결과는 금융 교육 정책에 중요한 함의를 가진다.', 'Kết quả có hàm ý quan trọng với chính sách giáo dục tài chính.', ['Không liên quan chính sách.', 'Kết quả sai.', 'Chỉ về y tế.'], '함의.'],
      ['order', 'Sắp xếp: “Bài đã được đăng.”', ['논문이', '게재되었다', '.'], '논문이 게재되었다.']
    ],
    noi: [['먼저 초록을 읽어 보겠습니다.', 'meonjeo chorogeul ilgeo bogesseumnida – Trước hết tôi đọc phần tóm tắt.'], ['이 논문의 함의는 …', 'i nonmunui hamuineun … – Hàm ý của bài này là…'], ['학술지에 게재되었습니다.', 'haksuljie gejaedoeeotseumnida – Đã được đăng trên tạp chí học thuật.']],
    hoithoai: {
      ctx: 'Nhóm đọc luận văn: em tóm tắt một bài báo khoa học tiếng Hàn.', vai: 'Bạn hỏi, em trả lời.', ai: '📚 연구 모임',
      luot: [
        T(['이 논문은 뭘 연구했어요?', 'i nonmuneun mwol yeonguhaesseoyo?', 'Bài này nghiên cứu gì?'], ['초록에 따르면 중소기업의 디지털 전환이 생산성에 미치는 영향을 실증적으로 분석했습니다.', 'choroge ttareumyeon jungsogieobui dijiteol jeonhwani saengsanseonge michineun yeonghyangeul siljeungjeogeuro bunseokhaetseumnida', 'Theo tóm tắt, bài phân tích thực chứng ảnh hưởng của chuyển đổi số tới năng suất DN vừa và nhỏ.', 'Tóm tắt.'], ['디지털이요.', 'dijiteoriyo', 'Sơ sài.'], ['안 읽었어요.', 'an ilgeosseoyo', 'Thiếu.']),
        T(['결과는요?', 'gyeolgwaneunyo?', 'Kết quả?'], ['도입 2년 이후부터 생산성이 유의미하게 높아지는 경향이 나타났습니다.', 'doip inyeon ihubuteo saengsanseongi yuuimihage nopajineun gyeonghyangi natanatseumnida', 'Từ sau 2 năm áp dụng, năng suất có xu hướng tăng có ý nghĩa.', 'Kết quả.'], ['좋았어요.', 'joasseoyo', 'Mơ hồ.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['우리 연구에 어떤 함의가 있을까요?', 'uri yeongue eotteon hamuiga isseulkkayo?', 'Hàm ý gì cho nghiên cứu mình?'], ['단기 효과만 보면 안 되고 최소 2년 이상의 장기 데이터가 필요하다는 점입니다.', 'dangi hyogwaman bomyeon an doego choeso inyeon isangui janggi deiteoga piryohadaneun jeomimnida', 'Không chỉ xem hiệu quả ngắn hạn, cần dữ liệu dài hạn ít nhất 2 năm.', 'Áp dụng.'], ['없어요.', 'eopseoyo', 'Thiếu.'], ['그냥 베껴요.', 'geunyang ppekkyeoyo', 'Đạo văn.'])
      ], ket: 'Em đã đọc – tóm tắt – rút hàm ý từ bài báo khoa học.'
    },
    tom: ['초록 / 논문 / 학술지 / 저자 / 각주 / 함의 / 개관 / 실증 / 이론적'], nguphap: 'Đọc học thuật', phatam: '학술지 [학쑬찌]',
    loi: ['Đọc từ đầu đến cuối không chiến lược'], btvn: ['Đọc 1 초록 tiếng Hàn (RISS/KCI), tóm 3 câu', 'Ghi 5 từ khoá', 'Luyện 🎤 3 câu']
  };

  const d27 = {
    n: 27, ten: plan[26].ten, kinds: K,
    muc: 'Nghe chương trình thời sự và tranh luận truyền hình: người dẫn, khách mời, dư luận, tranh cãi, nhường lời – theo dõi nhiều giọng.',
    hoc: `${tbl(['Tín hiệu', 'Ý nghĩa'], [['진행자: 다음 주제로 넘어가겠습니다', 'chuyển chủ đề'], ['패널: 제 말씀 좀 끝까지 들어 주시죠', 'giữ lượt lời'], ['여론 조사에 따르면', 'dẫn dư luận'], ['마무리 발언', 'phát biểu kết']])}
      ${tip('⚖️ Nghe tranh luận: ghi lập trường từng người, không vội đứng về phía nào.')}`,
    vocab: [
      w('시사', 'sisa', 'thời sự', '', ['시사 프로그램', 'sisa peurogeuraem', 'chương trình thời sự']),
      w('패널', 'paeneol', 'khách mời bình luận', '', ['패널 토론', 'paeneol toron', 'thảo luận khách mời']),
      w('진행자', 'jinhaengja', 'người dẫn chương trình', '', ['진행자가 질문했다.', 'jinhaengjaga jilmunhaetda', 'Người dẫn đã hỏi.']),
      w('여론', 'yeoron', 'dư luận', '', ['여론 조사', 'yeoron josa', 'thăm dò dư luận']),
      w('공방', 'gongbang', 'công kích qua lại', '', ['치열한 공방', 'chiyeolhan gongbang', 'tranh luận gay gắt']),
      w('논란', 'nollan', 'tranh cãi', '', ['논란이 일다.', 'nollani ilda', 'Dấy lên tranh cãi.']),
      w('사안', 'saan', 'vụ việc, vấn đề', '', ['중요한 사안', 'jungyohan saan', 'vấn đề quan trọng']),
      w('발언권', 'bareongwon', 'quyền phát biểu', '', ['발언권을 얻다.', 'bareongwoneul eotda', 'Được quyền phát biểu.']),
      w('마무리', 'mamuri', 'phần kết', '', ['마무리 발언', 'mamuri bareon', 'phát biểu kết']),
      w('엇갈리다', 'eotgallida', 'trái chiều', '', ['의견이 엇갈렸다.', 'uigyeoni eotgallyeotda', 'Ý kiến trái chiều.'])
    ],
    qs: [
      ['hear', '이 사안에 대해 전문가들의 의견이 크게 엇갈리고 있습니다.', 'Về vấn đề này ý kiến chuyên gia rất trái chiều.', ['Chuyên gia đồng thuận.', 'Không ai có ý kiến.', 'Vấn đề đã xong.'], '엇갈리다.'],
      ['hear', '여론 조사에 따르면 응답자의 과반이 찬성하는 것으로 나타났습니다.', 'Theo thăm dò, quá nửa người trả lời tán thành.', ['Đa số phản đối.', 'Không thăm dò.', 'Một phần ba tán thành.'], 'Dư luận.'],
      ['hear', '시간 관계상 마무리 발언을 1분씩 부탁드리겠습니다.', 'Do thời gian, xin mỗi vị phát biểu kết 1 phút.', ['Mỗi người 10 phút.', 'Bắt đầu chương trình.', 'Không có phát biểu kết.'], 'Dẫn chương trình.'],
      ['mc', '논란 = ?', 'tranh cãi', ['luận văn', 'hỗn loạn', 'luận điểm'], 'nollan.'],
      ['mc', 'Nghe tranh luận nên?', 'Ghi lập trường từng người, giữ khách quan', ['Chọn phe ngay', 'Chỉ nghe một người', 'Bỏ qua số liệu'], 'Chiến lược.'],
      ['order', 'Sắp xếp: “Ý kiến trái chiều.”', ['의견이', '엇갈렸다', '.'], '의견이 엇갈렸다.']
    ],
    noi: [['의견이 엇갈리고 있습니다.', 'uigyeoni eotgalligo itseumnida – Ý kiến đang trái chiều.'], ['여론 조사에 따르면 …', 'yeoron josae ttareumyeon … – Theo thăm dò dư luận…'], ['제 말씀 좀 끝까지 들어 주시죠.', 'je malsseum jom kkeutkkaji deureo jusijyo – Xin nghe tôi nói hết.']],
    hoithoai: {
      ctx: 'Sau khi xem tranh luận truyền hình về giờ làm việc linh hoạt, sếp hỏi em tóm tắt.', vai: 'Sếp hỏi, em trả lời khách quan.', ai: '👨‍💼 팀장님',
      luot: [
        T(['어제 토론 어땠어요?', 'eoje toron eottaesseoyo?', 'Cuộc tranh luận hôm qua thế nào?'], ['유연 근무제를 두고 노사 측 패널의 의견이 크게 엇갈렸고 공방이 치열했습니다.', 'yuyeon geunmujereul dugo nosa cheuk paeneorui uigyeoni keuge eotgallyeotgo gongbangi chiyeolhaetseumnida', 'Về làm việc linh hoạt, ý kiến khách mời phía lao động và sử dụng lao động rất trái chiều, tranh luận gay gắt.', 'Khách quan.'], ['재미있었어요.', 'jaemiisseosseoyo', 'Cảm tính.'], ['노동자가 맞아요.', 'nodongjaga majayo', 'Thiên lệch khi được hỏi tóm tắt.']),
        T(['각각 어떤 주장이었어요?', 'gakgak eotteon jujangieosseoyo?', 'Mỗi bên chủ trương gì?'], ['근로자 측은 삶의 질 향상을, 경영자 측은 업무 관리의 어려움을 강조했습니다.', 'geulloja cheugeun salmui jil hyangsangeul, gyeongyeongja cheugeun eommu gwalliui eoryeoumeul gangjohaetseumnida', 'Phía người lao động nhấn mạnh nâng chất lượng sống, phía quản lý nhấn mạnh khó quản lý công việc.', 'Cân bằng.'], ['다 똑같았어요.', 'da ttokgatasseoyo', 'Sai.'], ['기억 안 나요.', 'gieok an nayo', 'Thiếu.']),
        T(['여론은요?', 'yeoroneunyo?', 'Dư luận?'], ['여론 조사에서는 과반이 찬성했지만, 업종별로 차이가 크다고 했습니다.', 'yeoron josaeseoneun gwabani chanseonghaetjiman, eopjongbyeollo chaiga keudago haetseumnida', 'Thăm dò cho thấy quá nửa tán thành, nhưng khác biệt lớn theo ngành.', 'Chi tiết.'], ['다 반대해요.', 'da bandaehaeyo', 'Nghe nhầm.'], ['몰라요.', 'mollayo', 'Thiếu.'])
      ], ket: 'Em đã tóm tắt tranh luận truyền hình khách quan.'
    },
    tom: ['시사 / 패널 / 진행자 / 여론 / 공방 / 논란 / 엇갈리다 / 마무리'], nguphap: 'Nghe tranh luận nhiều giọng', phatam: '논란 [놀란], 여론 [여론]',
    loi: ['Tóm tắt thiên lệch'], btvn: ['Xem 15 phút 1 chương trình tranh luận Hàn (KBS, MBC 100분 토론)', 'Ghi lập trường từng khách mời', 'Luyện 🎤 3 câu']
  };

  const LK = ['listen', 'listenWord', 'listen', 'meaning', 'pinyin'];
  const d28 = {
    n: 28, ten: plan[27].ten, tong: 1, kt: { n: 20, min: 20 }, kinds: LK,
    muc: 'Nghe TOPIK II cấp 5–6 (câu 35–50): bài giảng học thuật, ẩn ý, ẩn dụ, giọng điệu mỉa mai, thái độ gián tiếp.',
    hoc: `${tbl(['Dạng', 'Mẹo'], [['Ẩn ý / gián tiếp', 'Nghe 우회적 표현: "글쎄요, 좀 생각해 봐야겠네요" = từ chối mềm'], ['Mỉa mai', 'Khen nhưng giọng ngược: "참 잘하셨네요"'], ['Ẩn dụ', '"양날의 검" = con dao hai lưỡi'], ['Giọng điệu', 'Nghe ngữ điệu, không chỉ nghe từ']])}`,
    vocab: [
      w('함축', 'hamchuk', 'hàm súc, ngụ ý', '', ['함축적 의미', 'hamchukjeok uimi', 'nghĩa ngụ ý']),
      w('비유', 'biyu', 'ẩn dụ, so sánh', '', ['적절한 비유', 'jeokjeolhan biyu', 'phép so sánh phù hợp']),
      w('반어', 'baneo', 'phản ngữ, mỉa mai', '', ['반어적 표현', 'baneojeok pyohyeon', 'cách nói mỉa']),
      w('어조', 'eojo', 'giọng điệu', '', ['냉소적인 어조', 'naengsojeogin eojo', 'giọng mỉa lạnh']),
      w('화자', 'hwaja', 'người nói', '', ['화자의 태도', 'hwajaui taedo', 'thái độ người nói']),
      w('우회적', 'uhoejeok', 'vòng vo, gián tiếp', '', ['우회적으로 거절하다.', 'uhoejeogeuro geojeolhada', 'Từ chối gián tiếp.']),
      w('직설적', 'jikseoljeok', 'thẳng thắn', '', ['직설적인 화법', 'jikseoljeogin hwabeop', 'cách nói thẳng']),
      w('풍자', 'pungja', 'châm biếm', '', ['사회 풍자', 'sahoe pungja', 'châm biếm xã hội']),
      w('양날의 검', 'yangnarui geom', 'con dao hai lưỡi', '', ['기술은 양날의 검이다.', 'gisureun yangnarui geomida', 'Công nghệ là con dao hai lưỡi.']),
      w('냉소적', 'naengsojeok', 'mỉa mai, lạnh lùng', '', ['냉소적인 반응', 'naengsojeogin baneung', 'phản ứng mỉa mai'])
    ],
    qs: [
      ['hear', '글쎄요, 좋은 제안이긴 한데 좀 더 생각해 봐야겠네요.', 'Ừm, đề xuất hay nhưng cần nghĩ thêm. (Ý: từ chối mềm / chưa đồng ý)', ['Đồng ý ngay.', 'Phản đối gay gắt.', 'Không hiểu đề xuất.'], 'Gián tiếp.'],
      ['hear', '인공지능은 생산성을 높이지만 일자리를 위협하는 양날의 검입니다.', 'AI tăng năng suất nhưng đe doạ việc làm – con dao hai lưỡi.', ['AI chỉ có lợi.', 'AI chỉ có hại.', 'AI không liên quan việc làm.'], 'Ẩn dụ.'],
      ['hear', '마감 하루 전에 시작하다니, 참 계획적이시네요.', 'Bắt đầu trước hạn một ngày, đúng là "có kế hoạch" ghê. (Mỉa mai)', ['Khen thật lòng.', 'Hỏi thông tin.', 'Xin lỗi.'], 'Phản ngữ.'],
      ['hear', '화자는 정책의 취지에는 공감하지만 실행 방식에는 회의적인 태도를 보이고 있다.', 'Người nói đồng cảm mục đích nhưng hoài nghi cách thực hiện.', ['Ủng hộ hoàn toàn.', 'Phản đối mục đích.', 'Không có thái độ.'], 'Thái độ hai mặt.'],
      ['mc', '우회적 trái nghĩa?', '직설적', ['함축적', '반어적', '비유적'], 'Đối lập.'],
      ['order', 'Sắp xếp: “Từ chối gián tiếp.”', ['우회적으로', '거절하다', '.'], '우회적으로 거절하다.']
    ],
    noi: [['양날의 검이라고 할 수 있습니다.', 'yangnarui geomirago hal su itseumnida – Có thể gọi là con dao hai lưỡi.'], ['화자는 회의적인 태도를 보입니다.', 'hwajaneun hoeuijeogin taedoreul boimnida – Người nói tỏ thái độ hoài nghi.'], ['반어적인 표현입니다.', 'baneojeogin pyohyeonimnida – Đó là cách nói mỉa.']],
    hoithoai: {
      ctx: 'Em nghe đoạn hội thoại và trả lời câu hỏi kiểu TOPIK 5–6.', vai: 'Giám khảo hỏi, em trả lời.', ai: '👩‍🏫 출제자',
      luot: [
        T(['"글쎄요, 좀 생각해 봐야겠네요"의 숨은 뜻은?', '"geulsseyo, jom saenggakhae bwayagenneyo"ui sumeun tteuseun?', 'Ẩn ý của câu "Ừm, phải nghĩ thêm"?'], ['직접 거절하지 않고 우회적으로 부정적인 입장을 나타낸 것입니다.', 'jikjeop geojeolhaji anko uhoejeogeuro bujeongjeogin ipjangeul natanaen geosimnida', 'Không từ chối thẳng mà thể hiện gián tiếp lập trường tiêu cực.', 'Ẩn ý.'], ['찬성한다는 뜻이에요.', 'chanseonghandaneun tteusieyo', 'Hiểu sai.'], ['생각 중이에요.', 'saenggak jungieyo', 'Hiểu bề mặt.']),
        T(['"참 계획적이시네요"의 어조는?', '"cham gyehoekjeogisineyo"ui eojoneun?', 'Giọng của câu "thật có kế hoạch"?'], ['상황과 반대로 말하는 반어적이고 냉소적인 어조입니다.', 'sanghwanggwa bandaero malhaneun baneojeogigo naengsojeogin eojoimnida', 'Giọng phản ngữ, mỉa mai – nói ngược với tình huống.', 'Phân tích.'], ['칭찬이에요.', 'chingchanieyo', 'Hiểu sai.'], ['질문이에요.', 'jilmunieyo', 'Sai.']),
        T(['"양날의 검"은 무엇을 비유해요?', '"yangnarui geom"eun mueoseul biyuhaeyo?', '"Con dao hai lưỡi" ví điều gì?'], ['이익과 위험을 동시에 가진 것을 비유합니다.', 'iikgwa wiheomeul dongsie gajin geoseul biyuhamnida', 'Ví điều vừa có lợi vừa có hại.', 'Ẩn dụ.'], ['칼이 위험해요.', 'kari wiheomhaeyo', 'Hiểu đen.'], ['몰라요.', 'mollayo', 'Thiếu.'])
      ], ket: 'Em đã nghe hiểu ẩn ý, mỉa mai, ẩn dụ ở cấp 5–6.'
    },
    tom: ['함축 / 비유 / 반어 / 어조 / 우회적·직설적 / 양날의 검'], nguphap: 'Nghe ẩn ý cấp cao', phatam: '냉소적 [냉소적]',
    loi: ['Hiểu nghĩa đen câu mỉa'], btvn: ['Làm 20 câu nghe TOPIK II câu 35–50', 'Ghi 5 cách nói gián tiếp nghe được', 'Luyện 🎤 3 câu']
  };

  const d29 = {
    n: 29, ten: plan[28].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Mô phỏng phiên dịch hội nghị đầu tư: phát biểu khai mạc, hỏi đáp, đàm phán – dùng toàn bộ kỹ năng cấp 5–6.',
    hoc: `<p>Không có từ mới. Giữ: ngôi thứ nhất, số liệu chính xác, văn phong trang trọng, trung lập, hỏi lại khi chưa rõ.</p>`,
    qs: [['mc', 'Diễn giả: "Tôi rất vinh dự"?', '저는 매우 영광입니다.', ['그분이 영광이래요.', '영광스러운 것 같아요.', '저 사람 기쁘대요.'], 'Ngôi thứ nhất.'], ['mc', 'Mỉa mai "참 잘하셨네요" khi việc hỏng là?', '반어', ['칭찬', '질문', '직설'], 'Giọng điệu.']],
    noi: [['존경하는 내빈 여러분, 안녕하십니까.', 'jongyeonghaneun naebin yeoreobun, annyeonghasimnikka – Kính thưa quý quan khách.'], ['죄송하지만 숫자를 다시 확인해도 되겠습니까?', 'joesonghajiman sutjareul dasi hwaginhaedo doegetseumnikka? – Xin lỗi, cho phép xác nhận lại con số?']],
    hoithoai: {
      ctx: 'Hội nghị xúc tiến đầu tư Hàn – Long An; em là phiên dịch chính.', vai: 'Nhiều người nói, em dịch/xử lý.', ai: '🎭 여러 발언자',
      luot: [
        T(['(Phó chủ tịch tỉnh, tiếng Việt) Tôi xin nhiệt liệt chào mừng các nhà đầu tư Hàn Quốc.', '-', 'Dịch sang tiếng Hàn.'], ['한국 투자자 여러분을 진심으로 환영합니다.', 'hanguk tujaja yeoreobuneul jinsimeuro hwanyeonghamnida', 'Xin nhiệt liệt chào mừng quý nhà đầu tư Hàn Quốc.', 'Ngôi thứ nhất, trang trọng.'], ['부주석님이 환영한대요.', 'bujuseongnimi hwanyeonghandaeyo', 'Gián tiếp, suồng sã.'], ['어서 와요.', 'eoseo wayo', 'Suồng sã.']),
        T(['(한국 기업 대표) 인허가 기간이 보통 얼마나 걸립니까?', '(hanguk gieop daepyo) inheoga gigani botong eolmana geollimnikka?', '(Đại diện DN Hàn) Thủ tục cấp phép thường mất bao lâu?'], ['(Việt) "Thủ tục cấp phép thường mất bao lâu?" – em dịch nguyên câu hỏi để lãnh đạo tỉnh trả lời.', '-', 'Trung lập, đúng vai.', 'Chuẩn.'], ['(한국어) 한 달이면 돼요.', 'han darimyeon dwaeyo', 'Tự trả lời thay.'], ['(Bỏ qua)', '-', 'Bỏ ý.']),
        T(['(Lãnh đạo tỉnh) Khoảng 15 ngày làm việc đối với hồ sơ đầy đủ.', '-', 'Dịch sang tiếng Hàn.'], ['서류가 완비된 경우 영업일 기준으로 약 15일 정도 소요됩니다.', 'seoryuga wanbidoen gyeongu yeongeobil gijuneuro yak siboil jeongdo soyodoemnida', 'Với hồ sơ đầy đủ, mất khoảng 15 ngày làm việc.', 'Chính xác điều kiện + số.'], ['15일이요.', 'siboiriyo', 'Mất điều kiện.'], ['5일 걸려요.', 'oil geollyeoyo', 'Sai số.'])
      ], ket: 'Em đã phiên dịch hội nghị đầu tư chuẩn mực!'
    },
    tom: ['Phản xạ phiên dịch hội nghị', 'Giữ điều kiện và số liệu'], nguphap: 'Tổng hợp', phatam: 'Ngữ điệu trang trọng',
    loi: ['Lược điều kiện ("hồ sơ đầy đủ")'], btvn: ['Ghi âm em dịch 1 bài phát biểu 2 phút', 'Tự chấm theo 5 tiêu chí', 'Chuẩn bị bài kiểm tra cuối khoá']
  };

  const d30 = {
    n: 30, ten: plan[29].ten, vocab: [], tong: 1, kt: { n: 30, min: 30 }, kinds: K,
    muc: 'Kiểm tra cuối khoá TOPIK II cấp 5–6 (30 câu) và lộ trình duy trì sau khoá.',
    hoc: `<h4>🏁 Hoàn thành lộ trình tiếng Hàn 5 cấp!</h4>${tbl(['Đã học ở cấp 5–6', 'Duy trì sau khoá'], [['-거니와, -(으)ㄹ지언정, -는 한, -는 셈, -(으)ㄴ 나머지', 'Đọc 1 xã luận / ngày, tóm tắt'], ['사자성어, từ học thuật, văn viết điểm cao', 'Viết 1 bài 600 chữ / tuần'], ['Biên – phiên dịch, pháp lý, ngân hàng', 'Dịch tài liệu thật trong công việc'], ['Diễn văn, hội thảo, bảo vệ đề tài', 'Tham gia hội thảo, CLB tiếng Hàn']])}
      ${tip('📌 TOPIK II: cấp 5 ≥ 190, cấp 6 ≥ 230 / 300 (tham khảo – xem topik.go.kr để biết lịch thi và quy định mới).')}`,
    qs: [['mc', '“Thà chịu thiệt chứ không vi phạm quy định”?', '손해를 볼지언정 규정을 어기지 않겠다.', ['손해를 본 나머지 규정을 어겼다.', '손해를 보는 한 규정을 어긴다.', '손해를 보거니와 규정도 어긴다.'], '-(으)ㄹ지언정.'], ['mc', '“Hoạ vô đơn chí”?', '설상가상', ['금상첨화', '고진감래', '일석이조'], 'Thành ngữ.'], ['mc', '“Chú thích cuối trang”?', '각주', ['초록', '저자', '학술지'], 'Học thuật.']],
    noi: [['저는 한국어 고급 과정을 모두 마쳤습니다.', 'jeoneun hangugeo gogeup gwajeongeul modu machyeotseumnida – Tôi đã hoàn thành toàn bộ khoá cao cấp.'], ['앞으로도 꾸준히 공부할 것입니다.', 'apeurodo kkujunhi gongbuhal geosimnida – Tôi sẽ tiếp tục học bền bỉ.']],
    hoithoai: {
      ctx: 'Buổi tổng kết toàn khoá với cô giáo.', vai: 'Cô hỏi, em trả lời.', ai: '👩‍🏫 정 선생님',
      luot: [
        T(['5급 과정을 마친 소감이 어때요?', 'ogeup gwajeongeul machin sogami eottaeyo?', 'Cảm nghĩ khi xong cấp 5?'], ['힘들었지만 고진감래라는 말처럼 이제는 회의 통역도 할 수 있게 되어 감회가 새롭습니다.', 'himdeureotjiman gojingamnaeraneun malcheoreom ijeneun hoeui tongyeokdo hal su itge doeeo gamhoega saeropseumnida', 'Vất vả nhưng đúng là khổ tận cam lai, giờ em phiên dịch họp được nên rất bồi hồi.', 'Thành ngữ + cảm xúc.'], ['끝나서 좋아요.', 'kkeunnaseo joayo', 'Sơ sài.'], ['별로예요.', 'byeolloyeyo', 'Thiếu lễ.']),
        T(['가장 어려웠던 부분은요?', 'gajang eoryeowotdeon bubuneunyo?', 'Phần khó nhất?'], ['반어나 우회적인 표현을 알아듣는 것이 가장 어려웠는데, 시사 토론을 많이 들은 덕분에 나아졌습니다.', 'baneona uhoejeogin pyohyeoneul aradeunneun geosi gajang eoryeowonneunde, sisa toroneul mani deureun deokbune naajyeotseumnida', 'Khó nhất là hiểu cách nói mỉa và gián tiếp, nhờ nghe nhiều tranh luận thời sự đã khá hơn.', 'Tự đánh giá.'], ['다 쉬웠어요.', 'da swiwosseoyo', 'Thiếu thật.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['앞으로의 목표는요?', 'apeuroui mokpyoneunyo?', 'Mục tiêu sau này?'], ['TOPIK 6급을 취득하는 한편, 한-베 금융 협력에 기여하는 전문 통역사가 되고자 합니다.', 'TOPIK yukgeubeul chwideukhaneun hanpyeon, han-be geumyung hyeomnyeoge giyeohaneun jeonmun tongyeoksaga doegoja hamnida', 'Vừa lấy TOPIK 6, vừa muốn thành phiên dịch chuyên nghiệp đóng góp hợp tác tài chính Hàn – Việt.', 'Hoài bão rõ.'], ['쉬고 싶어요.', 'swigo sipeoyo', 'Thiếu.'], ['없어요.', 'eopseoyo', 'Thiếu.'])
      ], ket: 'Chúc mừng em đã hoàn thành lộ trình tiếng Hàn từ sơ cấp đến cao cấp! 🎉'
    },
    tom: ['Kiểm tra 30 câu', 'Lộ trình duy trì'], nguphap: 'Tổng ôn toàn khoá', phatam: 'Ôn ngữ điệu trang trọng',
    loi: ['Xem lại các câu sai trong báo cáo'], btvn: ['Làm 1 đề TOPIK II thật đủ thời gian', 'Đăng ký kỳ thi TOPIK gần nhất', 'Duy trì: đọc xã luận mỗi ngày']
  };

  Z.days.push(d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30);
})();

/* PLT-Edu · Tiếng Hàn – Cấp 1: Ngày 15–30 */
(function () {
  'use strict';
  const { w, T, tbl, tip, ex, F, reads, sp, K } = window.PLT_KO.H;
  const lv = (x) => `<p class="small muted">🎯 Từ giai đoạn này, hãy thử <b>tắt "Hiện nghĩa tiếng Việt"</b> trong phần Hội thoại để luyện nghĩ trực tiếp bằng tiếng Hàn. ${x || ''}</p>`;

  /* ================= NGÀY 15 ================= */
  const d15 = {
    n: 15, ten: 'Mua sắm và giá cả', kinds: K,
    muc: 'Hỏi giá với 얼마예요?, mặc cả, chọn mua, thanh toán bằng thẻ hoặc tiền mặt.',
    hoc: `<h4>1. Hỏi giá</h4><ul>${ex('이거 얼마예요?', 'igeo eolmayeyo?', 'Cái này bao nhiêu tiền?')}${ex('만 오천 원이에요.', 'man ocheon wonieyo', '15.000 won.')}</ul>
      <h4>2. Mặc cả và quyết định</h4>${reads([['너무 비싸요.', 'neomu bissayo', 'Đắt quá.'], ['좀 깎아 주세요.', 'jom kkakka juseyo', 'Bớt chút đi ạ.'], ['할인돼요?', 'harindwaeyo?', 'Có giảm giá không?'], ['이거 살게요.', 'igeo salgeyo', 'Tôi sẽ mua cái này.']])}
      <h4>3. Thanh toán</h4><ul>${ex('카드 돼요?', 'kadeu dwaeyo?', 'Trả thẻ được không?')}${ex('현금으로 할게요.', 'hyeongeumeuro halgeyo', 'Tôi trả tiền mặt.')}${ex('영수증 주세요.', 'yeongsujeung juseyo', 'Cho tôi hoá đơn.')}</ul>
      ${tip('💡 <b>-아/어 주세요</b> = "làm ơn làm … cho tôi": 깎아 주세요 (bớt giá cho tôi), 계산해 주세요 (tính tiền cho tôi). Mặc cả thường chỉ dùng ở chợ truyền thống, không dùng ở siêu thị.')}`,
    vocab: [
      w('얼마', 'eolma', 'bao nhiêu (tiền)', '얼마예요? = Bao nhiêu tiền?', ['이거 얼마예요?', 'igeo eolmayeyo?', 'Cái này bao nhiêu?']),
      w('가게', 'gage', 'cửa hàng', '', ['가게가 열었어요.', 'gagega yeoreosseoyo', 'Cửa hàng mở rồi.']),
      w('사요', 'sayo', 'mua', 'Gốc: 사다.', ['뭐 사요?', 'mwo sayo?', 'Mua gì?']),
      w('깎아 주세요', 'kkakka juseyo', 'bớt giá cho tôi', 'Dùng ở chợ.', ['조금만 깎아 주세요.', 'jogeumman kkakka juseyo', 'Bớt chút xíu thôi ạ.']),
      w('카드', 'kadeu', 'thẻ', '', ['카드 돼요?', 'kadeu dwaeyo?', 'Trả thẻ được không?']),
      w('현금', 'hyeongeum', 'tiền mặt', '', ['현금 있어요.', 'hyeongeum isseoyo', 'Tôi có tiền mặt.']),
      w('계산', 'gyesan', 'tính tiền', '', ['계산해 주세요.', 'gyesanhae juseyo', 'Tính tiền cho tôi.']),
      w('영수증', 'yeongsujeung', 'hoá đơn', '', ['영수증 주세요.', 'yeongsujeung juseyo', 'Cho tôi hoá đơn.']),
      w('이거', 'igeo', 'cái này (khẩu ngữ)', '= 이것.', ['이거 주세요.', 'igeo juseyo', 'Cho tôi cái này.']),
      w('좀', 'jom', 'một chút; làm ơn', 'Làm câu nhờ vả mềm hơn.', ['좀 보여 주세요.', 'jom boyeo juseyo', 'Cho tôi xem chút.']),
      w('할인', 'harin', 'giảm giá', '', ['할인돼요?', 'harindwaeyo?', 'Có giảm giá không?']),
      w('너무', 'neomu', 'quá', '', ['너무 비싸요.', 'neomu bissayo', 'Đắt quá.'])
    ],
    qs: [
      ['mc', '“Cái này bao nhiêu tiền?” là?', '이거 얼마예요?', ['이거 뭐예요?', '이거 몇 개예요?', '얼마 이거예요?'], '얼마예요?'],
      ['mc', '“Bớt chút đi ạ” là?', '좀 깎아 주세요.', ['좀 비싸 주세요.', '좀 사 주세요.', '좀 할인이에요.'], '깎아 주세요.'],
      ['mc', '“Trả thẻ được không?” là?', '카드 돼요?', ['카드 있어요?', '카드 주세요?', '카드 얼마예요?'], '돼요? = được không?'],
      ['mc', '“Tôi sẽ mua cái này” là?', '이거 살게요.', ['이거 사요?', '이거 싸요.', '이거 팔아요.'], '-ㄹ게요 = tôi sẽ.'],
      ['hear', '영수증 주세요.', 'Cho tôi hoá đơn.', ['Cho tôi túi.', 'Tính tiền cho tôi.', 'Cho tôi giảm giá.'], '영수증 = hoá đơn.'],
      ['hear', '삼만 원이에요.', '30.000 won', ['3.000 won', '300.000 won', '13.000 won'], '삼만 = 30.000.'],
      ['order', 'Sắp xếp: “Đắt quá.”', ['너무', '비싸요.'], '너무 비싸요.']
    ],
    hoithoai: {
      ctx: 'Em đi chợ Dongdaemun mua khăn quàng.', vai: 'Chủ sạp chào hàng, em hỏi giá và mặc cả.', ai: '👩 사장님',
      luot: [
        T(['어서 오세요! 뭐 찾으세요?', 'eoseo oseyo! mwo chajeuseyo?', 'Mời vào! Tìm gì ạ?'], ['이거 얼마예요?', 'igeo eolmayeyo?', 'Cái này bao nhiêu?', 'Hỏi giá.'], ['이거 뭐예요?', 'igeo mwoyeyo?', 'Hỏi "cái gì", chưa hỏi giá.'], ['계산해 주세요.', 'gyesanhae juseyo', 'Chưa chọn hàng.']),
        T(['이만 원이에요.', 'iman wonieyo', '20.000 won.'], ['너무 비싸요. 좀 깎아 주세요.', 'neomu bissayo. jom kkakka juseyo', 'Đắt quá. Bớt chút đi ạ.', 'Mặc cả lịch sự.'], ['너무 싸요!', 'neomu ssayo', 'Nói "rẻ quá" thì khó mặc cả.'], ['이천 원이요?', 'icheon wonieyo?', 'Nghe nhầm: 이만 = 20.000.']),
        T(['그럼 만 팔천 원 주세요.', 'geureom man palcheon won juseyo', 'Vậy 18.000 won nhé.'], ['좋아요. 이거 살게요.', 'joayo. igeo salgeyo', 'Được. Tôi mua cái này.', 'Chốt mua.'], ['이거 팔게요.', 'igeo palgeyo', '팔다 = bán.'], ['할인 없어요.', 'harin eopseoyo', 'Lạc đề.']),
        T(['카드예요, 현금이에요?', 'kadeuyeyo, hyeongeumieyo?', 'Thẻ hay tiền mặt?'], ['현금으로 할게요. 여기요.', 'hyeongeumeuro halgeyo. yeogiyo', 'Tôi trả tiền mặt. Đây ạ.', '-(으)로 = bằng.'], ['카드 얼마예요?', 'kadeu eolmayeyo?', 'Sai nghĩa.'], ['영수증이에요.', 'yeongsujeungieyo', 'Lạc đề.'])
      ], ket: 'Em đã hỏi giá, mặc cả và thanh toán ở chợ Hàn Quốc.'
    },
    tom: ['얼마예요?', 'Mặc cả: 깎아 주세요', 'Thanh toán', '-ㄹ게요 (tôi sẽ)'], nguphap: 'N 얼마예요?; V-아/어 주세요; V-ㄹ게요; N(으)로', phatam: '얼마 [얼마], 영수증 [영수증]',
    loi: ['Nhầm 사요 (mua) – 싸요 (rẻ)', 'Đếm tiền theo nghìn'], btvn: ['Hỏi giá 5 đồ vật bằng tiếng Hàn', 'Tập mặc cả 1 phút', 'Đọc giá: 2.500 / 18.000 / 45.000 / 120.000 won']
  };

  /* ================= NGÀY 16 ================= */
  const d16 = {
    n: 16, ten: 'Hỏi đường và vị trí', kinds: K,
    muc: 'Hỏi … 어디예요? / 어디에 있어요?, chỉ đường, nói vị trí trước – sau – cạnh – trái – phải.',
    hoc: `<h4>1. Hỏi đường</h4><ul>${ex('화장실이 어디예요?', 'hwajangsiri eodiyeyo?', 'Nhà vệ sinh ở đâu?')}${ex('은행이 어디에 있어요?', 'eunhaengi eodie isseoyo?', 'Ngân hàng ở đâu?')}${ex('이 근처에 편의점 있어요?', 'i geuncheoe pyeonuijeom isseoyo?', 'Gần đây có cửa hàng tiện lợi không?')}</ul>
      <h4>2. Vị trí: Mốc + 앞/뒤/옆 + 에 있어요</h4>${F(['은행', '+', '옆<small>bên cạnh</small>', '+', '에 있어요'])}${reads([['앞', 'ap', 'phía trước'], ['뒤', 'dwi', 'phía sau'], ['옆', 'yeop', 'bên cạnh'], ['왼쪽', 'oenjjok', 'bên trái'], ['오른쪽', 'oreunjjok', 'bên phải']])}${tip('🔁 Giống tiếng Trung: <b>mốc đứng trước, vị trí đứng sau</b>: 은행 옆 = bên cạnh ngân hàng.')}
      <h4>3. Chỉ đường</h4><ul>${ex('똑바로 가세요.', 'ttokbaro gaseyo', 'Đi thẳng.')}${ex('오른쪽으로 가세요.', 'oreunjjogeuro gaseyo', 'Rẽ phải.')}${ex('멀어요? – 아니요, 가까워요.', 'meoreoyo? – aniyo, gakkawoyo', 'Xa không? – Không, gần.')}</ul>`,
    vocab: [
      w('어디', 'eodi', 'ở đâu', '', ['어디예요?', 'eodiyeyo?', 'Ở đâu vậy?']),
      w('앞', 'ap', 'phía trước', '', ['학교 앞에 있어요.', 'hakgyo ape isseoyo', 'Ở trước trường học.']),
      w('뒤', 'dwi', 'phía sau', '', ['건물 뒤에 있어요.', 'geonmul dwie isseoyo', 'Ở sau toà nhà.']),
      w('옆', 'yeop', 'bên cạnh', '', ['은행 옆에 있어요.', 'eunhaeng yeope isseoyo', 'Ở cạnh ngân hàng.']),
      w('왼쪽', 'oenjjok', 'bên trái', '', ['왼쪽으로 가세요.', 'oenjjogeuro gaseyo', 'Rẽ trái.']),
      w('오른쪽', 'oreunjjok', 'bên phải', '', ['오른쪽에 있어요.', 'oreunjjoge isseoyo', 'Ở bên phải.']),
      w('똑바로', 'ttokbaro', 'thẳng', '', ['똑바로 가세요.', 'ttokbaro gaseyo', 'Đi thẳng.']),
      w('가세요', 'gaseyo', 'hãy đi (lịch sự)', '', ['저쪽으로 가세요.', 'jeojjogeuro gaseyo', 'Đi về phía kia.']),
      w('은행', 'eunhaeng', 'ngân hàng', '', ['은행이 어디예요?', 'eunhaengi eodiyeyo?', 'Ngân hàng ở đâu?']),
      w('화장실', 'hwajangsil', 'nhà vệ sinh', '', ['화장실이 어디예요?', 'hwajangsiri eodiyeyo?', 'Nhà vệ sinh ở đâu?']),
      w('근처', 'geuncheo', 'gần, lân cận', '', ['이 근처에 있어요?', 'i geuncheoe isseoyo?', 'Ở gần đây không?']),
      w('멀어요', 'meoreoyo', 'xa', 'Trái nghĩa: 가까워요.', ['여기서 멀어요?', 'yeogiseo meoreoyo?', 'Từ đây có xa không?'])
    ],
    qs: [
      ['mc', '“Nhà vệ sinh ở đâu?” là?', '화장실이 어디예요?', ['화장실이 뭐예요?', '어디 화장실이에요?', '화장실 얼마예요?'], 'N이/가 어디예요?'],
      ['mc', '“Bên cạnh ngân hàng” là?', '은행 옆', ['옆 은행', '은행 앞에', '은행의 옆쪽에서'], 'Mốc + vị trí.'],
      ['mc', '“Đi thẳng” là?', '똑바로 가세요.', ['왼쪽으로 가세요.', '오른쪽에 있어요.', '뒤로 오세요.'], '똑바로 = thẳng.'],
      ['mc', '왼쪽 là?', 'bên trái', ['bên phải', 'phía trước', 'phía sau'], 'oenjjok.'],
      ['hear', '오른쪽으로 가세요.', 'Rẽ phải.', ['Rẽ trái.', 'Đi thẳng.', 'Quay lại.'], '오른쪽 = phải.'],
      ['hear', '편의점 뒤에 있어요.', 'Ở sau cửa hàng tiện lợi.', ['Ở trước cửa hàng tiện lợi.', 'Ở cạnh cửa hàng tiện lợi.', 'Trong cửa hàng tiện lợi.'], '뒤 = sau.'],
      ['order', 'Sắp xếp: “Ngân hàng ở đâu?”', ['은행이', '어디에', '있어요?'], '은행이 어디에 있어요?']
    ],
    hoithoai: {
      ctx: 'Em ở ga Seoul, cần tìm ngân hàng để đổi tiền.', vai: 'Em hỏi một người đi đường.', ai: '🧑 행인',
      luot: [
        T(['뭐 도와 드릴까요?', 'mwo dowa deurilkkayo?', 'Tôi giúp gì được không?'], ['저기요, 이 근처에 은행 있어요?', 'jeogiyo, i geuncheoe eunhaeng isseoyo?', 'Xin hỏi, gần đây có ngân hàng không?', 'Hỏi lịch sự.'], ['은행이에요.', 'eunhaengieyo', 'Chưa hỏi.'], ['화장실 주세요.', 'hwajangsil juseyo', 'Sai nghĩa.']),
        T(['네, 있어요. 똑바로 가세요.', 'ne, isseoyo. ttokbaro gaseyo', 'Có. Đi thẳng.'], ['똑바로요? 멀어요?', 'ttokbaroyo? meoreoyo?', 'Đi thẳng ạ? Có xa không?', 'Xác nhận + hỏi khoảng cách.'], ['왼쪽이요?', 'oenjjogiyo?', 'Người ta nói đi thẳng.'], ['감사합니다, 안녕히 계세요.', 'gamsahamnida, annyeonghi gyeseyo', 'Hỏi chưa xong mà.']),
        T(['아니요, 가까워요. 편의점 옆에 있어요.', 'aniyo, gakkawoyo. pyeonuijeom yeope isseoyo', 'Không, gần thôi. Ở cạnh cửa hàng tiện lợi.'], ['편의점 옆이요. 감사합니다!', 'pyeonuijeom yeopiyo. gamsahamnida', 'Cạnh cửa hàng tiện lợi. Cảm ơn!', 'Nhắc lại để xác nhận.'], ['편의점 뒤예요?', 'pyeonuijeom dwiyeyo?', 'Nghe nhầm: 옆 (cạnh).'], ['멀어요.', 'meoreoyo', 'Người ta nói gần.'])
      ], ket: 'Em đã hỏi đường và hiểu chỉ dẫn bằng tiếng Hàn.'
    },
    tom: ['어디예요?', 'Mốc + vị trí + 에 있어요', 'Chỉ đường'], nguphap: 'N이/가 어디예요?; N 앞/뒤/옆에 있어요; (으)로 가세요', phatam: '왼쪽 [왼쪽], 똑바로',
    loi: ['Đặt vị trí trước mốc', 'Nhầm 왼쪽/오른쪽'], btvn: ['Mô tả vị trí 5 đồ vật trong phòng', 'Chỉ đường từ nhà đến chợ bằng tiếng Hàn', 'Tập hỏi 3 địa điểm']
  };

  /* ================= NGÀY 17 ================= */
  const d17 = {
    n: 17, ten: 'Giao thông và đi lại', kinds: K,
    muc: 'Nói đi đâu bằng gì (N을/를 타요, N에 가요), hỏi thời gian đi lại, đi taxi.',
    hoc: `<h4>1. Đi đâu: N에 가요</h4><ul>${ex('회사에 가요.', 'hoesae gayo', 'Tôi đi đến công ty.')}${ex('어디에 가요?', 'eodie gayo?', 'Bạn đi đâu?')}</ul>
      <h4>2. Đi bằng gì: N을/를 타요 hoặc N(으)로 가요</h4><ul>${ex('지하철을 타요.', 'jihacheoreul tayo', 'Tôi đi tàu điện ngầm.')}${ex('버스로 가요.', 'beoseuro gayo', 'Tôi đi bằng xe buýt.')}</ul>
      <h4>3. Từ … đến …: N에서 N까지</h4><ul>${ex('집에서 회사까지 얼마나 걸려요?', 'jibeseo hoesakkaji eolmana geollyeoyo?', 'Từ nhà đến công ty mất bao lâu?')}${ex('삼십 분 걸려요.', 'samsip bun geollyeoyo', 'Mất 30 phút.')}</ul>
      <h4>4. Trên taxi</h4>${reads([['기사님, 공항으로 가 주세요.', 'gisanim, gonghangeuro ga juseyo', 'Bác tài, cho tôi ra sân bay.'], ['여기서 내려 주세요.', 'yeogiseo naeryeo juseyo', 'Cho tôi xuống ở đây.'], ['얼마나 걸려요?', 'eolmana geollyeoyo?', 'Mất bao lâu?']])}
      ${tip('💡 Ở Hàn Quốc dùng thẻ <b>T-money</b> để đi tàu điện, xe buýt, cả taxi. Lên taxi lịch sự gọi tài xế là <b>기사님</b>.')}`,
    vocab: [
      w('버스', 'beoseu', 'xe buýt', '', ['버스를 타요.', 'beoseureul tayo', 'Đi xe buýt.']),
      w('지하철', 'jihacheol', 'tàu điện ngầm', '', ['지하철이 빨라요.', 'jihacheori ppallayo', 'Tàu điện nhanh.']),
      w('택시', 'taeksi', 'taxi', '', ['택시를 탔어요.', 'taeksireul tasseoyo', 'Tôi đã đi taxi.']),
      w('공항', 'gonghang', 'sân bay', '', ['공항에 가요.', 'gonghange gayo', 'Đi sân bay.']),
      w('역', 'yeok', 'nhà ga', '', ['서울역', 'Seoullyeok', 'ga Seoul']),
      w('타요', 'tayo', 'đi (xe), lên (xe)', 'N을/를 타요.', ['지하철을 타요.', 'jihacheoreul tayo', 'Đi tàu điện.']),
      w('가요', 'gayo', 'đi', 'N에 가요.', ['학교에 가요.', 'hakgyoe gayo', 'Đi học.']),
      w('내려요', 'naeryeoyo', 'xuống (xe)', '', ['다음 역에서 내려요.', 'daeum yeogeseo naeryeoyo', 'Xuống ở ga tiếp theo.']),
      w('기사님', 'gisanim', 'bác tài (kính trọng)', '', ['기사님, 감사합니다!', 'gisanim, gamsahamnida', 'Cảm ơn bác tài!']),
      w('걸려요', 'geollyeoyo', 'mất (thời gian)', '', ['한 시간 걸려요.', 'han sigan geollyeoyo', 'Mất một tiếng.']),
      w('표', 'pyo', 'vé', '', ['표 두 장 주세요.', 'pyo du jang juseyo', 'Cho 2 vé.']),
      w('여기', 'yeogi', 'ở đây', '거기 (đó), 저기 (kia).', ['여기서 내려 주세요.', 'yeogiseo naeryeo juseyo', 'Cho xuống ở đây.'])
    ],
    qs: [
      ['mc', '“Tôi đi tàu điện ngầm” là?', '지하철을 타요.', ['지하철에 타요를.', '지하철 가요을.', '지하철이 타요.'], 'N을/를 타요.'],
      ['mc', '“Từ nhà đến công ty” là?', '집에서 회사까지', ['집까지 회사에서', '집에 회사에', '회사에서 집까지'], 'N에서 N까지.'],
      ['mc', '“Cho tôi xuống ở đây” là?', '여기서 내려 주세요.', ['여기서 타 주세요.', '여기 가세요.', '저기 내려요?'], '내리다 = xuống.'],
      ['mc', 'Gọi tài xế taxi lịch sự là?', '기사님', ['선생님', '사장님', '저기요 아저씨야'], '기사님.'],
      ['hear', '얼마나 걸려요?', 'Mất bao lâu?', ['Bao nhiêu tiền?', 'Đi đâu?', 'Xuống ở đâu?'], '걸려요 = mất (thời gian).'],
      ['hear', '공항으로 가 주세요.', 'Cho tôi ra sân bay.', ['Cho tôi ra ga.', 'Cho tôi xuống.', 'Sân bay ở đâu?'], '공항 = sân bay.'],
      ['order', 'Sắp xếp: “Mất 30 phút.”', ['삼십 분', '걸려요.'], '삼십 분 걸려요.']
    ],
    hoithoai: {
      ctx: 'Em bắt taxi từ khách sạn ra sân bay Incheon.', vai: 'Tài xế hỏi, em trả lời.', ai: '🚕 기사님',
      luot: [
        T(['어서 오세요. 어디로 갈까요?', 'eoseo oseyo. eodiro galkkayo?', 'Mời lên. Đi đâu ạ?'], ['기사님, 인천공항으로 가 주세요.', 'gisanim, Incheon gonghangeuro ga juseyo', 'Bác tài, cho tôi ra sân bay Incheon.', 'N(으)로 가 주세요.'], ['인천공항을 타요.', 'Incheon gonghangeul tayo', '타요 dùng cho phương tiện.'], ['공항이 어디예요?', 'gonghangi eodiyeyo?', 'Tài xế cần biết em đi đâu.']),
        T(['네, 알겠습니다.', 'ne, algetseumnida', 'Vâng, tôi hiểu rồi.'], ['얼마나 걸려요?', 'eolmana geollyeoyo?', 'Mất bao lâu ạ?', 'Hỏi thời gian.'], ['얼마예요?', 'eolmayeyo?', 'Có thể hỏi giá, nhưng câu này hợp lúc trả tiền hơn.'], ['내려요.', 'naeryeoyo', 'Vừa lên mà đã xuống?']),
        T(['한 시간쯤 걸려요.', 'han siganjjeum geollyeoyo', 'Khoảng 1 tiếng.'], ['네, 감사합니다.', 'ne, gamsahamnida', 'Vâng, cảm ơn.', 'Xác nhận lịch sự.'], ['한 시예요?', 'han siyeyo?', 'Nghe nhầm: 한 시간 (1 tiếng), không phải 한 시 (1 giờ).'], ['너무 멀어요!', 'neomu meoreoyo', 'Không cần than.']),
        T(['다 왔어요. 어디서 내리실래요?', 'da wasseoyo. eodiseo naerisillaeyo?', 'Đến rồi. Quý khách xuống ở đâu?'], ['여기서 내려 주세요. 카드 돼요?', 'yeogiseo naeryeo juseyo. kadeu dwaeyo?', 'Cho xuống ở đây. Trả thẻ được không?', 'Xuống xe + hỏi cách trả tiền.'], ['여기서 타 주세요.', 'yeogiseo ta juseyo', '타다 là lên xe.'], ['공항에 가요.', 'gonghange gayo', 'Đã đến rồi.'])
      ], ket: 'Em đã đi taxi ra sân bay bằng tiếng Hàn.'
    },
    tom: ['N에 가요', 'N을/를 타요; N(으)로', 'N에서 N까지', 'Đi taxi'], nguphap: 'N에 가요; N을/를 타요; N에서 N까지 얼마나 걸려요?; V-아/어 주세요', phatam: '지하철 [지하철], 걸려요 [걸려요]',
    loi: ['Dùng 에 với 타다 (phải là 을/를)', 'Nhầm 한 시 và 한 시간'], btvn: ['Nói em đi làm bằng gì, mất bao lâu', 'Tập 4 câu trên taxi', 'Đặt 3 câu với 에서 … 까지']
  };

  /* ================= NGÀY 18 ================= */
  const d18 = {
    n: 18, ten: 'Công việc và nơi làm việc', kinds: K,
    muc: 'Hỏi nghề nghiệp, nói nơi làm việc (N에서 일해요), giờ đi làm – tan làm.',
    hoc: `<h4>1. Hỏi nghề</h4><ul>${ex('무슨 일을 하세요?', 'museun ireul haseyo?', 'Anh/chị làm nghề gì?')}${ex('회사원이에요.', 'hoesawonieyo', 'Tôi là nhân viên công ty.')}</ul>
      <h4>2. Làm ở đâu: N에서 일해요</h4>${F(['은행', '+', '에서<small>ở (nơi diễn ra hành động)</small>', '+', '일해요'])}<ul>${ex('저는 은행에서 일해요.', 'jeoneun eunhaengeseo ilhaeyo', 'Tôi làm việc ở ngân hàng.')}</ul>${tip('⚠️ <b>에</b> = ở (tồn tại, đi đến): 은행에 있어요 / 은행에 가요. <b>에서</b> = ở (nơi làm hành động): 은행에서 일해요.')}
      <h4>3. Giờ làm việc</h4><ul>${ex('몇 시에 출근해요?', 'myeot sie chulgeunhaeyo?', 'Mấy giờ đi làm?')}${ex('여섯 시에 퇴근해요.', 'yeoseot sie toegeunhaeyo', '6 giờ tan làm.')}${ex('요즘 바빠요.', 'yojeum bappayo', 'Dạo này bận.')}</ul>`,
    vocab: [
      w('회사', 'hoesa', 'công ty', '', ['회사에 가요.', 'hoesae gayo', 'Đi đến công ty.']),
      w('회사원', 'hoesawon', 'nhân viên công ty', '', ['저는 회사원이에요.', 'jeoneun hoesawonieyo', 'Tôi là nhân viên công ty.']),
      w('일해요', 'ilhaeyo', 'làm việc', 'N에서 일해요.', ['은행에서 일해요.', 'eunhaengeseo ilhaeyo', 'Làm việc ở ngân hàng.']),
      w('엔지니어', 'enjinieo', 'kỹ sư', '', ['IT 엔지니어예요.', 'aiti enjinieoyeyo', 'Tôi là kỹ sư IT.']),
      w('은행원', 'eunhaengwon', 'nhân viên ngân hàng', '', ['언니는 은행원이에요.', 'eonnineun eunhaengwonieyo', 'Chị tôi là nhân viên ngân hàng.']),
      w('사장님', 'sajangnim', 'giám đốc, ông chủ', '', ['사장님, 안녕하세요!', 'sajangnim, annyeonghaseyo', 'Chào giám đốc!']),
      w('동료', 'dongnyo', 'đồng nghiệp', 'Đọc [동뇨].', ['회사 동료예요.', 'hoesa dongnyoyeyo', 'Là đồng nghiệp công ty.']),
      w('바빠요', 'bappayo', 'bận', '', ['요즘 너무 바빠요.', 'yojeum neomu bappayo', 'Dạo này bận quá.']),
      w('피곤해요', 'pigonhaeyo', 'mệt', '', ['오늘 피곤해요.', 'oneul pigonhaeyo', 'Hôm nay mệt.']),
      w('출근', 'chulgeun', 'đi làm (đến công ty)', '출근해요.', ['아홉 시에 출근해요.', 'ahop sie chulgeunhaeyo', '9 giờ đi làm.']),
      w('퇴근', 'toegeun', 'tan làm', '퇴근해요.', ['몇 시에 퇴근해요?', 'myeot sie toegeunhaeyo?', 'Mấy giờ tan làm?']),
      w('사무실', 'samusil', 'văn phòng', '', ['사무실에 있어요.', 'samusire isseoyo', 'Đang ở văn phòng.'])
    ],
    qs: [
      ['mc', '“Tôi làm việc ở ngân hàng” là?', '은행에서 일해요.', ['은행에 일해요.', '은행을 일해요.', '은행에서 있어요.'], 'Nơi làm hành động → 에서.'],
      ['mc', '“Tôi đang ở văn phòng” là?', '사무실에 있어요.', ['사무실에서 있어요.', '사무실을 있어요.', '사무실이 일해요.'], 'Tồn tại → 에 있어요.'],
      ['mc', '“Anh/chị làm nghề gì?” là?', '무슨 일을 하세요?', ['일이 뭐예요 하세요?', '어디 일해요?', '누구 일해요?'], '무슨 일을 하세요?'],
      ['mc', '퇴근 nghĩa là?', 'tan làm', ['đi làm', 'nghỉ phép', 'họp'], 'toegeun.'],
      ['hear', '요즘 너무 바빠요.', 'Dạo này bận quá.', ['Dạo này mệt quá.', 'Hôm nay rảnh.', 'Dạo này vui quá.'], '바빠요 = bận.'],
      ['hear', '아홉 시에 출근해요.', '9 giờ đi làm.', ['9 giờ tan làm.', '9 tiếng làm việc.', 'Ngày 9 đi làm.'], '출근 = đi làm.'],
      ['order', 'Sắp xếp: “Tôi là kỹ sư IT.”', ['저는', 'IT 엔지니어예요.'], '저는 IT 엔지니어예요.']
    ],
    hoithoai: {
      ctx: 'Em gặp anh Park trong hội thảo công nghệ ở Seoul.', vai: 'Anh Park hỏi về công việc của em.', ai: '👨‍💼 박 선생님',
      luot: [
        T(['무슨 일을 하세요?', 'museun ireul haseyo?', 'Anh làm nghề gì?'], ['저는 IT 엔지니어예요. 은행에서 일해요.', 'jeoneun aiti enjinieoyeyo. eunhaengeseo ilhaeyo', 'Tôi là kỹ sư IT. Làm ở ngân hàng.', 'N에서 일해요.'], ['은행에 일해요.', 'eunhaenge ilhaeyo', 'Làm hành động → 에서.'], ['저는 일이에요.', 'jeoneun irieyo', '"Tôi là công việc" 😄']),
        T(['몇 시에 출근해요?', 'myeot sie chulgeunhaeyo?', 'Mấy giờ đi làm?'], ['일곱 시 반에 출근해요.', 'ilgop si bane chulgeunhaeyo', '7 rưỡi đi làm.', 'Giờ thuần Hàn + 에.'], ['칠 시 반에 출근해요.', 'chil si bane chulgeunhaeyo', 'Giờ dùng thuần Hàn.'], ['일곱 시에 퇴근해요.', 'ilgop sie toegeunhaeyo', 'Hỏi giờ đi làm, không phải tan làm.']),
        T(['일이 바빠요?', 'iri bappayo?', 'Công việc bận không?'], ['네, 좀 바빠요. 그런데 재미있어요.', 'ne, jom bappayo. geureonde jaemiisseoyo', 'Có, hơi bận. Nhưng thú vị.', '그런데 = nhưng.'], ['네, 사무실이에요.', 'ne, samusirieyo', 'Lạc đề.'], ['아니요, 피곤해요.', 'aniyo, pigonhaeyo', 'Câu mâu thuẫn.'])
      ], ket: 'Em đã giới thiệu công việc bằng tiếng Hàn.'
    },
    tom: ['무슨 일을 하세요?', 'N에서 일해요', '에 vs 에서', 'Giờ đi làm/tan làm'], nguphap: 'N에서 V; N에 있어요/가요; 몇 시에 …?', phatam: '동료 [동뇨], 일해요 [일해요]',
    loi: ['Nhầm 에 và 에서', 'Đọc giờ bằng số Hán-Hàn'], btvn: ['Viết 5 câu về công việc', 'Đặt 3 câu với 에 và 3 câu với 에서', 'Nói giờ đi làm, tan làm của em']
  };

  /* ================= NGÀY 19 ================= */
  const d19 = {
    n: 19, ten: 'Sở thích và đuôi câu -아요/어요', kinds: K,
    muc: 'Chia động từ đuôi lịch sự -아요/어요/해요, dùng trợ từ tân ngữ 을/를, nói sở thích.',
    hoc: `<h4>1. Chia động từ: bỏ 다, xem nguyên âm cuối của gốc</h4>${tbl(['Gốc có', 'Thêm', 'Ví dụ'], ['<tr><td>ㅏ, ㅗ</td><td>-아요</td><td>가다 → 가요 · 보다 → 봐요 · 좋다 → 좋아요</td></tr>', '<tr><td>nguyên âm khác</td><td>-어요</td><td>먹다 → 먹어요 · 읽다 → 읽어요 · 마시다 → 마셔요</td></tr>', '<tr><td>하다</td><td>→ 해요</td><td>공부하다 → 공부해요 · 운동하다 → 운동해요</td></tr>'])}
      <h4>2. Trợ từ tân ngữ 을/를</h4><p>Sau patchim dùng <b>을</b>, sau nguyên âm dùng <b>를</b>: 책<b>을</b> 읽어요 · 영화<b>를</b> 봐요. ${sp('책을 읽어요|영화를 봐요')}</p>${tip('🔁 Trật tự câu tiếng Hàn: <b>Chủ ngữ – Tân ngữ – Động từ</b> (động từ luôn cuối câu): 저는 영화를 봐요 = Tôi phim xem.')}
      <h4>3. Sở thích</h4><ul>${ex('취미가 뭐예요?', 'chwimiga mwoyeyo?', 'Sở thích của bạn là gì?')}${ex('음악을 좋아해요.', 'eumageul joahaeyo', 'Tôi thích âm nhạc.')}${ex('주말에 등산해요.', 'jumare deungsanhaeyo', 'Cuối tuần tôi leo núi.')}</ul>`,
    vocab: [
      w('좋아해요', 'joahaeyo', 'thích', 'N을/를 좋아해요.', ['커피를 좋아해요.', 'keopireul joahaeyo', 'Tôi thích cà phê.']),
      w('취미', 'chwimi', 'sở thích', '', ['취미가 뭐예요?', 'chwimiga mwoyeyo?', 'Sở thích là gì?']),
      w('음악', 'eumak', 'âm nhạc', 'Đọc [으막].', ['음악을 들어요.', 'eumageul deureoyo', 'Nghe nhạc.']),
      w('영화', 'yeonghwa', 'phim', '', ['영화를 봐요.', 'yeonghwareul bwayo', 'Xem phim.']),
      w('봐요', 'bwayo', 'xem, nhìn', 'Gốc: 보다.', ['드라마를 봐요.', 'deuramareul bwayo', 'Xem phim truyền hình.']),
      w('들어요', 'deureoyo', 'nghe', 'Gốc: 듣다 (bất quy tắc).', ['케이팝을 들어요.', 'keipabeul deureoyo', 'Nghe K-pop.']),
      w('운동', 'undong', 'thể thao, vận động', '운동해요.', ['매일 운동해요.', 'maeil undonghaeyo', 'Mỗi ngày tập thể dục.']),
      w('수영', 'suyeong', 'bơi lội', '수영해요.', ['수영을 좋아해요.', 'suyeongeul joahaeyo', 'Thích bơi.']),
      w('요리', 'yori', 'nấu ăn', '요리해요.', ['저는 요리를 잘해요.', 'jeoneun yorireul jalhaeyo', 'Tôi nấu ăn giỏi.']),
      w('여행', 'yeohaeng', 'du lịch', '', ['여행을 좋아해요.', 'yeohaengeul joahaeyo', 'Thích du lịch.']),
      w('읽어요', 'ilgeoyo', 'đọc', 'Gốc: 읽다.', ['책을 읽어요.', 'chaegeul ilgeoyo', 'Đọc sách.']),
      w('주말', 'jumal', 'cuối tuần', '', ['주말에 뭐 해요?', 'jumare mwo haeyo?', 'Cuối tuần làm gì?'])
    ],
    qs: [
      ['mc', '가다 → ?', '가요', ['가어요', '가해요', '가다요'], 'ㅏ → 아요 (rút gọn: 가요).'],
      ['mc', '먹다 → ?', '먹어요', ['먹아요', '먹해요', '먹요'], 'ㅓ → 어요.'],
      ['mc', '공부하다 → ?', '공부해요', ['공부하어요', '공부아요', '공부하요'], '하다 → 해요.'],
      ['mc', '책 ___ 읽어요.', '을', ['를', '이', '은'], 'Patchim → 을.'],
      ['mc', '영화 ___ 봐요.', '를', ['을', '가', '는'], 'Nguyên âm → 를.'],
      ['hear', '취미가 뭐예요?', 'Sở thích của bạn là gì?', ['Bạn làm nghề gì?', 'Bạn tên là gì?', 'Cuối tuần làm gì?'], '취미 = sở thích.'],
      ['order', 'Sắp xếp: “Tôi xem phim.”', ['저는', '영화를', '봐요.'], '저는 영화를 봐요.']
    ],
    hoithoai: {
      ctx: 'Em làm quen với Ha-na trong câu lạc bộ ngôn ngữ.', vai: 'Ha-na hỏi về sở thích.', ai: '👩 하나',
      luot: [
        T(['취미가 뭐예요?', 'chwimiga mwoyeyo?', 'Sở thích của bạn là gì?'], ['음악을 좋아해요. 케이팝을 자주 들어요.', 'eumageul joahaeyo. keipabeul jaju deureoyo', 'Tôi thích âm nhạc. Hay nghe K-pop.', '을/를 đúng; 자주 = thường.'], ['음악를 좋아해요.', 'eumakreul joahaeyo', 'Patchim → 을: 음악을.'], ['취미예요.', 'chwimiyeyo', 'Chưa trả lời.']),
        T(['주말에 뭐 해요?', 'jumare mwo haeyo?', 'Cuối tuần bạn làm gì?'], ['친구하고 영화를 봐요.', 'chinguhago yeonghwareul bwayo', 'Xem phim với bạn.', 'N하고 = với.'], ['영화를 보어요.', 'yeonghwareul boeoyo', '보다 → 봐요.'], ['주말이에요.', 'jumarieyo', 'Lạc đề.']),
        T(['요리 좋아해요?', 'yori joahaeyo?', 'Bạn thích nấu ăn không?'], ['네, 베트남 음식을 요리해요.', 'ne, Beteunam eumsigeul yorihaeyo', 'Có, tôi nấu món Việt.', '요리하다 → 요리해요.'], ['네, 요리하아요.', 'ne, yorihaayo', '하다 → 해요.'], ['아니요, 좋아해요.', 'aniyo, joahaeyo', 'Mâu thuẫn.'])
      ], ket: 'Em đã nói về sở thích và chia động từ đúng.'
    },
    tom: ['Đuôi -아요/어요/해요', 'Trợ từ 을/를', 'Trật tự S–O–V', 'Sở thích'], nguphap: 'V-아요/어요/해요; N을/를 V; N하고 (với)', phatam: '음악 [으막], 읽어요 [일거요]',
    loi: ['Nhầm 을/를', 'Chia 보어요 thay vì 봐요', 'Đặt động từ giữa câu'], btvn: ['Chia 10 động từ: 가다, 오다, 보다, 먹다, 마시다, 읽다, 하다, 공부하다, 일하다, 좋다', 'Viết 5 câu về sở thích', 'Kể cuối tuần của em 3 câu']
  };

  /* ================= NGÀY 20 ================= */
  const d20 = {
    n: 20, ten: 'Thời gian, lịch hẹn và thì quá khứ', kinds: K,
    muc: 'Nói hôm qua – hôm nay – ngày mai, hẹn gặp, dùng thì quá khứ -았/었어요.',
    hoc: `<h4>1. Thời gian + 에</h4><p>Giờ, thứ, buổi + <b>에</b>: 세 시에, 월요일에, 아침에. Riêng <b>어제, 오늘, 내일, 지금</b> không cần 에. ${sp('내일 만나요|세 시에 만나요')}</p>
      <h4>2. Thì quá khứ: -았/었/했어요</h4>${tbl(['Gốc có', 'Quá khứ', 'Ví dụ'], ['<tr><td>ㅏ, ㅗ</td><td>-았어요</td><td>가다 → 갔어요 · 보다 → 봤어요</td></tr>', '<tr><td>khác</td><td>-었어요</td><td>먹다 → 먹었어요 · 마시다 → 마셨어요</td></tr>', '<tr><td>하다</td><td>→ 했어요</td><td>공부하다 → 공부했어요</td></tr>'])}<ul>${ex('어제 뭐 했어요?', 'eoje mwo haesseoyo?', 'Hôm qua bạn làm gì?')}${ex('친구를 만났어요.', 'chingureul mannasseoyo', 'Tôi đã gặp bạn.')}</ul>
      <h4>3. Hẹn gặp</h4><ul>${ex('내일 시간 있어요?', 'naeil sigan isseoyo?', 'Mai bạn có thời gian không?')}${ex('같이 밥 먹어요!', 'gachi bap meogeoyo', 'Cùng đi ăn nhé!')}${ex('토요일 저녁 일곱 시 어때요?', 'toyoil jeonyeok ilgop si eottaeyo?', 'Tối thứ Bảy 7 giờ thì sao?')}</ul>`,
    vocab: [
      w('어제', 'eoje', 'hôm qua', '', ['어제 바빴어요.', 'eoje bappasseoyo', 'Hôm qua bận.']),
      w('오늘', 'oneul', 'hôm nay', '', ['오늘 날씨가 좋아요.', 'oneul nalssiga joayo', 'Hôm nay trời đẹp.']),
      w('내일', 'naeil', 'ngày mai', '', ['내일 만나요!', 'naeil mannayo', 'Mai gặp nhé!']),
      w('아침', 'achim', 'buổi sáng; bữa sáng', '', ['아침에 운동해요.', 'achime undonghaeyo', 'Buổi sáng tập thể dục.']),
      w('저녁', 'jeonyeok', 'buổi tối; bữa tối', '', ['저녁 먹었어요?', 'jeonyeok meogeosseoyo?', 'Ăn tối chưa?']),
      w('시간', 'sigan', 'thời gian; tiếng (giờ)', '', ['시간 있어요?', 'sigan isseoyo?', 'Có thời gian không?']),
      w('약속', 'yaksok', 'cuộc hẹn; lời hứa', '', ['오늘 약속이 있어요.', 'oneul yaksogi isseoyo', 'Hôm nay có hẹn.']),
      w('만나요', 'mannayo', 'gặp', 'Gốc: 만나다.', ['어디서 만나요?', 'eodiseo mannayo?', 'Gặp ở đâu?']),
      w('갔어요', 'gasseoyo', 'đã đi', 'Quá khứ của 가다.', ['어제 부산에 갔어요.', 'eoje Busane gasseoyo', 'Hôm qua tôi đã đi Busan.']),
      w('먹었어요', 'meogeosseoyo', 'đã ăn', 'Quá khứ của 먹다.', ['점심 먹었어요?', 'jeomsim meogeosseoyo?', 'Ăn trưa chưa?']),
      w('했어요', 'haesseoyo', 'đã làm', 'Quá khứ của 하다.', ['숙제를 했어요.', 'sukjereul haesseoyo', 'Đã làm bài tập.']),
      w('같이', 'gachi', 'cùng nhau', 'Đọc [가치].', ['같이 가요!', 'gachi gayo', 'Đi cùng nhau nhé!'])
    ],
    qs: [
      ['mc', '가다 (quá khứ) → ?', '갔어요', ['가었어요', '갔어요다', '가했어요'], 'ㅏ → 았 → 갔어요.'],
      ['mc', '먹다 (quá khứ) → ?', '먹었어요', ['먹았어요', '먹했어요', '먹어요'], 'Khác ㅏ/ㅗ → 었.'],
      ['mc', '공부하다 (quá khứ) → ?', '공부했어요', ['공부하었어요', '공부았어요', '공부해요'], '하다 → 했어요.'],
      ['mc', 'Câu đúng là?', '내일 만나요.', ['내일에 만나요.', '내일을 만나요.', '내일이 만나요.'], '내일 không cần 에.'],
      ['mc', '“같이” đọc thực tế là?', '[가치] gachi', ['[같이] gat-i', '[가티]', '[갇이]'], 'Biến âm: ㅌ + 이 → 치.'],
      ['hear', '어제 뭐 했어요?', 'Hôm qua bạn làm gì?', ['Mai bạn làm gì?', 'Hôm nay bạn làm gì?', 'Bạn đang làm gì?'], '어제 + 했어요.'],
      ['hear', '토요일 저녁 일곱 시 어때요?', 'Tối thứ Bảy 7 giờ thì sao?', ['Sáng thứ Bảy 7 giờ thì sao?', 'Tối Chủ nhật 7 giờ thì sao?', 'Thứ Bảy 7 giờ có rảnh không?'], '저녁 = tối.']
    ],
    hoithoai: {
      ctx: 'Su-jin nhắn tin rủ em đi ăn.', vai: 'Su-jin hỏi, em trả lời và hẹn lịch.', ai: '👩 수진',
      luot: [
        T(['어제 뭐 했어요?', 'eoje mwo haesseoyo?', 'Hôm qua anh làm gì?'], ['친구를 만났어요. 같이 영화를 봤어요.', 'chingureul mannasseoyo. gachi yeonghwareul bwasseoyo', 'Tôi gặp bạn. Cùng xem phim.', 'Quá khứ: 만났어요, 봤어요.'], ['친구를 만나요.', 'chingureul mannayo', 'Hôm qua → quá khứ.'], ['영화를 보았어요 했어요.', 'yeonghwareul boasseoyo haesseoyo', 'Câu thừa.']),
        T(['내일 시간 있어요?', 'naeil sigan isseoyo?', 'Mai anh có thời gian không?'], ['네, 있어요. 왜요?', 'ne, isseoyo. waeyo?', 'Có. Sao vậy?', '왜요 = sao vậy.'], ['내일에 있어요.', 'naeire isseoyo', '내일 không cần 에.'], ['어제 없었어요.', 'eoje eopseosseoyo', 'Lạc đề.']),
        T(['같이 저녁 먹어요!', 'gachi jeonyeok meogeoyo', 'Cùng ăn tối nhé!'], ['좋아요! 몇 시에 만나요?', 'joayo! myeot sie mannayo?', 'Được đấy! Mấy giờ gặp?', 'Đồng ý + hỏi giờ.'], ['저녁 먹었어요.', 'jeonyeok meogeosseoyo', 'Đó là chuyện tối nay đã ăn.'], ['아니요, 좋아요.', 'aniyo, joayo', 'Mâu thuẫn.']),
        T(['일곱 시에 회사 앞에서 만나요.', 'ilgop sie hoesa apeseo mannayo', '7 giờ gặp ở trước công ty nhé.'], ['네, 내일 봐요!', 'ne, naeil bwayo', 'Vâng, mai gặp!', '봐요 = gặp (thân mật).'], ['칠 시요?', 'chil siyo?', 'Giờ đọc 일곱 시.'], ['어제 봐요!', 'eoje bwayo', 'Hẹn mai chứ không phải hôm qua.'])
      ], ket: 'Em đã kể chuyện hôm qua và hẹn lịch ngày mai.'
    },
    tom: ['Thời gian + 에', 'Quá khứ -았/었/했어요', 'Hẹn gặp'], nguphap: 'Thời gian + 에; V-았/었/했어요; 같이 V-아/어요 (rủ)', phatam: '같이 [가치], 갔어요 [가써요]',
    loi: ['Thêm 에 sau 내일/오늘', 'Chia quá khứ sai nguyên âm'], btvn: ['Kể 5 việc đã làm hôm qua', 'Chia quá khứ 10 động từ', 'Rủ một người bạn đi ăn bằng tiếng Hàn']
  };

  /* ================= NGÀY 21 ================= */
  const d21 = {
    n: 21, ten: 'Kiểm tra tổng hợp và mô phỏng giao tiếp', vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Ôn giai đoạn 3, mô phỏng một ngày ở Seoul, kiểm tra 20 câu.',
    hoc: `<h4>Tóm tắt giai đoạn 3</h4>${tbl(['Chủ đề', 'Mẫu câu'], ['<tr><td>Mua sắm</td><td>얼마예요? 좀 깎아 주세요. 이거 살게요.</td></tr>', '<tr><td>Hỏi đường</td><td>…이/가 어디예요? … 옆에 있어요. 똑바로 가세요.</td></tr>', '<tr><td>Giao thông</td><td>지하철을 타요. 집에서 회사까지 얼마나 걸려요?</td></tr>', '<tr><td>Công việc</td><td>무슨 일을 하세요? 은행에서 일해요.</td></tr>', '<tr><td>Sở thích</td><td>V-아요/어요/해요; N을/를 좋아해요</td></tr>', '<tr><td>Quá khứ, hẹn</td><td>갔어요/먹었어요/했어요; 내일 시간 있어요?</td></tr>'])}`,
    qs: [['mc', '어제 친구를 ___.', '만났어요', ['만나요', '만날게요', '만나다'], 'Hôm qua → quá khứ.'], ['mc', '저는 회사 ___ 일해요.', '에서', ['에', '을', '가'], 'Nơi làm hành động.']],
    hoithoai: {
      ctx: 'Một ngày ở Seoul: taxi → hỏi đường → mua sắm → hẹn bạn.', vai: 'Nhiều vai, em phản xạ liên tục.', ai: '🎭 여러 사람',
      luot: [
        T(['（기사님）어디로 갈까요?', '(gisanim) eodiro galkkayo?', '(Tài xế) Đi đâu ạ?'], ['명동으로 가 주세요.', 'Myeongdongeuro ga juseyo', 'Cho tôi đến Myeongdong.', 'N(으)로 가 주세요.'], ['명동을 타요.', 'Myeongdongeul tayo', '타요 dùng cho phương tiện.'], ['명동이에요.', 'Myeongdongieyo', 'Chưa rõ yêu cầu.']),
        T(['（행인）뭐 찾으세요?', '(haengin) mwo chajeuseyo?', '(Người đi đường) Tìm gì ạ?'], ['화장실이 어디예요?', 'hwajangsiri eodiyeyo?', 'Nhà vệ sinh ở đâu?', 'Hỏi đường.'], ['화장실 주세요.', 'hwajangsil juseyo', 'Sai nghĩa.'], ['화장실을 타요.', 'hwajangsireul tayo', 'Sai.']),
        T(['（사장님）이거 삼만 원이에요.', '(sajangnim) igeo samman wonieyo', '(Chủ cửa hàng) Cái này 30.000 won.'], ['좀 깎아 주세요.', 'jom kkakka juseyo', 'Bớt chút đi ạ.', 'Mặc cả.'], ['삼천 원이요?', 'samcheon wonieyo?', 'Nghe nhầm.'], ['너무 싸요.', 'neomu ssayo', 'Khó mặc cả.']),
        T(['（친구）오늘 뭐 했어요?', '(chingu) oneul mwo haesseoyo?', '(Bạn) Hôm nay làm gì?'], ['명동에서 쇼핑했어요.', 'Myeongdongeseo syopinghaesseoyo', 'Tôi đã mua sắm ở Myeongdong.', 'Quá khứ + 에서.'], ['명동에 쇼핑해요.', 'Myeongdonge syopinghaeyo', 'Quá khứ, và dùng 에서.'], ['쇼핑이에요.', 'syopingieyo', 'Chưa trả lời.'])
      ], ket: 'Em đã đi trọn một ngày ở Seoul!'
    },
    tom: ['Ôn giai đoạn 3', 'Kiểm tra 20 câu'], nguphap: 'Ôn giai đoạn 3', phatam: 'Nói liền mạch',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: ôn và làm lại', 'Tự đóng vai hội thoại 1 ngày ở Seoul']
  };

  /* ================= NGÀY 22 ================= */
  const d22 = {
    n: 22, ten: 'Làm quen người mới', kinds: K,
    muc: 'Hỏi quê, nơi sống, chuyện học tiếng Hàn; khen, đáp lời khen; xin KakaoTalk.',
    hoc: `${lv()}<h4>1. Bắt chuyện</h4>${reads([['어디에서 왔어요?', 'eodieseo wasseoyo?', 'Bạn từ đâu đến?'], ['고향이 어디예요?', 'gohyangi eodiyeyo?', 'Quê bạn ở đâu?'], ['어디에 살아요?', 'eodie sarayo?', 'Bạn sống ở đâu?'], ['한국어를 얼마나 공부했어요?', 'hangugeoreul eolmana gongbuhaesseoyo?', 'Bạn học tiếng Hàn bao lâu rồi?']])}
      <h4>2. Khen và đáp lời khen</h4><ul>${ex('한국어를 잘해요!', 'hangugeoreul jalhaeyo', 'Bạn nói tiếng Hàn giỏi quá!')}${ex('아니에요, 아직 잘 못해요.', 'anieyo, ajik jal motaeyo', 'Đâu có, tôi vẫn chưa giỏi.')}</ul>
      <h4>3. Xin liên lạc</h4><ul>${ex('카톡 해요?', 'katok haeyo?', 'Bạn có dùng KakaoTalk không?')}${ex('번호 좀 알려 주세요.', 'beonho jom allyeo juseyo', 'Cho tôi xin số nhé.')}${ex('연락할게요!', 'yeollakalgeyo', 'Tôi sẽ liên lạc!')}</ul>${tip('💡 <b>카톡 (KakaoTalk)</b> là ứng dụng nhắn tin phổ biến nhất Hàn Quốc, giống Zalo ở Việt Nam.')}`,
    vocab: [
      w('고향', 'gohyang', 'quê hương', '', ['고향이 어디예요?', 'gohyangi eodiyeyo?', 'Quê bạn ở đâu?']),
      w('살아요', 'sarayo', 'sống', 'Gốc: 살다.', ['서울에 살아요.', 'Seoure sarayo', 'Tôi sống ở Seoul.']),
      w('공부해요', 'gongbuhaeyo', 'học', '', ['한국어를 공부해요.', 'hangugeoreul gongbuhaeyo', 'Tôi học tiếng Hàn.']),
      w('재미있어요', 'jaemiisseoyo', 'thú vị, vui', '', ['한국어가 재미있어요.', 'hangugeoga jaemiisseoyo', 'Tiếng Hàn thú vị.']),
      w('잘해요', 'jalhaeyo', 'giỏi', 'Phủ định: 잘 못해요.', ['요리를 잘해요.', 'yorireul jalhaeyo', 'Nấu ăn giỏi.']),
      w('아직', 'ajik', 'vẫn, vẫn chưa', '', ['아직 학생이에요.', 'ajik haksaengieyo', 'Vẫn là học sinh.']),
      w('연락', 'yeollak', 'liên lạc', 'Đọc [열락].', ['연락할게요.', 'yeollakalgeyo', 'Tôi sẽ liên lạc.']),
      w('카톡', 'katok', 'KakaoTalk', '', ['카톡 보낼게요.', 'katok bonaelgeyo', 'Tôi sẽ nhắn Kakao.']),
      w('번호', 'beonho', 'số (điện thoại…)', '', ['번호가 뭐예요?', 'beonhoga mwoyeyo?', 'Số của bạn là gì?']),
      w('진짜', 'jinjja', 'thật, thật sự', '', ['진짜요?', 'jinjjayo?', 'Thật à?']),
      w('예뻐요', 'yeppeoyo', 'đẹp, xinh', '', ['서울이 예뻐요.', 'Seouri yeppeoyo', 'Seoul đẹp.']),
      w('날씨', 'nalssi', 'thời tiết', '', ['날씨가 좋아요.', 'nalssiga joayo', 'Thời tiết đẹp.'])
    ],
    qs: [
      ['mc', '“Bạn sống ở đâu?” là?', '어디에 살아요?', ['어디에서 살아요를?', '어디가 살아요?', '어디 사람 살아요?'], 'N에 살아요.'],
      ['mc', 'Được khen “한국어를 잘해요!”, đáp khiêm tốn là?', '아니에요, 아직 잘 못해요.', ['네, 잘해요.', '감사합니다, 진짜 잘해요.', '괜찮아요.'], 'Khiêm tốn.'],
      ['mc', '“연락” đọc thực tế là?', '[열락] yeollak', ['[연락] yeonrak', '[여낙]', '[연낙]'], 'ㄴ + ㄹ → ㄹㄹ.'],
      ['mc', '“Thật à?” là?', '진짜요?', ['예뻐요?', '아직이요?', '번호요?'], '진짜 = thật.'],
      ['hear', '고향이 어디예요?', 'Quê bạn ở đâu?', ['Bạn sống ở đâu?', 'Bạn đến từ đâu?', 'Nhà bạn ở đâu?'], '고향 = quê.'],
      ['hear', '연락할게요!', 'Tôi sẽ liên lạc!', ['Hẹn gặp lại!', 'Cho tôi số nhé!', 'Tôi sẽ đến!'], '연락 = liên lạc.'],
      ['order', 'Sắp xếp: “Tiếng Hàn thú vị.”', ['한국어가', '재미있어요.'], '한국어가 재미있어요.']
    ],
    hoithoai: {
      ctx: 'Em gặp Jun-ho ở một sự kiện giao lưu Việt – Hàn.', vai: 'Jun-ho bắt chuyện.', ai: '👨 준호',
      luot: [
        T(['안녕하세요! 어디에서 왔어요?', 'annyeonghaseyo! eodieseo wasseoyo?', 'Chào bạn! Bạn từ đâu đến?'], ['베트남에서 왔어요. 고향은 다낭이에요.', 'Beteunameseo wasseoyo. gohyangeun Danangieyo', 'Tôi đến từ Việt Nam. Quê ở Đà Nẵng.', 'N에서 왔어요.'], ['베트남에 왔어요.', 'Beteuname wasseoyo', '"Từ đâu đến" dùng 에서.'], ['베트남 사람 살아요.', 'Beteunam saram sarayo', 'Sai.']),
        T(['한국어를 진짜 잘해요!', 'hangugeoreul jinjja jalhaeyo', 'Bạn nói tiếng Hàn giỏi thật!'], ['아니에요, 아직 잘 못해요.', 'anieyo, ajik jal motaeyo', 'Đâu có, tôi vẫn chưa giỏi.', 'Đáp lời khen khiêm tốn.'], ['네, 저는 잘해요.', 'ne, jeoneun jalhaeyo', 'Thiếu khiêm tốn.'], ['괜찮아요.', 'gwaenchanayo', 'Không phù hợp.']),
        T(['한국 생활은 어때요?', 'Hanguk saenghwareun eottaeyo?', 'Cuộc sống ở Hàn thế nào?'], ['재미있어요. 서울이 정말 예뻐요.', 'jaemiisseoyo. Seouri jeongmal yeppeoyo', 'Thú vị lắm. Seoul đẹp thật.', 'Nhận xét tích cực.'], ['날씨예요.', 'nalssiyeyo', 'Sai.'], ['재미있었어요 내일.', 'jaemiisseosseoyo naeil', 'Sai.']),
        T(['우리 카톡 해요!', 'uri katok haeyo', 'Mình nhắn Kakao nhé!'], ['좋아요! 연락할게요.', 'joayo! yeollakalgeyo', 'Được! Tôi sẽ liên lạc.', 'Kết thúc làm quen.'], ['카톡이 없어요 진짜.', 'katogi eopseoyo jinjja', 'Cắt đứt câu chuyện.'], ['번호예요.', 'beonhoyeyo', 'Câu cụt.'])
      ], ket: 'Em đã làm quen và xin liên lạc bằng tiếng Hàn.'
    },
    tom: ['Câu bắt chuyện', 'Khen – đáp khiêm tốn', 'Xin KakaoTalk'], nguphap: 'N에서 왔어요; N에 살아요; 잘해요 / 잘 못해요; V-ㄹ게요', phatam: '연락 [열락], 못해요 [모태요]',
    loi: ['Dùng 에 thay 에서 khi nói "từ đâu"', 'Nhận lời khen bằng 네'], btvn: ['Chuẩn bị 5 câu làm quen', 'Ghi âm đoạn giới thiệu quê nhà', 'Tập đáp lời khen 3 lần']
  };

  /* ================= NGÀY 23 ================= */
  const d23 = {
    n: 23, ten: 'Giao tiếp tại nhà hàng', kinds: K,
    muc: 'Đặt bàn, báo số người, hỏi món ngon, yêu cầu ít cay, gọi thêm, tính tiền, gói mang về.',
    hoc: `${lv()}<h4>1. Vào quán</h4>${reads([['몇 분이세요? – 두 명이에요.', 'myeot buniseyo? – du myeongieyo', 'Mấy vị ạ? – 2 người.'], ['예약했어요.', 'yeyakhaesseoyo', 'Tôi đã đặt bàn.'], ['뭐가 맛있어요?', 'mwoga masisseoyo?', 'Món gì ngon?'], ['추천해 주세요.', 'chucheonhae juseyo', 'Gợi ý cho tôi với.']])}
      <h4>2. Yêu cầu khẩu vị</h4><ul>${ex('덜 맵게 해 주세요.', 'deol maepge hae juseyo', 'Làm ít cay thôi.')}${ex('반찬 더 주세요.', 'banchan deo juseyo', 'Cho thêm món ăn kèm.')}${ex('맥주 한 병 더 주세요.', 'maekju han byeong deo juseyo', 'Cho thêm 1 chai bia.')}</ul>
      <h4>3. Tính tiền</h4><ul>${ex('계산해 주세요.', 'gyesanhae juseyo', 'Tính tiền cho tôi.')}${ex('포장해 주세요.', 'pojanghae juseyo', 'Gói mang về giúp tôi.')}${ex('잘 먹었습니다!', 'jal meogeotseumnida', 'Cảm ơn vì bữa ăn ngon! (nói khi ra về)')}</ul>
      ${tip('💡 Ở Hàn Quốc thường <b>ra quầy thu ngân</b> để trả tiền, không trả ở bàn; và <b>không có văn hoá tip</b>.')}`,
    vocab: [
      w('예약', 'yeyak', 'đặt trước', '예약했어요.', ['예약했어요.', 'yeyakhaesseoyo', 'Tôi đã đặt bàn.']),
      w('추천', 'chucheon', 'gợi ý, giới thiệu', '', ['추천해 주세요.', 'chucheonhae juseyo', 'Gợi ý cho tôi.']),
      w('덜', 'deol', 'ít hơn', '', ['덜 맵게 해 주세요.', 'deol maepge hae juseyo', 'Ít cay thôi.']),
      w('더', 'deo', 'thêm, hơn', '', ['물 더 주세요.', 'mul deo juseyo', 'Cho thêm nước.']),
      w('포장', 'pojang', 'gói mang về', '', ['포장해 주세요.', 'pojanghae juseyo', 'Gói mang về giúp tôi.']),
      w('반찬', 'banchan', 'món ăn kèm', '', ['반찬이 많아요.', 'banchani manayo', 'Nhiều món ăn kèm.']),
      w('맛집', 'matjip', 'quán ngon', 'Đọc [맏찝].', ['여기 맛집이에요.', 'yeogi matjibieyo', 'Đây là quán ngon.']),
      w('배불러요', 'baebulleoyo', 'no', '', ['너무 배불러요.', 'neomu baebulleoyo', 'No quá.']),
      w('맥주', 'maekju', 'bia', '', ['맥주 한 잔 주세요.', 'maekju han jan juseyo', 'Cho một ly bia.']),
      w('소주', 'soju', 'rượu soju', '', ['소주 한 병', 'soju han byeong', 'một chai soju']),
      w('잠깐만요', 'jamkkanmanyo', 'chờ chút', '', ['잠깐만요!', 'jamkkanmanyo', 'Chờ chút ạ!']),
      w('몇 분', 'myeot bun', 'mấy vị (kính trọng)', '분 = người (kính trọng).', ['몇 분이세요?', 'myeot buniseyo?', 'Mấy vị ạ?'])
    ],
    qs: [
      ['mc', '“Làm ít cay thôi” là?', '덜 맵게 해 주세요.', ['더 맵게 해 주세요.', '매워요 덜.', '덜 매워요 주세요?'], '덜 = ít hơn.'],
      ['mc', '“Cho thêm món ăn kèm” là?', '반찬 더 주세요.', ['반찬 덜 주세요.', '더 반찬이에요.', '반찬 포장해요.'], '더 = thêm.'],
      ['mc', 'Ra về sau bữa ăn, người Hàn thường nói?', '잘 먹었습니다!', ['잘 부탁드립니다!', '안녕하세요!', '맛없어요!'], 'Cảm ơn vì bữa ăn.'],
      ['mc', '“Gói mang về giúp tôi” là?', '포장해 주세요.', ['계산해 주세요.', '예약해 주세요.', '추천해 주세요.'], '포장 = gói.'],
      ['hear', '몇 분이세요?', 'Mấy vị ạ?', ['Mấy phút ạ?', 'Mấy giờ ạ?', 'Bao nhiêu tiền ạ?'], '분 ở đây = vị (người).'],
      ['hear', '너무 배불러요.', 'No quá.', ['Đói quá.', 'Cay quá.', 'Ngon quá.'], '배불러요 = no.'],
      ['order', 'Sắp xếp: “Tính tiền cho tôi.”', ['계산해', '주세요.'], '계산해 주세요.']
    ],
    hoithoai: {
      ctx: 'Em mời đối tác Hàn Quốc ăn tối ở quán thịt nướng.', vai: 'Nhân viên hỏi, em gọi món và thanh toán.', ai: '🧑‍🍳 직원',
      luot: [
        T(['어서 오세요! 몇 분이세요?', 'eoseo oseyo! myeot buniseyo?', 'Mời vào! Mấy vị ạ?'], ['두 명이에요. 예약했어요.', 'du myeongieyo. yeyakhaesseoyo', '2 người. Tôi đã đặt bàn.', 'Báo số người + đã đặt.'], ['두 분이에요.', 'du bunieyo', '분 là kính trọng, không dùng nói về mình.'], ['이 명이에요.', 'i myeongieyo', 'Đếm người dùng số thuần Hàn.']),
        T(['뭐 드릴까요?', 'mwo deurilkkayo?', 'Quý khách dùng gì?'], ['뭐가 맛있어요? 추천해 주세요.', 'mwoga masisseoyo? chucheonhae juseyo', 'Món nào ngon? Gợi ý giúp tôi.', 'Hỏi món ngon.'], ['맛있어요!', 'masisseoyo', 'Chưa ăn mà.'], ['계산해 주세요.', 'gyesanhae juseyo', 'Chưa ăn mà đã tính tiền.']),
        T(['삼겹살이 맛있어요. 김치찌개도 좋아요.', 'samgyeopsari masisseoyo. gimchijjigaedo joayo', 'Thịt ba chỉ ngon. Canh kim chi cũng ngon.'], ['삼겹살 이 인분하고 김치찌개 주세요. 덜 맵게 해 주세요.', 'samgyeopsal i inbunhago gimchijjigae juseyo. deol maepge hae juseyo', 'Cho 2 phần ba chỉ và canh kim chi. Ít cay nhé.', '인분 = suất (dùng số Hán-Hàn).'], ['더 맵게 해 주세요.', 'deo maepge hae juseyo', '"Cay hơn" – có chắc không? 😄'], ['반찬이에요.', 'banchanieyo', 'Sai.']),
        T(['맛있게 드셨어요?', 'masitge deusyeosseoyo?', 'Quý khách ăn có ngon không?'], ['네, 잘 먹었습니다! 계산해 주세요.', 'ne, jal meogeotseumnida! gyesanhae juseyo', 'Vâng, cảm ơn bữa ăn! Tính tiền giúp tôi.', 'Lịch sự kiểu Hàn.'], ['맛없어요.', 'madeopseoyo', 'Không lịch sự.'], ['잘 부탁드립니다.', 'jal butakdeurimnida', 'Dùng khi tự giới thiệu.'])
      ], ket: 'Em đã tiếp đối tác ở quán thịt nướng Hàn Quốc.'
    },
    tom: ['Báo số người, đặt bàn', 'Hỏi món ngon', 'Yêu cầu khẩu vị 덜/더', 'Tính tiền, gói, 잘 먹었습니다'], nguphap: 'V-아/어 주세요; 덜/더; N + 인분', phatam: '맛집 [맏찝], 먹었습니다 [머걷씀니다]',
    loi: ['Dùng 분 cho mình', 'Nhầm 덜 và 더'], btvn: ['Tập gọi món cho 3 người', 'Học 5 món Hàn phổ biến', 'Luyện câu 잘 먹었습니다 khi ăn xong']
  };

  /* ================= NGÀY 24 ================= */
  const d24 = {
    n: 24, ten: 'Mua sắm quần áo', kinds: K,
    muc: 'Hỏi cỡ, màu, xin thử đồ (입어 봐도 돼요?), nói rộng/chật, đổi trả hàng.',
    hoc: `${lv()}<h4>1. Thử đồ: V-아/어 봐도 돼요? (… thử được không?)</h4><ul>${ex('입어 봐도 돼요?', 'ibeo bwado dwaeyo?', 'Mặc thử được không?')}${ex('신어 봐도 돼요?', 'sineo bwado dwaeyo?', 'Đi thử (giày) được không?')}</ul>${tip('💡 Mặc áo, quần dùng <b>입다</b>; đi giày, tất dùng <b>신다</b>; đội mũ dùng <b>쓰다</b>.')}
      <h4>2. Cỡ và màu</h4>${reads([['사이즈가 어떻게 되세요?', 'saijeuga eotteoke doeseyo?', 'Quý khách mặc cỡ nào?'], ['좀 커요.', 'jom keoyo', 'Hơi rộng.'], ['좀 작아요.', 'jom jagayo', 'Hơi chật.'], ['다른 색깔 있어요?', 'dareun saekkkal isseoyo?', 'Có màu khác không?']])}
      <h4>3. Đổi trả</h4><ul>${ex('교환돼요?', 'gyohwandwaeyo?', 'Đổi được không?')}${ex('환불해 주세요.', 'hwanbulhae juseyo', 'Hoàn tiền cho tôi.')}</ul>`,
    vocab: [
      w('셔츠', 'syeocheu', 'áo sơ mi', '', ['이 셔츠 예뻐요.', 'i syeocheu yeppeoyo', 'Áo sơ mi này đẹp.']),
      w('바지', 'baji', 'quần', '', ['바지가 길어요.', 'bajiga gireoyo', 'Quần dài.']),
      w('신발', 'sinbal', 'giày dép', '', ['신발이 편해요.', 'sinbari pyeonhaeyo', 'Giày êm.']),
      w('치마', 'chima', 'váy', '', ['치마가 짧아요.', 'chimaga jjalbayo', 'Váy ngắn.']),
      w('사이즈', 'saijeu', 'cỡ, size', '', ['사이즈가 안 맞아요.', 'saijeuga an majayo', 'Không vừa size.']),
      w('색깔', 'saekkkal', 'màu sắc', '', ['색깔이 예뻐요.', 'saekkkari yeppeoyo', 'Màu đẹp.']),
      w('커요', 'keoyo', 'to, rộng', '', ['좀 커요.', 'jom keoyo', 'Hơi rộng.']),
      w('작아요', 'jagayo', 'nhỏ, chật', '', ['신발이 작아요.', 'sinbari jagayo', 'Giày chật.']),
      w('입어 봐도 돼요', 'ibeo bwado dwaeyo', 'mặc thử được không', '', ['이거 입어 봐도 돼요?', 'igeo ibeo bwado dwaeyo?', 'Mặc thử cái này được không?']),
      w('교환', 'gyohwan', 'đổi (hàng)', '', ['교환돼요?', 'gyohwandwaeyo?', 'Đổi được không?']),
      w('환불', 'hwanbul', 'hoàn tiền', '', ['환불해 주세요.', 'hwanbulhae juseyo', 'Hoàn tiền giúp tôi.']),
      w('세일', 'seil', 'giảm giá (sale)', '', ['지금 세일해요.', 'jigeum seilhaeyo', 'Đang giảm giá.'])
    ],
    qs: [
      ['mc', '“Mặc thử được không?” là?', '입어 봐도 돼요?', ['입어요 돼요?', '신어 봐요?', '입어 주세요?'], 'V-아/어 봐도 돼요?'],
      ['mc', 'Thử giày dùng động từ nào?', '신다 (신어 봐도 돼요?)', ['입다', '쓰다', '타다'], 'Giày, tất → 신다.'],
      ['mc', '“Có màu khác không?” là?', '다른 색깔 있어요?', ['색깔 다른 없어요?', '다른 사이즈 있어요?', '색깔이 예뻐요?'], '다른 = khác.'],
      ['mc', '“Hơi chật” là?', '좀 작아요.', ['좀 커요.', '좀 예뻐요.', '좀 비싸요.'], '작아요 = nhỏ, chật.'],
      ['hear', '환불해 주세요.', 'Hoàn tiền giúp tôi.', ['Đổi hàng giúp tôi.', 'Tính tiền giúp tôi.', 'Gói giúp tôi.'], '환불 = hoàn tiền.'],
      ['hear', '사이즈가 안 맞아요.', 'Không vừa size.', ['Vừa size.', 'Size to quá.', 'Hết size.'], '안 맞아요 = không vừa.'],
      ['order', 'Sắp xếp: “Đổi được không?”', ['교환', '돼요?'], '교환돼요?']
    ],
    hoithoai: {
      ctx: 'Em mua áo ở một cửa hàng thời trang tại Hongdae.', vai: 'Nhân viên tư vấn, em chọn, thử và mua.', ai: '👩 점원',
      luot: [
        T(['어서 오세요! 찾으시는 거 있으세요?', 'eoseo oseyo! chajeusineun geo isseuseyo?', 'Mời vào! Quý khách tìm gì ạ?'], ['셔츠 좀 보여 주세요.', 'syeocheu jom boyeo juseyo', 'Cho tôi xem áo sơ mi.', 'V-아/어 주세요.'], ['셔츠예요.', 'syeocheuyeyo', 'Chưa rõ yêu cầu.'], ['환불해 주세요.', 'hwanbulhae juseyo', 'Chưa mua mà.']),
        T(['이건 어때요? 요즘 인기 많아요.', 'igeon eottaeyo? yojeum ingi manayo', 'Cái này thế nào? Dạo này đang hot.'], ['예뻐요! 입어 봐도 돼요?', 'yeppeoyo! ibeo bwado dwaeyo?', 'Đẹp! Mặc thử được không?', 'Khen + xin thử.'], ['신어 봐도 돼요?', 'sineo bwado dwaeyo?', 'Áo dùng 입다.'], ['비싸요!', 'bissayo', 'Chưa biết giá.']),
        T(['어떠세요?', 'eotteoseyo?', 'Thế nào ạ?'], ['좀 커요. 작은 사이즈 있어요?', 'jom keoyo. jageun saijeu isseoyo?', 'Hơi rộng. Có size nhỏ hơn không?', 'Nhận xét + hỏi size.'], ['좀 커요. 큰 사이즈 있어요?', 'jom keoyo. keun saijeu isseoyo?', 'Rộng rồi thì cần size nhỏ hơn.'], ['색깔이에요.', 'saekkkarieyo', 'Sai.']),
        T(['여기 있어요. 지금 세일해서 이만 원이에요.', 'yeogi isseoyo. jigeum seilhaeseo iman wonieyo', 'Đây ạ. Đang giảm giá nên 20.000 won.'], ['딱 맞아요! 이거 살게요.', 'ttak majayo! igeo salgeyo', 'Vừa khít! Tôi mua cái này.', '딱 맞아요 = vừa khít.'], ['환불해 주세요.', 'hwanbulhae juseyo', 'Chưa mua mà.'], ['이천 원이요?', 'icheon wonieyo?', 'Nghe nhầm: 이만 = 20.000.'])
      ], ket: 'Em đã chọn, thử và mua áo bằng tiếng Hàn.'
    },
    tom: ['V-아/어 봐도 돼요?', '입다/신다/쓰다', 'Cỡ, màu', 'Đổi trả'], nguphap: 'V-아/어 봐도 돼요?; V-아/어 주세요; 안 + V', phatam: '색깔 [색깔], 작아요 [자가요]',
    loi: ['Dùng 입다 cho giày', 'Nhầm 교환 và 환불'], btvn: ['Mô tả 3 món đồ em đang mặc', 'Tập xin thử áo, giày', 'Đóng vai đổi hàng']
  };

  /* ================= NGÀY 25 ================= */
  const d25 = {
    n: 25, ten: 'Khách sạn và du lịch', kinds: K,
    muc: 'Nhận phòng, hỏi giờ ăn sáng, báo hỏng đồ, hỏi chụp ảnh, mua vé tham quan.',
    hoc: `${lv()}<h4>1. Nhận / trả phòng</h4>${reads([['체크인하려고요.', 'chekeuinharyeogoyo', 'Tôi muốn nhận phòng.'], ['예약했어요. 이름은 민이에요.', 'yeyakhaesseoyo. ireumeun minieyo', 'Tôi đã đặt, tên Min.'], ['여권 보여 주세요.', 'yeogwon boyeo juseyo', 'Cho xem hộ chiếu.'], ['체크아웃은 몇 시예요?', 'chekeuauseun myeot siyeyo?', 'Mấy giờ trả phòng?']])}
      <h4>2. Dịch vụ và sự cố</h4><ul>${ex('조식은 몇 시부터예요?', 'josigeun myeot sibuteoyeyo?', 'Bữa sáng từ mấy giờ?')}${ex('에어컨이 고장 났어요.', 'eeokeoni gojang nasseoyo', 'Điều hoà bị hỏng.')}${ex('수건 좀 더 주세요.', 'sugeon jom deo juseyo', 'Cho thêm khăn tắm.')}</ul>
      <h4>3. Tham quan: V-아/어도 돼요? (… được không?)</h4><ul>${ex('여기서 사진 찍어도 돼요?', 'yeogiseo sajin jjigeodo dwaeyo?', 'Ở đây chụp ảnh được không?')}${ex('입장권 두 장 주세요.', 'ipjanggwon du jang juseyo', 'Cho 2 vé vào cửa.')}</ul>`,
    vocab: [
      w('호텔', 'hotel', 'khách sạn', '', ['호텔이 어디예요?', 'hoteri eodiyeyo?', 'Khách sạn ở đâu?']),
      w('체크인', 'chekeuin', 'nhận phòng', '', ['체크인하려고요.', 'chekeuinharyeogoyo', 'Tôi muốn nhận phòng.']),
      w('체크아웃', 'chekeuaut', 'trả phòng', '', ['체크아웃은 열한 시예요.', 'chekeuauseun yeolhan siyeyo', 'Trả phòng lúc 11 giờ.']),
      w('여권', 'yeogwon', 'hộ chiếu', '', ['여권 여기 있어요.', 'yeogwon yeogi isseoyo', 'Hộ chiếu đây ạ.']),
      w('방', 'bang', 'phòng', '', ['방이 깨끗해요.', 'bangi kkaekkeutaeyo', 'Phòng sạch sẽ.']),
      w('조식', 'josik', 'bữa sáng (khách sạn)', '', ['조식 포함이에요?', 'josik pohamieyo?', 'Có bao gồm bữa sáng không?']),
      w('에어컨', 'eeokeon', 'điều hoà', '', ['에어컨 좀 켜 주세요.', 'eeokeon jom kyeo juseyo', 'Bật điều hoà giúp tôi.']),
      w('고장 났어요', 'gojang nasseoyo', 'bị hỏng', '', ['텔레비전이 고장 났어요.', 'tellebijeoni gojang nasseoyo', 'Tivi bị hỏng.']),
      w('사진', 'sajin', 'ảnh', '', ['사진 찍어 주세요.', 'sajin jjigeo juseyo', 'Chụp ảnh giúp tôi.']),
      w('찍어요', 'jjigeoyo', 'chụp (ảnh)', 'Gốc: 찍다.', ['사진을 찍어요.', 'sajineul jjigeoyo', 'Chụp ảnh.']),
      w('입장권', 'ipjanggwon', 'vé vào cửa', '', ['입장권이 얼마예요?', 'ipjanggwoni eolmayeyo?', 'Vé vào cửa bao nhiêu?']),
      w('관광', 'gwangwang', 'tham quan, du lịch', '', ['관광하러 왔어요.', 'gwangwanghareo wasseoyo', 'Tôi đến để du lịch.'])
    ],
    qs: [
      ['mc', '“Ở đây chụp ảnh được không?” là?', '여기서 사진 찍어도 돼요?', ['여기 사진 찍어요 돼요?', '사진이 여기예요?', '여기서 사진 주세요?'], 'V-아/어도 돼요?'],
      ['mc', '“Điều hoà bị hỏng” là?', '에어컨이 고장 났어요.', ['에어컨이 없어요 고장.', '에어컨 고장 주세요.', '에어컨을 고장해요.'], '고장 났어요.'],
      ['mc', '“Cho 2 vé vào cửa” là?', '입장권 두 장 주세요.', ['입장권 이 장 주세요.', '두 입장권 개 주세요.', '입장권 둘 장 주세요.'], 'Số thuần Hàn + 장.'],
      ['mc', 'Trả phòng là?', '체크아웃', ['체크인', '조식', '예약'], 'check-out.'],
      ['hear', '조식은 몇 시부터예요?', 'Bữa sáng từ mấy giờ?', ['Bữa sáng ở đâu?', 'Có bữa sáng không?', 'Bữa sáng bao nhiêu tiền?'], '부터 = từ.'],
      ['hear', '여권 보여 주세요.', 'Cho xem hộ chiếu.', ['Cho xem thẻ phòng.', 'Cho xem vé.', 'Hộ chiếu đây ạ.'], '여권 = hộ chiếu.'],
      ['order', 'Sắp xếp: “Tôi đã đặt phòng.”', ['방을', '예약했어요.'], '방을 예약했어요.']
    ],
    hoithoai: {
      ctx: 'Em nhận phòng khách sạn ở Busan.', vai: 'Lễ tân hỏi, em trả lời và hỏi dịch vụ.', ai: '🛎️ 직원',
      luot: [
        T(['안녕하세요! 무엇을 도와 드릴까요?', 'annyeonghaseyo! mueoseul dowa deurilkkayo?', 'Xin chào! Tôi giúp gì được ạ?'], ['체크인하려고요. 예약했어요.', 'chekeuinharyeogoyo. yeyakhaesseoyo', 'Tôi muốn nhận phòng. Tôi đã đặt.', 'Nhận phòng + đã đặt.'], ['체크아웃하려고요.', 'chekeuautharyeogoyo', 'Mới đến thì nhận phòng.'], ['방이에요.', 'bangieyo', 'Chưa rõ ý.']),
        T(['여권 좀 보여 주세요.', 'yeogwon jom boyeo juseyo', 'Cho xem hộ chiếu ạ.'], ['네, 여기 있어요.', 'ne, yeogi isseoyo', 'Vâng, đây ạ.', 'Đưa giấy tờ.'], ['여권이 고장 났어요.', 'yeogwoni gojang nasseoyo', '😄'], ['여권 주세요.', 'yeogwon juseyo', 'Lễ tân đang xin em mà.']),
        T(['칠백칠 호예요. 조식은 일곱 시부터예요.', 'chilbaekchil hoyeyo. josigeun ilgop sibuteoyeyo', 'Phòng 707. Bữa sáng từ 7 giờ.'], ['감사합니다. 체크아웃은 몇 시예요?', 'gamsahamnida. chekeuauseun myeot siyeyo?', 'Cảm ơn. Mấy giờ trả phòng?', 'Hỏi thêm dịch vụ.'], ['칠 시예요?', 'chil siyeyo?', 'Giờ đọc 일곱 시.'], ['조식이 고장 났어요.', 'josigi gojang nasseoyo', 'Sai.']),
        T(['（밤에 전화）네, 프런트입니다.', '(bame jeonhwa) ne, peureonteuimnida', '(Buổi tối gọi xuống) Vâng, lễ tân nghe.'], ['칠백칠 호예요. 에어컨이 고장 났어요.', 'chilbaekchil hoyeyo. eeokeoni gojang nasseoyo', 'Phòng 707. Điều hoà bị hỏng.', 'Số phòng + sự cố.'], ['에어컨 좋아요.', 'eeokeon joayo', 'Vậy gọi làm gì?'], ['체크인하려고요.', 'chekeuinharyeogoyo', 'Đã nhận phòng rồi.'])
      ], ket: 'Em đã nhận phòng và báo sự cố bằng tiếng Hàn.'
    },
    tom: ['Nhận/trả phòng', 'Dịch vụ', 'Báo hỏng: 고장 났어요', 'V-아/어도 돼요?'], nguphap: 'V-려고요 (định làm); V-아/어도 돼요?; N부터', phatam: '입장권 [입짱꿘], 체크인',
    loi: ['Nhầm 체크인/체크아웃', 'Đếm vé bằng số Hán-Hàn'], btvn: ['Đóng vai nhận phòng', 'Báo 3 sự cố trong phòng', 'Hỏi xin chụp ảnh 3 nơi']
  };

  /* ================= NGÀY 26 ================= */
  const d26 = {
    n: 26, ten: 'Điện thoại và tin nhắn', kinds: K,
    muc: 'Nghe – gọi điện thoại, tìm người, nhắn lại; nhắn tin ngắn.',
    hoc: `${lv()}<h4>1. Gọi điện</h4>${reads([['여보세요?', 'yeoboseyo?', 'A lô?'], ['민수 씨 좀 바꿔 주세요.', 'minsu ssi jom bakkwo juseyo', 'Cho tôi gặp anh Min-su.'], ['잠시만요.', 'jamsimanyo', 'Xin chờ chút.'], ['지금 통화 중이에요.', 'jigeum tonghwa jungieyo', 'Đang bận máy.'], ['나중에 다시 전화할게요.', 'najunge dasi jeonhwahalgeyo', 'Lát nữa tôi gọi lại.']])}
      <h4>2. Tin nhắn</h4><ul>${ex('문자 보낼게요.', 'munja bonaelgeyo', 'Tôi sẽ nhắn tin.')}${ex('확인했어요.', 'hwaginhaesseoyo', 'Đã xem / đã xác nhận.')}${ex('답장 기다릴게요.', 'dapjang gidarilgeyo', 'Tôi chờ trả lời nhé.')}${ex('이따가 봐요!', 'ittaga bwayo', 'Lát gặp nhé!')}</ul>
      ${tip('💡 Tin nhắn thân mật hay dùng: ㅋㅋ (haha), ㅇㅇ (ừ ừ), ㄱㅅ (cảm ơn – viết tắt 감사). Với cấp trên vẫn nên viết đầy đủ.')}`,
    vocab: [
      w('여보세요', 'yeoboseyo', 'a lô', '', ['여보세요? 누구세요?', 'yeoboseyo? nuguseyo?', 'A lô? Ai đấy ạ?']),
      w('전화', 'jeonhwa', 'điện thoại; cuộc gọi', '', ['전화할게요.', 'jeonhwahalgeyo', 'Tôi sẽ gọi điện.']),
      w('바꿔 주세요', 'bakkwo juseyo', 'chuyển máy cho … (gặp ai)', '', ['김 과장님 좀 바꿔 주세요.', 'gim gwajangnim jom bakkwo juseyo', 'Cho tôi gặp trưởng phòng Kim.']),
      w('잠시만요', 'jamsimanyo', 'xin chờ chút', '', ['잠시만요, 바꿔 드릴게요.', 'jamsimanyo, bakkwo deurilgeyo', 'Chờ chút, tôi chuyển máy.']),
      w('문자', 'munja', 'tin nhắn SMS', '', ['문자 보냈어요.', 'munja bonaesseoyo', 'Đã gửi tin nhắn.']),
      w('보내요', 'bonaeyo', 'gửi', 'Gốc: 보내다.', ['이메일 보내요.', 'imeil bonaeyo', 'Gửi email.']),
      w('답장', 'dapjang', 'tin trả lời', '', ['답장 주세요.', 'dapjang juseyo', 'Trả lời tôi nhé.']),
      w('통화', 'tonghwa', 'cuộc nói chuyện điện thoại', '통화 중 = đang bận máy.', ['지금 통화 중이에요.', 'jigeum tonghwa jungieyo', 'Đang bận máy.']),
      w('나중에', 'najunge', 'lát nữa, sau này', '', ['나중에 연락해요.', 'najunge yeollakaeyo', 'Liên lạc sau nhé.']),
      w('알겠습니다', 'algetseumnida', 'tôi hiểu rồi (trang trọng)', '', ['네, 알겠습니다.', 'ne, algetseumnida', 'Vâng, tôi hiểu rồi.']),
      w('확인', 'hwagin', 'kiểm tra, xác nhận', '', ['확인해 주세요.', 'hwaginhae juseyo', 'Kiểm tra giúp tôi.']),
      w('이따가', 'ittaga', 'lát nữa (trong ngày)', '', ['이따가 봐요!', 'ittaga bwayo', 'Lát gặp nhé!'])
    ],
    qs: [
      ['mc', 'Nhấc máy, người Hàn nói?', '여보세요?', ['안녕히 계세요?', '잘 먹었습니다?', '처음 뵙겠습니다?'], '여보세요 = a lô.'],
      ['mc', '“Cho tôi gặp anh Min-su” là?', '민수 씨 좀 바꿔 주세요.', ['민수 씨 좀 보내 주세요.', '민수 씨예요?', '민수 씨 통화해요.'], '바꿔 주세요.'],
      ['mc', '“Lát nữa tôi gọi lại” là?', '나중에 다시 전화할게요.', ['어제 전화했어요.', '전화가 없어요.', '다시 문자예요.'], '다시 = lại.'],
      ['mc', '통화 중 nghĩa là?', 'đang bận máy', ['đang họp', 'tắt máy', 'không có sóng'], 'tonghwa jung.'],
      ['hear', '잠시만요.', 'Xin chờ chút.', ['Xin lỗi.', 'Tôi hiểu rồi.', 'Lát gặp nhé.'], '잠시만요.'],
      ['hear', '네, 알겠습니다.', 'Vâng, tôi hiểu rồi.', ['Vâng, cảm ơn.', 'Vâng, chờ chút.', 'Vâng, tôi đang bận.'], '알겠습니다.'],
      ['order', 'Sắp xếp: “Tôi sẽ nhắn tin.”', ['문자', '보낼게요.'], '문자 보낼게요.']
    ],
    hoithoai: {
      ctx: 'Em gọi điện tới công ty đối tác ở Seoul để gặp trưởng phòng Kim.', vai: 'Nhân viên nghe máy, em xử lý cuộc gọi.', ai: '☎️ 직원',
      luot: [
        T(['여보세요? 한빛전자입니다.', 'yeoboseyo? hanbitjeonjaimnida', 'A lô? Công ty điện tử Hanbit xin nghe.'], ['안녕하세요? 김 과장님 좀 바꿔 주세요.', 'annyeonghaseyo? gim gwajangnim jom bakkwo juseyo', 'Xin chào. Cho tôi gặp trưởng phòng Kim.', 'Chào + xin gặp người.'], ['김 과장님이에요?', 'gim gwajangnimieyo?', 'Không rõ ý.'], ['여보세요?', 'yeoboseyo?', 'Đã nghe máy rồi.']),
        T(['실례지만, 누구세요?', 'sillyejiman, nuguseyo?', 'Xin lỗi, ai gọi đấy ạ?'], ['베트남 PLT 회사의 민입니다.', 'Beteunam PLT hoesaui minimnida', 'Tôi là Min ở công ty PLT Việt Nam.', 'Tên công ty + 의 + tên mình.'], ['누구세요?', 'nuguseyo?', 'Đang được hỏi.'], ['저는 김 과장님이에요.', 'jeoneun gim gwajangnimieyo', 'Sai.']),
        T(['잠시만요… 죄송하지만 지금 통화 중이에요.', 'jamsimanyo… joesonghajiman jigeum tonghwa jungieyo', 'Chờ chút… Xin lỗi, anh ấy đang bận máy.'], ['괜찮아요. 나중에 다시 전화할게요.', 'gwaenchanayo. najunge dasi jeonhwahalgeyo', 'Không sao. Lát tôi gọi lại.', 'Lịch sự.'], ['통화 주세요.', 'tonghwa juseyo', 'Câu không tự nhiên.'], ['어제 전화했어요.', 'eoje jeonhwahaesseoyo', 'Lạc đề.']),
        T(['네, 알겠습니다. 문자도 남겨 주세요.', 'ne, algetseumnida. munjado namgyeo juseyo', 'Vâng. Anh để lại tin nhắn nhé.'], ['네, 문자 보낼게요. 감사합니다!', 'ne, munja bonaelgeyo. gamsahamnida', 'Vâng, tôi sẽ nhắn tin. Cảm ơn!', 'Kết thúc cuộc gọi.'], ['답장이에요.', 'dapjangieyo', 'Sai.'], ['이따가 먹어요.', 'ittaga meogeoyo', 'Lạc đề.'])
      ], ket: 'Em đã gọi điện tìm người và để lại lời nhắn.'
    },
    tom: ['Câu gọi/nghe điện thoại', 'Tìm người: 바꿔 주세요', 'Nhắn lại', 'Tin nhắn'], nguphap: 'N 좀 바꿔 주세요; V-ㄹ게요; N 중이에요', phatam: '알겠습니다 [알겓씀니다]',
    loi: ['Quên tự giới thiệu khi gọi', 'Dùng ㅋㅋ với cấp trên'], btvn: ['Đóng vai gọi điện tìm người', 'Viết 5 tin nhắn Kakao ngắn', 'Ghi âm lời chào nghe máy']
  };

  /* ================= NGÀY 27 ================= */
  const d27 = {
    n: 27, ten: 'Tiếng Hàn nơi công sở', kinds: K,
    muc: 'Họp, gửi tài liệu – báo giá, nói lịch trình, xử lý vấn đề, câu chào cuối ngày ở công ty.',
    hoc: `${lv()}<h4>1. Câu thường dùng ở công ty</h4>${reads([['회의가 몇 시예요?', 'hoeuiga myeot siyeyo?', 'Cuộc họp mấy giờ?'], ['자료를 보내 드릴게요.', 'jaryoreul bonae deurilgeyo', 'Tôi sẽ gửi tài liệu cho anh/chị.'], ['견적서를 확인해 주세요.', 'gyeonjeokseoreul hwaginhae juseyo', 'Vui lòng kiểm tra báo giá.'], ['문제가 있어요.', 'munjega isseoyo', 'Có vấn đề.'], ['바로 해결하겠습니다.', 'baro haegyeolhagetseumnida', 'Tôi sẽ giải quyết ngay.']])}
      <h4>2. Kính ngữ cơ bản: -(으)세요, -겠습니다</h4><p>Với cấp trên, khách hàng: dùng <b>-(으)세요</b> (mời, đề nghị) và <b>-겠습니다</b> (tôi sẽ – rất lịch sự). ${sp('확인해 주세요|해결하겠습니다')}</p>
      <h4>3. Văn hoá công sở</h4><ul>${ex('수고하셨습니다!', 'sugohasyeotseumnida', 'Anh/chị vất vả rồi! (chào khi tan làm, kết thúc công việc)')}${ex('먼저 가 보겠습니다.', 'meonjeo ga bogetseumnida', 'Tôi xin phép về trước.')}</ul>${tip('💡 Gọi đồng nghiệp bằng <b>chức danh + 님</b> (부장님, 과장님, 대리님) hoặc <b>tên + 씨</b> với người ngang hàng; không gọi trống tên.')}`,
    vocab: [
      w('회의', 'hoeui', 'cuộc họp', 'Đọc [회이].', ['회의가 있어요.', 'hoeuiga isseoyo', 'Có cuộc họp.']),
      w('고객', 'gogaek', 'khách hàng', '', ['고객을 만나요.', 'gogaegeul mannayo', 'Gặp khách hàng.']),
      w('계약', 'gyeyak', 'hợp đồng', '', ['계약을 했어요.', 'gyeyageul haesseoyo', 'Đã ký hợp đồng.']),
      w('견적서', 'gyeonjeokseo', 'bảng báo giá', '', ['견적서 보내 주세요.', 'gyeonjeokseo bonae juseyo', 'Gửi báo giá cho tôi.']),
      w('이메일', 'imeil', 'email', '', ['이메일 확인해 주세요.', 'imeil hwaginhae juseyo', 'Kiểm tra email giúp tôi.']),
      w('자료', 'jaryo', 'tài liệu', '', ['자료를 준비했어요.', 'jaryoreul junbihaesseoyo', 'Đã chuẩn bị tài liệu.']),
      w('일정', 'iljeong', 'lịch trình', '', ['일정이 어떻게 돼요?', 'iljeongi eotteoke dwaeyo?', 'Lịch trình thế nào?']),
      w('문제', 'munje', 'vấn đề', '', ['문제없어요!', 'munjeeopseoyo', 'Không vấn đề!']),
      w('해결', 'haegyeol', 'giải quyết', '', ['바로 해결할게요.', 'baro haegyeolhalgeyo', 'Tôi giải quyết ngay.']),
      w('담당', 'damdang', 'phụ trách', '', ['제가 담당이에요.', 'jega damdangieyo', 'Tôi phụ trách.']),
      w('수고하셨습니다', 'sugohasyeotseumnida', 'anh/chị vất vả rồi', 'Chào cuối ngày, kết thúc việc.', ['오늘도 수고하셨습니다!', 'oneuldo sugohasyeotseumnida', 'Hôm nay cũng vất vả rồi!']),
      w('협력', 'hyeomnyeok', 'hợp tác', 'Đọc [혐녁].', ['협력해서 기뻐요.', 'hyeomnyeokaeseo gippeoyo', 'Rất vui được hợp tác.'])
    ],
    qs: [
      ['mc', 'Kết thúc ngày làm việc, chào đồng nghiệp là?', '수고하셨습니다!', ['잘 먹었습니다!', '처음 뵙겠습니다!', '안녕하세요!'], 'sugohasyeotseumnida.'],
      ['mc', '“Tôi sẽ gửi tài liệu cho anh” (lịch sự) là?', '자료를 보내 드릴게요.', ['자료를 보내 주세요.', '자료가 없어요.', '자료를 받았어요.'], '-아/어 드릴게요 = làm cho (kính).'],
      ['mc', '“Không vấn đề!” là?', '문제없어요!', ['문제있어요!', '문제가 해결이에요!', '문제 주세요!'], 'munjeeopseoyo.'],
      ['mc', 'Gọi trưởng phòng Kim lịch sự là?', '김 부장님', ['김 씨야', '부장 김', '김님'], 'Họ + chức danh + 님.'],
      ['hear', '바로 해결하겠습니다.', 'Tôi sẽ giải quyết ngay.', ['Đã giải quyết xong.', 'Có vấn đề.', 'Không giải quyết được.'], '해결 = giải quyết.'],
      ['hear', '회의가 몇 시예요?', 'Cuộc họp mấy giờ?', ['Cuộc họp ở đâu?', 'Có cuộc họp không?', 'Cuộc họp bao lâu?'], '회의 = cuộc họp.'],
      ['order', 'Sắp xếp: “Vui lòng kiểm tra báo giá.”', ['견적서를', '확인해', '주세요.'], '견적서를 확인해 주세요.']
    ],
    hoithoai: {
      ctx: 'Em (công ty thiết bị IT Việt Nam) họp với giám đốc Choi (최 사장님) về đơn hàng máy tính.', vai: 'Giám đốc Choi hỏi, em trả lời và chốt hợp tác.', ai: '👨‍💼 최 사장님',
      luot: [
        T(['안녕하세요. 회사 소개 좀 해 주세요.', 'annyeonghaseyo. hoesa sogae jom hae juseyo', 'Xin chào. Anh giới thiệu về công ty nhé.'], ['저희 회사는 컴퓨터와 IT 장비를 팔아요.', 'jeohui hoesaneun keompyuteowa aiti jangbireul parayo', 'Công ty chúng tôi bán máy tính và thiết bị IT.', '저희 = chúng tôi (khiêm tốn).'], ['저는 컴퓨터예요.', 'jeoneun keompyuteoyeyo', '"Tôi là máy tính" 😄'], ['회사가 없어요.', 'hoesaga eopseoyo', 'Sai.']),
        T(['노트북 오십 대가 필요해요. 견적서 보내 주세요.', 'noteubuk osip daega piryohaeyo. gyeonjeokseo bonae juseyo', 'Chúng tôi cần 50 laptop. Gửi báo giá nhé.'], ['네, 오늘 이메일로 보내 드리겠습니다.', 'ne, oneul imeillo bonae deurigetseumnida', 'Vâng, hôm nay tôi sẽ gửi qua email.', 'Kính ngữ + thời hạn cụ thể.'], ['오십 개 주세요.', 'osip gae juseyo', 'Em là bên bán, không phải người mua.'], ['견적서예요.', 'gyeonjeokseoyeyo', 'Câu cụt.']),
        T(['문제가 생기면 어떻게 해요?', 'munjega saenggimyeon eotteoke haeyo?', 'Nếu có vấn đề thì sao?'], ['저희 엔지니어가 바로 해결하겠습니다.', 'jeohui enjinieoga baro haegyeolhagetseumnida', 'Kỹ sư của chúng tôi sẽ giải quyết ngay.', 'Cam kết hỗ trợ.'], ['문제없어요, 몰라요.', 'munjeeopseoyo, mollayo', 'Không chuyên nghiệp.'], ['문제가 있어요.', 'munjega isseoyo', 'Ngược ý.']),
        T(['좋아요. 계약합시다!', 'joayo. gyeyakapsida', 'Tốt. Ký hợp đồng thôi!'], ['감사합니다, 사장님! 잘 부탁드립니다.', 'gamsahamnida, sajangnim! jal butakdeurimnida', 'Cảm ơn giám đốc! Mong được hợp tác lâu dài.', 'Kết thúc chuyên nghiệp.'], ['수고했어.', 'sugohaesseo', 'Quá thân mật với giám đốc.'], ['계약이 없어요.', 'gyeyagi eopseoyo', 'Sai.'])
      ], ket: 'Em đã giới thiệu công ty, nhận yêu cầu báo giá và chốt hợp đồng bằng tiếng Hàn.'
    },
    tom: ['Câu công sở', 'Kính ngữ -(으)세요, -겠습니다, -아/어 드릴게요', 'Văn hoá xưng hô công ty'], nguphap: 'V-겠습니다; V-아/어 드릴게요; chức danh + 님', phatam: '회의 [회이], 협력 [혐녁]',
    loi: ['Gọi trống tên cấp trên', 'Dùng đuôi thân mật với khách hàng'], btvn: ['Viết đoạn 4 câu giới thiệu công ty', 'Học 5 chức danh: 사장님, 부장님, 과장님, 대리님, 팀장님', 'Tập câu 수고하셨습니다 khi kết thúc ngày làm']
  };

  /* ================= NGÀY 28 ================= */
  const d28 = {
    n: 28, ten: 'Nghe hiểu và phản xạ', tong: 1, kt: { n: 20, min: 20 }, kinds: ['listen', 'listenWord', 'listen', 'meaning', 'pinyin'],
    muc: 'Câu “cứu nguy” khi chưa nghe rõ; nghe từ khoá; phản xạ trả lời trong 3 giây.',
    hoc: `${lv('Hôm nay phần Luyện tập và Kiểm tra chủ yếu là <b>nghe</b>.')}<h4>1. Câu cứu nguy</h4>${reads([['다시 한번 말해 주세요.', 'dasi hanbeon malhae juseyo', 'Nói lại một lần nữa giúp tôi.'], ['천천히 말해 주세요.', 'cheoncheonhi malhae juseyo', 'Nói chậm giúp tôi.'], ['무슨 뜻이에요?', 'museun tteusieyo?', 'Nghĩa là gì?'], ['잘 모르겠어요.', 'jal moreugesseoyo', 'Tôi không rõ lắm.'], ['아, 이해했어요!', 'a, ihaehaesseoyo', 'À, tôi hiểu rồi!']])}
      <h4>2. Bí quyết nghe</h4><ul><li>Nghe <b>đuôi câu</b>: -요? (hỏi), -았/었어요 (quá khứ), -ㄹ게요 (sẽ).</li><li>Nghe <b>từ hỏi</b>: 뭐, 어디, 언제, 누구, 얼마, 몇.</li><li>Động từ luôn ở <b>cuối câu</b>: nghe trọn câu rồi mới hiểu ý chính.</li></ul>
      <h4>3. Phản xạ 3 giây</h4>${reads([['이름이 뭐예요?', '→ 저는 …이에요/예요', ''], ['어디에서 왔어요?', '→ 베트남에서 왔어요', ''], ['무슨 일을 하세요?', '→ …에서 일해요', ''], ['어제 뭐 했어요?', '→ …았/었어요', ''], ['밥 먹었어요?', '→ 네, 먹었어요 / 아직이요', '']])}`,
    vocab: [
      w('천천히', 'cheoncheonhi', 'chậm rãi', '', ['천천히 말해 주세요.', 'cheoncheonhi malhae juseyo', 'Nói chậm giúp tôi.']),
      w('다시', 'dasi', 'lại, lần nữa', '', ['다시 해 주세요.', 'dasi hae juseyo', 'Làm lại giúp tôi.']),
      w('한번', 'hanbeon', 'một lần', '', ['한번 더요.', 'hanbeon deoyo', 'Thêm một lần nữa.']),
      w('뜻', 'tteut', 'ý nghĩa', '', ['이 단어 뜻이 뭐예요?', 'i daneo tteusi mwoyeyo?', 'Từ này nghĩa là gì?']),
      w('알아요', 'arayo', 'biết', '', ['그 사람 알아요.', 'geu saram arayo', 'Tôi biết người đó.']),
      w('몰라요', 'mollayo', 'không biết', '', ['잘 몰라요.', 'jal mollayo', 'Tôi không rõ lắm.']),
      w('이해했어요', 'ihaehaesseoyo', 'đã hiểu', '', ['네, 이해했어요.', 'ne, ihaehaesseoyo', 'Vâng, tôi hiểu rồi.']),
      w('크게', 'keuge', 'to (âm lượng)', '', ['좀 크게 말해 주세요.', 'jom keuge malhae juseyo', 'Nói to hơn giúp tôi.'])
    ],
    qs: [
      ['hear', '다시 한번 말해 주세요.', 'Nói lại một lần nữa giúp tôi.', ['Nói chậm giúp tôi.', 'Nói to hơn giúp tôi.', 'Tôi hiểu rồi.'], '다시 한번.'],
      ['hear', '내일 오후 두 시에 회의가 있어요.', 'Chiều mai 2 giờ có họp.', ['Sáng mai 2 giờ có họp.', 'Chiều nay 2 giờ có họp.', 'Chiều mai họp 2 tiếng.'], '내일 오후 두 시.'],
      ['hear', '어제 친구하고 영화를 봤어요.', 'Hôm qua tôi xem phim với bạn.', ['Mai tôi xem phim với bạn.', 'Hôm qua tôi đọc sách với bạn.', 'Hôm qua bạn tôi xem phim một mình.'], 'Quá khứ 봤어요.'],
      ['hear', '이거 만 오천 원이에요.', '15.000 won', ['5.000 won', '50.000 won', '1.500 won'], '만 오천 = 15.000.'],
      ['hear', '화장실은 은행 옆에 있어요.', 'Nhà vệ sinh ở cạnh ngân hàng.', ['Nhà vệ sinh ở sau ngân hàng.', 'Ngân hàng ở cạnh nhà vệ sinh.', 'Nhà vệ sinh trong ngân hàng.'], '옆 = cạnh.'],
      ['mc', 'Không hiểu một từ, em hỏi?', '무슨 뜻이에요?', ['어디예요?', '얼마예요?', '몇 시예요?'], 'Hỏi nghĩa.'],
      ['mc', '“Tôi không biết” là?', '몰라요.', ['알아요.', '이해했어요.', '괜찮아요.'], 'mollayo.']
    ],
    hoithoai: {
      ctx: 'Luyện phản xạ: một người Hàn hỏi liên tục, nói khá nhanh. Tắt "Hiện nghĩa tiếng Việt".', vai: 'Nghe – hiểu – chọn câu trả lời thật nhanh.', ai: '🗣️ 한국 친구',
      luot: [
        T(['밥 먹었어요?', 'bap meogeosseoyo?', 'Ăn cơm chưa? (lời chào)'], ['네, 먹었어요. 민 씨는요?', 'ne, meogeosseoyo. min ssineunyo?', 'Rồi. Còn bạn?', 'Lời chào kiểu Hàn – trả lời và hỏi lại.'], ['밥이에요.', 'babieyo', 'Sai.'], ['아니요, 먹어요.', 'aniyo, meogeoyo', 'Câu rối.']),
        T(['한국에 언제 왔어요?', 'Hanguge eonje wasseoyo?', 'Bạn đến Hàn khi nào?'], ['지난달에 왔어요.', 'jinandare wasseoyo', 'Tôi đến tháng trước.', '지난달 = tháng trước.'], ['내일 와요.', 'naeil wayo', 'Đã ở Hàn rồi mà.'], ['한국이에요.', 'Hangugieyo', 'Sai.']),
        T(['주말에 뭐 할 거예요?', 'jumare mwo hal geoyeyo?', 'Cuối tuần bạn định làm gì?'], ['죄송해요, 천천히 말해 주세요.', 'joesonghaeyo, cheoncheonhi malhae juseyo', 'Xin lỗi, nói chậm giúp tôi.', 'Câu cứu nguy khi chưa nghe kịp.'], ['몰라요.', 'mollayo', 'Hơi cộc lốc.'], ['주말이 없어요.', 'jumari eopseoyo', 'Sai.']),
        T(['주말에 뭐 할 거예요? 저하고 같이 등산 갈래요?', 'jumare mwo hal geoyeyo? jeohago gachi deungsan gallaeyo?', 'Cuối tuần định làm gì? Đi leo núi với tôi không?'], ['좋아요! 같이 가요.', 'joayo! gachi gayo', 'Được! Đi cùng nhé.', 'Nhận lời.'], ['등산을 몰라요.', 'deungsaneul mollayo', 'Không tự nhiên.'], ['이해했어요.', 'ihaehaesseoyo', 'Chưa trả lời.'])
      ], ket: 'Em đã phản xạ với tiếng Hàn nói nhanh và dùng câu cứu nguy đúng lúc.'
    },
    tom: ['Câu cứu nguy', 'Nghe đuôi câu và từ hỏi', 'Phản xạ 3 giây'], nguphap: 'V-아/어 주세요 (nhờ); 알아요/몰라요', phatam: 'Nghe tốc độ tự nhiên',
    loi: ['Im lặng khi chưa hiểu', 'Đoán ý trước khi nghe hết câu (động từ ở cuối)'], btvn: ['Học thuộc 5 câu cứu nguy', 'Nghe 1 video tiếng Hàn có phụ đề, ghi 5 từ đã học', 'Luyện phản xạ 5 câu hỏi thường gặp']
  };

  /* ================= NGÀY 29 ================= */
  const d29 = {
    n: 29, ten: 'Mô phỏng tình huống liên tục', vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Ghép kỹ năng thành một chuyến đi trọn vẹn: sân bay → taxi → khách sạn → nhà hàng → mua sắm → điện thoại.',
    hoc: `${lv('Hôm nay không có từ mới.')}<h4>Kịch bản 1 ngày ở Seoul</h4>${tbl(['Chặng', 'Câu chính'], ['<tr><td>🚕 Taxi</td><td>기사님, 호텔로 가 주세요. 얼마나 걸려요?</td></tr>', '<tr><td>🏨 Khách sạn</td><td>체크인하려고요. 조식은 몇 시부터예요?</td></tr>', '<tr><td>🧭 Hỏi đường</td><td>지하철역이 어디예요? 똑바로 가세요.</td></tr>', '<tr><td>🍜 Nhà hàng</td><td>두 명이에요. 덜 맵게 해 주세요. 계산해 주세요.</td></tr>', '<tr><td>🛍️ Mua sắm</td><td>입어 봐도 돼요? 좀 깎아 주세요.</td></tr>', '<tr><td>☎️ Điện thoại</td><td>여보세요? … 씨 좀 바꿔 주세요.</td></tr>'])}`,
    qs: [['mc', 'Ở nhà hàng, em muốn ít cay hơn, nói?', '덜 맵게 해 주세요.', ['더 맵게 해 주세요.', '맵지 않아요?', '매워요 주세요.'], '덜 = ít hơn.']],
    hoithoai: {
      ctx: 'Một ngày ở Seoul – mỗi lượt là một nơi khác nhau.', vai: 'Em là khách du lịch kiêm đi công tác.', ai: '🎭 여러 사람',
      luot: [
        T(['（기사님）어디로 갈까요?', '(gisanim) eodiro galkkayo?', '(Tài xế) Đi đâu ạ?'], ['롯데호텔로 가 주세요.', 'Rotte hotello ga juseyo', 'Cho tôi đến khách sạn Lotte.', 'N(으)로 가 주세요.'], ['호텔을 타요.', 'hotereul tayo', 'Sai.'], ['호텔 얼마예요?', 'hotel eolmayeyo?', 'Chưa nói điểm đến.']),
        T(['（직원）예약하셨어요?', '(jigwon) yeyakasyeosseoyo?', '(Lễ tân) Quý khách đã đặt chưa?'], ['네, 예약했어요. 조식 포함이에요?', 'ne, yeyakhaesseoyo. josik pohamieyo?', 'Rồi. Có bao gồm bữa sáng không?', 'Hai ý một lượt.'], ['네, 예약해요.', 'ne, yeyakaeyo', 'Đã đặt → quá khứ.'], ['아니요, 예약했어요.', 'aniyo, yeyakhaesseoyo', 'Mâu thuẫn.']),
        T(['（행인）뭐 찾으세요?', '(haengin) mwo chajeuseyo?', '(Người đi đường) Tìm gì ạ?'], ['지하철역이 어디예요?', 'jihacheollyeogi eodiyeyo?', 'Ga tàu điện ở đâu?', 'Hỏi đường.'], ['지하철을 주세요.', 'jihacheoreul juseyo', 'Sai.'], ['역이에요.', 'yeogieyo', 'Câu cụt.']),
        T(['（직원）몇 분이세요?', '(jigwon) myeot buniseyo?', '(Nhân viên quán) Mấy vị ạ?'], ['한 명이에요. 비빔밥 하나 주세요.', 'han myeongieyo. bibimbap hana juseyo', '1 người. Cho một bibimbap.', 'Số người + gọi món.'], ['일 명이에요.', 'il myeongieyo', 'Đếm người dùng 한 명.'], ['한 분이에요.', 'han bunieyo', '분 không dùng cho mình.']),
        T(['（점원）이 옷 어때요?', '(jeomwon) i ot eottaeyo?', '(Nhân viên) Bộ đồ này thế nào?'], ['예뻐요! 입어 봐도 돼요?', 'yeppeoyo! ibeo bwado dwaeyo?', 'Đẹp! Mặc thử được không?', 'Khen + xin thử.'], ['신어 봐도 돼요?', 'sineo bwado dwaeyo?', 'Quần áo dùng 입다.'], ['환불해 주세요.', 'hwanbulhae juseyo', 'Chưa mua.']),
        T(['（전화）여보세요?', '(jeonhwa) yeoboseyo?', '(Điện thoại) A lô?'], ['여보세요? 민입니다. 김 과장님 좀 바꿔 주세요.', 'yeoboseyo? minimnida. gim gwajangnim jom bakkwo juseyo', 'A lô? Tôi là Min. Cho gặp trưởng phòng Kim.', 'Tự giới thiệu + tìm người.'], ['누구세요?', 'nuguseyo?', 'Em là người gọi.'], ['잠시만요.', 'jamsimanyo', 'Câu của người nghe máy.'])
      ], ket: '🎉 Em đã đi trọn một ngày ở Seoul chỉ bằng tiếng Hàn!'
    },
    tom: ['Mô phỏng liên tục 6 chặng'], nguphap: 'Ôn tổng hợp', phatam: 'Nói liền mạch',
    loi: ['Xem lại các lượt chọn sai'], btvn: ['Ghi âm toàn bộ kịch bản, tự đóng 2 vai', 'Ôn thẻ "Từ chưa nhớ" chuẩn bị thi cuối khoá']
  };

  /* ================= NGÀY 30 ================= */
  const d30 = {
    n: 30, ten: 'Kiểm tra cuối khoá và lộ trình TOPIK', vocab: [], tong: 1, kt: { n: 30, min: 30 }, kinds: K,
    muc: 'Làm bài kiểm tra cuối khoá 30 câu, tự đánh giá 5 kỹ năng, chọn lộ trình hướng tới TOPIK.',
    hoc: `<h4>1. Bài kiểm tra cuối khoá</h4><p><b>30 câu · 30 phút</b> lấy từ toàn bộ 30 ngày. Điểm hệ 10 × 10 = điểm thang 100.</p>
      <h4>2. Tự đánh giá (thang 100)</h4>${tbl(['Kỹ năng', 'Tối đa', 'Tự kiểm tra'], ['<tr><td>Phát âm & Hangul</td><td>25</td><td>Đọc đúng âm bật hơi – căng, patchim, nối âm? (tự ghi âm)</td></tr>', '<tr><td>Từ vựng</td><td>20</td><td>Nhớ bao nhiêu % thẻ từ?</td></tr>', '<tr><td>Ngữ pháp</td><td>20</td><td>은/는, 이/가, 을/를, 에/에서, -아요/어요, quá khứ?</td></tr>', '<tr><td>Nghe hiểu</td><td>15</td><td>Hiểu câu tốc độ bình thường?</td></tr>', '<tr><td>Giao tiếp</td><td>20</td><td>Tự xử lý được taxi, quán ăn, mua sắm, công việc?</td></tr>'])}
      <h4>3. Em đang ở đâu?</h4><p>Hoàn thành cấp 1, em có khoảng <b>300 từ</b>, đọc – viết Hangul thành thạo và các mẫu câu cơ bản, đủ nền để ôn thi <b>TOPIK I cấp 1</b>.</p>
      <h4>4. Lộ trình tiếp theo</h4>${tbl(['Mục tiêu', 'Gợi ý'], ['<tr><td>📜 TOPIK I</td><td>Gồm 2 phần nghe + đọc (tổng 200 điểm); cấp 1 từ 80 điểm, cấp 2 từ 140 điểm. Làm đề cũ trên trang chính thức TOPIK.</td></tr>', '<tr><td>💬 Lên Cấp 2 (sơ cấp)</td><td>Học kính ngữ, tương lai -(으)ㄹ 거예요, nối câu -고, -아서/어서, -지만.</td></tr>', '<tr><td>🎧 Nghe nhiều</td><td>Mỗi ngày 15 phút phim, video tiếng Hàn có phụ đề.</td></tr>', '<tr><td>💼 Tiếng Hàn công việc</td><td>Học thêm kính ngữ công sở, viết email, từ vựng ngành của em.</td></tr>'])}
      ${tip('🧾 Làm bài xong, vào <a href="#/tieng-han/tien-do">Tiến độ</a> → Sao chép tóm tắt, dán cho gia sư AI để được tư vấn lộ trình riêng.')}`,
    qs: [['mc', '저는 은행 ___ 일해요.', '에서', ['에', '을', '가'], 'Nơi làm hành động.'], ['mc', '어제 영화를 ___.', '봤어요', ['봐요', '볼게요', '보다'], 'Quá khứ.'], ['mc', '세 시 = ?', '3 giờ', ['3 tuổi', '3 phút', '3 người'], '시 = giờ.']],
    hoithoai: {
      ctx: 'Phần thi nói cuối khoá: giám khảo hỏi 5 câu.', vai: 'Trả lời đầy đủ, đúng ngữ pháp.', ai: '👩‍🏫 시험관',
      luot: [
        T(['자기소개를 해 주세요.', 'jagisogaereul hae juseyo', 'Hãy tự giới thiệu.'], ['저는 민입니다. 베트남 사람이고 은행에서 일해요.', 'jeoneun minimnida. Beteunam saramigo eunhaengeseo ilhaeyo', 'Tôi là Min. Người Việt Nam và làm ở ngân hàng.', '-이고 = và (nối câu).'], ['저는 민이 은행이에요.', 'jeoneun mini eunhaengieyo', 'Sai.'], ['자기소개예요.', 'jagisogaeyeyo', 'Chưa trả lời.']),
        T(['가족이 몇 명이에요?', 'gajogi myeot myeongieyo?', 'Gia đình em có mấy người?'], ['네 명이에요. 아내하고 아들, 딸이 있어요.', 'ne myeongieyo. anaehago adeul, ttari isseoyo', '4 người. Có vợ, con trai và con gái.', 'Chuẩn.'], ['사 명이에요.', 'sa myeongieyo', 'Đếm người dùng thuần Hàn.'], ['가족이 없어요 네.', 'gajogi eopseoyo ne', 'Sai.']),
        T(['어제 뭐 했어요?', 'eoje mwo haesseoyo?', 'Hôm qua em làm gì?'], ['회사에서 일하고 저녁에 운동했어요.', 'hoesaeseo ilhago jeonyeoge undonghaesseoyo', 'Làm việc ở công ty rồi tối tập thể dục.', 'Quá khứ + nối câu -고.'], ['회사에 일해요.', 'hoesae ilhaeyo', 'Sai trợ từ và sai thì.'], ['어제예요.', 'eojeyeyo', 'Câu cụt.']),
        T(['취미가 뭐예요?', 'chwimiga mwoyeyo?', 'Sở thích của em là gì?'], ['여행을 좋아해요. 한국에 다시 가고 싶어요.', 'yeohaengeul joahaeyo. Hanguge dasi gago sipeoyo', 'Tôi thích du lịch. Tôi muốn sang Hàn lần nữa.', '-고 싶어요 = muốn.'], ['여행를 좋아해요.', 'yeohaengreul joahaeyo', 'Patchim → 을.'], ['취미예요.', 'chwimiyeyo', 'Chưa trả lời.']),
        T(['앞으로 어떻게 공부할 거예요?', 'apeuro eotteoke gongbuhal geoyeyo?', 'Sắp tới em sẽ học thế nào?'], ['매일 한국어를 공부해서 TOPIK 시험을 볼 거예요.', 'maeil hangugeoreul gongbuhaeseo TOPIK siheomeul bol geoyeyo', 'Tôi sẽ học tiếng Hàn mỗi ngày rồi thi TOPIK.', '-(으)ㄹ 거예요 = sẽ. Chúc mừng em hoàn thành khoá học!'], ['TOPIK이에요.', 'TOPIgieyo', 'Câu cụt.'], ['공부했어요 내일.', 'gongbuhaesseoyo naeil', 'Sai thì.'])
      ], ket: '🏆 Chúc mừng em đã hoàn thành Tiếng Hàn Cấp 1!'
    },
    tom: ['Kiểm tra cuối khoá 30 câu', 'Tự đánh giá 5 kỹ năng', 'Lộ trình TOPIK'], nguphap: 'Tổng ôn', phatam: 'Tổng ôn',
    loi: ['Xem lại các câu sai'], btvn: ['Sao chép tóm tắt tiến độ gửi gia sư AI', 'Làm thử 1 đề TOPIK I cũ', 'Duy trì 15 phút tiếng Hàn mỗi ngày']
  };

  window.PLT_KO.days.push(d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30);
})();

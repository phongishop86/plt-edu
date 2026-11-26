/* PLT-Edu · Tiếng Hàn – Cấp 2 (TOPIK I · cấp 2): Ngày 15–30 */
(function () {
  'use strict';
  const Z = window.PLT_KO2; if (!Z) return;
  const { w, T, tbl, tip, exs, K } = Z.H;
  const plan = Z.plan;

  const d15 = {
    n: 15, ten: plan[14].ten, kinds: K,
    muc: 'Gửi bưu kiện, hỏi phí, thời gian giao; nhận hàng chuyển phát (택배).',
    hoc: `${tbl(['Mẫu câu', 'Nghĩa'], [['이 소포를 베트남으로 보내고 싶어요.', 'Tôi muốn gửi bưu kiện này về VN.'], ['배송비가 얼마예요?', 'Phí ship bao nhiêu?'], ['며칠 걸려요?', 'Mất mấy ngày?'], ['택배가 왔어요.', 'Hàng chuyển phát đến rồi.'], ['경비실에 맡겨 주세요.', 'Gửi giúp ở phòng bảo vệ.']])}`,
    vocab: [
      w('우체국', 'ucheguk', 'bưu điện', '', ['우체국이 어디예요?', 'uchegugi eodiyeyo?', 'Bưu điện ở đâu?']),
      w('소포', 'sopo', 'bưu kiện', '', ['소포를 보내요.', 'soporeul bonaeyo', 'Gửi bưu kiện.']),
      w('택배', 'taekbae', 'chuyển phát', '', ['택배가 왔어요.', 'taekbaega wasseoyo', 'Hàng đến rồi.']),
      w('배송비', 'baesongbi', 'phí vận chuyển', '', ['배송비가 비싸요.', 'baesongbiga bissayo', 'Phí ship đắt.']),
      w('걸리다', 'geollida', 'mất (thời gian)', '', ['일주일 걸려요.', 'iljuil geollyeoyo', 'Mất một tuần.']),
      w('무게', 'muge', 'trọng lượng', '', ['무게가 얼마나 돼요?', 'mugega eolmana dwaeyo?', 'Nặng bao nhiêu?']),
      w('주소', 'juso', 'địa chỉ', '', ['주소를 써 주세요.', 'jusoreul sseo juseyo', 'Viết địa chỉ giúp.']),
      w('맡기다', 'matgida', 'gửi, giao phó', '', ['경비실에 맡겨 주세요.', 'gyeongbisire matgyeo juseyo', 'Gửi ở phòng bảo vệ.']),
      w('빠르다', 'ppareuda', 'nhanh', '', ['빠른 우편으로 보내 주세요.', 'ppareun upyeoneuro bonae juseyo', 'Gửi chuyển phát nhanh.']),
      w('깨지다', 'kkaejida', 'vỡ', '', ['깨지기 쉬운 물건이에요.', 'kkaejigi swiun mulgeonieyo', 'Đồ dễ vỡ.'])
    ],
    qs: [
      ['mc', '“Mất mấy ngày?”', '며칠 걸려요?', ['며칠이에요?', '며칠 있어요?', '몇 시 걸려요?'], '걸리다.'],
      ['mc', '택배 nghĩa là?', 'chuyển phát', ['taxi', 'bưu điện', 'địa chỉ'], 'taekbae.'],
      ['mc', '빠르다 → định ngữ?', '빠른', ['빠르는', '빨른', '빠를는'], 'Tính từ + ㄴ.'],
      ['hear', '베트남까지 일주일쯤 걸려요.', 'Đến VN mất khoảng 1 tuần.', ['Mất 1 ngày.', 'Mất 1 tháng.', 'Không gửi được.'], '일주일.'],
      ['hear', '깨지기 쉬운 물건이니까 조심해 주세요.', 'Đồ dễ vỡ, xin cẩn thận.', ['Đồ rất chắc.', 'Đã vỡ.', 'Không cần cẩn thận.'], '깨지다.'],
      ['order', 'Sắp xếp: “Viết địa chỉ giúp.”', ['주소를', '써', '주세요', '.'], '주소를 써 주세요.']
    ],
    noi: [['이 소포를 베트남으로 보내고 싶어요.', 'i soporeul Beteunameuro bonaego sipeoyo – Tôi muốn gửi bưu kiện về VN.'], ['며칠 걸려요?', 'myeochil geollyeoyo? – Mất mấy ngày?'], ['경비실에 맡겨 주세요.', 'gyeongbisire matgyeo juseyo – Gửi ở phòng bảo vệ giúp.']],
    hoithoai: {
      ctx: 'Em gửi quà Tết về Việt Nam từ bưu điện Seoul.', vai: 'Nhân viên hỏi, em trả lời.', ai: '📮 직원',
      luot: [
        T(['어디로 보내세요?', 'eodiro bonaeseyo?', 'Gửi đi đâu ạ?'], ['베트남 호찌민으로 보내고 싶어요.', 'Beteunam Hojjimineuro bonaego sipeoyo', 'Tôi muốn gửi về TP.HCM, VN.', 'Rõ.'], ['베트남이에요.', 'Beteunamieyo', 'Thiếu.'], ['보내요?', 'bonaeyo?', 'Hỏi lại.']),
        T(['안에 뭐가 있어요?', 'ane mwoga isseoyo?', 'Bên trong có gì?'], ['옷하고 화장품이에요. 깨지기 쉬운 것도 있어요.', 'otago hwajangpumieyo. kkaejigi swiun geotdo isseoyo', 'Quần áo và mỹ phẩm. Có cả đồ dễ vỡ.', 'Khai báo.'], ['비밀이에요.', 'bimirieyo', 'Không hợp.'], ['없어요.', 'eopseoyo', 'Sai.']),
        T(['배송비는 3만 원이고 일주일쯤 걸려요.', 'baesongbineun samman wonigo iljuiljjeum geollyeoyo', 'Phí 30.000 won, mất khoảng 1 tuần.'], ['네, 카드로 계산할게요.', 'ne, kadeuro gyesanhalgeyo', 'Vâng, tôi trả bằng thẻ.', 'Thanh toán.'], ['3천 원이요?', 'samcheon woniyo?', 'Nghe nhầm.'], ['한 달이요?', 'han dariyo?', 'Nghe nhầm.'])
      ], ket: 'Em đã gửi bưu kiện về VN thành công.'
    },
    tom: ['우체국 / 소포 / 택배 / 배송비', '며칠 걸려요?'], nguphap: 'Ngôn ngữ bưu điện', phatam: '택배 [택빼]',
    loi: ['Nhầm 며칠 và 몇 시'], btvn: ['Viết hội thoại gửi hàng 6 lượt', 'Học thuộc 10 từ', 'Luyện 🎤 3 câu']
  };

  const d16 = {
    n: 16, ten: plan[15].ten, kinds: K,
    muc: 'Thuê nhà ở Hàn: 월세, 전세, 보증금, các loại phòng, hỏi tiện ích.',
    hoc: `${tbl(['Thuật ngữ', 'Nghĩa'], [['월세', 'thuê trả tháng'], ['전세', 'thuê bằng tiền cọc lớn (không trả tháng)'], ['보증금', 'tiền đặt cọc'], ['원룸', 'phòng studio'], ['관리비', 'phí quản lý']])}
      ${tip('🔑 Ở Hàn, 월세 thường kèm 보증금 (cọc). Luôn hỏi 관리비 có gồm điện nước không.')}`,
    vocab: [
      w('월세', 'wolse', 'thuê theo tháng', '', ['월세가 얼마예요?', 'wolsega eolmayeyo?', 'Tiền thuê tháng bao nhiêu?']),
      w('전세', 'jeonse', 'thuê bằng cọc lớn', '', ['전세는 너무 비싸요.', 'jeonseneun neomu bissayo', 'Thuê jeonse quá đắt.']),
      w('보증금', 'bojeunggeum', 'tiền cọc', '', ['보증금은 500만 원이에요.', 'bojeunggeumeun obaengman wonieyo', 'Cọc 5 triệu won.']),
      w('원룸', 'wonrum', 'phòng studio', '', ['원룸을 찾고 있어요.', 'wonrumeul chatgo isseoyo', 'Tôi đang tìm phòng studio.']),
      w('관리비', 'gwallibi', 'phí quản lý', '', ['관리비 포함이에요?', 'gwallibi pohamieyo?', 'Có gồm phí quản lý không?']),
      w('부동산', 'budongsan', 'văn phòng bất động sản', '', ['부동산에 가 봤어요.', 'budongsane ga bwasseoyo', 'Tôi đã đến văn phòng BĐS.']),
      w('역', 'yeok', 'ga tàu', '', ['역에서 가까워요?', 'yeogeseo gakkawoyo?', 'Gần ga không?']),
      w('가깝다', 'gakkapda', 'gần', '', ['회사에서 가까워요.', 'hoesaeseo gakkawoyo', 'Gần công ty.']),
      w('조용하다', 'joyonghada', 'yên tĩnh', '', ['동네가 조용해요.', 'dongnega joyonghaeyo', 'Khu phố yên tĩnh.']),
      w('계약', 'gyeyak', 'hợp đồng', '', ['1년 계약이에요.', 'illyeon gyeyagieyo', 'Hợp đồng 1 năm.'])
    ],
    qs: [
      ['mc', '보증금 = ?', 'tiền cọc', ['tiền thuê tháng', 'phí quản lý', 'tiền điện'], 'bojeunggeum.'],
      ['mc', 'Hỏi “có gồm phí quản lý không”?', '관리비 포함이에요?', ['관리비 있어요요?', '관리비가 누구예요?', '관리비 걸려요?'], '포함.'],
      ['mc', '가깝다 → hiện tại?', '가까워요', ['가깝어요', '가까어요', '가깝워요'], 'ㅂ bất quy tắc.'],
      ['hear', '보증금 천만 원에 월세 50만 원이에요.', 'Cọc 10 triệu won, thuê 500 nghìn won/tháng.', ['Cọc 1 triệu, thuê 5 triệu.', 'Không cọc.', 'Thuê 50 nghìn.'], 'Nghe số theo 만.'],
      ['hear', '역에서 걸어서 5분이에요.', 'Đi bộ từ ga 5 phút.', ['Đi xe 5 phút.', 'Đi bộ 50 phút.', 'Xa ga.'], '걸어서.'],
      ['order', 'Sắp xếp: “Tôi đang tìm phòng studio.”', ['원룸을', '찾고', '있어요', '.'], '원룸을 찾고 있어요.']
    ],
    noi: [['원룸을 찾고 있어요.', 'wonrumeul chatgo isseoyo – Tôi đang tìm phòng studio.'], ['월세가 얼마예요?', 'wolsega eolmayeyo? – Tiền thuê tháng bao nhiêu?'], ['관리비 포함이에요?', 'gwallibi pohamieyo? – Có gồm phí quản lý không?']],
    hoithoai: {
      ctx: 'Em đến văn phòng bất động sản ở Seoul tìm phòng.', vai: 'Nhân viên hỏi, em trả lời.', ai: '🏠 중개인',
      luot: [
        T(['어떤 방을 찾으세요?', 'eotteon bangeul chajeuseyo?', 'Anh tìm phòng thế nào?'], ['회사에서 가까운 원룸을 찾고 있어요.', 'hoesaeseo gakkaun wonrumeul chatgo isseoyo', 'Tôi tìm studio gần công ty.', 'Định ngữ.'], ['원룸 찾았어요.', 'wonrum chajasseoyo', 'Sai thì.'], ['방 있어요?', 'bang isseoyo?', 'Mơ hồ.']),
        T(['이 방은 보증금 500만 원, 월세 60만 원이에요.', 'i bangeun bojeunggeum obaengman won, wolse yuksimman wonieyo', 'Phòng này cọc 5 triệu, thuê 600 nghìn/tháng.'], ['관리비도 포함이에요?', 'gwallibido pohamieyo?', 'Có gồm phí quản lý không?', 'Hỏi rõ.'], ['너무 싸요!', 'neomu ssayo!', 'Không tự nhiên.'], ['60만 원 보증금이요?', 'yuksimman won bojeunggeumiyo?', 'Nghe nhầm.']),
        T(['관리비는 따로 5만 원이에요.', 'gwallibineun ttaro oman wonieyo', 'Phí quản lý riêng 50 nghìn.'], ['그럼 한번 방을 보고 싶어요.', 'geureom hanbeon bangeul bogo sipeoyo', 'Vậy tôi muốn xem phòng.', 'Hành động.'], ['계약할게요 지금.', 'gyeyakhalgeyo jigeum', 'Vội vàng.'], ['안 볼래요.', 'an bollaeyo', 'Lạc.'])
      ], ket: 'Em đã hỏi thuê phòng đúng thuật ngữ.'
    },
    tom: ['월세 / 전세 / 보증금 / 관리비'], nguphap: 'Thuê nhà ở Hàn', phatam: '관리비 [괄리비]',
    loi: ['Không hỏi 관리비', 'Ký vội'], btvn: ['So sánh 월세 và 전세 bằng tiếng Việt 5 câu', 'Viết mô tả phòng mơ ước 5 câu', 'Luyện 🎤 3 câu']
  };

  const d17 = {
    n: 17, ten: plan[16].ten, kinds: K,
    muc: 'Nói về thời tiết và bốn mùa Hàn Quốc; dự báo; trang phục phù hợp. Dùng -아/어지다 (trở nên).',
    hoc: `${tbl(['Mùa', 'Đặc điểm'], [['봄', 'mùa xuân – hoa anh đào 벚꽃, bụi mịn 미세먼지'], ['여름', 'mùa hè – nóng ẩm, mùa mưa 장마'], ['가을', 'mùa thu – lá đỏ 단풍, mát'], ['겨울', 'mùa đông – lạnh, tuyết 눈']])}
      ${exs([['날씨가 점점 추워져요.', 'nalssiga jeomjeom chuwojyeoyo', 'Trời dần lạnh đi.'], ['미세먼지가 심하니까 마스크를 쓰세요.', 'misemeonjiga simhanikka maseukeureul sseuseyo', 'Bụi mịn nặng, hãy đeo khẩu trang.']])}`,
    vocab: [
      w('봄', 'bom', 'mùa xuân', '', ['봄에 벚꽃이 펴요.', 'bome beotkkochi pyeoyo', 'Mùa xuân hoa anh đào nở.']),
      w('여름', 'yeoreum', 'mùa hè', '', ['여름은 더워요.', 'yeoreumeun deowoyo', 'Mùa hè nóng.']),
      w('가을', 'gaeul', 'mùa thu', '', ['가을에 단풍이 예뻐요.', 'gaeure danpungi yeppeoyo', 'Mùa thu lá đỏ đẹp.']),
      w('겨울', 'gyeoul', 'mùa đông', '', ['겨울에 눈이 와요.', 'gyeoure nuni wayo', 'Mùa đông có tuyết.']),
      w('눈', 'nun', 'tuyết', '', ['눈이 많이 왔어요.', 'nuni mani wasseoyo', 'Tuyết rơi nhiều.']),
      w('장마', 'jangma', 'mùa mưa', '', ['다음 주부터 장마예요.', 'daeum jubuteo jangmayeyo', 'Từ tuần sau vào mùa mưa.']),
      w('미세먼지', 'misemeonji', 'bụi mịn', '', ['미세먼지가 심해요.', 'misemeonjiga simhaeyo', 'Bụi mịn nặng.']),
      w('점점', 'jeomjeom', 'dần dần', '', ['점점 따뜻해져요.', 'jeomjeom ttatteuthaejyeoyo', 'Dần ấm lên.']),
      w('따뜻하다', 'ttatteuthada', 'ấm', '', ['따뜻한 옷을 입으세요.', 'ttatteuthan oseul ibeuseyo', 'Mặc áo ấm.']),
      w('일기예보', 'ilgiyebo', 'dự báo thời tiết', '', ['일기예보를 봤어요?', 'ilgiyeboreul bwasseoyo?', 'Xem dự báo chưa?'])
    ],
    qs: [
      ['mc', '“Trời dần lạnh đi”?', '날씨가 점점 추워져요.', ['날씨가 점점 춥어져요.', '날씨가 추워요져.', '날씨 점점 추웠어요.'], '-아/어지다.'],
      ['mc', 'Mùa thu Hàn Quốc nổi tiếng với?', '단풍 (lá đỏ)', ['벚꽃', '장마', '눈'], 'gaeul.'],
      ['mc', '미세먼지 = ?', 'bụi mịn', ['mưa nhỏ', 'sương mù', 'tuyết'], 'Ô nhiễm không khí.'],
      ['hear', '일기예보에 따르면 내일 눈이 온대요.', 'Theo dự báo mai có tuyết.', ['Mai có mưa.', 'Mai nắng.', 'Hôm nay tuyết.'], '눈.'],
      ['hear', '미세먼지가 심하니까 마스크를 꼭 쓰세요.', 'Bụi mịn nặng, nhất định đeo khẩu trang.', ['Không cần khẩu trang.', 'Trời trong lành.', 'Đội mũ.'], '니까 + mệnh lệnh.'],
      ['order', 'Sắp xếp: “Mặc áo ấm.”', ['따뜻한', '옷을', '입으세요', '.'], '따뜻한 옷을 입으세요.']
    ],
    noi: [['날씨가 점점 추워져요.', 'nalssiga jeomjeom chuwojyeoyo – Trời dần lạnh đi.'], ['가을에 단풍이 정말 예뻐요.', 'gaeure danpungi jeongmal yeppeoyo – Mùa thu lá đỏ đẹp thật.'], ['마스크를 꼭 쓰세요.', 'maseukeureul kkok sseuseyo – Nhất định đeo khẩu trang.']],
    hoithoai: {
      ctx: 'Lần đầu em trải qua mùa đông ở Hàn, đồng nghiệp hỏi thăm.', vai: 'Bạn hỏi, em trả lời.', ai: '👩 혜진',
      luot: [
        T(['한국 겨울 처음이죠? 춥지 않아요?', 'hanguk gyeoul cheoeumijyo? chupji anayo?', 'Mùa đông Hàn lần đầu nhỉ? Không lạnh à?'], ['너무 추워요! 베트남은 겨울에도 따뜻해요.', 'neomu chuwoyo! Beteunameun gyeouredo ttatteuthaeyo', 'Lạnh quá! VN mùa đông cũng ấm.', 'So sánh văn hoá.'], ['춥지 않아서 추워요.', 'chupji anaseo chuwoyo', 'Mâu thuẫn.'], ['겨울이 더워요.', 'gyeouri deowoyo', 'Sai.']),
        T(['내일 눈이 많이 온대요.', 'naeil nuni mani ondaeyo', 'Nghe nói mai tuyết nhiều.'], ['정말요? 눈을 처음 봐요! 사진 찍어야겠어요.', 'jeongmallyo? nuneul cheoeum bwayo! sajin jjigeoyagesseoyo', 'Thật à? Lần đầu thấy tuyết! Phải chụp ảnh thôi.', 'Phản ứng tự nhiên.'], ['눈이 아파요.', 'nuni apayo', 'Nhầm 눈 = mắt.'], ['안 와요.', 'an wayo', 'Cãi.']),
        T(['따뜻하게 입고 나가세요.', 'ttatteuthage ipgo nagaseyo', 'Mặc ấm rồi hãy ra ngoài.'], ['네, 걱정해 줘서 고마워요.', 'ne, geokjeonghae jwoseo gomawoyo', 'Vâng, cảm ơn đã lo cho tôi.', 'Đáp lời.'], ['싫어요.', 'sireoyo', 'Bất lịch sự.'], ['더워요.', 'deowoyo', 'Lạc.'])
      ], ket: 'Em đã trò chuyện về thời tiết Hàn Quốc tự nhiên.'
    },
    tom: ['봄 / 여름 / 가을 / 겨울', '-아/어지다 (trở nên)', '미세먼지 / 장마 / 단풍'], nguphap: '-아/어지다', phatam: '추워져요 [추워저요]',
    loi: ['Nhầm 눈 (tuyết) và 눈 (mắt) theo ngữ cảnh'], btvn: ['So sánh thời tiết VN và Hàn 6 câu', 'Viết 3 câu -아/어지다', 'Luyện 🎤 3 câu']
  };

  const d18 = {
    n: 18, ten: plan[17].ten, kinds: K,
    muc: 'Giao tiếp nơi làm việc: xin nghỉ phép, báo cáo, xin ý kiến, xưng hô chức danh (-님).',
    hoc: `${tbl(['Chức danh', 'Nghĩa'], [['사장님', 'giám đốc'], ['부장님', 'trưởng phòng'], ['과장님', 'trưởng bộ phận'], ['대리님', 'trợ lý quản lý'], ['선배님', 'tiền bối']])}
      ${exs([['부장님, 내일 연차를 쓰고 싶습니다.', 'bujangnim, naeil yeonchareul sseugo sipseumnida', 'Trưởng phòng, mai em muốn nghỉ phép năm.'], ['검토해 주시겠습니까?', 'geomtohae jusigesseumnikka?', 'Anh xem giúp được không ạ?']])}
      ${tip('🔑 Ở công ty Hàn gọi <b>chức danh + 님</b>, không gọi tên trống. Văn trang trọng dùng đuôi <b>-습니다/ㅂ니다</b>.')}`,
    vocab: [
      w('부장님', 'bujangnim', 'trưởng phòng', '', ['부장님, 보고드리겠습니다.', 'bujangnim, bogodeurigesseumnida', 'Trưởng phòng, em xin báo cáo.']),
      w('과장님', 'gwajangnim', 'trưởng bộ phận', '', ['과장님 계세요?', 'gwajangnim gyeseyo?', 'Trưởng bộ phận có ở đây không?']),
      w('연차', 'yeoncha', 'nghỉ phép năm', '', ['연차를 쓰고 싶어요.', 'yeonchareul sseugo sipeoyo', 'Tôi muốn nghỉ phép năm.']),
      w('보고하다', 'bogohada', 'báo cáo', '', ['결과를 보고합니다.', 'gyeolgwareul bogohamnida', 'Xin báo cáo kết quả.']),
      w('검토하다', 'geomtohada', 'xem xét', '', ['검토해 주세요.', 'geomtohae juseyo', 'Xem xét giúp.']),
      w('회의실', 'hoeuisil', 'phòng họp', '', ['회의실 예약했어요.', 'hoeuisil yeyakhaesseoyo', 'Đã đặt phòng họp.']),
      w('퇴근', 'toegeun', 'tan làm', '', ['몇 시에 퇴근해요?', 'myeot sie toegeunhaeyo?', 'Mấy giờ tan làm?']),
      w('출근', 'chulgeun', 'đi làm', '', ['아홉 시에 출근해요.', 'ahop sie chulgeunhaeyo', '9 giờ đi làm.']),
      w('야근', 'yageun', 'làm đêm, tăng ca tối', '', ['오늘 야근해요.', 'oneul yageunhaeyo', 'Hôm nay làm tối.']),
      w('수고하셨습니다', 'sugohasyeotseumnida', 'anh/chị vất vả rồi', '', ['오늘도 수고하셨습니다.', 'oneuldo sugohasyeotseumnida', 'Hôm nay cũng vất vả rồi.'])
    ],
    qs: [
      ['mc', 'Gọi trưởng phòng đúng cách?', '부장님', ['부장', '김 씨', '야'], 'Chức danh + 님.'],
      ['mc', '연차 = ?', 'nghỉ phép năm', ['tăng ca', 'năm làm việc', 'nghỉ ốm'], 'yeoncha.'],
      ['mc', 'Câu chào khi tan làm với đồng nghiệp?', '수고하셨습니다.', ['잘 먹겠습니다.', '안녕히 주무세요.', '처음 뵙겠습니다.'], 'Văn hoá công sở.'],
      ['hear', '부장님, 다음 주 금요일에 연차를 쓰고 싶습니다.', 'Trưởng phòng, thứ Sáu tuần sau em muốn nghỉ phép.', ['Em muốn tăng ca.', 'Thứ Sáu này.', 'Em xin nghỉ việc.'], '연차.'],
      ['hear', '자료를 검토해 주시겠습니까?', 'Anh xem giúp tài liệu được không ạ?', ['Tôi sẽ xem.', 'Đừng xem.', 'Tài liệu mất.'], 'Trang trọng.'],
      ['order', 'Sắp xếp: “Hôm nay cũng vất vả rồi.”', ['오늘도', '수고하셨습니다', '.'], '오늘도 수고하셨습니다.']
    ],
    noi: [['부장님, 보고드리겠습니다.', 'bujangnim, bogodeurigesseumnida – Trưởng phòng, em xin báo cáo.'], ['검토해 주시겠습니까?', 'geomtohae jusigesseumnikka? – Anh xem giúp được không ạ?'], ['오늘도 수고하셨습니다.', 'oneuldo sugohasyeotseumnida – Hôm nay cũng vất vả rồi.']],
    hoithoai: {
      ctx: 'Em xin trưởng phòng người Hàn nghỉ phép để về Việt Nam dự đám cưới.', vai: 'Trưởng phòng hỏi, em trả lời.', ai: '👨‍💼 김 부장',
      luot: [
        T(['무슨 일이에요?', 'museun irieyo?', 'Có việc gì vậy?'], ['부장님, 다음 달 3일부터 5일까지 연차를 쓰고 싶습니다.', 'bujangnim, daeum dal samilbuteo oilkkaji yeonchareul sseugo sipseumnida', 'Trưởng phòng, em muốn nghỉ phép từ mùng 3 đến mùng 5 tháng sau.', 'Trang trọng, rõ ngày.'], ['김 씨, 휴가 갈래.', 'Gim ssi, hyuga gallae', 'Thiếu tôn trọng.'], ['연차 줘요.', 'yeoncha jwoyo', 'Ra lệnh.']),
        T(['무슨 일 있어요?', 'museun il isseoyo?', 'Có chuyện gì à?'], ['베트남에서 동생 결혼식이 있어서요.', 'Beteunameseo dongsaeng gyeolhonsigi isseoseoyo', 'Em trai em cưới ở VN ạ.', 'Lý do.'], ['비밀이에요.', 'bimirieyo', 'Không hợp.'], ['그냥요.', 'geunyangyo', 'Thiếu thuyết phục.']),
        T(['알겠어요. 일은 어떻게 해요?', 'algesseoyo. ireun eotteoke haeyo?', 'Được. Công việc thì sao?'], ['출발 전에 다 끝내고 이 대리님께 인수인계하겠습니다.', 'chulbal jeone da kkeunnaego I daerinimkke insuingyehagesseumnida', 'Trước khi đi em làm xong và bàn giao cho trợ lý Lee.', 'Trách nhiệm.'], ['돌아와서 할게요.', 'dorawaseo halgeyo', 'Thiếu trách nhiệm.'], ['몰라요.', 'mollayo', 'Thiếu.'])
      ], ket: 'Em đã xin nghỉ phép đúng văn hoá công sở Hàn.'
    },
    tom: ['Chức danh + 님', '-습니다/ㅂ니다', '연차 / 보고 / 검토 / 수고하셨습니다'], nguphap: 'Văn phong công sở', phatam: '-습니다 [씀니다]',
    loi: ['Gọi tên trống', 'Dùng 반말 với cấp trên'], btvn: ['Viết email xin nghỉ phép bằng tiếng Hàn', 'Học thuộc 8 chức danh', 'Luyện 🎤 3 câu']
  };

  const d19 = {
    n: 19, ten: plan[18].ten, kinds: K,
    muc: 'Tìm hiểu 설날 (Tết âm lịch) và 추석 (Trung thu Hàn): phong tục, món ăn, lời chúc.',
    hoc: `${tbl(['Lễ', 'Phong tục', 'Món ăn'], [['설날', '세배 (lạy chào), 세뱃돈 (tiền mừng tuổi)', '떡국 (canh bánh gạo)'], ['추석', '성묘 (tảo mộ), 차례 (cúng tổ tiên)', '송편 (bánh gạo hình bán nguyệt)']])}
      ${exs([['새해 복 많이 받으세요!', 'saehae bok mani badeuseyo!', 'Chúc mừng năm mới!'], ['추석 잘 보내세요!', 'Chuseok jal bonaeseyo!', 'Chúc Trung thu vui vẻ!']])}`,
    vocab: [
      w('설날', 'seollal', 'Tết âm lịch', '', ['설날에 고향에 가요.', 'seollare gohyange gayo', 'Tết tôi về quê.']),
      w('추석', 'Chuseok', 'Trung thu Hàn', '', ['추석은 큰 명절이에요.', 'Chuseogeun keun myeongjeorieyo', 'Chuseok là lễ lớn.']),
      w('명절', 'myeongjeol', 'ngày lễ truyền thống', '', ['명절에 가족이 모여요.', 'myeongjeore gajogi moyeoyo', 'Ngày lễ gia đình sum họp.']),
      w('떡국', 'tteokguk', 'canh bánh gạo', '', ['설날에 떡국을 먹어요.', 'seollare tteokgugeul meogeoyo', 'Tết ăn canh bánh gạo.']),
      w('송편', 'songpyeon', 'bánh songpyeon', '', ['추석에 송편을 만들어요.', 'Chuseoge songpyeoneul mandeureoyo', 'Chuseok làm bánh songpyeon.']),
      w('세배', 'sebae', 'lạy chào năm mới', '', ['할머니께 세배했어요.', 'halmeonikke sebaehaesseoyo', 'Tôi lạy chào bà.']),
      w('세뱃돈', 'sebaetdon', 'tiền mừng tuổi', '', ['세뱃돈을 받았어요.', 'sebaetdoneul badasseoyo', 'Tôi nhận tiền mừng tuổi.']),
      w('고향', 'gohyang', 'quê hương', '', ['고향이 어디예요?', 'gohyangi eodiyeyo?', 'Quê bạn ở đâu?']),
      w('복', 'bok', 'phúc', '', ['복 많이 받으세요.', 'bok mani badeuseyo', 'Nhận nhiều phúc nhé.']),
      w('모이다', 'moida', 'tụ họp', '', ['온 가족이 모였어요.', 'on gajogi moyeosseoyo', 'Cả nhà tụ họp.'])
    ],
    qs: [
      ['mc', 'Lời chúc năm mới tiếng Hàn?', '새해 복 많이 받으세요!', ['생일 축하해요!', '잘 먹겠습니다!', '수고하셨습니다!'], 'Chúc Tết.'],
      ['mc', 'Tết Hàn ăn món gì?', '떡국', ['송편', '김밥', '삼계탕'], 'Canh bánh gạo.'],
      ['mc', '추석 làm bánh gì?', '송편', ['떡국', '빵', '케이크'], 'Songpyeon.'],
      ['hear', '설날에는 온 가족이 모여서 떡국을 먹어요.', 'Tết cả nhà tụ họp ăn canh bánh gạo.', ['Tết ăn songpyeon.', 'Tết đi du lịch.', 'Tết ở một mình.'], '떡국.'],
      ['hear', '추석 잘 보내세요!', 'Chúc Trung thu vui vẻ!', ['Chúc mừng năm mới!', 'Chúc ngủ ngon!', 'Chúc sinh nhật!'], 'Chúc Chuseok.'],
      ['order', 'Sắp xếp: “Quê bạn ở đâu?”', ['고향이', '어디예요', '?'], '고향이 어디예요?']
    ],
    noi: [['새해 복 많이 받으세요!', 'saehae bok mani badeuseyo! – Chúc mừng năm mới!'], ['추석 잘 보내세요!', 'Chuseok jal bonaeseyo! – Chúc Trung thu vui vẻ!'], ['베트남에서도 설날을 지내요.', 'Beteunameseodo seollareul jinaeyo – Việt Nam cũng ăn Tết.']],
    hoithoai: {
      ctx: 'Trước kỳ nghỉ Chuseok, đồng nghiệp Hàn hỏi em.', vai: 'Bạn hỏi, em trả lời.', ai: '👨 민호',
      luot: [
        T(['추석에 뭐 해요?', 'Chuseoge mwo haeyo?', 'Chuseok bạn làm gì?'], ['고향에 못 가니까 친구들하고 송편을 만들 거예요.', 'gohyange mot ganikka chingudeulhago songpyeoneul mandeul geoyeyo', 'Không về quê được nên sẽ làm bánh songpyeon với bạn.', 'Kết hợp ngữ pháp.'], ['떡국 먹을 거예요.', 'tteokguk meogeul geoyeyo', 'Nhầm lễ.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['베트남에도 추석이 있어요?', 'Beteunamedo Chuseogi isseoyo?', 'VN có Chuseok không?'], ['네, 중추절이라고 해요. 아이들이 등불을 들고 놀아요.', 'ne, Jungchujeorirago haeyo. aideuri deungbureul deulgo norayo', 'Có, gọi là Trung thu. Trẻ em cầm đèn lồng đi chơi.', 'So sánh văn hoá.'], ['없어요.', 'eopseoyo', 'Sai.'], ['송편이 있어요.', 'songpyeoni isseoyo', 'Thiếu.']),
        T(['재미있네요! 추석 잘 보내세요.', 'jaemiinneyo! Chuseok jal bonaeseyo', 'Thú vị! Chúc Chuseok vui.'], ['민호 씨도 추석 잘 보내세요!', 'Minho ssido Chuseok jal bonaeseyo!', 'Anh Minho cũng Chuseok vui nhé!', 'Đáp lời chúc.'], ['새해 복 많이 받으세요!', 'saehae bok mani badeuseyo!', 'Sai lễ.'], ['고마워.', 'gomawo', 'Trống không.'])
      ], ket: 'Em đã chia sẻ văn hoá lễ tết Việt – Hàn.'
    },
    tom: ['설날 / 추석 / 명절', '떡국 / 송편 / 세배', 'Lời chúc lễ'], nguphap: 'Văn hoá lễ tết', phatam: '설날 [설랄]',
    loi: ['Dùng sai lời chúc giữa hai lễ'], btvn: ['Viết đoạn 80 chữ giới thiệu Tết Việt bằng tiếng Hàn', 'Học thuộc 3 lời chúc', 'Luyện 🎤 3 câu']
  };

  const d20 = {
    n: 20, ten: plan[19].ten, kinds: K,
    muc: 'Mua sắm online ở Hàn: đặt hàng, giao hàng, đổi trả, hỏi CSKH; cảnh giác lừa đảo.',
    hoc: `${tbl(['Mẫu câu', 'Nghĩa'], [['주문했는데 아직 안 왔어요.', 'Tôi đặt rồi mà chưa đến.'], ['반품하고 싶어요.', 'Tôi muốn trả hàng.'], ['교환할 수 있어요?', 'Đổi được không?'], ['무료 배송이에요?', 'Có miễn phí ship không?'], ['할인 쿠폰 있어요?', 'Có mã giảm giá không?']])}
      ${tip('⚠️ Tin nhắn lạ “택배 주소 확인” kèm link thường là lừa đảo (스미싱). Không bấm link, không nhập thông tin.')}`,
    vocab: [
      w('주문하다', 'jumunhada', 'đặt hàng', '', ['어제 주문했어요.', 'eoje jumunhaesseoyo', 'Tôi đặt hôm qua.']),
      w('반품', 'banpum', 'trả hàng', '', ['반품하고 싶어요.', 'banpumhago sipeoyo', 'Tôi muốn trả hàng.']),
      w('교환', 'gyohwan', 'đổi hàng', '', ['사이즈를 교환할 수 있어요?', 'saijeureul gyohwanhal su isseoyo?', 'Đổi size được không?']),
      w('환불', 'hwanbul', 'hoàn tiền', '', ['환불해 주세요.', 'hwanbulhae juseyo', 'Hoàn tiền giúp.']),
      w('무료', 'muryo', 'miễn phí', '', ['무료 배송이에요.', 'muryo baesongieyo', 'Miễn phí ship.']),
      w('할인', 'harin', 'giảm giá', '', ['30% 할인이에요.', 'samsip peosenteu harinieyo', 'Giảm 30%.']),
      w('쿠폰', 'kupon', 'phiếu giảm giá', '', ['쿠폰을 쓸 수 있어요?', 'kuponeul sseul su isseoyo?', 'Dùng coupon được không?']),
      w('고객센터', 'gogaek senteo', 'trung tâm CSKH', '', ['고객센터에 전화했어요.', 'gogaek senteoe jeonhwahaesseoyo', 'Tôi đã gọi CSKH.']),
      w('불량', 'bullyang', 'lỗi, kém chất lượng', '', ['불량품이에요.', 'bullyangpumieyo', 'Hàng lỗi.']),
      w('스미싱', 'seumising', 'lừa đảo qua tin nhắn', '', ['스미싱 문자를 조심하세요.', 'seumising munjareul josimhaseyo', 'Cẩn thận tin nhắn lừa đảo.'])
    ],
    qs: [
      ['mc', '환불 = ?', 'hoàn tiền', ['đổi hàng', 'trả hàng', 'giảm giá'], 'hwanbul.'],
      ['mc', 'Nhận tin nhắn “택배 주소 확인” kèm link lạ, nên?', 'Không bấm, có thể là 스미싱', ['Bấm ngay', 'Nhập thông tin thẻ', 'Gửi lại cho bạn bè'], 'Lừa đảo.'],
      ['mc', '“Tôi muốn đổi size”?', '사이즈를 교환하고 싶어요.', ['사이즈를 환불하고 싶어요.', '사이즈를 주문했어요.', '사이즈 무료예요.'], '교환.'],
      ['hear', '주문한 지 일주일이 됐는데 아직 안 왔어요.', 'Đặt hàng được 1 tuần rồi mà chưa đến.', ['Đã nhận hàng.', 'Đặt hôm nay.', 'Hàng bị lỗi.'], 'Khiếu nại giao hàng.'],
      ['hear', '불량품이니까 환불해 주세요.', 'Hàng lỗi, xin hoàn tiền.', ['Hàng tốt.', 'Muốn mua thêm.', 'Muốn đổi màu.'], '불량 / 환불.'],
      ['order', 'Sắp xếp: “Tôi đặt hôm qua.”', ['어제', '주문했어요', '.'], '어제 주문했어요.']
    ],
    noi: [['반품하고 싶어요.', 'banpumhago sipeoyo – Tôi muốn trả hàng.'], ['무료 배송이에요?', 'muryo baesongieyo? – Có miễn phí ship không?'], ['스미싱 문자를 조심하세요.', 'seumising munjareul josimhaseyo – Cẩn thận tin nhắn lừa đảo.']],
    hoithoai: {
      ctx: 'Em gọi tổng đài CSKH vì nhận được chuột máy tính bị lỗi.', vai: 'CSKH hỏi, em trình bày.', ai: '🎧 상담원',
      luot: [
        T(['고객센터입니다. 무엇을 도와드릴까요?', 'gogaek senteoimnida. mueoseul dowadeurilkkayo?', 'CSKH xin nghe. Tôi giúp gì được?'], ['어제 마우스를 받았는데 작동이 안 돼요.', 'eoje mauseureul badanneunde jakdongi an dwaeyo', 'Hôm qua nhận chuột mà không hoạt động.', 'Mô tả.'], ['마우스 주세요.', 'mauseu juseyo', 'Mơ hồ.'], ['환불해.', 'hwanbulhae', 'Trống không.']),
        T(['죄송합니다. 교환해 드릴까요, 환불해 드릴까요?', 'joesonghamnida. gyohwanhae deurilkkayo, hwanbulhae deurilkkayo?', 'Xin lỗi. Đổi hay hoàn tiền ạ?'], ['새 걸로 교환해 주세요.', 'sae geollo gyohwanhae juseyo', 'Đổi cái mới giúp tôi.', 'Chọn rõ.'], ['둘 다요.', 'dul dayo', 'Không hợp lý.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['네, 택배 기사님이 내일 방문할 거예요. 배송비는 무료입니다.', 'ne, taekbae gisanimi naeil bangmunhal geoyeyo. baesongbineun muryoimnida', 'Vâng, mai shipper đến lấy. Miễn phí ship.'], ['감사합니다. 수고하세요.', 'gamsahamnida. sugohaseyo', 'Cảm ơn. Chúc làm việc tốt.', 'Kết.'], ['배송비 얼마예요?', 'baesongbi eolmayeyo?', 'Đã nói miễn phí.'], ['오늘 오세요.', 'oneul oseyo', 'Không hợp.'])
      ], ket: 'Em đã xử lý đổi hàng qua tổng đài.'
    },
    tom: ['주문 / 반품 / 교환 / 환불', '스미싱 – không bấm link lạ'], nguphap: 'Ngôn ngữ mua sắm online', phatam: '환불 [환불], 할인 [하린]',
    loi: ['Nhầm 교환, 반품, 환불'], btvn: ['Viết tin nhắn khiếu nại giao hàng', 'Liệt kê 3 dấu hiệu tin nhắn lừa đảo', 'Luyện 🎤 3 câu']
  };

  const d21 = {
    n: 21, ten: plan[20].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Kiểm tra giai đoạn 3: bưu điện, thuê nhà, thời tiết, công sở, lễ tết, mua sắm online.',
    hoc: `<h4>Tóm tắt giai đoạn 3</h4>${tbl(['Chủ đề', 'Câu then chốt'], [['Bưu điện', '며칠 걸려요? 배송비가 얼마예요?'], ['Thuê nhà', '보증금, 월세, 관리비 포함이에요?'], ['Thời tiết', '점점 추워져요. 미세먼지가 심해요.'], ['Công sở', '부장님, 연차를 쓰고 싶습니다.'], ['Lễ tết', '새해 복 많이 받으세요! 추석 잘 보내세요!'], ['Online', '반품, 교환, 환불, 스미싱']])}`,
    qs: [['mc', 'Gọi trưởng phòng?', '부장님', ['부장', '야', '김 씨'], 'Chức danh + 님.'], ['mc', '“Hoàn tiền giúp tôi”?', '환불해 주세요.', ['교환해 주세요.', '주문해 주세요.', '반품했어요.'], '환불.']],
    noi: [['오늘도 수고하셨습니다.', 'oneuldo sugohasyeotseumnida – Hôm nay cũng vất vả rồi.'], ['새해 복 많이 받으세요!', 'saehae bok mani badeuseyo! – Chúc mừng năm mới!']],
    hoithoai: {
      ctx: 'Mô phỏng: một ngày bận rộn ở Seoul.', vai: 'Nhiều người nói, em xử lý.', ai: '🎭 여러 사람',
      luot: [
        T(['（부장님）이 보고서 언제까지 돼요?', '(Bujangnim) i bogoseo eonjekkaji dwaeyo?', '(Trưởng phòng) Báo cáo này khi nào xong?'], ['내일 오전까지 보내 드리겠습니다.', 'naeil ojeonkkaji bonae deurigesseumnida', 'Trước sáng mai em gửi ạ.', 'Trang trọng + hứa.'], ['내일 할 거야.', 'naeil hal geoya', 'Trống không.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['（우체국）어디로 보내세요?', '(Ucheguk) eodiro bonaeseyo?', '(Bưu điện) Gửi đi đâu?'], ['베트남으로요. 며칠 걸려요?', 'Beteunameuroyo. myeochil geollyeoyo?', 'Về VN. Mất mấy ngày?', 'Bưu điện.'], ['보증금이 얼마예요?', 'bojeunggeumi eolmayeyo?', 'Nhầm ngữ cảnh.'], ['반품해요.', 'banpumhaeyo', 'Nhầm.']),
        T(['（친구）날씨가 추워졌어요. 괜찮아요?', '(Chingu) nalssiga chuwojyeosseoyo. gwaenchanayo?', '(Bạn) Trời lạnh rồi, ổn không?'], ['네, 따뜻한 옷을 샀어요. 고마워요!', 'ne, ttatteuthan oseul sasseoyo. gomawoyo!', 'Ổn, tôi đã mua áo ấm. Cảm ơn!', 'Thời tiết.'], ['더워요.', 'deowoyo', 'Lạc.'], ['수고하셨습니다.', 'sugohasyeotseumnida', 'Sai ngữ cảnh.'])
      ], ket: 'Em đã xử lý trọn một ngày ở Seoul!'
    },
    tom: ['Ôn giai đoạn 3', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn', phatam: 'Ôn đuôi -습니다',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: học lại ngày yếu', 'Làm ⚡ Luyện nhanh', 'Viết nhật ký một tuần ở Seoul 150 chữ']
  };

  const d22 = {
    n: 22, ten: plan[21].ten, kinds: K,
    muc: 'Kể kinh nghiệm -(으)ㄴ 적이 있다/없다 (từng / chưa từng) và -아/어 본 적이 있다.',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ'], [['V-(으)ㄴ 적이 있어요', '한국에 간 적이 있어요.'], ['V-(으)ㄴ 적이 없어요', '스키를 탄 적이 없어요.'], ['V-아/어 본 적이 있어요', '김치를 만들어 본 적이 있어요.'], ['Hỏi', '…-(으)ㄴ 적이 있어요?']])}`,
    vocab: [
      w('적', 'jeok', 'lần, dịp (đã từng)', '', ['간 적이 있어요.', 'gan jeogi isseoyo', 'Từng đi rồi.']),
      w('스키', 'seuki', 'trượt tuyết', '', ['스키를 탄 적이 없어요.', 'seukireul tan jeogi eopseoyo', 'Chưa từng trượt tuyết.']),
      w('한 번', 'han beon', 'một lần', '', ['한 번 가 봤어요.', 'han beon ga bwasseoyo', 'Đã đi một lần.']),
      w('경험', 'gyeongheom', 'kinh nghiệm, trải nghiệm', '', ['좋은 경험이었어요.', 'joeun gyeongheomieosseoyo', 'Là trải nghiệm hay.']),
      w('잃어버리다', 'ireobeorida', 'đánh mất', '', ['지갑을 잃어버린 적이 있어요.', 'jigabeul ireobeorin jeogi isseoyo', 'Tôi từng mất ví.']),
      w('지갑', 'jigap', 'ví', '', ['지갑이 없어요.', 'jigabi eopseoyo', 'Không thấy ví.']),
      w('길을 잃다', 'gireul ilta', 'lạc đường', '', ['길을 잃은 적이 있어요?', 'gireul ireun jeogi isseoyo?', 'Bạn từng lạc đường chưa?']),
      w('공연', 'gongyeon', 'buổi biểu diễn', '', ['K-pop 공연을 본 적이 있어요.', 'keipap gongyeoneul bon jeogi isseoyo', 'Tôi từng xem concert K-pop.']),
      w('처음', 'cheoeum', 'lần đầu', '', ['처음이에요.', 'cheoeumieyo', 'Lần đầu.']),
      w('기억', 'gieok', 'kỷ niệm, trí nhớ', '', ['좋은 기억이에요.', 'joeun gieogieyo', 'Là kỷ niệm đẹp.'])
    ],
    qs: [
      ['mc', '“Tôi từng đến Hàn Quốc”?', '한국에 간 적이 있어요.', ['한국에 가는 적이 있어요.', '한국에 갈 적이 있어요.', '한국에 가고 적이 있어요.'], 'V-(으)ㄴ 적.'],
      ['mc', '“Tôi chưa từng trượt tuyết”?', '스키를 탄 적이 없어요.', ['스키를 타는 적이 없어요.', '스키를 안 탄 적이 있어요.', '스키 탈 적 없어요.'], '-(으)ㄴ 적이 없다.'],
      ['mc', '잃어버리다 nghĩa là?', 'đánh mất', ['tìm thấy', 'quên tên', 'bỏ đi'], 'ireobeorida.'],
      ['hear', '저는 지하철에서 지갑을 잃어버린 적이 있어요.', 'Tôi từng mất ví trên tàu điện.', ['Tôi tìm thấy ví.', 'Tôi chưa bao giờ đi tàu.', 'Tôi mua ví mới.'], '-ㄴ 적이 있다.'],
      ['hear', 'K-pop 공연을 본 적이 있어요?', 'Bạn từng xem concert K-pop chưa?', ['Bạn thích K-pop không?', 'Bạn hát K-pop được không?', 'Bạn sẽ đi concert?'], 'Hỏi kinh nghiệm.'],
      ['order', 'Sắp xếp: “Là trải nghiệm hay.”', ['좋은', '경험이었어요', '.'], '좋은 경험이었어요.']
    ],
    noi: [['한국에 간 적이 있어요.', 'hanguge gan jeogi isseoyo – Tôi từng đến Hàn Quốc.'], ['스키를 타 본 적이 없어요.', 'seukireul ta bon jeogi eopseoyo – Tôi chưa từng thử trượt tuyết.'], ['정말 좋은 경험이었어요.', 'jeongmal joeun gyeongheomieosseoyo – Thật là trải nghiệm hay.']],
    hoithoai: {
      ctx: 'Buổi phỏng vấn làm việc tại công ty Hàn ở Việt Nam.', vai: 'Nhà tuyển dụng hỏi, em trả lời.', ai: '👔 면접관',
      luot: [
        T(['한국 회사에서 일한 적이 있어요?', 'hanguk hoesaeseo ilhan jeogi isseoyo?', 'Bạn từng làm ở công ty Hàn chưa?'], ['네, 2년 동안 한국 회사에서 일한 적이 있어요.', 'ne, inyeon dongan hanguk hoesaeseo ilhan jeogi isseoyo', 'Có, tôi từng làm ở công ty Hàn 2 năm.', 'Kinh nghiệm.'], ['일할 적이 있어요.', 'ilhal jeogi isseoyo', 'Sai thì.'], ['일하고 있어요 적.', 'ilhago isseoyo jeok', 'Sai.']),
        T(['한국에 가 본 적이 있어요?', 'hanguge ga bon jeogi isseoyo?', 'Bạn từng đến Hàn chưa?'], ['출장으로 한 번 가 봤어요. 좋은 경험이었어요.', 'chuljangeuro han beon ga bwasseoyo. joeun gyeongheomieosseoyo', 'Đi công tác một lần. Là trải nghiệm hay.', 'Cụ thể.'], ['안 가 본 적이 있어요.', 'an ga bon jeogi isseoyo', 'Sai.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['어려운 일을 해결한 적이 있어요?', 'eoryeoun ireul haegyeolhan jeogi isseoyo?', 'Bạn từng giải quyết việc khó chưa?'], ['네, 서버가 고장 났을 때 밤새 고친 적이 있어요.', 'ne, seobeoga gojang nasseul ttae bamsae gochin jeogi isseoyo', 'Có, từng sửa máy chủ hỏng suốt đêm.', 'Thành tích.'], ['어려워요.', 'eoryeowoyo', 'Né.'], ['해결 안 해요.', 'haegyeol an haeyo', 'Tiêu cực.'])
      ], ket: 'Em đã kể kinh nghiệm thuyết phục khi phỏng vấn.'
    },
    tom: ['-(으)ㄴ 적이 있다/없다', '-아/어 본 적이 있다'], nguphap: 'Kinh nghiệm', phatam: '간 적이 [간 저기]',
    loi: ['Dùng -는/-(으)ㄹ trước 적'], btvn: ['Viết 5 điều từng làm và 5 điều chưa từng', 'Kể 1 kỷ niệm đáng nhớ 80 chữ', 'Luyện 🎤 3 câu']
  };

  const d23 = {
    n: 23, ten: plan[22].ten, kinds: K,
    muc: 'Rủ rê và đề nghị: -(으)ㄹ까요? (nhé?), -(으)ㅂ시다 (hãy cùng), -(으)ㄹ래요? (muốn… không?).',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ', 'Sắc thái'], [['-(으)ㄹ까요?', '같이 점심 먹을까요?', 'rủ nhẹ nhàng'], ['-(으)ㅂ시다', '시작합시다.', 'trang trọng; không dùng với cấp trên'], ['-(으)ㄹ래요?', '커피 마실래요?', 'thân mật, hỏi ý muốn'], ['Đáp', '좋아요! / 미안해요, 다음에 해요.', '']])}
      ${tip('⚠️ <b>-(으)ㅂ시다</b> nghe như ra lệnh với người lớn; với cấp trên dùng <b>-(으)시지요</b> hoặc -(으)ㄹ까요?.')}`,
    vocab: [
      w('점심', 'jeomsim', 'bữa trưa', '', ['점심 먹을까요?', 'jeomsim meogeulkkayo?', 'Ăn trưa nhé?']),
      w('저녁', 'jeonyeok', 'bữa tối; buổi tối', '', ['저녁에 만날래요?', 'jeonyeoge mannallaeyo?', 'Tối gặp không?']),
      w('시작하다', 'sijakhada', 'bắt đầu', '', ['회의를 시작합시다.', 'hoeuireul sijakhapsida', 'Bắt đầu họp nào.']),
      w('다음에', 'daeume', 'lần sau', '', ['다음에 같이 가요.', 'daeume gachi gayo', 'Lần sau đi cùng nhé.']),
      w('미안하다', 'mianhada', 'xin lỗi (thân mật)', '', ['미안해요, 바빠요.', 'mianhaeyo, bappayo', 'Xin lỗi, tôi bận.']),
      w('영화관', 'yeonghwagwan', 'rạp chiếu phim', '', ['영화관에 갈래요?', 'yeonghwagwane gallaeyo?', 'Đi rạp không?']),
      w('산책', 'sanchaek', 'đi dạo', '', ['산책할까요?', 'sanchaekhalkkayo?', 'Đi dạo nhé?']),
      w('약속', 'yaksok', 'cuộc hẹn', '', ['약속이 있어요.', 'yaksogi isseoyo', 'Tôi có hẹn.']),
      w('언제', 'eonje', 'khi nào', '', ['언제 만날까요?', 'eonje mannalkkayo?', 'Khi nào gặp nhé?']),
      w('어디서', 'eodiseo', 'ở đâu', '', ['어디서 만날까요?', 'eodiseo mannalkkayo?', 'Gặp ở đâu nhé?'])
    ],
    qs: [
      ['mc', 'Rủ đồng nghiệp ăn trưa nhẹ nhàng?', '같이 점심 먹을까요?', ['같이 점심 먹읍시다요.', '점심 먹어라.', '점심 먹을 거예요?'], '-(으)ㄹ까요?'],
      ['mc', 'Từ chối khéo lời rủ?', '미안해요, 약속이 있어요. 다음에 같이 가요.', ['싫어요.', '안 가.', '왜요?'], 'Lịch sự.'],
      ['mc', 'Với giám đốc, câu nào KHÔNG nên dùng?', '갑시다.', ['가실까요?', '가시지요.', '같이 가시겠어요?'], '-ㅂ시다 nghe như lệnh.'],
      ['hear', '이번 주말에 영화관에 갈래요?', 'Cuối tuần này đi rạp không?', ['Cuối tuần trước đi rạp.', 'Rạp đóng cửa.', 'Tôi không thích phim.'], '-ㄹ래요?'],
      ['hear', '그럼 토요일 세 시에 강남역에서 만날까요?', 'Vậy 3 giờ thứ Bảy gặp ở ga Gangnam nhé?', ['Chủ nhật.', '5 giờ.', 'Ga Seoul.'], 'Hẹn cụ thể.'],
      ['order', 'Sắp xếp: “Gặp ở đâu nhé?”', ['어디서', '만날까요', '?'], '어디서 만날까요?']
    ],
    noi: [['같이 점심 먹을까요?', 'gachi jeomsim meogeulkkayo? – Cùng ăn trưa nhé?'], ['미안해요, 다음에 같이 가요.', 'mianhaeyo, daeume gachi gayo – Xin lỗi, lần sau đi cùng nhé.'], ['언제 어디서 만날까요?', 'eonje eodiseo mannalkkayo? – Khi nào, ở đâu gặp nhé?']],
    hoithoai: {
      ctx: 'Em rủ đồng nghiệp Hàn đi ăn phở ở Seoul.', vai: 'Bạn đáp, em rủ và hẹn.', ai: '👩 소연',
      luot: [
        T(['오늘 일 끝나고 뭐 해요?', 'oneul il kkeutnago mwo haeyo?', 'Tan làm hôm nay bạn làm gì?'], ['베트남 쌀국수 먹으러 갈래요? 맛있는 집을 알아요.', 'Beteunam ssalguksu meogeureo gallaeyo? masinneun jibeul arayo', 'Đi ăn phở VN không? Tôi biết quán ngon.', '-ㄹ래요?'], ['쌀국수 먹어라.', 'ssalguksu meogeora', 'Ra lệnh.'], ['쌀국수 먹었어요?', 'ssalguksu meogeosseoyo?', 'Sai ý.']),
        T(['좋아요! 몇 시에 만날까요?', 'joayo! myeot sie mannalkkayo?', 'Hay! Mấy giờ gặp nhé?'], ['일곱 시에 회사 앞에서 만날까요?', 'ilgop sie hoesa apeseo mannalkkayo?', '7 giờ gặp trước công ty nhé?', 'Hẹn cụ thể.'], ['일곱 시예요?', 'ilgop siyeyo?', 'Hỏi ngược.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['네, 좋아요. 이따 봐요!', 'ne, joayo. itta bwayo!', 'Được. Lát gặp!'], ['네, 이따 봐요!', 'ne, itta bwayo!', 'Lát gặp!', 'Kết.'], ['안녕히 주무세요.', 'annyeonghi jumuseyo', 'Sai ngữ cảnh.'], ['다음에 가요.', 'daeume gayo', 'Mâu thuẫn.'])
      ], ket: 'Em đã rủ và hẹn đi ăn tự nhiên.'
    },
    tom: ['-(으)ㄹ까요? / -(으)ㅂ시다 / -(으)ㄹ래요?', 'Từ chối khéo'], nguphap: 'Câu rủ rê', phatam: '먹을까요 [머글까요]',
    loi: ['-ㅂ시다 với cấp trên', 'Từ chối cộc lốc'], btvn: ['Viết 5 lời rủ và 3 lời từ chối khéo', 'Đóng vai hẹn gặp 6 lượt', 'Luyện 🎤 3 câu']
  };

  const d24 = {
    n: 24, ten: plan[23].ten, kinds: K,
    muc: 'Nói dự định -(으)려고 하다 (định), mục đích -(으)러 가다/오다 (đi để), -기로 하다 (quyết định).',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ'], [['-(으)려고 해요', '내년에 TOPIK을 보려고 해요.'], ['-(으)러 가요', '책을 사러 서점에 가요.'], ['-기로 했어요', '같이 여행 가기로 했어요.'], ['-(으)려면', '합격하려면 열심히 공부해야 해요. (muốn… thì)']])}`,
    vocab: [
      w('시험을 보다', 'siheomeul boda', 'dự thi', '', ['TOPIK 시험을 볼 거예요.', 'TOPIK siheomeul bol geoyeyo', 'Tôi sẽ thi TOPIK.']),
      w('합격하다', 'hapgyeokhada', 'đỗ', '', ['합격했어요!', 'hapgyeokhaesseoyo!', 'Tôi đỗ rồi!']),
      w('서점', 'seojeom', 'hiệu sách', '', ['서점에 책을 사러 가요.', 'seojeome chaegeul sareo gayo', 'Đến hiệu sách mua sách.']),
      w('저축하다', 'jeochukhada', 'tiết kiệm (tiền)', '', ['돈을 저축하려고 해요.', 'doneul jeochukharyeogo haeyo', 'Tôi định tiết kiệm tiền.']),
      w('이사하다', 'isahada', 'chuyển nhà', '', ['다음 달에 이사하기로 했어요.', 'daeum dare isahagiro haesseoyo', 'Tôi quyết định tháng sau chuyển nhà.']),
      w('운동하다', 'undonghada', 'tập thể dục', '', ['건강하려고 운동해요.', 'geonganghallyeogo undonghaeyo', 'Tập để khoẻ.']),
      w('목표', 'mokpyo', 'mục tiêu', '', ['제 목표는 TOPIK 4급이에요.', 'je mokpyoneun TOPIK sageubieyo', 'Mục tiêu tôi là TOPIK 4.']),
      w('준비하다', 'junbihada', 'chuẩn bị', '', ['시험을 준비하고 있어요.', 'siheomeul junbihago isseoyo', 'Đang chuẩn bị thi.']),
      w('결심하다', 'gyeolsimhada', 'quyết tâm', '', ['담배를 끊기로 결심했어요.', 'dambaereul kkeunkiro gyeolsimhaesseoyo', 'Tôi quyết tâm bỏ thuốc.']),
      w('끊다', 'kkeunta', 'bỏ, cắt', '', ['술을 끊었어요.', 'sureul kkeuneosseoyo', 'Tôi bỏ rượu rồi.'])
    ],
    qs: [
      ['mc', '“Năm sau tôi định thi TOPIK”?', '내년에 TOPIK을 보려고 해요.', ['내년에 TOPIK을 보러 해요.', '내년에 TOPIK 보려고 가요.', '내년에 TOPIK을 봤으려고 해요.'], '-(으)려고 하다.'],
      ['mc', '“Đến hiệu sách để mua sách”?', '책을 사러 서점에 가요.', ['책을 사려고 서점에 해요.', '책을 사고 서점에 가요.', '책 사기로 서점 가요.'], '-(으)러 가다.'],
      ['mc', '“Chúng tôi quyết định đi du lịch cùng”?', '같이 여행 가기로 했어요.', ['같이 여행 가려고 했어요요.', '같이 여행 가러 했어요.', '같이 여행 가기 했어요.'], '-기로 하다.'],
      ['mc', '합격하다 nghĩa là?', 'đỗ', ['hợp tác', 'trượt', 'đăng ký'], 'hapgyeokhada.'],
      ['hear', '합격하려면 매일 두 시간씩 공부해야 해요.', 'Muốn đỗ thì mỗi ngày phải học 2 tiếng.', ['Không cần học.', 'Học 1 tiếng/tuần.', 'Đã đỗ rồi.'], '-(으)려면.'],
      ['order', 'Sắp xếp: “Đang chuẩn bị thi.”', ['시험을', '준비하고', '있어요', '.'], '시험을 준비하고 있어요.']
    ],
    noi: [['내년에 TOPIK 4급을 보려고 해요.', 'naenyeone TOPIK sageubeul boryeogo haeyo – Năm sau tôi định thi TOPIK 4.'], ['책을 사러 서점에 가요.', 'chaegeul sareo seojeome gayo – Đến hiệu sách để mua sách.'], ['매일 공부하기로 결심했어요.', 'maeil gongbuhagiro gyeolsimhaesseoyo – Tôi quyết tâm học mỗi ngày.']],
    hoithoai: {
      ctx: 'Giáo viên tiếng Hàn hỏi em về kế hoạch học tập.', vai: 'Cô hỏi, em trả lời.', ai: '👩‍🏫 선생님',
      luot: [
        T(['앞으로 계획이 뭐예요?', 'apeuro gyehoegi mwoyeyo?', 'Kế hoạch sắp tới là gì?'], ['내년 4월에 TOPIK II를 보려고 해요.', 'naenyeon sawore TOPIK II-reul boryeogo haeyo', 'Tháng 4 năm sau em định thi TOPIK II.', '-(으)려고 하다.'], ['TOPIK 보러 해요.', 'TOPIK boreo haeyo', 'Sai.'], ['계획 없어요.', 'gyehoek eopseoyo', 'Thiếu.']),
        T(['목표가 몇 급이에요?', 'mokpyoga myeot geubieyo?', 'Mục tiêu cấp mấy?'], ['4급이요. 그래서 매일 한 시간씩 공부하기로 했어요.', 'sageubiyo. geuraeseo maeil han siganssik gongbuhagiro haesseoyo', 'Cấp 4 ạ. Vì vậy em quyết định học mỗi ngày 1 tiếng.', '-기로 하다.'], ['4급 할래요.', 'sageup hallaeyo', 'Không tự nhiên.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['좋아요. 4급을 받으려면 쓰기를 많이 연습해야 해요.', 'joayo. sageubeul badeuryeomyeon sseugireul mani yeonseuphaeya haeyo', 'Tốt. Muốn đạt cấp 4 phải luyện viết nhiều.'], ['네, 이번 주말에 문제집을 사러 서점에 갈게요.', 'ne, ibeon jumare munjejibeul sareo seojeome galgeyo', 'Vâng, cuối tuần em sẽ đến hiệu sách mua sách bài tập.', '-(으)러 + hứa.'], ['쓰기 안 해요.', 'sseugi an haeyo', 'Ngược.'], ['서점이 멀어요.', 'seojeomi meoreoyo', 'Lạc.'])
      ], ket: 'Em đã nói kế hoạch học tập rõ ràng.'
    },
    tom: ['-(으)려고 하다', '-(으)러 가다', '-기로 하다', '-(으)려면'], nguphap: 'Dự định và mục đích', phatam: '보려고 [보려고]',
    loi: ['Nhầm -려고 và -러 (러 chỉ đi với 가다/오다)'], btvn: ['Viết kế hoạch 3 tháng tới 6 câu', 'Viết 3 quyết tâm -기로 하다', 'Luyện 🎤 3 câu']
  };

  const d25 = {
    n: 25, ten: plan[24].ten, kinds: K,
    muc: 'Khuyên nhủ, gợi ý: -는 게 좋겠어요, -(으)세요, -지 마세요, -는 게 어때요?',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ'], [['-는 게 좋겠어요', '병원에 가 보는 게 좋겠어요.'], ['-지 마세요', '무리하지 마세요.'], ['-는 게 어때요?', '좀 쉬는 게 어때요?'], ['-(으)면 좋겠어요', '일찍 자면 좋겠어요.']])}`,
    vocab: [
      w('무리하다', 'murihada', 'quá sức', '', ['무리하지 마세요.', 'murihaji maseyo', 'Đừng quá sức.']),
      w('쉬다', 'swida', 'nghỉ', '', ['좀 쉬세요.', 'jom swiseyo', 'Nghỉ chút đi.']),
      w('스트레스', 'seuteureseu', 'căng thẳng', '', ['스트레스를 받아요.', 'seuteureseureul badayo', 'Bị căng thẳng.']),
      w('푹', 'puk', '(ngủ, nghỉ) thật sâu', '', ['푹 자세요.', 'puk jaseyo', 'Ngủ ngon nhé.']),
      w('충분히', 'chungbunhi', 'đầy đủ', '', ['물을 충분히 마시세요.', 'mureul chungbunhi masiseyo', 'Uống đủ nước.']),
      w('상담', 'sangdam', 'tư vấn', '', ['상담을 받아 보세요.', 'sangdameul bada boseyo', 'Thử đi tư vấn xem.']),
      w('고민', 'gomin', 'nỗi lo, trăn trở', '', ['고민이 있어요.', 'gomini isseoyo', 'Tôi có chuyện lo.']),
      w('조언', 'joeon', 'lời khuyên', '', ['조언해 주세요.', 'joeonhae juseyo', 'Khuyên tôi với.']),
      w('규칙적으로', 'gyuchikjeogeuro', 'đều đặn', '', ['규칙적으로 운동하세요.', 'gyuchikjeogeuro undonghaseyo', 'Tập đều đặn.']),
      w('걱정하다', 'geokjeonghada', 'lo lắng', '', ['걱정하지 마세요.', 'geokjeonghaji maseyo', 'Đừng lo.'])
    ],
    qs: [
      ['mc', '“Bạn nên đi khám thử thì hơn”?', '병원에 가 보는 게 좋겠어요.', ['병원에 가 보면 좋겠어요요.', '병원에 가지 마세요.', '병원에 갈까 봐요.'], '-는 게 좋겠어요.'],
      ['mc', '“Đừng quá sức”?', '무리하지 마세요.', ['무리하세요.', '무리하는 게 좋겠어요.', '무리 안 마세요.'], '-지 마세요.'],
      ['mc', 'Gợi ý mềm “Nghỉ chút thì sao?”', '좀 쉬는 게 어때요?', ['좀 쉬어라.', '쉬지 마세요.', '쉬었어요?'], '-는 게 어때요?'],
      ['hear', '스트레스를 많이 받으면 상담을 받아 보는 게 좋겠어요.', 'Nếu căng thẳng nhiều thì nên thử đi tư vấn.', ['Đừng đi tư vấn.', 'Căng thẳng là bình thường, kệ đi.', 'Hãy làm thêm giờ.'], 'Khuyên.'],
      ['hear', '걱정하지 마세요. 잘될 거예요.', 'Đừng lo, sẽ ổn thôi.', ['Hãy lo lắng.', 'Sẽ tệ.', 'Tôi cũng lo.'], 'Động viên.'],
      ['order', 'Sắp xếp: “Tập đều đặn.”', ['규칙적으로', '운동하세요', '.'], '규칙적으로 운동하세요.']
    ],
    noi: [['무리하지 마세요.', 'murihaji maseyo – Đừng quá sức nhé.'], ['좀 쉬는 게 어때요?', 'jom swineun ge eottaeyo? – Nghỉ chút thì sao?'], ['걱정하지 마세요. 잘될 거예요.', 'geokjeonghaji maseyo. jaldoel geoyeyo – Đừng lo, sẽ ổn thôi.']],
    hoithoai: {
      ctx: 'Đồng nghiệp Hàn trẻ than mệt vì làm thêm nhiều.', vai: 'Bạn than, em khuyên.', ai: '😮‍💨 동욱',
      luot: [
        T(['요즘 야근을 많이 해서 너무 피곤해요.', 'yojeum yageuneul mani haeseo neomu pigonhaeyo', 'Dạo này làm tối nhiều, mệt quá.'], ['무리하지 마세요. 주말에는 푹 쉬는 게 좋겠어요.', 'murihaji maseyo. jumareneun puk swineun ge jokesseoyo', 'Đừng quá sức. Cuối tuần nên nghỉ ngơi thật kỹ.', 'Khuyên.'], ['더 야근하세요.', 'deo yageunhaseyo', 'Ngược.'], ['피곤하지 마세요.', 'pigonhaji maseyo', 'Sai: không dùng 지 마세요 với tính từ.']),
        T(['스트레스도 많이 받아요.', 'seuteureseudo mani badayo', 'Cũng căng thẳng nhiều.'], ['그럼 운동을 해 보는 게 어때요? 저는 걸으면 기분이 좋아져요.', 'geureom undongeul hae boneun ge eottaeyo? jeoneun georeumyeon gibuni joajyeoyo', 'Vậy thử tập thể dục xem? Tôi đi bộ là thấy dễ chịu hơn.', 'Gợi ý + chia sẻ.'], ['스트레스 받으세요.', 'seuteureseu badeuseyo', 'Ngược.'], ['몰라요.', 'mollayo', 'Thờ ơ.']),
        T(['고마워요. 한번 해 볼게요.', 'gomawoyo. hanbeon hae bolgeyo', 'Cảm ơn. Tôi sẽ thử.'], ['힘들면 언제든지 이야기하세요.', 'himdeulmyeon eonjedeunji iyagihaseyo', 'Mệt thì cứ nói chuyện với tôi bất cứ lúc nào.', 'Quan tâm.'], ['네, 수고하셨습니다.', 'ne, sugohasyeotseumnida', 'Lạc ngữ cảnh.'], ['하지 마세요.', 'haji maseyo', 'Ngược.'])
      ], ket: 'Em đã khuyên nhủ đồng nghiệp chân thành.'
    },
    tom: ['-는 게 좋겠어요', '-지 마세요', '-는 게 어때요?'], nguphap: 'Câu khuyên', phatam: '좋겠어요 [조케써요]',
    loi: ['-지 마세요 với tính từ'], btvn: ['Viết lời khuyên cho 4 tình huống', 'Viết tin nhắn động viên bạn', 'Luyện 🎤 3 câu']
  };

  const d26 = {
    n: 26, ten: plan[25].ten, kinds: K,
    muc: 'Gọi điện công việc: giới thiệu, xin gặp, để lại lời nhắn, hẹn gọi lại, xác nhận thông tin.',
    hoc: `${tbl(['Tình huống', 'Mẫu'], [['Mở đầu', '안녕하세요, 저는 PLT 회사의 민입니다.'], ['Xin gặp', '김 과장님과 통화할 수 있을까요?'], ['Vắng mặt', '지금 자리에 안 계십니다.'], ['Lời nhắn', '메모 남겨 드릴까요?'], ['Gọi lại', '다시 전화드리겠습니다.']])}`,
    vocab: [
      w('통화하다', 'tonghwahada', 'nói chuyện điện thoại', '', ['통화할 수 있어요?', 'tonghwahal su isseoyo?', 'Nói chuyện được không?']),
      w('자리', 'jari', 'chỗ ngồi', '', ['자리에 안 계세요.', 'jarie an gyeseyo', 'Không có ở chỗ ngồi.']),
      w('메모', 'memo', 'lời nhắn', '', ['메모 남겨 주세요.', 'memo namgyeo juseyo', 'Để lại lời nhắn.']),
      w('남기다', 'namgida', 'để lại', '', ['메시지를 남겼어요.', 'mesijireul namgyeosseoyo', 'Đã để lại tin nhắn.']),
      w('전화드리다', 'jeonhwadeurida', 'gọi điện (kính ngữ)', '', ['다시 전화드리겠습니다.', 'dasi jeonhwadeurigesseumnida', 'Tôi sẽ gọi lại.']),
      w('잠시만요', 'jamsimanyo', 'xin chờ chút', '', ['잠시만요, 연결해 드릴게요.', 'jamsimanyo, yeongyeolhae deurilgeyo', 'Xin chờ, tôi nối máy.']),
      w('연결하다', 'yeongyeolhada', 'nối máy, kết nối', '', ['담당자에게 연결해 주세요.', 'damdangjaege yeongyeolhae juseyo', 'Nối máy cho người phụ trách.']),
      w('담당자', 'damdangja', 'người phụ trách', '', ['담당자가 누구예요?', 'damdangjaga nuguyeyo?', 'Ai phụ trách?']),
      w('번호', 'beonho', 'số', '', ['번호를 다시 말씀해 주세요.', 'beonhoreul dasi malsseumhae juseyo', 'Xin nhắc lại số.']),
      w('확인하다', 'hwaginhada', 'xác nhận', '', ['확인해 보겠습니다.', 'hwaginhae bogesseumnida', 'Tôi sẽ kiểm tra.'])
    ],
    qs: [
      ['mc', 'Xin nói chuyện với trưởng bộ phận Kim?', '김 과장님과 통화할 수 있을까요?', ['김 과장 바꿔.', '김 과장 있어?', '김 과장님 누구예요?'], 'Lịch sự.'],
      ['mc', '자리에 안 계십니다 = ?', 'Không có ở chỗ ngồi', ['Đang ngồi', 'Đã nghỉ việc', 'Đang họp'], 'Vắng mặt.'],
      ['mc', 'Hứa gọi lại (trang trọng)?', '다시 전화드리겠습니다.', ['다시 전화할래?', '전화하지 마세요.', '전화 줘.'], 'Kính ngữ.'],
      ['hear', '지금 회의 중이십니다. 메모 남겨 드릴까요?', 'Hiện đang họp. Tôi để lại lời nhắn nhé?', ['Đang nghỉ trưa.', 'Đã về.', 'Nối máy ngay.'], '회의 중.'],
      ['hear', '담당자에게 연결해 드리겠습니다. 잠시만요.', 'Tôi sẽ nối máy cho người phụ trách. Xin chờ.', ['Không có người phụ trách.', 'Gọi lại sau.', 'Tôi phụ trách.'], '연결.'],
      ['order', 'Sắp xếp: “Xin nhắc lại số.”', ['번호를', '다시', '말씀해', '주세요.'], '번호를 다시 말씀해 주세요.']
    ],
    noi: [['안녕하세요, PLT 회사의 민입니다.', 'annyeonghaseyo, PLT hoesaui Minimnida – Xin chào, tôi là Minh công ty PLT.'], ['김 과장님과 통화할 수 있을까요?', 'Gim gwajangnimgwa tonghwahal su isseulkkayo? – Cho tôi nói chuyện với trưởng bộ phận Kim được không?'], ['다시 전화드리겠습니다.', 'dasi jeonhwadeurigesseumnida – Tôi sẽ gọi lại.']],
    hoithoai: {
      ctx: 'Em gọi cho nhà cung cấp Hàn Quốc hỏi về đơn hàng thiết bị.', vai: 'Lễ tân trả lời, em hỏi.', ai: '📞 접수 직원',
      luot: [
        T(['네, 한빛전자입니다.', 'ne, Hanbit Jeonjaimnida', 'Vâng, công ty điện tử Hanbit xin nghe.'], ['안녕하세요. 베트남 PLT 회사의 민입니다. 이 과장님과 통화할 수 있을까요?', 'annyeonghaseyo. Beteunam PLT hoesaui Minimnida. I gwajangnimgwa tonghwahal su isseulkkayo?', 'Xin chào, tôi là Minh công ty PLT Việt Nam. Cho tôi gặp trưởng bộ phận Lee?', 'Chuẩn.'], ['이 과장 바꿔.', 'I gwajang bakkwo', 'Thô.'], ['누구세요?', 'nuguseyo?', 'Ngược vai.']),
        T(['죄송하지만 지금 회의 중이십니다.', 'joesonghajiman jigeum hoeui jungisimnida', 'Xin lỗi, hiện đang họp.'], ['그럼 메모 좀 남겨 주시겠어요? 주문 건으로 전화했다고 전해 주세요.', 'geureom memo jom namgyeo jusigesseoyo? jumun geoneuro jeonhwahaetdago jeonhae juseyo', 'Vậy để lại lời nhắn giúp? Báo là tôi gọi về đơn hàng.', 'Lời nhắn rõ.'], ['언제 끝나?', 'eonje kkeunna?', 'Trống không.'], ['그럼 됐어요.', 'geureom dwaesseoyo', 'Bỏ dở.']),
        T(['네, 연락처를 말씀해 주시겠어요?', 'ne, yeollakcheoreul malsseumhae jusigesseoyo?', 'Vâng, xin cho số liên lạc?'], ['플러스 팔사, 구공일의 이삼사의 오육칠팔입니다.', 'peulleoseu palsa, gugongirui isamsaui oyukchilparimnida', '+84 901-234-5678 ạ. (số minh hoạ)', 'Đọc số rõ ràng.'], ['몰라요.', 'mollayo', 'Thiếu.'], ['비밀이에요.', 'bimirieyo', 'Không hợp.'])
      ], ket: 'Em đã gọi điện công việc chuyên nghiệp.'
    },
    tom: ['통화할 수 있을까요?', '자리에 안 계십니다 / 메모 남기다', '다시 전화드리겠습니다'], nguphap: 'Điện thoại công việc', phatam: 'Đọc số điện thoại từng chữ số',
    loi: ['Dùng 반말 qua điện thoại'], btvn: ['Viết kịch bản gọi điện 8 lượt', 'Tập đọc số điện thoại bằng tiếng Hàn', 'Luyện 🎤 3 câu']
  };

  const d27 = {
    n: 27, ten: plan[26].ten, kinds: K,
    muc: 'Luyện dạng đọc TOPIK I: tìm chủ đề, đọc thông báo/biển báo, chọn câu đúng với nội dung, điền từ.',
    hoc: `${tbl(['Dạng bài', 'Mẹo'], [['Chủ đề (무엇에 대한 내용)', 'Tìm danh từ lặp lại: 날씨, 가족, 쇼핑…'], ['Biển báo, thông báo', 'Đọc thời gian, địa điểm, giá, điều kiện'], ['Đúng với nội dung', 'Loại đáp án sai chi tiết (số, ngày, người)'], ['Điền vào chỗ trống', 'Xem từ nối trước/sau: 그래서, 하지만, 그리고']])}
      ${tip('📌 TOPIK I gồm Nghe + Đọc, tổng 200 điểm: cấp 1 ≥ 80, cấp 2 ≥ 140 (tham khảo, xem quy định mới nhất trên topik.go.kr).')}`,
    vocab: [
      w('내용', 'naeyong', 'nội dung', '', ['내용과 같은 것을 고르세요.', 'naeyonggwa gateun geoseul goreuseyo', 'Chọn câu giống nội dung.']),
      w('고르다', 'goreuda', 'chọn', '', ['알맞은 것을 고르세요.', 'almajeun geoseul goreuseyo', 'Chọn đáp án phù hợp.']),
      w('알맞다', 'almatda', 'phù hợp', '', ['알맞은 단어', 'almajeun daneo', 'từ phù hợp']),
      w('안내', 'annae', 'hướng dẫn, thông báo', '', ['안내문을 읽으세요.', 'annaemuneul ilgeuseyo', 'Đọc thông báo.']),
      w('기간', 'gigan', 'thời gian, kỳ hạn', '', ['신청 기간', 'sincheong gigan', 'thời gian đăng ký']),
      w('신청', 'sincheong', 'đăng ký', '', ['신청하세요.', 'sincheonghaseyo', 'Hãy đăng ký.']),
      w('장소', 'jangso', 'địa điểm', '', ['장소가 어디예요?', 'jangsoga eodiyeyo?', 'Địa điểm ở đâu?']),
      w('참가', 'chamga', 'tham gia', '', ['참가비는 무료입니다.', 'chamgabineun muryoimnida', 'Phí tham gia miễn phí.']),
      w('단어', 'daneo', 'từ vựng', '', ['단어를 외워요.', 'daneoreul oewoyo', 'Học thuộc từ.']),
      w('문장', 'munjang', 'câu văn', '', ['문장을 읽으세요.', 'munjangeul ilgeuseyo', 'Đọc câu.'])
    ],
    qs: [
      ['mc', 'Đoạn: 저는 주말마다 시장에 가요. 과일과 채소를 사요. 무엇에 대한 내용입니까?', '쇼핑', ['날씨', '가족', '여행'], 'Chủ đề mua sắm.'],
      ['mc', 'Thông báo: “한국어 교실 – 매주 토요일 10시, 참가비 무료”. Câu đúng?', '토요일에 수업이 있어요.', ['참가비가 있어요.', '일요일에 해요.', '오후 10시에 해요.'], 'Đọc chi tiết.'],
      ['mc', '비가 왔어요. ( ) 우산을 썼어요.', '그래서', ['하지만', '그런데도', '그리고는'], 'Nhân quả.'],
      ['mc', '고르다 nghĩa là?', 'chọn', ['sửa', 'đọc', 'viết'], 'goreuda.'],
      ['hear', '신청 기간은 이번 달 말까지입니다.', 'Hạn đăng ký đến cuối tháng này.', ['Đến đầu tháng sau.', 'Hôm nay hết hạn.', 'Không cần đăng ký.'], '기간.'],
      ['order', 'Sắp xếp: “Chọn đáp án phù hợp.”', ['알맞은', '것을', '고르세요', '.'], '알맞은 것을 고르세요.']
    ],
    noi: [['신청 기간이 언제까지예요?', 'sincheong gigani eonjekkajiyeyo? – Hạn đăng ký đến khi nào?'], ['참가비는 무료입니다.', 'chamgabineun muryoimnida – Phí tham gia miễn phí.'], ['장소가 어디예요?', 'jangsoga eodiyeyo? – Địa điểm ở đâu?']],
    hoithoai: {
      ctx: 'Em đọc thông báo lớp học miễn phí ở trung tâm văn hoá rồi gọi hỏi.', vai: 'Nhân viên trả lời, em hỏi chi tiết.', ai: '🏢 문화센터',
      luot: [
        T(['네, 문화센터입니다.', 'ne, munhwasenteoimnida', 'Vâng, trung tâm văn hoá xin nghe.'], ['한국 요리 교실 안내를 봤는데요, 신청 기간이 언제까지예요?', 'hanguk yori gyosil annaereul bwanneundeyo, sincheong gigani eonjekkajiyeyo?', 'Tôi xem thông báo lớp nấu ăn Hàn, hạn đăng ký đến khi nào?', 'Hỏi chi tiết.'], ['요리 해요?', 'yori haeyo?', 'Mơ hồ.'], ['몰라요.', 'mollayo', 'Sai.']),
        T(['이번 달 25일까지입니다.', 'ibeon dal isibo-ilkkajiimnida', 'Đến ngày 25 tháng này.'], ['참가비가 있어요? 그리고 장소는 어디예요?', 'chamgabiga isseoyo? geurigo jangsoneun eodiyeyo?', 'Có phí không? Và địa điểm ở đâu?', 'Hỏi tiếp.'], ['15일이요?', 'sibo-iriyo?', 'Nghe nhầm.'], ['다음 달이요?', 'daeum dariyo?', 'Nghe nhầm.']),
        T(['무료이고, 센터 3층에서 해요.', 'muryoigo, senteo samcheungeseo haeyo', 'Miễn phí, ở tầng 3 trung tâm.'], ['감사합니다. 지금 신청할게요.', 'gamsahamnida. jigeum sincheonghalgeyo', 'Cảm ơn. Tôi đăng ký luôn.', 'Hành động.'], ['비싸요.', 'bissayo', 'Mâu thuẫn.'], ['4층이요?', 'sacheungiyo?', 'Nghe nhầm.'])
      ], ket: 'Em đã đọc thông báo và hỏi đủ thông tin.'
    },
    tom: ['Tìm chủ đề', 'Đọc chi tiết thông báo', 'Điền từ nối'], nguphap: 'Kỹ năng đọc TOPIK I', phatam: '신청 [신청]',
    loi: ['Chọn theo cảm giác, không đối chiếu chi tiết'], btvn: ['Làm 20 câu đọc TOPIK I đề cũ', 'Ghi lại 10 từ mới gặp', 'Luyện 🎤 3 câu']
  };

  const LK = ['listen', 'listenWord', 'listen', 'meaning', 'pinyin'];
  const d28 = {
    n: 28, ten: plan[27].ten, tong: 1, kt: { n: 20, min: 20 }, kinds: LK,
    muc: 'Luyện nghe dạng TOPIK I: chọn câu đáp phù hợp, nghe nơi chốn, nghe ý chính hội thoại ngắn.',
    hoc: `${tbl(['Dạng', 'Mẹo'], [['Câu đáp phù hợp', 'Nghe đuôi câu hỏi: -아요? / -(으)ㄹ까요? / 어디? / 언제?'], ['Nơi chốn', 'Nghe từ khoá: 표 (ga), 약 (nhà thuốc), 머리 (tiệm cắt tóc)'], ['Ý chính', 'Câu cuối của người nói thứ hai thường là ý chính']])}`,
    vocab: [
      w('표', 'pyo', 'vé', '', ['표 두 장 주세요.', 'pyo du jang juseyo', 'Cho 2 vé.']),
      w('미용실', 'miyongsil', 'tiệm làm tóc', '', ['미용실에 가요.', 'miyongsire gayo', 'Đi làm tóc.']),
      w('자르다', 'jareuda', 'cắt', '', ['머리를 잘랐어요.', 'meorireul jallasseoyo', 'Tôi cắt tóc rồi.']),
      w('도서관', 'doseogwan', 'thư viện', '', ['도서관에서 공부해요.', 'doseogwaneseo gongbuhaeyo', 'Học ở thư viện.']),
      w('빌리다', 'billida', 'mượn', '', ['책을 빌렸어요.', 'chaegeul billyeosseoyo', 'Tôi mượn sách.']),
      w('공항', 'gonghang', 'sân bay', '', ['공항에 가는 버스', 'gonghange ganeun beoseu', 'xe buýt ra sân bay']),
      w('출발', 'chulbal', 'khởi hành', '', ['몇 시에 출발해요?', 'myeot sie chulbalhaeyo?', 'Mấy giờ khởi hành?']),
      w('도착', 'dochak', 'đến nơi', '', ['언제 도착해요?', 'eonje dochakhaeyo?', 'Khi nào đến?']),
      w('안내 방송', 'annae bangsong', 'thông báo loa', '', ['안내 방송을 들으세요.', 'annae bangsongeul deureuseyo', 'Nghe thông báo.']),
      w('갈아타다', 'garatada', 'chuyển (tàu, xe)', '', ['다음 역에서 갈아타세요.', 'daeum yeogeseo garataseyo', 'Chuyển tàu ở ga sau.'])
    ],
    qs: [
      ['hear', '머리를 어떻게 잘라 드릴까요?', 'Cắt tóc thế nào ạ? (ở tiệm tóc)', ['Ở thư viện.', 'Ở sân bay.', 'Ở ngân hàng.'], '미용실.'],
      ['hear', '이 책을 2주 동안 빌릴 수 있어요.', 'Có thể mượn sách này 2 tuần.', ['Mua sách.', 'Mượn 2 ngày.', 'Không được mượn.'], '도서관.'],
      ['hear', '이번 역은 시청역입니다. 1호선으로 갈아타실 분은 이번 역에서 내리세요.', 'Ga này là City Hall. Ai chuyển tuyến 1 xin xuống ga này.', ['Tuyến 2.', 'Ga sau chuyển.', 'Không có chuyển tuyến.'], 'Thông báo tàu.'],
      ['hear', '공항 가는 버스는 30분마다 출발해요.', 'Xe buýt ra sân bay 30 phút một chuyến.', ['3 phút một chuyến.', '1 tiếng một chuyến.', 'Không có xe.'], 'Nghe số.'],
      ['mc', '갈아타다 nghĩa là?', 'chuyển (tàu, xe)', ['xuống xe', 'lên xe', 'đi bộ'], 'garatada.'],
      ['order', 'Sắp xếp: “Mấy giờ khởi hành?”', ['몇 시에', '출발해요', '?'], '몇 시에 출발해요?']
    ],
    noi: [['어디에서 갈아타요?', 'eodieseo garatayo? – Chuyển tàu ở đâu?'], ['몇 시에 도착해요?', 'myeot sie dochakhaeyo? – Mấy giờ đến?'], ['책을 빌리고 싶어요.', 'chaegeul billigo sipeoyo – Tôi muốn mượn sách.']],
    hoithoai: {
      ctx: 'Em đi tàu điện ngầm ở Seoul đến sân bay Gimpo, hỏi nhân viên ga.', vai: 'Nhân viên trả lời, em hỏi.', ai: '🚇 역무원',
      luot: [
        T(['무엇을 도와드릴까요?', 'mueoseul dowadeurilkkayo?', 'Tôi giúp gì được?'], ['김포공항에 가려면 어떻게 가요?', 'Gimpo gonghange garyeomyeon eotteoke gayo?', 'Muốn đến sân bay Gimpo thì đi thế nào?', '-(으)려면.'], ['공항이에요?', 'gonghangieyo?', 'Mơ hồ.'], ['공항 가요.', 'gonghang gayo', 'Thiếu câu hỏi.']),
        T(['5호선을 타고 가시면 돼요. 다음 역에서 갈아타세요.', 'ohoseoneul tago gasimyeon dwaeyo. daeum yeogeseo garataseyo', 'Đi tuyến 5. Chuyển tàu ở ga sau.'], ['다음 역에서 5호선으로 갈아타면 되죠?', 'daeum yeogeseo ohoseoneuro garatamyeon doejyo?', 'Chuyển sang tuyến 5 ở ga sau, đúng không?', 'Xác nhận.'], ['2호선이요?', 'ihoseoniyo?', 'Nghe nhầm.'], ['이번 역이요?', 'ibeon yeogiyo?', 'Nghe nhầm.']),
        T(['네, 맞아요. 30분쯤 걸려요.', 'ne, majayo. samsip bunjjeum geollyeoyo', 'Đúng. Mất khoảng 30 phút.'], ['감사합니다!', 'gamsahamnida!', 'Cảm ơn!', 'Kết.'], ['3시간이요?', 'sam siganiyo?', 'Nghe nhầm.'], ['안 가요.', 'an gayo', 'Lạc.'])
      ], ket: 'Em đã nghe hướng dẫn đi tàu và xác nhận lại.'
    },
    tom: ['Nghe từ khoá nơi chốn', 'Nghe đuôi câu hỏi', 'Xác nhận -죠?'], nguphap: 'Kỹ năng nghe TOPIK I', phatam: '갈아타다 [가라타다]',
    loi: ['Nghe nhầm số tuyến, số phút'], btvn: ['Làm 20 câu nghe TOPIK I đề cũ', 'Nghe thông báo tàu điện Seoul trên mạng', 'Luyện 🎤 3 câu']
  };

  const d29 = {
    n: 29, ten: plan[28].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Mô phỏng chuỗi tình huống: phỏng vấn, đi khám, gọi điện, rủ đi chơi, xin phép – phản xạ dưới 5 giây.',
    hoc: `<p>Hôm nay không có từ mới. Làm hội thoại 3 lần, nói to trước khi chọn, rồi bấm 🎤 để chấm.</p>`,
    qs: [['mc', 'Bác sĩ hỏi 어디가 아프세요?, em đáp?', '목이 아프고 열이 나요.', ['네, 아파요요.', '병원이에요.', '안녕하세요.'], 'Triệu chứng.'], ['mc', 'Rủ đồng nghiệp ăn trưa?', '같이 점심 먹을까요?', ['점심 먹어.', '점심 먹었어요?', '점심이에요.'], 'Rủ rê.']],
    noi: [['다시 전화드리겠습니다.', 'dasi jeonhwadeurigesseumnida – Tôi sẽ gọi lại.'], ['같이 점심 먹을까요?', 'gachi jeomsim meogeulkkayo? – Cùng ăn trưa nhé?']],
    hoithoai: {
      ctx: 'Một ngày làm việc ở văn phòng Hàn Quốc từ sáng đến tối.', vai: 'Nhiều người nói, em đáp liên tục.', ai: '🎭 여러 사람',
      luot: [
        T(['（부장님）어제 보고서 보냈어요?', '(Bujangnim) eoje bogoseo bonaesseoyo?', '(Trưởng phòng) Hôm qua gửi báo cáo chưa?'], ['네, 어젯밤에 메일로 보내 드렸습니다. 확인해 주시겠습니까?', 'ne, eojetbame meillo bonae deuryeotseumnida. hwaginhae jusigesseumnikka?', 'Vâng, tối qua em đã gửi mail. Anh kiểm tra giúp được không ạ?', 'Trang trọng.'], ['응, 보냈어.', 'eung, bonaesseo', 'Trống không.'], ['보낼 거예요?', 'bonael geoyeyo?', 'Sai.']),
        T(['（동료）점심 같이 먹을래요?', '(Dongnyo) jeomsim gachi meogeullaeyo?', '(Đồng nghiệp) Ăn trưa cùng không?'], ['좋아요! 회사 근처에 맛있는 비빔밥 집이 있는데 가 볼까요?', 'joayo! hoesa geuncheoe masinneun bibimbap jibi inneunde ga bolkkayo?', 'Được! Gần công ty có quán bibimbap ngon, đi thử nhé?', 'Rủ + -아 보다.'], ['싫어요.', 'sireoyo', 'Cộc.'], ['점심 있어요.', 'jeomsim isseoyo', 'Vô nghĩa.']),
        T(['（오후, 거래처）과장님 자리에 계세요?', '(Ohu, georaecheo) gwajangnim jarie gyeseyo?', '(Chiều, đối tác) Trưởng bộ phận có ở chỗ không?'], ['지금 회의 중이십니다. 메모 남겨 드릴까요?', 'jigeum hoeui jungisimnida. memo namgyeo deurilkkayo?', 'Hiện đang họp. Để lại lời nhắn nhé?', 'Điện thoại.'], ['없어.', 'eopseo', 'Trống không.'], ['몰라요.', 'mollayo', 'Thiếu.'])
      ], ket: 'Em đã xử lý trọn một ngày làm việc bằng tiếng Hàn!'
    },
    tom: ['Phản xạ < 5 giây', 'Chuyển văn phong theo người nghe'], nguphap: 'Tổng hợp', phatam: 'Ngữ điệu câu hỏi, câu rủ',
    loi: ['Dùng 반말 với người không thân'], btvn: ['Làm lại hội thoại 3 lần', 'Tự ghi âm một ngày làm việc 1 phút', 'Chuẩn bị bài kiểm tra cuối khoá']
  };

  const d30 = {
    n: 30, ten: plan[29].ten, vocab: [], tong: 1, kt: { n: 30, min: 30 }, kinds: K,
    muc: 'Kiểm tra cuối khoá TOPIK I cấp 2 (30 câu) và lên lộ trình TOPIK II.',
    hoc: `<h4>🏁 Hoàn thành cấp 2!</h4>${tbl(['Đã học', 'Tiếp theo ở TOPIK II cấp 3'], [['Kính ngữ, bất quy tắc, nối câu', 'Đuôi nối nâng cao: -는데, -(으)ㄴ/는데도, -더니'], ['Muốn, có thể, phải, cấm', 'Gián tiếp: -다고 하다, -냐고 하다'], ['Đời sống ở Hàn', 'Đọc tin tức, viết đoạn văn 200–300 chữ'], ['~800 từ', '~1500–2000 từ']])}
      ${tip('📌 Hãy thử một đề TOPIK I thật (nghe + đọc, 200 điểm) để biết điểm thực tế trước khi lên cấp 3.')}`,
    qs: [['mc', '덥다 → quá khứ?', '더웠어요', ['덥었어요', '더았어요', '덥웠어요'], 'ㅂ bất quy tắc.'], ['mc', '“Tôi từng đến Jeju”?', '제주도에 간 적이 있어요.', ['제주도에 가는 적이 있어요.', '제주도에 갈 적 있어요.', '제주도 가고 적 있어요.'], 'Kinh nghiệm.'], ['mc', 'Giám đốc có ở đây không? (kính ngữ)', '사장님 계세요?', ['사장님 있어?', '사장 있어요?', '사장님 있으세요요?'], '계시다.']],
    noi: [['저는 한국어 2급을 끝냈어요.', 'jeoneun hangugeo igeubeul kkeunnaesseoyo – Tôi đã học xong tiếng Hàn cấp 2.'], ['내년에 TOPIK II를 보려고 해요.', 'naenyeone TOPIK II-reul boryeogo haeyo – Năm sau tôi định thi TOPIK II.']],
    hoithoai: {
      ctx: 'Buổi tổng kết khoá học với cô giáo.', vai: 'Cô hỏi, em trả lời.', ai: '👩‍🏫 박 선생님',
      luot: [
        T(['이번 과정에서 뭐가 제일 어려웠어요?', 'ibeon gwajeongeseo mwoga jeil eoryeowosseoyo?', 'Khoá này phần nào khó nhất?'], ['불규칙 동사가 제일 어려웠지만 지금은 많이 익숙해졌어요.', 'bulgyuchik dongsaga jeil eoryeowotjiman jigeumeun mani iksukhaejyeosseoyo', 'Động từ bất quy tắc khó nhất, nhưng giờ quen nhiều rồi.', 'Kết hợp ngữ pháp.'], ['다 쉬웠어요.', 'da swiwosseoyo', 'Thiếu thật.'], ['어렵어요.', 'eoryeobeoyo', 'Sai chia.']),
        T(['한국어로 제일 하고 싶은 게 뭐예요?', 'hangugeoro jeil hago sipeun ge mwoyeyo?', 'Muốn làm gì nhất bằng tiếng Hàn?'], ['한국 회사 사람들과 통역 없이 회의하고 싶어요.', 'hanguk hoesa saramdeulgwa tongyeok eopsi hoeuihago sipeoyo', 'Em muốn họp với người Hàn mà không cần phiên dịch.', 'Mục tiêu.'], ['몰라요.', 'mollayo', 'Thiếu.'], ['하고 싶어해요.', 'hago sipeohaeyo', 'Sai ngôi.']),
        T(['그럼 다음 계획은요?', 'geureom daeum gyehoegeunyo?', 'Vậy kế hoạch tiếp?'], ['3급 과정을 시작하고 내년에 TOPIK II를 보기로 했어요.', 'samgeup gwajeongeul sijakhago naenyeone TOPIK II-reul bogiro haesseoyo', 'Em quyết định học tiếp cấp 3 và năm sau thi TOPIK II.', '-기로 하다.'], ['그만할게요.', 'geumanhalgeyo', 'Bỏ dở.'], ['계획 없었어요.', 'gyehoek eopseosseoyo', 'Sai.'])
      ], ket: 'Chúc mừng em đã hoàn thành cấp 2 – TOPIK I cấp 2! 🎉'
    },
    tom: ['Kiểm tra 30 câu', 'Lộ trình TOPIK II'], nguphap: 'Tổng ôn toàn khoá', phatam: 'Ôn biến âm',
    loi: ['Xem lại các câu sai trong báo cáo'], btvn: ['Làm 1 đề TOPIK I thật', 'Ôn lại 3 ngày điểm thấp nhất', 'Bắt đầu cấp 3 – TOPIK II cấp 3']
  };

  Z.days.push(d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30);
})();

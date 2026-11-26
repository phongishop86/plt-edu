/* PLT-Edu · Tiếng Hàn – Cấp 3 (TOPIK II · cấp 3): Ngày 15–30 */
(function () {
  'use strict';
  const Z = window.PLT_KO3; if (!Z) return;
  const { w, T, tbl, tip, exs, K } = Z.H;
  const plan = Z.plan;

  const d15 = {
    n: 15, ten: plan[14].ten, kinds: K,
    muc: 'Đọc – nói về tin tức xã hội: tiêu đề báo, từ vựng thời sự, tóm tắt tin bằng câu gián tiếp.',
    hoc: `${tbl(['Tiêu đề báo (rút gọn)', 'Câu đầy đủ'], [['물가 상승… 서민 부담 커져', '물가가 올라서 서민들의 부담이 커지고 있다.'], ['청년 취업난 심각', '청년들이 취업하기가 매우 어렵다.'], ['1인 가구 증가', '혼자 사는 가구가 늘고 있다.']])}
      ${tip('🔑 Tiêu đề báo Hàn thường bỏ đuôi câu, kết thúc bằng danh từ hoặc gốc động từ. Hãy "mở rộng" thành câu đầy đủ để hiểu.')}`,
    vocab: [
      w('사회', 'sahoe', 'xã hội', '', ['사회 문제', 'sahoe munje', 'vấn đề xã hội']),
      w('서민', 'seomin', 'người dân thường', '', ['서민의 생활이 어렵다.', 'seominui saenghwari eoryeopda', 'Đời sống người dân khó khăn.']),
      w('상승', 'sangseung', 'tăng lên', '', ['가격 상승', 'gagyeok sangseung', 'giá tăng']),
      w('부담', 'budam', 'gánh nặng', '', ['부담이 커요.', 'budami keoyo', 'Gánh nặng lớn.']),
      w('취업난', 'chwieopnan', 'khó khăn tìm việc', '', ['청년 취업난이 심각하다.', 'cheongnyeon chwieomnani simgakhada', 'Thanh niên khó tìm việc nghiêm trọng.']),
      w('청년', 'cheongnyeon', 'thanh niên', '', ['청년 정책', 'cheongnyeon jeongchaek', 'chính sách thanh niên']),
      w('가구', 'gagu', 'hộ gia đình', '', ['1인 가구가 늘고 있다.', 'irin gaguga neulgo itda', 'Hộ một người đang tăng.']),
      w('늘다', 'neulda', 'tăng lên', '', ['인구가 늘었다.', 'inguga neureotda', 'Dân số tăng.']),
      w('줄다', 'julda', 'giảm', '', ['출산율이 줄고 있다.', 'chulsanyuri julgo itda', 'Tỷ lệ sinh đang giảm.']),
      w('심각하다', 'simgakhada', 'nghiêm trọng', '', ['문제가 심각해요.', 'munjega simgakhaeyo', 'Vấn đề nghiêm trọng.'])
    ],
    qs: [
      ['mc', 'Tiêu đề “1인 가구 증가” nghĩa là?', 'Hộ một người đang tăng', ['Hộ gia đình giảm', 'Một người mua đồ', 'Giá nhà tăng'], 'Mở rộng tiêu đề.'],
      ['mc', '늘다 ↔ ?', '줄다', ['오르다', '많다', '크다'], 'Tăng ↔ giảm.'],
      ['mc', '취업난 = ?', 'khó khăn tìm việc', ['nghỉ việc', 'tuyển dụng', 'việc làm thêm'], 'chwieopnan.'],
      ['hear', '물가가 계속 올라서 서민들의 부담이 커지고 있대요.', 'Nghe nói vật giá tăng liên tục, gánh nặng người dân ngày càng lớn.', ['Vật giá giảm.', 'Người dân dư dả.', 'Không thay đổi.'], 'Gián tiếp tin tức.'],
      ['hear', '출산율이 해마다 줄고 있어서 걱정이에요.', 'Tỷ lệ sinh giảm mỗi năm nên đáng lo.', ['Tỷ lệ sinh tăng.', 'Không đáng lo.', 'Dân số trẻ hoá.'], '줄다.'],
      ['order', 'Sắp xếp: “Vấn đề nghiêm trọng.”', ['문제가', '심각해요', '.'], '문제가 심각해요.']
    ],
    noi: [['요즘 물가가 많이 올랐대요.', 'yojeum mulgaga mani ollatdaeyo – Nghe nói dạo này vật giá tăng nhiều.'], ['청년 취업난이 심각해요.', 'cheongnyeon chwieomnani simgakhaeyo – Thanh niên khó tìm việc nghiêm trọng.'], ['1인 가구가 늘고 있어요.', 'irin gaguga neulgo isseoyo – Hộ một người đang tăng.']],
    hoithoai: {
      ctx: 'Giờ nghỉ trưa, đồng nghiệp Hàn bàn về tin tức.', vai: 'Bạn hỏi, em tóm tắt tin.', ai: '👨 태현',
      luot: [
        T(['오늘 뉴스 봤어요?', 'oneul nyuseu bwasseoyo?', 'Xem tin hôm nay chưa?'], ['네, 물가가 또 올라서 서민 부담이 커졌대요.', 'ne, mulgaga tto ollaseo seomin budami keojyeotdaeyo', 'Rồi, nghe nói vật giá lại tăng, gánh nặng người dân lớn hơn.', 'Gián tiếp + -아지다.'], ['물가가 내렸어요.', 'mulgaga naeryeosseoyo', 'Sai thông tin.'], ['뉴스 없어요.', 'nyuseu eopseoyo', 'Lạc.']),
        T(['베트남도 그래요?', 'Beteunamdo geuraeyo?', 'VN cũng vậy à?'], ['베트남도 물가가 오르는 편이지만 한국보다는 덜 심각한 것 같아요.', 'Beteunamdo mulgaga oreuneun pyeonijiman hangukbodaneun deol simgakhan geot gatayo', 'VN vật giá cũng có xu hướng tăng nhưng có vẻ ít nghiêm trọng hơn Hàn.', 'Kết hợp ngữ pháp.'], ['베트남은 물가가 없어요.', 'Beteunameun mulgaga eopseoyo', 'Vô nghĩa.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['청년 취업 문제는요?', 'cheongnyeon chwieop munjeneunyo?', 'Còn vấn đề việc làm thanh niên?'], ['한국처럼 경쟁이 심해서 많은 청년들이 외국어를 열심히 배워요.', 'hangukcheoreom gyeongjaengi simhaeseo maneun cheongnyeondeuri oegugeoreul yeolsimhi baewoyo', 'Cạnh tranh gắt như Hàn nên nhiều thanh niên chăm học ngoại ngữ.', 'So sánh.'], ['청년이 없어요.', 'cheongnyeoni eopseoyo', 'Sai.'], ['취업난이 좋아요.', 'chwieomnani joayo', 'Vô nghĩa.'])
      ], ket: 'Em đã tóm tắt và bình luận tin xã hội.'
    },
    tom: ['물가 / 부담 / 취업난 / 가구', '늘다 ↔ 줄다', 'Mở rộng tiêu đề báo'], nguphap: 'Văn phong tin tức', phatam: '심각해요 [심가캐요]',
    loi: ['Hiểu tiêu đề theo từng chữ'], btvn: ['Đọc 3 tiêu đề báo Hàn, viết thành câu đầy đủ', 'Tóm tắt 1 tin 3 câu', 'Luyện 🎤 3 câu']
  };

  const d16 = {
    n: 16, ten: plan[15].ten, kinds: K,
    muc: 'Thảo luận môi trường: rác thải, tái chế, tiết kiệm năng lượng; dùng -아/어야 하다, -지 않도록.',
    hoc: `${tbl(['Chủ đề', 'Câu mẫu'], [['Phân loại rác', '한국에서는 쓰레기를 분리수거해야 해요.'], ['Tái chế', '플라스틱을 재활용할 수 있어요.'], ['Tiết kiệm', '전기를 낭비하지 않도록 불을 꺼 주세요.'], ['Đồ dùng một lần', '일회용품 사용을 줄여야 해요.']])}
      ${tip('🔑 <b>-지 않도록</b> = để không…: 감기에 걸리지 않도록 조심하세요.')}`,
    vocab: [
      w('환경', 'hwangyeong', 'môi trường', '', ['환경을 보호해요.', 'hwangyeongeul bohohaeyo', 'Bảo vệ môi trường.']),
      w('쓰레기', 'sseuregi', 'rác', '', ['쓰레기를 버려요.', 'sseuregireul beoryeoyo', 'Vứt rác.']),
      w('분리수거', 'bullisugeo', 'phân loại rác', '', ['분리수거를 해야 해요.', 'bullisugeoreul haeya haeyo', 'Phải phân loại rác.']),
      w('재활용', 'jaehwaryong', 'tái chế', '', ['재활용이 가능해요.', 'jaehwaryongi ganeunghaeyo', 'Có thể tái chế.']),
      w('일회용품', 'ilhoeyongpum', 'đồ dùng một lần', '', ['일회용품을 줄여요.', 'ilhoeyongpumeul juryeoyo', 'Giảm đồ dùng một lần.']),
      w('낭비하다', 'nangbihada', 'lãng phí', '', ['물을 낭비하지 마세요.', 'mureul nangbihaji maseyo', 'Đừng lãng phí nước.']),
      w('보호하다', 'bohohada', 'bảo vệ', '', ['자연을 보호해야 해요.', 'jayeoneul bohohaeya haeyo', 'Phải bảo vệ thiên nhiên.']),
      w('오염', 'oyeom', 'ô nhiễm', '', ['공기 오염이 심해요.', 'gonggi oyeomi simhaeyo', 'Ô nhiễm không khí nặng.']),
      w('텀블러', 'teombeulleo', 'bình nước cá nhân', '', ['텀블러를 사용해요.', 'teombeulleoreul sayonghaeyo', 'Dùng bình nước cá nhân.']),
      w('-지 않도록', '-ji antorok', 'để không…', '', ['늦지 않도록 일찍 출발하세요.', 'neutji antorok iljjik chulbalhaseyo', 'Đi sớm để không muộn.'])
    ],
    qs: [
      ['mc', '“Đi sớm để không bị muộn”?', '늦지 않도록 일찍 출발하세요.', ['늦도록 일찍 출발하세요.', '늦지 않아서 출발하세요.', '늦지 않게도 출발해요.'], '-지 않도록.'],
      ['mc', '분리수거 = ?', 'phân loại rác', ['thu gom tiền', 'tái chế giấy', 'vứt rác bừa'], 'bullisugeo.'],
      ['mc', '일회용품 = ?', 'đồ dùng một lần', ['đồ dùng lâu dài', 'đồ tái chế', 'đồ gia dụng'], 'Dùng một lần.'],
      ['hear', '카페에 갈 때 텀블러를 가져가면 일회용 컵을 줄일 수 있어요.', 'Mang bình riêng đến quán cà phê thì giảm được cốc một lần.', ['Dùng nhiều cốc nhựa.', 'Quán không cho mang bình.', 'Cốc một lần tốt hơn.'], 'Giải pháp.'],
      ['hear', '전기를 낭비하지 않도록 나갈 때 불을 꺼 주세요.', 'Để không lãng phí điện, ra ngoài thì tắt đèn.', ['Bật đèn khi ra ngoài.', 'Điện miễn phí.', 'Không cần tắt.'], '-지 않도록.'],
      ['order', 'Sắp xếp: “Phải phân loại rác.”', ['분리수거를', '해야', '해요', '.'], '분리수거를 해야 해요.']
    ],
    noi: [['한국에서는 분리수거를 꼭 해야 해요.', 'hangugeseoneun bullisugeoreul kkok haeya haeyo – Ở Hàn nhất định phải phân loại rác.'], ['일회용품 사용을 줄여야 해요.', 'ilhoeyongpum sayongeul juryeoya haeyo – Phải giảm dùng đồ một lần.'], ['전기를 낭비하지 않도록 불을 꺼 주세요.', 'jeongireul nangbihaji antorok bureul kkeo juseyo – Tắt đèn để không lãng phí điện.']],
    hoithoai: {
      ctx: 'Em mới chuyển đến chung cư ở Seoul, bác bảo vệ hướng dẫn đổ rác.', vai: 'Bác bảo vệ nói, em hỏi.', ai: '👴 경비 아저씨',
      luot: [
        T(['쓰레기는 아무 데나 버리면 안 돼요.', 'sseuregineun amu dena beorimyeon an dwaeyo', 'Rác không được vứt bừa đâu.'], ['죄송합니다. 분리수거는 어떻게 해야 해요?', 'joesonghamnida. bullisugeoneun eotteoke haeya haeyo?', 'Xin lỗi bác. Phân loại rác phải làm thế nào ạ?', 'Lịch sự, hỏi.'], ['알았어요, 알았어.', 'arasseoyo, arasseo', 'Thiếu lễ độ.'], ['쓰레기 없어요.', 'sseuregi eopseoyo', 'Né.']),
        T(['플라스틱, 종이, 캔을 따로 버리고 음식물 쓰레기는 전용 봉투에 넣어요.', 'peullaseutik, jongi, kaeneul ttaro beorigo eumsingmul sseuregineun jeonyong bongtue neoeoyo', 'Nhựa, giấy, lon bỏ riêng; rác thức ăn bỏ túi chuyên dụng.'], ['네, 다음부터 실수하지 않도록 잘 지킬게요.', 'ne, daeumbuteo silsuhaji antorok jal jikilgeyo', 'Vâng, lần sau cháu sẽ giữ đúng để không nhầm.', '-지 않도록 + hứa.'], ['다 같이 버릴게요.', 'da gachi beorilgeyo', 'Ngược.'], ['봉투가 뭐야?', 'bongtuga mwoya?', 'Trống không.']),
        T(['요일도 정해져 있어요. 수요일이랑 일요일이에요.', 'yoildo jeonghaejyeo isseoyo. suyoirirang iryoirieyo', 'Có ngày quy định: thứ Tư và Chủ nhật.'], ['수요일하고 일요일이요. 친절하게 알려 주셔서 감사합니다.', 'suyoilhago iryoiriyo. chinjeolhage allyeo jusyeoseo gamsahamnida', 'Thứ Tư và Chủ nhật ạ. Cảm ơn bác đã chỉ tận tình.', 'Xác nhận + cảm ơn.'], ['월요일이요?', 'woryoiriyo?', 'Nghe nhầm.'], ['매일 버릴게요.', 'maeil beorilgeyo', 'Sai quy định.'])
      ], ket: 'Em đã học quy định phân loại rác ở Hàn.'
    },
    tom: ['분리수거 / 재활용 / 일회용품', '-지 않도록'], nguphap: 'Mục đích phủ định', phatam: '분리수거 [불리수거]',
    loi: ['Vứt rác không phân loại'], btvn: ['Viết 5 việc em làm để bảo vệ môi trường', 'So sánh phân loại rác VN – Hàn', 'Luyện 🎤 3 câu']
  };

  const d17 = {
    n: 17, ten: plan[16].ten, kinds: K,
    muc: 'Nói về văn hoá Hàn: K-pop, phim, 정 (tình cảm gắn bó), 눈치 (tinh ý), văn hoá ăn uống.',
    hoc: `${tbl(['Khái niệm', 'Ý nghĩa'], [['정 (情)', 'tình cảm gắn bó sâu sắc giữa người với người'], ['눈치', 'sự tinh ý, đọc không khí'], ['빨리빨리', 'văn hoá nhanh nhanh'], ['한류', 'làn sóng Hàn Quốc'], ['회식', 'liên hoan công ty']])}`,
    vocab: [
      w('한류', 'hallyu', 'làn sóng Hàn', '', ['한류가 인기예요.', 'hallyuga ingiyeyo', 'Làn sóng Hàn được ưa chuộng.']),
      w('정', 'jeong', 'tình cảm gắn bó', '', ['한국 사람은 정이 많아요.', 'hanguk sarameun jeongi manayo', 'Người Hàn giàu tình cảm.']),
      w('눈치', 'nunchi', 'sự tinh ý', '', ['눈치가 빨라요.', 'nunchiga ppallayo', 'Rất tinh ý.']),
      w('문화', 'munhwa', 'văn hoá', '', ['한국 문화를 좋아해요.', 'hanguk munhwareul joahaeyo', 'Tôi thích văn hoá Hàn.']),
      w('드라마', 'deurama', 'phim truyền hình', '', ['한국 드라마를 봐요.', 'hanguk deuramareul bwayo', 'Tôi xem phim Hàn.']),
      w('가수', 'gasu', 'ca sĩ', '', ['좋아하는 가수가 누구예요?', 'joahaneun gasuga nuguyeyo?', 'Ca sĩ yêu thích là ai?']),
      w('팬', 'paen', 'người hâm mộ', '', ['저는 BTS 팬이에요.', 'jeoneun BTS paenieyo', 'Tôi là fan BTS.']),
      w('영향', 'yeonghyang', 'ảnh hưởng', '', ['한류의 영향을 받았어요.', 'hallyuui yeonghyangeul badasseoyo', 'Chịu ảnh hưởng làn sóng Hàn.']),
      w('관심', 'gwansim', 'sự quan tâm', '', ['한국에 관심이 많아요.', 'hanguge gwansimi manayo', 'Rất quan tâm Hàn Quốc.']),
      w('차이', 'chai', 'sự khác biệt', '', ['문화 차이가 있어요.', 'munhwa chaiga isseoyo', 'Có khác biệt văn hoá.'])
    ],
    qs: [
      ['mc', '눈치가 빠르다 nghĩa là?', 'tinh ý, đọc không khí nhanh', ['mắt nhanh', 'chạy nhanh', 'nói nhanh'], 'Văn hoá.'],
      ['mc', '정 là?', 'tình cảm gắn bó giữa người với người', ['chính trị', 'sự thật', 'tinh thần'], 'jeong.'],
      ['mc', '한류 = ?', 'làn sóng Hàn Quốc', ['dòng sông Hàn', 'lạnh giá', 'người Hàn'], 'hallyu.'],
      ['hear', '저는 한국 드라마의 영향으로 한국어 공부를 시작하게 됐어요.', 'Do ảnh hưởng phim Hàn mà tôi bắt đầu học tiếng Hàn.', ['Tôi ghét phim Hàn.', 'Tôi học vì công việc.', 'Tôi chưa học.'], '영향 + -게 되다.'],
      ['hear', '베트남과 한국은 비슷한 점도 있지만 문화 차이도 있어요.', 'VN và Hàn có điểm giống nhưng cũng có khác biệt văn hoá.', ['Hoàn toàn giống.', 'Hoàn toàn khác.', 'Không có quan hệ.'], '차이.'],
      ['order', 'Sắp xếp: “Rất quan tâm Hàn Quốc.”', ['한국에', '관심이', '많아요', '.'], '한국에 관심이 많아요.']
    ],
    noi: [['한국 사람은 정이 많은 것 같아요.', 'hanguk sarameun jeongi maneun geot gatayo – Người Hàn có vẻ giàu tình cảm.'], ['한국 드라마의 영향을 많이 받았어요.', 'hanguk deuramaui yeonghyangeul mani badasseoyo – Tôi chịu ảnh hưởng phim Hàn nhiều.'], ['문화 차이가 재미있어요.', 'munhwa chaiga jaemiisseoyo – Khác biệt văn hoá thật thú vị.']],
    hoithoai: {
      ctx: 'Buổi giao lưu văn hoá, sinh viên Hàn hỏi em.', vai: 'Sinh viên hỏi, em chia sẻ.', ai: '🎓 대학생',
      luot: [
        T(['한국 문화 중에서 뭐가 제일 인상적이에요?', 'hanguk munhwa jungeseo mwoga jeil insangjeogieyo?', 'Trong văn hoá Hàn điều gì ấn tượng nhất?'], ['"정" 문화가 제일 인상적이에요. 이웃들이 음식을 나눠 주더라고요.', '"jeong" munhwaga jeil insangjeogieyo. iutdeuri eumsigeul nanwo judeoragoyo', 'Văn hoá "tình" ấn tượng nhất. Hàng xóm chia sẻ đồ ăn cho tôi lắm.', '-더라고요.'], ['한국은 별로예요.', 'hangugeun byeolloyeyo', 'Thiếu tế nhị.'], ['정이 뭐예요?', 'jeongi mwoyeyo?', 'Ngược.']),
        T(['힘든 점은 없었어요?', 'himdeun jeomeun eopseosseoyo?', 'Có gì khó khăn không?'], ['처음에는 "눈치"를 몰라서 실수를 하기도 했어요.', 'cheoeumeneun "nunchi"reul mollaseo silsureul hagido haesseoyo', 'Lúc đầu không biết "tinh ý" nên đôi khi mắc lỗi.', '-기도 하다.'], ['없었어요, 완벽해요.', 'eopseosseoyo, wanbyeokhaeyo', 'Thiếu thật.'], ['눈치가 아파요.', 'nunchiga apayo', 'Vô nghĩa.']),
        T(['베트남에도 비슷한 문화가 있어요?', 'Beteunamedo biseutan munhwaga isseoyo?', 'VN có văn hoá tương tự không?'], ['네, 베트남 사람도 정이 많은 편이에요. 그래서 금방 친해질 수 있었어요.', 'ne, Beteunam saramdo jeongi maneun pyeonieyo. geuraeseo geumbang chinhaejil su isseosseoyo', 'Có, người Việt cũng khá giàu tình cảm. Vì vậy tôi nhanh chóng thân được.', 'So sánh + 편이다.'], ['없어요.', 'eopseoyo', 'Sai.'], ['몰라요.', 'mollayo', 'Thiếu.'])
      ], ket: 'Em đã chia sẻ văn hoá Hàn – Việt sâu sắc.'
    },
    tom: ['정 / 눈치 / 한류 / 빨리빨리'], nguphap: 'Từ vựng văn hoá', phatam: '한류 [할류]',
    loi: ['Nhận xét văn hoá thiếu tế nhị'], btvn: ['Viết 150 chữ: điểm giống – khác văn hoá Việt Hàn', 'Giải thích 정 bằng tiếng Việt cho bạn', 'Luyện 🎤 3 câu']
  };

  const d18 = {
    n: 18, ten: plan[17].ten, kinds: K,
    muc: 'Thảo luận giáo dục Hàn: kỳ thi đại học 수능, học thêm 학원, áp lực, giáo dục sớm; nêu ý kiến.',
    hoc: `${tbl(['Từ', 'Nghĩa'], [['수능', 'kỳ thi đại học quốc gia'], ['학원', 'trung tâm học thêm'], ['입시', 'tuyển sinh'], ['사교육', 'giáo dục tư (học thêm)'], ['조기 교육', 'giáo dục sớm']])}`,
    vocab: [
      w('교육', 'gyoyuk', 'giáo dục', '', ['교육이 중요해요.', 'gyoyugi jungyohaeyo', 'Giáo dục quan trọng.']),
      w('수능', 'suneung', 'thi đại học (Hàn)', '', ['수능을 봤어요.', 'suneungeul bwasseoyo', 'Đã thi đại học.']),
      w('학원', 'hagwon', 'trung tâm học thêm', '', ['학원에 다녀요.', 'hagwone danyeoyo', 'Đi học thêm.']),
      w('사교육', 'sagyoyuk', 'giáo dục tư', '', ['사교육비가 많이 들어요.', 'sagyoyukbiga mani deureoyo', 'Chi phí học thêm cao.']),
      w('경쟁', 'gyeongjaeng', 'cạnh tranh', '', ['경쟁이 심해요.', 'gyeongjaengi simhaeyo', 'Cạnh tranh gắt.']),
      w('입시', 'ipsi', 'tuyển sinh', '', ['입시 스트레스', 'ipsi seuteureseu', 'áp lực tuyển sinh']),
      w('성적', 'seongjeok', 'thành tích học tập', '', ['성적이 올랐어요.', 'seongjeogi ollasseoyo', 'Điểm số tăng.']),
      w('창의력', 'changuiryeok', 'khả năng sáng tạo', '', ['창의력을 키워야 해요.', 'changuiryeogeul kiwoya haeyo', 'Phải phát triển sáng tạo.']),
      w('키우다', 'kiuda', 'nuôi, phát triển', '', ['아이를 키워요.', 'aireul kiwoyo', 'Nuôi con.']),
      w('다니다', 'danida', 'đi (thường xuyên)', '', ['회사에 다녀요.', 'hoesae danyeoyo', 'Đi làm ở công ty.'])
    ],
    qs: [
      ['mc', '학원 = ?', 'trung tâm học thêm', ['trường đại học', 'học viện quân sự', 'học sinh'], 'hagwon.'],
      ['mc', '수능 là?', 'kỳ thi đại học quốc gia Hàn', ['kỳ thi tốt nghiệp cấp 2', 'thi TOPIK', 'thi công chức'], 'suneung.'],
      ['mc', '창의력 = ?', 'khả năng sáng tạo', ['sức mạnh', 'trí nhớ', 'khả năng nói'], 'changuiryeok.'],
      ['hear', '한국은 입시 경쟁이 심해서 학생들이 밤늦게까지 학원에 다녀요.', 'Hàn cạnh tranh tuyển sinh gắt nên học sinh học thêm đến khuya.', ['Học sinh rảnh rỗi.', 'Không có học thêm.', 'Thi rất dễ.'], 'Nhân quả.'],
      ['hear', '성적도 중요하지만 창의력을 키우는 교육이 필요한 것 같아요.', 'Điểm số quan trọng nhưng có vẻ cần giáo dục phát triển sáng tạo.', ['Chỉ cần điểm.', 'Sáng tạo không cần.', 'Bỏ học.'], 'Ý kiến cân bằng.'],
      ['order', 'Sắp xếp: “Cạnh tranh gắt.”', ['경쟁이', '심해요', '.'], '경쟁이 심해요.']
    ],
    noi: [['한국은 입시 경쟁이 심한 편이에요.', 'hangugeun ipsi gyeongjaengi simhan pyeonieyo – Hàn khá cạnh tranh tuyển sinh.'], ['사교육비가 많이 들어요.', 'sagyoyukbiga mani deureoyo – Chi phí học thêm cao.'], ['창의력을 키우는 교육이 필요해요.', 'changuiryeogeul kiuneun gyoyugi piryohaeyo – Cần giáo dục phát triển sáng tạo.']],
    hoithoai: {
      ctx: 'Phụ huynh Hàn hỏi em về giáo dục ở Việt Nam.', vai: 'Phụ huynh hỏi, em so sánh.', ai: '👩 학부모',
      luot: [
        T(['베트남 아이들도 학원에 많이 다녀요?', 'Beteunam aideuldo hagwone mani danyeoyo?', 'Trẻ em VN cũng học thêm nhiều à?'], ['네, 도시에서는 학원에 다니는 학생이 많은 편이에요.', 'ne, dosieseoneun hagwone danineun haksaengi maneun pyeonieyo', 'Có, ở thành phố học sinh học thêm khá nhiều.', '편이다.'], ['학원이 없어요.', 'hagwoni eopseoyo', 'Sai.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['입시 스트레스도 심해요?', 'ipsi seuteureseudo simhaeyo?', 'Áp lực tuyển sinh có nặng không?'], ['네, 한국처럼 대학 입시 경쟁이 꽤 심해요.', 'ne, hangukcheoreom daehak ipsi gyeongjaengi kkwae simhaeyo', 'Có, như Hàn, cạnh tranh vào đại học khá gắt.', 'So sánh 처럼.'], ['스트레스가 좋아요.', 'seuteureseuga joayo', 'Vô nghĩa.'], ['없어요.', 'eopseoyo', 'Sai.']),
        T(['어떤 교육이 좋다고 생각해요?', 'eotteon gyoyugi jotago saenggakhaeyo?', 'Bạn nghĩ giáo dục thế nào là tốt?'], ['성적도 중요하지만 아이의 창의력을 키울 수 있는 교육이 더 필요한 것 같아요.', 'seongjeokdo jungyohajiman aiui changuiryeogeul kiul su inneun gyoyugi deo piryohan geot gatayo', 'Điểm số quan trọng nhưng có vẻ cần hơn là giáo dục giúp trẻ phát triển sáng tạo.', 'Ý kiến mềm.'], ['성적만 중요해요.', 'seongjeongman jungyohaeyo', 'Một chiều.'], ['교육 필요 없어요.', 'gyoyuk piryo eopseoyo', 'Cực đoan.'])
      ], ket: 'Em đã so sánh giáo dục Việt – Hàn có chiều sâu.'
    },
    tom: ['수능 / 학원 / 사교육 / 입시 / 창의력'], nguphap: 'Thảo luận xã hội', phatam: '학원 [하권]',
    loi: ['Ý kiến một chiều'], btvn: ['Viết 200 chữ ý kiến về học thêm', 'So sánh 3 điểm giáo dục VN – Hàn', 'Luyện 🎤 3 câu']
  };

  const d19 = {
    n: 19, ten: plan[18].ten, kinds: K,
    muc: 'Kinh tế và tiêu dùng: chi tiêu, tiết kiệm, thẻ tín dụng, mua sắm hợp lý, lạm phát.',
    hoc: `${tbl(['Chủ đề', 'Câu mẫu'], [['Chi tiêu', '한 달 생활비가 얼마나 들어요?'], ['Tiết kiệm', '월급의 30%를 저축하고 있어요.'], ['Thẻ', '신용카드를 너무 많이 쓰면 안 돼요.'], ['Tiêu dùng hợp lý', '필요한 것만 사는 게 좋아요.']])}
      ${tip('ℹ️ Bài học ngôn ngữ, không phải tư vấn tài chính.')}`,
    vocab: [
      w('생활비', 'saenghwalbi', 'chi phí sinh hoạt', '', ['생활비가 많이 들어요.', 'saenghwalbiga mani deureoyo', 'Chi phí sinh hoạt cao.']),
      w('월급', 'wolgeup', 'lương tháng', '', ['월급날이 언제예요?', 'wolgeumnari eonjeyeyo?', 'Ngày lĩnh lương khi nào?']),
      w('저축', 'jeochuk', 'tiết kiệm (tiền)', '', ['저축을 해요.', 'jeochugeul haeyo', 'Tôi tiết kiệm.']),
      w('소비', 'sobi', 'tiêu dùng', '', ['소비가 늘었어요.', 'sobiga neureosseoyo', 'Tiêu dùng tăng.']),
      w('신용카드', 'sinyong kadeu', 'thẻ tín dụng', '', ['신용카드로 결제할게요.', 'sinyong kadeuro gyeoljehalgeyo', 'Tôi trả bằng thẻ tín dụng.']),
      w('할부', 'halbu', 'trả góp', '', ['3개월 할부로 해 주세요.', 'samgaewol halburo hae juseyo', 'Cho trả góp 3 tháng.']),
      w('가계부', 'gagyebu', 'sổ chi tiêu', '', ['가계부를 써요.', 'gagyebureul sseoyo', 'Tôi ghi sổ chi tiêu.']),
      w('충동구매', 'chungdonggumae', 'mua sắm bốc đồng', '', ['충동구매를 줄여야 해요.', 'chungdonggumaereul juryeoya haeyo', 'Phải giảm mua bốc đồng.']),
      w('경제', 'gyeongje', 'kinh tế', '', ['경제가 어려워요.', 'gyeongjega eoryeowoyo', 'Kinh tế khó khăn.']),
      w('합리적', 'hamnijeok', 'hợp lý', '', ['합리적인 소비', 'hamnijeogin sobi', 'tiêu dùng hợp lý'])
    ],
    qs: [
      ['mc', '할부 = ?', 'trả góp', ['giảm giá', 'tiền mặt', 'hoàn tiền'], 'halbu.'],
      ['mc', '충동구매 = ?', 'mua sắm bốc đồng', ['mua theo nhóm', 'mua online', 'mua trả góp'], 'Bốc đồng.'],
      ['mc', '가계부 = ?', 'sổ chi tiêu gia đình', ['sổ tiết kiệm', 'hoá đơn', 'sổ hộ khẩu'], 'gagyebu.'],
      ['hear', '저는 월급의 30%를 저축하고 가계부를 써요.', 'Tôi tiết kiệm 30% lương và ghi sổ chi tiêu.', ['Tiêu hết lương.', 'Tiết kiệm 3%.', 'Không ghi chép.'], 'Thói quen.'],
      ['hear', '신용카드를 많이 쓰면 충동구매를 하기 쉬워요.', 'Dùng thẻ tín dụng nhiều dễ mua bốc đồng.', ['Thẻ giúp tiết kiệm.', 'Không ảnh hưởng.', 'Nên dùng nhiều thẻ.'], 'Nhân quả.'],
      ['order', 'Sắp xếp: “Chi phí sinh hoạt cao.”', ['생활비가', '많이', '들어요', '.'], '생활비가 많이 들어요.']
    ],
    noi: [['월급의 30%를 저축하고 있어요.', 'wolgeubui samsip peosenteureul jeochukhago isseoyo – Tôi đang tiết kiệm 30% lương.'], ['충동구매를 줄여야 해요.', 'chungdonggumaereul juryeoya haeyo – Phải giảm mua sắm bốc đồng.'], ['3개월 할부로 해 주세요.', 'samgaewol halburo hae juseyo – Cho trả góp 3 tháng.']],
    hoithoai: {
      ctx: 'Đồng nghiệp trẻ Hàn hỏi em cách quản lý chi tiêu.', vai: 'Bạn hỏi, em chia sẻ.', ai: '👨 지훈',
      luot: [
        T(['월급을 받으면 금방 다 써요. 어떻게 해야 돼요?', 'wolgeubeul badeumyeon geumbang da sseoyo. eotteoke haeya dwaeyo?', 'Lĩnh lương là tiêu hết ngay. Phải làm sao?'], ['먼저 가계부를 써 보는 게 어때요? 어디에 돈을 쓰는지 알 수 있어요.', 'meonjeo gagyebureul sseo boneun ge eottaeyo? eodie doneul sseuneunji al su isseoyo', 'Thử ghi sổ chi tiêu trước xem? Sẽ biết tiền đi đâu.', 'Khuyên.'], ['더 쓰세요.', 'deo sseuseyo', 'Ngược.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['신용카드는요?', 'sinyong kadeuneunyo?', 'Còn thẻ tín dụng?'], ['편리하지만 충동구매를 하기 쉬우니까 조심하는 게 좋겠어요.', 'pyeollihajiman chungdonggumaereul hagi swiunikka josimhaneun ge jokesseoyo', 'Tiện nhưng dễ mua bốc đồng, nên cẩn thận.', '-지만 + -니까 + khuyên.'], ['카드 많이 만드세요.', 'kadeu mani mandeuseyo', 'Khuyên sai.'], ['카드가 저축이에요.', 'kadeuga jeochugieyo', 'Vô nghĩa.']),
        T(['저축은 얼마나 해요?', 'jeochugeun eolmana haeyo?', 'Bạn tiết kiệm bao nhiêu?'], ['월급 받자마자 일정 금액을 저축 통장으로 옮겨요.', 'wolgeup batjamaja iljeong geumaegeul jeochuk tongjangeuro omgyeoyo', 'Vừa nhận lương là chuyển một khoản cố định sang tài khoản tiết kiệm.', '-자마자.'], ['저축 안 해요.', 'jeochuk an haeyo', 'Mâu thuẫn lời khuyên.'], ['비밀번호 알려 줄게요.', 'bimilbeonho allyeo julgeyo', 'Nguy hiểm.'])
      ], ket: 'Em đã chia sẻ cách quản lý chi tiêu hợp lý.'
    },
    tom: ['생활비 / 저축 / 소비 / 할부 / 가계부 / 충동구매'], nguphap: 'Từ vựng tiêu dùng', phatam: '저축 [저축], 할부 [할부]',
    loi: ['Nhầm 저축 và 소비'], btvn: ['Lập kế hoạch chi tiêu tháng bằng tiếng Hàn', 'Viết 5 mẹo tiết kiệm', 'Luyện 🎤 3 câu']
  };

  const d20 = {
    n: 20, ten: plan[19].ten, kinds: K,
    muc: 'Công nghệ và đời sống số: smartphone, AI, mạng xã hội, ưu nhược điểm; dùng -(으)ㄹ수록 (càng… càng).',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ'], [['-(으)면 -(으)ㄹ수록', '쓰면 쓸수록 편해요. (càng dùng càng tiện)'], ['-(으)ㄹ수록', '나이가 들수록 건강이 중요해요.']])}
      ${tip('🔑 Tranh luận công nghệ hay theo mẫu: <b>편리하다는 장점이 있지만 …는 단점도 있다</b>.')}`,
    vocab: [
      w('스마트폰', 'seumateupon', 'smartphone', '', ['스마트폰 없이 못 살아요.', 'seumateupon eopsi mot sarayo', 'Không sống thiếu smartphone được.']),
      w('인공지능', 'ingongjineung', 'trí tuệ nhân tạo', '', ['인공지능이 발전하고 있어요.', 'ingongjineungi baljeonhago isseoyo', 'AI đang phát triển.']),
      w('발전하다', 'baljeonhada', 'phát triển', '', ['기술이 빠르게 발전해요.', 'gisuri ppareuge baljeonhaeyo', 'Công nghệ phát triển nhanh.']),
      w('기술', 'gisul', 'kỹ thuật, công nghệ', '', ['새로운 기술', 'saeroun gisul', 'công nghệ mới']),
      w('중독', 'jungdok', 'nghiện', '', ['스마트폰 중독', 'seumateupon jungdok', 'nghiện smartphone']),
      w('개인정보', 'gaeinjeongbo', 'thông tin cá nhân', '', ['개인정보를 보호해야 해요.', 'gaeinjeongboreul bohohaeya haeyo', 'Phải bảo vệ thông tin cá nhân.']),
      w('디지털', 'dijiteol', 'kỹ thuật số', '', ['디지털 시대', 'dijiteol sidae', 'thời đại số']),
      w('-(으)ㄹ수록', '-(eu)lsurok', 'càng… càng', '', ['볼수록 재미있어요.', 'bolsurok jaemiisseoyo', 'Càng xem càng hay.']),
      w('대화', 'daehwa', 'cuộc trò chuyện', '', ['가족 간의 대화가 줄었어요.', 'gajok ganui daehwaga jureosseoyo', 'Trò chuyện trong gia đình giảm.']),
      w('온라인', 'onrain', 'trực tuyến', '', ['온라인 수업', 'onrain sueop', 'lớp học trực tuyến'])
    ],
    qs: [
      ['mc', '“Càng dùng càng tiện”?', '쓰면 쓸수록 편해요.', ['쓸수록 쓰면 편해요.', '쓰면 쓰니까 편해요.', '쓰고 쓸 편해요.'], '-(으)면 -(으)ㄹ수록.'],
      ['mc', '중독 = ?', 'nghiện', ['trung độ', 'trung tâm', 'độc lập'], 'jungdok.'],
      ['mc', 'Mẫu tranh luận cân bằng?', '편리하다는 장점이 있지만 중독되기 쉽다는 단점도 있어요.', ['스마트폰은 최고예요.', '스마트폰은 나빠요.', '몰라요.'], 'Hai mặt.'],
      ['hear', '인공지능이 발전할수록 개인정보 보호가 더 중요해져요.', 'AI càng phát triển, bảo vệ thông tin cá nhân càng quan trọng.', ['AI không ảnh hưởng.', 'Thông tin cá nhân không quan trọng.', 'AI ngừng phát triển.'], '-ㄹ수록.'],
      ['hear', '스마트폰 때문에 가족 간의 대화가 줄었다는 사람도 있어요.', 'Có người nói vì smartphone mà trò chuyện gia đình giảm.', ['Gia đình nói chuyện nhiều hơn.', 'Smartphone giúp gắn kết.', 'Không ai nói vậy.'], 'Gián tiếp.'],
      ['order', 'Sắp xếp: “Càng xem càng hay.”', ['볼수록', '재미있어요', '.'], '볼수록 재미있어요.']
    ],
    noi: [['쓰면 쓸수록 편해요.', 'sseumyeon sseulsurok pyeonhaeyo – Càng dùng càng tiện.'], ['개인정보를 보호해야 해요.', 'gaeinjeongboreul bohohaeya haeyo – Phải bảo vệ thông tin cá nhân.'], ['장점도 있지만 단점도 있어요.', 'jangjeomdo itjiman danjeomdo isseoyo – Có ưu điểm nhưng cũng có nhược điểm.']],
    hoithoai: {
      ctx: 'Thảo luận nhóm lớp TOPIK: “Smartphone có làm cuộc sống tốt hơn?”', vai: 'Bạn hỏi, em nêu quan điểm.', ai: '🧑‍🎓 학생',
      luot: [
        T(['스마트폰이 생활을 더 좋게 만들었다고 생각해요?', 'seumateuponi saenghwareul deo joke mandeureotdago saenggakhaeyo?', 'Bạn nghĩ smartphone làm cuộc sống tốt hơn?'], ['네, 은행 업무나 쇼핑을 어디서나 할 수 있어서 편리해졌어요.', 'ne, eunhaeng eommuna syopingeul eodiseona hal su isseoseo pyeollihaejyeosseoyo', 'Có, làm việc ngân hàng, mua sắm ở đâu cũng được nên tiện hơn.', 'Lý do + -아지다.'], ['네.', 'ne', 'Thiếu lý do.'], ['스마트폰이 뭐예요?', 'seumateuponi mwoyeyo?', 'Lạc.']),
        T(['단점은 없을까요?', 'danjeomeun eopseulkkayo?', 'Không có nhược điểm sao?'], ['물론 있어요. 쓰면 쓸수록 중독되기 쉽고 가족 간의 대화가 줄 수 있어요.', 'mullon isseoyo. sseumyeon sseulsurok jungdokdoegi swipgo gajok ganui daehwaga jul su isseoyo', 'Tất nhiên có. Càng dùng càng dễ nghiện và trò chuyện gia đình có thể giảm.', '-ㄹ수록.'], ['단점 없어요.', 'danjeom eopseoyo', 'Một chiều.'], ['중독이 좋아요.', 'jungdogi joayo', 'Sai.']),
        T(['그럼 결론은요?', 'geureom gyeollonneunyo?', 'Vậy kết luận?'], ['장점이 더 많지만 사용 시간을 스스로 조절하는 것이 중요하다고 생각해요.', 'jangjeomi deo manchiman sayong siganeul seuseuro jojeolhaneun geosi jungyohadago saenggakhaeyo', 'Ưu điểm nhiều hơn, nhưng tôi nghĩ tự điều chỉnh thời gian dùng là quan trọng.', 'Kết luận cân bằng.'], ['스마트폰을 버려요.', 'seumateuponeul beoryeoyo', 'Cực đoan.'], ['몰라요.', 'mollayo', 'Thiếu.'])
      ], ket: 'Em đã tranh luận về công nghệ cân bằng, rõ ràng.'
    },
    tom: ['-(으)면 -(으)ㄹ수록', '장점이 있지만 단점도'], nguphap: 'Càng… càng', phatam: '쓸수록 [쓸쑤록]',
    loi: ['Ý kiến một chiều'], btvn: ['Viết 200 chữ: AI trong đời sống', 'Viết 3 câu -ㄹ수록', 'Luyện 🎤 3 câu']
  };

  const d21 = {
    n: 21, ten: plan[20].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Kiểm tra giai đoạn 3: tin tức, môi trường, văn hoá, giáo dục, tiêu dùng, công nghệ.',
    hoc: `<h4>Tóm tắt giai đoạn 3</h4>${tbl(['Chủ đề', 'Cụm then chốt'], [['Tin tức', '물가 상승, 취업난, 늘다/줄다'], ['Môi trường', '분리수거, 일회용품, -지 않도록'], ['Văn hoá', '정, 눈치, 한류'], ['Giáo dục', '수능, 학원, 사교육, 창의력'], ['Tiêu dùng', '저축, 할부, 충동구매'], ['Công nghệ', '인공지능, 중독, -(으)ㄹ수록']])}`,
    qs: [['mc', '“Đi sớm để không muộn”?', '늦지 않도록 일찍 가세요.', ['늦도록 가세요.', '늦지 않아서 가세요.', '늦지 마서 가세요.'], '-지 않도록.'], ['mc', '“Càng học càng thú vị”?', '공부하면 할수록 재미있어요.', ['공부할수록 하면 재미있어요.', '공부하면 하니까 재미있어요.', '공부하고 할수록요.'], '-ㄹ수록.']],
    noi: [['분리수거를 꼭 해야 해요.', 'bullisugeoreul kkok haeya haeyo – Nhất định phải phân loại rác.'], ['한국 사람은 정이 많아요.', 'hanguk sarameun jeongi manayo – Người Hàn giàu tình cảm.']],
    hoithoai: {
      ctx: 'Mô phỏng: phỏng vấn nói TOPIK – giám khảo hỏi nhiều chủ đề.', vai: 'Giám khảo hỏi, em trả lời.', ai: '🎤 시험관',
      luot: [
        T(['환경 보호를 위해 무엇을 하고 있어요?', 'hwangyeong bohoreul wihae mueoseul hago isseoyo?', 'Bạn đang làm gì để bảo vệ môi trường?'], ['일회용품을 줄이려고 텀블러를 가지고 다녀요.', 'ilhoeyongpumeul juriryeogo teombeulleoreul gajigo danyeoyo', 'Tôi mang bình nước riêng để giảm đồ dùng một lần.', '-(으)려고.'], ['환경이 좋아요.', 'hwangyeongi joayo', 'Lạc.'], ['아무것도 안 해요.', 'amugeotdo an haeyo', 'Kém.']),
        T(['한국 문화에서 무엇이 인상적이었어요?', 'hanguk munhwaeseo mueosi insangjeogieosseoyo?', 'Văn hoá Hàn điều gì ấn tượng?'], ['이웃들이 정이 많더라고요. 음식을 나눠 주기도 했어요.', 'iutdeuri jeongi mantheoragoyo. eumsigeul nanwo jugido haesseoyo', 'Hàng xóm giàu tình cảm lắm. Còn chia đồ ăn cho tôi.', '-더라고요 + -기도.'], ['별로 없었어요.', 'byeollo eopseosseoyo', 'Thiếu.'], ['정이 뭐예요?', 'jeongi mwoyeyo?', 'Ngược.']),
        T(['스마트폰 사용에 대해 어떻게 생각해요?', 'seumateupon sayonge daehae eotteoke saenggakhaeyo?', 'Bạn nghĩ gì về dùng smartphone?'], ['편리하다는 장점이 있지만 오래 쓸수록 중독되기 쉬워서 조절이 필요해요.', 'pyeollihadaneun jangjeomi itjiman orae sseulsurok jungdokdoegi swiwoseo jojeori piryohaeyo', 'Có ưu điểm tiện lợi nhưng dùng càng lâu càng dễ nghiện nên cần điều chỉnh.', 'Cân bằng + -ㄹ수록.'], ['좋아요.', 'joayo', 'Sơ sài.'], ['안 써요.', 'an sseoyo', 'Lạc.'])
      ], ket: 'Em đã trả lời phỏng vấn đa chủ đề!'
    },
    tom: ['Ôn giai đoạn 3', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn', phatam: 'Ôn ngữ điệu câu dài',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: học lại ngày yếu', 'Làm ⚡ Luyện nhanh', 'Viết 200 chữ về một vấn đề xã hội']
  };

  const d22 = {
    n: 22, ten: plan[21].ten, kinds: K,
    muc: 'Luyện TOPIK II câu 53: mô tả biểu đồ/khảo sát 200–300 chữ bằng văn viết -다.',
    hoc: `${tbl(['Phần', 'Mẫu câu'], [['Giới thiệu', '○○를 대상으로 △△에 대해 조사하였다.'], ['Xu hướng', '2015년 30%에서 2025년 50%로 증가하였다.'], ['So sánh', '남자는 …인 반면에 여자는 …로 나타났다.'], ['Nguyên nhân', '이러한 변화의 원인으로는 …을/를 들 수 있다.'], ['Dự báo', '앞으로 …할 것으로 예상된다.']])}
      ${tip('📝 Câu 53: <b>không nêu ý kiến cá nhân</b>, chỉ mô tả số liệu khách quan; viết đủ 200–300 chữ, văn viết -다.')}`,
    vocab: [
      w('조사하다', 'josahada', 'khảo sát', '', ['직장인을 대상으로 조사하였다.', 'jikjanginul daesangeuro josahayeotda', 'Đã khảo sát người đi làm.']),
      w('대상', 'daesang', 'đối tượng', '', ['20대를 대상으로', 'isipdaereul daesangeuro', 'với đối tượng tuổi 20']),
      w('꾸준히', 'kkujunhi', 'đều đặn', '', ['꾸준히 증가하였다.', 'kkujunhi jeunggahayeotda', 'Tăng đều đặn.']),
      w('추세', 'chuse', 'xu hướng', '', ['증가 추세를 보였다.', 'jeungga chusereul boyeotda', 'Cho thấy xu hướng tăng.']),
      w('나타나다', 'natanada', 'cho thấy, xuất hiện', '', ['결과가 나타났다.', 'gyeolgwaga natanatda', 'Kết quả cho thấy.']),
      w('반면에', 'banmyeone', 'ngược lại', '', ['반면에 여자는…', 'banmyeone yeojaneun…', 'Ngược lại, nữ thì…']),
      w('원인', 'wonin', 'nguyên nhân', '', ['원인으로는 … 을 들 수 있다.', 'wonineuroneun … eul deul su itda', 'Có thể kể nguyên nhân là…']),
      w('예상되다', 'yesangdoeda', 'được dự đoán', '', ['계속 늘 것으로 예상된다.', 'gyesok neul geoseuro yesangdoenda', 'Dự đoán sẽ tiếp tục tăng.']),
      w('비율', 'biyul', 'tỷ lệ', '', ['비율이 높다.', 'biyuri nopda', 'Tỷ lệ cao.']),
      w('응답하다', 'eungdaphada', 'trả lời (khảo sát)', '', ['60%가 그렇다고 응답하였다.', 'yuksip peosenteuga geureotago eungdaphayeotda', '60% trả lời là có.'])
    ],
    qs: [
      ['mc', 'Câu 53 TOPIK II yêu cầu?', 'Mô tả số liệu khách quan 200–300 chữ', ['Nêu ý kiến cá nhân 600 chữ', 'Viết thư cho bạn', 'Điền 1 từ'], 'Đặc điểm đề.'],
      ['mc', '“tăng từ 30% lên 50%”?', '30%에서 50%로 증가하였다', ['30%로 50%에서 증가하였다', '30%와 50% 증가했어요', '30%부터 50%까지 감소했다'], '에서… 로.'],
      ['mc', 'Câu dự báo văn viết?', '앞으로 계속 증가할 것으로 예상된다.', ['앞으로 계속 늘 거예요.', '늘었으면 좋겠어요.', '저는 늘 것 같아요.'], 'Văn viết, khách quan.'],
      ['mc', '반면에 = ?', 'ngược lại', ['đồng thời', 'vì vậy', 'ví dụ'], 'banmyeone.'],
      ['hear', '20대를 대상으로 조사한 결과, 65%가 온라인 쇼핑을 더 선호한다고 응답하였다.', 'Khảo sát người tuổi 20: 65% trả lời thích mua online hơn.', ['56% thích mua trực tiếp.', 'Khảo sát người tuổi 60.', '65% không mua sắm.'], 'Số liệu.'],
      ['order', 'Sắp xếp: “Tỷ lệ cao.”', ['비율이', '높다', '.'], '비율이 높다.']
    ],
    noi: [['직장인 500명을 대상으로 조사하였다.', 'jikjangin obaek myeongeul daesangeuro josahayeotda – Đã khảo sát 500 người đi làm.'], ['꾸준히 증가하였다.', 'kkujunhi jeunggahayeotda – Đã tăng đều đặn.'], ['앞으로도 증가할 것으로 예상된다.', 'apeurodo jeunggahal geoseuro yesangdoenda – Dự đoán sẽ tiếp tục tăng.']],
    hoithoai: {
      ctx: 'Gia sư chấm bài câu 53 của em.', vai: 'Gia sư hỏi, em trả lời.', ai: '👩‍🏫 과외 선생님',
      luot: [
        T(['첫 문장을 어떻게 시작했어요?', 'cheot munjangeul eotteoke sijakhaesseoyo?', 'Câu đầu em mở thế nào?'], ['"직장인 500명을 대상으로 여가 활동에 대해 조사하였다"로 시작했어요.', '"jikjangin obaek myeongeul daesangeuro yeoga hwaldonge daehae josahayeotda"ro sijakhaesseoyo', 'Em mở bằng "Đã khảo sát 500 người đi làm về hoạt động giải trí".', 'Giới thiệu chuẩn.'], ['"저는 운동을 좋아해요"로요.', '"jeoneun undongeul joahaeyo"royo', 'Sai: ý kiến cá nhân + văn nói.'], ['안 썼어요.', 'an sseosseoyo', 'Bỏ.']),
        T(['그래프에서 중요한 내용은요?', 'geuraepeueseo jungyohan naeyongeunyo?', 'Nội dung quan trọng trong biểu đồ?'], ['운동하는 비율이 20%에서 35%로 증가한 반면에 TV 시청은 감소하였다고 썼어요.', 'undonghaneun biyuri isip peosenteueseo samsibo peosenteuro jeunggahan banmyeone TV sicheongeun gamsohayeotdago sseosseoyo', 'Em viết tỷ lệ tập thể dục tăng từ 20% lên 35%, ngược lại xem TV giảm.', 'So sánh.'], ['운동이 좋다고 썼어요.', 'undongi jotago sseosseoyo', 'Ý kiến cá nhân.'], ['숫자는 안 썼어요.', 'sutjaneun an sseosseoyo', 'Thiếu số liệu.']),
        T(['마지막 문장은요?', 'majimak munjangeunyo?', 'Câu cuối?'], ['"이러한 추세는 앞으로도 계속될 것으로 예상된다"로 마무리했어요.', '"ireohan chuseneun apeurodo gyesokdoel geoseuro yesangdoenda"ro mamurihaesseoyo', 'Em kết bằng "Xu hướng này dự đoán sẽ tiếp tục".', 'Dự báo khách quan.'], ['"저도 운동할 거예요"로요.', '"jeodo undonghal geoyeyo"royo', 'Sai.'], ['안 끝냈어요.', 'an kkeunnaesseoyo', 'Thiếu.'])
      ], ket: 'Em đã nắm bố cục câu 53.'
    },
    tom: ['조사하였다 → 증가/감소 → 반면에 → 원인 → 예상된다', 'Không nêu ý kiến'], nguphap: 'Viết mô tả biểu đồ', phatam: '증가하였다 [증가하엳따]',
    loi: ['Nêu ý kiến cá nhân', 'Dùng văn nói -아요'], btvn: ['Viết 1 bài câu 53 (250 chữ) từ đề cũ', 'Học thuộc 10 mẫu câu', 'Luyện 🎤 3 câu']
  };

  const d23 = {
    n: 23, ten: plan[22].ten, kinds: K,
    muc: 'Viết đoạn văn nêu ý kiến (dạng câu 54 rút gọn): mở – thân – kết, luận cứ, văn viết -다.',
    hoc: `${tbl(['Phần', 'Mẫu câu'], [['Mở', '최근 …이/가 사회적 문제가 되고 있다.'], ['Ý kiến', '나는 …다고 생각한다.'], ['Lý do 1, 2', '첫째, … 둘째, …'], ['Phản biện', '물론 …라는 의견도 있다. 그러나 …'], ['Kết', '따라서 …해야 할 것이다.']])}
      ${tip('📝 Câu 54 TOPIK II: 600–700 chữ. Ở cấp 3 hãy luyện đoạn 300 chữ đủ cấu trúc trước.')}`,
    vocab: [
      w('최근', 'choegeun', 'gần đây', '', ['최근 문제가 되고 있다.', 'choegeun munjega doego itda', 'Gần đây đang trở thành vấn đề.']),
      w('사회적', 'sahoejeok', 'mang tính xã hội', '', ['사회적 문제', 'sahoejeok munje', 'vấn đề xã hội']),
      w('첫째', 'cheotjjae', 'thứ nhất', '', ['첫째, 비용이 든다.', 'cheotjjae, biyongi deunda', 'Thứ nhất, tốn chi phí.']),
      w('둘째', 'duljjae', 'thứ hai', '', ['둘째, 시간이 걸린다.', 'duljjae, sigani geollinda', 'Thứ hai, mất thời gian.']),
      w('물론', 'mullon', 'tất nhiên', '', ['물론 장점도 있다.', 'mullon jangjeomdo itda', 'Tất nhiên cũng có ưu điểm.']),
      w('논의', 'nonui', 'thảo luận, bàn bạc', '', ['논의가 활발하다.', 'nonuiga hwalbalhada', 'Tranh luận sôi nổi.']),
      w('주장하다', 'jujanghada', 'chủ trương, cho rằng', '', ['그는 … 라고 주장한다.', 'geuneun … rago jujanghanda', 'Anh ta cho rằng…']),
      w('근거', 'geungeo', 'căn cứ', '', ['근거가 부족하다.', 'geungeoga bujokhada', 'Thiếu căn cứ.']),
      w('해결하다', 'haegyeolhada', 'giải quyết', '', ['문제를 해결해야 한다.', 'munjereul haegyeolhaeya handa', 'Phải giải quyết vấn đề.']),
      w('바람직하다', 'baramjikhada', 'đáng mong muốn', '', ['바람직한 방향', 'baramjikhan banghyang', 'hướng đi đúng đắn'])
    ],
    qs: [
      ['mc', 'Mở đoạn ý kiến văn viết?', '최근 청년 실업이 사회적 문제가 되고 있다.', ['요즘 청년들이 놀아요.', '저는 실업이 싫어요.', '실업 몰라요.'], 'Văn viết, khách quan.'],
      ['mc', 'Câu phản biện?', '물론 다른 의견도 있다. 그러나 …', ['첫째, …', '따라서, …', '최근 …'], 'Nhượng bộ rồi bác.'],
      ['mc', '바람직하다 = ?', 'đáng mong muốn, đúng đắn', ['mong chờ', 'gió thổi', 'thẳng thắn'], 'baramjikhada.'],
      ['hear', '첫째, 비용이 많이 든다. 둘째, 효과가 확실하지 않다.', 'Thứ nhất tốn nhiều chi phí. Thứ hai hiệu quả không chắc chắn.', ['Chi phí thấp.', 'Hiệu quả chắc chắn.', 'Chỉ có một lý do.'], 'Liệt kê.'],
      ['hear', '따라서 정부와 개인이 함께 노력해야 할 것이다.', 'Do đó chính phủ và cá nhân phải cùng nỗ lực.', ['Chỉ chính phủ.', 'Không cần nỗ lực.', 'Chỉ cá nhân.'], 'Kết luận.'],
      ['order', 'Sắp xếp: “Phải giải quyết vấn đề.”', ['문제를', '해결해야', '한다', '.'], '문제를 해결해야 한다.']
    ],
    noi: [['나는 …다고 생각한다.', 'naneun …dago saenggakhanda – Tôi cho rằng…'], ['물론 다른 의견도 있다.', 'mullon dareun uigyeondo itda – Tất nhiên cũng có ý kiến khác.'], ['따라서 함께 노력해야 할 것이다.', 'ttaraseo hamkke noryeokhaeya hal geosida – Do đó phải cùng nỗ lực.']],
    hoithoai: {
      ctx: 'Em trao đổi dàn ý bài viết “Làm việc từ xa có tốt không?” với bạn học.', vai: 'Bạn hỏi, em trình bày dàn ý.', ai: '🧑‍🎓 스터디 친구',
      luot: [
        T(['서론은 어떻게 써?', 'seoroneun eotteoke sseo?', 'Mở bài viết thế nào?'], ['"최근 재택근무가 늘면서 그 효과에 대한 논의가 활발하다"로 시작할 거야.', '"choegeun jaetaekgeunmuga neulmyeonseo geu hyogwae daehan nonuiga hwalbalhada"ro sijakhal geoya', 'Mình sẽ mở: "Gần đây làm từ xa tăng, tranh luận về hiệu quả sôi nổi".', 'Mở văn viết (nói thân mật với bạn).'], ['재택근무 좋아.', 'jaetaekgeunmu joa', 'Thiếu cấu trúc.'], ['안 써.', 'an sseo', 'Bỏ.']),
        T(['근거는?', 'geungeoneun?', 'Luận cứ?'], ['첫째, 출퇴근 시간이 줄어든다. 둘째, 집중할 수 있는 환경을 만들 수 있다.', 'cheotjjae, chultoegeun sigani jureodeunda. duljjae, jipjunghal su inneun hwangyeongeul mandeul su itda', 'Thứ nhất giảm thời gian đi lại. Thứ hai tạo được môi trường tập trung.', 'Liệt kê.'], ['그냥 좋아.', 'geunyang joa', 'Không căn cứ.'], ['몰라.', 'molla', 'Thiếu.']),
        T(['반대 의견은 안 써?', 'bandae uigyeoneun an sseo?', 'Không viết ý kiến phản đối à?'], ['써야지. "물론 소통이 어렵다는 의견도 있다. 그러나 화상 회의로 해결할 수 있다."', 'sseoyaji. "mullon sotongi eoryeopdaneun uigyeondo itda. geureona hwasang hoeuiro haegyeolhal su itda."', 'Phải viết chứ: "Tất nhiên có ý kiến giao tiếp khó. Tuy nhiên giải quyết được bằng họp video."', 'Phản biện.'], ['반대 의견은 틀렸어.', 'bandae uigyeoneun teullyeosseo', 'Bác thô.'], ['필요 없어.', 'piryo eopseo', 'Thiếu.'])
      ], ket: 'Em đã lập dàn ý bài nghị luận đúng cấu trúc.'
    },
    tom: ['최근 … / 나는 …다고 생각한다', '첫째, 둘째 / 물론 … 그러나', '따라서 …해야 할 것이다'], nguphap: 'Bố cục nghị luận', phatam: '생각한다 [생가칸다]',
    loi: ['Thiếu phản biện', 'Dùng văn nói'], btvn: ['Viết đoạn 300 chữ: làm việc từ xa', 'Gạch rõ 5 phần', 'Luyện 🎤 3 câu']
  };

  const d24 = {
    n: 24, ten: plan[23].ten, kinds: K,
    muc: 'Thuyết trình ngắn 3 phút: chào, giới thiệu chủ đề, 3 ý chính, kết luận, mời hỏi.',
    hoc: `${tbl(['Phần', 'Mẫu'], [['Chào', '안녕하십니까? 오늘 발표를 맡은 민입니다.'], ['Chủ đề', '오늘은 …에 대해 말씀드리겠습니다.'], ['Dàn ý', '먼저 … 다음으로 … 마지막으로 …'], ['Chuyển ý', '그럼 두 번째로 넘어가겠습니다.'], ['Kết', '이상으로 발표를 마치겠습니다. 질문 있으십니까?']])}`,
    vocab: [
      w('발표', 'balpyo', 'thuyết trình', '', ['발표를 시작하겠습니다.', 'balpyoreul sijakhagesseumnida', 'Tôi xin bắt đầu thuyết trình.']),
      w('맡다', 'matda', 'đảm nhận', '', ['발표를 맡았습니다.', 'balpyoreul matatseumnida', 'Tôi đảm nhận thuyết trình.']),
      w('말씀드리다', 'malsseumdeurida', 'xin trình bày', '', ['결과를 말씀드리겠습니다.', 'gyeolgwareul malsseumdeurigesseumnida', 'Xin trình bày kết quả.']),
      w('먼저', 'meonjeo', 'trước tiên', '', ['먼저 배경을 설명하겠습니다.', 'meonjeo baegyeongeul seolmyeonghagesseumnida', 'Trước tiên xin giải thích bối cảnh.']),
      w('다음으로', 'daeumeuro', 'tiếp theo', '', ['다음으로 방법입니다.', 'daeumeuro bangbeobimnida', 'Tiếp theo là phương pháp.']),
      w('마지막으로', 'majimageuro', 'cuối cùng', '', ['마지막으로 결론입니다.', 'majimageuro gyeollonimnida', 'Cuối cùng là kết luận.']),
      w('넘어가다', 'neomeogada', 'chuyển sang', '', ['다음 장으로 넘어가겠습니다.', 'daeum jangeuro neomeogagesseumnida', 'Xin chuyển sang trang sau.']),
      w('이상으로', 'isangeuro', 'đến đây (kết thúc)', '', ['이상으로 마치겠습니다.', 'isangeuro machigesseumnida', 'Xin kết thúc tại đây.']),
      w('질문', 'jilmun', 'câu hỏi', '', ['질문 있으십니까?', 'jilmun isseusimnikka?', 'Có câu hỏi không ạ?']),
      w('자료', 'jaryo', 'tài liệu', '', ['자료를 보시겠습니다.', 'jaryoreul bosigesseumnida', 'Mời xem tài liệu.'])
    ],
    qs: [
      ['mc', 'Mở đầu thuyết trình trang trọng?', '안녕하십니까? 오늘 발표를 맡은 민입니다.', ['안녕! 나 민이야.', '시작할게.', '발표해요요.'], 'Trang trọng.'],
      ['mc', 'Thứ tự dàn ý?', '먼저 → 다음으로 → 마지막으로', ['마지막으로 → 먼저 → 다음으로', '다음으로 → 먼저 → 마지막으로', '먼저 → 마지막으로 → 다음으로'], 'Trình tự.'],
      ['mc', 'Kết thúc thuyết trình?', '이상으로 발표를 마치겠습니다.', ['끝!', '발표 시작하겠습니다.', '다음으로 넘어가겠습니다.'], 'Kết.'],
      ['hear', '그럼 두 번째 내용으로 넘어가겠습니다.', 'Vậy xin chuyển sang nội dung thứ hai.', ['Kết thúc.', 'Quay lại phần một.', 'Mời hỏi.'], '넘어가다.'],
      ['hear', '오늘은 베트남 전자결제 시장에 대해 말씀드리겠습니다.', 'Hôm nay xin trình bày về thị trường thanh toán điện tử VN.', ['Thị trường Hàn.', 'Ngân hàng truyền thống.', 'Du lịch VN.'], 'Chủ đề.'],
      ['order', 'Sắp xếp: “Có câu hỏi không ạ?”', ['질문', '있으십니까', '?'], '질문 있으십니까?']
    ],
    noi: [['오늘 발표를 맡은 민입니다.', 'oneul balpyoreul mateun Minimnida – Tôi là Minh, người thuyết trình hôm nay.'], ['먼저 배경을 설명하겠습니다.', 'meonjeo baegyeongeul seolmyeonghagesseumnida – Trước tiên xin giải thích bối cảnh.'], ['이상으로 발표를 마치겠습니다.', 'isangeuro balpyoreul machigesseumnida – Xin kết thúc bài thuyết trình.']],
    hoithoai: {
      ctx: 'Em thuyết trình về thị trường thanh toán điện tử Việt Nam cho đối tác Hàn.', vai: 'Khán giả hỏi, em trình bày.', ai: '👥 청중',
      luot: [
        T(['네, 시작해 주세요.', 'ne, sijakhae juseyo', 'Vâng, mời bắt đầu.'], ['안녕하십니까? 오늘은 베트남 전자결제 시장에 대해 말씀드리겠습니다.', 'annyeonghasimnikka? oneureun Beteunam jeonjagyeolje sijange daehae malsseumdeurigesseumnida', 'Xin chào. Hôm nay xin trình bày về thị trường thanh toán điện tử VN.', 'Mở.'], ['시작!', 'sijak!', 'Thô.'], ['몰라요.', 'mollayo', 'Sai.']),
        T(['시장 규모는 어느 정도예요?', 'sijang gyumoneun eoneu jeongdoyeyo?', 'Quy mô thị trường cỡ nào?'], ['자료를 보시면, 최근 5년 동안 매년 20% 이상 증가하였습니다.', 'jaryoreul bosimyeon, choegeun onyeon dongan maenyeon isip peosenteu isang jeunggahayeotseumnida', 'Theo tài liệu, 5 năm gần đây mỗi năm tăng trên 20%. (minh hoạ)', 'Số liệu.'], ['많아요.', 'manayo', 'Mơ hồ.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['감사합니다.', 'gamsahamnida', 'Cảm ơn.'], ['이상으로 발표를 마치겠습니다. 질문 있으십니까?', 'isangeuro balpyoreul machigesseumnida. jilmun isseusimnikka?', 'Xin kết thúc. Quý vị có câu hỏi không ạ?', 'Kết + mời hỏi.'], ['끝났어요. 가세요.', 'kkeunnasseoyo. gaseyo', 'Thô.'], ['다음으로 넘어가겠습니다.', 'daeumeuro neomeogagesseumnida', 'Sai thời điểm.'])
      ], ket: 'Em đã thuyết trình có cấu trúc rõ ràng.'
    },
    tom: ['발표를 맡은 … / 말씀드리겠습니다', '먼저, 다음으로, 마지막으로', '이상으로 마치겠습니다'], nguphap: 'Ngôn ngữ thuyết trình', phatam: '말씀드리겠습니다 [말씀드리겓씀니다]',
    loi: ['Thiếu dàn ý', 'Kết thúc đột ngột'], btvn: ['Soạn bài thuyết trình 3 phút', 'Ghi âm và nghe lại', 'Luyện 🎤 3 câu']
  };

  const d25 = {
    n: 25, ten: plan[24].ten, kinds: K,
    muc: 'Khiếu nại và giải quyết vấn đề lịch sự: nêu sự việc, yêu cầu cụ thể, thương lượng; phía dịch vụ xin lỗi, đưa giải pháp.',
    hoc: `${tbl(['Vai', 'Câu mẫu'], [['Khách', '주문한 물건과 다른 제품이 왔는데요.'], ['Khách', '교환이나 환불을 받고 싶습니다.'], ['Dịch vụ', '불편을 드려서 정말 죄송합니다.'], ['Dịch vụ', '바로 확인해 보고 연락드리겠습니다.'], ['Dịch vụ', '보상으로 쿠폰을 드리겠습니다.']])}`,
    vocab: [
      w('불편', 'bulpyeon', 'bất tiện', '', ['불편을 드려 죄송합니다.', 'bulpyeoneul deuryeo joesonghamnida', 'Xin lỗi vì bất tiện.']),
      w('항의하다', 'hanguihada', 'phản đối, khiếu nại', '', ['고객이 항의했어요.', 'gogaegi hanguihaesseoyo', 'Khách khiếu nại.']),
      w('보상', 'bosang', 'bồi thường', '', ['보상을 받았어요.', 'bosangeul badasseoyo', 'Được bồi thường.']),
      w('책임', 'chaegim', 'trách nhiệm', '', ['책임지겠습니다.', 'chaegimjigesseumnida', 'Chúng tôi chịu trách nhiệm.']),
      w('처리하다', 'cheorihada', 'xử lý', '', ['빨리 처리해 드릴게요.', 'ppalli cheorihae deurilgeyo', 'Sẽ xử lý nhanh.']),
      w('잘못', 'jalmot', 'lỗi, sai', '', ['저희 잘못입니다.', 'jeohui jalmosimnida', 'Là lỗi của chúng tôi.']),
      w('배송', 'baesong', 'giao hàng', '', ['배송이 늦어졌어요.', 'baesongi neujeojyeosseoyo', 'Giao hàng bị chậm.']),
      w('파손', 'pason', 'hư hỏng', '', ['제품이 파손됐어요.', 'jepumi pasondwaesseoyo', 'Sản phẩm bị hỏng.']),
      w('사과하다', 'sagwahada', 'xin lỗi', '', ['정중히 사과드립니다.', 'jeongjunghi sagwadeurimnida', 'Xin trân trọng xin lỗi.']),
      w('재발', 'jaebal', 'tái diễn', '', ['재발하지 않도록 하겠습니다.', 'jaebalhaji antorok hagesseumnida', 'Chúng tôi sẽ không để tái diễn.'])
    ],
    qs: [
      ['mc', 'Câu xin lỗi chuẩn của phía dịch vụ?', '불편을 드려서 정말 죄송합니다.', ['손님 잘못이에요.', '어쩔 수 없어요.', '그냥 쓰세요.'], 'Nhận trách nhiệm.'],
      ['mc', 'Cam kết không tái diễn?', '재발하지 않도록 하겠습니다.', ['또 그럴 거예요.', '재발해도 돼요.', '몰라요.'], '-지 않도록.'],
      ['mc', '파손 = ?', 'hư hỏng', ['phá sản', 'giao hàng', 'đóng gói'], 'pason.'],
      ['hear', '주문한 것과 다른 색깔이 왔는데 교환해 주실 수 있나요?', 'Màu nhận được khác màu đã đặt, đổi giúp được không?', ['Muốn hoàn tiền.', 'Màu đúng rồi.', 'Muốn mua thêm.'], 'Khiếu nại lịch sự.'],
      ['hear', '바로 확인해 보고 오늘 안에 연락드리겠습니다.', 'Sẽ kiểm tra ngay và liên lạc trong hôm nay.', ['Liên lạc tuần sau.', 'Không kiểm tra.', 'Khách tự kiểm tra.'], 'Cam kết.'],
      ['order', 'Sắp xếp: “Là lỗi của chúng tôi.”', ['저희', '잘못입니다', '.'], '저희 잘못입니다.']
    ],
    noi: [['불편을 드려서 정말 죄송합니다.', 'bulpyeoneul deuryeoseo jeongmal joesonghamnida – Thật xin lỗi vì sự bất tiện.'], ['바로 확인해 보고 연락드리겠습니다.', 'baro hwaginhae bogo yeollakdeurigesseumnida – Tôi kiểm tra ngay và liên lạc lại.'], ['재발하지 않도록 하겠습니다.', 'jaebalhaji antorok hagesseumnida – Chúng tôi sẽ không để tái diễn.']],
    hoithoai: {
      ctx: 'Em là quản lý cửa hàng, khách Hàn khiếu nại laptop bị trầy khi giao.', vai: 'Khách khiếu nại, em xử lý.', ai: '😠 손님',
      luot: [
        T(['어제 받은 노트북에 흠집이 있어요. 너무 실망했어요.', 'eoje badeun noteubuge heumjibi isseoyo. neomu silmanghaesseoyo', 'Laptop nhận hôm qua bị trầy. Tôi rất thất vọng.'], ['불편을 드려서 정말 죄송합니다. 사진을 보내 주시겠어요?', 'bulpyeoneul deuryeoseo jeongmal joesonghamnida. sajineul bonae jusigesseoyo?', 'Thật xin lỗi vì bất tiện. Anh gửi ảnh giúp được không?', 'Xin lỗi + bước xử lý.'], ['원래 그래요.', 'wollae geuraeyo', 'Phủ nhận.'], ['손님이 떨어뜨렸죠?', 'sonnimi tteoreotteuryeotjyo?', 'Đổ lỗi.']),
        T(['보냈어요. 새 제품으로 바꿔 주세요.', 'bonaesseoyo. sae jepumeuro bakkwo juseyo', 'Gửi rồi. Đổi cho tôi máy mới.'], ['확인했습니다. 배송 중 파손된 것 같습니다. 바로 새 제품으로 교환해 드리겠습니다.', 'hwaginhaetseumnida. baesong jung pasondoen geot gatseumnida. baro sae jepumeuro gyohwanhae deurigesseumnida', 'Đã kiểm tra. Có vẻ hỏng trong lúc giao. Sẽ đổi máy mới ngay.', 'Phỏng đoán + giải pháp.'], ['환불 안 돼요.', 'hwanbul an dwaeyo', 'Cứng.'], ['다음 달에 해 드릴게요.', 'daeum dare hae deurilgeyo', 'Chậm trễ.']),
        T(['다음에는 조심해 주세요.', 'daeumeneun josimhae juseyo', 'Lần sau cẩn thận nhé.'], ['네, 포장을 강화해서 재발하지 않도록 하겠습니다. 사과의 의미로 마우스를 함께 보내 드리겠습니다.', 'ne, pojangeul ganghwahaeseo jaebalhaji antorok hagesseumnida. sagwaui uimiro mauseureul hamkke bonae deurigesseumnida', 'Vâng, sẽ tăng cường đóng gói để không tái diễn. Xin gửi kèm chuột như lời xin lỗi.', 'Cam kết + bồi thường.'], ['네, 손님도요.', 'ne, sonnimdoyo', 'Thiếu tế nhị.'], ['알았어요.', 'arasseoyo', 'Thiếu chuyên nghiệp.'])
      ], ket: 'Em đã xử lý khiếu nại chuyên nghiệp, giữ được khách.'
    },
    tom: ['불편을 드려 죄송합니다', '확인해 보고 연락드리겠습니다', '재발하지 않도록'], nguphap: 'Ngôn ngữ dịch vụ khách hàng', phatam: '죄송합니다 [죄송함니다]',
    loi: ['Đổ lỗi khách', 'Không đưa giải pháp cụ thể'], btvn: ['Viết kịch bản khiếu nại 8 lượt cả hai vai', 'Viết email xin lỗi khách 100 chữ', 'Luyện 🎤 3 câu']
  };

  const d26 = {
    n: 26, ten: plan[25].ten, kinds: K,
    muc: 'Phỏng vấn xin việc ở công ty Hàn: giới thiệu bản thân 1 phút, động cơ, điểm mạnh, kế hoạch.',
    hoc: `${tbl(['Câu hỏi', 'Gợi ý trả lời'], [['자기소개를 해 주세요.', '저는 …에서 …년 동안 …을/를 담당한 …입니다.'], ['지원 동기가 무엇입니까?', '귀사의 …에 관심이 있어서 지원하게 되었습니다.'], ['장점이 무엇입니까?', '저는 … 편이라서 …'], ['입사 후 계획은?', '입사하면 …을/를 통해 회사에 기여하고 싶습니다.']])}
      ${tip('🔑 <b>귀사</b> = quý công ty. Kết thúc mỗi câu bằng -습니다, giữ câu trả lời 30–60 giây.')}`,
    vocab: [
      w('자기소개', 'jagisogae', 'tự giới thiệu', '', ['자기소개를 해 주세요.', 'jagisogaereul hae juseyo', 'Hãy tự giới thiệu.']),
      w('지원 동기', 'jiwon donggi', 'động cơ ứng tuyển', '', ['지원 동기가 뭐예요?', 'jiwon donggiga mwoyeyo?', 'Động cơ ứng tuyển là gì?']),
      w('귀사', 'gwisa', 'quý công ty', '', ['귀사에 지원했습니다.', 'gwisae jiwonhaetseumnida', 'Tôi ứng tuyển vào quý công ty.']),
      w('담당하다', 'damdanghada', 'phụ trách', '', ['시스템 관리를 담당했습니다.', 'siseutem gwallireul damdanghaetseumnida', 'Tôi phụ trách quản trị hệ thống.']),
      w('경력', 'gyeongnyeok', 'kinh nghiệm làm việc', '', ['경력이 5년입니다.', 'gyeongnyeogi onyeonimnida', 'Có 5 năm kinh nghiệm.']),
      w('기여하다', 'giyeohada', 'đóng góp', '', ['회사에 기여하고 싶습니다.', 'hoesae giyeohago sipseumnida', 'Tôi muốn đóng góp cho công ty.']),
      w('역량', 'yeongnyang', 'năng lực', '', ['역량을 키우겠습니다.', 'yeongnyangeul kiugesseumnida', 'Tôi sẽ nâng cao năng lực.']),
      w('입사하다', 'ipsahada', 'vào công ty', '', ['입사하면 열심히 하겠습니다.', 'ipsahamyeon yeolsimhi hagesseumnida', 'Nếu vào công ty tôi sẽ cố gắng.']),
      w('성과', 'seonggwa', 'thành quả', '', ['좋은 성과를 냈습니다.', 'joeun seonggwareul naetseumnida', 'Đã đạt thành quả tốt.']),
      w('강점', 'gangjeom', 'thế mạnh', '', ['제 강점은 꼼꼼함입니다.', 'je gangjeomeun kkomkkomhamimnida', 'Thế mạnh của tôi là sự tỉ mỉ.'])
    ],
    qs: [
      ['mc', 'Cách nói lịch sự “công ty của anh/chị” trong phỏng vấn?', '귀사', ['너희 회사', '그 회사', '우리 회사'], 'gwisa.'],
      ['mc', 'Trả lời động cơ ứng tuyển chuẩn?', '귀사의 기술력에 관심이 있어서 지원하게 되었습니다.', ['돈 때문이에요.', '그냥요.', '몰라요.'], '-게 되다.'],
      ['mc', '기여하다 = ?', 'đóng góp', ['ghi nhớ', 'tham gia', 'kỳ vọng'], 'giyeohada.'],
      ['hear', '저는 은행에서 5년 동안 IT 시스템 관리를 담당했습니다.', 'Tôi phụ trách quản trị hệ thống IT ở ngân hàng 5 năm.', ['Làm giao dịch viên.', '3 năm.', 'Mới tốt nghiệp.'], 'Kinh nghiệm.'],
      ['hear', '입사하면 제 경험을 살려 회사에 기여하고 싶습니다.', 'Nếu vào công ty tôi muốn phát huy kinh nghiệm đóng góp cho công ty.', ['Tôi muốn nghỉ.', 'Tôi không có kinh nghiệm.', 'Tôi muốn lương cao.'], 'Kế hoạch.'],
      ['order', 'Sắp xếp: “Tôi có 5 năm kinh nghiệm.”', ['저는', '경력이', '5년입니다', '.'], '저는 경력이 5년입니다.']
    ],
    noi: [['저는 은행에서 5년 동안 IT 업무를 담당했습니다.', 'jeoneun eunhaengeseo onyeon dongan IT eommureul damdanghaetseumnida – Tôi phụ trách mảng IT ở ngân hàng 5 năm.'], ['귀사에 기여하고 싶습니다.', 'gwisae giyeohago sipseumnida – Tôi muốn đóng góp cho quý công ty.'], ['제 강점은 꼼꼼함입니다.', 'je gangjeomeun kkomkkomhamimnida – Thế mạnh của tôi là sự tỉ mỉ.']],
    hoithoai: {
      ctx: 'Phỏng vấn vị trí kỹ sư hệ thống tại chi nhánh công ty Hàn ở Hà Nội.', vai: 'Giám khảo hỏi, em trả lời.', ai: '👔 면접관',
      luot: [
        T(['간단하게 자기소개를 해 주십시오.', 'gandanhage jagisogaereul hae jusipsio', 'Xin tự giới thiệu ngắn gọn.'], ['안녕하십니까. 저는 은행에서 5년 동안 IT 시스템 관리를 담당한 응우옌 민입니다.', 'annyeonghasimnikka. jeoneun eunhaengeseo onyeon dongan IT siseutem gwallireul damdanghan Eunguyen Minimnida', 'Xin chào, tôi là Nguyễn Minh, 5 năm phụ trách quản trị hệ thống IT ở ngân hàng.', 'Định ngữ + trang trọng.'], ['저는 민이에요. 잘 부탁해.', 'jeoneun Minieyo. jal butakhae', 'Lẫn 반말.'], ['자기소개 없어요.', 'jagisogae eopseoyo', 'Sai.']),
        T(['우리 회사에 지원한 이유가 뭡니까?', 'uri hoesae jiwonhan iyuga mwomnikka?', 'Lý do ứng tuyển?'], ['귀사의 금융 IT 기술에 관심이 많아서 지원하게 되었습니다.', 'gwisaui geumyung IT gisure gwansimi manaseo jiwonhage doeeotseumnida', 'Tôi rất quan tâm công nghệ IT tài chính của quý công ty nên ứng tuyển.', '귀사 + -게 되다.'], ['월급이 많아서요.', 'wolgeubi manaseoyo', 'Thiếu khéo.'], ['친구가 하라고 했어요.', 'chinguga harago haesseoyo', 'Thiếu chủ động.']),
        T(['입사 후 계획은 무엇입니까?', 'ipsa hu gyehoegeun mueosimnikka?', 'Kế hoạch sau khi vào công ty?'], ['입사하면 시스템 안정성을 높이고 한국어 실력도 더 키워서 귀사에 기여하겠습니다.', 'ipsahamyeon siseutem anjeongseongeul nopigo hangugeo sillyeokdo deo kiwoseo gwisae giyeohagesseumnida', 'Vào công ty tôi sẽ nâng độ ổn định hệ thống, nâng tiếng Hàn để đóng góp cho quý công ty.', 'Cụ thể.'], ['쉬고 싶습니다.', 'swigo sipseumnida', 'Sai.'], ['아직 없습니다.', 'ajik eopseumnida', 'Thiếu.'])
      ], ket: 'Em đã phỏng vấn tự tin, chuyên nghiệp.'
    },
    tom: ['자기소개 / 지원 동기 / 강점 / 입사 후 계획', '귀사 / -습니다'], nguphap: 'Phỏng vấn xin việc', phatam: '지원했습니다 [지원핻씀니다]',
    loi: ['Lẫn 반말', 'Trả lời quá ngắn hoặc quá dài'], btvn: ['Viết bài tự giới thiệu 1 phút', 'Chuẩn bị 5 câu trả lời phỏng vấn', 'Luyện 🎤 3 câu']
  };

  const d27 = {
    n: 27, ten: plan[26].ten, kinds: K,
    muc: 'Đọc đoạn dài TOPIK II: tìm ý chính, sắp xếp câu, điền câu, chọn câu đúng nội dung; kỹ thuật đọc lướt.',
    hoc: `${tbl(['Dạng', 'Mẹo'], [['Ý chính (중심 생각)', 'Câu đầu/cuối, sau 그러므로, 따라서'], ['Sắp xếp câu', 'Tìm câu mở (không có 그래서/이것은 ở đầu)'], ['Điền câu', 'Xem từ chỉ định 이, 그, 이러한 và từ nối'], ['Đúng nội dung', 'Loại đáp án có từ tuyệt đối 항상, 모든, 절대']])}`,
    vocab: [
      w('중심', 'jungsim', 'trung tâm, chính', '', ['중심 생각', 'jungsim saenggak', 'ý chính']),
      w('그러므로', 'geureomeuro', 'vì vậy (văn viết)', '', ['그러므로 노력해야 한다.', 'geureomeuro noryeokhaeya handa', 'Vì vậy phải nỗ lực.']),
      w('이러한', 'ireohan', 'như thế này', '', ['이러한 현상', 'ireohan hyeonsang', 'hiện tượng như vậy']),
      w('현상', 'hyeonsang', 'hiện tượng', '', ['사회 현상', 'sahoe hyeonsang', 'hiện tượng xã hội']),
      w('글쓴이', 'geulsseuni', 'người viết', '', ['글쓴이의 생각', 'geulsseuniui saenggak', 'suy nghĩ người viết']),
      w('순서', 'sunseo', 'thứ tự', '', ['순서대로 나열하세요.', 'sunseodaero nayeolhaseyo', 'Sắp xếp theo thứ tự.']),
      w('항상', 'hangsang', 'luôn luôn', '', ['항상 그런 것은 아니다.', 'hangsang geureon geoseun anida', 'Không phải lúc nào cũng vậy.']),
      w('반드시', 'bandeusi', 'nhất định', '', ['반드시 확인해야 한다.', 'bandeusi hwaginhaeya handa', 'Nhất định phải kiểm tra.']),
      w('효과', 'hyogwa', 'hiệu quả', '', ['효과가 있다.', 'hyogwaga itda', 'Có hiệu quả.']),
      w('훑어보다', 'hulteoboda', 'đọc lướt', '', ['먼저 훑어보세요.', 'meonjeo hulteoboseyo', 'Đọc lướt trước.'])
    ],
    qs: [
      ['mc', 'Đáp án “đúng nội dung” thường sai khi có từ?', '항상, 모든, 절대 (tuyệt đối)', ['그리고', '먼저', '조금'], 'Tuyệt đối hoá.'],
      ['mc', 'Ý chính thường nằm ở?', 'Câu đầu/cuối, sau 그러므로', ['Giữa đoạn ngẫu nhiên', 'Tiêu đề phụ', 'Không có'], 'Chiến lược.'],
      ['mc', 'Câu nào KHÔNG thể là câu mở đầu đoạn?', '그래서 많은 사람들이 운동을 시작했다.', ['최근 건강에 대한 관심이 높아지고 있다.', '요즘 1인 가구가 늘고 있다.', '스마트폰은 현대인의 필수품이다.'], 'Bắt đầu bằng 그래서.'],
      ['hear', '이러한 현상은 앞으로 더 심해질 것이다. 그러므로 대책이 필요하다.', 'Hiện tượng này sẽ nặng hơn. Vì vậy cần đối sách.', ['Hiện tượng sẽ biến mất.', 'Không cần đối sách.', 'Đã có đối sách.'], 'Ý chính sau 그러므로.'],
      ['hear', '운동이 건강에 좋지만 항상 그런 것은 아니다.', 'Tập thể dục tốt cho sức khoẻ nhưng không phải lúc nào cũng vậy.', ['Luôn luôn tốt.', 'Luôn luôn xấu.', 'Không liên quan.'], 'Nhượng bộ.'],
      ['order', 'Sắp xếp: “Đọc lướt trước.”', ['먼저', '훑어보세요', '.'], '먼저 훑어보세요.']
    ],
    noi: [['글쓴이의 중심 생각은 무엇입니까?', 'geulsseuniui jungsim saenggageun mueosimnikka? – Ý chính của người viết là gì?'], ['먼저 훑어보고 자세히 읽어요.', 'meonjeo hulteobogo jasehi ilgeoyo – Đọc lướt trước rồi đọc kỹ.'], ['항상 그런 것은 아니에요.', 'hangsang geureon geoseun anieyo – Không phải lúc nào cũng vậy.']],
    hoithoai: {
      ctx: 'Bạn học hỏi em cách làm phần đọc TOPIK II cho kịp giờ.', vai: 'Bạn hỏi, em chia sẻ chiến lược.', ai: '🧑‍🎓 스터디 친구',
      luot: [
        T(['읽기 시간이 항상 부족해요. 어떻게 해요?', 'ilgi sigani hangsang bujokhaeyo. eotteoke haeyo?', 'Phần đọc lúc nào cũng thiếu giờ. Làm sao?'], ['먼저 질문을 읽고 글을 훑어보면 시간을 아낄 수 있어요.', 'meonjeo jilmuneul ilgo geureul hulteobomyeon siganeul akkil su isseoyo', 'Đọc câu hỏi trước rồi đọc lướt thì tiết kiệm thời gian.', 'Chiến lược.'], ['다 외우세요.', 'da oeuseyo', 'Không khả thi.'], ['천천히 읽으세요.', 'cheoncheonhi ilgeuseyo', 'Ngược.']),
        T(['중심 생각은 어떻게 찾아요?', 'jungsim saenggageun eotteoke chajayo?', 'Tìm ý chính thế nào?'], ['첫 문장과 마지막 문장, 그리고 "그러므로" 뒤를 잘 보세요.', 'cheot munjanggwa majimak munjang, geurigo "geureomeuro" dwireul jal boseyo', 'Xem kỹ câu đầu, câu cuối và sau "그러므로".', 'Mẹo.'], ['아무 데나 봐요.', 'amu dena bwayo', 'Sai.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['내용과 같은 것 고르기는요?', 'naeyonggwa gateun geot goreugineunyo?', 'Còn dạng chọn câu đúng nội dung?'], ['"항상, 모든, 절대" 같은 말이 있는 선택지는 틀릴 가능성이 높아요.', '"hangsang, modeun, jeoldae" gateun mari inneun seontaekjineun teullil ganeungseongi nopayo', 'Đáp án có "luôn, mọi, tuyệt đối" khả năng sai cao.', 'Mẹo loại trừ.'], ['제일 긴 걸 골라요.', 'jeil gin geol gollayo', 'Đoán mò.'], ['1번만 골라요.', 'ilbeonman gollayo', 'Đoán mò.'])
      ], ket: 'Em đã chia sẻ chiến lược đọc TOPIK II hiệu quả.'
    },
    tom: ['Đọc câu hỏi trước', 'Ý chính: đầu/cuối, sau 그러므로', 'Loại đáp án tuyệt đối'], nguphap: 'Kỹ năng đọc TOPIK II', phatam: '훑어보다 [훌터보다]',
    loi: ['Đọc từng chữ, hết giờ'], btvn: ['Làm 20 câu đọc TOPIK II đề cũ có bấm giờ', 'Ghi 15 từ mới', 'Luyện 🎤 3 câu']
  };

  const LK = ['listen', 'listenWord', 'listen', 'meaning', 'pinyin'];
  const d28 = {
    n: 28, ten: plan[27].ten, tong: 1, kt: { n: 20, min: 20 }, kinds: LK,
    muc: 'Nghe TOPIK II: hội thoại công sở, phỏng vấn, bản tin ngắn; nghe ý định, thái độ, hành động tiếp theo.',
    hoc: `${tbl(['Câu hỏi thường gặp', 'Nghe gì'], [['남자가 이어서 할 행동', 'Câu cuối: -(으)ㄹ게요, -아/어야겠어요'], ['여자의 중심 생각', 'Sau 그런데, 하지만, 제 생각에는'], ['들은 내용과 같은 것', 'Số liệu, người, địa điểm'], ['남자의 태도', 'Ngữ điệu và từ: 걱정, 동의, 반대']])}`,
    vocab: [
      w('이어서', 'ieoseo', 'tiếp theo', '', ['이어서 할 행동', 'ieoseo hal haengdong', 'hành động tiếp theo']),
      w('행동', 'haengdong', 'hành động', '', ['행동으로 보여 주세요.', 'haengdongeuro boyeo juseyo', 'Hãy chứng minh bằng hành động.']),
      w('태도', 'taedo', 'thái độ', '', ['긍정적인 태도', 'geungjeongjeogin taedo', 'thái độ tích cực']),
      w('긍정적', 'geungjeongjeok', 'tích cực', '', ['긍정적으로 생각해요.', 'geungjeongjeogeuro saenggakhaeyo', 'Nghĩ tích cực.']),
      w('부정적', 'bujeongjeok', 'tiêu cực', '', ['부정적인 반응', 'bujeongjeogin baneung', 'phản ứng tiêu cực']),
      w('동의하다', 'donguihada', 'đồng ý', '', ['저도 동의해요.', 'jeodo donguihaeyo', 'Tôi cũng đồng ý.']),
      w('반대하다', 'bandaehada', 'phản đối', '', ['그 의견에 반대해요.', 'geu uigyeone bandaehaeyo', 'Tôi phản đối ý kiến đó.']),
      w('우려하다', 'uryeohada', 'lo ngại', '', ['부작용을 우려하고 있다.', 'bujagyongeul uryeohago itda', 'Lo ngại tác dụng phụ.']),
      w('강조하다', 'gangjohada', 'nhấn mạnh', '', ['안전을 강조했어요.', 'anjeoneul gangjohaesseoyo', 'Đã nhấn mạnh an toàn.']),
      w('제안', 'jean', 'đề xuất', '', ['좋은 제안이에요.', 'joeun jeanieyo', 'Đề xuất hay.'])
    ],
    qs: [
      ['hear', '회의 자료를 아직 못 받았어요? 그럼 제가 바로 다시 보낼게요.', 'Chưa nhận tài liệu họp à? Vậy tôi gửi lại ngay. (Hành động tiếp: gửi lại tài liệu)', ['Đi họp ngay.', 'Gọi điện cho sếp.', 'In tài liệu.'], '-ㄹ게요 = hành động tiếp.'],
      ['hear', '재택근무가 편하긴 하지만 저는 팀워크가 약해질까 봐 걱정돼요.', 'Làm từ xa tiện thật nhưng tôi lo tinh thần nhóm yếu đi. (Thái độ: lo ngại)', ['Hoàn toàn ủng hộ.', 'Không quan tâm.', 'Rất phấn khởi.'], '걱정 = lo ngại.'],
      ['hear', '이번 조사에서 응답자의 70%가 신제품에 만족한다고 답했습니다.', '70% người trả lời hài lòng sản phẩm mới.', ['17% hài lòng.', '70% không hài lòng.', 'Chưa khảo sát.'], 'Số liệu.'],
      ['hear', '그 의견에 동의하지만 비용 문제를 먼저 해결해야 한다고 생각해요.', 'Đồng ý ý kiến đó nhưng phải giải quyết chi phí trước.', ['Phản đối hoàn toàn.', 'Chi phí không quan trọng.', 'Không có ý kiến.'], 'Đồng ý có điều kiện.'],
      ['mc', '우려하다 nghĩa là?', 'lo ngại', ['ủng hộ', 'mong đợi', 'nhấn mạnh'], 'uryeohada.'],
      ['order', 'Sắp xếp: “Đề xuất hay.”', ['좋은', '제안이에요', '.'], '좋은 제안이에요.']
    ],
    noi: [['저도 그 의견에 동의해요.', 'jeodo geu uigyeone donguihaeyo – Tôi cũng đồng ý ý kiến đó.'], ['비용 문제가 우려돼요.', 'biyong munjega uryeodwaeyo – Tôi lo ngại vấn đề chi phí.'], ['좋은 제안이에요.', 'joeun jeanieyo – Đề xuất hay.']],
    hoithoai: {
      ctx: 'Em nghe đoạn hội thoại họp rồi trả lời câu hỏi của giáo viên.', vai: 'Cô hỏi, em trả lời.', ai: '👩‍🏫 선생님',
      luot: [
        T(['여자의 중심 생각은 뭐예요?', 'yeojaui jungsim saenggageun mwoyeyo?', 'Ý chính của người nữ là gì?'], ['재택근무에 찬성하지만 팀워크를 위해 주 1회 출근이 필요하다는 거예요.', 'jaetaekgeunmue chanseonghajiman timwokeureul wihae ju irhoe chulgeuni piryohadaneun geoyeyo', 'Ủng hộ làm từ xa nhưng cần lên văn phòng 1 lần/tuần vì tinh thần nhóm.', 'Ý chính sau 하지만.'], ['재택근무를 반대해요.', 'jaetaekgeunmureul bandaehaeyo', 'Nghe nhầm.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['남자의 태도는요?', 'namjaui taedoneunyo?', 'Thái độ người nam?'], ['비용 문제를 우려하고 있어요.', 'biyong munjereul uryeohago isseoyo', 'Lo ngại vấn đề chi phí.', 'Thái độ.'], ['아주 기뻐해요.', 'aju gippeohaeyo', 'Nghe nhầm.'], ['관심 없어요.', 'gwansim eopseoyo', 'Nghe nhầm.']),
        T(['남자가 이어서 할 행동은?', 'namjaga ieoseo hal haengdongeun?', 'Hành động tiếp theo của người nam?'], ['비용 자료를 정리해서 보내겠다고 했어요.', 'biyong jaryoreul jeongnihaeseo bonaegetdago haesseoyo', 'Anh ấy nói sẽ tổng hợp dữ liệu chi phí và gửi.', 'Nghe câu cuối.'], ['회의를 취소할 거예요.', 'hoeuireul chwisohal geoyeyo', 'Nghe nhầm.'], ['퇴근할 거예요.', 'toegeunhal geoyeyo', 'Nghe nhầm.'])
      ], ket: 'Em đã nghe hiểu ý chính, thái độ và hành động tiếp theo.'
    },
    tom: ['Nghe câu cuối cho hành động tiếp', 'Nghe sau 하지만 cho ý chính', 'Nghe từ thái độ'], nguphap: 'Kỹ năng nghe TOPIK II', phatam: '우려 [우려], 동의 [동이]',
    loi: ['Chỉ nghe câu đầu'], btvn: ['Làm 20 câu nghe TOPIK II đề cũ', 'Ghi lại câu cuối mỗi đoạn', 'Luyện 🎤 3 câu']
  };

  const d29 = {
    n: 29, ten: plan[28].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Mô phỏng một tuần làm việc ở công ty Hàn: báo cáo, thuyết trình, khiếu nại, phỏng vấn đối tác, chuyển lời.',
    hoc: `<p>Không có từ mới. Làm hội thoại 3 lần, mỗi lượt cố dùng ít nhất <b>một cấu trúc cấp 3</b> (-는데, gián tiếp, -것 같다, bị động…).</p>`,
    qs: [['mc', 'Sếp nói “내일 회의 없어요” → chuyển lời cho đồng nghiệp?', '부장님이 내일 회의가 없다고 하셨어요.', ['부장님이 내일 회의 없냐고 하셨어요.', '부장님이 회의하자고 하셨어요.', '부장님이 회의하라고 하셨어요.'], 'Gián tiếp.'], ['mc', 'Khách khiếu nại, câu đầu tiên nên là?', '불편을 드려서 정말 죄송합니다.', ['손님이 잘못했어요.', '몰라요.', '다음에 오세요.'], 'Xin lỗi trước.']],
    noi: [['보고드리겠습니다.', 'bogodeurigesseumnida – Xin báo cáo.'], ['바로 확인해 보고 연락드리겠습니다.', 'baro hwaginhae bogo yeollakdeurigesseumnida – Tôi kiểm tra ngay và liên lạc lại.']],
    hoithoai: {
      ctx: 'Một ngày dày lịch ở văn phòng Seoul.', vai: 'Nhiều người nói, em đáp liên tục.', ai: '🎭 여러 사람',
      luot: [
        T(['（부장님）어제 거래처에서 뭐라고 했어요?', '(Bujangnim) eoje georaecheoeseo mworago haesseoyo?', '(Trưởng phòng) Hôm qua đối tác nói gì?'], ['납품 날짜를 일주일 늦춰 달라고 했습니다.', 'nappum naljjareul iljuil neutchwo dallago haetseumnida', 'Họ đề nghị lùi ngày giao hàng một tuần.', 'Gián tiếp nhờ.'], ['늦추라고 했어.', 'neutchurago haesseo', 'Trống không + sai loại.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['（동료）서버가 또 안 돼요!', '(Dongnyo) seobeoga tto an dwaeyo!', '(Đồng nghiệp) Máy chủ lại không chạy!'], ['네트워크가 끊긴 것 같은데 바로 확인해 볼게요.', 'neteuwokeuga kkeunkin geot gateunde baro hwaginhae bolgeyo', 'Hình như mạng bị ngắt, tôi kiểm tra ngay.', 'Bị động + phỏng đoán + -는데.'], ['누가 껐어요?', 'nuga kkeosseoyo?', 'Đổ lỗi.'], ['몰라요, 퇴근해요.', 'mollayo, toegeunhaeyo', 'Thiếu trách nhiệm.']),
        T(['（거래처 전화）담당자분 계세요?', '(Georaecheo jeonhwa) damdangjabun gyeseyo?', '(Đối tác gọi) Người phụ trách có đó không?'], ['지금 회의 중이신데 메모 남겨 드릴까요?', 'jigeum hoeui jungisinde memo namgyeo deurilkkayo?', 'Hiện đang họp, tôi để lại lời nhắn nhé?', '-는데 + kính ngữ.'], ['없어요.', 'eopseoyo', 'Cộc.'], ['회의하세요.', 'hoeuihaseyo', 'Lạc.'])
      ], ket: 'Em đã xử lý trọn một ngày làm việc trung cấp!'
    },
    tom: ['Phản xạ dùng cấu trúc cấp 3'], nguphap: 'Tổng hợp', phatam: 'Ngữ điệu công sở',
    loi: ['Lẫn 반말 khi vội'], btvn: ['Làm lại hội thoại 3 lần', 'Ghi âm báo cáo 1 phút', 'Chuẩn bị bài kiểm tra cuối khoá']
  };

  const d30 = {
    n: 30, ten: plan[29].ten, vocab: [], tong: 1, kt: { n: 30, min: 30 }, kinds: K,
    muc: 'Kiểm tra cuối khoá TOPIK II cấp 3 (30 câu) và lên lộ trình cấp 4.',
    hoc: `<h4>🏁 Hoàn thành cấp 3!</h4>${tbl(['Đã học', 'Tiếp theo ở cấp 4'], [['-는데, gián tiếp, phỏng đoán, bị động', 'Cấu trúc trang trọng: -(으)ㅁ에도 불구하고, -는 바람에, -기 마련이다'], ['Viết câu 51–53', 'Câu 54: luận 600–700 chữ'], ['Chủ đề xã hội cơ bản', 'Kinh tế, chính trị – xã hội, khoa học'], ['~2.000 từ', '~3.500 từ, từ Hán Hàn']])}
      ${tip('📌 TOPIK II tổng 300 điểm: cấp 3 ≥ 120, cấp 4 ≥ 150 (tham khảo, xem topik.go.kr). Hãy làm 1 đề thật để biết vị trí.')}`,
    qs: [['mc', 'Mẹ bảo “일찍 자라” → gián tiếp?', '엄마가 일찍 자라고 했어요.', ['엄마가 일찍 잔다고 했어요.', '엄마가 일찍 자냐고 했어요.', '엄마가 자자고 했어요.'], 'Mệnh lệnh.'], ['mc', '“Hình như sắp mưa”?', '비가 올 것 같아요.', ['비가 온 것 같아요.', '비가 오나 봐요요.', '비가 올 만해요.'], 'Phỏng đoán.'], ['mc', '“Cửa bị đóng”?', '문이 닫혔어요.', ['문을 닫혔어요.', '문이 닫았어요.', '문 닫아요.'], 'Bị động.']],
    noi: [['저는 한국어 3급 과정을 마쳤어요.', 'jeoneun hangugeo samgeup gwajeongeul machyeosseoyo – Tôi đã hoàn thành khoá tiếng Hàn cấp 3.'], ['다음에는 TOPIK 4급에 도전하려고 해요.', 'daeumeneun TOPIK sageube dojeonharyeogo haeyo – Tiếp theo tôi định thử sức TOPIK 4.']],
    hoithoai: {
      ctx: 'Buổi tổng kết khoá học với cô giáo.', vai: 'Cô hỏi, em trả lời.', ai: '👩‍🏫 최 선생님',
      luot: [
        T(['3급을 공부하면서 뭐가 제일 도움이 됐어요?', 'samgeubeul gongbuhamyeonseo mwoga jeil doumi dwaesseoyo?', 'Học cấp 3 điều gì giúp ích nhất?'], ['간접 화법을 배운 후에 회의 내용을 정확하게 전달할 수 있게 됐어요.', 'ganjeop hwabeobeul baeun hue hoeui naeyongeul jeonghwakhage jeondalhal su itge dwaesseoyo', 'Sau khi học câu gián tiếp, em đã có thể truyền đạt nội dung họp chính xác.', 'Kết hợp ngữ pháp.'], ['다 도움이 안 됐어요.', 'da doumi an dwaesseoyo', 'Tiêu cực.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['아직 어려운 부분은요?', 'ajik eoryeoun bubuneunyo?', 'Phần nào còn khó?'], ['쓰기가 아직 어려운 편이라서 매일 한 단락씩 쓰려고 해요.', 'sseugiga ajik eoryeoun pyeoniraseo maeil han dallakssik sseuryeogo haeyo', 'Viết vẫn khá khó nên em định mỗi ngày viết một đoạn.', '편이다 + -려고.'], ['없어요.', 'eopseoyo', 'Thiếu thật.'], ['쓰기 안 할 거예요.', 'sseugi an hal geoyeyo', 'Né tránh.']),
        T(['4급 목표는요?', 'sageup mokpyoneunyo?', 'Mục tiêu cấp 4?'], ['내년에 TOPIK 4급을 따서 한국 회사에서 통역 없이 일하고 싶어요.', 'naenyeone TOPIK sageubeul ttaseo hanguk hoesaeseo tongyeok eopsi ilhago sipeoyo', 'Năm sau em muốn lấy TOPIK 4 để làm ở công ty Hàn không cần phiên dịch.', 'Mục tiêu rõ.'], ['그만할래요.', 'geumanhallaeyo', 'Bỏ dở.'], ['4급이 뭐예요?', 'sageubi mwoyeyo?', 'Lạc.'])
      ], ket: 'Chúc mừng em đã hoàn thành cấp 3 – TOPIK II cấp 3! 🎉'
    },
    tom: ['Kiểm tra 30 câu', 'Lộ trình cấp 4'], nguphap: 'Tổng ôn toàn khoá', phatam: 'Ôn ngữ điệu trung cấp',
    loi: ['Xem lại các câu sai trong báo cáo'], btvn: ['Làm 1 đề TOPIK II thật (nghe, đọc, viết 51–53)', 'Ôn lại 3 ngày điểm thấp nhất', 'Bắt đầu cấp 4 – TOPIK II cấp 4']
  };

  Z.days.push(d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30);
})();

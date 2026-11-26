/* PLT-Edu · Tiếng Hàn – Cấp 4 (TOPIK II · cấp 4): Ngày 15–30 */
(function () {
  'use strict';
  const Z = window.PLT_KO4; if (!Z) return;
  const { w, T, tbl, tip, exs, K } = Z.H;
  const plan = Z.plan;

  const d15 = {
    n: 15, ten: plan[14].ten, kinds: K,
    muc: 'Nói và đọc về kinh tế: lãi suất, lạm phát, tỷ giá, thị trường lao động; giải thích quan hệ nhân quả.',
    hoc: `${tbl(['Thuật ngữ', 'Nghĩa'], [['금리', 'lãi suất'], ['인플레이션 / 물가 상승', 'lạm phát'], ['환율', 'tỷ giá'], ['실업률', 'tỷ lệ thất nghiệp'], ['경기 침체', 'suy thoái kinh tế'], ['소비 심리', 'tâm lý tiêu dùng']])}
      ${exs([['금리가 오르면 대출 부담이 커진다.', 'geumniga oreumyeon daechul budami keojinda', 'Lãi suất tăng thì gánh nặng vay tăng.']])}
      ${tip('ℹ️ Bài học ngôn ngữ, không phải tư vấn tài chính.')}`,
    vocab: [
      w('금리', 'geumni', 'lãi suất', '', ['금리가 인상되었다.', 'geumniga insangdoeeotda', 'Lãi suất đã được nâng.']),
      w('인상', 'insang', 'tăng (giá, lãi)', '', ['가격 인상', 'gagyeok insang', 'tăng giá']),
      w('인하', 'inha', 'giảm (giá, lãi)', '', ['금리 인하', 'geumni inha', 'hạ lãi suất']),
      w('대출', 'daechul', 'khoản vay', '', ['대출을 받았다.', 'daechureul badatda', 'Đã vay.']),
      w('실업률', 'sireomnyul', 'tỷ lệ thất nghiệp', '', ['실업률이 낮아졌다.', 'sireomnyuri najajyeotda', 'Thất nghiệp giảm.']),
      w('경기 침체', 'gyeonggi chimche', 'suy thoái kinh tế', '', ['경기 침체가 계속되고 있다.', 'gyeonggi chimchega gyesokdoego itda', 'Suy thoái tiếp diễn.']),
      w('소비 심리', 'sobi simni', 'tâm lý tiêu dùng', '', ['소비 심리가 위축되었다.', 'sobi simniga wichukdoeeotda', 'Tâm lý tiêu dùng co lại.']),
      w('위축되다', 'wichukdoeda', 'co lại, thu hẹp', '', ['시장이 위축되었다.', 'sijangi wichukdoeeotda', 'Thị trường thu hẹp.']),
      w('환율', 'hwanyul', 'tỷ giá', '', ['환율이 상승했다.', 'hwanyuri sangseunghaetda', 'Tỷ giá tăng.']),
      w('투자', 'tuja', 'đầu tư', '', ['투자가 줄었다.', 'tujaga jureotda', 'Đầu tư giảm.'])
    ],
    qs: [
      ['mc', '금리 인하 = ?', 'hạ lãi suất', ['tăng lãi suất', 'lãi suất cố định', 'vay tiền'], 'inha = giảm.'],
      ['mc', '실업률 = ?', 'tỷ lệ thất nghiệp', ['tỷ lệ thực hiện', 'tỷ lệ lãi', 'tỷ lệ việc làm'], '실업 + 률.'],
      ['mc', 'Quan hệ đúng?', '금리가 오르면 대출 부담이 커진다.', ['금리가 오르면 대출 부담이 줄어든다.', '금리가 내리면 대출이 어렵다.', '금리와 대출은 관계없다.'], 'Nhân quả.'],
      ['hear', '경기 침체로 인해 소비 심리가 크게 위축되었습니다.', 'Do suy thoái, tâm lý tiêu dùng co lại mạnh.', ['Tiêu dùng bùng nổ.', 'Kinh tế tăng trưởng.', 'Không ảnh hưởng.'], 'Văn tin tức.'],
      ['hear', '중앙은행은 금리를 0.25% 인하하기로 했습니다.', 'Ngân hàng trung ương quyết định hạ lãi suất 0,25%.', ['Tăng 0,25%.', 'Hạ 2,5%.', 'Giữ nguyên.'], 'Số + hướng. (minh hoạ)'],
      ['order', 'Sắp xếp: “Đầu tư giảm.”', ['투자가', '줄었다', '.'], '투자가 줄었다.']
    ],
    noi: [['금리가 오르면 대출 부담이 커집니다.', 'geumniga oreumyeon daechul budami keojimnida – Lãi suất tăng thì gánh nặng vay tăng.'], ['경기 침체로 소비가 줄었습니다.', 'gyeonggi chimchero sobiga jureotseumnida – Do suy thoái tiêu dùng giảm.'], ['환율이 많이 올랐어요.', 'hwanyuri mani ollasseoyo – Tỷ giá tăng nhiều.']],
    hoithoai: {
      ctx: 'Em giải thích tình hình kinh tế cho khách hàng doanh nghiệp Hàn tại ngân hàng.', vai: 'Khách hỏi, em trả lời.', ai: '💼 기업 고객',
      luot: [
        T(['요즘 베트남 금리는 어때요?', 'yojeum Beteunam geumrineun eottaeyo?', 'Lãi suất VN dạo này thế nào?'], ['최근 중앙은행이 금리를 소폭 인하했습니다.', 'choegeun jungangeunhaengi geumnireul sopok inhahaetseumnida', 'Gần đây NHTW đã hạ nhẹ lãi suất.', 'Thuật ngữ.'], ['금리가 맛있어요.', 'geumniga masisseoyo', 'Vô nghĩa.'], ['몰라요.', 'mollayo', 'Thiếu chuyên nghiệp.']),
        T(['그럼 대출받기 좋은 시기인가요?', 'geureom daechulbatgi joeun sigiingayo?', 'Vậy có phải thời điểm tốt để vay?'], ['금리 면에서는 유리하지만 환율 변동도 고려하셔야 합니다.', 'geumni myeoneseoneun yurihajiman hwanyul byeondongdo goryeohasyeoya hamnida', 'Về lãi suất thì có lợi, nhưng cũng phải cân nhắc biến động tỷ giá.', 'Cân bằng.'], ['무조건 빨리 받으세요!', 'mujogeon ppalli badeuseyo!', 'Tư vấn ép.'], ['절대 받지 마세요.', 'jeoldae batji maseyo', 'Cực đoan.']),
        T(['구체적인 조건을 알 수 있을까요?', 'guchejeogin jogeoneul al su isseulkkayo?', 'Có thể biết điều kiện cụ thể không?'], ['네, 담당 심사역과 상담 일정을 잡아 드리겠습니다.', 'ne, damdang simsayeokgwa sangdam iljeongeul jaba deurigesseumnida', 'Vâng, tôi sẽ đặt lịch tư vấn với chuyên viên thẩm định.', 'Chuyển chuyên môn.'], ['제가 다 알아요, 지금 결정하세요.', 'jega da arayo, jigeum gyeoljeonghaseyo', 'Vượt thẩm quyền.'], ['안 돼요.', 'an dwaeyo', 'Từ chối vô lý.'])
      ], ket: 'Em đã giải thích kinh tế cân bằng, chuyên nghiệp.'
    },
    tom: ['금리 / 인상 / 인하 / 대출 / 실업률 / 경기 침체'], nguphap: 'Từ vựng kinh tế', phatam: '금리 [금니], 실업률 [시럼뉼]',
    loi: ['Nhầm 인상 và 인하', 'Tư vấn quá chắc chắn'], btvn: ['Đọc 1 tin kinh tế Hàn, tóm tắt 3 câu', 'Học 10 thuật ngữ', 'Luyện 🎤 3 câu']
  };

  const d16 = {
    n: 16, ten: plan[15].ten, kinds: K,
    muc: 'Thảo luận vấn đề tỷ lệ sinh thấp (저출산) và già hoá (고령화) ở Hàn Quốc: nguyên nhân, hậu quả, chính sách.',
    hoc: `${tbl(['Phần', 'Mẫu câu'], [['Hiện trạng', '한국의 출산율은 세계 최저 수준이다.'], ['Nguyên nhân', '높은 주거비와 양육비가 주요 원인으로 꼽힌다.'], ['Hậu quả', '노동력 부족과 복지 부담 증가가 우려된다.'], ['Chính sách', '정부는 육아 휴직 제도를 확대하고 있다.']])}`,
    vocab: [
      w('저출산', 'jeochulsan', 'tỷ lệ sinh thấp', '', ['저출산 문제', 'jeochulsan munje', 'vấn đề sinh thấp']),
      w('고령화', 'goryeonghwa', 'già hoá', '', ['고령화 사회', 'goryeonghwa sahoe', 'xã hội già hoá']),
      w('출산율', 'chulsanyul', 'tỷ lệ sinh', '', ['출산율이 떨어졌다.', 'chulsanyuri tteoreojyeotda', 'Tỷ lệ sinh giảm.']),
      w('양육비', 'yangyukbi', 'chi phí nuôi con', '', ['양육비가 부담된다.', 'yangyukbiga budamdoenda', 'Chi phí nuôi con là gánh nặng.']),
      w('주거비', 'jugeobi', 'chi phí nhà ở', '', ['주거비가 높다.', 'jugeobiga nopda', 'Chi phí nhà ở cao.']),
      w('육아 휴직', 'yuga hyujik', 'nghỉ chăm con', '', ['육아 휴직을 신청했다.', 'yuga hyujigeul sincheonghaetda', 'Đã xin nghỉ chăm con.']),
      w('노동력', 'nodongnyeok', 'lực lượng lao động', '', ['노동력이 부족하다.', 'nodongnyeogi bujokhada', 'Thiếu lao động.']),
      w('복지', 'bokji', 'phúc lợi', '', ['복지 정책', 'bokji jeongchaek', 'chính sách phúc lợi']),
      w('꼽히다', 'kkophida', 'được kể đến', '', ['원인으로 꼽힌다.', 'wonineuro kkophinda', 'Được kể là nguyên nhân.']),
      w('확대하다', 'hwakdaehada', 'mở rộng', '', ['제도를 확대했다.', 'jedoreul hwakdaehaetda', 'Đã mở rộng chế độ.'])
    ],
    qs: [
      ['mc', '저출산 = ?', 'tỷ lệ sinh thấp', ['sinh non', 'sinh đẻ nhiều', 'xuất sản thấp'], 'Hán Hàn: đê xuất sản.'],
      ['mc', 'Hậu quả của già hoá?', '노동력 부족과 복지 부담 증가', ['인구 증가', '실업 감소', '출산율 상승'], 'Logic.'],
      ['mc', '꼽히다 = ?', 'được kể đến', ['bị gập', 'cắm vào', 'chọn ra'], 'kkophida.'],
      ['hear', '높은 주거비와 양육비가 저출산의 주요 원인으로 꼽힙니다.', 'Chi phí nhà ở và nuôi con cao được kể là nguyên nhân chính của sinh thấp.', ['Chi phí thấp.', 'Không có nguyên nhân.', 'Nguyên nhân là thời tiết.'], 'Nguyên nhân.'],
      ['hear', '정부는 육아 휴직 기간을 확대하기로 했습니다.', 'Chính phủ quyết định mở rộng thời gian nghỉ chăm con.', ['Rút ngắn nghỉ.', 'Bỏ chế độ.', 'Không đổi.'], 'Chính sách.'],
      ['order', 'Sắp xếp: “Thiếu lao động.”', ['노동력이', '부족하다', '.'], '노동력이 부족하다.']
    ],
    noi: [['한국은 저출산 문제가 심각합니다.', 'hangugeun jeochulsan munjega simgakhamnida – Hàn có vấn đề sinh thấp nghiêm trọng.'], ['주거비가 주요 원인으로 꼽힙니다.', 'jugeobiga juyo wonineuro kkophimnida – Chi phí nhà ở được kể là nguyên nhân chính.'], ['복지 정책을 확대해야 합니다.', 'bokji jeongchaegeul hwakdaehaeya hamnida – Phải mở rộng chính sách phúc lợi.']],
    hoithoai: {
      ctx: 'Lớp thảo luận TOPIK: vấn đề dân số Hàn – Việt.', vai: 'Giáo viên hỏi, em phân tích.', ai: '👩‍🏫 선생님',
      luot: [
        T(['한국 저출산의 원인은 뭐라고 생각해요?', 'hanguk jeochulsanui wonineun mworago saenggakhaeyo?', 'Em nghĩ nguyên nhân sinh thấp ở Hàn là gì?'], ['높은 주거비와 양육비, 그리고 일과 육아를 병행하기 어려운 환경이 꼽힙니다.', 'nopeun jugeobiwa yangyukbi, geurigo ilgwa yugareul byeonghaenghagi eoryeoun hwangyeongi kkophimnida', 'Chi phí nhà ở, nuôi con cao và môi trường khó cân bằng công việc – con cái.', 'Phân tích.'], ['사람들이 아이를 싫어해서요.', 'saramdeuri aireul sireohaeseoyo', 'Đơn giản hoá.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['베트남은 어때요?', 'Beteunameun eottaeyo?', 'VN thì sao?'], ['베트남도 도시를 중심으로 출산율이 낮아지는 추세입니다.', 'Beteunamdo dosireul jungsimeuro chulsanyuri najajineun chuseimnida', 'VN cũng có xu hướng tỷ lệ sinh giảm, nhất là đô thị.', 'So sánh.'], ['베트남은 문제없어요.', 'Beteunameun munjeeopseoyo', 'Tuyệt đối hoá.'], ['아이가 너무 많아요.', 'aiga neomu manayo', 'Sai xu hướng.']),
        T(['해결책은요?', 'haegyeolchaegeunyo?', 'Giải pháp?'], ['주거 지원과 육아 휴직 확대가 필요하다고 생각합니다.', 'jugeo jiwongwa yuga hyujik hwakdaega piryohadago saenggakhamnida', 'Tôi nghĩ cần hỗ trợ nhà ở và mở rộng nghỉ chăm con.', 'Đề xuất.'], ['방법이 없어요.', 'bangbeobi eopseoyo', 'Bi quan.'], ['아이를 낳으라고 강요해야 해요.', 'aireul naeurago gangyohaeya haeyo', 'Cực đoan.'])
      ], ket: 'Em đã phân tích vấn đề dân số có chiều sâu.'
    },
    tom: ['저출산 / 고령화 / 출산율 / 양육비 / 육아 휴직'], nguphap: 'Nghị luận xã hội', phatam: '출산율 [출싸뉼]',
    loi: ['Đơn giản hoá nguyên nhân'], btvn: ['Viết bài câu 54 về sinh thấp (600 chữ)', 'So sánh VN – Hàn 5 câu', 'Luyện 🎤 3 câu']
  };

  const d17 = {
    n: 17, ten: plan[16].ten, kinds: K,
    muc: 'Đọc – nói về khoa học và y tế: nghiên cứu, kết quả, tác dụng phụ, phòng ngừa; diễn đạt thận trọng.',
    hoc: `${tbl(['Mẫu câu khoa học', 'Nghĩa'], [['연구 결과에 따르면 …', 'Theo kết quả nghiên cứu…'], ['…에 효과가 있는 것으로 나타났다.', 'Cho thấy có hiệu quả với…'], ['부작용이 있을 수 있다.', 'Có thể có tác dụng phụ.'], ['예방이 치료보다 중요하다.', 'Phòng bệnh hơn chữa bệnh.']])}
      ${tip('ℹ️ Bài học ngôn ngữ, không phải tư vấn y tế.')}`,
    vocab: [
      w('연구', 'yeongu', 'nghiên cứu', '', ['연구 결과', 'yeongu gyeolgwa', 'kết quả nghiên cứu']),
      w('따르면', 'ttareumyeon', 'theo (nguồn)', '', ['보도에 따르면', 'bodoe ttareumyeon', 'theo đưa tin']),
      w('효과', 'hyogwa', 'hiệu quả, tác dụng', '', ['효과가 있다.', 'hyogwaga itda', 'Có tác dụng.']),
      w('부작용', 'bujagyong', 'tác dụng phụ', '', ['부작용이 거의 없다.', 'bujagyongi geoui eopda', 'Hầu như không có tác dụng phụ.']),
      w('예방', 'yebang', 'phòng ngừa', '', ['질병 예방', 'jilbyeong yebang', 'phòng bệnh']),
      w('치료', 'chiryo', 'điều trị', '', ['치료를 받았다.', 'chiryoreul badatda', 'Đã điều trị.']),
      w('질병', 'jilbyeong', 'bệnh tật', '', ['만성 질병', 'manseong jilbyeong', 'bệnh mãn tính']),
      w('개발하다', 'gaebalhada', 'phát triển, chế tạo', '', ['신약을 개발했다.', 'sinyageul gaebalhaetda', 'Đã phát triển thuốc mới.']),
      w('실험', 'silheom', 'thí nghiệm', '', ['실험에 성공했다.', 'silheome seonggonghaetda', 'Thí nghiệm thành công.']),
      w('면역력', 'myeonyeongnyeok', 'sức đề kháng', '', ['면역력을 높이다.', 'myeonyeongnyeogeul nopida', 'Tăng sức đề kháng.'])
    ],
    qs: [
      ['mc', '부작용 = ?', 'tác dụng phụ', ['tác dụng chính', 'phó tác giả', 'hiệu quả'], 'Hán Hàn: phó tác dụng.'],
      ['mc', '“Theo kết quả nghiên cứu…”?', '연구 결과에 따르면', ['연구 결과 때문에', '연구 결과처럼', '연구 결과보다'], 'Dẫn nguồn.'],
      ['mc', '“Phòng bệnh hơn chữa bệnh”?', '예방이 치료보다 중요하다.', ['치료가 예방보다 중요하다.', '예방과 치료는 같다.', '예방할 수 없다.'], 'So sánh.'],
      ['hear', '연구 결과에 따르면 규칙적인 운동이 면역력을 높이는 데 효과가 있는 것으로 나타났습니다.', 'Theo nghiên cứu, tập thể dục đều đặn có tác dụng tăng đề kháng.', ['Tập thể dục giảm đề kháng.', 'Không có tác dụng.', 'Chưa nghiên cứu.'], 'Văn khoa học.'],
      ['hear', '이 약은 효과가 좋지만 일부 사람에게 부작용이 있을 수 있습니다.', 'Thuốc này hiệu quả tốt nhưng một số người có thể có tác dụng phụ.', ['Không có tác dụng phụ.', 'Thuốc không hiệu quả.', 'Ai cũng bị tác dụng phụ.'], 'Thận trọng.'],
      ['order', 'Sắp xếp: “Tăng sức đề kháng.”', ['면역력을', '높이다', '.'], '면역력을 높이다.']
    ],
    noi: [['연구 결과에 따르면 효과가 있다고 합니다.', 'yeongu gyeolgwae ttareumyeon hyogwaga itdago hamnida – Theo nghiên cứu thì có hiệu quả.'], ['부작용이 있을 수 있습니다.', 'bujagyongi isseul su itseumnida – Có thể có tác dụng phụ.'], ['예방이 치료보다 중요합니다.', 'yebangi chiryoboda jungyohamnida – Phòng bệnh quan trọng hơn chữa bệnh.']],
    hoithoai: {
      ctx: 'Đồng nghiệp chia sẻ tin về thực phẩm chức năng “thần kỳ”; em phản hồi thận trọng.', vai: 'Bạn kể, em đáp.', ai: '👩 민지',
      luot: [
        T(['이 영양제 먹으면 모든 병이 낫는대요!', 'i yeongyangje meogeumyeon modeun byeongi nanneundaeyo!', 'Nghe nói uống viên này khỏi mọi bệnh!'], ['정말요? 그런데 "모든 병"이라는 말은 좀 과장된 것 같아요.', 'jeongmallyo? geureonde "modeun byeong"iraneun mareun jom gwajangdoen geot gatayo', 'Thật à? Nhưng "mọi bệnh" có vẻ hơi phóng đại.', 'Thận trọng mềm.'], ['와, 바로 살게요!', 'wa, baro salgeyo!', 'Cả tin.'], ['거짓말이에요!', 'geojinmarieyo!', 'Quá thẳng.']),
        T(['광고에서 연구 결과도 있다고 했어요.', 'gwanggoeseo yeongu gyeolgwado itdago haesseoyo', 'Quảng cáo nói có kết quả nghiên cứu.'], ['어떤 연구인지 출처를 확인해 보는 게 좋겠어요. 부작용이 있을 수도 있으니까요.', 'eotteon yeonguinji chulcheoreul hwaginhae boneun ge jokesseoyo. bujagyongi isseul sudo isseunikkayo', 'Nên kiểm tra nguồn nghiên cứu. Vì có thể có tác dụng phụ.', 'Tư duy phản biện.'], ['광고는 항상 맞아요.', 'gwanggoneun hangsang majayo', 'Cả tin.'], ['몰라요.', 'mollayo', 'Thờ ơ.']),
        T(['그럼 어떻게 해야 해요?', 'geureom eotteoke haeya haeyo?', 'Vậy nên làm sao?'], ['먹기 전에 의사나 약사와 상담해 보세요. 예방이 중요하니까 운동도 같이 하고요.', 'meokgi jeone uisana yaksawa sangdamhae boseyo. yebangi jungyohanikka undongdo gachi hagoyo', 'Trước khi uống hãy hỏi bác sĩ hoặc dược sĩ. Phòng bệnh quan trọng nên tập thể dục nữa.', 'Khuyên đúng.'], ['많이 드세요.', 'mani deuseyo', 'Nguy hiểm.'], ['병원 가지 마세요.', 'byeongwon gaji maseyo', 'Nguy hiểm.'])
      ], ket: 'Em đã phản hồi thông tin y tế thận trọng, có trách nhiệm.'
    },
    tom: ['연구 결과에 따르면 / 효과 / 부작용 / 예방'], nguphap: 'Ngôn ngữ khoa học thận trọng', phatam: '부작용 [부자굥]',
    loi: ['Tin quảng cáo tuyệt đối'], btvn: ['Đọc 1 bài báo sức khoẻ tiếng Hàn, tóm tắt', 'Viết 3 câu dẫn nguồn', 'Luyện 🎤 3 câu']
  };

  const d18 = {
    n: 18, ten: plan[17].ten, kinds: K,
    muc: 'Hiểu văn hoá doanh nghiệp Hàn: thứ bậc, 회식, 눈치, thế hệ MZ (MZ세대), work-life balance (워라밸).',
    hoc: `${tbl(['Khái niệm', 'Ý nghĩa'], [['서열 문화', 'văn hoá thứ bậc'], ['회식', 'liên hoan công ty'], ['MZ세대', 'thế hệ Millennials + Gen Z'], ['워라밸', 'cân bằng công việc – cuộc sống'], ['칼퇴근', 'tan làm đúng giờ'], ['꼰대', 'người cổ hủ, hay lên mặt (lóng)']])}
      ${tip('⚠️ 꼰대 là từ lóng có tính chê bai – hiểu để nghe, tránh dùng với người thật.')}`,
    vocab: [
      w('서열', 'seoyeol', 'thứ bậc', '', ['서열 문화가 강하다.', 'seoyeol munhwaga ganghada', 'Văn hoá thứ bậc mạnh.']),
      w('세대', 'sedae', 'thế hệ', '', ['MZ세대', 'emjet sedae', 'thế hệ MZ']),
      w('워라밸', 'worabael', 'cân bằng công việc – cuộc sống', '', ['워라밸을 중시해요.', 'worabaereul jungsihaeyo', 'Coi trọng cân bằng.']),
      w('칼퇴근', 'kaltoegeun', 'tan làm đúng giờ', '', ['오늘은 칼퇴근해요.', 'oneureun kaltoegeunhaeyo', 'Hôm nay tan đúng giờ.']),
      w('중시하다', 'jungsihada', 'coi trọng', '', ['개인 시간을 중시한다.', 'gaein siganeul jungsihanda', 'Coi trọng thời gian riêng.']),
      w('수직적', 'sujikjeok', 'theo chiều dọc (thứ bậc)', '', ['수직적인 조직', 'sujikjeogin jojik', 'tổ chức thứ bậc']),
      w('수평적', 'supyeongjeok', 'theo chiều ngang (bình đẳng)', '', ['수평적인 문화', 'supyeongjeogin munhwa', 'văn hoá bình đẳng']),
      w('조직', 'jojik', 'tổ chức', '', ['조직 문화', 'jojik munhwa', 'văn hoá tổ chức']),
      w('세대 차이', 'sedae chai', 'khoảng cách thế hệ', '', ['세대 차이를 느껴요.', 'sedae chaireul neukkyeoyo', 'Cảm thấy khoảng cách thế hệ.']),
      w('존중하다', 'jonjunghada', 'tôn trọng', '', ['서로 존중해야 해요.', 'seoro jonjunghaeya haeyo', 'Phải tôn trọng lẫn nhau.'])
    ],
    qs: [
      ['mc', '워라밸 = ?', 'cân bằng công việc – cuộc sống', ['làm thêm giờ', 'liên hoan', 'lương thưởng'], 'Work-life balance.'],
      ['mc', '수평적 문화 = ?', 'văn hoá bình đẳng (ngang hàng)', ['văn hoá thứ bậc', 'văn hoá truyền thống', 'văn hoá đại chúng'], 'Ngang.'],
      ['mc', 'Từ nào chỉ nên hiểu, tránh dùng với người thật?', '꼰대', ['선배', '부장님', '동료'], 'Lóng chê bai.'],
      ['hear', 'MZ세대는 회식보다 개인 시간을 더 중시하는 편이에요.', 'Thế hệ MZ có xu hướng coi trọng thời gian riêng hơn liên hoan.', ['MZ rất thích liên hoan.', 'MZ không có thời gian riêng.', 'MZ thích tăng ca.'], '편이다.'],
      ['hear', '세대 차이가 있어도 서로 존중하면 충분히 함께 일할 수 있어요.', 'Có khoảng cách thế hệ nhưng tôn trọng nhau thì hoàn toàn làm cùng được.', ['Không thể làm cùng.', 'Không có khoảng cách.', 'Phải tránh nhau.'], 'Thái độ cân bằng.'],
      ['order', 'Sắp xếp: “Phải tôn trọng lẫn nhau.”', ['서로', '존중해야', '해요', '.'], '서로 존중해야 해요.']
    ],
    noi: [['요즘은 워라밸을 중시하는 사람이 많아요.', 'yojeumeun worabaereul jungsihaneun sarami manayo – Dạo này nhiều người coi trọng cân bằng cuộc sống.'], ['세대 차이를 느낄 때가 있어요.', 'sedae chaireul neukkil ttaega isseoyo – Có lúc cảm thấy khoảng cách thế hệ.'], ['서로 존중하는 게 중요해요.', 'seoro jonjunghaneun ge jungyohaeyo – Tôn trọng lẫn nhau là quan trọng.']],
    hoithoai: {
      ctx: 'Trưởng phòng lớn tuổi người Hàn than nhân viên trẻ không đi liên hoan.', vai: 'Trưởng phòng nói, em đáp khéo.', ai: '👨‍💼 오 부장',
      luot: [
        T(['요즘 젊은 직원들은 회식에 잘 안 와요.', 'yojeum jeolmeun jigwondeureun hoesige jal an wayo', 'Nhân viên trẻ dạo này ít đi liên hoan.'], ['MZ세대는 개인 시간을 중시하는 편이라서 그런 것 같습니다.', 'emjet sedaeneun gaein siganeul jungsihaneun pyeoniraseo geureon geot gatseumnida', 'Có vẻ vì thế hệ MZ khá coi trọng thời gian riêng.', 'Giải thích mềm.'], ['부장님이 꼰대라서요.', 'bujangnimi kkondaeraseoyo', 'Xúc phạm!'], ['젊은 사람들이 나빠요.', 'jeolmeun saramdeuri nappayo', 'Phiến diện.']),
        T(['그래도 팀워크를 위해서는 필요하잖아요.', 'geuraedo timwokeureul wihaeseoneun piryohajanayo', 'Nhưng vì tinh thần nhóm thì cần mà.'], ['맞습니다. 점심 회식이나 짧은 문화 행사로 바꾸면 더 많이 참여할 것 같습니다.', 'matseumnida. jeomsim hoesigina jjalbeun munhwa haengsaro bakkumyeon deo mani chamyeohal geot gatseumnida', 'Đúng ạ. Nếu đổi sang liên hoan trưa hoặc hoạt động văn hoá ngắn thì có lẽ nhiều người tham gia hơn.', 'Đề xuất dung hoà.'], ['회식을 없애세요.', 'hoesigeul eopsaeseyo', 'Cực đoan.'], ['강제로 오게 하세요.', 'gangjero oge haseyo', 'Cực đoan.']),
        T(['좋은 생각이네요. 한번 해 봅시다.', 'joeun saenggagineyo. hanbeon hae bopsida', 'Ý hay. Thử xem nào.'], ['네, 제가 팀원들 의견을 먼저 들어 보고 보고드리겠습니다.', 'ne, jega timwondeul uigyeoneul meonjeo deureo bogo bogodeurigesseumnida', 'Vâng, em sẽ hỏi ý kiến nhóm trước rồi báo cáo ạ.', 'Chủ động.'], ['부장님이 하세요.', 'bujangnimi haseyo', 'Đẩy việc.'], ['됐어요.', 'dwaesseoyo', 'Thiếu lễ.'])
      ], ket: 'Em đã dung hoà khoảng cách thế hệ khéo léo.'
    },
    tom: ['서열 / 회식 / MZ세대 / 워라밸 / 수직적·수평적'], nguphap: 'Văn hoá doanh nghiệp', phatam: '워라밸 [워라밸]',
    loi: ['Dùng từ lóng chê bai', 'Ý kiến cực đoan'], btvn: ['So sánh văn hoá công sở VN – Hàn 150 chữ', 'Viết 3 đề xuất dung hoà', 'Luyện 🎤 3 câu']
  };

  const d19 = {
    n: 19, ten: plan[18].ten, kinds: K,
    muc: 'Đàm phán hợp đồng với đối tác Hàn: giá, điều kiện thanh toán, giao hàng, bảo hành; nhượng bộ có điều kiện.',
    hoc: `${tbl(['Chức năng', 'Mẫu'], [['Đề xuất', '단가를 5% 인하해 주실 수 있을까요?'], ['Điều kiện', '물량을 늘려 주신다면 검토해 보겠습니다.'], ['Giữ lập trường', '그 조건은 저희가 받아들이기 어렵습니다.'], ['Thoả hiệp', '서로 한 발씩 양보하는 게 어떨까요?'], ['Chốt', '그럼 그 조건으로 계약을 진행하겠습니다.']])}`,
    vocab: [
      w('단가', 'danga', 'đơn giá', '', ['단가가 너무 높습니다.', 'dangaga neomu nopseumnida', 'Đơn giá quá cao.']),
      w('물량', 'mullyang', 'số lượng hàng', '', ['물량을 늘리겠습니다.', 'mullyangeul neulligesseumnida', 'Sẽ tăng số lượng.']),
      w('조건', 'jogeon', 'điều kiện', '', ['결제 조건', 'gyeolje jogeon', 'điều kiện thanh toán']),
      w('양보하다', 'yangbohada', 'nhượng bộ', '', ['한 발씩 양보합시다.', 'han balssik yangbohapsida', 'Mỗi bên nhường một bước.']),
      w('받아들이다', 'badadeurida', 'chấp nhận', '', ['받아들이기 어렵습니다.', 'badadeurigi eoryeopseumnida', 'Khó chấp nhận.']),
      w('납기', 'napgi', 'thời hạn giao hàng', '', ['납기를 맞추겠습니다.', 'napgireul matchugesseumnida', 'Sẽ đúng hạn giao.']),
      w('결제', 'gyeolje', 'thanh toán', '', ['30일 이내 결제', 'samsibil inae gyeolje', 'thanh toán trong 30 ngày']),
      w('보증', 'bojeung', 'bảo hành, bảo đảm', '', ['품질 보증 기간', 'pumjil bojeung gigan', 'thời gian bảo hành']),
      w('검토하다', 'geomtohada', 'xem xét', '', ['내부적으로 검토하겠습니다.', 'naebujeogeuro geomtohagesseumnida', 'Sẽ xem xét nội bộ.']),
      w('장기적', 'janggijeok', 'lâu dài', '', ['장기적인 협력', 'janggijeogin hyeomnyeok', 'hợp tác lâu dài'])
    ],
    qs: [
      ['mc', 'Nhượng bộ có điều kiện?', '물량을 늘려 주신다면 단가 인하를 검토해 보겠습니다.', ['무조건 깎아 드릴게요.', '안 돼요.', '마음대로 하세요.'], 'Điều kiện.'],
      ['mc', 'Từ chối lịch sự?', '그 조건은 저희가 받아들이기 어렵습니다.', ['싫어요.', '말도 안 돼요.', '안 해요.'], 'Mềm, trang trọng.'],
      ['mc', '납기 = ?', 'thời hạn giao hàng', ['nộp thuế', 'thanh toán', 'bảo hành'], 'napgi.'],
      ['hear', '서로 한 발씩 양보해서 3% 인하로 하는 게 어떨까요?', 'Mỗi bên nhường một bước, giảm 3% thì sao?', ['Giảm 30%.', 'Không giảm.', 'Tăng 3%.'], 'Thoả hiệp.'],
      ['hear', '장기적인 협력을 고려해서 결제 기간을 60일로 연장해 드리겠습니다.', 'Xét hợp tác lâu dài, xin gia hạn thanh toán lên 60 ngày.', ['Rút xuống 6 ngày.', 'Không gia hạn.', 'Thanh toán ngay.'], 'Nhượng bộ.'],
      ['order', 'Sắp xếp: “Sẽ xem xét nội bộ.”', ['내부적으로', '검토하겠습니다', '.'], '내부적으로 검토하겠습니다.']
    ],
    noi: [['단가를 조금 조정해 주실 수 있을까요?', 'dangareul jogeum jojeonghae jusil su isseulkkayo? – Có thể điều chỉnh đơn giá chút không ạ?'], ['그 조건은 받아들이기 어렵습니다.', 'geu jogeoneun badadeurigi eoryeopseumnida – Điều kiện đó khó chấp nhận.'], ['서로 한 발씩 양보하는 게 어떨까요?', 'seoro han balssik yangbohaneun ge eotteolkkayo? – Mỗi bên nhường một bước thì sao?']],
    hoithoai: {
      ctx: 'Đàm phán mua 300 màn hình từ nhà cung cấp Hàn cho công ty em.', vai: 'Nhà cung cấp nói, em đàm phán.', ai: '🏭 공급업체 과장',
      luot: [
        T(['단가는 대당 200달러입니다.', 'danganeun daedang ibaek dalleoimnida', 'Đơn giá 200 USD/chiếc.'], ['300대를 주문할 예정이니 단가를 10% 인하해 주실 수 있을까요?', 'sambaekdaereul jumunhal yejeongini dangareul sip peosenteu inhahae jusil su isseulkkayo?', 'Chúng tôi dự định đặt 300 chiếc, có thể giảm 10% không ạ?', 'Đề xuất có lý do.'], ['너무 비싸요, 안 사요.', 'neomu bissayo, an sayo', 'Đóng đàm phán.'], ['네, 200달러 좋아요.', 'ne, ibaek dalleo joayo', 'Mất lợi thế.']),
        T(['10%는 받아들이기 어렵습니다. 5%까지 가능합니다.', 'sip peosenteuneun badadeurigi eoryeopseumnida. o peosenteukkaji ganeunghamnida', '10% khó chấp nhận. Tối đa 5%.'], ['그럼 서로 양보해서 7%로 하고, 결제는 선금 30%로 드리겠습니다.', 'geureom seoro yangbohaeseo chil peosenteuro hago, gyeoljeneun seongeum samsip peosenteuro deurigesseumnida', 'Vậy mỗi bên nhường, 7% và chúng tôi trả trước 30%.', 'Thoả hiệp + đổi điều kiện.'], ['5% 싫어요.', 'o peosenteu sireoyo', 'Cứng.'], ['그럼 15%요.', 'geureom sibo peosenteuyo', 'Vô lý.']),
        T(['좋습니다. 납기는 언제까지 원하세요?', 'jotseumnida. napgineun eonjekkaji wonhaseyo?', 'Được. Muốn giao trước khi nào?'], ['다음 달 말까지 납품해 주시면 그 조건으로 계약을 진행하겠습니다.', 'daeum dal malkkaji nappumhae jusimyeon geu jogeoneuro gyeyageul jinhaenghagesseumnida', 'Nếu giao trước cuối tháng sau, chúng tôi tiến hành ký với điều kiện đó.', 'Chốt có điều kiện.'], ['아무 때나요.', 'amu ttaenayo', 'Mất kiểm soát.'], ['내일까지요.', 'naeilkkajiyo', 'Phi thực tế.'])
      ], ket: 'Em đã đàm phán hợp đồng có lợi và giữ quan hệ tốt.'
    },
    tom: ['단가 / 물량 / 조건 / 납기 / 결제', '-신다면 검토하겠습니다', '양보하다'], nguphap: 'Ngôn ngữ đàm phán', phatam: '단가 [단까], 납기 [납끼]',
    loi: ['Chấp nhận ngay', 'Đóng đàm phán quá sớm'], btvn: ['Viết kịch bản đàm phán 10 lượt', 'Học 10 thuật ngữ hợp đồng', 'Luyện 🎤 3 câu']
  };

  const d20 = {
    n: 20, ten: plan[19].ten, kinds: K,
    muc: 'Truyền thông và tin giả: nhận diện tin giả, kiểm chứng nguồn, đạo đức truyền thông; dùng -다고 해서 (dù bảo là… cũng không hẳn).',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ'], [['-다고 해서 (… 것은 아니다)', '유명한 사람이 말했다고 해서 다 사실인 것은 아니다.'], ['출처를 확인하다', 'kiểm tra nguồn'], ['가짜 뉴스', 'tin giả']])}`,
    vocab: [
      w('가짜 뉴스', 'gajja nyuseu', 'tin giả', '', ['가짜 뉴스를 조심하세요.', 'gajja nyuseureul josimhaseyo', 'Cẩn thận tin giả.']),
      w('언론', 'eollon', 'báo chí, ngôn luận', '', ['언론의 역할', 'eollonui yeokhal', 'vai trò báo chí']),
      w('출처', 'chulcheo', 'nguồn', '', ['출처가 불분명하다.', 'chulcheoga bulbunmyeonghada', 'Nguồn không rõ.']),
      w('사실', 'sasil', 'sự thật', '', ['사실을 확인하다.', 'sasireul hwaginhada', 'Xác minh sự thật.']),
      w('퍼지다', 'peojida', 'lan truyền', '', ['소문이 빠르게 퍼졌다.', 'somuni ppareuge peojyeotda', 'Tin đồn lan nhanh.']),
      w('공유하다', 'gongyuhada', 'chia sẻ', '', ['함부로 공유하지 마세요.', 'hamburo gongyuhaji maseyo', 'Đừng chia sẻ bừa.']),
      w('조작', 'jojak', 'thao túng, làm giả', '', ['사진을 조작했다.', 'sajineul jojakhaetda', 'Đã làm giả ảnh.']),
      w('비판적', 'bipanjeok', 'phản biện, phê phán', '', ['비판적으로 생각하다.', 'bipanjeogeuro saenggakhada', 'Suy nghĩ phản biện.']),
      w('-다고 해서', '-dago haeseo', 'dù (bảo là)… cũng không hẳn', '', ['비싸다고 해서 좋은 것은 아니다.', 'bissadago haeseo joeun geoseun anida', 'Đắt không hẳn là tốt.']),
      w('책임감', 'chaegimgam', 'tinh thần trách nhiệm', '', ['책임감 있는 보도', 'chaegimgam inneun bodo', 'đưa tin có trách nhiệm'])
    ],
    qs: [
      ['mc', '“Người nổi tiếng nói không hẳn là sự thật”?', '유명한 사람이 말했다고 해서 다 사실인 것은 아니다.', ['유명한 사람이 말해서 사실이다.', '유명한 사람 말은 거짓이다.', '말했다고 사실이에요.'], '-다고 해서.'],
      ['mc', 'Trước khi chia sẻ tin, nên?', '출처를 확인한다', ['바로 공유한다', '제목만 본다', '친구에게 묻지 않는다'], 'Kiểm chứng.'],
      ['mc', '조작 = ?', 'làm giả, thao túng', ['thao tác', 'tổ chức', 'chế tác'], 'jojak.'],
      ['hear', '출처가 불분명한 뉴스는 함부로 공유하지 않는 것이 좋습니다.', 'Tin không rõ nguồn thì không nên chia sẻ bừa.', ['Nên chia sẻ ngay.', 'Tin nào cũng đúng.', 'Nguồn không quan trọng.'], 'Lời khuyên.'],
      ['hear', '조회 수가 많다고 해서 믿을 만한 정보인 것은 아니에요.', 'Lượt xem nhiều không có nghĩa là thông tin đáng tin.', ['Lượt xem nhiều = đúng.', 'Ít lượt xem = sai.', 'Không liên quan.'], '-다고 해서.'],
      ['order', 'Sắp xếp: “Cẩn thận tin giả.”', ['가짜 뉴스를', '조심하세요', '.'], '가짜 뉴스를 조심하세요.']
    ],
    noi: [['출처를 먼저 확인해 보세요.', 'chulcheoreul meonjeo hwaginhae boseyo – Hãy kiểm tra nguồn trước.'], ['많이 공유됐다고 해서 사실인 건 아니에요.', 'mani gongyudwaetdago haeseo sasirin geon anieyo – Được chia sẻ nhiều không hẳn là thật.'], ['비판적으로 생각해야 해요.', 'bipanjeogeuro saenggakhaeya haeyo – Phải suy nghĩ phản biện.']],
    hoithoai: {
      ctx: 'Đồng nghiệp gửi vào nhóm chat tin “ngân hàng sắp phá sản, rút tiền ngay”.', vai: 'Bạn lo lắng, em phản hồi.', ai: '😰 동료',
      luot: [
        T(['이 뉴스 봤어요? 은행이 곧 망한대요! 빨리 돈 빼야 해요!', 'i nyuseu bwasseoyo? eunhaengi got manghandaeyo! ppalli don ppaeya haeyo!', 'Thấy tin này chưa? Ngân hàng sắp phá sản! Phải rút tiền ngay!'], ['잠깐만요. 출처가 어디예요? 공식 언론에서는 그런 보도가 없어요.', 'jamkkanmanyo. chulcheoga eodiyeyo? gongsik eollon-eseoneun geureon bodoga eopseoyo', 'Khoan đã. Nguồn ở đâu? Báo chính thống không có tin như vậy.', 'Kiểm chứng.'], ['큰일이다! 같이 가요!', 'keunirida! gachi gayo!', 'Hoảng loạn theo.'], ['단톡방에 다 공유해요.', 'dantokbange da gongyuhaeyo', 'Lan truyền tin giả.']),
        T(['그래도 많은 사람이 공유했어요.', 'geuraedo maneun sarami gongyuhaesseoyo', 'Nhưng nhiều người chia sẻ lắm.'], ['많이 공유됐다고 해서 사실인 것은 아니에요. 은행 공식 홈페이지를 확인해 봐요.', 'mani gongyudwaetdago haeseo sasirin geoseun anieyo. eunhaeng gongsik hompeijireul hwaginhae bwayo', 'Chia sẻ nhiều không hẳn là thật. Kiểm tra trang chính thức của ngân hàng xem.', '-다고 해서.'], ['그럼 사실이에요.', 'geureom sasirieyo', 'Cả tin.'], ['몰라요.', 'mollayo', 'Thờ ơ.']),
        T(['확인해 보니까 가짜 뉴스래요.', 'hwaginhae bonikka gajja nyuseuraeyo', 'Kiểm tra thì là tin giả.'], ['다행이에요. 단톡방에도 가짜 뉴스라고 알려서 더 퍼지지 않게 해요.', 'dahaengieyo. dantokbangedo gajja nyuseurago allyeoseo deo peojiji anke haeyo', 'May quá. Báo cả nhóm là tin giả để không lan thêm.', 'Trách nhiệm.'], ['그냥 둬요.', 'geunyang dwoyo', 'Thiếu trách nhiệm.'], ['재미있네요.', 'jaemiinneyo', 'Thờ ơ.'])
      ], ket: 'Em đã ngăn chặn tin giả có trách nhiệm.'
    },
    tom: ['가짜 뉴스 / 출처 / 공유 / 조작', '-다고 해서 … 것은 아니다'], nguphap: 'Tư duy phản biện truyền thông', phatam: '출처 [출처]',
    loi: ['Chia sẻ tin chưa kiểm chứng'], btvn: ['Viết 5 bước kiểm chứng tin bằng tiếng Hàn', 'Viết 3 câu -다고 해서', 'Luyện 🎤 3 câu']
  };

  const d21 = {
    n: 21, ten: plan[20].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Kiểm tra giai đoạn 3: kinh tế, dân số, y tế, văn hoá doanh nghiệp, đàm phán, truyền thông.',
    hoc: `<h4>Tóm tắt giai đoạn 3</h4>${tbl(['Chủ đề', 'Cụm then chốt'], [['Kinh tế', '금리 인상/인하, 경기 침체, 실업률'], ['Dân số', '저출산, 고령화, 양육비, 꼽히다'], ['Y tế', '연구 결과에 따르면, 부작용, 예방'], ['Doanh nghiệp', 'MZ세대, 워라밸, 수평적'], ['Đàm phán', '단가, 납기, 양보, 받아들이기 어렵다'], ['Truyền thông', '가짜 뉴스, 출처, -다고 해서']])}`,
    qs: [['mc', '금리 인상 = ?', 'tăng lãi suất', ['hạ lãi suất', 'lãi cố định', 'tỷ giá'], 'insang.'], ['mc', 'Từ chối lịch sự trong đàm phán?', '받아들이기 어렵습니다.', ['싫어요.', '안 돼.', '말도 안 돼요.'], 'Trang trọng.']],
    noi: [['연구 결과에 따르면 효과가 있습니다.', 'yeongu gyeolgwae ttareumyeon hyogwaga itseumnida – Theo nghiên cứu là có hiệu quả.'], ['출처를 확인해 보세요.', 'chulcheoreul hwaginhae boseyo – Hãy kiểm tra nguồn.']],
    hoithoai: {
      ctx: 'Mô phỏng: phỏng vấn nói TOPIK – giám khảo hỏi chủ đề xã hội.', vai: 'Giám khảo hỏi, em trả lời.', ai: '🎤 시험관',
      luot: [
        T(['저출산 문제를 어떻게 해결할 수 있을까요?', 'jeochulsan munjereul eotteoke haegyeolhal su isseulkkayo?', 'Có thể giải quyết sinh thấp thế nào?'], ['주거비 지원과 육아 휴직 확대 등 젊은 부부의 부담을 줄이는 정책이 필요하다고 생각합니다.', 'jugeobi jiwongwa yuga hyujik hwakdae deung jeolmeun bubuui budameul jurineun jeongchaegi piryohadago saenggakhamnida', 'Tôi nghĩ cần chính sách giảm gánh nặng vợ chồng trẻ như hỗ trợ nhà ở, mở rộng nghỉ chăm con.', 'Có giải pháp.'], ['모르겠어요.', 'moreugesseoyo', 'Thiếu.'], ['아이를 많이 낳으세요.', 'aireul mani naeuseyo', 'Ra lệnh.']),
        T(['가짜 뉴스에 대해서는요?', 'gajja nyuseue daehaeseoneunyo?', 'Còn tin giả?'], ['많이 공유됐다고 해서 사실인 것은 아니므로 출처를 확인하는 습관이 중요합니다.', 'mani gongyudwaetdago haeseo sasirin geoseun animeuro chulcheoreul hwaginhaneun seupgwani jungyohamnida', 'Chia sẻ nhiều không hẳn là thật nên thói quen kiểm tra nguồn rất quan trọng.', '-다고 해서.'], ['뉴스 안 봐요.', 'nyuseu an bwayo', 'Né.'], ['다 믿어요.', 'da mideoyo', 'Cả tin.']),
        T(['워라밸에 대한 생각은요?', 'worabaere daehan saenggageunyo?', 'Nghĩ gì về cân bằng cuộc sống?'], ['일도 중요하지만 개인 시간이 있어야 업무 효율도 높아지기 마련이라고 생각합니다.', 'ildo jungyohajiman gaein sigani isseoya eommu hyoyuldo nopajigi maryeonirago saenggakhamnida', 'Công việc quan trọng nhưng có thời gian riêng thì hiệu suất tất cũng cao hơn.', '-기 마련이다.'], ['일만 해야 해요.', 'ilman haeya haeyo', 'Cực đoan.'], ['일 안 해요.', 'il an haeyo', 'Cực đoan.'])
      ], ket: 'Em đã trả lời phỏng vấn chủ đề xã hội lưu loát!'
    },
    tom: ['Ôn giai đoạn 3', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn', phatam: 'Ôn từ Hán Hàn',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: học lại ngày yếu', 'Làm ⚡ Luyện nhanh', 'Viết 1 bài câu 54 chủ đề xã hội']
  };

  const d22 = {
    n: 22, ten: plan[21].ten, kinds: K,
    muc: 'Thuyết trình chuyên môn có số liệu: dẫn dắt, phân tích biểu đồ, đề xuất, trả lời câu hỏi khó.',
    hoc: `${tbl(['Phần', 'Mẫu'], [['Dẫn dắt', '오늘 발표 주제는 … 입니다.'], ['Biểu đồ', '이 그래프를 보시면 … 꾸준히 증가하고 있음을 알 수 있습니다.'], ['Phân tích', '이는 … 때문인 것으로 분석됩니다.'], ['Đề xuất', '따라서 저희는 …을/를 제안합니다.'], ['Câu hỏi khó', '좋은 질문 감사합니다. 그 부분은 …']])}`,
    vocab: [
      w('주제', 'juje', 'chủ đề', '', ['발표 주제', 'balpyo juje', 'chủ đề thuyết trình']),
      w('그래프', 'geuraepeu', 'biểu đồ', '', ['그래프를 보시면…', 'geuraepeureul bosimyeon…', 'Mời xem biểu đồ…']),
      w('분석되다', 'bunseokdoeda', 'được phân tích', '', ['원인으로 분석된다.', 'wonineuro bunseokdoenda', 'Được phân tích là nguyên nhân.']),
      w('제안하다', 'jeanhada', 'đề xuất', '', ['새 방안을 제안합니다.', 'sae banganeul jeanhamnida', 'Xin đề xuất phương án mới.']),
      w('수치', 'suchi', 'con số, số liệu', '', ['구체적인 수치', 'guchejeogin suchi', 'số liệu cụ thể']),
      w('추이', 'chui', 'diễn biến', '', ['매출 추이', 'maechul chui', 'diễn biến doanh thu']),
      w('도입하다', 'doiphada', 'đưa vào áp dụng', '', ['새 시스템을 도입했다.', 'sae siseutemeul doiphaetda', 'Đã đưa hệ thống mới vào.']),
      w('기대 효과', 'gidae hyogwa', 'hiệu quả kỳ vọng', '', ['기대 효과는 다음과 같습니다.', 'gidae hyogwaneun daeumgwa gatseumnida', 'Hiệu quả kỳ vọng như sau.']),
      w('비용 절감', 'biyong jeolgam', 'cắt giảm chi phí', '', ['비용 절감 효과', 'biyong jeolgam hyogwa', 'hiệu quả giảm chi phí']),
      w('보완하다', 'bowanhada', 'bổ sung, khắc phục', '', ['단점을 보완하겠습니다.', 'danjeomeul bowanhagesseumnida', 'Sẽ khắc phục nhược điểm.'])
    ],
    qs: [
      ['mc', 'Giới thiệu biểu đồ?', '이 그래프를 보시면 매출이 꾸준히 증가하고 있음을 알 수 있습니다.', ['그래프 봐요.', '매출 좋아요.', '그래프가 예뻐요.'], 'Trang trọng.'],
      ['mc', 'Đáp câu hỏi khó lịch sự?', '좋은 질문 감사합니다. 그 부분은 …', ['그건 모르겠어요.', '질문하지 마세요.', '다음.'], 'Chuyên nghiệp.'],
      ['mc', '비용 절감 = ?', 'cắt giảm chi phí', ['tăng chi phí', 'chi phí cố định', 'tiết kiệm thời gian'], 'Hán Hàn.'],
      ['hear', '새 시스템을 도입하면 연간 20%의 비용 절감 효과가 기대됩니다.', 'Áp dụng hệ thống mới thì kỳ vọng giảm 20% chi phí mỗi năm.', ['Tăng 20% chi phí.', 'Giảm 2%.', 'Không hiệu quả.'], 'Số liệu.'],
      ['hear', '이는 고객 응대 시간이 줄었기 때문인 것으로 분석됩니다.', 'Điều này được phân tích là do thời gian phục vụ khách giảm.', ['Do giá tăng.', 'Không rõ nguyên nhân.', 'Do thời tiết.'], 'Phân tích.'],
      ['order', 'Sắp xếp: “Xin đề xuất phương án mới.”', ['새 방안을', '제안합니다', '.'], '새 방안을 제안합니다.']
    ],
    noi: [['이 그래프를 보시면 …', 'i geuraepeureul bosimyeon … – Mời quý vị xem biểu đồ này…'], ['따라서 저희는 … 을 제안합니다.', 'ttaraseo jeohuineun … eul jeanhamnida – Do đó chúng tôi xin đề xuất…'], ['좋은 질문 감사합니다.', 'joeun jilmun gamsahamnida – Cảm ơn câu hỏi hay.']],
    hoithoai: {
      ctx: 'Em thuyết trình đề xuất áp dụng hệ thống tự động hoá cho ban lãnh đạo Hàn.', vai: 'Lãnh đạo hỏi, em trình bày.', ai: '👔 임원진',
      luot: [
        T(['결론부터 말씀해 주세요.', 'gyeollonbuteo malsseumhae juseyo', 'Nói kết luận trước đi.'], ['자동화 시스템을 도입하면 연간 운영 비용을 약 20% 절감할 수 있습니다.', 'jadonghwa siseutemeul doiphamyeon yeongan unyeong biyongeul yak isip peosenteu jeolgamhal su itseumnida', 'Áp dụng tự động hoá có thể giảm khoảng 20% chi phí vận hành mỗi năm.', 'Kết luận + số.'], ['좋은 시스템이에요.', 'joeun siseutemieyo', 'Mơ hồ.'], ['처음부터 설명할게요.', 'cheoeumbuteo seolmyeonghalgeyo', 'Không nghe yêu cầu.']),
        T(['초기 투자 비용이 너무 크지 않나요?', 'chogi tuja biyongi neomu keuji annayo?', 'Chi phí đầu tư ban đầu có quá lớn không?'], ['좋은 질문 감사합니다. 초기 비용은 크지만 2년 이내에 회수할 수 있는 것으로 분석됩니다.', 'joeun jilmun gamsahamnida. chogi biyongeun keujiman inyeon inaee hoesuhal su inneun geoseuro bunseokdoemnida', 'Cảm ơn câu hỏi. Chi phí ban đầu lớn nhưng được phân tích là thu hồi trong 2 năm.', 'Đáp câu hỏi khó.'], ['안 비싸요.', 'an bissayo', 'Phủ nhận suông.'], ['그건 모르겠어요.', 'geugeon moreugesseoyo', 'Thiếu chuẩn bị.']),
        T(['위험 요소는요?', 'wiheom yosoneunyo?', 'Yếu tố rủi ro?'], ['직원 적응 기간이 필요하므로 단계적으로 도입하고 교육으로 보완하겠습니다.', 'jigwon jeogeung gigani piryohameuro dangyejeogeuro doiphago gyoyugeuro bowanhagesseumnida', 'Cần thời gian nhân viên thích nghi nên sẽ áp dụng từng bước và bổ sung bằng đào tạo.', 'Rủi ro + giảm thiểu.'], ['위험 없습니다.', 'wiheom eopseumnida', 'Thiếu trung thực.'], ['몰라요.', 'mollayo', 'Thiếu.'])
      ], ket: 'Em đã thuyết trình chuyên môn thuyết phục.'
    },
    tom: ['이 그래프를 보시면 / 분석됩니다 / 제안합니다', '좋은 질문 감사합니다'], nguphap: 'Thuyết trình chuyên môn', phatam: '분석 [분석], 절감 [절감]',
    loi: ['Không nói kết luận trước khi được yêu cầu', 'Phủ nhận rủi ro'], btvn: ['Soạn thuyết trình 5 phút có 1 biểu đồ', 'Chuẩn bị 3 câu hỏi khó và câu trả lời', 'Luyện 🎤 3 câu']
  };

  const d23 = {
    n: 23, ten: plan[22].ten, kinds: K,
    muc: 'Tranh luận: nêu lập trường, đưa căn cứ, phản bác lịch sự, thừa nhận một phần, tổng kết.',
    hoc: `${tbl(['Chức năng', 'Mẫu'], [['Lập trường', '저는 …에 찬성/반대하는 입장입니다.'], ['Căn cứ', '그 근거로 … 를 들 수 있습니다.'], ['Phản bác', '말씀하신 부분도 일리가 있지만 …'], ['Thừa nhận', '그 점은 인정합니다. 다만 …'], ['Tổng kết', '결론적으로 …']])}`,
    vocab: [
      w('찬성', 'chanseong', 'tán thành', '', ['찬성하는 입장입니다.', 'chanseonghaneun ipjangimnida', 'Tôi tán thành.']),
      w('반론', 'banron', 'phản luận', '', ['반론을 제기하다.', 'banroneul jegihada', 'Nêu phản luận.']),
      w('입장', 'ipjang', 'lập trường', '', ['제 입장은 이렇습니다.', 'je ipjangeun ireoseumnida', 'Lập trường tôi như sau.']),
      w('근거', 'geungeo', 'căn cứ', '', ['근거를 제시하다.', 'geungeoreul jesihada', 'Đưa ra căn cứ.']),
      w('일리', 'illi', 'có lý', '', ['일리가 있습니다.', 'illiga itseumnida', 'Có lý.']),
      w('인정하다', 'injeonghada', 'thừa nhận', '', ['그 점은 인정합니다.', 'geu jeomeun injeonghamnida', 'Điểm đó tôi thừa nhận.']),
      w('반박하다', 'banbakhada', 'phản bác', '', ['반박하고 싶습니다.', 'banbakhago sipseumnida', 'Tôi muốn phản bác.']),
      w('결론적으로', 'gyeollonjeogeuro', 'kết luận lại', '', ['결론적으로 저는…', 'gyeollonjeogeuro jeoneun…', 'Kết luận lại, tôi…']),
      w('토론', 'toron', 'tranh luận, thảo luận', '', ['토론에 참여했다.', 'torone chamyeohaetda', 'Tham gia tranh luận.']),
      w('설득력', 'seoldeungnyeok', 'sức thuyết phục', '', ['설득력이 있다.', 'seoldeungnyeogi itda', 'Có sức thuyết phục.'])
    ],
    qs: [
      ['mc', 'Phản bác lịch sự?', '말씀하신 부분도 일리가 있지만 저는 생각이 조금 다릅니다.', ['틀렸어요.', '말도 안 돼요.', '그만하세요.'], 'Công nhận trước.'],
      ['mc', 'Nêu lập trường?', '저는 이 정책에 찬성하는 입장입니다.', ['좋아요.', '몰라요.', '반대해.'], 'Trang trọng.'],
      ['mc', '설득력 = ?', 'sức thuyết phục', ['sức lực', 'thuyết minh', 'quyết tâm'], 'Hán Hàn.'],
      ['hear', '그 점은 인정합니다. 다만 비용 문제를 고려해야 합니다.', 'Điểm đó tôi thừa nhận. Có điều phải xét vấn đề chi phí.', ['Tôi phản đối hoàn toàn.', 'Không có vấn đề.', 'Chi phí không quan trọng.'], 'Thừa nhận + 다만.'],
      ['hear', '그 근거로 최근 3년간의 통계를 들 수 있습니다.', 'Có thể lấy thống kê 3 năm gần đây làm căn cứ.', ['Không có căn cứ.', 'Thống kê 30 năm.', 'Căn cứ là cảm giác.'], 'Căn cứ.'],
      ['order', 'Sắp xếp: “Có sức thuyết phục.”', ['설득력이', '있다', '.'], '설득력이 있다.']
    ],
    noi: [['저는 … 에 찬성하는 입장입니다.', 'jeoneun … e chanseonghaneun ipjangimnida – Tôi có lập trường tán thành…'], ['말씀하신 부분도 일리가 있지만 …', 'malsseumhasin bubundo illiga itjiman … – Điều anh/chị nói cũng có lý, nhưng…'], ['그 점은 인정합니다. 다만 …', 'geu jeomeun injeonghamnida. daman … – Điểm đó tôi thừa nhận. Có điều…']],
    hoithoai: {
      ctx: 'Tranh luận: “Có nên áp dụng tuần làm việc 4 ngày?” – em tán thành.', vai: 'Đối phương phản đối, em tranh luận.', ai: '🎙️ 상대 토론자',
      luot: [
        T(['주 4일제를 하면 생산성이 떨어질 겁니다.', 'ju sail-jereul hamyeon saengsanseongi tteoreojil geomnida', 'Làm 4 ngày/tuần thì năng suất sẽ giảm.'], ['말씀하신 우려도 일리가 있지만, 해외 사례를 보면 오히려 생산성이 높아진 경우가 많습니다.', 'malsseumhasin uryeodo illiga itjiman, haeoe saryereul bomyeon oryeo saengsanseongi nopajin gyeonguga manseumnida', 'Lo ngại anh nêu có lý, nhưng xem ví dụ nước ngoài thì nhiều trường hợp năng suất lại tăng.', 'Phản bác lịch sự + căn cứ.'], ['틀렸어요.', 'teullyeosseoyo', 'Thô.'], ['그럼 하지 마요.', 'geureom haji mayo', 'Bỏ lập trường.']),
        T(['한국 상황과는 다르지 않습니까?', 'hanguk sanghwanggwaneun dareuji anseumnikka?', 'Không khác tình hình Hàn sao?'], ['그 점은 인정합니다. 다만 일부 부서부터 시범 운영해 보면 검증할 수 있습니다.', 'geu jeomeun injeonghamnida. daman ilbu buseobuteo sibeom unyeonghae bomyeon geomjeunghal su itseumnida', 'Điểm đó tôi thừa nhận. Có điều thí điểm ở một số phòng ban thì kiểm chứng được.', 'Thừa nhận + giải pháp.'], ['같아요.', 'gatayo', 'Thiếu lý lẽ.'], ['상관없어요.', 'sanggwaneopseoyo', 'Né.']),
        T(['마지막으로 정리해 주시죠.', 'majimageuro jeongnihae jusijyo', 'Xin tổng kết.'], ['결론적으로, 주 4일제는 단계적으로 도입한다면 직원 만족도와 생산성을 모두 높일 수 있다고 생각합니다.', 'gyeollonjeogeuro, ju sail-jeneun dangyejeogeuro doiphandamyeon jigwon manjokdowa saengsanseongeul modu nopil su itdago saenggakhamnida', 'Kết luận, nếu áp dụng từng bước, tuần 4 ngày có thể nâng cả mức hài lòng lẫn năng suất.', 'Tổng kết có điều kiện.'], ['무조건 해야 해요.', 'mujogeon haeya haeyo', 'Cực đoan.'], ['끝.', 'kkeut', 'Sai.'])
      ], ket: 'Em đã tranh luận có lý lẽ và lịch sự.'
    },
    tom: ['찬성/반대 입장', '일리가 있지만 / 인정합니다. 다만', '근거로 … 들 수 있다 / 결론적으로'], nguphap: 'Ngôn ngữ tranh luận', phatam: '일리 [일리], 설득력 [설뜽녁]',
    loi: ['Phản bác thô', 'Không có căn cứ'], btvn: ['Chuẩn bị 3 luận điểm + căn cứ cho 1 đề', 'Tranh luận 5 phút với bạn', 'Luyện 🎤 3 câu']
  };

  const d24 = {
    n: 24, ten: plan[23].ten, kinds: K,
    muc: 'Xử lý mâu thuẫn trong nhóm: lắng nghe, gọi tên vấn đề, tìm điểm chung, đề xuất phương án.',
    hoc: `${tbl(['Bước', 'Mẫu câu'], [['Lắng nghe', '두 분 이야기를 먼저 들어 볼게요.'], ['Gọi tên vấn đề', '결국 문제는 일정과 역할 분담인 것 같아요.'], ['Điểm chung', '두 분 모두 프로젝트 성공을 원하시잖아요.'], ['Phương án', '이렇게 나눠서 하면 어떨까요?'], ['Chốt', '그럼 이 방향으로 진행하고 다음 주에 다시 점검해요.']])}`,
    vocab: [
      w('갈등', 'galdeung', 'mâu thuẫn', '', ['팀 내 갈등', 'tim nae galdeung', 'mâu thuẫn trong nhóm']),
      w('오해', 'ohae', 'hiểu lầm', '', ['오해가 생겼어요.', 'ohaega saenggyeosseoyo', 'Có hiểu lầm.']),
      w('역할 분담', 'yeokhal bundam', 'phân chia vai trò', '', ['역할 분담을 다시 해요.', 'yeokhal bundameul dasi haeyo', 'Phân chia vai trò lại.']),
      w('공통점', 'gongtongjeom', 'điểm chung', '', ['공통점을 찾다.', 'gongtongjeomeul chatda', 'Tìm điểm chung.']),
      w('입장 차이', 'ipjang chai', 'khác biệt quan điểm', '', ['입장 차이가 있어요.', 'ipjang chaiga isseoyo', 'Có khác biệt quan điểm.']),
      w('중재하다', 'jungjaehada', 'hoà giải', '', ['제가 중재할게요.', 'jega jungjaehalgeyo', 'Tôi sẽ hoà giải.']),
      w('감정', 'gamjeong', 'cảm xúc', '', ['감정적으로 말하지 마세요.', 'gamjeongjeogeuro malhaji maseyo', 'Đừng nói cảm tính.']),
      w('합의하다', 'habuihada', 'thoả thuận', '', ['합의했어요.', 'habuihaesseoyo', 'Đã thoả thuận.']),
      w('점검하다', 'jeomgeomhada', 'kiểm tra lại', '', ['다음 주에 점검해요.', 'daeum jue jeomgeomhaeyo', 'Tuần sau kiểm tra lại.']),
      w('서운하다', 'seounhada', 'chạnh lòng', '', ['서운했어요.', 'seounhaesseoyo', 'Tôi thấy chạnh lòng.'])
    ],
    qs: [
      ['mc', 'Bước đầu khi hoà giải?', '두 분 이야기를 먼저 들어 볼게요.', ['누가 잘못했어요?', '그만 싸워요!', '저는 몰라요.'], 'Lắng nghe trước.'],
      ['mc', 'Tìm điểm chung?', '두 분 모두 프로젝트 성공을 원하시잖아요.', ['둘 다 틀렸어요.', '한 명이 나가세요.', '알아서 하세요.'], 'Gắn kết.'],
      ['mc', '갈등 = ?', 'mâu thuẫn', ['khát khao', 'cảm xúc', 'bàn bạc'], 'galdeung.'],
      ['hear', '감정적으로 말하지 말고 사실만 이야기해 봐요.', 'Đừng nói cảm tính, hãy chỉ nói sự thật.', ['Hãy nói thật to.', 'Hãy im lặng.', 'Hãy nói cảm xúc.'], 'Điều phối.'],
      ['hear', '그럼 이 방향으로 합의하고 다음 주에 다시 점검해요.', 'Vậy thoả thuận hướng này và tuần sau kiểm tra lại.', ['Không thoả thuận.', 'Huỷ dự án.', 'Kiểm tra hôm nay.'], 'Chốt.'],
      ['order', 'Sắp xếp: “Có hiểu lầm.”', ['오해가', '생겼어요', '.'], '오해가 생겼어요.']
    ],
    noi: [['두 분 이야기를 먼저 들어 볼게요.', 'du bun iyagireul meonjeo deureo bolgeyo – Tôi nghe hai người nói trước.'], ['두 분 모두 같은 목표를 갖고 계시잖아요.', 'du bun modu gateun mokpyoreul gatgo gyesijanayo – Hai người đều cùng mục tiêu mà.'], ['이렇게 나눠서 하면 어떨까요?', 'ireoke nanwoseo hamyeon eotteolkkayo? – Chia như thế này thì sao?']],
    hoithoai: {
      ctx: 'Hai thành viên nhóm (Hàn và Việt) bất đồng về chia việc; em là trưởng nhóm.', vai: 'Thành viên Hàn phàn nàn, em hoà giải.', ai: '😤 현수',
      luot: [
        T(['저만 계속 야근하고 있어요. 너무 불공평해요.', 'jeoman gyesok yageunhago isseoyo. neomu bulgongpyeonghaeyo', 'Chỉ mình tôi tăng ca hoài. Bất công quá.'], ['많이 서운하셨겠어요. 먼저 상황을 자세히 들어 볼게요.', 'mani seounhasyeotgesseoyo. meonjeo sanghwangeul jasehi deureo bolgeyo', 'Chắc anh chạnh lòng lắm. Tôi nghe tình hình chi tiết trước.', 'Đồng cảm + lắng nghe.'], ['참으세요.', 'chameuseyo', 'Gạt đi.'], ['란 씨 잘못이에요.', 'Ran ssi jalmosieyo', 'Phán xét vội.']),
        T(['란 씨는 정시에 퇴근하고 일이 저한테만 몰려요.', 'Ran ssineun jeongsie toegeunhago iri jeohantaeman mollyeoyo', 'Lan về đúng giờ, việc dồn hết cho tôi.'], ['결국 문제는 역할 분담인 것 같네요. 오해가 있을 수도 있으니까 같이 얘기해 봐요.', 'gyeolguk munjeneun yeokhal bundamin geot ganneyo. ohaega isseul sudo isseunikka gachi yaegihae bwayo', 'Rốt cuộc vấn đề là phân vai. Có thể có hiểu lầm, cùng nói chuyện nhé.', 'Gọi tên vấn đề.'], ['란 씨를 혼낼게요.', 'Ran ssireul honnaelgeyo', 'Thiên vị.'], ['원래 그래요.', 'wollae geuraeyo', 'Bỏ mặc.']),
        T(['네, 그렇게 해요.', 'ne, geureoke haeyo', 'Được, làm vậy đi.'], ['업무를 모듈별로 나누고, 매주 금요일에 같이 진행 상황을 점검하면 어떨까요?', 'eommureul modyulbyeollo nanugo, maeju geumyoire gachi jinhaeng sanghwangeul jeomgeomhamyeon eotteolkkayo?', 'Chia việc theo module và mỗi thứ Sáu cùng kiểm tra tiến độ thì sao?', 'Phương án cụ thể.'], ['알아서 하세요.', 'araseo haseyo', 'Bỏ trách nhiệm.'], ['둘 다 야근하세요.', 'dul da yageunhaseyo', 'Không giải quyết.'])
      ], ket: 'Em đã hoà giải mâu thuẫn theo 5 bước.'
    },
    tom: ['Lắng nghe → gọi tên → điểm chung → phương án → chốt', '갈등 / 오해 / 역할 분담 / 합의'], nguphap: 'Ngôn ngữ hoà giải', phatam: '갈등 [갈뜽]',
    loi: ['Phán xét vội', 'Gạt cảm xúc của người khác'], btvn: ['Viết kịch bản hoà giải 8 lượt', 'Học 10 từ', 'Luyện 🎤 3 câu']
  };

  const d25 = {
    n: 25, ten: plan[24].ten, kinds: K,
    muc: 'Phản đối lịch sự trong họp với cấp trên Hàn: đặt câu hỏi gợi mở, nêu rủi ro, đề xuất thay thế.',
    hoc: `${tbl(['Chiến thuật', 'Mẫu'], [['Câu hỏi gợi mở', '혹시 … 부분도 고려해 보셨을까요?'], ['Nêu rủi ro', '제가 걱정되는 부분은 … 입니다.'], ['Đề xuất thay thế', '대안으로 … 하는 방법도 있을 것 같습니다.'], ['Xin phép', '조심스럽게 의견을 말씀드려도 될까요?']])}
      ${tip('🔑 Văn hoá thứ bậc Hàn: phản đối cấp trên nên dùng <b>câu hỏi và từ rào đón</b> (혹시, 조심스럽게) thay vì "아니요".')}`,
    vocab: [
      w('조심스럽다', 'josimseureopda', 'thận trọng', '', ['조심스럽게 말씀드립니다.', 'josimseureopge malsseumdeurimnida', 'Xin thận trọng thưa.']),
      w('혹시', 'hoksi', 'liệu, có khi nào', '', ['혹시 고려해 보셨을까요?', 'hoksi goryeohae bosyeosseulkkayo?', 'Liệu anh đã cân nhắc chưa ạ?']),
      w('고려하다', 'goryeohada', 'cân nhắc', '', ['비용을 고려해야 합니다.', 'biyongeul goryeohaeya hamnida', 'Phải cân nhắc chi phí.']),
      w('대안', 'daean', 'phương án thay thế', '', ['대안을 제시하다.', 'daeaneul jesihada', 'Đưa phương án thay thế.']),
      w('우려', 'uryeo', 'lo ngại', '', ['우려되는 부분', 'uryeodoeneun bubun', 'phần đáng lo ngại']),
      w('위험', 'wiheom', 'rủi ro', '', ['위험이 큽니다.', 'wiheomi keumnida', 'Rủi ro lớn.']),
      w('시범', 'sibeom', 'thí điểm', '', ['시범 운영', 'sibeom unyeong', 'vận hành thí điểm']),
      w('신중하다', 'sinjunghada', 'thận trọng', '', ['신중하게 결정합시다.', 'sinjunghage gyeoljeonghapsida', 'Hãy quyết định thận trọng.']),
      w('보고서', 'bogoseo', 'báo cáo', '', ['보고서로 정리하겠습니다.', 'bogoseoro jeongnihagesseumnida', 'Sẽ tổng hợp thành báo cáo.']),
      w('결정', 'gyeoljeong', 'quyết định', '', ['최종 결정', 'choejong gyeoljeong', 'quyết định cuối'])
    ],
    qs: [
      ['mc', 'Phản đối cấp trên kiểu Hàn?', '혹시 비용 부분도 고려해 보셨을까요?', ['그건 틀렸습니다.', '아니요, 안 됩니다.', '부장님이 잘못 생각하셨어요.'], 'Câu hỏi gợi mở.'],
      ['mc', 'Đề xuất thay thế?', '대안으로 시범 운영부터 하는 방법도 있을 것 같습니다.', ['그냥 하지 맙시다.', '알아서 하세요.', '제 말대로 하세요.'], '대안.'],
      ['mc', '신중하다 = ?', 'thận trọng', ['trung thành', 'nghiêm trọng', 'thân thiện'], 'sinjunghada.'],
      ['hear', '조심스럽게 의견을 말씀드려도 될까요?', 'Tôi xin phép thận trọng nêu ý kiến được không ạ?', ['Tôi phản đối mạnh.', 'Tôi không có ý kiến.', 'Tôi rút lui.'], 'Xin phép.'],
      ['hear', '제가 걱정되는 부분은 일정이 너무 촉박하다는 점입니다.', 'Điều tôi lo là lịch trình quá gấp.', ['Lịch trình thoải mái.', 'Chi phí cao.', 'Không lo gì.'], 'Nêu rủi ro.'],
      ['order', 'Sắp xếp: “Đưa phương án thay thế.”', ['대안을', '제시하다', '.'], '대안을 제시하다.']
    ],
    noi: [['조심스럽게 의견을 말씀드려도 될까요?', 'josimseureopge uigyeoneul malsseumdeuryeodo doelkkayo? – Tôi xin phép nêu ý kiến được không ạ?'], ['혹시 … 도 고려해 보셨을까요?', 'hoksi … do goryeohae bosyeosseulkkayo? – Liệu anh đã cân nhắc cả … chưa ạ?'], ['대안으로 … 하는 방법도 있을 것 같습니다.', 'daeaneuro … haneun bangbeopdo isseul geot gatseumnida – Như phương án thay thế, có thể…']],
    hoithoai: {
      ctx: 'Giám đốc người Hàn muốn triển khai hệ thống mới cho toàn chi nhánh ngay tháng sau; em thấy rủi ro.', vai: 'Giám đốc nói, em phản đối lịch sự.', ai: '👔 지점장님',
      luot: [
        T(['다음 달부터 모든 지점에 새 시스템을 적용합시다.', 'daeum dalbuteo modeun jijeome sae siseutemeul jeogyonghapsida', 'Từ tháng sau áp dụng hệ thống mới cho mọi chi nhánh.'], ['좋은 방향이라고 생각합니다. 조심스럽게 의견을 말씀드려도 될까요?', 'joeun banghyangirago saenggakhamnida. josimseureopge uigyeoneul malsseumdeuryeodo doelkkayo?', 'Em nghĩ hướng đi tốt. Em xin phép nêu ý kiến được không ạ?', 'Công nhận + xin phép.'], ['안 됩니다!', 'an doemnida!', 'Phản đối thô.'], ['네, 알겠습니다.', 'ne, algesseumnida', 'Im lặng trước rủi ro.']),
        T(['네, 말해 보세요.', 'ne, malhae boseyo', 'Ừ, nói đi.'], ['혹시 직원 교육 기간도 고려해 보셨을까요? 제가 걱정되는 부분은 고객 업무 지연입니다.', 'hoksi jigwon gyoyuk gigando goryeohae bosyeosseulkkayo? jega geokjeongdoeneun bubuneun gogaek eommu jiyeonimnida', 'Liệu anh đã cân nhắc thời gian đào tạo nhân viên chưa ạ? Em lo là chậm trễ nghiệp vụ khách.', 'Câu hỏi + rủi ro.'], ['교육 안 했잖아요.', 'gyoyuk an haetjanayo', 'Bắt lỗi.'], ['실패할 거예요.', 'silpaehal geoyeyo', 'Bi quan.']),
        T(['그럼 어떻게 하면 좋겠어요?', 'geureom eotteoke hamyeon jokesseoyo?', 'Vậy nên thế nào?'], ['대안으로 한두 지점에서 시범 운영한 후 확대하는 방법도 있을 것 같습니다. 보고서로 정리해 드리겠습니다.', 'daeaneuro handu jijeomeseo sibeom unyeonghan hu hwakdaehaneun bangbeopdo isseul geot gatseumnida. bogoseoro jeongnihae deurigesseumnida', 'Phương án thay thế là thí điểm 1–2 chi nhánh rồi mở rộng. Em sẽ tổng hợp báo cáo.', 'Đề xuất + hành động.'], ['지점장님이 정하세요.', 'jijeomjangnimi jeonghaseyo', 'Đẩy trách nhiệm.'], ['하지 맙시다.', 'haji mapsida', 'Cực đoan.'])
      ], ket: 'Em đã phản đối cấp trên khéo léo, mang tính xây dựng.'
    },
    tom: ['조심스럽게 / 혹시 … 고려해 보셨을까요?', '걱정되는 부분은 / 대안으로'], nguphap: 'Phản đối lịch sự với cấp trên', phatam: '조심스럽게 [조심스럽께]',
    loi: ['Phản đối thẳng "아니요"', 'Im lặng trước rủi ro'], btvn: ['Viết 3 tình huống phản đối cấp trên khéo', 'Tập nói với giọng mềm', 'Luyện 🎤 3 câu']
  };

  const d26 = {
    n: 26, ten: plan[25].ten, kinds: K,
    muc: 'Đọc báo chuyên sâu: bài phân tích, xã luận; nhận diện luận điểm, giọng điệu, từ nối văn viết cao cấp.',
    hoc: `${tbl(['Từ nối', 'Nghĩa'], [['그럼에도 불구하고', 'mặc dù vậy'], ['이에 따라', 'theo đó'], ['한편', 'mặt khác'], ['요컨대', 'tóm lại'], ['다시 말해', 'nói cách khác']])}`,
    vocab: [
      w('사설', 'saseol', 'xã luận', '', ['오늘 사설', 'oneul saseol', 'xã luận hôm nay']),
      w('필자', 'pilja', 'người viết', '', ['필자의 주장', 'piljaui jujang', 'chủ trương người viết']),
      w('한편', 'hanpyeon', 'mặt khác', '', ['한편 반론도 있다.', 'hanpyeon banrondo itda', 'Mặt khác có phản luận.']),
      w('요컨대', 'yokeondae', 'tóm lại', '', ['요컨대 변화가 필요하다.', 'yokeondae byeonhwaga piryohada', 'Tóm lại cần thay đổi.']),
      w('이에 따라', 'ie ttara', 'theo đó', '', ['이에 따라 정책이 바뀌었다.', 'ie ttara jeongchaegi bakkwieotda', 'Theo đó chính sách đã đổi.']),
      w('다시 말해', 'dasi malhae', 'nói cách khác', '', ['다시 말해 비용이 문제다.', 'dasi malhae biyongi munjeda', 'Nói cách khác chi phí là vấn đề.']),
      w('논조', 'nonjo', 'giọng điệu (bài báo)', '', ['비판적인 논조', 'bipanjeogin nonjo', 'giọng điệu phê phán']),
      w('시사하다', 'sisahada', 'gợi ý, cho thấy', '', ['이는 많은 것을 시사한다.', 'ineun maneun geoseul sisahanda', 'Điều này gợi ý nhiều điều.']),
      w('대책', 'daechaek', 'đối sách', '', ['대책이 시급하다.', 'daechaegi sigeuphada', 'Đối sách là cấp bách.']),
      w('시급하다', 'sigeuphada', 'cấp bách', '', ['시급한 과제', 'sigeuphan gwaje', 'nhiệm vụ cấp bách'])
    ],
    qs: [
      ['mc', '요컨대 = ?', 'tóm lại', ['ví dụ', 'mặt khác', 'theo đó'], 'Kết luận.'],
      ['mc', '한편 dùng để?', 'Chuyển sang mặt khác', ['Kết luận', 'Liệt kê', 'Đưa ví dụ'], 'hanpyeon.'],
      ['mc', '논조 = ?', 'giọng điệu bài báo', ['luận điểm', 'tổ chức', 'luận văn'], 'nonjo.'],
      ['hear', '이번 조사 결과는 청년 정책의 방향에 대해 많은 것을 시사한다.', 'Kết quả khảo sát gợi ý nhiều điều về hướng chính sách thanh niên.', ['Không liên quan chính sách.', 'Chính sách đã hoàn hảo.', 'Không có khảo sát.'], '시사하다.'],
      ['hear', '요컨대 정부의 대책 마련이 시급하다는 것이 필자의 주장이다.', 'Tóm lại, người viết chủ trương chính phủ cần gấp rút có đối sách.', ['Không cần đối sách.', 'Người viết phản đối chính phủ hoàn toàn.', 'Đối sách đã có.'], 'Luận điểm.'],
      ['order', 'Sắp xếp: “Đối sách là cấp bách.”', ['대책이', '시급하다', '.'], '대책이 시급하다.']
    ],
    noi: [['필자는 … 라고 주장합니다.', 'piljaneun … rago jujanghamnida – Người viết cho rằng…'], ['한편, 반대 의견도 있습니다.', 'hanpyeon, bandae uigyeondo itseumnida – Mặt khác cũng có ý kiến phản đối.'], ['요컨대 대책이 시급합니다.', 'yokeondae daechaegi sigeuphamnida – Tóm lại cần đối sách gấp.']],
    hoithoai: {
      ctx: 'Câu lạc bộ đọc báo: em tóm tắt một bài xã luận về lao động nước ngoài ở Hàn.', vai: 'Thành viên hỏi, em phân tích.', ai: '📰 독서 모임',
      luot: [
        T(['이 사설의 핵심은 뭐예요?', 'i saseorui haeksimeun mwoyeyo?', 'Cốt lõi của xã luận này là gì?'], ['요컨대 외국인 노동자에 대한 처우 개선이 시급하다는 것이 필자의 주장입니다.', 'yokeondae oegugin nodongjae daehan cheou gaeseoni sigeuphadaneun geosi piljaui jujangimnida', 'Tóm lại người viết chủ trương cần gấp cải thiện đãi ngộ lao động nước ngoài.', 'Tóm tắt luận điểm.'], ['노동자 얘기요.', 'nodongja yaegiyo', 'Sơ sài.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['논조는 어때요?', 'nonjoneun eottaeyo?', 'Giọng điệu thế nào?'], ['정부 정책에 대해 비판적인 논조이지만, 한편으로는 기업의 책임도 지적하고 있습니다.', 'jeongbu jeongchaege daehae bipanjeogin nonjoijiman, hanpyeoneuroneun gieobui chaegimdo jijeokhago itseumnida', 'Giọng phê phán chính sách chính phủ, mặt khác cũng chỉ ra trách nhiệm doanh nghiệp.', 'Phân tích giọng điệu.'], ['좋은 논조예요.', 'joeun nonjoyeyo', 'Mơ hồ.'], ['화가 났어요.', 'hwaga nasseoyo', 'Cảm tính.']),
        T(['동의해요?', 'donguihaeyo?', 'Bạn đồng ý không?'], ['대체로 동의하지만, 구체적인 대책이 부족한 점은 아쉽습니다.', 'daecheoro donguihajiman, guchejeogin daechaegi bujokhan jeomeun aswipseumnida', 'Nhìn chung đồng ý, nhưng tiếc là thiếu đối sách cụ thể.', 'Đánh giá phản biện.'], ['완전히 맞아요.', 'wanjeonhi majayo', 'Thiếu phản biện.'], ['다 틀렸어요.', 'da teullyeosseoyo', 'Cực đoan.'])
      ], ket: 'Em đã đọc và phân tích xã luận có tư duy phản biện.'
    },
    tom: ['요컨대 / 한편 / 이에 따라 / 다시 말해', '필자 / 논조 / 시사하다'], nguphap: 'Đọc báo chuyên sâu', phatam: '시급하다 [시그파다]',
    loi: ['Tóm tắt thiếu luận điểm', 'Đánh giá cực đoan'], btvn: ['Đọc 1 xã luận Hàn, tóm 3 câu', 'Đánh giá giọng điệu và nêu ý kiến 100 chữ', 'Luyện 🎤 3 câu']
  };

  const d27 = {
    n: 27, ten: plan[26].ten, kinds: K,
    muc: 'Nghe bài giảng và phỏng vấn dài: ghi chú cấu trúc, nhận diện quan điểm diễn giả, câu hỏi suy luận.',
    hoc: `${tbl(['Tín hiệu bài giảng', 'Ý nghĩa'], [['오늘은 …에 대해 알아보겠습니다', 'chủ đề'], ['첫째, 둘째…', 'liệt kê – ghi số'], ['여기서 중요한 것은 …', 'ý trọng tâm'], ['예를 들면 …', 'ví dụ – có thể bỏ chi tiết'], ['정리하자면 …', 'tổng kết']])}`,
    vocab: [
      w('강의', 'gangui', 'bài giảng', '', ['강의를 들었어요.', 'ganguireul deureosseoyo', 'Đã nghe giảng.']),
      w('강연', 'gangyeon', 'diễn thuyết', '', ['특별 강연', 'teukbyeol gangyeon', 'diễn thuyết đặc biệt']),
      w('정리하자면', 'jeongnihajamyeon', 'tổng kết lại', '', ['정리하자면 세 가지입니다.', 'jeongnihajamyeon se gajiimnida', 'Tổng kết lại có ba điều.']),
      w('핵심', 'haeksim', 'cốt lõi', '', ['핵심 내용', 'haeksim naeyong', 'nội dung cốt lõi']),
      w('필기하다', 'pilgihada', 'ghi chép', '', ['강의를 필기해요.', 'ganguireul pilgihaeyo', 'Ghi chép bài giảng.']),
      w('추론하다', 'churonhada', 'suy luận', '', ['내용을 추론하다.', 'naeyongeul churonhada', 'Suy luận nội dung.']),
      w('관점', 'gwanjeom', 'quan điểm, góc nhìn', '', ['다른 관점에서 보면', 'dareun gwanjeomeseo bomyeon', 'nhìn từ góc khác']),
      w('사례', 'sarye', 'ví dụ thực tế', '', ['성공 사례', 'seonggong sarye', 'ví dụ thành công']),
      w('강조점', 'gangjojeom', 'điểm nhấn', '', ['강조점을 파악하다.', 'gangjojeomeul paakhada', 'Nắm điểm nhấn.']),
      w('파악하다', 'paakhada', 'nắm bắt', '', ['요점을 파악했어요.', 'yojeomeul paakhaesseoyo', 'Đã nắm ý chính.'])
    ],
    qs: [
      ['hear', '여기서 중요한 것은 기술보다 사람의 변화라는 점입니다.', 'Điều quan trọng ở đây là sự thay đổi của con người hơn công nghệ.', ['Công nghệ quan trọng hơn.', 'Không gì quan trọng.', 'Chỉ công nghệ.'], 'Ý trọng tâm.'],
      ['hear', '정리하자면, 디지털 전환의 성공은 리더십, 교육, 문화 세 가지에 달려 있습니다.', 'Tổng kết, thành công chuyển đổi số phụ thuộc 3 yếu tố: lãnh đạo, đào tạo, văn hoá.', ['Chỉ phụ thuộc công nghệ.', '2 yếu tố.', 'Không phụ thuộc gì.'], 'Tổng kết.'],
      ['hear', '예를 들면 한 은행은 직원 교육에 투자해서 고객 만족도가 30% 높아졌습니다.', 'Ví dụ một ngân hàng đầu tư đào tạo nên hài lòng khách tăng 30%.', ['Giảm 30%.', 'Không đầu tư.', 'Tăng 3%.'], 'Ví dụ có số.'],
      ['mc', '파악하다 = ?', 'nắm bắt', ['phá huỷ', 'ghi chép', 'suy luận'], 'paakhada.'],
      ['mc', 'Khi nghe 예를 들면…, chiến lược?', 'Nắm ý ví dụ, không cần ghi mọi chi tiết', ['Ghi từng chữ', 'Bỏ qua phần sau', 'Dừng nghe'], 'Chiến lược.'],
      ['order', 'Sắp xếp: “Đã nắm ý chính.”', ['요점을', '파악했어요', '.'], '요점을 파악했어요.']
    ],
    noi: [['핵심 내용은 세 가지입니다.', 'haeksim naeyongeun se gajiimnida – Nội dung cốt lõi có ba điều.'], ['정리하자면 …', 'jeongnihajamyeon … – Tổng kết lại…'], ['다른 관점에서 보면 …', 'dareun gwanjeomeseo bomyeon … – Nhìn từ góc khác thì…']],
    hoithoai: {
      ctx: 'Sau buổi diễn thuyết về chuyển đổi số, sếp hỏi em nội dung.', vai: 'Sếp hỏi, em tóm tắt.', ai: '👨‍💼 팀장님',
      luot: [
        T(['강연 핵심이 뭐였어요?', 'gangyeon haeksimi mwoyeosseoyo?', 'Cốt lõi bài diễn thuyết là gì?'], ['디지털 전환의 성공은 기술보다 사람의 변화에 달려 있다는 것이었습니다.', 'dijiteol jeonhwanui seonggongeun gisulboda saramui byeonhwae dallyeo itdaneun geosieotseumnida', 'Thành công chuyển đổi số phụ thuộc sự thay đổi con người hơn công nghệ.', 'Ý trọng tâm.'], ['재미있었어요.', 'jaemiisseosseoyo', 'Cảm nhận, không tóm tắt.'], ['기술이요.', 'gisuriyo', 'Nghe nhầm.']),
        T(['구체적으로요?', 'guchejeogeuroyo?', 'Cụ thể?'], ['리더십, 교육, 문화 세 가지를 강조했고, 한 은행의 사례로 만족도가 30% 높아졌다고 했습니다.', 'rideosip, gyoyuk, munhwa se gajireul gangjohaetgo, han eunhaengui saryero manjokdoga samsip peosenteu nopajyeotdago haetseumnida', 'Nhấn mạnh 3 điều lãnh đạo, đào tạo, văn hoá; dẫn ví dụ một ngân hàng tăng 30% hài lòng.', 'Chi tiết + gián tiếp.'], ['많이 말했어요.', 'mani malhaesseoyo', 'Mơ hồ.'], ['필기 안 했어요.', 'pilgi an haesseoyo', 'Thiếu.']),
        T(['우리 팀에 적용할 점은요?', 'uri time jeogyonghal jeomeun?', 'Điểm áp dụng cho nhóm mình?'], ['직원 교육 프로그램을 먼저 강화하는 것이 좋겠습니다.', 'jigwon gyoyuk peurogeuraemeul meonjeo ganghwahaneun geosi jokesseumnida', 'Nên tăng cường chương trình đào tạo nhân viên trước.', 'Suy luận áp dụng.'], ['없어요.', 'eopseoyo', 'Thiếu.'], ['새 컴퓨터를 사요.', 'sae keompyuteoreul sayo', 'Lệch ý chính.'])
      ], ket: 'Em đã nghe – tóm tắt – suy luận áp dụng từ bài giảng.'
    },
    tom: ['Tín hiệu bài giảng', '정리하자면 / 핵심 / 사례 / 파악하다'], nguphap: 'Kỹ năng nghe dài', phatam: '정리 [정니]',
    loi: ['Ghi chép mọi ví dụ, bỏ ý chính'], btvn: ['Nghe 1 bài giảng tiếng Hàn 15 phút (KBS, TED)', 'Tóm tắt 5 câu', 'Luyện 🎤 3 câu']
  };

  const LK = ['listen', 'listenWord', 'listen', 'meaning', 'pinyin'];
  const d28 = {
    n: 28, ten: plan[27].ten, tong: 1, kt: { n: 20, min: 20 }, kinds: LK,
    muc: 'Luyện nghe TOPIK II nâng cao (câu 30–50): tin tức, phỏng vấn chuyên gia, thảo luận; thái độ và ý đồ người nói.',
    hoc: `${tbl(['Dạng', 'Mẹo'], [['Thái độ người nói', 'Nghe từ đánh giá: 우려하다, 긍정적, 회의적'], ['Mục đích nói', 'Nghe câu đầu: 설명/설득/제안/비판'], ['Đúng nội dung', 'Ghi số, tên chính sách'], ['Suy luận', 'Kết hợp ý chính + bối cảnh']])}`,
    vocab: [
      w('회의적', 'hoeuijeok', 'hoài nghi', '', ['회의적인 반응', 'hoeuijeogin baneung', 'phản ứng hoài nghi']),
      w('반응', 'baneung', 'phản ứng', '', ['반응이 좋다.', 'baneungi jota', 'Phản ứng tốt.']),
      w('전문가', 'jeonmunga', 'chuyên gia', '', ['전문가 인터뷰', 'jeonmunga inteobyu', 'phỏng vấn chuyên gia']),
      w('설득하다', 'seoldeukhada', 'thuyết phục', '', ['상대를 설득하다.', 'sangdaereul seoldeukhada', 'Thuyết phục đối phương.']),
      w('비판하다', 'bipanhada', 'phê phán', '', ['정책을 비판했다.', 'jeongchaegeul bipanhaetda', 'Đã phê phán chính sách.']),
      w('의도', 'uido', 'ý đồ', '', ['말하는 의도', 'malhaneun uido', 'ý đồ khi nói']),
      w('전망', 'jeonmang', 'triển vọng', '', ['밝은 전망', 'balgeun jeonmang', 'triển vọng sáng sủa']),
      w('신중론', 'sinjungnon', 'quan điểm thận trọng', '', ['신중론을 폈다.', 'sinjungnoneul pyeotda', 'Đưa ra quan điểm thận trọng.']),
      w('지지하다', 'jijihada', 'ủng hộ', '', ['정책을 지지한다.', 'jeongchaegeul jijihanda', 'Ủng hộ chính sách.']),
      w('평가하다', 'pyeonggahada', 'đánh giá', '', ['긍정적으로 평가했다.', 'geungjeongjeogeuro pyeonggahaetda', 'Đánh giá tích cực.'])
    ],
    qs: [
      ['hear', '새 정책의 취지는 좋지만, 실제 효과에 대해서는 아직 회의적입니다.', 'Mục đích chính sách tốt nhưng tôi còn hoài nghi về hiệu quả thực. (Thái độ: hoài nghi)', ['Hoàn toàn ủng hộ.', 'Phản đối kịch liệt.', 'Không quan tâm.'], '회의적.'],
      ['hear', '전문가들은 내년 경제 전망을 비교적 긍정적으로 평가했습니다.', 'Các chuyên gia đánh giá triển vọng kinh tế năm sau khá tích cực.', ['Rất tiêu cực.', 'Không đánh giá.', 'Năm nay.'], '긍정적.'],
      ['hear', '이 자리를 빌려 여러분께 이 제도의 필요성을 말씀드리고자 합니다.', 'Nhân dịp này tôi xin trình bày sự cần thiết của chế độ. (Mục đích: thuyết phục)', ['Phê phán chế độ.', 'Xin lỗi.', 'Kể chuyện cười.'], 'Mục đích.'],
      ['hear', '도입 자체에는 찬성하지만 속도를 조절해야 한다는 신중론도 있습니다.', 'Cũng có quan điểm thận trọng: tán thành áp dụng nhưng phải điều chỉnh tốc độ.', ['Phản đối áp dụng.', 'Áp dụng ngay.', 'Không ý kiến.'], '신중론.'],
      ['mc', '지지하다 = ?', 'ủng hộ', ['chỉ trích', 'giữ gìn', 'trì hoãn'], 'jijihada.'],
      ['order', 'Sắp xếp: “Đánh giá tích cực.”', ['긍정적으로', '평가했다', '.'], '긍정적으로 평가했다.']
    ],
    noi: [['아직은 회의적입니다.', 'ajigeun hoeuijeogimnida – Tôi vẫn còn hoài nghi.'], ['긍정적으로 평가합니다.', 'geungjeongjeogeuro pyeonggahamnida – Tôi đánh giá tích cực.'], ['속도를 조절해야 한다고 봅니다.', 'sokdoreul jojeolhaeya handago bomnida – Tôi cho rằng phải điều chỉnh tốc độ.']],
    hoithoai: {
      ctx: 'Em nghe đoạn phỏng vấn chuyên gia và trả lời câu hỏi kiểu TOPIK.', vai: 'Giáo viên hỏi, em trả lời.', ai: '👩‍🏫 선생님',
      luot: [
        T(['전문가의 태도는 어떻습니까?', 'jeonmungaui taedoneun eotteoseumnikka?', 'Thái độ chuyên gia thế nào?'], ['정책 취지는 지지하지만 효과에 대해서는 회의적입니다.', 'jeongchaek chwijineun jijihajiman hyogwae daehaeseoneun hoeuijeogimnida', 'Ủng hộ mục đích nhưng hoài nghi hiệu quả.', 'Thái độ hai mặt.'], ['완전히 반대합니다.', 'wanjeonhi bandaehamnida', 'Nghe nhầm.'], ['기뻐합니다.', 'gippeohamnida', 'Nghe nhầm.']),
        T(['전문가가 말하는 의도는요?', 'jeonmungaga malhaneun uidoneunyo?', 'Ý đồ của chuyên gia?'], ['정책을 단계적으로 도입하자고 설득하려는 것입니다.', 'jeongchaegeul dangyejeogeuro doiphajago seoldeukharyeoneun geosimnida', 'Thuyết phục áp dụng chính sách từng bước.', 'Mục đích.'], ['정책을 없애려고요.', 'jeongchaegeul eopsaeryeogoyo', 'Sai.'], ['자랑하려고요.', 'jaranghallyeogoyo', 'Sai.']),
        T(['들은 내용과 같은 것은?', 'deureun naeyonggwa gateun geoseun?', 'Câu đúng nội dung?'], ['시범 지역 세 곳에서 먼저 시행할 예정이라고 했습니다.', 'sibeom jiyeok se goseseo meonjeo sihaenghal yejeongirago haetseumnida', 'Nói sẽ thực hiện trước ở 3 khu vực thí điểm.', 'Chi tiết số.'], ['전국에서 바로 시행해요.', 'jeongugeseo baro sihaenghaeyo', 'Nghe nhầm.'], ['다섯 곳이에요.', 'daseot gosieyo', 'Nghe nhầm.'])
      ], ket: 'Em đã nghe hiểu thái độ, ý đồ, chi tiết ở mức TOPIK 4.'
    },
    tom: ['Nghe thái độ: 회의적, 긍정적, 신중론', 'Nghe mục đích: thuyết phục, phê phán'], nguphap: 'Nghe TOPIK II nâng cao', phatam: '회의적 [회이적]',
    loi: ['Bỏ qua sắc thái hai mặt'], btvn: ['Làm 20 câu nghe TOPIK II câu 30–50', 'Ghi từ thái độ trong mỗi bài', 'Luyện 🎤 3 câu']
  };

  const d29 = {
    n: 29, ten: plan[28].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Mô phỏng chuỗi tình huống công việc cấp trung cao: họp chiến lược, đàm phán, hoà giải, báo cáo sự cố.',
    hoc: `<p>Không có từ mới. Mỗi lượt cố dùng một cấu trúc cấp 4 (-는 바람에, -기 마련이다, 불구하고, -다고 해서…) và giữ đúng văn phong.</p>`,
    qs: [['mc', 'Báo cáo sự cố khách quan?', '서버가 고장 나는 바람에 서비스가 지연되었습니다.', ['서버 덕분에 늦었어요.', '누가 망가뜨렸어요.', '몰라요.'], '-는 바람에.'], ['mc', 'Phản đối cấp trên khéo?', '혹시 … 도 고려해 보셨을까요?', ['틀렸습니다.', '안 됩니다.', '싫습니다.'], 'Câu hỏi gợi mở.']],
    noi: [['어려움에도 불구하고 목표를 달성했습니다.', 'eoryeoumedo bulguhago mokpyoreul dalseonghaetseumnida – Bất chấp khó khăn đã đạt mục tiêu.'], ['대안으로 시범 운영을 제안합니다.', 'daeaneuro sibeom unyeongeul jeanhamnida – Xin đề xuất thí điểm như phương án thay thế.']],
    hoithoai: {
      ctx: 'Một ngày ở văn phòng Seoul: họp sáng, đàm phán trưa, hoà giải chiều.', vai: 'Nhiều người nói, em xử lý.', ai: '🎭 여러 사람',
      luot: [
        T(['（전무님）이번 분기 실적이 왜 목표에 못 미쳤습니까?', '(Jeonmunim) ibeon bungi siljeogi wae mokpyoe mot michyeotseumnikka?', '(Giám đốc điều hành) Sao quý này không đạt mục tiêu?'], ['환율이 급등하는 바람에 수입 원가가 올랐습니다. 그럼에도 불구하고 판매량은 5% 늘었습니다.', 'hwanyuri geupdeunghaneun barame suip wongaga ollatseumnida. geureomedo bulguhago panmaeryangeun o peosenteu neureotseumnida', 'Vì tỷ giá tăng vọt nên giá vốn nhập khẩu tăng. Dù vậy, sản lượng bán vẫn tăng 5%.', 'Nguyên nhân + nhượng bộ.'], ['제 탓이 아닙니다.', 'je tasi animnida', 'Phòng thủ.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['（거래처）단가를 더 내려 주시죠.', '(Georaecheo) dangareul deo naeryeo jusijyo', '(Đối tác) Giảm giá thêm đi.'], ['그 조건은 받아들이기 어렵습니다. 다만 결제 기간을 늘려 드릴 수는 있습니다.', 'geu jogeoneun badadeurigi eoryeopseumnida. daman gyeolje giganeul neullyeo deuril suneun itseumnida', 'Điều kiện đó khó chấp nhận. Có điều có thể gia hạn thanh toán.', 'Từ chối + thay thế.'], ['네, 다 깎아 드릴게요.', 'ne, da kkakka deurilgeyo', 'Mất lợi.'], ['안 돼요, 가세요.', 'an dwaeyo, gaseyo', 'Đóng cửa.']),
        T(['（팀원）저 혼자만 일이 많아요.', '(Timwon) jeo honjaman iri manayo', '(Thành viên) Chỉ mình tôi nhiều việc.'], ['서운하셨겠어요. 먼저 이야기를 들어 보고 역할 분담을 다시 조정해 볼게요.', 'seounhasyeotgesseoyo. meonjeo iyagireul deureo bogo yeokhal bundameul dasi jojeonghae bolgeyo', 'Chắc anh chạnh lòng. Tôi nghe trước rồi điều chỉnh lại phân vai.', 'Hoà giải.'], ['참으세요.', 'chameuseyo', 'Gạt đi.'], ['원래 그래요.', 'wollae geuraeyo', 'Bỏ mặc.'])
      ], ket: 'Em đã xử lý trọn một ngày làm việc cấp trung cao!'
    },
    tom: ['Phản xạ cấu trúc cấp 4', 'Giữ văn phong theo đối tượng'], nguphap: 'Tổng hợp', phatam: 'Ngữ điệu trang trọng',
    loi: ['Phòng thủ khi bị hỏi'], btvn: ['Làm lại hội thoại 3 lần', 'Ghi âm báo cáo quý 2 phút', 'Chuẩn bị bài kiểm tra cuối khoá']
  };

  const d30 = {
    n: 30, ten: plan[29].ten, vocab: [], tong: 1, kt: { n: 30, min: 30 }, kinds: K,
    muc: 'Kiểm tra cuối khoá TOPIK II cấp 4 (30 câu) và lên lộ trình cấp 5–6.',
    hoc: `<h4>🏁 Hoàn thành cấp 4!</h4>${tbl(['Đã học', 'Tiếp theo ở cấp 5–6'], [['불구하고, 바람에, 마련이다, 다 보니', 'Cấu trúc văn viết cao cấp: -거니와, -(으)ㄹ지언정, -는 한'], ['Quán dụng ngữ, tục ngữ, Hán Hàn', 'Thành ngữ 4 chữ (사자성어), văn phong học thuật'], ['Câu 54 600 chữ', 'Luận học thuật, dịch thuật'], ['Thuyết trình, tranh luận', 'Đàm phán cấp cao, phiên dịch']])}
      ${tip('📌 TOPIK II: cấp 4 ≥ 150, cấp 5 ≥ 190, cấp 6 ≥ 230 / 300 (tham khảo, xem topik.go.kr).')}`,
    qs: [['mc', '“Vì sự cố mất điện nên công việc dừng”?', '정전이 되는 바람에 작업이 멈췄어요.', ['정전 덕분에 작업이 멈췄어요.', '정전이 되는 바람에 작업하세요.', '정전 마련이에요.'], '-는 바람에.'], ['mc', '“Quen biết rộng”?', '발이 넓다', ['발이 크다', '손이 크다', '눈이 높다'], 'Quán dụng ngữ.'], ['mc', 'Mở bài câu 54?', '현대 사회에서 … 문제로 대두되고 있다.', ['요즘 … 많아요.', '저는 … 싫어요.', '끝.'], 'Văn viết.']],
    noi: [['저는 한국어 4급 과정을 마쳤습니다.', 'jeoneun hangugeo sageup gwajeongeul machyeotseumnida – Tôi đã hoàn thành khoá tiếng Hàn cấp 4.'], ['다음에는 TOPIK 6급에 도전하려고 합니다.', 'daeumeneun TOPIK yukgeube dojeonharyeogo hamnida – Tiếp theo tôi định thử sức TOPIK 6.']],
    hoithoai: {
      ctx: 'Buổi tổng kết khoá học với cô giáo.', vai: 'Cô hỏi, em trả lời.', ai: '👩‍🏫 정 선생님',
      luot: [
        T(['4급 과정에서 가장 성장한 부분은 뭐예요?', 'sageup gwajeongeseo gajang seongjanghan bubuneun mwoyeyo?', 'Ở cấp 4 em tiến bộ nhất phần nào?'], ['회의에서 상사에게 조심스럽게 반대 의견을 말할 수 있게 된 것이 가장 큰 성장입니다.', 'hoeuieseo sangsaege josimseureopge bandae uigyeoneul malhal su itge doen geosi gajang keun seongjangimnida', 'Tiến bộ lớn nhất là có thể nêu ý kiến phản đối khéo với cấp trên trong họp.', 'Tổng kết có chiều sâu.'], ['다 잘해요.', 'da jalhaeyo', 'Thiếu khiêm tốn.'], ['없어요.', 'eopseoyo', 'Tự hạ.']),
        T(['아직 부족한 부분은요?', 'ajik bujokhan bubuneunyo?', 'Phần còn thiếu?'], ['쓰기에서 고급 어휘를 자연스럽게 쓰기는커녕 아직 실수가 많은 편입니다.', 'sseugieseo gogeup eohwireul jayeonseureopge sseugineunkeonyeong ajik silsuga maneun pyeonimnida', 'Ở phần viết, chẳng những chưa dùng tự nhiên từ vựng cao cấp mà còn khá nhiều lỗi.', '-기는커녕 + 편이다.'], ['부족한 게 없어요.', 'bujokhan ge eopseoyo', 'Thiếu thật.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['앞으로의 계획은요?', 'apeuroui gyehoegeunyo?', 'Kế hoạch sau này?'], ['꾸준히 하다 보면 실력이 늘기 마련이니까 매일 신문 사설을 읽고 요약하려고 합니다.', 'kkujunhi hada bomyeon sillyeogi neulgi maryeoninikka maeil sinmun saseoreul ilgo yoyakharyeogo hamnida', 'Cứ bền bỉ thì trình độ tất sẽ tiến, nên em định mỗi ngày đọc và tóm tắt một xã luận.', 'Kết hợp 3 cấu trúc.'], ['그만둘 거예요.', 'geumandul geoyeyo', 'Bỏ dở.'], ['계획 없어요.', 'gyehoek eopseoyo', 'Thiếu.'])
      ], ket: 'Chúc mừng em đã hoàn thành cấp 4 – TOPIK II cấp 4! 🎉'
    },
    tom: ['Kiểm tra 30 câu', 'Lộ trình cấp 5–6'], nguphap: 'Tổng ôn toàn khoá', phatam: 'Ôn ngữ điệu trang trọng',
    loi: ['Xem lại các câu sai trong báo cáo'], btvn: ['Làm 1 đề TOPIK II thật đủ 4 phần', 'Ôn lại 3 ngày điểm thấp nhất', 'Bắt đầu cấp 5 – TOPIK II cấp 5–6']
  };

  Z.days.push(d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30);
})();

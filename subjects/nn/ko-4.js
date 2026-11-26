/* PLT-Edu · Tiếng Hàn – Cấp 4 (TOPIK II · cấp 4): lộ trình 30 ngày, Ngày 1–14 */
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
    'Nhượng bộ: -는데도, -(으)ㅁ에도 불구하고', 'Nguyên nhân tiêu cực: -는 바람에, -는 탓에', 'Quy luật: -기 마련이다, -는 법이다', 'Chỉ là và huống chi: -(으)ㄹ 뿐이다, -기는커녕', 'Kết quả của quá trình: -다 보니, -다 보면', 'Danh từ hoá và văn phong trang trọng', 'Ôn tập tuần 1 và kiểm tra',
    'Từ Hán Hàn: tiền tố và hậu tố', 'Quán dụng ngữ (관용어)', 'Tục ngữ (속담)', 'Viết TOPIK câu 54: mở bài', 'Viết TOPIK câu 54: thân bài và kết luận', 'Văn bản và email công việc trang trọng', 'Ôn tập tuần 2 và kiểm tra',
    'Kinh tế: lãi suất, lạm phát, việc làm', 'Xã hội: tỷ lệ sinh thấp, già hoá', 'Khoa học và y tế', 'Văn hoá doanh nghiệp Hàn và thế hệ MZ', 'Đàm phán hợp đồng', 'Truyền thông và tin giả', 'Kiểm tra tổng hợp và mô phỏng',
    'Thuyết trình chuyên môn', 'Tranh luận', 'Xử lý mâu thuẫn trong nhóm', 'Phản đối lịch sự trong cuộc họp', 'Đọc báo chuyên sâu', 'Nghe bài giảng, phỏng vấn dài', 'Nghe hiểu TOPIK II nâng cao', 'Mô phỏng tình huống công việc', 'Kiểm tra cuối khoá TOPIK II cấp 4 và lộ trình cấp 5–6'
  ].map((ten, i) => ({ n: i + 1, ten }));
  const stages = [
    { ten: '🧩 Giai đoạn 1 – Ngữ pháp trung cấp cao', tu: 1, den: 7 }, { ten: '📚 Giai đoạn 2 – Từ vựng sâu và viết luận', tu: 8, den: 14 },
    { ten: '🏛️ Giai đoạn 3 – Chủ đề xã hội – kinh tế', tu: 15, den: 21 }, { ten: '🎤 Giai đoạn 4 – Thuyết trình, tranh luận, luyện thi', tu: 22, den: 30 }
  ];

  const d1 = {
    n: 1, ten: plan[0].ten, kinds: K,
    muc: 'Nhượng bộ: -(으)ㄴ/는데도 (mặc dù… vẫn), -(으)ㅁ에도 불구하고 (bất chấp – trang trọng), N에도 불구하고.',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ', 'Sắc thái'], [['-는데도', '열심히 공부했는데도 떨어졌어요.', 'khẩu ngữ'], ['-(으)ㅁ에도 불구하고', '경기가 나쁨에도 불구하고 매출이 늘었다.', 'văn viết, trang trọng'], ['N에도 불구하고', '비에도 불구하고 행사가 진행되었다.', 'trang trọng']])}`,
    vocab: [
      w('불구하고', 'bulguhago', 'bất chấp', '', ['어려움에도 불구하고 성공했다.', 'eoryeoumedo bulguhago seonggonghaetda', 'Bất chấp khó khăn vẫn thành công.']),
      w('경기', 'gyeonggi', 'tình hình kinh tế', '', ['경기가 좋지 않다.', 'gyeonggiga joji anta', 'Kinh tế không tốt.']),
      w('떨어지다', 'tteoreojida', 'rớt, trượt', '', ['시험에 떨어졌어요.', 'siheome tteoreojyeosseoyo', 'Tôi trượt thi.']),
      w('노력', 'noryeok', 'nỗ lực', '', ['노력에도 불구하고', 'noryeogedo bulguhago', 'bất chấp nỗ lực']),
      w('여전히', 'yeojeonhi', 'vẫn như cũ', '', ['여전히 어려워요.', 'yeojeonhi eoryeowoyo', 'Vẫn khó.']),
      w('매출', 'maechul', 'doanh thu', '', ['매출이 늘었다.', 'maechuri neureotda', 'Doanh thu tăng.']),
      w('반대', 'bandae', 'sự phản đối', '', ['반대에도 불구하고 추진했다.', 'bandaedo bulguhago chujinhaetda', 'Bất chấp phản đối vẫn xúc tiến.']),
      w('추진하다', 'chujinhada', 'xúc tiến', '', ['계획을 추진하다.', 'gyehoegeul chujinhada', 'Xúc tiến kế hoạch.']),
      w('성공하다', 'seonggonghada', 'thành công', '', ['결국 성공했어요.', 'gyeolguk seonggonghaesseoyo', 'Cuối cùng thành công.']),
      w('실패하다', 'silpaehada', 'thất bại', '', ['실패해도 괜찮아요.', 'silpaehaedo gwaenchanayo', 'Thất bại cũng không sao.'])
    ],
    qs: [
      ['mc', '“Học chăm mà vẫn trượt” (khẩu ngữ)?', '열심히 공부했는데도 떨어졌어요.', ['열심히 공부해서 떨어졌어요.', '열심히 공부하니까 떨어졌어요.', '열심히 공부하면 떨어졌어요.'], '-는데도.'],
      ['mc', 'Văn viết “Bất chấp kinh tế xấu, doanh thu tăng”?', '경기가 나쁨에도 불구하고 매출이 늘었다.', ['경기가 나빠서 매출이 늘었다.', '경기가 나쁜데 매출 늘었어요.', '경기 나쁨 불구 매출.'], '-(으)ㅁ에도 불구하고.'],
      ['mc', '여전히 = ?', 'vẫn như cũ', ['hoàn toàn', 'đột nhiên', 'lần nữa'], 'yeojeonhi.'],
      ['hear', '반대에도 불구하고 회사는 계획을 추진했다.', 'Bất chấp phản đối, công ty vẫn xúc tiến kế hoạch.', ['Công ty huỷ kế hoạch.', 'Không ai phản đối.', 'Kế hoạch thất bại.'], 'Nhượng bộ.'],
      ['hear', '약을 먹었는데도 여전히 머리가 아파요.', 'Đã uống thuốc mà vẫn đau đầu.', ['Uống thuốc là hết đau.', 'Chưa uống thuốc.', 'Không đau đầu.'], '-는데도.'],
      ['order', 'Sắp xếp: “Thất bại cũng không sao.”', ['실패해도', '괜찮아요', '.'], '실패해도 괜찮아요.']
    ],
    noi: [['열심히 했는데도 결과가 안 좋았어요.', 'yeolsimhi haenneundedo gyeolgwaga an joasseoyo – Làm chăm mà kết quả vẫn không tốt.'], ['어려움에도 불구하고 목표를 달성했습니다.', 'eoryeoumedo bulguhago mokpyoreul dalseonghaetseumnida – Bất chấp khó khăn, đã đạt mục tiêu.'], ['여전히 개선이 필요합니다.', 'yeojeonhi gaeseoni piryohamnida – Vẫn cần cải thiện.']],
    hoithoai: {
      ctx: 'Họp tổng kết năm với ban giám đốc người Hàn.', vai: 'Giám đốc hỏi, em báo cáo trang trọng.', ai: '👔 상무님',
      luot: [
        T(['올해 실적은 어땠습니까?', 'olhae siljeogeun eottaetseumnikka?', 'Kết quả năm nay thế nào?'], ['경기가 좋지 않았음에도 불구하고 매출이 10% 증가했습니다.', 'gyeonggiga joji anasseumedo bulguhago maechuri sip peosenteu jeunggahaetseumnida', 'Bất chấp kinh tế không tốt, doanh thu tăng 10%.', 'Trang trọng.'], ['경기가 나빠서 매출이 늘었어요.', 'gyeonggiga nappaseo maechuri neureosseoyo', 'Logic sai.'], ['좋았어요.', 'joasseoyo', 'Sơ sài.']),
        T(['문제점은 없었습니까?', 'munjejeomeun eopseotseumnikka?', 'Có vấn đề gì không?'], ['신규 고객은 늘었는데도 기존 고객 유지율은 여전히 낮습니다.', 'singyu gogaegeun neureonneundedo gijon gogaek yujiyureun yeojeonhi natseumnida', 'Khách mới tăng mà tỷ lệ giữ khách cũ vẫn thấp.', '-는데도 + 여전히.'], ['문제없습니다.', 'munjeeopseumnida', 'Che giấu.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['대책은요?', 'daechaegeunyo?', 'Đối sách?'], ['내년에는 고객 관리 프로그램을 추진하겠습니다.', 'naenyeoneneun gogaek gwalli peurogeuraemeul chujinhagesseumnida', 'Năm sau sẽ xúc tiến chương trình chăm sóc khách hàng.', 'Đề xuất.'], ['없습니다.', 'eopseumnida', 'Thiếu.'], ['상무님이 하세요.', 'sangmunimi haseyo', 'Đẩy việc.'])
      ], ket: 'Em đã báo cáo năm bằng câu nhượng bộ trang trọng.'
    },
    tom: ['-는데도 (khẩu ngữ)', '-(으)ㅁ에도 불구하고 (trang trọng)'], nguphap: 'Nhượng bộ', phatam: '불구하고 [불구하고]',
    loi: ['Dùng -아서 thay cho nhượng bộ'], btvn: ['Viết 3 câu mỗi cấu trúc', 'Viết báo cáo ngắn 100 chữ có 불구하고', 'Luyện 🎤 3 câu']
  };

  const d2 = {
    n: 2, ten: plan[1].ten, kinds: K,
    muc: 'Nêu nguyên nhân dẫn đến kết quả tiêu cực: -는 바람에 (vì… nên lỡ), -는 탓에 / N 탓 (tại, đổ lỗi), so với -덕분에 (nhờ).',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ', 'Sắc thái'], [['-는 바람에', '늦잠을 자는 바람에 회의에 늦었어요.', 'sự cố bất ngờ → kết quả xấu'], ['-(으)ㄴ/는 탓에', '날씨가 추운 탓에 손님이 적었다.', 'đổ lỗi nhẹ'], ['N 덕분에', '선배 덕분에 문제를 해결했어요.', 'nhờ – tích cực']])}
      ${tip('⚠️ -는 바람에 <b>không đi với mệnh lệnh, rủ rê</b> và vế sau luôn là quá khứ.')}`,
    vocab: [
      w('바람에', 'barame', 'vì… (sự cố)', '', ['차가 막히는 바람에 늦었어요.', 'chaga makhineun barame neujeosseoyo', 'Vì kẹt xe nên muộn.']),
      w('탓', 'tat', 'tại, lỗi tại', '', ['제 탓이에요.', 'je tasieyo', 'Lỗi tại tôi.']),
      w('덕분에', 'deokbune', 'nhờ', '', ['덕분에 잘 끝났어요.', 'deokbune jal kkeunnasseoyo', 'Nhờ anh mà xong tốt.']),
      w('늦잠', 'neutjam', 'ngủ quên, ngủ dậy muộn', '', ['늦잠을 잤어요.', 'neutjameul jasseoyo', 'Tôi ngủ quên.']),
      w('고장 나다', 'gojang nada', 'bị hỏng', '', ['엘리베이터가 고장 났어요.', 'ellibeiteoga gojang nasseoyo', 'Thang máy hỏng.']),
      w('놓치다', 'notchida', 'lỡ', '', ['비행기를 놓쳤어요.', 'bihaenggireul notchyeosseoyo', 'Lỡ máy bay.']),
      w('갑자기', 'gapjagi', 'đột nhiên', '', ['갑자기 비가 왔어요.', 'gapjagi biga wasseoyo', 'Đột nhiên mưa.']),
      w('정전', 'jeongjeon', 'mất điện', '', ['정전이 되는 바람에 작업이 멈췄어요.', 'jeongjeoni doeneun barame jageobi meomchwosseoyo', 'Vì mất điện nên công việc dừng.']),
      w('멈추다', 'meomchuda', 'dừng', '', ['시스템이 멈췄어요.', 'siseutemi meomchwosseoyo', 'Hệ thống dừng.']),
      w('지연되다', 'jiyeondoeda', 'bị chậm trễ', '', ['배송이 지연되었습니다.', 'baesongi jiyeondoeeotseumnida', 'Giao hàng bị chậm.'])
    ],
    qs: [
      ['mc', '“Vì ngủ quên nên muộn họp”?', '늦잠을 자는 바람에 회의에 늦었어요.', ['늦잠을 자는 바람에 회의에 늦으세요.', '늦잠 덕분에 회의에 늦었어요.', '늦잠을 자서 바람에 늦었어요.'], '-는 바람에.'],
      ['mc', '“Nhờ tiền bối mà giải quyết được”?', '선배 덕분에 문제를 해결했어요.', ['선배 탓에 문제를 해결했어요.', '선배 바람에 해결했어요.', '선배 때문 해결했어요요.'], 'Tích cực → 덕분에.'],
      ['mc', 'Câu SAI?', '비가 오는 바람에 우산을 가져가세요.', ['비가 오는 바람에 행사가 취소됐어요.', '차가 막히는 바람에 늦었어요.', '정전이 되는 바람에 작업이 멈췄어요.'], 'Không đi với mệnh lệnh.'],
      ['hear', '시스템이 갑자기 멈추는 바람에 고객 응대가 지연되었습니다.', 'Hệ thống đột ngột dừng nên phục vụ khách bị chậm.', ['Hệ thống chạy tốt.', 'Khách được phục vụ nhanh.', 'Không ảnh hưởng.'], '-는 바람에.'],
      ['hear', '모두 제 탓입니다. 죄송합니다.', 'Tất cả là lỗi tại tôi. Xin lỗi.', ['Không phải lỗi tôi.', 'Nhờ tôi cả.', 'Lỗi của anh.'], '탓.'],
      ['order', 'Sắp xếp: “Lỡ máy bay.”', ['비행기를', '놓쳤어요', '.'], '비행기를 놓쳤어요.']
    ],
    noi: [['차가 막히는 바람에 늦었습니다. 죄송합니다.', 'chaga makhineun barame neujeotseumnida. joesonghamnida – Vì kẹt xe nên tôi muộn. Xin lỗi.'], ['선배님 덕분에 잘 끝났어요.', 'seonbaenim deokbune jal kkeunnasseoyo – Nhờ tiền bối mà xong tốt.'], ['모두 제 탓입니다.', 'modu je tasimnida – Tất cả là lỗi tại tôi.']],
    hoithoai: {
      ctx: 'Em giải trình với trưởng phòng vì dự án bị chậm.', vai: 'Trưởng phòng hỏi, em giải thích.', ai: '👨‍💼 강 부장',
      luot: [
        T(['왜 일정이 늦어졌어요?', 'wae iljeongi neujeojyeosseoyo?', 'Sao lịch trình bị chậm?'], ['서버가 갑자기 고장 나는 바람에 테스트가 이틀 지연되었습니다.', 'seobeoga gapjagi gojang naneun barame teseuteuga iteul jiyeondoeeotseumnida', 'Vì máy chủ đột ngột hỏng nên kiểm thử chậm 2 ngày.', '-는 바람에.'], ['서버 덕분에 늦었어요.', 'seobeo deokbune neujeosseoyo', 'Sai sắc thái.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['그럼 누구 책임이에요?', 'geureom nugu chaegimieyo?', 'Vậy trách nhiệm ai?'], ['백업 서버를 미리 준비하지 못한 제 탓도 있습니다.', 'baegeop seobeoreul miri junbihaji motan je tatdo itseumnida', 'Cũng có lỗi của tôi vì không chuẩn bị máy chủ dự phòng.', 'Nhận phần lỗi.'], ['서버 회사 탓이에요.', 'seobeo hoesa tasieyo', 'Đổ lỗi hoàn toàn.'], ['아무도 아니에요.', 'amudo anieyo', 'Né.']),
        T(['앞으로는요?', 'apeuroneunyo?', 'Sau này thì sao?'], ['다행히 이 대리님 덕분에 복구했고, 앞으로는 백업 체계를 갖추겠습니다.', 'dahaenghi I daerinim deokbune bokguhaetgo, apeuroneun baegeop chegyereul gatchugesseumnida', 'May nhờ trợ lý Lee đã khôi phục, sau này sẽ xây hệ thống dự phòng.', '덕분에 + cam kết.'], ['또 늦을 거예요.', 'tto neujeul geoyeyo', 'Tiêu cực.'], ['괜찮을 거예요.', 'gwaenchaneul geoyeyo', 'Thiếu cụ thể.'])
      ], ket: 'Em đã giải trình trung thực, có trách nhiệm.'
    },
    tom: ['-는 바람에 (sự cố → xấu)', '-는 탓에 / N 탓', 'N 덕분에 (nhờ)'], nguphap: 'Nguyên nhân – kết quả', phatam: '바람에 [바라메]',
    loi: ['-는 바람에 + mệnh lệnh', 'Nhầm 덕분에 và 탓'], btvn: ['Viết 3 lời giải trình sự cố', 'Viết 3 câu cảm ơn với 덕분에', 'Luyện 🎤 3 câu']
  };

  const d3 = {
    n: 3, ten: plan[2].ten, kinds: K,
    muc: 'Nói quy luật, lẽ thường: -기 마련이다 (đương nhiên sẽ), -는 법이다 (lẽ thường là), -(으)ㄹ 수밖에 없다 (đành phải).',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ'], [['-기 마련이다', '처음에는 누구나 실수하기 마련이에요.'], ['-는 법이다', '노력하면 좋은 결과가 있는 법이에요.'], ['-(으)ㄹ 수밖에 없다', '시간이 없어서 택시를 탈 수밖에 없었어요.']])}`,
    vocab: [
      w('마련이다', 'maryeonida', 'đương nhiên sẽ', '', ['시간이 지나면 잊기 마련이에요.', 'sigani jinamyeon itgi maryeonieyo', 'Thời gian qua thì sẽ quên.']),
      w('법이다', 'beobida', 'lẽ thường', '', ['급할수록 천천히 하는 법이에요.', 'geuphalsurok cheoncheonhi haneun beobieyo', 'Càng gấp càng phải từ từ.']),
      w('수밖에 없다', 'subakke eopda', 'đành phải', '', ['기다릴 수밖에 없어요.', 'gidaril subakke eopseoyo', 'Đành phải đợi.']),
      w('누구나', 'nuguna', 'ai cũng', '', ['누구나 실수해요.', 'nuguna silsuhaeyo', 'Ai cũng mắc lỗi.']),
      w('실수', 'silsu', 'lỗi, sơ suất', '', ['실수를 줄여야 해요.', 'silsureul juryeoya haeyo', 'Phải giảm sơ suất.']),
      w('경험', 'gyeongheom', 'kinh nghiệm', '', ['경험이 쌓이면 익숙해지기 마련이에요.', 'gyeongheomi ssaimyeon iksukhaejigi maryeonieyo', 'Tích luỹ kinh nghiệm thì sẽ quen.']),
      w('쌓이다', 'ssaida', 'tích luỹ', '', ['피로가 쌓였어요.', 'piroga ssayeosseoyo', 'Mệt mỏi tích luỹ.']),
      w('급하다', 'geuphada', 'gấp', '', ['급한 일이에요.', 'geuphan irieyo', 'Việc gấp.']),
      w('변화', 'byeonhwa', 'thay đổi', '', ['변화에는 저항이 따르기 마련이다.', 'byeonhwaeneun jeohangi ttareugi maryeonida', 'Thay đổi tất có kháng cự.']),
      w('저항', 'jeohang', 'sự kháng cự', '', ['저항이 있어요.', 'jeohangi isseoyo', 'Có kháng cự.'])
    ],
    qs: [
      ['mc', '“Ai lúc đầu cũng mắc lỗi” (lẽ đương nhiên)?', '처음에는 누구나 실수하기 마련이에요.', ['처음에는 누구나 실수할 수밖에 마련이에요.', '누구나 실수하는 마련이에요.', '실수하기 법이에요.'], '-기 마련이다.'],
      ['mc', '“Không có thời gian, đành phải đi taxi”?', '시간이 없어서 택시를 탈 수밖에 없었어요.', ['택시를 타기 마련이었어요.', '택시를 타는 법이었어요.', '택시를 탈 수 없었어요.'], '-(으)ㄹ 수밖에 없다.'],
      ['mc', '“Càng gấp càng phải từ từ” là lẽ thường?', '급할수록 천천히 하는 법이에요.', ['급할수록 천천히 할 수밖에 없어요.', '급하기 마련 천천히.', '급하면 천천히 했어요.'], '-는 법이다.'],
      ['hear', '변화에는 항상 저항이 따르기 마련입니다.', 'Thay đổi luôn tất yếu có kháng cự.', ['Thay đổi không có kháng cự.', 'Không nên thay đổi.', 'Kháng cự là sai.'], '-기 마련이다.'],
      ['hear', '비행기가 취소돼서 하루 더 머물 수밖에 없었어요.', 'Chuyến bay huỷ nên đành ở thêm một ngày.', ['Đã bay đúng giờ.', 'Về sớm.', 'Muốn ở thêm.'], '-수밖에 없다.'],
      ['order', 'Sắp xếp: “Đành phải đợi.”', ['기다릴', '수밖에', '없어요', '.'], '기다릴 수밖에 없어요.']
    ],
    noi: [['처음에는 누구나 실수하기 마련이에요.', 'cheoeumeneun nuguna silsuhagi maryeonieyo – Lúc đầu ai cũng mắc lỗi thôi.'], ['급할수록 천천히 하는 법이에요.', 'geuphalsurok cheoncheonhi haneun beobieyo – Càng gấp càng phải từ từ.'], ['기다릴 수밖에 없어요.', 'gidaril subakke eopseoyo – Đành phải đợi.']],
    hoithoai: {
      ctx: 'Nhân viên mới người Hàn mắc lỗi và buồn; em là người hướng dẫn.', vai: 'Nhân viên mới nói, em động viên.', ai: '🧑 신입 사원',
      luot: [
        T(['또 실수했어요. 저는 안 맞는 것 같아요.', 'tto silsuhaesseoyo. jeoneun an manneun geot gatayo', 'Tôi lại sai rồi. Chắc tôi không hợp.'], ['처음에는 누구나 실수하기 마련이에요. 저도 그랬어요.', 'cheoeumeneun nuguna silsuhagi maryeonieyo. jeodo geuraesseoyo', 'Lúc đầu ai cũng sai thôi. Tôi cũng vậy.', 'Động viên.'], ['네, 안 맞아요.', 'ne, an majayo', 'Làm tổn thương.'], ['실수하지 마세요.', 'silsuhaji maseyo', 'Thiếu đồng cảm.']),
        T(['마감이 급해서 서두르다 보니까 그래요.', 'magami geuphaeseo seodureuda bonikka geuraeyo', 'Hạn gấp nên vội mới vậy.'], ['급할수록 천천히 하는 법이에요. 체크리스트를 써 보세요.', 'geuphalsurok cheoncheonhi haneun beobieyo. chekeuriseuteureul sseo boseyo', 'Càng gấp càng phải từ từ. Thử dùng checklist xem.', 'Lẽ thường + gợi ý.'], ['더 빨리 하세요.', 'deo ppalli haseyo', 'Ngược.'], ['포기하세요.', 'pogihaseyo', 'Tiêu cực.']),
        T(['감사합니다. 마음이 좀 편해졌어요.', 'gamsahamnida. maeumi jom pyeonhaejyeosseoyo', 'Cảm ơn. Lòng tôi nhẹ hơn rồi.'], ['경험이 쌓이면 자연스럽게 익숙해질 거예요.', 'gyeongheomi ssaimyeon jayeonseureopge iksukhaejil geoyeyo', 'Tích luỹ kinh nghiệm thì sẽ tự nhiên quen.', 'Khích lệ.'], ['다음에 또 실수하면 안 돼요.', 'daeume tto silsuhamyeon an dwaeyo', 'Gây áp lực.'], ['몰라요.', 'mollayo', 'Thờ ơ.'])
      ], ket: 'Em đã động viên đồng nghiệp bằng cách nói quy luật.'
    },
    tom: ['-기 마련이다', '-는 법이다', '-(으)ㄹ 수밖에 없다'], nguphap: 'Quy luật và tất yếu', phatam: '마련이에요 [마려니에요]',
    loi: ['Nhầm 마련이다 và 수밖에 없다'], btvn: ['Viết 3 câu lẽ thường về công việc', 'Viết 3 tình huống "đành phải"', 'Luyện 🎤 3 câu']
  };

  const d4 = {
    n: 4, ten: plan[3].ten, kinds: K,
    muc: 'Diễn đạt giới hạn và phủ định mạnh: -(으)ㄹ 뿐이다 (chỉ là), -(으)ㄹ 따름이다 (trang trọng), -기는커녕 (chẳng những không… mà còn).',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ'], [['-(으)ㄹ 뿐이다', '저는 제 일을 했을 뿐이에요.'], ['-(으)ㄹ 따름이다', '감사할 따름입니다.'], ['-기는커녕', '쉬기는커녕 밥 먹을 시간도 없었어요.'], ['N은/는커녕', '칭찬은커녕 혼만 났어요.']])}`,
    vocab: [
      w('뿐이다', 'ppunida', 'chỉ là', '', ['농담일 뿐이에요.', 'nongdamil ppunieyo', 'Chỉ là đùa thôi.']),
      w('따름이다', 'ttareumida', 'chỉ biết (trang trọng)', '', ['감사할 따름입니다.', 'gamsahal ttareumimnida', 'Chỉ biết cảm ơn.']),
      w('커녕', 'keonyeong', 'chẳng những không', '', ['도움은커녕 방해만 됐어요.', 'doumeunkeonyeong banghaeman dwaesseoyo', 'Chẳng giúp gì còn cản trở.']),
      w('칭찬', 'chingchan', 'lời khen', '', ['칭찬을 받았어요.', 'chingchaneul badasseoyo', 'Được khen.']),
      w('혼나다', 'honnada', 'bị mắng', '', ['부장님께 혼났어요.', 'bujangnimkke honnasseoyo', 'Bị trưởng phòng mắng.']),
      w('방해', 'banghae', 'cản trở', '', ['방해하지 마세요.', 'banghaehaji maseyo', 'Đừng làm phiền.']),
      w('농담', 'nongdam', 'lời đùa', '', ['농담이에요.', 'nongdamieyo', 'Đùa thôi.']),
      w('겸손하다', 'gyeomsonhada', 'khiêm tốn', '', ['겸손한 태도', 'gyeomsonhan taedo', 'thái độ khiêm tốn']),
      w('최선을 다하다', 'choeseoneul dahada', 'cố hết sức', '', ['최선을 다했을 뿐입니다.', 'choeseoneul dahaesseul ppunimnida', 'Tôi chỉ cố hết sức thôi.']),
      w('영광', 'yeonggwang', 'vinh dự', '', ['영광일 따름입니다.', 'yeonggwangil ttareumimnida', 'Thật là vinh dự.'])
    ],
    qs: [
      ['mc', 'Đáp lời khen khiêm tốn?', '저는 최선을 다했을 뿐이에요.', ['네, 제가 최고예요.', '당연하죠.', '칭찬해 주세요.'], '-(으)ㄹ 뿐이다.'],
      ['mc', '“Chẳng được khen mà còn bị mắng”?', '칭찬은커녕 혼만 났어요.', ['칭찬뿐이고 혼났어요.', '칭찬 덕분에 혼났어요.', '칭찬은커녕 칭찬받았어요.'], 'N은커녕.'],
      ['mc', '감사할 따름입니다 dùng khi?', 'Cảm ơn trang trọng, khiêm nhường', ['Từ chối', 'Phàn nàn', 'Chào tạm biệt thân mật'], 'Trang trọng.'],
      ['hear', '바빠서 쉬기는커녕 점심 먹을 시간도 없었어요.', 'Bận đến nỗi chẳng những không nghỉ được mà ăn trưa cũng không có thời gian.', ['Nghỉ ngơi thoải mái.', 'Ăn trưa lâu.', 'Rảnh cả ngày.'], '-기는커녕.'],
      ['hear', '이런 상을 받게 되어 영광일 따름입니다.', 'Được nhận giải này thật vinh dự.', ['Tôi không muốn nhận.', 'Giải này nhỏ.', 'Tôi buồn.'], '따름이다.'],
      ['order', 'Sắp xếp: “Chỉ là đùa thôi.”', ['농담일', '뿐이에요', '.'], '농담일 뿐이에요.']
    ],
    noi: [['저는 제 일을 했을 뿐이에요.', 'jeoneun je ireul haesseul ppunieyo – Tôi chỉ làm việc của mình thôi.'], ['그저 감사할 따름입니다.', 'geujeo gamsahal ttareumimnida – Tôi chỉ biết cảm ơn.'], ['쉬기는커녕 더 바빴어요.', 'swigineunkeonyeong deo bappasseoyo – Chẳng những không nghỉ được mà còn bận hơn.']],
    hoithoai: {
      ctx: 'Em được khen thưởng nhân viên xuất sắc tại công ty Hàn.', vai: 'Giám đốc nói, em đáp khiêm tốn.', ai: '👔 대표님',
      luot: [
        T(['이번 프로젝트 성공은 민 씨 덕분이에요.', 'ibeon peurojekteu seonggongeun Min ssi deokbunieyo', 'Dự án thành công là nhờ Minh.'], ['아닙니다. 저는 맡은 일을 했을 뿐입니다.', 'animnida. jeoneun mateun ireul haesseul ppunimnida', 'Không ạ. Em chỉ làm việc được giao thôi.', 'Khiêm tốn.'], ['네, 다 제 덕분이에요.', 'ne, da je deokbunieyo', 'Kiêu.'], ['당연하죠.', 'dangyeonhajyo', 'Thiếu khiêm tốn.']),
        T(['그래도 상을 받게 됐으니 소감 한마디 해 주세요.', 'geuraedo sangeul batge dwaesseuni sogam hanmadi hae juseyo', 'Dù sao cũng được giải, nói vài lời cảm nghĩ đi.'], ['이런 상을 받게 되어 영광일 따름입니다. 팀원들께 감사드립니다.', 'ireon sangeul batge doeeo yeonggwangil ttareumimnida. timwondeulkke gamsadeurimnida', 'Được nhận giải này thật vinh dự. Xin cảm ơn các thành viên nhóm.', 'Trang trọng + chia công.'], ['상금은 얼마예요?', 'sanggeumeun eolmayeyo?', 'Thiếu tế nhị.'], ['감사해.', 'gamsahae', 'Trống không.']),
        T(['프로젝트 기간에 많이 힘들었죠?', 'peurojekteu gigane mani himdeureotjyo?', 'Thời gian dự án vất vả lắm nhỉ?'], ['네, 주말에 쉬기는커녕 밤늦게까지 일한 적도 많았지만 좋은 경험이었습니다.', 'ne, jumare swigineunkeonyeong bamneutgekkaji ilhan jeokdo manatjiman joeun gyeongheomieotseumnida', 'Vâng, cuối tuần chẳng nghỉ được, còn làm đến khuya nhiều lần, nhưng là trải nghiệm quý.', '-기는커녕 + tích cực.'], ['너무 힘들어서 그만두고 싶어요.', 'neomu himdeureoseo geumandugo sipeoyo', 'Không phù hợp dịp này.'], ['안 힘들었어요.', 'an himdeureosseoyo', 'Thiếu thật.'])
      ], ket: 'Em đã nhận khen thưởng khiêm tốn, trang trọng.'
    },
    tom: ['-(으)ㄹ 뿐이다 / 따름이다', '-기는커녕 / N은커녕'], nguphap: 'Giới hạn và phủ định tăng tiến', phatam: '따름입니다 [따르밈니다]',
    loi: ['Nhận khen không khiêm tốn'], btvn: ['Viết bài phát biểu nhận giải 80 chữ', 'Viết 3 câu -기는커녕', 'Luyện 🎤 3 câu']
  };

  const d5 = {
    n: 5, ten: plan[4].ten, kinds: K,
    muc: 'Diễn đạt kết quả của quá trình lặp lại: -다 보니(까) (làm mãi thì nhận ra), -다 보면 (cứ làm thì sẽ).',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ', 'Nghĩa'], [['-다 보니(까)', '한국 드라마를 보다 보니까 한국어를 잘하게 됐어요.', 'xem phim mãi nên giỏi tiếng Hàn'], ['-다 보면', '계속 연습하다 보면 잘하게 될 거예요.', 'cứ luyện thì sẽ giỏi'], ['-다가', '길을 걷다가 친구를 만났어요.', 'đang làm thì chuyển']])}`,
    vocab: [
      w('보니까', 'bonikka', '(làm mãi) thì thấy', '', ['살다 보니까 익숙해졌어요.', 'salda bonikka iksukhaejyeosseoyo', 'Sống mãi rồi quen.']),
      w('보면', 'bomyeon', '(cứ làm) thì sẽ', '', ['하다 보면 늘어요.', 'hada bomyeon neureoyo', 'Cứ làm sẽ tiến bộ.']),
      w('늘다', 'neulda', 'tiến bộ, tăng', '', ['실력이 늘었어요.', 'sillyeogi neureosseoyo', 'Trình độ tiến bộ.']),
      w('실력', 'sillyeok', 'thực lực, trình độ', '', ['한국어 실력', 'hangugeo sillyeok', 'trình độ tiếng Hàn']),
      w('자연스럽다', 'jayeonseureopda', 'tự nhiên', '', ['자연스럽게 말해요.', 'jayeonseureopge malhaeyo', 'Nói tự nhiên.']),
      w('습관', 'seupgwan', 'thói quen', '', ['좋은 습관을 만들어요.', 'joeun seupgwaneul mandeureoyo', 'Tạo thói quen tốt.']),
      w('지내다', 'jinaeda', 'sống, trải qua', '', ['같이 지내다 보니 친해졌어요.', 'gachi jinaeda boni chinhaejyeosseoyo', 'Sống cùng nhau mãi nên thân.']),
      w('깨닫다', 'kkaedatda', 'nhận ra', '', ['중요성을 깨달았어요.', 'jungyoseongeul kkaedarasseoyo', 'Nhận ra tầm quan trọng.']),
      w('포기하다', 'pogihada', 'từ bỏ', '', ['포기하지 마세요.', 'pogihaji maseyo', 'Đừng bỏ cuộc.']),
      w('꾸준하다', 'kkujunhada', 'bền bỉ', '', ['꾸준한 노력', 'kkujunhan noryeok', 'nỗ lực bền bỉ'])
    ],
    qs: [
      ['mc', '“Xem phim Hàn mãi nên giỏi tiếng Hàn”?', '한국 드라마를 보다 보니까 한국어를 잘하게 됐어요.', ['한국 드라마를 보다 보면 잘했어요.', '드라마를 보니까 보다 잘했어요.', '드라마 보다가 보니 잘할 거예요.'], '-다 보니까 + kết quả đã xảy ra.'],
      ['mc', '“Cứ luyện thì sẽ giỏi”?', '계속 연습하다 보면 잘하게 될 거예요.', ['연습하다 보니까 잘할 거예요.', '연습하다가 잘했어요.', '연습하면 보다 잘해요.'], '-다 보면 + tương lai.'],
      ['mc', '깨닫다 → quá khứ?', '깨달았어요', ['깨닫았어요', '깨다랐어요', '깨닿았어요'], 'ㄷ → ㄹ.'],
      ['hear', '같이 일하다 보니까 서로 많이 친해졌어요.', 'Làm việc cùng nhau mãi nên đã thân nhau.', ['Chưa từng làm cùng.', 'Ngày càng xa cách.', 'Mới gặp hôm nay.'], '-다 보니까.'],
      ['hear', '포기하지 말고 꾸준히 하다 보면 좋은 결과가 있을 거예요.', 'Đừng bỏ, cứ bền bỉ làm sẽ có kết quả tốt.', ['Nên bỏ cuộc.', 'Kết quả đã có.', 'Không cần nỗ lực.'], '-다 보면.'],
      ['order', 'Sắp xếp: “Đừng bỏ cuộc.”', ['포기하지', '마세요', '.'], '포기하지 마세요.']
    ],
    noi: [['한국에서 살다 보니까 매운 음식에 익숙해졌어요.', 'hangugeseo salda bonikka maeun eumsige iksukhaejyeosseoyo – Sống ở Hàn mãi nên quen đồ cay.'], ['꾸준히 하다 보면 실력이 늘 거예요.', 'kkujunhi hada bomyeon sillyeogi neul geoyeyo – Cứ bền bỉ thì trình độ sẽ tiến.'], ['포기하지 마세요.', 'pogihaji maseyo – Đừng bỏ cuộc.']],
    hoithoai: {
      ctx: 'Sinh viên Việt mới sang Hàn hỏi em bí quyết học tiếng Hàn.', vai: 'Sinh viên hỏi, em chia sẻ.', ai: '🧑‍🎓 Học viên',
      luot: [
        T(['선배는 한국어를 어떻게 이렇게 잘해요?', 'seonbaeneun hangugeoreul eotteoke ireoke jalhaeyo?', 'Anh sao giỏi tiếng Hàn vậy?'], ['매일 한국 뉴스를 듣다 보니까 자연스럽게 늘었어요.', 'maeil hanguk nyuseureul deutda bonikka jayeonseureopge neureosseoyo', 'Nghe tin Hàn mỗi ngày mãi nên tự nhiên tiến bộ.', '-다 보니까.'], ['저는 천재예요.', 'jeoneun cheonjaeyeyo', 'Kiêu.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['저는 아직 하나도 못 알아들어요.', 'jeoneun ajik hanado mot aradeureoyo', 'Em vẫn chẳng nghe hiểu gì.'], ['처음엔 다 그래요. 꾸준히 듣다 보면 들리기 시작할 거예요.', 'cheoeumen da geuraeyo. kkujunhi deutda bomyeon deulligi sijakhal geoyeyo', 'Ban đầu ai cũng vậy. Cứ nghe bền bỉ sẽ bắt đầu nghe được.', '-다 보면.'], ['포기하세요.', 'pogihaseyo', 'Tiêu cực.'], ['더 어려워질 거예요.', 'deo eoryeowojil geoyeyo', 'Làm nản.']),
        T(['감사해요. 힘이 나요!', 'gamsahaeyo. himi nayo!', 'Cảm ơn, em có động lực rồi!'], ['좋은 습관을 만들면 실력은 따라오기 마련이에요.', 'joeun seupgwaneul mandeulmyeon sillyeogeun ttaraogi maryeonieyo', 'Tạo thói quen tốt thì trình độ tất sẽ theo.', '-기 마련이다.'], ['그래요? 몰라요.', 'geuraeyo? mollayo', 'Thờ ơ.'], ['습관 필요 없어요.', 'seupgwan piryo eopseoyo', 'Sai.'])
      ], ket: 'Em đã chia sẻ kinh nghiệm học bằng -다 보니/보면.'
    },
    tom: ['-다 보니(까) + kết quả đã có', '-다 보면 + tương lai'], nguphap: 'Kết quả của quá trình', phatam: '보니까 [보니까]',
    loi: ['Dùng -다 보면 với quá khứ'], btvn: ['Kể 3 thay đổi do thói quen bằng -다 보니', 'Viết 3 lời khuyên bằng -다 보면', 'Luyện 🎤 3 câu']
  };

  const d6 = {
    n: 6, ten: plan[5].ten, kinds: K,
    muc: 'Danh từ hoá -기 / -(으)ㅁ và văn phong trang trọng: thông báo, tiêu đề, ghi chú, văn bản.',
    hoc: `${tbl(['Dạng', 'Dùng', 'Ví dụ'], [['-기', 'mục tiêu, kế hoạch, hướng dẫn', '매일 운동하기 / 쉽게 배우기'], ['-(으)ㅁ', 'ghi chú, báo cáo, sự thật', '회의 완료함. / 확인 바람.'], ['-기 바랍니다', 'yêu cầu trang trọng', '참석해 주시기 바랍니다.'], ['-(으)ㅁ으로써', 'bằng cách', '협력함으로써 성과를 냈다.']])}`,
    vocab: [
      w('바라다', 'barada', 'mong', '', ['참석하시기 바랍니다.', 'chamseokhasigi baramnida', 'Kính mong tham dự.']),
      w('완료', 'wallyo', 'hoàn tất', '', ['작업 완료.', 'jageop wallyo', 'Công việc hoàn tất.']),
      w('요망', 'yomang', 'yêu cầu (văn bản)', '', ['확인 요망.', 'hwagin yomang', 'Yêu cầu kiểm tra.']),
      w('협력', 'hyeomnyeok', 'hợp tác', '', ['협력함으로써', 'hyeomnyeokhameurosseo', 'bằng cách hợp tác']),
      w('목표', 'mokpyo', 'mục tiêu', '', ['올해 목표: 매일 공부하기', 'olhae mokpyo: maeil gongbuhagi', 'Mục tiêu năm: học mỗi ngày']),
      w('공지', 'gongji', 'thông báo', '', ['공지 사항', 'gongji sahang', 'mục thông báo']),
      w('준수하다', 'junsuhada', 'tuân thủ', '', ['규정을 준수하기 바랍니다.', 'gyujeongeul junsuhagi baramnida', 'Mong tuân thủ quy định.']),
      w('제출', 'jechul', 'nộp', '', ['서류 제출 바람.', 'seoryu jechul baram', 'Yêu cầu nộp hồ sơ.']),
      w('-(으)ㅁ으로써', '-(eu)meurosseo', 'bằng cách', '', ['노력함으로써 성공했다.', 'noryeokhameurosseo seonggonghaetda', 'Thành công bằng nỗ lực.']),
      w('사항', 'sahang', 'hạng mục, điều', '', ['주의 사항', 'juui sahang', 'điều cần chú ý'])
    ],
    qs: [
      ['mc', 'Yêu cầu trang trọng “Kính mong tham dự”?', '참석해 주시기 바랍니다.', ['참석해.', '참석하세요요.', '참석하기 원해.'], '-기 바랍니다.'],
      ['mc', 'Ghi chú báo cáo ngắn “Đã hoàn tất kiểm tra”?', '점검 완료함.', ['점검 완료했어요요.', '점검 완료하기.', '점검 끝났어.'], '-(으)ㅁ.'],
      ['mc', 'Mục tiêu dạng danh sách “Học mỗi ngày”?', '매일 공부하기', ['매일 공부함으로써', '매일 공부했음', '매일 공부해라'], '-기.'],
      ['mc', '준수하다 = ?', 'tuân thủ', ['chuẩn bị', 'giám sát', 'ban hành'], 'junsuhada.'],
      ['hear', '모든 직원은 보안 규정을 준수하시기 바랍니다.', 'Mọi nhân viên kính mong tuân thủ quy định bảo mật.', ['Quy định không bắt buộc.', 'Chỉ trưởng phòng tuân thủ.', 'Quy định bị huỷ.'], 'Văn bản.'],
      ['order', 'Sắp xếp: “Yêu cầu nộp hồ sơ.”', ['서류', '제출', '바람', '.'], '서류 제출 바람.']
    ],
    noi: [['참석해 주시기 바랍니다.', 'chamseokhae jusigi baramnida – Kính mong quý vị tham dự.'], ['규정을 준수하시기 바랍니다.', 'gyujeongeul junsuhasigi baramnida – Kính mong tuân thủ quy định.'], ['협력함으로써 목표를 달성했습니다.', 'hyeomnyeokhameurosseo mokpyoreul dalseonghaetseumnida – Đạt mục tiêu bằng cách hợp tác.']],
    hoithoai: {
      ctx: 'Em soạn thông báo nội bộ bằng tiếng Hàn cho văn phòng; trưởng phòng góp ý.', vai: 'Trưởng phòng hỏi, em giải thích cách viết.', ai: '👩‍💼 한 부장',
      luot: [
        T(['공지 제목은 뭐로 했어요?', 'gongji jemogeun mworo haesseoyo?', 'Tiêu đề thông báo là gì?'], ['"보안 교육 참석 안내"로 했습니다.', '"boan gyoyuk chamseok annae"ro haetseumnida', 'Em đặt "Hướng dẫn tham dự đào tạo bảo mật".', 'Tiêu đề danh từ.'], ['"보안 교육 와!"로 했어요.', '"boan gyoyuk wa!"ro haesseoyo', 'Khẩu ngữ.'], ['제목 없어요.', 'jemok eopseoyo', 'Thiếu.']),
        T(['본문 마지막 문장은요?', 'bonmun majimak munjangeunyo?', 'Câu cuối nội dung?'], ['"전 직원은 반드시 참석해 주시기 바랍니다."로 마무리했습니다.', '"jeon jigwoneun bandeusi chamseokhae jusigi baramnida."ro mamurihaetseumnida', 'Em kết: "Toàn thể nhân viên kính mong nhất định tham dự."', '-기 바랍니다.'], ['"다 와."', '"da wa."', 'Thô.'], ['"오고 싶으면 오세요."', '"ogo sipeumyeon oseyo."', 'Sai mức bắt buộc.']),
        T(['메모란에는요?', 'memoraneneunyo?', 'Ô ghi chú?'], ['"교육 자료 첨부함. 사전 확인 요망."이라고 썼습니다.', '"gyoyuk jaryo cheombuham. sajeon hwagin yomang."irago sseotseumnida', 'Em ghi: "Đính kèm tài liệu. Yêu cầu xem trước."', '-(으)ㅁ, 요망.'], ['"자료 있어요 봐요"요.', '"jaryo isseoyo bwayo"yo', 'Khẩu ngữ.'], ['안 썼어요.', 'an sseosseoyo', 'Thiếu.'])
      ], ket: 'Em đã soạn thông báo đúng văn phong trang trọng.'
    },
    tom: ['-기 / -(으)ㅁ', '-기 바랍니다', '-(으)ㅁ으로써', '요망 / 완료'], nguphap: 'Danh từ hoá, văn bản', phatam: '바랍니다 [바람니다]',
    loi: ['Khẩu ngữ trong thông báo'], btvn: ['Viết 1 thông báo nội bộ 100 chữ', 'Viết 5 mục tiêu năm dạng -기', 'Luyện 🎤 3 câu']
  };

  const d7 = {
    n: 7, ten: plan[6].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Ôn giai đoạn 1: nhượng bộ, nguyên nhân tiêu cực, quy luật, giới hạn, -다 보니, danh từ hoá.',
    hoc: `<h4>Tóm tắt tuần 1</h4>${tbl(['Chủ điểm', 'Mẫu'], [['Nhượng bộ', '-는데도, -(으)ㅁ에도 불구하고'], ['Nguyên nhân xấu', '-는 바람에, -는 탓에 / 덕분에'], ['Quy luật', '-기 마련이다, -는 법이다, -(으)ㄹ 수밖에 없다'], ['Giới hạn', '-(으)ㄹ 뿐이다, -기는커녕'], ['Quá trình', '-다 보니, -다 보면'], ['Văn bản', '-기 바랍니다, -(으)ㅁ']])}`,
    qs: [['mc', '“Vì kẹt xe nên muộn” (sự cố)?', '차가 막히는 바람에 늦었어요.', ['차가 막히는 덕분에 늦었어요.', '차가 막혀서 바람 늦었어요.', '차가 막히는 바람에 늦으세요.'], '-는 바람에.'], ['mc', '“Kính mong tham dự”?', '참석해 주시기 바랍니다.', ['참석해.', '참석하기 마련입니다.', '참석할 뿐입니다.'], '-기 바랍니다.']],
    noi: [['처음에는 누구나 실수하기 마련이에요.', 'cheoeumeneun nuguna silsuhagi maryeonieyo – Lúc đầu ai cũng mắc lỗi.'], ['어려움에도 불구하고 성공했습니다.', 'eoryeoumedo bulguhago seonggonghaetseumnida – Bất chấp khó khăn đã thành công.']],
    hoithoai: {
      ctx: 'Tổng ôn: buổi họp rút kinh nghiệm sau dự án.', vai: 'Giám đốc hỏi, em trả lời.', ai: '👔 이사님',
      luot: [
        T(['프로젝트가 왜 늦어졌습니까?', 'peurojekteuga wae neujeojyeotseumnikka?', 'Vì sao dự án chậm?'], ['협력업체 서버가 고장 나는 바람에 일주일 지연되었습니다.', 'hyeomnyeogeopche seobeoga gojang naneun barame iljuil jiyeondoeeotseumnida', 'Vì máy chủ đối tác hỏng nên chậm một tuần.', '-는 바람에.'], ['서버 덕분에요.', 'seobeo deokbuneyo', 'Sai sắc thái.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['그래도 결과는 좋았죠?', 'geuraedo gyeolgwaneun joatjyo?', 'Nhưng kết quả tốt chứ?'], ['네, 일정이 늦어졌음에도 불구하고 고객 만족도는 높았습니다.', 'ne, iljeongi neujeojyeosseumedo bulguhago gogaek manjokdoneun nopatseumnida', 'Vâng, dù chậm tiến độ, độ hài lòng khách vẫn cao.', 'Nhượng bộ.'], ['늦어서 만족했어요.', 'neujeoseo manjokhaesseoyo', 'Logic sai.'], ['결과 없어요.', 'gyeolgwa eopseoyo', 'Sai.']),
        T(['이번 경험에서 뭘 배웠어요?', 'ibeon gyeongheomeseo mwol baewosseoyo?', 'Học được gì từ lần này?'], ['문제가 생기기 마련이니까 항상 대비책을 준비해야 한다는 것을 배웠습니다.', 'munjega saenggigi maryeoninikka hangsang daebichaegeul junbihaeya handaneun geoseul baewotseumnida', 'Vấn đề tất sẽ phát sinh nên luôn phải chuẩn bị phương án dự phòng.', '-기 마련이다.'], ['배운 거 없어요.', 'baeun geo eopseoyo', 'Tiêu cực.'], ['운이 나빴을 뿐이에요.', 'uni nappasseul ppunieyo', 'Né trách nhiệm.'])
      ], ket: 'Em đã ôn trọn giai đoạn 1!'
    },
    tom: ['Ôn tuần 1', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn', phatam: 'Ôn đuôi trang trọng',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: học lại ngày yếu', 'Làm ⚡ Luyện nhanh', 'Viết báo cáo rút kinh nghiệm 200 chữ']
  };

  const d8 = {
    n: 8, ten: plan[7].ten, kinds: K,
    muc: 'Mở rộng từ vựng bằng từ Hán Hàn – lợi thế của người Việt: tiền tố 무-, 비-, 불-, 재-; hậu tố -성, -화, -적, -률.',
    hoc: `${tbl(['Hình vị', 'Hán Việt', 'Ví dụ'], [['무- (無)', 'vô', '무료 (miễn phí), 무관심 (vô tâm)'], ['비- (非)', 'phi', '비공식 (không chính thức)'], ['불- (不)', 'bất', '불가능 (bất khả năng)'], ['재- (再)', 'tái', '재활용 (tái chế), 재시작'], ['-성 (性)', 'tính', '가능성 (khả năng), 중요성'], ['-화 (化)', 'hoá', '현대화, 디지털화'], ['-적 (的)', 'đích (tính)', '경제적, 효율적'], ['-률/율 (率)', 'suất', '성공률, 이자율']])}
      ${tip('🔑 Người Việt đoán nghĩa từ Hán Hàn rất nhanh: 경제 = kinh tế, 교육 = giáo dục, 안전 = an toàn. Hãy tận dụng!')}`,
    vocab: [
      w('불가능', 'bulganeung', 'bất khả thi', '', ['그건 불가능해요.', 'geugeon bulganeunghaeyo', 'Điều đó không thể.']),
      w('비공식', 'bigongsik', 'không chính thức', '', ['비공식 회의', 'bigongsik hoeui', 'cuộc họp không chính thức']),
      w('무관심', 'mugwansim', 'vô tâm, thờ ơ', '', ['무관심한 태도', 'mugwansimhan taedo', 'thái độ thờ ơ']),
      w('재시작', 'jaesijak', 'khởi động lại', '', ['컴퓨터를 재시작하세요.', 'keompyuteoreul jaesijakhaseyo', 'Khởi động lại máy tính.']),
      w('가능성', 'ganeungseong', 'khả năng', '', ['성공 가능성이 높아요.', 'seonggong ganeungseongi nopayo', 'Khả năng thành công cao.']),
      w('중요성', 'jungyoseong', 'tầm quan trọng', '', ['교육의 중요성', 'gyoyugui jungyoseong', 'tầm quan trọng của giáo dục']),
      w('현대화', 'hyeondaehwa', 'hiện đại hoá', '', ['시설을 현대화했다.', 'siseoreul hyeondaehwahaetda', 'Đã hiện đại hoá cơ sở.']),
      w('효율적', 'hyoyuljeok', 'hiệu quả', '', ['효율적인 방법', 'hyoyuljeogin bangbeop', 'phương pháp hiệu quả']),
      w('성공률', 'seonggongnyul', 'tỷ lệ thành công', '', ['성공률이 높다.', 'seonggongnyuri nopda', 'Tỷ lệ thành công cao.']),
      w('이자율', 'ijayul', 'lãi suất', '', ['이자율이 올랐다.', 'ijayuri ollatda', 'Lãi suất tăng.'])
    ],
    qs: [
      ['mc', '불가능 Hán Việt là?', 'bất khả năng (không thể)', ['vô năng', 'phi công', 'tái năng'], '불 = bất.'],
      ['mc', '“Hiện đại hoá” = ?', '현대화', ['현대성', '현대적률', '재현대'], '-화 = hoá.'],
      ['mc', '이자율 = ?', 'lãi suất', ['tỷ lệ thành công', 'tỷ lệ sinh', 'tỷ giá'], '-율 = suất.'],
      ['mc', 'Đoán nghĩa 안전성?', 'tính an toàn', ['an toàn suất', 'bất an', 'tái an toàn'], '안전 + 성.'],
      ['hear', '이 방법은 비용이 적게 들어서 더 효율적이에요.', 'Cách này tốn ít chi phí nên hiệu quả hơn.', ['Tốn nhiều chi phí.', 'Kém hiệu quả.', 'Không thể làm.'], '효율적.'],
      ['order', 'Sắp xếp: “Khả năng thành công cao.”', ['성공', '가능성이', '높아요', '.'], '성공 가능성이 높아요.']
    ],
    noi: [['성공 가능성이 높아요.', 'seonggong ganeungseongi nopayo – Khả năng thành công cao.'], ['더 효율적인 방법이 있어요.', 'deo hyoyuljeogin bangbeobi isseoyo – Có cách hiệu quả hơn.'], ['그건 불가능해요.', 'geugeon bulganeunghaeyo – Điều đó không thể.']],
    hoithoai: {
      ctx: 'Đồng nghiệp Hàn ngạc nhiên vì em đoán nghĩa từ Hán Hàn nhanh.', vai: 'Bạn hỏi, em giải thích.', ai: '👨 상우',
      luot: [
        T(['"현대화"라는 말 알아요?', '"hyeondaehwa"raneun mal arayo?', 'Bạn biết từ "현대화" không?'], ['네, 베트남어로 "hiện đại hóa"예요. 발음이 비슷해요.', 'ne, Beteunameoro "hiện đại hóa"yeyo. bareumi biseuthaeyo', 'Có, tiếng Việt là "hiện đại hoá". Phát âm giống nhau.', 'Liên hệ Hán Việt.'], ['몰라요.', 'mollayo', 'Bỏ lỡ lợi thế.'], ['현대 자동차요?', 'Hyeondae jadongchayo?', 'Lạc.']),
        T(['와, 신기하네요! 그럼 "불가능"은요?', 'wa, singihaneyo! geureom "bulganeung"eunyo?', 'Thú vị! Thế còn "불가능"?'], ['"bất khả năng", 즉 "할 수 없다"는 뜻이에요.', '"bất khả năng", jeuk "hal su eopda"neun tteusieyo', '"Bất khả năng", tức là "không thể".', 'Giải thích.'], ['가능해요.', 'ganeunghaeyo', 'Ngược nghĩa.'], ['불이 났어요.', 'buri nasseoyo', 'Nhầm 불 = lửa.']),
        T(['한자어를 공부하는 게 효율적이겠네요.', 'hanjaeoreul gongbuhaneun ge hyoyuljeogigenneyo', 'Học từ Hán Hàn có vẻ hiệu quả nhỉ.'], ['맞아요. 다만 뜻이 다른 단어도 있으니까 꼭 확인해야 해요.', 'majayo. daman tteusi dareun daneodo isseunikka kkok hwaginhaeya haeyo', 'Đúng vậy. Có điều cũng có từ khác nghĩa nên phải kiểm tra.', 'Cảnh giác bẫy.'], ['다 똑같아요.', 'da ttokgatayo', 'Sai, có bẫy.'], ['효율 없어요.', 'hyoyul eopseoyo', 'Ngược.'])
      ], ket: 'Em đã tận dụng lợi thế Hán Việt để học từ.'
    },
    tom: ['무- / 비- / 불- / 재-', '-성 / -화 / -적 / -률'], nguphap: 'Cấu tạo từ Hán Hàn', phatam: '불가능 [불가능], 성공률 [성공뉼]',
    loi: ['Đoán nghĩa Hán Việt mà không kiểm tra'], btvn: ['Lập bảng 20 từ Hán Hàn – Hán Việt', 'Tìm 3 từ "bẫy" khác nghĩa', 'Luyện 🎤 3 câu']
  };

  const d9 = {
    n: 9, ten: plan[8].ten, kinds: K,
    muc: 'Hiểu và dùng quán dụng ngữ (관용어) liên quan bộ phận cơ thể: 발이 넓다, 손이 크다, 눈이 높다…',
    hoc: `${tbl(['Quán dụng ngữ', 'Nghĩa đen', 'Nghĩa bóng'], [['발이 넓다', 'chân rộng', 'quen biết rộng'], ['손이 크다', 'tay to', 'hào phóng (nấu/cho nhiều)'], ['눈이 높다', 'mắt cao', 'kén chọn'], ['귀가 얇다', 'tai mỏng', 'cả tin, dễ bị thuyết phục'], ['입이 무겁다', 'miệng nặng', 'kín miệng'], ['머리를 맞대다', 'chụm đầu', 'cùng bàn bạc']])}`,
    vocab: [
      w('발이 넓다', 'bari neolda', 'quen biết rộng', '', ['그는 발이 넓어요.', 'geuneun bari neolbeoyo', 'Anh ấy quen biết rộng.']),
      w('손이 크다', 'soni keuda', 'hào phóng', '', ['어머니는 손이 커요.', 'eomeonineun soni keoyo', 'Mẹ tôi rất hào phóng.']),
      w('눈이 높다', 'nuni nopda', 'kén chọn', '', ['눈이 너무 높아요.', 'nuni neomu nopayo', 'Quá kén chọn.']),
      w('귀가 얇다', 'gwiga yalda', 'cả tin', '', ['귀가 얇아서 잘 속아요.', 'gwiga yalbaseo jal sogayo', 'Cả tin nên hay bị lừa.']),
      w('입이 무겁다', 'ibi mugeopda', 'kín miệng', '', ['입이 무거운 사람', 'ibi mugeoun saram', 'người kín miệng']),
      w('머리를 맞대다', 'meorireul matdaeda', 'cùng bàn bạc', '', ['머리를 맞대고 해결했어요.', 'meorireul matdaego haegyeolhaesseoyo', 'Cùng bàn bạc giải quyết.']),
      w('손을 떼다', 'soneul tteda', 'rút tay, thôi không làm', '', ['그 일에서 손을 뗐어요.', 'geu ireseo soneul ttesseoyo', 'Tôi rút khỏi việc đó.']),
      w('눈코 뜰 새 없다', 'nunko tteul sae eopda', 'bận tối mắt', '', ['눈코 뜰 새 없이 바빠요.', 'nunko tteul sae eopsi bappayo', 'Bận tối mắt tối mũi.']),
      w('속다', 'sokda', 'bị lừa', '', ['광고에 속았어요.', 'gwanggoe sogasseoyo', 'Bị quảng cáo lừa.']),
      w('관용어', 'gwanyongeo', 'quán dụng ngữ', '', ['관용어를 배워요.', 'gwanyongeoreul baewoyo', 'Học quán dụng ngữ.'])
    ],
    qs: [
      ['mc', '“Anh ấy quen biết rộng”?', '그는 발이 넓어요.', ['그는 손이 커요.', '그는 눈이 높아요.', '그는 귀가 얇아요.'], '발이 넓다.'],
      ['mc', 'Người dễ tin quảng cáo – ?', '귀가 얇다', ['입이 무겁다', '발이 넓다', '손이 크다'], 'Cả tin.'],
      ['mc', 'Người giữ bí mật tốt – ?', '입이 무겁다', ['입이 가볍다', '귀가 얇다', '눈이 높다'], 'Kín miệng.'],
      ['hear', '연말이라 눈코 뜰 새 없이 바빠요.', 'Cuối năm bận tối mắt tối mũi.', ['Cuối năm rảnh.', 'Đau mắt.', 'Đi khám mũi.'], 'Quán dụng ngữ.'],
      ['hear', '팀원들이 머리를 맞대고 해결책을 찾았어요.', 'Các thành viên cùng bàn bạc tìm giải pháp.', ['Cãi nhau.', 'Mỗi người làm riêng.', 'Bỏ cuộc.'], '머리를 맞대다.'],
      ['order', 'Sắp xếp: “Mẹ tôi rất hào phóng.”', ['어머니는', '손이', '커요', '.'], '어머니는 손이 커요.']
    ],
    noi: [['그 사람은 발이 넓어요.', 'geu sarameun bari neolbeoyo – Người đó quen biết rộng.'], ['요즘 눈코 뜰 새 없이 바빠요.', 'yojeum nunko tteul sae eopsi bappayo – Dạo này bận tối mắt.'], ['머리를 맞대고 해결해 봐요.', 'meorireul matdaego haegyeolhae bwayo – Cùng bàn bạc giải quyết nhé.']],
    hoithoai: {
      ctx: 'Em và đồng nghiệp Hàn nói chuyện về người quen.', vai: 'Bạn kể, em đáp bằng quán dụng ngữ.', ai: '👩 보람',
      luot: [
        T(['박 과장님은 어느 회사 사람이든 다 알더라고요.', 'Bak gwajangnimeun eoneu hoesa saramideun da aldeoragoyo', 'Trưởng bộ phận Park quen người ở công ty nào cũng thấy biết hết.'], ['정말 발이 넓으시네요.', 'jeongmal bari neolbeusineyo', 'Ông ấy quen biết rộng thật.', 'Quán dụng ngữ.'], ['발이 크시네요.', 'bari keusineyo', 'Hiểu đen.'], ['손이 크시네요.', 'soni keusineyo', 'Sai nghĩa.']),
        T(['근데 이 얘기는 비밀이에요.', 'geunde i yaegineun bimirieyo', 'Mà chuyện này là bí mật đấy.'], ['걱정 마세요. 저 입이 무거운 편이에요.', 'geokjeong maseyo. jeo ibi mugeoun pyeonieyo', 'Đừng lo, tôi khá kín miệng.', 'Quán dụng ngữ + 편이다.'], ['저는 귀가 얇아요.', 'jeoneun gwiga yalbayo', 'Sai nghĩa.'], ['다 말할게요.', 'da malhalgeyo', 'Ngược.']),
        T(['요즘 많이 바쁘죠?', 'yojeum mani bappeujyo?', 'Dạo này bận lắm nhỉ?'], ['네, 연말이라서 눈코 뜰 새 없어요.', 'ne, yeonmariraseo nunko tteul sae eopseoyo', 'Vâng, cuối năm bận tối mắt.', 'Quán dụng ngữ.'], ['눈이 아파요.', 'nuni apayo', 'Hiểu đen.'], ['한가해요.', 'hangahaeyo', 'Ngược.'])
      ], ket: 'Em đã dùng quán dụng ngữ tự nhiên như người bản xứ.'
    },
    tom: ['발이 넓다 / 손이 크다 / 눈이 높다 / 귀가 얇다 / 입이 무겁다'], nguphap: 'Quán dụng ngữ', phatam: '넓어요 [널버요]',
    loi: ['Hiểu theo nghĩa đen'], btvn: ['Đặt câu với 8 quán dụng ngữ', 'So sánh với thành ngữ tiếng Việt tương đương', 'Luyện 🎤 3 câu']
  };

  const d10 = {
    n: 10, ten: plan[9].ten, kinds: K,
    muc: 'Hiểu và dẫn tục ngữ (속담) phổ biến trong hội thoại và đề TOPIK.',
    hoc: `${tbl(['Tục ngữ', 'Nghĩa', 'Tương đương Việt'], [['가는 말이 고와야 오는 말이 곱다', 'nói lời đẹp thì nhận lời đẹp', 'Lời nói chẳng mất tiền mua'], ['백지장도 맞들면 낫다', 'tờ giấy cũng nên cùng nâng', 'Một cây làm chẳng nên non'], ['소 잃고 외양간 고친다', 'mất bò mới sửa chuồng', 'Mất bò mới lo làm chuồng'], ['시작이 반이다', 'bắt đầu là được một nửa', 'Vạn sự khởi đầu nan'], ['낮말은 새가 듣고 밤말은 쥐가 듣는다', 'tường có tai', 'Tai vách mạch rừng']])}`,
    vocab: [
      w('속담', 'sokdam', 'tục ngữ', '', ['한국 속담', 'hanguk sokdam', 'tục ngữ Hàn']),
      w('곱다', 'gopda', 'đẹp, dịu dàng', '', ['말이 고와요.', 'mari gowayo', 'Lời nói dịu dàng.']),
      w('맞들다', 'matdeulda', 'cùng nâng', '', ['같이 맞들어요.', 'gachi matdeureoyo', 'Cùng nâng nhé.']),
      w('낫다', 'natda', 'tốt hơn', '', ['혼자보다 낫다.', 'honjaboda natda', 'Tốt hơn một mình.']),
      w('외양간', 'oeyanggan', 'chuồng bò', '', ['외양간을 고치다.', 'oeyangganeul gochida', 'Sửa chuồng bò.']),
      w('고치다', 'gochida', 'sửa', '', ['컴퓨터를 고쳤어요.', 'keompyuteoreul gochyeosseoyo', 'Đã sửa máy tính.']),
      w('반', 'ban', 'một nửa', '', ['시작이 반이다.', 'sijagi banida', 'Bắt đầu là được một nửa.']),
      w('교훈', 'gyohun', 'bài học', '', ['좋은 교훈을 얻었다.', 'joeun gyohuneul eodeotda', 'Rút ra bài học tốt.']),
      w('뜻', 'tteut', 'ý nghĩa', '', ['이 속담의 뜻이 뭐예요?', 'i sokdamui tteusi mwoyeyo?', 'Ý nghĩa tục ngữ này là gì?']),
      w('비유하다', 'biyuhada', 'ví von', '', ['인생을 여행에 비유해요.', 'insaengeul yeohaenge biyuhaeyo', 'Ví đời người như chuyến đi.'])
    ],
    qs: [
      ['mc', 'Sau sự cố mới mua phần mềm diệt virus – tục ngữ?', '소 잃고 외양간 고친다', ['시작이 반이다', '백지장도 맞들면 낫다', '가는 말이 고와야 오는 말이 곱다'], 'Mất bò mới làm chuồng.'],
      ['mc', 'Khuyến khích làm việc nhóm?', '백지장도 맞들면 낫다', ['소 잃고 외양간 고친다', '낮말은 새가 듣는다', '시작이 반이다'], 'Đoàn kết.'],
      ['mc', '시작이 반이다 ≈ tiếng Việt?', 'Vạn sự khởi đầu nan / Bắt đầu là đã được một nửa', ['Tai vách mạch rừng', 'Mất bò mới lo làm chuồng', 'Lời nói chẳng mất tiền mua'], 'Khởi đầu.'],
      ['hear', '가는 말이 고와야 오는 말이 곱다고 하잖아요. 고객에게 친절하게 말하세요.', 'Nói lời đẹp mới nhận lời đẹp mà. Hãy nói thân thiện với khách.', ['Nói gì cũng được.', 'Khách phải nói trước.', 'Đừng nói chuyện.'], 'Tục ngữ + khuyên.'],
      ['hear', '혼자 하지 말고 같이 해요. 백지장도 맞들면 낫잖아요.', 'Đừng làm một mình, cùng làm. Tờ giấy cũng nên cùng nâng mà.', ['Làm một mình tốt hơn.', 'Tờ giấy rất nặng.', 'Không cần giúp.'], 'Đoàn kết.'],
      ['order', 'Sắp xếp: “Bắt đầu là được một nửa.”', ['시작이', '반이다', '.'], '시작이 반이다.']
    ],
    noi: [['시작이 반이에요. 일단 해 봐요!', 'sijagi banieyo. ildan hae bwayo! – Bắt đầu là được một nửa. Cứ thử đi!'], ['백지장도 맞들면 낫다고 하잖아요.', 'baekjijangdo matdeulmyeon natdago hajanayo – Tờ giấy cũng nên cùng nâng mà.'], ['가는 말이 고와야 오는 말이 곱다.', 'ganeun mari gowaya oneun mari gopda – Nói lời đẹp thì nhận lời đẹp.']],
    hoithoai: {
      ctx: 'Đồng nghiệp ngại bắt đầu dự án mới vì quá lớn.', vai: 'Bạn lo lắng, em động viên bằng tục ngữ.', ai: '😟 수빈',
      luot: [
        T(['이 프로젝트가 너무 커서 어디서부터 시작해야 할지 모르겠어요.', 'i peurojekteuga neomu keoseo eodiseobuteo sijakhaeya halji moreugesseoyo', 'Dự án lớn quá, không biết bắt đầu từ đâu.'], ['시작이 반이라고 하잖아요. 작은 것부터 시작해 봐요.', 'sijagi banirago hajanayo. jageun geotbuteo sijakhae bwayo', 'Bắt đầu là được một nửa mà. Thử bắt đầu từ việc nhỏ.', 'Tục ngữ đúng.'], ['소 잃고 외양간 고쳐요.', 'so ilko oeyanggan gochyeoyo', 'Sai ngữ cảnh.'], ['하지 마세요.', 'haji maseyo', 'Tiêu cực.']),
        T(['혼자 하기엔 너무 벅차요.', 'honja hagien neomu beokchayo', 'Làm một mình quá sức.'], ['백지장도 맞들면 낫다고, 우리 팀이 같이 도울게요.', 'baekjijangdo matdeulmyeon natdago, uri timi gachi doulgeyo', 'Tờ giấy cũng nên cùng nâng, nhóm mình sẽ cùng giúp.', 'Tục ngữ + hứa.'], ['혼자 하세요.', 'honja haseyo', 'Bỏ mặc.'], ['입이 무거워요.', 'ibi mugeowoyo', 'Lạc.']),
        T(['고마워요. 그런데 지난번처럼 실수하면 어떡하죠?', 'gomawoyo. geureonde jinanbeoncheoreom silsuhamyeon eotteokajyo?', 'Cảm ơn. Nhưng lỡ sai như lần trước thì sao?'], ['이번에는 미리 점검표를 만들어서 소 잃고 외양간 고치는 일이 없게 해요.', 'ibeoneneun miri jeomgeompyoreul mandeureoseo so ilko oeyanggan gochineun iri eopge haeyo', 'Lần này làm bảng kiểm tra trước để không phải "mất bò mới làm chuồng".', 'Tục ngữ ngữ cảnh phòng ngừa.'], ['실수하기 마련이에요, 포기해요.', 'silsuhagi maryeonieyo, pogihaeyo', 'Tiêu cực.'], ['몰라요.', 'mollayo', 'Thờ ơ.'])
      ], ket: 'Em đã dẫn tục ngữ đúng ngữ cảnh để động viên.'
    },
    tom: ['5 tục ngữ phổ biến', 'Tương đương tiếng Việt'], nguphap: 'Tục ngữ', phatam: 'Đọc tục ngữ ngắt nhịp',
    loi: ['Dẫn tục ngữ sai ngữ cảnh'], btvn: ['Học thuộc 5 tục ngữ', 'Tìm thêm 3 tục ngữ Hàn có tương đương tiếng Việt', 'Luyện 🎤 3 câu']
  };

  const d11 = {
    n: 11, ten: plan[10].ten, kinds: K,
    muc: 'Viết mở bài câu 54 TOPIK II (600–700 chữ): giới thiệu vấn đề, nêu câu hỏi đề, định hướng lập luận.',
    hoc: `${tbl(['Bước', 'Mẫu câu'], [['Dẫn vấn đề', '현대 사회에서 …은/는 중요한 문제로 대두되고 있다.'], ['Bối cảnh', '최근 … 등으로 인해 …이/가 증가하고 있다.'], ['Định hướng', '이 글에서는 …의 원인과 해결 방안에 대해 살펴보고자 한다.']])}
      ${tip('📝 Câu 54: thường có 3 câu hỏi gợi ý (đề bài), bài viết phải trả lời đủ cả 3, văn viết -다, không dùng -아요.')}`,
    vocab: [
      w('대두되다', 'daedudoeda', 'nổi lên (vấn đề)', '', ['문제로 대두되었다.', 'munjero daedudoeeotda', 'Đã nổi lên thành vấn đề.']),
      w('살펴보다', 'salpyeoboda', 'xem xét', '', ['원인을 살펴보고자 한다.', 'woneul salpyeobogoja handa', 'Xin xem xét nguyên nhân.']),
      w('-고자 하다', '-goja hada', 'muốn, định (văn viết)', '', ['논의하고자 한다.', 'nonuihagoja handa', 'Xin bàn luận.']),
      w('방안', 'bangan', 'phương án', '', ['해결 방안', 'haegyeol bangan', 'phương án giải quyết']),
      w('인해', 'inhae', 'do (văn viết)', '', ['기술 발전으로 인해', 'gisul baljeoneuro inhae', 'do phát triển công nghệ']),
      w('현대 사회', 'hyeondae sahoe', 'xã hội hiện đại', '', ['현대 사회의 특징', 'hyeondae sahoeui teukjing', 'đặc trưng xã hội hiện đại']),
      w('측면', 'cheungmyeon', 'mặt, khía cạnh', '', ['경제적 측면', 'gyeongjejeok cheungmyeon', 'khía cạnh kinh tế']),
      w('영향을 미치다', 'yeonghyangeul michida', 'gây ảnh hưởng', '', ['큰 영향을 미친다.', 'keun yeonghyangeul michinda', 'Gây ảnh hưởng lớn.']),
      w('긍정적', 'geungjeongjeok', 'tích cực', '', ['긍정적인 영향', 'geungjeongjeogin yeonghyang', 'ảnh hưởng tích cực']),
      w('부정적', 'bujeongjeok', 'tiêu cực', '', ['부정적인 측면', 'bujeongjeogin cheungmyeon', 'mặt tiêu cực'])
    ],
    qs: [
      ['mc', 'Câu mở bài văn viết chuẩn?', '현대 사회에서 개인 정보 보호는 중요한 문제로 대두되고 있다.', ['요즘 개인 정보가 중요해요.', '저는 개인 정보가 걱정돼요.', '개인 정보 좋아요.'], 'Văn viết -다.'],
      ['mc', 'Câu định hướng bài viết?', '이 글에서는 원인과 해결 방안을 살펴보고자 한다.', ['이제 원인을 볼게요.', '원인 몰라요.', '해결 방안 있어요?'], '-고자 한다.'],
      ['mc', '측면 = ?', 'khía cạnh', ['phía sau', 'đo lường', 'bên cạnh'], 'cheungmyeon.'],
      ['hear', '최근 기술 발전으로 인해 재택근무가 크게 증가하고 있다.', 'Gần đây do công nghệ phát triển, làm việc từ xa tăng mạnh.', ['Làm từ xa giảm.', 'Công nghệ thụt lùi.', 'Không thay đổi.'], '으로 인해.'],
      ['hear', '이는 경제적 측면뿐만 아니라 사회적 측면에도 영향을 미친다.', 'Điều này ảnh hưởng không chỉ khía cạnh kinh tế mà cả xã hội.', ['Chỉ ảnh hưởng kinh tế.', 'Không ảnh hưởng.', 'Chỉ xã hội.'], '뿐만 아니라.'],
      ['order', 'Sắp xếp: “Gây ảnh hưởng lớn.”', ['큰', '영향을', '미친다', '.'], '큰 영향을 미친다.']
    ],
    noi: [['현대 사회에서 … 은 중요한 문제로 대두되고 있다.', 'hyeondae sahoeeseo … eun jungyohan munjero daedudoego itda – Trong xã hội hiện đại, … đang nổi lên thành vấn đề quan trọng.'], ['이 글에서는 해결 방안을 살펴보고자 한다.', 'i geureseoneun haegyeol banganeul salpyeobogoja handa – Bài viết này xin xem xét phương án giải quyết.'], ['큰 영향을 미친다.', 'keun yeonghyangeul michinda – Gây ảnh hưởng lớn.']],
    hoithoai: {
      ctx: 'Gia sư luyện thi chữa phần mở bài câu 54 của em (đề: “Ưu và nhược điểm của làm việc từ xa”).', vai: 'Gia sư hỏi, em trả lời.', ai: '👨‍🏫 첨삭 선생님',
      luot: [
        T(['첫 문장을 읽어 보세요.', 'cheot munjangeul ilgeo boseyo', 'Đọc câu đầu xem.'], ['"최근 기술 발전으로 인해 재택근무를 하는 직장인이 크게 증가하고 있다."', '"choegeun gisul baljeoneuro inhae jaetaekgeunmureul haneun jikjangini keuge jeunggahago itda."', '"Gần đây do công nghệ phát triển, người làm từ xa tăng mạnh."', 'Bối cảnh văn viết.'], ['"요즘 재택근무 많아요."', '"yojeum jaetaekgeunmu manayo."', 'Văn nói.'], ['"저는 재택근무가 좋아요."', '"jeoneun jaetaekgeunmuga joayo."', 'Ý kiến cá nhân quá sớm.']),
        T(['그다음은요?', 'geudaeumeunyo?', 'Tiếp theo?'], ['"이는 개인의 삶뿐만 아니라 기업 문화에도 큰 영향을 미치고 있다."', '"ineun gaeinui samppunman anira gieop munhwaedo keun yeonghyangeul michigo itda."', '"Điều này ảnh hưởng lớn không chỉ đời sống cá nhân mà cả văn hoá doanh nghiệp."', 'Mở rộng.'], ['"그래서 좋아요."', '"geuraeseo joayo."', 'Văn nói.'], ['안 썼어요.', 'an sseosseoyo', 'Thiếu.']),
        T(['마지막 문장은요?', 'majimak munjangeunyo?', 'Câu cuối mở bài?'], ['"이 글에서는 재택근무의 장단점을 살펴보고 바람직한 방향을 제시하고자 한다."', '"i geureseoneun jaetaekgeunmuui jangdanjeomeul salpyeobogo baramjikhan banghyangeul jesihagoja handa."', '"Bài viết này xin xem xét ưu nhược điểm làm từ xa và đề xuất hướng đúng đắn."', 'Định hướng.'], ['"끝."', '"kkeut."', 'Sai.'], ['"재택근무 하세요."', '"jaetaekgeunmu haseyo."', 'Mệnh lệnh.'])
      ], ket: 'Em đã viết mở bài câu 54 chuẩn.'
    },
    tom: ['대두되다 / 으로 인해 / -고자 한다', 'Mở bài 3 câu: vấn đề – bối cảnh – định hướng'], nguphap: 'Viết mở bài nghị luận', phatam: '살펴보고자 [살펴보고자]',
    loi: ['Văn nói trong bài viết', 'Nêu ý kiến ngay câu đầu'], btvn: ['Viết mở bài cho 3 đề câu 54', 'Học thuộc 5 mẫu câu', 'Luyện 🎤 3 câu']
  };

  const d12 = {
    n: 12, ten: plan[11].ten, kinds: K,
    muc: 'Viết thân bài và kết luận câu 54: triển khai luận điểm, ví dụ, phản biện, kết luận và đề xuất.',
    hoc: `${tbl(['Phần', 'Mẫu câu'], [['Luận điểm 1', '먼저 …다는 점을 들 수 있다.'], ['Ví dụ', '예를 들어 …'], ['Luận điểm 2', '또한 …'], ['Phản biện', '반면 …다는 지적도 있다. 그러나 …'], ['Kết luận', '이상으로 …을/를 살펴보았다. 따라서 …해야 할 것이다.']])}
      ${tip('📝 Phân bổ gợi ý: mở bài ~100 chữ, thân bài ~450 chữ, kết ~100 chữ. Mỗi đoạn một ý.')}`,
    vocab: [
      w('들 수 있다', 'deul su itda', 'có thể kể đến', '', ['원인으로 세 가지를 들 수 있다.', 'wonineuro se gajireul deul su itda', 'Có thể kể ba nguyên nhân.']),
      w('또한', 'ttohan', 'ngoài ra', '', ['또한 비용도 줄일 수 있다.', 'ttohan biyongdo juril su itda', 'Ngoài ra còn giảm chi phí.']),
      w('지적', 'jijeok', 'chỉ ra, phê bình', '', ['비판적인 지적도 있다.', 'bipanjeogin jijeokdo itda', 'Cũng có ý kiến phê bình.']),
      w('제시하다', 'jesihada', 'đưa ra', '', ['방안을 제시하다.', 'banganeul jesihada', 'Đưa ra phương án.']),
      w('이상으로', 'isangeuro', 'như trên', '', ['이상으로 살펴보았다.', 'isangeuro salpyeoboatda', 'Như trên đã xem xét.']),
      w('장단점', 'jangdanjeom', 'ưu nhược điểm', '', ['장단점을 비교하다.', 'jangdanjeomeul bigyohada', 'So sánh ưu nhược điểm.']),
      w('균형', 'gyunhyeong', 'cân bằng', '', ['균형을 맞추다.', 'gyunhyeongeul matchuda', 'Giữ cân bằng.']),
      w('바람직하다', 'baramjikhada', 'đúng đắn, đáng mong', '', ['바람직한 방향이다.', 'baramjikhan banghyangida', 'Là hướng đúng đắn.']),
      w('노력이 필요하다', 'noryeogi piryohada', 'cần nỗ lực', '', ['사회적 노력이 필요하다.', 'sahoejeok noryeogi piryohada', 'Cần nỗ lực xã hội.']),
      w('결론', 'gyeollon', 'kết luận', '', ['결론적으로', 'gyeollonjeogeuro', 'kết luận lại'])
    ],
    qs: [
      ['mc', 'Mở luận điểm 1 văn viết?', '먼저 비용을 줄일 수 있다는 점을 들 수 있다.', ['첫 번째는 돈이에요.', '먼저 돈 아껴요.', '비용 좋아요.'], 'Văn viết.'],
      ['mc', 'Câu kết luận câu 54?', '이상으로 재택근무의 장단점을 살펴보았다. 따라서 균형 있는 제도가 필요할 것이다.', ['끝입니다.', '재택근무 좋아요.', '감사합니다.'], 'Tổng kết + đề xuất.'],
      ['mc', '장단점 = ?', 'ưu nhược điểm', ['dài ngắn', 'trưởng đơn', 'điểm số'], 'jangdanjeom.'],
      ['hear', '반면 소통이 어려워진다는 지적도 있다. 그러나 화상 회의로 보완할 수 있다.', 'Ngược lại có ý kiến cho rằng giao tiếp khó hơn. Tuy nhiên có thể bổ sung bằng họp video.', ['Giao tiếp dễ hơn.', 'Không có ý kiến phản đối.', 'Không thể khắc phục.'], 'Phản biện.'],
      ['hear', '따라서 기업과 개인 모두의 노력이 필요할 것이다.', 'Do đó cần nỗ lực của cả doanh nghiệp và cá nhân.', ['Chỉ doanh nghiệp.', 'Không cần nỗ lực.', 'Chỉ cá nhân.'], 'Kết luận.'],
      ['order', 'Sắp xếp: “Đưa ra phương án.”', ['방안을', '제시하다', '.'], '방안을 제시하다.']
    ],
    noi: [['먼저 … 다는 점을 들 수 있다.', 'meonjeo … daneun jeomeul deul su itda – Trước hết có thể kể đến điểm…'], ['반면 … 다는 지적도 있다.', 'banmyeon … daneun jijeokdo itda – Ngược lại cũng có ý kiến cho rằng…'], ['따라서 균형 있는 접근이 필요할 것이다.', 'ttaraseo gyunhyeong inneun jeopgeuni piryohal geosida – Do đó cần cách tiếp cận cân bằng.']],
    hoithoai: {
      ctx: 'Em trình bày dàn ý thân – kết câu 54 cho nhóm học.', vai: 'Bạn hỏi, em trình bày.', ai: '🧑‍🎓 스터디원',
      luot: [
        T(['본론 첫 단락은 뭐 써?', 'bollon cheot danrageun mwo sseo?', 'Đoạn thân 1 viết gì?'], ['"먼저 출퇴근 시간을 절약할 수 있다는 점을 들 수 있다"로 시작하고 예시를 넣을 거야.', '"meonjeo chultoegeun siganeul jeoryakhal su itdaneun jeomeul deul su itda"ro sijakhago yesireul neoeul geoya', 'Mở "Trước hết có thể kể việc tiết kiệm thời gian đi lại", rồi thêm ví dụ.', 'Luận điểm + ví dụ.'], ['그냥 좋다고 써.', 'geunyang jotago sseo', 'Không luận cứ.'], ['몰라.', 'molla', 'Thiếu.']),
        T(['반대 의견은?', 'bandae uigyeoneun?', 'Ý kiến ngược?'], ['"반면 팀워크가 약해진다는 지적도 있다. 그러나 정기 회의로 보완할 수 있다"로 쓸 거야.', '"banmyeon timwokeuga yakhaejindaneun jijeokdo itda. geureona jeonggi hoeuiro bowanhal su itda"ro sseul geoya', 'Viết: "Ngược lại có ý kiến tinh thần nhóm yếu đi. Tuy nhiên khắc phục bằng họp định kỳ."', 'Phản biện.'], ['반대 의견은 무시해.', 'bandae uigyeoneun musihae', 'Thiếu.'], ['쓸 필요 없어.', 'sseul piryo eopseo', 'Thiếu.']),
        T(['결론은?', 'gyeolloneun?', 'Kết luận?'], ['"이상으로 장단점을 살펴보았다. 따라서 기업은 균형 있는 제도를 마련해야 할 것이다."', '"isangeuro jangdanjeomeul salpyeoboatda. ttaraseo gieobeun gyunhyeong inneun jedoreul maryeonhaeya hal geosida."', '"Như trên đã xem xét ưu nhược. Do đó doanh nghiệp cần xây dựng chế độ cân bằng."', 'Kết chuẩn.'], ['"끝!"', '"kkeut!"', 'Sai.'], ['"재택근무 최고."', '"jaetaekgeunmu choego."', 'Văn nói, cực đoan.'])
      ], ket: 'Em đã hoàn thiện dàn ý câu 54.'
    },
    tom: ['먼저 … 들 수 있다 / 또한 / 반면 … 지적 / 이상으로 … 따라서'], nguphap: 'Thân bài và kết luận', phatam: '지적 [지적]',
    loi: ['Thiếu phản biện', 'Kết luận không đề xuất'], btvn: ['Viết trọn 1 bài câu 54 (600 chữ)', 'Đếm chữ và tự sửa văn phong', 'Luyện 🎤 3 câu']
  };

  const d13 = {
    n: 13, ten: plan[12].ten, kinds: K,
    muc: 'Viết email và văn bản công việc trang trọng: chào hỏi đầu thư, nội dung, yêu cầu, kết thư.',
    hoc: `${tbl(['Phần', 'Mẫu'], [['Chào', '안녕하십니까. PLT의 민입니다.'], ['Cảm ơn', '항상 협조해 주셔서 감사드립니다.'], ['Mục đích', '다름이 아니라 … 관련하여 연락드립니다.'], ['Yêu cầu', '…해 주시면 감사하겠습니다.'], ['Đính kèm', '관련 자료를 첨부하오니 확인 부탁드립니다.'], ['Kết', '감사합니다. 민 드림']])}`,
    vocab: [
      w('협조', 'hyeopjo', 'hợp tác, phối hợp', '', ['협조 부탁드립니다.', 'hyeopjo butakdeurimnida', 'Mong phối hợp.']),
      w('다름이 아니라', 'dareumi anira', 'không gì khác (là)', '', ['다름이 아니라 견적 관련하여…', 'dareumi anira gyeonjeok gwallyeonhayeo…', 'Không gì khác là về báo giá…']),
      w('관련하여', 'gwallyeonhayeo', 'liên quan đến', '', ['계약 관련하여 문의드립니다.', 'gyeyak gwallyeonhayeo munuideurimnida', 'Xin hỏi liên quan đến hợp đồng.']),
      w('첨부하다', 'cheombuhada', 'đính kèm', '', ['파일을 첨부합니다.', 'pareul cheombuhamnida', 'Xin đính kèm tệp.']),
      w('견적서', 'gyeonjeokseo', 'bảng báo giá', '', ['견적서를 보내 드립니다.', 'gyeonjeokseoreul bonae deurimnida', 'Xin gửi báo giá.']),
      w('회신', 'hoesin', 'hồi âm', '', ['회신 부탁드립니다.', 'hoesin butakdeurimnida', 'Mong hồi âm.']),
      w('드림', 'deurim', '(ký tên) kính thư', '', ['민 드림', 'Min deurim', 'Minh kính thư']),
      w('-하오니', '-haoni', '(văn thư) vì… nên', '', ['첨부하오니 확인 바랍니다.', 'cheombuhaoni hwagin baramnida', 'Xin đính kèm, mong kiểm tra.']),
      w('감사하겠습니다', 'gamsahagesseumnida', 'xin cảm ơn (nếu…)', '', ['검토해 주시면 감사하겠습니다.', 'geomtohae jusimyeon gamsahagesseumnida', 'Nếu xem xét giúp thì xin cảm ơn.']),
      w('일정', 'iljeong', 'lịch', '', ['일정 조율 부탁드립니다.', 'iljeong joyul butakdeurimnida', 'Mong điều chỉnh lịch.'])
    ],
    qs: [
      ['mc', 'Câu nêu mục đích email trang trọng?', '다름이 아니라 계약 관련하여 연락드립니다.', ['계약 때문에 연락했어.', '계약 얘기 좀 해요.', '계약이요?'], 'Mẫu chuẩn.'],
      ['mc', 'Kết thư ký tên?', '민 드림', ['민 올림이야', '민이에요', '민 씀요'], 'Chuẩn.'],
      ['mc', '회신 = ?', 'hồi âm', ['họp', 'gửi lại', 'cảm ơn'], 'hoesin.'],
      ['hear', '관련 자료를 첨부하오니 확인 부탁드립니다.', 'Xin đính kèm tài liệu liên quan, mong kiểm tra.', ['Không có tài liệu.', 'Tài liệu bị mất.', 'Đã kiểm tra rồi.'], 'Văn thư.'],
      ['hear', '금요일까지 회신해 주시면 감사하겠습니다.', 'Nếu hồi âm trước thứ Sáu thì xin cảm ơn.', ['Hồi âm tuần sau.', 'Không cần hồi âm.', 'Gọi điện thứ Sáu.'], 'Yêu cầu.'],
      ['order', 'Sắp xếp: “Mong phối hợp.”', ['협조', '부탁드립니다', '.'], '협조 부탁드립니다.']
    ],
    noi: [['다름이 아니라 견적 관련하여 연락드립니다.', 'dareumi anira gyeonjeok gwallyeonhayeo yeollakdeurimnida – Tôi liên lạc về việc báo giá.'], ['검토해 주시면 감사하겠습니다.', 'geomtohae jusimyeon gamsahagesseumnida – Nếu anh/chị xem xét giúp thì xin cảm ơn.'], ['회신 부탁드립니다.', 'hoesin butakdeurimnida – Mong hồi âm.']],
    hoithoai: {
      ctx: 'Em gọi điện xác nhận email gửi đối tác Hàn về báo giá.', vai: 'Đối tác hỏi, em trả lời.', ai: '📧 구매 담당자',
      luot: [
        T(['네, 메일 받았습니다. 어떤 건이었죠?', 'ne, meil badatseumnida. eotteon geonieotjyo?', 'Vâng, nhận mail rồi. Về việc gì nhỉ?'], ['다름이 아니라 노트북 100대 견적 관련하여 메일 드렸습니다.', 'dareumi anira noteubuk baekdae gyeonjeok gwallyeonhayeo meil deuryeotseumnida', 'Không gì khác là về báo giá 100 laptop.', 'Mẫu chuẩn.'], ['노트북 사요?', 'noteubuk sayo?', 'Thô.'], ['몰라요.', 'mollayo', 'Sai.']),
        T(['첨부 파일이 안 열리는데요.', 'cheombu pairi an yeollineundeyo', 'Tệp đính kèm không mở được.'], ['불편을 드려 죄송합니다. PDF 파일로 다시 보내 드리겠습니다.', 'bulpyeoneul deuryeo joesonghamnida. PDF pailo dasi bonae deurigesseumnida', 'Xin lỗi vì bất tiện. Tôi gửi lại bản PDF.', 'Xử lý.'], ['컴퓨터 문제예요.', 'keompyuteo munjeyeyo', 'Đổ lỗi.'], ['다시 안 보내요.', 'dasi an bonaeyo', 'Không hợp tác.']),
        T(['네, 확인하고 회신드리겠습니다.', 'ne, hwaginhago hoesindeurigesseumnida', 'Vâng, kiểm tra xong tôi hồi âm.'], ['감사합니다. 금요일까지 회신 주시면 감사하겠습니다.', 'gamsahamnida. geumyoilkkaji hoesin jusimyeon gamsahagesseumnida', 'Cảm ơn. Nếu hồi âm trước thứ Sáu thì xin cảm ơn.', 'Yêu cầu mềm.'], ['빨리 하세요.', 'ppalli haseyo', 'Thúc ép.'], ['안 해도 돼요.', 'an haedo dwaeyo', 'Lạc.'])
      ], ket: 'Em đã giao tiếp email công việc trang trọng.'
    },
    tom: ['다름이 아니라 / 관련하여', '첨부하오니 / 회신 / 감사하겠습니다 / 드림'], nguphap: 'Văn thư thương mại', phatam: '감사하겠습니다 [감사하겓씀니다]',
    loi: ['Dùng khẩu ngữ trong email đối tác'], btvn: ['Viết email gửi báo giá 150 chữ', 'Viết email xin dời lịch họp', 'Luyện 🎤 3 câu']
  };

  const d14 = {
    n: 14, ten: plan[13].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Ôn giai đoạn 2: từ Hán Hàn, quán dụng ngữ, tục ngữ, câu 54, email trang trọng.',
    hoc: `<h4>Tóm tắt tuần 2</h4>${tbl(['Chủ điểm', 'Mẫu'], [['Hán Hàn', '불가능, 현대화, 효율적, 성공률'], ['Quán dụng ngữ', '발이 넓다, 입이 무겁다, 눈코 뜰 새 없다'], ['Tục ngữ', '시작이 반이다, 백지장도 맞들면 낫다'], ['Câu 54', '대두되다, -고자 한다, 들 수 있다, 이상으로'], ['Email', '다름이 아니라, 첨부하오니, 회신, 드림']])}`,
    qs: [['mc', '“Quen biết rộng”?', '발이 넓다', ['손이 크다', '귀가 얇다', '눈이 높다'], 'Quán dụng ngữ.'], ['mc', 'Mở bài câu 54?', '현대 사회에서 … 문제로 대두되고 있다.', ['요즘 문제 있어요.', '저는 걱정돼요.', '끝.'], 'Văn viết.']],
    noi: [['시작이 반이에요.', 'sijagi banieyo – Bắt đầu là được một nửa.'], ['다름이 아니라 … 관련하여 연락드립니다.', 'dareumi anira … gwallyeonhayeo yeollakdeurimnida – Tôi liên lạc về việc…']],
    hoithoai: {
      ctx: 'Tổng ôn: em giới thiệu một đồng nghiệp mới cho đối tác Hàn.', vai: 'Đối tác hỏi, em trả lời.', ai: '🤝 거래처 부장',
      luot: [
        T(['새로 온 분은 어떤 분이에요?', 'saero on buneun eotteon bunieyo?', 'Người mới là người thế nào?'], ['업계에 발이 넓고 입이 무거워서 믿을 만한 분이에요.', 'eopgye-e bari neolgo ibi mugeowoseo mideul manhan bunieyo', 'Quen biết rộng trong ngành, kín miệng nên đáng tin.', 'Quán dụng ngữ.'], ['발이 크고 입이 무거워요.', 'bari keugo ibi mugeowoyo', 'Hiểu đen.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['이번 프로젝트는 규모가 커서 걱정이에요.', 'ibeon peurojekteuneun gyumoga keoseo geokjeongieyo', 'Dự án lần này lớn nên lo.'], ['백지장도 맞들면 낫다고, 양사가 협력하면 충분히 가능합니다.', 'baekjijangdo matdeulmyeon natdago, yangsaga hyeomnyeokhamyeon chungbunhi ganeunghamnida', 'Tờ giấy cũng nên cùng nâng, hai công ty hợp tác thì hoàn toàn khả thi.', 'Tục ngữ + Hán Hàn.'], ['불가능해요.', 'bulganeunghaeyo', 'Tiêu cực.'], ['걱정하세요.', 'geokjeonghaseyo', 'Ngược.']),
        T(['그럼 자세한 내용은 메일로 보내 주세요.', 'geureom jasehan naeyongeun meillo bonae juseyo', 'Vậy gửi chi tiết qua mail nhé.'], ['네, 관련 자료를 첨부하여 오늘 중으로 보내 드리겠습니다.', 'ne, gwallyeon jaryoreul cheombuhayeo oneul jungeuro bonae deurigesseumnida', 'Vâng, tôi sẽ đính kèm tài liệu và gửi trong hôm nay.', 'Văn thư.'], ['알았어.', 'arasseo', 'Trống không.'], ['내년에 보낼게요.', 'naenyeone bonaelgeyo', 'Chậm.'])
      ], ket: 'Em đã ôn trọn giai đoạn 2!'
    },
    tom: ['Ôn tuần 2', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn', phatam: 'Ôn từ Hán Hàn',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: học lại ngày yếu', 'Làm ⚡ Luyện nhanh', 'Viết 1 bài câu 54 hoàn chỉnh']
  };

  window.PLT_KO4 = { plan, stages, H: { w, L, T, tbl, tip, exs, sp, K }, days: [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14] };
})();

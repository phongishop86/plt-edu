/* PLT-Edu · Tiếng Hàn – Cấp 5 (TOPIK II · cấp 5–6): lộ trình 30 ngày, Ngày 1–14 */
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
    'Bổ sung và nhượng bộ cao cấp: -거니와, -(으)ㄹ지언정', 'Điều kiện và giới hạn: -는 한, -기 나름이다', 'Đối lập và quy đổi: -는 반면, -는 셈이다', 'Mức độ quá mức: -(으)ㄴ 나머지, -다시피', 'Văn phong báo chí: -(으)ㄴ바, -에 의하면, -것으로 알려지다', 'Văn viết học thuật: -고자, -에 있어서, -(으)며', 'Ôn tập tuần 1 và kiểm tra',
    'Thành ngữ 4 chữ (사자성어) – phần 1', 'Thành ngữ 4 chữ (사자성어) – phần 2', 'Từ vựng học thuật: khái niệm, giả thuyết, phương pháp', 'Cấu trúc bài luận học thuật', 'Viết TOPIK câu 54 điểm cao', 'Kính ngữ nghi lễ và văn bản trang trọng', 'Ôn tập tuần 2 và kiểm tra',
    'Biên dịch Việt – Hàn: nguyên tắc', 'Biên dịch văn bản ngân hàng – tài chính', 'Phiên dịch tiếp nối trong cuộc họp', 'Pháp luật và hợp đồng', 'Hợp tác Việt – Hàn: ngoại giao, đầu tư', 'Văn học cổ điển Hàn: thời điệu (시조)', 'Kiểm tra tổng hợp và mô phỏng',
    'Phát biểu trang trọng, diễn văn', 'Phỏng vấn tuyển dụng cấp cao', 'Thảo luận tại hội thảo', 'Trình bày đề tài nghiên cứu', 'Đọc văn bản học thuật', 'Nghe thời sự và tranh luận truyền hình', 'Nghe hiểu TOPIK II cấp 5–6', 'Mô phỏng phiên dịch hội nghị', 'Kiểm tra cuối khoá TOPIK II cấp 5–6 và lộ trình tiếp'
  ].map((ten, i) => ({ n: i + 1, ten }));
  const stages = [
    { ten: '🧩 Giai đoạn 1 – Ngữ pháp cao cấp', tu: 1, den: 7 }, { ten: '📜 Giai đoạn 2 – Thành ngữ và văn viết học thuật', tu: 8, den: 14 },
    { ten: '🌐 Giai đoạn 3 – Biên – phiên dịch và chuyên ngành', tu: 15, den: 21 }, { ten: '🎓 Giai đoạn 4 – Nói học thuật và luyện thi', tu: 22, den: 30 }
  ];

  const d1 = {
    n: 1, ten: plan[0].ten, kinds: K,
    muc: '-거니와 (đã… lại còn – văn viết), -(으)ㄹ지언정 (thà… chứ không) để nêu lập trường mạnh.',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ', 'Nghĩa'], [['-거니와', '그는 능력도 뛰어나거니와 성품도 훌륭하다.', 'Anh ấy năng lực đã giỏi lại còn tính cách tốt.'], ['-(으)ㄹ지언정', '굶을지언정 남의 것은 훔치지 않겠다.', 'Thà nhịn đói chứ không ăn cắp của người.']])}
      ${tip('🔑 -(으)ㄹ지언정 vế sau thường là phủ định mạnh (않겠다, 못 하겠다).')}`,
    vocab: [
      w('-거니와', '-geoniwa', 'đã… lại còn', '', ['값도 싸거니와 품질도 좋다.', 'gapdo ssageoniwa pumjildo jota', 'Giá đã rẻ lại còn chất lượng tốt.']),
      w('-(으)ㄹ지언정', '-(eu)ljieonjeong', 'thà… chứ không', '', ['손해를 볼지언정 거짓말은 안 한다.', 'sonhaereul boljieonjeong geojinmareun an handa', 'Thà chịu thiệt chứ không nói dối.']),
      w('굶다', 'gumda', 'nhịn đói', '', ['아침을 굶었다.', 'achimeul gulmeotda', 'Đã nhịn bữa sáng.']),
      w('굴복하다', 'gulbokhada', 'khuất phục', '', ['압력에 굴복하지 않았다.', 'amnyeoge gulbokhaji anatda', 'Không khuất phục áp lực.']),
      w('타협하다', 'tahyeophada', 'thoả hiệp', '', ['원칙과 타협하지 않는다.', 'wonchikgwa tahyeophaji anneunda', 'Không thoả hiệp nguyên tắc.']),
      w('자존심', 'jajonsim', 'lòng tự trọng', '', ['자존심이 강하다.', 'jajonsimi ganghada', 'Lòng tự trọng cao.']),
      w('성품', 'seongpum', 'tính cách, phẩm chất', '', ['성품이 온화하다.', 'seongpumi onhwahada', 'Tính cách ôn hoà.']),
      w('뛰어나다', 'ttwieonada', 'xuất sắc', '', ['능력이 뛰어나다.', 'neungnyeogi ttwieonada', 'Năng lực xuất sắc.']),
      w('정직하다', 'jeongjikhada', 'chính trực', '', ['정직하게 살다.', 'jeongjikhage salda', 'Sống chính trực.']),
      w('손해', 'sonhae', 'thiệt hại', '', ['손해를 보다.', 'sonhaereul boda', 'Chịu thiệt.'])
    ],
    qs: [
      ['mc', '“Thà chịu thiệt chứ không nói dối”?', '손해를 볼지언정 거짓말은 하지 않겠다.', ['손해를 보거니와 거짓말도 한다.', '손해를 봐서 거짓말을 했다.', '손해를 보면 거짓말해도 된다.'], '-(으)ㄹ지언정.'],
      ['mc', '-거니와 nghĩa?', 'đã… lại còn', ['mặc dù', 'nếu như', 'vì vậy'], 'Bổ sung, văn viết.'],
      ['mc', '굴복하다 = ?', 'khuất phục', ['khôi phục', 'phục vụ', 'thuyết phục'], 'gulbokhada.'],
      ['hear', '그 회사는 기술력도 뛰어나거니와 고객 서비스도 훌륭하다.', 'Công ty đó công nghệ đã giỏi lại còn dịch vụ khách hàng tuyệt vời.', ['Công nghệ kém nhưng dịch vụ tốt.', 'Chỉ có công nghệ.', 'Dịch vụ tệ.'], '-거니와.'],
      ['hear', '굶을지언정 원칙과 타협하지는 않겠습니다.', 'Thà nhịn đói chứ không thoả hiệp với nguyên tắc.', ['Sẽ thoả hiệp để có ăn.', 'Không có nguyên tắc.', 'Sẽ nhịn ăn để giảm cân.'], 'Lập trường mạnh.'],
      ['order', 'Sắp xếp: “Lòng tự trọng cao.”', ['자존심이', '강하다', '.'], '자존심이 강하다.']
    ],
    noi: [['값도 싸거니와 품질도 좋습니다.', 'gapdo ssageoniwa pumjildo jotseumnida – Giá đã rẻ lại còn chất lượng tốt.'], ['손해를 볼지언정 고객을 속이지 않겠습니다.', 'sonhaereul boljieonjeong gogaegeul sogiji ankesseumnida – Thà chịu thiệt chứ không lừa khách.'], ['원칙과 타협하지 않습니다.', 'wonchikgwa tahyeophaji anseumnida – Không thoả hiệp với nguyên tắc.']],
    hoithoai: {
      ctx: 'Đối tác gợi ý “lách” quy định để ký hợp đồng nhanh; em giữ nguyên tắc.', vai: 'Đối tác nói, em đáp.', ai: '🤝 거래처 이사',
      luot: [
        T(['서류 몇 개 빼고 빨리 진행하면 안 될까요?', 'seoryu myeot gae ppaego ppalli jinhaenghamyeon an doelkkayo?', 'Bỏ vài giấy tờ cho nhanh được không?'], ['죄송하지만 계약이 늦어질지언정 규정을 어길 수는 없습니다.', 'joesonghajiman gyeyagi neujeojiljieonjeong gyujeongeul eogil suneun eopseumnida', 'Xin lỗi, thà hợp đồng chậm chứ không thể vi phạm quy định.', '-(으)ㄹ지언정.'], ['네, 빼도 돼요.', 'ne, ppaedo dwaeyo', 'Vi phạm quy định.'], ['그런 말 하지 마세요!', 'geureon mal haji maseyo!', 'Thô.']),
        T(['다른 은행은 해 주던데요.', 'dareun eunhaengeun hae judeondeyo', 'Ngân hàng khác làm cho mà.'], ['저희는 절차도 투명하거니와 사후 문제도 책임지기 때문에 원칙을 지킵니다.', 'jeohuineun jeolchado tumyeonghageoniwa sahu munjedo chaegimjigi ttaemune wonchigeul jikimnida', 'Chúng tôi quy trình đã minh bạch lại còn chịu trách nhiệm sau này, nên giữ nguyên tắc.', '-거니와.'], ['그럼 거기 가세요.', 'geureom geogi gaseyo', 'Đuổi khách.'], ['저희도 해 드릴게요.', 'jeohuido hae deurilgeyo', 'Vi phạm.']),
        T(['그럼 최대한 빨리 해 주세요.', 'geureom choedaehan ppalli hae juseyo', 'Vậy làm nhanh nhất có thể nhé.'], ['네, 필요한 서류 목록을 오늘 보내 드리고 접수되는 대로 바로 처리하겠습니다.', 'ne, piryohan seoryu mongnogeul oneul bonae deurigo jeopsudoeneun daero baro cheorihagesseumnida', 'Vâng, hôm nay tôi gửi danh mục giấy tờ, nhận được là xử lý ngay.', 'Giải pháp.'], ['모르겠어요.', 'moreugesseoyo', 'Thiếu.'], ['한 달 걸려요.', 'han dal geollyeoyo', 'Thiếu thiện chí.'])
      ], ket: 'Em đã giữ nguyên tắc mà vẫn hỗ trợ khách.'
    },
    tom: ['-거니와: đã… lại còn', '-(으)ㄹ지언정: thà… chứ không'], nguphap: '-거니와, -(으)ㄹ지언정', phatam: '굶다 [굼따]',
    loi: ['Dùng -(으)ㄹ지언정 với vế sau khẳng định yếu'], btvn: ['Viết 5 câu -거니와', 'Viết 5 câu -(으)ㄹ지언정 về nguyên tắc nghề nghiệp', 'Luyện 🎤 3 câu']
  };

  const d2 = {
    n: 2, ten: plan[1].ten, kinds: K,
    muc: '-는 한 (chừng nào còn…), -기 나름이다 (tuỳ vào…) – nêu điều kiện và thái độ.',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ', 'Nghĩa'], [['-는 한', '제가 이 회사에 있는 한 최선을 다하겠습니다.', 'Chừng nào còn ở công ty, tôi sẽ cố hết sức.'], ['-지 않는 한', '노력하지 않는 한 성공할 수 없다.', 'Chừng nào không nỗ lực thì không thể thành công.'], ['-기 나름이다', '행복은 생각하기 나름이다.', 'Hạnh phúc tuỳ cách nghĩ.']])}`,
    vocab: [
      w('-는 한', '-neun han', 'chừng nào còn', '', ['시간이 허락하는 한', 'sigani heorakhaneun han', 'chừng nào thời gian cho phép']),
      w('나름', 'nareum', 'tuỳ vào', '', ['하기 나름이다.', 'hagi nareumida', 'Tuỳ cách làm.']),
      w('허락하다', 'heorakhada', 'cho phép', '', ['상황이 허락하면', 'sanghwangi heorakhamyeon', 'nếu tình hình cho phép']),
      w('해석하다', 'haeseokhada', 'diễn giải', '', ['다르게 해석했다.', 'dareuge haeseokhaetda', 'Đã diễn giải khác.']),
      w('활용하다', 'hwaryonghada', 'tận dụng', '', ['기회를 활용하다.', 'gihoereul hwaryonghada', 'Tận dụng cơ hội.']),
      w('달려 있다', 'dallyeo itda', 'phụ thuộc vào', '', ['결과는 노력에 달려 있다.', 'gyeolgwaneun noryeoge dallyeo itda', 'Kết quả phụ thuộc nỗ lực.']),
      w('원칙', 'wonchik', 'nguyên tắc', '', ['원칙을 지키다.', 'wonchigeul jikida', 'Giữ nguyên tắc.']),
      w('예외', 'yeoe', 'ngoại lệ', '', ['예외는 없다.', 'yeoeneun eopda', 'Không có ngoại lệ.']),
      w('존재하다', 'jonjaehada', 'tồn tại', '', ['문제가 존재하는 한', 'munjega jonjaehaneun han', 'chừng nào vấn đề còn tồn tại']),
      w('태도', 'taedo', 'thái độ', '', ['태도가 중요하다.', 'taedoga jungyohada', 'Thái độ là quan trọng.'])
    ],
    qs: [
      ['mc', '“Hạnh phúc tuỳ cách nghĩ”?', '행복은 생각하기 나름이다.', ['행복은 생각하는 한이다.', '행복은 생각해서 나름이다.', '행복은 생각하지 않는다.'], '-기 나름이다.'],
      ['mc', '“Chừng nào không có ngoại lệ…”?', '예외가 없는 한', ['예외가 없기 나름', '예외가 없거니와', '예외가 없을지언정'], '-는 한.'],
      ['mc', '활용하다 = ?', 'tận dụng', ['hoạt động', 'sinh hoạt', 'hoà giải'], 'hwaryonghada.'],
      ['hear', '건강이 허락하는 한 계속 일하고 싶습니다.', 'Chừng nào sức khoẻ cho phép tôi muốn tiếp tục làm việc.', ['Tôi muốn nghỉ hưu ngay.', 'Sức khoẻ không quan trọng.', 'Tôi bị cấm làm.'], '-는 한.'],
      ['hear', '같은 자료라도 해석하기 나름이에요.', 'Cùng tư liệu nhưng tuỳ cách diễn giải.', ['Tư liệu luôn giống nhau.', 'Không thể diễn giải.', 'Tư liệu sai.'], '-기 나름.'],
      ['order', 'Sắp xếp: “Kết quả phụ thuộc nỗ lực.”', ['결과는', '노력에', '달려 있다', '.'], '결과는 노력에 달려 있다.']
    ],
    noi: [['제가 할 수 있는 한 도와드리겠습니다.', 'jega hal su inneun han dowadeurigesseumnida – Chừng nào làm được tôi sẽ giúp.'], ['결과는 하기 나름입니다.', 'gyeolgwaneun hagi nareumimnida – Kết quả tuỳ cách làm.'], ['원칙에는 예외가 없습니다.', 'wonchigeneun yeoega eopseumnida – Nguyên tắc không có ngoại lệ.']],
    hoithoai: {
      ctx: 'Nhân viên mới lo lắng vì không biết tiếng Hàn tốt; em động viên.', vai: 'Đồng nghiệp lo, em khuyên.', ai: '😟 신입 사원',
      luot: [
        T(['저는 한국어를 잘 못해서 승진이 어려울 것 같아요.', 'jeoneun hangugeoreul jal motaeseo seungjini eoryeoul geot gatayo', 'Tôi kém tiếng Hàn nên chắc khó thăng tiến.'], ['포기하지 않는 한 기회는 반드시 와요.', 'pogihaji anneun han gihoeneun bandeusi wayo', 'Chừng nào không bỏ cuộc thì cơ hội chắc chắn sẽ đến.', '-지 않는 한.'], ['맞아요, 어려워요.', 'majayo, eoryeowoyo', 'Làm nản.'], ['그만두세요.', 'geumanduseyo', 'Tiêu cực.']),
        T(['그래도 너무 늦은 것 같아요.', 'geuraedo neomu neujeun geot gatayo', 'Nhưng có vẻ muộn quá.'], ['늦었다고 생각할지 기회라고 생각할지는 마음먹기 나름이에요.', 'neujeotdago saenggakhalji gihoerago saenggakhaljineun maeummeokgi nareumieyo', 'Nghĩ là muộn hay là cơ hội thì tuỳ ở quyết tâm.', '-기 나름.'], ['네, 늦었어요.', 'ne, neujeosseoyo', 'Làm nản.'], ['몰라요.', 'mollayo', 'Thờ ơ.']),
        T(['어떻게 시작하면 좋을까요?', 'eotteoke sijakhamyeon joeulkkayo?', 'Bắt đầu thế nào?'], ['회사 교육 프로그램을 활용하고, 제가 시간이 허락하는 한 같이 연습해 줄게요.', 'hoesa gyoyuk peurogeuraemeul hwaryonghago, jega sigani heorakhaneun han gachi yeonseupae julgeyo', 'Tận dụng chương trình đào tạo của công ty, và chừng nào có thời gian tôi sẽ luyện cùng.', 'Kết hợp.'], ['혼자 하세요.', 'honja haseyo', 'Lạnh nhạt.'], ['학원 비싸요.', 'hagwon bissayo', 'Lạc đề.'])
      ], ket: 'Em đã động viên đồng nghiệp bằng cấu trúc cấp 5.'
    },
    tom: ['-는 한 / -지 않는 한', '-기 나름이다'], nguphap: '-는 한, -기 나름이다', phatam: '허락 [허락]',
    loi: ['Nhầm -는 한 với 한 (một)'], btvn: ['Viết 5 câu -는 한', 'Viết 3 câu -기 나름이다', 'Luyện 🎤 3 câu']
  };

  const d3 = {
    n: 3, ten: plan[2].ten, kinds: K,
    muc: '-는 반면(에) (trái lại) để đối chiếu; -는 셈이다 (coi như là) để quy đổi, ước lượng.',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ', 'Nghĩa'], [['-는 반면(에)', '도시는 편리한 반면에 물가가 비싸다.', 'Thành phố tiện lợi, trái lại giá cả đắt.'], ['-는 셈이다', '10명 중 9명이 찬성했으니 거의 다 찬성한 셈이다.', '9/10 tán thành nên coi như gần hết tán thành.'], ['-(으)ㄴ 셈 치다', '공부한 셈 치고 해 보자.', 'Cứ coi như là học, làm thử đi.']])}`,
    vocab: [
      w('반면', 'banmyeon', 'trái lại', '', ['장점이 있는 반면 단점도 있다.', 'jangjeomi inneun banmyeon danjeomdo itda', 'Có ưu điểm, trái lại cũng có nhược điểm.']),
      w('셈', 'sem', 'coi như, tính ra', '', ['거의 끝난 셈이다.', 'geoui kkeunnan semida', 'Coi như gần xong.']),
      w('비율', 'biyul', 'tỷ lệ', '', ['여성 비율이 높다.', 'yeoseong biyuri nopda', 'Tỷ lệ nữ cao.']),
      w('절반', 'jeolban', 'một nửa', '', ['절반 이상', 'jeolban isang', 'hơn một nửa']),
      w('사실상', 'sasilsang', 'trên thực tế', '', ['사실상 불가능하다.', 'sasilsang bulganeunghada', 'Trên thực tế là không thể.']),
      w('장점', 'jangjeom', 'ưu điểm', '', ['큰 장점', 'keun jangjeom', 'ưu điểm lớn']),
      w('단점', 'danjeom', 'nhược điểm', '', ['단점을 보완하다.', 'danjeomeul bowanhada', 'Khắc phục nhược điểm.']),
      w('대조적', 'daejojeok', 'tương phản', '', ['대조적인 결과', 'daejojeogin gyeolgwa', 'kết quả tương phản']),
      w('환산하다', 'hwansanhada', 'quy đổi', '', ['원화로 환산하면', 'wonhwaro hwansanhamyeon', 'quy ra won thì']),
      w('평균', 'pyeonggyun', 'trung bình', '', ['평균 소득', 'pyeonggyun sodeuk', 'thu nhập trung bình'])
    ],
    qs: [
      ['mc', '“Coi như gần xong”?', '거의 끝난 셈이다.', ['거의 끝난 반면이다.', '거의 끝날지언정.', '거의 끝나는 한이다.'], '-(으)ㄴ 셈이다.'],
      ['mc', 'Câu đối chiếu đúng?', '월급은 많은 반면에 일이 힘들다.', ['월급은 많은 반면에 월급이 많다.', '월급이 많은 셈에 일이 힘들다.', '월급은 많거나 반면이다.'], '-는 반면.'],
      ['mc', '사실상 = ?', 'trên thực tế', ['sự thật là', 'chân dung', 'thực tập'], 'sasilsang.'],
      ['hear', '하루에 두 시간씩 공부하니까 일주일에 열네 시간 공부하는 셈이에요.', 'Mỗi ngày học 2 tiếng, tính ra một tuần học 14 tiếng.', ['Một tuần 2 tiếng.', 'Một tuần 20 tiếng.', 'Không học.'], 'Quy đổi.'],
      ['hear', '이 지역은 교통이 편리한 반면에 집값이 매우 비쌉니다.', 'Khu này giao thông tiện, trái lại giá nhà rất đắt.', ['Giao thông kém, nhà rẻ.', 'Vừa tiện vừa rẻ.', 'Không có nhà.'], 'Đối chiếu.'],
      ['order', 'Sắp xếp: “Hơn một nửa đã tán thành.”', ['절반 이상이', '찬성했다', '.'], '절반 이상이 찬성했다.']
    ],
    noi: [['장점이 있는 반면에 단점도 있습니다.', 'jangjeomi inneun banmyeone danjeomdo itseumnida – Có ưu điểm, trái lại cũng có nhược điểm.'], ['사실상 끝난 셈입니다.', 'sasilsang kkeunnan semimnida – Trên thực tế coi như đã xong.'], ['원화로 환산하면 얼마예요?', 'wonhwaro hwansanhamyeon eolmayeyo? – Quy ra won là bao nhiêu?']],
    hoithoai: {
      ctx: 'Em so sánh hai phương án văn phòng (Hà Nội và TP.HCM) cho giám đốc Hàn.', vai: 'Giám đốc hỏi, em phân tích.', ai: '👔 대표님',
      luot: [
        T(['하노이와 호찌민 중 어디가 나아요?', 'Hanoiwa Hojjimin jung eodiga naayo?', 'Hà Nội hay TP.HCM tốt hơn?'], ['하노이는 정부 기관과 가까운 반면에 호찌민은 시장 규모가 더 큽니다.', 'Hanoineun jeongbu gigwangwa gakkaun banmyeone Hojjimineun sijang gyumoga deo keumnida', 'Hà Nội gần cơ quan nhà nước, trái lại TP.HCM có quy mô thị trường lớn hơn.', '-는 반면.'], ['둘 다 좋아요.', 'dul da joayo', 'Thiếu phân tích.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['임대료는요?', 'imdaeryoneunyo?', 'Tiền thuê?'], ['호찌민이 평균 20% 정도 비싸니까 1년이면 사무실 두 달 치를 더 내는 셈입니다.', 'Hojjimini pyeonggyun isip peosenteu jeongdo bissanikka illyeonimyeon samusil du dal chireul deo naeneun semimnida', 'TP.HCM đắt hơn trung bình khoảng 20%, tính ra một năm trả thêm khoảng 2 tháng tiền thuê.', '-는 셈.'], ['비싸요.', 'bissayo', 'Mơ hồ.'], ['같아요.', 'gatayo', 'Sai.']),
        T(['결론은요?', 'gyeolloneunyo?', 'Kết luận?'], ['고객 확보가 목표라면 호찌민이 사실상 더 유리합니다.', 'gogaek hwakboga mokpyoramyeon Hojjimini sasilsang deo yurihamnida', 'Nếu mục tiêu là có khách, TP.HCM trên thực tế có lợi hơn.', 'Kết luận có điều kiện.'], ['대표님이 정하세요.', 'daepyonimi jeonghaseyo', 'Né.'], ['아무 데나요.', 'amu denayo', 'Thiếu.'])
      ], ket: 'Em đã so sánh và quy đổi số liệu thuyết phục.'
    },
    tom: ['-는 반면(에): trái lại', '-는 셈이다: coi như / tính ra'], nguphap: '-는 반면, -는 셈이다', phatam: '절반 [절반], 평균 [평균]',
    loi: ['Dùng -는 반면 khi hai vế không đối lập'], btvn: ['So sánh 2 thành phố bằng 5 câu -는 반면', 'Viết 3 câu quy đổi -는 셈이다', 'Luyện 🎤 3 câu']
  };

  const d4 = {
    n: 4, ten: plan[3].ten, kinds: K,
    muc: '-(으)ㄴ 나머지 (quá… đến nỗi – kết quả tiêu cực), -다시피 (như… đã biết / gần như).',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ', 'Nghĩa'], [['-(으)ㄴ 나머지', '너무 긴장한 나머지 발표를 망쳤다.', 'Quá căng thẳng đến nỗi làm hỏng bài thuyết trình.'], ['-다시피 (biết/thấy)', '보시다시피 매출이 늘었습니다.', 'Như quý vị thấy, doanh thu đã tăng.'], ['-다시피 하다', '회사에서 살다시피 했다.', 'Gần như sống ở công ty.']])}`,
    vocab: [
      w('나머지', 'nameoji', 'đến nỗi (do quá)', '', ['기쁜 나머지 울었다.', 'gippeun nameoji ureotda', 'Mừng quá đến nỗi khóc.']),
      w('-다시피', '-dasipi', 'như… (đã biết); gần như', '', ['아시다시피', 'asidasipi', 'như anh/chị đã biết']),
      w('긴장하다', 'ginjanghada', 'căng thẳng', '', ['면접 때 긴장했다.', 'myeonjeop ttae ginjanghaetda', 'Căng thẳng lúc phỏng vấn.']),
      w('지나치다', 'jinachida', 'quá mức', '', ['지나친 욕심', 'jinachin yoksim', 'tham vọng quá mức']),
      w('흥분하다', 'heungbunhada', 'kích động', '', ['흥분한 나머지 소리를 질렀다.', 'heungbunhan nameoji sorireul jilleotda', 'Kích động đến nỗi hét lên.']),
      w('과로', 'gwaro', 'làm việc quá sức', '', ['과로로 쓰러졌다.', 'gwaroro sseureojyeotda', 'Ngất vì làm quá sức.']),
      w('쓰러지다', 'sseureojida', 'gục ngã', '', ['피곤해서 쓰러졌다.', 'pigonhaeseo sseureojyeotda', 'Mệt quá gục ngã.']),
      w('망치다', 'mangchida', 'làm hỏng', '', ['시험을 망쳤다.', 'siheomeul mangchyeotda', 'Làm hỏng bài thi.']),
      w('욕심', 'yoksim', 'lòng tham, tham vọng', '', ['욕심을 부리다.', 'yoksimeul burida', 'Tham lam.']),
      w('밤새다', 'bamsaeda', 'thức trắng đêm', '', ['밤새다시피 했다.', 'bamsaedasipi haetda', 'Gần như thức trắng.'])
    ],
    qs: [
      ['mc', '“Như quý vị thấy, doanh thu tăng”?', '보시다시피 매출이 늘었습니다.', ['보신 나머지 매출이 늘었습니다.', '보는 반면 매출이 늘었습니다.', '보기 나름 매출이 늘었습니다.'], '-다시피.'],
      ['mc', '-(으)ㄴ 나머지 thường đi với kết quả?', 'tiêu cực / ngoài ý muốn', ['tích cực có kế hoạch', 'mệnh lệnh', 'câu hỏi'], 'Ngữ dụng.'],
      ['mc', '과로 = ?', 'làm việc quá sức', ['quá khứ', 'quá trình', 'qua đường'], 'gwaro.'],
      ['hear', '너무 긴장한 나머지 준비한 말을 다 잊어버렸어요.', 'Quá căng thẳng đến nỗi quên hết lời đã chuẩn bị.', ['Bình tĩnh nói hết.', 'Không chuẩn bị.', 'Nói rất hay.'], '-(으)ㄴ 나머지.'],
      ['hear', '마감 때문에 일주일 동안 회사에서 살다시피 했어요.', 'Vì hạn chót mà cả tuần gần như sống ở công ty.', ['Cả tuần ở nhà.', 'Đi du lịch.', 'Nghỉ phép.'], '-다시피 하다.'],
      ['order', 'Sắp xếp: “Mừng quá đến nỗi khóc.”', ['기쁜', '나머지', '울었다', '.'], '기쁜 나머지 울었다.']
    ],
    noi: [['아시다시피 이번 분기는 어려웠습니다.', 'asidasipi ibeon bungineun eoryeowotseumnida – Như anh chị biết, quý này khó khăn.'], ['긴장한 나머지 실수했어요.', 'ginjanghan nameoji silsuhaesseoyo – Căng thẳng quá nên mắc lỗi.'], ['과로하지 마세요.', 'gwarohaji maseyo – Đừng làm quá sức.']],
    hoithoai: {
      ctx: 'Đồng nghiệp làm việc quá sức đến ngất; em hỏi thăm và khuyên.', vai: 'Đồng nghiệp kể, em đáp.', ai: '🤒 지훈',
      luot: [
        T(['어제 과로한 나머지 회사에서 쓰러졌어요.', 'eoje gwarohan nameoji hoesaeseo sseureojyeosseoyo', 'Hôm qua làm quá sức đến nỗi ngất ở công ty.'], ['많이 놀랐어요. 지금은 좀 괜찮으세요?', 'mani nollasseoyo. jigeumeun jom gwaenchaneuseyo?', 'Tôi rất lo. Giờ đỡ chưa ạ?', 'Quan tâm.'], ['약하네요.', 'yakaneyo', 'Vô duyên.'], ['일 다 했어요?', 'il da haesseoyo?', 'Vô tâm.']),
        T(['네, 그런데 요즘 회사에서 살다시피 했어요.', 'ne, geureonde yojeum hoesaeseo saldasipi haesseoyo', 'Vâng, nhưng dạo này gần như sống ở công ty.'], ['지나친 욕심은 건강을 망칠 수 있어요. 일을 좀 나눠요.', 'jinachin yoksimeun geongangeul mangchil su isseoyo. ireul jom nanwoyo', 'Tham vọng quá mức có thể hại sức khoẻ. Chia bớt việc đi.', 'Khuyên.'], ['더 열심히 하세요.', 'deo yeolsimhi haseyo', 'Nguy hiểm.'], ['잘했어요.', 'jalhaesseoyo', 'Khuyến khích sai.']),
        T(['팀장님께 말하기가 좀 어려워요.', 'timjangnimkke malhagiga jom eoryeowoyo', 'Khó nói với trưởng nhóm.'], ['아시다시피 건강이 제일 중요하니까 제가 같이 말씀드려 볼게요.', 'asidasipi geongangi jeil jungyohanikka jega gachi malsseumdeuryeo bolgeyo', 'Như anh biết, sức khoẻ là quan trọng nhất, tôi sẽ cùng nói với trưởng nhóm.', 'Hỗ trợ.'], ['참으세요.', 'chameuseyo', 'Gạt đi.'], ['그만두세요.', 'geumanduseyo', 'Cực đoan.'])
      ], ket: 'Em đã quan tâm và khuyên đồng nghiệp hợp lý.'
    },
    tom: ['-(으)ㄴ 나머지: quá… đến nỗi', '-다시피: như đã… / gần như'], nguphap: '-(으)ㄴ 나머지, -다시피', phatam: '쓰러지다 [쓰러지다]',
    loi: ['Dùng 나머지 với kết quả có chủ đích'], btvn: ['Viết 5 câu -(으)ㄴ 나머지', 'Dùng 보시다시피 mở đầu 1 báo cáo', 'Luyện 🎤 3 câu']
  };

  const d5 = {
    n: 5, ten: plan[4].ten, kinds: K,
    muc: 'Văn phong báo chí: -에 의하면, -것으로 알려지다/나타나다, -(으)ㄹ 전망이다, -(으)ㄴ바 (văn công văn).',
    hoc: `${tbl(['Mẫu', 'Ví dụ', 'Nghĩa'], [['-에 의하면', '통계청에 의하면 …', 'Theo Cục Thống kê…'], ['-(으)ㄴ 것으로 알려졌다', '사고 원인은 과속인 것으로 알려졌다.', 'Được biết nguyên nhân là chạy quá tốc độ.'], ['-(으)ㄹ 전망이다', '수출이 증가할 전망이다.', 'Xuất khẩu dự kiến tăng.'], ['-(으)ㄴ바', '검토한바 문제가 없었다.', 'Sau khi xem xét thì không có vấn đề.']])}`,
    vocab: [
      w('의하면', 'uihamyeon', 'theo (nguồn)', '', ['보고서에 의하면', 'bogoseoe uihamyeon', 'theo báo cáo']),
      w('알려지다', 'allyeojida', 'được biết, được công bố', '', ['원인이 알려졌다.', 'wonini allyeojyeotda', 'Nguyên nhân đã được biết.']),
      w('-(으)ㄹ 전망이다', '-(eu)l jeonmangida', 'dự kiến sẽ', '', ['회복될 전망이다.', 'hoebokdoel jeonmangida', 'Dự kiến sẽ phục hồi.']),
      w('-(으)ㄴ바', '-(eu)nba', 'sau khi… thì (công văn)', '', ['조사한바', 'josahanba', 'sau khi điều tra thì']),
      w('관계자', 'gwangyeja', 'người có liên quan, quan chức', '', ['회사 관계자', 'hoesa gwangyeja', 'người phía công ty']),
      w('당국', 'dangguk', 'nhà chức trách', '', ['금융 당국', 'geumyung dangguk', 'cơ quan quản lý tài chính']),
      w('집계', 'jipgye', 'thống kê, tổng hợp số liệu', '', ['잠정 집계', 'jamjeong jipgye', 'số liệu tạm tính']),
      w('잠정', 'jamjeong', 'tạm thời', '', ['잠정 결정', 'jamjeong gyeoljeong', 'quyết định tạm thời']),
      w('밝히다', 'balkida', 'làm rõ, cho biết', '', ['입장을 밝혔다.', 'ipjangeul balkyeotda', 'Đã nêu rõ lập trường.']),
      w('통계청', 'tonggyecheong', 'Cục Thống kê', '', ['통계청 발표', 'tonggyecheong balpyo', 'Cục Thống kê công bố'])
    ],
    qs: [
      ['mc', '“Theo Cục Thống kê”?', '통계청에 의하면', ['통계청이 나머지', '통계청 반면', '통계청 나름'], '-에 의하면.'],
      ['mc', '“Xuất khẩu dự kiến tăng”?', '수출이 증가할 전망이다.', ['수출이 증가한 전망이다.', '수출이 증가할 나머지다.', '수출이 증가하기 나름이다.'], '-(으)ㄹ 전망이다.'],
      ['mc', '당국 = ?', 'nhà chức trách', ['đảng phái', 'đương nhiên', 'quốc gia'], 'dangguk.'],
      ['hear', '금융 당국 관계자에 의하면 대출 규제가 완화될 전망입니다.', 'Theo quan chức cơ quan quản lý tài chính, quy định cho vay dự kiến được nới lỏng.', ['Quy định sẽ siết chặt.', 'Không có quy định.', 'Ngân hàng đóng cửa.'], 'Văn tin tức.'],
      ['hear', '사고 원인은 기계 결함인 것으로 알려졌습니다.', 'Được biết nguyên nhân tai nạn là lỗi máy móc.', ['Do con người.', 'Chưa rõ.', 'Do thời tiết.'], '-것으로 알려지다.'],
      ['order', 'Sắp xếp: “Đã nêu rõ lập trường.”', ['입장을', '밝혔다', '.'], '입장을 밝혔다.']
    ],
    noi: [['보도에 의하면 …', 'bodoe uihamyeon … – Theo đưa tin…'], ['… 것으로 알려졌습니다.', '… geoseuro allyeojyeotseumnida – Được biết là…'], ['경기가 회복될 전망입니다.', 'gyeonggiga hoebokdoel jeonmangimnida – Kinh tế dự kiến phục hồi.']],
    hoithoai: {
      ctx: 'Em đóng vai biên tập viên, chuyển tin khẩu ngữ thành văn báo chí.', vai: 'Trưởng ban hỏi, em sửa.', ai: '📰 편집장',
      luot: [
        T(['"통계청이 그러는데 실업률이 떨어졌대요"를 기사체로 바꾸면?', '"tonggyecheongi geureoneunde sireomnyuri tteoreojyeotdaeyo"reul gisachero bakkumyeon?', 'Đổi câu khẩu ngữ này sang văn báo?'], ['통계청에 의하면 실업률이 하락한 것으로 나타났다.', 'tonggyecheonge uihamyeon sireomnyuri harakan geoseuro natanatda', 'Theo Cục Thống kê, tỷ lệ thất nghiệp cho thấy đã giảm.', 'Văn báo.'], ['통계청이 실업률 떨어졌어요.', 'tonggyecheongi sireomnyul tteoreojyeosseoyo', 'Sai ngữ pháp.'], ['실업률 몰라요.', 'sireomnyul mollayo', 'Sai.']),
        T(['"내년에는 수출이 늘 것 같아요"는요?', '"naenyeoneneun suchuri neul geot gatayo"neunyo?', 'Còn câu "năm sau chắc xuất khẩu tăng"?'], ['내년에는 수출이 증가할 전망이다.', 'naenyeoneneun suchuri jeunggahal jeonmangida', 'Năm sau xuất khẩu dự kiến tăng.', '-(으)ㄹ 전망이다.'], ['수출이 늘어요.', 'suchuri neureoyo', 'Khẩu ngữ.'], ['수출이 늘 셈이다.', 'suchuri neul semida', 'Sai nghĩa.']),
        T(['출처가 회사 직원이면요?', 'chulcheoga hoesa jigwonimyeonyo?', 'Nếu nguồn là nhân viên công ty?'], ['회사 관계자는 "…"라고 밝혔다.', 'hoesa gwangyejaneun "…" rago balkyeotda', 'Người phía công ty cho biết "…".', '관계자 + 밝히다.'], ['직원이 말했어요.', 'jigwoni malhaesseoyo', 'Khẩu ngữ.'], ['누가 그랬대요.', 'nuga geuraetdaeyo', 'Mơ hồ.'])
      ], ket: 'Em đã chuyển sang văn phong báo chí chuẩn.'
    },
    tom: ['-에 의하면 / -것으로 알려지다 / -(으)ㄹ 전망이다', '관계자 / 당국 / 밝히다'], nguphap: 'Văn phong báo chí', phatam: '당국 [당국], 밝히다 [발키다]',
    loi: ['Trộn khẩu ngữ vào văn báo'], btvn: ['Đổi 5 câu khẩu ngữ sang văn báo', 'Đọc 1 tin Yonhap, gạch chân mẫu', 'Luyện 🎤 3 câu']
  };

  const d6 = {
    n: 6, ten: plan[5].ten, kinds: K,
    muc: 'Ngữ pháp văn viết học thuật: -고자 (nhằm), -에 있어서 (trong việc…), -(으)며 (và – văn viết), đuôi -다 / -(으)ㄴ다.',
    hoc: `${tbl(['Mẫu', 'Ví dụ'], [['-고자 한다', '본고에서는 … 을/를 고찰하고자 한다.'], ['-에 있어서', '외국어 학습에 있어서 동기는 중요하다.'], ['-(으)며', '이 방법은 간단하며 효과적이다.'], ['기존 연구', '기존 연구에서는 … 에 주목하였다.']])}
      ${tip('🔑 Luận văn: dùng 본고/본 연구 (bài này), tránh 저는/제가.')}`,
    vocab: [
      w('본고', 'bongo', 'bài viết này (học thuật)', '', ['본고에서는', 'bongoeseoneun', 'trong bài này']),
      w('고찰하다', 'gochalhada', 'khảo sát, xem xét', '', ['원인을 고찰한다.', 'wonineul gochalhanda', 'Xem xét nguyên nhân.']),
      w('규명하다', 'gyumyeonghada', 'làm sáng tỏ', '', ['원리를 규명하다.', 'wollireul gyumyeonghada', 'Làm sáng tỏ nguyên lý.']),
      w('-에 있어서', '-e isseoseo', 'trong việc', '', ['교육에 있어서', 'gyoyuge isseoseo', 'trong giáo dục']),
      w('기존', 'gijon', 'hiện có, trước đây', '', ['기존 연구', 'gijon yeongu', 'nghiên cứu trước']),
      w('선행 연구', 'seonhaeng yeongu', 'nghiên cứu đi trước', '', ['선행 연구를 검토하다.', 'seonhaeng yeongureul geomtohada', 'Điểm lại nghiên cứu trước.']),
      w('한계', 'hangye', 'giới hạn, hạn chế', '', ['연구의 한계', 'yeonguui hangye', 'hạn chế của nghiên cứu']),
      w('의의', 'uiui', 'ý nghĩa', '', ['연구의 의의', 'yeonguui uiui', 'ý nghĩa nghiên cứu']),
      w('주목하다', 'jumokhada', 'chú ý, tập trung vào', '', ['변화에 주목했다.', 'byeonhwae jumokhaetda', 'Đã chú ý đến thay đổi.']),
      w('논하다', 'nonhada', 'bàn luận', '', ['문제점을 논한다.', 'munjejeomeul nonhanda', 'Bàn luận vấn đề.'])
    ],
    qs: [
      ['mc', 'Câu mở luận văn chuẩn?', '본고에서는 외국인 근로자의 적응 문제를 고찰하고자 한다.', ['저는 외국인 근로자 얘기를 할 거예요.', '외국인 근로자 문제 있어요.', '제가 고찰해요.'], '본고 + -고자.'],
      ['mc', '-(으)며 dùng trong?', 'văn viết, nối 2 tính chất', ['khẩu ngữ thân mật', 'câu hỏi', 'mệnh lệnh'], 'Văn phong.'],
      ['mc', '한계 = ?', 'hạn chế, giới hạn', ['hạn ngạch', 'kế hoạch', 'hàn lâm'], 'hangye.'],
      ['hear', '외국어 학습에 있어서 가장 중요한 요인은 동기이다.', 'Trong việc học ngoại ngữ, yếu tố quan trọng nhất là động lực.', ['Quan trọng nhất là tiền.', 'Không có yếu tố.', 'Quan trọng nhất là tuổi.'], '-에 있어서.'],
      ['hear', '본 연구는 표본이 작다는 한계가 있으며 후속 연구가 필요하다.', 'Nghiên cứu này có hạn chế là mẫu nhỏ và cần nghiên cứu tiếp.', ['Mẫu rất lớn.', 'Không có hạn chế.', 'Không cần nghiên cứu thêm.'], '-(으)며.'],
      ['order', 'Sắp xếp: “Xem xét nguyên nhân.”', ['원인을', '고찰한다', '.'], '원인을 고찰한다.']
    ],
    noi: [['본고에서는 … 을 고찰하고자 한다.', 'bongoeseoneun … eul gochalhagoja handa – Bài này nhằm xem xét…'], ['기존 연구에서는 … 에 주목하였다.', 'gijon yeongueseoneun … e jumokhayeotda – Nghiên cứu trước chú ý đến…'], ['본 연구의 한계는 …', 'bon yeonguui hangyeneun … – Hạn chế của nghiên cứu này là…']],
    hoithoai: {
      ctx: 'Giáo sư hướng dẫn góp ý đề cương luận văn của em.', vai: 'Giáo sư hỏi, em trả lời.', ai: '🎓 지도 교수님',
      luot: [
        T(['연구 목적을 한 문장으로 말해 보세요.', 'yeongu mokjeogeul han munjangeuro malhae boseyo', 'Nói mục đích nghiên cứu trong một câu.'], ['본 연구는 베트남인 학습자의 한국어 존댓말 사용 양상을 규명하고자 합니다.', 'bon yeonguneun Beteunamin hakseupjaui hangugeo jondaenmal sayong yangsangeul gyumyeonghagoja hamnida', 'Nghiên cứu nhằm làm sáng tỏ cách dùng kính ngữ của người học Việt.', '-고자.'], ['존댓말이요.', 'jondaenmariyo', 'Sơ sài.'], ['재미있어서요.', 'jaemiisseoseoyo', 'Không học thuật.']),
        T(['선행 연구와 다른 점은요?', 'seonhaeng yeonguwa dareun jeomeunyo?', 'Khác nghiên cứu trước ở đâu?'], ['기존 연구는 문법 오류에 주목한 반면, 본 연구는 실제 대화 맥락을 분석합니다.', 'gijon yeonguneun munbeop oryue jumokhan banmyeon, bon yeonguneun silje daehwa maengnageul bunseokhamnida', 'Nghiên cứu trước chú ý lỗi ngữ pháp, trái lại nghiên cứu này phân tích ngữ cảnh hội thoại thực.', 'Đối chiếu.'], ['다 같아요.', 'da gatayo', 'Không có đóng góp.'], ['안 읽었어요.', 'an ilgeosseoyo', 'Thiếu.']),
        T(['한계는 뭐예요?', 'hangyeneun mwoyeyo?', 'Hạn chế là gì?'], ['표본이 30명으로 적다는 한계가 있으며, 후속 연구에서 보완하고자 합니다.', 'pyoboni samsimmyeongeuro jeokdaneun hangyega isseumyeo, husok yeongueseo bowanhagoja hamnida', 'Mẫu chỉ 30 người, sẽ bổ sung ở nghiên cứu sau.', '-(으)며.'], ['한계 없어요.', 'hangye eopseoyo', 'Thiếu trung thực.'], ['몰라요.', 'mollayo', 'Thiếu.'])
      ], ket: 'Em đã trình bày đề cương bằng văn phong học thuật.'
    },
    tom: ['본고 / -고자 하다 / -에 있어서 / -(으)며', '선행 연구 / 한계 / 의의'], nguphap: 'Văn phong học thuật', phatam: '의의 [의이]',
    loi: ['Dùng 저는 trong luận văn'], btvn: ['Viết đoạn mở luận văn 5 câu', 'Viết 3 câu nêu hạn chế', 'Luyện 🎤 3 câu']
  };

  const d7 = {
    n: 7, ten: plan[6].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Ôn tập tuần 1: -거니와, -(으)ㄹ지언정, -는 한, -기 나름, -는 반면, -는 셈, -(으)ㄴ 나머지, -다시피, văn báo chí và học thuật.',
    hoc: `<h4>Bảng tổng hợp</h4>${tbl(['Cấu trúc', 'Ý'], [['-거니와', 'đã… lại còn'], ['-(으)ㄹ지언정', 'thà… chứ không'], ['-는 한', 'chừng nào còn'], ['-기 나름이다', 'tuỳ vào'], ['-는 반면', 'trái lại'], ['-는 셈이다', 'coi như'], ['-(으)ㄴ 나머지', 'quá… đến nỗi'], ['-다시피', 'như đã… / gần như'], ['-에 의하면 / -(으)ㄹ 전망이다', 'văn báo'], ['-고자 / -에 있어서', 'văn học thuật']])}`,
    qs: [['mc', '“Thà chịu thiệt chứ không lừa khách”?', '손해를 볼지언정 고객을 속이지 않겠다.', ['손해를 본 나머지 고객을 속였다.', '손해를 보는 한 고객을 속인다.', '손해를 보거니와 고객을 속인다.'], '-(으)ㄹ지언정.'], ['mc', '“Như quý vị thấy”?', '보시다시피', ['보신 나머지', '보는 한', '보기 나름'], '-다시피.']],
    noi: [['보시다시피 매출이 늘었습니다.', 'bosidasipi maechuri neureotseumnida – Như quý vị thấy, doanh thu đã tăng.'], ['포기하지 않는 한 기회는 옵니다.', 'pogihaji anneun han gihoeneun omnida – Chừng nào không bỏ cuộc thì cơ hội sẽ đến.']],
    hoithoai: {
      ctx: 'Mô phỏng họp báo cáo quý với ban giám đốc.', vai: 'Giám đốc hỏi, em báo cáo.', ai: '👔 전무님',
      luot: [
        T(['이번 분기 결과는?', 'ibeon bungi gyeolgwaneun?', 'Kết quả quý này?'], ['보시다시피 매출은 늘어난 반면에 이익률은 다소 떨어졌습니다.', 'bosidasipi maechureun neureonan banmyeone iingnyureun daso tteoreojyeotseumnida', 'Như anh thấy, doanh thu tăng, trái lại tỷ suất lợi nhuận giảm đôi chút.', 'Hai cấu trúc.'], ['좋아요.', 'joayo', 'Mơ hồ.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['왜 그렇죠?', 'wae geureochyo?', 'Sao vậy?'], ['고객 확보를 서두른 나머지 할인을 지나치게 했습니다.', 'gogaek hwakboreul seodureun nameoji harineul jinachige haetseumnida', 'Vội giành khách đến nỗi giảm giá quá tay.', '-(으)ㄴ 나머지.'], ['고객 탓이에요.', 'gogaek tasieyo', 'Đổ lỗi.'], ['원래 그래요.', 'wollae geuraeyo', 'Né.']),
        T(['다음 분기 전망은?', 'daeum bungi jeonmangeun?', 'Triển vọng quý sau?'], ['할인 정책을 조정하는 한 이익률이 회복될 전망입니다.', 'harin jeongchaegeul jojeonghaneun han iingnyuri hoebokdoel jeonmangimnida', 'Chừng nào điều chỉnh chính sách giảm giá, lợi nhuận dự kiến phục hồi.', '-는 한 + 전망.'], ['잘 될 거예요.', 'jal doel geoyeyo', 'Mơ hồ.'], ['모르겠어요.', 'moreugesseoyo', 'Thiếu.'])
      ], ket: 'Em đã báo cáo bằng cấu trúc cấp 5 lưu loát.'
    },
    tom: ['Ôn tuần 1', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn', phatam: 'Ôn ngữ điệu báo cáo',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: học lại ngày yếu', 'Làm ⚡ Luyện nhanh', 'Viết 1 đoạn báo cáo 150 chữ dùng 4 cấu trúc']
  };

  const d8 = {
    n: 8, ten: plan[7].ten, kinds: K,
    muc: 'Thành ngữ 4 chữ (사자성어) thông dụng – phần 1: hiểu nghĩa Hán Việt, dùng đúng ngữ cảnh.',
    hoc: `${tbl(['사자성어', 'Hán Việt', 'Nghĩa'], [['일석이조', 'nhất thạch nhị điểu', 'một mũi tên trúng hai đích'], ['대기만성', 'đại khí vãn thành', 'người tài thành đạt muộn'], ['자업자득', 'tự nghiệp tự đắc', 'gieo gió gặt bão'], ['유비무환', 'hữu bị vô hoạn', 'có chuẩn bị thì không lo'], ['작심삼일', 'tác tâm tam nhật', 'quyết tâm ba ngày'], ['과유불급', 'quá do bất cập', 'quá cũng như không đủ']])}
      ${tip('💡 Người Việt có lợi thế: đọc âm Hán Việt là đoán được nghĩa.')}`,
    vocab: [
      w('일석이조', 'ilseogijo', 'một công đôi việc', '', ['운동도 하고 출근도 하니 일석이조다.', 'undongdo hago chulgeundo hani ilseogijoda', 'Vừa tập thể dục vừa đi làm, một công đôi việc.']),
      w('대기만성', 'daegimanseong', 'tài lớn thành muộn', '', ['그는 대기만성형이다.', 'geuneun daegimanseonghyeongida', 'Anh ấy thuộc kiểu thành đạt muộn.']),
      w('자업자득', 'jaeopjadeuk', 'tự làm tự chịu', '', ['게으름은 자업자득이다.', 'geeureumeun jaeopjadeugida', 'Lười là tự làm tự chịu.']),
      w('유비무환', 'yubimuhwan', 'có chuẩn bị thì không lo', '', ['유비무환의 자세', 'yubimuhwanui jase', 'tinh thần phòng bị']),
      w('작심삼일', 'jaksimsamil', 'quyết tâm ba ngày', '', ['다이어트가 작심삼일로 끝났다.', 'daieoteuga jaksimsamillo kkeunnatda', 'Ăn kiêng chỉ được ba ngày.']),
      w('과유불급', 'gwayubulgeup', 'quá cũng như thiếu', '', ['운동도 과유불급이다.', 'undongdo gwayubulgeubida', 'Tập thể dục cũng không nên quá.']),
      w('동문서답', 'dongmunseodap', 'hỏi một đằng trả lời một nẻo', '', ['동문서답하지 마세요.', 'dongmunseodapaji maseyo', 'Đừng trả lời lạc đề.']),
      w('십중팔구', 'sipjungpalgu', 'mười phần thì tám chín', '', ['십중팔구 비가 올 거예요.', 'sipjungpalgu biga ol geoyeyo', 'Mười phần tám chín trời sẽ mưa.']),
      w('이심전심', 'isimjeonsim', 'tâm đầu ý hợp', '', ['우리는 이심전심이다.', 'urineun isimjeonsimida', 'Chúng tôi tâm đầu ý hợp.']),
      w('우왕좌왕', 'uwangjwawang', 'lúng túng, rối loạn', '', ['사람들이 우왕좌왕했다.', 'saramdeuri uwangjwawanghaetda', 'Mọi người rối loạn.'])
    ],
    qs: [
      ['mc', 'Quyết tâm học nhưng bỏ sau 3 ngày?', '작심삼일', ['대기만성', '유비무환', '일석이조'], 'jaksimsamil.'],
      ['mc', 'Chuẩn bị bảo hiểm trước khi đi du lịch là tinh thần?', '유비무환', ['과유불급', '동문서답', '우왕좌왕'], 'Phòng bị.'],
      ['mc', 'Hỏi thời tiết, trả lời về món ăn?', '동문서답', ['이심전심', '십중팔구', '자업자득'], 'Lạc đề.'],
      ['hear', '자전거로 출근하면 운동도 되고 교통비도 아끼니까 일석이조예요.', 'Đạp xe đi làm vừa tập thể dục vừa tiết kiệm tiền đi lại, một công đôi việc.', ['Tốn tiền.', 'Rất nguy hiểm.', 'Không có lợi.'], '일석이조.'],
      ['hear', '화재 대피 훈련을 미리 하지 않아서 사람들이 우왕좌왕했어요.', 'Không tập thoát hiểm trước nên mọi người rối loạn.', ['Mọi người bình tĩnh.', 'Không có cháy.', 'Đã tập kỹ.'], '우왕좌왕.'],
      ['order', 'Sắp xếp: “Tập thể dục cũng không nên quá.”', ['운동도', '과유불급이다', '.'], '운동도 과유불급이다.']
    ],
    noi: [['이건 일석이조네요.', 'igeon ilseogijoneyo – Cái này một công đôi việc.'], ['유비무환이라고 미리 준비합시다.', 'yubimuhwanirago miri junbihapsida – Có chuẩn bị thì không lo, chuẩn bị trước đi.'], ['작심삼일이 되지 않게 노력할게요.', 'jaksimsamiri doeji anke noryeokhalgeyo – Tôi sẽ cố để không chỉ quyết tâm ba ngày.']],
    hoithoai: {
      ctx: 'Họp chuẩn bị phương án dự phòng sự cố hệ thống ngân hàng.', vai: 'Trưởng phòng hỏi, em đề xuất.', ai: '👨‍💼 IT 팀장',
      luot: [
        T(['서버 백업 계획이 꼭 필요해요?', 'seobeo baegeop gyehoegi kkok piryohaeyo?', 'Kế hoạch backup server có thật cần?'], ['유비무환이라고, 장애가 나기 전에 준비해야 피해를 줄일 수 있습니다.', 'yubimuhwanirago, jangaega nagi jeone junbihaeya pihaereul juril su itseumnida', 'Có chuẩn bị thì không lo, phải chuẩn bị trước sự cố mới giảm thiệt hại.', '유비무환.'], ['필요 없어요.', 'piryo eopseoyo', 'Rủi ro.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['작년엔 장애 때 다들 우왕좌왕했죠.', 'jangnyeonen jangae ttae dadeul uwangjwawanghaetjyo', 'Năm ngoái lúc sự cố ai cũng rối loạn.'], ['네, 그래서 이번에는 매뉴얼과 훈련을 같이 하면 일석이조일 것 같습니다.', 'ne, geuraeseo ibeoneneun maenyueolgwa hullyeoneul gachi hamyeon ilseogijoil geot gatseumnida', 'Vâng, nên lần này làm cả quy trình lẫn diễn tập thì một công đôi việc.', '일석이조.'], ['그 사람들 탓이에요.', 'geu saramdeul tasieyo', 'Đổ lỗi.'], ['또 그러겠죠.', 'tto geureogetjyo', 'Bi quan.']),
        T(['훈련은 얼마나 자주요?', 'hullyeoneun eolmana jajuyo?', 'Diễn tập bao lâu một lần?'], ['너무 잦으면 업무에 부담이 되니 과유불급이라고, 분기마다 한 번이 적당합니다.', 'neomu jajeumyeon eommue budami doeni gwayubulgeubirago, bungimada han beoni jeokdanghamnida', 'Quá thường xuyên thì gánh nặng công việc, quá cũng như thiếu, mỗi quý một lần là vừa.', '과유불급.'], ['매일요.', 'maeillyo', 'Quá mức.'], ['안 해도 돼요.', 'an haedo dwaeyo', 'Thiếu.'])
      ], ket: 'Em đã dùng thành ngữ 4 chữ tự nhiên trong họp.'
    },
    tom: ['일석이조 / 대기만성 / 자업자득 / 유비무환 / 작심삼일 / 과유불급 / 동문서답 / 십중팔구 / 이심전심 / 우왕좌왕'], nguphap: 'Thành ngữ 4 chữ', phatam: '일석이조 [일써기조]',
    loi: ['Dùng thành ngữ sai sắc thái'], btvn: ['Đặt câu cho 10 thành ngữ', 'So sánh với thành ngữ Hán Việt tương ứng', 'Luyện 🎤 3 câu']
  };

  const d9 = {
    n: 9, ten: plan[8].ten, kinds: K,
    muc: 'Thành ngữ 4 chữ – phần 2: các thành ngữ về nghịch cảnh, nhân quả, đồng cảm, tiến bộ.',
    hoc: `${tbl(['사자성어', 'Hán Việt', 'Nghĩa'], [['고진감래', 'khổ tận cam lai', 'hết khổ đến sướng'], ['설상가상', 'tuyết thượng gia sương', 'hoạ vô đơn chí'], ['금상첨화', 'cẩm thượng thiêm hoa', 'gấm thêm hoa'], ['역지사지', 'dịch địa tư chi', 'đặt mình vào vị trí người khác'], ['전화위복', 'chuyển hoạ vi phúc', 'trong cái rủi có cái may'], ['새옹지마', 'tái ông thất mã', 'tái ông mất ngựa']])}`,
    vocab: [
      w('고진감래', 'gojingamnae', 'khổ tận cam lai', '', ['고진감래라더니 드디어 합격했다.', 'gojingamnaeradeoni deudieo hapgyeokhaetda', 'Đúng là khổ tận cam lai, cuối cùng đã đỗ.']),
      w('설상가상', 'seolsanggasang', 'hoạ vô đơn chí', '', ['설상가상으로 비까지 왔다.', 'seolsanggasangeuro bikkaji watda', 'Hoạ vô đơn chí, lại còn mưa.']),
      w('금상첨화', 'geumsangcheomhwa', 'gấm thêm hoa', '', ['경치도 좋은데 음식까지 맛있으니 금상첨화다.', 'gyeongchido joeunde eumsikkkaji masisseuni geumsangcheomhwada', 'Cảnh đã đẹp, món ăn lại ngon, gấm thêm hoa.']),
      w('역지사지', 'yeokjisaji', 'đặt mình vào vị trí người khác', '', ['역지사지로 생각해 보세요.', 'yeokjisajiro saenggakhae boseyo', 'Hãy thử đặt mình vào vị trí người khác.']),
      w('전화위복', 'jeonhwawibok', 'trong rủi có may', '', ['실패가 전화위복이 되었다.', 'silpaega jeonhwawiboki doeeotda', 'Thất bại hoá thành may.']),
      w('새옹지마', 'saeongjima', 'tái ông mất ngựa', '', ['인생은 새옹지마다.', 'insaengeun saeongjimada', 'Đời là tái ông mất ngựa.']),
      w('온고지신', 'ongojisin', 'ôn cố tri tân', '', ['온고지신의 지혜', 'ongojisinui jihye', 'trí tuệ ôn cố tri tân']),
      w('일취월장', 'ilchwiwoljang', 'tiến bộ từng ngày', '', ['실력이 일취월장했다.', 'sillyeogi ilchwiwoljanghaetda', 'Trình độ tiến bộ vượt bậc.']),
      w('사필귀정', 'sapilgwijeong', 'sự tất quy chính', '', ['결국 사필귀정이다.', 'gyeolguk sapilgwijeongida', 'Rốt cuộc lẽ phải thắng.']),
      w('인과응보', 'ingwaeungbo', 'nhân quả báo ứng', '', ['인과응보라는 말이 있다.', 'ingwaeungboraneun mari itda', 'Có câu nhân quả báo ứng.'])
    ],
    qs: [
      ['mc', 'Mất việc nhưng nhờ đó mở công ty thành công?', '전화위복', ['설상가상', '작심삼일', '동문서답'], 'Rủi hoá may.'],
      ['mc', 'Xe hỏng, lại còn bị mưa?', '설상가상', ['금상첨화', '고진감래', '온고지신'], 'Hoạ chồng hoạ.'],
      ['mc', 'Tiến bộ từng ngày?', '일취월장', ['새옹지마', '인과응보', '역지사지'], 'ilchwiwoljang.'],
      ['hear', '고객 입장에서 역지사지로 생각하면 답이 보일 거예요.', 'Đặt mình vào vị trí khách hàng thì sẽ thấy câu trả lời.', ['Hãy nghĩ cho mình.', 'Khách luôn sai.', 'Không có câu trả lời.'], '역지사지.'],
      ['hear', '3년 동안 고생했는데 드디어 승진했으니 고진감래네요.', 'Vất vả 3 năm cuối cùng thăng chức, khổ tận cam lai.', ['Bị sa thải.', 'Vừa vào làm.', 'Không vất vả.'], '고진감래.'],
      ['order', 'Sắp xếp: “Đời là tái ông mất ngựa.”', ['인생은', '새옹지마다', '.'], '인생은 새옹지마다.']
    ],
    noi: [['고진감래라고 조금만 더 힘내세요.', 'gojingamnaerago jogeumman deo himnaeseyo – Khổ tận cam lai, cố thêm chút nữa.'], ['역지사지로 생각해 봅시다.', 'yeokjisajiro saenggakhae bopsida – Hãy đặt mình vào vị trí người khác.'], ['이번 일이 전화위복이 될 거예요.', 'ibeon iri jeonhwawiboki doel geoyeyo – Chuyện này sẽ hoá rủi thành may.']],
    hoithoai: {
      ctx: 'Bạn Hàn trượt TOPIK, buồn; em an ủi.', vai: 'Bạn buồn, em động viên.', ai: '😞 수아',
      luot: [
        T(['시험에 떨어졌는데 설상가상으로 아르바이트도 잘렸어요.', 'siheome tteoreojyeonneunde seolsanggasangeuro areubaiteudo jallyeosseoyo', 'Trượt thi, hoạ vô đơn chí lại bị cho nghỉ làm thêm.'], ['정말 속상하겠어요. 그래도 인생은 새옹지마라고 하잖아요.', 'jeongmal soksanghagesseoyo. geuraedo insaengeun saeongjimarago hajanayo', 'Chắc buồn lắm. Nhưng người ta bảo đời là tái ông mất ngựa mà.', 'Đồng cảm + thành ngữ.'], ['자업자득이에요.', 'jaeopjadeugieyo', 'Tàn nhẫn.'], ['그럴 줄 알았어요.', 'geureol jul arasseoyo', 'Phũ.']),
        T(['다시 할 자신이 없어요.', 'dasi hal jasini eopseoyo', 'Không tự tin thi lại.'], ['지난 석 달 동안 실력이 일취월장했잖아요. 다음엔 꼭 될 거예요.', 'jinan seok dal dongan sillyeogi ilchwiwoljanghaetjanayo. daeumen kkok doel geoyeyo', '3 tháng qua bạn tiến bộ vượt bậc mà. Lần sau chắc chắn được.', 'Động viên cụ thể.'], ['포기하세요.', 'pogihaseyo', 'Tiêu cực.'], ['어려울 거예요.', 'eoryeoul geoyeyo', 'Làm nản.']),
        T(['고마워요. 다시 해 볼게요.', 'gomawoyo. dasi hae bolgeyo', 'Cảm ơn. Tôi sẽ thử lại.'], ['좋아요! 고진감래라고, 이번 경험이 전화위복이 될 거예요.', 'joayo! gojingamnaerago, ibeon gyeongheomi jeonhwawiboki doel geoyeyo', 'Tốt! Khổ tận cam lai, lần này sẽ hoá rủi thành may.', 'Kết hợp.'], ['그러든지요.', 'geureodeunjiyo', 'Thờ ơ.'], ['네.', 'ne', 'Cụt.'])
      ], ket: 'Em đã an ủi bạn tinh tế bằng thành ngữ.'
    },
    tom: ['고진감래 / 설상가상 / 금상첨화 / 역지사지 / 전화위복 / 새옹지마 / 온고지신 / 일취월장 / 사필귀정 / 인과응보'], nguphap: 'Thành ngữ 4 chữ', phatam: '고진감래 [고진감내]',
    loi: ['Dùng 자업자득 khi an ủi – gây tổn thương'], btvn: ['Viết đoạn 150 chữ dùng 5 thành ngữ', 'Ghép thành ngữ với tình huống', 'Luyện 🎤 3 câu']
  };

  const d10 = {
    n: 10, ten: plan[9].ten, kinds: K,
    muc: 'Từ vựng học thuật cốt lõi: khái niệm, giả thuyết, biến, mẫu, kiểm chứng, độ tin cậy, khách quan – chủ quan.',
    hoc: `${tbl(['Từ', 'Hán Việt', 'Nghĩa'], [['개념', 'khái niệm', 'khái niệm'], ['가설', 'giả thuyết', 'giả thuyết'], ['변수', 'biến số', 'biến'], ['표본', 'tiêu bản', 'mẫu'], ['타당성', 'thoả đáng tính', 'tính hợp lý'], ['신뢰성', 'tín lại tính', 'độ tin cậy']])}`,
    vocab: [
      w('개념', 'gaenyeom', 'khái niệm', '', ['개념을 정의하다.', 'gaenyeomeul jeonguihada', 'Định nghĩa khái niệm.']),
      w('가설', 'gaseol', 'giả thuyết', '', ['가설을 세우다.', 'gaseoreul seuda', 'Đặt giả thuyết.']),
      w('변수', 'byeonsu', 'biến số', '', ['독립 변수', 'dongnip byeonsu', 'biến độc lập']),
      w('표본', 'pyobon', 'mẫu', '', ['표본을 추출하다.', 'pyoboneul chuchulhada', 'Trích mẫu.']),
      w('검증하다', 'geomjeunghada', 'kiểm chứng', '', ['가설을 검증하다.', 'gaseoreul geomjeunghada', 'Kiểm chứng giả thuyết.']),
      w('타당성', 'tadangseong', 'tính hợp lý', '', ['타당성이 높다.', 'tadangseongi nopda', 'Tính hợp lý cao.']),
      w('신뢰성', 'silloeseong', 'độ tin cậy', '', ['자료의 신뢰성', 'jaryoui silloeseong', 'độ tin cậy tư liệu']),
      w('객관적', 'gaekgwanjeok', 'khách quan', '', ['객관적인 자료', 'gaekgwanjeogin jaryo', 'tư liệu khách quan']),
      w('주관적', 'jugwanjeok', 'chủ quan', '', ['주관적인 판단', 'jugwanjeogin pandan', 'phán đoán chủ quan']),
      w('정의하다', 'jeonguihada', 'định nghĩa', '', ['용어를 정의하다.', 'yongeoreul jeonguihada', 'Định nghĩa thuật ngữ.'])
    ],
    qs: [
      ['mc', '가설 = ?', 'giả thuyết', ['giả thiết thực tế', 'thiết kế', 'giải thích'], 'Hán Việt.'],
      ['mc', 'Trái nghĩa 객관적?', '주관적', ['타당성', '신뢰성', '정의적'], 'Đối lập.'],
      ['mc', '표본을 추출하다 = ?', 'trích mẫu', ['in tiêu bản', 'xuất bản', 'tiêu hao'], 'Nghiên cứu.'],
      ['hear', '본 연구는 두 가지 가설을 세우고 설문 조사로 검증하였다.', 'Nghiên cứu đặt 2 giả thuyết và kiểm chứng bằng khảo sát.', ['3 giả thuyết, phỏng vấn.', 'Không kiểm chứng.', 'Không có giả thuyết.'], 'Quy trình.'],
      ['hear', '표본이 작으면 결과의 신뢰성이 낮아질 수 있다.', 'Mẫu nhỏ thì độ tin cậy kết quả có thể giảm.', ['Mẫu nhỏ thì tin cậy hơn.', 'Mẫu không ảnh hưởng.', 'Mẫu lớn thì kém.'], 'Logic.'],
      ['order', 'Sắp xếp: “Kiểm chứng giả thuyết.”', ['가설을', '검증하다', '.'], '가설을 검증하다.']
    ],
    noi: [['먼저 개념을 정의하겠습니다.', 'meonjeo gaenyeomeul jeonguihagesseumnida – Trước hết xin định nghĩa khái niệm.'], ['이 가설을 검증하고자 합니다.', 'i gaseoreul geomjeunghagoja hamnida – Tôi muốn kiểm chứng giả thuyết này.'], ['객관적인 자료가 필요합니다.', 'gaekgwanjeogin jaryoga piryohamnida – Cần tư liệu khách quan.']],
    hoithoai: {
      ctx: 'Em thảo luận thiết kế khảo sát “Mức độ hài lòng với ngân hàng số”.', vai: 'Giáo sư hỏi, em đáp.', ai: '🎓 박 교수님',
      luot: [
        T(['가설이 뭐예요?', 'gaseori mwoyeyo?', 'Giả thuyết là gì?'], ['모바일 앱 사용 빈도가 높을수록 만족도도 높을 것이라는 가설입니다.', 'mobail aep sayong bindoga nopeulsurok manjokdodo nopeul geosiraneun gaseorimnida', 'Giả thuyết: tần suất dùng app càng cao thì hài lòng càng cao.', 'Có biến rõ.'], ['만족할 거예요.', 'manjokhal geoyeyo', 'Mơ hồ.'], ['몰라요.', 'mollayo', 'Thiếu.']),
        T(['표본은요?', 'pyoboneunyo?', 'Mẫu?'], ['20대부터 60대까지 300명을 무작위로 추출할 계획입니다.', 'isipdaebuteo yuksipdaekkaji sambaek myeongeul mujagwiro chuchulhal gyehoegimnida', 'Dự định trích ngẫu nhiên 300 người từ 20 đến 60 tuổi.', 'Cụ thể.'], ['친구들한테 물어볼게요.', 'chingudeulhante mureobolgeyo', 'Thiếu khách quan.'], ['열 명이요.', 'yeol myeongiyo', 'Quá nhỏ.']),
        T(['신뢰성은 어떻게 확보해요?', 'silloeseongeun eotteoke hwakbohaeyo?', 'Đảm bảo độ tin cậy thế nào?'], ['검증된 설문 도구를 사용하고 사전 조사로 타당성을 확인하겠습니다.', 'geomjeungdoen seolmun dogureul sayonghago sajeon josaro tadangseongeul hwaginhagesseumnida', 'Dùng bảng hỏi đã kiểm chứng và khảo sát thử để xác nhận tính hợp lý.', 'Phương pháp.'], ['제 느낌으로요.', 'je neukkimeuroyo', 'Chủ quan.'], ['괜찮을 거예요.', 'gwaenchaneul geoyeyo', 'Mơ hồ.'])
      ], ket: 'Em đã trình bày thiết kế nghiên cứu bằng từ học thuật.'
    },
    tom: ['개념 / 가설 / 변수 / 표본 / 검증 / 타당성 / 신뢰성 / 객관적·주관적'], nguphap: 'Từ vựng học thuật', phatam: '신뢰성 [실뢰썽]',
    loi: ['Lẫn 객관적 và 주관적'], btvn: ['Viết 1 giả thuyết cho đề tài của em', 'Học 10 từ học thuật', 'Luyện 🎤 3 câu']
  };

  const d11 = {
    n: 11, ten: plan[10].ten, kinds: K,
    muc: 'Cấu trúc bài luận học thuật: 서론 – 본론 – 맺음말; luận điểm, tiền đề, lập luận nhất quán, trích dẫn, tránh đạo văn.',
    hoc: `${tbl(['Phần', 'Nội dung', 'Mẫu câu'], [['서론', 'bối cảnh, mục đích', '최근 … 이/가 주목받고 있다.'], ['본론', 'luận điểm + căn cứ', '첫째, … 둘째, …'], ['맺음말', 'tóm tắt, đề xuất', '이상의 논의를 종합하면 …']])}
      ${tip('⚠️ Trích dẫn phải ghi nguồn (참고 문헌) – 표절 (đạo văn) bị xử lý nghiêm.')}`,
    vocab: [
      w('서론', 'seoron', 'phần mở đầu', '', ['서론에서 목적을 밝힌다.', 'seoroneseo mokjeogeul balkinda', 'Mở đầu nêu mục đích.']),
      w('본론', 'bollon', 'phần thân', '', ['본론에서 논증한다.', 'bolloneseo nonjeunghanda', 'Thân bài lập luận.']),
      w('맺음말', 'maejeummal', 'lời kết', '', ['맺음말을 쓰다.', 'maejeummareul sseuda', 'Viết lời kết.']),
      w('논지', 'nonji', 'luận điểm chính', '', ['논지가 분명하다.', 'nonjiga bunmyeonghada', 'Luận điểm rõ ràng.']),
      w('전제', 'jeonje', 'tiền đề', '', ['잘못된 전제', 'jalmotdoen jeonje', 'tiền đề sai']),
      w('논증하다', 'nonjeunghada', 'lập luận chứng minh', '', ['주장을 논증하다.', 'jujangeul nonjeunghada', 'Lập luận cho chủ trương.']),
      w('일관성', 'ilgwanseong', 'tính nhất quán', '', ['일관성이 없다.', 'ilgwanseongi eopda', 'Thiếu nhất quán.']),
      w('인용하다', 'inyonghada', 'trích dẫn', '', ['논문을 인용하다.', 'nonmuneul inyonghada', 'Trích dẫn luận văn.']),
      w('참고 문헌', 'chamgo munheon', 'tài liệu tham khảo', '', ['참고 문헌 목록', 'chamgo munheon mongnok', 'danh mục tài liệu tham khảo']),
      w('표절', 'pyojeol', 'đạo văn', '', ['표절은 금지된다.', 'pyojeoreun geumjidoenda', 'Cấm đạo văn.'])
    ],
    qs: [
      ['mc', 'Câu mở phần 맺음말?', '이상의 논의를 종합하면 …', ['최근 … 이 주목받고 있다.', '첫째, …', '본고에서는 … 고찰하고자 한다.'], 'Tổng kết.'],
      ['mc', '표절 = ?', 'đạo văn', ['phiếu bầu', 'trích dẫn', 'biểu đồ'], 'pyojeol.'],
      ['mc', '일관성 = ?', 'tính nhất quán', ['tính cá nhân', 'quán tính', 'độc lập'], 'ilgwanseong.'],
      ['hear', '본론에서는 세 가지 근거를 들어 논지를 논증하였다.', 'Thân bài đưa ra 3 căn cứ để lập luận luận điểm.', ['Thân bài không có căn cứ.', '2 căn cứ.', 'Chỉ có kết luận.'], 'Cấu trúc.'],
      ['hear', '다른 사람의 글을 인용할 때는 반드시 출처를 밝혀야 한다.', 'Khi trích dẫn bài người khác phải nêu rõ nguồn.', ['Không cần nguồn.', 'Không được trích dẫn.', 'Chỉ trích sách.'], 'Đạo đức học thuật.'],
      ['order', 'Sắp xếp: “Luận điểm rõ ràng.”', ['논지가', '분명하다', '.'], '논지가 분명하다.']
    ],
    noi: [['최근 … 이/가 주목받고 있습니다.', 'choegeun … i/ga jumokbatgo itseumnida – Gần đây … đang được chú ý.'], ['이상의 논의를 종합하면 …', 'isangui nonuireul jonghaphamyeon … – Tổng hợp các thảo luận trên thì…'], ['출처를 반드시 밝혀야 합니다.', 'chulcheoreul bandeusi balkyeoya hamnida – Phải ghi rõ nguồn.']],
    hoithoai: {
      ctx: 'Bạn cùng lớp hỏi cách viết bài luận cuối kỳ.', vai: 'Bạn hỏi, em hướng dẫn.', ai: '🙋 동기',
      luot: [
        T(['서론에 뭘 써야 해요?', 'seorone mwol sseoya haeyo?', 'Mở đầu viết gì?'], ['연구 배경과 목적을 밝히고, 논지를 한 문장으로 제시하면 돼요.', 'yeongu baegyeonggwa mokjeogeul balkigo, nonjireul han munjangeuro jesihamyeon dwaeyo', 'Nêu bối cảnh, mục đích và đưa luận điểm trong một câu.', 'Chuẩn.'], ['아무거나요.', 'amugeonayo', 'Thiếu.'], ['결론부터요.', 'gyeollonbuteoyo', 'Sai phần.']),
        T(['인터넷 글을 그대로 써도 돼요?', 'inteonet geureul geudaero sseodo dwaeyo?', 'Chép nguyên bài trên mạng được không?'], ['그대로 쓰면 표절이에요. 인용할 때는 출처를 밝히고 참고 문헌에 넣어야 해요.', 'geudaero sseumyeon pyojeorieyo. inyonghal ttaeneun chulcheoreul balkigo chamgo munheone neoeoya haeyo', 'Chép nguyên là đạo văn. Khi trích phải ghi nguồn và đưa vào tài liệu tham khảo.', 'Đạo đức.'], ['네, 괜찮아요.', 'ne, gwaenchanayo', 'Sai.'], ['안 걸리면 돼요.', 'an geollimyeon dwaeyo', 'Phi đạo đức.']),
        T(['본론은요?', 'bolloneunyo?', 'Thân bài?'], ['논지와 일관성 있게 근거를 세 가지 정도 들어 논증하면 좋아요.', 'nonjiwa ilgwanseong itge geungeoreul se gaji jeongdo deureo nonjeunghamyeon joayo', 'Đưa khoảng 3 căn cứ nhất quán với luận điểm để lập luận.', 'Hướng dẫn.'], ['길게만 쓰면 돼요.', 'gilgeman sseumyeon dwaeyo', 'Sai.'], ['느낌을 쓰세요.', 'neukkimeul sseuseyo', 'Chủ quan.'])
      ], ket: 'Em đã hướng dẫn cấu trúc luận học thuật chuẩn.'
    },
    tom: ['서론 – 본론 – 맺음말', '논지 / 전제 / 논증 / 일관성 / 인용 / 표절'], nguphap: 'Cấu trúc luận học thuật', phatam: '본론 [볼론]',
    loi: ['Đạo văn', 'Thân bài lệch luận điểm'], btvn: ['Lập dàn ý luận 3 phần cho 1 đề', 'Viết phần 서론 200 chữ', 'Luyện 🎤 3 câu']
  };

  const d12 = {
    n: 12, ten: plan[11].ten, kinds: K,
    muc: 'Nâng câu 54 lên điểm cao: thay từ thường bằng từ cao cấp, câu phức, giữ văn -다, 600–700 chữ, đúng giờ (50 phút).',
    hoc: `${tbl(['Từ thường', 'Từ cao cấp'], [['많다', '상당하다'], ['중요한 점', '관건'], ['생각하다', '사료되다 (rất trang trọng)'], ['찾다 (방법)', '모색하다'], ['높이다', '제고하다'], ['어쩔 수 없다', '불가피하다']])}
      ${tip('⏱️ TOPIK II viết: 50 phút cho câu 51–54. Dành ~30 phút cho câu 54.')}`,
    vocab: [
      w('상당하다', 'sangdanghada', 'đáng kể', '', ['상당한 비용', 'sangdanghan biyong', 'chi phí đáng kể']),
      w('관건', 'gwangeon', 'mấu chốt', '', ['성공의 관건', 'seonggongui gwangeon', 'mấu chốt thành công']),
      w('사료되다', 'saryodoeda', 'được cho là (trang trọng)', '', ['필요하다고 사료된다.', 'piryohadago saryodoenda', 'Được cho là cần thiết.']),
      w('모색하다', 'mosaekhada', 'tìm kiếm (giải pháp)', '', ['해결책을 모색하다.', 'haegyeolchaegeul mosaekhada', 'Tìm kiếm giải pháp.']),
      w('제고하다', 'jegohada', 'nâng cao', '', ['경쟁력을 제고하다.', 'gyeongjaengnyeogeul jegohada', 'Nâng cao năng lực cạnh tranh.']),
      w('불가피하다', 'bulgapihada', 'không thể tránh', '', ['변화는 불가피하다.', 'byeonhwaneun bulgapihada', 'Thay đổi là không tránh khỏi.']),
      w('과제', 'gwaje', 'nhiệm vụ, vấn đề cần giải', '', ['해결해야 할 과제', 'haegyeolhaeya hal gwaje', 'vấn đề phải giải quyết']),
      w('시사점', 'sisajeom', 'hàm ý, gợi mở', '', ['정책적 시사점', 'jeongchaekjeok sisajeom', 'hàm ý chính sách']),
      w('다각도', 'dagakdo', 'đa chiều', '', ['다각도로 검토하다.', 'dagakdoro geomtohada', 'Xem xét đa chiều.']),
      w('방증하다', 'bangjeunghada', 'chứng tỏ (gián tiếp)', '', ['이는 관심이 높다는 것을 방증한다.', 'ineun gwansimi nopdaneun geoseul bangjeunghanda', 'Điều này chứng tỏ sự quan tâm cao.'])
    ],
    qs: [
      ['mc', 'Thay “방법을 찾다” bằng từ cao cấp?', '방안을 모색하다', ['방안을 찾아요', '방법을 봐요', '방법을 제고하다'], '모색하다.'],
      ['mc', 'Thay “중요한 점은” bằng?', '관건은', ['과제가', '불가피는', '상당은'], '관건.'],
      ['mc', '제고하다 = ?', 'nâng cao', ['đề xuất', 'xem xét lại', 'cạnh tranh'], 'jegohada.'],
      ['hear', '이러한 변화는 불가피하므로 다각도로 대응 방안을 모색해야 한다.', 'Thay đổi không tránh khỏi nên phải tìm phương án ứng phó đa chiều.', ['Có thể tránh thay đổi.', 'Không cần ứng phó.', 'Chỉ một chiều.'], 'Văn cao cấp.'],
      ['hear', '이 결과는 시민들의 관심이 상당히 높다는 것을 방증한다.', 'Kết quả chứng tỏ sự quan tâm của người dân khá cao.', ['Người dân không quan tâm.', 'Kết quả sai.', 'Quan tâm thấp.'], '방증하다.'],
      ['order', 'Sắp xếp: “Nâng cao năng lực cạnh tranh.”', ['경쟁력을', '제고하다', '.'], '경쟁력을 제고하다.']
    ],
    noi: [['성공의 관건은 인재입니다.', 'seonggongui gwangeoneun injaeimnida – Mấu chốt thành công là nhân tài.'], ['다각도로 방안을 모색해야 합니다.', 'dagakdoro banganeul mosaekhaeya hamnida – Phải tìm phương án đa chiều.'], ['변화는 불가피합니다.', 'byeonhwaneun bulgapihamnida – Thay đổi là không tránh khỏi.']],
    hoithoai: {
      ctx: 'Giáo viên chấm thử câu 54 và yêu cầu em nâng cấp từ vựng.', vai: 'Cô góp ý, em sửa.', ai: '👩‍🏫 한 선생님',
      luot: [
        T(['"이 문제는 아주 중요하다"를 고급스럽게 바꿔 보세요.', '"i munjeneun aju jungyohada"reul gogeupseureopge bakkwo boseyo', 'Nâng cấp câu "vấn đề này rất quan trọng".'], ['이 문제는 우리 사회가 해결해야 할 시급한 과제이다.', 'i munjeneun uri sahoega haegyeolhaeya hal sigeuphan gwajeida', 'Đây là vấn đề cấp bách xã hội phải giải quyết.', 'Cao cấp.'], ['이 문제는 진짜 중요해요.', 'i munjeneun jinjja jungyohaeyo', 'Khẩu ngữ.'], ['중요하다.', 'jungyohada', 'Không nâng cấp.']),
        T(['"방법을 찾아야 한다"는요?', '"bangbeobeul chajaya handa"neunyo?', 'Còn "phải tìm cách"?'], ['다각도로 해결 방안을 모색해야 할 것이다.', 'dagakdoro haegyeol banganeul mosaekhaeya hal geosida', 'Sẽ phải tìm phương án giải quyết đa chiều.', 'Cao cấp.'], ['방법 찾아요.', 'bangbeop chajayo', 'Khẩu ngữ.'], ['방법을 제고한다.', 'bangbeobeul jegohanda', 'Sai kết hợp.']),
        T(['시간 배분은 어떻게 해요?', 'sigan baebuneun eotteoke haeyo?', 'Phân bổ thời gian thế nào?'], ['개요 5분, 쓰기 20분, 검토 5분으로 약 30분 안에 끝내겠습니다.', 'gaeyo obun, sseugi isipbun, geomto obuneuro yak samsipbun ane kkeunnaegesseumnida', 'Dàn ý 5 phút, viết 20, soát 5 – xong trong khoảng 30 phút.', 'Chiến lược.'], ['마지막에 쓸게요.', 'majimage sseulgeyo', 'Rủi ro.'], ['시간 상관없어요.', 'sigan sanggwaneopseoyo', 'Sai.'])
      ], ket: 'Em đã nâng cấp bài viết lên văn phong điểm cao.'
    },
    tom: ['상당하다 / 관건 / 사료되다 / 모색하다 / 제고하다 / 불가피하다 / 과제 / 시사점 / 다각도 / 방증하다'], nguphap: 'Từ vựng viết điểm cao', phatam: '관건 [관껀]',
    loi: ['Kết hợp từ sai (방법을 제고하다)'], btvn: ['Viết lại 1 bài câu 54 với 6 từ cao cấp', 'Bấm giờ 30 phút', 'Luyện 🎤 3 câu']
  };

  const d13 = {
    n: 13, ten: plan[12].ten, kinds: K,
    muc: 'Kính ngữ nghi lễ và văn bản trang trọng: 귀사/폐사, 존함, 삼가, thư mời, thư cảm ơn, thư chia buồn.',
    hoc: `${tbl(['Thường', 'Nghi lễ'], [['당신 회사', '귀사'], ['우리 회사', '폐사 (khiêm)'], ['이름', '존함 / 성함'], ['드림', '올림 / 배상'], ['조의를 표하다', '삼가 고인의 명복을 빕니다']])}
      ${tip('🙏 삼가 고인의 명복을 빕니다 = Thành kính chia buồn, cầu cho người đã khuất được an nghỉ.')}`,
    vocab: [
      w('귀사', 'gwisa', 'quý công ty', '', ['귀사의 발전을 기원합니다.', 'gwisaui baljeoneul giwonhamnida', 'Chúc quý công ty phát triển.']),
      w('폐사', 'pyesa', 'công ty chúng tôi (khiêm)', '', ['폐사의 제품', 'pyesaui jepum', 'sản phẩm của công ty chúng tôi']),
      w('존함', 'jonham', 'quý danh', '', ['존함이 어떻게 되십니까?', 'jonhami eotteoke doesimnikka?', 'Xin quý danh ạ?']),
      w('삼가', 'samga', 'kính cẩn', '', ['삼가 인사드립니다.', 'samga insadeurimnida', 'Kính cẩn chào.']),
      w('명복', 'myeongbok', 'phúc nơi suối vàng', '', ['고인의 명복을 빕니다.', 'goinui myeongbogeul bimnida', 'Cầu cho người đã khuất an nghỉ.']),
      w('기원하다', 'giwonhada', 'cầu chúc', '', ['건승을 기원합니다.', 'geonseungeul giwonhamnida', 'Chúc thành công.']),
      w('올림', 'ollim', 'kính thư', '', ['홍길동 올림', 'Hong Gil-dong ollim', 'Hong Gil-dong kính thư']),
      w('축사', 'chuksa', 'lời chúc mừng (phát biểu)', '', ['축사를 하다.', 'chuksareul hada', 'Phát biểu chúc mừng.']),
      w('경청하다', 'gyeongcheonghada', 'lắng nghe chăm chú', '', ['경청해 주셔서 감사합니다.', 'gyeongcheonghae jusyeoseo gamsahamnida', 'Cảm ơn đã lắng nghe.']),
      w('초청', 'chocheong', 'lời mời (chính thức)', '', ['초청장', 'chocheongjang', 'thư mời'])
    ],
    qs: [
      ['mc', 'Viết thư cho đối tác, “quý công ty”?', '귀사', ['폐사', '당신 회사', '너희 회사'], 'Tôn kính.'],
      ['mc', 'Lời chia buồn chuẩn?', '삼가 고인의 명복을 빕니다.', ['힘내세요!', '잘 됐네요.', '축하드립니다.'], 'Nghi lễ.'],
      ['mc', '존함 = ?', 'quý danh', ['tồn tại', 'tôn trọng', 'thân phận'], 'jonham.'],
      ['hear', '바쁘신 가운데 끝까지 경청해 주셔서 진심으로 감사드립니다.', 'Xin chân thành cảm ơn quý vị đã chăm chú lắng nghe đến cuối dù bận rộn.', ['Xin lỗi vì đến muộn.', 'Mời quý vị về.', 'Chúc mừng sinh nhật.'], 'Kết diễn văn.'],
      ['hear', '귀사의 무궁한 발전을 기원합니다.', 'Chúc quý công ty phát triển không ngừng.', ['Chúc công ty chúng tôi phát triển.', 'Chia buồn với quý công ty.', 'Mời quý công ty.'], 'Lời chúc.'],
      ['order', 'Sắp xếp: “Chúc thành công.”', ['건승을', '기원합니다', '.'], '건승을 기원합니다.']
    ],
    noi: [['귀사의 무궁한 발전을 기원합니다.', 'gwisaui mugunghan baljeoneul giwonhamnida – Chúc quý công ty phát triển không ngừng.'], ['삼가 고인의 명복을 빕니다.', 'samga goinui myeongbogeul bimnida – Thành kính chia buồn.'], ['경청해 주셔서 감사합니다.', 'gyeongcheonghae jusyeoseo gamsahamnida – Cảm ơn đã lắng nghe.']],
    hoithoai: {
      ctx: 'Em gọi điện mời giám đốc đối tác dự lễ kỷ niệm 10 năm chi nhánh.', vai: 'Thư ký đối tác nghe, em mời.', ai: '☎️ 비서실',
      luot: [
        T(['네, 대한물산 비서실입니다.', 'ne, Daehanmulsan biseosirimnida', 'Vâng, phòng thư ký Daehan Trading.'], ['안녕하십니까. 비엣띤은행 벤륵 지점의 퐁이라고 합니다. 대표님께 초청 말씀을 드리고자 연락드렸습니다.', 'annyeonghasimnikka. Bietin eunhaeng Benreuk jijeomui Pongirago hamnida. daepyonimkke chocheong malsseumeul deurigoja yeollakdeuryeotseumnida', 'Xin chào, tôi là Phong, chi nhánh Bến Lức. Tôi liên hệ để chuyển lời mời tới giám đốc.', 'Trang trọng.'], ['사장님 바꿔 줘요.', 'sajangnim bakkwo jwoyo', 'Thiếu lễ.'], ['안녕, 나야.', 'annyeong, naya', 'Sai văn phong.']),
        T(['어떤 행사인가요?', 'eotteon haengsaingayo?', 'Sự kiện gì ạ?'], ['다음 달 15일 지점 개점 10주년 기념식에 대표님을 귀빈으로 모시고자 합니다.', 'daeum dal siboil jijeom gaejeom sipjunyeon ginyeomsige daepyonimeul gwibineuro mosigoja hamnida', 'Chúng tôi muốn kính mời giám đốc làm khách quý lễ kỷ niệm 10 năm ngày 15 tháng sau.', '모시다 + -고자.'], ['파티 와요.', 'pati wayo', 'Suồng sã.'], ['오면 좋아요.', 'omyeon joayo', 'Thiếu lễ.']),
        T(['초청장은 어디로 받으면 될까요?', 'chocheongjangeun eodiro badeumyeon doelkkayo?', 'Thư mời gửi đâu ạ?'], ['오늘 중으로 이메일과 우편으로 함께 보내 드리겠습니다. 존함과 직함을 다시 확인해도 되겠습니까?', 'oneul jungeuro imeilgwa upyeoneuro hamkke bonae deurigesseumnida. jonhamgwa jikhameul dasi hwaginhaedo doegetseumnikka?', 'Trong hôm nay tôi gửi qua email và bưu điện. Cho phép tôi xác nhận lại quý danh và chức vụ?', 'Cẩn thận.'], ['알아서 하세요.', 'araseo haseyo', 'Thiếu lễ.'], ['몰라요.', 'mollayo', 'Thiếu.'])
      ], ket: 'Em đã mời khách quý bằng văn phong nghi lễ.'
    },
    tom: ['귀사 / 폐사 / 존함 / 삼가 / 명복 / 기원 / 올림 / 축사 / 경청 / 초청'], nguphap: 'Kính ngữ nghi lễ', phatam: '명복 [명복], 존함 [존함]',
    loi: ['Dùng 폐사 cho công ty đối phương', 'Chúc mừng trong đám tang'], btvn: ['Viết 1 thư mời trang trọng', 'Viết 1 thư chia buồn ngắn', 'Luyện 🎤 3 câu']
  };

  const d14 = {
    n: 14, ten: plan[13].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Ôn tập tuần 2: thành ngữ 4 chữ, từ học thuật, cấu trúc luận, từ viết điểm cao, kính ngữ nghi lễ.',
    hoc: `<h4>Tóm tắt tuần 2</h4>${tbl(['Chủ đề', 'Cụm then chốt'], [['사자성어', '일석이조, 유비무환, 고진감래, 역지사지, 전화위복'], ['Học thuật', '가설, 표본, 검증, 신뢰성, 객관적'], ['Bài luận', '서론 – 본론 – 맺음말, 논지, 인용'], ['Viết điểm cao', '관건, 모색하다, 제고하다, 불가피하다'], ['Nghi lễ', '귀사, 폐사, 존함, 삼가']])}`,
    qs: [['mc', 'Mất việc rồi lại tìm được việc tốt hơn?', '전화위복', ['설상가상', '작심삼일', '동문서답'], 'Rủi hoá may.'], ['mc', 'Thay “방법을 찾다”?', '방안을 모색하다', ['방안을 제고하다', '방법 봐요', '방법을 방증하다'], 'Từ cao cấp.']],
    noi: [['역지사지로 생각해 봅시다.', 'yeokjisajiro saenggakhae bopsida – Hãy đặt mình vào vị trí người khác.'], ['귀사의 발전을 기원합니다.', 'gwisaui baljeoneul giwonhamnida – Chúc quý công ty phát triển.']],
    hoithoai: {
      ctx: 'Mô phỏng phỏng vấn học bổng thạc sĩ tại Hàn.', vai: 'Hội đồng hỏi, em trả lời.', ai: '🎓 심사위원',
      luot: [
        T(['연구 계획을 말씀해 주세요.', 'yeongu gyehoegeul malsseumhae juseyo', 'Xin trình bày kế hoạch nghiên cứu.'], ['디지털 금융 서비스 만족도의 영향 요인을 규명하고자 하며, 300명 표본으로 가설을 검증할 계획입니다.', 'dijiteol geumyung seobiseu manjokdoui yeonghyang yoineul gyumyeonghagoja hamyeo, sambaek myeong pyoboneuro gaseoreul geomjeunghal gyehoegimnida', 'Tôi muốn làm rõ yếu tố ảnh hưởng hài lòng dịch vụ tài chính số và kiểm chứng giả thuyết với mẫu 300 người.', 'Học thuật.'], ['은행 공부요.', 'eunhaeng gongbuyo', 'Sơ sài.'], ['아직 없어요.', 'ajik eopseoyo', 'Thiếu.']),
        T(['어려움이 있다면요?', 'eoryeoumi itdamyeonyo?', 'Nếu gặp khó khăn?'], ['고진감래라는 말처럼 끝까지 포기하지 않는 한 극복할 수 있다고 생각합니다.', 'gojingamnaeraneun malcheoreom kkeutkkaji pogihaji anneun han geukbokhal su itdago saenggakhamnida', 'Như câu khổ tận cam lai, chừng nào không bỏ cuộc tôi tin sẽ vượt qua.', 'Thành ngữ + -는 한.'], ['그만둘 거예요.', 'geumandul geoyeyo', 'Tiêu cực.'], ['어려움 없어요.', 'eoryeoum eopseoyo', 'Thiếu thực tế.']),
        T(['마지막으로 하실 말씀은?', 'majimageuro hasil malsseumeun?', 'Lời cuối?'], ['이 연구가 한-베 금융 협력에 시사점을 줄 수 있기를 바랍니다. 경청해 주셔서 감사합니다.', 'i yeonguga han-be geumyung hyeomnyeoge sisajeomeul jul su itgireul baramnida. gyeongcheonghae jusyeoseo gamsahamnida', 'Mong nghiên cứu đem lại hàm ý cho hợp tác tài chính Hàn – Việt. Cảm ơn đã lắng nghe.', 'Kết trang trọng.'], ['끝.', 'kkeut', 'Thiếu lễ.'], ['뽑아 주세요.', 'ppoba juseyo', 'Thiếu chuyên nghiệp.'])
      ], ket: 'Em đã trả lời phỏng vấn học bổng ở trình độ cấp 5!'
    },
    tom: ['Ôn tuần 2', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn', phatam: 'Ôn âm Hán Hàn',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: học lại ngày yếu', 'Làm ⚡ Luyện nhanh', 'Viết 1 bài câu 54 với 3 thành ngữ']
  };

  window.PLT_KO5 = { plan, stages, H: { w, L, T, tbl, tip, exs, sp, K }, days: [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14] };
})();

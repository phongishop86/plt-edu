/* PLT-Edu · Tiếng Anh – Cấp 4 (B2): lộ trình 30 ngày, Ngày 1–14 */
(function () {
  'use strict';
  const sp = PLT.LANG.sp;
  const w = (h, p, v, use, ex) => ({ h, p, v, use, ex });
  const L = (h, p, v) => ({ h, p: p || '', v });
  const T = (a, ok, ...bad) => ({ a: L(...a), o: [{ h: ok[0], p: '', v: ok[1], ok: 1, f: ok[2] }].concat(bad.map((b) => ({ h: b[0], p: '', f: b[1] }))) });
  const tbl = (head, rows) => `<div class="zh-scroll"><table class="dtable full zh-tb"><tr>${head.map((x) => `<th>${x}</th>`).join('')}</tr>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</table></div>`;
  const tip = (x) => `<div class="zh-tip">${x}</div>`;
  const exs = (a) => `<ul>${a.map(([h, v]) => `<li>${h} ${sp(h)}<br><span class="muted">${v}</span></li>`).join('')}</ul>`;
  const F = (parts) => `<div class="zh-formula small">${parts.map((x) => (x === '+' || x === '→' ? `<i>${x}</i>` : `<span>${x}</span>`)).join('')}</div>`;
  const K = ['meaning', 'listen', 'listenWord', 'hanzi', 'write', 'match'];
  const G = (id, t) => `<p class="small">📐 Xem thêm: <a href="#/tieng-anh/ngu-phap/${id}">${t}</a> trong Sổ tay ngữ pháp.</p>`;
  const say = (h, v) => `<div class="zh-pass">${h} ${sp(h)}<br><span class="muted small">${v}</span></div>`;

  const plan = [
    'Câu điều kiện loại 3 và hỗn hợp', 'Câu ước và hối tiếc', 'Bị động nâng cao', 'Mệnh đề rút gọn và mệnh đề phân từ', 'Tương lai tiếp diễn và tương lai hoàn thành', 'Suy đoán và đánh giá quá khứ', 'Ôn tập tuần 1 và kiểm tra',
    'Từ nối học thuật', 'Cụm động từ trong công việc', 'Kết hợp từ tự nhiên', 'IELTS Writing Task 1: biểu đồ và bảng', 'IELTS Writing Task 2: thảo luận hai quan điểm', 'IELTS Reading: đọc lướt, đọc tìm, T/F/NG', 'Ôn tập tuần 2 và kiểm tra',
    'Viết báo cáo và đề xuất', 'Thuyết trình số liệu và câu hỏi khó', 'Đàm phán nâng cao và giải quyết xung đột', 'Góp ý và đánh giá nhân viên', 'Tiếng Anh tài chính – ngân hàng', 'Tiếng Anh CNTT và an ninh mạng', 'Kiểm tra tổng hợp và mô phỏng công việc',
    'Thành ngữ và cách nói tự nhiên', 'Ngôn ngữ ngoại giao và nói giảm', 'Kể chuyện cuốn hút', 'Tranh luận: lập luận và phản bác', 'Giao tiếp liên văn hoá', 'IELTS Speaking Part 2–3 hướng band 6.5', 'Nghe hiểu học thuật', 'Đề thi mô phỏng tổng hợp', 'Kiểm tra cuối khoá B2 và lộ trình C1'
  ].map((ten, i) => ({ n: i + 1, ten }));
  const stages = [
    { ten: '🧩 Giai đoạn 1 – Ngữ pháp nâng cao', tu: 1, den: 7 }, { ten: '📚 Giai đoạn 2 – Từ vựng học thuật và IELTS', tu: 8, den: 14 },
    { ten: '🏦 Giai đoạn 3 – Công việc chuyên sâu', tu: 15, den: 21 }, { ten: '🗣️ Giai đoạn 4 – Diễn đạt tự nhiên và luyện thi', tu: 22, den: 30 }
  ];

  /* ================= NGÀY 1 ================= */
  const d1 = {
    n: 1, ten: plan[0].ten, kinds: K,
    muc: 'Nói về quá khứ không có thật và hệ quả của nó: loại 3, hỗn hợp, đảo ngữ Had I known…',
    hoc: `${tbl(['Loại', 'Cấu trúc', 'Ví dụ'], [['3', 'If + had V3, would have V3', "If we had tested the system, we wouldn't have lost the data."], ['Hỗn hợp (quá khứ → hiện tại)', 'If + had V3, would + V', 'If I had studied IT, I would be a developer now.'], ['Hỗn hợp (hiện tại → quá khứ)', 'If + V2, would have V3', "If I weren't so busy, I would have joined you yesterday."], ['Đảo ngữ trang trọng', 'Had + S + V3, …', 'Had I known about the delay, I would have called.']])}
      ${tip('🔎 Câu điều kiện loại 3 rất hữu ích khi <b>phân tích sự cố</b> (post-mortem): <i>If the backup had run, we would have recovered the files.</i>')}${G('dieu-kien-3', 'Điều kiện loại 3 và hỗn hợp')}`,
    vocab: [
      w('in hindsight', '/ɪn ˈhaɪndsaɪt/', 'nhìn lại thì', '', ['In hindsight, we should have tested it.', '', 'Nhìn lại, lẽ ra chúng ta nên kiểm thử.']),
      w('consequence', '/ˈkɑːnsəkwens/', 'hậu quả', '', ['The consequences were serious.', '', 'Hậu quả nghiêm trọng.']),
      w('outcome', '/ˈaʊtkʌm/', 'kết quả', '', ['The outcome would have been different.', '', 'Kết quả lẽ ra đã khác.']),
      w('avoid', '/əˈvɔɪd/', 'tránh được', '', ['We could have avoided the problem.', '', 'Lẽ ra đã tránh được vấn đề.']),
      w('backup', '/ˈbækʌp/', 'bản sao lưu', '', ['The backup failed last night.', '', 'Tối qua sao lưu bị lỗi.']),
      w('decision', '/dɪˈsɪʒn/', 'quyết định', '', ['It was the right decision.', '', 'Đó là quyết định đúng.']),
      w('turning point', '/ˈtɜːrnɪŋ pɔɪnt/', 'bước ngoặt', '', ['That job was a turning point.', '', 'Công việc đó là bước ngoặt.']),
      w('opportunity', '/ˌɑːpərˈtuːnəti/', 'cơ hội', '', ['I missed a great opportunity.', '', 'Tôi bỏ lỡ một cơ hội lớn.']),
      w('root cause', '/ruːt kɔːz/', 'nguyên nhân gốc', '', ["We need to find the root cause.", '', 'Cần tìm nguyên nhân gốc.']),
      w('lesson learned', '/ˈlesn lɜːrnd/', 'bài học rút ra', '', ['The main lesson learned is to plan ahead.', '', 'Bài học chính là lập kế hoạch trước.'])
    ],
    qs: [
      ['mc', 'If we had left earlier, we ___ the flight.', 'would have caught', ['would catch', 'had caught', 'will catch'], 'Loại 3.'],
      ['mc', 'If I had taken that job, I ___ in Singapore now.', 'would be living', ['would have lived', 'will live', 'lived'], 'Hỗn hợp: kết quả hiện tại.'],
      ['mc', '___ I known, I would have helped.', 'Had', ['If', 'Have', 'Would'], 'Đảo ngữ.'],
      ['mc', "If the backup ___, we wouldn't have lost the files.", 'had worked', ['worked', 'would work', 'has worked'], 'Loại 3: had V3.'],
      ['mc', 'root cause nghĩa là?', 'nguyên nhân gốc', ['hậu quả', 'giải pháp', 'rễ cây'], 'root cause.'],
      ['hear', "In hindsight, if we had trained the staff earlier, the launch would have gone more smoothly.", 'Nhìn lại, nếu đào tạo sớm thì ra mắt suôn sẻ hơn.', ['Đào tạo sớm nên suôn sẻ.', 'Ra mắt bị huỷ.', 'Nhân viên không cần đào tạo.'], 'if we had trained … would have gone.'],
      ['order', 'Sắp xếp: “Lẽ ra chúng ta đã tránh được vấn đề.”', ['We', 'could have', 'avoided', 'the problem.'], 'We could have avoided the problem.']
    ],
    noi: [["If we had *tested* the *system*, → we *wouldn't* have lost the *data*. ↘", 'Nếu kiểm thử thì đã không mất dữ liệu.'], ['*Had* I *known*, → I would have *called* you. ↘', 'Nếu biết thì tôi đã gọi bạn.'], ['In *hindsight*, → it was the *right* *decision*. ↘', 'Nhìn lại, đó là quyết định đúng.']],
    hoithoai: {
      ctx: 'Họp rút kinh nghiệm sau sự cố mất dữ liệu ở một chi nhánh.', vai: 'Trưởng phòng hỏi, em phân tích.', ai: '👨‍💼 Head of IT',
      luot: [
        T(['So what went wrong last Friday?', '', 'Thứ Sáu tuần trước sai ở đâu?'], ["The server crashed, and the backup hadn't run for three days.", 'Máy chủ sập và bản sao lưu đã không chạy 3 ngày.', 'Quá khứ + quá khứ hoàn thành.'], ['Server crash and backup not run.', 'Thiếu thì.'], ['The server has crashed and backup runs.', 'Sai thì.']),
        T(['Could we have avoided it?', '', 'Lẽ ra có tránh được không?'], ["Yes. If we had monitored the backup, we would have noticed the problem.", 'Có. Nếu theo dõi sao lưu thì đã phát hiện vấn đề.', 'Loại 3.'], ['If we monitor, we notice.', 'Sai loại.'], ['If we had monitored, we will notice.', 'would have V3.']),
        T(["What's the lesson learned?", '', 'Bài học rút ra là gì?'], ['We should set up automatic alerts so that we know immediately when a backup fails.', 'Nên cài cảnh báo tự động để biết ngay khi sao lưu lỗi.', 'Giải pháp cụ thể.'], ['Lesson is backup.', 'Mơ hồ.'], ['We should have nothing.', 'Vô nghĩa.'])
      ], ket: 'Em đã phân tích sự cố bằng câu điều kiện loại 3.'
    },
    tom: ['Loại 3', 'Hỗn hợp', 'Had I known…'], nguphap: 'Câu điều kiện loại 3 và hỗn hợp; đảo ngữ', phatam: "would have /wʊdəv/; wouldn't have /ˈwʊdntəv/",
    loi: ['would have + V2', 'Nhầm loại 2 và 3'], btvn: ['Viết 6 câu về những quyết định trong đời em (loại 3 và hỗn hợp)', 'Viết báo cáo sự cố ngắn 120 từ', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 2 ================= */
  const d2 = {
    n: 2, ten: plan[1].ten, kinds: K,
    muc: 'Diễn đạt mong ước và hối tiếc: wish / if only + quá khứ, quá khứ hoàn thành, would; should have.',
    hoc: `${tbl(['Ước về', 'Cấu trúc', 'Ví dụ'], [['hiện tại', 'wish + V2 / were', 'I wish I had more free time.'], ['quá khứ', 'wish + had V3', "I wish I hadn't sold my shares."], ['người khác thay đổi', 'wish + would + V', 'I wish the system would load faster.'], ['khả năng', 'wish + could + V', 'I wish I could speak Japanese.']])}
      ${exs([["If only I'd listened to my mother!", 'Giá mà tôi nghe lời mẹ!'], ['I should have saved more money when I was young.', 'Lẽ ra hồi trẻ tôi nên tiết kiệm nhiều hơn.'], ["I'd rather you didn't tell anyone yet.", 'Tôi muốn bạn chưa kể với ai.']])}
      ${G('wish', 'Câu ước')}`,
    vocab: [
      w('regret', '/rɪˈɡret/', 'hối tiếc', '', ['I regret not studying harder.', '', 'Tôi hối tiếc đã không học chăm hơn.']),
      w('if only', '/ɪf ˈoʊnli/', 'giá mà', '', ['If only I had more time!', '', 'Giá mà tôi có thêm thời gian!']),
      w("I'd rather", '/aɪd ˈræðər/', 'tôi thà; tôi muốn', '', ["I'd rather stay home tonight.", '', 'Tối nay tôi thà ở nhà.']),
      w('shares', '/ʃerz/', 'cổ phiếu', '', ['He sold his shares too early.', '', 'Anh ấy bán cổ phiếu quá sớm.']),
      w('make the most of', '/meɪk ðə moʊst əv/', 'tận dụng tối đa', '', ['Make the most of your time.', '', 'Tận dụng tối đa thời gian.']),
      w('take for granted', '/teɪk fər ˈɡræntɪd/', 'coi là hiển nhiên', '', ["Don't take your health for granted.", '', 'Đừng coi sức khoẻ là hiển nhiên.']),
      w('second chance', '/ˈsekənd tʃæns/', 'cơ hội thứ hai', '', ['Everyone deserves a second chance.', '', 'Ai cũng xứng đáng có cơ hội thứ hai.']),
      w('look back', '/lʊk bæk/', 'nhìn lại', '', ['When I look back, I feel proud.', '', 'Nhìn lại, tôi thấy tự hào.']),
      w('mistake', '/mɪˈsteɪk/', 'sai lầm', '', ['Everyone makes mistakes.', '', 'Ai cũng mắc sai lầm.']),
      w('proud', '/praʊd/', 'tự hào', '', ["I'm proud of my team.", '', 'Tôi tự hào về đội của mình.'])
    ],
    qs: [
      ['mc', 'I wish I ___ more time to travel.', 'had', ['have', 'will have', 'had had now'], 'Ước hiện tại → V2.'],
      ['mc', "I wish I ___ that email. It caused a lot of trouble.", "hadn't sent", ["didn't send", "don't send", "wouldn't send"], 'Hối tiếc quá khứ.'],
      ['mc', 'I wish my neighbour ___ playing loud music at night.', 'would stop', ['stops', 'stopped yesterday', 'had stopped tomorrow'], 'Phàn nàn → would.'],
      ['mc', "I regret ___ to the meeting.", 'not going', ['not to go', "didn't go", 'no going'], 'regret + V-ing.'],
      ['mc', "I'd rather you ___ smoke here.", "didn't", ["don't", "won't", 'not'], "I'd rather + S + V2."],
      ['hear', "If only I'd invested in that company ten years ago!", 'Giá mà 10 năm trước tôi đầu tư vào công ty đó!', ['Tôi đã đầu tư 10 năm trước.', 'Tôi sẽ đầu tư sau 10 năm.', 'Tôi không muốn đầu tư.'], "If only + had V3."],
      ['order', 'Sắp xếp: “Đừng coi sức khoẻ là hiển nhiên.”', ["Don't take", 'your health', 'for', 'granted.'], "Don't take your health for granted."]
    ],
    noi: [['I *wish* I had more *free* *time*. ↘', 'Ước gì tôi có nhiều thời gian rảnh hơn.'], ["If *only* I'd *listened* to my *mother*! ↘", 'Giá mà tôi nghe lời mẹ!'], ['I *should* have *saved* more *money*. ↘', 'Lẽ ra tôi nên tiết kiệm nhiều hơn.']],
    hoithoai: {
      ctx: 'Một đồng nghiệp kỳ cựu sắp nghỉ hưu chia sẻ với em.', vai: 'Ông Peter hỏi, em trả lời và chia sẻ.', ai: '👴 Peter',
      luot: [
        T(['Looking back on your career so far, do you regret anything?', '', 'Nhìn lại sự nghiệp đến giờ, bạn có hối tiếc gì không?'], ["I wish I had learned English earlier. I missed a few good opportunities.", 'Ước gì tôi học tiếng Anh sớm hơn. Tôi đã lỡ vài cơ hội tốt.', 'wish + had V3.'], ['I wish I learn English earlier.', 'Quá khứ → had learned.'], ['I regret to learn English.', 'Sai nghĩa.']),
        T(["It's never too late. What about now?", '', 'Không bao giờ là muộn. Còn giờ thì sao?'], ["Now I wish I could spend more time with my kids. I'm always so busy.", 'Giờ ước gì có thể dành nhiều thời gian cho con. Tôi lúc nào cũng bận.', 'wish + could.'], ['I wish I can spend.', 'can → could.'], ['I wish spending time.', 'Sai.']),
        T(["My advice: don't take your family for granted.", '', 'Lời khuyên: đừng coi gia đình là hiển nhiên.'], ["Thank you. I'll try to make the most of every weekend.", 'Cảm ơn. Tôi sẽ cố tận dụng mỗi cuối tuần.', 'Đáp lời khuyên.'], ['I take it for granted.', 'Ngược ý.'], ['I wish you would advise.', 'Không hợp ngữ cảnh.'])
      ], ket: 'Em đã nói về mong ước và hối tiếc tự nhiên.'
    },
    tom: ['wish + V2 / had V3 / would / could', 'If only', 'regret + V-ing', "I'd rather"], nguphap: 'Câu ước; regret; would rather', phatam: "I'd /aɪd/ = I had / I would",
    loi: ['wish + will', 'regret to (khi muốn nói hối hận)'], btvn: ['Viết 3 điều ước về hiện tại và 3 điều hối tiếc', 'Trả lời: "What advice would you give your younger self?" 120 từ', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 3 ================= */
  const d3 = {
    n: 3, ten: plan[2].ten, kinds: K,
    muc: 'Dùng bị động khách quan (It is said / believed that…, S is thought to…) và have / get something done.',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ', 'Dùng khi'], [['It is said / reported / believed that + mệnh đề', 'It is believed that the market will recover.', 'Báo chí, báo cáo, văn học thuật'], ['S + is said + to V', 'The company is said to be planning a merger.', 'Tin đồn, nhận định'], ['S + is thought + to have V3', 'The hackers are thought to have stolen 1,000 accounts.', 'Việc đã xảy ra'], ['have / get + vật + V3', 'We had the network upgraded last month.', 'Thuê/nhờ người khác làm']])}
      ${tip('📰 Thay vì <i>People say that…</i> (văn nói), viết <i>It is widely believed that…</i> (trang trọng, khách quan).')}${G('bi-dong-nang-cao', 'Bị động nâng cao')}`,
    vocab: [
      w('it is believed', '/ɪt ɪz bɪˈliːvd/', 'người ta tin rằng', '', ['It is believed that prices will fall.', '', 'Người ta tin giá sẽ giảm.']),
      w('is said to', '/ɪz sed tuː/', 'được cho là', '', ['He is said to be very rich.', '', 'Ông ấy được cho là rất giàu.']),
      w('merger', '/ˈmɜːrdʒər/', 'sáp nhập', '', ['The two banks announced a merger.', '', 'Hai ngân hàng công bố sáp nhập.']),
      w('recover', '/rɪˈkʌvər/', 'phục hồi', '', ['The economy is expected to recover.', '', 'Kinh tế được kỳ vọng phục hồi.']),
      w('estimated', '/ˈestɪmeɪtɪd/', 'ước tính', '', ['It is estimated that 2 million people use the app.', '', 'Ước tính 2 triệu người dùng ứng dụng.']),
      w('upgrade', '/ˌʌpˈɡreɪd/', 'nâng cấp', '', ['We had the servers upgraded.', '', 'Chúng tôi cho nâng cấp máy chủ.']),
      w('widely', '/ˈwaɪdli/', 'rộng rãi', '', ['It is widely accepted.', '', 'Điều đó được chấp nhận rộng rãi.']),
      w('allegedly', '/əˈledʒɪdli/', 'được cho là (chưa xác minh)', '', ['He allegedly stole the data.', '', 'Anh ta bị cho là đã đánh cắp dữ liệu.']),
      w('expected to', '/ɪkˈspektɪd tuː/', 'được kỳ vọng sẽ', '', ['Sales are expected to rise.', '', 'Doanh số được kỳ vọng tăng.']),
      w('get something done', '/ɡet ˈsʌmθɪŋ dʌn/', 'nhờ/thuê làm việc gì', '', ['I need to get my car repaired.', '', 'Tôi cần mang xe đi sửa.'])
    ],
    qs: [
      ['mc', 'It ___ that the new branch will open in March.', 'is expected', ['expects', 'is expecting', 'expected is'], 'It is expected that.'],
      ['mc', 'The company is said ___ financial problems.', 'to have', ['having', 'that has', 'to having'], 'is said to + V.'],
      ['mc', 'The thieves are thought ___ through the back door.', 'to have entered', ['to enter', 'entering', 'that entered'], 'Việc đã xảy ra → to have V3.'],
      ['mc', 'We had our office ___ last weekend.', 'painted', ['paint', 'painting', 'to paint'], 'have + O + V3.'],
      ['mc', 'merger nghĩa là?', 'sáp nhập', ['phá sản', 'cổ phần', 'chi nhánh'], 'merger.'],
      ['hear', "It is estimated that around forty percent of customers now use mobile banking only.", 'Ước tính khoảng 40% khách chỉ dùng ngân hàng di động.', ['14% khách.', '40% khách không dùng di động.', 'Chắc chắn 40%.'], 'It is estimated that ~40%.'],
      ['order', 'Sắp xếp: “Kinh tế được kỳ vọng sẽ phục hồi.”', ['The economy', 'is expected', 'to', 'recover.'], 'The economy is expected to recover.']
    ],
    noi: [['It is *widely* *believed* → that the *market* will *recover*. ↘', 'Người ta tin rằng thị trường sẽ phục hồi.'], ['The *company* is said to be *planning* a *merger*. ↘', 'Công ty được cho là đang lên kế hoạch sáp nhập.'], ['We had the *network* *upgraded* last *month*. ↘', 'Tháng trước chúng tôi cho nâng cấp mạng.']],
    hoithoai: {
      ctx: 'Em trao đổi tin thị trường với một chuyên viên phân tích nước ngoài.', vai: 'Anh Ken hỏi, em trả lời bằng văn phong khách quan.', ai: '📈 Analyst',
      luot: [
        T(["What's the news about the two local banks?", '', 'Tin gì về hai ngân hàng nội địa?'], ['They are said to be planning a merger, but nothing has been confirmed.', 'Họ được cho là đang lên kế hoạch sáp nhập, nhưng chưa có gì xác nhận.', 'is said to + chưa xác nhận.'], ['People say they merge sure.', 'Khẳng định chưa có cơ sở.'], ['They said to planning merger.', 'Sai cấu trúc.']),
        T(['And the market outlook?', '', 'Còn triển vọng thị trường?'], ["It's widely expected that interest rates will remain stable this year.", 'Người ta kỳ vọng rộng rãi lãi suất sẽ ổn định năm nay.', 'It is expected that.'], ['Interest rates expect stable.', 'Thiếu bị động.'], ['It expected rates stable.', 'Thiếu is, will remain.']),
        T(['How about your bank\'s IT system?', '', 'Còn hệ thống IT của ngân hàng bạn?'], ['We had all the branch servers upgraded last quarter, so it is much faster now.', 'Quý trước chúng tôi cho nâng cấp toàn bộ máy chủ chi nhánh, giờ nhanh hơn nhiều.', 'have + O + V3.'], ['We upgraded by someone.', 'Thiếu tự nhiên.'], ['We had upgrade servers.', 'have + O + V3.'])
      ], ket: 'Em đã dùng bị động nâng cao trong trao đổi chuyên môn.'
    },
    tom: ['It is said that…', 'S is said to / to have V3', 'have / get + O + V3'], nguphap: 'Bị động nâng cao; causative', phatam: 'believed /bɪˈliːvd/, estimated /ˈestɪmeɪtɪd/',
    loi: ['is said to having', 'have + O + V nguyên mẫu'], btvn: ['Viết lại 5 câu văn nói thành câu bị động khách quan', 'Viết 3 câu have something done về dịch vụ em đã dùng', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 4 ================= */
  const d4 = {
    n: 4, ten: plan[3].ten, kinds: K,
    muc: 'Rút gọn mệnh đề quan hệ bằng V-ing / V3 / to V; dùng mệnh đề phân từ để câu gọn và chuyên nghiệp hơn.',
    hoc: `${tbl(['Câu đầy đủ', 'Câu rút gọn'], [['Customers who use the app get 5% cashback.', 'Customers <b>using</b> the app get 5% cashback.'], ['The report which was sent yesterday has errors.', 'The report <b>sent</b> yesterday has errors.'], ['She was the first woman who became CEO.', 'She was the first woman <b>to become</b> CEO.'], ['After I had checked the data, I sent the email.', '<b>Having checked</b> the data, I sent the email.'], ['Because he felt tired, he went home early.', '<b>Feeling</b> tired, he went home early.']])}
      ${tip('⚠️ Mệnh đề phân từ phải <b>cùng chủ ngữ</b> với mệnh đề chính. ❌ <i>Walking to work, the rain started.</i> (mưa không đi bộ!)')}${G('rut-gon-mdqh', 'Rút gọn mệnh đề')}`,
    vocab: [
      w('cashback', '/ˈkæʃbæk/', 'hoàn tiền', '', ['Get 5% cashback on all purchases.', '', 'Hoàn 5% cho mọi giao dịch.']),
      w('applicant', '/ˈæplɪkənt/', 'người nộp đơn', '', ['Applicants having a degree will be preferred.', '', 'Ưu tiên người nộp đơn có bằng.']),
      w('attached', '/əˈtætʃt/', 'được đính kèm', '', ['Please read the file attached.', '', 'Vui lòng đọc file đính kèm.']),
      w('having completed', '/ˈhævɪŋ kəmˈpliːtɪd/', 'sau khi đã hoàn thành', '', ['Having completed the course, she got a promotion.', '', 'Hoàn thành khoá học, cô ấy được thăng chức.']),
      w('located', '/ˈloʊkeɪtɪd/', 'nằm ở', '', ['The office, located in District 3, is new.', '', 'Văn phòng ở Quận 3 còn mới.']),
      w('founded', '/ˈfaʊndɪd/', 'được thành lập', '', ['Founded in 1988, the bank now has 150 branches.', '', 'Thành lập năm 1988, ngân hàng nay có 150 chi nhánh.']),
      w('the latest', '/ðə ˈleɪtɪst/', 'mới nhất', '', ['The latest version fixes this bug.', '', 'Phiên bản mới nhất sửa lỗi này.']),
      w('eligible', '/ˈelɪdʒəbl/', 'đủ điều kiện', '', ['Staff working here for two years are eligible.', '', 'Nhân viên làm 2 năm đủ điều kiện.']),
      w('concise', '/kənˈsaɪs/', 'ngắn gọn, súc tích', '', ['Keep your emails concise.', '', 'Viết email ngắn gọn.']),
      w('dangling', '/ˈdæŋɡlɪŋ/', 'lơ lửng (lỗi ngữ pháp)', '', ['Avoid dangling participles.', '', 'Tránh phân từ lơ lửng.'])
    ],
    qs: [
      ['mc', 'Customers ___ the app before May will get a gift.', 'downloading', ['downloaded', 'who downloading', 'to download it'], 'Chủ động → V-ing.'],
      ['mc', 'The laptops ___ last week were faulty.', 'delivered', ['delivering', 'which delivering', 'to deliver'], 'Bị động → V3.'],
      ['mc', 'He was the youngest person ___ the award.', 'to win', ['winning', 'won', 'who winning'], 'the youngest + to V.'],
      ['mc', '___ the report, she sent it to the director.', 'Having finished', ['Finished', 'Having been finished', 'To finish'], 'Xong trước, cùng chủ ngữ.'],
      ['mc', 'Câu nào sai (phân từ lơ lửng)?', 'Driving to work, the phone rang.', ['Driving to work, I heard the phone ring.', 'Feeling tired, she went home.', 'Founded in 1988, the bank is very old.'], 'Điện thoại không lái xe.'],
      ['hear', 'Founded in 1988, the bank now has over one hundred and fifty branches.', 'Thành lập 1988, nay có hơn 150 chi nhánh.', ['Thành lập 1998, 115 chi nhánh.', 'Sẽ có 150 chi nhánh năm 1988.', 'Đóng cửa năm 1988.'], '1988 / 150.'],
      ['order', 'Sắp xếp: “Văn phòng nằm ở Quận 3 còn mới.”', ['The office', 'located', 'in District 3', 'is new.'], 'The office located in District 3 is new.']
    ],
    noi: [['*Customers* *using* the *app* → get *five* percent *cashback*. ↘', 'Khách dùng ứng dụng được hoàn 5%.'], ['*Having* *checked* the *data*, → I sent the *email*. ↘', 'Kiểm tra dữ liệu xong, tôi gửi email.'], ['*Founded* in nineteen eighty-*eight*, → the bank has over *150* *branches*. ↘', 'Thành lập năm 1988, ngân hàng có hơn 150 chi nhánh.']],
    hoithoai: {
      ctx: 'Em nhờ biên tập viên người Anh rút gọn đoạn giới thiệu công ty.', vai: 'Biên tập viên góp ý, em sửa câu.', ai: '✍️ Editor',
      luot: [
        T(['"Our company, which was founded in 2010, sells IT equipment." Can you make it shorter?', '', 'Rút gọn câu này được không?'], ['Founded in 2010, our company sells IT equipment.', 'Thành lập năm 2010, công ty chúng tôi bán thiết bị CNTT.', 'Phân từ V3 đầu câu.'], ['Founding in 2010, our company sells.', 'Bị động → V3.'], ['Our company founding in 2010.', 'Thiếu động từ chính.']),
        T(['"Customers who buy more than 10 units get free delivery."', '', '"Khách mua trên 10 chiếc được giao miễn phí."'], ['Customers buying more than 10 units get free delivery.', 'Khách mua trên 10 chiếc được miễn phí giao.', 'Chủ động → V-ing.'], ['Customers bought more than 10 units.', 'Sai nghĩa.'], ['Customers who buying.', 'Sai.']),
        T(['"After we had tested the product, we launched it." Make it formal.', '', 'Viết trang trọng hơn.'], ['Having tested the product, we launched it.', 'Kiểm thử xong, chúng tôi ra mắt sản phẩm.', 'Having V3.'], ['Tested the product, we launched.', 'Thiếu Having.'], ['Having testing the product.', 'Having + V3.'])
      ], ket: 'Em đã rút gọn câu chuyên nghiệp hơn.'
    },
    tom: ['V-ing / V3 / to V rút gọn', 'Having V3', 'Tránh phân từ lơ lửng'], nguphap: 'Mệnh đề quan hệ rút gọn; mệnh đề phân từ', phatam: 'Ngắt nhóm sau cụm phân từ đầu câu',
    loi: ['Phân từ lơ lửng', 'Having + V-ing'], btvn: ['Rút gọn 8 câu trong email/báo cáo của em', 'Viết đoạn giới thiệu công ty 80 từ dùng ≥ 3 phân từ', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 5 ================= */
  const d5 = {
    n: 5, ten: plan[4].ten, kinds: K,
    muc: 'Nói kế hoạch dài hạn và mốc hoàn thành: will be doing, will have done, will have been doing.',
    hoc: `${tbl(['Thì', 'Công thức', 'Ví dụ'], [['Tương lai tiếp diễn', 'will be + V-ing', 'This time next week, I will be flying to Tokyo.'], ['Tương lai hoàn thành', 'will have + V3', 'By 2030, we will have opened 20 new stores.'], ['TL hoàn thành tiếp diễn', 'will have been + V-ing', 'By December, I will have been working here for ten years.']])}
      ${exs([['Will you be using the meeting room at 3? (hỏi lịch sự)', 'Lúc 3 giờ anh có dùng phòng họp không?'], ["Don't call at 8 – we'll be having dinner.", 'Đừng gọi lúc 8 giờ – chúng tôi đang ăn tối.']])}
      ${tip('🎯 <b>by + mốc</b> (by 2030, by the end of the year, by the time…) → tương lai hoàn thành.')}${G('tuong-lai-nang-cao', 'Tương lai nâng cao')}`,
    vocab: [
      w('by the end of', '/baɪ ði end əv/', 'trước cuối (kỳ)', '', ['By the end of the year, we will have finished.', '', 'Trước cuối năm chúng tôi sẽ xong.']),
      w('milestone', '/ˈmaɪlstoʊn/', 'cột mốc', '', ['It was an important milestone.', '', 'Đó là cột mốc quan trọng.']),
      w('long-term', '/ˌlɔːŋ ˈtɜːrm/', 'dài hạn', '', ['What are your long-term goals?', '', 'Mục tiêu dài hạn của bạn là gì?']),
      w('roadmap', '/ˈroʊdmæp/', 'lộ trình', '', ['Here is our three-year roadmap.', '', 'Đây là lộ trình 3 năm.']),
      w('expand', '/ɪkˈspænd/', 'mở rộng', '', ['We plan to expand into Cambodia.', '', 'Chúng tôi dự định mở rộng sang Campuchia.']),
      w('target', '/ˈtɑːrɡɪt/', 'chỉ tiêu, mục tiêu', '', ['We will have reached our target by June.', '', 'Trước tháng 6 sẽ đạt chỉ tiêu.']),
      w('this time next year', '/ðɪs taɪm nekst jɪr/', 'giờ này năm sau', '', ['This time next year, I will be living in Canada.', '', 'Giờ này năm sau tôi sẽ đang sống ở Canada.']),
      w('pay off', '/peɪ ɔːf/', 'trả hết (nợ); mang lại kết quả', '', ['By 2030, I will have paid off my loan.', '', 'Trước 2030 tôi sẽ trả hết khoản vay.']),
      w('loan', '/loʊn/', 'khoản vay', '', ['She took out a loan to buy a house.', '', 'Cô ấy vay để mua nhà.']),
      w('anniversary', '/ˌænɪˈvɜːrsəri/', 'lễ kỷ niệm', '', ["It's our tenth anniversary.", '', 'Kỷ niệm 10 năm của chúng tôi.'])
    ],
    qs: [
      ['mc', 'This time tomorrow, I ___ on a beach in Phu Quoc.', 'will be lying', ['will lie', 'will have lain', 'lie'], 'Đang diễn ra lúc tương lai.'],
      ['mc', 'By 2030, we ___ 50 branches.', 'will have opened', ['will open', 'will be opening', 'open'], 'by + mốc → hoàn thành.'],
      ['mc', 'By next June, she ___ here for five years.', 'will have been working', ['will work', 'is working', 'will be work'], 'Quá trình tới mốc.'],
      ['mc', '___ you be using the car tonight?', 'Will', ['Are', 'Do', 'Have'], 'Hỏi lịch sự kế hoạch.'],
      ['mc', 'milestone nghĩa là?', 'cột mốc', ['dặm đường', 'lộ trình', 'chỉ tiêu'], 'milestone.'],
      ['hear', "By the end of next year, we'll have moved all our customers to the new platform.", 'Cuối năm sau sẽ chuyển xong toàn bộ khách sang nền tảng mới.', ['Đang chuyển năm nay.', 'Bắt đầu chuyển năm sau.', 'Không chuyển.'], "will have moved."],
      ['order', 'Sắp xếp: “Trước 2030 tôi sẽ trả hết khoản vay.”', ['By 2030,', 'I', 'will have', 'paid off', 'my loan.'], 'By 2030, I will have paid off my loan.']
    ],
    noi: [['*This* time next *week*, → I\'ll be *flying* to *Tokyo*. ↘', 'Giờ này tuần sau tôi đang bay đi Tokyo.'], ["By *twenty* *thirty*, → we'll have opened *twenty* new *stores*. ↘", 'Đến 2030 chúng tôi sẽ mở 20 cửa hàng.'], ['Will you be *using* the meeting *room* at *three*? ↗', 'Lúc 3 giờ anh có dùng phòng họp không?']],
    hoithoai: {
      ctx: 'Giám đốc khu vực hỏi em về lộ trình chuyển đổi số 3 năm của chi nhánh.', vai: 'Bà Wong hỏi, em trình bày.', ai: '👩‍💼 Ms. Wong',
      luot: [
        T(["Where will your branch be in three years?", '', '3 năm nữa chi nhánh sẽ thế nào?'], ["By 2029, we'll have moved 90% of transactions to digital channels.", 'Đến 2029 sẽ chuyển 90% giao dịch sang kênh số.', 'Tương lai hoàn thành.'], ['By 2029, we move 90%.', 'Thiếu will have.'], ["By 2029, we'll be moved.", 'Sai cấu trúc.']),
        T(["And what will your team be doing next year?", '', 'Năm sau đội của bạn sẽ làm gì?'], ["We'll be training all staff to use the new system.", 'Chúng tôi sẽ đào tạo toàn bộ nhân viên dùng hệ thống mới.', 'Tương lai tiếp diễn.'], ["We'll have trained next year doing.", 'Câu rối.'], ['We train staff yesterday.', 'Sai thì.']),
        T(["Sounds ambitious. Any milestones?", '', 'Tham vọng đấy. Có cột mốc nào?'], ["Yes. By the end of June, we'll have finished the pilot in two branches.", 'Có. Trước cuối tháng 6 sẽ xong thí điểm ở 2 chi nhánh.', 'by + mốc.'], ['By June we finish pilot.', 'Thiếu thì.'], ['Milestone is June.', 'Thiếu thông tin.'])
      ], ket: 'Em đã trình bày lộ trình dài hạn chuyên nghiệp.'
    },
    tom: ['will be + V-ing', 'will have + V3', 'will have been + V-ing'], nguphap: 'Tương lai tiếp diễn / hoàn thành', phatam: "we'll have /wiːl əv/ đọc lướt",
    loi: ['Thiếu have', 'by + tương lai đơn'], btvn: ['Viết lộ trình 5 năm của em, 120 từ', 'Viết 4 câu "This time next year…"', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 6 ================= */
  const d6 = {
    n: 6, ten: plan[5].ten, kinds: K,
    muc: 'Suy đoán và đánh giá việc đã xảy ra: must / might / can\'t have V3; should / shouldn\'t have; could have; needn\'t have.',
    hoc: `${tbl(['Cấu trúc', 'Nghĩa', 'Ví dụ'], [['must have V3', 'chắc hẳn đã', 'He must have missed the train.'], ['might / could have V3', 'có lẽ đã', 'The email might have gone to spam.'], ["can't / couldn't have V3", 'không thể nào đã', "She can't have seen it – she was on holiday."], ['should have V3', 'lẽ ra nên (nhưng không)', 'We should have checked the contract.'], ['could have V3', 'lẽ ra đã có thể', 'You could have asked me for help!'], ["needn't have V3", 'đã làm nhưng không cần', "You needn't have brought food – there was plenty."]])}
      ${G('khuyet-thieu-hoan-thanh', 'Modal + have V3')}`,
    vocab: [
      w('must have', '/mʌst həv/', 'chắc hẳn đã', '', ['She must have left already.', '', 'Chắc cô ấy về rồi.']),
      w('should have', '/ʃʊd həv/', 'lẽ ra nên', '', ['I should have told you.', '', 'Lẽ ra tôi nên nói với bạn.']),
      w('could have', '/kʊd həv/', 'lẽ ra có thể', '', ['It could have been worse.', '', 'Lẽ ra có thể tệ hơn.']),
      w("needn't have", '/ˈniːdnt həv/', 'lẽ ra không cần', '', ["You needn't have worried.", '', 'Bạn đã không cần lo.']),
      w('blame', '/bleɪm/', 'đổ lỗi', '', ["Don't blame yourself.", '', 'Đừng tự trách.']),
      w('overlook', '/ˌoʊvərˈlʊk/', 'bỏ sót', '', ['We overlooked an important detail.', '', 'Chúng tôi bỏ sót một chi tiết quan trọng.']),
      w('misunderstanding', '/ˌmɪsʌndərˈstændɪŋ/', 'sự hiểu lầm', '', ['It was just a misunderstanding.', '', 'Chỉ là hiểu lầm.']),
      w('responsible', '/rɪˈspɑːnsəbl/', 'chịu trách nhiệm', '', ['Who is responsible for this?', '', 'Ai chịu trách nhiệm việc này?']),
      w('in time', '/ɪn taɪm/', 'kịp lúc', '', ['We fixed it just in time.', '', 'Chúng tôi sửa kịp lúc.']),
      w('to be fair', '/tə biː fer/', 'công bằng mà nói', '', ['To be fair, he did warn us.', '', 'Công bằng mà nói, anh ấy đã cảnh báo.'])
    ],
    qs: [
      ['mc', 'The door was unlocked. Someone ___ it open.', 'must have left', ["can't have left", 'should have left', 'must leave'], 'Chắc hẳn đã.'],
      ['mc', 'We missed the deadline. We ___ earlier.', 'should have started', ['must have started', "can't have started", 'should start'], 'Lẽ ra nên.'],
      ['mc', "He ___ the report – he was off sick all week.", "can't have written", ['must have written', 'should have written', "needn't write"], 'Không thể đã.'],
      ['mc', "You ___ a taxi. I could have picked you up.", "needn't have taken", ["mustn't have taken", "can't take", "shouldn't take"], 'Đã làm nhưng không cần.'],
      ['mc', 'overlook nghĩa là?', 'bỏ sót', ['nhìn bao quát', 'giám sát', 'xem lại'], 'overlook.'],
      ['hear', "To be fair, it could have been much worse. Luckily, we noticed the error in time.", 'Lẽ ra còn tệ hơn; may phát hiện kịp.', ['Rất tệ, không phát hiện kịp.', 'Không có lỗi.', 'Lỗi do người khác.'], 'could have been worse / in time.'],
      ['order', 'Sắp xếp: “Lẽ ra tôi nên nói với bạn.”', ['I', 'should have', 'told', 'you.'], 'I should have told you.']
    ],
    noi: [['We *should* have *checked* the *contract*. ↘', 'Lẽ ra phải kiểm tra hợp đồng.'], ['It *could* have been much *worse*. ↘', 'Lẽ ra còn tệ hơn.'], ["You *needn't* have *worried*. ↘", 'Bạn đã không cần lo.']],
    hoithoai: {
      ctx: 'Khách hàng phàn nàn hợp đồng sai giá; em cùng đồng nghiệp tìm nguyên nhân.', vai: 'Đồng nghiệp đoán, em đánh giá.', ai: '👨 Hung',
      luot: [
        T(['How did the wrong price get into the contract?', '', 'Sao giá sai lại vào hợp đồng?'], ['Someone must have used the old price list.', 'Chắc ai đó dùng bảng giá cũ.', 'must have V3.'], ['Someone must use old price.', 'Quá khứ → must have used.'], ['Someone should have used old.', 'Sai nghĩa.']),
        T(["Could it have been the new intern?", '', 'Có thể là thực tập sinh mới không?'], ["She can't have done it – she doesn't have access to the system.", 'Không thể là cô ấy – cô ấy không có quyền truy cập hệ thống.', "can't have V3."], ['She must have done it surely.', 'Chưa có cơ sở.'], ["She can't did it.", "can't have done."]),
        T(['So what should we do now?', '', 'Giờ làm gì?'], ["We should have double-checked before sending. From now on, two people will review every contract.", 'Lẽ ra phải kiểm tra lại trước khi gửi. Từ giờ hai người sẽ duyệt mỗi hợp đồng.', 'should have + giải pháp.'], ['We needn\'t have checked.', 'Sai nghĩa.'], ['Blame the intern.', 'Đổ lỗi vô căn cứ.'])
      ], ket: 'Em đã suy luận và rút kinh nghiệm chuyên nghiệp.'
    },
    tom: ['must / might / can\'t have V3', 'should / could / needn\'t have V3'], nguphap: 'Modal + have + V3', phatam: "should have /ˈʃʊdəv/; can't have /ˈkæntəv/",
    loi: ['should of (viết sai)', 'must + V2'], btvn: ['Viết 6 câu đánh giá một dự án đã qua', 'Viết email rút kinh nghiệm 120 từ', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 7 ================= */
  const d7 = {
    n: 7, ten: plan[6].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Ôn giai đoạn 1: điều kiện 3 và hỗn hợp, câu ước, bị động nâng cao, rút gọn mệnh đề, tương lai nâng cao, modal hoàn thành.',
    hoc: `<h4>Tóm tắt tuần 1</h4>${tbl(['Chủ điểm', 'Mẫu câu'], [['Điều kiện 3 / hỗn hợp', "If I had known, I would have… / …I would be… now"], ['Câu ước', "I wish I had… / I wish I hadn't… / If only…"], ['Bị động nâng cao', 'It is believed that… / is said to have…'], ['Rút gọn', 'Customers using… / Founded in… / Having checked…'], ['Tương lai nâng cao', "By 2030, we'll have… / This time next week, I'll be…"], ['Modal hoàn thành', "must have / should have / can't have + V3"]])}`,
    qs: [['mc', 'I wish I ___ that job offer.', 'had accepted', ['accepted', 'accept', 'would accept yesterday'], 'Hối tiếc quá khứ.'], ['mc', 'By December, she ___ the course.', 'will have completed', ['will complete', 'completes', 'is completing'], 'by + mốc.']],
    noi: [["If I'd *known*, → I would have *helped*. ↘", 'Nếu biết, tôi đã giúp.'], ['It is *believed* that the *market* will *recover*. ↘', 'Người ta tin thị trường sẽ phục hồi.']],
    hoithoai: {
      ctx: 'Tổng ôn: trò chuyện với mentor nước ngoài về sự nghiệp.', vai: 'Mentor hỏi, em trả lời nâng cao.', ai: '🧑‍🏫 Mentor',
      luot: [
        T(['What would you have done differently in your career?', '', 'Bạn sẽ làm khác điều gì trong sự nghiệp?'], ["If I had focused on English earlier, I would have got a regional role by now.", 'Nếu tập trung tiếng Anh sớm hơn, giờ tôi đã có vị trí khu vực.', 'Điều kiện loại 3 / hỗn hợp.'], ['If I focus English, I get role.', 'Sai loại.'], ['If I had focus, I would get.', 'Sai dạng.']),
        T(['Any regrets?', '', 'Hối tiếc gì không?'], ["I wish I hadn't turned down the offer from Singapore.", 'Ước gì tôi đã không từ chối lời mời từ Singapore.', "wish + hadn't V3."], ["I wish I didn't turn down.", 'Quá khứ → hadn\'t turned.'], ['I regret to turn down.', 'regret + V-ing.']),
        T(['Where will you be in five years?', '', '5 năm nữa bạn ở đâu?'], ["By then, I'll have got IELTS 7.0, and I'll be leading a regional IT team.", 'Lúc đó tôi đã có IELTS 7.0 và đang dẫn dắt đội IT khu vực.', 'Tương lai hoàn thành + tiếp diễn.'], ["I'll get IELTS by then lead.", 'Câu rối.'], ['I have got IELTS in five years.', 'Sai thì.']),
        T(['The last project failed. Why?', '', 'Dự án trước thất bại. Vì sao?'], ['We must have underestimated the training time. We should have planned better.', 'Chắc chúng tôi đánh giá thấp thời gian đào tạo. Lẽ ra phải lập kế hoạch tốt hơn.', 'must have + should have.'], ['We must underestimate.', 'Quá khứ.'], ['We should planned.', 'should have planned.'])
      ], ket: 'Em đã ôn trọn giai đoạn ngữ pháp nâng cao!'
    },
    tom: ['Ôn tuần 1', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn', phatam: 'Ôn dạng rút gọn và nối âm modal',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: học lại ngày yếu', 'Làm 6 chủ điểm B2 trong Sổ tay ngữ pháp', 'Ghi âm 1 phút "My biggest lesson"']
  };

  /* ================= NGÀY 8 ================= */
  const d8 = {
    n: 8, ten: plan[7].ten, kinds: K,
    muc: 'Dùng đúng từ nối học thuật theo chức năng và cấu trúc: although / despite / however / whereas / nevertheless / furthermore / consequently.',
    hoc: `${tbl(['Chức năng', '+ mệnh đề', '+ danh từ / V-ing', 'Đầu câu (có dấu phẩy)'], [['Tương phản', 'although, even though, while, whereas', 'despite, in spite of', 'However, Nevertheless, Nonetheless'], ['Nguyên nhân', 'because, since, as', 'because of, due to, owing to', '—'], ['Kết quả', 'so', '—', 'Therefore, Consequently, As a result'], ['Bổ sung', '—', 'in addition to, besides', 'Furthermore, Moreover, In addition'], ['Ví dụ', '—', 'such as', 'For instance, For example']])}
      ${say('Although digital banking is convenient, many elderly customers still prefer to visit a branch. Consequently, banks need to keep some branches open.', 'Dù ngân hàng số tiện lợi, nhiều khách lớn tuổi vẫn thích đến chi nhánh. Vì vậy ngân hàng cần giữ lại một số chi nhánh.')}
      ${G('lien-tu', 'Từ nối và liên từ')}`,
    vocab: [
      w('although', '/ɔːlˈðoʊ/', 'mặc dù', '+ mệnh đề.', ['Although it was late, we kept working.', '', 'Dù muộn, chúng tôi vẫn làm.']),
      w('despite', '/dɪˈspaɪt/', 'bất chấp, mặc dù', '+ N / V-ing.', ['Despite the rain, the event went ahead.', '', 'Dù mưa, sự kiện vẫn diễn ra.']),
      w('whereas', '/werˈæz/', 'trong khi (đối lập)', '', ['I prefer tea, whereas my wife likes coffee.', '', 'Tôi thích trà, còn vợ tôi thích cà phê.']),
      w('nevertheless', '/ˌnevərðəˈles/', 'tuy nhiên, dù vậy', '', ['It was risky. Nevertheless, we did it.', '', 'Rủi ro. Dù vậy chúng tôi vẫn làm.']),
      w('consequently', '/ˈkɑːnsəkwentli/', 'do đó', '', ['Sales fell. Consequently, costs were cut.', '', 'Doanh số giảm. Do đó chi phí bị cắt.']),
      w('furthermore', '/ˈfɜːrðərmɔːr/', 'hơn nữa', '', ['Furthermore, it is environmentally friendly.', '', 'Hơn nữa, nó thân thiện môi trường.']),
      w('owing to', '/ˈoʊɪŋ tuː/', 'do, vì', '+ N.', ['Owing to bad weather, the flight was delayed.', '', 'Do thời tiết xấu, chuyến bay trễ.']),
      w('for instance', '/fər ˈɪnstəns/', 'ví dụ', '', ['For instance, Singapore has strict laws.', '', 'Ví dụ, Singapore có luật nghiêm.']),
      w('in contrast', '/ɪn ˈkɑːntræst/', 'ngược lại', '', ['In contrast, rural areas grew slowly.', '', 'Ngược lại, nông thôn tăng chậm.']),
      w('as well as', '/æz wel æz/', 'cũng như', '', ['She speaks English as well as Korean.', '', 'Cô ấy nói tiếng Anh cũng như tiếng Hàn.'])
    ],
    qs: [
      ['mc', '___ the high price, the product sold well.', 'Despite', ['Although', 'However', 'Whereas'], '+ danh từ.'],
      ['mc', '___ the price was high, the product sold well.', 'Although', ['Despite', 'In spite of', 'Owing to'], '+ mệnh đề.'],
      ['mc', 'The plan was expensive. ___, the board approved it.', 'Nevertheless', ['Although', 'Despite', 'Whereas'], 'Đầu câu, có dấu phẩy.'],
      ['mc', 'City incomes rose, ___ rural incomes fell.', 'whereas', ['despite', 'consequently', 'furthermore'], 'Đối lập hai vế.'],
      ['mc', 'The road was closed ___ an accident.', 'owing to', ['although', 'whereas', 'consequently'], '+ danh từ.'],
      ['hear', "Although online banking is convenient, many older customers still prefer branches. Consequently, banks keep some open.", 'Dù tiện lợi, khách lớn tuổi vẫn thích chi nhánh; do đó ngân hàng giữ lại một số.', ['Ngân hàng đóng hết chi nhánh.', 'Khách lớn tuổi thích online.', 'Online không tiện.'], 'Although … Consequently…'],
      ['order', 'Sắp xếp: “Dù mưa, sự kiện vẫn diễn ra.”', ['Despite', 'the rain,', 'the event', 'went ahead.'], 'Despite the rain, the event went ahead.']
    ],
    noi: [['*Although* it was *late*, → we kept *working*. ↘', 'Dù muộn, chúng tôi vẫn làm.'], ['I prefer *tea*, → *whereas* my wife likes *coffee*. ↘', 'Tôi thích trà, còn vợ tôi thích cà phê.'], ['*Consequently*, → banks need to keep some *branches* *open*. ↘', 'Do đó ngân hàng cần giữ một số chi nhánh.']],
    hoithoai: {
      ctx: 'Gia sư AI chữa câu trong bài viết IELTS của em.', vai: 'Gia sư chỉ lỗi, em sửa.', ai: '🤖 Tutor',
      luot: [
        T(['"Despite it was expensive, people bought it." What\'s wrong?', '', 'Câu này sai ở đâu?'], ['Despite needs a noun. It should be "Although it was expensive, people bought it."', 'Despite cần danh từ. Phải là "Although it was expensive…"', 'Sửa đúng.'], ['It should be "Despite of it was expensive."', 'Vẫn sai.'], ['Nothing is wrong.', 'Sai.']),
        T(['"Sales rose, however costs rose too." Fix the punctuation.', '', 'Sửa dấu câu.'], ['Sales rose. However, costs rose too.', 'Doanh số tăng. Tuy nhiên chi phí cũng tăng.', 'However đầu câu, có dấu phẩy.'], ['Sales rose however, costs rose.', 'Vẫn sai dấu.'], ['Sales rose, however costs, rose.', 'Sai.']),
        T(['Combine: "Hanoi is cold in winter. Saigon is hot all year." Use a contrast linker.', '', 'Nối hai câu bằng từ đối lập.'], ['Hanoi is cold in winter, whereas Saigon is hot all year.', 'Hà Nội lạnh mùa đông, còn Sài Gòn nóng quanh năm.', 'whereas.'], ['Hanoi is cold despite Saigon is hot.', 'despite + mệnh đề sai.'], ['Hanoi is cold. Consequently, Saigon is hot.', 'Sai quan hệ nghĩa.'])
      ], ket: 'Em đã sửa lỗi từ nối học thuật.'
    },
    tom: ['Từ nối theo chức năng', '+ mệnh đề / + danh từ / đầu câu', 'Dấu câu với However'], nguphap: 'Liên từ và từ nối', phatam: 'Ngắt sau từ nối đầu câu',
    loi: ['Despite + mệnh đề', 'However nối hai mệnh đề bằng dấu phẩy'], btvn: ['Viết đoạn 150 từ dùng ≥ 6 từ nối khác nhau', 'Sửa từ nối trong một bài viết cũ', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 9 ================= */
  const d9 = {
    n: 9, ten: plan[8].ten, kinds: K,
    muc: 'Dùng 20 cụm động từ hay gặp trong công việc; hiểu khi nào tách được tân ngữ.',
    hoc: `${tbl(['Cụm', 'Nghĩa', 'Ví dụ'], [['bring up', 'nêu ra (vấn đề)', 'She brought up the budget issue.'], ['carry out', 'tiến hành', 'We carried out a customer survey.'], ['come up with', 'nghĩ ra', 'He came up with a great idea.'], ['deal with', 'xử lý', 'I deal with complaints every day.'], ['figure out', 'tìm ra', "We can't figure out the cause."], ['follow up', 'theo dõi tiếp', "I'll follow up with the client."], ['look into', 'xem xét', "We're looking into the problem."], ['put off', 'trì hoãn', 'The launch was put off until May.'], ['set up', 'thành lập, cài đặt', 'They set up a new company.'], ['run out of', 'hết', 'We ran out of toner.'], ['turn down', 'từ chối', 'She turned down the offer.'], ['take over', 'tiếp quản', 'Lan will take over the project.'], ['point out', 'chỉ ra', 'He pointed out two errors.'], ['back up', 'sao lưu; ủng hộ', 'Back up your files. / The data backs up our claim.']])}
      ${tip('🔑 Cụm tách được + đại từ: đại từ phải đứng giữa: <i>turn <b>it</b> down, set <b>it</b> up</i> (❌ set up it).')}${G('cum-dong-tu', 'Cụm động từ')}`,
    vocab: [
      w('bring up', '/brɪŋ ʌp/', 'nêu ra', '', ['I want to bring up a problem.', '', 'Tôi muốn nêu một vấn đề.']),
      w('carry out', '/ˈkæri aʊt/', 'tiến hành', '', ['We carried out a survey.', '', 'Chúng tôi tiến hành khảo sát.']),
      w('come up with', '/kʌm ʌp wɪð/', 'nghĩ ra', '', ['Can you come up with a solution?', '', 'Bạn nghĩ ra giải pháp được không?']),
      w('figure out', '/ˈfɪɡjər aʊt/', 'tìm ra, hiểu ra', '', ["I can't figure out this error.", '', 'Tôi không tìm ra lỗi này.']),
      w('put off', '/pʊt ɔːf/', 'trì hoãn', '', ["Don't put off important tasks.", '', 'Đừng trì hoãn việc quan trọng.']),
      w('take over', '/teɪk ˈoʊvər/', 'tiếp quản', '', ['She will take over my role.', '', 'Cô ấy sẽ tiếp quản vai trò của tôi.']),
      w('point out', '/pɔɪnt aʊt/', 'chỉ ra', '', ['He pointed out a mistake.', '', 'Anh ấy chỉ ra một lỗi.']),
      w('turn down', '/tɜːrn daʊn/', 'từ chối', '', ['They turned down our proposal.', '', 'Họ từ chối đề xuất của chúng tôi.']),
      w('set up', '/set ʌp/', 'thiết lập, cài đặt', '', ['Can you set up the printer?', '', 'Bạn cài máy in được không?']),
      w('run out of', '/rʌn aʊt əv/', 'hết', '', ["We've run out of time.", '', 'Chúng ta hết thời gian rồi.'])
    ],
    qs: [
      ['mc', 'The meeting has been ___ until next week.', 'put off', ['put out', 'set up', 'taken over'], 'Hoãn.'],
      ['mc', "We need to ___ why the system keeps crashing.", 'figure out', ['turn down', 'put off', 'bring up'], 'Tìm ra.'],
      ['mc', 'Câu đúng là?', 'Please set it up before 9.', ['Please set up it before 9.', 'Please set it before up 9.', 'Please up set it.'], 'Đại từ ở giữa.'],
      ['mc', 'Who will ___ the project when you leave?', 'take over', ['take off', 'take after', 'take in'], 'Tiếp quản.'],
      ['mc', 'She ___ a brilliant marketing idea.', 'came up with', ['came across to', 'came over', 'came down'], 'Nghĩ ra.'],
      ['hear', "In the meeting, Lan brought up the budget issue and pointed out three errors in the report.", 'Lan nêu vấn đề ngân sách và chỉ ra 3 lỗi trong báo cáo.', ['Lan sửa 3 lỗi.', 'Lan hoãn báo cáo.', 'Lan từ chối ngân sách.'], 'brought up / pointed out.'],
      ['order', 'Sắp xếp: “Chúng tôi hết giấy in.”', ['We', 'have run', 'out of', 'paper.'], 'We have run out of paper.']
    ],
    noi: [["I'd like to *bring* *up* a *problem*. ↘", 'Tôi muốn nêu một vấn đề.'], ["We can't *figure* *out* the *cause*. ↘", 'Chúng tôi chưa tìm ra nguyên nhân.'], ["Lan will *take* *over* the *project*. ↘", 'Lan sẽ tiếp quản dự án.']],
    hoithoai: {
      ctx: 'Họp nhanh với trưởng nhóm người Úc về sự cố máy in và dự án.', vai: 'Trưởng nhóm hỏi, em trả lời bằng cụm động từ.', ai: '🧑‍💼 Lead',
      luot: [
        T(['Any updates on the printer problem?', '', 'Có cập nhật gì về sự cố máy in?'], ["We've looked into it. The office ran out of toner, and nobody ordered more.", 'Chúng tôi đã kiểm tra. Văn phòng hết mực mà không ai đặt thêm.', 'look into, run out of.'], ['We looked it into.', 'look into không tách.'], ['The office ran out toner.', 'run out of.']),
        T(['OK. And the training project?', '', 'Còn dự án đào tạo?'], ["We've put it off until June because the trainer is ill.", 'Chúng tôi hoãn đến tháng 6 vì người đào tạo bị ốm.', 'put it off.'], ["We've put off it.", 'Đại từ ở giữa.'], ['We put on it.', 'Sai nghĩa.']),
        T(["Who's going to deal with it while you're on leave?", '', 'Ai lo khi bạn nghỉ phép?'], ['Minh will take over, and he\'ll follow up with the trainer next week.', 'Minh sẽ tiếp quản và tuần sau sẽ liên hệ lại với người đào tạo.', 'take over, follow up.'], ['Minh will take after.', 'take after = giống (người thân).'], ['Nobody deals it.', 'deal with.'])
      ], ket: 'Em đã dùng cụm động từ tự nhiên trong công việc.'
    },
    tom: ['14 cụm động từ công sở', 'Tách được / không tách', 'Đại từ ở giữa'], nguphap: 'Phrasal verbs', phatam: 'Nhấn tiểu từ: set *UP*, figure *OUT*',
    loi: ['set up it', 'look it into'], btvn: ['Viết email 100 từ dùng ≥ 5 cụm động từ', 'Làm flashcard 14 cụm', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 10 ================= */
  const d10 = {
    n: 10, ten: plan[9].ten, kinds: K,
    muc: 'Dùng kết hợp từ (collocations) công sở và học thuật như người bản xứ: make a decision, meet a deadline, strong evidence…',
    hoc: `${tbl(['Động từ', 'Danh từ đi kèm'], [['make', 'a decision, an effort, progress, a profit, a complaint, an appointment'], ['do', 'business, research, a favour, damage, your best'], ['take', 'action, responsibility, a risk, advantage of, measures'], ['meet', 'a deadline, a target, requirements, expectations'], ['raise', 'awareness, money, a concern, prices'], ['reach', 'an agreement, a decision, a conclusion']])}
      ${tbl(['Tính từ + danh từ', 'Không nói'], [['heavy traffic', 'strong traffic'], ['strong evidence', 'big evidence'], ['high / low price', 'expensive / cheap price'], ['a sharp increase', 'a big quick increase'], ['a tight deadline', 'a short deadline (ít dùng)'], ['common sense', 'normal sense']])}
      ${G('collocation', 'Kết hợp từ')}`,
    vocab: [
      w('meet a deadline', '/miːt ə ˈdedlaɪn/', 'kịp hạn chót', '', ['We worked late to meet the deadline.', '', 'Chúng tôi làm muộn để kịp hạn.']),
      w('take responsibility', '/teɪk rɪˌspɑːnsəˈbɪləti/', 'nhận trách nhiệm', '', ['A good leader takes responsibility.', '', 'Lãnh đạo giỏi nhận trách nhiệm.']),
      w('raise awareness', '/reɪz əˈwernəs/', 'nâng cao nhận thức', '', ['We want to raise awareness of scams.', '', 'Chúng tôi muốn nâng cao nhận thức về lừa đảo.']),
      w('reach an agreement', '/riːtʃ ən əˈɡriːmənt/', 'đạt thoả thuận', '', ['Both sides reached an agreement.', '', 'Hai bên đạt thoả thuận.']),
      w('make progress', '/meɪk ˈprɑːɡres/', 'tiến bộ', '', ["You've made great progress.", '', 'Bạn tiến bộ rất nhiều.']),
      w('do research', '/duː rɪˈsɜːrtʃ/', 'nghiên cứu', '', ['We did some market research.', '', 'Chúng tôi làm khảo sát thị trường.']),
      w('take measures', '/teɪk ˈmeʒərz/', 'áp dụng biện pháp', '', ['The bank took measures to stop fraud.', '', 'Ngân hàng áp dụng biện pháp chống gian lận.']),
      w('tight deadline', '/taɪt ˈdedlaɪn/', 'hạn chót gấp', '', ["We're working to a tight deadline.", '', 'Chúng tôi làm với hạn gấp.']),
      w('strong evidence', '/strɔːŋ ˈevɪdəns/', 'bằng chứng thuyết phục', '', ['There is strong evidence for this.', '', 'Có bằng chứng thuyết phục cho điều này.']),
      w('raise a concern', '/reɪz ə kənˈsɜːrn/', 'nêu một mối lo ngại', '', ['Several staff raised concerns.', '', 'Nhiều nhân viên nêu lo ngại.'])
    ],
    qs: [
      ['mc', 'We need to ___ a decision by Friday.', 'make', ['do', 'take place', 'reach to'], 'make a decision.'],
      ['mc', 'The campaign aims to ___ awareness of online scams.', 'raise', ['rise', 'make', 'do'], 'raise awareness.'],
      ['mc', "I'm afraid we can't ___ the deadline.", 'meet', ['make up', 'catch', 'do'], 'meet a deadline.'],
      ['mc', 'There was ___ traffic this morning.', 'heavy', ['strong', 'big', 'thick'], 'heavy traffic.'],
      ['mc', 'The government should ___ measures to reduce pollution.', 'take', ['make', 'do', 'give'], 'take measures.'],
      ['hear', "After three long meetings, both sides finally reached an agreement.", 'Sau 3 cuộc họp, hai bên đạt thoả thuận.', ['Hai bên không đồng ý.', 'Họ hoãn cuộc họp.', 'Chỉ một bên đồng ý.'], 'reached an agreement.'],
      ['order', 'Sắp xếp: “Bạn tiến bộ rất nhiều.”', ["You've", 'made', 'great', 'progress.'], "You've made great progress."]
    ],
    noi: [['We worked *late* → to *meet* the *deadline*. ↘', 'Làm muộn để kịp hạn.'], ['Both *sides* reached an *agreement*. ↘', 'Hai bên đạt thoả thuận.'], ['The bank took *measures* → to stop *fraud*. ↘', 'Ngân hàng áp dụng biện pháp chống gian lận.']],
    hoithoai: {
      ctx: 'Em báo cáo dự án chống lừa đảo trực tuyến với giám đốc người Anh.', vai: 'Giám đốc hỏi, em dùng collocation chuẩn.', ai: '👨‍💼 Director',
      luot: [
        T(["What has the team done so far?", '', 'Đội đã làm gì đến giờ?'], ["We've done some research and launched a campaign to raise awareness of phone scams.", 'Đã nghiên cứu và chạy chiến dịch nâng cao nhận thức về lừa đảo qua điện thoại.', 'do research, raise awareness.'], ["We've made research and risen awareness.", 'Sai collocation.'], ['We did awareness.', 'Sai.']),
        T(['Are we on schedule?', '', 'Có đúng tiến độ không?'], ["It's a tight deadline, but we've made good progress, so we should meet it.", 'Hạn gấp, nhưng đã tiến bộ tốt nên sẽ kịp.', 'tight deadline, make progress, meet it.'], ["It's a strong deadline, we do progress.", 'Sai collocation.'], ['We will catch the deadline.', 'meet a deadline.']),
        T(['Any concerns?', '', 'Có lo ngại gì không?'], ['Some branch managers raised concerns about training time, so we\'re taking measures to shorten it.', 'Một số giám đốc chi nhánh lo về thời gian đào tạo nên chúng tôi đang có biện pháp rút ngắn.', 'raise concerns, take measures.'], ['Managers rose concerns.', 'raise (ngoại động từ).'], ['We make measures.', 'take measures.'])
      ], ket: 'Em đã báo cáo bằng collocation tự nhiên.'
    },
    tom: ['make / do / take / meet / raise / reach', 'Tính từ + danh từ đúng cặp'], nguphap: 'Collocations', phatam: 'Đọc cụm liền: meet‿a deadline',
    loi: ['do a decision', 'rise awareness'], btvn: ['Viết 10 câu với 10 collocation mới', 'Tìm 5 collocation trong một bài báo tiếng Anh', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 11 ================= */
  const d11 = {
    n: 11, ten: plan[10].ten, kinds: K,
    muc: 'Viết IELTS Writing Task 1 (150 từ): mở bài, tổng quan, hai đoạn chi tiết với so sánh và số liệu.',
    hoc: `<h4>1. Bố cục 4 đoạn</h4>${tbl(['Đoạn', 'Nội dung', 'Câu mẫu'], [['Mở bài', 'Viết lại đề bằng từ khác', 'The line graph illustrates how … changed between 2015 and 2025.'], ['Tổng quan', '2 đặc điểm nổi bật, KHÔNG số liệu', 'Overall, … increased significantly, while … remained relatively stable.'], ['Chi tiết 1', 'Nhóm số liệu thứ nhất + so sánh', 'In 2015, … stood at…, before rising sharply to… by 2025.'], ['Chi tiết 2', 'Nhóm thứ hai + so sánh', 'By contrast, … fluctuated between … and …']])}
      <h4>2. Cụm so sánh hay</h4><ul><li>twice / three times as high as · more than double · roughly a third</li><li>the highest / lowest figure · reach a peak of · hit a low of</li><li>respectively (lần lượt): <i>30% and 45% respectively</i></li></ul>
      ${tip('⏱ 20 phút: 3 phút phân tích, 15 phút viết, 2 phút kiểm tra. Đoạn tổng quan là phần quan trọng nhất để đạt band 6+.')}`,
    vocab: [
      w('illustrate', '/ˈɪləstreɪt/', 'minh hoạ, thể hiện', '', ['The chart illustrates sales by region.', '', 'Biểu đồ thể hiện doanh số theo vùng.']),
      w('overall', '/ˌoʊvərˈɔːl/', 'nhìn chung', '', ['Overall, prices increased.', '', 'Nhìn chung giá tăng.']),
      w('stand at', '/stænd æt/', 'ở mức', '', ['Unemployment stood at 5%.', '', 'Thất nghiệp ở mức 5%.']),
      w('respectively', '/rɪˈspektɪvli/', 'lần lượt', '', ['A and B rose by 10% and 20% respectively.', '', 'A và B tăng lần lượt 10% và 20%.']),
      w('proportion', '/prəˈpɔːrʃn/', 'tỷ lệ', '', ['The proportion of young users is high.', '', 'Tỷ lệ người dùng trẻ cao.']),
      w('roughly', '/ˈrʌfli/', 'xấp xỉ', '', ['Roughly a third of staff work remotely.', '', 'Khoảng một phần ba nhân viên làm từ xa.']),
      w('double', '/ˈdʌbl/', 'tăng gấp đôi', '', ['The figure doubled in five years.', '', 'Con số tăng gấp đôi trong 5 năm.']),
      w('by contrast', '/baɪ ˈkɑːntræst/', 'ngược lại', '', ['By contrast, Japan saw a decline.', '', 'Ngược lại, Nhật giảm.']),
      w('reach a peak', '/riːtʃ ə piːk/', 'đạt đỉnh', '', ['Sales reached a peak in 2022.', '', 'Doanh số đạt đỉnh năm 2022.']),
      w('relatively', '/ˈrelətɪvli/', 'tương đối', '', ['The rate remained relatively stable.', '', 'Tỷ lệ tương đối ổn định.'])
    ],
    qs: [
      ['mc', 'Đoạn tổng quan Task 1 nên có?', '2 đặc điểm nổi bật, không cần số liệu', ['Tất cả số liệu', 'Ý kiến cá nhân', 'Lý do của xu hướng'], 'Overview.'],
      ['mc', 'In 2015, the figure ___ 20%.', 'stood at', ['stood on', 'stayed in', 'was at of'], 'stand at.'],
      ['mc', 'Sales in A and B were $2m and $5m ___.', 'respectively', ['respectfully', 'respective', 'responsibly'], 'lần lượt.'],
      ['mc', 'The number of users ___ from 1 to 2 million.', 'doubled', ['doubling', 'was double', 'doubles to'], 'tăng gấp đôi.'],
      ['mc', 'Câu mở bài viết lại đề tốt nhất?', 'The line graph illustrates changes in mobile banking use between 2016 and 2026.', ['This is a graph.', 'I will describe the graph below.', 'The graph shows the graph.'], 'Paraphrase.'],
      ['hear', "Overall, mobile payments increased significantly, while cash payments declined steadily.", 'Thanh toán di động tăng mạnh, tiền mặt giảm đều.', ['Cả hai đều tăng.', 'Tiền mặt tăng mạnh.', 'Di động giảm.'], 'Overview hai xu hướng.'],
      ['order', 'Sắp xếp: “Ngược lại, Nhật Bản giảm nhẹ.”', ['By contrast,', 'Japan', 'saw', 'a slight decline.'], 'By contrast, Japan saw a slight decline.']
    ],
    noi: [['The *line* *graph* *illustrates* → how mobile banking *use* changed → between *2016* and *2026*. ↘', 'Biểu đồ đường thể hiện việc dùng ngân hàng di động thay đổi từ 2016 đến 2026.'], ['*Overall*, → the figure *more* than *doubled*. ↘', 'Nhìn chung, con số tăng hơn gấp đôi.'], ['By *contrast*, → cash payments *declined* *steadily*. ↘', 'Ngược lại, thanh toán tiền mặt giảm đều.']],
    hoithoai: {
      ctx: 'Gia sư IELTS hỏi em cách xử lý một biểu đồ đường về 3 phương thức thanh toán.', vai: 'Gia sư hỏi, em trả lời.', ai: '👩‍🏫 IELTS tutor',
      luot: [
        T(['How would you paraphrase "The graph shows the use of three payment methods from 2016 to 2026"?', '', 'Viết lại câu đề thế nào?'], ['The line graph illustrates how the popularity of three payment methods changed over a ten-year period.', 'Biểu đồ thể hiện mức độ phổ biến của 3 phương thức thanh toán thay đổi trong 10 năm.', 'Paraphrase tốt.'], ['The graph shows three payment methods 2016–2026.', 'Chép lại đề.'], ['I see a graph about money.', 'Không học thuật.']),
        T(['Good. Now the overview.', '', 'Tốt. Giờ đoạn tổng quan.'], ['Overall, mobile payments rose dramatically and became the most popular method, while cash declined.', 'Nhìn chung, di động tăng vọt và thành phổ biến nhất, tiền mặt giảm.', 'Overview đúng.'], ['Overall, in 2016 cash was 60% and mobile 10%.', 'Overview không nên đi vào số.'], ['I think mobile is better.', 'Không nêu ý kiến cá nhân.']),
        T(['How would you compare cards and cash in 2026?', '', 'So sánh thẻ và tiền mặt năm 2026?'], ['By 2026, card payments were roughly twice as high as cash, at 30% and 15% respectively.', 'Năm 2026, thẻ gần gấp đôi tiền mặt, lần lượt 30% và 15%.', 'twice as high as + respectively.'], ['Cards were two times more than cash respectful.', 'Sai từ.'], ['Cards and cash 30 15.', 'Câu cụt.'])
      ], ket: 'Em đã dàn ý Task 1 đúng cấu trúc band 6+.'
    },
    tom: ['Bố cục 4 đoạn Task 1', 'Đoạn tổng quan', 'Cụm so sánh số liệu'], nguphap: 'Ngôn ngữ mô tả số liệu; so sánh', phatam: 'Đọc số liệu và năm rõ ràng',
    loi: ['Thiếu tổng quan', 'Nêu ý kiến trong Task 1'], btvn: ['Viết bài "IELTS Writing Task 1" trong Luyện đề', 'Sao chép bài nhờ gia sư AI chấm', 'Học 10 cụm so sánh']
  };

  /* ================= NGÀY 12 ================= */
  const d12 = {
    n: 12, ten: plan[11].ten, kinds: K,
    muc: 'Viết IELTS Task 2 dạng "Discuss both views and give your opinion" 250+ từ, band 6–6.5.',
    hoc: `<h4>1. Dàn ý</h4>${tbl(['Đoạn', 'Nội dung'], [['Mở bài (2 câu)', 'Viết lại đề + nêu rõ quan điểm của mình'], ['Thân 1', 'Quan điểm A: lý do + giải thích + ví dụ'], ['Thân 2', 'Quan điểm B (thường là quan điểm mình đồng ý): lý do + giải thích + ví dụ'], ['Kết bài', 'Tóm tắt hai quan điểm + nhắc lại ý kiến']])}
      <h4>2. Cụm mở đầu đoạn</h4><ul><li>On the one hand, some people argue that…</li><li>Those who support this view believe that…</li><li>On the other hand, others claim that…</li><li>In my view / I would argue that…</li><li>In conclusion, while …, I believe that…</li></ul>
      ${tip('📏 4 tiêu chí chấm: Task Response, Coherence & Cohesion, Lexical Resource, Grammatical Range & Accuracy. Đủ 250 từ, trả lời đủ hai quan điểm và ý kiến riêng.')}`,
    vocab: [
      w('claim', '/kleɪm/', 'cho rằng, khẳng định', '', ['Some claim that AI will replace teachers.', '', 'Có người cho rằng AI sẽ thay giáo viên.']),
      w('proponent', '/prəˈpoʊnənt/', 'người ủng hộ', '', ['Proponents argue that it saves money.', '', 'Người ủng hộ cho rằng nó tiết kiệm tiền.']),
      w('opponent', '/əˈpoʊnənt/', 'người phản đối', '', ['Opponents point out the risks.', '', 'Người phản đối chỉ ra rủi ro.']),
      w('convincing', '/kənˈvɪnsɪŋ/', 'thuyết phục', '', ['I find this argument more convincing.', '', 'Tôi thấy lập luận này thuyết phục hơn.']),
      w('undeniable', '/ˌʌndɪˈnaɪəbl/', 'không thể phủ nhận', '', ['It is undeniable that technology helps.', '', 'Không thể phủ nhận công nghệ có ích.']),
      w('drawback', '/ˈdrɔːbæk/', 'hạn chế', '', ['The main drawback is cost.', '', 'Hạn chế chính là chi phí.']),
      w('beneficial', '/ˌbenɪˈfɪʃl/', 'có lợi', '', ['Exercise is beneficial for health.', '', 'Tập thể dục có lợi cho sức khoẻ.']),
      w('to some extent', '/tə sʌm ɪkˈstent/', 'ở mức độ nào đó', '', ['I agree to some extent.', '', 'Tôi đồng ý ở mức độ nào đó.']),
      w('in the long run', '/ɪn ðə lɔːŋ rʌn/', 'về lâu dài', '', ['In the long run, it will save money.', '', 'Về lâu dài sẽ tiết kiệm tiền.']),
      w('outweigh', '/ˌaʊtˈweɪ/', 'vượt trội hơn', '', ['The advantages outweigh the disadvantages.', '', 'Ưu điểm vượt trội nhược điểm.'])
    ],
    qs: [
      ['mc', 'Dạng "Discuss both views and give your opinion" cần?', 'Bàn cả hai quan điểm và nêu ý kiến riêng', ['Chỉ nêu ý kiến riêng', 'Chỉ bàn một quan điểm', 'Liệt kê ưu điểm'], 'Đủ 3 phần.'],
      ['mc', '___ of the policy argue that it creates jobs.', 'Proponents', ['Opponents', 'Components', 'Exponents'], 'Người ủng hộ.'],
      ['mc', 'I agree with this view ___ some extent.', 'to', ['in', 'at', 'with'], 'to some extent.'],
      ['mc', '___ the long run, renewable energy is cheaper.', 'In', ['On', 'At', 'For'], 'In the long run.'],
      ['mc', 'Câu mở bài nêu rõ quan điểm?', 'While some argue that…, I believe that the benefits are greater.', ['This essay is about AI.', 'There are many opinions.', 'I will write about two views.'], 'Có quan điểm rõ.'],
      ['hear', "Proponents claim that remote work increases productivity, whereas opponents argue that it weakens teamwork.", 'Ủng hộ: tăng năng suất; phản đối: yếu tinh thần đồng đội.', ['Cả hai cùng ủng hộ.', 'Phản đối: tăng năng suất.', 'Không có ý kiến đối lập.'], 'Proponents / opponents.'],
      ['order', 'Sắp xếp: “Ưu điểm vượt trội nhược điểm.”', ['The advantages', 'outweigh', 'the', 'disadvantages.'], 'The advantages outweigh the disadvantages.']
    ],
    noi: [['*Proponents* argue that *remote* *work* → increases *productivity*. ↘', 'Người ủng hộ cho rằng làm từ xa tăng năng suất.'], ['I find the *second* argument → more *convincing*. ↘', 'Tôi thấy lập luận thứ hai thuyết phục hơn.'], ['In the *long* *run*, → it will *save* *money*. ↘', 'Về lâu dài sẽ tiết kiệm tiền.']],
    hoithoai: {
      ctx: 'Gia sư IELTS giúp em dàn ý đề: "Some say university should be free for everyone. Others disagree. Discuss both views."', vai: 'Gia sư hỏi, em trả lời.', ai: '👩‍🏫 IELTS tutor',
      luot: [
        T(["What's your position?", '', 'Quan điểm của em là gì?'], ['I believe university should be free for low-income students, but not for everyone.', 'Tôi tin đại học nên miễn phí cho sinh viên thu nhập thấp, không phải cho tất cả.', 'Quan điểm rõ, có giới hạn.'], ['Free is good.', 'Mơ hồ.'], ['I have no opinion.', 'Thiếu Task Response.']),
        T(['Give me a reason for the "free for everyone" view.', '', 'Lý do cho quan điểm "miễn phí cho tất cả"?'], ['Proponents claim that free education gives everyone equal opportunities and benefits society in the long run.', 'Người ủng hộ cho rằng giáo dục miễn phí tạo cơ hội bình đẳng và có lợi cho xã hội về lâu dài.', 'Lập luận học thuật.'], ['Because free.', 'Không phát triển.'], ['Opponents claim it is free.', 'Sai bên.']),
        T(['And the opposing view?', '', 'Còn quan điểm ngược lại?'], ["Opponents argue that it would be too expensive for the government. To some extent, I find this convincing.", 'Người phản đối cho rằng quá tốn kém cho ngân sách. Ở mức độ nào đó tôi thấy thuyết phục.', 'Opponents + to some extent.'], ['Opponents say free bad.', 'Thiếu học thuật.'], ['It is undeniable cost.', 'Câu cụt.'])
      ], ket: 'Em đã dàn ý Task 2 dạng thảo luận hai quan điểm.'
    },
    tom: ['Dàn ý discuss both views', 'Cụm mở đoạn', '4 tiêu chí chấm'], nguphap: 'Câu phức, từ nối, rào đón', phatam: 'Đọc to bài viết để kiểm tra mạch lạc',
    loi: ['Không nêu quan điểm riêng', 'Lệch đề'], btvn: ['Viết bài "IELTS Writing Task 2" trong Luyện đề (250 từ)', 'Bấm Sao chép nhờ gia sư AI chấm 4 tiêu chí', 'Học 10 cụm học thuật']
  };

  /* ================= NGÀY 13 ================= */
  const d13 = {
    n: 13, ten: plan[12].ten, kinds: K,
    muc: 'Luyện kỹ năng đọc IELTS: skimming tìm ý chính, scanning tìm chi tiết, phân biệt True / False / Not Given.',
    hoc: `${tbl(['Kỹ năng', 'Cách làm', 'Dùng cho'], [['Skimming', 'Đọc tiêu đề, câu đầu và câu cuối mỗi đoạn', 'Matching headings, main idea'], ['Scanning', 'Tìm tên riêng, số, từ khoá (và từ đồng nghĩa)', 'Điền từ, tìm chi tiết'], ['Đọc kỹ', 'Đọc chậm câu chứa đáp án, chú ý từ hạn chế (only, all, never)', 'T/F/NG, multiple choice']])}
      <h4>True / False / Not Given</h4>${tbl(['Đáp án', 'Khi nào'], [['True', 'Bài nói đúng ý câu hỏi (có thể dùng từ đồng nghĩa).'], ['False', 'Bài nói <b>ngược lại</b> câu hỏi.'], ['Not Given', 'Bài <b>không đề cập</b> đủ để kết luận.']])}
      ${tip('⚠️ Đừng dùng hiểu biết bên ngoài. Chỉ dựa vào bài đọc. Câu hỏi T/F/NG đi theo thứ tự bài.')}`,
    vocab: [
      w('skim', '/skɪm/', 'đọc lướt', '', ['Skim the text first.', '', 'Đọc lướt bài trước.']),
      w('scan', '/skæn/', 'đọc tìm (chi tiết)', '', ['Scan for names and numbers.', '', 'Đọc tìm tên và số.']),
      w('synonym', '/ˈsɪnənɪm/', 'từ đồng nghĩa', '', ['Look for synonyms in the passage.', '', 'Tìm từ đồng nghĩa trong bài.']),
      w('paraphrase', '/ˈpærəfreɪz/', 'diễn đạt lại', '', ['Questions often paraphrase the text.', '', 'Câu hỏi thường diễn đạt lại bài.']),
      w('passage', '/ˈpæsɪdʒ/', 'đoạn văn, bài đọc', '', ['Read the passage carefully.', '', 'Đọc kỹ bài đọc.']),
      w('heading', '/ˈhedɪŋ/', 'tiêu đề', '', ['Match each paragraph with a heading.', '', 'Nối mỗi đoạn với một tiêu đề.']),
      w('mention', '/ˈmenʃn/', 'đề cập', '', ['The text does not mention the price.', '', 'Bài không đề cập giá.']),
      w('contradict', '/ˌkɑːntrəˈdɪkt/', 'mâu thuẫn', '', ['The statement contradicts the text.', '', 'Câu này mâu thuẫn với bài.']),
      w('infer', '/ɪnˈfɜːr/', 'suy ra', '', ['What can we infer from paragraph B?', '', 'Ta suy ra được gì từ đoạn B?']),
      w('time management', '/taɪm ˈmænɪdʒmənt/', 'quản lý thời gian', '', ['Time management is key in IELTS Reading.', '', 'Quản lý thời gian là chìa khoá.'])
    ],
    qs: [
      ['mc', 'Bài: "Most employees prefer hybrid work." Câu hỏi: "All employees prefer hybrid work."', 'False', ['True', 'Not Given', 'Cả True và False'], 'most ≠ all.'],
      ['mc', 'Bài: "The bank opened in 1995." Câu hỏi: "The bank was profitable in its first year."', 'Not Given', ['True', 'False', 'True vì mở năm 1995'], 'Không đề cập lợi nhuận.'],
      ['mc', 'Bài: "Sales doubled in 2025." Câu hỏi: "Sales increased by 100% in 2025."', 'True', ['False', 'Not Given', 'Không xác định'], 'doubled = +100%.'],
      ['mc', 'Để tìm ngày tháng, tên riêng, ta dùng kỹ năng?', 'scanning', ['skimming', 'đọc kỹ từng chữ', 'dịch toàn bài'], 'Scan.'],
      ['mc', 'Để chọn tiêu đề cho đoạn, ta dùng kỹ năng?', 'skimming', ['scanning số liệu', 'đếm từ', 'đọc từ cuối bài'], 'Skim.'],
      ['hear', "Questions in True, False, Not Given tasks follow the order of the passage.", 'Câu hỏi T/F/NG theo thứ tự bài đọc.', ['Câu hỏi xếp ngẫu nhiên.', 'Câu hỏi theo thứ tự ngược.', 'Chỉ có câu True.'], 'follow the order.'],
      ['order', 'Sắp xếp: “Đọc lướt bài trước.”', ['Skim', 'the', 'text', 'first.'], 'Skim the text first.']
    ],
    noi: [['*Skim* the *text* first, → then *scan* for *details*. ↘', 'Đọc lướt trước, sau đó tìm chi tiết.'], ['The *passage* doesn\'t *mention* it, → so it\'s *Not* *Given*. ↘', 'Bài không đề cập nên là Not Given.']],
    hoithoai: {
      ctx: 'Em làm bài đọc về "hybrid work" và hỏi gia sư về đáp án.', vai: 'Gia sư hỏi lý do, em giải thích.', ai: '👩‍🏫 Tutor',
      luot: [
        T(['The text says "Over 60% of staff work from home at least once a week." Statement: "Most staff work from home every day." True, False or Not Given?', '', 'T/F/NG?'], ["False. The text says once a week, not every day.", 'False. Bài nói ít nhất một lần/tuần, không phải hằng ngày.', 'Mâu thuẫn rõ.'], ['True, because 60% is most.', 'Bỏ qua "every day".'], ['Not Given.', 'Bài có thông tin trái ngược.']),
        T(['Statement: "Companies save money on office rent." The text doesn\'t talk about rent.', '', 'Bài không nói về tiền thuê.'], ["Then it's Not Given, even if it seems logical.", 'Vậy là Not Given, dù nghe có lý.', 'Không dùng hiểu biết ngoài.'], ['True, everybody knows that.', 'Dùng kiến thức ngoài.'], ['False.', 'Bài không phủ nhận.']),
        T(['How do you find answers quickly?', '', 'Làm sao tìm đáp án nhanh?'], ['I scan for keywords and their synonyms, because the questions usually paraphrase the text.', 'Tôi tìm từ khoá và từ đồng nghĩa, vì câu hỏi thường diễn đạt lại.', 'Chiến lược đúng.'], ['I translate every word.', 'Tốn thời gian.'], ['I guess.', 'Không có chiến lược.'])
      ], ket: 'Em đã nắm chiến lược đọc IELTS.'
    },
    tom: ['Skimming / scanning', 'T/F/NG', 'Từ đồng nghĩa và diễn đạt lại'], nguphap: 'Nhận diện từ hạn chế: all, most, only, never', phatam: '—',
    loi: ['Dùng kiến thức ngoài', 'Nhầm False và Not Given'], btvn: ['Làm phần Reading đề "IELTS mini 1" và "IELTS mini 2"', 'Ghi 10 cặp từ đồng nghĩa gặp trong bài', 'Đọc 1 bài báo, tự đặt 3 câu T/F/NG']
  };

  /* ================= NGÀY 14 ================= */
  const d14 = {
    n: 14, ten: plan[13].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Ôn giai đoạn 2: từ nối, cụm động từ, collocation, Writing Task 1–2, Reading.',
    hoc: `<h4>Tóm tắt tuần 2</h4>${tbl(['Chủ điểm', 'Ghi nhớ'], [['Từ nối', 'Although + mệnh đề / Despite + N / However, … / whereas'], ['Cụm động từ', 'bring up, figure out, put off, take over, set it up'], ['Collocation', 'make a decision, meet a deadline, raise awareness, take measures'], ['Task 1', 'Mở bài – Tổng quan – 2 đoạn chi tiết'], ['Task 2', 'Quan điểm rõ – 2 đoạn thân – Kết'], ['Reading', 'Skim → scan → đọc kỹ; T/F/NG']])}`,
    qs: [['mc', '___ the delay, the project was a success.', 'Despite', ['Although', 'However', 'Whereas'], '+ danh từ.'], ['mc', 'We worked overtime to ___ the deadline.', 'meet', ['make', 'do', 'catch up'], 'meet a deadline.']],
    noi: [['*Overall*, → the *figure* rose *dramatically*. ↘', 'Nhìn chung, con số tăng mạnh.'], ['I find this *argument* more *convincing*. ↘', 'Tôi thấy lập luận này thuyết phục hơn.']],
    hoithoai: {
      ctx: 'Tổng ôn: buổi học IELTS 1-1.', vai: 'Gia sư hỏi nhanh, em trả lời.', ai: '👩‍🏫 Tutor',
      luot: [
        T(['Combine: "It was raining. We went out." Use "despite".', '', 'Nối bằng despite.'], ['Despite the rain, we went out.', 'Dù mưa, chúng tôi vẫn ra ngoài.', 'Despite + N.'], ['Despite it was raining, we went out.', 'Despite + mệnh đề sai.'], ['Despite of rain.', 'Thừa of.']),
        T(['Replace "postpone" with a phrasal verb.', '', 'Thay "postpone" bằng cụm động từ.'], ['put off', 'trì hoãn', 'put off = postpone.'], ['put on', 'mặc.'], ['put out', 'dập tắt.']),
        T(["What's missing in this Task 1? 'In 2016, A was 10%. In 2026, A was 50%.'", '', 'Bài Task 1 thiếu gì?'], ['An overview and comparisons between the categories.', 'Đoạn tổng quan và so sánh giữa các nhóm.', 'Đúng.'], ['More numbers.', 'Không phải.'], ['My opinion.', 'Không cần ý kiến.']),
        T(['Text: "Only some staff use the app." Statement: "All staff use the app."', '', 'T/F/NG?'], ['False.', 'False – some ≠ all.', 'Mâu thuẫn.'], ['True.', 'Sai.'], ['Not Given.', 'Bài có thông tin trái ngược.'])
      ], ket: 'Em đã ôn xong giai đoạn từ vựng học thuật và IELTS!'
    },
    tom: ['Ôn tuần 2', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn', phatam: '—',
    loi: ['Xem lại câu sai'], btvn: ['Làm đề "IELTS mini 2" trong Luyện đề', 'Viết 1 bài Task 1 + 1 bài Task 2', 'Dưới 7 điểm: học lại ngày yếu']
  };

  window.PLT_EN4 = { plan, stages, H: { w, L, T, tbl, tip, exs, F, sp, K, G, say }, days: [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14] };
})();

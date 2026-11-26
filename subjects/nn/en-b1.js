/* PLT-Edu · Tiếng Anh – Cấp 3 (B1): lộ trình 30 ngày, Ngày 1–14 */
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
    'Hiện tại hoàn thành và quá khứ đơn: kinh nghiệm làm việc', 'Hiện tại hoàn thành tiếp diễn: dự án đang làm', 'Quá khứ hoàn thành: kể chuyện có hồi tưởng', 'Câu điều kiện loại 1: hứa hẹn và thương lượng', 'Câu điều kiện loại 2: giả định và lời khuyên', 'Nêu ý kiến, đồng ý và phản đối lịch sự', 'Ôn tập tuần 1 và kiểm tra',
    'Câu bị động: mô tả quy trình', 'Mệnh đề quan hệ: định nghĩa và giải thích', 'Câu tường thuật: truyền đạt lời người khác', 'Câu hỏi gián tiếp lịch sự', 'Mô tả xu hướng và số liệu', 'V-ing và to V: thói quen và lối sống', 'Ôn tập tuần 2 và kiểm tra',
    'Họp: điều phối, xin ý kiến, ngắt lời lịch sự', 'Thuyết trình ngắn: mở đầu, chuyển ý, kết luận', 'Email công việc 120–150 từ', 'Xử lý khiếu nại của khách hàng', 'Thương lượng giá và điều khoản', 'Điện thoại công việc: lời nhắn và xác nhận', 'Kiểm tra tổng hợp và mô phỏng công sở',
    'Suy đoán: must, might, can\'t', 'Thích nghi môi trường mới: be used to, get used to', 'Tin tức và sự kiện', 'Môi trường và lối sống xanh', 'Công nghệ và mạng xã hội: ưu và nhược', 'Viết đoạn văn nêu ý kiến', 'Nghe hiểu bài nói dài và ghi chú', 'Mô phỏng thi nói IELTS', 'Kiểm tra cuối khoá B1 và lộ trình B2'
  ].map((ten, i) => ({ n: i + 1, ten }));
  const stages = [
    { ten: '🧭 Giai đoạn 1 – Thì và câu điều kiện', tu: 1, den: 7 }, { ten: '📊 Giai đoạn 2 – Truyền đạt thông tin', tu: 8, den: 14 },
    { ten: '💼 Giai đoạn 3 – Tiếng Anh công việc', tu: 15, den: 21 }, { ten: '🌍 Giai đoạn 4 – Xã hội, ý kiến và luyện thi', tu: 22, den: 30 }
  ];

  /* ================= NGÀY 1 ================= */
  const d1 = {
    n: 1, ten: plan[0].ten, kinds: K,
    muc: 'Nói về kinh nghiệm làm việc với for / since; biết khi nào chuyển sang quá khứ đơn.',
    hoc: `<h4>1. Kết nối quá khứ – hiện tại</h4>${tbl(['Hiện tại hoàn thành', 'Quá khứ đơn'], [['Vẫn còn liên quan đến hiện tại', 'Đã kết thúc hẳn'], ["I've worked here <b>for</b> six years. (vẫn làm)", 'I worked at ABC <b>from</b> 2015 <b>to</b> 2018. (đã nghỉ)'], ['How long have you…?', 'When did you…?'], ['so far, recently, this year (chưa hết)', 'yesterday, last…, ago, in 2019']])}
      <h4>2. for / since</h4><p><b>for</b> + khoảng (for ten years, for a long time) · <b>since</b> + mốc (since 2019, since I graduated).</p>
      ${exs([["I've been in banking since 2016.", 'Tôi làm ngành ngân hàng từ năm 2016.'], ['Before that, I worked for a software company for two years.', 'Trước đó tôi làm cho công ty phần mềm hai năm.'], ["So far, we've opened three new branches this year.", 'Năm nay đến giờ chúng tôi đã mở ba chi nhánh mới.']])}
      ${tip('🎯 Khung trả lời "Tell me about your career": <b>HTHT</b> cho vị trí hiện tại → <b>quá khứ đơn</b> cho công việc trước → <b>HTHT</b> cho thành tích tính đến nay.')}${G('htht-qkd', 'HTHT và quá khứ đơn')}`,
    vocab: [
      w('career', '/kəˈrɪr/', 'sự nghiệp', '', ['I started my career in sales.', '', 'Tôi bắt đầu sự nghiệp ở mảng bán hàng.']),
      w('so far', '/soʊ fɑːr/', 'tính đến nay', '', ["So far, everything has gone well.", '', 'Đến giờ mọi thứ suôn sẻ.']),
      w('recently', '/ˈriːsntli/', 'gần đây', '', ["I've recently changed jobs.", '', 'Gần đây tôi đổi việc.']),
      w('branch', '/bræntʃ/', 'chi nhánh', '', ['She manages a branch in District 1.', '', 'Cô ấy quản lý một chi nhánh ở Quận 1.']),
      w('department', '/dɪˈpɑːrtmənt/', 'phòng ban', '', ['He works in the finance department.', '', 'Anh ấy làm ở phòng tài chính.']),
      w('previous', '/ˈpriːviəs/', 'trước đây', '', ['In my previous job, I travelled a lot.', '', 'Ở công việc trước tôi đi lại nhiều.']),
      w('promoted', '/prəˈmoʊtɪd/', 'được thăng chức', '', ['She was promoted last year.', '', 'Cô ấy được thăng chức năm ngoái.']),
      w('in charge of', '/ɪn tʃɑːrdʒ əv/', 'phụ trách', '', ["I'm in charge of the IT system.", '', 'Tôi phụ trách hệ thống IT.']),
      w('achieve', '/əˈtʃiːv/', 'đạt được', '', ["We've achieved our sales target.", '', 'Chúng tôi đã đạt chỉ tiêu doanh số.']),
      w('so far this year', '/soʊ fɑːr ðɪs jɪr/', 'từ đầu năm đến nay', '', ["We've hired ten people so far this year.", '', 'Từ đầu năm đến nay chúng tôi đã tuyển 10 người.'])
    ],
    qs: [
      ['mc', "I've worked here ___ 2018.", 'since', ['for', 'from', 'ago'], 'Mốc → since.'],
      ['mc', 'She ___ at that company from 2012 to 2016.', 'worked', ['has worked', 'works', 'has been working'], 'Đã kết thúc → quá khứ đơn.'],
      ['mc', '___ have you been in charge of this project?', 'How long', ['When', 'What time', 'How often'], 'Hỏi khoảng thời gian.'],
      ['mc', "We ___ three new customers this week. (tuần chưa hết)", 'have signed', ['signed last', 'sign', 'were signing'], 'this week chưa hết → HTHT.'],
      ['mc', 'in charge of nghĩa là?', 'phụ trách', ['bị tính phí', 'đang sạc', 'thăng chức'], 'in charge of.'],
      ['hear', "I've been in banking for nine years. Before that, I worked as a teacher.", 'Làm ngân hàng 9 năm; trước đó làm giáo viên.', ['Làm giáo viên 9 năm, nay làm ngân hàng.', 'Làm ngân hàng 9 năm trước.', 'Sắp chuyển sang dạy học.'], 'for nine years / before that.'],
      ['order', 'Sắp xếp: “Gần đây tôi đã đổi việc.”', ["I've", 'recently', 'changed', 'jobs.'], "I've recently changed jobs."]
    ],
    noi: [["I've *worked* in *banking* → for *nine* *years*. ↘", 'Tôi làm ngân hàng 9 năm.'], ['*Before* that, → I *worked* for a *software* *company*. ↘', 'Trước đó tôi làm cho công ty phần mềm.'], ['How *long* have you been in *charge* of this *project*? ↘', 'Bạn phụ trách dự án này bao lâu rồi?']],
    hoithoai: {
      ctx: 'Em gặp một chuyên gia tư vấn nước ngoài trong hội thảo ngành tài chính.', vai: 'Ông Clark hỏi về sự nghiệp của em.', ai: '👨‍💼 Mr. Clark',
      luot: [
        T(['How long have you worked in this industry?', '', 'Bạn làm trong ngành bao lâu rồi?'], ["I've worked in banking since 2016, so about ten years.", 'Tôi làm ngân hàng từ 2016, khoảng 10 năm.', 'HTHT + since.'], ['I work in banking since 2016.', 'Thiếu HTHT.'], ["I've worked in banking for 2016.", 'Mốc → since.']),
        T(['And what did you do before that?', '', 'Trước đó bạn làm gì?'], ['I worked for a small IT company for two years.', 'Tôi làm cho một công ty IT nhỏ hai năm.', 'Đã kết thúc → quá khứ đơn.'], ["I've worked for an IT company before.", 'Kể chi tiết công việc cũ → quá khứ đơn.'], ['I am working before IT.', 'Câu sai.']),
        T(["What's your biggest achievement so far?", '', 'Thành tích lớn nhất đến nay là gì?'], ["I've led a project that moved all our branches to a new system.", 'Tôi đã dẫn dắt dự án chuyển toàn bộ chi nhánh sang hệ thống mới.', 'HTHT cho thành tích tính đến nay.'], ['I lead a project yesterday.', 'Sai thì.'], ['My achievement is so far.', 'Lạc đề.'])
      ], ket: 'Em đã kể sự nghiệp đúng thì.'
    },
    tom: ['HTHT vs quá khứ đơn', 'for / since', 'so far, recently'], nguphap: 'HTHT và quá khứ đơn; for/since', phatam: "I've /aɪv/, worked /wɜːrkt/; nhấn số năm",
    loi: ['Dùng HTHT với năm cụ thể', 'for + mốc'], btvn: ['Viết đoạn 80 từ "My career so far"', 'Ghi âm câu trả lời "Tell me about your career" 1 phút', 'Làm chủ điểm "HTHT và quá khứ đơn" trong Sổ tay']
  };

  /* ================= NGÀY 2 ================= */
  const d2 = {
    n: 2, ten: plan[1].ten, kinds: K,
    muc: 'Nói về việc đang làm kéo dài đến nay; phân biệt nhấn quá trình (have been doing) và kết quả (have done).',
    hoc: `${F(['S', '+', 'have / has been', '+', 'V-ing'])}${tbl(['have been doing (quá trình)', 'have done (kết quả, số lượng)'], [["I've been working on this report all morning.", "I've written three reports today."], ["We've been testing the new app since Monday.", "We've tested 20 features."], ['How long have you been waiting?', 'How many have you finished?']])}
      ${exs([["You look tired. Have you been working late?", 'Trông bạn mệt. Dạo này làm khuya à?'], ["It's been raining all day.", 'Mưa cả ngày rồi.']])}
      ${tip('⚠️ Động từ trạng thái (know, believe, own, understand) không dùng dạng tiếp diễn: <i>I\'ve known him for years</i> (❌ have been knowing).')}${G('htht-tiep-dien', 'HTHT tiếp diễn')}`,
    vocab: [
      w('work on', '/wɜːrk ɑːn/', 'làm (dự án, việc gì)', '', ["I've been working on a new website.", '', 'Tôi đang làm một website mới.']),
      w('project', '/ˈprɑːdʒekt/', 'dự án', '', ['The project started in March.', '', 'Dự án bắt đầu tháng Ba.']),
      w('test', '/test/', 'kiểm thử', '', ["We've been testing the system.", '', 'Chúng tôi đang kiểm thử hệ thống.']),
      w('all morning', '/ɔːl ˈmɔːrnɪŋ/', 'cả buổi sáng', '', ["I've been in meetings all morning.", '', 'Tôi họp cả buổi sáng.']),
      w('lately', '/ˈleɪtli/', 'dạo này', '', ["I've been sleeping badly lately.", '', 'Dạo này tôi ngủ không ngon.']),
      w('improve', '/ɪmˈpruːv/', 'cải thiện', '', ["My English has improved a lot.", '', 'Tiếng Anh của tôi tiến bộ nhiều.']),
      w('launch', '/lɔːntʃ/', 'ra mắt', '', ["We're going to launch the app next month.", '', 'Tháng sau chúng tôi ra mắt ứng dụng.']),
      w('feature', '/ˈfiːtʃər/', 'tính năng', '', ['The app has a new feature.', '', 'Ứng dụng có tính năng mới.']),
      w('behind schedule', '/bɪˈhaɪnd ˈskedʒuːl/', 'chậm tiến độ', '', ['The project is behind schedule.', '', 'Dự án chậm tiến độ.']),
      w('on track', '/ɑːn træk/', 'đúng tiến độ', '', ["Don't worry, we're on track.", '', 'Đừng lo, chúng tôi đúng tiến độ.'])
    ],
    qs: [
      ['mc', "I ___ on this report since 8 a.m.", 'have been working', ['am working', 'worked', 'have worked yet'], 'Quá trình kéo dài đến nay.'],
      ['mc', "I've ___ four emails this morning. (số lượng)", 'written', ['been writing', 'wrote', 'writing'], 'Kết quả, số lượng → HTHT.'],
      ['mc', "I ___ him for ten years.", 'have known', ['have been knowing', 'know since', 'am knowing'], 'know là động từ trạng thái.'],
      ['mc', 'behind schedule nghĩa là?', 'chậm tiến độ', ['đúng tiến độ', 'vượt tiến độ', 'chưa có lịch'], 'behind schedule.'],
      ['mc', 'How long ___ waiting?', 'have you been', ['are you', 'did you', 'have you'], 'How long have you been + V-ing.'],
      ['hear', "We've been testing the new app since Monday, and we've found twelve bugs.", 'Kiểm thử từ thứ Hai, đã tìm 12 lỗi.', ['Kiểm thử từ thứ Hai, chưa thấy lỗi.', 'Sẽ kiểm thử thứ Hai.', 'Đã sửa 12 lỗi hôm thứ Hai.'], 'since Monday / twelve bugs.'],
      ['order', 'Sắp xếp: “Dạo này tôi ngủ không ngon.”', ["I've been", 'sleeping', 'badly', 'lately.'], "I've been sleeping badly lately."]
    ],
    noi: [["I've been *working* on this *report* → all *morning*. ↘", 'Tôi làm báo cáo này cả buổi sáng.'], ['How *long* have you been *waiting*? ↘', 'Bạn chờ bao lâu rồi?'], ["Don't *worry*, → we're on *track*. ↘", 'Đừng lo, chúng ta đúng tiến độ.']],
    hoithoai: {
      ctx: 'Giám đốc dự án gọi hỏi tình hình triển khai ứng dụng mới.', vai: 'Bà Green hỏi, em cập nhật.', ai: '👩‍💼 Ms. Green',
      luot: [
        T(['How is the new app going?', '', 'Ứng dụng mới thế nào rồi?'], ["We've been testing it since Monday. So far, we've found twelve bugs.", 'Chúng tôi kiểm thử từ thứ Hai. Đến giờ tìm được 12 lỗi.', 'Quá trình + kết quả.'], ['We test it since Monday.', 'Sai thì.'], ["We've been finding twelve bugs.", 'Số lượng → HTHT đơn.']),
        T(['Are you behind schedule?', '', 'Có chậm tiến độ không?'], ["No, we're on track. We've already fixed eight of them.", 'Không, đúng tiến độ. Đã sửa 8 lỗi rồi.', 'on track + already.'], ['Yes, we are on track.', 'Mâu thuẫn.'], ["No, we've been fixed.", 'Sai cấu trúc.']),
        T(['Great. When can we launch it?', '', 'Tốt. Khi nào ra mắt được?'], ["If everything goes well, we'll launch it on the 15th.", 'Nếu suôn sẻ, chúng tôi ra mắt ngày 15.', 'Điều kiện loại 1 (học kỹ Ngày 4).'], ['We launched yesterday.', 'Mâu thuẫn.'], ["We've been launching.", 'Không hợp nghĩa.'])
      ], ket: 'Em đã cập nhật tiến độ dự án bằng HTHT tiếp diễn.'
    },
    tom: ['have been + V-ing', 'Quá trình vs kết quả', 'Động từ trạng thái'], nguphap: 'HTHT tiếp diễn', phatam: "I've been /aɪv bɪn/ đọc lướt",
    loi: ['have been knowing', 'Dùng tiếp diễn khi nói số lượng'], btvn: ['Viết 5 câu về việc em đang làm dạo này', 'Báo cáo tiến độ một dự án 80 từ', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 3 ================= */
  const d3 = {
    n: 3, ten: plan[2].ten, kinds: K,
    muc: 'Dùng quá khứ hoàn thành để nói việc xảy ra trước một mốc quá khứ; kể chuyện mạch lạc hơn.',
    hoc: `${F(['S', '+', 'had', '+', 'V3'])}${exs([['When I got to the station, the train had already left.', 'Khi tôi đến ga thì tàu đã chạy rồi.'], ["I'd never seen such a big crowd before.", 'Trước đó tôi chưa bao giờ thấy đám đông lớn như vậy.'], ['She was nervous because she hadn\'t given a presentation before.', 'Cô ấy hồi hộp vì trước đó chưa thuyết trình bao giờ.']])}
      ${tbl(['Từ hay đi kèm', 'Ví dụ'], [['by the time', 'By the time we arrived, the meeting had finished.'], ['before / after', 'After she had checked the data, she sent the report.'], ['already / never … before', 'I had never flown before 2015.']])}
      ${tip('💡 Nếu thứ tự đã rõ nhờ <b>before / after</b>, có thể dùng quá khứ đơn cho cả hai: <i>After she checked the data, she sent the report.</i>')}${G('qua-khu-hoan-thanh', 'Quá khứ hoàn thành')}`,
    vocab: [
      w('by the time', '/baɪ ðə taɪm/', 'vào lúc mà, trước khi', '', ['By the time I arrived, everyone had left.', '', 'Lúc tôi đến thì mọi người đã về.']),
      w('realise', '/ˈriːəlaɪz/', 'nhận ra', '', ['I realised I had forgotten my wallet.', '', 'Tôi nhận ra mình quên ví.']),
      w('nervous', '/ˈnɜːrvəs/', 'hồi hộp, lo lắng', '', ['I was nervous before the interview.', '', 'Tôi hồi hộp trước buổi phỏng vấn.']),
      w('missed', '/mɪst/', 'đã lỡ (chuyến, cơ hội)', '', ['I missed the bus.', '', 'Tôi lỡ chuyến xe buýt.']),
      w('crowd', '/kraʊd/', 'đám đông', '', ['There was a huge crowd.', '', 'Có một đám đông rất lớn.']),
      w('turn out', '/tɜːrn aʊt/', 'hoá ra', '', ['It turned out that he had lied.', '', 'Hoá ra anh ta đã nói dối.']),
      w('relieved', '/rɪˈliːvd/', 'nhẹ nhõm', '', ['I was relieved to hear the news.', '', 'Tôi nhẹ nhõm khi nghe tin.']),
      w('embarrassed', '/ɪmˈbærəst/', 'xấu hổ, ngượng', '', ['I felt so embarrassed.', '', 'Tôi thấy rất ngượng.']),
      w('unfortunately', '/ʌnˈfɔːrtʃənətli/', 'không may là', '', ['Unfortunately, the shop had closed.', '', 'Không may là cửa hàng đã đóng cửa.']),
      w('in the end', '/ɪn ði end/', 'cuối cùng thì', '', ['In the end, everything was fine.', '', 'Cuối cùng mọi chuyện ổn.'])
    ],
    qs: [
      ['mc', 'When I got to the cinema, the film ___.', 'had started', ['started', 'has started', 'starts'], 'Xảy ra trước → had V3.'],
      ['mc', 'I ___ never travelled by plane before my trip to Seoul.', 'had', ['have', 'was', 'did'], 'Trước mốc quá khứ.'],
      ['mc', "She realised she ___ her phone at home.", 'had left', ['has left', 'leaves', 'was leaving'], 'Việc quên xảy ra trước.'],
      ['mc', 'relieved nghĩa là?', 'nhẹ nhõm', ['xấu hổ', 'hồi hộp', 'tức giận'], 'relieved.'],
      ['mc', 'It ___ that the email had gone to the spam folder.', 'turned out', ['turned off', 'turned up', 'turned on'], 'turn out = hoá ra.'],
      ['hear', 'By the time we reached the airport, the flight had already closed.', 'Lúc tới sân bay thì chuyến bay đã đóng cửa.', ['Tới sân bay sớm, chuyến bay chưa mở.', 'Chuyến bay bị huỷ trước khi tới.', 'Họ kịp lên máy bay.'], 'had already closed.'],
      ['order', 'Sắp xếp: “Tôi nhận ra mình đã quên ví.”', ['I realised', 'I', 'had forgotten', 'my wallet.'], 'I realised I had forgotten my wallet.']
    ],
    noi: [['By the *time* I *arrived*, → the *meeting* had *finished*. ↘', 'Lúc tôi đến thì họp đã xong.'], ['I *realised* I\'d *forgotten* my *wallet*. ↘', 'Tôi nhận ra mình quên ví.'], ['In the *end*, → *everything* was *fine*. ↘', 'Cuối cùng mọi chuyện ổn.']],
    hoithoai: {
      ctx: 'Em kể cho đồng nghiệp chuyện hôm qua suýt lỡ buổi gặp khách.', vai: 'Sam hỏi, em kể.', ai: '🧑 Sam',
      luot: [
        T(['So what happened yesterday?', '', 'Hôm qua có chuyện gì vậy?'], ["When I got to the client's office, I realised I'd left the contract at home.", 'Đến văn phòng khách thì tôi nhận ra đã để quên hợp đồng ở nhà.', 'Quá khứ đơn + quá khứ hoàn thành.'], ["When I got there, I have left the contract.", 'Sai thì.'], ['I leave the contract at home.', 'Sai thì.']),
        T(['Oh no! What did you do?', '', 'Ôi! Rồi bạn làm sao?'], ["I called my colleague. Luckily, she had saved a copy on her laptop.", 'Tôi gọi đồng nghiệp. May là chị ấy đã lưu một bản trên laptop.', 'had saved: trước lúc gọi.'], ['She has saved a copy.', 'Kể chuyện quá khứ → had saved.'], ['I was calling, she saving.', 'Câu rối.']),
        T(['Phew! So was the meeting OK?', '', 'May quá! Vậy buổi họp ổn chứ?'], ['Yes, in the end it went well, but I felt really embarrassed.', 'Ừ, cuối cùng suôn sẻ nhưng tôi ngượng lắm.', 'Kết chuyện + cảm xúc.'], ['Yes, I was relieved and embarrassing.', 'embarrassed (cảm thấy), không phải embarrassing.'], ['In the end it goes well.', 'Sai thì.'])
      ], ket: 'Em đã kể chuyện có hồi tưởng bằng quá khứ hoàn thành.'
    },
    tom: ['had + V3', 'by the time / before / after', 'Tính từ cảm xúc -ed'], nguphap: 'Quá khứ hoàn thành', phatam: "I'd /aɪd/ = I had; realised /ˈriːəlaɪzd/",
    loi: ['Dùng HTHT khi kể chuyện quá khứ', 'embarrassing / embarrassed'], btvn: ['Kể một lần em gặp rắc rối, 100 từ, dùng ≥ 3 câu had V3', 'Ghi âm và kiểm tra đuôi -ed', 'Làm chủ điểm "Quá khứ hoàn thành" trong Sổ tay']
  };

  /* ================= NGÀY 4 ================= */
  const d4 = {
    n: 4, ten: plan[3].ten, kinds: K,
    muc: 'Dùng câu điều kiện loại 1 để hứa hẹn, cảnh báo, thương lượng; dùng unless, as long as.',
    hoc: `${F(['If', '+', 'hiện tại đơn', ',', 'will / can / may', '+', 'V'])}${exs([["If you order 50 units, we'll give you a 10% discount.", 'Nếu đặt 50 chiếc, chúng tôi giảm 10%.'], ["If the payment doesn't arrive by Friday, we'll have to cancel the order.", 'Nếu thứ Sáu chưa nhận tiền, chúng tôi phải huỷ đơn.'], ['Unless you hurry, you\'ll miss the train.', 'Nếu không nhanh lên, bạn sẽ lỡ tàu.']])}
      ${tbl(['Từ nối', 'Nghĩa'], [['unless', 'nếu không'], ['as long as / provided that', 'miễn là, với điều kiện'], ['in case', 'phòng khi']])}
      ${tip('⚠️ Không dùng will sau if: ❌ <i>If you will order…</i>. Khi thương lượng, câu loại 1 nghe <b>chắc chắn, thực tế</b>; câu loại 2 (Ngày 5) nghe <b>dè dặt, giả định</b>.')}${G('dieu-kien-012', 'Câu điều kiện 0, 1, 2')}`,
    vocab: [
      w('discount', '/ˈdɪskaʊnt/', 'giảm giá', '', ['Can you give us a discount?', '', 'Giảm giá cho chúng tôi được không?']),
      w('unless', '/ənˈles/', 'nếu không, trừ khi', '', ["Unless you sign today, the price will go up.", '', 'Nếu hôm nay không ký, giá sẽ tăng.']),
      w('as long as', '/æz lɔːŋ æz/', 'miễn là', '', ["You can borrow it as long as you return it.", '', 'Bạn mượn được miễn là trả lại.']),
      w('in case', '/ɪn keɪs/', 'phòng khi', '', ['Take an umbrella in case it rains.', '', 'Mang ô phòng khi mưa.']),
      w('payment', '/ˈpeɪmənt/', 'khoản thanh toán', '', ['We received your payment.', '', 'Chúng tôi đã nhận thanh toán.']),
      w('guarantee', '/ˌɡærənˈtiː/', 'bảo đảm', '', ['We guarantee delivery within 48 hours.', '', 'Chúng tôi bảo đảm giao trong 48 giờ.']),
      w('in stock', '/ɪn stɑːk/', 'còn hàng', '', ['Is this model in stock?', '', 'Mẫu này còn hàng không?']),
      w('free of charge', '/friː əv tʃɑːrdʒ/', 'miễn phí', '', ['Installation is free of charge.', '', 'Lắp đặt miễn phí.']),
      w('deal', '/diːl/', 'thoả thuận; vụ làm ăn', '', ["It's a deal!", '', 'Chốt vậy nhé!']),
      w('order', '/ˈɔːrdər/', 'đặt hàng', '', ['If you order today, it will arrive tomorrow.', '', 'Đặt hôm nay, mai có hàng.'])
    ],
    qs: [
      ['mc', 'If you ___ before Friday, you will get a discount.', 'pay', ['will pay', 'paid', 'would pay'], 'Loại 1: If + hiện tại.'],
      ['mc', "We won't deliver ___ we receive the payment.", 'unless', ['if', 'as long as', 'in case'], 'unless = nếu không.'],
      ['mc', 'You can use my laptop ___ you are careful.', 'as long as', ['unless', 'in case', 'even if not'], 'Miễn là.'],
      ['mc', 'Bring some cash ___ the card machine doesn\'t work.', 'in case', ['unless', 'as long as', 'if not'], 'Phòng khi.'],
      ['mc', 'free of charge nghĩa là?', 'miễn phí', ['bị tính phí', 'tự chịu phí', 'có phụ phí'], 'free of charge.'],
      ['hear', "If you order a hundred units, we'll install them free of charge.", 'Đặt 100 chiếc sẽ được lắp miễn phí.', ['Đặt 100 chiếc giảm giá 100%.', 'Lắp đặt tính phí.', 'Đặt 10 chiếc được miễn phí.'], 'hundred units / free of charge.'],
      ['order', 'Sắp xếp: “Nếu bạn đặt hôm nay, mai sẽ có hàng.”', ['If you', 'order today,', 'it will', 'arrive tomorrow.'], 'If you order today, it will arrive tomorrow.']
    ],
    noi: [["If you *order* fifty *units*, → we\'ll give you a *ten* percent *discount*. ↘", 'Đặt 50 chiếc, giảm 10%.'], ['Is this *model* in *stock*? ↗', 'Mẫu này còn hàng không?'], ["It's a *deal*! ↘", 'Chốt vậy nhé!']],
    hoithoai: {
      ctx: 'Một khách hàng doanh nghiệp muốn mua 40 màn hình máy tính từ công ty em.', vai: 'Khách thương lượng, em là nhân viên kinh doanh.', ai: '🧑‍💼 Buyer',
      luot: [
        T(['We need 40 monitors. Can you give us a discount?', '', 'Chúng tôi cần 40 màn hình. Giảm giá được không?'], ["If you order 50, we'll give you an 8% discount.", 'Nếu anh đặt 50 chiếc, chúng tôi giảm 8%.', 'Điều kiện loại 1 để thương lượng.'], ['If you will order 50, we give discount.', 'Không dùng will sau if.'], ['Yes, free all.', 'Không chuyên nghiệp.']),
        T(['Hmm. And how fast can you deliver?', '', 'Giao nhanh được không?'], ["As long as the payment arrives by Wednesday, we guarantee delivery on Friday.", 'Miễn tiền về trước thứ Tư, chúng tôi bảo đảm giao thứ Sáu.', 'as long as + guarantee.'], ['Unless you pay, we deliver Friday.', 'Sai nghĩa.'], ['We delivered Friday.', 'Sai thì.']),
        T(['OK, 50 units then. Is installation included?', '', 'Được, 50 chiếc. Có lắp đặt không?'], ["Yes, installation is free of charge. It's a deal!", 'Có, lắp đặt miễn phí. Chốt nhé!', 'Chốt thoả thuận.'], ['Installation is in case.', 'Sai nghĩa.'], ['No, installation is free of charge.', 'Mâu thuẫn.'])
      ], ket: 'Em đã thương lượng bằng câu điều kiện loại 1.'
    },
    tom: ['If + hiện tại, will + V', 'unless / as long as / in case', 'Thương lượng'], nguphap: 'Câu điều kiện loại 1; unless, as long as, in case', phatam: "we'll /wiːl/; ngắt nhóm sau mệnh đề If",
    loi: ['If … will', 'Nhầm unless và in case'], btvn: ['Viết 5 câu chào hàng dùng điều kiện loại 1', 'Đóng vai thương lượng giá với người thân', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 5 ================= */
  const d5 = {
    n: 5, ten: plan[4].ten, kinds: K,
    muc: 'Dùng câu điều kiện loại 2 để nói giả định, ước mơ và đưa lời khuyên (If I were you…).',
    hoc: `${F(['If', '+', 'quá khứ đơn', ',', 'would / could / might', '+', 'V'])}${exs([['If I had more time, I would learn to play the guitar.', 'Nếu có nhiều thời gian hơn, tôi sẽ học đàn.'], ["If I were you, I'd ask for a pay rise.", 'Nếu tôi là bạn, tôi sẽ đề nghị tăng lương.'], ['What would you do if you won the lottery?', 'Bạn sẽ làm gì nếu trúng số?']])}
      ${tbl(['Loại 1 (có thể xảy ra)', 'Loại 2 (khó / không có thật)'], [["If I get the job, I'll move to Hanoi.", "If I got the job, I'd move to Hanoi. (khó được nhận)"], ['If it rains, we will stay home.', 'If I were rich, I would travel the world.']])}
      ${tip('🔑 Dùng <b>were</b> cho mọi ngôi trong văn chuẩn: <i>If I were, if she were</i>. Văn nói đôi khi nghe <i>if I was</i>.')}${G('dieu-kien-012', 'Câu điều kiện 0, 1, 2')}`,
    vocab: [
      w('If I were you', '/ɪf aɪ wɜːr juː/', 'Nếu tôi là bạn', 'Mở đầu lời khuyên.', ["If I were you, I'd take the job.", '', 'Nếu là bạn, tôi sẽ nhận việc đó.']),
      w('pay rise', '/peɪ raɪz/', 'tăng lương', '', ['She asked for a pay rise.', '', 'Cô ấy đề nghị tăng lương.']),
      w('win the lottery', '/wɪn ðə ˈlɑːtəri/', 'trúng xổ số', '', ['What would you do if you won the lottery?', '', 'Trúng số bạn làm gì?']),
      w('afford', '/əˈfɔːrd/', 'đủ tiền mua', '', ["If I could afford it, I'd buy a house.", '', 'Nếu đủ tiền, tôi sẽ mua nhà.']),
      w('dream', '/driːm/', 'ước mơ', '', ['My dream is to have my own shop.', '', 'Ước mơ của tôi là có cửa hàng riêng.']),
      w('quit', '/kwɪt/', 'nghỉ việc, bỏ', '', ["I wouldn't quit my job.", '', 'Tôi sẽ không nghỉ việc.']),
      w('imagine', '/ɪˈmædʒɪn/', 'tưởng tượng', '', ['Imagine you lived in London.', '', 'Hãy tưởng tượng bạn sống ở London.']),
      w('charity', '/ˈtʃærəti/', 'từ thiện', '', ["I'd give some money to charity.", '', 'Tôi sẽ làm từ thiện một ít.']),
      w('situation', '/ˌsɪtʃuˈeɪʃn/', 'tình huống', '', ['What would you do in my situation?', '', 'Ở hoàn cảnh tôi bạn sẽ làm gì?']),
      w('honestly', '/ˈɑːnɪstli/', 'thật lòng mà nói', '', ["Honestly, I'd say no.", '', 'Thật lòng, tôi sẽ từ chối.'])
    ],
    qs: [
      ['mc', 'If I ___ more money, I would buy a new car.', 'had', ['have', 'will have', 'would have'], 'Loại 2: If + quá khứ.'],
      ['mc', 'If I were you, I ___ talk to the manager.', 'would', ['will', 'am', 'did'], 'If I were you → would.'],
      ['mc', 'If she ___ here, she would know what to do.', 'were', ['is', 'be', 'will be'], 'were cho mọi ngôi.'],
      ['mc', 'Câu nào là giả định không có thật?', 'If I lived in Paris, I would visit museums every week.', ['If it rains, I will stay home.', 'If you heat ice, it melts.', 'If you call me, I will answer.'], 'Loại 2.'],
      ['mc', "I can't ___ a new phone right now.", 'afford', ['effort', 'offer', 'allow'], "can't afford = không đủ tiền."],
      ['hear', "If I were you, I'd ask for a pay rise. You've worked really hard.", 'Nếu là bạn, tôi sẽ đề nghị tăng lương.', ['Tôi sẽ nghỉ việc nếu là bạn.', 'Bạn đã được tăng lương.', 'Đừng hỏi tăng lương.'], "If I were you, I'd ask…"],
      ['order', 'Sắp xếp: “Ở hoàn cảnh tôi, bạn sẽ làm gì?”', ['What', 'would you do', 'in my', 'situation?'], 'What would you do in my situation?']
    ],
    noi: [["If I *were* you, → I'd *ask* for a pay *rise*. ↘", 'Nếu là bạn, tôi sẽ xin tăng lương.'], ['What would you *do* → if you *won* the *lottery*? ↘', 'Trúng số bạn sẽ làm gì?'], ["If I could *afford* it, → I'd *buy* a *house*. ↘", 'Nếu đủ tiền, tôi mua nhà.']],
    hoithoai: {
      ctx: 'Bạn em đang phân vân có nên nhận lời mời làm việc ở Hà Nội không.', vai: 'Lan xin lời khuyên, em góp ý.', ai: '👩 Lan',
      luot: [
        T(["I've got a job offer in Hanoi. The salary is higher, but my family is here. What would you do?", '', 'Mình được mời làm ở Hà Nội, lương cao hơn nhưng gia đình ở đây. Bạn sẽ làm gì?'], ["Honestly, if I were you, I'd think about your long-term goals first.", 'Thật lòng, nếu là bạn, mình sẽ nghĩ về mục tiêu lâu dài trước.', 'If I were you + would.'], ['If I am you, I will go.', 'Giả định → were, would.'], ['If I was you, I go.', 'Thiếu would.']),
        T(['My goal is to become a manager in five years.', '', 'Mục tiêu của mình là thành quản lý trong 5 năm.'], ["Then if you took the job, you'd learn faster and get more experience.", 'Vậy nếu nhận việc, bạn sẽ học nhanh hơn và có thêm kinh nghiệm.', 'Loại 2: took … would.'], ['Then if you take, you would learned.', 'Sai dạng động từ.'], ["Then you'd took the job.", 'would + V nguyên mẫu.']),
        T(["But I'd miss my family so much!", '', 'Nhưng mình sẽ nhớ gia đình lắm!'], ["I understand. If you went, you could fly home once a month.", 'Mình hiểu. Nếu đi, bạn có thể bay về mỗi tháng một lần.', 'could trong điều kiện loại 2.'], ['If you go, you could flew home.', 'Sai dạng.'], ['Unless miss family.', 'Câu rối.'])
      ], ket: 'Em đã đưa lời khuyên bằng câu điều kiện loại 2.'
    },
    tom: ['If + quá khứ, would + V', 'If I were you', 'Loại 1 vs loại 2'], nguphap: 'Câu điều kiện loại 2', phatam: "I'd /aɪd/ = I would; were /wɜːr/",
    loi: ['If I am you', 'would + V2'], btvn: ['Trả lời: "What would you do if you had one year free?" 100 từ', 'Viết 3 lời khuyên "If I were you…"', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 6 ================= */
  const d6 = {
    n: 6, ten: plan[5].ten, kinds: K,
    muc: 'Nêu ý kiến có lý do, đồng ý, phản đối nhẹ nhàng, hỏi ý kiến người khác.',
    hoc: `${tbl(['Chức năng', 'Mẫu câu'], [['Nêu ý kiến', "In my opinion, … / I think… / Personally, I believe…"], ['Đưa lý do', 'The main reason is that… / For example, …'], ['Đồng ý', "I completely agree. / That's a good point. / Exactly!"], ['Đồng ý một phần', 'I see your point, but… / That may be true, but…'], ['Phản đối lịch sự', "I'm not sure I agree. / I see it a bit differently."], ['Hỏi ý kiến', 'What do you think? / How do you feel about…?']])}
      ${say("I see your point, but I think working from home can be less productive for some people.", 'Tôi hiểu ý bạn, nhưng tôi nghĩ làm việc tại nhà có thể kém hiệu quả với một số người.')}
      ${tip('🙂 Người bản xứ hiếm khi nói thẳng "You are wrong". Hãy <b>công nhận trước</b> (I see your point) rồi <b>nêu ý khác</b> (but…).')}`,
    vocab: [
      w('in my opinion', '/ɪn maɪ əˈpɪnjən/', 'theo ý kiến của tôi', '', ['In my opinion, the price is too high.', '', 'Theo tôi, giá quá cao.']),
      w('personally', '/ˈpɜːrsənəli/', 'cá nhân tôi thì', '', ['Personally, I prefer working in the morning.', '', 'Cá nhân tôi thích làm buổi sáng.']),
      w('agree', '/əˈɡriː/', 'đồng ý', '', ['I completely agree with you.', '', 'Tôi hoàn toàn đồng ý với bạn.']),
      w('disagree', '/ˌdɪsəˈɡriː/', 'không đồng ý', '', ['I disagree with that idea.', '', 'Tôi không đồng ý với ý đó.']),
      w('point', '/pɔɪnt/', 'ý, luận điểm', '', ["That's a good point.", '', 'Ý đó hay đấy.']),
      w('productive', '/prəˈdʌktɪv/', 'hiệu quả, năng suất', '', ['I am more productive at home.', '', 'Ở nhà tôi làm hiệu quả hơn.']),
      w('advantage', '/ədˈvæntɪdʒ/', 'lợi thế, ưu điểm', '', ['One advantage is saving time.', '', 'Một ưu điểm là tiết kiệm thời gian.']),
      w('disadvantage', '/ˌdɪsədˈvæntɪdʒ/', 'nhược điểm', '', ['The main disadvantage is the cost.', '', 'Nhược điểm chính là chi phí.']),
      w('on the other hand', '/ɑːn ði ˈʌðər hænd/', 'mặt khác', '', ['On the other hand, it is expensive.', '', 'Mặt khác, nó đắt.']),
      w('exactly', '/ɪɡˈzæktli/', 'chính xác', '', ['Exactly! That\'s what I mean.', '', 'Chính xác! Ý tôi là vậy.'])
    ],
    qs: [
      ['mc', 'Cách phản đối lịch sự nhất là?', "I see your point, but I'm not sure I agree.", ["You're wrong.", 'No, stupid idea.', "I don't agree you."], 'Công nhận trước, nêu ý sau.'],
      ['mc', 'I ___ with you completely.', 'agree', ['am agree', 'agreeing', 'agreed with'], 'agree (không có am).'],
      ['mc', 'Từ dùng để đưa mặt đối lập?', 'On the other hand,', ['For example,', 'Exactly,', 'Personally,'], 'Mặt khác.'],
      ['mc', 'productive nghĩa là?', 'hiệu quả, năng suất', ['sản phẩm', 'chuyên nghiệp', 'tích cực'], 'productive.'],
      ['mc', '___, I prefer to work in the office.', 'Personally', ['Exactly', 'Unless', 'Disagree'], 'Cá nhân tôi.'],
      ['hear', "That may be true, but on the other hand, working from home saves a lot of time.", 'Có thể đúng, nhưng mặt khác làm ở nhà tiết kiệm thời gian.', ['Làm ở nhà tốn thời gian.', 'Hoàn toàn đồng ý.', 'Làm ở văn phòng tốt hơn.'], 'saves a lot of time.'],
      ['order', 'Sắp xếp: “Theo tôi, giá quá cao.”', ['In my opinion,', 'the price', 'is', 'too high.'], 'In my opinion, the price is too high.']
    ],
    noi: [['In my *opinion*, → working from *home* → has many *advantages*. ↘', 'Theo tôi, làm ở nhà có nhiều ưu điểm.'], ['I see your *point*, → *but* I see it a bit *differently*. ↘', 'Tôi hiểu ý bạn, nhưng tôi thấy hơi khác.'], ['What do *you* *think*? ↘', 'Bạn nghĩ sao?']],
    hoithoai: {
      ctx: 'Nhóm em thảo luận: có nên cho nhân viên làm việc tại nhà 2 ngày/tuần không.', vai: 'Đồng nghiệp nêu ý kiến, em phản hồi.', ai: '👥 Colleague',
      luot: [
        T(['I think we should let everyone work from home two days a week.', '', 'Tôi nghĩ nên cho mọi người làm ở nhà 2 ngày/tuần.'], ["That's a good point. People would save a lot of time on traffic.", 'Ý hay. Mọi người sẽ đỡ mất thời gian kẹt xe.', 'Đồng ý + lý do.'], ['You are wrong.', 'Quá thẳng.'], ['I am agree.', 'agree không đi với am.']),
        T(['Exactly. And they would be more productive.', '', 'Chính xác. Và họ sẽ năng suất hơn.'], ["I'm not sure about that. Some people find it hard to focus at home.", 'Tôi không chắc lắm. Có người khó tập trung ở nhà.', 'Phản đối nhẹ.'], ['No. Home is bad.', 'Cộc lốc.'], ['I disagree you.', 'disagree with.']),
        T(['Hmm, so what do you suggest?', '', 'Vậy bạn đề xuất gì?'], ['Personally, I think we could try it for three months and then review the results.', 'Cá nhân tôi nghĩ ta thử 3 tháng rồi đánh giá kết quả.', 'Đề xuất có cân nhắc.'], ['I suggest nothing.', 'Không xây dựng.'], ['Personally, try it.', 'Câu cụt.'])
      ], ket: 'Em đã thảo luận, đồng ý và phản đối lịch sự.'
    },
    tom: ['Nêu ý kiến + lý do', 'Đồng ý / phản đối lịch sự', 'advantage / disadvantage'], nguphap: 'agree with; I see your point, but…', phatam: 'Nhấn từ ý kiến chính; but… ngắt nhẹ',
    loi: ['I am agree', 'Phản đối quá thẳng'], btvn: ['Viết ý kiến của em về làm việc tại nhà, 100 từ', 'Ghi âm 1 phút nêu ý kiến có 2 lý do', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 7 ================= */
  const d7 = {
    n: 7, ten: plan[6].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Ôn giai đoạn 1: HTHT, HTHT tiếp diễn, quá khứ hoàn thành, điều kiện loại 1–2, nêu ý kiến.',
    hoc: `<h4>Tóm tắt tuần 1</h4>${tbl(['Chủ điểm', 'Mẫu câu'], [['HTHT vs QKĐ', "I've worked here since 2016. Before that, I worked at…"], ['HTHT tiếp diễn', "I've been working on this all morning."], ['Quá khứ hoàn thành', 'By the time I arrived, they had left.'], ['Điều kiện 1', "If you order 50, we'll give you a discount."], ['Điều kiện 2', "If I were you, I'd…"], ['Ý kiến', 'In my opinion… / I see your point, but…']])}`,
    qs: [['mc', 'If I ___ you, I would accept the offer.', 'were', ['am', 'will be', 'had'], 'Loại 2.'], ['mc', "I've known her ___ ten years.", 'for', ['since', 'from', 'ago'], 'Khoảng → for.']],
    noi: [["If I *were* you, → I'd *take* the *job*. ↘", 'Nếu là bạn, tôi nhận việc.'], ["I've been *learning* *English* → for *two* *years*. ↘", 'Tôi học tiếng Anh hai năm rồi.']],
    hoithoai: {
      ctx: 'Tổng ôn: buổi cà phê với một người bạn nước ngoài.', vai: 'Trả lời liên tục, đúng thì.', ai: '🧑 Daniel',
      luot: [
        T(['How long have you been learning English?', '', 'Bạn học tiếng Anh bao lâu rồi?'], ["I've been learning it for about two years.", 'Khoảng hai năm rồi.', 'HTHT tiếp diễn + for.'], ['I learn it since two years.', 'Sai thì và since.'], ['I have been learn it.', 'been + V-ing.']),
        T(['Why did you start?', '', 'Sao bạn bắt đầu học?'], ["I'd just got a job at an international company, and I needed it.", 'Tôi vừa vào làm ở công ty quốc tế và cần tiếng Anh.', 'Quá khứ hoàn thành + quá khứ đơn.'], ["I've just got a job and need it.", 'Kể chuyện quá khứ.'], ['I start because job.', 'Câu sai.']),
        T(['What would you do if you could live abroad for a year?', '', 'Nếu được sống ở nước ngoài một năm bạn sẽ làm gì?'], ["I'd probably study in Australia and travel around the country.", 'Có lẽ tôi sẽ học ở Úc và đi khắp nước Úc.', 'would + V.'], ['I will study in Australia.', 'Giả định → would.'], ["I'd studied in Australia.", 'would + V nguyên mẫu.']),
        T(["Some people say it's better to learn English abroad. Do you agree?", '', 'Có người nói học ở nước ngoài tốt hơn. Bạn đồng ý không?'], ["That may be true, but I think you can learn well at home if you practise every day.", 'Có thể đúng, nhưng tôi nghĩ học ở nhà cũng tốt nếu luyện mỗi ngày.', 'Đồng ý một phần + điều kiện.'], ['You are wrong.', 'Quá thẳng.'], ['Yes, I am agree.', 'agree không có am.'])
      ], ket: 'Em đã ôn trọn giai đoạn 1!'
    },
    tom: ['Ôn tuần 1', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn', phatam: 'Ôn dạng rút gọn I\'ve, I\'d',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: học lại ngày yếu', 'Làm 3 chủ điểm B1 đầu tiên trong Sổ tay', 'Ghi âm 1 phút: "What would you do if…?"']
  };

  /* ================= NGÀY 8 ================= */
  const d8 = {
    n: 8, ten: plan[7].ten, kinds: K,
    muc: 'Dùng câu bị động để mô tả quy trình sản xuất, dịch vụ; biết khi nào cần "by".',
    hoc: `${F(['S', '+', 'be (chia thì)', '+', 'V3', '(+ by …)'])}<h4>Ví dụ quy trình làm cà phê</h4>${tbl(['Bước', 'Câu bị động'], [['1', 'Coffee beans <b>are grown</b> in the Central Highlands.'], ['2', 'They <b>are picked</b> by hand and <b>dried</b> in the sun.'], ['3', 'Then the beans <b>are roasted</b> and <b>ground</b>.'], ['4', 'Finally, the coffee <b>is packed</b> and <b>sent</b> to shops.']])}
      ${tip('🔑 Dùng bị động khi <b>hành động quan trọng hơn người làm</b>. Chỉ thêm <b>by …</b> khi người làm là thông tin mới/quan trọng.')}${G('bi-dong', 'Câu bị động')}`,
    vocab: [
      w('produce', '/prəˈduːs/', 'sản xuất', '', ['Rice is produced in the Mekong Delta.', '', 'Lúa gạo được sản xuất ở ĐBSCL.']),
      w('process', '/ˈprɑːses/', 'quy trình', '', ['The process takes three days.', '', 'Quy trình mất ba ngày.']),
      w('harvest', '/ˈhɑːrvɪst/', 'thu hoạch', '', ['The coffee is harvested in November.', '', 'Cà phê được thu hoạch vào tháng 11.']),
      w('roast', '/roʊst/', 'rang', '', ['The beans are roasted slowly.', '', 'Hạt được rang chậm.']),
      w('grind', '/ɡraɪnd/', 'xay', 'ground (V2, V3).', ['The coffee is ground before brewing.', '', 'Cà phê được xay trước khi pha.']),
      w('pack', '/pæk/', 'đóng gói', '', ['The products are packed in boxes.', '', 'Sản phẩm được đóng gói vào hộp.']),
      w('export', '/ɪkˈspɔːrt/', 'xuất khẩu', '', ['Vietnam exports coffee to many countries.', '', 'Việt Nam xuất khẩu cà phê sang nhiều nước.']),
      w('factory', '/ˈfæktəri/', 'nhà máy', '', ['The phones are made in a factory in Bac Ninh.', '', 'Điện thoại được làm ở nhà máy tại Bắc Ninh.']),
      w('raw material', '/rɔː məˈtɪriəl/', 'nguyên liệu thô', '', ['Raw materials are imported.', '', 'Nguyên liệu thô được nhập khẩu.']),
      w('quality check', '/ˈkwɑːləti tʃek/', 'kiểm tra chất lượng', '', ['Every product goes through a quality check.', '', 'Mọi sản phẩm đều qua kiểm tra chất lượng.'])
    ],
    qs: [
      ['mc', 'Coffee ___ in the Central Highlands.', 'is grown', ['grows by', 'is grow', 'grown'], 'Bị động hiện tại.'],
      ['mc', 'This bridge ___ in 2005.', 'was built', ['built', 'is built', 'has built'], 'Bị động quá khứ.'],
      ['mc', 'The beans are ___ and then packed.', 'roasted', ['roast', 'roasting', 'roasts'], 'be + V3.'],
      ['mc', 'grind → V3?', 'ground', ['grinded', 'grand', 'grounded'], 'grind – ground – ground.'],
      ['mc', 'Câu nào cần giữ "by …"?', 'The novel was written by a 15-year-old girl.', ['The rice is harvested by people.', 'The letters are delivered by someone.', 'The car was washed by somebody.'], 'Người làm là thông tin quan trọng.'],
      ['hear', 'The phones are assembled in Vietnam and exported to Europe.', 'Điện thoại lắp ráp ở VN, xuất sang châu Âu.', ['Điện thoại nhập từ châu Âu.', 'Điện thoại thiết kế ở VN.', 'Điện thoại bán ở VN.'], 'assembled / exported.'],
      ['order', 'Sắp xếp: “Sản phẩm được đóng gói vào hộp.”', ['The products', 'are', 'packed', 'in boxes.'], 'The products are packed in boxes.']
    ],
    noi: [['*Coffee* beans are *grown* → in the Central *Highlands*. ↘', 'Hạt cà phê được trồng ở Tây Nguyên.'], ['*Then*, → they are *roasted* and *ground*. ↘', 'Sau đó được rang và xay.'], ['Every *product* goes through a *quality* *check*. ↘', 'Mọi sản phẩm đều qua kiểm tra chất lượng.']],
    hoithoai: {
      ctx: 'Em dẫn đoàn khách nước ngoài tham quan xưởng cà phê.', vai: 'Khách hỏi về quy trình, em giải thích.', ai: '🧳 Visitor',
      luot: [
        T(['Where are the coffee beans grown?', '', 'Hạt cà phê được trồng ở đâu?'], ["They're grown in Dak Lak, in the Central Highlands.", 'Được trồng ở Đắk Lắk, Tây Nguyên.', 'Bị động.'], ['They grow in Dak Lak by farmers.', 'Nên dùng bị động.'], ['They are grow in Dak Lak.', 'be + V3.']),
        T(['And what happens after harvesting?', '', 'Sau khi thu hoạch thì sao?'], ['First, the beans are dried in the sun. Then they are roasted here in the factory.', 'Đầu tiên phơi nắng, sau đó rang ở nhà máy.', 'Quy trình + bị động.'], ['First, we dry beans sun.', 'Câu thiếu.'], ['The beans roasted the factory.', 'Thiếu are, thiếu in.']),
        T(['Is all the coffee sold in Vietnam?', '', 'Cà phê bán hết ở Việt Nam à?'], ['No, about 70% is exported to Europe and Japan.', 'Không, khoảng 70% được xuất sang châu Âu và Nhật.', 'Bị động + số liệu.'], ['No, 70% exports Europe.', 'Thiếu bị động.'], ['Yes, it is sold by everyone.', 'Sai thông tin.'])
      ], ket: 'Em đã giải thích quy trình bằng câu bị động.'
    },
    tom: ['be + V3', 'Mô tả quy trình', 'Khi nào dùng by'], nguphap: 'Câu bị động các thì', phatam: '-ed trong bị động: dried /draɪd/, packed /pækt/',
    loi: ['Thiếu be', 'Lạm dụng by someone'], btvn: ['Mô tả quy trình làm một món ăn bằng bị động, 8 câu', 'Viết 5 câu bị động về sản phẩm quê em', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 9 ================= */
  const d9 = {
    n: 9, ten: plan[8].ten, kinds: K,
    muc: 'Dùng who, which, that, where, whose để định nghĩa, giải thích, mô tả chi tiết.',
    hoc: `${tbl(['Từ', 'Thay cho', 'Ví dụ'], [['who', 'người', 'A cashier is a person <b>who</b> handles money.'], ['which / that', 'vật', 'A router is a device <b>which</b> connects computers to the internet.'], ['where', 'nơi', 'This is the café <b>where</b> we first met.'], ['whose', 'sở hữu', "That's the customer <b>whose</b> card was blocked."]])}
      <h4>Có dấu phẩy hay không?</h4>${exs([['The staff who work in IT get free training. (chỉ nhân viên IT)', 'Mệnh đề xác định: không dấu phẩy.'], ['My manager, who is from Australia, speaks Vietnamese well.', 'Thông tin thêm: có dấu phẩy, không dùng that.']])}
      ${tip('🧠 Mẹo giải thích từ khi quên tên: <i>It\'s a thing which… / It\'s a person who… / It\'s a place where…</i>')}${G('menh-de-quan-he', 'Mệnh đề quan hệ')}`,
    vocab: [
      w('device', '/dɪˈvaɪs/', 'thiết bị', '', ['A router is a device which connects to the internet.', '', 'Router là thiết bị kết nối Internet.']),
      w('cashier', '/kæˈʃɪr/', 'thu ngân', '', ['The cashier counted the money.', '', 'Thu ngân đếm tiền.']),
      w('colleague', '/ˈkɑːliːɡ/', 'đồng nghiệp', '', ['She is a colleague who always helps me.', '', 'Chị ấy là đồng nghiệp luôn giúp tôi.']),
      w('supplier', '/səˈplaɪər/', 'nhà cung cấp', '', ['We need a supplier whose prices are lower.', '', 'Cần nhà cung cấp có giá thấp hơn.']),
      w('tool', '/tuːl/', 'công cụ', '', ["It's a tool that saves time.", '', 'Đó là công cụ tiết kiệm thời gian.']),
      w('describe', '/dɪˈskraɪb/', 'mô tả', '', ['Can you describe the problem?', '', 'Bạn mô tả vấn đề được không?']),
      w('definition', '/ˌdefɪˈnɪʃn/', 'định nghĩa', '', ["What's the definition of this word?", '', 'Định nghĩa của từ này là gì?']),
      w('stand for', '/stænd fɔːr/', 'viết tắt của', '', ['ATM stands for Automated Teller Machine.', '', 'ATM là viết tắt của Automated Teller Machine.']),
      w('the one', '/ðə wʌn/', 'cái/người (đã nói đến)', '', ["I want the one that's on sale.", '', 'Tôi muốn cái đang giảm giá.']),
      w('whose', '/huːz/', 'của người mà', '', ["He's the man whose car was stolen.", '', 'Đó là người bị trộm xe.'])
    ],
    qs: [
      ['mc', 'A doctor is a person ___ treats sick people.', 'who', ['which', 'where', 'whose'], 'Người → who.'],
      ['mc', 'This is the bank ___ I opened my first account.', 'where', ['which', 'who', 'whose'], 'Nơi + mệnh đề đủ → where.'],
      ['mc', 'I met a woman ___ son works at Google.', 'whose', ['who', 'which', 'that her'], 'Sở hữu → whose.'],
      ['mc', 'My laptop, ___ I bought last year, is already slow.', 'which', ['that', 'who', 'where'], 'Có dấu phẩy → which.'],
      ['mc', 'ATM ___ Automated Teller Machine.', 'stands for', ['stands up', 'means for', 'is stand'], 'stand for.'],
      ['hear', "It's a small device which you plug into a computer to store files.", 'Thiết bị nhỏ cắm vào máy tính để lưu file.', ['Phần mềm lưu file trực tuyến.', 'Một loại máy in.', 'Người sửa máy tính.'], 'USB – device … store files.'],
      ['order', 'Sắp xếp: “Đó là quán cà phê nơi chúng tôi gặp nhau lần đầu.”', ["That's the café", 'where', 'we', 'first met.'], "That's the café where we first met."]
    ],
    noi: [["It's a *device* which *connects* computers → to the *internet*. ↘", 'Đó là thiết bị kết nối máy tính với Internet.'], ['My *manager*, → who is from *Australia*, → speaks *Vietnamese*. ↘', 'Quản lý của tôi, người Úc, nói tiếng Việt.'], ["That's the *café* where we *first* *met*. ↘", 'Đó là quán nơi chúng ta gặp nhau lần đầu.']],
    hoithoai: {
      ctx: 'Em chơi trò "đoán từ" với đồng nghiệp người Anh để luyện mô tả.', vai: 'Tom đố, em giải thích bằng mệnh đề quan hệ.', ai: '🧑 Tom',
      luot: [
        T(["Describe a 'password' without saying the word.", '', 'Mô tả "mật khẩu" mà không nói từ đó.'], ["It's a secret word which you type to open your account.", 'Đó là từ bí mật bạn gõ để mở tài khoản.', 'which + mệnh đề.'], ["It's a word who opens account.", 'Vật → which.'], ["It's a word where you type.", 'Không phải nơi chốn.']),
        T(["Good! Now describe a 'landlord'.", '', 'Hay! Giờ mô tả "chủ nhà cho thuê".'], ["It's a person who owns a house and rents it to other people.", 'Người sở hữu nhà và cho người khác thuê.', 'who + mệnh đề.'], ["It's a person which owns a house.", 'Người → who.'], ["It's a house whose rent.", 'Câu rối.']),
        T(["Last one: describe a 'bakery'.", '', 'Câu cuối: mô tả "tiệm bánh".'], ["It's a shop where you can buy bread and cakes.", 'Cửa hàng nơi bạn mua bánh mì, bánh ngọt.', 'where + mệnh đề.'], ["It's a shop which you buy bread.", 'which thiếu giới từ; dùng where.'], ["It's a person who bakes.", 'Đó là baker.'])
      ], ket: 'Em đã giải thích từ bằng mệnh đề quan hệ.'
    },
    tom: ['who / which / that / where / whose', 'Có / không dấu phẩy', 'Giải thích khi quên từ'], nguphap: 'Mệnh đề quan hệ xác định và không xác định', phatam: 'Ngắt hơi ở dấu phẩy của mệnh đề không xác định',
    loi: ['who cho vật', 'that sau dấu phẩy'], btvn: ['Định nghĩa 8 từ công việc bằng mệnh đề quan hệ', 'Chơi đoán từ với người thân', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 10 ================= */
  const d10 = {
    n: 10, ten: plan[9].ten, kinds: K,
    muc: 'Truyền đạt lại lời nói, câu hỏi, yêu cầu của người khác: say, tell, ask; lùi thì đúng.',
    hoc: `${tbl(['Trực tiếp', 'Tường thuật'], [['"I am busy," she said.', 'She said (that) she <b>was</b> busy.'], ['"We will call you," they said.', 'They said they <b>would</b> call me.'], ['"Did you send it?" he asked.', 'He asked <b>if</b> I <b>had sent</b> it.'], ['"Where do you live?"', 'She asked me where I <b>lived</b>.'], ['"Please wait here."', 'He told me <b>to wait</b> there.']])}
      ${tip('🔑 <b>say</b> (something) · <b>tell</b> + người · <b>ask</b> + người + if / từ hỏi / to V. Khi việc vẫn còn đúng ở hiện tại, có thể không lùi thì: <i>He said he lives in Hue.</i>')}${G('tuong-thuat', 'Câu tường thuật')}`,
    vocab: [
      w('said', '/sed/', 'đã nói (say)', '', ['She said she was tired.', '', 'Cô ấy nói cô ấy mệt.']),
      w('told', '/toʊld/', 'đã bảo (tell + người)', '', ['He told me to call back.', '', 'Anh ấy bảo tôi gọi lại.']),
      w('asked', '/æskt/', 'đã hỏi; đã nhờ', '', ['She asked if I was free.', '', 'Cô ấy hỏi tôi có rảnh không.']),
      w('explained', '/ɪkˈspleɪnd/', 'đã giải thích', '', ['He explained that the system was down.', '', 'Anh ấy giải thích hệ thống bị sập.']),
      w('promised', '/ˈprɑːmɪst/', 'đã hứa', '', ['They promised to deliver on time.', '', 'Họ hứa giao đúng hạn.']),
      w('reminded', '/rɪˈmaɪndɪd/', 'đã nhắc', '', ['She reminded me to lock the door.', '', 'Cô ấy nhắc tôi khoá cửa.']),
      w('message', '/ˈmesɪdʒ/', 'lời nhắn', '', ['Can I take a message?', '', 'Tôi ghi lời nhắn nhé?']),
      w('according to', '/əˈkɔːrdɪŋ tuː/', 'theo (nguồn tin)', '', ['According to the manager, the meeting is cancelled.', '', 'Theo quản lý, cuộc họp bị huỷ.']),
      w('mention', '/ˈmenʃn/', 'đề cập', '', ['Did he mention the price?', '', 'Anh ấy có nhắc đến giá không?']),
      w('whether', '/ˈweðər/', 'liệu có … không', '= if (trang trọng hơn).', ['She asked whether we needed help.', '', 'Cô ấy hỏi liệu chúng tôi có cần giúp không.'])
    ],
    qs: [
      ['mc', '"I am tired." → She said she ___ tired.', 'was', ['is', 'were', 'has been'], 'Lùi thì.'],
      ['mc', 'He ___ me that the meeting was cancelled.', 'told', ['said', 'spoke', 'talked'], 'tell + người.'],
      ['mc', '"Where do you work?" → She asked me where ___.', 'I worked', ['did I work', 'do I work', 'I work did'], 'Không đảo ngữ.'],
      ['mc', '"Please send me the file." → He asked me ___ him the file.', 'to send', ['send', 'sending', 'sent'], 'ask + người + to V.'],
      ['mc', '"Will you come?" → She asked ___ I would come.', 'if', ['that', 'what', 'did'], 'Câu hỏi Yes/No → if.'],
      ['hear', "The client said they would pay next week, and asked us to send the invoice again.", 'Khách nói sẽ trả tuần sau và nhờ gửi lại hoá đơn.', ['Khách đã trả và cần hoá đơn.', 'Khách không trả.', 'Khách hỏi giá mới.'], 'would pay next week / send the invoice again.'],
      ['order', 'Sắp xếp: “Cô ấy nhắc tôi khoá cửa.”', ['She', 'reminded me', 'to lock', 'the door.'], 'She reminded me to lock the door.']
    ],
    noi: [['She *said* she was *busy* → and would *call* me *later*. ↘', 'Cô ấy nói đang bận và sẽ gọi lại.'], ['He *asked* if we had *received* the *payment*. ↘', 'Anh ấy hỏi chúng ta đã nhận tiền chưa.'], ['According to the *manager*, → the *meeting* is *cancelled*. ↘', 'Theo quản lý, cuộc họp bị huỷ.']],
    hoithoai: {
      ctx: 'Em vừa nghe máy thay sếp, giờ báo lại lời nhắn.', vai: 'Sếp hỏi, em tường thuật.', ai: '👨‍💼 Boss',
      luot: [
        T(['Did anyone call while I was out?', '', 'Lúc tôi đi vắng có ai gọi không?'], ['Yes, Mr. Park called. He said he was in Hanoi this week.', 'Có, ông Park gọi. Ông ấy nói tuần này ở Hà Nội.', 'said + lùi thì.'], ['Yes, Mr. Park said me he is in Hanoi.', 'said me sai → told me.'], ['Mr. Park tell he in Hanoi.', 'Sai thì, thiếu động từ.']),
        T(['Did he say anything about the contract?', '', 'Ông ấy có nói gì về hợp đồng không?'], ["He asked if you had read the new version and told me to remind you.", 'Ông ấy hỏi sếp đã đọc bản mới chưa và bảo em nhắc sếp.', 'asked if + told me to.'], ['He asked did you read it.', 'Không đảo ngữ trong câu tường thuật.'], ['He told to remind.', 'Thiếu người.']),
        T(['OK. Anything else?', '', 'Được. Còn gì nữa không?'], ["He promised to send the signed copy by Friday.", 'Ông ấy hứa gửi bản đã ký trước thứ Sáu.', 'promised to V.'], ['He promised sending.', 'promise + to V.'], ['He said will send.', 'Thiếu chủ ngữ, chưa lùi thì.'])
      ], ket: 'Em đã truyền đạt lời nhắn chính xác.'
    },
    tom: ['Lùi thì', 'say / tell / ask', 'Câu hỏi tường thuật', 'told / asked + to V'], nguphap: 'Câu tường thuật', phatam: 'said /sed/, asked /æskt/',
    loi: ['said me', 'Đảo ngữ trong câu hỏi tường thuật'], btvn: ['Tường thuật 5 câu nói trong cuộc họp gần nhất', 'Viết lời nhắn điện thoại 60 từ', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 11 ================= */
  const d11 = {
    n: 11, ten: plan[10].ten, kinds: K,
    muc: 'Đặt câu hỏi gián tiếp để hỏi lịch sự hơn: Could you tell me…? Do you know…? I was wondering if…',
    hoc: `${tbl(['Câu hỏi trực tiếp', 'Câu hỏi gián tiếp (lịch sự hơn)'], [['Where is the meeting room?', 'Could you tell me where the meeting room <b>is</b>?'], ['What time does the bank close?', 'Do you know what time the bank <b>closes</b>?'], ['Is the manager available?', 'Could you tell me <b>if</b> the manager is available?'], ['Can you help me?', 'I was wondering <b>if</b> you could help me.']])}
      ${tip('🔑 Sau phần mở đầu, câu trở về <b>trật tự câu kể</b> (S + V) và <b>bỏ do/does/did</b>. ❌ <i>Could you tell me where is the room?</i>')}`,
    vocab: [
      w('Could you tell me', '/kʊd juː tel miː/', 'Bạn có thể cho tôi biết', '', ['Could you tell me where the lift is?', '', 'Cho tôi biết thang máy ở đâu được không?']),
      w('Do you know', '/duː juː noʊ/', 'Bạn có biết', '', ['Do you know when the shop opens?', '', 'Bạn có biết khi nào cửa hàng mở?']),
      w('I was wondering if', '/aɪ wəz ˈwʌndərɪŋ ɪf/', 'Không biết liệu (rất lịch sự)', '', ['I was wondering if you could help me.', '', 'Không biết bạn có thể giúp tôi không.']),
      w('available', '/əˈveɪləbl/', 'có mặt; còn trống', '', ['Is Mr. Lee available now?', '', 'Ông Lee có rảnh không?']),
      w('lift', '/lɪft/', 'thang máy (Anh)', '= elevator (Mỹ).', ['The lift is on the left.', '', 'Thang máy ở bên trái.']),
      w('directions', '/dəˈrekʃnz/', 'chỉ dẫn đường', '', ['Could you give me directions?', '', 'Chỉ đường giúp tôi được không?']),
      w('procedure', '/prəˈsiːdʒər/', 'thủ tục', '', ['Could you explain the procedure?', '', 'Giải thích thủ tục giúp tôi?']),
      w('require', '/rɪˈkwaɪər/', 'yêu cầu, cần', '', ['Do you know what documents are required?', '', 'Bạn biết cần những giấy tờ gì không?']),
      w('application', '/ˌæplɪˈkeɪʃn/', 'hồ sơ, đơn xin', '', ['How long will it take to process my application?', '', 'Xử lý hồ sơ mất bao lâu?']),
      w('appreciate', '/əˈpriːʃieɪt/', 'cảm kích', '', ['I would appreciate your help.', '', 'Tôi rất cảm kích sự giúp đỡ của bạn.'])
    ],
    qs: [
      ['mc', 'Could you tell me where ___?', 'the station is', ['is the station', 'does the station', 'the station does be'], 'Trật tự câu kể.'],
      ['mc', 'Do you know what time ___?', 'the bank closes', ['does the bank close', 'closes the bank', 'the bank does close'], 'Bỏ does.'],
      ['mc', 'Could you tell me ___ the manager is in?', 'if', ['that', 'does', 'what if'], 'Yes/No → if.'],
      ['mc', 'Cách hỏi lịch sự nhất là?', 'I was wondering if you could send me the report.', ['Send me the report.', 'You send report?', 'Why not send report?'], 'I was wondering if…'],
      ['mc', 'available nghĩa là?', 'có mặt, còn trống', ['bận', 'vắng mặt', 'đắt'], 'available.'],
      ['hear', 'Could you tell me what documents are required to open an account?', 'Hỏi cần giấy tờ gì để mở tài khoản.', ['Hỏi phí mở tài khoản.', 'Hỏi giờ làm việc.', 'Hỏi tài khoản ở đâu.'], 'what documents are required.'],
      ['order', 'Sắp xếp: “Bạn có biết khi nào chuyến bay đến không?”', ['Do you know', 'when', 'the flight', 'arrives?'], 'Do you know when the flight arrives?']
    ],
    noi: [['Could you *tell* me where the *meeting* room is? ↗', 'Cho tôi biết phòng họp ở đâu?'], ['I was *wondering* if you could *help* me. ↘', 'Không biết bạn có thể giúp tôi không.'], ['Do you *know* what time the *bank* *closes*? ↗', 'Bạn biết mấy giờ ngân hàng đóng cửa không?']],
    hoithoai: {
      ctx: 'Em đến văn phòng xuất nhập cảnh ở nước ngoài để gia hạn visa.', vai: 'Nhân viên hỏi, em hỏi thông tin lịch sự.', ai: '🏢 Officer',
      luot: [
        T(['Good morning. How can I help you?', '', 'Chào buổi sáng. Tôi giúp gì được?'], ["Good morning. Could you tell me how I can extend my visa?", 'Chào. Cho tôi biết cách gia hạn visa được không?', 'Câu hỏi gián tiếp.'], ['How I extend visa?', 'Thiếu từ, cộc.'], ['Could you tell me how can I extend my visa?', 'Không đảo: how I can.']),
        T(['You need to fill in this form and bring your passport.', '', 'Bạn cần điền mẫu này và mang hộ chiếu.'], ['Do you know how long it takes to process?', 'Anh biết xử lý mất bao lâu không?', 'Câu hỏi gián tiếp.'], ['Do you know how long does it take?', 'Bỏ does.'], ['How long is it take?', 'Sai ngữ pháp.']),
        T(['Usually about five working days.', '', 'Thường khoảng 5 ngày làm việc.'], ["Thank you. I was wondering if I could pay by card.", 'Cảm ơn. Không biết tôi trả bằng thẻ được không.', 'I was wondering if.'], ['Can I card?', 'Câu cụt.'], ['I was wondering could I pay.', 'Cần if.'])
      ], ket: 'Em đã hỏi thủ tục bằng câu hỏi gián tiếp lịch sự.'
    },
    tom: ['Could you tell me…? / Do you know…?', 'I was wondering if…', 'Trật tự câu kể, bỏ do/does'], nguphap: 'Câu hỏi gián tiếp', phatam: 'Could you /kʊdʒuː/ nối âm; ngữ điệu ↗ lịch sự',
    loi: ['Giữ đảo ngữ sau Could you tell me', 'Giữ do/does'], btvn: ['Đổi 8 câu hỏi trực tiếp sang gián tiếp', 'Viết email hỏi thông tin dịch vụ 80 từ', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 12 ================= */
  const d12 = {
    n: 12, ten: plan[11].ten, kinds: K,
    muc: 'Mô tả số liệu, xu hướng tăng – giảm, so sánh phần trăm; nền tảng cho IELTS Writing Task 1 và báo cáo.',
    hoc: `${tbl(['Xu hướng', 'Động từ', 'Danh từ'], [['tăng', 'rise, increase, grow, go up', 'a rise, an increase, growth'], ['giảm', 'fall, decrease, drop, decline, go down', 'a fall, a decrease, a drop, a decline'], ['ổn định', 'remain stable, stay the same', '—'], ['dao động', 'fluctuate', 'a fluctuation'], ['đạt đỉnh', 'peak, reach a peak', 'a peak']])}
      ${tbl(['Mức độ (trạng từ)', 'Tính từ'], [['sharply, dramatically', 'a sharp / dramatic rise'], ['steadily, gradually', 'a steady / gradual increase'], ['slightly', 'a slight drop']])}
      ${exs([['Sales rose sharply from 2 to 5 billion dong.', 'Doanh số tăng mạnh từ 2 lên 5 tỷ đồng.'], ['There was a slight drop in the number of customers in May.', 'Tháng Năm số khách giảm nhẹ.'], ['The figure remained stable at around 20%.', 'Con số giữ ổn định quanh 20%.']])}
      ${tip('🔑 Giới từ: rise <b>from</b> X <b>to</b> Y · rise <b>by</b> 10% (mức chênh) · <b>at</b> 20% (mức đứng).')}`,
    vocab: [
      w('rise', '/raɪz/', 'tăng; sự tăng', 'rose, risen.', ['Prices rose by 5%.', '', 'Giá tăng 5%.']),
      w('decline', '/dɪˈklaɪn/', 'giảm; sự suy giảm', '', ['Sales declined last quarter.', '', 'Doanh số giảm quý trước.']),
      w('remain stable', '/rɪˈmeɪn ˈsteɪbl/', 'giữ ổn định', '', ['The rate remained stable.', '', 'Tỷ lệ giữ ổn định.']),
      w('fluctuate', '/ˈflʌktʃueɪt/', 'dao động', '', ['Exchange rates fluctuate every day.', '', 'Tỷ giá dao động hằng ngày.']),
      w('peak', '/piːk/', 'đỉnh; đạt đỉnh', '', ['Sales peaked in December.', '', 'Doanh số đạt đỉnh tháng 12.']),
      w('sharply', '/ˈʃɑːrpli/', 'mạnh, đột ngột', '', ['Costs increased sharply.', '', 'Chi phí tăng mạnh.']),
      w('gradually', '/ˈɡrædʒuəli/', 'dần dần', '', ['The number gradually went up.', '', 'Con số tăng dần.']),
      w('slightly', '/ˈslaɪtli/', 'nhẹ, một chút', '', ['It fell slightly.', '', 'Nó giảm nhẹ.']),
      w('figure', '/ˈfɪɡjər/', 'con số, số liệu', '', ['The figure doubled in five years.', '', 'Con số tăng gấp đôi trong 5 năm.']),
      w('quarter', '/ˈkwɔːrtər/', 'quý; một phần tư', '', ['Profits grew in the first quarter.', '', 'Lợi nhuận tăng quý 1.'])
    ],
    qs: [
      ['mc', 'Sales increased ___ 2 billion ___ 3 billion.', 'from / to', ['by / to', 'at / from', 'in / on'], 'from X to Y.'],
      ['mc', 'Prices rose ___ 10% last year.', 'by', ['at', 'to', 'with'], 'Mức chênh → by.'],
      ['mc', 'There was a ___ fall in sales. (giảm mạnh)', 'sharp', ['sharply', 'slight', 'steady'], 'Tính từ trước danh từ.'],
      ['mc', 'The number of users ___ in December, then fell.', 'peaked', ['remained stable', 'fluctuated down', 'declined up'], 'Đạt đỉnh.'],
      ['mc', 'fluctuate nghĩa là?', 'dao động', ['tăng mạnh', 'giảm dần', 'ổn định'], 'fluctuate.'],
      ['hear', 'Online sales grew steadily from fifteen percent in 2020 to forty percent in 2025.', 'Bán online tăng đều từ 15% lên 40%.', ['Tăng từ 50% lên 40%.', 'Giảm từ 40% xuống 15%.', 'Giữ ổn định 15%.'], 'fifteen → forty.'],
      ['order', 'Sắp xếp: “Doanh số tăng mạnh trong quý 1.”', ['Sales', 'rose', 'sharply', 'in the first quarter.'], 'Sales rose sharply in the first quarter.']
    ],
    noi: [['*Sales* rose *sharply* → from *two* to *five* billion *dong*. ↘', 'Doanh số tăng mạnh từ 2 lên 5 tỷ.'], ['There was a *slight* *drop* in *May*. ↘', 'Tháng Năm giảm nhẹ.'], ['The *figure* remained *stable* → at around *twenty* *percent*. ↘', 'Con số ổn định quanh 20%.']],
    hoithoai: {
      ctx: 'Em trình bày nhanh kết quả kinh doanh quý cho sếp người nước ngoài.', vai: 'Sếp hỏi, em mô tả số liệu.', ai: '👩‍💼 Director',
      luot: [
        T(['How were our sales this quarter?', '', 'Doanh số quý này thế nào?'], ['They rose by 12%, from 4 to about 4.5 billion dong.', 'Tăng 12%, từ 4 lên khoảng 4,5 tỷ đồng.', 'by + from … to.'], ['They rose at 12%.', 'Mức chênh → by.'], ['They are rise 12%.', 'Sai thì.']),
        T(['Which product performed best?', '', 'Sản phẩm nào tốt nhất?'], ['Laptops. Their sales increased sharply and peaked in September.', 'Laptop. Doanh số tăng mạnh và đạt đỉnh tháng 9.', 'Mô tả xu hướng.'], ['Laptops peak sharply up.', 'Câu rối.'], ['Laptops are best performed.', 'Sai cấu trúc.']),
        T(['Any problems?', '', 'Có vấn đề gì không?'], ['Printer sales declined slightly, and accessories remained stable.', 'Máy in giảm nhẹ, phụ kiện giữ ổn định.', 'Hai xu hướng.'], ['Printers declined slight.', 'Trạng từ: slightly.'], ['Accessories fluctuated stable.', 'Mâu thuẫn.'])
      ], ket: 'Em đã báo cáo số liệu bằng từ vựng xu hướng.'
    },
    tom: ['rise / fall / remain stable / peak / fluctuate', 'Trạng từ mức độ', 'from … to / by / at'], nguphap: 'Động từ + trạng từ; tính từ + danh từ xu hướng', phatam: 'Đọc số thập phân: four point five; percent /pərˈsent/',
    loi: ['rise at 10%', 'sharp/sharply sai vị trí'], btvn: ['Mô tả doanh thu cửa hàng/gia đình 6 tháng, 100 từ', 'Thử bài "IELTS Writing Task 1" trong Luyện đề', 'Luyện 🎤 đọc số']
  };

  /* ================= NGÀY 13 ================= */
  const d13 = {
    n: 13, ten: plan[12].ten, kinds: K,
    muc: 'Dùng đúng V-ing / to V sau động từ; phân biệt stop, remember, try đổi nghĩa; nói về thói quen sống.',
    hoc: `${tbl(['+ V-ing', '+ to V'], [['enjoy, avoid, consider, mind, keep, give up, suggest', 'decide, plan, hope, manage, refuse, afford, offer'], ["I've given up eating sugar.", 'I managed to lose 3 kilos.']])}
      <h4>Đổi nghĩa</h4>${tbl(['Động từ', '+ to V', '+ V-ing'], [['stop', 'dừng lại để làm: stop to rest', 'thôi làm: stop smoking'], ['remember', 'nhớ phải làm: remember to drink water', 'nhớ đã làm: I remember meeting her'], ['try', 'cố gắng: try to sleep earlier', 'thử: try drinking warm water']])}
      ${tip('🧘 Chủ đề lối sống rất hay gặp ở IELTS Speaking Part 1: <i>Do you try to keep fit? What have you given up recently?</i>')}${G('v-ing-to-v-b1', 'V-ing và to V đổi nghĩa')}`,
    vocab: [
      w('give up', '/ɡɪv ʌp/', 'từ bỏ', '+ V-ing.', ["I've given up drinking soda.", '', 'Tôi đã bỏ uống nước ngọt.']),
      w('avoid', '/əˈvɔɪd/', 'tránh', '+ V-ing.', ['Try to avoid eating late.', '', 'Cố tránh ăn khuya.']),
      w('manage to', '/ˈmænɪdʒ tə/', 'xoay xở được, làm được', '', ['I managed to finish on time.', '', 'Tôi đã kịp xong đúng giờ.']),
      w('keep fit', '/kiːp fɪt/', 'giữ dáng, giữ sức khoẻ', '', ['I go swimming to keep fit.', '', 'Tôi đi bơi để giữ sức khoẻ.']),
      w('habit', '/ˈhæbɪt/', 'thói quen', '', ['Reading is a good habit.', '', 'Đọc sách là thói quen tốt.']),
      w('healthy', '/ˈhelθi/', 'lành mạnh', '', ['I try to eat healthy food.', '', 'Tôi cố ăn đồ lành mạnh.']),
      w('stressed', '/strest/', 'căng thẳng', '', ['I feel stressed at work.', '', 'Tôi thấy căng thẳng khi làm việc.']),
      w('balance', '/ˈbæləns/', 'cân bằng', '', ['Work-life balance is important.', '', 'Cân bằng công việc – cuộc sống rất quan trọng.']),
      w('consider', '/kənˈsɪdər/', 'cân nhắc', '+ V-ing.', ["I'm considering changing jobs.", '', 'Tôi đang cân nhắc đổi việc.']),
      w('refuse', '/rɪˈfjuːz/', 'từ chối', '+ to V.', ['He refused to answer.', '', 'Anh ấy từ chối trả lời.'])
    ],
    qs: [
      ['mc', "I've decided ___ more exercise.", 'to do', ['doing', 'do', 'done'], 'decide + to V.'],
      ['mc', 'I enjoy ___ in the park in the morning.', 'walking', ['to walk', 'walk', 'walked'], 'enjoy + V-ing.'],
      ['mc', 'He stopped ___ because it was bad for his health.', 'smoking', ['to smoke', 'smoke', 'smoked'], 'Thôi làm.'],
      ['mc', "Remember ___ your medicine after lunch.", 'to take', ['taking', 'take', 'took'], 'Nhớ phải làm.'],
      ['mc', "I can't sleep. – Try ___ your phone an hour before bed.", 'turning off', ['to turn off', 'turn off', 'turned off'], 'try + V-ing = thử.'],
      ['hear', "I've given up eating sweets, and I'm trying to walk ten thousand steps a day.", 'Bỏ ăn đồ ngọt, cố đi 10.000 bước/ngày.', ['Thích ăn đồ ngọt.', 'Đi 1.000 bước/ngày.', 'Bỏ đi bộ.'], 'given up eating sweets / ten thousand steps.'],
      ['order', 'Sắp xếp: “Tôi đang cân nhắc đổi việc.”', ["I'm", 'considering', 'changing', 'jobs.'], "I'm considering changing jobs."]
    ],
    noi: [["I've *given* up *drinking* *soda*. ↘", 'Tôi đã bỏ nước ngọt.'], ['I *try* to *keep* *fit* → by *swimming* twice a *week*. ↘', 'Tôi giữ sức khoẻ bằng cách bơi tuần hai lần.'], ['*Work*-life *balance* is really *important* to me. ↘', 'Cân bằng công việc – cuộc sống rất quan trọng với tôi.']],
    hoithoai: {
      ctx: 'Giám khảo IELTS hỏi em về lối sống (Speaking Part 1).', vai: 'Trả lời 2–3 câu, đúng V-ing / to V.', ai: '👩‍🏫 Examiner',
      luot: [
        T(['Do you do anything to keep fit?', '', 'Bạn có làm gì để giữ sức khoẻ không?'], ['Yes, I go swimming twice a week, and I try to avoid eating late at night.', 'Có, tôi bơi tuần hai lần và cố tránh ăn khuya.', 'avoid + V-ing.'], ['Yes, I avoid to eat late.', 'avoid + V-ing.'], ['Yes, I keep fit swim.', 'Câu sai.']),
        T(['Have you changed any habits recently?', '', 'Gần đây bạn có thay đổi thói quen nào không?'], ["Yes, I've given up drinking bubble tea. It was hard, but I managed to do it.", 'Có, tôi bỏ trà sữa. Khó nhưng tôi đã làm được.', 'give up + V-ing, manage to V.'], ["I've given up to drink.", 'give up + V-ing.'], ['I managed doing it.', 'manage + to V.']),
        T(['How do you deal with stress?', '', 'Bạn đối phó với căng thẳng thế nào?'], ['When I feel stressed, I stop working for ten minutes to have a short walk.', 'Khi căng thẳng, tôi dừng làm 10 phút để đi bộ.', 'stop + to V = dừng để làm.'], ['I stop to work.', 'Sai nghĩa.'], ['I am stressing.', 'Sai dạng.'])
      ], ket: 'Em đã nói về lối sống với V-ing / to V chính xác.'
    },
    tom: ['V + V-ing', 'V + to V', 'stop / remember / try đổi nghĩa'], nguphap: 'Gerund và infinitive', phatam: 'Nhấn động từ chính, đọc lướt to /tə/',
    loi: ['avoid to V', 'stop to V nhầm nghĩa'], btvn: ['Viết 8 câu về thói quen của em', 'Trả lời 3 câu IELTS Part 1 về sức khoẻ, ghi âm', 'Làm chủ điểm trong Sổ tay']
  };

  /* ================= NGÀY 14 ================= */
  const d14 = {
    n: 14, ten: plan[13].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Ôn giai đoạn 2: bị động, mệnh đề quan hệ, tường thuật, câu hỏi gián tiếp, xu hướng, V-ing/to V.',
    hoc: `<h4>Tóm tắt tuần 2</h4>${tbl(['Chủ điểm', 'Mẫu câu'], [['Bị động', 'Coffee is grown… The bridge was built in…'], ['Mệnh đề quan hệ', 'a person who… / a device which… / a place where…'], ['Tường thuật', 'She said she was… / He asked if… / They told me to…'], ['Câu hỏi gián tiếp', 'Could you tell me where … is?'], ['Xu hướng', 'rose sharply by 10% / remained stable at…'], ['V-ing / to V', 'give up doing · decide to do · stop doing / to do']])}`,
    qs: [['mc', 'Could you tell me what time ___?', 'the shop opens', ['does the shop open', 'opens the shop', 'the shop does open'], 'Câu hỏi gián tiếp.'], ['mc', 'The documents ___ yesterday.', 'were signed', ['signed', 'are signed', 'have signed'], 'Bị động quá khứ.']],
    noi: [['Could you *tell* me where the *station* is? ↗', 'Cho tôi biết ga ở đâu?'], ['*Sales* *rose* by *twelve* *percent*. ↘', 'Doanh số tăng 12%.']],
    hoithoai: {
      ctx: 'Tổng ôn: em đưa khách nước ngoài tham quan nhà máy linh kiện.', vai: 'Khách hỏi liên tục.', ai: '🧳 Visitor',
      luot: [
        T(['When was this factory opened?', '', 'Nhà máy mở khi nào?'], ['It was opened in 2015 by a Korean company.', 'Mở năm 2015 bởi một công ty Hàn Quốc.', 'Bị động + by.'], ['It opened by 2015.', 'Sai.'], ['It is opened in 2015.', 'Quá khứ → was.']),
        T(["What's that machine?", '', 'Máy kia là gì?'], ["It's a machine which tests every circuit board.", 'Máy kiểm tra từng bo mạch.', 'which + mệnh đề.'], ["It's a machine who tests.", 'Vật → which.'], ["It's a machine where tests.", 'Sai.']),
        T(['How has production changed?', '', 'Sản lượng thay đổi thế nào?'], ['It has increased steadily by about 8% a year.', 'Tăng đều khoảng 8% mỗi năm.', 'Xu hướng + by.'], ['It increased steady.', 'steadily.'], ['It has rose 8%.', 'has risen.']),
        T(['Your manager said something about a new line?', '', 'Quản lý anh nói gì đó về dây chuyền mới?'], ["Yes, she said they would open a new line next year.", 'Vâng, chị ấy nói năm sau sẽ mở dây chuyền mới.', 'Tường thuật lùi thì.'], ['She said me they will open.', 'said me sai.'], ['She told that opens.', 'Sai.'])
      ], ket: 'Em đã ôn trọn giai đoạn 2!'
    },
    tom: ['Ôn tuần 2', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn', phatam: 'Ngữ điệu câu hỏi gián tiếp',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: học lại ngày yếu', 'Làm đề "IELTS mini 1" trong Luyện đề', 'Ghi âm mô tả một quy trình 1 phút']
  };

  window.PLT_EN3 = { plan, stages, H: { w, L, T, tbl, tip, exs, F, sp, K, G, say }, days: [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14] };
})();

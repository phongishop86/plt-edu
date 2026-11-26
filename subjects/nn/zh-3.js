/* PLT-Edu · Tiếng Trung – Cấp 3 (HSK 4): lộ trình 30 ngày, Ngày 1–14 */
(function () {
  'use strict';
  const sp = PLT.LANG.sp;
  const w = (h, p, v, use, ex) => ({ h, p, v, use, ex });
  const L = (h, p, v) => ({ h, p, v });
  const T = (a, ok, ...bad) => ({ a: L(...a), o: [{ h: ok[0], p: ok[1], v: ok[2], ok: 1, f: ok[3] }].concat(bad.map((b) => ({ h: b[0], p: b[1], f: b[2] }))) });
  const tbl = (head, rows) => `<div class="zh-scroll"><table class="dtable full zh-tb"><tr>${head.map((x) => `<th>${x}</th>`).join('')}</tr>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</table></div>`;
  const tip = (x) => `<div class="zh-tip">${x}</div>`;
  const exs = (a) => `<ul>${a.map(([h, p, v]) => `<li>${h} ${sp(h)}<br><span class="zh-wp">${p}</span> – ${v}</li>`).join('')}</ul>`;
  const K = ['meaning', 'listen', 'pinyin', 'hanzi', 'listenPy', 'match'];

  const plan = [
    'Bổ ngữ xu hướng mở rộng: 起来, 下去, 出来', 'Nhấn mạnh với 连…都/也', 'Giả định nhượng bộ: 即使…也, 哪怕…也', 'Không điều kiện: 无论/不管…都', 'Đã vậy thì: 既然…就; ngoài ra: 除了…以外', 'Câu 是…的 và câu hỏi tu từ', 'Ôn tập tuần 1 và kiểm tra',
    'Không phải… mà là: 不是…而是, 要么…要么', 'Giới từ 对于, 关于, 至于', 'Liên từ văn viết: 由于, 因此, 于是', 'Trạng từ thái độ: 竟然, 果然, 到底, 难怪', 'Tăng tiến: 甚至, 并且, 何况', 'Viết email công việc', 'Ôn tập tuần 2 và kiểm tra',
    'Họp và báo cáo tiến độ', 'Khiếu nại và chăm sóc khách hàng', 'Internet và an toàn thông tin', 'Môi trường và lối sống xanh', 'Tài chính cá nhân: tiết kiệm, vay, đầu tư', 'Đọc tin tức', 'Kiểm tra tổng hợp và mô phỏng',
    'Văn hoá trà và thư pháp', 'Sức khoẻ và lối sống', 'Giáo dục và nuôi dạy con', 'Phép lịch sự và tặng quà', 'Trình bày số liệu: tăng, giảm, phần trăm', 'Thuyết phục và thương lượng', 'Nghe hiểu đoạn dài', 'Luyện viết HSK 4 và mô phỏng', 'Kiểm tra cuối khoá HSK 4 và lộ trình HSK 5–6'
  ].map((ten, i) => ({ n: i + 1, ten }));
  const stages = [
    { ten: '🧩 Giai đoạn 1 – Cấu trúc câu HSK 4', tu: 1, den: 7 }, { ten: '🔗 Giai đoạn 2 – Liên từ, trạng từ, văn viết', tu: 8, den: 14 },
    { ten: '💼 Giai đoạn 3 – Công việc và xã hội', tu: 15, den: 21 }, { ten: '🎎 Giai đoạn 4 – Văn hoá, số liệu, luyện thi', tu: 22, den: 30 }
  ];

  const d1 = {
    n: 1, ten: plan[0].ten, kinds: K,
    muc: 'Dùng 起来 (bắt đầu / nhận xét / nhớ ra), 下去 (tiếp tục), 出来 (nhận ra, tạo ra) với nghĩa mở rộng.',
    hoc: `${tbl(['Bổ ngữ', 'Nghĩa mở rộng', 'Ví dụ'], [['起来', 'bắt đầu', '大家都笑起来了。– Mọi người bật cười.'], ['起来', 'khi làm thử thì thấy', '这件衣服穿起来很舒服。– Áo này mặc vào thấy dễ chịu.'], ['起来', 'nhớ ra', '我想起来了！– Tôi nhớ ra rồi!'], ['下去', 'tiếp tục', '请说下去。– Mời nói tiếp.'], ['出来', 'nhận ra, phát hiện', '我听出来了，是你！– Tôi nghe ra rồi, là bạn!'], ['出来', 'nghĩ ra, tạo ra', '他想出来一个好办法。– Anh ấy nghĩ ra một cách hay.']])}
      ${tip('🔑 <b>想起来</b> = nhớ ra điều đã quên; <b>想出来</b> = nghĩ ra điều mới.')}`,
    vocab: [
      w('想起来', 'xiǎng qǐlai', 'nhớ ra', '', ['我想起来他的名字了。', 'Wǒ xiǎng qǐlai tā de míngzi le.', 'Tôi nhớ ra tên anh ấy rồi.']),
      w('想出来', 'xiǎng chūlai', 'nghĩ ra', '', ['你想出办法来了吗？', 'Nǐ xiǎng chū bànfǎ lái le ma?', 'Bạn nghĩ ra cách chưa?']),
      w('坚持下去', 'jiānchí xiàqu', 'kiên trì tiếp', '', ['只要坚持下去就会成功。', 'Zhǐyào jiānchí xiàqu jiù huì chénggōng.', 'Cứ kiên trì là thành công.']),
      w('看起来', 'kàn qǐlai', 'trông có vẻ', '', ['你看起来很累。', 'Nǐ kàn qǐlai hěn lèi.', 'Bạn trông mệt.']),
      w('听出来', 'tīng chūlai', 'nghe ra', '', ['我听出来他是南方人。', 'Wǒ tīng chūlai tā shì nánfāng rén.', 'Tôi nghe ra anh ấy là người miền Nam.']),
      w('办法', 'bànfǎ', 'cách, biện pháp', '', ['这是个好办法。', 'Zhè shì ge hǎo bànfǎ.', 'Đây là cách hay.']),
      w('成功', 'chénggōng', 'thành công', '', ['祝你成功！', 'Zhù nǐ chénggōng!', 'Chúc bạn thành công!']),
      w('舒服', 'shūfu', 'dễ chịu', '', ['这双鞋穿起来很舒服。', 'Zhè shuāng xié chuān qǐlai hěn shūfu.', 'Đôi giày này đi vào rất êm.']),
      w('笑', 'xiào', 'cười', '', ['孩子们笑起来了。', 'Háizimen xiào qǐlai le.', 'Lũ trẻ bật cười.']),
      w('继续', 'jìxù', 'tiếp tục', '', ['我们继续开会。', 'Wǒmen jìxù kāihuì.', 'Chúng ta tiếp tục họp.'])
    ],
    qs: [
      ['mc', '“Tôi nhớ ra rồi!” là?', '我想起来了！', ['我想出来了！', '我想下去了！', '我起来想了！'], '想起来 = nhớ ra.'],
      ['mc', '他___一个好办法。(nghĩ ra)', '想出了', ['想起了', '想下去', '看起来'], '想出来 = nghĩ ra.'],
      ['mc', '请说___。(nói tiếp)', '下去', ['起来', '出来', '过来'], '下去 = tiếp tục.'],
      ['mc', '你___很累。(trông có vẻ)', '看起来', ['看出来', '看下去', '看过来'], 'Nhận xét bề ngoài.'],
      ['hear', '这个方法听起来不错，可是做起来很难。', 'Cách này nghe thì hay nhưng làm thì khó.', ['Cách này dễ làm.', 'Cách này nghe dở.', 'Tôi không làm được.'], 'V起来.'],
      ['order', 'Sắp xếp: “Cứ kiên trì là thành công.”', ['只要', '坚持下去', '就会', '成功。'], '只要坚持下去就会成功。']
    ],
    noi: [['我想起来了！', 'Wǒ xiǎng qǐlai le! – Tôi nhớ ra rồi!'], ['这个办法听起来不错。', 'Zhège bànfǎ tīng qǐlai búcuò. – Cách này nghe có vẻ hay.'], ['请继续说下去。', 'Qǐng jìxù shuō xiàqu. – Mời nói tiếp.']],
    hoithoai: {
      ctx: 'Họp nhóm tìm giải pháp giảm thời gian chờ ở quầy giao dịch.', vai: 'Trưởng phòng hỏi, em đề xuất.', ai: '👨‍💼 刘经理',
      luot: [
        T(['你想出什么好办法了吗？', 'Nǐ xiǎng chū shénme hǎo bànfǎ le ma?', 'Bạn nghĩ ra cách gì hay chưa?'], ['想出来一个：让客户在手机上先取号。', 'Xiǎng chūlai yí ge: ràng kèhù zài shǒujī shang xiān qǔ hào.', 'Nghĩ ra một cách: cho khách lấy số trước trên điện thoại.', '想出来.'], ['我想起来一个新办法。', 'Wǒ xiǎng qǐlai yí ge xīn bànfǎ.', '想起来 là nhớ lại.'], ['办法想下去。', 'Bànfǎ xiǎng xiàqu.', 'Sai.']),
        T(['听起来不错，具体怎么做？', 'Tīng qǐlai búcuò, jùtǐ zěnme zuò?', 'Nghe hay đấy, cụ thể làm thế nào?'], ['做起来不难，我们的App已经有这个功能。', 'Zuò qǐlai bù nán, wǒmen de App yǐjīng yǒu zhège gōngnéng.', 'Làm không khó, App của mình đã có chức năng này.', 'V起来 nhận xét.'], ['做出来不难过。', 'Zuò chūlai bù nánguò.', 'Sai nghĩa.'], ['我不知道下去。', 'Wǒ bù zhīdào xiàqu.', 'Sai.']),
        T(['好，那你继续跟进下去。', 'Hǎo, nà nǐ jìxù gēnjìn xiàqu.', 'Được, vậy bạn tiếp tục theo dõi nhé.'], ['好的，下周我把结果报告给您。', 'Hǎo de, xià zhōu wǒ bǎ jiéguǒ bàogào gěi nín.', 'Vâng, tuần sau em báo cáo kết quả.', 'Câu 把.'], ['我起来报告。', 'Wǒ qǐlai bàogào.', 'Sai.'], ['不要下去了。', 'Búyào xiàqu le.', 'Từ chối.'])
      ], ket: 'Em đã đề xuất giải pháp bằng bổ ngữ xu hướng mở rộng.'
    },
    tom: ['V起来: bắt đầu / nhận xét / nhớ ra', 'V下去: tiếp tục', 'V出来: nhận ra / nghĩ ra'], nguphap: 'Nghĩa mở rộng của bổ ngữ xu hướng', phatam: '起来 qǐlai, 下去 xiàqu đọc nhẹ âm cuối',
    loi: ['Nhầm 想起来 và 想出来'], btvn: ['Viết 6 câu, mỗi nghĩa một câu', 'Nhận xét 3 sản phẩm bằng V起来', 'Luyện 🎤 3 câu']
  };

  const d2 = {
    n: 2, ten: plan[1].ten, kinds: K,
    muc: 'Nhấn mạnh mức độ cực đoan với 连…都/也 (ngay cả… cũng).',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ'], [['连 + danh từ + 都/也 + V', '连孩子都知道。– Ngay cả trẻ con cũng biết.'], ['连 + một… + 都/也 + 没/不', '他连一句中文都不会说。– Anh ấy một câu tiếng Trung cũng không biết.'], ['连 + động từ + 都/也 + 没 + động từ', '我忙得连饭都没吃。– Tôi bận đến nỗi cơm cũng chưa ăn.']])}
      ${tip('🔑 Phần sau 连 là thứ <b>bất ngờ nhất</b> (dễ nhất / khó nhất).')}`,
    vocab: [
      w('连', 'lián', 'ngay cả', '', ['连老师都不知道。', 'Lián lǎoshī dōu bù zhīdào.', 'Ngay cả thầy cũng không biết.']),
      w('甚至', 'shènzhì', 'thậm chí', '', ['他甚至忘了自己的生日。', 'Tā shènzhì wàngle zìjǐ de shēngrì.', 'Anh ấy thậm chí quên sinh nhật mình.']),
      w('一点儿也不', 'yìdiǎnr yě bù', 'chẳng chút nào', '', ['我一点儿也不累。', 'Wǒ yìdiǎnr yě bú lèi.', 'Tôi chẳng mệt chút nào.']),
      w('简单', 'jiǎndān', 'đơn giản', '', ['这么简单的题连孩子都会。', 'Zhème jiǎndān de tí lián háizi dōu huì.', 'Bài dễ thế trẻ con cũng làm được.']),
      w('复杂', 'fùzá', 'phức tạp', '', ['这个问题很复杂。', 'Zhège wèntí hěn fùzá.', 'Vấn đề này phức tạp.']),
      w('周末', 'zhōumò', 'cuối tuần', '', ['我连周末都要加班。', 'Wǒ lián zhōumò dōu yào jiābān.', 'Cuối tuần tôi cũng phải tăng ca.']),
      w('忙', 'máng', 'bận', '', ['忙得连水都没喝。', 'Máng de lián shuǐ dōu méi hē.', 'Bận đến nước cũng chưa uống.']),
      w('秘密', 'mìmì', 'bí mật', '', ['这件事连他妻子都不知道。', 'Zhè jiàn shì lián tā qīzi dōu bù zhīdào.', 'Chuyện này vợ anh ấy cũng không biết.']),
      w('专家', 'zhuānjiā', 'chuyên gia', '', ['连专家都解决不了。', 'Lián zhuānjiā dōu jiějué bu liǎo.', 'Chuyên gia cũng không giải quyết được.']),
      w('解决', 'jiějué', 'giải quyết', '', ['问题解决了。', 'Wèntí jiějué le.', 'Vấn đề đã được giải quyết.'])
    ],
    qs: [
      ['mc', '“Ngay cả trẻ con cũng biết” là?', '连孩子都知道。', ['孩子连都知道。', '连孩子知道都。', '都连孩子知道。'], '连 + N + 都 + V.'],
      ['mc', '他连一句中文___不会说。', '都', ['就', '才', '还'], '连…都.'],
      ['mc', '我忙得连饭都___吃。', '没', ['不', '别', '了'], 'Chưa làm → 没.'],
      ['mc', '解决 nghĩa là?', 'giải quyết', ['giải thích', 'quyết định', 'giải trí'], 'jiějué.'],
      ['hear', '这个问题太复杂了，连专家都解决不了。', 'Vấn đề quá phức tạp, chuyên gia cũng không giải quyết được.', ['Chuyên gia giải quyết dễ dàng.', 'Vấn đề rất đơn giản.', 'Tôi tự giải quyết được.'], '连专家都.'],
      ['order', 'Sắp xếp: “Cuối tuần tôi cũng phải tăng ca.”', ['我', '连周末', '都要', '加班。'], '我连周末都要加班。']
    ],
    noi: [['我忙得连饭都没吃。', 'Wǒ máng de lián fàn dōu méi chī. – Tôi bận đến cơm cũng chưa ăn.'], ['这么简单，连孩子都会。', 'Zhème jiǎndān, lián háizi dōu huì. – Dễ thế, trẻ con cũng biết.'], ['我一点儿也不累。', 'Wǒ yìdiǎnr yě bú lèi. – Tôi chẳng mệt chút nào.']],
    hoithoai: {
      ctx: 'Đồng nghiệp hỏi thăm em sau tuần chạy dự án.', vai: 'Bạn hỏi, em kể.', ai: '👩 小周',
      luot: [
        T(['这个星期怎么样？', 'Zhège xīngqī zěnmeyàng?', 'Tuần này thế nào?'], ['太忙了，我连周末都在加班。', 'Tài máng le, wǒ lián zhōumò dōu zài jiābān.', 'Bận quá, cuối tuần tôi cũng tăng ca.', '连…都.'], ['我周末连加班都。', 'Wǒ zhōumò lián jiābān dōu.', 'Câu cụt.'], ['我一点儿忙。', 'Wǒ yìdiǎnr máng.', 'Sai.']),
        T(['系统问题解决了吗？', 'Xìtǒng wèntí jiějué le ma?', 'Lỗi hệ thống giải quyết chưa?'], ['还没有，连厂家的专家都没找到原因。', 'Hái méiyǒu, lián chǎngjiā de zhuānjiā dōu méi zhǎodào yuányīn.', 'Chưa, ngay cả chuyên gia hãng cũng chưa tìm ra nguyên nhân.', 'Nhấn mạnh.'], ['专家连都没找到。', 'Zhuānjiā lián dōu méi zhǎodào.', 'Sai.'], ['解决了过。', 'Jiějuéle guo.', 'Sai.']),
        T(['你要注意身体啊！', 'Nǐ yào zhùyì shēntǐ a!', 'Bạn phải giữ sức khoẻ nhé!'], ['谢谢关心，我一点儿也不累，放心吧。', 'Xièxie guānxīn, wǒ yìdiǎnr yě bú lèi, fàngxīn ba.', 'Cảm ơn quan tâm, tôi chẳng mệt chút nào, yên tâm.', '一点儿也不.'], ['我一点儿不累也。', 'Wǒ yìdiǎnr bú lèi yě.', 'Sai.'], ['我不注意。', 'Wǒ bú zhùyì.', 'Không hợp.'])
      ], ket: 'Em đã nhấn mạnh mức độ với 连…都.'
    },
    tom: ['连…都/也', '一点儿也不'], nguphap: 'Câu nhấn mạnh', phatam: '连 lián, 甚至 shènzhì',
    loi: ['Quên 都/也', 'Dùng 不 thay 没 cho việc chưa làm'], btvn: ['Viết 5 câu 连…都', 'Kể tuần bận rộn của em 60 chữ', 'Luyện 🎤 3 câu']
  };

  const d3 = {
    n: 3, ten: plan[2].ten, kinds: K,
    muc: 'Diễn đạt giả định nhượng bộ: 即使…也 (cho dù… vẫn), 哪怕…也 (khẩu ngữ), phân biệt với 虽然…但是.',
    hoc: `${tbl(['Cấu trúc', 'Sắc thái', 'Ví dụ'], [['虽然…但是', 'sự thật', '虽然下雨，但是他来了。– Tuy mưa nhưng anh ấy đã đến.'], ['即使…也', 'giả định', '即使下雨，他也会来。– Cho dù mưa anh ấy vẫn đến.'], ['哪怕…也', 'giả định, mạnh, khẩu ngữ', '哪怕再忙，我也要锻炼。– Dù bận đến đâu tôi vẫn tập.']])}
      ${tip('🔑 <b>也</b> đứng sau chủ ngữ vế sau: 即使…，他<b>也</b>会来。')}`,
    vocab: [
      w('即使', 'jíshǐ', 'cho dù, ngay cả khi', '', ['即使失败了，也没关系。', 'Jíshǐ shībài le, yě méi guānxi.', 'Dù thất bại cũng không sao.']),
      w('哪怕', 'nǎpà', 'dù cho', '', ['哪怕只有一天，我也想去。', 'Nǎpà zhǐ yǒu yì tiān, wǒ yě xiǎng qù.', 'Dù chỉ một ngày tôi cũng muốn đi.']),
      w('失败', 'shībài', 'thất bại', '', ['失败是成功之母。', 'Shībài shì chénggōng zhī mǔ.', 'Thất bại là mẹ thành công.']),
      w('放弃', 'fàngqì', 'từ bỏ', '', ['别放弃！', 'Bié fàngqì!', 'Đừng bỏ cuộc!']),
      w('锻炼', 'duànliàn', 'rèn luyện', '', ['每天锻炼半小时。', 'Měitiān duànliàn bàn xiǎoshí.', 'Mỗi ngày tập nửa tiếng.']),
      w('困难', 'kùnnan', 'khó khăn', '', ['遇到困难不要怕。', 'Yùdào kùnnan búyào pà.', 'Gặp khó khăn đừng sợ.']),
      w('遇到', 'yùdào', 'gặp phải', '', ['我遇到了一个问题。', 'Wǒ yùdàole yí ge wèntí.', 'Tôi gặp một vấn đề.']),
      w('再…也', 'zài… yě', 'dù… đến đâu cũng', '', ['再贵也要买。', 'Zài guì yě yào mǎi.', 'Đắt mấy cũng mua.']),
      w('原则', 'yuánzé', 'nguyên tắc', '', ['这是原则问题。', 'Zhè shì yuánzé wèntí.', 'Đây là vấn đề nguyên tắc.']),
      w('改变', 'gǎibiàn', 'thay đổi', '', ['我的想法改变了。', 'Wǒ de xiǎngfǎ gǎibiàn le.', 'Suy nghĩ của tôi đã thay đổi.'])
    ],
    qs: [
      ['mc', 'Câu giả định “Cho dù mưa anh ấy vẫn đến”?', '即使下雨，他也会来。', ['虽然下雨，但是他来了。', '因为下雨，所以他来。', '即使下雨，也他会来。'], '即使…也, 也 sau chủ ngữ.'],
      ['mc', '哪怕再忙，我___要锻炼。', '也', ['就', '才', '都'], '哪怕…也.'],
      ['mc', '放弃 nghĩa là?', 'từ bỏ', ['phóng to', 'thả ra', 'buông lỏng'], 'fàngqì.'],
      ['mc', '“Đắt mấy cũng mua” là?', '再贵也要买。', ['很贵也要买。', '再贵就买。', '贵再也买。'], '再 + adj + 也.'],
      ['hear', '即使遇到困难，我们也不会放弃。', 'Dù gặp khó khăn chúng tôi cũng không bỏ cuộc.', ['Gặp khó là bỏ.', 'Không có khó khăn.', 'Chúng tôi đã thất bại.'], '即使…也.'],
      ['order', 'Sắp xếp: “Dù thất bại cũng không sao.”', ['即使', '失败了，', '也', '没关系。'], '即使失败了，也没关系。']
    ],
    noi: [['即使失败了，也没关系。', 'Jíshǐ shībài le, yě méi guānxi. – Dù thất bại cũng không sao.'], ['哪怕再忙，我也要锻炼。', 'Nǎpà zài máng, wǒ yě yào duànliàn. – Dù bận mấy tôi vẫn tập.'], ['别放弃！', 'Bié fàngqì! – Đừng bỏ cuộc!']],
    hoithoai: {
      ctx: 'Một bạn học muốn bỏ học tiếng Trung vì khó.', vai: 'Bạn than, em động viên.', ai: '😩 小黄',
      luot: [
        T(['中文太难了，我想放弃。', 'Zhōngwén tài nán le, wǒ xiǎng fàngqì.', 'Tiếng Trung khó quá, tôi muốn bỏ.'], ['别放弃！即使很难，只要每天练习也会进步。', 'Bié fàngqì! Jíshǐ hěn nán, zhǐyào měitiān liànxí yě huì jìnbù.', 'Đừng bỏ! Dù khó, chỉ cần luyện mỗi ngày vẫn tiến bộ.', '即使…也.'], ['虽然难，所以放弃吧。', 'Suīrán nán, suǒyǐ fàngqì ba.', 'Sai cặp.'], ['那你放弃吧。', 'Nà nǐ fàngqì ba.', 'Không động viên.']),
        T(['可是我太忙了，没时间。', 'Kěshì wǒ tài máng le, méi shíjiān.', 'Nhưng tôi bận quá, không có thời gian.'], ['哪怕一天只学十分钟，也比不学好。', 'Nǎpà yì tiān zhǐ xué shí fēnzhōng, yě bǐ bù xué hǎo.', 'Dù mỗi ngày chỉ 10 phút cũng hơn là không học.', '哪怕…也.'], ['哪怕忙，就别学。', 'Nǎpà máng, jiù bié xué.', 'Sai.'], ['十分钟太多了。', 'Shí fēnzhōng tài duō le.', 'Lạc.']),
        T(['你说得对，我再试试。', 'Nǐ shuō de duì, wǒ zài shìshi.', 'Bạn nói đúng, tôi thử lại.'], ['加油！遇到困难随时问我。', 'Jiāyóu! Yùdào kùnnan suíshí wèn wǒ.', 'Cố lên! Gặp khó cứ hỏi tôi.', 'Động viên.'], ['不用试了。', 'Búyòng shì le.', 'Ngược.'], ['困难遇到我。', 'Kùnnan yùdào wǒ.', 'Sai.'])
      ], ket: 'Em đã động viên bạn bằng câu giả định nhượng bộ.'
    },
    tom: ['即使…也 / 哪怕…也', '再 + adj + 也', 'So với 虽然…但是'], nguphap: 'Câu nhượng bộ giả định', phatam: '即使 jíshǐ, 哪怕 nǎpà',
    loi: ['Nhầm 虽然 và 即使', '也 đặt trước chủ ngữ'], btvn: ['Viết 5 câu 即使…也 về mục tiêu của em', 'Viết lời động viên 50 chữ', 'Luyện 🎤 3 câu']
  };

  const d4 = {
    n: 4, ten: plan[3].ten, kinds: K,
    muc: 'Diễn đạt “bất kể… đều”: 无论/不管 + từ nghi vấn / A还是B / 多… + 都/也.',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ'], [['无论 + từ nghi vấn + 都', '无论谁来，我都欢迎。– Bất kể ai đến tôi đều chào đón.'], ['不管 + A还是B + 都', '不管刮风还是下雨，他都去跑步。'], ['无论多 + adj + 都', '无论多忙，都要吃早饭。']])}
      ${tip('⚠️ Sau 无论/不管 phải có <b>yếu tố lựa chọn</b> (谁, 什么, 多, 还是, 是否). ❌ 无论下雨，… → ✅ 无论下不下雨，…')}`,
    vocab: [
      w('无论', 'wúlùn', 'bất kể', '', ['无论什么时候，你都可以找我。', 'Wúlùn shénme shíhou, nǐ dōu kěyǐ zhǎo wǒ.', 'Lúc nào bạn cũng có thể tìm tôi.']),
      w('不管', 'bùguǎn', 'bất kể (khẩu ngữ)', '', ['不管多晚，我都等你。', 'Bùguǎn duō wǎn, wǒ dōu děng nǐ.', 'Muộn mấy tôi cũng đợi.']),
      w('欢迎', 'huānyíng', 'chào đón', '', ['欢迎光临！', 'Huānyíng guānglín!', 'Chào mừng quý khách!']),
      w('随时', 'suíshí', 'bất cứ lúc nào', '', ['有问题随时联系。', 'Yǒu wèntí suíshí liánxì.', 'Có vấn đề liên hệ bất cứ lúc nào.']),
      w('联系', 'liánxì', 'liên hệ', '', ['我们保持联系。', 'Wǒmen bǎochí liánxì.', 'Chúng ta giữ liên lạc.']),
      w('保持', 'bǎochí', 'duy trì', '', ['保持安静。', 'Bǎochí ānjìng.', 'Giữ yên lặng.']),
      w('态度', 'tàidu', 'thái độ', '', ['服务态度很好。', 'Fúwù tàidu hěn hǎo.', 'Thái độ phục vụ tốt.']),
      w('结果', 'jiéguǒ', 'kết quả', '', ['不管结果怎么样，我都接受。', 'Bùguǎn jiéguǒ zěnmeyàng, wǒ dōu jiēshòu.', 'Kết quả thế nào tôi cũng chấp nhận.']),
      w('接受', 'jiēshòu', 'chấp nhận', '', ['我接受你的建议。', 'Wǒ jiēshòu nǐ de jiànyì.', 'Tôi chấp nhận đề nghị của bạn.']),
      w('是否', 'shìfǒu', 'có hay không (văn viết)', '', ['无论是否成功，都要总结。', 'Wúlùn shìfǒu chénggōng, dōu yào zǒngjié.', 'Thành công hay không cũng phải tổng kết.'])
    ],
    qs: [
      ['mc', 'Câu đúng là?', '无论下不下雨，他都去跑步。', ['无论下雨，他都去跑步。', '无论下雨，他也去跑步了。', '下雨无论，他都跑步。'], 'Cần yếu tố lựa chọn.'],
      ['mc', '不管多忙，我___要吃早饭。', '都', ['才', '就', '再'], '不管…都.'],
      ['mc', '随时 nghĩa là?', 'bất cứ lúc nào', ['tuỳ ý', 'đúng giờ', 'thường xuyên'], 'suíshí.'],
      ['mc', '无论谁来，我都___。', '欢迎', ['欢迎都', '来', '是否'], 'Câu hoàn chỉnh.'],
      ['hear', '不管结果怎么样，我都会接受。', 'Kết quả thế nào tôi cũng chấp nhận.', ['Tôi không chấp nhận kết quả.', 'Kết quả rất tốt.', 'Chưa có kết quả.'], '不管…都.'],
      ['order', 'Sắp xếp: “Có vấn đề liên hệ bất cứ lúc nào.”', ['有问题', '随时', '联系', '。'], '有问题随时联系。']
    ],
    noi: [['无论什么时候，你都可以找我。', 'Wúlùn shénme shíhou, nǐ dōu kěyǐ zhǎo wǒ. – Lúc nào bạn cũng có thể tìm tôi.'], ['不管多晚，我都等你。', 'Bùguǎn duō wǎn, wǒ dōu děng nǐ. – Muộn mấy tôi cũng đợi.'], ['有问题随时联系。', 'Yǒu wèntí suíshí liánxì. – Có vấn đề cứ liên hệ.']],
    hoithoai: {
      ctx: 'Khách hàng doanh nghiệp Trung Quốc hỏi về hỗ trợ kỹ thuật.', vai: 'Khách hỏi, em cam kết dịch vụ.', ai: '🏢 黄总',
      luot: [
        T(['如果系统晚上出问题怎么办？', 'Rúguǒ xìtǒng wǎnshang chū wèntí zěnme bàn?', 'Nếu hệ thống lỗi ban đêm thì sao?'], ['无论白天还是晚上，我们都有工程师值班。', 'Wúlùn báitiān háishi wǎnshang, wǒmen dōu yǒu gōngchéngshī zhíbān.', 'Bất kể ngày hay đêm, chúng tôi đều có kỹ sư trực.', '无论 A还是B 都.'], ['无论晚上，我们都值班。', 'Wúlùn wǎnshang, wǒmen dōu zhíbān.', 'Thiếu yếu tố lựa chọn.'], ['晚上不管。', 'Wǎnshang bùguǎn.', 'Nghĩa xấu: "buổi tối mặc kệ".']),
        T(['周末也可以联系吗？', 'Zhōumò yě kěyǐ liánxì ma?', 'Cuối tuần cũng liên hệ được à?'], ['可以，您随时联系我们。', 'Kěyǐ, nín suíshí liánxì wǒmen.', 'Được, anh liên hệ bất cứ lúc nào.', '随时.'], ['周末无论。', 'Zhōumò wúlùn.', 'Câu cụt.'], ['周末我们休息，不行。', 'Zhōumò wǒmen xiūxi, bù xíng.', 'Mâu thuẫn cam kết.']),
        T(['好，服务态度很重要。', 'Hǎo, fúwù tàidu hěn zhòngyào.', 'Tốt, thái độ phục vụ rất quan trọng.'], ['您放心，不管问题大小，我们都会认真处理。', 'Nín fàngxīn, bùguǎn wèntí dàxiǎo, wǒmen dōu huì rènzhēn chǔlǐ.', 'Anh yên tâm, bất kể lớn nhỏ chúng tôi đều xử lý nghiêm túc.', '不管 + 大小.'], ['不管问题，我们处理。', 'Bùguǎn wèntí, wǒmen chǔlǐ.', 'Thiếu lựa chọn và 都.'], ['态度不重要。', 'Tàidu bú zhòngyào.', 'Phản bác khách.'])
      ], ket: 'Em đã cam kết dịch vụ bằng cấu trúc 无论/不管…都.'
    },
    tom: ['无论/不管 + nghi vấn/还是/多 + 都'], nguphap: 'Câu không điều kiện', phatam: '无论 wúlùn, 随时 suíshí',
    loi: ['Thiếu yếu tố lựa chọn sau 无论'], btvn: ['Viết 5 cam kết dịch vụ bằng 无论/不管', 'Dịch 5 câu “bất kể” sang tiếng Trung', 'Luyện 🎤 3 câu']
  };

  const d5 = {
    n: 5, ten: plan[4].ten, kinds: K,
    muc: 'Dùng 既然…就 (đã… thì) và 除了…以外，还/也/都 (ngoài… ra).',
    hoc: `${tbl(['Cấu trúc', 'Nghĩa', 'Ví dụ'], [['既然…就…', 'đã (sự thật)… thì…', '既然来了，就多住几天吧。'], ['除了…以外，还/也…', 'ngoài… còn (thêm vào)', '除了中文以外，他还会说韩语。'], ['除了…以外，都…', 'ngoài… ra thì đều (loại trừ)', '除了小王以外，大家都来了。']])}
      ${tip('🔑 <b>还/也</b> = cộng thêm; <b>都</b> = loại trừ. Cùng 除了 nhưng nghĩa ngược nhau!')}`,
    vocab: [
      w('既然', 'jìrán', 'đã… (thì)', '', ['既然你不舒服，就回家休息吧。', 'Jìrán nǐ bù shūfu, jiù huí jiā xiūxi ba.', 'Đã khó chịu thì về nhà nghỉ đi.']),
      w('除了', 'chúle', 'ngoài… ra', '', ['除了他，大家都同意。', 'Chúle tā, dàjiā dōu tóngyì.', 'Ngoài anh ấy, mọi người đều đồng ý.']),
      w('以外', 'yǐwài', '(ngoài) ra', '', ['除了周日以外，每天都上班。', 'Chúle zhōurì yǐwài, měitiān dōu shàngbān.', 'Trừ Chủ nhật, ngày nào cũng làm.']),
      w('决定', 'juédìng', 'quyết định', '', ['既然决定了，就别后悔。', 'Jìrán juédìng le, jiù bié hòuhuǐ.', 'Đã quyết thì đừng hối hận.']),
      w('后悔', 'hòuhuǐ', 'hối hận', '', ['我不后悔。', 'Wǒ bú hòuhuǐ.', 'Tôi không hối hận.']),
      w('参加', 'cānjiā', 'tham gia', '', ['除了我，还有谁参加？', 'Chúle wǒ, hái yǒu shéi cānjiā?', 'Ngoài tôi còn ai tham gia?']),
      w('技能', 'jìnéng', 'kỹ năng', '', ['除了语言，还要学技能。', 'Chúle yǔyán, hái yào xué jìnéng.', 'Ngoài ngoại ngữ còn phải học kỹ năng.']),
      w('机会', 'jīhuì', 'cơ hội', '', ['既然有机会，就试试吧。', 'Jìrán yǒu jīhuì, jiù shìshi ba.', 'Đã có cơ hội thì thử đi.']),
      w('同意', 'tóngyì', 'đồng ý', '', ['大家都同意了。', 'Dàjiā dōu tóngyì le.', 'Mọi người đều đồng ý.']),
      w('请假', 'qǐngjià', 'xin nghỉ', '', ['我想请两天假。', 'Wǒ xiǎng qǐng liǎng tiān jià.', 'Tôi muốn xin nghỉ hai ngày.'])
    ],
    qs: [
      ['mc', '除了中文以外，他___会说韩语。(thêm)', '还', ['都', '就', '才'], 'Cộng thêm → 还.'],
      ['mc', '除了小王以外，大家___来了。(loại trừ)', '都', ['还', '也还', '才'], 'Loại trừ → 都.'],
      ['mc', '___你不舒服，就回家休息吧。', '既然', ['即使', '虽然', '无论'], '既然…就.'],
      ['mc', '后悔 nghĩa là?', 'hối hận', ['về sau', 'hồi phục', 'trở lại'], 'hòuhuǐ.'],
      ['hear', '既然有这个机会，你就试试吧。', 'Đã có cơ hội này thì bạn thử đi.', ['Không có cơ hội nào.', 'Đừng thử.', 'Bạn đã thử rồi.'], '既然…就.'],
      ['order', 'Sắp xếp: “Tôi muốn xin nghỉ hai ngày.”', ['我', '想', '请两天', '假。'], '我想请两天假。']
    ],
    noi: [['既然决定了，就别后悔。', 'Jìrán juédìng le, jiù bié hòuhuǐ. – Đã quyết thì đừng hối hận.'], ['除了英语以外，我还会说中文。', 'Chúle Yīngyǔ yǐwài, wǒ hái huì shuō Zhōngwén. – Ngoài tiếng Anh tôi còn biết tiếng Trung.'], ['我想请两天假。', 'Wǒ xiǎng qǐng liǎng tiān jià. – Tôi muốn xin nghỉ hai ngày.']],
    hoithoai: {
      ctx: 'Em xin sếp người Đài Loan nghỉ phép để đi học khoá ngắn hạn.', vai: 'Sếp hỏi, em trả lời.', ai: '👔 林主管',
      luot: [
        T(['你要请几天假？', 'Nǐ yào qǐng jǐ tiān jià?', 'Bạn xin nghỉ mấy ngày?'], ['我想请三天假，去参加一个培训。', 'Wǒ xiǎng qǐng sān tiān jià, qù cānjiā yí ge péixùn.', 'Em muốn xin nghỉ 3 ngày để dự một khoá đào tạo.', 'Lý do rõ.'], ['我三天请假。', 'Wǒ sān tiān qǐngjià.', 'Sai trật tự.'], ['我请假了三天过。', 'Wǒ qǐngjiàle sān tiān guo.', 'Sai.']),
        T(['除了你，还有谁去？', 'Chúle nǐ, hái yǒu shéi qù?', 'Ngoài bạn còn ai đi?'], ['除了我以外，还有IT部的两位同事。', 'Chúle wǒ yǐwài, hái yǒu IT bù de liǎng wèi tóngshì.', 'Ngoài em còn hai đồng nghiệp phòng IT.', '除了…还.'], ['除了我，都没有。', 'Chúle wǒ, dōu méiyǒu.', 'Mập mờ.'], ['我以外除了。', 'Wǒ yǐwài chúle.', 'Sai.']),
        T(['好吧，既然是公司的培训，就去吧。', 'Hǎo ba, jìrán shì gōngsī de péixùn, jiù qù ba.', 'Được, đã là đào tạo của công ty thì đi đi.'], ['谢谢主管！我会把工作安排好再走。', 'Xièxie zhǔguǎn! Wǒ huì bǎ gōngzuò ānpái hǎo zài zǒu.', 'Cảm ơn sếp! Em sẽ sắp xếp xong việc rồi mới đi.', 'Chu đáo.'], ['那我不去了。', 'Nà wǒ bú qù le.', 'Mâu thuẫn.'], ['既然就去。', 'Jìrán jiù qù.', 'Câu cụt.'])
      ], ket: 'Em đã xin nghỉ phép thành công.'
    },
    tom: ['既然…就', '除了…以外，还/也 (thêm)', '除了…以外，都 (loại trừ)'], nguphap: '既然, 除了', phatam: '既然 jìrán, 除了 chúle',
    loi: ['Nhầm 还 và 都 sau 除了', 'Nhầm 既然 và 即使'], btvn: ['Viết 3 câu 除了…还 và 3 câu 除了…都', 'Viết đơn xin nghỉ phép ngắn', 'Luyện 🎤 3 câu']
  };

  const d6 = {
    n: 6, ten: plan[5].ten, kinds: K,
    muc: 'Nhấn mạnh thời gian, địa điểm, cách thức bằng 是…的; dùng câu hỏi tu từ 难道…吗, 不是…吗, 怎么能….',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ', 'Nghĩa'], [['是 + (thời gian/nơi/cách) + V + 的', '我是坐飞机来的。', 'Tôi đến bằng máy bay (nhấn cách).'], ['', '你是什么时候到的？', 'Bạn đến lúc nào?'], ['难道…吗？', '难道你不知道吗？', 'Lẽ nào bạn không biết? (= bạn phải biết)'], ['不是…吗？', '你不是说今天来吗？', 'Chẳng phải bạn nói hôm nay đến sao?'], ['怎么能…呢？', '你怎么能这样说呢？', 'Sao bạn có thể nói vậy?']])}
      ${tip('🔑 是…的 chỉ dùng cho việc <b>đã xảy ra</b>, người nghe đã biết sự việc, chỉ hỏi chi tiết.')}`,
    vocab: [
      w('难道', 'nándào', 'lẽ nào', '', ['难道你忘了吗？', 'Nándào nǐ wàng le ma?', 'Lẽ nào bạn quên rồi?']),
      w('飞机', 'fēijī', 'máy bay', '', ['我是坐飞机来的。', 'Wǒ shì zuò fēijī lái de.', 'Tôi đến bằng máy bay.']),
      w('出生', 'chūshēng', 'sinh ra', '', ['你是在哪儿出生的？', 'Nǐ shì zài nǎr chūshēng de?', 'Bạn sinh ra ở đâu?']),
      w('认识', 'rènshi', 'quen biết', '', ['你们是怎么认识的？', 'Nǐmen shì zěnme rènshi de?', 'Các bạn quen nhau thế nào?']),
      w('明明', 'míngmíng', 'rõ ràng là', '', ['他明明知道，却不说。', 'Tā míngmíng zhīdào, què bù shuō.', 'Rõ ràng anh ta biết nhưng không nói.']),
      w('却', 'què', 'nhưng lại', '', ['我叫他，他却没听见。', 'Wǒ jiào tā, tā què méi tīngjiàn.', 'Tôi gọi nhưng anh ấy lại không nghe.']),
      w('这样', 'zhèyàng', 'như vậy', '', ['你怎么能这样？', 'Nǐ zěnme néng zhèyàng?', 'Sao bạn có thể như vậy?']),
      w('毕业', 'bìyè', 'tốt nghiệp', '', ['你是哪年毕业的？', 'Nǐ shì nǎ nián bìyè de?', 'Bạn tốt nghiệp năm nào?']),
      w('大学', 'dàxué', 'đại học', '', ['我是在河内上的大学。', 'Wǒ shì zài Hénèi shàng de dàxué.', 'Tôi học đại học ở Hà Nội.']),
      w('通过', 'tōngguò', 'thông qua, qua', '', ['我们是通过朋友认识的。', 'Wǒmen shì tōngguò péngyou rènshi de.', 'Chúng tôi quen qua bạn bè.'])
    ],
    qs: [
      ['mc', '“Tôi đến bằng máy bay” (nhấn cách đi)?', '我是坐飞机来的。', ['我坐飞机来了是。', '我是来坐飞机的。', '我来的是坐飞机。'], '是 + cách + V + 的.'],
      ['mc', '难道你不知道吗？ ý là?', 'Bạn phải biết chứ', ['Bạn không biết thật', 'Bạn biết hay không?', 'Tôi không biết'], 'Hỏi tu từ = khẳng định ngược.'],
      ['mc', '你___说今天来吗？(chẳng phải)', '不是', ['难道是', '是不', '没是'], '不是…吗.'],
      ['mc', '毕业 nghĩa là?', 'tốt nghiệp', ['nhập học', 'bỏ học', 'thi cử'], 'bìyè.'],
      ['hear', '我们是通过朋友认识的。', 'Chúng tôi quen qua bạn bè.', ['Chúng tôi quen ở trường.', 'Chúng tôi chưa quen.', 'Chúng tôi là họ hàng.'], '通过朋友.'],
      ['order', 'Sắp xếp: “Bạn sinh ra ở đâu?”', ['你', '是在哪儿', '出生', '的？'], '你是在哪儿出生的？']
    ],
    noi: [['你是什么时候到的？', 'Nǐ shì shénme shíhou dào de? – Bạn đến lúc nào?'], ['我是坐飞机来的。', 'Wǒ shì zuò fēijī lái de. – Tôi đến bằng máy bay.'], ['你不是说今天来吗？', 'Nǐ bú shì shuō jīntiān lái ma? – Chẳng phải bạn nói hôm nay đến sao?']],
    hoithoai: {
      ctx: 'Em đón khách Trung Quốc ở sảnh công ty.', vai: 'Khách hỏi, em đáp; em cũng hỏi khách.', ai: '🧳 王女士',
      luot: [
        T(['你好！我是昨天晚上到的。', 'Nǐ hǎo! Wǒ shì zuótiān wǎnshang dào de.', 'Chào bạn! Tôi đến tối qua.'], ['欢迎！您是坐飞机来的还是坐火车来的？', 'Huānyíng! Nín shì zuò fēijī lái de háishi zuò huǒchē lái de?', 'Chào mừng! Chị đến bằng máy bay hay tàu hoả?', '是…的 hỏi cách.'], ['您来了坐什么？', 'Nín láile zuò shénme?', 'Sai.'], ['您是来昨天吗？', 'Nín shì lái zuótiān ma?', 'Sai.']),
        T(['坐飞机来的。你不是去机场接我了吗？', 'Zuò fēijī lái de. Nǐ bú shì qù jīchǎng jiē wǒ le ma?', 'Máy bay. Chẳng phải bạn đi đón tôi sao?'], ['对不起，昨天司机去的，我在开会。', 'Duìbuqǐ, zuótiān sījī qù de, wǒ zài kāihuì.', 'Xin lỗi, hôm qua tài xế đi, em đang họp.', 'Giải thích.'], ['难道我去了吗？', 'Nándào wǒ qù le ma?', 'Thiếu lịch sự.'], ['不是。', 'Bú shì.', 'Cộc lốc.']),
        T(['没关系。你的中文是在哪儿学的？', 'Méi guānxi. Nǐ de Zhōngwén shì zài nǎr xué de?', 'Không sao. Tiếng Trung bạn học ở đâu?'], ['我是在河内学的，学了三年了。', 'Wǒ shì zài Hénèi xué de, xuéle sān nián le.', 'Em học ở Hà Nội, học ba năm rồi.', '是…的 nơi chốn.'], ['我学了在河内的。', 'Wǒ xuéle zài Hénèi de.', 'Sai.'], ['是河内学。', 'Shì Hénèi xué.', 'Thiếu 在, 的.'])
      ], ket: 'Em đã dùng 是…的 và câu hỏi tu từ khi tiếp khách.'
    },
    tom: ['是…的 nhấn chi tiết', '难道…吗 / 不是…吗'], nguphap: 'Câu nhấn mạnh và tu từ', phatam: '难道 nándào',
    loi: ['Dùng 是…的 cho việc chưa xảy ra'], btvn: ['Hỏi 5 câu 是…的 về một chuyến đi', 'Viết 3 câu hỏi tu từ', 'Luyện 🎤 3 câu']
  };

  const d7 = {
    n: 7, ten: plan[6].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Ôn giai đoạn 1: bổ ngữ mở rộng, 连…都, 即使…也, 无论…都, 既然, 除了, 是…的.',
    hoc: `<h4>Tóm tắt tuần 1</h4>${tbl(['Chủ điểm', 'Mẫu'], [['V起来/下去/出来', '想起来、说下去、想出来'], ['连…都', '连孩子都知道'], ['即使/哪怕…也', '即使下雨也去'], ['无论/不管…都', '无论谁都欢迎'], ['既然…就 / 除了', '既然来了就…；除了…还/都'], ['是…的 / tu từ', '是坐飞机来的；难道…吗']])}`,
    qs: [['mc', '___下雨，他也会来。', '即使', ['虽然', '因为', '既然'], 'Giả định.'], ['mc', '除了他，大家___同意。', '都', ['还', '也还', '就'], 'Loại trừ.']],
    noi: [['无论多忙，我都会坚持下去。', 'Wúlùn duō máng, wǒ dōu huì jiānchí xiàqu. – Bận mấy tôi cũng kiên trì.'], ['连专家都解决不了。', 'Lián zhuānjiā dōu jiějué bu liǎo. – Chuyên gia cũng không giải quyết được.']],
    hoithoai: {
      ctx: 'Tổng ôn: phỏng vấn học bổng du học Trung Quốc.', vai: 'Giám khảo hỏi, em trả lời.', ai: '🎓 考官',
      luot: [
        T(['你是怎么开始学中文的？', 'Nǐ shì zěnme kāishǐ xué Zhōngwén de?', 'Bạn bắt đầu học tiếng Trung thế nào?'], ['我是因为工作开始学的。', 'Wǒ shì yīnwèi gōngzuò kāishǐ xué de.', 'Tôi bắt đầu học vì công việc.', '是…的.'], ['我开始了是工作。', 'Wǒ kāishǐle shì gōngzuò.', 'Sai.'], ['我是学的。', 'Wǒ shì xué de.', 'Thiếu thông tin.']),
        T(['如果拿不到奖学金呢？', 'Rúguǒ ná bu dào jiǎngxuéjīn ne?', 'Nếu không nhận được học bổng thì sao?'], ['即使拿不到，我也会继续学下去。', 'Jíshǐ ná bu dào, wǒ yě huì jìxù xué xiàqu.', 'Dù không được, tôi vẫn tiếp tục học.', '即使…也 + 下去.'], ['虽然拿不到，所以不学。', 'Suīrán ná bu dào, suǒyǐ bù xué.', 'Sai cặp.'], ['我想起来学。', 'Wǒ xiǎng qǐlai xué.', 'Sai nghĩa.']),
        T(['除了中文，你还有什么特长？', 'Chúle Zhōngwén, nǐ hái yǒu shénme tècháng?', 'Ngoài tiếng Trung bạn còn sở trường gì?'], ['除了中文以外，我还很懂电脑。', 'Chúle Zhōngwén yǐwài, wǒ hái hěn dǒng diànnǎo.', 'Ngoài tiếng Trung tôi còn rất hiểu máy tính.', '除了…还.'], ['除了中文，我都会电脑。', 'Chúle Zhōngwén, wǒ dōu huì diànnǎo.', 'Sai nghĩa loại trừ.'], ['我没有特长了。', 'Wǒ méiyǒu tècháng le.', 'Không ghi điểm.'])
      ], ket: 'Em đã ôn trọn giai đoạn 1!'
    },
    tom: ['Ôn tuần 1', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn', phatam: 'Ôn thanh nhẹ trong bổ ngữ',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: học lại ngày yếu', 'Làm ⚡ Luyện nhanh', 'Viết đoạn 120 chữ dùng ít nhất 4 mẫu tuần này']
  };

  const d8 = {
    n: 8, ten: plan[7].ten, kinds: K,
    muc: 'Phủ định để sửa ý: 不是…而是; đưa lựa chọn: 要么…要么, 或者, 还是; 越…越.',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ'], [['不是A，而是B', '问题不是钱，而是时间。– Vấn đề không phải tiền mà là thời gian.'], ['要么A，要么B', '要么现在走，要么明天走。– Hoặc đi bây giờ, hoặc mai đi.'], ['越A越B', '越学越有意思。– Càng học càng thú vị.'], ['或者 (trần thuật) / 还是 (câu hỏi)', '周六或者周日都行。/ 你喝茶还是咖啡？']])}`,
    vocab: [
      w('而是', 'ér shì', 'mà là', '', ['不是我不想，而是没时间。', 'Bú shì wǒ bù xiǎng, ér shì méi shíjiān.', 'Không phải tôi không muốn mà là không có thời gian.']),
      w('要么', 'yàome', 'hoặc là', '', ['要么你来，要么我去。', 'Yàome nǐ lái, yàome wǒ qù.', 'Hoặc bạn đến, hoặc tôi đi.']),
      w('越…越…', 'yuè… yuè…', 'càng… càng…', '', ['雨越下越大。', 'Yǔ yuè xià yuè dà.', 'Mưa càng lúc càng to.']),
      w('或者', 'huòzhě', 'hoặc (trần thuật)', '', ['打电话或者发邮件都可以。', 'Dǎ diànhuà huòzhě fā yóujiàn dōu kěyǐ.', 'Gọi hoặc gửi email đều được.']),
      w('原因', 'yuányīn', 'nguyên nhân', '', ['原因是什么？', 'Yuányīn shì shénme?', 'Nguyên nhân là gì?']),
      w('选择', 'xuǎnzé', 'lựa chọn', '', ['你只有两个选择。', 'Nǐ zhǐ yǒu liǎng ge xuǎnzé.', 'Bạn chỉ có hai lựa chọn.']),
      w('有意思', 'yǒu yìsi', 'thú vị', '', ['越看越有意思。', 'Yuè kàn yuè yǒu yìsi.', 'Càng xem càng thú vị.']),
      w('效率', 'xiàolǜ', 'hiệu suất', '', ['问题不是人少，而是效率低。', 'Wèntí bú shì rén shǎo, ér shì xiàolǜ dī.', 'Vấn đề không phải ít người mà là hiệu suất thấp.']),
      w('低', 'dī', 'thấp', '', ['价格很低。', 'Jiàgé hěn dī.', 'Giá rất thấp.']),
      w('提高', 'tígāo', 'nâng cao', '', ['我们要提高效率。', 'Wǒmen yào tígāo xiàolǜ.', 'Chúng ta phải nâng cao hiệu suất.'])
    ],
    qs: [
      ['mc', '问题不是钱，___时间。', '而是', ['但是', '还是', '或者'], '不是…而是.'],
      ['mc', 'Câu hỏi lựa chọn đúng?', '你喝茶还是咖啡？', ['你喝茶或者咖啡？', '你喝茶要么咖啡？', '你喝茶而是咖啡？'], 'Câu hỏi dùng 还是.'],
      ['mc', '“Càng học càng thú vị” là?', '越学越有意思。', ['越来越学有意思。', '学越越有意思。', '越学有意思越。'], '越A越B.'],
      ['mc', '效率 nghĩa là?', 'hiệu suất', ['hiệu quả quảng cáo', 'tỷ lệ', 'lãi suất'], 'xiàolǜ.'],
      ['hear', '要么今天加班做完，要么明天早点儿来。', 'Hoặc hôm nay tăng ca làm xong, hoặc mai đến sớm.', ['Hôm nay về sớm.', 'Mai nghỉ.', 'Không cần làm.'], '要么…要么.'],
      ['order', 'Sắp xếp: “Mưa càng lúc càng to.”', ['雨', '越下', '越', '大。'], '雨越下越大。']
    ],
    noi: [['不是我不想，而是没时间。', 'Bú shì wǒ bù xiǎng, ér shì méi shíjiān. – Không phải tôi không muốn mà là không có thời gian.'], ['越学越有意思。', 'Yuè xué yuè yǒu yìsi. – Càng học càng thú vị.'], ['要么你来，要么我去。', 'Yàome nǐ lái, yàome wǒ qù. – Hoặc bạn đến, hoặc tôi đi.']],
    hoithoai: {
      ctx: 'Họp phân tích vì sao dự án chậm tiến độ.', vai: 'Giám đốc hỏi, em phân tích.', ai: '👨‍💼 张总',
      luot: [
        T(['项目为什么晚了？是人不够吗？', 'Xiàngmù wèishénme wǎn le? Shì rén bú gòu ma?', 'Sao dự án chậm? Thiếu người à?'], ['不是人不够，而是流程太复杂。', 'Bú shì rén bú gòu, ér shì liúchéng tài fùzá.', 'Không phải thiếu người mà là quy trình quá phức tạp.', '不是…而是.'], ['不是人不够，但是流程复杂。', 'Bú shì rén bú gòu, dànshì liúchéng fùzá.', 'Sai cặp.'], ['是人不够而是。', 'Shì rén bú gòu ér shì.', 'Câu cụt.']),
        T(['那怎么办？', 'Nà zěnme bàn?', 'Vậy làm sao?'], ['要么简化流程，要么用软件自动处理。', 'Yàome jiǎnhuà liúchéng, yàome yòng ruǎnjiàn zìdòng chǔlǐ.', 'Hoặc đơn giản hoá quy trình, hoặc dùng phần mềm xử lý tự động.', '要么…要么.'], ['还是简化流程，还是用软件。', 'Háishi jiǎnhuà liúchéng, háishi yòng ruǎnjiàn.', '还是 dùng trong câu hỏi.'], ['越简化越。', 'Yuè jiǎnhuà yuè.', 'Câu cụt.']),
        T(['用软件的话，效率能提高多少？', 'Yòng ruǎnjiàn de huà, xiàolǜ néng tígāo duōshao?', 'Dùng phần mềm thì hiệu suất tăng bao nhiêu?'], ['大概能提高一倍，而且用得越久越熟练。', 'Dàgài néng tígāo yí bèi, érqiě yòng de yuè jiǔ yuè shúliàn.', 'Khoảng gấp đôi, hơn nữa dùng càng lâu càng thành thạo.', '越…越.'], ['效率越来越低。', 'Xiàolǜ yuè lái yuè dī.', 'Ngược ý.'], ['不知道而是。', 'Bù zhīdào ér shì.', 'Sai.'])
      ], ket: 'Em đã phân tích nguyên nhân và đưa lựa chọn mạch lạc.'
    },
    tom: ['不是…而是', '要么…要么', '越…越', '或者 / 还是'], nguphap: 'Câu sửa ý và lựa chọn', phatam: '而是 ér shì, 效率 xiàolǜ',
    loi: ['Dùng 但是 sau 不是', '或者 trong câu hỏi'], btvn: ['Viết phân tích 80 chữ: vì sao học ngoại ngữ khó tiến bộ', 'Viết 3 câu 越…越', 'Luyện 🎤 3 câu']
  };

  const d9 = {
    n: 9, ten: plan[8].ten, kinds: K,
    muc: 'Dùng giới từ 对于 (đối với), 关于 (về), 至于 (còn về) đúng vị trí trong câu.',
    hoc: `${tbl(['Giới từ', 'Nghĩa', 'Ví dụ'], [['对于', 'đối với (đối tượng)', '对于这个问题，大家意见不同。'], ['关于', 'về (chủ đề)', '我看了一本关于中国历史的书。'], ['至于', 'còn về (chuyển ý)', '我们先定时间，至于地点，以后再说。']])}
      ${tip('🔑 关于 có thể làm định ngữ (关于…<b>的</b>书) và đứng đầu tiêu đề; 对于 có thể đứng sau chủ ngữ (我们对于…).')}`,
    vocab: [
      w('对于', 'duìyú', 'đối với', '', ['对于新员工，培训很重要。', 'Duìyú xīn yuángōng, péixùn hěn zhòngyào.', 'Đối với nhân viên mới, đào tạo rất quan trọng.']),
      w('关于', 'guānyú', 'về', '', ['关于这件事，我不清楚。', 'Guānyú zhè jiàn shì, wǒ bù qīngchu.', 'Về việc này tôi không rõ.']),
      w('至于', 'zhìyú', 'còn về', '', ['至于价格，我们可以再谈。', 'Zhìyú jiàgé, wǒmen kěyǐ zài tán.', 'Còn về giá, ta có thể bàn thêm.']),
      w('意见', 'yìjiàn', 'ý kiến', '', ['大家有什么意见？', 'Dàjiā yǒu shénme yìjiàn?', 'Mọi người có ý kiến gì?']),
      w('员工', 'yuángōng', 'nhân viên', '', ['公司有两百名员工。', 'Gōngsī yǒu liǎng bǎi míng yuángōng.', 'Công ty có 200 nhân viên.']),
      w('培训', 'péixùn', 'đào tạo', '', ['新员工要参加培训。', 'Xīn yuángōng yào cānjiā péixùn.', 'Nhân viên mới phải dự đào tạo.']),
      w('历史', 'lìshǐ', 'lịch sử', '', ['我对历史感兴趣。', 'Wǒ duì lìshǐ gǎn xìngqù.', 'Tôi hứng thú với lịch sử.']),
      w('规定', 'guīdìng', 'quy định', '', ['关于请假的规定。', 'Guānyú qǐngjià de guīdìng.', 'Quy định về xin nghỉ.']),
      w('谈', 'tán', 'bàn, nói chuyện', '', ['我们谈谈吧。', 'Wǒmen tántan ba.', 'Chúng ta nói chuyện nhé.']),
      w('重要', 'zhòngyào', 'quan trọng', '', ['这一点很重要。', 'Zhè yì diǎn hěn zhòngyào.', 'Điểm này rất quan trọng.'])
    ],
    qs: [
      ['mc', 'Tiêu đề “Quy định về xin nghỉ” là?', '关于请假的规定', ['对于请假的规定', '至于请假的规定', '请假关于规定'], '关于 làm định ngữ.'],
      ['mc', '先定时间，___地点，以后再说。', '至于', ['关于', '对于', '由于'], '至于 chuyển ý.'],
      ['mc', '___新员工来说，培训很重要。', '对于', ['至于', '关于', '因为'], '对于…来说.'],
      ['mc', '培训 nghĩa là?', 'đào tạo', ['bồi thường', 'phỏng vấn', 'tuyển dụng'], 'péixùn.'],
      ['hear', '至于价格，我们下次再谈。', 'Còn về giá, lần sau ta bàn.', ['Giá đã chốt.', 'Giá quá cao.', 'Không bàn giá.'], '至于.'],
      ['order', 'Sắp xếp: “Tôi đọc một cuốn sách về lịch sử Trung Quốc.”', ['我看了', '一本', '关于中国历史', '的书。'], '我看了一本关于中国历史的书。']
    ],
    noi: [['关于这件事，我不太清楚。', 'Guānyú zhè jiàn shì, wǒ bú tài qīngchu. – Về việc này tôi không rõ lắm.'], ['至于价格，我们可以再谈。', 'Zhìyú jiàgé, wǒmen kěyǐ zài tán. – Còn về giá, ta bàn thêm.'], ['对于我来说，这很重要。', 'Duìyú wǒ lái shuō, zhè hěn zhòngyào. – Đối với tôi, điều này rất quan trọng.']],
    hoithoai: {
      ctx: 'Đàm phán sơ bộ hợp đồng cung cấp máy tính với đối tác Trung Quốc.', vai: 'Đối tác hỏi, em trả lời.', ai: '🤝 采购经理',
      luot: [
        T(['关于交货时间，你们能保证吗？', 'Guānyú jiāohuò shíjiān, nǐmen néng bǎozhèng ma?', 'Về thời gian giao hàng, các bạn đảm bảo được không?'], ['关于交货时间，我们保证两周内送到。', 'Guānyú jiāohuò shíjiān, wǒmen bǎozhèng liǎng zhōu nèi sòngdào.', 'Về thời gian, chúng tôi đảm bảo giao trong 2 tuần.', '关于.'], ['至于交货，不知道。', 'Zhìyú jiāohuò, bù zhīdào.', 'Thiếu chuyên nghiệp.'], ['对于两周。', 'Duìyú liǎng zhōu.', 'Câu cụt.']),
        T(['价格方面呢？', 'Jiàgé fāngmiàn ne?', 'Còn mặt giá?'], ['至于价格，如果订一百台以上，我们可以打九五折。', 'Zhìyú jiàgé, rúguǒ dìng yì bǎi tái yǐshàng, wǒmen kěyǐ dǎ jiǔ wǔ zhé.', 'Về giá, nếu đặt trên 100 máy, chúng tôi giảm 5%.', '至于 + điều kiện.'], ['对于价格很便宜。', 'Duìyú jiàgé hěn piányi.', 'Sai.'], ['价格关于贵。', 'Jiàgé guānyú guì.', 'Sai.']),
        T(['售后服务对于我们很重要。', 'Shòuhòu fúwù duìyú wǒmen hěn zhòngyào.', 'Dịch vụ hậu mãi rất quan trọng với chúng tôi.'], ['明白，我会把售后服务的规定发给您。', 'Míngbai, wǒ huì bǎ shòuhòu fúwù de guīdìng fā gěi nín.', 'Hiểu rồi, tôi sẽ gửi quy định hậu mãi cho anh.', 'Đáp ứng.'], ['售后不重要。', 'Shòuhòu bú zhòngyào.', 'Phản bác khách.'], ['对于我们不知道。', 'Duìyú wǒmen bù zhīdào.', 'Sai.'])
      ], ket: 'Em đã đàm phán sơ bộ với 关于, 至于, 对于.'
    },
    tom: ['对于 / 关于 / 至于'], nguphap: 'Giới từ chủ đề', phatam: '至于 zhìyú, 对于 duìyú',
    loi: ['Dùng 对于 làm tiêu đề', 'Nhầm 至于 và 由于'], btvn: ['Viết 3 tiêu đề văn bản dùng 关于', 'Viết đoạn đàm phán 6 câu', 'Luyện 🎤 3 câu']
  };

  const d10 = {
    n: 10, ten: plan[9].ten, kinds: K,
    muc: 'Dùng liên từ văn viết 由于 (do), 因此 (do đó), 于是 (thế là), 从而 (từ đó) trong email và báo cáo.',
    hoc: `${tbl(['Liên từ', 'Nghĩa', 'Ví dụ'], [['由于…，(因此)…', 'do… (nên)…', '由于天气原因，航班取消了。'], ['因此', 'do đó', '他很努力，因此进步很快。'], ['于是', 'thế là (sự việc nối tiếp)', '下雨了，于是我们回家了。'], ['从而', 'từ đó (kết quả)', '采用新系统，从而提高了效率。']])}
      ${tip('🔑 由于 đi với <b>因此</b> (không đi với 所以 trong văn trang trọng cũng được, nhưng 由于…因此 tự nhiên hơn).')}`,
    vocab: [
      w('由于', 'yóuyú', 'do, bởi', '', ['由于堵车，我迟到了。', 'Yóuyú dǔchē, wǒ chídào le.', 'Do kẹt xe tôi đến muộn.']),
      w('因此', 'yīncǐ', 'do đó', '', ['因此，我们决定推迟会议。', 'Yīncǐ, wǒmen juédìng tuīchí huìyì.', 'Do đó chúng tôi quyết định hoãn họp.']),
      w('于是', 'yúshì', 'thế là', '', ['他饿了，于是去买了面包。', 'Tā è le, yúshì qù mǎile miànbāo.', 'Đói, thế là anh ấy đi mua bánh mì.']),
      w('从而', 'cóng\'ér', 'từ đó', '', ['减少了浪费，从而降低了成本。', 'Jiǎnshǎole làngfèi, cóng\'ér jiàngdīle chéngběn.', 'Giảm lãng phí, từ đó hạ chi phí.']),
      w('采用', 'cǎiyòng', 'áp dụng', '', ['采用新技术。', 'Cǎiyòng xīn jìshù.', 'Áp dụng công nghệ mới.']),
      w('成本', 'chéngběn', 'chi phí', '', ['成本太高了。', 'Chéngběn tài gāo le.', 'Chi phí quá cao.']),
      w('降低', 'jiàngdī', 'giảm, hạ', '', ['降低风险。', 'Jiàngdī fēngxiǎn.', 'Giảm rủi ro.']),
      w('浪费', 'làngfèi', 'lãng phí', '', ['别浪费时间。', 'Bié làngfèi shíjiān.', 'Đừng lãng phí thời gian.']),
      w('迟到', 'chídào', 'đến muộn', '', ['对不起，我迟到了。', 'Duìbuqǐ, wǒ chídào le.', 'Xin lỗi, tôi đến muộn.']),
      w('造成', 'zàochéng', 'gây ra', '', ['给您造成不便，非常抱歉。', 'Gěi nín zàochéng búbiàn, fēicháng bàoqiàn.', 'Gây bất tiện cho quý khách, rất xin lỗi.'])
    ],
    qs: [
      ['mc', '___天气原因，航班取消了。', '由于', ['于是', '因此', '从而'], '由于 + nguyên nhân.'],
      ['mc', '下雨了，___我们回家了。(thế là)', '于是', ['由于', '虽然', '即使'], '于是 nối sự việc.'],
      ['mc', '采用新系统，___提高了效率。(từ đó)', '从而', ['由于', '虽然', '既然'], '从而 + kết quả.'],
      ['mc', '成本 nghĩa là?', 'chi phí', ['thành phẩm', 'lợi nhuận', 'nguồn vốn'], 'chéngběn.'],
      ['hear', '给您造成不便，我们非常抱歉。', 'Gây bất tiện cho quý khách, chúng tôi rất xin lỗi.', ['Cảm ơn quý khách đã ủng hộ.', 'Quý khách gây bất tiện.', 'Không có gì bất tiện.'], 'Câu xin lỗi chuẩn.'],
      ['order', 'Sắp xếp: “Do kẹt xe tôi đến muộn.”', ['由于', '堵车，', '我', '迟到了。'], '由于堵车，我迟到了。']
    ],
    noi: [['由于系统升级，服务暂停两小时。', 'Yóuyú xìtǒng shēngjí, fúwù zàntíng liǎng xiǎoshí. – Do nâng cấp hệ thống, dịch vụ tạm ngừng 2 tiếng.'], ['给您造成不便，非常抱歉。', 'Gěi nín zàochéng búbiàn, fēicháng bàoqiàn. – Xin lỗi vì sự bất tiện.'], ['因此，我们决定推迟会议。', 'Yīncǐ, wǒmen juédìng tuīchí huìyì. – Do đó chúng tôi quyết định hoãn họp.']],
    hoithoai: {
      ctx: 'Khách gọi hỏi vì sao app ngân hàng không đăng nhập được.', vai: 'Khách hỏi, em giải thích.', ai: '📞 客户',
      luot: [
        T(['为什么我登录不了App？', 'Wèishénme wǒ dēnglù bu liǎo App?', 'Sao tôi không đăng nhập được App?'], ['由于系统升级，服务暂停到晚上十点。', 'Yóuyú xìtǒng shēngjí, fúwù zàntíng dào wǎnshang shí diǎn.', 'Do nâng cấp hệ thống, dịch vụ tạm ngừng đến 10 giờ tối.', '由于.'], ['于是系统升级。', 'Yúshì xìtǒng shēngjí.', 'Sai liên từ.'], ['你的手机坏了。', 'Nǐ de shǒujī huài le.', 'Đổ lỗi khách.']),
        T(['我急着转账怎么办？', 'Wǒ jízhe zhuǎnzhàng zěnme bàn?', 'Tôi cần chuyển gấp thì sao?'], ['您可以到柜台办理，给您造成不便，非常抱歉。', 'Nín kěyǐ dào guìtái bànlǐ, gěi nín zàochéng búbiàn, fēicháng bàoqiàn.', 'Anh có thể đến quầy, xin lỗi vì bất tiện.', 'Giải pháp + xin lỗi.'], ['因此您等着。', 'Yīncǐ nín děngzhe.', 'Cộc.'], ['从而不能转账。', 'Cóng\'ér bù néng zhuǎnzhàng.', 'Sai.']),
        T(['升级以后会更好用吗？', 'Shēngjí yǐhòu huì gèng hǎoyòng ma?', 'Nâng cấp xong có dễ dùng hơn không?'], ['会，新版本速度更快，从而节省您的时间。', 'Huì, xīn bǎnběn sùdù gèng kuài, cóng\'ér jiéshěng nín de shíjiān.', 'Có, bản mới nhanh hơn, từ đó tiết kiệm thời gian cho anh.', '从而.'], ['由于更好用。', 'Yóuyú gèng hǎoyòng.', 'Câu cụt.'], ['我不知道于是。', 'Wǒ bù zhīdào yúshì.', 'Sai.'])
      ], ket: 'Em đã giải thích sự cố bằng liên từ văn viết.'
    },
    tom: ['由于 / 因此 / 于是 / 从而'], nguphap: 'Liên từ văn viết', phatam: '由于 yóuyú, 于是 yúshì',
    loi: ['Nhầm 于是 và 由于'], btvn: ['Viết thông báo bảo trì hệ thống 80 chữ', 'Viết 4 câu, mỗi liên từ một câu', 'Luyện 🎤 3 câu']
  };

  const d11 = {
    n: 11, ten: plan[10].ten, kinds: K,
    muc: 'Thể hiện thái độ bằng trạng từ: 竟然 (không ngờ), 果然 (quả nhiên), 到底 (rốt cuộc), 难怪 (thảo nào), 幸亏 (may mà).',
    hoc: `${tbl(['Trạng từ', 'Thái độ', 'Ví dụ'], [['竟然 / 居然', 'bất ngờ', '他竟然一个人做完了。'], ['果然', 'đúng như dự đoán', '天气预报说下雨，果然下了。'], ['到底', 'rốt cuộc (hỏi dồn)', '你到底去不去？'], ['难怪', 'thảo nào', '难怪他这么高兴，原来升职了。'], ['幸亏', 'may mà', '幸亏你提醒我，不然就忘了。']])}`,
    vocab: [
      w('竟然', 'jìngrán', 'không ngờ, vậy mà', '', ['他竟然忘了开会。', 'Tā jìngrán wàngle kāihuì.', 'Không ngờ anh ấy quên họp.']),
      w('果然', 'guǒrán', 'quả nhiên', '', ['果然不出我所料。', 'Guǒrán bù chū wǒ suǒ liào.', 'Quả nhiên đúng như tôi dự đoán.']),
      w('到底', 'dàodǐ', 'rốt cuộc', '', ['你到底想要什么？', 'Nǐ dàodǐ xiǎng yào shénme?', 'Rốt cuộc bạn muốn gì?']),
      w('难怪', 'nánguài', 'thảo nào', '', ['难怪这么冷，下雪了。', 'Nánguài zhème lěng, xià xuě le.', 'Thảo nào lạnh thế, tuyết rơi rồi.']),
      w('幸亏', 'xìngkuī', 'may mà', '', ['幸亏带了伞。', 'Xìngkuī dàile sǎn.', 'May mà mang ô.']),
      w('原来', 'yuánlái', 'hoá ra', '', ['原来是你！', 'Yuánlái shì nǐ!', 'Hoá ra là bạn!']),
      w('提醒', 'tíxǐng', 'nhắc nhở', '', ['谢谢你提醒我。', 'Xièxie nǐ tíxǐng wǒ.', 'Cảm ơn bạn đã nhắc.']),
      w('不然', 'bùrán', 'nếu không thì', '', ['快走，不然就晚了。', 'Kuài zǒu, bùrán jiù wǎn le.', 'Đi nhanh, không thì muộn.']),
      w('升职', 'shēngzhí', 'thăng chức', '', ['他升职了。', 'Tā shēngzhí le.', 'Anh ấy được thăng chức.']),
      w('意外', 'yìwài', 'bất ngờ, ngoài ý muốn', '', ['这个结果很意外。', 'Zhège jiéguǒ hěn yìwài.', 'Kết quả này rất bất ngờ.'])
    ],
    qs: [
      ['mc', 'Dự báo nói mưa, ___下了。(quả nhiên)', '果然', ['竟然', '到底', '幸亏'], 'Đúng dự đoán.'],
      ['mc', '___他这么高兴，原来升职了。', '难怪', ['幸亏', '竟然', '果然'], 'Thảo nào… hoá ra.'],
      ['mc', '___你提醒我，不然就忘了。', '幸亏', ['难怪', '到底', '果然'], 'May mà.'],
      ['mc', '你___去不去？(hỏi dồn)', '到底', ['竟然', '果然', '幸亏'], 'Rốt cuộc.'],
      ['hear', '这么难的题，他竟然十分钟就做完了。', 'Bài khó thế mà anh ấy làm xong trong 10 phút.', ['Anh ấy không làm được.', 'Bài rất dễ.', 'Anh ấy làm mất 1 tiếng.'], '竟然.'],
      ['order', 'Sắp xếp: “Hoá ra là bạn!”', ['原来', '是', '你', '！'], '原来是你！']
    ],
    noi: [['难怪这么冷，原来下雪了。', 'Nánguài zhème lěng, yuánlái xià xuě le. – Thảo nào lạnh thế, hoá ra tuyết rơi.'], ['幸亏你提醒我！', 'Xìngkuī nǐ tíxǐng wǒ! – May mà bạn nhắc tôi!'], ['你到底想要什么？', 'Nǐ dàodǐ xiǎng yào shénme? – Rốt cuộc bạn muốn gì?']],
    hoithoai: {
      ctx: 'Sáng thứ Hai ở văn phòng, đồng nghiệp kể tin mới.', vai: 'Bạn kể, em phản ứng.', ai: '👩 小美',
      luot: [
        T(['你知道吗？小李升职了！', 'Nǐ zhīdào ma? Xiǎo Lǐ shēngzhí le!', 'Biết gì không? Tiểu Lý thăng chức rồi!'], ['难怪他今天请大家喝咖啡！', 'Nánguài tā jīntiān qǐng dàjiā hē kāfēi!', 'Thảo nào hôm nay anh ấy mời mọi người cà phê!', '难怪.'], ['幸亏他升职。', 'Xìngkuī tā shēngzhí.', 'Sai sắc thái.'], ['到底升职。', 'Dàodǐ shēngzhí.', 'Sai.']),
        T(['他才来公司一年，竟然就当经理了。', 'Tā cái lái gōngsī yì nián, jìngrán jiù dāng jīnglǐ le.', 'Mới vào một năm mà đã làm quản lý.'], ['他工作那么认真，果然有回报。', 'Tā gōngzuò nàme rènzhēn, guǒrán yǒu huíbào.', 'Anh ấy làm việc chăm như thế, quả nhiên được đền đáp.', '果然.'], ['竟然很认真。', 'Jìngrán hěn rènzhēn.', 'Sai sắc thái.'], ['到底当经理吗？', 'Dàodǐ dāng jīnglǐ ma?', 'Hỏi lại thừa.']),
        T(['对了，今天下午的会改到三点了。', 'Duì le, jīntiān xiàwǔ de huì gǎi dào sān diǎn le.', 'À, họp chiều nay đổi sang 3 giờ.'], ['幸亏你提醒我，不然我就错过了。', 'Xìngkuī nǐ tíxǐng wǒ, bùrán wǒ jiù cuòguò le.', 'May mà bạn nhắc, không thì tôi lỡ rồi.', '幸亏…不然.'], ['难怪你提醒我。', 'Nánguài nǐ tíxǐng wǒ.', 'Sai sắc thái.'], ['果然三点。', 'Guǒrán sān diǎn.', 'Không hợp.'])
      ], ket: 'Em đã phản ứng tự nhiên bằng trạng từ thái độ.'
    },
    tom: ['竟然 / 果然 / 到底 / 难怪 / 幸亏'], nguphap: 'Trạng từ ngữ khí', phatam: '竟然 jìngrán, 幸亏 xìngkuī',
    loi: ['Nhầm 竟然 (bất ngờ) và 果然 (đúng dự đoán)'], btvn: ['Kể 5 tình huống, mỗi trạng từ một câu', 'Nghe 1 đoạn hội thoại phim, tìm các trạng từ này', 'Luyện 🎤 3 câu']
  };

  const d12 = {
    n: 12, ten: plan[11].ten, kinds: K,
    muc: 'Tăng tiến ý: 甚至 (thậm chí), 并且 (đồng thời), 何况 (huống chi), 不仅…还/也.',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ'], [['不仅A，而且/还B', '他不仅会修电脑，还会编程。'], ['…，甚至…', '他很忙，甚至周末都工作。'], ['…，并且…', '请填写表格，并且签字。'], ['A都…，何况B', '大人都搬不动，何况孩子呢？']])}`,
    vocab: [
      w('不仅', 'bùjǐn', 'không chỉ', '', ['不仅便宜，而且好用。', 'Bùjǐn piányi, érqiě hǎoyòng.', 'Không chỉ rẻ mà còn dễ dùng.']),
      w('并且', 'bìngqiě', 'đồng thời, và', '', ['请检查并且确认。', 'Qǐng jiǎnchá bìngqiě quèrèn.', 'Hãy kiểm tra và xác nhận.']),
      w('何况', 'hékuàng', 'huống chi', '', ['专家都不懂，何况我呢？', 'Zhuānjiā dōu bù dǒng, hékuàng wǒ ne?', 'Chuyên gia còn không hiểu, huống chi tôi?']),
      w('编程', 'biānchéng', 'lập trình', '', ['我在学编程。', 'Wǒ zài xué biānchéng.', 'Tôi đang học lập trình.']),
      w('填写', 'tiánxiě', 'điền (biểu mẫu)', '', ['请填写这张表。', 'Qǐng tiánxiě zhè zhāng biǎo.', 'Vui lòng điền tờ này.']),
      w('表格', 'biǎogé', 'biểu mẫu', '', ['表格在桌子上。', 'Biǎogé zài zhuōzi shang.', 'Biểu mẫu ở trên bàn.']),
      w('确认', 'quèrèn', 'xác nhận', '', ['请确认您的信息。', 'Qǐng quèrèn nín de xìnxī.', 'Vui lòng xác nhận thông tin.']),
      w('检查', 'jiǎnchá', 'kiểm tra', '', ['我检查了两遍。', 'Wǒ jiǎnchále liǎng biàn.', 'Tôi kiểm tra hai lần.']),
      w('信息', 'xìnxī', 'thông tin', '', ['个人信息要保护好。', 'Gèrén xìnxī yào bǎohù hǎo.', 'Thông tin cá nhân phải bảo vệ tốt.']),
      w('能力', 'nénglì', 'năng lực', '', ['他的能力很强。', 'Tā de nénglì hěn qiáng.', 'Năng lực anh ấy rất mạnh.'])
    ],
    qs: [
      ['mc', '他不仅会修电脑，___会编程。', '还', ['但', '就', '才'], '不仅…还.'],
      ['mc', '大人都搬不动，___孩子呢？', '何况', ['甚至', '并且', '而且'], '何况.'],
      ['mc', '他很忙，___周末都工作。', '甚至', ['何况', '并且', '不仅'], '甚至.'],
      ['mc', '填写 nghĩa là?', 'điền vào', ['viết thư', 'điền kinh', 'chép lại'], 'tiánxiě.'],
      ['hear', '请填写表格，并且在下面签字。', 'Vui lòng điền biểu mẫu và ký bên dưới.', ['Không cần ký.', 'Ký trước rồi điền.', 'Biểu mẫu bị mất.'], '并且.'],
      ['order', 'Sắp xếp: “Không chỉ rẻ mà còn dễ dùng.”', ['不仅', '便宜，', '而且', '好用。'], '不仅便宜，而且好用。']
    ],
    noi: [['这个软件不仅免费，而且很好用。', 'Zhège ruǎnjiàn bùjǐn miǎnfèi, érqiě hěn hǎoyòng. – Phần mềm này không chỉ miễn phí mà còn dễ dùng.'], ['请填写表格，并且签字。', 'Qǐng tiánxiě biǎogé, bìngqiě qiānzì. – Vui lòng điền biểu mẫu và ký.'], ['专家都不懂，何况我呢？', 'Zhuānjiā dōu bù dǒng, hékuàng wǒ ne? – Chuyên gia còn không hiểu, huống chi tôi?']],
    hoithoai: {
      ctx: 'Em giới thiệu ứng viên IT cho sếp.', vai: 'Sếp hỏi, em đánh giá ứng viên.', ai: '👨‍💼 主任',
      luot: [
        T(['这个应聘者怎么样？', 'Zhège yìngpìnzhě zěnmeyàng?', 'Ứng viên này thế nào?'], ['他不仅会修电脑，而且会编程。', 'Tā bùjǐn huì xiū diànnǎo, érqiě huì biānchéng.', 'Không chỉ biết sửa máy mà còn biết lập trình.', '不仅…而且.'], ['他不仅会修电脑。', 'Tā bùjǐn huì xiū diànnǎo.', 'Thiếu vế sau.'], ['何况他会编程。', 'Hékuàng tā huì biānchéng.', 'Sai.']),
        T(['中文水平呢？', 'Zhōngwén shuǐpíng ne?', 'Trình độ tiếng Trung?'], ['很好，甚至能看懂技术文件。', 'Hěn hǎo, shènzhì néng kàndǒng jìshù wénjiàn.', 'Rất tốt, thậm chí đọc hiểu được tài liệu kỹ thuật.', '甚至.'], ['很好，何况看懂。', 'Hěn hǎo, hékuàng kàndǒng.', 'Sai.'], ['并且不好。', 'Bìngqiě bù hǎo.', 'Mâu thuẫn.']),
        T(['好，安排他下周来复试。', 'Hǎo, ānpái tā xià zhōu lái fùshì.', 'Được, xếp anh ta vòng 2 tuần sau.'], ['好的，我会通知他，并且把资料准备好。', 'Hǎo de, wǒ huì tōngzhī tā, bìngqiě bǎ zīliào zhǔnbèi hǎo.', 'Vâng, em sẽ báo và chuẩn bị tài liệu.', '并且.'], ['甚至通知。', 'Shènzhì tōngzhī.', 'Câu cụt.'], ['我不通知。', 'Wǒ bù tōngzhī.', 'Không hợp.'])
      ], ket: 'Em đã đánh giá ứng viên mạch lạc.'
    },
    tom: ['不仅…而且/还', '甚至 / 并且 / 何况'], nguphap: 'Câu tăng tiến', phatam: '何况 hékuàng, 并且 bìngqiě',
    loi: ['Thiếu vế sau 不仅'], btvn: ['Viết nhận xét về một đồng nghiệp 80 chữ', 'Viết 4 câu, mỗi từ một câu', 'Luyện 🎤 3 câu']
  };

  const d13 = {
    n: 13, ten: plan[12].ten, kinds: K,
    muc: 'Viết email công việc chuẩn: mở đầu, nội dung, đề nghị, kết thư, các cụm lịch sự.',
    hoc: `${tbl(['Phần', 'Mẫu'], [['Xưng hô', '尊敬的王经理：/ 王经理，您好！'], ['Mở đầu', '感谢您的来信。/ 关于…一事，现回复如下：'], ['Đề nghị', '请您于周五前确认。/ 如有问题，请随时与我联系。'], ['Gửi kèm', '附件是报价单，请查收。'], ['Kết thư', '此致 敬礼 / 祝好！ / 期待您的回复。']])}
      ${tip('🔑 <b>请查收</b> = vui lòng kiểm tra và nhận (tệp đính kèm). <b>此致敬礼</b> là kết thư trang trọng.')}`,
    vocab: [
      w('尊敬', 'zūnjìng', 'kính gửi, tôn kính', '', ['尊敬的客户：', 'Zūnjìng de kèhù:', 'Kính gửi quý khách:']),
      w('来信', 'láixìn', 'thư gửi đến', '', ['感谢您的来信。', 'Gǎnxiè nín de láixìn.', 'Cảm ơn thư của quý vị.']),
      w('回复', 'huífù', 'trả lời', '', ['期待您的回复。', 'Qīdài nín de huífù.', 'Mong hồi âm của quý vị.']),
      w('附件', 'fùjiàn', 'tệp đính kèm', '', ['附件是合同，请查收。', 'Fùjiàn shì hétong, qǐng cháshōu.', 'Đính kèm là hợp đồng, vui lòng kiểm tra.']),
      w('查收', 'cháshōu', 'kiểm tra và nhận', '', ['请查收。', 'Qǐng cháshōu.', 'Vui lòng kiểm tra.']),
      w('报价单', 'bàojiàdān', 'bảng báo giá', '', ['请发一份报价单。', 'Qǐng fā yí fèn bàojiàdān.', 'Vui lòng gửi một bảng báo giá.']),
      w('期待', 'qīdài', 'mong đợi', '', ['期待与您合作。', 'Qīdài yǔ nín hézuò.', 'Mong được hợp tác với quý vị.']),
      w('合作', 'hézuò', 'hợp tác', '', ['合作愉快！', 'Hézuò yúkuài!', 'Hợp tác vui vẻ!']),
      w('感谢', 'gǎnxiè', 'cảm ơn (trang trọng)', '', ['感谢您的支持。', 'Gǎnxiè nín de zhīchí.', 'Cảm ơn sự ủng hộ của quý vị.']),
      w('如下', 'rúxià', 'như sau', '', ['具体安排如下：', 'Jùtǐ ānpái rúxià:', 'Sắp xếp cụ thể như sau:'])
    ],
    qs: [
      ['mc', '“Đính kèm là báo giá, vui lòng kiểm tra” là?', '附件是报价单，请查收。', ['报价单附件，请检查收。', '请查附件报价单收。', '附件查收是报价单。'], 'Cụm chuẩn.'],
      ['mc', 'Kết thư trang trọng?', '此致 敬礼', ['拜拜', '再见啦', '回头见'], 'Trang trọng.'],
      ['mc', '期待 nghĩa là?', 'mong đợi', ['thời hạn', 'chờ đợi xếp hàng', 'kỳ vọng sai'], 'qīdài.'],
      ['mc', 'Mở đầu thư trả lời?', '感谢您的来信。', ['你好啊！', '喂！', '听说你写信了。'], 'Lịch sự.'],
      ['hear', '如有问题，请随时与我联系。', 'Nếu có vấn đề xin liên hệ tôi bất cứ lúc nào.', ['Đừng liên hệ tôi.', 'Tôi đã liên hệ.', 'Không có vấn đề.'], 'Cụm kết thư.'],
      ['order', 'Sắp xếp: “Mong được hợp tác với quý vị.”', ['期待', '与您', '合作', '。'], '期待与您合作。']
    ],
    noi: [['感谢您的来信。', 'Gǎnxiè nín de láixìn. – Cảm ơn thư của quý vị.'], ['附件是报价单，请查收。', 'Fùjiàn shì bàojiàdān, qǐng cháshōu. – Đính kèm là báo giá, vui lòng kiểm tra.'], ['期待您的回复。', 'Qīdài nín de huífù. – Mong hồi âm của quý vị.']],
    hoithoai: {
      ctx: 'Em gọi điện xác nhận email báo giá đã gửi cho khách.', vai: 'Khách nghe máy, em xác nhận.', ai: '📧 李女士',
      luot: [
        T(['你好，请问有什么事？', 'Nǐ hǎo, qǐngwèn yǒu shénme shì?', 'Chào, có việc gì vậy?'], ['李女士您好，我刚把报价单发到您的邮箱了，请查收。', 'Lǐ nǚshì nín hǎo, wǒ gāng bǎ bàojiàdān fā dào nín de yóuxiāng le, qǐng cháshōu.', 'Chào chị Lý, tôi vừa gửi báo giá vào email chị, chị kiểm tra giúp.', 'Câu 把 + 请查收.'], ['我发报价单你。', 'Wǒ fā bàojiàdān nǐ.', 'Sai.'], ['你查收我。', 'Nǐ cháshōu wǒ.', 'Sai.']),
        T(['收到了，附件打不开。', 'Shōudào le, fùjiàn dǎ bu kāi.', 'Nhận rồi, nhưng tệp không mở được.'], ['真抱歉，我马上重新发一份PDF格式的。', 'Zhēn bàoqiàn, wǒ mǎshàng chóngxīn fā yí fèn PDF géshì de.', 'Thật xin lỗi, tôi gửi lại bản PDF ngay.', 'Xử lý.'], ['您的电脑坏了。', 'Nín de diànnǎo huài le.', 'Đổ lỗi.'], ['附件打开了。', 'Fùjiàn dǎkāi le.', 'Mâu thuẫn.']),
        T(['好，我看完以后回复你。', 'Hǎo, wǒ kànwán yǐhòu huífù nǐ.', 'Được, xem xong tôi trả lời.'], ['好的，期待您的回复，谢谢！', 'Hǎo de, qīdài nín de huífù, xièxie!', 'Vâng, mong chị hồi âm, cảm ơn!', 'Kết lịch sự.'], ['快点儿回复。', 'Kuài diǎnr huífù.', 'Thiếu lịch sự.'], ['不用回复了。', 'Búyòng huífù le.', 'Không hợp.'])
      ], ket: 'Em đã xác nhận email công việc chuyên nghiệp.'
    },
    tom: ['尊敬的… / 感谢您的来信', '附件…请查收', '期待您的回复 / 此致敬礼'], nguphap: 'Văn phong email', phatam: '查收 cháshōu, 附件 fùjiàn',
    loi: ['Dùng khẩu ngữ trong email trang trọng'], btvn: ['Viết email gửi báo giá 120 chữ', 'Viết email xin dời lịch họp', 'Luyện 🎤 3 câu']
  };

  const d14 = {
    n: 14, ten: plan[13].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Ôn giai đoạn 2: 不是…而是, 越…越, 对于/关于/至于, 由于/因此/于是, trạng từ thái độ, tăng tiến, email.',
    hoc: `<h4>Tóm tắt tuần 2</h4>${tbl(['Chủ điểm', 'Mẫu'], [['Sửa ý, lựa chọn', '不是…而是；要么…要么；越…越'], ['Giới từ chủ đề', '对于、关于、至于'], ['Liên từ văn viết', '由于、因此、于是、从而'], ['Trạng từ thái độ', '竟然、果然、到底、难怪、幸亏'], ['Tăng tiến', '不仅…而且、甚至、并且、何况'], ['Email', '附件…请查收；期待您的回复']])}`,
    qs: [['mc', '___天气原因，会议推迟了。', '由于', ['于是', '至于', '从而'], 'Nguyên nhân.'], ['mc', '难怪他这么高兴，___升职了。', '原来', ['竟然', '到底', '何况'], '难怪…原来.']],
    noi: [['由于时间关系，我们先讨论第一个问题。', 'Yóuyú shíjiān guānxi, wǒmen xiān tǎolùn dì yī ge wèntí. – Vì thời gian, ta bàn vấn đề thứ nhất trước.'], ['问题不是钱，而是时间。', 'Wèntí bú shì qián, ér shì shíjiān. – Vấn đề không phải tiền mà là thời gian.']],
    hoithoai: {
      ctx: 'Tổng ôn: họp tổng kết quý với đối tác.', vai: 'Đối tác hỏi, em trả lời.', ai: '🤝 陈经理',
      luot: [
        T(['这个季度的销售怎么样？', 'Zhège jìdù de xiāoshòu zěnmeyàng?', 'Doanh số quý này thế nào?'], ['不仅完成了目标，而且比去年增长了百分之十。', 'Bùjǐn wánchéngle mùbiāo, érqiě bǐ qùnián zēngzhǎngle bǎi fēn zhī shí.', 'Không chỉ đạt mục tiêu mà còn tăng 10% so với năm ngoái.', '不仅…而且.'], ['竟然完成了。', 'Jìngrán wánchéng le.', 'Sắc thái tự ngạc nhiên, không chuyên nghiệp.'], ['由于完成了。', 'Yóuyú wánchéng le.', 'Câu cụt.']),
        T(['原因是什么？', 'Yuányīn shì shénme?', 'Nguyên nhân là gì?'], ['主要不是因为降价，而是因为服务改善了。', 'Zhǔyào bú shì yīnwèi jiàngjià, ér shì yīnwèi fúwù gǎishàn le.', 'Chủ yếu không phải do giảm giá mà do dịch vụ cải thiện.', '不是…而是.'], ['不是降价，但是服务。', 'Bú shì jiàngjià, dànshì fúwù.', 'Sai cặp.'], ['原因果然。', 'Yuányīn guǒrán.', 'Sai.']),
        T(['下个季度的计划呢？', 'Xià ge jìdù de jìhuà ne?', 'Kế hoạch quý sau?'], ['具体计划我会整理好，用邮件发给您，请查收。', 'Jùtǐ jìhuà wǒ huì zhěnglǐ hǎo, yòng yóujiàn fā gěi nín, qǐng cháshōu.', 'Kế hoạch cụ thể tôi sẽ soạn và gửi email, anh kiểm tra giúp.', 'Ngôn ngữ email.'], ['至于计划，不知道。', 'Zhìyú jìhuà, bù zhīdào.', 'Thiếu chuẩn bị.'], ['计划何况。', 'Jìhuà hékuàng.', 'Sai.'])
      ], ket: 'Em đã ôn trọn giai đoạn 2!'
    },
    tom: ['Ôn tuần 2', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn', phatam: 'Ôn âm ü, zh/z',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: học lại ngày yếu', 'Làm ⚡ Luyện nhanh', 'Viết email tổng kết công việc tuần 120 chữ']
  };

  window.PLT_ZH3 = { plan, stages, H: { w, L, T, tbl, tip, exs, sp, K }, days: [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14] };
})();

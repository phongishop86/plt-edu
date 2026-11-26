/* PLT-Edu · Tiếng Trung – Cấp 4 (HSK 5–6): lộ trình 30 ngày, Ngày 1–14 */
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
    'Thành ngữ thông dụng (成语) – phần 1', 'Hư từ văn ngôn trong văn hiện đại: 之, 其, 以, 于', 'Lựa chọn: 与其…不如, 宁可…也不', 'Điều kiện chặt: 一旦…就, 只有…才, 除非…否则', 'Phủ định uyển chuyển: 未必, 不见得, 不得不, 难免', 'Hỏi tu từ nâng cao: 何必, 岂不是, 何尝', 'Ôn tập tuần 1 và kiểm tra',
    'Đọc báo kinh tế', 'Thuyết trình: mở đầu, chuyển ý, kết luận', 'Viết nghị luận: luận điểm và luận cứ', 'Trí tuệ nhân tạo và việc làm', 'Chuyển đổi số ngân hàng', 'Quản lý và lãnh đạo', 'Ôn tập tuần 2 và kiểm tra',
    'Văn hoá doanh nghiệp và quan hệ', 'Hợp đồng và điều khoản', 'Y tế và già hoá dân số', 'Đô thị hoá và nhà ở', 'Phương ngữ và văn hoá vùng miền', 'Kể nội dung phim, sách', 'Kiểm tra tổng hợp và mô phỏng',
    'Tranh luận', 'Đàm phán lương và phỏng vấn cấp cao', 'Xử lý khủng hoảng truyền thông', 'Thành ngữ – phần 2 và yết hậu ngữ', 'Văn bản hành chính: thông báo, công bố', 'Viết tóm tắt (缩写) dạng HSK 5–6', 'Nghe hiểu bài giảng, phỏng vấn', 'Mô phỏng tình huống cấp cao', 'Kiểm tra cuối khoá HSK 5–6 và lộ trình HSK 7–9'
  ].map((ten, i) => ({ n: i + 1, ten }));
  const stages = [
    { ten: '📜 Giai đoạn 1 – Ngôn ngữ trang trọng và thành ngữ', tu: 1, den: 7 }, { ten: '📰 Giai đoạn 2 – Đọc báo, thuyết trình, nghị luận', tu: 8, den: 14 },
    { ten: '🏛️ Giai đoạn 3 – Xã hội, pháp lý, văn hoá', tu: 15, den: 21 }, { ten: '🎤 Giai đoạn 4 – Tranh luận, khủng hoảng, luyện thi', tu: 22, den: 30 }
  ];

  const d1 = {
    n: 1, ten: plan[0].ten, kinds: K,
    muc: 'Hiểu và dùng 10 thành ngữ hay gặp trong công việc và HSK 5–6.',
    hoc: `${tbl(['Thành ngữ', 'Nghĩa', 'Dùng khi'], [['一举两得', 'một công đôi việc', 'khen giải pháp'], ['半途而废', 'bỏ dở giữa chừng', 'khuyên kiên trì'], ['实事求是', 'thực sự cầu thị', 'báo cáo trung thực'], ['与众不同', 'khác biệt', 'mô tả sản phẩm'], ['井井有条', 'ngăn nắp đâu ra đấy', 'khen tổ chức']])}
      ${tip('🔑 Thành ngữ thường làm vị ngữ hoặc định ngữ: 这个办法<b>一举两得</b>；他是个<b>与众不同</b>的人。 Đừng lạm dụng – 1–2 thành ngữ mỗi đoạn là đủ.')}`,
    vocab: [
      w('一举两得', 'yì jǔ liǎng dé', 'một công đôi việc', '', ['骑车上班一举两得。', 'Qí chē shàngbān yì jǔ liǎng dé.', 'Đạp xe đi làm, một công đôi việc.']),
      w('半途而废', 'bàn tú ér fèi', 'bỏ dở giữa chừng', '', ['学习不能半途而废。', 'Xuéxí bù néng bàn tú ér fèi.', 'Học không được bỏ dở.']),
      w('实事求是', 'shí shì qiú shì', 'thực sự cầu thị', '', ['报告要实事求是。', 'Bàogào yào shí shì qiú shì.', 'Báo cáo phải trung thực.']),
      w('与众不同', 'yǔ zhòng bù tóng', 'khác biệt', '', ['这个设计与众不同。', 'Zhège shèjì yǔ zhòng bù tóng.', 'Thiết kế này khác biệt.']),
      w('井井有条', 'jǐng jǐng yǒu tiáo', 'ngăn nắp', '', ['他把工作安排得井井有条。', 'Tā bǎ gōngzuò ānpái de jǐng jǐng yǒu tiáo.', 'Anh ấy sắp xếp công việc rất ngăn nắp.']),
      w('一帆风顺', 'yì fān fēng shùn', 'thuận buồm xuôi gió', '', ['祝你一帆风顺！', 'Zhù nǐ yì fān fēng shùn!', 'Chúc thuận buồm xuôi gió!']),
      w('自相矛盾', 'zì xiāng máo dùn', 'tự mâu thuẫn', '', ['他说的话自相矛盾。', 'Tā shuō de huà zì xiāng máo dùn.', 'Lời anh ta tự mâu thuẫn.']),
      w('举世闻名', 'jǔ shì wén míng', 'nổi tiếng thế giới', '', ['长城举世闻名。', 'Chángchéng jǔ shì wén míng.', 'Vạn Lý Trường Thành nổi tiếng thế giới.']),
      w('全力以赴', 'quán lì yǐ fù', 'dốc toàn lực', '', ['我们会全力以赴。', 'Wǒmen huì quán lì yǐ fù.', 'Chúng tôi sẽ dốc toàn lực.']),
      w('三心二意', 'sān xīn èr yì', 'không chuyên tâm', '', ['做事不能三心二意。', 'Zuò shì bù néng sān xīn èr yì.', 'Làm việc không được hai lòng.'])
    ],
    qs: [
      ['mc', 'Khen giải pháp vừa tiết kiệm vừa nhanh?', '一举两得', ['半途而废', '三心二意', '自相矛盾'], 'Một công đôi việc.'],
      ['mc', '学习不能___。(bỏ dở)', '半途而废', ['一帆风顺', '举世闻名', '与众不同'], 'bàn tú ér fèi.'],
      ['mc', '实事求是 dùng khi?', 'Nhấn mạnh trung thực, đúng sự thật', ['Chúc mừng', 'Chê bai', 'Kể chuyện cười'], 'Thực sự cầu thị.'],
      ['hear', '我们一定全力以赴，按时完成任务。', 'Chúng tôi nhất định dốc toàn lực hoàn thành đúng hạn.', ['Chúng tôi sẽ bỏ dở.', 'Không kịp hạn.', 'Làm qua loa.'], '全力以赴.'],
      ['hear', '他的话前后自相矛盾，很难让人相信。', 'Lời anh ta trước sau mâu thuẫn, khó tin.', ['Lời anh ta rất đáng tin.', 'Anh ta nói ít.', 'Anh ta im lặng.'], '自相矛盾.'],
      ['order', 'Sắp xếp: “Chúng tôi sẽ dốc toàn lực.”', ['我们', '会', '全力以赴', '。'], '我们会全力以赴。']
    ],
    noi: [['这个办法一举两得。', 'Zhège bànfǎ yì jǔ liǎng dé. – Cách này một công đôi việc.'], ['我们会全力以赴。', 'Wǒmen huì quán lì yǐ fù. – Chúng tôi sẽ dốc toàn lực.'], ['祝你一帆风顺！', 'Zhù nǐ yì fān fēng shùn! – Chúc bạn thuận buồm xuôi gió!']],
    hoithoai: {
      ctx: 'Tiệc chia tay đồng nghiệp Trung Quốc về nước nhận chức mới.', vai: 'Đồng nghiệp nói, em đáp bằng thành ngữ phù hợp.', ai: '🥂 老马',
      luot: [
        T(['我下个月就回国了，去总部当部门经理。', 'Wǒ xià ge yuè jiù huí guó le, qù zǒngbù dāng bùmén jīnglǐ.', 'Tháng sau tôi về nước làm trưởng phòng ở tổng bộ.'], ['恭喜恭喜！祝您一帆风顺！', 'Gōngxǐ gōngxǐ! Zhù nín yì fān fēng shùn!', 'Chúc mừng! Chúc anh thuận buồm xuôi gió!', 'Thành ngữ chúc.'], ['祝您半途而废！', 'Zhù nín bàn tú ér fèi!', 'Chúc điều xấu!'], ['您三心二意。', 'Nín sān xīn èr yì.', 'Xúc phạm.']),
        T(['谢谢！这几年你帮了我很多。', 'Xièxie! Zhè jǐ nián nǐ bāngle wǒ hěn duō.', 'Cảm ơn! Mấy năm qua bạn giúp tôi nhiều.'], ['是您教得好，您总是把工作安排得井井有条。', 'Shì nín jiāo de hǎo, nín zǒngshì bǎ gōngzuò ānpái de jǐng jǐng yǒu tiáo.', 'Là anh dạy hay, anh luôn sắp xếp việc rất ngăn nắp.', 'Khen bằng thành ngữ.'], ['您自相矛盾。', 'Nín zì xiāng máo dùn.', 'Không hợp.'], ['我很举世闻名。', 'Wǒ hěn jǔ shì wén míng.', 'Sai.']),
        T(['以后有机会来北京找我。', 'Yǐhòu yǒu jīhuì lái Běijīng zhǎo wǒ.', 'Sau này có dịp đến Bắc Kinh tìm tôi nhé.'], ['一定！我的中文也不会半途而废的。', 'Yídìng! Wǒ de Zhōngwén yě bú huì bàn tú ér fèi de.', 'Nhất định! Tiếng Trung của em cũng không bỏ dở đâu.', 'Thành ngữ đúng ngữ cảnh.'], ['我一举两得。', 'Wǒ yì jǔ liǎng dé.', 'Lạc ngữ cảnh.'], ['北京与众不同吗？', 'Běijīng yǔ zhòng bù tóng ma?', 'Lạc.'])
      ], ket: 'Em đã dùng thành ngữ tự nhiên trong lời chúc.'
    },
    tom: ['10 thành ngữ công sở', 'Thành ngữ làm vị ngữ / định ngữ'], nguphap: 'Cách dùng 成语', phatam: 'Đọc thành ngữ 4 âm tiết đều nhịp',
    loi: ['Dùng thành ngữ sai sắc thái', 'Lạm dụng thành ngữ'], btvn: ['Đặt câu với 10 thành ngữ', 'Tìm nguồn gốc 2 thành ngữ', 'Luyện 🎤 3 câu']
  };

  const d2 = {
    n: 2, ten: plan[1].ten, kinds: K,
    muc: 'Nhận biết hư từ gốc văn ngôn trong văn bản hiện đại: 之 (của), 其 (của nó, nó), 以 (để, bằng), 于 (ở, vào, so với).',
    hoc: `${tbl(['Hư từ', 'Tương đương', 'Ví dụ'], [['之', '的', '成功之路 – con đường thành công'], ['其', '他的/它的', '尊重其选择 – tôn trọng lựa chọn của họ'], ['以', '用/为了', '以人为本 – lấy con người làm gốc'], ['于', '在/对/比', '成立于2010年 – thành lập năm 2010；高于平均水平 – cao hơn mức trung bình'], ['为', '是/当作', '视为 – coi là']])}`,
    vocab: [
      w('之', 'zhī', '(văn viết) của', '', ['三分之一。', 'Sān fēn zhī yī.', 'Một phần ba.']),
      w('其', 'qí', 'của nó, nó', '', ['其中有三个问题。', 'Qízhōng yǒu sān ge wèntí.', 'Trong đó có ba vấn đề.']),
      w('以', 'yǐ', 'lấy, để, bằng', '', ['以客户为中心。', 'Yǐ kèhù wéi zhōngxīn.', 'Lấy khách hàng làm trung tâm.']),
      w('于', 'yú', 'ở, vào, so với', '', ['利润高于去年。', 'Lìrùn gāo yú qùnián.', 'Lợi nhuận cao hơn năm ngoái.']),
      w('其中', 'qízhōng', 'trong đó', '', ['我们有五个客户，其中两个在中国。', 'Wǒmen yǒu wǔ ge kèhù, qízhōng liǎng ge zài Zhōngguó.', 'Có 5 khách, trong đó 2 ở Trung Quốc.']),
      w('以…为…', 'yǐ… wéi…', 'lấy… làm…', '', ['以质量为第一。', 'Yǐ zhìliàng wéi dì yī.', 'Lấy chất lượng làm đầu.']),
      w('视为', 'shìwéi', 'coi là', '', ['客户被视为最重要的资产。', 'Kèhù bèi shìwéi zuì zhòngyào de zīchǎn.', 'Khách hàng được coi là tài sản quan trọng nhất.']),
      w('利润', 'lìrùn', 'lợi nhuận', '', ['利润增长了。', 'Lìrùn zēngzhǎng le.', 'Lợi nhuận tăng.']),
      w('平均', 'píngjūn', 'trung bình', '', ['高于平均水平。', 'Gāo yú píngjūn shuǐpíng.', 'Cao hơn mức trung bình.']),
      w('尊重', 'zūnzhòng', 'tôn trọng', '', ['尊重其选择。', 'Zūnzhòng qí xuǎnzé.', 'Tôn trọng lựa chọn của họ.'])
    ],
    qs: [
      ['mc', '成立于2010年 nghĩa là?', 'Thành lập năm 2010', ['Thành lập trước 2010', 'Đóng cửa năm 2010', 'Thành lập 2010 năm'], '于 = vào.'],
      ['mc', '高于平均水平 nghĩa là?', 'Cao hơn mức trung bình', ['Thấp hơn trung bình', 'Bằng trung bình', 'Ở mức trung bình'], '于 = so với.'],
      ['mc', '以客户___中心。', '为', ['是', '于', '之'], '以…为….'],
      ['mc', '三分之一 = ?', '1/3', ['3/1', '1/30', '3%'], '之 = của.'],
      ['hear', '我们有十个项目，其中三个已经完成。', 'Có 10 dự án, trong đó 3 đã xong.', ['3 dự án tất cả.', '10 dự án đã xong.', 'Chưa xong cái nào.'], '其中.'],
      ['order', 'Sắp xếp: “Lấy chất lượng làm đầu.”', ['以', '质量', '为', '第一。'], '以质量为第一。']
    ],
    noi: [['我们以客户为中心。', 'Wǒmen yǐ kèhù wéi zhōngxīn. – Chúng tôi lấy khách hàng làm trung tâm.'], ['公司成立于二〇一〇年。', 'Gōngsī chénglì yú èr líng yī líng nián. – Công ty thành lập năm 2010.'], ['利润高于去年同期。', 'Lìrùn gāo yú qùnián tóngqī. – Lợi nhuận cao hơn cùng kỳ năm ngoái.']],
    hoithoai: {
      ctx: 'Em giới thiệu công ty bằng văn phong trang trọng trong hội chợ.', vai: 'Khách hỏi, em giới thiệu.', ai: '🏢 参展商',
      luot: [
        T(['请介绍一下贵公司。', 'Qǐng jièshào yíxià guì gōngsī.', 'Xin giới thiệu quý công ty.'], ['本公司成立于二〇一五年，以提供IT解决方案为主。', 'Běn gōngsī chénglì yú èr líng yī wǔ nián, yǐ tígōng IT jiějué fāng\'àn wéi zhǔ.', 'Công ty thành lập năm 2015, chủ yếu cung cấp giải pháp IT.', '于 + 以…为主.'], ['我们公司二〇一五年之。', 'Wǒmen gōngsī èr líng yī wǔ nián zhī.', 'Sai.'], ['公司很好于。', 'Gōngsī hěn hǎo yú.', 'Sai.']),
        T(['客户主要在哪儿？', 'Kèhù zhǔyào zài nǎr?', 'Khách chủ yếu ở đâu?'], ['我们有两百多家客户，其中百分之三十是银行。', 'Wǒmen yǒu liǎng bǎi duō jiā kèhù, qízhōng bǎi fēn zhī sānshí shì yínháng.', 'Có hơn 200 khách, trong đó 30% là ngân hàng.', '其中.'], ['其客户很多。', 'Qí kèhù hěn duō.', 'Mơ hồ.'], ['客户于银行。', 'Kèhù yú yínháng.', 'Sai.']),
        T(['你们的理念是什么？', 'Nǐmen de lǐniàn shì shénme?', 'Triết lý của các bạn?'], ['以客户为中心，以质量求生存。', 'Yǐ kèhù wéi zhōngxīn, yǐ zhìliàng qiú shēngcún.', 'Lấy khách hàng làm trung tâm, lấy chất lượng để tồn tại.', 'Văn phong trang trọng.'], ['理念之很好。', 'Lǐniàn zhī hěn hǎo.', 'Sai.'], ['我们没有理念。', 'Wǒmen méiyǒu lǐniàn.', 'Không hợp.'])
      ], ket: 'Em đã giới thiệu công ty bằng văn phong trang trọng.'
    },
    tom: ['之 = 的', '其 = 他的/它的', '以…为…', '于 = 在/比'], nguphap: 'Hư từ văn ngôn', phatam: '之 zhī, 于 yú',
    loi: ['Dùng 之, 于 trong khẩu ngữ thân mật'], btvn: ['Viết đoạn giới thiệu công ty 100 chữ có 之, 其, 以, 于', 'Gạch chân các hư từ này trong 1 bài báo', 'Luyện 🎤 3 câu']
  };

  const d3 = {
    n: 3, ten: plan[2].ten, kinds: K,
    muc: 'Diễn đạt lựa chọn có cân nhắc: 与其…不如 (thay vì… chẳng bằng), 宁可…也不 (thà… chứ không).',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ', 'Nghĩa'], [['与其A，不如B', '与其抱怨，不如行动。', 'Thay vì than phiền, chẳng bằng hành động.'], ['宁可A，也不B', '我宁可加班，也不想把工作留到明天。', 'Thà tăng ca chứ không để việc sang mai.'], ['宁可A，也要B', '宁可少赚，也要保证质量。', 'Thà lời ít cũng phải đảm bảo chất lượng.']])}
      ${tip('🔑 与其…不如: chọn <b>B</b>. 宁可…也不: chấp nhận <b>A</b> (thiệt) để tránh điều tệ hơn.')}`,
    vocab: [
      w('宁可', 'nìngkě', 'thà', '', ['我宁可走路，也不坐他的车。', 'Wǒ nìngkě zǒulù, yě bú zuò tā de chē.', 'Tôi thà đi bộ chứ không đi xe anh ta.']),
      w('不如', 'bùrú', 'chẳng bằng', '', ['与其等，不如做。', 'Yǔqí děng, bùrú zuò.', 'Thay vì đợi chẳng bằng làm.']),
      w('抱怨', 'bàoyuàn', 'than phiền', '', ['别总是抱怨。', 'Bié zǒngshì bàoyuàn.', 'Đừng luôn than phiền.']),
      w('行动', 'xíngdòng', 'hành động', '', ['马上行动！', 'Mǎshàng xíngdòng!', 'Hành động ngay!']),
      w('赚', 'zhuàn', 'kiếm (tiền)', '', ['少赚一点儿没关系。', 'Shǎo zhuàn yìdiǎnr méi guānxi.', 'Kiếm ít chút không sao.']),
      w('冒险', 'màoxiǎn', 'mạo hiểm', '', ['不值得冒险。', 'Bù zhíde màoxiǎn.', 'Không đáng mạo hiểm.']),
      w('值得', 'zhíde', 'đáng', '', ['这本书值得一看。', 'Zhè běn shū zhíde yí kàn.', 'Cuốn sách này đáng đọc.']),
      w('妥协', 'tuǒxié', 'thoả hiệp', '', ['原则问题不能妥协。', 'Yuánzé wèntí bù néng tuǒxié.', 'Vấn đề nguyên tắc không thể thoả hiệp.']),
      w('稳定', 'wěndìng', 'ổn định', '', ['我宁可要稳定的工作。', 'Wǒ nìngkě yào wěndìng de gōngzuò.', 'Tôi thà cần công việc ổn định.']),
      w('信誉', 'xìnyù', 'uy tín', '', ['信誉比利润更重要。', 'Xìnyù bǐ lìrùn gèng zhòngyào.', 'Uy tín quan trọng hơn lợi nhuận.'])
    ],
    qs: [
      ['mc', '与其抱怨，___行动。', '不如', ['也不', '而是', '就'], '与其…不如.'],
      ['mc', '我宁可加班，___把工作留到明天。', '也不', ['不如', '而且', '就'], '宁可…也不.'],
      ['mc', 'Câu “宁可少赚，也要保证质量” nhấn mạnh?', 'Chất lượng quan trọng hơn lợi nhuận', ['Lợi nhuận là nhất', 'Không cần chất lượng', 'Kiếm nhiều tiền'], 'Chấp nhận thiệt.'],
      ['mc', '信誉 nghĩa là?', 'uy tín', ['tín hiệu', 'tin tưởng', 'thư tín'], 'xìnyù.'],
      ['hear', '与其花钱买新的，不如把旧的修一修。', 'Thay vì mua mới chẳng bằng sửa cái cũ.', ['Nên mua mới.', 'Cái cũ hỏng hết rồi.', 'Không sửa được.'], 'Chọn B.'],
      ['order', 'Sắp xếp: “Uy tín quan trọng hơn lợi nhuận.”', ['信誉', '比利润', '更', '重要。'], '信誉比利润更重要。']
    ],
    noi: [['与其抱怨，不如行动。', 'Yǔqí bàoyuàn, bùrú xíngdòng. – Thay vì than phiền chẳng bằng hành động.'], ['宁可少赚，也要保证质量。', 'Nìngkě shǎo zhuàn, yě yào bǎozhèng zhìliàng. – Thà lời ít cũng phải đảm bảo chất lượng.'], ['信誉比利润更重要。', 'Xìnyù bǐ lìrùn gèng zhòngyào. – Uy tín quan trọng hơn lợi nhuận.']],
    hoithoai: {
      ctx: 'Đối tác đề nghị dùng linh kiện rẻ hơn để giảm giá.', vai: 'Đối tác đề xuất, em giữ nguyên tắc.', ai: '🏭 供应商',
      luot: [
        T(['用便宜一点儿的零件，价格能降百分之十。', 'Yòng piányi yìdiǎnr de língjiàn, jiàgé néng jiàng bǎi fēn zhī shí.', 'Dùng linh kiện rẻ hơn, giá giảm được 10%.'], ['我们宁可少赚一点儿，也不能降低质量。', 'Wǒmen nìngkě shǎo zhuàn yìdiǎnr, yě bù néng jiàngdī zhìliàng.', 'Chúng tôi thà lời ít chứ không thể giảm chất lượng.', '宁可…也不.'], ['好啊，越便宜越好。', 'Hǎo a, yuè piányi yuè hǎo.', 'Bỏ nguyên tắc.'], ['宁可降低质量。', 'Nìngkě jiàngdī zhìliàng.', 'Ngược.']),
        T(['可是客户嫌贵怎么办？', 'Kěshì kèhù xián guì zěnme bàn?', 'Nhưng khách chê đắt thì sao?'], ['与其降价，不如把售后服务做得更好。', 'Yǔqí jiàngjià, bùrú bǎ shòuhòu fúwù zuò de gèng hǎo.', 'Thay vì giảm giá chẳng bằng làm hậu mãi tốt hơn.', '与其…不如.'], ['不如与其降价。', 'Bùrú yǔqí jiàngjià.', 'Sai.'], ['那就降价吧。', 'Nà jiù jiàngjià ba.', 'Mâu thuẫn.']),
        T(['你们真重视信誉。', 'Nǐmen zhēn zhòngshì xìnyù.', 'Các bạn thật coi trọng uy tín.'], ['对，信誉比利润更重要，这是原则，不能妥协。', 'Duì, xìnyù bǐ lìrùn gèng zhòngyào, zhè shì yuánzé, bù néng tuǒxié.', 'Đúng, uy tín quan trọng hơn lợi nhuận, đây là nguyên tắc.', 'Giữ lập trường.'], ['信誉不值得。', 'Xìnyù bù zhíde.', 'Ngược.'], ['我们妥协吧。', 'Wǒmen tuǒxié ba.', 'Mâu thuẫn.'])
      ], ket: 'Em đã giữ nguyên tắc chất lượng bằng câu lựa chọn.'
    },
    tom: ['与其…不如', '宁可…也不/也要'], nguphap: 'Câu lựa chọn', phatam: '宁可 nìngkě (nìng thanh 4)',
    loi: ['Đảo vế', 'Đọc 宁 thành níng'], btvn: ['Viết 3 câu 与其…不如 và 3 câu 宁可…也不', 'Viết quan điểm 100 chữ: uy tín hay lợi nhuận?', 'Luyện 🎤 3 câu']
  };

  const d4 = {
    n: 4, ten: plan[3].ten, kinds: K,
    muc: 'Điều kiện chặt chẽ: 一旦…就 (một khi), 只有…才 (chỉ khi), 除非…否则/才 (trừ phi).',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ'], [['一旦A，就B', '一旦发现问题，就要马上报告。'], ['只有A，才B', '只有多练习，才能说得流利。'], ['除非A，否则不B', '除非有授权，否则不能查看客户信息。'], ['只要…就 vs 只有…才', 'Đủ điều kiện (dễ) vs điều kiện duy nhất (khó)']])}`,
    vocab: [
      w('一旦', 'yídàn', 'một khi', '', ['一旦决定，就不要改。', 'Yídàn juédìng, jiù búyào gǎi.', 'Một khi quyết thì đừng đổi.']),
      w('只有', 'zhǐyǒu', 'chỉ có (khi)', '', ['只有这样，才能成功。', 'Zhǐyǒu zhèyàng, cái néng chénggōng.', 'Chỉ có vậy mới thành công.']),
      w('除非', 'chúfēi', 'trừ phi', '', ['除非你去，否则我不去。', 'Chúfēi nǐ qù, fǒuzé wǒ bú qù.', 'Trừ phi bạn đi, không thì tôi không đi.']),
      w('授权', 'shòuquán', 'uỷ quyền, cấp quyền', '', ['需要经理授权。', 'Xūyào jīnglǐ shòuquán.', 'Cần quản lý cấp quyền.']),
      w('报告', 'bàogào', 'báo cáo', '', ['马上报告。', 'Mǎshàng bàogào.', 'Báo cáo ngay.']),
      w('查看', 'chákàn', 'xem, tra cứu', '', ['查看账户余额。', 'Chákàn zhànghù yú\'é.', 'Xem số dư.']),
      w('违反', 'wéifǎn', 'vi phạm', '', ['违反规定。', 'Wéifǎn guīdìng.', 'Vi phạm quy định.']),
      w('后果', 'hòuguǒ', 'hậu quả', '', ['后果很严重。', 'Hòuguǒ hěn yánzhòng.', 'Hậu quả nghiêm trọng.']),
      w('发现', 'fāxiàn', 'phát hiện', '', ['我发现了一个错误。', 'Wǒ fāxiànle yí ge cuòwù.', 'Tôi phát hiện một lỗi.']),
      w('允许', 'yǔnxǔ', 'cho phép', '', ['不允许拍照。', 'Bù yǔnxǔ pāizhào.', 'Không được chụp ảnh.'])
    ],
    qs: [
      ['mc', '只有多练习，___能说得流利。', '才', ['就', '也', '都'], '只有…才.'],
      ['mc', '___发现问题，就要马上报告。', '一旦', ['只有', '除非', '与其'], '一旦…就.'],
      ['mc', '除非有授权，___不能查看。', '否则', ['所以', '而且', '于是'], '除非…否则.'],
      ['mc', '后果 nghĩa là?', 'hậu quả', ['kết quả tốt', 'phía sau', 'quả ngọt'], 'hòuguǒ.'],
      ['hear', '一旦违反规定，后果会很严重。', 'Một khi vi phạm quy định, hậu quả sẽ nghiêm trọng.', ['Vi phạm không sao.', 'Hậu quả nhẹ.', 'Không có quy định.'], '一旦.'],
      ['order', 'Sắp xếp: “Cần quản lý cấp quyền.”', ['需要', '经理', '授权', '。'], '需要经理授权。']
    ],
    noi: [['一旦发现问题，就要马上报告。', 'Yídàn fāxiàn wèntí, jiù yào mǎshàng bàogào. – Phát hiện vấn đề là phải báo ngay.'], ['只有多练习，才能说得流利。', 'Zhǐyǒu duō liànxí, cái néng shuō de liúlì. – Chỉ có luyện nhiều mới nói lưu loát.'], ['除非有授权，否则不能查看。', 'Chúfēi yǒu shòuquán, fǒuzé bù néng chákàn. – Trừ phi được cấp quyền, không thì không được xem.']],
    hoithoai: {
      ctx: 'Em hướng dẫn nhân viên mới (người Hoa) về quy định bảo mật.', vai: 'Nhân viên hỏi, em giải thích.', ai: '🧑‍💻 新同事',
      luot: [
        T(['我可以看客户的账户信息吗？', 'Wǒ kěyǐ kàn kèhù de zhànghù xìnxī ma?', 'Tôi được xem thông tin tài khoản khách không?'], ['除非有经理授权，否则不能查看。', 'Chúfēi yǒu jīnglǐ shòuquán, fǒuzé bù néng chákàn.', 'Trừ phi quản lý cấp quyền, không thì không được.', '除非…否则.'], ['随便看吧。', 'Suíbiàn kàn ba.', 'Sai quy định.'], ['只有看。', 'Zhǐyǒu kàn.', 'Câu cụt.']),
        T(['如果发现可疑交易呢？', 'Rúguǒ fāxiàn kěyí jiāoyì ne?', 'Nếu phát hiện giao dịch đáng ngờ?'], ['一旦发现，就要马上报告风险部门。', 'Yídàn fāxiàn, jiù yào mǎshàng bàogào fēngxiǎn bùmén.', 'Một khi phát hiện phải báo ngay phòng rủi ro.', '一旦…就.'], ['不用管。', 'Búyòng guǎn.', 'Sai.'], ['一旦才报告。', 'Yídàn cái bàogào.', 'Sai cặp.']),
        T(['要是违反了会怎么样？', 'Yàoshi wéifǎn le huì zěnmeyàng?', 'Lỡ vi phạm thì sao?'], ['后果很严重，所以只有严格遵守规定，才能保护自己和客户。', 'Hòuguǒ hěn yánzhòng, suǒyǐ zhǐyǒu yángé zūnshǒu guīdìng, cái néng bǎohù zìjǐ hé kèhù.', 'Hậu quả nghiêm trọng, chỉ có tuân thủ nghiêm mới bảo vệ được mình và khách.', '只有…才.'], ['没什么后果。', 'Méi shénme hòuguǒ.', 'Sai.'], ['只有就保护。', 'Zhǐyǒu jiù bǎohù.', 'Sai cặp.'])
      ], ket: 'Em đã hướng dẫn quy định bảo mật bằng câu điều kiện chặt.'
    },
    tom: ['一旦…就', '只有…才', '除非…否则'], nguphap: 'Câu điều kiện chặt', phatam: '一旦 yídàn, 除非 chúfēi',
    loi: ['只有…就 (sai cặp)'], btvn: ['Viết 5 quy định an toàn thông tin bằng 3 cấu trúc', 'Phân biệt 只要…就 / 只有…才 bằng 2 ví dụ', 'Luyện 🎤 3 câu']
  };

  const d5 = {
    n: 5, ten: plan[4].ten, kinds: K,
    muc: 'Phủ định và đánh giá uyển chuyển: 未必 (chưa chắc), 不见得 (chưa hẳn), 不得不 (buộc phải), 难免 (khó tránh).',
    hoc: `${tbl(['Từ', 'Nghĩa', 'Ví dụ'], [['未必', 'chưa chắc', '贵的未必好。– Đắt chưa chắc đã tốt.'], ['不见得', 'chưa hẳn (khẩu ngữ)', '他不见得同意。'], ['不得不', 'buộc phải', '由于下雨，我们不得不取消活动。'], ['难免', 'khó tránh', '新手难免犯错。– Người mới khó tránh mắc lỗi.'], ['不一定', 'không nhất định', '明天不一定下雨。']])}
      ${tip('🔑 Dùng 未必/不见得 để phản bác <b>mềm</b> thay vì 不对 – lịch sự hơn trong họp.')}`,
    vocab: [
      w('未必', 'wèibì', 'chưa chắc', '', ['他说的未必是真的。', 'Tā shuō de wèibì shì zhēn de.', 'Điều anh ta nói chưa chắc là thật.']),
      w('不见得', 'bú jiàn de', 'chưa hẳn', '', ['这个方法不见得有效。', 'Zhège fāngfǎ bú jiàn de yǒuxiào.', 'Cách này chưa hẳn hiệu quả.']),
      w('不得不', 'bù dé bù', 'buộc phải', '', ['我不得不加班。', 'Wǒ bù dé bù jiābān.', 'Tôi buộc phải tăng ca.']),
      w('难免', 'nánmiǎn', 'khó tránh', '', ['刚开始难免紧张。', 'Gāng kāishǐ nánmiǎn jǐnzhāng.', 'Mới đầu khó tránh căng thẳng.']),
      w('犯错', 'fàn cuò', 'mắc lỗi', '', ['谁都会犯错。', 'Shéi dōu huì fàn cuò.', 'Ai cũng mắc lỗi.']),
      w('有效', 'yǒuxiào', 'hiệu quả, có hiệu lực', '', ['这个药很有效。', 'Zhège yào hěn yǒuxiào.', 'Thuốc này hiệu quả.']),
      w('取消', 'qǔxiāo', 'huỷ bỏ', '', ['活动取消了。', 'Huódòng qǔxiāo le.', 'Hoạt động bị huỷ.']),
      w('新手', 'xīnshǒu', 'người mới', '', ['我还是新手。', 'Wǒ hái shì xīnshǒu.', 'Tôi vẫn là người mới.']),
      w('绝对', 'juéduì', 'tuyệt đối', '', ['这不是绝对的。', 'Zhè bú shì juéduì de.', 'Điều này không tuyệt đối.']),
      w('情况', 'qíngkuàng', 'tình hình', '', ['要看具体情况。', 'Yào kàn jùtǐ qíngkuàng.', 'Phải xem tình hình cụ thể.'])
    ],
    qs: [
      ['mc', '“Đắt chưa chắc đã tốt” là?', '贵的未必好。', ['贵的不得不好。', '贵的难免好。', '贵的一定好。'], '未必.'],
      ['mc', '由于下雨，我们___取消活动。', '不得不', ['未必', '难免', '不见得'], 'Buộc phải.'],
      ['mc', '新手___犯错。', '难免', ['未必', '不得不', '绝对'], 'Khó tránh.'],
      ['mc', 'Phản bác mềm trong họp?', '这个方法不见得有效。', ['你错了！', '这是胡说。', '别说了。'], 'Uyển chuyển.'],
      ['hear', '要看具体情况，这不是绝对的。', 'Phải xem tình hình cụ thể, không tuyệt đối.', ['Luôn luôn đúng.', 'Không cần xem.', 'Tuyệt đối sai.'], '不是绝对.'],
      ['order', 'Sắp xếp: “Ai cũng mắc lỗi.”', ['谁', '都', '会', '犯错。'], '谁都会犯错。']
    ],
    noi: [['贵的未必好。', 'Guì de wèibì hǎo. – Đắt chưa chắc đã tốt.'], ['刚开始难免紧张。', 'Gāng kāishǐ nánmiǎn jǐnzhāng. – Mới đầu khó tránh căng thẳng.'], ['要看具体情况。', 'Yào kàn jùtǐ qíngkuàng. – Phải xem tình hình cụ thể.']],
    hoithoai: {
      ctx: 'Họp chọn nhà cung cấp phần mềm; đồng nghiệp muốn chọn hãng đắt nhất.', vai: 'Đồng nghiệp đề xuất, em phản biện mềm.', ai: '👨 同事',
      luot: [
        T(['我们选最贵的那家吧，贵的肯定好。', 'Wǒmen xuǎn zuì guì de nà jiā ba, guì de kěndìng hǎo.', 'Chọn hãng đắt nhất đi, đắt chắc chắn tốt.'], ['贵的未必最适合我们，要看具体需求。', 'Guì de wèibì zuì shìhé wǒmen, yào kàn jùtǐ xūqiú.', 'Đắt chưa chắc hợp nhất với ta, phải xem nhu cầu cụ thể.', '未必.'], ['你错了！', 'Nǐ cuò le!', 'Cứng.'], ['贵的不得不好。', 'Guì de bù dé bù hǎo.', 'Sai nghĩa.']),
        T(['可是便宜的会有很多问题。', 'Kěshì piányi de huì yǒu hěn duō wèntí.', 'Nhưng rẻ sẽ có nhiều vấn đề.'], ['那也不见得，我们可以先试用一个月。', 'Nà yě bú jiàn de, wǒmen kěyǐ xiān shìyòng yí ge yuè.', 'Cũng chưa hẳn, ta có thể dùng thử một tháng.', '不见得 + đề xuất.'], ['便宜的难免好。', 'Piányi de nánmiǎn hǎo.', 'Sai.'], ['不得不便宜。', 'Bù dé bù piányi.', 'Sai.']),
        T(['试用期间出问题怎么办？', 'Shìyòng qījiān chū wèntí zěnme bàn?', 'Dùng thử có lỗi thì sao?'], ['新系统难免有小问题，我们让厂家负责解决。', 'Xīn xìtǒng nánmiǎn yǒu xiǎo wèntí, wǒmen ràng chǎngjiā fùzé jiějué.', 'Hệ thống mới khó tránh lỗi nhỏ, ta yêu cầu hãng chịu trách nhiệm.', '难免.'], ['绝对没问题。', 'Juéduì méi wèntí.', 'Hứa quá mức.'], ['我们不得不放弃。', 'Wǒmen bù dé bù fàngqì.', 'Bi quan.'])
      ], ket: 'Em đã phản biện mềm mỏng và đưa giải pháp.'
    },
    tom: ['未必 / 不见得', '不得不 / 难免'], nguphap: 'Phủ định uyển chuyển', phatam: '未必 wèibì, 难免 nánmiǎn',
    loi: ['Phản bác quá thẳng'], btvn: ['Viết 5 câu phản biện mềm', 'Viết đoạn 100 chữ có 4 từ hôm nay', 'Luyện 🎤 3 câu']
  };

  const d6 = {
    n: 6, ten: plan[5].ten, kinds: K,
    muc: 'Hỏi tu từ nâng cao: 何必 (cần gì phải), 岂不是 (chẳng phải là… sao), 何尝 (há lại không/đâu có), 难道.',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ', 'Nghĩa thật'], [['何必…呢？', '只是小事，何必生气呢？', 'Không cần giận.'], ['岂不是…？', '这样做岂不是浪费时间？', 'Làm vậy là lãng phí thời gian.'], ['何尝不…', '我何尝不想去？', 'Tôi đâu phải không muốn đi (rất muốn).'], ['难道…吗？', '难道你不明白吗？', 'Bạn phải hiểu chứ.']])}`,
    vocab: [
      w('何必', 'hébì', 'cần gì phải', '', ['何必这么着急呢？', 'Hébì zhème zháojí ne?', 'Cần gì vội thế?']),
      w('岂不是', 'qǐ bú shì', 'chẳng phải là… sao', '', ['那岂不是白做了？', 'Nà qǐ bú shì bái zuò le?', 'Vậy chẳng phải làm công cốc sao?']),
      w('何尝', 'hécháng', 'đâu có, há', '', ['我何尝不想休息？', 'Wǒ hécháng bù xiǎng xiūxi?', 'Tôi đâu phải không muốn nghỉ?']),
      w('白', 'bái', 'uổng công', '', ['白跑了一趟。', 'Bái pǎole yí tàng.', 'Đi một chuyến công cốc.']),
      w('小事', 'xiǎoshì', 'chuyện nhỏ', '', ['这只是小事。', 'Zhè zhǐ shì xiǎoshì.', 'Đây chỉ là chuyện nhỏ.']),
      w('计较', 'jìjiào', 'so đo', '', ['别计较了。', 'Bié jìjiào le.', 'Đừng so đo nữa.']),
      w('明白', 'míngbai', 'hiểu rõ', '', ['我明白你的意思。', 'Wǒ míngbai nǐ de yìsi.', 'Tôi hiểu ý bạn.']),
      w('无奈', 'wúnài', 'bất lực, đành chịu', '', ['他也很无奈。', 'Tā yě hěn wúnài.', 'Anh ấy cũng đành chịu.']),
      w('委屈', 'wěiqu', 'tủi thân, oan ức', '', ['我觉得很委屈。', 'Wǒ juéde hěn wěiqu.', 'Tôi thấy tủi thân.']),
      w('误会', 'wùhuì', 'hiểu lầm', '', ['这是个误会。', 'Zhè shì ge wùhuì.', 'Đây là hiểu lầm.'])
    ],
    qs: [
      ['mc', '何必生气呢？ ý là?', 'Không cần giận', ['Phải giận', 'Sao bạn không giận?', 'Ai giận?'], 'Tu từ.'],
      ['mc', '我何尝不想去？ ý là?', 'Tôi rất muốn đi', ['Tôi không muốn đi', 'Tôi đã đi', 'Ai muốn đi?'], 'Phủ định của phủ định.'],
      ['mc', '这样做___浪费时间？', '岂不是', ['何尝', '何必', '未必'], 'Chẳng phải là… sao.'],
      ['mc', '误会 nghĩa là?', 'hiểu lầm', ['gặp gỡ', 'sai lầm', 'cuộc họp'], 'wùhuì.'],
      ['hear', '只是一点儿小事，何必计较呢？', 'Chỉ là chuyện nhỏ, cần gì so đo?', ['Chuyện rất lớn.', 'Phải so đo.', 'Tôi rất giận.'], '何必.'],
      ['order', 'Sắp xếp: “Tôi hiểu ý bạn.”', ['我', '明白', '你的', '意思。'], '我明白你的意思。']
    ],
    noi: [['何必这么着急呢？', 'Hébì zhème zháojí ne? – Cần gì vội thế?'], ['这是个误会。', 'Zhè shì ge wùhuì. – Đây là hiểu lầm.'], ['我何尝不想休息？', 'Wǒ hécháng bù xiǎng xiūxi? – Tôi đâu phải không muốn nghỉ?']],
    hoithoai: {
      ctx: 'Hai đồng nghiệp hiểu lầm nhau vì một email; em làm hoà giải.', vai: 'Đồng nghiệp bức xúc, em khuyên.', ai: '😤 小钱',
      luot: [
        T(['他在邮件里批评我，太过分了！', 'Tā zài yóujiàn li pīpíng wǒ, tài guòfèn le!', 'Anh ta phê bình tôi trong email, quá đáng!'], ['我看了，可能是个误会，何必这么生气呢？', 'Wǒ kàn le, kěnéng shì ge wùhuì, hébì zhème shēngqì ne?', 'Tôi đọc rồi, có thể là hiểu lầm, cần gì giận thế?', '何必.'], ['你应该更生气。', 'Nǐ yīnggāi gèng shēngqì.', 'Đổ dầu vào lửa.'], ['何尝生气？', 'Hécháng shēngqì?', 'Sai.']),
        T(['我觉得很委屈，我也很努力啊。', 'Wǒ juéde hěn wěiqu, wǒ yě hěn nǔlì a.', 'Tôi thấy tủi thân, tôi cũng cố gắng mà.'], ['我明白，他何尝不知道你努力？他只是着急。', 'Wǒ míngbai, tā hécháng bù zhīdào nǐ nǔlì? Tā zhǐ shì zháojí.', 'Tôi hiểu, anh ấy đâu phải không biết bạn cố gắng? Chỉ là anh ấy sốt ruột.', '何尝.'], ['他不知道你努力。', 'Tā bù zhīdào nǐ nǔlì.', 'Làm tệ thêm.'], ['你不努力。', 'Nǐ bù nǔlì.', 'Xúc phạm.']),
        T(['那我回邮件骂他。', 'Nà wǒ huí yóujiàn mà tā.', 'Vậy tôi trả lời email mắng anh ta.'], ['那岂不是把事情弄得更糟？不如当面聊聊。', 'Nà qǐ bú shì bǎ shìqing nòng de gèng zāo? Bùrú dāngmiàn liáoliao.', 'Vậy chẳng phải làm mọi chuyện tệ hơn? Chẳng bằng nói chuyện trực tiếp.', '岂不是 + 不如.'], ['好主意，骂吧。', 'Hǎo zhǔyi, mà ba.', 'Sai.'], ['何必聊。', 'Hébì liáo.', 'Câu cụt.'])
      ], ket: 'Em đã hoà giải khéo léo bằng câu hỏi tu từ.'
    },
    tom: ['何必…呢', '岂不是', '何尝不', '难道…吗'], nguphap: 'Câu hỏi tu từ nâng cao', phatam: '岂 qǐ, 何尝 hécháng',
    loi: ['Hiểu tu từ theo nghĩa đen'], btvn: ['Viết 4 câu tu từ, mỗi mẫu một câu', 'Viết đoạn hoà giải 6 lượt', 'Luyện 🎤 3 câu']
  };

  const d7 = {
    n: 7, ten: plan[6].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Ôn giai đoạn 1: thành ngữ, hư từ văn ngôn, câu lựa chọn, điều kiện chặt, phủ định uyển chuyển, tu từ.',
    hoc: `<h4>Tóm tắt tuần 1</h4>${tbl(['Chủ điểm', 'Mẫu'], [['Thành ngữ', '一举两得、半途而废、全力以赴'], ['Văn ngôn', '之、其、以…为…、于'], ['Lựa chọn', '与其…不如；宁可…也不'], ['Điều kiện chặt', '一旦…就；只有…才；除非…否则'], ['Uyển chuyển', '未必、不见得、不得不、难免'], ['Tu từ', '何必、岂不是、何尝']])}`,
    qs: [['mc', '只有坚持，___能成功。', '才', ['就', '都', '也'], '只有…才.'], ['mc', '公司成立___2015年。', '于', ['之', '其', '以'], 'Văn viết.']],
    noi: [['与其抱怨，不如行动。', 'Yǔqí bàoyuàn, bùrú xíngdòng. – Thay vì than phiền chẳng bằng hành động.'], ['我们会全力以赴。', 'Wǒmen huì quán lì yǐ fù. – Chúng tôi sẽ dốc toàn lực.']],
    hoithoai: {
      ctx: 'Tổng ôn: buổi họp chiến lược với ban giám đốc.', vai: 'Giám đốc hỏi, em trả lời.', ai: '👔 董事',
      luot: [
        T(['市场不好，我们是不是该降价？', 'Shìchǎng bù hǎo, wǒmen shì bu shì gāi jiàngjià?', 'Thị trường xấu, có nên giảm giá?'], ['降价未必有效，与其降价，不如提高服务质量。', 'Jiàngjià wèibì yǒuxiào, yǔqí jiàngjià, bùrú tígāo fúwù zhìliàng.', 'Giảm giá chưa chắc hiệu quả, thay vì giảm giá chẳng bằng nâng chất lượng dịch vụ.', '未必 + 与其…不如.'], ['降价一举两得。', 'Jiàngjià yì jǔ liǎng dé.', 'Thiếu lập luận.'], ['只有降价就好。', 'Zhǐyǒu jiàngjià jiù hǎo.', 'Sai cặp.']),
        T(['那需要多少时间？', 'Nà xūyào duōshao shíjiān?', 'Cần bao lâu?'], ['至少半年，但我们不能半途而废。', 'Zhìshǎo bàn nián, dàn wǒmen bù néng bàn tú ér fèi.', 'Ít nhất nửa năm, nhưng không được bỏ dở.', 'Thành ngữ.'], ['半途而废吧。', 'Bàn tú ér fèi ba.', 'Ngược.'], ['何必时间？', 'Hébì shíjiān?', 'Sai.']),
        T(['好，这件事由你负责。', 'Hǎo, zhè jiàn shì yóu nǐ fùzé.', 'Được, việc này do bạn phụ trách.'], ['谢谢信任，我一定全力以赴。', 'Xièxie xìnrèn, wǒ yídìng quán lì yǐ fù.', 'Cảm ơn sự tin tưởng, em sẽ dốc toàn lực.', 'Cam kết.'], ['我不得不负责。', 'Wǒ bù dé bù fùzé.', 'Miễn cưỡng.'], ['岂不是我负责？', 'Qǐ bú shì wǒ fùzé?', 'Không hợp.'])
      ], ket: 'Em đã ôn trọn giai đoạn 1!'
    },
    tom: ['Ôn tuần 1', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn', phatam: 'Ôn nhịp thành ngữ',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: học lại ngày yếu', 'Làm ⚡ Luyện nhanh', 'Viết đoạn 150 chữ dùng 5 mẫu tuần này']
  };

  const d8 = {
    n: 8, ten: plan[7].ten, kinds: K,
    muc: 'Đọc tin kinh tế: GDP, lạm phát, xuất nhập khẩu, thị trường chứng khoán; tóm tắt ý chính.',
    hoc: `${tbl(['Thuật ngữ', 'Nghĩa'], [['国内生产总值 (GDP)', 'tổng sản phẩm quốc nội'], ['通货膨胀', 'lạm phát'], ['进出口', 'xuất nhập khẩu'], ['股市', 'thị trường chứng khoán'], ['经济增长放缓', 'tăng trưởng kinh tế chậm lại']])}
      ${exs([['据统计，今年前三季度GDP同比增长百分之六。', 'Jù tǒngjì, jīnnián qián sān jìdù GDP tóngbǐ zēngzhǎng bǎi fēn zhī liù.', 'Theo thống kê, GDP 3 quý đầu năm tăng 6% so với cùng kỳ.']])}`,
    vocab: [
      w('经济', 'jīngjì', 'kinh tế', '', ['经济发展很快。', 'Jīngjì fāzhǎn hěn kuài.', 'Kinh tế phát triển nhanh.']),
      w('通货膨胀', 'tōnghuò péngzhàng', 'lạm phát', '', ['通货膨胀压力加大。', 'Tōnghuò péngzhàng yālì jiā dà.', 'Áp lực lạm phát tăng.']),
      w('出口', 'chūkǒu', 'xuất khẩu', '', ['越南出口很多咖啡。', 'Yuènán chūkǒu hěn duō kāfēi.', 'Việt Nam xuất khẩu nhiều cà phê.']),
      w('进口', 'jìnkǒu', 'nhập khẩu', '', ['进口汽车很贵。', 'Jìnkǒu qìchē hěn guì.', 'Ô tô nhập khẩu đắt.']),
      w('股市', 'gǔshì', 'thị trường chứng khoán', '', ['股市今天下跌了。', 'Gǔshì jīntiān xiàdiē le.', 'Chứng khoán hôm nay giảm.']),
      w('统计', 'tǒngjì', 'thống kê', '', ['据统计…', 'Jù tǒngjì…', 'Theo thống kê…']),
      w('同比', 'tóngbǐ', 'so với cùng kỳ', '', ['同比增长百分之五。', 'Tóngbǐ zēngzhǎng bǎi fēn zhī wǔ.', 'Tăng 5% so với cùng kỳ.']),
      w('放缓', 'fànghuǎn', 'chậm lại', '', ['增长放缓。', 'Zēngzhǎng fànghuǎn.', 'Tăng trưởng chậm lại.']),
      w('投资者', 'tóuzīzhě', 'nhà đầu tư', '', ['吸引外国投资者。', 'Xīyǐn wàiguó tóuzīzhě.', 'Thu hút nhà đầu tư nước ngoài.']),
      w('政策', 'zhèngcè', 'chính sách', '', ['新政策下个月实施。', 'Xīn zhèngcè xià ge yuè shíshī.', 'Chính sách mới áp dụng tháng sau.'])
    ],
    qs: [
      ['mc', '通货膨胀 nghĩa là?', 'lạm phát', ['giảm phát', 'tăng trưởng', 'thất nghiệp'], 'tōnghuò péngzhàng.'],
      ['mc', '同比增长 nghĩa là?', 'tăng so với cùng kỳ', ['tăng so với tháng trước', 'giảm so với cùng kỳ', 'tăng gấp đôi'], 'tóngbǐ.'],
      ['mc', '增长___ = chậm lại', '放缓', ['放松', '放弃', '放心'], 'fànghuǎn.'],
      ['hear', '据统计，今年越南出口同比增长了百分之十二。', 'Theo thống kê, xuất khẩu Việt Nam năm nay tăng 12% so với cùng kỳ.', ['Nhập khẩu tăng 12%.', 'Xuất khẩu giảm 12%.', 'Xuất khẩu tăng 2%.'], 'Đọc kỹ số và động từ.'],
      ['hear', '受政策影响，股市今天下跌了百分之二。', 'Do ảnh hưởng chính sách, chứng khoán hôm nay giảm 2%.', ['Tăng 2%.', 'Giảm 12%.', 'Không đổi.'], '下跌.'],
      ['order', 'Sắp xếp: “Thu hút nhà đầu tư nước ngoài.”', ['吸引', '外国', '投资者', '。'], '吸引外国投资者。']
    ],
    noi: [['据统计，出口同比增长百分之十。', 'Jù tǒngjì, chūkǒu tóngbǐ zēngzhǎng bǎi fēn zhī shí. – Theo thống kê, xuất khẩu tăng 10% so với cùng kỳ.'], ['经济增长有所放缓。', 'Jīngjì zēngzhǎng yǒusuǒ fànghuǎn. – Tăng trưởng kinh tế có phần chậm lại.'], ['新政策下个月实施。', 'Xīn zhèngcè xià ge yuè shíshī. – Chính sách mới áp dụng tháng sau.']],
    hoithoai: {
      ctx: 'Đối tác hỏi em về tình hình kinh tế Việt Nam.', vai: 'Đối tác hỏi, em tóm tắt tin.', ai: '💼 投资经理',
      luot: [
        T(['越南今年经济怎么样？', 'Yuènán jīnnián jīngjì zěnmeyàng?', 'Kinh tế Việt Nam năm nay thế nào?'], ['总体不错，出口同比增长了，吸引了很多外国投资者。', 'Zǒngtǐ búcuò, chūkǒu tóngbǐ zēngzhǎng le, xīyǐnle hěn duō wàiguó tóuzīzhě.', 'Nhìn chung tốt, xuất khẩu tăng so với cùng kỳ, thu hút nhiều nhà đầu tư nước ngoài.', 'Tóm tắt.'], ['经济很好吃。', 'Jīngjì hěn hǎochī.', 'Vô nghĩa.'], ['我不懂经济了。', 'Wǒ bù dǒng jīngjì le.', 'Né tránh.']),
        T(['通货膨胀呢？', 'Tōnghuò péngzhàng ne?', 'Còn lạm phát?'], ['基本控制在目标范围内，不过还需要关注。', 'Jīběn kòngzhì zài mùbiāo fànwéi nèi, búguò hái xūyào guānzhù.', 'Cơ bản kiểm soát trong mục tiêu, nhưng vẫn cần theo dõi.', 'Cân bằng.'], ['没有通货膨胀了。', 'Méiyǒu tōnghuò péngzhàng le.', 'Tuyệt đối hoá.'], ['通货膨胀很便宜。', 'Tōnghuò péngzhàng hěn piányi.', 'Vô nghĩa.']),
        T(['你觉得现在适合投资吗？', 'Nǐ juéde xiànzài shìhé tóuzī ma?', 'Bạn thấy giờ hợp đầu tư không?'], ['这要看具体行业，我不是专业顾问，建议您咨询专业机构。', 'Zhè yào kàn jùtǐ hángyè, wǒ bú shì zhuānyè gùwèn, jiànyì nín zīxún zhuānyè jīgòu.', 'Tuỳ ngành, tôi không phải chuyên gia tư vấn, anh nên hỏi tổ chức chuyên nghiệp.', 'Thận trọng.'], ['肯定赚钱，快投吧！', 'Kěndìng zhuànqián, kuài tóu ba!', 'Hứa hẹn sai.'], ['股市一定上涨。', 'Gǔshì yídìng shàngzhǎng.', 'Khẳng định quá mức.'])
      ], ket: 'Em đã tóm tắt tình hình kinh tế thận trọng, chuyên nghiệp.'
    },
    tom: ['GDP / 通货膨胀 / 进出口 / 股市', '据统计 / 同比 / 放缓'], nguphap: 'Văn phong tin kinh tế', phatam: '通货膨胀 tōnghuò péngzhàng',
    loi: ['Nhầm 同比 và 环比 (so với kỳ trước)'], btvn: ['Đọc 1 tin kinh tế tiếng Trung, tóm tắt 3 câu', 'Học thuộc 10 thuật ngữ', 'Luyện 🎤 3 câu']
  };

  const d9 = {
    n: 9, ten: plan[8].ten, kinds: K,
    muc: 'Thuyết trình bài bản: chào, giới thiệu dàn ý, chuyển ý, nhấn mạnh, kết luận, mời đặt câu hỏi.',
    hoc: `${tbl(['Phần', 'Câu mẫu'], [['Mở đầu', '各位领导、各位同事，大家好！今天我想和大家分享…'], ['Dàn ý', '我的报告分为三个部分：首先…其次…最后…'], ['Chuyển ý', '接下来，我们来看一下…'], ['Nhấn mạnh', '值得注意的是… / 需要强调的是…'], ['Kết luận', '综上所述…'], ['Hỏi đáp', '谢谢大家！欢迎提问。']])}`,
    vocab: [
      w('分享', 'fēnxiǎng', 'chia sẻ', '', ['今天我想和大家分享…', 'Jīntiān wǒ xiǎng hé dàjiā fēnxiǎng…', 'Hôm nay tôi muốn chia sẻ…']),
      w('首先', 'shǒuxiān', 'trước hết', '', ['首先，我介绍一下背景。', 'Shǒuxiān, wǒ jièshào yíxià bèijǐng.', 'Trước hết tôi giới thiệu bối cảnh.']),
      w('其次', 'qícì', 'thứ hai, kế đến', '', ['其次是数据分析。', 'Qícì shì shùjù fēnxī.', 'Kế đến là phân tích số liệu.']),
      w('接下来', 'jiē xiàlái', 'tiếp theo', '', ['接下来看第二部分。', 'Jiē xiàlái kàn dì èr bùfen.', 'Tiếp theo xem phần hai.']),
      w('值得注意', 'zhíde zhùyì', 'đáng chú ý', '', ['值得注意的是…', 'Zhíde zhùyì de shì…', 'Điều đáng chú ý là…']),
      w('强调', 'qiángdiào', 'nhấn mạnh', '', ['我想强调一点。', 'Wǒ xiǎng qiángdiào yì diǎn.', 'Tôi muốn nhấn mạnh một điểm.']),
      w('综上所述', 'zōng shàng suǒ shù', 'tổng hợp những điều trên', '', ['综上所述，这个方案可行。', 'Zōng shàng suǒ shù, zhège fāng\'àn kěxíng.', 'Tóm lại, phương án này khả thi.']),
      w('背景', 'bèijǐng', 'bối cảnh', '', ['项目背景。', 'Xiàngmù bèijǐng.', 'Bối cảnh dự án.']),
      w('提问', 'tíwèn', 'đặt câu hỏi', '', ['欢迎提问。', 'Huānyíng tíwèn.', 'Mời đặt câu hỏi.']),
      w('可行', 'kěxíng', 'khả thi', '', ['这个计划可行吗？', 'Zhège jìhuà kěxíng ma?', 'Kế hoạch này khả thi không?'])
    ],
    qs: [
      ['mc', 'Câu kết luận thuyết trình?', '综上所述，…', ['首先，…', '接下来，…', '大家好，…'], 'Tổng kết.'],
      ['mc', 'Thứ tự đúng?', '首先 → 其次 → 最后', ['其次 → 首先 → 最后', '最后 → 首先 → 其次', '首先 → 最后 → 其次'], 'Dàn ý.'],
      ['mc', '可行 nghĩa là?', 'khả thi', ['có thể đi', 'đáng tin', 'hợp lệ'], 'kěxíng.'],
      ['hear', '值得注意的是，第三季度的成本明显下降了。', 'Đáng chú ý là chi phí quý 3 giảm rõ rệt.', ['Chi phí quý 3 tăng.', 'Quý 3 không đáng chú ý.', 'Chi phí quý 1 giảm.'], '值得注意.'],
      ['hear', '我的报告分为三个部分。', 'Báo cáo của tôi chia làm ba phần.', ['Hai phần.', 'Bốn phần.', 'Không chia phần.'], '三个部分.'],
      ['order', 'Sắp xếp: “Tôi muốn nhấn mạnh một điểm.”', ['我', '想', '强调', '一点。'], '我想强调一点。']
    ],
    noi: [['各位同事，大家好！今天我想和大家分享…', 'Gèwèi tóngshì, dàjiā hǎo! Jīntiān wǒ xiǎng hé dàjiā fēnxiǎng… – Chào các đồng nghiệp! Hôm nay tôi muốn chia sẻ…'], ['我的报告分为三个部分。', 'Wǒ de bàogào fēn wéi sān ge bùfen. – Báo cáo của tôi chia làm ba phần.'], ['综上所述，这个方案可行。', 'Zōng shàng suǒ shù, zhège fāng\'àn kěxíng. – Tóm lại, phương án khả thi.']],
    hoithoai: {
      ctx: 'Em thuyết trình đề xuất triển khai chatbot hỗ trợ khách hàng.', vai: 'Khán giả hỏi, em trình bày.', ai: '🎤 听众',
      luot: [
        T(['请开始吧。', 'Qǐng kāishǐ ba.', 'Mời bắt đầu.'], ['大家好！我的报告分为三个部分：背景、方案和预算。', 'Dàjiā hǎo! Wǒ de bàogào fēn wéi sān ge bùfen: bèijǐng, fāng\'àn hé yùsuàn.', 'Chào mọi người! Báo cáo gồm 3 phần: bối cảnh, phương án, ngân sách.', 'Dàn ý.'], ['我开始了过。', 'Wǒ kāishǐle guo.', 'Sai.'], ['综上所述，结束。', 'Zōng shàng suǒ shù, jiéshù.', 'Kết luận khi chưa bắt đầu.']),
        T(['这个方案最大的优点是什么？', 'Zhège fāng\'àn zuì dà de yōudiǎn shì shénme?', 'Ưu điểm lớn nhất?'], ['值得注意的是，它能处理百分之六十的常见问题。', 'Zhíde zhùyì de shì, tā néng chǔlǐ bǎi fēn zhī liùshí de chángjiàn wèntí.', 'Đáng chú ý là nó xử lý được 60% câu hỏi thường gặp.', 'Nhấn mạnh + số liệu.'], ['优点很多很多。', 'Yōudiǎn hěn duō hěn duō.', 'Mơ hồ.'], ['首先最后。', 'Shǒuxiān zuìhòu.', 'Vô nghĩa.']),
        T(['预算会不会太高？', 'Yùsuàn huì bu huì tài gāo?', 'Ngân sách có quá cao không?'], ['综上所述，一年内就能收回成本，所以我认为方案可行。', 'Zōng shàng suǒ shù, yì nián nèi jiù néng shōuhuí chéngběn, suǒyǐ wǒ rènwéi fāng\'àn kěxíng.', 'Tổng hợp lại, trong một năm thu hồi vốn, nên phương án khả thi.', 'Kết luận.'], ['预算不知道。', 'Yùsuàn bù zhīdào.', 'Thiếu chuẩn bị.'], ['太高了，算了。', 'Tài gāo le, suàn le.', 'Tự bác.'])
      ], ket: 'Em đã thuyết trình có cấu trúc rõ ràng.'
    },
    tom: ['首先 / 其次 / 接下来 / 最后', '值得注意的是', '综上所述'], nguphap: 'Cấu trúc thuyết trình', phatam: '综上所述 zōng shàng suǒ shù',
    loi: ['Thiếu dàn ý', 'Không có số liệu'], btvn: ['Soạn bài thuyết trình 3 phút về sản phẩm của em', 'Tự ghi âm và nghe lại', 'Luyện 🎤 3 câu']
  };

  const d10 = {
    n: 10, ten: plan[9].ten, kinds: K,
    muc: 'Viết nghị luận ngắn: nêu luận điểm, đưa luận cứ (số liệu, ví dụ), phản biện, kết luận.',
    hoc: `${tbl(['Phần', 'Mẫu câu'], [['Luận điểm', '我认为… / 在我看来…'], ['Luận cứ', '以…为例 / 数据显示…'], ['Phản biện', '有人认为…，但是…'], ['Kết luận', '因此，… / 总而言之，…']])}
      ${tip('📝 HSK 5 viết ~80 chữ; HSK 6 tóm tắt 400 chữ. Viết câu ngắn, đúng ngữ pháp, tránh lỗi chữ.')}`,
    vocab: [
      w('论点', 'lùndiǎn', 'luận điểm', '', ['你的论点是什么？', 'Nǐ de lùndiǎn shì shénme?', 'Luận điểm của bạn là gì?']),
      w('以…为例', 'yǐ… wéi lì', 'lấy… làm ví dụ', '', ['以我们公司为例。', 'Yǐ wǒmen gōngsī wéi lì.', 'Lấy công ty chúng tôi làm ví dụ.']),
      w('显示', 'xiǎnshì', 'cho thấy', '', ['数据显示…', 'Shùjù xiǎnshì…', 'Số liệu cho thấy…']),
      w('有人认为', 'yǒu rén rènwéi', 'có người cho rằng', '', ['有人认为网购不安全。', 'Yǒu rén rènwéi wǎnggòu bù ānquán.', 'Có người cho rằng mua online không an toàn.']),
      w('总而言之', 'zǒng ér yán zhī', 'nói tóm lại', '', ['总而言之，利大于弊。', 'Zǒng ér yán zhī, lì dà yú bì.', 'Tóm lại, lợi nhiều hơn hại.']),
      w('利大于弊', 'lì dà yú bì', 'lợi nhiều hơn hại', '', ['我认为利大于弊。', 'Wǒ rènwéi lì dà yú bì.', 'Tôi cho rằng lợi nhiều hơn hại.']),
      w('观念', 'guānniàn', 'quan niệm', '', ['传统观念在改变。', 'Chuántǒng guānniàn zài gǎibiàn.', 'Quan niệm truyền thống đang thay đổi.']),
      w('现象', 'xiànxiàng', 'hiện tượng', '', ['这种现象很普遍。', 'Zhè zhǒng xiànxiàng hěn pǔbiàn.', 'Hiện tượng này rất phổ biến.']),
      w('普遍', 'pǔbiàn', 'phổ biến', '', ['手机支付很普遍。', 'Shǒujī zhīfù hěn pǔbiàn.', 'Thanh toán điện thoại rất phổ biến.']),
      w('角度', 'jiǎodù', 'góc độ', '', ['从另一个角度看…', 'Cóng lìng yí ge jiǎodù kàn…', 'Nhìn từ góc độ khác…'])
    ],
    qs: [
      ['mc', 'Câu phản biện?', '有人认为…，但是…', ['总而言之…', '首先…', '以…为例'], 'Đưa ý ngược rồi bác.'],
      ['mc', '利大于弊 nghĩa là?', 'lợi nhiều hơn hại', ['hại nhiều hơn lợi', 'lợi bằng hại', 'không có lợi'], 'lì dà yú bì.'],
      ['mc', '数据___，越来越多人用手机支付。', '显示', ['显得', '表现', '显然'], 'Số liệu cho thấy.'],
      ['hear', '从另一个角度看，这也是一个机会。', 'Nhìn từ góc độ khác, đây cũng là cơ hội.', ['Đây là thảm hoạ.', 'Không có góc độ nào.', 'Đây không phải cơ hội.'], '角度.'],
      ['hear', '总而言之，手机支付利大于弊。', 'Tóm lại, thanh toán điện thoại lợi nhiều hơn hại.', ['Hại nhiều hơn lợi.', 'Không nên dùng.', 'Chưa có kết luận.'], '利大于弊.'],
      ['order', 'Sắp xếp: “Hiện tượng này rất phổ biến.”', ['这种', '现象', '很', '普遍。'], '这种现象很普遍。']
    ],
    noi: [['在我看来，利大于弊。', 'Zài wǒ kàn lái, lì dà yú bì. – Theo tôi, lợi nhiều hơn hại.'], ['以我们公司为例…', 'Yǐ wǒmen gōngsī wéi lì… – Lấy công ty chúng tôi làm ví dụ…'], ['总而言之，…', 'Zǒng ér yán zhī… – Nói tóm lại…']],
    hoithoai: {
      ctx: 'Giáo viên luyện cho em lập luận đề “Có nên dùng tiền mặt nữa không?”.', vai: 'Cô hỏi, em lập luận.', ai: '👩‍🏫 写作老师',
      luot: [
        T(['你的论点是什么？', 'Nǐ de lùndiǎn shì shénme?', 'Luận điểm của em?'], ['我认为无现金支付利大于弊。', 'Wǒ rènwéi wú xiànjīn zhīfù lì dà yú bì.', 'Em cho rằng thanh toán không tiền mặt lợi nhiều hơn hại.', 'Luận điểm rõ.'], ['我觉得很多。', 'Wǒ juéde hěn duō.', 'Mơ hồ.'], ['论点是我。', 'Lùndiǎn shì wǒ.', 'Vô nghĩa.']),
        T(['有什么论据？', 'Yǒu shénme lùnjù?', 'Luận cứ là gì?'], ['数据显示，越南百分之七十的年轻人用手机支付，又快又方便。', 'Shùjù xiǎnshì, Yuènán bǎi fēn zhī qīshí de niánqīng rén yòng shǒujī zhīfù, yòu kuài yòu fāngbiàn.', 'Số liệu cho thấy 70% người trẻ VN dùng thanh toán điện thoại, nhanh và tiện. (số minh hoạ)', 'Luận cứ số liệu.'], ['因为我喜欢。', 'Yīnwèi wǒ xǐhuan.', 'Chủ quan.'], ['没有论据。', 'Méiyǒu lùnjù.', 'Yếu.']),
        T(['有人担心安全问题呢？', 'Yǒu rén dānxīn ānquán wèntí ne?', 'Có người lo an toàn?'], ['这个担心有道理，但是只要保护好密码，风险就可以控制。', 'Zhège dānxīn yǒu dàolǐ, dànshì zhǐyào bǎohù hǎo mìmǎ, fēngxiǎn jiù kěyǐ kòngzhì.', 'Lo ngại này có lý, nhưng chỉ cần bảo vệ mật khẩu là kiểm soát được rủi ro.', 'Phản biện.'], ['安全不重要。', 'Ānquán bú zhòngyào.', 'Bác bỏ thô.'], ['那就别用了。', 'Nà jiù bié yòng le.', 'Mâu thuẫn luận điểm.'])
      ], ket: 'Em đã xây dựng lập luận đủ 4 phần.'
    },
    tom: ['Luận điểm → luận cứ → phản biện → kết luận'], nguphap: 'Bố cục nghị luận', phatam: '总而言之 zǒng ér yán zhī',
    loi: ['Luận cứ cảm tính', 'Thiếu phản biện'], btvn: ['Viết bài nghị luận 200 chữ đề: làm việc từ xa', 'Gạch rõ 4 phần', 'Luyện 🎤 3 câu']
  };

  const d11 = {
    n: 11, ten: plan[10].ten, kinds: K,
    muc: 'Thảo luận về trí tuệ nhân tạo: cơ hội, rủi ro, việc làm, đạo đức; dùng 取代, 依赖, 伦理.',
    hoc: `${tbl(['Khía cạnh', 'Câu mẫu'], [['Cơ hội', '人工智能可以大大提高工作效率。'], ['Lo ngại', '很多人担心AI会取代人的工作。'], ['Phản biện', 'AI取代的是重复性工作，而不是创造性工作。'], ['Đạo đức', '使用AI要注意数据隐私和伦理问题。']])}`,
    vocab: [
      w('人工智能', 'réngōng zhìnéng', 'trí tuệ nhân tạo', '', ['人工智能发展很快。', 'Réngōng zhìnéng fāzhǎn hěn kuài.', 'AI phát triển nhanh.']),
      w('取代', 'qǔdài', 'thay thế', '', ['机器不能完全取代人。', 'Jīqì bù néng wánquán qǔdài rén.', 'Máy không thể thay hoàn toàn con người.']),
      w('依赖', 'yīlài', 'phụ thuộc', '', ['不要过度依赖AI。', 'Búyào guòdù yīlài AI.', 'Đừng quá phụ thuộc AI.']),
      w('隐私', 'yǐnsī', 'quyền riêng tư', '', ['保护用户隐私。', 'Bǎohù yònghù yǐnsī.', 'Bảo vệ quyền riêng tư người dùng.']),
      w('伦理', 'lúnlǐ', 'đạo đức, luân lý', '', ['AI伦理问题。', 'AI lúnlǐ wèntí.', 'Vấn đề đạo đức AI.']),
      w('重复', 'chóngfù', 'lặp lại', '', ['重复性的工作。', 'Chóngfùxìng de gōngzuò.', 'Công việc lặp lại.']),
      w('创造', 'chuàngzào', 'sáng tạo', '', ['创造性的工作。', 'Chuàngzàoxìng de gōngzuò.', 'Công việc sáng tạo.']),
      w('算法', 'suànfǎ', 'thuật toán', '', ['算法越来越聪明。', 'Suànfǎ yuè lái yuè cōngming.', 'Thuật toán ngày càng thông minh.']),
      w('自动化', 'zìdònghuà', 'tự động hoá', '', ['流程自动化。', 'Liúchéng zìdònghuà.', 'Tự động hoá quy trình.']),
      w('适应', 'shìyìng', 'thích nghi', '', ['我们要适应变化。', 'Wǒmen yào shìyìng biànhuà.', 'Ta phải thích nghi với thay đổi.'])
    ],
    qs: [
      ['mc', '取代 nghĩa là?', 'thay thế', ['lấy ra', 'đại diện', 'đổi tiền'], 'qǔdài.'],
      ['mc', 'AI thay thế loại công việc nào trước?', '重复性工作', ['创造性工作', '所有工作', '没有工作'], 'Lặp lại.'],
      ['mc', '不要过度___AI。', '依赖', ['依靠了', '取代', '适应'], 'Phụ thuộc.'],
      ['hear', '使用AI要注意数据隐私和伦理问题。', 'Dùng AI phải chú ý quyền riêng tư dữ liệu và đạo đức.', ['AI không có rủi ro.', 'Không cần chú ý.', 'AI thay thế đạo đức.'], '隐私 / 伦理.'],
      ['hear', '与其害怕被取代，不如学会用AI。', 'Thay vì sợ bị thay thế chẳng bằng học dùng AI.', ['Nên sợ AI.', 'Đừng học AI.', 'AI vô dụng.'], '与其…不如.'],
      ['order', 'Sắp xếp: “Ta phải thích nghi với thay đổi.”', ['我们', '要', '适应', '变化。'], '我们要适应变化。']
    ],
    noi: [['人工智能可以大大提高效率。', 'Réngōng zhìnéng kěyǐ dàdà tígāo xiàolǜ. – AI có thể nâng cao hiệu suất rất nhiều.'], ['与其害怕，不如学会用AI。', 'Yǔqí hàipà, bùrú xuéhuì yòng AI. – Thay vì sợ chẳng bằng học dùng AI.'], ['要注意数据隐私。', 'Yào zhùyì shùjù yǐnsī. – Phải chú ý quyền riêng tư dữ liệu.']],
    hoithoai: {
      ctx: 'Hội thảo nội bộ: “AI có lấy mất việc của nhân viên ngân hàng?”.', vai: 'Đồng nghiệp lo lắng, em chia sẻ góc nhìn.', ai: '😟 柜员',
      luot: [
        T(['听说以后AI会取代柜员，我很担心。', 'Tīngshuō yǐhòu AI huì qǔdài guìyuán, wǒ hěn dānxīn.', 'Nghe nói sau này AI sẽ thay giao dịch viên, tôi lo quá.'], ['AI取代的主要是重复性工作，而不是需要沟通和判断的工作。', 'AI qǔdài de zhǔyào shì chóngfùxìng gōngzuò, ér bú shì xūyào gōutōng hé pànduàn de gōngzuò.', 'AI chủ yếu thay việc lặp lại, không phải việc cần giao tiếp và phán đoán.', 'Phân tích.'], ['对，你会失业。', 'Duì, nǐ huì shīyè.', 'Gây hoảng.'], ['AI不存在。', 'AI bù cúnzài.', 'Phủ nhận.']),
        T(['那我该怎么办？', 'Nà wǒ gāi zěnme bàn?', 'Vậy tôi nên làm gì?'], ['与其害怕，不如学会用AI，提高自己的能力。', 'Yǔqí hàipà, bùrú xuéhuì yòng AI, tígāo zìjǐ de nénglì.', 'Thay vì sợ chẳng bằng học dùng AI, nâng năng lực bản thân.', '与其…不如.'], ['什么也别做。', 'Shénme yě bié zuò.', 'Thụ động.'], ['辞职吧。', 'Cízhí ba.', 'Cực đoan.']),
        T(['用AI有风险吗？', 'Yòng AI yǒu fēngxiǎn ma?', 'Dùng AI có rủi ro không?'], ['有，不能把客户的隐私数据放进公共AI工具里。', 'Yǒu, bù néng bǎ kèhù de yǐnsī shùjù fàng jìn gōnggòng AI gōngjù li.', 'Có, không được đưa dữ liệu riêng tư của khách vào công cụ AI công cộng.', 'Lưu ý bảo mật.'], ['没有任何风险。', 'Méiyǒu rènhé fēngxiǎn.', 'Sai.'], ['随便用。', 'Suíbiàn yòng.', 'Nguy hiểm.'])
      ], ket: 'Em đã thảo luận AI cân bằng và có trách nhiệm.'
    },
    tom: ['取代 / 依赖 / 隐私 / 伦理', 'Việc lặp lại vs việc sáng tạo'], nguphap: 'Nghị luận chủ đề công nghệ', phatam: '人工智能 réngōng zhìnéng',
    loi: ['Tuyệt đối hoá (AI thay tất cả / AI vô dụng)'], btvn: ['Viết 200 chữ: AI và nghề của em', 'Liệt kê 3 việc em có thể tự động hoá', 'Luyện 🎤 3 câu']
  };

  const d12 = {
    n: 12, ten: plan[11].ten, kinds: K,
    muc: 'Nói về chuyển đổi số ngân hàng: ngân hàng số, eKYC, thanh toán QR, bảo mật, trải nghiệm khách hàng.',
    hoc: `${tbl(['Thuật ngữ', 'Nghĩa'], [['数字化转型', 'chuyển đổi số'], ['线上开户', 'mở tài khoản online'], ['人脸识别', 'nhận diện khuôn mặt'], ['扫码支付', 'thanh toán quét mã'], ['用户体验', 'trải nghiệm người dùng'], ['风控', 'quản trị rủi ro']])}`,
    vocab: [
      w('数字化', 'shùzìhuà', 'số hoá', '', ['银行数字化转型。', 'Yínháng shùzìhuà zhuǎnxíng.', 'Ngân hàng chuyển đổi số.']),
      w('转型', 'zhuǎnxíng', 'chuyển đổi (mô hình)', '', ['企业需要转型。', 'Qǐyè xūyào zhuǎnxíng.', 'Doanh nghiệp cần chuyển đổi.']),
      w('人脸识别', 'rénliǎn shíbié', 'nhận diện khuôn mặt', '', ['用人脸识别登录。', 'Yòng rénliǎn shíbié dēnglù.', 'Đăng nhập bằng nhận diện khuôn mặt.']),
      w('扫码', 'sǎo mǎ', 'quét mã', '', ['扫码支付很方便。', 'Sǎo mǎ zhīfù hěn fāngbiàn.', 'Quét mã thanh toán rất tiện.']),
      w('用户体验', 'yònghù tǐyàn', 'trải nghiệm người dùng', '', ['提升用户体验。', 'Tíshēng yònghù tǐyàn.', 'Nâng cao trải nghiệm người dùng.']),
      w('风控', 'fēngkòng', 'quản trị rủi ro', '', ['风控很重要。', 'Fēngkòng hěn zhòngyào.', 'Quản trị rủi ro rất quan trọng.']),
      w('开户', 'kāihù', 'mở tài khoản', '', ['线上开户只要五分钟。', 'Xiànshàng kāihù zhǐ yào wǔ fēnzhōng.', 'Mở tài khoản online chỉ 5 phút.']),
      w('网点', 'wǎngdiǎn', 'điểm giao dịch, chi nhánh', '', ['网点数量减少了。', 'Wǎngdiǎn shùliàng jiǎnshǎo le.', 'Số điểm giao dịch giảm.']),
      w('提升', 'tíshēng', 'nâng cao', '', ['提升服务质量。', 'Tíshēng fúwù zhìliàng.', 'Nâng chất lượng dịch vụ.']),
      w('便捷', 'biànjié', 'nhanh gọn, tiện lợi', '', ['操作很便捷。', 'Cāozuò hěn biànjié.', 'Thao tác rất tiện.'])
    ],
    qs: [
      ['mc', '数字化转型 nghĩa là?', 'chuyển đổi số', ['số hoá tiền', 'chuyển khoản số', 'đổi số điện thoại'], 'shùzìhuà zhuǎnxíng.'],
      ['mc', '风控 viết tắt của?', '风险控制 (quản trị rủi ro)', ['风景控制', '风扇控制', '风格控制'], 'fēngkòng.'],
      ['mc', '___支付很方便。(quét mã)', '扫码', ['扫地', '打码', '码扫'], 'sǎo mǎ.'],
      ['hear', '线上开户只要五分钟，用人脸识别就可以。', 'Mở tài khoản online chỉ 5 phút, dùng nhận diện khuôn mặt.', ['Phải ra quầy.', 'Mất 50 phút.', 'Cần vân tay.'], '人脸识别.'],
      ['hear', '数字化不仅提升了用户体验，而且降低了成本。', 'Số hoá không chỉ nâng trải nghiệm mà còn giảm chi phí.', ['Số hoá tăng chi phí.', 'Trải nghiệm kém đi.', 'Không có lợi ích.'], '不仅…而且.'],
      ['order', 'Sắp xếp: “Nâng chất lượng dịch vụ.”', ['提升', '服务', '质量', '。'], '提升服务质量。']
    ],
    noi: [['银行正在进行数字化转型。', 'Yínháng zhèngzài jìnxíng shùzìhuà zhuǎnxíng. – Ngân hàng đang chuyển đổi số.'], ['线上开户只要五分钟。', 'Xiànshàng kāihù zhǐ yào wǔ fēnzhōng. – Mở tài khoản online chỉ 5 phút.'], ['我们要提升用户体验。', 'Wǒmen yào tíshēng yònghù tǐyàn. – Ta phải nâng cao trải nghiệm người dùng.']],
    hoithoai: {
      ctx: 'Đoàn ngân hàng Trung Quốc sang học hỏi mô hình ngân hàng số của chi nhánh em.', vai: 'Khách hỏi, em giới thiệu.', ai: '🏦 考察团',
      luot: [
        T(['你们的数字化转型做得怎么样？', 'Nǐmen de shùzìhuà zhuǎnxíng zuò de zěnmeyàng?', 'Chuyển đổi số của các bạn thế nào?'], ['现在百分之八十的交易都在手机上完成。', 'Xiànzài bǎi fēn zhī bāshí de jiāoyì dōu zài shǒujī shang wánchéng.', 'Hiện 80% giao dịch thực hiện trên điện thoại. (số minh hoạ)', 'Số liệu.'], ['数字很多。', 'Shùzì hěn duō.', 'Hiểu sai.'], ['转型了过。', 'Zhuǎnxíngle guo.', 'Sai.']),
        T(['线上开户安全吗？', 'Xiànshàng kāihù ānquán ma?', 'Mở tài khoản online an toàn không?'], ['我们用人脸识别加身份证验证，风控很严格。', 'Wǒmen yòng rénliǎn shíbié jiā shēnfènzhèng yànzhèng, fēngkòng hěn yángé.', 'Dùng nhận diện khuôn mặt cộng xác thực CCCD, quản trị rủi ro nghiêm.', 'Bảo mật.'], ['不太安全。', 'Bú tài ānquán.', 'Tự hạ thấp.'], ['安全不重要。', 'Ānquán bú zhòngyào.', 'Sai.']),
        T(['网点会不会减少？', 'Wǎngdiǎn huì bu huì jiǎnshǎo?', 'Điểm giao dịch có giảm không?'], ['会，不过网点会转型为咨询和复杂业务中心。', 'Huì, búguò wǎngdiǎn huì zhuǎnxíng wéi zīxún hé fùzá yèwù zhōngxīn.', 'Có, nhưng điểm giao dịch sẽ chuyển thành trung tâm tư vấn và nghiệp vụ phức tạp.', 'Phân tích.'], ['网点都关了。', 'Wǎngdiǎn dōu guān le.', 'Tuyệt đối hoá.'], ['不知道网点。', 'Bù zhīdào wǎngdiǎn.', 'Né.'])
      ], ket: 'Em đã giới thiệu mô hình ngân hàng số chuyên nghiệp.'
    },
    tom: ['数字化转型 / 人脸识别 / 扫码 / 风控 / 用户体验'], nguphap: 'Từ vựng ngân hàng số', phatam: '识别 shíbié, 体验 tǐyàn',
    loi: ['Nhầm 网点 và 网站'], btvn: ['Viết 150 chữ giới thiệu dịch vụ ngân hàng số em dùng', 'Học thuộc 10 thuật ngữ', 'Luyện 🎤 3 câu']
  };

  const d13 = {
    n: 13, ten: plan[12].ten, kinds: K,
    muc: 'Ngôn ngữ quản lý: giao việc, phản hồi, động viên, xử lý mâu thuẫn, đánh giá hiệu suất.',
    hoc: `${tbl(['Tình huống', 'Câu mẫu'], [['Giao việc', '这个任务交给你，下周三之前完成。'], ['Khen cụ thể', '你这次的报告数据很准确，做得很好。'], ['Góp ý', '如果能把结论写得更清楚，就更好了。'], ['Mâu thuẫn', '大家先冷静一下，听听双方的意见。'], ['Đánh giá', '你今年的绩效很突出。']])}
      ${tip('🔑 Góp ý kiểu “bánh mì kẹp”: khen → góp ý (如果能…就更好了) → động viên.')}`,
    vocab: [
      w('任务', 'rènwu', 'nhiệm vụ', '', ['任务完成了。', 'Rènwu wánchéng le.', 'Nhiệm vụ hoàn thành.']),
      w('交给', 'jiāo gěi', 'giao cho', '', ['这件事交给你了。', 'Zhè jiàn shì jiāo gěi nǐ le.', 'Việc này giao cho bạn.']),
      w('绩效', 'jìxiào', 'hiệu suất (KPI)', '', ['绩效考核。', 'Jìxiào kǎohé.', 'Đánh giá hiệu suất.']),
      w('突出', 'tūchū', 'nổi bật', '', ['他的表现很突出。', 'Tā de biǎoxiàn hěn tūchū.', 'Thể hiện của anh ấy nổi bật.']),
      w('冷静', 'lěngjìng', 'bình tĩnh', '', ['请大家冷静。', 'Qǐng dàjiā lěngjìng.', 'Mọi người bình tĩnh.']),
      w('团队', 'tuánduì', 'đội nhóm', '', ['团队合作很重要。', 'Tuánduì hézuò hěn zhòngyào.', 'Làm việc nhóm rất quan trọng.']),
      w('激励', 'jīlì', 'khích lệ, tạo động lực', '', ['激励员工。', 'Jīlì yuángōng.', 'Tạo động lực cho nhân viên.']),
      w('反馈', 'fǎnkuì', 'phản hồi', '', ['谢谢你的反馈。', 'Xièxie nǐ de fǎnkuì.', 'Cảm ơn phản hồi của bạn.']),
      w('目标', 'mùbiāo', 'mục tiêu', '', ['定一个明确的目标。', 'Dìng yí ge míngquè de mùbiāo.', 'Đặt mục tiêu rõ ràng.']),
      w('考核', 'kǎohé', 'đánh giá, sát hạch', '', ['年底考核。', 'Niándǐ kǎohé.', 'Đánh giá cuối năm.'])
    ],
    qs: [
      ['mc', 'Góp ý khéo léo?', '如果能把结论写得更清楚，就更好了。', ['你的报告太差了。', '重写！', '我不喜欢。'], 'Bánh mì kẹp.'],
      ['mc', '绩效 nghĩa là?', 'hiệu suất làm việc', ['thành tích học tập', 'tiền thưởng', 'công lao'], 'jìxiào.'],
      ['mc', '这个任务___你，周三前完成。', '交给', ['给交', '交了', '接给'], 'Giao cho.'],
      ['hear', '你这次的报告数据很准确，做得很好。', 'Báo cáo lần này số liệu chính xác, làm tốt lắm.', ['Số liệu sai.', 'Báo cáo chưa xong.', 'Làm lại đi.'], 'Khen cụ thể.'],
      ['hear', '大家先冷静一下，听听双方的意见。', 'Mọi người bình tĩnh, nghe ý kiến hai bên.', ['Ai đúng thì nói to.', 'Kết thúc họp.', 'Bỏ phiếu ngay.'], '冷静.'],
      ['order', 'Sắp xếp: “Làm việc nhóm rất quan trọng.”', ['团队', '合作', '很', '重要。'], '团队合作很重要。']
    ],
    noi: [['这个任务交给你，下周三之前完成。', 'Zhège rènwu jiāo gěi nǐ, xià zhōusān zhīqián wánchéng. – Nhiệm vụ này giao cho bạn, xong trước thứ Tư tuần sau.'], ['如果能更清楚一点，就更好了。', 'Rúguǒ néng gèng qīngchu yìdiǎn, jiù gèng hǎo le. – Nếu rõ hơn chút thì càng tốt.'], ['谢谢你的反馈。', 'Xièxie nǐ de fǎnkuì. – Cảm ơn phản hồi của bạn.']],
    hoithoai: {
      ctx: 'Em là trưởng nhóm, góp ý báo cáo cho một nhân viên người Hoa.', vai: 'Nhân viên hỏi, em phản hồi.', ai: '🧑 组员',
      luot: [
        T(['组长，我的报告怎么样？', 'Zǔzhǎng, wǒ de bàogào zěnmeyàng?', 'Trưởng nhóm, báo cáo của em thế nào?'], ['数据很准确，做得很好。', 'Shùjù hěn zhǔnquè, zuò de hěn hǎo.', 'Số liệu chính xác, làm tốt lắm.', 'Khen trước.'], ['太差了。', 'Tài chà le.', 'Thô.'], ['还行吧，随便。', 'Hái xíng ba, suíbiàn.', 'Thiếu cụ thể.']),
        T(['有什么需要改进的吗？', 'Yǒu shénme xūyào gǎijìn de ma?', 'Có gì cần cải thiện không?'], ['如果能把结论写得更清楚一点，就更好了。', 'Rúguǒ néng bǎ jiélùn xiě de gèng qīngchu yìdiǎn, jiù gèng hǎo le.', 'Nếu viết kết luận rõ hơn chút thì càng tốt.', 'Góp ý khéo.'], ['全部重写。', 'Quánbù chóngxiě.', 'Quá nặng.'], ['没有，完美。', 'Méiyǒu, wánměi.', 'Thiếu thật.']),
        T(['好的，我今天改好。', 'Hǎo de, wǒ jīntiān gǎi hǎo.', 'Vâng, hôm nay em sửa xong.'], ['不着急，明天给我就行。你今年的表现很突出，继续加油！', 'Bù zháojí, míngtiān gěi wǒ jiù xíng. Nǐ jīnnián de biǎoxiàn hěn tūchū, jìxù jiāyóu!', 'Không vội, mai gửi là được. Năm nay em rất nổi bật, cố lên!', 'Động viên.'], ['快点儿改。', 'Kuài diǎnr gǎi.', 'Gây áp lực.'], ['改不改都行。', 'Gǎi bu gǎi dōu xíng.', 'Thiếu nghiêm túc.'])
      ], ket: 'Em đã phản hồi theo kiểu bánh mì kẹp.'
    },
    tom: ['Giao việc rõ hạn', 'Khen cụ thể', '如果能…就更好了', 'Động viên'], nguphap: 'Ngôn ngữ quản lý', phatam: '绩效 jìxiào, 反馈 fǎnkuì',
    loi: ['Góp ý quá thẳng', 'Khen chung chung'], btvn: ['Viết phản hồi bánh mì kẹp cho 2 tình huống', 'Viết email giao việc', 'Luyện 🎤 3 câu']
  };

  const d14 = {
    n: 14, ten: plan[13].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Ôn giai đoạn 2: tin kinh tế, thuyết trình, nghị luận, AI, chuyển đổi số, quản lý.',
    hoc: `<h4>Tóm tắt tuần 2</h4>${tbl(['Chủ đề', 'Cụm then chốt'], [['Tin kinh tế', '据统计、同比增长、放缓'], ['Thuyết trình', '首先、其次、值得注意的是、综上所述'], ['Nghị luận', '有人认为…但是…；总而言之；利大于弊'], ['AI', '取代、依赖、隐私、伦理'], ['Ngân hàng số', '数字化转型、人脸识别、风控'], ['Quản lý', '交给、绩效、反馈、如果能…就更好了']])}`,
    qs: [['mc', '___，这个方案可行。(tổng kết)', '综上所述', ['首先', '其次', '有人认为'], 'Kết luận.'], ['mc', '出口___增长了10%。', '同比', ['同时', '一起', '比如'], 'Cùng kỳ.']],
    noi: [['值得注意的是，成本下降了。', 'Zhíde zhùyì de shì, chéngběn xiàjiàng le. – Đáng chú ý là chi phí giảm.'], ['总而言之，利大于弊。', 'Zǒng ér yán zhī, lì dà yú bì. – Tóm lại, lợi nhiều hơn hại.']],
    hoithoai: {
      ctx: 'Tổng ôn: em thuyết trình kết quả chuyển đổi số trước ban lãnh đạo.', vai: 'Lãnh đạo hỏi, em trình bày.', ai: '👔 行长',
      luot: [
        T(['先说结论。', 'Xiān shuō jiélùn.', 'Nói kết luận trước.'], ['总而言之，数字化转型利大于弊，成本同比下降了百分之十五。', 'Zǒng ér yán zhī, shùzìhuà zhuǎnxíng lì dà yú bì, chéngběn tóngbǐ xiàjiàngle bǎi fēn zhī shíwǔ.', 'Tóm lại, chuyển đổi số lợi nhiều hơn hại, chi phí giảm 15% so với cùng kỳ.', 'Kết luận + số liệu.'], ['首先，大家好。', 'Shǒuxiān, dàjiā hǎo.', 'Không trả lời.'], ['结论很多。', 'Jiélùn hěn duō.', 'Mơ hồ.']),
        T(['有人担心员工会被AI取代。', 'Yǒu rén dānxīn yuángōng huì bèi AI qǔdài.', 'Có người lo nhân viên bị AI thay thế.'], ['这个担心可以理解，但是AI取代的主要是重复性工作，我们会培训员工转型。', 'Zhège dānxīn kěyǐ lǐjiě, dànshì AI qǔdài de zhǔyào shì chóngfùxìng gōngzuò, wǒmen huì péixùn yuángōng zhuǎnxíng.', 'Lo ngại dễ hiểu, nhưng AI chủ yếu thay việc lặp lại, ta sẽ đào tạo nhân viên chuyển đổi.', 'Phản biện + giải pháp.'], ['会，很多人会失业。', 'Huì, hěn duō rén huì shīyè.', 'Gây hoảng.'], ['何必担心AI？', 'Hébì dānxīn AI?', 'Gạt đi.']),
        T(['下一步呢？', 'Xià yí bù ne?', 'Bước tiếp?'], ['首先完善风控，其次提升用户体验，最后扩大到所有网点。', 'Shǒuxiān wánshàn fēngkòng, qícì tíshēng yònghù tǐyàn, zuìhòu kuòdà dào suǒyǒu wǎngdiǎn.', 'Trước hết hoàn thiện rủi ro, kế đến nâng trải nghiệm, cuối cùng mở rộng toàn bộ điểm giao dịch.', 'Dàn ý.'], ['不知道下一步。', 'Bù zhīdào xià yí bù.', 'Thiếu kế hoạch.'], ['最后首先。', 'Zuìhòu shǒuxiān.', 'Vô nghĩa.'])
      ], ket: 'Em đã ôn trọn giai đoạn 2!'
    },
    tom: ['Ôn tuần 2', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn', phatam: 'Ôn ngữ điệu thuyết trình',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: học lại ngày yếu', 'Làm ⚡ Luyện nhanh', 'Thuyết trình 3 phút có số liệu, ghi âm lại']
  };

  window.PLT_ZH4 = { plan, stages, H: { w, L, T, tbl, tip, exs, sp, K }, days: [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14] };
})();

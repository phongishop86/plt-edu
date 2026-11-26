/* PLT-Edu · Tiếng Trung – Cấp 5 (HSK 7–9): lộ trình 30 ngày, Ngày 1–14 */
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
    'Văn ngôn trong văn hiện đại: 乃, 亦, 皆, 所, 者', 'Điển cố và thành ngữ có tích', 'Văn phong học thuật: 鉴于, 基于, 旨在, 就…而言', 'Liên từ cao cấp: 固然, 尚且, 即便, 况且', 'Phân biệt từ gần nghĩa', 'Bẫy từ Hán Việt khi dịch', 'Ôn tập tuần 1 và kiểm tra',
    'Dịch Trung – Việt: câu dài, định ngữ dài', 'Phiên dịch nối tiếp: kỹ thuật ghi chú', 'Phiên dịch hội nghị', 'Dịch văn bản tài chính – ngân hàng', 'Dịch văn bản công nghệ thông tin', 'Dịch văn bản pháp lý', 'Ôn tập tuần 2 và kiểm tra',
    'Viết luận học thuật: đặt vấn đề', 'Trích dẫn, số liệu, tài liệu tham khảo', 'Phát biểu tại hội nghị quốc tế', 'Lễ tân ngoại giao', 'Đàm phán cấp cao: hợp tác, đầu tư', 'Đọc và bình luận xã luận', 'Kiểm tra tổng hợp và mô phỏng',
    'Thơ Đường: đọc và cảm thụ', 'Tư tưởng cổ điển: Khổng Tử, Lão Tử', 'Ngôn ngữ mạng và tiếng lóng', 'Hài hước và chơi chữ', 'Ứng biến tình huống khó', 'Luyện viết và dịch dạng HSK 7–9', 'Nghe hiểu tốc độ tự nhiên', 'Mô phỏng phiên dịch tổng hợp', 'Kiểm tra cuối khoá HSK 7–9 và tự học suốt đời'
  ].map((ten, i) => ({ n: i + 1, ten }));
  const stages = [
    { ten: '📜 Giai đoạn 1 – Ngôn ngữ tinh tế', tu: 1, den: 7 }, { ten: '🔁 Giai đoạn 2 – Biên dịch và phiên dịch', tu: 8, den: 14 },
    { ten: '🌏 Giai đoạn 3 – Học thuật, ngoại giao, đàm phán', tu: 15, den: 21 }, { ten: '🎋 Giai đoạn 4 – Văn hoá sâu và luyện thi', tu: 22, den: 30 }
  ];

  const d1 = {
    n: 1, ten: plan[0].ten, kinds: K,
    muc: 'Nhận biết hư từ văn ngôn hay gặp trong văn bản trang trọng: 乃 (là), 亦 (cũng), 皆 (đều), 所 (cái mà), 者 (người/cái).',
    hoc: `${tbl(['Hư từ', 'Hiện đại', 'Ví dụ'], [['乃', '是', '失败乃成功之母。'], ['亦', '也', '此方案亦有不足。'], ['皆', '都', '人人皆知。'], ['所 + V', '…的 (cái được V)', '众所周知 – ai cũng biết'], ['者', '…的人', '读者、使用者、前者 / 后者']])}
      ${tip('🔑 Dùng trong văn bản, diễn văn, khẩu hiệu. Trong nói chuyện thường dùng từ hiện đại.')}`,
    vocab: [
      w('乃', 'nǎi', 'là (văn ngôn)', '', ['失败乃成功之母。', 'Shībài nǎi chénggōng zhī mǔ.', 'Thất bại là mẹ thành công.']),
      w('亦', 'yì', 'cũng (văn ngôn)', '', ['此法亦可。', 'Cǐ fǎ yì kě.', 'Cách này cũng được.']),
      w('皆', 'jiē', 'đều (văn ngôn)', '', ['人人皆知。', 'Rénrén jiē zhī.', 'Ai cũng biết.']),
      w('众所周知', 'zhòng suǒ zhōu zhī', 'ai cũng biết', '', ['众所周知，数据很重要。', 'Zhòng suǒ zhōu zhī, shùjù hěn zhòngyào.', 'Ai cũng biết dữ liệu rất quan trọng.']),
      w('前者', 'qiánzhě', 'cái trước', '', ['前者便宜，后者质量好。', 'Qiánzhě piányi, hòuzhě zhìliàng hǎo.', 'Cái trước rẻ, cái sau chất lượng tốt.']),
      w('后者', 'hòuzhě', 'cái sau', '', ['我选择后者。', 'Wǒ xuǎnzé hòuzhě.', 'Tôi chọn cái sau.']),
      w('此', 'cǐ', 'này (văn ngôn)', '', ['此事重大。', 'Cǐ shì zhòngdà.', 'Việc này hệ trọng.']),
      w('使用者', 'shǐyòngzhě', 'người dùng', '', ['使用者须知。', 'Shǐyòngzhě xūzhī.', 'Điều người dùng cần biết.']),
      w('须', 'xū', 'phải (văn viết)', '', ['须提前预约。', 'Xū tíqián yùyuē.', 'Phải hẹn trước.']),
      w('无须', 'wúxū', 'không cần', '', ['无须担心。', 'Wúxū dānxīn.', 'Không cần lo.'])
    ],
    qs: [
      ['mc', '人人皆知 = ?', '人人都知道', ['人人不知道', '人人想知道', '人人知道了吗'], '皆 = 都.'],
      ['mc', '失败___成功之母。', '乃', ['亦', '皆', '所'], '乃 = 是.'],
      ['mc', '前者便宜，___质量好。', '后者', ['前者', '读者', '使用者'], 'Cái sau.'],
      ['mc', '无须 nghĩa là?', 'không cần', ['phải', 'không có râu', 'chưa từng'], 'wúxū.'],
      ['hear', '众所周知，安全乃银行之本。', 'Ai cũng biết an toàn là gốc của ngân hàng.', ['An toàn không quan trọng.', 'Ngân hàng là gốc an toàn.', 'Ít ai biết.'], '乃 / 之.'],
      ['order', 'Sắp xếp: “Phải hẹn trước.”', ['须', '提前', '预约', '。'], '须提前预约。']
    ],
    noi: [['众所周知，数据很重要。', 'Zhòng suǒ zhōu zhī, shùjù hěn zhòngyào. – Ai cũng biết dữ liệu rất quan trọng.'], ['失败乃成功之母。', 'Shībài nǎi chénggōng zhī mǔ. – Thất bại là mẹ thành công.'], ['无须担心。', 'Wúxū dānxīn. – Không cần lo.']],
    hoithoai: {
      ctx: 'Em soạn khẩu hiệu văn phong trang trọng cho sự kiện kỷ niệm của công ty liên doanh.', vai: 'Trưởng ban hỏi, em đề xuất.', ai: '🏮 筹备组长',
      luot: [
        T(['口号要正式一点儿，你有什么建议？', 'Kǒuhào yào zhèngshì yìdiǎnr, nǐ yǒu shénme jiànyì?', 'Khẩu hiệu cần trang trọng, bạn đề xuất gì?'], ['"诚信乃立业之本"，怎么样？', '"Chéngxìn nǎi lì yè zhī běn", zěnmeyàng?', '"Thành tín là gốc lập nghiệp", thế nào?', '乃…之.'], ['"诚信很好"。', '"Chéngxìn hěn hǎo".', 'Quá đơn giản.'], ['"诚信皆所"。', '"Chéngxìn jiē suǒ".', 'Vô nghĩa.']),
        T(['不错。致辞开头呢？', 'Búcuò. Zhìcí kāitóu ne?', 'Hay. Mở đầu bài phát biểu?'], ['"众所周知，十年来我们皆以客户为中心。"', '"Zhòng suǒ zhōu zhī, shí nián lái wǒmen jiē yǐ kèhù wéi zhōngxīn."', '"Ai cũng biết, mười năm qua chúng ta đều lấy khách hàng làm trung tâm."', 'Văn ngôn tự nhiên.'], ['"大家好呀！"', '"Dàjiā hǎo ya!"', 'Quá thân mật.'], ['"前者后者。"', '"Qiánzhě hòuzhě."', 'Vô nghĩa.']),
        T(['会不会太文了？', 'Huì bu huì tài wén le?', 'Có quá văn vẻ không?'], ['口号可以文一点儿，正文还是用现代汉语，大家更容易懂。', 'Kǒuhào kěyǐ wén yìdiǎnr, zhèngwén háishi yòng xiàndài Hànyǔ, dàjiā gèng róngyì dǒng.', 'Khẩu hiệu văn vẻ được, phần chính vẫn dùng tiếng Hán hiện đại cho dễ hiểu.', 'Cân bằng.'], ['全部用文言文。', 'Quánbù yòng wényánwén.', 'Khó hiểu.'], ['无须正文。', 'Wúxū zhèngwén.', 'Sai.'])
      ], ket: 'Em đã dùng văn ngôn đúng chỗ, đúng liều lượng.'
    },
    tom: ['乃=是, 亦=也, 皆=都', '所 + V, 者', '此 / 须 / 无须'], nguphap: 'Hư từ văn ngôn', phatam: '乃 nǎi, 皆 jiē',
    loi: ['Dùng văn ngôn khi nói chuyện thân mật'], btvn: ['Tìm 10 câu có 乃/亦/皆 trong báo chí', 'Viết 3 khẩu hiệu trang trọng', 'Luyện 🎤 3 câu']
  };

  const d2 = {
    n: 2, ten: plan[1].ten, kinds: K,
    muc: 'Hiểu điển cố đằng sau thành ngữ và dùng đúng: 塞翁失马, 卧薪尝胆, 破釜沉舟, 守株待兔, 画龙点睛.',
    hoc: `${tbl(['Thành ngữ', 'Tích', 'Nghĩa dùng'], [['塞翁失马', 'Ông già biên giới mất ngựa, ngựa lại dẫn ngựa tốt về', 'hoạ phúc khó lường'], ['卧薪尝胆', 'Câu Tiễn nằm gai nếm mật', 'nhẫn nhục chờ thời'], ['破釜沉舟', 'Hạng Vũ đập nồi đắm thuyền', 'quyết tâm không lùi'], ['守株待兔', 'Ôm gốc cây đợi thỏ', 'thụ động trông chờ may mắn'], ['画龙点睛', 'Vẽ rồng điểm mắt', 'chi tiết đắt giá làm nổi bật']])}`,
    vocab: [
      w('塞翁失马', 'sài wēng shī mǎ', 'tái ông mất ngựa', '', ['塞翁失马，焉知非福。', 'Sài wēng shī mǎ, yān zhī fēi fú.', 'Tái ông mất ngựa, biết đâu là phúc.']),
      w('卧薪尝胆', 'wò xīn cháng dǎn', 'nằm gai nếm mật', '', ['他卧薪尝胆十年。', 'Tā wò xīn cháng dǎn shí nián.', 'Anh ấy nằm gai nếm mật mười năm.']),
      w('破釜沉舟', 'pò fǔ chén zhōu', 'đập nồi dìm thuyền', '', ['我们要有破釜沉舟的决心。', 'Wǒmen yào yǒu pò fǔ chén zhōu de juéxīn.', 'Ta phải quyết tâm không lùi bước.']),
      w('守株待兔', 'shǒu zhū dài tù', 'ôm cây đợi thỏ', '', ['不能守株待兔。', 'Bù néng shǒu zhū dài tù.', 'Không thể ôm cây đợi thỏ.']),
      w('画龙点睛', 'huà lóng diǎn jīng', 'vẽ rồng điểm mắt', '', ['这句话起到了画龙点睛的作用。', 'Zhè jù huà qǐ dàole huà lóng diǎn jīng de zuòyòng.', 'Câu này đóng vai trò điểm nhấn.']),
      w('决心', 'juéxīn', 'quyết tâm', '', ['下定决心。', 'Xià dìng juéxīn.', 'Hạ quyết tâm.']),
      w('焉知非福', 'yān zhī fēi fú', 'biết đâu chẳng là phúc', '', ['失业了，焉知非福？', 'Shīyè le, yān zhī fēi fú?', 'Mất việc, biết đâu lại là phúc?']),
      w('典故', 'diǎngù', 'điển cố', '', ['这个成语有个典故。', 'Zhège chéngyǔ yǒu ge diǎngù.', 'Thành ngữ này có điển cố.']),
      w('起到…作用', 'qǐ dào… zuòyòng', 'đóng vai trò', '', ['起到关键作用。', 'Qǐ dào guānjiàn zuòyòng.', 'Đóng vai trò then chốt.']),
      w('机遇', 'jīyù', 'thời cơ', '', ['抓住机遇。', 'Zhuāzhù jīyù.', 'Nắm bắt thời cơ.'])
    ],
    qs: [
      ['mc', 'Mất dự án nhưng lại gặp khách lớn hơn – thành ngữ?', '塞翁失马', ['守株待兔', '画龙点睛', '破釜沉舟'], 'Hoạ phúc khó lường.'],
      ['mc', 'Chỉ chờ khách tự đến, không chủ động – phê bình là?', '守株待兔', ['卧薪尝胆', '破釜沉舟', '塞翁失马'], 'Thụ động.'],
      ['mc', 'Câu kết hay làm nổi bật cả bài – ?', '画龙点睛', ['画蛇添足', '守株待兔', '一场空'], 'Điểm nhấn.'],
      ['hear', '这次我们要有破釜沉舟的决心。', 'Lần này ta phải có quyết tâm không lùi bước.', ['Ta nên rút lui.', 'Ta đợi may mắn.', 'Ta không cần quyết tâm.'], '破釜沉舟.'],
      ['hear', '他卧薪尝胆多年，终于东山再起。', 'Anh ấy nhẫn nhục nhiều năm, cuối cùng gượng dậy.', ['Anh ấy bỏ cuộc.', 'Anh ấy luôn thuận lợi.', 'Anh ấy ngủ trên củi.'], 'Nghĩa bóng.'],
      ['order', 'Sắp xếp: “Nắm bắt thời cơ.”', ['抓住', '机遇', '。'], '抓住机遇。']
    ],
    noi: [['塞翁失马，焉知非福。', 'Sài wēng shī mǎ, yān zhī fēi fú. – Tái ông mất ngựa, biết đâu là phúc.'], ['我们不能守株待兔。', 'Wǒmen bù néng shǒu zhū dài tù. – Ta không thể ôm cây đợi thỏ.'], ['这句话起到了画龙点睛的作用。', 'Zhè jù huà qǐ dàole huà lóng diǎn jīng de zuòyòng. – Câu này đóng vai trò điểm nhấn.']],
    hoithoai: {
      ctx: 'Một đồng nghiệp người Hoa vừa mất hợp đồng lớn, tâm trạng xuống.', vai: 'Bạn buồn, em động viên bằng điển cố.', ai: '😔 老林',
      luot: [
        T(['那个大客户没签，我太失望了。', 'Nàge dà kèhù méi qiān, wǒ tài shīwàng le.', 'Khách lớn không ký, tôi thất vọng quá.'], ['塞翁失马，焉知非福？也许有更好的机会在等你。', 'Sài wēng shī mǎ, yān zhī fēi fú? Yěxǔ yǒu gèng hǎo de jīhuì zài děng nǐ.', 'Tái ông mất ngựa, biết đâu là phúc? Có lẽ cơ hội tốt hơn đang đợi.', 'Điển cố an ủi.'], ['守株待兔吧。', 'Shǒu zhū dài tù ba.', 'Sai nghĩa.'], ['你画蛇添足了。', 'Nǐ huà shé tiān zú le.', 'Trách móc.']),
        T(['那我现在该做什么？', 'Nà wǒ xiànzài gāi zuò shénme?', 'Giờ tôi nên làm gì?'], ['不能守株待兔，我们一起分析原因，主动去找新客户。', 'Bù néng shǒu zhū dài tù, wǒmen yìqǐ fēnxī yuányīn, zhǔdòng qù zhǎo xīn kèhù.', 'Không thể ôm cây đợi thỏ, cùng phân tích nguyên nhân và chủ động tìm khách mới.', 'Đúng nghĩa.'], ['等他回来。', 'Děng tā huílai.', 'Thụ động.'], ['卧薪尝胆一百年。', 'Wò xīn cháng dǎn yì bǎi nián.', 'Phóng đại.']),
        T(['谢谢，我会加油的。', 'Xièxie, wǒ huì jiāyóu de.', 'Cảm ơn, tôi sẽ cố.'], ['这次我们破釜沉舟，下个季度一定能把业绩追回来！', 'Zhè cì wǒmen pò fǔ chén zhōu, xià ge jìdù yídìng néng bǎ yèjì zhuī huílai!', 'Lần này quyết không lùi, quý sau nhất định lấy lại doanh số!', 'Động viên mạnh.'], ['算了吧。', 'Suàn le ba.', 'Buông xuôi.'], ['画龙点睛。', 'Huà lóng diǎn jīng.', 'Lạc.'])
      ], ket: 'Em đã động viên bằng điển cố đúng ngữ cảnh.'
    },
    tom: ['塞翁失马 / 卧薪尝胆 / 破釜沉舟 / 守株待兔 / 画龙点睛'], nguphap: 'Thành ngữ điển cố', phatam: '塞 sài (không đọc sāi)',
    loi: ['Đọc 塞翁 thành sāi', 'Dùng sai sắc thái'], btvn: ['Kể lại 2 điển cố bằng tiếng Trung 100 chữ mỗi cái', 'Đặt câu với 5 thành ngữ', 'Luyện 🎤 3 câu']
  };

  const d3 = {
    n: 3, ten: plan[2].ten, kinds: K,
    muc: 'Văn phong học thuật, báo cáo: 鉴于 (xét thấy), 基于 (dựa trên), 旨在 (nhằm), 就…而言 (xét về), 有鉴于此.',
    hoc: `${tbl(['Cụm', 'Nghĩa', 'Ví dụ'], [['鉴于', 'xét thấy', '鉴于目前的情况，我们建议…'], ['基于', 'dựa trên', '基于以上数据，可以得出…'], ['旨在', 'nhằm', '本研究旨在探讨…'], ['就…而言', 'xét về…', '就成本而言，方案A更优。'], ['由此可见', 'từ đó có thể thấy', '由此可见，…']])}`,
    vocab: [
      w('鉴于', 'jiànyú', 'xét thấy', '', ['鉴于风险太大，我们放弃了。', 'Jiànyú fēngxiǎn tài dà, wǒmen fàngqì le.', 'Xét thấy rủi ro lớn, chúng tôi đã bỏ.']),
      w('基于', 'jīyú', 'dựa trên', '', ['基于数据分析。', 'Jīyú shùjù fēnxī.', 'Dựa trên phân tích dữ liệu.']),
      w('旨在', 'zhǐzài', 'nhằm', '', ['本项目旨在提高效率。', 'Běn xiàngmù zhǐzài tígāo xiàolǜ.', 'Dự án nhằm nâng hiệu suất.']),
      w('就…而言', 'jiù… ér yán', 'xét về', '', ['就价格而言，这个更便宜。', 'Jiù jiàgé ér yán, zhège gèng piányi.', 'Xét về giá, cái này rẻ hơn.']),
      w('由此可见', 'yóu cǐ kě jiàn', 'từ đó có thể thấy', '', ['由此可见，培训很有必要。', 'Yóu cǐ kě jiàn, péixùn hěn yǒu bìyào.', 'Từ đó thấy đào tạo rất cần thiết.']),
      w('探讨', 'tàntǎo', 'nghiên cứu thảo luận', '', ['探讨原因。', 'Tàntǎo yuányīn.', 'Thảo luận nguyên nhân.']),
      w('得出', 'déchū', 'rút ra', '', ['得出结论。', 'Déchū jiélùn.', 'Rút ra kết luận.']),
      w('优', 'yōu', 'ưu, tốt hơn', '', ['方案A更优。', 'Fāng\'àn A gèng yōu.', 'Phương án A ưu hơn.']),
      w('必要', 'bìyào', 'cần thiết', '', ['没有必要。', 'Méiyǒu bìyào.', 'Không cần thiết.']),
      w('研究', 'yánjiū', 'nghiên cứu', '', ['这项研究很重要。', 'Zhè xiàng yánjiū hěn zhòngyào.', 'Nghiên cứu này quan trọng.'])
    ],
    qs: [
      ['mc', '本研究___探讨AI对银行业的影响。', '旨在', ['鉴于', '基于', '由于'], 'Nhằm.'],
      ['mc', '___成本而言，方案A更优。', '就', ['对', '于', '以'], '就…而言.'],
      ['mc', '___以上数据，可以得出结论。', '基于', ['旨在', '就', '亦'], 'Dựa trên.'],
      ['mc', '由此可见 nghĩa là?', 'từ đó có thể thấy', ['do đó không thấy', 'nhìn từ đây', 'có thể gặp'], 'Kết luận.'],
      ['hear', '鉴于目前的市场情况，我们建议推迟上市。', 'Xét thấy tình hình thị trường hiện nay, đề nghị hoãn niêm yết.', ['Đề nghị niêm yết ngay.', 'Thị trường rất tốt.', 'Không có đề nghị.'], '鉴于.'],
      ['order', 'Sắp xếp: “Rút ra kết luận.”', ['得出', '结论', '。'], '得出结论。']
    ],
    noi: [['基于以上数据，我们得出以下结论。', 'Jīyú yǐshàng shùjù, wǒmen déchū yǐxià jiélùn. – Dựa trên số liệu trên, chúng tôi rút ra kết luận sau.'], ['就成本而言，方案A更优。', 'Jiù chéngběn ér yán, fāng\'àn A gèng yōu. – Xét về chi phí, phương án A ưu hơn.'], ['由此可见，培训很有必要。', 'Yóu cǐ kě jiàn, péixùn hěn yǒu bìyào. – Từ đó thấy đào tạo rất cần.']],
    hoithoai: {
      ctx: 'Em trình bày báo cáo đánh giá hai phương án hệ thống.', vai: 'Hội đồng hỏi, em trả lời văn phong học thuật.', ai: '🎓 评审委员',
      luot: [
        T(['这份报告的目的是什么？', 'Zhè fèn bàogào de mùdì shì shénme?', 'Mục đích báo cáo?'], ['本报告旨在比较两个系统方案的成本和风险。', 'Běn bàogào zhǐzài bǐjiào liǎng ge xìtǒng fāng\'àn de chéngběn hé fēngxiǎn.', 'Báo cáo nhằm so sánh chi phí và rủi ro hai phương án.', '旨在.'], ['我想写报告。', 'Wǒ xiǎng xiě bàogào.', 'Khẩu ngữ.'], ['鉴于报告。', 'Jiànyú bàogào.', 'Câu cụt.']),
        T(['哪个方案更好？', 'Nǎge fāng\'àn gèng hǎo?', 'Phương án nào tốt hơn?'], ['就成本而言，方案A更优；就安全而言，方案B更好。', 'Jiù chéngběn ér yán, fāng\'àn A gèng yōu; jiù ānquán ér yán, fāng\'àn B gèng hǎo.', 'Xét chi phí A ưu hơn; xét an toàn B tốt hơn.', '就…而言 so sánh đa chiều.'], ['都很好。', 'Dōu hěn hǎo.', 'Né tránh.'], ['A比B很优。', 'A bǐ B hěn yōu.', 'Sai ngữ pháp.']),
        T(['你的建议是？', 'Nǐ de jiànyì shì?', 'Đề xuất của bạn?'], ['鉴于银行业对安全的要求，我们建议采用方案B。', 'Jiànyú yínhángyè duì ānquán de yāoqiú, wǒmen jiànyì cǎiyòng fāng\'àn B.', 'Xét thấy yêu cầu an toàn của ngành ngân hàng, đề nghị dùng B.', '鉴于 + kết luận.'], ['随便哪个。', 'Suíbiàn nǎge.', 'Không có lập trường.'], ['基于我喜欢A。', 'Jīyú wǒ xǐhuan A.', 'Cảm tính.'])
      ], ket: 'Em đã trình bày bằng văn phong học thuật chuẩn.'
    },
    tom: ['鉴于 / 基于 / 旨在', '就…而言 / 由此可见'], nguphap: 'Văn phong học thuật', phatam: '鉴于 jiànyú, 旨在 zhǐzài',
    loi: ['Dùng khẩu ngữ trong báo cáo'], btvn: ['Viết tóm tắt (abstract) 150 chữ cho một dự án', 'Dùng đủ 5 cụm hôm nay', 'Luyện 🎤 3 câu']
  };

  const d4 = {
    n: 4, ten: plan[3].ten, kinds: K,
    muc: 'Liên từ cao cấp: 固然…但 (dĩ nhiên… nhưng), 尚且…何况 (còn… huống chi), 即便…也 (cho dù), 况且 (hơn nữa).',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ'], [['固然A，但B', '价格固然重要，但质量更重要。'], ['A尚且…，何况B', '专家尚且不懂，何况普通人？'], ['即便A，也B', '即便失败，也要尝试。'], ['…，况且…', '时间不够，况且预算也有限。']])}`,
    vocab: [
      w('固然', 'gùrán', 'dĩ nhiên, tất nhiên', '', ['速度固然重要，但准确更重要。', 'Sùdù gùrán zhòngyào, dàn zhǔnquè gèng zhòngyào.', 'Tốc độ dĩ nhiên quan trọng, nhưng chính xác quan trọng hơn.']),
      w('尚且', 'shàngqiě', 'còn, ngay cả', '', ['大人尚且做不到。', 'Dàrén shàngqiě zuò bu dào.', 'Người lớn còn không làm được.']),
      w('即便', 'jíbiàn', 'cho dù', '', ['即便下雨也要去。', 'Jíbiàn xià yǔ yě yào qù.', 'Dù mưa cũng phải đi.']),
      w('况且', 'kuàngqiě', 'huống hồ, hơn nữa', '', ['太远了，况且天也晚了。', 'Tài yuǎn le, kuàngqiě tiān yě wǎn le.', 'Xa quá, hơn nữa trời cũng muộn.']),
      w('尝试', 'chángshì', 'thử', '', ['值得尝试。', 'Zhíde chángshì.', 'Đáng thử.']),
      w('准确', 'zhǔnquè', 'chính xác', '', ['数据要准确。', 'Shùjù yào zhǔnquè.', 'Số liệu phải chính xác.']),
      w('有限', 'yǒuxiàn', 'có hạn', '', ['资源有限。', 'Zīyuán yǒuxiàn.', 'Nguồn lực có hạn.']),
      w('普通', 'pǔtōng', 'bình thường', '', ['普通用户。', 'Pǔtōng yònghù.', 'Người dùng thông thường.']),
      w('资源', 'zīyuán', 'nguồn lực', '', ['合理分配资源。', 'Hélǐ fēnpèi zīyuán.', 'Phân bổ nguồn lực hợp lý.']),
      w('权衡', 'quánhéng', 'cân nhắc', '', ['权衡利弊。', 'Quánhéng lìbì.', 'Cân nhắc lợi hại.'])
    ],
    qs: [
      ['mc', '价格___重要，但质量更重要。', '固然', ['尚且', '况且', '即便'], 'Dĩ nhiên… nhưng.'],
      ['mc', '专家尚且不懂，___普通人？', '何况', ['况且', '固然', '即便'], '尚且…何况.'],
      ['mc', '___失败，也要尝试。', '即便', ['固然', '尚且', '况且'], 'Cho dù.'],
      ['mc', '权衡 nghĩa là?', 'cân nhắc', ['quyền lực', 'cân bằng', 'cân nặng'], 'quánhéng.'],
      ['hear', '时间不够，况且预算也有限，这个项目先暂停吧。', 'Thời gian không đủ, hơn nữa ngân sách có hạn, tạm dừng dự án.', ['Đủ thời gian.', 'Ngân sách dồi dào.', 'Tiếp tục ngay.'], '况且.'],
      ['order', 'Sắp xếp: “Cân nhắc lợi hại.”', ['权衡', '利弊', '。'], '权衡利弊。']
    ],
    noi: [['速度固然重要，但准确更重要。', 'Sùdù gùrán zhòngyào, dàn zhǔnquè gèng zhòngyào. – Tốc độ dĩ nhiên quan trọng, nhưng chính xác quan trọng hơn.'], ['即便失败，也值得尝试。', 'Jíbiàn shībài, yě zhíde chángshì. – Dù thất bại cũng đáng thử.'], ['我们要权衡利弊。', 'Wǒmen yào quánhéng lìbì. – Ta phải cân nhắc lợi hại.']],
    hoithoai: {
      ctx: 'Ban điều hành bàn có nên tự phát triển phần mềm lõi hay mua.', vai: 'Giám đốc hỏi, em phân tích.', ai: '👔 CTO',
      luot: [
        T(['自己开发的好处是可控，你怎么看？', 'Zìjǐ kāifā de hǎochu shì kěkòng, nǐ zěnme kàn?', 'Tự phát triển lợi là kiểm soát được, bạn thấy sao?'], ['可控固然重要，但开发周期太长。', 'Kěkòng gùrán zhòngyào, dàn kāifā zhōuqī tài cháng.', 'Kiểm soát dĩ nhiên quan trọng, nhưng chu kỳ phát triển quá dài.', '固然…但.'], ['可控尚且很好。', 'Kěkòng shàngqiě hěn hǎo.', 'Sai cấu trúc.'], ['自己开发最好。', 'Zìjǐ kāifā zuì hǎo.', 'Thiếu phân tích.']),
        T(['大银行都自己开发。', 'Dà yínháng dōu zìjǐ kāifā.', 'Ngân hàng lớn đều tự làm.'], ['大银行尚且要花三年，何况我们只有十个工程师？', 'Dà yínháng shàngqiě yào huā sān nián, hékuàng wǒmen zhǐ yǒu shí ge gōngchéngshī?', 'Ngân hàng lớn còn mất 3 năm, huống chi ta chỉ 10 kỹ sư?', '尚且…何况.'], ['大银行很大。', 'Dà yínháng hěn dà.', 'Lặp ý.'], ['我们也行。', 'Wǒmen yě xíng.', 'Thiếu cơ sở.']),
        T(['那你的建议？', 'Nà nǐ de jiànyì?', 'Đề xuất của bạn?'], ['权衡利弊，建议先采购成熟产品，况且这样风险更低。', 'Quánhéng lìbì, jiànyì xiān cǎigòu chéngshú chǎnpǐn, kuàngqiě zhèyàng fēngxiǎn gèng dī.', 'Cân nhắc lợi hại, đề nghị mua sản phẩm trưởng thành trước, hơn nữa rủi ro thấp hơn.', '况且.'], ['即便。', 'Jíbiàn.', 'Câu cụt.'], ['不知道。', 'Bù zhīdào.', 'Né.'])
      ], ket: 'Em đã phân tích chiến lược bằng liên từ cao cấp.'
    },
    tom: ['固然…但', '尚且…何况', '即便…也', '况且'], nguphap: 'Liên từ cao cấp', phatam: '尚且 shàngqiě, 况且 kuàngqiě',
    loi: ['Nhầm 况且 và 何况'], btvn: ['Viết phân tích 200 chữ dùng cả 4 cấu trúc', 'Dịch 5 câu sang tiếng Việt', 'Luyện 🎤 3 câu']
  };

  const d5 = {
    n: 5, ten: plan[4].ten, kinds: K,
    muc: 'Phân biệt từ gần nghĩa hay nhầm: 发现/发明, 合适/适合, 了解/理解, 改进/改善/改正, 影响/作用.',
    hoc: `${tbl(['Cặp từ', 'Phân biệt', 'Ví dụ'], [['发现 / 发明', 'phát hiện cái có sẵn / phát minh cái mới', '发现问题；发明电话'], ['合适 / 适合', 'tính từ / động từ (+ tân ngữ)', '大小合适；适合你'], ['了解 / 理解', 'biết rõ thông tin / thấu hiểu, thông cảm', '了解情况；理解你的心情'], ['改进 / 改善 / 改正', 'cải tiến (phương pháp) / cải thiện (điều kiện) / sửa (lỗi)', '改进技术；改善生活；改正错误'], ['影响 / 作用', 'ảnh hưởng (trung tính/xấu) / tác dụng (tích cực)', '受到影响；起作用']])}`,
    vocab: [
      w('发明', 'fāmíng', 'phát minh', '', ['谁发明了纸？', 'Shéi fāmíngle zhǐ?', 'Ai phát minh ra giấy?']),
      w('适合', 'shìhé', 'hợp với (động từ)', '', ['这个工作适合你。', 'Zhège gōngzuò shìhé nǐ.', 'Việc này hợp với bạn.']),
      w('合适', 'héshì', 'phù hợp (tính từ)', '', ['大小很合适。', 'Dàxiǎo hěn héshì.', 'Kích cỡ vừa vặn.']),
      w('了解', 'liǎojiě', 'hiểu rõ, nắm', '', ['我想了解一下情况。', 'Wǒ xiǎng liǎojiě yíxià qíngkuàng.', 'Tôi muốn nắm tình hình.']),
      w('改进', 'gǎijìn', 'cải tiến', '', ['改进工作方法。', 'Gǎijìn gōngzuò fāngfǎ.', 'Cải tiến phương pháp làm việc.']),
      w('改正', 'gǎizhèng', 'sửa (lỗi)', '', ['改正错误。', 'Gǎizhèng cuòwù.', 'Sửa lỗi.']),
      w('作用', 'zuòyòng', 'tác dụng', '', ['起了很大作用。', 'Qǐle hěn dà zuòyòng.', 'Có tác dụng lớn.']),
      w('受到', 'shòudào', 'bị, được (chịu)', '', ['受到影响。', 'Shòudào yǐngxiǎng.', 'Bị ảnh hưởng.']),
      w('区别', 'qūbié', 'khác biệt, phân biệt', '', ['有什么区别？', 'Yǒu shénme qūbié?', 'Khác nhau gì?']),
      w('用法', 'yòngfǎ', 'cách dùng', '', ['这两个词的用法不同。', 'Zhè liǎng ge cí de yòngfǎ bùtóng.', 'Hai từ này cách dùng khác nhau.'])
    ],
    qs: [
      ['mc', '这个工作很___你。', '适合', ['合适', '适当了', '合适于'], '适合 + tân ngữ.'],
      ['mc', '我们___了一个系统漏洞。', '发现', ['发明', '发展', '发生'], 'Phát hiện cái có sẵn.'],
      ['mc', 'Sửa lỗi chính tả: ___错别字', '改正', ['改善', '改进', '改变了'], 'Sửa lỗi.'],
      ['mc', '我很___你的心情。(thông cảm)', '理解', ['了解', '明白了过', '知道'], 'Thấu hiểu.'],
      ['hear', '新政策对出口产生了很大影响。', 'Chính sách mới ảnh hưởng lớn đến xuất khẩu.', ['Không ảnh hưởng.', 'Chính sách bị huỷ.', 'Xuất khẩu tác động chính sách.'], '影响.'],
      ['order', 'Sắp xếp: “Hai từ này cách dùng khác nhau.”', ['这两个词', '的用法', '不', '同。'], '这两个词的用法不同。']
    ],
    noi: [['这个工作很适合你。', 'Zhège gōngzuò hěn shìhé nǐ. – Việc này rất hợp với bạn.'], ['我们要改进工作方法。', 'Wǒmen yào gǎijìn gōngzuò fāngfǎ. – Ta phải cải tiến phương pháp làm việc.'], ['我理解你的心情。', 'Wǒ lǐjiě nǐ de xīnqíng. – Tôi hiểu tâm trạng của bạn.']],
    hoithoai: {
      ctx: 'Em hiệu đính bản dịch tiếng Trung của đồng nghiệp.', vai: 'Đồng nghiệp hỏi, em chỉ lỗi dùng từ.', ai: '✍️ 译员',
      luot: [
        T(['我写"这个方案很合适我们公司"，对吗？', 'Wǒ xiě "zhège fāng\'àn hěn héshì wǒmen gōngsī", duì ma?', 'Tôi viết "phương án rất 合适 công ty ta", đúng không?'], ['应该用"适合"，因为后面有宾语：这个方案很适合我们公司。', 'Yīnggāi yòng "shìhé", yīnwèi hòumian yǒu bīnyǔ: zhège fāng\'àn hěn shìhé wǒmen gōngsī.', 'Nên dùng 适合 vì có tân ngữ phía sau.', 'Giải thích ngữ pháp.'], ['对，没问题。', 'Duì, méi wèntí.', 'Bỏ sót lỗi.'], ['用"合适于"。', 'Yòng "héshì yú".', 'Sai.']),
        T(['"改善错误"呢？', '"Gǎishàn cuòwù" ne?', 'Còn "改善错误"?'], ['应该是"改正错误"；"改善"用于条件、关系。', 'Yīnggāi shì "gǎizhèng cuòwù"; "gǎishàn" yòng yú tiáojiàn, guānxi.', 'Phải là 改正错误; 改善 dùng cho điều kiện, quan hệ.', 'Phân biệt.'], ['"改进错误"更好。', '"Gǎijìn cuòwù" gèng hǎo.', 'Vẫn sai.'], ['都可以。', 'Dōu kěyǐ.', 'Sai.']),
        T(['谢谢，你对这些区别很了解。', 'Xièxie, nǐ duì zhèxiē qūbié hěn liǎojiě.', 'Cảm ơn, bạn nắm rõ những khác biệt này.'], ['我也常查词典，多看例句就能掌握用法。', 'Wǒ yě cháng chá cídiǎn, duō kàn lìjù jiù néng zhǎngwò yòngfǎ.', 'Tôi cũng hay tra từ điển, xem nhiều ví dụ là nắm được cách dùng.', 'Khiêm tốn + mẹo.'], ['我是专家。', 'Wǒ shì zhuānjiā.', 'Kiêu.'], ['不用查。', 'Búyòng chá.', 'Sai.'])
      ], ket: 'Em đã hiệu đính chính xác cách dùng từ.'
    },
    tom: ['发现/发明', '合适/适合', '了解/理解', '改进/改善/改正', '影响/作用'], nguphap: 'Phân biệt từ gần nghĩa', phatam: '适合 shìhé, 合适 héshì',
    loi: ['合适 + tân ngữ', '改善错误'], btvn: ['Đặt câu cho mỗi từ trong 5 cặp', 'Tìm thêm 3 cặp hay nhầm', 'Luyện 🎤 3 câu']
  };

  const d6 = {
    n: 6, ten: plan[5].ten, kinds: K,
    muc: 'Tránh bẫy từ Hán Việt khi dịch: từ giống âm nhưng khác nghĩa, khác sắc thái, khác cách dùng.',
    hoc: `${tbl(['Tiếng Việt', 'Bẫy', 'Dịch đúng'], [['bác sĩ', '博士 = tiến sĩ', '医生'], ['đồng chí', '同志 (hiện nay có thể mang nghĩa khác)', '同事 / 先生 / tuỳ ngữ cảnh'], ['tiểu thư', '小姐 (dùng cẩn thận)', '女士'], ['phương tiện', '方便 = tiện lợi', '交通工具'], ['kinh phí (đơn giản)', '经费 đúng, nhưng 费用 tự nhiên hơn khi nói chi phí chung', '费用'], ['học sinh giỏi', '好学生 hơi khẩu ngữ', '优秀学生']])}
      ${tip('⚠️ Hán Việt là lợi thế lớn nhưng <b>đừng dịch từng chữ</b>. Luôn kiểm tra nghĩa hiện đại trong từ điển Trung – Trung.')}`,
    vocab: [
      w('博士', 'bóshì', 'tiến sĩ (không phải bác sĩ)', '', ['他是经济学博士。', 'Tā shì jīngjìxué bóshì.', 'Anh ấy là tiến sĩ kinh tế.']),
      w('医生', 'yīshēng', 'bác sĩ', '', ['我要看医生。', 'Wǒ yào kàn yīshēng.', 'Tôi cần gặp bác sĩ.']),
      w('女士', 'nǚshì', 'bà, quý cô (lịch sự)', '', ['各位女士、各位先生。', 'Gèwèi nǚshì, gèwèi xiānsheng.', 'Thưa quý bà, quý ông.']),
      w('交通工具', 'jiāotōng gōngjù', 'phương tiện giao thông', '', ['你用什么交通工具？', 'Nǐ yòng shénme jiāotōng gōngjù?', 'Bạn dùng phương tiện gì?']),
      w('方便', 'fāngbiàn', 'tiện lợi', '', ['这里交通很方便。', 'Zhèlǐ jiāotōng hěn fāngbiàn.', 'Giao thông ở đây tiện.']),
      w('费用', 'fèiyòng', 'chi phí', '', ['费用由我们承担。', 'Fèiyòng yóu wǒmen chéngdān.', 'Chi phí do chúng tôi chịu.']),
      w('优秀', 'yōuxiù', 'xuất sắc', '', ['优秀员工。', 'Yōuxiù yuángōng.', 'Nhân viên xuất sắc.']),
      w('汉越词', 'Hàn-Yuè cí', 'từ Hán Việt', '', ['越南语有很多汉越词。', 'Yuènányǔ yǒu hěn duō Hàn-Yuè cí.', 'Tiếng Việt có nhiều từ Hán Việt.']),
      w('直译', 'zhíyì', 'dịch sát chữ', '', ['不要直译。', 'Búyào zhíyì.', 'Đừng dịch sát chữ.']),
      w('意译', 'yìyì', 'dịch thoát ý', '', ['这里要意译。', 'Zhèlǐ yào yìyì.', 'Chỗ này phải dịch thoát ý.'])
    ],
    qs: [
      ['mc', '“Tôi cần gặp bác sĩ” dịch đúng?', '我要看医生。', ['我要看博士。', '我要看大夫士。', '我要看医博。'], '博士 = tiến sĩ.'],
      ['mc', '“Phương tiện giao thông” = ?', '交通工具', ['交通方便', '方便工具', '交通方法'], 'Bẫy 方便.'],
      ['mc', 'Gọi khán giả trang trọng?', '各位女士、各位先生', ['各位小姐、各位同志', '你们大家', '喂，大家'], 'Lịch sự.'],
      ['mc', '意译 nghĩa là?', 'dịch thoát ý', ['dịch sát chữ', 'dịch nói', 'dịch máy'], 'yìyì.'],
      ['hear', '这个句子不要直译，要按中文的习惯意译。', 'Câu này đừng dịch sát chữ, dịch thoát ý theo thói quen tiếng Trung.', ['Dịch sát từng chữ.', 'Không cần dịch.', 'Dịch sang tiếng Anh.'], '直译 / 意译.'],
      ['order', 'Sắp xếp: “Chi phí do chúng tôi chịu.”', ['费用', '由我们', '承担', '。'], '费用由我们承担。']
    ],
    noi: [['他是经济学博士，不是医生。', 'Tā shì jīngjìxué bóshì, bú shì yīshēng. – Anh ấy là tiến sĩ kinh tế, không phải bác sĩ.'], ['各位女士、各位先生，大家好！', 'Gèwèi nǚshì, gèwèi xiānsheng, dàjiā hǎo! – Thưa quý bà, quý ông!'], ['这里要意译。', 'Zhèlǐ yào yìyì. – Chỗ này phải dịch thoát ý.']],
    hoithoai: {
      ctx: 'Em kiểm tra bản dịch thư mời hội thảo Việt → Trung của thực tập sinh.', vai: 'Thực tập sinh hỏi, em sửa.', ai: '🧑‍🎓 实习生',
      luot: [
        T(['"Kính mời Bác sĩ Nguyễn Văn A" 我翻译成"敬请阮文A博士"，对吗？', '"…" wǒ fānyì chéng "Jìngqǐng Ruǎn Wén A bóshì", duì ma?', 'Tôi dịch "Bác sĩ" thành 博士 đúng không?'], ['不对，"bác sĩ"是"医生"；如果他是医学博士，可以写"医学博士"。', 'Bú duì, "bác sĩ" shì "yīshēng"; rúguǒ tā shì yīxué bóshì, kěyǐ xiě "yīxué bóshì".', 'Sai, "bác sĩ" là 医生; nếu ông ấy là tiến sĩ y khoa thì ghi 医学博士.', 'Bẫy Hán Việt.'], ['对，一样的。', 'Duì, yíyàng de.', 'Bỏ lỗi.'], ['写"大夫博士"。', 'Xiě "dàifu bóshì".', 'Sai.']),
        T(['"phương tiện đi lại" 呢？', '"Phương tiện đi lại" ne?', 'Còn "phương tiện đi lại"?'], ['译成"交通工具"，不是"方便"。', 'Yì chéng "jiāotōng gōngjù", bú shì "fāngbiàn".', 'Dịch là 交通工具, không phải 方便.', 'Bẫy.'], ['"交通方便"。', '"Jiāotōng fāngbiàn".', 'Sai nghĩa.'], ['直译就行。', 'Zhíyì jiù xíng.', 'Sai.']),
        T(['还有什么要注意的？', 'Hái yǒu shénme yào zhùyì de?', 'Còn gì cần chú ý?'], ['汉越词很有帮助，但一定要查现代汉语的意思，不要直译。', 'Hàn-Yuè cí hěn yǒu bāngzhù, dàn yídìng yào chá xiàndài Hànyǔ de yìsi, búyào zhíyì.', 'Từ Hán Việt rất có ích, nhưng phải tra nghĩa tiếng Hán hiện đại, đừng dịch sát chữ.', 'Nguyên tắc.'], ['都直译。', 'Dōu zhíyì.', 'Sai.'], ['不用查。', 'Búyòng chá.', 'Sai.'])
      ], ket: 'Em đã tránh bẫy Hán Việt trong bản dịch.'
    },
    tom: ['博士 ≠ bác sĩ', '方便 ≠ phương tiện', '直译 vs 意译'], nguphap: 'Kỹ năng dịch Việt – Trung', phatam: '博士 bóshì, 医生 yīshēng',
    loi: ['Dịch từng chữ Hán Việt'], btvn: ['Lập danh sách 10 bẫy Hán Việt em biết', 'Dịch 1 thư mời 100 chữ', 'Luyện 🎤 3 câu']
  };

  const d7 = {
    n: 7, ten: plan[6].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Ôn giai đoạn 1: văn ngôn, điển cố, văn phong học thuật, liên từ cao cấp, từ gần nghĩa, bẫy Hán Việt.',
    hoc: `<h4>Tóm tắt tuần 1</h4>${tbl(['Chủ điểm', 'Mẫu'], [['Văn ngôn', '乃、亦、皆、众所周知'], ['Điển cố', '塞翁失马、守株待兔、破釜沉舟'], ['Học thuật', '鉴于、基于、旨在、就…而言'], ['Liên từ cao cấp', '固然…但、尚且…何况、即便、况且'], ['Từ gần nghĩa', '适合/合适、了解/理解、改正/改善'], ['Bẫy Hán Việt', '博士≠bác sĩ、方便≠phương tiện']])}`,
    qs: [['mc', '本研究___探讨数字化的影响。', '旨在', ['鉴于', '固然', '况且'], 'Nhằm.'], ['mc', '“Bác sĩ” dịch là?', '医生', ['博士', '大师', '学士'], 'Bẫy.']],
    noi: [['鉴于以上原因，我们建议推迟。', 'Jiànyú yǐshàng yuányīn, wǒmen jiànyì tuīchí. – Xét các lý do trên, chúng tôi đề nghị hoãn.'], ['塞翁失马，焉知非福。', 'Sài wēng shī mǎ, yān zhī fēi fú. – Tái ông mất ngựa, biết đâu là phúc.']],
    hoithoai: {
      ctx: 'Tổng ôn: buổi bảo vệ đề án trước hội đồng.', vai: 'Hội đồng hỏi, em trả lời.', ai: '🎓 答辩委员',
      luot: [
        T(['你的研究目的是什么？', 'Nǐ de yánjiū mùdì shì shénme?', 'Mục đích nghiên cứu?'], ['本研究旨在分析AI对越南银行业的影响。', 'Běn yánjiū zhǐzài fēnxī AI duì Yuènán yínhángyè de yǐngxiǎng.', 'Nghiên cứu nhằm phân tích tác động AI tới ngành ngân hàng VN.', '旨在.'], ['我想研究。', 'Wǒ xiǎng yánjiū.', 'Khẩu ngữ.'], ['研究乃。', 'Yánjiū nǎi.', 'Câu cụt.']),
        T(['数据样本太小了吧？', 'Shùjù yàngběn tài xiǎo le ba?', 'Mẫu dữ liệu quá nhỏ chăng?'], ['样本固然有限，但基于这些数据仍能看出明显趋势。', 'Yàngběn gùrán yǒuxiàn, dàn jīyú zhèxiē shùjù réng néng kàn chū míngxiǎn qūshì.', 'Mẫu dĩ nhiên có hạn, nhưng dựa trên dữ liệu này vẫn thấy xu hướng rõ.', '固然…但 + 基于.'], ['不小。', 'Bù xiǎo.', 'Cãi.'], ['何况样本。', 'Hékuàng yàngběn.', 'Sai.']),
        T(['结论是什么？', 'Jiélùn shì shénme?', 'Kết luận?'], ['由此可见，AI固然带来挑战，但机遇大于挑战。', 'Yóu cǐ kě jiàn, AI gùrán dài lái tiǎozhàn, dàn jīyù dà yú tiǎozhàn.', 'Từ đó thấy, AI dĩ nhiên mang thách thức, nhưng thời cơ lớn hơn.', 'Kết luận học thuật.'], ['AI很好。', 'AI hěn hǎo.', 'Đơn giản.'], ['我不知道结论。', 'Wǒ bù zhīdào jiélùn.', 'Thiếu.'])
      ], ket: 'Em đã ôn trọn giai đoạn 1!'
    },
    tom: ['Ôn tuần 1', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn', phatam: 'Ôn đọc văn ngôn',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: học lại ngày yếu', 'Làm ⚡ Luyện nhanh', 'Viết đoạn học thuật 200 chữ']
  };

  const d8 = {
    n: 8, ten: plan[7].ten, kinds: K,
    muc: 'Dịch câu dài Trung → Việt: tách định ngữ dài, đổi trật tự, chuyển câu bị động, giữ văn phong.',
    hoc: `${tbl(['Kỹ thuật', 'Ví dụ'], [['Định ngữ dài → mệnh đề sau', '这是一家专门为中小企业提供数字化解决方案的公司。→ Đây là công ty chuyên cung cấp giải pháp số hoá cho doanh nghiệp vừa và nhỏ.'], ['Tách câu', 'Câu Trung 1 dấu chấm có thể thành 2 câu Việt'], ['被 → chủ động', '该方案已被董事会批准。→ Hội đồng quản trị đã phê duyệt phương án.'], ['Bỏ từ thừa', '进行了讨论 → đã thảo luận (bỏ 进行)']])}`,
    vocab: [
      w('专门', 'zhuānmén', 'chuyên', '', ['专门负责客服。', 'Zhuānmén fùzé kèfú.', 'Chuyên phụ trách CSKH.']),
      w('中小企业', 'zhōngxiǎo qǐyè', 'doanh nghiệp vừa và nhỏ', '', ['支持中小企业。', 'Zhīchí zhōngxiǎo qǐyè.', 'Hỗ trợ DN vừa và nhỏ.']),
      w('解决方案', 'jiějué fāng\'àn', 'giải pháp', '', ['提供解决方案。', 'Tígōng jiějué fāng\'àn.', 'Cung cấp giải pháp.']),
      w('董事会', 'dǒngshìhuì', 'hội đồng quản trị', '', ['董事会批准了。', 'Dǒngshìhuì pīzhǔn le.', 'HĐQT đã phê duyệt.']),
      w('批准', 'pīzhǔn', 'phê duyệt', '', ['申请被批准了。', 'Shēnqǐng bèi pīzhǔn le.', 'Đơn được duyệt.']),
      w('进行', 'jìnxíng', 'tiến hành', '', ['进行讨论。', 'Jìnxíng tǎolùn.', 'Tiến hành thảo luận.']),
      w('定语', 'dìngyǔ', 'định ngữ', '', ['这个定语太长了。', 'Zhège dìngyǔ tài cháng le.', 'Định ngữ này quá dài.']),
      w('拆分', 'chāifēn', 'tách ra', '', ['把长句拆分成短句。', 'Bǎ cháng jù chāifēn chéng duǎn jù.', 'Tách câu dài thành câu ngắn.']),
      w('通顺', 'tōngshùn', 'trôi chảy', '', ['译文要通顺。', 'Yìwén yào tōngshùn.', 'Bản dịch phải trôi chảy.']),
      w('译文', 'yìwén', 'bản dịch', '', ['请检查译文。', 'Qǐng jiǎnchá yìwén.', 'Vui lòng kiểm tra bản dịch.'])
    ],
    qs: [
      ['mc', '该方案已被董事会批准 → dịch tự nhiên?', 'Hội đồng quản trị đã phê duyệt phương án.', ['Phương án đã bị hội đồng quản trị phê duyệt.', 'Phương án phê duyệt hội đồng.', 'Hội đồng bị phê duyệt.'], 'Chuyển chủ động.'],
      ['mc', '双方进行了讨论 → ?', 'Hai bên đã thảo luận.', ['Hai bên tiến hành đã thảo luận.', 'Hai bên đi thảo luận.', 'Thảo luận tiến hành hai bên.'], 'Bỏ 进行.'],
      ['mc', '拆分 nghĩa là?', 'tách ra', ['phá huỷ', 'phân phát', 'gộp lại'], 'chāifēn.'],
      ['hear', '这是一家专门为中小企业提供数字化解决方案的公司。', 'Đây là công ty chuyên cung cấp giải pháp số hoá cho DN vừa và nhỏ.', ['Công ty lớn mua giải pháp.', 'DN nhỏ cung cấp cho công ty.', 'Công ty không chuyên.'], 'Định ngữ dài.'],
      ['hear', '译文不仅要准确，还要通顺。', 'Bản dịch không chỉ chính xác mà còn trôi chảy.', ['Chỉ cần chính xác.', 'Chỉ cần trôi chảy.', 'Không cần cả hai.'], '准确 + 通顺.'],
      ['order', 'Sắp xếp: “Tách câu dài thành câu ngắn.”', ['把长句', '拆分成', '短句', '。'], '把长句拆分成短句。']
    ],
    noi: [['译文要准确、通顺。', 'Yìwén yào zhǔnquè, tōngshùn. – Bản dịch phải chính xác, trôi chảy.'], ['把长句拆分成短句。', 'Bǎ cháng jù chāifēn chéng duǎn jù. – Tách câu dài thành câu ngắn.'], ['董事会已经批准了。', 'Dǒngshìhuì yǐjīng pīzhǔn le. – HĐQT đã phê duyệt.']],
    hoithoai: {
      ctx: 'Biên tập viên duyệt bản dịch báo cáo thường niên của em.', vai: 'Biên tập hỏi, em giải thích lựa chọn dịch.', ai: '📝 审校',
      luot: [
        T(['这句你为什么不保留"被"字句？', 'Zhè jù nǐ wèishénme bù bǎoliú "bèi" zì jù?', 'Câu này sao không giữ câu 被?'], ['越南语多用主动句，改成"Hội đồng quản trị đã phê duyệt"更自然。', 'Yuènányǔ duō yòng zhǔdòng jù, gǎi chéng "…" gèng zìrán.', 'Tiếng Việt chuộng câu chủ động, đổi vậy tự nhiên hơn.', 'Giải thích.'], ['我忘了。', 'Wǒ wàng le.', 'Thiếu chuyên nghiệp.'], ['被字句不重要。', 'Bèi zì jù bú zhòngyào.', 'Thiếu lý do.']),
        T(['这个长定语你怎么处理的？', 'Zhège cháng dìngyǔ nǐ zěnme chǔlǐ de?', 'Định ngữ dài này xử lý thế nào?'], ['我把定语放到名词后面，用"chuyên…"来连接。', 'Wǒ bǎ dìngyǔ fàng dào míngcí hòumian, yòng "chuyên…" lái liánjiē.', 'Tôi đặt định ngữ ra sau danh từ, nối bằng "chuyên…".', 'Kỹ thuật.'], ['直译。', 'Zhíyì.', 'Không phải kỹ thuật.'], ['删掉了。', 'Shān diào le.', 'Mất nội dung.']),
        T(['"进行了深入的讨论"呢？', '"Jìnxíngle shēnrù de tǎolùn" ne?', 'Còn "进行了深入的讨论"?'], ['译成"đã thảo luận sâu"，"进行"不用翻译。', 'Yì chéng "đã thảo luận sâu", "jìnxíng" búyòng fānyì.', 'Dịch là "đã thảo luận sâu", 进行 không cần dịch.', 'Bỏ từ thừa.'], ['"đã tiến hành cuộc thảo luận sâu sắc"。', '…', 'Rườm rà.'], ['不翻译。', 'Bù fānyì.', 'Mất ý.'])
      ], ket: 'Em đã giải thích các lựa chọn dịch thuyết phục.'
    },
    tom: ['Định ngữ dài → sau danh từ', 'Tách câu', '被 → chủ động', 'Bỏ 进行'], nguphap: 'Kỹ thuật dịch Trung – Việt', phatam: '批准 pīzhǔn',
    loi: ['Giữ nguyên trật tự Trung', 'Dịch thừa 进行'], btvn: ['Dịch 1 đoạn báo cáo thường niên 200 chữ', 'Tự soát theo 4 kỹ thuật', 'Luyện 🎤 3 câu']
  };

  const d9 = {
    n: 9, ten: plan[8].ten, kinds: K,
    muc: 'Phiên dịch nối tiếp: nghe đoạn 30–60 giây, ghi chú bằng ký hiệu, dịch lại đủ ý.',
    hoc: `${tbl(['Ký hiệu', 'Nghĩa'], [['↑ / ↓', 'tăng / giảm'], ['→', 'dẫn đến, chuyển sang'], ['∵ / ∴', 'vì / nên'], ['✓ / ✗', 'đồng ý / phản đối'], ['$', 'tiền, tài chính'], ['VN / CN', 'Việt Nam / Trung Quốc']])}
      ${tip('🎧 Ghi <b>ý chính + số + tên riêng</b>, theo chiều dọc, thụt lề cho ý phụ. Dịch ngay khi người nói dừng.')}`,
    vocab: [
      w('口译', 'kǒuyì', 'phiên dịch', '', ['我做口译。', 'Wǒ zuò kǒuyì.', 'Tôi làm phiên dịch.']),
      w('笔译', 'bǐyì', 'biên dịch', '', ['笔译要求准确。', 'Bǐyì yāoqiú zhǔnquè.', 'Biên dịch yêu cầu chính xác.']),
      w('交替传译', 'jiāotì chuányì', 'dịch nối tiếp', '', ['会议用交替传译。', 'Huìyì yòng jiāotì chuányì.', 'Cuộc họp dùng dịch nối tiếp.']),
      w('符号', 'fúhào', 'ký hiệu', '', ['用符号记笔记。', 'Yòng fúhào jì bǐjì.', 'Ghi chú bằng ký hiệu.']),
      w('记忆', 'jìyì', 'trí nhớ', '', ['短期记忆。', 'Duǎnqī jìyì.', 'Trí nhớ ngắn hạn.']),
      w('停顿', 'tíngdùn', 'ngừng', '', ['请在这里停顿。', 'Qǐng zài zhèlǐ tíngdùn.', 'Xin ngừng ở đây.']),
      w('发言人', 'fāyánrén', 'người phát biểu', '', ['发言人说得很快。', 'Fāyánrén shuō de hěn kuài.', 'Người phát biểu nói nhanh.']),
      w('遗漏', 'yílòu', 'bỏ sót', '', ['不能遗漏数字。', 'Bù néng yílòu shùzì.', 'Không được bỏ sót số.']),
      w('专有名词', 'zhuānyǒu míngcí', 'danh từ riêng', '', ['先准备专有名词。', 'Xiān zhǔnbèi zhuānyǒu míngcí.', 'Chuẩn bị trước danh từ riêng.']),
      w('译员', 'yìyuán', 'phiên dịch viên', '', ['译员要提前准备。', 'Yìyuán yào tíqián zhǔnbèi.', 'Phiên dịch viên phải chuẩn bị trước.'])
    ],
    qs: [
      ['mc', 'Ghi chú phiên dịch nên ghi gì?', 'Ý chính, số liệu, tên riêng', ['Mọi chữ', 'Chỉ động từ', 'Không ghi gì'], 'Trọng tâm.'],
      ['mc', '↑ 15% ghi chú cho?', '增长百分之十五', ['下降百分之十五', '增长十五倍', '百分之五十'], 'Ký hiệu.'],
      ['mc', '交替传译 là?', 'dịch nối tiếp', ['dịch cabin', 'biên dịch', 'dịch thì thầm'], 'Consecutive.'],
      ['hear', '今年第三季度，越南对华出口增长了百分之十二，主要是电子产品。', 'Quý 3 năm nay xuất khẩu VN sang TQ tăng 12%, chủ yếu hàng điện tử.', ['Nhập khẩu tăng 12%.', 'Quý 2 tăng 20%.', 'Chủ yếu nông sản.'], 'Ghi: Q3 VN→CN ↑12% điện tử.'],
      ['hear', '译员不能遗漏任何数字和专有名词。', 'Phiên dịch không được bỏ sót số và danh từ riêng.', ['Có thể bỏ số.', 'Tên riêng không quan trọng.', 'Chỉ dịch ý chính.'], '遗漏.'],
      ['order', 'Sắp xếp: “Ghi chú bằng ký hiệu.”', ['用', '符号', '记', '笔记。'], '用符号记笔记。']
    ],
    noi: [['请您说完一段后停顿一下。', 'Qǐng nín shuō wán yí duàn hòu tíngdùn yíxià. – Xin ông nói xong một đoạn thì ngừng.'], ['我是今天的译员。', 'Wǒ shì jīntiān de yìyuán. – Tôi là phiên dịch hôm nay.'], ['不能遗漏数字。', 'Bù néng yílòu shùzì. – Không được bỏ sót số.']],
    hoithoai: {
      ctx: 'Trước buổi họp, em trao đổi với diễn giả Trung Quốc để phiên dịch tốt.', vai: 'Diễn giả hỏi, em chuẩn bị.', ai: '🎤 演讲嘉宾',
      luot: [
        T(['你需要我注意什么吗？', 'Nǐ xūyào wǒ zhùyì shénme ma?', 'Bạn cần tôi lưu ý gì không?'], ['麻烦您每说两三句停顿一下，方便我翻译。', 'Máfan nín měi shuō liǎng sān jù tíngdùn yíxià, fāngbiàn wǒ fānyì.', 'Phiền ông cứ 2–3 câu dừng một chút để tôi dịch.', 'Yêu cầu chuyên nghiệp.'], ['您说快一点儿。', 'Nín shuō kuài yìdiǎnr.', 'Phản tác dụng.'], ['没什么。', 'Méi shénme.', 'Bỏ lỡ cơ hội chuẩn bị.']),
        T(['好的。我的PPT里有很多专有名词。', 'Hǎo de. Wǒ de PPT li yǒu hěn duō zhuānyǒu míngcí.', 'Được. PPT tôi có nhiều danh từ riêng.'], ['能不能提前把PPT发给我？我先准备一下术语。', 'Néng bu néng tíqián bǎ PPT fā gěi wǒ? Wǒ xiān zhǔnbèi yíxià shùyǔ.', 'Có thể gửi trước PPT không? Tôi chuẩn bị thuật ngữ.', 'Chuẩn bị.'], ['我现场翻译就行。', 'Wǒ xiànchǎng fānyì jiù xíng.', 'Chủ quan.'], ['专有名词不用翻译。', 'Zhuānyǒu míngcí búyòng fānyì.', 'Sai.']),
        T(['好，我马上发给你。还有吗？', 'Hǎo, wǒ mǎshàng fā gěi nǐ. Hái yǒu ma?', 'Được, gửi ngay. Còn gì nữa không?'], ['如果有数字，请说慢一点儿，我会再确认一遍。', 'Rúguǒ yǒu shùzì, qǐng shuō màn yìdiǎnr, wǒ huì zài quèrèn yí biàn.', 'Nếu có số liệu xin nói chậm, tôi sẽ xác nhận lại.', 'Chính xác số.'], ['没有了，随便。', 'Méiyǒu le, suíbiàn.', 'Thiếu chuyên nghiệp.'], ['数字我不翻。', 'Shùzì wǒ bù fān.', 'Sai.'])
      ], ket: 'Em đã chuẩn bị phiên dịch chuyên nghiệp.'
    },
    tom: ['Ký hiệu ghi chú', 'Chuẩn bị thuật ngữ trước', 'Không bỏ sót số và tên riêng'], nguphap: 'Kỹ năng phiên dịch', phatam: '传译 chuányì',
    loi: ['Ghi quá nhiều chữ', 'Không chuẩn bị'], btvn: ['Nghe 5 đoạn tin 30 giây, ghi ký hiệu rồi nói lại bằng tiếng Việt', 'Tự lập bộ 20 ký hiệu riêng', 'Luyện 🎤 3 câu']
  };

  const d10 = {
    n: 10, ten: plan[9].ten, kinds: K,
    muc: 'Phiên dịch hội nghị: lời chào nghi thức, phát biểu khai mạc, chuyển lời, xử lý khi nghe không rõ.',
    hoc: `${tbl(['Tình huống', 'Câu mẫu'], [['Chào nghi thức', '尊敬的各位领导、各位来宾，女士们、先生们：'], ['Khai mạc', '我谨代表…，向各位表示热烈的欢迎。'], ['Cảm ơn', '衷心感谢各位的支持。'], ['Nghe không rõ', '对不起，能否请您重复一下最后一句？'], ['Bế mạc', '预祝本次会议圆满成功！']])}`,
    vocab: [
      w('来宾', 'láibīn', 'quý khách, khách mời', '', ['各位来宾。', 'Gèwèi láibīn.', 'Kính thưa quý khách.']),
      w('谨', 'jǐn', 'xin trân trọng', '', ['我谨代表公司…', 'Wǒ jǐn dàibiǎo gōngsī…', 'Tôi xin thay mặt công ty…']),
      w('热烈', 'rèliè', 'nhiệt liệt', '', ['热烈欢迎。', 'Rèliè huānyíng.', 'Nhiệt liệt chào mừng.']),
      w('衷心', 'zhōngxīn', 'chân thành', '', ['衷心感谢。', 'Zhōngxīn gǎnxiè.', 'Chân thành cảm ơn.']),
      w('预祝', 'yùzhù', 'chúc trước', '', ['预祝会议成功。', 'Yùzhù huìyì chénggōng.', 'Chúc hội nghị thành công.']),
      w('圆满', 'yuánmǎn', 'tốt đẹp, viên mãn', '', ['圆满成功。', 'Yuánmǎn chénggōng.', 'Thành công tốt đẹp.']),
      w('重复', 'chóngfù', 'nhắc lại', '', ['请重复一下。', 'Qǐng chóngfù yíxià.', 'Xin nhắc lại.']),
      w('开幕', 'kāimù', 'khai mạc', '', ['开幕式。', 'Kāimùshì.', 'Lễ khai mạc.']),
      w('闭幕', 'bìmù', 'bế mạc', '', ['闭幕致辞。', 'Bìmù zhìcí.', 'Phát biểu bế mạc.']),
      w('致辞', 'zhìcí', 'phát biểu (nghi lễ)', '', ['请王总致辞。', 'Qǐng Wáng zǒng zhìcí.', 'Mời ông Vương phát biểu.'])
    ],
    qs: [
      ['mc', '“Nhiệt liệt chào mừng” = ?', '热烈欢迎', ['热情欢迎了', '热烈感谢', '衷心欢迎了'], 'Cụm cố định.'],
      ['mc', 'Bế mạc chúc hội nghị thành công?', '预祝本次会议圆满成功！', ['会议结束了，拜拜。', '我们走吧。', '谢谢，再见了过。'], 'Nghi thức.'],
      ['mc', 'Nghe không rõ, phiên dịch nói?', '对不起，能否请您重复一下最后一句？', ['你说什么？', '再说！', '我不翻了。'], 'Lịch sự.'],
      ['hear', '我谨代表越南代表团，向各位表示热烈的欢迎。', 'Tôi xin thay mặt đoàn Việt Nam nhiệt liệt chào mừng quý vị.', ['Thay mặt đoàn TQ.', 'Cảm ơn quý vị.', 'Tạm biệt quý vị.'], '谨代表.'],
      ['hear', '衷心感谢各位来宾在百忙之中出席今天的活动。', 'Chân thành cảm ơn quý khách đã dành thời gian dự sự kiện hôm nay.', ['Xin lỗi quý khách.', 'Quý khách rất rảnh.', 'Sự kiện bị huỷ.'], '百忙之中.'],
      ['order', 'Sắp xếp: “Mời ông Vương phát biểu.”', ['请', '王总', '致辞', '。'], '请王总致辞。']
    ],
    noi: [['尊敬的各位来宾，女士们、先生们：', 'Zūnjìng de gèwèi láibīn, nǚshìmen, xiānshengmen: – Kính thưa quý vị đại biểu, thưa quý bà, quý ông:'], ['衷心感谢各位的支持。', 'Zhōngxīn gǎnxiè gèwèi de zhīchí. – Chân thành cảm ơn sự ủng hộ của quý vị.'], ['预祝本次会议圆满成功！', 'Yùzhù běn cì huìyì yuánmǎn chénggōng! – Chúc hội nghị thành công tốt đẹp!']],
    hoithoai: {
      ctx: 'Em phiên dịch lễ khai mạc hội thảo hợp tác ngân hàng Việt – Trung.', vai: 'MC Trung nói, em dịch/đáp.', ai: '🎙️ 主持人',
      luot: [
        T(['请越方代表致辞。请你先帮我翻译这句。', 'Qǐng Yuè fāng dàibiǎo zhìcí. Qǐng nǐ xiān bāng wǒ fānyì zhè jù.', 'Mời đại diện phía Việt phát biểu. Bạn dịch câu này trước.'], ['"Xin trân trọng kính mời đại diện phía Việt Nam phát biểu."', '"…"', 'Dịch trang trọng.', 'Đúng văn phong.'], ['"Mời ông Việt nói."', '"…"', 'Thiếu trang trọng.'], ['"Việt Nam phát biểu đi."', '"…"', 'Thô.']),
        T(['（越方代表讲完后）请把最后一句翻成中文。', '(Yuè fāng dàibiǎo jiǎng wán hòu) Qǐng bǎ zuìhòu yí jù fān chéng Zhōngwén.', 'Dịch câu cuối sang tiếng Trung.'], ['"预祝本次研讨会圆满成功！"', '"Yùzhù běn cì yántǎohuì yuánmǎn chénggōng!"', 'Chúc hội thảo thành công tốt đẹp!', 'Cụm chuẩn.'], ['"会议成功了吧。"', '"Huìyì chénggōng le ba."', 'Sai sắc thái.'], ['"拜拜。"', '"Bàibai."', 'Sai.']),
        T(['刚才有一句你没听清吗？', 'Gāngcái yǒu yí jù nǐ méi tīng qīng ma?', 'Vừa rồi có câu bạn nghe không rõ à?'], ['是的，我已经礼貌地请发言人重复了，确保数字准确。', 'Shì de, wǒ yǐjīng lǐmào de qǐng fāyánrén chóngfù le, quèbǎo shùzì zhǔnquè.', 'Vâng, tôi đã lịch sự xin người phát biểu nhắc lại để đảm bảo số chính xác.', 'Chuyên nghiệp.'], ['我猜的。', 'Wǒ cāi de.', 'Nguy hiểm.'], ['跳过了。', 'Tiàoguò le.', 'Bỏ sót.'])
      ], ket: 'Em đã phiên dịch nghi lễ hội nghị đúng văn phong.'
    },
    tom: ['尊敬的各位来宾', '谨代表 / 热烈欢迎 / 衷心感谢', '预祝…圆满成功'], nguphap: 'Ngôn ngữ nghi lễ', phatam: '衷心 zhōngxīn, 圆满 yuánmǎn',
    loi: ['Dịch nghi lễ quá khẩu ngữ', 'Đoán số khi nghe không rõ'], btvn: ['Viết lời khai mạc 150 chữ song ngữ', 'Tự dịch 1 bài phát biểu khai mạc trên mạng', 'Luyện 🎤 3 câu']
  };

  const d11 = {
    n: 11, ten: plan[10].ten, kinds: K,
    muc: 'Dịch văn bản tài chính – ngân hàng: báo cáo tài chính, chỉ số, tín dụng, nợ xấu, an toàn vốn.',
    hoc: `${tbl(['Tiếng Trung', 'Tiếng Việt'], [['资产负债表', 'bảng cân đối kế toán'], ['净利润', 'lợi nhuận ròng'], ['不良贷款率', 'tỷ lệ nợ xấu'], ['资本充足率', 'tỷ lệ an toàn vốn (CAR)'], ['信贷', 'tín dụng'], ['流动性', 'thanh khoản']])}
      ${tip('⚖️ Thuật ngữ tài chính phải <b>thống nhất</b> trong cả văn bản; lập bảng thuật ngữ (glossary) trước khi dịch.')}`,
    vocab: [
      w('资产', 'zīchǎn', 'tài sản', '', ['总资产增长了。', 'Zǒng zīchǎn zēngzhǎng le.', 'Tổng tài sản tăng.']),
      w('负债', 'fùzhài', 'nợ phải trả', '', ['负债率下降。', 'Fùzhàilǜ xiàjiàng.', 'Tỷ lệ nợ giảm.']),
      w('净利润', 'jìnglìrùn', 'lợi nhuận ròng', '', ['净利润为五亿元。', 'Jìnglìrùn wéi wǔ yì yuán.', 'Lợi nhuận ròng 500 triệu tệ.']),
      w('不良贷款', 'bùliáng dàikuǎn', 'nợ xấu', '', ['不良贷款率百分之一点五。', 'Bùliáng dàikuǎn lǜ bǎi fēn zhī yī diǎn wǔ.', 'Tỷ lệ nợ xấu 1,5%.']),
      w('资本充足率', 'zīběn chōngzúlǜ', 'tỷ lệ an toàn vốn', '', ['资本充足率达标。', 'Zīběn chōngzúlǜ dábiāo.', 'Tỷ lệ an toàn vốn đạt chuẩn.']),
      w('信贷', 'xìndài', 'tín dụng', '', ['信贷规模扩大。', 'Xìndài guīmó kuòdà.', 'Quy mô tín dụng mở rộng.']),
      w('流动性', 'liúdòngxìng', 'thanh khoản', '', ['流动性充足。', 'Liúdòngxìng chōngzú.', 'Thanh khoản dồi dào.']),
      w('术语', 'shùyǔ', 'thuật ngữ', '', ['统一术语。', 'Tǒngyī shùyǔ.', 'Thống nhất thuật ngữ.']),
      w('达标', 'dábiāo', 'đạt chuẩn', '', ['各项指标都达标。', 'Gè xiàng zhǐbiāo dōu dábiāo.', 'Các chỉ tiêu đều đạt chuẩn.']),
      w('指标', 'zhǐbiāo', 'chỉ tiêu, chỉ số', '', ['关键指标。', 'Guānjiàn zhǐbiāo.', 'Chỉ số then chốt.'])
    ],
    qs: [
      ['mc', '不良贷款率 = ?', 'tỷ lệ nợ xấu', ['lãi suất cho vay', 'tỷ lệ cho vay', 'nợ tốt'], 'NPL ratio.'],
      ['mc', '资本充足率 = ?', 'tỷ lệ an toàn vốn', ['vốn điều lệ', 'tỷ lệ lợi nhuận', 'thanh khoản'], 'CAR.'],
      ['mc', '流动性 = ?', 'thanh khoản', ['lưu động nhân sự', 'dòng chảy', 'tính di động'], 'Liquidity.'],
      ['hear', '本年度净利润同比增长百分之十八，不良贷款率降至百分之一点二。', 'Lợi nhuận ròng năm nay tăng 18%, nợ xấu giảm còn 1,2%.', ['Lợi nhuận giảm 18%.', 'Nợ xấu tăng 1,2%.', 'Nợ xấu 12%.'], 'Số + chiều.'],
      ['hear', '各项监管指标均已达标。', 'Các chỉ tiêu giám sát đều đạt chuẩn.', ['Chưa đạt chuẩn.', 'Một chỉ tiêu đạt.', 'Không có chỉ tiêu.'], '均 = 都.'],
      ['order', 'Sắp xếp: “Thống nhất thuật ngữ.”', ['统一', '术语', '。'], '统一术语。']
    ],
    noi: [['不良贷款率降至百分之一点二。', 'Bùliáng dàikuǎn lǜ jiàng zhì bǎi fēn zhī yī diǎn èr. – Tỷ lệ nợ xấu giảm còn 1,2%.'], ['资本充足率达标。', 'Zīběn chōngzúlǜ dábiāo. – Tỷ lệ an toàn vốn đạt chuẩn.'], ['我们要统一术语。', 'Wǒmen yào tǒngyī shùyǔ. – Ta phải thống nhất thuật ngữ.']],
    hoithoai: {
      ctx: 'Em dịch báo cáo tài chính cho đối tác Trung Quốc và trả lời câu hỏi thuật ngữ.', vai: 'Chuyên viên phân tích hỏi, em giải thích.', ai: '📈 分析师',
      luot: [
        T(['"Tỷ lệ an toàn vốn" 你怎么翻译？', '"…" nǐ zěnme fānyì?', '"Tỷ lệ an toàn vốn" bạn dịch thế nào?'], ['译为"资本充足率"，这是监管通用术语。', 'Yì wéi "zīběn chōngzúlǜ", zhè shì jiānguǎn tōngyòng shùyǔ.', 'Dịch là 资本充足率, thuật ngữ giám sát thông dụng.', 'Chuẩn.'], ['"资本安全率"。', '"Zīběn ānquán lǜ".', 'Dịch từng chữ, không chuẩn.'], ['不用翻译。', 'Búyòng fānyì.', 'Sai.']),
        T(['不良贷款率是多少？', 'Bùliáng dàikuǎn lǜ shì duōshao?', 'Tỷ lệ nợ xấu bao nhiêu?'], ['报告显示为百分之一点五，比去年下降了零点三个百分点。', 'Bàogào xiǎnshì wéi bǎi fēn zhī yī diǎn wǔ, bǐ qùnián xiàjiàngle líng diǎn sān ge bǎifēndiǎn.', 'Báo cáo cho thấy 1,5%, giảm 0,3 điểm phần trăm so với năm ngoái. (số minh hoạ)', 'Phân biệt % và điểm %.'], ['下降了百分之零点三。', 'Xiàjiàngle bǎi fēn zhī líng diǎn sān.', 'Nhầm điểm % với %.'], ['很低。', 'Hěn dī.', 'Thiếu số.']),
        T(['整份报告的术语一致吗？', 'Zhěng fèn bàogào de shùyǔ yízhì ma?', 'Thuật ngữ toàn báo cáo nhất quán không?'], ['我先做了术语表，全文统一，最后也让财务部审核了。', 'Wǒ xiān zuòle shùyǔ biǎo, quánwén tǒngyī, zuìhòu yě ràng cáiwùbù shěnhé le.', 'Tôi làm bảng thuật ngữ trước, thống nhất toàn văn, cuối cùng nhờ phòng tài chính duyệt.', 'Quy trình.'], ['差不多吧。', 'Chàbuduō ba.', 'Thiếu chặt chẽ.'], ['不知道。', 'Bù zhīdào.', 'Thiếu.'])
      ], ket: 'Em đã dịch và giải thích thuật ngữ tài chính chính xác.'
    },
    tom: ['资产负债 / 净利润 / 不良贷款率 / 资本充足率 / 流动性', 'Điểm phần trăm (百分点) ≠ %'], nguphap: 'Thuật ngữ tài chính', phatam: '充足率 chōngzúlǜ',
    loi: ['Dịch từng chữ thuật ngữ', 'Nhầm 百分点 và 百分之'], btvn: ['Lập bảng 20 thuật ngữ ngân hàng Việt – Trung', 'Dịch 1 đoạn báo cáo thường niên ngân hàng', 'Luyện 🎤 3 câu']
  };

  const d12 = {
    n: 12, ten: plan[11].ten, kinds: K,
    muc: 'Dịch văn bản CNTT: đặc tả hệ thống, hướng dẫn sử dụng, thông báo bảo mật, thuật ngữ đám mây.',
    hoc: `${tbl(['Tiếng Trung', 'Tiếng Việt'], [['云计算', 'điện toán đám mây'], ['服务器', 'máy chủ'], ['数据库', 'cơ sở dữ liệu'], ['接口 (API)', 'giao diện lập trình'], ['漏洞', 'lỗ hổng bảo mật'], ['补丁', 'bản vá'], ['部署', 'triển khai']])}
      ${tip('🔑 Nhiều thuật ngữ IT người Việt giữ tiếng Anh (API, server, cloud). Hãy theo quy ước của khách hàng.')}`,
    vocab: [
      w('云计算', 'yún jìsuàn', 'điện toán đám mây', '', ['迁移到云计算平台。', 'Qiānyí dào yún jìsuàn píngtái.', 'Chuyển lên nền tảng đám mây.']),
      w('服务器', 'fúwùqì', 'máy chủ', '', ['服务器宕机了。', 'Fúwùqì dàngjī le.', 'Máy chủ sập rồi.']),
      w('数据库', 'shùjùkù', 'cơ sở dữ liệu', '', ['备份数据库。', 'Bèifèn shùjùkù.', 'Sao lưu CSDL.']),
      w('接口', 'jiēkǒu', 'giao diện (API)', '', ['调用接口。', 'Diàoyòng jiēkǒu.', 'Gọi API.']),
      w('补丁', 'bǔding', 'bản vá', '', ['安装安全补丁。', 'Ānzhuāng ānquán bǔding.', 'Cài bản vá bảo mật.']),
      w('部署', 'bùshǔ', 'triển khai', '', ['系统已部署上线。', 'Xìtǒng yǐ bùshǔ shàngxiàn.', 'Hệ thống đã triển khai chạy thật.']),
      w('上线', 'shàngxiàn', 'đưa vào vận hành', '', ['新功能下周上线。', 'Xīn gōngnéng xià zhōu shàngxiàn.', 'Tính năng mới chạy tuần sau.']),
      w('宕机', 'dàngjī', 'sập máy', '', ['避免宕机。', 'Bìmiǎn dàngjī.', 'Tránh sập hệ thống.']),
      w('权限', 'quánxiàn', 'quyền truy cập', '', ['分配用户权限。', 'Fēnpèi yònghù quánxiàn.', 'Phân quyền người dùng.']),
      w('加密', 'jiāmì', 'mã hoá', '', ['数据加密传输。', 'Shùjù jiāmì chuánshū.', 'Dữ liệu truyền đi được mã hoá.'])
    ],
    qs: [
      ['mc', '补丁 = ?', 'bản vá', ['miếng dán', 'lỗ hổng', 'virus'], 'Patch.'],
      ['mc', '服务器宕机了 = ?', 'Máy chủ sập rồi.', ['Máy chủ nâng cấp.', 'Máy chủ mới.', 'Máy chủ tắt đèn.'], 'Down.'],
      ['mc', '权限 = ?', 'quyền truy cập', ['quyền lực', 'giới hạn', 'mật khẩu'], 'Permission.'],
      ['hear', '请在周五前安装最新的安全补丁，修复已知漏洞。', 'Cài bản vá bảo mật mới nhất trước thứ Sáu để sửa lỗ hổng đã biết.', ['Gỡ bản vá.', 'Không có lỗ hổng.', 'Cài sau thứ Sáu.'], '补丁 / 漏洞.'],
      ['hear', '所有客户数据都采用加密传输。', 'Toàn bộ dữ liệu khách hàng được truyền mã hoá.', ['Truyền không mã hoá.', 'Một phần được mã hoá.', 'Không truyền.'], '加密.'],
      ['order', 'Sắp xếp: “Sao lưu cơ sở dữ liệu.”', ['备份', '数据库', '。'], '备份数据库。']
    ],
    noi: [['服务器宕机了，我们正在处理。', 'Fúwùqì dàngjī le, wǒmen zhèngzài chǔlǐ. – Máy chủ sập, chúng tôi đang xử lý.'], ['请安装最新的安全补丁。', 'Qǐng ānzhuāng zuì xīn de ānquán bǔding. – Vui lòng cài bản vá bảo mật mới nhất.'], ['新系统下周上线。', 'Xīn xìtǒng xià zhōu shàngxiàn. – Hệ thống mới chạy tuần sau.']],
    hoithoai: {
      ctx: 'Em làm cầu nối giữa đội IT Việt và nhà cung cấp phần mềm Trung Quốc khi hệ thống lỗi.', vai: 'Kỹ sư Trung Quốc hỏi, em trả lời.', ai: '👨‍💻 工程师',
      luot: [
        T(['你们的服务器什么时候宕机的？', 'Nǐmen de fúwùqì shénme shíhou dàngjī de?', 'Máy chủ sập lúc nào?'], ['今天上午九点十五分，数据库连接失败。', 'Jīntiān shàngwǔ jiǔ diǎn shíwǔ fēn, shùjùkù liánjiē shībài.', '9h15 sáng nay, kết nối CSDL thất bại.', 'Chính xác.'], ['早上吧。', 'Zǎoshang ba.', 'Mơ hồ.'], ['不知道。', 'Bù zhīdào.', 'Thiếu.']),
        T(['最近安装了什么补丁吗？', 'Zuìjìn ānzhuāngle shénme bǔding ma?', 'Gần đây có cài bản vá nào không?'], ['昨晚部署了一个新版本，可能是接口不兼容。', 'Zuówǎn bùshǔle yí ge xīn bǎnběn, kěnéng shì jiēkǒu bù jiānróng.', 'Tối qua triển khai phiên bản mới, có thể API không tương thích.', 'Phân tích.'], ['没有，我们什么也没做。', 'Méiyǒu, wǒmen shénme yě méi zuò.', 'Che giấu.'], ['补丁很好。', 'Bǔding hěn hǎo.', 'Lạc.']),
        T(['好，请给我开一个临时权限，我远程查一下。', 'Hǎo, qǐng gěi wǒ kāi yí ge línshí quánxiàn, wǒ yuǎnchéng chá yíxià.', 'Được, mở cho tôi quyền tạm, tôi kiểm tra từ xa.'], ['可以，按照安全规定，权限两小时后自动失效。', 'Kěyǐ, ànzhào ānquán guīdìng, quánxiàn liǎng xiǎoshí hòu zìdòng shīxiào.', 'Được, theo quy định an toàn, quyền tự hết hạn sau 2 tiếng.', 'Bảo mật.'], ['给你管理员密码。', 'Gěi nǐ guǎnlǐyuán mìmǎ.', 'Vi phạm bảo mật!'], ['不行，你自己想办法。', 'Bù xíng, nǐ zìjǐ xiǎng bànfǎ.', 'Không hợp tác.'])
      ], ket: 'Em đã điều phối sự cố IT song ngữ an toàn.'
    },
    tom: ['服务器 / 数据库 / 接口 / 补丁 / 部署 / 上线 / 权限 / 加密'], nguphap: 'Thuật ngữ CNTT', phatam: '宕机 dàngjī, 补丁 bǔding',
    loi: ['Chia sẻ mật khẩu quản trị khi hỗ trợ từ xa'], btvn: ['Dịch 1 thông báo bảo trì hệ thống Trung → Việt', 'Lập bảng 20 thuật ngữ IT', 'Luyện 🎤 3 câu']
  };

  const d13 = {
    n: 13, ten: plan[12].ten, kinds: K,
    muc: 'Dịch văn bản pháp lý: cấu trúc điều khoản, từ khiếm định (应当, 不得, 可以), định nghĩa, phạm vi.',
    hoc: `${tbl(['Tiếng Trung', 'Tiếng Việt', 'Ghi chú'], [['应当', 'phải', 'nghĩa vụ'], ['不得', 'không được', 'cấm'], ['可以', 'có thể / được', 'quyền'], ['本合同所称…是指…', '… trong hợp đồng này được hiểu là…', 'định nghĩa'], ['第三条第二款', 'khoản 2 điều 3', 'trật tự ngược'], ['自…之日起', 'kể từ ngày…', 'hiệu lực']])}
      ${tip('⚖️ Dịch pháp lý: <b>chính xác hơn trôi chảy</b>. Không thêm, không bớt; giữ cấu trúc điều – khoản – điểm.')}`,
    vocab: [
      w('应当', 'yīngdāng', 'phải (pháp lý)', '', ['乙方应当按时交货。', 'Yǐfāng yīngdāng ànshí jiāohuò.', 'Bên B phải giao hàng đúng hạn.']),
      w('不得', 'bùdé', 'không được', '', ['不得泄露商业秘密。', 'Bùdé xièlòu shāngyè mìmì.', 'Không được tiết lộ bí mật kinh doanh.']),
      w('是指', 'shì zhǐ', 'được hiểu là', '', ['本合同所称"产品"是指…', 'Běn hétong suǒ chēng "chǎnpǐn" shì zhǐ…', '"Sản phẩm" trong hợp đồng này được hiểu là…']),
      w('款', 'kuǎn', 'khoản', '', ['第三条第二款。', 'Dì sān tiáo dì èr kuǎn.', 'Khoản 2 Điều 3.']),
      w('商业秘密', 'shāngyè mìmì', 'bí mật kinh doanh', '', ['保护商业秘密。', 'Bǎohù shāngyè mìmì.', 'Bảo vệ bí mật kinh doanh.']),
      w('争议', 'zhēngyì', 'tranh chấp', '', ['解决争议。', 'Jiějué zhēngyì.', 'Giải quyết tranh chấp.']),
      w('仲裁', 'zhòngcái', 'trọng tài', '', ['提交仲裁。', 'Tíjiāo zhòngcái.', 'Đưa ra trọng tài.']),
      w('管辖', 'guǎnxiá', 'thẩm quyền', '', ['适用越南法律管辖。', 'Shìyòng Yuènán fǎlǜ guǎnxiá.', 'Áp dụng pháp luật Việt Nam.']),
      w('终止', 'zhōngzhǐ', 'chấm dứt', '', ['合同终止。', 'Hétong zhōngzhǐ.', 'Hợp đồng chấm dứt.']),
      w('书面', 'shūmiàn', 'bằng văn bản', '', ['应当书面通知。', 'Yīngdāng shūmiàn tōngzhī.', 'Phải thông báo bằng văn bản.'])
    ],
    qs: [
      ['mc', '第三条第二款 = ?', 'Khoản 2 Điều 3', ['Điều 2 Khoản 3', 'Điều 32', 'Khoản 3 Điều 2'], 'Trật tự ngược.'],
      ['mc', '不得 dịch là?', 'không được', ['không cần', 'không thể', 'chưa được'], 'Cấm.'],
      ['mc', '仲裁 = ?', 'trọng tài', ['toà án', 'hoà giải', 'luật sư'], 'Arbitration.'],
      ['hear', '任何一方不得向第三方泄露本合同内容。', 'Không bên nào được tiết lộ nội dung hợp đồng cho bên thứ ba.', ['Được tiết lộ.', 'Chỉ bên A được.', 'Bên thứ ba được biết.'], '不得.'],
      ['hear', '如发生争议，双方应当先友好协商。', 'Nếu phát sinh tranh chấp, hai bên phải thương lượng thiện chí trước.', ['Ra toà ngay.', 'Huỷ hợp đồng.', 'Không cần thương lượng.'], '应当.'],
      ['order', 'Sắp xếp: “Phải thông báo bằng văn bản.”', ['应当', '书面', '通知', '。'], '应当书面通知。']
    ],
    noi: [['乙方应当按时交货。', 'Yǐfāng yīngdāng ànshí jiāohuò. – Bên B phải giao hàng đúng hạn.'], ['不得泄露商业秘密。', 'Bùdé xièlòu shāngyè mìmì. – Không được tiết lộ bí mật kinh doanh.'], ['双方应当友好协商。', 'Shuāngfāng yīngdāng yǒuhǎo xiéshāng. – Hai bên phải thương lượng thiện chí.']],
    hoithoai: {
      ctx: 'Luật sư Trung Quốc rà bản dịch hợp đồng của em.', vai: 'Luật sư hỏi, em giải thích.', ai: '⚖️ 律师',
      luot: [
        T(['"应当"你为什么译成"phải"而不是"nên"？', '"Yīngdāng" nǐ wèishénme yì chéng "phải" ér bú shì "nên"?', 'Sao dịch 应当 là "phải" chứ không "nên"?'], ['在法律文件里"应当"表示义务，"nên"太弱，会改变法律效力。', 'Zài fǎlǜ wénjiàn li "yīngdāng" biǎoshì yìwù, "nên" tài ruò, huì gǎibiàn fǎlǜ xiàolì.', 'Trong văn bản pháp lý 应当 là nghĩa vụ; "nên" quá yếu, làm đổi hiệu lực pháp lý.', 'Chính xác.'], ['差不多。', 'Chàbuduō.', 'Sai lầm nguy hiểm.'], ['随便译。', 'Suíbiàn yì.', 'Sai.']),
        T(['第五条第三款你翻对了吗？', 'Dì wǔ tiáo dì sān kuǎn nǐ fān duì le ma?', 'Khoản 3 Điều 5 dịch đúng chưa?'], ['译为"Khoản 3 Điều 5"，越南语顺序和中文相反。', 'Yì wéi "Khoản 3 Điều 5", Yuènányǔ shùnxù hé Zhōngwén xiāngfǎn.', 'Dịch "Khoản 3 Điều 5", trật tự tiếng Việt ngược với tiếng Trung.', 'Đúng.'], ['"Điều 3 Khoản 5"。', '"…"', 'Sai.'], ['"Điều 53"。', '"…"', 'Sai.']),
        T(['有没有你自己加的内容？', 'Yǒu méiyǒu nǐ zìjǐ jiā de nèiróng?', 'Có nội dung bạn tự thêm không?'], ['没有，法律翻译不能增减，有疑问的地方我都标注出来请您确认。', 'Méiyǒu, fǎlǜ fānyì bù néng zēngjiǎn, yǒu yíwèn de dìfang wǒ dōu biāozhù chūlai qǐng nín quèrèn.', 'Không, dịch pháp lý không thêm bớt, chỗ nghi vấn tôi đánh dấu để anh xác nhận.', 'Đạo đức nghề.'], ['加了一点儿让它更通顺。', 'Jiāle yìdiǎnr ràng tā gèng tōngshùn.', 'Vi phạm.'], ['删了几句。', 'Shānle jǐ jù.', 'Vi phạm.'])
      ], ket: 'Em đã dịch pháp lý chính xác và có đạo đức nghề.'
    },
    tom: ['应当=phải, 不得=không được, 可以=được', 'Điều–khoản ngược trật tự', 'Không thêm bớt'], nguphap: 'Dịch pháp lý', phatam: '仲裁 zhòngcái, 管辖 guǎnxiá',
    loi: ['Dịch 应当 thành "nên"', 'Thêm bớt nội dung'], btvn: ['Dịch 5 điều khoản mẫu Trung → Việt', 'Lập bảng 15 thuật ngữ pháp lý', 'Luyện 🎤 3 câu']
  };

  const d14 = {
    n: 14, ten: plan[13].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Ôn giai đoạn 2: dịch câu dài, phiên dịch nối tiếp, hội nghị, tài chính, CNTT, pháp lý.',
    hoc: `<h4>Tóm tắt tuần 2</h4>${tbl(['Chủ đề', 'Điểm then chốt'], [['Câu dài', 'Định ngữ ra sau, bỏ 进行, 被 → chủ động'], ['Nối tiếp', 'Ký hiệu, số, tên riêng'], ['Hội nghị', '尊敬的…、谨代表、预祝…圆满成功'], ['Tài chính', '不良贷款率、资本充足率、百分点'], ['CNTT', '补丁、部署、上线、权限'], ['Pháp lý', '应当、不得、第三条第二款']])}`,
    qs: [['mc', '应当 trong hợp đồng dịch là?', 'phải', ['nên', 'có thể', 'muốn'], 'Nghĩa vụ.'], ['mc', '下降了零点三个百分点 = ?', 'giảm 0,3 điểm phần trăm', ['giảm 0,3%', 'giảm 3%', 'giảm 30%'], 'Điểm %.']],
    noi: [['我谨代表公司表示热烈欢迎。', 'Wǒ jǐn dàibiǎo gōngsī biǎoshì rèliè huānyíng. – Tôi xin thay mặt công ty nhiệt liệt chào mừng.'], ['译文要准确、通顺。', 'Yìwén yào zhǔnquè, tōngshùn. – Bản dịch phải chính xác, trôi chảy.']],
    hoithoai: {
      ctx: 'Tổng ôn: phỏng vấn tuyển phiên dịch viên cho tập đoàn Trung Quốc.', vai: 'Giám khảo hỏi, em trả lời.', ai: '🧑‍⚖️ 考官',
      luot: [
        T(['口译和笔译你更擅长哪个？', 'Kǒuyì hé bǐyì nǐ gèng shàncháng nǎge?', 'Phiên dịch và biên dịch bạn giỏi cái nào hơn?'], ['我两种都做过，笔译更擅长金融和IT领域。', 'Wǒ liǎng zhǒng dōu zuòguo, bǐyì gèng shàncháng jīnróng hé IT lǐngyù.', 'Tôi làm cả hai, biên dịch mạnh hơn ở tài chính và IT.', 'Cụ thể.'], ['都很擅长。', 'Dōu hěn shàncháng.', 'Chung chung.'], ['我不会口译。', 'Wǒ bú huì kǒuyì.', 'Tự hạ.']),
        T(['请翻译："本合同自双方签字之日起生效。"', 'Qǐng fānyì: "Běn hétong zì shuāngfāng qiānzì zhī rì qǐ shēngxiào."', 'Dịch câu này.'], ['"Hợp đồng này có hiệu lực kể từ ngày hai bên ký."', '"…"', 'Chính xác.', 'Đúng.'], ['"Hợp đồng ký rồi."', '"…"', 'Thiếu.'], ['"Hai bên nên ký hợp đồng."', '"…"', 'Sai.']),
        T(['遇到听不清的数字怎么办？', 'Yùdào tīng bu qīng de shùzì zěnme bàn?', 'Gặp số nghe không rõ làm sao?'], ['礼貌地请发言人重复，绝不猜测。', 'Lǐmào de qǐng fāyánrén chóngfù, jué bù cāicè.', 'Lịch sự xin người nói nhắc lại, tuyệt đối không đoán.', 'Đạo đức nghề.'], ['猜一个。', 'Cāi yí ge.', 'Nguy hiểm.'], ['跳过。', 'Tiàoguò.', 'Bỏ sót.'])
      ], ket: 'Em đã ôn trọn giai đoạn 2!'
    },
    tom: ['Ôn tuần 2', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn', phatam: 'Ôn đọc số liệu nhanh',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: học lại ngày yếu', 'Làm ⚡ Luyện nhanh', 'Dịch 1 văn bản 300 chữ bất kỳ lĩnh vực đã học']
  };

  window.PLT_ZH5 = { plan, stages, H: { w, L, T, tbl, tip, exs, sp, K }, days: [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14] };
})();

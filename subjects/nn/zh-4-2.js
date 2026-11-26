/* PLT-Edu · Tiếng Trung – Cấp 4 (HSK 5–6): Ngày 15–30 */
(function () {
  'use strict';
  const Z = window.PLT_ZH4; if (!Z) return;
  const { w, T, tbl, tip, exs, K } = Z.H;
  const plan = Z.plan;

  const d15 = {
    n: 15, ten: plan[14].ten, kinds: K,
    muc: 'Hiểu văn hoá doanh nghiệp Trung Quốc: 关系 (quan hệ), 面子 (thể diện), 人情; ứng xử khéo.',
    hoc: `${tbl(['Khái niệm', 'Ý nghĩa', 'Ứng xử'], [['关系', 'mạng lưới quan hệ', 'Xây dựng lâu dài, không chỉ giao dịch'], ['面子', 'thể diện', 'Không phê bình trước đám đông'], ['人情', 'ân tình', 'Nhận giúp đỡ thì nhớ đáp lại'], ['客套', 'khách sáo', 'Từ chối 1–2 lần trước khi nhận là phép lịch sự']])}
      ${tip('🔑 <b>给面子</b> = nể mặt; <b>丢面子</b> = mất mặt. Góp ý nên nói riêng: 私下说.')}`,
    vocab: [
      w('关系', 'guānxi', 'quan hệ', '', ['搞好关系很重要。', 'Gǎo hǎo guānxi hěn zhòngyào.', 'Giữ quan hệ tốt rất quan trọng.']),
      w('面子', 'miànzi', 'thể diện', '', ['给我个面子。', 'Gěi wǒ ge miànzi.', 'Nể mặt tôi chút.']),
      w('丢面子', 'diū miànzi', 'mất mặt', '', ['当众批评会让他丢面子。', 'Dāngzhòng pīpíng huì ràng tā diū miànzi.', 'Phê bình trước mọi người khiến anh ấy mất mặt.']),
      w('人情', 'rénqíng', 'ân tình', '', ['我欠你一个人情。', 'Wǒ qiàn nǐ yí ge rénqíng.', 'Tôi nợ bạn một ân tình.']),
      w('私下', 'sīxià', 'riêng tư, riêng', '', ['我们私下谈谈。', 'Wǒmen sīxià tántan.', 'Ta nói chuyện riêng.']),
      w('当众', 'dāngzhòng', 'trước mặt mọi người', '', ['不要当众批评。', 'Búyào dāngzhòng pīpíng.', 'Đừng phê bình trước mọi người.']),
      w('信任', 'xìnrèn', 'tin tưởng', '', ['建立信任需要时间。', 'Jiànlì xìnrèn xūyào shíjiān.', 'Xây dựng lòng tin cần thời gian.']),
      w('建立', 'jiànlì', 'xây dựng, thiết lập', '', ['建立长期关系。', 'Jiànlì chángqī guānxi.', 'Thiết lập quan hệ lâu dài.']),
      w('应酬', 'yìngchou', 'tiếp khách, xã giao', '', ['今晚有个应酬。', 'Jīnwǎn yǒu ge yìngchou.', 'Tối nay có buổi tiếp khách.']),
      w('诚意', 'chéngyì', 'thành ý', '', ['我们很有诚意。', 'Wǒmen hěn yǒu chéngyì.', 'Chúng tôi rất có thành ý.'])
    ],
    qs: [
      ['mc', 'Muốn góp ý cho đối tác Trung Quốc nên?', '私下说', ['当众批评', '发群消息', '不说'], 'Giữ thể diện.'],
      ['mc', '我欠你一个___。', '人情', ['面子', '关系', '应酬'], 'Nợ ân tình.'],
      ['mc', '丢面子 nghĩa là?', 'mất mặt', ['mất ví', 'mất quan hệ', 'mất tiền'], 'diū miànzi.'],
      ['hear', '建立信任需要时间，不能只看一次合作。', 'Xây lòng tin cần thời gian, không chỉ nhìn một lần hợp tác.', ['Tin ngay lập tức.', 'Một lần là đủ.', 'Không cần tin.'], '信任.'],
      ['hear', '今晚有个应酬，我晚点儿回家。', 'Tối nay có tiếp khách, tôi về muộn.', ['Tôi về sớm.', 'Tối nay rảnh.', 'Không đi đâu.'], '应酬.'],
      ['order', 'Sắp xếp: “Ta nói chuyện riêng.”', ['我们', '私下', '谈谈', '。'], '我们私下谈谈。']
    ],
    noi: [['我们很有诚意。', 'Wǒmen hěn yǒu chéngyì. – Chúng tôi rất có thành ý.'], ['我欠你一个人情。', 'Wǒ qiàn nǐ yí ge rénqíng. – Tôi nợ bạn một ân tình.'], ['我们私下谈谈吧。', 'Wǒmen sīxià tántan ba. – Mình nói chuyện riêng nhé.']],
    hoithoai: {
      ctx: 'Nhân viên đối tác mắc lỗi trong buổi họp chung; sếp họ hỏi em sau đó.', vai: 'Sếp đối tác hỏi, em ứng xử giữ thể diện.', ai: '👔 刘总',
      luot: [
        T(['今天会上小张的数据错了，你怎么没说？', 'Jīntiān huì shang Xiǎo Zhāng de shùjù cuò le, nǐ zěnme méi shuō?', 'Hôm nay số liệu Tiểu Trương sai, sao bạn không nói?'], ['当众说会让他丢面子，所以我想私下跟他沟通。', 'Dāngzhòng shuō huì ràng tā diū miànzi, suǒyǐ wǒ xiǎng sīxià gēn tā gōutōng.', 'Nói trước mọi người sẽ khiến anh ấy mất mặt, nên tôi muốn trao đổi riêng.', 'Giữ thể diện.'], ['他太笨了。', 'Tā tài bèn le.', 'Xúc phạm.'], ['我没看出来。', 'Wǒ méi kàn chūlai.', 'Thiếu trung thực.']),
        T(['你考虑得很周到。', 'Nǐ kǎolǜ de hěn zhōudào.', 'Bạn suy nghĩ chu đáo.'], ['我们是长期合作伙伴，建立信任比什么都重要。', 'Wǒmen shì chángqī hézuò huǒbàn, jiànlì xìnrèn bǐ shénme dōu zhòngyào.', 'Chúng ta là đối tác lâu dài, xây dựng lòng tin quan trọng hơn hết.', 'Giá trị.'], ['这是我的面子。', 'Zhè shì wǒ de miànzi.', 'Lạc.'], ['应酬很重要。', 'Yìngchou hěn zhòngyào.', 'Lạc.']),
        T(['今晚一起吃个饭吧，我请客。', 'Jīnwǎn yìqǐ chī ge fàn ba, wǒ qǐngkè.', 'Tối nay cùng ăn nhé, tôi mời.'], ['您太客气了，那下次一定让我请。', 'Nín tài kèqi le, nà xià cì yídìng ràng wǒ qǐng.', 'Anh khách sáo quá, vậy lần sau nhất định để tôi mời.', 'Đáp nhân tình.'], ['好，你付钱。', 'Hǎo, nǐ fù qián.', 'Thô.'], ['我不吃饭。', 'Wǒ bù chī fàn.', 'Từ chối cộc.'])
      ], ket: 'Em đã ứng xử khéo léo theo văn hoá 面子.'
    },
    tom: ['关系 / 面子 / 人情', '私下 vs 当众', '下次让我请'], nguphap: 'Văn hoá giao tiếp', phatam: '面子 miànzi, 应酬 yìngchou',
    loi: ['Phê bình công khai', 'Nhận lời mời quá vội'], btvn: ['Viết 5 quy tắc giữ 面子 cho đối tác', 'So sánh với văn hoá Việt 100 chữ', 'Luyện 🎤 3 câu']
  };

  const d16 = {
    n: 16, ten: plan[15].ten, kinds: K,
    muc: 'Đọc hiểu và trao đổi về hợp đồng: bên A/B, điều khoản, thanh toán, vi phạm, bồi thường, hiệu lực.',
    hoc: `${tbl(['Thuật ngữ', 'Nghĩa'], [['甲方 / 乙方', 'Bên A / Bên B'], ['条款', 'điều khoản'], ['违约', 'vi phạm hợp đồng'], ['违约金', 'tiền phạt vi phạm'], ['生效', 'có hiệu lực'], ['不可抗力', 'bất khả kháng']])}
      ${tip('⚖️ Bài học ngôn ngữ. Hợp đồng thật cần luật sư/pháp chế xem xét.')}`,
    vocab: [
      w('甲方', 'jiǎfāng', 'Bên A', '', ['甲方负责付款。', 'Jiǎfāng fùzé fùkuǎn.', 'Bên A chịu trách nhiệm thanh toán.']),
      w('乙方', 'yǐfāng', 'Bên B', '', ['乙方负责交货。', 'Yǐfāng fùzé jiāohuò.', 'Bên B chịu trách nhiệm giao hàng.']),
      w('条款', 'tiáokuǎn', 'điều khoản', '', ['请仔细阅读条款。', 'Qǐng zǐxì yuèdú tiáokuǎn.', 'Vui lòng đọc kỹ điều khoản.']),
      w('违约', 'wéiyuē', 'vi phạm hợp đồng', '', ['如果违约，要赔偿。', 'Rúguǒ wéiyuē, yào péicháng.', 'Nếu vi phạm phải bồi thường.']),
      w('赔偿', 'péicháng', 'bồi thường', '', ['赔偿损失。', 'Péicháng sǔnshī.', 'Bồi thường thiệt hại.']),
      w('生效', 'shēngxiào', 'có hiệu lực', '', ['合同签字后生效。', 'Hétong qiānzì hòu shēngxiào.', 'Hợp đồng có hiệu lực sau khi ký.']),
      w('不可抗力', 'bùkěkànglì', 'bất khả kháng', '', ['因不可抗力导致延误。', 'Yīn bùkěkànglì dǎozhì yánwù.', 'Chậm trễ do bất khả kháng.']),
      w('损失', 'sǔnshī', 'thiệt hại', '', ['造成损失。', 'Zàochéng sǔnshī.', 'Gây thiệt hại.']),
      w('期限', 'qīxiàn', 'thời hạn', '', ['合同期限两年。', 'Hétong qīxiàn liǎng nián.', 'Thời hạn hợp đồng 2 năm.']),
      w('修改', 'xiūgǎi', 'sửa đổi', '', ['我们想修改第五条。', 'Wǒmen xiǎng xiūgǎi dì wǔ tiáo.', 'Chúng tôi muốn sửa điều 5.'])
    ],
    qs: [
      ['mc', '违约金 nghĩa là?', 'tiền phạt vi phạm', ['tiền đặt cọc', 'tiền lương', 'tiền thưởng'], 'wéiyuējīn.'],
      ['mc', '不可抗力 nghĩa là?', 'bất khả kháng', ['không thể chống lại khách', 'lực lượng mạnh', 'không có lực'], 'Thiên tai, chiến tranh...'],
      ['mc', '合同签字后___。', '生效', ['生产', '有效了过', '生气'], 'Có hiệu lực.'],
      ['hear', '如果乙方延期交货，需要支付违约金。', 'Nếu bên B giao chậm phải trả tiền phạt.', ['Bên A trả phạt.', 'Không phạt.', 'Bên B được thưởng.'], '乙方 / 违约金.'],
      ['hear', '我们想修改第五条关于付款期限的条款。', 'Chúng tôi muốn sửa điều 5 về thời hạn thanh toán.', ['Sửa điều 15.', 'Sửa về giao hàng.', 'Không sửa gì.'], '第五条.'],
      ['order', 'Sắp xếp: “Vui lòng đọc kỹ điều khoản.”', ['请', '仔细', '阅读', '条款。'], '请仔细阅读条款。']
    ],
    noi: [['请仔细阅读条款。', 'Qǐng zǐxì yuèdú tiáokuǎn. – Vui lòng đọc kỹ điều khoản.'], ['合同签字后生效。', 'Hétong qiānzì hòu shēngxiào. – Hợp đồng có hiệu lực sau khi ký.'], ['我们想修改第五条。', 'Wǒmen xiǎng xiūgǎi dì wǔ tiáo. – Chúng tôi muốn sửa điều 5.']],
    hoithoai: {
      ctx: 'Rà soát hợp đồng cung cấp thiết bị với đối tác Trung Quốc.', vai: 'Đối tác hỏi, em trao đổi điều khoản.', ai: '📑 法务',
      luot: [
        T(['合同你们看过了吗？', 'Hétong nǐmen kànguo le ma?', 'Các bạn xem hợp đồng chưa?'], ['看过了，我们想修改第五条付款期限，从三十天改为四十五天。', 'Kànguo le, wǒmen xiǎng xiūgǎi dì wǔ tiáo fùkuǎn qīxiàn, cóng sānshí tiān gǎi wéi sìshíwǔ tiān.', 'Xem rồi, chúng tôi muốn sửa điều 5 thời hạn thanh toán từ 30 lên 45 ngày.', 'Cụ thể.'], ['看了，都很好。', 'Kàn le, dōu hěn hǎo.', 'Bỏ qua rủi ro.'], ['合同生气了。', 'Hétong shēngqì le.', 'Vô nghĩa.']),
        T(['那违约金也要相应调整。', 'Nà wéiyuējīn yě yào xiāngyìng tiáozhěng.', 'Vậy tiền phạt cũng phải điều chỉnh tương ứng.'], ['可以，另外希望加上不可抗力条款。', 'Kěyǐ, lìngwài xīwàng jiā shang bùkěkànglì tiáokuǎn.', 'Được, ngoài ra mong bổ sung điều khoản bất khả kháng.', 'Bảo vệ quyền lợi.'], ['违约金不要了。', 'Wéiyuējīn bú yào le.', 'Không hợp lý.'], ['不可抗力是什么？我不管。', 'Bùkěkànglì shì shénme? Wǒ bù guǎn.', 'Thiếu chuyên nghiệp.']),
        T(['好的，我们修改后再发给你们。', 'Hǎo de, wǒmen xiūgǎi hòu zài fā gěi nǐmen.', 'Được, sửa xong gửi lại.'], ['谢谢，我们法务确认后就安排签字。', 'Xièxie, wǒmen fǎwù quèrèn hòu jiù ānpái qiānzì.', 'Cảm ơn, pháp chế bên tôi xác nhận xong sẽ sắp xếp ký.', 'Quy trình.'], ['现在就签吧。', 'Xiànzài jiù qiān ba.', 'Vội vàng.'], ['不签了。', 'Bù qiān le.', 'Không hợp.'])
      ], ket: 'Em đã trao đổi điều khoản hợp đồng chuyên nghiệp.'
    },
    tom: ['甲方 / 乙方 / 条款', '违约 / 赔偿 / 生效 / 不可抗力'], nguphap: 'Ngôn ngữ pháp lý', phatam: '条款 tiáokuǎn, 违约 wéiyuē',
    loi: ['Ký vội không đọc điều khoản'], btvn: ['Đọc 1 mẫu hợp đồng tiếng Trung, gạch 10 thuật ngữ', 'Viết email đề nghị sửa điều khoản', 'Luyện 🎤 3 câu']
  };

  const d17 = {
    n: 17, ten: plan[16].ten, kinds: K,
    muc: 'Thảo luận vấn đề y tế và già hoá dân số: bảo hiểm, chăm sóc người cao tuổi, chính sách.',
    hoc: `${tbl(['Chủ đề', 'Câu mẫu'], [['Già hoá', '人口老龄化问题越来越严重。'], ['Bảo hiểm', '医疗保险覆盖了大部分人口。'], ['Chăm sóc', '养老院的需求在增加。'], ['Giải pháp', '政府应该鼓励社区养老。']])}`,
    vocab: [
      w('老龄化', 'lǎolínghuà', 'già hoá', '', ['人口老龄化。', 'Rénkǒu lǎolínghuà.', 'Già hoá dân số.']),
      w('医疗', 'yīliáo', 'y tế', '', ['医疗条件改善了。', 'Yīliáo tiáojiàn gǎishàn le.', 'Điều kiện y tế đã cải thiện.']),
      w('保险', 'bǎoxiǎn', 'bảo hiểm', '', ['买医疗保险。', 'Mǎi yīliáo bǎoxiǎn.', 'Mua bảo hiểm y tế.']),
      w('养老', 'yǎnglǎo', 'dưỡng lão', '', ['养老问题。', 'Yǎnglǎo wèntí.', 'Vấn đề dưỡng lão.']),
      w('社区', 'shèqū', 'cộng đồng, khu dân cư', '', ['社区服务中心。', 'Shèqū fúwù zhōngxīn.', 'Trung tâm dịch vụ khu dân cư.']),
      w('覆盖', 'fùgài', 'bao phủ', '', ['网络覆盖全国。', 'Wǎngluò fùgài quánguó.', 'Mạng phủ toàn quốc.']),
      w('需求', 'xūqiú', 'nhu cầu', '', ['市场需求很大。', 'Shìchǎng xūqiú hěn dà.', 'Nhu cầu thị trường lớn.']),
      w('改善', 'gǎishàn', 'cải thiện', '', ['生活条件改善了。', 'Shēnghuó tiáojiàn gǎishàn le.', 'Điều kiện sống được cải thiện.']),
      w('照顾', 'zhàogù', 'chăm sóc', '', ['照顾父母。', 'Zhàogù fùmǔ.', 'Chăm sóc cha mẹ.']),
      w('负担', 'fùdān', 'gánh nặng', '', ['年轻人的负担很重。', 'Niánqīng rén de fùdān hěn zhòng.', 'Gánh nặng của người trẻ rất lớn.'])
    ],
    qs: [
      ['mc', '老龄化 nghĩa là?', 'già hoá', ['lão hoá da', 'người già', 'tuổi thọ'], 'lǎolínghuà.'],
      ['mc', '医疗保险___了大部分人口。', '覆盖', ['改善', '照顾', '负担'], 'Bao phủ.'],
      ['mc', '负担 nghĩa là?', 'gánh nặng', ['phụ trách', 'đảm bảo', 'gánh hàng'], 'fùdān.'],
      ['hear', '人口老龄化使年轻人的养老负担越来越重。', 'Già hoá dân số khiến gánh nặng dưỡng lão của người trẻ ngày càng lớn.', ['Gánh nặng giảm.', 'Người trẻ không liên quan.', 'Dân số trẻ hoá.'], '使…越来越重.'],
      ['hear', '政府应该鼓励社区养老。', 'Chính phủ nên khuyến khích dưỡng lão tại cộng đồng.', ['Cấm dưỡng lão.', 'Chỉ ở viện dưỡng lão.', 'Không cần chính sách.'], '社区养老.'],
      ['order', 'Sắp xếp: “Chăm sóc cha mẹ.”', ['照顾', '父母', '。'], '照顾父母。']
    ],
    noi: [['人口老龄化越来越严重。', 'Rénkǒu lǎolínghuà yuè lái yuè yánzhòng. – Già hoá dân số ngày càng nghiêm trọng.'], ['医疗保险很重要。', 'Yīliáo bǎoxiǎn hěn zhòngyào. – Bảo hiểm y tế rất quan trọng.'], ['照顾父母是我们的责任。', 'Zhàogù fùmǔ shì wǒmen de zérèn. – Chăm sóc cha mẹ là trách nhiệm của chúng ta.']],
    hoithoai: {
      ctx: 'Thảo luận nhóm lớp HSK 6 về già hoá dân số.', vai: 'Bạn nêu vấn đề, em phân tích.', ai: '👩 同学',
      luot: [
        T(['你怎么看人口老龄化？', 'Nǐ zěnme kàn rénkǒu lǎolínghuà?', 'Bạn nhìn nhận già hoá dân số thế nào?'], ['这是一个全球性问题，越南也开始面临这个挑战。', 'Zhè shì yí ge quánqiúxìng wèntí, Yuènán yě kāishǐ miànlín zhège tiǎozhàn.', 'Đây là vấn đề toàn cầu, Việt Nam cũng bắt đầu đối mặt.', 'Bối cảnh.'], ['老人很多。', 'Lǎorén hěn duō.', 'Đơn giản quá.'], ['不是问题。', 'Bú shì wèntí.', 'Phủ nhận.']),
        T(['有什么影响？', 'Yǒu shénme yǐngxiǎng?', 'Ảnh hưởng gì?'], ['劳动力减少，同时医疗和养老的负担会加重。', 'Láodònglì jiǎnshǎo, tóngshí yīliáo hé yǎnglǎo de fùdān huì jiāzhòng.', 'Lực lượng lao động giảm, đồng thời gánh nặng y tế dưỡng lão tăng.', 'Phân tích.'], ['没有影响。', 'Méiyǒu yǐngxiǎng.', 'Sai.'], ['影响很好。', 'Yǐngxiǎng hěn hǎo.', 'Sai.']),
        T(['有什么建议？', 'Yǒu shénme jiànyì?', 'Có đề xuất gì?'], ['一方面扩大医疗保险覆盖，另一方面发展社区养老服务。', 'Yì fāngmiàn kuòdà yīliáo bǎoxiǎn fùgài, lìng yì fāngmiàn fāzhǎn shèqū yǎnglǎo fúwù.', 'Một mặt mở rộng bảo hiểm y tế, mặt khác phát triển dưỡng lão cộng đồng.', '一方面…另一方面.'], ['让老人自己解决。', 'Ràng lǎorén zìjǐ jiějué.', 'Thiếu trách nhiệm.'], ['没办法。', 'Méi bànfǎ.', 'Bi quan.'])
      ], ket: 'Em đã phân tích vấn đề xã hội có chiều sâu.'
    },
    tom: ['老龄化 / 医疗保险 / 养老 / 负担', '一方面…另一方面'], nguphap: 'Nghị luận xã hội', phatam: '老龄化 lǎolínghuà',
    loi: ['Phân tích một chiều'], btvn: ['Viết 200 chữ về già hoá dân số ở VN', 'Dùng 一方面…另一方面 3 lần', 'Luyện 🎤 3 câu']
  };

  const d18 = {
    n: 18, ten: plan[17].ten, kinds: K,
    muc: 'Bàn về đô thị hoá: giá nhà, giao thông, di cư, chênh lệch thành thị – nông thôn.',
    hoc: `${tbl(['Chủ đề', 'Câu mẫu'], [['Đô thị hoá', '城市化进程加快了。'], ['Giá nhà', '房价太高，年轻人买不起。'], ['Di cư', '大量农村人口流入城市。'], ['Chênh lệch', '城乡差距仍然很大。']])}`,
    vocab: [
      w('城市化', 'chéngshìhuà', 'đô thị hoá', '', ['城市化进程。', 'Chéngshìhuà jìnchéng.', 'Tiến trình đô thị hoá.']),
      w('房价', 'fángjià', 'giá nhà', '', ['房价越来越高。', 'Fángjià yuè lái yuè gāo.', 'Giá nhà ngày càng cao.']),
      w('买不起', 'mǎi bu qǐ', 'không đủ tiền mua', '', ['年轻人买不起房。', 'Niánqīng rén mǎi bu qǐ fáng.', 'Người trẻ không mua nổi nhà.']),
      w('农村', 'nóngcūn', 'nông thôn', '', ['我老家在农村。', 'Wǒ lǎojiā zài nóngcūn.', 'Quê tôi ở nông thôn.']),
      w('差距', 'chājù', 'khoảng cách, chênh lệch', '', ['贫富差距。', 'Pínfù chājù.', 'Chênh lệch giàu nghèo.']),
      w('流入', 'liúrù', 'đổ vào', '', ['人口流入城市。', 'Rénkǒu liúrù chéngshì.', 'Dân đổ vào thành phố.']),
      w('基础设施', 'jīchǔ shèshī', 'cơ sở hạ tầng', '', ['改善基础设施。', 'Gǎishàn jīchǔ shèshī.', 'Cải thiện hạ tầng.']),
      w('拥挤', 'yōngjǐ', 'đông đúc', '', ['地铁很拥挤。', 'Dìtiě hěn yōngjǐ.', 'Tàu điện rất đông.']),
      w('仍然', 'réngrán', 'vẫn', '', ['问题仍然存在。', 'Wèntí réngrán cúnzài.', 'Vấn đề vẫn tồn tại.']),
      w('进程', 'jìnchéng', 'tiến trình', '', ['加快进程。', 'Jiākuài jìnchéng.', 'Đẩy nhanh tiến trình.'])
    ],
    qs: [
      ['mc', '买不起 nghĩa là?', 'không đủ tiền mua', ['không muốn mua', 'không được bán', 'mua không kịp'], 'Bổ ngữ khả năng.'],
      ['mc', '城乡___仍然很大。', '差距', ['差不多', '距离了', '差别人'], 'Chênh lệch.'],
      ['mc', '基础设施 nghĩa là?', 'cơ sở hạ tầng', ['thiết bị cơ bản', 'nền móng nhà', 'cơ sở dữ liệu'], 'jīchǔ shèshī.'],
      ['hear', '大量农村人口流入城市，交通越来越拥挤。', 'Nhiều người nông thôn đổ về thành phố, giao thông ngày càng đông.', ['Người thành phố về quê.', 'Giao thông thông thoáng.', 'Dân số giảm.'], '流入 / 拥挤.'],
      ['hear', '房价太高，很多年轻人买不起房。', 'Giá nhà quá cao, nhiều người trẻ không mua nổi.', ['Giá nhà rẻ.', 'Người trẻ mua dễ.', 'Không ai muốn mua.'], '买不起.'],
      ['order', 'Sắp xếp: “Vấn đề vẫn tồn tại.”', ['问题', '仍然', '存在', '。'], '问题仍然存在。']
    ],
    noi: [['房价太高，年轻人买不起。', 'Fángjià tài gāo, niánqīng rén mǎi bu qǐ. – Giá nhà quá cao, người trẻ không mua nổi.'], ['城乡差距仍然很大。', 'Chéngxiāng chājù réngrán hěn dà. – Chênh lệch thành thị nông thôn vẫn lớn.'], ['我们要改善基础设施。', 'Wǒmen yào gǎishàn jīchǔ shèshī. – Ta phải cải thiện hạ tầng.']],
    hoithoai: {
      ctx: 'Đồng nghiệp Trung Quốc hỏi về cuộc sống ở TP.HCM.', vai: 'Bạn hỏi, em chia sẻ.', ai: '👨 小冯',
      luot: [
        T(['胡志明市的房价高吗？', 'Hú Zhìmíng shì de fángjià gāo ma?', 'Giá nhà TP.HCM cao không?'], ['很高，市中心的房子很多年轻人都买不起。', 'Hěn gāo, shì zhōngxīn de fángzi hěn duō niánqīng rén dōu mǎi bu qǐ.', 'Rất cao, nhà trung tâm nhiều người trẻ không mua nổi.', '买不起.'], ['房价很拥挤。', 'Fángjià hěn yōngjǐ.', 'Kết hợp sai.'], ['很便宜。', 'Hěn piányi.', 'Sai thực tế.']),
        T(['那大家怎么办？', 'Nà dàjiā zěnme bàn?', 'Vậy mọi người làm sao?'], ['很多人租房，或者住在郊区，每天通勤一个多小时。', 'Hěn duō rén zū fáng, huòzhě zhù zài jiāoqū, měitiān tōngqín yí ge duō xiǎoshí.', 'Nhiều người thuê nhà hoặc ở ngoại ô, mỗi ngày đi làm hơn 1 tiếng.', 'Thực tế.'], ['大家都买了。', 'Dàjiā dōu mǎi le.', 'Mâu thuẫn.'], ['不知道怎么办。', 'Bù zhīdào zěnme bàn.', 'Né.']),
        T(['交通呢？', 'Jiāotōng ne?', 'Giao thông thì sao?'], ['以前很拥挤，现在地铁开通了，情况有所改善，但问题仍然存在。', 'Yǐqián hěn yōngjǐ, xiànzài dìtiě kāitōng le, qíngkuàng yǒusuǒ gǎishàn, dàn wèntí réngrán cúnzài.', 'Trước rất đông, giờ có metro, tình hình có cải thiện nhưng vấn đề vẫn còn.', 'Cân bằng.'], ['没有交通。', 'Méiyǒu jiāotōng.', 'Vô nghĩa.'], ['完全解决了。', 'Wánquán jiějué le.', 'Tuyệt đối hoá.'])
      ], ket: 'Em đã mô tả đô thị hoá cân bằng, cụ thể.'
    },
    tom: ['城市化 / 房价 / 差距 / 基础设施', '有所 + V (có phần)'], nguphap: 'Nghị luận xã hội', phatam: '拥挤 yōngjǐ, 差距 chājù',
    loi: ['Tuyệt đối hoá'], btvn: ['Viết 200 chữ về thành phố em sống', 'Dùng 仍然, 有所 mỗi từ 2 lần', 'Luyện 🎤 3 câu']
  };

  const d19 = {
    n: 19, ten: plan[18].ten, kinds: K,
    muc: 'Làm quen phương ngữ (Quảng Đông, Mân Nam), khác biệt Bắc – Nam, giản thể – phồn thể.',
    hoc: `${tbl(['Chủ đề', 'Ghi chú'], [['普通话', 'tiếng phổ thông, chuẩn toàn quốc'], ['粤语 (广东话)', 'tiếng Quảng Đông – phổ biến ở Quảng Đông, Hồng Kông, cộng đồng Hoa ở TP.HCM'], ['闽南话', 'tiếng Mân Nam – Phúc Kiến, Đài Loan'], ['简体字 / 繁体字', 'giản thể (Đại lục) / phồn thể (Hồng Kông, Đài Loan)'], ['南方口音', 'giọng Nam: zh→z, sh→s, không có âm uốn lưỡi']])}
      ${tip('🎧 Người Hoa ở Chợ Lớn chủ yếu nói 粤语 hoặc 潮州话, nhưng hầu hết hiểu 普通话.')}`,
    vocab: [
      w('普通话', 'pǔtōnghuà', 'tiếng phổ thông', '', ['请说普通话。', 'Qǐng shuō pǔtōnghuà.', 'Vui lòng nói tiếng phổ thông.']),
      w('粤语', 'Yuèyǔ', 'tiếng Quảng Đông', '', ['他会说粤语。', 'Tā huì shuō Yuèyǔ.', 'Anh ấy biết tiếng Quảng.']),
      w('口音', 'kǒuyīn', 'giọng, khẩu âm', '', ['他有南方口音。', 'Tā yǒu nánfāng kǒuyīn.', 'Anh ấy có giọng miền Nam.']),
      w('繁体字', 'fántǐzì', 'chữ phồn thể', '', ['台湾用繁体字。', 'Táiwān yòng fántǐzì.', 'Đài Loan dùng chữ phồn thể.']),
      w('简体字', 'jiǎntǐzì', 'chữ giản thể', '', ['大陆用简体字。', 'Dàlù yòng jiǎntǐzì.', 'Đại lục dùng chữ giản thể.']),
      w('地区', 'dìqū', 'khu vực', '', ['不同地区有不同的习俗。', 'Bùtóng dìqū yǒu bùtóng de xísú.', 'Mỗi khu vực có phong tục khác nhau.']),
      w('习俗', 'xísú', 'phong tục', '', ['当地的习俗。', 'Dāngdì de xísú.', 'Phong tục địa phương.']),
      w('华人', 'Huárén', 'người Hoa', '', ['胡志明市有很多华人。', 'Hú Zhìmíng shì yǒu hěn duō Huárén.', 'TP.HCM có nhiều người Hoa.']),
      w('当地', 'dāngdì', 'địa phương, bản địa', '', ['当地人很热情。', 'Dāngdì rén hěn rèqíng.', 'Người địa phương rất nhiệt tình.']),
      w('差异', 'chāyì', 'khác biệt', '', ['南北差异很大。', 'Nán běi chāyì hěn dà.', 'Khác biệt Nam Bắc rất lớn.'])
    ],
    qs: [
      ['mc', 'Hồng Kông, Đài Loan dùng chữ?', '繁体字', ['简体字', '拼音', '汉语字'], 'Phồn thể.'],
      ['mc', '粤语 là tiếng?', 'Quảng Đông', ['Phổ thông', 'Thượng Hải', 'Mân Nam'], 'Yuèyǔ.'],
      ['mc', '差异 nghĩa là?', 'khác biệt', ['chênh lệch giá', 'sai lầm', 'giống nhau'], 'chāyì.'],
      ['hear', '他有南方口音，把"是"说成"四"。', 'Anh ấy có giọng Nam, đọc "shì" thành "sì".', ['Giọng Bắc.', 'Không có giọng.', 'Đọc "sì" thành "shì".'], 'Đặc trưng giọng Nam.'],
      ['hear', '胡志明市的华人很多会说粤语。', 'Nhiều người Hoa ở TP.HCM biết tiếng Quảng.', ['Người Hoa không nói tiếng Quảng.', 'Ít người Hoa.', 'Chỉ nói tiếng Anh.'], '粤语.'],
      ['order', 'Sắp xếp: “Vui lòng nói tiếng phổ thông.”', ['请', '说', '普通话', '。'], '请说普通话。']
    ],
    noi: [['不好意思，我只会说普通话。', 'Bù hǎoyìsi, wǒ zhǐ huì shuō pǔtōnghuà. – Xin lỗi, tôi chỉ biết tiếng phổ thông.'], ['南北差异很大。', 'Nán běi chāyì hěn dà. – Khác biệt Nam Bắc rất lớn.'], ['胡志明市有很多华人。', 'Hú Zhìmíng shì yǒu hěn duō Huárén. – TP.HCM có nhiều người Hoa.']],
    hoithoai: {
      ctx: 'Em đến Chợ Lớn gặp một ông cụ người Hoa.', vai: 'Ông cụ nói, em đáp.', ai: '👴 陈伯',
      luot: [
        T(['（粤语）你好！食咗饭未呀？', '(Yuèyǔ) Nǐ hǎo! Sik zo faan mei a?', '(Tiếng Quảng) Chào! Ăn cơm chưa?'], ['陈伯您好！不好意思，我只会说普通话。', 'Chén bó nín hǎo! Bù hǎoyìsi, wǒ zhǐ huì shuō pǔtōnghuà.', 'Chào bác Trần! Xin lỗi, cháu chỉ biết tiếng phổ thông.', 'Lịch sự.'], ['你说什么？听不懂！', 'Nǐ shuō shénme? Tīng bu dǒng!', 'Cộc.'], ['我会粤语。', 'Wǒ huì Yuèyǔ.', 'Không thật.']),
        T(['没问题，我也会说一点儿普通话。你中文说得不错！', 'Méi wèntí, wǒ yě huì shuō yìdiǎnr pǔtōnghuà. Nǐ Zhōngwén shuō de búcuò!', 'Không sao, bác cũng biết chút phổ thông. Cháu nói tiếng Trung khá đấy!'], ['哪里哪里，还要多学习。陈伯是从哪儿来的？', 'Nǎli nǎli, hái yào duō xuéxí. Chén bó shì cóng nǎr lái de?', 'Đâu có, còn phải học nhiều. Bác từ đâu đến ạ?', 'Khiêm tốn + hỏi.'], ['是的，我很好。', 'Shì de, wǒ hěn hǎo.', 'Thiếu khiêm tốn.'], ['你普通话不好。', 'Nǐ pǔtōnghuà bù hǎo.', 'Thiếu lịch sự.']),
        T(['我祖籍广东，在这儿住了六十年了。', 'Wǒ zǔjí Guǎngdōng, zài zhèr zhùle liùshí nián le.', 'Bác gốc Quảng Đông, ở đây 60 năm rồi.'], ['哇，六十年了！那您一定很了解这里的华人习俗。', 'Wà, liùshí nián le! Nà nín yídìng hěn liǎojiě zhèlǐ de Huárén xísú.', 'Ồ, 60 năm! Vậy bác chắc hiểu rõ phong tục người Hoa ở đây.', 'Gợi chuyện.'], ['十六年吗？', 'Shíliù nián ma?', 'Nghe nhầm.'], ['广东很远。', 'Guǎngdōng hěn yuǎn.', 'Lạc.'])
      ], ket: 'Em đã giao tiếp tôn trọng với cộng đồng người Hoa.'
    },
    tom: ['普通话 / 粤语 / 口音', '简体 / 繁体'], nguphap: 'Nhận diện biến thể ngôn ngữ', phatam: 'Giọng Nam: zh→z, sh→s',
    loi: ['Phản ứng thiếu lịch sự khi không hiểu phương ngữ'], btvn: ['Nghe 1 video giọng Quảng Đông và 1 video giọng Bắc Kinh', 'Viết 10 chữ ở cả giản thể và phồn thể', 'Luyện 🎤 3 câu']
  };

  const d20 = {
    n: 20, ten: plan[19].ten, kinds: K,
    muc: 'Kể tóm tắt nội dung phim, sách; nêu cảm nhận: 讲述了, 主人公, 情节, 感人, 发人深省.',
    hoc: `${tbl(['Chức năng', 'Mẫu'], [['Giới thiệu', '这部电影讲述了一个…的故事。'], ['Nhân vật', '主人公是一个…'], ['Diễn biến', '故事一开始…后来…最后…'], ['Cảm nhận', '情节很感人 / 发人深省 / 值得一看']])}`,
    vocab: [
      w('讲述', 'jiǎngshù', 'kể về', '', ['这本书讲述了一个家庭的故事。', 'Zhè běn shū jiǎngshùle yí ge jiātíng de gùshi.', 'Cuốn sách kể về một gia đình.']),
      w('主人公', 'zhǔréngōng', 'nhân vật chính', '', ['主人公是一个医生。', 'Zhǔréngōng shì yí ge yīshēng.', 'Nhân vật chính là bác sĩ.']),
      w('情节', 'qíngjié', 'tình tiết, cốt truyện', '', ['情节很精彩。', 'Qíngjié hěn jīngcǎi.', 'Cốt truyện rất hay.']),
      w('感人', 'gǎnrén', 'cảm động', '', ['这部电影很感人。', 'Zhè bù diànyǐng hěn gǎnrén.', 'Phim này rất cảm động.']),
      w('发人深省', 'fā rén shēn xǐng', 'khiến người suy ngẫm', '', ['结局发人深省。', 'Jiéjú fā rén shēn xǐng.', 'Kết thúc khiến người suy ngẫm.']),
      w('结局', 'jiéjú', 'kết cục', '', ['我没想到是这样的结局。', 'Wǒ méi xiǎngdào shì zhèyàng de jiéjú.', 'Không ngờ kết cục như vậy.']),
      w('精彩', 'jīngcǎi', 'đặc sắc', '', ['表演很精彩。', 'Biǎoyǎn hěn jīngcǎi.', 'Biểu diễn đặc sắc.']),
      w('导演', 'dǎoyǎn', 'đạo diễn', '', ['导演很有名。', 'Dǎoyǎn hěn yǒumíng.', 'Đạo diễn rất nổi tiếng.']),
      w('改编', 'gǎibiān', 'chuyển thể', '', ['根据小说改编。', 'Gēnjù xiǎoshuō gǎibiān.', 'Chuyển thể từ tiểu thuyết.']),
      w('推荐', 'tuījiàn', 'giới thiệu, đề cử', '', ['我推荐你看这本书。', 'Wǒ tuījiàn nǐ kàn zhè běn shū.', 'Tôi giới thiệu bạn đọc cuốn này.'])
    ],
    qs: [
      ['mc', '主人公 nghĩa là?', 'nhân vật chính', ['chủ nhà', 'người công chính', 'tác giả'], 'zhǔréngōng.'],
      ['mc', '这部电影___了一个家庭的故事。', '讲述', ['讲话', '说明了过', '介绍着'], 'Kể về.'],
      ['mc', '根据小说___。(chuyển thể)', '改编', ['改变', '编辑', '改善'], 'gǎibiān.'],
      ['hear', '这部电影根据真实故事改编，结局非常感人。', 'Phim chuyển thể từ chuyện thật, kết thúc rất cảm động.', ['Phim hư cấu.', 'Kết thúc nhàm.', 'Phim hài.'], '真实 / 感人.'],
      ['hear', '情节有点儿慢，不过结局发人深省。', 'Tình tiết hơi chậm, nhưng kết thúc khiến người suy ngẫm.', ['Tình tiết rất nhanh.', 'Kết thúc vô nghĩa.', 'Phim dở hoàn toàn.'], 'Nhận xét hai mặt.'],
      ['order', 'Sắp xếp: “Tôi giới thiệu bạn đọc cuốn này.”', ['我', '推荐你', '看', '这本书。'], '我推荐你看这本书。']
    ],
    noi: [['这部电影讲述了一个感人的故事。', 'Zhè bù diànyǐng jiǎngshùle yí ge gǎnrén de gùshi. – Phim kể một câu chuyện cảm động.'], ['情节很精彩，值得一看。', 'Qíngjié hěn jīngcǎi, zhíde yí kàn. – Cốt truyện hay, đáng xem.'], ['我推荐你看这本书。', 'Wǒ tuījiàn nǐ kàn zhè běn shū. – Tôi giới thiệu bạn đọc cuốn này.']],
    hoithoai: {
      ctx: 'Đồng nghiệp hỏi em về một bộ phim Việt Nam đáng xem.', vai: 'Bạn hỏi, em giới thiệu (phim tự chọn, kể khái quát).', ai: '🎬 小于',
      luot: [
        T(['最近有什么好看的越南电影？', 'Zuìjìn yǒu shénme hǎokàn de Yuènán diànyǐng?', 'Gần đây có phim Việt nào hay?'], ['我推荐一部家庭电影，讲述了一个母亲为孩子付出的故事。', 'Wǒ tuījiàn yí bù jiātíng diànyǐng, jiǎngshùle yí ge mǔqīn wèi háizi fùchū de gùshi.', 'Tôi giới thiệu một phim gia đình, kể về người mẹ hy sinh vì con.', 'Giới thiệu.'], ['电影很多。', 'Diànyǐng hěn duō.', 'Mơ hồ.'], ['我不看电影了过。', 'Wǒ bú kàn diànyǐng le guo.', 'Sai.']),
        T(['情节怎么样？', 'Qíngjié zěnmeyàng?', 'Cốt truyện thế nào?'], ['一开始有点儿慢，后来越来越紧张，最后的结局特别感人。', 'Yì kāishǐ yǒudiǎnr màn, hòulái yuè lái yuè jǐnzhāng, zuìhòu de jiéjú tèbié gǎnrén.', 'Đầu hơi chậm, sau ngày càng căng, kết thúc rất cảm động.', 'Diễn biến.'], ['情节是主人公。', 'Qíngjié shì zhǔréngōng.', 'Vô nghĩa.'], ['我忘了。', 'Wǒ wàng le.', 'Né.']),
        T(['有中文字幕吗？', 'Yǒu Zhōngwén zìmù ma?', 'Có phụ đề tiếng Trung không?'], ['网上有中文字幕版，你可以找找看，值得一看。', 'Wǎngshang yǒu Zhōngwén zìmù bǎn, nǐ kěyǐ zhǎozhao kàn, zhíde yí kàn.', 'Trên mạng có bản phụ đề, bạn tìm thử, đáng xem.', 'Kết.'], ['没有，别看了。', 'Méiyǒu, bié kàn le.', 'Mâu thuẫn.'], ['字幕很感人。', 'Zìmù hěn gǎnrén.', 'Vô nghĩa.'])
      ], ket: 'Em đã giới thiệu phim mạch lạc, có cảm nhận.'
    },
    tom: ['讲述了 / 主人公 / 情节 / 结局', '感人 / 精彩 / 发人深省 / 值得一看'], nguphap: 'Kể tóm tắt tác phẩm', phatam: '情节 qíngjié, 结局 jiéjú',
    loi: ['Kể quá chi tiết, thiếu cảm nhận'], btvn: ['Tóm tắt 1 phim/sách em thích 150 chữ', 'Nói 1 phút giới thiệu', 'Luyện 🎤 3 câu']
  };

  const d21 = {
    n: 21, ten: plan[20].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Kiểm tra giai đoạn 3: văn hoá doanh nghiệp, hợp đồng, y tế, đô thị hoá, phương ngữ, phim sách.',
    hoc: `<h4>Tóm tắt giai đoạn 3</h4>${tbl(['Chủ đề', 'Cụm then chốt'], [['Văn hoá DN', '面子、关系、人情、私下'], ['Hợp đồng', '甲方、乙方、条款、违约、生效'], ['Y tế', '老龄化、医疗保险、负担'], ['Đô thị', '房价、买不起、差距、仍然'], ['Phương ngữ', '普通话、粤语、繁体字'], ['Phim sách', '讲述了、情节、结局、值得一看']])}`,
    qs: [['mc', '合同签字后___。', '生效', ['生气', '生产', '生活'], 'Hiệu lực.'], ['mc', 'Góp ý cho người Trung Quốc nên?', '私下说', ['当众说', '写在群里', '大声说'], '面子.']],
    noi: [['我们是长期合作伙伴。', 'Wǒmen shì chángqī hézuò huǒbàn. – Chúng ta là đối tác lâu dài.'], ['这部书值得一看。', 'Zhè bù shū zhíde yí kàn. – Cuốn này đáng đọc.']],
    hoithoai: {
      ctx: 'Mô phỏng: tiệc ký kết hợp đồng với đối tác.', vai: 'Đối tác nói, em ứng xử.', ai: '🤝 黄董',
      luot: [
        T(['合同条款都没问题了吧？', 'Hétong tiáokuǎn dōu méi wèntí le ba?', 'Điều khoản hợp đồng ổn hết rồi chứ?'], ['都确认了，签字后立即生效。', 'Dōu quèrèn le, qiānzì hòu lìjí shēngxiào.', 'Đã xác nhận hết, ký xong có hiệu lực ngay.', 'Pháp lý.'], ['条款很感人。', 'Tiáokuǎn hěn gǎnrén.', 'Vô nghĩa.'], ['我没看。', 'Wǒ méi kàn.', 'Thiếu trách nhiệm.']),
        T(['来，为合作干一杯！', 'Lái, wèi hézuò gān yì bēi!', 'Nào, cạn ly vì hợp tác!'], ['谢谢黄董给我们这个机会，我以茶代酒敬您！', 'Xièxie Huáng dǒng gěi wǒmen zhège jīhuì, wǒ yǐ chá dài jiǔ jìng nín!', 'Cảm ơn chủ tịch Hoàng cho cơ hội, tôi lấy trà thay rượu kính anh!', 'Lễ nghi.'], ['我不喝。', 'Wǒ bù hē.', 'Cộc.'], ['干杯违约。', 'Gānbēi wéiyuē.', 'Vô nghĩa.']),
        T(['以后有什么困难尽管找我。', 'Yǐhòu yǒu shénme kùnnan jǐnguǎn zhǎo wǒ.', 'Sau này có khó khăn cứ tìm tôi.'], ['太感谢了，这个人情我记住了。', 'Tài gǎnxiè le, zhège rénqíng wǒ jìzhù le.', 'Cảm ơn nhiều, ân tình này tôi ghi nhớ.', '人情.'], ['那你帮我买房吧。', 'Nà nǐ bāng wǒ mǎi fáng ba.', 'Lố.'], ['不用了。', 'Búyòng le.', 'Từ chối thiện ý.'])
      ], ket: 'Em đã hoàn thành trọn buổi ký kết!'
    },
    tom: ['Ôn giai đoạn 3', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn', phatam: 'Ôn giọng Nam – Bắc',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: học lại ngày yếu', 'Làm ⚡ Luyện nhanh', 'Viết 200 chữ về một vấn đề xã hội em quan tâm']
  };

  const d22 = {
    n: 22, ten: plan[21].ten, kinds: K,
    muc: 'Tranh luận: nêu lập trường, phản bác lập luận đối phương, chỉ ra lỗ hổng, tổng kết.',
    hoc: `${tbl(['Chức năng', 'Mẫu'], [['Lập trường', '我方认为… / 我坚持认为…'], ['Phản bác', '对方辩友的观点有一个漏洞…'], ['Yêu cầu chứng cứ', '请问您有什么证据？'], ['Nhượng bộ chiến thuật', '我承认…，但是…'], ['Tổng kết', '综上所述，我方的观点更有说服力。']])}`,
    vocab: [
      w('辩论', 'biànlùn', 'tranh luận', '', ['我们来辩论一下。', 'Wǒmen lái biànlùn yíxià.', 'Ta tranh luận một chút.']),
      w('立场', 'lìchǎng', 'lập trường', '', ['我的立场很明确。', 'Wǒ de lìchǎng hěn míngquè.', 'Lập trường tôi rõ ràng.']),
      w('漏洞', 'lòudòng', 'lỗ hổng', '', ['这个说法有漏洞。', 'Zhège shuōfǎ yǒu lòudòng.', 'Cách nói này có lỗ hổng.']),
      w('证据', 'zhèngjù', 'bằng chứng', '', ['你有证据吗？', 'Nǐ yǒu zhèngjù ma?', 'Bạn có bằng chứng không?']),
      w('承认', 'chéngrèn', 'thừa nhận', '', ['我承认这一点。', 'Wǒ chéngrèn zhè yì diǎn.', 'Tôi thừa nhận điểm này.']),
      w('说服力', 'shuōfúlì', 'sức thuyết phục', '', ['很有说服力。', 'Hěn yǒu shuōfúlì.', 'Rất có sức thuyết phục.']),
      w('反驳', 'fǎnbó', 'phản bác', '', ['我想反驳一下。', 'Wǒ xiǎng fǎnbó yíxià.', 'Tôi muốn phản bác.']),
      w('片面', 'piànmiàn', 'phiến diện', '', ['这个看法太片面了。', 'Zhège kànfǎ tài piànmiàn le.', 'Quan điểm này quá phiến diện.']),
      w('坚持', 'jiānchí', 'kiên định, giữ vững', '', ['我坚持我的观点。', 'Wǒ jiānchí wǒ de guāndiǎn.', 'Tôi giữ quan điểm của mình.']),
      w('对方', 'duìfāng', 'đối phương', '', ['尊重对方。', 'Zūnzhòng duìfāng.', 'Tôn trọng đối phương.'])
    ],
    qs: [
      ['mc', 'Chỉ ra điểm yếu lập luận?', '这个说法有一个漏洞。', ['你很笨。', '我不同意你这个人。', '别说了。'], 'Phê bình lập luận, không phê bình người.'],
      ['mc', '片面 nghĩa là?', 'phiến diện', ['một mặt giấy', 'toàn diện', 'bề mặt'], 'piànmiàn.'],
      ['mc', '我___这一点，但是…(thừa nhận)', '承认', ['承担', '坚持', '反驳'], 'chéngrèn.'],
      ['hear', '请问您有什么证据支持这个观点？', 'Xin hỏi anh có bằng chứng gì ủng hộ quan điểm này?', ['Tôi đồng ý.', 'Quan điểm rất hay.', 'Không cần bằng chứng.'], '证据.'],
      ['hear', '我承认网络有风险，但是不能因此否定它的价值。', 'Tôi thừa nhận mạng có rủi ro, nhưng không thể vì thế phủ nhận giá trị của nó.', ['Mạng không rủi ro.', 'Mạng vô giá trị.', 'Phải cấm mạng.'], 'Nhượng bộ chiến thuật.'],
      ['order', 'Sắp xếp: “Quan điểm này quá phiến diện.”', ['这个', '看法', '太片面', '了。'], '这个看法太片面了。']
    ],
    noi: [['我承认这一点，但是…', 'Wǒ chéngrèn zhè yì diǎn, dànshì… – Tôi thừa nhận điểm này, nhưng…'], ['请问您有什么证据？', 'Qǐngwèn nín yǒu shénme zhèngjù? – Xin hỏi anh có bằng chứng gì?'], ['这个看法有点儿片面。', 'Zhège kànfǎ yǒudiǎnr piànmiàn. – Quan điểm này hơi phiến diện.']],
    hoithoai: {
      ctx: 'Cuộc tranh luận: “Có nên cấm học sinh dùng điện thoại ở trường?” – em phản đối lệnh cấm.', vai: 'Đối phương lập luận, em phản bác.', ai: '🎙️ 对方辩手',
      luot: [
        T(['手机让学生分心，所以应该完全禁止。', 'Shǒujī ràng xuésheng fēnxīn, suǒyǐ yīnggāi wánquán jìnzhǐ.', 'Điện thoại làm học sinh mất tập trung, nên cấm hoàn toàn.'], ['我承认手机可能让人分心，但是"完全禁止"太片面了。', 'Wǒ chéngrèn shǒujī kěnéng ràng rén fēnxīn, dànshì "wánquán jìnzhǐ" tài piànmiàn le.', 'Tôi thừa nhận điện thoại có thể gây mất tập trung, nhưng "cấm hoàn toàn" quá phiến diện.', 'Nhượng bộ + phản bác.'], ['你说得不对，你很笨。', 'Nǐ shuō de bú duì, nǐ hěn bèn.', 'Công kích cá nhân.'], ['我同意，禁止吧。', 'Wǒ tóngyì, jìnzhǐ ba.', 'Bỏ lập trường.']),
        T(['可是很多学生上课玩游戏。', 'Kěshì hěn duō xuésheng shàngkè wán yóuxì.', 'Nhưng nhiều học sinh chơi game trong giờ.'], ['请问您有什么证据说明是"很多"？而且问题在管理，不在手机本身。', 'Qǐngwèn nín yǒu shénme zhèngjù shuōmíng shì "hěn duō"? Érqiě wèntí zài guǎnlǐ, bú zài shǒujī běnshēn.', 'Xin hỏi anh có bằng chứng gì là "nhiều"? Hơn nữa vấn đề ở quản lý, không ở bản thân điện thoại.', 'Đòi chứng cứ + chỉ lỗ hổng.'], ['游戏很好玩。', 'Yóuxì hěn hǎowán.', 'Lạc đề.'], ['我没有证据。', 'Wǒ méiyǒu zhèngjù.', 'Tự yếu.']),
        T(['那你们的方案是什么？', 'Nà nǐmen de fāng\'àn shì shénme?', 'Vậy phương án của các bạn?'], ['上课时统一保管，需要时用于学习。综上所述，管理比禁止更有效。', 'Shàngkè shí tǒngyī bǎoguǎn, xūyào shí yòng yú xuéxí. Zōng shàng suǒ shù, guǎnlǐ bǐ jìnzhǐ gèng yǒuxiào.', 'Trong giờ thu giữ tập trung, khi cần dùng để học. Tóm lại, quản lý hiệu quả hơn cấm.', 'Giải pháp + tổng kết.'], ['没有方案。', 'Méiyǒu fāng\'àn.', 'Yếu.'], ['随便用。', 'Suíbiàn yòng.', 'Thiếu thuyết phục.'])
      ], ket: 'Em đã tranh luận có lý lẽ và lịch sự.'
    },
    tom: ['我方认为 / 我承认…但是', '漏洞 / 证据 / 片面', '综上所述'], nguphap: 'Ngôn ngữ tranh luận', phatam: '漏洞 lòudòng, 片面 piànmiàn',
    loi: ['Công kích cá nhân', 'Không có chứng cứ'], btvn: ['Chuẩn bị 3 luận điểm cho 1 đề tranh luận', 'Tranh luận 5 phút với bạn', 'Luyện 🎤 3 câu']
  };

  const d23 = {
    n: 23, ten: plan[22].ten, kinds: K,
    muc: 'Phỏng vấn vị trí quản lý và đàm phán lương: nêu thành tích, kỳ vọng lương, phúc lợi, thời gian nhận việc.',
    hoc: `${tbl(['Tình huống', 'Mẫu'], [['Thành tích', '我曾带领团队把效率提高了百分之三十。'], ['Kỳ vọng lương', '根据我的经验和市场水平，我的期望薪资是…'], ['Hỏi phúc lợi', '请问公司有哪些福利？'], ['Thương lượng', '如果薪资方面有困难，能否在其他方面弥补？'], ['Nhận việc', '我需要一个月的时间交接工作。']])}`,
    vocab: [
      w('薪资', 'xīnzī', 'lương', '', ['期望薪资是多少？', 'Qīwàng xīnzī shì duōshao?', 'Mức lương mong muốn?']),
      w('期望', 'qīwàng', 'kỳ vọng', '', ['我的期望不高。', 'Wǒ de qīwàng bù gāo.', 'Kỳ vọng tôi không cao.']),
      w('福利', 'fúlì', 'phúc lợi', '', ['公司福利很好。', 'Gōngsī fúlì hěn hǎo.', 'Phúc lợi công ty tốt.']),
      w('带领', 'dàilǐng', 'dẫn dắt', '', ['带领团队。', 'Dàilǐng tuánduì.', 'Dẫn dắt đội nhóm.']),
      w('曾', 'céng', 'đã từng (văn viết)', '', ['我曾在银行工作。', 'Wǒ céng zài yínháng gōngzuò.', 'Tôi từng làm ở ngân hàng.']),
      w('弥补', 'míbǔ', 'bù đắp', '', ['弥补不足。', 'Míbǔ bùzú.', 'Bù đắp thiếu sót.']),
      w('交接', 'jiāojiē', 'bàn giao', '', ['工作交接需要两周。', 'Gōngzuò jiāojiē xūyào liǎng zhōu.', 'Bàn giao cần 2 tuần.']),
      w('职位', 'zhíwèi', 'chức vụ', '', ['应聘经理职位。', 'Yìngpìn jīnglǐ zhíwèi.', 'Ứng tuyển vị trí quản lý.']),
      w('成就', 'chéngjiù', 'thành tựu', '', ['最大的成就是什么？', 'Zuì dà de chéngjiù shì shénme?', 'Thành tựu lớn nhất là gì?']),
      w('发展空间', 'fāzhǎn kōngjiān', 'cơ hội phát triển', '', ['这个职位有发展空间。', 'Zhège zhíwèi yǒu fāzhǎn kōngjiān.', 'Vị trí này có cơ hội phát triển.'])
    ],
    qs: [
      ['mc', 'Nêu thành tích thuyết phục nhất?', '我曾带领团队把效率提高了百分之三十。', ['我很厉害。', '我做了很多事。', '我是最好的。'], 'Cụ thể + số liệu.'],
      ['mc', '福利 nghĩa là?', 'phúc lợi', ['phúc lành', 'lợi nhuận', 'tiền lãi'], 'fúlì.'],
      ['mc', '工作___需要两周。(bàn giao)', '交接', ['交给', '接受', '交流'], 'jiāojiē.'],
      ['hear', '如果薪资方面有困难，能否在其他方面弥补？', 'Nếu khó về lương, có thể bù đắp ở mặt khác không?', ['Tôi không cần lương.', 'Lương phải tăng gấp đôi.', 'Tôi từ chối.'], '弥补.'],
      ['hear', '我选择贵公司，主要是看中这个职位的发展空间。', 'Tôi chọn quý công ty chủ yếu vì cơ hội phát triển của vị trí.', ['Vì lương cao.', 'Vì gần nhà.', 'Vì bạn bè.'], '发展空间.'],
      ['order', 'Sắp xếp: “Tôi từng làm ở ngân hàng.”', ['我', '曾', '在银行', '工作。'], '我曾在银行工作。']
    ],
    noi: [['我曾带领团队把效率提高了百分之三十。', 'Wǒ céng dàilǐng tuánduì bǎ xiàolǜ tígāole bǎi fēn zhī sānshí. – Tôi từng dẫn dắt đội tăng hiệu suất 30%.'], ['请问公司有哪些福利？', 'Qǐngwèn gōngsī yǒu nǎxiē fúlì? – Xin hỏi công ty có những phúc lợi gì?'], ['我需要一个月交接工作。', 'Wǒ xūyào yí ge yuè jiāojiē gōngzuò. – Tôi cần một tháng bàn giao.']],
    hoithoai: {
      ctx: 'Vòng phỏng vấn cuối vị trí Trưởng phòng IT tại công ty Trung Quốc.', vai: 'Giám đốc nhân sự hỏi, em trả lời.', ai: '👩‍💼 HR总监',
      luot: [
        T(['你最大的成就是什么？', 'Nǐ zuì dà de chéngjiù shì shénme?', 'Thành tựu lớn nhất của bạn?'], ['我曾带领五人团队开发内部系统，把处理时间缩短了一半。', 'Wǒ céng dàilǐng wǔ rén tuánduì kāifā nèibù xìtǒng, bǎ chǔlǐ shíjiān suōduǎnle yíbàn.', 'Tôi từng dẫn đội 5 người phát triển hệ thống nội bộ, rút ngắn một nửa thời gian xử lý.', 'Cụ thể.'], ['成就很多。', 'Chéngjiù hěn duō.', 'Mơ hồ.'], ['我没有成就。', 'Wǒ méiyǒu chéngjiù.', 'Tự hạ.']),
        T(['你的期望薪资是多少？', 'Nǐ de qīwàng xīnzī shì duōshao?', 'Lương mong muốn?'], ['根据我的经验和市场水平，我希望在四千到五千美元之间。', 'Gēnjù wǒ de jīngyàn hé shìchǎng shuǐpíng, wǒ xīwàng zài sì qiān dào wǔ qiān Měiyuán zhī jiān.', 'Dựa trên kinh nghiệm và mặt bằng thị trường, tôi mong 4.000–5.000 USD. (minh hoạ)', 'Có căn cứ, khoảng giá.'], ['越多越好。', 'Yuè duō yuè hǎo.', 'Thiếu chuyên nghiệp.'], ['随便给。', 'Suíbiàn gěi.', 'Tự hạ giá.']),
        T(['我们的预算是四千，你能接受吗？', 'Wǒmen de yùsuàn shì sì qiān, nǐ néng jiēshòu ma?', 'Ngân sách là 4.000, bạn chấp nhận không?'], ['可以考虑，如果能在培训和年终奖方面弥补就更好了。', 'Kěyǐ kǎolǜ, rúguǒ néng zài péixùn hé niánzhōngjiǎng fāngmiàn míbǔ jiù gèng hǎo le.', 'Có thể cân nhắc, nếu bù đắp ở đào tạo và thưởng cuối năm thì tốt hơn.', 'Thương lượng mềm.'], ['不行，我走了。', 'Bù xíng, wǒ zǒu le.', 'Cứng.'], ['好，三千也行。', 'Hǎo, sān qiān yě xíng.', 'Tự hạ giá.'])
      ], ket: 'Em đã phỏng vấn và đàm phán lương chuyên nghiệp.'
    },
    tom: ['曾 / 带领 / 成就', '期望薪资 / 福利 / 弥补', '交接'], nguphap: 'Phỏng vấn cấp cao', phatam: '薪资 xīnzī, 福利 fúlì',
    loi: ['Nêu lương không căn cứ', 'Tự hạ giá'], btvn: ['Viết 3 thành tích có số liệu', 'Tập đàm phán lương 6 lượt', 'Luyện 🎤 3 câu']
  };

  const d24 = {
    n: 24, ten: plan[23].ten, kinds: K,
    muc: 'Xử lý khủng hoảng truyền thông: thông cáo xin lỗi, nhận trách nhiệm, biện pháp khắc phục, trả lời báo chí.',
    hoc: `${tbl(['Phần', 'Mẫu'], [['Xin lỗi', '对于此次事件给客户带来的不便，我们深表歉意。'], ['Nhận trách nhiệm', '我们对此负全部责任。'], ['Khắc phục', '我们已经采取了以下措施：…'], ['Cam kết', '我们将加强管理，杜绝类似事件再次发生。'], ['Trả lời báo chí', '目前调查还在进行中，结果出来后会第一时间公布。']])}`,
    vocab: [
      w('事件', 'shìjiàn', 'sự kiện, sự cố', '', ['此次事件。', 'Cǐ cì shìjiàn.', 'Sự cố lần này.']),
      w('深表歉意', 'shēn biǎo qiànyì', 'vô cùng xin lỗi', '', ['我们深表歉意。', 'Wǒmen shēn biǎo qiànyì.', 'Chúng tôi vô cùng xin lỗi.']),
      w('责任', 'zérèn', 'trách nhiệm', '', ['我们负全部责任。', 'Wǒmen fù quánbù zérèn.', 'Chúng tôi chịu toàn bộ trách nhiệm.']),
      w('措施', 'cuòshī', 'biện pháp', '', ['采取措施。', 'Cǎiqǔ cuòshī.', 'Áp dụng biện pháp.']),
      w('杜绝', 'dùjué', 'chấm dứt triệt để', '', ['杜绝类似事件。', 'Dùjué lèisì shìjiàn.', 'Chấm dứt sự cố tương tự.']),
      w('类似', 'lèisì', 'tương tự', '', ['类似的问题。', 'Lèisì de wèntí.', 'Vấn đề tương tự.']),
      w('调查', 'diàochá', 'điều tra', '', ['调查还在进行中。', 'Diàochá hái zài jìnxíng zhōng.', 'Điều tra vẫn đang tiến hành.']),
      w('公布', 'gōngbù', 'công bố', '', ['第一时间公布。', 'Dì yī shíjiān gōngbù.', 'Công bố ngay lập tức.']),
      w('媒体', 'méitǐ', 'truyền thông', '', ['接受媒体采访。', 'Jiēshòu méitǐ cǎifǎng.', 'Trả lời phỏng vấn báo chí.']),
      w('透明', 'tòumíng', 'minh bạch', '', ['信息要公开透明。', 'Xìnxī yào gōngkāi tòumíng.', 'Thông tin phải công khai minh bạch.'])
    ],
    qs: [
      ['mc', 'Câu xin lỗi trong thông cáo chính thức?', '对于此次事件，我们深表歉意。', ['不好意思啦。', '这不是我们的错。', '没什么大不了。'], 'Trang trọng.'],
      ['mc', '杜绝 nghĩa là?', 'chấm dứt triệt để', ['từ chối', 'tuyệt vọng', 'giảm bớt'], 'dùjué.'],
      ['mc', 'Trả lời báo chí khi chưa có kết quả?', '目前调查还在进行中，结果出来后会第一时间公布。', ['无可奉告，走开。', '是员工的错。', '我们不知道发生了什么。'], 'Minh bạch, thận trọng.'],
      ['hear', '我们已经采取措施，并将加强管理。', 'Chúng tôi đã áp dụng biện pháp và sẽ tăng cường quản lý.', ['Chưa làm gì.', 'Sẽ giảm quản lý.', 'Không có biện pháp.'], '措施.'],
      ['hear', '信息要公开透明，才能重新赢得客户的信任。', 'Thông tin phải công khai minh bạch mới giành lại lòng tin khách.', ['Che giấu thông tin.', 'Không cần lòng tin.', 'Khách đã tin.'], '透明.'],
      ['order', 'Sắp xếp: “Chúng tôi chịu toàn bộ trách nhiệm.”', ['我们', '负', '全部', '责任。'], '我们负全部责任。']
    ],
    noi: [['对此我们深表歉意。', 'Duì cǐ wǒmen shēn biǎo qiànyì. – Về việc này chúng tôi vô cùng xin lỗi.'], ['我们已经采取了措施。', 'Wǒmen yǐjīng cǎiqǔle cuòshī. – Chúng tôi đã áp dụng biện pháp.'], ['结果出来后会第一时间公布。', 'Jiéguǒ chūlai hòu huì dì yī shíjiān gōngbù. – Có kết quả sẽ công bố ngay.']],
    hoithoai: {
      ctx: 'Hệ thống thanh toán gián đoạn 3 tiếng; em là người phát ngôn trả lời phóng viên Trung Quốc.', vai: 'Phóng viên hỏi, em trả lời.', ai: '🎙️ 记者',
      luot: [
        T(['昨天系统中断了三个小时，原因是什么？', 'Zuótiān xìtǒng zhōngduànle sān ge xiǎoshí, yuányīn shì shénme?', 'Hôm qua hệ thống gián đoạn 3 tiếng, nguyên nhân?'], ['首先，对于给客户带来的不便，我们深表歉意。初步判断是服务器故障，详细原因还在调查中。', 'Shǒuxiān, duìyú gěi kèhù dài lái de búbiàn, wǒmen shēn biǎo qiànyì. Chūbù pànduàn shì fúwùqì gùzhàng, xiángxì yuányīn hái zài diàochá zhōng.', 'Trước hết, chúng tôi vô cùng xin lỗi vì bất tiện. Sơ bộ là lỗi máy chủ, nguyên nhân chi tiết đang điều tra.', 'Xin lỗi + thông tin thận trọng.'], ['不是我们的问题。', 'Bú shì wǒmen de wèntí.', 'Đổ lỗi.'], ['无可奉告。', 'Wú kě fènggào.', 'Né tránh.']),
        T(['客户的资金安全吗？', 'Kèhù de zījīn ānquán ma?', 'Tiền của khách có an toàn không?'], ['请大家放心，所有客户的资金和数据都是安全的。', 'Qǐng dàjiā fàngxīn, suǒyǒu kèhù de zījīn hé shùjù dōu shì ānquán de.', 'Mọi người yên tâm, toàn bộ tiền và dữ liệu khách đều an toàn.', 'Trấn an rõ.'], ['可能不安全。', 'Kěnéng bù ānquán.', 'Gây hoảng (khi chưa có căn cứ).'], ['不知道。', 'Bù zhīdào.', 'Thiếu trách nhiệm.']),
        T(['以后怎么保证不再发生？', 'Yǐhòu zěnme bǎozhèng bú zài fāshēng?', 'Sau này đảm bảo không tái diễn thế nào?'], ['我们已经增加了备用服务器，并将加强监控，杜绝类似事件。', 'Wǒmen yǐjīng zēngjiāle bèiyòng fúwùqì, bìng jiāng jiāqiáng jiānkòng, dùjué lèisì shìjiàn.', 'Đã bổ sung máy chủ dự phòng và sẽ tăng giám sát, chấm dứt sự cố tương tự.', 'Biện pháp + cam kết.'], ['我们保证永远不会发生。', 'Wǒmen bǎozhèng yǒngyuǎn bú huì fāshēng.', 'Hứa quá mức.'], ['这很难说。', 'Zhè hěn nán shuō.', 'Thiếu cam kết.'])
      ], ket: 'Em đã xử lý khủng hoảng truyền thông chuyên nghiệp.'
    },
    tom: ['深表歉意 / 负责任', '采取措施 / 杜绝类似事件', '透明 / 第一时间公布'], nguphap: 'Văn phong thông cáo', phatam: '杜绝 dùjué, 措施 cuòshī',
    loi: ['Đổ lỗi', 'Hứa tuyệt đối', 'Né tránh'], btvn: ['Viết thông cáo xin lỗi 200 chữ', 'Tập trả lời 5 câu hỏi báo chí', 'Luyện 🎤 3 câu']
  };

  const d25 = {
    n: 25, ten: plan[24].ten, kinds: K,
    muc: 'Học thêm 8 thành ngữ và làm quen yết hậu ngữ (歇后语) – lối nói ví von vui.',
    hoc: `${tbl(['Thành ngữ', 'Nghĩa'], [['画蛇添足', 'vẽ rắn thêm chân – làm thừa'], ['对牛弹琴', 'đàn gảy tai trâu'], ['亡羊补牢', 'mất bò mới lo làm chuồng (vẫn chưa muộn)'], ['入乡随俗', 'nhập gia tuỳ tục']])}
      ${tbl(['Yết hậu ngữ', 'Nghĩa'], [['竹篮打水——一场空', 'giỏ tre múc nước – công cốc'], ['外甥打灯笼——照舅（照旧）', 'như cũ (chơi chữ)']])}`,
    vocab: [
      w('画蛇添足', 'huà shé tiān zú', 'vẽ rắn thêm chân', '', ['这句话加上就是画蛇添足。', 'Zhè jù huà jiā shang jiù shì huà shé tiān zú.', 'Thêm câu này là thừa.']),
      w('对牛弹琴', 'duì niú tán qín', 'đàn gảy tai trâu', '', ['跟他讲道理是对牛弹琴。', 'Gēn tā jiǎng dàolǐ shì duì niú tán qín.', 'Nói lý với anh ta là đàn gảy tai trâu.']),
      w('亡羊补牢', 'wáng yáng bǔ láo', 'mất bò mới làm chuồng (vẫn kịp)', '', ['亡羊补牢，为时不晚。', 'Wáng yáng bǔ láo, wéi shí bù wǎn.', 'Sửa sai vẫn chưa muộn.']),
      w('入乡随俗', 'rù xiāng suí sú', 'nhập gia tuỳ tục', '', ['到了中国要入乡随俗。', 'Dàole Zhōngguó yào rù xiāng suí sú.', 'Đến Trung Quốc phải nhập gia tuỳ tục.']),
      w('一场空', 'yì chǎng kōng', 'công cốc', '', ['竹篮打水一场空。', 'Zhúlán dǎ shuǐ yì chǎng kōng.', 'Giỏ tre múc nước, công cốc.']),
      w('脚踏实地', 'jiǎo tà shí dì', 'chân đạp đất (thực tế)', '', ['做事要脚踏实地。', 'Zuò shì yào jiǎo tà shí dì.', 'Làm việc phải thực tế.']),
      w('精益求精', 'jīng yì qiú jīng', 'đã tốt còn muốn tốt hơn', '', ['对质量精益求精。', 'Duì zhìliàng jīng yì qiú jīng.', 'Với chất lượng luôn cầu tiến.']),
      w('取长补短', 'qǔ cháng bǔ duǎn', 'lấy dài bù ngắn', '', ['互相学习，取长补短。', 'Hùxiāng xuéxí, qǔ cháng bǔ duǎn.', 'Học hỏi nhau, bổ sung cho nhau.']),
      w('歇后语', 'xiēhòuyǔ', 'yết hậu ngữ', '', ['中文的歇后语很有意思。', 'Zhōngwén de xiēhòuyǔ hěn yǒu yìsi.', 'Yết hậu ngữ tiếng Trung rất thú vị.']),
      w('为时不晚', 'wéi shí bù wǎn', 'chưa muộn', '', ['现在开始，为时不晚。', 'Xiànzài kāishǐ, wéi shí bù wǎn.', 'Bắt đầu bây giờ vẫn chưa muộn.'])
    ],
    qs: [
      ['mc', 'Lỗi xảy ra rồi, giờ sửa quy trình – thành ngữ nào hợp?', '亡羊补牢', ['画蛇添足', '对牛弹琴', '一帆风顺'], 'Sửa sai chưa muộn.'],
      ['mc', 'Báo cáo đã đủ, thêm đoạn thừa – gọi là?', '画蛇添足', ['精益求精', '取长补短', '入乡随俗'], 'Làm thừa.'],
      ['mc', '到了国外要___。', '入乡随俗', ['对牛弹琴', '画蛇添足', '一场空'], 'Nhập gia tuỳ tục.'],
      ['hear', '两个团队应该互相学习，取长补短。', 'Hai đội nên học hỏi nhau, bổ sung cho nhau.', ['Hai đội nên cạnh tranh.', 'Một đội thay đội kia.', 'Không cần học.'], '取长补短.'],
      ['hear', '没有计划就开始，最后只会竹篮打水一场空。', 'Không kế hoạch mà bắt đầu, cuối cùng chỉ công cốc.', ['Sẽ thành công lớn.', 'Cần giỏ tre.', 'Kế hoạch thừa.'], '一场空.'],
      ['order', 'Sắp xếp: “Bắt đầu bây giờ vẫn chưa muộn.”', ['现在', '开始，', '为时', '不晚。'], '现在开始，为时不晚。']
    ],
    noi: [['亡羊补牢，为时不晚。', 'Wáng yáng bǔ láo, wéi shí bù wǎn. – Sửa sai vẫn chưa muộn.'], ['做事要脚踏实地。', 'Zuò shì yào jiǎo tà shí dì. – Làm việc phải thực tế.'], ['我们互相学习，取长补短。', 'Wǒmen hùxiāng xuéxí, qǔ cháng bǔ duǎn. – Ta học hỏi nhau, bổ sung cho nhau.']],
    hoithoai: {
      ctx: 'Họp rút kinh nghiệm sau sự cố dự án.', vai: 'Sếp hỏi, em dùng thành ngữ đúng chỗ.', ai: '👨‍💼 总监',
      luot: [
        T(['这次失误，大家有什么看法？', 'Zhè cì shīwù, dàjiā yǒu shénme kànfǎ?', 'Sai sót lần này mọi người thấy sao?'], ['虽然出了问题，但亡羊补牢，为时不晚，我们马上改进流程。', 'Suīrán chūle wèntí, dàn wáng yáng bǔ láo, wéi shí bù wǎn, wǒmen mǎshàng gǎijìn liúchéng.', 'Dù có sự cố, nhưng sửa vẫn chưa muộn, ta cải tiến quy trình ngay.', 'Thành ngữ đúng.'], ['我们画蛇添足。', 'Wǒmen huà shé tiān zú.', 'Sai ngữ cảnh.'], ['对牛弹琴吧。', 'Duì niú tán qín ba.', 'Xúc phạm.']),
        T(['另一个团队做得比较好。', 'Lìng yí ge tuánduì zuò de bǐjiào hǎo.', 'Đội kia làm khá tốt.'], ['我们可以向他们学习，取长补短。', 'Wǒmen kěyǐ xiàng tāmen xuéxí, qǔ cháng bǔ duǎn.', 'Ta có thể học họ, lấy dài bù ngắn.', 'Thành ngữ đúng.'], ['他们一场空。', 'Tāmen yì chǎng kōng.', 'Sai.'], ['入乡随俗。', 'Rù xiāng suí sú.', 'Lạc.']),
        T(['以后要注意什么？', 'Yǐhòu yào zhùyì shénme?', 'Sau này chú ý gì?'], ['做事要脚踏实地，对质量精益求精。', 'Zuò shì yào jiǎo tà shí dì, duì zhìliàng jīng yì qiú jīng.', 'Làm việc thực tế, với chất lượng luôn cầu tiến.', 'Thành ngữ cam kết.'], ['半途而废。', 'Bàn tú ér fèi.', 'Ngược.'], ['三心二意。', 'Sān xīn èr yì.', 'Ngược.'])
      ], ket: 'Em đã dùng thành ngữ đúng ngữ cảnh trong họp.'
    },
    tom: ['8 thành ngữ mới', 'Yết hậu ngữ: vế trước ví von – vế sau giải nghĩa'], nguphap: 'Thành ngữ, yết hậu ngữ', phatam: 'Đọc thành ngữ đều nhịp 2–2',
    loi: ['Dùng thành ngữ chê người trước mặt'], btvn: ['Đặt câu với 8 thành ngữ', 'Tìm 3 yết hậu ngữ khác', 'Luyện 🎤 3 câu']
  };

  const d26 = {
    n: 26, ten: plan[25].ten, kinds: K,
    muc: 'Đọc và viết văn bản hành chính: 通知 (thông báo), 公告 (công bố), 请示 (tờ trình); cấu trúc và cụm chuẩn.',
    hoc: `${tbl(['Phần', 'Mẫu 通知'], [['Tiêu đề', '关于国庆节放假安排的通知'], ['Đối tượng', '各部门：'], ['Nội dung', '根据国家规定，现将放假安排通知如下：'], ['Yêu cầu', '请各部门做好工作安排。'], ['Ký', '行政部 二〇二六年九月二十日']])}
      ${tip('🔑 <b>现将…如下</b> = nay xin thông báo… như sau; <b>特此通知</b> = nay thông báo.')}`,
    vocab: [
      w('通知', 'tōngzhī', 'thông báo', '', ['放假通知。', 'Fàngjià tōngzhī.', 'Thông báo nghỉ lễ.']),
      w('公告', 'gōnggào', 'công bố, thông cáo', '', ['发布公告。', 'Fābù gōnggào.', 'Phát hành thông cáo.']),
      w('各部门', 'gè bùmén', 'các phòng ban', '', ['各部门注意。', 'Gè bùmén zhùyì.', 'Các phòng ban chú ý.']),
      w('如下', 'rúxià', 'như sau', '', ['安排如下。', 'Ānpái rúxià.', 'Sắp xếp như sau.']),
      w('特此通知', 'tècǐ tōngzhī', 'nay thông báo', '', ['特此通知。', 'Tècǐ tōngzhī.', 'Nay thông báo.']),
      w('放假', 'fàngjià', 'nghỉ lễ', '', ['国庆节放假七天。', 'Guóqìngjié fàngjià qī tiān.', 'Quốc khánh nghỉ 7 ngày.']),
      w('执行', 'zhíxíng', 'thực hiện, thi hành', '', ['严格执行。', 'Yángé zhíxíng.', 'Thực hiện nghiêm.']),
      w('发布', 'fābù', 'phát hành, công bố', '', ['今天发布新规定。', 'Jīntiān fābù xīn guīdìng.', 'Hôm nay ban hành quy định mới.']),
      w('自…起', 'zì… qǐ', 'kể từ…', '', ['自下月一日起执行。', 'Zì xià yuè yī rì qǐ zhíxíng.', 'Thực hiện từ ngày 1 tháng sau.']),
      w('行政部', 'xíngzhèngbù', 'phòng hành chính', '', ['请联系行政部。', 'Qǐng liánxì xíngzhèngbù.', 'Vui lòng liên hệ phòng hành chính.'])
    ],
    qs: [
      ['mc', 'Câu kết thông báo chuẩn?', '特此通知。', ['就这样吧。', '再见。', '拜拜。'], 'Cụm chuẩn.'],
      ['mc', '自下月一日___执行。', '起', ['开始了', '从', '到'], '自…起.'],
      ['mc', 'Tiêu đề thông báo đúng?', '关于国庆节放假安排的通知', ['国庆节放假了！', '通知国庆节', '放假的通知关于'], 'Cấu trúc 关于…的通知.'],
      ['hear', '根据公司规定，现将年底考核安排通知如下。', 'Theo quy định công ty, nay thông báo sắp xếp đánh giá cuối năm như sau.', ['Huỷ đánh giá.', 'Đánh giá đầu năm.', 'Không có quy định.'], '现将…如下.'],
      ['hear', '新规定自十二月一日起执行，请各部门严格遵守。', 'Quy định mới thực hiện từ 1/12, các phòng ban tuân thủ nghiêm.', ['Từ 1/11.', 'Không bắt buộc.', 'Chỉ một phòng.'], '自…起.'],
      ['order', 'Sắp xếp: “Vui lòng liên hệ phòng hành chính.”', ['请', '联系', '行政部', '。'], '请联系行政部。']
    ],
    noi: [['现将安排通知如下。', 'Xiàn jiāng ānpái tōngzhī rúxià. – Nay thông báo sắp xếp như sau.'], ['自下月一日起执行。', 'Zì xià yuè yī rì qǐ zhíxíng. – Thực hiện từ ngày 1 tháng sau.'], ['特此通知。', 'Tècǐ tōngzhī. – Nay thông báo.']],
    hoithoai: {
      ctx: 'Sếp nhờ em soạn thông báo nghỉ Tết gửi nhân viên người Trung Quốc.', vai: 'Sếp hỏi, em trình bày bản nháp.', ai: '👔 行政主管',
      luot: [
        T(['标题怎么写？', 'Biāotí zěnme xiě?', 'Tiêu đề viết thế nào?'], ['《关于二〇二七年春节放假安排的通知》。', '"Guānyú èr líng èr qī nián Chūnjié fàngjià ānpái de tōngzhī".', '"Thông báo về sắp xếp nghỉ Tết 2027".', 'Chuẩn.'], ['春节放假啦！', 'Chūnjié fàngjià la!', 'Khẩu ngữ.'], ['通知关于放假。', 'Tōngzhī guānyú fàngjià.', 'Sai trật tự.']),
        T(['正文开头呢？', 'Zhèngwén kāitóu ne?', 'Mở đầu nội dung?'], ['各部门：根据国家规定，现将放假安排通知如下：', 'Gè bùmén: Gēnjù guójiā guīdìng, xiàn jiāng fàngjià ānpái tōngzhī rúxià:', 'Các phòng ban: Theo quy định nhà nước, nay thông báo lịch nghỉ như sau:', 'Cụm chuẩn.'], ['大家好，我们要放假了。', 'Dàjiā hǎo, wǒmen yào fàngjià le.', 'Khẩu ngữ.'], ['如下放假。', 'Rúxià fàngjià.', 'Sai.']),
        T(['结尾呢？', 'Jiéwěi ne?', 'Kết thúc?'], ['请各部门提前做好工作安排。特此通知。行政部。', 'Qǐng gè bùmén tíqián zuò hǎo gōngzuò ānpái. Tècǐ tōngzhī. Xíngzhèngbù.', 'Các phòng ban sắp xếp công việc trước. Nay thông báo. Phòng Hành chính.', 'Kết chuẩn.'], ['拜拜大家。', 'Bàibai dàjiā.', 'Khẩu ngữ.'], ['就这样。', 'Jiù zhèyàng.', 'Thiếu trang trọng.'])
      ], ket: 'Em đã soạn thông báo hành chính đúng thể thức.'
    },
    tom: ['关于…的通知', '现将…如下', '自…起 / 特此通知'], nguphap: 'Thể thức văn bản hành chính', phatam: '特此 tècǐ',
    loi: ['Dùng khẩu ngữ trong văn bản hành chính'], btvn: ['Viết 1 thông báo nghỉ lễ hoàn chỉnh', 'Viết 1 thông báo bảo trì hệ thống', 'Luyện 🎤 3 câu']
  };

  const d27 = {
    n: 27, ten: plan[26].ten, kinds: K,
    muc: 'Luyện dạng viết HSK 5–6: viết đoạn 80 chữ dùng từ cho trước (HSK 5) và tóm tắt (缩写) bài đọc thành ~400 chữ (HSK 6).',
    hoc: `${tbl(['Bước', 'Cách làm (缩写)'], [['1. Đọc 10 phút', 'Nắm: ai, ở đâu, chuyện gì, kết quả, ý nghĩa'], ['2. Ghi khung', 'Mở đầu – diễn biến – cao trào – kết thúc'], ['3. Viết lại', 'Dùng câu của mình, bỏ chi tiết phụ, giữ nhân vật và trình tự'], ['4. Đặt tiêu đề', 'Ngắn, nêu chủ đề'], ['5. Soát', 'Chữ sai, dấu câu, số chữ']])}
      ${tip('📝 Không cần nhớ nguyên văn; giám khảo chấm <b>nội dung đầy đủ – mạch lạc – ít lỗi</b>.')}`,
    vocab: [
      w('缩写', 'suōxiě', 'viết tóm tắt', '', ['缩写一篇文章。', 'Suōxiě yì piān wénzhāng.', 'Tóm tắt một bài văn.']),
      w('标题', 'biāotí', 'tiêu đề', '', ['加一个标题。', 'Jiā yí ge biāotí.', 'Thêm tiêu đề.']),
      w('篇', 'piān', 'bài (lượng từ)', '', ['一篇文章。', 'Yì piān wénzhāng.', 'Một bài văn.']),
      w('文章', 'wénzhāng', 'bài văn', '', ['这篇文章很长。', 'Zhè piān wénzhāng hěn cháng.', 'Bài này dài.']),
      w('错别字', 'cuòbiézì', 'chữ viết sai', '', ['检查错别字。', 'Jiǎnchá cuòbiézì.', 'Soát chữ viết sai.']),
      w('保留', 'bǎoliú', 'giữ lại', '', ['保留原意。', 'Bǎoliú yuányì.', 'Giữ ý gốc.']),
      w('省略', 'shěnglüè', 'lược bỏ', '', ['省略细节。', 'Shěnglüè xìjié.', 'Lược bỏ chi tiết.']),
      w('细节', 'xìjié', 'chi tiết', '', ['细节很重要。', 'Xìjié hěn zhòngyào.', 'Chi tiết quan trọng.']),
      w('字数', 'zìshù', 'số chữ', '', ['字数在四百左右。', 'Zìshù zài sìbǎi zuǒyòu.', 'Số chữ khoảng 400.']),
      w('通顺', 'tōngshùn', 'trôi chảy, mạch lạc', '', ['句子要通顺。', 'Jùzi yào tōngshùn.', 'Câu phải trôi chảy.'])
    ],
    qs: [
      ['mc', 'Khi 缩写 nên?', 'Giữ tình tiết chính, lược chi tiết phụ', ['Chép nguyên văn', 'Thêm ý kiến cá nhân dài', 'Bỏ nhân vật chính'], 'Nguyên tắc.'],
      ['mc', '一___文章', '篇', ['本', '张', '条'], 'Lượng từ.'],
      ['mc', '通顺 nghĩa là?', 'trôi chảy, mạch lạc', ['thông minh', 'thuận lợi', 'đi qua'], 'tōngshùn.'],
      ['hear', '缩写时要保留原文的主要情节，省略不重要的细节。', 'Khi tóm tắt giữ tình tiết chính, lược chi tiết không quan trọng.', ['Giữ mọi chi tiết.', 'Bỏ tình tiết chính.', 'Viết bài mới.'], '保留 / 省略.'],
      ['hear', '字数在四百字左右，还要加一个标题。', 'Khoảng 400 chữ, phải thêm tiêu đề.', ['40 chữ.', 'Không cần tiêu đề.', '4000 chữ.'], '四百.'],
      ['order', 'Sắp xếp: “Câu phải trôi chảy.”', ['句子', '要', '通顺', '。'], '句子要通顺。']
    ],
    noi: [['缩写要保留主要情节。', 'Suōxiě yào bǎoliú zhǔyào qíngjié. – Tóm tắt phải giữ tình tiết chính.'], ['省略不重要的细节。', 'Shěnglüè bú zhòngyào de xìjié. – Lược bỏ chi tiết không quan trọng.'], ['句子要通顺。', 'Jùzi yào tōngshùn. – Câu phải trôi chảy.']],
    hoithoai: {
      ctx: 'Gia sư luyện thi HSK 6 hỏi em cách làm phần viết.', vai: 'Gia sư hỏi, em trả lời chiến lược.', ai: '👨‍🏫 辅导老师',
      luot: [
        T(['阅读那篇文章的时候，你注意什么？', 'Yuèdú nà piān wénzhāng de shíhou, nǐ zhùyì shénme?', 'Khi đọc bài đó em chú ý gì?'], ['我注意人物、事情的经过和结果。', 'Wǒ zhùyì rénwù, shìqing de jīngguò hé jiéguǒ.', 'Em chú ý nhân vật, diễn biến và kết quả.', 'Chiến lược.'], ['我背每一个字。', 'Wǒ bèi měi yí ge zì.', 'Không khả thi.'], ['我不看。', 'Wǒ bú kàn.', 'Sai.']),
        T(['写的时候呢？', 'Xiě de shíhou ne?', 'Khi viết thì sao?'], ['保留主要情节，用自己的话写，省略不重要的细节。', 'Bǎoliú zhǔyào qíngjié, yòng zìjǐ de huà xiě, shěnglüè bú zhòngyào de xìjié.', 'Giữ tình tiết chính, viết bằng lời mình, lược chi tiết phụ.', 'Nguyên tắc.'], ['加很多我的看法。', 'Jiā hěn duō wǒ de kànfǎ.', 'Sai yêu cầu.'], ['写一百字就够了。', 'Xiě yì bǎi zì jiù gòu le.', 'Thiếu chữ.']),
        T(['最后检查什么？', 'Zuìhòu jiǎnchá shénme?', 'Cuối cùng kiểm tra gì?'], ['检查错别字、标点和字数，再加一个标题。', 'Jiǎnchá cuòbiézì, biāodiǎn hé zìshù, zài jiā yí ge biāotí.', 'Soát lỗi chữ, dấu câu, số chữ, rồi thêm tiêu đề.', 'Soát.'], ['不用检查。', 'Búyòng jiǎnchá.', 'Mất điểm.'], ['只检查标题。', 'Zhǐ jiǎnchá biāotí.', 'Thiếu.'])
      ], ket: 'Em đã nắm chiến lược viết HSK 5–6.'
    },
    tom: ['5 bước 缩写', 'HSK 5: đoạn 80 chữ', 'HSK 6: tóm tắt ~400 chữ'], nguphap: 'Kỹ năng viết HSK 5–6', phatam: '缩写 suōxiě',
    loi: ['Chép nguyên văn', 'Thêm ý kiến dài'], btvn: ['Đọc 1 câu chuyện 1000 chữ, tóm tắt 400 chữ', 'Viết đoạn 80 chữ với 5 từ cho trước', 'Luyện 🎤 3 câu']
  };

  const LK = ['listen', 'listenPy', 'listen', 'meaning', 'pinyin'];
  const d28 = {
    n: 28, ten: plan[27].ten, tong: 1, kt: { n: 20, min: 20 }, kinds: LK,
    muc: 'Nghe bài giảng, phỏng vấn dài: ghi chú theo ý, nhận diện quan điểm, từ chuyển ý, số liệu.',
    hoc: `${tbl(['Tín hiệu', 'Ý nghĩa'], [['我想谈三个问题', 'sắp liệt kê – ghi 1, 2, 3'], ['然而 / 不过', 'chuyển ý – ý quan trọng sau đó'], ['换句话说', 'nói cách khác – diễn giải lại'], ['总的来说', 'kết luận']])}
      ${tip('🎧 Ghi chú bằng từ khoá + mũi tên, không ghi câu đầy đủ.')}`,
    vocab: [
      w('然而', 'rán\'ér', 'tuy nhiên', '', ['然而，情况并不乐观。', 'Rán\'ér, qíngkuàng bìng bú lèguān.', 'Tuy nhiên tình hình không lạc quan.']),
      w('换句话说', 'huàn jù huà shuō', 'nói cách khác', '', ['换句话说，我们需要改变。', 'Huàn jù huà shuō, wǒmen xūyào gǎibiàn.', 'Nói cách khác, ta cần thay đổi.']),
      w('总的来说', 'zǒng de lái shuō', 'nhìn chung', '', ['总的来说，效果不错。', 'Zǒng de lái shuō, xiàoguǒ búcuò.', 'Nhìn chung hiệu quả tốt.']),
      w('乐观', 'lèguān', 'lạc quan', '', ['他很乐观。', 'Tā hěn lèguān.', 'Anh ấy rất lạc quan.']),
      w('嘉宾', 'jiābīn', 'khách mời', '', ['今天的嘉宾是…', 'Jīntiān de jiābīn shì…', 'Khách mời hôm nay là…']),
      w('采访', 'cǎifǎng', 'phỏng vấn (báo chí)', '', ['接受采访。', 'Jiēshòu cǎifǎng.', 'Nhận phỏng vấn.']),
      w('讲座', 'jiǎngzuò', 'bài giảng, toạ đàm', '', ['参加讲座。', 'Cānjiā jiǎngzuò.', 'Dự buổi toạ đàm.']),
      w('并', 'bìng', '(nhấn phủ định) hoàn toàn', '', ['事情并不简单。', 'Shìqing bìng bù jiǎndān.', 'Việc này hoàn toàn không đơn giản.']),
      w('笔记', 'bǐjì', 'ghi chép', '', ['记笔记。', 'Jì bǐjì.', 'Ghi chép.']),
      w('核心', 'héxīn', 'cốt lõi', '', ['核心问题是什么？', 'Héxīn wèntí shì shénme?', 'Vấn đề cốt lõi là gì?'])
    ],
    qs: [
      ['hear', '很多人认为创业很容易，然而事实并非如此，百分之九十的公司都失败了。', 'Nhiều người nghĩ khởi nghiệp dễ, nhưng thực tế 90% công ty thất bại.', ['Khởi nghiệp dễ.', '90% thành công.', '9% thất bại.'], '然而 + số liệu.'],
      ['hear', '换句话说，技术只是工具，核心还是人。', 'Nói cách khác, công nghệ chỉ là công cụ, cốt lõi vẫn là con người.', ['Công nghệ là cốt lõi.', 'Con người không quan trọng.', 'Không cần công cụ.'], '换句话说.'],
      ['hear', '总的来说，今年的情况比去年乐观。', 'Nhìn chung, tình hình năm nay lạc quan hơn năm ngoái.', ['Bi quan hơn.', 'Giống năm ngoái.', 'Không biết.'], '总的来说.'],
      ['hear', '今天我想谈三个问题：成本、效率和风险。', 'Hôm nay tôi muốn nói 3 vấn đề: chi phí, hiệu suất, rủi ro.', ['2 vấn đề.', 'Chỉ nói chi phí.', 'Không nói rủi ro.'], 'Liệt kê.'],
      ['mc', '并不 nhấn mạnh?', 'Phủ định mạnh (hoàn toàn không)', ['Khẳng định', 'Nghi vấn', 'Đồng ý'], 'bìng bù.'],
      ['order', 'Sắp xếp: “Vấn đề cốt lõi là gì?”', ['核心', '问题', '是', '什么？'], '核心问题是什么？']
    ],
    noi: [['然而，事情并不简单。', 'Rán\'ér, shìqing bìng bù jiǎndān. – Tuy nhiên, việc này hoàn toàn không đơn giản.'], ['换句话说，我们需要改变。', 'Huàn jù huà shuō, wǒmen xūyào gǎibiàn. – Nói cách khác, ta cần thay đổi.'], ['总的来说，效果不错。', 'Zǒng de lái shuō, xiàoguǒ búcuò. – Nhìn chung hiệu quả tốt.']],
    hoithoai: {
      ctx: 'Sau buổi toạ đàm về fintech, bạn hỏi em nội dung chính.', vai: 'Bạn hỏi, em tóm tắt từ ghi chép.', ai: '👩 同学',
      luot: [
        T(['嘉宾主要讲了什么？', 'Jiābīn zhǔyào jiǎngle shénme?', 'Khách mời chủ yếu nói gì?'], ['他谈了三个问题：成本、效率和风险。', 'Tā tánle sān ge wèntí: chéngběn, xiàolǜ hé fēngxiǎn.', 'Ông ấy nói 3 vấn đề: chi phí, hiệu suất, rủi ro.', 'Ý chính.'], ['讲了很多。', 'Jiǎngle hěn duō.', 'Mơ hồ.'], ['我没记笔记。', 'Wǒ méi jì bǐjì.', 'Không giúp.']),
        T(['他的核心观点呢？', 'Tā de héxīn guāndiǎn ne?', 'Quan điểm cốt lõi?'], ['技术只是工具，核心还是人和管理。', 'Jìshù zhǐ shì gōngjù, héxīn hái shì rén hé guǎnlǐ.', 'Công nghệ chỉ là công cụ, cốt lõi vẫn là con người và quản lý.', 'Quan điểm.'], ['技术最重要。', 'Jìshù zuì zhòngyào.', 'Nghe nhầm.'], ['没有观点。', 'Méiyǒu guāndiǎn.', 'Sai.']),
        T(['他对未来乐观吗？', 'Tā duì wèilái lèguān ma?', 'Ông ấy lạc quan về tương lai không?'], ['总的来说比较乐观，不过他强调风险控制。', 'Zǒng de lái shuō bǐjiào lèguān, búguò tā qiángdiào fēngxiǎn kòngzhì.', 'Nhìn chung khá lạc quan, nhưng nhấn mạnh kiểm soát rủi ro.', 'Thái độ + lưu ý.'], ['非常悲观。', 'Fēicháng bēiguān.', 'Nghe nhầm.'], ['不知道。', 'Bù zhīdào.', 'Không giúp.'])
      ], ket: 'Em đã nghe – ghi chép – tóm tắt bài giảng dài.'
    },
    tom: ['然而 / 换句话说 / 总的来说', 'Ghi chú từ khoá'], nguphap: 'Kỹ năng nghe nâng cao', phatam: '然而 rán\'ér',
    loi: ['Ghi cả câu, bỏ lỡ ý sau'], btvn: ['Nghe 1 bài TED tiếng Trung 10 phút, ghi chú', 'Tóm tắt 5 câu', 'Luyện 🎤 3 câu']
  };

  const d29 = {
    n: 29, ten: plan[28].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Mô phỏng chuỗi tình huống cấp cao: đón đoàn, thuyết trình, đàm phán, xử lý sự cố, tiệc chiêu đãi.',
    hoc: `<p>Hôm nay không có từ mới. Làm hội thoại 3 lần, mỗi lượt cố trả lời <b>dưới 5 giây</b> và dùng ít nhất một cấu trúc HSK 5–6.</p>`,
    qs: [['mc', 'Đối tác hỏi giá quá cao, em trả lời khéo?', '这个价格未必最合适，我们可以再谈谈。', ['太贵了，不要。', '随便。', '你疯了。'], 'Uyển chuyển.'], ['mc', 'Thông cáo xin lỗi mở đầu?', '对于此次事件，我们深表歉意。', ['对不起啦。', '不是我们的错。', '没事。'], 'Trang trọng.']],
    noi: [['我们会全力以赴。', 'Wǒmen huì quán lì yǐ fù. – Chúng tôi sẽ dốc toàn lực.'], ['与其降价，不如提高服务。', 'Yǔqí jiàngjià, bùrú tígāo fúwù. – Thay vì giảm giá chẳng bằng nâng dịch vụ.']],
    hoithoai: {
      ctx: 'Một ngày tiếp đoàn lãnh đạo ngân hàng đối tác Trung Quốc.', vai: 'Trưởng đoàn nói, em xử lý liên tục.', ai: '🏦 代表团团长',
      luot: [
        T(['贵行的数字化转型有什么经验？', 'Guì háng de shùzìhuà zhuǎnxíng yǒu shénme jīngyàn?', 'Quý ngân hàng có kinh nghiệm chuyển đổi số gì?'], ['我想谈三点：首先以客户为中心，其次重视风控，最后培养人才。', 'Wǒ xiǎng tán sān diǎn: shǒuxiān yǐ kèhù wéi zhōngxīn, qícì zhòngshì fēngkòng, zuìhòu péiyǎng réncái.', 'Tôi xin nêu 3 điểm: trước hết lấy khách hàng làm trung tâm, kế đến coi trọng rủi ro, cuối cùng đào tạo nhân tài.', 'Dàn ý + văn ngôn.'], ['经验很多很多。', 'Jīngyàn hěn duō hěn duō.', 'Mơ hồ.'], ['我们没有经验。', 'Wǒmen méiyǒu jīngyàn.', 'Tự hạ.']),
        T(['听说上个月你们系统出过问题？', 'Tīngshuō shàng ge yuè nǐmen xìtǒng chūguo wèntí?', 'Nghe nói tháng trước hệ thống có sự cố?'], ['是的，我们深表歉意，也亡羊补牢，增加了备用系统。', 'Shì de, wǒmen shēn biǎo qiànyì, yě wáng yáng bǔ láo, zēngjiāle bèiyòng xìtǒng.', 'Đúng vậy, chúng tôi rất xin lỗi và đã khắc phục, bổ sung hệ thống dự phòng.', 'Nhận trách nhiệm + thành ngữ.'], ['没有，谁说的？', 'Méiyǒu, shéi shuō de?', 'Chối.'], ['那是小事，何必问？', 'Nà shì xiǎoshì, hébì wèn?', 'Thiếu tôn trọng.']),
        T(['今天收获很大，谢谢！', 'Jīntiān shōuhuò hěn dà, xièxie!', 'Hôm nay thu hoạch nhiều, cảm ơn!'], ['不客气，希望我们取长补短，建立长期合作。', 'Bú kèqi, xīwàng wǒmen qǔ cháng bǔ duǎn, jiànlì chángqī hézuò.', 'Không có gì, mong ta học hỏi lẫn nhau, xây dựng hợp tác lâu dài.', 'Thành ngữ + kết.'], ['好，再见了过。', 'Hǎo, zàijiàn le guo.', 'Sai.'], ['半途而废吧。', 'Bàn tú ér fèi ba.', 'Sai.'])
      ], ket: 'Em đã tiếp đoàn lãnh đạo trọn vẹn!'
    },
    tom: ['Phản xạ < 5 giây', 'Dùng cấu trúc HSK 5–6 mỗi lượt'], nguphap: 'Tổng hợp', phatam: 'Ngữ điệu trang trọng',
    loi: ['Dùng khẩu ngữ trong bối cảnh trang trọng'], btvn: ['Làm lại hội thoại 3 lần', 'Ghi âm bài phát biểu chào đoàn 2 phút', 'Chuẩn bị bài kiểm tra cuối khoá']
  };

  const d30 = {
    n: 30, ten: plan[29].ten, vocab: [], tong: 1, kt: { n: 30, min: 30 }, kinds: K,
    muc: 'Kiểm tra cuối khoá HSK 5–6 (30 câu) và lên lộ trình HSK 7–9.',
    hoc: `<h4>🏁 Hoàn thành cấp 4!</h4>${tbl(['Đã học', 'Tiếp theo ở HSK 7–9'], [['Thành ngữ, văn ngôn cơ bản', 'Văn ngôn sâu hơn, điển cố'], ['Thuyết trình, nghị luận, tranh luận', 'Học thuật, bài luận dài'], ['Hợp đồng, thông cáo, văn bản hành chính', 'Biên dịch, phiên dịch'], ['~2500–5000 từ', '~11000 từ, kỹ năng dịch']])}
      ${tip('📌 HSK 5 và HSK 6 thi riêng, mỗi bài 300 điểm, đạt ≥ 180 (HSK 2.0). Hãy làm đề thi thử chính thức của cả hai để chọn mốc thi phù hợp.')}`,
    qs: [['mc', '___降价，不如提高质量。', '与其', ['宁可', '只有', '一旦'], 'Lựa chọn.'], ['mc', '亡羊补牢 dùng khi?', 'Sửa sai sau sự cố', ['Chúc mừng', 'Làm thừa', 'Bỏ dở'], 'Thành ngữ.'], ['mc', '合同自签字之日___生效。', '起', ['开始了', '从', '到'], '自…起.']],
    noi: [['我已经学完了HSK六级的内容。', 'Wǒ yǐjīng xuéwánle HSK liù jí de nèiróng. – Tôi đã học xong nội dung HSK 6.'], ['我打算挑战HSK七到九级。', 'Wǒ dǎsuàn tiǎozhàn HSK qī dào jiǔ jí. – Tôi định thử sức HSK 7–9.']],
    hoithoai: {
      ctx: 'Buổi tổng kết khoá học với giáo viên.', vai: 'Cô hỏi, em trả lời.', ai: '👩‍🏫 王老师',
      luot: [
        T(['这个月你觉得自己哪方面进步最大？', 'Zhège yuè nǐ juéde zìjǐ nǎ fāngmiàn jìnbù zuì dà?', 'Tháng này em thấy tiến bộ nhất ở mặt nào?'], ['我觉得是正式场合的表达，比如演讲和写通知。', 'Wǒ juéde shì zhèngshì chǎnghé de biǎodá, bǐrú yǎnjiǎng hé xiě tōngzhī.', 'Em thấy là diễn đạt trong bối cảnh trang trọng, như diễn thuyết và viết thông báo.', 'Tự đánh giá.'], ['都进步了过。', 'Dōu jìnbù le guo.', 'Sai.'], ['没进步。', 'Méi jìnbù.', 'Tự hạ.']),
        T(['还有什么不足？', 'Hái yǒu shénme bùzú?', 'Còn thiếu sót gì?'], ['成语用得还不够自然，我会多读多用，精益求精。', 'Chéngyǔ yòng de hái bú gòu zìrán, wǒ huì duō dú duō yòng, jīng yì qiú jīng.', 'Dùng thành ngữ chưa tự nhiên, em sẽ đọc nhiều dùng nhiều, cầu tiến.', 'Thành ngữ đúng.'], ['没有不足。', 'Méiyǒu bùzú.', 'Thiếu khiêm tốn.'], ['画蛇添足。', 'Huà shé tiān zú.', 'Sai ngữ cảnh.']),
        T(['以后的计划呢？', 'Yǐhòu de jìhuà ne?', 'Kế hoạch sau này?'], ['先考HSK五级和六级，然后挑战七到九级，学习翻译。', 'Xiān kǎo HSK wǔ jí hé liù jí, ránhòu tiǎozhàn qī dào jiǔ jí, xuéxí fānyì.', 'Trước thi HSK 5 và 6, rồi thử HSK 7–9, học phiên dịch.', 'Kế hoạch rõ.'], ['不学了。', 'Bù xué le.', 'Bỏ dở.'], ['后来考试。', 'Hòulái kǎoshì.', '后来 chỉ quá khứ.'])
      ], ket: 'Chúc mừng em đã hoàn thành cấp 4 – HSK 5–6! 🎉'
    },
    tom: ['Kiểm tra 30 câu', 'Lộ trình HSK 7–9'], nguphap: 'Tổng ôn toàn khoá', phatam: 'Ôn ngữ điệu trang trọng',
    loi: ['Xem lại các câu sai trong báo cáo'], btvn: ['Làm 1 đề HSK 5 và 1 đề HSK 6 thi thử', 'Ôn lại 3 ngày điểm thấp nhất', 'Bắt đầu cấp 5 – HSK 7–9']
  };

  Z.days.push(d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30);
})();

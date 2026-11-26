/* PLT-Edu · Tiếng Trung – Cấp 5 (HSK 7–9): Ngày 15–30 */
(function () {
  'use strict';
  const Z = window.PLT_ZH5; if (!Z) return;
  const { w, T, tbl, tip, exs, K } = Z.H;
  const plan = Z.plan;

  const d15 = {
    n: 15, ten: plan[14].ten, kinds: K,
    muc: 'Viết phần đặt vấn đề của bài luận học thuật: bối cảnh, khoảng trống nghiên cứu, mục tiêu, câu hỏi nghiên cứu.',
    hoc: `${tbl(['Bước', 'Mẫu câu'], [['Bối cảnh', '近年来，随着…的发展，…日益受到关注。'], ['Khoảng trống', '然而，现有研究大多集中于…，对…的探讨较少。'], ['Mục tiêu', '本文旨在…'], ['Câu hỏi', '本研究试图回答以下问题：…'], ['Cấu trúc bài', '全文共分为五个部分。']])}`,
    vocab: [
      w('近年来', 'jìn nián lái', 'những năm gần đây', '', ['近年来，电子支付发展迅速。', 'Jìn nián lái, diànzǐ zhīfù fāzhǎn xùnsù.', 'Những năm gần đây thanh toán điện tử phát triển nhanh.']),
      w('日益', 'rìyì', 'ngày càng (văn viết)', '', ['日益受到关注。', 'Rìyì shòudào guānzhù.', 'Ngày càng được quan tâm.']),
      w('迅速', 'xùnsù', 'nhanh chóng', '', ['发展迅速。', 'Fāzhǎn xùnsù.', 'Phát triển nhanh chóng.']),
      w('集中于', 'jízhōng yú', 'tập trung vào', '', ['研究集中于大城市。', 'Yánjiū jízhōng yú dà chéngshì.', 'Nghiên cứu tập trung vào đô thị lớn.']),
      w('现有', 'xiànyǒu', 'hiện có', '', ['现有研究。', 'Xiànyǒu yánjiū.', 'Các nghiên cứu hiện có.']),
      w('试图', 'shìtú', 'cố gắng, thử', '', ['本文试图回答…', 'Běnwén shìtú huídá…', 'Bài viết cố gắng trả lời…']),
      w('关注', 'guānzhù', 'quan tâm, chú ý', '', ['受到广泛关注。', 'Shòudào guǎngfàn guānzhù.', 'Được quan tâm rộng rãi.']),
      w('本文', 'běnwén', 'bài viết này', '', ['本文分为五个部分。', 'Běnwén fēn wéi wǔ ge bùfen.', 'Bài chia 5 phần.']),
      w('领域', 'lǐngyù', 'lĩnh vực', '', ['金融科技领域。', 'Jīnróng kējì lǐngyù.', 'Lĩnh vực fintech.']),
      w('空白', 'kòngbái', 'khoảng trống', '', ['填补研究空白。', 'Tiánbǔ yánjiū kòngbái.', 'Lấp khoảng trống nghiên cứu.'])
    ],
    qs: [
      ['mc', 'Câu nêu khoảng trống nghiên cứu?', '然而，现有研究对农村地区的探讨较少。', ['本文分为五个部分。', '近年来，…发展迅速。', '谢谢大家。'], 'Gap.'],
      ['mc', '日益 = ?', 'ngày càng', ['hằng ngày', 'ngày lợi', 'ngày ích'], 'rìyì.'],
      ['mc', '填补研究___。', '空白', ['空间', '空气', '空调'], 'Khoảng trống.'],
      ['hear', '近年来，随着智能手机的普及，移动支付日益受到关注。', 'Gần đây, cùng sự phổ biến smartphone, thanh toán di động ngày càng được quan tâm.', ['Thanh toán di động bị lãng quên.', 'Smartphone giảm.', 'Không ai quan tâm.'], 'Bối cảnh.'],
      ['hear', '本研究试图回答以下三个问题。', 'Nghiên cứu này cố gắng trả lời ba câu hỏi sau.', ['Hai câu hỏi.', 'Không có câu hỏi.', 'Đã trả lời xong.'], '试图.'],
      ['order', 'Sắp xếp: “Lĩnh vực fintech.”', ['金融', '科技', '领域', '。'], '金融科技领域。']
    ],
    noi: [['近年来，…日益受到关注。', 'Jìn nián lái, … rìyì shòudào guānzhù. – Những năm gần đây, … ngày càng được quan tâm.'], ['本文旨在填补这一研究空白。', 'Běnwén zhǐzài tiánbǔ zhè yī yánjiū kòngbái. – Bài viết nhằm lấp khoảng trống nghiên cứu này.'], ['全文共分为五个部分。', 'Quánwén gòng fēn wéi wǔ ge bùfen. – Toàn bài chia làm 5 phần.']],
    hoithoai: {
      ctx: 'Giáo sư hướng dẫn đọc phần đặt vấn đề luận văn của em.', vai: 'Giáo sư hỏi, em trả lời.', ai: '👨‍🏫 导师',
      luot: [
        T(['你的研究背景是什么？', 'Nǐ de yánjiū bèijǐng shì shénme?', 'Bối cảnh nghiên cứu của em?'], ['近年来，越南电子支付发展迅速，日益受到银行业的关注。', 'Jìn nián lái, Yuènán diànzǐ zhīfù fāzhǎn xùnsù, rìyì shòudào yínhángyè de guānzhù.', 'Những năm gần đây thanh toán điện tử VN phát triển nhanh, ngày càng được ngành ngân hàng quan tâm.', 'Bối cảnh.'], ['我喜欢电子支付。', 'Wǒ xǐhuan diànzǐ zhīfù.', 'Cảm tính.'], ['背景是越南。', 'Bèijǐng shì Yuènán.', 'Sơ sài.']),
        T(['已经有很多人研究过了吧？', 'Yǐjīng yǒu hěn duō rén yánjiūguo le ba?', 'Nhiều người nghiên cứu rồi mà?'], ['是的，然而现有研究大多集中于大城市，对农村地区的探讨较少。', 'Shì de, rán\'ér xiànyǒu yánjiū dàduō jízhōng yú dà chéngshì, duì nóngcūn dìqū de tàntǎo jiào shǎo.', 'Đúng ạ, nhưng nghiên cứu hiện có chủ yếu tập trung đô thị lớn, ít bàn nông thôn.', 'Khoảng trống.'], ['没有人研究。', 'Méiyǒu rén yánjiū.', 'Sai thực tế.'], ['那我换题目。', 'Nà wǒ huàn tímù.', 'Thiếu lập luận.']),
        T(['所以你的目标是？', 'Suǒyǐ nǐ de mùbiāo shì?', 'Vậy mục tiêu?'], ['本文旨在分析农村地区电子支付的障碍，填补这一研究空白。', 'Běnwén zhǐzài fēnxī nóngcūn dìqū diànzǐ zhīfù de zhàng\'ài, tiánbǔ zhè yī yánjiū kòngbái.', 'Bài nhằm phân tích rào cản thanh toán điện tử ở nông thôn, lấp khoảng trống này.', 'Mục tiêu rõ.'], ['写完论文。', 'Xiě wán lùnwén.', 'Không phải mục tiêu học thuật.'], ['毕业。', 'Bìyè.', 'Sai.'])
      ], ket: 'Em đã trình bày phần đặt vấn đề chuẩn học thuật.'
    },
    tom: ['Bối cảnh → khoảng trống → mục tiêu → câu hỏi'], nguphap: 'Đặt vấn đề học thuật', phatam: '日益 rìyì, 迅速 xùnsù',
    loi: ['Thiếu khoảng trống nghiên cứu'], btvn: ['Viết phần đặt vấn đề 300 chữ cho đề tài em quan tâm', 'Dùng đủ 5 bước', 'Luyện 🎤 3 câu']
  };

  const d16 = {
    n: 16, ten: plan[15].ten, kinds: K,
    muc: 'Trích dẫn, dẫn số liệu, ghi tài liệu tham khảo; diễn đạt mức độ chắc chắn (表明, 显示, 可能, 似乎).',
    hoc: `${tbl(['Chức năng', 'Mẫu'], [['Trích dẫn', '王某（2023）指出，…'], ['Dẫn số liệu', '据国家统计局数据，…'], ['Mức chắc chắn cao', '研究表明 / 数据证明'], ['Mức chắc chắn thấp', '这可能是由于… / 似乎…'], ['Tài liệu', '参考文献']])}
      ${tip('🔑 Học thuật tránh tuyệt đối hoá: dùng <b>可能, 在一定程度上, 似乎</b> khi chưa đủ bằng chứng.')}`,
    vocab: [
      w('指出', 'zhǐchū', 'chỉ ra', '', ['专家指出…', 'Zhuānjiā zhǐchū…', 'Chuyên gia chỉ ra…']),
      w('表明', 'biǎomíng', 'cho thấy', '', ['研究表明…', 'Yánjiū biǎomíng…', 'Nghiên cứu cho thấy…']),
      w('证明', 'zhèngmíng', 'chứng minh', '', ['数据证明了这一点。', 'Shùjù zhèngmíngle zhè yì diǎn.', 'Số liệu chứng minh điểm này.']),
      w('似乎', 'sìhū', 'dường như', '', ['似乎有关系。', 'Sìhū yǒu guānxi.', 'Dường như có liên quan.']),
      w('在一定程度上', 'zài yídìng chéngdù shang', 'ở mức độ nhất định', '', ['在一定程度上影响了结果。', 'Zài yídìng chéngdù shang yǐngxiǎngle jiéguǒ.', 'Ảnh hưởng kết quả ở mức nhất định.']),
      w('参考文献', 'cānkǎo wénxiàn', 'tài liệu tham khảo', '', ['列出参考文献。', 'Lièchū cānkǎo wénxiàn.', 'Liệt kê tài liệu tham khảo.']),
      w('引用', 'yǐnyòng', 'trích dẫn', '', ['正确引用。', 'Zhèngquè yǐnyòng.', 'Trích dẫn đúng.']),
      w('来源', 'láiyuán', 'nguồn', '', ['数据来源。', 'Shùjù láiyuán.', 'Nguồn số liệu.']),
      w('抄袭', 'chāoxí', 'đạo văn', '', ['严禁抄袭。', 'Yánjìn chāoxí.', 'Nghiêm cấm đạo văn.']),
      w('可靠', 'kěkào', 'đáng tin cậy', '', ['来源可靠吗？', 'Láiyuán kěkào ma?', 'Nguồn đáng tin không?'])
    ],
    qs: [
      ['mc', 'Khi chưa đủ bằng chứng, nên viết?', '这可能是由于…', ['这肯定是因为…', '绝对是…', '毫无疑问…'], 'Rào đón.'],
      ['mc', '抄袭 = ?', 'đạo văn', ['sao chép hợp pháp', 'trích dẫn', 'tham khảo'], 'chāoxí.'],
      ['mc', '数据___ = nguồn số liệu', '来源', ['来自', '原来', '本来'], 'láiyuán.'],
      ['hear', '研究表明，移动支付在一定程度上提高了农村居民的消费。', 'Nghiên cứu cho thấy thanh toán di động ở mức độ nhất định làm tăng tiêu dùng nông thôn.', ['Giảm tiêu dùng.', 'Không ảnh hưởng.', 'Tăng tuyệt đối.'], '在一定程度上.'],
      ['hear', '请注明所有数据的来源，严禁抄袭。', 'Ghi rõ nguồn mọi số liệu, nghiêm cấm đạo văn.', ['Không cần nguồn.', 'Được chép.', 'Chỉ ghi một nguồn.'], '来源 / 抄袭.'],
      ['order', 'Sắp xếp: “Liệt kê tài liệu tham khảo.”', ['列出', '参考', '文献', '。'], '列出参考文献。']
    ],
    noi: [['研究表明，…', 'Yánjiū biǎomíng… – Nghiên cứu cho thấy…'], ['这可能是由于样本较小。', 'Zhè kěnéng shì yóuyú yàngběn jiào xiǎo. – Điều này có thể do mẫu nhỏ.'], ['数据来源可靠吗？', 'Shùjù láiyuán kěkào ma? – Nguồn số liệu đáng tin không?']],
    hoithoai: {
      ctx: 'Phản biện hỏi về phương pháp và nguồn trong bài báo của em.', vai: 'Phản biện hỏi, em trả lời.', ai: '🔍 审稿人',
      luot: [
        T(['你的数据来源是什么？', 'Nǐ de shùjù láiyuán shì shénme?', 'Nguồn số liệu?'], ['主要来自越南国家银行公开报告和我们的问卷调查。', 'Zhǔyào láizì Yuènán guójiā yínháng gōngkāi bàogào hé wǒmen de wènjuàn diàochá.', 'Chủ yếu từ báo cáo công khai NHNN và khảo sát của chúng tôi.', 'Nguồn rõ.'], ['网上找的。', 'Wǎngshang zhǎo de.', 'Mơ hồ.'], ['我自己估计的。', 'Wǒ zìjǐ gūjì de.', 'Không đáng tin.']),
        T(['你说"移动支付导致消费增加"，太绝对了吧？', 'Nǐ shuō "yídòng zhīfù dǎozhì xiāofèi zēngjiā", tài juéduì le ba?', 'Bạn nói "dẫn đến tăng tiêu dùng" quá tuyệt đối chăng?'], ['您说得对，我改为"在一定程度上促进了消费"。', 'Nín shuō de duì, wǒ gǎi wéi "zài yídìng chéngdù shang cùjìnle xiāofèi".', 'Anh nói đúng, tôi sửa thành "ở mức độ nhất định thúc đẩy tiêu dùng".', 'Rào đón học thuật.'], ['不绝对，肯定是这样。', 'Bù juéduì, kěndìng shì zhèyàng.', 'Cố chấp.'], ['那我删掉。', 'Nà wǒ shān diào.', 'Mất nội dung.']),
        T(['第三段引用了谁的观点？', 'Dì sān duàn yǐnyòngle shéi de guāndiǎn?', 'Đoạn 3 trích ai?'], ['引用了陈教授2022年的研究，已列在参考文献中。', 'Yǐnyòngle Chén jiàoshòu èr líng èr èr nián de yánjiū, yǐ liè zài cānkǎo wénxiàn zhōng.', 'Trích nghiên cứu năm 2022 của GS Trần, đã ghi trong tài liệu tham khảo.', 'Trích dẫn đúng. (tên minh hoạ)'], ['我忘了。', 'Wǒ wàng le.', 'Nguy cơ đạo văn.'], ['是我自己的。', 'Shì wǒ zìjǐ de.', 'Không trung thực.'])
      ], ket: 'Em đã trả lời phản biện trung thực, chuẩn học thuật.'
    },
    tom: ['指出 / 表明 / 证明', '可能 / 似乎 / 在一定程度上', '来源 / 引用 / 抄袭'], nguphap: 'Trích dẫn và rào đón', phatam: '似乎 sìhū, 抄袭 chāoxí',
    loi: ['Tuyệt đối hoá', 'Không ghi nguồn'], btvn: ['Viết 1 đoạn 200 chữ có 2 trích dẫn và 1 câu rào đón', 'Lập danh mục 3 tài liệu tham khảo', 'Luyện 🎤 3 câu']
  };

  const d17 = {
    n: 17, ten: plan[16].ten, kinds: K,
    muc: 'Phát biểu tại hội nghị quốc tế: mở đầu ấn tượng, 3 thông điệp, câu chuyện minh hoạ, kêu gọi hành động.',
    hoc: `${tbl(['Phần', 'Mẫu'], [['Mở đầu', '很荣幸能在这里与大家交流。'], ['Câu hỏi gợi mở', '大家有没有想过：…？'], ['Thông điệp', '我想传达三个信息。'], ['Câu chuyện', '让我先讲一个小故事。'], ['Kêu gọi', '让我们携手合作，共创未来！']])}`,
    vocab: [
      w('荣幸', 'róngxìng', 'vinh dự', '', ['我很荣幸。', 'Wǒ hěn róngxìng.', 'Tôi rất vinh dự.']),
      w('交流', 'jiāoliú', 'giao lưu, trao đổi', '', ['与大家交流。', 'Yǔ dàjiā jiāoliú.', 'Trao đổi với mọi người.']),
      w('传达', 'chuándá', 'truyền đạt', '', ['传达信息。', 'Chuándá xìnxī.', 'Truyền đạt thông điệp.']),
      w('携手', 'xiéshǒu', 'chung tay', '', ['携手合作。', 'Xiéshǒu hézuò.', 'Chung tay hợp tác.']),
      w('共创', 'gòngchuàng', 'cùng tạo dựng', '', ['共创美好未来。', 'Gòngchuàng měihǎo wèilái.', 'Cùng tạo dựng tương lai tốt đẹp.']),
      w('愿景', 'yuànjǐng', 'tầm nhìn', '', ['我们的愿景是…', 'Wǒmen de yuànjǐng shì…', 'Tầm nhìn của chúng tôi là…']),
      w('挑战', 'tiǎozhàn', 'thách thức', '', ['面临挑战。', 'Miànlín tiǎozhàn.', 'Đối mặt thách thức.']),
      w('共赢', 'gòngyíng', 'cùng thắng', '', ['实现共赢。', 'Shíxiàn gòngyíng.', 'Đạt cùng thắng.']),
      w('区域', 'qūyù', 'khu vực', '', ['区域合作。', 'Qūyù hézuò.', 'Hợp tác khu vực.']),
      w('可持续', 'kě chíxù', 'bền vững', '', ['可持续发展。', 'Kě chíxù fāzhǎn.', 'Phát triển bền vững.'])
    ],
    qs: [
      ['mc', 'Mở đầu phát biểu trang trọng?', '很荣幸能在这里与大家交流。', ['我来了。', '大家好啊！', '开始吧。'], 'Nghi thức.'],
      ['mc', '共赢 = ?', 'cùng thắng', ['cùng thua', 'cạnh tranh', 'thắng một mình'], 'Win-win.'],
      ['mc', '可持续发展 = ?', 'phát triển bền vững', ['phát triển nhanh', 'phát triển tiếp', 'phát triển có thể'], 'Sustainable.'],
      ['hear', '让我们携手合作，实现互利共赢！', 'Hãy chung tay hợp tác, cùng có lợi, cùng thắng!', ['Hãy cạnh tranh.', 'Hợp tác thất bại.', 'Không cần hợp tác.'], '携手 / 共赢.'],
      ['hear', '在这里，我想传达三个信息。', 'Ở đây tôi muốn truyền đạt ba thông điệp.', ['Hai thông điệp.', 'Không có thông điệp.', 'Ba câu hỏi.'], '传达.'],
      ['order', 'Sắp xếp: “Cùng tạo dựng tương lai tốt đẹp.”', ['共创', '美好', '未来', '。'], '共创美好未来。']
    ],
    noi: [['很荣幸能在这里与大家交流。', 'Hěn róngxìng néng zài zhèlǐ yǔ dàjiā jiāoliú. – Rất vinh dự được trao đổi cùng quý vị.'], ['让我们携手合作，共创未来！', 'Ràng wǒmen xiéshǒu hézuò, gòngchuàng wèilái! – Hãy chung tay hợp tác, cùng tạo dựng tương lai!'], ['我想传达三个信息。', 'Wǒ xiǎng chuándá sān ge xìnxī. – Tôi muốn truyền đạt ba thông điệp.']],
    hoithoai: {
      ctx: 'Em phát biểu tại diễn đàn fintech ASEAN – Trung Quốc; MC hỏi trước khi lên.', vai: 'MC hỏi, em trả lời / phát biểu.', ai: '🎙️ 主持人',
      luot: [
        T(['请您先用一句话开场。', 'Qǐng nín xiān yòng yí jù huà kāichǎng.', 'Xin mở đầu bằng một câu.'], ['很荣幸能代表越南银行业在这里与大家交流。', 'Hěn róngxìng néng dàibiǎo Yuènán yínhángyè zài zhèlǐ yǔ dàjiā jiāoliú.', 'Rất vinh dự thay mặt ngành ngân hàng VN trao đổi cùng quý vị.', 'Mở đầu.'], ['我是来讲话的。', 'Wǒ shì lái jiǎnghuà de.', 'Thô.'], ['我很紧张。', 'Wǒ hěn jǐnzhāng.', 'Kém chuyên nghiệp.']),
        T(['您的核心信息是什么？', 'Nín de héxīn xìnxī shì shénme?', 'Thông điệp cốt lõi?'], ['数字金融的未来不是竞争，而是区域合作和共赢。', 'Shùzì jīnróng de wèilái bú shì jìngzhēng, ér shì qūyù hézuò hé gòngyíng.', 'Tương lai tài chính số không phải cạnh tranh mà là hợp tác khu vực và cùng thắng.', '不是…而是.'], ['我们要赢。', 'Wǒmen yào yíng.', 'Đối đầu.'], ['没有核心信息。', 'Méiyǒu héxīn xìnxī.', 'Yếu.']),
        T(['最后一句怎么结束？', 'Zuìhòu yí jù zěnme jiéshù?', 'Câu kết thế nào?'], ['让我们携手合作，共创可持续的数字未来！谢谢大家！', 'Ràng wǒmen xiéshǒu hézuò, gòngchuàng kě chíxù de shùzì wèilái! Xièxie dàjiā!', 'Hãy chung tay, cùng tạo dựng tương lai số bền vững! Cảm ơn quý vị!', 'Kêu gọi.'], ['就这样，拜拜。', 'Jiù zhèyàng, bàibai.', 'Khẩu ngữ.'], ['我讲完了。', 'Wǒ jiǎng wán le.', 'Thiếu sức nặng.'])
      ], ket: 'Em đã phát biểu hội nghị có sức truyền cảm.'
    },
    tom: ['荣幸 / 传达 / 携手 / 共创 / 共赢 / 可持续'], nguphap: 'Diễn văn hội nghị', phatam: '荣幸 róngxìng, 携手 xiéshǒu',
    loi: ['Mở đầu thiếu nghi thức', 'Kết thúc yếu'], btvn: ['Soạn bài phát biểu 3 phút cho diễn đàn', 'Ghi âm và nghe lại', 'Luyện 🎤 3 câu']
  };

  const d18 = {
    n: 18, ten: plan[17].ten, kinds: K,
    muc: 'Lễ tân ngoại giao: đón đoàn, xếp chỗ, giới thiệu thứ bậc, chiêu đãi, tặng quà, tiễn đoàn.',
    hoc: `${tbl(['Tình huống', 'Câu mẫu'], [['Đón đoàn', '欢迎各位远道而来！一路辛苦了！'], ['Giới thiệu', '请允许我介绍一下，这位是我们的行长…'], ['Mời ngồi', '请上座。'], ['Chúc rượu', '我提议，为两国友谊干杯！'], ['Tiễn', '祝各位一路顺风，欢迎再来！']])}
      ${tip('🔑 Giới thiệu theo thứ bậc: người chức cao nhất trước; mời khách quan trọng ngồi 上座 (đối diện cửa).')}`,
    vocab: [
      w('远道而来', 'yuǎn dào ér lái', 'từ xa tới', '', ['欢迎远道而来的朋友！', 'Huānyíng yuǎn dào ér lái de péngyou!', 'Chào mừng bạn từ xa tới!']),
      w('一路辛苦', 'yí lù xīnkǔ', 'đi đường vất vả', '', ['一路辛苦了！', 'Yí lù xīnkǔ le!', 'Đi đường vất vả rồi!']),
      w('允许', 'yǔnxǔ', 'cho phép', '', ['请允许我介绍一下。', 'Qǐng yǔnxǔ wǒ jièshào yíxià.', 'Xin phép tôi giới thiệu.']),
      w('上座', 'shàngzuò', 'ghế danh dự', '', ['请上座。', 'Qǐng shàngzuò.', 'Mời ngồi ghế trên.']),
      w('提议', 'tíyì', 'đề nghị', '', ['我提议干一杯。', 'Wǒ tíyì gān yì bēi.', 'Tôi đề nghị nâng ly.']),
      w('友谊', 'yǒuyì', 'tình hữu nghị', '', ['为友谊干杯！', 'Wèi yǒuyì gānbēi!', 'Vì tình hữu nghị, cạn ly!']),
      w('一路顺风', 'yí lù shùn fēng', 'thượng lộ bình an', '', ['祝您一路顺风！', 'Zhù nín yí lù shùn fēng!', 'Chúc anh thượng lộ bình an!']),
      w('代表团', 'dàibiǎotuán', 'đoàn đại biểu', '', ['中国代表团。', 'Zhōngguó dàibiǎotuán.', 'Đoàn đại biểu Trung Quốc.']),
      w('礼宾', 'lǐbīn', 'lễ tân', '', ['礼宾安排。', 'Lǐbīn ānpái.', 'Sắp xếp lễ tân.']),
      w('款待', 'kuǎndài', 'tiếp đãi', '', ['感谢您的盛情款待。', 'Gǎnxiè nín de shèngqíng kuǎndài.', 'Cảm ơn sự tiếp đãi nồng hậu.'])
    ],
    qs: [
      ['mc', 'Đón khách ở sân bay nói?', '欢迎各位远道而来！一路辛苦了！', ['你们来了。', '快上车。', '怎么这么晚？'], 'Nghi thức.'],
      ['mc', 'Giới thiệu theo thứ tự nào?', 'Người chức cao nhất trước', ['Người trẻ nhất trước', 'Ngẫu nhiên', 'Người đứng gần nhất'], 'Thứ bậc.'],
      ['mc', '一路顺风 dùng khi?', 'Tiễn khách', ['Đón khách', 'Chúc sinh nhật', 'Chúc Tết'], 'Thượng lộ bình an.'],
      ['hear', '感谢您的盛情款待，我们收获很大。', 'Cảm ơn sự tiếp đãi nồng hậu, chúng tôi thu hoạch nhiều.', ['Tiếp đãi kém.', 'Không thu hoạch gì.', 'Chúng tôi không đến.'], '款待.'],
      ['hear', '我提议，为两国人民的友谊干杯！', 'Tôi đề nghị nâng ly vì tình hữu nghị nhân dân hai nước!', ['Tôi không uống.', 'Vì công ty.', 'Vì bản thân.'], '提议.'],
      ['order', 'Sắp xếp: “Xin phép tôi giới thiệu.”', ['请', '允许我', '介绍', '一下。'], '请允许我介绍一下。']
    ],
    noi: [['欢迎各位远道而来！', 'Huānyíng gèwèi yuǎn dào ér lái! – Chào mừng quý vị từ xa tới!'], ['请允许我介绍一下。', 'Qǐng yǔnxǔ wǒ jièshào yíxià. – Xin phép tôi giới thiệu.'], ['祝各位一路顺风！', 'Zhù gèwèi yí lù shùn fēng! – Chúc quý vị thượng lộ bình an!']],
    hoithoai: {
      ctx: 'Em là lễ tân đón đoàn lãnh đạo ngân hàng Trung Quốc tại sân bay và trong tiệc.', vai: 'Trưởng đoàn nói, em đáp.', ai: '🇨🇳 代表团团长',
      luot: [
        T(['你好，我们是中国银行代表团。', 'Nǐ hǎo, wǒmen shì Zhōngguó yínháng dàibiǎotuán.', 'Chào bạn, chúng tôi là đoàn ngân hàng TQ.'], ['欢迎各位远道而来！一路辛苦了！车已经在外面等候。', 'Huānyíng gèwèi yuǎn dào ér lái! Yí lù xīnkǔ le! Chē yǐjīng zài wàimian děnghòu.', 'Chào mừng quý vị từ xa tới! Đi đường vất vả rồi! Xe đã chờ bên ngoài.', 'Nghi thức + sắp xếp.'], ['你们终于来了。', 'Nǐmen zhōngyú lái le.', 'Hàm ý trách.'], ['等一下。', 'Děng yíxià.', 'Thiếu chu đáo.']),
        T(['（宴会上）这位是？', '(Yànhuì shang) Zhè wèi shì?', '(Trong tiệc) Vị này là?'], ['请允许我介绍一下，这位是我们的行长阮先生。', 'Qǐng yǔnxǔ wǒ jièshào yíxià, zhè wèi shì wǒmen de hángzhǎng Ruǎn xiānsheng.', 'Xin phép giới thiệu, đây là ông Nguyễn, Tổng giám đốc ngân hàng chúng tôi.', 'Giới thiệu trang trọng.'], ['他是老阮。', 'Tā shì Lǎo Ruǎn.', 'Quá thân mật.'], ['不认识。', 'Bú rènshi.', 'Sai.']),
        T(['感谢你们的盛情款待！', 'Gǎnxiè nǐmen de shèngqíng kuǎndài!', 'Cảm ơn sự tiếp đãi nồng hậu!'], ['这是我们应该做的。祝各位一路顺风，欢迎再来！', 'Zhè shì wǒmen yīnggāi zuò de. Zhù gèwèi yí lù shùn fēng, huānyíng zài lái!', 'Đó là việc nên làm. Chúc quý vị thượng lộ bình an, hẹn gặp lại!', 'Tiễn.'], ['不客气，走吧。', 'Bú kèqi, zǒu ba.', 'Cộc.'], ['一路辛苦了。', 'Yí lù xīnkǔ le.', 'Câu đón, không phải tiễn.'])
      ], ket: 'Em đã làm lễ tân ngoại giao chu đáo.'
    },
    tom: ['远道而来 / 一路辛苦', '请允许我介绍', '一路顺风'], nguphap: 'Ngôn ngữ lễ tân', phatam: '款待 kuǎndài, 友谊 yǒuyì',
    loi: ['Nhầm câu đón và câu tiễn', 'Giới thiệu sai thứ bậc'], btvn: ['Viết kịch bản đón – tiễn đoàn 10 lượt', 'Học thuộc 5 câu chúc rượu', 'Luyện 🎤 3 câu']
  };

  const d19 = {
    n: 19, ten: plan[18].ten, kinds: K,
    muc: 'Đàm phán cấp cao về đầu tư và hợp tác chiến lược: định giá, cổ phần, quyền kiểm soát, lộ trình.',
    hoc: `${tbl(['Thuật ngữ', 'Nghĩa'], [['战略合作', 'hợp tác chiến lược'], ['入股 / 股份', 'góp vốn / cổ phần'], ['估值', 'định giá'], ['控股权', 'quyền chi phối'], ['尽职调查', 'thẩm định (due diligence)'], ['意向书', 'biên bản ghi nhớ ý định (LOI)']])}`,
    vocab: [
      w('战略', 'zhànlüè', 'chiến lược', '', ['战略合作伙伴。', 'Zhànlüè hézuò huǒbàn.', 'Đối tác chiến lược.']),
      w('入股', 'rùgǔ', 'góp vốn', '', ['他们想入股我们公司。', 'Tāmen xiǎng rùgǔ wǒmen gōngsī.', 'Họ muốn góp vốn vào công ty ta.']),
      w('股份', 'gǔfèn', 'cổ phần', '', ['持有百分之二十的股份。', 'Chíyǒu bǎi fēn zhī èrshí de gǔfèn.', 'Nắm 20% cổ phần.']),
      w('估值', 'gūzhí', 'định giá', '', ['公司估值多少？', 'Gōngsī gūzhí duōshao?', 'Định giá công ty bao nhiêu?']),
      w('控股', 'kònggǔ', 'nắm quyền chi phối', '', ['我们必须保持控股。', 'Wǒmen bìxū bǎochí kònggǔ.', 'Ta phải giữ quyền chi phối.']),
      w('尽职调查', 'jìnzhí diàochá', 'thẩm định chi tiết', '', ['先做尽职调查。', 'Xiān zuò jìnzhí diàochá.', 'Thẩm định trước.']),
      w('意向书', 'yìxiàngshū', 'biên bản ghi nhớ ý định', '', ['签署意向书。', 'Qiānshǔ yìxiàngshū.', 'Ký biên bản ghi nhớ.']),
      w('底线', 'dǐxiàn', 'giới hạn cuối', '', ['这是我们的底线。', 'Zhè shì wǒmen de dǐxiàn.', 'Đây là giới hạn cuối của chúng tôi.']),
      w('互补', 'hùbǔ', 'bổ trợ nhau', '', ['优势互补。', 'Yōushì hùbǔ.', 'Lợi thế bổ trợ nhau.']),
      w('签署', 'qiānshǔ', 'ký kết', '', ['签署协议。', 'Qiānshǔ xiéyì.', 'Ký thoả thuận.'])
    ],
    qs: [
      ['mc', '尽职调查 = ?', 'thẩm định chi tiết (due diligence)', ['điều tra cảnh sát', 'khảo sát khách', 'kiểm toán thuế'], 'DD.'],
      ['mc', 'Giữ quyền chi phối: 保持___', '控股', ['股份了', '入股', '估值'], 'kònggǔ.'],
      ['mc', '优势___ = lợi thế bổ trợ', '互补', ['互相', '补充了', '互助'], 'hùbǔ.'],
      ['hear', '我们愿意出让百分之三十的股份，但必须保持控股权。', 'Chúng tôi sẵn sàng nhượng 30% cổ phần nhưng phải giữ quyền chi phối.', ['Nhượng 70%.', 'Nhượng toàn bộ.', 'Không nhượng.'], '底线.'],
      ['hear', '签署意向书以后，再开始尽职调查。', 'Ký biên bản ghi nhớ rồi mới bắt đầu thẩm định.', ['Thẩm định trước.', 'Không cần thẩm định.', 'Ký hợp đồng chính thức ngay.'], 'Trình tự.'],
      ['order', 'Sắp xếp: “Đây là giới hạn cuối của chúng tôi.”', ['这', '是', '我们的', '底线。'], '这是我们的底线。']
    ],
    noi: [['我们双方优势互补。', 'Wǒmen shuāngfāng yōushì hùbǔ. – Hai bên lợi thế bổ trợ nhau.'], ['这是我们的底线。', 'Zhè shì wǒmen de dǐxiàn. – Đây là giới hạn cuối.'], ['先签署意向书，再做尽职调查。', 'Xiān qiānshǔ yìxiàngshū, zài zuò jìnzhí diàochá. – Ký LOI trước, rồi thẩm định.']],
    hoithoai: {
      ctx: 'Một quỹ đầu tư Trung Quốc muốn góp vốn vào công ty công nghệ Việt mà em đại diện.', vai: 'Nhà đầu tư nói, em đàm phán.', ai: '💼 投资总监',
      luot: [
        T(['我们想入股百分之五十一。', 'Wǒmen xiǎng rùgǔ bǎi fēn zhī wǔshíyī.', 'Chúng tôi muốn góp 51%.'], ['我们欢迎战略合作，但必须保持控股权，这是我们的底线。', 'Wǒmen huānyíng zhànlüè hézuò, dàn bìxū bǎochí kònggǔquán, zhè shì wǒmen de dǐxiàn.', 'Chúng tôi hoan nghênh hợp tác chiến lược, nhưng phải giữ quyền chi phối – đó là giới hạn cuối.', 'Giữ lập trường.'], ['好的，没问题。', 'Hǎo de, méi wèntí.', 'Mất quyền kiểm soát.'], ['不卖，再见。', 'Bú mài, zàijiàn.', 'Đóng cửa đàm phán.']),
        T(['那最多能给多少？', 'Nà zuì duō néng gěi duōshao?', 'Vậy tối đa bao nhiêu?'], ['可以考虑百分之三十，而且双方优势互补，估值应该反映这一点。', 'Kěyǐ kǎolǜ bǎi fēn zhī sānshí, érqiě shuāngfāng yōushì hùbǔ, gūzhí yīnggāi fǎnyìng zhè yì diǎn.', 'Có thể xem xét 30%, hơn nữa hai bên bổ trợ, định giá nên phản ánh điều đó.', 'Đề xuất + giá trị.'], ['随便你们。', 'Suíbiàn nǐmen.', 'Thiếu lập trường.'], ['百分之九十。', 'Bǎi fēn zhī jiǔshí.', 'Mâu thuẫn.']),
        T(['好，下一步怎么走？', 'Hǎo, xià yí bù zěnme zǒu?', 'Được, bước tiếp theo?'], ['先签署意向书，然后你们做尽职调查，三个月内完成。', 'Xiān qiānshǔ yìxiàngshū, ránhòu nǐmen zuò jìnzhí diàochá, sān ge yuè nèi wánchéng.', 'Ký LOI trước, rồi bên anh thẩm định, xong trong 3 tháng.', 'Lộ trình.'], ['马上打款吧。', 'Mǎshàng dǎ kuǎn ba.', 'Bỏ bước pháp lý.'], ['不知道。', 'Bù zhīdào.', 'Thiếu chuẩn bị.'])
      ], ket: 'Em đã đàm phán đầu tư giữ vững lập trường.'
    },
    tom: ['战略合作 / 入股 / 股份 / 估值 / 控股', '尽职调查 / 意向书 / 底线'], nguphap: 'Ngôn ngữ M&A', phatam: '估值 gūzhí, 控股 kònggǔ',
    loi: ['Lộ giới hạn quá sớm', 'Bỏ bước thẩm định'], btvn: ['Viết kịch bản đàm phán góp vốn 10 lượt', 'Học thuộc 10 thuật ngữ', 'Luyện 🎤 3 câu']
  };

  const d20 = {
    n: 20, ten: plan[19].ten, kinds: K,
    muc: 'Đọc xã luận: nhận diện luận điểm, giọng điệu, thủ pháp; viết bình luận ngắn có lập trường cân bằng.',
    hoc: `${tbl(['Tín hiệu', 'Chức năng'], [['笔者认为', 'tác giả cho rằng'], ['不可否认', 'không thể phủ nhận'], ['值得深思', 'đáng suy ngẫm'], ['与此同时', 'đồng thời'], ['归根结底', 'suy cho cùng']])}`,
    vocab: [
      w('社论', 'shèlùn', 'xã luận', '', ['今天的社论。', 'Jīntiān de shèlùn.', 'Xã luận hôm nay.']),
      w('笔者', 'bǐzhě', 'người viết', '', ['笔者认为…', 'Bǐzhě rènwéi…', 'Người viết cho rằng…']),
      w('不可否认', 'bù kě fǒurèn', 'không thể phủ nhận', '', ['不可否认，科技改变了生活。', 'Bù kě fǒurèn, kējì gǎibiànle shēnghuó.', 'Không thể phủ nhận công nghệ đã thay đổi cuộc sống.']),
      w('值得深思', 'zhíde shēnsī', 'đáng suy ngẫm', '', ['这个现象值得深思。', 'Zhège xiànxiàng zhíde shēnsī.', 'Hiện tượng này đáng suy ngẫm.']),
      w('与此同时', 'yǔ cǐ tóngshí', 'đồng thời', '', ['与此同时，风险也在增加。', 'Yǔ cǐ tóngshí, fēngxiǎn yě zài zēngjiā.', 'Đồng thời rủi ro cũng tăng.']),
      w('归根结底', 'guī gēn jié dǐ', 'suy cho cùng', '', ['归根结底是人的问题。', 'Guī gēn jié dǐ shì rén de wèntí.', 'Suy cho cùng là vấn đề con người.']),
      w('舆论', 'yúlùn', 'dư luận', '', ['引起舆论关注。', 'Yǐnqǐ yúlùn guānzhù.', 'Gây chú ý dư luận.']),
      w('客观', 'kèguān', 'khách quan', '', ['客观地分析。', 'Kèguān de fēnxī.', 'Phân tích khách quan.']),
      w('倾向', 'qīngxiàng', 'khuynh hướng', '', ['作者有明显的倾向。', 'Zuòzhě yǒu míngxiǎn de qīngxiàng.', 'Tác giả có khuynh hướng rõ.']),
      w('立论', 'lìlùn', 'lập luận', '', ['立论有力。', 'Lìlùn yǒulì.', 'Lập luận chặt chẽ.'])
    ],
    qs: [
      ['mc', '归根结底 = ?', 'suy cho cùng', ['quay về gốc', 'cuối cùng thì kết thúc', 'nguồn gốc'], 'Kết luận gốc rễ.'],
      ['mc', '不可否认 dùng để?', 'Thừa nhận một sự thật trước khi lập luận', ['Phủ nhận', 'Hỏi', 'Chào'], 'Nhượng bộ.'],
      ['mc', '舆论 = ?', 'dư luận', ['ngôn luận', 'tranh luận', 'bình luận viên'], 'yúlùn.'],
      ['hear', '不可否认，网络让信息更透明；与此同时，虚假信息也越来越多。', 'Không thể phủ nhận mạng làm thông tin minh bạch hơn; đồng thời tin giả cũng nhiều lên.', ['Mạng chỉ có lợi.', 'Tin giả giảm.', 'Thông tin kém minh bạch.'], 'Hai mặt.'],
      ['hear', '这个现象值得我们每个人深思。', 'Hiện tượng này đáng để mỗi người suy ngẫm.', ['Không đáng quan tâm.', 'Chỉ chuyên gia cần nghĩ.', 'Đã giải quyết.'], '值得深思.'],
      ['order', 'Sắp xếp: “Phân tích khách quan.”', ['客观地', '分析', '。'], '客观地分析。']
    ],
    noi: [['不可否认，科技改变了生活。', 'Bù kě fǒurèn, kējì gǎibiànle shēnghuó. – Không thể phủ nhận công nghệ đã thay đổi cuộc sống.'], ['与此同时，风险也在增加。', 'Yǔ cǐ tóngshí, fēngxiǎn yě zài zēngjiā. – Đồng thời rủi ro cũng tăng.'], ['归根结底，是人的问题。', 'Guī gēn jié dǐ, shì rén de wèntí. – Suy cho cùng là vấn đề con người.']],
    hoithoai: {
      ctx: 'Câu lạc bộ đọc báo thảo luận một xã luận về tin giả trên mạng.', vai: 'Thành viên hỏi, em bình luận.', ai: '📰 读书会成员',
      luot: [
        T(['这篇社论的主要观点是什么？', 'Zhè piān shèlùn de zhǔyào guāndiǎn shì shénme?', 'Luận điểm chính của xã luận?'], ['笔者认为治理虚假信息，归根结底要提高公众的媒体素养。', 'Bǐzhě rènwéi zhìlǐ xūjiǎ xìnxī, guī gēn jié dǐ yào tígāo gōngzhòng de méitǐ sùyǎng.', 'Người viết cho rằng xử lý tin giả, suy cho cùng phải nâng hiểu biết truyền thông của công chúng.', 'Tóm luận điểm.'], ['讲网络。', 'Jiǎng wǎngluò.', 'Sơ sài.'], ['我不同意。', 'Wǒ bù tóngyì.', 'Chưa tóm tắt đã phản đối.']),
        T(['你觉得作者客观吗？', 'Nǐ juéde zuòzhě kèguān ma?', 'Bạn thấy tác giả khách quan không?'], ['总体比较客观，不过对平台的责任谈得较少，似乎有一定倾向。', 'Zǒngtǐ bǐjiào kèguān, búguò duì píngtái de zérèn tán de jiào shǎo, sìhū yǒu yídìng qīngxiàng.', 'Nhìn chung khá khách quan, nhưng ít bàn trách nhiệm nền tảng, dường như có khuynh hướng nhất định.', 'Phê bình cân bằng.'], ['完全不客观。', 'Wánquán bú kèguān.', 'Tuyệt đối hoá.'], ['作者是专家，肯定对。', 'Zuòzhě shì zhuānjiā, kěndìng duì.', 'Thiếu tư duy phản biện.']),
        T(['你的看法呢？', 'Nǐ de kànfǎ ne?', 'Ý bạn?'], ['不可否认，公众素养很重要；与此同时，平台也应承担审核责任。', 'Bù kě fǒurèn, gōngzhòng sùyǎng hěn zhòngyào; yǔ cǐ tóngshí, píngtái yě yīng chéngdān shěnhé zérèn.', 'Không thể phủ nhận hiểu biết công chúng quan trọng; đồng thời nền tảng cũng phải chịu trách nhiệm kiểm duyệt.', 'Lập trường cân bằng.'], ['没看法。', 'Méi kànfǎ.', 'Né.'], ['不关我的事。', 'Bù guān wǒ de shì.', 'Thờ ơ.'])
      ], ket: 'Em đã đọc và bình luận xã luận có tư duy phản biện.'
    },
    tom: ['笔者认为 / 不可否认 / 与此同时 / 归根结底', 'Đánh giá tính khách quan'], nguphap: 'Đọc – bình luận xã luận', phatam: '舆论 yúlùn, 归根结底 guī gēn jié dǐ',
    loi: ['Tin tuyệt đối vào tác giả', 'Phê bình cực đoan'], btvn: ['Đọc 1 xã luận tiếng Trung, tóm luận điểm 3 câu', 'Viết bình luận 200 chữ', 'Luyện 🎤 3 câu']
  };

  const d21 = {
    n: 21, ten: plan[20].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Kiểm tra giai đoạn 3: học thuật, trích dẫn, diễn văn, lễ tân, đàm phán đầu tư, xã luận.',
    hoc: `<h4>Tóm tắt giai đoạn 3</h4>${tbl(['Chủ đề', 'Cụm then chốt'], [['Đặt vấn đề', '近年来…日益受到关注；然而…较少；本文旨在…'], ['Trích dẫn', '表明、可能、在一定程度上、来源'], ['Diễn văn', '荣幸、携手、共创、共赢'], ['Lễ tân', '远道而来、请允许我介绍、一路顺风'], ['Đầu tư', '控股、估值、尽职调查、底线'], ['Xã luận', '不可否认、与此同时、归根结底']])}`,
    qs: [['mc', 'Tiễn khách nói?', '祝各位一路顺风！', ['一路辛苦了！', '欢迎远道而来！', '请上座。'], 'Tiễn.'], ['mc', 'Câu rào đón học thuật?', '这可能是由于样本较小。', ['这肯定是错的。', '绝对正确。', '毫无疑问。'], 'Thận trọng.']],
    noi: [['很荣幸能在这里与大家交流。', 'Hěn róngxìng néng zài zhèlǐ yǔ dàjiā jiāoliú. – Rất vinh dự được trao đổi cùng quý vị.'], ['这是我们的底线。', 'Zhè shì wǒmen de dǐxiàn. – Đây là giới hạn cuối.']],
    hoithoai: {
      ctx: 'Mô phỏng: một ngày đại diện công ty tại diễn đàn đầu tư Việt – Trung.', vai: 'Nhiều người nói, em xử lý.', ai: '🎭 多人',
      luot: [
        T(['（主持人）请您开场。', '(Zhǔchírén) Qǐng nín kāichǎng.', '(MC) Mời mở đầu.'], ['很荣幸能在这里与各位交流，我想传达三个信息。', 'Hěn róngxìng néng zài zhèlǐ yǔ gèwèi jiāoliú, wǒ xiǎng chuándá sān ge xìnxī.', 'Rất vinh dự trao đổi cùng quý vị, tôi muốn truyền đạt ba thông điệp.', 'Mở đầu chuẩn.'], ['开始了。', 'Kāishǐ le.', 'Thô.'], ['我紧张。', 'Wǒ jǐnzhāng.', 'Kém.']),
        T(['（投资者）你们的估值太高了。', '(Tóuzīzhě) Nǐmen de gūzhí tài gāo le.', '(NĐT) Định giá quá cao.'], ['我理解您的顾虑，不过估值基于过去三年的增长数据，我们可以在尽职调查中详细说明。', 'Wǒ lǐjiě nín de gùlǜ, búguò gūzhí jīyú guòqù sān nián de zēngzhǎng shùjù, wǒmen kěyǐ zài jìnzhí diàochá zhōng xiángxì shuōmíng.', 'Tôi hiểu băn khoăn, nhưng định giá dựa trên tăng trưởng 3 năm, có thể giải trình chi tiết khi thẩm định.', 'Học thuật + đàm phán.'], ['不高。', 'Bù gāo.', 'Cãi suông.'], ['那降一半。', 'Nà jiàng yíbàn.', 'Nhượng vô lý.']),
        T(['（记者）您怎么看中越金融合作？', '(Jìzhě) Nín zěnme kàn Zhōng-Yuè jīnróng hézuò?', '(Phóng viên) Anh nhìn nhận hợp tác tài chính Việt – Trung?'], ['不可否认，挑战仍然存在；与此同时，双方优势互补，机遇大于挑战。', 'Bù kě fǒurèn, tiǎozhàn réngrán cúnzài; yǔ cǐ tóngshí, shuāngfāng yōushì hùbǔ, jīyù dà yú tiǎozhàn.', 'Không thể phủ nhận thách thức vẫn còn; đồng thời hai bên bổ trợ, thời cơ lớn hơn thách thức.', 'Cân bằng.'], ['很好。', 'Hěn hǎo.', 'Sơ sài.'], ['无可奉告。', 'Wú kě fènggào.', 'Né.'])
      ], ket: 'Em đã đại diện công ty tại diễn đàn trọn vẹn!'
    },
    tom: ['Ôn giai đoạn 3', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn', phatam: 'Ôn ngữ điệu diễn văn',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: học lại ngày yếu', 'Làm ⚡ Luyện nhanh', 'Viết bình luận 300 chữ về hợp tác Việt – Trung trong lĩnh vực em quan tâm']
  };

  const d22 = {
    n: 22, ten: plan[21].ten, kinds: K,
    muc: 'Đọc và cảm thụ 2 bài thơ Đường nổi tiếng (công cộng): 《静夜思》 của Lý Bạch, 《登鹳雀楼》 của Vương Chi Hoán.',
    hoc: `<h4>《静夜思》 李白 (Tĩnh dạ tứ – Lý Bạch)</h4><p class="zh-srt">床前明月光，疑是地上霜。<br>举头望明月，低头思故乡。</p><p class="small muted">Chuáng qián míng yuè guāng, yí shì dì shang shuāng. Jǔ tóu wàng míng yuè, dī tóu sī gùxiāng.</p>
      <h4>《登鹳雀楼》 王之涣 (Đăng Quán Tước lâu – Vương Chi Hoán)</h4><p class="zh-srt">白日依山尽，黄河入海流。<br>欲穷千里目，更上一层楼。</p><p class="small muted">Bái rì yī shān jìn, Huánghé rù hǎi liú. Yù qióng qiān lǐ mù, gèng shàng yì céng lóu.</p>
      ${tip('🔑 "更上一层楼" ngày nay dùng phổ biến: <b>tiến thêm một bước</b> – rất hay trong lời chúc, phát biểu.')}`,
    vocab: [
      w('诗', 'shī', 'thơ', '', ['唐诗很有名。', 'Tángshī hěn yǒumíng.', 'Thơ Đường rất nổi tiếng.']),
      w('明月', 'míngyuè', 'trăng sáng', '', ['举头望明月。', 'Jǔ tóu wàng míngyuè.', 'Ngẩng đầu nhìn trăng sáng.']),
      w('故乡', 'gùxiāng', 'quê hương', '', ['思念故乡。', 'Sīniàn gùxiāng.', 'Nhớ quê hương.']),
      w('霜', 'shuāng', 'sương giá', '', ['地上霜。', 'Dì shang shuāng.', 'Sương trên mặt đất.']),
      w('思念', 'sīniàn', 'nhớ nhung', '', ['思念家人。', 'Sīniàn jiārén.', 'Nhớ người thân.']),
      w('更上一层楼', 'gèng shàng yì céng lóu', 'tiến thêm một bước', '', ['祝你的事业更上一层楼！', 'Zhù nǐ de shìyè gèng shàng yì céng lóu!', 'Chúc sự nghiệp bạn tiến thêm một bước!']),
      w('意境', 'yìjìng', 'ý cảnh', '', ['这首诗意境很美。', 'Zhè shǒu shī yìjìng hěn měi.', 'Bài thơ ý cảnh rất đẹp.']),
      w('首', 'shǒu', 'bài (lượng từ thơ, nhạc)', '', ['一首诗。', 'Yì shǒu shī.', 'Một bài thơ.']),
      w('诗人', 'shīrén', 'nhà thơ', '', ['李白是伟大的诗人。', 'Lǐ Bái shì wěidà de shīrén.', 'Lý Bạch là nhà thơ vĩ đại.']),
      w('朗诵', 'lǎngsòng', 'ngâm, đọc diễn cảm', '', ['朗诵一首诗。', 'Lǎngsòng yì shǒu shī.', 'Ngâm một bài thơ.'])
    ],
    qs: [
      ['mc', '《静夜思》 do ai viết?', '李白', ['杜甫', '王之涣', '白居易'], 'Lý Bạch.'],
      ['mc', 'Câu thơ nào ngày nay dùng để chúc tiến bộ?', '更上一层楼', ['疑是地上霜', '低头思故乡', '黄河入海流'], 'Tiến thêm một bước.'],
      ['mc', '一___诗', '首', ['本', '张', '篇章'], 'Lượng từ.'],
      ['hear', '举头望明月，低头思故乡。', 'Ngẩng đầu nhìn trăng sáng, cúi đầu nhớ cố hương.', ['Ngẩng đầu nhìn mặt trời.', 'Cúi đầu nhìn sông.', 'Nhớ bạn bè.'], 'Tĩnh dạ tứ.'],
      ['hear', '祝贵公司的事业更上一层楼！', 'Chúc sự nghiệp quý công ty tiến thêm một bước!', ['Chúc lên tầng trên.', 'Công ty chuyển văn phòng.', 'Chúc thượng lộ bình an.'], 'Dùng điển thơ.'],
      ['order', 'Sắp xếp: “Bài thơ ý cảnh rất đẹp.”', ['这首诗', '意境', '很', '美。'], '这首诗意境很美。']
    ],
    noi: [['床前明月光，疑是地上霜。', 'Chuáng qián míng yuè guāng, yí shì dì shang shuāng. – Đầu giường ánh trăng soi, ngỡ là sương trên mặt đất.'], ['欲穷千里目，更上一层楼。', 'Yù qióng qiān lǐ mù, gèng shàng yì céng lóu. – Muốn nhìn xa nghìn dặm, lên thêm một tầng lầu.'], ['祝你的事业更上一层楼！', 'Zhù nǐ de shìyè gèng shàng yì céng lóu! – Chúc sự nghiệp tiến thêm một bước!']],
    hoithoai: {
      ctx: 'Trong tiệc mừng thăng chức của đối tác Trung Quốc, em được mời nói lời chúc.', vai: 'Đối tác nói, em chúc bằng thơ Đường.', ai: '🥂 周总',
      luot: [
        T(['小阮，你来说几句吧！', 'Xiǎo Ruǎn, nǐ lái shuō jǐ jù ba!', 'Tiểu Nguyễn, nói vài câu đi!'], ['王之涣说"欲穷千里目，更上一层楼"，祝周总的事业更上一层楼！', 'Wáng Zhīhuàn shuō "yù qióng qiān lǐ mù, gèng shàng yì céng lóu", zhù Zhōu zǒng de shìyè gèng shàng yì céng lóu!', 'Vương Chi Hoán có câu "muốn nhìn nghìn dặm, lên thêm tầng lầu", chúc sự nghiệp ông Chu tiến thêm một bước!', 'Dẫn thơ đúng chỗ.'], ['低头思故乡！', 'Dī tóu sī gùxiāng!', 'Sai ngữ cảnh (buồn nhớ nhà).'], ['恭喜，干杯。', 'Gōngxǐ, gānbēi.', 'Đơn giản.']),
        T(['哇，你还会唐诗！', 'Wà, nǐ hái huì Tángshī!', 'Ồ, bạn còn biết thơ Đường!'], ['越南人也很喜欢唐诗，很多诗我们从小就学过。', 'Yuènán rén yě hěn xǐhuan Tángshī, hěn duō shī wǒmen cóng xiǎo jiù xuéguo.', 'Người Việt cũng rất thích thơ Đường, nhiều bài học từ nhỏ.', 'Kết nối văn hoá.'], ['我只会这一句。', 'Wǒ zhǐ huì zhè yí jù.', 'Tự hạ.'], ['唐诗很难。', 'Tángshī hěn nán.', 'Lạc.']),
        T(['那你最喜欢哪首？', 'Nà nǐ zuì xǐhuan nǎ shǒu?', 'Bạn thích nhất bài nào?'], ['《静夜思》，每次出差在外，都会想起"低头思故乡"。', '"Jìng Yè Sī", měi cì chūchāi zài wài, dōu huì xiǎngqǐ "dī tóu sī gùxiāng".', 'Tĩnh dạ tứ, mỗi lần công tác xa đều nhớ "cúi đầu nhớ cố hương".', 'Cảm thụ cá nhân.'], ['都不喜欢。', 'Dōu bù xǐhuan.', 'Mâu thuẫn.'], ['李白写的那首长的。', 'Lǐ Bái xiě de nà shǒu cháng de.', 'Mơ hồ.'])
      ], ket: 'Em đã dùng thơ Đường tinh tế trong giao tiếp.'
    },
    tom: ['《静夜思》 – nhớ quê', '《登鹳雀楼》 – 更上一层楼', 'Lượng từ 首'], nguphap: 'Cảm thụ thơ cổ', phatam: 'Đọc thơ ngũ ngôn ngắt 2–3',
    loi: ['Dẫn thơ sai ngữ cảnh'], btvn: ['Học thuộc và ngâm 2 bài thơ', 'Tìm bản dịch thơ tiếng Việt của 2 bài', 'Luyện 🎤 3 câu']
  };

  const d23 = {
    n: 23, ten: plan[22].ten, kinds: K,
    muc: 'Hiểu và dẫn đúng một số câu kinh điển của Khổng Tử và Lão Tử (văn bản cổ, công cộng) trong giao tiếp hiện đại.',
    hoc: `${tbl(['Câu', 'Xuất xứ', 'Nghĩa', 'Dùng khi'], [['学而时习之，不亦说乎？', '《论语》', 'Học mà thường ôn luyện, chẳng vui sao?', 'nói về học tập'], ['三人行，必有我师焉。', '《论语》', 'Ba người cùng đi, ắt có thầy ta.', 'khiêm tốn học hỏi'], ['己所不欲，勿施于人。', '《论语》', 'Điều mình không muốn, chớ làm cho người.', 'đạo đức, đối nhân'], ['千里之行，始于足下。', '《道德经》', 'Đi nghìn dặm bắt đầu từ bước chân.', 'khởi đầu dự án'], ['知人者智，自知者明。', '《道德经》', 'Biết người là trí, biết mình là sáng.', 'tự nhận thức']])}`,
    vocab: [
      w('孔子', 'Kǒngzǐ', 'Khổng Tử', '', ['孔子是教育家。', 'Kǒngzǐ shì jiàoyùjiā.', 'Khổng Tử là nhà giáo dục.']),
      w('老子', 'Lǎozǐ', 'Lão Tử', '', ['老子写了《道德经》。', 'Lǎozǐ xiěle "Dàodéjīng".', 'Lão Tử viết Đạo Đức Kinh.']),
      w('论语', 'Lúnyǔ', 'Luận Ngữ', '', ['《论语》很经典。', '"Lúnyǔ" hěn jīngdiǎn.', 'Luận Ngữ rất kinh điển.']),
      w('经典', 'jīngdiǎn', 'kinh điển', '', ['经典名句。', 'Jīngdiǎn míngjù.', 'Danh ngôn kinh điển.']),
      w('名言', 'míngyán', 'danh ngôn', '', ['引用名言。', 'Yǐnyòng míngyán.', 'Trích danh ngôn.']),
      w('始于足下', 'shǐ yú zú xià', 'bắt đầu từ bước chân', '', ['千里之行，始于足下。', 'Qiān lǐ zhī xíng, shǐ yú zú xià.', 'Đi nghìn dặm bắt đầu từ một bước.']),
      w('勿', 'wù', 'chớ, đừng (văn ngôn)', '', ['请勿吸烟。', 'Qǐng wù xīyān.', 'Xin đừng hút thuốc.']),
      w('智慧', 'zhìhuì', 'trí tuệ', '', ['古人的智慧。', 'Gǔrén de zhìhuì.', 'Trí tuệ người xưa.']),
      w('思想', 'sīxiǎng', 'tư tưởng', '', ['儒家思想。', 'Rújiā sīxiǎng.', 'Tư tưởng Nho gia.']),
      w('启发', 'qǐfā', 'gợi mở, truyền cảm hứng', '', ['这句话给我很大启发。', 'Zhè jù huà gěi wǒ hěn dà qǐfā.', 'Câu này gợi mở cho tôi nhiều.'])
    ],
    qs: [
      ['mc', 'Khởi động dự án lớn, dẫn câu nào?', '千里之行，始于足下。', ['己所不欲，勿施于人。', '低头思故乡。', '三人行，必有我师焉。'], 'Bắt đầu từ bước nhỏ.'],
      ['mc', '己所不欲，勿施于人 nghĩa là?', 'Điều mình không muốn, chớ làm cho người', ['Muốn gì làm nấy', 'Hãy giúp người', 'Đừng tin ai'], 'Khổng Tử.'],
      ['mc', '请___吸烟。(đừng – văn viết)', '勿', ['别了', '不要了', '没'], '勿.'],
      ['hear', '三人行，必有我师焉。我们要向每个同事学习。', 'Ba người cùng đi ắt có thầy ta. Ta phải học mọi đồng nghiệp.', ['Không cần học ai.', 'Chỉ học sếp.', 'Đi ba người.'], 'Khiêm tốn.'],
      ['hear', '孔子的思想对越南文化影响很深。', 'Tư tưởng Khổng Tử ảnh hưởng sâu đến văn hoá Việt Nam.', ['Không ảnh hưởng.', 'Lão Tử ảnh hưởng.', 'Chỉ ảnh hưởng TQ.'], '影响.'],
      ['order', 'Sắp xếp: “Câu này gợi mở cho tôi nhiều.”', ['这句话', '给我', '很大', '启发。'], '这句话给我很大启发。']
    ],
    noi: [['千里之行，始于足下。', 'Qiān lǐ zhī xíng, shǐ yú zú xià. – Đi nghìn dặm bắt đầu từ một bước.'], ['三人行，必有我师焉。', 'Sān rén xíng, bì yǒu wǒ shī yān. – Ba người cùng đi ắt có thầy ta.'], ['己所不欲，勿施于人。', 'Jǐ suǒ bú yù, wù shī yú rén. – Điều mình không muốn, chớ làm cho người.']],
    hoithoai: {
      ctx: 'Em phát biểu khởi động dự án chuyển đổi số liên doanh.', vai: 'Đồng nghiệp hỏi, em dẫn kinh điển.', ai: '👥 项目组',
      luot: [
        T(['项目这么大，从哪儿开始？', 'Xiàngmù zhème dà, cóng nǎr kāishǐ?', 'Dự án lớn thế, bắt đầu từ đâu?'], ['老子说"千里之行，始于足下"，我们先从一个网点试点开始。', 'Lǎozǐ shuō "qiān lǐ zhī xíng, shǐ yú zú xià", wǒmen xiān cóng yí ge wǎngdiǎn shìdiǎn kāishǐ.', 'Lão Tử nói "đi nghìn dặm bắt đầu từ bước chân", ta thí điểm một điểm giao dịch trước.', 'Dẫn đúng.'], ['己所不欲，勿施于人。', 'Jǐ suǒ bú yù, wù shī yú rén.', 'Sai ngữ cảnh.'], ['不知道从哪儿。', 'Bù zhīdào cóng nǎr.', 'Thiếu.']),
        T(['我们团队经验不够怎么办？', 'Wǒmen tuánduì jīngyàn bú gòu zěnme bàn?', 'Đội thiếu kinh nghiệm thì sao?'], ['三人行，必有我师焉，我们可以向合作方和其他银行学习。', 'Sān rén xíng, bì yǒu wǒ shī yān, wǒmen kěyǐ xiàng hézuòfāng hé qítā yínháng xuéxí.', 'Ba người cùng đi ắt có thầy ta, ta học đối tác và ngân hàng khác.', 'Dẫn đúng.'], ['我们最厉害。', 'Wǒmen zuì lìhai.', 'Kiêu.'], ['放弃吧。', 'Fàngqì ba.', 'Bỏ cuộc.']),
        T(['客户数据怎么处理？', 'Kèhù shùjù zěnme chǔlǐ?', 'Dữ liệu khách xử lý thế nào?'], ['己所不欲，勿施于人——我们不希望自己的数据被滥用，所以必须严格保护客户隐私。', 'Jǐ suǒ bú yù, wù shī yú rén — wǒmen bù xīwàng zìjǐ de shùjù bèi lànyòng, suǒyǐ bìxū yángé bǎohù kèhù yǐnsī.', 'Điều mình không muốn chớ làm cho người – ta không muốn dữ liệu mình bị lạm dụng nên phải bảo vệ nghiêm quyền riêng tư khách.', 'Dẫn đúng đạo lý.'], ['随便用。', 'Suíbiàn yòng.', 'Sai đạo đức.'], ['千里之行。', 'Qiān lǐ zhī xíng.', 'Sai ngữ cảnh.'])
      ], ket: 'Em đã dẫn kinh điển đúng lúc, đúng nghĩa.'
    },
    tom: ['5 câu kinh điển Khổng – Lão', '勿 = 别'], nguphap: 'Dẫn kinh điển', phatam: '焉 yān, 勿 wù',
    loi: ['Dẫn sai ngữ cảnh', 'Lạm dụng kinh điển'], btvn: ['Học thuộc 5 câu', 'Viết 1 đoạn phát biểu 150 chữ có dẫn 1 câu', 'Luyện 🎤 3 câu']
  };

  const d24 = {
    n: 24, ten: plan[23].ten, kinds: K,
    muc: 'Hiểu ngôn ngữ mạng và tiếng lóng phổ biến của giới trẻ Trung Quốc; biết khi nào không nên dùng.',
    hoc: `${tbl(['Từ', 'Nghĩa', 'Ghi chú'], [['内卷', 'cạnh tranh khốc liệt vô ích', 'phổ biến cả trong báo chí'], ['躺平', 'buông xuôi, "nằm thẳng"', 'thái độ sống'], ['打工人', 'người đi làm thuê', 'tự giễu'], ['yyds (永远的神)', 'đỉnh mãi mãi', 'chỉ dùng mạng'], ['破防', 'bị chạm cảm xúc', 'mạng xã hội'], ['种草 / 拔草', 'bị dụ mua / bỏ ý định mua', 'thương mại điện tử']])}
      ${tip('⚠️ Tiếng lóng thay đổi nhanh. Hiểu để đọc mạng xã hội, nhưng <b>không dùng</b> trong email, họp hay với người lớn tuổi.')}`,
    vocab: [
      w('内卷', 'nèijuǎn', 'cạnh tranh khốc liệt vô ích', '', ['这个行业太内卷了。', 'Zhège hángyè tài nèijuǎn le.', 'Ngành này cạnh tranh quá khốc liệt.']),
      w('躺平', 'tǎngpíng', 'buông xuôi', '', ['有些年轻人选择躺平。', 'Yǒuxiē niánqīng rén xuǎnzé tǎngpíng.', 'Một số người trẻ chọn buông xuôi.']),
      w('打工人', 'dǎgōngrén', 'người làm thuê', '', ['打工人，加油！', 'Dǎgōngrén, jiāyóu!', 'Người đi làm, cố lên!']),
      w('网红', 'wǎnghóng', 'người nổi tiếng mạng', '', ['她是网红。', 'Tā shì wǎnghóng.', 'Cô ấy là hot girl mạng.']),
      w('种草', 'zhòngcǎo', 'bị dụ muốn mua', '', ['我被这个包种草了。', 'Wǒ bèi zhège bāo zhòngcǎo le.', 'Tôi bị cái túi này dụ rồi.']),
      w('破防', 'pòfáng', 'vỡ oà cảm xúc', '', ['看到这个视频我破防了。', 'Kàndào zhège shìpín wǒ pòfáng le.', 'Xem video này tôi vỡ oà.']),
      w('吐槽', 'tǔcáo', 'than thở, chê bai (vui)', '', ['大家都在吐槽这个广告。', 'Dàjiā dōu zài tǔcáo zhège guǎnggào.', 'Mọi người đang chê quảng cáo này.']),
      w('点赞', 'diǎnzàn', 'bấm thích', '', ['给我点个赞。', 'Gěi wǒ diǎn ge zàn.', 'Like cho tôi nhé.']),
      w('流行语', 'liúxíngyǔ', 'từ thịnh hành', '', ['年度流行语。', 'Niándù liúxíngyǔ.', 'Từ thịnh hành của năm.']),
      w('正式场合', 'zhèngshì chǎnghé', 'dịp trang trọng', '', ['正式场合不要用网络用语。', 'Zhèngshì chǎnghé búyào yòng wǎngluò yòngyǔ.', 'Dịp trang trọng đừng dùng từ mạng.'])
    ],
    qs: [
      ['mc', '内卷 = ?', 'cạnh tranh khốc liệt vô ích', ['cuộn vào trong', 'hợp tác', 'nội bộ'], 'nèijuǎn.'],
      ['mc', 'Có nên viết "yyds" trong email gửi đối tác?', 'Không, chỉ dùng trên mạng', ['Có, rất chuyên nghiệp', 'Có, thể hiện thân thiện', 'Tuỳ tâm trạng'], 'Phong cách.'],
      ['mc', '吐槽 = ?', 'than thở, chê (vui)', ['nhổ cỏ', 'khen ngợi', 'tranh luận'], 'tǔcáo.'],
      ['hear', '现在很多行业都很内卷，有的年轻人干脆选择躺平。', 'Nhiều ngành cạnh tranh khốc liệt, một số người trẻ chọn buông xuôi luôn.', ['Ngành nào cũng dễ.', 'Người trẻ đều cố gắng.', 'Không có cạnh tranh.'], '内卷 / 躺平.'],
      ['hear', '正式场合不要用网络用语。', 'Dịp trang trọng đừng dùng từ mạng.', ['Nên dùng nhiều.', 'Chỉ dùng khi họp.', 'Không có quy tắc.'], 'Phong cách.'],
      ['order', 'Sắp xếp: “Like cho tôi nhé.”', ['给我', '点个', '赞', '。'], '给我点个赞。']
    ],
    noi: [['这个行业太内卷了。', 'Zhège hángyè tài nèijuǎn le. – Ngành này cạnh tranh quá khốc liệt.'], ['打工人，加油！', 'Dǎgōngrén, jiāyóu! – Người đi làm, cố lên!'], ['正式场合不要用网络用语。', 'Zhèngshì chǎnghé búyào yòng wǎngluò yòngyǔ. – Dịp trang trọng đừng dùng từ mạng.']],
    hoithoai: {
      ctx: 'Đồng nghiệp trẻ người Trung Quốc nhắn tin trên WeChat.', vai: 'Bạn nhắn, em đáp đúng phong cách.', ai: '📱 小美',
      luot: [
        T(['今天又加班到十点，打工人太难了😭', 'Jīntiān yòu jiābān dào shí diǎn, dǎgōngrén tài nán le 😭', 'Hôm nay lại tăng ca đến 10h, đi làm khổ quá 😭'], ['辛苦啦！打工人加油💪 明天请你喝奶茶~', 'Xīnkǔ la! Dǎgōngrén jiāyóu 💪 Míngtiān qǐng nǐ hē nǎichá~', 'Vất vả rồi! Cố lên 💪 Mai mời bạn trà sữa~', 'Thân mật, hợp ngữ cảnh.'], ['尊敬的同事，您辛苦了。', 'Zūnjìng de tóngshì, nín xīnkǔ le.', 'Quá trang trọng trên chat bạn bè.'], ['那你躺平吧。', 'Nà nǐ tǎngpíng ba.', 'Khuyên tiêu cực.']),
        T(['哈哈好！对了，明天给老板的报告你写了吗？', 'Hāha hǎo! Duì le, míngtiān gěi lǎobǎn de bàogào nǐ xiě le ma?', 'Haha ok! À, báo cáo mai gửi sếp viết chưa?'], ['写好了，用正式的语言，没有网络用语哈哈。', 'Xiě hǎo le, yòng zhèngshì de yǔyán, méiyǒu wǎngluò yòngyǔ hāha.', 'Viết xong rồi, dùng ngôn ngữ trang trọng, không có từ mạng haha.', 'Phân biệt phong cách.'], ['写了，yyds！', 'Xiě le, yyds!', 'Ok trên chat, nhưng câu ý báo cáo thì không.'], ['没写，躺平了。', 'Méi xiě, tǎngpíng le.', 'Thiếu trách nhiệm.']),
        T(['你中文怎么连网络用语都懂？', 'Nǐ Zhōngwén zěnme lián wǎngluò yòngyǔ dōu dǒng?', 'Sao tiếng Trung bạn hiểu cả từ mạng?'], ['我常看抖音和小红书，被很多东西种草了😂', 'Wǒ cháng kàn Dǒuyīn hé Xiǎohóngshū, bèi hěn duō dōngxi zhòngcǎo le 😂', 'Tôi hay xem Douyin, Tiểu Hồng Thư, bị dụ mua nhiều thứ lắm 😂', 'Dùng từ mạng đúng chỗ.'], ['我是专家。', 'Wǒ shì zhuānjiā.', 'Kiêu.'], ['不知道。', 'Bù zhīdào.', 'Cụt.'])
      ], ket: 'Em đã chuyển đổi phong cách ngôn ngữ linh hoạt.'
    },
    tom: ['内卷 / 躺平 / 打工人 / 种草 / 破防 / 吐槽', 'Không dùng trong dịp trang trọng'], nguphap: 'Phong cách ngôn ngữ', phatam: '内卷 nèijuǎn',
    loi: ['Dùng tiếng lóng trong văn bản công việc'], btvn: ['Đọc 10 bình luận trên mạng xã hội Trung Quốc, tìm 5 từ lóng', 'Viết lại 3 câu lóng thành văn phong chuẩn', 'Luyện 🎤 3 câu']
  };

  const d25 = {
    n: 25, ten: plan[24].ten, kinds: K,
    muc: 'Hiểu hài hước và chơi chữ đồng âm trong tiếng Trung; dùng hài hước nhẹ nhàng trong giao tiếp.',
    hoc: `${tbl(['Hiện tượng', 'Ví dụ', 'Giải thích'], [['Đồng âm cát tường', '年年有余（鱼）', 'Năm nào cũng dư (cá) – treo tranh cá ngày Tết'], ['Đồng âm kiêng kỵ', '送钟 = 送终', 'Tặng đồng hồ = tiễn người chết'], ['Số đẹp', '8 (发), 6 (顺)', '发财, 顺利'], ['Tự giễu', '我的中文是体育老师教的', 'Tiếng Trung tôi do thầy thể dục dạy (= kém)']])}
      ${tip('🔑 Hài hước an toàn nhất là <b>tự giễu nhẹ</b>. Tránh đùa về chính trị, tôn giáo, ngoại hình.')}`,
    vocab: [
      w('幽默', 'yōumò', 'hài hước', '', ['他很幽默。', 'Tā hěn yōumò.', 'Anh ấy rất hài hước.']),
      w('谐音', 'xiéyīn', 'đồng âm (chơi chữ)', '', ['这是谐音。', 'Zhè shì xiéyīn.', 'Đây là chơi chữ đồng âm.']),
      w('吉利', 'jílì', 'may mắn, cát lợi', '', ['八是吉利的数字。', 'Bā shì jílì de shùzì.', 'Số 8 là số may.']),
      w('忌讳', 'jìhuì', 'kiêng kỵ', '', ['送钟是忌讳。', 'Sòng zhōng shì jìhuì.', 'Tặng đồng hồ là điều kiêng.']),
      w('开玩笑', 'kāi wánxiào', 'đùa', '', ['我开玩笑的。', 'Wǒ kāi wánxiào de.', 'Tôi đùa thôi.']),
      w('自嘲', 'zìcháo', 'tự giễu', '', ['他喜欢自嘲。', 'Tā xǐhuan zìcháo.', 'Anh ấy thích tự giễu.']),
      w('笑话', 'xiàohua', 'chuyện cười', '', ['讲个笑话。', 'Jiǎng ge xiàohua.', 'Kể chuyện cười.']),
      w('冷场', 'lěngchǎng', 'không khí chùng xuống', '', ['别让会议冷场。', 'Bié ràng huìyì lěngchǎng.', 'Đừng để cuộc họp chùng xuống.']),
      w('活跃气氛', 'huóyuè qìfēn', 'làm sôi nổi không khí', '', ['讲个笑话活跃气氛。', 'Jiǎng ge xiàohua huóyuè qìfēn.', 'Kể chuyện cười cho sôi nổi.']),
      w('分寸', 'fēncun', 'chừng mực', '', ['开玩笑要有分寸。', 'Kāi wánxiào yào yǒu fēncun.', 'Đùa phải có chừng mực.'])
    ],
    qs: [
      ['mc', 'Vì sao Tết treo tranh cá?', '年年有余 – 鱼 đồng âm 余 (dư dả)', ['Vì cá đẹp', 'Vì thích ăn cá', 'Vì cá bơi nhanh'], 'Đồng âm cát tường.'],
      ['mc', 'Hài hước an toàn nhất?', 'Tự giễu nhẹ', ['Đùa về ngoại hình người khác', 'Đùa chính trị', 'Đùa tôn giáo'], 'Có chừng mực.'],
      ['mc', '分寸 = ?', 'chừng mực', ['phân số', 'tấc đất', 'phần trăm'], 'fēncun.'],
      ['hear', '我的中文是体育老师教的，说得不好请多包涵。', 'Tiếng Trung tôi do thầy thể dục dạy, nói không tốt xin bỏ qua.', ['Tôi là giáo viên thể dục.', 'Tiếng Trung tôi rất giỏi.', 'Tôi học ở trường thể thao.'], 'Tự giễu.'],
      ['hear', '开玩笑要有分寸，别让对方尴尬。', 'Đùa phải có chừng mực, đừng làm đối phương ngượng.', ['Đùa thoải mái.', 'Đừng bao giờ đùa.', 'Làm người khác ngượng.'], '分寸.'],
      ['order', 'Sắp xếp: “Tôi đùa thôi.”', ['我', '开', '玩笑', '的。'], '我开玩笑的。']
    ],
    noi: [['我开玩笑的，别介意。', 'Wǒ kāi wánxiào de, bié jièyì. – Tôi đùa thôi, đừng để bụng.'], ['祝大家年年有余！', 'Zhù dàjiā nián nián yǒu yú! – Chúc mọi người năm nào cũng dư dả!'], ['开玩笑要有分寸。', 'Kāi wánxiào yào yǒu fēncun. – Đùa phải có chừng mực.']],
    hoithoai: {
      ctx: 'Bữa tối với đối tác, không khí hơi trầm sau buổi đàm phán căng.', vai: 'Đối tác nói, em làm sôi nổi không khí.', ai: '🍽️ 郑总',
      luot: [
        T(['今天谈得有点儿累。', 'Jīntiān tán de yǒudiǎnr lèi.', 'Hôm nay đàm phán hơi mệt.'], ['是啊，我的中文都快用完了，明天得去充电了。', 'Shì a, wǒ de Zhōngwén dōu kuài yòng wán le, míngtiān děi qù chōngdiàn le.', 'Đúng vậy, tiếng Trung của tôi sắp hết pin, mai phải đi sạc thôi.', 'Tự giễu nhẹ.'], ['您今天谈得太差了。', 'Nín jīntiān tán de tài chà le.', 'Xúc phạm.'], ['我很累，不想说话。', 'Wǒ hěn lèi, bù xiǎng shuōhuà.', 'Làm chùng không khí.']),
        T(['哈哈，你太谦虚了！', 'Hāha, nǐ tài qiānxū le!', 'Haha, bạn khiêm tốn quá!'], ['来，我们点个鱼吧，祝我们的合作年年有余！', 'Lái, wǒmen diǎn ge yú ba, zhù wǒmen de hézuò nián nián yǒu yú!', 'Nào, gọi món cá, chúc hợp tác năm nào cũng dư dả!', 'Chơi chữ cát tường.'], ['我们送您一个钟吧。', 'Wǒmen sòng nín yí ge zhōng ba.', 'Kiêng kỵ!'], ['鱼很贵。', 'Yú hěn guì.', 'Lạc.']),
        T(['你连谐音都懂，真厉害！', 'Nǐ lián xiéyīn dōu dǒng, zhēn lìhai!', 'Bạn hiểu cả chơi chữ, giỏi thật!'], ['越南也有很多类似的习俗，我们的文化很接近。', 'Yuènán yě yǒu hěn duō lèisì de xísú, wǒmen de wénhuà hěn jiējìn.', 'Việt Nam cũng có nhiều phong tục tương tự, văn hoá ta rất gần.', 'Kết nối.'], ['我什么都懂。', 'Wǒ shénme dōu dǒng.', 'Kiêu.'], ['谐音很无聊。', 'Xiéyīn hěn wúliáo.', 'Chê.'])
      ], ket: 'Em đã dùng hài hước có chừng mực làm ấm không khí.'
    },
    tom: ['谐音 cát tường / kiêng kỵ', 'Tự giễu nhẹ', '分寸'], nguphap: 'Hài hước và chơi chữ', phatam: '余 yú / 鱼 yú',
    loi: ['Đùa thiếu chừng mực', 'Dùng từ kiêng kỵ'], btvn: ['Tìm 5 ví dụ chơi chữ đồng âm Tết', 'Chuẩn bị 2 câu tự giễu nhẹ', 'Luyện 🎤 3 câu']
  };

  const d26 = {
    n: 26, ten: plan[25].ten, kinds: K,
    muc: 'Ứng biến tình huống khó: câu hỏi nhạy cảm, bị chất vấn, quên từ, bị ngắt lời, cần từ chối khéo.',
    hoc: `${tbl(['Tình huống', 'Cách ứng biến'], [['Câu hỏi nhạy cảm', '这个问题超出了我的职责范围，我建议您咨询…'], ['Bị chất vấn', '谢谢您的问题，让我先确认一下我理解得对不对…'], ['Quên từ', '那个…怎么说呢…就是用来…的东西'], ['Bị ngắt lời', '请允许我把这句话说完。'], ['Từ chối khéo', '这个恐怕有点儿困难，我们看看有没有别的办法。']])}`,
    vocab: [
      w('敏感', 'mǐngǎn', 'nhạy cảm', '', ['这是个敏感话题。', 'Zhè shì ge mǐngǎn huàtí.', 'Đây là chủ đề nhạy cảm.']),
      w('超出', 'chāochū', 'vượt quá', '', ['超出我的职责范围。', 'Chāochū wǒ de zhízé fànwéi.', 'Vượt quá phạm vi trách nhiệm của tôi.']),
      w('职责', 'zhízé', 'chức trách', '', ['这是我的职责。', 'Zhè shì wǒ de zhízé.', 'Đây là chức trách của tôi.']),
      w('范围', 'fànwéi', 'phạm vi', '', ['在范围之内。', 'Zài fànwéi zhī nèi.', 'Trong phạm vi.']),
      w('咨询', 'zīxún', 'tư vấn, hỏi ý', '', ['请咨询法务部。', 'Qǐng zīxún fǎwùbù.', 'Vui lòng hỏi phòng pháp chế.']),
      w('恐怕', 'kǒngpà', 'e rằng', '', ['恐怕来不及了。', 'Kǒngpà lái bu jí le.', 'E rằng không kịp.']),
      w('打断', 'dǎduàn', 'ngắt lời', '', ['对不起，打断一下。', 'Duìbuqǐ, dǎduàn yíxià.', 'Xin lỗi, cho ngắt lời chút.']),
      w('澄清', 'chéngqīng', 'làm rõ', '', ['我想澄清一下。', 'Wǒ xiǎng chéngqīng yíxià.', 'Tôi muốn làm rõ.']),
      w('尴尬', 'gāngà', 'ngượng, khó xử', '', ['气氛很尴尬。', 'Qìfēn hěn gāngà.', 'Không khí khó xử.']),
      w('委婉', 'wěiwǎn', 'uyển chuyển', '', ['委婉地拒绝。', 'Wěiwǎn de jùjué.', 'Từ chối uyển chuyển.'])
    ],
    qs: [
      ['mc', 'Bị hỏi ngoài thẩm quyền?', '这个问题超出了我的职责范围，我建议您咨询相关部门。', ['我不知道，别问我。', '随便说一个。', '我猜是这样。'], 'Chuyên nghiệp.'],
      ['mc', 'Bị ngắt lời liên tục?', '请允许我把这句话说完。', ['闭嘴！', '你别说了。', '我不说了。'], 'Lịch sự, kiên định.'],
      ['mc', '委婉 = ?', 'uyển chuyển', ['uỷ thác', 'quanh co gian dối', 'thẳng thắn'], 'wěiwǎn.'],
      ['hear', '这个恐怕有点儿困难，我们看看有没有别的办法。', 'E rằng hơi khó, ta xem có cách khác không.', ['Hoàn toàn được.', 'Không bao giờ.', 'Tôi không quan tâm.'], 'Từ chối khéo.'],
      ['hear', '我想澄清一下，我们并没有那样说过。', 'Tôi muốn làm rõ, chúng tôi hoàn toàn không nói như vậy.', ['Chúng tôi đã nói thế.', 'Tôi đồng ý.', 'Không cần làm rõ.'], '澄清.'],
      ['order', 'Sắp xếp: “Tôi muốn làm rõ.”', ['我', '想', '澄清', '一下。'], '我想澄清一下。']
    ],
    noi: [['请允许我把这句话说完。', 'Qǐng yǔnxǔ wǒ bǎ zhè jù huà shuō wán. – Xin cho phép tôi nói hết câu.'], ['我想澄清一下。', 'Wǒ xiǎng chéngqīng yíxià. – Tôi muốn làm rõ.'], ['这个恐怕有点儿困难。', 'Zhège kǒngpà yǒudiǎnr kùnnan. – Việc này e hơi khó.']],
    hoithoai: {
      ctx: 'Họp báo sau sự cố; phóng viên đặt câu hỏi khó.', vai: 'Phóng viên chất vấn, em ứng biến.', ai: '🎙️ 记者',
      luot: [
        T(['听说你们要裁员一千人，是真的吗？', 'Tīngshuō nǐmen yào cáiyuán yì qiān rén, shì zhēn de ma?', 'Nghe nói các anh sắp cắt 1.000 người, có thật không?'], ['我想澄清一下，目前公司没有这样的计划，具体人事问题超出了我的职责范围。', 'Wǒ xiǎng chéngqīng yíxià, mùqián gōngsī méiyǒu zhèyàng de jìhuà, jùtǐ rénshì wèntí chāochūle wǒ de zhízé fànwéi.', 'Tôi xin làm rõ, hiện công ty không có kế hoạch đó; vấn đề nhân sự cụ thể vượt phạm vi của tôi.', 'Làm rõ + giới hạn.'], ['是真的，别告诉别人。', 'Shì zhēn de, bié gàosu biérén.', 'Lộ thông tin.'], ['你听谁说的？', 'Nǐ tīng shéi shuō de?', 'Đối đầu.']),
        T(['那你们为什么不早说？你们一直在隐瞒！', 'Nà nǐmen wèishénme bù zǎo shuō? Nǐmen yìzhí zài yǐnmán!', 'Sao không nói sớm? Các anh luôn che giấu!'], ['谢谢您的问题，请允许我把话说完：我们一直按规定及时公开信息。', 'Xièxie nín de wèntí, qǐng yǔnxǔ wǒ bǎ huà shuō wán: wǒmen yìzhí àn guīdìng jíshí gōngkāi xìnxī.', 'Cảm ơn câu hỏi, cho phép tôi nói hết: chúng tôi luôn công bố thông tin kịp thời theo quy định.', 'Bình tĩnh, kiên định.'], ['你胡说！', 'Nǐ húshuō!', 'Mất kiểm soát.'], ['对不起，我们错了。', 'Duìbuqǐ, wǒmen cuò le.', 'Nhận sai vô căn cứ.']),
        T(['能透露一下明年的计划吗？', 'Néng tòulù yíxià míngnián de jìhuà ma?', 'Tiết lộ kế hoạch năm sau được không?'], ['这个恐怕现在还不方便透露，公司会在年度会议上正式公布。', 'Zhège kǒngpà xiànzài hái bù fāngbiàn tòulù, gōngsī huì zài niándù huìyì shang zhèngshì gōngbù.', 'E rằng hiện chưa tiện tiết lộ, công ty sẽ công bố chính thức tại hội nghị thường niên.', 'Từ chối khéo.'], ['告诉你吧，…', 'Gàosu nǐ ba, …', 'Lộ thông tin.'], ['不能说，走吧。', 'Bù néng shuō, zǒu ba.', 'Thô.'])
      ], ket: 'Em đã ứng biến tình huống khó bình tĩnh, chuyên nghiệp.'
    },
    tom: ['超出职责范围', '请允许我把话说完', '澄清 / 恐怕 / 委婉'], nguphap: 'Ứng biến giao tiếp', phatam: '澄清 chéngqīng, 尴尬 gāngà',
    loi: ['Mất bình tĩnh', 'Lộ thông tin', 'Nhận sai vô căn cứ'], btvn: ['Chuẩn bị câu trả lời cho 5 câu hỏi khó trong công việc của em', 'Tập với bạn đóng vai phóng viên', 'Luyện 🎤 3 câu']
  };

  const d27 = {
    n: 27, ten: plan[26].ten, kinds: K,
    muc: 'Luyện dạng bài HSK 7–9: viết luận ~600 chữ (đồ thị/ý kiến) và dịch Trung ↔ ngoại ngữ (với người Việt: Trung ↔ Việt).',
    hoc: `${tbl(['Phần thi', 'Chiến lược'], [['Viết – mô tả số liệu', 'Tổng quan → đặc điểm nổi bật → so sánh → kết luận; dùng 呈…趋势, 占…比例'], ['Viết – nghị luận', 'Luận điểm rõ, 2–3 luận cứ, phản biện, kết luận; ~600 chữ'], ['Dịch viết', 'Đọc hết đoạn trước, giữ thuật ngữ thống nhất, soát cuối'], ['Dịch nói', 'Nghe trọn ý, ghi ký hiệu, dịch mạch lạc']])}
      ${tip('📌 HSK 7–9 là một bài thi chung, kết quả xếp cấp 7, 8 hoặc 9. Hãy xem cấu trúc đề mới nhất trên trang chính thức chinesetest.cn.')}`,
    vocab: [
      w('呈', 'chéng', 'thể hiện, có (xu hướng)', '', ['呈上升趋势。', 'Chéng shàngshēng qūshì.', 'Có xu hướng tăng.']),
      w('趋势', 'qūshì', 'xu hướng', '', ['下降趋势。', 'Xiàjiàng qūshì.', 'Xu hướng giảm.']),
      w('比例', 'bǐlì', 'tỷ lệ', '', ['占很大比例。', 'Zhàn hěn dà bǐlì.', 'Chiếm tỷ lệ lớn.']),
      w('图表', 'túbiǎo', 'biểu đồ', '', ['根据图表…', 'Gēnjù túbiǎo…', 'Theo biểu đồ…']),
      w('峰值', 'fēngzhí', 'giá trị đỉnh', '', ['达到峰值。', 'Dádào fēngzhí.', 'Đạt đỉnh.']),
      w('波动', 'bōdòng', 'biến động', '', ['价格波动很大。', 'Jiàgé bōdòng hěn dà.', 'Giá biến động mạnh.']),
      w('总体', 'zǒngtǐ', 'tổng thể', '', ['总体来看…', 'Zǒngtǐ lái kàn…', 'Nhìn tổng thể…']),
      w('平稳', 'píngwěn', 'ổn định, bình ổn', '', ['保持平稳。', 'Bǎochí píngwěn.', 'Giữ ổn định.']),
      w('急剧', 'jíjù', 'đột ngột, mạnh', '', ['急剧下降。', 'Jíjù xiàjiàng.', 'Giảm mạnh.']),
      w('逐年', 'zhúnián', 'qua từng năm', '', ['逐年增加。', 'Zhúnián zēngjiā.', 'Tăng qua từng năm.'])
    ],
    qs: [
      ['mc', '呈上升趋势 = ?', 'có xu hướng tăng', ['đã giảm', 'ổn định', 'đạt đỉnh'], 'Mô tả đồ thị.'],
      ['mc', '逐年增加 = ?', 'tăng qua từng năm', ['tăng một năm', 'giảm từng năm', 'năm nay tăng'], 'zhúnián.'],
      ['mc', '价格___很大。(biến động)', '波动', ['波浪', '活动', '流动'], 'bōdòng.'],
      ['hear', '从图表可以看出，移动支付用户逐年增加，二〇二五年达到峰值。', 'Biểu đồ cho thấy người dùng thanh toán di động tăng qua từng năm, đạt đỉnh năm 2025.', ['Giảm từng năm.', 'Đạt đỉnh 2015.', 'Không đổi.'], 'Đọc đồ thị. (số minh hoạ)'],
      ['hear', '总体来看，市场保持平稳，没有急剧波动。', 'Nhìn tổng thể thị trường ổn định, không biến động mạnh.', ['Biến động mạnh.', 'Thị trường sụp đổ.', 'Tăng đột ngột.'], '平稳.'],
      ['order', 'Sắp xếp: “Chiếm tỷ lệ lớn.”', ['占', '很大', '比例', '。'], '占很大比例。']
    ],
    noi: [['总体来看，呈上升趋势。', 'Zǒngtǐ lái kàn, chéng shàngshēng qūshì. – Nhìn tổng thể có xu hướng tăng.'], ['用户数量逐年增加。', 'Yònghù shùliàng zhúnián zēngjiā. – Số người dùng tăng qua từng năm.'], ['价格波动很大。', 'Jiàgé bōdòng hěn dà. – Giá biến động mạnh.']],
    hoithoai: {
      ctx: 'Gia sư luyện thi hỏi em cách làm bài mô tả biểu đồ HSK 7–9.', vai: 'Gia sư hỏi, em trả lời.', ai: '👨‍🏫 备考老师',
      luot: [
        T(['看到图表第一步做什么？', 'Kàndào túbiǎo dì yī bù zuò shénme?', 'Thấy biểu đồ bước đầu làm gì?'], ['先写总体趋势，比如"总体来看，呈上升趋势"。', 'Xiān xiě zǒngtǐ qūshì, bǐrú "zǒngtǐ lái kàn, chéng shàngshēng qūshì".', 'Viết xu hướng tổng thể trước, ví dụ "nhìn tổng thể có xu hướng tăng".', 'Chiến lược.'], ['把每个数字都写下来。', 'Bǎ měi ge shùzì dōu xiě xiàlai.', 'Liệt kê, thiếu phân tích.'], ['先写我的看法。', 'Xiān xiě wǒ de kànfǎ.', 'Sai trình tự.']),
        T(['然后呢？', 'Ránhòu ne?', 'Rồi sao?'], ['写最明显的特点：峰值、急剧变化，再做比较。', 'Xiě zuì míngxiǎn de tèdiǎn: fēngzhí, jíjù biànhuà, zài zuò bǐjiào.', 'Viết đặc điểm nổi bật: đỉnh, thay đổi đột ngột, rồi so sánh.', 'Cấu trúc.'], ['写完就交。', 'Xiě wán jiù jiāo.', 'Thiếu phân tích.'], ['写一个故事。', 'Xiě yí ge gùshi.', 'Lạc đề.']),
        T(['翻译部分有什么技巧？', 'Fānyì bùfen yǒu shénme jìqiǎo?', 'Phần dịch có mẹo gì?'], ['先读完整段，统一术语，最后检查有没有遗漏数字。', 'Xiān dú wán zhěng duàn, tǒngyī shùyǔ, zuìhòu jiǎnchá yǒu méiyǒu yílòu shùzì.', 'Đọc hết đoạn, thống nhất thuật ngữ, cuối cùng soát sót số.', 'Kỹ năng dịch.'], ['逐字翻译。', 'Zhú zì fānyì.', 'Dịch từng chữ.'], ['跳过难的句子。', 'Tiàoguò nán de jùzi.', 'Bỏ sót.'])
      ], ket: 'Em đã nắm chiến lược thi HSK 7–9.'
    },
    tom: ['呈…趋势 / 逐年 / 峰值 / 波动 / 平稳', 'Luận 600 chữ', 'Dịch: đọc hết – thống nhất – soát'], nguphap: 'Kỹ năng thi HSK 7–9', phatam: '趋势 qūshì, 峰值 fēngzhí',
    loi: ['Liệt kê số không phân tích', 'Dịch từng chữ'], btvn: ['Viết mô tả 1 biểu đồ 300 chữ', 'Viết luận 600 chữ chủ đề AI và việc làm', 'Luyện 🎤 3 câu']
  };

  const LK = ['listen', 'listenPy', 'listen', 'meaning', 'pinyin'];
  const d28 = {
    n: 28, ten: plan[27].ten, tong: 1, kt: { n: 20, min: 20 }, kinds: LK,
    muc: 'Nghe tốc độ tự nhiên: hội thoại có ngắt quãng, nói nhanh, nuốt âm, khẩu ngữ (那个, 就是说, 反正).',
    hoc: `${tbl(['Từ đệm khẩu ngữ', 'Chức năng'], [['那个…', 'ngập ngừng, tìm từ'], ['就是说', 'nghĩa là, tức là'], ['反正', 'dù sao thì'], ['怎么说呢', 'nói sao nhỉ'], ['对吧 / 是吧', 'đúng không (tìm đồng thuận)']])}
      ${tip('🎧 Đừng cố nghe từng chữ; bỏ qua từ đệm, bắt <b>động từ + danh từ chính</b>.')}`,
    vocab: [
      w('反正', 'fǎnzhèng', 'dù sao thì', '', ['反正我不去。', 'Fǎnzhèng wǒ bú qù.', 'Dù sao tôi không đi.']),
      w('就是说', 'jiùshì shuō', 'tức là', '', ['就是说，你同意了？', 'Jiùshì shuō, nǐ tóngyì le?', 'Tức là bạn đồng ý?']),
      w('怎么说呢', 'zěnme shuō ne', 'nói sao nhỉ', '', ['怎么说呢，有点儿复杂。', 'Zěnme shuō ne, yǒudiǎnr fùzá.', 'Nói sao nhỉ, hơi phức tạp.']),
      w('其实吧', 'qíshí ba', 'thật ra thì', '', ['其实吧，我也不太清楚。', 'Qíshí ba, wǒ yě bú tài qīngchu.', 'Thật ra tôi cũng không rõ lắm.']),
      w('对吧', 'duì ba', 'đúng không', '', ['你也觉得，对吧？', 'Nǐ yě juéde, duì ba?', 'Bạn cũng thấy vậy, đúng không?']),
      w('语速', 'yǔsù', 'tốc độ nói', '', ['语速太快了。', 'Yǔsù tài kuài le.', 'Nói nhanh quá.']),
      w('口语', 'kǒuyǔ', 'khẩu ngữ', '', ['这是口语表达。', 'Zhè shì kǒuyǔ biǎodá.', 'Đây là cách nói khẩu ngữ.']),
      w('听力', 'tīnglì', 'khả năng nghe', '', ['提高听力。', 'Tígāo tīnglì.', 'Nâng khả năng nghe.']),
      w('适应', 'shìyìng', 'thích nghi', '', ['慢慢就适应了。', 'Mànmàn jiù shìyìng le.', 'Từ từ sẽ quen.']),
      w('素材', 'sùcái', 'tư liệu', '', ['真实的听力素材。', 'Zhēnshí de tīnglì sùcái.', 'Tư liệu nghe thực tế.'])
    ],
    qs: [
      ['hear', '那个……怎么说呢，就是说这个项目可能要推迟，对吧？', 'Ừm… nói sao nhỉ, tức là dự án có thể phải hoãn, đúng không?', ['Dự án hoàn thành sớm.', 'Dự án bị huỷ chắc chắn.', 'Dự án không đổi.'], 'Bỏ từ đệm, bắt ý chính.'],
      ['hear', '反正我已经跟老板说了，他同不同意是他的事。', 'Dù sao tôi đã nói với sếp, đồng ý hay không là việc của ông ấy.', ['Tôi chưa nói.', 'Sếp đã đồng ý.', 'Tôi sẽ nói sau.'], '反正.'],
      ['hear', '其实吧，价格不是问题，关键是交货时间。', 'Thật ra giá không phải vấn đề, mấu chốt là thời gian giao hàng.', ['Giá là vấn đề chính.', 'Giao hàng không quan trọng.', 'Không có vấn đề.'], '其实 + 关键.'],
      ['hear', '你说的我明白，就是说我们得先做测试，对吧？', 'Tôi hiểu ý bạn, tức là ta phải kiểm thử trước, đúng không?', ['Bỏ qua kiểm thử.', 'Kiểm thử sau.', 'Tôi không hiểu.'], 'Xác nhận.'],
      ['mc', '反正 = ?', 'dù sao thì', ['ngược lại', 'chính xác', 'phản đối'], 'fǎnzhèng.'],
      ['order', 'Sắp xếp: “Từ từ sẽ quen.”', ['慢慢', '就', '适应', '了。'], '慢慢就适应了。']
    ],
    noi: [['就是说，您同意了？', 'Jiùshì shuō, nín tóngyì le? – Tức là anh đồng ý?'], ['怎么说呢，有点儿复杂。', 'Zěnme shuō ne, yǒudiǎnr fùzá. – Nói sao nhỉ, hơi phức tạp.'], ['语速太快了，请慢一点儿。', 'Yǔsù tài kuài le, qǐng màn yìdiǎnr. – Nói nhanh quá, xin chậm chút.']],
    hoithoai: {
      ctx: 'Cuộc gọi nhanh với đối tác nói giọng tự nhiên, nhiều từ đệm.', vai: 'Đối tác nói nhanh, em xác nhận ý.', ai: '📞 刘经理',
      luot: [
        T(['那个……我们那边呢，就是说，可能下周才能发货，你看行不行？', 'Nàge… wǒmen nàbiān ne, jiùshì shuō, kěnéng xià zhōu cái néng fāhuò, nǐ kàn xíng bu xíng?', 'Ừm… bên tôi ấy, tức là có thể tuần sau mới giao được, bạn thấy sao?'], ['就是说要推迟一周，对吧？我们最晚能等到下周三。', 'Jiùshì shuō yào tuīchí yì zhōu, duì ba? Wǒmen zuì wǎn néng děng dào xià zhōusān.', 'Tức là hoãn một tuần, đúng không? Bên tôi đợi muộn nhất đến thứ Tư tuần sau.', 'Xác nhận + giới hạn.'], ['你说什么？', 'Nǐ shuō shénme?', 'Thiếu nỗ lực.'], ['好，下个月也行。', 'Hǎo, xià ge yuè yě xíng.', 'Nghe nhầm, nhượng quá.']),
        T(['反正周三之前肯定到，你放心。', 'Fǎnzhèng zhōusān zhīqián kěndìng dào, nǐ fàngxīn.', 'Dù sao trước thứ Tư chắc chắn đến, yên tâm.'], ['好的，那麻烦您发一个书面确认给我。', 'Hǎo de, nà máfan nín fā yí ge shūmiàn quèrèn gěi wǒ.', 'Được, phiền anh gửi xác nhận bằng văn bản.', 'Chốt bằng văn bản.'], ['反正我不信。', 'Fǎnzhèng wǒ bú xìn.', 'Đối đầu.'], ['不用确认。', 'Búyòng quèrèn.', 'Rủi ro.']),
        T(['没问题，我马上发。', 'Méi wèntí, wǒ mǎshàng fā.', 'Không vấn đề, gửi ngay.'], ['谢谢刘经理，辛苦了！', 'Xièxie Liú jīnglǐ, xīnkǔ le!', 'Cảm ơn quản lý Lưu, vất vả rồi!', 'Kết.'], ['快点儿。', 'Kuài diǎnr.', 'Thô.'], ['算了。', 'Suàn le.', 'Lạc.'])
      ], ket: 'Em đã nghe và xác nhận ý trong hội thoại tự nhiên.'
    },
    tom: ['Bỏ qua từ đệm', '就是说… đúng không? để xác nhận'], nguphap: 'Nghe khẩu ngữ tự nhiên', phatam: '反正 fǎnzhèng',
    loi: ['Cố nghe từng chữ', 'Không xác nhận lại'], btvn: ['Nghe 1 podcast tiếng Trung 15 phút không phụ đề', 'Ghi 5 từ đệm nghe được', 'Luyện 🎤 3 câu']
  };

  const d29 = {
    n: 29, ten: plan[28].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Mô phỏng phiên dịch tổng hợp: lễ ký kết – phát biểu – hỏi đáp – tiệc, chuyển đổi văn phong liên tục.',
    hoc: `<p>Không có từ mới. Làm hội thoại 3 lần. Mỗi lượt hãy tự hỏi: <b>văn phong nào?</b> (nghi lễ / chuyên môn / thân mật) – <b>có số liệu không?</b> – <b>có bẫy Hán Việt không?</b></p>`,
    qs: [['mc', 'Dịch “bác sĩ trưởng khoa”?', '主任医生 / 科主任', ['博士主任', '大博士', '主任博士'], 'Bẫy Hán Việt.'], ['mc', 'Dịch 应当 trong hợp đồng?', 'phải', ['nên', 'muốn', 'có thể'], 'Pháp lý.']],
    noi: [['尊敬的各位来宾，女士们、先生们：', 'Zūnjìng de gèwèi láibīn, nǚshìmen, xiānshengmen: – Kính thưa quý vị đại biểu, thưa quý bà, quý ông:'], ['预祝合作圆满成功！', 'Yùzhù hézuò yuánmǎn chénggōng! – Chúc hợp tác thành công tốt đẹp!']],
    hoithoai: {
      ctx: 'Em là phiên dịch chính cho lễ ký kết hợp tác giữa bệnh viện Việt Nam và tập đoàn y tế Trung Quốc.', vai: 'Nhiều người nói, em dịch/xử lý.', ai: '🎭 多人',
      luot: [
        T(['（中方）请把"Bác sĩ Lê, Trưởng khoa Tim mạch"翻译成中文。', '(Zhōngfāng) Qǐng bǎ "…" fānyì chéng Zhōngwén.', '(Phía TQ) Dịch "Bác sĩ Lê, Trưởng khoa Tim mạch".'], ['"心内科主任黎医生"。', '"Xīnnèikē zhǔrèn Lí yīshēng".', 'Dịch đúng, tránh 博士.', 'Bẫy Hán Việt.'], ['"心脏博士黎主任"。', '"Xīnzàng bóshì Lí zhǔrèn".', 'Sai 博士.'], ['"黎大夫博士"。', '"Lí dàifu bóshì".', 'Sai.']),
        T(['（越方致辞）请翻译："Chúng tôi cam kết chia sẻ dữ liệu theo đúng quy định pháp luật."', '(Yuèfāng zhìcí) Qǐng fānyì: "…"', '(Phía Việt phát biểu) Dịch câu này.'], ['"我们承诺严格按照法律规定共享数据。"', '"Wǒmen chéngnuò yángé ànzhào fǎlǜ guīdìng gòngxiǎng shùjù."', 'Chính xác, trang trọng.', 'Văn phong.'], ['"我们分享数据，没问题。"', '"Wǒmen fēnxiǎng shùjù, méi wèntí."', 'Mất ý pháp lý.'], ['"数据随便用。"', '"Shùjù suíbiàn yòng."', 'Sai nghiêm trọng.']),
        T(['（宴会上，中方院长）小翻译辛苦了！来，喝一杯！', '(Yànhuì shang, Zhōngfāng yuànzhǎng) Xiǎo fānyì xīnkǔ le! Lái, hē yì bēi!', '(Tiệc) Phiên dịch vất vả rồi! Nào, uống một ly!'], ['谢谢院长！我以茶代酒，祝两院合作更上一层楼！', 'Xièxie yuànzhǎng! Wǒ yǐ chá dài jiǔ, zhù liǎng yuàn hézuò gèng shàng yì céng lóu!', 'Cảm ơn viện trưởng! Xin lấy trà thay rượu, chúc hợp tác hai viện tiến thêm một bước!', 'Chuyển văn phong + điển thơ.'], ['不喝，我在工作。', 'Bù hē, wǒ zài gōngzuò.', 'Cộc.'], ['干！yyds！', 'Gān! yyds!', 'Sai văn phong.'])
      ], ket: 'Em đã phiên dịch tổng hợp, chuyển văn phong linh hoạt!'
    },
    tom: ['Kiểm tra văn phong – số liệu – bẫy Hán Việt mỗi lượt'], nguphap: 'Tổng hợp', phatam: 'Ngữ điệu theo văn phong',
    loi: ['Giữ một văn phong cho mọi tình huống'], btvn: ['Làm lại hội thoại 3 lần', 'Tự dịch 1 bài phát biểu ký kết 300 chữ', 'Chuẩn bị bài kiểm tra cuối khoá']
  };

  const d30 = {
    n: 30, ten: plan[29].ten, vocab: [], tong: 1, kt: { n: 30, min: 30 }, kinds: K,
    muc: 'Kiểm tra cuối khoá HSK 7–9 (30 câu) và xây dựng kế hoạch tự học suốt đời.',
    hoc: `<h4>🏁 Hoàn thành toàn bộ lộ trình Tiếng Trung 5 cấp!</h4>${tbl(['Kỹ năng', 'Duy trì mỗi tuần'], [['Đọc', '2 bài xã luận / báo chuyên ngành'], ['Nghe', '1 podcast hoặc tin tức 30 phút không phụ đề'], ['Nói', '1 buổi trò chuyện với người bản xứ'], ['Viết', '1 bài 500 chữ hoặc 1 bản dịch'], ['Từ vựng', 'Sổ thuật ngữ riêng theo lĩnh vực công việc']])}
      ${tip('🌱 Ở cấp này, tiến bộ đến từ <b>dùng tiếng Trung trong công việc thật</b>. Hãy nhận thêm việc dịch, họp, đọc tài liệu gốc.')}`,
    qs: [['mc', '鉴于风险较大，我们___推迟。', '建议', ['建立', '见面', '简单'], 'Văn phong.'], ['mc', '“Tiến thêm một bước” dùng câu thơ?', '更上一层楼', ['低头思故乡', '疑是地上霜', '黄河入海流'], 'Thơ Đường.'], ['mc', '千里之行，___。', '始于足下', ['勿施于人', '必有我师', '不亦说乎'], 'Lão Tử.']],
    noi: [['我已经完成了全部五个级别的学习。', 'Wǒ yǐjīng wánchéngle quánbù wǔ ge jíbié de xuéxí. – Tôi đã hoàn thành cả 5 cấp.'], ['学无止境。', 'Xué wú zhǐjìng. – Học không có điểm dừng.']],
    hoithoai: {
      ctx: 'Buổi tổng kết toàn lộ trình với giáo viên.', vai: 'Cô hỏi, em trả lời.', ai: '👩‍🏫 王老师',
      luot: [
        T(['回顾五个级别，你最大的变化是什么？', 'Huígù wǔ ge jíbié, nǐ zuì dà de biànhuà shì shénme?', 'Nhìn lại 5 cấp, thay đổi lớn nhất của em?'], ['从只会说"你好"，到现在能在会议上做口译，这是最大的变化。', 'Cóng zhǐ huì shuō "nǐ hǎo", dào xiànzài néng zài huìyì shang zuò kǒuyì, zhè shì zuì dà de biànhuà.', 'Từ chỉ biết nói "xin chào" đến giờ có thể phiên dịch hội nghị – đó là thay đổi lớn nhất.', 'Tổng kết.'], ['没什么变化。', 'Méi shénme biànhuà.', 'Tự hạ.'], ['我都会了。', 'Wǒ dōu huì le.', 'Kiêu.']),
        T(['以后打算怎么继续？', 'Yǐhòu dǎsuàn zěnme jìxù?', 'Sau này tiếp tục thế nào?'], ['学无止境，我会每周坚持读、听、说、写，并在工作中多用中文。', 'Xué wú zhǐjìng, wǒ huì měi zhōu jiānchí dú, tīng, shuō, xiě, bìng zài gōngzuò zhōng duō yòng Zhōngwén.', 'Học không điểm dừng, em sẽ duy trì đọc nghe nói viết mỗi tuần và dùng tiếng Trung nhiều trong công việc.', 'Kế hoạch.'], ['不学了，学完了。', 'Bù xué le, xué wán le.', 'Dừng lại.'], ['躺平。', 'Tǎngpíng.', 'Tiêu cực.']),
        T(['最后送你一句话吧。', 'Zuìhòu sòng nǐ yí jù huà ba.', 'Cuối cùng tặng em một câu.'], ['谢谢老师！三人行，必有我师焉，您永远是我的老师。', 'Xièxie lǎoshī! Sān rén xíng, bì yǒu wǒ shī yān, nín yǒngyuǎn shì wǒ de lǎoshī.', 'Cảm ơn cô! Ba người cùng đi ắt có thầy ta, cô mãi là cô giáo của em.', 'Dẫn kinh điển, tri ân.'], ['不用了。', 'Búyòng le.', 'Thiếu tôn trọng.'], ['好的，再见。', 'Hǎo de, zàijiàn.', 'Lạnh nhạt.'])
      ], ket: 'Chúc mừng em đã hoàn thành trọn lộ trình Tiếng Trung 5 cấp! 🎉🀄'
    },
    tom: ['Kiểm tra 30 câu', 'Kế hoạch tự học suốt đời'], nguphap: 'Tổng ôn toàn khoá', phatam: 'Ngữ điệu tự nhiên',
    loi: ['Xem lại các câu sai trong báo cáo'], btvn: ['Đăng ký thi HSK 7–9 khi sẵn sàng', 'Lập kế hoạch tự học hằng tuần', 'Giúp một người khác bắt đầu học tiếng Trung']
  };

  Z.days.push(d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30);
})();

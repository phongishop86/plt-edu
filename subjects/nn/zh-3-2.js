/* PLT-Edu · Tiếng Trung – Cấp 3 (HSK 4): Ngày 15–30 */
(function () {
  'use strict';
  const Z = window.PLT_ZH3; if (!Z) return;
  const { w, T, tbl, tip, exs, K } = Z.H;
  const plan = Z.plan;

  const d15 = {
    n: 15, ten: plan[14].ten, kinds: K,
    muc: 'Điều hành và tham gia cuộc họp: mở đầu, báo cáo tiến độ, phân công, chốt việc.',
    hoc: `${tbl(['Chức năng', 'Mẫu'], [['Mở đầu', '人都到齐了，我们开始吧。'], ['Báo cáo', '目前项目完成了百分之七十。'], ['Vấn đề', '现在遇到的主要问题是…'], ['Phân công', '这件事由小王负责。'], ['Chốt', '我们总结一下今天的会议。']])}
      ${tip('🔑 <b>由 + người + 负责</b> = do ai phụ trách. <b>按时</b> = đúng hạn.')}`,
    vocab: [
      w('会议', 'huìyì', 'cuộc họp', '', ['会议几点开始？', 'Huìyì jǐ diǎn kāishǐ?', 'Họp mấy giờ bắt đầu?']),
      w('到齐', 'dàoqí', 'đến đủ', '', ['人都到齐了。', 'Rén dōu dàoqí le.', 'Mọi người đến đủ rồi.']),
      w('进度', 'jìndù', 'tiến độ', '', ['请汇报一下进度。', 'Qǐng huìbào yíxià jìndù.', 'Báo cáo tiến độ đi.']),
      w('汇报', 'huìbào', 'báo cáo (lên cấp trên)', '', ['我来汇报一下。', 'Wǒ lái huìbào yíxià.', 'Tôi xin báo cáo.']),
      w('目前', 'mùqián', 'hiện nay', '', ['目前一切正常。', 'Mùqián yíqiè zhèngcháng.', 'Hiện mọi thứ bình thường.']),
      w('项目', 'xiàngmù', 'dự án', '', ['这个项目很重要。', 'Zhège xiàngmù hěn zhòngyào.', 'Dự án này quan trọng.']),
      w('按时', 'ànshí', 'đúng hạn', '', ['我们能按时完成。', 'Wǒmen néng ànshí wánchéng.', 'Chúng ta hoàn thành đúng hạn được.']),
      w('总结', 'zǒngjié', 'tổng kết', '', ['我总结一下。', 'Wǒ zǒngjié yíxià.', 'Tôi tổng kết một chút.']),
      w('讨论', 'tǎolùn', 'thảo luận', '', ['我们讨论一下这个方案。', 'Wǒmen tǎolùn yíxià zhège fāng\'àn.', 'Ta thảo luận phương án này.']),
      w('方案', 'fāng\'àn', 'phương án', '', ['你有什么方案？', 'Nǐ yǒu shénme fāng\'àn?', 'Bạn có phương án gì?'])
    ],
    qs: [
      ['mc', '“Việc này do Tiểu Vương phụ trách” là?', '这件事由小王负责。', ['这件事被小王负责。', '小王这件事由负责。', '这件事负责由小王。'], '由 + người + 负责.'],
      ['mc', '人都到___了，我们开始吧。', '齐', ['完', '好', '到'], '到齐.'],
      ['mc', '汇报 nghĩa là?', 'báo cáo lên cấp trên', ['họp mặt', 'hồi âm', 'đền đáp'], 'huìbào.'],
      ['hear', '目前项目完成了百分之七十，能按时完成。', 'Dự án xong 70%, hoàn thành đúng hạn được.', ['Xong 17%.', 'Sẽ trễ hạn.', 'Xong 100%.'], '百分之七十.'],
      ['hear', '最后我们总结一下今天的会议。', 'Cuối cùng ta tổng kết cuộc họp hôm nay.', ['Bắt đầu họp.', 'Hoãn họp.', 'Họp ngày mai.'], '总结.'],
      ['order', 'Sắp xếp: “Ta thảo luận phương án này.”', ['我们', '讨论一下', '这个', '方案。'], '我们讨论一下这个方案。']
    ],
    noi: [['人都到齐了，我们开始吧。', 'Rén dōu dàoqí le, wǒmen kāishǐ ba. – Mọi người đủ rồi, bắt đầu nhé.'], ['目前项目完成了百分之七十。', 'Mùqián xiàngmù wánchéngle bǎi fēn zhī qīshí. – Dự án hiện xong 70%.'], ['我总结一下今天的会议。', 'Wǒ zǒngjié yíxià jīntiān de huìyì. – Tôi tổng kết cuộc họp hôm nay.']],
    hoithoai: {
      ctx: 'Họp tuần dự án triển khai phần mềm mới.', vai: 'Trưởng dự án hỏi, em báo cáo.', ai: '👩‍💼 项目经理',
      luot: [
        T(['先请你汇报一下进度。', 'Xiān qǐng nǐ huìbào yíxià jìndù.', 'Mời bạn báo cáo tiến độ trước.'], ['好的，目前完成了百分之八十，还剩测试部分。', 'Hǎo de, mùqián wánchéngle bǎi fēn zhī bāshí, hái shèng cèshì bùfen.', 'Vâng, hiện xong 80%, còn phần kiểm thử.', 'Số liệu rõ.'], ['我很好。', 'Wǒ hěn hǎo.', 'Lạc đề.'], ['进度被完成。', 'Jìndù bèi wánchéng.', 'Sai.']),
        T(['有什么困难吗？', 'Yǒu shénme kùnnan ma?', 'Có khó khăn gì không?'], ['主要问题是测试人员不够。', 'Zhǔyào wèntí shì cèshì rényuán bú gòu.', 'Vấn đề chính là thiếu người kiểm thử.', 'Nêu vấn đề.'], ['没有问题了过。', 'Méiyǒu wèntí le guo.', 'Sai.'], ['困难很好。', 'Kùnnan hěn hǎo.', 'Vô nghĩa.']),
        T(['那测试由小陈帮你负责，能按时完成吗？', 'Nà cèshì yóu Xiǎo Chén bāng nǐ fùzé, néng ànshí wánchéng ma?', 'Vậy Tiểu Trần hỗ trợ kiểm thử, đúng hạn được không?'], ['没问题，我们周五前一定完成。', 'Méi wèntí, wǒmen zhōuwǔ qián yídìng wánchéng.', 'Không vấn đề, trước thứ Sáu chắc chắn xong.', 'Cam kết.'], ['按时不了。', 'Ànshí bù liǎo.', 'Sai.'], ['小陈被负责。', 'Xiǎo Chén bèi fùzé.', 'Sai.'])
      ], ket: 'Em đã báo cáo tiến độ trong cuộc họp.'
    },
    tom: ['汇报进度', '由…负责', '按时完成'], nguphap: 'Ngôn ngữ họp', phatam: '汇报 huìbào, 进度 jìndù',
    loi: ['Dùng 被 thay 由'], btvn: ['Viết biên bản họp 100 chữ', 'Tập điều hành họp 3 phút', 'Luyện 🎤 3 câu']
  };

  const d16 = {
    n: 16, ten: plan[15].ten, kinds: K,
    muc: 'Tiếp nhận khiếu nại: lắng nghe, xin lỗi, hỏi chi tiết, đưa giải pháp, cam kết; dùng 尽快, 保证, 补偿.',
    hoc: `${tbl(['Bước', 'Mẫu câu'], [['Lắng nghe', '请您慢慢说，我在听。'], ['Xin lỗi', '非常抱歉给您带来麻烦。'], ['Hỏi chi tiết', '请问是什么时候发生的？'], ['Giải pháp', '我们会尽快帮您处理。'], ['Cam kết', '我保证这种情况不会再发生。']])}`,
    vocab: [
      w('投诉', 'tóusù', 'khiếu nại', '', ['我要投诉。', 'Wǒ yào tóusù.', 'Tôi muốn khiếu nại.']),
      w('麻烦', 'máfan', 'phiền phức', '', ['给您添麻烦了。', 'Gěi nín tiān máfan le.', 'Làm phiền anh rồi.']),
      w('尽快', 'jǐnkuài', 'càng sớm càng tốt', '', ['我们会尽快处理。', 'Wǒmen huì jǐnkuài chǔlǐ.', 'Chúng tôi xử lý sớm nhất.']),
      w('处理', 'chǔlǐ', 'xử lý', '', ['这件事我来处理。', 'Zhè jiàn shì wǒ lái chǔlǐ.', 'Việc này tôi xử lý.']),
      w('保证', 'bǎozhèng', 'bảo đảm', '', ['我保证不会再发生。', 'Wǒ bǎozhèng bú huì zài fāshēng.', 'Tôi đảm bảo không tái diễn.']),
      w('补偿', 'bǔcháng', 'bồi thường', '', ['我们会给您补偿。', 'Wǒmen huì gěi nín bǔcháng.', 'Chúng tôi sẽ bồi thường.']),
      w('满意', 'mǎnyì', 'hài lòng', '', ['您满意吗？', 'Nín mǎnyì ma?', 'Anh hài lòng không?']),
      w('理解', 'lǐjiě', 'thông cảm, hiểu', '', ['谢谢您的理解。', 'Xièxie nín de lǐjiě.', 'Cảm ơn sự thông cảm.']),
      w('生气', 'shēngqì', 'tức giận', '', ['请您别生气。', 'Qǐng nín bié shēngqì.', 'Xin anh đừng giận.']),
      w('负责人', 'fùzérén', 'người phụ trách', '', ['我要找负责人。', 'Wǒ yào zhǎo fùzérén.', 'Tôi muốn gặp người phụ trách.'])
    ],
    qs: [
      ['mc', 'Câu xin lỗi khách chuẩn?', '非常抱歉给您带来麻烦。', ['这不是我们的问题。', '你别吵了。', '麻烦你了，再见。'], 'Nhận trách nhiệm.'],
      ['mc', '我们会___帮您处理。(sớm nhất)', '尽快', ['尽量快了', '快快', '赶紧了'], 'jǐnkuài.'],
      ['mc', '补偿 nghĩa là?', 'bồi thường', ['bổ sung', 'bảo đảm', 'bù giờ'], 'bǔcháng.'],
      ['hear', '谢谢您的理解，我们保证这种情况不会再发生。', 'Cảm ơn sự thông cảm, chúng tôi đảm bảo không tái diễn.', ['Việc này sẽ còn xảy ra.', 'Chúng tôi không chịu trách nhiệm.', 'Anh hãy thông cảm lần sau.'], '保证.'],
      ['hear', '我等了一个多小时，我要投诉！', 'Tôi đợi hơn 1 tiếng, tôi muốn khiếu nại!', ['Tôi rất hài lòng.', 'Tôi đợi 10 phút.', 'Tôi muốn đăng ký.'], '投诉.'],
      ['order', 'Sắp xếp: “Việc này tôi xử lý.”', ['这件事', '我来', '处理', '。'], '这件事我来处理。']
    ],
    noi: [['非常抱歉给您带来麻烦。', 'Fēicháng bàoqiàn gěi nín dài lái máfan. – Rất xin lỗi vì đã gây phiền phức.'], ['我们会尽快帮您处理。', 'Wǒmen huì jǐnkuài bāng nín chǔlǐ. – Chúng tôi sẽ xử lý sớm nhất.'], ['谢谢您的理解。', 'Xièxie nín de lǐjiě. – Cảm ơn sự thông cảm.']],
    hoithoai: {
      ctx: 'Khách Trung Quốc bức xúc vì thẻ bị trừ tiền hai lần.', vai: 'Khách khiếu nại, em xử lý.', ai: '😠 客户',
      luot: [
        T(['你们银行怎么回事？我的钱被扣了两次！', 'Nǐmen yínháng zěnme huí shì? Wǒ de qián bèi kòule liǎng cì!', 'Ngân hàng các anh làm sao vậy? Tiền tôi bị trừ hai lần!'], ['非常抱歉给您带来麻烦，请您别着急，我马上查一下。', 'Fēicháng bàoqiàn gěi nín dài lái máfan, qǐng nín bié zháojí, wǒ mǎshàng chá yíxià.', 'Rất xin lỗi, anh đừng lo, tôi kiểm tra ngay.', 'Xin lỗi + hành động.'], ['那是您自己的问题。', 'Nà shì nín zìjǐ de wèntí.', 'Đổ lỗi.'], ['请您别投诉。', 'Qǐng nín bié tóusù.', 'Ngăn khách.']),
        T(['什么时候能退回来？', 'Shénme shíhou néng tuì huílai?', 'Khi nào được hoàn lại?'], ['确认是重复扣款，三个工作日内退回您的账户。', 'Quèrèn shì chóngfù kòukuǎn, sān ge gōngzuò rì nèi tuìhuí nín de zhànghù.', 'Xác nhận trừ trùng, trong 3 ngày làm việc sẽ hoàn về tài khoản.', 'Cam kết thời hạn.'], ['不知道，等着吧。', 'Bù zhīdào, děngzhe ba.', 'Thiếu trách nhiệm.'], ['尽快了过。', 'Jǐnkuài le guo.', 'Sai.']),
        T(['好吧，希望别再发生了。', 'Hǎo ba, xīwàng bié zài fāshēng le.', 'Thôi được, mong đừng xảy ra nữa.'], ['我们保证会改进，谢谢您的理解。', 'Wǒmen bǎozhèng huì gǎijìn, xièxie nín de lǐjiě.', 'Chúng tôi đảm bảo cải thiện, cảm ơn anh thông cảm.', 'Kết.'], ['一定还会发生。', 'Yídìng hái huì fāshēng.', 'Ngược.'], ['理解我们。', 'Lǐjiě wǒmen.', 'Ra lệnh.'])
      ], ket: 'Em đã xử lý khiếu nại theo 5 bước.'
    },
    tom: ['5 bước xử lý khiếu nại', '尽快 / 保证 / 补偿'], nguphap: 'Ngôn ngữ dịch vụ', phatam: '投诉 tóusù, 补偿 bǔcháng',
    loi: ['Đổ lỗi cho khách'], btvn: ['Viết kịch bản xử lý khiếu nại 8 lượt', 'Học thuộc 5 câu chuẩn', 'Luyện 🎤 3 câu']
  };

  const d17 = {
    n: 17, ten: plan[16].ten, kinds: K,
    muc: 'Nói về Internet, mạng xã hội, an toàn thông tin: mật khẩu, lừa đảo, virus, sao lưu.',
    hoc: `${tbl(['Chủ đề', 'Câu mẫu'], [['Lừa đảo', '不要点击陌生链接。– Đừng bấm liên kết lạ.'], ['Mật khẩu', '密码最好定期更换。– Nên đổi mật khẩu định kỳ.'], ['Sao lưu', '重要文件要备份。– Tệp quan trọng phải sao lưu.'], ['Virus', '电脑中病毒了。– Máy tính nhiễm virus.']])}
      ${tip('⚠️ Ngân hàng <b>không bao giờ</b> gọi điện xin 密码 hay 验证码. Gặp thì 挂电话 (cúp máy) và báo ngân hàng.')}`,
    vocab: [
      w('网络', 'wǎngluò', 'mạng', '', ['网络断了。', 'Wǎngluò duàn le.', 'Mất mạng rồi.']),
      w('安全', 'ānquán', 'an toàn', '', ['网络安全很重要。', 'Wǎngluò ānquán hěn zhòngyào.', 'An toàn mạng rất quan trọng.']),
      w('诈骗', 'zhàpiàn', 'lừa đảo', '', ['小心电话诈骗。', 'Xiǎoxīn diànhuà zhàpiàn.', 'Cẩn thận lừa đảo qua điện thoại.']),
      w('链接', 'liànjiē', 'đường link', '', ['不要点陌生链接。', 'Búyào diǎn mòshēng liànjiē.', 'Đừng bấm link lạ.']),
      w('陌生', 'mòshēng', 'lạ', '', ['陌生电话别接。', 'Mòshēng diànhuà bié jiē.', 'Số lạ đừng nghe.']),
      w('病毒', 'bìngdú', 'virus', '', ['电脑中病毒了。', 'Diànnǎo zhòng bìngdú le.', 'Máy nhiễm virus.']),
      w('备份', 'bèifèn', 'sao lưu', '', ['每周备份一次。', 'Měi zhōu bèifèn yí cì.', 'Mỗi tuần sao lưu một lần.']),
      w('更换', 'gēnghuàn', 'thay đổi', '', ['定期更换密码。', 'Dìngqī gēnghuàn mìmǎ.', 'Đổi mật khẩu định kỳ.']),
      w('个人信息', 'gèrén xìnxī', 'thông tin cá nhân', '', ['保护个人信息。', 'Bǎohù gèrén xìnxī.', 'Bảo vệ thông tin cá nhân.']),
      w('泄露', 'xièlòu', 'rò rỉ', '', ['数据泄露了。', 'Shùjù xièlòu le.', 'Dữ liệu bị rò rỉ.'])
    ],
    qs: [
      ['mc', 'Có người gọi tự xưng ngân hàng xin 验证码. Em nên?', '挂电话，然后打银行官方电话确认', ['马上告诉他', '告诉他一半', '发短信给他'], 'Không bao giờ đưa OTP.'],
      ['mc', '备份 nghĩa là?', 'sao lưu', ['dự phòng nhân sự', 'bản sao giấy', 'chuẩn bị'], 'bèifèn.'],
      ['mc', '不要点击___链接。', '陌生', ['安全', '重要', '个人'], 'Link lạ.'],
      ['hear', '电脑中病毒了，重要文件都打不开了。', 'Máy nhiễm virus, tệp quan trọng không mở được.', ['Máy chạy rất nhanh.', 'Tệp đã sao lưu.', 'Mạng bị mất.'], '中病毒.'],
      ['hear', '为了安全，密码最好三个月更换一次。', 'Để an toàn, nên đổi mật khẩu 3 tháng một lần.', ['Không cần đổi mật khẩu.', 'Đổi mỗi ngày.', 'Mật khẩu nên đơn giản.'], '三个月.'],
      ['order', 'Sắp xếp: “Bảo vệ thông tin cá nhân.”', ['保护', '个人', '信息', '。'], '保护个人信息。']
    ],
    noi: [['不要点击陌生链接。', 'Búyào diǎnjī mòshēng liànjiē. – Đừng bấm liên kết lạ.'], ['重要文件要备份。', 'Zhòngyào wénjiàn yào bèifèn. – Tệp quan trọng phải sao lưu.'], ['银行不会向您要验证码。', 'Yínháng bú huì xiàng nín yào yànzhèngmǎ. – Ngân hàng không bao giờ xin mã OTP của bạn.']],
    hoithoai: {
      ctx: 'Mẹ của đồng nghiệp người Hoa nhận cuộc gọi lạ, nhờ em tư vấn.', vai: 'Bà kể, em tư vấn.', ai: '👵 陈阿姨',
      luot: [
        T(['有人打电话说我的卡被冻结了，要我告诉他验证码。', 'Yǒu rén dǎ diànhuà shuō wǒ de kǎ bèi dòngjié le, yào wǒ gàosu tā yànzhèngmǎ.', 'Có người gọi nói thẻ tôi bị khoá, bảo tôi đọc mã xác thực.'], ['阿姨，这是诈骗！千万别告诉他。', 'Āyí, zhè shì zhàpiàn! Qiānwàn bié gàosu tā.', 'Cô ơi, đây là lừa đảo! Tuyệt đối đừng nói.', 'Cảnh báo rõ.'], ['告诉他吧，没关系。', 'Gàosu tā ba, méi guānxi.', 'Nguy hiểm.'], ['你的卡冻结了吗？', 'Nǐ de kǎ dòngjié le ma?', 'Lạc trọng tâm.']),
        T(['那我该怎么办？', 'Nà wǒ gāi zěnme bàn?', 'Vậy tôi làm sao?'], ['先挂电话，然后打银行卡背面的官方电话问一下。', 'Xiān guà diànhuà, ránhòu dǎ yínhángkǎ bèimiàn de guānfāng diànhuà wèn yíxià.', 'Cúp máy trước, rồi gọi số chính thức mặt sau thẻ để hỏi.', 'Hướng dẫn.'], ['打回那个号码。', 'Dǎ huí nàge hàomǎ.', 'Gọi lại kẻ lừa.'], ['点他发的链接。', 'Diǎn tā fā de liànjiē.', 'Nguy hiểm.']),
        T(['好，幸亏问了你！', 'Hǎo, xìngkuī wènle nǐ!', 'May mà hỏi cháu!'], ['不客气。记住：银行不会向您要验证码。', 'Bú kèqi. Jìzhù: yínháng bú huì xiàng nín yào yànzhèngmǎ.', 'Không có gì. Nhớ: ngân hàng không bao giờ xin mã OTP.', 'Nhắc quy tắc.'], ['下次告诉他吧。', 'Xià cì gàosu tā ba.', 'Sai.'], ['我也不知道。', 'Wǒ yě bù zhīdào.', 'Không giúp.'])
      ], ket: 'Em đã giúp một người tránh lừa đảo.'
    },
    tom: ['诈骗 / 陌生链接 / 验证码', '备份 / 更换密码'], nguphap: '不要/千万别 + V', phatam: '诈骗 zhàpiàn, 泄露 xièlòu',
    loi: ['Chia sẻ OTP'], btvn: ['Viết 5 quy tắc an toàn mạng bằng tiếng Trung', 'Giải thích cho người thân 1 chiêu lừa đảo', 'Luyện 🎤 3 câu']
  };

  const d18 = {
    n: 18, ten: plan[17].ten, kinds: K,
    muc: 'Bàn về môi trường: ô nhiễm, rác thải, tiết kiệm năng lượng; nêu nguyên nhân – hậu quả – giải pháp.',
    hoc: `${tbl(['Phần', 'Mẫu'], [['Hiện trạng', '空气污染越来越严重。'], ['Nguyên nhân', '主要原因是汽车太多。'], ['Hậu quả', '这会影响人们的健康。'], ['Giải pháp', '我们应该少用塑料袋，多坐公共交通。']])}`,
    vocab: [
      w('环境', 'huánjìng', 'môi trường', '', ['保护环境。', 'Bǎohù huánjìng.', 'Bảo vệ môi trường.']),
      w('污染', 'wūrǎn', 'ô nhiễm', '', ['空气污染很严重。', 'Kōngqì wūrǎn hěn yánzhòng.', 'Ô nhiễm không khí nghiêm trọng.']),
      w('严重', 'yánzhòng', 'nghiêm trọng', '', ['问题很严重。', 'Wèntí hěn yánzhòng.', 'Vấn đề nghiêm trọng.']),
      w('垃圾', 'lājī', 'rác', '', ['垃圾要分类。', 'Lājī yào fēnlèi.', 'Rác phải phân loại.']),
      w('塑料袋', 'sùliàodài', 'túi nilon', '', ['少用塑料袋。', 'Shǎo yòng sùliàodài.', 'Dùng ít túi nilon.']),
      w('节约', 'jiéyuē', 'tiết kiệm', '', ['节约用水。', 'Jiéyuē yòng shuǐ.', 'Tiết kiệm nước.']),
      w('影响', 'yǐngxiǎng', 'ảnh hưởng', '', ['污染影响健康。', 'Wūrǎn yǐngxiǎng jiànkāng.', 'Ô nhiễm ảnh hưởng sức khoẻ.']),
      w('公共交通', 'gōnggòng jiāotōng', 'giao thông công cộng', '', ['多坐公共交通。', 'Duō zuò gōnggòng jiāotōng.', 'Đi phương tiện công cộng nhiều hơn.']),
      w('分类', 'fēnlèi', 'phân loại', '', ['垃圾分类很重要。', 'Lājī fēnlèi hěn zhòngyào.', 'Phân loại rác rất quan trọng.']),
      w('减少', 'jiǎnshǎo', 'giảm bớt', '', ['减少浪费。', 'Jiǎnshǎo làngfèi.', 'Giảm lãng phí.'])
    ],
    qs: [
      ['mc', '“Rác phải phân loại” là?', '垃圾要分类。', ['垃圾分类要。', '要垃圾分类了过。', '分类垃圾要。'], '要 + V.'],
      ['mc', '节约 nghĩa là?', 'tiết kiệm', ['ngày lễ', 'hẹn ước', 'hạn chế'], 'jiéyuē.'],
      ['mc', '污染___人们的健康。', '影响', ['影子', '减少', '分类'], 'yǐngxiǎng.'],
      ['hear', '空气污染越来越严重，主要原因是汽车太多。', 'Ô nhiễm không khí ngày càng nặng, chủ yếu do quá nhiều ô tô.', ['Không khí ngày càng sạch.', 'Do nhà máy.', 'Ô tô giảm.'], '原因.'],
      ['hear', '我们应该少用塑料袋，多坐公共交通。', 'Nên dùng ít túi nilon, đi phương tiện công cộng nhiều hơn.', ['Dùng nhiều túi nilon.', 'Đi xe riêng.', 'Không cần làm gì.'], 'Giải pháp.'],
      ['order', 'Sắp xếp: “Bảo vệ môi trường.”', ['保护', '环境', '。'], '保护环境。']
    ],
    noi: [['空气污染越来越严重了。', 'Kōngqì wūrǎn yuè lái yuè yánzhòng le. – Ô nhiễm không khí ngày càng nặng.'], ['我们应该少用塑料袋。', 'Wǒmen yīnggāi shǎo yòng sùliàodài. – Chúng ta nên dùng ít túi nilon.'], ['保护环境，从我做起。', 'Bǎohù huánjìng, cóng wǒ zuò qǐ. – Bảo vệ môi trường, bắt đầu từ tôi.']],
    hoithoai: {
      ctx: 'Thảo luận nhóm trong lớp tiếng Trung về môi trường thành phố.', vai: 'Bạn hỏi, em nêu ý kiến.', ai: '👨 同学',
      luot: [
        T(['你觉得胡志明市最大的环境问题是什么？', 'Nǐ juéde Hú Zhìmíng shì zuì dà de huánjìng wèntí shì shénme?', 'Bạn thấy vấn đề môi trường lớn nhất TP.HCM là gì?'], ['我认为是空气污染和塑料垃圾。', 'Wǒ rènwéi shì kōngqì wūrǎn hé sùliào lājī.', 'Tôi cho là ô nhiễm không khí và rác nhựa.', 'Nêu ý.'], ['垃圾很好。', 'Lājī hěn hǎo.', 'Vô nghĩa.'], ['我不认为。', 'Wǒ bú rènwéi.', 'Câu cụt.']),
        T(['原因是什么？', 'Yuányīn shì shénme?', 'Nguyên nhân?'], ['主要是由于摩托车太多，而且很多人习惯用塑料袋。', 'Zhǔyào shì yóuyú mótuōchē tài duō, érqiě hěn duō rén xíguàn yòng sùliàodài.', 'Chủ yếu do quá nhiều xe máy, hơn nữa nhiều người quen dùng túi nilon.', '由于 + 而且.'], ['于是摩托车。', 'Yúshì mótuōchē.', 'Sai.'], ['因为所以。', 'Yīnwèi suǒyǐ.', 'Vô nghĩa.']),
        T(['那我们能做什么？', 'Nà wǒmen néng zuò shénme?', 'Vậy ta làm được gì?'], ['我们可以多坐地铁，并且自己带购物袋。', 'Wǒmen kěyǐ duō zuò dìtiě, bìngqiě zìjǐ dài gòuwùdài.', 'Ta có thể đi metro nhiều hơn và tự mang túi mua sắm.', 'Giải pháp.'], ['什么也做不了。', 'Shénme yě zuò bu liǎo.', 'Bi quan.'], ['多用塑料袋。', 'Duō yòng sùliàodài.', 'Ngược.'])
      ], ket: 'Em đã thảo luận vấn đề môi trường mạch lạc.'
    },
    tom: ['Hiện trạng → nguyên nhân → hậu quả → giải pháp'], nguphap: 'Bố cục nghị luận ngắn', phatam: '污染 wūrǎn, 垃圾 lājī',
    loi: ['Thiếu giải pháp cụ thể'], btvn: ['Viết đoạn 120 chữ về môi trường quê em', 'Nói 1 phút theo 4 bước', 'Luyện 🎤 3 câu']
  };

  const d19 = {
    n: 19, ten: plan[18].ten, kinds: K,
    muc: 'Nói về tài chính cá nhân: tiết kiệm, lãi suất, vay, trả góp, đầu tư, rủi ro.',
    hoc: `${tbl(['Chủ đề', 'Câu mẫu'], [['Tiết kiệm', '我每个月存工资的百分之二十。'], ['Lãi suất', '定期存款的利率是多少？'], ['Vay', '我想申请房贷。'], ['Trả góp', '可以分期付款吗？'], ['Rủi ro', '投资有风险，要小心。']])}
      ${tip('ℹ️ Bài học ngôn ngữ, không phải tư vấn tài chính.')}`,
    vocab: [
      w('存款', 'cúnkuǎn', 'tiền gửi', '', ['定期存款。', 'Dìngqī cúnkuǎn.', 'Tiền gửi có kỳ hạn.']),
      w('利率', 'lìlǜ', 'lãi suất', '', ['利率是多少？', 'Lìlǜ shì duōshao?', 'Lãi suất bao nhiêu?']),
      w('利息', 'lìxī', 'tiền lãi', '', ['利息按月付。', 'Lìxī àn yuè fù.', 'Lãi trả theo tháng.']),
      w('贷款', 'dàikuǎn', 'khoản vay', '', ['我想申请贷款。', 'Wǒ xiǎng shēnqǐng dàikuǎn.', 'Tôi muốn xin vay.']),
      w('申请', 'shēnqǐng', 'đăng ký, xin', '', ['申请需要什么材料？', 'Shēnqǐng xūyào shénme cáiliào?', 'Xin vay cần giấy tờ gì?']),
      w('分期付款', 'fēnqī fùkuǎn', 'trả góp', '', ['可以分期付款吗？', 'Kěyǐ fēnqī fùkuǎn ma?', 'Trả góp được không?']),
      w('投资', 'tóuzī', 'đầu tư', '', ['投资有风险。', 'Tóuzī yǒu fēngxiǎn.', 'Đầu tư có rủi ro.']),
      w('风险', 'fēngxiǎn', 'rủi ro', '', ['风险太大了。', 'Fēngxiǎn tài dà le.', 'Rủi ro quá lớn.']),
      w('收入', 'shōurù', 'thu nhập', '', ['你的月收入是多少？', 'Nǐ de yuè shōurù shì duōshao?', 'Thu nhập tháng của bạn bao nhiêu?']),
      w('材料', 'cáiliào', 'hồ sơ, tài liệu', '', ['请准备以下材料。', 'Qǐng zhǔnbèi yǐxià cáiliào.', 'Vui lòng chuẩn bị hồ sơ sau.'])
    ],
    qs: [
      ['mc', '“Trả góp” là?', '分期付款', ['贷款', '存款', '利息'], 'fēnqī fùkuǎn.'],
      ['mc', '利率 nghĩa là?', 'lãi suất', ['tiền lãi', 'tỷ giá', 'lợi nhuận'], 'lìlǜ.'],
      ['mc', '申请贷款需要什么___？', '材料', ['利息', '风险', '收入了'], 'cáiliào.'],
      ['hear', '一年期定期存款的利率是百分之五。', 'Lãi suất tiền gửi kỳ hạn 1 năm là 5%.', ['Lãi suất 15%.', 'Kỳ hạn 5 năm.', 'Không có lãi.'], '百分之五 (số minh hoạ).'],
      ['hear', '投资有风险，不要把所有的钱都放在一个地方。', 'Đầu tư có rủi ro, đừng bỏ hết tiền vào một chỗ.', ['Đầu tư không rủi ro.', 'Hãy dồn hết tiền.', 'Đừng đầu tư.'], 'Phân tán rủi ro.'],
      ['order', 'Sắp xếp: “Tôi muốn xin vay.”', ['我', '想', '申请', '贷款。'], '我想申请贷款。']
    ],
    noi: [['定期存款的利率是多少？', 'Dìngqī cúnkuǎn de lìlǜ shì duōshao? – Lãi suất tiền gửi có kỳ hạn bao nhiêu?'], ['申请贷款需要什么材料？', 'Shēnqǐng dàikuǎn xūyào shénme cáiliào? – Xin vay cần hồ sơ gì?'], ['投资有风险，要小心。', 'Tóuzī yǒu fēngxiǎn, yào xiǎoxīn. – Đầu tư có rủi ro, phải cẩn thận.']],
    hoithoai: {
      ctx: 'Khách người Hoa đến tư vấn gửi tiết kiệm và vay mua xe.', vai: 'Khách hỏi, em tư vấn.', ai: '🧑 客户',
      luot: [
        T(['我有一笔钱，想存起来。', 'Wǒ yǒu yì bǐ qián, xiǎng cún qǐlai.', 'Tôi có một khoản, muốn gửi.'], ['您想存活期还是定期？定期利率高一些。', 'Nín xiǎng cún huóqī háishi dìngqī? Dìngqī lìlǜ gāo yìxiē.', 'Anh muốn gửi không kỳ hạn hay có kỳ hạn? Có kỳ hạn lãi cao hơn.', 'Hỏi lựa chọn.'], ['您投资吧，利息很多。', 'Nín tóuzī ba, lìxī hěn duō.', 'Tư vấn sai.'], ['存起来不了。', 'Cún qǐlai bù liǎo.', 'Sai.']),
        T(['定期一年。另外我想贷款买车。', 'Dìngqī yì nián. Lìngwài wǒ xiǎng dàikuǎn mǎi chē.', 'Kỳ hạn 1 năm. Ngoài ra tôi muốn vay mua xe.'], ['好的，申请贷款需要身份证、收入证明这些材料。', 'Hǎo de, shēnqǐng dàikuǎn xūyào shēnfènzhèng, shōurù zhèngmíng zhèxiē cáiliào.', 'Vâng, xin vay cần CMND, chứng minh thu nhập...', 'Hướng dẫn hồ sơ.'], ['贷款不需要材料。', 'Dàikuǎn bù xūyào cáiliào.', 'Sai.'], ['您的收入是秘密。', 'Nín de shōurù shì mìmì.', 'Vô nghĩa.']),
        T(['可以分期付款吗？', 'Kěyǐ fēnqī fùkuǎn ma?', 'Trả góp được không?'], ['可以，最长五年，每个月还一部分本金和利息。', 'Kěyǐ, zuì cháng wǔ nián, měi ge yuè huán yí bùfen běnjīn hé lìxī.', 'Được, tối đa 5 năm, mỗi tháng trả một phần gốc và lãi.', 'Giải thích.'], ['不可以分期。', 'Bù kěyǐ fēnqī.', 'Mâu thuẫn.'], ['五年利息没有。', 'Wǔ nián lìxī méiyǒu.', 'Sai.'])
      ], ket: 'Em đã tư vấn gửi tiết kiệm và vay bằng tiếng Trung.'
    },
    tom: ['存款 / 利率 / 利息', '贷款 / 分期付款', '投资 / 风险'], nguphap: 'Từ vựng tài chính', phatam: '利率 lìlǜ, 利息 lìxī',
    loi: ['Nhầm 利率 và 利息'], btvn: ['Đóng vai tư vấn tiết kiệm 8 lượt', 'Viết 5 câu về kế hoạch chi tiêu', 'Luyện 🎤 3 câu']
  };

  const d20 = {
    n: 20, ten: plan[19].ten, kinds: K,
    muc: 'Đọc hiểu tin ngắn: tìm ai – làm gì – khi nào – ở đâu – kết quả; làm quen văn phong báo chí.',
    hoc: `${tbl(['Từ báo chí', 'Nghĩa', 'Khẩu ngữ tương đương'], [['据报道', 'theo đưa tin', '听说'], ['近日', 'gần đây', '最近'], ['表示', 'cho biết', '说'], ['将', 'sẽ', '会/要'], ['约', 'khoảng', '大概']])}
      ${exs([['据报道，该市近日将开通第二条地铁线。', 'Jù bàodào, gāi shì jìnrì jiāng kāitōng dì èr tiáo dìtiě xiàn.', 'Theo đưa tin, thành phố sắp khai trương tuyến metro thứ hai.']])}`,
    vocab: [
      w('据报道', 'jù bàodào', 'theo đưa tin', '', ['据报道，明天有台风。', 'Jù bàodào, míngtiān yǒu táifēng.', 'Theo tin, mai có bão.']),
      w('近日', 'jìnrì', 'những ngày gần đây', '', ['近日天气很热。', 'Jìnrì tiānqì hěn rè.', 'Gần đây trời nóng.']),
      w('表示', 'biǎoshì', 'cho biết, bày tỏ', '', ['经理表示满意。', 'Jīnglǐ biǎoshì mǎnyì.', 'Giám đốc tỏ ý hài lòng.']),
      w('将', 'jiāng', 'sẽ (văn viết)', '', ['会议将在明天举行。', 'Huìyì jiāng zài míngtiān jǔxíng.', 'Hội nghị sẽ diễn ra ngày mai.']),
      w('举行', 'jǔxíng', 'tổ chức, diễn ra', '', ['比赛在北京举行。', 'Bǐsài zài Běijīng jǔxíng.', 'Cuộc thi diễn ra ở Bắc Kinh.']),
      w('约', 'yuē', 'khoảng', '', ['约有一千人参加。', 'Yuē yǒu yì qiān rén cānjiā.', 'Khoảng 1.000 người tham gia.']),
      w('该', 'gāi', '(văn viết) này, đó', '', ['该公司成立于2010年。', 'Gāi gōngsī chénglì yú èr líng yī líng nián.', 'Công ty này thành lập năm 2010.']),
      w('成立', 'chénglì', 'thành lập', '', ['公司成立十年了。', 'Gōngsī chénglì shí nián le.', 'Công ty thành lập 10 năm.']),
      w('消息', 'xiāoxi', 'tin tức', '', ['这是个好消息。', 'Zhè shì ge hǎo xiāoxi.', 'Đây là tin tốt.']),
      w('新闻', 'xīnwén', 'tin thời sự', '', ['我每天看新闻。', 'Wǒ měitiān kàn xīnwén.', 'Ngày nào tôi cũng xem thời sự.'])
    ],
    qs: [
      ['mc', '据报道 ≈ khẩu ngữ?', '听说', ['我觉得', '告诉你', '不知道'], 'Theo tin = nghe nói.'],
      ['mc', '会议___在明天举行。(sẽ – văn viết)', '将', ['了', '过', '着'], 'jiāng.'],
      ['mc', '该公司 nghĩa là?', 'công ty này / công ty đó', ['công ty nên', 'công ty nợ', 'công ty mới'], '该 = này (văn viết).'],
      ['hear', '据报道，约有五千人参加了这次活动。', 'Theo tin, khoảng 5.000 người tham gia hoạt động.', ['Khoảng 500 người.', 'Chính xác 5.000 người.', 'Không ai tham gia.'], '约 / 五千.'],
      ['hear', '该银行表示，新系统将于下个月上线。', 'Ngân hàng này cho biết hệ thống mới sẽ chạy tháng sau.', ['Hệ thống đã chạy.', 'Ngân hàng huỷ hệ thống.', 'Tháng này chạy.'], '将于下个月.'],
      ['order', 'Sắp xếp: “Đây là tin tốt.”', ['这', '是个', '好', '消息。'], '这是个好消息。']
    ],
    noi: [['据报道，明天有台风。', 'Jù bàodào, míngtiān yǒu táifēng. – Theo tin, mai có bão.'], ['会议将在明天举行。', 'Huìyì jiāng zài míngtiān jǔxíng. – Hội nghị sẽ diễn ra ngày mai.'], ['这是个好消息！', 'Zhè shì ge hǎo xiāoxi! – Đây là tin tốt!']],
    hoithoai: {
      ctx: 'Đồng nghiệp đọc một tin kinh tế và hỏi em.', vai: 'Bạn đọc tin, em tóm tắt.', ai: '📰 小郑',
      luot: [
        T(['你看了今天的新闻吗？', 'Nǐ kànle jīntiān de xīnwén ma?', 'Bạn xem thời sự hôm nay chưa?'], ['看了，据报道，央行将降低利率。', 'Kàn le, jù bàodào, yāngháng jiāng jiàngdī lìlǜ.', 'Xem rồi, theo tin, ngân hàng trung ương sẽ hạ lãi suất.', 'Văn phong tin.'], ['我没看了。', 'Wǒ méi kàn le.', 'Sai.'], ['新闻很好吃。', 'Xīnwén hěn hǎochī.', 'Vô nghĩa.']),
        T(['什么时候开始？', 'Shénme shíhou kāishǐ?', 'Khi nào bắt đầu?'], ['新闻说将于下个月一号开始实行。', 'Xīnwén shuō jiāng yú xià ge yuè yī hào kāishǐ shíxíng.', 'Tin nói sẽ áp dụng từ mùng 1 tháng sau.', 'Chi tiết thời gian.'], ['已经开始过了。', 'Yǐjīng kāishǐ guo le.', 'Sai.'], ['约一号。', 'Yuē yī hào.', 'Sai.']),
        T(['这对我们有什么影响？', 'Zhè duì wǒmen yǒu shénme yǐngxiǎng?', 'Việc này ảnh hưởng gì tới mình?'], ['贷款的利息会少一点儿，不过存款利息也会降低。', 'Dàikuǎn de lìxī huì shǎo yìdiǎnr, búguò cúnkuǎn lìxī yě huì jiàngdī.', 'Lãi vay sẽ ít đi, có điều lãi tiền gửi cũng giảm.', 'Phân tích hai mặt.'], ['没有影响了。', 'Méiyǒu yǐngxiǎng le.', 'Sai.'], ['影响很约。', 'Yǐngxiǎng hěn yuē.', 'Vô nghĩa.'])
      ], ket: 'Em đã đọc hiểu và tóm tắt tin kinh tế.'
    },
    tom: ['据报道 / 近日 / 表示 / 将 / 约 / 该'], nguphap: 'Văn phong báo chí', phatam: '据报道 jù bàodào',
    loi: ['Dùng từ báo chí trong nói chuyện thường'], btvn: ['Đọc 2 tin ngắn trên trang tin tiếng Trung', 'Tóm tắt mỗi tin 3 câu', 'Luyện 🎤 3 câu']
  };

  const d21 = {
    n: 21, ten: plan[20].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Kiểm tra giai đoạn 3: họp, khiếu nại, an toàn mạng, môi trường, tài chính, đọc tin.',
    hoc: `<h4>Tóm tắt giai đoạn 3</h4>${tbl(['Chủ đề', 'Câu then chốt'], [['Họp', '这件事由小王负责。'], ['Khiếu nại', '非常抱歉给您带来麻烦。'], ['An toàn mạng', '不要点击陌生链接。'], ['Môi trường', '我们应该少用塑料袋。'], ['Tài chính', '投资有风险。'], ['Tin tức', '据报道，会议将在明天举行。']])}`,
    qs: [['mc', '“Đầu tư có rủi ro” là?', '投资有风险。', ['投资有麻烦。', '投资有利息。', '投资有污染。'], 'fēngxiǎn.'], ['mc', '我们会___处理。', '尽快', ['尽管', '尽力了', '快快'], 'Sớm nhất.']],
    noi: [['我们会尽快帮您处理。', 'Wǒmen huì jǐnkuài bāng nín chǔlǐ. – Chúng tôi sẽ xử lý sớm nhất.'], ['据报道，明天有台风。', 'Jù bàodào, míngtiān yǒu táifēng. – Theo tin, mai có bão.']],
    hoithoai: {
      ctx: 'Mô phỏng: một ngày làm việc ở chi nhánh ngân hàng có khách Trung Quốc.', vai: 'Nhiều người hỏi, em xử lý.', ai: '🎭 多人',
      luot: [
        T(['（经理）进度怎么样？', '(Jīnglǐ) Jìndù zěnmeyàng?', '(Quản lý) Tiến độ thế nào?'], ['目前完成了百分之九十，周五能按时完成。', 'Mùqián wánchéngle bǎi fēn zhī jiǔshí, zhōuwǔ néng ànshí wánchéng.', 'Hiện xong 90%, thứ Sáu kịp hạn.', 'Báo cáo.'], ['进度很麻烦。', 'Jìndù hěn máfan.', 'Mơ hồ.'], ['按时不了了。', 'Ànshí bù liǎo le.', 'Sai.']),
        T(['（客户）有人让我点链接领奖品！', '(Kèhù) Yǒu rén ràng wǒ diǎn liànjiē lǐng jiǎngpǐn!', '(Khách) Có người bảo tôi bấm link nhận quà!'], ['千万别点，这很可能是诈骗。', 'Qiānwàn bié diǎn, zhè hěn kěnéng shì zhàpiàn.', 'Tuyệt đối đừng bấm, rất có thể là lừa đảo.', 'An toàn.'], ['快点吧！', 'Kuài diǎn ba!', 'Nguy hiểm.'], ['奖品很好。', 'Jiǎngpǐn hěn hǎo.', 'Sai.']),
        T(['（客户）定期存款利率是多少？', '(Kèhù) Dìngqī cúnkuǎn lìlǜ shì duōshao?', '(Khách) Lãi suất có kỳ hạn bao nhiêu?'], ['要看期限，我给您看一下利率表。', 'Yào kàn qīxiàn, wǒ gěi nín kàn yíxià lìlǜ biǎo.', 'Tuỳ kỳ hạn, tôi cho anh xem bảng lãi suất.', 'Tư vấn chuẩn.'], ['利息是风险。', 'Lìxī shì fēngxiǎn.', 'Vô nghĩa.'], ['我不知道利率。', 'Wǒ bù zhīdào lìlǜ.', 'Thiếu chuyên nghiệp.'])
      ], ket: 'Em đã xử lý trọn một ngày làm việc!'
    },
    tom: ['Ôn giai đoạn 3', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn', phatam: 'Ôn zh/ch/sh',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: học lại ngày yếu', 'Làm ⚡ Luyện nhanh', 'Viết báo cáo công việc tuần 150 chữ']
  };

  const d22 = {
    n: 22, ten: plan[21].ten, kinds: K,
    muc: 'Giới thiệu văn hoá trà và thư pháp; dùng 据说, 讲究, 代表.',
    hoc: `${tbl(['Chủ đề', 'Nội dung'], [['Trà', '中国有六大茶类：绿茶、红茶、乌龙茶…'], ['Phép mời trà', '主人给客人倒茶，客人用手指轻敲桌子表示感谢。'], ['Thư pháp', '书法是用毛笔写汉字的艺术。'], ['Văn phòng tứ bảo', '笔、墨、纸、砚']])}`,
    vocab: [
      w('茶', 'chá', 'trà', '', ['请喝茶。', 'Qǐng hē chá.', 'Mời uống trà.']),
      w('绿茶', 'lǜchá', 'trà xanh', '', ['我喜欢喝绿茶。', 'Wǒ xǐhuan hē lǜchá.', 'Tôi thích trà xanh.']),
      w('倒', 'dào', 'rót', '', ['我给您倒茶。', 'Wǒ gěi nín dào chá.', 'Tôi rót trà cho anh.']),
      w('讲究', 'jiǎngjiu', 'cầu kỳ, chú trọng', '', ['喝茶很讲究。', 'Hē chá hěn jiǎngjiu.', 'Uống trà rất cầu kỳ.']),
      w('据说', 'jùshuō', 'nghe nói', '', ['据说这种茶很贵。', 'Jùshuō zhè zhǒng chá hěn guì.', 'Nghe nói loại trà này rất đắt.']),
      w('书法', 'shūfǎ', 'thư pháp', '', ['他在学书法。', 'Tā zài xué shūfǎ.', 'Anh ấy đang học thư pháp.']),
      w('毛笔', 'máobǐ', 'bút lông', '', ['用毛笔写字。', 'Yòng máobǐ xiě zì.', 'Viết chữ bằng bút lông.']),
      w('艺术', 'yìshù', 'nghệ thuật', '', ['书法是一种艺术。', 'Shūfǎ shì yì zhǒng yìshù.', 'Thư pháp là một nghệ thuật.']),
      w('代表', 'dàibiǎo', 'tượng trưng, đại diện', '', ['红色代表幸福。', 'Hóngsè dàibiǎo xìngfú.', 'Màu đỏ tượng trưng hạnh phúc.']),
      w('文化', 'wénhuà', 'văn hoá', '', ['我对中国文化感兴趣。', 'Wǒ duì Zhōngguó wénhuà gǎn xìngqù.', 'Tôi hứng thú với văn hoá Trung Quốc.'])
    ],
    qs: [
      ['mc', '“Tôi rót trà cho anh” là?', '我给您倒茶。', ['我倒您给茶。', '我茶倒给您了过。', '给您我倒茶。'], '给 + người + V.'],
      ['mc', '书法 nghĩa là?', 'thư pháp', ['sách luật', 'phương pháp đọc', 'thư tín'], 'shūfǎ.'],
      ['mc', '红色___幸福。', '代表', ['讲究', '据说', '艺术'], 'dàibiǎo.'],
      ['hear', '据说这种茶一斤要一万块。', 'Nghe nói loại trà này 10.000 tệ một cân.', ['1.000 tệ một cân.', 'Trà này rẻ.', 'Trà này miễn phí.'], '一万.'],
      ['hear', '中国人喝茶很讲究，不同季节喝不同的茶。', 'Người Trung Quốc uống trà cầu kỳ, mỗi mùa uống loại khác.', ['Uống trà rất tuỳ tiện.', 'Chỉ uống trà xanh.', 'Không uống trà mùa hè.'], '讲究.'],
      ['order', 'Sắp xếp: “Thư pháp là một nghệ thuật.”', ['书法', '是', '一种', '艺术。'], '书法是一种艺术。']
    ],
    noi: [['请喝茶。', 'Qǐng hē chá. – Mời uống trà.'], ['中国人喝茶很讲究。', 'Zhōngguó rén hē chá hěn jiǎngjiu. – Người Trung Quốc uống trà rất cầu kỳ.'], ['我对中国文化很感兴趣。', 'Wǒ duì Zhōngguó wénhuà hěn gǎn xìngqù. – Tôi rất hứng thú với văn hoá Trung Quốc.']],
    hoithoai: {
      ctx: 'Em đến văn phòng đối tác ở Phúc Kiến, được mời trà.', vai: 'Chủ nhà mời, em đáp.', ai: '🍵 林老板',
      luot: [
        T(['来，喝杯茶，这是我们福建的乌龙茶。', 'Lái, hē bēi chá, zhè shì wǒmen Fújiàn de wūlóngchá.', 'Nào, uống chén trà, đây là trà Ô Long Phúc Kiến.'], ['谢谢林老板，据说福建的乌龙茶特别有名。', 'Xièxie Lín lǎobǎn, jùshuō Fújiàn de wūlóngchá tèbié yǒumíng.', 'Cảm ơn ông chủ Lâm, nghe nói trà Ô Long Phúc Kiến rất nổi tiếng.', '据说 + khen.'], ['我不喝茶，有可乐吗？', 'Wǒ bù hē chá, yǒu kělè ma?', 'Thiếu tế nhị.'], ['茶很讲究吗过？', 'Chá hěn jiǎngjiu ma guo?', 'Sai.']),
        T(['对，我们喝茶很讲究。你们越南也喝茶吗？', 'Duì, wǒmen hē chá hěn jiǎngjiu. Nǐmen Yuènán yě hē chá ma?', 'Đúng, chúng tôi uống trà cầu kỳ. Việt Nam có uống trà không?'], ['喝，越南人喜欢喝绿茶，也代表好客。', 'Hē, Yuènán rén xǐhuan hē lǜchá, yě dàibiǎo hàokè.', 'Có, người Việt thích trà xanh, cũng tượng trưng sự hiếu khách.', 'So sánh văn hoá.'], ['越南不喝。', 'Yuènán bù hē.', 'Sai sự thật.'], ['绿茶艺术。', 'Lǜchá yìshù.', 'Câu cụt.']),
        T(['墙上这幅书法是我父亲写的。', 'Qiáng shang zhè fú shūfǎ shì wǒ fùqin xiě de.', 'Bức thư pháp trên tường là cha tôi viết.'], ['写得真好！这四个字是什么意思？', 'Xiě de zhēn hǎo! Zhè sì ge zì shì shénme yìsi?', 'Viết đẹp quá! Bốn chữ này nghĩa là gì?', 'Khen + hỏi.'], ['我看不懂，不好看。', 'Wǒ kàn bu dǒng, bù hǎokàn.', 'Thiếu tế nhị.'], ['你父亲是书法。', 'Nǐ fùqin shì shūfǎ.', 'Sai.'])
      ], ket: 'Em đã giao tiếp tinh tế về văn hoá trà và thư pháp.'
    },
    tom: ['茶 / 书法 / 文化', '据说 / 讲究 / 代表'], nguphap: 'Giới thiệu văn hoá', phatam: '书法 shūfǎ, 讲究 jiǎngjiu',
    loi: ['Từ chối thiếu tế nhị'], btvn: ['Giới thiệu văn hoá cà phê Việt Nam 100 chữ', 'Tập viết 5 chữ Hán bằng bút lông (nếu có)', 'Luyện 🎤 3 câu']
  };

  const d23 = {
    n: 23, ten: plan[22].ten, kinds: K,
    muc: 'Nói về lối sống lành mạnh, áp lực, giấc ngủ, chế độ ăn; khuyên nhủ bằng 最好, 千万, 尽量.',
    hoc: `${tbl(['Mẫu khuyên', 'Nghĩa'], [['你最好早点儿睡。', 'Tốt nhất bạn nên ngủ sớm.'], ['尽量少吃甜的。', 'Cố gắng ăn ít đồ ngọt.'], ['千万别熬夜。', 'Tuyệt đối đừng thức khuya.'], ['压力太大的时候，可以去散散步。', 'Khi áp lực quá lớn có thể đi dạo.']])}
      ${tip('ℹ️ Bài học ngôn ngữ; vấn đề sức khoẻ cụ thể hãy hỏi bác sĩ.')}`,
    vocab: [
      w('健康', 'jiànkāng', 'sức khoẻ, khoẻ mạnh', '', ['身体健康最重要。', 'Shēntǐ jiànkāng zuì zhòngyào.', 'Sức khoẻ quan trọng nhất.']),
      w('压力', 'yālì', 'áp lực', '', ['工作压力很大。', 'Gōngzuò yālì hěn dà.', 'Áp lực công việc lớn.']),
      w('熬夜', 'áoyè', 'thức khuya', '', ['别熬夜了。', 'Bié áoyè le.', 'Đừng thức khuya nữa.']),
      w('尽量', 'jǐnliàng', 'cố gắng hết mức', '', ['我尽量早点儿到。', 'Wǒ jǐnliàng zǎo diǎnr dào.', 'Tôi cố đến sớm.']),
      w('最好', 'zuìhǎo', 'tốt nhất là', '', ['你最好去看医生。', 'Nǐ zuìhǎo qù kàn yīshēng.', 'Tốt nhất bạn nên đi khám.']),
      w('千万', 'qiānwàn', 'nhất định, tuyệt đối', '', ['千万别忘了！', 'Qiānwàn bié wàng le!', 'Tuyệt đối đừng quên!']),
      w('散步', 'sànbù', 'đi dạo', '', ['饭后散散步。', 'Fàn hòu sànsan bù.', 'Sau ăn đi dạo chút.']),
      w('习惯', 'xíguàn', 'thói quen', '', ['这是个好习惯。', 'Zhè shì ge hǎo xíguàn.', 'Đây là thói quen tốt.']),
      w('营养', 'yíngyǎng', 'dinh dưỡng', '', ['早饭要有营养。', 'Zǎofàn yào yǒu yíngyǎng.', 'Bữa sáng phải đủ dinh dưỡng.']),
      w('放松', 'fàngsōng', 'thư giãn', '', ['周末好好放松一下。', 'Zhōumò hǎohǎo fàngsōng yíxià.', 'Cuối tuần thư giãn đi.'])
    ],
    qs: [
      ['mc', '“Tuyệt đối đừng thức khuya” là?', '千万别熬夜。', ['千万熬夜别。', '别千万熬夜。', '熬夜千万。'], '千万别 + V.'],
      ['mc', '你___早点儿睡。(tốt nhất)', '最好', ['最后', '千万', '尽快'], 'zuìhǎo.'],
      ['mc', '压力 nghĩa là?', 'áp lực', ['sức lực', 'áp suất máu', 'năng lực'], 'yālì.'],
      ['hear', '压力太大的时候，可以去散散步，放松一下。', 'Khi áp lực lớn có thể đi dạo thư giãn.', ['Áp lực thì làm thêm giờ.', 'Đừng đi dạo.', 'Áp lực không sao.'], '散步 / 放松.'],
      ['hear', '尽量少吃油炸的东西。', 'Cố ăn ít đồ chiên.', ['Ăn nhiều đồ chiên.', 'Chỉ ăn đồ chiên.', 'Không ăn gì.'], '尽量少.'],
      ['order', 'Sắp xếp: “Sức khoẻ quan trọng nhất.”', ['身体', '健康', '最', '重要。'], '身体健康最重要。']
    ],
    noi: [['你最好早点儿睡。', 'Nǐ zuìhǎo zǎo diǎnr shuì. – Tốt nhất bạn nên ngủ sớm.'], ['千万别熬夜。', 'Qiānwàn bié áoyè. – Tuyệt đối đừng thức khuya.'], ['周末好好放松一下。', 'Zhōumò hǎohǎo fàngsōng yíxià. – Cuối tuần thư giãn đi.']],
    hoithoai: {
      ctx: 'Đồng nghiệp than mệt mỏi, mất ngủ vì áp lực cuối năm.', vai: 'Bạn than, em khuyên.', ai: '😮‍💨 小罗',
      luot: [
        T(['最近压力太大了，每天都熬夜。', 'Zuìjìn yālì tài dà le, měitiān dōu áoyè.', 'Dạo này áp lực quá, ngày nào cũng thức khuya.'], ['千万别熬夜了，你最好十一点前睡。', 'Qiānwàn bié áoyè le, nǐ zuìhǎo shíyī diǎn qián shuì.', 'Đừng thức khuya nữa, tốt nhất ngủ trước 11 giờ.', '千万 + 最好.'], ['熬夜很健康。', 'Áoyè hěn jiànkāng.', 'Sai.'], ['你千万熬夜。', 'Nǐ qiānwàn áoyè.', 'Thiếu 别.']),
        T(['可是工作做不完啊。', 'Kěshì gōngzuò zuò bu wán a.', 'Nhưng việc làm không xong.'], ['你可以先做重要的，尽量提高效率。', 'Nǐ kěyǐ xiān zuò zhòngyào de, jǐnliàng tígāo xiàolǜ.', 'Bạn làm việc quan trọng trước, cố nâng hiệu suất.', '尽量.'], ['那别做了。', 'Nà bié zuò le.', 'Không thực tế.'], ['尽量熬夜吧。', 'Jǐnliàng áoyè ba.', 'Ngược.']),
        T(['好，周末我去哪儿放松一下？', 'Hǎo, zhōumò wǒ qù nǎr fàngsōng yíxià?', 'Được, cuối tuần đi đâu thư giãn?'], ['去公园散散步，或者跟朋友去喝茶。', 'Qù gōngyuán sànsan bù, huòzhě gēn péngyou qù hē chá.', 'Đi công viên dạo, hoặc đi uống trà với bạn.', 'Gợi ý.'], ['在家加班。', 'Zài jiā jiābān.', 'Ngược.'], ['放松不了了。', 'Fàngsōng bu liǎo le.', 'Bi quan.'])
      ], ket: 'Em đã khuyên nhủ đồng nghiệp chân thành.'
    },
    tom: ['最好 / 尽量 / 千万别', '压力 / 熬夜 / 放松'], nguphap: 'Câu khuyên', phatam: '熬夜 áoyè, 营养 yíngyǎng',
    loi: ['千万 thiếu 别/要'], btvn: ['Viết 6 lời khuyên sống khoẻ', 'Kể thói quen hằng ngày 80 chữ', 'Luyện 🎤 3 câu']
  };

  const d24 = {
    n: 24, ten: plan[23].ten, kinds: K,
    muc: 'Bàn về giáo dục và nuôi dạy con: điểm số, học thêm, áp lực, kỹ năng; dùng 与其…不如 (sơ lược), 让/使.',
    hoc: `${tbl(['Mẫu', 'Nghĩa'], [['父母不应该只看分数。', 'Cha mẹ không nên chỉ nhìn điểm.'], ['学习压力让孩子很累。', 'Áp lực học làm trẻ mệt.'], ['与其补课，不如让孩子多运动。', 'Thay vì học thêm, chẳng bằng cho trẻ vận động.'], ['培养孩子的独立能力。', 'Bồi dưỡng khả năng tự lập của trẻ.']])}
      ${tip('🔑 <b>让/使 + người + adj/V</b> = làm cho ai đó…; 使 trang trọng hơn.')}`,
    vocab: [
      w('教育', 'jiàoyù', 'giáo dục', '', ['家庭教育很重要。', 'Jiātíng jiàoyù hěn zhòngyào.', 'Giáo dục gia đình rất quan trọng.']),
      w('父母', 'fùmǔ', 'cha mẹ', '', ['父母是孩子的第一个老师。', 'Fùmǔ shì háizi de dì yī ge lǎoshī.', 'Cha mẹ là thầy đầu tiên của trẻ.']),
      w('分数', 'fēnshù', 'điểm số', '', ['分数不是一切。', 'Fēnshù bú shì yíqiè.', 'Điểm số không phải tất cả.']),
      w('补课', 'bǔkè', 'học thêm', '', ['孩子每天都补课。', 'Háizi měitiān dōu bǔkè.', 'Con ngày nào cũng học thêm.']),
      w('培养', 'péiyǎng', 'bồi dưỡng', '', ['培养好习惯。', 'Péiyǎng hǎo xíguàn.', 'Bồi dưỡng thói quen tốt.']),
      w('独立', 'dúlì', 'tự lập, độc lập', '', ['孩子要学会独立。', 'Háizi yào xuéhuì dúlì.', 'Trẻ phải học cách tự lập.']),
      w('与其…不如…', 'yǔqí… bùrú…', 'thay vì… chẳng bằng…', '', ['与其等，不如自己去。', 'Yǔqí děng, bùrú zìjǐ qù.', 'Thay vì đợi chẳng bằng tự đi.']),
      w('使', 'shǐ', 'làm cho', '', ['这件事使我很感动。', 'Zhè jiàn shì shǐ wǒ hěn gǎndòng.', 'Việc này làm tôi cảm động.']),
      w('鼓励', 'gǔlì', 'khích lệ', '', ['多鼓励孩子。', 'Duō gǔlì háizi.', 'Khích lệ trẻ nhiều hơn.']),
      w('批评', 'pīpíng', 'phê bình', '', ['别总是批评孩子。', 'Bié zǒngshì pīpíng háizi.', 'Đừng luôn phê bình con.'])
    ],
    qs: [
      ['mc', '___补课，不如让孩子多运动。', '与其', ['虽然', '即使', '由于'], '与其…不如.'],
      ['mc', '学习压力___孩子很累。', '让', ['被', '把', '给'], 'Câu khiến.'],
      ['mc', '培养 nghĩa là?', 'bồi dưỡng', ['bồi thường', 'chăn nuôi', 'đào tạo nghề'], 'péiyǎng.'],
      ['hear', '分数不是一切，培养孩子的独立能力更重要。', 'Điểm không phải tất cả, bồi dưỡng tự lập quan trọng hơn.', ['Điểm là tất cả.', 'Trẻ không cần tự lập.', 'Nên học thêm nhiều.'], '更重要.'],
      ['hear', '多鼓励孩子，别总是批评他们。', 'Khích lệ con nhiều, đừng luôn phê bình.', ['Phê bình nhiều hơn.', 'Không cần khích lệ.', 'Mặc kệ con.'], '鼓励 / 批评.'],
      ['order', 'Sắp xếp: “Việc này làm tôi cảm động.”', ['这件事', '使', '我', '很感动。'], '这件事使我很感动。']
    ],
    noi: [['分数不是一切。', 'Fēnshù bú shì yíqiè. – Điểm số không phải tất cả.'], ['与其补课，不如多运动。', 'Yǔqí bǔkè, bùrú duō yùndòng. – Thay vì học thêm, chẳng bằng vận động.'], ['多鼓励孩子。', 'Duō gǔlì háizi. – Khích lệ trẻ nhiều hơn.']],
    hoithoai: {
      ctx: 'Một phụ huynh người Hoa tâm sự về chuyện học của con.', vai: 'Phụ huynh kể, em chia sẻ quan điểm.', ai: '👩 家长',
      luot: [
        T(['我儿子每天补课到晚上九点，可是成绩还是不好。', 'Wǒ érzi měitiān bǔkè dào wǎnshang jiǔ diǎn, kěshì chéngjì háishi bù hǎo.', 'Con trai tôi học thêm đến 9 giờ tối mà điểm vẫn kém.'], ['也许压力太大，让他很累。', 'Yěxǔ yālì tài dà, ràng tā hěn lèi.', 'Có lẽ áp lực quá, làm cháu mệt.', '让 + người + adj.'], ['那再多补课吧。', 'Nà zài duō bǔkè ba.', 'Ngược.'], ['他很笨。', 'Tā hěn bèn.', 'Xúc phạm.']),
        T(['那我该怎么办？', 'Nà wǒ gāi zěnme bàn?', 'Vậy tôi nên làm gì?'], ['与其每天补课，不如让他每周运动几次。', 'Yǔqí měitiān bǔkè, bùrú ràng tā měi zhōu yùndòng jǐ cì.', 'Thay vì học thêm mỗi ngày, chẳng bằng cho cháu vận động vài lần/tuần.', '与其…不如.'], ['与其运动，不如补课。', 'Yǔqí yùndòng, bùrú bǔkè.', 'Ngược ý.'], ['不如与其。', 'Bùrú yǔqí.', 'Sai.']),
        T(['你说得有道理。', 'Nǐ shuō de yǒu dàolǐ.', 'Bạn nói có lý.'], ['还有，多鼓励他，少批评，他会更有信心。', 'Hái yǒu, duō gǔlì tā, shǎo pīpíng, tā huì gèng yǒu xìnxīn.', 'Thêm nữa, khích lệ nhiều, phê bình ít, cháu sẽ tự tin hơn.', 'Lời khuyên.'], ['多批评他。', 'Duō pīpíng tā.', 'Ngược.'], ['信心没有了。', 'Xìnxīn méiyǒu le.', 'Bi quan.'])
      ], ket: 'Em đã chia sẻ quan điểm giáo dục tế nhị.'
    },
    tom: ['与其…不如', '让/使 + người + …', '培养 / 鼓励'], nguphap: 'Câu khiến, so sánh lựa chọn', phatam: '与其 yǔqí, 培养 péiyǎng',
    loi: ['Đảo ngược vế 与其/不如'], btvn: ['Viết quan điểm 120 chữ: có nên cho trẻ học thêm?', 'Viết 3 câu 与其…不如', 'Luyện 🎤 3 câu']
  };

  const d25 = {
    n: 25, ten: plan[24].ten, kinds: K,
    muc: 'Phép lịch sự khi tặng quà, mời ăn, đến nhà; các điều kiêng kỵ; từ chối khéo.',
    hoc: `${tbl(['Tình huống', 'Câu mẫu / lưu ý'], [['Tặng quà', '一点儿小意思，请收下。'], ['Nhận quà', '您太客气了！'], ['Kiêng kỵ', 'Không tặng 钟 (đồng hồ treo) – đồng âm 送终; tránh số 4.'], ['Từ chối khéo', '不好意思，我开车，不能喝酒。'], ['Mời ăn', '今天我请客。/ 下次我请你。']])}`,
    vocab: [
      w('礼物', 'lǐwù', 'quà', '', ['这是给你的礼物。', 'Zhè shì gěi nǐ de lǐwù.', 'Đây là quà cho bạn.']),
      w('小意思', 'xiǎo yìsi', 'chút lòng thành', '', ['一点儿小意思。', 'Yìdiǎnr xiǎo yìsi.', 'Chút lòng thành.']),
      w('收下', 'shōuxià', 'nhận lấy', '', ['请收下。', 'Qǐng shōuxià.', 'Xin nhận cho.']),
      w('客气', 'kèqi', 'khách sáo', '', ['您太客气了！', 'Nín tài kèqi le!', 'Anh khách sáo quá!']),
      w('请客', 'qǐngkè', 'mời (trả tiền)', '', ['今天我请客。', 'Jīntiān wǒ qǐngkè.', 'Hôm nay tôi mời.']),
      w('干杯', 'gānbēi', 'cạn ly', '', ['为合作干杯！', 'Wèi hézuò gānbēi!', 'Cạn ly vì hợp tác!']),
      w('敬酒', 'jìng jiǔ', 'mời rượu', '', ['我敬您一杯。', 'Wǒ jìng nín yì bēi.', 'Tôi kính anh một ly.']),
      w('礼貌', 'lǐmào', 'lịch sự', '', ['这样不礼貌。', 'Zhèyàng bù lǐmào.', 'Như vậy không lịch sự.']),
      w('拒绝', 'jùjué', 'từ chối', '', ['他拒绝了我的邀请。', 'Tā jùjuéle wǒ de yāoqǐng.', 'Anh ấy từ chối lời mời của tôi.']),
      w('邀请', 'yāoqǐng', 'lời mời, mời', '', ['谢谢您的邀请。', 'Xièxie nín de yāoqǐng.', 'Cảm ơn lời mời.'])
    ],
    qs: [
      ['mc', 'Món quà nên TRÁNH tặng người Trung Quốc?', '钟 (đồng hồ treo tường)', ['茶叶', '水果', '月饼'], '送钟 đồng âm 送终.'],
      ['mc', 'Khi tặng quà nói?', '一点儿小意思，请收下。', ['这个很贵，你收吧。', '你拿走。', '给你，不要算了。'], 'Khiêm tốn.'],
      ['mc', '请客 nghĩa là?', 'mời (và trả tiền)', ['khách mời', 'tiếp khách', 'xin phép'], 'qǐngkè.'],
      ['hear', '不好意思，我开车，不能喝酒，我以茶代酒。', 'Xin lỗi, tôi lái xe, không uống rượu, xin lấy trà thay rượu.', ['Tôi uống nhiều rượu.', 'Tôi không lái xe.', 'Tôi không uống trà.'], 'Từ chối khéo.'],
      ['hear', '为我们的合作干杯！', 'Cạn ly vì sự hợp tác của chúng ta!', ['Cảm ơn lời mời.', 'Tôi không uống.', 'Hẹn lần sau.'], '干杯.'],
      ['order', 'Sắp xếp: “Cảm ơn lời mời.”', ['谢谢', '您的', '邀请', '。'], '谢谢您的邀请。']
    ],
    noi: [['一点儿小意思，请收下。', 'Yìdiǎnr xiǎo yìsi, qǐng shōuxià. – Chút lòng thành, xin nhận cho.'], ['您太客气了！', 'Nín tài kèqi le! – Anh khách sáo quá!'], ['我以茶代酒，敬您一杯。', 'Wǒ yǐ chá dài jiǔ, jìng nín yì bēi. – Tôi lấy trà thay rượu kính anh một chén.']],
    hoithoai: {
      ctx: 'Em được mời dự tiệc tại nhà đối tác Trung Quốc.', vai: 'Chủ nhà nói, em đáp.', ai: '🏠 周先生',
      luot: [
        T(['欢迎欢迎！快请进！', 'Huānyíng huānyíng! Kuài qǐng jìn!', 'Chào mừng! Mời vào!'], ['谢谢您的邀请，这是一点儿小意思，请收下。', 'Xièxie nín de yāoqǐng, zhè shì yìdiǎnr xiǎo yìsi, qǐng shōuxià.', 'Cảm ơn lời mời, chút lòng thành xin nhận cho.', 'Lịch sự.'], ['这个礼物很贵。', 'Zhège lǐwù hěn guì.', 'Khoe giá.'], ['给你钟。', 'Gěi nǐ zhōng.', 'Kiêng kỵ!']),
        T(['你太客气了！来，我们喝一杯！', 'Nǐ tài kèqi le! Lái, wǒmen hē yì bēi!', 'Khách sáo quá! Nào, uống một ly!'], ['不好意思，我开车来的，我以茶代酒敬您。', 'Bù hǎoyìsi, wǒ kāichē lái de, wǒ yǐ chá dài jiǔ jìng nín.', 'Xin lỗi, tôi lái xe, xin lấy trà thay rượu kính anh.', 'Từ chối khéo.'], ['我不喝，你自己喝。', 'Wǒ bù hē, nǐ zìjǐ hē.', 'Cộc.'], ['我喝十杯！', 'Wǒ hē shí bēi!', 'Nguy hiểm khi lái xe.']),
        T(['没关系！为我们的合作干杯！', 'Méi guānxi! Wèi wǒmen de hézuò gānbēi!', 'Không sao! Cạn ly vì hợp tác!'], ['干杯！祝合作愉快！', 'Gānbēi! Zhù hézuò yúkuài!', 'Cạn ly! Chúc hợp tác vui vẻ!', 'Đáp lời.'], ['我拒绝。', 'Wǒ jùjué.', 'Mất lịch sự.'], ['合作很客气。', 'Hézuò hěn kèqi.', 'Vô nghĩa.'])
      ], ket: 'Em đã giữ phép lịch sự trong bữa tiệc.'
    },
    tom: ['小意思，请收下', '太客气了', 'Kiêng kỵ 钟, số 4', '以茶代酒'], nguphap: 'Ngôn ngữ xã giao', phatam: '客气 kèqi, 干杯 gānbēi',
    loi: ['Tặng đồng hồ treo', 'Từ chối cộc lốc'], btvn: ['Ghi 5 điều kiêng kỵ khi giao tiếp với người Trung Quốc', 'Tập lời chúc rượu 3 câu', 'Luyện 🎤 3 câu']
  };

  const d26 = {
    n: 26, ten: plan[25].ten, kinds: K,
    muc: 'Trình bày số liệu: tăng/giảm, phần trăm, gấp bao nhiêu lần, so sánh cùng kỳ.',
    hoc: `${tbl(['Mẫu', 'Nghĩa'], [['增长了百分之十五', 'tăng 15%'], ['下降到三百万', 'giảm xuống còn 3 triệu'], ['增加了一倍', 'tăng gấp đôi'], ['比去年同期增长…', 'tăng so với cùng kỳ năm ngoái'], ['占总数的一半', 'chiếm một nửa tổng số']])}
      ${tip('🔑 <b>了</b> = mức thay đổi (增长了10%); <b>到</b> = mức đạt tới (增长到100万).')}`,
    vocab: [
      w('增长', 'zēngzhǎng', 'tăng trưởng', '', ['销售增长了百分之十。', 'Xiāoshòu zēngzhǎngle bǎi fēn zhī shí.', 'Doanh số tăng 10%.']),
      w('下降', 'xiàjiàng', 'giảm', '', ['成本下降了。', 'Chéngběn xiàjiàng le.', 'Chi phí giảm.']),
      w('增加', 'zēngjiā', 'tăng thêm', '', ['客户增加了一倍。', 'Kèhù zēngjiāle yí bèi.', 'Khách tăng gấp đôi.']),
      w('百分之', 'bǎi fēn zhī', 'phần trăm', '', ['百分之五十。', 'Bǎi fēn zhī wǔshí.', '50%.']),
      w('倍', 'bèi', 'lần (gấp)', '', ['是去年的三倍。', 'Shì qùnián de sān bèi.', 'Gấp ba năm ngoái.']),
      w('同期', 'tóngqī', 'cùng kỳ', '', ['比去年同期增长了。', 'Bǐ qùnián tóngqī zēngzhǎng le.', 'Tăng so với cùng kỳ năm ngoái.']),
      w('占', 'zhàn', 'chiếm', '', ['女性占百分之六十。', 'Nǚxìng zhàn bǎi fēn zhī liùshí.', 'Nữ chiếm 60%.']),
      w('销售额', 'xiāoshòu\'é', 'doanh số', '', ['销售额达到一亿。', 'Xiāoshòu\'é dádào yí yì.', 'Doanh số đạt 100 triệu.']),
      w('达到', 'dádào', 'đạt tới', '', ['达到目标了。', 'Dádào mùbiāo le.', 'Đạt mục tiêu rồi.']),
      w('数据', 'shùjù', 'dữ liệu, số liệu', '', ['请看这组数据。', 'Qǐng kàn zhè zǔ shùjù.', 'Mời xem số liệu này.'])
    ],
    qs: [
      ['mc', '“Tăng gấp đôi” là?', '增加了一倍', ['增加了两倍了', '增加一半', '下降一倍'], '一倍 = gấp đôi.'],
      ['mc', 'Doanh số tăng ĐẾN 1 triệu (mức đạt tới)?', '增长到一百万', ['增长了一百万', '增长过一百万', '增长着一百万'], '到 = mức đạt.'],
      ['mc', '女性___百分之六十。', '占', ['站', '增', '达'], 'zhàn.'],
      ['hear', '今年的销售额比去年同期增长了百分之二十五。', 'Doanh số năm nay tăng 25% so với cùng kỳ.', ['Giảm 25%.', 'Tăng 20%.', 'Tăng 5%.'], '二十五.'],
      ['hear', '成本下降到三百万。', 'Chi phí giảm xuống còn 3 triệu.', ['Chi phí giảm 3 triệu.', 'Chi phí tăng lên 3 triệu.', 'Chi phí 30 triệu.'], '下降到.'],
      ['order', 'Sắp xếp: “Mời xem số liệu này.”', ['请看', '这组', '数据', '。'], '请看这组数据。']
    ],
    noi: [['销售额增长了百分之十五。', 'Xiāoshòu\'é zēngzhǎngle bǎi fēn zhī shíwǔ. – Doanh số tăng 15%.'], ['客户数量增加了一倍。', 'Kèhù shùliàng zēngjiāle yí bèi. – Số khách tăng gấp đôi.'], ['请看这组数据。', 'Qǐng kàn zhè zǔ shùjù. – Mời xem số liệu này.']],
    hoithoai: {
      ctx: 'Em trình bày kết quả kinh doanh quý cho ban lãnh đạo Trung Quốc.', vai: 'Lãnh đạo hỏi, em trình bày.', ai: '📊 赵总',
      luot: [
        T(['这个季度的销售额怎么样？', 'Zhège jìdù de xiāoshòu\'é zěnmeyàng?', 'Doanh số quý này thế nào?'], ['达到了五十亿越南盾，比去年同期增长了百分之十八。', 'Dádàole wǔshí yì Yuènán dùn, bǐ qùnián tóngqī zēngzhǎngle bǎi fēn zhī shíbā.', 'Đạt 5 tỷ đồng, tăng 18% so với cùng kỳ.', 'Số liệu chuẩn.'], ['增长了很多很多。', 'Zēngzhǎngle hěn duō hěn duō.', 'Thiếu số liệu.'], ['下降了增长。', 'Xiàjiàngle zēngzhǎng.', 'Mâu thuẫn.']),
        T(['哪个产品最好？', 'Nǎge chǎnpǐn zuì hǎo?', 'Sản phẩm nào tốt nhất?'], ['笔记本电脑，占总销售额的百分之四十。', 'Bǐjìběn diànnǎo, zhàn zǒng xiāoshòu\'é de bǎi fēn zhī sìshí.', 'Laptop, chiếm 40% tổng doanh số.', '占.'], ['笔记本站四十。', 'Bǐjìběn zhàn sìshí.', 'Sai chữ và thiếu.'], ['都一样。', 'Dōu yíyàng.', 'Mơ hồ.']),
        T(['成本呢？', 'Chéngběn ne?', 'Chi phí?'], ['成本下降了百分之五，主要是由于物流费用减少了。', 'Chéngběn xiàjiàngle bǎi fēn zhī wǔ, zhǔyào shì yóuyú wùliú fèiyòng jiǎnshǎo le.', 'Chi phí giảm 5%, chủ yếu do phí logistics giảm.', 'Số liệu + nguyên nhân.'], ['成本增加一倍了好。', 'Chéngběn zēngjiā yí bèi le hǎo.', 'Sai.'], ['不知道成本。', 'Bù zhīdào chéngběn.', 'Thiếu chuẩn bị.'])
      ], ket: 'Em đã trình bày số liệu kinh doanh chuyên nghiệp.'
    },
    tom: ['增长了 / 增长到', '一倍 / 百分之', '占 / 同期'], nguphap: 'Ngôn ngữ số liệu', phatam: '增长 zēngzhǎng, 百分之 bǎi fēn zhī',
    loi: ['Nhầm 了 và 到', 'Nhầm 一倍'], btvn: ['Mô tả một biểu đồ doanh số 100 chữ', 'Đọc to 10 con số phần trăm', 'Luyện 🎤 3 câu']
  };

  const d27 = {
    n: 27, ten: plan[26].ten, kinds: K,
    muc: 'Thuyết phục và thương lượng: nêu lợi ích, nhượng bộ có điều kiện, chốt thoả thuận.',
    hoc: `${tbl(['Chiến thuật', 'Mẫu'], [['Nêu lợi ích', '这样对双方都有好处。'], ['Đề xuất', '我们能不能各让一步？'], ['Nhượng bộ có điều kiện', '如果您多订一些，我们可以再便宜一点儿。'], ['Giữ lập trường', '这已经是最低价了。'], ['Chốt', '那就这么定了！']])}`,
    vocab: [
      w('双方', 'shuāngfāng', 'hai bên', '', ['对双方都有好处。', 'Duì shuāngfāng dōu yǒu hǎochu.', 'Có lợi cho cả hai bên.']),
      w('让步', 'ràngbù', 'nhượng bộ', '', ['我们各让一步吧。', 'Wǒmen gè ràng yí bù ba.', 'Mỗi bên lùi một bước nhé.']),
      w('最低价', 'zuì dī jià', 'giá thấp nhất', '', ['这是最低价了。', 'Zhè shì zuì dī jià le.', 'Đây là giá thấp nhất rồi.']),
      w('条件', 'tiáojiàn', 'điều kiện', '', ['你们有什么条件？', 'Nǐmen yǒu shénme tiáojiàn?', 'Các bạn có điều kiện gì?']),
      w('考虑', 'kǎolǜ', 'cân nhắc', '', ['我们考虑一下。', 'Wǒmen kǎolǜ yíxià.', 'Chúng tôi cân nhắc chút.']),
      w('长期', 'chángqī', 'lâu dài', '', ['我们希望长期合作。', 'Wǒmen xīwàng chángqī hézuò.', 'Chúng tôi mong hợp tác lâu dài.']),
      w('定', 'dìng', 'chốt, định', '', ['那就这么定了。', 'Nà jiù zhème dìng le.', 'Vậy chốt thế nhé.']),
      w('订单', 'dìngdān', 'đơn đặt hàng', '', ['这是一个大订单。', 'Zhè shì yí ge dà dìngdān.', 'Đây là một đơn lớn.']),
      w('优惠', 'yōuhuì', 'ưu đãi', '', ['有什么优惠吗？', 'Yǒu shénme yōuhuì ma?', 'Có ưu đãi gì không?']),
      w('说服', 'shuōfú', 'thuyết phục', '', ['他说服了老板。', 'Tā shuōfúle lǎobǎn.', 'Anh ấy thuyết phục được sếp.'])
    ],
    qs: [
      ['mc', 'Nhượng bộ có điều kiện?', '如果您多订一些，我们可以再便宜一点儿。', ['我们不便宜。', '便宜一点儿吧随便。', '您不订也便宜。'], '如果…就/可以.'],
      ['mc', '我们各让一___吧。', '步', ['次', '个', '下'], '让一步.'],
      ['mc', '长期 nghĩa là?', 'lâu dài', ['dài hạn chiều dài', 'thời kỳ trước', 'ngắn hạn'], 'chángqī.'],
      ['hear', '这样对双方都有好处，我们希望长期合作。', 'Như vậy có lợi cho hai bên, mong hợp tác lâu dài.', ['Chỉ có lợi cho chúng tôi.', 'Hợp tác ngắn hạn.', 'Không hợp tác.'], '双方 / 长期.'],
      ['hear', '这已经是最低价了，不能再降了。', 'Đây là giá thấp nhất, không giảm nữa được.', ['Còn giảm được nhiều.', 'Giá đang cao nhất.', 'Giá miễn phí.'], '最低价.'],
      ['order', 'Sắp xếp: “Vậy chốt thế nhé.”', ['那', '就', '这么', '定了。'], '那就这么定了。']
    ],
    noi: [['这样对双方都有好处。', 'Zhèyàng duì shuāngfāng dōu yǒu hǎochu. – Như vậy có lợi cho cả hai bên.'], ['我们能不能各让一步？', 'Wǒmen néng bu néng gè ràng yí bù? – Mình mỗi bên lùi một bước được không?'], ['那就这么定了！', 'Nà jiù zhème dìng le! – Vậy chốt thế nhé!']],
    hoithoai: {
      ctx: 'Thương lượng giá đơn hàng 200 màn hình với nhà cung cấp Thâm Quyến.', vai: 'Nhà cung cấp nói, em thương lượng.', ai: '🏭 供应商',
      luot: [
        T(['每台一千二百块，这是最低价了。', 'Měi tái yì qiān èr bǎi kuài, zhè shì zuì dī jià le.', 'Mỗi chiếc 1.200 tệ, đây là giá thấp nhất.'], ['我们这次订两百台，而且希望长期合作，能不能再优惠一点儿？', 'Wǒmen zhè cì dìng liǎng bǎi tái, érqiě xīwàng chángqī hézuò, néng bu néng zài yōuhuì yìdiǎnr?', 'Lần này đặt 200 chiếc, lại mong hợp tác lâu dài, ưu đãi thêm chút được không?', 'Nêu lợi ích.'], ['太贵了，不要了。', 'Tài guì le, bú yào le.', 'Bỏ cuộc sớm.'], ['一千块，不然我走。', 'Yì qiān kuài, bùrán wǒ zǒu.', 'Quá cứng.']),
        T(['那一千一百五，最多了。', 'Nà yì qiān yì bǎi wǔ, zuì duō le.', 'Vậy 1.150, hết mức rồi.'], ['我们各让一步，一千一百块，我们今天就签合同。', 'Wǒmen gè ràng yí bù, yì qiān yì bǎi kuài, wǒmen jīntiān jiù qiān hétong.', 'Mỗi bên lùi một bước, 1.100 tệ, hôm nay ký hợp đồng luôn.', 'Nhượng bộ + chốt.'], ['好的，一千一百五十。', 'Hǎo de, yì qiān yì bǎi wǔshí.', 'Chấp nhận ngay, mất lợi thế.'], ['我考虑一年。', 'Wǒ kǎolǜ yì nián.', 'Không thực tế.']),
        T(['好吧，看在长期合作的份上。', 'Hǎo ba, kàn zài chángqī hézuò de fèn shang.', 'Thôi được, vì hợp tác lâu dài.'], ['太好了！那就这么定了，合作愉快！', 'Tài hǎo le! Nà jiù zhème dìng le, hézuò yúkuài!', 'Tuyệt! Chốt vậy nhé, hợp tác vui vẻ!', 'Chốt.'], ['我再考虑考虑。', 'Wǒ zài kǎolǜ kǎolǜ.', 'Lật lọng.'], ['还要更便宜。', 'Hái yào gèng piányi.', 'Tham.'])
      ], ket: 'Em đã thương lượng thành công!'
    },
    tom: ['对双方都有好处', '各让一步', '如果…可以', '就这么定了'], nguphap: 'Ngôn ngữ đàm phán', phatam: '让步 ràngbù, 优惠 yōuhuì',
    loi: ['Chấp nhận giá ngay', 'Quá cứng nhắc'], btvn: ['Viết kịch bản đàm phán 10 lượt', 'Tập 3 câu nhượng bộ có điều kiện', 'Luyện 🎤 3 câu']
  };

  const LK = ['listen', 'listenPy', 'listen', 'meaning', 'pinyin'];
  const d28 = {
    n: 28, ten: plan[27].ten, tong: 1, kt: { n: 20, min: 20 }, kinds: LK,
    muc: 'Nghe hiểu đoạn dài 4–6 câu: bắt ý chính, thái độ người nói, chi tiết số liệu (dạng bài HSK 4 phần 3).',
    hoc: `${tbl(['Bước', 'Cách làm'], [['1. Đọc trước đáp án', 'Đoán chủ đề và từ khoá cần nghe'], ['2. Nghe ý chính', 'Câu đầu và câu cuối thường chứa ý chính'], ['3. Nghe từ nối', '但是, 其实, 所以 báo hiệu ý quan trọng'], ['4. Nghe thái độ', '竟然, 果然, 难怪, 幸亏']])}`,
    vocab: [
      w('其实', 'qíshí', 'thật ra', '', ['其实我不太喜欢。', 'Qíshí wǒ bú tài xǐhuan.', 'Thật ra tôi không thích lắm.']),
      w('主要', 'zhǔyào', 'chủ yếu', '', ['主要原因是什么？', 'Zhǔyào yuányīn shì shénme?', 'Nguyên nhân chính là gì?']),
      w('说明', 'shuōmíng', 'cho thấy, giải thích', '', ['这说明他很努力。', 'Zhè shuōmíng tā hěn nǔlì.', 'Điều này cho thấy anh ấy rất cố gắng.']),
      w('观点', 'guāndiǎn', 'quan điểm', '', ['作者的观点是什么？', 'Zuòzhě de guāndiǎn shì shénme?', 'Quan điểm tác giả là gì?']),
      w('作者', 'zuòzhě', 'tác giả', '', ['作者认为…', 'Zuòzhě rènwéi…', 'Tác giả cho rằng…']),
      w('根据', 'gēnjù', 'căn cứ theo', '', ['根据这段话…', 'Gēnjù zhè duàn huà…', 'Theo đoạn này…']),
      w('段', 'duàn', 'đoạn', '', ['这段话的意思是…', 'Zhè duàn huà de yìsi shì…', 'Ý của đoạn này là…']),
      w('捷径', 'jiéjìng', 'đường tắt', '', ['学外语没有捷径。', 'Xué wàiyǔ méiyǒu jiéjìng.', 'Học ngoại ngữ không có đường tắt.']),
      w('总之', 'zǒngzhī', 'tóm lại', '', ['总之，我们要努力。', 'Zǒngzhī, wǒmen yào nǔlì.', 'Tóm lại, ta phải cố gắng.']),
      w('例如', 'lìrú', 'ví dụ như', '', ['例如节约用水。', 'Lìrú jiéyuē yòng shuǐ.', 'Ví dụ tiết kiệm nước.'])
    ],
    qs: [
      ['hear', '很多人觉得早起很难，其实只要坚持一个月，就会养成习惯。', 'Nhiều người thấy dậy sớm khó, thật ra kiên trì một tháng sẽ thành thói quen.', ['Dậy sớm là không thể.', 'Cần một năm.', 'Không nên dậy sớm.'], '其实 báo ý chính.'],
      ['hear', '这家公司去年成立，员工只有二十人，可是销售额已经达到五千万。', 'Công ty lập năm ngoái, chỉ 20 nhân viên nhưng doanh số đã đạt 50 triệu.', ['200 nhân viên.', 'Doanh số 5 triệu.', 'Lập 20 năm trước.'], 'Chi tiết số.'],
      ['hear', '我本来以为他不会来，没想到他果然准时到了。', 'Tôi tưởng anh ấy không đến, không ngờ anh ấy đến đúng giờ.', ['Anh ấy không đến.', 'Anh ấy đến muộn.', 'Tôi biết chắc anh ấy đến.'], 'Chuyển ý.'],
      ['hear', '总之，学外语没有捷径，只能每天练习。', 'Tóm lại, học ngoại ngữ không có đường tắt, chỉ có luyện mỗi ngày.', ['Có cách học nhanh.', 'Học một tuần là giỏi.', 'Không cần luyện.'], '总之.'],
      ['mc', '其实 nghĩa là?', 'thật ra', ['thực tế là ăn', 'ví dụ', 'tóm lại'], 'qíshí.'],
      ['order', 'Sắp xếp: “Quan điểm của tác giả là gì?”', ['作者的', '观点', '是', '什么？'], '作者的观点是什么？']
    ],
    noi: [['其实我不太同意。', 'Qíshí wǒ bú tài tóngyì. – Thật ra tôi không đồng ý lắm.'], ['总之，我们要坚持。', 'Zǒngzhī, wǒmen yào jiānchí. – Tóm lại, ta phải kiên trì.'], ['这说明他很努力。', 'Zhè shuōmíng tā hěn nǔlì. – Điều này cho thấy anh ấy rất cố gắng.']],
    hoithoai: {
      ctx: 'Em nghe bài phát biểu ngắn rồi trả lời câu hỏi của giáo viên.', vai: 'Giáo viên hỏi, em trả lời.', ai: '👩‍🏫 老师',
      luot: [
        T(['刚才那段话主要讲了什么？', 'Gāngcái nà duàn huà zhǔyào jiǎngle shénme?', 'Đoạn vừa rồi chủ yếu nói gì?'], ['主要讲了怎么养成早起的习惯。', 'Zhǔyào jiǎngle zěnme yǎngchéng zǎoqǐ de xíguàn.', 'Chủ yếu nói cách tập thói quen dậy sớm.', 'Ý chính.'], ['讲了很多。', 'Jiǎngle hěn duō.', 'Mơ hồ.'], ['我没听过。', 'Wǒ méi tīngguo.', 'Sai.']),
        T(['说话人的观点是什么？', 'Shuōhuà rén de guāndiǎn shì shénme?', 'Quan điểm người nói?'], ['他认为只要坚持一个月，就能养成习惯。', 'Tā rènwéi zhǐyào jiānchí yí ge yuè, jiù néng yǎngchéng xíguàn.', 'Anh ấy cho rằng chỉ cần kiên trì một tháng là thành thói quen.', 'Quan điểm.'], ['他觉得早起不可能。', 'Tā juéde zǎoqǐ bù kěnéng.', 'Nghe nhầm.'], ['观点是作者。', 'Guāndiǎn shì zuòzhě.', 'Vô nghĩa.']),
        T(['你同意吗？', 'Nǐ tóngyì ma?', 'Em đồng ý không?'], ['同意，其实我自己就是这样做的。', 'Tóngyì, qíshí wǒ zìjǐ jiù shì zhèyàng zuò de.', 'Đồng ý, thật ra em cũng làm như vậy.', 'Liên hệ bản thân.'], ['不知道观点。', 'Bù zhīdào guāndiǎn.', 'Không trả lời.'], ['同意不了。', 'Tóngyì bu liǎo.', 'Sai.'])
      ], ket: 'Em đã nghe hiểu đoạn dài và nêu quan điểm.'
    },
    tom: ['Đọc trước đáp án', 'Nghe 其实/但是/总之', 'Nghe thái độ'], nguphap: 'Kỹ năng nghe HSK 4', phatam: '其实 qíshí, 总之 zǒngzhī',
    loi: ['Chỉ nghe chi tiết, bỏ ý chính'], btvn: ['Nghe 3 đoạn HSK 4 phần 3 trên mạng', 'Tóm tắt mỗi đoạn 2 câu', 'Luyện 🎤 3 câu']
  };

  const d29 = {
    n: 29, ten: plan[28].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Luyện dạng viết HSK 4: sắp xếp từ thành câu và viết câu theo tranh với từ cho trước; mô phỏng giao tiếp tổng hợp.',
    hoc: `${tbl(['Dạng bài', 'Mẹo'], [['完成句子 (sắp xếp từ)', 'Tìm chủ ngữ + động từ chính trước; 把/被 đứng trước động từ; trạng từ (都, 也, 已经) trước động từ.'], ['看图，用词造句', 'Viết câu đơn giản, đúng ngữ pháp, có dùng từ cho sẵn; 10–15 chữ là đủ.']])}
      ${exs([['桌子上 / 放着 / 一本书', 'Zhuōzi shang fàngzhe yì běn shū.', '桌子上放着一本书。'], ['被 / 我的手机 / 弟弟 / 弄坏了', 'Wǒ de shǒujī bèi dìdi nònghuài le.', '我的手机被弟弟弄坏了。']])}`,
    qs: [['order', 'Sắp xếp: “Điện thoại tôi bị em trai làm hỏng.”', ['我的手机', '被弟弟', '弄坏', '了。'], '我的手机被弟弟弄坏了。'], ['order', 'Sắp xếp: “Trên bàn đặt một quyển sách.”', ['桌子上', '放着', '一本', '书。'], '桌子上放着一本书。'], ['mc', 'Từ 已经 đứng ở đâu?', 'Trước động từ', ['Cuối câu', 'Đầu câu trước chủ ngữ', 'Sau tân ngữ'], 'Trạng từ trước động từ.']],
    noi: [['我已经把报告写完了。', 'Wǒ yǐjīng bǎ bàogào xiěwán le. – Tôi đã viết xong báo cáo.'], ['桌子上放着一本书。', 'Zhuōzi shang fàngzhe yì běn shū. – Trên bàn đặt một quyển sách.']],
    hoithoai: {
      ctx: 'Mô phỏng: buổi gặp đối tác từ chào hỏi đến chốt hợp đồng.', vai: 'Đối tác nói, em đáp liên tục.', ai: '🤝 吴总',
      luot: [
        T(['你们公司是哪年成立的？', 'Nǐmen gōngsī shì nǎ nián chénglì de?', 'Công ty các bạn thành lập năm nào?'], ['我们公司是二〇一五年成立的，现在有五十名员工。', 'Wǒmen gōngsī shì èr líng yī wǔ nián chénglì de, xiànzài yǒu wǔshí míng yuángōng.', 'Thành lập năm 2015, hiện có 50 nhân viên.', '是…的.'], ['成立了二〇一五年。', 'Chénglìle èr líng yī wǔ nián.', 'Sai.'], ['我们是公司。', 'Wǒmen shì gōngsī.', 'Lạc.']),
        T(['你们的优势是什么？', 'Nǐmen de yōushì shì shénme?', 'Thế mạnh của các bạn?'], ['我们不仅价格合理，而且售后服务非常好。', 'Wǒmen bùjǐn jiàgé hélǐ, érqiě shòuhòu fúwù fēicháng hǎo.', 'Không chỉ giá hợp lý mà hậu mãi rất tốt.', '不仅…而且.'], ['我们竟然很好。', 'Wǒmen jìngrán hěn hǎo.', 'Sai sắc thái.'], ['优势很多吧。', 'Yōushì hěn duō ba.', 'Mơ hồ.']),
        T(['好，那我们签合同吧。', 'Hǎo, nà wǒmen qiān hétong ba.', 'Được, vậy ký hợp đồng nhé.'], ['太好了，期待与您长期合作！', 'Tài hǎo le, qīdài yǔ nín chángqī hézuò!', 'Tuyệt, mong hợp tác lâu dài!', 'Chốt.'], ['我再考虑一年。', 'Wǒ zài kǎolǜ yì nián.', 'Lật lọng.'], ['合同被签。', 'Hétong bèi qiān.', 'Câu cụt.'])
      ], ket: 'Em đã hoàn thành buổi gặp đối tác trọn vẹn!'
    },
    tom: ['Sắp xếp câu: chủ ngữ + trạng từ + 把/被 + V', 'Viết câu theo tranh'], nguphap: 'Kỹ năng viết HSK 4', phatam: 'Ngữ điệu câu dài',
    loi: ['Đặt trạng từ sai vị trí'], btvn: ['Làm 10 câu sắp xếp HSK 4', 'Viết 5 câu theo tranh', 'Chuẩn bị bài kiểm tra cuối khoá']
  };

  const d30 = {
    n: 30, ten: plan[29].ten, vocab: [], tong: 1, kt: { n: 30, min: 30 }, kinds: K,
    muc: 'Kiểm tra cuối khoá HSK 4 (30 câu) và lên lộ trình HSK 5–6.',
    hoc: `<h4>🏁 Hoàn thành cấp 3!</h4>${tbl(['Đã học', 'Tiếp theo ở HSK 5–6'], [['Bổ ngữ mở rộng, 连…都, 即使, 无论', 'Thành ngữ 成语, văn viết trang trọng'], ['Liên từ văn viết, trạng từ thái độ', 'Đọc báo, văn bản dài, nghị luận'], ['Họp, đàm phán, số liệu', 'Thuyết trình, viết luận 400–500 chữ'], ['~1200 từ HSK 4', '~2500–5000 từ HSK 5–6']])}
      ${tip('📌 HSK 4 tổng 300 điểm, cần ≥ 180 để đạt (HSK 2.0). Hãy làm 1 đề thi thử chính thức để biết điểm thật.')}`,
    qs: [['mc', '___下雨，比赛也照常进行。', '即使', ['虽然', '由于', '既然'], 'Giả định.'], ['mc', '除了中文以外，他___会日语。', '还', ['都', '就', '才'], 'Thêm.'], ['mc', '销售额比去年___增长了10%。', '同期', ['同时', '一样', '以前了'], 'Cùng kỳ.']],
    noi: [['我已经学完了HSK四级。', 'Wǒ yǐjīng xuéwánle HSK sì jí. – Tôi đã học xong HSK 4.'], ['我打算继续学HSK五级。', 'Wǒ dǎsuàn jìxù xué HSK wǔ jí. – Tôi định học tiếp HSK 5.']],
    hoithoai: {
      ctx: 'Buổi tổng kết khoá với giáo viên.', vai: 'Cô hỏi, em trả lời.', ai: '👩‍🏫 王老师',
      luot: [
        T(['这个月你最大的收获是什么？', 'Zhège yuè nǐ zuì dà de shōuhuò shì shénme?', 'Tháng này em thu hoạch lớn nhất là gì?'], ['我不仅学会了很多复杂的句子，而且敢在会议上说中文了。', 'Wǒ bùjǐn xuéhuìle hěn duō fùzá de jùzi, érqiě gǎn zài huìyì shang shuō Zhōngwén le.', 'Em không chỉ học được nhiều câu phức tạp mà còn dám nói tiếng Trung trong họp.', '不仅…而且.'], ['收获很竟然。', 'Shōuhuò hěn jìngrán.', 'Sai.'], ['我没有收获了。', 'Wǒ méiyǒu shōuhuò le.', 'Sai.']),
        T(['哪部分还需要加强？', 'Nǎ bùfen hái xūyào jiāqiáng?', 'Phần nào cần tăng cường?'], ['听力还需要加强，尤其是说得快的时候。', 'Tīnglì hái xūyào jiāqiáng, yóuqí shì shuō de kuài de shíhou.', 'Nghe cần tăng cường, nhất là khi nói nhanh.', 'Tự đánh giá.'], ['都不需要。', 'Dōu bù xūyào.', 'Thiếu cầu tiến.'], ['加强听力被。', 'Jiāqiáng tīnglì bèi.', 'Sai.']),
        T(['以后的计划呢？', 'Yǐhòu de jìhuà ne?', 'Kế hoạch sau này?'], ['我打算明年考HSK四级，然后继续学HSK五级。', 'Wǒ dǎsuàn míngnián kǎo HSK sì jí, ránhòu jìxù xué HSK wǔ jí.', 'Em định năm sau thi HSK 4, rồi học tiếp HSK 5.', 'Kế hoạch.'], ['后来学五级。', 'Hòulái xué wǔ jí.', '后来 chỉ quá khứ.'], ['不打算了。', 'Bù dǎsuàn le.', 'Không có kế hoạch.'])
      ], ket: 'Chúc mừng em đã hoàn thành cấp 3 – HSK 4! 🎉'
    },
    tom: ['Kiểm tra 30 câu', 'Lộ trình HSK 5–6'], nguphap: 'Tổng ôn toàn khoá', phatam: 'Ôn ngữ điệu câu dài',
    loi: ['Xem lại các câu sai trong báo cáo'], btvn: ['Làm 1 đề HSK 4 thi thử chính thức', 'Ôn lại 3 ngày điểm thấp nhất', 'Bắt đầu cấp 4 – HSK 5–6']
  };

  Z.days.push(d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30);
})();

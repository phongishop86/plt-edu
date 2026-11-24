/* PLT-Edu · Tiếng Trung – Giai đoạn 2: Xây dựng vốn từ và câu cơ bản (Ngày 8–14) */
(function () {
  'use strict';
  const { w, L, T, tbl, tip, sp, ex, F } = window.PLT_ZH.H;
  const K = ['meaning', 'listen', 'pinyin', 'hanzi', 'listenPy', 'match'];

  /* ================= NGÀY 8 ================= */
  const d8 = {
    n: 8, ten: 'Chào hỏi, giới thiệu bản thân', kinds: K,
    muc: 'Chào hỏi lịch sự với người lớn, hỏi họ tên, quốc tịch; tự giới thiệu trọn vẹn 4–5 câu.',
    hoc: `<h4>1. Chào hỏi lịch sự: 你 và 您</h4><ul><li><b>你</b> nǐ: bạn bè, người ngang hàng, người nhỏ tuổi hơn.</li><li><b>您</b> nín: kính trọng, dùng với người lớn tuổi, khách hàng, cấp trên. ${sp('您好！')}</li><li>Chào nhiều người: <b>大家好！</b> Dàjiā hǎo! ${sp('大家好！')}</li></ul>
      <h4>2. Hỏi họ và tên</h4>${tbl(['Câu hỏi', 'Dùng khi', 'Trả lời'], [
        `<tr><td>您贵姓？ Nín guìxìng? ${sp('您贵姓？')}</td><td>Hỏi họ người lớn, khách (rất lịch sự)</td><td>我姓阮。Wǒ xìng Ruǎn. (Tôi họ Nguyễn)</td></tr>`,
        `<tr><td>你叫什么名字？ ${sp('你叫什么名字？')}</td><td>Hỏi tên bạn bè, người ngang hàng</td><td>我叫阮明。Wǒ jiào Ruǎn Míng.</td></tr>`])}
      ${tip('⚠️ <b>贵</b> (quý) là từ tôn kính, chỉ dùng khi <b>hỏi người khác</b>. Không bao giờ nói ✘ 我贵姓阮; nói ✔ 我姓阮.')}
      <p class="small">Một số họ Việt bằng chữ Hán: Nguyễn 阮 Ruǎn · Trần 陈 Chén · Lê 黎 Lí · Phạm 范 Fàn · Hoàng 黄 Huáng · Võ/Vũ 武 Wǔ.</p>
      <h4>3. Hỏi quốc tịch với 哪 nǎ (nào)</h4>${F(['你', '是', '哪<small>nǎ – nào</small>', '国人？'])}<ul>${ex('你是哪国人？', 'Nǐ shì nǎ guó rén?', 'Bạn là người nước nào?')}${ex('我是越南人。', 'Wǒ shì Yuènán rén.', 'Tôi là người Việt Nam.')}</ul><p class="small">Thêm tên nước: 美国 Měiguó (Mỹ) · 韩国 Hánguó (Hàn Quốc) · 日本 Rìběn (Nhật Bản).</p>
      <h4>4. 也 yě (cũng): đứng TRƯỚC động từ</h4>${F(['Chủ ngữ', '+', '也', '+', 'Động từ'])}<ul>${ex('我也是越南人。', 'Wǒ yě shì Yuènán rén.', 'Tôi cũng là người Việt Nam.')}</ul>${tip('⚠️ Người Việt hay nói ✘ 我是也… hoặc ✘ 也我是… Nhớ: 也 luôn đứng ngay trước động từ / tính từ.')}
      <h4>5. Mẫu tự giới thiệu</h4><ol>${ex('大家好！', 'Dàjiā hǎo!', 'Chào mọi người!')}${ex('我姓阮，叫阮明。', 'Wǒ xìng Ruǎn, jiào Ruǎn Míng.', 'Tôi họ Nguyễn, tên Nguyễn Minh.')}${ex('我是越南人。', 'Wǒ shì Yuènán rén.', 'Tôi là người Việt Nam.')}${ex('很高兴认识大家！', 'Hěn gāoxìng rènshi dàjiā!', 'Rất vui được làm quen với mọi người!')}</ol>`,
    vocab: [
      w('您', 'nín', 'ông, bà, anh, chị (kính trọng)', 'Dạng kính trọng của 你.', ['您好！', 'Nín hǎo!', 'Chào ông/bà!']),
      w('请问', 'qǐngwèn', 'xin hỏi', 'Mở đầu câu hỏi cho lịch sự.', ['请问，您贵姓？', 'Qǐngwèn, nín guìxìng?', 'Xin hỏi, ông/bà họ gì ạ?']),
      w('贵姓', 'guìxìng', 'quý danh (họ của người khác)', 'Chỉ dùng để hỏi người khác.', ['您贵姓？', 'Nín guìxìng?', 'Ông/bà họ gì ạ?']),
      w('姓', 'xìng', 'họ; mang họ', '我姓 + họ.', ['我姓阮。', 'Wǒ xìng Ruǎn.', 'Tôi họ Nguyễn.']),
      w('认识', 'rènshi', 'quen biết, làm quen', '识 đọc nhẹ.', ['我认识他。', 'Wǒ rènshi tā.', 'Tôi quen anh ấy.']),
      w('高兴', 'gāoxìng', 'vui, vui mừng', '', ['很高兴认识你！', 'Hěn gāoxìng rènshi nǐ!', 'Rất vui được quen bạn!']),
      w('也', 'yě', 'cũng', 'Đứng trước động từ/tính từ.', ['我也很好。', 'Wǒ yě hěn hǎo.', 'Tôi cũng khỏe.']),
      w('哪', 'nǎ', 'nào', 'Hỏi lựa chọn: 哪国 (nước nào).', ['你是哪国人？', 'Nǐ shì nǎ guó rén?', 'Bạn là người nước nào?']),
      w('国', 'guó', 'nước, quốc gia', '', ['他是美国人。', 'Tā shì Měiguó rén.', 'Anh ấy là người Mỹ.']),
      w('介绍', 'jièshào', 'giới thiệu', '', ['我来介绍一下。', 'Wǒ lái jièshào yíxià.', 'Để tôi giới thiệu một chút.']),
      w('大家', 'dàjiā', 'mọi người', '', ['大家好！', 'Dàjiā hǎo!', 'Chào mọi người!']),
      w('欢迎', 'huānyíng', 'chào mừng, hoan nghênh', '', ['欢迎你！', 'Huānyíng nǐ!', 'Chào mừng bạn!'])
    ],
    qs: [
      ['mc', 'Hỏi họ của một vị khách lớn tuổi thế nào cho lịch sự?', '您贵姓？', ['你姓什么名字？', '您叫贵姓？', '你是哪国人？'], '您贵姓 là cách hỏi họ lịch sự nhất.'],
      ['mc', '“Tôi cũng là người Việt Nam” đúng là?', '我也是越南人。', ['我是也越南人。', '也我是越南人。', '我是越南人也。'], '也 đứng ngay trước động từ 是.'],
      ['mc', 'Câu “我贵姓阮” sai vì sao?', '贵 là từ tôn kính, chỉ dùng khi hỏi người khác', ['Thiếu 是', 'Phải dùng 叫 thay cho 姓', 'Câu này đúng'], 'Trả lời về mình: 我姓阮.'],
      ['mc', '“Bạn là người nước nào?” là câu nào?', '你是哪国人？', ['你哪是国人？', '你是国人哪？', '哪你是国人？'], 'Câu hỏi giữ nguyên trật tự câu trả lời: 我是越南人 → 你是哪国人？'],
      ['order', 'Sắp xếp: “Rất vui được quen bạn.”', ['很', '高兴', '认识', '你！'], '很高兴认识你！Hěn gāoxìng rènshi nǐ!'],
      ['hear', '大家好！', 'Chào mọi người!', ['Chào mừng!', 'Rất vui!', 'Xin hỏi!'], '大家好 Dàjiā hǎo – Chào mọi người.'],
      ['mc', '您 khác 你 ở điểm nào?', '您 là cách gọi kính trọng (người lớn, khách hàng)', ['您 là số nhiều của 你', '您 chỉ dùng cho phụ nữ', 'Không khác gì'], 'Số nhiều là 你们, không phải 您.'],
      ['mc', '“Tôi họ Nguyễn, tên là Nguyễn Minh” đúng là?', '我姓阮，叫阮明。', ['我叫阮，姓阮明。', '我姓阮明，叫阮。', '我是姓阮。'], '姓 + họ; 叫 + họ tên đầy đủ.'],
      ['hear', '很高兴认识你！', 'Rất vui được quen bạn!', ['Xin hỏi bạn họ gì?', 'Bạn là người nước nào?', 'Để tôi giới thiệu.'], '很高兴认识你 – Rất vui được quen bạn.']
    ],
    hoithoai: {
      ctx: 'Em dự buổi giao lưu doanh nghiệp. Ông Vương (王先生), một doanh nhân Trung Quốc, đến bắt chuyện.', vai: 'Ông Vương hỏi, em trả lời lịch sự.', ai: '👨‍💼 王先生',
      luot: [
        T(['您好！请问，您贵姓？', 'Nín hǎo! Qǐngwèn, nín guìxìng?', 'Chào anh! Xin hỏi anh họ gì?'], ['我姓阮，叫阮明。', 'Wǒ xìng Ruǎn, jiào Ruǎn Míng.', 'Tôi họ Nguyễn, tên Nguyễn Minh.', 'Trả lời đủ họ và tên.'], ['我贵姓阮。', 'Wǒ guìxìng Ruǎn.', '贵 chỉ dùng để hỏi người khác, không dùng cho mình.'], ['我叫什么名字。', 'Wǒ jiào shénme míngzi.', 'Đây là câu hỏi lại "tôi tên gì?".']),
        T(['你是哪国人？', 'Nǐ shì nǎ guó rén?', 'Anh là người nước nào?'], ['我是越南人。您呢？', 'Wǒ shì Yuènán rén. Nín ne?', 'Tôi là người Việt Nam. Còn ông?', '呢 ne = "còn … thì sao?", hỏi ngược lại rất tự nhiên.'], ['我是越南。', 'Wǒ shì Yuènán.', 'Thiếu 人: phải là 越南人 (người Việt Nam).'], ['我是哪国人。', 'Wǒ shì nǎ guó rén.', 'Phải thay 哪国 bằng tên nước của mình.']),
        T(['我是中国人。很高兴认识你！', 'Wǒ shì Zhōngguó rén. Hěn gāoxìng rènshi nǐ!', 'Tôi là người Trung Quốc. Rất vui được quen anh!'], ['认识您，我也很高兴！', 'Rènshi nín, wǒ yě hěn gāoxìng!', 'Được quen ông, tôi cũng rất vui!', 'Dùng 也 đúng vị trí, xưng 您 lịch sự.'], ['我很高兴也。', 'Wǒ hěn gāoxìng yě.', '也 phải đứng trước 很高兴.'], ['不客气。', 'Bú kèqi.', '不客气 để đáp lời cảm ơn.']),
        T(['我来介绍一下，这是我同事，李女士。', 'Wǒ lái jièshào yíxià, zhè shì wǒ tóngshì, Lǐ nǚshì.', 'Để tôi giới thiệu, đây là đồng nghiệp của tôi, chị Lý.'], ['李女士，您好！欢迎！', 'Lǐ nǚshì, nín hǎo! Huānyíng!', 'Chào chị Lý! Rất hân hạnh!', 'Chào bằng 您 với người mới gặp trong công việc.'], ['再见！', 'Zàijiàn!', 'Vừa được giới thiệu mà đã tạm biệt?'], ['对不起！', 'Duìbuqǐ!', 'Không có gì phải xin lỗi.'])
      ], ket: 'Em đã tự giới thiệu và làm quen rất lịch sự với đối tác.'
    },
    tom: ['你 và 您', 'Hỏi họ 您贵姓 / trả lời 我姓…', 'Hỏi quốc tịch với 哪', '也 trước động từ', 'Mẫu tự giới thiệu 4 câu'],
    nguphap: '哪 (nào); 也 + động từ; 您贵姓 – 我姓…; 呢 hỏi ngược lại', phatam: 'xìng/shì; rènshi (r uốn lưỡi); 也 yě thanh 3',
    loi: ['Nói 我贵姓…', 'Đặt 也 sau động từ', 'Quên 人 trong 越南人'],
    btvn: ['Viết và đọc to đoạn tự giới thiệu 5 câu', 'Ghi âm đoạn tự giới thiệu, so với giọng mẫu', 'Tìm họ của mình bằng chữ Hán']
  };

  /* ================= NGÀY 9 ================= */
  const d9 = {
    n: 9, ten: 'Đại từ nhân xưng và câu giới thiệu', kinds: K,
    muc: 'Dùng đủ các đại từ, chỉ người bằng 这/那, hỏi "ai" với 谁, nói "của tôi" với 的 và "đều" với 都.',
    hoc: `<h4>1. Bảng đại từ nhân xưng</h4>${tbl(['Ngôi', 'Số ít', 'Số nhiều'], [
        `<tr><td>Thứ nhất</td><td>我 wǒ</td><td>我们 wǒmen</td></tr>`, `<tr><td>Thứ hai</td><td>你 nǐ · 您 nín</td><td>你们 nǐmen</td></tr>`,
        `<tr><td>Thứ ba</td><td>他 tā (nam) · 她 tā (nữ) · 它 tā (vật)</td><td>他们 · 她们 tāmen</td></tr>`])}
      <p class="small">Nhóm có cả nam và nữ thì dùng 他们. Không thêm 们 vào 您.</p>
      <h4>2. 这 zhè (đây/này) – 那 nà (kia/đó)</h4>${F(['这 / 那', '+', '是', '+', 'người / vật'])}<ul>${ex('这是我的老师。', 'Zhè shì wǒ de lǎoshī.', 'Đây là thầy giáo của tôi.')}${ex('那是谁？', 'Nà shì shéi?', 'Kia là ai?')}</ul>
      <h4>3. Hỏi "ai" với 谁 shéi</h4><p>Thay 谁 vào chỗ người cần hỏi, <b>không thêm 吗</b>: 他是谁？→ 他是我同学。 ${sp('他是谁？')}</p>
      <h4>4. 的 de – "của"</h4>${F(['Người sở hữu', '+', '的', '+', 'vật / người'])}<ul>${ex('我的朋友', 'wǒ de péngyou', 'bạn của tôi')}${ex('老师的书', 'lǎoshī de shū', 'sách của thầy')}</ul>${tip('🔁 <b>Ngược với tiếng Việt:</b> tiếng Việt nói "bạn của tôi", tiếng Trung nói "tôi của bạn" (我的朋友). Với người thân, bạn thân thì có thể bỏ 的: 我妈妈, 我朋友.')}
      <h4>5. 都 dōu – đều, tất cả: đứng trước động từ</h4><ul>${ex('我们都是越南人。', 'Wǒmen dōu shì Yuènán rén.', 'Chúng tôi đều là người Việt Nam.')}${ex('他们都很好。', 'Tāmen dōu hěn hǎo.', 'Họ đều khỏe.')}</ul>
      <h4>6. 呢 ne – "còn … thì sao?"</h4><ul>${ex('我很好，你呢？', 'Wǒ hěn hǎo, nǐ ne?', 'Tôi khỏe, còn bạn?')}</ul>`,
    vocab: [
      w('你们', 'nǐmen', 'các bạn', '', ['你们好！', 'Nǐmen hǎo!', 'Chào các bạn!']),
      w('他们', 'tāmen', 'họ, các anh ấy', 'Nhóm có nam hoặc cả nam lẫn nữ.', ['他们是我同学。', 'Tāmen shì wǒ tóngxué.', 'Họ là bạn học của tôi.']),
      w('这', 'zhè', 'đây, này', '', ['这是我的老师。', 'Zhè shì wǒ de lǎoshī.', 'Đây là thầy giáo của tôi.']),
      w('那', 'nà', 'kia, đó', '', ['那是我的朋友。', 'Nà shì wǒ de péngyou.', 'Kia là bạn tôi.']),
      w('谁', 'shéi', 'ai', 'Cũng đọc shuí. Không thêm 吗.', ['他是谁？', 'Tā shì shéi?', 'Anh ấy là ai?']),
      w('的', 'de', 'của (trợ từ sở hữu)', 'Người sở hữu + 的 + vật.', ['这是我的书。', 'Zhè shì wǒ de shū.', 'Đây là sách của tôi.']),
      w('同学', 'tóngxué', 'bạn học', '', ['我们是同学。', 'Wǒmen shì tóngxué.', 'Chúng tôi là bạn học.']),
      w('同事', 'tóngshì', 'đồng nghiệp', '', ['她是我同事。', 'Tā shì wǒ tóngshì.', 'Cô ấy là đồng nghiệp của tôi.']),
      w('都', 'dōu', 'đều, tất cả', 'Đứng trước động từ, sau chủ ngữ số nhiều.', ['我们都是学生。', 'Wǒmen dōu shì xuésheng.', 'Chúng tôi đều là học sinh.']),
      w('呢', 'ne', 'còn … thì sao?', 'Đặt sau người/vật để hỏi ngược lại.', ['我很好，你呢？', 'Wǒ hěn hǎo, nǐ ne?', 'Tôi khỏe, còn bạn?']),
      w('先生', 'xiānsheng', 'ông, anh (lịch sự)', 'Họ + 先生: 王先生.', ['王先生，您好！', 'Wáng xiānsheng, nín hǎo!', 'Chào ông Vương!']),
      w('女士', 'nǚshì', 'bà, chị (lịch sự)', 'Họ + 女士: 李女士. nǚ có hai chấm.', ['李女士，您好！', 'Lǐ nǚshì, nín hǎo!', 'Chào chị Lý!'])
    ],
    qs: [
      ['mc', '“Bạn của tôi” tiếng Trung là?', '我的朋友', ['朋友的我', '的我朋友', '朋友我的'], 'Người sở hữu + 的 + vật/người.'],
      ['mc', '“Chúng tôi đều là học sinh” đúng là?', '我们都是学生。', ['都我们是学生。', '我们是都学生。', '我们是学生都。'], '都 đứng trước động từ 是.'],
      ['mc', 'Câu nào <b>sai</b>?', '他是谁吗？', ['他是谁？', '那是谁？', '这是我同事。'], 'Có 谁 rồi thì không thêm 吗.'],
      ['mc', '“我很好，你呢？” nghĩa là?', 'Tôi khỏe, còn bạn thì sao?', ['Tôi khỏe, bạn có khỏe không?', 'Tôi khỏe, bạn là ai?', 'Tôi khỏe, cảm ơn bạn'], '呢 = còn … thì sao?'],
      ['mc', 'Gọi lịch sự ông Vương?', '王先生', ['先生王', '王女士', '王的先生'], 'Họ + 先生.'],
      ['hear', '那是谁？', 'Kia là ai?', ['Đây là ai?', 'Anh ấy là ai?', 'Kia là gì?'], '那 nà = kia; 谁 shéi = ai.'],
      ['hear', '他们都是我同事。', 'Họ đều là đồng nghiệp của tôi.', ['Họ là bạn học của tôi.', 'Chúng tôi đều là đồng nghiệp.', 'Anh ấy là đồng nghiệp của tôi.'], '他们 họ · 都 đều · 同事 đồng nghiệp.'],
      ['order', 'Sắp xếp: “Đây là thầy giáo của tôi.”', ['这', '是', '我的', '老师。'], '这是我的老师。'],
      ['mc', 'Nhóm gồm 2 nam, 1 nữ gọi chung là?', '他们', ['她们', '它们', '您们'], 'Có nam trong nhóm thì dùng 他们.']
    ],
    hoithoai: {
      ctx: 'Lý Minh đến nhà em chơi và xem ảnh kỷ yếu lớp đại học của em.', vai: 'Lý Minh hỏi về những người trong ảnh, em giới thiệu.', ai: '👨 李明',
      luot: [
        T(['这是谁？', 'Zhè shì shéi?', 'Đây là ai vậy?'], ['这是我的老师，王老师。', 'Zhè shì wǒ de lǎoshī, Wáng lǎoshī.', 'Đây là thầy giáo của tôi, thầy Vương.', '这是 + người; 我的老师 = thầy giáo của tôi.'], ['这是谁的。', 'Zhè shì shéi de.', 'Câu này chưa trả lời được.'], ['老师的我。', 'Lǎoshī de wǒ.', 'Sai trật tự: phải là 我的老师.']),
        T(['那是你的同学吗？', 'Nà shì nǐ de tóngxué ma?', 'Kia là bạn học của bạn à?'], ['是，他们都是我的同学。', 'Shì, tāmen dōu shì wǒ de tóngxué.', 'Đúng, họ đều là bạn học của tôi.', '都 đứng trước 是. Rất tốt!'], ['是，他们是都我的同学。', 'Shì, tāmen shì dōu wǒ de tóngxué.', '都 phải đứng trước 是.'], ['那是谁？', 'Nà shì shéi?', 'Lý Minh đang hỏi em mà.']),
        T(['他们是越南人吗？', 'Tāmen shì Yuènán rén ma?', 'Họ là người Việt Nam à?'], ['他们都是越南人。', 'Tāmen dōu shì Yuènán rén.', 'Họ đều là người Việt Nam.', 'Chuẩn!'], ['她是越南人。', 'Tā shì Yuènán rén.', 'Câu hỏi về "họ" (số nhiều), nên dùng 他们.'], ['我们是谁？', 'Wǒmen shì shéi?', 'Câu hỏi lạc đề.']),
        T(['我很喜欢这张照片！你最近好吗？', 'Wǒ hěn xǐhuan zhè zhāng zhàopiàn! Nǐ zuìjìn hǎo ma?', 'Mình rất thích tấm ảnh này! Dạo này bạn khỏe không?'], ['我很好，你呢？', 'Wǒ hěn hǎo, nǐ ne?', 'Tôi khỏe, còn bạn?', '呢 để hỏi ngược lại.'], ['我很好，你谁？', 'Wǒ hěn hǎo, nǐ shéi?', '"Bạn ai?" – sai.'], ['你很好吗呢？', 'Nǐ hěn hǎo ma ne?', 'Không dùng 吗 và 呢 cùng lúc.'])
      ], ket: 'Em đã giới thiệu thầy cô, bạn bè bằng 这/那, 的, 都 và hỏi lại bằng 呢.'
    },
    tom: ['Bảng đại từ', '这/那 + 是', 'Hỏi 谁', 'Sở hữu 的', '都 (đều)', '呢 hỏi ngược lại'],
    nguphap: '这/那 是…; 谁; A 的 B; 都 + động từ; …呢？', phatam: 'zhè/nà; shéi; nǚshì (ü)',
    loi: ['Nói 朋友的我 (ngược trật tự)', 'Đặt 都 sau 是', 'Thêm 吗 vào câu có 谁'],
    btvn: ['Lấy 3 tấm ảnh gia đình/bạn bè, giới thiệu mỗi người 1 câu bằng 这是…', 'Đặt 3 câu với 都', 'Luyện đối đáp: …你呢？']
  };

  /* ================= NGÀY 10 ================= */
  const nums = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'], numP = ['líng', 'yī', 'èr', 'sān', 'sì', 'wǔ', 'liù', 'qī', 'bā', 'jiǔ', 'shí'];
  const d10 = {
    n: 10, ten: 'Số đếm, tuổi, ngày tháng và thời gian', kinds: K,
    muc: 'Đếm 0–100, hỏi tuổi, nói ngày tháng, thứ trong tuần và giờ giấc.',
    hoc: `<h4>1. Số 0–10</h4><div class="zh-read">${nums.map((c, i) => `<button class="zh-rd" data-say="${c}"><b>${i}</b><span>${c}</span><small>${numP[i]}</small></button>`).join('')}</div>
      <h4>2. Ghép số 11–99</h4><ul><li>11 = 十一 shíyī · 15 = 十五 shíwǔ</li><li>20 = 二十 èrshí · 25 = 二十五 èrshíwǔ · 99 = 九十九 jiǔshíjiǔ</li><li>100 = 一百 yìbǎi · 105 = 一百零五 yìbǎi líng wǔ</li></ul>
      <h4>3. 二 èr hay 两 liǎng?</h4><ul><li><b>二</b>: đọc số, số thứ tự, ngày tháng: 二月 (tháng 2), 二十.</li><li><b>两</b>: chỉ số lượng trước lượng từ: 两个人 liǎng ge rén (hai người), 两点 (2 giờ).</li></ul>
      <h4>4. Hỏi tuổi</h4>${tbl(['Hỏi ai', 'Câu hỏi', 'Nghe'], [`<tr><td>Trẻ em (dưới 10 tuổi)</td><td>你几岁？ Nǐ jǐ suì?</td><td>${sp('你几岁？')}</td></tr>`, `<tr><td>Người ngang tuổi</td><td>你多大？ Nǐ duō dà?</td><td>${sp('你多大？')}</td></tr>`, `<tr><td>Người lớn tuổi</td><td>您多大年纪？ Nín duō dà niánjì?</td><td>${sp('您多大年纪？')}</td></tr>`])}<p>Trả lời: 我二十八岁。Wǒ èrshíbā suì. (không cần 是)</p>
      <h4>5. Ngày tháng: từ LỚN đến NHỎ (ngược tiếng Việt)</h4>${F(['2026年<small>năm</small>', '11月<small>tháng</small>', '24号<small>ngày</small>', '星期二<small>thứ</small>'])}<p>二〇二六年十一月二十四号，星期二。 ${sp('二〇二六年十一月二十四号，星期二。')}</p>
      <p class="small">Năm đọc từng chữ số: 二〇二六 èr líng èr liù. Văn viết dùng 日 rì, văn nói dùng 号 hào.</p>
      <p><b>Thứ:</b> 星期一 (thứ Hai) … 星期六 (thứ Bảy), 星期天 / 星期日 (Chủ nhật). ${sp('星期一|星期三|星期天')}</p>
      ${tip('⚠️ 星期一 là <b>thứ Hai</b> (không phải thứ Nhất)! Cách nhớ: số trong tiếng Trung = số thứ tiếng Việt trừ 1.')}
      <h4>6. Giờ giấc</h4><ul>${ex('现在几点？', 'Xiànzài jǐ diǎn?', 'Bây giờ mấy giờ?')}${ex('八点半。', 'Bā diǎn bàn.', 'Tám giờ rưỡi.')}${ex('两点十分。', 'Liǎng diǎn shí fēn.', 'Hai giờ mười phút.')}</ul>`,
    vocab: [
      w('几', 'jǐ', 'mấy (hỏi số nhỏ)', 'Hỏi số lượng thường dưới 10, ngày, giờ.', ['今天几号？', 'Jīntiān jǐ hào?', 'Hôm nay ngày mấy?']),
      w('两', 'liǎng', 'hai (chỉ số lượng)', 'Dùng trước lượng từ: 两个.', ['两个人', 'liǎng ge rén', 'hai người']),
      w('多大', 'duō dà', 'bao nhiêu tuổi', 'Hỏi tuổi người ngang hàng.', ['你多大？', 'Nǐ duō dà?', 'Bạn bao nhiêu tuổi?']),
      w('岁', 'suì', 'tuổi', 'Số + 岁, không cần 是.', ['我二十五岁。', 'Wǒ èrshíwǔ suì.', 'Tôi 25 tuổi.']),
      w('年', 'nián', 'năm', '', ['二〇二六年', 'èr líng èr liù nián', 'năm 2026']),
      w('月', 'yuè', 'tháng', 'Số + 月: 十一月 = tháng 11.', ['现在是十一月。', 'Xiànzài shì shíyī yuè.', 'Bây giờ là tháng 11.']),
      w('号', 'hào', 'ngày (trong tháng)', 'Văn nói dùng 号, văn viết dùng 日.', ['今天二十四号。', 'Jīntiān èrshísì hào.', 'Hôm nay ngày 24.']),
      w('星期', 'xīngqī', 'tuần, thứ', '星期 + số = thứ.', ['今天星期二。', 'Jīntiān xīngqī’èr.', 'Hôm nay thứ Ba.']),
      w('今天', 'jīntiān', 'hôm nay', '', ['今天星期几？', 'Jīntiān xīngqī jǐ?', 'Hôm nay thứ mấy?']),
      w('明天', 'míngtiān', 'ngày mai', '', ['明天见！', 'Míngtiān jiàn!', 'Mai gặp nhé!']),
      w('现在', 'xiànzài', 'bây giờ', '', ['现在几点？', 'Xiànzài jǐ diǎn?', 'Bây giờ mấy giờ?']),
      w('点', 'diǎn', 'giờ (giờ đồng hồ)', 'Số + 点; 2 giờ = 两点.', ['现在三点。', 'Xiànzài sān diǎn.', 'Bây giờ là 3 giờ.']),
      w('半', 'bàn', 'rưỡi, một nửa', '', ['八点半', 'bā diǎn bàn', 'tám giờ rưỡi'])
    ],
    qs: [
      ['mc', 'Số 25 viết bằng chữ Hán là?', '二十五', ['五十二', '二五', '两十五'], '2 chục + 5 = 二十五.'],
      ['mc', '“Hai người” nói là?', '两个人', ['二个人', '二人个', '两人个'], 'Trước lượng từ dùng 两.'],
      ['mc', 'Thứ tự đúng khi nói ngày tháng là?', 'Năm → tháng → ngày → thứ', ['Thứ → ngày → tháng → năm', 'Ngày → tháng → năm', 'Tháng → ngày → năm'], 'Từ lớn đến nhỏ, ngược tiếng Việt.'],
      ['mc', '星期一 là thứ mấy?', 'Thứ Hai', ['Thứ Nhất', 'Chủ nhật', 'Thứ Ba'], 'Số + 1 = thứ trong tiếng Việt.'],
      ['mc', '“Chủ nhật” là?', '星期天', ['星期七', '星期一', '星期八'], 'Chủ nhật: 星期天 hoặc 星期日.'],
      ['mc', '“8 giờ rưỡi” là?', '八点半', ['半八点', '八半点', '八点三十分钟'], 'Giờ + 点 + 半.'],
      ['mc', 'Hỏi tuổi bạn cùng lứa nên dùng câu nào?', '你多大？', ['你几岁？', '您多大年纪？', '你几号？'], '几岁 cho trẻ nhỏ, 多大年纪 cho người già.'],
      ['hear', '十四', '14', ['40', '4', '10'], '十四 shísì = 14. Chú ý: shí (uốn lưỡi) + sì (lưỡi thẳng).'],
      ['hear', '四十', '40', ['14', '4', '10'], '四十 sìshí = 40.'],
      ['hear', '今天星期三。', 'Hôm nay thứ Tư.', ['Hôm nay thứ Ba.', 'Hôm nay ngày 3.', 'Ngày mai thứ Tư.'], '星期三 = thứ Tư.'],
      ['order', 'Sắp xếp: “Tôi 28 tuổi.”', ['我', '二十八', '岁。'], '我二十八岁。']
    ],
    hoithoai: {
      ctx: 'Em đăng ký lớp tiếng Trung tại một trung tâm. Cô nhân viên hỏi thông tin để làm hồ sơ.', vai: 'Nhân viên hỏi, em trả lời.', ai: '👩‍💼 工作人员 (nhân viên)',
      luot: [
        T(['你好！你叫什么名字？', 'Nǐ hǎo! Nǐ jiào shénme míngzi?', 'Chào bạn! Bạn tên là gì?'], ['我叫阮明。', 'Wǒ jiào Ruǎn Míng.', 'Tôi tên Nguyễn Minh.', 'Ôn bài cũ rất tốt.'], ['我几岁。', 'Wǒ jǐ suì.', 'Sai câu hỏi.'], ['你好吗？', 'Nǐ hǎo ma?', 'Cô đang hỏi tên em.']),
        T(['你多大？', 'Nǐ duō dà?', 'Bạn bao nhiêu tuổi?'], ['我二十八岁。', 'Wǒ èrshíbā suì.', 'Tôi 28 tuổi.', 'Số + 岁.'], ['我是二十八个。', 'Wǒ shì èrshíbā ge.', '个 là lượng từ, không dùng cho tuổi.'], ['我多大。', 'Wǒ duō dà.', 'Phải thay 多大 bằng số tuổi.']),
        T(['你的生日是几月几号？', 'Nǐ de shēngrì shì jǐ yuè jǐ hào?', 'Sinh nhật bạn là ngày mấy tháng mấy?'], ['五月十号。', 'Wǔ yuè shí hào.', 'Ngày 10 tháng 5.', 'Tháng trước, ngày sau. 生日 = sinh nhật.'], ['十号五月。', 'Shí hào wǔ yuè.', 'Sai thứ tự: tháng đứng trước ngày.'], ['星期五。', 'Xīngqīwǔ.', 'Đây là thứ, không phải ngày sinh.']),
        T(['我们的课是星期六上午，你可以吗？', 'Wǒmen de kè shì xīngqīliù shàngwǔ, nǐ kěyǐ ma?', 'Lớp học vào sáng thứ Bảy, bạn đi được không?'], ['可以！几点？', 'Kěyǐ! Jǐ diǎn?', 'Được! Mấy giờ ạ?', 'Đồng ý và hỏi giờ.'], ['星期六是几？', 'Xīngqīliù shì jǐ?', 'Câu hỏi không rõ nghĩa.'], ['不客气。', 'Bú kèqi.', 'Lạc đề.']),
        T(['九点半。', 'Jiǔ diǎn bàn.', '9 giờ rưỡi.'], ['好的，星期六见！', 'Hǎo de, xīngqīliù jiàn!', 'Vâng, hẹn thứ Bảy gặp!', '…见 = hẹn gặp vào lúc …'], ['半九点。', 'Bàn jiǔ diǎn.', 'Sai trật tự; và cô đã nói giờ rồi.'], ['我九岁。', 'Wǒ jiǔ suì.', '9 tuổi?! 😄']),
      ], ket: 'Em đã nói tuổi, ngày sinh và hẹn lịch học.'
    },
    tom: ['Số 0–100', '二 và 两', 'Hỏi tuổi 3 cách', 'Ngày tháng năm, thứ', 'Giờ giấc'],
    nguphap: 'Năm-tháng-ngày-thứ; 几/多大; 两 + lượng từ; giờ: 点 / 半 / 分', phatam: 'shí/sì (十/四); 十四 vs 四十; èr',
    loi: ['Nhầm 十四 và 四十', 'Dùng 二个 thay cho 两个', 'Đọc ngày theo thứ tự tiếng Việt', 'Nghĩ 星期一 là Chủ nhật'],
    btvn: ['Đọc số điện thoại của mình bằng tiếng Trung (1 đọc yāo khi đọc số điện thoại)', 'Nói ngày sinh, tuổi của 3 người trong nhà', 'Nhìn đồng hồ, nói giờ hiện tại 5 lần trong ngày']
  };

  /* ================= NGÀY 11 ================= */
  const d11 = {
    n: 11, ten: 'Gia đình và các mối quan hệ', kinds: K,
    muc: 'Giới thiệu gia đình, dùng 有/没有, lượng từ 口 và 个, nối danh từ bằng 和.',
    hoc: `<h4>1. Cây gia đình</h4>${tbl(['Chữ Hán', 'Pinyin', 'Nghĩa', 'Nghe'], [
        ['爷爷', 'yéye', 'ông nội'], ['奶奶', 'nǎinai', 'bà nội'], ['爸爸', 'bàba', 'bố'], ['妈妈', 'māma', 'mẹ'], ['哥哥', 'gēge', 'anh trai'], ['姐姐', 'jiějie', 'chị gái'], ['弟弟', 'dìdi', 'em trai'], ['妹妹', 'mèimei', 'em gái'], ['儿子', 'érzi', 'con trai'], ['女儿', 'nǚ’ér', 'con gái']].map(([c, p, v]) => `<tr><td><b class="zh-hz">${c}</b></td><td>${p}</td><td>${v}</td><td>${sp(c)}</td></tr>`))}
      <p class="small">Vợ chồng: 丈夫 zhàngfu (chồng) · 妻子 qīzi (vợ); khẩu ngữ: 老公 lǎogōng · 老婆 lǎopo.</p>
      <h4>2. 有 yǒu (có) – phủ định là 没有 méiyǒu</h4>${F(['Chủ ngữ', '+', '有 / 没有', '+', 'danh từ'])}<ul>${ex('我有一个哥哥。', 'Wǒ yǒu yí ge gēge.', 'Tôi có một anh trai.')}${ex('我没有妹妹。', 'Wǒ méiyǒu mèimei.', 'Tôi không có em gái.')}</ul>${tip('⚠️ <b>Không bao giờ nói 不有</b>. Phủ định của 有 luôn là 没有.')}
      <h4>3. Hỏi số người trong gia đình: lượng từ 口</h4><ul>${ex('你家有几口人？', 'Nǐ jiā yǒu jǐ kǒu rén?', 'Nhà bạn có mấy người?')}${ex('我家有四口人。', 'Wǒ jiā yǒu sì kǒu rén.', 'Nhà tôi có bốn người.')}</ul><p class="small">口 chỉ dùng khi đếm thành viên gia đình; các trường hợp khác dùng 个: 两个孩子.</p>
      <h4>4. 和 hé (và): chỉ nối danh từ</h4><ul>${ex('爸爸、妈妈、哥哥和我', 'bàba, māma, gēge hé wǒ', 'bố, mẹ, anh trai và tôi')}</ul><p class="small">Không dùng 和 để nối hai câu (khác chữ "và" tiếng Việt).</p>`,
    vocab: [
      w('家', 'jiā', 'nhà, gia đình', '', ['我家有五口人。', 'Wǒ jiā yǒu wǔ kǒu rén.', 'Nhà tôi có năm người.']),
      w('有', 'yǒu', 'có', 'Phủ định: 没有.', ['我有一个哥哥。', 'Wǒ yǒu yí ge gēge.', 'Tôi có một anh trai.']),
      w('没有', 'méiyǒu', 'không có', '', ['我没有妹妹。', 'Wǒ méiyǒu mèimei.', 'Tôi không có em gái.']),
      w('口', 'kǒu', '(lượng từ đếm người trong nhà)', '几口人？', ['你家有几口人？', 'Nǐ jiā yǒu jǐ kǒu rén?', 'Nhà bạn có mấy người?']),
      w('姐姐', 'jiějie', 'chị gái', '', ['我姐姐是老师。', 'Wǒ jiějie shì lǎoshī.', 'Chị tôi là giáo viên.']),
      w('妹妹', 'mèimei', 'em gái', '', ['她是我妹妹。', 'Tā shì wǒ mèimei.', 'Cô ấy là em gái tôi.']),
      w('爷爷', 'yéye', 'ông nội', '', ['我爷爷七十岁。', 'Wǒ yéye qīshí suì.', 'Ông nội tôi 70 tuổi.']),
      w('奶奶', 'nǎinai', 'bà nội', '', ['奶奶很好。', 'Nǎinai hěn hǎo.', 'Bà nội khỏe.']),
      w('孩子', 'háizi', 'con, đứa trẻ', '', ['你有孩子吗？', 'Nǐ yǒu háizi ma?', 'Bạn có con chưa?']),
      w('儿子', 'érzi', 'con trai', '', ['我有一个儿子。', 'Wǒ yǒu yí ge érzi.', 'Tôi có một con trai.']),
      w('女儿', 'nǚ’ér', 'con gái', '', ['她有两个女儿。', 'Tā yǒu liǎng ge nǚ’ér.', 'Chị ấy có hai con gái.']),
      w('和', 'hé', 'và (nối danh từ)', 'Chỉ nối danh từ, không nối câu.', ['爸爸和妈妈', 'bàba hé māma', 'bố và mẹ'])
    ],
    qs: [
      ['mc', '“Tôi không có em trai” đúng là?', '我没有弟弟。', ['我不有弟弟。', '我有没弟弟。', '我没弟弟有。'], 'Phủ định của 有 là 没有.'],
      ['mc', '“Nhà bạn có mấy người?” đúng là?', '你家有几口人？', ['你家有几个口？', '你家是几人？', '你有几家人？'], 'Dùng lượng từ 口 khi đếm thành viên gia đình.'],
      ['mc', '姐姐 là ai?', 'Chị gái', ['Em gái', 'Bà nội', 'Con gái'], '姐姐 jiějie: chị gái.'],
      ['mc', '“Tôi có hai con gái” đúng là?', '我有两个女儿。', ['我有二个女儿。', '我有两口女儿。', '我两个有女儿。'], '两 + 个 + danh từ.'],
      ['mc', 'Dùng 和 đúng ở câu nào?', '我和妹妹都是学生。', ['我是学生和我妹妹是学生。', '我很好和你呢？', '他喝茶和吃饭。'], '和 chỉ nối hai danh từ (我 和 妹妹).'],
      ['hear', '我家有五口人。', 'Nhà tôi có năm người.', ['Nhà tôi có bốn người.', 'Tôi có năm người con.', 'Nhà tôi có năm phòng.'], '五口人 = năm người.'],
      ['hear', '奶奶', 'bà nội', ['ông nội', 'mẹ', 'em gái'], '奶奶 nǎinai = bà nội.'],
      ['order', 'Sắp xếp: “Tôi có một anh trai.”', ['我', '有', '一个', '哥哥。'], '我有一个哥哥。'],
      ['mc', '女儿 viết Pinyin đúng là?', 'nǚ’ér', ['nǔér', 'nüer', 'nǚèr'], 'nǚ giữ hai chấm sau n; có dấu cách âm ’ trước ér.']
    ],
    hoithoai: {
      ctx: 'Giờ nghỉ trưa, đồng nghiệp người Trung Quốc tên Trương Lệ (张丽) hỏi chuyện gia đình em.', vai: 'Trương Lệ hỏi, em trả lời.', ai: '👩 张丽',
      luot: [
        T(['你家有几口人？', 'Nǐ jiā yǒu jǐ kǒu rén?', 'Nhà bạn có mấy người?'], ['我家有四口人：爸爸、妈妈、妹妹和我。', 'Wǒ jiā yǒu sì kǒu rén: bàba, māma, mèimei hé wǒ.', 'Nhà tôi có 4 người: bố, mẹ, em gái và tôi.', 'Liệt kê và dùng 和 trước người cuối.'], ['我家有四个口。', 'Wǒ jiā yǒu sì ge kǒu.', '口 đã là lượng từ, không thêm 个.'], ['我家不有四口人。', 'Wǒ jiā bù yǒu sì kǒu rén.', 'Không có 不有.']),
        T(['你有哥哥吗？', 'Nǐ yǒu gēge ma?', 'Bạn có anh trai không?'], ['没有，我有一个妹妹。', 'Méiyǒu, wǒ yǒu yí ge mèimei.', 'Không, tôi có một em gái.', 'Phủ định 有 bằng 没有.'], ['不有。', 'Bù yǒu.', 'Không nói 不有.'], ['我是哥哥。', 'Wǒ shì gēge.', 'Không trả lời đúng câu hỏi.']),
        T(['你妹妹多大？', 'Nǐ mèimei duō dà?', 'Em gái bạn bao nhiêu tuổi?'], ['她十九岁，是学生。', 'Tā shíjiǔ suì, shì xuésheng.', 'Em ấy 19 tuổi, là sinh viên.', 'Rất tự nhiên!'], ['她十九个。', 'Tā shíjiǔ ge.', 'Tuổi dùng 岁.'], ['他十九岁。', 'Tā shíjiǔ suì.', 'Em gái là nữ, viết 她. (Đọc giống nhau nhưng chữ khác.)']),
        T(['你有孩子吗？', 'Nǐ yǒu háizi ma?', 'Bạn có con chưa?'], ['有，我有一个儿子。你呢？', 'Yǒu, wǒ yǒu yí ge érzi. Nǐ ne?', 'Có, tôi có một con trai. Còn bạn?', 'Trả lời rồi hỏi lại bằng 呢.'], ['我是孩子。', 'Wǒ shì háizi.', '"Tôi là đứa trẻ" 😄'], ['没有儿子吗？', 'Méiyǒu érzi ma?', 'Đây là câu hỏi, không phải trả lời.'])
      ], ket: 'Em đã giới thiệu gia đình với 有/没有, 口, 和.'
    },
    tom: ['Từ vựng gia đình', '有/没有', 'Lượng từ 口 và 个', '和 nối danh từ'],
    nguphap: '有 / 没有; 几口人; 两个 + danh từ; A 和 B', phatam: 'jiějie / xièxie; nǚ’ér; yéye',
    loi: ['Nói 不有', 'Nói 几个口人', 'Dùng 和 để nối hai câu'],
    btvn: ['Vẽ cây gia đình, ghi chữ Hán + Pinyin', 'Nói đoạn 5 câu giới thiệu gia đình', 'Hỏi một người bạn: 你家有几口人？']
  };

  /* ================= NGÀY 12 ================= */
  const d12 = {
    n: 12, ten: 'Đồ ăn, thức uống và gọi món', kinds: K,
    muc: 'Nói mình muốn ăn/uống gì, dùng lượng từ 杯/碗, hỏi lựa chọn với 还是, gọi món ở quán.',
    hoc: `<h4>1. 想 xiǎng và 要 yào: muốn</h4><ul><li><b>想</b> + động từ: muốn (nhẹ nhàng, đang nghĩ). ${ex('我想喝咖啡。', 'Wǒ xiǎng hē kāfēi.', 'Tôi muốn uống cà phê.')}</li><li><b>要</b> + danh từ / động từ: muốn, cần (dứt khoát, dùng khi gọi món). ${ex('我要一杯茶。', 'Wǒ yào yì bēi chá.', 'Tôi lấy một ly trà.')}</li></ul>
      <h4>2. Lượng từ khi gọi món</h4>${F(['Số', '+', 'Lượng từ', '+', 'Món'])}${tbl(['Lượng từ', 'Dùng cho', 'Ví dụ'], [`<tr><td>杯 bēi</td><td>ly, cốc</td><td>一杯咖啡 yì bēi kāfēi ${sp('一杯咖啡')}</td></tr>`, `<tr><td>碗 wǎn</td><td>bát, tô</td><td>两碗米饭 liǎng wǎn mǐfàn ${sp('两碗米饭')}</td></tr>`, `<tr><td>瓶 píng</td><td>chai</td><td>一瓶水 yì píng shuǐ ${sp('一瓶水')}</td></tr>`, `<tr><td>个 gè</td><td>chung</td><td>一个菜 yí ge cài</td></tr>`])}
      <h4>3. Hỏi lựa chọn: A 还是 B?</h4><ul>${ex('你喝茶还是咖啡？', 'Nǐ hē chá háishi kāfēi?', 'Bạn uống trà hay cà phê?')}</ul>${tip('⚠️ Câu có 还是 <b>không thêm 吗</b>.')}
      <h4>4. Ở quán ăn</h4><ul>${ex('服务员，点菜！', 'Fúwùyuán, diǎn cài!', 'Em ơi, gọi món!')}${ex('有菜单吗？', 'Yǒu càidān ma?', 'Có thực đơn không?')}${ex('这个菜很好吃！', 'Zhège cài hěn hǎochī!', 'Món này rất ngon!')}${ex('味道怎么样？', 'Wèidao zěnmeyàng?', 'Mùi vị thế nào?')}</ul>`,
    vocab: [
      w('想', 'xiǎng', 'muốn; nghĩ, nhớ', '想 + động từ.', ['我想吃面条。', 'Wǒ xiǎng chī miàntiáo.', 'Tôi muốn ăn mì.']),
      w('要', 'yào', 'muốn, cần, lấy', 'Dùng khi gọi món, mua hàng.', ['我要一杯咖啡。', 'Wǒ yào yì bēi kāfēi.', 'Tôi lấy một ly cà phê.']),
      w('米饭', 'mǐfàn', 'cơm', '', ['两碗米饭', 'liǎng wǎn mǐfàn', 'hai bát cơm']),
      w('面条', 'miàntiáo', 'mì sợi', '', ['我想吃面条。', 'Wǒ xiǎng chī miàntiáo.', 'Tôi muốn ăn mì.']),
      w('菜', 'cài', 'món ăn; rau', '', ['这个菜很好吃。', 'Zhège cài hěn hǎochī.', 'Món này rất ngon.']),
      w('咖啡', 'kāfēi', 'cà phê', '', ['你喝咖啡吗？', 'Nǐ hē kāfēi ma?', 'Bạn uống cà phê không?']),
      w('杯', 'bēi', 'ly, cốc (lượng từ)', '', ['两杯茶', 'liǎng bēi chá', 'hai ly trà']),
      w('碗', 'wǎn', 'bát, tô (lượng từ)', '', ['一碗面条', 'yì wǎn miàntiáo', 'một tô mì']),
      w('服务员', 'fúwùyuán', 'nhân viên phục vụ', 'Gọi phục vụ trong quán.', ['服务员，点菜！', 'Fúwùyuán, diǎn cài!', 'Em ơi, gọi món!']),
      w('菜单', 'càidān', 'thực đơn', '', ['有菜单吗？', 'Yǒu càidān ma?', 'Có thực đơn không?']),
      w('好吃', 'hǎochī', 'ngon (đồ ăn)', 'Đồ uống ngon: 好喝 hǎohē.', ['很好吃！', 'Hěn hǎochī!', 'Rất ngon!']),
      w('还是', 'háishi', 'hay là (hỏi lựa chọn)', 'Không thêm 吗.', ['你要米饭还是面条？', 'Nǐ yào mǐfàn háishi miàntiáo?', 'Bạn lấy cơm hay mì?'])
    ],
    qs: [
      ['mc', '“Một ly cà phê” là?', '一杯咖啡', ['一碗咖啡', '一个杯咖啡', '咖啡一杯个'], 'Lượng từ cho ly là 杯.'],
      ['mc', '“Hai bát cơm” là?', '两碗米饭', ['二碗米饭', '两杯米饭', '两米饭碗'], '两 + 碗 + 米饭.'],
      ['mc', 'Câu nào <b>sai</b>?', '你喝茶还是咖啡吗？', ['你喝茶还是咖啡？', '你喝茶吗？', '你想喝什么？'], 'Có 还是 thì không thêm 吗.'],
      ['mc', 'Món ăn ngon nói là 好吃, đồ uống ngon nói là?', '好喝', ['好吃', '好饮', '很喝'], '好 + động từ: 好吃 / 好喝.'],
      ['mc', 'Gọi nhân viên để gọi món, em nói?', '服务员，点菜！', ['老师，点菜！', '服务员，再见！', '大家，点菜！'], '服务员 = nhân viên phục vụ.'],
      ['hear', '你要米饭还是面条？', 'Bạn lấy cơm hay mì?', ['Bạn muốn uống gì?', 'Bạn có ăn cơm không?', 'Mì có ngon không?'], '还是 = hay là.'],
      ['hear', '这个菜很好吃！', 'Món này rất ngon!', ['Món này rất đắt!', 'Cho tôi thực đơn!', 'Tôi muốn món này!'], '好吃 = ngon.'],
      ['order', 'Sắp xếp: “Tôi muốn uống cà phê.”', ['我', '想', '喝', '咖啡。'], '我想喝咖啡。'],
      ['mc', '想 trong 我想吃面条 nghĩa là?', 'muốn', ['nghĩ ngợi', 'nhớ nhung', 'cần phải'], '想 + động từ = muốn làm gì.']
    ],
    hoithoai: {
      ctx: 'Em và một người bạn vào quán mì ở Quảng Châu.', vai: 'Nhân viên phục vụ hỏi, em gọi món cho 2 người.', ai: '🧑‍🍳 服务员',
      luot: [
        T(['欢迎！几位？', 'Huānyíng! Jǐ wèi?', 'Xin chào! Mấy người ạ?'], ['两位。', 'Liǎng wèi.', 'Hai người.', '位 là lượng từ lịch sự cho người, dùng trong quán.'], ['二位。', 'Èr wèi.', 'Đếm số lượng dùng 两.'], ['我两。', 'Wǒ liǎng.', 'Câu không đúng ngữ pháp.']),
        T(['这是菜单。你们想吃什么？', 'Zhè shì càidān. Nǐmen xiǎng chī shénme?', 'Đây là thực đơn. Các anh muốn ăn gì?'], ['我要一碗面条，她要米饭。', 'Wǒ yào yì wǎn miàntiáo, tā yào mǐfàn.', 'Tôi lấy một tô mì, cô ấy lấy cơm.', 'Gọi món rõ ràng với 要 + lượng từ.'], ['我要一杯面条。', 'Wǒ yào yì bēi miàntiáo.', 'Mì dùng 碗, không dùng 杯.'], ['我想吃什么。', 'Wǒ xiǎng chī shénme.', 'Phải thay 什么 bằng tên món.']),
        T(['喝什么？茶还是咖啡？', 'Hē shénme? Chá háishi kāfēi?', 'Uống gì ạ? Trà hay cà phê?'], ['两杯茶，谢谢。', 'Liǎng bēi chá, xièxie.', 'Hai ly trà, cảm ơn.', 'Trả lời bằng một lựa chọn.'], ['二杯茶。', 'Èr bēi chá.', 'Dùng 两 trước lượng từ.'], ['茶还是咖啡吗？', 'Chá háishi kāfēi ma?', 'Đây là hỏi lại, không phải gọi món.']),
        T(['菜怎么样？', 'Cài zěnmeyàng?', 'Món ăn thế nào ạ?'], ['很好吃！谢谢！', 'Hěn hǎochī! Xièxie!', 'Rất ngon! Cảm ơn!', '怎么样 = thế nào. Khen món ăn bằng 好吃.'], ['很好喝！', 'Hěn hǎohē!', '好喝 dùng cho đồ uống; hỏi về món ăn thì dùng 好吃.'], ['不客气！', 'Bú kèqi!', 'Lạc đề.'])
      ], ket: 'Em đã gọi món, gọi đồ uống và khen món ăn.'
    },
    tom: ['想 và 要', 'Lượng từ 杯, 碗, 瓶, 个', 'Hỏi lựa chọn 还是', 'Câu dùng ở quán ăn'],
    nguphap: '想 / 要 + động từ/danh từ; Số + lượng từ + danh từ; A 还是 B', phatam: 'kāfēi; fúwùyuán; háishi',
    loi: ['Dùng sai lượng từ (一杯面条)', 'Thêm 吗 vào câu có 还是', 'Dùng 二 thay 两 trước lượng từ'],
    btvn: ['Nói tên 5 món ăn/đồ uống em thích bằng tiếng Trung', 'Luyện gọi món cho 3 người', 'Hỏi bạn: 你喝茶还是咖啡？']
  };

  /* ================= NGÀY 13 ================= */
  const d13 = {
    n: 13, ten: 'Mua sắm, giá cả và thanh toán', kinds: K,
    muc: 'Hỏi giá, nói giá tiền, mặc cả, chọn món hàng và thanh toán bằng tiền mặt, thẻ, ví điện tử.',
    hoc: `<h4>1. Hỏi giá</h4><ul>${ex('这个多少钱？', 'Zhège duōshao qián?', 'Cái này bao nhiêu tiền?')}${ex('那个多少钱？', 'Nàge duōshao qián?', 'Cái kia bao nhiêu tiền?')}</ul>
      <h4>2. Đơn vị tiền Nhân dân tệ</h4>${tbl(['Văn viết', 'Văn nói', 'Giá trị'], ['<tr><td>元 yuán</td><td><b>块 kuài</b></td><td>1 tệ</td></tr>', '<tr><td>角 jiǎo</td><td>毛 máo</td><td>0,1 tệ</td></tr>'])}<ul>${ex('三十块', 'sānshí kuài', '30 tệ')}${ex('一百五十块', 'yìbǎi wǔshí kuài', '150 tệ')}</ul>
      <h4>3. Mặc cả</h4><ul>${ex('太贵了！', 'Tài guì le!', 'Đắt quá!')}${ex('便宜一点儿吧！', 'Piányi yìdiǎnr ba!', 'Bớt một chút đi!')}</ul>${F(['太', '+', 'tính từ', '+', '了'])}<p class="small">太…了 = "quá …". 吧 ba ở cuối câu là gợi ý, đề nghị nhẹ nhàng.</p>
      <h4>4. Thanh toán</h4><ul>${ex('可以刷卡吗？', 'Kěyǐ shuā kǎ ma?', 'Quẹt thẻ được không?')}${ex('我用微信。', 'Wǒ yòng Wēixìn.', 'Tôi trả bằng WeChat.')}${ex('我没有现金。', 'Wǒ méiyǒu xiànjīn.', 'Tôi không có tiền mặt.')}</ul>${tip('💡 Ở Trung Quốc người ta trả tiền chủ yếu bằng <b>微信 WeChat Pay</b> và <b>支付宝 Zhīfùbǎo (Alipay)</b>. Khách nước ngoài có thể liên kết thẻ quốc tế với hai ví này.')}`,
    vocab: [
      w('多少', 'duōshao', 'bao nhiêu', 'Hỏi số lượng lớn, giá tiền.', ['多少钱？', 'Duōshao qián?', 'Bao nhiêu tiền?']),
      w('钱', 'qián', 'tiền', '', ['这个多少钱？', 'Zhège duōshao qián?', 'Cái này bao nhiêu tiền?']),
      w('块', 'kuài', 'đồng, tệ (văn nói)', '', ['三十块。', 'Sānshí kuài.', '30 tệ.']),
      w('元', 'yuán', 'đồng, tệ (văn viết)', 'Thấy trên bảng giá.', ['一百元', 'yìbǎi yuán', '100 tệ']),
      w('贵', 'guì', 'đắt', '', ['太贵了！', 'Tài guì le!', 'Đắt quá!']),
      w('便宜', 'piányi', 'rẻ', '宜 đọc nhẹ.', ['便宜一点儿吧！', 'Piányi yìdiǎnr ba!', 'Bớt một chút đi!']),
      w('一点儿', 'yìdiǎnr', 'một chút', 'Tính từ + 一点儿.', ['小一点儿', 'xiǎo yìdiǎnr', 'nhỏ hơn một chút']),
      w('这个', 'zhège', 'cái này', '', ['我要这个。', 'Wǒ yào zhège.', 'Tôi lấy cái này.']),
      w('那个', 'nàge', 'cái kia', '', ['那个多少钱？', 'Nàge duōshao qián?', 'Cái kia bao nhiêu tiền?']),
      w('现金', 'xiànjīn', 'tiền mặt', '', ['我没有现金。', 'Wǒ méiyǒu xiànjīn.', 'Tôi không có tiền mặt.']),
      w('微信', 'Wēixìn', 'WeChat', 'Ứng dụng nhắn tin và ví điện tử.', ['可以用微信吗？', 'Kěyǐ yòng Wēixìn ma?', 'Trả bằng WeChat được không?']),
      w('刷卡', 'shuā kǎ', 'quẹt thẻ', '', ['可以刷卡吗？', 'Kěyǐ shuā kǎ ma?', 'Quẹt thẻ được không?'])
    ],
    qs: [
      ['mc', 'Hỏi “Cái này bao nhiêu tiền?” là?', '这个多少钱？', ['这个几钱？', '多少这个钱？', '这个钱多少吗？'], 'Mẫu cố định: …多少钱？'],
      ['mc', '“Đắt quá!” là?', '太贵了！', ['太便宜了！', '很贵吗？', '贵太了！'], '太 + tính từ + 了.'],
      ['mc', 'Trong văn nói, người Trung Quốc gọi “tệ” là?', '块 kuài', ['元 yuán', '毛 máo', '钱 qián'], '元 thường dùng trong văn viết.'],
      ['mc', '150 tệ đọc là?', '一百五十块', ['一五零块', '百五十块', '一百五块十'], '一百 + 五十.'],
      ['mc', '“Bớt một chút đi!” là?', '便宜一点儿吧！', ['贵一点儿吧！', '一点儿便宜吗！', '便宜吧一点儿！'], 'Tính từ + 一点儿 + 吧.'],
      ['hear', '可以刷卡吗？', 'Quẹt thẻ được không?', ['Có tiền mặt không?', 'Cái này bao nhiêu?', 'Có rẻ hơn không?'], '刷卡 = quẹt thẻ.'],
      ['hear', '八十块。', '80 tệ', ['18 tệ', '8 tệ', '800 tệ'], '八十 bāshí = 80.'],
      ['order', 'Sắp xếp: “Cái kia bao nhiêu tiền?”', ['那个', '多少', '钱？'], '那个多少钱？'],
      ['mc', '便宜 nghĩa là?', 'rẻ', ['đắt', 'tiện lợi', 'miễn phí'], '便宜 piányi = rẻ.']
    ],
    hoithoai: {
      ctx: 'Em đi chợ đêm ở Thượng Hải, muốn mua một chiếc túi.', vai: 'Chủ sạp chào hàng, em hỏi giá và mặc cả.', ai: '👨 老板 (chủ sạp)',
      luot: [
        T(['你好！要什么？', 'Nǐ hǎo! Yào shénme?', 'Chào bạn! Muốn mua gì?'], ['这个多少钱？', 'Zhège duōshao qián?', 'Cái này bao nhiêu tiền?', 'Chỉ vào hàng và hỏi giá.'], ['这个几岁？', 'Zhège jǐ suì?', '"Cái này mấy tuổi?" 😄'], ['我要多少？', 'Wǒ yào duōshao?', 'Không rõ nghĩa.']),
        T(['一百五十块。', 'Yìbǎi wǔshí kuài.', '150 tệ.'], ['太贵了！便宜一点儿吧。', 'Tài guì le! Piányi yìdiǎnr ba.', 'Đắt quá! Bớt chút đi.', 'Mặc cả rất tự nhiên.'], ['太便宜了！', 'Tài piányi le!', 'Nói "rẻ quá" thì khó mặc cả rồi 😄'], ['贵一点儿吧。', 'Guì yìdiǎnr ba.', '"Đắt hơn chút đi"?!']),
        T(['一百二十块，怎么样？', 'Yìbǎi èrshí kuài, zěnmeyàng?', '120 tệ, được không?'], ['一百块，可以吗？', 'Yìbǎi kuài, kěyǐ ma?', '100 tệ được không?', 'Trả giá thêm một chút.'], ['一百二十块多少钱？', 'Yìbǎi èrshí kuài duōshao qián?', 'Câu hỏi thừa.'], ['再见！', 'Zàijiàn!', 'Bỏ đi luôn cũng là một chiêu, nhưng hãy thử trả giá trước!']),
        T(['好吧，一百块。现金还是微信？', 'Hǎo ba, yìbǎi kuài. Xiànjīn háishi Wēixìn?', 'Thôi được, 100 tệ. Tiền mặt hay WeChat?'], ['我用微信，谢谢！', 'Wǒ yòng Wēixìn, xièxie!', 'Tôi trả bằng WeChat, cảm ơn!', '用 + phương thức thanh toán.'], ['现金还是微信吗？', 'Xiànjīn háishi Wēixìn ma?', 'Đây là hỏi lại.'], ['我没有钱。', 'Wǒ méiyǒu qián.', 'Vừa mặc cả xong lại nói không có tiền 😅'])
      ], ket: 'Em đã hỏi giá, mặc cả từ 150 xuống 100 tệ và thanh toán.'
    },
    tom: ['Hỏi giá 多少钱', 'Đơn vị 块/元/毛', 'Số hàng trăm', 'Mặc cả 太…了, 便宜一点儿吧', 'Thanh toán'],
    nguphap: '多少钱; 太 + tính từ + 了; tính từ + 一点儿; …吧 (đề nghị); 用 + phương thức', phatam: 'piányi; duōshao; shuā kǎ',
    loi: ['Dùng 几 để hỏi giá', 'Nói 贵太了', 'Nhầm 便宜 thành "tiện lợi"'],
    btvn: ['Nhìn 5 món đồ trong nhà, tập hỏi và trả lời giá bằng tiếng Trung', 'Đọc các số 100, 120, 150, 199, 500', 'Luyện câu mặc cả 3 lần']
  };

  /* ================= NGÀY 14 ================= */
  const d14 = {
    n: 14, ten: 'Ôn tập và hội thoại tổng hợp', tong: 1,
    muc: 'Hệ thống ngữ pháp và từ vựng tuần 2; luyện hội thoại tổng hợp; kiểm tra 20 câu.',
    hoc: `<h4>1. Ngữ pháp tuần 2</h4>${tbl(['Mẫu câu', 'Ví dụ'], [
        '<tr><td>您贵姓？ – 我姓…</td><td>您贵姓？我姓阮。</td></tr>', '<tr><td>哪 + 国人</td><td>你是哪国人？</td></tr>', '<tr><td>也 / 都 + động từ</td><td>我也是学生。我们都是越南人。</td></tr>',
        '<tr><td>A 的 B</td><td>我的老师 · 老师的书</td></tr>', '<tr><td>这 / 那 + 是; 谁</td><td>那是谁？</td></tr>', '<tr><td>有 / 没有; 几口人</td><td>我家有四口人。我没有哥哥。</td></tr>',
        '<tr><td>Năm-tháng-ngày-thứ; giờ</td><td>十一月二十四号，星期二，八点半</td></tr>', '<tr><td>Số + lượng từ + danh từ</td><td>两杯茶 · 一碗面条 · 两个人</td></tr>', '<tr><td>A 还是 B</td><td>茶还是咖啡？</td></tr>', '<tr><td>多少钱; 太…了</td><td>这个多少钱？太贵了！</td></tr>'])}
      <h4>2. Câu giao tiếp tuần 2 (bấm nghe, đọc theo)</h4><div class="zh-read">${[['您贵姓？', 'Nín guìxìng?', 'Ông/bà họ gì ạ?'], ['很高兴认识你！', 'Hěn gāoxìng rènshi nǐ!', 'Rất vui được quen bạn!'], ['你是哪国人？', 'Nǐ shì nǎ guó rén?', 'Bạn là người nước nào?'], ['你家有几口人？', 'Nǐ jiā yǒu jǐ kǒu rén?', 'Nhà bạn có mấy người?'], ['现在几点？', 'Xiànzài jǐ diǎn?', 'Bây giờ mấy giờ?'], ['今天星期几？', 'Jīntiān xīngqī jǐ?', 'Hôm nay thứ mấy?'], ['我要一杯咖啡。', 'Wǒ yào yì bēi kāfēi.', 'Tôi lấy một ly cà phê.'], ['这个多少钱？', 'Zhège duōshao qián?', 'Cái này bao nhiêu tiền?'], ['太贵了！', 'Tài guì le!', 'Đắt quá!'], ['可以刷卡吗？', 'Kěyǐ shuā kǎ ma?', 'Quẹt thẻ được không?']].map(([h, p, v]) => `<button class="zh-rd" data-say="${h}"><b>${h}</b><span>${p}</span><small>${v}</small></button>`).join('')}</div>
      ${tip('📝 Bài kiểm tra 20 câu lấy từ cả 14 ngày. Nhớ vào <a href="#/tieng-trung/tu-vung/weak">Thẻ từ vựng → Từ chưa nhớ</a> để ôn trước.')}`,
    vocab: [], kinds: ['meaning', 'listen', 'pinyin', 'hanzi', 'listenPy', 'match'], kt: { n: 20, min: 20 },
    qs: [
      ['mc', '“Chúng tôi cũng đều là người Việt Nam” đúng là?', '我们也都是越南人。', ['我们都也是越南人。', '我们是也都越南人。', '也我们都是越南人。'], 'Thứ tự: 也 trước 都, cả hai trước động từ.'],
      ['mc', '“Hai giờ chiều thứ Bảy” đúng thứ tự là?', '星期六下午两点', ['两点下午星期六', '下午两点星期六', '星期六两点下午'], 'Từ lớn đến nhỏ: thứ → buổi → giờ.']
    ],
    hoithoai: {
      ctx: 'Em đi công tác ở Thâm Quyến, gặp chị Trần (陈女士) – đối tác mới – tại một quán cà phê.', vai: 'Hội thoại tổng hợp tuần 2: làm quen, gia đình, gọi đồ uống, trả tiền.', ai: '👩‍💼 陈女士',
      luot: [
        T(['你好！请问，您贵姓？', 'Nǐ hǎo! Qǐngwèn, nín guìxìng?', 'Chào anh! Xin hỏi anh họ gì?'], ['我姓阮，叫阮明。您呢？', 'Wǒ xìng Ruǎn, jiào Ruǎn Míng. Nín ne?', 'Tôi họ Nguyễn, tên Nguyễn Minh. Còn chị?', 'Trả lời và hỏi lại lịch sự.'], ['我贵姓阮。', 'Wǒ guìxìng Ruǎn.', 'Không dùng 贵 cho mình.'], ['我是哪国人？', 'Wǒ shì nǎ guó rén?', 'Lạc đề.']),
        T(['我姓陈。很高兴认识你！你喝什么？', 'Wǒ xìng Chén. Hěn gāoxìng rènshi nǐ! Nǐ hē shénme?', 'Tôi họ Trần. Rất vui được quen anh! Anh uống gì?'], ['认识您我也很高兴！我要一杯咖啡。', 'Rènshi nín wǒ yě hěn gāoxìng! Wǒ yào yì bēi kāfēi.', 'Tôi cũng rất vui được quen chị! Tôi lấy một ly cà phê.', 'Hai ý trong một lượt, rất tự nhiên.'], ['我要一碗咖啡。', 'Wǒ yào yì wǎn kāfēi.', 'Cà phê dùng 杯.'], ['我喝什么。', 'Wǒ hē shénme.', 'Phải nói tên đồ uống.']),
        T(['你家有几口人？', 'Nǐ jiā yǒu jǐ kǒu rén?', 'Nhà anh có mấy người?'], ['我家有四口人：我妻子、两个孩子和我。', 'Wǒ jiā yǒu sì kǒu rén: wǒ qīzi, liǎng ge háizi hé wǒ.', 'Nhà tôi 4 người: vợ, hai con và tôi.', '妻子 = vợ.'], ['我家不有四口人。', 'Wǒ jiā bù yǒu sì kǒu rén.', 'Không có 不有.'], ['我家有四个口人。', 'Wǒ jiā yǒu sì ge kǒu rén.', 'Không dùng 个 cùng 口.']),
        T(['我们明天下午见面，可以吗？', 'Wǒmen míngtiān xiàwǔ jiànmiàn, kěyǐ ma?', 'Chiều mai chúng ta gặp nhau được không?'], ['可以。几点？', 'Kěyǐ. Jǐ diǎn?', 'Được. Mấy giờ?', 'Đồng ý và hỏi giờ.'], ['明天几岁？', 'Míngtiān jǐ suì?', 'Sai từ hỏi.'], ['不是。', 'Bú shì.', 'Câu xin phép trả lời bằng 可以 / 不可以.']),
        T(['三点半。服务员，买单！……一共六十块。', 'Sān diǎn bàn. Fúwùyuán, mǎidān! …… Yígòng liùshí kuài.', '3 giờ rưỡi. Em ơi, tính tiền! …… Tổng cộng 60 tệ.'], ['我来！可以刷卡吗？', 'Wǒ lái! Kěyǐ shuā kǎ ma?', 'Để tôi trả! Quẹt thẻ được không?', '我来 = để tôi (làm). Mời đối tác rất lịch sự.'], ['太便宜了！', 'Tài piányi le!', 'Không hợp lúc này.'], ['六十岁。', 'Liùshí suì.', '60 tuổi?! 😄'])
      ], ket: 'Em đã làm quen đối tác, gọi đồ uống, nói về gia đình, hẹn lịch và mời trả tiền.'
    },
    tom: ['Ôn toàn bộ ngữ pháp tuần 2', 'Hội thoại tổng hợp', 'Kiểm tra 20 câu'], nguphap: 'Ôn: 您贵姓, 哪, 也/都, 的, 有/没有, ngày giờ, lượng từ, 还是, 多少钱', phatam: 'Ôn số đếm và câu hỏi lên giọng tự nhiên',
    loi: ['Xem lại câu sai trong bài kiểm tra', 'Ôn lượng từ và trật tự ngày giờ nếu còn nhầm'], btvn: ['Dưới 7 điểm thì ôn thẻ "Từ chưa nhớ" rồi làm lại', 'Ghi âm hội thoại tự giới thiệu + gọi món 1 phút', 'Sẵn sàng cho Giai đoạn 3: giao tiếp đời sống']
  };

  window.PLT_ZH.days.push(d8, d9, d10, d11, d12, d13, d14);
})();

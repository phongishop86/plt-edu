/* PLT-Edu · Dữ liệu module "Tiếng Trung từ số 0" (giản thể, giọng phổ thông)
   Mỗi ngày: ten, muc, hoc (HTML phần B), vocab [{h chữ Hán, p Pinyin, v nghĩa, use cách dùng, ex [Hán, Pinyin, nghĩa]}],
   qs (câu hỏi viết tay – cú pháp ở assets/js/zh.js › fromSpec), hoithoai (hội thoại từng lượt), tom/nguphap/phatam/loi/btvn (báo cáo).
   Thêm ngày mới: thêm một phần tử vào days là xong (lộ trình tự hiện). */
(function () {
  'use strict';
  const sp = PLT.ZH.sp, T = PLT.ZH.toneSVG;
  const w = (h, p, v, use, ex) => ({ h, p, v, use, ex });
  const row = (c, p, v) => `<tr><td><b class="zh-hz">${c}</b></td><td>${p}</td><td>${v}</td><td>${sp(c)}</td></tr>`;
  const tbl = (head, rows) => `<div class="zh-scroll"><table class="dtable full zh-tb"><tr>${head.map((x) => `<th>${x}</th>`).join('')}</tr>${rows.join('')}</table></div>`;
  const tip = (x) => `<div class="zh-tip">${x}</div>`;
  const L = (h, p, v) => ({ h, p, v });

  const plan = [
    'Làm quen tiếng Trung, cấu trúc Pinyin và 4 thanh điệu', 'Thanh mẫu – nhóm âm dễ', 'Thanh mẫu – nhóm âm khó, bật hơi và không bật hơi', 'Vận mẫu và cách ghép âm', 'Thanh điệu, biến điệu và lỗi người Việt hay mắc', 'Luyện đọc Pinyin, nhận diện âm và từ đơn giản', 'Ôn tập tuần 1 và kiểm tra tổng hợp',
    'Chào hỏi, giới thiệu bản thân', 'Đại từ nhân xưng và câu giới thiệu', 'Số đếm, tuổi, ngày tháng và thời gian', 'Gia đình và các mối quan hệ', 'Đồ ăn, thức uống và gọi món', 'Mua sắm, giá cả và thanh toán', 'Ôn tập và hội thoại tổng hợp',
    'Hỏi đường và phương hướng', 'Đi taxi và phương tiện giao thông', 'Công việc, nghề nghiệp và nơi làm việc', 'Sở thích và hoạt động hằng ngày', 'Hỏi đáp về thời gian, địa điểm và lịch trình', 'Ngữ pháp giao tiếp thông dụng', 'Kiểm tra tổng hợp và mô phỏng giao tiếp',
    'Hội thoại làm quen người mới', 'Giao tiếp tại nhà hàng', 'Giao tiếp khi mua sắm', 'Giao tiếp tại khách sạn và khi đi du lịch', 'Giao tiếp qua điện thoại và tin nhắn', 'Giao tiếp trong môi trường công việc', 'Nghe hiểu và phản xạ trả lời', 'Mô phỏng các tình huống giao tiếp liên tục', 'Kiểm tra cuối khóa, đánh giá năng lực và đề xuất lộ trình tiếp theo'
  ].map((ten, i) => ({ n: i + 1, ten }));

  const stages = [
    { ten: '🌱 Giai đoạn 1 – Làm quen với tiếng Trung', tu: 1, den: 7 },
    { ten: '🧱 Giai đoạn 2 – Xây dựng vốn từ và câu cơ bản', tu: 8, den: 14 },
    { ten: '🏙️ Giai đoạn 3 – Giao tiếp đời sống', tu: 15, den: 21 },
    { ten: '⚡ Giai đoạn 4 – Phản xạ và ứng dụng', tu: 22, den: 30 }
  ];

  /* ---------- Bảng Pinyin (âm gần giống tiếng Việt chỉ để tham khảo) ---------- */
  const a = (k, c, p, g) => ({ k, c, p, g });
  const pinyin = {
    initials: [
      { ten: '1. Âm môi: b · p · m · f', mo: 'Dùng hai môi; riêng f là răng trên chạm nhẹ môi dưới.', am: [a('b', '八', 'bā', 'b nhẹ, không bật hơi'), a('p', '怕', 'pà', 'như b nhưng bật mạnh hơi'), a('m', '妈', 'mā', 'm'), a('f', '发', 'fā', 'ph')] },
      { ten: '2. Âm đầu lưỡi: d · t · n · l', mo: 'Đầu lưỡi chạm lợi phía sau răng cửa trên.', am: [a('d', '大', 'dà', '≈ t (không bật hơi)'), a('t', '他', 'tā', '≈ th (bật hơi)'), a('n', '你', 'nǐ', 'n'), a('l', '老', 'lǎo', 'l')] },
      { ten: '3. Âm cuống lưỡi: g · k · h', mo: 'Cuống lưỡi nâng lên chạm (hoặc gần) vòm mềm phía trong.', am: [a('g', '哥', 'gē', '≈ c/k, không bật hơi'), a('k', '可', 'kě', '≈ c/k, bật mạnh hơi'), a('h', '喝', 'hē', '≈ kh')] },
      { ten: '4. Âm mặt lưỡi: j · q · x', mo: 'Mặt lưỡi áp lên vòm miệng cứng, môi dẹt như đang cười. Chỉ đi với i và ü.', am: [a('j', '鸡', 'jī', '≈ ch nhẹ, không bật hơi'), a('q', '七', 'qī', 'như j, bật mạnh hơi'), a('x', '西', 'xī', '≈ x, môi dẹt')] },
      { ten: '5. Âm uốn lưỡi: zh · ch · sh · r', mo: 'Cong đầu lưỡi lên chạm (hoặc gần chạm) phần cứng phía trên răng cửa.', am: [a('zh', '知', 'zhī', '≈ tr uốn lưỡi, không bật hơi'), a('ch', '吃', 'chī', 'như zh, bật mạnh hơi'), a('sh', '是', 'shì', '≈ s uốn lưỡi'), a('r', '日', 'rì', '≈ r nhẹ, không rung lưỡi')] },
      { ten: '6. Âm đầu lưỡi trước: z · c · s', mo: 'Đầu lưỡi để thẳng, chạm sau răng cửa trên, không uốn.', am: [a('z', '字', 'zì', '≈ "ts", không bật hơi'), a('c', '词', 'cí', '"ts" bật mạnh hơi'), a('s', '四', 'sì', '≈ x')] },
      { ten: '7. Bán âm: y · w', mo: 'Thực chất là i và u khi đứng đầu âm tiết.', am: [a('y', '鸭', 'yā', 'đọc như i'), a('w', '我', 'wǒ', 'đọc như u')] }
    ],
    finals: [
      { ten: '1. Vận mẫu đơn: a · o · e · i · u · ü', mo: '<b>ü</b>: môi tròn như đọc "u" nhưng lưỡi đặt như đọc "i".', am: [a('a', '啊', 'ā', 'a'), a('o', '波', 'bō', '≈ ô (môi tròn)'), a('e', '饿', 'è', '≈ giữa ư và ơ'), a('i', '衣', 'yī', 'i'), a('u', '屋', 'wū', 'u'), a('ü', '鱼', 'yú', '≈ uy môi tròn')] },
      { ten: '2. Vận mẫu kép: ai · ei · ao · ou', am: [a('ai', '爱', 'ài', 'ai'), a('ei', '黑', 'hēi', '≈ ây'), a('ao', '好', 'hǎo', 'ao'), a('ou', '狗', 'gǒu', '≈ âu')] },
      { ten: '3. Vận mẫu mũi: an · en · ang · eng · ong', mo: '-n kết thúc bằng đầu lưỡi chạm lợi; -ng kết thúc ở cuống lưỡi, miệng mở.', am: [a('an', '安', 'ān', 'an'), a('en', '门', 'mén', '≈ ân'), a('ang', '忙', 'máng', 'ang'), a('eng', '冷', 'lěng', '≈ âng'), a('ong', '红', 'hóng', '≈ ung')] },
      { ten: '4. Nhóm bắt đầu bằng i', am: [a('ia', '家', 'jiā', 'ia'), a('ie', '谢', 'xiè', '≈ iê'), a('iao', '小', 'xiǎo', 'iao'), a('iu', '六', 'liù', '≈ iêu (iou)'), a('ian', '天', 'tiān', '≈ iên'), a('in', '新', 'xīn', 'in'), a('iang', '想', 'xiǎng', 'iang'), a('ing', '听', 'tīng', '≈ inh'), a('iong', '熊', 'xióng', '≈ iung')] },
      { ten: '5. Nhóm bắt đầu bằng u', am: [a('ua', '花', 'huā', '≈ oa'), a('uo', '多', 'duō', '≈ uô'), a('uai', '快', 'kuài', '≈ oai'), a('ui', '对', 'duì', '≈ uây (uei)'), a('uan', '晚', 'wǎn', '≈ oan'), a('un', '春', 'chūn', '≈ uân (uen)'), a('uang', '黄', 'huáng', '≈ oang')] },
      { ten: '6. Nhóm bắt đầu bằng ü', mo: 'Sau j, q, x, y viết u nhưng vẫn đọc ü.', am: [a('üe', '学', 'xué', '≈ uê môi tròn'), a('üan', '远', 'yuǎn', '≈ uyên'), a('ün', '云', 'yún', '≈ uyn')] },
      { ten: '7. Trường hợp đặc biệt', mo: 'Sau zh, ch, sh, r, z, c, s, chữ <b>i</b> không đọc là "i": giữ nguyên lưỡi như phụ âm, nghe gần "ư".', am: [a('er', '二', 'èr', 'ơ + uốn lưỡi'), a('zhi', '知', 'zhī', 'i đọc ≈ ư'), a('zi', '字', 'zì', 'i đọc ≈ ư')] }
    ]
  };

  /* ================= NGÀY 1 ================= */
  const d1 = {
    n: 1, ten: 'Làm quen tiếng Trung, Pinyin và 4 thanh điệu',
    muc: 'Hiểu Pinyin là gì, một âm tiết gồm mấy phần, nghe và phân biệt 4 thanh + thanh nhẹ; nói được 6 câu chào hỏi đầu tiên.',
    hoc: `<h4>1. Pinyin là gì?</h4><p>Chữ Hán không cho biết cách đọc. <b>Pinyin</b> (拼音 pīnyīn) là cách ghi âm chữ Hán bằng chữ cái Latin, kèm dấu thanh. Người mới học dựa vào Pinyin để đọc đúng.</p>
      <h4>2. Một âm tiết gồm 3 phần</h4>
      <div class="zh-formula"><span>m<small>thanh mẫu<br>(phụ âm đầu)</small></span><i>+</i><span>a<small>vận mẫu<br>(phần vần)</small></span><i>+</i><span>ˇ<small>thanh điệu<br>(dấu)</small></span><i>=</i><span class="r">mǎ<small>马 – con ngựa</small></span></div>
      <p>Cùng là "ma" nhưng đổi thanh là đổi nghĩa. Vì vậy <b>thanh điệu quan trọng như chữ cái</b>, đọc sai thanh là nói sang từ khác.</p>
      <h4>3. Bốn thanh điệu và thanh nhẹ</h4>${T()}
      ${tbl(['Chữ', 'Pinyin', 'Cách đọc', 'Nghe'], [row('妈', 'mā – thanh 1', 'Cao và ngang, giữ đều giọng ở mức cao. Nghĩa: mẹ'), row('麻', 'má – thanh 2', 'Từ giữa đi lên cao, giống giọng hỏi lại "Hả?". Nghĩa: cây gai'), row('马', 'mǎ – thanh 3', 'Hạ thấp xuống rồi mới lên. Nghĩa: con ngựa'), row('骂', 'mà – thanh 4', 'Rơi mạnh từ cao xuống, dứt khoát như ra lệnh. Nghĩa: mắng'), row('吗', 'ma – thanh nhẹ', 'Không dấu, đọc ngắn và nhẹ. Đặt cuối câu để hỏi')])}
      <div class="row">${sp('妈|麻|马|骂', 'Nghe cả 4: mā má mǎ mà')} ${sp('八|拔|把|爸', 'bā bá bǎ bà')} ${sp('衣|姨|椅|意', 'yī yí yǐ yì')}</div>
      <h4>4. Dấu thanh đặt ở đâu?</h4><ul><li>Có <b>a</b> thì đặt trên a: hǎo, māo.</li><li>Không có a thì đặt trên <b>e</b> hoặc <b>o</b>: xiè, duō, gǒu.</li><li>Gặp <b>iu</b> hoặc <b>ui</b> thì đặt trên chữ đứng sau: liù, duì.</li></ul>
      <h4>5. Lỗi người Việt hay mắc</h4><ul><li><b>Thanh 1 không đủ cao</b>, nghe thành giọng ngang (không dấu) của tiếng Việt. Cần nâng giọng lên cao hơn mức nói chuyện bình thường.</li><li><b>Thanh 4 đọc nặng và tắc</b> như dấu nặng. Đúng ra phải bắt đầu ở mức cao rồi rơi xuống trọn vẹn.</li><li><b>Nhầm thanh 2 và thanh 3</b>: thanh 2 đi thẳng lên, thanh 3 phải xuống thấp trước.</li></ul>
      ${tip('🎙️ <b>Mẹo luyện:</b> khi đọc thì vẽ đường cao độ bằng tay trong không khí (ngang, lên, võng, xuống). Tự ghi âm giọng mình rồi so với giọng mẫu.')}`,
    vocab: [
      w('你好', 'nǐ hǎo', 'xin chào', 'Chào bất kỳ ai, bất kỳ lúc nào. Khi đọc thật: ní hǎo (Ngày 5 sẽ học vì sao).', ['老师，你好！', 'Lǎoshī, nǐ hǎo!', 'Chào thầy/cô!']),
      w('谢谢', 'xièxie', 'cảm ơn', 'Chữ thứ hai đọc nhẹ.', ['谢谢你！', 'Xièxie nǐ!', 'Cảm ơn bạn!']),
      w('不客气', 'bú kèqi', 'không có gì', 'Đáp lại khi người khác cảm ơn mình.', ['—谢谢！—不客气！', '—Xièxie! —Bú kèqi!', '—Cảm ơn! —Không có gì!']),
      w('再见', 'zàijiàn', 'tạm biệt', 'Chào khi chia tay.', ['老师再见！', 'Lǎoshī zàijiàn!', 'Tạm biệt thầy/cô!']),
      w('妈妈', 'māma', 'mẹ', 'Chữ thứ hai đọc nhẹ.', ['妈妈，你好！', 'Māma, nǐ hǎo!', 'Con chào mẹ!']),
      w('吗', 'ma', '(trợ từ hỏi) …không?', 'Đặt cuối câu để biến câu kể thành câu hỏi có/không.', ['你好吗？', 'Nǐ hǎo ma?', 'Bạn khỏe không?'])
    ],
    kinds: ['toneHear', 'toneSee', 'meaning', 'listen', 'toneHear', 'pinyin', 'hanzi'],
    qs: [
      ['fill', 'Ghép âm: m + a + thanh 3 = ?', 'mǎ|ma3', 'm + a + ˇ = mǎ (马 – con ngựa).'],
      ['fill', 'Ghép âm: h + ao + thanh 3 = ?', 'hǎo|hao3', 'Có a thì đặt dấu trên a: hǎo (好 – tốt).'],
      ['fill', 'Ghép âm: x + ie + thanh 4 = ?', 'xiè|xie4', 'Không có a thì đặt dấu trên e: xiè (谢).'],
      ['mc', 'Một âm tiết Pinyin gồm những phần nào?', 'Thanh mẫu + vận mẫu + thanh điệu', ['Chữ Hán + nghĩa + thanh điệu', 'Chỉ có chữ cái Latin', 'Nguyên âm + dấu câu'], 'Ví dụ m + a + ˇ = mǎ.'],
      ['mc', 'Thanh nào <b>cao và ngang</b>, giữ đều giọng?', 'Thanh 1 (ˉ)', ['Thanh 2 (ˊ)', 'Thanh 3 (ˇ)', 'Thanh 4 (ˋ)'], 'Thanh 1: mức 5 → 5.'],
      ['mc', 'Thanh nào <b>rơi mạnh từ cao xuống thấp</b>?', 'Thanh 4 (ˋ)', ['Thanh 1 (ˉ)', 'Thanh 2 (ˊ)', 'Thanh 3 (ˇ)'], 'Thanh 4: mức 5 → 1.'],
      ['mc', '“mā” (mẹ) và “mà” (mắng) khác nhau ở điểm nào?', 'Thanh điệu', ['Thanh mẫu', 'Vận mẫu', 'Không khác gì'], 'Chỉ khác dấu thanh nhưng nghĩa khác hẳn.'],
      ['mc', 'Chữ 吗 trong “你好吗？” đọc thanh gì?', 'Thanh nhẹ (không dấu)', ['Thanh 1', 'Thanh 3', 'Thanh 4'], '吗 ma là thanh nhẹ: ngắn, nhẹ.'],
      ['mc', 'Bạn nói “谢谢！” với em, em đáp lại thế nào?', '不客气！ bú kèqi', ['你好吗？ nǐ hǎo ma', '再见！ zàijiàn', '妈妈！ māma'], '不客气 = không có gì.'],
      ['hear', '你好吗？', 'Bạn khỏe không?', ['Xin chào!', 'Tạm biệt!', 'Cảm ơn bạn!'], '你好吗？Nǐ hǎo ma? – Bạn khỏe không?'],
      ['order', 'Sắp xếp thành câu “Bạn khỏe không?”', ['你', '好', '吗？'], '你好吗？Nǐ hǎo ma?']
    ],
    hoithoai: {
      ctx: 'Em gặp một người bạn Trung Quốc mới quen tên Lý Minh (李明 Lǐ Míng) ở quán cà phê.', vai: 'Lý Minh nói trước, em chọn câu đáp lại.', ai: '👨 李明',
      luot: [
        { a: L('你好！', 'Nǐ hǎo!', 'Xin chào!'), o: [L('你好！', 'Nǐ hǎo!', 'Xin chào!'), { h: '再见！', p: 'Zàijiàn!', f: '再见 là "tạm biệt", dùng khi chia tay chứ không phải khi gặp.' }, { h: '不客气！', p: 'Bú kèqi!', f: '不客气 dùng để đáp lại lời cảm ơn.' }].map((x, i) => (i === 0 ? Object.assign(x, { ok: 1, f: 'Người ta chào 你好 thì mình chào lại 你好.' }) : x)) },
        { a: L('你好吗？', 'Nǐ hǎo ma?', 'Bạn khỏe không?'), o: [{ h: '我很好，谢谢！', p: 'Wǒ hěn hǎo, xièxie!', v: 'Tôi khỏe, cảm ơn!', ok: 1, f: 'Câu mới: 我很好 wǒ hěn hǎo = tôi khỏe (我 tôi, 很 rất). Thêm 谢谢 cho lịch sự.' }, { h: '再见！', p: 'Zàijiàn!', f: 'Người ta đang hỏi thăm sức khỏe, chưa chia tay mà.' }, { h: '妈妈！', p: 'Māma!', f: '妈妈 là "mẹ", không trả lời được câu hỏi này.' }] },
        { a: L('给你。', 'Gěi nǐ.', 'Gửi bạn này. (đưa cho em một ly cà phê)'), o: [{ h: '谢谢！', p: 'Xièxie!', v: 'Cảm ơn!', ok: 1, f: 'Được tặng hoặc đưa đồ thì nói 谢谢.' }, { h: '不客气！', p: 'Bú kèqi!', f: '不客气 là lời của người được cảm ơn, không phải người nhận đồ.' }, { h: '你好吗？', p: 'Nǐ hǎo ma?', f: 'Câu này để hỏi thăm sức khỏe, không hợp lúc nhận đồ.' }] },
        { a: L('不客气！再见！', 'Bú kèqi! Zàijiàn!', 'Không có gì! Tạm biệt!'), o: [{ h: '再见！', p: 'Zàijiàn!', v: 'Tạm biệt!', ok: 1, f: 'Chia tay thì đáp lại 再见.' }, { h: '你好！', p: 'Nǐ hǎo!', f: '你好 dùng khi gặp, không dùng khi chia tay.' }, { h: '吗？', p: 'Ma?', f: '吗 chỉ là trợ từ đặt cuối câu hỏi, không đứng một mình.' }] }
      ], ket: 'Em đã chào hỏi, hỏi thăm, cảm ơn và tạm biệt bằng tiếng Trung!'
    },
    tom: ['Cấu trúc Pinyin = thanh mẫu + vận mẫu + thanh điệu', '4 thanh + thanh nhẹ', 'Quy tắc đặt dấu thanh', '6 câu chào hỏi cơ bản'],
    nguphap: 'Câu hỏi có/không với 吗 (你好吗？)', phatam: '4 thanh điệu và thanh nhẹ (bộ ma, ba, yi)',
    loi: ['Thanh 1 chưa đủ cao', 'Thanh 4 bị ngắt như dấu nặng', 'Nhầm thanh 2 và thanh 3'],
    btvn: ['Nghe và đọc theo 3 bộ mā má mǎ mà · bā bá bǎ bà · yī yí yǐ yì, mỗi bộ 5 lần', 'Tự ghi âm giọng mình đọc 6 từ mới rồi so với giọng mẫu', 'Chào 3 người bằng 你好 và nói 谢谢 khi được giúp']
  };

  /* ================= NGÀY 2 ================= */
  const d2 = {
    n: 2, ten: 'Thanh mẫu – nhóm âm dễ (b p m f · d t n l · g k h)',
    muc: 'Phát âm 11 thanh mẫu đầu tiên, hiểu thế nào là âm bật hơi; nói được về người trong gia đình và câu phủ định với 不.',
    hoc: `<h4>1. Thanh mẫu là gì?</h4><p>Là <b>phụ âm đầu</b> của âm tiết. Tiếng Trung có 21 thanh mẫu. Hôm nay học 11 âm gần với tiếng Việt nhất.</p>
      ${tbl(['Nhóm', 'Âm', 'Cách đặt lưỡi, môi', 'Gần với tiếng Việt'], [
        `<tr><td>Âm môi</td><td><b>b · p · m · f</b></td><td>Hai môi khép rồi mở; f thì răng trên chạm môi dưới</td><td>b (nhẹ) · p bật hơi · m · ph</td></tr>`,
        `<tr><td>Đầu lưỡi</td><td><b>d · t · n · l</b></td><td>Đầu lưỡi chạm lợi sau răng cửa trên</td><td>d ≈ t · t ≈ th · n · l</td></tr>`,
        `<tr><td>Cuống lưỡi</td><td><b>g · k · h</b></td><td>Cuống lưỡi nâng lên phía trong</td><td>g ≈ c/k · k ≈ c/k bật hơi · h ≈ kh</td></tr>`])}
      <p class="muted small">Cột "gần với tiếng Việt" chỉ để dễ hình dung. Nghe mẫu rồi bắt chước theo giọng mẫu là chính.</p>
      <h4>2. Bật hơi và không bật hơi</h4><p>Đặt một tờ giấy mỏng trước miệng rồi đọc:</p><ul><li><b>b, d, g</b>: <b>không bật hơi</b>, giấy gần như đứng yên.</li><li><b>p, t, k</b>: <b>bật hơi mạnh</b>, giấy rung rõ.</li></ul>
      ${tbl(['Không bật hơi', 'Bật hơi', 'Nghe so sánh'], [
        `<tr><td>八 bā (số 8)</td><td>趴 pā (nằm sấp)</td><td>${sp('八|趴')}</td></tr>`,
        `<tr><td>搭 dā (dựng, đáp xe)</td><td>他 tā (anh ấy)</td><td>${sp('搭|他')}</td></tr>`,
        `<tr><td>哥 gē (anh trai)</td><td>科 kē (khoa)</td><td>${sp('哥|科')}</td></tr>`])}
      ${tip('⚠️ <b>Lỗi hay gặp:</b> người Việt hay đọc <b>b</b> rung cổ như "b" tiếng Việt và đọc <b>d</b> thành "đ" hoặc "d". Thực ra b ≈ "b" rất nhẹ, d ≈ "t" của tiếng Việt.')}
      <h4>3. Thanh nhẹ trong từ lặp</h4><p>Từ chỉ người thân thường lặp lại một chữ. Chữ thứ hai đọc <b>thanh nhẹ</b>: 爸爸 bàba, 哥哥 gēge, 弟弟 dìdi. ${sp('爸爸|哥哥|弟弟')}</p>
      <h4>4. Ngữ pháp: phủ định với 不 bù</h4><div class="zh-formula small"><span>Chủ ngữ</span><i>+</i><span>不<small>bù – không</small></span><i>+</i><span>Động từ / Tính từ</span></div>
      <ul><li>他<b>不</b>喝。Tā bù hē. – Anh ấy không uống. ${sp('他不喝。')}</li><li>她<b>不</b>好。Tā bù hǎo. – Cô ấy không khỏe. ${sp('她不好。')}</li></ul><p class="muted small">So với tiếng Việt: vị trí giống nhau ("không" đứng trước động từ).</p>`,
    vocab: [
      w('爸爸', 'bàba', 'bố', 'Gọi bố của mình.', ['爸爸，你好！', 'Bàba, nǐ hǎo!', 'Con chào bố!']),
      w('哥哥', 'gēge', 'anh trai', 'Anh trai ruột; người lớn tuổi hơn thân thiết cũng có thể gọi 哥哥.', ['哥哥好！', 'Gēge hǎo!', 'Em chào anh!']),
      w('弟弟', 'dìdi', 'em trai', '', ['弟弟，再见！', 'Dìdi, zàijiàn!', 'Tạm biệt em nhé!']),
      w('他', 'tā', 'anh ấy, ông ấy', 'Chỉ người nam ở ngôi thứ ba.', ['他好吗？', 'Tā hǎo ma?', 'Anh ấy khỏe không?']),
      w('她', 'tā', 'cô ấy, bà ấy', 'Đọc giống hệt 他, chỉ khác chữ viết (bộ 女 = nữ).', ['她不好。', 'Tā bù hǎo.', 'Cô ấy không khỏe.']),
      w('不', 'bù', 'không', 'Đặt trước động từ hoặc tính từ để phủ định.', ['不好。', 'Bù hǎo.', 'Không tốt.']),
      w('喝', 'hē', 'uống', '', ['你喝吗？', 'Nǐ hē ma?', 'Bạn uống không?']),
      w('好', 'hǎo', 'tốt, khỏe, được', 'Dùng một mình để đồng ý: 好！ = Được!', ['好！谢谢！', 'Hǎo! Xièxie!', 'Được! Cảm ơn!'])
    ],
    kinds: ['meaning', 'listen', 'pinyin', 'hanzi', 'listenPy', 'match', 'toneHear'],
    qs: [
      ['mc', 'Âm nào <b>bật hơi</b> (luồng hơi làm tờ giấy rung)?', 'p', ['b', 'm', 'f'], 'p, t, k là âm bật hơi; b, d, g không bật hơi.'],
      ['mc', 'Thanh mẫu nào gần với “th” trong tiếng Việt?', 't', ['d', 'l', 'h'], 't bật hơi ≈ th; d ≈ t.'],
      ['mc', 'Thanh mẫu <b>h</b> (喝 hē) gần với âm nào của tiếng Việt?', 'kh', ['h', 'g', 'c'], 'h trong tiếng Trung phát ra ở cuống lưỡi, gần "kh".'],
      ['mc', 'Thanh mẫu <b>d</b> (大 dà) gần với âm nào của tiếng Việt?', 't', ['đ', 'd (dê)', 'th'], 'd là âm không bật hơi, gần "t" tiếng Việt.'],
      ['hear', '趴', 'pā', ['bā'], 'Vừa nghe: 趴 pā (bật hơi).', 'Nghe rồi chọn: bā hay pā?'],
      ['hear', '他', 'tā', ['dā'], 'Vừa nghe: 他 tā (bật hơi).', 'Nghe rồi chọn: dā hay tā?'],
      ['hear', '科', 'kē', ['gē'], 'Vừa nghe: 科 kē (bật hơi).', 'Nghe rồi chọn: gē hay kē?'],
      ['mc', '他 và 她 khác nhau thế nào?', 'Đọc giống nhau (tā); 他 là anh ấy, 她 là cô ấy', ['Khác thanh điệu', '他 đọc tā, 她 đọc dā', 'Hoàn toàn giống nhau cả nghĩa'], 'Chỉ khác chữ viết và nghĩa nam/nữ.'],
      ['mc', '“Cô ấy không khỏe” nói là?', '她不好。Tā bù hǎo.', ['她好不。Tā hǎo bù.', '不她好。Bù tā hǎo.', '她不喝。Tā bù hē.'], '不 đứng trước tính từ 好.'],
      ['order', 'Sắp xếp thành câu “Anh ấy không uống.”', ['他', '不', '喝。'], '他不喝。Tā bù hē.'],
      ['mc', 'Trong 爸爸 bàba, chữ 爸 thứ hai đọc thế nào?', 'Thanh nhẹ: ngắn, nhẹ', ['Thanh 4 như chữ đầu', 'Thanh 1', 'Thanh 3'], 'Từ lặp chỉ người thân: chữ thứ hai đọc nhẹ.']
    ],
    hoithoai: {
      ctx: 'Em đến nhà Lý Minh chơi. Bố và anh trai của Lý Minh đang ở nhà.', vai: 'Lý Minh giới thiệu người nhà, em chào hỏi cho lịch sự.', ai: '👨 李明',
      luot: [
        { a: L('这是我爸爸。', 'Zhè shì wǒ bàba.', 'Đây là bố tôi.'), o: [{ h: '叔叔好！', p: 'Shūshu hǎo!', v: 'Cháu chào chú!', ok: 1, f: 'Từ mới: 叔叔 shūshu = chú. Gặp bố của bạn thì gọi là 叔叔, không gọi 爸爸.' }, { h: '爸爸好！', p: 'Bàba hǎo!', f: '爸爸 chỉ dùng để gọi bố của mình. Bố của bạn thì gọi 叔叔 shūshu (chú).' }, { h: '再见！', p: 'Zàijiàn!', f: 'Vừa gặp đã tạm biệt thì không lịch sự rồi 😅' }] },
        { a: L('他是我哥哥。', 'Tā shì wǒ gēge.', 'Anh ấy là anh trai tôi.'), o: [{ h: '哥哥好！', p: 'Gēge hǎo!', v: 'Em chào anh!', ok: 1, f: 'Người lớn tuổi hơn mình một chút thì có thể thân mật gọi 哥哥.' }, { h: '弟弟好！', p: 'Dìdi hǎo!', f: '哥哥 là anh trai, 弟弟 là em trai. Đừng nhầm nhé.' }, { h: '她好！', p: 'Tā hǎo!', f: '她 là "cô ấy" (nữ). Hơn nữa nên chào trực tiếp người đó.' }] },
        { a: L('你喝茶吗？', 'Nǐ hē chá ma?', 'Bạn uống trà không?'), o: [{ h: '好，谢谢！', p: 'Hǎo, xièxie!', v: 'Vâng, cảm ơn!', ok: 1, f: '好 = được, đồng ý. Thêm 谢谢 cho lịch sự.' }, { h: '不客气！', p: 'Bú kèqi!', f: 'Người ta mời mình, chưa phải lúc nói "không có gì".' }, { h: '他好！', p: 'Tā hǎo!', f: 'Câu này không trả lời được lời mời uống trà.' }] },
        { a: L('你哥哥好吗？', 'Nǐ gēge hǎo ma?', 'Anh trai bạn khỏe không?'), o: [{ h: '他很好，谢谢！', p: 'Tā hěn hǎo, xièxie!', v: 'Anh ấy khỏe, cảm ơn!', ok: 1, f: 'Hỏi về anh trai (nam) thì trả lời bằng 他.' }, { h: '她不喝。', p: 'Tā bù hē.', f: 'Câu hỏi về sức khỏe, không phải về chuyện uống.' }, { h: '不好吗？', p: 'Bù hǎo ma?', f: 'Đây là câu hỏi lại, chưa phải câu trả lời.' }] }
      ], ket: 'Em đã chào người nhà của bạn và nhận lời mời rất lịch sự.'
    },
    tom: ['11 thanh mẫu b p m f d t n l g k h', 'Âm bật hơi và không bật hơi (b/p, d/t, g/k)', 'Thanh nhẹ trong từ lặp', 'Phủ định với 不'],
    nguphap: 'Phủ định: Chủ ngữ + 不 + động từ/tính từ (他不喝)', phatam: 'b p m f d t n l g k h; cặp b/p, d/t, g/k',
    loi: ['Đọc b rung cổ như "b" tiếng Việt', 'Đọc d thành "đ"', 'Quên bật hơi ở p, t, k'],
    btvn: ['Dùng tờ giấy kiểm tra bật hơi: đọc bā/pā, dā/tā, gē/kē mỗi cặp 10 lần', 'Giới thiệu người trong nhà bằng tiếng Trung: 爸爸, 妈妈, 哥哥, 弟弟', 'Tập nói 3 câu phủ định với 不']
  };

  /* ================= NGÀY 3 ================= */
  const d3 = {
    n: 3, ten: 'Thanh mẫu – nhóm âm khó, bật hơi và không bật hơi',
    muc: 'Phân biệt 3 nhóm âm khó j q x · zh ch sh r · z c s; nắm 6 cặp bật hơi; dùng được câu "A 是 B".',
    hoc: `<h4>1. Ba nhóm âm dễ nhầm</h4><p>Điểm khác nhau nằm ở <b>vị trí lưỡi</b>:</p>
      ${tbl(['Nhóm', 'Vị trí lưỡi', 'Không bật hơi', 'Bật hơi', 'Âm xát'], [
        `<tr><td><b>j q x</b></td><td>Mặt lưỡi áp vòm miệng cứng, môi dẹt như cười</td><td>j 鸡 jī ${sp('鸡')}</td><td>q 七 qī ${sp('七')}</td><td>x 西 xī ${sp('西')}</td></tr>`,
        `<tr><td><b>zh ch sh r</b></td><td>Cong (uốn) đầu lưỡi lên</td><td>zh 知 zhī ${sp('知')}</td><td>ch 吃 chī ${sp('吃')}</td><td>sh 诗 shī ${sp('诗')} · r 日 rì ${sp('日')}</td></tr>`,
        `<tr><td><b>z c s</b></td><td>Đầu lưỡi thẳng, chạm sau răng cửa trên</td><td>z 字 zì ${sp('字')}</td><td>c 词 cí ${sp('词')}</td><td>s 四 sì ${sp('四')}</td></tr>`])}
      ${tip('🔑 <b>Mẹo nhớ:</b> j q x chỉ đi với <b>i</b> và <b>ü</b> (jī, qù, xué). Gặp zh, ch, sh thì nhớ <b>uốn lưỡi</b>; gặp z, c, s thì <b>giữ lưỡi thẳng</b>.')}
      <h4>2. Sáu cặp bật hơi cần nhớ</h4>${tbl(['Không bật hơi', 'Bật hơi'], ['b – p', 'd – t', 'g – k', 'j – q', 'zh – ch', 'z – c'].map((x) => { const [u, v] = x.split(' – '); return `<tr><td>${u}</td><td><b>${v}</b></td></tr>`; }))}
      <h4>3. Chữ "i" đặc biệt</h4><p>Trong <b>zhi chi shi ri zi ci si</b>, chữ i <b>không đọc là "i"</b>. Lưỡi giữ nguyên vị trí của phụ âm, âm phát ra nghe gần "ư". So sánh: 西 xī (i thật) với 诗 shī và 四 sì. ${sp('西|诗|四')}</p>
      <h4>4. Câu luyện lưỡi nổi tiếng</h4><p class="zh-big2">四是四，十是十。${sp('四是四，十是十。')}</p><p>Sì shì sì, shí shì shí. – Bốn là bốn, mười là mười. Chú ý: 四 sì (lưỡi thẳng) và 十 shí, 是 shì (uốn lưỡi).</p>
      <h4>5. Bán âm y, w</h4><p>Khi <b>i, u, ü</b> đứng đầu âm tiết thì viết thành y, w, yu: 衣 yī, 屋 wū, 鱼 yú.</p>
      <h4>6. Ngữ pháp: câu với 是 shì (là)</h4><div class="zh-formula small"><span>A</span><i>+</i><span>是<small>shì – là</small></span><i>+</i><span>B</span></div>
      <ul><li>我是学生。Wǒ shì xuésheng. – Tôi là học sinh. ${sp('我是学生。')}</li><li>他不是中国人。Tā bú shì Zhōngguó rén. – Anh ấy không phải người Trung Quốc. ${sp('他不是中国人。')}</li></ul><p class="muted small">Lưu ý: 不 đứng trước 是 (thanh 4) thì đọc <b>bú</b>. Ngày 5 sẽ học kỹ quy tắc này.</p>`,
    vocab: [
      w('是', 'shì', 'là', 'Nối hai danh từ: A 是 B. Phủ định: 不是 bú shì.', ['我是学生。', 'Wǒ shì xuésheng.', 'Tôi là học sinh.']),
      w('中国', 'Zhōngguó', 'Trung Quốc', 'Tên riêng nên viết hoa chữ đầu trong Pinyin.', ['中国茶', 'Zhōngguó chá', 'trà Trung Quốc']),
      w('茶', 'chá', 'trà', '', ['我喝茶。', 'Wǒ hē chá.', 'Tôi uống trà.']),
      w('吃', 'chī', 'ăn', '', ['你吃吗？', 'Nǐ chī ma?', 'Bạn ăn không?']),
      w('四', 'sì', 'số 4', 'Lưỡi thẳng, đừng uốn (khác 是, 十).', ['四是四。', 'Sì shì sì.', 'Bốn là bốn.']),
      w('十', 'shí', 'số 10', 'Uốn lưỡi, thanh 2.', ['十是十。', 'Shí shì shí.', 'Mười là mười.']),
      w('七', 'qī', 'số 7', 'q bật hơi, môi dẹt (khác 吃 chī).', ['七，十', 'qī, shí', 'bảy, mười']),
      w('学生', 'xuésheng', 'học sinh, sinh viên', 'xué: x + üe, viết u nhưng đọc ü. Chữ sau đọc nhẹ.', ['他是学生吗？', 'Tā shì xuésheng ma?', 'Anh ấy là học sinh à?'])
    ],
    kinds: ['listenPy', 'meaning', 'pinyin', 'listen', 'hanzi', 'match'],
    qs: [
      ['mc', 'Nhóm j, q, x chỉ đi với vận mẫu nào?', 'i và ü', ['a và o', 'e và u', 'Mọi vận mẫu'], 'jī, qù (= qü), xué (= xüé).'],
      ['mc', 'Khi đọc zh, ch, sh, r, đầu lưỡi làm gì?', 'Cong (uốn) lên phía vòm miệng', ['Thẳng, chạm sau răng cửa', 'Mặt lưỡi áp vòm miệng, môi dẹt', 'Nằm yên dưới hàm'], 'zh ch sh r là nhóm uốn lưỡi.'],
      ['mc', 'Âm nào <b>không</b> bật hơi?', 'z', ['c', 'q', 'ch'], 'Các cặp: z–c, j–q, zh–ch (âm sau bật hơi).'],
      ['hear', '四', 'sì', ['shí', 'shì', 'xī'], 'Vừa nghe: 四 sì – số 4 (lưỡi thẳng).'],
      ['hear', '十', 'shí', ['sì', 'sī', 'xí'], 'Vừa nghe: 十 shí – số 10 (uốn lưỡi, thanh 2).'],
      ['hear', '吃', 'chī', ['qī', 'cī', 'zhī'], 'Vừa nghe: 吃 chī – ăn.'],
      ['hear', '七', 'qī', ['chī', 'jī', 'xī'], 'Vừa nghe: 七 qī – số 7.'],
      ['mc', 'Trong zhi, chi, shi, zi, ci, si, chữ “i” đọc thế nào?', 'Không đọc "i"; giữ lưỡi như phụ âm, nghe gần "ư"', ['Đọc "i" như tiếng Việt', 'Đọc "ê"', 'Không phát âm gì'], 'Đây là i đặc biệt.'],
      ['mc', '“Trà Trung Quốc” nói là?', '中国茶 Zhōngguó chá', ['茶中国 chá Zhōngguó', '中国吃 Zhōngguó chī', '中国是 Zhōngguó shì'], 'Tiếng Trung đặt từ bổ nghĩa đứng TRƯỚC (ngược tiếng Việt).'],
      ['order', 'Sắp xếp thành câu “Tôi là học sinh.”', ['我', '是', '学生。'], '我是学生。Wǒ shì xuésheng.'],
      ['mc', 'Câu “Anh ấy không phải học sinh” đúng là?', '他不是学生。', ['他是不学生。', '他学生不是。', '不他是学生。'], '不 đứng ngay trước 是.']
    ],
    hoithoai: {
      ctx: 'Em vào một quán trà ở Thượng Hải. Nhân viên phục vụ ra chào.', vai: 'Nhân viên hỏi, em trả lời.', ai: '👩 服务员 (nhân viên)',
      luot: [
        { a: L('你好！你喝茶吗？', 'Nǐ hǎo! Nǐ hē chá ma?', 'Xin chào! Anh/chị uống trà không?'), o: [{ h: '喝，谢谢！', p: 'Hē, xièxie!', v: 'Uống, cảm ơn!', ok: 1, f: 'Trả lời câu hỏi có/không bằng cách nhắc lại động từ: 喝 (có uống).' }, { h: '不客气！', p: 'Bú kèqi!', f: '不客气 để đáp lại lời cảm ơn.' }, { h: '是！', p: 'Shì!', f: '是 nghĩa là "là", không dùng để trả lời "có uống không".' }] },
        { a: L('你吃吗？', 'Nǐ chī ma?', 'Anh/chị có ăn gì không?'), o: [{ h: '不吃，谢谢。', p: 'Bù chī, xièxie.', v: 'Không ăn, cảm ơn.', ok: 1, f: 'Từ chối lịch sự: 不 + động từ + 谢谢.' }, { h: '七！', p: 'Qī!', f: '七 qī là số 7. Cẩn thận: 吃 chī (ăn) uốn lưỡi, 七 qī môi dẹt.' }, { h: '吃不。', p: 'Chī bù.', f: 'Sai trật tự: 不 phải đứng trước động từ (不吃).' }] },
        { a: L('你是中国人吗？', 'Nǐ shì Zhōngguó rén ma?', 'Anh/chị là người Trung Quốc à?'), o: [{ h: '不是，我是越南人。', p: 'Bú shì, wǒ shì Yuènán rén.', v: 'Không phải, tôi là người Việt Nam.', ok: 1, f: 'Từ mới: 越南人 Yuènán rén = người Việt Nam. 不是 đọc bú shì.' }, { h: '是，我是越南人。', p: 'Shì, wǒ shì Yuènán rén.', f: 'Mâu thuẫn: vừa nói "phải" lại nói là người Việt Nam.' }, { h: '四。', p: 'Sì.', f: '四 là số 4, không trả lời được câu hỏi này.' }] },
        { a: L('谢谢！再见！', 'Xièxie! Zàijiàn!', 'Cảm ơn! Tạm biệt!'), o: [{ h: '再见！', p: 'Zàijiàn!', ok: 1, f: 'Chuẩn rồi!' }, { h: '你好！', p: 'Nǐ hǎo!', f: '你好 để chào khi gặp.' }, { h: '十！', p: 'Shí!', f: '十 là số 10 😄' }] }
      ], ket: 'Em đã gọi trà, từ chối lịch sự và nói mình là người Việt Nam.'
    },
    tom: ['Nhóm j q x · zh ch sh r · z c s', '6 cặp bật hơi', 'Chữ i đặc biệt sau zh ch sh r z c s', 'Bán âm y, w', 'Câu A 是 B'],
    nguphap: 'Câu A 是 B (là); phủ định 不是', phatam: 'j q x · zh ch sh r · z c s; 6 cặp bật hơi; câu 四是四，十是十',
    loi: ['Đọc sì (四) thành shì/shí', 'Nhầm chī (吃) với qī (七)', 'Đọc i trong zhi/shi/si thành "i"'],
    btvn: ['Đọc câu 四是四，十是十 10 lần, chậm rồi nhanh dần', 'Đọc 3 hàng: jī qī xī · zhī chī shī · zī cī sī', 'Đặt 3 câu với 是 và 3 câu với 不是']
  };

  /* ================= NGÀY 4 ================= */
  const d4 = {
    n: 4, ten: 'Vận mẫu và cách ghép âm',
    muc: 'Đọc được các vận mẫu đơn, kép, mũi; nắm quy tắc viết y/w, ü và viết tắt iu/ui/un; ghép thanh mẫu + vận mẫu thành âm tiết đúng.',
    hoc: `<h4>1. Vận mẫu đơn: a o e i u ü</h4><ul><li><b>e</b> ${sp('饿')}: không phải "e" tiếng Việt, mà nghe gần giữa "ư" và "ơ".</li><li><b>ü</b> ${sp('鱼')}: môi tròn như đọc "u" nhưng lưỡi đặt như đọc "i". Mẹo: đọc "i" rồi từ từ tròn môi lại.</li></ul>
      <h4>2. Vận mẫu kép và vận mẫu mũi</h4>${tbl(['Vận mẫu', 'Ví dụ', 'Gần với', 'Nghe'], [
        `<tr><td>ai · ei · ao · ou</td><td>爱 ài · 黑 hēi · 好 hǎo · 狗 gǒu</td><td>ai · ây · ao · âu</td><td>${sp('爱|黑|好|狗')}</td></tr>`,
        `<tr><td>an · en · in</td><td>安 ān · 门 mén · 新 xīn</td><td>an · ân · in</td><td>${sp('安|门|新')}</td></tr>`,
        `<tr><td>ang · eng · ing · ong</td><td>忙 máng · 冷 lěng · 听 tīng · 红 hóng</td><td>ang · âng · inh · ung</td><td>${sp('忙|冷|听|红')}</td></tr>`])}
      ${tip('⚠️ <b>-n và -ng:</b> người miền Nam hay đọc lẫn "an/ang", "in/inh". Với -n, đầu lưỡi chạm lợi trên; với -ng, lưỡi lùi vào trong, miệng hơi mở.')}
      <h4>3. Quy tắc viết Pinyin (rất hay gặp)</h4><ol>
        <li><b>i, u, ü đứng đầu âm tiết</b> thì viết y, w, yu: i → <b>yi</b>, ia → <b>ya</b>, u → <b>wu</b>, ua → <b>wa</b>, ü → <b>yu</b>, üe → <b>yue</b>.</li>
        <li><b>ü sau j, q, x, y</b> bỏ hai chấm (ju, qu, xu, yu) nhưng <b>vẫn đọc ü</b>. Sau n, l thì giữ chấm để phân biệt: 女 nǚ (nữ) khác 努 nǔ. ${sp('女|努')}</li>
        <li><b>Viết tắt:</b> iou → <b>iu</b> (六 liù), uei → <b>ui</b> (对 duì), uen → <b>un</b> (春 chūn).</li>
        <li><b>Dấu thanh:</b> có a thì đặt trên a; không có a thì đặt trên e hoặc o; gặp iu, ui thì đặt trên chữ sau.</li></ol>
      <h4>4. Ghép âm từng bước</h4><div class="zh-formula small"><span>x</span><i>+</i><span>üe</span><i>→</i><span>xue</span><i>+ ˊ →</i><span class="r">xué 学</span></div>
      <h4>5. Ngữ pháp: 们 men – số nhiều</h4><p>Thêm 们 sau đại từ để chỉ số nhiều: 我们 wǒmen (chúng tôi), 你们 nǐmen (các bạn), 他们 tāmen (họ). ${sp('我们|你们|他们')} 们 đọc thanh nhẹ.</p>
      <h4>6. Cặp từ dễ nhầm vì thanh: 买 mǎi (mua) – 卖 mài (bán)</h4><p>${sp('买|卖')} Chỉ khác thanh 3 và thanh 4 mà nghĩa ngược nhau. Đọc sai là mua thành bán đó!</p>`,
    vocab: [
      w('我', 'wǒ', 'tôi, mình, em, anh…', 'Ngôi thứ nhất, dùng cho mọi đối tượng.', ['我是越南人。', 'Wǒ shì Yuènán rén.', 'Tôi là người Việt Nam.']),
      w('我们', 'wǒmen', 'chúng tôi, chúng ta', '们 đọc nhẹ.', ['我们喝茶。', 'Wǒmen hē chá.', 'Chúng tôi uống trà.']),
      w('人', 'rén', 'người', 'Tên nước + 人 = người nước đó.', ['中国人', 'Zhōngguó rén', 'người Trung Quốc']),
      w('越南', 'Yuènán', 'Việt Nam', 'yuè = ü + e, viết yue.', ['他是越南人吗？', 'Tā shì Yuènán rén ma?', 'Anh ấy là người Việt Nam à?']),
      w('水', 'shuǐ', 'nước', 'shuǐ = sh + uei viết tắt ui, dấu đặt trên i.', ['我喝水。', 'Wǒ hē shuǐ.', 'Tôi uống nước.']),
      w('鱼', 'yú', 'cá', 'ü đứng đầu → viết yu.', ['我们吃鱼。', 'Wǒmen chī yú.', 'Chúng tôi ăn cá.']),
      w('买', 'mǎi', 'mua', 'Thanh 3 (khác 卖 mài thanh 4).', ['我买水。', 'Wǒ mǎi shuǐ.', 'Tôi mua nước.']),
      w('卖', 'mài', 'bán', 'Thanh 4.', ['他卖鱼。', 'Tā mài yú.', 'Anh ấy bán cá.'])
    ],
    kinds: ['listenPy', 'meaning', 'pinyin', 'listen', 'hanzi', 'match'],
    qs: [
      ['mc', 'Trong “ju”, chữ u thực ra đọc là?', 'ü (môi tròn, lưỡi như i)', ['u', 'i', 'ô'], 'Sau j, q, x, y thì u luôn là ü.'],
      ['mc', '“j + üe + thanh 2” viết đúng là?', 'jué', ['jüé', 'jié', 'juó'], 'Sau j bỏ hai chấm của ü: jué (觉).'],
      ['mc', 'Vận mẫu “u” đứng một mình, thanh 3, viết đúng là?', 'wǔ', ['ǔ', 'wǔu', 'yǔ'], 'u đứng đầu âm tiết → wu: 五 wǔ (số 5).'],
      ['mc', '“l + iou + thanh 4” viết gọn là?', 'liù', ['lioù', 'liòu', 'lìu'], 'iou viết tắt iu, dấu đặt trên chữ sau: 六 liù.'],
      ['mc', '“d + uei + thanh 4” viết gọn là?', 'duì', ['dùi', 'duèi', 'dueì'], 'uei viết tắt ui, dấu trên i: 对 duì.'],
      ['mc', '“hao” thanh 3 đặt dấu ở đâu?', 'hǎo (trên a)', ['haǒ (trên o)', 'Đặt ở đâu cũng được', 'Không cần dấu'], 'Có a thì đặt dấu trên a.'],
      ['hear', '买', 'mǎi (mua)', ['mài (bán)'], 'Vừa nghe: 买 mǎi – mua (thanh 3).', 'Nghe: mua hay bán?'],
      ['hear', '卖', 'mài (bán)', ['mǎi (mua)'], 'Vừa nghe: 卖 mài – bán (thanh 4).', 'Nghe: mua hay bán?'],
      ['mc', '“Chúng tôi” tiếng Trung là?', '我们 wǒmen', ['你们 nǐmen', '他们 tāmen', '我 wǒ'], '我 + 们 = chúng tôi.'],
      ['mc', 'Nữ (女) viết Pinyin là?', 'nǚ', ['nǔ', 'nü', 'nù'], 'Sau n, l phải giữ hai chấm của ü để khỏi nhầm với u.'],
      ['order', 'Sắp xếp thành câu “Tôi mua cá.”', ['我', '买', '鱼。'], '我买鱼。Wǒ mǎi yú.']
    ],
    hoithoai: {
      ctx: 'Em đi chợ hải sản. Một cô bán cá chào em.', vai: 'Cô bán cá hỏi, em trả lời.', ai: '👩 卖鱼的 (người bán cá)',
      luot: [
        { a: L('你好！买鱼吗？', 'Nǐ hǎo! Mǎi yú ma?', 'Chào em! Mua cá không?'), o: [{ h: '买，谢谢！', p: 'Mǎi, xièxie!', v: 'Mua ạ, cảm ơn!', ok: 1, f: 'Nhắc lại động từ để trả lời "có": 买.' }, { h: '卖！', p: 'Mài!', f: '卖 mài là "bán". Em là người mua nên nói 买 mǎi (thanh 3).' }, { h: '我是鱼。', p: 'Wǒ shì yú.', f: '"Tôi là cá" 😄 Câu này sai nghĩa rồi.' }] },
        { a: L('你是中国人吗？', 'Nǐ shì Zhōngguó rén ma?', 'Em là người Trung Quốc à?'), o: [{ h: '不是，我是越南人。', p: 'Bú shì, wǒ shì Yuènán rén.', v: 'Không ạ, em là người Việt Nam.', ok: 1, f: 'Rất tốt! Nhớ đọc yuè cho tròn môi.' }, { h: '我们是鱼。', p: 'Wǒmen shì yú.', f: '"Chúng tôi là cá" – sai nghĩa.' }, { h: '不是中国。', p: 'Bú shì Zhōngguó.', f: 'Nên nói đủ: 不是，我是越南人. Nói "không phải Trung Quốc" chưa trả lời mình là người nước nào.' }] },
        { a: L('你喝水吗？', 'Nǐ hē shuǐ ma?', 'Em uống nước không?'), o: [{ h: '好，谢谢！', p: 'Hǎo, xièxie!', ok: 1, f: 'Nhận lời mời lịch sự.' }, { h: '不客气！', p: 'Bú kèqi!', f: 'Người ta mời thì mình cảm ơn, chưa phải lúc nói "không có gì".' }, { h: '卖水！', p: 'Mài shuǐ!', f: '卖水 là "bán nước" 😅' }] },
        { a: L('不客气！再见！', 'Bú kèqi! Zàijiàn!', 'Không có gì! Tạm biệt!'), o: [{ h: '再见！', p: 'Zàijiàn!', ok: 1, f: 'Hoàn hảo!' }, { h: '买鱼！', p: 'Mǎi yú!', f: 'Đang chào tạm biệt mà 😄' }, { h: '吗？', p: 'Ma?', f: '吗 không đứng một mình.' }] }
      ], ket: 'Em đã đi chợ, phân biệt được mua 买 và bán 卖.'
    },
    tom: ['Vận mẫu đơn, kép, mũi', 'Quy tắc y/w, ü sau j q x y, viết tắt iu/ui/un', 'Ghép âm theo bước', '们 chỉ số nhiều'],
    nguphap: '们 chỉ số nhiều (我们, 你们, 他们); từ bổ nghĩa đứng trước (中国人)', phatam: 'Vận mẫu đơn, kép, mũi; e, ü; -n và -ng',
    loi: ['Đọc e như "e" tiếng Việt', 'Đọc ü thành "u" khi viết ju/qu/xu', 'Lẫn -n và -ng', 'Nhầm 买 mǎi và 卖 mài'],
    btvn: ['Đọc to bảng vận mẫu ở trang Bảng Pinyin, mỗi hàng 3 lần', 'Viết Pinyin cho 5 âm: j+üe, l+iou, d+uei, ch+uen, ü+an (đứng đầu)', 'Nói 2 câu: 我买水。他卖鱼。']
  };

  /* ================= NGÀY 5 ================= */
  const d5 = {
    n: 5, ten: 'Thanh điệu, biến điệu và lỗi người Việt hay mắc',
    muc: 'Nắm 4 quy tắc biến điệu (thanh 3, 不, 一, thanh nhẹ) để đọc tự nhiên như người bản xứ; sửa các lỗi thanh điệu phổ biến.',
    hoc: `<p>Khi đứng cạnh nhau, một số âm tiết <b>đổi thanh khi đọc</b>. Đó gọi là <b>biến điệu</b>.</p>
      <h4>1. Thanh 3 + Thanh 3 → Thanh 2 + Thanh 3</h4>${tbl(['Viết', 'Đọc thực tế', 'Nghĩa', 'Nghe'], [
        `<tr><td>你好 nǐ hǎo</td><td><b>ní</b> hǎo</td><td>xin chào</td><td>${sp('你好')}</td></tr>`,
        `<tr><td>很好 hěn hǎo</td><td><b>hén</b> hǎo</td><td>rất tốt</td><td>${sp('很好')}</td></tr>`,
        `<tr><td>水果 shuǐguǒ</td><td><b>shuí</b>guǒ</td><td>trái cây</td><td>${sp('水果')}</td></tr>`,
        `<tr><td>可以 kěyǐ</td><td><b>ké</b>yǐ</td><td>được, có thể</td><td>${sp('可以')}</td></tr>`])}
      <p class="muted small">Pinyin trong sách và từ điển <b>vẫn viết dấu gốc</b> (nǐ hǎo), chỉ đổi khi đọc.</p>
      <h4>2. Nửa thanh 3</h4><p>Thanh 3 đứng trước thanh 1, 2, 4 hoặc thanh nhẹ thì <b>chỉ đọc phần thấp</b> (xuống mà không lên lại): 老师 lǎoshī, 我们 wǒmen, 很大 hěn dà. ${sp('老师|我们|很大')}</p>
      <h4>3. Biến điệu của 不 bù</h4><ul><li>Đứng trước <b>thanh 4</b> thì đọc <b>bú</b> (thanh 2): 不是 bú shì, 不客气 bú kèqi, 不要 bú yào. ${sp('不是|不客气')}</li><li>Các trường hợp khác giữ <b>bù</b>: 不好 bù hǎo, 不喝 bù hē, 不来 bù lái. ${sp('不好|不喝')}</li></ul>
      <h4>4. Biến điệu của 一 yī</h4>${tbl(['Trường hợp', 'Đọc', 'Ví dụ', 'Nghe'], [
        `<tr><td>Đứng một mình, đếm số, số thứ tự, cuối từ</td><td><b>yī</b></td><td>一 yī · 十一 shíyī · 第一 dì-yī</td><td>${sp('一|十一|第一')}</td></tr>`,
        `<tr><td>Trước thanh 4 (kể cả 个)</td><td><b>yí</b></td><td>一个 yí ge · 一样 yíyàng</td><td>${sp('一个|一样')}</td></tr>`,
        `<tr><td>Trước thanh 1, 2, 3</td><td><b>yì</b></td><td>一天 yì tiān · 一年 yì nián · 一起 yìqǐ</td><td>${sp('一天|一年|一起')}</td></tr>`])}
      <p class="muted small">Với 一 và 不, phần lớn giáo trình ghi luôn thanh đã biến (yí ge, bú shì). Bài học này cũng ghi như vậy.</p>
      <h4>5. Thanh nhẹ</h4><p>Thường gặp ở chữ lặp (爸爸, 妈妈), trợ từ (吗, 们) và một số từ quen thuộc (谢谢 xièxie, 学生 xuésheng). Đọc ngắn, nhẹ, không nhấn.</p>
      <h4>6. Lỗi người Việt hay mắc</h4><ul><li>Thanh 1 thấp như giọng ngang. Hãy nâng giọng cao lên.</li><li>Thanh 4 bị ngắt cụt như dấu nặng. Hãy rơi trọn từ cao xuống thấp.</li><li>Đọc đủ hai thanh 3 liền nhau (nǐ hǎo cứng và nặng). Nhớ đổi thanh đầu thành thanh 2.</li><li>Đọc thanh nhẹ quá mạnh (xiè<b>xiè</b>).</li></ul>`,
    vocab: [
      w('很', 'hěn', 'rất', 'Thường đứng trước tính từ; nhiều khi chỉ để câu tự nhiên, không nhấn "rất".', ['我很好。', 'Wǒ hěn hǎo.', 'Tôi khỏe.']),
      w('老师', 'lǎoshī', 'thầy giáo, cô giáo', 'Cũng dùng để chào: 老师好！', ['老师好！', 'Lǎoshī hǎo!', 'Em chào thầy/cô!']),
      w('一', 'yī', 'số 1, một', 'Đổi thanh theo chữ đứng sau (xem quy tắc 4).', ['一个人', 'yí ge rén', 'một người']),
      w('个', 'gè', 'cái, chiếc, người (lượng từ chung)', 'Số + 个 + danh từ. Trong cụm từ thường đọc nhẹ: ge.', ['一个老师', 'yí ge lǎoshī', 'một giáo viên']),
      w('一起', 'yìqǐ', 'cùng nhau', '一 trước thanh 3 → yì.', ['我们一起吃。', 'Wǒmen yìqǐ chī.', 'Chúng ta cùng ăn.']),
      w('可以', 'kěyǐ', 'được, có thể', 'Đọc thực tế: kéyǐ. Hỏi xin phép: 可以吗？', ['可以吗？', 'Kěyǐ ma?', 'Được không?']),
      w('水果', 'shuǐguǒ', 'trái cây', 'Đọc thực tế: shuíguǒ.', ['我买水果。', 'Wǒ mǎi shuǐguǒ.', 'Tôi mua trái cây.'])
    ],
    kinds: ['listenPy', 'meaning', 'pinyin', 'listen', 'hanzi', 'toneHear'],
    qs: [
      ['mc', '你好 đọc thực tế là?', 'ní hǎo', ['nǐ hǎo (đọc đủ hai thanh 3)', 'nì hǎo', 'nī hǎo'], 'Thanh 3 + thanh 3 → thanh 2 + thanh 3.'],
      ['mc', '很好 hěn hǎo đọc thực tế là?', 'hén hǎo', ['hěn háo', 'hèn hǎo', 'hēn hǎo'], 'Thanh 3 đứng trước đổi thành thanh 2.'],
      ['mc', '不 trong 不是 đọc là?', 'bú (thanh 2)', ['bù (thanh 4)', 'bǔ (thanh 3)', 'bū (thanh 1)'], '是 thanh 4 nên 不 → bú.'],
      ['mc', '不 trong 不好 đọc là?', 'bù (thanh 4)', ['bú (thanh 2)', 'bǔ (thanh 3)', 'bū (thanh 1)'], '好 thanh 3 nên 不 giữ bù.'],
      ['mc', '一 trong 一起 (đứng trước qǐ) đọc là?', 'yì (thanh 4)', ['yí (thanh 2)', 'yī (thanh 1)', 'yǐ (thanh 3)'], 'Trước thanh 1, 2, 3 → yì.'],
      ['mc', '一 trong 一个 đọc là?', 'yí (thanh 2)', ['yì (thanh 4)', 'yī (thanh 1)', 'yǐ (thanh 3)'], '个 gè thanh 4 → 一 đọc yí.'],
      ['mc', 'Khi đếm “một, hai, ba…”, 一 đọc là?', 'yī (thanh 1)', ['yí', 'yì', 'yǐ'], 'Đếm số thì giữ thanh gốc yī.'],
      ['mc', 'Quy tắc: hai thanh 3 đứng liền nhau thì…', 'Thanh 3 đứng trước đổi thành thanh 2', ['Thanh 3 đứng sau đổi thành thanh 2', 'Cả hai đổi thành thanh 1', 'Không thay đổi'], 'Ví dụ 你好 → ní hǎo.'],
      ['mc', '不客气 đọc là?', 'bú kèqi', ['bù kèqi', 'bú kěqì', 'bù kéqi'], '客 kè thanh 4 → 不 đọc bú; 气 đọc nhẹ.'],
      ['hear', '可以', 'kěyǐ', ['kèyì', 'kēyī', 'kěyì'], '可以 viết kěyǐ, khi đọc nghe như kéyǐ.', 'Bấm nghe. Pinyin viết đúng (theo dấu gốc) của từ này là?'],
      ['order', 'Sắp xếp: “Chúng ta cùng ăn trái cây.”', ['我们', '一起', '吃', '水果。'], '我们一起吃水果。Wǒmen yìqǐ chī shuǐguǒ.']
    ],
    hoithoai: {
      ctx: 'Giờ ra chơi, em gặp cô giáo tiếng Trung là cô Vương (王老师 Wáng lǎoshī).', vai: 'Cô giáo nói, em đáp. Chú ý đọc đúng biến điệu!', ai: '👩‍🏫 王老师',
      luot: [
        { a: L('你好！', 'Nǐ hǎo!', 'Chào em!'), o: [{ h: '老师好！', p: 'Lǎoshī hǎo!', v: 'Em chào cô!', ok: 1, f: 'Chào thầy cô thì nói 老师好 cho lễ phép.' }, { h: '再见！', p: 'Zàijiàn!', f: 'Vừa gặp mà đã tạm biệt?' }, { h: '可以！', p: 'Kěyǐ!', f: '可以 = được, không dùng để chào.' }] },
        { a: L('你好吗？', 'Nǐ hǎo ma?', 'Em khỏe không?'), o: [{ h: '我很好，谢谢老师！', p: 'Wǒ hěn hǎo, xièxie lǎoshī!', v: 'Em khỏe ạ, cảm ơn cô!', ok: 1, f: 'Nhớ đọc "hén hǎo" theo quy tắc biến điệu.' }, { h: '我不是。', p: 'Wǒ bú shì.', f: '"Em không phải" – không trả lời được câu hỏi thăm sức khỏe.' }, { h: '一个。', p: 'Yí ge.', f: '"Một cái" – sai ngữ cảnh.' }] },
        { a: L('我们一起吃水果，可以吗？', 'Wǒmen yìqǐ chī shuǐguǒ, kěyǐ ma?', 'Chúng ta cùng ăn trái cây nhé, được không?'), o: [{ h: '可以！谢谢老师！', p: 'Kěyǐ! Xièxie lǎoshī!', v: 'Được ạ! Cảm ơn cô!', ok: 1, f: 'Trả lời câu hỏi 可以吗 bằng 可以 (đồng ý) hoặc 不可以 (không được).' }, { h: '不是！', p: 'Bú shì!', f: '不是 phủ định câu "là", không trả lời câu xin phép 可以吗.' }, { h: '不客气！', p: 'Bú kèqi!', f: 'Cô đang mời em, em nên cảm ơn.' }] },
        { a: L('不客气。再见！', 'Bú kèqi. Zàijiàn!', 'Không có gì. Tạm biệt em!'), o: [{ h: '老师再见！', p: 'Lǎoshī zàijiàn!', v: 'Em chào cô ạ!', ok: 1, f: 'Thêm 老师 cho lễ phép.' }, { h: '你好！', p: 'Nǐ hǎo!', f: '你好 dùng khi gặp.' }, { h: '很好！', p: 'Hěn hǎo!', f: '"Rất tốt" – chưa phải lời chào tạm biệt.' }] }
      ], ket: 'Em đã nói chuyện với cô giáo và đọc đúng các biến điệu 很好, 不客气, 一起, 可以.'
    },
    tom: ['Biến điệu thanh 3 + thanh 3', 'Nửa thanh 3', 'Biến điệu 不', 'Biến điệu 一', 'Thanh nhẹ', 'Lỗi thanh điệu của người Việt'],
    nguphap: '很 + tính từ (我很好); số + 个 + danh từ (一个人); hỏi xin phép …可以吗？', phatam: 'Biến điệu thanh 3, 不, 一 và thanh nhẹ',
    loi: ['Đọc đủ hai thanh 3 liền nhau', 'Quên đổi 不 thành bú trước thanh 4', 'Đọc 一 luôn là yī', 'Đọc thanh nhẹ quá mạnh'],
    btvn: ['Đọc 10 lần: 你好, 很好, 水果, 可以 (nhớ đổi thanh 3 đầu thành thanh 2)', 'Đọc: 不是, 不客气, 不好, 不喝 và tự giải thích vì sao bú/bù', 'Đọc: 一, 一个, 一起, 一天, 一年']
  };

  /* ================= NGÀY 6 ================= */
  const d6 = {
    n: 6, ten: 'Luyện đọc Pinyin, nhận diện âm và từ đơn giản',
    muc: 'Đọc trôi chảy Pinyin của từ và câu ngắn; hỏi tên, xin lỗi, chào theo thời gian trong ngày.',
    hoc: `<h4>1. Đọc một âm tiết theo 3 bước</h4><ol><li>Nhìn <b>thanh mẫu</b>: lưỡi đặt ở đâu? có bật hơi không?</li><li>Nhìn <b>vận mẫu</b>: có quy tắc viết tắt hay ü ẩn không? (ju = jü, liu = liou)</li><li>Nhìn <b>thanh điệu</b>: có biến điệu không? (thanh 3 liền nhau, 不, 一)</li></ol>
      <h4>2. Hai ký hiệu cần biết</h4><ul><li><b>Dấu cách âm ’</b>: tách hai âm tiết khi âm sau bắt đầu bằng a, o, e. 晚安 wǎn’ān đọc wǎn + ān (không đọc wǎ + nān); 西安 Xī’ān (thành phố Tây An). ${sp('晚安|西安')}</li><li><b>Viết hoa</b> tên riêng: Zhōngguó, Yuènán, Lǐ Míng.</li></ul>
      <h4>3. Bảng luyện đọc (bấm để nghe, che nghĩa rồi tự đọc trước)</h4>
      <div class="zh-read">${[['朋友', 'péngyou', 'bạn bè'], ['名字', 'míngzi', 'tên'], ['什么', 'shénme', 'gì'], ['对不起', 'duìbuqǐ', 'xin lỗi'], ['没关系', 'méi guānxi', 'không sao'], ['早上好', 'zǎoshang hǎo', 'chào buổi sáng'], ['晚安', 'wǎn’ān', 'ngủ ngon'], ['学生', 'xuésheng', 'học sinh'], ['水果', 'shuǐguǒ', 'trái cây'], ['老师', 'lǎoshī', 'thầy cô'], ['中国人', 'Zhōngguó rén', 'người Trung Quốc'], ['越南人', 'Yuènán rén', 'người Việt Nam']].map(([h, p, v]) => `<button class="zh-rd" data-say="${h}"><b>${p}</b><span>${h}</span><small>${v}</small></button>`).join('')}</div>
      <h4>4. Ngữ pháp: câu hỏi với 什么 shénme (gì)</h4><div class="zh-formula small"><span>你</span><i>+</i><span>叫</span><i>+</i><span>什么<small>gì?</small></span><i>+</i><span>名字？</span></div>
      <p>Đặt 什么 <b>vào đúng chỗ của thông tin cần hỏi</b>, giữ nguyên trật tự câu trả lời: 你叫什么名字？→ 我叫小明。 ${sp('你叫什么名字？|我叫小明。')}</p>
      ${tip('⚠️ <b>Lỗi hay gặp:</b> đã có 什么 rồi thì <b>không thêm 吗</b>. ✘ 你叫什么名字吗？ → ✔ 你叫什么名字？')}
      <h4>5. Chào theo thời gian</h4><ul><li>早上好！Zǎoshang hǎo! – Chào buổi sáng. ${sp('早上好！')}</li><li>晚安！Wǎn’ān! – Chúc ngủ ngon (chào trước khi đi ngủ). ${sp('晚安！')}</li><li>你好 dùng được mọi lúc.</li></ul>`,
    vocab: [
      w('叫', 'jiào', 'gọi, tên là', 'Giới thiệu tên: 我叫 + tên.', ['我叫小明。', 'Wǒ jiào Xiǎo Míng.', 'Tôi tên là Tiểu Minh.']),
      w('什么', 'shénme', 'gì, cái gì', 'Đặt vào chỗ cần hỏi; không thêm 吗.', ['你喝什么？', 'Nǐ hē shénme?', 'Bạn uống gì?']),
      w('名字', 'míngzi', 'tên', '字 đọc nhẹ.', ['你叫什么名字？', 'Nǐ jiào shénme míngzi?', 'Bạn tên là gì?']),
      w('朋友', 'péngyou', 'bạn bè', '友 đọc nhẹ.', ['他是我朋友。', 'Tā shì wǒ péngyou.', 'Anh ấy là bạn tôi.']),
      w('对不起', 'duìbuqǐ', 'xin lỗi', '不 ở giữa đọc nhẹ.', ['对不起！', 'Duìbuqǐ!', 'Xin lỗi!']),
      w('没关系', 'méi guānxi', 'không sao', 'Đáp lại lời xin lỗi.', ['—对不起！—没关系！', '—Duìbuqǐ! —Méi guānxi!', '—Xin lỗi! —Không sao!']),
      w('早上好', 'zǎoshang hǎo', 'chào buổi sáng', 'Dùng buổi sáng.', ['老师，早上好！', 'Lǎoshī, zǎoshang hǎo!', 'Em chào cô buổi sáng!']),
      w('晚安', 'wǎn’ān', 'chúc ngủ ngon', 'Chỉ nói trước khi đi ngủ hoặc chia tay buổi tối muộn.', ['妈妈，晚安！', 'Māma, wǎn’ān!', 'Mẹ ngủ ngon!'])
    ],
    kinds: ['listenPy', 'meaning', 'pinyin', 'listen', 'hanzi', 'match'],
    qs: [
      ['mc', 'Câu nào <b>sai</b>?', '你叫什么名字吗？', ['你叫什么名字？', '你好吗？', '你喝茶吗？'], 'Đã có 什么 thì không thêm 吗.'],
      ['mc', 'Bạn nói “对不起！” với em, em đáp?', '没关系！méi guānxi', ['不客气！bú kèqi', '谢谢！xièxie', '晚安！wǎn’ān'], 'Xin lỗi → 没关系; cảm ơn → 不客气.'],
      ['mc', 'Dấu ’ trong wǎn’ān dùng để làm gì?', 'Tách âm tiết: đọc wǎn + ān', ['Báo hiệu thanh nhẹ', 'Báo hiệu viết hoa', 'Không có ý nghĩa gì'], 'Nếu không có dấu, dễ đọc nhầm thành wǎ + nān.'],
      ['hear', '朋友', 'péngyou', ['pèngyǒu', 'péngyōu', 'pēngyou'], '朋友 péngyou – bạn bè (友 đọc nhẹ).'],
      ['hear', '什么', 'shénme', ['shènme', 'shēnme', 'shěnme'], '什么 shénme – gì.'],
      ['hear', '对不起', 'Xin lỗi', ['Không sao', 'Không có gì', 'Chúc ngủ ngon'], '对不起 duìbuqǐ – xin lỗi.'],
      ['order', 'Sắp xếp thành câu “Bạn tên là gì?”', ['你', '叫', '什么', '名字？'], '你叫什么名字？Nǐ jiào shénme míngzi?'],
      ['mc', 'Buổi sáng gặp cô giáo, em chào?', '老师，早上好！', ['老师，晚安！', '老师，没关系！', '老师，对不起！'], '早上好 = chào buổi sáng.'],
      ['mc', '“Tôi tên là Lan” nói là?', '我叫兰。Wǒ jiào Lán.', ['我名字兰。', '我是叫兰。', '叫我兰吗？'], 'Mẫu câu: 我叫 + tên.'],
      ['mc', 'Âm tiết “jue” đọc thế nào?', 'j + üe (môi tròn)', ['j + u + e như tiếng Việt', 'j + ie', 'zh + ue'], 'Sau j luôn là ü dù viết u.']
    ],
    hoithoai: {
      ctx: 'Ngày đầu tiên vào lớp tiếng Trung, em làm quen với bạn ngồi cạnh tên Lý Minh.', vai: 'Em đóng vai Tiểu Minh (小明 Xiǎo Míng), người Việt Nam.', ai: '👨 李明',
      luot: [
        { a: L('早上好！我叫李明。你叫什么名字？', 'Zǎoshang hǎo! Wǒ jiào Lǐ Míng. Nǐ jiào shénme míngzi?', 'Chào buổi sáng! Tôi tên là Lý Minh. Bạn tên là gì?'), o: [{ h: '早上好！我叫小明。', p: 'Zǎoshang hǎo! Wǒ jiào Xiǎo Míng.', v: 'Chào buổi sáng! Tôi tên là Tiểu Minh.', ok: 1, f: 'Chào lại rồi giới thiệu tên theo mẫu 我叫 + tên.' }, { h: '我叫什么名字。', p: 'Wǒ jiào shénme míngzi.', f: 'Đây là lặp lại câu hỏi. Phải thay 什么名字 bằng tên của mình.' }, { h: '晚安！', p: 'Wǎn’ān!', f: '晚安 là "chúc ngủ ngon", không dùng buổi sáng.' }] },
        { a: L('你是中国人吗？', 'Nǐ shì Zhōngguó rén ma?', 'Bạn là người Trung Quốc à?'), o: [{ h: '不是，我是越南人。', p: 'Bú shì, wǒ shì Yuènán rén.', ok: 1, f: 'Chuẩn! Nhớ đọc bú shì.' }, { h: '是，我是越南人。', p: 'Shì, wǒ shì Yuènán rén.', f: 'Mâu thuẫn: "phải" nhưng lại là người Việt Nam.' }, { h: '没关系。', p: 'Méi guānxi.', f: '没关系 để đáp lại lời xin lỗi.' }] },
        { a: L('他是我朋友，他叫大卫。', 'Tā shì wǒ péngyou, tā jiào Dàwèi.', 'Đây là bạn tôi, cậu ấy tên là David.'), o: [{ h: '你好！', p: 'Nǐ hǎo!', ok: 1, f: 'Được giới thiệu người mới thì chào 你好.' }, { h: '他叫什么名字？', p: 'Tā jiào shénme míngzi?', f: 'Lý Minh vừa nói tên rồi (大卫), hỏi lại là chưa nghe kỹ đó!' }, { h: '对不起！', p: 'Duìbuqǐ!', f: 'Không có gì phải xin lỗi cả.' }] },
        { a: L('哎呀，对不起！', 'Āiyā, duìbuqǐ!', 'Ối, xin lỗi! (lỡ làm đổ nước vào sách của em)'), o: [{ h: '没关系！', p: 'Méi guānxi!', ok: 1, f: 'Người ta xin lỗi thì đáp 没关系.' }, { h: '不客气！', p: 'Bú kèqi!', f: '不客气 đáp lại lời cảm ơn, không phải lời xin lỗi.' }, { h: '谢谢！', p: 'Xièxie!', f: 'Người ta làm đổ nước mà mình cảm ơn thì hơi lạ 😄' }] }
      ], ket: 'Em đã giới thiệu tên, quốc tịch và xử lý tình huống xin lỗi.'
    },
    tom: ['Đọc âm tiết theo 3 bước', 'Dấu cách âm ’ và viết hoa tên riêng', 'Câu hỏi với 什么', 'Chào theo thời gian trong ngày'],
    nguphap: 'Câu hỏi với 什么 (không thêm 吗); giới thiệu tên 我叫…', phatam: 'Đọc trôi chảy từ 2–3 âm tiết, thanh nhẹ trong 朋友, 名字, 什么',
    loi: ['Thêm 吗 vào câu đã có 什么', 'Nhầm 不客气 với 没关系', 'Đọc 晚安 thành wǎ-nān'],
    btvn: ['Đọc bảng luyện đọc 12 từ, che chữ Hán chỉ nhìn Pinyin', 'Tự giới thiệu: 你好！我叫…。我是越南人。', 'Ôn toàn bộ Ngày 1–6 để chuẩn bị kiểm tra tuần']
  };

  /* ================= NGÀY 7 ================= */
  const d7 = {
    n: 7, ten: 'Ôn tập tuần 1 và kiểm tra tổng hợp',
    muc: 'Hệ thống lại toàn bộ Pinyin, thanh điệu, biến điệu và 45 từ đã học; làm bài kiểm tra tổng hợp tuần 1 (20 câu).',
    hoc: `<h4>1. Sơ đồ kiến thức tuần 1</h4>${tbl(['Chủ đề', 'Điều cần nhớ'], [
        '<tr><td>Âm tiết</td><td>Thanh mẫu + vận mẫu + thanh điệu (m + a + ˇ = mǎ)</td></tr>',
        '<tr><td>4 thanh</td><td>1 ngang cao (5-5) · 2 đi lên (3-5) · 3 xuống rồi lên (2-1-4) · 4 rơi mạnh (5-1) · thanh nhẹ</td></tr>',
        '<tr><td>Bật hơi</td><td>b–p · d–t · g–k · j–q · zh–ch · z–c (âm sau bật hơi)</td></tr>',
        '<tr><td>Vị trí lưỡi</td><td>j q x mặt lưỡi · zh ch sh r uốn lưỡi · z c s đầu lưỡi thẳng</td></tr>',
        '<tr><td>Quy tắc viết</td><td>yi/wu/yu · ü sau j q x y viết u · iu = iou · ui = uei · un = uen</td></tr>',
        '<tr><td>Biến điệu</td><td>3+3 → 2+3 (ní hǎo) · 不 trước thanh 4 → bú · 一 trước thanh 4 → yí, trước 1/2/3 → yì</td></tr>',
        '<tr><td>Ngữ pháp</td><td>…吗？ · 不 + động từ · A 是 B · 们 · 很 + tính từ · 一个 · 什么 (không thêm 吗)</td></tr>'])}
      <h4>2. Các câu giao tiếp đã học (bấm nghe, đọc theo)</h4><div class="zh-read">${[['你好！', 'Nǐ hǎo!', 'Xin chào!'], ['你好吗？', 'Nǐ hǎo ma?', 'Bạn khỏe không?'], ['我很好，谢谢！', 'Wǒ hěn hǎo, xièxie!', 'Tôi khỏe, cảm ơn!'], ['不客气！', 'Bú kèqi!', 'Không có gì!'], ['对不起！', 'Duìbuqǐ!', 'Xin lỗi!'], ['没关系！', 'Méi guānxi!', 'Không sao!'], ['你叫什么名字？', 'Nǐ jiào shénme míngzi?', 'Bạn tên là gì?'], ['我叫小明。', 'Wǒ jiào Xiǎo Míng.', 'Tôi tên là Tiểu Minh.'], ['我是越南人。', 'Wǒ shì Yuènán rén.', 'Tôi là người Việt Nam.'], ['可以吗？', 'Kěyǐ ma?', 'Được không?'], ['我们一起吃。', 'Wǒmen yìqǐ chī.', 'Chúng ta cùng ăn.'], ['再见！', 'Zàijiàn!', 'Tạm biệt!']].map(([h, p, v]) => `<button class="zh-rd" data-say="${h}"><b>${h}</b><span>${p}</span><small>${v}</small></button>`).join('')}</div>
      ${tip('📝 Bài kiểm tra tuần gồm 20 câu trong 20 phút, lấy từ cả 6 ngày học. Muốn ôn kỹ hơn thì vào <a href="#/tieng-trung/tu-vung/weak">Thẻ từ vựng → Từ chưa nhớ</a> và <a href="#/tieng-trung/thanh-dieu">Luyện 4 thanh</a>.')}`,
    vocab: [],
    kinds: ['meaning', 'listen', 'pinyin', 'hanzi', 'listenPy', 'match', 'toneHear', 'toneSee'],
    qs: [
      ['mc', 'Cặp nào gồm một âm không bật hơi và một âm bật hơi tương ứng?', 'zh – ch', ['zh – sh', 'j – x', 'b – m'], 'Các cặp: b–p, d–t, g–k, j–q, zh–ch, z–c.'],
      ['mc', '不 trong 不要 (yào, thanh 4) đọc là?', 'bú', ['bù', 'bǔ', 'bū'], 'Trước thanh 4 → bú.'],
      ['mc', '一 trong 一年 (nián, thanh 2) đọc là?', 'yì', ['yí', 'yī', 'yǐ'], 'Trước thanh 1, 2, 3 → yì.']
    ],
    kt: { n: 20, min: 20 },
    hoithoai: {
      ctx: 'Em đi du lịch Bắc Kinh, vào một quán trà và làm quen với chị chủ quán.', vai: 'Chị chủ quán hỏi chuyện, em trả lời. Hội thoại tổng hợp cả tuần.', ai: '👩 老板 (chủ quán)',
      luot: [
        { a: L('你好！你叫什么名字？', 'Nǐ hǎo! Nǐ jiào shénme míngzi?', 'Chào em! Em tên là gì?'), o: [{ h: '你好！我叫小明。', p: 'Nǐ hǎo! Wǒ jiào Xiǎo Míng.', ok: 1, f: 'Chào lại và nói tên.' }, { h: '我叫什么名字？', p: 'Wǒ jiào shénme míngzi?', f: 'Đây là hỏi lại "tôi tên là gì?" 😄' }, { h: '没关系！', p: 'Méi guānxi!', f: 'Sai ngữ cảnh.' }] },
        { a: L('你是学生吗？', 'Nǐ shì xuésheng ma?', 'Em là sinh viên à?'), o: [{ h: '是，我是学生。', p: 'Shì, wǒ shì xuésheng.', ok: 1, f: 'Trả lời đầy đủ bằng câu A 是 B.' }, { h: '我不学生。', p: 'Wǒ bù xuésheng.', f: 'Thiếu 是. Phải nói 我不是学生 (bú shì).' }, { h: '学生吗。', p: 'Xuésheng ma.', f: 'Đây không phải câu trả lời.' }] },
        { a: L('你喝什么？', 'Nǐ hē shénme?', 'Em uống gì?'), o: [{ h: '我喝茶，谢谢！', p: 'Wǒ hē chá, xièxie!', ok: 1, f: 'Thay 什么 bằng thứ mình muốn: 我喝茶.' }, { h: '我喝什么。', p: 'Wǒ hē shénme.', f: 'Phải thay 什么 bằng tên đồ uống.' }, { h: '我卖茶。', p: 'Wǒ mài chá.', f: '卖 là bán! Em là khách nên không bán trà.' }] },
        { a: L('哎呀，对不起！', 'Āiyā, duìbuqǐ!', 'Ối, xin lỗi! (chị lỡ rót trà tràn ra bàn)'), o: [{ h: '没关系！', p: 'Méi guānxi!', ok: 1, f: 'Đáp lại lời xin lỗi.' }, { h: '不客气！', p: 'Bú kèqi!', f: 'Đáp lời cảm ơn mới dùng 不客气.' }, { h: '很好！', p: 'Hěn hǎo!', f: '"Rất tốt" khi người ta làm đổ trà thì hơi kỳ.' }] },
        { a: L('我们一起吃水果，可以吗？', 'Wǒmen yìqǐ chī shuǐguǒ, kěyǐ ma?', 'Mình cùng ăn trái cây nhé, được không?'), o: [{ h: '可以！谢谢！', p: 'Kěyǐ! Xièxie!', ok: 1, f: 'Đồng ý và cảm ơn.' }, { h: '不是！', p: 'Bú shì!', f: 'Trả lời 可以吗 thì dùng 可以 / 不可以.' }, { h: '一个。', p: 'Yí ge.', f: 'Chưa trả lời được câu hỏi.' }] },
        { a: L('不客气！再见！', 'Bú kèqi! Zàijiàn!', 'Không có gì! Tạm biệt em!'), o: [{ h: '再见！', p: 'Zàijiàn!', ok: 1, f: 'Xuất sắc! Em đã hoàn thành tuần đầu tiên 🎉' }, { h: '早上好！', p: 'Zǎoshang hǎo!', f: 'Chào khi gặp chứ không phải khi chia tay.' }, { h: '晚安！', p: 'Wǎn’ān!', f: '晚安 chỉ dùng trước khi đi ngủ.' }] }
      ], ket: 'Em đã dùng được gần hết các câu của tuần 1 trong một cuộc hội thoại thật.'
    },
    tom: ['Ôn toàn bộ Pinyin, thanh điệu, biến điệu', 'Ôn 45 từ vựng tuần 1', 'Kiểm tra tổng hợp 20 câu'],
    nguphap: 'Ôn: 吗, 不, 是, 们, 很, 个, 什么', phatam: 'Ôn toàn bộ thanh mẫu, vận mẫu, 4 thanh và biến điệu',
    loi: ['Xem lại các câu sai trong bài kiểm tra tuần', 'Luyện lại cặp bật hơi và nhóm zh/z/j nếu còn nhầm'],
    btvn: ['Nếu dưới 7 điểm: làm lại bài kiểm tra sau khi ôn thẻ "Từ chưa nhớ"', 'Ghi âm đoạn tự giới thiệu 30 giây bằng tiếng Trung', 'Sẵn sàng cho Tuần 2: chào hỏi và giới thiệu bản thân']
  };

  window.PLT_ZH = { plan, stages, pinyin, days: [d1, d2, d3, d4, d5, d6, d7] };
})();

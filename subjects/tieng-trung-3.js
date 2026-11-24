/* PLT-Edu · Tiếng Trung – Giai đoạn 3: Giao tiếp đời sống (Ngày 15–21) */
(function () {
  'use strict';
  const { w, L, T, tbl, tip, sp, ex, F } = window.PLT_ZH.H;
  const K = ['meaning', 'listen', 'pinyin', 'hanzi', 'listenPy', 'match'];
  const reads = (a) => `<div class="zh-read">${a.map(([h, p, v]) => `<button class="zh-rd" data-say="${h}"><b>${h}</b><span>${p}</span><small>${v}</small></button>`).join('')}</div>`;

  /* ================= NGÀY 15 ================= */
  const d15 = {
    n: 15, ten: 'Hỏi đường và phương hướng', kinds: K,
    muc: 'Hỏi một nơi ở đâu, hỏi đường đi, hiểu chỉ dẫn trái – phải – thẳng – bên cạnh, xa – gần.',
    hoc: `<h4>1. Hỏi nơi chốn: … 在哪儿？</h4>${F(['Nơi chốn', '+', '在<small>zài – ở</small>', '+', '哪儿<small>nǎr – đâu</small>？'])}<ul>${ex('请问，洗手间在哪儿？', 'Qǐngwèn, xǐshǒujiān zài nǎr?', 'Xin hỏi, nhà vệ sinh ở đâu?')}${ex('银行在前面。', 'Yínháng zài qiánmian.', 'Ngân hàng ở phía trước.')}</ul>
      <h4>2. Hỏi đường đi: 怎么走？</h4><ul>${ex('去地铁站怎么走？', 'Qù dìtiězhàn zěnme zǒu?', 'Đến ga tàu điện ngầm đi thế nào?')}</ul>
      <h4>3. Chỉ đường: 往 + hướng + 走</h4>${tbl(['Câu', 'Nghĩa', 'Nghe'], [['一直往前走', 'Yìzhí wǎng qián zǒu', 'Đi thẳng về phía trước'], ['往左走', 'Wǎng zuǒ zǒu', 'Rẽ trái'], ['往右走', 'Wǎng yòu zǒu', 'Rẽ phải'], ['在银行旁边', 'Zài yínháng pángbiān', 'Ở bên cạnh ngân hàng']].map(([h, p, v]) => `<tr><td><b>${h}</b><br><span class="zh-wp">${p}</span></td><td>${v}</td><td>${sp(h)}</td></tr>`))}
      <h4>4. Vị trí: 在 + nơi + 旁边 / 前面 / 后面</h4><p>Tiếng Trung đặt <b>mốc trước, vị trí sau</b> (ngược tiếng Việt): 银行旁边 = bên cạnh ngân hàng; 超市后面 = phía sau siêu thị. ${sp('银行旁边|超市后面')}</p>
      <h4>5. Xa hay gần?</h4><ul>${ex('远吗？', 'Yuǎn ma?', 'Có xa không?')}${ex('不远，很近。', 'Bù yuǎn, hěn jìn.', 'Không xa, rất gần.')}</ul>
      ${tip('🏦 Từ hữu ích: 银行 yínháng (ngân hàng) · 超市 chāoshì (siêu thị) · 医院 yīyuàn (bệnh viện) · 地铁站 dìtiězhàn (ga tàu điện ngầm) · 酒店 jiǔdiàn (khách sạn).')}`,
    vocab: [
      w('在', 'zài', 'ở, tại', 'Nơi + 在 + vị trí; hoặc người + 在 + nơi.', ['我在银行。', 'Wǒ zài yínháng.', 'Tôi ở ngân hàng.']),
      w('哪儿', 'nǎr', 'ở đâu', 'Miền Nam TQ hay nói 哪里 nǎlǐ.', ['洗手间在哪儿？', 'Xǐshǒujiān zài nǎr?', 'Nhà vệ sinh ở đâu?']),
      w('怎么', 'zěnme', 'thế nào, làm sao', '怎么 + động từ: hỏi cách làm.', ['怎么走？', 'Zěnme zǒu?', 'Đi thế nào?']),
      w('走', 'zǒu', 'đi (bộ)', '', ['往前走。', 'Wǎng qián zǒu.', 'Đi về phía trước.']),
      w('往', 'wǎng', 'về phía, hướng', '往 + hướng + 走.', ['往右走。', 'Wǎng yòu zǒu.', 'Rẽ phải.']),
      w('左', 'zuǒ', 'trái', '左边 zuǒbian: bên trái.', ['往左走。', 'Wǎng zuǒ zǒu.', 'Rẽ trái.']),
      w('右', 'yòu', 'phải', '右边 yòubian: bên phải.', ['银行在右边。', 'Yínháng zài yòubian.', 'Ngân hàng ở bên phải.']),
      w('前面', 'qiánmian', 'phía trước', '后面 hòumian: phía sau.', ['超市在前面。', 'Chāoshì zài qiánmian.', 'Siêu thị ở phía trước.']),
      w('旁边', 'pángbiān', 'bên cạnh', 'Mốc + 旁边.', ['洗手间在银行旁边。', 'Xǐshǒujiān zài yínháng pángbiān.', 'Nhà vệ sinh ở cạnh ngân hàng.']),
      w('一直', 'yìzhí', 'thẳng; liên tục', '', ['一直往前走。', 'Yìzhí wǎng qián zǒu.', 'Cứ đi thẳng.']),
      w('远', 'yuǎn', 'xa', 'Trái nghĩa: 近 jìn (gần).', ['远吗？', 'Yuǎn ma?', 'Có xa không?']),
      w('近', 'jìn', 'gần', '', ['很近。', 'Hěn jìn.', 'Rất gần.']),
      w('银行', 'yínháng', 'ngân hàng', '', ['银行在哪儿？', 'Yínháng zài nǎr?', 'Ngân hàng ở đâu?']),
      w('洗手间', 'xǐshǒujiān', 'nhà vệ sinh', 'Lịch sự hơn 厕所 cèsuǒ.', ['请问，洗手间在哪儿？', 'Qǐngwèn, xǐshǒujiān zài nǎr?', 'Xin hỏi, nhà vệ sinh ở đâu?'])
    ],
    qs: [
      ['mc', '“Ngân hàng ở đâu?” đúng là?', '银行在哪儿？', ['在哪儿银行？', '银行哪儿在？', '哪儿是银行吗？'], 'Nơi + 在 + 哪儿.'],
      ['mc', '“Rẽ trái” là?', '往左走', ['往右走', '一直走', '左往走'], '往 + 左 + 走.'],
      ['mc', '“Bên cạnh siêu thị” là?', '超市旁边', ['旁边超市', '超市的旁', '在旁边超'], 'Mốc đứng trước, vị trí đứng sau.'],
      ['mc', '“去机场怎么走？” hỏi gì?', 'Đến sân bay đi đường nào?', ['Sân bay có xa không?', 'Sân bay ở bên phải à?', 'Có đi sân bay không?'], '怎么走 = đi thế nào.'],
      ['hear', '一直往前走。', 'Cứ đi thẳng.', ['Rẽ phải.', 'Rẽ trái.', 'Ở phía sau.'], '一直往前走 = đi thẳng.'],
      ['hear', '不远，很近。', 'Không xa, rất gần.', ['Rất xa.', 'Ở bên cạnh.', 'Đi thẳng.'], '远 xa · 近 gần.'],
      ['hear', '往右走。', 'Rẽ phải.', ['Rẽ trái.', 'Đi thẳng.', 'Quay lại.'], '右 yòu = phải.'],
      ['order', 'Sắp xếp: “Xin hỏi, nhà vệ sinh ở đâu?”', ['请问，', '洗手间', '在', '哪儿？'], '请问，洗手间在哪儿？'],
      ['mc', '左 và 右, chữ nào là “phải”?', '右 yòu', ['左 zuǒ', 'Cả hai', 'Không chữ nào'], '左 trái · 右 phải.']
    ],
    hoithoai: {
      ctx: 'Em ở Bắc Kinh, cần tìm Ngân hàng Trung Quốc để đổi tiền. Một cô gái thấy em loay hoay nên đến hỏi.', vai: 'Cô gái hỏi, em hỏi đường.', ai: '👩 路人 (người đi đường)',
      luot: [
        T(['你好！要帮忙吗？', 'Nǐ hǎo! Yào bāngmáng ma?', 'Chào bạn! Cần giúp không?'], ['请问，中国银行在哪儿？', 'Qǐngwèn, Zhōngguó Yínháng zài nǎr?', 'Xin hỏi, Ngân hàng Trung Quốc ở đâu?', 'Mở đầu bằng 请问 cho lịch sự.'], ['中国银行在哪儿吗？', 'Zhōngguó Yínháng zài nǎr ma?', 'Có 哪儿 rồi thì không thêm 吗.'], ['我在银行。', 'Wǒ zài yínháng.', '"Tôi đang ở ngân hàng" – ngược ý.']),
        T(['中国银行？很近。', 'Zhōngguó Yínháng? Hěn jìn.', 'Ngân hàng Trung Quốc à? Gần lắm.'], ['怎么走？', 'Zěnme zǒu?', 'Đi thế nào?', 'Hỏi đường đi.'], ['远吗？', 'Yuǎn ma?', 'Cô vừa nói "rất gần" rồi mà.'], ['怎么样？', 'Zěnmeyàng?', '怎么样 = thế nào (đánh giá), không phải hỏi đường.']),
        T(['一直往前走，到路口往右走。', 'Yìzhí wǎng qián zǒu, dào lùkǒu wǎng yòu zǒu.', 'Cứ đi thẳng, đến ngã tư thì rẽ phải.'], ['往右走，对吗？', 'Wǎng yòu zǒu, duì ma?', 'Rẽ phải, đúng không?', 'Xác nhận lại chỉ dẫn – thói quen tốt! 对 = đúng.'], ['往左走，对吗？', 'Wǎng zuǒ zǒu, duì ma?', 'Cô nói 右 (phải) chứ không phải 左.'], ['一直往后走？', 'Yìzhí wǎng hòu zǒu?', 'Cô nói 往前 (đi thẳng về trước).']),
        T(['对！银行在超市旁边。', 'Duì! Yínháng zài chāoshì pángbiān.', 'Đúng! Ngân hàng ở cạnh siêu thị.'], ['谢谢您！', 'Xièxie nín!', 'Cảm ơn chị!', 'Lịch sự với người giúp mình.'], ['没关系！', 'Méi guānxi!', '没关系 đáp lời xin lỗi.'], ['超市在哪儿？', 'Chāoshì zài nǎr?', 'Cô vừa chỉ rồi mà.'])
      ], ket: 'Em đã hỏi đường, nghe hiểu chỉ dẫn và xác nhận lại.'
    },
    tom: ['…在哪儿？', '怎么走？', '往 + hướng + 走', 'Mốc + 旁边/前面/后面', '远/近'],
    nguphap: 'Nơi + 在 + 哪儿; 怎么 + động từ; 往 + hướng + 走; mốc + từ chỉ vị trí', phatam: 'zài/zěnme (z); zuǒ/yòu; nǎr (âm uốn lưỡi -r)',
    loi: ['Nói 旁边银行 (ngược trật tự)', 'Nhầm 左/右', 'Thêm 吗 vào câu có 哪儿'],
    btvn: ['Chỉ đường từ nhà em đến chợ gần nhất bằng tiếng Trung (3–4 câu)', 'Luyện 4 câu: 往左走, 往右走, 一直往前走, 在…旁边', 'Hỏi 3 địa điểm: 银行/超市/洗手间在哪儿？']
  };

  /* ================= NGÀY 16 ================= */
  const d16 = {
    n: 16, ten: 'Đi taxi và phương tiện giao thông', kinds: K,
    muc: 'Nói đi đâu bằng phương tiện gì, bắt taxi, nói điểm đến, bảo dừng xe, hỏi thời gian và giá.',
    hoc: `<h4>1. Đi đâu: 去 + nơi</h4><ul>${ex('你去哪儿？', 'Nǐ qù nǎr?', 'Bạn đi đâu?')}${ex('我去机场。', 'Wǒ qù jīchǎng.', 'Tôi đi sân bay.')}</ul>
      <h4>2. Đi bằng gì: 坐 + phương tiện + 去 + nơi</h4>${F(['我', '坐<small>zuò</small>', '地铁<small>phương tiện</small>', '去', '公司<small>nơi đến</small>'])}<ul>${ex('我坐地铁去公司。', 'Wǒ zuò dìtiě qù gōngsī.', 'Tôi đi tàu điện ngầm đến công ty.')}${ex('我们打车去吧！', 'Wǒmen dǎchē qù ba!', 'Chúng ta bắt taxi đi!')}</ul>${tip('🔁 Ngược tiếng Việt: tiếng Việt nói "đi công ty bằng tàu điện", tiếng Trung đặt phương tiện TRƯỚC nơi đến. Xe đạp, xe máy dùng 骑 qí (cưỡi): 骑摩托车 qí mótuōchē.')}
      <h4>3. Trên taxi</h4>${reads([['师傅，去机场。', 'Shīfu, qù jīchǎng.', 'Bác tài, đi sân bay.'], ['去这个酒店。', 'Qù zhège jiǔdiàn.', 'Đến khách sạn này.'], ['多长时间？', 'Duō cháng shíjiān?', 'Mất bao lâu?'], ['请在这儿停。', 'Qǐng zài zhèr tíng.', 'Làm ơn dừng ở đây.'], ['到了！', 'Dào le!', 'Đến rồi!']])}
      <p class="small">Gọi tài xế (và thợ) là <b>师傅</b> shīfu – cách gọi lịch sự, thân thiện. Ứng dụng gọi xe phổ biến: 滴滴 Dīdī.</p>`,
    vocab: [
      w('去', 'qù', 'đi (đến đâu)', '去 + nơi.', ['你去哪儿？', 'Nǐ qù nǎr?', 'Bạn đi đâu?']),
      w('坐', 'zuò', 'ngồi; đi (xe, tàu, máy bay)', '坐 + phương tiện.', ['我坐公交车。', 'Wǒ zuò gōngjiāochē.', 'Tôi đi xe buýt.']),
      w('打车', 'dǎchē', 'bắt taxi', '', ['我们打车去吧！', 'Wǒmen dǎchē qù ba!', 'Chúng ta bắt taxi đi!']),
      w('出租车', 'chūzūchē', 'xe taxi', '', ['我坐出租车去机场。', 'Wǒ zuò chūzūchē qù jīchǎng.', 'Tôi đi taxi ra sân bay.']),
      w('地铁', 'dìtiě', 'tàu điện ngầm', '地铁站: ga tàu điện.', ['坐地铁很方便。', 'Zuò dìtiě hěn fāngbiàn.', 'Đi tàu điện ngầm rất tiện.']),
      w('公交车', 'gōngjiāochē', 'xe buýt', '', ['坐公交车很便宜。', 'Zuò gōngjiāochē hěn piányi.', 'Đi xe buýt rất rẻ.']),
      w('师傅', 'shīfu', 'bác tài, thợ (cách gọi)', '', ['师傅，去机场。', 'Shīfu, qù jīchǎng.', 'Bác tài, đi sân bay.']),
      w('到', 'dào', 'đến, tới', '', ['到了！', 'Dào le!', 'Đến rồi!']),
      w('机场', 'jīchǎng', 'sân bay', '', ['去机场多少钱？', 'Qù jīchǎng duōshao qián?', 'Ra sân bay bao nhiêu tiền?']),
      w('酒店', 'jiǔdiàn', 'khách sạn', '', ['师傅，去这个酒店。', 'Shīfu, qù zhège jiǔdiàn.', 'Bác tài, đến khách sạn này.']),
      w('停', 'tíng', 'dừng', '', ['请在这儿停。', 'Qǐng zài zhèr tíng.', 'Làm ơn dừng ở đây.']),
      w('这儿', 'zhèr', 'ở đây', 'Trái nghĩa: 那儿 nàr (ở đó).', ['在这儿。', 'Zài zhèr.', 'Ở đây.'])
    ],
    qs: [
      ['mc', '“Tôi đi tàu điện ngầm đến công ty” đúng là?', '我坐地铁去公司。', ['我去公司坐地铁。', '我坐公司去地铁。', '我地铁坐去公司。'], 'Phương tiện đứng trước nơi đến.'],
      ['mc', 'Lên taxi, em gọi tài xế là?', '师傅', ['老师', '先生们', '服务员'], '师傅 shīfu: cách gọi tài xế, thợ.'],
      ['mc', '“Làm ơn dừng ở đây” là?', '请在这儿停。', ['请停在哪儿？', '请在那儿走。', '这儿请停吗？'], '在这儿 = ở đây; 停 = dừng.'],
      ['mc', '“Mất bao lâu?” là?', '多长时间？', ['多少钱？', '几点？', '多大？'], '多长时间 = bao lâu.'],
      ['hear', '到了！', 'Đến rồi!', ['Dừng lại!', 'Đi thôi!', 'Rẽ phải!'], '到了 dào le.'],
      ['hear', '我们打车去吧！', 'Chúng ta bắt taxi đi!', ['Chúng ta đi xe buýt đi!', 'Chúng ta đi bộ đi!', 'Chúng ta đến rồi!'], '打车 = bắt taxi.'],
      ['hear', '去机场多少钱？', 'Ra sân bay bao nhiêu tiền?', ['Ra sân bay mất bao lâu?', 'Sân bay ở đâu?', 'Có đi sân bay không?'], '多少钱 = bao nhiêu tiền.'],
      ['order', 'Sắp xếp: “Bác tài, đến khách sạn này.”', ['师傅，', '去', '这个', '酒店。'], '师傅，去这个酒店。'],
      ['mc', 'Đi xe máy dùng động từ nào?', '骑 qí', ['坐 zuò', '开 kāi', '走 zǒu'], 'Xe 2 bánh dùng 骑 (cưỡi).']
    ],
    hoithoai: {
      ctx: 'Em vừa ra khỏi khách sạn ở Thượng Hải, lên một chiếc taxi để ra sân bay Phố Đông.', vai: 'Bác tài hỏi, em trả lời.', ai: '🚕 司机师傅',
      luot: [
        T(['你好！去哪儿？', 'Nǐ hǎo! Qù nǎr?', 'Chào bạn! Đi đâu?'], ['师傅，去浦东机场。', 'Shīfu, qù Pǔdōng Jīchǎng.', 'Bác tài, ra sân bay Phố Đông.', 'Gọi 师傅 rồi nói điểm đến.'], ['我坐机场。', 'Wǒ zuò jīchǎng.', '坐 đi với phương tiện, không đi với nơi đến.'], ['机场在哪儿？', 'Jīchǎng zài nǎr?', 'Em là khách, cần nói điểm đến.']),
        T(['好的。机场很远。', 'Hǎo de. Jīchǎng hěn yuǎn.', 'Được. Sân bay xa lắm.'], ['多长时间？', 'Duō cháng shíjiān?', 'Mất bao lâu?', 'Hỏi thời gian di chuyển.'], ['很近吗？', 'Hěn jìn ma?', 'Bác vừa nói xa rồi.'], ['几岁？', 'Jǐ suì?', 'Lạc đề 😄']),
        T(['四十分钟左右。', 'Sìshí fēnzhōng zuǒyòu.', 'Khoảng 40 phút.'], ['好的。多少钱？', 'Hǎo de. Duōshao qián?', 'Vâng. Bao nhiêu tiền ạ?', 'Hỏi giá trước cho chắc.'], ['四十块？', 'Sìshí kuài?', 'Bác nói 40 phút, không phải 40 tệ.'], ['太贵了！', 'Tài guì le!', 'Chưa biết giá mà.']),
        T(['一百五十块左右。到了，在哪儿停？', 'Yìbǎi wǔshí kuài zuǒyòu. Dào le, zài nǎr tíng?', 'Khoảng 150 tệ. … Đến rồi, dừng ở đâu?'], ['在这儿停吧，谢谢师傅！', 'Zài zhèr tíng ba, xièxie shīfu!', 'Dừng ở đây ạ, cảm ơn bác!', 'Lịch sự và rõ ràng.'], ['在哪儿停？', 'Zài nǎr tíng?', 'Bác đang hỏi em mà.'], ['往左走。', 'Wǎng zuǒ zǒu.', 'Đến nơi rồi, cần nói dừng ở đâu.']),
        T(['一百五十二块。现金还是微信？', 'Yìbǎi wǔshí’èr kuài. Xiànjīn háishi Wēixìn?', '152 tệ. Tiền mặt hay WeChat?'], ['微信。给您。', 'Wēixìn. Gěi nín.', 'WeChat. Gửi bác.', '给您 = gửi bác (khi đưa tiền, đồ).'], ['二百块。', 'Èrbǎi kuài.', 'Bác hỏi cách trả tiền.'], ['不客气。', 'Bú kèqi.', 'Lạc đề.'])
      ], ket: 'Em đã đi taxi: nói điểm đến, hỏi thời gian, giá, bảo dừng xe và trả tiền.'
    },
    tom: ['去 + nơi', '坐 + phương tiện + 去 + nơi', 'Câu dùng trên taxi', '师傅'],
    nguphap: '坐/骑 + phương tiện + 去 + nơi; 在这儿 + động từ; 多长时间', phatam: 'chūzūchē; dìtiě; shīfu',
    loi: ['Đặt phương tiện sau nơi đến', 'Dùng 坐 cho xe máy, xe đạp', 'Nghe nhầm 分钟 (phút) với 块 (tệ)'],
    btvn: ['Nói em đi làm bằng phương tiện gì, mất bao lâu', 'Tập 5 câu trên taxi cho đến khi thuộc', 'Tìm hiểu ứng dụng 滴滴 (Didi) nếu sắp sang Trung Quốc']
  };

  /* ================= NGÀY 17 ================= */
  const d17 = {
    n: 17, ten: 'Công việc, nghề nghiệp và nơi làm việc', kinds: K,
    muc: 'Hỏi và nói về nghề nghiệp, nơi làm việc, giờ đi làm – tan làm, mức độ bận rộn.',
    hoc: `<h4>1. Hỏi nghề nghiệp</h4><ul>${ex('你做什么工作？', 'Nǐ zuò shénme gōngzuò?', 'Bạn làm nghề gì?')}${ex('我是工程师。', 'Wǒ shì gōngchéngshī.', 'Tôi là kỹ sư.')}</ul>
      <h4>2. Làm ở đâu: 在 + nơi + 工作 (rất hay sai!)</h4>${F(['我', '在<small>ở</small>', '银行<small>nơi</small>', '工作<small>động từ</small>'])}<ul>${ex('我在银行工作。', 'Wǒ zài yínháng gōngzuò.', 'Tôi làm việc ở ngân hàng.')}</ul>${tip('⚠️ Tiếng Việt: "làm việc <b>ở ngân hàng</b>". Tiếng Trung: "<b>ở ngân hàng</b> làm việc". ✘ 我工作在银行 · ✔ 我在银行工作.')}
      <h4>3. Một số nghề</h4>${tbl(['Chữ Hán', 'Pinyin', 'Nghĩa', 'Nghe'], [['老师', 'lǎoshī', 'giáo viên'], ['医生', 'yīshēng', 'bác sĩ'], ['工程师', 'gōngchéngshī', 'kỹ sư'], ['经理', 'jīnglǐ', 'giám đốc, quản lý'], ['职员', 'zhíyuán', 'nhân viên văn phòng'], ['老板', 'lǎobǎn', 'ông chủ'], ['司机', 'sījī', 'tài xế']].map(([c, p, v]) => `<tr><td><b class="zh-hz">${c}</b></td><td>${p}</td><td>${v}</td><td>${sp(c)}</td></tr>`))}<p class="small">Kỹ sư IT: IT工程师 · lập trình viên: 程序员 chéngxùyuán.</p>
      <h4>4. Giờ làm việc và mức độ bận</h4><ul>${ex('你几点上班？', 'Nǐ jǐ diǎn shàngbān?', 'Mấy giờ bạn đi làm?')}${ex('我五点下班。', 'Wǒ wǔ diǎn xiàbān.', 'Tôi tan làm lúc 5 giờ.')}${ex('工作忙吗？——不太忙。', 'Gōngzuò máng ma? — Bú tài máng.', 'Công việc bận không? — Không bận lắm.')}</ul><p class="small">不太 + tính từ = "không … lắm" (nói giảm nhẹ, rất hay dùng).</p>`,
    vocab: [
      w('工作', 'gōngzuò', 'công việc; làm việc', '', ['你做什么工作？', 'Nǐ zuò shénme gōngzuò?', 'Bạn làm nghề gì?']),
      w('做', 'zuò', 'làm', '', ['你在公司做什么？', 'Nǐ zài gōngsī zuò shénme?', 'Bạn làm gì ở công ty?']),
      w('公司', 'gōngsī', 'công ty', 'Lượng từ: 一家公司.', ['我在一家公司工作。', 'Wǒ zài yì jiā gōngsī gōngzuò.', 'Tôi làm ở một công ty.']),
      w('医生', 'yīshēng', 'bác sĩ', '', ['我妈妈是医生。', 'Wǒ māma shì yīshēng.', 'Mẹ tôi là bác sĩ.']),
      w('工程师', 'gōngchéngshī', 'kỹ sư', '', ['我是IT工程师。', 'Wǒ shì IT gōngchéngshī.', 'Tôi là kỹ sư IT.']),
      w('经理', 'jīnglǐ', 'giám đốc, quản lý', 'Họ + 经理: 王经理.', ['王经理，您好！', 'Wáng jīnglǐ, nín hǎo!', 'Chào giám đốc Vương!']),
      w('职员', 'zhíyuán', 'nhân viên (văn phòng)', '', ['我是银行职员。', 'Wǒ shì yínháng zhíyuán.', 'Tôi là nhân viên ngân hàng.']),
      w('上班', 'shàngbān', 'đi làm (vào ca)', '', ['我八点上班。', 'Wǒ bā diǎn shàngbān.', 'Tôi đi làm lúc 8 giờ.']),
      w('下班', 'xiàbān', 'tan làm', '', ['你几点下班？', 'Nǐ jǐ diǎn xiàbān?', 'Mấy giờ bạn tan làm?']),
      w('忙', 'máng', 'bận', '', ['你忙吗？', 'Nǐ máng ma?', 'Bạn bận không?']),
      w('累', 'lèi', 'mệt', '', ['今天很累。', 'Jīntiān hěn lèi.', 'Hôm nay rất mệt.']),
      w('老板', 'lǎobǎn', 'ông chủ, chủ cửa hàng', '', ['他是我的老板。', 'Tā shì wǒ de lǎobǎn.', 'Ông ấy là sếp tôi.'])
    ],
    qs: [
      ['mc', '“Tôi làm việc ở ngân hàng” đúng là?', '我在银行工作。', ['我工作在银行。', '我银行在工作。', '在银行我工作是。'], '在 + nơi đứng TRƯỚC động từ.'],
      ['mc', '“Bạn làm nghề gì?” là?', '你做什么工作？', ['你工作什么做？', '你是什么工作吗？', '什么你做工作？'], 'Mẫu cố định: 你做什么工作？'],
      ['mc', '“Không bận lắm” là?', '不太忙', ['太不忙', '不忙太', '很不忙了'], '不太 + tính từ.'],
      ['mc', '下班 nghĩa là?', 'tan làm', ['đi làm', 'tăng ca', 'nghỉ phép'], '上班 đi làm · 下班 tan làm.'],
      ['hear', '你几点上班？', 'Mấy giờ bạn đi làm?', ['Mấy giờ bạn tan làm?', 'Bạn làm nghề gì?', 'Bạn bận không?'], '上班 = đi làm.'],
      ['hear', '我是IT工程师。', 'Tôi là kỹ sư IT.', ['Tôi là giám đốc.', 'Tôi là bác sĩ.', 'Tôi là nhân viên ngân hàng.'], '工程师 = kỹ sư.'],
      ['hear', '今天很累。', 'Hôm nay rất mệt.', ['Hôm nay rất bận.', 'Hôm nay không đi làm.', 'Hôm nay rất vui.'], '累 lèi = mệt.'],
      ['order', 'Sắp xếp: “Mẹ tôi làm việc ở bệnh viện.”', ['我妈妈', '在', '医院', '工作。'], '我妈妈在医院工作。(医院 yīyuàn: bệnh viện)'],
      ['mc', 'Gọi giám đốc họ Vương lịch sự là?', '王经理', ['经理王', '王老板们', '王的经理'], 'Họ + chức danh.']
    ],
    hoithoai: {
      ctx: 'Em dự tiệc kết nối doanh nghiệp, gặp anh Lưu (刘先生), một doanh nhân Trung Quốc.', vai: 'Anh Lưu hỏi về công việc của em.', ai: '👨‍💼 刘先生',
      luot: [
        T(['你做什么工作？', 'Nǐ zuò shénme gōngzuò?', 'Anh làm nghề gì?'], ['我在银行工作，是IT工程师。', 'Wǒ zài yínháng gōngzuò, shì IT gōngchéngshī.', 'Tôi làm ở ngân hàng, là kỹ sư IT.', '在 + nơi + 工作, rồi nói nghề.'], ['我工作在银行。', 'Wǒ gōngzuò zài yínháng.', 'Sai trật tự: 在银行 phải đứng trước 工作.'], ['我做什么工作。', 'Wǒ zuò shénme gōngzuò.', 'Phải thay 什么 bằng nghề của mình.']),
        T(['你每天几点上班？', 'Nǐ měitiān jǐ diǎn shàngbān?', 'Mỗi ngày anh đi làm lúc mấy giờ?'], ['我早上七点半上班。', 'Wǒ zǎoshang qī diǎn bàn shàngbān.', 'Tôi đi làm lúc 7 giờ rưỡi sáng.', 'Thời gian đứng TRƯỚC động từ.'], ['我上班七点半。', 'Wǒ shàngbān qī diǎn bàn.', 'Thời gian phải đứng trước 上班.'], ['我七点半岁。', 'Wǒ qī diǎn bàn suì.', '😄 Nhầm 岁.']),
        T(['工作忙吗？', 'Gōngzuò máng ma?', 'Công việc có bận không?'], ['很忙，也很累，可是我很喜欢。', 'Hěn máng, yě hěn lèi, kěshì wǒ hěn xǐhuan.', 'Rất bận, cũng mệt, nhưng tôi rất thích.', '可是 = nhưng.'], ['很忙吗？', 'Hěn máng ma?', 'Đây là hỏi lại.'], ['太忙了吗！', 'Tài máng le ma!', 'Câu không đúng ngữ pháp.']),
        T(['我也很忙。我是一家电脑公司的经理。', 'Wǒ yě hěn máng. Wǒ shì yì jiā diànnǎo gōngsī de jīnglǐ.', 'Tôi cũng bận lắm. Tôi là giám đốc một công ty máy tính.'], ['真的吗？很高兴认识您，刘经理！', 'Zhēn de ma? Hěn gāoxìng rènshi nín, Liú jīnglǐ!', 'Thật à? Rất vui được quen anh, giám đốc Lưu!', 'Gọi họ + chức danh: rất chuyên nghiệp.'], ['经理刘，你好。', 'Jīnglǐ Liú, nǐ hǎo.', 'Phải là họ + chức danh: 刘经理.'], ['我也是经理吗？', 'Wǒ yě shì jīnglǐ ma?', 'Lạc đề.'])
      ], ket: 'Em đã giới thiệu nghề nghiệp, nơi làm việc, giờ đi làm và xưng hô chuyên nghiệp.'
    },
    tom: ['Hỏi nghề 你做什么工作？', '在 + nơi + 工作', 'Tên nghề', '上班/下班, 忙/累', '不太 + tính từ'],
    nguphap: '在 + nơi + động từ; thời gian trước động từ; 不太 + tính từ', phatam: 'gōngzuò/gōngsī; zhíyuán; shàngbān',
    loi: ['Nói 我工作在…', 'Đặt giờ sau động từ', 'Nhầm 上班/下班'],
    btvn: ['Giới thiệu công việc của em trong 4 câu', 'Giới thiệu nghề của 3 người thân', 'Đặt 3 câu với 不太']
  };

  /* ================= NGÀY 18 ================= */
  const d18 = {
    n: 18, ten: 'Sở thích và hoạt động hằng ngày', kinds: K,
    muc: 'Nói sở thích với 喜欢, kể thói quen hằng ngày theo đúng trật tự thời gian.',
    hoc: `<h4>1. 喜欢 xǐhuan + động từ / danh từ</h4><ul>${ex('我喜欢看电影。', 'Wǒ xǐhuan kàn diànyǐng.', 'Tôi thích xem phim.')}${ex('你喜欢什么运动？', 'Nǐ xǐhuan shénme yùndòng?', 'Bạn thích môn thể thao nào?')}${ex('我不喜欢跑步。', 'Wǒ bù xǐhuan pǎobù.', 'Tôi không thích chạy bộ.')}</ul>
      <h4>2. Hoạt động thường ngày</h4>${reads([['看书', 'kàn shū', 'đọc sách'], ['看电影', 'kàn diànyǐng', 'xem phim'], ['听音乐', 'tīng yīnyuè', 'nghe nhạc'], ['跑步', 'pǎobù', 'chạy bộ'], ['游泳', 'yóuyǒng', 'bơi'], ['上网', 'shàngwǎng', 'lên mạng'], ['起床', 'qǐchuáng', 'thức dậy'], ['睡觉', 'shuìjiào', 'đi ngủ']])}
      <h4>3. Kể một ngày: Chủ ngữ + thời gian + động từ</h4><ul>${ex('我每天六点起床。', 'Wǒ měitiān liù diǎn qǐchuáng.', 'Mỗi ngày tôi dậy lúc 6 giờ.')}${ex('晚上我常常看书。', 'Wǎnshang wǒ chángcháng kàn shū.', 'Buổi tối tôi thường đọc sách.')}${ex('我十一点睡觉。', 'Wǒ shíyī diǎn shuìjiào.', 'Tôi đi ngủ lúc 11 giờ.')}</ul>
      ${tip('💡 Tần suất: 每天 měitiān (mỗi ngày) · 常常 chángcháng (thường xuyên) · 有时候 yǒushíhou (thỉnh thoảng). Tất cả đứng TRƯỚC động từ.')}`,
    vocab: [
      w('喜欢', 'xǐhuan', 'thích', '喜欢 + động từ/danh từ.', ['我喜欢看电影。', 'Wǒ xǐhuan kàn diànyǐng.', 'Tôi thích xem phim.']),
      w('看', 'kàn', 'xem, nhìn, đọc', '', ['我在看书。', 'Wǒ zài kàn shū.', 'Tôi đang đọc sách.']),
      w('书', 'shū', 'sách', '', ['这本书很有意思。', 'Zhè běn shū hěn yǒu yìsi.', 'Cuốn sách này rất hay.']),
      w('电影', 'diànyǐng', 'phim (điện ảnh)', '', ['我们一起看电影吧！', 'Wǒmen yìqǐ kàn diànyǐng ba!', 'Chúng ta cùng xem phim đi!']),
      w('听', 'tīng', 'nghe', '', ['你听音乐吗？', 'Nǐ tīng yīnyuè ma?', 'Bạn có nghe nhạc không?']),
      w('音乐', 'yīnyuè', 'âm nhạc', '', ['我喜欢听音乐。', 'Wǒ xǐhuan tīng yīnyuè.', 'Tôi thích nghe nhạc.']),
      w('运动', 'yùndòng', 'thể thao, vận động', '', ['你喜欢什么运动？', 'Nǐ xǐhuan shénme yùndòng?', 'Bạn thích môn thể thao nào?']),
      w('跑步', 'pǎobù', 'chạy bộ', '', ['我每天跑步。', 'Wǒ měitiān pǎobù.', 'Mỗi ngày tôi chạy bộ.']),
      w('游泳', 'yóuyǒng', 'bơi', '', ['周末我去游泳。', 'Zhōumò wǒ qù yóuyǒng.', 'Cuối tuần tôi đi bơi.']),
      w('每天', 'měitiān', 'mỗi ngày', 'Đứng trước động từ.', ['我每天六点起床。', 'Wǒ měitiān liù diǎn qǐchuáng.', 'Mỗi ngày tôi dậy lúc 6 giờ.']),
      w('起床', 'qǐchuáng', 'thức dậy (rời giường)', '', ['你几点起床？', 'Nǐ jǐ diǎn qǐchuáng?', 'Bạn dậy lúc mấy giờ?']),
      w('睡觉', 'shuìjiào', 'đi ngủ', '', ['我十一点睡觉。', 'Wǒ shíyī diǎn shuìjiào.', 'Tôi ngủ lúc 11 giờ.']),
      w('常常', 'chángcháng', 'thường, thường xuyên', '', ['我常常听音乐。', 'Wǒ chángcháng tīng yīnyuè.', 'Tôi thường nghe nhạc.'])
    ],
    qs: [
      ['mc', '“Tôi thích nghe nhạc” đúng là?', '我喜欢听音乐。', ['我听喜欢音乐。', '喜欢我听音乐。', '我音乐喜欢听。'], '喜欢 + động từ + tân ngữ.'],
      ['mc', '“Mỗi ngày tôi dậy lúc 6 giờ” đúng là?', '我每天六点起床。', ['我起床每天六点。', '我六点每天起床吗。', '每天起床我六点。'], 'Thời gian đứng trước động từ.'],
      ['mc', '睡觉 nghĩa là?', 'đi ngủ', ['thức dậy', 'nghỉ ngơi', 'mơ'], '起床 dậy · 睡觉 ngủ.'],
      ['mc', '“Thỉnh thoảng” là?', '有时候', ['常常', '每天', '一直'], '有时候 yǒushíhou.'],
      ['hear', '你喜欢什么运动？', 'Bạn thích môn thể thao nào?', ['Bạn có thích thể thao không?', 'Bạn chơi thể thao lúc nào?', 'Bạn thích phim gì?'], '什么运动 = môn thể thao gì.'],
      ['hear', '我常常游泳。', 'Tôi thường đi bơi.', ['Tôi thường chạy bộ.', 'Tôi không biết bơi.', 'Tôi thích xem phim.'], '游泳 yóuyǒng = bơi.'],
      ['hear', '看电影', 'xem phim', ['đọc sách', 'nghe nhạc', 'lên mạng'], '电影 diànyǐng = phim.'],
      ['order', 'Sắp xếp: “Buổi tối tôi thường đọc sách.”', ['晚上', '我', '常常', '看书。'], '晚上我常常看书。'],
      ['mc', '“Tôi không thích chạy bộ” là?', '我不喜欢跑步。', ['我喜欢不跑步。', '我没喜欢跑步。', '不我喜欢跑步。'], '不 đứng trước 喜欢.']
    ],
    hoithoai: {
      ctx: 'Cuối tuần, em đi cà phê với Lý Minh và nói chuyện về sở thích.', vai: 'Lý Minh hỏi, em trả lời và hỏi lại.', ai: '👨 李明',
      luot: [
        T(['周末你喜欢做什么？', 'Zhōumò nǐ xǐhuan zuò shénme?', 'Cuối tuần bạn thích làm gì?'], ['我喜欢看电影和跑步。', 'Wǒ xǐhuan kàn diànyǐng hé pǎobù.', 'Tôi thích xem phim và chạy bộ.', 'Liệt kê 2 sở thích với 和.'], ['我看喜欢电影。', 'Wǒ kàn xǐhuan diànyǐng.', '喜欢 đứng trước động từ 看.'], ['周末是星期六。', 'Zhōumò shì xīngqīliù.', 'Lạc đề.']),
        T(['你每天跑步吗？', 'Nǐ měitiān pǎobù ma?', 'Ngày nào bạn cũng chạy bộ à?'], ['不是每天，我有时候跑步。', 'Bú shì měitiān, wǒ yǒushíhou pǎobù.', 'Không phải mỗi ngày, thỉnh thoảng tôi chạy.', 'Trả lời tự nhiên với 有时候.'], ['我跑步每天。', 'Wǒ pǎobù měitiān.', '每天 phải đứng trước 跑步.'], ['我喜欢睡觉。', 'Wǒ xǐhuan shuìjiào.', 'Không trả lời câu hỏi.']),
        T(['你几点起床？', 'Nǐ jǐ diǎn qǐchuáng?', 'Bạn dậy lúc mấy giờ?'], ['我早上五点半起床，六点跑步。', 'Wǒ zǎoshang wǔ diǎn bàn qǐchuáng, liù diǎn pǎobù.', 'Tôi dậy lúc 5 rưỡi, 6 giờ chạy bộ.', 'Kể thói quen theo đúng trật tự.'], ['我起床五点半。', 'Wǒ qǐchuáng wǔ diǎn bàn.', 'Giờ phải đứng trước 起床.'], ['我五点半睡觉。', 'Wǒ wǔ diǎn bàn shuìjiào.', 'Ngủ lúc 5 rưỡi sáng?! Câu hỏi là mấy giờ dậy.']),
        T(['真早！我喜欢听音乐，你呢？', 'Zhēn zǎo! Wǒ xǐhuan tīng yīnyuè, nǐ ne?', 'Sớm thật! Tôi thích nghe nhạc, còn bạn?'], ['我也喜欢，我常常听中国音乐。', 'Wǒ yě xǐhuan, wǒ chángcháng tīng Zhōngguó yīnyuè.', 'Tôi cũng thích, tôi thường nghe nhạc Trung.', '也, 常常 đứng đúng vị trí.'], ['我喜欢也。', 'Wǒ xǐhuan yě.', '也 đứng trước 喜欢.'], ['音乐是什么？', 'Yīnyuè shì shénme?', 'Lạc đề.'])
      ], ket: 'Em đã kể sở thích, thói quen hằng ngày và hỏi lại người đối diện.'
    },
    tom: ['喜欢 + động từ', 'Tên hoạt động thường ngày', 'Trật tự: chủ ngữ + thời gian + động từ', 'Trạng từ tần suất'],
    nguphap: '喜欢 + V; 每天/常常/有时候 + V; thời gian trước động từ', phatam: 'xǐhuan; yīnyuè (ü); yóuyǒng; shuìjiào',
    loi: ['Đặt thời gian, 每天 sau động từ', 'Nói 我看喜欢…', 'Nhầm 起床 và 睡觉'],
    btvn: ['Kể một ngày của em bằng 5 câu có giờ cụ thể', 'Nói 3 sở thích và 1 điều em không thích', 'Hỏi 2 người: 你喜欢做什么？']
  };

  /* ================= NGÀY 19 ================= */
  const d19 = {
    n: 19, ten: 'Hỏi đáp về thời gian, địa điểm và lịch trình', kinds: K,
    muc: 'Hỏi "khi nào", hẹn lịch, nói lịch trình theo đúng trật tự Ai – Khi nào – Ở đâu – Làm gì.',
    hoc: `<h4>1. Trật tự vàng của câu tiếng Trung</h4>${F(['Ai', '+', 'Khi nào', '+', 'Ở đâu', '+', 'Làm gì'])}<ul>${ex('我明天上午在公司开会。', 'Wǒ míngtiān shàngwǔ zài gōngsī kāihuì.', 'Sáng mai tôi họp ở công ty.')}</ul>${tip('🔁 Tiếng Việt thường nói "Tôi họp <b>ở công ty sáng mai</b>". Tiếng Trung luôn đưa <b>thời gian và địa điểm lên trước động từ</b>. Thời gian cũng có thể đứng đầu câu: 明天上午我在公司开会。')}
      <h4>2. Các buổi trong ngày</h4>${reads([['早上', 'zǎoshang', 'sáng sớm'], ['上午', 'shàngwǔ', 'buổi sáng'], ['中午', 'zhōngwǔ', 'buổi trưa'], ['下午', 'xiàwǔ', 'buổi chiều'], ['晚上', 'wǎnshang', 'buổi tối'], ['周末', 'zhōumò', 'cuối tuần']])}
      <h4>3. Hỏi "khi nào": 什么时候</h4><ul>${ex('你什么时候有空？', 'Nǐ shénme shíhou yǒu kòng?', 'Khi nào bạn rảnh?')}${ex('我们什么时候见面？', 'Wǒmen shénme shíhou jiànmiàn?', 'Khi nào chúng ta gặp nhau?')}</ul>
      <h4>4. Trước / sau một việc: …以前 / …以后</h4><ul>${ex('下班以后我去跑步。', 'Xiàbān yǐhòu wǒ qù pǎobù.', 'Sau khi tan làm tôi đi chạy bộ.')}${ex('睡觉以前我看书。', 'Shuìjiào yǐqián wǒ kàn shū.', 'Trước khi ngủ tôi đọc sách.')}</ul><p class="small">以前 / 以后 đứng SAU việc làm mốc (ngược tiếng Việt "trước khi…", "sau khi…").</p>`,
    vocab: [
      w('什么时候', 'shénme shíhou', 'khi nào, lúc nào', '', ['你什么时候来？', 'Nǐ shénme shíhou lái?', 'Khi nào bạn đến?']),
      w('上午', 'shàngwǔ', 'buổi sáng', '', ['明天上午我开会。', 'Míngtiān shàngwǔ wǒ kāihuì.', 'Sáng mai tôi họp.']),
      w('下午', 'xiàwǔ', 'buổi chiều', '', ['下午三点见！', 'Xiàwǔ sān diǎn jiàn!', 'Hẹn 3 giờ chiều nhé!']),
      w('晚上', 'wǎnshang', 'buổi tối', '', ['晚上你有空吗？', 'Wǎnshang nǐ yǒu kòng ma?', 'Tối nay bạn rảnh không?']),
      w('早上', 'zǎoshang', 'sáng sớm', '', ['我早上跑步。', 'Wǒ zǎoshang pǎobù.', 'Sáng sớm tôi chạy bộ.']),
      w('周末', 'zhōumò', 'cuối tuần', '', ['周末你做什么？', 'Zhōumò nǐ zuò shénme?', 'Cuối tuần bạn làm gì?']),
      w('有空', 'yǒu kòng', 'rảnh, có thời gian', '', ['你明天有空吗？', 'Nǐ míngtiān yǒu kòng ma?', 'Mai bạn rảnh không?']),
      w('见面', 'jiànmiàn', 'gặp mặt', '', ['我们在哪儿见面？', 'Wǒmen zài nǎr jiànmiàn?', 'Chúng ta gặp nhau ở đâu?']),
      w('开会', 'kāihuì', 'họp', '', ['我在开会。', 'Wǒ zài kāihuì.', 'Tôi đang họp.']),
      w('以后', 'yǐhòu', 'sau khi, sau này', 'Việc + 以后.', ['下班以后', 'xiàbān yǐhòu', 'sau khi tan làm']),
      w('以前', 'yǐqián', 'trước khi, trước đây', 'Việc + 以前.', ['睡觉以前', 'shuìjiào yǐqián', 'trước khi ngủ']),
      w('时间', 'shíjiān', 'thời gian', '', ['你有时间吗？', 'Nǐ yǒu shíjiān ma?', 'Bạn có thời gian không?'])
    ],
    qs: [
      ['mc', '“Sáng mai tôi họp ở công ty” đúng là?', '我明天上午在公司开会。', ['我开会在公司明天上午。', '我在公司开会明天上午。', '开会我明天上午在公司。'], 'Ai + khi nào + ở đâu + làm gì.'],
      ['mc', '“Sau khi tan làm” là?', '下班以后', ['以后下班', '下班以前', '以前下班'], 'Việc làm mốc + 以后.'],
      ['mc', '“Khi nào bạn rảnh?” là?', '你什么时候有空？', ['你有空什么时候？', '什么你时候有空？', '你几点有空吗？'], '什么时候 đứng trước động từ.'],
      ['mc', '下午 là buổi nào?', 'buổi chiều', ['buổi sáng', 'buổi tối', 'buổi trưa'], '上午 sáng · 中午 trưa · 下午 chiều.'],
      ['hear', '晚上你有空吗？', 'Tối nay bạn rảnh không?', ['Sáng nay bạn rảnh không?', 'Bạn có thời gian không?', 'Tối nay bạn làm gì?'], '晚上 tối · 有空 rảnh.'],
      ['hear', '我们在哪儿见面？', 'Chúng ta gặp nhau ở đâu?', ['Khi nào chúng ta gặp nhau?', 'Chúng ta gặp lúc mấy giờ?', 'Bạn ở đâu?'], '在哪儿 = ở đâu.'],
      ['hear', '下午三点见！', 'Hẹn 3 giờ chiều!', ['Hẹn 3 giờ sáng!', 'Hẹn thứ Ba!', 'Hẹn ngày 3!'], '下午三点 = 3 giờ chiều.'],
      ['order', 'Sắp xếp: “Cuối tuần tôi ở nhà đọc sách.”', ['周末', '我', '在家', '看书。'], '周末我在家看书。'],
      ['mc', '“Trước khi ngủ” là?', '睡觉以前', ['以前睡觉', '睡觉以后', '起床以前'], 'Việc + 以前.']
    ],
    hoithoai: {
      ctx: 'Chị Trương (张丽), đồng nghiệp người Trung Quốc, muốn hẹn em đi ăn cuối tuần.', vai: 'Chị Trương rủ, em sắp xếp lịch hẹn.', ai: '👩 张丽',
      luot: [
        T(['你周末有空吗？', 'Nǐ zhōumò yǒu kòng ma?', 'Cuối tuần bạn rảnh không?'], ['星期六有空，星期天没空。', 'Xīngqīliù yǒu kòng, xīngqītiān méi kòng.', 'Thứ Bảy rảnh, Chủ nhật bận.', 'Phủ định của 有空 là 没空.'], ['不有空。', 'Bù yǒu kòng.', 'Không dùng 不 với 有.'], ['周末是什么时候？', 'Zhōumò shì shénme shíhou?', 'Lạc đề.']),
        T(['我们星期六一起吃饭吧！', 'Wǒmen xīngqīliù yìqǐ chī fàn ba!', 'Thứ Bảy chúng ta cùng đi ăn nhé!'], ['好啊！什么时候？', 'Hǎo a! Shénme shíhou?', 'Được đó! Lúc nào?', 'Đồng ý và hỏi giờ.'], ['我不吃饭。', 'Wǒ bù chī fàn.', 'Nghe hơi cộc lốc.'], ['吃饭在哪儿什么时候？', 'Chī fàn zài nǎr shénme shíhou?', 'Câu lộn xộn.']),
        T(['星期六晚上七点，怎么样？', 'Xīngqīliù wǎnshang qī diǎn, zěnmeyàng?', 'Tối thứ Bảy, 7 giờ, được không?'], ['可以。我们在哪儿见面？', 'Kěyǐ. Wǒmen zài nǎr jiànmiàn?', 'Được. Chúng ta gặp nhau ở đâu?', 'Hỏi địa điểm.'], ['我们见面在哪儿？', 'Wǒmen jiànmiàn zài nǎr?', '在哪儿 phải đứng trước 见面.'], ['七点是晚上吗？', 'Qī diǎn shì wǎnshang ma?', 'Chị đã nói rõ rồi.']),
        T(['在公司旁边的咖啡馆。', 'Zài gōngsī pángbiān de kāfēiguǎn.', 'Ở quán cà phê cạnh công ty.'], ['好，星期六晚上见！', 'Hǎo, xīngqīliù wǎnshang jiàn!', 'Ok, hẹn tối thứ Bảy!', 'Chốt lịch hẹn bằng …见.'], ['咖啡馆在哪儿？', 'Kāfēiguǎn zài nǎr?', 'Chị vừa nói ở cạnh công ty.'], ['明天见！', 'Míngtiān jiàn!', 'Hẹn thứ Bảy chứ không phải ngày mai.'])
      ], ket: 'Em đã sắp xếp một cuộc hẹn đủ thời gian và địa điểm.'
    },
    tom: ['Trật tự Ai – Khi nào – Ở đâu – Làm gì', 'Các buổi trong ngày', '什么时候', '…以前 / …以后', '有空 / 没空'],
    nguphap: 'S + thời gian + 在 + nơi + V; 什么时候; …以前/以后', phatam: 'shénme shíhou; zhōumò; jiànmiàn',
    loi: ['Đặt thời gian/địa điểm sau động từ', 'Nói 以后下班 (ngược)', 'Nói 不有空'],
    btvn: ['Viết lịch tuần này của em bằng 5 câu đúng trật tự', 'Rủ một người bạn đi ăn: hỏi giờ, hỏi chỗ', 'Nói 2 câu với 以前 và 2 câu với 以后']
  };

  /* ================= NGÀY 20 ================= */
  const d20 = {
    n: 20, ten: 'Ngữ pháp giao tiếp thông dụng', kinds: K,
    muc: 'Dùng 了 ở mức cơ bản, phân biệt 会/能/可以, nói "đang làm" với 正在, "đã" với 已经, "chưa" với 还没.',
    hoc: `<h4>1. 了 le – việc đã xảy ra / thay đổi</h4><ul><li><b>Sau động từ</b>: hành động đã hoàn thành. ${ex('我买了一个手机。', 'Wǒ mǎi le yí ge shǒujī.', 'Tôi đã mua một chiếc điện thoại.')}</li><li><b>Cuối câu</b>: tình huống mới, thay đổi. ${ex('下雨了！', 'Xià yǔ le!', 'Mưa rồi!')}</li></ul>
      ${tip('⚠️ Phủ định việc đã qua dùng <b>没 (没有) + động từ, bỏ 了</b>: ✔ 我没吃 · ✘ 我没吃了. "Chưa" = 还没 + động từ (+ 呢): 我还没吃呢。')}
      <h4>2. Biết, có thể, được phép: 会 – 能 – 可以</h4>${tbl(['Từ', 'Nghĩa', 'Ví dụ', 'Nghe'], [
        ['会 huì', 'biết (kỹ năng phải học)', '我会说汉语。'], ['能 néng', 'có thể (điều kiện, khả năng)', '明天我不能来。'], ['可以 kěyǐ', 'được phép', '这儿可以拍照吗？']].map(([a, b, c]) => `<tr><td><b>${a}</b></td><td>${b}</td><td>${c}</td><td>${sp(c)}</td></tr>`))}
      <h4>3. Đang làm: 正在 / 在 + động từ (+ 呢)</h4><ul>${ex('我正在开会呢。', 'Wǒ zhèngzài kāihuì ne.', 'Tôi đang họp.')}</ul>
      <h4>4. Đã – còn: 已经 … 了 · 还 …</h4><ul>${ex('他已经下班了。', 'Tā yǐjīng xiàbān le.', 'Anh ấy đã tan làm rồi.')}${ex('我还没下班。', 'Wǒ hái méi xiàbān.', 'Tôi vẫn chưa tan làm.')}</ul>
      <h4>5. Lời chào kiểu Trung Quốc</h4><p>${sp('你吃饭了吗？')} 你吃饭了吗？Nǐ chī fàn le ma? (Ăn cơm chưa?) – thực chất là lời chào thân mật, trả lời 吃了 / 还没呢 là được.</p>`,
    vocab: [
      w('了', 'le', '(trợ từ) đã, rồi', 'Sau động từ: đã làm xong; cuối câu: thay đổi.', ['我吃了。', 'Wǒ chī le.', 'Tôi ăn rồi.']),
      w('会', 'huì', 'biết (làm gì)', 'Kỹ năng học được.', ['你会开车吗？', 'Nǐ huì kāichē ma?', 'Bạn biết lái xe không?']),
      w('能', 'néng', 'có thể', 'Do điều kiện, khả năng.', ['明天我不能来。', 'Míngtiān wǒ bù néng lái.', 'Mai tôi không đến được.']),
      w('正在', 'zhèngzài', 'đang', '正在 + động từ (+ 呢).', ['我正在开会。', 'Wǒ zhèngzài kāihuì.', 'Tôi đang họp.']),
      w('已经', 'yǐjīng', 'đã', 'Thường đi với 了.', ['他已经走了。', 'Tā yǐjīng zǒu le.', 'Anh ấy đi rồi.']),
      w('还', 'hái', 'vẫn, còn', '还没 = vẫn chưa.', ['我还没吃。', 'Wǒ hái méi chī.', 'Tôi vẫn chưa ăn.']),
      w('没', 'méi', 'không, chưa (cho việc đã qua)', '没 + động từ, không có 了.', ['我没去。', 'Wǒ méi qù.', 'Tôi đã không đi.']),
      w('说', 'shuō', 'nói', '', ['请再说一遍。', 'Qǐng zài shuō yí biàn.', 'Xin nói lại một lần nữa.']),
      w('汉语', 'Hànyǔ', 'tiếng Trung (tiếng Hán)', 'Văn nói hay dùng 中文 Zhōngwén.', ['我会说一点儿汉语。', 'Wǒ huì shuō yìdiǎnr Hànyǔ.', 'Tôi biết nói một chút tiếng Trung.']),
      w('写', 'xiě', 'viết', '', ['我不会写汉字。', 'Wǒ bú huì xiě Hànzì.', 'Tôi không biết viết chữ Hán.']),
      w('开车', 'kāichē', 'lái xe (ô tô)', '', ['我开车去公司。', 'Wǒ kāichē qù gōngsī.', 'Tôi lái xe đến công ty.']),
      w('下雨', 'xià yǔ', 'mưa', '', ['下雨了！', 'Xià yǔ le!', 'Mưa rồi!'])
    ],
    qs: [
      ['mc', '“Tôi chưa ăn” đúng là?', '我还没吃。', ['我没吃了。', '我不吃了。', '我还不吃了。'], '还没 + động từ, không thêm 了.'],
      ['mc', '“Tôi biết nói tiếng Trung” dùng từ nào?', '会', ['能', '可以', '想'], 'Kỹ năng học được → 会.'],
      ['mc', '“Mai tôi không đến được (vì bận)” dùng từ nào?', '不能', ['不会', '没', '不可以'], 'Do điều kiện → 能.'],
      ['mc', '“Ở đây có được chụp ảnh không?” dùng từ nào?', '可以', ['会', '正在', '已经'], 'Xin phép → 可以.'],
      ['mc', '“Mưa rồi!” là?', '下雨了！', ['了下雨！', '下了雨吗！', '正在下了雨！'], '了 cuối câu: tình huống mới.'],
      ['mc', '“Anh ấy đã tan làm rồi” là?', '他已经下班了。', ['他下班已经了。', '他已经没下班。', '他了已经下班。'], '已经 + động từ + 了.'],
      ['hear', '我正在开会呢。', 'Tôi đang họp.', ['Tôi họp xong rồi.', 'Tôi sắp họp.', 'Tôi không họp.'], '正在 = đang.'],
      ['hear', '你吃饭了吗？', 'Ăn cơm chưa? (lời chào)', ['Bạn muốn ăn gì?', 'Bạn ăn ở đâu?', 'Bạn có đói không?'], 'Lời chào thân mật của người Trung Quốc.'],
      ['order', 'Sắp xếp: “Tôi biết nói một chút tiếng Trung.”', ['我', '会说', '一点儿', '汉语。'], '我会说一点儿汉语。'],
      ['mc', 'Câu nào <b>sai</b>?', '我昨天没去了。', ['我昨天没去。', '我昨天去了。', '我还没去。'], 'Có 没 thì bỏ 了.']
    ],
    hoithoai: {
      ctx: 'Lý Minh gọi điện cho em lúc 12 giờ trưa.', vai: 'Lý Minh hỏi, em trả lời bằng 了 / 会 / 能 / 正在.', ai: '👨 李明',
      luot: [
        T(['你吃饭了吗？', 'Nǐ chī fàn le ma?', 'Ăn cơm chưa?'], ['还没呢，你呢？', 'Hái méi ne, nǐ ne?', 'Chưa, còn bạn?', '还没呢 = vẫn chưa.'], ['我没吃了。', 'Wǒ méi chī le.', 'Có 没 thì bỏ 了.'], ['我会吃饭。', 'Wǒ huì chī fàn.', '"Tôi biết ăn cơm" 😄']),
        T(['我也没吃。我们一起去吃吧？', 'Wǒ yě méi chī. Wǒmen yìqǐ qù chī ba?', 'Tôi cũng chưa. Mình cùng đi ăn nhé?'], ['现在不行，我正在开会。', 'Xiànzài bù xíng, wǒ zhèngzài kāihuì.', 'Bây giờ không được, tôi đang họp.', '不行 = không được; 正在 = đang.'], ['我会开会。', 'Wǒ huì kāihuì.', '会 là "biết", không phải "đang".'], ['我已经吃了。', 'Wǒ yǐjīng chī le.', 'Mâu thuẫn: vừa nói chưa ăn.']),
        T(['那你几点能下班？', 'Nà nǐ jǐ diǎn néng xiàbān?', 'Vậy mấy giờ bạn tan làm được?'], ['我一点能下班。', 'Wǒ yī diǎn néng xiàbān.', 'Một giờ tôi xong.', 'Giờ đứng trước 能 + động từ.'], ['我能一点下班吗？', 'Wǒ néng yī diǎn xiàbān ma?', 'Đây là câu hỏi, không phải trả lời.'], ['我不会下班。', 'Wǒ bú huì xiàbān.', 'Sai từ: 会 là kỹ năng.']),
        T(['好。下雨了！你会开车吗？', 'Hǎo. Xià yǔ le! Nǐ huì kāichē ma?', 'Ok. Mưa rồi! Bạn biết lái xe không?'], ['会，我开车去接你。', 'Huì, wǒ kāichē qù jiē nǐ.', 'Biết, tôi lái xe đến đón bạn.', '接 = đón.'], ['能，我能开车。', 'Néng, wǒ néng kāichē.', 'Hỏi "biết lái không" thì trả lời bằng 会.'], ['下雨了吗？', 'Xià yǔ le ma?', 'Lý Minh vừa nói mưa rồi mà.'])
      ], ket: 'Em đã dùng 了, 还没, 正在, 能, 会 trong một cuộc gọi thật.'
    },
    tom: ['了 sau động từ và cuối câu', '没 / 还没 (bỏ 了)', '会 – 能 – 可以', '正在', '已经…了'],
    nguphap: 'V + 了; …了 (thay đổi); 没/还没 + V; 会/能/可以 + V; 正在 + V (+呢); 已经…了', phatam: 'le (thanh nhẹ); huì/néng; zhèngzài',
    loi: ['Nói 没…了', 'Dùng 能 cho kỹ năng (lái xe, ngoại ngữ)', 'Quên 了 sau 已经'],
    btvn: ['Kể 3 việc em đã làm hôm nay với 了', 'Nói 3 việc em biết làm (会) và 1 việc chưa biết', 'Tập trả lời 你吃饭了吗？ theo 2 cách']
  };

  /* ================= NGÀY 21 ================= */
  const d21 = {
    n: 21, ten: 'Kiểm tra tổng hợp và mô phỏng giao tiếp', tong: 1, vocab: [], kt: { n: 20, min: 20 },
    kinds: ['meaning', 'listen', 'pinyin', 'hanzi', 'listenPy', 'match'],
    muc: 'Ôn toàn bộ giai đoạn 3; mô phỏng một chuyến công tác; kiểm tra 20 câu.',
    hoc: `<h4>1. Sơ đồ ngữ pháp giai đoạn 3</h4>${tbl(['Chủ đề', 'Mẫu câu'], [
        '<tr><td>Hỏi đường</td><td>…在哪儿？· 怎么走？· 往左/右走 · 一直往前走 · …旁边</td></tr>', '<tr><td>Giao thông</td><td>坐 + phương tiện + 去 + nơi · 打车 · 请在这儿停</td></tr>',
        '<tr><td>Công việc</td><td>你做什么工作？· 我在 + nơi + 工作 · 几点上班/下班</td></tr>', '<tr><td>Sở thích</td><td>喜欢 + V · 每天/常常/有时候 + V</td></tr>',
        '<tr><td>Lịch trình</td><td>Ai + Khi nào + Ở đâu + Làm gì · 什么时候 · …以前/以后</td></tr>', '<tr><td>Ngữ pháp thông dụng</td><td>V + 了 · 没/还没 · 会/能/可以 · 正在 · 已经…了</td></tr>'])}
      <h4>2. Câu trọng tâm (bấm nghe, đọc theo)</h4>${reads([['请问，地铁站在哪儿？', 'Qǐngwèn, dìtiězhàn zài nǎr?', 'Xin hỏi, ga tàu điện ở đâu?'], ['师傅，去这个酒店。', 'Shīfu, qù zhège jiǔdiàn.', 'Bác tài, đến khách sạn này.'], ['我在银行工作。', 'Wǒ zài yínháng gōngzuò.', 'Tôi làm ở ngân hàng.'], ['我喜欢看电影。', 'Wǒ xǐhuan kàn diànyǐng.', 'Tôi thích xem phim.'], ['我明天下午在公司开会。', 'Wǒ míngtiān xiàwǔ zài gōngsī kāihuì.', 'Chiều mai tôi họp ở công ty.'], ['我还没吃饭。', 'Wǒ hái méi chī fàn.', 'Tôi chưa ăn cơm.'], ['我会说一点儿汉语。', 'Wǒ huì shuō yìdiǎnr Hànyǔ.', 'Tôi nói được một chút tiếng Trung.']])}
      ${tip('📝 Bài kiểm tra 20 câu lấy từ toàn bộ 21 ngày. Đạt từ 7 điểm là sẵn sàng sang giai đoạn Phản xạ.')}`,
    qs: [
      ['mc', '“Chiều mai tôi đi tàu điện đến sân bay” đúng là?', '我明天下午坐地铁去机场。', ['我坐地铁去机场明天下午。', '明天下午我去机场坐地铁。', '我去机场明天下午坐地铁。'], 'Ai + khi nào + phương tiện + 去 + nơi.'],
      ['mc', '“Tôi đã không đi làm” đúng là?', '我没上班。', ['我没上班了。', '我不上班了吗。', '我上班没。'], 'Việc đã qua: 没 + V, bỏ 了.']
    ],
    hoithoai: {
      ctx: 'Em đi công tác Quảng Châu 1 ngày. Mô phỏng liên tục: taxi → hỏi đường → gặp đối tác → hẹn lịch.', vai: 'Mỗi lượt là một người khác nhau. Em phản xạ trả lời.', ai: '🎭 Nhiều vai',
      luot: [
        T(['（司机）你好！去哪儿？', '(Sījī) Nǐ hǎo! Qù nǎr?', '(Tài xế) Chào bạn! Đi đâu?'], ['师傅，去天河区的中信大厦。', 'Shīfu, qù Tiānhé Qū de Zhōngxìn Dàshà.', 'Bác tài, đến toà nhà CITIC ở quận Thiên Hà.', 'Nói điểm đến rõ ràng.'], ['我坐中信大厦。', 'Wǒ zuò Zhōngxìn Dàshà.', '坐 đi với phương tiện.'], ['中信大厦在哪儿？', 'Zhōngxìn Dàshà zài nǎr?', 'Tài xế cần biết em đi đâu.']),
        T(['（司机）到了。', '(Sījī) Dào le.', '(Tài xế) Đến rồi.'], ['请在这儿停，谢谢师傅！', 'Qǐng zài zhèr tíng, xièxie shīfu!', 'Dừng ở đây ạ, cảm ơn bác!', 'Chuẩn.'], ['往左走。', 'Wǎng zuǒ zǒu.', 'Đến nơi rồi.'], ['多长时间？', 'Duō cháng shíjiān?', 'Đã đến nơi rồi.']),
        T(['（保安）你好，找谁？', '(Bǎo’ān) Nǐ hǎo, zhǎo shéi?', '(Bảo vệ) Chào anh, anh tìm ai?'], ['我找刘经理。请问，他的公司在几楼？', 'Wǒ zhǎo Liú jīnglǐ. Qǐngwèn, tā de gōngsī zài jǐ lóu?', 'Tôi tìm giám đốc Lưu. Xin hỏi, công ty anh ấy ở tầng mấy?', '找 = tìm; 几楼 = tầng mấy.'], ['我是谁？', 'Wǒ shì shéi?', 'Lạc đề.'], ['我在银行工作。', 'Wǒ zài yínháng gōngzuò.', 'Chưa trả lời câu hỏi "tìm ai".']),
        T(['（刘经理）欢迎欢迎！你吃饭了吗？', '(Liú jīnglǐ) Huānyíng huānyíng! Nǐ chī fàn le ma?', '(GĐ Lưu) Chào mừng! Anh ăn cơm chưa?'], ['还没呢，谢谢刘经理！', 'Hái méi ne, xièxie Liú jīnglǐ!', 'Chưa ạ, cảm ơn giám đốc Lưu!', 'Lịch sự, tự nhiên.'], ['我没吃了。', 'Wǒ méi chī le.', 'Có 没 thì bỏ 了.'], ['我会吃。', 'Wǒ huì chī.', 'Sai nghĩa.']),
        T(['（刘经理）我们明天上午在公司开会，可以吗？', '(Liú jīnglǐ) Wǒmen míngtiān shàngwǔ zài gōngsī kāihuì, kěyǐ ma?', '(GĐ Lưu) Sáng mai chúng ta họp ở công ty, được không?'], ['可以。几点？', 'Kěyǐ. Jǐ diǎn?', 'Được ạ. Mấy giờ?', 'Đồng ý và hỏi giờ.'], ['我开会明天上午。', 'Wǒ kāihuì míngtiān shàngwǔ.', 'Sai trật tự.'], ['我不会开会。', 'Wǒ bú huì kāihuì.', '"Tôi không biết họp" 😄'])
      ], ket: 'Em đã xử lý trọn một chuyến công tác: taxi, tìm người, chào hỏi và hẹn họp.'
    },
    tom: ['Ôn toàn bộ giai đoạn 3', 'Mô phỏng chuyến công tác', 'Kiểm tra 20 câu'], nguphap: 'Ôn: 在哪儿/怎么走, 坐…去, 在…工作, 喜欢, trật tự thời gian – địa điểm, 了/会/能', phatam: 'Ôn câu dài, nói liền mạch',
    loi: ['Xem lại câu sai trong bài kiểm tra', 'Luyện thêm trật tự câu nếu còn sai'], btvn: ['Dưới 7 điểm: ôn thẻ "Từ chưa nhớ" và làm lại', 'Tự đóng 2 vai, nói lại hội thoại công tác', 'Sẵn sàng cho Giai đoạn 4: phản xạ']
  };

  window.PLT_ZH.days.push(d15, d16, d17, d18, d19, d20, d21);
})();

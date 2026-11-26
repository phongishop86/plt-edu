/* PLT-Edu · Tiếng Trung – Cấp 2 (HSK 3): lộ trình 30 ngày, Ngày 1–14
   h = chữ Hán giản thể, p = Pinyin, v = nghĩa · noi = câu luyện nói [câu, "pinyin – nghĩa"] */
(function () {
  'use strict';
  const sp = PLT.LANG.sp;
  const w = (h, p, v, use, ex) => ({ h, p, v, use, ex });
  const L = (h, p, v) => ({ h, p, v });
  const T = (a, ok, ...bad) => ({ a: L(...a), o: [{ h: ok[0], p: ok[1], v: ok[2], ok: 1, f: ok[3] }].concat(bad.map((b) => ({ h: b[0], p: b[1], f: b[2] }))) });
  const tbl = (head, rows) => `<div class="zh-scroll"><table class="dtable full zh-tb"><tr>${head.map((x) => `<th>${x}</th>`).join('')}</tr>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</table></div>`;
  const tip = (x) => `<div class="zh-tip">${x}</div>`;
  const exs = (a) => `<ul>${a.map(([h, p, v]) => `<li>${h} ${sp(h)}<br><span class="zh-wp">${p}</span> – ${v}</li>`).join('')}</ul>`;
  const F = (parts) => `<div class="zh-formula small">${parts.map((x) => (x === '+' ? '<i>+</i>' : `<span>${x}</span>`)).join('')}</div>`;
  const K = ['meaning', 'listen', 'pinyin', 'hanzi', 'listenPy', 'match'];

  const plan = [
    'Trợ từ 了 và 过: đã làm, từng làm', 'Bổ ngữ kết quả: 完, 好, 到, 懂, 错', 'Bổ ngữ xu hướng: 来, 去, 回来, 上去', 'So sánh: 比, 没有…那么, 跟…一样', 'Câu chữ 把: xử lý đồ vật', 'Câu bị động 被', 'Ôn tập tuần 1 và kiểm tra',
    'Bổ ngữ khả năng: 听得懂, 看不见', 'Bổ ngữ trạng thái 得: nói giỏi, chạy nhanh', 'Thời lượng: học bao lâu, đã làm bao lâu', 'Liên từ: 虽然…但是, 因为…所以', 'Liên từ: 如果…就, 只要…就, 一…就', 'Sức khoẻ và đi khám bệnh', 'Ôn tập tuần 2 và kiểm tra',
    'Thuê nhà và chuyển nhà', 'Ngân hàng và đổi tiền', 'Du lịch và đặt khách sạn', 'Công việc và phỏng vấn', 'Thời tiết và bốn mùa', 'Mua sắm trực tuyến và giao hàng', 'Kiểm tra tổng hợp và mô phỏng giao tiếp',
    'Ẩm thực và nấu ăn', 'Lễ tết Trung Quốc', 'Sở thích và thể thao', 'Học tập và thi cử', 'Kể chuyện đã qua', 'Nêu ý kiến, đồng ý và phản đối', 'Nghe hiểu và phản xạ', 'Mô phỏng tình huống liên tục', 'Kiểm tra cuối khoá HSK 3 và lộ trình HSK 4'
  ].map((ten, i) => ({ n: i + 1, ten }));
  const stages = [
    { ten: '🧩 Giai đoạn 1 – Ngữ pháp trọng tâm HSK 3', tu: 1, den: 7 }, { ten: '🔗 Giai đoạn 2 – Bổ ngữ và liên từ', tu: 8, den: 14 },
    { ten: '🏙️ Giai đoạn 3 – Đời sống và công việc', tu: 15, den: 21 }, { ten: '🎎 Giai đoạn 4 – Văn hoá, ý kiến, luyện thi', tu: 22, den: 30 }
  ];

  /* ================= NGÀY 1 ================= */
  const d1 = {
    n: 1, ten: plan[0].ten, kinds: K,
    muc: 'Phân biệt 了 (đã xong) và 过 (từng trải nghiệm); phủ định 没(有); câu hỏi …了吗 / …过吗.',
    hoc: `${tbl(['Trợ từ', 'Ý nghĩa', 'Ví dụ'], [['V + 了', 'hành động đã hoàn thành', '我吃了早饭。Wǒ chīle zǎofàn. – Tôi đã ăn sáng.'], ['V + 过', 'từng làm (trải nghiệm)', '我去过北京。Wǒ qùguo Běijīng. – Tôi từng đến Bắc Kinh.'], ['没 + V', 'phủ định (bỏ 了)', '我没吃早饭。– Tôi chưa ăn sáng.'], ['没 + V + 过', 'chưa từng', '我没去过上海。– Tôi chưa từng đến Thượng Hải.']])}
      ${exs([['你去过中国吗？', 'Nǐ qùguo Zhōngguó ma?', 'Bạn từng đến Trung Quốc chưa?'], ['我买了两本书。', 'Wǒ mǎile liǎng běn shū.', 'Tôi đã mua hai quyển sách.'], ['他还没来。', 'Tā hái méi lái.', 'Anh ấy vẫn chưa đến.']])}
      ${tip('⚠️ Phủ định của 了 là <b>没</b> và <b>bỏ 了</b>: ❌ 我没吃了 → ✅ 我没吃。 Với 过 thì <b>giữ 过</b>: 我没去过。')}`,
    vocab: [
      w('已经', 'yǐjīng', 'đã (rồi)', 'Hay đi với 了.', ['我已经吃了。', 'Wǒ yǐjīng chī le.', 'Tôi ăn rồi.']),
      w('还没', 'hái méi', 'vẫn chưa', '', ['他还没回来。', 'Tā hái méi huílai.', 'Anh ấy vẫn chưa về.']),
      w('过', 'guo', '(trợ từ) từng', 'Đọc nhẹ.', ['我吃过烤鸭。', 'Wǒ chīguo kǎoyā.', 'Tôi từng ăn vịt quay.']),
      w('次', 'cì', 'lần', '', ['我去过三次。', 'Wǒ qùguo sān cì.', 'Tôi từng đi ba lần.']),
      w('经历', 'jīnglì', 'trải nghiệm', '', ['这是很难忘的经历。', 'Zhè shì hěn nánwàng de jīnglì.', 'Đây là trải nghiệm khó quên.']),
      w('从来', 'cónglái', 'từ trước đến nay', '+ 没 + V + 过.', ['我从来没见过雪。', 'Wǒ cónglái méi jiànguo xuě.', 'Tôi chưa bao giờ thấy tuyết.']),
      w('刚', 'gāng', 'vừa mới', '', ['我刚到公司。', 'Wǒ gāng dào gōngsī.', 'Tôi vừa đến công ty.']),
      w('终于', 'zhōngyú', 'cuối cùng thì', '', ['我终于找到了。', 'Wǒ zhōngyú zhǎodào le.', 'Cuối cùng tôi đã tìm thấy.']),
      w('难忘', 'nánwàng', 'khó quên', '', ['那次旅行很难忘。', 'Nà cì lǚxíng hěn nánwàng.', 'Chuyến đi ấy rất khó quên.']),
      w('故事', 'gùshi', 'câu chuyện', '', ['给我讲个故事吧。', 'Gěi wǒ jiǎng ge gùshi ba.', 'Kể tôi nghe một câu chuyện đi.'])
    ],
    qs: [
      ['mc', '“Tôi từng đến Bắc Kinh” là?', '我去过北京。', ['我去了北京过。', '我过去北京。', '我没去北京了。'], 'V + 过.'],
      ['mc', 'Phủ định của 我吃了 là?', '我没吃。', ['我没吃了。', '我不吃了过。', '我吃没了。'], '没 + V, bỏ 了.'],
      ['mc', '我从来___见过雪。', '没', ['不', '了', '过'], '从来没 + V + 过.'],
      ['mc', '刚 nghĩa là?', 'vừa mới', ['đã từng', 'cuối cùng', 'vẫn chưa'], 'gāng.'],
      ['hear', '你去过中国吗？', 'Bạn từng đến Trung Quốc chưa?', ['Bạn sắp đi Trung Quốc à?', 'Bạn đang ở Trung Quốc à?', 'Bạn thích Trung Quốc không?'], '去过 = từng đến.'],
      ['hear', '我已经吃了，你吃了吗？', 'Tôi ăn rồi, bạn ăn chưa?', ['Tôi chưa ăn, bạn ăn đi.', 'Tôi đang ăn.', 'Tôi sẽ ăn sau.'], '已经…了.'],
      ['order', 'Sắp xếp: “Tôi từng đi ba lần.”', ['我', '去过', '三次', '。'], '我去过三次。']
    ],
    noi: [['你去过中国吗？', 'Nǐ qùguo Zhōngguó ma? – Bạn từng đến Trung Quốc chưa?'], ['我已经吃了。', 'Wǒ yǐjīng chī le. – Tôi ăn rồi.'], ['我从来没见过雪。', 'Wǒ cónglái méi jiànguo xuě. – Tôi chưa bao giờ thấy tuyết.']],
    hoithoai: {
      ctx: 'Em gặp đồng nghiệp Trung Quốc mới sang Việt Nam làm việc.', vai: 'Anh Vương hỏi, em trả lời.', ai: '👨 王先生',
      luot: [
        T(['你去过中国吗？', 'Nǐ qùguo Zhōngguó ma?', 'Bạn từng đến Trung Quốc chưa?'], ['去过，我去过两次广州。', 'Qùguo, wǒ qùguo liǎng cì Guǎngzhōu.', 'Từng đi rồi, tôi từng đến Quảng Châu hai lần.', 'V + 过 + số lần.'], ['我去了过广州。', 'Wǒ qùle guo Guǎngzhōu.', 'Không dùng 了 và 过 kiểu này.'], ['我没去过了。', 'Wǒ méi qùguo le.', 'Thừa 了.']),
        T(['你吃过越南河粉吗？我还没吃过。', 'Nǐ chīguo Yuènán héfěn ma? Wǒ hái méi chīguo.', 'Bạn ăn phở chưa? Tôi chưa từng ăn.'], ['当然吃过！我带你去吃吧。', 'Dāngrán chīguo! Wǒ dài nǐ qù chī ba.', 'Tất nhiên rồi! Tôi dẫn anh đi ăn nhé.', 'Đáp tự nhiên.'], ['我没吃过了。', 'Wǒ méi chīguo le.', 'Thừa 了.'], ['我吃了过。', 'Wǒ chīle guo.', 'Sai.']),
        T(['太好了！你吃早饭了吗？', 'Tài hǎo le! Nǐ chī zǎofàn le ma?', 'Tuyệt! Bạn ăn sáng chưa?'], ['还没吃，我们一起去吧。', 'Hái méi chī, wǒmen yìqǐ qù ba.', 'Chưa ăn, mình cùng đi nhé.', '还没 + V.'], ['我没吃了。', 'Wǒ méi chī le.', 'Bỏ 了 khi phủ định.'], ['我不吃过。', 'Wǒ bù chīguo.', 'Sai.'])
      ], ket: 'Em đã phân biệt 了 và 过 trong giao tiếp.'
    },
    tom: ['V + 了 / V + 过', '没 + V (bỏ 了)', '从来没 + V + 过'], nguphap: '了 hoàn thành, 过 trải nghiệm', phatam: '了 le, 过 guo đọc thanh nhẹ',
    loi: ['没 … 了', 'Lẫn 了 và 过'], btvn: ['Viết 5 câu với 过 về trải nghiệm của em', 'Viết 5 câu với 了 về việc hôm qua', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 2 ================= */
  const d2 = {
    n: 2, ten: plan[1].ten, kinds: K,
    muc: 'Dùng bổ ngữ kết quả để nói kết quả của hành động: 做完, 写好, 找到, 听懂, 写错.',
    hoc: `${F(['Động từ', '+', 'Bổ ngữ kết quả', '+', '(了)'])}${tbl(['Bổ ngữ', 'Nghĩa', 'Ví dụ'], [['完 wán', 'xong', '作业做完了。– Làm xong bài tập rồi.'], ['好 hǎo', 'xong, tốt (hoàn chỉnh)', '饭做好了。– Cơm nấu xong rồi.'], ['到 dào', 'đạt được, tới', '我找到钥匙了。– Tôi tìm thấy chìa khoá rồi.'], ['懂 dǒng', 'hiểu', '你听懂了吗？– Bạn nghe hiểu chưa?'], ['错 cuò', 'sai', '我写错了。– Tôi viết sai rồi.'], ['见 jiàn', 'thấy (giác quan)', '我看见他了。– Tôi nhìn thấy anh ấy rồi.']])}
      ${tip('🔑 Phủ định: <b>没 + V + bổ ngữ</b>: 我没听懂。(Tôi chưa nghe hiểu.) – không thêm 了.')}`,
    vocab: [
      w('做完', 'zuòwán', 'làm xong', '', ['我做完作业了。', 'Wǒ zuòwán zuòyè le.', 'Tôi làm xong bài tập rồi.']),
      w('准备好', 'zhǔnbèi hǎo', 'chuẩn bị xong', '', ['资料准备好了吗？', 'Zīliào zhǔnbèi hǎo le ma?', 'Tài liệu chuẩn bị xong chưa?']),
      w('找到', 'zhǎodào', 'tìm thấy', '', ['我找到工作了。', 'Wǒ zhǎodào gōngzuò le.', 'Tôi tìm được việc rồi.']),
      w('听懂', 'tīngdǒng', 'nghe hiểu', '', ['你听懂了吗？', 'Nǐ tīngdǒng le ma?', 'Bạn nghe hiểu chưa?']),
      w('写错', 'xiěcuò', 'viết sai', '', ['对不起，我写错了。', 'Duìbuqǐ, wǒ xiěcuò le.', 'Xin lỗi, tôi viết sai rồi.']),
      w('看见', 'kànjiàn', 'nhìn thấy', '', ['你看见我的手机了吗？', 'Nǐ kànjiàn wǒ de shǒujī le ma?', 'Bạn thấy điện thoại tôi không?']),
      w('钥匙', 'yàoshi', 'chìa khoá', '', ['我的钥匙不见了。', 'Wǒ de yàoshi bújiàn le.', 'Chìa khoá của tôi mất rồi.']),
      w('作业', 'zuòyè', 'bài tập', '', ['今天的作业很多。', 'Jīntiān de zuòyè hěn duō.', 'Bài tập hôm nay nhiều.']),
      w('资料', 'zīliào', 'tài liệu', '', ['请把资料发给我。', 'Qǐng bǎ zīliào fā gěi wǒ.', 'Gửi tài liệu cho tôi.']),
      w('收到', 'shōudào', 'nhận được', '', ['我收到你的邮件了。', 'Wǒ shōudào nǐ de yóujiàn le.', 'Tôi nhận được email của bạn rồi.'])
    ],
    qs: [
      ['mc', '“Tôi nghe không hiểu” là?', '我没听懂。', ['我听没懂。', '我不听懂了。', '我听懂没。'], '没 + V + bổ ngữ.'],
      ['mc', '我___钥匙了。(tìm thấy)', '找到', ['找完', '找错', '找好了到'], '找到.'],
      ['mc', '作业做___了。(xong)', '完', ['到', '懂', '见'], '做完.'],
      ['mc', '收到 nghĩa là?', 'nhận được', ['gửi đi', 'tìm thấy', 'nhìn thấy'], 'shōudào.'],
      ['hear', '资料准备好了吗？', 'Tài liệu chuẩn bị xong chưa?', ['Tài liệu ở đâu?', 'Tài liệu sai rồi.', 'Ai chuẩn bị tài liệu?'], '准备好.'],
      ['hear', '对不起，我写错了你的名字。', 'Xin lỗi, tôi viết sai tên bạn.', ['Tôi quên tên bạn.', 'Tôi viết đúng tên bạn.', 'Tên bạn đẹp quá.'], '写错.'],
      ['order', 'Sắp xếp: “Tôi nhận được email của bạn rồi.”', ['我', '收到', '你的邮件', '了。'], '我收到你的邮件了。']
    ],
    noi: [['你听懂了吗？', 'Nǐ tīngdǒng le ma? – Bạn nghe hiểu chưa?'], ['我找到钥匙了！', 'Wǒ zhǎodào yàoshi le! – Tôi tìm thấy chìa khoá rồi!'], ['资料都准备好了。', 'Zīliào dōu zhǔnbèi hǎo le. – Tài liệu đều chuẩn bị xong.']],
    hoithoai: {
      ctx: 'Trước buổi họp với khách Trung Quốc, trưởng nhóm kiểm tra công việc.', vai: 'Chị Lý hỏi, em báo cáo.', ai: '👩‍💼 李经理',
      luot: [
        T(['资料准备好了吗？', 'Zīliào zhǔnbèi hǎo le ma?', 'Tài liệu chuẩn bị xong chưa?'], ['准备好了，我已经打印完了。', 'Zhǔnbèi hǎo le, wǒ yǐjīng dǎyìn wán le.', 'Xong rồi, tôi đã in xong.', 'Bổ ngữ kết quả.'], ['准备了好。', 'Zhǔnbèile hǎo.', 'Sai vị trí 了.'], ['没准备好了。', 'Méi zhǔnbèi hǎo le.', 'Thừa 了.']),
        T(['你收到客户的邮件了吗？', 'Nǐ shōudào kèhù de yóujiàn le ma?', 'Bạn nhận được email của khách chưa?'], ['收到了，可是有一句我没看懂。', 'Shōudào le, kěshì yǒu yí jù wǒ méi kàndǒng.', 'Nhận rồi, nhưng có một câu tôi đọc chưa hiểu.', '没 + V + 懂.'], ['我收没到。', 'Wǒ shōu méi dào.', 'Sai.'], ['我看不懂了过。', 'Wǒ kàn bù dǒng le guo.', 'Sai.']),
        T(['给我看看。哦，这个字你写错了。', 'Gěi wǒ kànkan. Ò, zhège zì nǐ xiěcuò le.', 'Để tôi xem. À, chữ này em viết sai.'], ['谢谢经理，我马上改。', 'Xièxie jīnglǐ, wǒ mǎshàng gǎi.', 'Cảm ơn chị, em sửa ngay.', 'Đáp lịch sự.'], ['我写对了。', 'Wǒ xiěduì le.', 'Cãi lại.'], ['我没写错了。', 'Wǒ méi xiěcuò le.', 'Thừa 了.'])
      ], ket: 'Em đã báo cáo công việc bằng bổ ngữ kết quả.'
    },
    tom: ['V + 完/好/到/懂/错/见', '没 + V + bổ ngữ'], nguphap: 'Bổ ngữ kết quả', phatam: '找到 zhǎodào, 听懂 tīngdǒng',
    loi: ['没 … 了', 'Đặt 了 giữa động từ và bổ ngữ'], btvn: ['Viết 6 câu dùng 6 bổ ngữ kết quả khác nhau', 'Báo cáo việc hôm nay bằng 5 câu', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 3 ================= */
  const d3 = {
    n: 3, ten: plan[2].ten, kinds: K,
    muc: 'Dùng bổ ngữ xu hướng để chỉ hướng chuyển động: 进来, 出去, 回来, 上去, 拿过来.',
    hoc: `<p><b>来</b> = hướng về phía người nói · <b>去</b> = hướng ra xa người nói.</p>${tbl(['', '+ 来', '+ 去'], [['上 lên', '上来 lên đây', '上去 lên đó'], ['下 xuống', '下来 xuống đây', '下去 xuống đó'], ['进 vào', '进来 vào đây', '进去 vào đó'], ['出 ra', '出来 ra đây', '出去 ra ngoài'], ['回 về', '回来 về đây', '回去 về đó'], ['过 qua', '过来 qua đây', '过去 qua đó']])}
      ${exs([['请进来！', 'Qǐng jìnlai!', 'Mời vào!'], ['他回家去了。', 'Tā huí jiā qù le.', 'Anh ấy về nhà rồi.'], ['把那本书拿过来。', 'Bǎ nà běn shū ná guòlai.', 'Lấy quyển sách đó qua đây.']])}
      ${tip('🔑 Tân ngữ chỉ nơi chốn đứng <b>trước</b> 来/去: 回<b>家</b>去, 进<b>教室</b>来.')}`,
    vocab: [
      w('进来', 'jìnlai', 'đi vào (đây)', '', ['请进来坐。', 'Qǐng jìnlai zuò.', 'Mời vào ngồi.']),
      w('出去', 'chūqu', 'đi ra ngoài', '', ['我出去一下。', 'Wǒ chūqu yíxià.', 'Tôi ra ngoài một lát.']),
      w('回来', 'huílai', 'trở về', '', ['你什么时候回来？', 'Nǐ shénme shíhou huílai?', 'Khi nào bạn về?']),
      w('上去', 'shàngqu', 'đi lên (đó)', '', ['我们坐电梯上去吧。', 'Wǒmen zuò diàntī shàngqu ba.', 'Chúng ta đi thang máy lên nhé.']),
      w('下来', 'xiàlai', 'đi xuống (đây)', '', ['你下来吧，我在门口。', 'Nǐ xiàlai ba, wǒ zài ménkǒu.', 'Bạn xuống đi, tôi ở cửa.']),
      w('拿', 'ná', 'cầm, lấy', '', ['帮我拿一下。', 'Bāng wǒ ná yíxià.', 'Cầm giúp tôi một chút.']),
      w('电梯', 'diàntī', 'thang máy', '', ['电梯坏了。', 'Diàntī huài le.', 'Thang máy hỏng rồi.']),
      w('楼', 'lóu', 'tầng, toà nhà', '', ['我住在五楼。', 'Wǒ zhù zài wǔ lóu.', 'Tôi ở tầng 5.']),
      w('门口', 'ménkǒu', 'cửa ra vào', '', ['我在门口等你。', 'Wǒ zài ménkǒu děng nǐ.', 'Tôi đợi bạn ở cửa.']),
      w('搬', 'bān', 'bê, chuyển', '', ['把箱子搬进来。', 'Bǎ xiāngzi bān jìnlai.', 'Bê thùng vào đây.'])
    ],
    qs: [
      ['mc', 'Người nói ở trong phòng, mời khách vào: ', '请进来！', ['请进去！', '请出来！', '请出去！'], 'Hướng về người nói → 来.'],
      ['mc', '他回___去了。', '家', ['来', '了', '上'], 'Nơi chốn trước 去.'],
      ['mc', 'Bạn ở tầng 1, gọi bạn ở tầng 5 xuống: 你___吧！', '下来', ['下去', '上来', '上去'], 'Xuống về phía người nói.'],
      ['mc', '电梯 nghĩa là?', 'thang máy', ['điện thoại', 'cầu thang bộ', 'cửa ra vào'], 'diàntī.'],
      ['hear', '我出去一下，马上回来。', 'Tôi ra ngoài một lát, về ngay.', ['Tôi vào trong, ra ngay.', 'Tôi về nhà luôn.', 'Tôi đi lên tầng.'], '出去 / 回来.'],
      ['hear', '我们坐电梯上去吧。', 'Mình đi thang máy lên nhé.', ['Mình đi thang bộ xuống.', 'Thang máy hỏng rồi.', 'Mình ra ngoài nhé.'], '上去.'],
      ['order', 'Sắp xếp: “Bê thùng vào đây.”', ['把', '箱子', '搬', '进来。'], '把箱子搬进来。']
    ],
    noi: [['请进来坐。', 'Qǐng jìnlai zuò. – Mời vào ngồi.'], ['我出去一下，马上回来。', 'Wǒ chūqu yíxià, mǎshàng huílai. – Tôi ra ngoài chút, về ngay.'], ['你下来吧，我在门口。', 'Nǐ xiàlai ba, wǒ zài ménkǒu. – Bạn xuống đi, tôi ở cửa.']],
    hoithoai: {
      ctx: 'Em giao hàng máy tính đến văn phòng khách Trung Quốc ở tầng 8.', vai: 'Khách gọi điện, em trả lời.', ai: '📞 张先生',
      luot: [
        T(['你到了吗？', 'Nǐ dào le ma?', 'Bạn đến chưa?'], ['到了，我在楼下门口。', 'Dào le, wǒ zài lóu xià ménkǒu.', 'Đến rồi, tôi ở cửa dưới toà nhà.', 'Báo vị trí.'], ['我到去了。', 'Wǒ dào qù le.', 'Sai.'], ['我还没出来。', 'Wǒ hái méi chūlai.', 'Không hợp.']),
        T(['你坐电梯上来吧，八楼。', 'Nǐ zuò diàntī shànglai ba, bā lóu.', 'Bạn đi thang máy lên đây, tầng 8.'], ['好的，我马上上去。', 'Hǎo de, wǒ mǎshàng shàngqu.', 'Vâng, tôi lên ngay.', 'Người nói ở dưới → 上去.'], ['好的，我马上下来。', 'Hǎo de, wǒ mǎshàng xiàlai.', 'Sai hướng.'], ['我上楼来了去。', 'Wǒ shàng lóu lái le qù.', 'Sai.']),
        T(['请进来！东西多吗？', 'Qǐng jìnlai! Dōngxi duō ma?', 'Mời vào! Đồ nhiều không?'], ['有三个箱子，我搬进来吧。', 'Yǒu sān ge xiāngzi, wǒ bān jìnlai ba.', 'Có ba thùng, tôi bê vào nhé.', 'V + 进来.'], ['我搬出去吧。', 'Wǒ bān chūqu ba.', 'Ngược hướng.'], ['箱子进来搬。', 'Xiāngzi jìnlai bān.', 'Sai trật tự.'])
      ], ket: 'Em đã chỉ hướng chuyển động chính xác bằng bổ ngữ xu hướng.'
    },
    tom: ['V + 来/去', '上/下/进/出/回/过 + 来/去', 'Nơi chốn trước 来/去'], nguphap: 'Bổ ngữ xu hướng đơn và kép', phatam: '来 lai, 去 qu đọc nhẹ khi làm bổ ngữ',
    loi: ['Nhầm hướng 来/去', '回去家 (sai vị trí)'], btvn: ['Mô tả đường đi từ cổng lên phòng làm việc bằng 5 câu', 'Viết 6 câu với 6 bổ ngữ xu hướng', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 4 ================= */
  const d4 = {
    n: 4, ten: plan[3].ten, kinds: K,
    muc: 'So sánh hơn với 比, không bằng với 没有…那么, bằng nhau với 跟…一样; thêm mức độ 一点儿, 多了, 得多.',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ'], [['A 比 B + tính từ', '今天比昨天热。– Hôm nay nóng hơn hôm qua.'], ['A 比 B + tính từ + 一点儿 / 多了', '这个比那个贵一点儿 / 贵多了。'], ['A 没有 B (那么) + tính từ', '河内没有胡志明市那么热。– Hà Nội không nóng bằng TP.HCM.'], ['A 跟 B 一样 (+ tính từ)', '我跟他一样高。– Tôi cao bằng anh ấy.'], ['A 比 B + V + 得 + tính từ', '他比我跑得快。– Anh ấy chạy nhanh hơn tôi.']])}
      ${tip('⚠️ Không dùng 很, 非常 trong câu 比: ❌ 今天比昨天很热 → ✅ 今天比昨天热多了。')}`,
    vocab: [
      w('比', 'bǐ', 'so với, hơn', '', ['我比他大两岁。', 'Wǒ bǐ tā dà liǎng suì.', 'Tôi lớn hơn anh ấy hai tuổi.']),
      w('一样', 'yíyàng', 'giống nhau', '', ['我们的手机一样。', 'Wǒmen de shǒujī yíyàng.', 'Điện thoại chúng tôi giống nhau.']),
      w('那么', 'nàme', 'như thế, đến thế', '', ['北京没有上海那么热。', 'Běijīng méiyǒu Shànghǎi nàme rè.', 'Bắc Kinh không nóng bằng Thượng Hải.']),
      w('多了', 'duō le', 'hơn nhiều', '', ['这个便宜多了。', 'Zhège piányi duō le.', 'Cái này rẻ hơn nhiều.']),
      w('更', 'gèng', 'càng, hơn nữa', '', ['我更喜欢这个。', 'Wǒ gèng xǐhuan zhège.', 'Tôi thích cái này hơn.']),
      w('便宜', 'piányi', 'rẻ', '', ['网上买更便宜。', 'Wǎngshang mǎi gèng piányi.', 'Mua trên mạng rẻ hơn.']),
      w('轻', 'qīng', 'nhẹ', '', ['这台电脑比那台轻。', 'Zhè tái diànnǎo bǐ nà tái qīng.', 'Máy này nhẹ hơn máy kia.']),
      w('重', 'zhòng', 'nặng', '', ['行李太重了。', 'Xíngli tài zhòng le.', 'Hành lý nặng quá.']),
      w('质量', 'zhìliàng', 'chất lượng', '', ['这个质量更好。', 'Zhège zhìliàng gèng hǎo.', 'Cái này chất lượng tốt hơn.']),
      w('差不多', 'chàbuduō', 'gần như nhau, xấp xỉ', '', ['价格差不多。', 'Jiàgé chàbuduō.', 'Giá xấp xỉ nhau.'])
    ],
    qs: [
      ['mc', '“Hôm nay nóng hơn hôm qua nhiều” là?', '今天比昨天热多了。', ['今天比昨天很热。', '今天热比昨天多。', '今天比昨天非常热。'], 'Không dùng 很 trong câu 比.'],
      ['mc', '“Hà Nội không nóng bằng TP.HCM”?', '河内没有胡志明市那么热。', ['河内不比胡志明市热了。', '河内比胡志明市没热。', '河内没胡志明市热比。'], '没有…那么.'],
      ['mc', '我___他一样高。', '跟', ['比', '没有', '那么'], '跟…一样.'],
      ['mc', '差不多 nghĩa là?', 'xấp xỉ, gần như nhau', ['khác hẳn', 'rẻ hơn', 'tốt hơn'], 'chàbuduō.'],
      ['hear', '这台电脑比那台轻一点儿，可是贵多了。', 'Máy này nhẹ hơn chút nhưng đắt hơn nhiều.', ['Máy này nặng hơn và rẻ hơn.', 'Hai máy giống nhau.', 'Máy này rẻ hơn nhiều.'], '轻一点儿 / 贵多了.'],
      ['hear', '他比我跑得快。', 'Anh ấy chạy nhanh hơn tôi.', ['Tôi chạy nhanh hơn anh ấy.', 'Hai người chạy như nhau.', 'Anh ấy không chạy.'], '比 + V得.'],
      ['order', 'Sắp xếp: “Tôi lớn hơn anh ấy hai tuổi.”', ['我', '比他', '大', '两岁。'], '我比他大两岁。']
    ],
    noi: [['今天比昨天热多了。', 'Jīntiān bǐ zuótiān rè duō le. – Hôm nay nóng hơn hôm qua nhiều.'], ['这个质量更好。', 'Zhège zhìliàng gèng hǎo. – Cái này chất lượng tốt hơn.'], ['价格差不多。', 'Jiàgé chàbuduō. – Giá xấp xỉ nhau.']],
    hoithoai: {
      ctx: 'Khách người Trung Quốc so sánh hai mẫu laptop ở cửa hàng em.', vai: 'Khách hỏi, em tư vấn.', ai: '🧑 顾客',
      luot: [
        T(['这两台电脑哪台好？', 'Zhè liǎng tái diànnǎo nǎ tái hǎo?', 'Hai máy này máy nào tốt?'], ['这台比那台轻，电池也更好。', 'Zhè tái bǐ nà tái qīng, diànchí yě gèng hǎo.', 'Máy này nhẹ hơn máy kia, pin cũng tốt hơn.', '比 + 更.'], ['这台比那台很轻。', 'Zhè tái bǐ nà tái hěn qīng.', 'Không dùng 很.'], ['这台轻比那台。', 'Zhè tái qīng bǐ nà tái.', 'Sai trật tự.']),
        T(['价格呢？', 'Jiàgé ne?', 'Giá thì sao?'], ['这台贵一点儿，贵五十万越南盾。', 'Zhè tái guì yìdiǎnr, guì wǔshí wàn Yuènán dùn.', 'Máy này đắt hơn chút, đắt hơn 500 nghìn đồng.', '一点儿.'], ['这台比那台一点儿贵。', 'Zhè tái bǐ nà tái yìdiǎnr guì.', 'Sai vị trí 一点儿.'], ['价格一样贵多了。', 'Jiàgé yíyàng guì duō le.', 'Mâu thuẫn.']),
        T(['那台质量没有这台好吗？', 'Nà tái zhìliàng méiyǒu zhè tái hǎo ma?', 'Máy kia chất lượng không bằng máy này à?'], ['质量差不多，只是这台更轻。', 'Zhìliàng chàbuduō, zhǐshì zhè tái gèng qīng.', 'Chất lượng xấp xỉ, chỉ là máy này nhẹ hơn.', 'Tư vấn trung thực.'], ['那台没有这台。', 'Nà tái méiyǒu zhè tái.', 'Câu cụt.'], ['一样比好。', 'Yíyàng bǐ hǎo.', 'Sai.'])
      ], ket: 'Em đã tư vấn khách bằng các cấu trúc so sánh.'
    },
    tom: ['A 比 B + adj (+ 一点儿/多了)', 'A 没有 B 那么 + adj', 'A 跟 B 一样'], nguphap: 'Câu so sánh', phatam: '比 bǐ thanh 3; 一样 yíyàng biến điệu',
    loi: ['比 + 很', 'Đặt 一点儿 trước tính từ'], btvn: ['So sánh 2 thành phố em biết bằng 6 câu', 'So sánh 2 sản phẩm bằng 3 cấu trúc', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 5 ================= */
  const d5 = {
    n: 5, ten: plan[4].ten, kinds: K,
    muc: 'Dùng câu chữ 把 để nhấn việc xử lý một đồ vật xác định: 把门关上, 把文件发给我.',
    hoc: `${F(['Chủ ngữ', '+', '把', '+', 'Tân ngữ (xác định)', '+', 'Động từ', '+', 'thành phần khác'])}${exs([['请把门关上。', 'Qǐng bǎ mén guānshang.', 'Làm ơn đóng cửa lại.'], ['我把作业做完了。', 'Wǒ bǎ zuòyè zuòwán le.', 'Tôi đã làm xong bài tập.'], ['你把文件发给我吧。', 'Nǐ bǎ wénjiàn fā gěi wǒ ba.', 'Bạn gửi tài liệu cho tôi nhé.'], ['别把手机放在桌子上。', 'Bié bǎ shǒujī fàng zài zhuōzi shang.', 'Đừng để điện thoại trên bàn.']])}
      ${tip('⚠️ Sau động từ trong câu 把 <b>phải có thành phần khác</b> (了, bổ ngữ, 在/给 + …). ❌ 我把饭吃 → ✅ 我把饭吃完了。 Phủ định: 没/别 đứng <b>trước</b> 把.')}`,
    vocab: [
      w('把', 'bǎ', '(giới từ) đem, lấy… (câu chữ 把)', '', ['把书给我。', 'Bǎ shū gěi wǒ.', 'Đưa sách cho tôi.']),
      w('关上', 'guānshang', 'đóng lại', '', ['把窗户关上。', 'Bǎ chuānghu guānshang.', 'Đóng cửa sổ lại.']),
      w('打开', 'dǎkāi', 'mở ra', '', ['请把电脑打开。', 'Qǐng bǎ diànnǎo dǎkāi.', 'Mở máy tính lên.']),
      w('放', 'fàng', 'đặt, để', '', ['把包放在这儿。', 'Bǎ bāo fàng zài zhèr.', 'Để túi ở đây.']),
      w('发', 'fā', 'gửi (tin, email)', '', ['我把照片发给你。', 'Wǒ bǎ zhàopiàn fā gěi nǐ.', 'Tôi gửi ảnh cho bạn.']),
      w('文件', 'wénjiàn', 'văn bản, tệp', '', ['文件在电脑里。', 'Wénjiàn zài diànnǎo li.', 'Tệp ở trong máy tính.']),
      w('窗户', 'chuānghu', 'cửa sổ', '', ['窗户开着。', 'Chuānghu kāizhe.', 'Cửa sổ đang mở.']),
      w('别', 'bié', 'đừng', '', ['别把钥匙忘了。', 'Bié bǎ yàoshi wàng le.', 'Đừng quên chìa khoá.']),
      w('忘', 'wàng', 'quên', '', ['我把密码忘了。', 'Wǒ bǎ mìmǎ wàng le.', 'Tôi quên mật khẩu rồi.']),
      w('密码', 'mìmǎ', 'mật khẩu', '', ['请输入密码。', 'Qǐng shūrù mìmǎ.', 'Vui lòng nhập mật khẩu.'])
    ],
    qs: [
      ['mc', 'Câu chữ 把 đúng là?', '我把饭吃完了。', ['我把饭吃。', '我吃把饭了。', '我把吃饭完了。'], 'Sau động từ phải có thành phần khác.'],
      ['mc', '“Đừng để điện thoại trên bàn” là?', '别把手机放在桌子上。', ['把手机别放在桌子上。', '别手机把放桌子。', '把别手机放。'], '别 trước 把.'],
      ['mc', '我___密码忘了。', '把', ['被', '比', '给'], 'Câu 把.'],
      ['mc', '密码 nghĩa là?', 'mật khẩu', ['tài liệu', 'mã vạch', 'số điện thoại'], 'mìmǎ.'],
      ['hear', '请把文件发给我。', 'Gửi tài liệu cho tôi.', ['Tôi gửi tài liệu cho bạn.', 'In tài liệu ra.', 'Tài liệu bị mất.'], '把文件发给我.'],
      ['hear', '你把窗户关上吧，外面下雨了。', 'Bạn đóng cửa sổ đi, ngoài trời mưa rồi.', ['Mở cửa sổ ra, trời nóng.', 'Cửa sổ hỏng rồi.', 'Đóng cửa chính lại.'], '关上.'],
      ['order', 'Sắp xếp: “Tôi quên mật khẩu rồi.”', ['我', '把', '密码', '忘了。'], '我把密码忘了。']
    ],
    noi: [['请把门关上。', 'Qǐng bǎ mén guānshang. – Làm ơn đóng cửa.'], ['我把文件发给你了。', 'Wǒ bǎ wénjiàn fā gěi nǐ le. – Tôi gửi tài liệu cho bạn rồi.'], ['我把密码忘了。', 'Wǒ bǎ mìmǎ wàng le. – Tôi quên mật khẩu rồi.']],
    hoithoai: {
      ctx: 'Một nhân viên người Trung Quốc gọi IT vì không đăng nhập được máy tính.', vai: 'Nhân viên mô tả, em hướng dẫn.', ai: '👩 小陈',
      luot: [
        T(['不好意思，我把密码忘了。', 'Bù hǎoyìsi, wǒ bǎ mìmǎ wàng le.', 'Xin lỗi, tôi quên mật khẩu rồi.'], ['没关系，请先把电脑打开。', 'Méi guānxi, qǐng xiān bǎ diànnǎo dǎkāi.', 'Không sao, trước tiên mở máy tính lên.', 'Câu 把 hướng dẫn.'], ['请把电脑打。', 'Qǐng bǎ diànnǎo dǎ.', 'Thiếu bổ ngữ 开.'], ['把别电脑打开。', 'Bǎ bié diànnǎo dǎkāi.', 'Sai.']),
        T(['打开了。然后呢？', 'Dǎkāi le. Ránhòu ne?', 'Mở rồi. Rồi sao nữa?'], ['我把新密码发给你，你看手机。', 'Wǒ bǎ xīn mìmǎ fā gěi nǐ, nǐ kàn shǒujī.', 'Tôi gửi mật khẩu mới cho bạn, bạn xem điện thoại.', '把 + 发给.'], ['我发把密码给你。', 'Wǒ fā bǎ mìmǎ gěi nǐ.', 'Sai vị trí 把.'], ['你把手机。', 'Nǐ bǎ shǒujī.', 'Câu cụt.']),
        T(['收到了，谢谢！', 'Shōudào le, xièxie!', 'Nhận được rồi, cảm ơn!'], ['不客气。别把密码告诉别人。', 'Bú kèqi. Bié bǎ mìmǎ gàosu biérén.', 'Không có gì. Đừng nói mật khẩu cho người khác.', '别 + 把.'], ['把别密码告诉。', 'Bǎ bié mìmǎ gàosu.', 'Sai.'], ['请把密码告诉别人。', 'Qǐng bǎ mìmǎ gàosu biérén.', 'Sai nghĩa nguy hiểm.'])
      ], ket: 'Em đã hướng dẫn kỹ thuật bằng câu chữ 把.'
    },
    tom: ['S + 把 + O + V + khác', '别/没 trước 把'], nguphap: 'Câu chữ 把', phatam: '把 bǎ thanh 3',
    loi: ['Động từ trơn cuối câu 把', 'Đặt 没/别 sau 把'], btvn: ['Viết 6 câu chữ 把 về việc nhà', 'Viết hướng dẫn 5 bước dùng 把', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 6 ================= */
  const d6 = {
    n: 6, ten: plan[5].ten, kinds: K,
    muc: 'Dùng câu bị động 被 (thường mang nghĩa không mong muốn); phân biệt với 把.',
    hoc: `${F(['Đối tượng chịu tác động', '+', '被', '+', '(người làm)', '+', 'Động từ', '+', 'thành phần khác'])}${exs([['我的手机被偷了。', 'Wǒ de shǒujī bèi tōu le.', 'Điện thoại tôi bị trộm rồi.'], ['蛋糕被弟弟吃完了。', 'Dàngāo bèi dìdi chīwán le.', 'Bánh bị em trai ăn hết rồi.'], ['他被老板批评了。', 'Tā bèi lǎobǎn pīpíng le.', 'Anh ấy bị sếp phê bình.']])}
      ${tbl(['把', '被'], [['我把杯子打破了。(Tôi làm vỡ cốc)', '杯子被我打破了。(Cốc bị tôi làm vỡ)'], ['Nhấn người làm', 'Nhấn vật bị tác động']])}`,
    vocab: [
      w('被', 'bèi', 'bị, được (bị động)', '', ['我的车被撞了。', 'Wǒ de chē bèi zhuàng le.', 'Xe tôi bị đâm.']),
      w('偷', 'tōu', 'trộm', '', ['钱包被偷了。', 'Qiánbāo bèi tōu le.', 'Ví bị trộm.']),
      w('批评', 'pīpíng', 'phê bình', '', ['他被老师批评了。', 'Tā bèi lǎoshī pīpíng le.', 'Cậu ấy bị thầy phê bình.']),
      w('打破', 'dǎpò', 'đánh vỡ', '', ['杯子被打破了。', 'Bēizi bèi dǎpò le.', 'Cốc bị vỡ.']),
      w('撞', 'zhuàng', 'đâm, va', '', ['他的自行车被撞坏了。', 'Tā de zìxíngchē bèi zhuàng huài le.', 'Xe đạp anh ấy bị đâm hỏng.']),
      w('钱包', 'qiánbāo', 'ví tiền', '', ['我的钱包不见了。', 'Wǒ de qiánbāo bújiàn le.', 'Ví tôi mất rồi.']),
      w('报警', 'bàojǐng', 'báo cảnh sát', '', ['你应该报警。', 'Nǐ yīnggāi bàojǐng.', 'Bạn nên báo cảnh sát.']),
      w('黑客', 'hēikè', 'tin tặc', '', ['账号被黑客攻击了。', 'Zhànghào bèi hēikè gōngjī le.', 'Tài khoản bị tin tặc tấn công.']),
      w('账号', 'zhànghào', 'tài khoản', '', ['我的账号被锁了。', 'Wǒ de zhànghào bèi suǒ le.', 'Tài khoản tôi bị khoá.']),
      w('倒霉', 'dǎoméi', 'xui xẻo', '', ['今天真倒霉！', 'Jīntiān zhēn dǎoméi!', 'Hôm nay xui thật!'])
    ],
    qs: [
      ['mc', '“Ví tôi bị trộm rồi” là?', '我的钱包被偷了。', ['我的钱包把偷了。', '我被钱包偷了。', '我的钱包偷被了。'], 'Vật + 被 + V.'],
      ['mc', '杯子___我打破了。', '被', ['把', '比', '给了'], 'Bị động.'],
      ['mc', '我___杯子打破了。', '把', ['被', '比', '跟'], 'Chủ động, câu 把.'],
      ['mc', '倒霉 nghĩa là?', 'xui xẻo', ['may mắn', 'mệt mỏi', 'tức giận'], 'dǎoméi.'],
      ['hear', '我的账号被黑客攻击了。', 'Tài khoản tôi bị tin tặc tấn công.', ['Tôi tấn công tin tặc.', 'Tài khoản tôi được nâng cấp.', 'Tôi quên tài khoản.'], '被黑客攻击.'],
      ['hear', '他被老板批评了，因为又迟到了。', 'Anh ấy bị sếp phê bình vì lại đi muộn.', ['Anh ấy được sếp khen.', 'Sếp đi muộn.', 'Anh ấy phê bình sếp.'], '被老板批评.'],
      ['order', 'Sắp xếp: “Tài khoản của tôi bị khoá rồi.”', ['我的账号', '被', '锁', '了。'], '我的账号被锁了。']
    ],
    noi: [['我的手机被偷了！', 'Wǒ de shǒujī bèi tōu le! – Điện thoại tôi bị trộm rồi!'], ['你应该马上报警。', 'Nǐ yīnggāi mǎshàng bàojǐng. – Bạn nên báo cảnh sát ngay.'], ['今天真倒霉！', 'Jīntiān zhēn dǎoméi! – Hôm nay xui thật!']],
    hoithoai: {
      ctx: 'Một khách hàng Trung Quốc gọi ngân hàng vì nghi tài khoản bị xâm nhập.', vai: 'Khách kể, em hỗ trợ.', ai: '😟 客户',
      luot: [
        T(['我的手机被偷了，银行卡怎么办？', 'Wǒ de shǒujī bèi tōu le, yínhángkǎ zěnme bàn?', 'Điện thoại tôi bị trộm, thẻ ngân hàng làm sao?'], ['别担心，我先把您的卡锁上。', 'Bié dānxīn, wǒ xiān bǎ nín de kǎ suǒshang.', 'Đừng lo, tôi khoá thẻ của anh trước.', 'Câu 把 xử lý.'], ['您的卡被我锁。', 'Nín de kǎ bèi wǒ suǒ.', 'Thiếu thành phần sau động từ.'], ['那太倒霉了，再见。', 'Nà tài dǎoméi le, zàijiàn.', 'Không hỗ trợ.']),
        T(['好的。我的账号会不会被别人用？', 'Hǎo de. Wǒ de zhànghào huì bu huì bèi biérén yòng?', 'Tài khoản tôi có bị người khác dùng không?'], ['卡已经被锁了，别人用不了。', 'Kǎ yǐjīng bèi suǒ le, biérén yòng bu liǎo.', 'Thẻ đã bị khoá, người khác không dùng được.', 'Bị động + trấn an.'], ['卡把锁了。', 'Kǎ bǎ suǒ le.', 'Sai.'], ['会，很危险。', 'Huì, hěn wēixiǎn.', 'Gây hoảng.']),
        T(['还要做什么？', 'Hái yào zuò shénme?', 'Còn phải làm gì nữa?'], ['您最好去报警，然后来银行办新卡。', 'Nín zuìhǎo qù bàojǐng, ránhòu lái yínháng bàn xīn kǎ.', 'Anh nên báo cảnh sát, rồi đến ngân hàng làm thẻ mới.', 'Hướng dẫn tiếp.'], ['没事，不用管。', 'Méishì, búyòng guǎn.', 'Thiếu trách nhiệm.'], ['把报警。', 'Bǎ bàojǐng.', 'Sai.'])
      ], ket: 'Em đã xử lý tình huống mất điện thoại bằng câu 被 và 把.'
    },
    tom: ['被 bị động', 'Phân biệt 把 / 被'], nguphap: 'Câu bị động 被', phatam: '被 bèi thanh 4',
    loi: ['Động từ trơn sau 被', 'Nhầm 把 / 被'], btvn: ['Kể một ngày xui xẻo bằng 5 câu 被', 'Đổi 5 câu 把 thành câu 被', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 7 ================= */
  const d7 = {
    n: 7, ten: plan[6].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Ôn giai đoạn 1: 了/过, bổ ngữ kết quả, bổ ngữ xu hướng, so sánh, 把, 被.',
    hoc: `<h4>Tóm tắt tuần 1</h4>${tbl(['Chủ điểm', 'Mẫu'], [['了 / 过', '我吃了。/ 我去过。/ 我没去过。'], ['Bổ ngữ kết quả', '做完、找到、听懂、写错'], ['Bổ ngữ xu hướng', '进来、出去、回家去、拿过来'], ['So sánh', 'A比B贵多了 / A没有B那么… / A跟B一样'], ['把', '把门关上、把文件发给我'], ['被', '手机被偷了、账号被锁了']])}`,
    qs: [['mc', '今天___昨天冷。', '比', ['被', '把', '跟'], 'So sánh.'], ['mc', '我的自行车___偷了。', '被', ['把', '比', '让'], 'Bị động.']],
    noi: [['我去过三次北京。', 'Wǒ qùguo sān cì Běijīng. – Tôi từng đi Bắc Kinh ba lần.'], ['请把文件发给我。', 'Qǐng bǎ wénjiàn fā gěi wǒ. – Gửi tài liệu cho tôi.']],
    hoithoai: {
      ctx: 'Tổng ôn: buổi trò chuyện với đồng nghiệp Trung Quốc.', vai: 'Trả lời liên tục, đúng ngữ pháp.', ai: '👨 小刘',
      luot: [
        T(['你学过中文吗？', 'Nǐ xuéguo Zhōngwén ma?', 'Bạn từng học tiếng Trung chưa?'], ['学过，我学了一年了。', 'Xuéguo, wǒ xuéle yì nián le.', 'Học rồi, tôi học được một năm rồi.', '过 + 了…了.'], ['我学了过。', 'Wǒ xuéle guo.', 'Sai.'], ['我没学过了。', 'Wǒ méi xuéguo le.', 'Sai.']),
        T(['中文比英文难吗？', 'Zhōngwén bǐ Yīngwén nán ma?', 'Tiếng Trung khó hơn tiếng Anh không?'], ['汉字比英文难多了，可是语法没有英文那么难。', 'Hànzì bǐ Yīngwén nán duō le, kěshì yǔfǎ méiyǒu Yīngwén nàme nán.', 'Chữ Hán khó hơn nhiều, nhưng ngữ pháp không khó bằng tiếng Anh.', 'Hai cấu trúc so sánh.'], ['汉字比英文很难。', 'Hànzì bǐ Yīngwén hěn nán.', 'Không dùng 很.'], ['一样难比。', 'Yíyàng nán bǐ.', 'Sai.']),
        T(['昨天的会议你听懂了吗？', 'Zuótiān de huìyì nǐ tīngdǒng le ma?', 'Cuộc họp hôm qua bạn nghe hiểu chưa?'], ['大部分听懂了，我把笔记发给你吧。', 'Dà bùfen tīngdǒng le, wǒ bǎ bǐjì fā gěi nǐ ba.', 'Phần lớn hiểu, tôi gửi ghi chú cho bạn nhé.', 'Bổ ngữ + 把.'], ['我听没懂。', 'Wǒ tīng méi dǒng.', 'Sai.'], ['笔记被发给。', 'Bǐjì bèi fā gěi.', 'Câu cụt.'])
      ], ket: 'Em đã ôn trọn giai đoạn 1!'
    },
    tom: ['Ôn tuần 1', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn', phatam: 'Ôn thanh nhẹ 了 过',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: học lại ngày yếu', 'Làm ⚡ Luyện nhanh 2 lần', 'Viết đoạn 100 chữ dùng 把 và 被']
  };

  /* ================= NGÀY 8 ================= */
  const d8 = {
    n: 8, ten: plan[7].ten, kinds: K,
    muc: 'Dùng bổ ngữ khả năng V得/不 + bổ ngữ để nói có thể / không thể đạt kết quả.',
    hoc: `${tbl(['Khẳng định', 'Phủ định', 'Nghĩa'], [['听得懂', '听不懂', 'nghe hiểu được / không hiểu được'], ['看得见', '看不见', 'nhìn thấy được / không thấy'], ['做得完', '做不完', 'làm xong được / không xong'], ['买得到', '买不到', 'mua được / không mua được'], ['回得来', '回不来', 'về được / không về được'], ['吃得了', '吃不了', 'ăn hết được / không ăn hết']])}
      ${exs([['你听得懂上海话吗？', 'Nǐ tīng de dǒng Shànghǎi huà ma?', 'Bạn nghe hiểu tiếng Thượng Hải không?'], ['字太小了，我看不见。', 'Zì tài xiǎo le, wǒ kàn bu jiàn.', 'Chữ nhỏ quá, tôi không nhìn thấy.'], ['今天做不完，明天再做吧。', 'Jīntiān zuò bu wán, míngtiān zài zuò ba.', 'Hôm nay làm không xong, mai làm tiếp nhé.']])}
      ${tip('🔑 Câu hỏi: <b>V得…V不…?</b> 听得懂听不懂？ hoặc thêm 吗.')}`,
    vocab: [
      w('听得懂', 'tīng de dǒng', 'nghe hiểu được', '', ['我听得懂一点儿。', 'Wǒ tīng de dǒng yìdiǎnr.', 'Tôi nghe hiểu được chút ít.']),
      w('看不见', 'kàn bu jiàn', 'không nhìn thấy', '', ['后面的人看不见。', 'Hòumian de rén kàn bu jiàn.', 'Người phía sau không nhìn thấy.']),
      w('做不完', 'zuò bu wán', 'làm không xong', '', ['工作太多，做不完。', 'Gōngzuò tài duō, zuò bu wán.', 'Việc nhiều quá, làm không xuể.']),
      w('买不到', 'mǎi bu dào', 'không mua được', '', ['票买不到了。', 'Piào mǎi bu dào le.', 'Không mua được vé nữa.']),
      w('吃不了', 'chī bu liǎo', 'ăn không hết', '', ['太多了，我吃不了。', 'Tài duō le, wǒ chī bu liǎo.', 'Nhiều quá, tôi ăn không hết.']),
      w('来得及', 'lái de jí', 'kịp', '', ['现在去还来得及。', 'Xiànzài qù hái lái de jí.', 'Giờ đi vẫn còn kịp.']),
      w('来不及', 'lái bu jí', 'không kịp', '', ['快点，来不及了！', 'Kuài diǎn, lái bu jí le!', 'Nhanh lên, không kịp rồi!']),
      w('声音', 'shēngyīn', 'âm thanh, tiếng', '', ['声音太小了。', 'Shēngyīn tài xiǎo le.', 'Tiếng nhỏ quá.']),
      w('清楚', 'qīngchu', 'rõ ràng', '', ['我听不清楚。', 'Wǒ tīng bu qīngchu.', 'Tôi nghe không rõ.']),
      w('方言', 'fāngyán', 'tiếng địa phương', '', ['我听不懂方言。', 'Wǒ tīng bu dǒng fāngyán.', 'Tôi nghe không hiểu tiếng địa phương.'])
    ],
    qs: [
      ['mc', '“Tôi nghe không rõ” là?', '我听不清楚。', ['我不听清楚。', '我听没清楚。', '我清楚不听。'], 'V + 不 + bổ ngữ.'],
      ['mc', '“Giờ đi vẫn kịp” là?', '现在去还来得及。', ['现在去还来不及。', '现在去还不来及。', '现在来得去。'], '来得及.'],
      ['mc', '太多了，我吃___。', '不了', ['没了', '不完了吧', '得了不'], '吃不了.'],
      ['mc', '方言 nghĩa là?', 'tiếng địa phương', ['ngôn ngữ chuẩn', 'phương hướng', 'ngữ pháp'], 'fāngyán.'],
      ['hear', '票已经买不到了。', 'Không mua được vé nữa rồi.', ['Đã mua được vé.', 'Vé rất rẻ.', 'Chưa bán vé.'], '买不到.'],
      ['hear', '快点儿，要来不及了！', 'Nhanh lên, sắp không kịp rồi!', ['Từ từ, còn kịp.', 'Đến nơi rồi.', 'Đợi chút.'], '来不及.'],
      ['order', 'Sắp xếp: “Việc nhiều quá, làm không xong.”', ['工作', '太多，', '做不完', '。'], '工作太多，做不完。']
    ],
    noi: [['对不起，我听不清楚。', 'Duìbuqǐ, wǒ tīng bu qīngchu. – Xin lỗi, tôi nghe không rõ.'], ['现在去还来得及。', 'Xiànzài qù hái lái de jí. – Giờ đi vẫn kịp.'], ['太多了，我吃不了。', 'Tài duō le, wǒ chī bu liǎo. – Nhiều quá, tôi ăn không hết.']],
    hoithoai: {
      ctx: 'Cuộc họp trực tuyến với đối tác Trung Quốc, tiếng bị nhỏ.', vai: 'Đối tác nói, em phản hồi.', ai: '💻 赵总',
      luot: [
        T(['大家听得见吗？', 'Dàjiā tīng de jiàn ma?', 'Mọi người nghe thấy không?'], ['声音有点儿小，我听不清楚。', 'Shēngyīn yǒudiǎnr xiǎo, wǒ tīng bu qīngchu.', 'Tiếng hơi nhỏ, tôi nghe không rõ.', '听不清楚.'], ['我不听清楚。', 'Wǒ bù tīng qīngchu.', 'Sai.'], ['我听没见。', 'Wǒ tīng méi jiàn.', 'Sai.']),
        T(['现在呢？', 'Xiànzài ne?', 'Giờ thì sao?'], ['现在听得很清楚，谢谢。', 'Xiànzài tīng de hěn qīngchu, xièxie.', 'Giờ nghe rất rõ, cảm ơn.', 'Phản hồi.'], ['现在听不见了。', 'Xiànzài tīng bu jiàn le.', 'Mâu thuẫn.'], ['声音清楚不。', 'Shēngyīn qīngchu bù.', 'Sai.']),
        T(['报告明天做得完吗？', 'Bàogào míngtiān zuò de wán ma?', 'Báo cáo mai làm xong được không?'], ['明天恐怕做不完，周五可以吗？', 'Míngtiān kǒngpà zuò bu wán, zhōuwǔ kěyǐ ma?', 'E là mai không xong, thứ Sáu được không?', '做不完 + đề xuất.'], ['明天做完不。', 'Míngtiān zuò wán bù.', 'Sai.'], ['做得完不完明天。', 'Zuò de wán bu wán míngtiān.', 'Sai trật tự.'])
      ], ket: 'Em đã dùng bổ ngữ khả năng trong họp trực tuyến.'
    },
    tom: ['V得/不 + bổ ngữ', '来得及 / 来不及', 'V不了'], nguphap: 'Bổ ngữ khả năng', phatam: '得 de, 不 bu đọc nhẹ',
    loi: ['不 + V + bổ ngữ', 'Nhầm 没 và 不'], btvn: ['Viết 6 câu với bổ ngữ khả năng', 'Đóng vai họp online 5 lượt', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 9 ================= */
  const d9 = {
    n: 9, ten: plan[8].ten, kinds: K,
    muc: 'Dùng bổ ngữ trạng thái V + 得 + tính từ để nhận xét cách làm: 说得很流利, 跑得很快.',
    hoc: `${F(['(V + O) +', 'V', '+', '得', '+', '(很/非常) + tính từ'])}${exs([['你中文说得很好。', 'Nǐ Zhōngwén shuō de hěn hǎo.', 'Bạn nói tiếng Trung rất giỏi.'], ['他跑得非常快。', 'Tā pǎo de fēicháng kuài.', 'Anh ấy chạy rất nhanh.'], ['她唱歌唱得不太好。', 'Tā chàng gē chàng de bú tài hǎo.', 'Cô ấy hát không hay lắm.']])}
      ${tip('🔑 Có tân ngữ thì <b>lặp động từ</b>: 说中文<b>说</b>得…; hoặc đưa tân ngữ lên trước: 中文说得… Phủ định đặt <b>sau 得</b>: 说得<b>不</b>好.')}`,
    vocab: [
      w('流利', 'liúlì', 'lưu loát', '', ['他汉语说得很流利。', 'Tā Hànyǔ shuō de hěn liúlì.', 'Anh ấy nói tiếng Hán rất lưu loát.']),
      w('认真', 'rènzhēn', 'chăm chỉ, nghiêm túc', '', ['她工作得很认真。', 'Tā gōngzuò de hěn rènzhēn.', 'Cô ấy làm việc rất nghiêm túc.']),
      w('马马虎虎', 'mǎmǎhūhū', 'tạm được, qua loa', '', ['我说得马马虎虎。', 'Wǒ shuō de mǎmǎhūhū.', 'Tôi nói tạm được.']),
      w('标准', 'biāozhǔn', 'chuẩn', '', ['你的发音很标准。', 'Nǐ de fāyīn hěn biāozhǔn.', 'Phát âm của bạn rất chuẩn.']),
      w('发音', 'fāyīn', 'phát âm', '', ['他的发音不太好。', 'Tā de fāyīn bú tài hǎo.', 'Phát âm của anh ấy không tốt lắm.']),
      w('慢', 'màn', 'chậm', '', ['请说得慢一点儿。', 'Qǐng shuō de màn yìdiǎnr.', 'Làm ơn nói chậm một chút.']),
      w('早', 'zǎo', 'sớm', '', ['你今天来得很早。', 'Nǐ jīntiān lái de hěn zǎo.', 'Hôm nay bạn đến sớm thế.']),
      w('晚', 'wǎn', 'muộn', '', ['昨天我睡得很晚。', 'Zuótiān wǒ shuì de hěn wǎn.', 'Hôm qua tôi ngủ rất muộn.']),
      w('唱歌', 'chàng gē', 'hát', '', ['你唱歌唱得真好听。', 'Nǐ chàng gē chàng de zhēn hǎotīng.', 'Bạn hát hay thật.']),
      w('进步', 'jìnbù', 'tiến bộ', '', ['你进步得很快。', 'Nǐ jìnbù de hěn kuài.', 'Bạn tiến bộ rất nhanh.'])
    ],
    qs: [
      ['mc', '“Bạn nói tiếng Trung rất giỏi” là?', '你中文说得很好。', ['你说中文得很好。', '你中文很好说得。', '你说得中文很好。'], 'Tân ngữ đưa trước hoặc lặp động từ.'],
      ['mc', '“Cô ấy hát không hay lắm”?', '她唱歌唱得不太好。', ['她唱歌不唱得好。', '她不唱歌得好。', '她唱得歌不好。'], 'Phủ định sau 得.'],
      ['mc', '请说得___一点儿。', '慢', ['慢慢', '很慢', '慢得'], 'Nói chậm hơn một chút.'],
      ['mc', '流利 nghĩa là?', 'lưu loát', ['lưu ý', 'lợi ích', 'chậm rãi'], 'liúlì.'],
      ['hear', '你进步得很快，发音也很标准。', 'Bạn tiến bộ nhanh, phát âm cũng chuẩn.', ['Bạn tiến bộ chậm.', 'Phát âm chưa chuẩn.', 'Bạn nói quá nhanh.'], '进步得很快 / 标准.'],
      ['hear', '昨天我睡得很晚，今天起得也很晚。', 'Hôm qua ngủ muộn, hôm nay dậy cũng muộn.', ['Ngủ sớm dậy sớm.', 'Ngủ muộn dậy sớm.', 'Không ngủ.'], '睡得晚 / 起得晚.'],
      ['order', 'Sắp xếp: “Cô ấy làm việc rất nghiêm túc.”', ['她', '工作得', '很', '认真。'], '她工作得很认真。']
    ],
    noi: [['你中文说得很流利！', 'Nǐ Zhōngwén shuō de hěn liúlì! – Bạn nói tiếng Trung rất lưu loát!'], ['哪里哪里，我说得马马虎虎。', 'Nǎli nǎli, wǒ shuō de mǎmǎhūhū. – Đâu có, tôi nói tạm được thôi.'], ['请说得慢一点儿。', 'Qǐng shuō de màn yìdiǎnr. – Làm ơn nói chậm chút.']],
    hoithoai: {
      ctx: 'Em gặp lại thầy giáo tiếng Trung cũ sau một năm.', vai: 'Thầy Trương khen, em đáp khiêm tốn.', ai: '👨‍🏫 张老师',
      luot: [
        T(['你的中文说得越来越好了！', 'Nǐ de Zhōngwén shuō de yuè lái yuè hǎo le!', 'Tiếng Trung của em ngày càng giỏi!'], ['哪里哪里，我说得还不太好。', 'Nǎli nǎli, wǒ shuō de hái bú tài hǎo.', 'Đâu có ạ, em nói vẫn chưa giỏi lắm.', 'Đáp khiêm tốn kiểu Trung.'], ['是的，我说得很好。', 'Shì de, wǒ shuō de hěn hǎo.', 'Thiếu khiêm tốn.'], ['我不说得好。', 'Wǒ bù shuō de hǎo.', 'Sai vị trí 不.']),
        T(['你的发音很标准，每天练习吗？', 'Nǐ de fāyīn hěn biāozhǔn, měitiān liànxí ma?', 'Phát âm em rất chuẩn, ngày nào cũng luyện à?'], ['对，我每天跟着录音练习，进步得比较快。', 'Duì, wǒ měitiān gēnzhe lùyīn liànxí, jìnbù de bǐjiào kuài.', 'Vâng, ngày nào em cũng luyện theo băng, tiến bộ khá nhanh.', 'Bổ ngữ trạng thái.'], ['我练习很快得。', 'Wǒ liànxí hěn kuài de.', 'Sai.'], ['我进步快得很好。', 'Wǒ jìnbù kuài de hěn hǎo.', 'Sai.']),
        T(['汉字写得怎么样？', 'Hànzì xiě de zěnmeyàng?', 'Viết chữ Hán thế nào?'], ['写得马马虎虎，有时候还写错。', 'Xiě de mǎmǎhūhū, yǒu shíhou hái xiěcuò.', 'Viết tạm được, đôi khi còn viết sai.', 'Trung thực.'], ['汉字写得不。', 'Hànzì xiě de bù.', 'Câu cụt.'], ['我写汉字得好。', 'Wǒ xiě Hànzì de hǎo.', 'Sai.'])
      ], ket: 'Em đã nhận xét và đáp lời khen bằng bổ ngữ trạng thái.'
    },
    tom: ['V + 得 + adj', 'Lặp động từ khi có tân ngữ', '哪里哪里 đáp lời khen'], nguphap: 'Bổ ngữ trạng thái', phatam: '流利 liúlì, 标准 biāozhǔn',
    loi: ['不 trước 得', 'V + O + 得 (không lặp động từ)'], btvn: ['Nhận xét 5 người thân bằng bổ ngữ trạng thái', 'Tập đáp lời khen 3 cách', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 10 ================= */
  const d10 = {
    n: 10, ten: plan[9].ten, kinds: K,
    muc: 'Nói thời lượng hành động: 学了两年, 等了半个小时, 学了两年了 (vẫn đang học).',
    hoc: `${tbl(['Cấu trúc', 'Ví dụ', 'Nghĩa'], [['V + 了 + thời lượng', '我学了两年中文。', 'Tôi đã học tiếng Trung hai năm (có thể đã dừng).'], ['V + 了 + thời lượng + 了', '我学了两年中文了。', 'Tôi học hai năm rồi (vẫn đang học).'], ['V + O + V + 了 + thời lượng', '我等你等了半个小时。', 'Tôi đợi bạn nửa tiếng.'], ['Hỏi', '你学了多长时间？', 'Bạn học bao lâu rồi?']])}
      ${tip('🔑 Thời lượng đứng <b>sau</b> động từ (khác tiếng Việt cũng sau động từ nhưng khác tiếng Anh). Thời điểm (几点, 昨天) đứng <b>trước</b> động từ.')}`,
    vocab: [
      w('多长时间', 'duō cháng shíjiān', 'bao lâu', '', ['你等了多长时间？', 'Nǐ děngle duō cháng shíjiān?', 'Bạn đợi bao lâu?']),
      w('半个小时', 'bàn ge xiǎoshí', 'nửa tiếng', '', ['我等了半个小时。', 'Wǒ děngle bàn ge xiǎoshí.', 'Tôi đợi nửa tiếng.']),
      w('分钟', 'fēnzhōng', 'phút (thời lượng)', '', ['走路要十分钟。', 'Zǒulù yào shí fēnzhōng.', 'Đi bộ mất mười phút.']),
      w('星期', 'xīngqī', 'tuần', '', ['我在北京住了一个星期。', 'Wǒ zài Běijīng zhùle yí ge xīngqī.', 'Tôi ở Bắc Kinh một tuần.']),
      w('年', 'nián', 'năm', '', ['他工作了五年了。', 'Tā gōngzuòle wǔ nián le.', 'Anh ấy làm việc năm năm rồi.']),
      w('一直', 'yìzhí', 'luôn luôn, suốt', '', ['我一直在等你。', 'Wǒ yìzhí zài děng nǐ.', 'Tôi vẫn luôn đợi bạn.']),
      w('练习', 'liànxí', 'luyện tập', '', ['我每天练习一个小时。', 'Wǒ měitiān liànxí yí ge xiǎoshí.', 'Mỗi ngày tôi luyện một tiếng.']),
      w('坚持', 'jiānchí', 'kiên trì', '', ['学语言要坚持。', 'Xué yǔyán yào jiānchí.', 'Học ngoại ngữ phải kiên trì.']),
      w('左右', 'zuǒyòu', 'khoảng, chừng', '', ['三个小时左右。', 'Sān ge xiǎoshí zuǒyòu.', 'Khoảng ba tiếng.']),
      w('整天', 'zhěngtiān', 'cả ngày', '', ['他整天玩手机。', 'Tā zhěngtiān wán shǒujī.', 'Cậu ta chơi điện thoại cả ngày.'])
    ],
    qs: [
      ['mc', '“Tôi học hai năm rồi (vẫn đang học)”?', '我学了两年中文了。', ['我两年学中文了。', '我学中文了两年。', '我学两年了中文了。'], 'V + 了 + thời lượng + O + 了.'],
      ['mc', '“Tôi đợi bạn nửa tiếng” là?', '我等你等了半个小时。', ['我半个小时等你。', '我等了你半个小时了等。', '我等半个小时你了。'], 'Lặp động từ.'],
      ['mc', '你学了___？(bao lâu)', '多长时间', ['几点', '什么时候', '多少钱'], 'Hỏi thời lượng.'],
      ['mc', '坚持 nghĩa là?', 'kiên trì', ['luyện tập', 'bắt đầu', 'từ bỏ'], 'jiānchí.'],
      ['hear', '他在这家银行工作了八年了。', 'Anh ấy làm ở ngân hàng này 8 năm rồi.', ['Anh ấy làm 8 tháng.', 'Anh ấy sẽ làm 8 năm.', 'Anh ấy nghỉ được 8 năm.'], '八年了.'],
      ['hear', '从这儿到机场要四十分钟左右。', 'Từ đây ra sân bay mất khoảng 40 phút.', ['Mất 14 phút.', 'Mất 4 tiếng.', 'Sân bay rất gần.'], '四十分钟左右.'],
      ['order', 'Sắp xếp: “Mỗi ngày tôi luyện một tiếng.”', ['我', '每天', '练习', '一个小时。'], '我每天练习一个小时。']
    ],
    noi: [['你学了多长时间中文？', 'Nǐ xuéle duō cháng shíjiān Zhōngwén? – Bạn học tiếng Trung bao lâu?'], ['我学了一年多了。', 'Wǒ xuéle yì nián duō le. – Tôi học hơn một năm rồi.'], ['学语言要坚持。', 'Xué yǔyán yào jiānchí. – Học ngoại ngữ phải kiên trì.']],
    hoithoai: {
      ctx: 'Em phỏng vấn ứng viên người Trung Quốc cho vị trí trợ lý.', vai: 'Em hỏi về kinh nghiệm, ứng viên trả lời; lượt này em là ứng viên.', ai: '👔 面试官',
      luot: [
        T(['你在上一家公司工作了多长时间？', 'Nǐ zài shàng yì jiā gōngsī gōngzuòle duō cháng shíjiān?', 'Bạn làm ở công ty trước bao lâu?'], ['我在那儿工作了三年。', 'Wǒ zài nàr gōngzuòle sān nián.', 'Tôi làm ở đó ba năm.', 'V + 了 + thời lượng.'], ['我三年工作在那儿。', 'Wǒ sān nián gōngzuò zài nàr.', 'Sai trật tự.'], ['我工作在那儿了三年。', 'Wǒ gōngzuò zài nàr le sān nián.', 'Sai.']),
        T(['中文学了多久了？', 'Zhōngwén xuéle duō jiǔ le?', 'Tiếng Trung học bao lâu rồi?'], ['我学了两年多了，每天都坚持练习。', 'Wǒ xuéle liǎng nián duō le, měitiān dōu jiānchí liànxí.', 'Tôi học hơn hai năm rồi, ngày nào cũng kiên trì luyện.', '…了…了.'], ['我两年多学了。', 'Wǒ liǎng nián duō xué le.', 'Sai.'], ['我学了两年了多。', 'Wǒ xuéle liǎng nián le duō.', 'Sai vị trí 多.']),
        T(['从你家到公司要多长时间？', 'Cóng nǐ jiā dào gōngsī yào duō cháng shíjiān?', 'Từ nhà bạn đến công ty mất bao lâu?'], ['骑摩托车二十分钟左右。', 'Qí mótuōchē èrshí fēnzhōng zuǒyòu.', 'Đi xe máy khoảng 20 phút.', 'Thời lượng + 左右.'], ['二十点左右。', 'Èrshí diǎn zuǒyòu.', 'Nhầm thời điểm và thời lượng.'], ['我骑二十分。', 'Wǒ qí èrshí fēn.', 'Thiếu chính xác.'])
      ], ket: 'Em đã nói thời lượng chính xác trong phỏng vấn.'
    },
    tom: ['V + 了 + thời lượng (+ 了)', 'Lặp động từ khi có tân ngữ', '多长时间 / 多久'], nguphap: 'Bổ ngữ thời lượng', phatam: '小时 xiǎoshí, 分钟 fēnzhōng',
    loi: ['Đặt thời lượng trước động từ', 'Nhầm 点 (giờ) và 小时 (tiếng)'], btvn: ['Viết 6 câu về thời lượng học, làm việc, đi lại', 'Trả lời phỏng vấn 3 câu', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 11 ================= */
  const d11 = {
    n: 11, ten: plan[10].ten, kinds: K,
    muc: 'Nối câu nhượng bộ và nguyên nhân – kết quả: 虽然…但是/可是, 因为…所以, 不但…而且.',
    hoc: `${tbl(['Cặp liên từ', 'Nghĩa', 'Ví dụ'], [['虽然…但是/可是…', 'tuy… nhưng…', '虽然很累，但是很开心。'], ['因为…所以…', 'vì… nên…', '因为下雨，所以我没去。'], ['不但…而且…', 'không những… mà còn…', '他不但会说中文，而且会说韩语。'], ['…，所以…', 'cho nên (bỏ 因为)', '今天很忙，所以不能去。']])}
      ${tip('⚠️ Người Việt hay thiếu vế sau: ❌ 虽然很累，很开心 → ✅ 虽然很累，<b>但是</b>很开心。 Chủ ngữ chung đứng <b>sau</b> 不但: 他不但…而且….')}`,
    vocab: [
      w('虽然', 'suīrán', 'tuy, mặc dù', '', ['虽然很贵，但是质量很好。', 'Suīrán hěn guì, dànshì zhìliàng hěn hǎo.', 'Tuy đắt nhưng chất lượng tốt.']),
      w('但是', 'dànshì', 'nhưng', '', ['我想去，但是没时间。', 'Wǒ xiǎng qù, dànshì méi shíjiān.', 'Tôi muốn đi nhưng không có thời gian.']),
      w('因为', 'yīnwèi', 'bởi vì', '', ['因为生病，他没来。', 'Yīnwèi shēngbìng, tā méi lái.', 'Vì ốm nên anh ấy không đến.']),
      w('所以', 'suǒyǐ', 'cho nên', '', ['下雨了，所以我坐车去。', 'Xià yǔ le, suǒyǐ wǒ zuò chē qù.', 'Mưa rồi nên tôi đi xe.']),
      w('不但', 'búdàn', 'không những', '', ['他不但聪明，而且很努力。', 'Tā búdàn cōngming, érqiě hěn nǔlì.', 'Anh ấy không những thông minh mà còn chăm.']),
      w('而且', 'érqiě', 'mà còn, hơn nữa', '', ['这里很安静，而且很干净。', 'Zhèli hěn ānjìng, érqiě hěn gānjìng.', 'Ở đây yên tĩnh, hơn nữa rất sạch.']),
      w('累', 'lèi', 'mệt', '', ['今天我很累。', 'Jīntiān wǒ hěn lèi.', 'Hôm nay tôi rất mệt.']),
      w('努力', 'nǔlì', 'cố gắng, chăm chỉ', '', ['你要努力学习。', 'Nǐ yào nǔlì xuéxí.', 'Bạn phải cố gắng học.']),
      w('聪明', 'cōngming', 'thông minh', '', ['这个孩子很聪明。', 'Zhège háizi hěn cōngming.', 'Đứa bé này rất thông minh.']),
      w('安静', 'ānjìng', 'yên tĩnh', '', ['图书馆很安静。', 'Túshūguǎn hěn ānjìng.', 'Thư viện rất yên tĩnh.'])
    ],
    qs: [
      ['mc', '___很累，但是很开心。', '虽然', ['因为', '所以', '而且'], '虽然…但是.'],
      ['mc', '因为下雨，___我没去。', '所以', ['但是', '而且', '虽然'], '因为…所以.'],
      ['mc', 'Câu đúng là?', '他不但会说中文，而且会说韩语。', ['不但他会说中文，而且会说韩语。', '他不但会说中文，但是会说韩语。', '他会说中文不但，而且韩语。'], 'Chủ ngữ chung đứng trước 不但.'],
      ['mc', '安静 nghĩa là?', 'yên tĩnh', ['an toàn', 'sạch sẽ', 'thông minh'], 'ānjìng.'],
      ['hear', '虽然这家店有点儿远，但是菜很好吃。', 'Tuy quán hơi xa nhưng đồ ăn ngon.', ['Quán gần và ngon.', 'Quán xa và dở.', 'Quán đóng cửa.'], '虽然…但是.'],
      ['hear', '这个房子不但便宜，而且离公司很近。', 'Nhà này không những rẻ mà còn gần công ty.', ['Nhà đắt và xa.', 'Nhà rẻ nhưng xa.', 'Nhà gần nhưng đắt.'], '不但…而且.'],
      ['order', 'Sắp xếp: “Vì ốm nên anh ấy không đến.”', ['因为', '生病，', '所以他', '没来。'], '因为生病，所以他没来。']
    ],
    noi: [['虽然很累，但是很开心。', 'Suīrán hěn lèi, dànshì hěn kāixīn. – Tuy mệt nhưng vui.'], ['因为下雨，所以我没去。', 'Yīnwèi xià yǔ, suǒyǐ wǒ méi qù. – Vì mưa nên tôi không đi.'], ['他不但聪明，而且很努力。', 'Tā búdàn cōngming, érqiě hěn nǔlì. – Anh ấy không những thông minh mà còn chăm.']],
    hoithoai: {
      ctx: 'Đồng nghiệp hỏi em về căn hộ mới thuê.', vai: 'Tiểu Mai hỏi, em kể.', ai: '👩 小梅',
      luot: [
        T(['你的新房子怎么样？', 'Nǐ de xīn fángzi zěnmeyàng?', 'Nhà mới của bạn thế nào?'], ['不但很安静，而且离公司很近。', 'Búdàn hěn ānjìng, érqiě lí gōngsī hěn jìn.', 'Không những yên tĩnh mà còn gần công ty.', '不但…而且.'], ['不但安静，但是近。', 'Búdàn ānjìng, dànshì jìn.', 'Sai cặp.'], ['很安静而且。', 'Hěn ānjìng érqiě.', 'Câu cụt.']),
        T(['房租贵不贵？', 'Fángzū guì bu guì?', 'Tiền thuê đắt không?'], ['虽然有点儿贵，但是很值得。', 'Suīrán yǒudiǎnr guì, dànshì hěn zhídé.', 'Tuy hơi đắt nhưng rất đáng.', '虽然…但是.'], ['虽然贵，很值得。', 'Suīrán guì, hěn zhídé.', 'Thiếu 但是.'], ['因为贵，但是值得。', 'Yīnwèi guì, dànshì zhídé.', 'Sai cặp.']),
        T(['那你为什么搬家？', 'Nà nǐ wèishénme bānjiā?', 'Thế sao bạn chuyển nhà?'], ['因为以前的房子太吵了，所以我搬家了。', 'Yīnwèi yǐqián de fángzi tài chǎo le, suǒyǐ wǒ bānjiā le.', 'Vì nhà cũ ồn quá nên tôi chuyển.', '因为…所以.'], ['因为吵，而且我搬家。', 'Yīnwèi chǎo, érqiě wǒ bānjiā.', 'Sai cặp.'], ['所以吵因为搬家。', 'Suǒyǐ chǎo yīnwèi bānjiā.', 'Sai trật tự.'])
      ], ket: 'Em đã nối câu mạch lạc bằng các cặp liên từ.'
    },
    tom: ['虽然…但是', '因为…所以', '不但…而且'], nguphap: 'Câu phức nhượng bộ, nhân quả, tăng tiến', phatam: '虽然 suīrán, 而且 érqiě',
    loi: ['Thiếu vế sau', 'Ghép sai cặp liên từ'], btvn: ['Viết đoạn 80 chữ về nơi em sống dùng 3 cặp liên từ', 'Nói 1 phút về công việc', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 12 ================= */
  const d12 = {
    n: 12, ten: plan[11].ten, kinds: K,
    muc: 'Diễn đạt điều kiện và trình tự nhanh: 如果…就, 只要…就, 一…就, 要是…的话.',
    hoc: `${tbl(['Cấu trúc', 'Nghĩa', 'Ví dụ'], [['如果/要是…(的话)，就…', 'nếu… thì…', '如果明天下雨，我们就不去了。'], ['只要…就…', 'chỉ cần… là…', '只要努力，就能学好。'], ['一…就…', 'hễ… là…, vừa… đã…', '我一到家就给你打电话。'], ['除非…否则…', 'trừ khi… nếu không…', '除非你去，否则我不去。']])}
      ${tip('🔑 <b>就</b> đứng <b>sau chủ ngữ</b> của vế sau: 我<b>就</b>去 (❌ 就我去).')}`,
    vocab: [
      w('如果', 'rúguǒ', 'nếu', '', ['如果有问题，就给我打电话。', 'Rúguǒ yǒu wèntí, jiù gěi wǒ dǎ diànhuà.', 'Nếu có vấn đề thì gọi tôi.']),
      w('要是', 'yàoshi', 'nếu (khẩu ngữ)', '', ['要是你忙的话，就别来了。', 'Yàoshi nǐ máng de huà, jiù bié lái le.', 'Nếu bạn bận thì đừng đến.']),
      w('的话', 'de huà', 'nếu như (cuối vế)', '', ['明天有空的话，我们见面吧。', 'Míngtiān yǒu kòng de huà, wǒmen jiànmiàn ba.', 'Mai rảnh thì mình gặp nhé.']),
      w('只要', 'zhǐyào', 'chỉ cần', '', ['只要你喜欢就好。', 'Zhǐyào nǐ xǐhuan jiù hǎo.', 'Chỉ cần bạn thích là được.']),
      w('就', 'jiù', 'thì, liền', '', ['我马上就来。', 'Wǒ mǎshàng jiù lái.', 'Tôi tới ngay.']),
      w('一…就…', 'yī… jiù…', 'hễ… là…', '', ['他一喝酒就脸红。', 'Tā yì hē jiǔ jiù liǎn hóng.', 'Anh ấy hễ uống rượu là đỏ mặt.']),
      w('问题', 'wèntí', 'vấn đề, câu hỏi', '', ['没问题！', 'Méi wèntí!', 'Không vấn đề!']),
      w('有空', 'yǒu kòng', 'rảnh', '', ['你周末有空吗？', 'Nǐ zhōumò yǒu kòng ma?', 'Cuối tuần bạn rảnh không?']),
      w('马上', 'mǎshàng', 'ngay lập tức', '', ['我马上回来。', 'Wǒ mǎshàng huílai.', 'Tôi về ngay.']),
      w('否则', 'fǒuzé', 'nếu không thì', '', ['快走，否则来不及了。', 'Kuài zǒu, fǒuzé lái bu jí le.', 'Đi nhanh, không thì không kịp.'])
    ],
    qs: [
      ['mc', '如果明天下雨，我们___不去了。', '就', ['才', '还', '都'], '如果…就.'],
      ['mc', '只要努力，___能学好。', '就', ['才', '但是', '所以'], '只要…就.'],
      ['mc', '“Tôi hễ về đến nhà là gọi cho bạn”?', '我一到家就给你打电话。', ['我到家一就给你打电话。', '一我到家就打电话。', '我一到家给你就打电话。'], '一…就.'],
      ['mc', '否则 nghĩa là?', 'nếu không thì', ['vì vậy', 'tuy nhiên', 'chỉ cần'], 'fǒuzé.'],
      ['hear', '要是你有空的话，周末一起去爬山吧。', 'Nếu bạn rảnh thì cuối tuần cùng đi leo núi nhé.', ['Bạn bận thì thôi.', 'Cuối tuần tôi đi một mình.', 'Leo núi rất mệt.'], '要是…的话.'],
      ['hear', '他一下班就回家。', 'Anh ấy hễ tan làm là về nhà.', ['Anh ấy tan làm đi chơi.', 'Anh ấy làm thêm giờ.', 'Anh ấy về nhà muộn.'], '一…就.'],
      ['order', 'Sắp xếp: “Nếu có vấn đề thì gọi tôi.”', ['如果', '有问题，', '就', '给我打电话。'], '如果有问题，就给我打电话。']
    ],
    noi: [['如果有问题，就给我打电话。', 'Rúguǒ yǒu wèntí, jiù gěi wǒ dǎ diànhuà. – Có vấn đề thì gọi tôi.'], ['只要努力，就能学好。', 'Zhǐyào nǔlì, jiù néng xuéhǎo. – Chỉ cần cố gắng là học tốt.'], ['我一到家就给你打电话。', 'Wǒ yí dào jiā jiù gěi nǐ dǎ diànhuà. – Về đến nhà là tôi gọi bạn.']],
    hoithoai: {
      ctx: 'Khách Trung Quốc hỏi em về dịch vụ bảo hành laptop.', vai: 'Khách hỏi, em giải thích điều kiện.', ai: '🧑 顾客',
      luot: [
        T(['电脑坏了怎么办？', 'Diànnǎo huài le zěnme bàn?', 'Máy hỏng thì làm sao?'], ['如果一年内坏了，我们就免费修。', 'Rúguǒ yì nián nèi huài le, wǒmen jiù miǎnfèi xiū.', 'Nếu hỏng trong một năm thì chúng tôi sửa miễn phí.', '如果…就.'], ['如果坏了，就我们修。', 'Rúguǒ huài le, jiù wǒmen xiū.', '就 sau chủ ngữ.'], ['坏了就如果修。', 'Huài le jiù rúguǒ xiū.', 'Sai.']),
        T(['需要什么手续？', 'Xūyào shénme shǒuxù?', 'Cần thủ tục gì?'], ['只要带发票来就可以。', 'Zhǐyào dài fāpiào lái jiù kěyǐ.', 'Chỉ cần mang hoá đơn đến là được.', '只要…就.'], ['只要带发票，但是可以。', 'Zhǐyào dài fāpiào, dànshì kěyǐ.', 'Sai cặp.'], ['发票就只要。', 'Fāpiào jiù zhǐyào.', 'Sai.']),
        T(['修要多长时间？', 'Xiū yào duō cháng shíjiān?', 'Sửa mất bao lâu?'], ['一般三天左右，修好了我们就通知您。', 'Yìbān sān tiān zuǒyòu, xiūhǎo le wǒmen jiù tōngzhī nín.', 'Thường khoảng ba ngày, sửa xong chúng tôi báo anh ngay.', 'Thời lượng + 就.'], ['三点修好。', 'Sān diǎn xiūhǎo.', 'Nhầm giờ và thời lượng.'], ['修不了。', 'Xiū bu liǎo.', 'Không hợp.'])
      ], ket: 'Em đã giải thích chính sách bảo hành bằng câu điều kiện.'
    },
    tom: ['如果/要是…的话，就', '只要…就', '一…就'], nguphap: 'Câu điều kiện', phatam: '就 jiù, 如果 rúguǒ',
    loi: ['就 đứng trước chủ ngữ', 'Thiếu 就'], btvn: ['Viết 3 chính sách dịch vụ của cửa hàng bằng câu điều kiện', 'Viết 3 câu 一…就 về thói quen', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 13 ================= */
  const d13 = {
    n: 13, ten: plan[12].ten, kinds: K,
    muc: 'Mô tả triệu chứng, đi khám, mua thuốc, hiểu lời dặn của bác sĩ bằng tiếng Trung.',
    hoc: `${tbl(['Mẫu câu', 'Nghĩa'], [['我头疼 / 肚子疼 / 嗓子疼。', 'Tôi đau đầu / đau bụng / đau họng.'], ['我发烧了，三十八度。', 'Tôi sốt 38 độ.'], ['我咳嗽得很厉害。', 'Tôi ho rất nặng.'], ['一天三次，一次两片，饭后吃。', 'Ngày 3 lần, mỗi lần 2 viên, uống sau ăn.'], ['你对什么药过敏吗？', 'Bạn có dị ứng thuốc gì không?']])}
      ${tip('⚠️ Bài học ngôn ngữ, không phải tư vấn y tế. Khi ốm thật hãy làm theo hướng dẫn của bác sĩ, dược sĩ.')}`,
    vocab: [
      w('头疼', 'tóuténg', 'đau đầu', '', ['我头疼得厉害。', 'Wǒ tóuténg de lìhai.', 'Tôi đau đầu dữ dội.']),
      w('发烧', 'fāshāo', 'sốt', '', ['孩子发烧了。', 'Háizi fāshāo le.', 'Con bị sốt.']),
      w('咳嗽', 'késou', 'ho', '', ['我咳嗽了一个星期。', 'Wǒ késoule yí ge xīngqī.', 'Tôi ho một tuần rồi.']),
      w('感冒', 'gǎnmào', 'cảm cúm', '', ['我感冒了。', 'Wǒ gǎnmào le.', 'Tôi bị cảm.']),
      w('医院', 'yīyuàn', 'bệnh viện', '', ['你应该去医院。', 'Nǐ yīnggāi qù yīyuàn.', 'Bạn nên đi bệnh viện.']),
      w('药', 'yào', 'thuốc', '', ['这个药饭后吃。', 'Zhège yào fàn hòu chī.', 'Thuốc này uống sau ăn.']),
      w('片', 'piàn', 'viên (thuốc)', '', ['一次吃两片。', 'Yí cì chī liǎng piàn.', 'Mỗi lần uống 2 viên.']),
      w('过敏', 'guòmǐn', 'dị ứng', '', ['我对海鲜过敏。', 'Wǒ duì hǎixiān guòmǐn.', 'Tôi dị ứng hải sản.']),
      w('厉害', 'lìhai', 'dữ dội; giỏi', '', ['咳嗽得很厉害。', 'Késou de hěn lìhai.', 'Ho rất nặng.']),
      w('休息', 'xiūxi', 'nghỉ ngơi', '', ['你好好休息吧。', 'Nǐ hǎohǎo xiūxi ba.', 'Bạn nghỉ ngơi cho tốt nhé.'])
    ],
    qs: [
      ['mc', '“Tôi dị ứng hải sản” là?', '我对海鲜过敏。', ['我海鲜过敏对。', '我过敏海鲜。', '我跟海鲜过敏了。'], '对…过敏.'],
      ['mc', '一天三次，一次两___。(viên)', '片', ['个', '本', '张'], 'Lượng từ viên thuốc.'],
      ['mc', '感冒 nghĩa là?', 'cảm cúm', ['cảm ơn', 'cảm thấy', 'sốt cao'], 'gǎnmào.'],
      ['mc', '我咳嗽___很厉害。', '得', ['的', '地', '了'], 'Bổ ngữ trạng thái.'],
      ['hear', '我发烧了，三十八度五。', 'Tôi sốt 38,5 độ.', ['Tôi sốt 35,8 độ.', 'Tôi không sốt.', 'Tôi sốt 39 độ.'], '三十八度五.'],
      ['hear', '这个药一天吃三次，饭后吃。', 'Thuốc ngày 3 lần, uống sau ăn.', ['Ngày 1 lần trước ăn.', 'Ngày 3 lần trước ăn.', 'Uống khi đói.'], '一天三次 / 饭后.'],
      ['order', 'Sắp xếp: “Bạn nghỉ ngơi cho tốt nhé.”', ['你', '好好', '休息', '吧。'], '你好好休息吧。']
    ],
    noi: [['我头疼，还有点儿发烧。', 'Wǒ tóuténg, hái yǒudiǎnr fāshāo. – Tôi đau đầu, còn hơi sốt.'], ['我对青霉素过敏。', 'Wǒ duì qīngméisù guòmǐn. – Tôi dị ứng penicillin.'], ['你好好休息吧。', 'Nǐ hǎohǎo xiūxi ba. – Bạn nghỉ ngơi cho tốt.']],
    hoithoai: {
      ctx: 'Em đi công tác Quảng Châu, bị cảm và vào nhà thuốc.', vai: 'Dược sĩ hỏi, em trả lời.', ai: '💊 药剂师',
      luot: [
        T(['你哪儿不舒服？', 'Nǐ nǎr bù shūfu?', 'Bạn khó chịu ở đâu?'], ['我头疼，咳嗽得很厉害。', 'Wǒ tóuténg, késou de hěn lìhai.', 'Tôi đau đầu, ho rất nặng.', 'Mô tả triệu chứng.'], ['我很厉害。', 'Wǒ hěn lìhai.', 'Nghĩa là "tôi giỏi" 😄'], ['我疼头。', 'Wǒ téng tóu.', 'Sai trật tự.']),
        T(['发烧吗？对什么药过敏吗？', 'Fāshāo ma? Duì shénme yào guòmǐn ma?', 'Có sốt không? Dị ứng thuốc gì không?'], ['不发烧，我对药不过敏。', 'Bù fāshāo, wǒ duì yào bú guòmǐn.', 'Không sốt, tôi không dị ứng thuốc.', 'Trả lời đủ hai ý.'], ['我过敏发烧。', 'Wǒ guòmǐn fāshāo.', 'Sai.'], ['没过敏了。', 'Méi guòmǐn le.', 'Sai.']),
        T(['这个药一天三次，一次两片，饭后吃。', 'Zhège yào yì tiān sān cì, yí cì liǎng piàn, fàn hòu chī.', 'Thuốc này ngày 3 lần, mỗi lần 2 viên, sau ăn.'], ['一天三次，一次两片，饭后吃。谢谢！', 'Yì tiān sān cì, yí cì liǎng piàn, fàn hòu chī. Xièxie!', 'Ngày 3 lần, mỗi lần 2 viên, sau ăn. Cảm ơn!', 'Nhắc lại để xác nhận.'], ['一次三片吗？', 'Yí cì sān piàn ma?', 'Nghe nhầm.'], ['饭前吃，好的。', 'Fàn qián chī, hǎo de.', 'Nghe nhầm.'])
      ], ket: 'Em đã mua thuốc và hiểu lời dặn bằng tiếng Trung.'
    },
    tom: ['Triệu chứng', '对…过敏', 'Liều dùng'], nguphap: 'V + 得 + adj; 对…过敏', phatam: '咳嗽 késou, 过敏 guòmǐn',
    loi: ['Nhầm 厉害 (nặng) và giỏi', 'Nghe nhầm số lần, số viên'], btvn: ['Viết đoạn hội thoại ở phòng khám 8 lượt', 'Học thuộc 8 từ triệu chứng', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 14 ================= */
  const d14 = {
    n: 14, ten: plan[13].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Ôn giai đoạn 2: bổ ngữ khả năng, bổ ngữ trạng thái, thời lượng, liên từ, câu điều kiện, sức khoẻ.',
    hoc: `<h4>Tóm tắt tuần 2</h4>${tbl(['Chủ điểm', 'Mẫu'], [['Bổ ngữ khả năng', '听得懂 / 听不懂、来得及 / 来不及'], ['Bổ ngữ trạng thái', '说得很流利、写得不好'], ['Thời lượng', '学了两年了、等了半个小时'], ['Liên từ', '虽然…但是、因为…所以、不但…而且'], ['Điều kiện', '如果…就、只要…就、一…就'], ['Sức khoẻ', '头疼、发烧、一天三次、过敏']])}`,
    qs: [['mc', '虽然下雨，___我还是去了。', '但是', ['所以', '而且', '就'], '虽然…但是.'], ['mc', '我听___懂上海话。', '不', ['没', '得不', '了'], 'Bổ ngữ khả năng phủ định.']],
    noi: [['虽然很难，但是我会坚持。', 'Suīrán hěn nán, dànshì wǒ huì jiānchí. – Tuy khó nhưng tôi sẽ kiên trì.'], ['你说得太快了，我听不懂。', 'Nǐ shuō de tài kuài le, wǒ tīng bu dǒng. – Bạn nói nhanh quá, tôi nghe không hiểu.']],
    hoithoai: {
      ctx: 'Tổng ôn: buổi phỏng vấn tuyển trợ lý tiếng Trung.', vai: 'Nhà tuyển dụng hỏi, em trả lời.', ai: '👔 面试官',
      luot: [
        T(['你中文说得怎么样？', 'Nǐ Zhōngwén shuō de zěnmeyàng?', 'Tiếng Trung của bạn thế nào?'], ['说得还可以，一般的会议都听得懂。', 'Shuō de hái kěyǐ, yìbān de huìyì dōu tīng de dǒng.', 'Nói tạm được, các cuộc họp thông thường đều nghe hiểu.', 'Hai loại bổ ngữ.'], ['我说中文得好。', 'Wǒ shuō Zhōngwén de hǎo.', 'Sai.'], ['我听懂不会议。', 'Wǒ tīng dǒng bù huìyì.', 'Sai.']),
        T(['你学了多长时间？', 'Nǐ xuéle duō cháng shíjiān?', 'Bạn học bao lâu?'], ['学了两年了，虽然很忙，但是每天都练习。', 'Xuéle liǎng nián le, suīrán hěn máng, dànshì měitiān dōu liànxí.', 'Học hai năm rồi, tuy bận nhưng ngày nào cũng luyện.', 'Thời lượng + liên từ.'], ['两年学了。', 'Liǎng nián xué le.', 'Sai.'], ['虽然忙，每天练习。', 'Suīrán máng, měitiān liànxí.', 'Thiếu 但是.']),
        T(['如果我们录用你，你什么时候能上班？', 'Rúguǒ wǒmen lùyòng nǐ, nǐ shénme shíhou néng shàngbān?', 'Nếu nhận bạn, khi nào bạn đi làm được?'], ['只要公司通知我，我下周一就能上班。', 'Zhǐyào gōngsī tōngzhī wǒ, wǒ xià zhōuyī jiù néng shàngbān.', 'Chỉ cần công ty báo, thứ Hai tuần sau tôi đi làm được.', '只要…就.'], ['就我下周一上班。', 'Jiù wǒ xià zhōuyī shàngbān.', '就 sau chủ ngữ.'], ['下周一如果。', 'Xià zhōuyī rúguǒ.', 'Câu cụt.'])
      ], ket: 'Em đã ôn trọn giai đoạn 2!'
    },
    tom: ['Ôn tuần 2', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn', phatam: 'Ôn biến điệu 一, 不',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: học lại ngày yếu', 'Làm ⚡ Luyện nhanh 2 lần', 'Nói 1 phút giới thiệu bản thân dùng 3 cặp liên từ']
  };

  window.PLT_ZH2 = { plan, stages, H: { w, L, T, tbl, tip, exs, F, sp, K }, days: [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14] };
})();

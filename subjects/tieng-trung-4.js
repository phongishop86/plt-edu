/* PLT-Edu · Tiếng Trung – Giai đoạn 4: Phản xạ và ứng dụng (Ngày 22–30) */
(function () {
  'use strict';
  const { w, T, tbl, tip, sp, ex, F } = window.PLT_ZH.H;
  const K = ['meaning', 'listen', 'listenPy', 'hanzi', 'pinyin', 'match'];
  const reads = (a) => `<div class="zh-read">${a.map(([h, p, v]) => `<button class="zh-rd" data-say="${h}"><b>${h}</b><span>${p}</span><small>${v}</small></button>`).join('')}</div>`;
  const lv = (x) => `<p class="small muted">🎯 Từ giai đoạn này, hãy thử <b>tắt "Hiện nghĩa tiếng Việt"</b> trong phần Hội thoại để luyện tư duy trực tiếp bằng tiếng Trung. ${x || ''}</p>`;

  /* ================= NGÀY 22 ================= */
  const d22 = {
    n: 22, ten: 'Hội thoại làm quen người mới', kinds: K,
    muc: 'Bắt chuyện với người lạ, hỏi quê quán, nơi ở, sở thích; xin liên lạc và giữ mối quan hệ.',
    hoc: `${lv()}<h4>1. Mở đầu câu chuyện</h4>${reads([['你是第一次来中国吗？', 'Nǐ shì dì-yī cì lái Zhōngguó ma?', 'Bạn đến Trung Quốc lần đầu à?'], ['你老家在哪儿？', 'Nǐ lǎojiā zài nǎr?', 'Quê bạn ở đâu?'], ['你住在哪儿？', 'Nǐ zhù zài nǎr?', 'Bạn sống ở đâu?'], ['你的爱好是什么？', 'Nǐ de àihào shì shénme?', 'Sở thích của bạn là gì?']])}
      <h4>2. 第 + số + 次: lần thứ mấy</h4><ul>${ex('这是我第一次来广州。', 'Zhè shì wǒ dì-yī cì lái Guǎngzhōu.', 'Đây là lần đầu tôi đến Quảng Châu.')}</ul>
      <h4>3. 住在 + nơi: sống ở</h4><ul>${ex('我住在胡志明市。', 'Wǒ zhù zài Húzhìmíng Shì.', 'Tôi sống ở TP. Hồ Chí Minh.')}</ul><p class="small">Một số địa danh: 河内 Hénèi (Hà Nội) · 胡志明市 Húzhìmíng Shì (TP.HCM) · 岘港 Xiàngǎng (Đà Nẵng).</p>
      <h4>4. Khen và cảm thán: 真 + tính từ</h4><ul>${ex('你的汉语真好！', 'Nǐ de Hànyǔ zhēn hǎo!', 'Tiếng Trung của bạn giỏi thật!')}${ex('哪里哪里。', 'Nǎlǐ nǎlǐ.', 'Đâu có đâu có. (khiêm tốn khi được khen)')}</ul>
      <h4>5. Xin liên lạc</h4><ul>${ex('我们加个微信吧！', 'Wǒmen jiā ge Wēixìn ba!', 'Mình kết bạn WeChat nhé!')}${ex('你的电话号码是多少？', 'Nǐ de diànhuà hàomǎ shì duōshao?', 'Số điện thoại của bạn là bao nhiêu?')}${ex('以后常联系！', 'Yǐhòu cháng liánxì!', 'Sau này giữ liên lạc nhé!')}</ul>${tip('📱 Đọc số điện thoại: đọc từng chữ số; số 1 thường đọc là <b>yāo</b> để khỏi nhầm với 7 (qī). Ví dụ 138 → yāo sān bā.')}`,
    vocab: [
      w('第一次', 'dì-yī cì', 'lần đầu tiên', '第 + số + 次.', ['你是第一次来吗？', 'Nǐ shì dì-yī cì lái ma?', 'Bạn đến lần đầu à?']),
      w('来', 'lái', 'đến (về phía người nói)', 'Ngược với 去.', ['欢迎你来中国！', 'Huānyíng nǐ lái Zhōngguó!', 'Chào mừng bạn đến Trung Quốc!']),
      w('住', 'zhù', 'sống, ở', '住在 + nơi.', ['你住在哪儿？', 'Nǐ zhù zài nǎr?', 'Bạn sống ở đâu?']),
      w('老家', 'lǎojiā', 'quê nhà', '', ['我老家在河内。', 'Wǒ lǎojiā zài Hénèi.', 'Quê tôi ở Hà Nội.']),
      w('爱好', 'àihào', 'sở thích', '', ['你的爱好是什么？', 'Nǐ de àihào shì shénme?', 'Sở thích của bạn là gì?']),
      w('学习', 'xuéxí', 'học, học tập', '', ['我在学习汉语。', 'Wǒ zài xuéxí Hànyǔ.', 'Tôi đang học tiếng Trung.']),
      w('加', 'jiā', 'thêm, kết bạn (mạng xã hội)', '', ['我们加个微信吧！', 'Wǒmen jiā ge Wēixìn ba!', 'Mình kết bạn WeChat nhé!']),
      w('电话', 'diànhuà', 'điện thoại (cuộc gọi, máy)', '', ['给我打电话。', 'Gěi wǒ dǎ diànhuà.', 'Gọi điện cho tôi.']),
      w('号码', 'hàomǎ', 'số (điện thoại, phòng…)', '', ['你的电话号码是多少？', 'Nǐ de diànhuà hàomǎ shì duōshao?', 'Số điện thoại của bạn là bao nhiêu?']),
      w('联系', 'liánxì', 'liên lạc', '', ['以后常联系！', 'Yǐhòu cháng liánxì!', 'Sau này giữ liên lạc nhé!']),
      w('真', 'zhēn', 'thật, thật là', '真 + tính từ.', ['你的汉语真好！', 'Nǐ de Hànyǔ zhēn hǎo!', 'Tiếng Trung của bạn giỏi thật!']),
      w('漂亮', 'piàoliang', 'đẹp', '', ['广州很漂亮。', 'Guǎngzhōu hěn piàoliang.', 'Quảng Châu rất đẹp.']),
      w('有意思', 'yǒu yìsi', 'thú vị, hay', '', ['这个电影很有意思。', 'Zhège diànyǐng hěn yǒu yìsi.', 'Bộ phim này rất hay.'])
    ],
    qs: [
      ['mc', '“Tôi sống ở Hà Nội” đúng là?', '我住在河内。', ['我在住河内。', '我河内住在。', '我住河内在。'], '住在 + nơi.'],
      ['mc', '“Lần đầu tiên” là?', '第一次', ['一次第', '一第次', '第一个'], '第 + số + 次.'],
      ['mc', 'Được khen “你的汉语真好！”, đáp khiêm tốn là?', '哪里哪里。', ['是的，很好。', '不客气。', '没关系。'], '哪里哪里 – cách khiêm tốn truyền thống.'],
      ['mc', 'Khi đọc số điện thoại, số 1 thường đọc là?', 'yāo', ['yī', 'yí', 'yì'], 'Đọc yāo để khỏi nhầm với 7 qī.'],
      ['hear', '我们加个微信吧！', 'Mình kết bạn WeChat nhé!', ['Bạn có WeChat không?', 'Gọi điện cho tôi nhé!', 'Sau này giữ liên lạc!'], '加微信 = kết bạn WeChat.'],
      ['hear', '你老家在哪儿？', 'Quê bạn ở đâu?', ['Bạn sống ở đâu?', 'Bạn đến lần đầu à?', 'Nhà bạn có mấy người?'], '老家 = quê nhà.'],
      ['hear', '以后常联系！', 'Sau này giữ liên lạc nhé!', ['Hẹn gặp lại ngày mai!', 'Rất vui được quen bạn!', 'Mình kết bạn nhé!'], '联系 = liên lạc.'],
      ['order', 'Sắp xếp: “Đây là lần đầu tôi đến Trung Quốc.”', ['这是', '我', '第一次', '来中国。'], '这是我第一次来中国。'],
      ['mc', '“Thú vị, hay” là?', '有意思', ['有空', '没意思', '有时候'], '有意思 yǒu yìsi.']
    ],
    hoithoai: {
      ctx: 'Em đang dự hội chợ Canton Fair ở Quảng Châu. Chị Hoàng (黄小姐), người Quảng Châu, bắt chuyện ở khu nghỉ.', vai: 'Chị Hoàng hỏi, em trò chuyện tự nhiên.', ai: '👩 黄小姐',
      luot: [
        T(['你好！你是第一次来广州吗？', 'Nǐ hǎo! Nǐ shì dì-yī cì lái Guǎngzhōu ma?', 'Chào anh! Anh đến Quảng Châu lần đầu à?'], ['是，第一次来。广州真漂亮！', 'Shì, dì-yī cì lái. Guǎngzhōu zhēn piàoliang!', 'Vâng, lần đầu. Quảng Châu đẹp thật!', 'Trả lời và khen thành phố – mở đầu câu chuyện rất tốt.'], ['我第一次是广州。', 'Wǒ dì-yī cì shì Guǎngzhōu.', 'Câu sai nghĩa.'], ['不是，第二次没来。', 'Bú shì, dì-èr cì méi lái.', 'Câu rối nghĩa.']),
        T(['谢谢！你的汉语真好！', 'Xièxie! Nǐ de Hànyǔ zhēn hǎo!', 'Cảm ơn! Tiếng Trung của anh giỏi thật!'], ['哪里哪里，我还在学习。', 'Nǎlǐ nǎlǐ, wǒ hái zài xuéxí.', 'Đâu có, tôi vẫn đang học.', 'Khiêm tốn kiểu Trung Quốc.'], ['是，我汉语很好。', 'Shì, wǒ Hànyǔ hěn hǎo.', 'Hơi thiếu khiêm tốn với văn hoá Trung Quốc 😄'], ['不客气。', 'Bú kèqi.', 'Không phải câu đáp lời khen.']),
        T(['你住在哪儿？', 'Nǐ zhù zài nǎr?', 'Anh sống ở đâu?'], ['我住在胡志明市，我老家在河内。', 'Wǒ zhù zài Húzhìmíng Shì, wǒ lǎojiā zài Hénèi.', 'Tôi sống ở TP.HCM, quê tôi ở Hà Nội.', 'Phân biệt 住在 (sống ở) và 老家 (quê).'], ['我在住胡志明市。', 'Wǒ zài zhù Húzhìmíng Shì.', 'Phải là 住在 + nơi.'], ['我老家住。', 'Wǒ lǎojiā zhù.', 'Câu thiếu ý.']),
        T(['你的爱好是什么？', 'Nǐ de àihào shì shénme?', 'Sở thích của anh là gì?'], ['我喜欢看中国电影，很有意思。', 'Wǒ xǐhuan kàn Zhōngguó diànyǐng, hěn yǒu yìsi.', 'Tôi thích xem phim Trung Quốc, rất hay.', 'Dùng lại 喜欢 và 有意思.'], ['我爱好是什么。', 'Wǒ àihào shì shénme.', 'Phải trả lời sở thích cụ thể.'], ['我有空。', 'Wǒ yǒu kòng.', 'Lạc đề.']),
        T(['我也喜欢！我们加个微信吧？', 'Wǒ yě xǐhuan! Wǒmen jiā ge Wēixìn ba?', 'Tôi cũng thích! Mình kết bạn WeChat nhé?'], ['好啊！以后常联系！', 'Hǎo a! Yǐhòu cháng liánxì!', 'Được chứ! Sau này giữ liên lạc nhé!', 'Kết thúc cuộc làm quen thật đẹp.'], ['我没有微信了。', 'Wǒ méiyǒu Wēixìn le.', 'Câu không tự nhiên và cắt đứt câu chuyện.'], ['加什么？', 'Jiā shénme?', 'Chị đã nói rõ 微信.'])
      ], ket: 'Em đã bắt chuyện, đáp lời khen khiêm tốn, nói nơi ở, sở thích và xin liên lạc.'
    },
    tom: ['Câu bắt chuyện', '第…次', '住在 + nơi / 老家', '真 + tính từ; 哪里哪里', 'Xin WeChat, số điện thoại'],
    nguphap: '第 + số + 次; 住在 + nơi; 真 + adj; …吧 (đề nghị)', phatam: 'dì-yī cì; piàoliang; liánxì; đọc số 1 = yāo',
    loi: ['Nói 在住 thay vì 住在', 'Nhận lời khen bằng 是/不客气', 'Đọc số điện thoại có số 1 là yī'],
    btvn: ['Chuẩn bị 5 câu bắt chuyện và tập nói trôi chảy', 'Đọc số điện thoại của em bằng tiếng Trung (1 = yāo)', 'Ghi âm đoạn làm quen 1 phút']
  };

  /* ================= NGÀY 23 ================= */
  const d23 = {
    n: 23, ten: 'Giao tiếp tại nhà hàng', kinds: K,
    muc: 'Đặt bàn, hỏi món ngon, yêu cầu khẩu vị (không cay, không rau mùi), gọi thêm, thanh toán, gói mang về, lấy hoá đơn.',
    hoc: `${lv()}<h4>1. Vào quán</h4>${reads([['我预订了。', 'Wǒ yùdìng le.', 'Tôi đã đặt bàn.'], ['几位？——三位。', 'Jǐ wèi? — Sān wèi.', 'Mấy người? — Ba người.'], ['有什么推荐的菜？', 'Yǒu shénme tuījiàn de cài?', 'Có món gì gợi ý không?']])}
      <h4>2. Yêu cầu khẩu vị: 不要 + …</h4><ul>${ex('不要太辣。', 'Búyào tài là.', 'Đừng cay quá.')}${ex('不要放香菜。', 'Búyào fàng xiāngcài.', 'Đừng cho rau mùi.')}${ex('少放盐。', 'Shǎo fàng yán.', 'Cho ít muối thôi.')}</ul>${tip('🌶️ Ở Tứ Xuyên, Hồ Nam, chữ 微辣 (cay nhẹ) vẫn có thể rất cay với người Việt. An toàn nhất là nói <b>不要辣</b> (không cay).')}
      <h4>3. Gọi thêm: 再 + 来 / 要</h4><ul>${ex('再来一瓶啤酒。', 'Zài lái yì píng píjiǔ.', 'Cho thêm một chai bia.')}</ul>
      <h4>4. Thanh toán</h4>${reads([['服务员，买单！', 'Fúwùyuán, mǎidān!', 'Em ơi, tính tiền!'], ['可以打包吗？', 'Kěyǐ dǎbāo ma?', 'Gói mang về được không?'], ['请开发票。', 'Qǐng kāi fāpiào.', 'Làm ơn xuất hoá đơn.'], ['我吃饱了！', 'Wǒ chī bǎo le!', 'Tôi no rồi!']])}
      <h4>5. Lượng từ bổ sung</h4><p>瓶 píng (chai) · 盘 pán (đĩa) · 份 fèn (suất, phần).</p>`,
    vocab: [
      w('位', 'wèi', 'vị (lượng từ lịch sự cho người)', '', ['几位？', 'Jǐ wèi?', 'Mấy người ạ?']),
      w('预订', 'yùdìng', 'đặt trước', '', ['我预订了一张桌子。', 'Wǒ yùdìng le yì zhāng zhuōzi.', 'Tôi đã đặt một bàn.']),
      w('推荐', 'tuījiàn', 'giới thiệu, gợi ý', '', ['你推荐什么菜？', 'Nǐ tuījiàn shénme cài?', 'Bạn gợi ý món gì?']),
      w('辣', 'là', 'cay', '', ['这个菜辣吗？', 'Zhège cài là ma?', 'Món này có cay không?']),
      w('不要', 'búyào', 'đừng, không muốn', '不要 + động từ / tính từ.', ['不要太辣。', 'Búyào tài là.', 'Đừng cay quá.']),
      w('香菜', 'xiāngcài', 'rau mùi', '', ['不要放香菜。', 'Búyào fàng xiāngcài.', 'Đừng cho rau mùi.']),
      w('再', 'zài', 'thêm, lại (lần nữa)', '再 + động từ.', ['再来一碗米饭。', 'Zài lái yì wǎn mǐfàn.', 'Cho thêm một bát cơm.']),
      w('啤酒', 'píjiǔ', 'bia', '', ['两瓶啤酒', 'liǎng píng píjiǔ', 'hai chai bia']),
      w('买单', 'mǎidān', 'tính tiền (ở quán)', '', ['服务员，买单！', 'Fúwùyuán, mǎidān!', 'Em ơi, tính tiền!']),
      w('打包', 'dǎbāo', 'gói mang về', '', ['可以打包吗？', 'Kěyǐ dǎbāo ma?', 'Gói mang về được không?']),
      w('发票', 'fāpiào', 'hoá đơn', '开发票 = xuất hoá đơn.', ['请开发票。', 'Qǐng kāi fāpiào.', 'Làm ơn xuất hoá đơn.']),
      w('饱', 'bǎo', 'no', '', ['我吃饱了！', 'Wǒ chī bǎo le!', 'Tôi no rồi!'])
    ],
    qs: [
      ['mc', '“Đừng cho rau mùi” là?', '不要放香菜。', ['没放香菜。', '香菜不要放了吗。', '放不要香菜。'], '不要 + động từ.'],
      ['mc', '“Cho thêm một chai bia” là?', '再来一瓶啤酒。', ['一瓶啤酒再来。', '来再一瓶啤酒。', '再来一杯瓶啤酒。'], '再 + 来 + số + lượng từ + món.'],
      ['mc', 'Muốn tính tiền ở quán, em nói?', '服务员，买单！', ['服务员，打包！', '服务员，点菜！', '服务员，预订！'], '买单 = tính tiền.'],
      ['mc', '打包 nghĩa là?', 'gói mang về', ['đóng gói hàng gửi đi', 'tính tiền', 'đặt bàn'], 'Ở quán ăn, 打包 = gói đồ ăn thừa mang về.'],
      ['mc', 'Cần hoá đơn để công ty thanh toán, em nói?', '请开发票。', ['请买发票。', '请打包发票。', '发票多少钱？'], '开发票 = xuất hoá đơn.'],
      ['hear', '不要太辣。', 'Đừng cay quá.', ['Rất cay.', 'Không có cay.', 'Cay vừa.'], '不要太辣 = đừng cay quá.'],
      ['hear', '我吃饱了！', 'Tôi no rồi!', ['Tôi đói rồi!', 'Tôi ăn xong rồi!', 'Tôi chưa ăn!'], '饱 bǎo = no.'],
      ['hear', '有什么推荐的菜？', 'Có món gì gợi ý không?', ['Thực đơn đâu?', 'Món này là gì?', 'Có món chay không?'], '推荐 = gợi ý.'],
      ['order', 'Sắp xếp: “Gói mang về được không?”', ['可以', '打包', '吗？'], '可以打包吗？']
    ],
    hoithoai: {
      ctx: 'Em mời 2 đối tác Trung Quốc đi ăn tại một nhà hàng ở Thành Đô.', vai: 'Nhân viên phục vụ hỏi, em gọi món và thanh toán.', ai: '🧑‍🍳 服务员',
      luot: [
        T(['欢迎光临！几位？', 'Huānyíng guānglín! Jǐ wèi?', 'Kính chào quý khách! Mấy người ạ?'], ['三位，我预订了，姓阮。', 'Sān wèi, wǒ yùdìng le, xìng Ruǎn.', 'Ba người, tôi đã đặt bàn, họ Nguyễn.', 'Nói số người, đã đặt và họ tên.'], ['三个位。', 'Sān ge wèi.', '位 đã là lượng từ, không thêm 个.'], ['我姓预订。', 'Wǒ xìng yùdìng.', 'Câu sai nghĩa 😄']),
        T(['好的，这边请。想吃点儿什么？', 'Hǎo de, zhèbiān qǐng. Xiǎng chī diǎnr shénme?', 'Vâng, mời đi lối này. Quý khách muốn ăn gì?'], ['有什么推荐的菜？', 'Yǒu shénme tuījiàn de cài?', 'Có món gì gợi ý không?', 'Hỏi món đặc sắc – rất hay khi đến nơi mới.'], ['我推荐什么？', 'Wǒ tuījiàn shénme?', 'Em là khách, nên hỏi nhân viên gợi ý.'], ['不要菜。', 'Búyào cài.', 'Vào quán mà không gọi món?']),
        T(['我们的麻婆豆腐很好吃，可是有点儿辣。', 'Wǒmen de mápó dòufu hěn hǎochī, kěshì yǒudiǎnr là.', 'Đậu phụ Ma Bà của quán rất ngon, nhưng hơi cay.'], ['好，来一份，不要太辣，也不要放香菜。', 'Hǎo, lái yí fèn, búyào tài là, yě búyào fàng xiāngcài.', 'Ok, cho một phần, đừng cay quá, cũng đừng cho rau mùi.', 'Gọi món kèm yêu cầu khẩu vị.'], ['太辣了！', 'Tài là le!', 'Chưa ăn mà.'], ['不要辣不要。', 'Búyào là búyào.', 'Câu lộn xộn.']),
        T(['还要别的吗？', 'Hái yào bié de ma?', 'Quý khách cần gì thêm không?'], ['再来三瓶啤酒，谢谢。', 'Zài lái sān píng píjiǔ, xièxie.', 'Cho thêm ba chai bia, cảm ơn.', '再来 + số + lượng từ.'], ['三个啤酒瓶。', 'Sān ge píjiǔ píng.', '"Ba cái vỏ chai bia" 😄'], ['我吃饱了吗？', 'Wǒ chī bǎo le ma?', 'Câu hỏi kỳ lạ.']),
        T(['一共四百二十块。', 'Yígòng sìbǎi èrshí kuài.', 'Tổng cộng 420 tệ.'], ['好。可以打包吗？请开发票。', 'Hǎo. Kěyǐ dǎbāo ma? Qǐng kāi fāpiào.', 'Vâng. Gói mang về được không? Làm ơn xuất hoá đơn.', 'Thanh toán, gói đồ ăn và lấy hoá đơn.'], ['四百二十岁。', 'Sìbǎi èrshí suì.', '😄'], ['太便宜了！', 'Tài piányi le!', 'Không cần thiết.'])
      ], ket: 'Em đã tiếp đối tác ở nhà hàng: đặt bàn, gọi món theo khẩu vị, gọi thêm, thanh toán.'
    },
    tom: ['Đặt bàn, báo số người', 'Hỏi món gợi ý', 'Yêu cầu khẩu vị 不要…', 'Gọi thêm 再来…', 'Tính tiền, gói mang về, hoá đơn'],
    nguphap: '不要 + V/adj; 再 + V; 一共 + số tiền; lượng từ 位/瓶/份', phatam: 'là / lái; xiāngcài; fāpiào',
    loi: ['Nói 三个位', 'Đặt 再 sau động từ', 'Quên nói không cay khi ăn món Tứ Xuyên'],
    btvn: ['Viết yêu cầu khẩu vị của chính em (cay, rau, đường…)', 'Đóng vai gọi món cho 4 người', 'Luyện 3 câu thanh toán cho thuộc']
  };

  /* ================= NGÀY 24 ================= */
  const d24 = {
    n: 24, ten: 'Giao tiếp khi mua sắm', kinds: K,
    muc: 'Mua quần áo, giày: hỏi màu, cỡ, xin thử, đổi hàng, hiểu khuyến mãi 打折.',
    hoc: `${lv()}<h4>1. Lượng từ khi mua đồ</h4>${tbl(['Lượng từ', 'Dùng cho', 'Ví dụ', 'Nghe'], [['件 jiàn', 'áo, quần áo', '一件衣服'], ['双 shuāng', 'đôi (giày, tất, đũa)', '一双鞋'], ['条 tiáo', 'quần, váy dài', '一条裤子']].map(([a, b, c]) => `<tr><td><b>${a}</b></td><td>${b}</td><td>${c}</td><td>${sp(c)}</td></tr>`))}
      <h4>2. Màu sắc: … + 色</h4>${reads([['黑色', 'hēisè', 'màu đen'], ['白色', 'báisè', 'màu trắng'], ['红色', 'hóngsè', 'màu đỏ'], ['蓝色', 'lánsè', 'màu xanh dương'], ['绿色', 'lǜsè', 'màu xanh lá']])}
      <h4>3. Thử và đổi</h4><ul>${ex('我可以试试吗？', 'Wǒ kěyǐ shìshi ma?', 'Tôi thử được không?')}${ex('有大一点儿的吗？', 'Yǒu dà yìdiǎnr de ma?', 'Có cái lớn hơn chút không?')}${ex('不太合适，可以换吗？', 'Bú tài héshì, kěyǐ huàn ma?', 'Không vừa lắm, đổi được không?')}</ul>
      <p class="small">Động từ lặp lại (试试 shìshi, 看看 kànkan) = làm thử, làm một chút – nghe nhẹ nhàng, lịch sự.</p>
      <h4>4. Hiểu khuyến mãi 打折 (dễ nhầm!)</h4>${tip('💸 <b>打八折</b> = trả <b>80%</b> giá (tức giảm 20%), KHÔNG phải giảm 80%. 打五折 = giảm một nửa. 打九折 = giảm 10%.')}`,
    vocab: [
      w('件', 'jiàn', '(lượng từ cho quần áo, việc)', '', ['这件衣服多少钱？', 'Zhè jiàn yīfu duōshao qián?', 'Chiếc áo này bao nhiêu tiền?']),
      w('衣服', 'yīfu', 'quần áo', '', ['我想买衣服。', 'Wǒ xiǎng mǎi yīfu.', 'Tôi muốn mua quần áo.']),
      w('颜色', 'yánsè', 'màu sắc', '', ['有别的颜色吗？', 'Yǒu bié de yánsè ma?', 'Có màu khác không?']),
      w('黑色', 'hēisè', 'màu đen', '', ['我要黑色的。', 'Wǒ yào hēisè de.', 'Tôi lấy cái màu đen.']),
      w('白色', 'báisè', 'màu trắng', '', ['白色的很漂亮。', 'Báisè de hěn piàoliang.', 'Cái màu trắng rất đẹp.']),
      w('小', 'xiǎo', 'nhỏ', '', ['有小一点儿的吗？', 'Yǒu xiǎo yìdiǎnr de ma?', 'Có cái nhỏ hơn chút không?']),
      w('试试', 'shìshi', 'thử', '', ['我可以试试吗？', 'Wǒ kěyǐ shìshi ma?', 'Tôi thử được không?']),
      w('合适', 'héshì', 'vừa, phù hợp', '', ['这件很合适。', 'Zhè jiàn hěn héshì.', 'Cái này rất vừa.']),
      w('换', 'huàn', 'đổi', '', ['可以换吗？', 'Kěyǐ huàn ma?', 'Đổi được không?']),
      w('打折', 'dǎzhé', 'giảm giá', '打八折 = trả 80%.', ['现在打八折。', 'Xiànzài dǎ bā zhé.', 'Bây giờ giảm 20%.']),
      w('双', 'shuāng', 'đôi (lượng từ)', '', ['一双鞋', 'yì shuāng xié', 'một đôi giày']),
      w('鞋', 'xié', 'giày', '', ['这双鞋很合适。', 'Zhè shuāng xié hěn héshì.', 'Đôi giày này rất vừa.'])
    ],
    qs: [
      ['mc', '打八折 nghĩa là?', 'Giảm 20% (trả 80%)', ['Giảm 80%', 'Giảm 8 tệ', 'Mua 8 tặng 1'], 'Số đi với 折 là phần trăm phải trả.'],
      ['mc', '“Một đôi giày” là?', '一双鞋', ['一件鞋', '一个双鞋', '两鞋'], 'Đôi: 双.'],
      ['mc', '“Chiếc áo này” là?', '这件衣服', ['这双衣服', '这个件衣服', '衣服这件'], '这 + 件 + 衣服.'],
      ['mc', '“Có cái lớn hơn chút không?” là?', '有大一点儿的吗？', ['有一点儿大吗？', '大有一点儿的吗？', '有大的一点儿吗？'], 'Tính từ + 一点儿 + 的.'],
      ['mc', '“Tôi lấy cái màu đen” là?', '我要黑色的。', ['我要的黑色。', '黑色我要了的。', '我黑色要。'], 'Màu + 的 = cái màu…'],
      ['hear', '我可以试试吗？', 'Tôi thử được không?', ['Tôi đổi được không?', 'Có giảm giá không?', 'Có màu khác không?'], '试试 = thử.'],
      ['hear', '不太合适。', 'Không vừa lắm.', ['Rất vừa.', 'Không đẹp lắm.', 'Hơi đắt.'], '合适 = vừa.'],
      ['hear', '有别的颜色吗？', 'Có màu khác không?', ['Có cỡ khác không?', 'Màu này đẹp không?', 'Màu gì vậy?'], '颜色 = màu sắc.'],
      ['order', 'Sắp xếp: “Không vừa lắm, đổi được không?”', ['不太合适，', '可以', '换', '吗？'], '不太合适，可以换吗？']
    ],
    hoithoai: {
      ctx: 'Em đi mua áo khoác tại một trung tâm thương mại ở Bắc Kinh.', vai: 'Nhân viên bán hàng tư vấn, em chọn, thử và mua.', ai: '👩 店员 (nhân viên)',
      luot: [
        T(['你好！想买什么？', 'Nǐ hǎo! Xiǎng mǎi shénme?', 'Chào anh! Anh muốn mua gì?'], ['我想看看这件衣服。', 'Wǒ xiǎng kànkan zhè jiàn yīfu.', 'Tôi muốn xem chiếc áo này.', '看看 nghe nhẹ nhàng, lịch sự.'], ['我想买这双衣服。', 'Wǒ xiǎng mǎi zhè shuāng yīfu.', 'Áo dùng 件, không dùng 双.'], ['我不买。', 'Wǒ bù mǎi.', 'Hơi cộc.']),
        T(['这件有黑色和白色。', 'Zhè jiàn yǒu hēisè hé báisè.', 'Cái này có màu đen và trắng.'], ['我要黑色的。我可以试试吗？', 'Wǒ yào hēisè de. Wǒ kěyǐ shìshi ma?', 'Tôi lấy màu đen. Tôi thử được không?', 'Chọn màu và xin thử.'], ['我要黑色。', 'Wǒ yào hēisè.', '"Tôi lấy màu đen" – nên nói 黑色的 (cái màu đen).'], ['颜色是什么？', 'Yánsè shì shénme?', 'Đã được nói màu rồi.']),
        T(['可以。怎么样？', 'Kěyǐ. Zěnmeyàng?', 'Được ạ. … Thế nào ạ?'], ['有点儿小，有大一点儿的吗？', 'Yǒudiǎnr xiǎo, yǒu dà yìdiǎnr de ma?', 'Hơi chật, có cái rộng hơn chút không?', '有点儿 + tính từ = hơi (không hài lòng).'], ['很小大。', 'Hěn xiǎo dà.', 'Câu mâu thuẫn.'], ['我试试了吗？', 'Wǒ shìshi le ma?', 'Câu không rõ nghĩa.']),
        T(['有。这件合适吗？', 'Yǒu. Zhè jiàn héshì ma?', 'Có ạ. Cái này vừa không?'], ['很合适！多少钱？', 'Hěn héshì! Duōshao qián?', 'Rất vừa! Bao nhiêu tiền?', 'Chốt và hỏi giá.'], ['不合适很。', 'Bù héshì hěn.', 'Sai trật tự.'], ['换换。', 'Huànhuan.', 'Vừa rồi thì không cần đổi.']),
        T(['五百块，今天打八折，四百块。', 'Wǔbǎi kuài, jīntiān dǎ bā zhé, sìbǎi kuài.', '500 tệ, hôm nay giảm 20%, còn 400 tệ.'], ['好，我买了！可以刷卡吗？', 'Hǎo, wǒ mǎi le! Kěyǐ shuā kǎ ma?', 'Ok, tôi mua! Quẹt thẻ được không?', 'Chốt đơn tự nhiên.'], ['八折是一百块吗？', 'Bā zhé shì yìbǎi kuài ma?', 'Nhân viên đã tính sẵn: 500 × 80% = 400.'], ['太便宜了吗？', 'Tài piányi le ma?', 'Không cần thiết.'])
      ], ket: 'Em đã chọn màu, thử, đổi cỡ, hiểu khuyến mãi và thanh toán.'
    },
    tom: ['Lượng từ 件/双/条', 'Màu sắc', '试试, 看看 (động từ lặp)', 'Hỏi cỡ, đổi hàng', '打折'],
    nguphap: 'Tính từ + 一点儿 + 的; màu + 的; 有点儿 + adj; V-V (thử)', phatam: 'yīfu; shuāng/xié; héshì; dǎzhé',
    loi: ['Hiểu 八折 là giảm 80%', 'Dùng 双 cho áo', 'Nói 有点儿 cho điều tích cực'],
    btvn: ['Tả quần áo em đang mặc: màu gì, vừa không', 'Tính nhanh giá sau 打七折, 打九折, 打五折 của 200 tệ', 'Luyện hội thoại mua giày']
  };

  /* ================= NGÀY 25 ================= */
  const d25 = {
    n: 25, ten: 'Giao tiếp tại khách sạn và khi đi du lịch', kinds: K,
    muc: 'Nhận phòng, trả phòng, hỏi giờ ăn sáng, báo hỏng đồ trong phòng; mua vé, xin chụp ảnh ở điểm tham quan.',
    hoc: `${lv()}<h4>1. Nhận phòng (入住)</h4>${reads([['我订了一个房间。', 'Wǒ dìng le yí ge fángjiān.', 'Tôi đã đặt một phòng.'], ['住三晚。', 'Zhù sān wǎn.', 'Ở ba đêm.'], ['请给我看一下护照。', 'Qǐng gěi wǒ kàn yíxià hùzhào.', 'Cho tôi xem hộ chiếu.'], ['这是您的房卡。', 'Zhè shì nín de fángkǎ.', 'Đây là thẻ phòng của ông/bà.']])}
      <h4>2. Hỏi dịch vụ</h4><ul>${ex('早饭几点开始？', 'Zǎofàn jǐ diǎn kāishǐ?', 'Bữa sáng bắt đầu mấy giờ?')}${ex('几点退房？', 'Jǐ diǎn tuìfáng?', 'Mấy giờ phải trả phòng?')}${ex('有WiFi吗？密码是多少？', 'Yǒu WiFi ma? Mìmǎ shì duōshao?', 'Có WiFi không? Mật khẩu là gì?')}</ul>
      <h4>3. Báo sự cố: … 坏了</h4><ul>${ex('空调坏了。', 'Kōngtiáo huài le.', 'Điều hoà hỏng rồi.')}${ex('没有热水。', 'Méiyǒu rè shuǐ.', 'Không có nước nóng.')}</ul>
      <h4>4. Tham quan</h4><ul>${ex('门票多少钱？', 'Ménpiào duōshao qián?', 'Vé vào cửa bao nhiêu?')}${ex('这儿可以拍照吗？', 'Zhèr kěyǐ pāizhào ma?', 'Ở đây chụp ảnh được không?')}${ex('请帮我拍一张照片。', 'Qǐng bāng wǒ pāi yì zhāng zhàopiàn.', 'Làm ơn chụp giúp tôi một tấm.')}</ul>`,
    vocab: [
      w('房间', 'fángjiān', 'phòng', '', ['我订了一个房间。', 'Wǒ dìng le yí ge fángjiān.', 'Tôi đã đặt một phòng.']),
      w('订', 'dìng', 'đặt (phòng, vé)', '', ['我想订房间。', 'Wǒ xiǎng dìng fángjiān.', 'Tôi muốn đặt phòng.']),
      w('晚', 'wǎn', 'đêm (lượng từ khi ở khách sạn)', '', ['住两晚。', 'Zhù liǎng wǎn.', 'Ở hai đêm.']),
      w('护照', 'hùzhào', 'hộ chiếu', '', ['这是我的护照。', 'Zhè shì wǒ de hùzhào.', 'Đây là hộ chiếu của tôi.']),
      w('房卡', 'fángkǎ', 'thẻ phòng', '', ['我的房卡不能用。', 'Wǒ de fángkǎ bù néng yòng.', 'Thẻ phòng của tôi không dùng được.']),
      w('入住', 'rùzhù', 'nhận phòng (check-in)', '', ['我要入住。', 'Wǒ yào rùzhù.', 'Tôi muốn nhận phòng.']),
      w('退房', 'tuìfáng', 'trả phòng (check-out)', '', ['几点退房？', 'Jǐ diǎn tuìfáng?', 'Mấy giờ trả phòng?']),
      w('早饭', 'zǎofàn', 'bữa sáng', '', ['早饭在几楼？', 'Zǎofàn zài jǐ lóu?', 'Bữa sáng ở tầng mấy?']),
      w('空调', 'kōngtiáo', 'điều hoà', '', ['空调坏了。', 'Kōngtiáo huài le.', 'Điều hoà hỏng rồi.']),
      w('坏', 'huài', 'hỏng, xấu', '…坏了 = … hỏng rồi.', ['电视坏了。', 'Diànshì huài le.', 'Tivi hỏng rồi.']),
      w('门票', 'ménpiào', 'vé vào cửa', '', ['门票多少钱？', 'Ménpiào duōshao qián?', 'Vé vào cửa bao nhiêu?']),
      w('拍照', 'pāizhào', 'chụp ảnh', '', ['这儿可以拍照吗？', 'Zhèr kěyǐ pāizhào ma?', 'Ở đây chụp ảnh được không?'])
    ],
    qs: [
      ['mc', '“Tôi đã đặt một phòng” là?', '我订了一个房间。', ['我订一个了房间。', '我了订一个房间。', '我房间订了一个。'], '了 ngay sau động từ 订.'],
      ['mc', '“Ở 3 đêm” là?', '住三晚。', ['住三晚上。', '三晚住。', '住三个晚。'], 'Đêm ở khách sạn: số + 晚.'],
      ['mc', '“Điều hoà hỏng rồi” là?', '空调坏了。', ['空调不好。', '坏空调了。', '空调没坏。'], '… + 坏了.'],
      ['mc', '退房 nghĩa là?', 'trả phòng', ['đổi phòng', 'nhận phòng', 'đặt phòng'], '入住 check-in · 退房 check-out.'],
      ['hear', '早饭几点开始？', 'Bữa sáng bắt đầu mấy giờ?', ['Mấy giờ trả phòng?', 'Bữa sáng ở đâu?', 'Có bữa sáng không?'], '开始 = bắt đầu.'],
      ['hear', '这儿可以拍照吗？', 'Ở đây chụp ảnh được không?', ['Chụp giúp tôi một tấm.', 'Vé bao nhiêu tiền?', 'Ở đây có đẹp không?'], '拍照 = chụp ảnh.'],
      ['hear', '请给我看一下护照。', 'Cho tôi xem hộ chiếu.', ['Đây là thẻ phòng.', 'Ông ở mấy đêm?', 'Hộ chiếu của tôi đây.'], '护照 = hộ chiếu.'],
      ['order', 'Sắp xếp: “Vé vào cửa bao nhiêu tiền?”', ['门票', '多少', '钱？'], '门票多少钱？'],
      ['mc', 'Muốn hỏi mật khẩu WiFi, em nói?', '密码是多少？', ['密码在哪儿？', '密码几点？', '密码怎么样？'], '密码 mìmǎ = mật khẩu; hỏi số dùng 多少.']
    ],
    hoithoai: {
      ctx: 'Em đến khách sạn ở Hàng Châu lúc 3 giờ chiều để nhận phòng.', vai: 'Lễ tân hỏi, em trả lời và hỏi dịch vụ.', ai: '🛎️ 前台 (lễ tân)',
      luot: [
        T(['您好！欢迎！请问有预订吗？', 'Nín hǎo! Huānyíng! Qǐngwèn yǒu yùdìng ma?', 'Xin chào! Xin hỏi ông có đặt phòng trước không?'], ['有，我订了一个房间，姓阮。', 'Yǒu, wǒ dìng le yí ge fángjiān, xìng Ruǎn.', 'Có, tôi đã đặt một phòng, họ Nguyễn.', 'Nói đã đặt và họ để lễ tân tìm.'], ['我订房间了一个。', 'Wǒ dìng fángjiān le yí ge.', 'Sai vị trí 了.'], ['我没有房间。', 'Wǒ méiyǒu fángjiān.', 'Ngược nghĩa.']),
        T(['好的。请给我看一下护照。', 'Hǎo de. Qǐng gěi wǒ kàn yíxià hùzhào.', 'Vâng. Cho tôi xem hộ chiếu.'], ['给您。我住三晚。', 'Gěi nín. Wǒ zhù sān wǎn.', 'Gửi chị. Tôi ở ba đêm.', '给您 khi đưa giấy tờ.'], ['我没有护照了。', 'Wǒ méiyǒu hùzhào le.', 'Đi nước ngoài phải có hộ chiếu!'], ['护照多少钱？', 'Hùzhào duōshao qián?', 'Lạc đề.']),
        T(['这是您的房卡，八〇六房间。', 'Zhè shì nín de fángkǎ, bā líng liù fángjiān.', 'Đây là thẻ phòng, phòng 806.'], ['谢谢。早饭几点开始？', 'Xièxie. Zǎofàn jǐ diǎn kāishǐ?', 'Cảm ơn. Bữa sáng bắt đầu mấy giờ?', 'Hỏi dịch vụ ngay khi nhận phòng.'], ['八百零六块吗？', 'Bābǎi líng liù kuài ma?', '806 là số phòng, không phải giá tiền.'], ['房卡坏了。', 'Fángkǎ huài le.', 'Chưa dùng mà đã hỏng?']),
        T(['早上七点到十点，在二楼。还有别的问题吗？', 'Zǎoshang qī diǎn dào shí diǎn, zài èr lóu. Hái yǒu bié de wèntí ma?', 'Từ 7 đến 10 giờ sáng, ở tầng 2. Còn câu hỏi nào khác không?'], ['几点退房？', 'Jǐ diǎn tuìfáng?', 'Mấy giờ trả phòng?', 'Hỏi giờ trả phòng.'], ['我想入住早饭。', 'Wǒ xiǎng rùzhù zǎofàn.', 'Sai nghĩa.'], ['二楼在哪儿退房？', 'Èr lóu zài nǎr tuìfáng?', 'Câu lộn xộn.']),
        T(['中午十二点。（晚上，您打电话来）您好，前台。', 'Zhōngwǔ shí’èr diǎn. (Wǎnshang, nín dǎ diànhuà lái) Nín hǎo, qiántái.', '12 giờ trưa. (Buổi tối, em gọi xuống) Xin chào, lễ tân nghe.'], ['你好，我是八〇六，空调坏了。', 'Nǐ hǎo, wǒ shì bā líng liù, kōngtiáo huài le.', 'Chào chị, tôi phòng 806, điều hoà hỏng rồi.', 'Báo số phòng + sự cố.'], ['空调很好。', 'Kōngtiáo hěn hǎo.', 'Vậy gọi làm gì? 😄'], ['我要退房空调。', 'Wǒ yào tuìfáng kōngtiáo.', 'Sai nghĩa.'])
      ], ket: 'Em đã nhận phòng, hỏi giờ ăn sáng, giờ trả phòng và báo sự cố.'
    },
    tom: ['Nhận phòng: 订了, 住…晚, 护照', 'Hỏi dịch vụ', '…坏了', 'Vé, chụp ảnh ở điểm tham quan'],
    nguphap: 'V + 了 + số lượng + danh từ; số + 晚; …坏了; 请帮我 + V', phatam: 'fángjiān; hùzhào; kōngtiáo; số phòng đọc từng chữ số',
    loi: ['Đặt 了 sau tân ngữ', 'Đọc số phòng như số tiền', 'Nhầm 入住 và 退房'],
    btvn: ['Đóng vai nhận và trả phòng', 'Báo 3 sự cố: điều hoà, nước nóng, WiFi', 'Lên kế hoạch đi tham quan 1 ngày bằng 4 câu tiếng Trung']
  };

  /* ================= NGÀY 26 ================= */
  const d26 = {
    n: 26, ten: 'Giao tiếp qua điện thoại và tin nhắn', kinds: K,
    muc: 'Nghe – gọi điện thoại, tìm người, nhắn lại; nhắn tin WeChat với các cụm từ ngắn thông dụng.',
    hoc: `${lv()}<h4>1. Gọi điện thoại</h4>${reads([['喂，你好！', 'Wéi, nǐ hǎo!', 'A lô, xin chào!'], ['请问，王经理在吗？', 'Qǐngwèn, Wáng jīnglǐ zài ma?', 'Xin hỏi, giám đốc Vương có đó không?'], ['你找谁？', 'Nǐ zhǎo shéi?', 'Anh tìm ai?'], ['请稍等。', 'Qǐng shāo děng.', 'Xin chờ một chút.'], ['他不在，你一会儿再打吧。', 'Tā bú zài, nǐ yíhuìr zài dǎ ba.', 'Anh ấy không có ở đây, lát nữa anh gọi lại nhé.'], ['我听不清楚，信号不好。', 'Wǒ tīng bu qīngchu, xìnhào bù hǎo.', 'Tôi nghe không rõ, sóng yếu.']])}
      <p class="small">喂 khi nghe máy thường đọc <b>wéi</b> (lên giọng), nghe thân thiện hơn wèi.</p>
      <h4>2. Nhắn lại</h4><ul>${ex('请告诉他，我给他打过电话。', 'Qǐng gàosu tā, wǒ gěi tā dǎ guo diànhuà.', 'Làm ơn nói với anh ấy là tôi có gọi.')}${ex('请他给我回电话。', 'Qǐng tā gěi wǒ huí diànhuà.', 'Nhờ anh ấy gọi lại cho tôi.')}</ul>
      <h4>3. Tin nhắn WeChat thông dụng</h4>${tbl(['Tin nhắn', 'Nghĩa'], [['在吗？', 'Có đó không? (mở đầu tin nhắn)'], ['好的 / 好哒', 'Được, OK'], ['收到！', 'Đã nhận! (rất hay dùng trong công việc)'], ['稍等', 'Chờ chút'], ['方便打电话吗？', 'Tiện nghe điện thoại không?'], ['发个语音吧', 'Gửi tin nhắn thoại đi'], ['哈哈', 'Haha']].map(([a, b]) => `<tr><td><b>${a}</b> ${sp(a.split(' / ')[0])}</td><td>${b}</td></tr>`))}`,
    vocab: [
      w('喂', 'wéi', 'a lô', 'Mở đầu cuộc gọi.', ['喂，你好！', 'Wéi, nǐ hǎo!', 'A lô, xin chào!']),
      w('打电话', 'dǎ diànhuà', 'gọi điện thoại', 'Gọi cho ai: 给 + người + 打电话.', ['我给你打电话。', 'Wǒ gěi nǐ dǎ diànhuà.', 'Tôi gọi điện cho bạn.']),
      w('找', 'zhǎo', 'tìm', '', ['你找谁？', 'Nǐ zhǎo shéi?', 'Bạn tìm ai?']),
      w('等', 'děng', 'chờ, đợi', '', ['请等一下。', 'Qǐng děng yíxià.', 'Xin chờ một chút.']),
      w('一下', 'yíxià', 'một chút, một lát', 'Động từ + 一下: làm nhẹ nhàng.', ['我看一下。', 'Wǒ kàn yíxià.', 'Để tôi xem một chút.']),
      w('稍等', 'shāo děng', 'chờ chút (lịch sự)', '', ['请稍等！', 'Qǐng shāo děng!', 'Xin chờ chút!']),
      w('发', 'fā', 'gửi (tin nhắn, email)', '', ['我发微信给你。', 'Wǒ fā Wēixìn gěi nǐ.', 'Tôi gửi WeChat cho bạn.']),
      w('消息', 'xiāoxi', 'tin nhắn, tin tức', '', ['你看到我的消息了吗？', 'Nǐ kàn dào wǒ de xiāoxi le ma?', 'Bạn thấy tin nhắn của tôi chưa?']),
      w('回', 'huí', 'trả lời, gọi lại; về', '回电话: gọi lại.', ['请给我回电话。', 'Qǐng gěi wǒ huí diànhuà.', 'Làm ơn gọi lại cho tôi.']),
      w('收到', 'shōudào', 'đã nhận', '', ['收到，谢谢！', 'Shōudào, xièxie!', 'Đã nhận, cảm ơn!']),
      w('语音', 'yǔyīn', 'tin nhắn thoại', '', ['我给你发语音。', 'Wǒ gěi nǐ fā yǔyīn.', 'Tôi gửi tin nhắn thoại cho bạn.']),
      w('方便', 'fāngbiàn', 'tiện, thuận tiện', '', ['现在方便吗？', 'Xiànzài fāngbiàn ma?', 'Bây giờ có tiện không?'])
    ],
    qs: [
      ['mc', 'Nhấc máy, em nói?', '喂，你好！', ['再见，你好！', '你找我吗？', '收到！'], '喂 = a lô.'],
      ['mc', '“Xin hỏi giám đốc Vương có đó không?” là?', '请问，王经理在吗？', ['请问，王经理是吗？', '请问，王经理有吗？', '请问，在王经理吗？'], 'Hỏi người có mặt: … 在吗？'],
      ['mc', 'Trong công việc, sếp nhắn yêu cầu, em trả lời ngắn gọn “Đã nhận”?', '收到！', ['发了！', '回了！', '在吗？'], '收到 = đã nhận.'],
      ['mc', '“Làm ơn gọi lại cho tôi” là?', '请给我回电话。', ['请回我电话给。', '请电话回给我。', '请给回我电话。'], '给 + người + 回电话.'],
      ['hear', '请稍等。', 'Xin chờ chút.', ['Xin gọi lại.', 'Anh ấy không có đây.', 'Sóng yếu.'], '稍等 = chờ chút.'],
      ['hear', '他不在。', 'Anh ấy không có ở đây.', ['Anh ấy đang bận.', 'Anh ấy về rồi.', 'Anh ấy không biết.'], '不在 = không có mặt.'],
      ['hear', '现在方便吗？', 'Bây giờ có tiện không?', ['Bây giờ mấy giờ?', 'Bạn đang ở đâu?', 'Bạn rảnh không?'], '方便 = tiện.'],
      ['order', 'Sắp xếp: “Tôi gọi điện cho bạn.”', ['我', '给你', '打', '电话。'], '我给你打电话。'],
      ['mc', 'Tin nhắn “在吗？” dùng để?', 'Mở đầu, hỏi xem người kia có đang online không', ['Hỏi địa chỉ', 'Tạm biệt', 'Xin lỗi'], '在吗 = có đó không?']
    ],
    hoithoai: {
      ctx: 'Em gọi điện cho công ty đối tác để tìm giám đốc Vương. Thư ký nghe máy.', vai: 'Thư ký nói, em xử lý cuộc gọi.', ai: '☎️ 秘书 (thư ký)',
      luot: [
        T(['喂，你好！这里是华美公司。', 'Wéi, nǐ hǎo! Zhèlǐ shì Huáměi Gōngsī.', 'A lô, xin chào! Đây là công ty Hoa Mỹ.'], ['你好！请问，王经理在吗？', 'Nǐ hǎo! Qǐngwèn, Wáng jīnglǐ zài ma?', 'Chào chị! Xin hỏi giám đốc Vương có đó không?', 'Hỏi người cần gặp.'], ['你找谁？', 'Nǐ zhǎo shéi?', 'Đây là câu của người nghe máy.'], ['喂喂喂！', 'Wéi wéi wéi!', 'Hơi bất lịch sự.']),
        T(['请问您是哪位？', 'Qǐngwèn nín shì nǎ wèi?', 'Xin hỏi anh là ai ạ?'], ['我是越南PLT公司的阮明。', 'Wǒ shì Yuènán PLT Gōngsī de Ruǎn Míng.', 'Tôi là Nguyễn Minh của công ty PLT Việt Nam.', 'Tên công ty + 的 + tên mình.'], ['我是谁？', 'Wǒ shì shéi?', 'Lạc đề.'], ['阮明的公司我是。', 'Ruǎn Míng de gōngsī wǒ shì.', 'Sai trật tự.']),
        T(['请稍等。……不好意思，王经理正在开会。', 'Qǐng shāo děng. …… Bù hǎoyìsi, Wáng jīnglǐ zhèngzài kāihuì.', 'Xin chờ chút. … Xin lỗi, giám đốc Vương đang họp.'], ['没关系。请他给我回电话，好吗？', 'Méi guānxi. Qǐng tā gěi wǒ huí diànhuà, hǎo ma?', 'Không sao. Nhờ anh ấy gọi lại cho tôi được không?', 'Nhắn lại lịch sự.'], ['他开会了吗？', 'Tā kāihuì le ma?', 'Chị vừa nói rồi.'], ['好的，我也开会。', 'Hǎo de, wǒ yě kāihuì.', 'Lạc đề.']),
        T(['好的。您的电话号码是多少？', 'Hǎo de. Nín de diànhuà hàomǎ shì duōshao?', 'Vâng. Số điện thoại của anh là bao nhiêu?'], ['我加了他的微信，请他发消息给我。', 'Wǒ jiā le tā de Wēixìn, qǐng tā fā xiāoxi gěi wǒ.', 'Tôi đã kết bạn WeChat với anh ấy, nhờ anh ấy nhắn cho tôi.', 'Gợi ý kênh liên lạc tiện hơn – rất thực tế.'], ['多少钱？', 'Duōshao qián?', 'Lạc đề.'], ['号码是什么？', 'Hàomǎ shì shénme?', 'Chị đang hỏi số của em.']),
        T(['收到！我会告诉他。', 'Shōudào! Wǒ huì gàosu tā.', 'Đã nhận! Tôi sẽ báo anh ấy.'], ['谢谢，再见！', 'Xièxie, zàijiàn!', 'Cảm ơn, tạm biệt!', 'Kết thúc cuộc gọi.'], ['收到什么？', 'Shōudào shénme?', 'Không cần hỏi lại.'], ['喂？', 'Wéi?', 'Cuộc gọi đã xong.'])
      ], ket: 'Em đã gọi tìm người, giới thiệu bản thân, nhắn lại và chốt cách liên lạc.'
    },
    tom: ['Câu gọi/nghe điện thoại', 'Tìm người: …在吗？', 'Nhắn lại: 请他给我回电话', 'Tin nhắn WeChat thông dụng'],
    nguphap: '给 + người + 打电话/回电话; …在吗？; V + 一下', phatam: 'wéi; shāo děng; xiāoxi; shōudào',
    loi: ['Nói 王经理是吗？ thay vì 在吗', 'Sai trật tự 给 + người + 打电话'],
    btvn: ['Đóng vai gọi điện tìm 1 người và nhắn lại', 'Viết 5 tin nhắn WeChat ngắn bằng tiếng Trung', 'Ghi âm lời chào nghe máy: 喂，你好！我是…']
  };

  /* ================= NGÀY 27 ================= */
  const d27 = {
    n: 27, ten: 'Giao tiếp trong môi trường công việc', kinds: K,
    muc: 'Giới thiệu công ty – sản phẩm, gửi tài liệu, báo giá, hẹn họp, xử lý vấn đề và chốt hợp tác.',
    hoc: `${lv()}<h4>1. Giới thiệu công ty</h4><ul>${ex('我们公司是做电脑设备的。', 'Wǒmen gōngsī shì zuò diànnǎo shèbèi de.', 'Công ty chúng tôi làm về thiết bị máy tính.')}${ex('我负责销售。', 'Wǒ fùzé xiāoshòu.', 'Tôi phụ trách kinh doanh.')}</ul>
      <h4>2. Tài liệu, báo giá, email</h4>${reads([['我把资料发给您。', 'Wǒ bǎ zīliào fā gěi nín.', 'Tôi gửi tài liệu cho anh.'], ['请发一下报价。', 'Qǐng fā yíxià bàojià.', 'Làm ơn gửi báo giá.'], ['我已经发邮件了。', 'Wǒ yǐjīng fā yóujiàn le.', 'Tôi đã gửi email rồi.'], ['收到了，谢谢！', 'Shōudào le, xièxie!', 'Nhận được rồi, cảm ơn!']])}
      <p class="small">把 + vật + 发给 + người: "gửi cái gì cho ai" – học thuộc như một cụm cố định.</p>
      <h4>3. Họp và xử lý vấn đề</h4><ul>${ex('我们明天开会讨论一下。', 'Wǒmen míngtiān kāihuì tǎolùn yíxià.', 'Mai chúng ta họp bàn một chút.')}${ex('有问题吗？——没问题！', 'Yǒu wèntí ma? — Méi wèntí!', 'Có vấn đề gì không? — Không vấn đề!')}${ex('这个问题我们马上解决。', 'Zhège wèntí wǒmen mǎshàng jiějué.', 'Vấn đề này chúng tôi giải quyết ngay.')}</ul>
      <h4>4. Chốt hợp tác</h4><ul>${ex('合作愉快！', 'Hézuò yúkuài!', 'Hợp tác vui vẻ!')}${ex('我们签合同吧。', 'Wǒmen qiān hétong ba.', 'Chúng ta ký hợp đồng nhé.')}</ul>`,
    vocab: [
      w('客户', 'kèhù', 'khách hàng', '', ['他是我们的大客户。', 'Tā shì wǒmen de dà kèhù.', 'Ông ấy là khách hàng lớn của chúng tôi.']),
      w('会议', 'huìyì', 'cuộc họp', '', ['会议几点开始？', 'Huìyì jǐ diǎn kāishǐ?', 'Cuộc họp mấy giờ bắt đầu?']),
      w('合同', 'hétong', 'hợp đồng', '', ['我们签合同吧。', 'Wǒmen qiān hétong ba.', 'Chúng ta ký hợp đồng nhé.']),
      w('报价', 'bàojià', 'báo giá', '', ['请发一下报价。', 'Qǐng fā yíxià bàojià.', 'Làm ơn gửi báo giá.']),
      w('资料', 'zīliào', 'tài liệu', '', ['我把资料发给您。', 'Wǒ bǎ zīliào fā gěi nín.', 'Tôi gửi tài liệu cho anh.']),
      w('邮件', 'yóujiàn', 'email, thư', '', ['我已经发邮件了。', 'Wǒ yǐjīng fā yóujiàn le.', 'Tôi đã gửi email rồi.']),
      w('负责', 'fùzé', 'phụ trách', '', ['我负责这个项目。', 'Wǒ fùzé zhège xiàngmù.', 'Tôi phụ trách dự án này.']),
      w('问题', 'wèntí', 'vấn đề, câu hỏi', '', ['没问题！', 'Méi wèntí!', 'Không vấn đề!']),
      w('解决', 'jiějué', 'giải quyết', '', ['我们马上解决。', 'Wǒmen mǎshàng jiějué.', 'Chúng tôi giải quyết ngay.']),
      w('合作', 'hézuò', 'hợp tác', '', ['合作愉快！', 'Hézuò yúkuài!', 'Hợp tác vui vẻ!']),
      w('电脑', 'diànnǎo', 'máy tính', '', ['我们卖电脑。', 'Wǒmen mài diànnǎo.', 'Chúng tôi bán máy tính.']),
      w('设备', 'shèbèi', 'thiết bị', '', ['IT设备', 'IT shèbèi', 'thiết bị IT'])
    ],
    qs: [
      ['mc', '“Không vấn đề!” là?', '没问题！', ['不问题！', '有问题！', '问题没！'], '没 + 问题.'],
      ['mc', '“Tôi phụ trách kinh doanh” là?', '我负责销售。', ['我销售负责。', '负责我销售。', '我是负责的销售了。'], '负责 + việc.'],
      ['mc', '“Làm ơn gửi báo giá” là?', '请发一下报价。', ['请报价发一下。', '请一下发报价。', '请发报价一下了。'], 'V + 一下 + tân ngữ.'],
      ['mc', 'Câu chúc khi ký hợp tác thành công?', '合作愉快！', ['没关系！', '辛苦了没！', '再见合作！'], '合作愉快 = hợp tác vui vẻ.'],
      ['mc', '“Tôi đã gửi email rồi” là?', '我已经发邮件了。', ['我发邮件已经了。', '我已经没发邮件。', '我了发邮件已经。'], '已经 + V + 了.'],
      ['hear', '有问题吗？', 'Có vấn đề gì không?', ['Không vấn đề!', 'Vấn đề gì?', 'Giải quyết ngay.'], '问题 wèntí.'],
      ['hear', '我们签合同吧。', 'Chúng ta ký hợp đồng nhé.', ['Gửi hợp đồng cho tôi.', 'Hợp đồng có vấn đề.', 'Hợp tác vui vẻ!'], '签合同 = ký hợp đồng.'],
      ['hear', '会议几点开始？', 'Cuộc họp mấy giờ bắt đầu?', ['Cuộc họp ở đâu?', 'Họp xong chưa?', 'Hôm nay có họp không?'], '会议 = cuộc họp.'],
      ['order', 'Sắp xếp: “Công ty chúng tôi bán máy tính.”', ['我们', '公司', '卖', '电脑。'], '我们公司卖电脑。']
    ],
    hoithoai: {
      ctx: 'Em (công ty thiết bị IT ở Việt Nam) gặp ông Triệu (赵总) – giám đốc một nhà máy sản xuất – để chào hàng.', vai: 'Ông Triệu hỏi, em giới thiệu và chốt hợp tác.', ai: '👨‍💼 赵总 (giám đốc Triệu)',
      luot: [
        T(['你好！你们公司是做什么的？', 'Nǐ hǎo! Nǐmen gōngsī shì zuò shénme de?', 'Chào anh! Công ty anh làm gì?'], ['我们公司是做电脑和IT设备的。', 'Wǒmen gōngsī shì zuò diànnǎo hé IT shèbèi de.', 'Công ty chúng tôi làm về máy tính và thiết bị IT.', 'Mẫu 是做…的 để giới thiệu lĩnh vực.'], ['我们是电脑。', 'Wǒmen shì diànnǎo.', '"Chúng tôi là máy tính" 😄'], ['做什么公司？', 'Zuò shénme gōngsī?', 'Hỏi ngược lại không đúng lúc.']),
        T(['你负责什么？', 'Nǐ fùzé shénme?', 'Anh phụ trách mảng gì?'], ['我负责越南的客户。', 'Wǒ fùzé Yuènán de kèhù.', 'Tôi phụ trách khách hàng Việt Nam.', '负责 + việc / đối tượng.'], ['我是负责。', 'Wǒ shì fùzé.', 'Thiếu tân ngữ.'], ['客户是谁？', 'Kèhù shì shéi?', 'Lạc đề.']),
        T(['我们需要一百台电脑，可以发一下报价吗？', 'Wǒmen xūyào yìbǎi tái diànnǎo, kěyǐ fā yíxià bàojià ma?', 'Chúng tôi cần 100 máy tính, anh gửi báo giá được không?'], ['没问题！我今天发邮件给您。', 'Méi wèntí! Wǒ jīntiān fā yóujiàn gěi nín.', 'Không vấn đề! Hôm nay tôi gửi email cho anh.', 'Nhận việc và hẹn thời hạn cụ thể.'], ['一百台多少钱？', 'Yìbǎi tái duōshao qián?', 'Ông ấy đang hỏi em mà.'], ['不问题。', 'Bù wèntí.', 'Phải là 没问题.']),
        T(['好。如果有问题怎么办？', 'Hǎo. Rúguǒ yǒu wèntí zěnme bàn?', 'Được. Nếu có vấn đề thì sao?'], ['我们有工程师，马上解决。', 'Wǒmen yǒu gōngchéngshī, mǎshàng jiějué.', 'Chúng tôi có kỹ sư, giải quyết ngay.', 'Cam kết hỗ trợ – điểm cộng lớn.'], ['没有问题了。', 'Méiyǒu wèntí le.', 'Né tránh câu hỏi.'], ['我不知道。', 'Wǒ bù zhīdào.', 'Không chuyên nghiệp.']),
        T(['很好！我们签合同吧。', 'Hěn hǎo! Wǒmen qiān hétong ba.', 'Rất tốt! Chúng ta ký hợp đồng nhé.'], ['谢谢赵总！合作愉快！', 'Xièxie Zhào zǒng! Hézuò yúkuài!', 'Cảm ơn giám đốc Triệu! Hợp tác vui vẻ!', 'Họ + 总 là cách gọi giám đốc rất phổ biến.'], ['合同多少钱？', 'Hétong duōshao qián?', 'Lạc đề.'], ['再见合作！', 'Zàijiàn hézuò!', 'Câu sai.'])
      ], ket: 'Em đã chào hàng, nhận yêu cầu báo giá, cam kết hỗ trợ và chốt hợp tác.'
    },
    tom: ['Giới thiệu công ty 是做…的', '负责', 'Gửi tài liệu, báo giá, email', 'Họp, xử lý vấn đề', 'Chốt hợp tác'],
    nguphap: '是做…的; 把 + vật + 发给 + người; V + 一下; 没问题', phatam: 'fùzé; bàojià; hétong; hézuò yúkuài',
    loi: ['Nói 不问题', 'Quên lượng từ 台 cho máy móc', 'Gọi sếp bằng tên thay vì họ + 总/经理'],
    btvn: ['Viết đoạn 5 câu giới thiệu công ty/công việc của em', 'Soạn tin nhắn WeChat gửi báo giá cho khách', 'Luyện câu: 没问题！马上解决！合作愉快！']
  };

  /* ================= NGÀY 28 ================= */
  const d28 = {
    n: 28, ten: 'Nghe hiểu và phản xạ trả lời', tong: 1, kt: { n: 20, min: 20 },
    kinds: ['listen', 'listenPy', 'listen', 'meaning', 'listen', 'hanzi'],
    muc: 'Luyện tai nghe câu hoàn chỉnh; học các câu "cứu nguy" khi chưa nghe hiểu; phản xạ trả lời trong 3 giây.',
    hoc: `${lv('Hôm nay phần Luyện tập và Kiểm tra chủ yếu là <b>nghe</b>: bấm 🔊 và hạn chế nhìn chữ.')}
      <h4>1. Câu "cứu nguy" khi chưa nghe hiểu</h4>${reads([['我听不懂。', 'Wǒ tīng bu dǒng.', 'Tôi nghe không hiểu.'], ['请再说一遍。', 'Qǐng zài shuō yí biàn.', 'Làm ơn nói lại một lần nữa.'], ['请说慢一点儿。', 'Qǐng shuō màn yìdiǎnr.', 'Làm ơn nói chậm một chút.'], ['……是什么意思？', '…… shì shénme yìsi?', '… nghĩa là gì?'], ['用汉语怎么说？', 'Yòng Hànyǔ zěnme shuō?', 'Tiếng Trung nói thế nào?'], ['我明白了！', 'Wǒ míngbai le!', 'Tôi hiểu rồi!']])}
      <h4>2. Bí quyết nghe</h4><ul><li>Nghe <b>từ khoá</b> trước (ai, khi nào, ở đâu, bao nhiêu), không cố nghe từng chữ.</li><li>Để ý <b>từ hỏi</b> cuối câu: 吗 (có/không), 什么 (gì), 哪儿 (đâu), 几/多少 (bao nhiêu), 什么时候 (khi nào).</li><li>Câu kết thúc bằng <b>了</b> thường báo một việc đã xảy ra / thay đổi.</li></ul>
      <h4>3. Luyện phản xạ 3 giây</h4><p>Bấm nghe từng câu, <b>trả lời to</b> ngay trong 3 giây rồi mới xem gợi ý:</p>${reads([['你叫什么名字？', '→ 我叫…', 'Tên bạn?'], ['你是哪国人？', '→ 我是越南人。', 'Quốc tịch?'], ['你做什么工作？', '→ 我在…工作。', 'Nghề nghiệp?'], ['你家有几口人？', '→ 我家有…口人。', 'Gia đình?'], ['你周末喜欢做什么？', '→ 我喜欢…', 'Sở thích?'], ['你吃饭了吗？', '→ 吃了 / 还没呢。', 'Ăn chưa?'], ['这个多少钱？', '→ …块。', 'Giá?'], ['银行在哪儿？', '→ 在…旁边。', 'Chỉ đường?']])}`,
    vocab: [
      w('听懂', 'tīngdǒng', 'nghe hiểu', 'Phủ định: 听不懂.', ['我听不懂。', 'Wǒ tīng bu dǒng.', 'Tôi nghe không hiểu.']),
      w('慢', 'màn', 'chậm', '', ['请说慢一点儿。', 'Qǐng shuō màn yìdiǎnr.', 'Làm ơn nói chậm một chút.']),
      w('一遍', 'yí biàn', 'một lượt, một lần (từ đầu đến cuối)', '', ['请再说一遍。', 'Qǐng zài shuō yí biàn.', 'Làm ơn nói lại một lần nữa.']),
      w('意思', 'yìsi', 'ý nghĩa', '', ['这是什么意思？', 'Zhè shì shénme yìsi?', 'Cái này nghĩa là gì?']),
      w('明白', 'míngbai', 'hiểu, rõ', '', ['我明白了！', 'Wǒ míngbai le!', 'Tôi hiểu rồi!']),
      w('清楚', 'qīngchu', 'rõ ràng', '', ['我听不清楚。', 'Wǒ tīng bu qīngchu.', 'Tôi nghe không rõ.']),
      w('怎么说', 'zěnme shuō', 'nói thế nào', '', ['用汉语怎么说？', 'Yòng Hànyǔ zěnme shuō?', 'Tiếng Trung nói thế nào?']),
      w('知道', 'zhīdào', 'biết (thông tin)', 'Khác 会 (biết kỹ năng).', ['我不知道。', 'Wǒ bù zhīdào.', 'Tôi không biết.'])
    ],
    qs: [
      ['hear', '请再说一遍。', 'Làm ơn nói lại một lần nữa.', ['Làm ơn nói chậm.', 'Tôi nghe không hiểu.', 'Tôi hiểu rồi.'], '再说一遍 = nói lại một lần.'],
      ['hear', '请说慢一点儿。', 'Làm ơn nói chậm một chút.', ['Làm ơn nói to lên.', 'Làm ơn nói lại.', 'Làm ơn chờ chút.'], '慢 = chậm.'],
      ['hear', '你明天几点上班？', 'Mai mấy giờ bạn đi làm?', ['Mai bạn làm gì?', 'Hôm nay mấy giờ bạn tan làm?', 'Mai bạn có đi làm không?'], 'Từ khoá: 明天 · 几点 · 上班.'],
      ['hear', '洗手间在电梯旁边。', 'Nhà vệ sinh ở cạnh thang máy.', ['Thang máy ở cạnh nhà vệ sinh.', 'Nhà vệ sinh ở tầng hai.', 'Không có nhà vệ sinh.'], 'A 在 B 旁边: A ở cạnh B.'],
      ['hear', '我已经发邮件了。', 'Tôi đã gửi email rồi.', ['Tôi sẽ gửi email.', 'Tôi chưa gửi email.', 'Gửi email cho tôi.'], '已经…了 = đã … rồi.'],
      ['hear', '这件衣服打八折。', 'Áo này giảm 20%.', ['Áo này giảm 80%.', 'Áo này 8 tệ.', 'Áo này 80 tệ.'], '打八折 = trả 80%.'],
      ['hear', '我们坐地铁去吧。', 'Chúng ta đi tàu điện ngầm nhé.', ['Chúng ta bắt taxi nhé.', 'Chúng ta đi bộ nhé.', 'Ga tàu điện ở đâu?'], '坐地铁 = đi tàu điện.'],
      ['hear', '我还没吃饭呢。', 'Tôi vẫn chưa ăn cơm.', ['Tôi ăn rồi.', 'Tôi không ăn cơm.', 'Tôi đang ăn cơm.'], '还没…呢 = vẫn chưa.'],
      ['mc', 'Không hiểu một từ, em hỏi?', '……是什么意思？', ['……在哪儿？', '……多少钱？', '……怎么样？'], '什么意思 = nghĩa là gì.'],
      ['mc', '知道 khác 会 thế nào?', '知道 = biết thông tin; 会 = biết làm (kỹ năng)', ['Giống nhau hoàn toàn', '知道 = biết làm; 会 = biết thông tin', '知道 chỉ dùng trong văn viết'], 'Ví dụ: 我知道他是谁 · 我会开车.']
    ],
    hoithoai: {
      ctx: 'Luyện phản xạ nhanh: một người Trung Quốc hỏi liên tục, nói khá nhanh. Bật "Hiện Pinyin" nhưng TẮT "Hiện nghĩa tiếng Việt".', vai: 'Nghe → hiểu → chọn câu trả lời trong 3 giây.', ai: '🗣️ 中国朋友',
      luot: [
        T(['你好！你是从哪儿来的？', 'Nǐ hǎo! Nǐ shì cóng nǎr lái de?', 'Chào bạn! Bạn từ đâu đến?'], ['我是从越南来的。', 'Wǒ shì cóng Yuènán lái de.', 'Tôi đến từ Việt Nam.', '从…来 = đến từ…'], ['我叫阮明。', 'Wǒ jiào Ruǎn Míng.', 'Người ta hỏi đến từ đâu, chưa hỏi tên.'], ['我去越南。', 'Wǒ qù Yuènán.', '"Tôi đi Việt Nam" – ngược nghĩa.']),
        T(['你来中国多长时间了？', 'Nǐ lái Zhōngguó duō cháng shíjiān le?', 'Bạn đến Trung Quốc bao lâu rồi?'], ['我来了三天了。', 'Wǒ lái le sān tiān le.', 'Tôi đến được ba ngày rồi.', 'Thời lượng + 了.'], ['我三点来。', 'Wǒ sān diǎn lái.', 'Hỏi "bao lâu" chứ không phải "mấy giờ".'], ['中国很大。', 'Zhōngguó hěn dà.', 'Lạc đề.']),
        T(['你觉得中国菜怎么样？', 'Nǐ juéde Zhōngguó cài zěnmeyàng?', 'Bạn thấy món Trung Quốc thế nào?'], ['很好吃，可是有点儿辣。', 'Hěn hǎochī, kěshì yǒudiǎnr là.', 'Rất ngon, nhưng hơi cay.', 'Đánh giá có khen, có chê nhẹ.'], ['我不知道中国。', 'Wǒ bù zhīdào Zhōngguó.', 'Sai nghĩa.'], ['我听不懂。', 'Wǒ tīng bu dǒng.', 'Câu này em đã học hết từ rồi – thử nghe lại nhé!']),
        T(['你会说英语吗？', 'Nǐ huì shuō Yīngyǔ ma?', 'Bạn biết nói tiếng Anh không?'], ['会一点儿，可是我想练习汉语。', 'Huì yìdiǎnr, kěshì wǒ xiǎng liànxí Hànyǔ.', 'Biết một chút, nhưng tôi muốn luyện tiếng Trung.', '练习 = luyện tập.'], ['我能说英语吗？', 'Wǒ néng shuō Yīngyǔ ma?', 'Đây là hỏi lại.'], ['英语在哪儿？', 'Yīngyǔ zài nǎr?', 'Lạc đề.']),
        T(['好啊！那我们以后常常用汉语聊天吧！', 'Hǎo a! Nà wǒmen yǐhòu chángcháng yòng Hànyǔ liáotiān ba!', 'Được! Vậy sau này mình hay nói chuyện bằng tiếng Trung nhé!'], ['太好了！请说慢一点儿，谢谢！', 'Tài hǎo le! Qǐng shuō màn yìdiǎnr, xièxie!', 'Tuyệt quá! Nhớ nói chậm chút nhé, cảm ơn!', 'Đồng ý và dùng câu "cứu nguy" rất khéo.'], ['我明白了吗？', 'Wǒ míngbai le ma?', 'Câu không tự nhiên.'], ['再说一遍再见。', 'Zài shuō yí biàn zàijiàn.', 'Câu lộn xộn.'])
      ], ket: 'Em đã phản xạ với 5 câu hỏi nói nhanh và dùng câu "cứu nguy" đúng lúc.'
    },
    tom: ['Câu cứu nguy khi chưa hiểu', 'Chiến thuật nghe từ khoá', 'Phản xạ 3 giây với 8 câu hỏi thường gặp'],
    nguphap: 'V + 不懂/不清楚; 再 + V + 一遍; …是什么意思; 知道 vs 会', phatam: 'Nghe câu nói tự nhiên, tốc độ nhanh',
    loi: ['Cố nghe từng chữ thay vì nghe từ khoá', 'Im lặng khi chưa hiểu thay vì hỏi lại'],
    btvn: ['Nghe lại các câu ở phần Ôn tập, trả lời to trong 3 giây', 'Học thuộc 6 câu cứu nguy', 'Xem 1 video ngắn tiếng Trung có phụ đề, ghi lại 5 từ đã học']
  };

  /* ================= NGÀY 29 ================= */
  const d29 = {
    n: 29, ten: 'Mô phỏng các tình huống giao tiếp liên tục', tong: 1, vocab: [], kt: { n: 20, min: 20 },
    kinds: ['listen', 'meaning', 'listenPy', 'hanzi', 'pinyin', 'match'],
    muc: 'Ghép các kỹ năng thành một chuyến đi trọn vẹn: sân bay → taxi → khách sạn → hỏi đường → nhà hàng → mua sắm → điện thoại.',
    hoc: `${lv('Hôm nay không có từ mới. Hãy tắt nghĩa tiếng Việt và cố gắng trả lời không nhìn gợi ý.')}
      <h4>Kịch bản: 1 ngày ở Thượng Hải</h4>${tbl(['Chặng', 'Câu chính cần dùng'], [
        '<tr><td>✈️ Sân bay → taxi</td><td>师傅，去这个酒店。多长时间？多少钱？</td></tr>', '<tr><td>🏨 Khách sạn</td><td>我订了一个房间，住两晚。早饭几点开始？</td></tr>',
        '<tr><td>🧭 Hỏi đường</td><td>请问，地铁站在哪儿？怎么走？远吗？</td></tr>', '<tr><td>🍜 Nhà hàng</td><td>两位。有什么推荐的菜？不要太辣。买单！</td></tr>',
        '<tr><td>🛍️ Mua sắm</td><td>这件多少钱？可以试试吗？便宜一点儿吧。</td></tr>', '<tr><td>☎️ Điện thoại</td><td>喂，你好！请问，…在吗？请他给我回电话。</td></tr>'])}
      ${tip('🎙️ Cách luyện hiệu quả: đọc to vai của mình, ghi âm cả đoạn hội thoại, nghe lại và đánh dấu chỗ còn ngập ngừng.')}`,
    qs: [
      ['mc', 'Ở khách sạn, điều hoà không chạy. Em nói?', '空调坏了。', ['空调很好。', '空调多少钱？', '我要空调。'], '…坏了 = … hỏng rồi.'],
      ['mc', 'Ở quán, em muốn mang đồ ăn thừa về?', '可以打包吗？', ['可以买单吗？', '可以刷卡吗？', '可以试试吗？'], '打包 = gói mang về.'],
      ['mc', 'Lên taxi, em nói?', '师傅，去机场。', ['老师，去机场。', '服务员，去机场。', '经理，去机场。'], 'Gọi tài xế: 师傅.']
    ],
    hoithoai: {
      ctx: 'Một ngày ở Thượng Hải – mỗi lượt là một nơi, một người khác nhau. Trả lời liền mạch!', vai: 'Em là khách du lịch kiêm đi công tác.', ai: '🎭 Nhiều vai',
      luot: [
        T(['（出租车司机）去哪儿？', '(Chūzūchē sījī) Qù nǎr?', '(Tài xế taxi) Đi đâu?'], ['师傅，去和平饭店。多长时间？', 'Shīfu, qù Hépíng Fàndiàn. Duō cháng shíjiān?', 'Bác tài, đến khách sạn Hoà Bình. Mất bao lâu?', 'Điểm đến + hỏi thời gian.'], ['我坐和平饭店。', 'Wǒ zuò Hépíng Fàndiàn.', '坐 đi với phương tiện.'], ['饭店在哪儿？', 'Fàndiàn zài nǎr?', 'Tài xế cần biết em đi đâu.']),
        T(['（前台）您好！有预订吗？', '(Qiántái) Nín hǎo! Yǒu yùdìng ma?', '(Lễ tân) Xin chào! Có đặt trước không?'], ['有，我订了一个房间，住两晚。', 'Yǒu, wǒ dìng le yí ge fángjiān, zhù liǎng wǎn.', 'Có, tôi đặt một phòng, ở hai đêm.', 'Chuẩn!'], ['我住两个晚上房间。', 'Wǒ zhù liǎng ge wǎnshang fángjiān.', 'Câu rối.'], ['没有，我订了。', 'Méiyǒu, wǒ dìng le.', 'Mâu thuẫn.']),
        T(['（路人）你找什么？', '(Lùrén) Nǐ zhǎo shénme?', '(Người đi đường) Bạn tìm gì vậy?'], ['请问，地铁站在哪儿？远吗？', 'Qǐngwèn, dìtiězhàn zài nǎr? Yuǎn ma?', 'Xin hỏi, ga tàu điện ở đâu? Có xa không?', 'Hỏi đường + khoảng cách.'], ['我找地铁。', 'Wǒ zhǎo dìtiě.', '"Tôi tìm tàu điện" – nên hỏi ga ở đâu.'], ['往左走。', 'Wǎng zuǒ zǒu.', 'Đó là câu chỉ đường, không phải hỏi đường.']),
        T(['（服务员）几位？想吃什么？', '(Fúwùyuán) Jǐ wèi? Xiǎng chī shénme?', '(Phục vụ) Mấy người? Muốn ăn gì?'], ['一位。有什么推荐的菜？不要太辣。', 'Yí wèi. Yǒu shénme tuījiàn de cài? Búyào tài là.', 'Một người. Có món gì gợi ý? Đừng cay quá.', 'Ba ý trong một lượt – phản xạ tốt.'], ['一个位。', 'Yí ge wèi.', 'Không dùng 个 với 位.'], ['我吃饱了。', 'Wǒ chī bǎo le.', 'Chưa ăn mà đã no.']),
        T(['（店员）这件衣服今天打七折。', '(Diànyuán) Zhè jiàn yīfu jīntiān dǎ qī zhé.', '(Nhân viên) Áo này hôm nay giảm 30%.'], ['可以试试吗？有黑色的吗？', 'Kěyǐ shìshi ma? Yǒu hēisè de ma?', 'Thử được không? Có màu đen không?', 'Hiểu 七折 = trả 70%, và hỏi tiếp.'], ['打七折是七块吗？', 'Dǎ qī zhé shì qī kuài ma?', '七折 = trả 70% giá, không phải 7 tệ.'], ['我不要衣服件。', 'Wǒ búyào yīfu jiàn.', 'Sai trật tự lượng từ.']),
        T(['（电话）喂，你好！哪位？', '(Diànhuà) Wéi, nǐ hǎo! Nǎ wèi?', '(Điện thoại) A lô, xin chào! Ai đấy?'], ['我是阮明。请问，王经理在吗？', 'Wǒ shì Ruǎn Míng. Qǐngwèn, Wáng jīnglǐ zài ma?', 'Tôi là Nguyễn Minh. Xin hỏi giám đốc Vương có đó không?', 'Giới thiệu + tìm người.'], ['王经理是吗？', 'Wáng jīnglǐ shì ma?', 'Hỏi có mặt phải dùng 在.'], ['我找谁？', 'Wǒ zhǎo shéi?', 'Lạc đề.'])
      ], ket: '🎉 Em đã đi trọn một ngày ở Thượng Hải chỉ bằng tiếng Trung!'
    },
    tom: ['Ghép kỹ năng: taxi, khách sạn, hỏi đường, nhà hàng, mua sắm, điện thoại'], nguphap: 'Ôn tổng hợp giai đoạn 3–4', phatam: 'Nói liền mạch nhiều câu',
    loi: ['Xem lại các lượt em chọn sai trong hội thoại', 'Ôn các lượng từ: 位, 件, 双, 瓶, 晚'], btvn: ['Tự đóng cả hai vai, ghi âm toàn bộ kịch bản 1 ngày', 'Ôn thẻ "Từ chưa nhớ" chuẩn bị kiểm tra cuối khoá']
  };

  /* ================= NGÀY 30 ================= */
  const d30 = {
    n: 30, ten: 'Kiểm tra cuối khóa, đánh giá năng lực và đề xuất lộ trình tiếp theo', tong: 1, vocab: [], kt: { n: 30, min: 30 },
    kinds: ['meaning', 'listen', 'pinyin', 'hanzi', 'listenPy', 'match', 'toneHear'],
    muc: 'Làm bài kiểm tra cuối khoá 30 câu, tự đánh giá năng lực theo thang 100 điểm và chọn lộ trình học tiếp.',
    hoc: `<h4>1. Bài kiểm tra cuối khoá</h4><p><b>30 câu · 30 phút</b>, lấy ngẫu nhiên từ toàn bộ 30 ngày: Pinyin – thanh điệu, từ vựng, ngữ pháp, nghe hiểu, tình huống giao tiếp. Điểm hệ 10 × 10 = điểm thang 100.</p>
      <h4>2. Tự đánh giá theo 5 kỹ năng (thang 100)</h4>${tbl(['Kỹ năng', 'Điểm tối đa', 'Tự kiểm tra'], [
        '<tr><td>Phát âm & Pinyin</td><td>25</td><td>Đọc đúng 4 thanh, phân biệt zh/z/j, bật hơi? (tự ghi âm, so với mẫu)</td></tr>', '<tr><td>Từ vựng</td><td>20</td><td>Nhớ bao nhiêu % thẻ từ? (xem trang Tiến độ)</td></tr>',
        '<tr><td>Ngữ pháp</td><td>20</td><td>Dùng đúng trật tự câu, 了, 会/能, lượng từ?</td></tr>', '<tr><td>Nghe hiểu</td><td>15</td><td>Hiểu câu ở tốc độ bình thường lần đầu nghe?</td></tr>',
        '<tr><td>Giao tiếp</td><td>20</td><td>Tự xử lý được các tình huống taxi, quán ăn, mua sắm, công việc?</td></tr>'])}
      <p class="small muted">Hệ thống chưa nghe được giọng của em nên điểm phát âm là tự đánh giá. Muốn được chấm phát âm thật, hãy luyện với giáo viên hoặc dùng chế độ giọng nói của gia sư AI.</p>
      <h4>3. Em đang ở đâu?</h4><p>Hoàn thành 30 ngày, em có vốn khoảng <b>300 từ</b> và các mẫu câu giao tiếp cơ bản, tương đương <b>HSK 1 – đầu HSK 2</b>.</p>
      <h4>4. Lộ trình đề xuất tiếp theo</h4>${tbl(['Mục tiêu', 'Gợi ý'], [
        '<tr><td>💬 Giao tiếp tự tin hơn</td><td>Mỗi ngày nói 10–15 phút với gia sư AI hoặc bạn người Trung; học tiếp chủ đề: sức khoẻ, thời tiết, cảm xúc, kể chuyện quá khứ.</td></tr>',
        '<tr><td>📜 Thi chứng chỉ</td><td>Ôn và thi HSK 2 (khoảng 300 từ) sau 1–2 tháng, rồi HSK 3 (600 từ) để đi làm, du học.</td></tr>',
        '<tr><td>✍️ Đọc – viết chữ Hán</td><td>Mỗi ngày 5 chữ: học bộ thủ, thứ tự nét; luyện gõ Pinyin trên điện thoại/máy tính.</td></tr>',
        '<tr><td>💼 Tiếng Trung công việc</td><td>Học từ vựng ngành của em (IT, ngân hàng, thương mại), luyện viết email và tin nhắn WeChat.</td></tr>'])}
      ${tip('🧾 Sau khi làm bài, vào <a href="#/tieng-trung/tien-do">Tiến độ</a> → <b>Sao chép tóm tắt</b> rồi dán cho gia sư AI để được tư vấn lộ trình riêng cho em.')}`,
    qs: [
      ['mc', '“Chiều mai tôi họp ở công ty” đúng là?', '我明天下午在公司开会。', ['我开会明天下午在公司。', '我在公司开会明天下午。', '明天下午开会我在公司。'], 'Ai + khi nào + ở đâu + làm gì.'],
      ['mc', 'Câu nào dùng 会 đúng?', '我会说汉语。', ['我会去银行了。', '明天我不会来，我很忙。', '这儿会拍照吗？'], '会 = biết (kỹ năng).'],
      ['mc', '“Tôi vẫn chưa ăn” đúng là?', '我还没吃。', ['我没吃了。', '我还不吃了。', '我已经没吃。'], '还没 + V, không thêm 了.'],
      ['mc', '“Hai đôi giày” là?', '两双鞋', ['二双鞋', '两件鞋', '两个双鞋'], '两 + 双 + 鞋.'],
      ['mc', 'Người lạ khen tiếng Trung của em, em đáp?', '哪里哪里。', ['不客气。', '没关系。', '对不起。'], 'Khiêm tốn: 哪里哪里.']
    ],
    hoithoai: {
      ctx: 'Phần thi nói cuối khoá: giám khảo phỏng vấn em 5 câu.', vai: 'Giám khảo hỏi, em trả lời đầy đủ, đúng ngữ pháp.', ai: '👩‍🏫 考官 (giám khảo)',
      luot: [
        T(['请你介绍一下自己。', 'Qǐng nǐ jièshào yíxià zìjǐ.', 'Em hãy giới thiệu bản thân.'], ['我叫阮明，是越南人，在银行工作。', 'Wǒ jiào Ruǎn Míng, shì Yuènán rén, zài yínháng gōngzuò.', 'Tôi tên Nguyễn Minh, người Việt Nam, làm ở ngân hàng.', 'Đủ tên – quốc tịch – công việc.'], ['我工作在银行，叫阮明。', 'Wǒ gōngzuò zài yínháng, jiào Ruǎn Míng.', 'Sai trật tự 在银行工作.'], ['自己是谁？', 'Zìjǐ shì shéi?', 'Lạc đề.']),
        T(['你家有几口人？', 'Nǐ jiā yǒu jǐ kǒu rén?', 'Nhà em có mấy người?'], ['我家有四口人：爸爸、妈妈、妹妹和我。', 'Wǒ jiā yǒu sì kǒu rén: bàba, māma, mèimei hé wǒ.', 'Nhà tôi có 4 người: bố, mẹ, em gái và tôi.', 'Chuẩn.'], ['我家不有四个口人。', 'Wǒ jiā bù yǒu sì ge kǒu rén.', 'Hai lỗi: 不有 và 个口.'], ['我家有四人口。', 'Wǒ jiā yǒu sì rén kǒu.', 'Sai trật tự lượng từ.']),
        T(['你每天几点上班？怎么去？', 'Nǐ měitiān jǐ diǎn shàngbān? Zěnme qù?', 'Mỗi ngày mấy giờ em đi làm? Đi bằng gì?'], ['我每天七点半骑摩托车去上班。', 'Wǒ měitiān qī diǎn bàn qí mótuōchē qù shàngbān.', 'Mỗi ngày 7 rưỡi tôi đi xe máy đi làm.', 'Thời gian + phương tiện + 去 + việc.'], ['我上班七点半坐摩托车。', 'Wǒ shàngbān qī diǎn bàn zuò mótuōchē.', 'Sai trật tự; xe máy dùng 骑.'], ['我七点半岁。', 'Wǒ qī diǎn bàn suì.', '😄']),
        T(['你为什么学习汉语？', 'Nǐ wèishénme xuéxí Hànyǔ?', 'Vì sao em học tiếng Trung?'], ['因为我想和中国客户合作。', 'Yīnwèi wǒ xiǎng hé Zhōngguó kèhù hézuò.', 'Vì tôi muốn hợp tác với khách hàng Trung Quốc.', '因为 = vì; 和 + người + 合作.'], ['我学习汉语为什么。', 'Wǒ xuéxí Hànyǔ wèishénme.', 'Phải trả lời lý do.'], ['汉语很好吃。', 'Hànyǔ hěn hǎochī.', '"Tiếng Trung rất ngon" 😄']),
        T(['很好！以后你想做什么？', 'Hěn hǎo! Yǐhòu nǐ xiǎng zuò shénme?', 'Tốt lắm! Sau này em muốn làm gì?'], ['我想考HSK，也想去中国旅游。', 'Wǒ xiǎng kǎo HSK, yě xiǎng qù Zhōngguó lǚyóu.', 'Tôi muốn thi HSK, cũng muốn đi du lịch Trung Quốc.', '考 = thi; 旅游 = du lịch. Chúc mừng em hoàn thành khoá học!'], ['我以前想。', 'Wǒ yǐqián xiǎng.', 'Câu thiếu ý.'], ['我不知道做什么了吗。', 'Wǒ bù zhīdào zuò shénme le ma.', 'Câu sai ngữ pháp.'])
      ], ket: '🏆 Chúc mừng em đã hoàn thành phần thi nói cuối khoá!'
    },
    tom: ['Kiểm tra cuối khoá 30 câu', 'Tự đánh giá 5 kỹ năng thang 100', 'Đề xuất lộ trình tiếp theo'], nguphap: 'Tổng ôn 30 ngày', phatam: 'Tổng ôn; tự đánh giá bằng ghi âm',
    loi: ['Xem lại các câu sai trong bài kiểm tra cuối khoá', 'Ôn lại ngày có điểm thấp nhất'], btvn: ['Sao chép Tóm tắt tiến độ gửi gia sư AI để nhận lộ trình riêng', 'Chọn 1 trong 4 lộ trình tiếp theo và bắt đầu ngay tuần sau', 'Duy trì 15 phút tiếng Trung mỗi ngày']
  };

  window.PLT_ZH.days.push(d22, d23, d24, d25, d26, d27, d28, d29, d30);
})();

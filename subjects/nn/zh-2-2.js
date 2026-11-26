/* PLT-Edu · Tiếng Trung – Cấp 2 (HSK 3): Ngày 15–30 */
(function () {
  'use strict';
  const Z = window.PLT_ZH2; if (!Z) return;
  const { w, L, T, tbl, tip, exs, K } = Z.H;
  const plan = Z.plan;

  /* ================= NGÀY 15 ================= */
  const d15 = {
    n: 15, ten: plan[14].ten, kinds: K,
    muc: 'Hỏi thuê nhà: diện tích, tiền thuê, tiền cọc, điện nước; báo hỏng đồ cho chủ nhà.',
    hoc: `${tbl(['Mẫu câu', 'Nghĩa'], [['这套房子多大？', 'Căn này rộng bao nhiêu?'], ['房租一个月多少钱？', 'Tiền thuê một tháng bao nhiêu?'], ['押金是一个月的房租。', 'Tiền cọc bằng một tháng tiền thuê.'], ['水电费另算。', 'Tiền điện nước tính riêng.'], ['空调坏了，能修一下吗？', 'Điều hoà hỏng, sửa giúp được không?']])}
      ${tip('🔑 Lượng từ căn hộ: <b>套</b> (一套房子); phòng: <b>间</b> (一间卧室).')}`,
    vocab: [
      w('租', 'zū', 'thuê', '', ['我想租一套房子。', 'Wǒ xiǎng zū yí tào fángzi.', 'Tôi muốn thuê một căn nhà.']),
      w('房租', 'fángzū', 'tiền thuê nhà', '', ['房租不太贵。', 'Fángzū bú tài guì.', 'Tiền thuê không đắt lắm.']),
      w('押金', 'yājīn', 'tiền cọc', '', ['押金要交多少？', 'Yājīn yào jiāo duōshao?', 'Cọc bao nhiêu?']),
      w('房东', 'fángdōng', 'chủ nhà', '', ['房东人很好。', 'Fángdōng rén hěn hǎo.', 'Chủ nhà tốt bụng.']),
      w('卧室', 'wòshì', 'phòng ngủ', '', ['有两间卧室。', 'Yǒu liǎng jiān wòshì.', 'Có hai phòng ngủ.']),
      w('厨房', 'chúfáng', 'bếp', '', ['厨房有点儿小。', 'Chúfáng yǒudiǎnr xiǎo.', 'Bếp hơi nhỏ.']),
      w('平方米', 'píngfāngmǐ', 'mét vuông', '', ['六十平方米。', 'Liùshí píngfāngmǐ.', '60 mét vuông.']),
      w('水电费', 'shuǐdiànfèi', 'tiền điện nước', '', ['水电费另算。', 'Shuǐdiànfèi lìng suàn.', 'Điện nước tính riêng.']),
      w('合同', 'hétong', 'hợp đồng', '', ['我们签一年的合同。', 'Wǒmen qiān yì nián de hétong.', 'Chúng ta ký hợp đồng một năm.']),
      w('搬家', 'bānjiā', 'chuyển nhà', '', ['我下个月搬家。', 'Wǒ xià ge yuè bānjiā.', 'Tháng sau tôi chuyển nhà.'])
    ],
    qs: [
      ['mc', '“Tiền cọc” là?', '押金', ['房租', '合同', '水电费'], 'yājīn.'],
      ['mc', 'Lượng từ đúng: 一___房子', '套', ['间', '张', '本'], '一套房子.'],
      ['mc', '水电费另算 nghĩa là?', 'Tiền điện nước tính riêng.', ['Miễn phí điện nước.', 'Điện nước đã gồm trong giá.', 'Không có điện nước.'], '另算 = tính riêng.'],
      ['hear', '这套房子有两间卧室，六十平方米。', 'Căn này có 2 phòng ngủ, 60 m².', ['Có 3 phòng ngủ, 60 m².', 'Có 2 phòng ngủ, 16 m².', 'Có 1 phòng ngủ, 40 m².'], 'Nghe số.'],
      ['hear', '房租一个月五百万，押金一个月。', 'Thuê 5 triệu/tháng, cọc một tháng.', ['Thuê 500 nghìn.', 'Cọc hai tháng.', 'Thuê 15 triệu.'], '五百万 = 5 triệu.'],
      ['order', 'Sắp xếp: “Chúng ta ký hợp đồng một năm.”', ['我们', '签', '一年的', '合同。'], '我们签一年的合同。']
    ],
    noi: [['房租一个月多少钱？', 'Fángzū yí ge yuè duōshao qián? – Tiền thuê một tháng bao nhiêu?'], ['押金要交多少？', 'Yājīn yào jiāo duōshao? – Phải đặt cọc bao nhiêu?'], ['空调坏了，能修一下吗？', 'Kōngtiáo huài le, néng xiū yíxià ma? – Điều hoà hỏng, sửa giúp được không?']],
    hoithoai: {
      ctx: 'Em gọi điện hỏi thuê căn hộ của một chủ nhà người Hoa ở Quận 5.', vai: 'Chủ nhà trả lời, em hỏi.', ai: '🏠 房东',
      luot: [
        T(['喂，你好，你想租房子吗？', 'Wéi, nǐ hǎo, nǐ xiǎng zū fángzi ma?', 'A lô, bạn muốn thuê nhà à?'], ['对，请问房租一个月多少钱？', 'Duì, qǐngwèn fángzū yí ge yuè duōshao qián?', 'Vâng, cho hỏi tiền thuê một tháng bao nhiêu?', 'Hỏi giá.'], ['我想买房子。', 'Wǒ xiǎng mǎi fángzi.', 'Nhầm thuê/mua.'], ['房租是谁？', 'Fángzū shì shéi?', 'Sai.']),
        T(['六百万，水电费另算。', 'Liùbǎi wàn, shuǐdiànfèi lìng suàn.', '6 triệu, điện nước tính riêng.'], ['押金要交几个月？', 'Yājīn yào jiāo jǐ ge yuè?', 'Cọc mấy tháng ạ?', 'Hỏi tiếp.'], ['水电费免费吗？太好了。', 'Shuǐdiànfèi miǎnfèi ma? Tài hǎo le.', 'Hiểu sai.'], ['六十万吗？', 'Liùshí wàn ma?', 'Nghe nhầm số.']),
        T(['一个月。你什么时候能来看房？', 'Yí ge yuè. Nǐ shénme shíhou néng lái kàn fáng?', 'Một tháng. Khi nào bạn tới xem nhà?'], ['明天下午三点可以吗？', 'Míngtiān xiàwǔ sān diǎn kěyǐ ma?', 'Chiều mai 3 giờ được không?', 'Hẹn giờ.'], ['我看过了房。', 'Wǒ kànguo le fáng.', 'Sai.'], ['三个小时。', 'Sān ge xiǎoshí.', 'Nhầm thời lượng.'])
      ], ket: 'Em đã hỏi thuê nhà và hẹn xem nhà bằng tiếng Trung.'
    },
    tom: ['租 / 房租 / 押金', '一套房子, 一间卧室'], nguphap: 'Câu hỏi giá, lượng từ 套/间', phatam: '押金 yājīn, 合同 hétong',
    loi: ['Nhầm 租 (thuê) và 买 (mua)', 'Nghe nhầm 万'], btvn: ['Viết mô tả căn nhà em ở 80 chữ', 'Đóng vai thuê nhà 6 lượt', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 16 ================= */
  const d16 = {
    n: 16, ten: plan[15].ten, kinds: K,
    muc: 'Giao dịch ngân hàng: mở tài khoản, rút tiền, chuyển khoản, đổi ngoại tệ, hỏi tỷ giá.',
    hoc: `${tbl(['Mẫu câu', 'Nghĩa'], [['我想开一个账户。', 'Tôi muốn mở một tài khoản.'], ['我想把人民币换成越南盾。', 'Tôi muốn đổi nhân dân tệ sang đồng Việt Nam.'], ['今天的汇率是多少？', 'Tỷ giá hôm nay bao nhiêu?'], ['请输入密码。', 'Vui lòng nhập mật khẩu.'], ['请在这儿签字。', 'Vui lòng ký ở đây.']])}
      ${tip('🔑 Mẫu <b>把 A 换成 B</b> = đổi A thành B. Đổi tiền nhớ mang <b>护照</b> (hộ chiếu).')}`,
    vocab: [
      w('银行', 'yínháng', 'ngân hàng', '', ['银行几点开门？', 'Yínháng jǐ diǎn kāi mén?', 'Ngân hàng mấy giờ mở?']),
      w('账户', 'zhànghù', 'tài khoản (ngân hàng)', '', ['我想开账户。', 'Wǒ xiǎng kāi zhànghù.', 'Tôi muốn mở tài khoản.']),
      w('取钱', 'qǔ qián', 'rút tiền', '', ['我去取钱。', 'Wǒ qù qǔ qián.', 'Tôi đi rút tiền.']),
      w('存钱', 'cún qián', 'gửi tiền', '', ['每个月存一点儿钱。', 'Měi ge yuè cún yìdiǎnr qián.', 'Mỗi tháng gửi chút tiền.']),
      w('转账', 'zhuǎnzhàng', 'chuyển khoản', '', ['我给你转账吧。', 'Wǒ gěi nǐ zhuǎnzhàng ba.', 'Tôi chuyển khoản cho bạn nhé.']),
      w('换钱', 'huàn qián', 'đổi tiền', '', ['在哪儿可以换钱？', 'Zài nǎr kěyǐ huàn qián?', 'Đổi tiền ở đâu?']),
      w('汇率', 'huìlǜ', 'tỷ giá', '', ['今天的汇率是多少？', 'Jīntiān de huìlǜ shì duōshao?', 'Tỷ giá hôm nay bao nhiêu?']),
      w('护照', 'hùzhào', 'hộ chiếu', '', ['请出示护照。', 'Qǐng chūshì hùzhào.', 'Vui lòng xuất trình hộ chiếu.']),
      w('签字', 'qiānzì', 'ký tên', '', ['请在这儿签字。', 'Qǐng zài zhèr qiānzì.', 'Ký ở đây.']),
      w('手续费', 'shǒuxùfèi', 'phí thủ tục', '', ['手续费多少？', 'Shǒuxùfèi duōshao?', 'Phí bao nhiêu?'])
    ],
    qs: [
      ['mc', '“Chuyển khoản” là?', '转账', ['取钱', '存钱', '换钱'], 'zhuǎnzhàng.'],
      ['mc', '我想把人民币换___越南盾。', '成', ['到', '给', '了'], '把 A 换成 B.'],
      ['mc', '汇率 nghĩa là?', 'tỷ giá', ['lãi suất', 'phí thủ tục', 'số dư'], 'huìlǜ.'],
      ['hear', '请出示护照，在这儿签字。', 'Xuất trình hộ chiếu và ký ở đây.', ['Nhập mật khẩu ở đây.', 'Đợi ở ghế.', 'Đổi tiền ở quầy kia.'], '护照 / 签字.'],
      ['hear', '转账不要手续费。', 'Chuyển khoản không mất phí.', ['Chuyển khoản mất phí cao.', 'Không chuyển khoản được.', 'Rút tiền miễn phí.'], '不要手续费.'],
      ['order', 'Sắp xếp: “Tôi muốn mở một tài khoản.”', ['我', '想', '开', '一个账户。'], '我想开一个账户。']
    ],
    noi: [['我想开一个账户。', 'Wǒ xiǎng kāi yí ge zhànghù. – Tôi muốn mở một tài khoản.'], ['今天的汇率是多少？', 'Jīntiān de huìlǜ shì duōshao? – Tỷ giá hôm nay bao nhiêu?'], ['请在这儿签字。', 'Qǐng zài zhèr qiānzì. – Vui lòng ký ở đây.']],
    hoithoai: {
      ctx: 'Em là giao dịch viên, khách Trung Quốc muốn đổi tiền.', vai: 'Khách hỏi, em phục vụ.', ai: '🧳 客人',
      luot: [
        T(['你好，我想换钱。', 'Nǐ hǎo, wǒ xiǎng huàn qián.', 'Chào bạn, tôi muốn đổi tiền.'], ['好的，您想把人民币换成越南盾吗？', 'Hǎo de, nín xiǎng bǎ Rénmínbì huànchéng Yuènán dùn ma?', 'Vâng, anh muốn đổi nhân dân tệ sang đồng Việt Nam ạ?', '把…换成.'], ['您想取钱吗？', 'Nín xiǎng qǔ qián ma?', 'Hiểu sai.'], ['换成把越南盾。', 'Huànchéng bǎ Yuènán dùn.', 'Sai.']),
        T(['对，汇率是多少？', 'Duì, huìlǜ shì duōshao?', 'Đúng, tỷ giá bao nhiêu?'], ['今天一块人民币换三千五百越南盾。', 'Jīntiān yí kuài Rénmínbì huàn sān qiān wǔ bǎi Yuènán dùn.', 'Hôm nay 1 tệ đổi 3.500 đồng.', 'Báo tỷ giá (số minh hoạ).'], ['汇率很好看。', 'Huìlǜ hěn hǎokàn.', 'Sai nghĩa.'], ['我不知道汇率。', 'Wǒ bù zhīdào huìlǜ.', 'Thiếu chuyên nghiệp.']),
        T(['好，我换两千块。', 'Hǎo, wǒ huàn liǎng qiān kuài.', 'Được, tôi đổi 2.000 tệ.'], ['请出示护照，然后在这儿签字。', 'Qǐng chūshì hùzhào, ránhòu zài zhèr qiānzì.', 'Vui lòng xuất trình hộ chiếu rồi ký ở đây.', 'Thủ tục.'], ['请告诉我您的密码。', 'Qǐng gàosu wǒ nín de mìmǎ.', 'Không bao giờ hỏi mật khẩu khách!'], ['两千不行。', 'Liǎng qiān bù xíng.', 'Không hợp.'])
      ], ket: 'Em đã phục vụ khách đổi tiền bằng tiếng Trung.'
    },
    tom: ['把 A 换成 B', '开账户 / 取钱 / 转账'], nguphap: 'Câu 把…换成', phatam: '汇率 huìlǜ (ü), 账户 zhànghù',
    loi: ['Nhầm 取 (rút) và 存 (gửi)', 'Hỏi mật khẩu khách'], btvn: ['Đóng vai mở tài khoản 6 lượt', 'Học thuộc 10 từ ngân hàng', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 17 ================= */
  const d17 = {
    n: 17, ten: plan[16].ten, kinds: K,
    muc: 'Đặt phòng khách sạn, làm thủ tục nhận/trả phòng, hỏi đường và phương tiện khi du lịch.',
    hoc: `${tbl(['Mẫu câu', 'Nghĩa'], [['我预订了一个双人间。', 'Tôi đã đặt một phòng đôi.'], ['我要办入住手续。', 'Tôi muốn làm thủ tục nhận phòng.'], ['几点退房？', 'Mấy giờ trả phòng?'], ['含早餐吗？', 'Có kèm bữa sáng không?'], ['去故宫怎么走？', 'Đi Cố Cung thế nào?']])}`,
    vocab: [
      w('预订', 'yùdìng', 'đặt trước', '', ['我在网上预订了房间。', 'Wǒ zài wǎngshang yùdìngle fángjiān.', 'Tôi đặt phòng trên mạng.']),
      w('酒店', 'jiǔdiàn', 'khách sạn', '', ['这家酒店很干净。', 'Zhè jiā jiǔdiàn hěn gānjìng.', 'Khách sạn này sạch.']),
      w('双人间', 'shuāngrénjiān', 'phòng đôi', '', ['我要一个双人间。', 'Wǒ yào yí ge shuāngrénjiān.', 'Tôi cần một phòng đôi.']),
      w('入住', 'rùzhù', 'nhận phòng', '', ['几点可以入住？', 'Jǐ diǎn kěyǐ rùzhù?', 'Mấy giờ nhận phòng được?']),
      w('退房', 'tuìfáng', 'trả phòng', '', ['中午十二点退房。', 'Zhōngwǔ shí\'èr diǎn tuìfáng.', 'Trả phòng 12 giờ trưa.']),
      w('早餐', 'zǎocān', 'bữa sáng', '', ['含早餐吗？', 'Hán zǎocān ma?', 'Có kèm bữa sáng không?']),
      w('旅游', 'lǚyóu', 'du lịch', '', ['我们去杭州旅游。', 'Wǒmen qù Hángzhōu lǚyóu.', 'Chúng tôi đi Hàng Châu du lịch.']),
      w('景点', 'jǐngdiǎn', 'điểm tham quan', '', ['这儿有什么景点？', 'Zhèr yǒu shénme jǐngdiǎn?', 'Ở đây có điểm tham quan nào?']),
      w('门票', 'ménpiào', 'vé vào cửa', '', ['门票多少钱？', 'Ménpiào duōshao qián?', 'Vé vào cửa bao nhiêu?']),
      w('地铁', 'dìtiě', 'tàu điện ngầm', '', ['坐地铁最方便。', 'Zuò dìtiě zuì fāngbiàn.', 'Đi tàu điện ngầm tiện nhất.'])
    ],
    qs: [
      ['mc', '“Trả phòng” là?', '退房', ['入住', '预订', '订票'], 'tuìfáng.'],
      ['mc', '含早餐吗？ hỏi gì?', 'Có kèm bữa sáng không?', ['Mấy giờ ăn sáng?', 'Bữa sáng ở đâu?', 'Bữa sáng bao nhiêu tiền?'], '含 = bao gồm.'],
      ['mc', '景点 nghĩa là?', 'điểm tham quan', ['vé vào cửa', 'khách sạn', 'bản đồ'], 'jǐngdiǎn.'],
      ['hear', '下午两点以后可以入住，中午十二点前退房。', 'Nhận phòng sau 2 giờ chiều, trả trước 12 giờ trưa.', ['Nhận phòng 12 giờ, trả 2 giờ.', 'Nhận phòng lúc nào cũng được.', 'Trả phòng sau 2 giờ.'], 'Nghe giờ.'],
      ['hear', '去西湖坐地铁最方便。', 'Đi Tây Hồ bằng tàu điện ngầm tiện nhất.', ['Đi taxi tiện nhất.', 'Tây Hồ rất xa.', 'Không có tàu điện.'], '地铁.'],
      ['order', 'Sắp xếp: “Tôi đặt phòng trên mạng.”', ['我', '在网上', '预订了', '房间。'], '我在网上预订了房间。']
    ],
    noi: [['我预订了一个双人间。', 'Wǒ yùdìngle yí ge shuāngrénjiān. – Tôi đã đặt một phòng đôi.'], ['几点退房？含早餐吗？', 'Jǐ diǎn tuìfáng? Hán zǎocān ma? – Mấy giờ trả phòng? Có kèm bữa sáng không?'], ['去西湖怎么走？', 'Qù Xīhú zěnme zǒu? – Đi Tây Hồ thế nào?']],
    hoithoai: {
      ctx: 'Em đến khách sạn ở Hàng Châu làm thủ tục nhận phòng.', vai: 'Lễ tân hỏi, em trả lời.', ai: '🛎️ 前台',
      luot: [
        T(['您好，请问有预订吗？', 'Nín hǎo, qǐngwèn yǒu yùdìng ma?', 'Xin chào, anh có đặt trước không?'], ['有，我在网上预订了一个双人间，住两晚。', 'Yǒu, wǒ zài wǎngshang yùdìngle yí ge shuāngrénjiān, zhù liǎng wǎn.', 'Có, tôi đặt phòng đôi trên mạng, ở hai đêm.', 'Đủ thông tin.'], ['我没有预订了。', 'Wǒ méiyǒu yùdìng le.', 'Sai.'], ['我退房。', 'Wǒ tuìfáng.', 'Nhầm.']),
        T(['好的，请给我看一下护照。', 'Hǎo de, qǐng gěi wǒ kàn yíxià hùzhào.', 'Vâng, cho tôi xem hộ chiếu.'], ['给您。请问含早餐吗？', 'Gěi nín. Qǐngwèn hán zǎocān ma?', 'Gửi chị. Cho hỏi có kèm bữa sáng không?', 'Đưa + hỏi thêm.'], ['我的护照被你。', 'Wǒ de hùzhào bèi nǐ.', 'Câu cụt.'], ['护照没有了吗？', 'Hùzhào méiyǒu le ma?', 'Không hợp.']),
        T(['含早餐，七点到九点，在二楼。', 'Hán zǎocān, qī diǎn dào jiǔ diǎn, zài èr lóu.', 'Có, từ 7 đến 9 giờ, ở tầng 2.'], ['谢谢。去西湖怎么走？', 'Xièxie. Qù Xīhú zěnme zǒu?', 'Cảm ơn. Đi Tây Hồ thế nào?', 'Hỏi đường.'], ['早餐在九楼吗？', 'Zǎocān zài jiǔ lóu ma?', 'Nghe nhầm.'], ['我不吃早餐了过。', 'Wǒ bù chī zǎocān le guo.', 'Sai.'])
      ], ket: 'Em đã nhận phòng khách sạn và hỏi đường bằng tiếng Trung.'
    },
    tom: ['预订 / 入住 / 退房', '含早餐吗？', '怎么走？'], nguphap: 'Câu hỏi dịch vụ', phatam: '酒店 jiǔdiàn, 退房 tuìfáng',
    loi: ['Nhầm 入住 và 退房', 'Nghe nhầm giờ'], btvn: ['Lên lịch trình 2 ngày du lịch bằng tiếng Trung', 'Đóng vai nhận phòng 6 lượt', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 18 ================= */
  const d18 = {
    n: 18, ten: plan[17].ten, kinds: K,
    muc: 'Nói về công việc, kinh nghiệm, điểm mạnh; trả lời câu hỏi phỏng vấn cơ bản.',
    hoc: `${tbl(['Câu hỏi phỏng vấn', 'Gợi ý trả lời'], [['请你介绍一下自己。', '我叫…，在…工作了…年。'], ['你有什么优点？', '我工作很认真，也很会跟人沟通。'], ['你为什么想来我们公司？', '因为贵公司发展得很快，我想学习更多。'], ['你的缺点是什么？', '我有时候太着急，现在正在改。']])}
      ${tip('🔑 <b>贵公司</b> = quý công ty (lịch sự). Kết hợp các mẫu đã học: thời lượng, 得, 因为…所以.')}`,
    vocab: [
      w('面试', 'miànshì', 'phỏng vấn', '', ['明天我有一个面试。', 'Míngtiān wǒ yǒu yí ge miànshì.', 'Mai tôi có buổi phỏng vấn.']),
      w('经验', 'jīngyàn', 'kinh nghiệm', '', ['我有三年工作经验。', 'Wǒ yǒu sān nián gōngzuò jīngyàn.', 'Tôi có 3 năm kinh nghiệm.']),
      w('优点', 'yōudiǎn', 'ưu điểm', '', ['你的优点是什么？', 'Nǐ de yōudiǎn shì shénme?', 'Ưu điểm của bạn là gì?']),
      w('缺点', 'quēdiǎn', 'nhược điểm', '', ['每个人都有缺点。', 'Měi ge rén dōu yǒu quēdiǎn.', 'Ai cũng có nhược điểm.']),
      w('沟通', 'gōutōng', 'giao tiếp, trao đổi', '', ['他很会沟通。', 'Tā hěn huì gōutōng.', 'Anh ấy giỏi giao tiếp.']),
      w('负责', 'fùzé', 'phụ trách', '', ['我负责电脑系统。', 'Wǒ fùzé diànnǎo xìtǒng.', 'Tôi phụ trách hệ thống máy tính.']),
      w('工资', 'gōngzī', 'lương', '', ['工资怎么样？', 'Gōngzī zěnmeyàng?', 'Lương thế nào?']),
      w('同事', 'tóngshì', 'đồng nghiệp', '', ['我的同事都很友好。', 'Wǒ de tóngshì dōu hěn yǒuhǎo.', 'Đồng nghiệp tôi đều thân thiện.']),
      w('加班', 'jiābān', 'tăng ca', '', ['我们经常加班。', 'Wǒmen jīngcháng jiābān.', 'Chúng tôi hay tăng ca.']),
      w('发展', 'fāzhǎn', 'phát triển', '', ['公司发展得很快。', 'Gōngsī fāzhǎn de hěn kuài.', 'Công ty phát triển nhanh.'])
    ],
    qs: [
      ['mc', '“Kinh nghiệm” là?', '经验', ['经历', '经理', '经常'], 'jīngyàn.'],
      ['mc', 'Cách nói lịch sự “công ty của anh/chị”?', '贵公司', ['你公司', '他们公司', '大公司'], '贵 = quý.'],
      ['mc', '负责 nghĩa là?', 'phụ trách', ['phụ cấp', 'tăng ca', 'giao tiếp'], 'fùzé.'],
      ['hear', '我在银行负责电脑系统，工作了五年。', 'Tôi phụ trách hệ thống máy tính ở ngân hàng, làm 5 năm.', ['Tôi làm giao dịch viên 5 năm.', 'Tôi mới đi làm.', 'Tôi phụ trách kế toán.'], '负责 / 五年.'],
      ['hear', '我的缺点是有时候太着急。', 'Nhược điểm của tôi là đôi khi quá nóng vội.', ['Ưu điểm là cẩn thận.', 'Tôi không có nhược điểm.', 'Tôi hay đi muộn.'], '缺点 / 着急.'],
      ['order', 'Sắp xếp: “Tôi có 3 năm kinh nghiệm làm việc.”', ['我', '有', '三年', '工作经验。'], '我有三年工作经验。']
    ],
    noi: [['我有三年工作经验。', 'Wǒ yǒu sān nián gōngzuò jīngyàn. – Tôi có 3 năm kinh nghiệm.'], ['我工作很认真，也很会沟通。', 'Wǒ gōngzuò hěn rènzhēn, yě hěn huì gōutōng. – Tôi làm việc nghiêm túc và giỏi giao tiếp.'], ['我想在贵公司学习更多。', 'Wǒ xiǎng zài guì gōngsī xuéxí gèng duō. – Tôi muốn học hỏi thêm ở quý công ty.']],
    hoithoai: {
      ctx: 'Em phỏng vấn vào công ty công nghệ Trung Quốc tại Việt Nam.', vai: 'Nhà tuyển dụng hỏi, em trả lời.', ai: '👔 面试官',
      luot: [
        T(['请你介绍一下自己。', 'Qǐng nǐ jièshào yíxià zìjǐ.', 'Bạn giới thiệu bản thân đi.'], ['我叫阿明，在一家公司负责电脑系统，工作了四年。', 'Wǒ jiào Ā Míng, zài yì jiā gōngsī fùzé diànnǎo xìtǒng, gōngzuòle sì nián.', 'Tôi tên Minh, phụ trách hệ thống máy tính ở một công ty, làm 4 năm.', 'Tên + việc + thời lượng.'], ['我四年工作。', 'Wǒ sì nián gōngzuò.', 'Sai.'], ['我是很好。', 'Wǒ shì hěn hǎo.', 'Sai.']),
        T(['你有什么优点？', 'Nǐ yǒu shénme yōudiǎn?', 'Bạn có ưu điểm gì?'], ['我工作很认真，而且很会跟同事沟通。', 'Wǒ gōngzuò hěn rènzhēn, érqiě hěn huì gēn tóngshì gōutōng.', 'Tôi làm việc nghiêm túc, hơn nữa giỏi trao đổi với đồng nghiệp.', '而且.'], ['我没有缺点。', 'Wǒ méiyǒu quēdiǎn.', 'Quá tự tin.'], ['我优点很多了过。', 'Wǒ yōudiǎn hěn duō le guo.', 'Sai.']),
        T(['你为什么想来我们公司？', 'Nǐ wèishénme xiǎng lái wǒmen gōngsī?', 'Sao bạn muốn vào công ty chúng tôi?'], ['因为贵公司发展得很快，所以我想来学习。', 'Yīnwèi guì gōngsī fāzhǎn de hěn kuài, suǒyǐ wǒ xiǎng lái xuéxí.', 'Vì quý công ty phát triển nhanh nên tôi muốn đến học hỏi.', '因为…所以.'], ['因为工资高。', 'Yīnwèi gōngzī gāo.', 'Thiếu khéo.'], ['我不知道。', 'Wǒ bù zhīdào.', 'Không nên.'])
      ], ket: 'Em đã trả lời phỏng vấn bằng tiếng Trung.'
    },
    tom: ['经验 / 优点 / 缺点', '贵公司', 'Ghép mẫu đã học'], nguphap: 'Ghép câu phức khi phỏng vấn', phatam: '沟通 gōutōng, 经验 jīngyàn',
    loi: ['Nhầm 经验 và 经历', 'Nói 你公司 thay 贵公司'], btvn: ['Viết bài giới thiệu bản thân 100 chữ', 'Trả lời 5 câu phỏng vấn', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 19 ================= */
  const d19 = {
    n: 19, ten: plan[18].ten, kinds: K,
    muc: 'Nói về thời tiết, dự báo, bốn mùa; dùng 越来越, 了 chỉ thay đổi trạng thái.',
    hoc: `${tbl(['Mẫu', 'Nghĩa'], [['天气越来越冷了。', 'Trời ngày càng lạnh.'], ['听说明天会下雨。', 'Nghe nói mai sẽ mưa.'], ['今天三十五度，热死了！', 'Hôm nay 35 độ, nóng chết mất!'], ['北京的冬天又冷又干。', 'Mùa đông Bắc Kinh vừa lạnh vừa khô.']])}
      ${tip('🔑 <b>了</b> cuối câu tính từ = thay đổi trạng thái: 天冷<b>了</b> (trời lạnh rồi). <b>又…又…</b> = vừa… vừa….')}`,
    vocab: [
      w('天气预报', 'tiānqì yùbào', 'dự báo thời tiết', '', ['天气预报说明天下雨。', 'Tiānqì yùbào shuō míngtiān xià yǔ.', 'Dự báo nói mai mưa.']),
      w('下雨', 'xià yǔ', 'mưa', '', ['外面下雨了。', 'Wàimian xià yǔ le.', 'Ngoài trời mưa rồi.']),
      w('晴', 'qíng', 'nắng, quang', '', ['明天是晴天。', 'Míngtiān shì qíngtiān.', 'Mai trời nắng.']),
      w('阴', 'yīn', 'âm u', '', ['今天阴天。', 'Jīntiān yīntiān.', 'Hôm nay trời âm u.']),
      w('刮风', 'guā fēng', 'gió thổi', '', ['今天刮大风。', 'Jīntiān guā dà fēng.', 'Hôm nay gió to.']),
      w('度', 'dù', 'độ', '', ['三十度。', 'Sānshí dù.', '30 độ.']),
      w('季节', 'jìjié', 'mùa', '', ['你喜欢哪个季节？', 'Nǐ xǐhuan nǎge jìjié?', 'Bạn thích mùa nào?']),
      w('越来越', 'yuè lái yuè', 'ngày càng', '', ['天气越来越热。', 'Tiānqì yuè lái yuè rè.', 'Trời ngày càng nóng.']),
      w('又…又…', 'yòu… yòu…', 'vừa… vừa…', '', ['又便宜又好吃。', 'Yòu piányi yòu hǎochī.', 'Vừa rẻ vừa ngon.']),
      w('带伞', 'dài sǎn', 'mang ô', '', ['别忘了带伞。', 'Bié wàngle dài sǎn.', 'Đừng quên mang ô.'])
    ],
    qs: [
      ['mc', '“Trời ngày càng lạnh” là?', '天气越来越冷了。', ['天气越冷越来了。', '天气来越越冷。', '天气越来越很冷。'], '越来越 + adj.'],
      ['mc', '北京的冬天___冷___干。', '又…又', ['越…越', '不但…但是', '虽然…所以'], '又…又.'],
      ['mc', '阴天 nghĩa là?', 'trời âm u', ['trời nắng', 'trời mưa', 'trời gió'], 'yīntiān.'],
      ['hear', '天气预报说明天有雨，别忘了带伞。', 'Dự báo mai có mưa, đừng quên mang ô.', ['Mai nắng to.', 'Mai có gió.', 'Hôm nay mưa.'], '有雨 / 带伞.'],
      ['hear', '今天三十七度，热死了！', 'Hôm nay 37 độ, nóng chết mất!', ['Hôm nay 27 độ.', 'Hôm nay lạnh.', 'Hôm nay 17 độ.'], '三十七度.'],
      ['order', 'Sắp xếp: “Bạn thích mùa nào?”', ['你', '喜欢', '哪个', '季节？'], '你喜欢哪个季节？']
    ],
    noi: [['天气越来越冷了。', 'Tiānqì yuè lái yuè lěng le. – Trời ngày càng lạnh.'], ['听说明天会下雨。', 'Tīngshuō míngtiān huì xià yǔ. – Nghe nói mai sẽ mưa.'], ['别忘了带伞。', 'Bié wàngle dài sǎn. – Đừng quên mang ô.']],
    hoithoai: {
      ctx: 'Đồng nghiệp ở Bắc Kinh gọi video, hai người nói chuyện thời tiết.', vai: 'Tiểu Lâm hỏi, em trả lời.', ai: '👩 小林',
      luot: [
        T(['胡志明市现在热吗？', 'Hú Zhìmíng shì xiànzài rè ma?', 'TP.HCM giờ nóng không?'], ['很热，三十四度，又热又湿。', 'Hěn rè, sānshísì dù, yòu rè yòu shī.', 'Rất nóng, 34 độ, vừa nóng vừa ẩm.', '又…又.'], ['越热越来。', 'Yuè rè yuè lái.', 'Sai.'], ['很热了过。', 'Hěn rè le guo.', 'Sai.']),
        T(['北京越来越冷了，昨天零下五度。', 'Běijīng yuè lái yuè lěng le, zuótiān líng xià wǔ dù.', 'Bắc Kinh ngày càng lạnh, hôm qua âm 5 độ.'], ['哇，太冷了！你要多穿衣服。', 'Wà, tài lěng le! Nǐ yào duō chuān yīfu.', 'Ồ lạnh quá! Bạn phải mặc ấm vào.', 'Phản hồi tự nhiên.'], ['五度很热。', 'Wǔ dù hěn rè.', 'Hiểu sai.'], ['我也零下。', 'Wǒ yě líng xià.', 'Không hợp.']),
        T(['你最喜欢哪个季节？', 'Nǐ zuì xǐhuan nǎge jìjié?', 'Bạn thích mùa nào nhất?'], ['我最喜欢秋天，因为不冷也不热。', 'Wǒ zuì xǐhuan qiūtiān, yīnwèi bù lěng yě bú rè.', 'Tôi thích mùa thu nhất vì không lạnh không nóng.', 'Ý kiến + lý do.'], ['我喜欢天气预报。', 'Wǒ xǐhuan tiānqì yùbào.', 'Lạc đề.'], ['季节很多。', 'Jìjié hěn duō.', 'Không trả lời.'])
      ], ket: 'Em đã trò chuyện về thời tiết bằng tiếng Trung.'
    },
    tom: ['越来越 + adj', '又…又…', 'adj + 了 thay đổi'], nguphap: '越来越, 又…又', phatam: '零下 líng xià, 季节 jìjié',
    loi: ['越来越很冷', 'Thiếu 了 chỉ thay đổi'], btvn: ['Mô tả 4 mùa quê em 80 chữ', 'Nghe một bản tin thời tiết tiếng Trung', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 20 ================= */
  const d20 = {
    n: 20, ten: plan[19].ten, kinds: K,
    muc: 'Mua sắm trực tuyến: đặt hàng, thanh toán, theo dõi giao hàng, đổi trả và khiếu nại.',
    hoc: `${tbl(['Mẫu câu', 'Nghĩa'], [['我在网上下单了。', 'Tôi đã đặt hàng trên mạng.'], ['快递什么时候到？', 'Bao giờ hàng giao tới?'], ['包邮吗？', 'Có miễn phí vận chuyển không?'], ['我收到的东西坏了，想退货。', 'Hàng tôi nhận bị hỏng, muốn trả hàng.'], ['七天无理由退货。', 'Đổi trả trong 7 ngày không cần lý do.']])}
      ${tip('⚠️ Cảnh giác lừa đảo: người bán thật <b>không bao giờ</b> xin mã OTP (验证码) của bạn.')}`,
    vocab: [
      w('网购', 'wǎnggòu', 'mua sắm online', '', ['我经常网购。', 'Wǒ jīngcháng wǎnggòu.', 'Tôi hay mua online.']),
      w('下单', 'xià dān', 'đặt đơn', '', ['我已经下单了。', 'Wǒ yǐjīng xià dān le.', 'Tôi đặt đơn rồi.']),
      w('快递', 'kuàidì', 'chuyển phát nhanh', '', ['快递到了。', 'Kuàidì dào le.', 'Hàng tới rồi.']),
      w('包邮', 'bāoyóu', 'miễn phí ship', '', ['这个店包邮。', 'Zhège diàn bāoyóu.', 'Shop này free ship.']),
      w('退货', 'tuìhuò', 'trả hàng', '', ['我想退货。', 'Wǒ xiǎng tuìhuò.', 'Tôi muốn trả hàng.']),
      w('付款', 'fùkuǎn', 'thanh toán', '', ['可以货到付款吗？', 'Kěyǐ huò dào fùkuǎn ma?', 'Thanh toán khi nhận hàng được không?']),
      w('评价', 'píngjià', 'đánh giá', '', ['这个商品评价很好。', 'Zhège shāngpǐn píngjià hěn hǎo.', 'Sản phẩm này đánh giá tốt.']),
      w('客服', 'kèfú', 'chăm sóc khách hàng', '', ['你可以联系客服。', 'Nǐ kěyǐ liánxì kèfú.', 'Bạn có thể liên hệ CSKH.']),
      w('验证码', 'yànzhèngmǎ', 'mã xác thực (OTP)', '', ['不要把验证码告诉别人。', 'Búyào bǎ yànzhèngmǎ gàosu biérén.', 'Đừng cho người khác biết mã OTP.']),
      w('打折', 'dǎzhé', 'giảm giá', '', ['现在打八折。', 'Xiànzài dǎ bā zhé.', 'Đang giảm 20%.'])
    ],
    qs: [
      ['mc', '打八折 nghĩa là?', 'giảm 20% (trả 80%)', ['giảm 80%', 'giảm 8%', 'tăng 8%'], 'Trả 8 phần 10.'],
      ['mc', '“Thanh toán khi nhận hàng” là?', '货到付款', ['包邮', '退货', '下单'], 'huò dào fùkuǎn.'],
      ['mc', 'Người bán xin 验证码 của bạn. Nên làm gì?', 'Không đưa, có thể là lừa đảo', ['Đưa ngay để nhận hàng', 'Đưa nửa mã', 'Gửi qua email'], 'Không chia sẻ OTP.'],
      ['hear', '我收到的手机屏幕坏了，我想退货。', 'Điện thoại nhận được hỏng màn hình, tôi muốn trả hàng.', ['Điện thoại rất tốt.', 'Tôi muốn mua thêm.', 'Chưa nhận được hàng.'], '坏了 / 退货.'],
      ['hear', '这家店包邮，而且七天无理由退货。', 'Shop free ship và đổi trả 7 ngày không cần lý do.', ['Shop tính phí ship.', 'Không đổi trả.', 'Đổi trả 1 ngày.'], '包邮 / 七天.'],
      ['order', 'Sắp xếp: “Đừng cho người khác biết mã OTP.”', ['不要', '把验证码', '告诉', '别人。'], '不要把验证码告诉别人。']
    ],
    noi: [['快递什么时候到？', 'Kuàidì shénme shíhou dào? – Bao giờ hàng tới?'], ['包邮吗？', 'Bāoyóu ma? – Có free ship không?'], ['东西坏了，我想退货。', 'Dōngxi huài le, wǒ xiǎng tuìhuò. – Hàng hỏng, tôi muốn trả hàng.']],
    hoithoai: {
      ctx: 'Em là chủ shop phụ kiện máy tính, khách Trung Quốc nhắn tin khiếu nại.', vai: 'Khách nhắn, em làm CSKH.', ai: '📱 买家',
      luot: [
        T(['你好，我收到的鼠标不能用。', 'Nǐ hǎo, wǒ shōudào de shǔbiāo bù néng yòng.', 'Chào bạn, chuột tôi nhận được không dùng được.'], ['真抱歉！请您拍个视频发给我们。', 'Zhēn bàoqiàn! Qǐng nín pāi ge shìpín fā gěi wǒmen.', 'Thật xin lỗi! Anh quay video gửi cho chúng tôi nhé.', 'Xin lỗi + hướng xử lý.'], ['不能用是你的问题。', 'Bù néng yòng shì nǐ de wèntí.', 'Thái độ tệ.'], ['请把验证码发给我。', 'Qǐng bǎ yànzhèngmǎ fā gěi wǒ.', 'Không bao giờ xin OTP.']),
        T(['发了。可以退货吗？', 'Fā le. Kěyǐ tuìhuò ma?', 'Gửi rồi. Trả hàng được không?'], ['可以，我们七天无理由退货，运费我们付。', 'Kěyǐ, wǒmen qī tiān wú lǐyóu tuìhuò, yùnfèi wǒmen fù.', 'Được, chúng tôi đổi trả 7 ngày, phí ship chúng tôi chịu.', 'Chính sách rõ.'], ['不可以，没有理由。', 'Bù kěyǐ, méiyǒu lǐyóu.', 'Sai chính sách.'], ['退货被。', 'Tuìhuò bèi.', 'Câu cụt.']),
        T(['那我想换一个新的。', 'Nà wǒ xiǎng huàn yí ge xīn de.', 'Vậy tôi muốn đổi cái mới.'], ['没问题，新的明天就给您寄出去。', 'Méi wèntí, xīn de míngtiān jiù gěi nín jì chūqu.', 'Không vấn đề, mai gửi cái mới cho anh ngay.', 'Bổ ngữ xu hướng.'], ['新的没有了过。', 'Xīn de méiyǒu le guo.', 'Sai.'], ['您自己买吧。', 'Nín zìjǐ mǎi ba.', 'Thiếu dịch vụ.'])
      ], ket: 'Em đã xử lý khiếu nại đơn hàng chuyên nghiệp.'
    },
    tom: ['下单 / 快递 / 退货', '打八折', 'Không đưa 验证码'], nguphap: 'Câu dịch vụ khách hàng', phatam: '快递 kuàidì, 验证码 yànzhèngmǎ',
    loi: ['Hiểu sai 打八折', 'Chia sẻ OTP'], btvn: ['Viết 5 câu trả lời CSKH mẫu', 'Đọc 3 đánh giá sản phẩm tiếng Trung', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 21 ================= */
  const d21 = {
    n: 21, ten: plan[20].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Kiểm tra giai đoạn 3: thuê nhà, ngân hàng, du lịch, phỏng vấn, thời tiết, mua sắm online.',
    hoc: `<h4>Tóm tắt giai đoạn 3</h4>${tbl(['Chủ đề', 'Câu then chốt'], [['Thuê nhà', '房租多少钱？押金要交多少？'], ['Ngân hàng', '我想把人民币换成越南盾。'], ['Du lịch', '我预订了一个双人间。几点退房？'], ['Phỏng vấn', '我有三年工作经验。'], ['Thời tiết', '天气越来越冷了。'], ['Mua online', '包邮吗？我想退货。']])}`,
    qs: [['mc', '“Tôi muốn trả phòng” là?', '我要退房。', ['我要入住。', '我要退货。', '我要预订。'], '退房.'], ['mc', '“Phí thủ tục” là?', '手续费', ['水电费', '押金', '工资'], 'shǒuxùfèi.']],
    noi: [['我想把人民币换成越南盾。', 'Wǒ xiǎng bǎ Rénmínbì huànchéng Yuènán dùn. – Tôi muốn đổi tệ sang đồng.'], ['天气越来越热了。', 'Tiānqì yuè lái yuè rè le. – Trời ngày càng nóng.']],
    hoithoai: {
      ctx: 'Mô phỏng: một ngày công tác ở Thượng Hải.', vai: 'Nhiều người hỏi, em xử lý liên tục.', ai: '🎭 多人',
      luot: [
        T(['（酒店）您好，有预订吗？', '(Jiǔdiàn) Nín hǎo, yǒu yùdìng ma?', '(Khách sạn) Anh có đặt trước không?'], ['有，我预订了一个单人间。', 'Yǒu, wǒ yùdìngle yí ge dānrénjiān.', 'Có, tôi đặt một phòng đơn.', '预订.'], ['我退房了。', 'Wǒ tuìfáng le.', 'Nhầm.'], ['我没有房。', 'Wǒ méiyǒu fáng.', 'Sai.']),
        T(['（银行）您要办什么？', '(Yínháng) Nín yào bàn shénme?', '(Ngân hàng) Anh cần làm gì?'], ['我想换钱，今天汇率是多少？', 'Wǒ xiǎng huàn qián, jīntiān huìlǜ shì duōshao?', 'Tôi muốn đổi tiền, tỷ giá hôm nay bao nhiêu?', 'Ngân hàng.'], ['我想退货。', 'Wǒ xiǎng tuìhuò.', 'Nhầm nơi.'], ['我要面试。', 'Wǒ yào miànshì.', 'Nhầm.']),
        T(['（同事）明天天气怎么样？', '(Tóngshì) Míngtiān tiānqì zěnmeyàng?', '(Đồng nghiệp) Thời tiết mai thế nào?'], ['天气预报说有雨，别忘了带伞。', 'Tiānqì yùbào shuō yǒu yǔ, bié wàngle dài sǎn.', 'Dự báo có mưa, nhớ mang ô.', 'Thời tiết.'], ['明天很包邮。', 'Míngtiān hěn bāoyóu.', 'Vô nghĩa.'], ['我不带伞了过。', 'Wǒ bú dài sǎn le guo.', 'Sai.'])
      ], ket: 'Em đã xử lý trọn một ngày công tác!'
    },
    tom: ['Ôn giai đoạn 3', 'Kiểm tra 20 câu'], nguphap: 'Tổng ôn chủ đề đời sống', phatam: 'Ôn âm ü: 汇率, 旅游',
    loi: ['Xem lại câu sai'], btvn: ['Dưới 7 điểm: học lại ngày yếu', 'Làm ⚡ Luyện nhanh', 'Viết nhật ký một ngày công tác 100 chữ']
  };

  /* ================= NGÀY 22 ================= */
  const d22 = {
    n: 22, ten: plan[21].ten, kinds: K,
    muc: 'Gọi món, nhận xét vị, mô tả cách nấu bằng 先…然后…最后 và câu 把.',
    hoc: `${tbl(['Mẫu', 'Nghĩa'], [['先把鸡蛋打好，然后放油，最后放盐。', 'Trước đánh trứng, rồi cho dầu, cuối cùng cho muối.'], ['这个菜有点儿辣。', 'Món này hơi cay.'], ['少放点儿糖。', 'Cho ít đường thôi.'], ['服务员，买单！', 'Phục vụ ơi, tính tiền!']])}
      ${tip('🔑 Vị: 酸 chua · 甜 ngọt · 苦 đắng · 辣 cay · 咸 mặn. <b>有点儿</b> + tính từ (hơi… – ý chê nhẹ).')}`,
    vocab: [
      w('辣', 'là', 'cay', '', ['我不能吃辣。', 'Wǒ bù néng chī là.', 'Tôi không ăn cay được.']),
      w('甜', 'tián', 'ngọt', '', ['这个蛋糕太甜了。', 'Zhège dàngāo tài tián le.', 'Bánh này ngọt quá.']),
      w('酸', 'suān', 'chua', '', ['酸辣汤很好喝。', 'Suānlà tāng hěn hǎohē.', 'Canh chua cay ngon.']),
      w('咸', 'xián', 'mặn', '', ['菜有点儿咸。', 'Cài yǒudiǎnr xián.', 'Món hơi mặn.']),
      w('盐', 'yán', 'muối', '', ['少放点儿盐。', 'Shǎo fàng diǎnr yán.', 'Cho ít muối thôi.']),
      w('油', 'yóu', 'dầu ăn', '', ['先放油。', 'Xiān fàng yóu.', 'Cho dầu trước.']),
      w('炒', 'chǎo', 'xào', '', ['我会炒鸡蛋。', 'Wǒ huì chǎo jīdàn.', 'Tôi biết xào trứng.']),
      w('先…然后…', 'xiān… ránhòu…', 'trước… sau đó…', '', ['先洗手，然后吃饭。', 'Xiān xǐ shǒu, ránhòu chī fàn.', 'Rửa tay trước rồi ăn.']),
      w('最后', 'zuìhòu', 'cuối cùng', '', ['最后放葱。', 'Zuìhòu fàng cōng.', 'Cuối cùng cho hành.']),
      w('买单', 'mǎidān', 'tính tiền', '', ['服务员，买单！', 'Fúwùyuán, mǎidān!', 'Phục vụ, tính tiền!'])
    ],
    qs: [
      ['mc', '“Món hơi mặn” là?', '菜有点儿咸。', ['菜一点儿咸。', '菜咸有点儿。', '菜很有点儿咸。'], '有点儿 + adj.'],
      ['mc', '先洗菜，___炒。', '然后', ['最后先', '因为', '虽然'], '先…然后.'],
      ['mc', '酸 nghĩa là?', 'chua', ['cay', 'ngọt', 'đắng'], 'suān.'],
      ['hear', '少放点儿辣椒，我不能吃辣。', 'Cho ít ớt thôi, tôi không ăn cay được.', ['Cho nhiều ớt.', 'Tôi thích ăn cay.', 'Không cho muối.'], '不能吃辣.'],
      ['hear', '先把鸡蛋打好，然后放油，最后放盐。', 'Đánh trứng, rồi cho dầu, cuối cùng cho muối.', ['Cho muối trước.', 'Cho dầu cuối.', 'Không cần trứng.'], 'Trình tự.'],
      ['order', 'Sắp xếp: “Phục vụ ơi, tính tiền!”', ['服务员，', '买单', '！'], '服务员，买单！']
    ],
    noi: [['我不能吃辣，少放点儿。', 'Wǒ bù néng chī là, shǎo fàng diǎnr. – Tôi không ăn cay được, cho ít thôi.'], ['先放油，然后放鸡蛋。', 'Xiān fàng yóu, ránhòu fàng jīdàn. – Cho dầu trước rồi cho trứng.'], ['服务员，买单！', 'Fúwùyuán, mǎidān! – Phục vụ, tính tiền!']],
    hoithoai: {
      ctx: 'Em dạy bạn Trung Quốc nấu món trứng xào cà chua.', vai: 'Bạn hỏi, em hướng dẫn.', ai: '👨‍🍳 小王',
      luot: [
        T(['西红柿炒鸡蛋怎么做？', 'Xīhóngshì chǎo jīdàn zěnme zuò?', 'Cà chua xào trứng làm thế nào?'], ['先把鸡蛋打好，然后炒一下。', 'Xiān bǎ jīdàn dǎhǎo, ránhòu chǎo yíxià.', 'Trước tiên đánh trứng, sau đó xào qua.', '先…然后 + 把.'], ['然后先炒。', 'Ránhòu xiān chǎo.', 'Sai trình tự.'], ['把鸡蛋打。', 'Bǎ jīdàn dǎ.', 'Thiếu bổ ngữ.']),
        T(['然后呢？', 'Ránhòu ne?', 'Rồi sao nữa?'], ['再放西红柿，最后放一点儿盐和糖。', 'Zài fàng xīhóngshì, zuìhòu fàng yìdiǎnr yán hé táng.', 'Cho cà chua vào, cuối cùng cho chút muối và đường.', '最后.'], ['最后先放盐。', 'Zuìhòu xiān fàng yán.', 'Mâu thuẫn.'], ['放很多辣。', 'Fàng hěn duō là.', 'Không đúng món.']),
        T(['好吃！不过有点儿甜。', 'Hǎochī! Búguò yǒudiǎnr tián.', 'Ngon! Có điều hơi ngọt.'], ['下次我少放点儿糖。', 'Xià cì wǒ shǎo fàng diǎnr táng.', 'Lần sau tôi cho ít đường hơn.', 'Phản hồi.'], ['一点儿甜有。', 'Yìdiǎnr tián yǒu.', 'Sai.'], ['不甜，很咸。', 'Bù tián, hěn xián.', 'Cãi.'])
      ], ket: 'Em đã hướng dẫn nấu ăn theo trình tự.'
    },
    tom: ['酸甜苦辣咸', '先…然后…最后', '有点儿 + adj'], nguphap: 'Câu trình tự', phatam: '辣 là, 咸 xián, 酸 suān',
    loi: ['一点儿 thay 有点儿 trước tính từ'], btvn: ['Viết công thức một món Việt bằng tiếng Trung', 'Gọi món 5 câu', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 23 ================= */
  const d23 = {
    n: 23, ten: plan[22].ten, kinds: K,
    muc: 'Tìm hiểu Tết Nguyên đán, Trung thu, Đoan ngọ; chúc Tết, so sánh với phong tục Việt Nam.',
    hoc: `${tbl(['Lễ', 'Thời gian', 'Phong tục'], [['春节 Chūnjié', '1/1 âm lịch', '贴春联、吃饺子、发红包、拜年'], ['中秋节 Zhōngqiūjié', '15/8 âm lịch', '吃月饼、赏月、团圆'], ['端午节 Duānwǔjié', '5/5 âm lịch', '吃粽子、赛龙舟']])}
      ${exs([['新年快乐！恭喜发财！', 'Xīnnián kuàilè! Gōngxǐ fācái!', 'Chúc mừng năm mới! Phát tài!'], ['祝你身体健康，万事如意！', 'Zhù nǐ shēntǐ jiànkāng, wànshì rúyì!', 'Chúc bạn khoẻ mạnh, vạn sự như ý!']])}`,
    vocab: [
      w('春节', 'Chūnjié', 'Tết Nguyên đán', '', ['春节是最重要的节日。', 'Chūnjié shì zuì zhòngyào de jiérì.', 'Tết là lễ quan trọng nhất.']),
      w('中秋节', 'Zhōngqiūjié', 'Tết Trung thu', '', ['中秋节吃月饼。', 'Zhōngqiūjié chī yuèbing.', 'Trung thu ăn bánh trung thu.']),
      w('节日', 'jiérì', 'ngày lễ', '', ['你最喜欢什么节日？', 'Nǐ zuì xǐhuan shénme jiérì?', 'Bạn thích lễ nào nhất?']),
      w('红包', 'hóngbāo', 'lì xì', '', ['过年发红包。', 'Guònián fā hóngbāo.', 'Tết lì xì.']),
      w('饺子', 'jiǎozi', 'sủi cảo', '', ['北方人过年吃饺子。', 'Běifāng rén guònián chī jiǎozi.', 'Người phương Bắc ăn sủi cảo ngày Tết.']),
      w('月饼', 'yuèbing', 'bánh trung thu', '', ['这个月饼很甜。', 'Zhège yuèbing hěn tián.', 'Bánh này ngọt.']),
      w('团圆', 'tuányuán', 'đoàn viên', '', ['一家人团圆。', 'Yì jiā rén tuányuán.', 'Cả nhà đoàn viên.']),
      w('拜年', 'bàinián', 'chúc Tết', '', ['我们去爷爷家拜年。', 'Wǒmen qù yéye jiā bàinián.', 'Chúng tôi đi chúc Tết ông.']),
      w('祝', 'zhù', 'chúc', '', ['祝你生日快乐！', 'Zhù nǐ shēngrì kuàilè!', 'Chúc mừng sinh nhật!']),
      w('传统', 'chuántǒng', 'truyền thống', '', ['这是中国的传统。', 'Zhè shì Zhōngguó de chuántǒng.', 'Đây là truyền thống Trung Quốc.'])
    ],
    qs: [
      ['mc', 'Trung thu ăn gì?', '月饼', ['饺子', '粽子', '汤圆'], 'yuèbing.'],
      ['mc', '恭喜发财 dùng khi nào?', 'Chúc Tết', ['Chia buồn', 'Chúc ngủ ngon', 'Xin lỗi'], 'Lời chúc phát tài ngày Tết.'],
      ['mc', '团圆 nghĩa là?', 'đoàn viên', ['tròn trịa', 'truyền thống', 'lì xì'], 'tuányuán.'],
      ['hear', '春节的时候，大人给孩子发红包。', 'Dịp Tết người lớn lì xì trẻ con.', ['Trẻ con lì xì người lớn.', 'Tết không lì xì.', 'Trung thu lì xì.'], '发红包.'],
      ['hear', '祝你身体健康，万事如意！', 'Chúc bạn khoẻ mạnh, vạn sự như ý!', ['Chúc bạn sinh nhật vui.', 'Chúc bạn thi tốt.', 'Chúc bạn lên đường bình an.'], 'Lời chúc.'],
      ['order', 'Sắp xếp: “Tết là ngày lễ quan trọng nhất.”', ['春节', '是', '最重要的', '节日。'], '春节是最重要的节日。']
    ],
    noi: [['新年快乐！恭喜发财！', 'Xīnnián kuàilè! Gōngxǐ fācái! – Chúc mừng năm mới! Phát tài!'], ['祝你身体健康，万事如意！', 'Zhù nǐ shēntǐ jiànkāng, wànshì rúyì! – Chúc khoẻ mạnh, vạn sự như ý!'], ['越南人过年也发红包。', 'Yuènán rén guònián yě fā hóngbāo. – Người Việt ăn Tết cũng lì xì.']],
    hoithoai: {
      ctx: 'Bạn Trung Quốc hỏi về Tết ở Việt Nam.', vai: 'Bạn hỏi, em so sánh.', ai: '👩 小雪',
      luot: [
        T(['越南人也过春节吗？', 'Yuènán rén yě guò Chūnjié ma?', 'Người Việt cũng ăn Tết à?'], ['过，越南叫"Tết"，也是最重要的节日。', 'Guò, Yuènán jiào "Tết", yě shì zuì zhòngyào de jiérì.', 'Có, ở Việt Nam gọi là Tết, cũng là lễ quan trọng nhất.', 'So sánh.'], ['越南没有节日。', 'Yuènán méiyǒu jiérì.', 'Sai sự thật.'], ['过了春节过。', 'Guòle Chūnjié guo.', 'Sai.']),
        T(['你们过年吃饺子吗？', 'Nǐmen guònián chī jiǎozi ma?', 'Các bạn ăn sủi cảo không?'], ['不吃饺子，我们吃粽子，越南叫"bánh chưng"。', 'Bù chī jiǎozi, wǒmen chī zòngzi, Yuènán jiào "bánh chưng".', 'Không ăn sủi cảo, chúng tôi ăn bánh chưng.', 'Giới thiệu văn hoá.'], ['我们吃月饼过年。', 'Wǒmen chī yuèbing guònián.', 'Nhầm lễ.'], ['饺子很团圆。', 'Jiǎozi hěn tuányuán.', 'Vô nghĩa.']),
        T(['真有意思！那我先祝你新年快乐！', 'Zhēn yǒu yìsi! Nà wǒ xiān zhù nǐ xīnnián kuàilè!', 'Thú vị thật! Vậy chúc bạn năm mới vui!'], ['谢谢！也祝你身体健康，万事如意！', 'Xièxie! Yě zhù nǐ shēntǐ jiànkāng, wànshì rúyì!', 'Cảm ơn! Chúc bạn khoẻ mạnh, vạn sự như ý!', 'Đáp lời chúc.'], ['不客气，再见了过。', 'Bú kèqi, zàijiàn le guo.', 'Sai.'], ['我不过年。', 'Wǒ bú guònián.', 'Lạc.'])
      ], ket: 'Em đã giới thiệu Tết Việt và chúc Tết bằng tiếng Trung.'
    },
    tom: ['春节 / 中秋节 / 端午节', 'Lời chúc Tết'], nguphap: '祝 + người + lời chúc', phatam: '恭喜发财 gōngxǐ fācái',
    loi: ['Nhầm món ăn từng lễ'], btvn: ['Viết thiệp chúc Tết bằng tiếng Trung', 'So sánh Tết Việt – Trung 80 chữ', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 24 ================= */
  const d24 = {
    n: 24, ten: plan[23].ten, kinds: K,
    muc: 'Nói về sở thích, thể thao, tần suất; dùng 对…感兴趣, 每…都, 一边…一边.',
    hoc: `${tbl(['Mẫu', 'Nghĩa'], [['我对摄影很感兴趣。', 'Tôi rất hứng thú với nhiếp ảnh.'], ['我每个周末都去游泳。', 'Cuối tuần nào tôi cũng đi bơi.'], ['他一边听音乐，一边跑步。', 'Anh ấy vừa nghe nhạc vừa chạy.'], ['我一个星期打两次羽毛球。', 'Tôi đánh cầu lông 2 lần/tuần.']])}`,
    vocab: [
      w('爱好', 'àihào', 'sở thích', '', ['你的爱好是什么？', 'Nǐ de àihào shì shénme?', 'Sở thích của bạn là gì?']),
      w('感兴趣', 'gǎn xìngqù', 'hứng thú', '', ['我对历史很感兴趣。', 'Wǒ duì lìshǐ hěn gǎn xìngqù.', 'Tôi hứng thú với lịch sử.']),
      w('运动', 'yùndòng', 'vận động, thể thao', '', ['你喜欢什么运动？', 'Nǐ xǐhuan shénme yùndòng?', 'Bạn thích môn thể thao nào?']),
      w('游泳', 'yóuyǒng', 'bơi', '', ['夏天我常常游泳。', 'Xiàtiān wǒ chángcháng yóuyǒng.', 'Mùa hè tôi hay bơi.']),
      w('羽毛球', 'yǔmáoqiú', 'cầu lông', '', ['我们去打羽毛球吧。', 'Wǒmen qù dǎ yǔmáoqiú ba.', 'Mình đi đánh cầu lông nhé.']),
      w('足球', 'zúqiú', 'bóng đá', '', ['他踢足球踢得很好。', 'Tā tī zúqiú tī de hěn hǎo.', 'Anh ấy đá bóng giỏi.']),
      w('健身', 'jiànshēn', 'tập gym', '', ['我每天去健身房。', 'Wǒ měitiān qù jiànshēnfáng.', 'Ngày nào tôi cũng đi gym.']),
      w('摄影', 'shèyǐng', 'nhiếp ảnh', '', ['他喜欢摄影。', 'Tā xǐhuan shèyǐng.', 'Anh ấy thích chụp ảnh.']),
      w('一边…一边…', 'yìbiān… yìbiān…', 'vừa… vừa… (hai việc cùng lúc)', '', ['一边吃饭一边看电视。', 'Yìbiān chī fàn yìbiān kàn diànshì.', 'Vừa ăn vừa xem TV.']),
      w('比赛', 'bǐsài', 'trận đấu, cuộc thi', '', ['昨天的比赛很精彩。', 'Zuótiān de bǐsài hěn jīngcǎi.', 'Trận hôm qua rất hay.'])
    ],
    qs: [
      ['mc', '“Tôi hứng thú với lịch sử” là?', '我对历史很感兴趣。', ['我感兴趣历史。', '我历史对感兴趣。', '我很感兴趣对历史。'], '对…感兴趣.'],
      ['mc', 'Hai hành động cùng lúc dùng?', '一边…一边…', ['又…又…', '越…越…', '先…然后…'], 'yìbiān.'],
      ['mc', '踢 đi với?', '足球', ['羽毛球', '游泳', '健身'], '踢足球.'],
      ['hear', '我每个周末都去打羽毛球。', 'Cuối tuần nào tôi cũng đi đánh cầu lông.', ['Thỉnh thoảng đánh cầu lông.', 'Cuối tuần đi bơi.', 'Không thích cầu lông.'], '每…都.'],
      ['hear', '他一边听音乐一边跑步。', 'Anh ấy vừa nghe nhạc vừa chạy.', ['Anh ấy chạy xong nghe nhạc.', 'Anh ấy không thích chạy.', 'Anh ấy hát.'], '一边…一边.'],
      ['order', 'Sắp xếp: “Sở thích của bạn là gì?”', ['你的', '爱好', '是', '什么？'], '你的爱好是什么？']
    ],
    noi: [['我对摄影很感兴趣。', 'Wǒ duì shèyǐng hěn gǎn xìngqù. – Tôi rất hứng thú với nhiếp ảnh.'], ['我每个周末都去游泳。', 'Wǒ měi ge zhōumò dōu qù yóuyǒng. – Cuối tuần nào tôi cũng đi bơi.'], ['我们一起去打羽毛球吧！', 'Wǒmen yìqǐ qù dǎ yǔmáoqiú ba! – Mình cùng đi đánh cầu lông nhé!']],
    hoithoai: {
      ctx: 'Hai đồng nghiệp làm quen trong giờ nghỉ.', vai: 'Tiểu Đỗ hỏi, em trả lời.', ai: '👨 小杜',
      luot: [
        T(['你下班以后常常做什么？', 'Nǐ xiàbān yǐhòu chángcháng zuò shénme?', 'Tan làm bạn hay làm gì?'], ['我常常去健身，一个星期去三次。', 'Wǒ chángcháng qù jiànshēn, yí ge xīngqī qù sān cì.', 'Tôi hay đi gym, tuần 3 lần.', 'Tần suất.'], ['我三次健身一个星期。', 'Wǒ sān cì jiànshēn yí ge xīngqī.', 'Sai trật tự.'], ['我下班。', 'Wǒ xiàbān.', 'Không trả lời.']),
        T(['你对什么感兴趣？', 'Nǐ duì shénme gǎn xìngqù?', 'Bạn hứng thú với gì?'], ['我对电脑和摄影都很感兴趣。', 'Wǒ duì diànnǎo hé shèyǐng dōu hěn gǎn xìngqù.', 'Tôi hứng thú cả máy tính lẫn nhiếp ảnh.', '对…感兴趣.'], ['我感兴趣对电脑。', 'Wǒ gǎn xìngqù duì diànnǎo.', 'Sai.'], ['我很兴趣。', 'Wǒ hěn xìngqù.', 'Thiếu 感.']),
        T(['周末一起去踢足球吧！', 'Zhōumò yìqǐ qù tī zúqiú ba!', 'Cuối tuần cùng đi đá bóng nhé!'], ['好啊！不过我踢得不太好。', 'Hǎo a! Búguò wǒ tī de bú tài hǎo.', 'Được! Có điều tôi đá không giỏi lắm.', 'Nhận lời + 得.'], ['我打足球。', 'Wǒ dǎ zúqiú.', 'Bóng đá dùng 踢.'], ['不，我对你不感兴趣。', 'Bù, wǒ duì nǐ bù gǎn xìngqù.', 'Bất lịch sự.'])
      ], ket: 'Em đã nói về sở thích và hẹn chơi thể thao.'
    },
    tom: ['对…感兴趣', '每…都', '一边…一边', '打/踢/游'], nguphap: 'Tần suất và sở thích', phatam: '羽毛球 yǔmáoqiú, 摄影 shèyǐng',
    loi: ['打足球', 'Đặt tần suất trước động từ'], btvn: ['Viết đoạn 80 chữ về sở thích', 'Hỏi 3 người về sở thích', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 25 ================= */
  const d25 = {
    n: 25, ten: plan[24].ten, kinds: K,
    muc: 'Nói về việc học, thi cử, điểm số, kế hoạch học tập; dùng 为了, 打算, 准备.',
    hoc: `${tbl(['Mẫu', 'Nghĩa'], [['为了考HSK，我每天学两个小时。', 'Để thi HSK, mỗi ngày tôi học 2 tiếng.'], ['我打算明年考HSK四级。', 'Tôi định năm sau thi HSK 4.'], ['我考了二百五十分，及格了。', 'Tôi được 250 điểm, đỗ rồi.'], ['考试的时候我很紧张。', 'Lúc thi tôi rất căng thẳng.']])}
      ${tip('🔑 HSK 3 tổng 300 điểm, cần ≥ 180 để đạt (theo HSK 2.0; hãy kiểm tra quy định mới nhất trên trang chính thức chinesetest.cn).')}`,
    vocab: [
      w('考试', 'kǎoshì', 'thi, kỳ thi', '', ['下个月有考试。', 'Xià ge yuè yǒu kǎoshì.', 'Tháng sau có kỳ thi.']),
      w('成绩', 'chéngjì', 'thành tích, điểm', '', ['你的成绩怎么样？', 'Nǐ de chéngjì zěnmeyàng?', 'Điểm của bạn thế nào?']),
      w('及格', 'jígé', 'đạt, đỗ', '', ['我及格了！', 'Wǒ jígé le!', 'Tôi đỗ rồi!']),
      w('复习', 'fùxí', 'ôn tập', '', ['考试前要复习。', 'Kǎoshì qián yào fùxí.', 'Trước khi thi phải ôn.']),
      w('为了', 'wèile', 'để, vì (mục đích)', '', ['为了工作，我学中文。', 'Wèile gōngzuò, wǒ xué Zhōngwén.', 'Vì công việc tôi học tiếng Trung.']),
      w('打算', 'dǎsuàn', 'dự định', '', ['你打算什么时候考？', 'Nǐ dǎsuàn shénme shíhou kǎo?', 'Bạn định khi nào thi?']),
      w('紧张', 'jǐnzhāng', 'căng thẳng, hồi hộp', '', ['别紧张！', 'Bié jǐnzhāng!', 'Đừng căng thẳng!']),
      w('分', 'fēn', 'điểm', '', ['我考了九十分。', 'Wǒ kǎole jiǔshí fēn.', 'Tôi được 90 điểm.']),
      w('证书', 'zhèngshū', 'chứng chỉ', '', ['我拿到了证书。', 'Wǒ nádàole zhèngshū.', 'Tôi nhận được chứng chỉ.']),
      w('报名', 'bàomíng', 'đăng ký (thi, khoá)', '', ['我已经报名了。', 'Wǒ yǐjīng bàomíng le.', 'Tôi đã đăng ký rồi.'])
    ],
    qs: [
      ['mc', '“Để thi HSK, mỗi ngày tôi học 2 tiếng”?', '为了考HSK，我每天学两个小时。', ['因为考HSK，所以两个小时。', '为了我每天两个小时考HSK。', '我为了两个小时考HSK。'], '为了 + mục đích.'],
      ['mc', '及格 nghĩa là?', 'đạt, đỗ', ['trượt', 'đăng ký', 'ôn tập'], 'jígé.'],
      ['mc', '你___什么时候考？(dự định)', '打算', ['为了', '复习', '报名了'], '打算.'],
      ['hear', '我考了二百一十分，及格了！', 'Tôi được 210 điểm, đỗ rồi!', ['Tôi được 120 điểm, trượt.', 'Tôi được 201 điểm.', 'Tôi chưa thi.'], '二百一十.'],
      ['hear', '考试前一定要好好复习，别紧张。', 'Trước khi thi phải ôn kỹ, đừng căng thẳng.', ['Không cần ôn.', 'Hãy căng thẳng lên.', 'Thi xong rồi ôn.'], '复习 / 别紧张.'],
      ['order', 'Sắp xếp: “Tôi định năm sau thi HSK 4.”', ['我', '打算', '明年', '考HSK四级。'], '我打算明年考HSK四级。']
    ],
    noi: [['我打算明年考HSK四级。', 'Wǒ dǎsuàn míngnián kǎo HSK sì jí. – Tôi định năm sau thi HSK 4.'], ['为了工作，我学中文。', 'Wèile gōngzuò, wǒ xué Zhōngwén. – Vì công việc tôi học tiếng Trung.'], ['别紧张，你一定能及格！', 'Bié jǐnzhāng, nǐ yídìng néng jígé! – Đừng lo, bạn chắc chắn đỗ!']],
    hoithoai: {
      ctx: 'Em gặp bạn cùng lớp tiếng Trung sau kỳ thi HSK.', vai: 'Bạn hỏi, em trả lời.', ai: '👩 阿兰',
      luot: [
        T(['HSK考得怎么样？', 'HSK kǎo de zěnmeyàng?', 'Thi HSK thế nào?'], ['还不错，考了二百三十分，及格了！', 'Hái búcuò, kǎole èrbǎi sānshí fēn, jígé le!', 'Khá ổn, được 230 điểm, đỗ rồi!', 'Kết quả.'], ['我考得二百三十分。', 'Wǒ kǎo de èrbǎi sānshí fēn.', 'Dùng 考了.'], ['我及格不了了。', 'Wǒ jígé bù liǎo le.', 'Mâu thuẫn.']),
        T(['太棒了！你是怎么复习的？', 'Tài bàng le! Nǐ shì zěnme fùxí de?', 'Tuyệt! Bạn ôn thế nào?'], ['为了考试，我每天复习两个小时，还做了很多套题。', 'Wèile kǎoshì, wǒ měitiān fùxí liǎng ge xiǎoshí, hái zuòle hěn duō tào tí.', 'Để thi, mỗi ngày tôi ôn 2 tiếng, còn làm nhiều bộ đề.', '为了 + thời lượng.'], ['我两个小时复习每天。', 'Wǒ liǎng ge xiǎoshí fùxí měitiān.', 'Sai trật tự.'], ['我没复习了。', 'Wǒ méi fùxí le.', 'Sai.']),
        T(['你下一步打算做什么？', 'Nǐ xià yí bù dǎsuàn zuò shénme?', 'Bước tiếp theo bạn định làm gì?'], ['我打算明年考HSK四级。', 'Wǒ dǎsuàn míngnián kǎo HSK sì jí.', 'Tôi định năm sau thi HSK 4.', '打算.'], ['我打算了去年。', 'Wǒ dǎsuànle qùnián.', 'Sai thời gian.'], ['四级很紧张。', 'Sì jí hěn jǐnzhāng.', 'Không trả lời.'])
      ], ket: 'Em đã nói về thi cử và kế hoạch học tập.'
    },
    tom: ['为了 / 打算', '考了…分, 及格'], nguphap: '为了 chỉ mục đích', phatam: '及格 jígé, 成绩 chéngjì',
    loi: ['Nhầm 为了 và 因为'], btvn: ['Viết kế hoạch học 3 tháng tới bằng tiếng Trung', 'Đăng ký thi thử HSK 3 online', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 26 ================= */
  const d26 = {
    n: 26, ten: plan[25].ten, kinds: K,
    muc: 'Kể một câu chuyện đã qua có mở đầu – diễn biến – kết thúc; dùng 的时候, 以前/以后, 后来, 突然.',
    hoc: `${tbl(['Từ nối', 'Vai trò'], [['那天… / 有一次…', 'Mở đầu'], ['…的时候', 'Khi…'], ['突然', 'Bỗng nhiên'], ['后来', 'Sau đó (kể chuyện quá khứ)'], ['最后 / 终于', 'Cuối cùng']])}
      ${exs([['有一次，我在机场把护照丢了。', 'Yǒu yí cì, wǒ zài jīchǎng bǎ hùzhào diū le.', 'Có lần tôi làm mất hộ chiếu ở sân bay.'], ['后来，一个工作人员帮我找到了。', 'Hòulái, yí ge gōngzuò rényuán bāng wǒ zhǎodào le.', 'Sau đó một nhân viên giúp tôi tìm được.']])}
      ${tip('🔑 <b>后来</b> chỉ dùng cho chuyện đã qua; tương lai dùng <b>以后</b>.')}`,
    vocab: [
      w('有一次', 'yǒu yí cì', 'có một lần', '', ['有一次我迷路了。', 'Yǒu yí cì wǒ mílù le.', 'Có lần tôi lạc đường.']),
      w('的时候', 'de shíhou', 'khi, lúc', '', ['我小的时候住在农村。', 'Wǒ xiǎo de shíhou zhù zài nóngcūn.', 'Hồi nhỏ tôi sống ở quê.']),
      w('突然', 'tūrán', 'bỗng nhiên', '', ['突然下起雨来了。', 'Tūrán xià qǐ yǔ lái le.', 'Bỗng nhiên trời đổ mưa.']),
      w('后来', 'hòulái', 'sau đó (quá khứ)', '', ['后来我们成了好朋友。', 'Hòulái wǒmen chéngle hǎo péngyou.', 'Sau đó chúng tôi thành bạn tốt.']),
      w('丢', 'diū', 'đánh mất', '', ['我的钱包丢了。', 'Wǒ de qiánbāo diū le.', 'Tôi mất ví rồi.']),
      w('迷路', 'mílù', 'lạc đường', '', ['在北京我迷路了。', 'Zài Běijīng wǒ mílù le.', 'Ở Bắc Kinh tôi bị lạc.']),
      w('着急', 'zháojí', 'sốt ruột, lo', '', ['别着急，慢慢说。', 'Bié zháojí, mànmàn shuō.', 'Đừng sốt ruột, nói từ từ.']),
      w('帮助', 'bāngzhù', 'giúp đỡ', '', ['谢谢你的帮助。', 'Xièxie nǐ de bāngzhù.', 'Cảm ơn sự giúp đỡ của bạn.']),
      w('发生', 'fāshēng', 'xảy ra', '', ['发生了什么事？', 'Fāshēngle shénme shì?', 'Đã xảy ra chuyện gì?']),
      w('机场', 'jīchǎng', 'sân bay', '', ['我在机场等你。', 'Wǒ zài jīchǎng děng nǐ.', 'Tôi đợi bạn ở sân bay.'])
    ],
    qs: [
      ['mc', 'Kể chuyện quá khứ, “sau đó” dùng?', '后来', ['以后', '然后再', '将来'], '后来 cho quá khứ.'],
      ['mc', '___，下起雨来了。(bỗng nhiên)', '突然', ['终于', '后来', '已经'], 'tūrán.'],
      ['mc', '迷路 nghĩa là?', 'lạc đường', ['mê mẩn', 'đi bộ', 'hỏi đường'], 'mílù.'],
      ['hear', '有一次，我在机场把护照丢了，特别着急。', 'Có lần tôi mất hộ chiếu ở sân bay, rất sốt ruột.', ['Tôi tìm thấy hộ chiếu.', 'Tôi quên vé.', 'Tôi trễ chuyến bay.'], '丢了 / 着急.'],
      ['hear', '后来一个工作人员帮我找到了。', 'Sau đó một nhân viên giúp tôi tìm được.', ['Sau đó tôi tự tìm.', 'Không ai giúp.', 'Tôi về nhà.'], '后来.'],
      ['order', 'Sắp xếp: “Đã xảy ra chuyện gì?”', ['发生了', '什么', '事', '？'], '发生了什么事？']
    ],
    noi: [['有一次，我在北京迷路了。', 'Yǒu yí cì, wǒ zài Běijīng mílù le. – Có lần tôi bị lạc ở Bắc Kinh.'], ['后来，一个老人帮了我。', 'Hòulái, yí ge lǎorén bāngle wǒ. – Sau đó một cụ già giúp tôi.'], ['别着急，慢慢说。', 'Bié zháojí, mànmàn shuō. – Đừng sốt ruột, nói từ từ.']],
    hoithoai: {
      ctx: 'Bạn hỏi em về chuyến công tác Bắc Kinh có gì đáng nhớ.', vai: 'Bạn hỏi, em kể chuyện.', ai: '👨 小高',
      luot: [
        T(['去北京的时候，发生了什么有意思的事？', 'Qù Běijīng de shíhou, fāshēngle shénme yǒu yìsi de shì?', 'Đi Bắc Kinh có chuyện gì thú vị?'], ['有一次我一个人出去，突然迷路了。', 'Yǒu yí cì wǒ yí ge rén chūqu, tūrán mílù le.', 'Có lần tôi đi một mình, bỗng bị lạc.', 'Mở đầu + 突然.'], ['我以后迷路了。', 'Wǒ yǐhòu mílù le.', 'Sai từ nối.'], ['迷路很有意思吗？', 'Mílù hěn yǒu yìsi ma?', 'Không kể.']),
        T(['那你怎么办？', 'Nà nǐ zěnme bàn?', 'Vậy bạn làm sao?'], ['我很着急，后来一位老奶奶带我回了酒店。', 'Wǒ hěn zháojí, hòulái yí wèi lǎo nǎinai dài wǒ huíle jiǔdiàn.', 'Tôi rất sốt ruột, sau đó một cụ bà dẫn tôi về khách sạn.', '后来.'], ['我以后很着急。', 'Wǒ yǐhòu hěn zháojí.', 'Sai.'], ['我把老奶奶丢了。', 'Wǒ bǎ lǎo nǎinai diū le.', 'Vô lý.']),
        T(['北京人真热情！', 'Běijīng rén zhēn rèqíng!', 'Người Bắc Kinh nhiệt tình thật!'], ['是啊，最后我还请她喝了茶。', 'Shì a, zuìhòu wǒ hái qǐng tā hēle chá.', 'Đúng vậy, cuối cùng tôi còn mời cụ uống trà.', 'Kết thúc.'], ['最后先喝茶。', 'Zuìhòu xiān hē chá.', 'Mâu thuẫn.'], ['不热情。', 'Bú rèqíng.', 'Cãi.'])
      ], ket: 'Em đã kể một câu chuyện trọn vẹn bằng tiếng Trung.'
    },
    tom: ['有一次 / 的时候 / 突然 / 后来 / 最后'], nguphap: 'Từ nối kể chuyện', phatam: '突然 tūrán, 着急 zháojí',
    loi: ['Dùng 以后 thay 后来 trong chuyện quá khứ'], btvn: ['Viết một câu chuyện 120 chữ có đủ 5 từ nối', 'Kể lại bằng giọng nói 1 phút', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 27 ================= */
  const d27 = {
    n: 27, ten: plan[26].ten, kinds: K,
    muc: 'Nêu ý kiến, đồng ý, phản đối lịch sự: 我觉得, 我认为, 我同意, 我不太同意, 你说得对, 不过.',
    hoc: `${tbl(['Chức năng', 'Mẫu'], [['Nêu ý kiến', '我觉得… / 我认为… / 在我看来…'], ['Đồng ý', '我同意。/ 你说得对。/ 没错。'], ['Phản đối nhẹ', '我不太同意。/ 你说得有道理，不过…'], ['Hỏi ý kiến', '你觉得怎么样？/ 你的看法呢？']])}
      ${tip('🔑 Người Trung Quốc thường phản đối <b>vòng</b>: công nhận trước (有道理) rồi mới 不过/但是.')}`,
    vocab: [
      w('觉得', 'juéde', 'cảm thấy, cho rằng', '', ['我觉得这个主意不错。', 'Wǒ juéde zhège zhǔyi búcuò.', 'Tôi thấy ý này hay.']),
      w('认为', 'rènwéi', 'cho rằng', 'Trang trọng hơn 觉得.', ['我认为应该先调查。', 'Wǒ rènwéi yīnggāi xiān diàochá.', 'Tôi cho rằng nên điều tra trước.']),
      w('同意', 'tóngyì', 'đồng ý', '', ['我完全同意。', 'Wǒ wánquán tóngyì.', 'Tôi hoàn toàn đồng ý.']),
      w('看法', 'kànfǎ', 'quan điểm', '', ['你的看法呢？', 'Nǐ de kànfǎ ne?', 'Quan điểm của bạn thì sao?']),
      w('有道理', 'yǒu dàolǐ', 'có lý', '', ['你说得有道理。', 'Nǐ shuō de yǒu dàolǐ.', 'Bạn nói có lý.']),
      w('不过', 'búguò', 'có điều, nhưng', '', ['不错，不过有点儿贵。', 'Búcuò, búguò yǒudiǎnr guì.', 'Được, có điều hơi đắt.']),
      w('主意', 'zhǔyi', 'ý tưởng', '', ['好主意！', 'Hǎo zhǔyi!', 'Ý hay!']),
      w('应该', 'yīnggāi', 'nên', '', ['你应该早点儿睡。', 'Nǐ yīnggāi zǎo diǎnr shuì.', 'Bạn nên ngủ sớm.']),
      w('反对', 'fǎnduì', 'phản đối', '', ['我不反对。', 'Wǒ bù fǎnduì.', 'Tôi không phản đối.']),
      w('好处', 'hǎochu', 'lợi ích', '', ['网购有很多好处。', 'Wǎnggòu yǒu hěn duō hǎochu.', 'Mua online có nhiều lợi ích.'])
    ],
    qs: [
      ['mc', 'Phản đối lịch sự nhất?', '你说得有道理，不过我有不同的看法。', ['你错了。', '我反对你。', '你说的不对，别说了。'], 'Công nhận trước rồi 不过.'],
      ['mc', '“你觉得怎么样？” dùng để?', 'Hỏi ý kiến người nghe', ['Ra lệnh', 'Xin lỗi', 'Chào hỏi'], 'Câu hỏi ý kiến.'],
      ['mc', '好处 nghĩa là?', 'lợi ích', ['chỗ tốt để ở', 'ý tưởng', 'quan điểm'], 'hǎochu.'],
      ['hear', '我觉得网购很方便，不过有时候质量不好。', 'Mua online tiện, có điều đôi khi chất lượng kém.', ['Mua online bất tiện.', 'Chất lượng luôn tốt.', 'Tôi không mua online.'], '不过.'],
      ['hear', '我完全同意你的看法。', 'Tôi hoàn toàn đồng ý với quan điểm của bạn.', ['Tôi phản đối.', 'Tôi chưa hiểu.', 'Tôi không có ý kiến.'], '同意.'],
      ['order', 'Sắp xếp: “Tôi cho rằng nên điều tra trước.”', ['我认为', '应该', '先', '调查。'], '我认为应该先调查。']
    ],
    noi: [['我觉得这个主意不错。', 'Wǒ juéde zhège zhǔyi búcuò. – Tôi thấy ý này hay.'], ['你说得有道理，不过…', 'Nǐ shuō de yǒu dàolǐ, búguò… – Bạn nói có lý, có điều…'], ['你的看法呢？', 'Nǐ de kànfǎ ne? – Ý bạn thì sao?']],
    hoithoai: {
      ctx: 'Họp nhóm bàn có nên cho nhân viên làm việc từ xa.', vai: 'Trưởng nhóm nêu ý, em góp ý.', ai: '👩‍💼 组长',
      luot: [
        T(['我认为大家可以在家工作，你觉得呢？', 'Wǒ rènwéi dàjiā kěyǐ zài jiā gōngzuò, nǐ juéde ne?', 'Tôi cho rằng mọi người có thể làm ở nhà, bạn thấy sao?'], ['我同意，在家工作有很多好处。', 'Wǒ tóngyì, zài jiā gōngzuò yǒu hěn duō hǎochu.', 'Tôi đồng ý, làm ở nhà có nhiều lợi ích.', 'Đồng ý + lý do.'], ['我觉得。', 'Wǒ juéde.', 'Câu cụt.'], ['你错了。', 'Nǐ cuò le.', 'Thiếu lịch sự.']),
        T(['比如说？', 'Bǐrú shuō?', 'Ví dụ như?'], ['比如说不用堵车，而且时间更自由。', 'Bǐrú shuō bú yòng dǔchē, érqiě shíjiān gèng zìyóu.', 'Ví dụ không phải kẹt xe, hơn nữa thời gian tự do hơn.', 'Ví dụ + 而且.'], ['比如我不知道。', 'Bǐrú wǒ bù zhīdào.', 'Không ý.'], ['好处很坏。', 'Hǎochu hěn huài.', 'Mâu thuẫn.']),
        T(['那有什么问题吗？', 'Nà yǒu shénme wèntí ma?', 'Vậy có vấn đề gì không?'], ['有道理，不过数据安全要注意。', 'Yǒu dàolǐ, búguò shùjù ānquán yào zhùyì.', 'Có lý, có điều cần chú ý an toàn dữ liệu.', 'Công nhận rồi lưu ý.'], ['没有问题了过。', 'Méiyǒu wèntí le guo.', 'Sai.'], ['我反对所有。', 'Wǒ fǎnduì suǒyǒu.', 'Sai, cực đoan.'])
      ], ket: 'Em đã góp ý trong cuộc họp một cách lịch sự.'
    },
    tom: ['我觉得/认为', '同意 / 有道理，不过'], nguphap: 'Nêu và phản biện ý kiến', phatam: '觉得 juéde, 道理 dàolǐ',
    loi: ['Phản đối thẳng thiếu lịch sự'], btvn: ['Viết ý kiến 100 chữ: có nên học ngoại ngữ bằng AI?', 'Tranh luận 3 lượt với bạn', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 28 ================= */
  const LK = ['listen', 'listenPy', 'listen', 'meaning', 'pinyin'];
  const d28 = {
    n: 28, ten: plan[27].ten, tong: 1, kt: { n: 20, min: 20 }, kinds: LK,
    muc: 'Luyện nghe thông báo nơi công cộng (sân bay, nhà ga, siêu thị) và tin nhắn thoại; phản xạ nhanh.',
    hoc: `${tbl(['Thông báo', 'Nghĩa'], [['各位旅客请注意…', 'Quý khách chú ý…'], ['飞往上海的航班推迟起飞。', 'Chuyến bay đi Thượng Hải hoãn cất cánh.'], ['请到三号登机口登机。', 'Mời lên máy bay ở cửa số 3.'], ['列车即将到站。', 'Tàu sắp đến ga.']])}
      ${tip('🎧 Nghe <b>số</b> (giờ, cửa, chuyến) và <b>động từ chính</b> (推迟, 取消, 登机) trước, rồi mới nghe chi tiết.')}`,
    vocab: [
      w('旅客', 'lǚkè', 'hành khách', '', ['各位旅客请注意。', 'Gèwèi lǚkè qǐng zhùyì.', 'Quý khách chú ý.']),
      w('注意', 'zhùyì', 'chú ý', '', ['请注意安全。', 'Qǐng zhùyì ānquán.', 'Chú ý an toàn.']),
      w('航班', 'hángbān', 'chuyến bay', '', ['航班几点起飞？', 'Hángbān jǐ diǎn qǐfēi?', 'Chuyến bay mấy giờ cất cánh?']),
      w('推迟', 'tuīchí', 'hoãn lại', '', ['航班推迟了。', 'Hángbān tuīchí le.', 'Chuyến bay bị hoãn.']),
      w('取消', 'qǔxiāo', 'huỷ', '', ['会议取消了。', 'Huìyì qǔxiāo le.', 'Cuộc họp bị huỷ.']),
      w('登机口', 'dēngjīkǒu', 'cửa lên máy bay', '', ['请到五号登机口。', 'Qǐng dào wǔ hào dēngjīkǒu.', 'Mời đến cửa số 5.']),
      w('列车', 'lièchē', 'đoàn tàu', '', ['列车即将到站。', 'Lièchē jíjiāng dào zhàn.', 'Tàu sắp đến ga.']),
      w('即将', 'jíjiāng', 'sắp', '', ['商场即将关门。', 'Shāngchǎng jíjiāng guān mén.', 'TTTM sắp đóng cửa.']),
      w('留言', 'liúyán', 'lời nhắn', '', ['请在"嘀"声后留言。', 'Qǐng zài "dī" shēng hòu liúyán.', 'Để lại lời nhắn sau tiếng bíp.']),
      w('通知', 'tōngzhī', 'thông báo', '', ['我们会通知您。', 'Wǒmen huì tōngzhī nín.', 'Chúng tôi sẽ thông báo cho quý khách.'])
    ],
    qs: [
      ['hear', '飞往上海的CA981航班推迟到下午三点起飞。', 'Chuyến CA981 đi Thượng Hải hoãn đến 3 giờ chiều.', ['Chuyến bay bị huỷ.', 'Cất cánh 1 giờ chiều.', 'Chuyến đi Bắc Kinh.'], '推迟 / 三点.'],
      ['hear', '请乘坐MU5086航班的旅客到十二号登机口登机。', 'Hành khách chuyến MU5086 mời đến cửa số 12.', ['Cửa số 2.', 'Cửa số 20.', 'Chuyến bay bị hoãn.'], '十二号.'],
      ['hear', '本商场即将关门，请顾客们尽快结账。', 'TTTM sắp đóng cửa, mời quý khách thanh toán nhanh.', ['TTTM vừa mở cửa.', 'Đang giảm giá.', 'Thang máy hỏng.'], '即将关门.'],
      ['hear', '小李，明天的会议取消了，你不用来了。', 'Tiểu Lý, cuộc họp mai huỷ, không cần đến.', ['Họp mai dời giờ.', 'Họp mai cần đến sớm.', 'Họp hôm nay.'], '取消.'],
      ['mc', '推迟 nghĩa là?', 'hoãn lại', ['huỷ bỏ', 'đến sớm', 'cất cánh'], 'tuīchí.'],
      ['order', 'Sắp xếp: “Tàu sắp đến ga.”', ['列车', '即将', '到', '站。'], '列车即将到站。']
    ],
    noi: [['请问航班推迟了吗？', 'Qǐngwèn hángbān tuīchí le ma? – Cho hỏi chuyến bay có hoãn không?'], ['我的航班被取消了。', 'Wǒ de hángbān bèi qǔxiāo le. – Chuyến bay của tôi bị huỷ.'], ['我听不清楚，请再说一遍。', 'Wǒ tīng bu qīngchu, qǐng zài shuō yí biàn. – Tôi nghe không rõ, nói lại giúp.']],
    hoithoai: {
      ctx: 'Ở sân bay Bạch Vân, em hỏi quầy thông tin sau khi nghe thông báo.', vai: 'Nhân viên trả lời, em hỏi.', ai: '✈️ 问讯处',
      luot: [
        T(['您好，有什么可以帮您？', 'Nín hǎo, yǒu shénme kěyǐ bāng nín?', 'Xin chào, tôi giúp gì được?'], ['刚才的广播我没听清楚，飞胡志明市的航班推迟了吗？', 'Gāngcái de guǎngbō wǒ méi tīng qīngchu, fēi Hú Zhìmíng shì de hángbān tuīchí le ma?', 'Thông báo vừa rồi tôi nghe không rõ, chuyến bay đi TP.HCM có hoãn không?', 'Hỏi lại thông báo.'], ['我航班。', 'Wǒ hángbān.', 'Câu cụt.'], ['我要取消你。', 'Wǒ yào qǔxiāo nǐ.', 'Vô nghĩa.']),
        T(['推迟了一个小时，四点半起飞。', 'Tuīchíle yí ge xiǎoshí, sì diǎn bàn qǐfēi.', 'Hoãn 1 tiếng, 4 rưỡi cất cánh.'], ['那在几号登机口？', 'Nà zài jǐ hào dēngjīkǒu?', 'Vậy ở cửa số mấy?', 'Hỏi tiếp.'], ['十点半吗？太晚了。', 'Shí diǎn bàn ma? Tài wǎn le.', 'Nghe nhầm.'], ['取消了吗？', 'Qǔxiāo le ma?', 'Đã nói là hoãn.']),
        T(['十八号登机口。', 'Shíbā hào dēngjīkǒu.', 'Cửa số 18.'], ['十八号，四点半。谢谢！', 'Shíbā hào, sì diǎn bàn. Xièxie!', 'Cửa 18, 4 rưỡi. Cảm ơn!', 'Nhắc lại xác nhận.'], ['八号，谢谢。', 'Bā hào, xièxie.', 'Nghe nhầm.'], ['四十八号吗？', 'Sìshíbā hào ma?', 'Nghe nhầm.'])
      ], ket: 'Em đã nghe hiểu và xác nhận thông tin chuyến bay.'
    },
    tom: ['Nghe số + động từ chính', '推迟 / 取消 / 登机口'], nguphap: 'Ngôn ngữ thông báo', phatam: 'Phân biệt 四 sì / 十 shí',
    loi: ['Nghe nhầm 十 và 四'], btvn: ['Nghe 5 thông báo sân bay tiếng Trung trên mạng', 'Ghi lại số giờ, cửa, chuyến', 'Luyện 🎤 3 câu']
  };

  /* ================= NGÀY 29 ================= */
  const d29 = {
    n: 29, ten: plan[28].ten, vocab: [], tong: 1, kt: { n: 20, min: 20 }, kinds: K,
    muc: 'Mô phỏng một chuỗi tình huống thật: đặt bàn, góp ý, kể chuyện, xử lý sự cố, chào tạm biệt.',
    hoc: `<p>Hôm nay không có từ mới. Hãy làm phần hội thoại nhiều lần đến khi phản xạ dưới 5 giây mỗi lượt.</p>${tip('🎯 Mẹo: nói to câu trả lời trước khi bấm chọn, rồi bấm 🎤 để chấm.')}`,
    qs: [['mc', 'Khách nói 菜太咸了, em đáp?', '真抱歉，我马上给您换一份。', ['不咸，很好吃。', '那您别吃了。', '咸是正常的。'], 'Xin lỗi + xử lý.'], ['mc', 'Muốn hỏi lại vì nghe không rõ?', '不好意思，请您再说一遍。', ['你说什么？快说！', '我不听。', '你说得很对。'], 'Lịch sự.']],
    noi: [['不好意思，请您再说一遍。', 'Bù hǎoyìsi, qǐng nín zài shuō yí biàn. – Xin lỗi, nói lại giúp tôi.'], ['真抱歉，我马上处理。', 'Zhēn bàoqiàn, wǒ mǎshàng chǔlǐ. – Thật xin lỗi, tôi xử lý ngay.']],
    hoithoai: {
      ctx: 'Em tiếp đối tác Trung Quốc từ sân bay đến bữa tối.', vai: 'Đối tác nói, em đáp liên tục.', ai: '🤝 陈总',
      luot: [
        T(['路上堵车吗？我们几点能到饭店？', 'Lù shang dǔchē ma? Wǒmen jǐ diǎn néng dào fàndiàn?', 'Đường có kẹt không? Mấy giờ đến nhà hàng?'], ['有点儿堵，大概四十分钟左右，七点能到。', 'Yǒudiǎnr dǔ, dàgài sìshí fēnzhōng zuǒyòu, qī diǎn néng dào.', 'Hơi kẹt, khoảng 40 phút, 7 giờ tới.', 'Thời lượng + thời điểm.'], ['四十点到。', 'Sìshí diǎn dào.', 'Sai.'], ['堵车被。', 'Dǔchē bèi.', 'Câu cụt.']),
        T(['越南菜辣不辣？我不太能吃辣。', 'Yuènán cài là bu là? Wǒ bú tài néng chī là.', 'Món Việt cay không? Tôi không ăn cay lắm.'], ['大部分不辣，我已经让饭店少放辣椒了。', 'Dà bùfen bú là, wǒ yǐjīng ràng fàndiàn shǎo fàng làjiāo le.', 'Phần lớn không cay, tôi đã dặn nhà hàng cho ít ớt.', 'Chu đáo.'], ['越南菜很辣，您别吃。', 'Yuènán cài hěn là, nín bié chī.', 'Thiếu khéo.'], ['辣椒把放。', 'Làjiāo bǎ fàng.', 'Sai.']),
        T(['你安排得真周到！', 'Nǐ ānpái de zhēn zhōudào!', 'Bạn sắp xếp thật chu đáo!'], ['哪里哪里，这是我应该做的。', 'Nǎli nǎli, zhè shì wǒ yīnggāi zuò de.', 'Đâu có, đó là việc tôi nên làm.', 'Đáp lời khen.'], ['是的，我很周到。', 'Shì de, wǒ hěn zhōudào.', 'Thiếu khiêm tốn.'], ['我安排不了。', 'Wǒ ānpái bu liǎo.', 'Mâu thuẫn.'])
      ], ket: 'Em đã tiếp đối tác trọn vẹn bằng tiếng Trung!'
    },
    tom: ['Phản xạ < 5 giây', 'Ghép mọi mẫu đã học'], nguphap: 'Tổng hợp', phatam: 'Ngữ điệu câu hỏi, câu cảm thán',
    loi: ['Ngập ngừng quá lâu'], btvn: ['Làm lại hội thoại 3 lần', 'Tự ghi âm đoạn tiếp khách 1 phút', 'Chuẩn bị bài kiểm tra cuối khoá']
  };

  /* ================= NGÀY 30 ================= */
  const d30 = {
    n: 30, ten: plan[29].ten, vocab: [], tong: 1, kt: { n: 30, min: 30 }, kinds: K,
    muc: 'Kiểm tra cuối khoá HSK 3 (30 câu) và lên lộ trình HSK 4.',
    hoc: `<h4>🏁 Hoàn thành cấp 2!</h4>${tbl(['Đã học', 'Tiếp theo ở HSK 4'], [['了/过, bổ ngữ kết quả, xu hướng, khả năng, trạng thái', 'Bổ ngữ xu hướng mở rộng: 起来, 下去, 出来'], ['把, 被, so sánh', '连…都, 即使…也, 无论…都'], ['Liên từ, điều kiện', 'Văn viết, đọc đoạn văn dài'], ['~600 từ HSK 3', '~1200 từ HSK 4']])}
      ${tip('📌 Đề HSK 3 thật gồm Nghe – Đọc – Viết. Sau bài này hãy làm 1 đề thi thử chính thức để biết điểm thật.')}`,
    qs: [['mc', '我把作业做___了。', '完', ['过', '着', '得'], 'Bổ ngữ kết quả.'], ['mc', '他比我高___。', '多了', ['很', '非常', '太'], '比 + adj + 多了.'], ['mc', '虽然很难，___我会坚持。', '但是', ['所以', '而且', '就'], '虽然…但是.']],
    noi: [['我已经学完了HSK三级。', 'Wǒ yǐjīng xuéwánle HSK sān jí. – Tôi đã học xong HSK 3.'], ['我打算继续学HSK四级。', 'Wǒ dǎsuàn jìxù xué HSK sì jí. – Tôi định học tiếp HSK 4.']],
    hoithoai: {
      ctx: 'Buổi tổng kết khoá học với cô giáo.', vai: 'Cô hỏi, em trả lời.', ai: '👩‍🏫 王老师',
      luot: [
        T(['这一个月你学到了什么？', 'Zhè yí ge yuè nǐ xuédàole shénme?', 'Tháng này em học được gì?'], ['我学会了用"把"字句和很多补语。', 'Wǒ xuéhuìle yòng "bǎ" zì jù hé hěn duō bǔyǔ.', 'Em học được câu chữ 把 và nhiều bổ ngữ.', 'Tổng kết.'], ['我学了过很多。', 'Wǒ xuéle guo hěn duō.', 'Sai.'], ['我没学到了。', 'Wǒ méi xuédào le.', 'Sai.']),
        T(['哪部分最难？', 'Nǎ bùfen zuì nán?', 'Phần nào khó nhất?'], ['我觉得补语最难，不过现在比以前清楚多了。', 'Wǒ juéde bǔyǔ zuì nán, búguò xiànzài bǐ yǐqián qīngchu duō le.', 'Em thấy bổ ngữ khó nhất, nhưng giờ rõ hơn trước nhiều.', 'Ý kiến + so sánh.'], ['补语比以前很清楚。', 'Bǔyǔ bǐ yǐqián hěn qīngchu.', 'Không dùng 很.'], ['都不难了过。', 'Dōu bù nán le guo.', 'Sai.']),
        T(['以后有什么打算？', 'Yǐhòu yǒu shénme dǎsuàn?', 'Sau này em định thế nào?'], ['我打算继续学HSK四级，明年参加考试。', 'Wǒ dǎsuàn jìxù xué HSK sì jí, míngnián cānjiā kǎoshì.', 'Em định học tiếp HSK 4, năm sau thi.', 'Kế hoạch.'], ['我后来学四级。', 'Wǒ hòulái xué sì jí.', '后来 chỉ quá khứ.'], ['我不打算了。', 'Wǒ bù dǎsuàn le.', 'Không có kế hoạch.'])
      ], ket: 'Chúc mừng em đã hoàn thành cấp 2 – HSK 3! 🎉'
    },
    tom: ['Kiểm tra 30 câu', 'Lộ trình HSK 4'], nguphap: 'Tổng ôn toàn khoá', phatam: 'Ôn toàn bộ thanh điệu',
    loi: ['Xem lại các câu sai trong báo cáo'], btvn: ['Làm 1 đề HSK 3 thi thử chính thức', 'Ôn lại 3 ngày điểm thấp nhất', 'Bắt đầu cấp 3 – HSK 4']
  };

  Z.days.push(d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30);
})();

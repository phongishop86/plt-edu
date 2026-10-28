/* Tiếng Việt lớp 1 – Kết nối tri thức với cuộc sống. Tên bài theo mục lục SGK; câu hỏi, ngữ liệu luyện tập do PLT-Edu soạn. */
(function () {
  'use strict';
  const TV = PLT.TV;
  const G = { van: TV.van1, am: TV.am1, dem: TV.dem1, ct: TV.chinhta(['c/k', 'g/gh', 'ng/ngh']), doc: TV.dochieu(1), dau: TV.daucau };
  const LT = (s) => `<ul>${s.map((x) => `<li>${x}</li>`).join('')}</ul>`;
  const ESSAY = { 1: [TV.vietdoan(1, [["Viết 2–3 câu giới thiệu về bản thân em.", ["em"]], ["Viết 2–3 câu về người bạn thân của em.", ["bạn"]]]), TV.vietdoan(1, [["Viết 2–3 câu về một đồ chơi em thích.", ["em", "thích"]], ["Viết 2–3 câu về cô giáo (thầy giáo) của em.", ["cô", "em"]]])], 2: [TV.vietdoan(1, [["Viết 2–3 câu về một con vật em yêu thích.", ["con"]], ["Viết 2–3 câu về ngôi trường của em.", ["trường"]]]), TV.vietdoan(1, [["Viết 2–3 câu kể việc em giúp bố mẹ ở nhà.", ["em", "giúp"]], ["Viết 2–3 câu về một cảnh đẹp em từng thấy.", ["đẹp"]]])] };
  TV.build({ id: 'tieng-viet-1', lop: 1, gens: G, essays: ESSAY, topics: [
    { hk: 1, ten: "Làm quen với âm và chữ", skills: ["am", "dem", "ct"],
      lt: LT(["Nhận biết và đọc, viết các chữ cái: a, b, c, d, đ, e, ê, g, h, i, k, l, m, n, o, ô, ơ, p, q, r, s, t, u, ư, v, x, y.", "Ghép âm đầu với vần và dấu thanh để tạo tiếng: b + a + dấu huyền → bà.", "Chữ ghi âm ghép: ch, gh, gi, kh, ng, ngh, nh, ph, qu, th, tr.", "Quy tắc: k, gh, ngh đứng trước e, ê, i."]),
      bai: ["Em vào lớp 1", "A a – B b – C c", "E e – Ê ê – O o – Ô ô – Ơ ơ", "D d – Đ đ – I i – K k", "H h – L l – U u – Ư ư", "Ch ch – Kh kh – M m – N n", "G g – Gi gi – Gh gh – Nh nh", "Ng ng – Ngh ngh – R r – S s", "T t – Tr tr – Th th – ia", "ua – ưa – Ph ph – Qu qu", "V v – X x – Y y", "Luyện tập chính tả"], on: "Ôn tập và kể chuyện" },
    { hk: 1, ten: "Học vần (1)", skills: ["van", "dem", "ct"],
      lt: LT(["Vần gồm âm chính và có thể có âm cuối: an, ăn, ân, on, ôn, ơn…", "Đọc trơn tiếng, từ, câu ngắn có vần đã học.", "Chú ý phân biệt các vần dễ lẫn: an/ang, at/ac, ăn/ăng."]),
      bai: ["an – ăn – ân", "on – ôn – ơn", "en – ên – in – un", "am – ăm – âm", "om – ôm – ơm", "em – êm – im – um", "ai – ay – ây", "oi – ôi – ơi", "ui – ưi", "ao – eo – au – âu – êu", "iu – ưu", "ac – ăc – âc – oc – ôc – uc – ưc"], on: "Ôn tập giữa học kì 1" },
    { hk: 1, ten: "Học vần (2)", skills: ["van", "dem", "doc"],
      lt: LT(["Vần có âm cuối t, p, nh, ch, ng: at, ap, anh, ach, ang…", "Vần có nguyên âm đôi: iên, yên, uôn, ươn…; vần có âm đệm: oa, oe, uê, uy.", "Đọc đoạn văn ngắn và trả lời câu hỏi đơn giản."]),
      bai: ["at – ăt – ât – ot – ôt – ơt", "et – êt – it – ut – ưt", "ap – ăp – âp – op – ôp – ơp", "ep – êp – ip – up", "anh – ênh – inh – ach – êch – ich", "ang – ăng – âng – ong – ông – ung – ưng", "iêm – yêm – iên – yên – iêt", "uôn – uôt – ươn – ươt – uôi – ươi", "oa – oe – uê – uy", "oan – oăn – oat – oăt – oang – oăng"], on: "Ôn tập và đánh giá cuối học kì 1" },
    { hk: 2, ten: "Tôi và các bạn", skills: ["doc", "dem", "ct"],
      lt: LT(["Đọc trơn bài đọc, hiểu nội dung đơn giản.", "Viết câu ngắn về bản thân, bạn bè; viết hoa chữ đầu câu, cuối câu có dấu chấm."]),
      bai: ["Tôi là học sinh lớp 1", "Đôi tai xấu xí", "Bạn của gió", "Giải thưởng tình bạn", "Sinh nhật của voi con"], on: "Ôn tập chủ đề Tôi và các bạn" },
    { hk: 2, ten: "Mái ấm gia đình", skills: ["doc", "van", "dau"],
      lt: LT(["Từ ngữ chỉ người thân: ông, bà, bố, mẹ, anh, chị, em.", "Viết câu thể hiện tình cảm với người thân."]),
      bai: ["Nụ hôn trên bàn tay", "Làm anh", "Cả nhà đi chơi núi", "Quạt cho bà ngủ", "Bữa cơm gia đình", "Ngôi nhà"], on: "Ôn tập chủ đề Mái ấm gia đình" },
    { hk: 2, ten: "Mái trường mến yêu", skills: ["doc", "ct", "dau"],
      lt: LT(["Từ ngữ về trường lớp, thầy cô, bạn bè.", "Dấu chấm, dấu chấm hỏi cuối câu."]),
      bai: ["Tôi đi học", "Đi học", "Hoa yêu thương", "Cây bàng và lớp học", "Bác trống trường", "Giờ ra chơi"], on: "Ôn tập giữa học kì 2" },
    { hk: 2, ten: "Điều em cần biết", skills: ["doc", "dem", "van"],
      lt: LT(["Hiểu và làm theo các lời khuyên an toàn: rửa tay, chào hỏi, đi đường, khi bị lạc.", "Kể lại điều em đã biết bằng câu ngắn."]),
      bai: ["Rửa tay trước khi ăn", "Lời chào đi trước", "Khi mẹ vắng nhà", "Nếu không may bị lạc", "Đèn giao thông"], on: "Ôn tập chủ đề Điều em cần biết" },
    { hk: 2, ten: "Bài học từ cuộc sống", skills: ["doc", "ct", "dau"],
      lt: LT(["Rút ra bài học từ câu chuyện: biết giúp đỡ, trung thực, lễ phép.", "Đặt và trả lời câu hỏi về nhân vật."]),
      bai: ["Kiến và chim bồ câu", "Câu chuyện của rễ", "Câu hỏi của sói", "Chú bé chăn cừu", "Tiếng vọng của núi"], on: "Ôn tập chủ đề Bài học từ cuộc sống" },
    { hk: 2, ten: "Thiên nhiên kì thú", skills: ["doc", "van", "dem"],
      lt: LT(["Từ ngữ về loài vật, cây cối, hiện tượng tự nhiên.", "Viết câu tả một con vật, cây cối."]),
      bai: ["Loài chim của biển cả", "Bảy sắc cầu vồng", "Chúa tể rừng xanh", "Cuộc thi tài năng rừng xanh", "Cây liễu dẻo dai"], on: "Ôn tập chủ đề Thiên nhiên kì thú" },
    { hk: 2, ten: "Thế giới trong mắt em", skills: ["doc", "ct", "dau"],
      lt: LT(["Quan sát và nói, viết về thế giới xung quanh.", "Đọc thuộc lòng đoạn thơ ngắn."]),
      bai: ["Tia nắng đi đâu?", "Trong giấc mơ buổi sáng", "Ngày mới bắt đầu", "Hỏi mẹ", "Những cánh cò", "Buổi trưa hè", "Hoa phượng"], on: "Ôn tập chủ đề Thế giới trong mắt em" },
    { hk: 2, ten: "Đất nước và con người", skills: ["doc", "van", "dem"],
      lt: LT(["Từ ngữ về quê hương, nghề nghiệp, cảnh đẹp đất nước.", "Viết câu về cảnh đẹp, về nghề em thích."]),
      bai: ["Cậu bé thông minh", "Lính cứu hoả", "Lớn lên bạn làm gì?", "Ruộng bậc thang ở Sa Pa", "Nhớ ơn", "Du lịch biển Việt Nam"], on: "Ôn tập và đánh giá cuối năm học" }
  ] });
})();

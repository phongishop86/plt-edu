/* PLT-Edu · Module Ngoại ngữ: Tiếng Trung · Tiếng Anh · Tiếng Hàn
   - Trang lộ trình chung #/ngoai-ngu: các cấp độ của từng thứ tiếng (khung cơ bản → nâng cao).
   - Mỗi khoá cấp 1 là 30 ngày, nội dung ở subjects/tieng-trung*.js (PLT_ZH), tieng-anh*.js (PLT_EN), tieng-han*.js (PLT_KO).
   - File này lo phần hiển thị: buổi học 5 phần A–E, hội thoại, thẻ từ, bảng âm/chữ, tiến độ, báo cáo.
   - Giọng đọc: Web Speech API của trình duyệt (miễn phí, không cần máy chủ). */
(function () {
  'use strict';
  const { shuffle, esc } = PLT.U;
  const $ = (s, el) => (el || document).querySelector(s);
  let cur = null; // phòng thi đang chạy
  let rt = 0; // chống lệch khi đổi trang lúc đang tải dữ liệu

  /* ---------- Khung lộ trình các thứ tiếng (cơ bản → nâng cao) ---------- */
  const LEVELS = {
    'tieng-trung': {
      chung: 'Khung HSK 3.0 (3 giai đoạn, 9 cấp). HSK 3.0 cấp 1–6 thi chính thức toàn cầu từ 13/12/2026; trước đó vẫn dùng đề HSK 2.0.',
      cap: [
        { ten: 'Cấp 1 – Nhập môn', moc: 'HSK 1–2', tg: '30 ngày', muc: 'Pinyin, 4 thanh, ~300 từ, giao tiếp sinh hoạt cơ bản.', co: 1 },
        { ten: 'Cấp 2 – Sơ cấp', moc: 'HSK 3', muc: 'Bổ ngữ, câu 把 – 被, so sánh, liên từ; thuê nhà, ngân hàng, du lịch, phỏng vấn, mua sắm online.', tg: '30 ngày', co: 1 },
        { ten: 'Cấp 3 – Trung cấp', moc: 'HSK 4', tg: '30 ngày', muc: 'Câu phức 连…都, 即使, 无论; văn viết, email; họp, đàm phán, số liệu; nghe – viết dạng HSK 4.', co: 1 },
        { ten: 'Cấp 4 – Trung cao', moc: 'HSK 5–6', tg: '30 ngày', muc: 'Thành ngữ, văn viết, đọc báo, thuyết trình, hợp đồng, tranh luận, khủng hoảng truyền thông; viết 缩写.', co: 1 },
        { ten: 'Cấp 5 – Cao cấp', moc: 'HSK 7–9', tg: '30 ngày', muc: 'Văn ngôn, điển cố, học thuật; biên – phiên dịch tài chính, CNTT, pháp lý; ngoại giao, thơ Đường, tự học suốt đời.', co: 1 }
      ]
    },
    'tieng-anh': {
      chung: 'Khung tham chiếu châu Âu CEFR (A1 → C2), quy đổi gần đúng sang IELTS / TOEIC. Dùng chung cho mọi cấp: <a href="#/tieng-anh/ngu-phap">📐 Sổ tay ngữ pháp</a> · <a href="#/tieng-anh/luyen-noi">🎤 Phát âm & ngữ điệu</a> · <a href="#/tieng-anh/luyen-de">🏅 Luyện đề</a>.',
      cap: [
        { ten: 'Cấp 1 – Khởi đầu', moc: 'A1', tg: '30 ngày', muc: 'Phát âm chuẩn, ~300 từ, tự giới thiệu, hỏi đáp đời sống hằng ngày.', co: 1 },
        { ten: 'Cấp 2 – Sơ cấp', moc: 'A2 · TOEIC ~225+', tg: '30 ngày', muc: 'Kể chuyện quá khứ, so sánh, kế hoạch, tình huống du lịch – ngân hàng – công việc; viết email ngắn.', co: 1 },
        { ten: 'Cấp 3 – Trung cấp', moc: 'B1 · TOEIC 550+ · IELTS 4.0–5.0', tg: '30 ngày', muc: 'HTHT, điều kiện, bị động, tường thuật; họp, thuyết trình, email, thương lượng; mô phỏng thi nói.', co: 1 },
        { ten: 'Cấp 4 – Trung cao', moc: 'B2 · TOEIC 785+ · IELTS 5.5–6.5', tg: '30 ngày', muc: 'Ngữ pháp nâng cao, IELTS Writing – Reading – Speaking, báo cáo, đàm phán, tài chính, CNTT.', co: 1 },
        { ten: 'Cấp 5 – Cao cấp', moc: 'C1 · TOEIC 945+ · IELTS 7.0+', tg: '30 ngày', muc: 'Cấu trúc và từ vựng tinh tế, lãnh đạo, đàm phán cấp cao, khủng hoảng, IELTS 7+, tự học suốt đời.', co: 1 }
      ]
    },
    'tieng-han': {
      chung: 'Kỳ thi TOPIK: TOPIK I (cấp 1–2, nghe + đọc) và TOPIK II (cấp 3–6, nghe + đọc + viết); thi nói TOPIK Speaking tổ chức riêng.',
      cap: [
        { ten: 'Cấp 1 – Nhập môn', moc: 'TOPIK I · cấp 1', tg: '30 ngày', muc: 'Đọc – viết Hangul, ~300 từ, giao tiếp sinh hoạt cơ bản.', co: 1 },
        { ten: 'Cấp 2 – Sơ cấp', moc: 'TOPIK I · cấp 2', tg: '30 ngày', muc: 'Kính ngữ, bất quy tắc, tương lai, nối câu; bệnh viện, ngân hàng, thuê nhà, công sở; luyện đọc – nghe TOPIK I.', co: 1 },
        { ten: 'Cấp 3 – Trung cấp 1', moc: 'TOPIK II · cấp 3', tg: '30 ngày', muc: '-는데, gián tiếp, phỏng đoán, bị động; tin tức, môi trường, văn hoá; viết câu 51–53, thuyết trình, phỏng vấn.', co: 1 },
        { ten: 'Cấp 4 – Trung cấp 2', moc: 'TOPIK II · cấp 4', tg: '30 ngày', muc: 'Văn viết, Hán Hàn, quán dụng ngữ, tục ngữ; viết câu 54; kinh tế – xã hội, đàm phán, tranh luận.', co: 1 },
        { ten: 'Cấp 5 – Cao cấp', moc: 'TOPIK II · cấp 5–6', tg: '30 ngày', muc: 'Ngữ pháp cao cấp, 사자성어, văn học thuật; biên – phiên dịch ngân hàng, pháp lý; diễn văn, hội thảo.', co: 1 }
      ]
    }
  };

  /* ---------- Cấu hình từng khoá ---------- */
  const COURSES = {
    'tieng-trung': {
      key: 'tieng-trung', id: 'zh', ten: 'Tiếng Trung', icon: '🇨🇳', lang: 'zh-CN', data: () => window.PLT_ZH,
      files: ['subjects/tieng-trung.js', 'subjects/tieng-trung-2.js', 'subjects/tieng-trung-3.js', 'subjects/tieng-trung-4.js'],
      pLbl: 'Pinyin', rep: 'CHINESE LEARNING REPORT', sample: '你好！谢谢！',
      voiceHelp: 'dùng trình duyệt <b>Microsoft Edge</b> (có sẵn giọng Xiaoxiao rất chuẩn) hoặc <b>Chrome</b>; trên Windows vào <i>Cài đặt → Thời gian và ngôn ngữ → Giọng nói</i> và thêm giọng "Chinese (Simplified, China)".',
      pick: (vs) => { const cn = vs.filter((v) => /^(zh[-_]CN|zh[-_]Hans|cmn)/i.test(v.lang)); return cn.find((v) => /Xiaoxiao|Xiaoyi|Yunxi/i.test(v.name)) || cn.find((v) => /natural|online/i.test(v.name)) || cn.find((v) => /Google/i.test(v.name)) || cn[0] || vs.find((v) => /^zh[-_]TW/i.test(v.lang)); },
      eyebrow: 'Miễn phí · Cho người Việt mới bắt đầu · Chữ giản thể · Giọng phổ thông', h1: '🇨🇳 Tiếng Trung giao tiếp <em>trong 30 ngày</em>',
      lead: 'Mỗi ngày 30–45 phút: ôn bài cũ, học Pinyin và từ mới, luyện tập, <b>hội thoại với người bản xứ</b> và làm bài kiểm tra ngắn. Mục tiêu là <b>nghe hiểu, phát âm đúng, phản xạ và tự tin giao tiếp</b>.',
      card: () => `<b>Nghe thử 4 thanh: mā · má · mǎ · mà</b>${toneSVG()}<div class="row center">${SETS[0].c.map((c, i) => sp(c, SETS[0].p[i])).join('')}</div>`,
      tools: [['thanh-dieu', '🎵', 'Luyện 4 thanh', 'Nghe mẫu từng thanh, chơi trò nghe – chọn thanh.'], ['pinyin', '🔤', 'Bảng Pinyin', 'Thanh mẫu, vận mẫu, cách đặt lưỡi, bấm để nghe.']],
      profile: 'người Việt mới bắt đầu, chữ giản thể, giọng phổ thông, học 30–45 phút/ngày, mục tiêu giao tiếp.',
      kinds: ['meaning', 'listen', 'pinyin', 'hanzi', 'listenPy', 'toneHear']
    },
    'tieng-anh': {
      key: 'tieng-anh', id: 'en', ten: 'Tiếng Anh', icon: '🇬🇧', lang: 'en-US', data: () => window.PLT_EN,
      files: ['subjects/nn/en-a1.js', 'subjects/nn/en-a1-2.js'],
      pLbl: 'phiên âm', rep: 'ENGLISH LEARNING REPORT', sample: 'Hello! Nice to meet you.',
      voiceHelp: 'dùng <b>Microsoft Edge</b> (giọng Aria, Jenny rất tự nhiên) hoặc <b>Chrome</b>; trên Windows vào <i>Cài đặt → Thời gian và ngôn ngữ → Giọng nói</i> và thêm giọng "English (United States)".',
      pick: (vs) => { const ac = (PLT.data.settings && PLT.data.settings.accent) === 'GB' ? 'GB' : 'US'; const en0 = vs.filter((v) => /^en[-_](US|GB)/i.test(v.lang)); const enA = en0.filter((v) => new RegExp('^en[-_]' + ac, 'i').test(v.lang)); const en = enA.length ? enA.concat(en0.filter((v) => enA.indexOf(v) < 0)) : en0; return (ac === 'GB' && (en.find((v) => /Sonia|Ryan|Libby|Google UK/i.test(v.name)))) || en.find((v) => /Aria|Jenny|Guy|Ava|Andrew/i.test(v.name)) || en.find((v) => /natural|online/i.test(v.name)) || en.find((v) => /Google US/i.test(v.name)) || en.find((v) => /^en[-_]US/i.test(v.lang)) || en[0] || vs.find((v) => /^en/i.test(v.lang)); },
      eyebrow: 'Miễn phí · Cho người Việt · Giọng Mỹ · Khung CEFR', h1: '🇬🇧 Tiếng Anh giao tiếp <em>trong 30 ngày</em>',
      lead: 'Mỗi ngày 30–45 phút: luyện <b>phát âm chuẩn theo phiên âm IPA</b>, học từ theo câu, luyện tập, <b>hội thoại tình huống</b> và kiểm tra ngắn. Kết thúc cấp 1 em đạt trình độ <b>A1</b>, tự tin giao tiếp đời sống cơ bản.',
      card: () => `<b>Nghe thử</b><div class="row center">${sp('Hello!', 'Hello')} ${sp('Nice to meet you.', 'Nice to meet you')} ${sp('Thank you very much.', 'Thank you')}</div><p class="small muted">Bấm loa để nghe giọng đọc mẫu, rồi đọc to theo.</p>`,
      tools: [['bang-am', '🔤', 'Bảng âm IPA', 'Nguyên âm, phụ âm, âm khó với người Việt, bấm để nghe.']],
      profile: 'người Việt mới bắt đầu (A1), giọng Mỹ, học 30–45 phút/ngày, mục tiêu giao tiếp.',
      kinds: ['meaning', 'listen', 'listenWord', 'hanzi', 'write', 'match']
    },
    'tieng-han': {
      key: 'tieng-han', id: 'ko', ten: 'Tiếng Hàn', icon: '🇰🇷', lang: 'ko-KR', data: () => window.PLT_KO,
      files: ['subjects/nn/ko-1.js', 'subjects/nn/ko-1-2.js'],
      pLbl: 'phiên âm', rep: 'KOREAN LEARNING REPORT', sample: '안녕하세요! 감사합니다!',
      voiceHelp: 'dùng <b>Microsoft Edge</b> (giọng SunHi, InJoon) hoặc <b>Chrome</b>; trên Windows vào <i>Cài đặt → Thời gian và ngôn ngữ → Giọng nói</i> và thêm giọng "Korean".',
      pick: (vs) => { const ko = vs.filter((v) => /^ko/i.test(v.lang)); return ko.find((v) => /SunHi|InJoon|Hyunsu/i.test(v.name)) || ko.find((v) => /natural|online/i.test(v.name)) || ko.find((v) => /Google/i.test(v.name)) || ko[0]; },
      eyebrow: 'Miễn phí · Cho người Việt mới bắt đầu · Hướng tới TOPIK I', h1: '🇰🇷 Tiếng Hàn giao tiếp <em>trong 30 ngày</em>',
      lead: 'Tuần đầu <b>đọc – viết thành thạo bảng chữ Hangul</b>, sau đó học câu giao tiếp theo chủ đề, <b>hội thoại tình huống</b> và kiểm tra ngắn mỗi ngày. Kết thúc cấp 1 em đủ nền để hướng tới <b>TOPIK I cấp 1</b>.',
      card: () => `<b>Nghe thử</b><div class="row center">${sp('안녕하세요', '안녕하세요')} ${sp('감사합니다', '감사합니다')} ${sp('사랑해요', '사랑해요')}</div><p class="small muted">Annyeonghaseyo · Gamsahamnida · Saranghaeyo</p>`,
      tools: [['bang-chu', '🔤', 'Bảng chữ Hangul', 'Nguyên âm, phụ âm, patchim, bấm để nghe.']],
      profile: 'người Việt mới bắt đầu, học 30–45 phút/ngày, mục tiêu giao tiếp và TOPIK I.',
      kinds: ['meaning', 'listen', 'listenWord', 'hanzi', 'pinyin', 'match']
    }
  };
  /* ---------- Các cấp sau của tiếng Anh: mỗi cấp là một khoá con #/tieng-anh/cN ---------- */
  const EN_TOOLS = [['#/tieng-anh/ngu-phap', '📐', 'Sổ tay ngữ pháp', 'Ngữ pháp A1 → C1, ví dụ có giọng đọc và bài tập nhanh.'], ['#/tieng-anh/luyen-noi', '🎤', 'Phát âm & ngữ điệu', 'Nói theo, máy chấm từng từ; nhấn âm, lên – xuống giọng, nối âm.'], ['#/tieng-anh/luyen-de', '🏅', 'Luyện đề chứng chỉ', 'Đề mô phỏng TOEIC, IELTS; viết, nói; quy đổi điểm tham khảo.']];
  COURSES['tieng-anh'].tools = COURSES['tieng-anh'].tools.concat(EN_TOOLS);
  const enLv = (n, moc, files, o) => Object.assign({}, COURSES['tieng-anh'], { key: 'tieng-anh-c' + n, path: 'tieng-anh/c' + n, parent: 'tieng-anh', lvl: n, moc, id: 'en' + n, files, rep: 'ENGLISH LEARNING REPORT – ' + moc, tools: [['#/tieng-anh/bang-am', '🔤', 'Bảng âm IPA', 'Ôn lại nguyên âm, phụ âm, bấm để nghe.']].concat(EN_TOOLS) }, o);
  COURSES['tieng-anh-c2'] = enLv(2, 'A2', ['subjects/nn/en-a2.js', 'subjects/nn/en-a2-2.js'], {
    data: () => window.PLT_EN2, eyebrow: 'Cấp 2/5 · Sơ cấp A2 · Hướng tới TOEIC 225+ / KET', h1: '🇬🇧 Tiếng Anh A2: <em>kể chuyện, so sánh, xử lý tình huống</em>',
    lead: '30 ngày nắm chắc <b>quá khứ đơn, tương lai, so sánh, động từ khuyết thiếu</b> và các tình huống du lịch – công việc. Mỗi ngày có phần <b>🎤 nói theo để máy chấm</b> và luyện ngữ điệu.',
    card: () => `<b>Nghe và nói thử</b><p class="zh-srt">${into('I *went* to Da *Nang* last *summer*. ↘')} ${sp(plain('I went to Da Nang last summer.'))}</p>${mic('I went to Da Nang last summer.')}<p class="small muted">Chữ in đậm là từ nhấn mạnh, ↘ là xuống giọng cuối câu.</p>`,
    profile: 'người Việt đã xong A1, giọng Mỹ, học 30–45 phút/ngày, mục tiêu giao tiếp A2 và TOEIC 225+.'
  });
  COURSES['tieng-anh-c3'] = enLv(3, 'B1', ['subjects/nn/en-b1.js', 'subjects/nn/en-b1-2.js'], {
    data: () => window.PLT_EN3, eyebrow: 'Cấp 3/5 · Trung cấp B1 · Hướng tới TOEIC 550+ / IELTS 4.0–5.0 / VSTEP bậc 3', h1: '🇬🇧 Tiếng Anh B1: <em>nêu ý kiến, làm việc, thi chứng chỉ</em>',
    lead: '30 ngày với <b>HTHT, câu điều kiện, bị động, mệnh đề quan hệ, tường thuật</b> và tiếng Anh công sở: họp, thuyết trình, email, khiếu nại, thương lượng. Kết thúc bằng <b>mô phỏng thi nói IELTS</b>.',
    card: () => `<b>Nghe và nói thử</b><p class="zh-srt">${into("If I *were* you, → I'd *ask* for a pay *rise*. ↘")} ${sp(plain("If I were you, I'd ask for a pay rise."))}</p>${mic("If I were you, I'd ask for a pay rise.")}<p class="small muted">→ là chỗ ngắt nhóm ý, ↘ xuống giọng cuối câu.</p>`,
    profile: 'người Việt đã xong A2, giọng Mỹ, học 30–45 phút/ngày, mục tiêu B1, TOEIC 550+ / IELTS 4.0–5.0 và tiếng Anh công sở.'
  });
  COURSES['tieng-anh-c4'] = enLv(4, 'B2', ['subjects/nn/en-b2.js', 'subjects/nn/en-b2-2.js'], {
    data: () => window.PLT_EN4, eyebrow: 'Cấp 4/5 · Trung cao B2 · Hướng tới TOEIC 785+ / IELTS 5.5–6.5 / VSTEP bậc 4', h1: '🇬🇧 Tiếng Anh B2: <em>học thuật, chuyên môn, IELTS 6.5</em>',
    lead: '30 ngày với <b>ngữ pháp nâng cao, collocation, IELTS Writing – Reading – Speaking</b> và tiếng Anh chuyên sâu: báo cáo, đàm phán, góp ý, tài chính – ngân hàng, CNTT – an ninh mạng.',
    card: () => `<b>Nghe và nói thử</b><p class="zh-srt">${into("*Admittedly*, → it may not suit every *industry*. ↘")} ${sp(plain('Admittedly, it may not suit every industry.'))}</p>${mic('Admittedly, it may not suit every industry.')}<p class="small muted">Nói nhượng bộ trước khi phản biện, giọng hạ ở cuối câu.</p>`,
    profile: 'người Việt đã xong B1, giọng Mỹ, học 30–45 phút/ngày, mục tiêu B2, IELTS 6.5 / TOEIC 785+ và tiếng Anh chuyên môn ngân hàng – CNTT.'
  });
  COURSES['tieng-anh-c5'] = enLv(5, 'C1', ['subjects/nn/en-c1.js', 'subjects/nn/en-c1-2.js'], {
    data: () => window.PLT_EN5, eyebrow: 'Cấp 5/5 · Cao cấp C1 · Hướng tới IELTS 7.0+ / TOEIC 945+ / VSTEP bậc 5', h1: '🇬🇧 Tiếng Anh C1: <em>thành thạo, lãnh đạo, IELTS 7+</em>',
    lead: '30 ngày với <b>đảo ngữ, câu chẻ, giả định, danh từ hoá, rào đón</b>, từ vựng tinh tế và tiếng Anh lãnh đạo: hội đồng, đàm phán cấp cao, khủng hoảng. Kết thúc bằng <b>IELTS 7+</b> và kế hoạch tự học suốt đời.',
    card: () => `<b>Nghe và nói thử</b><p class="zh-srt">${into('*Rarely* have we seen → such *rapid* *growth*. ↘')} ${sp(plain('Rarely have we seen such rapid growth.'))}</p>${mic('Rarely have we seen such rapid growth.')}<p class="small muted">Đảo ngữ nhấn mạnh – nhấn từ đầu câu.</p>`,
    profile: 'người Việt đã xong B2, học 30–45 phút/ngày, mục tiêu C1, IELTS 7.0+ / TOEIC 945+ và tiếng Anh lãnh đạo, chuyên môn.'
  });
  // Cấp 2–5 của tiếng Trung, tiếng Hàn: cùng cấu hình với cấp 1, dữ liệu và tiến độ riêng
  const lvl = (parent, n, moc, files, o) => Object.assign({}, COURSES[parent], { key: parent + '-c' + n, path: parent + '/c' + n, parent, lvl: n, moc, id: COURSES[parent].id + n, files, rep: COURSES[parent].rep + ' – ' + moc }, o);
  const ZH_TOOLS = [['#/tieng-trung/thanh-dieu', '🎵', 'Luyện 4 thanh', 'Ôn thanh điệu, trò chơi nghe – chọn thanh.'], ['#/tieng-trung/pinyin', '🔤', 'Bảng Pinyin', 'Thanh mẫu, vận mẫu, bấm để nghe.']];
  const KO_TOOLS = [['#/tieng-han/bang-chu', '🔤', 'Bảng chữ Hangul', 'Ôn nguyên âm, phụ âm, patchim.']];
  const LV_FILES = (pre, n) => ['subjects/nn/' + pre + '-' + n + '.js', 'subjects/nn/' + pre + '-' + n + '-2.js'];
  const ZK = ['meaning', 'listen', 'pinyin', 'hanzi', 'listenPy', 'match'];
  const zhCard = (h, p, v) => `<b>Nghe và nói thử</b><p class="zh-srt">${sp(h, h)}</p><p class="small muted">${p} – ${v}</p>${mic(h)}`;
  COURSES['tieng-trung-c2'] = lvl('tieng-trung', 2, 'HSK 3', LV_FILES('zh', 2), {
    data: () => window.PLT_ZH2, tools: ZH_TOOLS, kinds: ZK, eyebrow: 'Cấp 2/5 · Sơ cấp · Hướng tới HSK 3 (~600 từ)', h1: '🇨🇳 Tiếng Trung HSK 3: <em>bổ ngữ, câu 把 – 被, đời sống và công việc</em>',
    lead: '30 ngày nắm chắc <b>了/过, các loại bổ ngữ, so sánh, câu 把 và 被, liên từ</b>, rồi dùng chúng trong tình huống thật: thuê nhà, ngân hàng, du lịch, phỏng vấn, mua sắm online. Mỗi ngày có phần <b>🎤 nói theo để máy chấm</b>.',
    card: () => zhCard('我把文件发给你了。', 'Wǒ bǎ wénjiàn fā gěi nǐ le.', 'Tôi gửi tài liệu cho bạn rồi.'),
    profile: 'người Việt đã xong HSK 1–2, chữ giản thể, học 30–45 phút/ngày, mục tiêu HSK 3 và giao tiếp công việc.'
  });
  COURSES['tieng-trung-c3'] = lvl('tieng-trung', 3, 'HSK 4', LV_FILES('zh', 3), {
    data: () => window.PLT_ZH3, tools: ZH_TOOLS, kinds: ZK, eyebrow: 'Cấp 3/5 · Trung cấp · Hướng tới HSK 4 (~1200 từ)', h1: '🇨🇳 Tiếng Trung HSK 4: <em>câu phức, văn viết, tiếng Trung công sở</em>',
    lead: '30 ngày với <b>连…都, 即使…也, 无论…都, 不是…而是, liên từ văn viết, trạng từ thái độ</b>, rồi họp, khiếu nại, email, tài chính, số liệu, đàm phán. Kết thúc bằng <b>luyện nghe – viết dạng HSK 4</b>.',
    card: () => zhCard('即使下雨，我们也按时出发。', 'Jíshǐ xià yǔ, wǒmen yě ànshí chūfā.', 'Dù mưa, chúng ta vẫn xuất phát đúng giờ.'),
    profile: 'người Việt đã xong HSK 3, chữ giản thể, học 30–45 phút/ngày, mục tiêu HSK 4 và tiếng Trung công sở.'
  });
  COURSES['tieng-trung-c4'] = lvl('tieng-trung', 4, 'HSK 5–6', LV_FILES('zh', 4), {
    data: () => window.PLT_ZH4, tools: ZH_TOOLS, kinds: ZK, eyebrow: 'Cấp 4/5 · Trung cao · Hướng tới HSK 5–6 (~2500–5000 từ)', h1: '🇨🇳 Tiếng Trung HSK 5–6: <em>thành ngữ, văn viết, thuyết trình, đàm phán</em>',
    lead: '30 ngày với <b>thành ngữ, hư từ văn ngôn, câu lựa chọn và điều kiện chặt</b>, đọc báo kinh tế, thuyết trình, nghị luận, hợp đồng, thông cáo, tranh luận và khủng hoảng truyền thông. Kết thúc bằng <b>luyện viết tóm tắt 缩写</b>.',
    card: () => zhCard('与其抱怨，不如行动。', 'Yǔqí bàoyuàn, bùrú xíngdòng.', 'Thay vì than phiền, chẳng bằng hành động.'),
    profile: 'người Việt đã xong HSK 4, chữ giản thể, học 30–45 phút/ngày, mục tiêu HSK 5–6 và tiếng Trung chuyên môn.'
  });
  COURSES['tieng-trung-c5'] = lvl('tieng-trung', 5, 'HSK 7–9', LV_FILES('zh', 5), {
    data: () => window.PLT_ZH5, tools: ZH_TOOLS, kinds: ZK, eyebrow: 'Cấp 5/5 · Cao cấp · Hướng tới HSK 7–9, biên – phiên dịch', h1: '🇨🇳 Tiếng Trung HSK 7–9: <em>văn ngôn, dịch thuật, học thuật, ngoại giao</em>',
    lead: '30 ngày với <b>văn ngôn, điển cố, văn phong học thuật</b>, kỹ thuật <b>biên – phiên dịch</b> tài chính, CNTT, pháp lý, rồi diễn văn, lễ tân, đàm phán đầu tư, thơ Đường, Khổng – Lão, ngôn ngữ mạng và ứng biến. Kết thúc bằng kế hoạch <b>tự học suốt đời</b>.',
    card: () => zhCard('千里之行，始于足下。', 'Qiān lǐ zhī xíng, shǐ yú zú xià.', 'Đi nghìn dặm bắt đầu từ một bước chân.'),
    profile: 'người Việt đã xong HSK 5–6, học 30–45 phút/ngày, mục tiêu HSK 7–9, biên – phiên dịch và giao tiếp cấp cao.'
  });
  const koCard = (h, p, v) => `<b>Nghe và nói thử</b><p class="zh-srt">${sp(h, h)}</p><p class="small muted">${p} – ${v}</p>${mic(h)}`;
  COURSES['tieng-han-c2'] = lvl('tieng-han', 2, 'TOPIK I · cấp 2', LV_FILES('ko', 2), {
    data: () => window.PLT_KO2, tools: KO_TOOLS, eyebrow: 'Cấp 2/5 · Sơ cấp · Hướng tới TOPIK I cấp 2', h1: '🇰🇷 Tiếng Hàn cấp 2: <em>kính ngữ, nối câu, đời sống ở Hàn</em>',
    lead: '30 ngày với <b>kính ngữ, động từ bất quy tắc, tương lai, nối câu, muốn – có thể – phải – cấm</b>, rồi bệnh viện, ngân hàng, thuê nhà, công sở, lễ tết. Kết thúc bằng <b>luyện đọc – nghe dạng TOPIK I</b>.',
    card: () => koCard('맛있게 드세요.', 'masitge deuseyo', 'Chúc ngon miệng (kính ngữ).'),
    profile: 'người Việt đã xong tiếng Hàn cấp 1, học 30–45 phút/ngày, mục tiêu TOPIK I cấp 2 và giao tiếp công sở.'
  });
  COURSES['tieng-han-c3'] = lvl('tieng-han', 3, 'TOPIK II · cấp 3', LV_FILES('ko', 3), {
    data: () => window.PLT_KO3, tools: KO_TOOLS, eyebrow: 'Cấp 3/5 · Trung cấp 1 · Hướng tới TOPIK II cấp 3', h1: '🇰🇷 Tiếng Hàn cấp 3: <em>gián tiếp, phỏng đoán, viết TOPIK II</em>',
    lead: '30 ngày với <b>-는데, câu gián tiếp, phỏng đoán, bị động, -게 되다</b>, rồi tin tức, môi trường, văn hoá, giáo dục, công nghệ. Luyện <b>viết câu 51–53, đọc – nghe TOPIK II</b>, thuyết trình và phỏng vấn.',
    card: () => koCard('부탁이 있는데요.', 'butagi inneundeyo', 'Tôi có việc muốn nhờ ạ.'),
    profile: 'người Việt đã xong tiếng Hàn cấp 2 (TOPIK I), học 30–45 phút/ngày, mục tiêu TOPIK II cấp 3 và giao tiếp công sở.'
  });
  COURSES['tieng-han-c4'] = lvl('tieng-han', 4, 'TOPIK II · cấp 4', LV_FILES('ko', 4), {
    data: () => window.PLT_KO4, tools: KO_TOOLS, eyebrow: 'Cấp 4/5 · Trung cấp 2 · Hướng tới TOPIK II cấp 4', h1: '🇰🇷 Tiếng Hàn cấp 4: <em>văn viết, quán dụng ngữ, tranh luận, câu 54</em>',
    lead: '30 ngày với <b>불구하고, 바람에, 마련이다, -다 보니, danh từ hoá</b>, từ Hán Hàn, quán dụng ngữ, tục ngữ, <b>viết câu 54</b>, kinh tế – xã hội, văn hoá doanh nghiệp, đàm phán, tranh luận và phản đối khéo với cấp trên.',
    card: () => koCard('처음에는 누구나 실수하기 마련이에요.', 'cheoeumeneun nuguna silsuhagi maryeonieyo', 'Lúc đầu ai cũng mắc lỗi thôi.'),
    profile: 'người Việt đã xong tiếng Hàn cấp 3, học 30–45 phút/ngày, mục tiêu TOPIK II cấp 4 và làm việc trong công ty Hàn.'
  });
  COURSES['tieng-han-c5'] = lvl('tieng-han', 5, 'TOPIK II · cấp 5–6', LV_FILES('ko', 5), {
    data: () => window.PLT_KO5, tools: KO_TOOLS, eyebrow: 'Cấp 5/5 · Cao cấp · Hướng tới TOPIK II cấp 5–6', h1: '🇰🇷 Tiếng Hàn cấp 5: <em>học thuật, biên – phiên dịch, diễn văn</em>',
    lead: '30 ngày với <b>-거니와, -(으)ㄹ지언정, -는 한, -는 셈, -(으)ㄴ 나머지</b>, văn báo chí và học thuật, <b>사자성어</b>, viết câu 54 điểm cao, kính ngữ nghi lễ, <b>biên – phiên dịch</b> ngân hàng – pháp lý, thời điệu cổ điển, hội thảo và bảo vệ đề tài.',
    card: () => koCard('고진감래라고 끝까지 포기하지 맙시다.', 'gojingamnaerago kkeutkkaji pogihaji mapsida', 'Khổ tận cam lai, đừng bỏ cuộc đến cùng.'),
    profile: 'người Việt đã xong tiếng Hàn cấp 4, học 45–60 phút/ngày, mục tiêu TOPIK II cấp 5–6, làm biên – phiên dịch hoặc học sau đại học tại Hàn.'
  });
  let C = COURSES['tieng-trung'];
  const D = () => C.data() || { plan: [], days: [] };
  const base = () => '#/' + (C.path || C.key);
  const LV = () => C.lvl || 1;

  /* ---------- Tải dữ liệu khoá học (lần đầu) ---------- */
  const loaded = {};
  function loadScript(f) { return new Promise((ok) => { const s = document.createElement('script'); s.src = f + (window.PLT_VER ? '?v=' + window.PLT_VER : ''); s.onload = () => ok(true); s.onerror = () => ok(false); document.body.appendChild(s); }); }
  function ensure(c) {
    if (!loaded[c.key]) loaded[c.key] = c.files.reduce((pr, f) => pr.then(() => loadScript(f)), Promise.resolve()).then(() => !!c.data());
    return loaded[c.key];
  }

  /* ---------- Lưu trữ (mỗi thứ tiếng một ngăn) ---------- */
  const st = () => { const d = PLT.data, k = C.id; d[k] = Object.assign({ days: {}, known: {}, rate: 0.8, py: true, vi: true }, d[k] || {}); d[k].days = d[k].days || {}; d[k].known = d[k].known || {}; return d[k]; };
  const dayState = (n) => { const s = st(); s.days[n] = s.days[n] || { parts: {} }; return s.days[n]; };
  const markPart = (n, p) => { const d = dayState(n); if (!d.parts[p]) { d.parts[p] = 1; d.last = new Date().toISOString(); bump('part'); PLT.save(); if (typeof addXP === 'function') addXP(p === 'd' ? 10 : 5, p === 'd' ? 'Hội thoại' : 'Hoàn thành phần ' + p.toUpperCase()); } };
  const testsOf = (n) => PLT.data.tests.filter((x) => x.id === C.id + ':d' + n);
  const bestOf = (n) => { const r = testsOf(n); return r.length ? Math.max(...r.map((x) => x.diem)) : null; };
  const PASS = 7;
  const isDone = (n) => (bestOf(n) || 0) >= PASS;
  const fmtD = (x) => String(x).replace('.', ',');

  /* ---------- Giọng đọc ---------- */
  const TTS = 'speechSynthesis' in window;
  let voiceChecked = false; const voices = {};
  function pickVoice() {
    if (!TTS) return null;
    const vs = speechSynthesis.getVoices(); if (vs.length) voiceChecked = true;
    voices[C.lang] = C.pick(vs) || null; return voices[C.lang];
  }
  if (TTS && speechSynthesis.addEventListener) speechSynthesis.addEventListener('voiceschanged', pickVoice);
  function say(t, opt) {
    if (!TTS) return;
    if (!(opt && opt.queue)) speechSynthesis.cancel();
    const v = voices[C.lang] !== undefined ? voices[C.lang] : pickVoice();
    const u = new SpeechSynthesisUtterance(t); u.lang = C.lang; if (v) u.voice = v;
    u.rate = (opt && opt.rate) || st().rate || 0.8; speechSynthesis.speak(u);
  }
  const sayAll = (list) => { if (!TTS) return; speechSynthesis.cancel(); list.forEach((t) => say(t, { queue: true })); };
  document.addEventListener('click', (e) => {
    const b = e.target.closest && e.target.closest('[data-say]'); if (!b) return;
    e.preventDefault(); e.stopPropagation();
    const t = b.dataset.say; if (t.includes('|')) sayAll(t.split('|')); else say(t);
    b.classList.add('zh-on'); setTimeout(() => b.classList.remove('zh-on'), 600);
  }, true);
  const sp = (t, lbl) => `<button type="button" class="zh-say" data-say="${esc(t)}" title="Nghe đọc" aria-label="Nghe đọc">🔊${lbl ? ' ' + lbl : ''}</button>`;
  /* ---------- Nói theo và chấm phát âm (nhận dạng giọng nói của trình duyệt, miễn phí) ---------- */
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  let rec = null, curDay = 0;
  // Ký hiệu ngữ điệu trong dữ liệu: *từ nhấn*, ↗ lên giọng, ↘ xuống giọng, → giữ giọng, ‿ nối âm
  const plain = (s) => String(s).replace(/<[^>]+>/g, '').replace(/[*↗↘→]/g, '').replace(/‿/g, ' ').replace(/\s+/g, ' ').trim();
  const stx = (h) => String(h).replace(/\*([^*<\n]+)\*/g, '<b class="zh-st">$1</b>');
  const into = (s) => esc(s).replace(/\*([^*]+)\*/g, '<b class="zh-st">$1</b>').replace(/‿/g, '<i class="zh-lk">‿</i>').replace(/↗/g, '<i class="zh-up">↗</i>').replace(/↘/g, '<i class="zh-dn">↘</i>').replace(/→/g, '<i class="zh-lvl">→</i>');
  const mic = (t) => `<span class="zh-micw"><button type="button" class="zh-mic" data-mic="${esc(plain(t))}">🎤 Nói</button><span class="zh-micr"></span></span>`;
  const sayRow = (r) => { const s = Array.isArray(r) ? r : [r]; return `<div class="zh-sr"><div class="zh-srt">${into(s[0])} ${sp(plain(s[0]))}</div>${s[1] ? `<div class="muted small">${s[1]}</div>` : ''}${mic(s[0])}</div>`; };
  const micNote = () => (SR ? '' : '<div class="fb warn">⚠️ Trình duyệt này chưa nhận được giọng nói nên nút 🎤 không chạy. Hãy dùng <b>Chrome</b> hoặc <b>Edge</b> trên máy tính / Android (iPhone dùng Safari bản mới).</div>');
  const NUM = 'zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split(' '), TENS = 'twenty thirty forty fifty sixty seventy eighty ninety'.split(' ');
  const n2w = (n) => (n < 20 ? NUM[n] : n < 100 ? TENS[Math.floor(n / 10) - 2] + (n % 10 ? ' ' + NUM[n % 10] : '') : String(n));
  const CONTR = { "i'm": 'i am', "you're": 'you are', "we're": 'we are', "they're": 'they are', "he's": 'he is', "she's": 'she is', "it's": 'it is', "that's": 'that is', "what's": 'what is', "there's": 'there is', "isn't": 'is not', "aren't": 'are not', "wasn't": 'was not', "weren't": 'were not', "don't": 'do not', "doesn't": 'does not', "didn't": 'did not', "can't": 'cannot', "couldn't": 'could not', "won't": 'will not', "wouldn't": 'would not', "shouldn't": 'should not', "haven't": 'have not', "hasn't": 'has not', "i've": 'i have', "i'll": 'i will', "you'll": 'you will', "we'll": 'we will', "i'd": 'i would', "let's": 'let us', "can not": 'cannot', ok: 'okay', 'o.k.': 'okay' };
  function toks(s) {
    s = plain(s).toLowerCase().replace(/[’‘]/g, "'");
    if (/^zh/.test(C.lang)) return [...s.replace(/[^一-鿿0-9a-z]/g, '')];
    if (/^en/.test(C.lang)) { s = s.replace(/(\d+):(\d\d)/g, (m, h, mm) => h + ' ' + (mm === '00' ? "o'clock" : mm)).replace(/\b\d{1,2}\b/g, (m) => n2w(+m)).replace(/%/g, ' percent'); Object.keys(CONTR).forEach((k) => { s = s.split(k).join(CONTR[k]); }); }
    return s.replace(/[^\p{L}\p{N}' ]/gu, ' ').split(/\s+/).filter(Boolean);
  }
  function lcsHit(a, b) {
    const m = a.length, n = b.length, L = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (let i = m - 1; i >= 0; i--) for (let j = n - 1; j >= 0; j--) L[i][j] = a[i] === b[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
    const hit = new Array(m).fill(false); let i = 0, j = 0;
    while (i < m && j < n) { if (a[i] === b[j]) { hit[i] = true; i++; j++; } else if (L[i + 1][j] >= L[i][j + 1]) i++; else j++; }
    return hit;
  }
  function micStat(score) {
    const s = st(); s.mic = s.mic || { n: 0, sum: 0 }; s.mic.n++; s.mic.sum += score;
    if (curDay) { const d = dayState(curDay); d.mic = d.mic || [0, 0]; d.mic[0] += score; d.mic[1]++; }
    PLT.save(); if (score >= 80) { SND.ok(); bump('mic'); addXP(3, '🎤 Nói tốt'); } else SND.bad();
  }
  function gradeSpeech(target, alts, out) {
    const T = toks(target); let best = null;
    alts.forEach((a) => { const hit = lcsHit(T, toks(a)), sc = T.length ? Math.round((hit.filter(Boolean).length / T.length) * 100) : 0; if (!best || sc > best.sc) best = { a, hit, sc }; });
    const sc = best.sc, tier = sc >= 90 ? ['good', '🏆 Rất tốt! Máy nghe rõ gần như toàn bộ câu.'] : sc >= 70 ? ['mid', '👍 Khá tốt. Luyện thêm các từ màu đỏ.'] : ['low', '💪 Nghe mẫu lại, nói chậm và rõ từng từ, chú ý âm cuối.'];
    out.innerHTML = `<div class="zh-score ${tier[0]}"><b>${sc}%</b><span>${T.map((t, i) => `<i class="${best.hit[i] ? 'ok' : 'no'}">${esc(t)}</i>`).join(' ')}</span><div class="small">${tier[1]}</div><div class="small muted">Máy nghe được: “${esc(best.a)}”</div></div>`;
    micStat(sc);
  }
  function micErr(e) {
    return ({ 'not-allowed': 'Em chưa cho phép dùng micro. Bấm biểu tượng 🔒 cạnh địa chỉ trang → Micro → Cho phép, rồi thử lại.', 'service-not-allowed': 'Trình duyệt chặn nhận giọng nói. Hãy dùng Chrome hoặc Edge.', 'no-speech': 'Máy chưa nghe thấy tiếng. Nói to hơn, gần micro hơn.', 'audio-capture': 'Không tìm thấy micro. Kiểm tra tai nghe/micro.', network: 'Nhận giọng nói cần kết nối Internet. Kiểm tra mạng rồi thử lại.' })[e] || 'Chưa nhận được giọng nói (' + e + '). Thử lại nhé.';
  }
  function listen(target, out, btn) {
    if (!SR) { out.innerHTML = micNote(); return; }
    if (rec) { const same = rec.btn === btn; try { rec.stop(); } catch (e) { /* bỏ qua */ } if (same) return; }
    if (TTS) speechSynthesis.cancel();
    const r = new SR(); rec = r; r.btn = btn; r.lang = C.lang; r.interimResults = false; r.maxAlternatives = 5; r.continuous = false;
    let got = false, err = false; const lbl = btn.textContent;
    btn.classList.add('rec'); btn.textContent = '🔴 Đang nghe…'; out.innerHTML = '<span class="small muted">Nói ngay bây giờ…</span>';
    r.onresult = (e) => { got = true; gradeSpeech(target, [...e.results[0]].map((x) => x.transcript), out); };
    r.onerror = (e) => { err = true; out.innerHTML = `<div class="fb warn">🎤 ${micErr(e.error)}</div>`; };
    r.onend = () => { btn.classList.remove('rec'); btn.textContent = lbl; if (!got && !err) out.innerHTML = `<div class="fb warn">🎤 ${micErr('no-speech')}</div>`; if (rec === r) rec = null; };
    try { r.start(); } catch (e) { r.onend(); }
  }
  document.addEventListener('click', (e) => {
    const b = e.target.closest && e.target.closest('[data-mic]'); if (!b) return;
    e.preventDefault(); e.stopPropagation(); listen(b.dataset.mic, b.nextElementSibling, b);
  }, true);
  // Nói tự do (luyện nói IELTS): ghi lại toàn bộ lời nói, đếm từ và tốc độ
  function freeTalk(out, btn, secs, onEnd) {
    if (!SR) { out.innerHTML = micNote(); return null; }
    if (TTS) speechSynthesis.cancel();
    let text = '', alive = true, t0 = Date.now(); const r = new SR(); r.lang = C.lang; r.continuous = true; r.interimResults = true;
    const show = (tmp) => { const sec = Math.round((Date.now() - t0) / 1000), wc = text.split(/\s+/).filter(Boolean).length; out.innerHTML = `<div class="zh-talk"><div class="row small"><b>⏱ ${sec}/${secs} giây</b><span>📝 ${wc} từ</span></div><p>${esc(text)} <span class="muted">${esc(tmp || '')}</span></p></div>`; };
    r.onresult = (e) => { let tmp = ''; for (let i = e.resultIndex; i < e.results.length; i++) { if (e.results[i].isFinal) text += ' ' + e.results[i][0].transcript; else tmp += e.results[i][0].transcript; } show(tmp); };
    r.onerror = (e) => { if (e.error !== 'no-speech' && e.error !== 'aborted') { alive = false; out.insertAdjacentHTML('beforeend', `<div class="fb warn">🎤 ${micErr(e.error)}</div>`); } };
    r.onend = () => { if (alive && Date.now() - t0 < secs * 1000) { try { r.start(); } catch (e) { /* bỏ qua */ } return; } done(); };
    const tick = setInterval(() => { if (Date.now() - t0 >= secs * 1000) stopIt(); else show(); }, 1000);
    function stopIt() { alive = false; try { r.stop(); } catch (e) { done(); } }
    let fin = false; function done() { if (fin) return; fin = true; clearInterval(tick); const sec = Math.max(1, Math.round((Date.now() - t0) / 1000)), wc = text.split(/\s+/).filter(Boolean).length; onEnd && onEnd(text.trim(), wc, Math.round((wc / sec) * 60)); }
    r.start(); show(); return { stop: stopIt };
  }

  /* ---------- Tương tác kiểu Duolingo: XP, chuỗi ngày, mục tiêu ngày, âm thanh, pháo hoa ---------- */
  const today = () => { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
  const dayDiff = (a, b) => Math.round((new Date(b + 'T00:00:00') - new Date(a + 'T00:00:00')) / 864e5);
  const gam = () => { const d = PLT.data; d.gam = Object.assign({ xp: 0, days: {}, streak: 0, best: 0, last: '', goal: 20, sound: true }, d.gam || {}); const g = d.gam; g.days = g.days || {}; g.by = g.by || {}; g.c = Object.assign({ ans: 0, part: 0, mic: 0, quick: 0, pass: 0, perfect: 0, goalHit: 0, final: 0, nd: 0 }, g.c || {}); g.badges = g.badges || {}; if (!g.q || g.q.d !== today()) g.q = { d: today(), ans: 0, part: 0, got: {} }; return g; };
  const streakNow = () => { const g = gam(); return g.last && dayDiff(g.last, today()) <= 1 ? g.streak : 0; };
  let AC = null;
  function tone(seq) {
    if (!gam().sound) return;
    try {
      AC = AC || new (window.AudioContext || window.webkitAudioContext)(); let t = AC.currentTime;
      seq.forEach(([f, d, type]) => { const o = AC.createOscillator(), v = AC.createGain(); o.type = type || 'sine'; o.frequency.value = f; v.gain.setValueAtTime(0.0001, t); v.gain.exponentialRampToValueAtTime(0.14, t + 0.02); v.gain.exponentialRampToValueAtTime(0.0001, t + d); o.connect(v); v.connect(AC.destination); o.start(t); o.stop(t + d + 0.03); t += d * 0.8; });
    } catch (e) { /* trình duyệt không hỗ trợ âm thanh */ }
  }
  const SND = { ok: () => tone([[660, 0.11], [990, 0.18]]), bad: () => tone([[196, 0.28, 'triangle']]), win: () => tone([[523, 0.12], [659, 0.12], [784, 0.12], [1047, 0.32]]) };
  function toast(html, cls) {
    let wr = document.getElementById('zh-toasts'); if (!wr) { wr = document.createElement('div'); wr.id = 'zh-toasts'; document.body.appendChild(wr); }
    const t = document.createElement('div'); t.className = 'zh-toast ' + (cls || ''); t.innerHTML = html; wr.appendChild(t);
    setTimeout(() => t.classList.add('out'), 1700); setTimeout(() => t.remove(), 2200);
  }
  function confetti() {
    const c = document.createElement('div'); c.className = 'zh-confetti'; const cols = ['#F2994A', '#1f9d63', '#3B6FE0', '#d93f45', '#F2C94C', '#9B51E0'];
    for (let i = 0; i < 70; i++) { const s = document.createElement('i'); s.style.left = Math.random() * 100 + '%'; s.style.background = cols[i % cols.length]; s.style.animationDelay = Math.random() * 0.6 + 's'; s.style.animationDuration = 1.6 + Math.random() * 1.4 + 's'; c.appendChild(s); }
    document.body.appendChild(c); setTimeout(() => c.remove(), 3800);
  }
  function addXP(n, why, noLang) {
    if (!n) return; const g = gam(), t = today(), before = g.days[t] || 0;
    if (g.last !== t) { const dd = g.last ? dayDiff(g.last, t) : 99; g.streak = dd === 1 ? g.streak + 1 : 1; g.last = t; g.best = Math.max(g.best, g.streak); if (g.streak > 1) setTimeout(() => toast(`🔥 Chuỗi <b>${g.streak}</b> ngày học liên tiếp!`, 'fire'), 500); }
    if (!before) g.c.nd++;
    g.xp += n; g.days[t] = before + n;
    const lk = !noLang && C && (C.parent || C.key); if (lk) g.by[lk] = (g.by[lk] || 0) + n;
    if (before < g.goal && g.days[t] >= g.goal) g.c.goalHit++;
    Object.keys(g.days).forEach((k) => { if (dayDiff(k, t) > 60) delete g.days[k]; });
    PLT.save(); toast(`+${n} XP${why ? ' · ' + why : ''}`, 'xp');
    if (before < g.goal && g.days[t] >= g.goal) setTimeout(() => { SND.win(); confetti(); toast(`🎯 Đạt mục tiêu hôm nay: <b>${g.goal} XP</b>!`, 'goal'); }, 600);
    document.querySelectorAll('.zh-gbar').forEach((b) => (b.outerHTML = gbar()));
    afterXP();
  }
  function gbar() {
    const g = gam(), t = g.days[today()] || 0, s = streakNow(), pct = Math.min(100, Math.round((t / g.goal) * 100));
    return `<div class="zh-gbar"><span class="zh-st${s ? ' on' : ''}" title="Chuỗi ngày học liên tiếp">🔥 <b>${s}</b> ngày</span><span class="zh-goal" title="Mục tiêu XP hôm nay"><i style="width:${pct}%"></i><em>⚡ ${t}/${g.goal} XP hôm nay</em></span><span title="Tổng XP">💎 <b>${g.xp}</b> XP</span><a class="zh-rk" href="#/ngoai-ngu/thanh-tich" title="Thành tích, huy hiệu, nhiệm vụ">${rank(g.xp).i} ${rank(g.xp).t} · 🏆 ${Object.keys(g.badges).length}/${BADGES.length}</a><button type="button" class="zh-snd" data-snd title="Bật/tắt âm thanh">${g.sound ? '🔔' : '🔕'}</button></div>`;
  }
  document.addEventListener('click', (e) => { const b = e.target.closest && e.target.closest('[data-snd]'); if (!b) return; const g = gam(); g.sound = !g.sound; PLT.save(); b.textContent = g.sound ? '🔔' : '🔕'; }, true);
  // Luyện tập có XP, âm thanh, chuỗi câu đúng
  function play(box, qs, opt) {
    opt = opt || {}; let combo = 0;
    return PLT.Q.practice(box, qs, Object.assign({}, opt, {
      onAnswer: (r) => { if (r) { combo++; SND.ok(); bump('ans'); addXP(2); if ([3, 5, 10].includes(combo)) setTimeout(() => toast(`🔥 ${combo} câu đúng liên tiếp!`, 'fire'), 300); } else { combo = 0; SND.bad(); } },
      onDone: (ok, n) => { if (ok === n && n >= 5) { SND.win(); confetti(); bump('perfect'); addXP(5, 'Không sai câu nào'); } if (opt.onDone) opt.onDone(ok, n); }
    }));
  }
  // Thưởng XP cho bài kiểm tra / đề thi khi có kết quả
  function rewardTest(id) {
    const r = PLT.data.tests.find((x) => x.id === id); if (!r) return;
    if (r.diem >= 7) { SND.win(); confetti(); bump('pass'); if (/:d30$/.test(id)) bump('final'); addXP(20 + (r.diem >= 9.5 ? 10 : 0), 'Đạt bài kiểm tra'); } else addXP(5, 'Đã làm bài');
  }

  /* ---------- Thành tích chung: hạng, huy hiệu, nhiệm vụ ngày (lưu trên máy này) ---------- */
  const RANKS = [[0, '🥉', 'Đồng'], [200, '🥈', 'Bạc'], [600, '🥇', 'Vàng'], [1500, '💠', 'Bạch kim'], [3000, '💎', 'Kim cương'], [6000, '👑', 'Huyền thoại']];
  function rank(xp) { let i = 0; RANKS.forEach((r, k) => { if (xp >= r[0]) i = k; }); const nx = RANKS[i + 1]; return { i: RANKS[i][1], t: RANKS[i][2], k: i, from: RANKS[i][0], to: nx ? nx[0] : 0, next: nx ? nx[2] : '' }; }
  const LANGS = [['tieng-trung', '🇨🇳', 'Tiếng Trung'], ['tieng-anh', '🇬🇧', 'Tiếng Anh'], ['tieng-han', '🇰🇷', 'Tiếng Hàn']];
  const BADGES = [
    ['first', '🌱', 'Khởi đầu', 'Nhận XP đầu tiên', (g) => g.xp > 0],
    ['s3', '🔥', 'Bén lửa', 'Chuỗi 3 ngày học liên tiếp', (g) => g.best >= 3],
    ['s7', '🔥', 'Một tuần bền bỉ', 'Chuỗi 7 ngày', (g) => g.best >= 7],
    ['s30', '☄️', 'Không bỏ cuộc', 'Chuỗi 30 ngày', (g) => g.best >= 30],
    ['xp100', '💎', 'Trăm XP', 'Đạt 100 XP', (g) => g.xp >= 100],
    ['xp1k', '💠', 'Nghìn XP', 'Đạt 1.000 XP', (g) => g.xp >= 1000],
    ['xp5k', '👑', 'Cao thủ', 'Đạt 5.000 XP', (g) => g.xp >= 5000],
    ['goal7', '🎯', 'Đúng hẹn', 'Đạt mục tiêu ngày 7 lần', (g) => g.c.goalHit >= 7],
    ['perfect', '✨', 'Hoàn hảo', 'Một bài luyện không sai câu nào', (g) => g.c.perfect >= 1],
    ['ans500', '✅', 'Năm trăm câu đúng', 'Trả lời đúng 500 câu', (g) => g.c.ans >= 500],
    ['mic20', '🎤', 'Dám nói', 'Nói tốt (≥ 80 điểm) 20 lần', (g) => g.c.mic >= 20],
    ['quick10', '⚡', 'Tia chớp', 'Xong 10 bài luyện nhanh', (g) => g.c.quick >= 10],
    ['pass1', '📝', 'Qua bài đầu', 'Đạt bài kiểm tra đầu tiên (≥ 7 điểm)', (g) => g.c.pass >= 1],
    ['pass10', '🏅', 'Mười bài đạt', 'Đạt 10 bài kiểm tra', (g) => g.c.pass >= 10],
    ['final', '🎓', 'Tốt nghiệp cấp', 'Đạt bài kiểm tra cuối khoá (Ngày 30) của một cấp', (g) => g.c.final >= 1],
    ['poly', '🌏', 'Đa ngôn ngữ', 'Mỗi thứ tiếng Trung, Anh, Hàn đều có ≥ 20 XP', (g) => LANGS.every(([k]) => (g.by[k] || 0) >= 20)]
  ];
  const QUESTS = [['ans', '✅', 'Trả lời đúng 10 câu', 10], ['part', '📘', 'Hoàn thành 2 phần học', 2], ['goal', '🎯', 'Đạt mục tiêu XP hôm nay', 0]];
  function bump(k) { const g = gam(); g.c[k] = (g.c[k] || 0) + 1; if (k === 'ans' || k === 'part') g.q[k]++; }
  const qVal = (g, q) => (q[0] === 'goal' ? [g.days[today()] || 0, g.goal] : [g.q[q[0]], q[3]]);
  let inAfter = false;
  function afterXP() {
    if (inAfter) return; inAfter = true;
    try {
      const g = gam(); let d = 400;
      for (let pass = 0; pass < 2; pass++) QUESTS.forEach((q) => { const [v, m] = qVal(g, q); if (v >= m && !g.q.got[q[0]]) { g.q.got[q[0]] = 1; const t = d; d += 900; setTimeout(() => toast(`${q[1]} Xong nhiệm vụ: <b>${q[2]}</b> · +10 XP`, 'goal'), t); addXP(10); } });
      if (Object.keys(g.q.got).length === QUESTS.length && !g.q.all) { g.q.all = 1; setTimeout(() => { SND.win(); confetti(); toast('🏆 Hoàn thành cả 3 nhiệm vụ hôm nay!', 'goal'); }, d); d += 900; }
      const rk = rank(g.xp).k; if (g.rk === undefined) g.rk = rk; else if (rk > g.rk) { g.rk = rk; const r = rank(g.xp); setTimeout(() => { SND.win(); confetti(); toast(`${r.i} Lên hạng <b>${r.t}</b>!`, 'goal'); }, d); d += 900; }
      BADGES.forEach((b) => { if (!g.badges[b[0]] && b[4](g)) { g.badges[b[0]] = today(); const t = d; d += 900; setTimeout(() => { SND.win(); toast(`${b[1]} Huy hiệu mới: <b>${b[2]}</b>`, 'fire'); }, t); } });
      PLT.save();
    } finally { inAfter = false; }
  }
  function questsCard() {
    const g = gam();
    return `<div class="card zh-quests"><h3>📋 Nhiệm vụ hôm nay <small class="muted">· mỗi nhiệm vụ +10 XP, đổi mới mỗi ngày</small></h3>${QUESTS.map((q) => { const [v, m] = qVal(g, q), pct = Math.min(100, Math.round((v / m) * 100)); return `<div class="zh-q${v >= m ? ' ok' : ''}"><span>${q[1]}</span><div><b>${q[2]}</b><div class="zh-qbar"><i style="width:${pct}%"></i></div></div><em>${v >= m ? '✓' : Math.min(v, m) + '/' + m}</em></div>`; }).join('')}</div>`;
  }
  function achievements(app) {
    const g = gam(), r = rank(g.xp), got = Object.keys(g.badges).length, pct = r.to ? Math.round(((g.xp - r.from) / (r.to - r.from)) * 100) : 100;
    const mx = Math.max(1, ...LANGS.map(([k]) => g.by[k] || 0));
    app.innerHTML = `<div class="crumb"><a href="#/ngoai-ngu">🌏 Ngoại ngữ</a> › Thành tích</div>${gbar()}
      <h1>🏆 Thành tích của em</h1><p class="muted">Tính chung cho cả 3 thứ tiếng. Dữ liệu lưu trên trình duyệt của máy này (đổi máy hoặc xoá dữ liệu trình duyệt sẽ mất).</p>
      <div class="zh-achtop">
        <div class="card zh-rank"><div class="zh-rbig">${r.i}</div><div><b>Hạng ${r.t}</b><p class="small muted">${r.to ? `Còn <b>${r.to - g.xp}</b> XP để lên hạng ${r.next}` : 'Hạng cao nhất – tuyệt vời!'}</p><div class="zh-qbar"><i style="width:${pct}%"></i></div></div></div>
        <div class="card zh-stats"><div><b>${streakNow()}</b><small>🔥 Chuỗi hiện tại</small></div><div><b>${g.best}</b><small>📅 Chuỗi dài nhất</small></div><div><b>${g.xp}</b><small>💎 Tổng XP</small></div><div><b>${g.c.nd}</b><small>📚 Ngày đã học</small></div><div><b>${g.c.ans}</b><small>✅ Câu đúng</small></div><div><b>${g.c.pass}</b><small>📝 Bài kiểm tra đạt</small></div></div>
      </div>
      ${questsCard()}
      <div class="card"><h3>🌏 XP theo thứ tiếng</h3>${LANGS.map(([k, i, t]) => `<a class="zh-lang" href="#/${k}"><span>${i} ${t}</span><div class="zh-qbar"><i style="width:${Math.round(((g.by[k] || 0) / mx) * 100)}%"></i></div><b>${g.by[k] || 0} XP</b></a>`).join('')}<p class="small muted">XP trước khi có bảng này được tính vào tổng nhưng chưa chia theo thứ tiếng.</p></div>
      ${xpWeek()}
      <h2>🎖️ Huy hiệu <small class="muted">${got}/${BADGES.length}</small></h2>
      <div class="zh-badges">${BADGES.map((b) => { const on = g.badges[b[0]]; return `<div class="zh-bd${on ? ' on' : ''}" title="${b[3]}"><span>${on ? b[1] : '🔒'}</span><b>${b[2]}</b><small>${b[3]}${on ? `<br>✓ ${on.split('-').reverse().join('/')}` : ''}</small></div>`; }).join('')}</div>
      <div class="row center"><a class="btn" href="#/ngoai-ngu">▶ Chọn bài học tiếp</a></div>`;
  }

  function voiceNote() {
    const id = 'vn' + Math.random().toString(36).slice(2, 7);
    setTimeout(() => {
      const el = document.getElementById(id); if (!el) return;
      if (!TTS) el.innerHTML = '<div class="fb warn">⚠️ Trình duyệt này không hỗ trợ đọc thành tiếng. Nên dùng Chrome hoặc Edge bản mới.</div>';
      else if (!pickVoice() && voiceChecked) el.innerHTML = `<div class="fb warn">⚠️ Máy chưa có giọng đọc ${C.ten.toLowerCase()} nên nút 🔊 có thể không kêu hoặc đọc sai.<br><span class="muted small" style="font-weight:500">Cách khắc phục: ${C.voiceHelp}</span></div>`;
    }, 1500);
    return `<div id="${id}"></div>`;
  }

  /* ---------- Pinyin: dấu thanh (chỉ tiếng Trung) ---------- */
  const TM = { a: 'āáǎà', e: 'ēéěè', i: 'īíǐì', o: 'ōóǒò', u: 'ūúǔù', 'ü': 'ǖǘǚǜ' };
  const MARKED = {}; Object.keys(TM).forEach((v) => [...TM[v]].forEach((c, i) => (MARKED[c] = [v, i + 1])));
  function variant(p) {
    if (!/^zh/.test(C.id)) return p;
    const idx = [...p].map((c, i) => (MARKED[c] ? i : -1)).filter((i) => i >= 0); if (!idx.length) return p;
    const chars = [...p], k = idx[Math.floor(Math.random() * idx.length)], [v, t] = MARKED[chars[k]];
    const opts = [1, 2, 3, 4].filter((x) => x !== t); chars[k] = TM[v][opts[Math.floor(Math.random() * opts.length)] - 1];
    return chars.join('');
  }
  const TONE_LBL = ['', 'Thanh 1 (ˉ ngang cao)', 'Thanh 2 (ˊ đi lên)', 'Thanh 3 (ˇ xuống rồi lên)', 'Thanh 4 (ˋ đi xuống)', 'Thanh nhẹ (không dấu)'];
  const TONE_COL = ['', '#3B6FE0', '#1f9d63', '#D9661F', '#d93f45'];
  const SETS = [
    { s: 'ma', c: ['妈', '麻', '马', '骂'], p: ['mā', 'má', 'mǎ', 'mà'], v: ['mẹ', 'cây gai', 'con ngựa', 'mắng'] },
    { s: 'ba', c: ['八', '拔', '把', '爸'], p: ['bā', 'bá', 'bǎ', 'bà'], v: ['số tám', 'nhổ', 'cầm, nắm', 'bố'] },
    { s: 'yi', c: ['衣', '姨', '椅', '意'], p: ['yī', 'yí', 'yǐ', 'yì'], v: ['áo', 'dì', 'ghế', 'ý'] },
    { s: 'wu', c: ['屋', '无', '五', '雾'], p: ['wū', 'wú', 'wǔ', 'wù'], v: ['nhà', 'không có', 'số năm', 'sương mù'] },
    { s: 'tang', c: ['汤', '糖', '躺', '烫'], p: ['tāng', 'táng', 'tǎng', 'tàng'], v: ['canh', 'đường (ăn)', 'nằm', 'nóng, bỏng'] },
    { s: 'shi', c: ['诗', '十', '使', '是'], p: ['shī', 'shí', 'shǐ', 'shì'], v: ['thơ', 'số mười', 'khiến, dùng', 'là'] },
    { s: 'qi', c: ['七', '骑', '起', '气'], p: ['qī', 'qí', 'qǐ', 'qì'], v: ['số bảy', 'cưỡi', 'dậy', 'khí, tức giận'] },
    { s: 'tong', c: ['通', '同', '桶', '痛'], p: ['tōng', 'tóng', 'tǒng', 'tòng'], v: ['thông', 'cùng', 'cái thùng', 'đau'] }
  ];
  function toneSVG(only) {
    const tones = only ? [only] : [1, 2, 3, 4], W = 120, G = 14, H = 150, y = (l) => 18 + (5 - l) * 28;
    const path = { 1: `M16 ${y(5)} L104 ${y(5)}`, 2: `M16 ${y(3)} L104 ${y(5)}`, 3: `M16 ${y(2)} Q52 ${y(1) + 26} 104 ${y(4)}`, 4: `M16 ${y(5)} L104 ${y(1)}` };
    const lv = { 1: '5 → 5', 2: '3 → 5', 3: '2 → 1 → 4', 4: '5 → 1' };
    const w = tones.length * (W + G) - G + 22;
    return `<svg class="zh-tsvg" viewBox="0 0 ${w} ${H + 34}" role="img" aria-label="Biểu đồ cao độ thanh điệu"><defs>${tones.map((t) => `<marker id="ar${t}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10z" fill="${TONE_COL[t]}"/></marker>`).join('')}</defs>
      ${[1, 2, 3, 4, 5].map((l) => `<text x="2" y="${y(l) + 4}" font-size="10" fill="#8a93a8">${l}</text>`).join('')}
      ${tones.map((t, i) => { const x = 18 + i * (W + G); return `<g transform="translate(${x} 0)"><rect x="0" y="8" width="${W}" height="${H - 18}" rx="10" fill="#fff" stroke="#E3DED1"/>${[1, 2, 3, 4, 5].map((l) => `<line x1="8" x2="${W - 8}" y1="${y(l)}" y2="${y(l)}" stroke="#eee8dc" stroke-dasharray="3 3"/>`).join('')}<path d="${path[t]}" fill="none" stroke="${TONE_COL[t]}" stroke-width="5" stroke-linecap="round" marker-end="url(#ar${t})"/><text x="${W / 2}" y="${H + 6}" text-anchor="middle" font-weight="800" font-size="13" fill="${TONE_COL[t]}">Thanh ${t}</text><text x="${W / 2}" y="${H + 24}" text-anchor="middle" font-size="11" fill="#55607A">${lv[t]}</text></g>`; }).join('')}</svg>`;
  }

  /* ---------- Bộ sinh câu hỏi ---------- */
  const wl = (w) => `<span class="zh-qh">${w.h}</span> <span class="zh-qp">${w.p}</span>`;
  const others = (pool, w, key) => shuffle(pool.filter((x) => x.h !== w.h && x[key] !== w[key]).map((x) => x[key]));
  const uniq = (a) => [...new Set(a)];
  const G = {
    meaning: (w, pool) => PLT.U.mc(`Từ ${wl(w)} ${sp(w.h)} nghĩa là gì?`, w.v, others(pool, w, 'v'), `${w.h} (${w.p}): ${w.v}.`),
    hanzi: (w, pool) => PLT.U.mc(`“${w.v}” trong ${C.ten.toLowerCase()} là?`, `${w.h} · ${w.p}`, pool.filter((x) => x.h !== w.h && x.v !== w.v).map((x) => `${x.h} · ${x.p}`).sort(() => Math.random() - 0.5), `${w.v} = ${w.h} (${w.p}).`),
    pinyin: (w, pool) => { const dis = uniq([variant(w.p), variant(w.p), variant(w.p)].concat(others(pool, w, 'p'))).filter((x) => x !== w.p); return PLT.U.mc(`<span class="zh-qh">${w.h}</span> có ${C.pLbl} là?`, w.p, dis, `${w.h} đọc là ${w.p} (${w.v}).`); },
    listen: (w, pool) => Object.assign(PLT.U.mc(`${sp(w.h, 'Nghe')} Bấm loa, nghe rồi chọn nghĩa đúng.`, w.v, others(pool, w, 'v'), `Vừa nghe: ${w.h} (${w.p}) – ${w.v}.`), { lbl: '🎧 Nghe và chọn' }),
    listenPy: (w, pool) => { const dis = uniq([variant(w.p), variant(w.p)].concat(others(pool, w, 'p'))).filter((x) => x !== w.p); return Object.assign(PLT.U.mc(`${sp(w.h, 'Nghe')} Nghe rồi chọn ${C.pLbl} đúng.`, w.p, dis, `Vừa nghe: ${w.h} – ${w.p} (${w.v}).`), { lbl: '🎧 Nghe và chọn' }); },
    listenWord: (w, pool) => Object.assign(PLT.U.mc(`${sp(w.h, 'Nghe')} Nghe rồi chọn từ đúng.`, w.h, others(pool, w, 'h'), `Vừa nghe: ${w.h} (${w.p}) – ${w.v}.`), { lbl: '🎧 Nghe và chọn' }),
    write: (w) => (/^[a-z' .-]+$/i.test(w.h) && w.h.length < 24 ? Object.assign(PLT.U.fill(`Viết bằng ${C.ten.toLowerCase()}: “${w.v}” ${sp(w.h)}`, [{ pre: 'Trả lời:', ans: w.h + (w.alt ? '|' + w.alt : ''), post: '' }], `${w.v} = ${w.h} (${w.p}).`), { lbl: '✍️ Viết từ' }) : null),
    match: (ws) => PLT.U.match(`Nối từ ${C.ten.toLowerCase()} với nghĩa tiếng Việt`, ws.slice(0, 4).map((w) => ({ l: `${w.h} (${w.p})`, r: w.v })), ws.slice(0, 4).map((w) => `${w.h} = ${w.v}`).join('; ')),
    toneSee: () => { const s = SETS[Math.floor(Math.random() * SETS.length)], t = Math.floor(Math.random() * 4) + 1; return PLT.U.mc(`Âm tiết <span class="zh-qp zh-lg">${s.p[t - 1]}</span> mang thanh mấy?`, TONE_LBL[t], TONE_LBL.slice(1, 5).filter((x, i) => i + 1 !== t), `${s.p[t - 1]} (${s.c[t - 1]} – ${s.v[t - 1]}) mang ${TONE_LBL[t]}.`); },
    toneHear: () => { const s = SETS[Math.floor(Math.random() * SETS.length)], t = Math.floor(Math.random() * 4) + 1; return Object.assign(PLT.U.mc(`${sp(s.c[t - 1], 'Nghe')} Nghe và chọn Pinyin đúng.`, s.p[t - 1], s.p.filter((x, i) => i + 1 !== t), `Vừa nghe: ${s.c[t - 1]} ${s.p[t - 1]} (${s.v[t - 1]}) – ${TONE_LBL[t]}.`), { lbl: '🎧 Nghe và chọn thanh' }); }
  };
  // Câu hỏi viết tay: ['mc', đề, đáp án, [nhiễu], giải thích] · ['fill', đề, 'đáp án|cách khác', giải thích] · ['hear', câu cần đọc, đáp án, [nhiễu], giải thích, lời dẫn] · ['order', đề, [các mảnh đúng thứ tự], giải thích]
  function fromSpec(s) {
    if (typeof s === 'function') return s(PLT.U, { sp, G });
    const [k] = s;
    if (k === 'mc') return PLT.U.mc(s[1], s[2], s[3], s[4]);
    if (k === 'fill') return Object.assign(PLT.U.fill(s[1] + (/[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/.test(s[2]) ? ' <span class="muted small">(gõ dấu khó thì gõ số thanh sau âm, ví dụ ma3)</span>' : ''), [{ pre: 'Trả lời:', ans: s[2], post: '' }], s[3]), { lbl: 'Điền vào chỗ trống' });
    if (k === 'hear') return Object.assign(PLT.U.mc(`${sp(s[1], 'Nghe')} ${s[5] || 'Nghe rồi chọn đáp án đúng.'}`, s[2], s[3], s[4]), { lbl: '🎧 Nghe và chọn' });
    if (k === 'order') return Object.assign(PLT.U.order(s[1], s[2], s[3]), { lbl: 'Sắp xếp thành câu đúng' });
    return null;
  }
  const keyQ = (q) => q.q + '|' + (q.choices ? q.choices[q.ai] : '');
  function makeQs(o) {
    const n = o.n, pool = o.pool, focus = o.focus.length ? o.focus : pool, kinds = o.kinds;
    const out = [], seen = new Set(); const add = (q) => { if (q && !seen.has(keyQ(q))) { seen.add(keyQ(q)); out.push(q); } };
    shuffle(o.specs || []).slice(0, Math.round(n * (o.ratio || 0.4))).forEach((s) => add(fromSpec(s)));
    let fw = shuffle(focus), i = 0, guard = 0;
    while (out.length < n && guard++ < n * 10) {
      const k = kinds[i % kinds.length]; i++;
      if (!G[k]) continue;
      if (k === 'match') { if (focus.length >= 4) add(G.match(shuffle(focus))); continue; }
      if (k === 'toneSee' || k === 'toneHear') { add(G[k]()); continue; }
      if (pool.length < 4) continue;
      const w = fw[i % fw.length]; if (w) add(G[k](w, pool));
    }
    return shuffle(out).slice(0, n);
  }
  const vocabUpTo = (n) => D().days.filter((d) => d.n <= n).flatMap((d) => d.vocab.map((w) => Object.assign({ d: d.n }, w)));
  const dayOf = (n) => D().days.find((d) => d.n === n);
  const kindsOf = (d) => d.kinds || C.kinds;

  /* ---------- Thành phần giao diện ---------- */
  const crumb = (x) => `<div class="crumb"><a href="#/">Trang chủ</a> › <a href="#/ngoai-ngu">Ngoại ngữ</a> › <a href="${base()}">${C.ten}${C.lvl ? ' ' + C.moc : ''}</a>${x ? ' › ' + x : ''}</div>`;
  function vocabTable(ws) {
    return `<div class="zh-vt">${ws.map((w, i) => `<div class="zh-w"><div class="zh-wh"><span class="zh-n">${i + 1}</span><b class="zh-hz">${w.h}</b>${sp(w.h)}</div><div class="zh-wp">${w.p}</div><div class="zh-wv">${w.v}</div>${w.use ? `<div class="zh-wu">💬 ${w.use}</div>` : ''}${w.ex ? `<div class="zh-ex"><div>${w.ex[0]} ${sp(w.ex[0])}</div><div class="zh-wp">${w.ex[1]}</div><div class="muted">${w.ex[2]}</div></div>` : ''}</div>`).join('')}</div>`;
  }
  function settingsBar() {
    const s = st();
    return `<div class="zh-bar"><label>🐢 Tốc độ đọc <input type="range" min="0.5" max="1.1" step="0.1" value="${s.rate}" id="zrate"> <b id="zrv">${s.rate}</b></label>${sp(C.sample, 'Thử giọng')}</div>`;
  }
  function bindBar() {
    const r = $('#zrate'); if (!r) return;
    r.oninput = () => { st().rate = +r.value; $('#zrv').textContent = r.value; PLT.save(); };
  }

  /* ---------- Trang lộ trình chung #/ngoai-ngu ---------- */
  function hub(app) {
    app.innerHTML = `<section class="hero2 zh-hero"><div class="hw"><div><div class="eyebrow">Miễn phí · Tự học · Từ cơ bản đến nâng cao</div>
        <h1>🌏 Ngoại ngữ: <em>Trung · Anh · Hàn</em></h1>
        <p class="lead">Mỗi thứ tiếng có <b>5 cấp độ</b> bám theo khung chứng chỉ quốc tế (HSK, CEFR/IELTS, TOPIK). Mỗi cấp gồm 30 ngày học, mỗi ngày 30–45 phút: kiến thức mới, luyện tập, hội thoại tình huống, kiểm tra và báo cáo tiến độ.</p>
        <div class="row">${Object.values(COURSES).filter((c) => !c.parent).map((c) => `<a class="btn${c.key === 'tieng-trung' ? '' : ' ghost'}" href="#/${c.key}">${c.icon} ${c.ten}</a>`).join('')}<a class="btn ghost" href="#/ngoai-ngu/thanh-tich">🏆 Thành tích</a></div></div>
        <div class="hcard"><b>Cách tự học hiệu quả</b><ol class="steps"><li>Chọn <b>một</b> thứ tiếng, học đều mỗi ngày, đừng học dồn.</li><li>Luôn <b>bấm loa nghe mẫu</b> và đọc to theo, tự ghi âm để so sánh.</li><li>Đạt <b>≥ 7 điểm</b> bài kiểm tra mới sang ngày mới.</li><li>Cuối tuần ôn <b>thẻ từ chưa nhớ</b>.</li><li>Giữ <b>chuỗi ngày 🔥</b>: mỗi ngày chỉ cần đạt mục tiêu XP.</li></ol></div></div></section>
      ${gbar()}${questsCard()}
      ${Object.values(COURSES).filter((c) => !c.parent).map((c) => { const L = LEVELS[c.key]; const opened = (id) => { const s = PLT.data[id]; return s && s.days ? Object.keys(s.days).filter((k) => Object.keys(s.days[k].parts || {}).length).length : 0; };
        return `<h2>${c.icon} ${c.ten} <small class="muted">· lộ trình 5 cấp</small></h2><p class="muted small">${L.chung}</p>
        <div class="zh-levels">${L.cap.map((x, i) => { const n = opened(i ? c.id + (i + 1) : c.id); return `<${x.co ? `a href="#/${c.key}${i ? '/c' + (i + 1) : ''}"` : 'div'} class="zh-lv${x.co ? ' open' : ''}"><div class="zh-lvh"><span class="zh-lvn">${i + 1}</span><div><b>${x.ten}</b><em>${x.moc}</em></div></div><p>${x.muc}</p><div class="zh-lvf"><span>⏱ ${x.tg}</span><span>${x.co ? (n ? `▶ Đang học · ${n} ngày đã mở` : '▶ Bắt đầu học') : '🔒 Sắp có'}</span></div></${x.co ? 'a' : 'div'}>`; }).join('')}</div>`; }).join('')}
      <p class="muted small">Thời gian mỗi cấp là gợi ý cho người học 30–45 phút/ngày. Quy đổi chứng chỉ chỉ mang tính tham khảo; hãy kiểm tra quy định của kỳ thi tại thời điểm đăng ký.</p>`;
  }

  /* ---------- Trang chủ khoá học ---------- */
  function nextDay() { const ds = D().days; const d = ds.find((x) => !isDone(x.n)); return d ? d.n : (ds.length ? ds[ds.length - 1].n : 1); }
  function home(app) {
    const nd = nextDay(), done = D().days.filter((d) => isDone(d.n)).length, words = vocabUpTo(nd).length;
    const stages = D().stages || [];
    const tools = C.tools.concat([['tu-vung', '🃏', 'Thẻ từ vựng', 'Lật thẻ, nghe đọc, đánh dấu từ đã nhớ.'], ['tien-do', '📈', 'Tiến độ & báo cáo', 'Điểm từng ngày, từ chưa nhớ, tóm tắt để chép sang gia sư AI.']]);
    app.innerHTML = `<section class="hero2 zh-hero"><div class="hw"><div><div class="eyebrow">${C.eyebrow}</div>
        <h1>${C.h1}</h1><p class="lead">${C.lead}</p>
        <div class="row"><a class="btn" href="${base()}/ngay/${nd}">▶ Học hôm nay: Ngày ${nd}</a><a class="btn ghost" href="${base()}/luyen-nhanh">⚡ Luyện nhanh 5 phút</a><a class="btn ghost" href="${base()}/on-tap">🔁 Ôn tập</a></div>
        <div class="facts"><span><b>${done}</b>/30 ngày hoàn thành</span><span><b>${words}</b> từ đã mở</span><span>🔊 Có giọng đọc mẫu</span><a href="#/ngoai-ngu" style="color:inherit">📶 Cấp ${LV()}/5 · Xem lộ trình đầy đủ</a></div></div>
        <div class="hcard">${C.card()}</div></div></section>
      ${gbar()}${voiceNote()}
      <h2>Công cụ luyện tập</h2><div class="feats zh-tools">${tools.map(([r, i, t, m]) => `<a class="feat" href="${r[0] === '#' ? r : base() + '/' + r}"><span>${i}</span><b>${t}</b><p>${m}</p></a>`).join('')}</div>
      <h2>🗺️ Hành trình ${C.ten} cấp ${LV()}</h2><p class="muted small">Mỗi vòng tròn là một ngày học. ✓ là đã đạt, ★ là bài hôm nay, 🏆 là bài kiểm tra tổng hợp. Mỗi câu đúng +2 XP, mỗi phần học +5 XP, đạt bài kiểm tra +20 XP.</p>
      ${stages.map((g) => `<div class="zh-stage"><h3>${g.ten} <small class="muted">· Ngày ${g.tu}–${g.den}</small></h3><div class="zh-path">${D().plan.filter((p) => p.n >= g.tu && p.n <= g.den).map((p, k) => pathNode(p, k, nd)).join('')}</div></div>`).join('')}
      <details class="card"><summary>📋 Xem dạng danh sách</summary>${stages.map((g) => `<h3>${g.ten}</h3><div class="tgrid">${D().plan.filter((p) => p.n >= g.tu && p.n <= g.den).map((p) => dayCard(p)).join('')}</div>`).join('')}</details>
      <p class="muted small">⚠️ Lộ trình 30 ngày giúp xây nền tảng, không cam kết nói thành thạo sau 30 ngày. Chưa hiểu bài thì cứ học lại, không cần chạy theo lịch. Nút 🎤 dùng nhận dạng giọng nói miễn phí của Chrome/Edge (cần mạng) để so câu em nói với câu mẫu; đây là chấm tham khảo, nên kết hợp tự ghi âm để nghe lại ngữ điệu.</p>`;
  }
  function pathNode(p, k, nd) {
    const d = dayOf(p.n), ok = isDone(p.n), cur = p.n === nd && !ok, ds = st().days[p.n], np = ds ? Object.keys(ds.parts).length : 0;
    const big = d && (d.tong || p.n % 7 === 0), x = [0, 1, 2, 1, 0, -1, -2, -1][k % 8] * 56;
    const ic = ok ? '✓' : big ? '🏆' : cur ? '★' : p.n, cls = ok ? 'done' : cur ? 'cur' : np ? 'go' : d ? '' : 'soon';
    return `<div class="zh-pn" style="--x:${x}px">${cur ? '<span class="zh-bub">Bắt đầu!</span>' : ''}<a class="zh-node ${cls}${big ? ' big' : ''}" href="${d ? `${base()}/ngay/${p.n}` : '#'}" title="Ngày ${p.n}: ${esc(p.ten)}"><span>${ic}</span></a><small>${p.n}. ${p.ten}</small>${np && !ok ? `<i class="zh-pp" style="--p:${np * 20}%"></i>` : ''}</div>`;
  }
  function dayCard(p) {
    const has = !!dayOf(p.n), b = bestOf(p.n), ds = st().days[p.n], np = ds ? Object.keys(ds.parts).length : 0;
    const stt = !has ? '<span class="muted">Sắp có</span>' : b != null ? `${b >= PASS ? '✅' : '🟡'} Điểm cao nhất ${fmtD(b)}/10` : np ? `▶ Đang học (${np}/5 phần)` : 'Chưa học';
    return has ? `<a class="tcard${b != null && b >= PASS ? ' zh-done' : ''}" href="${base()}/ngay/${p.n}"><b>Ngày ${p.n}</b><span class="muted small">${p.ten}</span><span class="meta">${stt}</span></a>`
      : `<div class="tcard zh-soon"><b>Ngày ${p.n}</b><span class="muted small">${p.ten}</span><span class="meta">${stt}</span></div>`;
  }

  /* ---------- Buổi học: 5 phần A–E ---------- */
  const PARTS = [['a', 'A', 'Ôn tập', '5 phút'], ['b', 'B', 'Kiến thức mới', '10 phút'], ['c', 'C', 'Luyện tập', '10 phút'], ['d', 'D', 'Hội thoại', '5–10 phút'], ['e', 'E', 'Kiểm tra', '5–10 phút']];
  function lesson(app, n, part) {
    const d = dayOf(n), B = base(); curDay = d ? n : 0;
    if (!d) { app.innerHTML = crumb(`Ngày ${n}`) + `<div class="card">📦 Bài Ngày ${n} đang được biên soạn. Trong lúc chờ, em hãy <a href="${B}/on-tap">ôn tập</a>.</div>`; return; }
    part = part || (dayState(n).parts.a ? (PARTS.find(([k]) => !dayState(n).parts[k]) || ['b'])[0] : 'a');
    const ds = dayState(n), prevWarn = n > 1 && dayOf(n - 1) && !isDone(n - 1) ? `<div class="fb warn">💡 Em chưa đạt ${PASS} điểm bài kiểm tra Ngày ${n - 1}. Nên <a href="${B}/ngay/${n - 1}/e">làm lại Ngày ${n - 1}</a> trước khi học bài mới.</div>` : '';
    app.innerHTML = crumb(`Ngày ${n}`) + gbar() + `<h1>Ngày ${n}: ${d.ten}</h1><p class="muted">${d.muc}</p>${prevWarn}
      <nav class="zh-tabs">${PARTS.map(([k, L, t, m]) => `<a href="${B}/ngay/${n}/${k}" class="${k === part ? 'on' : ''}${ds.parts[k] ? ' ok' : ''}"><b>${ds.parts[k] ? '✔' : L}</b><span>${t}<small>${m}</small></span></a>`).join('')}<a href="${B}/ngay/${n}/bao-cao" class="${part === 'bao-cao' ? 'on' : ''}"><b>📋</b><span>Báo cáo<small>cuối buổi</small></span></a></nav>
      <div id="zbox"></div>`;
    const box = $('#zbox'); const nextBtn = (k) => { const i = PARTS.findIndex((x) => x[0] === k); const nx = PARTS[i + 1]; return `<div class="row center"><a class="btn" href="${B}/ngay/${n}/${nx ? nx[0] : 'bao-cao'}">${nx ? `Sang phần ${nx[1]}: ${nx[2]} ▶` : 'Xem báo cáo buổi học ▶'}</a></div>`; };
    const pool = vocabUpTo(n);
    if (part === 'a') {
      const prev = D().days.filter((x) => x.n < n);
      if (!prev.length) {
        box.innerHTML = `<div class="card"><h3>🔁 Phần A – Ôn tập</h3><p>Hôm nay là ngày đầu tiên nên chưa có bài cũ để ôn. Trước khi học, em chuẩn bị:</p><ul><li>🎧 Tai nghe hoặc loa để nghe giọng đọc mẫu.</li><li>📱 Điện thoại để <b>tự ghi âm</b> giọng mình rồi so với mẫu.</li><li>📒 Một cuốn sổ nhỏ để ghi từ mới.</li></ul>${voiceNote()}${settingsBar()}</div>${nextBtn('a')}`;
        bindBar(); markPart(n, 'a'); return;
      }
      const pd = prev[prev.length - 1];
      box.innerHTML = `<div class="card"><h3>🔁 Phần A – Ôn tập bài cũ</h3><p class="muted">5 câu nhanh về kiến thức các ngày trước. ${pd.loi ? `<br><b>Lỗi hay gặp ở Ngày ${pd.n}:</b> ${pd.loi.join(' · ')}` : ''}</p><div id="pbox"></div></div><div id="znx"></div>`;
      const go = () => play($('#pbox'), makeQs({ n: 5, pool: vocabUpTo(n - 1), focus: vocabUpTo(n - 1), kinds: C.kinds.filter((k) => k !== 'match'), specs: prev.flatMap((x) => x.qs || []), ratio: 0.4 }), { again: go, onDone: () => { markPart(n, 'a'); $('#znx').innerHTML = nextBtn('a'); } });
      go(); return;
    }
    if (part === 'b') {
      box.innerHTML = `<div class="card zh-learn"><h3>📘 Phần B – Kiến thức mới</h3>${voiceNote()}${settingsBar()}${d.hoc}</div>
        ${d.vocab.length ? `<div class="card"><h3>📒 Từ vựng hôm nay (${d.vocab.length} từ)</h3><p class="muted small">Bấm 🔊 để nghe, đọc theo 3–5 lần. Học theo cả câu ví dụ, không học từ đơn lẻ.</p>${vocabTable(d.vocab)}</div>` : ''}
        ${noiCard(d)}<div class="row center"><button class="btn" id="zbok">✔ Em đã đọc và nghe hết phần này</button></div>`;
      bindBar();
      $('#zbok').onclick = () => { markPart(n, 'b'); location.hash = `${B}/ngay/${n}/c`; };
      return;
    }
    if (part === 'c') {
      box.innerHTML = `<div class="card"><h3>✍️ Phần C – Luyện tập (12 câu)</h3><p class="muted small">Nghe – chọn, nhận diện ${C.pLbl}, nghĩa của từ, sắp xếp câu. Sai thì đọc lời giải rồi làm lượt mới.</p><div id="pbox"></div></div><div id="znx"></div>`;
      const go = () => play($('#pbox'), makeQs({ n: 12, pool, focus: d.vocab.length ? d.vocab : pool, kinds: kindsOf(d), specs: d.qs })
        , { again: go, onDone: (ok, t) => { if (ok / t >= 0.5) markPart(n, 'c'); $('#znx').innerHTML = ok / t >= 0.5 ? nextBtn('c') : '<div class="fb warn">Em cần đúng ít nhất một nửa số câu. Đọc lại Phần B rồi làm lượt mới nhé!</div>'; } });
      go(); return;
    }
    if (part === 'd') {
      box.innerHTML = '<div id="dbox"></div><div id="znx"></div>';
      dialog($('#dbox'), d.hoithoai, () => { markPart(n, 'd'); $('#znx').innerHTML = nextBtn('d'); });
      return;
    }
    if (part === 'e') {
      const big = d.kt || { n: 10, min: 10 };
      const b = bestOf(n);
      box.innerHTML = `<div class="card"><h3>📝 Phần E – Kiểm tra cuối buổi</h3><p>${big.n} câu · ${big.min} phút · đạt từ <b>${PASS} điểm</b> là hoàn thành ngày học. ${b != null ? `<span class="pill">Cao nhất ${fmtD(b)}đ</span>` : ''}</p><p class="muted small">Không có đáp án trước khi nộp bài. Phần nói được luyện ở Phần B (🎤) và Phần D, không tính vào điểm bài này.</p><div class="row"><button class="btn" id="zgo">▶ Bắt đầu làm bài</button></div></div><div id="ebox"></div>`;
      $('#zgo').onclick = () => startTest(n, big);
      return;
    }
    if (part === 'bao-cao') { report(box, n); }
  }
  function startTest(n, big) {
    const d = dayOf(n); const pool = vocabUpTo(n);
    const tong = d.tong || n % 7 === 0;
    const focus = tong ? pool : d.vocab.concat(shuffle(vocabUpTo(n - 1)).slice(0, 3));
    const specs = tong ? D().days.filter((x) => x.n <= n).flatMap((x) => x.qs || []) : (d.qs || []).concat(d.qsKt || []);
    const box = $('#ebox'); $('#zgo').closest('.card').hidden = true; document.body.classList.add('in-exam');
    cur = PLT.Q.exam(box, { id: C.id + ':d' + n, subject: C.key, title: `Kiểm tra Ngày ${n} – ${C.ten}: ${d.ten}`, questions: makeQs({ n: big.n, pool, focus, kinds: kindsOf(d), specs, ratio: 0.5 }), minutes: big.min, again: () => startTest(n, big), back: () => { markPart(n, 'e'); location.hash = `${base()}/ngay/${n}/bao-cao`; } });
    const mo = new MutationObserver(() => { const r = $('#rbk', box); if (r) { r.textContent = '📋 Xem báo cáo buổi học'; rewardTest(C.id + ':d' + n); markPart(n, 'e'); mo.disconnect(); } });
    mo.observe(box, { childList: true, subtree: true });
  }

  /* ---------- Hội thoại từng lượt ---------- */
  function dialog(box, dg, onDone) {
    const s = st();
    box.innerHTML = `<div class="card"><h3>💬 Phần D – Hội thoại thực tế</h3><p><b>🎬 Bối cảnh:</b> ${dg.ctx}</p><p><b>🎭 Vai:</b> ${dg.vai}</p>
      <div class="row small"><label><input type="checkbox" id="zpy" ${s.py ? 'checked' : ''}> Hiện ${C.pLbl}</label><label><input type="checkbox" id="zvi" ${s.vi ? 'checked' : ''}> Hiện nghĩa tiếng Việt</label>${settingsBar()}</div>
      <div class="zh-chat${s.py ? '' : ' nopy'}${s.vi ? '' : ' novi'}" id="zc"></div><div id="zop"></div></div>`;
    bindBar();
    const chat = $('#zc', box), op = $('#zop', box);
    $('#zpy', box).onchange = (e) => { s.py = e.target.checked; chat.classList.toggle('nopy', !s.py); PLT.save(); };
    $('#zvi', box).onchange = (e) => { s.vi = e.target.checked; chat.classList.toggle('novi', !s.vi); PLT.save(); };
    const bubble = (who, l) => { chat.insertAdjacentHTML('beforeend', `<div class="zh-b ${who}"><div class="zh-who">${who === 'a' ? dg.ai : '🙋 Em'}</div><div class="zh-l">${l.h} ${sp(l.h)}</div><div class="zh-py">${l.p}</div><div class="zh-vi">${l.v || ''}</div></div>`); chat.lastElementChild.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); };
    let i = 0;
    const turn = () => {
      if (i >= dg.luot.length) { op.innerHTML = `<div class="fb good">🎉 Hoàn thành hội thoại! ${dg.ket || ''}</div><div class="row"><button class="btn ghost small" id="zre">↺ Hội thoại lại từ đầu</button></div>`; $('#zre', op).onclick = () => dialog(box, dg, onDone); onDone && onDone(); return; }
      const t = dg.luot[i]; bubble('a', t.a); setTimeout(() => say(t.a.h), 250);
      const os = shuffle(t.o.map((o, k) => Object.assign({ k }, o)));
      op.innerHTML = `<p class="muted small" style="margin:12px 0 6px">👉 Em sẽ đáp lại thế nào? Hãy <b>đọc to</b> câu em chọn trước khi bấm.</p><div class="opts wide">${os.map((o) => `<button class="opt" data-k="${o.k}"><span class="c"><b class="zh-oh">${o.h}</b> <span class="zh-op">${o.p}</span></span></button>`).join('')}</div><div id="zfb"></div>`;
      op.querySelectorAll('[data-k]').forEach((b) => (b.onclick = () => {
        const o = t.o[+b.dataset.k], fb = $('#zfb', op);
        if (o.ok) {
          SND.ok(); op.querySelectorAll('[data-k]').forEach((x) => (x.disabled = true)); b.classList.add('right');
          bubble('u', o); fb.innerHTML = `<div class="fb good">✔ ${o.f || 'Chính xác!'}</div><div class="small">Đọc to câu này cho máy chấm: ${mic(o.h)}</div><div class="row"><button class="btn small" id="znt">Tiếp tục ▶</button></div>`;
          $('#znt', op).onclick = () => { i++; turn(); };
        } else { SND.bad(); b.classList.add('wrong'); b.disabled = true; fb.innerHTML = `<div class="fb badf">✘ ${o.f || 'Chưa phù hợp, thử lại nhé.'}</div>`; }
      }));
    };
    turn();
  }

  /* ---------- Báo cáo cuối buổi ---------- */
  function reportText(n) {
    const d = dayOf(n), ds = dayState(n), b = bestOf(n), weak = d.vocab.filter((w) => st().known[w.h] === 0).map((w) => w.h);
    const done = D().days.filter((x) => isDone(x.n)).length;
    return [
      C.rep,
      `Khoá: ${C.ten} – Cấp ${LV()}${C.lvl ? ' (' + C.moc + ')' : ''} · Ngày học: Ngày ${n}/30${ds.last ? ' (' + new Date(ds.last).toLocaleDateString('vi-VN') + ')' : ''}`,
      `Chủ đề: ${d.ten}`,
      `Kiến thức mới: ${(d.tom || []).join('; ')}`,
      `Từ vựng: ${d.vocab.length ? d.vocab.map((w) => `${w.h} (${w.p}) ${w.v}`).join(', ') : 'ôn tập, không có từ mới'}`,
      `Ngữ pháp: ${d.nguphap || 'chưa học'}`,
      `Phát âm: ${d.phatam || '—'}${ds.mic && ds.mic[1] ? ` · điểm nói trung bình ${Math.round(ds.mic[0] / ds.mic[1])}% (${ds.mic[1]} lượt, máy nhận giọng chấm tham khảo)` : ' · chưa luyện nói bằng micro'}`,
      `Điểm kiểm tra: ${b != null ? fmtD(b) + '/10 (' + testsOf(n).length + ' lượt)' : 'chưa làm'}`,
      `Phần đã xong: ${PARTS.filter(([k]) => ds.parts[k]).map((x) => x[1]).join(', ') || 'chưa có'}`,
      `Lỗi cần khắc phục: ${(d.loi || []).join('; ')}${weak.length ? '; từ chưa nhớ: ' + weak.join(', ') : ''}`,
      `Bài tập tiếp theo: ${(d.btvn || []).join('; ')}`,
      `Trạng thái tiến độ: ${done}/30 ngày hoàn thành${isDone(n) ? ' · Ngày ' + n + ' ĐẠT' : ' · Ngày ' + n + ' chưa đạt ' + PASS + ' điểm'}`
    ].join('\n');
  }
  function report(box, n) {
    const d = dayOf(n), txt = reportText(n), ok = isDone(n), nx = dayOf(n + 1), B = base();
    box.innerHTML = `<div class="card"><h3>📋 Báo cáo buổi học</h3><pre class="zh-rep">${esc(txt)}</pre><div class="row"><button class="btn ghost small" id="zcp">📋 Sao chép báo cáo</button></div></div>
      <div class="card"><h3>🏠 Bài tập về nhà</h3><ul>${(d.btvn || []).map((x) => `<li>${x}</li>`).join('')}</ul></div>
      <div class="row center">${ok ? (nx ? `<a class="btn" href="${B}/ngay/${n + 1}">Sang Ngày ${n + 1} ▶</a>` : `<a class="btn" href="#/ngoai-ngu">Xem lộ trình cấp tiếp theo ▶</a>`) : `<a class="btn" href="${B}/ngay/${n}/e">${bestOf(n) == null ? 'Làm bài kiểm tra' : 'Làm lại bài kiểm tra'} (cần ≥ ${PASS} điểm)</a>`}<a class="btn ghost" href="${B}/tien-do">📈 Tiến độ chung</a></div>`;
    $('#zcp', box).onclick = (e) => copy(txt, e.target);
  }
  function copy(t, btn) {
    const ok = () => { const o = btn.textContent; btn.textContent = '✔ Đã sao chép'; setTimeout(() => (btn.textContent = o), 1500); };
    if (navigator.clipboard) navigator.clipboard.writeText(t).then(ok, () => fallback()); else fallback();
    function fallback() { const a = document.createElement('textarea'); a.value = t; document.body.appendChild(a); a.select(); try { document.execCommand('copy'); ok(); } catch (e) { /* bỏ qua */ } a.remove(); }
  }

  /* ---------- Luyện 4 thanh (tiếng Trung) ---------- */
  function tones(app) {
    app.innerHTML = crumb('Luyện 4 thanh') + `<h1>🎵 Luyện 4 thanh điệu</h1>${voiceNote()}${settingsBar()}
      <div class="card"><h3>Cao độ của 4 thanh (thang 1 thấp nhất → 5 cao nhất)</h3>${toneSVG()}
        <ul class="small"><li><b style="color:${TONE_COL[1]}">Thanh 1</b>: cao và ngang, giữ giọng ở mức cao, kéo đều.</li><li><b style="color:${TONE_COL[2]}">Thanh 2</b>: từ giữa đi lên cao, giống giọng hỏi lại "Hả?".</li><li><b style="color:${TONE_COL[3]}">Thanh 3</b>: hạ xuống thật thấp rồi mới lên. Khi nói nhanh hoặc đứng trước thanh khác, thường chỉ đọc phần thấp.</li><li><b style="color:${TONE_COL[4]}">Thanh 4</b>: rơi mạnh từ cao xuống thấp, ngắn và dứt khoát.</li><li><b>Thanh nhẹ</b>: không dấu, đọc ngắn và nhẹ, dựa vào âm tiết đứng trước (ví dụ 妈妈 māma, 吗 ma).</li></ul></div>
      <div class="card"><h3>Nghe mẫu từng bộ âm</h3><p class="muted small">Bấm từng ô để nghe, hoặc bấm "Nghe cả 4" rồi đọc theo. Mỗi bộ đọc 3–5 lần.</p>
        <div class="zh-sets">${SETS.map((s) => `<div class="zh-set"><b class="zh-ss">${s.s}</b>${s.c.map((c, i) => `<button class="zh-tc t${i + 1}" data-say="${c}"><span>${c}</span><b>${s.p[i]}</b><small>${s.v[i]}</small></button>`).join('')}<button class="btn ghost small" data-say="${s.c.join('|')}">▶ Nghe cả 4</button></div>`).join('')}</div></div>
      <div class="card"><h3>🎧 Trò chơi: nghe và chọn thanh (10 câu)</h3><div id="pbox"></div></div>`;
    bindBar();
    const go = () => play($('#pbox'), Array.from({ length: 10 }, (_, i) => (i % 3 === 2 ? G.toneSee() : G.toneHear())), { again: go });
    go();
  }

  /* ---------- Bảng âm / bảng chữ ---------- */
  const cell = (x) => `<button class="zh-pc" data-say="${esc(x.c)}"><b>${x.k}</b><span>${x.c}${x.p ? ' ' + x.p : ''}</span>${x.g ? `<small>${x.g}</small>` : ''}</button>`;
  const groupCards = (gs) => gs.map((g) => `<div class="card"><h3>${g.ten}</h3>${g.mo ? `<p class="small">${g.mo}</p>` : ''}<div class="zh-pt">${g.am.map(cell).join('')}</div></div>`).join('');
  function pinyinTable(app) {
    const P = D().pinyin || { initials: [], finals: [] };
    app.innerHTML = crumb('Bảng Pinyin') + `<h1>🔤 Bảng Pinyin</h1>${voiceNote()}${settingsBar()}
      <div class="card"><p>Một âm tiết Pinyin = <b>thanh mẫu</b> (phụ âm đầu) + <b>vận mẫu</b> (phần vần) + <b>thanh điệu</b>. Ví dụ: m + a + ˇ = <b>mǎ</b> 马 (ngựa).</p><p class="muted small">Dòng chữ nhỏ dưới mỗi âm là <b>âm gần giống trong tiếng Việt</b>, chỉ để tham khảo. Hãy nghe mẫu và bắt chước theo giọng đọc là chính.</p></div>
      <h2>Thanh mẫu (phụ âm đầu) – 21 âm + y, w</h2>${groupCards(P.initials)}<h2>Vận mẫu (phần vần)</h2>${groupCards(P.finals)}`;
    bindBar();
  }
  function chartTable(app) {
    const T = D().chart || { ten: 'Bảng âm', intro: '', phan: [] };
    app.innerHTML = crumb(T.ten) + `<h1>🔤 ${T.ten}</h1>${voiceNote()}${settingsBar()}<div class="card">${T.intro}</div>${T.phan.map((s) => `<h2>${s.ten}</h2>${groupCards(s.nhom)}`).join('')}`;
    bindBar();
  }

  /* ---------- Thẻ từ vựng ---------- */
  function cards(app, f) {
    const opened = D().days.filter((d) => d.vocab.length);
    const sel = f || 'all';
    let ws = sel === 'weak' ? vocabUpTo(99).filter((w) => st().known[w.h] === 0) : sel === 'all' ? vocabUpTo(99) : vocabUpTo(99).filter((w) => w.d === +sel);
    ws = shuffle(ws); let i = 0, flip = false;
    app.innerHTML = crumb('Thẻ từ vựng') + `<h1>🃏 Thẻ từ vựng ${C.ten.toLowerCase()}</h1>${voiceNote()}
      <div class="row"><select class="sel" id="zf"><option value="all">Tất cả từ (${vocabUpTo(99).length})</option><option value="weak">Từ chưa nhớ (${vocabUpTo(99).filter((w) => st().known[w.h] === 0).length})</option>${opened.map((d) => `<option value="${d.n}">Ngày ${d.n}: ${d.ten}</option>`).join('')}</select>${settingsBar()}</div>
      <div id="zcard"></div>`;
    $('#zf').value = sel; $('#zf').onchange = (e) => (location.hash = `${base()}/tu-vung/${e.target.value}`);
    bindBar();
    const box = $('#zcard');
    const draw = () => {
      if (!ws.length) { box.innerHTML = '<div class="card">Chưa có từ nào trong nhóm này. 🎉</div>'; return; }
      const w = ws[i], k = st().known[w.h], nk = vocabUpTo(99).filter((x) => st().known[x.h] === 1).length;
      box.innerHTML = `<div class="zh-fc${flip ? ' flip' : ''}" id="zfc" tabindex="0"><div class="zh-front"><b class="zh-big${w.h.length > 6 ? ' zh-long' : ''}">${w.h}</b><span class="muted small">Bấm vào thẻ để lật</span></div>
        <div class="zh-back"><b class="zh-hz">${w.h}</b> ${sp(w.h)}<div class="zh-wp zh-lg">${w.p}</div><div class="zh-wv">${w.v}</div>${w.use ? `<div class="zh-wu">💬 ${w.use}</div>` : ''}${w.ex ? `<div class="zh-ex"><div>${w.ex[0]} ${sp(w.ex[0])}</div><div class="zh-wp">${w.ex[1]}</div><div class="muted">${w.ex[2]}</div></div>` : ''}</div></div>
        <div class="row center"><button class="btn ghost small" id="zpv">◀</button><b>${i + 1}/${ws.length}</b><button class="btn ghost small" id="znx2">▶</button></div>
        <div class="row center"><button class="btn small${k === 0 ? '' : ' ghost'}" id="zno">✗ Chưa nhớ</button><button class="btn small${k === 1 ? '' : ' ghost'}" id="zyes">✔ Đã nhớ</button></div>
        <p class="muted small zh-c">Đã nhớ ${nk}/${vocabUpTo(99).length} từ · Ngày ${w.d}</p>`;
      $('#zfc').onclick = (e) => { if (e.target.closest('[data-say]')) return; flip = !flip; $('#zfc').classList.toggle('flip', flip); if (flip) say(w.h); };
      $('#zpv').onclick = () => { i = (i - 1 + ws.length) % ws.length; flip = false; draw(); };
      $('#znx2').onclick = () => { i = (i + 1) % ws.length; flip = false; draw(); };
      const mark = (v) => { st().known[w.h] = v; PLT.save(); i = (i + 1) % ws.length; flip = false; draw(); };
      $('#zno').onclick = () => mark(0); $('#zyes').onclick = () => mark(1);
    };
    draw();
  }

  /* ---------- Ôn tập tổng hợp ---------- */
  function review(app) {
    const last = Math.max(1, ...D().days.filter((d) => Object.keys(dayState(d.n).parts).length).map((d) => d.n));
    const pool = vocabUpTo(last), weak = pool.filter((w) => st().known[w.h] === 0);
    app.innerHTML = crumb('Ôn tập') + `<h1>🔁 Ôn tập</h1><p class="muted">Câu hỏi lấy từ Ngày 1 đến Ngày ${last}${weak.length ? `, ưu tiên ${weak.length} từ em đánh dấu "chưa nhớ"` : ''}. Mỗi lượt 10 câu, làm bao nhiêu lượt cũng được.</p>${voiceNote()}<div class="card"><div id="pbox"></div></div>`;
    const specs = D().days.filter((d) => d.n <= last).flatMap((d) => d.qs || []);
    const go = () => play($('#pbox'), makeQs({ n: 10, pool, focus: weak.length >= 2 ? weak.concat(shuffle(pool).slice(0, 4)) : pool, kinds: C.kinds, specs, ratio: 0.3 }), { again: go });
    go();
  }

  /* ---------- Luyện nhanh 5 phút (kiểu Duolingo) ---------- */
  function quick(app) {
    const last = Math.max(1, ...D().days.filter((d) => Object.keys(dayState(d.n).parts).length).map((d) => d.n));
    const pool = vocabUpTo(Math.max(last, 1)), weak = pool.filter((w) => st().known[w.h] === 0);
    app.innerHTML = crumb('Luyện nhanh') + gbar() + `<h1>⚡ Luyện nhanh 5 phút</h1><p class="muted">8 câu trộn: nghe, nghĩa, ghép cặp, sắp xếp câu – lấy từ những bài em đã học${weak.length ? ', ưu tiên từ chưa nhớ' : ''}. Mỗi câu đúng +2 XP, không sai câu nào +5 XP.</p>${voiceNote()}<div class="card zh-quick"><div id="pbox"></div></div>`;
    const specs = D().days.filter((d) => d.n <= last).flatMap((d) => d.qs || []).filter((q) => Array.isArray(q) && (q[0] === 'order' || q[0] === 'hear'));
    const go = () => play($('#pbox'), makeQs({ n: 8, pool, focus: weak.length >= 3 ? weak.concat(shuffle(pool).slice(0, 5)) : pool, kinds: C.kinds, specs, ratio: 0.35 }), { again: go, onDone: (ok, n) => { bump('quick'); addXP(5, 'Xong bài luyện nhanh'); const g = gam(); $('#pbox').insertAdjacentHTML('beforeend', `<div class="row center"><a class="btn" href="${base()}/ngay/${nextDay()}">▶ Học tiếp Ngày ${nextDay()}</a><span class="muted small">Hôm nay: ${g.days[today()] || 0}/${g.goal} XP</span></div>`); } });
    go();
  }
  function xpWeek() {
    const g = gam(), t = new Date(), days = [];
    for (let i = 6; i >= 0; i--) { const d = new Date(t); d.setDate(t.getDate() - i); const k = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); days.push([k, g.days[k] || 0, 'CN T2 T3 T4 T5 T6 T7'.split(' ')[d.getDay()]]); }
    const mx = Math.max(g.goal, ...days.map((x) => x[1]));
    return `<div class="card"><h3>⚡ XP 7 ngày qua</h3><div class="zh-week">${days.map(([k, v, l]) => `<div class="${v >= g.goal ? 'hit' : ''}"><b>${v}</b><i style="height:${Math.max(4, (v / mx) * 100)}%"></i><small>${l}</small></div>`).join('')}</div>
      <p class="small">🔥 Chuỗi hiện tại: <b>${streakNow()}</b> ngày · Dài nhất: <b>${g.best}</b> ngày · Tổng: <b>${g.xp}</b> XP</p>
      <div class="row small">🎯 Mục tiêu mỗi ngày: ${[10, 20, 30, 50].map((v) => `<button class="btn small ${g.goal === v ? '' : 'ghost'}" data-goal="${v}">${v} XP${['', ' · nhẹ', ' · vừa', ' · chăm', ' · cao'][[10, 20, 30, 50].indexOf(v) + 1]}</button>`).join('')}</div></div>`;
  }
  document.addEventListener('click', (e) => { const b = e.target.closest && e.target.closest('[data-goal]'); if (!b) return; gam().goal = +b.dataset.goal; PLT.save(); document.querySelectorAll('[data-goal]').forEach((x) => x.classList.toggle('ghost', x !== b)); document.querySelectorAll('.zh-gbar').forEach((x) => (x.outerHTML = gbar())); });

  /* ---------- Tiến độ ---------- */
  function summary() {
    const s = st(), opened = D().days.filter((d) => Object.keys(dayState(d.n).parts).length);
    const words = vocabUpTo(opened.length ? opened[opened.length - 1].n : 0);
    const weak = words.filter((w) => s.known[w.h] === 0).map((w) => w.h);
    const scores = D().days.map((d) => (bestOf(d.n) != null ? `N${d.n}: ${fmtD(bestOf(d.n))}` : null)).filter(Boolean);
    return [`TÓM TẮT TIẾN ĐỘ – ${C.ten.toUpperCase()} CẤP ${LV()}${C.lvl ? ' ' + C.moc : ''} (PLT-Edu)`,
      `Hồ sơ: ${C.profile}`,
      `Ngày học hiện tại: Ngày ${nextDay()}/30 · Đã hoàn thành: ${D().days.filter((d) => isDone(d.n)).map((d) => d.n).join(', ') || 'chưa có'}`,
      `Bài đã học: ${opened.map((d) => `N${d.n} ${d.ten}`).join('; ') || 'chưa có'}`,
      `Từ vựng đã học (${words.length}): ${words.map((w) => `${w.h}(${w.p})`).join(', ')}`,
      `Ngữ pháp đã học: ${opened.map((d) => d.nguphap).filter(Boolean).join('; ') || 'chưa có'}`,
      `Phát âm đã luyện: ${opened.map((d) => d.phatam).filter(Boolean).join('; ') || 'chưa có'}${s.mic && s.mic.n ? ` · điểm nói trung bình ${Math.round(s.mic.sum / s.mic.n)}% (${s.mic.n} lượt)` : ''}`,
      `Điểm kiểm tra: ${scores.join(', ') || 'chưa có'}`,
      `Từ chưa nhớ: ${weak.join(', ') || 'không có'}`,
      `Lỗi thường gặp cần ôn: ${opened.flatMap((d) => (d.loi || []).slice(0, 1)).join('; ') || 'chưa có'}`].join('\n');
  }
  function progress(app) {
    const re = new RegExp('^' + C.id + ':d');
    const t = PLT.data.tests.filter((x) => re.test(x.id));
    const all = vocabUpTo(99), nk = all.filter((w) => st().known[w.h] === 1).length;
    app.innerHTML = crumb('Tiến độ') + `<h1>📈 Tiến độ học ${C.ten.toLowerCase()}</h1>
      <div class="facts zh-facts"><span><b>${D().days.filter((d) => isDone(d.n)).length}</b>/30 ngày hoàn thành</span><span><b>${nk}</b>/${all.length} từ đã nhớ</span><span><b>${t.length}</b> lượt kiểm tra</span>${st().mic && st().mic.n ? `<span>🎤 Nói trung bình <b>${Math.round(st().mic.sum / st().mic.n)}%</b></span>` : ''}</div>
      ${xpWeek()}
      <div class="card"><h3>Lộ trình Cấp ${LV()}</h3><table class="dtable full"><tr><th>Ngày</th><th>Nội dung</th><th>Phần đã xong</th><th>Điểm cao nhất</th></tr>${D().plan.map((p) => { const ds = st().days[p.n], b = bestOf(p.n), has = !!dayOf(p.n); return `<tr><td>${p.n}</td><td>${has ? `<a href="${base()}/ngay/${p.n}">${p.ten}</a>` : `<span class="muted">${p.ten} (sắp có)</span>`}</td><td>${ds ? PARTS.filter(([k]) => ds.parts[k]).map((x) => x[1]).join(' ') : ''}</td><td>${b != null ? `${b >= PASS ? '✅' : '🟡'} ${fmtD(b)}` : ''}</td></tr>`; }).join('')}</table></div>
      <div class="card"><h3>🧾 Tóm tắt tiến độ (chép sang cuộc trò chuyện với gia sư AI)</h3><p class="muted small">Dán đoạn này vào Claude/Gemini để gia sư AI biết em đang học tới đâu, rồi luyện nói thêm.</p><pre class="zh-rep">${esc(summary())}</pre><div class="row"><button class="btn ghost small" id="zcp">📋 Sao chép</button><button class="btn ghost small" id="zrs">🗑️ Xóa tiến độ ${C.ten.toLowerCase()}</button></div></div>
      <p class="muted small">Dữ liệu lưu trên trình duyệt của máy này.</p>`;
    $('#zcp').onclick = (e) => copy(summary(), e.target);
    $('#zrs').onclick = () => { if (confirm(`Xóa toàn bộ tiến độ và điểm kiểm tra ${C.ten.toLowerCase()} trên máy này?`)) { delete PLT.data[C.id]; PLT.data.tests = PLT.data.tests.filter((x) => !re.test(x.id)); PLT.save(); progress(app); } };
  }

  /* ---------- Thẻ luyện nói trong Phần B ---------- */
  function noiCard(d) {
    const noi = d.noi || d.vocab.filter((w) => w.ex).slice(0, 6).map((w) => [w.ex[0], w.ex[2]]);
    if (!noi.length) return '';
    return `<div class="card"><h3>🎤 Luyện nói${d.noi ? ' và ngữ điệu' : ''}</h3><p class="muted small">Bấm 🔊 nghe mẫu, rồi bấm 🎤 và đọc to cả câu. Máy so câu em nói với câu mẫu: <b style="color:#1f9d63">xanh</b> là máy nghe đúng, <b style="color:#d93f45">đỏ</b> là chưa nghe ra.${d.noi ? ' Chữ <b>in đậm</b> là từ được nhấn mạnh; ↗ lên giọng, ↘ xuống giọng, ‿ nối âm.' : ''}</p>${micNote()}${noi.map(sayRow).join('')}</div>`;
  }

  /* ---------- Tải dữ liệu phụ (ngữ pháp, phát âm, đề thi) ---------- */
  const extra = {};
  const need = (f, g) => { if (g()) return Promise.resolve(true); if (!extra[f]) extra[f] = loadScript(f).then(() => !!g()); return extra[f]; };
  const EN = (x) => `<a href="#/tieng-anh">Tiếng Anh</a>${x ? ' › ' + x : ''}`;
  const enCrumb = (x) => `<div class="crumb"><a href="#/">Trang chủ</a> › <a href="#/ngoai-ngu">Ngoại ngữ</a> › ${EN(x)}</div>`;
  const LVS = ['A1', 'A2', 'B1', 'B2', 'C1'];
  const best = (k, id) => { const s = st(); return (s[k] || {})[id]; };
  const setBest = (k, id, v) => { const s = st(); s[k] = s[k] || {}; if (!(s[k][id] >= v)) { s[k][id] = v; PLT.save(); } };

  /* ---------- Sổ tay ngữ pháp #/tieng-anh/ngu-phap ---------- */
  function grammar(app, id) {
    const GR = window.PLT_EN_GRAM || [];
    const t = id && GR.find((x) => x.id === id);
    if (!t) {
      app.innerHTML = enCrumb('Sổ tay ngữ pháp') + `<h1>📐 Sổ tay ngữ pháp tiếng Anh</h1><p class="muted">${GR.length} chủ điểm từ A1 đến C1. Mỗi chủ điểm: công thức, cách dùng, ví dụ có giọng đọc, lỗi người Việt hay mắc và 6 câu luyện nhanh.</p>
        <div class="row"><input class="sel" id="gq" placeholder="🔎 Tìm chủ điểm (ví dụ: present perfect, câu bị động)…" style="flex:1;min-width:240px"></div><div id="gl"></div>`;
      const draw = (q) => { q = (q || '').toLowerCase(); $('#gl').innerHTML = LVS.map((lv) => { const xs = GR.filter((x) => x.lv === lv && (!q || (x.ten + ' ' + x.en).toLowerCase().includes(q))); return xs.length ? `<h2>${lv} <small class="muted">· ${xs.length} chủ điểm</small></h2><div class="tgrid">${xs.map((x) => { const b = best('gram', x.id); return `<a class="tcard${b >= 80 ? ' zh-done' : ''}" href="#/tieng-anh/ngu-phap/${x.id}"><b>${x.ten}</b><span class="muted small">${x.en}</span><span class="meta">${b != null ? `${b >= 80 ? '✅' : '🟡'} Luyện tập ${b}%` : 'Chưa luyện'}</span></a>`; }).join('')}</div>` : ''; }).join('') || '<div class="card">Không tìm thấy chủ điểm phù hợp.</div>'; };
      draw(); $('#gq').oninput = (e) => draw(e.target.value); return;
    }
    const i = GR.indexOf(t), pv = GR[i - 1], nx = GR[i + 1];
    app.innerHTML = enCrumb(`<a href="#/tieng-anh/ngu-phap">Ngữ pháp</a> › ${t.ten}`) + `<h1>${t.ten} <small class="muted">${t.en} · ${t.lv}</small></h1>${settingsBar()}
      <div class="card zh-learn">${stx(t.y)}</div>${t.noi ? `<div class="card"><h3>🎤 Nói theo</h3>${micNote()}${t.noi.map(sayRow).join('')}</div>` : ''}
      <div class="card"><h3>✍️ Luyện nhanh</h3><div id="pbox"></div></div>
      <div class="row center">${pv ? `<a class="btn ghost" href="#/tieng-anh/ngu-phap/${pv.id}">◀ ${pv.ten}</a>` : ''}<a class="btn ghost" href="#/tieng-anh/ngu-phap">☰ Danh sách</a>${nx ? `<a class="btn ghost" href="#/tieng-anh/ngu-phap/${nx.id}">${nx.ten} ▶</a>` : ''}</div>`;
    bindBar();
    const go = () => play($('#pbox'), shuffle(t.qs.map(fromSpec).filter(Boolean)), { again: go, onDone: (ok, n) => setBest('gram', t.id, Math.round((ok / n) * 100)) });
    go();
  }

  /* ---------- Phát âm và ngữ điệu #/tieng-anh/luyen-noi ---------- */
  function speakLab(app, sec) {
    const N = window.PLT_EN_NOI || { phan: [] }, s = st();
    const x = sec && N.phan.find((y) => y.id === sec);
    const avg = s.mic && s.mic.n ? `<span>🎤 Đã nói <b>${s.mic.n}</b> lượt · trung bình <b>${Math.round(s.mic.sum / s.mic.n)}%</b></span>` : '<span>🎤 Chưa có lượt nói nào</span>';
    if (!x) {
      app.innerHTML = enCrumb('Phát âm & ngữ điệu') + `<h1>🎤 Phát âm và ngữ điệu</h1><p class="muted">Nghe mẫu – nói theo – máy chấm từng từ. Đi theo thứ tự từ âm đơn lẻ đến ngữ điệu cả câu.</p>${micNote()}${voiceNote()}<div class="facts zh-facts">${avg}</div>
        <div class="tgrid">${N.phan.map((y, k) => `<a class="tcard" href="#/tieng-anh/luyen-noi/${y.id}"><b>${y.icon} ${k + 1}. ${y.ten}</b><span class="muted small">${y.tom}</span><span class="meta">${y.cap ? y.cap.length + ' cặp âm' : y.cau.length + ' câu'}</span></a>`).join('')}</div>
        <div class="card small"><b>Mẹo:</b> đeo tai nghe có micro, nói ở nơi yên tĩnh, nói <b>cả câu liền mạch</b> như nói chuyện. Máy nhận giọng chỉ biết em nói <b>đúng từ</b> hay không, chưa chấm được ngữ điệu, nên hãy <b>tự ghi âm</b> rồi so với mẫu phần lên – xuống giọng.</div>`;
      return;
    }
    const k = N.phan.indexOf(x), nx = N.phan[k + 1];
    app.innerHTML = enCrumb(`<a href="#/tieng-anh/luyen-noi">Phát âm & ngữ điệu</a> › ${x.ten}`) + `<h1>${x.icon} ${x.ten}</h1>${micNote()}${voiceNote()}${settingsBar()}<div class="card zh-learn">${stx(x.mo)}</div>
      ${x.cap ? `<div class="card"><h3>👂 Cặp âm dễ nhầm</h3><p class="muted small">Nghe từng từ, rồi nói. Máy nghe ra đúng từ em định nói mới tính đúng.</p><div class="zh-pairs">${x.cap.map(([a, b, ga, gb]) => `<div class="zh-pair"><div>${sp(a)} <b>${a}</b> <small class="muted">${ga || ''}</small> ${mic(a)}</div><div>${sp(b)} <b>${b}</b> <small class="muted">${gb || ''}</small> ${mic(b)}</div></div>`).join('')}</div></div>
        <div class="card"><h3>🎧 Trò chơi: nghe và chọn từ đúng (10 câu)</h3><div id="pbox"></div></div>` : ''}
      ${x.cau && x.cau.length ? `<div class="card"><h3>🗣️ Nói theo câu mẫu</h3>${x.cau.map(sayRow).join('')}</div>` : ''}
      <div class="row center"><a class="btn ghost" href="#/tieng-anh/luyen-noi">☰ Danh sách bài</a>${nx ? `<a class="btn" href="#/tieng-anh/luyen-noi/${nx.id}">${nx.ten} ▶</a>` : ''}</div>`;
    bindBar();
    if (x.cap) { const go = () => play($('#pbox'), shuffle(x.cap).concat(shuffle(x.cap)).slice(0, 10).map(([a, b]) => { const t = Math.random() < 0.5 ? a : b; return Object.assign(PLT.U.mc(`${sp(t, 'Nghe')} Em nghe thấy từ nào?`, t, [t === a ? b : a], `Vừa nghe: ${t}.`), { lbl: '🎧 Nghe phân biệt' }); }), { again: go }); go(); }
  }

  /* ---------- Luyện đề chứng chỉ #/tieng-anh/luyen-de ---------- */
  const IELTS = [[9.4, 8.5], [8.7, 8], [8, 7.5], [7.2, 7], [6.5, 6.5], [5.7, 6], [5, 5.5], [4.2, 5], [3.4, 4.5], [2.6, 4], [0, 3.5]];
  const estimate = (loai, d) => (loai === 'toeic' ? `≈ ${Math.max(10, Math.round((d * 99) / 5) * 5)}/990 TOEIC` : loai === 'ielts' ? `≈ IELTS band ${IELTS.find(([m]) => d >= m)[1]}` : `${Math.round(d * 10)}% · ${d >= 7 ? 'đạt mốc ' : 'chưa đạt mốc '}${loai.toUpperCase()} (cần ≥ 70%)`);
  function expand(spec, tag) {
    if (spec[0] === 'read') { const [, pass, items] = spec; return items.map(([q, a, dis, e], k) => Object.assign(PLT.U.mc(`<details class="zh-pass"${k ? '' : ' open'}><summary>📄 Bài đọc${k ? ' (giống câu trên)' : ''}</summary>${pass}</details>${q}`, a, dis, e), { lbl: tag })); }
    if (spec[0] === 'talk') { const [, lines, items] = spec, t = lines.map(plain).join('|'); return items.map(([q, a, dis, e], k) => Object.assign(PLT.U.mc(`${sp(t, k ? 'Nghe lại đoạn hội thoại' : 'Nghe đoạn hội thoại')} ${q}`, a, dis, e + `<details><summary>Lời thoại</summary>${lines.map(esc).join('<br>')}</details>`), { lbl: tag })); }
    const q = fromSpec(spec); return q ? [Object.assign(q, { lbl: tag })] : [];
  }
  function exams(app, a, b) {
    const X = window.PLT_EN_EXAM || { gioi: '', de: [], viet: [], noi: [] };
    if (a === 'de' && b) return examRun(app, X.de.find((x) => x.id === b));
    if (a === 'viet' && b) return writeTask(app, X.viet.find((x) => x.id === b));
    if (a === 'noi' && b) return talkTask(app, X.noi.find((x) => x.id === b));
    const sc = (id) => { const r = PLT.data.tests.filter((t) => t.id === 'en-de:' + id); return r.length ? Math.max(...r.map((t) => t.diem)) : null; };
    app.innerHTML = enCrumb('Luyện đề chứng chỉ') + `<h1>🏅 Luyện đề chứng chỉ tiếng Anh</h1><div class="card zh-learn">${X.gioi}</div>
      <h2>📝 Đề nghe – đọc mô phỏng</h2><div class="tgrid">${X.de.map((x) => { const s = sc(x.id); return `<a class="tcard${s != null && s >= 7 ? ' zh-done' : ''}" href="#/tieng-anh/luyen-de/de/${x.id}"><b>${x.ten}</b><span class="muted small">${x.lv} · ${x.min} phút · ${x.mo}</span><span class="meta">${s != null ? `Cao nhất ${fmtD(s)}/10 · ${estimate(x.loai, s)}` : 'Chưa làm'}</span></a>`; }).join('')}</div>
      <h2>✍️ Luyện viết</h2><div class="tgrid">${X.viet.map((x) => `<a class="tcard" href="#/tieng-anh/luyen-de/viet/${x.id}"><b>${x.ten}</b><span class="muted small">${x.lv} · ${x.min} phút · từ ${x.tu} từ</span><span class="meta">${best('viet', x.id) ? '✔ Đã viết ' + best('viet', x.id) + ' từ' : 'Chưa viết'}</span></a>`).join('')}</div>
      <h2>🗣️ Luyện nói (thi nói IELTS / VSTEP)</h2><div class="tgrid">${X.noi.map((x) => `<a class="tcard" href="#/tieng-anh/luyen-de/noi/${x.id}"><b>${x.ten}</b><span class="muted small">${x.lv} · nói ${x.sec} giây</span><span class="meta">${best('noi', x.id) ? '✔ Đã nói ' + best('noi', x.id) + ' từ' : 'Chưa luyện'}</span></a>`).join('')}</div>
      <p class="muted small">⚠️ Đề do PLT-Edu biên soạn theo <b>dạng bài</b> của kỳ thi thật, không phải đề chính thức. Điểm quy đổi chỉ để tham khảo xu hướng; muốn biết điểm chính xác hãy thi thử tại trung tâm được cấp phép.</p>`;
  }
  function examRun(app, x) {
    if (!x) { app.innerHTML = enCrumb('Luyện đề') + '<div class="card">Không tìm thấy đề này.</div>'; return; }
    app.innerHTML = enCrumb(`<a href="#/tieng-anh/luyen-de">Luyện đề</a> › ${x.ten}`) + `<h1>${x.ten}</h1><div class="card"><p>${x.mo} · <b>${x.min} phút</b></p>${x.phan.map((p) => `<p class="small"><b>${p.ten}:</b> ${p.mo}</p>`).join('')}<p class="muted small">Phần nghe dùng giọng đọc của trình duyệt; mỗi đoạn được nghe lại tối đa 2 lần như thi thật (tự giữ kỷ luật nhé).</p>${voiceNote()}<button class="btn" id="zgo">▶ Bắt đầu làm bài</button></div><div id="ebox"></div>`;
    $('#zgo').onclick = () => {
      $('#zgo').closest('.card').hidden = true; document.body.classList.add('in-exam');
      const qs = x.phan.flatMap((p) => p.items.flatMap((s) => expand(s, p.ten)));
      cur = PLT.Q.exam($('#ebox'), { id: 'en-de:' + x.id, subject: 'tieng-anh', title: 'Luyện đề: ' + x.ten, questions: qs, minutes: x.min, again: () => examRun(app, x), back: () => { location.hash = '#/tieng-anh/luyen-de'; } });
      const mo = new MutationObserver(() => { const r = $('.rscore'); if (r && !$('.zh-est')) { const d = parseFloat(r.textContent.replace(',', '.')); r.insertAdjacentHTML('afterend', `<div class="zh-est">${estimate(x.loai, d)} <small>(quy đổi tham khảo)</small></div>`); rewardTest('en-de:' + x.id); mo.disconnect(); } });
      mo.observe($('#ebox'), { childList: true, subtree: true });
    };
  }
  function writeTask(app, x) {
    if (!x) { app.innerHTML = enCrumb('Luyện viết') + '<div class="card">Không tìm thấy đề này.</div>'; return; }
    const key = 'vb:' + x.id, s = st(); s.draft = s.draft || {};
    app.innerHTML = enCrumb(`<a href="#/tieng-anh/luyen-de">Luyện đề</a> › ${x.ten}`) + `<h1>✍️ ${x.ten}</h1><div class="card"><p class="small muted">${x.lv} · ${x.min} phút · tối thiểu ${x.tu} từ</p><div class="zh-pass">${x.de}</div><details><summary>💡 Gợi ý dàn ý</summary><ul>${x.goi.map((g) => `<li>${g}</li>`).join('')}</ul></details></div>
      <div class="card"><textarea class="zh-ta" id="wta" rows="12" placeholder="Viết bài bằng tiếng Anh ở đây…">${esc(s.draft[key] || '')}</textarea><div class="row small"><b id="wwc">0 từ</b><span id="wtm"></span></div>
      <h3>✅ Tự kiểm tra trước khi nộp</h3><ul class="small">${['Đủ số từ yêu cầu', 'Trả lời đủ mọi ý của đề', 'Có mở bài – thân bài – kết bài, mỗi đoạn một ý', 'Dùng từ nối (firstly, however, as a result…)', 'Chia thì đúng, có chủ ngữ – động từ trong mỗi câu', 'Kiểm tra chính tả, dấu câu, chữ hoa'].map((c) => `<li><label><input type="checkbox"> ${c}</label></li>`).join('')}</ul>
      <div class="row"><button class="btn" id="wai">🤖 Nhận xét bài viết</button><button class="btn ghost" id="wcp">📋 Sao chép đề + bài để nhờ gia sư AI chấm</button></div><div id="wfb"></div>
      <details><summary>📖 Xem bài mẫu tham khảo</summary><div class="zh-pass">${x.mau}</div></details></div>`;
    const ta = $('#wta'), wc = () => ta.value.split(/\s+/).filter(Boolean).length; let t0 = Date.now();
    const up = () => { const n = wc(); $('#wwc').textContent = `${n} từ${n < x.tu ? ` (cần thêm ${x.tu - n})` : ' ✔'}`; s.draft[key] = ta.value; PLT.save(); };
    ta.oninput = up; up();
    const tm = setInterval(() => { const el = $('#wtm'); if (!el) return clearInterval(tm); const m = Math.floor((Date.now() - t0) / 60000); el.textContent = `⏱ ${m}/${x.min} phút`; }, 5000);
    const prompt = () => `Bạn là giám khảo ${x.lv}. Chấm bài viết sau theo 4 tiêu chí (Task response, Coherence & cohesion, Lexical resource, Grammar), cho band ước lượng, chỉ ra 5 lỗi sai kèm cách sửa và viết lại 2 câu hay hơn. Giải thích bằng tiếng Việt.\n\nĐỀ: ${plain(x.de)}\n\nBÀI VIẾT (${wc()} từ):\n${ta.value}`;
    $('#wcp').onclick = (e) => copy(prompt(), e.target);
    $('#wai').onclick = async () => {
      const n = wc(); if (n < 20) { $('#wfb').innerHTML = '<div class="fb warn">Em viết thêm đã nhé (ít nhất 20 từ).</div>'; return; }
      setBest('viet', x.id, n);
      const q = Object.assign(PLT.U.essay(plain(x.de), 10, plain(x.mau), []), { kw: x.keys || [], minCau: Math.ceil(x.tu / 15) });
      $('#wfb').innerHTML = '<p class="muted">Đang nhận xét…</p>';
      const r = PLT.data.settings && PLT.data.settings.apiKey ? (await PLT.Q.aiGrade([{ q, resp: ta.value }]))[0] : PLT.Q.heuristic(q, ta.value);
      $('#wfb').innerHTML = `<div class="fb ${r.diem >= 6.5 ? 'good' : 'warn'}"><b>${fmtD(r.diem)}/10</b> ${r.src === 'ai' ? '(AI nhận xét)' : '(chấm sơ bộ theo độ dài và từ khoá – chưa có khoá AI trong Cài đặt)'}${r.nhan_xet ? '<br>' + esc(r.nhan_xet) : ''}<br><span class="small">Muốn nhận xét chi tiết miễn phí: bấm "Sao chép đề + bài" rồi dán vào Claude/Gemini.</span></div>`;
    };
  }
  let talk = null;
  function talkTask(app, x) {
    if (!x) { app.innerHTML = enCrumb('Luyện nói') + '<div class="card">Không tìm thấy đề này.</div>'; return; }
    app.innerHTML = enCrumb(`<a href="#/tieng-anh/luyen-de">Luyện đề</a> › ${x.ten}`) + `<h1>🗣️ ${x.ten}</h1>${micNote()}<div class="card"><p class="small muted">${x.lv} · chuẩn bị 1 phút · nói ${x.sec} giây</p><div class="zh-pass">${x.cue} ${sp(plain(x.cue))}</div><details><summary>💡 Gợi ý ý tưởng và cụm từ</summary><ul>${x.goi.map((g) => `<li>${g}</li>`).join('')}</ul></details>
      <div class="row"><button class="btn ghost" id="tprep">⏳ Chuẩn bị 60 giây</button><button class="btn" id="tgo">🎤 Bắt đầu nói</button></div><div id="tout"></div><div id="tfb"></div>
      <details><summary>📖 Bài nói mẫu tham khảo</summary><div class="zh-pass">${x.mau} ${sp(plain(x.mau), 'Nghe')}</div></details></div>`;
    $('#tprep').onclick = (e) => { let k = 60; const b = e.target; b.disabled = true; const t = setInterval(() => { k--; b.textContent = `⏳ Còn ${k} giây`; if (k <= 0 || !document.body.contains(b)) { clearInterval(t); b.textContent = '✔ Hết giờ chuẩn bị'; } }, 1000); };
    $('#tgo').onclick = (e) => {
      if (talk) { talk.stop(); return; }
      const b = e.target; b.textContent = '⏹ Dừng'; b.classList.add('rec');
      talk = freeTalk($('#tout'), b, x.sec, (text, wc, wpm) => {
        talk = null; b.textContent = '🎤 Nói lại'; b.classList.remove('rec'); if (!text) return;
        setBest('noi', x.id, wc);
        const used = (x.keys || []).filter((k) => text.toLowerCase().includes(k.toLowerCase()));
        $('#tfb').innerHTML = `<div class="fb ${wc >= x.sec * 1.2 ? 'good' : 'warn'}">📝 <b>${wc} từ</b> · tốc độ <b>${wpm} từ/phút</b> ${wpm < 90 ? '(hơi chậm, mục tiêu 110–150)' : wpm > 170 ? '(hơi nhanh, chậm lại cho rõ)' : '(tốt)'}${x.keys ? `<br>Cụm từ hay đã dùng: ${used.length ? used.join(', ') : 'chưa có'} (${used.length}/${x.keys.length})` : ''}<br><span class="small">Sao chép phần lời nói để nhờ gia sư AI chữa lỗi: <button class="btn ghost small" id="tcp">📋 Sao chép</button></span></div>`;
        $('#tcp').onclick = (ev) => copy(`Bạn là giám khảo nói ${x.lv}. Đây là bản ghi lời nói của tôi (máy nhận dạng, có thể sai chính tả). Hãy cho band ước lượng theo Fluency, Vocabulary, Grammar, chỉ ra lỗi và gợi ý cách nói tự nhiên hơn. Giải thích bằng tiếng Việt.\n\nĐỀ: ${plain(x.cue)}\n\nLỜI NÓI (${wc} từ, ${wpm} từ/phút):\n${text}`, ev.target);
      });
      if (!talk) { b.textContent = '🎤 Bắt đầu nói'; b.classList.remove('rec'); }
    };
  }

  /* ---------- Điều hướng ---------- */
  async function route(app, p) {
    stop();
    const tok = ++rt;
    if (p[0] === 'ngoai-ngu' && p[1] === 'thanh-tich') { afterXP(); return achievements(app); }
    if (p[0] === 'ngoai-ngu' || !COURSES[p[0]]) return hub(app);
    if (/^c[2-5]$/.test(p[1] || '')) { if (!COURSES[p[0] + '-' + p[1]]) { C = COURSES[p[0]]; return hub(app); } p = [p[0] + '-' + p[1]].concat(p.slice(2)); }
    C = COURSES[p[0]];
    const XF = { 'ngu-phap': ['subjects/nn/en-gram.js', () => window.PLT_EN_GRAM], 'luyen-noi': ['subjects/nn/en-noi.js', () => window.PLT_EN_NOI], 'luyen-de': ['subjects/nn/en-exam.js', () => window.PLT_EN_EXAM] };
    if (C.id === 'en' && XF[p[1]]) {
      app.innerHTML = '<p class="muted">Đang tải…</p>'; const ok = await need(...XF[p[1]]); if (tok !== rt) return;
      if (!ok) { app.innerHTML = '<div class="card">Không tải được dữ liệu. Kiểm tra kết nối và tải lại trang.</div>'; return; }
      pickVoice();
      if (p[1] === 'ngu-phap') return grammar(app, p[2]);
      if (p[1] === 'luyen-noi') return speakLab(app, p[2]);
      return exams(app, p[2], p[3]);
    }
    if (!C.data()) {
      app.innerHTML = `<p class="muted">Đang tải bài học ${C.ten.toLowerCase()}…</p>`;
      const ok = await ensure(C); if (tok !== rt) return;
      if (!ok) { app.innerHTML = `<div class="card">Không tải được khoá ${C.ten}. Kiểm tra kết nối và tải lại trang.</div>`; return; }
    }
    pickVoice();
    const k = p[1] || '';
    if (k === 'ngay') return lesson(app, +p[2] || 1, p[3]);
    if (k === 'thanh-dieu' && C.id === 'zh') return tones(app);
    if (k === 'pinyin' && C.id === 'zh') return pinyinTable(app);
    if (k === 'bang-am' || k === 'bang-chu') return chartTable(app);
    if (k === 'tu-vung') return cards(app, p[2]);
    if (k === 'on-tap') return review(app);
    if (k === 'tien-do') return progress(app);
    if (k === 'luyen-nhanh') return quick(app);
    return home(app);
  }
  function stop() { curDay = 0; if (rec) { try { rec.abort(); } catch (e) { /* bỏ qua */ } rec = null; } if (talk) { talk.stop(); talk = null; } if (cur) { cur.stop(); cur = null; } if (TTS) speechSynthesis.cancel(); document.body.classList.remove('in-exam'); }
  PLT.LANG = { route, stop, say, toneSVG, SETS, sp, into, plain, mic, sayRow, COURSES, LEVELS, addXP, bump, ensure, streakNow, rank };
  PLT.ZH = PLT.LANG; // tương thích với file dữ liệu tiếng Trung
})();

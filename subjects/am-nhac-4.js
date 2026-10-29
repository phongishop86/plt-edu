/* Âm nhạc 4 – KNTT. Hát, nghe nhạc, đọc nhạc, nhạc cụ, thường thức âm nhạc; câu hỏi do PLT-Edu soạn. */
PLT.KB.build({
  id: 'am-nhac-4', lop: 4, mon: 'Âm nhạc', icon: '🎵', so: false, share: PLT.KB.SHARE.amnhac,
  topics: [
    { hk: 1, ten: 'Nốt nhạc và khuông nhạc', bai: ['Hát', 'Đọc nhạc', 'Lí thuyết âm nhạc', 'Vận dụng – Sáng tạo'],
      lt: ['Khuông nhạc có 5 dòng, 4 khe; <b>khoá Son</b> đặt đầu khuông.', 'Hình nốt: <b>nốt trắng</b> (dài 2 phách), <b>nốt đen</b> (1 phách), <b>nốt móc đơn</b> (nửa phách).', '<b>Dấu lặng</b>: kí hiệu ngưng nghỉ không phát ra âm thanh.'],
      q: `? Nốt trắng có độ dài bằng mấy nốt đen? | 2 | 1 | 4 | 3
? Hai nốt móc đơn có độ dài bằng: | Một nốt đen | Một nốt trắng | Một nốt tròn | Nửa nốt đen
? Kí hiệu đặt ở đầu khuông nhạc để xác định tên nốt là: | Khoá Son | Dấu lặng | Vạch nhịp | Dấu chấm
? Khuông nhạc có: | 5 dòng, 4 khe | 4 dòng, 5 khe | 6 dòng | 3 dòng
+ Dấu lặng là kí hiệu ngưng nghỉ.
- Nốt móc đơn dài hơn nốt trắng.
= Nốt trắng = 2 phách
= Nốt đen = 1 phách
= Nốt móc đơn = Nửa phách
> Nốt móc đơn > Nốt đen > Nốt trắng` },
    { hk: 1, ten: 'Nhịp và tiết tấu', bai: ['Hát', 'Đọc nhạc', 'Nhạc cụ', 'Vận dụng – Sáng tạo'],
      lt: ['<b>Nhịp 2/4</b>: mỗi ô nhịp có 2 phách, mỗi phách bằng một nốt đen; phách 1 mạnh, phách 2 nhẹ.', '<b>Vạch nhịp</b> chia các ô nhịp; <b>vạch kết thúc</b> ở cuối bài.'],
      q: `? Trong nhịp 2/4, mỗi ô nhịp có mấy phách? | 2 | 4 | 3 | 1
? Trong nhịp 2/4, phách mạnh là phách: | Thứ nhất | Thứ hai | Cả hai | Không có
? Vạch dùng để chia các ô nhịp gọi là: | Vạch nhịp | Khoá Son | Dấu lặng | Khuông nhạc
+ Ô nhịp 2/4 có thể gồm hai nốt đen.
- Nhịp 2/4 có 4 phách trong mỗi ô nhịp.` },
    { hk: 1, ten: 'Nhạc cụ và dân ca', bai: ['Hát dân ca', 'Nhạc cụ giai điệu', 'Thường thức âm nhạc', '*Ôn tập cuối học kì I'],
      lt: ['Nhạc cụ giai điệu: kèn phím (melodica), sáo dọc (recorder), đàn phím điện tử.', 'Dân ca các vùng miền: quan họ (Bắc Ninh), hò, lí (miền Trung, Nam Bộ), dân ca Tây Nguyên…'],
      q: `? Kèn phím (melodica) phát ra âm thanh bằng cách: | Thổi hơi và bấm phím | Gõ | Kéo dây | Lắc
? Sáo recorder là nhạc cụ: | Thổi | Gõ | Kéo | Gảy
+ Kèn phím có thể chơi được giai điệu bài hát.
- Sáo recorder là nhạc cụ gõ.` },
    { hk: 2, ten: 'Nhạc sĩ và tác phẩm', bai: ['Hát', 'Nghe nhạc', 'Thường thức âm nhạc', 'Vận dụng – Sáng tạo'],
      lt: ['<b>Mô-da</b> (W. A. Mozart, Áo): thần đồng âm nhạc, sáng tác từ 5 tuổi.', '<b>Bét-tô-ven</b> (L. v. Beethoven, Đức): nhạc sĩ vĩ đại, vẫn sáng tác khi bị điếc.', 'Nhạc sĩ Việt Nam viết cho thiếu nhi: <b>Phạm Tuyên</b> (Chú voi con ở Bản Đôn), <b>Hoàng Long</b>, <b>Mộng Lân</b>…'],
      q: `? Nhạc sĩ được mệnh danh là "thần đồng âm nhạc" người Áo là: | Mô-da | Bét-tô-ven | Trai-cốp-xki | Văn Cao
? Nhạc sĩ vẫn sáng tác dù bị điếc là: | Bét-tô-ven | Mô-da | Sô-panh | Phạm Tuyên
? Bài "Chú voi con ở Bản Đôn" của nhạc sĩ: | Phạm Tuyên | Văn Cao | Đỗ Nhuận | Lưu Hữu Phước
+ Mô-da sáng tác những bản nhạc đầu tiên từ khi còn rất nhỏ.
- Bét-tô-ven là nhạc sĩ người Việt Nam.
= Mô-da = Thần đồng âm nhạc người Áo
= Bét-tô-ven = Nhạc sĩ người Đức
= Phạm Tuyên = Chú voi con ở Bản Đôn
= Văn Cao = Tiến quân ca` },
    { hk: 2, ten: 'Biểu diễn và sáng tạo', bai: ['Hát', 'Đọc nhạc', 'Biểu diễn', '*Ôn tập cuối năm'],
      lt: ['Biểu diễn: hát kết hợp nhạc cụ, vận động; thể hiện sắc thái to – nhỏ, nhanh – chậm.', 'Sáng tạo: đặt lời mới, gõ tiết tấu đệm, gõ đệm theo nhịp.'],
      q: `? Thể hiện bài hát vui tươi nên hát: | Nhanh vừa, sáng, rộn ràng | Rất chậm, buồn | Thì thầm | Gào thét
? Gõ đệm theo nhịp 2/4, em nhấn mạnh vào phách: | Thứ nhất | Thứ hai | Không phách nào | Cuối bài
+ Hát đúng sắc thái giúp bài hát truyền cảm hơn.
- Biểu diễn không cần luyện tập trước.` }
  ],
  essays: {
    1: [['Kể tên các hình nốt em đã học và độ dài của chúng.', ['nốt trắng', 'nốt đen', 'móc đơn'], 'Nốt trắng dài 2 phách, nốt đen 1 phách, nốt móc đơn nửa phách (hai móc đơn bằng một nốt đen).'],
      ['Nhịp 2/4 là gì?', ['2 phách', 'nốt đen', 'mạnh'], 'Nhịp 2/4: mỗi ô nhịp có 2 phách, mỗi phách bằng một nốt đen; phách thứ nhất mạnh, phách thứ hai nhẹ.']],
    2: [['Giới thiệu ngắn về một nhạc sĩ em biết.', ['nhạc sĩ', 'sáng tác'], 'Ví dụ: Mô-da – nhạc sĩ người Áo, thần đồng âm nhạc, sáng tác từ nhỏ, để lại nhiều tác phẩm nổi tiếng.'],
      ['Em sẽ biểu diễn một bài hát như thế nào để thật hấp dẫn?', ['luyện tập', 'sắc thái', 'tự tin'], 'Thuộc lời, hát đúng giai điệu; thể hiện sắc thái phù hợp; kết hợp động tác, nhạc cụ đệm; tự tin, tươi vui.']]
  }
});

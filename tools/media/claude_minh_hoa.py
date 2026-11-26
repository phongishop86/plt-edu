# Tạo 17 ảnh minh hoạ cho khoá Học Claude bằng HTML/SVG → JPG (Playwright).
import asyncio, sys, json
from playwright.async_api import async_playwright

OUT = '/home/claude/plt-edu/ai/assets/img/'
W, H = 1376, 768

CSS = """
*{box-sizing:border-box;margin:0;padding:0}
body{width:%dpx;height:%dpx;overflow:hidden;font-family:Inter,'Noto Color Emoji',sans-serif;color:#FAF7F0;
 background:radial-gradient(1200px 700px at 78%% 10%%,#2d4475 0,#1B2A4A 55%%,#131f38 100%%);position:relative}
.blob{position:absolute;border-radius:50%%;filter:blur(2px)}
.grid{position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.07) 1.5px,transparent 1.6px);background-size:34px 34px}
.win{position:absolute;background:#FFFDF8;color:#1B2A4A;border-radius:22px;box-shadow:0 30px 60px rgba(0,0,0,.45);overflow:hidden}
.win .tb{height:40px;background:#EFEAE0;display:flex;align-items:center;gap:8px;padding:0 16px;font-weight:700;font-size:15px;color:#55607A}
.win .tb i{width:12px;height:12px;border-radius:50%%;display:inline-block}
.win .bd{padding:20px}
.dark.win{background:#0f1729;color:#d7e3ff}.dark.win .tb{background:#1d2742;color:#93a4c8}
.tile{position:absolute;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;border-radius:24px;
 background:rgba(255,255,255,.09);border:2px solid rgba(255,255,255,.18);backdrop-filter:blur(4px);box-shadow:0 18px 36px rgba(0,0,0,.3);font-weight:800;text-align:center}
.tile .e{line-height:1}
.chip{display:inline-block;padding:7px 16px;border-radius:99px;font-weight:800;font-size:18px;margin:4px}
.bub{max-width:80%%;padding:12px 16px;border-radius:18px;font-size:19px;line-height:1.35;margin:10px 0;font-weight:500}
.me{background:#FBE6D6;margin-left:auto;border-bottom-right-radius:4px}
.ai{background:#E1EFEB;border-bottom-left-radius:4px}
.lbl{position:absolute;font-weight:800;letter-spacing:.14em;text-transform:uppercase;font-size:15px;color:#F4A261}
.mono{font-family:'DejaVu Sans Mono',monospace}
svg.ar{position:absolute;inset:0;pointer-events:none}
""" % (W, H)

def blobs():
    return ('<div class="grid"></div>'
            '<div class="blob" style="width:420px;height:420px;right:-120px;top:-140px;background:#D9661F;opacity:.85"></div>'
            '<div class="blob" style="width:180px;height:180px;left:-60px;bottom:-50px;background:#2BA99A;opacity:.7"></div>'
            '<div class="blob" style="width:90px;height:90px;right:300px;bottom:40px;background:#F2C94C;opacity:.8"></div>')

def win(x, y, w, h, title, body, dark=False, extra=''):
    return (f'<div class="win{" dark" if dark else ""}" style="left:{x}px;top:{y}px;width:{w}px;height:{h}px;{extra}">'
            f'<div class="tb"><i style="background:#ff6159"></i><i style="background:#ffbd2e"></i><i style="background:#28c941"></i>&nbsp;{title}</div>'
            f'<div class="bd">{body}</div></div>')

def tile(x, y, e, t='', s=150, bg=None, fs=None):
    st = f'left:{x}px;top:{y}px;width:{s}px;height:{s}px;' + (f'background:{bg};border-color:{bg};' if bg else '')
    return f'<div class="tile" style="{st}"><div class="e" style="font-size:{fs or int(s*.42)}px">{e}</div>' + (f'<div style="font-size:{max(14,int(s*.12))}px">{t}</div>' if t else '') + '</div>'

def chip(t, bg, fg='#1B2A4A'):
    return f'<span class="chip" style="background:{bg};color:{fg}">{t}</span>'

def arrows(lines, col='#F4A261'):
    p = ''.join(f'<path d="{d}" stroke="{col}" stroke-width="5" fill="none" stroke-linecap="round" stroke-dasharray="2 14" marker-end="url(#m)"/>' for d in lines)
    return f'<svg class="ar" viewBox="0 0 {W} {H}"><defs><marker id="m" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="{col}"/></marker></defs>{p}</svg>'

def chatbody(pairs):
    return ''.join(f'<div class="bub {c}">{t}</div>' for c, t in pairs)

def bars(vals, col='#D9661F', h=170):
    m = max(vals)
    return '<div style="display:flex;align-items:flex-end;gap:12px;height:%dpx">' % h + ''.join(
        f'<div style="flex:1;height:{int(v/m*h)}px;background:{col};border-radius:8px 8px 3px 3px;opacity:{.55+.45*v/m}"></div>' for v in vals) + '</div>'

S = {}
S['cl01-1'] = (win(110, 150, 640, 470, 'claude.ai', chatbody([('me', 'Giới thiệu 5 việc bạn giúp được một nhân viên văn phòng?'), ('ai', '1. Soạn email · 2. Tóm tắt tài liệu · 3. Lập bảng Excel · 4. Làm slide · 5. Viết công cụ nhỏ…')]) +
               '<div style="margin-top:18px">' + chip('Opus', '#F4A261') + chip('Sonnet', '#bfe3dc') + chip('Haiku', '#dfe6ff') + '</div>')
               + '<div class="win" style="left:800px;top:250px;width:210px;height:400px;border-radius:30px;padding:16px">' + chatbody([('me', 'Chụp tài liệu…'), ('ai', 'Đã đọc xong!')]) + '</div>'
               + tile(1060, 150, '🌐', 'Web', 160) + tile(1060, 340, '💻', 'Máy tính', 160) + tile(1060, 530, '📱', 'Điện thoại', 160))
parts6 = [('🎯', 'Mục tiêu'), ('👥', 'Bối cảnh'), ('📎', 'Tài liệu'), ('📐', 'Định dạng'), ('🧾', 'Ví dụ'), ('✅', 'Kiểm tra')]
S['cl02-1'] = (''.join(tile(90 + (i % 3) * 175, 140 + (i // 3) * 190, e, t, 160, ['#D9661F', '#2BA99A', '#3B6FE0', '#9B51E0', '#c98a1b', '#1f9d63'][i]) for i, (e, t) in enumerate(parts6))
               + arrows([f'M650 340 C 720 340, 740 360, 800 360'])
               + win(820, 170, 470, 420, 'Prompt hoàn chỉnh', '<div style="font-size:19px;line-height:1.6"><b>Bạn là</b> chuyên viên marketing…<br><b>Cho</b> khách văn phòng…<br><b>Dựa vào</b> &lt;bang_gia&gt;…<br><b>Dưới</b> 120 chữ, 3 ý…<br><b>Giọng</b> thân thiện như mẫu…<br><b>Thiếu</b> thông tin thì hỏi lại.</div>'))
def folder(x, y, e, t, docs, col):
    return (f'<div class="win" style="left:{x}px;top:{y}px;width:330px;height:380px;border-top:14px solid {col}"><div class="bd">'
            f'<div style="font-size:54px">{e}</div><div style="font-size:24px;font-weight:800;margin:8px 0 12px">{t}</div>'
            + ''.join(f'<div style="display:flex;gap:10px;align-items:center;font-size:17px;margin:8px 0;background:#F3EFE6;border-radius:10px;padding:8px 10px">📄 {d}</div>' for d in docs) + '</div></div>')
S['cl03-1'] = (folder(110, 200, '📐', 'Giáo án Toán 3', ['SGK Toán 3.pdf', 'Khung giáo án.docx', 'Hướng dẫn dự án'], '#2BA99A')
               + folder(520, 150, '🎬', 'Kênh video mẹo', ['Giọng văn kênh.md', 'Chủ đề đã làm.xlsx', 'Quy định nội dung AI'], '#D9661F')
               + folder(930, 230, '📊', 'Báo cáo tuần', ['Mẫu báo cáo.docx', 'Thuật ngữ đơn vị', 'Hướng dẫn dự án'], '#3B6FE0'))
S['cl04-1'] = (tile(110, 150, '📄', 'PDF', 150) + tile(110, 320, '📊', 'Excel', 150) + tile(110, 490, '🖼️', 'Ảnh chụp', 150)
               + arrows(['M280 225 C 380 230, 400 350, 470 370', 'M280 395 L 470 395', 'M280 565 C 380 560, 400 430, 470 420'])
               + win(490, 150, 520, 470, 'Phân tích doanh số.xlsx', '<div style="font-weight:800;font-size:20px;margin-bottom:12px">Doanh số 12 tháng</div>' + bars([5, 7, 6, 9, 8, 11, 10, 12, 9, 13, 14, 16]) +
                     '<div style="margin-top:16px;font-size:18px;line-height:1.6">✔ Tổng, trung bình tính bằng code<br>✔ 3 nhận xét cho chủ cửa hàng</div>')
               + tile(1060, 190, '🔎', 'Tìm web', 170, '#2BA99A') + tile(1060, 410, '📑', 'Nguồn', 170, '#3B6FE0'))
calc = ('<div style="font-weight:800;font-size:22px;margin-bottom:10px">💻 Báo giá sửa laptop</div>'
        + ''.join(f'<div style="display:flex;justify-content:space-between;font-size:19px;padding:9px 12px;margin:6px 0;border-radius:10px;background:{"#FBE6D6" if i%2==0 else "#F3EFE6"}"><span>☑ {a}</span><b>{b}</b></div>' for i, (a, b) in enumerate([('Vệ sinh máy', '150.000'), ('Thay pin', '650.000'), ('Nâng RAM 8GB', '450.000')]))
        + '<div style="display:flex;justify-content:space-between;font-size:24px;font-weight:900;margin-top:14px;color:#D9661F"><span>Tổng</span><span>1.250.000đ</span></div>'
        + '<div style="margin-top:12px;background:#D9661F;color:#fff;text-align:center;font-weight:800;border-radius:12px;padding:10px;font-size:18px">Sao chép gửi Zalo</div>')
S['cl05-1'] = (win(90, 170, 470, 430, 'Chat', chatbody([('me', 'Làm trang tính tiền sửa laptop, dùng trên điện thoại, màu cam.'), ('ai', 'Đây là công cụ của bạn → mở ở khung bên cạnh.'), ('me', 'Thêm nút sao chép gửi Zalo.')]))
               + arrows(['M575 380 L 660 380']) + win(680, 110, 480, 560, 'Artifact · Xem trước', calc)
               + '<div style="position:absolute;left:690px;top:685px;font-size:15px;color:#F4A261;font-weight:800">* Giá minh hoạ</div>'
               + tile(1190, 150, '🔗', 'Chia sẻ link', 150))
def slide(x, y, r, t, col):
    return f'<div class="win" style="left:{x}px;top:{y}px;width:460px;height:270px;transform:rotate({r}deg)"><div style="height:16px;background:{col}"></div><div class="bd"><div style="font-size:24px;font-weight:800">{t}</div><div style="height:10px;background:#E3DED1;border-radius:6px;margin:16px 0 8px;width:80%"></div><div style="height:10px;background:#E3DED1;border-radius:6px;margin:8px 0;width:65%"></div><div style="height:10px;background:#E3DED1;border-radius:6px;margin:8px 0;width:72%"></div></div></div>'
S['cl06-1'] = (win(100, 160, 380, 450, 'Dàn ý · đã duyệt ✔', '<ol style="font-size:20px;line-height:2;padding-left:26px"><li>Vấn đề hiện tại</li><li>Giải pháp</li><li>Cách hoạt động</li><li>Số liệu trước – sau</li><li>Rủi ro và kiểm soát</li><li>Kế hoạch triển khai</li></ol>')
               + arrows(['M495 380 L 590 380']) + slide(700, 380, 4, 'Rủi ro và kiểm soát', '#2BA99A') + slide(660, 260, -2, 'Số liệu trước – sau', '#3B6FE0') + slide(620, 140, -6, 'Giải pháp', '#D9661F'))
code = '&lt;svg viewBox="0 0 1080 1920"&gt;\n  &lt;rect fill="url(#nen)"/&gt;\n  &lt;text class="tieu-de"&gt;\n    3 PHÍM TẮT\n  &lt;/text&gt;\n  &lt;g class="ban-phim"&gt;…&lt;/g&gt;\n&lt;/svg&gt;'
poster = ('<div style="position:absolute;left:640px;top:110px;width:300px;height:540px;border-radius:26px;overflow:hidden;box-shadow:0 30px 60px rgba(0,0,0,.45);'
          'background:linear-gradient(160deg,#1e3a8a,#6d28d9);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px;text-align:center">'
          '<div style="font-size:44px;font-weight:900;line-height:1.1;-webkit-text-stroke:2px #000">3 PHÍM TẮT<br>WINDOWS</div><div style="font-size:90px">⌨️</div>'
          '<div style="width:64px;height:64px;border-radius:50%;background:conic-gradient(#D9661F 0 33%,#2BA99A 0 66%,#3B6FE0 0);display:grid;place-items:center;font-weight:900">PLT</div></div>')
film = '<div style="position:absolute;left:990px;top:200px;width:300px;display:grid;grid-template-columns:1fr 1fr;gap:12px">' + ''.join(f'<div style="height:110px;border-radius:12px;background:{c};border:4px solid #0f1729;display:grid;place-items:center;font-size:40px">{e}</div>' for c, e in [('#2BA99A', '▶'), ('#3B6FE0', '⌨️'), ('#D9661F', '➜'), ('#9B51E0', '✔'), ('#c98a1b', '🔤'), ('#1f9d63', '🎞️')]) + '</div>'
S['cl07-1'] = (win(80, 150, 500, 470, 'anh-bia.svg', f'<pre class="mono" style="font-size:19px;line-height:1.6;color:#9fe0c9">{code}</pre>', dark=True)
               + arrows(['M595 380 L 630 380']) + poster + film + '<div class="lbl" style="left:995px;top:160px">Khung video → MP4</div>')
S['cl08-1'] = (tile(90, 260, '🎬', 'Claude: kịch bản', 200, '#D9661F') + tile(390, 260, '🖼️', 'Flow / Gemini', 200, '#3B6FE0') + tile(690, 260, '✂️', 'CapCut', 200, '#2BA99A') + tile(990, 260, '📱', 'Đăng video', 200, '#9B51E0')
               + arrows(['M300 360 L 380 360', 'M600 360 L 680 360', 'M900 360 L 980 360'])
               + '<div class="win" style="left:200px;top:520px;width:980px;height:170px"><div class="bd" style="font-size:18px">'
               + '<div style="display:grid;grid-template-columns:70px 110px 1fr 1fr;gap:6px;font-weight:800;color:#55607A;margin-bottom:6px"><span>Cảnh</span><span>Giây</span><span>Hình</span><span>Lời / chữ</span></div>'
               + ''.join(f'<div style="display:grid;grid-template-columns:70px 110px 1fr 1fr;gap:6px;padding:4px 0;border-top:1px solid #E3DED1"><b>{a}</b><span>{b}</span><span>{c}</span><span>{d}</span></div>' for a, b, c, d in [('1', '0–3s', 'Cận tay bấm phím', '“Máy chậm? Thử 3 phím này!”'), ('2', '3–12s', 'Màn hình + mũi tên', 'Win + D: về màn hình chính'), ('3', '12–25s', 'Chia đôi màn hình', 'Win + mũi tên: xếp cửa sổ')])
               + '</div></div>' + '<div class="lbl" style="left:90px;top:200px">Dây chuyền làm video ngắn</div>')
def book(x, h, col, t):
    return f'<div style="position:absolute;left:{x}px;bottom:150px;width:120px;height:{h}px;background:{col};border-radius:10px 10px 4px 4px;box-shadow:inset -10px 0 0 rgba(0,0,0,.15),0 10px 20px rgba(0,0,0,.3);display:flex;align-items:center;justify-content:center"><div style="writing-mode:vertical-rl;transform:rotate(180deg);font-weight:800;font-size:20px">{t}</div></div>'
S['cl09-1'] = (book(110, 380, '#D9661F', 'kich-ban-video') + book(245, 330, '#2BA99A', 'bao-cao-ngay') + book(380, 420, '#3B6FE0', 'giao-an-toan') + book(515, 300, '#9B51E0', 'bao-gia-khach')
               + '<div style="position:absolute;left:90px;bottom:120px;width:580px;height:30px;background:#6b4a2b;border-radius:8px"></div>'
               + win(760, 120, 520, 520, 'SKILL.md', '<pre class="mono" style="font-size:19px;line-height:1.55;white-space:pre-wrap">---\nname: kich-ban-video-meo\ndescription: Soạn kịch bản video ngắn 25-40s về mẹo máy tính.\n---\n# Cách làm\n1. Câu mở 3 giây gây tò mò\n2. Bảng cảnh: Cảnh | Giây | Hình | Lời\n3. Kết: kêu gọi theo dõi\n4. Nhắc gắn nhãn nội dung AI</pre>'))
cx, cy = 688, 384
spokes = [('📧', 'Gmail', 300, 180), ('📁', 'Drive', 300, 520), ('📅', 'Lịch', 688, 70), ('🐙', 'GitHub', 1076, 180), ('💬', 'Slack', 1076, 520), ('🧩', 'MCP', 688, 640)]
S['cl10-1'] = (arrows([f'M{cx} {cy} L {x} {y}' for _, _, x, y in spokes], '#2BA99A')
               + ''.join(tile(x - 75, y - 75, e, t, 150) for e, t, x, y in spokes)
               + f'<div style="position:absolute;left:{cx-110}px;top:{cy-110}px;width:220px;height:220px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#F4A261,#D9661F);display:grid;place-items:center;font-size:30px;font-weight:900;box-shadow:0 0 0 18px rgba(244,162,97,.18),0 30px 60px rgba(0,0,0,.4);text-align:center">Claude<br><span style="font-size:18px">kết nối</span></div>')
days = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']
S['cl11-1'] = ('<div style="position:absolute;left:120px;top:150px;width:420px;height:420px;border-radius:50%;background:#FFFDF8;box-shadow:0 30px 60px rgba(0,0,0,.45)">'
               + ''.join(f'<div style="position:absolute;left:204px;top:16px;width:12px;height:30px;background:#1B2A4A;border-radius:4px;transform-origin:6px 194px;transform:rotate({k*30}deg)"></div>' for k in range(12))
               + '<div style="position:absolute;left:204px;top:90px;width:12px;height:120px;background:#D9661F;border-radius:6px;transform-origin:6px 120px;transform:rotate(-60deg)"></div>'
               + '<div style="position:absolute;left:206px;top:60px;width:8px;height:150px;background:#1B2A4A;border-radius:6px"></div>'
               + '<div style="position:absolute;left:190px;top:190px;width:40px;height:40px;border-radius:50%;background:#1B2A4A"></div></div>'
               + win(640, 130, 640, 250, 'Lịch tuần', '<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:10px;text-align:center">' + ''.join(f'<div><div style="font-weight:800;color:#55607A">{d}</div><div style="height:90px;border-radius:12px;margin-top:8px;display:grid;place-items:center;font-size:34px;background:{"#E1EFEB" if i<5 else "#F3EFE6"}">{"✅" if i<5 else ""}</div></div>' for i, d in enumerate(days)) + '</div>')
               + win(640, 420, 640, 220, 'Tác vụ định kỳ · 07:00 Thứ Hai', '<div style="font-size:20px;line-height:1.7">📅 Tóm tắt lịch họp tuần này<br>📧 Email khách chưa trả lời &gt; 3 ngày<br>🚫 Không gửi email cho ai</div>'))
S['cl12-1'] = (win(100, 110, 820, 560, '🔒 cua-hang-laptop.vn/so-sanh', '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px">' + ''.join(f'<div style="background:#F3EFE6;border-radius:14px;padding:14px;font-size:17px"><div style="font-size:50px;text-align:center">💻</div><b>{n}</b><br>{c}<br><span style="color:#D9661F;font-weight:800">Giá minh hoạ</span></div>' for n, c in [('Máy A', 'i5 · 16GB'), ('Máy B', 'Ryzen 5 · 16GB'), ('Máy C', 'i7 · 32GB')]) + '</div>'
                     + '<div style="margin-top:18px;background:#E1EFEB;border-radius:14px;padding:12px 16px;font-size:17px"><b>Claude ghi vào bảng:</b><div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px;margin-top:6px"><b>Máy</b><b>Cấu hình</b><b>Nguồn</b><span>Máy A</span><span>i5 · 16GB</span><span>trang 1</span><span>Máy B</span><span>Ryzen 5 · 16GB</span><span>trang 2</span></div></div>'
                     + '<div style="margin-top:14px;font-size:18px">Mật khẩu: <span style="display:inline-block;width:230px;height:38px;border:2px dashed #d93f45;border-radius:10px;vertical-align:middle"></span> <b style="color:#d93f45">🔒 bạn tự nhập</b></div>')
               + '<svg style="position:absolute;left:560px;top:250px;filter:drop-shadow(0 6px 10px rgba(0,0,0,.45))" width="54" height="70" viewBox="0 0 27 35"><path d="M2 2 L2 28 L9 21 L14 33 L19 31 L14 19 L24 19 Z" fill="#fff" stroke="#1B2A4A" stroke-width="2" stroke-linejoin="round"/></svg>'
               + tile(990, 140, '🌐', 'Claude in Chrome', 210, '#3B6FE0') + tile(990, 400, '🛡️', 'Duyệt từng bước', 210, '#2BA99A'))
term = ('<pre class="mono" style="font-size:20px;line-height:1.65;white-space:pre-wrap"><span style="color:#7dd3a8">PS C:\\AI_Apps\\PLT-Edu&gt;</span> claude\n'
        '<span style="color:#F4A261">●</span> Thêm trang "Liên hệ" theo khung web.\n<span style="color:#93a4c8">  Kế hoạch:</span>\n  1. Đọc index.html, assets/js/app.js\n  2. Thêm trang #/lien-he\n  3. Chạy thử, không có lỗi Console\n'
        '<span style="color:#7dd3a8">  ✔ Đã sửa 2 file · Đã chạy thử</span></pre>')
tree = '<div style="font-size:19px;line-height:1.9">📁 PLT-Edu<br>&nbsp;&nbsp;📄 CLAUDE.md<br>&nbsp;&nbsp;📄 index.html<br>&nbsp;&nbsp;📁 assets/js<br>&nbsp;&nbsp;&nbsp;&nbsp;📄 app.js ✏️<br>&nbsp;&nbsp;📁 .claude/skills</div>'
S['cl13-1'] = win(90, 120, 830, 520, 'Claude Code · Terminal', term, dark=True) + win(960, 170, 320, 420, 'Dự án', tree)
def agent(x, y, e, t, d, col):
    return f'<div class="win" style="left:{x}px;top:{y}px;width:300px;height:190px;border-left:12px solid {col}"><div class="bd"><div style="font-size:42px">{e}</div><b style="font-size:22px">{t}</b><div style="font-size:16px;color:#55607A;margin-top:4px">{d}</div></div></div>'
S['cl14-1'] = (agent(538, 90, '🧑‍💼', 'Claude chính', 'Nhận việc, chia việc, tổng hợp', '#D9661F')
               + arrows(['M688 290 C 688 340, 300 340, 280 430', 'M688 290 L 688 430', 'M688 290 C 688 340, 1076 340, 1096 430'])
               + agent(130, 440, '🔍', 'Explore', 'Tìm file liên quan', '#2BA99A') + agent(538, 440, '🗺️', 'Plan', 'Lập kế hoạch từng bước', '#3B6FE0') + agent(946, 440, '📝', 'Kiểm tra tiếng Việt', 'Rà lỗi, đáp án trùng', '#9B51E0'))
S['cl15-1'] = (tile(90, 230, '🐙', 'GitHub', 200, '#24292f') + tile(400, 230, '▲', 'Vercel', 200, '#000') + arrows(['M300 330 L 390 330', 'M610 330 L 700 330', 'M560 440 C 560 560, 640 600, 720 600'])
               + win(720, 150, 560, 330, '🔒 edu.phatloctech.vn', '<div style="font-size:30px;font-weight:900">PLT-Edu</div><div style="color:#55607A;font-size:18px;margin:6px 0 16px">Học tập · Luyện thi · AI Edu</div>' + chip('👤 Đăng nhập Google', '#F4A261') + '<div style="margin-top:16px;height:12px;width:80%;background:#E3DED1;border-radius:6px"></div><div style="margin-top:10px;height:12px;width:60%;background:#E3DED1;border-radius:6px"></div>')
               + tile(730, 520, '🔥', 'Firebase', 170, '#c98a1b') + '<div class="win" style="left:930px;top:530px;width:350px;height:150px"><div class="bd" style="font-size:17px"><b>Firestore Rules</b><br><span class="mono" style="font-size:15px">allow read, write: if<br>request.auth.uid == uid;</span></div></div>')
pieces = [('📂', 'Project', '#2BA99A'), ('📘', 'Skill', '#D9661F'), ('🔌', 'Kết nối', '#3B6FE0'), ('⏰', 'Tác vụ', '#9B51E0'), ('⌨️', 'Claude Code', '#c98a1b')]
S['cl16-1'] = (''.join(tile(100 + i * 190, 150, e, t, 170, c) for i, (e, t, c) in enumerate(pieces))
               + arrows([f'M{185+i*190} 330 C {185+i*190} 420, 520 420, 560 470' for i in range(5)], '#F4A261')
               + win(330, 470, 760, 230, 'Trợ lý AI cho công việc của bạn', '<div style="display:flex;gap:24px;align-items:center;font-size:20px"><div style="font-size:64px">🤝</div><div>Việc thật · lặp lại · tốn giờ<br><b>Đo trước – sau</b> · Quy tắc dùng AI an toàn</div></div>')
               + tile(1100, 150, '🏆', 'Dự án cuối', 170, '#1f9d63'))
S['cap-claude'] = S['cl10-1']

async def main(only):
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--no-sandbox'])
        pg = await b.new_page(viewport={'width': W, 'height': H})
        for k, body in S.items():
            if only and k not in only: continue
            await pg.set_content(f'<!doctype html><html><head><meta charset="utf-8"><style>{CSS}</style></head><body>{blobs()}{body}</body></html>')
            await pg.wait_for_timeout(150)
            await pg.screenshot(path=OUT + k + '.jpg', type='jpeg', quality=86)
            print('ok', k)
        await b.close()
asyncio.run(main(sys.argv[1:]))

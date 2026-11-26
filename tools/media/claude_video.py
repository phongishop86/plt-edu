# Dựng video tóm tắt cho 16 buổi khoá Học Claude: HTML động → khung JPEG → MP4 (ffmpeg).
# Mỗi cảnh: 0,8–1,4 giây chuyển động vào, rồi giữ hình tĩnh. Không lồng tiếng.
import asyncio, json, os, re, sys, shutil, subprocess, html as H
from playwright.async_api import async_playwright

W, Hh, FPS = 1280, 720, 30
D = json.load(open('/home/claude/media/claude.json'))
import base64
def b64(path, mime): return f'data:{mime};base64,' + base64.b64encode(open(path, 'rb').read()).decode()
IMGD = '/home/claude/plt-edu/ai/assets/img/'
LOGO = b64('/home/claude/plt-edu/assets/img/logo-96.png', 'image/png')
OUT = '/home/claude/plt-edu/ai/assets/video/'
TMP = '/home/claude/media/tmp/'
ENC = ['-c:v', 'libx264', '-preset', 'veryfast', '-crf', '23', '-pix_fmt', 'yuv420p', '-r', str(FPS)]

CSS = """
*{box-sizing:border-box;margin:0;padding:0}
body{width:1280px;height:720px;overflow:hidden;font-family:Inter,'Noto Color Emoji',sans-serif;color:#FAF7F0;
 background:radial-gradient(900px 600px at 80% 0,#2d4475 0,#1B2A4A 55%,#131f38 100%);position:relative}
.grid{position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.06) 1.5px,transparent 1.6px);background-size:30px 30px}
.blob{position:absolute;border-radius:50%}
.a{opacity:0}
.foot{position:absolute;left:56px;right:56px;bottom:26px;display:flex;align-items:center;gap:12px;font-size:16px;color:#93a4c8;font-weight:600}
.foot img{width:30px;height:30px;border-radius:50%}
.foot .sp{flex:1}
.eb{font-weight:800;letter-spacing:.14em;text-transform:uppercase;font-size:17px;color:#F4A261}
h1{font-size:54px;line-height:1.15;font-weight:900;margin:14px 0}
h2{font-size:40px;line-height:1.2;font-weight:900;margin:10px 0 22px}
.big{font-size:34px;line-height:1.45;font-weight:600;color:#FAF7F0}
.big b{color:#F4A261}
.ctr{position:absolute;left:0;right:0;top:0;bottom:70px;display:flex;flex-direction:column;justify-content:center;padding:0 84px}
.card{background:#FFFDF8;color:#1B2A4A;border-radius:22px;box-shadow:0 24px 48px rgba(0,0,0,.4)}
.num{width:96px;height:96px;border-radius:28px;background:#D9661F;display:grid;place-items:center;font-size:52px;font-weight:900;flex:none;box-shadow:0 14px 30px rgba(0,0,0,.35)}
.li{display:flex;gap:18px;align-items:flex-start;font-size:27px;line-height:1.35;margin:14px 0;font-weight:600}
.li i{flex:none;width:40px;height:40px;border-radius:50%;background:#1f9d63;display:grid;place-items:center;font-style:normal;font-size:24px}
table{border-collapse:collapse;width:100%;font-size:21px}td,th{padding:10px 14px;text-align:left;border-bottom:1px solid #E3DED1}th{background:#F3EFE6}
"""
JS = """
window.at=function(t){document.querySelectorAll('.a').forEach(function(e){var d=(+e.dataset.i||0)*0.13;var p=Math.max(0,Math.min(1,(t-d)/0.55));var q=1-Math.pow(1-p,3);
e.style.opacity=q;e.style.transform='translate('+((e.dataset.x?+e.dataset.x:0)*(1-q))+'px,'+((e.dataset.x?0:34)*(1-q))+'px) scale('+(e.dataset.s?(0.85+0.15*q):1)+')';});}
"""

def clean(s):
    s = re.sub(r'<code>(.*?)</code>', r'\1', s)
    s = re.sub(r'<(?!/?b>)[^>]+>', '', s)
    return s

def page(body, n, t):
    deco = ('<div class="grid"></div><div class="blob" style="width:360px;height:360px;right:-120px;top:-150px;background:#D9661F;opacity:.85"></div>'
            '<div class="blob" style="width:150px;height:150px;left:-50px;bottom:-60px;background:#2BA99A;opacity:.7"></div>')
    foot = f'<div class="foot"><img src="{LOGO}"><span>PLT-Edu · AI Edu · Học Claude</span><span class="sp"></span><span>Buổi {n} · {H.escape(t)}</span></div>'
    return f'<!doctype html><html><head><meta charset="utf-8"><style>{CSS}</style><script>{JS}</script></head><body>{deco}{body}{foot}</body></html>'

def scenes(i, l):
    n, t = i + 1, l['t']; P = D['parts'][str(l['p'])]['name']; cov = l['s'][0]['img']
    S = []
    S.append((4.5, f'<img class="a" data-i="2" data-s="1" src="{b64(IMGD + cov + ".jpg", "image/jpeg")}" style="position:absolute;right:40px;top:150px;width:620px;border-radius:22px;box-shadow:0 30px 60px rgba(0,0,0,.5)">'
                    f'<div style="position:absolute;left:60px;top:150px;width:560px"><div class="eb a" data-i="0">{H.escape(P)}</div><div class="a" data-i="0" style="font-size:30px;font-weight:800;color:#93a4c8;margin-top:18px">Buổi {n}</div>'
                    f'<h1 class="a" data-i="1">{H.escape(t)}</h1></div>'))
    S.append((6.5, f'<div class="ctr"><div class="eb a" data-i="0" style="font-size:20px">🎯 Mục tiêu buổi học</div><p class="big a" data-i="1" style="margin-top:26px;font-size:44px">{H.escape(l["g"])}</p></div>'))
    for k, p in enumerate(l['pts']):
        txt = clean(p); fs = 44 if len(re.sub('<[^>]+>', '', txt)) < 150 else 38
        S.append((7.5 if len(txt) > 150 else 6.5, f'<div class="ctr"><div style="display:flex;gap:36px;align-items:flex-start">'
                        f'<div class="num a" data-i="0" data-s="1">{k+1}</div><div><div class="eb a" data-i="0">Điều cần nhớ</div><p class="big a" data-i="1" style="margin-top:16px;font-size:{fs}px">{txt}</p></div></div></div>'))
    sl = next((s for s in l['s'] if s['k'] in ('steps', 'cards', 'table')), None)
    if sl:
        if sl['k'] == 'table':
            rows = sl['rows'][:5]
            body = ('<div class="card a" data-i="1" style="padding:20px"><table><tr>' + ''.join(f'<th>{h}</th>' for h in sl['head']) + '</tr>'
                    + ''.join('<tr>' + ''.join(f'<td>{c}</td>' for c in r) + '</tr>' for r in rows) + '</table></div>')
        else:
            items = sl['items'][:6]; cols = 4 if len(items) == 4 else 3 if len(items) in (3, 5, 6) else 2
            body = (f'<div style="display:grid;grid-template-columns:repeat({cols},1fr);gap:18px">' + ''.join(
                f'<div class="card a" data-i="{j+1}" style="padding:22px;min-height:{170 if len(items)>3 else 230}px">'
                + (f'<div style="width:46px;height:46px;border-radius:14px;background:#D9661F;color:#fff;display:grid;place-items:center;font-weight:900;font-size:24px;margin-bottom:12px">{j+1}</div>' if sl['k'] == 'steps' else '')
                + f'<div style="font-size:25px;font-weight:800;margin-bottom:8px">{c[0]}</div><div style="font-size:20px;line-height:1.4;color:#55607A">{c[1]}</div></div>' for j, c in enumerate(items)) + '</div>')
        S.append((8.5, f'<div class="ctr" style="padding:0 70px"><h2 class="a" data-i="0">{sl["title"]}</h2>{body}</div>'))
    rc = next(s for s in l['s'] if s['k'] == 'recap')
    S.append((7, '<div class="ctr"><div class="eb a" data-i="0" style="font-size:20px">✅ Mang về dùng ngay</div><div style="margin-top:20px">'
                 + ''.join(f'<div class="li a" data-i="{j+1}" style="font-size:33px;margin:20px 0"><i style="width:46px;height:46px">✓</i><span>{x}</span></div>' for j, x in enumerate(rc['items'])) + '</div></div>'))
    ac = next((s for s in l['s'] if s['k'] == 'act'), None)
    if ac:
        tt = ac["title"].replace("Thực hành: ", ""); tt = tt[:1].upper() + tt[1:]
        S.append((6.5, f'<div class="ctr"><div class="eb a" data-i="0" style="font-size:20px">🛠️ Thực hành ngay</div><h2 class="a" data-i="1" style="margin-top:14px;font-size:44px">{tt}</h2>'
                     + ''.join(f'<div class="li a" data-i="{j+2}" style="font-size:29px"><i style="background:#3B6FE0">{j+1}</i><span>{x}</span></div>' for j, x in enumerate(ac['items'][:3]))
                     + '<div class="a" data-i="6" style="margin-top:26px;font-size:24px;color:#F4A261;font-weight:800">Bài đầy đủ, slide và quiz: edu.phatloctech.vn/ai/claude</div></div>'))
    return S

async def render(pg, n, l):
    d = f'{TMP}cl{n:02d}/'; shutil.rmtree(d, ignore_errors=True); os.makedirs(d)
    files = []
    for k, (dur, body) in enumerate(scenes(n - 1, l)):
        fd = f'{d}s{k}/'; os.makedirs(fd)
        await pg.set_content(page(body, n, l['t'])); await pg.wait_for_load_state('load'); await pg.wait_for_timeout(80)
        mx = await pg.evaluate("Math.max(0,...[...document.querySelectorAll('.a')].map(e=>+e.dataset.i||0))")
        nf = int(round((0.6 + mx * 0.13) * FPS)) + 1
        for f in range(nf):
            await pg.evaluate(f'at({f / FPS})')
            await pg.screenshot(path=f'{fd}{f:03d}.jpg', type='jpeg', quality=92)
        hold = max(0.5, dur - nf / FPS)
        tmp, fin = f'{d}s{k}.tmp.mp4', f'{d}s{k}.mp4'
        r = subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-framerate', str(FPS), '-i', f'{fd}%03d.jpg', '-vf', f'tpad=stop_mode=clone:stop_duration={hold:.2f},format=yuv420p'] + ENC + [tmp])
        if r.returncode: raise SystemExit('ffmpeg lỗi ' + tmp)
        os.rename(tmp, fin); files.append(fin)
    open(f'{d}list.txt', 'w').write(''.join(f"file '{f}'\n" for f in files))
    tmp = f'{OUT}cl{n:02d}.tmp.mp4'
    r = subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', f'{d}list.txt', '-c', 'copy', '-movflags', '+faststart', tmp])
    if r.returncode: raise SystemExit('concat lỗi')
    os.rename(tmp, f'{OUT}cl{n:02d}.mp4')

async def shots(pg, n, l):
    # Chụp khung "đầy nhất" của mỗi cảnh để kiểm tra trước khi xuất
    for k, (dur, body) in enumerate(scenes(n - 1, l)):
        await pg.set_content(page(body, n, l['t'])); await pg.wait_for_timeout(120)
        await pg.evaluate('at(5)'); await pg.screenshot(path=f'/home/claude/media/chk_{n:02d}_{k}.jpg', type='jpeg', quality=80)

async def main(mode, which):
    os.makedirs(OUT, exist_ok=True); os.makedirs(TMP, exist_ok=True)
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--no-sandbox'])
        pg = await b.new_page(viewport={'width': W, 'height': Hh})
        for n in which:
            if mode == 'check': await shots(pg, n, D['lessons'][n - 1])
            else: await render(pg, n, D['lessons'][n - 1]); print('video', n, flush=True)
        await b.close()

mode = sys.argv[1]; which = [int(x) for x in sys.argv[2:]] or list(range(1, 17))
asyncio.run(main(mode, which))

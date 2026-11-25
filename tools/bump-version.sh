#!/bin/sh
# Đổi mã phiên bản (?v=...) để trình duyệt tải lại file mới sau mỗi lần cập nhật.
# Đồng thời đổi VER trong sw.js → máy học sinh xoá bản offline cũ, tải bản mới.
cd "$(dirname "$0")/.." || exit 1
V=$(date +%Y%m%d%H%M)
sed -i -E "s/\?v=[0-9]+/?v=$V/g; s/PLT_VER = '[0-9]+'/PLT_VER = '$V'/" index.html
sed -i -E "s/^const VER = '[0-9]+';/const VER = '$V';/" sw.js
echo "Phiên bản: $V"

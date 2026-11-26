/* Ảnh dự phòng: ảnh chưa có thì hiện khung minh họa kèm mô tả */
window.AIPH = function (img) {
  var d = document.createElement("div");
  d.className = "ph";
  d.setAttribute("role", "img");
  d.setAttribute("aria-label", img.alt || "Hình minh họa");
  var s = document.createElement("span");
  s.textContent = img.alt || "";
  d.appendChild(s);
  img.replaceWith(d);
};
window.AIIMG = function (base, name, alt, cls) {
  var a = String(alt || "").replace(/"/g, "&quot;");
  return '<img class="' + (cls || "") + '" src="' + base + 'assets/img/' + name + '.jpg" alt="' + a + '" loading="lazy" onerror="AIPH(this)">';
};

/* AI Edu là một phần của PLT-Edu: dùng chung thanh tài khoản (assets/js/eco.js ở thư mục gốc) */
(function () {
  var me = document.currentScript && document.currentScript.src || "";
  var base = me.replace(/assets\/js\/common\.js.*$/, "");
  window.PLT_ECO = { current: "ai", base: base, root: base + "../" };
  var s = document.createElement("script"); s.src = base + "../assets/js/eco.js?v=4"; s.defer = true;
  document.head.appendChild(s);
})();

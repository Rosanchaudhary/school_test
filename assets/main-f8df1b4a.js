/* empty css              */ (function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) s(e);
  new MutationObserver((e) => {
    for (const o of e)
      if (o.type === "childList")
        for (const n of o.addedNodes)
          n.tagName === "LINK" && n.rel === "modulepreload" && s(n);
  }).observe(document, { childList: !0, subtree: !0 });
  function c(e) {
    const o = {};
    return (
      e.integrity && (o.integrity = e.integrity),
      e.referrerPolicy && (o.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : e.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function s(e) {
    if (e.ep) return;
    e.ep = !0;
    const o = c(e);
    fetch(e.href, o);
  }
})();
window.onclick = function (t) {
  const r = document.querySelector(".dropdown");
  !t.target.matches(".dropdown-toggle") &&
    !t.target.closest(".dropdown-menu") &&
    r.querySelector(".dropdown-menu.show") &&
    r.querySelector(".dropdown-menu.show").classList.remove("show");
};

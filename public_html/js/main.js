(() => {
  const refs = {
    openCookieText: document.querySelector(".cookieBtnArrow"),
    closeCookieBtn: document.querySelector(".cookieBtnClose"),
    accept: document.querySelector(".cookieBtnAccept"),
    cookieText: document.querySelector(".cookiesText"),
    cookiesContainer: document.querySelector(".cookiesContainer"),
    openBurger: document.querySelector(".input"),
    burger: document.querySelector(".navList"),
  };

  refs.openCookieText.addEventListener("click", showInfo);
  refs.closeCookieBtn.addEventListener("click", closeCookies);
  refs.accept.addEventListener("click", closeCookies);
  refs.openBurger.addEventListener("click", burger);

  function burger() {
    refs.burger.classList.toggle("is-vissually");
  }

  function showInfo() {
    refs.cookieText.classList.toggle("is-vissualy");
    refs.openCookieText.classList.toggle("rotate");
  }
  function closeCookies() {
    refs.cookiesContainer.classList.toggle("is-hidden");
  }
})();

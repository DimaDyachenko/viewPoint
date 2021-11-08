(() => {
    const refs = {
      openCookieText: document.querySelector('.cookieBtnArrow'),
      closeCookieBtn: document.querySelector('.cookieBtnClose'),
      accept: document.querySelector('.cookieBtnAccept'),
      cookieText: document.querySelector('.cookiesText'),
      cookiesContainer: document.querySelector('.cookiesContainer'),
    };
  
    refs.openCookieText.addEventListener('click', toggleModal);
    refs.closeCookieBtn.addEventListener('click', closeCookies);
    refs.accept.addEventListener('click', closeCookies)
  
    function toggleModal() {
      refs.cookieText.classList.toggle('is-vissualy');
      refs.openCookieText.classList.toggle('rotate')
    }
    function closeCookies() {
        refs.cookiesContainer.classList.toggle('is-hidden')
    }
  })();
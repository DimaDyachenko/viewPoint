(() => {
    const refs = {
      openModalBtn: document.querySelector('.mainButton'),
      closeModalBtn: document.querySelector('.modalClose'),
      modal: document.querySelector('.backdrop'),
    };
  
    refs.openModalBtn.addEventListener('click', modal);
    refs.closeModalBtn.addEventListener('click', modal);
  
    function modal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();
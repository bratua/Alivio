const refs = {
  openModalBtn: document.querySelector('.open-button'),
  openModalLink: document.querySelector('.sign-in'),
  closeModalBtn: document.querySelector('.close-button'),
  modal: document.querySelector('.backdrop'),
  bodyModal: document.querySelector('body'),
  formRegister: document.querySelector('.register'),
  formSignin: document.querySelector('.signin'),
};

// console.log(refs.openModalLink);

refs.closeModalBtn.addEventListener('click', closeModal);
refs.openModalBtn.addEventListener('click', openModal);
refs.openModalLink.addEventListener('click', openModal);

function closeModal() {
  refs.modal.classList.add('is-hidden');
  refs.bodyModal.classList.remove('modal-open');
  refs.formSignin.classList.remove('show');
  refs.formRegister.classList.remove('show');
}

function openModal(evt) {
  evt.preventDefault();
  // console.log(evt);
  refs.modal.classList.remove('is-hidden');
  refs.bodyModal.classList.add('modal-open');

  if (evt.target.classList.contains('sign-in')) {
    refs.formSignin.classList.add('show');

    return;
  }
  refs.formRegister.classList.add('show');
}

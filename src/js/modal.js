const refs = {
  openModalBtn: document.querySelector('.open-button'),
  openModalLink: document.querySelector('.open-link'),
  closeModalBtn: document.querySelector('.close-button'),
  modal: document.querySelector('.backdrop'),
  bodyModal: document.querySelector('body'),
};

// console.log(refs.openModalLink);

refs.closeModalBtn.addEventListener('click', closeModal);
refs.openModalBtn.addEventListener('click', openModal);
refs.openModalLink.addEventListener('click', openModal);

function closeModal() {
  refs.modal.classList.add('is-hidden');
  refs.bodyModal.classList.remove('modal-open');
}

function openModal(evt) {
  evt.preventDefault();
  // console.log(evt);
  if (evt.target.classList.contains('open-link')) {
  }
  refs.modal.classList.remove('is-hidden');
  refs.bodyModal.classList.add('modal-open');
}

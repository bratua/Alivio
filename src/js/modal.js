const refs = {
  openModalBtn: document.querySelector('.open-button'),
  closeModalBtn: document.querySelector('.close-button'),
  modal: document.querySelector('.backdrop'),
  bodyModal: document.querySelector('body'),
};

console.log(refs.bodyModal);

refs.closeModalBtn.addEventListener('click', closeModal);
refs.openModalBtn.addEventListener('click', openModal);

function closeModal() {
  refs.modal.classList.add('is-hidden');
  refs.bodyModal.classList.remove('modal-open');
}

function openModal() {
  refs.modal.classList.remove('is-hidden');
  refs.bodyModal.classList.add('modal-open');
}

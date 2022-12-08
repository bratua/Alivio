console.log('MODAL');

const refs = {
  openModalBtn: document.querySelector('.open-button'),
  closeModalBtn: document.querySelector('.close-button'),
  modal: document.querySelector('.backdrop'),
};

refs.closeModalBtn.addEventListener('click', closeModal);

function closeModal() {
  console.log('close !!!');
}

function openModal() {
  console.log('open !!!');
}

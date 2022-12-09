const mobileMenu = document.querySelector('[data-mobile]');
const mobileMenuButton = document.querySelector('[data-menu-button]');

const toggleMenu = () => {
  const isMenuOpen =
    mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
  mobileMenuButton.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenuButton.classList.toggle('is-open');
  mobileMenu.classList.toggle('is-open');
};

mobileMenuButton.addEventListener('click', toggleMenu);

(() => {
  // const mobileMenu = document.querySelector('.js-menu-container');
  const mobileMenu = document.querySelector('[menu-mobile]');
  const mobileMenuButton = document.querySelector('[data-menu-button]');
  // const openMenuBtn = document.querySelector('.js-open-menu');
  // const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
    mobileMenuButton.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenuButton.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open');
    // openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);

    // const scrollLockMethod = !isMenuOpen
    //   ? 'disableBodyScroll'
    //   : 'enableBodyScroll';
    // bodyScrollLock[scrollLockMethod](document.body);
  };

  mobileMenuButton.addEventListener('click', toggleMenu);

  // openMenuBtn.addEventListener('click', toggleMenu);
  // closeMenuBtn.addEventListener('click', toggleMenu);
  // mobileMenu.addEventListener('click', () => {
  //   mobileMenu.classList.remove('is-open');
  //   bodyScrollLock.enableBodyScroll(document.body);
  // });

  // Close the mobile menu on wider screens if the device orientation changes
  // window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  //   if (!e.matches) return;
  //   mobileMenu.classList.remove('is-open');
  //   openMenuBtn.setAttribute('aria-expanded', false);
  //   bodyScrollLock.enableBodyScroll(document.body);
  // });
})();

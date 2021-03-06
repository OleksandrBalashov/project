// (() => {
//   const menuBtnRef = document.querySelector('[data-menu-button]');
//   const menuBtnCloseRef = document.querySelector('[data-menu-button-close]');
//   const mobileMenuRef = document.querySelector('[data-menu]');

//   menuBtnRef.addEventListener('click', () => {
//     const expanded =
//       menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

//     // menuBtnRef.classList.toggle('is-open');
//     menuBtnRef.setAttribute('aria-expanded', !expanded);

//     mobileMenuRef.classList.toggle('is-open');
//   });

//   menuBtnCloseRef.addEventListener('click', () => {
//     const expanded =
//       menuBtnCloseRef.getAttribute('aria-expanded') === 'true' || false;

//     // menuBtnCloseRef.classList.toggle('is-open');
//     menuBtnCloseRef.setAttribute('aria-expanded', !expanded);

//     mobileMenuRef.classList.toggle('is-open');
//   });
// })();

(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const menuClose = document.querySelector('[data-menu-close]');
  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
  menuClose.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    mobileMenuRef.classList.toggle('is-open');
  });
})();

// let open = document.getElementById('open');
// let close = document.getElementById('close');
// let menu = document.getElementsByClassName('wrap-menu');

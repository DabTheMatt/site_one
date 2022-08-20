const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.header-menu');
navToggle.addEventListener('click', () => {
    primaryNav.classList.toggle('is-open')
});
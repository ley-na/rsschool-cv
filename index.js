const menuButton = document.querySelector('.nav-button');
const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav__list');
const navItems = document.querySelectorAll('.nav__item');

function menuToggle() {
    nav.classList.toggle('opened');
    navList.classList.toggle('opened');
    menuButton.classList.toggle('opened');
}

function closeMenu() {
    nav.classList.remove('opened');
    navList.classList.remove('opened');
    menuButton.classList.remove('opened');
}

menuButton.addEventListener('click', menuToggle);

navItems.forEach(item => item.addEventListener('click', closeMenu));

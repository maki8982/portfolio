const body = document.querySelector('body');
const btn = document.querySelector('#btn');
const btnTop = document.querySelector('#btn__top');
const btnBottom = document.querySelector('#btn__bottom');
const menu = document.querySelector('#menu');
const btnMenu = document.querySelector('#menu-js');
const btnClose = document.querySelector('#close-js');
<<<<<<< HEAD
<<<<<<< HEAD
const btnTrans = () => {
=======
function btnTrans() {
>>>>>>> 7589fa7365d1cbd5b65b41aba5b6d099d05b8f49
=======
function btnTrans() {
>>>>>>> 7589fa7365d1cbd5b65b41aba5b6d099d05b8f49
    body.classList.toggle('over-h');
    btnTop.classList.toggle('top-js');
    btnBottom.classList.toggle('bottom-js');
    menu.classList.toggle('menu-active');
    btnClose.classList.toggle('btnTxt-active');
    btnMenu.classList.toggle('btnTxt-hidden');
};
btn.addEventListener('click', () => { btnTrans() });
const footerLink = document.querySelector('#footer__link');
const menuLink = document.querySelector('#menu__link--02');
<<<<<<< HEAD
<<<<<<< HEAD
const smoothScroll = (base, menu = null) => {
=======
function smoothScroll(base, menu = null) {
>>>>>>> 7589fa7365d1cbd5b65b41aba5b6d099d05b8f49
=======
function smoothScroll(base, menu = null) {
>>>>>>> 7589fa7365d1cbd5b65b41aba5b6d099d05b8f49
    const href = base.getAttribute('href');
    const target = document.querySelector(href);
    const targetTop = target.getBoundingClientRect().top;
    const scrollY = window.scrollY;
    const targetPos = targetTop + scrollY;
    if (!menu) {
        window.scrollTo({
            top: targetPos,
            behavior: 'smooth'
        });
    } else {
        menu.scrollTo({
            top: targetPos,
            behavior: 'smooth'
        });
    }
};
footerLink.addEventListener('click', (e) => {
    e.preventDefault();
    smoothScroll(footerLink);
});
menuLink.addEventListener('click', (e) => {
    e.preventDefault();
    smoothScroll(menuLink, menu);
});
const header = document.querySelector('#header');
const headerMenu = document.querySelector('#header__ul');
const headerTop = header.getBoundingClientRect().top;
<<<<<<< HEAD
<<<<<<< HEAD
const headerToggle = () => {
    const scrollY = window.scrollY;
    scrollY > headerTop ? headerMenu.classList.add('passive') : headerMenu.classList.remove('passive');
}
window.addEventListener('scroll', () => { headerToggle() });
=======
=======
>>>>>>> 7589fa7365d1cbd5b65b41aba5b6d099d05b8f49
function headerToggle(){
    const scrollY = window.scrollY;
    scrollY > headerTop ? headerMenu.classList.add('passive') : headerMenu.classList.remove('passive');
}
window.addEventListener('scroll', () => { headerToggle() });

<<<<<<< HEAD
>>>>>>> 7589fa7365d1cbd5b65b41aba5b6d099d05b8f49
=======
>>>>>>> 7589fa7365d1cbd5b65b41aba5b6d099d05b8f49

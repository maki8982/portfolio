const body = document.querySelector('body');
const btn = document.querySelector('#btn');
const btnTop = document.querySelector('#btn__top');
const btnBottom = document.querySelector('#btn__bottom');
const menu = document.querySelector('#menu');
const btnMenu = document.querySelector('#menu-js');
const btnClose = document.querySelector('#close-js');
const swiperPrev = document.querySelector('#swiper-prev');
const swiperNxt = document.querySelector('#swiper-next');
function btnTrans() {
    body.classList.toggle('over-h');
    btnTop.classList.toggle('top-js');
    btnBottom.classList.toggle('bottom-js');
    menu.classList.toggle('menu-active');
    btnClose.classList.toggle('btnTxt-active');
    btnMenu.classList.toggle('btnTxt-hidden');
};
btn.addEventListener('click', () => { btnTrans() });

//スムーススクロール
const footerLink = document.querySelector('#footer__link');
const menuLink = document.querySelector('#menu__link--02');
function smoothScroll(base, menu = null) {
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

//header
const els = {
    header: document.querySelector('#header'),
    menu: document.querySelector('#header__ul'),
}
const headerH = header.offsetHeight;
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    scrollY >= headerH ? menu.classList.add('passive') : menu.classList.remove('passive');
});


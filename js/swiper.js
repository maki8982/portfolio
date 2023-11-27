//swiper
const swiperMenu = new Swiper('.swiper-menu', {

    direction: 'horizontal',
    loop: false,
    effect: 'slide',
    slidesPerView: '2.8',
    spaceBetween: 65,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 100,
    speed: 1000,

    navigation: {
        prevEl: '.swiper-menu__prev',
        nextEl: '.swiper-menu__next'
    },
});

// const 変数名 = new Swiper('スライダーのクラス名',{});👈初期化のやつ

const swiperMv = new Swiper('.swiper-insta', {

    direction: 'horizontal',
    loop: false,
    effect: 'slide',
    slidesPerView: '3.5',
    spaceBetween: 10,
    slidesOffsetBefore: 0,
    speed: 1000,

    navigation: {//各々クラス名を指定する
        prevEl: '.swiper-insta__prev',
        nextEl: '.swiper-insta__next'
    },
}); 
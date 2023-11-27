// const 変数名 = new Swiper('スライダーのクラス名',{});👈初期化のやつ

const swiperMv = new Swiper('.swiper-insta', {

    direction: 'horizontal',//縦：vertical
    loop: false,
    effect: 'slide',//slideかfadeが一般的
    slidesPerView: '3.5',//表示枚数
    spaceBetween: 10,//スライド間隔
    slidesOffsetBefore: 50,//最初のスライドの前余白
    slidesOffsetAfter: 0,//最後のスライドの後余白
    slideActiveClass: 'swiper-insta__isActive',//メインのスライドだけ大きくしたい時に使う
    speed: 1000,//速度

    pagination: {
        el: '.swiper-insta__pagination',//ページネーションにするクラス名指定
        type: 'bullets' , //fraction:数字1/2的な progressbar 画面上のバー
        clickable: true
    },

    navigation: {//各々クラス名を指定する
        prevEl: '.swiper-insta__prev',
        nextEl: '.swiper-insta__next'
    },


}); 
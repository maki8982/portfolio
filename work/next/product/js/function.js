$(function () {
    function btnToggle() {
        $('#gnav').toggleClass('menu-active');
        $('#header__btnTop').toggleClass('btn-top')
        $('#header__btnMiddle').toggleClass('btn-middle');
        $('#header__btnBottom').toggleClass('btn-bottom');
        $('body').toggleClass('fixed-js');
        $('#gnav__bg').toggleClass('bg-js');
    }
    $('#header__btn').on('click', () => { btnToggle() });
    const winH = $(window).height();
    $(window).on('scroll', function () {
        const scrollY = $(window).scrollTop();
        $('.slide-js').each( function() {
            const targetTop = $(this).offset().top;
            if(scrollY > targetTop - winH * .8) {
                $(this).addClass('slide-active')
            }
        });
    })
});
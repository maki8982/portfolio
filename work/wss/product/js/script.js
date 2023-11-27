$(function () {
  $('body').fadeIn(1500);//全ページ適用フェードイン

  let headH = $("header").outerHeight();
  let animeSpeed = 100;
  let urlHash = location.hash; 
  if (urlHash) { 
    $("body,html").scrollTop(0);
    setTimeout(function () { 
      var target = $(urlHash);
      var position = target.offset().top - headH;
      $("body,html").stop().animate({
        scrollTop: position
      }, animeSpeed);
      $('body').fadeIn(500);//access推移時 適用フェードイン
    }, 0);
  }
  
  $(window).on("scroll", function () {
    let mvHeight = $(".js-header").height() - 60;
    if ($(window).scrollTop() < mvHeight) {
      $(".js-gnav").addClass("transform");
      $(".js-logo").removeClass("headerLogoScroll");
    } else {
      $(".js-gnav").removeClass("transform");
      $(".js-logo").addClass("headerLogoScroll");
    }
  });
});


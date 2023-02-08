jQuery(document).ready(function($) {
  
  

  
  
  
  //miss click burger
  function closeBurger () {
    $(document).mouseup(function (e){ // событие клика по веб-документу
      var div = $("[data-blkscr]"); // тут указываем ID элемента
      if (div.is(e.target)) { // и не по его дочерним элементам
        $('body').removeClass('open');
        $('html').removeClass("open");
        $('[data-burger]').removeClass("open");
        $('[data-nav]').removeClass("open");
      }
    });
  };
  closeBurger();
  //slider
  if (jQuery('[data-main]').length > 0) {
    $('[data-main]').slick({
        dots: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        infinite: true,
        responsive: [{
          breakpoint: 994,
          settings: {
            dots: false
          }
        } ]
    });
}


if (jQuery('[data-sert]').length > 0) {
  $('[data-sert]').slick({
      dots: false,
      arrows: true,
      speed: 300,
      slidesToShow: 4,
      infinite: true,
      responsive: [{
        breakpoint: 994,
        settings: {
          slidesToShow: 3,
        }
      },{
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      } ]
  });
}
if (jQuery('[data-comp]').length > 0) {
  $('[data-comp]').slick({
      dots: false,
      arrows: false,
      speed: 300,
      slidesToShow: 5,
      variableWidth: true,
      infinite: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
  });
}
  //adaptive
  if ($(window).width() < 994) {
    closeBurger ();
    $('[data-icons]').appendTo('[data-nav]');
    // burger
      $('[data-burger]').click(function() {
        $('html').toggleClass("open");
        $(this).toggleClass("open");
        $('[data-nav]').toggleClass("open");
        $('body').toggleClass('open');
    });
    $(window).scroll(function() {
      if ($(window).scrollTop() > 0) {
          $('.header__bottom').addClass('scroll')
      } else {
        $('.header__bottom').removeClass('scroll')
      }
    })
  }
  
  if ($(window).width() < 768) {
    // showmore
    $("[data-revtxt]").shorten({
      "showChars" : 146,
      "moreText"  : "Читать дальше",
      "lessText"  : "Скрыть",
    });
    $(window).scroll(function() {
      if ($(window).scrollTop() + $(window).height() >= $('.footer').offset().top) {
        $('[data-fmob]').addClass('stop')
      } else {
        $('[data-fmob]').removeClass('stop')
      }
    })
  }
  if ($(window).width() > 993) {
    // burger
    $('[data-burger]').click(function() {
      $('html').toggleClass("open");
      $(this).toggleClass("open");
      $('[data-menu]').toggleClass("open");
      $('[data-menu]').slideToggle(300);
      // $('body').toggleClass('open');
  });
  }
  if ($(window).width() > 768) {
    if (jQuery('[data-best]').length > 0) {
      $('[data-best]').slick({
          dots: false,
          arrows: true,
          speed: 300,
          slidesToShow: 6,
          infinite: true,
          responsive: [{
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
            }
          },{
            breakpoint: 994,
            settings: {
              slidesToShow: 4,
            }
          }, ]
      });
    }
    if (jQuery('[data-progress]').length > 0) {
      $('[data-progress]').slick({
          dots: false,
          arrows: true,
          speed: 300,
          slidesToShow: 4,
          infinite: true,
          variableWidth: true,
          responsive: [{
            breakpoint: 1200,
            settings: {
              variableWidth: false,
              slidesToShow: 3,
            }
          },{
            breakpoint: 994,
            settings: {
              variableWidth: false,
              slidesToShow: 2,
            }
          } ]
      });
    }
    if (jQuery('[data-hover]').length > 0) {
      $('[data-hover]').on('mouseenter',function(){
        $(this).addClass('open');
        $(this).find('[data-btn]').slideDown(200);
      })
      $('[data-hover]').on('mouseleave',function(){
        $(this).removeClass('open');
        $(this).find('[data-btn]').slideUp(0);
      })
    }
  }


// slide to id
$('[data-scroll]').on("click", function (event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
      top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
});
    
})
jQuery(document).ready(function($) {
  
  
  if ($(window).width() > 768) {
      
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
  // burger
  // $('[data-burger]').click(function() {
  //     $('html').toggleClass("open");
  //     $(this).toggleClass("open");
  //     $('[data-nav]').toggleClass("open");
  //     $('body').toggleClass('open');
  // });
  
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
    });
}
if (jQuery('[data-best]').length > 0) {
  $('[data-best]').slick({
      dots: false,
      arrows: true,
      speed: 300,
      slidesToShow: 6,
      infinite: true,
  });
}
  //adaptive
  if ($(window).width() < 994) {
    closeBurger ();
  }


    
})
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
if (jQuery('[data-progress]').length > 0) {
  $('[data-progress]').slick({
      dots: false,
      arrows: true,
      speed: 300,
      slidesToShow: 4,
      infinite: true,
      variableWidth: true,
  });
}
if (jQuery('[data-sert]').length > 0) {
  $('[data-sert]').slick({
      dots: false,
      arrows: true,
      speed: 300,
      slidesToShow: 4,
      infinite: true,
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
  }

//circle
var numb = 1;
$(window).scroll(function() {
  if ($(window).scrollTop() + ($(window).height() / 2) >= $('.progress').offset().top && numb==1) {
    $('.first').circleProgress({
        value: 0.9,
        size: 270.0,
        fill: {
          color: '#FFCC01'
        },
        thickness: 14,
        startAngle: Math.PI / 4 * 2,
        emptyFill: '#D9D9D9',
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(parseInt(7 * progress));
    });
    $('.second').circleProgress({
      value: 0.9,
      size: 270.0,
      fill: {
        color: '#FFCC01'
      },
      thickness: 14,
      startAngle: Math.PI / 4 * 0.5,
      emptyFill: '#D9D9D9',
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(6 * progress));
  });
  $('.third').circleProgress({
    value: 0.99,
    size: 270.0,
    fill: {
      color: '#FFCC01'
    },
    thickness: 14,
    startAngle: Math.PI / 4 * 2.5,
    emptyFill: '#D9D9D9',
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(parseInt(49 * progress));
});
$('.fourth').circleProgress({
  value: 0.94,
  size: 270.0,
  fill: {
    color: '#FFCC01'
  },
  thickness: 14,
  startAngle: Math.PI / 4 * 2.5,
  emptyFill: '#D9D9D9',
}).on('circle-animation-progress', function(event, progress) {
$(this).find('strong').html('>' + parseInt(40 * progress) + '%');
});
$('.fifth').circleProgress({
  value: 0.90,
  size: 270.0,
  fill: {
    color: '#FFCC01'
  },
  thickness: 14,
  startAngle: Math.PI / 4 * 1,
  emptyFill: '#D9D9D9',
}).on('circle-animation-progress', function(event, progress) {
$(this).find('strong').html('>' + parseInt(180 * progress));
});
$('.sixth').circleProgress({
value: 0.85,
size: 270.0,
fill: {
  color: '#FFCC01'
},
thickness: 14,
startAngle: Math.PI / 4 * 1,
emptyFill: '#D9D9D9',
}).on('circle-animation-progress', function(event, progress) {
$(this).find('strong').text('>' + String((1.9 * progress).toFixed(1)));
});
    numb = 0;
  }
})

    
})
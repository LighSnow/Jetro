$(function () {


  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots:false,
    fade: true,
    asNavFor: '.slider-nav',
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/slider-img/previous.png" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/slider-img/next.png" alt=""></button>',
  });
  $('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    draggable: true,
    // centerMode: true,
    // variableWidth: true,
    focusOnSelect: true,
    responsive: [{
        breakpoint: 960,
        settings: {
          slidesToShow: 5,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          arrows: false,


        }
      },
      {
        breakpoint: 566,
        settings: {
          slidesToShow: 3,


        }
      },
    ]
  });


  $('.header__nav-btn').on('click', function () {
    $('.nav').slideToggle();
  });

});
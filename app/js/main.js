$(function (){
  var $slider = $('.reviews__slider');
  
   $(window).on("scroll", function () {
    if ($(this).scrollTop() >550) {
      $(".header__inner").addClass("fixed");
    } else{
      $(".header__inner").removeClass("fixed");
    }
  });
  $('.menu__btn, .menu__item-link').on('click',function () {
    $('.header__inner').toggleClass('header__inner--active');
  });
  $(".menu__item-link, .logo,.header__button, .button, .team__btn, .services__btn").on("click",function (e) {
		//отменяем стандартную обработку нажатия по ссылке
		e.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
  });
  $('.team__slider').slick({
  
  });
  
 
  if ($slider.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement('div');
  sliderCounter.classList.add('slider__counter');
  
   var updateSliderCounter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounter).text(currentSlide + '/' +slidesCount)
  };

  $slider.on('init', function(event, slick) {
    $slider.append(sliderCounter);
    updateSliderCounter(slick);
  });

  $slider.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });
  $slider.slick({
    slidesToShow:3,
    slidesToScroll:1,
    responsive:[
      {
        breakpoint:700,
        settings:{
          infinite: true,
          slidesToShow: 1
        }
      }
    ]
    });
  }
 
   $(".stars").rateYo({
    starWidth: "21px",
    normalFill: "#d6d6d6",
    ratedFill: "#FD6500",
    readOnly: true
    
  });
  
});
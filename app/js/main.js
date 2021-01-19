$(function (){
  var $slider = $('.reviews__slider');

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

  $slider.slick();
}
  $$('.reviews__slider').slick({
    arrows:true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3
    });
  $('.team__slider').slick({
    dots:true,
    arrows:true,
  });
 
  $(".stars").rateYo({
    starWidth: "21px",
    normalFill: "#d6d6d6",
    ratedFill: "#FD6500",
    readOnly: true
    
  });
});
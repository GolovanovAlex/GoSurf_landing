$(function () {
  $('.header__slider').slick({
    Infinite: true,
    fade: true,
    asNavFor: '.slider-dots',
    prevArrow:
      '<img class="slick-arrow slick-arrow__left" src="images/icon/arrow_left.svg" alt="arrow" />',
    nextArrow:
      '<img class="slick-arrow slick-arrow__right" src="images/icon/arrow_right.svg" alt="arrow" />',
  });
  $('.slider-dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
    focusOnSelect: true,
  });
});

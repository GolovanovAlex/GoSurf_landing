$(function () {
  $('.header__slider').slick({
    asNavFor: '.slider-dots',
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slick-arrow slick-arrow__left" src="images/icon/arrow_left.svg" alt="arrow"/img>',
    nextArrow:
      '<img class="slick-arrow slick-arrow__right" src="images/icon/arrow_right.svg" alt="arrow"/img>',
  });
  $('.slider-dots').slick({
    asNavFor: '.header__slider',
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    arrows: false,
  });
});

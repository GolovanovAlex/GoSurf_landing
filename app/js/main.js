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

  $('.surf-slider').slick({
    asNavFor: '.surf-slider-map',
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow:
      '<img class="slick-arrow slick-arrow__left" src="images/icon/arrow_left.svg" alt="arrow"/img>',
    nextArrow:
      '<img class="slick-arrow slick-arrow__right" src="images/icon/arrow_right.svg" alt="arrow"/img>',
    centerMode: true,
    focusOnSelect: true,
  });
  $('.surf-slider-map').slick({
    infinite: false,
    asNavFor: '.surf-slider',
    slidesToShow: 8,
    slidesToScroll: 8,
    arrows: false,
    focusOnSelect: true,
  });
  $('.holder__slider').slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slick-arrow slick-arrow__left" src="images/icon/arrow_left.svg" alt="arrow"/img>',
    nextArrow:
      '<img class="slick-arrow slick-arrow__right" src="images/icon/arrow_right.svg" alt="arrow"/img>',
  });

  //input number style//
  $(
    '<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>'
  ).insertAfter('.quantity input');
  $('.quantity').each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find('input').val(newVal);
      spinner.find('input').trigger('change');
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find('input').val(newVal);
      spinner.find('input').trigger('change');
    });
  });
  $('.quantity-button').on('click', function () {
    let nights = $('.nights').val() * $('.summ').data('nights');
    let guests = ($('.guests').val() - 1) * $('.summ').data('guests');
    let summ = nights + guests;

    $('.summ').html(summ);
  });
  $('.summ').html(summ);
});

$(function () {
  // ---- ---- header-slider ---- ---- //
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

  // ---- ---- surf-slider ---- ---- //
  $('.surf-slider').slick({
    asNavFor: '.surf_subtitle-slider, surf-slider-map',
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<img class="slick-arrow slick-arrow__left" src="images/icon/arrow_left.svg" alt="arrow"/img>',
    nextArrow:
      '<img class="slick-arrow slick-arrow__right" src="images/icon/arrow_right.svg" alt="arrow"/img>',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1151,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  });
  $('.surf-slider-map').slick({
    infinite: false,
    asNavFor: '.surf-slider, .surf_subtitle-slider',
    slidesToShow: 8,
    slidesToScroll: 8,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          infinite: true,
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  });
  $('.surf_subtitle-slider').slick({
    asNavFor: '.surf-slider, .surf-slider-map',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  });

  // ---- ---- travel-slider ---- ---- //
  $('.holder__slider').slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slick-arrow slick-arrow__left" src="images/icon/arrow_left.svg" alt="arrow"/img>',
    nextArrow:
      '<img class="slick-arrow slick-arrow__right" src="images/icon/arrow_right.svg" alt="arrow"/img>',
  });

  // ---- ---- shop-slider ---- ---- //
  $('.shop-slider').slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slick-arrow slick-arrow__left" src="images/icon/arrow_left.svg" alt="arrow"/img>',
    nextArrow:
      '<img class="slick-arrow slick-arrow__right" src="images/icon/arrow_right.svg" alt="arrow"/img>',
  });

  // ---- ---- input number ---- ---- //
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

  // ---- ---- input summ ---- ---- //
  $('.quantity-button').on('click', function () {
    let slider = $(this).parents('.holder-slider__info');
    let nights = $('.nights', slider).val() * $('.summ', slider).data('nights');
    let guests =
      ($('.guests', slider).val() - 1) * $('.summ', slider).data('guests');
    let summ = nights + guests;

    $('.summ', slider).html(summ);
  });

  // ---- ---- click shop ---- ---- //
  $('.product__circle').on('click', function () {
    $(this).toggleClass('act');
  });

  // ---- ---- click menu ---- ---- //
  $('.menu-btn').on('click', function () {
    $('.menu, .menu-btn').toggleClass('active');
  });

  // ---- ---- wow.js ---- ---- //
  new WOW().init();
});
// ---- ---- scroll  ---- ---- //
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

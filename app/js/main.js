$(function () {
  // ---- ---- header-slider ---- ---- //
  $('.header__slider').slick({
    asNavFor: '.slider-dots',
    infinite: true,
    fade: true,
    prevArrow:
      '<svg width="25" height="21" viewBox="0 0 25 21" fill="black" xmlns="http://www.w3.org/2000/svg" ><path d="M8.77789 0.562669L0.564298 8.71345C-0.188099 9.46459 -0.188099 10.6838 0.564298 11.4324L8.77789 19.5881C9.5366 20.3392 10.7646 20.3354 11.5233 19.5881C12.2744 18.8357 12.2744 17.6215 11.5233 16.8691L6.71818 12.1016H22.1324C23.2459 12.1016 24.1467 11.202 24.1467 10.0885C24.1467 8.97625 23.2459 8.07537 22.1324 8.07537H6.68919L11.5233 3.28282C12.2744 2.53168 12.2744 1.31623 11.5233 0.565085C10.7658 -0.187313 9.53783 -0.188569 8.77789 0.562568V0.562669Z" fill="black"/></svg>',
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
    asNavFor: '.surf_subtitle-slider, .surf-slider-map',
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

$(document).ready(function () {
  $(".fe-header #toggle-search").on("click", function () {
    $(".fe-header #header-search").toggleClass("active");
  });

  $(".fe-header .offcanvas  .toggle-menu-list").on("click", function () {
    const $subMenu = $(this).children(".sub-menu-list");

    if ($subMenu.hasClass("active")) {
      $subMenu.removeClass("active").slideUp(200);
    } else {
      $(".fe-header .offcanvas  .sub-menu-list").removeClass("active").slideUp(200);
      $subMenu.addClass("active").slideDown(200);
    }
  });

  $(".fe-header .offcanvas  .toggle-menu-list-2").on("click", function (e) {
    e.stopPropagation(); // Ngăn click này gây ảnh hưởng tới menu cha
    const $subMenu1 = $(this).children(".sub-menu-list-2");

    if ($subMenu1.hasClass("active")) {
      $subMenu1.removeClass("active").slideUp(200);
    } else {
      $(".fe-header .offcanvas  .sub-menu-list-2").removeClass("active").slideUp(200);
      $subMenu1.addClass("active").slideDown(200);
    }
  });

  //   $("#btn-close-sidebar").on("click", function () {
  //     $("#sidebar").removeClass("active");
  //     $(".sub-menu-list").removeClass("active");
  //     $(".sub-menu-list-2").removeClass("active");

  //     $("body").removeClass("overflow-hidden");
  //   });

  $(".slide_banner-3").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".slide_banner-2").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".banner_slide").slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        },
      },
    ],
  });

  $(".products-slider").slick({
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  $(".products-slider-left").slick({
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  $(".products-rate").slick({
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    infinite: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  $(".products-slider-two-row").slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    rows: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  $(".slick-category").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 10,
    slidesToScroll: 10,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      }
    ],
  });

  $(".slick-category-8").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 8,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  });

  $(".slick-category-6").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      }
    ],
  });

  $(".slick-category-6-2").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 3000,
    rows: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      }
    ],
  });

  $(".slide-video").slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    rows: 2,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      }
    ],
  });

  // Set the date we're counting down to (1 month from now)
  const countDownDate = new Date().getTime() + 30 * 24 * 60 * 60 * 1000;

  // Update the countdown every 1 second
  const x = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the countdown date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("days").innerHTML = days
      .toString()
      .padStart(2, "0");
    document.getElementById("hours").innerHTML = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("minutes").innerHTML = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds").innerHTML = seconds
      .toString()
      .padStart(2, "0");

    // If the countdown is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("days").innerHTML = "00";
      document.getElementById("hours").innerHTML = "00";
      document.getElementById("minutes").innerHTML = "00";
      document.getElementById("seconds").innerHTML = "00";
    }
  }, 1000);

  $(window).on('scroll resize', function () {
    var scrollTop = $(this).scrollTop();
    var windowWidth = $(window).width();

    if (windowWidth >= 768) { // Chỉ áp dụng cho tablet trở lên
      if (scrollTop > 35) {
        $('#header-main').css({
          'padding-top': '0.4rem',
          'padding-bottom': '0.4rem'
        });
      } else {
        $('#header-main').css({
          'padding-top': '1rem',
          'padding-bottom': '1rem'
        });
      }
    }
  });

  $('.popup-youtube, .popup-vimeo').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  $('.btn-search').click(function() {
    $(this).toggleClass('active');  // Toggle 'active' class on btn-search
    $('.header-search').toggleClass('active');  // Toggle 'active' class on header-search
  });
  

});

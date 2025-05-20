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

  var swiper = new Swiper(".banner-main .slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".banner-main .slider .swiper-button-next",
        prevEl: ".banner-main .slider .swiper-button-prev",
    },
    on: {
        init: function () {
            showContentBannerMain();
        },
        slideChange: function () {
            showContentBannerMain();
        },
        autoplay: function () {
            // Lệnh để bắt đầu phát video khi slider tự động chuyển slide
            var currentSlide = this.slides[this.activeIndex];
            if (currentSlide) {
                var video = currentSlide.querySelector('video');
                if (video) {
                    video.play();
                }
            }
        },
    },
});
function showContentBannerMain() {
    var title = $('.banner-main .slider .content h3');
    var content = $('.banner-main .slider .content span');

    // Ẩn nội dung hiện tại
    if (content.length > 0) {
        title.css('opacity', 0);
        content.css('opacity', 0);

        // Sau 1 giây, hiển thị nội dung
        setTimeout(function () {
            title.css('opacity', 1);
        }, 1000);
        setTimeout(function () {
            content.css('opacity', 1);
        }, 3000);
    }
}

var swiper2 = new Swiper(".list_testimonial", {
    slidesPerView: 4,
    spaceBetween: 40,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".list_testimonial .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".list_testimonial .swiper-button-next",
        prevEl: ".list_testimonial .swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 1,
            spaceBetween: 40
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
});

var swiper3 = new Swiper(".productSwiper", {
    slidesPerView: 5,
    loop: true,
    navigation: {
        nextEl: ".productSwiper .next-btn",
        prevEl: ".productSwiper .prev-btn",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
    },
});

var swiper4 = new Swiper(".brandSwiper", {
    slidesPerView: 6,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".brand-list .next-btn",
        prevEl: ".brand-list .prev-btn",
    },
    breakpoints: {
        320: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        576: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 6,
        },
    },
});

var swiper5 = new Swiper(".banner-1photo_slider .slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".banner-1photo_slider .slider .swiper-button-next",
        prevEl: ".banner-1photo_slider .slider .swiper-button-prev",
    },
});

var swiper6 = new Swiper(".banner-3photo_slider .slider", {
    slidesPerView: 3,
    spaceBetween: 12,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 3,
        },
    },
});

$('.booking .choose_week li').on('click', function () {
    $('.booking .choose_week li').removeClass('active');
    $(this).addClass('active');
    $('.booking .week').val($(this).text());
});
$('.booking .choose_hours li').on('click', function () {
    let count = $('.choose_week li.active').length;
    if(count > 0){
        $('.booking .choose_hours li').removeClass('active');
        $(this).addClass('active');
        $('.booking .hour').val($(this).text());
    }
});
$('.booking button.btn').on('click', function (e) {
    let count_week = $('.choose_week li.active').length;
    let count_hours = $('.choose_hours li.active').length;
    if(count_week > 0 && count_hours > 0){
        $('.booking .alert_form').text('');
        $('.booking button.submit').click();
    }else{
        $('.booking .alert_form').text('Vui lòng chọn lịch!');
    }
});

$(document).ready(function() {
    $(window).on('resize', function() {
        if ($(window).width() < 576) {
            $('.banner_slider-mobile .swiper-slide a').each(function() {
                var dataSrc = $(this).data('image-src');
                if (dataSrc) {
                    var img = $(this).find('img');
                    img.attr('src', dataSrc);
                }
            });
        }
        if ($(window).width() >= 576) {
            $('.banner_slider-pc .swiper-slide a').each(function() {
                var dataSrc = $(this).data('image-src');
                if (dataSrc) {
                    var img = $(this).find('img');
                    img.attr('src', dataSrc);
                }
            });
        }
    });
    $(window).trigger('resize');

    var contentHeight = $(".blog_list.blog_display_type .content").outerHeight();
    if (contentHeight >= 850) {
        $(".showMoreButton").show();
    } else {
        $(".showMoreButton").hide();
    }
    $(".showMoreButton").click(function () {
        $(this).parent().parent().find(".container.content").css("max-height", "none");
        $(this).parent().parent().find(".container.content").css("overflow", "visible");
        $(this).hide();
        $(this).siblings('.showHideButton').show();
    });
    $(".showHideButton").click(function () {
        $(this).parent().parent().find(".container.content").css("max-height", 850);
        $(this).parent().parent().find(".container.content").css("overflow", "hidden");
        $(this).hide();
        $(this).siblings('.showMoreButton').show();
    });

});

$(document).ready(function(){
    $(".draggable").on("mousedown", function(e){
      $("body").addClass("dragging");
      var startX = e.pageX;
      $(document).on("mousemove", function(e){
        var movementX = e.pageX - startX;
        if (movementX > 50) {
          $("#home_slider").carousel('prev'); 
          $(document).off("mousemove");
        } else if (movementX < -50) {
          $("#home_slider").carousel('next');
          $(document).off("mousemove");
        }
      });
      $(document).on("mouseup", function(){
        $("body").removeClass("dragging");
        $(document).off("mousemove");
      });
    });

    $(".draggable").on("dragstart", function(e) {
      e.preventDefault();
    });
});

// $(document).ready(function(){
//     $('.owl-carousel').owlCarousel({
//       loop:true,
//       margin:10,
//       nav:true,
//       responsive:{
//           0:{
//               items:1
//           },
//           600:{
//               items:1
//           },
//           1000:{
//               items:1
//           }
//       },
//       autoplay: false,
//       autoplayTimeout: 3000,
// 	  onInitialized: equalizeHeights,
//       dotsEach: true,
//         onInitialized: function() {
//             $('.owl-dot').each(function(index) {
//                 $(this).attr('id', 'owl-dot-' + (index + 1));
//                 $(this).attr('data-id', index + 1);
//                 $(this).attr('data-id', index + 1);
//             });
//         }
//     });
//
// 	function equalizeHeights(){
// 		$('.owl-item').css('height', '');
// 		var maxHeight = 0;
// 		$('.owl-item').each(function(){
// 		  var itemHeight = $(this).height();
// 		  if(itemHeight > maxHeight){
// 			maxHeight = itemHeight;
// 		  }
// 		});
// 		$('.owl-item').css('height', maxHeight + 'px');
// 	  }
// });

$(document).ready(function() {
    var count = $("#home_slider .carousel-item").length;
    if (count > 1) {
        $(".carousel-indicators.container").show();
    } else {
        $(".carousel-indicators.container").hide();
    }
});

$(document).ready(function(){
    $('.owl-dot').each(function(){
        var owlDotDataId = $(this).data('id');
        $('.image-logo-company').each(function(){
            var imageLogoDataId = $(this).data('id');
            var imageLogoSrc = $(this).attr('src');
            if (owlDotDataId === imageLogoDataId) {
                var cssRule = '#testimonial_slider .owl-carousel #owl-dot-' + imageLogoDataId + '::before { background-image: url("' + imageLogoSrc + '"); }';
                $("<style>").text(cssRule).appendTo("head");
            }
        });
    });
});

$(document).ready(function(){
    var maxHeight = 0;
    $('.owl-item').each(function(){
        var itemHeight = $(this).height();
        if (itemHeight > maxHeight) {
            maxHeight = itemHeight;
        }
    });
    $('.owl-item').css('height', maxHeight + 'px');
});

$(document).ready(function () {
    var isHidden = true;

    $('.show-search').click(function() {
        if (isHidden) {
            $(".sub-logo").slideUp("slow");
            $(".header-search").slideDown("slow");
            $(this).find('i.fa-search').fadeTo("fast", 0, function() {
                $(this).removeClass('fa-search').addClass('fa-x').fadeTo("fast", 1);
            });
        } else {
            $(".sub-logo").slideDown("slow");
            $(".header-search").slideUp("slow");
            $(this).find('i.fa-x').fadeTo("fast", 0, function() {
                $(this).removeClass('fa-x').addClass('fa-search').fadeTo("fast", 1);
            });
        }
        isHidden = !isHidden;
    });
});

$(document).ready(function() {
    //
    $('.btn-quote-and-promotion').on('click', function(e) {
        e.preventDefault()
        let product_id = $(this).data('id')
        var product_name = $(this).data('name')
        let product_image = $(this).data('image')

        if ($('#select_product_id option[value="' + product_id + '"]').length === 0 && product_name) {
            $('#select_product_id').append('<option value="' + product_id + '">' + product_name + '</option>');
            $('#select_product_id').val(product_id);
        }

        if (product_image) {
            $('#quote-and-promotion-product-image').attr('src', product_image);
        }
        $('#quoteAndPromotionModal').modal('show');
    });

    $("#quoteAndPromotionModal .close").on("click", function () {
        $('#quoteAndPromotionModal').modal('hide');
    })
})

$(document).ready(function () {
    let col = $('.partner .owl-carousel').data('col') ? $('.partner .owl-carousel').data('col') : 6
    $('.partner .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: col
            }
        }
    });
    $('.service_round_corner .owl-carousel').owlCarousel({
        loop: true,
        margin: 24,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    });
});

$(document).ready(function(){
    $('.service_round_corner .owl-carousel .owl-dot').each(function(){
        $(this).attr('type', 'button')
        $(this).attr('aria-label', 'Page')
    });
});

});

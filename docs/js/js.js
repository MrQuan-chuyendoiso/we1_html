AOS.init({
  duration: 2000
});

    let scrollRef = 0;
  $(window).on("resize scroll", function () {
    // increase value up to 10, then refresh AOS
    scrollRef <= 10 ? scrollRef++ : AOS.refresh();
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('body.home header').addClass('scrollTop');
    } else {
       $('body.home header').removeClass('scrollTop');
    }
});

var scrollTop = $(".scrolltop");

  $(window).scroll(function() {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 300) {
      $(scrollTop).css("opacity", "1");

    } else {
      $(scrollTop).css("opacity", "0");
    }

  }); // scroll END

  //Click event to scroll to top
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

//dropdown on  hover //
$(".dropdown-hover ").on({
    mouseenter: function () {
       $(".dropdown-menu").fadeIn(100);
    },
    mouseleave: function () {
       $(".dropdown-menu").fadeOut(100);
    }
});

$(".dropdown-hover .dropdown-menu li").on('click', function() {
    // $(".dropdown_hover .selected  span").html($(this).html());
    $(".dropdown-hover .dropdown-menu").fadeOut(100);
}); 

$(document).bind('click', function(e) {
    var $clickhide = $(e.target);
    if (! $clickhide.parents().hasClass("dropdown-hover"))
        $(".dropdown-hover .dropdown-menu").fadeOut(100);
});


$(document).ready(function(){
  var numSlick = 0;
    $('.slider-our-team').each( function() {
      numSlick++;
      $(this).addClass( 'slider-' + numSlick ).slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: true,
        fade: false,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },{
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
      });
    });
    $('.slider-blog').each( function() {
      numSlick++;
      $(this).addClass( 'slider-' + numSlick ).slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: true,
        fade: false,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
      });
    });
    $('.slider-feedback').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots:false,
      fade: false,
      adaptiveHeight: true,
      arrows: true,
      infinite: true,
      prevArrow: '<span class="arrow arrow-prev"></span>',
      nextArrow: '<span class="arrow arrow-next"></span>'
    });
  });

  // $(document).ready(function(){
  //   // //play/pause on double click on the video
  //   //     $('video').on('click', function (e) {
  //   //         if (this.paused) {
  //   //             this.play();
  //   //         }else{
  //   //             this.pause();
  //   //         }
  //   //     });
    
  //   $('#modal_video').on('shown.bs.modal', function () {
  //     $('#video-project')[0].play();
  //   })
  //   $('#modal_video').on('hidden.bs.modal', function () {
  //     $('#video-project')[0].pause();
  //   })
    
  //   });


// numSlick = 0;
// $('.slider-nav').each( function() {
//   numSlick++;
//   $(this).addClass( 'slider-' + numSlick ).slick({
//     vertical: false,
//     centerMode: true,
//     centerPadding: '0px',
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.slider-products.slider-' + numSlick,
//     arrow: false,
//     focusOnSelect: true,
//     responsive: [
//       {
//         breakpoint: 800,
//         settings: {
//           slidesToShow: 3,
//          }
//       }
//     ]
//   });
// });    


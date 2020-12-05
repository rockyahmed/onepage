(function ($) {
  "use strict";

  var nav_offset_top = $("header").height() + 70;
  /*-------------------------------------------------------------------------------
    Navbar Fixed
  -------------------------------------------------------------------------------*/

  function navbarFixed() {
    if ($(".main_menu_area").length) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".main_menu_area").addClass("navbar_fixed");
        } else {
          $(".main_menu_area").removeClass("navbar_fixed");
        }
      });
    }
  }
  navbarFixed();

  // Splitting();

  // $(".height-emulator").css({
  //   height: $("footer").outerHeight(true),
  // });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  /*----------------------------------------------------*/
  /*  Menu Click Function js
    /*----------------------------------------------------*/
  $('.main_menu_area .navbar-nav li a[href^="#"]:not([href="#"]').on(
    "click",
    function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 70,
          },
          1500
        );
      event.preventDefault();
    }
  );

  // Activate scrollspy to add active class to navbar items on scroll
  $(window).on("load", function () {
    $("body").scrollspy({
      target: "#mainNav",
      offset: 90,
    });
  });

  // /*-------------------------------------------------------------------------------
  //   Parallax js
  // -------------------------------------------------------------------------------*/
  function parallax() {
    if ($(".parallaxie").length) {
      $(".parallaxie").parallaxie({});
    }
  }
  parallax();

  // /*-------------------------------------------------------------------------------
  //   Slick Slider js
  // -------------------------------------------------------------------------------*/
  function Project_slider() {
    if ($(".project_slider").length) {
      $(".project_slider").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 4000,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    }
  }
  Project_slider();

  // /*-------------------------------------------------------------------------------
  //   Slick Slider js
  // -------------------------------------------------------------------------------*/
  function Testimonials_slider() {
    if ($(".testi_slider").length) {
      $(".testi_slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        arrows: false,
        dots: true,
        // responsive: [
        //   {
        //     breakpoint: 768,
        //     settings: {
        //       slidesToShow: 1,
        //     },
        //   },
        //   {
        //     breakpoint: 520,
        //     settings: {
        //       slidesToShow: 1,
        //     },
        //   },
        // ],
      });
    }
  }
  Testimonials_slider();

  // /*-------------------------------------------------------------------------------
  //   Counter up js
  // -------------------------------------------------------------------------------*/
  function counterActivator() {
    if ($(".counter").length) {
      $(".counter").counterUp({
        delay: 70,
        time: 3000,
      });
    }
  }
  counterActivator();
  /*----------------------------------------------------*/
  /*  Wow Animation Active js
    /*----------------------------------------------------*/
  function bodyScrollAnimation() {
    var scrollAnimate = $("body").data("scroll-animation");
    if (scrollAnimate === true) {
      new WOW({
        mobile: false,
      }).init();
    }
  }
  bodyScrollAnimation();
})(jQuery);

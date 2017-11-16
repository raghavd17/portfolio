(function($) {
    'use strict';
  $(window).scroll(function() {
    resizeMenu();
  });
  $(window).resize(function() {
    resizeMenu();
  });
  // on scroll window hide menu breakpoints for mobile
  function resizeMenu () {
    var windowSize = $(window).width();
    var sm = 480;
    if(windowSize <= sm + 50 ) {
      return false;
    }
    else {
      navClose();
    }
  }
  // function to close the top navigation
  function navClose () {
    $('.nav__navbar').removeClass('nav__navbar--active');
  }
  // function for top nav toggle
  function navToggle() {
    $('.nav__navbar').toggleClass('nav__navbar--active');
    $('.icon-close').fadeIn();
  }
  // nav toggle event trigger
  $('body').on('click','.js-nav__navbar',function () {
    navToggle();
  });
  $(document).click(function(e) {
       if (!$(e.target).is('.nav *')) {
           navClose();
       }
   });

}(jQuery));

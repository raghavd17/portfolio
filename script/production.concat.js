/*! lilpop - v1.0.0 - 2017-11-23
* http://homepage.com
* Copyright (c) 2017 ; Licensed  */
jQuery(document).ready(function($) {

	var my_nav = $('.navbar-sticky');
	// grab the initial top offset of the navigation
	var sticky_navigation_offset_top = my_nav.offset().top;

	// our function that decides weather the navigation bar should have "fixed" css position or not.
	var sticky_navigation = function(){
		var scroll_top = $(window).scrollTop(); // our current vertical position from the top

		// if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
		if (scroll_top > sticky_navigation_offset_top) {
			my_nav.addClass( 'stick' );
		} else {
			my_nav.removeClass( 'stick' );
		}
	};

	var initio_parallax_animation = function() {
		$('.parallax').each( function(i, obj) {
			var speed = $(this).attr('parallax-speed');
			if( speed ) {
				var background_pos = '-' + (window.pageYOffset / speed) + "px";
				$(this).css( 'background-position', 'center ' + background_pos );
			}
		});
	}

	// run our function on load
	sticky_navigation();

	// and run it again every time you scroll
	$(window).scroll(function() {
		 sticky_navigation();
		 initio_parallax_animation();
	});

});
;(function($) {
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

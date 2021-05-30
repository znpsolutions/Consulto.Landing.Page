(function ($) {
    "use strict";

/* ==========================================================================
  // header stickey activation
========================================================================== */
$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
      $(".header-sticky").removeClass("sticky");
    } else {
      $(".header-sticky").addClass("sticky");
    }
  });
//nice select
$('select').niceSelect();
   /* -----------------------------------
	      	4. AnimatedHeadline
	----------------------------------- */
  $('.overly-cont-text').animatedHeadline({
    animationType: 'type',
    animationDelay: 2500,
    barAnimationDelay: 3800,
    barWaiting: 800,
    lettersDelay: 50,
    typeLettersDelay: 150,
    selectionDuration: 500,
    typeAnimationDelay: 1300,
    revealDuration: 600,
    revealAnimationDelay: 1500
});

})(jQuery);	  

const navbar = document.querySelector( ".navbar-nav" );
a = navbar.querySelectorAll( "a" );


a.forEach( function ( element ) {
    element.addEventListener( "click", function () {
        for ( let i = 0; i < a.length; i++ ) {
            a[ i ].classList.remove( "active" );
        }

        this.classList.add( "active" )
        document.querySelector( ".navbar-nav" ).classList.toggle( "show" );
        $( ".navbar-collapse" ).collapse( "hide" );

    } )
} )      
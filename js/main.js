// Hamburgermenu
//Animated bergers: jonsuh.com/hamburgers
$(document).ready(function(){
   $(".menu").click(function(){
       $(".slide").toggleClass("opennav");
       $(".menu").toggleClass("actief");
   });
});

// Parallax : PixelCog Inc : http://pixelcog.github.io/parallax.js
$(".parallax-header").parallax({
    imageSrc: "images/intro-bg.jpg"
});

$(".parallax-section-four").parallax({
    imageSrc: "images/testimonials-bg.jpg"
});

// Scroll to top : Paulund : https://paulund.co.uk/how-to-create-an-animated-scroll-to-top-button-with-jquery
$(document).ready(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},1000);
        return false;
    });

});

// Change viewheight nav bar mobile - https://stackoverflow.com/questions/23755401/toggle-div-height-upon-onclick

$(document).ready(function() {
  $('.menu').data( 'clicks', 0 );
   $(".menu").on( 'click', function() {
      var clicks = +$( this ).data( 'clicks' );
      if( clicks % 2 === 0 ) {
         $("#mainnav").animate({height:'100vh'});
      } else {
         $("#mainnav").animate({height:'100px'});
      }
      $( this ).data( 'clicks', clicks + 1 );
   });
});


//Portfolio

$(function() {
		var selectedClass = "";
        $(".fil-cat").click(function(){ 
		selectedClass = $(this).attr("data-rel"); 
         $("#portfolio").fadeTo(100, 0.1);
            $("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
        setTimeout(function() {
          $("."+selectedClass).fadeIn().addClass('scale-anm');
          $("#portfolio").fadeTo(300, 1);
        }, 300); 

        });
});


// Smooth scroll to named anchor : Chris Coyier : https://css-tricks.com/snippets/jquery/smooth-scrolling/
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


//Sticky

$(document).ready(function() {
			// grab the initial top offset of the navigation 
		   	var stickyNavTop = $('.nav').offset().top;
		   	
		   	// our function that decides weather the navigation bar should have "fixed" css position or not.
		   	var stickyNav = function(){
			    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
			         
			    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
			    // otherwise change it back to relative
			    if (scrollTop > stickyNavTop) { 
			        $('.nav').addClass('sticky');
			    } else {
			        $('.nav').removeClass('sticky'); 
			    }
			};

			stickyNav();
			// and run it again every time you scroll
			$(window).scroll(function() {
				stickyNav();
			});
		});


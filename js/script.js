// staart navbar
$(document).ready(function(){
	$(window).scroll(function(){

 	  var sc = $(this).scrollTop();
		if (sc > 50) {

			$("header").addClass("top-scroll");
			$("header .logo").css("color", "#000");
			$("header .nav-list a").css("color", "#000");
            $("header .nav-list li").css("borderBottom", "solid 1px #00A4B9");
			$("header .link .lin").css({
			 "border": "solid 2px #00A4B9",
			  "color": "#00A4B9"
			});

		}
  else {
		$("header").removeClass("top-scroll")
		$("header .logo").css("color", "#FFF");
		$("header .nav-list a").css("color", "#FFF");
		$("header .nav-list li").css("border", "none");
		$("header .link .lin").css({

		 "border": "solid 2px #FFFF",
			"color": "#FFF"
		});
  }
});

$("  header .row i").click(function(){
	$("header .nav-list").slideToggle();

});

$("header .nav-list li").click(function() {
$(this).addClass('active').siblings().removeClass("active");
});

	$("header .nav-list a").click(function(){

	  $('body,html').animate({
		 scrollTop : $($(this).attr('href')).offset().top -100
		});
	});


// End navbar

// owl-carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    dots:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
// End-carousel

// start slick
$('.slick').slick({
	nextArrow :false,
	prevArrow:false,
});
// End slick

});

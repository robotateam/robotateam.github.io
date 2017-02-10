/* golobal $,alert, console */




$(function () {

	"use strict"

	// ----------------------------
	// scroll-btn 
	// ----------------------------
	var pos = $('#wowslider-container1').height() - 80;
	$(".scroll-btn").css('top', pos);
	// ----------------------------
	// navigate scroll down
	// ----------------------------
	$('.scroll-btn a').on('click', function () {
		$('html, body').animate({
			scrollTop: $('#about').offset().top
		}, 1000);
	});
	// ----------------------------
	// navigate
	// ----------------------------
	$('.navbar-nav li a').on('click', function () {
		$('html, body').animate({
			scrollTop: $('#' + $(this).data('value')).offset().top
		}, 1000);
	});
	// ----------------------------
	// scroll bar
	// ----------------------------
	$("html").niceScroll({
		cursorcolor: "#00C7FC"
		, cursoropacitymin: 1
		, cursoropacitymax: 1
		, cursorwidth: "8px"
		, cursorborderradius: "5px"
		, zindex: "auto",
		 scrollspeed: 800, 
    mousescrollstep: 300,
	 });

	// ----------------------------
	// hidden navbar on scrolling down
	// ----------------------------
	$(".navbar-fixed-top").autoHidingNavbar({});

	// ----------------------------
	//counter
	// ----------------------------
	$(".fact-item").appear(function () {
		$(".fact-item [data-to]").each(function () {
			var e = $(this).attr("data-to");
			$(this).delay(6e3).countTo({
				from: 50
				, to: e
				, speed: 3e3
				, refreshInterval: 50
			})
		})
	});





	// ----------------------------
	// Accordion
	// ----------------------------
	$('.accordion').click(function () {
		$('.accContent').slideUp('slow');

		if ($(this).next().is(':hidden') == true) {
			$(this).next().slideDown('slow');
		}
	});
	$('.accContent').hide(); // Hide Content
	$('.home').show(); // Show the "Home" content by Default



	// ----------------------------
	// scroll to top
	// ----------------------------
	$(window).scroll(function () {
		if ($(this).scrollTop() > 750) {
			$('#back-to-top').addClass("visible");
		} else {
			$('#back-to-top').removeClass("visible");
		}
	});

	$('#back-to-top').click(function () {
		$('html, body').animate({
			scrollTop: ($('#header').offset().top) - 20
		}, 2000);
	});




	// ----------------------------
	// Section bg color cycling
	// ----------------------------
	$('.animated-bg').each(function () {
		var $this = $(this)
			, colors = ['#ec008c', '#00bcc3', '#5fb26a', '#fc7331'];

		setInterval(function () {
			var color = colors.shift();
			colors.push(color);
			$this.animate({
				backgroundColor: color
			}, 2000);
		}, 4000);
	});
	
	
// ----------------------------	
// On scroll fade/bounce fffect
// ----------------------------
  
    var wow = new WOW({
        animateClass: 'animated',
        offset: 50,
        mobile: false
    });
    wow.init();

	
	// ----------------------------
//loader 
// ----------------------------
$(window).on('load', function () {
	$(".preloader-box").fadeOut(1000,function(){
		$(this).parent().fadeOut(2000);
	});
	$(this).remove();


});

});
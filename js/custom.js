$(document).ready(function() {

	// SCROLLED
	$(window).scroll(function() {
		$('#header').toggleClass('header-scrolled', $(this).scrollTop() > 0);
	});


	// RESPONSIVE MENU (SHOW)
	$('#nav-show').click(function() {
		$('#nav-show').removeClass('show');
		$('#nav-show').addClass('hide');
		$('#nav-hide').removeClass('hide');
		$('#nav-hide').addClass('show');
		$('#header-nav-mobile').addClass('header-nav-mobile-show');
	});
	// RESPONSIVE MENU (HIDE)
	$('#nav-hide').click(function() {
		$('#nav-show').removeClass('hide');
		$('#nav-show').addClass('show');
		$('#nav-hide').removeClass('show');
		$('#nav-hide').addClass('hide');
		$('#header-nav-mobile').removeClass('header-nav-mobile-show');
	});


	// TESTIMONIALS
	$("#cslide-slides").cslide();


	// BACK TO TOP
	$('#totop').click(function() {
		$('html, body').animate({'scrollTop': '0px'}, 1000);
		return false;
	});


});
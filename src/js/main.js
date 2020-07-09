$(document).ready(function () {
		ibg();
	$('.intro-slider').slick({
		arrows: false,
		dots: true,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 8000
	});

	$('.slider-cats').slick({
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 4
	});

});

function ibg() {
  $.each($('.ibg'), function (index, val) {
    if ($(this).find('img').length > 0) {
      $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
    }
  });
}

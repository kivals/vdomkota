$(document).ready(function () {
	$('.intro-slider').slick({
		arrows: false,
		dots: true,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 5000
	});
	ibg();
});

function ibg() {
  $.each($('.ibg'), function (index, val) {
    if ($(this).find('img').length > 0) {
      $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
    }
  });
}

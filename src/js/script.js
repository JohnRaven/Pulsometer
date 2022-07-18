// JS для slick-слайдера:
$(document).ready(function(){
	$('.carousel__inner').slick({
		speed: 1200,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/icon_chevron_left.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/icon_chevron_right.png"></button>',
		responsive: [
			{
				breakpoint: 992,		//от 0px до 992px
				settings: {
					dots: true,
					arrows: false
				}
			}
		]
	});
});
//----------------------------

// JS для tiny-слайдера:
	// const slider = tns({
	// 	container: '.carousel__inner',
	// 	items: 1,
	// 	slideBy: 'page',
	// 	autoplay: false,
	// 	controls: false,
	// 	nav: false
	// });

	// document.querySelector('.prev').addEventListener('click', function () {
	// 	slider.goTo('prev');
	// });
	// document.querySelector('.next').addEventListener('click', function () {
	// 	slider.goTo('next');
	// });
//----------------------------

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

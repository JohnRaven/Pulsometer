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

	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});
});
//----------------------------

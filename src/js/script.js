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

// описание товара ("обратная сторона"):
	// $('.catalog-item__link').each(function (i) {
	// 	$(this).on('click', function (e) {
	// 		e.preventDefault();
	// 		$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
	// 		$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
	// 	})
	// });
	// $('.catalog-item__back').each(function (i) {
	// 	$(this).on('click', function (e) {
	// 		e.preventDefault();
	// 		$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
	// 		$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
	// 	})
	// });

// предыдущий код можно заменить на:
	function toggleSlide(item) {
		$(item).each(function (i) {
			$(this).on('click', function (e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			})
		});
	}
	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');
});
//----------------------------

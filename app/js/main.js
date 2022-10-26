$(function () {
	$('.header__burger').on('click', function () {
		$('.header__burger').toggleClass('header__burger_active');
		$('.header__menu').toggleClass('header__menu_active');
		$('.header__bottom').toggleClass('header__bottom_fixed');
		$('body').toggleClass('lock');
	});

	$('.gallery__tabs .tab').on('click', function (event) {
		var id = $(this).attr('data-id');
		$('.gallery__tabs').find('.tab__item').removeClass('tab__item_active').hide();
		$('.gallery__tabs .tabs').find('.tab').removeClass('tab_active');
		$(this).addClass('tab_active');
		$('#' + id).addClass('tab__item_active').fadeIn();
		return false;
	});
});


let isMobile = {
	Android: function () { return navigator.userAgent.match(/Android/i); },
	BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
	iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
	Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
	Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
	any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};
let body = document.querySelector('body');
if (isMobile.any()) {
	body.classList.add('touch');
	let arrow = document.querySelectorAll('.arrow');
	for (i = 0; i < arrow.length; i++) {
		let thisLink = arrow[i].previousElementSibling;
		let subMenu = arrow[i].nextElementSibling;
		let thisArrow = arrow[i];

		thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function () {
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}
} else {
	body.classList.add('mouse');
	let arrow = document.querySelectorAll('.arrow');
	for (i = 0; i < arrow.length; i++) {
		let thisLink = arrow[i].previousElementSibling;
		let subMenu = arrow[i].nextElementSibling;
		let thisArrow = arrow[i];

		thisLink.classList.add('parent');

	}
}

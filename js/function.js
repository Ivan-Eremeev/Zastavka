$(document).ready(function () {

	// Отмена перехода по пустым ссылкам
	$('a[href="#"]').click(function(e) {
		e.preventDefault();
	});

	// Экран по высоте окна браузера
	function setHeiHeight() {
	    $('.full__height').css({
	        minHeight: $(window).height() + 'px'
	    });
	};
	setHeiHeight(); // устанавливаем высоту окна при первой загрузке страницы
	$(window).resize( setHeiHeight ); // обновляем при изменении размеров окна

	// Мобильное меню
	// $('.menuBtn').click(function () {
	// 	var menu = $(this).closest('#menu');
	// 	var over = $(this).siblings('.menu_over');
	// 	var btn = $(this);
	// 	menu.toggleClass('open');
	// 	btn.toggleClass('is-active');
	// 	over.click(function() {
	// 		menu.removeClass('open');
	// 		btn.removeClass('is-active');
	// 	});
	// 	menu.find('a').click(function() {
	// 		menu.removeClass('open');
	// 		btn.removeClass('is-active');
	// 	});
	// });
	

	// Scroll to ID // Плавный скролл к элементу при нажатии на ссылку. В ссылке указываем ID элемента
	// $('#main__menu a[href^="#"]').click( function(){ 
	// 	var scroll_el = $(this).attr('href'); 
	// 	if ($(scroll_el).length != 0) {
	// 	$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
	// 	}
	// 	return false;
	// });

	// Stiky menu // Липкое меню. При прокрутке к элементу #header добавляется класс .stiky который и стилизуем
	// var HeaderTop = $('#header').offset().top;
	// $(window).scroll(function(){
	// 	if( $(window).scrollTop() > HeaderTop ) {
	// 		$('#header').addClass('stiky');
	// 	} else {
	// 		$('#header').removeClass('stiky');
	// 	}
	// });

	// Inputmask.js // Маска для поля ввода телефона
	// $('[name=tel]').inputmask("+9(999)999 99 99",{ showMaskOnHover: false });

	// Изменяет размер шрифта у тэга html взависимости от размера экрана (для резиновых страниц)(размеры должны быть в rem)
	function fontResize() {
		var windowWidth = $(window).width();
    if (windowWidth < 1920) {
    	var fontSize = windowWidth/19.05;
    } else if (windowWidth >= 1920) {
    	var fontSize = 100;
    }
		$('body').css('fontSize', fontSize + '%');
	};
	fontResize()

	// Табы
	// $('.tabs_trigger').find('li').click(function() {
	// 	var trigger = $(this),
	// 			allTrigger = trigger.siblings();
	// 			content = trigger.parent().siblings('.tabs_content').find('div'),
	// 			index = trigger.index();
	// 	allTrigger.removeClass('active');
	// 	trigger.addClass('active');
	// 	content.addClass('hide');
	// 	content.eq(index).removeClass('hide');
	// });

	// Аккордеон
	// $('.accordeon_trigger').click(function() {
	// 	var trigger = $(this),
	// 			allTrigger = trigger.parent().parent().find('.accordeon_trigger'),
	// 			content = trigger.siblings('.accordeon_content'),
	// 			allContent = trigger.parent().parent().find('.accordeon_content'),
	// 			time = 300;
	// 	if (!content.hasClass('open')) {
	// 		allContent.slideUp(time).removeClass('open');
	// 		content.slideDown(time).addClass('open');
	// 	}
	// 	else {
	// 		content.slideUp(time).removeClass('open');
	// 	}
	// });

	// matchHeight // Задание елементам одинаковой высоты
	// $('.item').matchHeight();

	// Слежение за изменением размера окна браузера
	$(window).resize(function() {
		fontResize()
	});
	
});
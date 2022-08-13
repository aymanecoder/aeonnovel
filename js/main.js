$(document).ready(function () {
	"use strict"; // start of use strict

	/*==============================
	Header
	==============================*/

	$('verified').bind('contextmenu', function (e) {
	});


	var mainHeader = $('.header--hidden');
	var scrolling = false,
		previousTop = 0,
		currentTop = 0,
		scrollDelta = 10,
		scrollOffset = 140;

	var scrolling = false;
	$(window).on('scroll', function () {
		if (!scrolling) {
			scrolling = true;
			(!window.requestAnimationFrame)
				? setTimeout(autoHideHeader, 250)
				: requestAnimationFrame(autoHideHeader);
		}
	});
	$(window).trigger('scroll');

	function autoHideHeader() {
		var currentTop = $(window).scrollTop();
		checkSimpleNavigation(currentTop);
		previousTop = currentTop;
		scrolling = false;
	}

	function checkSimpleNavigation(currentTop) {
		if (previousTop - currentTop > scrollDelta) {
			mainHeader.removeClass('header--scroll');
		} else if (currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
			mainHeader.addClass('header--scroll');
		}
	}
	function disableScrolling() {
		var x = window.scrollX;
		var y = window.scrollY;
		window.onscroll = function () { window.scrollTo(x, y); };
	}

	function enableScrolling() {
		window.onscroll = function () { };
	}

	$('.header__menu').on('click', function () {
		$('.header__menu').toggleClass('header__menu--active');
		$('.header').toggleClass('header--menu');
		$('.header__nav').toggleClass('header__nav--active');

		if ($('.header__nav').hasClass('header__nav--active')) {
			disableScrolling();
		} else {
			enableScrolling();
		}
	});

	$('.header__search, .header__form-close').on('click', function () {
		$('.header__form').toggleClass('header__form--active');
	});

	$('.form__gallery-upload').on('change', function () {
		var length = $(this).get(0).files.length;
		var galleryLabel = $(this).attr('data-name');

		if (length > 1) {
			$(galleryLabel).text(length + " files selected");
		} else {
			$(galleryLabel).text($(this)[0].files[0].name);
		}
	});

	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 0) {
			$('.header--fixed').addClass('header--active');
		} else {
			$('.header--fixed').removeClass('header--active');
		}
	});
	$(window).trigger('scroll');

	/*==============================
	Multi level dropdowns
	==============================*/
	$('ul.dropdown-menu [data-toggle="dropdown"]').on('click', function (event) {
		event.preventDefault();
		event.stopPropagation();

		$(this).siblings().toggleClass('show');
	});

	$(document).on('click', function (e) {
		$('.dropdown-menu').removeClass('show');
	});

	/*==============================
	Home carousel
	==============================*/
	$('.home__carousel').owlCarousel({
		mouseDrag: true,
		touchDrag: true,
		dots: true,
		loop: true,
		autoplay: false,
		smartSpeed: 600,
		margin: 20,
		autoHeight: true,
		autoWidth: true,
		responsive: {
			0: {
				items: 2,
			},
			576: {
				items: 2,
				margin: 20,
			},
			768: {
				items: 2,
				margin: 30,
				center: true,
			},
			1200: {
				items: 3,
				margin: 30,
				center: true,
				mouseDrag: false,
				dots: false,
				startPosition: 1,
				slideBy: 3,
			},
		}
	});

	/*==============================
	Select
	==============================*/
	$('.catalog__select').select2({
		minimumResultsForSearch: Infinity
	});

	/*==============================
	Carousel
	==============================*/
	$('.section__carousel').owlCarousel({
		mouseDrag: true,
		touchDrag: true,
		dots: true,
		loop: true,
		autoplay: false,
		smartSpeed: 600,
		margin: 20,
		autoHeight: true,
		responsive: {
			0: {
				items: 2,
			},
			576: {
				items: 3,
			},
			768: {
				items: 3,
				margin: 30,
			},
			992: {
				items: 4,
				margin: 30,
			},
			1200: {
				items: 6,
				margin: 30,
				dots: false,
				mouseDrag: false,
				slideBy: 6,
				smartSpeed: 400,
			},
		}
	});

	/*==============================
	Interview
	==============================*/
	$('.section__interview').owlCarousel({
		mouseDrag: true,
		touchDrag: true,
		dots: true,
		loop: true,
		autoplay: false,
		smartSpeed: 600,
		margin: 20,
		autoHeight: true,
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 2,
			},
			768: {
				items: 2,
				margin: 30,
			},
			992: {
				items: 3,
				margin: 30,
			},
			1200: {
				items: 3,
				margin: 30,
				dots: false,
				mouseDrag: false,
				slideBy: 3,
				autoplay: true,
				autoplayTimeout: 5000,
				autoplayHoverPause: true,
			},
		}
	});

	/*==============================
	Series
	==============================*/
	$('.section__series').owlCarousel({
		mouseDrag: true,
		touchDrag: true,
		dots: true,
		loop: true,
		autoplay: false,
		smartSpeed: 600,
		margin: 20,
		autoHeight: true,
		responsive: {
			0: {
				items: 2,
			},
			576: {
				items: 3,
			},
			768: {
				items: 3,
				margin: 20,
			},
			992: {
				items: 4,
				margin: 20,
			},
			1200: {
				items: 5,
				margin: 20,
				dots: false,
				mouseDrag: false,
			},
			1440: {
				items: 5,
				margin: 20,
				dots: false,
				mouseDrag: false,
			},
		}
	});

	/*==============================
	Live
	==============================*/
	$('.section__live').owlCarousel({
		mouseDrag: true,
		touchDrag: true,
		dots: true,
		loop: true,
		autoplay: false,
		smartSpeed: 600,
		margin: 20,
		autoHeight: true,
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 2,
			},
			768: {
				items: 2,
				margin: 30,
			},
			992: {
				items: 3,
				margin: 30,
			},
			1200: {
				items: 3,
				margin: 30,
				dots: false,
				mouseDrag: false,
				slideBy: 3,
			},
		}
	});

	/*==============================
	Partners
	==============================*/
	$('.partners').owlCarousel({
		mouseDrag: false,
		touchDrag: false,
		dots: false,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		smartSpeed: 600,
		margin: 20,
		responsive: {
			0: {
				items: 2,
			},
			576: {
				items: 2,
				margin: 30,
			},
			768: {
				items: 3,
				margin: 30,
			},
			992: {
				items: 4,
				margin: 30,
			},
			1200: {
				items: 6,
				margin: 30,
			},
		}
	});

	/*==============================
	Navigation
	==============================*/
	$('.section__nav--prev, .home__nav--prev').on('click', function () {
		var carouselId = $(this).attr('data-nav');
		$(carouselId).trigger('prev.owl.carousel');
	});
	$('.section__nav--next, .home__nav--next').on('click', function () {
		var carouselId = $(this).attr('data-nav');
		$(carouselId).trigger('next.owl.carousel');
	});

	/*==============================
	Bg
	==============================*/
	$('.section--full-bg').each(function () {
		if ($(this).attr("data-bg")) {
			$(this).css({
				'background': 'url(' + $(this).data('bg') + ')',
				'background-position': 'center center',
				'background-repeat': 'no-repeat',
				'background-size': 'cover'
			});
		}
	});

	$('.section__bg').each(function () {
		if ($(this).attr("data-bg")) {
			$(this).css({
				'background': 'url(' + $(this).data('bg') + ')',
				'background-position': 'top center',
				'background-repeat': 'no-repeat',
				'background-size': 'cover'
			});
		}
	});

	/*==============================
	Player
	==============================*/
	const controls=[
		'play-large', // The large play button in the center
		// 'restart', // Restart playback
		'rewind', // Rewind by the seek time (default 10 seconds)
		'play', // Play/pause playback
		'fast-forward', // Fast forward by the seek time (default 10 seconds)
		'progress', // The progress bar and scrubber for playback and buffering
		'current-time', // The current time of playback
		'duration', // The full duration of the media
		'mute', // Toggle mute
		'volume', // Volume control
		'captions', // Toggle captions
		'settings', // Settings menu
		'pip', // Picture-in-picture (currently Safari only)
		'airplay', // Airplay (currently Safari only)
		// 'download', // Show a download button with a link to either the current source or a custom URL you specify in your options
		'fullscreen', // Toggle fullsc
	];
	function initializePlayer() {
		if ($('#player').length) {
			window.mainPlayer = Plyr.setup('.js-player', { controls });
			// window.mainPlayer.on('ready', function () {
			// 	$('#player').get(0).load()
				
				

			// });
			
			// window.mainPlayer.on('loadeddata', function () {
			// 	window.mainPlayer.currentTime = window.playerData.video_state;
			// })

			// window.mainPlayer.on('pause', function () {
			// 	save_watch_state()
			// });
			// window.mainPlayer.setup('.js-player',{controls})
		} else {
			return false;
		}
		return false;
	}
	$(window).on('load', initializePlayer());

	/*==============================
	Modal
	==============================*/
	$('.open-video').magnificPopup({
		disableOn: 500,
		fixedContentPos: true,
		type: 'iframe',
		preloader: false,
		removalDelay: 300,
		mainClass: 'mfp-fade',
		callbacks: {
			open: function () {
				if ($(window).width() > 1200) {
					$('.header').css('margin-left', "-" + (getScrollBarWidth() / 2) + "px");
				}
			},
			close: function () {
				if ($(window).width() > 1200) {
					$('.header').css('margin-left', 0);
				}
			}
		}
	});

	$('.open-modal').magnificPopup({
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: false,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in',
	});

	$('.modal__close').on('click', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

	function getScrollBarWidth() {
		var $outer = $('<div>').css({ visibility: 'hidden', width: 100, overflow: 'scroll' }).appendTo('body'),
			widthWithScroll = $('<div>').css({ width: '100%' }).appendTo($outer).outerWidth();
		$outer.remove();
		return 100 - widthWithScroll;
	};

	/*==============================
	Scrollbar
	==============================*/
	var Scrollbar = window.Scrollbar;

	if ($('.header__nav-menu--scroll').length) {
		Scrollbar.init(document.querySelector('.header__nav-menu--scroll'), {
			damping: 0.1,
			renderByPixels: true,
			alwaysShowTracks: true,
			continuousScrolling: true
		});
	}

	if ($('.dashbox__table-wrap--1').length) {
		Scrollbar.init(document.querySelector('.dashbox__table-wrap--1'), {
			damping: 0.1,
			renderByPixels: true,
			alwaysShowTracks: true,
			continuousScrolling: true
		});
	}

	if ($('.dashbox__table-wrap--2').length) {
		Scrollbar.init(document.querySelector('.dashbox__table-wrap--2'), {
			damping: 0.1,
			renderByPixels: true,
			alwaysShowTracks: true,
			continuousScrolling: true
		});
	}
});

window.lifecycle.addEventListener('statechange', function (event) {
	save_watch_state();
});

window.onbeforeunload = save_watch_state();

function save_watch_state() {
	if (window.mainPlayer && window.mainPlayer.currentTime > 0) {
		var url = '/const/ajax/video_state.php';
		var episode = (new URLSearchParams(location.search)).get('crt_ep') || 1;
		var form = new FormData();
		var matchId = window.location.href.match(/(?<=\/item\/)\d+/, '');

		if (Array.isArray(matchId)) {
			matchId = matchId[0];
		}

		form.append('time', window.mainPlayer.currentTime);
		form.append('episode', episode);
		form.append('item_id', matchId);

		navigator.sendBeacon(url, form);
	}
}
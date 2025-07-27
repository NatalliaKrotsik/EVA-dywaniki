var mySwiperPortfolio = new Swiper('.portfolio__slider', {
	navigation: {
		nextEl: '.swiper-button-prev',
		prevEl: '.swiper-button-next',
	},
	slidesPerView: 1,
	speed: 400,
	loop: true,
	zoom: true,
	toggle: true,
	breakpoints: {
		320: {
			slidesPerView: 1
		},
		375: {
			slidesPerView: 1
		},
		700: {
			slidesPerView: 1
		},
		1100: {
			slidesPerView: 1
		}
	},
});
//mySwiperPortfolio.lazy.load();
var mySwiperReview = new Swiper('.reviews__slider', {
	// navigation: {
	// 	nextEl: '.swiper-button-prev',
	// 	prevEl: '.swiper-button-next',
	// },
	slidesPerView: 3,
	speed: 400,
	loop: true,
	spaceBetween: 70,
	centeredSlides: true,
	slideToClickedSlide: true,
	// autoHeight: true,
	// zoom: true,
	 toggle: true,
	breakpoints: {
		320: {
			slidesPerView: 1
		},
		375: {
			slidesPerView: 1
		},
		768: {
			slidesPerView: 2
		},
		1100: {
			slidesPerView: 3
		}
	},
});
// mySwiperReview.changeDirection(direction, needUpdate)
// window.addEventListener('resize', () => {
// 	const windowWidth = document.documentElement.clientWidth;
// 	if(windowWidth < 768){
// 		mySwiperReview.changeDirection('vertical', true)
// 	}
// });
// const windowWidth = document.documentElement.clientWidth;
//let mySwiperReview;
// if(windowWidth > 768){
// 	mySwiperReview = new Swiper('.reviews__slider', {
// 		// navigation: {
// 		// 	nextEl: '.swiper-button-prev',
// 		// 	prevEl: '.swiper-button-next',
// 		// },
// 		slidesPerView: 3,
// 		speed: 400,
// 		loop: true,
// 		spaceBetween: 70,
// 		centeredSlides: true,
// 		slideToClickedSlide: true,
// 		// autoHeight: true,
// 		// zoom: true,
// 		toggle: true,
// 		breakpoints: {
// 			320: {
// 				slidesPerView: 1
// 			},
// 			375: {
// 				slidesPerView: 1
// 			},
// 			768: {
// 				slidesPerView: 2
// 			},
// 			1100: {
// 				slidesPerView: 3
// 			}
// 		},
// 	});
// } else  {
// 	mySwiperReview = new Swiper('.reviews__slider', {
// 		// navigation: {
// 		// 	nextEl: '.swiper-button-prev',
// 		// 	prevEl: '.swiper-button-next',
// 		// },
// 		slidesPerView: 3,
// 		speed: 400,
// 		loop: true,
// 		spaceBetween: 70,
// 		centeredSlides: true,
// 		slideToClickedSlide: true,
// 		// autoHeight: true,
// 		// zoom: true,
// 		direction: 'vertical',
// 		toggle: true,
// 		breakpoints: {
// 			320: {
// 				slidesPerView: 1
// 			},
// 			375: {
// 				slidesPerView: 1
// 			},
// 			768: {
// 				slidesPerView: 2
// 			},
// 			1100: {
// 				slidesPerView: 3
// 			}
// 		},
// 	});
// }
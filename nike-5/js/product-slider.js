export const productSlider = () => {
	new Swiper(".product__slider", {
		sliderPreView: "auto",
		centerSlides: true,
		loop: true,
		mousewheel: {
			forceToAxis: true,
		},
		navigation: {
			prevEl: ".product__slider-button--prev",
			nextEl: ".product__slider-button--next",
		},
	});
};

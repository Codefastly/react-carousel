import { isCompletelyVisible } from "./isCompletelyVisible";

function scrollSliderTo(slider: HTMLElement, horizontalPosition: number): void {
	const verticalPosition = 0;

	slider.scrollTo(horizontalPosition, verticalPosition);
}

function getAllSlidesFromSlider(slider: HTMLElement): HTMLElement[] {
	const slides = slider.querySelectorAll<HTMLElement>(".carousel__slide");

	return Array.from(slides);
}

export function scrollSliderNext(slider: HTMLElement): void {
	const slides = getAllSlidesFromSlider(slider);

	let firstNotVisibleSlideAfterVisibleSlide;
	let firstVisibleSlide;

	for (const slide of slides) {
		if (!firstVisibleSlide && isCompletelyVisible(slide)) {
			firstVisibleSlide = slide;
			continue;
		}

		if (firstVisibleSlide && !isCompletelyVisible(slide)) {
			firstNotVisibleSlideAfterVisibleSlide = slide;
			break;
		}
	}

	// Position from first positioned parent
	const initialScrollPosition = 0;
	const position = firstNotVisibleSlideAfterVisibleSlide?.offsetLeft ?? initialScrollPosition;

	scrollSliderTo(slider, position);
}

export function scrollSliderPrev(slider: HTMLElement): void {
	if (!slider.parentElement) {
		throw new Error("Could not find carousel div");
	}

	const carouselWidth = slider.parentElement.clientWidth;

	if (slider.scrollLeft === 0) {
		scrollSliderTo(slider, carouselWidth);

		return;
	}

	const slides = getAllSlidesFromSlider(slider);

	let firstVisibleSlideIndex = null;

	for (const [index, slide] of slides.entries()) {
		if (isCompletelyVisible(slide as HTMLElement)) {
			firstVisibleSlideIndex = index as number;
			break;
		}
	}

	if (firstVisibleSlideIndex === null) {
		return;
	}

	let accumulateWidth = 0;
	let slideToScrollTo = slides[firstVisibleSlideIndex];

	for (let i = firstVisibleSlideIndex; i >= 0; i--) {
		accumulateWidth += slides[i].clientWidth;
		slideToScrollTo = slides[i];

		if (accumulateWidth > carouselWidth) {
			break;
		}
	}

	const position = slideToScrollTo.offsetLeft;

	scrollSliderTo(slider, position);
}

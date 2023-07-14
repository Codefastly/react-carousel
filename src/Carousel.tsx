import "./Carousel.scss";

import { useRef } from "react";

import { ArrowLeft } from "./ArrowLeft";
import { ArrowRight } from "./ArrowRight";
import { scrollSliderNext, scrollSliderPrevious } from "./core/scroll";

export interface CarouselProps {
	children: JSX.Element[];
	prevAriaLabel?: string;
	nextAriaLabel?: string;
	nextButtonContent?: React.ReactNode;
	prevButtonContent?: React.ReactNode;
}

export const Carousel: React.FC<CarouselProps> = ({
	children,
	prevAriaLabel = "Previous",
	nextAriaLabel = "Next",
	nextButtonContent = <ArrowRight />,
	prevButtonContent = <ArrowLeft />,
}) => {
	const sliderRef = useRef<HTMLDivElement>(null);

	const getSliderOrThrow = (): HTMLDivElement => {
		if (!sliderRef.current) {
			throw new Error("Slider not found");
		}

		return sliderRef.current;
	};

	const scrollNext = () => {
		const slider = getSliderOrThrow();

		scrollSliderNext(slider);
	};

	const scrollPrev = () => {
		const slider = getSliderOrThrow();

		scrollSliderPrevious(slider);
	};

	return (
		<div className="carousel">
			<div ref={sliderRef} className="carousel__slider">
				{children.map((child, index) => (
					<div key={index} className="carousel__slide">
						{child}
					</div>
				))}
			</div>
			<div className="carousel__nav">
				<button onClick={scrollPrev} className="carousel__button" aria-label={prevAriaLabel}>
					{prevButtonContent}
				</button>
				<button onClick={scrollNext} className="carousel__button" aria-label={nextAriaLabel}>
					{nextButtonContent}
				</button>
			</div>
		</div>
	);
};

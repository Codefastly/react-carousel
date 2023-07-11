import "./Carousel.scss";

import { ArrowLeft } from "./ArrowLeft";
import { ArrowRight } from "./ArrowRight";

interface CarouselProps {
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
	return (
		<div className="carousel">
			<div className="carousel__slider">
				{children.map((child, index) => (
					<div key={index} className="carousel__slide">
						{child}
					</div>
				))}
			</div>
			<div className="carousel__nav">
				<button className="carousel__button" aria-label={prevAriaLabel}>
					{prevButtonContent}
				</button>
				<button className="carousel__button" aria-label={nextAriaLabel}>
					{nextButtonContent}
				</button>
			</div>
		</div>
	);
};

import { Carousel } from "../../src/Carousel";
import { isCompletelyVisible } from "../../src/core/isCompletelyVisible";

describe("isCompletelyVisible", () => {
	it("returns true if a slide is completely visible", () => {
		const carouselWithFirstSlideCompletelyVisible = (
			<div style={{ width: "900px" }}>
				<Carousel>
					<div style={{ background: "yellow", width: "300px", height: "300px" }}>Slide 1</div>
					<div style={{ background: "yellow", width: "300px", height: "300px" }}>Slide 2</div>
					<div style={{ background: "yellow", width: "300px", height: "300px" }}>Slide 3</div>
				</Carousel>
			</div>
		);

		cy.mount(carouselWithFirstSlideCompletelyVisible);

		const completelyVisibleSlide = ".carousel__slide:first-child";

		cy.get(completelyVisibleSlide).should(($el) => {
			const htmlElement = $el.get(0);

			expect(isCompletelyVisible(htmlElement)).to.be.true;
		});
	});

	it("returns false if a slide is not completely visile", () => {
		const carouselWithThirdSlideNotCompletelyVisible = (
			<div style={{ width: "900px" }}>
				<Carousel>
					<div style={{ background: "yellow", width: "300px", height: "300px" }}>Slide 1</div>
					<div style={{ background: "yellow", width: "400px", height: "300px" }}>Slide 2</div>
					<div style={{ background: "yellow", width: "540px", height: "300px" }}>Slide 3</div>
				</Carousel>
			</div>
		);

		cy.mount(carouselWithThirdSlideNotCompletelyVisible);

		const notCompletelyVisibleSlide = ".carousel__slide:last-child";

		cy.get(notCompletelyVisibleSlide).should(($el) => {
			const htmlElement = $el.get(0);

			expect(isCompletelyVisible(htmlElement)).to.be.false;
		});
	});
});

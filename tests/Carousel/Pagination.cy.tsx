import { Carousel } from "../../src/Carousel";
import { scrollPast } from "../tests-helpers/scroll";
import { beNotVisible, beVisible } from "../tests-helpers/visibility";

describe("Carousel pagination", () => {
	it("next button should scroll until the first not visible slide is visible", () => {
		const carouselWithThirdSlidePartiallyVisible = (
			<div style={{ width: "900px", margin: "0 auto" }}>
				<Carousel>
					<div style={{ width: "300px", background: "yellow" }}>Slide 1</div>
					<div style={{ width: "500px", height: "500px", background: "aliceBlue" }}>Slide 2</div>
					<div style={{ width: "400px", height: "400px", background: "yellow" }}>Slide 3</div>
					<div style={{ width: "560px", height: "315px", background: "aliceBlue" }}>Slide 4</div>
				</Carousel>
			</div>
		);

		cy.mount(carouselWithThirdSlidePartiallyVisible);

		const thirdSlide = ".carousel__slide:nth-child(3)";

		cy.get(thirdSlide).should(beNotVisible);

		cy.findByLabelText(/Next/i).click();

		cy.get(thirdSlide).should(beVisible);
	});

	it("next button should scroll until the first not visible slide after a visible slider becomes visible", () => {
		const carousel = (
			<div style={{ width: "900px", margin: "0 auto" }}>
				<Carousel>
					<div style={{ width: "300px", background: "yellow" }}>Slide 1</div>
					<div style={{ width: "300px", background: "yellow" }}>Slide 2</div>
					<div style={{ width: "300px", background: "yellow" }}>Slide 3</div>
					<div style={{ width: "300px", background: "yellow" }}>Slide 4</div>
					<div style={{ width: "300px", background: "yellow" }}>Slide 5</div>
					<div style={{ width: "300px", background: "yellow" }}>Slide 6</div>
				</Carousel>
			</div>
		);

		cy.mount(carousel);

		function scrollPastFirstSlide() {
			return scrollPast(300);
		}

		const fifthSlide = ".carousel__slide:nth-child(5)";

		scrollPastFirstSlide();

		cy.findByLabelText(/Next/i).click();

		cy.get(fifthSlide).should(beVisible);
	});

	it("next button should scroll back to initial position if there are not visible slides after first visible slide", () => {
		const carousel = (
			<div style={{ width: "900px", margin: "0 auto" }}>
				<Carousel>
					<div style={{ width: "300px", background: "yellow" }}>Slide 1</div>
					<div style={{ width: "300px", background: "yellow" }}>Slide 2</div>
					<div style={{ width: "300px", background: "yellow" }}>Slide 3</div>
					<div style={{ width: "300px", background: "yellow" }}>Slide 4</div>
					<div style={{ width: "300px", background: "yellow" }}>Slide 5</div>
					<div style={{ width: "300px", background: "yellow" }}>Slide 6</div>
				</Carousel>
			</div>
		);

		cy.mount(carousel);

		function scrollPastFirst3Slides() {
			scrollPast(900);
		}

		scrollPastFirst3Slides();

		cy.findByLabelText(/Next/i).click();

		const firstSlide = ".carousel__slide:first-child";

		cy.get(firstSlide).should(beVisible);
	});

	it("previous button should scroll until the first not visible slide is visible", () => {
		const randomCarousel = (
			<div style={{ width: "900px", margin: "0 auto" }}>
				<Carousel>
					<div style={{ width: "300px", background: "yellow" }}>slide 1</div>
					<div style={{ width: "500px", height: "500px", background: "aliceBlue" }}>slide 2</div>
					<div style={{ width: "400px", height: "400px", background: "yellow" }}>slide 3</div>
					<div style={{ width: "560px", height: "315px", background: "aliceBlue" }}>slide 4</div>
				</Carousel>
			</div>
		);

		cy.mount(randomCarousel);

		function scrollPastFirstTwoSlides() {
			return scrollPast(800);
		}

		const firstSlide = ".carousel__slide:first-child";

		scrollPastFirstTwoSlides().get(firstSlide).should(beNotVisible);

		cy.findByLabelText(/Previous/i).click();

		cy.get(firstSlide).should(beVisible);
	});

	it("previous button should scroll to the end of the carousel when there are no slides beforte the first visible slide", () => {
		const randomCarousel = (
			<div style={{ width: "900px", margin: "0 auto" }}>
				<Carousel>
					<div style={{ width: "300px", background: "yellow" }}>slide 1</div>
					<div style={{ width: "300px", height: "300px", background: "aliceBlue" }}>slide 2</div>
					<div style={{ width: "300px", height: "300px", background: "yellow" }}>slide 3</div>
					<div style={{ width: "300px", height: "300px", background: "aliceBlue" }}>slide 4</div>
					<div style={{ width: "300px", height: "300px", background: "yellow" }}>slide 5</div>
					<div style={{ width: "300px", height: "300px", background: "aliceBlue" }}>slide 6</div>
				</Carousel>
			</div>
		);

		cy.mount(randomCarousel);

		const lastSlide = ".carousel__slide:last-child";

		cy.get(lastSlide).should(beNotVisible);

		cy.findByLabelText(/Previous/i).click();

		cy.get(lastSlide).should(beVisible);
	});
});

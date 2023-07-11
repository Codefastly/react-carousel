import { Carousel } from "../../src/Carousel";

describe("Carousel rendering", () => {
	it("renders", () => {
		cy.mount(
			<Carousel>
				<div style={{ width: "300px", background: "yellow" }}>A simple slide</div>
				<div>
					<img src="https://placekitten.com/500/500" alt="a slide can contain anything" />
				</div>
				<article
					style={{ width: "400px", height: "400px", backgroundColor: "aliceblue", padding: "2rem" }}
				>
					<h2>It can be any tag</h2>
					<p>and contain any number or items</p>
				</article>
				<div>
					<iframe
						width="560"
						height="315"
						src="https://www.youtube.com/embed/QlZNGcVfeF0"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					></iframe>
				</div>
			</Carousel>
		);

		cy.findByText("A simple slide");
		cy.findByAltText("a slide can contain anything");
		cy.findByRole("article");
		cy.findByTitle("YouTube video player").should("exist");
	});

	it("scrolls the slides correctly", () => {
		const carouselWithLastSlideNotVisible = (
			<div style={{ width: "900px" }}>
				<Carousel>
					<div style={{ width: "500px", background: "yellow" }}>A simple slide</div>
					<div style={{ width: "500px", background: "yellow" }}>A simple slide</div>
					<div style={{ width: "500px", background: "yellow" }}>A simple slide</div>
				</Carousel>
			</div>
		);

		cy.mount(carouselWithLastSlideNotVisible);

		const lastSlide = ".carousel__slide:last-child";

		cy.get(lastSlide).should("not.be.visible");

		cy.get(lastSlide).scrollIntoView();

		cy.get(lastSlide).should("be.visible");
	});
});

import { Carousel } from "../../src/Carousel";

describe("Carousel button props", () => {
	it("sets next and previous button aria labels correctly", () => {
		const nextAriaLabel = "Siguiente";
		const prevAriaLabel = "Anterior";

		cy.mount(
			<Carousel prevAriaLabel={prevAriaLabel} nextAriaLabel={nextAriaLabel}>
				<div style={{ width: "300px", background: "yellow" }}>Slide 1</div>
				<div style={{ width: "500px", background: "aliceBlue" }}>Slide 2</div>
				<div style={{ width: "400px", background: "yellow" }}>Slide 3</div>
				<div style={{ width: "560px", background: "aliceBlue" }}>Slide 4</div>
			</Carousel>
		);

		cy.findAllByLabelText(prevAriaLabel).should("exist");
		cy.findAllByLabelText(nextAriaLabel).should("exist");
	});

	it("sets next and previous button contents passed by props correctly", () => {
		const nextButtonContent = "👉";
		const prevButtonContent = "👈";

		cy.mount(
			<Carousel nextButtonContent={nextButtonContent} prevButtonContent={prevButtonContent}>
				<div style={{ width: "300px", background: "yellow" }}>Slide 1</div>
				<div style={{ width: "500px", background: "aliceBlue" }}>Slide 2</div>
				<div style={{ width: "400px", background: "yellow" }}>Slide 3</div>
				<div style={{ width: "560px", background: "aliceBlue" }}>Slide 4</div>
			</Carousel>
		);

		cy.findByText(nextButtonContent).should("exist");
		cy.findByText(prevButtonContent).should("exist");
	});
});

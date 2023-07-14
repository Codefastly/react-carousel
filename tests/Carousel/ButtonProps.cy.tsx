import { CarouselMother } from "../tests-helpers/CarouselMother";

describe("Carousel button props", () => {
	it("sets next and previous button aria labels correctly", () => {
		const nextAriaLabel = "Siguiente";
		const prevAriaLabel = "Anterior";

		const randomCarousel = CarouselMother.random({
			props: { prevAriaLabel, nextAriaLabel },
		});

		cy.mount(randomCarousel);

		cy.findAllByLabelText(prevAriaLabel).should("exist");
		cy.findAllByLabelText(nextAriaLabel).should("exist");
	});

	it("sets next and previous button contents passed by props correctly", () => {
		const nextButtonContent = "👉";
		const prevButtonContent = "👈";

		const randomCarousel = CarouselMother.random({
			props: { nextButtonContent, prevButtonContent },
		});

		cy.mount(randomCarousel);

		cy.findByText(nextButtonContent).should("exist");
		cy.findByText(prevButtonContent).should("exist");
	});
});

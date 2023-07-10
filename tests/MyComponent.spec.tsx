import { render, screen } from "@testing-library/react";
import React from "react";

import { MyComponent } from "../src/MyComponent";

test("MyComponent displays correctoy", () => {
	render(<MyComponent title="My Component" />);

	const heading = screen.getByText(/My Component/i);

	expect(heading).toBeInTheDocument();
});

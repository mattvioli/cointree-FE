import React from "react";
import { render, screen } from "@testing-library/react";
import { Navbar } from "./index";
describe("Navbar component", () => {
  it("renders the Cointree Logo image correctly", () => {
    render(<Navbar />);
    const logo = screen.getByAltText("Cointree Logo");
    expect(logo).toBeInTheDocument();
  });

  it("has the correct Tailwind classes applied", () => {
    render(<Navbar />);
    const navbar = screen.getByTestId("navbar");

    expect(navbar).toMatchSnapshot();
  });
});

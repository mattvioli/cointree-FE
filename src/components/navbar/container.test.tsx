import React from "react";
import { render, screen } from "@testing-library/react";
import { Container } from "./container";

describe("Container component", () => {
  it("renders children correctly", () => {
    const childText = "This is the content inside the container.";
    render(<Container>{childText}</Container>);

    const containerElement = screen.getByText(childText);
    expect(containerElement).toBeInTheDocument();
  });

  it("has the correct Tailwind classes applied", () => {
    const childText = "This is the content inside the container.";
    render(<Container>{childText}</Container>);

    const containerElement = screen.getByText(childText);

    expect(containerElement).toMatchSnapshot();
  });
});

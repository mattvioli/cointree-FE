import { render, screen } from "@testing-library/react";
import { Card } from "./index";

describe("Card component", () => {
  it("renders children correctly", () => {
    const childText = "This is the content inside the card.";
    render(<Card>{childText}</Card>);

    const cardElement = screen.getByText(childText);

    expect(cardElement).toBeInTheDocument();
  });

  it("has the correct Tailwind classes applied", () => {
    const childText = "This is the content inside the card.";
    render(<Card>{childText}</Card>);

    const cardElement = screen.getByText(childText);

    expect(cardElement).toMatchSnapshot();
  });
});

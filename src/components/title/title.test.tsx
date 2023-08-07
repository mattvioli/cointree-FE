import React from "react";
import { render, screen } from "@testing-library/react";
import { Title } from "./index";

describe("Title component", () => {
  it("renders the title text correctly", () => {
    const titleText = "Welcome to My App";
    render(<Title>{titleText}</Title>);

    const titleElement = screen.getByText(titleText);

    // Check if the title text is rendered correctly
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe("H1");
    expect(titleElement).toHaveClass("text-3xl font-bold");
  });
});

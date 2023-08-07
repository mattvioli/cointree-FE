import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./index";

describe("Button component", () => {
  it("renders the button text correctly", () => {
    const buttonText = "Click Me";
    render(<Button onClick={() => {}}>{buttonText}</Button>);

    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(buttonText);
  });

  it("calls the onClick handler when the button is clicked", () => {
    const onClickMock = jest.fn();
    const buttonText = "Click Me";
    render(<Button onClick={onClickMock}>{buttonText}</Button>);

    const buttonElement = screen.getByRole("button");

    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("has the correct Tailwind classes applied", () => {
    const buttonText = "Click Me";
    render(<Button onClick={() => {}}>{buttonText}</Button>);

    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toMatchSnapshot();
  });
});

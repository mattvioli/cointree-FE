import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Coin } from "./coin";

describe("Coin component", () => {
  it("renders the button with the correct coinName and image", () => {
    const coinName = "BTC";
    render(<Coin coinName={coinName} onClick={() => {}} />);
    const buttonElement = screen.getByRole("button");
    const imageElement = screen.getByAltText(`${coinName} Logo`);

    expect(buttonElement).toHaveTextContent(coinName);

    expect(imageElement).toHaveAttribute("src", `/${coinName}.svg`);
    expect(imageElement).toHaveAttribute("alt", `${coinName} Logo`);
    expect(imageElement).toHaveAttribute("width", "64");
    expect(imageElement).toHaveAttribute("height", "64");
  });

  it("calls the onClick handler when the button is clicked", () => {
    const onClickMock = jest.fn();
    render(<Coin coinName={"BTC"} onClick={onClickMock} />);
    const buttonElement = screen.getByRole("button");

    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});

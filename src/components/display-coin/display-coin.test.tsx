import React from "react";
import { render, screen } from "@testing-library/react";
import { DisplayCoin } from "./index";

describe("DisplayCoin component", () => {
  it("renders the coin name and ask price correctly", () => {
    const coinName = "BTC";
    const askPrice = 50000;

    render(<DisplayCoin coinName={coinName} askPrice={askPrice} />);

    const displayElement = screen.getByText(`${coinName}: $${askPrice}`);
    expect(displayElement).toBeInTheDocument();
  });

  it("returns null when coinName or askPrice is not provided", () => {
    const coinName = "BTC";
    const askPrice = 50000;

    render(<DisplayCoin />);
    const displayElement = screen.queryByText(`${coinName}: $${askPrice}`);
    expect(displayElement).toBeNull();
  });
});

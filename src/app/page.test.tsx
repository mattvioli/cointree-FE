import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./page";

jest.mock("@/components/navbar", () => ({
  Navbar: () => <div data-testid="navbar">Mocked Navbar</div>,
}));

jest.mock("@/components/coin-price", () => ({
  CoinPrice: () => <div data-testid="coin-price">Mocked CoinPrice</div>,
}));

describe("Home page component", () => {
  it("renders the Navbar component correctly", () => {
    render(<Home />);

    const navbarElement = screen.getByTestId("navbar");
    expect(navbarElement).toBeInTheDocument();
    expect(navbarElement).toHaveTextContent("Mocked Navbar");
  });

  it("renders the CoinPrice component correctly", () => {
    render(<Home />);

    const coinPriceElement = screen.getByTestId("coin-price");
    expect(coinPriceElement).toBeInTheDocument();
    expect(coinPriceElement).toHaveTextContent("Mocked CoinPrice");
  });
});

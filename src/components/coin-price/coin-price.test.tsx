import { render, screen, act } from "@testing-library/react";
import { CoinPrice } from "./index";

// Mock the useFetchCoinPrice hook
jest.mock("@/hooks/useFetchCoinPrice", () => ({
  useFetchCoinPrice: jest.fn(() => ({
    data: { ask: 50000 }, // Mocked price data
    error: null,
    isLoading: false,
  })),
}));

describe("CoinPrice component", () => {
  it("renders the title and button correctly", () => {
    render(<CoinPrice />);
    const titleElement = screen.getByText("Check Coin Price");
    const buttonElement = screen.getByRole("button", {
      name: "Select an asset to check",
    });

    expect(titleElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it("opens the modal when the button is clicked", () => {
    render(<CoinPrice />);
    const buttonElement = screen.getByRole("button", {
      name: "Select an asset to check",
    });

    expect(screen.queryByPlaceholderText("Type an asset symbol")).toBeNull();

    act(() => {
      buttonElement.click();
    });

    expect(
      screen.getByPlaceholderText("Type an asset symbol")
    ).toBeInTheDocument();
  });

  it("closes the modal when a coin is clicked", () => {
    render(<CoinPrice />);
    const buttonElement = screen.getByRole("button", {
      name: "Select an asset to check",
    });

    act(() => {
      buttonElement.click();
    });

    expect(
      screen.getByPlaceholderText("Type an asset symbol")
    ).toBeInTheDocument();

    act(() => {
      const closeButton = screen.getByText("BTC");
      closeButton.click();
    });

    expect(screen.queryByPlaceholderText("Type an asset symbol")).toBeNull();
  });
});

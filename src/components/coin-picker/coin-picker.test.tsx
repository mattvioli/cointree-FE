import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CoinPicker } from "./index";

const mockSetCoinName = jest.fn();
const mockHandleCloseModal = jest.fn();

describe("CoinPicker component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("filters and renders coins correctly", () => {
    render(
      <CoinPicker
        setCoinName={mockSetCoinName}
        handleCloseModal={mockHandleCloseModal}
      />
    );

    const inputElement = screen.getByPlaceholderText("Type an asset symbol");
    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: "ETH" } });

    expect(inputElement).toHaveValue("ETH");

    const coinElement = screen.getByRole("button");
    expect(coinElement).toHaveTextContent("ETH");
  });

  it("calls setCoinName and handleCloseModal when a coin is clicked", () => {
    render(
      <CoinPicker
        setCoinName={mockSetCoinName}
        handleCloseModal={mockHandleCloseModal}
      />
    );

    const inputElement = screen.getByPlaceholderText("Type an asset symbol");

    fireEvent.change(inputElement, { target: { value: "BTC" } });

    const coinElement = screen.getByRole("button");

    fireEvent.click(coinElement);

    expect(mockSetCoinName).toHaveBeenCalledWith("BTC");
    expect(mockHandleCloseModal).toHaveBeenCalled();
  });

  it("displays 'No coins found.' message when no coins match the filter", () => {
    render(
      <CoinPicker
        setCoinName={mockSetCoinName}
        handleCloseModal={mockHandleCloseModal}
      />
    );

    const inputElement = screen.getByPlaceholderText("Type an asset symbol");

    fireEvent.change(inputElement, { target: { value: "ABC" } });

    expect(inputElement).toHaveValue("ABC");

    const messageElement = screen.getByText("No coins found.");
    expect(messageElement).toBeInTheDocument();
  });
});

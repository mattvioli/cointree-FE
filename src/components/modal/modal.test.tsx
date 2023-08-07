import React from "react";
import { render, screen } from "@testing-library/react";
import { Modal } from "./index";

describe("Modal component", () => {
  it("renders the children when isOpen is true", () => {
    const mockOnClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={mockOnClose}>
        <div data-testid="modal-content">Modal Content</div>
      </Modal>
    );

    const modalContentElement = screen.getByTestId("modal-content");
    expect(modalContentElement).toBeInTheDocument();
    expect(modalContentElement).toHaveTextContent("Modal Content");
  });

  it("does not render anything when isOpen is false", () => {
    const mockOnClose = jest.fn();
    render(
      <Modal isOpen={false} onClose={mockOnClose}>
        <div data-testid="modal-content">Modal Content</div>
      </Modal>
    );

    const modalContentElement = screen.queryByTestId("modal-content");
    expect(modalContentElement).toBeNull();
  });
});

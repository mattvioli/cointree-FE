import React from "react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

function MockImage(props) {
  return React.createElement("img", props);
}
jest.mock("next/image", () => MockImage);

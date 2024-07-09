import React from "react";
import { render, screen } from "@testing-library/react";
import Checkout from "./Checkout";

test("renders learn react link", () => {
  render(<Checkout />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

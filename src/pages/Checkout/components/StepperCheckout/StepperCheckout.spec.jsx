import React from "react";
import { render, screen } from "@testing-library/react";
import StepperCheckout from "./StepperCheckout";

test("renders component StepperCheckout", () => {
  render(<StepperCheckout />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

import React from "react";
import { render, screen } from "@testing-library/react";
import Spacer from "./Spacer";

test("renders component Spacer", () => {
  render(<Spacer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

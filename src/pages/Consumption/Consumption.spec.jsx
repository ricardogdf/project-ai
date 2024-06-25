import React from "react";
import { render, screen } from "@testing-library/react";
import Consumption from "./Consumption";

test("renders learn react link", () => {
  render(<Consumption />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

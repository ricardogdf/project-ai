import React from "react";
import { render, screen } from "@testing-library/react";
import Payment from "./Payment";

test("renders component Payment", () => {
  render(<Payment />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders component Header", () => {
  render(<Header />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

import React from "react";
import { render, screen } from "@testing-library/react";
import { Icons } from "./Icons";

test("renders component Icons", () => {
  render(<Icons />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

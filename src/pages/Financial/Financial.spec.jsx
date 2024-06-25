import React from "react";
import { render, screen } from "@testing-library/react";
import Financial from "./Financial";

test("renders learn react link", () => {
  render(<Financial />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

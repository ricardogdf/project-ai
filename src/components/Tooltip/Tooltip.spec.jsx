import React from "react";
import { render, screen } from "@testing-library/react";
import Tooltip from "./Tooltip";

test("renders component Tooltip", () => {
  render(<Tooltip />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

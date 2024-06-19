import React from "react";
import { render, screen } from "@testing-library/react";
import ButtonGoogle from "./ButtonGoogle";

test("renders component ButtonGoogle", () => {
  render(<ButtonGoogle />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

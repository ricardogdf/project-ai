import React from "react";
import { render, screen } from "@testing-library/react";
import AccountMenu from "./AccountMenu";

test("renders component AccountMenu", () => {
  render(<AccountMenu />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

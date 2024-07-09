import React from "react";
import { render, screen } from "@testing-library/react";
import RadioButton from "./RadioButton";

test("renders component RadioButton", () => {
  render(<RadioButton />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

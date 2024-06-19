import React from "react";
import { render, screen } from "@testing-library/react";
import Toast from "./Toast";

test("renders component Toast", () => {
  render(<Toast />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

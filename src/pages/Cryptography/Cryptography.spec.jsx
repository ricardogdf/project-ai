import React from "react";
import { render, screen } from "@testing-library/react";
import Cryptography from "./Cryptography";

test("renders learn react link", () => {
  render(<Cryptography />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

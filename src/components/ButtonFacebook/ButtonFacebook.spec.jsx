import React from "react";
import { render, screen } from "@testing-library/react";
import ButtonFacebook from "./ButtonFacebook";

test("renders component ButtonFacebook", () => {
  render(<ButtonFacebook />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

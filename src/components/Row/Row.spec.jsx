import React from "react";
import { render, screen } from "@testing-library/react";
import Row from "./Row";

test("renders component Row", () => {
  render(<Row />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

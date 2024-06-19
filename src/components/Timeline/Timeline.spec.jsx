import React from "react";
import { render, screen } from "@testing-library/react";
import { Timeline, TimelineItem } from "./Timeline";

test("renders component Timeline", () => {
  render(<Timeline />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders component TimelineItem", () => {
  render(<TimelineItem />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

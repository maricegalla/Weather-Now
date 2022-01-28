import React from "react";
import { render, screen } from "@testing-library/react";
import App from "src/App";

test("renders app logo on top", () => {
  render(<App />);
  const linkElement = screen.getByTestId("logo");
  expect(linkElement).toBeInTheDocument();
});

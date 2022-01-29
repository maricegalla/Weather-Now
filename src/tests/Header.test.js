import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "jest-styled-components";
import "@testing-library/jest-dom";
import Header from "src/components/Header";

afterEach(cleanup);

describe("testing the `header` component", () => {
  test("renders the header", () => {
    render(<Header />);

    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });

  test("renders app logo on top", () => {
    render(<Header />);

    const logo = screen.getByTestId("logo");
    expect(logo).toBeInTheDocument();
  });
});

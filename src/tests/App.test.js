import React from "react";
import { render, cleanup, screen, act } from "@testing-library/react";
import "jest-styled-components";
import "@testing-library/jest-dom";
import App from "src/App";

afterEach(cleanup);

describe("testing the `card` component", () => {
  test("renders the header", () => {
    render(<App />);

    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });
  test("renders three cards", async () => {
    const promise = Promise.resolve();
    render(<App />);

    const card = screen.getAllByTestId("card");
    expect(card).toHaveLength(3);
    await act(() => promise);
  });
});

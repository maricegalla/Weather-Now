import React from "react";
import { render, cleanup, screen, act } from "@testing-library/react";
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

  test("renders cities names", () => {
    render(<App />);
    const cityTitle1 = screen.getByText(/nuuk, gl/i);
    const cityTitle2 = screen.getByText(/urubici, br/i);
    const cityTitle3 = screen.getByText(/nairobi, ke/i);

    expect(cityTitle1).toBeInTheDocument();
    expect(cityTitle2).toBeInTheDocument();
    expect(cityTitle3).toBeInTheDocument();
  });
});

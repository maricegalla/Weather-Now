import React from "react";
import { render, screen, act } from "@testing-library/react";
import App from "src/App";

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

  test("renders cities names", async () => {
    const promise = Promise.resolve();
    render(<App />);
    const cityTitle1 = screen.getByRole("heading", { name: /nuuk, gl/i });
    const cityTitle2 = screen.getByRole("heading", { name: /urubici, br/i });
    const cityTitle3 = screen.getByRole("heading", { name: /nairobi, ke/i });

    expect(cityTitle1).toBeInTheDocument();
    expect(cityTitle2).toBeInTheDocument();
    expect(cityTitle3).toBeInTheDocument();
    await act(() => promise);
  });
});

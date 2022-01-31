import React from "react";
import { render, cleanup, act } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Card from "src/components/Card";

afterEach(cleanup);

describe("testing the `card` component", () => {
  test("renders the card", async () => {
    const promise = Promise.resolve();
    render(<Card />);

    const card = screen.getByTestId("card");
    expect(card).toBeInTheDocument();
    await act(() => promise);
  });

  test("shows loader", async () => {
    const promise = Promise.resolve();
    render(<Card />);

    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
    await act(() => promise);
  });
});

import React from "react";
import { render, cleanup, act } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "jest-styled-components";
import "@testing-library/jest-dom";
import Card from "src/components/Card";

afterEach(cleanup);

describe("testing the `card` component", () => {
  
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test("renders the cards", async () => {
    const promise = Promise.resolve();
    render(<Card />);

    const card = screen.getByTestId("card");
    expect(card).toBeInTheDocument();
    await act(() => promise);
  });

  test("shows loader", async () => {
    render(<Card />);

    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });
});

// describe("testing the `card` component", () => {
//   test("renders three cards", () => {
//     render(<App />);

//     const card = screen.getAllByTestId("card");
//     expect(card).toHaveLength(3);
//   });

//   test("renders cities names", () => {
//     render(<App />);
//     const cityTitle1 = screen.getByText(/nuuk, gl/i);
//     const cityTitle2 = screen.getByText(/urubici, br/i);
//     const cityTitle3 = screen.getByText(/nairobi, ke/i);

//     expect(cityTitle1).toBeInTheDocument();
//     expect(cityTitle2).toBeInTheDocument();
//     expect(cityTitle3).toBeInTheDocument();
//   });

//   test("renders card footer", () => {
//     render(<App />);
//     const cardFoot = screen.getByLabelText(/updated at/i);
//     expect(cardFoot).toHaveLength(3);
//   });
// });

import React from "react";
import { render, screen } from "@testing-library/react";
import Error from "src/components/Error";

describe("testing the `error` component", () => {
  test("renders the button", () => {
    render(<Error />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  test("renders error message", () => {
    render(<Error />);

    const message = screen.getByText(/something went wrong/i);
    expect(message).toBeInTheDocument();
  });
});

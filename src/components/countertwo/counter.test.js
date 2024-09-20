import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import CounterTwo from ".";

describe("counter two component", () => {
  it("render correctly", () => {
    render(<CounterTwo count={0} />);
    const element = screen.getByText("CounterTwo");
    expect(element).toBeInTheDocument();
  });

  // test handlers called

  it("it should handlers called", async () => {
    user.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <CounterTwo
        count={0}
        increment={incrementHandler}
        decrement={decrementHandler}
      />
    );

    const incrementBtn = screen.getByRole("button", {
      name: "Increment",
    });

    const decrementBtn = screen.getByRole("button", {
      name: "Decrement",
    });
    await user.click(incrementBtn);
    await user.click(decrementBtn);

    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});

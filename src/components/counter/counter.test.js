import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import Counter from ".";

describe("Counter element testing", () => {
  it("is  element present", () => {
    render(<Counter />);
    const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument();
    const btnElement = screen.getByRole("button", {
      name: "Increment Button",
    });
    expect(btnElement).toBeInTheDocument();
  });

  it("is should render 0", () => {
    render(<Counter />);
    // render(<Counter />, {
    //   wrapper: AppProviders, // place providers here
    // });

    // source: got testinglibrary.com to view the providers testing case
    const element = screen.getByRole("heading");
    expect(element).toHaveTextContent("0");
  });

  //   Mouse Interactions for button
  it("it should render counter increment by 1", async () => {
    user.setup();
    render(<Counter />);
    const btnElement = screen.getByRole("button", {
      name: "Increment Button",
    });

    await user.click(btnElement);
    const element = screen.getByRole("heading");
    expect(element).toHaveTextContent("1");
  });

  //   KeyBoard Interactions

  it("render the count of 10 after clicking the set button", async () => {
    user.setup();
    render(<Counter />);
    const element = screen.getByRole("spinbutton");
    await user.type(element, "10");
    expect(element).toHaveValue(10);
    const buttonElement = screen.getByRole("button", {
      name: "Set",
    });
    await user.click(buttonElement);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("10");
  });

  //   focussing elements while using tabs key
  it("is elements focussed correctly", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment Button",
    });
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});

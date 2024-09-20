import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Sample from "./sample";

describe("Sample component", () => {
  it("renders inputs and updates with dynamic values", async () => {
    render(<Sample />);

    const input1 = screen.getByPlaceholderText("Enter first value");
    const input2 = screen.getByPlaceholderText("Enter second value");

    // onchange
    fireEvent.change(input1, { target: { value: "dynamic value1" } });
    fireEvent.change(input2, { target: { value: "dynamic value2" } });

    // Assertion that the input fields now contain the dynamic values
    expect(input1.value).toBe("dynamic value1");
    expect(input2.value).toBe("dynamic value2");

    //  inputs are in the document with updated values
    expect(
      await screen.findByDisplayValue("dynamic value1")
    ).toBeInTheDocument();
    expect(
      await screen.findByDisplayValue("dynamic value2")
    ).toBeInTheDocument();
  });
});

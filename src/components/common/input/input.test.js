import React from "react";
import { render, screen, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Input } from ".";

describe("input element", () => {
  it("is input present", () => {
    render(<Input />);

    const element = screen.getByRole("textbox");
    expect(element).toBeInTheDocument();
  });
});

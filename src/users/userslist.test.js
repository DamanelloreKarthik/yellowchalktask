// import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UsersList from "users";

describe("users component testing", () => {
  it("render the heading element", () => {
    render(<UsersList />);
    const element = screen.getByText("user");
    expect(element).toBeInTheDocument();
  });
});

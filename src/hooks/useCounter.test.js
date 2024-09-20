import React from "react";
// for hooks import the renderHook
import { render, renderHook, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import useCounter from "./useCounter";
import { act } from "react";

describe("render useCounter hook", () => {
  it("should render the initial count", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  it("should accept and render the same initial count", () => {
    const { result } = renderHook(
      ({ initialCount }) => useCounter(initialCount),
      {
        initialProps: {
          initialCount: 10,
        },
      }
    );
    expect(result.current.count).toBe(10);
  });

  it("it should increment", async () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

  it("it should decrement", async () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
});

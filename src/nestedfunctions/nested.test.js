import React from "react";
import { render, waitFor } from "@testing-library/react";
import MultipleFunction from "nestedfunctions";

// Mock the global fetch function
global.fetch = jest.fn();

describe("MultipleFunction Component", () => {
  const mockResponse = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 3, name: "Alice" },
    { id: 6, name: "Bob" },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  it("should call function1 and fetch data on mount", async () => {
    render(<MultipleFunction />);

    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users"
    );

    await waitFor(() => {
      expect(console.log).toHaveBeenCalledWith(
        "Data fetched from API:",
        mockResponse
      );

      expect(console.log).toHaveBeenCalledWith("Filtered users:", [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Doe" },
        { id: 3, name: "Alice" },
      ]);

      expect(console.log).toHaveBeenCalledWith("Final processed data:", [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Doe" },
        { id: 3, name: "Alice" },
      ]);
    });
  });
});

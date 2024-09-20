import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserList from "apis";

describe("UserList Component", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterAll(() => {
    console.error.mockRestore();
  });

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            { id: 1, name: "Leanne Graham" },
            { id: 2, name: "Ervin Howell" },
          ]),
      })
    );
  });

  afterEach(() => {
    global.fetch.mockRestore();
  });

  it("should call the API to fetch users", async () => {
    render(<UserList />);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users"
    );
  });

  it("should render the list of users", async () => {
    render(<UserList />);
    await waitFor(() => {
      expect(screen.getByText("Leanne Graham")).toBeInTheDocument();
      expect(screen.getByText("Ervin Howell")).toBeInTheDocument();
    });
  });

  it("should handle errors during fetch", async () => {
    global.fetch.mockImplementationOnce(() => Promise.reject("API is down"));

    render(<UserList />);
    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith(
        "Error fetching users:",
        "API is down"
      );
    });
  });
});
0;

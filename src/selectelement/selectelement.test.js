import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react";

//it is out job summary component
import SelectElement from "selectelement";

describe("select element testing", () => {
  // place one variable here
  let consoleErrorSpy;

  beforeEach(() => {
    // add these function in before each
    consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve(
            // place actual delete response as it is
            [
              {
                userId: 1,
                id: 1,
                title:
                  "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
              },
            ]
          ),
      })
    );
  });

  // keep as it is
  afterEach(() => {
    global.fetch.mockRestore();

    // add restore console
    consoleErrorSpy.mockRestore();
  });

  it("is delete button present", () => {
    // in render instead select element place out <provider><JobSummary/></provider>
    render(<SelectElement />);

    // change the button title as per the name given in the job summary page (delete button)
    const button = screen.getByText("getData");
    expect(button).toBeInTheDocument();
  });

  it("fetch users when button is clicked", async () => {
    // in render instead select element place out <provider><JobSummary/></provider>
    render(<SelectElement />);

    // change the button title as per the name given in the job summary page (delete button)x
    const button = screen.getByText("getData");
    fireEvent.click(button);

    // toHaveBeenCalledTimes check it one 1 or 2 based expected and received calls after running status
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(2));

    // place the actual delete url they provided
    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/posts"
    );
  });

  /*-----------------error message in get job history---------------------*/

  it("edit job history error msg", async () => {
    // Mock fetch to reject for posts
    global.fetch.mockImplementation(() =>
      Promise.reject(new Error("any message what ever we want no restrictions"))
    );

    // place the Job summary <provider><JobSummary/></provider>
    render(<SelectElement />);

    await waitFor(() => {
      // expect(consoleErrorSpy).toHaveBeenCalledWith(
      //   // "Error fetching posts:" - replace with actual error message they mentioned
      //   "Error fetching posts:",
      //   expect.any(Error)
      // );

      // expect(consoleErrorSpy).toHaveBeenCalledWith(
      //   expect.stringMatching(/Error fetching posts:/),
      //   expect.any(Error)
      // );

      expect(consoleErrorSpy).toHaveBeenCalledWith(
        expect.stringContaining("Error fetching posts:"),
        expect.any(Error)
      );

      // expect(consoleErrorSpy).toHaveBeenLastCalledWith(
      //   "Error fetching posts:",
      //   expect.any(Error)
      // );
    });
  });

  it("edit job history error msg", async () => {
    global.fetch.mockImplementation(() =>
      Promise.reject(new Error("any message whatever we want no restrictions"))
    );

    render(<SelectElement />);

    // Use act to handle the asynchronous updates
    await act(async () => {
      const button = screen.getByText("getData");
      debugger;
      fireEvent.click(button);
    });

    await waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        "Error fetching users:",
        expect.any(Error)
      );
    });
  });
});

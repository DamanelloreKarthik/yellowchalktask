import React from "react";
import { render, screen, fireEvent, logRoles } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/user-event";
import { Button } from ".";

// Statical analysis testing

console.log(name);
const name = "some name";

describe("Button element", () => {
  it("is heading one there", () => {
    render(<Button />);
    const getHeadingOne = screen.getByRole("heading", {
      // name: "hellOne",
      level: 1,
    });
    expect(getHeadingOne).toBeInTheDocument();
  });

  it("heading two is there", () => {
    render(<Button />);

    const getHeadingTwo = screen.getByRole("heading", {
      // name: "hellTwo",
      level: 2,
    });

    expect(getHeadingTwo).toBeInTheDocument();
  });

  // get similar label names based on their index
  it("should verify the second label with text 'Name'", () => {
    render(<Button />);
    const labels = screen.getAllByText("Name");
    expect(labels[1]).toBeInTheDocument();
  });

  it("is button having the title", () => {
    render(<Button title="Click me" />); // step:1
    const buttonTitle = screen.getByText("Click me"); // step:2 screen selecting method
    expect(buttonTitle).toBeInTheDocument(); // assertion what we expect
  });

  it("not render the title when loader is true", () => {
    render(<Button title="Click me" loader={true} />);
    const buttonTitle = screen.queryByText("Click me");
    expect(buttonTitle).not.toBeInTheDocument();
  });

  it("get by placeholder", () => {
    render(<Button />);
    const element = screen.getByPlaceholderText(/fullNames/i);
    expect(element).toBeInTheDocument();
  });

  // for div, spans, p tags
  it("get ByText", () => {
    render(<Button />);
    const element = screen.getByText("test and description");
    expect(element).toBeInTheDocument();
  });

  // get ByDisplay Value for Text value input, textArea, select

  it("getByDisplayValue", () => {
    render(<Button />);
    const element = screen.getByDisplayValue("description");
    expect(element).toBeInTheDocument();
  });

  // get ByAltText supports only img, input, area custom Html elements

  it("getByAltText", () => {
    render(<Button />);
    const element = screen.getByAltText("sampleImage");
    expect(element).toBeInTheDocument();
  });

  // getByTitle
  it("getByTitle", () => {
    render(<Button />);
    const element = screen.getByTitle("subTitle");
    expect(element).toBeInTheDocument();
  });

  // getByTestId
  it("getByTestId", () => {
    render(<Button />);
    const element = screen.getByTestId("customElement");
    expect(element).toBeInTheDocument();
  });

  // RTL with multiple elements

  const data = ["one", "two", "three", "four"];

  it("Query With multiple elements", () => {
    render(<Button sampleData={data} />);
    const element = screen.getByRole("list");
    expect(element).toBeInTheDocument();
  });

  it("multiple data render correctly getAllByRole", () => {
    render(<Button sampleData={data} />);
    const elements = screen.getAllByRole("listitem");
    expect(elements).toHaveLength(4);
    /* real time use following line*/
    // expect(elements).toHaveLength(data.length);
  });

  // Test Match with string, regex , function
  it("test matchers", () => {
    render(<Button />);
    // const elements = screen.getByText("Content", { exact: false }); // sub string
    // const elements = screen.getByText("some Content", { exact: false }); // ignore case inSensitive
    // const elements = screen.getByText(/some content/i); // regex
    const elements = screen.getByText(/^some content$/i); // full string match ignore case
    expect(elements).toBeInTheDocument();
  });

  // test certain elements not rendered in the dom

  // is show element render

  it("render show element", () => {
    render(<Button />);
    const element = screen.getByText(/initialElement/i);
    expect(element).toBeInTheDocument();
  });

  it("should change button text after clicking on initial button", () => {
    render(<Button />);
    const initialButton = screen.getByText("initialElement");
    fireEvent.click(initialButton);
    const changedButton = screen.getByText("initialElementChanged");
    expect(changedButton).toBeInTheDocument();
  });

  // Appearance and Disappearance Start (findBy and findAllBy) for asynchronous code
  it("initialElementChanged is eventually displayed", async () => {
    const view = render(<Button />);
    // logRoles(view.container);
    // screen.debug();
    const element = await screen.findByRole(
      "button",
      {
        name: "initialElementChange",
      },
      { timeout: 2000 }
    );
    // screen.debug();
    expect(element).toBeInTheDocument();
  });

  // Appearance and Disappearance End

  // Note:
  // Manual Queries are nothing but the querySelector of DOM Api to find elements
  // Debugging
  // Testing Play Ground

  // User Interactions:
  // update the user-events library using the npm install update @testing-library/user-event@latest

  it("is loader prop is true", () => {
    render(<Button loader={true} />);
    const loaderElement = screen.getByTestId("loader");
    expect(loaderElement).toBeInTheDocument();
  });

  it("is image prop is there", () => {
    const mockUpImage = "sample.png";
    render(<Button image={mockUpImage} altText="sample.png" />);
    const imageElement = screen.getByAltText("sample.png");
    expect(imageElement).toBeInTheDocument();
  });

  it("doesn't render image when loader is true", () => {
    const mockUpImg = "sample.png";
    render(<Button loader={true} image={mockUpImg} altText="sample.png" />);
    const loaderElement = screen.queryByAltText("sample.png");
    expect(loaderElement).not.toBeInTheDocument();
  });

  it("is button clickable", () => {
    const onClickMonk = jest.fn();
    render(<Button onClick={onClickMonk} />);
    const clickEvent = screen.getByRole("button");
    fireEvent.click(clickEvent);
    expect(onClickMonk).toHaveBeenCalled();
  });

  it("is disable prop is working", () => {
    render(<Button disabled={true} />);
    const disableValue = screen.getByRole("button");
    expect(disableValue).toBeDisabled();
  });
});

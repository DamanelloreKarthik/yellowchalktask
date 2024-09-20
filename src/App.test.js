import { render, act } from "@testing-library/react";
import App from "./App";

test("renders App component without crashing", () => {
  // No need to use act here as the render method handles this internally
  render(<App />);
});

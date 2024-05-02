import { render, screen, cleanup } from "@testing-library/react";
import Counter from "../counter";

describe("", () => {
  test("should render Counter component", () => {
    //set up
    render(<Counter />);

    //acted
    const counterElement = screen.getByTestId("counter-1");

    //assertions
    expect(counterElement).toBeInTheDocument();
    expect(counterElement).toHaveTextContent("Hello World!");
  });
});

import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Counter from "../counter";

afterEach(() => {
  cleanup();
});

describe("", () => {
  test("should render Counter component", () => {
    //set up
    render(<Counter />);

    //declaration
    const counterElement = screen.getByTestId("count");

    //assertions
    expect(counterElement).toBeInTheDocument();
    expect(counterElement).toHaveTextContent(0);
  });
});

describe("", () => {
  test("When increment button is clicked; count goes up by 1", () => {
    //set up
    render(<Counter />);

    //declaration
    const counterElement = screen.getByTestId("count");
    const incrementElement = screen.getByTestId("increment");

    fireEvent.click(incrementElement);

    //assertions
    expect(counterElement).toBeInTheDocument();
    expect(incrementElement).toBeInTheDocument();
    expect(counterElement).toHaveTextContent(1);
    fireEvent.click(incrementElement);
    expect(counterElement).toHaveTextContent(2);
  });
});

describe("", () => {
  test("When decrement button is clicked; count goes down by 1", () => {
    //set up
    render(<Counter />);

    //declaration
    const counterElement = screen.getByTestId("count");
    const incrementElement = screen.getByTestId("increment");
    const decrementElement = screen.getByTestId("decrement");

    //assertions
    expect(counterElement).toBeInTheDocument();
    expect(incrementElement).toBeInTheDocument();
    expect(decrementElement).toBeInTheDocument();
    expect(counterElement).toHaveTextContent(0);
    fireEvent.click(incrementElement);
    expect(counterElement).toHaveTextContent(1);
    fireEvent.click(decrementElement);
    expect(counterElement).toHaveTextContent(0);
  });
});

import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Todo from "../todo";

afterEach(() => {
  cleanup();
});

describe("", () => {
  test("should render non-completed todo component", () => {
    //set up
    const todo = { id: 1, task: "clean room", status: false };
    render(<Todo todo={todo} />);
    //act
    const todoElement = screen.getByTestId("todo-1");
    //assert
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent("clean room");
  });
});

describe("", () => {
  test("should render completed todo component", () => {
    //set up
    const todo = { id: 2, task: "do shopping", status: true };
    render(<Todo todo={todo} />);
    //act
    const todoElement = screen.getByTestId("todo-2");
    //assert
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent("do shopping");
  });
});

describe("", () => {
  test("matches snapshot", () => {
    //set up
    const todo = { id: 2, task: "do shopping", status: true };
    const tree = renderer.create(<Todo todo={todo} />).toJSON();
    //assert
    expect(tree).toMatchSnapshot();
  });
});

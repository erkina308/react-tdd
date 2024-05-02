import React from "react";

function todo({ todo }) {
  const { id, task, status } = todo;
  const h1 = <h1>{task}</h1>;
  const text = status ? <strike>{h1}</strike> : h1;
  return <div data-testid={`todo-${id}`}>{text}</div>;
}

export default todo;

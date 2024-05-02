import "./App.css";
import Counter from "./components/counter";
import Todo from "./components/todo";

function App() {
  const todos = [
    { id: 1, task: "clean room", status: false },
    { id: 2, task: "do shopping", status: true },
  ];
  return (
    <div className="App">
      <Counter />
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
}

export default App;

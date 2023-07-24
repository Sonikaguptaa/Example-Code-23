import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList";
import { useSelector } from "react-redux";

export default function App() {

  const todos = useSelector((state) => state.todos)

  let [input, setInput] = useState("");

  function addToList() {
    let item = {
      text: input,
      completed: false,
      id: crypto.randomUUID() // 2188jd-293483-dfllkaksldf
    };

    let newTodos = [...todos, item];

    setTodos(newTodos);
    setInput("");
  }

  function handleChange(event) {
    setInput(event.target.value);
  }

  function deleteTodo(id) {
    let newTodos = todos.filter((item) => item.id !== id);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
  }

  function completeTodo(id) {
    let newTodos = todos.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );

    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
  }

  return (
    <div>
      <h1>Todos ({todos.listType})</h1>

      <TodoList
        todos={todos.list}
        listType={todos.listType}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />

      <input value={input} onChange={handleChange} />
      <button onClick={addToList}>Submit</button>

      <br />
      <br />

      <button onClick={() => setListType("all")}>All</button>
      <button onClick={() => setListType("complete")}>Completed</button>
      <button onClick={() => setListType("incomplete")}>Incomplete</button>
    </div>
  );
}

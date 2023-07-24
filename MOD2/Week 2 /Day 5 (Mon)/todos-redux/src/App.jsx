import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./todoSlice";

export default function App() {

  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  let [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <div>
      <h1>Todos ({todos.listType})</h1>

      <TodoList
        todos={todos.list}
        listType={todos.listType}
        completeTodo={null}
        deleteTodo={null}
      />

      <input value={input} onChange={handleChange} />
      <button onClick={() => {
        dispatch(addTodo(input))
        setInput('')
      }}>Submit</button>

      <br />
      <br />

      <button onClick={() => setListType("all")}>All</button>
      <button onClick={() => setListType("complete")}>Completed</button>
      <button onClick={() => setListType("incomplete")}>Incomplete</button>
    </div>
  );
}

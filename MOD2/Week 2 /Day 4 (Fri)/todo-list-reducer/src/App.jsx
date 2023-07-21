import "./App.css";
import { useReducer, useState } from "react";
import TodoList from "./components/TodoList";

function reducer(state, action) {
  // action ->  { type: 'ADD', payload: input }
  switch(action.type) {
    case 'ADD': 
      let item = {
        text: action.payload,
        completed: false,
        id: crypto.randomUUID() // 2188jd-293483-dfllkaksldf
      };
      return [...state, item];
  }

  return state 
}

export default function App() {

  let [todos, dispatch] = useReducer(reducer, [])
  let [input, setInput] = useState("");
  let [listType, setListType] = useState("all");

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
      <h1>Todos ({listType})</h1>

      <TodoList
        todos={todos}
        listType={listType}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />

      <input value={input} onChange={handleChange} />
      <button onClick={() => dispatch({ type: 'ADD', payload: input })}>Submit</button>

      <br />
      <br />

      <button onClick={() => setListType("all")}>All</button>
      <button onClick={() => setListType("complete")}>Completed</button>
      <button onClick={() => setListType("incomplete")}>Incomplete</button>
    </div>
  );
}
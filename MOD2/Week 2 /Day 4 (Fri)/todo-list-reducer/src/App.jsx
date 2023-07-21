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
        id: crypto.randomUUID() 
      };
      return [...state, item];
    case 'DELETE':
      return state.filter((item) => item.id !== action.payload);
    case 'COMPLETE':
      return state.map((item) =>
        item.id === action.payload ? { ...item, completed: !item.completed } : item
      );
    default:
      return state
  }
}

export default function App() {

  let [todos, dispatch] = useReducer(reducer, [])
  let [input, setInput] = useState("");
  let [listType, setListType] = useState("all");

  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <div>
      <h1>Todos ({listType})</h1>

      <TodoList
        todos={todos}
        listType={listType}
        dispatch={dispatch}
      />

      <input value={input} onChange={handleChange} />
      <button onClick={() => {
        dispatch({ type: 'ADD', payload: input })
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
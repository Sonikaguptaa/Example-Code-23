import "./App.css";
import { useReducer, useState, useEffect } from "react";
import TodoList from "./components/TodoList";

function reducer(state, action) {
  switch(action.type) {
    case 'ADD': 
      let item = {
        text: action.payload,
        completed: false,
        id: crypto.randomUUID() 
      };
      return { ...state, list: [...state.list, item] }
    case 'DELETE':
      return { ...state, list: state.list.filter((item) => item.id !== action.payload) }
    case 'COMPLETE':
      return { ...state, list: state.list.map((item) =>
        item.id === action.payload ? { ...item, completed: !item.completed } : item )
      }
    case 'TYPE':
      return { ...state, listType: action.payload }
    default:
      return state
  }
}

export default function App() {

  let [todos, dispatch] = useReducer(reducer, null, () => {
    const todoData = localStorage.getItem("todos")
    return todoData ? JSON.parse(todoData) : { list: [], listType: 'all' }
  })
  
  let [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <div>
      <h1>Todos ({todos.listType})</h1>

      <TodoList
        todos={todos.list}
        listType={todos.listType}
        dispatch={dispatch}
      />

      <input value={input} onChange={handleChange} />
      <button onClick={() => {
        dispatch({ type: 'ADD', payload: input })
        setInput('')
      }}>Submit</button>

      <br />
      <br />

      <button onClick={() => dispatch({ type: 'TYPE', payload: "all" })}>All</button>
      <button onClick={() => dispatch({ type: 'TYPE', payload: "complete" })}>Completed</button>
      <button onClick={() => dispatch({ type: 'TYPE', payload: "incomplete" })}>Incomplete</button>
    </div>
  );
}
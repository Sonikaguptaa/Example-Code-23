import "./App.css";
import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import axios from 'axios'

export default function App() {
  let [todos, setTodos] = useState([]);
  let [input, setInput] = useState("");
  let [listType, setListType] = useState("all");

  useEffect(() => {
    async function getTodos() {

      // OPTION 1: use fetch for "index" route
      // const response = await fetch('/todos')
      // const data = await response.json()

      // OPTION 2: use axios 
      const response = await axios.get('/todos')
      console.log(response.data)

      setTodos(response.data)
    }
    getTodos()
  }, [])

  async function addToList() {

    let todo = {
      text: input
    }

    // OPTION 1: use fetch for "create" route
    // const response = await fetch('/todos', {
    //   method: 'POST',
    //   body: JSON.stringify(todo),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })

    // OPTION 2: use axios
    const response = await axios.post('/todos', todo)
    const newTodo = response.data

    let newTodos = [...todos, newTodo];

    setTodos(newTodos);
    setInput("");
  }

  function handleChange(event) {
    setInput(event.target.value);
  }

  async function deleteTodo(id) {

    // OPTION 1: use fetch for "destroy" route
    // await fetch(`/todos/${id}`, {
    //   method: 'DELETE'
    // })

    // OPTION 2: use axios
    await axios.delete(`/todos/${id}`)

    let newTodos = todos.filter((todo) => todo._id !== id);
    setTodos(newTodos);
  }

  async function completeTodo(id) {

    let newTodos = [...todos]
    let indexOfTodo = todos.findIndex((todo) => todo._id === id)
    let todo = newTodos[indexOfTodo]
    todo.completed = !todo.completed

    // OPTION 1: use fetch for "update" route
    // await fetch(`/todos/${id}`, {
    //   method: 'PUT',
    //   body: JSON.stringify(todo),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })

    // OPTION 2: use axios
    await axios.put(`/todos/${id}`, todo)

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
      <button onClick={addToList}>Submit</button>

      <br />
      <br />

      <button onClick={() => setListType("all")}>All</button>
      <button onClick={() => setListType("complete")}>Completed</button>
      <button onClick={() => setListType("incomplete")}>Incomplete</button>
    </div>
  );
}

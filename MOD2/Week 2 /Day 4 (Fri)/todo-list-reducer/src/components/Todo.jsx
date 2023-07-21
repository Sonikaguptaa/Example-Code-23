function Todo({ item, dispatch }) {
    return (
      <li style={{ listStyle: "none" }}>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => completeTodo(item.id)}
        />
        {item.text}
        <button onClick={() => dispatch({ type: 'DELETE', payload: item.id })}>x</button>
      </li>
    );
  }
  
  export default Todo;
  
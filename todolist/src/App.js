import React, { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState({ desc: "", date: "", priority: "" });
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: [event.target.value] });
  };
  const addTodo = (event) => {
    event.preventDefault();
    todo.id = new Date().getTime();
    setTodos([...todos, todo]);
  };

  const deleteTodo = () => {};

  return (
    <div className="App">
      <input
        type="date"
        name="date"
        onChange={inputChanged}
        value={todo.date}
      />
      <input
        type="text"
        name="desc"
        onChange={inputChanged}
        value={todo.desc}
      />
      <input
        type="text"
        name="priority"
        onChange={inputChanged}
        value={todo.priority}
      />
      <button onClick={addTodo}> Add </button>
      <button onClick={deleteTodo}>Delete</button>
      <div
        className="ag-theme-material"
        style={{ height: "700px", width: "70%", margin: "auto" }}
      ></div>
    </div>
  );
}

export default App;

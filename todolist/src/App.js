import React, { useState } from "react";
import "./App.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
      <TextField name="description" label="Description" variant="standard" onChange={inputChanged} value={todo.description}/> 
      <Button onClick={addTodo} variant="contained">Add </Button>       
      
     
    </div>
  );
}

export default App;

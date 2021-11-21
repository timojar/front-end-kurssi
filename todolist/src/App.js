import React, { useState } from 'react'
import './App.css'
import ToDoTable from './TodoList'

function App () {
  const [todo, setTodo] = useState({ desc: '', date: ''})
  const [todos, setTodos] = useState([])

  const inputChanged = (event) => { 
    setTodo({ ...todo, [event.target.name]: [event.target.value]}) 
}
  const addTodo = (event) => {
    event.preventDefault();    
    todo.id = new Date().getTime()
    setTodos([...todos, todo])
    setTodo({ desc: '', date: ''})
  }

const deleteTodo =(id) =>{
  let newTodos= todos.filter(item => item.id !== id); 
  setTodos(newTodos)
};


  return (
    <div className="App">

        <input type="date" name="date"onChange={inputChanged} value={todo.date}/>
        <input type="text" name="desc" onChange={inputChanged} value={todo.desc}/> <button onClick={addTodo}> Add </button>
        <ToDoTable deleteTodo={deleteTodo} todos={todos}/>  

    </div>
  )
}

export default App

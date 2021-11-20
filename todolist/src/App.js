import React, { useState } from 'react'
import './App.css'

function App () {
  const [todo, setTodo] = useState({desc: '', date: ''})
  const [todos, setTodos] = useState([])

  const inputChanged = (event) => { setTodo({...todo, [event.target.name]: [event.target.value]}) }
  const addTodo = (event) => {
    event.preventDefault()
    setTodos([...todos, todo])
  }

  return (
    <div className="App">

        <input type="text" name="desc" onChange={inputChanged} value={todo.desc}/>
        <input type="date" name="date" onChange={inputChanged} value={todo.date}/> 
        <button onClick={addTodo}> Add </button>

        <table><tbody>{todos.map((todo, index) => <tr key={index}><td>{todo.desc}</td><td>{todo.date}</td></tr>)}
              </tbody>
        </table>

    </div>
  )
}

export default App

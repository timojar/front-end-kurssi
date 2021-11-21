import React, { useState } from 'react'
import './App.css'

function App () {
  const [todo, setTodo] = useState({ desc: '', date: '', id: ''})
  const [todos, setTodos] = useState([])

  const inputChanged = (event) => { 
    setTodo({ ...todo, [event.target.name]: [event.target.value]}) 
}
  const addTodo = (event) => {
    event.preventDefault()
   let editedToDo = todo
   editedToDo.id = new Date().getTime()
    setTodos([...todos, editedToDo])
    setTodo({ desc: '', date: '', id: ''})
  }

const deleteTodo =(id) =>{
  let newTodos= todos.filter(item => item.id !== id); 
  setTodos(newTodos)
};


  return (
    <div className="App">

        <input type="date" name="date"onChange={inputChanged} value={todo.date}/>
        <input type="text" name="desc" onChange={inputChanged} value={todo.desc}/> <button onClick={addTodo}> Add </button>

        <table><tbody>{todos.map((todo, index) =><tr key={index}><td>{todo.desc} </td><td>{todo.date}</td>
                                                        <button onClick={() => deleteTodo(todo.id)}> Delete </button>                                                     
                                                </tr> )
                      }
              </tbody>
        </table>

    </div>
  )
}

export default App

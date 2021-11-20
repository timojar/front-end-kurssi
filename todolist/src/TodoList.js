import React from "react";

export default function ToDoList(props){

    return (
        <div>
            
        <table>
              <tbody>{props.todos.map((todo, index) => 
                          <tr key={index}><td>{todo.desc}</td><td>{todo.date}</td></tr>)
                      }
              </tbody>
        </table>
        </div>

    );

}
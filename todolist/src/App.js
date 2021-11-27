import React, { useState } from "react";
import "./App.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";

function App() {
  const [todo, setTodo] = useState({ desc: "", date: "", priority: "" });
  const [todos, setTodos] = useState([]);
  const gridRef = React.useRef();

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: [event.target.value] });
  };
  const addTodo = (event) => {
    event.preventDefault();
    todo.id = new Date().getTime();
    setTodos([...todos, todo]);
  };

  const deleteTodo = () => {
    if (gridRef.current.getSelectedNodes().length > 0) {
      setTodos(
        todos.filter(
          (todo, index) =>
            index !== gridRef.current.getSelectedNodes()[0].childIndex
        )
      );
    } else {
      alert("Select row first");
    }
  };

  const columns = [
    { headerName: "Date", field: "date", sortable: true, filter: true },
    { headerName: "Description", field: "desc", sortable: true, filter: true },
    {
      headerName: "Priority",
      field: "priority",
      sortable: true,
      filter: true,
      cellStyle: (params) =>
        params.value === "High" ? { color: "red" } : { color: "black" },
    },
  ];

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
      >
        <AgGridReact
          onGridReady={(params) => (gridRef.current = params.api)}
          ref={gridRef}
          rowSelection="single"
          columnDefs={columns}
          rowData={todos}
        />
      </div>
    </div>
  );
}

export default App;

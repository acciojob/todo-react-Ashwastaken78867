
import React from "react";
import './../styles/App.css';
import React, { useState } from "react";
const App = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const handleAddTodo = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="app-container">
      <h1 className="header">To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          className="task-input"
        />
        <button onClick={handleAddTodo} className="add-button">
          Add Todo
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <span className="todo-text">{todo}</span>
            <button
              onClick={() => handleDeleteTodo(index)}
              className="delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

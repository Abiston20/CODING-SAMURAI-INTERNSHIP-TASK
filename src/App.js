import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => setTodos([todo, ...todos]);

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEdit = (todo) => {
    setEditing(todo);
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
    setEditing(null);
  };

  return (
    <div className="App">
      <h1>📝 To-Do List</h1>
      <TodoForm addTodo={addTodo} editTodo={editTodo} editing={editing} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        handleDelete={handleDelete}
        startEdit={startEdit}
      />
    </div>
  );
};

export default App;
document.body.classList.toggle('dark-mode');

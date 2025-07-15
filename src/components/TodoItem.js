import React from "react";

const TodoItem = ({ todo, toggleComplete, handleDelete, startEdit }) => {
  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "" }}>
      {todo.text}
      <button onClick={() => toggleComplete(todo.id)}>✔</button>
      <button onClick={() => startEdit(todo)}>✏️</button>
      <button onClick={() => handleDelete(todo.id)}>🗑️</button>
    </li>
  );
};

export default TodoItem;
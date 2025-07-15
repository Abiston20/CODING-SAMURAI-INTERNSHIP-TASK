import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleComplete, handleDelete, startEdit }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          handleDelete={handleDelete}
          startEdit={startEdit}
        />
      ))}
    </ul>
  );
};

export default TodoList;
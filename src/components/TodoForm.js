import React, { useState, useEffect } from "react";

const TodoForm = ({ addTodo, editTodo, editing }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (editing) {
      setInput(editing.text);
    }
  }, [editing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;

    editing
      ? editTodo(editing.id, input)
      : addTodo({ id: Date.now(), text: input, completed: false });

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">{editing ? "Update" : "Add"}</button>
    </form>
  );
};

export default TodoForm;
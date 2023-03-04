import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: uuidv4(), text, status: true });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add ToDo"
        value={text}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}
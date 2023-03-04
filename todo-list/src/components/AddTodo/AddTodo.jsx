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
    // 순서 주의 반드시 onAdd 이전에 넣어야함.
    if (text.trim() === "") {
      return;
    }
    onAdd({ id: uuidv4(), text, status: "active" });
    setText("");
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

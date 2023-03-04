import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// addTodo 처음에 prop으로 받는 것은 onAdd임
export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      return;
    }
    onAdd({ id: uuidv4(), text, status: "active" });
    setText("");
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    // control form 제작
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        placeholder="Add ToDo"
        // 텍스트가 변경이 될때마다 handleChange 콜백 실행
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}

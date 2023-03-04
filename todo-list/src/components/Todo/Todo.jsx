import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function Todo({ todo, onUpdate, onDelete }) {
  // text와 status라는 값을 todo로 부터 받아올 것이다.
  //  이렇게 작성하면 todo.status, todo.text 이렇게 안써도 text status 만으로 접근 가능
  const { status, text } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status: status });
    // onUpdate({ ...todo, status: e.target.checked ? true : false });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li>
      <input
        type="checkbox"
        id="checkbox"
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">{text}</label>
      <button onClick={handleDelete}>
        <FaTrashAlt />
      </button>
    </li>
  );
}

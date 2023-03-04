import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";

export default function ToDoList() {
  const [todos, setTodos] = useState([
    {
      id: "1",
      text: "밥먹기",
      status: false,
    },
    {
      id: "2",
      text: "공부하기",
      status: false,
    },
  ]);
  const handleAdd = (todo) => setTodos([...todos, todo]);

  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));

  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));
  return (
    <section>
      <ul>
        {todos.map((item) => (
          // 삭제하고 완성했는지 안했는지를 Todo.jsx(컴포넌트) 관리
          // todo가 무엇인지 item자체를 전달
          <Todo
            key={item.id}
            todo={item}
            // todo컴포넌트에 onUpdate onDelete될떄 콜백 전달
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

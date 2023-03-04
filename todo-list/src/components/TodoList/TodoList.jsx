import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";

export default function ToDoList({ filter }) {
  const [todos, setTodos] = useState([
    {
      id: "1",
      text: "밥먹기",
      status: "active",
    },
    {
      id: "2",
      text: "공부하기",
      status: "active",
    },
  ]);
  const handleAdd = (todo) => setTodos([...todos, todo]);

  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));

  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));

  // 필터링 함수 만듬
  const filtered = getFilteredItems(todos, filter);
  return (
    <section>
      <ul>
        {filtered.map((item) => (
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

// filter가 전체인 경우에는 그냥 todo리스트 전체를 보여주면됨
function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  // 아닌 경우에는 이제 해당하는 상태의 것들만 필터링해서 보여주면 됩니다.
  return todos.filter((todo) => todo.status === filter);
}

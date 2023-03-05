import React, { useState } from "react";
import { useEffect } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

export default function ToDoList({ filter }) {
  // useState 내부적으로 값들을 기억하고 있음. 컴포넌트가 리랜더링 될떄마다 useState가 호출이되어 초깃값이 전달이 되는데 useState내부적으로 이미 업데이트된 값이 있다면 초기값을 무시하고 내부적으로 사용하고 있는 값을 사용합니다. 함수를 호출해서 무엇인가 데이터를 읽어오거나 localStorage사용 file에서 읽어오거나 네트워크 상에서 읽어오는 일들을 한다면 이 함수가 호출이 될때마다 다시 계속 읽어옵니다. 내부적으로 읽어온 값을 쓰지않고, 내부적으로 가지고있는 값을 사용한다. UI상으로는 업데이트 되지는 않지만 내부적으로 갖고있는 state를씀 그러면 네트워크에서 불필요하계 계속 초기값을 읽을 것이다. 이를 방지하기위해 함수를 호출하는 일을 할떄는 콜백함수로 감싸주는 것이 좋다. 즉, readTodos가 아닌 () => readTodos() 이렇게 작성하면 함수가 한번만 호출된다.(console.log로 확인), 함수자체를 호출하는 것이 아닌 콜백함를 전달할때는 useState은 함수 하나만 만들어서 전달하고, 초기값이 필요한 경우에만 우리가 전달한 함수를 호출해서 초기값을 얻고, useState를 호출할 떄 함수를 아무리 많이 만들어서 전달해도 내부적으로 가지고 있는 상태가 있다면 초기값이 필요하지 않으니까 초기값을 반환하는 함수를 호출하지 않을 것이다. 그래서 콜백함수는 더이상 호출되지 않을 것이다. 콜백함수가 일반함수에 비해 갖고있는 단점은 불필요한 함수가 만들어진다는 점이다.
  const [todos, setTodos] = useState(() => readTodosFromLocalStorage());
  // useState(readTodosFromLocalStorage)로 축약 가능

  const handleAdd = (todo) => setTodos([...todos, todo]);

  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));

  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // 필터링 함수 만듬
  const filtered = getFilteredItems(todos, filter);
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
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

function readTodosFromLocalStorage() {
  console.log("readTodosFromLocalStorage");
  const todos = localStorage.getItem("todos");
  // todos가 있다면 JSON으로 다시 parse해서 배열로 만들어주고, 없다면 빈배열로 리턴
  return todos ? JSON.parse(todos) : [];
}

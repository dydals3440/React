import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  const filters = ["all", "active", "completed"];
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <Header
        filters={filters}
        filter={filter}
        // onFilterChange = {setFilter} 만 가능
        onFilterChange={(filter) => setFilter(filter)}
      />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;

// App에서는 우리가 고정된 값의 filters의 배열이 있다.
// 우리 컴포넌트에 처음 선택된 filter는 all로 시작.
// Header한테 우리가 사용하고 있는 모든 filters에 대한 정보(filters), 현재 선택된 정보 (filter) , filter가 변경이 되면 호출할 수 있는 정보(onFilterChange{setFilter})

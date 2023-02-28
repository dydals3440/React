import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

// components를 만들어 나갈떄 공통적인 데이터는 필요하고 제일 근접한 부모 component에 두고 필요한 데이터를 아래 total={count}와 같이 prop으로 전달해주고 내가 무언가를 클릭했을때 부모에게서 처리가 되길 원한다면 props으로 아래와 같이 전달해주면 됩니다.

// 개별적으로 필요한 state가 있다면 내부 컴포넌트에서 처리

export default function AppCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((prev) => prev + 1);
  return (
    <div className="container">
      <div className="banner">
        Total Count: {count} {count > 10 ? "🔥" : "❄️"}
      </div>
      <div className="counters">
        <Counter total={count} onClick={handleClick} />
        <Counter total={count} onClick={handleClick} />
      </div>
    </div>
  );
}

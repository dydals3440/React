import React, { useState } from "react";

export default function AppXY() {
    // 상태를 객체단위로 보관하고 업데이트
  const [position, setPosition] = useState({ x: 0, y: 0 });
  //   const [x, setX] = useState(0);
  //   const [y, setY] = useState(0);
  return (
    <div
      className="container"
      onMouseMove={(e) => {
        // setCoordinate({ x: e.clientX, y: e.clientY });
        // 좌표의 위치가 변경될떄마다 상태값 업데이트
        // setX(e.clientX);
        // setY(e.clientY);
        // setPosition({ x: e.clientX, y: e.clientY }); //// 조금더 간추린 코드
        // 만약에 수평으로만 이동 가능하게 만든다면? (y축은 고정, x축은 그대로)
        // setPosition((prev) => ({ x: e.clientX, y: prev.y }));
        // setPosition((prev) => ({ ...prev, x: e.clientX }));
        setPosition({ x: e.clientX });
        console.log(e.clientX);
      }}
    >
      <div
        className="pointer"
        // pointer 동적으로 이동 transform: translate(x좌표, y좌표)
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      ></div>
    </div>
  );
}

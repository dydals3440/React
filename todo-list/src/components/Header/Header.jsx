import React from "react";

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <header>
      <ul>
        {/* 동적으로 리스트요소가 변경되는 것이아니라 고정도니 ui이니 인덱스 사용 */}
        {filters.map((value, index) => (
          <li key={index}>
            <button onClick={() => onFilterChange(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}

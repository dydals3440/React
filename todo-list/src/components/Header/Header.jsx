import React from "react";
import styles from "./Header.module.css";

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <header className={styles.header}>
      <ul className={styles.filters}>
        {/* 동적으로 리스트요소가 변경되는 것이아니라 고정도니 ui이니 인덱스 사용 */}
        {filters.map((value, index) => (
          <li key={index}>
            <button
              //
              className={`${styles.filter} 
              ${filter === value && styles.selected}`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}

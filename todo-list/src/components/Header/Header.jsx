import React from "react";
import { useDarkMode } from "../../context/DarkModeContext";
import styles from "./Header.module.css";
import { HiMoon, HiSun } from "react-icons/hi";

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className={styles.header}>
      {/* darkMode Button darkMode면 달모양 버튼 아니면 해모양*/}
      <button className={styles.toggle} onClick={toggleDarkMode}>
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </button>
      <ul className={styles.filters}>
        {/* 동적으로 리스트요소가 변경되는 것이아니라 고정도니 ui이니 인덱스 사용 */}
        {filters.map((value, index) => (
          <li key={index}>
            <button
              //
              className={`${
                styles.filter
              } // 현재 전달받은 필터와 내 버튼의 값이 동일하다면 selected된 버튼이라면, 그러면 styles.selected로 처리 
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

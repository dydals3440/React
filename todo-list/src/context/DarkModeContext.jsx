import { useState, useEffect } from "react";
import { createContext, useContext } from "react";

const DarkModeContext = createContext();

// context를 이용해서 child component에게 전달할 수 있는 provider우산을 만들어야함 인자로는 자식 노드들을 받아와야한다.
export function DarkModeProvider({ children }) {
  // 공통적인 데이터를 useState으로 정의(dark모드인지 아닌지) 처음은 lightMode(false)
  const [darkMode, setDarkMode] = useState(false);
  //   setDarkMode를 바로 자식노드로 전달해주어도 되지만 자식 노드에서 이전 darkmode가 아니라면 반대의 불리언을 설정하는것 조차 이것조차 내부 구현상황이므로 자세하게 설정하는 것은 아래코드에서 해줄 것, 자식들은 토글만 누르면 상태를 반대로 설정할 수 있게 설정
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  }; // 그후 Providerd의 value에 설정
  // 자식을 DarkModeContext.Provider로 감싸주어야합니다.
  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

// 원래라면 darkMode를 사용하는 곳에 useContext(DarkModeContext)를 활용하여 일일이 darkModeContext란 사실을 알려줘야한다.
// 우리는 darkModeConteext라는 것을 외부로 노출해주는 것이아니라 조금 더 간편한 함수(훅) 을 만들어 준다. 사용하는 곳에서 useDarkMode라고만 해주면된다. 내부적으로 어떤 context를 쓰는지 신경 안써도 된다.
export const useDarkMode = () => useContext(DarkModeContext);

// header.jsx에 const { darkMode, toggleDarkMode } = useDarkMode; 이 코드 설정.
// 그 후 우산을 씌워주어야 하므로, App.js에서 우산씌움

function updateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
}

import { createContext, useState } from "react";

// 여기에 필요한 데이터를 context에 담고 있음
export const DarkModeContext = createContext();

// context를 만들때는 항상 provider도 만들어주어야합니다.
// provider는 데이터를 잘 가지고 보여주고 있는 umbrella를 만든다고 생각
export function DarkModeProvider({ children }) {
  // 다크모드인지 아닌지 기억하는 상태
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);
  return (
    <DarkModeContext.Provider value={{ darkMode: darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

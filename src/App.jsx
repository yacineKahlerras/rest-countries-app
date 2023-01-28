import React, { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import DarkThemeContext from "./utils/contexts/DarkThemeContext";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (darkTheme) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkTheme]);

  return (
    <main className="min-h-screen text-sm bg-white dark:bg-VeryDarkBlue text-VeryDarkBlue dark:text-White">
      <DarkThemeContext.Provider
        value={{ darkTheme: darkTheme, setDarkTheme: setDarkTheme }}
      >
        <Nav />
      </DarkThemeContext.Provider>
    </main>
  );
}

export default App;

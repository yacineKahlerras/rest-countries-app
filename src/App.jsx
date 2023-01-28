import React, { useEffect, useState } from "react";
import Nav from "@/components/Nav/Nav";
import DarkThemeContext from "./utils/contexts/DarkThemeContext";
import { Outlet } from "react-router-dom";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    if (darkTheme) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkTheme]);

  return (
    <main className="min-h-screen text-sm bg-VeryLightGray dark:bg-VeryDarkBlue text-VeryDarkBlue dark:text-White">
      <DarkThemeContext.Provider
        value={{ darkTheme: darkTheme, setDarkTheme: setDarkTheme }}
      >
        <Nav />
        <Outlet />
      </DarkThemeContext.Provider>
    </main>
  );
}

export default App;

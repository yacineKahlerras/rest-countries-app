import React, { useState } from "react";
import Nav from "@/components/Nav";
import DarkThemeContext from "./utils/contexts/DarkThemeContext";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <main
      className={`min-h-screen text-sm ${
        darkTheme ? "bg-gray-900 text-white " : "bg-white text-black"
      }`}
    >
      <DarkThemeContext.Provider
        value={{ darkTheme: darkTheme, setDarkTheme: setDarkTheme }}
      >
        <Nav />
      </DarkThemeContext.Provider>
    </main>
  );
}

export default App;

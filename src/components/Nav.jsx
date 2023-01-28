import React, { useContext } from "react";
import sunIcon from "@/assets/images/darkTheme/brightness-low-fill.svg";
import moonIcon from "@/assets/images/darkTheme/moon-fill.svg";
import DarkThemeContext from "@/utils/contexts/DarkThemeContext";

function Nav() {
  const { darkTheme, setDarkTheme } = useContext(DarkThemeContext);

  function toggleTheme() {
    setDarkTheme((oldValue) => !oldValue);
  }

  return (
    <nav>
      <div className="flex justify-between items-center px-4 py-6">
        <h1>Where is the world ?</h1>
        <button onClick={toggleTheme} className="flex gap-3 items-center">
          <img src={moonIcon} alt="theme" />
          Dark Mode
        </button>
      </div>
    </nav>
  );
}

export default Nav;
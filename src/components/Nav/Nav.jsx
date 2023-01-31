import React, { useContext } from "react";
import sunIcon from "@/assets/images/darkTheme/brightness-low-fill.svg";
import moonIcon from "@/assets/images/darkTheme/moon-fill.svg";
import DarkThemeContext from "@/utils/contexts/DarkThemeContext";
import { Link } from "react-router-dom";
import baseUrl from "@/utils/data/baseUrl";

function Nav() {
  const { darkTheme, setDarkTheme } = useContext(DarkThemeContext);

  function toggleTheme() {
    setDarkTheme((oldValue) => !oldValue);
  }

  return (
    <nav className="bg-White dark:bg-DarkBlue drop-shadow-md">
      <div className="flex justify-between items-center px-4 py-6">
        <Link to={`${baseUrl}`}>
          <h1>Where is the world ?</h1>
        </Link>
        <button onClick={toggleTheme} className="flex gap-1 items-center">
          <img
            src={darkTheme ? sunIcon : moonIcon}
            alt="theme"
            className="w-4 dark:w-5 dark:invert"
          />
          {darkTheme ? "Light" : "Dark"} Mode
        </button>
      </div>
    </nav>
  );
}

export default Nav;

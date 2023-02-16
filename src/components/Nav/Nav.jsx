import React, { memo, useContext } from "react";
import sunIcon from "@/assets/images/darkTheme/brightness-low-fill.svg";
import moonIcon from "@/assets/images/darkTheme/moon-fill.svg";
import NavBarData from "@/utils/contexts/DarkThemeContext";
import { Link } from "react-router-dom";
import baseUrl from "@/utils/data/baseUrl";
import NavSignIn from "./components/NavSignIn";

function Nav() {
  const { darkTheme, setDarkTheme } = useContext(NavBarData);

  function toggleTheme() {
    setDarkTheme((oldValue) => !oldValue);
  }

  return (
    <nav className="bg-White dark:bg-DarkBlue drop-shadow-md z-30 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-6">
        <Link to={`${baseUrl}`}>
          <h1>Where is the world ?</h1>
        </Link>
        <div className="gap-5 hidden md:flex">
          <NavSignIn />
          <button onClick={toggleTheme} className="flex gap-1 items-center">
            <img
              src={darkTheme ? sunIcon : moonIcon}
              alt="theme"
              className="w-4 dark:w-5 dark:invert"
            />
            {darkTheme ? "Light" : "Dark"} Mode
          </button>
        </div>
        {/* sidebar button */}
        <button
          className="w-9 aspect-square bg-hamburger bg-no-repeat bg-cover bg-center invert"
          aria-label="sidemenu button"
        ></button>
      </div>
    </nav>
  );
}

export default memo(Nav);

import React, { memo, useContext, useState } from "react";
import sunIcon from "@/assets/images/darkTheme/brightness-low-fill.svg";
import moonIcon from "@/assets/images/darkTheme/moon-fill.svg";
import NavBarData from "@/utils/contexts/DarkThemeContext";
import { Link } from "react-router-dom";
import baseUrl from "@/utils/data/baseUrl";
import NavSignIn from "./components/NavSignIn";

function Nav() {
  const { darkTheme, setDarkTheme } = useContext(NavBarData);
  const [sidemenuActive, setSidemenuActive] = useState(false);
  const menuBtnImg = sidemenuActive ? "bg-close" : "bg-hamburger";

  function toggleTheme() {
    setDarkTheme((oldValue) => !oldValue);
  }

  function toggleSidemenu() {
    setSidemenuActive((prev) => !prev);
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
          className={`w-9 aspect-square ${menuBtnImg} bg-no-repeat bg-cover bg-center invert md:hidden`}
          aria-label="sidemenu button"
          onClick={toggleSidemenu}
        ></button>
      </div>
    </nav>
  );
}

export default memo(Nav);

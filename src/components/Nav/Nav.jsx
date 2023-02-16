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

  function toggleTheme() {
    setDarkTheme((oldValue) => !oldValue);
  }

  function toggleSidemenu() {
    setSidemenuActive((prev) => !prev);
  }

  return (
    <nav className="bg-White dark:bg-DarkBlue drop-shadow-md z-30">
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
          className={`w-9 aspect-square bg-hamburger bg-no-repeat bg-cover bg-center invert md:hidden`}
          aria-label="sidemenu button"
          onClick={toggleSidemenu}
        ></button>
      </div>

      {/* sidemenu */}
      <div
        className={`fixed w-full h-screen top-0 left-0 bg-VeryDarkBlue overflow-x-hidden 
        transition-all 
        ${!sidemenuActive ? "-z-50 bg-opacity-0" : "bg-opacity-70 z-50"}`}
      >
        <div
          className={`absolute h-full w-[min(100%,15rem)] bg-DarkBlue top-0 right-0 transition-all 
          ${!sidemenuActive ? "translate-x-full" : ""}`}
        >
          <button
            className={`w-9 aspect-square bg-close bg-no-repeat bg-cover bg-center invert 
            md:hidden absolute top-5 right-5`}
            aria-label="sidemenu button"
            onClick={toggleSidemenu}
          ></button>
          <ul className=" mt-28 pl-10 flex flex-col gap-5 ">
            <button onClick={toggleTheme} className="flex gap-1 items-center">
              <img
                src={darkTheme ? sunIcon : moonIcon}
                alt="theme"
                className="w-4 dark:w-5 dark:invert"
              />
              {darkTheme ? "Light" : "Dark"} Mode
            </button>
            <NavSignIn />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default memo(Nav);

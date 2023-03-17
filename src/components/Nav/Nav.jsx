import React, { memo, useContext, useState } from "react";
import sunIcon from "@/assets/images/darkTheme/brightness-low-fill.svg";
import moonIcon from "@/assets/images/darkTheme/moon-fill.svg";
import NavBarData from "@/utils/contexts/DarkThemeContext";
import NavSignIn from "./components/NavSignIn";
import Sidemenu from "../sidemenu/Sidemenu";
import Link from "next/link";
import Image from "next/image";

function Nav() {
  const { darkTheme, setDarkTheme } = useContext(NavBarData);
  const [sidemenuActive, setSidemenuActive] = useState(false);
  const sidemenuParams = {
    darkTheme,
    sidemenuActive,
    toggleTheme,
    toggleSidemenu,
  };

  function toggleTheme() {
    setDarkTheme((oldValue) => !oldValue);
  }

  function toggleSidemenu() {
    setSidemenuActive((prev) => !prev);
  }

  return (
    <>
      <nav className="bg-White dark:bg-DarkBlue drop-shadow-md md:relative md:z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-6">
          <Link href="/">
            <h1 className=" font-semibold text-lg md:text-xl ">
              Where is the world ?
            </h1>
          </Link>

          {/* nav buttons */}
          <div className="gap-5 hidden md:flex">
            <NavSignIn />
            <button onClick={toggleTheme} className="flex gap-1 items-center">
              <Image
                src={darkTheme ? sunIcon : moonIcon}
                alt="theme"
                className="w-4 dark:w-5 dark:invert"
              />
              {darkTheme ? "Light" : "Dark"} Mode
            </button>
          </div>

          {/* sidebar button */}
          <button
            className={`w-9 aspect-square bg-hamburger bg-no-repeat bg-cover bg-center dark:invert md:hidden`}
            aria-label="sidemenu button"
            onClick={toggleSidemenu}
          ></button>
        </div>
      </nav>

      {/* sidemenu */}
      <Sidemenu sidemenuParams={sidemenuParams} />
    </>
  );
}

export default memo(Nav);

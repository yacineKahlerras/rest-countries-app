import React from "react";
import sunIcon from "@/assets/images/darkTheme/brightness-low-fill.svg";
import moonIcon from "@/assets/images/darkTheme/moon-fill.svg";
import NavSignIn from "../Nav/components/NavSignIn";

export default function Sidemenu(props) {
  const { sidemenuActive, toggleSidemenu, toggleTheme, darkTheme } =
    props.sidemenuParams;
  const sidemenuStyle = !sidemenuActive
    ? "-z-50 bg-opacity-0"
    : "bg-opacity-70 z-50";
  const sidemenuContentStyle = !sidemenuActive ? "translate-x-full" : "";

  return (
    <div
      className={`fixed w-full h-screen top-0 left-0 bg-VeryDarkBlue overflow-x-hidden transition-all ${sidemenuStyle}`}
      id="sidemenu-container"
    >
      <div
        className={`absolute h-full w-[min(100%,15rem)] bg-DarkBlue top-0 right-0 transition-all ${sidemenuContentStyle}`}
      >
        <button
          className={`w-9 aspect-square bg-close bg-no-repeat bg-cover bg-center invert md:hidden absolute top-5 right-5`}
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
  );
}

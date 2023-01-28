import React, { useContext } from "react";
import sunIcon from "@/assets/images/darkTheme/brightness-low-fill.svg";
import moonIcon from "@/assets/images/darkTheme/moon-fill.svg";
import DarkThemeContext from "@/utils/contexts/DarkThemeContext";

function Nav() {
  const { darkTheme, setDarkTheme } = useContext(DarkThemeContext);

  return (
    <nav>
      <div>
        <h1>Where is the world ?</h1>
        <button>
          <img src={moonIcon} alt="theme" />
          Dark Mode
        </button>
      </div>
    </nav>
  );
}

export default Nav;

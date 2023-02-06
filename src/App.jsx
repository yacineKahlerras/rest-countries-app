import React, { useEffect, useState } from "react";
import Nav from "@/components/Nav/Nav";
import DarkThemeContext from "./utils/contexts/DarkThemeContext";
import { Outlet } from "react-router-dom";
import axios from "axios";
import FilterDataContext from "./utils/contexts/FilterDataContext";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [countries, setCountries] = useState();
  const [regionIndex, setRegionIndex] = useState();
  const [searchFilter, setSearchFilter] = useState("");
  const dropDownContent = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const filterData = {
    regionIndex,
    setRegionIndex,
    dropDownContent,
    searchFilter,
    setSearchFilter,
  };

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/all`).then((res) => {
      setCountries(res.data);
    });
  }, []);

  useEffect(() => {
    if (darkTheme) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkTheme]);

  return (
    <main
      className="min-h-screen text-sm bg-VeryLightGray dark:bg-VeryDarkBlue text-VeryDarkBlue 
    dark:text-White sm:text-base"
    >
      <FilterDataContext.Provider value={filterData}>
        <DarkThemeContext.Provider
          value={{ darkTheme: darkTheme, setDarkTheme: setDarkTheme }}
        >
          <Nav />
          <Outlet context={[countries]} />
        </DarkThemeContext.Provider>
      </FilterDataContext.Provider>
    </main>
  );
}

export default App;

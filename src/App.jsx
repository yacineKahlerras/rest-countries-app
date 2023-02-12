import React, { useEffect, useState } from "react";
import Nav from "@/components/Nav/Nav";
import DarkThemeContext from "./utils/contexts/DarkThemeContext";
import { Outlet } from "react-router-dom";
import axios from "axios";
import FilterDataContext from "./utils/contexts/FilterDataContext";
import getRedirect from "./firebase/googleSignInRedirectResult";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [countries, setCountries] = useState();
  const [regionIndex, setRegionIndex] = useState();
  const [searchFilter, setSearchFilter] = useState("");
  const dropDownContent = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const [user, setUser] = useState(null);

  async function googleStuff() {
    getRedirect(setUser);
    // if (user == null) signIn();
  }

  useEffect(() => {
    googleStuff();
  }, []);

  // data states for filtering the countries
  const filterData = {
    regionIndex,
    setRegionIndex,
    dropDownContent,
    searchFilter,
    setSearchFilter,
  };

  // fetching countries list
  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/all`).then((res) => {
      setCountries(res.data);
    });
  }, []);

  // dark theme swicther
  useEffect(() => {
    if (darkTheme) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkTheme]);

  return (
    <main
      className="min-h-screen text-sm bg-VeryLightGray dark:bg-VeryDarkBlue text-VeryDarkBlue 
    dark:text-White sm:text-base"
    >
      <DarkThemeContext.Provider
        value={{ darkTheme: darkTheme, setDarkTheme: setDarkTheme }}
      >
        <Nav />
      </DarkThemeContext.Provider>
      <FilterDataContext.Provider value={filterData}>
        <Outlet context={[countries]} />
      </FilterDataContext.Provider>
    </main>
  );
}

export default App;

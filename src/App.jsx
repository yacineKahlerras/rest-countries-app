import React, { useEffect, useState } from "react";
import Nav from "@/components/Nav/Nav";
import NavBarData from "./utils/contexts/DarkThemeContext";
import { Outlet } from "react-router-dom";
import axios from "axios";
import FilterDataContext from "./utils/contexts/FilterDataContext";
import getRedirect from "./firebase/googleSignInRedirectResult";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/auth";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [countries, setCountries] = useState();
  const [regionIndex, setRegionIndex] = useState();
  const [searchFilter, setSearchFilter] = useState("");
  const dropDownContent = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const [user, setUser] = useState(null);
  const [isLoadingUser, setIsLoadingUser] = useState(false);

  // getting google sign in redirect result
  useEffect(() => {
    getRedirect(setUser, setIsLoadingUser);
  }, []);

  // data states for filtering the countries
  const filterData = {
    regionIndex,
    setRegionIndex,
    dropDownContent,
    searchFilter,
    setSearchFilter,
  };

  // listens to authentification state change and updates the user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // nav bar data
  const navBarObject = {
    darkTheme: darkTheme,
    setDarkTheme: setDarkTheme,
    isLoadingUser: isLoadingUser,
    user: user,
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
      <NavBarData.Provider value={navBarObject}>
        <Nav />
      </NavBarData.Provider>
      <FilterDataContext.Provider value={filterData}>
        <Outlet context={[countries]} />
      </FilterDataContext.Provider>
    </main>
  );
}

export default App;

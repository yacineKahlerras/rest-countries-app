import React, { useEffect, useState } from "react";
import DropDown from "./components/DropDown";
import SearchInput from "./components/SearchInput";
import axios from "axios";
import CountriesMap from "./components/CountriesMap";

function MainPage() {
  const [countries, setCountries] = useState();

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/all`).then((res) => {
      setCountries(res.data);
    });
  }, []);

  return (
    <div className="pt-8 px-5">
      <SearchInput />
      <DropDown />
      {countries ? <CountriesMap countriesList={countries} /> : ""}
    </div>
  );
}

export default MainPage;

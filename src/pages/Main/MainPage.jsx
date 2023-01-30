import React, { useEffect, useState } from "react";
import DropDown from "./components/DropDown";
import SearchInput from "./components/SearchInput";
import axios from "axios";
import CountriesMap from "./components/CountriesMap";
import FilterDataContext from "@/utils/contexts/FilterDataContext";

function MainPage() {
  const [countries, setCountries] = useState();
  const [regionIndex, setRegionIndex] = useState();
  const dropDownContent = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const filterData = {
    regionIndex: regionIndex,
    setRegionIndex: setRegionIndex,
    dropDownContent: dropDownContent,
  };

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/all`).then((res) => {
      setCountries(res.data);
    });
  }, []);

  return (
    <FilterDataContext.Provider value={filterData}>
      <div className="pt-8 px-5">
        <SearchInput />
        <DropDown
          regionIndex={regionIndex}
          setRegionIndex={setRegionIndex}
          dropDownContent={dropDownContent}
        />
        {countries ? <CountriesMap countriesList={countries} /> : ""}
      </div>
    </FilterDataContext.Provider>
  );
}

export default MainPage;

import React, { useState } from "react";
import DropDown from "./components/DropDown";
import SearchInput from "./components/SearchInput";
import CountriesMap from "./components/CountriesMap";
import FilterDataContext from "@/utils/contexts/FilterDataContext";
import { useOutletContext } from "react-router-dom";

function MainPage() {
  const [countries] = useOutletContext();
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

  return (
    <FilterDataContext.Provider value={filterData}>
      <div className="pt-8 px-5 max-w-7xl mx-auto">
        <div className="sm:flex justify-between mb-5 items-center">
          <SearchInput />
          <DropDown
            regionIndex={regionIndex}
            setRegionIndex={setRegionIndex}
            dropDownContent={dropDownContent}
          />
        </div>
        {countries ? <CountriesMap countriesList={countries} /> : ""}
      </div>
    </FilterDataContext.Provider>
  );
}

export default MainPage;

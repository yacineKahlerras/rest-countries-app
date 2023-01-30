import FilterDataContext from "@/utils/contexts/FilterDataContext";
import React, { useContext } from "react";
import CountryElement from "./CountryElement";

function CountriesMap(props) {
  const { countriesList } = props;
  const { regionIndex, dropDownContent, searchFilter } =
    useContext(FilterDataContext);
  let newCountriesList = countriesList;
  const searchReg = new RegExp(searchFilter, "i");

  if (regionIndex != null) {
    newCountriesList = newCountriesList.filter(
      (country) => country.region == dropDownContent[regionIndex]
    );
  }

  if (searchFilter != "") {
    newCountriesList = newCountriesList.filter((countries) =>
      searchReg.test(countries.name.common)
    );
  }

  return (
    <div
      className="grid justify-center justify-items-center gap-5 grid-cols-countriesMap 
      max-w-[93rem] mx-auto pb-14"
    >
      {newCountriesList.map((country, countryIdx) => {
        return <CountryElement key={countryIdx} country={country} />;
      })}
    </div>
  );
}

export default CountriesMap;

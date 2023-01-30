import React from "react";
import CountryElement from "./CountryElement";

function CountriesMap(props) {
  const { countriesList } = props;
  let newCountriesList = countriesList;

  return (
    <div
      className="grid justify-center justify-items-center gap-5 grid-cols-countriesMap 
      max-w-[93rem] mx-auto "
    >
      {newCountriesList.map((country, countryIdx) => {
        return <CountryElement key={countryIdx} country={country} />;
      })}
    </div>
  );
}

export default CountriesMap;

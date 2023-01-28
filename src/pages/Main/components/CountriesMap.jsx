import React from "react";
import CountryElement from "./CountryElement";

function CountriesMap(props) {
  const { countriesList } = props;

  return (
    <div>
      {countriesList.map((country, countryIdx) => {
        return <CountryElement key={countryIdx} country={country} />;
      })}
    </div>
  );
}

export default CountriesMap;

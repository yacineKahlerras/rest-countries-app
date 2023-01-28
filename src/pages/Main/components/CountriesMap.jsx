import React from "react";

function CountriesMap(props) {
  const { countriesList } = props;

  return (
    <div>
      {countriesList.map((country, countryIdx) => {
        const infos = [
          {
            label: "population",
            value: country.population,
          },
          {
            label: "region",
            value: country.region,
          },
          {
            label: "capital",
            value: country.capital,
          },
        ];

        return (
          <div key={countryIdx}>
            <img src={country.flags.svg} alt="country flag" />
            <div>
              <h2>{country.name.common}</h2>
              {infos.map((inf, infoIdx) => {
                return (
                  <div key={infoIdx} className="flex gap-2">
                    <span>{inf.label} : </span>
                    <span>{inf.value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesMap;

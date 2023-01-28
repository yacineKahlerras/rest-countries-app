import React from "react";

function CountryElement(props) {
  const { country } = props;

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
    <div>
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
}

export default CountryElement;

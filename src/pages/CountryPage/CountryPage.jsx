import React, { useEffect, useState } from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";

export async function CountryPageLoader({ params }) {
  return params.countryName;
}

export default function CountryPage() {
  const countryName = useLoaderData().replace(/_+/g, " ").toLowerCase();
  const [countries] = useOutletContext();
  const [country, setCountry] = useState();
  let countryData = country
    ? {
        name: country.name.common,
        "native name": country.name.nativeName.eng.common,
        population: country.population,
        region: country.region,
        "sub region": country.subregion,
        capital: country.capital[0],
        "top level domain": country.tld,
        currencies: country.currencies,
        languages: country.languages,
        "border countries": country.borders,
        flag: country.flags.svg,
      }
    : {};
  const labels1 = [
    "native name",
    "population",
    "region",
    "sub region",
    "capital",
  ];
  const labels2 = ["top level domain", "currencies", "languages"];

  function getCountryData() {
    for (let i = 0; i < countries.length; i++) {
      if (countries[i].name.common.toLowerCase() == countryName)
        setCountry(countries[i]);
    }
  }

  useEffect(() => {
    if (countries != null && country == null) getCountryData();
  }, [countries]);

  return (
    <div className="w-[90%] max-w-6xl mx-auto capitalize">
      <img src={countryData.flag} alt="country flag" />
      <div>
        <div>
          <h2>{countryData.name}</h2>
          {labels1.map((label, index) => {
            return (
              <div key={index} className="flex gap-2">
                <span className="dark:text-White">{label} : </span>
                <span className="dark:text-VeryLightGray font-light">
                  {countryData[label]}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

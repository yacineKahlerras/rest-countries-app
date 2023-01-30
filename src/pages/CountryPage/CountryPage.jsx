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
        "native name": country.name.nativeName.eng,
        population: country.population,
        region: country.region,
        "sub region": country.subregion,
        capital: country.capital,
        "top level domain": country.tld,
        currencies: country.currencies,
        languages: country.languages,
        "border countries": country.borders,
        flag: country.flags.svg,
      }
    : {};

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
    <div className="w-[90%] max-w-6xl mx-auto">
      <img src={countryData.flag} alt="country flag" />
      <div>
        <div>
          <h2>{countryData.name}</h2>
        </div>
      </div>
    </div>
  );
}

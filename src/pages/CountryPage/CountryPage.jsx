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
        nativeName: country.name.nativeName.eng,
        population: country.population,
        region: country.region,
        subregion: country.subregion,
        capital: country.capital,
        topLevelDomain: country.tld,
        currencies: country.currencies,
        languages: country.languages,
        borderCountries: country.borders,
      }
    : {};

  console.log(countryData);

  function getCountryData() {
    for (let i = 0; i < countries.length; i++) {
      if (countries[i].name.common.toLowerCase() == countryName)
        setCountry(countries[i]);
    }
  }

  useEffect(() => {
    if (countries != null && country == null) getCountryData();
  }, [countries]);

  return <h1>Heyaaaaaa</h1>;
}

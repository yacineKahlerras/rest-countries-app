import React, { useEffect, useState } from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";

export async function CountryPageLoader({ params }) {
  return params.countryName;
}

export default function CountryPage() {
  const countryName = useLoaderData().replace(/\s+/g, " ").toLowerCase();
  const [countries] = useOutletContext();
  const [country, setCountry] = useState();

  function getCountryData() {
    for (let i = 0; i < countries.length; i++) {
      if (countries[i].name.common == countryName) setCountry(countries[i]);
    }
  }

  useEffect(() => {
    getCountryData();
  }, []);

  return <h1>Heyaaaaaa</h1>;
}

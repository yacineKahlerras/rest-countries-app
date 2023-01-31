import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useOutletContext } from "react-router-dom";
import BorderCountries from "./components/BorderCountries";
import backIcon from "@/assets/images/buttons/arrow-left.svg";

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
        "native name":
          country.name.nativeName[Object.keys(country.name.nativeName)[0]]
            .common,
        population: country.population,
        region: country.region,
        "sub region": country.subregion,
        capital: country.capital ? country.capital[0] : null,
        "top level domain": country.tld[0],
        currencies: country.currencies
          ? country.currencies[Object.keys(country.currencies)[0]].name
          : [],
        languages: country.languages
          ? Object.values(country.languages).join(", ")
          : "",
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
  const navigate = useNavigate();

  function getCountryData() {
    for (let i = 0; i < countries.length; i++) {
      if (countries[i].name.common.toLowerCase() == countryName)
        setCountry(countries[i]);
    }
  }

  useEffect(() => {
    if (countries != null && country == null) getCountryData();
  }, [countries]);

  useEffect(() => {
    if (countries != null) getCountryData();
  }, [countryName]);

  return (
    <div className="w-[90%] max-w-6xl mx-auto capitalize py-14">
      <button
        className="bg-White dark:bg-DarkBlue p-[.3em] px-[1.2em] rounded-sm mb-9 flex gap-2 
        items-center text-sm drop-shadow-md "
        onClick={() => navigate(-1)}
      >
        <img className="dark:invert" src={backIcon} alt="back button" />
        Back
      </button>
      <div>
        <img src={countryData.flag} alt="country flag" className="mb-5" />
        <div>
          {/* part 1  */}
          <div>
            <h2 className="font-bold text-lg mb-3">{countryData.name}</h2>
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

          {/* part 2 */}
          <div>
            {labels2.map((label, index) => {
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

          {/* part 3  */}
          <BorderCountries
            countries={countries}
            currentCountry={country}
            borderSigns={countryData["border countries"]}
          />
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useOutletContext } from "react-router-dom";
import BorderCountries from "./components/BorderCountries";
import backIcon from "@/assets/images/buttons/arrow-left.svg";
import Loading from "./components/Loading";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Skeleton } from "@mui/material";
import LeafeletMap from "./components/LeafeletMap";

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
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(false);
  }, [countryName]);

  function BackPage() {
    setIsLoading(true);
    navigate(-1);
  }

  return (
    <div className="w-[90%] max-w-md lg:max-w-6xl mx-auto capitalize py-14 relative">
      {/* back button */}
      <button
        className="bg-White dark:bg-DarkBlue p-[.3em] px-[1.2em] rounded-sm mb-9 flex gap-2 
        items-center text-sm drop-shadow-md "
        onClick={BackPage}
      >
        <img className="dark:invert" src={backIcon} alt="back button" />
        Back
      </button>

      {/* country section */}
      <div
        className="grid justify-center lg:gap-5 lg:grid-cols-2 lg:justify-between mx-auto 
        lg:text-left"
      >
        <LazyLoadImage
          className="mb-5 w-full max-h-60 max-w-md drop-shadow-lg"
          src={countryData.flag}
          placeholder={
            <Skeleton
              width="100%"
              height="100%"
              sx={{
                transform: "scale(1)",
              }}
              animation="wave"
            />
          }
          alt="country flag"
        />
        <div className=" grid lg:grid-cols-2 grid-rows-[2.6em] gap-x-5">
          {/* title */}
          <h2 className="font-bold text-lg sm:text-2xl mb-3 lg:mb-0 sm:col-span-2">
            {countryData.name}
          </h2>

          {/* part 1  */}
          <div className="mb-5 lg:mb-0">
            {labels1.map((label, index) => {
              return (
                <div key={index} className="flex gap-2">
                  <span className="dark:text-White">
                    {label} :
                    <span className="dark:text-VeryLightGray font-light ml-1">
                      {countryData[label]}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>

          {/* part 2 */}
          <div className="mb-5 lg:mb-0">
            {labels2.map((label, index) => {
              return (
                <div key={index} className="flex gap-2">
                  <span className="dark:text-White">
                    {label} :
                    <span className="dark:text-VeryLightGray font-light ml-1">
                      {countryData[label]}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>

          {/* border countries  */}
          <BorderCountries
            countries={countries}
            currentCountry={country}
            borderSigns={countryData["border countries"]}
          />
        </div>
      </div>

      {country ? <LeafeletMap latlng={country.latlng} /> : ""}

      {/* loading component */}
      <Loading isLoading={isLoading} />
    </div>
  );
}

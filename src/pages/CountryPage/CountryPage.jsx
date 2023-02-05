import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useOutletContext } from "react-router-dom";
import BorderCountries from "./components/BorderCountries";
import Loading from "./components/Loading";
import LeafeletMap from "./components/LeafeletMap";
import getCountryDataInfo from "./methods/getCountryData";
import { labels1, labels2 } from "./data/infoLabels";
import BackBtn from "./components/BackBtn";
import CountryImage from "./components/CountryImage";
import CountryInfo from "./components/CountryInfo";

export async function CountryPageLoader({ params }) {
  return params.countryName;
}

export default function CountryPage() {
  const countryName = useLoaderData().replace(/_+/g, " ").toLowerCase();
  const [countries] = useOutletContext();
  const [country, setCountry] = useState();
  let countryData = getCountryDataInfo(country);
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
    window.scrollTo(0, 0);
  }, [countryName]);

  function BackPage() {
    setIsLoading(true);
    navigate(-1);
    window.scrollTo(0, 0);
  }

  return (
    <div className="w-[90%] max-w-md lg:max-w-6xl mx-auto capitalize py-14 relative">
      {/* back button */}
      <BackBtn BackPage={BackPage} />

      {/* country section */}
      <div
        className="grid justify-center lg:gap-5 lg:grid-cols-2 lg:justify-between mx-auto 
        lg:text-left"
      >
        <CountryImage countryData={countryData} />
        <div className=" grid lg:grid-cols-2 grid-rows-[2.6em] gap-x-5">
          {/* title */}
          <h2 className="font-bold text-lg sm:text-2xl mb-4 lg:mb-5 sm:col-span-2 flex items-center gap-2 sm:gap-3">
            {countryData.name}
            {countryData.coatOfArms ? (
              <img
                src={countryData.coatOfArms}
                alt="coat of arms"
                className="max-w-[1.5rem] sm:max-w-[2rem]"
              />
            ) : (
              ""
            )}
          </h2>

          {/* part 1  */}
          <CountryInfo labels={labels1} countryData={countryData} />

          {/* part 2 */}
          <CountryInfo labels={labels2} countryData={countryData} />

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

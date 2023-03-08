import CountriesContext from "@/utils/contexts/CountriesContext";
import React, { memo, useContext, useEffect, useState } from "react";
import BorderCountries from "./components/BorderCountries";
import Loading from "./components/Loading";
// import LeafeletMap from "./components/LeafeletMap";
import getCountryDataInfo from "./methods/getCountryData";
import { labels1, labels2 } from "./data/infoLabels";
import BackBtn from "./components/BackBtn";
import CountryImage from "./components/CountryImage";
import CountryInfo from "./components/CountryInfo";
import CountryTitle from "./components/CountryTitle";

export async function CountryPageLoader({ params }) {
  return params.countryName;
}

function CountryPage(props) {
  const { countryPathName } = props;
  const countryName = countryPathName.replace(/_+/g, " ").toLowerCase();
  // const countryName = useLoaderData().replace(/_+/g, " ").toLowerCase();
  // const [countries] = useOutletContext();
  const countries = useContext(CountriesContext);
  const [country, setCountry] = useState();
  let countryData = getCountryDataInfo(country);
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

  // window.scrollTo(0, 0);

  return (
    <div className="w-[90%] max-w-md lg:max-w-6xl mx-auto capitalize py-14 relative">
      <BackBtn setIsLoading={setIsLoading} />
      <div className="grid justify-center lg:gap-5 lg:grid-cols-2 lg:justify-between mx-auto lg:text-left">
        <CountryImage flag={countryData.flag} countryName={countryName} />
        <div className=" grid lg:grid-cols-2 grid-rows-[2.6em] gap-x-5">
          <CountryTitle
            name={countryData.name}
            coatOfArms={countryData.coatOfArms}
          />
          <CountryInfo labels={labels1} countryData={countryData} />
          <CountryInfo labels={labels2} countryData={countryData} />
          <BorderCountries
            countries={countries}
            currentCountry={country}
            borderSigns={countryData["border countries"]}
          />
        </div>
      </div>
      {/* {country ? <LeafeletMap latlng={country.latlng} /> : ""} */}
      <Loading isLoading={isLoading} />
    </div>
  );
}

export default memo(CountryPage);

import FilterDataContext from "@/utils/contexts/FilterDataContext";
import React, { useContext } from "react";
import CountryName from "./CountryName";

function CountryElement(props) {
  const { country } = props;
  const { searchFilter, regionIndex, dropDownContent } =
    useContext(FilterDataContext);
  let isHidden = false;
  const searchReg = new RegExp(searchFilter, "i");

  if (regionIndex != null && country.region != dropDownContent[regionIndex]) {
    isHidden = true;
  }

  if (searchFilter != "" && !searchReg.test(country.name.common)) {
    isHidden = true;
  }

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
    <div
      className={`max-w-xs w-full bg-White dark:bg-DarkBlue overflow-hidden rounded-md 
    capitalize drop-shadow-xl shadow-DarkBlue ${isHidden ? "hidden" : ""}`}
    >
      <div className="h-[12rem] relative">
        <img
          className="h-full w-full absolute object-cover object-center"
          src={country.flags.svg}
          alt="country flag"
        />
      </div>
      <div className="p-6">
        <CountryName searchFilter={searchFilter} country={country} />
        {infos.map((inf, infoIdx) => {
          return (
            <div key={infoIdx} className="flex gap-2">
              <span className="dark:text-White">{inf.label} : </span>
              <span className="dark:text-VeryLightGray font-light">
                {inf.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CountryElement;

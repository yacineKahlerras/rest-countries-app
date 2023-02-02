import FilterDataContext from "@/utils/contexts/FilterDataContext";
import baseUrl from "@/utils/data/baseUrl";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CountryName from "./CountryName";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Skeleton } from "@mui/material";

function CountryElement(props) {
  const { country, scrollPosition } = props;
  const { searchFilter, regionIndex, dropDownContent } =
    useContext(FilterDataContext);
  let isHidden = false;
  const searchReg = new RegExp(searchFilter, "i");
  const countryName = country.name.common.replace(/\s+/g, "_").toLowerCase();

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
    <Link
      to={`${baseUrl}${countryName}`}
      className={`w-full ${isHidden ? "hidden" : ""}`}
    >
      <div
        className={`max-w-xs w-full bg-White dark:bg-DarkBlue overflow-hidden rounded-md 
    capitalize drop-shadow-xl shadow-DarkBlue`}
      >
        <div className="h-[12rem] relative">
          <LazyLoadImage
            className="h-full w-full absolute object-cover object-center"
            src={country.flags.svg}
            scrollPosition={scrollPosition}
            placeholder={
              <Skeleton
                height="100%"
                sx={{ transform: "scale(1)" }}
                animation="wave"
              />
            }
            alt="country flag"
          />
        </div>
        <div className="p-6">
          <CountryName searchFilter={searchFilter} country={country} />
          {infos.map((inf, infoIdx) => {
            return (
              <div key={infoIdx} className="flex gap-2">
                <span className="dark:text-White">
                  {inf.label} :
                  <span className="dark:text-VeryLightGray font-light ml-1">
                    {inf.value}
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
}

export default CountryElement;

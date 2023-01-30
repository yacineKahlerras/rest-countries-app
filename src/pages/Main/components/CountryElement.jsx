import FilterDataContext from "@/utils/contexts/FilterDataContext";
import React, { useContext } from "react";

function CountryElement(props) {
  const { country } = props;
  const { searchFilter } = useContext(FilterDataContext);

  function NamePieces(str, match) {
    str = str.toLowerCase();
    match = match.toLowerCase();
    var pieces = [];
    var index,
      pos = 0;

    while ((index = str.indexOf(match, pos)) >= 0) {
      if (pos !== index) {
        pieces.push(str.substr(pos, index - pos));
      }
      pieces.push(match);
      pos = index + match.length;
    }
    if (pos < str.length) {
      pieces.push(str.substr(pos));
    }
    return pieces;
  }

  function CountryName() {
    return (
      <h2 className="font-bold text-lg mb-3">
        {searchFilter == ""
          ? country.name.common
          : NamePieces(country.name.common, searchFilter).map(
              (piece, index) => {
                if (piece == searchFilter)
                  return (
                    <span
                      key={index}
                      className="text-DarkGray underline font-extrabold"
                    >
                      {piece}
                    </span>
                  );
                return piece;
              }
            )}
      </h2>
    );
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
      className="max-w-xs w-full bg-White dark:bg-DarkBlue overflow-hidden rounded-md 
    capitalize drop-shadow-xl shadow-DarkBlue"
    >
      <div className="h-[12rem] relative">
        <img
          className="h-full w-full absolute object-cover object-center"
          src={country.flags.svg}
          alt="country flag"
        />
      </div>
      <div className="p-6">
        <CountryName />
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

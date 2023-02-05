import React from "react";

export default function CountryTitle(props) {
  const { countryData } = props;

  return (
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
  );
}

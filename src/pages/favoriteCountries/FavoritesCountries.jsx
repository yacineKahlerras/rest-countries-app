import FilterDataContext from "@/utils/contexts/FilterDataContext";
import React, { useContext } from "react";
import { useOutletContext } from "react-router-dom";
import CountryElement from "../Main/components/CountryElement";

export default function FavoriteCountries() {
  const { favoriteCountries } = useContext(FilterDataContext);
  const [countries] = useOutletContext();
  const favoriteCountriesMap = countries.filter(
    (country) => favoriteCountries[country.name.common]
  );

  return (
    <div className="grid justify-center justify-items-center gap-5 grid-cols-countriesMap mx-auto pb-14">
      {favoriteCountriesMap.map((favoriteCountry) => {
        favoriteCountry.isFavorite = true;
        return <CountryElement country={favoriteCountry} />;
      })}
    </div>
  );
}

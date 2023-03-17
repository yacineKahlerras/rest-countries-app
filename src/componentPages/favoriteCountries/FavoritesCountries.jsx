import CountriesContext from "@/utils/contexts/CountriesContext";
import FilterDataContext from "@/utils/contexts/FilterDataContext";
import { nanoid } from "nanoid";
import React, { useContext, useEffect } from "react";
import CountryElement from "../Main/components/CountryElement";
import FavoriteCountriesBackButton from "./components/FavoriteCountriesBackButton";

export default function FavoriteCountries() {
  const { favoriteCountries } = useContext(FilterDataContext);
  const countries = useContext(CountriesContext);
  if (!countries || !favoriteCountries) return;
  let favoriteCountriesMap = [];

  if (countries && favoriteCountries)
    favoriteCountriesMap = countries.filter(
      (country) => favoriteCountries[country.name.common]
    );

  return (
    <div className="py-12 max-w-7xl mx-auto">
      <FavoriteCountriesBackButton />
      <h1 className="text-3xl font-bold mb-7 text-center">
        Favorite Countries
      </h1>
      <div className="grid justify-center justify-items-center gap-5 grid-cols-countriesMap mx-auto pb-14">
        {favoriteCountriesMap.map((favoriteCountry) => {
          favoriteCountry.isFavorite = true;
          return <CountryElement key={nanoid()} country={favoriteCountry} />;
        })}
      </div>
    </div>
  );
}

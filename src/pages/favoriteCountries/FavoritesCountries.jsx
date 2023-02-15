import FilterDataContext from "@/utils/contexts/FilterDataContext";
import React, { useContext } from "react";
import { useOutletContext } from "react-router-dom";

export default function FavoriteCountries() {
  const { favoriteCountries } = useContext(FilterDataContext);
  const [countries] = useOutletContext();

  console.log(favoriteCountries);

  return <h1>Heyoooooooo</h1>;
}

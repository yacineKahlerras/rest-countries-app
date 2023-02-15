import FilterDataContext from "@/utils/contexts/FilterDataContext";
import { nanoid } from "nanoid";
import React, { lazy, useContext } from "react";
const CountryElement = lazy(() => import("../components/CountryElement"));

// gets the list of elements to show
export default function ShowCountry(props) {
  const { infiniteScrollList } = props;
  const { favoriteCountries } = useContext(FilterDataContext);

  var items = [];
  for (var i = 0; i < infiniteScrollList.length; i++) {
    if (
      favoriteCountries &&
      favoriteCountries[infiniteScrollList[i].name.common]
    ) {
      infiniteScrollList[i] = { ...infiniteScrollList[i], isFavorite: true };
    } else {
      infiniteScrollList[i] = { ...infiniteScrollList[i], isFavorite: false };
    }
    items.push(
      <CountryElement key={nanoid()} country={infiniteScrollList[i]} />
    );
  }
  return items;
}

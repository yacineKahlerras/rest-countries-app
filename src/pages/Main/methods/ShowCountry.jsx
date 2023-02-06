import { nanoid } from "nanoid";
import React, { lazy } from "react";
const CountryElement = lazy(() => import("../components/CountryElement"));

export default function ShowCountry(props) {
  const { tempCountries } = props;

  var items = [];
  for (var i = 0; i < tempCountries.length; i++) {
    items.push(<CountryElement key={nanoid()} country={tempCountries[i]} />);
  }
  return items;
}

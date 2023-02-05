import { lazy } from "react";
const CountryElement = lazy(() => import("./CountryElement"));

const showCountry = (tempCountries) => {
  var items = [];
  for (var i = 0; i < tempCountries.length; i++) {
    items.push(<CountryElement key={nanoid()} country={tempCountries[i]} />);
  }
  return items;
};

export default showCountry;

import { nanoid } from "nanoid";
import React, { lazy } from "react";
const CountryElement = lazy(() => import("../components/CountryElement"));

// gets the list of elements to show
export default function ShowCountry(props) {
  const { infiniteScrollList } = props;

  var items = [];
  for (var i = 0; i < infiniteScrollList.length; i++) {
    items.push(
      <CountryElement key={nanoid()} country={infiniteScrollList[i]} />
    );
  }
  return items;
}

import React, { lazy, Suspense } from "react";
const CountryElement = lazy(() => import("./CountryElement"));
import { trackWindowScroll } from "react-lazy-load-image-component";

function CountriesMap(props) {
  const { countriesList, scrollPosition } = props;

  return (
    <div
      className="grid justify-center justify-items-center gap-5 grid-cols-countriesMap 
       mx-auto pb-14"
    >
      {countriesList.map((country, countryIdx) => {
        return (
          <Suspense key={countryIdx} fallback={<h1>getting country..</h1>}>
            <CountryElement scrollPosition={scrollPosition} country={country} />
          </Suspense>
        );
      })}
    </div>
  );
}

export default trackWindowScroll(CountriesMap);

import React, { lazy, Suspense } from "react";
const CountryElement = lazy(() => import("./CountryElement"));

function CountriesMap(props) {
  const { countriesList } = props;

  return (
    <div
      className="grid justify-center justify-items-center gap-5 grid-cols-countriesMap 
       mx-auto pb-14"
    >
      {countriesList.map((country, countryIdx) => {
        return (
          <Suspense key={countryIdx} fallback={<h1>getting country..</h1>}>
            <CountryElement country={country} />
          </Suspense>
        );
      })}
    </div>
  );
}

export default CountriesMap;

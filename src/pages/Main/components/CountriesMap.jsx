import React, { lazy, Suspense } from "react";
const CountryElement = lazy(() => import("./CountryElement"));
import { trackWindowScroll } from "react-lazy-load-image-component";
import { Oval } from "react-loader-spinner";

function CountriesMap(props) {
  const { countriesList, scrollPosition } = props;

  return (
    <div
      className="grid justify-center justify-items-center gap-5 grid-cols-countriesMap 
       mx-auto pb-14"
    >
      {countriesList.map((country, countryIdx) => {
        return (
          <Suspense
            key={countryIdx}
            fallback={
              <Oval
                height={80}
                width={80}
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            }
          >
            <CountryElement scrollPosition={scrollPosition} country={country} />
          </Suspense>
        );
      })}
    </div>
  );
}

export default trackWindowScroll(CountriesMap);

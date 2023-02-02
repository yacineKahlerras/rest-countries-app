import React, { lazy, memo, Suspense } from "react";
const CountryElement = lazy(() => import("./CountryElement"));
import {
  LazyLoadComponent,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import { Oval } from "react-loader-spinner";

function CountriesMap(props) {
  const { countriesList, scrollPosition } = props;

  // loading elements while in suspence
  const loading = (
    <div className=" p-12 ">
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
    </div>
  );

  return (
    <div
      className="grid justify-center justify-items-center gap-5 grid-cols-countriesMap 
       mx-auto pb-14"
    >
      {countriesList.map((country, countryIdx) => {
        return (
          <LazyLoadComponent key={country.name.common}>
            <Suspense fallback={loading}>
              <CountryElement
                scrollPosition={scrollPosition}
                country={country}
              />
            </Suspense>
          </LazyLoadComponent>
        );
      })}
    </div>
  );
}

// export default trackWindowScroll(CountriesMap);
export default memo(trackWindowScroll(CountriesMap));

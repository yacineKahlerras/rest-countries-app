import React, { lazy, memo, Suspense } from "react";
const CountryElement = lazy(() => import("./CountryElement"));
import { trackWindowScroll } from "react-lazy-load-image-component";
import { Oval } from "react-loader-spinner";
import { FixedSizeList as List } from "react-window";

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
      <List width={1400} height={700} itemCount={250} itemSize={120}>
        {countriesList.map((country, countryIdx) => {
          return (
            <Suspense key={country.name.common} fallback={loading}>
              <CountryElement
                scrollPosition={scrollPosition}
                country={country}
              />
            </Suspense>
          );
        })}
      </List>
    </div>
  );
}

// export default trackWindowScroll(CountriesMap);
export default memo(trackWindowScroll(CountriesMap));

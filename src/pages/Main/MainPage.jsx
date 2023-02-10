import React, { Suspense, lazy, useEffect, useContext } from "react";
import DropDown from "./components/DropDown";
import SearchInput from "./components/SearchInput";
import { useOutletContext, useSearchParams } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import FilterDataContext from "@/utils/contexts/FilterDataContext";
const CountriesMap = lazy(() => import("./components/CountriesMap"));

function MainPage() {
  const [countries] = useOutletContext();
  const { regionIndex, searchFilter } = useContext(FilterDataContext);
  let [_, setSearchParams] = useSearchParams();

  // sets the url search params based on region and search filters
  useEffect(() => {
    setSearchParams((prev) => {
      if (searchFilter) {
        prev.set("search", searchFilter);
      } else prev.delete("search");
      if (regionIndex != undefined) {
        prev.set("region", regionIndex);
      } else prev.delete("region");
      return prev;
    });
  }, []);

  return (
    <div className="pt-8 px-5 max-w-7xl mx-auto">
      <div className="sm:flex justify-between mb-5 items-center">
        <SearchInput />
        <DropDown />
      </div>
      <Suspense
        fallback={
          <div className="w-full flex justify-center mt-24">
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
        }
      >
        {countries ? <CountriesMap countriesList={countries} /> : ""}
      </Suspense>
    </div>
  );
}

export default MainPage;

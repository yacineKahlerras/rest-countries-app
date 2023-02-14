import React, { Suspense, lazy, useEffect, useContext } from "react";
import DropDown from "./components/DropDown";
import SearchInput from "./components/SearchInput";
import { useOutletContext, useSearchParams } from "react-router-dom";
import FilterDataContext from "@/utils/contexts/FilterDataContext";
import MainSuspenceLoading from "./components/MainSuspenceLoading";
const CountriesMap = lazy(() => import("./components/CountriesMap"));

/**
 * each time the user changes and its nit null
 * get data document using the user id
 * extract the country names array
 * pass on the 'liked' bool to the country elements
 * for each country element display empty or full heart based on the liked bool
 */

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
      <Suspense fallback={<MainSuspenceLoading />}>
        {countries ? <CountriesMap countriesList={countries} /> : ""}
      </Suspense>
    </div>
  );
}

export default MainPage;

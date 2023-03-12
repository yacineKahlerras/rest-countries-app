import React, { Suspense, lazy, useEffect, useContext } from "react";
import DropDown from "./components/DropDown";
import SearchInput from "./components/SearchInput";
import MainSuspenceLoading from "./components/MainSuspenceLoading";
import CountriesContext from "@/utils/contexts/CountriesContext";
const CountriesMap = lazy(() => import("./components/CountriesMap"));

function MainPage() {
  const countries = useContext(CountriesContext);

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

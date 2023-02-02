import React, { useState, Suspense, lazy } from "react";
import DropDown from "./components/DropDown";
import SearchInput from "./components/SearchInput";
import FilterDataContext from "@/utils/contexts/FilterDataContext";
import { useOutletContext } from "react-router-dom";
import { Oval } from "react-loader-spinner";
const CountriesMap = lazy(() => import("./components/CountriesMap"));

function MainPage() {
  const [countries] = useOutletContext();
  const [regionIndex, setRegionIndex] = useState();
  const [searchFilter, setSearchFilter] = useState("");
  const dropDownContent = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const filterData = {
    regionIndex,
    setRegionIndex,
    dropDownContent,
    searchFilter,
    setSearchFilter,
  };

  return (
    <FilterDataContext.Provider value={filterData}>
      <div className="pt-8 px-5 max-w-7xl mx-auto">
        <div className="sm:flex justify-between mb-5 items-center">
          <SearchInput />
          <DropDown
            regionIndex={regionIndex}
            setRegionIndex={setRegionIndex}
            dropDownContent={dropDownContent}
          />
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
    </FilterDataContext.Provider>
  );
}

export default MainPage;

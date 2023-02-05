import React, { memo, useState, useEffect, useContext } from "react";
import InfiniteScroll from "react-infinite-scroller";
import FilterDataContext from "@/utils/contexts/FilterDataContext";
import loading from "./Loading";
import countriesFilter from "../methods/countriesFilter";
import loadCountries from "../methods/loadCountries";
import showCountry from "../methods/showCountry";

function CountriesMap(props) {
  const { countriesList } = props;
  const { searchFilter, regionIndex, dropDownContent } =
    useContext(FilterDataContext);
  const [smallCountryList, setSmallCountryList] = useState(
    countriesFilter(countriesList, regionIndex, dropDownContent, searchFilter)
  );

  const itemsPerPage = 20;
  const [tempCountries, setTempCountries] = useState(
    smallCountryList.slice(0, itemsPerPage)
  );
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setHasMore(true);
    setSmallCountryList(() =>
      countriesFilter(countriesList, regionIndex, dropDownContent, searchFilter)
    );
  }, [searchFilter, regionIndex]);

  useEffect(() => {
    setTempCountries(smallCountryList.slice(0, itemsPerPage));
  }, [smallCountryList]);

  function countriesLoader() {
    loadCountries(
      tempCountries,
      setTempCountries,
      smallCountryList,
      setHasMore,
      itemsPerPage
    );
  }

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={countriesLoader}
      hasMore={hasMore}
      loader={loading}
      className="grid justify-center justify-items-center gap-5 grid-cols-countriesMap mx-auto pb-14"
    >
      {showCountry(tempCountries)}
    </InfiniteScroll>
  );
}

export default memo(CountriesMap);

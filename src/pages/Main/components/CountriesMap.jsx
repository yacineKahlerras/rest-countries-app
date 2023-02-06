import React, { memo, useState, useEffect, useContext } from "react";
import InfiniteScroll from "react-infinite-scroller";
import FilterDataContext from "@/utils/contexts/FilterDataContext";
import Loading from "./Loading";
import countriesFilter from "../methods/countriesFilter";
import loadCountries from "../methods/loadCountries";
import { nanoid } from "nanoid";
import ShowCountry from "../methods/ShowCountry";

function CountriesMap(props) {
  const { countriesList } = props;
  const { searchFilter, regionIndex, dropDownContent } =
    useContext(FilterDataContext);
  const [smallCountryList, setSmallCountryList] = useState(countriesList);

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
      loader={<Loading key={nanoid()} />}
      threshold={500}
      className="grid justify-center justify-items-center gap-5 grid-cols-countriesMap mx-auto pb-14"
    >
      <ShowCountry tempCountries={tempCountries} />
    </InfiniteScroll>
  );
}

export default memo(CountriesMap);

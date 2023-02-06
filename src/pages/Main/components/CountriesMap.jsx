import React, { memo, useState, useEffect, useContext } from "react";
import InfiniteScroll from "react-infinite-scroller";
import FilterDataContext from "@/utils/contexts/FilterDataContext";
import Loading from "./Loading";
import countriesFilter from "../methods/countriesFilter";
import loadCountries from "../methods/loadCountries";
import CountryElement from "./CountryElement";
import { nanoid } from "nanoid";
// import showCountry from "../methods/showCountry";

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

  const showCountry = (tempCountries) => {
    var items = [];
    for (var i = 0; i < tempCountries.length; i++) {
      items.push(<CountryElement key={nanoid()} country={tempCountries[i]} />);
    }
    return items;
  };

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={countriesLoader}
      hasMore={hasMore}
      loader={<Loading key={nanoid()} />}
      threshold={500}
      className="grid justify-center justify-items-center gap-5 grid-cols-countriesMap mx-auto pb-14"
    >
      {showCountry(tempCountries)}
    </InfiniteScroll>
  );
}

export default memo(CountriesMap);

import React, { memo, useState, useEffect, useContext, useRef } from "react";
import InfiniteScroll from "react-infinite-scroller";
import FilterDataContext from "@/utils/contexts/FilterDataContext";
import Loading from "./Loading";
import countriesFilter from "../methods/countriesFilter";
import loadCountries from "../methods/loadCountries";
import { nanoid } from "nanoid";
import ShowCountry from "../methods/ShowCountry";
import updateUserFavorites from "@/firebase/firestore/updateUserFavorites";
import getUserData from "@/firebase/firestore/getUserData";

function CountriesMap(props) {
  const { countriesList } = props;
  const { searchFilter, regionIndex, dropDownContent, user } =
    useContext(FilterDataContext);
  const [filteredCountryList, setFilteredCountryList] = useState(countriesList);
  const itemsPerPage = 20;
  const [infiniteScrollList, setInfiniteScrollList] = useState(
    filteredCountryList.slice(0, itemsPerPage)
  );
  const [hasMore, setHasMore] = useState(true); // if there is more countries to show in infinite scroll
  const userRef = useRef(null);
  const [favoriteCountries, setFavoriteCountries] = useState(null);

  useEffect(() => {
    setHasMore(true);
    setFilteredCountryList(() =>
      countriesFilter(countriesList, regionIndex, dropDownContent, searchFilter)
    );
  }, [searchFilter, regionIndex]);

  useEffect(() => {
    if (filteredCountryList.length > itemsPerPage)
      setInfiniteScrollList(filteredCountryList.slice(0, itemsPerPage));
    else {
      setInfiniteScrollList(filteredCountryList);
    }
  }, [filteredCountryList]);

  // updates the infiniteScrollList to show more items
  function countriesLoader() {
    loadCountries(
      infiniteScrollList,
      setInfiniteScrollList,
      filteredCountryList,
      setHasMore,
      itemsPerPage
    );
  }

  // getting user data
  useEffect(() => {
    if (user && (!userRef.current || userRef.current.uid != user.uid)) {
      userRef.current = user;
      // updateUserFavorites(user.uid, "Benin", true);
      getUserData(user.uid, setFavoriteCountries);
    }
  }, [user]);

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={countriesLoader}
      hasMore={hasMore}
      loader={<Loading key={nanoid()} />}
      threshold={500}
      className="grid justify-center justify-items-center gap-5 grid-cols-countriesMap mx-auto pb-14"
    >
      <ShowCountry
        infiniteScrollList={infiniteScrollList}
        favoriteCountries={favoriteCountries}
      />
    </InfiniteScroll>
  );
}

export default memo(CountriesMap);

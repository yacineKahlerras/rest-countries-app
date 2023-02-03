import React, { lazy, memo, useState, useEffect, useContext } from "react";
const CountryElement = lazy(() => import("./CountryElement"));
import InfiniteScroll from "react-infinite-scroller";
import { nanoid } from "nanoid";
import FilterDataContext from "@/utils/contexts/FilterDataContext";
import { Oval } from "react-loader-spinner";

function CountriesMap(props) {
  const { countriesList } = props;
  const { searchFilter, regionIndex, dropDownContent } =
    useContext(FilterDataContext);
  const searchReg = new RegExp(searchFilter, "i");
  const [smallCountryList, setSmallCountryList] = useState(
    countriesList.filter((contr) => {
      let pass = true;
      if (regionIndex != null && contr.region != dropDownContent[regionIndex]) {
        pass = false;
      }
      if (searchFilter != "" && !searchReg.test(contr.name.common)) {
        pass = false;
      }
      return pass;
    })
  );
  const itemsPerPage = 20;
  const [tempCountries, setTempCountries] = useState(
    smallCountryList.slice(0, itemsPerPage)
  );
  const [hasMore, setHasMore] = useState(true);

  // loading elements while in suspence
  const loading = (
    <div key={nanoid()} className=" p-12 ">
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

  useEffect(() => {
    setHasMore(true);
    setSmallCountryList(() =>
      countriesList.filter((contr) => {
        let pass = true;
        if (
          regionIndex != null &&
          contr.region != dropDownContent[regionIndex]
        ) {
          pass = false;
        }
        if (searchFilter != "" && !searchReg.test(contr.name.common)) {
          pass = false;
        }
        return pass;
      })
    );
  }, [searchFilter, regionIndex]);

  useEffect(() => {
    setTempCountries(smallCountryList.slice(0, itemsPerPage));
  }, [smallCountryList]);

  const showCountry = (tempCountries) => {
    var items = [];
    for (var i = 0; i < tempCountries.length; i++) {
      items.push(<CountryElement key={nanoid()} country={tempCountries[i]} />);
    }
    return items;
  };

  const loadCountries = () => {
    if (tempCountries.length === smallCountryList.length) {
      setHasMore(false);
    } else {
      const passedLimit =
        tempCountries.length + itemsPerPage >= smallCountryList;

      if (!passedLimit) {
        setTempCountries(
          tempCountries.concat(
            smallCountryList.slice(
              tempCountries.length,
              tempCountries.length + itemsPerPage
            )
          )
        );
      } else {
        setTempCountries(
          tempCountries.concat(smallCountryList.slice(tempCountries.length))
        );
      }
    }
  };

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadCountries}
      hasMore={hasMore}
      loader={loading}
      className="grid justify-center justify-items-center gap-5 grid-cols-countriesMap mx-auto pb-14"
    >
      {showCountry(tempCountries)}
    </InfiniteScroll>
  );
}

export default memo(CountriesMap);

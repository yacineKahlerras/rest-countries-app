import FilterDataContext from "@/utils/contexts/FilterDataContext";
import React, { useContext } from "react";
import namePieces from "../methods/namePieces";

function CountryName(props) {
  const { country } = props;
  const { searchFilter } = useContext(FilterDataContext);

  return (
    <h2 className="font-bold text-lg mb-3">
      {searchFilter == ""
        ? country.name.common
        : namePieces(country.name.common, searchFilter).map((piece, index) => {
            if (piece == searchFilter)
              return (
                <b
                  key={index}
                  className="text-DarkGray underline font-extrabold"
                >
                  {piece}
                </b>
              );
            return piece;
          })}
    </h2>
  );
}

export default CountryName;

import FilterDataContext from "@/utils/contexts/FilterDataContext";
import React, { useContext } from "react";

function CountryName(props) {
  const { country } = props;
  const { searchFilter } = useContext(FilterDataContext);

  // this is needed for highlighting the parts of the
  // country name that matches with the search
  function NamePieces(str, match) {
    str = str.toLowerCase();
    match = match.toLowerCase();
    var pieces = [];
    var index,
      pos = 0;

    while ((index = str.indexOf(match, pos)) >= 0) {
      if (pos !== index) {
        pieces.push(str.substr(pos, index - pos));
      }
      pieces.push(match);
      pos = index + match.length;
    }
    if (pos < str.length) {
      pieces.push(str.substr(pos));
    }
    return pieces;
  }

  return (
    <h2 className="font-bold text-lg mb-3">
      {searchFilter == ""
        ? country.name.common
        : NamePieces(country.name.common, searchFilter).map((piece, index) => {
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

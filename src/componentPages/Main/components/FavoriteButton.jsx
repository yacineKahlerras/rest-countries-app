import React, { memo, useContext } from "react";
import heartFull from "@/assets/images/favorite/heart-fill.svg";
import heartEmpty from "@/assets/images/favorite/heart.svg";
import updateUserFavorites from "@/firebase/firestore/updateUserFavorites";
import FilterDataContext from "@/utils/contexts/FilterDataContext";
import Image from "next/image";

function FavoriteButton(props) {
  const { user, country } = props;
  const countryName = country.name.common;
  const { setFavoriteCountries, favoriteCountries } =
    useContext(FilterDataContext);
  const isFavorite =
    favoriteCountries && favoriteCountries[country.name.common];

  async function clickHandle() {
    setFavoriteCountries((prev) => ({
      ...prev,
      [countryName]: !isFavorite,
    }));
    await updateUserFavorites(user.uid, countryName, !isFavorite);
  }

  return user ? (
    <button
      onClick={clickHandle}
      className="min-w-[1.5em] absolute bottom-5 right-7"
    >
      <Image
        className="dark:invert w-full"
        src={isFavorite ? heartFull : heartEmpty}
        alt="favorite icon"
      />
    </button>
  ) : (
    ""
  );
}

export default memo(FavoriteButton);

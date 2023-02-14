import React, { useState } from "react";
import heartFull from "@/assets/images/favorite/heart-fill.svg";
import heartEmpty from "@/assets/images/favorite/heart.svg";
import updateUserFavorites from "@/firebase/firestore/updateUserFavorites";

export default function FavoriteButton(props) {
  const { user, isFavorite, country } = props;
  const [isFavoriteCountry, setIsFavoriteCountry] = useState(isFavorite);

  function clickHandle() {
    updateUserFavorites(user.uid, country.name.common, !isFavoriteCountry);
    setIsFavoriteCountry(!isFavoriteCountry);
  }

  return user ? (
    <button
      onClick={clickHandle}
      className="min-w-[1.5em] absolute bottom-5 right-7"
    >
      <img
        className="dark:invert w-full"
        src={isFavoriteCountry ? heartFull : heartEmpty}
        alt="favorite icon"
      />
    </button>
  ) : (
    ""
  );
}

import React, { memo, useEffect, useRef, useState } from "react";
import heartFull from "@/assets/images/favorite/heart-fill.svg";
import heartEmpty from "@/assets/images/favorite/heart.svg";
import updateUserFavorites from "@/firebase/firestore/updateUserFavorites";

function FavoriteButton(props) {
  const { user, country } = props;
  const { isFavorite } = country;
  const [isFavoriteCountry, setIsFavoriteCountry] = useState(isFavorite);

  async function clickHandle() {
    setIsFavoriteCountry(!isFavoriteCountry);
    await updateUserFavorites(
      user.uid,
      country.name.common,
      !isFavoriteCountry
    );
  }

  useEffect(() => {
    if (country.name.common == "United Arab Emirates") {
      console.log(isFavoriteCountry, isFavorite);
    }
  }, [isFavoriteCountry]);

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

export default memo(FavoriteButton);

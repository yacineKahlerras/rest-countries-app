import React from "react";
import heartFull from "@/assets/images/favorite/heart-fill.svg";
import heartEmpty from "@/assets/images/favorite/heart.svg";

export default function FavoriteButton(props) {
  const { user, isFavorite } = props;

  return user ? (
    <button className="min-w-[1.5em] absolute bottom-5 right-7">
      <img
        className="dark:invert w-full"
        src={isFavorite ? heartFull : heartEmpty}
        alt="favorite icon"
      />
    </button>
  ) : (
    ""
  );
}

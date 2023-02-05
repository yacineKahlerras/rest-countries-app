import React from "react";
import backIcon from "@/assets/images/buttons/arrow-left.svg";

export default function BackBtn(props) {
  const { BackPage } = props;

  return (
    <button
      className="bg-White dark:bg-DarkBlue p-[.3em] px-[1.2em] rounded-sm mb-9 flex gap-2 
    items-center text-sm drop-shadow-md "
      onClick={BackPage}
    >
      <img className="dark:invert" src={backIcon} alt="back button" />
      Back
    </button>
  );
}

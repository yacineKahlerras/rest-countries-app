import React from "react";
import backIcon from "@/assets/images/buttons/arrow-left.svg";
import Image from "next/image";
import { useRouter } from "next/router";

export default function BackBtn(props) {
  const router = useRouter();

  function BackPage() {
    router.back();
  }

  return (
    <button
      className="bg-White dark:bg-DarkBlue p-[.3em] px-[1.2em] rounded-sm mb-9 flex gap-2 
    items-center text-sm drop-shadow-md "
      onClick={BackPage}
    >
      <Image className="dark:invert" src={backIcon} alt="back button" />
      Back
    </button>
  );
}

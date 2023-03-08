import React, { useState } from "react";
import backIcon from "@/assets/images/buttons/arrow-left.svg";
import baseUrl from "@/utils/data/baseUrl";

export default function BackBtn(props) {
  // const { setIsLoading } = props;
  // const location = useLocation();
  // const [firstPath] = useState(location.pathname);
  // const navigate = useNavigate();
  // const isFirstPage = firstPath == location.pathname;

  // function BackPage() {
  //   window.scrollTo(0, 0);
  //   setIsLoading(true);
  //   if (!isFirstPage) navigate(-1);
  //   else navigate(baseUrl);
  // }

  return;
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

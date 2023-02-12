import React, { useContext, useState } from "react";
import signIn from "@/firebase/googleSignInRedirect";
import NavBarData from "@/utils/contexts/DarkThemeContext";
import { Oval } from "react-loader-spinner";
import SignOut from "@/firebase/googleSignOut";

export default function NavSignIn() {
  const { isLoadingUser, user } = useContext(NavBarData);
  const [dropDownActive, setDropdownActive] = useState(false);
  const loadingSize = 20;
  const loadingStrokeWidth = 8;

  const signInButton = <button onClick={signIn}>Sign In</button>;

  const loadingAnimation = (
    <Oval
      height={loadingSize}
      width={loadingSize}
      color="#4fa94d"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#4fa94d"
      strokeWidth={loadingStrokeWidth}
      strokeWidthSecondary={loadingStrokeWidth}
    />
  );

  const profileDropDown = (
    <div>
      <ul
        className={`absolute top-[125%] right-0 bg-VeryLightGray dark:bg-VeryDarkBlue drop-shadow-lg
    p-3 px-5 whitespace-nowrap rounded-md flex flex-col gap-1 ${
      dropDownActive ? "" : "hidden"
    }`}
      >
        <li>Profile</li>
        <li onClick={SignOut}>Sign Out</li>
      </ul>
    </div>
  );

  const userProfileElement = (
    <div className="grid place-items-center">
      <button className="w-8 relative" onClick={toggleProfileDropdown}>
        <img
          src={user ? user.photoURL : ""}
          alt="profile photo"
          className="aspect-square rounded-full"
        />
        {profileDropDown}
      </button>
      <div
        className={` fixed w-full h-screen top-0 left-0 -z-10 ${
          dropDownActive ? "" : "hidden"
        } `}
        onClick={toggleProfileDropdown}
      ></div>
    </div>
  );

  function toggleProfileDropdown() {
    setDropdownActive((prev) => !prev);
  }

  return (
    <div className="relative">
      {isLoadingUser
        ? loadingAnimation
        : user
        ? userProfileElement
        : signInButton}
    </div>
  );
}

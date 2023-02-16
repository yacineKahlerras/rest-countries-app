import React, { useContext, useState } from "react";
import NavBarData from "@/utils/contexts/DarkThemeContext";
import NavProfile from "@/components/Nav/components/NavProfile";
import NavLoading from "@/components/Nav/components/NavLoading";
import SignInButton from "@/components/Nav/components/SignInButton";
import { Link } from "react-router-dom";
import baseUrl from "@/utils/data/baseUrl";
import SignOut from "@/firebase/googleSignOut";

export default function NavSignInSidemenu() {
  const { isLoadingUser, user } = useContext(NavBarData);

  const signInButton = <SignInButton />;

  const loadingAnimation = <NavLoading />;

  const userProfileElement = (
    <ul className={`px-6 whitespace-nowrap flex flex-col items-start gap-4 `}>
      <li>
        <Link to={`${baseUrl}Favorites`}>Favorites</Link>
      </li>
      <button onClick={SignOut}>Sign Out</button>
    </ul>
  );

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

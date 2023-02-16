import React, { useContext, useState } from "react";
import NavBarData from "@/utils/contexts/DarkThemeContext";
import NavProfile from "./NavProfile";
import NavLoading from "./NavLoading";
import SignInButton from "./SignInButton";

export default function NavSignInSidemenu() {
  const { isLoadingUser, user } = useContext(NavBarData);
  const [dropDownActive, setDropdownActive] = useState(false);

  const signInButton = <SignInButton />;

  const loadingAnimation = <NavLoading />;

  const userProfileElement = (
    <NavProfile
      user={user}
      toggleProfileDropdown={toggleProfileDropdown}
      dropDownActive={dropDownActive}
    />
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

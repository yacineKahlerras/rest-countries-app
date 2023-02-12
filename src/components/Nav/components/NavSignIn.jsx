import React, { useContext } from "react";
import signIn from "@/firebase/googleSignInRedirect";
import NavBarData from "@/utils/contexts/DarkThemeContext";
import { Oval } from "react-loader-spinner";
import SignOut from "@/firebase/googleSignOut";

export default function NavSignIn() {
  const { isLoadingUser, user } = useContext(NavBarData);
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

  const userProfileElement = (
    <div className="w-8">
      <img
        src={user ? user.photoURL : ""}
        alt="profile photo"
        className="aspect-square rounded-full"
      />
    </div>
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

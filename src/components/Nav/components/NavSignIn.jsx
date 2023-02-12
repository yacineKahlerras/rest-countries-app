import React, { useContext } from "react";
import signIn from "@/firebase/googleSignInRedirect";
import NavBarData from "@/utils/contexts/DarkThemeContext";
import { Oval } from "react-loader-spinner";

export default function NavSignIn() {
  const { isLoadingUser, user } = useContext(NavBarData);
  const loadingSize = 20;
  const loadingStrokeWidth = 8;

  console.log(user.photoURL);

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
    <div>
      <img src="" alt="" />
    </div>
  );

  return (
    <div className="relative">
      {isLoadingUser ? loadingAnimation : signInButton}
    </div>
  );
}

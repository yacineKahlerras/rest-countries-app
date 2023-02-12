import React, { useContext } from "react";
import signIn from "@/firebase/googleSignInRedirect";
import NavBarData from "@/utils/contexts/DarkThemeContext";

export default function NavSignIn() {
  const { isLoadingUser, user } = useContext(NavBarData);

  return (
    <div>
      <button onClick={signIn}>Sign In</button>
    </div>
  );
}

import React, { useContext } from "react";
import NavBarData from "@/utils/contexts/DarkThemeContext";
import NavLoading from "@/components/Nav/components/NavLoading";
import SignInButton from "@/components/Nav/components/SignInButton";
import baseUrl from "@/utils/data/baseUrl";
import SignOut from "@/firebase/googleSignOut";

export default function NavSignInSidemenu(props) {
  const { isLoadingUser, user } = useContext(NavBarData);
  const { toggleSidemenu } = props;
  // const navigate = useNavigate();

  const signInButton = <SignInButton />;

  const loadingAnimation = <NavLoading />;

  function goFavorites() {
    toggleSidemenu();
    // navigate(`${baseUrl}Favorites`);
  }

  const userProfileElement = (
    <div className={`px-6 whitespace-nowrap flex flex-col items-start gap-4 `}>
      <button onClick={goFavorites}>Favorites</button>
      <button
        onClick={() => {
          SignOut();
          toggleSidemenu();
        }}
      >
        Sign Out
      </button>
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

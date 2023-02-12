import { getRedirectResult } from "firebase/auth";
import { auth } from "./auth";

export default function getRedirect(setUser, setIsLoadingUser) {
  setIsLoadingUser(true);
  getRedirectResult(auth)
    .then((result) => {
      const user = result.user;
      console.log(user.email);
      setUser(user);
      setIsLoadingUser(false);
    })
    .catch((error) => {
      console.log("error during redirect : ", error);
      setIsLoadingUser(false);
    });
}

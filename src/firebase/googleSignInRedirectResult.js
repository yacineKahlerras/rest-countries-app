import { getRedirectResult } from "firebase/auth";
import { auth } from "./auth";

export default function getRedirect(setUser, setIsLoadingUser) {
  setIsLoadingUser(true);
  getRedirectResult(auth)
    .then((result) => {
      const user = result.user;
      if (user) setUser(user);
      setIsLoadingUser(false);
    })
    .catch((error) => {
      setIsLoadingUser(false);
    });
}

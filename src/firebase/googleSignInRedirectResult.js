import { getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./auth";

export default function getRedirect(setUser) {
  getRedirectResult(auth)
    .then((result) => {
      const user = result.user;
      console.log(user.email);
      setUser(user);
    })
    .catch((error) => {
      console.log("error during redirect : ", error);
    });
}

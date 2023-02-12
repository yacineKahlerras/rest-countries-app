import { signOut } from "firebase/auth";
import { auth } from "./auth";

export default function SignOut() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
      console.log("An error happened when sign out");
    });
}

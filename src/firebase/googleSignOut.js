import { signOut } from "firebase/auth";
import { auth } from "./auth";

signOut(auth)
  .then(() => {
    console.log("Sign-out successful.");
    // Sign-out successful.
  })
  .catch((error) => {
    // An error happened.
    console.log("An error happened when sign out");
  });

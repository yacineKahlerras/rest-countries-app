import { signInWithRedirect } from "firebase/auth";
import { auth } from "./auth";
import { provider } from "./authGoogleProvider";

export default function signIn() {
  signInWithRedirect(auth, provider);
}

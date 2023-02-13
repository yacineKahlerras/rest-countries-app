import React from "react";
import signIn from "@/firebase/googleSignInRedirect";

export default function SignInButton() {
  return (
    <button
      className=" drop-shadow-md p-[.3em] px-[1.5em] bg-VeryLightGray dark:bg-VeryDarkBlue rounded-md "
      onClick={signIn}
    >
      Sign In
    </button>
  );
}

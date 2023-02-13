import React from "react";
import SignOut from "@/firebase/googleSignOut";

export default function NavProfile(props) {
  const { user, toggleProfileDropdown, dropDownActive } = props;
  const dropDownVisible = dropDownActive ? "" : "hidden";

  const profileDropDown = (
    <div>
      <ul
        className={`absolute top-[125%] right-0 bg-VeryLightGray dark:bg-VeryDarkBlue drop-shadow-lg
        p-3 px-5 whitespace-nowrap rounded-md flex flex-col gap-1 text-left ${dropDownVisible}`}
      >
        <li className="hover:font-medium">Profile</li>
        <li className="hover:font-medium" onClick={SignOut}>
          Sign Out
        </li>
      </ul>
    </div>
  );

  return (
    <div className="grid place-items-center">
      <button className="w-8 relative" onClick={toggleProfileDropdown}>
        <img
          src={user ? user.photoURL : ""}
          alt="profile photo"
          className="aspect-square rounded-full"
        />
        {profileDropDown}
      </button>
      <div
        className={` fixed w-full h-screen top-0 left-0 -z-10 ${
          dropDownActive ? "" : "hidden"
        } `}
        onClick={toggleProfileDropdown}
      ></div>
    </div>
  );
}

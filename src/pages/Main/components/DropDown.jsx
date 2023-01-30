import FilterDataContext from "@/utils/contexts/FilterDataContext";
import React, { useContext, useState } from "react";

function DropDown() {
  const { regionIndex, setRegionIndex, dropDownContent } =
    useContext(FilterDataContext);
  const [activeDropDown, setActiveDropDown] = useState(false);
  const dropDownText =
    regionIndex != null ? dropDownContent[regionIndex] : "Filter by region";

  function dropDownToggle() {
    setActiveDropDown((oldValue) => !oldValue);
  }

  function regionFilter(index) {
    setRegionIndex((oldValue) => {
      return oldValue == index ? null : index;
    });
    setActiveDropDown((oldValue) => !oldValue);
  }

  return (
    <div className="max-w-[12rem] relative mb-5">
      <button
        onClick={dropDownToggle}
        data-dropdown-toggle="dropdown"
        className="w-full text-VeryDarkBlue dark:text-White bg-White dark:bg-DarkBlue
        rounded-lg text-sm px-[1.25em] py-[.625em] text-center inline-flex items-center drop-shadow-md 
        justify-between relative"
        type="button"
      >
        {dropDownText}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div
        className={`z-10 w-full bg-White divide-y divide-gray-100 rounded-lg shadow 
        dark:bg-DarkBlue absolute top-[3em] ${activeDropDown ? "" : "hidden"}`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {dropDownContent.map((dropText, index) => {
            const activeStyle =
              regionIndex == index
                ? "bg-DarkGray bg-opacity-10 dark:bg-DarkGray dark:bg-opacity-20"
                : "";

            return (
              <li key={index}>
                <button
                  onClick={() => regionFilter(index)}
                  className={`text-left px-5 py-2 hover:bg-DarkGray hover:bg-opacity-10 
                  dark:hover:bg-gray-100 dark:hover:bg-opacity-20 dark:hover:bg-DarkGray cursor-pointer 
                  w-full transition-all ${activeStyle}`}
                >
                  {dropText}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default DropDown;

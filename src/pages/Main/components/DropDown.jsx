import React, { useRef } from "react";

function DropDown() {
  const dropDownRef = useRef();
  const dropDownContent = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  function dropDownToggle() {
    dropDownRef.current.classList.toggle("hidden");
  }

  return (
    <div className="max-w-[12rem] ">
      <button
        onClick={dropDownToggle}
        data-dropdown-toggle="dropdown"
        className="w-full text-VeryDarkBlue dark:text-White bg-White dark:bg-DarkBlue
        rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center drop-shadow-md justify-between"
        type="button"
      >
        Filter by region
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
        ref={dropDownRef}
        className="z-10 hidden bg-White divide-y divide-gray-100 rounded-lg shadow 
        dark:bg-DarkBlue relative top-1"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {dropDownContent.map((dropText, index) => {
            return (
              <li key={index}>
                <button
                  className="text-left px-5 py-2 hover:bg-DarkGray hover:bg-opacity-10 
                  dark:hover:bg-gray-100 dark:hover:bg-opacity-20 dark:hover:bg-DarkGray cursor-pointer 
                  w-full transition-all"
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

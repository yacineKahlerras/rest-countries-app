import React from "react";

function SearchInput() {
  return (
    <div
      className="flex items-center gap-3 p-3 px-5 w-full max-w-xs rounded-lg 
      dark:bg-DarkBlue drop-shadow-l text-DarkGray dark:text-VeryLightGray"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </svg>
      <input
        type="text"
        placeholder="Search for a country..."
        className="focus:outline-none bg-[transparent] grow dark:placeholder:text-VeryLightGray"
      />
    </div>
  );
}

export default SearchInput;

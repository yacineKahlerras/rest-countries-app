import React from "react";

function MainPage() {
  return (
    <div className="pt-8 px-5">
      <div className=" flex p-3 px-5 w-full max-w-xs rounded-lg dark:bg-DarkBlue drop-shadow-lg">
        <input
          type="text"
          placeholder="Search for a country"
          className="focus:outline-none bg-[transparent] grow"
        />
      </div>
    </div>
  );
}

export default MainPage;

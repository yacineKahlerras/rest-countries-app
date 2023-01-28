import React from "react";

function MainPage() {
  return (
    <div className="pt-8 px-5">
      <input
        type="text"
        placeholder="Search for a country"
        className="p-3 px-5 w-full max-w-xs rounded-lg dark:bg-DarkBlue drop-shadow-lg"
      />
    </div>
  );
}

export default MainPage;

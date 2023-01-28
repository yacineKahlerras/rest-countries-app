import React from "react";
import DropDown from "./components/DropDown";
import SearchInput from "./components/SearchInput";

function MainPage() {
  return (
    <div className="pt-8 px-5">
      <SearchInput />
      <DropDown />
    </div>
  );
}

export default MainPage;

import React from "react";
import { Triangle } from "react-loader-spinner";

export default function Loading(props) {
  let { isLoading } = props;
  isLoading = true;

  return (
    <div
      className={`w-full h-full absolute top-0 left-0 place-items-center bg-VeryDarkBlue
      ${isLoading ? "grid" : "hidden"}`}
    >
      <Triangle
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}

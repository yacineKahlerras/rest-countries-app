import React from "react";
import { Triangle, Oval } from "react-loader-spinner";

export default function Loading(props) {
  let { isLoading } = props;
  //   isLoading = true;

  return (
    <div
      className={`w-full h-full absolute top-0 left-0 place-items-center isolate 
      ${isLoading ? "grid" : "hidden"}`}
    >
      <div className="w-full h-full bg-VeryLightGray dark:bg-VeryDarkBlue absolute top-0 left-0 opacity-80 -z-10"></div>
      <Oval
        height={80}
        width={80}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
}

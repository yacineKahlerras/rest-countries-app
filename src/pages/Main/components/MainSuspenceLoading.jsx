import React from "react";
import { Oval } from "react-loader-spinner";

export default function MainSuspenceLoading() {
  return (
    <div className="w-full flex justify-center mt-24">
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

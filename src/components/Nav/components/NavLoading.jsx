import React from "react";
import { Oval } from "react-loader-spinner";

export default function NavLoading(props) {
  const loadingSize = 20;
  const loadingStrokeWidth = 8;

  return (
    <Oval
      height={loadingSize}
      width={loadingSize}
      color="#4fa94d"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#4fa94d"
      strokeWidth={loadingStrokeWidth}
      strokeWidthSecondary={loadingStrokeWidth}
    />
  );
}

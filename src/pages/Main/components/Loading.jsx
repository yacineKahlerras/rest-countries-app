import { nanoid } from "nanoid";
import React from "react";
import { Oval } from "react-loader-spinner";

// loading elements while in suspence
const loading = (
  <div key={nanoid()} className=" p-12 ">
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

export default loading;

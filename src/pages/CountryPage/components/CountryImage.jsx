import { Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function CountryImage(props) {
  const { flag } = props;
  const [imgLoaded, setImgLoaded] = useState(false);

  function onLoadHandle() {
    setImgLoaded(true);
  }

  useEffect(() => {
    setImgLoaded(false);
  }, [flag]);

  return (
    <div>
      <img
        src={flag}
        alt="country flag"
        onLoad={onLoadHandle}
        className={`mb-5 w-full max-h-60 max-w-md drop-shadow-lg ${
          imgLoaded ? " block " : "hidden"
        }`}
      />
      <Skeleton
        width="100%"
        height="100%"
        sx={{
          transform: "scale(1)",
          display: imgLoaded ? "none" : "block",
          minHeight: "15rem",
        }}
        animation="wave"
      />
    </div>
  );
}

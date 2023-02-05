import { Skeleton } from "@mui/material";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function CountryImage(props) {
  const { countryData } = props;

  return (
    <LazyLoadImage
      className="mb-5 w-full max-h-60 max-w-md drop-shadow-lg"
      src={countryData.flag}
      placeholder={
        <Skeleton
          width="100%"
          height="100%"
          sx={{
            transform: "scale(1)",
          }}
          animation="wave"
        />
      }
      alt="country flag"
    />
  );
}

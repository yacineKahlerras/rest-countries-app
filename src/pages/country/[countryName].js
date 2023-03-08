import CountryPage from "@/componentPages/CountryPage/CountryPage";
import React from "react";

export default function CountryPageLink(props) {
  const { countryName } = props;

  return <CountryPage countryPathName={countryName} />;
}

export async function getServerSideProps(context) {
  return {
    props: { countryName: context.params.countryName }, // will be passed to the page component as props
  };
}

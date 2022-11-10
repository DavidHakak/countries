import React from "react";
import CountryList from "../CountryList/CountryList";

function Main(props) {
  return (
    <div className="main">
      <CountryList countries={props.countries} />
    </div>
  );
}

export default Main;

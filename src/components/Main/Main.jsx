import React from "react";
import CountryList from "../CountryList/CountryList";
import "./Main.css";

function Main(props) {
  
  return (
    <ul className="main">
      <CountryList countries={props.countries} />
    </ul>
  );
}

export default Main;

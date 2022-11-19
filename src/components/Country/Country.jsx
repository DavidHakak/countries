import React from "react";
import "./Country.css";
function Country({oneCountry, setPopup, setCountryName }) {
  return (
    <div
      className="country"
      onClick={() => {
        setPopup(true);
        setCountryName(oneCountry.name.common);
      }}
    >
      <div className="flag">{oneCountry.flag}</div>
      <div className="mainDiv">
        <div className="common">
          {oneCountry.name.common}{" "}
          <div className="capital"> - {oneCountry.capital}</div>
        </div>

        <div className="continents">{oneCountry.continents}</div>
      </div>
    </div>
  );
}

export default Country;

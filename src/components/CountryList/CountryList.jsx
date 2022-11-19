import React from "react";

import Country from "../Country/Country";
import "./CountryList.css";

function CountryList({ countries, setCountryName, setPopup }) {
  return (
    <li className="countryList">
      {countries.map((oneCountry) => (
        <Country
        key={oneCountry.name.common}
          oneCountry={oneCountry}
          setPopup={setPopup}
          setCountryName={setCountryName}
        />
      ))}
    </li>
  );
}

export default CountryList;

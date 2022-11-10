import React from "react";
import Country from "../Country/Country";
import "./CountryList.css";

function CountryList(props) {
  return (
    <div className="countryList">
      {props.countries.map((oneCountry) => (
        <Country
          key={oneCountry.name.common}
          common={oneCountry.name.common}
          capital={oneCountry.capital}
          continents={oneCountry.continents[0]}
          flag={oneCountry.flag}
        />
      ))}
    </div>
  );
}

export default CountryList;

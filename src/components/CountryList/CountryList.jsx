import React, { useState } from "react";
import Popup from "../Popup/Popup";
import Country from "../Country/Country";
import "./CountryList.css";

function CountryList(props) {
  const [popup, setPopup] = useState(false);
  return (
    <div className="countryList">
      {props.countries.map((oneCountry, inx) => (
        <Country
          key={inx}
          countries={props.countries}
          common={oneCountry.name.common}
          capital={oneCountry.capital}
          continents={oneCountry.continents[0]}
          flag={oneCountry.flag}
          setPopup={setPopup}
        />
      ))}
      <Popup triger={popup} setPopup={setPopup} />
    </div>
  );
}

export default CountryList;

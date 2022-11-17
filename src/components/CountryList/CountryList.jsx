import React, { useState } from "react";
import Popup from "../Popup/Popup";
import Country from "../Country/Country";
import "./CountryList.css";

function CountryList({countries}) {
  const [popup, setPopup] = useState(false);
  const [inx, setInx] = useState();

  return (
    <li className="countryList">
      {countries.map((oneCountry, inx) => (
        <Country
          key={oneCountry.name.common}
          inx={inx}
          common={oneCountry.name.common}
          capital={oneCountry.capital}
          continents={oneCountry.continents[0]}
          flag={oneCountry.flag}
          setPopup={setPopup}
          setInx={setInx}
        />
      ))}
      <Popup
        triger={popup}
        setPopup={setPopup}
        inx={inx}
        countries={countries}
      />
    </li>
  );
}

export default CountryList;

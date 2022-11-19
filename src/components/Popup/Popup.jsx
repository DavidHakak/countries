import React, { useEffect, useState } from "react";
import "./Popup.css";
import axios from "axios";

function Popup({ countryName, setPopup }) {
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((data) => {
      const country = data.data.find((c) => c.name.common === countryName);
      setSelectedCountry(country);
      setListLanguages(country.languages);
    });
  }, []);

  const [listLanguages, setListLanguages] = useState({});
  const [selectedCountry, setSelectedCountry] = useState({});

  return (
    <div className="popup" onClick={() => setPopup(false)}>
      <div className="inner-popup">
        <div className="popup-flag">{selectedCountry.flag}</div>
        <div className="popup-population">
          <b> Population:</b> <br />
          <p>{selectedCountry.population}</p>
        </div>

        <div className="popup-languages">
          <b> Languages:</b> <br />
          {Object.values(listLanguages).map((languages) => (
            <p>{languages}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Popup;

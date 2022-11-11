import React from "react";
import "./Country.css";
function Country(props) {


  return (
    
    <div
      className="country"
      onClick={() => {
        props.setPopup(true);
        props.setInx(props.inx);
      }}
    >
      <div className="flag">{props.flag}</div>
      <div className="mainDiv">
        <div className="common">
          {props.common} <div className="capital"> - {props.capital}</div>
        </div>

        <div className="continents">{props.continents}</div>
      </div>
    </div>
  );
}

export default Country;

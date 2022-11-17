import React from "react";
import "./Country.css";
function Country({inx,common,capital,continents,flag,setPopup,setInx}) {


  return (
    
    <div
      className="country"
      onClick={() => {
        setPopup(true);
        setInx(inx);
      }}s
    >
      <div className="flag">{flag}</div>
      <div className="mainDiv">
        <div className="common">
          {common} <div className="capital"> - {capital}</div>
        </div>

        <div className="continents">{continents}</div>
      </div>
    </div>
  );
}

export default Country;

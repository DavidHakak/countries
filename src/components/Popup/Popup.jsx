import React from "react";
import "./Popup.css";
function Popup(props) {
  return props.triger ? (
    <div className="popup" onClick={() => props.setPopup(false)}>
      <div className="inner-popup">
        <div className="popup-flag">{props.countries[props.inx].flag}</div>
        <div className="popup-population">
          <b> Population:</b> <br />
          <p>{props.countries[props.inx].population}</p>
        </div>
        <div className="popup-languages">
          <b> Languages:</b> <br />
          {props.countries[props.inx].languages[1]}
          {console.log(props.countries[props.inx].languages)}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;

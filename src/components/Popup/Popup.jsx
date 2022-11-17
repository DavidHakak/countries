import React from "react";
import "./Popup.css";
function Popup(props) {
  const listLanguages = [];

  if (props.triger) {
    for (const i in props.countries[props.inx].languages) {
      listLanguages.push(props.countries[props.inx].languages[i]);
    }
  }

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
          {listLanguages.map((lang) => (
            <p>{lang}</p>
          ))}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;

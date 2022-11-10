import React from "react";
import "./Popup.css";
function Popup(props) {
  return props.triger ? (
    <div className="popup">
      <div className="inner-popup">
        <button className="close-btn" onClick={() => props.setPopup(false)}>
          close
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;

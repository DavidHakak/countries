import React from "react";
import "./Header.css";
function Header(props) {
  return (
    <div className="header">
      <div className="title"> Countries({props.countries.length})</div>

      <input
        type="search"
        placeholder="Search"
        className="search"
        onInput={(e) => props.changeCountries(e)}
      />
    </div>
  );
}

export default Header;

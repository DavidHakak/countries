import React from "react";
import "./Header.css";
function Header({countries, setSearchWords}) {
 
  return (
    <div className="header">
      <div className="title"> Countries({countries.length})</div>

      <input
        type="search"
        placeholder="Search"
        className="search"
        onInput={(e) => setSearchWords(e.target.value)}
      />
    </div>
  );
}

export default Header;

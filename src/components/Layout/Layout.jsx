import React, { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { data } from "../../countries";
import "./Layout.css";

function Layout() {
  const [countries, setCountries] = useState(data);

  const changeCountries = (e) => {
    let newCountries = data.filter((country) =>
      country.name.common
        .toLowerCase()
        .includes(e.target.value.toLowerCase(), 0)
    );
    setCountries(newCountries);
  };

  return (
    <div className="layout">
      <Header countries={countries} changeCountries={changeCountries} />
      <Main countries={countries} />
    </div>
  );
}

export default Layout;

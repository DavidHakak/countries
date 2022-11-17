import React, { useEffect, useState, createContext } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./Layout.css";
import axios from "axios";
import Popup from "../Popup/Popup";

function Layout() {
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(({ data }) => setCountries(data));
  }, []);

  const [countries, setCountries] = useState([]);

  const [searchWords, setSearchWords] = useState("");

  const filterCountries = countries.filter((country) =>
    searchWords
      ? country.name.common.toUpperCase().startsWith(searchWords.toUpperCase())
      : true
  );

  return (
    <div className="layout">
      <Header countries={filterCountries} setSearchWords={setSearchWords} />

      <Main countries={filterCountries} />
      <Popup />
      {/* <Futer/> */}
    </div>
  );
}

export default Layout;

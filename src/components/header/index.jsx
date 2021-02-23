import React from "react";
import GetCountrySelect from "../getCountrySelect";
import Logo from "../logo";
import "./style.css";

export default function Header({ setSelectedCountry, selectedCountry, setAllCountries }) {
  return (
    <div className="header box">
      <Logo />
      <GetCountrySelect setSelectedCountry={setSelectedCountry} setAllCountries={setAllCountries} selectedCountry={selectedCountry}/>
    </div>
  );
}

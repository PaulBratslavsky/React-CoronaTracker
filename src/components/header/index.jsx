import React from "react";
import GetCountrySelect from "../getCountrySelect";
import Logo from "../logo";
import "./style.css";

export default function Header({ setSelectedCountry }) {
  return (
    <div className="header box">
      <Logo />
      <GetCountrySelect setSelectedCountry={setSelectedCountry} />
    </div>
  );
}

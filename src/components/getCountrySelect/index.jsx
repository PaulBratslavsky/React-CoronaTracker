import React, { useState, useEffect } from "react";
import { useFetchData } from "../../hooks/useFetchData";
import './style.css';

export default function GetCountrySelect({ setSelectedCountry }) {
  const QUERY = "https://disease.sh/v3/covid-19/countries";
  const { data, error } = useFetchData(QUERY);
  const [selected, setSelected] = useState("USA");

  useEffect(() => {
    const selectedCountry = data.filter(
      (item) => item.country.toLowerCase() === selected.toLowerCase()
    );
    setSelectedCountry(selectedCountry[0]);
  }, [selected, data, setSelectedCountry]);

  const handleSelect = (event) => {
    setSelected(event.target.value);
  };

  if (error) return <h2>{error}</h2>;
  return (
    <div className="header__select">
      <label htmlFor="countries">Choose a country</label>
      <select
        name="countries"
        id="countries"
        onChange={handleSelect}
        value={selected}
      >
        {data.map((item) => (
          <option key={item.country} value={item.country}>
            {item.country}
          </option>
        ))}
      </select>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useFetchData } from "../../hooks/useFetchData";
import './style.css';

export default function GetCountrySelect({setSelectedCountry}) {
  const QUERY = "https://disease.sh/v3/covid-19/countries";
  const { data, error } = useFetchData(QUERY);
  const [selected, setSelected] = useState("USA");

  useEffect(() => {
    setSelectedCountry(selected);
  }, [selected]);

  const handleSelect = (event) => {
    setSelected(event.target.value);
  };

  if (!data) return null;

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
        <option key="All" value="All">
            All
          </option>
        {data.map((item) => (
          <option key={item.country} value={item.country}>
            {item.country}
          </option>
        ))}
      </select>
    </div>
  );
}

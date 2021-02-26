import React, { useEffect } from "react";
import { useFetchData } from "../../hooks/useFetchData";
import './style.css';

export default function GetCountrySelect({setSelectedCountry, setAllCountries, selectedCountry}) {
  const QUERY = "https://disease.sh/v3/covid-19/countries";
  const { data, error } = useFetchData(QUERY);

  useEffect(() => {
    setAllCountries(data)
  }, [data]);

  const handleSelect = (event) => {
    setSelectedCountry(event.target.value);
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
        value={selectedCountry}
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

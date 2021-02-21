import React from 'react'
import { convertNumber } from './../../utils/convertNumber'

import './style.css'

export default function AsideHeader({data}) {
  return <header className="aside-header">
    <div>
      <h1>{data.country || "All Countries"}</h1>
      <div className="population">
        <h3>Population</h3> <span>{convertNumber(data.population)}</span>
      </div>
    </div>
    
    { data.country && 
      <img
      className="flag"
      src={data.countryInfo.flag}
      alt={`${data.country} flag.`}
    />
    }
  </header>
}

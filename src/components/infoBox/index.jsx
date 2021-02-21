import React from 'react'
import './style.css'
export default function InfoBox({title, content}) {
  return <div className="info-box">
    <header>
      <h2>{title}</h2>
    </header>
    <div className="info-box__content">
      {content}
    </div>
  </div>
}

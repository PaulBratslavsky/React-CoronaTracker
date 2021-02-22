import React from 'react'
import './style.css'
export default function MyCard({title, children}) {
  return <div className="card">
    <header>
      <h2>{title}</h2>
    </header>
    <div className="card__content space-even">
      {children}
    </div>
  </div>
}

import React from 'react'
import './style.css'
export default function MyCard({title, className, children}) {
  return <div className={`card ${className && className}`}>
    <header>
      <h2>{title}</h2>
    </header>
    <div className="card__content">
      {children}
    </div>
  </div>
}

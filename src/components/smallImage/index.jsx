import React from 'react'
import './style.css'
export default function SmallImage({src, alt}) {
  return (
    <img className="small-image" src={src} alt={alt} />
  )
}

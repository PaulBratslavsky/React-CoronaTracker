import React, { useState } from 'react'
import './style.css'

export default function Map() {
  const [open, setOpen] = useState(false)

  const style = {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  }

  return <div className="map box" style={open ? style : null} onClick={() => !open && setOpen(true)}>
    <div>
      Map
      { open && <button onClick={() => open && setOpen(false)}>X</button> }
    </div>
  </div>
}

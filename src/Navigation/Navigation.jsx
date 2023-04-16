import React from 'react'
import {Link} from "react-router-dom"

export const Navigation = () => {
  return (
    <div>
        <Link to="/about">About</Link>
        <Link to="/project">Projects</Link>
        <Link to="contact">Contact</Link>
    </div>
  )
}

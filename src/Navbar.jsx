import React from 'react'
import logo from './react-icon.png'
import Main from './Main'

export default function Navbar() {
  return (    
    <header>
      <nav className="nav">
        <img className="react-icon" src={logo} />
        <h1><a href="Main">ABOUT REACT</a></h1>
        <ul className="nav-items">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}
import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
      <header>
        <h1>Movie <span>HOUSE</span></h1>
        <Link to="/"> <button> HOME</button></Link>
      </header>
    </div>
  )
}

export default Header

import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to = "/">
    Home
    </Link>

    <br/>

     <Link to = "/about">
    About
    </Link>

    <br/>

     <Link to = "/Contact">
    Contact
    </Link>
    </nav>
  )
}

export default Navbar
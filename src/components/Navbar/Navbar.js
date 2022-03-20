import React, { useState } from 'react'
import { NavbarData } from './NavbarData'
import {Link} from 'react-router-dom'
import './Navbar.css'
import {FaBars, FaTimes} from 'react-icons/fa'

function Navbar() {
  const [click, Setclick] = useState(false);

  const mobileClick = () => Setclick(false)
  const bom = () => Setclick(!click)
  return (
    <header>
      <Link to='/' className='logo'>AlzZ</Link>
      <nav onClick={mobileClick} className={click ? 'active' : ''}>
        {NavbarData.map((ti,index) =>{
          return(
            <Link to={ti.url} key={index}>{ti.title}</Link>
          );
        })}
      </nav>
      <div id="btn" onClick={bom}>{click ? <FaTimes /> : <FaBars /> }</div>
    </header>
  )
}

export default Navbar
import React from 'react';
import "./header.css";
import logo from "../../assets/logo192.png"
import { useState } from 'react'

const Header = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <header className="header">
      <div className="logo"><img src={logo}  alt="profile icon" width={70}></img></div>

      <nav>
      
        {/* <div className="nav__menu">
      <ul className="nav__list grid">
        <li className="nav__item"> */}
        <a href="#home" onClick={() => setActiveNav('#')}className={activeNav === '#' ? 'active' : ''} >
          <i className="uil uil-estate nav__icon"></i>
        </a>
        {/* </li> */}

        {/* <li className="nav__item"> */}
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} >
          <i className="uil uil-user"></i>
        </a>
        {/* </li> */}

        {/* <li className="nav__item"> */}
        <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''} >
          <i className="uil uil-scenery"></i>
        </a>
        {/* </li> */}

        {/* <li className="nav__item"> */}
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} >
          <i className="uil uil-message"></i>
        </a>
        {/* </li> */}

        {/* <li className="nav__item"> */}
        <a href="#resume" onClick={() => setActiveNav('#resume')} className={activeNav === '#resume' ? 'active' : ''} >
          <i className="uil uil-file"></i>
        </a>
        {/* </li>
  </ul>
</div>
 */}
      </nav>
    </header>
  )
}

export default Header
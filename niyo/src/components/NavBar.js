import React, { useState } from 'react';
import "../assets/styles/NavBar.css";
import logo from "../assets/images/svg/Vector.svg";
import { Link } from 'react-router-dom';

function Navbar() {
  
  const [ navActive, setNavActive ] = useState(false);

  return (
   <nav>
          <Link to='/'>
        <div className='logo'>
              <div className='logo__wrap'>
                <img src={logo} alt="art logo" />
              </div>
              <h5>Artisto</h5>
        </div>
          </Link>

      <ul className={navActive ? 'nav-links nav-active' : "nav-links"}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/museum">Museum</Link>
        </li>
        <li>
          <Link to="/arts" >Arts</Link>
        </li>
        <li>
          <Link to="/galleries" >Galleries</Link>
        </li>
        <li>
          <Link to="/login" >Login</Link>
        </li>
        <li>
          <Link to="/explore" >Explore Arts</Link>
        </li>       
      </ul>

      <div className='burger' onClick={() => setNavActive(!navActive)}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
   </nav>
  )
}

export default Navbar;
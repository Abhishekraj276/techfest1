import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
// eslint-disable-next-line no-unused-vars
import AboutUs from './AboutUs.js';

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollX;

    const handleScroll = () => {
      const currentScrollPos = window.scrollX;

      setIsNavbarVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`Navbar fixed-top ${isNavbarVisible ? 'visible' : 'hidden'}`}>
      <div className="container-fluid">
        
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="about">About us</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Event</NavLink>
            </li>
            <li>
              <NavLink to="/projects">BROURCE</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact us</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




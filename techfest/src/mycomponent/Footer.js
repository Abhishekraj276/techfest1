import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import AboutUs from './AboutUs';

const Footer = () => {
  return (
    <footer>
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social_icon">
        <li><NavLink to="#"><i className="fa-brands fa-linkedin"></i></NavLink> </li>
        <li><NavLink to="#"><i className="fa-brands fa-instagram"></i></NavLink> </li>
        <li><NavLink to="#"><i className="fa-brands fa-youtube"></i></NavLink> </li>
        <li><NavLink to="#"><i className="fa-solid fa-envelope"></i></NavLink> </li>
      </ul>

      <ul className="menu">
        <li><NavLink to="">Home</NavLink> </li>
        <li><NavLink to="">About Us</NavLink> </li>
        <li><NavLink to="">Events</NavLink> </li>
        <li><NavLink to="">Contact Us</NavLink> </li>
        <li><NavLink to="">Login</NavLink> </li>
      </ul>

      <p>Copyright © 2023|All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;

import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css'; // File CSS untuk styling Navbar
import logo from '../../assets/nav-text-logo.png';
import { TfiMenu } from "react-icons/tfi";
import Dropdown  from '../dropdown/Dropdown';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    if (setShowMenu) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };

  }, [setShowMenu]);

  const navbarData = [
    {
      id: 0,
      title: 'All Countries',
      items: [],
    },
    {
      id: 1,
      title: 'Continents',
      items: ['Asia', 'Europe', 'Africa', 'South America', 'North America', 'Australia'],
    },
    {
      id: 2,
      title: 'Regions',
      items: ['East Asia', 'Southeast Asia', 'South Asia', 'Central Asia', 'Western Europe', 'Eastern Europe', 'Northern Europe', 'Southern Europe', 'Middle East', 'North Africa', 'South Africa', 'Central Africa', 'Western Africa', 'Eastern Africa', 'North America', 'North America', 'South America', 'Caribbean', 'Oceania'],
    },
  ];

  return (
    <nav className="navbar" ref={dropdownRef}>
      <div className="navbar-logo">
        <img src={logo} alt="" srcSet="" />
      </div>
      <ul className={`navbar-links ${showMenu ? 'show' : ''}`}>
        
        {navbarData.map((item, index) => (
            <li key={index}>
              <Dropdown 
              title={item.title}
              dropdownItems={item.items} />
          </li>
          ))}
        
      </ul>
      <div className="hamburger-menu"  onClick={toggleMenu}>
        <TfiMenu />
      </div>
    </nav>
  );
}

export default Navbar;
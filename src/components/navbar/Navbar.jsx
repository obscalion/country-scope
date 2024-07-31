import React, { useState, useRef, useEffect } from 'react';
import { getUniqueRegions } from '../../services/services';
import './Navbar.css'; // File CSS untuk styling Navbar
import logo from '../../assets/nav-text-logo.png';
import { TfiMenu } from "react-icons/tfi";
import Dropdown  from '../dropdown/Dropdown';

const navbarData = [
  {
    title: 'Countries',
    items: ['All Countries'],
  },
  {
    title: 'Regions',
    items: getUniqueRegions(),
  },
  {
    title: 'Insights',
    items: [],
  },
];

const Navbar = ({ onRegionSelect }) => {
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

  return (
    <nav className="navbar" ref={dropdownRef}>
      <div className="navbar-logo">
        <img src={logo} alt="" srcSet="" />
      </div>
      <ul className={`navbar-links ${showMenu ? 'show' : ''}`}>
        
        {navbarData.map((item, index) => (
            <li key={index}>
              <Dropdown 
              onSelectedRegion={onRegionSelect}
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
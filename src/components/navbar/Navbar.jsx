import React, { useState } from 'react';
import './Navbar.css'; // File CSS untuk styling Navbar
import logo from '../../assets/nav-text-logo.png';
import { Button, Dropdown, Space } from 'antd';
import { TfiMenu } from "react-icons/tfi";

const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    ),
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="" srcSet="" />
      </div>
      <ul className={`navbar-links ${showMenu ? 'show' : ''}`}>
        <li>
          <Dropdown
            menu={{
              items,
            }}
            placement="topLeft"
            arrow
          >
            <a href="#">All Countries</a>
          </Dropdown>
        </li>
        <li>
          <Dropdown
              menu={{
                items,
              }}
              placement="top"
              arrow
          >
            <a href="#">Continents</a>
          </Dropdown>
        </li>
        <li>
          <Dropdown
              menu={{
                items,
              }}
              placement="topRight"
              arrow
          >
            <a href="#">Regions</a>
          </Dropdown>
        </li>
      </ul>
      <div className="hamburger-menu"  onClick={toggleMenu}>
        <TfiMenu />
      </div>
    </nav>
  );
}

export default Navbar;
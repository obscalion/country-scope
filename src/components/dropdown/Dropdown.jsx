import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.css';

const Dropdown = ({ title, dropdownItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="dropdown-toggle">
        {title}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {dropdownItems.map((item, index) => (
            <button key={index} className="dropdown-item">
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

import React, { useState } from 'react';
import './SearchBox.css';
import { FiSearch } from "react-icons/fi";

const SearchBox = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');
  const handleInputChange = (event) => {
    setKeyword(event.target.value);
    onSearch(keyword);
  };
  const handleSearch = () => {
    onSearch(keyword);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={keyword}
        onChange={handleInputChange}
        placeholder="Search..."
        id="search-input"
      />
      <button 
      id="search-button"
      onClick={handleSearch}
      >
        <FiSearch />
      </button>
    </div>
  );
};

export default SearchBox;
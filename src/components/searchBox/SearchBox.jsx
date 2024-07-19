import React, { useState } from 'react';
import './SearchBox.css'
import { FiSearch } from "react-icons/fi";

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
    console.log(event.target.value)
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
      console.log(query)
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={handleChange}
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
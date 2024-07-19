import React, { useState } from 'react';
import './Jumbotron.css'; // File CSS untuk styling Jumbotron
import SearchBox from '../searchBox/SearchBox'

const Jumbotron = () => {
    const [showMenu, setShowMenu] = useState(false); 

    const handleSearch = (query) => {
        console.log('Searching for:', query);
        // Implement your search logic here
      };
  
    return (
      <section className="jumbotron">
        <div className="container"> 
            <div className="image-box">
                
            </div>
            <div className="content-box">
                <div className="text-wrap">
                    <h1>Explore Countries</h1>
                    <p>Search over 230 locations across the globe.</p>
                    <label>Try Indonesia, Japan or Germany.</label>
                    <SearchBox onSearch={handleSearch} />
                </div>
            </div>
        </div>
      </section>
    );
  }
  
  export default Jumbotron;
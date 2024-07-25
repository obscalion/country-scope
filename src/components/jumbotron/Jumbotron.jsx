import React, { useEffect, useRef } from 'react';
import './Jumbotron.css'; // File CSS untuk styling Jumbotron
import Typed from 'typed.js'
import SearchBox from '../searchBox/SearchBox'

const Jumbotron = () => { 
    const typedText = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedText.current, {
      strings: ["Explore Countries", "Gather Information", "Let's Cross The Border!"], 
      startDelay: 1300,
      typeSpeed: 80,
      backSpeed: 30,
      backDelay: 1200,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "_"
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

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
                    <h1><span ref={typedText}></span></h1>
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
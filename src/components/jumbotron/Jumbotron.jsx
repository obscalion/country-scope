import React, { useState } from 'react';
import './Jumbotron.css'; // File CSS untuk styling Jumbotron

const Jumbotron = () => {
    const [showMenu, setShowMenu] = useState(false); 
  
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
                </div>
            </div>
        </div>
      </section>
    );
  }
  
  export default Jumbotron;
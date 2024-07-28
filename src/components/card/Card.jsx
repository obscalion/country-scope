import react, { useState } from 'react';
import './Card.css'; // File CSS untuk styling Countries

const Card = ({countryName, countryCapital}) => {

  return (
    <div className="card">
        <div className="flag">
            <img src="https://flagcdn.com/w320/de.png" alt="Flag" />
        </div>
        <div className="card-content">
            <div className="card-title">
                <h3>{countryName}</h3>
            </div>
            <div className="card-capital">
                <p>{countryCapital}</p>
            </div>
        </div>
        <button className="card-button">
            <span className="card-button-text">Details</span>
        </button>
    </div>
  );
}

export default Card;

// https://linuxjourney.com/
// https://www.learnshell.org/
// https://explainshell.com/
// https://www.openvim.com/sandbox.html
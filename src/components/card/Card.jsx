import react, { useState } from 'react';
import './Card.css'; // File CSS untuk styling Countries

const Card = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="card">
        <div className="flag">
            <img src="https://flagcdn.com/w320/de.png" alt="Flag" />
        </div>
        <div className="card-content">
            <div className="card-title">
                <h3>Germany</h3>
            </div>
            <div className="card-capital">
                <p>Berlin</p>
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
import React, { useState } from 'react';
import Card from '../card/Card';
import './Countries.css'; // File CSS untuk styling Countries

const Countries = () => {
    const [showMenu, setShowMenu] = useState(false); 

  
    return (
      <section className="countries">
        <h2>Countries</h2>
        <div className="country-list">
          <Card />
        </div>
      </section>
    );
  }
  
  export default Countries;
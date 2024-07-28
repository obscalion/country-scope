import React, { useState } from 'react';
import Card from '../card/Card';
import './Countries.css'; // File CSS untuk styling Countries

const Countries = () => {
    const [showMenu, setShowMenu] = useState(false); 

  
    return (
      <section className="countries">
        <h2>Countries</h2>
        <div className="country-list">
          <Card 
            countryName="Saint Vincent and the Grenadines"
            countryCapital="Kingstown"
          />
          <Card 
            countryName="United States of America"
            countryCapital="Washington DC"
          />
          <Card 
            countryName="France"
            countryCapital="Paris"
          />
          <Card 
            countryName="United Kingdom"
            countryCapital="London"
          />
          <Card 
            countryName="Bosnia and Herzegovina"
            countryCapital="Sarajevo"
          />
        </div>
      </section>
    );
  }
  
  export default Countries;
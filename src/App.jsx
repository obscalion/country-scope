import React, { useState, useEffect } from 'react'
import { fetchCountries, fetchCountriesByRegion } from './services/fetch'
import Navbar from './components/navbar/Navbar'
import Jumbotron from './components/jumbotron/Jumbotron'
import Countries from './components/countries/Countries'
import './App.css'

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('Asia');
  console.log(selectedRegion);
  useEffect( () => { 
    const fetchCountries = async () => {
      try {
        const data = await fetchCountriesByRegion(selectedRegion);
          setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, [selectedRegion]);

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
  };

  console.log(typeof(handleRegionSelect));

  return (
    <div>
      <Navbar onRegionSelect={handleRegionSelect}/>
      <Jumbotron />
      <Countries countries={countries} selectedRegion={selectedRegion}/>
    </div>
  )
}

export default App

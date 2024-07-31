import React, { useState, useEffect } from 'react'
import { fetchAllCountries, fetchCountriesByRegion, fetchSearchedCountries } from './services/fetch'
import Navbar from './components/navbar/Navbar'
import Jumbotron from './components/jumbotron/Jumbotron'
import Countries from './components/countries/Countries'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [keyword, setKeyword] = useState('');
  const [error, setError] = useState(null);

  
  useEffect( () => { 
    const fetchCountries = async () => {
      setIsLoading(true);
      try {
        if(Boolean(keyword) === true) {
          setError
          const data = await fetchSearchedCountries(keyword);
          setCountries(data);
          setError(null);
        } else if(Boolean(selectedRegion) === true) {
          const data = await fetchCountriesByRegion(selectedRegion);
          setCountries(data);
          setError(null);
        } else {
          const data = await fetchAllCountries();
          setCountries(data);
          setError(null);
        }
      } catch (error) {
        console.error('Error fetching countries:', error);
        setError(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    };

    fetchCountries();
  }, [keyword, selectedRegion]);

  const handleRegionSelect = (region) => {
    setKeyword('');
    setSelectedRegion(region);
  };

  const handleSearchKeyword = (keyword) => {
    setSelectedRegion('');
    setKeyword(keyword);
  };
  console.log(countries);
  return (
    <div>
      <Navbar onRegionSelect={handleRegionSelect}/>
      <Jumbotron onSearchKeyword={handleSearchKeyword}/>
      <Countries countries={countries} loadingState={isLoading} error={error}/>
    </div>
  )
}

export default App

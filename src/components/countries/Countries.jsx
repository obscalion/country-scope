import React, { useState, useEffect } from 'react';
import Card from '../card/Card';
import { fetchCountries } from '../../services/fetch';
import PaginationComponent from '../pagination/Pagination';
import './Countries.css'; // File CSS untuk styling Countries

const Countries = ({ countries }) => {
  // const [countries, setCountries] = useState([]);
  // useEffect( () => { 
  //   async function fetchData() {
  //       try {
  //           const res = await fetchCountries(); 
  //           setCountries(res);
  //       } catch (err) {
  //           console.log(err);
  //       }
  //   }
  //   fetchData();
  // }, []);

    const [page, setPage] = useState(1);
    const itemsPerPage = 12;
    
    const handlePageChange = (event, value) => {
      setPage(value);
    };

    const startIndex = (page - 1) * itemsPerPage;
    const paginatedItems = countries.slice(startIndex, startIndex + itemsPerPage);

    return (
      <section className="countries">
        <h2>Countries</h2>
        <div className="country-list">
          
          {paginatedItems.map((item, index) => (
            <Card 
            key={item.cca3}
            flagSrc={item.flags.png}
            flagAlt={item.flags.alt}
            countryName={item.name.common}
            countryCapital={item.capital[0]}
            />
          ))}
        </div>
        <PaginationComponent
        count={Math.ceil(countries.length / itemsPerPage)}
        page={page}
        onPageChange={handlePageChange}
        />
      </section>
    );
  }
  
  export default Countries;
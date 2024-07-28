import React, { useState } from 'react';
import Card from '../card/Card';
import PaginationComponent from '../pagination/Pagination';
import './Countries.css'; // File CSS untuk styling Countries

const countryData = Array.from({ length: 130 }, (_, index) => ({
  name: `Country ${index + 1}`,
  capital: `Capital ${index + 1}`
}));

const Countries = () => {
    const [page, setPage] = useState(1);
    const itemsPerPage = 12;
    
    const handlePageChange = (event, value) => {
      setPage(value);
    };

    const startIndex = (page - 1) * itemsPerPage;
    const paginatedItems = countryData.slice(startIndex, startIndex + itemsPerPage);

    return (
      <section className="countries">
        <h2>Countries</h2>
        <div className="country-list">
          
          {paginatedItems.map((item, index) => (
            <Card 
            key={index}
            countryName={item.name}
            countryCapital={item.capital}
            />
          ))}
        </div>
        <PaginationComponent
        count={Math.ceil(countryData.length / itemsPerPage)}
        page={page}
        onPageChange={handlePageChange}
        />
      </section>
    );
  }
  
  export default Countries;
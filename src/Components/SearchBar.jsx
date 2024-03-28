import React from 'react';
import './searchbar.css'

function SearchBar({ onSearch, onInStockChange }) {
  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <div className="form-check">
        <input className='form-check-input' type="checkbox" id="inStock" name="inStock" onChange={(e) => onInStockChange(e.target.checked)}/>
        <label className="form-check-label" htmlFor="inStock">Only show products in stock</label>
      </div>
    </div>
  );
}

export default SearchBar;
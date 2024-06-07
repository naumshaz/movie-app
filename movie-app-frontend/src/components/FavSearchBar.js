import React, { useState } from 'react';

function FavSearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(searchTerm);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  //Not fully developed as of now. Currently Favourites Search Bar does not work!!!

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div>
        <input className="fav-search-input"
          type="text"
          placeholder="Search from favourites"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}

export default FavSearchBar;
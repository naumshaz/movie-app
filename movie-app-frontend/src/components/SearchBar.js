import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  //const [movies, setMovies] = useState([]);
  //const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(searchTerm)
  };

  const handleClearClick = () => {
    setSearchTerm('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div >
        <input className="search-input"
          type="text"
          placeholder="Search for movies and series"
          value={searchTerm}
          onChange={handleChange}
        />
        {searchTerm && (
        <button className="clear-button" onClick={handleClearClick}>
          X
        </button>
        )}
      </div>
    </form>
  );
}

export default SearchBar;

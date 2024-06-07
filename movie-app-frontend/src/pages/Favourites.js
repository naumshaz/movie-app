import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import FavSearchBar from '../components/FavSearchBar';
import { Link } from 'react-router-dom';
import './Favourites.css';
import './Home';
import { useNavigate } from 'react-router-dom';

function Favourites() {
  const [favourites, setFavourites] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/'); //Edit this later for home
  };

  useEffect(() => {
    const favMovies = JSON.parse(localStorage.getItem('favourites')) || [];
    setFavourites(favMovies);
  }, []);

  const handleSearch = async (title) => {
    try {
      if (title.trim() === '') {
        setSearchResults([]);  // Clear search results if search term is empty
        return;
      }
      const response = await axios.get(`http://localhost:6090/api/movies/search?title=${title}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  const handleFavSearch = async (title) => {
    try {
      if (title.trim() === '') {
        setSearchResults([]);
        return;
      }
      const response = await axios.get(`http://localhost:6090/api/movies/search?title=${title}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo-search">
          <div className="logo">
            <a>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="16" fill="#FF0059"/>
              <path d="M13.9997 10L13.333 13.3333M18.6663 10L17.9997 13.3333M22.6663 13.3333H9.33301M12.533 22H19.4663C20.5864 22 21.1465 22 21.5743 21.782C21.9506 21.5903 22.2566 21.2843 22.4484 20.908C22.6663 20.4802 22.6663 19.9201 22.6663 18.8V13.2C22.6663 12.0799 22.6663 11.5198 22.4484 11.092C22.2566 10.7157 21.9506 10.4097 21.5743 10.218C21.1465 10 20.5864 10 19.4663 10H12.533C11.4129 10 10.8529 10 10.425 10.218C10.0487 10.4097 9.74274 10.7157 9.55099 11.092C9.33301 11.5198 9.33301 12.0799 9.33301 13.2V18.8C9.33301 19.9201 9.33301 20.4802 9.55099 20.908C9.74274 21.2843 10.0487 21.5903 10.425 21.782C10.8529 22 11.4129 22 12.533 22Z" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            <Link to="/" className="navbar-brand">GET MOVIES</Link>
          </div>
          <div>
            <SearchBar onSearch={handleSearch} setSearchTerm={setSearchTerm} /> 
          </div> 
        </div>
          
      </nav>
      <div className='container'>
        <div className='back-fav-search'>
        
            <div className='back-fav'>
              <button className='back-btn' onClick={handleButtonClick}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <path d="M20.828 22.304L16.6616 18.1375L20.828 13.9711C21.2468 13.5523 21.2468 12.8758 20.828 12.457C20.4092 12.0382 19.7327 12.0382 19.3139 12.457L14.385 17.3859C13.9663 17.8047 13.9663 18.4812 14.385 18.9L19.3139 23.8288C19.7327 24.2476 20.4092 24.2476 20.828 23.8288C21.236 23.41 21.2468 22.7228 20.828 22.304Z" fill="black"/>
                </svg>
              </button>
              <h1>My Favourites</h1>
            </div>
            <div>
              <FavSearchBar id='fav-search-input' onSearch={handleFavSearch} setSearchTerm={setSearchTerm} />
            </div>

        </div>
        <MovieList movies={favourites} />
      </div>
    </div>
  );
}

export default Favourites;

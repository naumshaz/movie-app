import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import CarouselComponent from '../components/CarouselComponent';
import { Link } from 'react-router-dom';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/favourites');
  };


  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('http://localhost:6090/api/movies');
      setMovies(response.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

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
          <button className='custom-button' onClick={handleButtonClick}>
              
                <span className="heart-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99413 4.27985C8.328 2.332 5.54963 1.80804 3.46208 3.59168C1.37454 5.37532 1.08064 8.35748 2.72 10.467C3.95825 12.0604 7.47592 15.2591 9.12318 16.7291C9.42599 16.9993 9.5774 17.1344 9.7547 17.1876C9.90861 17.2338 10.0796 17.2338 10.2336 17.1876C10.4109 17.1344 10.5623 16.9993 10.8651 16.7291C12.5123 15.2591 16.03 12.0604 17.2683 10.467C18.9076 8.35748 18.6496 5.35656 16.5262 3.59168C14.4028 1.8268 11.6603 2.332 9.99413 4.27985Z" fill="white" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <p id='myfav'>My Favourites</p>
              
            </button>
          
      </nav>
      <div className="container">
        
        {searchResults.length > 0 ? (
          <>
          <div id = 'search-result'>
            <h1 className='home-h1'>Search</h1>
            <p id='home-p'>{searchResults.length} result found</p>
            <MovieList movies={searchResults} />
          </div>
          </>
        ) : (
          <>
          <div className = "CarouselItem">
            <CarouselComponent />
          </div>
          <h1 className='home-h1'>Movies</h1>
          <MovieList movies={movies} />
          </>
        )}
      </div>
    </div>
  );
}

export default Home;

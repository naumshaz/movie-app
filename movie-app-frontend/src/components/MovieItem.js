import React, { useState } from 'react';

function MovieItem({ movie , onCheck }) {

  const [isFavourite, setIsFavourite] = useState(() => {
    const favMovies = JSON.parse(localStorage.getItem('favourites')) || [];
    return favMovies.some(favMovie => favMovie.id === movie.id);
  });

  const handleFavourite = () => {
    const favMovies = JSON.parse(localStorage.getItem('favourites')) || [];
    if (isFavourite) {
      const newFavMovies = favMovies.filter(favMovie => favMovie.id !== movie.id);
      localStorage.setItem('favourites', JSON.stringify(newFavMovies));
    } else {
      favMovies.push(movie);
      localStorage.setItem('favourites', JSON.stringify(favMovies));
    }
    setIsFavourite(!isFavourite);
    onCheck(true)
  };

  return (
    <div className="movie-item">
      <button className='add-fav-btn' onClick={handleFavourite}>
        {isFavourite ? <svg width="25" height="25" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.67157 5.75055C5.23367 4.18846 7.76633 4.18846 9.32842 5.75055L10.5 6.92213L11.6716 5.75055C13.2337 4.18846 15.7663 4.18846 17.3284 5.75055C18.8905 7.31265 18.8905 9.84531 17.3284 11.4074L10.5 18.2358L3.67157 11.4074C2.10948 9.84531 2.10948 7.31265 3.67157 5.75055Z" fill="#F04438"/>
</svg>
 : <svg width="25" height="25" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path fill-rule="evenodd" clip-rule="evenodd" d="M3.67157 5.75055C5.23367 4.18846 7.76633 4.18846 9.32842 5.75055L10.5 6.92213L11.6716 5.75055C13.2337 4.18846 15.7663 4.18846 17.3284 5.75055C18.8905 7.31265 18.8905 9.84531 17.3284 11.4074L10.5 18.2358L3.67157 11.4074C2.10948 9.84531 2.10948 7.31265 3.67157 5.75055Z" fill="#D1D5DB"/>
 </svg>
 }
      </button>
      <img src = {movie.banner_image} class = 'movie-poster'></img>
      <p>{movie.year}</p>
      <h4>{movie.title}</h4>
      <p>{movie.genre}</p>
      
    </div>
  );
}

export default MovieItem;

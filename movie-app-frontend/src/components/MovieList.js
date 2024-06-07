import React from 'react';
import MovieItem from './MovieItem';

function MovieList({ movies , isFavourite }) {
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} onCheck={() => {isFavourite(true)}} />
      ))}
    </div>
  );
}

export default MovieList;

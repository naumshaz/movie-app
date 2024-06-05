const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const moviesFilePath = path.join(__dirname, '../../data/movies.json');

// Helper function to read movies from the JSON file
const getMovies = () => {
  const data = fs.readFileSync(moviesFilePath);
  return JSON.parse(data);
};

// GET /api/movies - Retrieve the list of all movies
router.get('/', (req, res) => {
  const movies = getMovies();
  res.json(movies);
});

// GET /api/movies/search?title={title} - Search for movies by title
router.get('/search', (req, res) => {
  const title = req.query.title.toLowerCase();
  const movies = getMovies();
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(title)
  );
  res.json(filteredMovies);
});

module.exports = router;

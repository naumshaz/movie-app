const express = require('express');
const app = express();
const moviesRouter = require('./routes/movies');

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/movies', moviesRouter);

module.exports = app;

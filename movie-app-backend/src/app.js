const express = require('express');
const cors = require('cors');
const app = express();
const moviesRouter = require('./routes/movies');

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/movies', moviesRouter);

module.exports = app;

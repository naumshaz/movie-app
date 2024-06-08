# movie-app

## Description
Movie App is a web application that allows users to search for movies, view details, and manage a list of favourite movies.

## Live Demo
Check out the live demo of the application [here](https://movies-app-livid.vercel.app/).

## Features
- Search for movies using a search bar.
- View movie details including poster, title, genre and release year.
- Add movies to a favourites list.
- Remove movies from the favourites list.
- Carousel on the home page to display featured movies.

## Technologies Used
- React
- React Router
- Axios
- React Bootstrap
- React Carousel
- Node.js
- Vercel (for deployment)

## Setup Instructions

### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)

### Clone the Repository
```bash
git clone https://github.com/your-username/movie-app.git
cd movie-app
```

### Install Dependencies
using npm:
```bash
npm install
```
### Dependencies
- cors
- react
- axios
- express
- react-dom
- react-router-dom
- react-responsive-carousel
- fontawesome-free
- react-scripts
- and more...

refer package.json file in movie-app/movie-app-frontend and movie-app/movie-app-backend for other dependencies and compatible versions.

### Run Backend Server
The backend is currently deployed on Render and the link is hardcoded for API calls.

To run the backend locally:
```bash
cd movie-app/movie-app-backend
npm start
```

### Run Development Server
- Change the hardcoded Render Link {https://movie-app-2gpd.onrender.com} for API calls to local host link {'https://localhost:6090'} in the following files: movie-app/movie-app-frontend/src/pages/Home.js and movie-app/movie-app-frontend/src/pages/Favourites.js

To run the frontend locally:
```bash
cd movie-app/movie-app-frontend
npm start
```

## API Endpoints
The application uses the following custom endpoints:

### Search Movies
- Endpoint: /api/movies/search
- Method: GET
- Query Parameters: 'title'

Example Request:
```bash
http://localhost:6090/api/movies/search?title=interstellar
```

### Get Movies
- Endpoint: /api/movies/
- Method: GET

Example Request:
```bash
http://localhost:6090/api/movies/
```

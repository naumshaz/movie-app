import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favourites from './pages/Favourites';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

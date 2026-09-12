import './App.css'
import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink} from 'react-router-dom';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Cast from './components/Cast/Cast';
import Reviews from './components/Reviews/Reviews';
import Loyout from './components/Loyout/Loyout';
import Navigation from './components/Navigation/Navigation';

function App() {
  

  return (
    <>
          <Navigation/>

      <Routes>
      <Route path='/' element={<Loyout />}>
      <Route index element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:movieId" element={<MovieDetails />}/>
      </Route>
    </Routes>
    </>
  )
}

export default App

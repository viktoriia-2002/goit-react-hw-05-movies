import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';
import NavBar from './navBar';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  const [activeLocation, setActiveLocation] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('movies')) {
      setActiveLocation('movies');
    } else if (location.pathname.includes('/')) {
      setActiveLocation('home');
    }
  }, [location, setActiveLocation]);

  return (
    <>
      <NavBar activeLocation={activeLocation} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

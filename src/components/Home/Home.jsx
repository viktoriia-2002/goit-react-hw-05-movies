import { getMovies } from '../../utilities/api';
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = useCallback(async () => {
    const movieData = await getMovies();
    setMovies(movieData.results);
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  console.log(movies);

  return (
    <div>
      <h1>HOME</h1>
      <h1>Trending now</h1>
      <ul>
        {movies?.map(({ title, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

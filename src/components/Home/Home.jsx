import { getContent } from '../../utilities/api';
import { useState, useEffect, useCallback } from 'react';
import RenderMovies from '../RenderMovies/RenderMovies';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = useCallback(async () => {
    const moviesData = await getContent('movies');
    setMovies(moviesData.results);
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div>
      <h1>Trending now</h1>
      <RenderMovies movies={movies} />
    </div>
  );
};

export default Home;

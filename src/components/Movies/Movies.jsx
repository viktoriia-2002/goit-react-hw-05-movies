import React, { useState, useCallback } from 'react';
import { getContent } from '../../utilities/api';
import RenderMovies from '../RenderMovies/RenderMovies';

const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [movies, setMovies] = useState([]);

  console.log({ inputValue });
  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const fetchMovie = useCallback(async () => {
    const reviewsData = await getContent('search', null, inputValue);
    setMovies(reviewsData.results);
  }, [setMovies, inputValue]);

  const onSubmit = () => {
    fetchMovie();
    setInputValue('');
  };
  console.log({ movies }, 'ON NEW PAGE');
  return (
    <>
      <div>
        <div></div>
        Movies
        <input
          type="text"
          value={inputValue} 
          onChange={handleInputChange}
        />
        <button onClick={() => onSubmit()}>Search</button>
      </div>

      <RenderMovies movies={movies} />
    </>
  );
};

export default Movies;

import React, { useState, useCallback } from 'react';
import { getContent } from '../../utilities/api';
import RenderMovies from '../RenderMovies/RenderMovies';
import { ButtonSearch, InputSearch } from './Movies.styled';

const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [movies, setMovies] = useState([]);

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

  return (
    <>
      <div>
        Movies
        <InputSearch
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <ButtonSearch onClick={() => onSubmit()}>Search</ButtonSearch>
      </div>

      <RenderMovies movies={movies} />
    </>
  );
};

export default Movies;

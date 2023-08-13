import React, { useState, useCallback, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';

import { getContent } from '../../utilities/api';
import { CastWrapper } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const params = useParams();
  const { movieId } = params;

  const castUrl = 'http://image.tmdb.org/t/p/w200';

  const fetchMovie = useCallback(async () => {
    const movieData = await getContent('cast', movieId);
    setCast(movieData.cast);
    console.log({ movieData });
  }, [setCast, movieId]);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  console.log({ cast });

  return (
    <>
      <Outlet />
      <CastWrapper>
        {cast?.map(({ profile_path, id, name, character }) => (
          <div key={id}>
            {profile_path && (
              <img src={`${castUrl}${profile_path}`} alt="actor" />
            )}
            <li>{name}</li>
            <p>Character: {character}</p>
            <hr />
          </div>
        ))}
      </CastWrapper>
    </>
  );
};
export default Cast;

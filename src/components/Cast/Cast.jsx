import { useState, useCallback, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';

import { getContent } from '../../utilities/api';

const Cast = () => {
  const [cast, setCast] = useState({});
  const params = useParams();
  const { movieId } = params;

  const fetchMovie = useCallback(async () => {
    const movieData = await getContent('movie', movieId);
    setCast(movieData.crew);
  }, [setCast, movieId]);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  console.log({ cast });

  return (
    <>
      <Outlet />
      Cast
    </>
  );
};

export default Cast;

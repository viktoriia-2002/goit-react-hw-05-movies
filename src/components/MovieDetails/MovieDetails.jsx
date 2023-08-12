import { useCallback, useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getContent } from '../../utilities/api';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();
  console.log({ params });
  const { movieId } = params;

  const fetchMovie = useCallback(async () => {
    const movieData = await getContent('movie', movieId);
    setMovie(movieData);
  }, [setMovie, movieId]);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  console.log({ movie });

  return (
    <div>
      <div>additional information</div>
      <ul>
        <li>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;

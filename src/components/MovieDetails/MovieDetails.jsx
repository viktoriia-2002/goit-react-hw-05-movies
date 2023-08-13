import { useCallback, useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { getContent } from '../../utilities/api';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();
  console.log({ params });
  const { movieId } = params;

  const movieMainUrl = 'https://image.tmdb.org/t/p/w200';
  console.log(movieMainUrl);

  const fetchMovie = useCallback(async () => {
    const movieData = await getContent('movie', movieId);
    setMovie(movieData);
  }, [setMovie, movieId]);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  const { original_title, vote_average, overview, genres, poster_path } = movie;

  return (
    <>
      <div>
        <Link to="/">
          <button> Go back</button>
        </Link>
        {poster_path && (
          <img src={`${movieMainUrl}${poster_path}`} alt="movie" />
        )}
        <h2>{original_title}</h2>
        <p>User Score: {vote_average}%</p>
        <p>{overview}</p>
        <ul>
          {genres?.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>

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
    </>
  );
};

export default MovieDetails;

import { useCallback, useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { getContent } from '../../utilities/api';
import {
  GenresTitle,
  GenresList,
  GenresListItem,
  MovieWrapper,
  MovieWrapperDesq,
  StyledLink,
  Button,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();
  const { movieId } = params;

  const movieMainUrl = 'https://image.tmdb.org/t/p/w200';

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
      <nav>
        <StyledLink to="/">
          <Button>Go back</Button>
        </StyledLink>
      </nav>
      <MovieWrapper>
        {poster_path && (
          <img src={`${movieMainUrl}${poster_path}`} alt="movie" />
        )}
        <MovieWrapperDesq>
          <h2>{original_title}</h2>
          <p>User Score: {vote_average}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <GenresTitle>Genres</GenresTitle>
          <GenresList>
            {genres?.map(({ id, name }) => (
              <GenresListItem key={id}>{name}</GenresListItem>
            ))}
          </GenresList>
        </MovieWrapperDesq>
      </MovieWrapper>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
        <Outlet />
        {/* <Outlet /> // do not touch it */}
      </div>
    </>
  );
};

export default MovieDetails;

// import { useState, useCallback, useEffect } from 'react';
// import { useParams, Outlet } from 'react-router-dom';

// import { getContent } from '../../utilities/api';

// const Cast = () => {
//   const [cast, setCast] = useState({});
//   const params = useParams();
//   const { movieId } = params;

//   const fetchMovie = useCallback(async () => {
//     const movieData = await getContent('movie', movieId);
//     setCast(movieData.crew);
//   }, [setCast, movieId]);

//   useEffect(() => {
//     fetchMovie();
//   }, [fetchMovie]);

//   console.log({ cast });

//   return (
//     <>
//       <Outlet />
//       Cast
//     </>
//   );
// };

// export default Cast;
import React, { useState, useCallback, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';

import { getContent } from '../../utilities/api';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const params = useParams();
  const { movieId } = params;

  const castUrl = 'http://image.tmdb.org/t/p/w200';

  const fetchMovie = useCallback(async () => {
    const movieData = await getContent('movie', movieId);
    setCast(movieData.cast);
  }, [setCast, movieId]);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  console.log({ cast });

  return (
    <>
      <Outlet />
      <div>
        {cast.map(({ profile_path, id, name, character }) => (
          <div key={id}>
            {profile_path && (
              <img src={`${castUrl}${profile_path}`} alt="actor" />
            )}
            <h2>{name}</h2>
            <p>Character: {character}</p>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};
export default Cast;

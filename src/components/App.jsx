import { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './navBar';
import styled from 'styled-components';

const App = () => {
  const Home = lazy(() => import('./Home'));
  const Movies = lazy(() => import('./Movies'));
  const MovieDetails = lazy(() => import('./MovieDetails'));
  const Cast = lazy(() => import('./Cast'));
  const Reviews = lazy(() => import('./Reviews'));

  const [activeLocation, setActiveLocation] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('movies')) {
      setActiveLocation('movies');
    } else if (location.pathname.includes('/')) {
      setActiveLocation('home');
    }
  }, [location, setActiveLocation]);

  return (
    <>
      <Suspense
        fallback={
          <LoaderWrapper>
            <div>Loading...</div>
          </LoaderWrapper>
        }
      >
        <NavBar activeLocation={activeLocation} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;

const LoaderWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movies" element={<Movies />}></Route>
      <Route path="/movies/:movieId" element={<MovieDetails />}></Route>
      <Route path="/movies/:movieId/cast" element={<Cast />}></Route>
      <Route path="/movies/:movieId/reviews " element={<Reviews />}></Route>
    </Routes>
  );
};
export default App;

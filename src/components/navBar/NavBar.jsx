import { Link } from 'react-router-dom';
import { Button } from './NavBar.styled';

const NavBar = ({ activeLocation }) => {
  const primaryHome = activeLocation === 'home';
  const primaryMovie = activeLocation === 'movies';

  return (
    <>
      <header>
        <Link to="/">
          <Button primary={primaryHome}>Home</Button>
        </Link>
        <Link to="/movies">
          <Button primary={primaryMovie}>Movie</Button>
        </Link>
      </header>
    </>
  );
};

export default NavBar;

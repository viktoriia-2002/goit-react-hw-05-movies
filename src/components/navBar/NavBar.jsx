// const NavBar = ({ activeLocation }) => {
//   const homeButtonClass = activeLocation === 'home' ? 'btn btn-primary' : '';
//   const moviesButtonClass =
//     activeLocation === 'movies' ? 'btn btn-primary' : '';

//   console.log();
//   return (
//     <>

//       <button type="button" className={`btn ${homeButtonClass}`}>

//         Home
//       </button>
//       <button type="button" className={`btn ${moviesButtonClass}`}>
//         Movies
//       </button>
//     </>
//   );
// };

// export default NavBar;

import { Link } from 'react-router-dom';

const NavBar = ({ activeLocation }) => {
  const homeButtonClass = activeLocation === 'home' ? 'btn btn-primary' : '';
  const moviesButtonClass =
    activeLocation === 'movies' ? 'btn btn-primary' : '';

  console.log();
  return (
    <>
      <Link to="/">
        {' '}
        <button type="button" className={`btn ${homeButtonClass}`}>
          Home
        </button>
      </Link>
      <Link to="/movies">
        <button type="button" className={`btn ${moviesButtonClass}`}>
          Movies
        </button>
      </Link>
    </>
  );
};

export default NavBar;

// const apiUrl = 'https://pixabay.com/api/';
// const apiKey = '36126930-7b2057d774b58ed23a3e8d721';
const token =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjZiNDliNjNhM2EyZjQxOWJhOWU1ZTNhZTAzY2U0MyIsInN1YiI6IjY0ZDZhZTE1ZDA1MWQ5MDBlNWRmYmQxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.STU71wRiOWoP13PQY4J8N29erQX3VqmOXPZFt2eD6VU';

const getUrl = (type, movieId, searchItem) => {
  let url = '';
  switch (type) {
    case 'movies':
      url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
      break;
    case 'movie':
      url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;

      break;
    case 'reviews':
      url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`;

      break;
    case 'search':
      url = `https://api.themoviedb.org/3/search/movie?query=${searchItem}&include_adult=false&language=en-US&page=1`;
      break;
    default:
  }
  return url;
};

export const getContent = async (type, movieId, searchItem) => {
  const url = getUrl(type, movieId, searchItem);

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });

    return await response.json();
  } catch (error) {
    console.error('Error:', error);
  }
};

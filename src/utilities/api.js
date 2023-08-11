// const apiUrl = 'https://pixabay.com/api/';
// const apiKey = '36126930-7b2057d774b58ed23a3e8d721';
const token =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNjZiNDliNjNhM2EyZjQxOWJhOWU1ZTNhZTAzY2U0MyIsInN1YiI6IjY0ZDZhZTE1ZDA1MWQ5MDBlNWRmYmQxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.STU71wRiOWoP13PQY4J8N29erQX3VqmOXPZFt2eD6VU';

const url =
  'https://try.readme.io/https://api.themoviedb.org/3/trending/all/day?language=en-US';

export async function getMovies() {
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
}

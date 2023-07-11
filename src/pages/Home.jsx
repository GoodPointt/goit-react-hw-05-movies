import { OPTIONS } from 'api/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          'https://api.themoviedb.org/3/trending/all/day?language=en-US',
          OPTIONS
        );
        if (res.ok) {
          return res.json();
        }
        throw new Error('Opps!');
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchMovies().then(res => setMovies(res.results));
  }, [movies]);

  return (
    <ul>
      {movies &&
        movies.map(({ title, id }) => (
          <Link key={id} to={`/movies/${id}`}>
            <li>{title}</li>
          </Link>
        ))}
    </ul>
  );
};

export default Home;

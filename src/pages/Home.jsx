import { OPTIONS } from 'api/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = ({ setIsLoading }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          'https://api.themoviedb.org/3/trending/all/day?language=en-US',
          OPTIONS
        );
        if (res.ok) {
          const data = await res.json();
          setMovies(data.results);
        } else {
          throw new Error('Oops!');
        }
      } catch (error) {
        toast.error(`Oops! something go wrong, please try again later 😒`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [setIsLoading]);

  return (
    <ul>
      {movies.map(({ title, id }) => (
        <Link key={id} to={`/movies/${id}`}>
          <li>{title}</li>
        </Link>
      ))}
    </ul>
  );
};

export default Home;

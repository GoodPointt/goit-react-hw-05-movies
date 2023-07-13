import { OPTIONS } from 'api/api';
import { StyledLinkHome } from 'components/Styled';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = ({ setIsLoading }) => {
  const [movies, setMovies] = useState([]);

  const location = useLocation();

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
        <StyledLinkHome
          key={id}
          to={`/movies/${id}`}
          state={{ from: location }}
        >
          <li>{title}</li>
        </StyledLinkHome>
      ))}
    </ul>
  );
};

export default Home;

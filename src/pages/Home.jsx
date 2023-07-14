import { OPTIONS } from 'api/api';
import {
  StyledLinkHome,
  StyledList,
  StyledListItem,
  StyledListItemImg,
} from 'components/Styled';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import NoImg from '../img/no-image.png';

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
    <>
      {movies?.length > 0 && (
        <StyledList>
          {movies.map(
            ({ id, release_date, title, name, backdrop_path, poster_path }) => (
              <StyledListItem key={id}>
                <StyledLinkHome to={`/movies/${id}`} state={{ from: location }}>
                  <StyledListItemImg
                    loading="lazy"
                    src={
                      poster_path || backdrop_path
                        ? `https://image.tmdb.org/t/p/original${
                            poster_path || backdrop_path
                          }`
                        : NoImg
                    }
                    alt={title || name}
                    width={200}
                  />
                  <div className="content">
                    <h4 className="title">
                      {title || name} (
                      {release_date
                        ? String(release_date).substring(0, 4)
                        : 'coming soon'}
                      )
                    </h4>
                  </div>
                </StyledLinkHome>
              </StyledListItem>
            )
          )}
        </StyledList>
      )}
    </>
  );
};

export default Home;

import { OPTIONS } from 'api/api';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import NoImg from '../img/no-image.png';
import { toast } from 'react-toastify';
import {
  SearchBtn,
  StyledInput,
  StyledLinkHome,
  StyledLinkMovie,
  StyledList,
  StyledListItem,
  StyledListItemImg,
} from 'components/Styled';

const Movies = ({ setIsLoading }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);

  const searchQuery = searchParams.get('search') ?? '';

  const location = useLocation();

  useEffect(() => {
    if (!searchQuery) return;

    const fetchSearchMovies = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
          OPTIONS
        );
        if (res.ok) {
          const data = await res.json();
          return data;
        }
        throw new Error('Opps!');
      } catch (error) {
        toast.error(
          `${error.message} Something go wrong, please try again later 😒`
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearchMovies().then(res => {
      if (res?.results.length === 0) {
        setSearchParams({});
        setSearchResults([]);
        return toast.warn(`Nothing found matching "${searchQuery}"`);
      }
      return setSearchResults(res?.results);
    });
  }, [searchQuery, setIsLoading, setSearchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (e.target.elements[0].value.trim() !== '') {
      setSearchParams({ search: e.target.elements[0].value });
    } else {
      setSearchParams({});
      setSearchResults([]);
      toast.info('You should enter search query first!');
    }

    form.reset();
  };
  return (
    <div>
      <StyledLinkMovie to="/">Back to previous page</StyledLinkMovie>
      <form onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="Enter movie to search..."
          autoFocus
          name="search"
        />
        <SearchBtn type="submit">Search</SearchBtn>
      </form>

      {searchResults?.length > 0 && (
        <StyledList>
          {searchResults.map(
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
    </div>
  );
};

export default Movies;

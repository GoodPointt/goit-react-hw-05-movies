import { OPTIONS } from 'api/api';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import NoImg from '../img/no-image.png';
import { toast } from 'react-toastify';

const Movies = ({ setIsLoading }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);

  const searchQuery = searchParams.get('search') ?? '';

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
    e.target.elements[0].value !== ''
      ? setSearchParams({ search: e.target.elements[0].value })
      : setSearchParams({});
    form.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter movie to search..."
          autoFocus
          name="search"
        />
        <button type="submit">Search</button>
      </form>

      {searchResults?.length > 0 && (
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: 15 }}>
          {searchResults.map(
            ({ id, release_date, title, name, backdrop_path, poster_path }) => (
              <Link key={id} to={`/movies/${id}`}>
                <img
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
                <h4 style={{ maxWidth: 200 }}>{title || name}</h4>
                {String(release_date).substring(0, 4)}
              </Link>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default Movies;

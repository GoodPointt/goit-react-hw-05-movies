import { OPTIONS } from 'api/api';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
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

    fetchMovieDetails().then(res => setMovie(res));
  }, [movieId]);

  return (
    <>
      <a href="/">Go back</a>
      {movie && (
        <>
          <div style={{ display: 'flex', gap: 20 }}>
            <img
              loading="lazy"
              src={`https://image.tmdb.org/t/p/original${
                movie.poster_path || movie.backdrop_path
              }`}
              alt={movie.title || movie.name}
              width={300}
            />
            <div>
              <h2>
                {movie.title || movie.name}{' '}
                <span>({movie.release_date.substring(0, 4)})</span>
              </h2>
              <h4>Raiting:</h4>
              <p>{movie.vote_average.toFixed()}/10</p>
              <h4>Genres:</h4>
              <p>
                {movie.genres.reduce((acc, { name }) => acc + ' ' + name, '')}
              </p>
              <h4>Overview:</h4>
              <p>{movie.overview}</p>
            </div>
          </div>
        </>
      )}

      <nav>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default MovieDetails;

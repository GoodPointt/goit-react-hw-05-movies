import { OPTIONS } from 'api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NoImg from '../../img/no-image.png';

const Cast = ({ setIsLoading }) => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCredits = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
          OPTIONS
        );
        if (res.ok) {
          const data = await res.json();
          return data;
        }
        throw new Error('Opps!');
      } catch (error) {
        console.log(`Oops! ${error.message} 😒`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieCredits().then(res => setCredits(res.cast));
  }, [movieId, setIsLoading]);

  return (
    <ul style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
      {credits?.length > 0 ? (
        credits.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <img
              loading="lazy"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/original${profile_path}`
                  : NoImg
              }
              alt={name}
              width={200}
            />
            <h4>{name}</h4>
            <p>character:</p>
            <h5>{character}</h5>
          </li>
        ))
      ) : (
        <p>We don't have any casts for this movie 😒</p>
      )}
    </ul>
  );
};

export default Cast;

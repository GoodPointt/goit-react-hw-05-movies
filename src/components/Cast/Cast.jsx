import { OPTIONS } from 'api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NoImg from '../../img/no-image.png';

const Cast = () => {
  const [credits, setCredits] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
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

    fetchMovieCredits().then(res => setCredits(res.cast));
  }, [movieId]);

  return (
    <ul style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
      {credits ? (
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
        <p>We don't have any reviews for this movie, sorry 😒</p>
      )}
    </ul>
  );
};

export default Cast;

import { OPTIONS } from 'api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
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

    fetchMovieCredits().then(res => setReviews(res.results));
  }, [movieId]);

  return (
    <ul>
      {reviews &&
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h4 style={{ fontSize: 16, marginTop: 10 }}>{author}</h4>
            <p>{content}</p>
          </li>
        ))}
    </ul>
  );
};

export default Reviews;

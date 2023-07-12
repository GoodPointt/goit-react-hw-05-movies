import { OPTIONS } from 'api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Reviews = ({ setIsLoading }) => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCredits = async () => {
      setIsLoading(true);
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
        toast.error(`Oops! Somethinig go wrong, try again later 😒`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieCredits().then(res => setReviews(res.results));
  }, [movieId, setIsLoading]);

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h4 style={{ fontSize: 16, marginTop: 10 }}>{author}</h4>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie 😒</p>
      )}
    </ul>
  );
};

export default Reviews;

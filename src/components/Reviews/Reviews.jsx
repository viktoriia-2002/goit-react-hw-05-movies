import { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getContent } from '../../utilities/api';
const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const params = useParams();
  const { movieId } = params;

  const fetchMovie = useCallback(async () => {
    const reviewsData = await getContent('reviews', movieId);
    setReviews(reviewsData.results);
  }, [setReviews, movieId]);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  console.log({ reviews });

  return <div>Reviews</div>;
};

export default Reviews;

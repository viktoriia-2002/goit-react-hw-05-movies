import { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getContent } from '../../utilities/api';
import { ReviewsAuthor } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const params = useParams();
  const { movieId } = params;

  const fetchMovie = useCallback(async () => {
    const reviewsData = await getContent('reviews', movieId);
    setReviews(reviewsData.results);
  }, [setReviews, movieId]);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  return (
    <>
      <div>
        {reviews.length ? (
          reviews.map(({ author, content, id }) => (
            <ul>
              <ReviewsAuthor key={id}>Author: {author}</ReviewsAuthor>
              <p> {content}</p>
            </ul>
          ))
        ) : (
          <div>We don't have any reviews for this movie.</div>
        )}
      </div>
      ;
    </>
  );
};
export default Reviews;

// author

// content

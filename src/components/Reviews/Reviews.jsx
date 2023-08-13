import { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getContent } from '../../utilities/api';
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
            <div key={id}>
              Author: {author}
              <div> {content}</div>
            </div>
          ))
        ) : (
          <div>No reviews</div>
        )}
      </div>
      ;
    </>
  );
};
export default Reviews;

// author

// content

import React from "react";
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

const GuestReviewsList = ({reviews, loading}) => {
    if(loading){
      return <Loading />
    }
  
    return <ul
      style={{display: 'flex', flexDirection: 'column', padding: '0%', margin: '0%'}}>
      {reviews.map(review => (
        <Link to={{
          pathname: `/guest/reviews/${review.id}`,
          state: {
            reviewId: review.id
          }
        }} style={{textDecoration: 'none'}} query={review.id}>
          <li key={review.id} className="review-list-item">
          {review.listingTitle}
          </li>
        </Link>
      ))}
    </ul>
  }

export default GuestReviewsList;
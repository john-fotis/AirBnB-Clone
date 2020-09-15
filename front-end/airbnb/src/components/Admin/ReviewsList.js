import React from "react";
import { Link } from 'react-router-dom';

const ReviewsList = ({reviews, loading}) => {
    if(loading){
      return <h2>Loading...</h2>
    }
  
    return <ul
      style={{display: 'flex', flexDirection: 'column', padding: '0%', margin: '0%'}}>
      {reviews.map(review => (
        <Link to={{
          pathname: `/admin/reviews/${review.id}`,
          state: {
            reviewId: review.id
          }
        }} style={{textDecoration: 'none'}} query={review.id}>
          
          <li key={review.id} className="listing-list-item">
            {review.id}
          </li>
        </Link>
  
      ))}
    </ul>
  }

export default ReviewsList;
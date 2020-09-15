import React from "react";
import { Link } from 'react-router-dom';

const GuestReviewsList = ({reviews, loading}) => {
    if(loading){
      return <h2>Loading...</h2>
    }
  
    return <ul
      style={{display: 'flex', flexDirection: 'column', padding: '0%', margin: '0%'}}>
      {reviews.map(review => (
        <Link to={{
          pathname: `/guest/reviews/${review.id}`,
          state: {
            listingId: review.id
          }
        }} style={{textDecoration: 'none'}} query={review.id}>
          <li key={review.id} className="listing-list-item">
          {review.listingTitle}
          </li>
        </Link>
  
      ))}
    </ul>
  }

export default GuestReviewsList;
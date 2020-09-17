import React from "react";
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

const ReviewsList = ({reviews, loading}) => {
    if(loading){
      return <Loading />
    }
  
    return(
      <div className="container">
        <ul style={{display: 'flex', flexDirection: 'column', padding: '0%', margin: '0%'}}>
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
      </div>
    )
  }

export default ReviewsList;
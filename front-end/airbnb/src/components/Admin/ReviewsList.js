import React from "react";
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

const ReviewsList = ({reviews, loading}) => {
    if(loading){
      return <Loading />
    }
  
    return(
      <div className="container">
        <ul style={{display: 'flex', flexDirection: 'column', padding: '0%', margin: '5% 0%'}}>
          {reviews.map(review => (
            <li key={review.id} className="listing-list-item" style={{textAlign: 'center'}}>
              <Link to={{
                pathname: `/admin/reviews/${review.id}`,
                state: {
                  reviewId: review.id
                }
              }} style={{textDecoration: 'none'}} query={review.id}>
                  {review.id}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }

export default ReviewsList;
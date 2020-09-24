import React from "react";
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

const ListingsList = ({listings, loading}) => {
    if(loading){
      return <Loading />
    }
  
    return(
      <div className="container">
        <ul style={{display: 'flex', flexDirection: 'column', padding: '0%', margin: '5% 0%'}}>
          {listings.map(listing => (
            <li key={listing.id} className="listing-list-item" style={{textAlign: 'center'}}>
              <Link to={{
                pathname: `/admin/listings/${listing.id}`,
                state: {
                  listingId: listing.id
                }
              }} style={{textDecoration: 'none'}} query={listing.id}>
                
                {listing.title}, {listing.id}
              </Link>
            </li>      
          ))}
        </ul>
      </div>
    )
  }

export default ListingsList;
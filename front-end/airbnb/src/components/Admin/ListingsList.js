import React from "react";
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

const ListingsList = ({listings, loading}) => {
    if(loading){
      return <Loading />
    }
  
    return(
      <div className="container">
        <ul style={{display: 'flex', flexDirection: 'column', padding: '0%', margin: '0%'}}>
          {listings.map(listing => (
            <Link to={{
              pathname: `/admin/listings/${listing.id}`,
              state: {
                listingId: listing.id
              }
            }} style={{textDecoration: 'none'}} query={listing.id}>
              
              <li key={listing.id} className="listing-list-item">
              {listing.title}, {listing.id}
              </li>
            </Link>
      
          ))}
        </ul>
      </div>
    )
  }

export default ListingsList;
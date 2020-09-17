import React from "react";
import { Link } from 'react-router-dom';

const HostListingsList = ({listings, loading}) => {
    if(loading){
      return <h2>Loading...</h2>
    }
  
    return <ul
      style={{display: 'flex', flexDirection: 'column', padding: '0%', margin: '0%'}}>
      {listings.map(listing => (
        <Link to={{
          pathname: `/host/listings/${listing.id}`,
          state: {
            listingId: listing.id
          }
        }} style={{textDecoration: 'none'}} query={listing.id}>
          <li key={listing.id} className="listing-list-item">
          {listing.title}
          </li>
        </Link>
  
      ))}
    </ul>
  }

export default HostListingsList;
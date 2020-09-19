import React from "react";
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

const HostListingsList = ({listings, loading}) => {
    if(loading){
      return <Loading />
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
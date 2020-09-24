import React from "react";
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

const HostListingsList = ({listings, loading}) => {
    if(loading){
      return <Loading />
    }
  
    return (
      <ul style={{display: 'flex', flexDirection: 'column', padding: '0%', margin: '0%'}}>
        {listings.map(listing => (
          <li key={listing.id} style={{textAlign: 'center'}}>
            <Link to={{
            pathname: `/host/listings/${listing.id}`,
            state: {
              listingId: listing.id
            }
          }} style={{textDecoration: 'none'}} query={listing.id}>
            {listing.title}
            </Link>
          </li>
        ))}
      </ul>
    )
  }

export default HostListingsList;
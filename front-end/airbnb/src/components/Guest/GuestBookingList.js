import React from "react";
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

const GuestBookingList = ({bookings, loading}) => {
    if(loading){
      return <Loading />
    }
  
    return(
      <ul style={{display: 'flex', flexDirection: 'column', padding: '0%', margin: '0%'}}>
        {bookings.map(booking => (
          <li key={booking.id} className="booking-list-item">
            <Link to={{
              pathname: `/guest/bookings/${booking.id}`,
              state: {
                booking: booking
              }
              }} style={{textDecoration: 'none'}} query={booking.id}>
              {booking.listingTitle}
            </Link>
          </li>
          ))
        }
    </ul>
    ) 
  }

export default GuestBookingList;
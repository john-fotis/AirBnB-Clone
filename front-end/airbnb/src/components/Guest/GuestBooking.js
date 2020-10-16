import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import StarTwoToneIcon from '@material-ui/icons/StarTwoTone';

class GuestBooking extends Component {
  render(){
    const booking = this.props.location.state.booking;

    return (
      <div className="booking-view-guest" style={{width: '100%', padding: '5% 15%', margin: '3% 0%', backgroundColor: '#ff9', textAlign: 'center', border: 'solid 3px purple'}}>
        <div className='form-inner'>
          <h1>Booking Details:</h1>
          <h3><br />Listing:</h3>
          <h4>{booking.listingTitle}</h4>
          <h3><br />When:</h3>
          <h4>{booking.date}</h4>
          <Link to={{
              pathname: `/guest/reviews/`,
              state: {
                booking: booking
              }
              }} style={{textDecoration: 'none'}} query={booking.id}>
              Rate <StarTwoToneIcon fontSize='large' />
          </Link>
        </div>
      </div>
    )
  }
}

export default GuestBooking;
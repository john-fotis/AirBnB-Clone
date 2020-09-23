import React, {Component} from 'react';

class GuestBooking extends Component {
  render(){
    const booking = this.props.location.state.booking;

    return (
      <div className="booking-view-guest" style={{width: '100%', padding: '5% 15%', marginTop: '10%', backgroundColor: '#ff9', textAlign: 'center', border: 'solid 3px purple'}}>
        <div className='form-inner'>
          <h1>Booking Details:</h1>
          <h3><br />Listing: <h4>{booking.listingTitle}</h4></h3>
          <h3><br />When: {booking.date}</h3>
        </div>
      </div>
    )
  }
}

export default GuestBooking;
import React, { Component } from "react";
import GuestBookingList from "./GuestBookingList";

import UserService from "../../_services/user.service";

class GuestBoard extends Component {
  constructor(props) {
    super();

    this.state = {
      bookings: [],
      loading: false
    };
  }

  componentDidMount() {
    this.setState({loading: true})
    UserService.getGuestBoard()
    .then(
      response => {
        this.setState({
          bookings: response.data,
          loading: false
        });
      }
    )
    .catch(
      error => {
        this.setState({
          bookings:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        <main className="container" style={{width: '100%', padding: '5%', marginTop: '10%', backgroundColor: '#ff9', textAlign: 'center', border: 'solid 3px purple'}}>
          <h2>My bookings</h2>
          <GuestBookingList bookings={this.state.bookings} loading={this.state.loading}/>
        </main>
      </React.Fragment>
    );
  }
}

export default GuestBoard;
import React, { Component } from "react";
import GuestReviewsList from "./GuestReviewsList";

import UserService from "../../_services/user.service";

class GuestBoard extends Component {
  constructor(props) {
    super();

    this.state = {
      reviews: [],
      loading: false
    };
  }

  componentDidMount() {
    this.setState({loading: true})
    UserService.getGuestBoard()
    .then(
      response => {
        this.setState({
          reviews: response.data,
          loading: false
        });
        console.log(this.state.reviews)
      }
    )
    .catch(
      error => {
        this.setState({
          reviews:
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
        <main className="container" style={{width: '100%', padding: '5%', marginTop: '10%', backgroundColor: '#ff9', textAlign: 'center'}}>
          <h2>My reviews</h2>
          <GuestReviewsList reviews={this.state.reviews} loading={this.state.loading}/>
        </main>
      </React.Fragment>
    );
  }
}

export default GuestBoard;
import React, { Component } from "react";
import GuestReviewsList from "./GuestReviewsList";

import UserService from "../../_services/user.service";

class GuestBoard extends Component {
  constructor(props) {
    super();

    this.state = {
      content: [],
      loading: false
    };
  }

  componentDidMount() {
    this.setState({loading: true})
    UserService.getGuestBoard()
    .then(
      response => {
        this.setState({
          content: response.data,
          loading: false
        });
      }
    )
    .catch(
      error => {
        this.setState({
          content:
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
        <main className="container" style={{width: '100%', padding: '5%', marginTop: '10%', backgroundColor: '#ff9'}}>
          <h2>My reviews</h2>
          <GuestReviewsList reviews={this.state.content} loading={this.state.loading}/>
        </main>
      </React.Fragment>
    );
  }
}

export default GuestBoard;
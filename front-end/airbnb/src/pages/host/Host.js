import React, { Component } from "react";

import UserService from "../../_services/user.service";
// import Listing from '../../components/Listings/Listing/Listing'
import CreateListing from "../../components/Listings/Create/ListingCreate";

class HostBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getHostBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
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
      <div className="container">
        {/* <header className="jumbotron">
          <h3>Hello</h3>
          <Listing />
        </header> */}
        <CreateListing />
      </div>
    );
  }
}

export default HostBoard;
import React, { Component } from "react";
import HostListingsList from "./HostListingsList";

import UserService from "../../_services/user.service";

class HostBoard extends Component {
  constructor(props) {
    super();

    this.state = {
      content: [],
      loading: false
    };
  }

  componentDidMount() {
    this.setState({loading: true})
    UserService.getHostBoard()
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
        <main className="container" 
          style={{width: '100%', padding: '5%', marginTop: '10%',
          marginBottom: '10%', backgroundColor: '#ff9', border: 'solid 3px purple'}}>
          <h2 style={{textAlign: 'center'}}>My listings</h2>
          <HostListingsList listings={this.state.content} loading={this.state.loading}/>
        </main>
      </React.Fragment>
    );
  }
}

export default HostBoard;
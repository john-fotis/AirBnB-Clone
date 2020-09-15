import React, { Component } from "react";
import UserService from "../../_services/user.service";
import ListingsList from './ListingsList';

class AdminListings extends Component {
  constructor(props) {
    super();

    this.state = {
      content: [],
      loading: false
    };
  }

  componentDidMount() {
    this.setState({loading: true})
    UserService.getAdminListings()
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
        <div className="container" style={{width: '100%', padding: '5%', marginTop: '10%', backgroundColor: '#ff9'}}>

          <div className="content">
            <ListingsList listings={this.state.content} loading={this.state.loading}/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AdminListings;
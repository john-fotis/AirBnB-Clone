import React, {Component} from 'react';
import UserService from '../../_services/user.service';

class ListingDetails extends Component {
  state = {
    listing: {},
    message: ''
  }

  componentDidMount(){
    const {listingId} = this.props.location.state;
    UserService.getCurrentListing(listingId)
    .then(response=>{
      this.setState({
        listing: response.data
      });
    })
    .catch(
      error => {
        const resMessage =
          (error.response &&
          error.response.data &&
          error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          successful: false,
          message: resMessage
        });
      }
    )
  }

  render(){
    return (
      <div className="user-view-admin" style={{width: '100%', padding: '5%', marginTop: '10%', backgroundColor: '#ff9'}}>
        <ul style = {{display: 'flex', flexDirection: 'column'}}>
          <li><img src={this.state.image} alt='img' /></li>
          <li><h2>Title: {this.state.listing.title} </h2></li>
          <li><h4><strong>ID: {this.state.listing.id}</strong></h4></li>
          <li><h4><strong>Country: {this.state.listing.country}</strong></h4></li>
          <li><h4><strong>City: {this.state.listing.city}</strong></h4></li>
          <li><h4><strong>Postal Code: {this.state.listing.postalCode}</strong></h4></li>
          <li><h4>Rest data:</h4></li>
          <li>Description: {this.state.listing.description}</li>
          <li>Transportation: {this.state.listing.transportation} </li>
          <li>Type: {this.state.listing.type} </li>
        </ul>
      </div>
    )
  }
}

export default ListingDetails;
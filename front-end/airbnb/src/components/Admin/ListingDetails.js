import React, {Component} from 'react';
import UserService from '../../_services/user.service';
import {Carousel} from 'react-responsive-carousel';

class ListingDetails extends Component {
  state = {
    listing: {},
    images: '',
    message: ''
  }

  componentDidMount(){
    const {listingId} = this.props.location.state;
    UserService.getCurrentListing(listingId)
    .then(response=>{
      this.setState({
        listing: response.data,
      });
      if(this.state.listing.images){
        this.setState({
          images: response.data.images
        })
      }
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
    const images = this.state.images;

    if(!images) return <h2>Failed to load images</h2>
    
    return (
      <div className="user-view-admin" style={{width: '100%', padding: '5%', margin: '5% 0%', backgroundColor: '#ff9'}}>
        {this.state.images && (
          <Carousel autoPlay= 'true' infiniteLoop='true' showArrows='true'>{
            images.map( image => {
            return <div key={image.id}>
              <img src={ 'data:image/jpg;base64,' + image.picByte } alt='test' />
              <p className="legend">{ image.name }</p>
            </div>
            })
          }
          </Carousel>
        )}
        <ul style = {{display: 'flex', flexDirection: 'column'}}>
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
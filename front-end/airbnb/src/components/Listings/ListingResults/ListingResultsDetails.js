import React, {Component} from 'react';
import UserService from '../../../_services/user.service';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class ListingResultsDetails extends Component {
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
      <div className="listing-overview" style={{width: '100%', padding: '5% 15%', marginTop: '5%', backgroundColor: '#ffa'}}>
        <Carousel autoPlay= 'true' infiniteLoop='true' showArrows='true'>{
          images.map( image => {
          return <div>
            <img src={ 'data:image/jpg;base64,' + image.picByte } alt='test' />
            <p className="legend">{ image.name }</p>
          </div>
          })
        }
        </Carousel>
        
        <ul style={{display: 'inline-block'}}>

          <li><h1>Listing Details:</h1></li>
          <li><h3>Title: {this.state.listing.title}</h3></li>
          <li><h3>Country: {this.state.listing.country}</h3></li>
          <li><h3>City: {this.state.listing.city}</h3></li>
          <li><h3>Neighborhood: {this.state.listing.neighborhood}</h3></li>
          <li><h3>Address: {this.state.listing.address}</h3></li>                
          <li><h3>Postal Code: {this.state.listing.postalCode}</h3></li>                
          <li><h3>Description: {this.state.listing.description}</h3></li>                <li><h3>Transportation: {this.state.listing.transportation}</h3></li>                
          <li><h3>Category: {((this.state.listing.type).replace('_', ' ').toLowerCase())}</h3></li>                
          <li><h3>Rooms: {this.state.listing.numOfRooms}</h3></li>                
          <li><h3>Beds: {this.state.listing.numOfBeds}</h3></li>
          <li><h3>WC: {this.state.listing.numOfWc}</h3></li>                
          <li><h3>Minimum rent days: {this.state.listing.minRentDays}</h3></li>                
          <li><h3>Maximum guests: {this.state.listing.maxGuests}</h3></li>                
          <li><h3>Minimum cost: {this.state.listing.minCost}</h3></li>                
          <li><h3>Cost per extra guest: {this.state.listing.costPerExtraGuest}</h3></li>
          <li><h3>Square footage: {this.state.listing.squareFootage}</h3></li>                <li><h3>Availability: From {this.state.listing.startDate} to {this.state.listing.endDate}</h3></li>                
          <li><h3>Extras: {this.state.listing.number}</h3></li>
          <ul style={{display: 'inline-block'}}>
            <li>Living Room: {this.state.listing.livingRoom ? 'yes' : 'no'}</li>
            <li>Kitchen: {this.state.listing.kitchen ? 'yes' : 'no'}</li>
            <li>Parking: {this.state.listing.parking ? 'yes' : 'no'}</li>
            <li>Elevator: {this.state.listing.elevator ? 'yes' : 'no'}</li>
            <li>Smoking: {this.state.listing.smoking ? 'yes' : 'no'}</li>
            <li>TV: {this.state.listing.tv ? 'yes' : 'no'}</li>
            <li>AC: {this.state.listing.ac ? 'yes' : 'no'}</li>
            <li>Heating: {this.state.listing.heating ? 'yes' : 'no'}</li>
            <li>Wi-Fi: {this.state.listing.wifi ? 'yes' : 'no'}</li>
            <li>Parties: {this.state.listing.parties ? 'yes' : 'no'}</li>
            <li>Animals: {this.state.listing.animals ? 'yes' : 'no'}</li>
          </ul>
        </ul>
      </div>
    )
  }
}

export default ListingResultsDetails;
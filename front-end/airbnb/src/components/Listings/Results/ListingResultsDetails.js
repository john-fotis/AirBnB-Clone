import React, {Component} from 'react';
import UserService from '../../../_services/user.service';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Loading from '../../Loading/Loading';
import OpenStreetMap from '../../Map/OpenStreetMap';
import {Link} from 'react-router-dom';
import {history} from '../../../_helpers/history';
import MessageIcon from '@material-ui/icons/Message';

class ListingResultsDetails extends Component {
  state = {
    listing: {},
    images: '',
    id: null, 
    startDate: null,
    endDate: null,
    price: null,
    message: '',
    book: false
  }

  componentDidMount(){
    const {listingId} = this.props.location.state;

    UserService.getCurrentListing(listingId)
    .then(response=>{
      this.setState({
        listing: response.data,
        id: listingId,
        startDate: this.props.location.state.startDate,
        endDate: this.props.location.state.endDate,
        price: this.props.location.state.price
      });
      if(this.state.listing.images){
        this.setState({
          images: response.data.images
        });
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

  handleBooking = (e) => {
    e.preventDefault();

    UserService.bookListing(
      this.state.id,
      this.state.startDate,
      this.state.endDate
    )
    .then(response => {
      if(response.status === 200){
        this.props.history.push('/guest/bookings');
        alert("Your booking was completed successfully!")
      }
    })
    .catch(error => {
      alert('You need to login as guest!');
      history.push('/login');
      window.location.reload();
    })
  }

  render(){
    const images = this.state.images;

    if(!images) return <Loading />

    return (
      <div className="listing-overview" style={{}}>
        <div className="overview-inner">
          <h1>{this.state.listing.title}</h1>
          {this.state.listing.images[0] && (
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
          <ul style={{display: 'flex'}}>
            <ul className="listing-results-details"
              style={{position: 'relative', display: 'inline-block', width: '50%'}}>
              <li><h3 style={{color: 'black'}}><br />Address:</h3></li>
              <li>
                <h4>{this.state.listing.address}, {' '}
                {this.state.listing.neighborhood}, {' '}
                {this.state.listing.city}, {' '}
                {this.state.listing.country}</h4>
              </li>     
              <li><h3 style={{color: 'black'}}><br />Category:</h3></li>
              <li>
                <h4>{((this.state.listing.type).replace('_', ' ').toLowerCase())}</h4>
              </li>             
              <li><h3><br />Rooms: {this.state.listing.numOfRooms}</h3></li>                
              <li><h3>Beds: {this.state.listing.numOfBeds}</h3></li>
              <li><h3>WC: {this.state.listing.numOfWc}</h3></li>                
              <li><h3>Square footage: {this.state.listing.squareFootage}&#13217;</h3></li>             
              <li><h3 style={{color: 'black'}}><br />Available features: {this.state.listing.number}</h3></li>
              <ul style={{display: 'inline-block'}}>
                {this.state.listing.livingRoom &&(<li><h5>Living Room &#10004;</h5></li>)}
                {this.state.listing.kitchen &&(<li><h5>Kitchen &#10004;</h5></li>)}
                {this.state.listing.parking &&(<li><h5>Parking &#10004;</h5></li>)}
                {this.state.listing.elevator &&(<li><h5>Elevator &#10004;</h5></li>)}
                {this.state.listing.smoking &&(<li><h5>Smoking &#10004;</h5></li>)}
                {this.state.listing.tv &&(<li><h5>TV &#10004;</h5></li>)}
                {this.state.listing.ac &&(<li><h5>AC &#10004;</h5></li>)}
                {this.state.listing.heating &&(<li><h5>Heating &#10004;</h5></li>)}
                {this.state.listing.wifi &&(<li><h5>WiFi &#10004;</h5></li>)}
                {this.state.listing.parties &&(<li><h5>Parties &#10004;</h5></li>)}
                {this.state.listing.animals &&(<li><h5>Animals &#10004;</h5></li>)}
              </ul>
              <li><h3 style={{color: 'black'}}><br />Description:</h3></li>
              <li><h5> {this.state.listing.description}</h5></li>
              <li><h3 style={{color: 'black'}}><br />Price based on your search:</h3></li>
              <li><h4>{this.state.price}€/day</h4></li>
              <li style={{margin: '5% 0%', width: '100%'}}>
                {!this.state.book && (
                  <button 
                  style = {{marginLeft: 'auto',
                    marginRight: 'auto', width: '60%', height: '65px'}} 
                  type = "submit" 
                  className="submit-button btn btn-primary btn-block"
                  onClick = {() => {this.setState({book: true})}}>
                    Book now
                </button>
                )}
                {this.state.book && (
                  <div className="booking-dialog" style={{height: '65px'}}>
                    <button 
                      style = {{marginTop: '5%', marginLeft: 'auto',
                        marginRight: 'auto', width: '40%', height: '45px'}} 
                      type = "submit" 
                      className="submit-button btn btn-danger btn-block"
                      onClick = {() => {this.setState({book: false})}}>
                        Cancel
                    </button>
                    <button 
                      style = {{marginTop: '5%', marginLeft: 'auto',
                      marginRight: 'auto', width: '40%', height: '45px'}} 
                      type = "submit" 
                      className="submit-button btn btn-primary btn-block"
                      onClick = {this.handleBooking}>
                        Confirm
                    </button>
                  </div>
                )}
              </li>
            </ul>
            <li style={{width: '50%'}}>
              <ul className="listing-access" style={{float: 'right', display: 'inline-block'}}>
                <li><OpenStreetMap width='100%' height='400px' /><br /></li>
                <li><h3 style={{color: 'black'}}>Transportation:</h3></li>
                <li><h5>{this.state.listing.transportation}</h5></li>  
              </ul>
              <ul className="host-info" style={{float: 'right', display: 'inline-block'}}>
                <li><h2 style={{color: 'black'}}><br />Host info</h2></li>
                <li>
                  {this.state.listing.host.image &&(
                    <img src={'data:image/jpg;base64,' + this.state.listing.host.image.picByte}
                    alt='host' style={{width: '50%', height: '50%'}} />
                  )}
                  {!this.state.listing.host.image && (
                    <img src={require('../../../images/profile-picture.jpg')} alt='default-avatar'/>
                  )}
                </li>
                <li>
                  <h4>Name:{' '} 
                    {this.state.listing.host.firstName} {''}
                    {this.state.listing.host.lastName}
                  </h4>
                </li>
                <li>
                  <h4>Tel: {' '} {this.state.listing.host.number}</h4>
                </li>
                <li>
                  <Link to={{
                    pathname: `/guest/messages`,
                    state: {
                      listingId: this.state.listing.id,
                    }}
                  }
                  style={{textDecoration: 'none'}}>
                    <MessageIcon /> Have Questions?
                  </Link>
                </li>
              </ul>
            </li>
          </ul>  

          {this.state.message && (
            <div className="form-field" style={{position: 'absolute', top: '150%'}}>
              <div
                className={
                  this.state.successful
                    ? "alert alert-success"
                    : "alert alert-danger"
                }
                role="alert"
                style={{textAlign: 'center', margin: '0% auto', width: '50%'}}
              >
                {this.state.message}
              </div>
            </div>
          )}
        </div>    
      </div>
    )
  }
}

export default ListingResultsDetails;
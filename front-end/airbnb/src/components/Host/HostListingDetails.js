import React, { Component } from "react";
import UserService from "../../_services/user.service";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import NumericInput from 'react-numeric-input';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Checkbox } from "@material-ui/core";
import Loading from '../Loading/Loading';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
import MessageIcon from '@material-ui/icons/Message';

class HostListingDetails extends Component {

  constructor(props){
    super();

    this.state = {
      listing: {},
      image: '',
      loading: false,
      successful: true,
      message: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
    
  }

  handleChange = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  fileSelectedHandler = e =>{
    this.setState({image: e.target.files[0]})
  }

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.image){
      let formData = new FormData();
      
      formData.append('imageFile', this.state.image, this.state.image.name);
      
      UserService.postPhoto(formData).then(
        response => {
          UserService.linkListingPhoto(response.data, this.state.listing.id)
        }
      )
    }

    if(this.state.successful){
      UserService.updateListingInfo(
        this.state.id,
        this.state.title,
        this.state.type,
        this.state.country,
        this.state.city,
        this.state.neighborhood,
        this.state.address,
        this.state.postalCode,
        this.state.description,
        this.state.transportation,
        this.state.numOfBeds,
        this.state.numOfWc,
        this.state.numOfRooms,
        this.state.minRentDays,
        this.state.maxGuests,
        this.state.minCost,
        this.state.costPerExtraGuest,
        this.state.squareFootage,
        this.state.livingRoom,
        this.state.kitchen,
        this.state.parking,
        this.state.elevator,
        this.state.smoking,
        this.state.tv,
        this.state.ac,
        this.state.heating,
        this.state.wifi,
        this.state.parties,
        this.state.animals,
        this.state.startDate,
        this.state.endDate,
        this.state.images,
        this.state.host,
        this.state.reviews
      ).then(response => {
        if(response.status === 200){
          this.setState({
            listing: response.data,
            edit: false
          })
        }
      }).catch(
        error => {
          const resMessage =
            (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString();
  
          this.setState({
            message: resMessage
          });
        }
      )
    }
  }

  componentDidMount() {
    const listingId = this.props.location.state.listingId
    this.setState({loading: true})

    UserService.getCurrentListing(listingId)
    .then(
      response => {
        this.setState({
          listing: response.data,
          loading: false
        });
        this.setState({
          id: listingId,
          title: this.state.listing.title,
          type: this.state.listing.type,
          country: this.state.listing.country,
          city: this.state.listing.city,
          neighborhood: this.state.listing.neighborhood,
          address: this.state.listing.address,
          postalCode: this.state.listing.postalCode,
          description: this.state.listing.description,
          transportation: this.state.listing.transportation,
          numOfBeds: this.state.listing.numOfBeds,
          numOfWc: this.state.listing.numOfWc,
          numOfRooms: this.state.listing.numOfRooms,
          minRentDays: this.state.listing.minRentDays,
          maxGuests: this.state.listing.maxGuests,
          minCost: this.state.listing.minCost,
          costPerExtraGuest: this.state.listing.costPerExtraGuest,
          squareFootage: this.state.listing.squareFootage,
          livingRoom: this.state.listing.livingRoom,
          kitchen: this.state.listing.kitchen,
          parking: this.state.listing.parking,
          elevator: this.state.listing.elevator,
          smoking: this.state.listing.smoking,
          tv: this.state.listing.tv,
          ac: this.state.listing.ac,
          heating: this.state.listing.heating,
          wifi: this.state.listing.wifi,
          parties: this.state.listing.parties,
          animals: this.state.listing.animals,
          startDate: Date.parse(this.state.listing.startDate.toString()),
          endDate: Date.parse(this.state.listing.endDate.toString()),
          images: this.state.listing.images,
          host: this.state.listing.host,
          reviews: this.state.listing.reviews
        });
      })
    .catch(
      error => {
        this.setState({
          message:
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
    const images = this.state.listing.images;

    if (this.state.loading){
      return <Loading />
    }

    if(!images){
      return <h2>Failed to load images</h2>
    }

    return (
      <React.Fragment>
        <div className="container" style={{width: '100%', padding: '0% 15%', backgroundColor: '#ff9', position: 'relative', marginTop: '4%', marginBottom: '4%', border: 'solid 3px purple'}}>
          {!this.state.edit && (
            <div className="profile-content" style={{width: '100%', padding: '5% 0%', marginTop: '10%', backgroundColor: '#ff9'}}>
              <ul style={{display: 'inline-block'}}>
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
                <li style={{float: 'right'}}>
                  <Link to={{
                    pathname: `/host/messages`,
                    state: {
                      listingId: this.state.listing.id,
                    }}
                  }
                  style={{textDecoration: 'none', color: 'navy'}}>Messages
                    <MessageIcon fontSize='large' />
                  </Link>
                </li>
                <li><h1>Listing Details:</h1></li>
                <li><h3>Title: {this.state.title}</h3></li>
                <li><h3>Country: {this.state.country}</h3></li>
                <li><h3>City: {this.state.city}</h3></li>
                <li><h3>Neighborhood: {this.state.neighborhood}</h3></li>
                <li><h3>Address: {this.state.address}</h3></li>                
                <li><h3>Postal Code: {this.state.postalCode}</h3></li>                
                <li><h3>Description: {this.state.description}</h3></li>
                <li><h3>Transportation: {this.state.transportation}</h3></li>                
                <li><h3>Category: {((this.state.listing.type).replace('_', ' ').toLowerCase())}</h3></li>                
                <li><h3>Rooms: {this.state.numOfRooms}</h3></li>                
                <li><h3>Beds: {this.state.numOfBeds}</h3></li>
                <li><h3>WC: {this.state.numOfWc}</h3></li>                
                <li><h3>Minimum rent days: {this.state.minRentDays}</h3></li>                
                <li><h3>Maximum guests: {this.state.maxGuests}</h3></li>                
                <li><h3>Minimum cost: {this.state.minCost}</h3></li>                
                <li><h3>Cost per extra guest: {this.state.costPerExtraGuest}</h3></li>
                <li><h3>Square footage: {this.state.squareFootage}</h3></li>
                <li><h3>Availability: From {this.state.listing.startDate} to {this.state.listing.endDate}</h3></li>                
                <li><h3>Extras: {this.state.number}</h3></li>
                <ul style={{display: 'inline-block'}}>
                  <li>Living Room: {this.state.livingRoom ? 'yes' : 'no'}</li>
                  <li>Kitchen: {this.state.kitchen ? 'yes' : 'no'}</li>
                  <li>Parking: {this.state.parking ? 'yes' : 'no'}</li>
                  <li>Elevator: {this.state.elevator ? 'yes' : 'no'}</li>
                  <li>Smoking: {this.state.smoking ? 'yes' : 'no'}</li>
                  <li>TV: {this.state.tv ? 'yes' : 'no'}</li>
                  <li>AC: {this.state.ac ? 'yes' : 'no'}</li>
                  <li>Heating: {this.state.heating ? 'yes' : 'no'}</li>
                  <li>Wi-Fi: {this.state.wifi ? 'yes' : 'no'}</li>
                  <li>Parties: {this.state.parties ? 'yes' : 'no'}</li>
                  <li>Animals: {this.state.animals ? 'yes' : 'no'}</li>
                </ul>
              </ul>
              <div>
                <button onClick={e=>{this.setState({edit:true})}}
                  className="submit-button btn btn-primary btn-block"
                  style={{width:'30%'}}
                >Edit</button>
              </div>
            </div>
          )}

          {this.state.edit && (
            <div className='container' style={{marginTop: '7%'}}>
              <Form
                autoComplete = 'off'
                onSubmit={this.handleSubmit}
                ref={c => {
                  this.form = c;
                }}>
                <div className = "wrapper" style={{padding: '5%'}}>
                  <div style={{position: 'relative'}}>
                    <h2>Fill the fields you want to edit</h2>
                    <ul style={{display: 'flex', flexDirection: 'column'}}>
                      <li> {/* Title */} 
                      <label htmlFor="title">Title</label>
                      </li>
                      <li>
                        <Input
                          type="text"
                          className="form-control"
                          name="title"
                          value={this.state.title}
                          onChange={this.handleChange}
                        />
                      </li>
                      <li> {/* Country */}
                        <label htmlFor="text">Country</label>
                      </li>
                      <li>
                        <Input
                          type="text"
                          className="form-control"
                          name="country"
                          value={this.state.country}
                          onChange={this.handleChange}
                        />
                      </li>
                      <li> {/* City */}
                        <label htmlFor="text">City</label>
                      </li>
                      <li>
                        <Input
                          type="text"
                          className="form-control"
                          name="city"
                          value={this.state.city}
                          onChange={this.handleChange}
                        />
                      </li>
                      <li> {/* Neighborhood */}
                        <label htmlFor="text">Neighborhood</label>
                      </li>
                      <li>
                        <Input
                          type="text"
                          className="form-control"
                          name="neighborhood"
                          value={this.state.neighborhood}
                          onChange={this.handleChange}
                        />
                      </li>
                      <li> {/* Address */}
                        <label htmlFor="text">Address</label>
                      </li>
                      <li>
                        <Input
                          type="text"
                          className="form-control"
                          name="address"
                          value={this.state.address}
                          onChange={this.handleChange}
                        />
                      </li>
                      <li> {/* Postal Code */}
                        <label htmlFor="number">Postal Code</label>
                      </li>
                      <li>
                        <Input
                          type="number"
                          className="form-control"
                          name="postalCode"
                          value={this.state.postalCode}
                          onChange={this.handleChange}
                        />
                      </li>
                      <li>  {/* Description */}
                        <label htmlFor="text">Description</label>
                      </li>
                      <li>
                        <Input
                          type="text"
                          className="form-control"
                          name="description"
                          value={this.state.description}
                          onChange={this.handleChange}
                        />
                      </li>
                      <li> {/* Transportation */}
                        <label htmlFor="text">Transportation</label>
                      </li>
                      <li>
                        <Input
                          type="text"
                          className="form-control"
                          name="transportation"
                          value={this.state.transportation}
                          onChange={this.handleChange}
                        />
                      </li>
                      <li>
                        <ul>
                          <li> {/* Category */}
                            <label htmlFor="text">Category</label>
                          </li>
                          <li style={{marginLeft: '4%'}}>
                            <select name='' onChange={this.handleChange}>
                              <option
                                name="privateRoom" 
                                value='PRIVATE_ROOM'>
                                  Private Room
                              </option>
                              <option
                                name="sharedRoom"
                                value='SHARED_ROOM'>
                                Shared Room
                              </option>
                              <option
                              name="fullApartment"
                              value='FULL_APARTMENT'>
                                Full Apartment
                              </option>
                            </select>
                          </li>
                          <li style={{position: 'absolute', right: '35%'}}> {/* Number of rooms */}
                            <label htmlFor="number">Rooms</label>
                          </li>
                          <li style={{position: 'absolute', right: '0px'}}>
                            <NumericInput min={0} max={16}
                              value={this.state.numOfRooms}
                              onChange={e=> {
                                this.setState({numOfRooms: e})
                              }}/>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <ul style={{justifyContent: 'space-between'}}>
                          <li>  {/* Number of beds */}
                            <label htmlFor="number">Beds</label>
                          </li>
                          <li>
                            <NumericInput min={0} max={10}
                              value={this.state.numOfBeds}
                              onChange={e => {
                                this.setState({numOfBeds: e})
                              }}
                            />
                          </li>
                          <li> {/* Number of WC */}
                            <label htmlFor="number">WC</label>
                          </li>
                          <li>
                            <NumericInput min={0} max={10}
                              value={this.state.numOfWc}
                              onChange={e => {
                                this.setState({numOfWc: e})
                              }}
                            />
                          </li>
                        </ul>
                      </li>

                      <li>
                        <ul>
                          <li> {/* Minimum days */}
                            <label htmlFor="number" style={{width: '140px'}}>Min days</label>
                          </li>
                          <li>
                            <NumericInput min={0} max={10}
                              value={this.state.minRentDays}
                              onChange={e => {
                                this.setState({minRentDays: e})
                              }}
                            />
                          </li> {/* Maximum Guests */}
                          <li style={{width: '130px', marginLeft: '45px'}}> {/* Maximum guests */}
                            <label htmlFor="text">Max Guests</label>
                          </li>
                          <li style={{marginLeft: '40px'}}>
                            <NumericInput min={0} max={10}
                              value={this.state.maxGuests}
                              onChange={e => {
                                this.setState({maxGuests: e})
                              }}
                            />
                          </li>
                        </ul>
                      </li>

                      <li> {/* Minimum Cost */}
                        <label htmlFor="number">Minimum cost</label>
                      </li>
                      <li>
                        <Input
                          type="number"
                          step="0.5"
                          className="form-control"
                          name="minCost"
                          value={this.state.minCost}
                          onChange={this.handleChange}
                        />
                      </li>
                      <li> {/* Cost per extra guest */}
                        <label htmlFor="number">Cost per extra guest</label>
                      </li>
                      <li>
                        <Input
                          type="number"
                          step="0.5"
                          className="form-control"
                          name="costPerExtraGuest"
                          value={this.state.costPerExtraGuest}
                          onChange={this.handleChange}
                        />
                      </li>
                      <li> {/* Square Footage */}
                        <label htmlFor="number">Square Footage</label>
                      </li>
                      <li>
                        <Input
                          type="number"
                          step="0.5"
                          className="form-control"
                          name="squareFootage"
                          value={this.state.squareFootage}
                          onChange={this.handleChange}
                        />
                      </li>
                      <li> {/* Available dates */}
                        <label htmlFor="number">Available dates:</label>
                      </li>
                      <li>
                        <ul style={{display: 'flex', justifyContent: 'space-between'}}>
                          <li><label>From:</label></li>
                          <li>
                            <DatePicker 
                              selected={this.state.startDate}
                              value={this.state.startDate}
                              onChange={date => {
                                this.setState({
                                  startDate: date}
                                )}
                              }
                              dateFormat='dd-MM-yyyy'
                              minDate={new Date()}
                            />
                          </li>
                          <li><label>To:</label></li>
                          <li>
                            <DatePicker 
                              selected={this.state.endDate}
                              value={this.state.endDate}
                              onChange={date => {
                                this.setState({
                                  endDate: date}
                                )}
                              }
                              dateFormat='dd-MM-yyyy'
                              minDate={new Date()}
                            />
                          </li>
                        </ul>
                      </li>
                      <li>
                        <table>
                          <tbody>
                            <tr>
                              <td style={{padding: '0%'}}> {/* Extras */}
                                <br />
                                <div>
                                  <label>Extras:</label>
                                  <br />
                                  <div className = "listing-details">
                                    <Checkbox
                                      name = "livingRoom"
                                      label = "Living Room"
                                      value = {this.state.livingRoom}
                                      checked = {this.state.livingRoom}
                                      onChange = {this.handleChange}
                                    />
                                    <p>Living Room</p>
                                    <Checkbox
                                      name = "kitchen"
                                      label = "kitchen"
                                      value = {this.state.kitchen}
                                      checked = {this.state.kitchen}
                                      onChange = {this.handleChange}
                                    />
                                    <p>Kitchen</p>
                                    <Checkbox
                                      name = "parking"
                                      label = "parking"
                                      value = {this.state.parking}
                                      checked = {this.state.parking}
                                      onChange = {this.handleChange}
                                    />
                                    <p>Parking</p>
                                    <Checkbox
                                      name = "elevator"
                                      label = "elevator"
                                      value = {this.state.elevator}
                                      checked = {this.state.elevator}
                                      onChange = {this.handleChange}
                                    />
                                    <p>Elevator</p>
                                    <Checkbox
                                      name = "wifi"
                                      label = "wifi"
                                      value = {this.state.wifi}
                                      checked = {this.state.wifi}
                                      onChange = {this.handleChange}
                                    />
                                    <p>Wifi</p>
                                  </div>            
                                </div>
                              </td>
                            </tr>

                            <tr>
                              <td style={{padding: '0%'}}>
                                <div>
                                  <div className="listing-details">
                                    <Checkbox
                                      name = "smoking"
                                      label = "smoking"
                                      value = {this.state.smoking}
                                      checked = {this.state.smoking}
                                      onChange = {this.handleChange}
                                    />
                                    <p>Smoking</p>
                                    <Checkbox
                                      name = "tv"
                                      label = "tv"
                                      value = {this.state.tv}
                                      checked = {this.state.tv}
                                      onChange = {this.handleChange}
                                    />
                                    <p>TV</p>
                                    <Checkbox
                                      name = "ac"
                                      label = "ac"
                                      value = {this.state.ac}
                                      checked = {this.state.ac}
                                      onChange = {this.handleChange}
                                    />
                                    <p>AC</p>
                                    <Checkbox
                                      name = "heating"
                                      label = "heating"
                                      value = {this.state.heating}
                                      checked = {this.state.heating}
                                      onChange = {this.handleChange}
                                    />
                                    <p>Heating</p>
                                    <Checkbox
                                      name = "parties"
                                      label = "parties"
                                      value = {this.state.parties}
                                      checked = {this.state.parties}
                                      onChange = {this.handleChange}
                                    />
                                    <p>Parties</p>
                                    <Checkbox
                                      name = "animals"
                                      label = "animals"
                                      value = {this.state.animals}
                                      checked = {this.state.animals}
                                      onChange = {this.handleChange}
                                    />
                                    <p>Animals</p>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </li>
                    </ul>
                    <div>
                      <h2>Add photo</h2>
                      <input
                        type='file'
                        style={{width: '350px'}}
                        onChange={this.fileSelectedHandler}
                      />
                    </div>
                  </div>
                </div>
                
              </Form>
              <div style={{width: '30%', marginLeft: '34%', display: 'flex', justifyContent: 'space-between'}}>
              <button
                  style = {{marginBottom: '42px', marginTop: '25px', marginRight: '30px'}} 
                  type = "submit" 
                  className="submit-button btn btn-danger btn-block"
                  onClick = {e => {this.setState({edit: false})}}>
                  Cancel
                </button>
                <button
                  style = {{marginBottom: '42px', marginTop: '25px', marginLeft: '30px'}} 
                  type = "submit" 
                  className="submit-button btn btn-primary btn-block"
                  onClick = {this.handleSubmit}>
                  Submit
                </button>
                
              </div>
            </div>
          )}

        </div>
      </React.Fragment>
    );
  }
}

export default HostListingDetails;
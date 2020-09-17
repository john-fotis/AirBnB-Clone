/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from "react";
import UserService from "../../_services/user.service";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import NumericInput from 'react-numeric-input';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AuthService from '../../_services/authentication.service';
import Loading from '../../components/Loading/Loading';

class HostListingDetails extends Component {

  constructor(props){
    super();

    this.state = {
      listingId: null,
      listing: {},
      image: '',
      edit: false,
      editPassword: null,
      editFirstName: null,
      editLastName: null,
      editEmail: null,
      editNumber: null,
      editPhoto: null,
      loading: false,
      successful: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  fileSelectedHandler = e =>{
    this.setState({editPhoto: e.target.files[0]})
  }

  handleChange = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.editPhoto !== null){
      let formData = new FormData();
      console.log(this.state.editPhoto)
      
      formData.append('imageFile', this.state.editPhoto, this.state.editPhoto.name);
      
      UserService.postPhoto(formData).then(
        response => {
          UserService.linkUserPhoto(response.data, AuthService.getCurrentUser().id)
        }
      )
    }

    if(this.state.successful){
      UserService.updateListingInfo(
        this.state.editFirstName,
        this.state.editLastName,
        this.state.editEmail,
        this.state.editNumber,
        this.state.editPassword
      ).then(response => {
        if(response.status === 200){
          window.location.reload();
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
    this.state.listingId = this.props.location.state.listingId
    this.setState({loading: true})

    UserService.getCurrentListing(this.state.listingId)
    .then(
      response => {
        this.setState({
          listing: response.data,
          loading: false
        });
        // if(response.image.data !== null){
        //   this.setState({image: 'data:image/jpg;base64,' + response.image.picByte});
        // }
        console.log(this.state.listing)
      })
    .catch(
      error => {
        this.setState({
          listing:
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
    if (this.state.loading){
      return <Loading />
    }
    return (
      <React.Fragment>
        <div className="container" style={{width: '100%', padding: '0% 15%', backgroundColor: '#ff9', position: 'relative', marginBottom: '4%'}}>
          {!this.state.edit && (
            <div className="profile-content" style={{width: '100%', padding: '5% 0%', marginTop: '10%', backgroundColor: '#ff9'}}>
              <ul style={{display: 'inline-block'}}>
                <div style={{position: 'absolute', right: '15%'}}>
                  <img src={this.state.image} alt='img' />
                </div>
                <li><h1>Listing Details:</h1></li>
                <li><h3>Title: {this.state.listing.title}</h3></li>
                <li><h3>Country: {this.state.listing.country}</h3></li>
                <li><h3>City: {this.state.listing.city}</h3></li>
                <li><h3>Neighborhood: {this.state.listing.neighborhood}</h3></li>
                <li><h3>Address: {this.state.listing.address}</h3></li>                
                <li><h3>Postal Code: {this.state.listing.postalCode}</h3></li>                
                <li><h3>Description: {this.state.listing.description}</h3></li>                <li><h3>Transportation: {this.state.listing.transportation}</h3></li>                
                <li><h3>Category: {this.state.listing.type}</h3></li>                
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
                autocomplete = 'off'
                className = "form-wrapper"
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
                        <textarea
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
                        <textarea
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
                            <select onChange={this.handleChange}>
                              <option
                                name="privateRoom" 
                                value='PRIVATE_ROOM'>
                                  Private Room
                              </option>
                              <option
                                name="sharedRoom"
                                value={'SHARED_ROOM'}>
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
                            value={this.state.numofRooms}
                            onChange={e=> {
                              this.setState({numofRooms: e})
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
                    </ul>
                  </div>
                </div>

              </Form>
              <div style={{width: '30%',marginLeft: '34%'}}>
                <button
                  style = {{marginBottom: '42px'}} 
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
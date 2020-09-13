import React, { Component } from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import './ListingCreate.css';
import UserService from '../../../_services/user.service';
import { Checkbox } from "@material-ui/core";
import NumericInput from 'react-numeric-input';
import {DatePicker} from '../../../_services/date-picker'
import 'react-datepicker/dist/react-datepicker.css';

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Required!
      </div>
    );
  }
};

class CreateListing extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDateChange = this.onDateChange.bind(this);

    this.state = {
      title: "",
      type: "PRIVATE_ROOM",
      numOfBeds: 1,
      numOfWc: 1,
      numofRooms: 1,
      livingRoom: false,
      squareFootage: 0.0,
      description: "",
      smoking: false,
      animals: false,
      parties: false,
      minRentDays: 1,
      maxGuests: 0,
      latitude: 0.0,
      longitude: 0.0,
      country: "",
      city: "",
      neighborhood: "",
      address: "",
      postalCode: null,
      transportation: "",
      minCost: 0.0,
      costPerExtraGuest: 0.0,
      wifi: false,
      ac: false,
      heating: false,
      kitchen: false,
      tv: false,
      parking: false,
      elevator: false,
      startDate: new Date(),
      endDate: new Date(),
      numOfReviews: 0,
      averageRating: 0.0,
      host: {
        id: JSON.parse(localStorage.getItem('user'))
      },

      selectedFile: null,
      successful: false,
      message: ""
    };
  }

  onDateChange (e) {
    this.setState({
      [this.state.startDate]: e.target.value
    });
    console.log(e.target.value)
  }

  handleOptionChange = e => {
    this.setState({
      type: e.target.value
    })
    console.log(this.state.type)

  }

  handleChange = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    
    console.log(e.target.value)
    console.log(target)
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });
    console.log(this.state.startDate)
    console.log(this.state.endDate)

    if (this.checkBtn.context._errors.length === 0) {
      UserService.createListing(
        this.state.title,
        this.state.type,
        this.state.numOfBeds,
        this.state.numOfWc,
        this.state.numofRooms,
        this.state.livingRoom,
        this.state.squareFootage,
        this.state.description,
        this.state.smoking,
        this.state.animals,
        this.state.parties,
        this.state.minRentDays,
        this.state.maxGuests,
        this.state.latitude,
        this.state.longitude,
        this.state.country,
        this.state.city,
        this.state.neighborhood,
        this.state.address,
        this.state.postalCode,
        this.state.transportation,
        this.state.minCost,
        this.state.costPerExtraGuest,
        this.state.wifi,
        this.state.ac,
        this.state.heating,
        this.state.kitchen,
        this.state.tv,
        this.state.parking,
        this.state.elevator,
        this.state.startDate,
        this.state.endDate,
        this.state.host        
      )
      .then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
          this.props.history.push("/admin/profile");
          window.location.reload();   
        }
      )
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
            }
          );
        }
      );
    }


    this.form.validateAll();
    console.log(this.state)
    console.log(this.state.startDate)
  }

  render() { 
    return ( 
      <div className = "listing-create-form">
        <Form 
          autocomplete = 'off'
          className = "form-wrapper"
          onSubmit={this.handleSubmit}
          ref={c => {
            this.form = c;
          }}>
          <div 
          className = 'form-inner'
          style = {{marginTop: '-15%', minWidth: '900px'}}>
            <h3>Create your listing!</h3>
            {!this.state.successful && (
              <table>
                <tbody>
                  <tr>
                    <td> {/* Title */} 
                        <div className="form-field">
                        <label htmlFor="title">Title</label>
                        <Input
                          type="text"
                          className="form-control"
                          name="title"
                          value={this.state.title}
                          onChange={this.handleChange}
                          validations={[required]}
                        />
                      </div>
                    </td>
                    <td> {/* Country */}
                      <div className="form-field">
                        <label htmlFor="text">Country</label>
                        <Input
                          type="text"
                          className="form-control"
                          name="country"
                          value={this.state.country}
                          onChange={this.handleChange}
                          validations={[required]}
                        />
                      </div>
                    </td>
                    <td> {/* City */} 
                        <div className="form-field">
                        <label htmlFor="text">City</label>
                        <Input
                          type="text"
                          className="form-control"
                          name="city"
                          value={this.state.city}
                          onChange={this.handleChange}
                          validations={[required]}
                        />
                      </div>
                    </td>    
                  </tr>

                  <tr>
                    <td> {/* Neighborhood */}
                      <div className="form-field">
                        <label htmlFor="text">
                          Neighborhood
                        </label>
                        <Input
                          type="text"
                          className="form-control"
                          name="neighborhood"
                          value={this.state.neighborhood}
                          onChange={this.handleChange}
                          validations={[required]}
                        />
                      </div>
                    </td> 
                    <td> {/* Address */} 
                      <div className="form-field">
                        <label htmlFor="text">Address</label>
                        <Input
                          type="text"
                          className="form-control"
                          name="address"
                          value={this.state.address}
                          onChange={this.handleChange}
                          validations={[required]}
                        />
                      </div>
                    </td>
                    <td> {/* Postal Code */}
                      <div className="form-field">
                        <label htmlFor="number">
                          Postal Code
                        </label>
                        <Input
                          type="number"
                          className="form-control"
                          name="postalCode"
                          value={this.state.postalCode}
                          onChange={this.handleChange}
                          validations={[required]}
                        />
                      </div>
                    </td> 
                  </tr>

                  <tr>
                    <td> {/* Description */} 
                      <div className="form-field" style={{width: '80%', position:'absolute',right: '10%', top: '22%'}}>
                        <label htmlFor="text">Description</label>
                        <textarea
                          type="text"
                          className="form-control"
                          name="description"
                          value={this.state.description}
                          onChange={this.handleChange}
                          validations={[required]}
                        />
                      </div>
                    </td>
                  </tr>                  

                  <tr>
                    <td> {/* Transportation */}
                      <div className="form-field" style={{width: '80%', position:'absolute',right: '10%', top: '32%'}}>
                        <label htmlFor="text">Transportation</label>
                        <textarea
                          type="text"
                          className="form-control"
                          name="transportation"
                          value={this.state.transportation}
                          onChange={this.handleChange}
                          validations={[required]}
                        />
                      </div>
                    </td>
                  </tr>
                  
                  <div style={{marginTop: '110%'}} />

                  <tr>
                    <td> {/* Category */}
                      <div className="form-field">
                      <label htmlFor="text">Category</label>
                      <select onChange={this.handleOptionChange}>
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
                        name="fullAppartment"
                        value='FULL_APPARTMENT'>
                          Full Appartment
                        </option>
                      </select>

                      </div>
                    </td>
                    <td> {/* Number of rooms */}
                      <div className="form-field">
                        <label htmlFor="number">
                          Rooms
                        </label>
                        <NumericInput min={0} max={16} value={this.state.numofRooms}/>
                      </div>
                    </td>
                    <td>{/* Number of beds */}
                      <div className="form-field">
                        <label htmlFor="number">
                         Beds
                        </label>
                        <NumericInput min={0} max={10} value={this.state.numOfBeds}
                        className=""/>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td> {/* Number of WC */}
                      <div className="form-field">
                        <label htmlFor="number">
                          WC
                        </label>
                        <NumericInput min={0} max={10} value={this.state.numOfWc}
                        className=""/>
                      </div>
                    </td>
                    <td> {/* Minimum days */}
                      <div className="form-field">
                        <label htmlFor="number">
                          Min days
                        </label>
                        <NumericInput min={0} max={10} value={this.state.minRentDays}
                        className=""/>
                      </div>
                    </td>
                    <td> {/* Maximum guests */}
                      <div className="form-field">
                        <label htmlFor="text">
                          Max Guests
                        </label>
                        <NumericInput min={0} max={10} value={this.state.maxGuests}
                        className=""/>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td> {/* Minimum Cost */}
                      <div className="form-field">
                        <label htmlFor="number">
                          Minimum cost
                        </label>
                        <Input
                          type="number"
                          step="0.5"
                          className="form-control"
                          name="minCost"
                          value={this.state.minCost}
                          onChange={this.handleChange}
                          validations={[required]}
                        />
                      </div>
                    </td>
                    <td> {/* Cost per extra guest */}
                      <div className="form-field">
                        <label htmlFor="number">
                          Cost per extra guest
                        </label>
                        <Input
                          type="number"
                          step="0.5"
                          className="form-control"
                          name="costPerExtraGuest"
                          value={this.state.costPerExtraGuest}
                          onChange={this.handleChange}
                          validations={[required]}
                        />
                      </div>
                    </td>
                    <td> {/* Square Footage */}
                      <div className="form-field">
                        <label htmlFor="number">
                          Square Footage
                        </label>
                        <Input
                          type="number"
                          step="0.5"
                          className="form-control"
                          name="squareFootage"
                          value={this.state.squareFootage}
                          onChange={this.handleChange}
                          validations={[required]}
                        />
                      </div>
                    </td>   
                  </tr>

                  <tr>  {/* Available dates */}
                    <div style={{margin: '0% 20%'}}>
                      <br />
                      <h3 style={{width: '445%', margin: '0%'}}>Available dates</h3>
                      <div className="available-dates">
                        <DatePicker handleChange = {this.handleChange}></DatePicker>
                      </div>
                    </div>
                  </tr>

                  <tr> {/* Extras */}
                    <br />
                    <div className = "extras">
                      <label>Extras:</label>
                      <br />
                      <div className = "listing-details">
                        <Checkbox
                          name = "livingRoom"
                          label = "LivingRoom"
                          onChange = {this.handleChange}
                        />
                        <p>Living Room</p>
                        <Checkbox
                          name = "kitchen"
                          label = "kitchen"
                          onChange = {this.handleChange}
                        />
                        <p>Kitchen</p>
                        <Checkbox
                          name = "parking"
                          label = "parking"
                          onChange = {this.handleChange}
                        />
                        <p>Parking</p>
                        <Checkbox
                          name = "elevator"
                          label = "elevator"
                          onChange = {this.handleChange}
                        />
                        <p>Elevator</p>
                        <Checkbox
                          name = "smoking"
                          label = "smoking"
                          onChange = {this.handleChange}
                        />
                        <p>Smoking</p>
                      </div>            
                    </div>
                  </tr>

                  <tr> {/* Extras */}
                    <div className = "extras">
                      <div className = "listing-details">
                        <Checkbox
                          name = "tv"
                          label = "tv"
                          onChange = {this.handleChange}
                        />
                        <p>TV</p>
                        <Checkbox
                          name = "ac"
                          label = "ac"
                          onChange = {this.handleChange}
                        />
                        <p>AC</p>
                        <Checkbox
                          name = "heating"
                          label = "heating"
                          onChange = {this.handleChange}
                        />
                        <p>Heating</p>
                        <Checkbox
                          name = "wifi"
                          label = "wifi"
                          onChange = {this.handleChange}
                        />
                        <p>Wifi</p>
                        <Checkbox
                          name = "parties"
                          label = "parties"
                          onChange = {this.handleChange}
                        />
                        <p>Parties</p>
                        <Checkbox
                          name = "animals"
                          label = "animals"
                          onChange = {this.handleChange}
                        />
                        <p>Animals</p>
                      </div>            
                    </div>
                  </tr>

                </tbody>
              </table>
            )}
            
            {this.state.message && (
              <div className="form-field">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />

            <button 
              style = {{marginTop: '42px', marginLeft: 'auto', marginRight: 'auto', width: '25%'}} 
              type = "submit" 
              className="submit-button btn btn-primary btn-block"
              onClick = {this.handleSubmit}>
                Submit
            </button>
          </div>
        </Form>
      </div>
     );
  }
}
 
export default CreateListing;
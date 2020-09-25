import React, { Component } from "react";
import './Home.css';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import UserService from '../../_services/user.service';
import { Checkbox } from "@material-ui/core";
import NumericInput from 'react-numeric-input';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import OpenStreetMap from '../../components/Map/OpenStreetMap';
import Loading from '../../components/Loading/Loading';

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Required!
      </div>
    );
  }
};

class Home extends Component {
  constructor(props) {
    super();

    this.state = {
      type: null,
      smoking: null,
      animals: null,
      parties: null,
      guests: 1,
      latitude: 0.0,
      longitude: 0.0,
      country: "",
      city: "",
      maxCost: null,
      wifi: null,
      ac: null,
      heating: null,
      kitchen: null,
      tv: null,
      parking: null,
      elevator: null,
      startDate: new Date(),
      endDate: new Date(),
      successful: false,
      message: "",
      loading: false,

      markerPosition: {
        lat: 38,
        lng: 23
      }
    };
  }

  handleChange = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();
    this.setState({loading: true});

    if (this.checkBtn.context._errors.length === 0) {
      UserService.searchListings(
        this.state.type,
        this.state.smoking,
        this.state.animals,
        this.state.parties,
        this.state.guests,
        this.state.latitude,
        this.state.longitude,
        this.state.country,
        this.state.city,
        this.state.maxCost,
        this.state.wifi,
        this.state.ac,
        this.state.heating,
        this.state.kitchen,
        this.state.tv,
        this.state.parking,
        this.state.elevator,
        this.state.startDate,
        this.state.endDate,
      )
      .then(
        response => {
          if (response.status === 200) {
            this.setState({
              message: response.data.message,
              successful: true,
              loading: false
            });
            this.props.history.push({
              pathname: '/results',
              state: {
                listings: response.data,
                guests: this.state.guests,
                startDate: this.state.startDate,
                endDate: this.state.endDate,
                loading: this.state.loading
              }
            });
          }
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
            message: resMessage,
            loading: false
            }
          );
        }
      );
    }
  }

  render() {

    if(this.state.loading){
      return <Loading />
    }

    return (
      <div>
        <div className="home-main-container">
          <header><h1 style={{fontFamily:'arial'}}><strong>Planning your trip made easy!</strong></h1></header>
          {!this.state.successful && (
            <Form 
              autoComplete = 'off'
              className = "form-wrapper"
              style={{marginTop: '-3%'}}
              onSubmit={this.handleSubmit}
              ref={c => {
                this.form = c;
              }}>
              <div 
              className = 'form-inner'
              style = {{marginTop: '5%', minWidth: '1000px', boxShadow: '3px 3px grey'}}>
              <div className='map-container'> 
                <OpenStreetMap width='450px' height='450px' markerPosition = {this.state.markerPosition} />
              </div>
                <h3>I'm looking for...</h3>
                  <table style={{width: '400px', marginLeft: '2%'}}>
                    <tbody>
                      <tr>
                        <td> {/* Country */}
                          <div className="form-field">
                            <label htmlFor="text">* Country</label>
                            <Input
                              type="text"
                              className="form-control"
                              name="country"
                              placeholder="Greece..."
                              value={this.state.country}
                              onChange={this.handleChange}
                              validations={[required]}
                            />
                          </div>
                        </td>
                        <td> {/* City */} 
                          <div className="form-field">
                            <label htmlFor="text">* City</label>
                            <Input
                              type="text"
                              className="form-control"
                              name="city"
                              placeholder="Santorini..."
                              value={this.state.city}
                              onChange={this.handleChange}
                              validations={[required]}
                            />
                          </div>
                        </td>
                      </tr>
                      
                      <tr>
                        <td> {/* Number of people */}
                          <div className="form-field">
                            <label htmlFor="text" style = {{marginRight: '16px'}}>
                              * People
                            </label>
                            <NumericInput min={0} max={10}
                              value={this.state.guests}
                              onChange={e => {
                              this.setState({guests: e})
                              }}
                            />
                          </div>
                        </td>
                        <td> {/* Maximum cost */}
                          <div className="form-field">
                            <label htmlFor="text" style = {{marginRight: '16px'}}>
                              Max Cost
                            </label>
                            <NumericInput min={0} max={10}
                              value={this.state.maxCost}
                              onChange={e => {
                                this.setState({maxCost: e})
                              }}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div><br /></div>
                        </td>
                      </tr>
                      <tr>
                        <td> {/* When */}
                          <label style={{width: '160px'}}>* From:</label>
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
                          </td>
                          <td>
                          <label>* To:</label>
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
                        </td>
                      </tr>
                      
                      <tr>
                        <td> {/* Category */}
                          <div className="form-field">
                            <label htmlFor="text">Category</label>
                            <select onChange={e => {
                              this.setState({type: e.target.value});
                            }
                            }>
                              <option
                                name="type" 
                                value={null}>
                                  Any
                              </option>
                              <option
                                name="type" 
                                value='PRIVATE_ROOM'>
                                  Private Room
                              </option>
                              <option
                                name="type"
                                value='SHARED_ROOM'>
                                Shared Room
                              </option>
                              <option
                              name="type"
                              value='FULL_APARTMENT'>
                                Full Apartment
                              </option>
                            </select>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>{/* Extras */}
                          <div className="dropdown">
                            <label style={{marginTop: '50%', marginBottom: '0%'}}>Extras:</label>
                            <div className="dropdown-content-search">
                              <div className = "extras" style={{width: '100%', margin: '0%'}}>
                                <br />
                                <div className = "listing-details">
                                  <Checkbox
                                    name = "livingRoom"
                                    label = "Living Room"
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
                            </div>
                          </div>                        
                        </td>
                      </tr>
                      <tr>
                        <td>
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
                        </td>
                      </tr>
                    </tbody>
                  </table>
                
                <CheckButton
                  style={{ display: "none" }}
                  ref={c => {
                    this.checkBtn = c;
                  }}
                />
                <div style={{width: '50%'}}>
                  <button 
                    style = {{marginTop: '42px', marginLeft: 'auto', marginRight: 'auto', width: '25%'}} 
                    type = "submit" 
                    className="submit-button btn btn-primary btn-block"
                    onClick = {this.handleSubmit}>
                      Search
                  </button>
                </div>
                
                <p style={{width: '30%', marginTop: '4%',
                  marginBottom: '0', fontSize: 'small',
                  fontStyle: 'italic'}}
                >
                  Fields with * are required!
                </p>
              </div>
            </Form>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
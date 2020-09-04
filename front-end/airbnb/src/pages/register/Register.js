/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { BrowserRouter as Switch } from "react-router-dom";
import axios from 'axios';
import { API } from '../../config/config.utils'
import "./Register.css";
import { Checkbox } from "@material-ui/core";

class Register extends Component {

  constructor(props){
    super(props);

    this.state = ({
      username: '',
      password: '',
      passwordConfirm: '',
      firstName: '',
      lastName: '',
      roles: 0,
      email: '',
      number: null,
      selectedFile: [],
        // formErrors: {
        //   usernameTaken: false,
        //   passwordNotMatch: false,
        //   nameTooShort: false,
        //   surnameTooShort: false,
        //   emailInvalid: false,
        //   selectedFileIssue: false 
        // }
    });

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  fileSelectedHandler = e =>{
    this.setState(
      {selectedFile: e.target.files[0]}
    )
  }

  roleSelectedHandler = e =>{
    if (e.target.value === 'host') {
      this.setState({[e.target.name]: 1})
    }else if (e.target.value === 'tenant'){
      this.setState({[e.target.name]: 2})
    }else{
      this.setState({[e.target.name]: 3})
    }
  }

  handleSubmit = e => {
    const {
      username,
      password,
      firstName,
      lastName,
      email,
      number,
      selectedFile
    } = this.state;
    
    // alert ("Your role is " + this.roles.value )
    // console.log(this);



    // axios.post( API + 'register', {
    //   user: {
    //     username: username,
    //     password: password,
    //     firstName: firstName,
    //     lastName: lastName,
    //     email: email,
    //     number: number,
    //     photo: selectedFile
    //   }
    // }

    // )
    e.preventDefault();
  };

  handleChange = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    console.log (e.target)
  };

  render() {
    return (
      <div className ="sign-up-form">
        <form 
        className = "form-wrapper"
        onSubmit = {this.handleSubmit}>
          <br />

          <div className = "form-wrapper">
            <div className = "form-inner">
              <h3>Sign-up</h3>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <div className = "form-field">
                        <label>Username</label>
                        <input 
                        name = "username"
                        type = "username"

                        className="form-control"
                        onChange = {this.handleChange}
                        />
                      </div>
                    </td>
                    <td>
                      <div className = "form-field">
                        <label>Email address</label>
                        <input 
                        name = "email"
                        type="email"

                        className="form-control"
                        onChange = {this.handleChange}
                      />
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className = "form-field">
                        <label>Password</label>
                        <input
                        name = "password"
                        type="password"

                        className="form-control"
                        onChange = {this.handleChange}
                      />
                      </div>
                    </td>
                    <td>
                      <div className = "form-field">
                        <label>Phone number</label>
                        <input
                        name = "number"
                        type="tel"

                        className="form-control"
                        onChange = {this.handleChange}
                        />
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className = "form-field">
                        <label>Confirm password</label>
                        <input
                        name = "passwordConfirm"
                        type = "password"

                        className = "form-control"
                        onChange = {this.handleChange}
                        />
                      </div>
                    </td>
                    <td>
                      <div
                        className = "role-picker">
                        <label>Select role(s)</label>
                        <br />
                        <div className = "roles"
                        >
                          <Checkbox
                          name = "host"
                          label = "Host"
                          onChange = {this.handleChange}>
                          </Checkbox>
                          <p>Host</p>
                          <Checkbox
                          name = "tenant"
                          label = "Tenant"
                          onChange = {this.handleChange}
                          >
                          </Checkbox>
                          <p>Tenant</p>
                        </div>              
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div
                        className = "form-field">
                        <label>First name</label>
                        <input
                        name = " firstName"
                        type = "text"

                        className = "form-control"
                        onChange = {this.handleChange}
                        />
                      </div>
                    </td>
                    <td>
                      <div
                        className = "profile-photo">
                        <label>Profile photo</label>
                        <br />
                        <input
                        name = "selectedFile"
                        type = "file"

                        onChange={this.fileSelectedHandler} />         
                      </div>
                    </td>              
                  </tr>

                  <tr>
                    <td>
                      <div className = "form-field">
                        <label>Last name</label>
                        <input
                        name = "lastName"
                        type="text"

                        className = "form-control"
                        onChange = {this.handleChange}
                        />
                      </div>
                    </td>
                    <td>
                      <button 
                        style = {{marginTop: '42px'}} 
                        type = "submit" 
                        className="submit-button btn btn-primary btn-block"
                        onClick = {this.handleSubmit}
                      >
                        Submit
                      </button>
                    </td>
                  </tr>  
                </tbody>
              </table>
              <p 
                className="already-have-account">
                  <a href="/login">Already have an account?
                  </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
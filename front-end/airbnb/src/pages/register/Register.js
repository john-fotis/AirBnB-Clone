import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import './Register.css';
import AuthService from "../../_services/authentication.service";
import UserService from '../../_services/user.service';
import { Checkbox } from "@material-ui/core";
import {history} from '../../_helpers/history';

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        Must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        Must be between 6 and 20 characters.
      </div>
    );
  }
};

const vname = value => {
  if(value.length < 3 || value.length > 20){
      return (
        <div className="alert alert-danger" role="alert">
          Must be between 3 and 20 characters.
        </div>
      );
  }
}

const phoneRegEx = /^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/;

const vnumber = value => {
  if (value.length !== 10 || !phoneRegEx.test(value)){
    return (
      <div className="alert alert-danger" role="alert">
        Invalid number
      </div>
    );
  }
}

class Register extends Component {
  constructor(props) {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
      firstName: "",
      lastName: "",
      host: false,
      tenant: false,
      number: "",
      selectedFile: null,
      successful: false,
      message: ""
    };
  }

  fileSelectedHandler = e =>{
    this.setState(
      {selectedFile: e.target.files[0]}
    )
  }

  handleChange = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    if(this.state.passwordConfirm === this.state.password){

      if(this.state.selectedFile){
        let formData = new FormData();
        let userId = null;
    
        formData.append('imageFile', this.state.selectedFile, this.state.selectedFile.name);
    
        this.form.validateAll();
    
        if (this.checkBtn.context._errors.length === 0) {
          AuthService.register(
            this.state.username,
            this.state.email,
            this.state.password,
            this.state.firstName,
            this.state.lastName,
            this.state.host,
            this.state.tenant,
            this.state.number
          ).then(
            response => {
              this.setState({
                message: response.data.message,
                successful: true
              });
              userId = response.data.id;
              AuthService.login(this.state.username, this.state.password)
              .then(
                UserService.postPhoto(formData)
                .then(
                  response => {
                    UserService.linkUserPhoto(response.data, userId)
                    .then(
                      response => {
                        history.push("/");
                        window.location.reload();
                      }
                    );
                  }
                )
              );
            }
          ).catch(
            error => {
              const resMessage =
                (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();
              if(error.response.status === 406){
                this.setState({
                  successful: false,
                  message: 'Username is taken'
                })
              } else {
                this.setState({
                  successful: false,
                  message: resMessage
                });
              }
            }
          )
        }
      } 
      else{
        this.setState({
          successful: false,
          message: 'Please select a profile photo'
        })
      }
    }
    else{
      this.setState({
        successful: false,
        message: 'Passwords must match!'
      })
    }
  }

  render() {
    return (
      <div className="sign-up-form">
        <Form 
          autoComplete = 'off'
          className = "form-wrapper"
          onSubmit={this.handleRegister}
          ref={c => {
            this.form = c;
          }}>
          <div className = 'form-inner'>
            <h3>Sign-up</h3>
            {!this.state.successful && (
              <table>
                <tbody>
                  <tr>
                    <td> {/* Username */}
                      <div className="form-field">
                        <label htmlFor="username">Username</label>
                        <Input
                          type="text"
                          className="form-control"
                          name="username"
                          value={this.state.username}
                          onChange={this.handleChange}
                          validations={[required, vusername]}
                        />
                      </div>
                    </td>
                    <td> {/* Email */}
                      <div className="form-field">
                        <label htmlFor="email">Email</label>
                        <Input
                          type="text"
                          className="form-control"
                          name="email"
                          value={this.state.email}
                          onChange={this.handleChange}
                          validations={[required, email]}
                        />
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td> {/* Password */}
                      <div className="form-field">
                        <label htmlFor="password">Password</label>
                        <Input
                          type="password"
                          className="form-control"
                          name="password"
                          value={this.state.password}
                          onChange={this.handleChange}
                          validations={[required, vpassword]}
                        />
                      </div>
                    </td>
                    <td> {/* Number */}
                      <div className="form-field">
                        <label htmlFor="tel">Phone number</label>
                        <Input
                          type="tel"
                          className="form-control"
                          name="number"
                          value={this.state.number}
                          onChange={this.handleChange}
                          validations={[required, vnumber]}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td> {/* Confirm password */}
                      <div className="form-field">
                        <label htmlFor="password">Confirm password</label>
                        <Input
                          type="password"
                          className="form-control"
                          name="passwordConfirm"
                          value={this.state.passwordConfirm}
                          onChange={this.handleChange}
                          validations={[required]}
                        />
                      </div>
                    </td>
                    <td> {/* Roles */}
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
                    <td> {/* First name */}
                      <div className="form-field">
                        <label htmlFor="text">First name</label>
                        <Input
                          type="text"
                          className="form-control"
                          name="firstName"
                          value={this.state.firstName}
                          onChange={this.handleChange}
                          validations={[required, vname]}
                        />
                      </div>
                    </td>
                    <td> {/* Photo */}
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
                    <td> {/* Last name */}
                      <div className="form-field">
                        <label htmlFor="text">Last name</label>
                        <Input
                          type="text"
                          className="form-control"
                          name="lastName"
                          value={this.state.lastName}
                          onChange={this.handleChange}
                          validations={[required, vname]}
                        />
                      </div>
                    </td>
                    <td> {/*Submit button */}
                      <div className="form-field">
                        <button 
                          style = {{marginTop: '42px'}} 
                          type = "submit" 
                          className="submit-button btn btn-primary btn-block"
                          onClick = {this.handleSubmit}>
                            Sign Up
                        </button>
                      </div>
                    </td>
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
                  style={{textAlign: 'center', margin: '0% auto', width: '40%'}}
                >
                  {this.state.message}
                </div>
              </div>
            )}
              <p 
                className="already-have-account">
                  <a href="/login">Already have an account?
                  </a>
              </p>
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </div>
        </Form>
      </div>
    );
  }
}

export default Register;
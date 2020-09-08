// /* eslint-disable no-unused-vars */
// import React, { Component } from "react";
// import { BrowserRouter as Switch } from "react-router-dom";
// import axios from 'axios';
// import { API } from '../../config/config.utils'
// import "./Register.css";
// import { Checkbox } from "@material-ui/core";
// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";
// import { isEmail } from "validator";

// const required = value => {
//   if (!value) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This field is required!
//       </div>
//     );
//   }
// };

// const email = value => {
//   if (!isEmail(value)) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This is not a valid email.
//       </div>
//     );
//   }
// };

// class Register extends Component {

//   constructor(props){
//     super(props);

//     this.state = ({
//       username: '',
//       password: '',
//       passwordConfirm: '',
//       firstName: '',
//       lastName: '',
//       roles: 0,
//       email: '',
//       number: null,
//       selectedFile: [],
//         // formErrors: {
//         //   usernameTaken: false,
//         //   passwordNotMatch: false,
//         //   nameTooShort: false,
//         //   surnameTooShort: false,
//         //   emailInvalid: false,
//         //   selectedFileIssue: false 
//         // }
//     });

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);

//   }

//   fileSelectedHandler = e =>{
//     this.setState(
//       {selectedFile: e.target.files[0]}
//     )
//   }

//   roleSelectedHandler = e =>{
//     if (e.target.value === 'host') {
//       this.setState({[e.target.name]: 1})
//     }else if (e.target.value === 'tenant'){
//       this.setState({[e.target.name]: 2})
//     }else{
//       this.setState({[e.target.name]: 3})
//     }
//   }

//   handleSubmit = e => {
//     const {
//       username,
//       password,
//       firstName,
//       lastName,
//       email,
//       number,
//       selectedFile
//     } = this.state;
    
//     // alert ("Your role is " + this.roles.value )
//     // console.log(this);



//     // axios.post( API + 'register', {
//     //   user: {
//     //     username: username,
//     //     password: password,
//     //     firstName: firstName,
//     //     lastName: lastName,
//     //     email: email,
//     //     number: number,
//     //     photo: selectedFile
//     //   }
//     // }

//     // )
//     e.preventDefault();
//   };

//   handleChange = e => {
//     const target = e.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });

//     console.log (e.target)
//   };

//   render() {
//     return (
//       <div className ="sign-up-form">
//         <form 
//         className = "form-wrapper"
//         onSubmit = {this.handleSubmit}>
//           <br />

//           <div className = "form-wrapper">
//             <div className = "form-inner">
//               <h3>Sign-up</h3>
//               <table>
//                 <tbody>
//                   <tr>
//                     <td>
//                       <div className = "form-field">
//                         <label>Username</label>
//                         <input 
//                         name = "username"
//                         type = "username"

//                         className="form-control"
//                         onChange = {this.handleChange}
//                         />
//                       </div>
//                     </td>
//                     <td>
//                       <div className = "form-field">
//                         <label>Email address</label>
//                         <input 
//                         name = "email"
//                         type="email"

//                         className="form-control"
//                         onChange = {this.handleChange}
//                       />
//                       </div>
//                     </td>
//                   </tr>

//                   <tr>
//                     <td>
//                       <div className = "form-field">
//                         <label>Password</label>
//                         <input
//                         name = "password"
//                         type="password"

//                         className="form-control"
//                         onChange = {this.handleChange}
//                       />
//                       </div>
//                     </td>
//                     <td>
//                       <div className = "form-field">
//                         <label>Phone number</label>
//                         <input
//                         name = "number"
//                         type="tel"

//                         className="form-control"
//                         onChange = {this.handleChange}
//                         />
//                       </div>
//                     </td>
//                   </tr>

//                   <tr>
//                     <td>
//                       <div className = "form-field">
//                         <label>Confirm password</label>
//                         <input
//                         name = "passwordConfirm"
//                         type = "password"

//                         className = "form-control"
//                         onChange = {this.handleChange}
//                         />
//                       </div>
//                     </td>
//                     <td>
//                       <div
//                         className = "role-picker">
//                         <label>Select role(s)</label>
//                         <br />
//                         <div className = "roles"
//                         >
//                           <Checkbox
//                           name = "host"
//                           label = "Host"
//                           onChange = {this.handleChange}>
//                           </Checkbox>
//                           <p>Host</p>
//                           <Checkbox
//                           name = "tenant"
//                           label = "Tenant"
//                           onChange = {this.handleChange}
//                           >
//                           </Checkbox>
//                           <p>Tenant</p>
//                         </div>              
//                       </div>
//                     </td>
//                   </tr>

//                   <tr>
//                     <td>
//                       <div
//                         className = "form-field">
//                         <label>First name</label>
//                         <input
//                         name = " firstName"
//                         type = "text"

//                         className = "form-control"
//                         onChange = {this.handleChange}
//                         />
//                       </div>
//                     </td>
//                     <td>
//                       <div
//                         className = "profile-photo">
//                         <label>Profile photo</label>
//                         <br />
//                         <input
//                         name = "selectedFile"
//                         type = "file"

//                         onChange={this.fileSelectedHandler} />         
//                       </div>
//                     </td>              
//                   </tr>

//                   <tr>
//                     <td>
//                       <div className = "form-field">
//                         <label>Last name</label>
//                         <input
//                         name = "lastName"
//                         type="text"

//                         className = "form-control"
//                         onChange = {this.handleChange}
//                         />
//                       </div>
//                     </td>
//                     <td>
//                       <button 
//                         style = {{marginTop: '42px'}} 
//                         type = "submit" 
//                         className="submit-button btn btn-primary btn-block"
//                         onClick = {this.handleSubmit}
//                       >
//                         Submit
//                       </button>
//                     </td>
//                   </tr>  
//                 </tbody>
//               </table>
//               <p 
//                 className="already-have-account">
//                   <a href="/login">Already have an account?
//                   </a>
//               </p>
//             </div>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default Register;

import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import './Register.css';
import AuthService from "../../_services/authentication.service";
import { Checkbox } from "@material-ui/core";

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
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

// function isInt(value) {
//   var x;
//   return isNaN(value) ? !1 : (x = parseFloat(value), (0 | x) === x);
// }

// const vnumber = value => {
//   if (value.length !== 10 || !isInt(value)){
//     return (
//       <div className="alert alert-danger" role="alert">
//         Invalid number.
//       </div>
//     );
//   }
// }

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
      firstName: "",
      lastName: "",
      roles: 0,
      number: null,
      selectedFile: [],
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

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
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
      );
    }

    console.log(this.state)
  }

  render() {
    return (
      <div className="sign-up-form">
        <Form 
          autocomplete = 'off'
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
                          validations={[required]}
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
                          validations={[required]}
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
                          validations={[required]}
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
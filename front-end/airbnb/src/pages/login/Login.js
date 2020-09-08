// /* eslint-disable no-unused-vars */
// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState, Component } from "react";
// import "./Login.css"
// import { BrowserRouter as Switch, Link, Redirect } from "react-router-dom";
// import axios from "axios";
// import { API } from '../../config/config.utils'
// import { useAuth } from "../../context/auth";
// import { hexToRgb } from "@material-ui/core";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";


// // import { authenticationService } from '../../_services/authentication.service';

// const required = value => {
//     if (!value) {
//       return (
//         <div className="alert alert-danger" role="alert">
//           This field is required!
//         </div>
//       );
//     }
//   };

// class Login extends Component {

//     constructor(props){
//         super(props);

//         this.state = ({
//             isLoggedIn: false,
//             username: '',
//             password: '',
//             formErrors: '',
//         });

//         this.handleChange = this.handleChange.bind(this);
//         this.handleLogin = this.handleLogin.bind(this);
//     }

//     handleLogin = e => {
//         const {username, password} = this.state;
//         axios.post(
//             API + '/login',
//             {
//                 "username": username,
//                 "password": password
//             },
//             {withCredentials: true}
//         )
//         .then(response => {
//             // if (response.status === '200') {
//             //     // this.setAuthTokens(JSON.parse(response.data));
//             //     console.log('hello')
//             //     this.setState({[this.isLoggedIn]: true})
//             //     // return <Redirect to="/" />
//             // }
//             console.log(response)
//             console.log(this.state)
//             if (response.statusText === ''){
//                 this.setState.bind ({isLoggedIn: true})
//             }
//         })
//         .catch(error => {
//             console.log("login error", this.state);
//         });

//         e.preventDefault();
//     }

//     handleChange = e => {
//         const value = e.target.name === 'rememberMe' ? e.target.checked : e.target.value;

//         this.setState({
//             [e.target.name]: value
//         });
//     };

//     if (isLoggedIn) {
//         return <Redirect to="/" />;
//     }

//     render() {
//         return (
//             <form autoComplete='off' onSubmit={this.handleLogin}
//             ref = {c => {this.form = c;}} >
//                 <div className = "auth-wrapper">
//                     <div className = "auth-inner">
//                     <h3>Sign-in</h3>

//                         <div className = "form-field">
//                             <label>Username</label>
//                             <input 
//                             name = "username"
//                             type="username"
//                             className="form-control" 
//                             validations = {[required]}
//                             placeholder="Enter username"
//                             value = {this.state.value}
//                             onChange = {this.handleChange.bind(this)}
//                             required
//                             />
//                         </div>

//                         <div className = "form-field">
//                             <label>Password</label>
//                             <input 
//                             name = "password"
//                             type = "password" 
//                             className="form-control" 
//                             validations = {[required]}
//                             placeholder="Enter password"
//                             value = {this.state.value}
//                             onChange = {this.handleChange.bind(this)}
//                             required
//                             />
//                         </div>

//                         <div className = "form-field">
//                             <div className = "custom-control custom-checkbox">
//                                 <input 
//                                 name = "rememberMe"
//                                 type = "checkbox" className = "custom-control-input"id = "customCheck1"
//                                 value = {this.state.value}
//                                 />
//                                 <label className = "custom-control-label" htmlFor = "customCheck1">Remember me</label>
//                             </div>
//                         </div>

//                         <button type="submit" className="btn btn-primary btn-block"
//                         onClick={this.handleLogin.bind(this)}
//                         >
//                             Login
//                         </button>
//                         <p className="forgot-password">
//                             <a href="/register">Forgot password?</a>
//                         </p>
//                         <p
//                         className="no-account">Don't have an account?
//                             <Link className="nav-link" to={"/register"}>Sign up</Link>
//                         </p>
//                     </div>
//                 </div>
//             </form>
//         );
//     }
// }

// export default Login;

import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import './Login.css';
import AuthService from "../../_services/authentication.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
        username: "",
        password: "",
        loading: false,
        message: ""
        };
    }

    handleChange = e => {
        const value = e.target.name === 'rememberMe' ? e.target.checked : e.target.value;

        this.setState({
            [e.target.name]: value
        });
    };

    handleLogin(e) {
        e.preventDefault();

        this.setState({
        message: "",
        loading: true
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            AuthService.login(this.state.username, this.state.password).then(
                () => {
                this.props.history.push("/profile");
                window.location.reload();
                },
                error => {
                const resMessage =
                    (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message ||
                    error.toString();

                this.setState({
                    loading: false,
                    message: resMessage
                });
                }
            );
        } else {
            this.setState({
                loading: false
            });
        }

        console.log(this.state);
    }

    render() {
        return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <h3>Sign-in</h3>
                <Form autoComplete='off'
                    onSubmit={this.handleLogin}
                    ref={c => {
                    this.form = c;
                    }}
                >
                <div className="form-field">
                <label htmlFor="username">Username</label>
                <Input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder = "Enter username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    validations={[required]}
                />
                </div>

                <div className="form-field">
                <label htmlFor="password">Password</label>
                <Input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder = "Enter password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    validations={[required]}
                />
                </div>

                <div className="form-field">
                <button
                    className="btn btn-primary btn-block"
                    disabled={this.state.loading}
                >
                    {this.state.loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Login</span>
                </button>
                </div>

                {this.state.message && (
                <div className="form-field">
                    <div className="alert alert-danger" role="alert">
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
                <p className="forgot-password">
                    <a href="/register">Forgot password?</a>
                </p>
                <p
                className="no-account">Don't have an account?
                    <Link className="nav-link" to={"/register"}>Sign up</Link>
                </p>
            </Form>
            </div>
        </div>
        );
    }
}

export default Login;
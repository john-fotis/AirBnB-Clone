/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, Component } from "react";
import "./Login.css"
import { BrowserRouter as Switch, Link, Redirect } from "react-router-dom";
import axios from "axios";
import { API } from '../../config/config.utils'
import { useAuth } from "../../context/auth";

// import { authenticationService } from '../../_services/authentication.service';

const formValid = formErrors => {
    let valid = true;
    Object.values(formErrors).forEach(val => {val.length > 0 && (valid = false)});
    return valid;
}

class Login extends Component {

    constructor(props){
        super(props);

        this.state = ({
            isLoggedIn: false,
            username: '',
            password: '',
            formErrors: '',
        });

        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin = e => {
        const {username, password} = this.state;
        
        axios.post(
            API + '/login',
            {
                "username": username,
                "password": password
            },
            {withCredentials: true}
        )
        .then(response => {
            if (response.statusText === '200') {
                this.setAuthTokens(response.data);
                this.setState({[this.isLoggedIn]: true})
                // return <Redirect to="/" />
            }
        })
        .catch(error => {
            console.log("login error", this.state);
        });

        e.preventDefault();
    }

    handleChange = e => {
        e.preventDefault();
        const value = e.target.name === 'rememberMe' ? e.target.checked : e.target.value;

        this.setState({
            [e.target.name]: value
        });
    };

    if (isLoggedIn) {
        return <Redirect to="/" />;
    }

    render() {
        return (
            <form noValidate autoComplete='off' onSubmit={this.handleLogin} >
                <div className = "auth-wrapper">
                    <div className = "auth-inner">
                    <h3>Sign-in</h3>

                        <div className = "form-field">
                            <label>Username</label>
                            <input 
                            name = "username"
                            type="username"
                            className="form-control" placeholder="Enter username"
                            value = {this.state.value}
                            onChange = {this.handleChange.bind(this)}
                            required
                            />
                        </div>

                        <div className = "form-field">
                            <label>Password</label>
                            <input 
                            name = "password"
                            type = "password" className="form-control" placeholder="Enter password"
                            value = {this.state.value}
                            onChange = {this.handleChange.bind(this)}
                            required
                            />
                        </div>

                        <div className = "form-field">
                            <div className = "custom-control custom-checkbox">
                                <input 
                                name = "rememberMe"
                                type = "checkbox" className = "custom-control-input"id = "customCheck1"
                                value = {this.state.value}
                                />
                                <label className = "custom-control-label" htmlFor = "customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block"
                        onClick={this.handleLogin.bind(this)}
                        >
                            Login
                        </button>
                        <p className="forgot-password">
                            <a href="/register">Forgot password?</a>
                        </p>
                        <p
                        className="no-account">Don't have an account?
                            <Link className="nav-link" to={"/register"}>Sign up</Link>
                        </p>
                    </div>
                </div>
            </form>
        );
    }
}

export default Login;
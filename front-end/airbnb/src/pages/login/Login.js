import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import './Login.css';
import AuthService from "../../_services/authentication.service";
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

class Login extends Component {
    constructor(props) {
        super();
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
        this.setState({
            [e.target.name]: e.target.value
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
                history.push("/");
                window.location.reload();
                },
            ).catch(error => {
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
            });
        } else {
            this.setState({
                loading: false
            });
        }
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